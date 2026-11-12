"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Departments from "@/components/sections/Departments";
import Doctors from "@/components/sections/Doctors";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import AppointmentForm from "@/components/sections/AppointmentForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingEmergency from "@/components/FloatingEmergency";

export default function Home() {
  const [selectedDoctorName, setSelectedDoctorName] = useState("");

  const handleBookDoctor = (doctorName: string) => {
    setSelectedDoctorName(doctorName);
    
    // Smooth scroll to appointment form
    const element = document.getElementById("appointment");
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Premium Loader Preloader */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="w-full relative">
        <Hero />
        <About />
        <Departments />
        <Doctors onBookDoctor={handleBookDoctor} />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <AppointmentForm
          selectedDoctorName={selectedDoctorName}
          setSelectedDoctorName={setSelectedDoctorName}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Core floating interfaces */}
      <ScrollToTop />
      <FloatingEmergency />
    </>
  );
}

