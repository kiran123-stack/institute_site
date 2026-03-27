import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jfif')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6">
          Build Your Future with <br className="hidden md:block" />
          <span className="text-[#F59E0B]">
            Professional Computer Skills
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 font-inter mb-8 max-w-2xl mx-auto">
          Learn Job-Ready Computer & Paramedical Courses with practical training,
          expert instructors, and career guidance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-[#F59E0B] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View Courses
          </Link>

          <Link
            href="/enquiry"
            className="border-2 border-white hover:bg-white hover:text-[#1E3A8A] py-3 px-8 rounded-md transition-all font-semibold"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;