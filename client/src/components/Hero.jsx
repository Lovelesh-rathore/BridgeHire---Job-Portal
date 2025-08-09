import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" bg-[#EAEDFF] h-[90vh] w-full">
        <div
          id="cont-out"
          className="flex flex-col h-[100%] justify-center items-center gap-15"
        >
          <div
            id="text"
            className="text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-mulish text-blue-950"
          >
            <div className="p-4 lg:flex md:grid grid lg:gap-5 text-5xl lg:text-6xl">
              <h1>Find the</h1>
              <h1>most exciting </h1>
              <h1>startup jobs</h1>
            </div>
          </div>
          <div
            id="srcBar"
            className="flex md:flex-row flex-col justify-center items-center md:gap-0 gap-4 w-100 md:w-auto"
          >
            <input
              type="text"
              className="bg-white p-4 md:rounded-none rounded-lg"
              placeholder="Job Tittle or keyword"
            />
            <select
              name="location"
              className="bg-white p-4 font-thin w-50 md:rounded-none rounded-lg"
            >
              <option className=" font-thin">Location BD</option>
              <option className=" font-thin">Location UK</option>
              <option className=" font-thin">Location US</option>
              <option className=" font-thin">Location Pk</option>
            </select>
            <button className="bg-pink-500 text-white hover:bg-pink-600 p-4 md:rounded-none rounded-lg">
              Find Job
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
