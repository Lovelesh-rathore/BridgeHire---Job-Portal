import React from "react";

const SavedJobs = () => {
  return (
    <>
      <div id="main-cont" className="grid gap-[5vh] m-5">
        <div id="savedJobs-cont" className="flex flex-col gap-10 ">
          <h3 className=" font-bold text-2xl">Saved Jobs</h3>
          <div id="job-list" className=" flex flex-col gap-[3vh]">
            <div id="items" className=" bg-white rounded-2xl p-4 flex">
              <div id="content" className=" w-9/10">
                <p className="font-medium">Senior Frontend Devloper</p>
                <p className=" text-gray-500">Google inc.</p>
                <p className=" text-gray-500">Applied on : 15 july 2025</p>
              </div>
              <div id="button" className=" flex items-center">
                <button className=" bg-pink-500 text-white px-3 py-1.5 rounded-2xl">
                  Apply Now
                </button>
              </div>
            </div>
            <div id="items" className=" bg-white rounded-2xl p-4 flex">
              <div id="content" className=" w-9/10">
                <p className="font-medium">Senior Frontend Devloper</p>
                <p className=" text-gray-500">Google inc.</p>
                <p className=" text-gray-500">Applied on : 15 july 2025</p>
              </div>
              <div id="button" className=" flex items-center">
                <button className=" bg-pink-500 text-white px-3 py-1.5 rounded-2xl">
                  Apply Now
                </button>
              </div>
            </div>
            <div id="items" className=" bg-white rounded-2xl p-4 flex">
              <div id="content" className=" w-9/10">
                <p className="font-medium">Senior Frontend Devloper</p>
                <p className=" text-gray-500">Google inc.</p>
                <p className=" text-gray-500">Applied on : 15 july 2025</p>
              </div>
              <div id="button" className=" flex items-center">
                <button className=" bg-pink-500 text-white px-3 py-1.5 rounded-2xl">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedJobs;
