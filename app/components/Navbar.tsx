"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-8 left-0 right-0 z-[100] flex justify-center pointer-events-none">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 3 }}
                className="aura-glass px-5 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-4 md:gap-10 pointer-events-auto"
            >
                <div className="hidden md:block font-playfair text-[11px] font-medium tracking-[0.4em] text-foreground/80 uppercase">
                    Shri Vaishnavi
                </div>

                <div className="hidden md:block h-4 w-[1px] bg-foreground/10" />

                <div className="flex gap-4 md:gap-8 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-foreground/30 font-jakarta">
                    <a href="#work" className="hover:text-accent transition-colors duration-500">Works</a>
                    <a href="#about" className="hover:text-accent transition-colors duration-500">About</a>
                    <a href="#contact" className="hover:text-accent transition-colors duration-500">Contact</a>
                </div>

                <div className="h-4 w-[1px] bg-foreground/10" />

                <div className="flex gap-3 md:gap-4">
                    <a href="https://github.com/ShriVaishnavi-10" className="text-foreground/20 hover:text-accent transition-colors duration-500"><Github size={13} /></a>
                    <a href="https://www.linkedin.com/in/b-shri-vaishnavi" className="text-foreground/20 hover:text-accent transition-colors duration-500"><Linkedin size={13} /></a>
                    <a href="mailto:shrivaishnavi.contact@gmail.com" className="text-foreground/20 hover:text-accent transition-colors duration-500"><Mail size={13} /></a>
                </div>
            </motion.div>
        </nav>
    );
}
