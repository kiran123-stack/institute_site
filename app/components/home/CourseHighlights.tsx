"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ─── IMPORT DATA FROM JSON FILES ──────────────────────────────────────────────
// Add a course to these JSON files and it will automatically appear here.
import computerCoursesData from "../../data/computerCourses.json";
import paramedicalCoursesData from "../../data/paramedicalCourses.json";
// ─── TYPES ────────────────────────────────────────────────────────────────────

type JsonCourse = {
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

type Course = {
  title: string;
  full: string;
  duration: string;
  badge: string;
  badgeColor: string;
  accent: string;
  slug: string;
  desc: string;
  image: string;
};

// ─── ACCENT PALETTES ─────────────────────────────────────────────────────────
// Colours cycle through this list so every new course gets a distinct accent.

const computerAccents = [
  { accent: "#3B82F6", badgeColor: "bg-blue-100 text-blue-700",   badge: "Beginner"  },
  { accent: "#6366F1", badgeColor: "bg-indigo-100 text-indigo-700", badge: "Popular"  },
  { accent: "#F59E0B", badgeColor: "bg-amber-100 text-amber-700",  badge: "In Demand" },
  { accent: "#EC4899", badgeColor: "bg-pink-100 text-pink-700",    badge: "Creative"  },
  { accent: "#06B6D4", badgeColor: "bg-cyan-100 text-cyan-700",    badge: "Trending"  },
  { accent: "#8B5CF6", badgeColor: "bg-violet-100 text-violet-700",badge: "New"       },
  { accent: "#F97316", badgeColor: "bg-orange-100 text-orange-700",badge: "Hot"       },
];

const paramedicalAccents = [
  { accent: "#10B981", badgeColor: "bg-emerald-100 text-emerald-700", badge: "Healthcare" },
  { accent: "#14B8A6", badgeColor: "bg-teal-100 text-teal-700",       badge: "Surgical"   },
  { accent: "#22C55E", badgeColor: "bg-green-100 text-green-700",     badge: "Radiology"  },
  { accent: "#84CC16", badgeColor: "bg-lime-100 text-lime-700",       badge: "Nephrology" },
  { accent: "#0EA5E9", badgeColor: "bg-sky-100 text-sky-700",         badge: "Cardiology" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

/** Extract the short title (everything before " - ") */
function shortTitle(full: string): string {
  return full.includes(" - ") ? full.split(" - ")[0] : full;
}

/** Map a raw JSON course into the shape CourseCard expects */
function mapComputer(course: JsonCourse, idx: number): Course {
  const palette = computerAccents[idx % computerAccents.length];
  return {
    title: shortTitle(course.title),
    full:  course.title.includes(" - ") ? course.title.split(" - ")[1] : course.title,
    duration: course.duration,
    badge: palette.badge,
    badgeColor: palette.badgeColor,
    accent: palette.accent,
    slug: course.slug,
    desc: course.description,
    image: course.image,
  };
}

function mapParamedical(course: JsonCourse, idx: number): Course {
  const palette = paramedicalAccents[idx % paramedicalAccents.length];
  return {
    title: shortTitle(course.title),
    full:  course.title.includes(" - ") ? course.title.split(" - ")[1] : course.title,
    duration: course.duration,
    badge: palette.badge,
    badgeColor: palette.badgeColor,
    accent: palette.accent,
    slug: course.slug,
    desc: course.description,
    image: course.image,
  };
}

// ─── BUILD COURSE ARRAYS FROM JSON ───────────────────────────────────────────

const computerCourses: Course[]    = (computerCoursesData as JsonCourse[]).map(mapComputer);
const paramedicalCourses: Course[] = (paramedicalCoursesData as JsonCourse[]).map(mapParamedical);

// ─── CARD ─────────────────────────────────────────────────────────────────────

function CourseCard({ course, enquiryBase }: { course: Course; enquiryBase: string }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:-translate-y-1">
      {/* Accent top bar */}
      <div
        className="h-1.5 w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${course.accent}, ${course.accent}88)` }}
      />

      {/* Course Image */}
      <div
        className="relative w-full h-44 flex-shrink-0 overflow-hidden"
        style={{ background: `${course.accent}10` }}
      >
        {course.image ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
        ) : (
          /* Fallback placeholder if image path is missing */
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div
              className="absolute w-36 h-36 rounded-full opacity-10 border-[20px]"
              style={{ borderColor: course.accent }}
            />
            <div
              className="absolute w-20 h-20 rounded-full opacity-20"
              style={{ background: course.accent }}
            />
            <svg
              className="relative z-10 w-10 h-10 opacity-40"
              style={{ color: course.accent }}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M3 15l5-5 4 4 3-3 6 6" />
            </svg>
          </div>
        )}

        {/* Badge */}
        <span
          className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide ${course.badgeColor}`}
        >
          {course.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight">
            {course.title}
          </h3>
          <p className="text-xs font-semibold mt-0.5" style={{ color: course.accent }}>
            {course.full}
          </p>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed flex-grow">{course.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {course.duration}
          </span>

          <Link
            href={`${enquiryBase}?course=${course.slug}`}
            className="text-xs font-bold px-3 py-1.5 rounded-lg text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: course.accent }}
          >
            Enquire →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────

function CourseSection({
  title,
  subtitle,
  icon,
  courses,
  accentClass,
  accentColor,
  exploreHref,
  exploreLabel,
  enquiryBase,
  bg,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  courses: Course[];
  accentClass: string;
  accentColor: string;
  exploreHref: string;
  exploreLabel: string;
  enquiryBase: string;
  bg: string;
}) {
  return (
    <div className={`py-16 px-4 sm:px-8 lg:px-16 ${bg}`}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
            style={{ background: accentColor }}
          >
            {icon}
          </div>
          <span className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: accentColor }}>
            {title}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">{subtitle}</h2>
        <div className="mt-2 h-1 w-16 rounded-full" style={{ background: accentColor }} />
      </div>

      {/* Swiper */}
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            320:  { slidesPerView: 1 },
            480:  { slidesPerView: 1.2 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{ nextEl: `.${accentClass}-next`, prevEl: `.${accentClass}-prev` }}
          pagination={{ clickable: true, el: `.${accentClass}-pagination` }}
          autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          className="!pb-12"
        >
          {courses.map((course, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <CourseCard course={course} enquiryBase={enquiryBase} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav buttons */}
        <button className={`${accentClass}-prev absolute left-0 top-1/2 -translate-y-8 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform hidden sm:flex`}>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className={`${accentClass}-next absolute right-0 top-1/2 -translate-y-8 translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform hidden sm:flex`}>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination dots */}
        <div className={`${accentClass}-pagination mt-2 flex justify-center gap-1`} />
      </div>

      {/* Explore CTA */}
      <div className="text-center mt-6">
        <Link
          href={exploreHref}
          className="inline-flex items-center gap-2 font-bold text-sm px-8 py-3 rounded-xl text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
          style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
        >
          {exploreLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const CourseHighlights = () => {
  return (
    <section>
      {/* Heading */}
      <div className="text-center py-14 px-4 bg-white">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c9a84c] mb-3">
          Programs We Offer
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-[#0a1628] leading-tight">
          Shape Your Future
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          Industry-recognised diplomas in technology and healthcare. Practical training,
          real mentors, guaranteed placement support.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
          <div className="h-px w-16 bg-gray-200" />
        </div>
      </div>

      {/* Computer Courses */}
      <CourseSection
        title="Computer Courses"
        subtitle="Technology &amp; IT Programs"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        }
        courses={computerCourses}
        accentClass="comp"
        accentColor="#3B82F6"
        exploreHref="/courses"
        exploreLabel="Explore All Computer Courses"
        enquiryBase="/enquiry"
        bg="bg-blue-50/40"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-8" />

      {/* Paramedical Courses */}
      <CourseSection
        title="Paramedical Courses"
        subtitle="Healthcare &amp; Medical Training"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 11v6M9 14h6" strokeLinecap="round" />
            <path d="M6 3h12v3H6zM6 6v2l-2 1v11a2 2 0 002 2h12a2 2 0 002-2V9l-2-1V6" />
          </svg>
        }
        courses={paramedicalCourses}
        accentClass="para"
        accentColor="#10B981"
        exploreHref="/paramedical"
        exploreLabel="Explore All Paramedical Courses"
        enquiryBase="/enquiry"
        bg="bg-emerald-50/40"
      />
    </section>
  );
};

export default CourseHighlights;