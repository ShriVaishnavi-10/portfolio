"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function ProfessionalHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-4xl"
            >
                <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
                    Software Engineer — Fintech & AI
                </span>

                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-gradient">
                    SOPHISTICATED <br /> ENGINEERING.
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-16 font-light leading-relaxed">
                    Crafting resilient digital infrastructure where architectural precision
                    meets world-class visual elegance.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                        Explore Portfolio
                    </button>

                    <button className="px-10 py-5 glass-panel rounded-xl font-bold transition-all hover:bg-white/5">
                        View Resume
                    </button>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 opacity-10"
            >
                <ChevronDown className="text-[#D4AF37]" size={32} />
            </motion.div>
        </section>
    );
}
