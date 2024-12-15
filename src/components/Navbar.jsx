import React from "react";

const Navbar = () => {
  return (
    <nav className="gradient-gray border-r border-b border-1  border-gray-600 px-2 sm:px-16 md:px-20 lg:px-28 text-white flex justify-between rounded-b-2xl items-center py-3">
      {/* Logo */}
      <div className="">
        <img src="/images/logo.png" alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 sm:gap-10 items-center">
        <button className="border border-white px-3 sm:px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300">
          Learn
        </button>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          About
        </a>
        <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
