import { notFound } from "next/navigation";
import computerCourses from "../../data/computerCourses.json";
import paramedicalCourses from "../../data/paramedicalCourses.json";
import CourseDetail from "../../components/course/CourseDetail";

interface CourseType {
  title: string;
  price: number;
  slug: string;
  description?: string;
  modules?: string[];
  careerOpportunities?: string[];
  image?: string;
  duration?: string;
}

export async function generateStaticParams() {
  const allCourses = [...computerCourses, ...paramedicalCourses];
  return allCourses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const allCourses = [...computerCourses, ...paramedicalCourses] as CourseType[];
  const course = allCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <CourseDetail 
        title={course.title}
        price={course.price}
        description={course.description || "Professional certification program."}
        modules={course.modules || []}
        careers={course.careerOpportunities || []} 
        // THIS FIXES THE ERRORS: Passing the image and duration down
        image={course.image || "/placeholder.jpg"}
        duration={course.duration || "Duration not specified"}
      />
    </div>
  );
}