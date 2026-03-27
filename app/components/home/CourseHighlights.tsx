import Link from "next/link";
import React from "react";

const CourseHighlights = () => {
  //  Slugs now match the keys in your JSON data files exactly 
  const highlights = [
    { title: "DCA", desc: "Diploma in Computer Applications", slug: "dca", color: "border-[#3B82F6]" },
    { title: "ADCA", desc: "Advanced Diploma in Computer Applications", slug: "adca", color: "border-[#3B82F6]" },
    { title: "Tally with GST", desc: "Professional Accounting & Billing", slug: "tally-gst", color: "border-[#F59E0B]" },
    { title: "Graphic Designing", desc: "Master Photoshop, Illustrator & CorelDraw", slug: "graphic-designing", color: "border-[#F59E0B]" },
    { title: "DMLT", desc: "Diploma in Medical Laboratory Technology", slug: "dmlt", color: "border-[#10B981]" }
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-poppins text-[#1E3A8A] mb-4">Trending Courses</h2>
        <p className="text-gray-600 font-inter max-w-2xl mx-auto">
          Choose from our industry-recognized programs designed to make you job-ready. [cite: 35, 36, 47, 48]
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {highlights.map((course, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 ${course.color} flex flex-col`}>
            <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 font-inter mb-4 flex-grow">{course.desc}</p>
            {/*  All links now point to the dynamic /[slug] route  */}
            <Link 
              href={`/courses/${course.slug}`} 
              className="text-[#1E3A8A] font-semibold text-sm hover:underline mt-auto inline-flex items-center"
            >
              View Details <span className="ml-1">→</span>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/courses" className="inline-block border border-[#1E3A8A] text-[#1E3A8A] font-bold py-2 px-6 rounded hover:bg-[#1E3A8A] hover:text-white transition-colors">
          Explore All Courses
        </Link>
      </div>
    </section>
  );
};

export default CourseHighlights;