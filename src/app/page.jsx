"use client";
import { useRef } from "react";
import { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import IntroPage from "./IntroPage";
import Projects from "./Projects";
import ResumeSection from "./ResumeSection";
import TechStack from "./TechStack";

import FloatingMusic from "./FloatingMusic";

export default function Home() {
  return (
    <div className="min-h-screen w-full  relative">
      {/* Main content (Sidebar will mount, IntersectionObserver works) */}

      <div className="relative z-10 mb-30 ">
        {/* Floating Music */}

        <IntroPage />

        <section id="projects">
          <Projects />
        </section>
        <section id="tech-stack" className="flex flex-col ">
          <TechStack />
        </section>
        <section id="resume" className="flex flex-col ">
          <ResumeSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <div className="fixed top-6 right-6 z-50 hidden md:block">
          <FloatingMusic />
        </div>
      </div>
    </div>
  );
}
