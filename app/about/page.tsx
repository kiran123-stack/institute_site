import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Our Institute",
  description: "Learn about our history, certified trainers, and mission to provide high-quality computer and paramedical education.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold font-poppins mb-4">About Our Institute</h1>
        <p className="text-lg font-inter text-blue-100 max-w-2xl mx-auto px-4">
          Empowering students with industry-ready skills for over 10 years.
        </p>
      </section>

      {/* Institute History & Stats */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold font-poppins text-[#1E3A8A] mb-6">Our Journey to Excellence</h2>
          <p className="text-gray-700 font-inter mb-4 leading-relaxed">
            Founded with a vision to bridge the skills gap, our institute has been at the forefront of computer and paramedical education. We believe in practical, hands-on learning that directly translates to career success.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-4 rounded shadow text-center border-b-4 border-[#F59E0B]">
              <h3 className="text-3xl font-bold text-[#1E3A8A]">10+</h3>
              <p className="text-sm text-gray-600 font-medium">Years of Experience</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center border-b-4 border-[#F59E0B]">
              <h3 className="text-3xl font-bold text-[#1E3A8A]">5000+</h3>
              <p className="text-sm text-gray-600 font-medium">Successful Students</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg h-80 relative overflow-hidden shadow-lg">
          {/* Replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            [Institute Building / Classroom Image]
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full shrink-0 flex items-center justify-center">
             [Photo]
          </div>
          <div>
            <h3 className="text-2xl font-bold font-poppins text-[#1E3A8A] mb-2">Message from the Founder</h3>
            <p className="text-gray-700 italic mb-4">
              "Education is not just about degrees; it's about acquiring the right skills to build a stable and prosperous future. Our curriculum is constantly updated to meet industry demands, ensuring our students are always one step ahead."
            </p>
            <p className="font-bold text-gray-900">- John Doe, Founder & Director</p>
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-bold font-poppins text-[#1E3A8A] mb-8">Recognitions & Certifications</h2>
        <div className="flex flex-wrap justify-center gap-8">
           <div className="w-40 h-24 bg-white shadow flex items-center justify-center font-bold text-gray-500 rounded">ISO Certified</div>
           <div className="w-40 h-24 bg-white shadow flex items-center justify-center font-bold text-gray-500 rounded">Govt. Recognized</div>
           <div className="w-40 h-24 bg-white shadow flex items-center justify-center font-bold text-gray-500 rounded">Skill India Partner</div>
        </div>
      </section>
    </div>
  );
}