import React, { useEffect } from "react";
import axios from "../../config/api";
import {
  FiBriefcase,
  FiSend,
  FiAward,
  FiCalendar,
  FiX,
  FiMinus,
  FiBookmark,
} from "react-icons/fi";

const Overview = () => {
  const [allJobs, setAllJobs] = React.useState([]);

  const fetchAllJobs = async () => {
    try {
      const response = await axios.get("/user/allJobs");
      const data = response.data.data;
      setAllJobs(data);
    } catch (error) {
      console.error("Error fetching jobs", error);
    }
  };

  useEffect(()=>{
    fetchAllJobs();
  },[])

  return (
    <>
      <div id="main-cont" className="grid gap-[5vh] m-5">
        <h1 className=" font-bold text-2xl">Overview</h1>

        <div id="pannel" className="grid grid-cols-4 gap-[2vw]">
          <div id="item-1" className=" bg-white rounded-2xl p-4">
            <p>Total Jobs</p>
            <h3 className="font-medium">{allJobs.length}</h3>
          </div>
          <div id="item-2" className=" bg-white rounded-2xl p-4">
            <p>Applied Jobs</p>
            <h3 className="font-medium">{allJobs.filter((job)=>job.status === "applied").length}</h3>
          </div>
          <div id="item-3" className=" bg-white rounded-2xl p-4">
            <p>Offered Jobs</p>
            <h3 className="font-medium">{allJobs.filter((job)=> job.status==="offered").length}</h3>
          </div>
          <div id="item-3" className=" bg-white rounded-2xl p-4">
            <p>Interviews</p>
            <h3 className="font-medium">{allJobs.filter((job)=> job.status==="interview").length}</h3>
          </div>
          <div id="item-3" className=" bg-white rounded-2xl p-4">
            <p>Rejected</p>
            <h3 className="font-medium">{allJobs.filter((job)=> job.status==="rejected").length}</h3>
          </div>
          <div id="item-3" className=" bg-white rounded-2xl p-4">
            <p>Withdrawn</p>
            <h3 className="font-medium">{allJobs.filter((job)=> job.status==="withdrawn").length}</h3>
          </div>
          <div id="item-3" className=" bg-white rounded-2xl p-4">
            <p>Saved Jobs</p>
            <h3 className="font-medium">{allJobs.filter((job)=> job.status==="saved").length}</h3>
          </div>
        </div>
        <div id="recentJobs-cont" className="flex flex-col gap-10 ">
          <h3 className=" font-bold text-1xl">Recent Jobs</h3>
          <div id="job-list" className=" flex flex-col gap-[3vh]">
            <div id="item1" className=" bg-white rounded-2xl p-4 ">
              <p className="font-medium">Senior Frontend Devloper</p>
              <p>Google inc.</p>
              <p>Applied on : 15 july 2025</p>
              <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">
                In review
              </span>
            </div>
            <div id="item1" className=" bg-white rounded-2xl p-4 ">
              <p className="font-medium">Senior Frontend Devloper</p>
              <p>Google inc.</p>
              <p>Applied on : 15 july 2025</p>
              <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">
                In review
              </span>
            </div>
            <div id="item1" className=" bg-white rounded-2xl p-4 ">
              <p className="font-medium">Senior Frontend Devloper</p>
              <p>Google inc.</p>
              <p>Applied on : 15 july 2025</p>
              <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">
                In review
              </span>
            </div>
            <div id="item1" className=" bg-white rounded-2xl p-4 ">
              <p className="font-medium">Senior Frontend Devloper</p>
              <p>Google inc.</p>
              <p>Applied on : 15 july 2025</p>
              <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">
                In review
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
