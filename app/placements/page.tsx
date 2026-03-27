import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Placements & Success Stories",
  description: "See our successful alumni. We provide 100% placement assistance in top IT companies and hospitals.",
};

export default function PlacementsPage() {
  const placements = [
    { name: "Amit Kumar", course: "ADCA", company: "Tech Solutions Pvt Ltd", role: "Data Entry Executive" },
    { name: "Priya Sharma", course: "DMLT", company: "City Care Hospital", role: "Lab Technician" },
    { name: "Rahul Singh", course: "Tally with GST", company: "Sharma & Associates", role: "Junior Accountant" },
    { name: "Neha Verma", course: "OT Technician", company: "Apex Medical Center", role: "Assistant OT Tech" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold font-poppins mb-4">Our Placement Record</h1>
        <p className="text-lg font-inter text-blue-100 max-w-2xl mx-auto px-4">
          We don't just teach skills; we build careers. Meet our proudly placed students.
        </p>
      </section>

      {/* Hiring Partners / Company Logos */}
      <section className="py-12 bg-white text-center px-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest mb-8 text-sm">Our Top Hiring Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
          {/* Replace with actual company logos using Next.js Image */}
          <div className="text-xl font-black font-poppins">Company A</div>
          <div className="text-xl font-black font-poppins">City Hospital</div>
          <div className="text-xl font-black font-poppins">TechCorp</div>
          <div className="text-xl font-black font-poppins">Global Finance</div>
        </div>
      </section>

      {/* Student Success Grid */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placements.map((student, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-[#3B82F6]">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-xs text-gray-500">
                [Photo]
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-poppins">{student.name}</h3>
              <p className="text-[#3B82F6] font-semibold text-sm mb-2">{student.course}</p>
              <hr className="my-3 border-gray-100" />
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Placed At</p>
              <p className="font-bold text-gray-800">{student.company}</p>
              <p className="text-sm text-gray-600">{student.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto bg-[#F59E0B] rounded-2xl p-8 md:p-12 text-center shadow-xl text-white mt-8 mx-4">
        <h2 className="text-3xl font-bold font-poppins mb-4">Ready to start your journey?</h2>
        <p className="mb-8 font-inter">Enroll today and become our next success story.</p>
        <Link href="/enquiry" className="bg-white text-[#1E3A8A] font-bold py-3 px-10 rounded-full shadow hover:bg-gray-100 transition-colors text-lg">
          Apply Now
        </Link>
      </section>
    </div>
  );
}