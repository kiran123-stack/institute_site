import { Metadata } from "next";
import Link from "next/link";
import paramedicalData from "../data/paramedicalCourses.json";

export const metadata: Metadata = {
  title: "Paramedical Courses | DMLT, OT Technician & More",
  description: "Join our top-rated paramedical courses. We offer DMLT, OT Technician, X-Ray Technician, and Dialysis Technician training with practical hospital exposure.",
  keywords: ["paramedical courses", "DMLT", "OT Technician", "medical diploma"],
};

export default function ParamedicalPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold font-poppins mb-4">Paramedical Training Programs</h1>
        <p className="text-lg font-inter text-blue-100 max-w-2xl mx-auto px-4">
          Empowering healthcare professionals with practical, hands-on medical training and 100% placement assistance.
        </p>
      </section>

      {/* Course List Grid */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paramedicalData.map((course: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-xl transition-shadow relative">
              <div className="bg-[#10B981] h-2 w-full"></div> {/* Green accent for medical */}
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold font-poppins text-gray-900 pr-4">{course.title}</h2>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded shrink-0">Diploma</span>
                </div>
                <div className="space-y-2 mb-6 text-sm text-gray-600 font-inter">
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Fee:</strong> ₹{course.price}</p>
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Link 
                  href={`/enquiry?course=${course.slug}`} 
                  className="block w-full text-center bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold py-2 rounded transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 text-center px-4 rounded-xl max-w-5xl mx-auto border border-blue-100">
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Want to visit our labs?</h2>
        <p className="text-gray-600 mb-6">Book a free institute tour and see our state-of-the-art medical training equipment.</p>
        <Link href="/contact" className="inline-block bg-[#F59E0B] text-white font-bold py-3 px-8 rounded hover:bg-orange-600 transition-colors">
          Schedule a Visit
        </Link>
      </section>
    </div>
  );
}