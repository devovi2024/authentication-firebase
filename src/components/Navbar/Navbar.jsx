import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";  // React Icons for hamburger, sun, and moon icons
import { NavLink } from "react-router-dom";  // Import NavLink from react-router-dom

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setIsMobile(!isMobile);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className={`p-5 ${theme === "light" ? "bg-gray-800" : "bg-gray-900"} text-white`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* First Div: Logo */}
        <div className="text-3xl font-bold">
          <NavLink to="/">MyLogo</NavLink> {/* Use NavLink for routing */}
        </div>

        {/* Second Div: Menu Items */}
        <div className="hidden md:flex space-x-12">
          <NavLink to="/" className="text-xl hover:text-yellow-400 transition duration-300">Home</NavLink>
          <NavLink to="/about" className="text-xl hover:text-yellow-400 transition duration-300">About</NavLink>
          <NavLink to="/services" className="text-xl hover:text-yellow-400 transition duration-300">Services</NavLink>
          <NavLink to="/blog" className="text-xl hover:text-yellow-400 transition duration-300">Blog</NavLink>
        </div>

        {/* Third Div: Get Started and Theme Mode */}
        <div className="flex items-center space-x-6">
          {/* Get Started Button */}
          <NavLink to="/signin" className="flex items-center text-lg hover:text-yellow-400 transition duration-300">
            Get Started
            <span className="ml-2"><FaSun size={22} /></span>
          </NavLink>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="text-xl hover:text-yellow-400 transition duration-300">
            {theme === "light" ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-xl">
            {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobile ? "block" : "hidden"} bg-gray-700 text-white`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink to="/" className="text-xl hover:text-yellow-400 transition duration-300">Home</NavLink>
          <NavLink to="/about" className="text-xl hover:text-yellow-400 transition duration-300">About</NavLink>
          <NavLink to="/services" className="text-xl hover:text-yellow-400 transition duration-300">Services</NavLink>
          <NavLink to="/blog" className="text-xl hover:text-yellow-400 transition duration-300">Blog</NavLink>
          <NavLink to="/signin" className="text-xl hover:text-yellow-400 transition duration-300">Get Started</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
