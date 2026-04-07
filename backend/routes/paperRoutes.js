import express from "express";
import multer from "multer";
import {
  createPaper,
  updatePaper,
  getAllPaperByAuthorId,
  getPaperById,
  getAllPaper,
  deletePaper,
  chiefEditorDecision,
  editorReview,
  authorResubmit,
} from "../controllers/paperController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const Router = express.Router();

// Put specific route before "/:paperId"
Router.get(
  "/author/:authorId",
  authMiddleware,
  allowRoles("author", "admin", "chief_editor", "editor"),
  getAllPaperByAuthorId
);

Router.route("/")
  .post(authMiddleware,
    // allowRoles("author", "admin") ,
    upload.single("pdf"), createPaper)
  .get(authMiddleware, allowRoles("admin", "chief_editor"), getAllPaper);

Router.route("/:paperId")
  .get(authMiddleware, allowRoles("admin", "author", "editor", "chief_editor"), getPaperById)
  .patch(authMiddleware, allowRoles("author", "admin"), updatePaper)
  .delete(authMiddleware, allowRoles("admin"), deletePaper);

Router.patch(
  "/:paperId/chief-decision",
  authMiddleware,
  allowRoles("chief_editor", "author", "admin"),
  chiefEditorDecision
);

Router.patch(
  "/:paperId/editor-review",
  authMiddleware,
  allowRoles("editor", "admin"),
  editorReview
);

Router.post(
  "/:paperId/resubmit",
  authMiddleware,
  allowRoles("author", "admin"),
  upload.single("pdf"),
  authorResubmit
);

export default Router;