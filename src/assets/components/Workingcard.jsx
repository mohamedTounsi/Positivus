import React, { useState } from "react";

function Workingcard({ number, question, parag }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      onClick={() => setAccordionOpen(!accordionOpen)}
      className={`bg-[#F3F3F3] rounded-2xl font-semibold border border-b-4 border-[#191A23] my-10 cursor-pointer transition-all duration-300 ease-in-out ${
        accordionOpen ? "bg-[#b2f85c]" : "bg-[#F3F3F3]"
      }  `}
    >
      <div className="flex items-center justify-between px-10 py-8">
        <div className="flex items-center justify-start gap-4 ">
          <p className="text-4xl lg:text-5xl">{number}</p>
          <p className="text-md md:text-2xl lg:text-3xl ">{question}</p>
        </div>
        {accordionOpen ? (
          <img src="minusicon.png" className="w-[50px]" />
        ) : (
          <img src="plusicon.png" className="w-[50px]" />
        )}
      </div>
      <div
        className={` grid overflow-hidden transition-all duration-300 ease-in-out text-lg ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }
        `}
      >
        <div className="overflow-hidden w-[98%] mx-auto">
          <div className="border w-[99%] mx-auto "></div>
          <div className="px-5 my-6  ">{parag}</div>
        </div>
      </div>
    </div>
  );
}

export default Workingcard;
