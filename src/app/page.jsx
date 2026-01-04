"use client";
import AboutSection from "./AboutSection";
import IntroPage from "./IntroPage";
import Projects from "./Projects";
import ResumeSection from "./ResumeSection";
import TechStack from "./TechStack";

import FloatingMusic from "../components/FloatingMusic";

export default function Home() {
  return (
    <div className="min-h-screen w-full  relative">
      {/* Main content  */}

      <div className="relative z-10  ">
        {/* intro section */}
        <IntroPage />
        {/* projects section */}
        <section id="projects">
          <Projects />
        </section>
        {/* tech stack section */}
        <section id="tech-stack" className="flex flex-col ">
          <TechStack />
        </section>
        {/* resume section */}
        <section id="resume" className="flex flex-col ">
          <ResumeSection />
        </section>
        {/* about section */}
        <section id="about">
          <AboutSection />
        </section>
        {/* floating music player */}
        <div className="fixed top-6 right-6 z-50 hidden md:block">
          <FloatingMusic />
        </div>
      </div>
    </div>
  );
}
