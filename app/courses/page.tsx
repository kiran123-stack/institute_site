import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import coursesData from "../data/computerCourses.json";

type ComputerCourse = {
  id: number;
  title: string;
  slug: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  modules: string[];
  careerOpportunities: string[];
};

export const metadata: Metadata = {
  title: "Computer Courses | DCA, ADCA, Tally",
  description:
    "Explore our professional computer courses including DCA, ADCA, Tally with GST, Web Development, and Digital Marketing.",
};

// ── Accent palette cycling per card ────────────────────────────────────────
const ACCENTS = [
  { accent: "#1E40AF", light: "#DBEAFE", emoji: "💻" },
  { accent: "#065F46", light: "#D1FAE5", emoji: "🖥️" },
  { accent: "#7C2D12", light: "#FEF3C7", emoji: "📊" },
  { accent: "#6B21A8", light: "#F3E8FF", emoji: "🎨" },
  { accent: "#0E7490", light: "#CFFAFE", emoji: "🌐" },
  { accent: "#92400E", light: "#FEF3C7", emoji: "📈" },
  { accent: "#064E3B", light: "#D1FAE5", emoji: "🐍" },
];

export default function CoursesPage() {
  const courses = coursesData as ComputerCourse[];

  return (
    <div className="relative overflow-hidden bg-[#F8F7F4] min-h-screen">

      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#0A1628] py-24 px-6 text-center">
        {/* Decorative SVGs */}
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
            background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-4">
             IT &amp; Computer Education
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Professional <br />
            <span style={{
              background: "linear-gradient(120deg,#60a5fa,#3b82f6,#60a5fa)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Computer Courses
            </span>
          </h1>
          <p className="text-blue-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            100% job-oriented programmes designed for students and working professionals — with placement support.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-2">
            {[
              { val: "100%", label: "Placement Assistance" },
              { val: `${courses.length}+`, label: "Computer Courses" },
              { val: "Live", label: "Practical Projects" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black text-white" style={{ fontFamily: "'Georgia', serif" }}>{s.val}</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-blue-300 font-bold mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE CARDS ────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20">
        {/* Subtle background decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute -top-24 -right-24 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="#1E3A8A" strokeWidth="40" fill="none" />
          </svg>
          <svg className="absolute -bottom-20 -left-20 w-72 h-72 opacity-[0.04]" viewBox="0 0 300 300">
            <rect x="30" y="30" width="240" height="240" rx="20" stroke="#065F46" strokeWidth="40" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Section header */}
          <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#F59E0B] mb-3">
                Available Courses
              </span>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#0A1628] leading-[1.1]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Choose Your <span className="text-[#1E40AF]">Tech Path</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed lg:text-right">
              All courses include live projects, govt-recognised certificates &amp; dedicated placement support.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const { accent, light, emoji } = ACCENTS[index % ACCENTS.length];
              const shortTitle = course.title.includes(" - ")
                ? course.title.split(" - ")[0]
                : course.title;
              const fullTitle = course.title.includes(" - ")
                ? course.title.split(" - ")[1]
                : "";

              return (
                <div
                  key={course.id}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
                >
                  {/* ── COURSE IMAGE ── */}
                  <div className="relative w-full h-44 overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, transparent 50%, ${accent}44 100%)`,
                      }}
                    />
                    {/* Number badge */}
                    <span
                      className="absolute top-3 right-3 text-[10px] font-black px-2.5 py-0.5 rounded-md text-white shadow-md"
                      style={{ background: accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Level badge */}
                    <span
                      className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-[0.12em] px-2.5 py-1 rounded-full shadow-md"
                      style={{ background: light, color: accent }}
                    >
                      {course.duration}
                    </span>
                  </div>

                  {/* Accent stripe */}
                  <div className="h-1 w-full flex-shrink-0" style={{ background: accent }} />

                  <div className="p-6 flex flex-col flex-grow">

                    {/* Icon row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                        style={{ background: light }}
                      >
                        {emoji}
                      </div>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-xl font-black text-[#0A1628] leading-tight mb-1"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {shortTitle}
                    </h2>
                    {fullTitle && (
                      <p className="text-xs font-semibold mb-3" style={{ color: accent }}>
                        {fullTitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow">
                      {course.description}
                    </p>

                    {/* Duration + Fee */}
                    <div className="space-y-2 mb-4">
                      {[
                        { label: "Duration", value: course.duration },
                        { label: "Fee", value: `₹${course.price.toLocaleString("en-IN")}` },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">{row.label}</span>
                          <span className="text-sm font-black text-[#0A1628]" style={{ fontFamily: "'Georgia', serif" }}>{row.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Modules */}
                    {course.modules?.length > 0 && (
                      <div className="mb-4">
                        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-400 block mb-2">
                          Key Modules
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.modules.slice(0, 3).map((mod) => (
                            <span
                              key={mod}
                              className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: light, color: accent }}
                            >
                              {mod}
                            </span>
                          ))}
                          {course.modules.length > 3 && (
                            <span
                              className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: light, color: accent }}
                            >
                              +{course.modules.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Career Opportunities */}
                    {course.careerOpportunities?.length > 0 && (
                      <div className="mb-5">
                        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-400 block mb-2">
                          Career Paths
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.careerOpportunities.slice(0, 2).map((opp) => (
                            <span
                              key={opp}
                              className="text-[9px] font-bold px-2 py-0.5 rounded-full border"
                              style={{ borderColor: `${accent}40`, color: accent }}
                            >
                              {opp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="border-t border-gray-100 pt-4 mt-auto flex gap-2">
                      {/*<Link
                        href={`/courses/${course.slug}`}
                        className="flex-1 flex items-center justify-center gap-1.5 font-black text-sm py-2.5 rounded-xl border-2 transition-all duration-200 hover:brightness-110"
                        style={{ borderColor: accent, color: accent }}
                      >
                        View Details
                      </Link>*/}
                      <Link
                        href={`/enquiry?course=${course.slug}`}
                        className="flex-1 flex items-center justify-center gap-1.5 font-black text-sm py-2.5 rounded-xl text-white shadow transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                        style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
                      >
                        Enquire
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Hover underline */}
                    <div
                      className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                      style={{ background: accent }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────────────── */}
      <div className="px-6 sm:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#0A1628] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E0B] mb-1">
              Not sure yet?
            </p>
            <h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Which course is right for you?
            </h3>
            <p className="text-blue-300 text-sm mt-1">
              Our counselors will guide you to the perfect programme — free of charge.
            </p>
          </div>
          <Link
            href="/enquiry"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A1628] font-black text-sm px-7 py-3 rounded-xl hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Get Free Counseling
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
}