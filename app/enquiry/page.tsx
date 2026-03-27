import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Enquiry Form | Admission Open",
  description: "Fill out our student enquiry form to get details about course fees, duration, and the admission process.",
};

export default function EnquiryPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        {/* Header */}
        <div className="bg-[#1E3A8A] text-white p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Apply Now / Quick Enquiry</h1>
          <p className="font-inter text-blue-100 text-lg">
            Fill in your details and our academic counselor will contact you within 24 hours.
          </p>
        </div>

        <div className="p-8 md:p-12">
          {/* Form Setup (Hook up with Formspree, EmailJS, or FormKit) */}
          <form action="YOUR_FORMSPREE_OR_EMAILJS_URL" method="POST" className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 font-inter">Full Name *</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all" />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 font-inter">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required placeholder="+91 98765 43210" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 font-inter">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all" />
              </div>

              {/* Course Selection */}
              <div className="space-y-2">
                <label htmlFor="course" className="block text-sm font-semibold text-gray-700 font-inter">Course Interested In *</label>
                <select
                  id="course"
                  name="course"
                  required
                  defaultValue=""
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-white transition-all text-gray-700"
                >
                  <option value="" disabled>Select a Course</option>
                  <optgroup label="Computer Courses">
                    <option value="DCA">DCA (Diploma in Computer Applications)</option>
                    <option value="ADCA">ADCA (Advanced Diploma)</option>
                    <option value="Tally">Tally with GST</option>
                    <option value="Graphic Design">Graphic Designing</option>
                  </optgroup>
                  <optgroup label="Paramedical Courses">
                    <option value="DMLT">DMLT</option>
                    <option value="OT Technician">OT Technician</option>
                    <option value="X-Ray">X-Ray Technician</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 font-inter">Additional Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Any specific questions about fees, batches, or eligibility?" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#F59E0B] hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-lg shadow-md transition-colors font-poppins mt-4">
              Submit Enquiry
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-10 text-center border-t border-gray-200 pt-8">
            <p className="text-gray-500 mb-4 font-inter text-sm">Need immediate assistance? Chat directly with our counselors.</p>
            <a href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20enroll%20in%20a%20course." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors shadow">
              <span className="mr-2 text-xl">💬</span> WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}