"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
}

export default function Services() {
    const servicesList: ServiceItem[] = [
        {
            id: "01",
            title: "FRONT-END DEVELOPMENT",
            description:
                "Crafting fully interactive, pixel-perfect user interfaces using Next.js, TypeScript, and Framer Motion for bold and fluid digital experiences.",
        },
        {
            id: "02",
            title: "BACK-END ARCHITECTURE",
            description:
                "Building robust, secure, and production-grade REST/GraphQL APIs with NestJS, PostgreSQL, and scalable microservices.",
        },
        {
            id: "03",
            title: "AI INTEGRATION",
            description:
                "Supercharging software applications by implementing modern AI LLM environments, vector databases, and efficient automation pipelines.",
        },
    ];

    return (
        <section
            id="services"
            className="w-full min-h-screen bg-[#F0F0F0] text-black flex flex-col items-center justify-start px-6 md:px-12 py-24 relative z-30"
            style={{ borderRadius: "32px 32px 0 0" }}
        >
            <div className="max-w-6xl w-full flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-[1000] tracking-tighter uppercase mb-20 select-none text-[#111111]"
                >
                    SERVICES
                </motion.h2>

                <div className="w-full flex flex-col border-t border-black/10">
                    {servicesList.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 14,
                            }}
                            className="w-full flex flex-col md:flex-row items-start justify-start py-10 border-b border-black/10 group cursor-pointer transition-colors duration-300 hover:bg-black/[0.02] px-4 rounded-xl"
                        >
                            <div className="text-4xl md:text-5xl font-sans font-[1000] tracking-tighter text-black/20 group-hover:text-black transition-colors duration-300 w-24 select-none mb-4 md:mb-0">
                                {service.id}
                            </div>

                            <div className="flex-1 flex flex-col md:pl-8">
                                <h3 className="text-xl md:text-2xl font-sans font-[1000] tracking-tight text-black mb-3 group-hover:translate-x-2 transition-transform duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed max-w-3xl">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
