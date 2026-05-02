"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function EducationSection() {
    return (
        <section id="education" className="py-32 px-6 border-y border-black/[0.05]">
            <div className="executive-container">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-24 uppercase">Academic Core</h2>

                <div className="max-w-3xl mx-auto space-y-8 text-left">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="executive-glass p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                            <GraduationCap className="text-[#D4AF37]" size={32} />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 block">Bachelor of Engineering</span>
                            <h3 className="text-3xl font-bold tracking-tight mb-2">Computer Science & Engineering</h3>
                            <p className="text-muted-foreground font-light">Focusing on System Architecture, Data Logic, and Emerging Technologies.</p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="executive-glass p-10 rounded-[2.5rem] space-y-4"
                        >
                            <Award className="text-[#D4AF37]" size={24} />
                            <h4 className="font-bold uppercase tracking-widest text-sm">Distinction Merit</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Recognized for excellence in technical innovation and algorithmic precision.</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="executive-glass p-10 rounded-[2.5rem] space-y-4"
                        >
                            <BookOpen className="text-[#D4AF37]" size={24} />
                            <h4 className="font-bold uppercase tracking-widest text-sm">Advanced Certifications</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Specialized in Modern Web Frameworks and AI Orchestration.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
