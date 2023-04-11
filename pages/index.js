import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    type: 'adult',
    gender: 'male',
    amount: '',
  });

  // Update local storage when form data changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Retrieve form data from local storage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with form data
  };
  return (
    <>
      <section className="text-gray-600 body-font relative -mt-16">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} />
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name:</label>
                  <input type="text" id="name" name="name" value={formData.name}
                    onChange={handleInputChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="age" className="leading-7 text-sm text-gray-600">Age:</label>
                  <input type="number" id="age" name="age" value={formData.age}
                    onChange={handleInputChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-3.5 w-1/2">
                <div className="relative w-full">
                  <label htmlFor="type" className="leading-7 text-sm text-gray-600">Type:</label>
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="type" value="adult" checked={formData.type === 'adult'} onChange={handleInputChange} checked />
                      <span className="ml-2">Adult</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="type" value="children" checked={formData.type === 'childern'} onChange={handleInputChange} />
                      <span className="ml-2 mr-4">Children</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-3.5 w-1/2">
                <div className="relative">
                  <label htmlFor="gender" className="leading-7 text-sm text-gray-600">Gender:</label>
                  <div className="mt-1">
                    <label className="inline-flex items-center mr-4">
                      <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="gender" value="male" />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="gender" value="female" />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                </div>
              </div>



              <div className="p-2 w-2/2 mx-auto text-center">
                <div className="relative">
                  <label htmlFor="amount" className="leading-7 text-sm text-gray-600 ">Amount:</label>
                  <input type="text" id="amount" name="amount"  value={formData.amount}
                    onChange={handleInputChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>


              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add+</button>
              </div>

            </div>
          </div>
        </div>
      </section>



      <div className="container mx-auto px-2 sm:px-6 lg:px-8 overflow-y-hidden">




        <table className="table-auto w-full text-xs">
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
    </>
  )
}








