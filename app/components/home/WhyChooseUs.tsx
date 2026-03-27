import React from "react";
import { GraduationCap, User, IndianRupee, Briefcase } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <GraduationCap size={36} />,
      title: "Certified Courses",
      desc: "Govt. registered and industry-recognized certificates.",
    },
    {
      icon: <User size={36} />,
      title: "Experienced Trainers",
      desc: "Learn from industry experts with real-world experience.",
    },
    {
      icon: <IndianRupee size={36} />,
      title: "Affordable Fees",
      desc: "High-quality education that fits comfortably in your budget.",
    },
    {
      icon: <Briefcase size={36} />,
      title: "Placement Assistance",
      desc: "Dedicated support to help you secure your dream job.",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
      <h2 className="text-3xl font-bold font-poppins text-center text-[#1E3A8A] mb-12">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
          >
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 text-[#1E3A8A] shadow-inner">
              {reason.icon}
            </div>

            <h3 className="font-bold font-poppins text-lg text-gray-900 mb-3">
              {reason.title}
            </h3>

            <p className="text-sm text-gray-600 font-inter leading-relaxed">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;