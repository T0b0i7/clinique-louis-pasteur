"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  ShieldCheck,
  Phone,
  LucideIcon,
} from "lucide-react";

interface GuideStep {
  id: number;
  title: string;
  content: string;
  icon: LucideIcon;
  category: string;
}

const guideSteps: GuideStep[] = [
  {
    id: 1,
    title: "Prendre rendez-vous",
    category: "Rendez-vous",
    content:
      "L'accueil téléphonique est disponible 24h/24 et 7j/7 au +229 20 21 22 22 ou au +229 95 86 95 25, et par email à contact@cliniquelouispasteur.com. Les consultations et examens sont accessibles avec ou sans rendez-vous, mais prendre rendez-vous réduit l'attente et permet de choisir son praticien.",
    icon: Phone,
  },
  {
    id: 2,
    title: "Les étapes de votre visite",
    category: "Accueil",
    content:
      "À votre arrivée, présentez-vous au service d'accueil et d'orientation. Réglez ensuite le service à la caisse, attendez votre tour dans l'espace prévu, puis rendez-vous chez le prestataire. Revenez à l'accueil pour les examens complémentaires ou les informations.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Rendre visite à un hospitalisé",
    category: "Visites",
    content:
      "Les visites sont organisées en trois tranches : le matin de 7h30 à 9h, à midi de 12h à 14h et le soir de 18h30 à 21h. Merci de respecter ces horaires pour le repos des patients.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Faire une radiographie",
    category: "Imagerie",
    content:
      "Les radiographies simples ne demandent aucune préparation. Vous pouvez vous présenter 24h/24 et 7j/7, avec ou sans rendez-vous. Pour les radiographies avec produit de contraste (HSG, UIV, UCR, TOGD, LB), il est préférable de prendre rendez-vous.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Faire une échographie",
    category: "Imagerie",
    content:
      "Les échographies sont réalisées sur rendez-vous et nécessitent parfois de se présenter à jeun. Les résultats sont disponibles le même jour.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Faire des analyses de laboratoire",
    category: "Laboratoire",
    content:
      "Les prélèvements sont effectués 24h/24 et 7j/7. Beaucoup d'examens demandent d'être à jeun. La plupart des résultats sont disponibles le même jour.",
    icon: BookOpen,
  },
  {
    id: 7,
    title: "Régler votre prise en charge",
    category: "Paiement",
    content:
      "Vous pouvez régler en espèces, par chèque ou par mobile banking. Pour les assurés, seul le tiers payant est exigé. En cas d'hospitalisation, une provision est demandée et un point financier est réalisé chaque jour.",
    icon: ShieldCheck,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % guideSteps.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + guideSteps.length) % guideSteps.length);
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

  const CurrentIcon = guideSteps[index].icon;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-hospital-bg relative overflow-hidden">
      <div className="absolute inset-0 medical-pattern-bg opacity-45 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Guide Intro */}
          <div className="lg:col-span-5 flex flex-col items-start text-left select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4">
              <span>Guide du patient</span>
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-[1.1] mb-6">
              Bien préparer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
                votre visite.
              </span>
            </h2>

            <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-8">
              Rendez-vous, visites, examens, paiement : retrouvez l&apos;essentiel des
              informations pratiques publiées par la Clinique Louis Pasteur.
            </p>

            {/* Contact board */}
            <div className="p-6 bg-white rounded-[20px] border border-slate-100 shadow-sm w-full">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Accueil 24h/24
                  </p>
                  <a
                    href="tel:+22920212222"
                    className="font-serif text-xl font-bold text-navy-dark hover:text-primary transition-colors"
                  >
                    +229 20 21 22 22
                  </a>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                    ou +229 95 86 95 25
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-navy-light">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-medium">
                  Visites : 7h30 à 9h, 12h à 14h, 18h30 à 21h
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Guide Carousel */}
          <div className="lg:col-span-7 relative flex flex-col items-stretch h-[380px] sm:h-[320px]">
            <div className="flex-grow overflow-hidden relative w-full">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={guideSteps[index].id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 bg-white rounded-[20px] p-8 border border-slate-100 shadow-xl flex flex-col justify-between text-left select-none"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                        <CurrentIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                        {guideSteps[index].category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-bold text-navy-dark mb-3">
                      {guideSteps[index].title}
                    </h3>

                    <p className="text-xs md:text-sm text-navy-light leading-relaxed">
                      {guideSteps[index].content}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                    <span className="text-[10px] font-semibold text-slate-400">
                      Étape {index + 1} sur {guideSteps.length}
                    </span>
                    <span className="text-[10px] font-bold text-primary">
                      Guide du patient
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={prevStep}
                className="p-3 bg-white border border-slate-150 hover:border-primary rounded-full hover:text-primary transition-all cursor-pointer shadow-sm"
                aria-label="Étape précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                className="p-3 bg-white border border-slate-150 hover:border-primary rounded-full hover:text-primary transition-all cursor-pointer shadow-sm"
                aria-label="Étape suivante"
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
