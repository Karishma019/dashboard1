import { SlMenu } from "react-icons/sl";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

function Header() {
  return (
    <header className="bg-gray-800 h-20 border-b border-b-gray-700 shadow-lg">
      <div>
        <SlMenu />
        <div>
          <CiLight />
          <MdOutlineDarkMode />
          <IoMdQrScanner />
          <IoMdNotificationsOutline />
          <FaUser />
        </div>
      </div>
    </header>
  );
}

export default Header;
