import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <Heart className="w-4 h-4 text-black" />
          </div>
          <span className="text-xl font-extrabold text-white">ShareNest</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#explore" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Explore
          </a>
          <a href="#ngos" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            NGOs
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            How it Works
          </a>
          <a href="#about" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            About
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link to="/login" className="px-6 py-2 text-sm font-medium text-white border border-white/60 rounded-lg hover:bg-white/10 transition-colors">
            Log in
          </Link>
          <Link to="/signup" className="px-6 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-colors">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;