import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";

const Header = ({ toggleSidebar }) => {
    return (
        <header className="bg-white shadow p-4 border-b-2 flex justify-between items-center ">

            <div className="flex justify-center items-center space-x-5 text-3xl">
                <button onClick={toggleSidebar} >
                    <IoMdMenu className="cursor-pointer" onClick={toggleSidebar} />
                </button>
                <div className="flex items-center justify-center space-x-2 text-[#3855B3] text-2.5xl font-bold">
                    <div className="w-5 h-7 rounded-r-full bg-[#3855B3]"></div>
                   <div>Dlex</div></div>
            </div>

            <div className="flex items-center space-x-5">

                <button className="text-gray-600 hover:text-gray-800 text-2xl">
                    <IoSearch />

                </button>
                <button className="ml-4 relative text-gray-600 hover:text-gray-800 text-2xl">
                    <IoMdNotificationsOutline />
                    <div className="absolute w-2 h-2 bg-red-500 rounded-full top-0 -right-1"></div>

                </button>

                <div>
                    <Image src="/profile.png" alt="Profile" width={35} height={35} className="ml-4 rounded-full" />
                </div>

            </div>
        </header>
    );
};

export default Header;
