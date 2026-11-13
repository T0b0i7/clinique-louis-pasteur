"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  ChevronRight,
  X,
  Sparkles,
  Check,
  Activity,
  Brain,
  Baby,
  ScanLine,
  Ear,
  FlaskConical,
  Scissors,
  Stethoscope,
  Users,
  HeartHandshake,
  BedDouble,
  LucideIcon,
} from "lucide-react";

interface Department {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  longDescription: string;
  highlights: string[];
  equipment: string;
}

const departments: Department[] = [
  {
    id: "cardiologie",
    title: "Cardiologie",
    description: "Consultations et suivi des maladies du coeur et des vaisseaux.",
    icon: HeartPulse,
    longDescription:
      "Le service de cardiologie assure le diagnostic, le suivi et la prise en charge des patients souffrant d'hypertension, de troubles du rythme ou d'autres maladies cardiovasculaires. Les consultations sont assurées par le Dr Lassissi Moufidathou Laï.",
    highlights: [
      "Consultations sur rendez-vous",
      "Suivi de l'hypertension artérielle",
      "Orientation vers les examens complémentaires",
    ],
    equipment: "Mercredi de 10h à 17h et vendredi de 15h à 18h",
  },
  {
    id: "gynecologie",
    title: "Gynécologie obstétrique",
    description: "Suivi de la grossesse, consultations gynécologiques et accouchement.",
    icon: Users,
    longDescription:
      "Le service de gynécologie obstétrique accompagne les femmes à chaque étape de leur vie : suivi prénatal, accouchement, planning familial et consultations gynécologiques. Les Drs Fatoki Abinu Heny et Oke-Ve Fidélia assurent les consultations.",
    highlights: [
      "Suivi prénatal et accouchement",
      "Planning familial",
      "Consultations gynécologiques",
    ],
    equipment: "Lundi et mardi de 9h à 14h, mercredi de 15h à 17h",
  },
  {
    id: "pediatrie",
    title: "Pédiatrie néonatologie",
    description: "Soins aux nourrissons, aux enfants et aux nouveau-nés.",
    icon: Baby,
    longDescription:
      "La pédiatrie néonatologie prend en charge la santé des nouveau-nés, des nourrissons et des enfants. Les consultations sont assurées par le Dr Bacharou Salwane, avec une attention particulière portée à la vaccination et au suivi de croissance.",
    highlights: [
      "Consultations du lundi au vendredi",
      "Vaccinations et suivi de croissance",
      "Prise en charge des urgences pédiatriques",
    ],
    equipment: "Lundi au vendredi de 8h à 17h, samedi et urgences",
  },
  {
    id: "chirurgie",
    title: "Chirurgie générale",
    description: "Interventions chirurgicales et suivi post-opératoire.",
    icon: Scissors,
    longDescription:
      "Le service de chirurgie générale réalise les interventions programmées et prend en charge les urgences chirurgicales. Les patients sont suivis avant et après l'opération par le Dr Goudou Rolland et l'équipe soignante.",
    highlights: [
      "Interventions programmées",
      "Prise en charge des urgences",
      "Suivi post-opératoire",
    ],
    equipment: "Samedi de 8h à 10h et selon les urgences",
  },
  {
    id: "medecine-generale",
    title: "Médecine générale",
    description: "Consultations de proximité, prévention et orientation des patients.",
    icon: Stethoscope,
    longDescription:
      "La médecine générale est le premier point de contact de la clinique. Les médecins assurent les consultations courantes, le suivi des maladies chroniques et orientent les patients vers les spécialistes lorsque cela est nécessaire.",
    highlights: [
      "Consultations avec ou sans rendez-vous",
      "Suivi des maladies chroniques",
      "Orientation vers les spécialités",
    ],
    equipment: "Du lundi au vendredi et selon le planning de garde",
  },
  {
    id: "neurochirurgie",
    title: "Neurochirurgie",
    description: "Prise en charge des affections du cerveau et de la moelle épinière.",
    icon: Brain,
    longDescription:
      "Le service de neurochirurgie reçoit les patients présentant des affections du système nerveux central. Les consultations sont assurées par le Dr Olory-Togbe Régis, en lien avec les examens d'imagerie disponibles à la clinique.",
    highlights: [
      "Consultations spécialisées",
      "Travail avec le plateau d'imagerie",
      "Suivi des patients opérés",
    ],
    equipment: "Consultations le mardi",
  },
  {
    id: "orl",
    title: "ORL et chirurgie maxillo-faciale",
    description: "Troubles de l'oreille, du nez, de la gorge et de la face.",
    icon: Ear,
    longDescription:
      "Le service ORL prend en charge les infections et troubles de l'oreille, du nez et de la gorge, ainsi que certaines interventions maxillo-faciales. Les consultations sont assurées par le Dr Amoussou Léonel.",
    highlights: [
      "Consultations ORL",
      "Prise en charge des infections ORL",
      "Chirurgie maxillo-faciale",
    ],
    equipment: "Consultations le lundi de 13h à 15h",
  },
  {
    id: "urologie",
    title: "Urologie",
    description: "Diagnostic et suivi des troubles urinaires et de l'appareil reproducteur.",
    icon: Activity,
    longDescription:
      "Le service d'urologie reçoit les patients pour des troubles urinaires, des douleurs ou un suivi post-opératoire. Les consultations sont assurées par le Dr Gouissi Augustin.",
    highlights: [
      "Consultations spécialisées",
      "Suivi des troubles urinaires",
      "Orientation vers les examens",
    ],
    equipment: "Consultations le mardi de 17h à 20h",
  },
  {
    id: "radiologie",
    title: "Radiologie et échographie",
    description: "Radiographies simples 24h/24 et échographies sur rendez-vous.",
    icon: ScanLine,
    longDescription:
      "Le plateau de radiologie réalise les radiographies simples 24h/24 et 7j/7, sans préparation particulière. Les radiographies avec produit de contraste et les échographies se font sur rendez-vous. Les résultats des échographies sont disponibles le même jour.",
    highlights: [
      "Radiographies simples 24h/24",
      "Échographies sur rendez-vous",
      "Résultats le même jour",
    ],
    equipment: "Accueil 24h/24 et 7j/7 pour les radiographies simples",
  },
  {
    id: "laboratoire",
    title: "Laboratoire d'analyses",
    description: "Prélèvements et analyses disponibles 24h/24.",
    icon: FlaskConical,
    longDescription:
      "Le laboratoire effectue les prélèvements 24h/24 et 7j/7. Beaucoup d'examens nécessitent d'être à jeun. La plupart des résultats sont disponibles le même jour.",
    highlights: [
      "Prélèvements 24h/24 et 7j/7",
      "Résultats souvent le même jour",
      "Analyse sur prescription médicale",
    ],
    equipment: "Se présenter à jeun lorsque l'examen le demande",
  },
  {
    id: "maternite",
    title: "Maternité et sage-femme",
    description: "Accompagnement de la grossesse, accouchement et planning familial.",
    icon: HeartHandshake,
    longDescription:
      "La maternité de la Clinique Louis Pasteur est ouverte 24h/24. L'équipe de sages-femmes assure les consultations prénatales, les accouchements, le suivi post-natal et le planning familial.",
    highlights: [
      "Équipe de sages-femmes disponible 24h/24",
      "Consultations prénatales et post-natales",
      "Accouchement et planning familial",
    ],
    equipment: "Service ouvert 24h/24 et 7j/7",
  },
  {
    id: "hospitalisation",
    title: "Hospitalisation et soins",
    description: "Chambres, soins infirmiers, pansements et chambres d'isolement.",
    icon: BedDouble,
    longDescription:
      "La clinique dispose de chambres d'hospitalisation, de chambres d'isolement et d'une équipe de soins infirmiers. Les pansements sont réalisés par le personnel paramédical, avec ou sans rendez-vous selon la gravité de la plaie.",
    highlights: [
      "Hospitalisation et chambres d'isolement",
      "Soins infirmiers tous les jours",
      "Pansements avec ou sans rendez-vous",
    ],
    equipment: "Visites aux hospitalisés de 7h30 à 9h, 12h à 14h et 18h30 à 21h",
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
            <span>Spécialités et services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Plus de 20 spécialités.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              Un seul lieu de soins.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base"
          >
            De la consultation de médecine générale à la chirurgie spécialisée, la clinique
            réunit les compétences et les plateaux techniques nécessaires au quotidien.
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
                {/* Icon band */}
                <div className="relative w-full h-24 overflow-hidden rounded-t-[20px] bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center border-b border-slate-100">
                  <div className="p-3 bg-white rounded-2xl text-primary shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow select-none">
                  <h3 className="font-serif text-lg font-bold text-navy-dark mb-2 group-hover:text-primary transition-colors leading-snug">
                    {dept.title}
                  </h3>
                  <p className="text-xs text-navy-light leading-relaxed mb-6 flex-grow">
                    {dept.description}
                  </p>

                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary group/btn transition-colors cursor-pointer text-left self-start mt-auto"
                  >
                    <span>En savoir plus</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 mt-10 max-w-2xl mx-auto">
          Les horaires des praticiens peuvent changer. Confirmez toujours votre rendez-vous
          par téléphone au <a href="tel:+22920212222" className="font-bold text-primary">+229 20 21 22 22</a>.
        </p>
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
              {/* Header */}
              <div className="relative w-full px-6 py-8 md:px-8 bg-gradient-to-br from-primary/10 via-white to-accent/10 border-b border-slate-100 flex-shrink-0">
                <button
                  onClick={() => setSelectedDept(null)}
                  className="absolute top-4 right-4 p-2 bg-white hover:bg-slate-100 rounded-full text-slate-500 cursor-pointer transition-colors border border-slate-100"
                  aria-label="Fermer la fenêtre"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 pr-10">
                  <div className="p-3 bg-primary rounded-xl text-white shadow-lg">
                    {(() => {
                      const Icon = selectedDept.icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-dark leading-tight">
                      {selectedDept.title}
                    </h3>
                    <p className="text-primary text-[10px] md:text-xs uppercase font-bold tracking-widest mt-1">
                      Clinique Louis Pasteur
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-navy-dark mb-2">Présentation</h4>
                  <p className="text-xs md:text-sm text-navy-light leading-relaxed">
                    {selectedDept.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-serif text-base font-bold text-navy-dark mb-3">
                      Points clés
                    </h4>
                    <ul className="space-y-2">
                      {selectedDept.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-navy-light">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical info */}
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Horaires et accès
                    </span>
                    <p className="text-xs font-bold text-navy-dark leading-relaxed">
                      {selectedDept.equipment}
                    </p>
                    <span className="text-[10px] text-primary font-semibold mt-2 block">
                      Confirmez par téléphone
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
                  Fermer
                </button>
                <button
                  onClick={() => {
                    setSelectedDept(null);
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
                  Demander un rendez-vous
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
