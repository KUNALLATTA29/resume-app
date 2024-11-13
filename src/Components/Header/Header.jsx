import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to={'/'}>Kunal Latta</Link>
        </h1>
        <nav className="hidden md:flex space-x-10">
          <ul className="flex space-x-10">
            <li className="hover:text-purple-400 transition duration-300"><Link to={'/'}>Home</Link></li>
            <li className="hover:text-purple-400 transition duration-300"><Link to={'/about'}>About</Link></li>
            <li className="hover:text-purple-400 transition duration-300"><Link to={'/projects'}>Projects</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-indigo-900 bg-opacity-90 py-4 absolute top-16 left-0 w-full flex flex-col items-center space-y-4">
          <Link onClick={toggleMenu} to={'/'} className="text-xl hover:text-purple-400 transition duration-300">Home</Link>
          <Link onClick={toggleMenu} to={'/about'} className="text-xl hover:text-purple-400 transition duration-300">About</Link>
          <Link onClick={toggleMenu} to={'/projects'} className="text-xl hover:text-purple-400 transition duration-300">Projects</Link>
        </nav>
      )}
    </header>
  );
}
