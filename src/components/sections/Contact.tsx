"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Sparkles, Navigation, Send, LucideIcon } from "lucide-react";

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
    title: "Hospital Address",
    value: "100 Medical Plaza",
    subValue: "Health Sciences Campus, Chicago, IL 60611",
    icon: MapPin,
    actionText: "Get Directions",
    actionLink: "https://maps.google.com",
  },
  {
    title: "Helplines & ER Desk",
    value: "1-800-555-0199",
    subValue: "Trauma desk: 1-800-555-0122",
    icon: Phone,
    actionText: "Call ER Direct",
    actionLink: "tel:18005550199",
  },
  {
    title: "Electronic Mail Support",
    value: "support@medicare-hospital.org",
    subValue: "Billing: billing@medicare-hospital.org",
    icon: Mail,
    actionText: "Email Support Desk",
    actionLink: "mailto:support@medicare-hospital.org",
  },
];

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
                <span>Contact Channels</span>
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-[1.1] mb-6">
                Get in Touch With
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
                  Our Support Wings.
                </span>
              </h2>

              <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-8">
                Reach out to our information desk. If you are experiencing a life-threatening situation, please call our 24/7 ER hotline directly.
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
                      <p className="text-xs font-bold text-navy-light mt-1.5">{detail.value}</p>
                      {detail.subValue && <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{detail.subValue}</p>}
                      {detail.actionText && detail.actionLink && (
                        <a
                          href={detail.actionLink}
                          target="_blank"
                          rel="noreferrer"
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

            {/* Clinical Operating Hours Card */}
            <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center gap-2 text-navy-dark">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">Clinical Working Hours</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block">Trauma & ER</span>
                  <span className="text-[11px] font-bold text-red-500 uppercase">24/7 (Always Open)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block">Radiology & Labs</span>
                  <span className="text-[11px] font-bold text-navy-dark">Mon-Sat (6am - 10pm)</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-slate-200/55">
                  <span className="text-[10px] text-slate-400 font-semibold block">Outpatient Clinics</span>
                  <span className="text-[11px] font-bold text-navy-dark">Monday - Friday (8:00 AM - 6:00 PM)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Mock Map Dashboard */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white border border-slate-100 rounded-[20px] shadow-lg p-3 flex flex-col h-[520px] md:h-[550px] relative overflow-hidden">
              
              {/* Map Header details */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between z-10 relative">
                <div>
                  <h4 className="text-xs font-bold text-navy-dark">MediCare Main Campus Location Map</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Latitude: 41.8951, Longitude: -87.6200</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-primary hover:bg-secondary text-white font-bold text-[10px] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Navigate</span>
                </a>
              </div>

              {/* Styled Vector Map SVG */}
              <div className="flex-grow relative flex items-center justify-center bg-slate-50 rounded-xl mt-3 overflow-hidden select-none border border-slate-100/50">
                {/* SVG vector patterns representing roads/water */}
                <svg className="absolute inset-0 w-full h-full text-slate-200/40" xmlns="http://www.w3.org/2000/svg">
                  {/* Roads */}
                  <path d="M-10 100 L500 100" stroke="currentColor" strokeWidth="12" fill="none" />
                  <path d="M150 -10 L150 600" stroke="currentColor" strokeWidth="14" fill="none" />
                  <path d="M-10 320 L500 320" stroke="currentColor" strokeWidth="10" fill="none" />
                  <path d="M320 -10 L320 600" stroke="currentColor" strokeWidth="8" fill="none" />
                  <path d="M50 50 Q100 200 400 400" stroke="currentColor" strokeWidth="6" fill="none" />

                  {/* Water Body (Lake Michigan styling) */}
                  <path d="M380 -10 Q340 200 420 600 L500 600 L500 -10 Z" fill="rgba(14, 165, 233, 0.08)" />

                  {/* Surrounding Buildings Mocks */}
                  <rect x="30" y="20" width="80" height="60" rx="4" fill="currentColor" opacity="0.4" />
                  <rect x="180" y="40" width="100" height="50" rx="4" fill="currentColor" opacity="0.4" />
                  <rect x="20" y="140" width="90" height="150" rx="4" fill="currentColor" opacity="0.3" />
                  <rect x="180" y="160" width="110" height="130" rx="4" fill="currentColor" opacity="0.3" />
                  <rect x="40" y="360" width="70" height="120" rx="4" fill="currentColor" opacity="0.4" />
                </svg>

                {/* Primary Hospital Campus Block */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute left-[150px] top-[180px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                >
                  {/* Glowing Radar Rings */}
                  <span className="absolute flex h-10 w-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/20 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-10 w-10 bg-primary/10"></span>
                  </span>

                  {/* Marker Pin */}
                  <div className="relative p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg border border-white z-20">
                    <MapPin className="w-5 h-5" />
                  </div>

                  {/* Marker Label Popup */}
                  <div className="mt-2 bg-navy-dark text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap border border-slate-800 z-20">
                    MediCare Main Hospital
                  </div>
                </motion.div>
                
                {/* Secondary markers (e.g. transit links) */}
                <div className="absolute left-[320px] top-[100px] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 p-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                  <span className="text-[8px] font-bold text-navy-dark">Plaza Train St.</span>
                </div>
              </div>

              {/* Map Footer status */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 mt-3 select-none text-left">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-navy-light">GPS location feed online. Complimentary guest valet parking validation at ER gates.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
