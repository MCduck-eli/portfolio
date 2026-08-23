"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_PROJECTS_QUERY } from "@/src/graphql/project";

interface Project {
    id: string;
    client: string;
    imageBig: string;
    imageSmall1: string;
    imageSmall2: string;
    liveUrl: string;
}

interface ProjectsData {
    getProjects: Project[];
}

export default function Projects() {
    const { data } = useQuery<ProjectsData>(GET_PROJECTS_QUERY);
    const projectsList: Project[] = data?.getProjects || [];

    return (
        <section
            id="projects"
            className="w-full bg-black text-white px-4 md:px-12 py-32 flex flex-col items-center relative z-10"
        >
            <div className="max-w-5xl w-full flex flex-col items-center gap-20">
                <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-[1000] tracking-tighter uppercase select-none bg-gradient-to-t from-zinc-600 to-white bg-clip-text text-transparent">
                    PROJECTS
                </h2>

                <div className="w-full flex flex-col gap-24 pb-[20vh]">
                    {projectsList.map((project, index) => (
                        <div
                            key={project.id}
                            className="sticky w-full bg-black border border-zinc-800 rounded-[2.5rem] p-6 md:p-8 flex flex-col gap-6 shadow-[0_-30px_60px_rgba(0,0,0,0.85)]"
                            style={{
                                top: `calc(100px + ${index * 45}px)`,
                                height: "auto",
                                minHeight: "540px",
                            }}
                        >
                            <div className="w-full flex items-center justify-between border-b border-zinc-800/60 pb-6">
                                <div className="flex items-center gap-6">
                                    <span className="text-5xl md:text-6xl font-sans font-[1000] tracking-tighter text-white">
                                        {String(index + 1).padStart(2, "0")}
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
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-full border border-zinc-700 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Live Project
                                </a>
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
            </div>
        </section>
    );
}
