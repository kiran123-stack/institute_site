"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const reviews = [
  {
    name: "Rahul Verma",
    course: "ADCA",
    img: "/REVIEW/student2.webp",
    text: "The practical training here is outstanding. Trainers are incredibly supportive, and I landed a job as an Office Executive right after my 6-month course.",
    rating: 5,
    tag: "💼 Placed in 3 weeks",
    accent: "#1E40AF",
    lightAccent: "#DBEAFE",
  },
  {
    name: "Sneha Verma",
    course: "ADCA",
    img: "/REVIEW/girl2.avif",
    text: "I was nervous about computers but the step-by-step curriculum made everything click. The faculty never let me feel behind. Truly a life-changing experience.",
    rating: 5,
    tag: "🏆 Top of Batch",
    accent: "#065F46",
    lightAccent: "#D1FAE5",
  },
  {
    name: "Priya Sharma",
    course: "DMLT",
    img: "/REVIEW/girl1.png",
    text: "Best paramedical institute! Lab facilities are top-notch, and the hospital training gave me the confidence to work as a professional Lab Technician.",
    rating: 5,
    tag: "🏥 Hospital Placed",
    accent: "#92400E",
    lightAccent: "#FEF3C7",
  },
  {
    name: "Amit Kumar",
    course: "Tally with GST",
    img: "/REVIEW/student1.jfif",
    text: "Learned everything about accounting and GST filing here. The placement cell helped me secure a role in a reputed CA firm within 2 weeks of completion.",
    rating: 5,
    tag: "📊 CA Firm Placed",
    accent: "#6B21A8",
    lightAccent: "#F3E8FF",
  },
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

const StarRating = ({ count }: { count: number }) => (
  <div style={{ display: "flex", gap: "3px" }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24"
        fill={i < count ? "#C9A84C" : "none"}
        stroke={i < count ? "#C9A84C" : "#D1D5DB"} strokeWidth="2">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
);

const Avatar = ({ src, name, accent }: { src: string; name: string; accent: string }) => {
  const [err, setErr] = useState(false);
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase();
  return err ? (
    <div style={{
      width: 50, height: 50, borderRadius: "50%", flexShrink: 0,
      background: accent, display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: "1rem", color: "#fff",
      border: "2px solid rgba(255,255,255,0.6)",
    }}>{initials}</div>
  ) : (
    <img src={src} alt={name} onError={() => setErr(true)} style={{
      width: 50, height: 50, borderRadius: "50%", objectFit: "cover", flexShrink: 0,
      border: `2px solid ${accent}40`,
    }} />
  );
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % reviews.length);
    }, 4500);
  };

  useEffect(() => {
    startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleDot = (i: number) => {
    setActive(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAuto();
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-20 px-6 sm:px-12 lg:px-20">

      {/* Background geometry — mirrors WhyChooseUs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg className="absolute -top-24 -left-24 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" stroke="#1E3A8A" strokeWidth="40" fill="none"/>
        </svg>
        <svg className="absolute -bottom-20 -right-20 w-72 h-72 opacity-[0.04]" viewBox="0 0 300 300">
          <rect x="30" y="30" width="240" height="240" rx="20" stroke="#065F46" strokeWidth="40" fill="none"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#C9A84C] mb-3">
              Student Stories
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#0A1628] leading-[1.1]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What Our <br className="hidden sm:block" />
              <span className="text-[#1E40AF]">Students Say</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed lg:text-right">
            Real success stories from students who built their careers through our computer and paramedical programmes.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onClick={() => handleDot(i)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col cursor-pointer"
              style={{
                borderColor: active === i ? `${r.accent}30` : "",
                boxShadow: active === i ? `0 20px 50px rgba(0,0,0,0.08), 0 0 0 1px ${r.accent}20` : "",
              }}
            >
              {/* Top colour stripe */}
              <div className="h-1 w-full flex-shrink-0" style={{ background: r.accent }} />

              <div className="p-6 flex flex-col flex-grow">

                {/* Decorative quote mark */}
                <div
                  className="absolute top-4 right-5 text-6xl leading-none select-none pointer-events-none"
                  style={{ fontFamily: "Georgia, serif", color: `${r.accent}10` }}
                >"</div>

                {/* Placement badge */}
                <span
                  className="self-start text-[9px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full mb-4"
                  style={{ background: r.lightAccent, color: r.accent }}
                >
                  {r.tag}
                </span>

                {/* Review text */}
                <p
                  className="text-sm text-gray-500 leading-relaxed italic flex-grow mb-5 relative z-10"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  "{r.text}"
                </p>

                {/* Footer */}
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <Avatar src={r.img} name={r.name} accent={r.accent} />
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm font-black text-[#0A1628] truncate"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >{r.name}</div>
                    <div className="text-xs font-semibold mt-0.5" style={{ color: r.accent }}>{r.course}</div>
                  </div>
                  <StarRating count={r.rating} />
                </div>

                {/* Bottom accent line on active */}
                <div
                  className="mt-4 h-0.5 rounded-full transition-all duration-500"
                  style={{
                    background: r.accent,
                    width: active === i ? "100%" : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── DOTS ── */}
        <div className="flex justify-center gap-2 mb-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Review ${i + 1}`}
              className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
              style={{
                width: active === i ? 24 : 8,
                background: active === i ? "#C9A84C" : "#D1D5DB",
              }}
            />
          ))}
        </div>

        {/* ── STATS STRIP ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { val: "5,000+", label: "Graduates",       accent: "#1E40AF" },
            { val: "4.9 / 5", label: "Average Rating", accent: "#065F46" },
            { val: "200+",    label: "Google Reviews",  accent: "#92400E" },
            { val: "98%",     label: "Would Recommend", accent: "#6B21A8" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-2xl px-6 py-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span
                className="text-3xl font-black leading-none mb-1"
                style={{ fontFamily: "'Georgia', serif", color: s.accent }}
              >{s.val}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAND ── */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#0A1628] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-1">
              Join them today
            </p>
            <h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Start your success story with us.
            </h3>
          </div>
          <Link
            href="/courses"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A1628] font-black text-sm px-7 py-3 rounded-xl hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Explore All Courses
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}