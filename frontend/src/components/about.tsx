"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    const text =
        "I am a Full-Stack Developer specializing in Next.js, NestJS, and high-performance TypeScript applications. Having a proven track record on global freelance platforms like Upwork, I thrive on autonomous execution and end-to-end accountability. By actively leveraging next-gen AI environments like Cursor, I accelerate development cycles and deliver production-grade, rock-solid code.";

    return (
        <section
            id="about"
            className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 md:px-12 relative overflow-hidden py-20"
        >
            <motion.div
                initial={{ opacity: 0, x: -150, rotate: -35, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, rotate: -15, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 60, damping: 14 }}
                className="absolute left-[-4%] top-[5%] w-48 h-48 md:w-80 md:h-80 select-none pointer-events-none z-10"
            >
                <img
                    src="/siluet.png"
                    alt="3D Metallic Splash"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(255,255,255,0.1)]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 150, rotate: 35, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, rotate: 25, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 65, damping: 15 }}
                className="absolute right-[-4%] top-[8%] w-44 h-44 md:w-72 md:h-72 select-none pointer-events-none z-10"
            >
                <img
                    src="/flower.png"
                    alt="3D Blue Cube"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(59,130,246,0.2)]"
                />
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    x: -150,
                    y: 50,
                    rotate: -25,
                    scale: 0.7,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: -5, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 50, damping: 16 }}
                className="absolute left-[-2%] bottom-[10%] w-48 h-48 md:w-80 md:h-80 select-none pointer-events-none z-10"
            >
                <img
                    src="/love.png"
                    alt="3D Red Heart"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(239,68,68,0.25)]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 160, y: 50, rotate: 45, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 12, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 55, damping: 13 }}
                className="absolute right-[-3%] bottom-[12%] w-48 h-48 md:w-80 md:h-80 select-none pointer-events-none z-10"
            >
                <img
                    src="/blueCub.png"
                    alt="3D Purple Flower"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(168,85,247,0.3)]"
                />
            </motion.div>

            <div className="max-w-3xl w-full text-center relative z-20 flex flex-col items-center -mt-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-8xl font-sans font-[1000] tracking-tighter uppercase mb-12 select-none bg-gradient-to-t from-zinc-500 to-white bg-clip-text text-transparent"
                >
                    About Me
                </motion.h2>

                <div className="w-full max-w-2xl bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 mb-10 backdrop-blur-md text-left font-mono shadow-2xl relative group">
                    <div className="flex gap-1.5 absolute top-4 left-4 select-none">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>

                    <div className="mt-4 text-xs md:text-sm leading-relaxed text-zinc-300">
                        <span className="text-purple-400 select-none">
                            halikov-dev
                        </span>
                        <span className="text-zinc-500 select-none">:</span>
                        <span className="text-blue-400 select-none">~</span>
                        <span className="text-zinc-400 select-none">
                            $
                        </span>{" "}
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1 }}
                        >
                            {text.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.01,
                                        delay: index * 0.008,
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                // @ts-ignore
                                ease: "steps(2)",
                            }}
                            className="inline-block w-2 h-4 bg-purple-400 ml-1 align-middle select-none"
                        />
                    </div>
                </div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold uppercase tracking-wider rounded-full group bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white focus:ring-4 focus:outline-none focus:ring-purple-800 transition-all duration-300 transform hover:scale-105"
                >
                    <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-black rounded-full group-hover:bg-opacity-0">
                        Contact Me
                    </span>
                </motion.button>
            </div>
        </section>
    );
}
