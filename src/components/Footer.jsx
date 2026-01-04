"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Corinthia } from "next/font/google";
import { motion } from "framer-motion";

const corinthia = Corinthia({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-corinthia",
});

export default function Footer() {
  return (
    <footer className="flex flex-col px-6 sm:px-12 py-4 mt-6 relative z-20 mb-40">
      <div className="flex flex-col justify-start w-full max-w-[560px] mx-auto gap-10">
        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <hr className="flex-grow border-t border-white/10" />
          <a
            href="https://mail.google.com/mail/?view=cm&to=hamnaliaqat24@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border px-5 py-2 rounded-lg !text-gray-200 border-white/20 hover:scale-110 hover:bg-blue-500/20 hover:border-blue-400 transition-transform duration-200"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamna-liaquat-9b51a2275/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border px-5 py-2 rounded-lg !text-gray-200 border-white/20 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/humnaliaquat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border px-5 py-2 rounded-lg !text-gray-200 border-white/20 hover:scale-110 hover:bg-blue-500/20 hover:border-blue-400 transition-transform duration-200"
          >
            <FaGithub size={20} />
          </a>

          <hr className="flex-grow border-t border-white/10" />
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 mt-4 "
        >
          <p className={`${corinthia.className}   text-3xl !text-gray-300`}>
            Hamna
          </p>
          <span className=" text-sm italic text-center !text-gray-300">
            Thank you for visiting!
          </span>
        </motion.div>

        {/* Optional Bottom Note */}
      </div>
    </footer>
  );
}
