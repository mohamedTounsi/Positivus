import React from "react";

function Title({ title, parag }) {
  return (
    <section className="w-[85%] mx-auto mb-[50px]  ">
      <div className="flex flex-col md:flex-row justify-start items-center gap-[25px] ">
        <p className="bg-[#B9FF66] text-[#191A23] text-3xl rounded-md p-1.5 font-semibold ">
          {title}
        </p>
        <p className="text-center md:text-start max-w-full">{parag} </p>
      </div>
    </section>
  );
}

export default Title;
