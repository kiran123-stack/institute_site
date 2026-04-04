import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ════════════════════════════════════════════════════════════════
//  ✅ EDIT YOUR DATA HERE — changes appear on the page automatically
// ════════════════════════════════════════════════════════════════

// ─── HERO ─────────────────────────────────────────────────────
const heroContent = {
  eyebrow: "Est. 2013",
  heading: "About Our Institute",
  subheading:
    "Empowering students with industry-ready skills for over 10 years. Explore our journey, meet our expert trainers, and discover why we are the trusted choice for computer and paramedical education.",
};

// ─── OUR STORY ────────────────────────────────────────────────
const ourStory = {
  para1:
    "Founded with a vision to bridge the skills gap, our institute has been at the forefront of computer and paramedical education. We believe in practical, hands-on learning that directly translates to career success.",
  para2:
    "Over the past decade, we have trained thousands of students, partnered with leading employers, and continuously updated our curriculum to stay ahead of industry demands.",
  // 📌 Campus photo — landscape 4:3, 800×600px recommended
  campusImage: "/banner.jfif",
  campusImageAlt: "Institute campus",
  // 📌 Small floating image — appears TOP-RIGHT of main image — square 300×300px
  floatingImage: "/founder.jfif",
  floatingImageAlt: "Founder",
};

// ─── STATS ────────────────────────────────────────────────────
const stats = [
  { num: "10+", label: "Years Experience" },
  { num: "5K+", label: "Students Trained" },
  { num: "40+", label: "Courses Offered" },
  { num: "98%", label: "Placement Rate" },
];

// ─── GALLERY ──────────────────────────────────────────────────
// First item = large tile (col-span-2). Rest are square tiles.
// 📌 Replace null with your image path e.g. "/gallery/lab.jpg"
const galleryImages = [
  { image: "/lab-study.jfif" as string | null, alt: "Lab / Classroom",       placeholder: "Add lab / classroom photo — 800×600px landscape" },
  { image: "/event.jfif" as string | null, alt: "Event",                 placeholder: "Add event photo — 400×400px"                     },
  { image: "/students.jfif" as string | null, alt: "Students",              placeholder: "Add students photo — 400×400px"                  },
  { image: "/computer-class.jfif" as string | null, alt: "Awards / Certificates", placeholder: "Add awards / certificate photo — 400×400px"      },
  { image: "/lab2.jfif" as string | null, alt: "Campus Life",           placeholder: "Add any photo — 400×400px"                      },
];

// ─── FOUNDER ──────────────────────────────────────────────────
const founder = {
  name: "John Doe",
  role: "Founder & Director",
  since: "Est. 2005 · 10+ Years",
  quote:
    "Education is not just about degrees; it is about acquiring the right skills to build a stable and prosperous future. Our curriculum is constantly updated to meet industry demands, ensuring our students are always one step ahead.",
  closing:
    "Our commitment: every student leaves with real skills, real confidence, and real opportunities.",
  // 📌 Founder headshot — square 300×300px
  image: "/founder.jfif",
  imageAlt: "Founder",
};

// ─── TEAM ─────────────────────────────────────────────────────
//  Add a new team member by copying an object into this array
const teamMembers = [
  {
    name: "Dr. Priya Sharma",
    role: "Head of Computer Science",
    experience: "12 Years Experience",
    image: "/teacher.jfif" as string | null,
    imageAlt: "Dr. Priya Sharma",
  },
  {
    name: "Mrs. shreya Gupta",
    role: "Paramedical Division Head",
    experience: "15 Years Experience",
    image: "/TEACHER2.jfif" as string | null,  // 📌 Replace with "/team/rajesh.jpg"
    imageAlt: "Mr. Rajesh Gupta",
  },
  {
    name: "Ms. Anita Verma",
    role: "Career Placement Officer",
    experience: "8 Years Experience",
    image: "/TEACHER3.jfif" as string | null,  // 📌 Replace with "/team/anita.jpg"
    imageAlt: "Ms. Anita Verma",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────
const certifications = [
  {
    label: "ISO Certified",
    desc: "International quality standards maintained across all programs.",
    emoji: "🏅",
    logo:  "/iso.png" ,  
  },
  {
    label: "Govt. Recognised",
    desc: "Officially recognised by State & Central Government bodies.",
    emoji: "🏛️",
    logo: "/gov.jfif " ,  
  },
  {
    label: "Skill India Partner",
    desc: "Empowering youth under the national Skill India mission.",
    emoji: "🇮🇳",
    logo: "/skill.png" ,  
  },
];

// ─── CTA BANNER ───────────────────────────────────────────────
const ctaBanner = {
  heading: "Ready to Build Your Bright Future?",
  subheading:
    "Join thousands of successful students who turned their ambitions into careers. Admissions are open — take the first step today.",
  primaryLabel: "Explore Courses →",
  primaryHref: "/courses",
  secondaryLabel: "Enquire Now",
  secondaryHref: "/enquiry",
};

// ════════════════════════════════════════════════════════════════
//  PAGE COMPONENT — no need to edit below this line
// ════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  title: "About Our Institute",
  description:
    "Learn about our history, certified trainers, and mission to provide high-quality computer and paramedical education.",
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes expandLine { to { width: 80px; } }
        .serif { font-family:'Cormorant Garamond',Georgia,serif; }
        .sans  { font-family:'Inter',sans-serif; }
      `}</style>

      <div className="bg-[#F8F7F4] min-h-screen sans">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[#0f1f4a] text-white py-24 text-center">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full bg-blue-400/10 blur-3xl pointer-events-none -translate-y-1/2" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            
            <h1 className="serif text-5xl sm:text-6xl font-bold leading-tight mb-6 text-white">
              About Our <span className="text-amber-400">Institute</span>
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-0 mx-auto mb-6"
              style={{ animation: "expandLine 0.9s ease 0.5s forwards" }} />
            <p className="text-base sm:text-lg font-light text-blue-100/75 leading-relaxed">
              {heroContent.subheading}
            </p>
          </div>
        </section>

        {/* ── JOURNEY + STATS ── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text side */}
            <div>
              <span className="inline-block text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Story</span>
              <h2 className="serif text-4xl sm:text-5xl font-bold text-[#0f1f4a] leading-tight mb-5">
                Our Journey to<br /><span className="text-amber-500">Excellence</span>
              </h2>
              <div className="w-12 h-0.5 bg-amber-400 mb-6" />
              <p className="text-gray-600 font-light leading-relaxed mb-4">{ourStory.para1}</p>
              <p className="text-gray-600 font-light leading-relaxed mb-10">{ourStory.para2}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map(({ num, label }) => (
                  <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 border-b-2 border-b-amber-400">
                    <span className="serif block text-3xl font-bold text-[#0f1f4a]">{num}</span>
                    <span className="text-xs text-gray-500 font-medium mt-1 block">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── IMAGE SIDE ──
                pt-6 pr-6 creates space so the top-right floating image
                overflows visibly without being clipped by the parent.      */}
            <div className="relative pt-6 pr-6">

              {/* Main campus image */}
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 relative">
                {ourStory.campusImage ? (
                  <Image
                    src={ourStory.campusImage}
                    alt={ourStory.campusImageAlt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm text-center p-4">
                    📌 Set <code>ourStory.campusImage</code> at the top of this file
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-[#0f1f4a]/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                  Our Campus
                </div>
              </div>

              {/* Floating accent card — BOTTOM LEFT */}
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white rounded-xl p-4 shadow-lg hidden sm:block">
                <span className="serif text-3xl font-bold block leading-none">10+</span>
                <span className="text-xs font-medium opacity-90">Years of Trust</span>
              </div>

              {/* ✅ Founder small image — TOP RIGHT */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-xl overflow-hidden shadow-lg border-2 border-white hidden sm:block bg-gray-200">
                {ourStory.floatingImage ? (
                  <Image
                    src={ourStory.floatingImage}
                    alt={ourStory.floatingImageAlt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-[9px] text-center p-1">
                    📌 Set floatingImage
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#0f1f4a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Life at the Institute</span>
              <h2 className="serif text-4xl sm:text-5xl font-bold text-white">
                Campus <span className="text-amber-400">Gallery</span>
              </h2>
              <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((item, idx) => (
                <div key={idx} className={`rounded-2xl overflow-hidden bg-gray-700 relative group shadow-lg ${idx === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                  {item.image ? (
                    <Image src={item.image} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className={`w-full flex items-center justify-center text-white/30 text-xs font-medium px-4 text-center ${idx === 0 ? "h-64 md:h-full" : "h-full"}`}>
                      [ {item.placeholder} ]
                    </div>
                  )}
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER ── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <div className="bg-[#0f1f4a] md:w-72 flex-shrink-0 flex flex-col items-center justify-center p-10 text-center gap-5">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-amber-400/40 bg-gray-600 relative">
                    {founder.image ? (
                      <Image src={founder.image} alt={founder.imageAlt} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-2">
                        📌 Set <code>founder.image</code>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="serif text-xl font-bold text-white">{founder.name}</p>
                    <p className="text-amber-400 text-xs font-medium tracking-wide mt-1">{founder.role}</p>
                  </div>
                  <div className="w-10 h-px bg-amber-400/40" />
                  <p className="text-blue-200/60 text-xs font-light">{founder.since}</p>
                </div>
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Founder's Message</span>
                  <h3 className="serif text-3xl sm:text-4xl font-bold text-[#0f1f4a] mb-5 leading-tight">
                    A Word from<br />Our Founder
                  </h3>
                  <div className="w-10 h-0.5 bg-amber-400 mb-6" />
                  <blockquote className="text-gray-600 font-light leading-relaxed italic text-base sm:text-lg mb-6 border-l-4 border-amber-400 pl-5">
                    "{founder.quote}"
                  </blockquote>
                  <p className="text-gray-500 text-sm font-medium">{founder.closing}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">The People Behind It</span>
              <h2 className="serif text-4xl sm:text-5xl font-bold text-[#0f1f4a]">
                Meet Our <span className="text-amber-500">Expert Team</span>
              </h2>
              <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ✅ Add team members in the teamMembers array at the top of this file */}
              {teamMembers.map((member) => (
                <div key={member.name} className="group bg-[#F8F7F4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    {member.image ? (
                      <Image src={member.image} alt={member.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-medium px-6 text-center">
                        📌 Set image for {member.name} in <code>teamMembers</code> at top of file
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#0f1f4a]/0 group-hover:bg-[#0f1f4a]/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5 border-t-2 border-amber-400">
                    <h4 className="serif text-xl font-bold text-[#0f1f4a]">{member.name}</h4>
                    <p className="text-amber-500 text-xs font-semibold tracking-wide mt-0.5 mb-1">{member.role}</p>
                    <p className="text-gray-400 text-xs">{member.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#F8F7F4]">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Why Trust Us</span>
            <h2 className="serif text-4xl sm:text-5xl font-bold text-[#0f1f4a] mb-4">
              Recognitions &amp; <span className="text-amber-500">Certifications</span>
            </h2>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* ✅ Edit certifications array at the top of this file */}
              {certifications.map(({ label, desc, emoji, logo }) => (
                <div key={label} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
                  <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-amber-100 transition-colors duration-200 overflow-hidden relative">
                    {logo ? (
                      <Image src={logo} alt={label} fill className="object-contain p-1" />
                    ) : (
                      <span>{emoji}</span>
                    )}
                  </div>
                  <h3 className="serif text-xl font-bold text-[#0f1f4a] mb-2">{label}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-[#0f1f4a] py-20 px-6 text-center">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-blue-400/8 blur-3xl pointer-events-none -translate-y-1/2" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Take the First Step</span>
            <h2 className="serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Build Your<br /><span className="text-amber-400">Bright Future?</span>
            </h2>
            <p className="text-blue-100/70 font-light mb-8 leading-relaxed">{ctaBanner.subheading}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ctaBanner.primaryHref}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-semibold tracking-wide py-3 px-8 rounded-lg transition-all duration-200 shadow-[0_4px_24px_rgba(245,158,11,0.35)] hover:shadow-[0_8px_32px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 active:scale-95">
                {ctaBanner.primaryLabel}
              </Link>
              <Link href={ctaBanner.secondaryHref}
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold tracking-wide py-3 px-8 rounded-lg border border-white/20 hover:border-amber-400/50 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 active:scale-95">
                {ctaBanner.secondaryLabel}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}