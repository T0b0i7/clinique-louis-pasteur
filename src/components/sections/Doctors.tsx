"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Sparkles, Clock, Globe2, Check, FileText } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  availability: string;
  bio: string;
  initials: string;
  color: string;
}

const doctors: Doctor[] = [
  {
    id: "lassissi",
    name: "Dr Lassissi Moufidathou Laï",
    specialization: "Cardiologie",
    availability: "Mercredi 10h à 17h, vendredi 15h à 18h",
    bio: "Consultations et suivi des maladies cardiovasculaires et de l'hypertension artérielle.",
    initials: "LM",
    color: "from-sky-500/15 to-blue-500/15 text-blue-600",
  },
  {
    id: "fatoki",
    name: "Dr Fatoki Abinu Heny",
    specialization: "Gynécologie obstétrique",
    availability: "Lundi et mardi 9h à 14h, mercredi 15h à 17h",
    bio: "Suivi de la grossesse, consultations gynécologiques et accompagnement des patientes.",
    initials: "FA",
    color: "from-rose-500/15 to-pink-500/15 text-rose-600",
  },
  {
    id: "bacharou",
    name: "Dr Bacharou Salwane",
    specialization: "Pédiatrie néonatologie",
    availability: "Lundi au vendredi 8h à 17h, samedi et urgences",
    bio: "Suivi des nouveau-nés, des nourrissons et des enfants, vaccinations et urgences pédiatriques.",
    initials: "BS",
    color: "from-teal-500/15 to-emerald-500/15 text-teal-600",
  },
  {
    id: "goudou",
    name: "Dr Goudou Rolland",
    specialization: "Chirurgie générale",
    availability: "Samedi 8h à 10h et selon les urgences",
    bio: "Interventions chirurgicales programmées, urgences et suivi post-opératoire des patients.",
    initials: "GR",
    color: "from-indigo-500/15 to-violet-500/15 text-indigo-600",
  },
  {
    id: "olory-togbe",
    name: "Dr Olory-Togbe Régis",
    specialization: "Neurochirurgie",
    availability: "Mardi",
    bio: "Consultations pour les affections du cerveau et de la moelle épinière, en lien avec l'imagerie.",
    initials: "OR",
    color: "from-amber-500/15 to-orange-500/15 text-amber-600",
  },
  {
    id: "amoussou",
    name: "Dr Amoussou Léonel",
    specialization: "ORL et chirurgie maxillo-faciale",
    availability: "Lundi 13h à 15h",
    bio: "Prise en charge des troubles de l'oreille, du nez et de la gorge, et chirurgie de la face.",
    initials: "AL",
    color: "from-cyan-500/15 to-sky-500/15 text-cyan-600",
  },
  {
    id: "gouissi",
    name: "Dr Gouissi Augustin",
    specialization: "Urologie",
    availability: "Mardi 17h à 20h",
    bio: "Diagnostic et suivi des troubles urinaires et de l'appareil reproducteur masculin.",
    initials: "GA",
    color: "from-emerald-500/15 to-green-500/15 text-emerald-600",
  },
  {
    id: "dossou-gbete",
    name: "Dr Dossou-Gbete Véronique",
    specialization: "Examens d'immigration Canada",
    availability: "Sur rendez-vous uniquement",
    bio: "Examens médicaux aux fins d'immigration réalisés pour le compte de Citoyenneté Immigration Canada.",
    initials: "DV",
    color: "from-red-500/15 to-rose-500/15 text-red-600",
  },
];

interface DoctorsProps {
  onBookDoctor: (doctorName: string) => void;
}

const emiDocuments = [
  "Formulaire IMM 1017 envoyé par les autorités canadiennes",
  "Pièce d'identité originale en cours de validité (passeport ou carte nationale)",
  "3 photos d'identité au format passeport",
  "Tout document lié à un problème de santé passé ou actuel",
  "Frais d'examen à préciser lors de la prise de rendez-vous",
];

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
            <span>Notre équipe médicale</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Des praticiens
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              proches de vous.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base"
          >
            Une sélection de spécialistes qui consultent à la Clinique Louis Pasteur.
            Les horaires indiqués sont ceux publiés par la clinique et peuvent changer.
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
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="hospital-card flex flex-col h-full group"
            >
              {/* Avatar */}
              <div className="relative w-full aspect-[4/3] rounded-t-[20px] overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${doctor.color} flex items-center justify-center font-serif text-3xl font-black shadow-inner`}>
                  {doctor.initials}
                </div>

                {/* Availability Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full text-navy-dark border border-slate-100 text-[9px] font-bold shadow-sm flex items-center gap-1 max-w-[150px]">
                  <Clock className="w-3 h-3 text-accent flex-shrink-0" />
                  <span className="truncate">Sur rendez-vous</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow select-none">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                  {doctor.specialization}
                </span>

                <h3 className="font-serif text-lg font-bold text-navy-dark mt-1 mb-2 group-hover:text-primary transition-colors leading-snug">
                  {doctor.name}
                </h3>

                <p className="text-xs text-navy-light leading-relaxed mb-4 flex-grow">
                  {doctor.bio}
                </p>

                {/* Availability */}
                <div className="flex items-start gap-2 text-[10px] text-navy-light/90 mb-6 bg-slate-50 p-2.5 rounded-xl border border-slate-50">
                  <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{doctor.availability}</span>
                </div>

                {/* Book */}
                <button
                  onClick={() => onBookDoctor(doctor.name)}
                  className="w-full py-3 bg-slate-50 group-hover:bg-primary group-hover:text-white border border-slate-100 group-hover:border-primary text-navy-dark font-bold text-[11px] uppercase tracking-wider rounded-xl shadow-sm group-hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 mt-auto"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Demander un rendez-vous</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Immigration Canada Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-[20px] border border-primary/15 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-8 md:p-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-primary font-bold text-[10px] uppercase tracking-wider mb-4 border border-primary/10">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Immigration Canada</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-dark leading-tight mb-4">
                Examens médicaux aux fins d&apos;immigration
              </h3>
              <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-4">
                Les examens médicaux aux fins d&apos;immigration (EMI) sont réalisés à la
                Clinique Louis Pasteur pour le compte de Citoyenneté Immigration Canada,
                par les docteurs Véronique Dossou-Gbete et Lucien Dossou-Gbete. Ils se font
                exclusivement sur rendez-vous.
              </p>
              <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-6">
                Il n&apos;est pas nécessaire de venir à jeun. Les femmes sont invitées à
                prendre rendez-vous en dehors de leur période menstruelle.
              </p>
              <button
                onClick={() => onBookDoctor("Dr Dossou-Gbete Véronique")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre rendez-vous</span>
              </button>
            </div>

            <div className="lg:col-span-7 p-8 md:p-10 bg-white/60 border-t lg:border-t-0 lg:border-l border-primary/10">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h4 className="font-serif text-lg font-bold text-navy-dark">
                  Documents à prévoir
                </h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {emiDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5 text-xs text-navy-light">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-slate-500 mt-5">
                Source : guide du patient de la Clinique Louis Pasteur. Confirmez la liste
                des documents lors de la prise de rendez-vous.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
