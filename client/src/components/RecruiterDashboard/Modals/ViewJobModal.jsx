import React from "react";
import { SlClose } from "react-icons/sl";

const ViewJobModal = ({ isOpen, isClose, selectedJob }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div id="bgContainer" className=" fixed inset-0 bg-black/50 p-30">
        <div
          id="mainContainer"
          className=" h-[80vh] w-full max-w-4xl mx-auto border bg-white rounded-xl overflow-y-auto scrollbar-hide"
        >
          <div
            id="header"
            className=" flex justify-between py-5 px-10 border-b-2 sticky top-0 bg-pink-50"
          >
            <h1 className="text-2xl">View Posted Jobs</h1>
            <button onClick={isClose}>
              <SlClose className="text-2xl text-red-500" />
            </button>
          </div>
          <div id="content" className="p-7 flex flex-col gap-[1vh]">
            <h2 className=" font-bold text-2xl">{selectedJob?.jobTitle}</h2>
            <p>
              <strong>Company: </strong>
              {selectedJob?.company}
            </p>
            <p>
              <strong>Location: </strong>
              {selectedJob?.jobLocation}
            </p>
            <p>
              <strong>Salary Range: </strong>
              {selectedJob?.salaryRange}
            </p>
            <p>
              <strong>Work Mode: </strong>
              {selectedJob?.workMode}
            </p>
            <p>
              <strong>Job Type: </strong>
              {selectedJob?.jobType}
            </p>
            <p>
              <strong>Description: </strong>
              {selectedJob?.description}
            </p>
            <p>
              <strong>Posted On: </strong>
              {new Date(selectedJob?.postedDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Preferred Qualification: </strong>
              {selectedJob?.preferedQualification}
            </p>
            <p>
              <strong>Number of Openings: </strong>
              {selectedJob?.numberOfOpenings}
            </p>
            <p>
              <strong>Experience Required: </strong>
              {selectedJob?.experienceRequired}
            </p>
            <p>
              <strong>Application Deadline: </strong>
              {new Date(selectedJob?.applicationDeadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJobModal;
