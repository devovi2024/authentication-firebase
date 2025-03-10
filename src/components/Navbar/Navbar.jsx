import React, { useState } from "react";
import { FaBars, FaTimes, FaSignInAlt, FaSignOutAlt, FaUserPlus, FaHome, FaInfoCircle, FaBlog, FaCogs } from "react-icons/fa";  
import { NavLink } from "react-router-dom";  
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { signOut } from "firebase/auth";  
import logo from '../../assets/logo1.png'; 

const Navbar = () => {
  const [user] = useAuthState(auth);  
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setIsMobile(!isMobile);

  const handleSignOut = async () => {
    try {
      await signOut(auth);  
      window.location.reload();  
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleSignIn = () => {
    if (user) {
      window.location.reload();  
    }
  };

  return (
    <nav className="p-5 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-3xl font-bold cursor-pointer hover:animate-bounce transition duration-300">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <NavLink to="/" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaHome className="mr-2" /> Home
          </NavLink>
          <NavLink to="/about" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaInfoCircle className="mr-2" /> About
          </NavLink>
          <NavLink to="/services" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaCogs className="mr-2" /> Services
          </NavLink>
          <NavLink to="/blog" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaBlog className="mr-2" /> Blog
          </NavLink>
        </div>

        {/* Auth & Mobile Menu Toggle */}
        <div className="flex items-center space-x-6">
          
          {/* Show Get Started if not signed in */}
          {!user && (
            <NavLink to="/signup" className="flex items-center text-lg hover:text-yellow-400 transition duration-300" onClick={handleSignIn}>
              <FaUserPlus className="mr-2" /> Get Started
            </NavLink>
          )}

          {/* Show Sign Out if user is signed in */}
          {user && (
            <button onClick={handleSignOut} className="flex items-center text-lg hover:text-yellow-400 transition duration-300">
              <FaSignOutAlt className="mr-2" /> Sign Out
            </button>
          )}

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-xl">
            {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobile ? "block" : "hidden"} bg-gray-700 text-white`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <NavLink to="/" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaHome className="mr-2" /> Home
          </NavLink>
          <NavLink to="/about" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaInfoCircle className="mr-2" /> About
          </NavLink>
          <NavLink to="/services" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaCogs className="mr-2" /> Services
          </NavLink>
          <NavLink to="/blog" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
            <FaBlog className="mr-2" /> Blog
          </NavLink>
          {!user ? (
            <NavLink to="/signin" className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
              <FaSignInAlt className="mr-2" /> Get Started
            </NavLink>
          ) : (
            <button onClick={handleSignOut} className="text-xl flex items-center hover:text-yellow-400 transition duration-300">
              <FaSignOutAlt className="mr-2" /> Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
