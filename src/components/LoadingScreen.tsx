"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-hospital-bg select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing glow background */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-32 h-32 bg-primary/20 rounded-full blur-2xl"
            />

            {/* Premium Animated Medical Cross Logo */}
            <div className="relative w-20 h-20 flex items-center justify-center mb-6">
              {/* Vertical line of medical cross */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-5 h-20 bg-gradient-to-b from-primary to-secondary rounded-full"
              />
              {/* Horizontal line of medical cross */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="absolute h-5 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"
              />
              {/* Inner glowing dot */}
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute w-3.5 h-3.5 bg-white rounded-full shadow-md"
              />
            </div>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-3xl font-bold tracking-wide text-navy-dark"
            >
              Medi<span className="text-primary font-sans">Care</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] text-navy-light mt-2"
            >
              Advanced Healthcare &bull; Compassionate Care
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-48 h-1 bg-slate-200/60 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.span 
              className="text-xs font-semibold text-primary mt-2 font-mono"
            >
              {Math.min(progress, 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
