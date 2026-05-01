"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Globe, Mail, Linkedin, Github, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ExecutiveContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const validate = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", phone: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message cannot be empty";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
        setSubmitStatus("idle");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validate()) return;
        
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    // Add your Web3Forms Access Key here when deploying
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "dc114c47-832b-4105-9cbf-749bd0576d69",
                    ...formData,
                }),
            });

            const result = await response.json();
            
            if (result.success) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="py-16 md:py-20 px-6 bg-[#030303] relative overflow-hidden border-t border-accent/5">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]" />
            </div>

            <div className="executive-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12 sticky top-32"
                    >
                        <div className="space-y-6">
                            <span className="text-accent/40 text-[10px] font-bold uppercase tracking-[0.6em]">ESTABLISH CONNECTION</span>
                            <h2 className="title-primary text-foreground leading-[1.1]">
                                Let's get <br /> in <span className="italic-serif text-accent">touch</span>.
                            </h2>
                        </div>

                        <p className="text-muted text-lg font-light leading-relaxed max-w-md italic opacity-60">
                            Available for high-stakes digital collaborations and full stack system development.
                        </p>

                        <div className="flex gap-6">
                            {[
                                { icon: Github, link: "https://github.com/ShriVaishnavi-10" },
                                { icon: Linkedin, link: "https://www.linkedin.com/in/b-shri-vaishnavi" },
                                { icon: Mail, link: "mailto:shrivaishnavi.contact@gmail.com" }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    whileHover={{ y: -5, color: "#D4AF37" }}
                                    className="p-4 rounded-full border border-white/5 bg-white/[0.02] text-foreground/40 transition-colors hover:border-accent/30 hover:bg-accent/5"
                                >
                                    <item.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="aura-glass p-6 md:p-8 lg:p-12 rounded-[2rem] relative shadow-2xl shadow-black/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-foreground/60 text-xs font-bold uppercase tracking-wider ml-2">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`w-full bg-white/[0.03] border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/50 transition-colors`}
                                />
                                {errors.name && <p className="text-red-400 text-xs ml-2 mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-foreground/60 text-xs font-bold uppercase tracking-wider ml-2">Email ID</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className={`w-full bg-white/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/50 transition-colors`}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs ml-2 mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-foreground/60 text-xs font-bold uppercase tracking-wider ml-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className={`w-full bg-white/[0.03] border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/50 transition-colors`}
                                    />
                                    {errors.phone && <p className="text-red-400 text-xs ml-2 mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-foreground/60 text-xs font-bold uppercase tracking-wider ml-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    className={`w-full bg-white/[0.03] border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none`}
                                />
                                {errors.message && <p className="text-red-400 text-xs ml-2 mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-4 py-5 bg-foreground text-background rounded-xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all hover:bg-accent hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] duration-500 disabled:opacity-50 disabled:hover:bg-foreground disabled:hover:shadow-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Transmitting...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Send Transmission
                                    </>
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-3 text-sm">
                                    <CheckCircle2 size={18} />
                                    Your message has been transmitted successfully. I will be in touch soon.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3 text-sm">
                                    <AlertCircle size={18} />
                                    Transmission failed. Please check your connection or try again later.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>

                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="font-playfair text-[10px] uppercase tracking-[0.4em] text-foreground/20">
                        &copy; {new Date().getFullYear()} SHRI VAISHNAVI DEVELOPMENT. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </footer>
    );
}
