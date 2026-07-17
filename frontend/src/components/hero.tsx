"use client";

import React from "react";
import { useMotionValue } from "framer-motion";
import Avatar from "./shared/avatar";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const x = event.clientX - rect.left - width / 2;
        const y = event.clientY - rect.top - height / 2;
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full min-h-screen  text-white flex flex-col items-center px-4 md:px-12 pt-12 pb-8 justify-between overflow-hidden"
        >
            <div className="w-full max-w-7xl flex justify-between items-center text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase select-none">
                <a href="#about" className="hover:text-white transition-colors">
                    ABOUT
                </a>
                <a
                    href="#customers"
                    className="hover:text-white transition-colors"
                >
                    CUSTOMERS
                </a>
                <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                >
                    PROJECTS
                </a>
                <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                >
                    CONTACT
                </a>
            </div>

            <div className="max-w-7xl w-full text-center flex flex-col items-center mt-2 flex-1 justify-center">
                <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-sans font-[1000] tracking-tighter uppercase mb-6 select-none w-full bg-gradient-to-t from-zinc-800 via-gray-200 to-white bg-clip-text text-transparent leading-none">
                    HI, I'M HALIKOV
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mt-6 gap-8 md:gap-24">
                    <div className="flex-1 flex justify-start md:justify-end">
                        <p className="text-gray-400 text-center md:text-right max-w-xs text-sm md:text-base font-medium uppercase tracking-wider leading-relaxed">
                            A Full-Stack Web Developer passionate about crafting
                            bold and memorable digital products 🚀
                        </p>
                    </div>

                    <div className="flex-shrink-0 flex justify-center">
                        <Avatar mouseX={mouseX} mouseY={mouseY} />
                    </div>

                    <div className="flex-1 flex justify-center md:justify-start">
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold uppercase tracking-wider rounded-full group bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 group-hover:from-purple-600 group-hover:to-pink-500 text-white focus:ring-4 focus:outline-none focus:ring-purple-800 transition-all duration-300 transform hover:scale-105">
                            <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-black rounded-full group-hover:bg-opacity-0">
                                Contact Me
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden md:block h-8"></div>
        </section>
    );
}
