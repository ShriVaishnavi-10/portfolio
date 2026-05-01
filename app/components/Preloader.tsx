"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#040405]"
        >
          <div className="relative overflow-hidden flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" fill="#D4AF37" className="font-playfair text-[48px] tracking-[0.1em] font-medium">SV</text>
                  <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow origin-center" />
                  <path d="M50 2L50 8M50 92L50 98M2 50L8 50M92 50L98 50" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
              className="h-[1px] bg-[#D4AF37] mt-8 overflow-hidden"
            >
              <div className="h-full w-full bg-[#D4AF37]/30 animate-pulse" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-jakarta text-[0.6rem] uppercase tracking-[0.4em] text-[#D4AF37]/60 mt-6 text-center"
            >
              Shri Vaishnavi <br />
              <span className="opacity-40">Full Stack Developer</span>
            </motion.p>
          </div>

          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 top-0 w-[1px] h-full bg-[#D4AF37]/10 origin-top"
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute right-0 bottom-0 w-[1px] h-full bg-[#D4AF37]/10 origin-bottom"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
