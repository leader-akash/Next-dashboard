import Image from 'next/image';
import React from 'react';
import { MdFolderShared } from "react-icons/md";
import { IoMdFolder } from "react-icons/io";
import { IoMdImage } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import RecentTable from './RecentTable';

const Content = () => {

   const cardData = [
    {
        id: 1,
        icon: <MdFolderShared />,
        name: "Shared files",
        files: '1.200 files',
        storage: '3.2 GB',
        bgColor: 'bg-[#FAF0E7]',
        iconColor: 'text-pink-800'
        
    },
    {
        id: 2,
        icon: <IoMdImage />,
        name: "Media",
        files: '1.200 files',
        storage: '3.8 GB',
        bgColor: 'bg-[#FFF8E1]',
        iconColor: 'text-orange-500'

    },
    {
        id: 3,
        icon: <IoDocumentTextSharp />,
        name: "Documents",
        files: '1.200 files',
        storage: '3.2 GB',
        bgColor: 'bg-[#E1F5FD]',
        iconColor: 'text-purple-600'

    },
    {
        id: 4,
        icon: <IoMdFolder />,
        name: "Others",
        files: '1.200 files',
        storage: '24 MB',
        bgColor: 'bg-[#E8F5E9]',
        iconColor: 'text-green-600'

    },
   ]

    return (
        <main className="p-4 ">
            <h1 className="text-2xl font-bold text-gray-700 border-b-2 pb-3">Overview</h1>
            <div className='flex flex-wrap justify-between items-center bg-[#F8F8FA] rounded-xl pt-3 px-5 mt-6'>
                <div className="text-black  space-y-5 mt-4 mb-8 px-3">
                    <h3>Upgrade account</h3>
                    <p>100 GB storage, Access to Dlex support experts, Option to add your family, Extra member benefits.</p>
                    <button className="bg-[#3855B3]  text-white py-2 px-4 rounded">
                        Upgrade Account
                    </button>
                </div>
                <div className='hidden  relative w-56 h-44  lg:block'>
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                    />
                </div>
            </div>

            <div className='mt-8 space-y-3.5 mb-8'>
                <div className='flex justify-between'>
                    <p><b>Storage overview</b></p>
                    <p><b>3.4 GB </b> of 15GB</p>
                </div>

                <div className='h-2.5 bg-slate-100 rounded-full'>
                    <div className='rounded-l-full h-2.5 w-[20%] bg-[#3855B3]'></div>
                </div>
                <p className='text-sm text-slate-500'>STORAGE DETAILS</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-8">
                {cardData.map((el) => (
                    <div key={el.id} className={`p-5 ${el.bgColor} rounded`}>
                        <div className={`text-4xl sm:text-3xl ${el.iconColor}`}>
                            {el.icon}
                        </div>
                        <h2 className="font-bold text-gray-700">{el.name}</h2>
                        <p className='text-gray-400 text-sm'>{el.files}</p>
                        <p className="text-xl text-gray-900 mt-8">{el.storage}</p>
                    </div>
                ))}
            </div>

            <h2 className='font-bold mb-5'> Recent files</h2>


            <RecentTable />

        </main>
    );
};

export default Content;
