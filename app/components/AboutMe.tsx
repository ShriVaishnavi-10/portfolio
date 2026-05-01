"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Cpu, Shield, Globe } from "lucide-react";

export default function AboutMe() {
    return (
        <section id="about" className="py-12 px-6 relative overflow-hidden bg-background">
            <div className="executive-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20 space-y-8"
                >
                    <h2 className="title-primary text-foreground leading-none">
                        About <span className="italic-serif">Me</span>.
                    </h2>
                    
                    <div className="relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-accent/30" />
                        <p className="text-muted text-[clamp(1rem,1.2vw,1.2rem)] leading-[1.8] font-light pt-8 text-left sm:text-center px-4">
                            <span className="text-foreground font-playfair italic text-2xl block mb-4 text-center">Hi, I am Shri Vaishnavi.</span>
                            I am a highly motivated <span className="text-foreground font-medium">Full Stack Developer</span> and MCA postgraduate specializing in building high-performance, responsive web applications. With a strong foundation in modern frameworks like <span className="text-accent font-medium">Next.js</span> and <span className="text-accent font-medium">React</span>, coupled with robust backend expertise, I engineer seamless digital experiences from concept to deployment. I thrive on solving complex technical challenges, writing clean code, and pushing the boundaries of interactive web design.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    {/* Left Column: Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="flex"
                    >
                        <div className="aura-glass p-4 rounded-[3rem] border-white/5 bg-white/[0.01] w-full flex flex-col">
                            <div className="relative flex-1 min-h-[400px] lg:min-h-[500px] rounded-[2.8rem] overflow-hidden group bg-black">
                                <Image
                                    src="/my-photo.jpeg"
                                    alt="Shri Vaishnavi"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-top grayscale transition-all duration-1000 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-40" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Roadmap */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="flex"
                    >
                        <div className="aura-glass p-8 lg:p-12 rounded-[3rem] w-full flex flex-col justify-center">
                            <h3 className="text-3xl font-playfair italic opacity-10 uppercase tracking-tighter mb-12 text-center lg:text-left">Academic Roadmap</h3>

                            <div className="relative space-y-10">
                                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-accent/10" />

                                {[
                                    { title: "Secondary Education", sub: "Jayarani Girls HS School", date: "2012-2018" },
                                    { title: "Higher Secondary", sub: "Jayarani Girls HS School", date: "2018-2020" },
                                    { title: "BCA Undergraduate", sub: "GACW, Salem", date: "2020-2023" },
                                    { title: "MCA Postgraduate", sub: "Presidency College", date: "2024 - 2026" },
                                ].map((item, idx) => (
                                    <div key={idx} className="relative flex gap-6 md:gap-12 group">
                                        <div className="w-4 h-4 rounded-full bg-background border border-accent/30 flex items-center justify-center shrink-0 relative z-10 mt-1 md:mt-2 transition-colors group-hover:bg-accent duration-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-background" />
                                        </div>
                                        <div className="space-y-1 md:space-y-2 flex-1 min-w-0">
                                            <h4 className="font-playfair text-xl md:text-2xl font-medium tracking-tight text-foreground break-words">{item.title}</h4>
                                            <div className="flex flex-col sm:flex-row sm:items-center w-full gap-1 sm:gap-0 mt-1">
                                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-muted shrink-0 break-words leading-relaxed">{item.sub}</span>
                                                <div className="hidden sm:block flex-1 mx-4 h-[1px] bg-accent/10" />
                                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-accent/60 shrink-0">{item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
