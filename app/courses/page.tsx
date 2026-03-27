import { Metadata } from "next";
import Link from "next/link";
import coursesData from "../data/computerCourses.json"; 
// Note: Ensure your JSON file exports an array of course objects.

export const metadata: Metadata = {
  title: "Computer Courses | DCA, ADCA, Tally",
  description: "Explore our professional computer courses including DCA, ADCA, Tally with GST, Web Development, and Digital Marketing.",
};

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold font-poppins mb-4">Professional Computer Courses</h1>
        <p className="text-lg font-inter text-blue-100 max-w-2xl mx-auto px-4">
          100% Job-oriented courses designed for students and working professionals.
        </p>
      </section>

      {/* Course List Grid */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-[#3B82F6] h-2 w-full"></div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold font-poppins text-gray-900">{course.title}</h2>
                  <span className="bg-blue-100 text-[#1E3A8A] text-xs font-bold px-2 py-1 rounded">{course.level || "Diploma"}</span>
                </div>
                <div className="space-y-2 mb-6 text-sm text-gray-600 font-inter">
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Fee:</strong> ₹{course.price}</p>
                  
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Link 
                  href={`/courses/${course.slug}`} 
                  className="block w-full text-center bg-[#F59E0B] hover:bg-orange-600 text-white font-semibold py-2 rounded transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4">
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Not sure which course is right for you?</h2>
        <Link href="/enquiry" className="inline-block bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold py-3 px-8 rounded hover:bg-[#1E3A8A] hover:text-white transition-colors">
          Get Free Counseling
        </Link>
      </section>
    </div>
  );
}