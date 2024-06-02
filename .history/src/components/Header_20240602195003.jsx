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
    <header className="bg-gray-800 h-20 border-b border-b-gray-700 shadow-lg flex items-center w-full">
      <div className="flex justify-between">
        <SlMenu />
        <div className="flex">
          {isDarkMode ? <CiLight /> : <MdOutlineDarkMode />}
          <IoMdQrScanner />
          <IoMdNotificationsOutline />
          <FaUser />
        </div>
      </div>
    </header>
  );
}

export default Header;
