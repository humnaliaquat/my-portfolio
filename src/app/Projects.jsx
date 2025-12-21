"use client";
import React from "react";

export default function Projects() {
  const details = [
    {
      id: "1",
      name: "project 1",
      para: "If you want, I can write a ready-to-use prompt for an AI tool that guarantees a professional, portfolio-ready headshot for you.",
    },
    {
      id: "1",
      name: "project 1",
      para: "If you want, I can write a ready-to-use prompt for an AI tool that guarantees a professional, portfolio-ready headshot for you.",
    },
  ];
  return (
    <section id="projects" className="flex flex-col ">
      <div className="flex flex-col justify-start  w-[600px] px-6 py-4 mx-auto  z-20 gap-4 mt-17">
        <h1 className="font-semibold text-2xl">Projects</h1>
        <div className="flex flex-col gap-5">
          {details.map((item) => (
            <div
              key={item.id}
              className="w-full h-[300px] p-4 flex flex-col gap-4 bg-gray-200 rounded-2xl"
            >
              <div className="flex justify-between">
                <h1>{item.name}</h1>
                <button>View more</button>
              </div>

              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
