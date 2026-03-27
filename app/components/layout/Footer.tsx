import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Institute Info */}
          <div>
            <h3 className="text-white text-xl font-bold font-poppins mb-4">ProInstitute</h3>
            <p className="text-sm font-inter mb-4 leading-relaxed">
              Empowering students with industry-ready skills. Government certified computer and paramedical courses with 100% placement assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Computer Courses</Link></li>
              <li><Link href="/paramedical" className="hover:text-white transition-colors">Paramedical Courses</Link></li>
              <li><Link href="/placements" className="hover:text-white transition-colors">Placements</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold font-poppins mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li>📍 123 Education Street, Knowledge Park, City, State 123456</li>
              <li>📞 <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
              <li>✉️ <a href="mailto:info@professionalinstitute.com" className="hover:text-white">info@institute.com</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white text-lg font-semibold font-poppins mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm font-inter">
              <li>Mon - Sat: 8:00 AM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <Link href="/enquiry" className="inline-block mt-4 border border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white font-semibold py-2 px-4 rounded transition-colors">
              Book Free Demo
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center font-inter text-gray-500">
          <p>&copy; {new Date().getFullYear()} Professional Skill Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}