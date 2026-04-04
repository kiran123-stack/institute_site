import React from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const reasons = [
  {
    id: "certified",
    label: "01",
    title: "Govt. Certified Courses",
    desc: "All programs are registered with state authorities and carry industry-recognised certificates accepted nationwide.",
    accent: "#1E40AF",
    lightAccent: "#DBEAFE",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <rect x="6" y="4" width="36" height="40" rx="4" stroke="currentColor" strokeWidth="2.2" fill="none"/>
        <path d="M14 16h20M14 22h20M14 28h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="35" cy="36" r="7" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <path d="M32 36l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    highlight: "State Registered",
  },
  {
    id: "trainers",
    label: "02",
    title: "Expert Trainers",
    desc: "Learn hands-on from professionals who bring years of real clinical and industry experience into every session.",
    accent: "#065F46",
    lightAccent: "#D1FAE5",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2.2" fill="none"/>
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M30 10l2 2 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    highlight: "10+ Yrs Experience",
  },
  {
    id: "fees",
    label: "03",
    title: "Affordable Fees",
    desc: "World-class training at fees that every family can afford, with flexible installment options available.",
    accent: "#92400E",
    lightAccent: "#FEF3C7",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" fill="none"/>
        <path d="M24 12v4M24 32v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M18 20c0-2.21 2.686-4 6-4s6 1.79 6 4c0 4-12 4-12 8 0 2.21 2.686 4 6 4s6-1.79 6-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    highlight: "EMI Available",
  },
  {
    id: "placement",
    label: "04",
    title: "Placement Support",
    desc: "Dedicated placement cell with tie-ups across hospitals, labs, corporates and IT firms for 100% job assistance.",
    accent: "#6B21A8",
    lightAccent: "#F3E8FF",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <rect x="8" y="20" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.2" fill="none"/>
        <path d="M16 20v-4a8 8 0 0116 0v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        <path d="M19 31h10M24 28v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    highlight: "100% Assistance",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-20 px-6 sm:px-12 lg:px-20">

      {/* Subtle background geometry */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute -top-24 -right-24 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" stroke="#1E3A8A" strokeWidth="40" fill="none"/>
        </svg>
        <svg className="absolute -bottom-20 -left-20 w-72 h-72 opacity-[0.04]" viewBox="0 0 300 300">
          <rect x="30" y="30" width="240" height="240" rx="20" stroke="#065F46" strokeWidth="40" fill="none"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#C9A84C] mb-3">
              Our Strengths
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#0A1628] leading-[1.1]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why Students <br className="hidden sm:block" />
              <span className="text-[#1E40AF]">Choose</span> Us
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed lg:text-right">
            Trusted by 5,000+ students across computer & paramedical programs.
            Real skills. Real careers.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Top colour stripe */}
              <div className="h-1 w-full flex-shrink-0" style={{ background: r.accent }} />

              {/* ── BODY ── */}
              <div className="p-7 flex flex-col flex-grow">

                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: r.lightAccent, color: r.accent }}
                  >
                    {r.svg}
                  </div>

                  {/* Number badge */}
                  <span
                    className="text-[10px] font-black px-2.5 py-1 rounded-lg text-white"
                    style={{ background: r.accent }}
                  >
                    {r.label}
                  </span>
                </div>

                {/* Highlight pill */}
                <span
                  className="self-start text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-3"
                  style={{ background: r.lightAccent, color: r.accent }}
                >
                  {r.highlight}
                </span>

                <h3
                  className="text-lg font-black text-[#0A1628] leading-tight mb-2"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {r.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                  {r.desc}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="mt-6 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                  style={{ background: r.accent }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── SIDE-BY-SIDE STATS STRIP ── */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { num: "5,000+", label: "Students Trained", accent: "#1E40AF" },
            { num: "98%",    label: "Placement Rate",   accent: "#065F46" },
            { num: "15+",    label: "Years of Trust",   accent: "#92400E" },
            { num: "50+",    label: "Hiring Partners",  accent: "#6B21A8" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-2xl px-6 py-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span
                className="text-3xl font-black leading-none mb-1"
                style={{ fontFamily: "'Georgia', serif", color: s.accent }}
              >
                {s.num}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAND ── */}
        <div className="mt-6 rounded-2xl overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#0A1628] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-1">
              Ready to start?
            </p>
            <h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Enrol for the next batch today.
            </h3>
          </div>
          <a
            href="/enquiry"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A1628] font-black text-sm px-7 py-3 rounded-xl hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Book Free Counselling
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;