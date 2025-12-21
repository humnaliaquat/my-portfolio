"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#tech-stack", label: "Stack" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 z-20 -translate-x-1/2">
      <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md shadow-lg">
        {links.map(({ href, label }) => {
          const isActive = active === href.substring(1);

          return (
            <li key={href}>
              <a
                href={href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
