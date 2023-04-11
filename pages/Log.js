import React from 'react'

const Log = () => {
    return (
        <div>

            <section className="text-gray-600 body-font relative">
                <h1 className='text-center m-0'>Filter By:</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                        

                            <div className="p-2 w-1/2">

                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Name:</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="age" className="leading-7 text-sm text-gray-600">Age:</label>
                                    <input type="number" id="age" name="age" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-3.5 w-1/2">
                                <div className="relative w-full">
                                    <label htmlFor="type" className="leading-7 text-sm text-gray-600">Type:</label>
                                    <div className="mt-1">
                                        <label className="inline-flex items-center">
                                            <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="type" value="adult" checked />
                                            <span className="ml-2">Adult</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                            <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="type" value="children" />
                                            <span className="ml-2">Children</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-1 w-2/5 mr-2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Search:</label>
                                    <input type="text" id="name" name="Search" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto overflow-hidden sm:overflow-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th>#</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Age</th>
                            <th className="py-3 px-4 text-left">Amount (&#8377;)</th>
                            <th className="py-3 px-4 text-left">Gender</th>
                            <th className="py-3 px-4 text-left">Type</th>
                            <th className="py-3 px-4 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td>1.</td>
                            <td className="py-3 px-4 text-left whitespace-nowrap">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter name"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter age"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter amount"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter Gender"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter Type"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter date"
                                />
                            </td>
                        </tr>
                    </tbody>
                    <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td>1.</td>
                            <td className="py-3 px-4 text-left whitespace-nowrap">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter name"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter age"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter amount"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter Gender"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter Type"
                                />
                            </td>
                            <td className="py-3 px-4 text-left">
                                <input
                                    className="border-0 focus:outline-none"
                                    type="text"
                                    placeholder="Enter date"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Log
