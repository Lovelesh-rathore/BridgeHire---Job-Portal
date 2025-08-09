import React from "react";

const UploadCV = () => {
  return (
    <>
      <div
        id="main-cont"
        className=" bg-[rgba(0,0,0,0.6)] bg-blend-multiply bg-[url(cv_bg.jpg)] px-90 bg-no-repeat bg-center bg-cover"
      >
        <div id="con-head" className=" grid gap-7 text-center pt-30 pb-17 text-white">
          <h4>FEATURED TOURS PACKAGES</h4>
          <h1 className="font-mulish text-5xl">Make a Difference with Your Online Resume!</h1>
        </div>
        <div id="btn" className=" text-center pb-30">
          <button className=" text-white py-5 px-15 hover:bg-[#8b92dd] border rounded-3xl border-white hover:text-white">
            UPLOAD YOUR CV
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadCV;
