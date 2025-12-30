"use client";
import AboutSection from "./AboutSection";
import IntroPage from "./IntroPage";
import Projects from "./Projects";
import ResumeSection from "./ResumeSection";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      <div className="relative z-10">
        {/* Home Section */}
        <IntroPage />

        {/* Projects Section */}
        <section id="projects" className="">
          {" "}
          <Projects />
        </section>

        {/* Tech Stack Section */}
        <section
          id="tech-stack"
          className="flex flex-col items-center justify-center "
        >
          <TechStack />
        </section>
        {/* Resume Section */}
        <section
          id="resume"
          className="flex flex-col items-center justify-center "
        >
          <ResumeSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>
      </div>
    </div>
  );
}
