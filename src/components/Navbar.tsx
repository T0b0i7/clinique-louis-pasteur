"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, HeartPulse } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Packages", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background color & blur state
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy logic
      const sections = navItems.map((item) => item.href.substring(1));
      sections.push("appointment", "contact");

      let currentActive = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is within the top portion of the screen
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
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
            ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group select-none"
          >
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <HeartPulse className="w-6 h-6 text-primary" />
            </div>
            <span className="font-serif text-2xl font-bold text-navy-dark tracking-wide">
              Medi<span className="text-primary font-sans font-medium">Care</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
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
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg hover:text-primary ${
                    isActive ? "text-primary" : "text-navy-light"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA & Emergency Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:18005550199"
              className="flex items-center gap-1.5 px-3.5 py-2 border border-red-100 hover:border-red-200 bg-red-50/30 hover:bg-red-50/60 rounded-full text-red-600 font-bold text-xs uppercase tracking-wide transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 group-hover:animate-bounce" />
              <span>ER Desk: 1-800-555-0199</span>
            </a>

            <button
              onClick={() => handleNavClick("#appointment")}
              className="px-5 py-2.5 bg-primary hover:bg-secondary text-white font-semibold text-sm rounded-full shadow-md hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden hover:bg-slate-100 rounded-xl text-navy-dark focus:outline-none transition-colors"
            aria-label="Toggle menu"
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
            className="fixed top-[73px] left-0 right-0 z-30 bg-white border-b border-slate-100 shadow-xl overflow-hidden lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
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

              <div className="h-px bg-slate-100 my-2" />

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:18005550199"
                  className="flex items-center justify-center gap-2 py-3.5 border border-red-200 bg-red-50 text-red-600 rounded-xl font-bold uppercase tracking-wide text-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>ER Hotline: 1-800-555-0199</span>
                </a>
                <button
                  onClick={() => handleNavClick("#appointment")}
                  className="w-full py-3.5 bg-primary hover:bg-secondary text-white font-bold rounded-xl text-center text-sm shadow-md"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
