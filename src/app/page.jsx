"use client";
import { useRef } from "react";
import { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import IntroPage from "./IntroPage";
import Projects from "./Projects";
import ResumeSection from "./ResumeSection";
import TechStack from "./TechStack";
import Loader from "../components/Loader";
import FloatingMusic from "./FloatingMusic";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-50">
          <Loader />
        </div>
      )}

      {/* Floating Music */}
      <div className="fixed top-6 right-6 z-50 hidden md:block">
        <FloatingMusic />
      </div>

      {/* Main content (Sidebar will mount, IntersectionObserver works) */}
      <div className="relative z-10 mb-20 ">
        <IntroPage />
        <section id="projects">
          <Projects />
        </section>
        <section
          id="tech-stack"
          className="flex flex-col items-center justify-center"
        >
          <TechStack />
        </section>
        <section
          id="resume"
          className="flex flex-col items-center justify-center"
        >
          <ResumeSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </div>
    </div>
  );
}
