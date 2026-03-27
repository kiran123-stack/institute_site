"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Computer Courses", path: "/courses" },
    { name: "Paramedical", path: "/paramedical" },
    { name: "Placements", path: "/placements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-poppins font-bold text-2xl text-[#1E3A8A]">
                ProInstitute
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-inter text-sm font-medium transition-colors hover:text-[#3B82F6] ${
                  pathname === link.path ? "text-[#3B82F6] font-bold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/enquiry"
              className="ml-4 bg-[#F59E0B] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors shadow-sm"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1E3A8A] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.path ? "text-[#3B82F6] bg-blue-50" : "text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/enquiry"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-[#F59E0B] text-white font-bold py-3 px-4 rounded"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}