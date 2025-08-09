import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from "../assets/logo-charity.png";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { when: "afterChildren" } },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        when: "beforeChildren",
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const activeClass = "border-b-2 border-red-600 text-red-600";

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center"> {/* Increased height */}
          <div className="flex items-center space-x-3"> {/* Added spacing */}
            <NavLink to="/" className="flex items-center space-x-3">
              <img src={LogoImage} alt="Hope Foundation Logo" className="h-14 w-16" /> {/* Larger logo */}
              <span className="text-2xl font-bold text-gray-800">Hope Foundation</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-red-600 transition-colors ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-red-600 transition-colors ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-red-600 transition-colors ${isActive ? activeClass : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-red-600 transition-colors ${isActive ? activeClass : ""}`
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/donate" 
              className={({ isActive }) => 
                `px-6 py-2 rounded-full transition-colors ${
                  isActive ? "bg-red-700 text-white" : "bg-red-600 text-white hover:bg-red-700"
                }`
              }
            >
              Donate Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/projects", label: "Projects" },
                  { to: "/contact", label: "Contact" }
                ].map(({ to, label }) => (
                  <motion.div key={to} variants={itemVariants}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `block px-3 py-2 hover:text-red-600 ${
                          isActive ? "border-b-2 border-red-600 text-red-600" : "text-gray-700"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/donate"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-center transition-colors ${
                        isActive ? "bg-red-700 text-white" : "bg-red-600 text-white hover:bg-red-700"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Donate Now
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
