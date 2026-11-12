"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { motion as motionFM, AnimatePresence as AnimatePresenceFM } from "framer-motion";


interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What insurance providers do you accept?",
    answer: "We partner with all major national and international healthcare insurance providers. Our billing desk provides direct, seamless claim submissions to minimize out-of-pocket delays.",
  },
  {
    question: "Can I consult a doctor online?",
    answer: "Yes, MediCare supports secure, encrypted teleconsultations. You can speak with our specialists online, receive prescriptions, and schedule follow-ups from anywhere.",
  },
  {
    question: "How do I request a copy of my medical records?",
    answer: "Medical records can be requested by contacting our Patient Support wing or via our secure web portals. Requests are verified and processed within 24-48 business hours.",
  },
  {
    question: "What are the general hospital visiting hours?",
    answer: "General wings welcome visitors from 10:00 AM to 8:00 PM daily. To ensure safety and healing, Intensive Care Units (ICU) restrict visiting hours to 12:00 PM - 2:00 PM and 5:00 PM - 7:00 PM.",
  },
  {
    question: "Do you have emergency ambulance services?",
    answer: "Yes, our mobile intensive care units are active 24/7. Each ambulance is staffed by certified paramedics and equipped with live telemetry feeding vital stats straight to the waiting ER team.",
  },
  {
    question: "Is patient parking available at the hospital?",
    answer: "Yes, MediCare offers secure, complimentary multi-story parking for patients and visitors, alongside round-the-clock valet services at the main entrance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-24 left-[-15%] w-[40%] h-[40%] bg-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-24 right-[-15%] w-[40%] h-[40%] bg-radial from-accent/5 to-transparent blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motionFM.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </motionFM.div>
          <motionFM.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Clear Answers for Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              Peace of Mind.
            </span>
          </motionFM.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motionFM.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`border rounded-[20px] overflow-hidden transition-all duration-300 select-none ${
                  isOpen
                    ? "border-primary bg-slate-50/50 shadow-sm"
                    : "border-slate-100 hover:border-slate-350 bg-white"
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-primary" : "text-slate-400"}`} />
                    <span className="font-sans font-bold text-sm md:text-base text-navy-dark">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {/* Answer Box */}
                <AnimatePresenceFM initial={false}>
                  {isOpen && (
                    <motionFM.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 ml-9 border-t border-slate-100/50 md:border-t-0">
                        <p className="text-xs md:text-sm text-navy-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motionFM.div>
                  )}
                </AnimatePresenceFM>
              </motionFM.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
