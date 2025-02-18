import React from "react";

function ServiceBox({ title, titlebg, arrow, bgcolor, learnMore, image }) {
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="rounded-2xl  flex flex-col md:flex-row justify-evenly items-center py-9 md:py-14 border border-b-4 border-[#191A23] gap-5  "
    >
      <div className="flex flex-col gap-5 md:gap-25 items-start order-2 md:order-1 ">
        <p
          style={{ backgroundColor: titlebg }}
          className="rounded-[5px] font-semibold px-[6px] py-[3px] md:px-[15px] md:py-[5px] text-lg md:text-2xl   "
        >
          {title}
        </p>
        <div className="flex justify-start items-center gap-3 ">
          <img src={`${arrow}.png`} alt="" />
          <p className="font-semibold">{learnMore}</p>
        </div>
      </div>
      <div className="w-5/10 md:w-3/10">
        <img
          src={`${image}.png`}
          className="w-full order-2 md:order-1 "
          alt=""
        />
      </div>
    </div>
  );
}

export default ServiceBox;
