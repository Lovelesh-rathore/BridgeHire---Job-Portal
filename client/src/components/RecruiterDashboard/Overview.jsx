import React from "react";

const Overview = () => {
  return (
    <>
      <div id="main-cont" className="grid gap-[5vh] m-5">
        <h1 className=" font-bold text-2xl">Overview</h1>

        <div id="pannel" className="grid grid-cols-3 gap-[7vw]">
          <div id="item-1" className=" bg-white rounded-2xl p-4">
            <p>Total applications</p>
            <h3 className="font-medium">12</h3>
          </div>
          <div id="item-2" className=" bg-white rounded-2xl p-4" >
            <p>Interviews Scheduled</p>
            <h3 className="font-medium">7</h3>
          </div>
          <div id="item-3" className=" bg-white rounded-2xl p-4">
            <p>Saved Jobs</p>
            <h3 className="font-medium">3</h3>
          </div>
        </div>

        <div id="recentJobs-cont" className="flex flex-col gap-10 ">
            <h3 className=" font-bold text-1xl">Recent Jobs</h3>
            <div id="job-list" className=" flex flex-col gap-[3vh]">
                <div id="item1" className=" bg-white rounded-2xl p-4 ">
                    <p className="font-medium">Senior Frontend Devloper</p>
                    <p>Google inc.</p>
                    <p>Applied on : 15 july 2025</p>
                    <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">In review</span>
                </div>
                <div id="item1" className=" bg-white rounded-2xl p-4 ">
                    <p className="font-medium">Senior Frontend Devloper</p>
                    <p>Google inc.</p>
                    <p>Applied on : 15 july 2025</p>
                    <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">In review</span>
                </div>
                <div id="item1" className=" bg-white rounded-2xl p-4 ">
                    <p className="font-medium">Senior Frontend Devloper</p>
                    <p>Google inc.</p>
                    <p>Applied on : 15 july 2025</p>
                    <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">In review</span>
                </div>
                <div id="item1" className=" bg-white rounded-2xl p-4 ">
                    <p className="font-medium">Senior Frontend Devloper</p>
                    <p>Google inc.</p>
                    <p>Applied on : 15 july 2025</p>
                    <span className=" bg-blue-100 px-2 py-1 rounded-2xl inline-block mt-3">In review</span>
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Overview;
