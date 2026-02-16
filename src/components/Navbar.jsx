import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from "../../assests/img/image.png";

const Navbar = ({
  variant = 'light', // 'light' for white text (on dark bg), 'dark' for dark text (on light bg)
  background = 'bg-transparent',
  className = "absolute top-0 left-0 right-0 z-50"
}) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = isLight ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900';
  const activeTextColor = isLight ? 'text-white' : 'text-emerald-600';
  const logoBg = isLight ? 'bg-white/10 border-white/20' : 'bg-gray-100 border-gray-200';
  const loginBtn = isLight ? 'text-white border-white/60 hover:bg-white/10' : 'text-gray-900 border-gray-300 hover:bg-gray-50';
  const signupBtn = isLight ? 'text-black bg-white hover:bg-white/90' : 'text-white bg-emerald-600 hover:bg-emerald-700';

  return (
    <nav className={`${className} ${background}`}>
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 backdrop-blur-md rounded-xl flex items-center justify-center overflow-hidden border transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-lg ${logoBg}`}>
            <img
              src={logoImg}
              alt="ShareNest Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`text-xl font-extrabold tracking-tight drop-shadow-sm group-hover:opacity-90 transition-opacity ${textColor}`}>
            ShareNest
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/explore" className={`text-sm font-medium transition-colors ${isActive('/explore') ? activeTextColor : secondaryTextColor}`}>
            Explore NGOs
          </Link>
          <a href="/#how-it-works" className={`text-sm font-medium transition-colors ${secondaryTextColor}`}>
            How it Works
          </a>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? activeTextColor : secondaryTextColor}`}>
            About
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link to="/login" className={`px-6 py-2 text-sm font-medium border rounded-lg transition-colors ${loginBtn}`}>
            Log in
          </Link>
          <Link to="/signup" className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${signupBtn}`}>
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;