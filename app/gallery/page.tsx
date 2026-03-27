import Image from "next/image";
import { Metadata } from "next";

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
      <section className="bg-[#1E3A8A] text-white py-16 text-center">
        <h1 className="text-4xl font-bold font-poppins mb-4">Life at Our Institute</h1>
        <p className="text-lg font-inter text-blue-100 max-w-2xl mx-auto px-4">
          Experience our vibrant learning environment, high-tech labs, and student success events.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md aspect-video bg-gray-200">
              {/* Replace the div below with an actual Image tag once you add photos to public/images */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-inter bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">{img.category}</span>
                  <p className="text-white font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}