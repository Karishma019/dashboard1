import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 z-50">
      <h2 className="text-2xl font-bold mb-4">Side NavBar</h2>
      <ul>
        <li className="mb-2">Item 1</li>
        <li className="mb-2">Item 2</li>
        <li className="mb-2">Item 3</li>
      </ul>
    </div>
  );
};

export default Navbar;
