import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-center border-b border-b-gray-700 py-6">
        Alex John
      </h2>
      <ul className="flex flex-col gap-5 p-2">
        <li className="p-2 bg-gray-700 rounded-lg flex-gap">
          <IoHomeOutline />
          Home
        </li>
        <li className="p-2 hover:bg-gray-700 transition rounded-lg">
          Alert Breakdown
        </li>
        <li className="p-2 hover:bg-gray-700 transition rounded-lg">
          Source IP Analysis
        </li>
        <li className="p-2 hover:bg-gray-700 transition rounded-lg">
          Top Ports Scanned
        </li>
        <li className="p-2 hover:bg-gray-700 transition rounded-lg">
          Alert Timeline
        </li>
        <li className="p-2 hover:bg-gray-700 transition rounded-lg">
          Real-time Updates
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
