"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck, CreditCard, Wallet, Smartphone } from "lucide-react";

interface PaymentOption {
  name: string;
  tag: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  badgeText?: string;
  icon: typeof Wallet;
  accentClass: string;
}

const paymentOptions: PaymentOption[] = [
  {
    name: "Tiers payant",
    tag: "Patients assurés",
    description:
      "La clinique travaille avec des partenaires assureurs. Pour les patients couverts, seul le tiers payant est exigé.",
    features: [
      "Prise en charge selon votre contrat d'assurance",
      "Tiers payant appliqué pour les assurés",
      "Liste des partenaires disponible à l'accueil",
      "Présentez votre carte ou attestation d'assuré",
    ],
    popular: true,
    ctaText: "Vérifier ma couverture",
    badgeText: "Recommandé",
    icon: ShieldCheck,
    accentClass:
      "border-primary/30 hover:border-primary shadow-lg shadow-primary/5 hover:shadow-primary/20 scale-100 md:scale-[1.03]",
  },
  {
    name: "Espèces et chèques",
    tag: "Au guichet",
    description:
      "Vous pouvez régler directement à la caisse de la clinique, en espèces ou par chèque.",
    features: [
      "Règlement à la caisse",
      "Chèques acceptés",
      "Reçu remis après paiement",
      "Provision demandée en cas d'hospitalisation",
    ],
    popular: false,
    ctaText: "Nous contacter",
    icon: Wallet,
    accentClass: "border-slate-100 hover:border-slate-300 hover:shadow-slate-200/50",
  },
  {
    name: "Mobile Banking",
    tag: "Paiement mobile",
    description:
      "Le paiement par mobile banking est accepté. La confirmation est vérifiée à la caisse.",
    features: [
      "Paiement par Mobile Money",
      "Confirmation à la caisse",
      "Reçu remis après validation",
      "Disponible pendant les heures d'accueil",
    ],
    popular: false,
    ctaText: "Demander les détails",
    icon: Smartphone,
    accentClass: "border-slate-100 hover:border-accent/40 hover:border-accent hover:shadow-accent/20",
  },
];

export default function Pricing() {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
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
            <span>Assurances et paiement</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight"
          >
            Des modalités de paiement
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
              simples et claires.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-light mt-4 text-base"
          >
            Les tarifs ne sont pas publiés en ligne. Renseignez-vous à l&apos;accueil ou par
            téléphone. Les assurés bénéficient du tiers payant selon leur contrat.
          </motion.p>
        </div>

        {/* Payment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {paymentOptions.map((option, idx) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-[20px] border p-8 flex flex-col justify-between transition-all duration-400 select-none relative group ${option.accentClass}`}
              >
                {/* Popular Badge */}
                {option.popular && option.badgeText && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md flex items-center gap-1 whitespace-nowrap">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{option.badgeText}</span>
                  </div>
                )}

                <div>
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl w-fit mb-5 text-primary group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-navy-dark mb-2">
                    {option.name}
                  </h3>
                  <p className="text-xs text-navy-light/80 leading-relaxed mb-6">
                    {option.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 pb-6">
                    <span className="font-serif text-2xl md:text-3xl font-black text-navy-dark">
                      {option.tag}
                    </span>
                    <CreditCard className="w-4 h-4 text-slate-300 ml-auto" />
                  </div>

                  <ul className="space-y-4 mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-navy-light">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleScrollToContact}
                  className={`w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${
                    option.popular
                      ? "bg-primary text-white shadow-md hover:bg-secondary hover:shadow-lg hover:shadow-primary/20"
                      : "bg-slate-50 border border-slate-100 hover:border-primary hover:text-primary text-navy-dark hover:shadow-sm"
                  }`}
                >
                  {option.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <p className="text-xs md:text-sm text-navy-light leading-relaxed">
            En cas d&apos;hospitalisation, une provision est demandée. Un point financier est
            réalisé chaque jour et un réapprovisionnement peut être nécessaire.
            Pour toute question, appelez le{" "}
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
