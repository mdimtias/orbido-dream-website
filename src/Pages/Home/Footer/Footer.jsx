import React from "react";
import Logo from "./../../../assets/Logo/logo.png";
import Instagram from "./../../../assets/Social/instagram.png";
import Facebook from "./../../../assets/Social/facebook.png";
import Twitter from "./../../../assets/Social/twitter.png";
import Linkedin from "./../../../assets/Social/linkedin.png";
const Footer = () => {
  return (
    <>
    <footer className="bg-primary py-10 border-b-2 border-solid border-[#3F3E45]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid lg:grid-cols-4 gap-5">
          <div className="brand-area">
            <div className="flex gap-5 items-center">
              <img src={Logo} alt="Orbido" />
              <h3 className="font-bold uppercase text-white text-2xl">
                OR<span className="text-[#BB8102]">BIDO</span>
              </h3>
            </div>
            <p className="text-lg font-normal font-poppins text-white opacity-70 mt-5">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="links">
            <h3 className="text-lg font-medium font-poppins text-white mb-5">
              Usefull Links
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Content
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Create
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Explore
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Terms & Services
                </a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 className="text-lg font-medium font-poppins text-white mb-5">
              Community
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                 Partners
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Suggestion
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Explore
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                 Newsletter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                 Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 className="text-lg font-medium font-poppins text-white mb-5">
              Partners
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                  Our Partner
                </a>
              </li>
              <li className="mb-2">
                <a
                  href=""
                  className="text-base font-normal font-poppins text-white opacity-70"
                >
                 Become a Partner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright bg-primary py-5">
    <div className="container mx-auto px-5 flex justify-between flex-wrap gap-5">
    <div className="items-center">
            <p className="text-white opacity-70 font-poppins text-lg">Copyright &copy; 2023 Orbido. All Rights Reserved.</p>
        </div>
        <div className="social flex gap-5 items-center justify-center">
            <img src={Instagram} alt="Instagram" />
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Linkedin} alt="Linkedin" />
        </div>
    </div>
    </div>
    </>
  );
};

export default Footer;
