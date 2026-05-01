"use client";

import { motion } from "framer-motion";

export default function FinalContact() {
    return (
        <footer id="contact" className="py-40 px-6">
            <div className="centered-container space-y-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-gradient">
                        LET&apos;S DEFINE <br /> THE FUTURE.
                    </h2>

                    <div className="flex flex-col items-center gap-12">
                        <a
                            href="mailto:contact@shrivaishnavi.dev"
                            className="text-2xl md:text-5xl font-bold border-b-2 border-brand-primary pb-4 tracking-tighter hover:opacity-70 transition-opacity"
                        >
                            contact@shrivaishnavi.dev
                        </a>

                        <div className="flex gap-12 text-[10px] uppercase font-bold tracking-[0.4em] opacity-30">
                            <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-brand-primary transition-colors">GitHub</a>
                            <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a>
                        </div>
                    </div>
                </motion.div>

                <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-20 text-[9px] uppercase font-bold tracking-[0.5em]">
                    <span>© 2026 Shrivaishnavi Architect</span>
                    <span>Symmetrical Excellence</span>
                </div>
            </div>
        </footer>
    );
}
