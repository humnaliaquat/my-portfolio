"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutSection() {
  const skills = [
    { title: "Frontend", desc: "Responsive layouts, animations, modern UI" },
    { title: "Backend", desc: "APIs, scalable logic, clean architecture" },
  ];

  return (
    <section id="about" className="flex flex-col w-full">
      <div className="flex flex-col w-full max-w-[600px] px-6 py-4 mx-auto gap-10 mt-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-2xl font-semibold text-gray-200"
        >
          About Me
        </motion.h1>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* Intro */}
          <p className="text-gray-200 text-sm font-medium leading-relaxed">
            Hey, I’m <span className="text-blue-400 font-semibold">Hamna</span>,
            a full-stack developer who loves building clean, modern interfaces
            with smooth animations and intuitive interactions.
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            I focus on creating user-friendly experiences backed by clean,
            maintainable code. I’ve worked on projects from responsive web apps
            to full-stack solutions using React, Next.js, Node.js, and MongoDB.
            Outside of coding, I enjoy exploring UI/UX trends and experimenting
            with ways to make applications faster and more engaging.
          </p>

          {/* Education */}
          <div className="mt-4">
            <h2 className="text-lg font-medium text-gray-200 mb-2">
              Education
            </h2>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-sm text-gray-400 border-b border-white/10 pb-1">
                <p>BS in Computer Science</p>
                <p>2021–Current</p>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <p>ICS</p>
                <p>2018–2020</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-4">
            <h2 className="text-lg font-medium text-gray-200 mb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10"
                >
                  <h3 className="text-sm font-medium text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 justify-center">
            <hr className="flex-grow border-t border-white/10" />
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border px-3 py-2 rounded-full text-blue-400 border-white/20 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border px-3 py-2 rounded-full text-gray-200 border-white/20 hover:bg-gray-700/20 hover:text-white hover:border-gray-400 hover:scale-110 transition-transform duration-200"
            >
              <FaGithub size={18} />
            </a>
            <hr className="flex-grow border-t border-white/10" />
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6  flex flex-col items-center gap-1"
          >
            <p className="text-gray-400 text-sm italic text-center">
              crafted with <span className="text-red-400">❤️</span> by Hamna
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
