"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AkhiloPedia
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors">
              Explore
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors">
              Upload
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors">
              Community
            </a>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Explore
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Upload
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Community
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-left">
                  Login
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
