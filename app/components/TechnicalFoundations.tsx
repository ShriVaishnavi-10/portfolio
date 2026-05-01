"use client";

import { motion } from "framer-motion";
import { 
    SiHtml5, SiCss, SiJavascript, SiPhp, SiPython, SiJson,
    SiReact, SiNextdotjs, SiTailwindcss,
    SiMongodb, SiSupabase,
    SiGit, SiGithub
} from "react-icons/si";
import { Keyboard, Network, Code2 } from "lucide-react";

export default function TechnicalFoundations() {
    const stackCategories = [
        {
            title: "Languages",
            skills: [
                { name: "HTML5", icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
                { name: "CSS3", icon: SiCss, color: "group-hover:text-[#1572B6]" },
                { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
                { name: "PHP", icon: SiPhp, color: "group-hover:text-[#777BB4]" },
                { name: "Python", icon: SiPython, color: "group-hover:text-[#3776AB]" },
                { name: "JSON", icon: SiJson, color: "group-hover:text-foreground" },
            ]
        },
        {
            title: "Frameworks / Libraries",
            skills: [
                { name: "React.js", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
                { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-foreground" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
            ]
        },
        {
            title: "Database & Backend",
            skills: [
                { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-[#47A248]" },
                { name: "REST API Basics", icon: Network, color: "group-hover:text-accent" },
                { name: "Supabase", icon: SiSupabase, color: "group-hover:text-[#3ECF8E]" },
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]" },
                { name: "GitHub", icon: SiGithub, color: "group-hover:text-foreground" },
                { name: "VS Code", icon: Code2, color: "group-hover:text-[#007ACC]" },
            ]
        },
        {
            title: "Additional Skills",
            skills: [
                { name: "Typewriting – Tamil (Jr & Sr)", icon: Keyboard, color: "group-hover:text-accent" },
                { name: "Typewriting – English (Jr & Sr)", icon: Keyboard, color: "group-hover:text-accent" },
            ]
        }
    ];

    return (
        <section id="about" className="py-12 px-6 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
            
            <div className="executive-container">
                <div className="text-center mb-12 space-y-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="title-primary text-foreground">
                            Technical <span className="italic-serif text-accent">Stack</span>.
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col space-y-1 md:space-y-2">
                    {stackCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start border-b border-white/[0.02] pb-2 md:pb-3 last:border-0 last:pb-0"
                        >
                            <div className="md:col-span-4 lg:col-span-3">
                                <h3 className="text-2xl font-playfair tracking-wide text-foreground">
                                    {category.title}
                                </h3>
                                <div className="h-1 w-12 bg-accent/20 mt-4 rounded-full" />
                            </div>
                            
                            <div className="md:col-span-8 lg:col-span-9 flex flex-wrap gap-4">
                                {category.skills.map((skill) => (
                                    <div 
                                        key={skill.name}
                                        className="aura-glass px-4 py-3 rounded-2xl flex items-center space-x-3 group transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] border border-white/5 hover:border-accent/40 shadow-md shadow-black/20"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:scale-105 group-hover:bg-accent/10 transition-all duration-500">
                                            <skill.icon className={`text-accent/60 transition-colors duration-500 ${skill.color}`} size={20} />
                                        </div>
                                        <span className="text-sm md:text-base font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-500">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
