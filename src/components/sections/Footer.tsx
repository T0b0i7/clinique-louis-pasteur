"use client";

import { useState } from "react";
import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, Send, Mail, CheckCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

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
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-primary/20 rounded-xl text-primary border border-primary/20">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide">
              Medi<span className="text-primary font-sans font-medium">Care</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-8 max-w-sm">
            MediCare leads the frontier of luxury private healthcare, delivering cutting-edge surgeries, expert diagnostics, and compassionate clinical care.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 hover:bg-primary rounded-xl text-slate-300 hover:text-white transition-all shadow-sm" aria-label="Facebook link">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 hover:bg-primary rounded-xl text-slate-300 hover:text-white transition-all shadow-sm" aria-label="Twitter link">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 hover:bg-primary rounded-xl text-slate-300 hover:text-white transition-all shadow-sm" aria-label="Instagram link">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 hover:bg-primary rounded-xl text-slate-300 hover:text-white transition-all shadow-sm" aria-label="LinkedIn link">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Col */}
        <div className="lg:col-span-2 flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">Quick Navigation</h4>
          <ul className="space-y-3.5">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="text-xs text-slate-450 hover:text-primary transition-colors font-medium">Home Portal</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="text-xs text-slate-450 hover:text-primary transition-colors font-medium">About Hospital</a>
            </li>
            <li>
              <a href="#departments" onClick={(e) => handleLinkClick(e, "#departments")} className="text-xs text-slate-450 hover:text-primary transition-colors font-medium">Specialties</a>
            </li>
            <li>
              <a href="#doctors" onClick={(e) => handleLinkClick(e, "#doctors")} className="text-xs text-slate-450 hover:text-primary transition-colors font-medium">Elite Doctors</a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => handleLinkClick(e, "#pricing")} className="text-xs text-slate-450 hover:text-primary transition-colors font-medium">Health Packages</a>
            </li>
          </ul>
        </div>

        {/* Departments Col */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">Medical Specialties</h4>
          <ul className="space-y-3.5">
            <li>
              <a href="#departments" onClick={(e) => handleLinkClick(e, "#departments")} className="text-xs text-slate-455 hover:text-primary transition-colors font-medium">Cardiovascular Division</a>
            </li>
            <li>
              <a href="#departments" onClick={(e) => handleLinkClick(e, "#departments")} className="text-xs text-slate-455 hover:text-primary transition-colors font-medium">Brain & Spine Center</a>
            </li>
            <li>
              <a href="#departments" onClick={(e) => handleLinkClick(e, "#departments")} className="text-xs text-slate-455 hover:text-primary transition-colors font-medium">Orthopedics & Joint Care</a>
            </li>
            <li>
              <a href="#departments" onClick={(e) => handleLinkClick(e, "#departments")} className="text-xs text-slate-455 hover:text-primary transition-colors font-medium">Pediatrics & Neonatal Wing</a>
            </li>
            <li>
              <a href="#departments" onClick={(e) => handleLinkClick(e, "#departments")} className="text-xs text-slate-455 hover:text-primary transition-colors font-medium">Cosmetic Dermatology</a>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription Col */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">Health Journal Signup</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-5">
            Subscribe to receive diagnostic checkup discounts and monthly medical reports curated by our chief medical board.
          </p>
          <form onSubmit={handleSubscribe} className="relative w-full flex flex-col gap-2">
            <div className="relative flex items-center w-full">
              <Mail className="absolute left-3 w-4 h-4 text-slate-500" />
              <input
                type="email"
                required
                placeholder="doctor@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-12 py-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-750 focus:border-primary rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-2 bg-primary hover:bg-secondary text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Subscribe button"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-450 mt-1">
                <CheckCircle className="w-4 h-4" />
                <span>Subscription Active!</span>
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-slate-800 py-8 bg-slate-950 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Copyright &copy; {new Date().getFullYear()} MediCare Hospital Group. All rights reserved.
          </span>
          <span className="text-[10px] text-slate-500 font-medium">
            Accredited by Joint Commission International &bull; HIPAA Compliant
          </span>
        </div>
      </div>
    </footer>
  );
}
