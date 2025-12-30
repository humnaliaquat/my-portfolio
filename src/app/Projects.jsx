"use client";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const details = [
    {
      id: "1",
      name: "Project 1",
      para: "If you want, I can write a ready-to-use prompt for an AI tool that guarantees a professional, portfolio-ready headshot for you.",
      live: "#",
      github: "#",
      tech: ["React", "Next.js", "Tailwind"],
    },
    {
      id: "2",
      name: "Project 2",
      para: "A sleek modern web application design with interactive components and responsive layout.",
      live: "#",
      github: "#",
      tech: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: "3",
      name: "Project 3",
      para: "An AI-based tool for portfolio-ready image generation with smooth UX and clean design.",
      live: "#",
      github: "#",
      tech: ["Python", "Flask", "OpenAI API"],
    },
  ];

  return (
    <section id="projects" className="flex min-h-screen flex-col">
      <div className="flex flex-col justify-start w-[600px] px-6 py-4 mx-auto z-20 gap-8 mt-20">
        <h1 className="font-semibold text-2xl text-white">Projects</h1>
        <div className="flex flex-col gap-6">
          {details.map((item) => (
            <div
              key={item.id}
              className="w-full p-6 flex flex-col justify-between gap-4 rounded-2xl 
                            bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl border border-white/10 
                         shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-white font-bold text-lg hover:text-blue-400 transition-colors duration-200">
                  {item.name}
                </h2>
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 ml-2"
                  >
                    <FiExternalLink size={18} title="Live Demo" />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.para}
              </p>

              {/* Footer */}
              <div className="flex flex-wrap justify-between items-center mt-3 gap-2">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-3">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/20 text-gray-200 px-3 py-1 rounded-full text-xs font-medium 
                                  hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub button */}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:!text-blue-400 transition-colors duration-200 text-sm font-medium"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
