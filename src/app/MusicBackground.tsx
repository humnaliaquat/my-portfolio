"use client";
import { useMusicStore } from "../app/stores/musicStore";
import Aurora from "../components/Aurora";

export default function MusicBackground() {
  const playing = useMusicStore((state) => state.playing);

  return (
    <div
      className={`fixed inset-0 transition-opacity duration-700 pointer-events-none  
        ${playing ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className="fixed top-0 left-0 w-full h-40
  pointer-events-none z-20
  bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      />
      <Aurora
        colorStops={["#2954ff", "#7cff67", "#2954ff"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.6}
      />
    </div>
  );
}
