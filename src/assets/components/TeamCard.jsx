import React from "react";

function TeamCard({ icon, name, job, para }) {
  return (
    <div className="border border-b-4 border-[#191A23] m-5 relative p-5 rounded-2xl cursor-pointer">
      <img
        src="/src/assets/images/linkin.png"
        className="absolute top-4 right-4 "
        alt=""
      />
      <div className="flex items-center justify-start">
        <img src={`/src/assets/images/${icon}.png`} alt="" />
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
