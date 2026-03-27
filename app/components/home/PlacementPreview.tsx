import React from "react";
import Link from "next/link";

const PlacementPreview = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content */}
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-3xl font-bold font-poppins text-[#1E3A8A]">100% Placement Assistance</h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            We have partnered with top IT companies, hospitals, and CA firms to ensure our students get the best career starts immediately after course completion.
          </p>
          <Link 
            href="/placements" 
            className="inline-block bg-[#F59E0B] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition-colors shadow-md"
          >
            View Our Placements
          </Link>
        </div>

        {/* Right Side: Mock Logos */}
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner">
            City Hospital
          </div>
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner">
            TechCorp
          </div>
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner">
            Global Finance
          </div>
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner">
            Apex Medical
          </div>
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner">
            Infosys
          </div>
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner">
            Wipro
          </div>
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner">
            Sharma & Co
          </div>
          <div className="bg-gray-100 h-24 rounded flex items-center justify-center font-bold text-gray-500 shadow-inner flex-col text-sm text-center">
            <span className="text-blue-500">+50 More</span>
            <Link href="/placements" className="underline mt-1 text-xs">View All</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlacementPreview;