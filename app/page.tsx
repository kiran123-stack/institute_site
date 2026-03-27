import { Metadata } from "next";
import Hero from "./components/home/Hero";
import CourseHighlights from "./components/home/CourseHighlights";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import PlacementPreview from "./components/home/PlacementPreview";
import QuickEnquiry from "./components/home/QuickEnquiry";
import GoogleMap from "./components/contact/GoogleMap";
import EnquiryPopup from "./components/common/EnquiryPopup";

export const metadata: Metadata = {
  title: "Home | Professional Computer & Paramedical Institute",
  description: "Join our career-oriented DCA, ADCA, Tally, and Paramedical diploma courses.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <CourseHighlights />
      <WhyChooseUs />
      <Testimonials />
      <PlacementPreview />
      <QuickEnquiry />
      <div className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8 font-poppins">Our Location</h2>
        <GoogleMap/>
        </div>
        <EnquiryPopup/>
    </div>
  );
}