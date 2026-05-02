"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, Shield, Cpu, Code2, Globe, Lock, Palette } from "lucide-react";

const projects = [
    {
        title: "Peerlend",
        category: "P2P Lending Platform",
        description: "A secure, decentralized peer-to-peer lending ecosystem engineered with automated validation logic and institutional-grade security protocols.",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        icon: <Shield size={20} className="text-accent" />,
        size: "large",
        image: "/peerlend-themed.png",
        githubUrl: "https://github.com/charliestings/Demoshiri/tree/main/peerlend",
        liveUrl: "https://cyberlend.vercel.app/"
    },
    {
        title: "Zen HRM",
        category: "Enterprise HRMS",
        description: "A comprehensive human resource management system featuring automated payroll, real-time attendance tracking, and performance analytics.",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        icon: <Cpu size={20} className="text-accent" />,
        size: "small",
        image: "/zen-hrm-themed.png",
        githubUrl: "https://github.com/ShriVaishnavi-10/hrms",
        liveUrl: "https://hrms-shri.vercel.app/"
    },
    {
        title: "Momentum-todo",
        category: "Productivity App",
        description: "It is a productivity application that helps users stay organized and focused.",
        tags: ["Next.js 15", "Tailwind css", "Framer motion", "Supabase","NextAuth"],
        icon: <Palette size={20} className="text-accent" />,
        size: "small",
        image: "/momentum-themed.png",
        githubUrl: "https://github.com/ShriVaishnavi-10/todo-app",
        liveUrl: "https://momentum-todo.vercel.app/"
   },
    {
        title: "Aura - DesignAgency",
        category: "UI/UX",
        description: "It is a design agency website with a modern and creative design.",
        tags: ["Next.js","Tailwind CSS","TypeScript"],
        icon: <Globe size={20} className="text-accent" />,
        size: "small",
        image: "/aura-themed.png",
        githubUrl: "https://github.com/ShriVaishnavi-10/designagency",
        liveUrl: "https://designagency-shri.vercel.app/"
    },
      {
        title: "Shri Vaishnavi - Portfolio",
        category: "Portfolio",
        description: "My portfolio website showcasing my work and skills.",
        tags: ["Next.js","Tailwind CSS","TypeScript"],
        icon: <Globe size={20} className="text-accent" />,
        size: "small",
        image: "/portfolio-themed.png",
        githubUrl: "https://github.com/ShriVaishnavi-10/portfolio",
        liveUrl: "https://shrivaishnavi-b-portfolio.vercel.app/"
    },


];

export default function ProjectShowcase() {
    return (
        <section id="work" className="py-12 px-6 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
            
            <div className="executive-container">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="title-primary text-foreground">
                            My <span className="italic-serif text-accent">Works</span>.
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex group relative h-full"
                        >
                            <div className="aura-glass p-6 md:p-8 lg:p-10 w-full flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-700 border-white/5 hover:border-accent/30 rounded-[2.5rem]">
                                <div>
                                    <div className="flex justify-between items-start mb-12 md:mb-16">
                                        <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                            {project.icon}
                                        </div>
                                        <div className="flex gap-4">
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-4 rounded-full border border-white/5 hover:bg-white/5 transition-colors text-foreground/40 hover:text-foreground"
                                            >
                                                <Github className="text-[#D4AF37]" size={14} />
                                            </a>
                                            <a 
                                                href={project.liveUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-4 rounded-full border border-white/5 hover:bg-accent text-foreground hover:text-background transition-all duration-500"
                                            >
                                                <ArrowUpRight className="text-[#D4AF37]" size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-left">
                                        <span className="text-accent/40 text-[9px] font-bold uppercase tracking-[0.2em]">{project.category}</span>
                                        <h3 className="text-3xl font-playfair tracking-tight text-foreground">{project.title}</h3>
                                        <p className="text-muted text-base font-light leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-16 space-y-10">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-accent/10 bg-accent/[0.03] text-accent/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`mt-auto aspect-video rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 flex items-center justify-center overflow-hidden relative group/img`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {typeof project.image === 'string' ? (
                                                <Image 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover opacity-60 group-hover/img:opacity-100 transition-opacity duration-1000"
                                                />
                                            ) : (
                                                <div className="opacity-20">
                                                    {project.image}
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
