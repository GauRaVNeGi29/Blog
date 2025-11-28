import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  }

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        {/* Logo */}
        <div onClick={() => goToHomePage()} className=" tracking-wide cursor-pointer group transition-colors duration-400 ease-in-out">
          {/* <img src="/setu-logo.png" alt="" width={200} /> */}
          <p className="font-amatic text-2xl tracking-[2px] font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-400 ease-in-out">SETU STORE</p>
          <p className="font-amatic text-7xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-400 ease-in-out">BUZZ</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;