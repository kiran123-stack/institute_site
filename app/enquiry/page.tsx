import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Apply Now | ProInstitute Computer & Paramedical Courses",
  description: "Fast-track your career. Fill out our student enquiry form to get details about course fees, duration, and the admission process. 24-hour response time.",
};

export default function EnquiryPage() {
  return (
    <div className="relative overflow-hidden bg-[#F8F7F4] min-h-screen">

      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#0A1628] py-20 px-6 text-center">
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
            width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(59,130,246,0.13) 0%,transparent 70%)",
            pointerEvents: "none",
          }} />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-4">
            🎓 Admission Open 2025
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-4"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            Kickstart Your <br />
            <span style={{
              background: "linear-gradient(120deg,#60a5fa,#3b82f6,#60a5fa)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Career Today
            </span>
          </h1>
          <p className="text-blue-200 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
            Fill in your details — our expert counselors will guide you to the perfect course within <strong className="text-white">24 hours</strong>.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT: Image/Info LEFT + Form RIGHT ──────────────────── */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* ══ LEFT PANEL (2/5) ══════════════════════════════════════ */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 320 }}>
                <Image
                  src="/banner.jfif"
                  alt="Students at ProInstitute"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg,rgba(10,22,40,0.35) 0%,rgba(30,58,138,0.80) 100%)" }}
                />
                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E0B] mb-2">
                    Est. 2010
                  </span>
                  <h2
                    className="text-2xl font-black text-white leading-tight mb-1"
                    style={{ fontFamily: "'Georgia',serif" }}
                  >
                    ProInstitute
                  </h2>
                  <p className="text-blue-200 text-xs leading-relaxed">
                    Shaping healthcare & tech professionals since a decade.
                  </p>
                </div>
              </div>

              {/* Quote card */}
              <div
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{ background: "linear-gradient(135deg,#0A1628,#1E3A8A)" }}
              >
                <svg className="absolute top-4 left-5 w-10 h-10 opacity-[0.12]" viewBox="0 0 40 40" fill="#fff">
                  <path d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z" />
                </svg>
                <p
                  className="text-white text-base font-black leading-snug mb-3 relative z-10"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <span className="text-[#F59E0B] text-[10px] font-black uppercase tracking-[0.2em]">
                  — Nelson Mandela
                </span>
              </div>

              {/* Trust badges */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E0B] block mb-4">
                  Why Choose Us
                </span>
                <div className="space-y-3">
                  {[
                    { icon: <img src="/icons/hand.svg" alt="icon"/>, accent: "#1E40AF", light: "#DBEAFE", text: "100% Placement Assistance" },
                    { icon: "🏥", accent: "#065F46", light: "#D1FAE5", text: "Hospital & Live Project Training" },
                    { icon: "📜", accent: "#92400E", light: "#FEF3C7", text: "Govt. Recognised Certificates" },
                    { icon: "💬", accent: "#6B21A8", light: "#F3E8FF", text: "Free Career Counseling" },
                    { icon: <img src="/icons/contact.svg" alt="icon2"/>, accent: "#0E7490", light: "#CFFAFE", text: "24-Hour Counselor Response" },
                    { icon: <img src="/support.svg" alt="icon3"/>, accent: "#065F46", light: "#D1FAE5", text: "Expert Faculty with Hospital Exp." },
                  ].map(({ icon, accent, light, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                        style={{ background: light }}
                      >
                        {icon}
                      </div>
                      <span className="text-xs font-bold text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact */}
              <div className="flex gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex-1 flex items-center justify-center gap-2 font-black text-xs py-3 rounded-xl text-white shadow transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ background: "linear-gradient(135deg,#1E40AF,#1E40AFcc)" }}
                >
                  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="20" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
</svg> Call Us
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi, I want to know about courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 font-black text-xs py-3 rounded-xl text-white shadow transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12c0 1.76.45 3.42 1.25 4.89L2 22l5.34-1.18c1.42.74 3.03 1.18 4.75 1.18 5.52 0 10-4.48 10-10S17.51 2 11.99 2zm5.42 14.12c-.22.61-1.28 1.15-1.77 1.22-.44.06-1.02.16-3.13-.72-2.54-1.05-4.17-3.66-4.29-3.83-.13-.16-1.03-1.37-1.03-2.61 0-1.24.64-1.85.87-2.11.23-.26.5-.32.66-.32.16 0 .33 0 .47.01.15.01.35-.06.54.41.2.47.68 1.66.74 1.79.06.13.1.28.02.43-.08.15-.13.24-.26.4-.13.16-.28.34-.39.46-.13.14-.27.28-.11.56.16.28.71 1.17 1.51 1.89.98.88 1.86 1.15 2.14 1.28.28.13.44.11.6-.07.16-.18.68-.8.86-1.07.18-.28.36-.23.62-.13.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.72-.15 1.33z" />
                    </svg>WhatsApp
                </a>
              </div>
            </div>

            {/* ══ RIGHT PANEL: FORM (3/5) ═══════════════════════════════ */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Rainbow top stripe */}
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#1E40AF,#065F46,#F59E0B)" }} />

              <div className="p-8 sm:p-10">
                <div className="mb-7">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B]">
                    Student Enquiry Form
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-black text-[#0A1628] leading-tight mt-1 mb-1"
                    style={{ fontFamily: "'Georgia',serif" }}
                  >
                    Apply for Admission
                  </h2>
                  <p className="text-xs text-gray-400">
                    Fields marked <span className="text-red-400 font-bold">*</span> are required. We'll get back within 24 hours.
                  </p>
                </div>

                <form className="space-y-5">

                  {/* Row 1 — Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full Name" required>
                      <input type="text" name="name" required placeholder="e.g. Rahul Sharma" className={inp} />
                    </Field>
                    <Field label="Phone Number" required>
                      <input type="tel" name="phone" required placeholder="+91 98765 43210" className={inp} />
                    </Field>
                  </div>

                  {/* Row 2 — Email + City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Email Address">
                      <input type="email" name="email" placeholder="you@example.com" className={inp} />
                    </Field>
                    <Field label="City / District" required>
                      <input type="text" name="city" required placeholder="e.g. Delhi, Noida…" className={inp} />
                    </Field>
                  </div>

                  {/* Row 3 — Qualification + Age */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Highest Qualification" required>
                      <div className="relative">
                        <select name="qualification" required defaultValue="" className={sel}>
                          <option value="" disabled>Select…</option>
                          {["10th Pass", "12th Pass", "Graduate", "Post Graduate", "Other"].map(o => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                        <ChevronDown />
                      </div>
                    </Field>
                    <Field label="Your Age">
                      <input type="number" name="age" min={15} max={60} placeholder="e.g. 20" className={inp} />
                    </Field>
                  </div>

                  {/* Course */}
                  <Field label="Course Interested In" required>
                    <div className="relative">
                      <select name="course" required defaultValue="" className={sel}>
                        <option value="" disabled>Select your path…</option>
                        <optgroup label="💻 Computer Courses">
                          {[
                            "DCA – Diploma in Computer Applications",
                            "ADCA – Advanced Diploma",
                            "Tally with GST",
                            "Graphic Designing",
                            "Web Development",
                            "Digital Marketing",
                            "Python Programming",
                          ].map(o => (<option key={o}>{o}</option>))}
                        </optgroup>
                        <optgroup label="🩺 Paramedical Courses">
                          {[
                            "DMLT",
                            "OT Technician",
                            "X-Ray Technician",
                            "Dialysis Technician",
                            "ECG Technician",
                          ].map(o => (<option key={o}>{o}</option>))}
                        </optgroup>
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>

                  {/* Batch Timing */}
                  <Field label="Preferred Batch Timing">
                    <div className="flex gap-4 pt-1 flex-wrap">
                      {["Morning", "Afternoon", "Evening"].map(t => (
                        <label key={t} className="flex items-center gap-2 text-xs font-bold text-gray-600 cursor-pointer select-none">
                          <input type="radio" name="batch" value={t} className="accent-[#1E40AF] w-3.5 h-3.5" />
                          {t}
                        </label>
                      ))}
                    </div>
                  </Field>

                  {/* Message */}
                  <Field label="Message / Questions">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Ask about fees, batch dates, scholarships, eligibility criteria…"
                      className={inp + " resize-none"}
                    />
                  </Field>

                  {/* How did you hear */}
                  <Field label="How Did You Hear About Us?">
                    <div className="relative">
                      <select name="source" defaultValue="" className={sel}>
                        <option value="" disabled>Select…</option>
                        {["Google Search", "Social Media", "Friend / Family", "Newspaper / Pamphlet", "Walking Past the Institute", "Other"].map(o => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown />
                    </div>
                  </Field>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-2" />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 font-black text-sm py-4 rounded-xl text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
                    style={{ background: "linear-gradient(135deg,#1E40AF,#1E40AFcc)" }}
                  >
                    Submit Enquiry
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p className="text-center text-[10px] text-gray-400 font-semibold pt-1">
                    🔒 Your information is completely private and never shared.
                  </p>

                  {/* OR WhatsApp */}
                  <div className="relative flex items-center gap-3 py-1">
                    <div className="flex-1 h-px bg-gray-100" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">or</span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>

                  <a
                    href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20enroll%20in%20a%20course."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-black text-sm py-3.5 rounded-xl text-white shadow transition-all hover:-translate-y-0.5 hover:brightness-110"
                    style={{ background: "linear-gradient(135deg,#16a34a,#15803d)" }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12c0 1.76.45 3.42 1.25 4.89L2 22l5.34-1.18c1.42.74 3.03 1.18 4.75 1.18 5.52 0 10-4.48 10-10S17.51 2 11.99 2zm5.42 14.12c-.22.61-1.28 1.15-1.77 1.22-.44.06-1.02.16-3.13-.72-2.54-1.05-4.17-3.66-4.29-3.83-.13-.16-1.03-1.37-1.03-2.61 0-1.24.64-1.85.87-2.11.23-.26.5-.32.66-.32.16 0 .33 0 .47.01.15.01.35-.06.54.41.2.47.68 1.66.74 1.79.06.13.1.28.02.43-.08.15-.13.24-.26.4-.13.16-.28.34-.39.46-.13.14-.27.28-.11.56.16.28.71 1.17 1.51 1.89.98.88 1.86 1.15 2.14 1.28.28.13.44.11.6-.07.16-.18.68-.8.86-1.07.18-.28.36-.23.62-.13.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.72-.15 1.33z" />
                    </svg>
                    WhatsApp Us for Instant Reply
                  </a>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BAND ─────────────────────────────────────────────── */}
      <div className="px-6 sm:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#0A1628] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E0B] mb-1">
              See it in person
            </p>
            <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Georgia',serif" }}>
              Want to visit our campus?
            </h3>
            <p className="text-blue-300 text-sm mt-1">
              Book a free institute tour and meet our faculty in person.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A1628] font-black text-sm px-7 py-3 rounded-xl hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Contact Us
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
}

// ── Reusable field wrapper ─────────────────────────────────────────────────────
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

// ── Chevron for selects ────────────────────────────────────────────────────────
function ChevronDown() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

// ── Shared input/select classes ────────────────────────────────────────────────
const inp = "w-full text-sm font-semibold text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all placeholder:text-gray-300 placeholder:font-normal bg-[#FAFAFA]";
const sel = "w-full text-sm font-semibold text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/10 transition-all bg-[#FAFAFA] appearance-none pr-10";