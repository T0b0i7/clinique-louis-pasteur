"use client";

import { motion } from "framer-motion";
import { Compass, Eye, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1998",
    title: "Foundation of MediCare",
    description: "Established as a specialized cardiovascular research clinic with a vision of transforming patient care.",
  },
  {
    year: "2007",
    title: "Multi-Specialty Expansion",
    description: "Opened major wings for Neurology, Orthopedics, and advanced Oncology, doubling diagnostic capabilities.",
  },
  {
    year: "2015",
    title: "Smart Robotics Integration",
    description: "Equipped operations theatres with robotic-assisted surgery platforms and artificial intelligence diagnostics.",
  },
  {
    year: "2026",
    title: "Global Recognition",
    description: "Awarded top national marks for luxury patient wellness and recognized as a leading patient-centric institution.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };


  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-24 left-[-10%] w-[35%] h-[35%] bg-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-24 right-[-10%] w-[35%] h-[35%] bg-radial from-accent/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Our Hospital</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Pioneering Medicine.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              Inspiring Hope.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base"
          >
            With nearly three decades of clinical excellence, MediCare leads the frontier of elite healthcare, combining empathetic care with world-class facilities.
          </motion.p>
        </div>

        {/* Collage & Mission/Vision/Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          {/* Left: Interactive Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-8 aspect-[4/5] bg-slate-100 rounded-[20px] overflow-hidden shadow-lg relative border border-slate-100 group"
            >
              <Image
                src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital exterior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <div className="col-span-4 flex flex-col gap-4 h-full justify-between">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="aspect-square bg-slate-100 rounded-[20px] overflow-hidden shadow-md relative border border-slate-100 group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                  alt="Waiting lobby"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/5] bg-slate-100 rounded-[20px] overflow-hidden shadow-md relative border border-slate-100 group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
                  alt="Diagnostics lab"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>

          {/* Right: Mission, Vision, Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="flex gap-5 p-6 bg-slate-50 rounded-[20px] border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3.5 bg-primary/10 rounded-xl h-fit text-primary group-hover:bg-primary/20 transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">Our Mission</h3>
                <p className="text-sm text-navy-light leading-relaxed">
                  To provide state-of-the-art, evidence-based healthcare with deep empathy, keeping patient outcomes at the core of all operations.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="flex gap-5 p-6 bg-slate-50 rounded-[20px] border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3.5 bg-secondary/10 rounded-xl h-fit text-secondary group-hover:bg-secondary/20 transition-colors">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">Our Vision</h3>
                <p className="text-sm text-navy-light leading-relaxed">
                  To stand as a global beacon of health innovation, clinical integrity, and luxury wellness.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="flex gap-5 p-6 bg-slate-50 rounded-[20px] border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3.5 bg-accent/10 rounded-xl h-fit text-accent group-hover:bg-accent/20 transition-colors">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">Our Core Values</h3>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Patient Devotion</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Clinical Superiority</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Absolute Integrity</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Empathetic Care</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="pt-16 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-dark">Clinical Milestones</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Our Journey of Trust</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-0">
            {/* Center line (hidden on mobile, shown on desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block" />

            <div className="space-y-12 md:space-y-20 relative">
              {timelineEvents.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={event.year} className={`flex flex-col md:flex-row items-center relative ${isEven ? "md:flex-row-reverse" : ""}`}>
                    {/* Circle marker on timeline */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-primary rounded-full z-10 hidden md:block shadow-sm" />

                    {/* Left space/content block */}
                    <div className="w-full md:w-1/2 md:px-12 flex justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[20px] shadow-sm hover:shadow-md transition-shadow select-none text-left"
                      >
                        <span className="font-mono font-black text-2xl text-primary block mb-2">{event.year}</span>
                        <h4 className="font-serif text-lg font-bold text-navy-dark mb-2">{event.title}</h4>
                        <p className="text-xs text-navy-light leading-relaxed">{event.description}</p>
                      </motion.div>
                    </div>

                    {/* Spacer for columns */}
                    <div className="w-full md:w-1/2 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
