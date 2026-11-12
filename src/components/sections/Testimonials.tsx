"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  condition: string;
  quote: string;
  rating: number;
  date: string;
  source: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eleanor Vance",
    condition: "Cardiac Valve Replacement Recovery",
    quote: "The clinical expertise of the cardiac team saved my life. The level of care I received, combined with the premium patient recovery rooms, felt like a luxury retreat. I am forever grateful to the nurses and doctors.",
    rating: 5,
    date: "2 weeks ago",
    source: "Verified Google Review",
  },
  {
    id: 2,
    name: "Richard Thompson",
    condition: "Complex Neuro-Spinal Rehabilitation",
    quote: "I was told my mobility would be permanently impaired after my spinal injury. Dr. Chen's surgical intervention followed by intensive rehab allowed me to walk again. A world-class medical institution.",
    rating: 5,
    date: "1 month ago",
    source: "Verified Google Review",
  },
  {
    id: 3,
    name: "Clara Miller",
    condition: "Neonatal Intensive Care (NICU)",
    quote: "Welcoming a premature baby is terrifying. The NICU team at MediCare provided state-of-the-art technological support while wrapping our family in profound empathy. Our daughter is thriving today.",
    rating: 5,
    date: "2 months ago",
    source: "Verified Google Review",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" as const },
    }),
  };


  return (
    <section id="testimonials" className="py-24 md:py-32 bg-hospital-bg relative overflow-hidden">
      <div className="absolute inset-0 medical-pattern-bg opacity-45 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Google Ratings Panel */}
          <div className="lg:col-span-5 flex flex-col items-start text-left select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4">
              <span>Patient Testimonials</span>
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-[1.1] mb-6">
              Stories of Healing,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
                Built on Trust.
              </span>
            </h2>

            <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-8">
              At MediCare, we believe in patient-centered recovery. Hear directly from our patients about their clinical journeys and experiences in our hospital.
            </p>

            {/* Google Rating Board */}
            <div className="p-6 bg-white rounded-[20px] border border-slate-100 shadow-sm w-full flex items-center gap-5">
              {/* Large number */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl font-black text-navy-dark">4.9</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Rating</span>
              </div>
              <div className="h-12 w-px bg-slate-100" />
              {/* Stars & Details */}
              <div className="flex-1">
                <div className="flex gap-1 text-amber-400 mb-2">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <p className="text-[11px] text-navy-light font-medium flex items-center gap-1">
                  <span>Based on 1,450+ verified Google Reviews</span>
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Carousel */}
          <div className="lg:col-span-7 relative flex flex-col items-stretch h-[320px] sm:h-[280px]">
            {/* Background decorative quote symbol */}
            <div className="absolute top-0 left-4 text-slate-200/50 -z-10 select-none">
              <Quote className="w-24 h-24 stroke-[1px]" />
            </div>

            <div className="flex-grow overflow-hidden relative w-full">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={testimonials[index].id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 bg-white rounded-[20px] p-8 border border-slate-100 shadow-xl flex flex-col justify-between text-left select-none"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs md:text-sm text-navy-dark leading-relaxed font-medium mb-6">
                      &ldquo;{testimonials[index].quote}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-navy-dark">
                        {testimonials[index].name}
                      </h4>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-wider mt-0.5">
                        {testimonials[index].condition}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-semibold text-slate-400 block">
                        {testimonials[index].source}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold tracking-wide mt-0.5 block">
                        {testimonials[index].date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white border border-slate-150 hover:border-primary rounded-full hover:text-primary transition-all cursor-pointer shadow-sm"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white border border-slate-150 hover:border-primary rounded-full hover:text-primary transition-all cursor-pointer shadow-sm"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
