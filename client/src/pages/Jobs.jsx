import React, { useEffect, useState } from "react";
import ViewJobModal from "../components/Jobs/ViewJobModel";
import axios from "../config/api";
import { toast } from "react-hot-toast";
import { IoLocationOutline } from "react-icons/io5";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  // const [appliedJob, setAppliedJob] = useState(null);

  const fetchAllJobs = async () => {
    try {
      const res = await axios.get("/public/allJobs");
      setJobs(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handleViewJob = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  // const handleApply = (job) => {
  //   setAppliedJob(job);
  //   setModalOpen(false);
  //   alert(`Applied for: ${job.jobTitle} at ${job.company}`);
  // };

  return (
    <>
      <div id="text" className="headings text-center grid gap-6 mt-40">
        <span className="text-pink-500">Recent Job</span>
        <h2 className="text-5xl font-mulish">Available Jobs</h2>
      </div>

      {/* job Container */}

      <div id="cont-out" className=" grid gap-10 justify-center my-40">
        {jobs.length === 0 && <div>Loading jobs...</div>}
        {jobs.map((job, idx) => (
          <div
            key={idx}
            id="element"
            className="flex gap-4 p-5 hover:shadow-2xl "
          >
            <div id="e2" className=" flex flex-col gap-3 justify-center w-2/3">
              <div id="e2-1">
                <h5 className=" font-semibold">{job.jobTitle}</h5>
              </div>
              <div id="e2-2" className="flex gap-[5vw] text-gray-400">
                <span>{job.company}</span>

                <span className=" flex">
                  <IoLocationOutline />
                  {job.jobLocation}
                </span>
                <span>{job.salaryRange}</span>
              </div>
            </div>
            <div
              id="e3"
              className=" flex flex-col justify-center gap-3 pl-[10vw]"
            >
              <button
                className=" text-[#8b92dd] hover:bg-[#8b92dd] border rounded-3xl border-[#8b92dd] px-2 py-1 hover:text-white"
                onClick={() => handleViewJob(job)}
              >
                View Job
              </button>
              <span className=" text-gray-500">{job.postedTime}</span>
            </div>
          </div>
        ))}
      </div>
      <ViewJobModal
        isOpen={isModalOpen}
        isClose={() => setModalOpen(false)}
        job={selectedJob}
        // onApply={handleApply}
      />
    </>
  );
};

export default Jobs;
