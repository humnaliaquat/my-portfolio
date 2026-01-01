"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { ChevronRight } from "lucide-react";

export default function TechStack() {
  const tools = [
    { name: "React JS", icon: FaReact, link: "https://reactjs.org/" },
    { name: "MongoDB", icon: SiMongodb, link: "https://www.mongodb.com/" },
    { name: "Node JS", icon: FaNodeJs, link: "https://nodejs.org/" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      link: "https://www.typescriptlang.org/",
    },
    { name: "Next JS", icon: SiNextdotjs, link: "https://nextjs.org/" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      link: "https://tailwindcss.com/",
    },
  ];

  return (
    <section id="tech-stack" className="flex  flex-col">
      <div className="flex flex-col justify-start  w-full sm:w-[600px] px-6 py-4 mx-auto z-20 gap-8 mt-20">
        <h1 className="font-semibold text-2xl text-white">Tech Stack</h1>
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-6 w-full
                  bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl border border-white/10 rounded-xl 
                           shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} className="text-white" />
                  <span className="text-white font-medium">{tool.name}</span>
                </div>

                {/* Animated right arrow */}
                <span className="text-white rounded-full  bg-black/10 opacity-0 -translate-x-5 group-hover:opacity-100 px-1 text-xs py-1 font-bold group-hover:translate-x-0 transition-all duration-300">
                  <ChevronRight className="h-4.5 w-4.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
