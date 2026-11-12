"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  education: string;
  image: string;
  bio: string;
}

const doctors: Doctor[] = [
  {
    id: "sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    specialization: "Chief Cardiologist",
    experience: "18+ Years",
    education: "MD - Harvard Medical School, FACC",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    bio: "Pioneered advanced robotic cardiac interventions with hundreds of successful valve repairs.",
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    specialization: "Senior Neurosurgeon",
    experience: "15+ Years",
    education: "MD - Johns Hopkins University School of Medicine",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    bio: "Specializes in microsurgery, brain mapping, and minimally invasive spinal reconstructions.",
  },
  {
    id: "aria-rodriguez",
    name: "Dr. Aria Rodriguez",
    specialization: "Director of Pediatrics",
    experience: "14+ Years",
    education: "MD - Stanford University School of Medicine",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Devoted to neonatal life support, pediatric critical care, and developmental genetics research.",
  },
  {
    id: "david-vance",
    name: "Dr. David Vance",
    specialization: "Chief Orthopedic Surgeon",
    experience: "20+ Years",
    education: "MD - Yale School of Medicine",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    bio: "Pioneer in computer-assisted arthroplasties and orthopaedic trauma rehabilitation programs.",
  },
];

interface DoctorsProps {
  onBookDoctor: (doctorName: string) => void;
}

export default function Doctors({ onBookDoctor }: DoctorsProps) {
  return (
    <section id="doctors" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-[-15%] w-[40%] h-[40%] bg-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-[-15%] w-[40%] h-[40%] bg-radial from-secondary/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Elite Medical Team</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Meet Our World-Class
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              Medical Specialists.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base"
          >
            Our doctors are leaders in clinical research and surgical innovation, dedicated to securing the best possible patient outcomes.
          </motion.p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="hospital-card flex flex-col h-full group"
            >
              {/* Doctor Photo */}
              <div className="relative w-full aspect-[4/5] rounded-t-[20px] overflow-hidden bg-slate-50 border-b border-slate-100">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 object-top"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-navy-dark border border-slate-100 text-[10px] font-bold shadow-sm flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-accent" />
                  <span>{doctor.experience} Exp</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow select-none">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                  {doctor.specialization}
                </span>
                
                <h3 className="font-serif text-xl font-bold text-navy-dark mt-1 mb-2 group-hover:text-primary transition-colors">
                  {doctor.name}
                </h3>
                
                <p className="text-xs text-navy-light leading-relaxed mb-4 flex-grow italic">
                  &ldquo;{doctor.bio}&rdquo;
                </p>

                {/* Education */}
                <div className="flex items-start gap-2 text-[10px] text-navy-light/80 mb-6 bg-slate-50 p-2.5 rounded-xl border border-slate-50">
                  <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{doctor.education}</span>
                </div>

                {/* Book Consultation */}
                <button
                  onClick={() => onBookDoctor(doctor.name)}
                  className="w-full py-3 bg-slate-50 group-hover:bg-primary group-hover:text-white border border-slate-100 group-hover:border-primary text-navy-dark font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm group-hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 mt-auto"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
