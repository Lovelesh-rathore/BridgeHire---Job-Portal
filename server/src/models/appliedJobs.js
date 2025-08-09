import mongoose from "mongoose";

const appliedJobSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recruiterID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    appliedOn: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: [
        "applied",
        "interview",
        "offered",
        "rejected",
        "saved",
        "withdrawn",
      ],
      default: "applied",
    },
  },
  {
    timestamps: true,
  }
);

const AppliedJobs = mongoose.model("AppliedJobs", appliedJobSchema);
export default AppliedJobs;
