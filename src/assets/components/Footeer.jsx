import React from "react";

function Footeer() {
  return (
    <section>
      <div className="bg-[#191A23] w-full lg:w-[80%] mx-auto lg:rounded-tl-4xl lg:rounded-tr-4xl  ">
        <div className="w-full lg:w-[95%] mx-auto flex flex-col lg:flex-row justify-around items-center pt-7 mb-5 lg:mb-15">
          <img src="whitelogo.png" className="mb-7 lg:mb0 cursor-pointer" />
          <ul className="text-white flex flex-col lg:flex-row justify-between items-center gap-5 cursor-pointer  ">
            <li className="relative group">
              About us
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Services
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Use Cases
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Pricing
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Blog
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <div className="hidden lg:block">
            <div className="flex justify-between items-center gap-2 cursor-pointer ">
              <img src="linkedin.png" alt="" />
              <img src="facebook.png" alt="" />
              <img src="twitter.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-[87%] mx-auto">
          <div className="text-white font-thin flex flex-col items-center lg:items-start gap-4 mb-5 lg:mb-0 ">
            <p className="bg-[#B9FF66] text-[#191A23] font-semibold w-fit p-0.5 rounded-lg">
              Contact Us :
            </p>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
          <div className="bg-[#292A32] p-7 md:p-9 lg:p-10 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-7 mb-6">
            <input
              type="text"
              placeholder="Email"
              className="text-white border-white border bg-transparent rounded-lg px-8 py-4"
            />
            <button className="text-[#191A23] bg-[#B9FF66] rounded-lg px-8 py-4 w-full cursor-pointer ">
              Subscribe to news
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 lg:hidden cursor-pointer ">
          <img src="linkedin.png" alt="" />
          <img src="facebook.png" alt="" />
          <img src="twitter.png" alt="" />
        </div>

        <div className="border-t border-white border-th my-14 w-[87%] mx-auto "></div>
        <div className="flex flex-col lg:flex-row justify-start gap-7 items-center text-white w-[87%] mx-auto pb-10">
          <p className="cursor-pointer">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}

export default Footeer;
