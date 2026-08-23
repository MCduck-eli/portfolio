"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);
        setLoading(true);

        const content = phone ? `${message}\n\nPhone: ${phone}` : message;

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    content: content || "No message content",
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "An error occurred while sending message");
            }

            setStatus({ type: "success", text: "Your message has been sent successfully!" });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setTimeout(() => setStatus(null), 5000);
        } catch (err: any) {
            setStatus({ type: "error", text: err.message || "An error occurred while sending message" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="w-full min-h-screen bg-[#F0F0F0] text-black flex flex-col justify-center px-6 md:px-16 py-24 relative overflow-hidden z-30"
            style={{ borderRadius: "32px 32px 0 0" }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    x: -100,
                    y: 100,
                    rotate: -30,
                    scale: 0.6,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                    type: "spring",
                    stiffness: 45,
                    damping: 12,
                    delay: 0.1,
                }}
                className="absolute left-[-4%] bottom-[5%] w-36 h-36 md:w-64 md:h-64 select-none pointer-events-none z-10"
            >
                <img
                    src="/purple-sticker.png"
                    alt="3D Purple Balloon Flower Sticker"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(168,85,247,0.2)]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100, y: -80, rotate: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 10, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 50, damping: 13 }}
                className="absolute right-[-2%] top-[10%] w-40 h-40 md:w-72 md:h-72 select-none pointer-events-none z-10"
            >
                <img
                    src="/abstract-flower.png"
                    alt="3D Golden Lightning Sticker"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(234,179,8,0.25)]"
                />
            </motion.div>

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-20">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-[1000] tracking-tighter uppercase leading-[0.9] mb-8 text-[#111111]">
                            LET'S GET <br /> IN TOUCH
                        </h2>
                    </div>
                    <div className="mt-8 lg:mt-24">
                        <a
                            href="mailto:eldorabdukhalikov74@gmail.com"
                            className="text-xl md:text-2xl font-sans font-black tracking-tight border-b-2 border-black pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors duration-300"
                        >
                            eldorabdukhalikov74@gmail.com
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                    <div className="w-full flex flex-col gap-2">
                        <input
                            type="text"
                            placeholder="Full Name *"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent border-b border-black/20 py-4 text-base font-medium placeholder-zinc-400 focus:outline-none focus:border-black transition-colors duration-300 font-sans"
                        />
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Email *"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent border-b border-black/20 py-4 text-base font-medium placeholder-zinc-400 focus:outline-none focus:border-black transition-colors duration-300 font-sans"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <input
                                type="tel"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-transparent border-b border-black/20 py-4 text-base font-medium placeholder-zinc-400 focus:outline-none focus:border-black transition-colors duration-300 font-sans"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <textarea
                            placeholder="Message"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-transparent border-b border-black/20 py-4 text-base font-medium placeholder-zinc-400 focus:outline-none focus:border-black transition-colors duration-300 resize-none font-sans"
                        />
                    </div>

                    {status && (
                        <div
                            className={`p-3 rounded-xl text-xs font-medium ${
                                status.type === "success"
                                    ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                                    : "bg-red-500/10 text-red-700 border border-red-500/20"
                            }`}
                        >
                            {status.text}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 py-4 rounded-full border border-black/80 text-sm font-bold uppercase tracking-widest bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 font-sans disabled:opacity-50"
                    >
                        {loading ? "SENDING..." : "SEND"}
                    </button>
                </form>
            </div>
        </section>
    );
}
