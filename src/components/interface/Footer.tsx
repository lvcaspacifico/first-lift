import { Mail, Phone, MapPin } from 'lucide-react';

import firstLiftLogo from "../../assets/full-logo-white.svg"

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 desktop:px-8">
        <div className="grid mobile:grid-cols-1 desktop:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={firstLiftLogo} alt="FirstLift" className="h-12 mb-4" />
            <p className="text-gray-400">
              Professional flight training academy dedicated to making your aviation dreams take flight.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#hero" className="hover:text-fl-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-fl-blue transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-fl-blue transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-fl-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-fl-blue flex-shrink-0 mt-1" />
                <span>1234 Aviation Drive<br />Dallas, TX 75201</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-fl-blue" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-fl-blue" />
                <span>info@firstlift.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 FirstLift Flight Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}