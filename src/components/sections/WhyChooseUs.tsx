"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Award, Cpu, HeartHandshake, Truck, BedDouble, Video, Check, LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
}

const features: Feature[] = [
  {
    title: "24/7 Emergency Response",
    description: "Always-on Level-1 trauma response teams prepared for cardiac, stroke, and intensive care emergencies.",
    icon: ShieldAlert,
    colorClass: "from-red-500/10 to-red-600/10 text-red-600 border-red-50",
  },
  {
    title: "Expert Doctors & Faculty",
    description: "Our roster comprises certified professors, clinical pioneers, and board-accredited specialists.",
    icon: Award,
    colorClass: "from-blue-500/10 to-blue-600/10 text-blue-600 border-blue-50",
  },
  {
    title: "Modern Medical Technology",
    description: "Equipped with 3T MRI, 128-slice CT Scanners, and intelligent robotic-guided surgical suites.",
    icon: Cpu,
    colorClass: "from-teal-500/10 to-teal-600/10 text-teal-600 border-teal-50",
  },
  {
    title: "Affordable Care Packages",
    description: "Transparent, itemized pricing structures without hidden costs, designed for all patient budgets.",
    icon: HeartHandshake,
    colorClass: "from-amber-500/10 to-amber-600/10 text-amber-600 border-amber-50",
  },
  {
    title: "Swift Critical Care Ambulances",
    description: "Mobile intensive care ambulances providing immediate telemetry feed to the ER team during transit.",
    icon: Truck,
    colorClass: "from-sky-500/10 to-sky-600/10 text-sky-600 border-sky-50",
  },
  {
    title: "Accredited Level-IV ICU Units",
    description: "Continuous patient observation and advanced respiratory diagnostics to secure survival outcomes.",
    icon: BedDouble,
    colorClass: "from-indigo-500/10 to-indigo-600/10 text-indigo-600 border-indigo-50",
  },
  {
    title: "Remote Teleconsultation",
    description: "Instant medical counseling from home with secure encrypted reporting and online prescriptions.",
    icon: Video,
    colorClass: "from-purple-500/10 to-purple-600/10 text-purple-600 border-purple-50",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };


  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-hospital-bg relative overflow-hidden">
      <div className="absolute inset-0 medical-pattern-bg opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4">
              <span>Why Choose MediCare</span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-[1.1] mb-6">
              Setting the Standard
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
                In Global Healthcare.
              </span>
            </h2>
            <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-8">
              We understand that choosing a hospital is a significant decision. At MediCare, we combine clinical expertise, patient comfort, and top-tier infrastructure to create a healing environment like no other.
            </p>

            {/* Quick Benefits Checklist */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-1 bg-accent/15 rounded-full text-accent">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-navy-dark">ISO 9001:2015 Certified Facilities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-accent/15 rounded-full text-accent">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-navy-dark">98.5% Positive Patient Feedback</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-accent/15 rounded-full text-accent">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-navy-dark">Direct Insurance Claims Processing</span>
              </div>
            </div>

            <button
              onClick={() => {
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
              className="px-6 py-3 bg-white border border-slate-200 hover:border-primary hover:text-primary rounded-full shadow-sm text-navy-dark font-bold text-xs uppercase tracking-wide transition-all cursor-pointer"
            >
              Learn Our Quality Policies
            </button>
          </div>

          {/* Right Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="hospital-card p-6 flex flex-col justify-start text-left border border-slate-50 relative overflow-hidden group select-none"
                >
                  {/* Icon Wrapper */}
                  <div className={`p-3 bg-gradient-to-br ${feature.colorClass} border rounded-xl w-fit mb-5 transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text */}
                  <h3 className="font-serif text-lg font-bold text-navy-dark mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-navy-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
