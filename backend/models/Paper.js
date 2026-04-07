import { Schema, model } from "mongoose";

const trackingSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      default: "",
      trim: true,
    },
    performedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const versionSchema = new Schema(
  {
    versionNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    url: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: {
      type: String,
      default: "",
      trim: true,
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const paperSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    abstract: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedEditor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    status: {
      type: String,
      enum: [
        "SUBMITTED",
        "CHIEF_EDITOR_REJECTED",
        "ASSIGNED_TO_EDITOR",
        "REVISION_REQUIRED",
        "AUTHOR_RESUBMITTED",
        "ACCEPTED",
        "REJECTED",
      ],
      default: "SUBMITTED",
    },
    tracking: {
      type: [trackingSchema],
      default: [],
    },
    versions: {
      type: [versionSchema],
      default: [],
    },
    keywords: {
      type: [String],
      default: [],
    },
    resubmissionCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    maxResubmission: {
      type: Number,
      default: 3,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

paperSchema.index({ authorId: 1, createdAt: -1 });
paperSchema.index({ assignedEditor: 1, status: 1 });
paperSchema.index({ status: 1, createdAt: -1 });

export default model("Paper", paperSchema);