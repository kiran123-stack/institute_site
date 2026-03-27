import React from 'react';
import CourseCard from './CourseCard';

interface CourseListProps {
  courses: any[];
  category: 'computer' | 'paramedical';
}

const CourseList = ({ courses, category }: CourseListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard 
          key={course.id}
          title={course.title}
          slug={course.slug}
          duration={course.duration}
          price={course.price}
          image={course.image}
          category={category}
        />
      ))}
    </div>
  );
};

export default CourseList;