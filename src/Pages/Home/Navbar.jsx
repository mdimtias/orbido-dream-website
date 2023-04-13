import React, { useState } from "react";
import Logo from "./../../assets/Logo/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <section className="bg-primary h-24 flex flex-col sm:flex-row justify-center items-center relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <img src={Logo} alt="Orbido" />
              <h3 className="font-bold uppercase text-white text-2xl">
                OR<span className="text-[#BB8102]">BIDO</span>
              </h3>
            </div>
            <nav className="sm:flex sm:justify-end hidden">
              <ul className="sm:flex">
                <li className="px-4 font-poppins text-base text-white opacity-70 hover:opacity-100">
                  Home
                </li>
                <li className="px-4 font-poppins text-base text-white opacity-70 hover:opacity-100">
                  About Us
                </li>
                <li className="px-4 font-poppins text-base text-white opacity-70 hover:opacity-100">
                  Features
                </li>
                <li className="px-4 font-poppins text-base text-white opacity-70 hover:opacity-100">
                  Solution
                </li>
              </ul>
            </nav>
            {/* Mobile Menu Button  */}
            <button
              onClick={toggleMenu}
              type="button"
              className="block sm:hidden text-gray-900 hover:text-white focus:text-white focus:outline-none mr-5"
            >
              <svg
                className="h-6 w-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu  */}
        <nav
        className={`bg-primary w-full absolute top-[100%] ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="mt-2">
          <li className="px-4 pb-1 font-poppins text-base text-white opacity-70 hover:opacity-100">
            Home
          </li>
          <li className="px-4 pb-1 font-poppins text-base text-white opacity-70 hover:opacity-100">
            About Us
          </li>
          <li className="px-4 pb-1 font-poppins text-base text-white opacity-70 hover:opacity-100">
            Features
          </li>
          <li className="px-4 pb-1 font-poppins text-base text-white opacity-70 hover:opacity-100">
            Solution
          </li>
        </ul>
      </nav>
      </section>
    </>
  );
};

export default Navbar;
