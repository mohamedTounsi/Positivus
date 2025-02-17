import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="w-[85%] mx-auto flex justify-between items-center pt-[30px]">
        <div className="w-[200px]  mr-[20px]">
          <img
            src="/src/assets/images/logo.png"
            className=" ml-[10px] cursor-pointer "
            alt="Logo"
          />
        </div>

        <div className="md:hidden mr-[10px]">
          <button className="text-gray-700 cursor-pointer" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex md:justify-between md:items-center gap-[20px] whitespace-nowrap ">
          <li className="cursor-pointer relative group ">
            About Us
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group ">
            Services{" "}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group ">
            Use Cases{" "}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group ">
            Pricing{" "}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group ">
            Blog{" "}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#B0FA00] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="border px-[15px] py-[10px] rounded-[7px]">
            Request a quote
          </li>
        </ul>
      </div>

      <div
        className={`fixed z-50 bg-[#B9FF66] bottom-0 left-0 right-0 h-[60%] w-[100%] rounded-2xl pl-3.5 pt-5 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="flex flex-col font-semibold">
          <li>
            <img
              src="/src/assets/images/logo.png"
              className="mb-4 cursor-pointer"
              alt="Logo"
            />
          </li>
          <li className="cursor-pointer relative group py-3.5 border-b border-[#808080] w-[90%] ">
            About Us
          </li>
          <li className="cursor-pointer relative group py-3.5 border-b border-[#808080] w-[90%]">
            Services
          </li>
          <li className="cursor-pointer relative group py-3.5 border-b border-[#808080] w-[90%]">
            Use Cases
          </li>
          <li className="cursor-pointer relative group  py-3.5 border-b border-[#808080] w-[90%]">
            Pricing
          </li>
          <li className="cursor-pointer relative group py-3.5 border-b border-[#808080] w-[90%]">
            Blog
          </li>
          <li className="border px-[15px]  py-[10px] rounded-[7px] w-fit cursor-pointer mt-5">
            Request a quote
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
