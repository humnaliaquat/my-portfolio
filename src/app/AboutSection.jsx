"use client";

import React from "react";
import { motion } from "framer-motion";
import { Corinthia } from "next/font/google";
import Link from "next/link";

const corinthia = Corinthia({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-corinthia",
});

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skills = [
    { title: "Frontend", desc: "Responsive layouts, smooth UI & animations" },
    { title: "Backend", desc: "APIs, scalable logic & database management" },
  ];

  const education = [
    {
      title: "BS in Computer Science",
      school: "Virtual University of Pakistan",
      date: "2021 — Present",
    },
    { title: "ICS", school: "GCWT", date: "2018 — 2020" },
  ];

  return (
    <section
      id="about"
      className="flex flex-col w-full px-4 sm:px-6 overflow-y-hidden"
    >
      <div className="flex flex-col justify-start w-full max-w-[590px] mx-auto py-4 gap-8 mt-16">
        {/* Title */}{" "}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-2xl font-semibold !text-gray-200"
        >
          {" "}
          About Me{" "}
        </motion.h1>{" "}
        {/* Main Card */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {" "}
          {/* Intro */}{" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="!text-gray-300 text-sm font-medium leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              {" "}
              Hi! I am Hamna, and am a creative{" "}
              <span className="pl-1 !text-emerald-400">
                {" "}
                Full-Stack Developer{" "}
              </span>{" "}
              with an interest in designing interesting web interfaces.{" "}
            </motion.div>
            <motion.p
              className="!text-gray-300 text-sm leading-relaxed mt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              {" "}
              Meanwhile, I am currently finishing my BS degree in Computer
              Science and focus on the{" "}
              <span className="!text-emerald-400">MERN stack and Next.js</span>.
              As someone passionate about code, I enjoy watching ideas become
              reality with elegant code and{" "}
              <span className="!text-emerald-400">
                {" "}
                simple yet effective designs{" "}
              </span>{" "}
              . In my free time, I am a music appreciator and enjoy sketching
              cute doodles and reading books.
              <br /> Always happy to{" "}
              <Link
                href={"https://www.linkedin.com/in/hamna-liaquat-9b51a2275/"}
                target="blank"
                className="!text-emerald-400 hover:underline"
              >
                {" "}
                connect{" "}
              </Link>{" "}
              with fellow developers and creatives. Reach out for projects or
              tech chats.{" "}
            </motion.p>{" "}
          </motion.div>
        </motion.div>
        {/* Education */}
        <div>
          <motion.h2
            className="text-xl  font-semibold !text-gray-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education:
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {[
              {
                title: "BS in Computer Science",
                school: "Virtual University of Pakistan",
                date: "2021 — Present",
              },
              {
                title: "ICS",
                school: "Government College for Women",
                date: "2018 — 2020",
              },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg
        bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-xl border border-white/20
        transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-1 w-full sm:w-auto">
                  <p className="!text-gray-200 font-medium">{edu.title}</p>
                  <p className="!text-gray-400 text-sm italic">{edu.school}</p>
                </div>
                <p className="!text-gray-400 text-sm mt-2 sm:mt-0">
                  {edu.date}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-xl font-semibold !text-gray-200 mb-4 mt-10"
              variants={itemVariants}
            >
              Skills:
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={{ itemVariants }}
                  className=" bg-gradient-to-br from-white/6 to-white/2
          backdrop-blur-xl  border border-white/20 rounded-lg px-4 py-3 !text-gray-200 text-sm font-medium transition-all duration-300 cursor-default"
                  title={skill.desc}
                >
                  <p className="font-semibold">{skill.title}</p>
                  <p className="text-xs !text-gray-400 mt-1 line-clamp-2">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
