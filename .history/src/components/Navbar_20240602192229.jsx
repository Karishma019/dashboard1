import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0">
      <h2 className="text-2xl font-bold pb-12 text-center border-b border-b-gray-700">
        Alex John
      </h2>
      <ul className="flex flex-col gap-5 mt-4">
        <li className="py-2 bg-gray-700">Home</li>
        <li>Alert Breakdown</li>
        <li>Source IP Analysis</li>
        <li>Top Ports Scanned</li>
        <li>Alert Timeline</li>
        <li>Real-time Updates</li>
      </ul>
    </div>
  );
};

export default Navbar;
