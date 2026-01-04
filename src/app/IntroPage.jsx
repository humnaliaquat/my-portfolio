"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

import TextType from "../components/TextType";

const songs = [
  { title: "Night Drive", artist: "Vibes", id: "5E30LdtzQTGqRvNd7l6kG5" },
  { title: "Soft Echo", artist: "Chill", id: "3n3Ppam7vgaVa1iaRUc9Lp" },
  { title: "Midnight City", artist: "Dream", id: "7ouMYWpwJ422jRcDASZB7P" },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function IntroPage() {
  const [currentSong] = useState(songs[0].id);

  return (
    <section
      className="flex  flex-col text-gray-400 py-4 px-4 sm:px-6"
      id="home"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-start items-start w-full max-w-[590px]  
         mx-auto z-20 mt-20 gap-2"
      >
        {/* Top Row */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center gap-3"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden flex shrink-0"
          >
            <Image
              src="/hanii.png"
              alt="my pic"
              width={120}
              height={120}
              className="object-cover w-full h-full object-[center_40%]"
            />
          </motion.div>

          {/* Availability */}
          <div className="flex items-center gap-3 sm:px-3 py-1 px-0 text-xs sm:text-sm !text-gray-300 rounded-full font-medium">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            Available for new projects
          </div>
        </motion.div>

        {/* Name */}
        <motion.h3
          variants={item}
          className="text-xl sm:text-2xl font-bold !text-gray-200 inline-flex items-center gap-3 mt-2"
        >
          Hey, Hamna here
        </motion.h3>

        {/* Typing role */}
        <motion.div variants={item} className="w-full">
          <TextType
            className="text-sm  !text-blue-400/90
"
            text={["Software Engineer", "MERN Developer", "Frontend Developer"]}
            typingSpeed={80}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
          />
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          variants={item}
          className="text-sm sm:text-sm !text-gray-300 leading-relaxed max-w-full sm:max-w-2xl mt-3"
        >
          I build modern and responsive web applications with Next.js,
          Typescript and the MERN stack, with a great emphasis on animation and
          performance, and visual polish. What once started out as a curiosity
          for web animations quickly evolved into a love for creating
          well-organized and clean code. I am obsessed with details, right down
          to micro-interactions, through to that one spot perfect pixel because
          great user experiences are intentional.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row mt-4 gap-3 w-full"
        >
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=hamnaliaqat24@gmail.com"
            target="_blank"
            className="group relative flex items-center justify-between px-6 py-2 rounded-lg w-full sm:w-[80%]
            bg-white/5 !text-gray-200 backdrop-blur-2xl border border-white/20
            transition-all duration-200 hover:-translate-y-1
            hover:bg-blue-500/20 hover:border-blue-400"
          >
            <span className="flex items-center gap-2 !text-gray-300 group-hover:!text-white">
              <FaEnvelope size={20} />
              Email Me
            </span>
            <MoveRight
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>

          {/* LinkedIn + GitHub side by side */}
          <div className="flex gap-3 w-full sm:w-[20%] justify-start ">
            <a
              href="https://www.linkedin.com/in/hamna-liaquat-9b51a2275/"
              target="_blank"
              className="group flex items-center justify-center px-3 py-2 rounded-lg w-full backdrop-blur-2xl
              bg-white/5 border border-white/20
              transition-all duration-200 hover:-translate-y-0.5
              hover:bg-blue-500/20 hover:border-blue-400"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/humnaliaquat"
              target="_blank"
              className="group flex items-center justify-center px-3 py-2 rounded-lg w-full backdrop-blur-2xl
              bg-white/5 border border-white/20
              transition-all duration-200 hover:-translate-y-0.5
              hover:bg-blue-500/20 hover:border-blue-400"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
