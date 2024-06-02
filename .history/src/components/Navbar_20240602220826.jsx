import { IoHomeOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { RiScanLine } from "react-icons/ri";
import { MdOutlineViewTimeline } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { IoPieChartOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Navbar = ({ isDarkMode }) => {
  return (
    <div className="w-72 flex flex-col gap-5">
      <h2
        className={`text-2xl font-bold text-center border-b py-6 text-[#4BC0C0] ${
          isDarkMode ? "border-b-gray-700" : "border-b-gray-300"
        }`}
      >
        Alex John
      </h2>
      <ul className="flex flex-col gap-5 p-2 font-semibold cursor-pointer">
        <li className="p-2 bg-[#4BC0C0] rounded-lg flex gap-2 items-center">
          <IoHomeOutline />
          Home
        </li>
        <li className="p-2 hover:bg-[#4BC0C0] transition rounded-lg flex gap-2 items-center">
          <IoPieChartOutline />
          Alert Breakdown
        </li>
        <li className="p-2 hover:bg-[#4BC0C0] transition rounded-lg flex gap-2 items-center">
          <IoAnalytics />
          Source IP Analysis
        </li>
        <li className="p-2 hover:bg-[#4BC0C0] transition rounded-lg flex gap-2 items-center">
          <RiScanLine />
          Top Ports Scanned
        </li>
        <li className="p-2 hover:bg-[#4BC0C0] transition rounded-lg flex gap-2 items-center">
          <MdOutlineViewTimeline />
          Alert Timeline
        </li>
        <li className="p-2 hover:bg-[#4BC0C0] transition rounded-lg flex gap-2 items-center">
          <MdOutlineUpdate />
          Real-time Updates
        </li>
        <li className="p-2 hover:bg-[#4BC0C0] transition rounded-lg flex gap-2 items-center">
          <IoIosLogOut />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
