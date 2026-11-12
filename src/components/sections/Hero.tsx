"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Award, Calendar } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 md:pb-32 flex items-center overflow-hidden medical-pattern-bg"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-[40%] h-[40%] bg-radial from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 w-[30%] h-[30%] bg-radial from-accent/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Emergency Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Joint Commission Accredited Hospital</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-navy-dark tracking-tight mb-8"
          >
            Advanced Healthcare.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              Compassionate Care.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-navy-light max-w-xl mb-10 leading-relaxed font-sans font-normal"
          >
            Experience world-class hospitality combined with cutting-edge medical technologies. 
            At MediCare, we are committed to providing personalized patient treatment programs guided by elite specialists.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScroll("appointment")}
              className="px-8 py-4 bg-primary hover:bg-secondary text-white font-bold text-sm rounded-full shadow-lg hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll("doctors")}
              className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-navy-dark hover:text-primary font-bold text-sm rounded-full shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center cursor-pointer"
            >
              Find Doctor
            </button>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 mt-16 pt-8 border-t border-slate-100 w-full"
          >
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy-dark">50+</h3>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Specialties</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy-dark">150+</h3>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Elite Doctors</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy-dark">99.8%</h3>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Success Rate</p>
            </div>
          </motion.div>
        </div>

        {/* Right Collage / Image Area */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Main Hospital Image Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] sm:aspect-square max-w-[500px] bg-slate-100 rounded-[20px] overflow-hidden shadow-2xl group border border-slate-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
              alt="MediCare Doctor Consult"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Floating Doctor's Card (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-[-20px] top-[15%] w-[180px] sm:w-[220px] p-4 glass-card rounded-[20px] border border-white/50 shadow-lg animate-float hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-xl">
                <HeartPulse className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-navy-dark">Cardiac Center</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Top-rated in patient care</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Appointment Booking Teaser Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => handleScroll("appointment")}
            className="absolute right-[-20px] bottom-[10%] w-[200px] sm:w-[240px] p-4 bg-white hover:bg-slate-50 rounded-[20px] border border-slate-100 shadow-xl cursor-pointer hover:translate-y-[-4px] transition-all hidden sm:block group"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-navy-dark">Ready to visit?</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Click to book a session online instantly</p>
                <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-accent group-hover:text-primary">
                  <span>Start Booking</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small stats bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-[-15px] left-[20%] px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-white" />
            <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Top 5 National Hospital</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
