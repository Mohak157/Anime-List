import React from "react";

const Navbar = () => {
  return (
    <header className="w-full absolute top-0  z-50 bg-transparent text-white">
      <nav className="max-w-7xl  px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl text-gray-100 left-0 font-zentry-regular.woff"><b>A</b>NIME <b>L</b>IST</h1>
        <div className="space-x-6 absolute right-10 text-lg">
          <a href="#" className="hover:text-gray-300 hover:underline">HOME</a>
          <a href="#about" className="hover:text-gray-300 hover:underline">NEWS</a>
          <a href="#footer" className="hover:text-gray-300 hover:underline">LEARN MORE</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
