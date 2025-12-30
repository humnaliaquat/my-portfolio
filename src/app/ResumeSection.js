import React from "react";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="flex flex-col">
      <div className="flex flex-col justify-start w-[600px] px-6 py-4 mx-auto z-20 gap-8 mt-20">
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
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300 font-medium">
              Hamna Liaquat
            </span>
            <span className="text-xs text-gray-400">PDF · Updated 2025</span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-4" />

          {/* Snapshot Grid */}
          <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-300">
            <div>
              <span className="text-gray-400">Role</span>
              <p>Full-Stack Developer</p>
            </div>
            <div>
              <span className="text-gray-400">Stack</span>
              <p>MERN · Next.js</p>
            </div>
            <div>
              <span className="text-gray-400">Focus</span>
              <p>Frontend, UI/UX</p>
            </div>
            <div>
              <span className="text-gray-400">Availability</span>
              <p>Open to Internships</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-5" />

          {/* CTA */}
          <div className="flex justify-end">
            <a
              href="/Hamna_Liaquat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
              px-4 py-2 rounded-md
              bg-white/10 text-gray-200 border border-white/20
              hover:bg-blue-500/20 hover:border-blue-400
              transition-all duration-300"
            >
              <FileText size={16} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
