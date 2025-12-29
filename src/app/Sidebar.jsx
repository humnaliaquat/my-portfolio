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
        threshold: 0.3,
        rootMargin: "-30% 0px -30% 0px",
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
    <nav
      className="
        fixed z-30
        left-1/2 bottom-4 -translate-x-1/2
        sm:bottom-6
        md:left-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:-translate-x-0
      "
    >
      <ul
        className="
          flex flex-row gap-2 rounded-full bg-black/70 px-3 py-2 backdrop-blur-md shadow-lg
          sm:px-4 sm:py-2
          md:flex-col md:px-2 md:py-8 md:rounded-2xl md:gap-3
        "
      >
        {links.map(({ href, label }) => {
          const isActive = active === href.substring(1);

          return (
            <li key={href} className="relative">
              <a
                href={href}
                className={`relative block px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "!text-gray-400 hover:!text-gray-300"
                }`}
              >
                {label}

                {/* underline */}
                <span
                  className={`
      absolute -bottom-0.5 left-4 h-[2px] bg-white rounded-full transition-all duration-300
      ${isActive ? "w-6 scale-x-100" : "w-6 scale-x-0"}
      origin-left
    `}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
