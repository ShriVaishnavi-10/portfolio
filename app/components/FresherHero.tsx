"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FresherHero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
            </div>

            <div className="ambient-glow" />

            <div className="executive-container relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 3.2 }}
                    className="flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 sm:gap-5 font-jakarta text-[0.55rem] sm:text-[0.7rem] tracking-[0.2em] sm:tracking-[0.4em] uppercase text-accent mb-12">
                        <span className="w-4 sm:w-10 h-[1px] bg-accent/30"></span>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 opacity-90">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#D4AF37" className="font-playfair text-[50px] font-bold">SV</text>
                                    <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 6" />
                                </svg>
                            </div>
                            <span>Full Stack Developer</span>
                        </div>
                        <span className="w-4 sm:w-10 h-[1px] bg-accent/30"></span>
                    </div>

                    <div className="relative mb-12 overflow-hidden px-4">
                        <h1 className="title-primary text-center text-foreground mask-reveal leading-[1.1] break-words">
                            <span className="block">Turning Ideas into</span>
                            <span className="block italic-serif">interactive experiences</span>
                        </h1>
                    </div>

                    <p className="max-w-4xl mx-auto text-[clamp(1rem,1.6vw,1.3rem)] font-light text-muted leading-[1.8] mb-16 text-center animate-fade-up">
                        <span className="block text-foreground font-medium mb-1">Hi, I am Shri Vaishnavi.</span>
                        <span className="italic-serif block">I design and develop modern, user-friendly websites using clean code and creative thinking.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-fade-up">
                        <a href="#contact" className="px-12 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:-translate-y-1 hover:bg-accent duration-500">
                            Establish Contact
                        </a>
                        <a href="#work" className="px-12 py-5 border border-white/10 hover:border-accent hover:text-accent rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500">
                            View Works
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
