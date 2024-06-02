import { SlMenu } from "react-icons/sl";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <header className="bg-gray-800 h-20 border-b border-b-gray-700 shadow-lg flex items-center text-4xl px-2">
      <div className="flex justify-between w-full">
        <SlMenu className="bg-gray-600 p-2 rounded cursor-pointer" />
        <div className="flex gap-2">
          {isDarkMode ? (
            <CiLight className="bg-gray-600 p-2 rounded" />
          ) : (
            <MdOutlineDarkMode className="bg-gray-600 p-2 rounded" />
          )}
          <IoMdQrScanner className="bg-gray-600 p-2 rounded" />
          <IoMdNotificationsOutline className="bg-gray-600 p-2 rounded" />
          <FaUser className="bg-gray-600 p-2 rounded" />
        </div>
      </div>
    </header>
  );
}

export default Header;
