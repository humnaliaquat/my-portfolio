"use client";

import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Projects() {
  const details = [
    {
      id: "1",
      name: "Deskio",
      para: "An Ecommerce platform to buy desk accessories with seamless user experience.",
      live: "#",
      github: "https://github.com/humnaliaquat/desk-setup-store",
      tech: ["React", "Next.js", "Tailwind", "Node.js", "TypeScript"],
    },
    {
      id: "2",
      name: "PlanOra",
      para: "A task and project management app to organize and prioritize your daily tasks effectively.",
      live: "https://task-project-manager-nu.vercel.app/",
      github: "https://github.com/humnaliaquat/task-project-manager",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
    },
    {
      id: "3",
      name: "Personal Portfolio",
      para: "A personal portfolio website to showcase my projects, skills, and experience as a developer.",
      live: "#",
      github: "https://github.com/humnaliaquat/my-portfolio",
      tech: ["Next.js", "React", "Tailwind"],
    },
  ];

  // Motion variants
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 5 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <section id="projects" className="flex min-h-screen flex-col px-4 sm:px-6">
      <div className="flex flex-col justify-start w-full max-w-[557px] mx-auto py-4 z-20 gap-8 mt-20">
        <motion.h1
          className="font-semibold text-2xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
        >
          Projects
        </motion.h1>
        <div className="flex flex-col gap-6">
          {details.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="w-full p-6 flex flex-col justify-between gap-4 rounded-2xl 
                bg-gradient-to-br from-white/10 to-white/5
                backdrop-blur-xl border border-white/10 
                shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <h2 className="text-white  text-lg hover:text-blue-400 transition-colors duration-200">
                  {item.name}
                </h2>
                {item.live && (
                  <motion.a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 mt-2 sm:mt-0"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative group">
                      <FiExternalLink size={18} className="cursor-pointer" />
                      <span
                        className="absolute bottom-3 mb-2 left-1/2 -translate-x-1/2  z-40
               bg-white/20 text-white text-xs items-center flex justify-center rounded px-2 w-20 py-1 
               opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Live Demo
                      </span>
                    </div>
                  </motion.a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.para}
              </p>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-3">
                  {item.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      custom={i}
                      variants={badgeVariant}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="bg-white/20 text-gray-200 px-3 py-1 rounded-full text-xs font-medium 
                                  hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub button */}
                {item.github && (
                  <motion.a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:!text-blue-400 transition-colors duration-200 text-sm font-medium mt-2 sm:mt-0"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiGithub size={16} />
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
