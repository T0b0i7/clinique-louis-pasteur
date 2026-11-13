"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, AlertCircle, X, Clock } from "lucide-react";

export default function FloatingEmergency() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-72 bg-white rounded-[20px] shadow-2xl border border-red-50 p-5 select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="font-sans font-bold text-navy-dark text-sm">
                  Urgences 24h/24
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 pt-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Ambulance
                </span>
                <a
                  href="tel:+22995621564"
                  className="flex items-center justify-between p-2.5 bg-red-50/50 hover:bg-red-50 rounded-xl group transition-all"
                >
                  <span className="font-mono font-bold text-red-600 text-lg">
                    +229 95 62 15 64
                  </span>
                  <div className="p-1.5 bg-red-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Accueil de la clinique
                </span>
                <a
                  href="tel:+22920212222"
                  className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl group transition-all"
                >
                  <span className="font-mono font-bold text-navy-dark text-base">
                    +229 20 21 22 22
                  </span>
                  <div className="p-1.5 bg-slate-200 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Ambulance disponible 24h/24 et 7j/7.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-red-500/20 cursor-pointer focus:outline-none transition-all"
        aria-label="Numéros d'urgence"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Phone className="w-4 h-4 text-white" />
        <span className="font-sans font-bold text-xs uppercase tracking-wider">
          Urgences 24h/24
        </span>
      </motion.button>
    </div>
  );
}
