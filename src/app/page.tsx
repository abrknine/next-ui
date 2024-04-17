import Image from "next/image";
import HeroSection from "@/components/HeroSection"; 
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyUs from "@/components/Whyus";
import TestimonialCard from "@/components/ui/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructor from "@/components/Instructor";
import Footer from  "@/components/Footer"

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased ">
  
      <HeroSection /> 
      <FeaturedCourses />
      <WhyUs />
      <TestimonialCard />
      <UpcomingWebinars/>
      <Instructor />
        <Footer/>
    </main>
  );
}
