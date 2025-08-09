import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-800">Hope Foundation</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-red-600 transition-colors">Projects</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</Link>
            <Link 
              to="/donate" 
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-red-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-red-600">About</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-red-600">Projects</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</Link>
              <Link to="/donate" className="block px-3 py-2 bg-red-600 text-white rounded-md">Donate Now</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;