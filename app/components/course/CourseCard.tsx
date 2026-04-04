import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CourseProps {
  title: string;
  slug: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  category: 'computer' | 'paramedical';
}

const CourseCard = ({ title, slug, duration, price, image, category,description }: CourseProps) => {
  
 // const detailPath = `/courses/${slug}`;   for detail page

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Course Image */}
      <div className="relative h-48 w-full bg-gray-200">
        {/* Use Next.js Image component for SEO and performance */}
        <Image 
          src={image || "/placeholder.jpg"} 
          alt={title} 
          fill 
          className="object-cover"
        />
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-[#1E3A8A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
          {category === 'computer' ? 'IT Course' : 'Medical'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">⏱️</span> {duration}
          </div>
          <div className="flex items-center text-sm font-bold text-[#1E3A8A]">
            <span className="mr-2">💰</span> ₹{price.toLocaleString()}
          </div>
           <div className="mr-2 mt-1 flex items-center line-through text-sm font-bold text-[#1E3A8A]">
             {description}
          </div>
        </div>

        <div className="mt-auto space-y-3">
         { /*<Link 
            href={`/courses/${slug}`}
            className="block w-full text-center bg-[#F59E0B] hover:bg-orange-600 text-white font-bold py-2 rounded transition-colors"
          >
            View Details
          </Link>*/}
          <Link 
            href={`/enquiry?course=${slug}`}
            className="block w-full text-center font-semibold bg-white rounded-sm border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold py-2 rounded transition-colors text-sm"
          >
            Quick Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;