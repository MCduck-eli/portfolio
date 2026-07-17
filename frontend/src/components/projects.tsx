"use client";

import React from "react";

interface Project {
    id: string;
    client: string;
    imageBig: string;
    imageSmall1: string;
    imageSmall2: string;
}

export default function Projects() {
    const projectsList: Project[] = [
        {
            id: "01",
            client: "Quantum Lab",
            imageBig:
                "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
            imageSmall1:
                "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&auto=format&fit=crop&q=80",
            imageSmall2:
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&auto=format&fit=crop&q=80",
        },
        {
            id: "02",
            client: "Pixel Forge",
            imageBig:
                "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&auto=format&fit=crop&q=80",
            imageSmall1:
                "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&auto=format&fit=crop&q=80",
            imageSmall2:
                "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&auto=format&fit=crop&q=80",
        },
        {
            id: "03",
            client: "Nexus Studio",
            imageBig:
                "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80",
            imageSmall1:
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80",
            imageSmall2:
                "https://images.unsplash.com/photo-1618005154340-43ac884a7e11?w=400&auto=format&fit=crop&q=80",
        },
        {
            id: "04",
            client: "Vortex UI",
            imageBig:
                "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=800&auto=format&fit=crop&q=80",
            imageSmall1:
                "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop&q=80",
            imageSmall2:
                "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&auto=format&fit=crop&q=80",
        },
        {
            id: "05",
            client: "Apex Engine",
            imageBig:
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80",
            imageSmall1:
                "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&auto=format&fit=crop&q=80",
            imageSmall2:
                "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=400&auto=format&fit=crop&q=80",
        },
    ];

    return (
        <section
            id="projects"
            className="sticky top-0 w-full bg-black text-white px-4 md:px-12 py-32 flex flex-col items-center z-10"
        >
            <div className="max-w-5xl w-full flex flex-col gap-16 pb-[30vh]">
                {projectsList.map((project, index) => (
                    <div
                        key={project.id}
                        className="sticky w-full bg-black border border-zinc-800 rounded-[2.5rem] p-6 md:p-8 flex flex-col gap-6 shadow-[0_-20px_50px_rgba(0,0,0,0.9)]"
                        style={{
                            top: `calc(40px + ${index * 60}px)`,
                            height: "auto",
                            minHeight: "540px",
                        }}
                    >
                        <div className="w-full flex items-center justify-between border-b border-zinc-800/60 pb-6">
                            <div className="flex items-center gap-6">
                                <span className="text-5xl md:text-6xl font-sans font-[1000] tracking-tighter text-white">
                                    {project.id}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-widest text-zinc-400 font-extrabold">
                                        Client
                                    </span>
                                    <span className="text-sm md:text-base font-sans font-medium text-zinc-300">
                                        {project.client}
                                    </span>
                                </div>
                            </div>

                            <button className="px-6 py-2.5 rounded-full border border-zinc-700 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                Live Project
                            </button>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                            <div className="md:col-span-2 rounded-3xl overflow-hidden h-64 md:h-96">
                                <img
                                    src={project.imageBig}
                                    alt="Project Big Preview"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="grid grid-rows-2 gap-4 h-64 md:h-96">
                                <div className="rounded-3xl overflow-hidden h-full">
                                    <img
                                        src={project.imageSmall1}
                                        alt="Project Small Preview 1"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-3xl overflow-hidden h-full">
                                    <img
                                        src={project.imageSmall2}
                                        alt="Project Small Preview 2"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
