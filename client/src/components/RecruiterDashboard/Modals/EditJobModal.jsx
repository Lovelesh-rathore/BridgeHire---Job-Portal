import React, { useEffect, useState } from "react";
import { SlClose } from "react-icons/sl";
import axios from "../../../config/api";
import { toast } from "react-hot-toast";

const EditJobModal = ({ isOpen, isClose, selectedJob }) => {
  if (!isOpen) {
    return null;
  }

  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    jobLocation: "",
    salaryRange: "",
    workMode: "",
    jobType: "",
    description: "",
    preferedQualification: "",
    numberOfOpenings: "",
    experienceRequired: "",
    applicationDeadline: "",
  });

  useEffect(() => {
    if (selectedJob && isOpen) {
      setFormData({
        jobTitle: selectedJob.jobTitle || "",
        company: selectedJob.company || "",
        jobLocation: selectedJob.jobLocation || "",
        salaryRange: selectedJob.salaryRange || "",
        workMode: selectedJob.workMode || "",
        jobType: selectedJob.jobType || "",
        description: selectedJob.description || "",
        preferedQualification: selectedJob.preferedQualification || "",
        numberOfOpenings: selectedJob.numberOfOpenings || "",
        experienceRequired: selectedJob.experienceRequired || "",
        applicationDeadline: selectedJob.applicationDeadline
          ? new Date(selectedJob.applicationDeadline)
              .toISOString()
              .split("T")[0]
          : "",
      });
    }
  }, [selectedJob, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/recruiter/editJob/${selectedJob._id}`, formData);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    }
    handleCancel();
  };

  const handleCancel = () => {
    setFormData({
      jobTitle: "",
      company: "",
      jobLocation: "",
      salaryRange: "",
      workMode: "",
      jobType: "",
      description: "",
      preferedQualification: "",
      numberOfOpenings: "",
      experienceRequired: "",
      applicationDeadline: "",
    });
    isClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 p-30 z-50">
        <div className="h-[80vh] w-full max-w-4xl mx-auto border bg-white rounded-xl overflow-y-auto scrollbar-hide">
          <div className="flex justify-between py-5 px-10 border-b-2 sticky top-0 bg-pink-50">
            <h1 className="text-2xl font-bold text-gray-800">Edit Job</h1>
            <button onClick={handleCancel}>
              <SlClose className="text-2xl text-red-500 hover:text-red-700" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Range
                </label>
                <input
                  type="text"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                  placeholder="e.g., $50,000 - $70,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Mode <span className="text-red-400">*</span>
                </label>
                <select
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Select Work Mode</option>
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type <span className="text-red-400">*</span>
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Openings
                </label>
                <input
                  type="number"
                  name="numberOfOpenings"
                  value={formData.numberOfOpenings}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Required (years)
                </label>
                <input
                  type="text"
                  name="experienceRequired"
                  value={formData.experienceRequired}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description <span className="text-red-400">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Describe the job responsibilities, requirements, and qualifications..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Qualifications
              </label>
              <textarea
                name="preferedQualification"
                value={formData.preferedQualification}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="List preferred qualifications, skills, or certifications..."
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:pink-pink-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditJobModal;
