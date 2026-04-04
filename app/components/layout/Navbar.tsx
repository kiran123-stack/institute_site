"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, SVGProps } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "About", path: "/about", icon: AboutIcon },
    { name: "Courses", path: "/courses", icon: CourseIcon },
    { name: "Paramedical", path: "/paramedical", icon: MedicalIcon },
    { name: "Gallery", path: "/gallery", icon: GalleryIcon },
    { name: "Contact", path: "/contact", icon: ContactIcon },
  ];

  return (
    <>
      {/* ── Main Sticky Navbar ── */}
      <nav
        className={`bg-white sticky top-0 z-50 transition-all duration-300 relative ${
          scrolled
            ? "shadow-[0_4px_24px_rgba(10,22,40,0.13)] border-b border-[#e8d5a3]/50"
            : "border-b border-gray-100"
        }`}
      >
        {/* Gold top-line */}
        <div className="h-[3px] bg-gradient-to-r from-[#c9a84c] via-[#f0d078] to-[#c9a84c]" />

        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-15 md:h-16" style={{ height: "clamp(52px, 8vw, 64px)" }}>

            {/* ── Logo (Left) ── */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0a1628] flex items-center justify-center ring-2 ring-[#c9a84c]/60 group-hover:ring-[#c9a84c] transition-all duration-300 group-hover:scale-105 shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a84c]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-[#0a1628] font-extrabold text-[15px] sm:text-base md:text-lg tracking-tight leading-none font-serif">
                  Pro<span className="text-[#c9a84c]">Institute</span>
                </span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 tracking-[0.12em] sm:tracking-[0.18em] uppercase font-medium">
                  Est. 2005
                </span>
              </div>
            </Link>

            {/* ── Right Group (Links + Buttons) ── */}
            {/* Grouping these fixes the center-alignment bug on desktop */}
            <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
              
              {/* ── Desktop Nav Links (lg+) ── */}
              <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[11px] xl:text-[13px] font-medium">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`relative flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-2 rounded-md transition-all duration-200 group whitespace-nowrap ${
                        active
                          ? "text-[#0a1628] font-semibold"
                          : "text-gray-500 hover:text-[#0a1628]"
                      }`}
                    >
                      <span
                        className={`absolute inset-0 rounded-md transition-all duration-200 ${
                          active
                            ? "bg-[#f8f2e1] opacity-100"
                            : "bg-[#f8f2e1] opacity-0 group-hover:opacity-60"
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#c9a84c] rounded-full transition-all duration-300 ${
                          active
                            ? "w-4/5 opacity-100"
                            : "w-0 opacity-0 group-hover:w-2/3 group-hover:opacity-60"
                        }`}
                      />
                      <span className="relative flex items-center gap-1 xl:gap-1.5">
                        <Icon
                          className={`w-[13px] h-[13px] xl:w-[15px] xl:h-[15px] transition-colors duration-200 ${
                            active
                              ? "text-[#c9a84c]"
                              : "text-gray-400 group-hover:text-[#c9a84c]"
                          }`}
                        />
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* ── Enquiry + Hamburger ── */}
              <div className="flex items-center gap-1.5 sm:gap-2.5">
                {/* Enquiry button — shown sm+ */}
                <Link
                  href={'/enquiry?course=${course.slug}'}
                  className="relative hidden sm:inline-flex lg:hidden xl:inline-flex items-center gap-1.5 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] md:text-[13px] font-bold text-[#0a1628] rounded-md overflow-hidden shadow-[0_2px_12px_rgba(201,168,76,0.4)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.6)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-300 group whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #f0d078 0%, #c9a84c 50%, #a8892e 100%)",
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <EnquiryIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 relative z-10" />
                  <span className="relative z-10 tracking-wide hidden sm:inline">Quick Enquiry</span>
                  <span className="relative z-10 sm:hidden">Enquire</span>
                </Link>

                {/* Hamburger — visible below lg */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={isOpen}
                  className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors shrink-0"
                >
                  <span
                    className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 origin-center ${
                      isOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                  />
                  <span
                    className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 ${
                      isOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                  />
                  <span
                    className={`block w-5 h-[2px] bg-[#0a1628] rounded-full transition-all duration-300 origin-center ${
                      isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile / Tablet Dropdown (Fix: Absolute positioning to stop push-down) ── */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-y-auto origin-top ${
            isOpen ? "max-h-[80vh] opacity-100 border-b border-[#e8d5a3]/50" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent mx-4" />

          <div className="px-4 pt-3 pb-6 bg-white">
            {/* Fix: 1 col on mobile, 2 col on sm to prevent truncation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      active
                        ? "bg-[#f8f2e1] text-[#0a1628] font-bold border-l-[4px] border-[#c9a84c]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0a1628] border-l-[4px] border-transparent"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 shrink-0 ${
                        active ? "text-[#c9a84c]" : "text-gray-400"
                      }`}
                    />
                    <span className="text-[14px] font-medium truncate">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 mb-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Full-width mobile enquiry CTA */}
            <Link
              href="/quick-enquiry"
              onClick={() => setIsOpen(false)}
              className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-[#0a1628] text-sm tracking-wide overflow-hidden shadow-[0_2px_14px_rgba(201,168,76,0.35)] hover:shadow-[0_4px_22px_rgba(201,168,76,0.55)] transition-all duration-300 group active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #f0d078 0%, #c9a84c 50%, #a8892e 100%)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <EnquiryIcon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Quick Enquiry</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

// ── BASE ICON ──────────────────────────────────────────────

function BaseIcon({
  children,
  className = "w-5 h-5",
  ...props
}: { children: ReactNode } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-6v-6H10v6H4a1 1 0 01-1-1z" />
    </BaseIcon>
  );
}

function AboutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0113 0" />
    </BaseIcon>
  );
}

function CourseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="6" width="16" height="12" />
      <path d="M4 10h16" />
    </BaseIcon>
  );
}

function MedicalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M12 11v6M9 14h6" />
      <path d="M6 3h12v3H6zM6 6v2l-2 1v11a2 2 0 002 2h12a2 2 0 002-2V9l-2-1V6" />
    </BaseIcon>
  );
}

function GalleryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="16" cy="8" r="1.5" />
      <path d="M3 16l5-5 4 4 3-3 6 6" />
    </BaseIcon>
  );
}

function ContactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
    </BaseIcon>
  );
}

function EnquiryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </BaseIcon>
  );
}