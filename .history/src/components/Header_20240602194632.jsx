import { SlMenu } from "react-icons/sl";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header className="bg-gray-800 h-20 border-b border-b-gray-700 shadow-lg">
      <div>
        <SlMenu />
        <MdOutlineDarkMode />
        <IoMdQrScanner />
        <IoMdNotificationsOutline />
      </div>
    </header>
  );
}

export default Header;
