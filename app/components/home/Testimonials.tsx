import React from "react";
import Link from "next/link";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Verma",
      course: "ADCA",
      text: "The practical training here is amazing. The trainers are very supportive, and I got a job as an Office Executive right after completing my 6-month course.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Priya Sharma",
      course: "DMLT",
      text: "Best paramedical institute! The lab facilities are top-notch, and the hospital training gave me the confidence to work as a professional Lab Technician.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Amit Kumar",
      course: "Tally with GST",
      text: "I learned everything about accounting and GST filing here. The placement cell helped me secure a job in a reputed CA firm within 2 weeks of completion.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-poppins text-[#1E3A8A] mb-4">What Our Students Say</h2>
        <p className="text-gray-600 font-inter max-w-2xl mx-auto">
          Read real success stories from students who built their careers with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
            <div className="text-4xl text-[#3B82F6] opacity-20 absolute top-4 left-4 font-serif">"</div>
            <p className="text-gray-700 font-inter mb-6 relative z-10 italic">"{review.text}"</p>
            <div className="mt-auto border-t pt-4 border-gray-100 flex justify-between items-end">
              <div>
                <h4 className="font-bold text-gray-900 font-poppins">{review.name}</h4>
                <p className="text-sm text-[#3B82F6] font-semibold">{review.course}</p>
              </div>
              <div className="text-sm">{review.rating}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/courses" className="text-[#1E3A8A] font-bold hover:underline transition-all">
          Join them and start your journey today →
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;