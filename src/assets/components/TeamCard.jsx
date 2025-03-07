import React from "react";

function TeamCard({ icon, name, job, para }) {
  return (
    <div className="border border-b-4 border-[#191A23] m-5 relative p-5 rounded-2xl cursor-pointer">
      <img
        src="linkin.png"
        className="absolute top-1 right-1 md:top-2.5 md:right-2.5 w-7 "
        alt=""
      />
      <div className="flex items-center justify-start">
        <img src={`${icon}.png`} alt="" />
        <div className="ml-2">
          <p className="text-2xl md:text-3xl font-bold ">{name}</p>
          <p className="text-m ml-1.5 ">{job} </p>
        </div>
      </div>
      <div className="border border-[#191A23] w-[98%] mx-auto my-4"></div>
      <p className="my-6"> {para} </p>
    </div>
  );
}

export default TeamCard;
