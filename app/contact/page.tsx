import { Metadata } from "next";
// 1. Import the necessary icons from lucide-react
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Institute Location & Details",
  description: "Get in touch with us for computer and paramedical course details. Find our institute location, phone number, and WhatsApp contact.",
};

export default function ContactPage() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.061217431201!2d77.3708591!3d28.6279215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzQwLjUiTiA3N8KwMjInMTUuMSJF!5e0!3m2!1sen!2sin!4v1614524231456!5m2!1sen!2sin";

  return (
    <div className="relative overflow-hidden bg-[#F8F7F4] min-h-screen">

      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#0A1628] py-24 px-6 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.06]" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="#fff" strokeWidth="40" fill="none" />
          </svg>
          <svg className="absolute -bottom-16 -left-16 w-64 h-64 opacity-[0.06]" viewBox="0 0 300 300">
            <rect x="30" y="30" width="240" height="240" rx="20" stroke="#F59E0B" strokeWidth="40" fill="none" />
          </svg>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600, height: 600, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(59,130,246,0.13) 0%,transparent 70%)",
            pointerEvents: "none",
          }} />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <span className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-4">
            <Send size={14} className="text-[#F59E0B]" /> Reach Out
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-5"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            Contact & <br />
            <span style={{
              background: "linear-gradient(120deg,#60a5fa,#3b82f6,#60a5fa)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Enquire Now
            </span>
          </h1>
          <p className="text-blue-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Have questions about admissions, fees, or courses? We're here — call, WhatsApp, or fill the form below.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + ENQUIRY FORM ─────────────────────────────────── */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute -top-24 -right-24 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="#1E3A8A" strokeWidth="40" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Contact Details ── */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-3">
                Our Details
              </span>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#0A1628] leading-[1.1] mb-3"
                style={{ fontFamily: "'Georgia',serif" }}
              >
                Get In <span className="text-[#1E40AF]">Touch</span>
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Drop by our campus, call us, or send a WhatsApp message. Our counselors are available 7 days a week.
              </p>
            </div>

            {/* 2. Map through objects passing the component references directly */}
            {[
              {
                Icon: MapPin,
                accent: "#1E40AF", light: "#DBEAFE",
                title: "Visit Us",
                lines: ["123 Education Street, Knowledge Park,", "City, State – 123456"],
              },
              {
                Icon: Phone,
                accent: "#065F46", light: "#D1FAE5",
                title: "Call Us",
                lines: ["+91 98765 43210", "+91 11223 34455"],
              },
              {
                Icon: Mail,
                accent: "#7C2D12", light: "#FEF3C7",
                title: "Email Us",
                lines: ["info@professionalinstitute.com"],
              },
              {
                Icon: Clock,
                accent: "#6B21A8", light: "#F3E8FF",
                title: "Working Hours",
                lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: 10:00 AM – 2:00 PM"],
              },
            ].map(({ Icon, accent, light, title, lines }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: light, color: accent }}
                >
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: accent }}>
                    {title}
                  </p>
                  {lines.map((l) => (
                    <p key={l} className="text-sm text-gray-700 font-semibold leading-snug">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+919876543210"
                className="flex-1 flex items-center justify-center gap-2 font-black text-sm py-3.5 rounded-xl text-white shadow transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#1E40AF,#1E40AFcc)" }}
              >
                <Phone size={16} strokeWidth={2.5} /> Call Now
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 font-black text-sm py-3.5 rounded-xl text-white shadow transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}
              >
                <MessageCircle size={16} strokeWidth={2.5} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* ── RIGHT: Enquiry Form ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Form header stripe */}
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#1E40AF,#065F46,#F59E0B)" }} />
            <div className="p-8">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-2">
                Quick Enquiry
              </span>
              <h3
                className="text-2xl font-black text-[#0A1628] mb-1"
                style={{ fontFamily: "'Georgia',serif" }}
              >
                Send Us a Message
              </h3>
              <p className="text-xs text-gray-400 mb-7">We'll get back to you within 24 hours.</p>

              <form className="space-y-4">
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full text-sm font-semibold text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all placeholder:text-gray-300 placeholder:font-normal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full text-sm font-semibold text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all placeholder:text-gray-300 placeholder:font-normal"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full text-sm font-semibold text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all placeholder:text-gray-300 placeholder:font-normal"
                  />
                </div>

                {/* Course interested in */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5">
                    Course Interested In <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    className="w-full text-sm font-semibold text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all bg-white appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a course…</option>
                    <optgroup label="Computer Courses">
                      <option>DCA – Diploma in Computer Applications</option>
                      <option>ADCA – Advanced Diploma</option>
                      <option>Tally with GST</option>
                      <option>Graphic Designing</option>
                      <option>Web Development</option>
                      <option>Digital Marketing</option>
                      <option>Python Programming</option>
                    </optgroup>
                    <optgroup label="Paramedical Courses">
                      <option>DMLT</option>
                      <option>OT Technician</option>
                      <option>X-Ray Technician</option>
                      <option>Dialysis Technician</option>
                      <option>ECG Technician</option>
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ask about fees, admission dates, batch timings…"
                    className="w-full text-sm font-semibold text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all resize-none placeholder:text-gray-300 placeholder:font-normal"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-black text-sm py-3.5 rounded-xl text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
                  style={{ background: "linear-gradient(135deg,#1E40AF,#1E40AFcc)" }}
                >
                  Send Enquiry
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>

                <p className="text-center text-[10px] text-gray-400 font-semibold">
                  🔒 Your information is kept private and never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ──────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-2">
                Find Us
              </span>
              <h2
                className="text-2xl font-black text-[#0A1628]"
                style={{ fontFamily: "'Georgia',serif" }}
              >
                Our <span className="text-[#1E40AF]">Location</span>
              </h2>
            </div>

            <a
              href="https://maps.google.com/?q=28.6279215,77.3708591"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black text-[#1E40AF] hover:underline"
            >
              Open in Google Maps
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md" style={{ height: 420 }}>
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Institute Location Map"
            />
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA BAND ─────────────────────────────────────────────── */}
      <div className="px-6 sm:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#0A1628] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E0B] mb-1">See it in person</p>
            <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Georgia',serif" }}>
              Want to visit our campus?
            </h3>
            <p className="text-blue-300 text-sm mt-1">
              Book a free tour and meet our faculty in person.
            </p>
          </div>

          <a
            href="tel:+919876543210"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A1628] font-black text-sm px-7 py-3 rounded-xl hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Book a Visit
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>

    </div>
  );
}