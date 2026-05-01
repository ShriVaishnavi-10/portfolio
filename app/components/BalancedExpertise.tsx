"use client";

import { motion } from "framer-motion";

export default function BalancedExpertise() {
    const skills = ["System Architecture", "Fintech Automation", "AI / LLM Logic", "Secure Backends", "UI Precision", "Cloud Infrastructure"];

    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">THE CORE PHILOSOPHY.</h2>
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-20 max-w-2xl mx-auto">
                    I believe in writing code that is as durable as it is beautiful. My approach
                    blends technical rigor with a high-end editorial eye for detail.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill}
                            whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.4)" }}
                            className="px-8 py-4 glass-panel rounded-full text-xs font-bold uppercase tracking-widest"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
