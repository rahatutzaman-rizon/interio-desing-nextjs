import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path-to-logo.png" alt="SolArt Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">SolArt</span>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Service</a></li>
          <li><a href="#" className="hover:text-gray-300">Project</a></li>
          <li><a href="#" className="hover:text-gray-300">Pages</a></li>
          <li><a href="#" className="hover:text-gray-300">News</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
        <div className="flex items-center">
          <span className="mr-2">Call Anytime</span>
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full">
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;