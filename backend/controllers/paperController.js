import mongoose from "mongoose";
import Paper from "../models/Paper.js";
import asyncHandler from "../exceptions/asyncHandler.js";
import { BadRequestError, NotFoundError } from "../exceptions/apiError.js";
import { uploadTocloudinary } from "../utils/cloudinary.js";

const PAPER_STATUS = {
  SUBMITTED: "SUBMITTED",
  ASSIGNED_TO_EDITOR: "ASSIGNED_TO_EDITOR",
  CHIEF_EDITOR_REJECTED: "CHIEF_EDITOR_REJECTED",
  REVISION_REQUIRED: "REVISION_REQUIRED",
  AUTHOR_RESUBMITTED: "AUTHOR_RESUBMITTED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
};

const CHIEF_ACTION = {
  ACCEPT: "accept",
  REJECT: "reject",
};

const EDITOR_ACTION = {
  REQUEST_REVISION: "request_revision",
  ACCEPT: "accept",
  REJECT: "reject",
};

const ALLOWED_UPDATE_FIELDS = ["title", "abstract", "keywords"];

const ensureId = (id) => {
  if (!id || !mongoose.Types.ObjectId.isValid(String(id))) {
    throw new BadRequestError("Invalid ID format");
  }
};

const getPaperOrThrow = async (id) => {
  ensureId(id);
  const paper = await Paper.findById(id);
  if (!paper) throw new NotFoundError("Paper not found");
  return paper;
};

const addTracking = (paper, status, performedBy, comments = "") => {
  paper.tracking.push({
    status,
    comments,
    performedBy,
    date: new Date(),
  });
};

const sendResponse = (res, status, message, data = undefined, meta = {}) => {
  const response = { success: true, message, ...meta };

  if (data !== undefined) {
    response.data = data;
    if (Array.isArray(data)) response.count = data.length;
  }

  return res.status(status).json(response);
};

const requireFields = (body, fields = []) => {
  const missing = fields.filter(
    (field) => body[field] === undefined || body[field] === null || body[field] === ""
  );

  if (missing.length > 0) {
    throw new BadRequestError(`Missing required field(s): ${missing.join(", ")}`);
  }
};

const pickAllowedFields = (source = {}, allowed = []) => {
  return allowed.reduce((acc, key) => {
    if (source[key] !== undefined) acc[key] = source[key];
    return acc;
  }, {});
};

const canCurrentUserEditPaper = (user, paper) => {
  if (!user) return false;
  return user.role === "admin" || String(user.userId) === String(paper.assignedEditor);
};

export const createPaper = asyncHandler(async (req, res) => {
  if (!req.file) throw new BadRequestError("File is required");

  const { title, abstract, authorId, keywords = [] } = req.body;
  requireFields(req.body, ["title", "abstract", "authorId"]);
  ensureId(authorId);

  const { secure_url: url } = await uploadTocloudinary(req.file.buffer);

  const paper = await Paper.create({
    title: title.trim(),
    abstract: abstract.trim(),
    authorId,
    url,
    status: PAPER_STATUS.SUBMITTED,
    resubmissionCount: 0,
    maxResubmission: 3,
    keywords: Array.isArray(keywords) ? keywords : [keywords].filter(Boolean),
    versions: [
      {
        versionNumber: 1,
        url,
        uploadedBy: authorId,
        comments: "Initial submission",
        uploadedAt: new Date(),
      },
    ],
    tracking: [
      {
        status: PAPER_STATUS.SUBMITTED,
        comments: "Initial submission",
        performedBy: authorId,
        date: new Date(),
      },
    ],
  });

  return sendResponse(res, 201, "Paper submitted successfully", paper);
});

export const chiefEditorDecision = asyncHandler(async (req, res) => {
  const { paperId } = req.params;
  const { action, editorId, comments = "" } = req.body;

  const paper = await getPaperOrThrow(paperId);

  if (action === CHIEF_ACTION.ACCEPT) {
    requireFields(req.body, ["editorId"]);
    ensureId(editorId);

    paper.status = PAPER_STATUS.ASSIGNED_TO_EDITOR;
    paper.assignedEditor = editorId;
  } else if (action === CHIEF_ACTION.REJECT) {
    paper.status = PAPER_STATUS.CHIEF_EDITOR_REJECTED;
    paper.assignedEditor = null;
  } else {
    throw new BadRequestError("Invalid action");
  }
  console.log(req.user.userId);
  addTracking(paper, paper.status, req.user.userId, comments);
  await paper.save();

  return sendResponse(
    res,
    200,
    `Paper ${action === "accept" ? "accepted" : "rejected"} by Chief Editor`,
    paper
  );
});

export const editorReview = asyncHandler(async (req, res) => {
  const { paperId } = req.params;
  const { action, comments = "" } = req.body;

  const paper = await getPaperOrThrow(paperId);

  if (!canCurrentUserEditPaper(req.user, paper)) {
    throw new BadRequestError("You are not assigned to this paper");
  }

  if (action === EDITOR_ACTION.REQUEST_REVISION) {
    if (paper.resubmissionCount >= paper.maxResubmission) {
      throw new BadRequestError("Maximum resubmission limit reached");
    }
    paper.status = PAPER_STATUS.REVISION_REQUIRED;
  } else if (action === EDITOR_ACTION.ACCEPT) {
    paper.status = PAPER_STATUS.ACCEPTED;
  } else if (action === EDITOR_ACTION.REJECT) {
    paper.status = PAPER_STATUS.REJECTED;
  } else {
    throw new BadRequestError("Invalid action");
  }
  addTracking(paper, paper.status, req.user.userId, comments);
  await paper.save();

  return sendResponse(res, 200, `Editor decision: ${action}`, paper);
});

export const authorResubmit = asyncHandler(async (req, res) => {
  const { paperId } = req.params;
  const { comments = "" } = req.body;

  if (!req.file) throw new BadRequestError("File is required for resubmission");

  const paper = await getPaperOrThrow(paperId);
  console.log("PaperId ", paper.authorId);
  console.log("UserId ", req.user.userId);
  if (String(paper.authorId) !== String(req.user.userId)) {
    throw new BadRequestError("Only the author can resubmit this paper");
  }

  if (paper.status !== PAPER_STATUS.REVISION_REQUIRED) {
    throw new BadRequestError("Resubmission is only allowed when revision is required");
  }

  if (paper.resubmissionCount >= paper.maxResubmission) {
    throw new BadRequestError("Maximum resubmission limit reached");
  }

  const { secure_url: url } = await uploadTocloudinary(req.file.buffer);



  paper.url = url;
  paper.resubmissionCount = paper.resubmissionCount + 1;;
  paper.status = PAPER_STATUS.AUTHOR_RESUBMITTED;

  paper.versions.push({
    versionNumber: paper.resubmissionCount + 1,
    url,
    uploadedBy: req.user.userId,
    comments,
    uploadedAt: new Date(),
  });

  addTracking(
    paper,
    PAPER_STATUS.AUTHOR_RESUBMITTED,
    req.user.userId,
    comments || `Resubmission #${paper.resubmissionCount}`
  );

  await paper.save();

  return sendResponse(res, 200, "Paper resubmitted successfully", paper);
});

export const getPaperById = asyncHandler(async (req, res) => {
  const { paperId } = req.params;
  ensureId(paperId);

  const paper = await Paper.findById(paperId)
    .populate("authorId assignedEditor tracking.performedBy versions.uploadedBy")
    .lean();

  if (!paper) throw new NotFoundError("Paper not found");

  return sendResponse(res, 200, "Paper fetched successfully", paper);
});

export const getAllPaper = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const skip = (page - 1) * limit;

  const total = await Paper.countDocuments();
  const papers = await Paper.find()
    .populate("authorId assignedEditor")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const pages = Math.ceil(total / limit);

  return sendResponse(res, 200, "Papers fetched successfully", papers, {
    pagination: {
      total,
      page,
      limit,
      pages,
    },
  });
});

export const updatePaper = asyncHandler(async (req, res) => {
  const { paperId } = req.params;
  ensureId(paperId);

  const paper = await getPaperOrThrow(paperId);

  if (req.user.role !== "admin" && String(req.user.userId) !== String(paper.authorId)) {
    throw new BadRequestError("You are not allowed to update this paper");
  }

  const updates = pickAllowedFields(req.body, ALLOWED_UPDATE_FIELDS);

  if (Object.keys(updates).length === 0) {
    throw new BadRequestError("No valid fields provided for update");
  }

  if (updates.title) updates.title = updates.title.trim();
  if (updates.abstract) updates.abstract = updates.abstract.trim();
  if (updates.keywords && Array.isArray(updates.keywords)) {
    updates.keywords = updates.keywords.map((k) => String(k).trim()).filter(Boolean);
  }

  const updatedPaper = await Paper.findByIdAndUpdate(paperId, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedPaper) throw new NotFoundError("Paper not found");

  return sendResponse(res, 200, "Paper updated successfully", updatedPaper);
});

export const getAllPaperByAuthorId = asyncHandler(async (req, res) => {
  const { authorId } = req.params;
  ensureId(authorId);

  const papers = await Paper.find({ authorId })
    .populate("assignedEditor")
    .lean();

  return sendResponse(res, 200, "Author papers fetched successfully", papers);
});

export const deletePaper = asyncHandler(async (req, res) => {
  const { paperId } = req.params;
  ensureId(paperId);

  const deletedPaper = await Paper.findByIdAndDelete(paperId);
  if (!deletedPaper) throw new NotFoundError("Paper not found");

  return sendResponse(res, 200, "Paper deleted successfully");
});