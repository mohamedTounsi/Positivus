import React from "react";

function ServiceBox({ title, titlebg, arrow, bgcolor, learnMore, image }) {
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="rounded-2xl  flex justify-evenly items-center h-[300px] border border-b-4 border-[#191A23]   "
    >
      <div className="flex flex-col gap-25 items-start ">
        <p
          style={{ backgroundColor: titlebg }}
          className="rounded-[5px] font-semibold px-[15px] py-[5px] max-w-[220px]  text-2xl   "
        >
          {title}
        </p>
        <div className="flex justify-start items-center gap-3 ">
          <img src={`${arrow}.png`} alt="" />
          <p className="font-semibold">{learnMore}</p>
        </div>
      </div>
      <div>
        <img src={`${image}.png`} alt="" />
      </div>
    </div>
  );
}

export default ServiceBox;
