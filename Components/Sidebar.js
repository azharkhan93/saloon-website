import Link from 'next/link'
const Sidebar = () => {
  return (
    <div style={{ width: "210px", position: "fixed" }}>
      <div className="bg-gray-100 h-screen">
        <div className="bg-gray-900 h-16 flex items-center justify-center">
          <h1 className="text-white text-xl font-bold">Saloon Log</h1>
        </div>
        <div className="p-4 text-gray-700 text-lg font-extrabold">
          <Link href="/">
            <span className="block px-0 py-0 text-gray-900 text-lg font-extrabold hover:bg-red-200 transition duration-300">Today </span>
          </Link>
        </div>
        <div className="p-4">
          <Link href="/Log">
            <span className="block px-0 py-0 text-gray-900 text-lg font-extrabold hover:bg-red-200 transition duration-300">History </span>
          </Link>
        </div>
      </div>
    </div>
  );
};


  
  export default Sidebar;
  