import { FaLaptop } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
function Header() {
  return <header className="bg-primary w-full p-4 font-bold text-lg flex items-center  justify-between">
    <h1>
        React Blog
    </h1>
    <FaLaptop className="text-3xl flex-shrink-0 hidden lg:block"/>
    <FaTabletAlt className="text-3xl flex-shrink-0 hidden md:block sm:block lg:hidden"/>
    <MdOutlinePhoneIphone className="text-3xl flex-shrink-0 block sm:hidden "/>

    
    

  </header>
}

export default Header
