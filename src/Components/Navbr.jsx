import { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


export default function Navbar({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="transform hover:scale-105 transition-transform duration-200" >
        <img src="./Logo.png" alt="" width="80px" height="auto"
          style={{ padding: "-50px", marginTop: "-25px", marginBottom: "-30px" }}
          className="lg:ml-42" />
      </Link>

      {/* <h1 className="text-xl font-bold text-gray-800">Noam Chomsky</h1> */}

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-900 font-medium text-2xl hover:text-blue-600 transition-colors duration-300 transform hover:scale-105" >Home</Link>
        <Link to="/contact" className="text-gray-900 font-medium text-2xl hover:text-blue-600 transition-colors duration-300 transform hover:scale-105" >Contact</Link>
      </div>

      {/* Language Toggle Button (Desktop) */}
      <div className="flex items-center space-x-2">
        {/* Left Label */}
        <span className={`text-sm font-medium ${language === "en" ? "text-blue-600" : "text-gray-500"}`}>
          EN
        </span>

        {/* Toggle Switch */}
        <button
          onClick={() => setLanguage(language === "en" ? "mr" : "en")}
          className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ${language === "en" ? "bg-blue-600" : "bg-gray-400"
            }`}
        >
          <div
            className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${language === "en" ? "translate-x-8" : "translate-x-0"
              }`}
          />
        </button>

        {/* Right Label */}
        <span className={`text-sm font-medium ${language === "mr" ? "text-blue-600" : "text-gray-500"}`}>
          MR
        </span>
      </div>



      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-md md:hidden flex flex-col items-center py-6 space-y-4 transition-all duration-300 z-50 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <Link to="/" className="text-gray-700 text-lg hover:text-blue-600 transform hover:scale-105 transition-all duration-200" onClick={() => setIsOpen(false)}>Home</Link>
       
        <Link to="/contact" className="text-gray-700 text-lg hover:text-blue-600 transform hover:scale-105 transition-all duration-200" onClick={() => setIsOpen(false)}>Contact</Link>



      </div>
    </nav>
  );
}
