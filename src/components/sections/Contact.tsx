"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Sparkles, Navigation, Send, LucideIcon } from "lucide-react";
import Image from "next/image";

interface ContactDetail {
  title: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
  actionText?: string;
  actionLink?: string;
}

const contactDetails: ContactDetail[] = [
  {
    title: "Adresse de la clinique",
    value: "Quartier Djassin, 631 route de Louho",
    subValue: "Porto-Novo, Bénin. 01 BP 165. À 700 m de l'hôtel Beaurivage.",
    icon: MapPin,
    actionText: "Voir l'itinéraire",
    actionLink:
      "https://www.google.com/maps/search/?api=1&query=Clinique+Louis+Pasteur+Porto-Novo+Benin",
  },
  {
    title: "Téléphones et ambulance",
    value: "+229 20 21 22 22",
    subValue: "Mobile : +229 95 86 95 25. Ambulance : +229 95 62 15 64.",
    icon: Phone,
    actionText: "Appeler la clinique",
    actionLink: "tel:+22920212222",
  },
  {
    title: "Email et fax",
    value: "contact@cliniquelouispasteur.com",
    subValue: "Fax : +229 20 21 27 00",
    icon: Mail,
    actionText: "Écrire un email",
    actionLink: "mailto:contact@cliniquelouispasteur.com",
  },
];

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=Clinique+Louis+Pasteur+de+Djassin+Porto-Novo";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-hospital-bg relative overflow-hidden">
      <div className="absolute inset-0 medical-pattern-bg opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left select-none">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nous contacter</span>
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-[1.1] mb-6">
                La clinique
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
                  vous accueille.
                </span>
              </h2>

              <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-8">
                Pour une consultation, un examen ou une urgence, contactez directement la
                clinique. L&apos;accueil téléphonique est disponible 24h/24 et 7j/7.
              </p>
            </div>

            {/* Quick Details Cards */}
            <div className="space-y-6 mb-8">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.title} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="p-3 bg-primary/10 rounded-xl h-fit text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-dark">{detail.title}</h4>
                      <p className="text-xs font-bold text-navy-light mt-1.5 break-words">{detail.value}</p>
                      {detail.subValue && (
                        <p className="text-[10px] text-slate-400 font-semibold mt-0.5 leading-relaxed">
                          {detail.subValue}
                        </p>
                      )}
                      {detail.actionText && detail.actionLink && (
                        <a
                          href={detail.actionLink}
                          target={detail.actionLink.startsWith("http") ? "_blank" : undefined}
                          rel={detail.actionLink.startsWith("http") ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-primary hover:text-secondary mt-2.5 transition-colors"
                        >
                          <span>{detail.actionText}</span>
                          <Navigation className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Opening Hours Card */}
            <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center gap-2 text-navy-dark">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">Horaires</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block">Accueil téléphonique</span>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase">24h/24, 7j/7</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block">Laboratoire et radiologie</span>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase">24h/24, 7j/7</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-slate-200/55">
                  <span className="text-[10px] text-slate-400 font-semibold block">Visites aux hospitalisés</span>
                  <span className="text-[11px] font-bold text-navy-dark">
                    7h30 à 9h, 12h à 14h, 18h30 à 21h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white border border-slate-100 rounded-[20px] shadow-lg p-3 flex flex-col h-[520px] md:h-[550px] relative overflow-hidden">
              {/* Map Header */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10 relative">
                <div>
                  <h4 className="text-xs font-bold text-navy-dark">
                    Clinique Louis Pasteur, Porto-Novo
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                    Quartier Djassin, 631 route de Louho. Plus code : OLC FHFX+QX
                  </p>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-primary hover:bg-secondary text-white font-bold text-[10px] uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer flex-shrink-0"
                >
                  <Send className="w-3 h-3" />
                  <span>Itinéraire</span>
                </a>
              </div>

              {/* Map */}
              <div className="flex-grow relative mt-3 overflow-hidden rounded-xl border border-slate-100/50 bg-slate-100">
                <Image
                  src="/images/map-djassin.jpg"
                  alt="Carte du quartier Djassin à Porto-Novo avec l'emplacement de la Clinique Louis Pasteur"
                  fill
                  className="object-cover"
                />
                {/* Marker */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="absolute flex h-10 w-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/30 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-10 w-10 bg-primary/15"></span>
                  </span>
                  <div className="relative p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg border border-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Map Footer */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-2 mt-3 select-none text-left">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <motion.span
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-500"
                    />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-navy-light">
                    À 700 m de l&apos;hôtel Beaurivage, route de Louho.
                  </span>
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=6.4741&mlon=2.5998#map=16/6.4741/2.5998"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] font-semibold text-slate-400 hover:text-primary transition-colors flex-shrink-0"
                >
                  © OpenStreetMap contributors
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
