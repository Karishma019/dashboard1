import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Security Dashboard</h2>
      <ul className="flex flex-col gap-5">
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
