import { Metadata } from "next";
import Hero from "./components/home/Hero";
import CourseHighlights from "./components/home/CourseHighlights";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import PlacementPreview from "./components/home/PlacementPreview";
import QuickEnquiry from "./components/home/QuickEnquiry";
import GoogleMap from "./components/contact/GoogleMap";
import EnquiryPopup from "./components/common/EnquiryPopup";
import GalleryGrid from "./components/gallery/GalleryGrid";
import ParamedicalPage from "./paramedical/page";
import CoursesPage from "./courses/page";
import ContactPage from "./contact/page";

export const metadata: Metadata = {
  title: "Home | Professional Computer & Paramedical Institute",
  description: "Join our career-oriented DCA, ADCA, Tally, and Paramedical diploma courses.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
    <div className="flex justify-center align-top items-start text-black font-extrabold mb-10 p-4">
  <h1>Computer courses</h1>
  <CourseHighlights/>
</div>
      
      
      <WhyChooseUs />
      <Testimonials />
      <GalleryGrid/>
      <ContactPage/>
        <EnquiryPopup/>
    </div>
  );
}