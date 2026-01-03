"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function AboutSection() {
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
  const skills = [
    { title: "Frontend", desc: "Responsive layouts, animations, modern UI" },
    { title: "Backend", desc: "APIs, scalable logic, clean architecture" },
  ];

  return (
    <section id="about" className="flex flex-col w-full px-4 sm:px-6">
      <div className="flex flex-col justify-start  w-full max-w-[557px]  py-4 mx-auto z-20 gap-8 mt-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } }, // 0.3s delay between children
            }}
          >
            <motion.p
              className="text-gray-200 text-sm font-medium leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              Hi! I am Hamna, and am a creative
              <span className="pl-1 !text-emerald-400">
                Full-Stack Developer
              </span>{" "}
              with an interest in designing interesting web interfaces.
            </motion.p>

            <motion.p
              className="text-gray-400 text-sm leading-relaxed mt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              Meanwhile, I am currently finishing my BS degree in Computer
              Science and focus on the{" "}
              <span className="!text-emerald-400">MERN stack and Next.js</span>.
              As someone passionate about code, I enjoy watching ideas become
              reality with elegant code and{" "}
              <span className="!text-emerald-400">
                simple yet effective designs
              </span>
              . In my free time, I am a music appreciator and enjoy sketching
              cute doodles and reading books.
              <br />
              Always happy to{" "}
              <Link
                href={"https://www.linkedin.com/in/hamna-liaquat-9b51a2275/"}
                target="blank"
                className="!text-emerald-400 hover:underline"
              >
                connect
              </Link>{" "}
              with fellow developers and creatives. Reach out for projects or
              tech chats.
            </motion.p>
          </motion.div>

          {/* Education */}
          <div className="mt-4">
            <motion.h2
              className="text-lg font-medium text-gray-200 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Education
            </motion.h2>
            <div className="flex flex-col gap-1">
              <motion.div
                className="flex justify-between text-sm text-gray-400 border-b border-white/10 pb-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p>BS in Computer Science</p>
                <p>2021–Current</p>
              </motion.div>
              <motion.div
                className="flex justify-between text-sm text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p>ICS</p>
                <p>2018–2020</p>
              </motion.div>
            </div>
          </div>
          {/* Skills */}
          <div className="mt-4">
            <motion.h2
              className="text-lg font-medium text-gray-200 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Skills
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
            >
              {skills.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-white/5
                backdrop-blur-xl border border-white/10 transition-colors hover:bg-white/10 "
                  variants={itemVariants}
                >
                  <h3 className="text-sm font-medium text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-4 mt-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", margin: "-20px" }}
          >
            <hr className="flex-grow border-t border-white/10" />
            <a
              href="https://www.linkedin.com/in/hamna-liaquat-9b51a2275/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border px-4 py-2 rounded text-blue-400 border-white/20 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/humnaliaquat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border px-4 py-2 rounded text-gray-200 border-white/20 hover:scale-110 hover:bg-blue-500/20 hover:border-blue-400 transition-transform duration-200"
            >
              <FaGithub size={18} />
            </a>
            <hr className="flex-grow border-t border-white/10" />
          </motion.div>
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
