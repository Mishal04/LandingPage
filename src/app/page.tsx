import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Services Section */}
      <Services />

      {/* 5. Projects & Gallery Section */}
      <Projects />

      {/* 6. About Us Section */}
      <About />

      {/* 7. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 8. Google Reviews Section */}
      <Reviews />

      {/* 9. Contact & Location Section */}
      <Contact />
    </>
  );
}
