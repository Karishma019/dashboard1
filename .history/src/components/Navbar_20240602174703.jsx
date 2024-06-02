import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg fixed h-full w-96 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-lg">Security Dashboard</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
