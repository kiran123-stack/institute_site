import React from "react";
import Link from "next/link";

const QuickEnquiry = () => {
  return (
    <section className="bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#0A1628] text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold font-poppins mb-4">Need Help Choosing the Right Course?</h2>
          <p className="font-inter mb-6 text-blue-100 text-lg">
            Drop your details below and our expert academic counselor will call you within 24 hours to guide you. [cite: 224-228]
          </p>
          <div className="flex items-center space-x-4 mt-8">
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-sm text-blue-200">Or call us directly at:</p>
              <a href="tel:+919876543210" className="text-xl font-bold hover:underline">+91 98765 43210</a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full bg-white p-8 rounded-xl shadow-2xl text-gray-800 relative">
          {/* Action connected to Formspree for lead generation [cite: 171-172, 354-357] */}
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-5">
            <div>
              <label htmlFor="quick-name" className="sr-only">Name</label>
              <input 
                type="text" 
                id="quick-name" 
                name="name" 
                placeholder="Your Full Name *" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-gray-50" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="quick-phone" className="sr-only">Phone Number</label>
              <input 
                type="tel" 
                id="quick-phone" 
                name="phone" 
                placeholder="Phone Number *" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-gray-50" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="quick-course" className="sr-only">Course Interested In</label>
              {/* Corrected: used defaultValue instead of 'selected' on option  */}
              <select 
                id="quick-course" 
                name="course" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] bg-gray-50" 
                required
                defaultValue=""
              >
                <option value="" disabled>Select Course of Interest *</option>
                <option value="Computer Courses">Computer Courses (DCA, ADCA, Tally)</option>
                <option value="Paramedical Courses">Paramedical Courses (DMLT, OT Tech)</option>
                <option value="Not Sure">Not Sure - Need Guidance</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold py-3 rounded transition-colors shadow"
            >
              Get Free Callback
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-2">
              By submitting, you agree to our <Link href="/contact" className="underline hover:text-[#1E3A8A]">Privacy Policy</Link>.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default QuickEnquiry;