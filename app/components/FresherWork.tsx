"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Fintech Exploration",
        category: "Mastery Project",
        description: "Developing a foundational, secure lending simulation with institutional-grade protocols and automated validation logic.",
        image: "/fintech.png",
        status: "Academic Distinction"
    },
    {
        title: "Aura AI Interface",
        category: "Technical Prototype",
        description: "Architecting a context-aware AI conversational prototype to explore the boundaries of LLM orchestration and human interaction.",
        image: "/ai.png",
        status: "Personal Innovation"
    }
];

export default function FresherWork() {
    return (
        <section id="work" className="py-32 px-6 border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32 space-y-4">
                    <span className="text-brand-primary font-bold text-xs tracking-widest uppercase">Technical Portfolio</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">FEATURED EXPLORATIONS</h2>
                </div>

                <div className="grid grid-cols-1 gap-24">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left"
                        >
                            <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                                <div className="image-mask aspect-[16/10] group cursor-pointer">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8 lg:px-12">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-primary">{project.category}</span>
                                    <span className="text-[10px] uppercase tracking-widest opacity-30 border border-white/10 px-3 py-1 rounded-full">{project.status}</span>
                                </div>
                                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter heading-gradient">{project.title}</h3>
                                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="pt-4">
                                    <button className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase hover:text-brand-primary transition-colors group">
                                        View Project Case <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
