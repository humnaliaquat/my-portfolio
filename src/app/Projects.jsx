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
      live: null,
      github: "https://github.com/humnaliaquat/desk-setup-store",
      image: "/projects/deskio.png",
    },
    {
      id: "2",
      name: "PlanOra",
      para: "A task and project management app to organize and prioritize your daily tasks effectively.",
      live: "https://task-project-manager-nu.vercel.app/",
      github: "https://github.com/humnaliaquat/task-project-manager",
      image: "/projects/planora.png",
    },
  ];

  // Container stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section id="projects" className="flex  flex-col px-4 sm:px-6">
      <div className="flex flex-col justify-start w-full max-w-[590px] mx-auto py-4 z-30 gap-8 mt-16">
        <motion.h1
          className="font-semibold text-2xl !text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {details.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              className="w-full rounded-lg overflow-hidden
bg-gradient-to-br from-white/12 to-white/5
backdrop-blur-xl border border-white/20
p-2 

transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden group rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 rounded-lg
group-hover:opacity-100 transition-opacity
flex items-center justify-center gap-3"
                >
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs rounded-lg
bg-white/10 !text-gray-200 font-medium tracking-wide"
                    >
                      Live
                    </a>
                  )}

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs rounded-lg
bg-white/10 !text-gray-200 font-medium tracking-wide"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 py-3 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <h2 className="!text-gray-200 text-[15px] font-semibold tracking-wide">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-3">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}

                    {item.live && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[13px] !text-gray-400 leading-relaxed line-clamp-2">
                  {item.para}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
