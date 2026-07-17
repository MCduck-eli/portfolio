"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    feedback: string;
}

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xTopRow = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const xBottomRow = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const topRow: Testimonial[] = [
        {
            id: 1,
            name: "Michael T.",
            role: "Protosphere Innovations",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
            feedback:
                "Halikov brought our product concept to life in a way we never thought possible. The architectural execution was so detailed and robust.",
        },
        {
            id: 2,
            name: "David R.",
            role: "Apex Interactive",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
            feedback:
                "The level of scalability and backend responsiveness throughout the project was outstanding. Our platform performance increased significantly.",
        },
        {
            id: 3,
            name: "Amanda K.",
            role: "Medtech Visuals",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
            feedback:
                "Outstanding system engineering. Clean integration loops, automated test suites, and absolute precision in delivering business results.",
        },
    ];

    const bottomRow: Testimonial[] = [
        {
            id: 4,
            name: "Rachel M.",
            role: "Metaform Creations",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
            feedback:
                "His unique Next.js structure made our applications breathtakingly fast. Professionalism and performance built into every single layer.",
        },
        {
            id: 5,
            name: "James K.",
            role: "Innovate Labs",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
            feedback:
                "The automated pipelines and complex query optimizations perfectly resolved our database bottlenecks. Pure engineering excellence.",
        },
        {
            id: 6,
            name: "Sarah L.",
            role: "Vortex UI",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
            feedback:
                "Autonomous deployment workflows combined with modern frontend states. The transition layouts are smooth and flawless.",
        },
    ];

    return (
        <section
            ref={containerRef}
            id="testimonials"
            className="w-full rounded-4xl min-h-screen bg-black text-white flex flex-col items-center justify-center py-32 relative overflow-hidden z-20"
        >
            <motion.div
                initial={{ opacity: 0, x: 100, y: 50, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 25 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 40, damping: 12 }}
                className="absolute right-[8%] top-[5%] w-24 h-24 md:w-36 md:h-36 select-none pointer-events-none z-10"
            >
                <img
                    src="/love.png"
                    alt="3D Heart Sticker"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(239,68,68,0.3)]"
                />
            </motion.div>

            <div className="max-w-7xl w-full text-center relative z-20 flex flex-col items-center mb-16 px-4">
                <h2 className="text-5xl md:text-8xl font-sans font-[1000] tracking-tighter uppercase select-none bg-gradient-to-t from-zinc-500 to-white bg-clip-text text-transparent">
                    What Clients Are Saying
                </h2>
            </div>

            <div className="w-full flex flex-col gap-6 overflow-hidden pb-12">
                <motion.div
                    style={{ x: xTopRow }}
                    className="flex gap-6 w-max px-4"
                >
                    {topRow.map((item) => (
                        <div
                            key={item.id}
                            className="w-[350px] md:w-[460px] bg-zinc-900/30 border border-zinc-800/80 rounded-[2rem] p-6 md:p-8 backdrop-blur-md flex items-start gap-5 shadow-xl select-none"
                        >
                            <img
                                src={item.avatar}
                                alt={item.name}
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border border-zinc-700/50"
                            />
                            <div className="flex-1 flex flex-col">
                                <p className="text-zinc-300 font-medium text-xs md:text-sm leading-relaxed mb-4">
                                    "{item.feedback}"
                                </p>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">
                                    {item.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-extrabold mt-0.5">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    style={{ x: xBottomRow }}
                    className="flex gap-6 w-max px-4 self-end"
                >
                    {bottomRow.map((item) => (
                        <div
                            key={item.id}
                            className="w-[350px] md:w-[460px] bg-zinc-900/30 border border-zinc-800/80 rounded-[2rem] p-6 md:p-8 backdrop-blur-md flex items-start gap-5 shadow-xl select-none"
                        >
                            <img
                                src={item.avatar}
                                alt={item.name}
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border border-zinc-700/50"
                            />
                            <div className="flex-1 flex flex-col">
                                <p className="text-zinc-300 font-medium text-xs md:text-sm leading-relaxed mb-4">
                                    "{item.feedback}"
                                </p>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">
                                    {item.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-extrabold mt-0.5">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
