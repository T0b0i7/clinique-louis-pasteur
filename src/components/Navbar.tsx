"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Accueil", href: "#home" },
  { label: "La clinique", href: "#about" },
  { label: "Spécialités", href: "#departments" },
  { label: "Équipe", href: "#doctors" },
  { label: "Pourquoi nous", href: "#why-choose-us" },
  { label: "Assurances", href: "#pricing" },
  { label: "Guide patient", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      sections.push("appointment", "contact");

      let currentActive = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2.5 group select-none flex-shrink-0"
          >
            <div className="p-1.5 bg-white rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
              <Image
                src="/images/logo-clp.png"
                alt="Logo Clinique Louis Pasteur"
                width={36}
                height={36}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-serif text-base sm:text-lg xl:text-xl font-bold text-navy-dark leading-tight">
              Clinique
              <span className="block text-primary font-sans font-semibold text-[11px] sm:text-xs tracking-wide uppercase">
                Louis Pasteur
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-2 text-[13px] font-semibold transition-colors duration-300 rounded-lg hover:text-primary whitespace-nowrap ${
                    isActive ? "text-primary" : "text-navy-light"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA & Emergency Buttons */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+22995621564"
              className="flex items-center gap-1.5 px-3.5 py-2 border border-red-100 hover:border-red-200 bg-red-50/40 hover:bg-red-50/70 rounded-full text-red-600 font-bold text-[11px] uppercase tracking-wide transition-colors group whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 group-hover:animate-bounce" />
              <span>Ambulance : 95 62 15 64</span>
            </a>

            <button
              onClick={() => handleNavClick("#appointment")}
              className="px-5 py-2.5 bg-primary hover:bg-secondary text-white font-semibold text-sm rounded-full shadow-md hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 xl:hidden hover:bg-slate-100 rounded-xl text-navy-dark focus:outline-none transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[73px] left-0 right-0 z-30 bg-white border-b border-slate-100 shadow-xl overflow-hidden xl:hidden max-h-[calc(100vh-73px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                      isActive
                        ? "bg-slate-50 text-primary border-l-4 border-primary"
                        : "text-navy-light hover:bg-slate-50/50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="h-px bg-slate-100 my-3" />

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+22995621564"
                  className="flex items-center justify-center gap-2 py-3.5 border border-red-200 bg-red-50 text-red-600 rounded-xl font-bold uppercase tracking-wide text-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ambulance : 95 62 15 64</span>
                </a>
                <button
                  onClick={() => handleNavClick("#appointment")}
                  className="w-full py-3.5 bg-primary hover:bg-secondary text-white font-bold rounded-xl text-center text-sm shadow-md"
                >
                  Prendre rendez-vous
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-2">
                Accueil téléphonique 24h/24 : +229 20 21 22 22
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
