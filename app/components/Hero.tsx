"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="pt-52 pb-32">
            <div className="editorial-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-sm uppercase tracking-[0.3em] opacity-40 mb-8 block">
                    Web Developer
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] mb-12 italic">
                        Hii <br />
I am Shri Vaishnavi<span className="text-muted-foreground opacity-20">.</span>
                    </h1>

                    <div className="max-w-2xl mt-16 border-l border-border pl-12 space-y-8">
                        <p className="text-xl md:text-2xl leading-relaxed opacity-80 serif">
                            I specialize in building sophisticated digital systems where
                            performance meets elegance. My work bridges the gap between
                            complex financial logic and seamless user experience.
                        </p>
                        <div className="flex gap-8">
                            <a href="#work" className="text-sm uppercase tracking-widest font-bold border-b-2 border-primary pb-1">
                                View Portfolio
                            </a>
                            <a href="mailto:hello@shrivaishnavi.dev" className="text-sm uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity">
                                Get in touch
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
