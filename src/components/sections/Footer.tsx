"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";

const navigation = [
  { label: "Accueil", href: "#home" },
  { label: "La clinique", href: "#about" },
  { label: "Spécialités", href: "#departments" },
  { label: "Équipe médicale", href: "#doctors" },
  { label: "Assurances et paiement", href: "#pricing" },
  { label: "Guide du patient", href: "#testimonials" },
];

const specialties = [
  "Cardiologie",
  "Gynécologie obstétrique",
  "Pédiatrie néonatologie",
  "Chirurgie générale",
  "Neurochirurgie",
  "ORL et chirurgie maxillo-faciale",
];

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
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
    <footer className="bg-navy-dark text-white border-t border-slate-800 relative select-none">
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Brand Col */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-1.5 bg-white rounded-xl">
              <Image
                src="/images/logo-clp.png"
                alt="Logo Clinique Louis Pasteur"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-serif text-xl font-bold tracking-wide leading-tight">
              Clinique
              <span className="block text-primary font-sans font-semibold text-[11px] tracking-wide uppercase">
                Louis Pasteur
              </span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
            Clinique polyvalente à Porto-Novo depuis 1998. Plus de 20 spécialités, un
            laboratoire et une radiologie ouverts 24h/24, une maternité et une équipe
            disponible tous les jours.
          </p>
          <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>
              Quartier Djassin, 631 route de Louho
              <br />
              Porto-Novo, Bénin. 01 BP 165
            </span>
          </div>
          <a
            href="https://cliniquelouispasteur.bj"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-[11px] font-bold text-primary hover:text-accent transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Site officiel de la clinique</span>
          </a>
        </div>

        {/* Quick Links Col */}
        <div className="lg:col-span-2 flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">
            Navigation
          </h4>
          <ul className="space-y-3.5">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-xs text-slate-400 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialties Col */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">
            Spécialités
          </h4>
          <ul className="space-y-3.5">
            {specialties.map((specialty) => (
              <li key={specialty}>
                <a
                  href="#departments"
                  onClick={(e) => handleLinkClick(e, "#departments")}
                  className="text-xs text-slate-400 hover:text-primary transition-colors font-medium"
                >
                  {specialty}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Col */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">
            Contact
          </h4>
          <ul className="space-y-4 w-full">
            <li>
              <a
                href="tel:+22920212222"
                className="flex items-start gap-2.5 text-xs text-slate-400 hover:text-primary transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  +229 20 21 22 22
                  <br />
                  <span className="text-[10px] text-slate-500">
                    Mobile : +229 95 86 95 25
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="tel:+22995621564"
                className="flex items-start gap-2.5 text-xs text-slate-400 hover:text-primary transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>
                  Ambulance
                  <br />
                  <span className="text-[10px] text-slate-500">+229 95 62 15 64</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@cliniquelouispasteur.com"
                className="flex items-start gap-2.5 text-xs text-slate-400 hover:text-primary transition-colors font-medium break-all"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>contact@cliniquelouispasteur.com</span>
              </a>
            </li>
          </ul>

          <div className="mt-6 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 w-full">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
              Accueil téléphonique
            </p>
            <p className="text-[11px] text-emerald-400 font-bold">24h/24 et 7j/7</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-slate-800 py-8 bg-slate-950 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Copyright &copy; {new Date().getFullYear()} Clinique Louis Pasteur. Tous droits réservés.
          </span>
          <span className="text-[10px] text-slate-500 font-medium">
            Autorisation d&apos;ouverture numéro 0793/MSP/DC/SGM/DNPS/SHMNT du 12 décembre 2003
          </span>
        </div>
      </div>
    </footer>
  );
}
