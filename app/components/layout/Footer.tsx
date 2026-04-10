import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0D1F3C] to-[#0A1628]">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute -top-16 -right-16 w-72 h-72 opacity-[0.04]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" stroke="#fff" strokeWidth="40" fill="none" />
        </svg>
        <svg className="absolute -bottom-12 -left-12 w-56 h-56 opacity-[0.04]" viewBox="0 0 300 300">
          <rect x="30" y="30" width="240" height="240" rx="20" stroke="#F59E0B" strokeWidth="40" fill="none" />
        </svg>
        <div style={{
          position: "absolute", bottom: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 700, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(59,130,246,0.07) 0%,transparent 70%)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Rainbow top stripe */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#1E40AF,#065F46,#F59E0B)" }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-14 pb-8">

        {/* ── MAIN GRID ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-3">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Est. 2005
            </span>
            <h3
              className="text-2xl font-black text-white mb-3"
              style={{ fontFamily: "'Georgia',serif" }}
            >
              ProInstitute
            </h3>
            <p className="text-sm text-blue-200 leading-relaxed mb-5">
              Empowering students with industry-ready skills. Govt-certified computer &amp; paramedical courses with 100% placement assistance.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", href: "#", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M6.5 6.5A.5.5 0 007 7v0a.5.5 0 00-.5-.5zM2 7a5 5 0 015-5h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5z" },
                { label: "YouTube", href: "#", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
              ].map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-blue-300 hover:text-white hover:border-[#F59E0B] hover:bg-[#F59E0B]/10 transition-all duration-200"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-4">
              Navigation
            </span>
            <h4 className="text-base font-black text-white mb-4" style={{ fontFamily: "'Georgia',serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Computer Courses", href: "/courses" },
                { label: "Paramedical Courses", href: "/paramedical" },
      
                { label: "Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-blue-200 hover:text-white group transition-colors duration-200"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 group-hover:w-2 transition-all duration-200"
                      style={{ background: "#F59E0B" }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-4">
              Reach Out
            </span>
            <h4 className="text-base font-black text-white mb-4" style={{ fontFamily: "'Georgia',serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  accent: "#1E40AF", light: "#1E40AF22",
                  content: <span className="text-sm text-blue-200 leading-snug">123 Education Street,<br />Knowledge Park, City – 123456</span>,
                },
                {
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  accent: "#065F46", light: "#065F4622",
                  content: (
                    <div className="flex flex-col gap-0.5">
                      <a href="tel:+919876543210" className="text-sm text-blue-200 hover:text-white transition-colors">+91 98765 43210</a>
                      <a href="tel:+911122334455" className="text-sm text-blue-200 hover:text-white transition-colors">+91 11223 34455</a>
                    </div>
                  ),
                },
                {
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  accent: "#92400E", light: "#92400E22",
                  content: <a href="mailto:info@professionalinstitute.com" className="text-sm text-blue-200 hover:text-white transition-colors break-all">info@institute.com</a>,
                },
              ].map(({ icon, accent, light, content }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: light, border: `1px solid ${accent}44`, color: accent }}
                  >
                    {icon}
                  </div>
                  <div>{content}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Hours + CTA ── */}
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-4">
              Schedule
            </span>
            <h4 className="text-base font-black text-white mb-4" style={{ fontFamily: "'Georgia',serif" }}>
              Working Hours
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { day: "Mon – Fri", time: "8:00 AM – 7:00 PM" },
                { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map(({ day, time }) => (
                <li key={day} className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-blue-300">{day}</span>
                  <span
                    className="text-xs font-black px-2 py-0.5 rounded-md"
                    style={{
                      background: time === "Closed" ? "rgba(239,68,68,0.15)" : "rgba(249,158,11,0.12)",
                      color: time === "Closed" ? "#f87171" : "#F59E0B",
                    }}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2.5">
              <Link
                href="/enquiry"
                className="flex items-center justify-center gap-2 font-black text-xs py-3 rounded-xl text-[#0A1628] shadow transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#F59E0B,#d97706)" }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
                Book Free Demo
              </Link>

              <a
                href="https://wa.me/919876543210?text=Hi, I want to know about courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-black text-xs py-3 rounded-xl text-white border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-3.5 h-3.5" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12c0 1.76.45 3.42 1.25 4.89L2 22l5.34-1.18c1.42.74 3.03 1.18 4.75 1.18 5.52 0 10-4.48 10-10S17.51 2 11.99 2zm5.42 14.12c-.22.61-1.28 1.15-1.77 1.22-.44.06-1.02.16-3.13-.72-2.54-1.05-4.17-3.66-4.29-3.83-.13-.16-1.03-1.37-1.03-2.61 0-1.24.64-1.85.87-2.11.23-.26.5-.32.66-.32.16 0 .33 0 .47.01.15.01.35-.06.54.41.2.47.68 1.66.74 1.79.06.13.1.28.02.43-.08.15-.13.24-.26.4-.13.16-.28.34-.39.46-.13.14-.27.28-.11.56.16.28.71 1.17 1.51 1.89.98.88 1.86 1.15 2.14 1.28.28.13.44.11.6-.07.16-.18.68-.8.86-1.07.18-.28.36-.23.62-.13.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.72-.15 1.33z" />
                </svg>
                <span style={{ color: "#25D366" }}>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-300/70 font-semibold text-center sm:text-left">
            © {new Date().getFullYear()} Professional Skill Institute. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {["Privacy Policy", "Terms of Use", "Refund Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-300/50 hover:text-[#F59E0B] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
