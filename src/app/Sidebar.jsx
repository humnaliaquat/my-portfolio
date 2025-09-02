"use client";

import Link from "next/link";
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
        threshold: 0.15, // trigger earlier
        rootMargin: "-10% 0px -70% 0px",
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
    <nav className="fixed top-0 left-0 h-screen w-30 z-20 bg-transparent flex flex-col items-center justify-center">
      <ul className="flex flex-col space-y-6 text-gray-400">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`transition-colors duration-200 ${
                active === href.substring(1)
                  ? "text-black  font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
