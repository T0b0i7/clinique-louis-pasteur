"use client";

import { motion } from "framer-motion";
import { Compass, Eye, HeartPulse, Sparkles, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1998",
    title: "Création de la clinique",
    description:
      "La Clinique Louis Pasteur ouvre ses portes à Porto-Novo avec la volonté d'offrir des soins de proximité accessibles à tous.",
  },
  {
    year: "2003",
    title: "Autorisation d'ouverture",
    description:
      "La clinique obtient l'autorisation officielle numéro 0793/MSP/DC/SGM/DNPS/SHMNT du 12 décembre 2003.",
  },
  {
    year: "PPP",
    title: "Partenariats public-privé",
    description:
      "La clinique développe des partenariats avec des structures publiques et privées pour élargir l'accès aux soins.",
  },
  {
    year: "24/7",
    title: "Une clinique toujours ouverte",
    description:
      "Accueil téléphonique, laboratoire, radiologie et ambulance sont disponibles 24h/24 et 7j/7.",
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>La clinique</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Une clinique de proximité.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              Un engagement depuis 1998.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base max-w-2xl mx-auto"
          >
            Située au quartier Djassin, à 700 mètres de l&apos;hôtel Beaurivage, la Clinique
            Louis Pasteur accompagne les familles de Porto-Novo et de tout le pays.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex items-start gap-3 text-left bg-slate-50 border border-slate-100 rounded-[20px] px-5 py-4 max-w-2xl"
          >
            <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm italic text-navy-light leading-relaxed">
              Je ne te demande pas quelle est ta race, ta nationalité ou ta religion ;
              mais quelle est ta souffrance ?
            </span>
          </motion.blockquote>
        </div>

        {/* Collage & Mission/Vision/Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          {/* Left: Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-8 aspect-[4/5] bg-slate-100 rounded-[20px] overflow-hidden shadow-lg relative border border-slate-100 group"
            >
              <Image
                src="/images/clp-facade.jpg"
                alt="Entrée de la Clinique Louis Pasteur"
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
                className="aspect-square bg-white rounded-[20px] overflow-hidden shadow-md relative border border-slate-100 p-4 flex items-center justify-center"
              >
                <Image
                  src="/images/logo-clp.png"
                  alt="Logo de la Clinique Louis Pasteur"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/5] rounded-[20px] overflow-hidden shadow-md relative border border-primary/10 bg-gradient-to-br from-primary/10 via-white to-accent/10 flex flex-col items-center justify-center text-center px-4 gap-2"
              >
                <HeartPulse className="w-9 h-9 text-primary" />
                <span className="font-serif text-3xl font-black text-navy-dark">24/7</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-tight">
                  Accueil,
                  <br />
                  laboratoire,
                  <br />
                  radiologie
                </span>
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
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">Notre mission</h3>
                <p className="text-sm text-navy-light leading-relaxed">
                  Accueillir chaque patient avec la même attention, sans distinction, et lui
                  offrir des soins de qualité à proximité de chez lui.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="flex gap-5 p-6 bg-slate-50 rounded-[20px] border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3.5 bg-secondary/10 rounded-xl h-fit text-secondary group-hover:bg-secondary/20 transition-colors">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">Notre vision</h3>
                <p className="text-sm text-navy-light leading-relaxed">
                  Être une clinique de référence au Bénin, reconnue pour la qualité de son
                  accueil, la diversité de ses spécialités et la fiabilité de ses examens.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="flex gap-5 p-6 bg-slate-50 rounded-[20px] border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-3.5 bg-accent/10 rounded-xl h-fit text-accent group-hover:bg-accent/20 transition-colors">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy-dark mb-2">Nos valeurs</h3>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Compassion</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Accessibilité</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Rigueur</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-light">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Respect</span>
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
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-dark">
              Notre parcours
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Des repères de confiance
            </p>
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

                    {/* Content block */}
                    <div className="w-full md:w-1/2 md:px-12 flex justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[20px] shadow-sm hover:shadow-md transition-shadow select-none text-left"
                      >
                        <span className="font-mono font-black text-2xl text-primary block mb-2">
                          {event.year}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-navy-dark mb-2">
                          {event.title}
                        </h4>
                        <p className="text-xs text-navy-light leading-relaxed">
                          {event.description}
                        </p>
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
