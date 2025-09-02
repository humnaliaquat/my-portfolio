import IntroPage from "./IntroPage";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0 h-[500px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10">
        {/* Home Section */}
        <IntroPage />

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
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
