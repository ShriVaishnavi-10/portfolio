"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

const projects = [
    {
        title: "PeerLend Architecture",
        category: "Fintech Platform",
        desc: "A high-security, decentralized lending ecosystem with automated compliance.",
        icon: ShieldCheck,
    },
    {
        title: "Aura Cognitive AI",
        category: "AI / Interface",
        desc: "Developing context-aware agents that redefine human-computer interaction.",
        icon: Zap,
    }
];

export default function StructuredShowcase() {
    return (
        <section id="work" className="py-32 px-6 border-y border-white/[0.05] bg-white/[0.01]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase">Archive (01 — 02)</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SELECTED WORKS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-12 rounded-[2rem] group"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <project.icon className="text-primary" size={32} />
                                </div>
                                <button className="p-4 rounded-full border border-white/5 group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowUpRight size={24} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{project.category}</span>
                                <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="mt-12 aspect-video bg-white/[0.02] rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-[10px] uppercase font-bold tracking-[0.5em] opacity-20 italic">Visual Simulation</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
