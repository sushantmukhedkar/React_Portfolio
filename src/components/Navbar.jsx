import React, { useState } from 'react';
import logo from "../assets/kevinLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen ,setMenuOpen] = useState(false);
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex items-center flex-shrink-0'>
            <img className="mx-2 w-20 h-20" src={logo} alt="logo" />
        </div>
        <div className='hidden m-8 md:flex items-center space-x-4 justify-center gap-4 text-2xl'>
            <a href="#home" className='hover:text-fuchsia-500'>Home</a>
            <a href="#about" className='hover:text-fuchsia-500'>About</a>
            <a href="#technologies" className='hover:text-fuchsia-500'>Technologies</a>
            <a href="#projects" className='hover:text-fuchsia-500'>Projects</a>
            <a href="#contact" className='hover:text-fuchsia-500'>Contact</a>
        </div>


       {/* Mobile Menu Button */}
       <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900 text-center md:hidden shadow-lg">
          <a href="#home" className="block py-4 border-b border-gray-700 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="block py-4 border-b border-gray-700 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#technologies" className="block py-4 border-b border-gray-700 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Technologies</a>
          <a href="#projects" className="block py-4 border-b border-gray-700 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="block py-4 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar