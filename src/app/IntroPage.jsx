"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Sun, Moon, MoveUpRight, MoveRight, Flower } from "lucide-react";
import TextType from "./TextType";

export default function IntroPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <section className="flex flex-col text-gray-400 " id="home">
      <div className="flex flex-col justify-start items-start w-[600px] px-6 py-1 mx-auto z-20 mt-20 gap-2">
        {/* Profile Image Wrapper */}
        <div className="flex justify-between w-full">
          <div className="w-22 h-22 rounded-full overflow-hidden flex">
            <Image
              src="/hanii.png"
              alt="my pic"
              width={120}
              height={120}
              className="object-cover w-full h-full object-[center_40%]"
            />
          </div>
          <div className="   flex items-center gap-2 px-4 text-gray-300   rounded-full text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for work
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-300 inline-flex items-center gap-3">
          Hey, Hamna here
        </h3>
        <TextType
          className="text-sm text-blue-300"
          text={[
            "Software Engineer",
            "MERN Developer",
            "BSCS Final Year Student",
          ]}
          typingSpeed={60}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        <div className="text-gray-300 gap-3 mt-3 justify-start flex-col text-sm flex items-start w-full">
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
            I build modern, responsive web applications using Next.js and the
            MERN stack, with a strong focus on clean code, intuitive user
            experiences, and high performance constantly exploring the latest
            tools and techniques to create elegant digital solutions.
          </p>
        </div>

        <div className="flex mt-4 gap-3 w-full">
          {/* Email Button */}
          <a
            href="mailto:your@email.com"
            className="group relative flex items-center justify-between border border-gray-200 text-gray-300 px-6 py-2 rounded w-[84%]
             transition-transform duration-200 hover:-translate-y-1 hover:border-white"
          >
            <span className="flex items-center gap-2 text-gray-300 transition-colors duration-200 group-hover:text-blue-400">
              <FaEnvelope
                size={20}
                className="transition-colors duration-200 group-hover:text-blue-400"
              />
              Email Me
            </span>

            {/* arrow that slides horizontally */}
            <MoveRight
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:text-blue-400"
            />
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center border border-gray-300 text-gray-300 px-2 py-2 rounded
             transition-all duration-200 hover:-translate-y-0.5 "
          >
            <FaLinkedin
              size={20}
              className="transition-transform duration-200 group-hover:scale-110 "
            />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center border border-gray-300 text-gray-300 px-2 py-2 rounded
             transition-all duration-200 hover:-translate-y-0.5 "
          >
            <FaGithub
              size={20}
              className="transition-transform duration-200 group-hover:scale-110 group-hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
