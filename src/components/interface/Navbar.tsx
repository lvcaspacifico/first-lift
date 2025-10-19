import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import firstLiftLogo from "../../assets/full-logo-white.svg"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 desktop:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/"><img src={firstLiftLogo} alt="FirstLift" className="h-8" /></a>
          </div>
          <div className="hidden desktop:flex items-center gap-8">
            <a href="/#home" className="text-white hover:text-fl-blue transition-colors duration-300">
              Home
            </a>
            <a href="/#programs" className="text-white hover:text-fl-blue transition-colors duration-300">
              Programs
            </a>
            <a href="/#testimonials" className="text-white hover:text-fl-blue transition-colors duration-300">
              Testimonials
            </a>
            <a href="/#community" className="text-white hover:text-fl-blue transition-colors duration-300">
              Community
            </a>
            <a href="/#contact" className="text-white hover:text-fl-blue transition-colors duration-300">
              Contact Us
            </a>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 bg-fl-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Dashboard
              <span className="text-xs bg-white text-fl-blue px-2 py-1 rounded font-bold">
                ADMIN
              </span>
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="desktop:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="desktop:hidden pb-4 space-y-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-fl-blue transition-colors duration-300 py-2"
            >
              Home
            </a>
            <a
              href="/#programs"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-fl-blue transition-colors duration-300 py-2"
            >
              Programs
            </a>
            <a
              href="/#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-fl-blue transition-colors duration-300 py-2"
            >
              Testimonials
            </a>
            <a
              href="/#community"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-fl-blue transition-colors duration-300 py-2"
            >
              Social
            </a>
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-fl-blue transition-colors duration-300 py-2"
            >
              Contact Us
            </a>
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="mobile:align-left flex items-center gap-2 bg-fl-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full justify-center"
            >
              Dashboard
              <span className="text-xs bg-white text-fl-blue px-2 py-1 rounded font-bold">
                ADMIN
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}