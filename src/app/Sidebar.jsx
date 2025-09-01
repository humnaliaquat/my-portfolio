import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-30 z-20 bg-transparent flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        {/* Nav Links */}
        <ul className="flex flex-col space-y-6 text-gray-400">
          <li>
            <Link href="/about" className="hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-white">
              Tech Stack
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
