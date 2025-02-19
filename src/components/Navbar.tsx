import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0B0B3B]/10 backdrop-blur-sm border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl py-3 font-bold bg-gradient-to-r from-orange-300 via-yellow-500 to-yellow-500 text-transparent bg-clip-text"
          >
            Blitzkrieg 2k25
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-white transition ${
                isActive("/") ? "text-purple-300" : "hover:text-purple-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white transition ${
                isActive("/about") ? "text-purple-300" : "hover:text-purple-300"
              }`}
            >
              About
            </Link>
            <Link
              to="/highlights"
              className={`text-white transition ${
                isActive("/highlights")
                  ? "text-purple-300"
                  : "hover:text-purple-300"
              }`}
            >
              Sponsorships
            </Link>
            <Link
              to="/participate"
              className={`text-white transition ${
                isActive("/participate")
                  ? "text-purple-300"
                  : "hover:text-purple-300"
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={`text-white transition ${
                isActive("/contact")
                  ? "text-purple-300"
                  : "hover:text-purple-300"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0B0B3B]/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md ${
                isActive("/")
                  ? "bg-purple-900/50 text-white"
                  : "text-white hover:bg-purple-900/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-purple-900/50 text-white"
                  : "text-white hover:bg-purple-900/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/highlights"
              className={`block px-3 py-2 rounded-md ${
                isActive("/highlights")
                  ? "bg-purple-900/50 text-white"
                  : "text-white hover:bg-purple-900/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Highlights
            </Link>
            <Link
              to="/participate"
              className={`block px-3 py-2 rounded-md ${
                isActive("/participate")
                  ? "bg-purple-900/50 text-white"
                  : "text-white hover:bg-purple-900/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Participate
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md ${
                isActive("/contact")
                  ? "bg-purple-900/50 text-white"
                  : "text-white hover:bg-purple-900/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
