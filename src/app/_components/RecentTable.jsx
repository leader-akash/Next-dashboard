// import React from 'react'

// const RecentTable = () => {
    
//     const data = [
//         {
//             id: 1,
//             name: "Presentation",
//             members: "Only you",
//             lastModified: "---"
//         },
//         {
//             id: 2,
//             name: "Presentation",
//             members: "Only you",
//             lastModified: "---"
//         }, {
//             id: 3,
//             name: "Presentation",
//             members: "Only you",
//             lastModified: "---"
//         }, {
//             id: 4,
//             name: "Presentation",
//             members: "Only you",
//             lastModified: "---"
//         }, {
//             id: 5,
//             name: "Presentation",
//             members: "Only you",
//             lastModified: "---"
//         }
//     ]

//     return (
//         <table className="w-full overflow-hidden text-left border-collapse rounded-md">
//             <thead>
//                 <tr className=" border-x-2">
//                     <th className="py-2 px-4 border-y-2">
//                         <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
//                     </th>
//                     <th className="py-2 px-4   border-y-2">Name</th>
//                     <th className="py-2 px-4  border-y-2">Members</th>
//                     <th className="py-2 px-4  border-y-2">Last modified</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     data?.map((el) => {
//                         return (
//                             <tr className="border-x-2 border-gray-200">
//                                 <td className="py-2 px-4 border-y-2">
//                                     <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
//                                 </td>
//                                 <td className="py-2 px-4 border-y-2">{el.name}</td>
//                                 <td className="py-2 px-4 border-y-2">{el.members}</td>
//                                 <td className="py-2 px-4 border-y-2">{el.lastModified}</td>
//                             </tr>
//                         )
//                     })
//                 }

//             </tbody>
//         </table>
//     )
// }

// export default RecentTable

import React from 'react';

const RecentTable = () => {

    const data = [
        {
            id: 1,
            name: "Presentation",
            members: "Only you",
            lastModified: "---"
        },
        {
            id: 2,
            name: "Presentation",
            members: "Only you",
            lastModified: "---"
        },
        {
            id: 3,
            name: "Presentation",
            members: "Only you",
            lastModified: "---"
        },
        {
            id: 4,
            name: "Presentation",
            members: "Only you",
            lastModified: "---"
        },
        {
            id: 5,
            name: "Presentation",
            members: "Only you",
            lastModified: "---"
        }
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-collapse rounded-md">
                <thead>
                    <tr className="border-x-2">
                        <th className="py-2 px-4 border-y-2">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                        </th>
                        <th className="py-2 px-4 border-y-2">Name</th>
                        <th className="py-2 px-4 border-y-2">Members</th>
                        <th className="py-2 px-4 border-y-2">Last modified</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el) => (
                        <tr key={el.id} className="border-x-2 border-gray-200">
                            <td className="py-2 px-4 border-y-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                            </td>
                            <td className="py-2 px-4 border-y-2">{el.name}</td>
                            <td className="py-2 px-4 border-y-2">{el.members}</td>
                            <td className="py-2 px-4 border-y-2">{el.lastModified}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentTable;
