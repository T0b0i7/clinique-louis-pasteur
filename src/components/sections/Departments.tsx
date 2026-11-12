"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, ChevronRight, X, Sparkles, Check, Activity, BrainCircuit, ActivitySquare, Baby, Sparkle, ShieldAlert, Thermometer, LucideIcon } from "lucide-react";
import Image from "next/image";

interface Department {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  longDescription: string;
  highlights: string[];
  equipment: string;
}


const departments: Department[] = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "State-of-the-art heart diagnostics and interventional care guided by national cardiothoracic leaders.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600",
    icon: HeartPulse,
    longDescription: "Our Cardiology department features a comprehensive cardiac care network, including advanced catheterization labs, hybrid operating suites, and a dedicated coronary care unit. We specialize in minimally invasive valve repairs, complex angioplasties, and electrophysiology studies.",
    highlights: ["24/7 Cardiac Emergency Cath Lab", "Minimally invasive valve procedures", "Comprehensive Heart Failure Program"],
    equipment: "3D Echocardiography & Intravascular Ultrasound (IVUS)",
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Advanced treatment for brain, spine, and nervous system conditions using microscopic precision.",
    image: "https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: BrainCircuit,
    longDescription: "Medicare's Neurology department is an accredited comprehensive stroke and spinal care center. Our neurologists and neurosurgeons collaborate using advanced neuro-navigation software, intraoperative MRI, and state-of-the-art diagnostic monitors to treat complex cranial and spinal issues.",
    highlights: ["Accredited Stroke Center", "Intraoperative Neuro-monitoring", "Pediatric & Adult Epilepsy clinics"],
    equipment: "3T MRI & High-Density Electroencephalogram (EEG)",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Restoring mobility through advanced joint replacements, sports medicine, and reconstructive surgery.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600",
    icon: ActivitySquare,
    longDescription: "From high-performance athletic rehabilitation to complex knee, hip, and shoulder arthroplasties, our orthopedic surgeons employ robotic navigation to ensure flawless alignment, minimal downtime, and complete recovery.",
    highlights: ["Mako SmartRobotics Joint Replacements", "Comprehensive Sports Medicine wing", "Specialized spine deformity corrections"],
    equipment: "Computer-assisted orthonavigation platforms",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Gentle, expert healthcare for infants, kids, and teens in a welcoming, family-centered space.",
    image: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Baby,
    longDescription: "We provide pediatric general care, vaccination tracking, and highly specialized emergency care in our Level III Neonatal ICU. Our pediatric wing is designed specifically to keep young patients relaxed and safe.",
    highlights: ["Level III Neonatal Intensive Care Unit (NICU)", "Specialized pediatric emergency bay", "Developmental milestones assessments"],
    equipment: "Family-friendly pediatric ICU suites",
  },
  {
    id: "dermatology",
    title: "Dermatology",
    description: "Medical, surgical, and cosmetic skin care targeting dermatological excellence.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
    icon: Sparkle,
    longDescription: "Our dermatology suite combines clinical research with luxurious cosmetic therapies. We offer mole mapping, skin cancer screenings, allergy tests, and high-end laser skin rejuvenations overseen by board-certified dermatologists.",
    highlights: ["Advanced skin cancer screenings & mappings", "Therapeutic laser treatments", "Acne, eczema, and psoriasis protocols"],
    equipment: "High-precision digital photofinder and lasers",
  },
  {
    id: "radiology",
    title: "Radiology",
    description: "Accurate, rapid internal mapping using high-resolution diagnostics with minimum radiation exposure.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    icon: Activity,
    longDescription: "Using state-of-the-art diagnostic machines, our radiotherapists provide swift, high-fidelity scans. All scans are read instantly by specialized clinical radiologists to ensure flawless diagnostics.",
    highlights: ["Ultra-low-dose CT scanner technology", "Virtual colonoscopy and mammographies", "Same-day diagnostic reporting"],
    equipment: "128-Slice CT Scan & High-Resolution Ultrasound",
  },
  {
    id: "emergency",
    title: "Emergency Care",
    description: "Fast-acting Level-1 trauma care equipped for cardiac, stroke, and critical life support.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    icon: ShieldAlert,
    longDescription: "Medicare's Emergency wing is fully staffed 24 hours a day, 365 days a year with board-certified trauma physicians. Our direct ambulance telemetry allows doctors to analyze incoming patient data before arrival.",
    highlights: ["Immediate Level-1 trauma response", "Ambulance telemetry live feed", "In-house emergency surgery teams"],
    equipment: "Advanced Trauma Bays & Rapid Resuscitators",
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Comprehensive medical assessments, health management, and executive wellness screens.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600",
    icon: Thermometer,
    longDescription: "Serving as your primary health anchor, our internal medicine team designs comprehensive profiles to manage blood pressure, metabolic conditions, and general geriatric wellness, emphasizing preventive therapies.",
    highlights: ["Executive health checkup integration", "Chronic disease management protocols", "Acupressure & geriatric counseling"],
    equipment: "Point-of-care laboratory diagnostic sensors",
  },
];

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  return (
    <section id="departments" className="py-24 md:py-32 bg-hospital-bg relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full medical-pattern-bg -z-10 opacity-70" />

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
            <span>Clinical Departments</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Elite Care Across
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              All Specialties.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base"
          >
            Explore our state-of-the-art departments. Each is equipped with cutting-edge technologies and staffed by top-tier medical experts.
          </motion.p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="hospital-card flex flex-col h-full group"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[20px]">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-md rounded-xl text-primary border border-white/40 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow select-none">
                  <h3 className="font-serif text-xl font-bold text-navy-dark mb-2 group-hover:text-primary transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-xs text-navy-light leading-relaxed mb-6 flex-grow">
                    {dept.description}
                  </p>

                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary group/btn transition-colors cursor-pointer text-left self-start mt-auto"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDept(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-white rounded-[20px] shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative w-full h-56 md:h-64 flex-shrink-0">
                <Image
                  src={selectedDept.image}
                  alt={selectedDept.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDept(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white/90 cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title and Icon inside Image */}
                <div className="absolute bottom-6 left-6 md:left-8 flex items-center gap-3">
                  <div className="p-3 bg-primary rounded-xl text-white shadow-lg">
                    {(() => {
                      const Icon = selectedDept.icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-none">
                      {selectedDept.title} Division
                    </h3>
                    <p className="text-white/70 text-[10px] md:text-xs uppercase font-bold tracking-widest mt-1">
                      MediCare Premium Specialty
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-navy-dark mb-2">Overview</h4>
                  <p className="text-xs md:text-sm text-navy-light leading-relaxed">
                    {selectedDept.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-serif text-base font-bold text-navy-dark mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {selectedDept.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-navy-light">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Diagnostic Equipments */}
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Advanced Equipment
                    </span>
                    <p className="text-xs font-bold text-navy-dark leading-relaxed">
                      {selectedDept.equipment}
                    </p>
                    <span className="text-[10px] text-primary font-semibold mt-2 block">
                      Fully Digital Integration
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 md:px-8 border-t border-slate-100 flex items-center justify-end gap-3 flex-shrink-0 bg-slate-50">
                <button
                  onClick={() => setSelectedDept(null)}
                  className="px-5 py-2.5 border border-slate-200 hover:border-slate-300 text-navy-dark hover:bg-slate-100 font-semibold text-xs rounded-full transition-all cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedDept(null);
                    // scroll to appointment
                    const element = document.getElementById("appointment");
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
                  }}
                  className="px-5 py-2.5 bg-primary hover:bg-secondary text-white font-semibold text-xs rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Request Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
