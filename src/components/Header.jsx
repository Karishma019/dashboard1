import { SlMenu } from "react-icons/sl";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

function Header({ handleMode, isDarkMode }) {
  return (
    <header
      className={`${
        isDarkMode
          ? "bg-gray-800 border-b-gray-700"
          : "bg-gray-100 border-b-gray-200"
      } h-20 border-b  shadow-lg flex items-center text-4xl px-4 `}
    >
      <div className="flex justify-between w-full   ">
        <SlMenu className="bg-[#76c5c5] p-2 rounded cursor-pointer" />
        <div className="flex gap-2">
          <div onClick={handleMode}>
            {isDarkMode ? (
              <CiLight className="bg-[#76c5c5] p-2 rounded cursor-pointer" />
            ) : (
              <MdOutlineDarkMode className="bg-[#76c5c5] p-2 rounded cursor-pointer" />
            )}
          </div>
          <IoMdQrScanner className="bg-[#76c5c5] p-2 rounded cursor-pointer" />
          <IoMdNotificationsOutline className="bg-[#76c5c5] p-2 rounded cursor-pointer" />
          <FaUser className="bg-[#76c5c5] p-2 rounded cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
