import React from "react";
import job1 from "../assets/job-list1.png";
import job2 from "../assets/job-list2.png";
import job3 from "../assets/job-list3.png";
import job4 from "../assets/job-list4.png";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const FeaturedJob = () => {
  return (
    <>
      <div
        id="text"
        className="headings text-center grid gap-6 mt-40"
      >
        <span className="text-pink-500">Recent Job</span>
        <h2 className="text-5xl font-mulish">Featured Jobs</h2>
      </div>

      <div id="cont-out" className=" grid gap-10 justify-center my-40">
        <div id="element" className="flex gap-4 p-5 hover:shadow-2xl">
          <div id="e1">
            <Link>
              <img src={job1} alt="" />
            </Link>
          </div>
          <div id="e2" className=" flex flex-col gap-3 justify-center">
            <div id="e2-1">
              <h5 className=" font-semibold">Digital Marketer</h5>
            </div>
            <div id="e2-2" className="flex gap-[5vw] text-gray-400">
              <span>Creative Agency</span>

              <span className=" flex">
                <IoLocationOutline />
                Athens, Greece
              </span>
              <span>$3500 - $4000</span>
            </div>
          </div>
          <div
            id="e3"
            className=" flex flex-col justify-center gap-3 pl-[10vw]"
          >
            <button className=" text-[#8b92dd] hover:bg-[#8b92dd] border rounded-3xl border-[#8b92dd] px-2 py-1 hover:text-white">
              Full Time
            </button>
            <span className=" text-gray-500">7 Hours ago</span>
          </div>
        </div>
        <div id="element" className="flex gap-4 p-5 hover:shadow-2xl">
          <div id="e1">
            <Link>
              <img src={job2} alt="" />
            </Link>
          </div>
          <div id="e2" className=" flex flex-col gap-3 justify-center">
            <div id="e2-1">
              <h5 className=" font-semibold">Digital Marketer</h5>
            </div>
            <div id="e2-2" className="flex gap-[5vw] text-gray-400">
              <span>Creative Agency</span>

              <span className=" flex">
                <IoLocationOutline />
                Athens, Greece
              </span>
              <span>$3500 - $4000</span>
            </div>
          </div>
          <div
            id="e3"
            className=" flex flex-col justify-center gap-3 pl-[10vw]"
          >
            <button className=" text-[#8b92dd] hover:bg-[#8b92dd] border rounded-3xl border-[#8b92dd] px-2 py-1 hover:text-white">
              Full Time
            </button>
            <span className=" text-gray-500">7 Hours ago</span>
          </div>
        </div>
        <div id="element" className="flex gap-4 p-5 hover:shadow-2xl">
          <div id="e1">
            <Link>
              <img src={job3} alt="" />
            </Link>
          </div>
          <div id="e2" className=" flex flex-col gap-3 justify-center">
            <div id="e2-1">
              <h5 className=" font-semibold">Digital Marketer</h5>
            </div>
            <div id="e2-2" className="flex gap-[5vw] text-gray-400">
              <span>Creative Agency</span>

              <span className=" flex">
                <IoLocationOutline />
                Athens, Greece
              </span>
              <span>$3500 - $4000</span>
            </div>
          </div>
          <div
            id="e3"
            className=" flex flex-col justify-center gap-3 pl-[10vw]"
          >
            <button className=" text-[#8b92dd] hover:bg-[#8b92dd] border rounded-3xl border-[#8b92dd] px-2 py-1 hover:text-white">
              Full Time
            </button>
            <span className=" text-gray-500">7 Hours ago</span>
          </div>
        </div>
        <div id="element" className="flex gap-4 p-5 hover:shadow-2xl">
          <div id="e1">
            <Link>
              <img src={job4} alt="" />
            </Link>
          </div>
          <div id="e2" className=" flex flex-col gap-3 justify-center">
            <div id="e2-1">
              <h5 className=" font-semibold">Digital Marketer</h5>
            </div>
            <div id="e2-2" className="flex gap-[5vw] text-gray-400">
              <span>Creative Agency</span>

              <span className=" flex">
                <IoLocationOutline />
                Athens, Greece
              </span>
              <span>$3500 - $4000</span>
            </div>
          </div>
          <div
            id="e3"
            className=" flex flex-col justify-center gap-3 pl-[10vw]"
          >
            <button className=" text-[#8b92dd] hover:bg-[#8b92dd] border rounded-3xl border-[#8b92dd] px-2 py-1 hover:text-white">
              Full Time
            </button>
            <span className=" text-gray-500">7 Hours ago</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJob;
