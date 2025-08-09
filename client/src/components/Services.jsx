import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

const jobCategory = [
  {
    icon: FaUserGraduate,
    title: "Design & Creative",
    count: 630,
  },
  {
    icon: MdOutlineDesignServices,
    title: "Design & Development",
    count: 630,
  },
  {
    icon: IoBagHandle,
    title: "Sales & Marketing",
    count: 630,
  },
  {
    icon: FaMobileScreenButton,
    title: "Mobile Application",
    count: 630,
  },
  {
    icon: LuConstruction,
    title: "Construction",
    count: 630,
  },
  {
    icon: GrTechnology,
    title: "Information Technology",
    count: 630,
  },
  {
    icon: MdOutlineRealEstateAgent,
    title: "Real Estate",
    count: 630,
  },
  {
    icon: TbWriting,
    title: "Content Writer",
    count: 630,
  },
];

const Services = () => {
  return (
    <>
      <div id="cont-main">
        <div
          id="text"
          className="headings text-center grid gap-6 mt-[30vh] mb-30"
        >
          <span className="text-pink-500">FEATURED TOURS PACKAGES</span>
          <h2 className="text-3xl md:text-5xl font-mulish">
            Browse Top Categories{" "}
          </h2>
        </div>
        <div
          id="components"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-[10vw]"
        >
          {jobCategory.map((element, index) => (
            <div
              className="flex border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
              key={index}
            >
              <element.icon className=" text-5xl mx-auto" />
              <a href="#">{element.title}</a>
              <span>({element.count})</span>
            </div>
          ))}
        </div>
        <div id="btn" className="flex justify-center my-30">
          <button className="bg-white text-[#8b92dd] py-5 px-15 hover:bg-[#8b92dd] border border-[#8b92dd] hover:text-white">
            BROWSE ALL SECTORS
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
