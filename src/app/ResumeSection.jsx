"use client";
import React from "react";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section id="resume" className="flex flex-col px-4 sm:px-6">
      <motion.div
        className="flex flex-col justify-start  w-full max-w-[557px]  py-4 mx-auto z-20 gap-8 mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", margin: "-20px" }}
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <h1 className="font-semibold text-2xl text-gray-200">Resume</h1>

        {/* Glass Card */}
        <div
          className="relative w-full p-6 rounded-2xl
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl border border-white/10
          shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          {/* Top Row */}
          <motion.div
            className="flex  items-start justify-start sm:flex-row flex-col gap-2 sm:justify-between sm:items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-gray-300 font-medium">
              Hamna Liaquat
            </span>
            <span className="text-xs text-gray-400">PDF · Updated 2026</span>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-4" />

          {/* Snapshot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-300">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400">Role</span>
              <p>Full-Stack Developer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400">Stack</span>
              <p>MERN · Next.js</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400">Focus</span>
              <p>Frontend, UI/UX</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400">Availability</span>
              <p>Open to Internships</p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-5" />

          {/* CTA */}
          <div className="flex justify-center sm:justify-end">
            <motion.a
              href="#"
              rel="noopener noreferrer"
              className="
    inline-flex items-center justify-center gap-2
    px-3 py-2 sm:px-4 sm:py-2.5
    text-sm sm:text-base
    rounded-md
    bg-white/10 text-gray-200 border border-white/20
    hover:bg-blue-500/20 hover:border-blue-400
    transition-all duration-300
    w-full sm:w-auto
  "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <FileText size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="whitespace-nowrap">View Resume</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
