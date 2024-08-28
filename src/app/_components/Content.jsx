import Image from 'next/image';
import React from 'react';
import { MdFolderShared } from "react-icons/md";
import { IoMdFolder } from "react-icons/io";
import { IoMdImage } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";


const Content = () => {
    return (
        <main className=" bg-white p-6">
            <h1 className="text-2xl font-bold text-gray-700 border-b-2 pb-3">Overview</h1>
            <div className='flex justify-between items-center bg-[#F8F8FA] rounded-xl pt-3 px-5 mt-6'>
                <div className="  space-y-5 mt-4 mb-8 px-3">
                    <h3>Upgrade account</h3>
                    <p>100 GB storage, Access to Dlex support experts, Option to add your family, Extra member benefits.</p>
                    <button className="bg-[#3855B3]  text-white py-2 px-4 rounded">
                        Upgrade Account
                    </button>
                </div>
                <div className='relative w-56 h-44'>
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

            <div className="grid grid-cols-4 gap-4 mt-4 mb-8">
                <div className="p-5 bg-[#FAF0E7] rounded">
                    <div className='text-2xl text-pink-800'>
                        <MdFolderShared />
                    </div>
                    <h2 className="font-bold text-gray-700">Shared files</h2>
                    <p className='text-gray-400 text-sm'>1,200 files</p>
                    <p className="text-xl text-gray-900 mt-8">3.2 GB</p>
                </div>

                <div className="p-5 bg-[#FFF8E1] rounded">
                    <div className='text-2xl text-orange-500'>
                        <IoMdImage />
                    </div>

                    <h2 className="font-bold text-gray-700">Media</h2>
                    <p className='text-gray-400 text-sm'>1,200 files</p>
                    <p className="text-xl text-gray-900 mt-8">2.1 GB</p>
                </div>
                <div className="p-5 bg-[#E1F5FD] rounded">
                    <div className='text-2xl text-purple-600'>
                        <IoDocumentTextSharp />
                    </div>
                    <h2 className="font-bold text-gray-700">Documents</h2>
                    <p className='text-gray-400 text-sm'>1,200 files</p>
                    <p className="text-xl text-gray-900 mt-8">3.8 GB</p>
                </div>
                <div className="p-5 bg-[#E8F5E9] rounded">
                    <div className='text-2xl text-green-600'>
                        <IoMdFolder />
                    </div>

                    <h2 className="font-bold text-gray-700">Others</h2>
                    <p className='text-gray-400 text-sm'>1,200 files</p>
                    <p className="text-xl text-gray-900 mt-8">24 MB</p>
                </div>
            </div>

            <h2 className='font-bold mb-5'> Recent files</h2>
            <div className="bg-white shadow rounded p-4">
                <h2 className="font-bold text-gray-700 mb-4">Recent files</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="py-2">Name</th>
                            <th className="py-2">Members</th>
                            <th className="py-2">Last modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2">Presentation</td>
                            <td className="py-2">Only you</td>
                            <td className="py-2">--</td>
                        </tr>
                        <tr>
                            <td className="py-2">Design guidelines</td>
                            <td className="py-2">Only you</td>
                            <td className="py-2">Nov 13, 2020</td>
                        </tr>
                        <tr>
                            <td className="py-2">Resources</td>
                            <td className="py-2">Only you</td>
                            <td className="py-2">--</td>
                        </tr>
                        <tr>
                            <td className="py-2">Objectives</td>
                            <td className="py-2">Only you</td>
                            <td className="py-2">--</td>
                        </tr>
                        <tr>
                            <td className="py-2">Screenshot</td>
                            <td className="py-2">Only you</td>
                            <td className="py-2">--</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Content;
