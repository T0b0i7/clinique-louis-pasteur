"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";

interface Package {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  badgeText?: string;
  accentClass: string;
}

const packages: Package[] = [
  {
    name: "Basic Wellness",
    price: "$199",
    period: "Single Checkup",
    description: "Ideal for routine annual checkups and baseline wellness assessments.",
    features: [
      "Complete Blood Count (CBC)",
      "Blood Glucose Fasting",
      "Lipid Profile (Total Cholesterol)",
      "Urine Routine Analysis",
      "ECG (Electrocardiogram)",
      "General Physician Consultation",
    ],
    popular: false,
    ctaText: "Book Basic Checkup",
    accentClass: "border-slate-100 hover:border-slate-300 hover:shadow-slate-200/50",
  },
  {
    name: "Premium Health",
    price: "$399",
    period: "Single Checkup",
    description: "Extensive health evaluation mapping vital organs and metabolic functions.",
    features: [
      "All Basic Wellness Checkups",
      "Liver Function Tests (LFT)",
      "Kidney Function Tests (KFT)",
      "Thyroid Profile (T3, T4, TSH)",
      "Chest X-Ray & Abdomen Ultrasound",
      "Senior Consultant Physician Session",
      "Lifestyle & Diet Consultation",
    ],
    popular: true,
    ctaText: "Book Premium Checkup",
    badgeText: "Recommended",
    accentClass: "border-primary/30 hover:border-primary shadow-lg shadow-primary/5 hover:shadow-primary/20 scale-100 md:scale-[1.03]",
  },
  {
    name: "Executive Care",
    price: "$799",
    period: "Single Checkup",
    description: "The ultimate diagnostic package with elite imaging and specialty reviews.",
    features: [
      "All Premium Health Checkups",
      "Cardiac Stress Test (TMT) & 3D Echo",
      "Low-Dose Lung CT Scan",
      "Cancer Biomarker Screening",
      "Consultation with Chief Cardiologist",
      "Consultation with Chief Neurologist",
      "Executive Luxury Lounge Access",
    ],
    popular: false,
    ctaText: "Book Executive Checkup",
    accentClass: "border-slate-100 hover:border-accent/40 hover:border-accent hover:shadow-accent/20",
  },
];

export default function Pricing() {
  const handleSelectPackage = (packageName: string) => {
    // Scroll to appointment and pre-fill message or just scroll
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

      // Update URL hash or let page know if needed. We'll add text in message field.
      const msgTextarea = document.getElementById("appointment-message") as HTMLTextAreaElement;
      if (msgTextarea) {
        msgTextarea.value = `I would like to book the "${packageName}" health package.`;
      }
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-24 right-[-15%] w-[45%] h-[45%] bg-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-24 left-[-15%] w-[45%] h-[45%] bg-radial from-accent/5 to-transparent blur-3xl" />

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
            <span>Preventive Health Packages</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Invest in Your Health.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              Premium Medical Screening.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base"
          >
            Our diagnostics programs offer proactive health assessments. Fully customizable according to specific medical profiles.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-[20px] border p-8 flex flex-col justify-between transition-all duration-400 select-none relative group ${pkg.accentClass}`}
            >
              {/* Popular Badge */}
              {pkg.popular && pkg.badgeText && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{pkg.badgeText}</span>
                </div>
              )}

              {/* Header */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-dark mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-navy-light/80 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 pb-6">
                  <span className="font-serif text-4xl md:text-5xl font-black text-navy-dark">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    / {pkg.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-navy-light">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectPackage(pkg.name)}
                className={`w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${
                  pkg.popular
                    ? "bg-primary text-white shadow-md hover:bg-secondary hover:shadow-lg hover:shadow-primary/20"
                    : "bg-slate-50 border border-slate-100 hover:border-primary hover:text-primary text-navy-dark hover:shadow-sm"
                }`}
              >
                {pkg.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
