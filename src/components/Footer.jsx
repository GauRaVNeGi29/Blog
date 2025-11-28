import React from "react";
import Logo from "/setu-logo.png"; // replace with your logo path

const Footer = () => {

  
   const goToHomePage = () => {
  window.open("https://setustore.com", "_blank");
};


  return (
    <footer className="text-black py-12 px-6 text-center">
      {/* Logo */}
      <div className="mb-4">
        {/* <img src={Logo} onClick={goToHomePage} alt="SetuStore Logo" className="mx-auto h-20 w-auto cursor-pointer" /> */}
        <a href="https://setustore.com/" target="blank">
        <p className="font-amatic text-7xl font-bold text-gray-800 hover:text-teal-700 transition-colors duration-400 ease-in-out">SETU STORE</p>
        </a>
      </div>

      {/* Brief description */}
      <p className="font-quick text-gray-700 max-w-lg mx-auto mb-8">
        Discover more than products — discover stories.
      </p>

      {/* Separator line */}
      <hr className="border-gray-300 mb-4" />

      {/* Copyright info */}
      <p className="font-quick text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SetuStore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
