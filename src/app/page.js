"use client";
import IntroPage from "./IntroPage";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      <div className="relative z-10">
        {/* Home Section */}
        <IntroPage />

        {/* Projects Section */}
        <section id="projects" className="min-h-size">
          {" "}
          <Projects />
        </section>

        {/* Tech Stack Section */}
        <section
          id="tech-stack"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <TechStack />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4 text-lg max-w-lg text-center">
            Write your about content here...
          </p>
        </section>
      </div>
    </div>
  );
}
