import React from "react";
import logoImg from '../../assests/img/image.png';
import { HeartHandshake, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "Browse Items", href: "#" },
      { name: "NGO Directory", href: "#" },
      { name: "Campaigns", href: "#" },
      { name: "Success Stories", href: "#" },
    ],
    community: [
      { name: "For Individuals", href: "#" },
      { name: "For NGOs", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "Help Center", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="py-16 bg-gray-50 text-gray-600">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden border border-white/10">
                <img src={logoImg} alt="ShareNest" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold tracking-tight">ShareNest</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering communities to share resources and support ethical
              causes. A platform built for social impact, not profit.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 ShareNest Inc. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
