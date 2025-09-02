"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Sun, Moon, MoveUpRight, MoveRight } from "lucide-react";

export default function IntroPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <section className="flex flex-col " id="home">
      <div className="flex flex-col justify-start items-start w-[700px] px-6 py-1 mx-auto z-20 mt-20 gap-2">
        {/* Profile Image Wrapper */}
        <div className="flex justify-between w-full">
          <div className="w-25 h-25 rounded-full overflow-hidden flex">
            <Image
              src="/hanii.png"
              alt="my pic"
              width={128}
              height={128}
              className="object-cover w-full h-full object-[center_40%]"
            />
          </div>
          <button
            className="flex justify-center rounded items-center hover:bg-gray-200 w-8 h-8 cursor-pointer"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <h3 className="text-2xl font-medium ">Hey I'm Hamna</h3>
        <div className="text-gray-900 gap-3 mt-3 justify-start flex-col flex items-start w-full">
          <p>
            A BSCS student and Full-Stack Developer, working with the MERN stack
            and Next.js.
          </p>
          <p>
            Focused on building clean, responsive, and user-friendly web
            applications while continuously exploring modern web technologies.
          </p>
        </div>

        <div className="flex mt-4 gap-3 w-full">
          {/* Email Button */}
          <a
            href="mailto:your@email.com"
            className="flex items-center justify-between border border-black text-black px-6 py-1 rounded w-[84%] transition-colors duration-200"
          >
            <span className="flex items-center">
              <FaEnvelope size={20} className="mr-2" />
              Email Me
            </span>
            <MoveUpRight size={20} />
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-black text-black px-2 py-1 rounded transition-colors duration-200"
          >
            <FaLinkedin size={20} />
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-black text-black px-2 py-1 rounded transition-colors duration-200"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
