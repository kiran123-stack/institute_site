import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Institute Location & Details",
  description: "Get in touch with us for computer and paramedical course details. Find our institute location, phone number, and WhatsApp contact.",
};

export default function ContactPage() {
  // Replace this URL with your actual Google Maps Embed URL
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.061217431201!2d77.3708591!3d28.6279215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzQwLjUiTiA3N8KwMjInMTUuMSJF!5e0!3m2!1sen!2sin!4v1614524231456!5m2!1sen!2sin";

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold font-poppins mb-4">Contact Us</h1>
        <p className="text-lg font-inter text-blue-100 max-w-2xl mx-auto px-4">
          We are here to help you choose the right career path. Reach out to us today!
        </p>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold font-poppins text-[#1E3A8A] mb-4">Get In Touch</h2>
            <p className="text-gray-600 font-inter leading-relaxed">
              Have questions about admissions, fees, or course modules? Feel free to call us, send a WhatsApp message, or drop by our campus.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 text-[#3B82F6] rounded-full flex items-center justify-center font-bold text-xl mr-4 shrink-0">📍</div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins">Visit Us</h3>
                <p className="text-gray-600 font-inter">123 Education Street, Knowledge Park, City, State 123456</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 text-[#3B82F6] rounded-full flex items-center justify-center font-bold text-xl mr-4 shrink-0">📞</div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins">Call Us</h3>
                <p className="text-gray-600 font-inter">+91 98765 43210</p>
                <p className="text-gray-600 font-inter">+91 11223 34455</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 text-[#3B82F6] rounded-full flex items-center justify-center font-bold text-xl mr-4 shrink-0">✉️</div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins">Email Us</h3>
                <p className="text-gray-600 font-inter">info@professionalinstitute.com</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
            <a href="tel:+919876543210" className="flex-1 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded text-center transition-colors shadow-md">
              Call Now
            </a>
            <a href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded text-center transition-colors shadow-md">
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* Google Map Embedded Iframe */}
        <div className="bg-white p-2 rounded-xl shadow-lg h-[400px] lg:h-auto border border-gray-100">
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            className="rounded-lg"
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Institute Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}