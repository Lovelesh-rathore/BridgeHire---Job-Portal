import React from "react";
import { MdContentPasteSearch } from "react-icons/md";

const Working = () => {
  return (
    <>
      <div id="cont-main" className=" bg-[url(how-applybg.png)] py-2 mb-30">
        <div id="text" className="headings text-center grid gap-6 my-25">
          <span className="text-pink-500">Apply process</span>
          <h2 className="text-5xl font-mulish text-white">How it works</h2>
        </div>
        <div id="cont-element" className=" flex justify-center gap-5 mx-[10vw] my-[5vh] p-10">
          <div id="ele" className="bg-[#26317f] text-white w-[25vw] text-center p-10 flex flex-col gap-5">
            <MdContentPasteSearch className="m-auto text-7xl" />
            <h2 className="text-xl font-bold">1. Search a job</h2>
            <h6>
              Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
              incididunt ut laborea.
            </h6>
          </div>
          <div id="ele" className="bg-[#26317f] text-white w-[25vw] text-center p-10 flex flex-col gap-5">
            <MdContentPasteSearch className="m-auto text-7xl" />
            <h2 className="text-xl font-bold">1. Search a job</h2>
            <h6>
              Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
              incididunt ut laborea.
            </h6>
          </div>
          <div id="ele" className="bg-[#26317f] text-white w-[25vw] text-center p-10 flex flex-col gap-5">
            <MdContentPasteSearch className="m-auto text-7xl" />
            <h2 className="text-xl font-bold">1. Search a job</h2>
            <h6>
              Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor
              incididunt ut laborea.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
