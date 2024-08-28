"use client"
import { RiExpandUpDownFill } from "react-icons/ri";
import { GiBubbles } from "react-icons/gi";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { GiFiles } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";


const Sidebar = ({ isOpen, toggleSidebar }) => {

  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 768 && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);
  return (
    <>
      <aside ref={sidebarRef} className={`bg-white p-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full hidden'
        }`}>
        <div className="flex justify-between items-center py-3 px-4 rounded-md bg-[#F8F8FA] text-gray-700 font-bold mb-6">
          <div className='bg-[#ED6700] w-8 h-8 rounded-full flex justify-center items-center text-xs text-white'>
            DW
          </div>
          <div>
            <p className='text-sm'>Dlex workspace</p>
            <p className='text-xs text-gray-400'>5 members</p>
          </div>
          <p className="text-black"><RiExpandUpDownFill /></p>
        </div>
        <div>
          <p className="text-sm text-gray-500">GENERAL</p>
          <ul className="mt-2">
            <li className=" mb-4 bg-[#EFF1F9] py-2 rounded-md px-4">
              <Link href="#" className="flex items-center space-x-2 text-[#3F5BB6] hover:text-blue-700">
                <GiBubbles />
                <p>Overview</p></Link>
            </li>
            <li className=" mb-4  py-2 rounded-md px-4">
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700">
                <IoSettingsOutline />
                <p>Settings</p></Link>
            </li>
          </ul>

          <p className="text-sm text-gray-500 mt-5">MAIN MENU</p>
          <ul>
            <li className=" py-2 rounded-md px-4">
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700">
                <GiFiles />
                <p>All files</p></Link>
            </li>
            <li className="py-2 rounded-md px-4">
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700">
                <FaRegClock />
                <p>Recent</p></Link>
            </li>
            <li className="py-2 rounded-md px-4">
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700">
                <IoDocumentTextOutline />
                <p>Docs</p></Link>
            </li>
            <li className="   py-2 rounded-md px-4">
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700">
                <MdOutlinePhotoSizeSelectActual />
                <p>Photos</p></Link>
            </li>
            <li className="   py-2 rounded-md px-4">
              <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700">
                <IoTrashOutline />
                <p>Trash</p></Link>
            </li>
          </ul>
        </div>

        <div className="mt-7">
          <div className="border rounded-md space-y-2 p-4">
            <div className="text-sm flex justify-between items-center">
              <p className="font-medium">Storage</p>
              <p className="font-medium text-blue-800">Upgrade</p>
            </div>
            <p className="text-xs"><span className="font-medium">3.4 GB</span> <span className="text-gray-400">of 15 GB</span> </p>
            <div className='h-1.5 bg-slate-100 rounded-full'>
                    <div className='rounded-l-full h-1.5 w-[20%] bg-[#3855B3]'></div>
                </div>
          </div>

          <button className="bg-[#3855B3] text-white w-[100%] mt-4 py-3 mx-auto rounded"> + Create new</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;