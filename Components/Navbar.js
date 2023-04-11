import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex-grow text-center">
          <span className="font-bold text-xl text-red-900 cursor-pointer text-center">Saloon Log</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <span className="text-red-900">Date: 12/04/2023</span>
        </div>
      </div>
    </header>
  </div>
  




  )
}

export default Navbar
