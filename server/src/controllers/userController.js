import Job from "../models/jobModel.js";
import User from "../models/userModels.js";
import AppliedJobs from "../models/appliedJobs.js";

export const JobApply = async (req, res, next) => {
  try {
    const JobId = req.params.id;
    const UserId = req.user._id;

    const JobDetails = await Job.findById(JobId);
    if (!JobDetails) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      return next(error);
    }

    const recruiterID = JobDetails.userid;

    const recruiterDetails = await User.findById(recruiterID);
    if (!recruiterDetails) {
      const error = new Error("Recruiter not found");
      error.statusCode = 404;
      return next(error);
    }

    const alreadyApplied = await AppliedJobs.findOne({
      jobId: JobId,
      userId: UserId,
      status: "applied",
    });

    if (alreadyApplied) {
      const error = new Error("You have already applied for this job");
      error.statusCode = 400;
      return next(error);
    }

    const appliedJob = {
      jobId: JobId,
      userId: UserId,
      recruiterID: recruiterID,
      status: "applied",
    };

    const appliedJobDetails = await AppliedJobs.create(appliedJob);
    res.status(200).json({ message: "Job Applied Successfully" });
  } catch (error) {
    next(error);
  }
};

export const JobSave = async (req, res, next) => {
  try {
    const JobId = req.params.id;
    const UserId = req.user._id;

    const JobDetails = await Job.findById(JobId);

    if (!JobDetails) {
      const error = new Error("Job not found");
      error.statusCode = 404;
      return next(error);
    }

    const RecruiterID = JobDetails.userid;

    const recruiterDetails = await User.findById(RecruiterID);
    if (!recruiterDetails) {
      const error = new Error("Recruiter not found");
      error.statusCode = 404;
      return next(error);
    }

    const alreadySaved = await AppliedJobs.findOne({
      jobId: JobId,
      userId: UserId,
      status: "saved",
    });

    if (alreadySaved) {
      const error = new Error("You have already saved this job");
      error.statusCode = 400;
      return next(error);
    }

    const savedJob = {
      jobId: JobId,
      userId: UserId,
      recruiterID: RecruiterID,
      status: "saved",
    };

    const savedJobDetails = await AppliedJobs.create(savedJob);
    res.status(200).json({
      message: "Job saved Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const JobWithdraw = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const UserId = req.user._id;

    const appliedJob = await AppliedJobs.findOne({
      _id: applicationId,
      userId: UserId,
    });

    if (!appliedJob) {
      const error = new Error(
        "Application not found or you do not have permission to withdraw this application"
      );
      error.statusCode = 404;
      return next(error);
    }

    if (appliedJob.status === "withdrawn") {
      const error = new Error("Application already withdrawn");
      error.statusCode = 400;
      return next(error);
    }

    appliedJob.status = "withdrawn";
    await appliedJob.save();

    res.status(200).json({
      message: "Job application withdrawn successfully",
      data: appliedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const JobApplySaved = async (req, res, next) => {
  try {
    const applicationId = req.query.applicationId;
    const UserId = req.user._id;

    if (!applicationId) {
      const error = new Error("Application ID is required");
      error.statusCode = 400;
      return next(error);
    }

    const appliedJob = await AppliedJobs.findOne({
      _id: applicationId,
      userId: UserId,
    });

    if (!appliedJob) {
      const error = new Error(
        "Application not found or you do not have permission to apply for this job"
      );
      error.statusCode = 404;
      return next(error);
    }

    if (appliedJob.status !== "saved") {
      const error = new Error("Application is not in saved status");
      error.statusCode = 400;
      return next(error);
    }

    appliedJob.status = "applied";
    await appliedJob.save();

    res.status(200).json({
      message: "Job application submitted successfully",
      data: appliedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const JobUnsave = async (req, res, next) => {
  try {
    const applicationId = req.params.id;
    const UserId = req.user._id;

    const appliedJob = await AppliedJobs.findByIdAndDelete({
      _id: applicationId,
      userId: UserId,
    });

    if (!appliedJob) {
      const error = new Error(
        "savd job not found or you do not have permission to unsave this job"
      );
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      message: "Job unsaved successfully",
      data: appliedJob,
    });
  } catch (error) {
    next(error);
  }
};

export const GetAllJobs = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const jobs = await AppliedJobs.find({ userId: userId });

    if (!jobs || jobs.length === 0) {
      const error = new Error("No jobs found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({ message: "All jobs fetched", data: jobs });
  } catch (error) {
    next(error);
  }
};

export const AllAppliedJobs = async (req, res, next) => {
  try {
    const userId = req.user._id;

    console.log(userId);

    const appliedJobs = await AppliedJobs.find({
      userId,
      status: { $ne: "saved" },
    })
      .populate("jobId")
      .populate("recruiterID");

    if (!appliedJobs || appliedJobs.length === 0) {
      const error = new Error("No applied jobs found");
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({
      message: "All Applied Jobs Fetched",
      data: appliedJobs,
    });
  } catch (error) {
    console.error("Error in AllAppliedJobs:", error);
    next(error);
  }
};

export const AllSavedJobs = async (req, res, next) => {
  try {
    console.log( "testing");
    
    const userId = req.user._id;

    const savedJobs = await AppliedJobs.find({
      userId,
      status: "saved",
    })
      .populate("jobId")
      .populate("recruiterID");

    if (!savedJobs || savedJobs.length === 0) {
      const error = new Error("No saved Jobs found");
      error.statusCode = 404;
      return next(error);
    }

    res
      .status(200)
      .json({ message: "All saved Jobs Fetched", data: savedJobs });
  } catch (error) {
    next(error);
  }
};
