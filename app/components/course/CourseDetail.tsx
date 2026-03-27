import Image from "next/image";
import { IndianRupee, Clock, BookOpen } from "lucide-react";
import CourseModules from "./CourseModules";
import CareerOpportunities from "./CareerOpportunities";
import Link from "next/link";

interface Props {
  title: string;
  price: number;
  description: string;
  modules: string[];
  careers: string[];
  image: string;
  duration: string;
}

const CourseDetail = ({
  title,
  price,
  description,
  modules,
  careers,
  image,
  duration,
}: Props) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">

      {/* HERO SECTION */}
      <div className="relative w-full h-[320px] md:h-[420px]">

        <Image
          src={image || "/placeholder.jpg"}
          alt={title}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-8 text-white">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">

            <div className="flex items-center gap-2 bg-[#F59E0B] px-5 py-2 rounded-lg font-semibold shadow-md">
              <IndianRupee size={18} />
              {price.toLocaleString()}
            </div>

            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-lg">
              <Clock size={18} />
              {duration}
            </div>

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-12">

          {/* DESCRIPTION */}
          <section>

            <h2 className="text-2xl font-bold text-[#1E3A8A] flex items-center gap-2 border-b pb-3 mb-4">
              <BookOpen size={22} className="text-[#F59E0B]" />
              About This Course
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              {description}
            </p>

          </section>

          {/* MODULES */}
          <section>
            <CourseModules modules={modules} />
          </section>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* CAREER SECTION */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <CareerOpportunities careers={careers} />
          </div>

         

        </div>

      </div>
       {/* CTA BOX */}
          <div className="max-w-4xl mx-auto bg-[#F59E0B] rounded-2xl p-8 md:p-12 text-center shadow-xl text-white mt-16 mx-4">

  <h3 className="text-3xl font-bold mb-4">
    Ready to Start Your Career?
  </h3>

  <p className="text-white/90 mb-8 text-lg">
    Secure your seat today and gain industry-ready skills with practical training.
  </p>

  <Link
    href={`/enquiry?course=${title.replace(/\s+/g, "-").toLowerCase()}`}
    className="inline-block bg-white text-[#F59E0B] font-semibold px-8 py-4 rounded-lg hover:scale-105 transition"
  >
    Apply For Admission
  </Link>

</div>

    </article>
  );
};

export default CourseDetail;