import React from 'react';

const GalleryGrid = () => {
  const items = [
    { id: 1, title: "Modern Computer Lab", tag: "Infrastructure" },
    { id: 2, title: "Paramedical Practical", tag: "Learning" },
    { id: 3, title: "Annual Convocation", tag: "Events" },
    { id: 4, title: "Classroom Session", tag: "Theory" },
    { id: 5, title: "Placement Drive", tag: "Career" },
    { id: 6, title: "Certificate Awarding", tag: "Success" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-video shadow-sm border border-gray-200">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
            [Photo: {item.title}]
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-1">
              {item.tag}
            </span>
            <h4 className="text-white font-poppins font-semibold">
              {item.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;