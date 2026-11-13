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
    question: "Comment prendre rendez-vous à la clinique ?",
    answer:
      "L'accueil téléphonique est disponible 24h/24 et 7j/7 au +229 20 21 22 22 ou au +229 95 86 95 25. Vous pouvez aussi écrire à contact@cliniquelouispasteur.com ou remplir le formulaire de la page. Les consultations et examens sont accessibles avec ou sans rendez-vous, mais prendre rendez-vous est toujours préférable.",
  },
  {
    question: "Quels sont les horaires de visite aux patients hospitalisés ?",
    answer:
      "Les visites sont organisées en trois tranches : le matin de 7h30 à 9h, à midi de 12h à 14h et le soir de 18h30 à 21h. Merci de respecter ces horaires pour le repos des patients.",
  },
  {
    question: "Faut-il être à jeun pour les analyses de laboratoire ?",
    answer:
      "Beaucoup d'examens de laboratoire demandent d'être à jeun. Les prélèvements sont effectués 24h/24 et 7j/7. La plupart des résultats sont disponibles le même jour. En cas de doute, appelez la clinique avant votre venue.",
  },
  {
    question: "Comment se déroulent les examens d'immigration Canada ?",
    answer:
      "Les examens médicaux aux fins d'immigration (EMI) sont réalisés pour le compte de Citoyenneté Immigration Canada par les docteurs Véronique Dossou-Gbete et Lucien Dossou-Gbete, exclusivement sur rendez-vous. Prévoyez le formulaire IMM 1017, une pièce d'identité originale valide, 3 photos au format passeport, les frais d'examen et tout document lié à votre santé. Il n'est pas nécessaire d'être à jeun.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Vous pouvez régler en espèces, par chèque ou par mobile banking. Pour les patients assurés, seul le tiers payant est exigé, selon la liste des partenaires de la clinique. En cas d'hospitalisation, une provision est demandée et un point financier est réalisé chaque jour.",
  },
  {
    question: "Peut-on faire une radiographie sans rendez-vous ?",
    answer:
      "Oui pour les radiographies simples : aucune préparation n'est nécessaire et vous pouvez vous présenter 24h/24 et 7j/7. Pour les radiographies avec produit de contraste (HSG, UIV, UCR, TOGD, LB), il est préférable de prendre rendez-vous. Les échographies se font sur rendez-vous.",
  },
  {
    question: "Comment joindre l'ambulance ?",
    answer:
      "L'ambulance de la clinique est joignable au +229 95 62 15 64. Elle peut aussi être utilisée pour le transport de malades entre établissements de soins. Dans ce cas, le service doit être réglé à la clinique avant le départ de l'ambulance.",
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
            <span>Questions fréquentes</span>
          </motionFM.div>
          <motionFM.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Des réponses claires
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              pour votre visite.
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

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Une autre question ? Appelez le{" "}
            <a href="tel:+22920212222" className="font-bold text-primary">
              +229 20 21 22 22
            </a>{" "}
            ou écrivez à{" "}
            <a href="mailto:contact@cliniquelouispasteur.com" className="font-bold text-primary">
              contact@cliniquelouispasteur.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
