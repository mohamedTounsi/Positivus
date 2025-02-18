import React from "react";

function Contactus() {
  return (
    <section className="mb-10">
      <div className="bg-[#F3F3F3] w-[80%] mx-auto rounded-xl flex justify-between items-center py-3  ">
        <div className="flex flex-col items-center gap-10 w-full lg:w-7/10  ">
          <div className="flex gap-2.5 justify-start mt-7 w-[90%]">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="customRadio"
                value="option1"
                className="hidden peer"
              />
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-[#191A23] peer-checked:bg-[#B9FF66]">
                <div className="w-3 h-3 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
              </div>
              <span className="text-lg">Say Hi</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="customRadio"
                value="option1"
                className="hidden peer"
              />
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-[#191A23] peer-checked:bg-[#B9FF66]">
                <div className="w-3 h-3 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
              </div>
              <span className="text-lg">Get a Quote</span>
            </label>
          </div>
          <div className="w-[90%]">
            <p className="mb-3">Name</p>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg bg-white w-full lg:w-[500px] border-[#191A23] pl-3 py-1 h-12 "
            />
          </div>
          <div className="w-[90%]">
            <p className="mb-3">Email</p>
            <input
              type="text"
              placeholder="Email"
              className="border rounded-lg bg-white w-full lg:w-[500px] border-[#191A23] pl-3 py-1 h-12 "
            />
          </div>
          <div className="w-[90%]">
            <p className="mb-3">Message</p>
            <textarea
              name=""
              id=""
              placeholder="Type here..."
              className="border rounded-lg bg-white w-full lg:w-[500px] border-[#191A23] pl-3 py-1 h-35 "
            ></textarea>
          </div>
          <div className="w-[90%]">
            <button
              className="bg-[#191A23] text-white rounded-lg w-full lg:w-[500px] py-3.5 cursor-pointer
          "
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="halfimage.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contactus;
