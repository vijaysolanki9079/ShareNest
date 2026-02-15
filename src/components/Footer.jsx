import React from "react";
import { HeartHandshake, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">ShareNest</span>
          </div>

          <p className="text-xs text-gray-400">
            © 2026 ShareNest Inc.
          </p>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
