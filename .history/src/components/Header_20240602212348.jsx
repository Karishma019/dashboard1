import { SlMenu } from "react-icons/sl";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

function Header({ handleMode, isDarkMode, handleNavBar }) {
  return (
    <header
      className={`${
        isDarkMode
          ? "bg-gray-800 border-b-gray-700"
          : "bg-gray-100 border-b-gray-200"
      } h-20 border-b  shadow-lg flex items-center text-4xl px-4 fixed w-full z-10`}
    >
      <div className="flex justify-between w-full container">
        <SlMenu
          className="bg-gray-400 p-2 rounded cursor-pointer"
          onClick={handleNavBar}
        />
        <div className="flex gap-2">
          <div onClick={handleMode}>
            {isDarkMode ? (
              <CiLight className="bg-gray-400 p-2 rounded cursor-pointer" />
            ) : (
              <MdOutlineDarkMode className="bg-gray-400 p-2 rounded cursor-pointer" />
            )}
          </div>
          <IoMdQrScanner className="bg-gray-400 p-2 rounded cursor-pointer" />
          <IoMdNotificationsOutline className="bg-gray-400 p-2 rounded cursor-pointer" />
          <FaUser className="bg-gray-400 p-2 rounded cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
