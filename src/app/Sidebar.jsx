"use client";

import { useEffect, useState } from "react";
import { Home, Folder, Layers, FileText, User } from "lucide-react";

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
    { href: "#home", label: "Home", icon: Home },
    { href: "#projects", label: "Projects", icon: Folder },
    { href: "#tech-stack", label: "Stack", icon: Layers },
    { href: "#resume", label: "Resume", icon: FileText },
    { href: "#about", label: "About", icon: User },
  ];

  return (
    <nav
      className="
        fixed z-30
        left-1/2 bottom-4 -translate-x-1/2
        sm:bottom-6
        md:left-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:-translate-x-0 bg-transparent
      "
    >
      <ul
        className="
          flex flex-row gap-2 rounded-full  px-3 py-2 backdrop-blur-md 
          sm:px-4 sm:py-2 bg-transparent
          md:flex-col md:px-2 md:py-8 md:rounded-2xl md:gap-3
        "
      >
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = active === href.substring(1);

          return (
            <li key={href} className="relative">
              <a
                href={href}
                className={`relative flex items-center justify-center md:justify-start gap-2
        px-3 py-2 sm:px-4 text-sm font-medium transition-colors duration-300
       `}
              >
                {/* Icon → mobile */}
                <Icon
                  size={18}
                  className={`block md:hidden transition-transform ${
                    isActive ? "scale-120  " : "scale-100 "
                  }`}
                />

                {/* Text → desktop */}
                <span
                  className={`hidden md:block  ${
                    isActive
                      ? "text-white"
                      : "!text-gray-400 hover:!text-gray-300"
                  }`}
                >
                  {label}
                </span>

                {/* underline */}
                <span
                  className={`
            absolute -bottom-0.5 left-7 -translate-x-1/2
            h-[2px] bg-blue-400 rounded-full transition-all duration-300 md:block hidden
            ${isActive ? "w-6 scale-x-100" : "w-6 scale-x-0"}
            origin-center
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
