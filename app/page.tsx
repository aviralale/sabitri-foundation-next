import HeroSection from "@/components/hero-section";
import { ProgramsSection } from "@/components/home-programs-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProgramsSection />
      <TestimonialsSection />
    </div>
  );
}
