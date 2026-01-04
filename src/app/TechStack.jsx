"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { ChevronRight } from "lucide-react";

export default function TechStack() {
  const tools = [
    { name: "React JS", icon: FaReact },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Node JS", icon: FaNodeJs },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    { name: "Next JS", icon: SiNextdotjs },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    { name: "GitHub", icon: FaGithub },
    { name: "Express JS", icon: SiExpress },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="tech-stack" className="flex  flex-col px-4 sm:px-6">
      <div className="flex flex-col justify-start  w-full max-w-[590px]  py-4 mx-auto z-20 gap-8 mt-16">
        <motion.h1
          className="font-semibold text-2xl !text-gray-200"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 w-full sm:grid-cols-2 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-6 w-full
                  bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl border border-white/10 rounded-lg
                           shadow-lg transition-shadow duration-300 "
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} className="text-white" />
                  <span className="!text-gray-200 font-medium">
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
