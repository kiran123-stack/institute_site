import Image from "next/image";
import { Metadata } from "next";
import GalleryGrid from "../components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Institute Gallery | Classrooms, Labs & Events",
  description: "Take a look at our state-of-the-art computer labs, medical training equipment, and successful student events.",
};

export default function GalleryPage() {
  // Placeholder array - Replace paths with actual images in your /public folder
  const images = [
    { src: "/lab.jfif", alt: "Modern Computer Lab", category: "Infrastructure" },
    { src: "/para.jfif", alt: "Paramedical Practical Session", category: "Practical" },
    { src: "/event.jfif", alt: "Annual Certificate Distribution", category: "Events" },
    { src: "/student.jfif", alt: "Students working on a project", category: "Students" },
    { src: "/award.jfif", alt: "Top Performers Award", category: "Events" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header */}
       <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A8A] to-[#0A1628] py-24 px-6 text-center">
 
        {/* BG shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.06]" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="#fff" strokeWidth="40" fill="none"/>
          </svg>
          <svg className="absolute -bottom-16 -left-16 w-64 h-64 opacity-[0.06]" viewBox="0 0 300 300">
            <rect x="30" y="30" width="240" height="240" rx="20" stroke="#C9A84C" strokeWidth="40" fill="none"/>
          </svg>
          <div style={{
            position:"absolute", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)",
            width:600, height:600, borderRadius:"50%",
            background:"radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
            pointerEvents:"none",
          }}/>
        </div>
 
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.35em] text-[#C9A84C] mb-4">
             Campus Life
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Life at Our <br/>
            <span style={{
              background:"linear-gradient(120deg,#C9A84C,#f59e0b,#C9A84C)",
              backgroundSize:"200% auto",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              backgroundClip:"text",
            }}>Institute</span>
          </h1>
          <p className="text-blue-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Experience our vibrant learning environment, high-tech labs, and student success events.
          </p>
 
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { val: "2",     label: "Modern Labs" },
              { val: "5,000+",label: "Alumni" },
              { val: "50+",   label: "Annual Events" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-black text-white" style={{ fontFamily:"'Georgia',serif" }}>{s.val}</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-blue-300 font-bold mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 

     <GalleryGrid/>
    </div>
  );
}