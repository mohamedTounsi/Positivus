import React from "react";

function Happen() {
  return (
    <div className="bg-[#F3F3F3] mt-20 rounded-2xl flex justify-around items-center w-[80%] mx-auto p-10 mb-17 ">
      <div className="mx-auto md:ml-15 flex flex-col items-center md:items-start justify-between  gap-8 h-fit  ">
        <p className="text-3xl font-semibold text-center md:text-start">
          Let’s make things happen !{" "}
        </p>
        <p className="max-w-[50%] text-center md:text-start">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="px-[18px] cursor-pointer py-[14px] bg-[#191A23] text-white rounded-xl w-[230px] ">
          Get your free proposal
        </button>
      </div>
      <div>
        <img
          className="hidden md:block cursor-pointer "
          src="frame.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Happen;
