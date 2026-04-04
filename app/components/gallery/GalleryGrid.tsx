import React from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const items = [
  { id: 1, title: "Modern Computer Lab",    tag: "Infrastructure", src: "/computer-class.jfif",     accent: "#1E40AF", lightAccent: "#DBEAFE", span: "col-span-2" },
  { id: 2, title: "Paramedical Practical",  tag: "Learning",       src: "/para.jfif",    accent: "#065F46", lightAccent: "#D1FAE5", span: "" },
  { id: 3, title: "Annual Convocation",     tag: "Events",         src: "/banner.jfif",   accent: "#92400E", lightAccent: "#FEF3C7", span: "" },
  { id: 4, title: "Classroom Session",      tag: "Theory",         src: "/students.jfif", accent: "#6B21A8", lightAccent: "#F3E8FF", span: "col-span-2" },
  { id: 5, title: "teaching faculty",   tag: "Success",        src: "/study.jfif",   accent: "#1E40AF", lightAccent: "#DBEAFE", span: "" },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const GalleryGrid = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-20 px-6 sm:px-12 lg:px-20">

      {/* Background geometry */}
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
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#C9A84C] mb-3">
              Campus Life
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#0A1628] leading-[1.1]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              A Glimpse of <br className="hidden sm:block" />
              <span className="text-[#1E40AF]">Our Institute</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed lg:text-right">
            From state-of-the-art labs to milestone ceremonies — see where your journey begins.
          </p>
        </div>

        {/* ── MOSAIC GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
          {items.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${item.span}`}
            >
              {/* Accent top stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: item.accent }} />

              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Fallback bg if image fails */}
              <div
                className="absolute inset-0 -z-10"
                style={{ background: item.lightAccent }}
              />

              {/* Permanent soft bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Tag pill — top left, always visible */}
              <div className="absolute top-5 left-5 z-20">
                <span
                  className="text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                  style={{ background: item.lightAccent, color: item.accent }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Content — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <h4
                  className="text-white font-black text-base leading-tight drop-shadow"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {item.title}
                </h4>
                {/* Accent underline */}
                <div
                  className="mt-2 h-0.5 w-0 group-hover:w-10 rounded-full transition-all duration-500"
                  style={{ background: item.accent === "#92400E" ? "#C9A84C" : "#C9A84C" }}
                />
              </div>

              {/* Corner number badge */}
              <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="text-[10px] font-black px-2 py-0.5 rounded-md text-white"
                  style={{ background: item.accent }}
                >
                  0{item.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAND ── */}
        <div className="mt-10 rounded-2xl overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#1E3A8A] to-[#0A1628] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] mb-1">
              See it yourself
            </p>
            <h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Visit our campus for a free tour.
            </h3>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A1628] font-black text-sm px-7 py-3 rounded-xl hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Book a Campus Visit
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;