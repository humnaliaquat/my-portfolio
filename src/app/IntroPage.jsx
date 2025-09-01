import Image from "next/image";
import React from "react";

export default function IntroPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <div className="flex flex-col justify-start items-start w-[700px] px-6 py-4 mx-auto z-20 gap-2">
        {/* Profile Image Wrapper */}
        <div className="flex justify-between  w-full">
          <div className="w-25 h-25 rounded-full overflow-hidden  flex ">
            <Image
              src="/hanii.png"
              alt="my pic"
              width={128}
              height={128}
              className="object-cover  w-full h-full"
            />
          </div>
          <h1>Open for work</h1>
        </div>

        <h3 className="text-2xl font-medium">Hey I'm Hamna</h3>
        <div className="text-gray-900  gap-3 mt-3 justify-start flex-col flex items-start w-full ">
          <p>
            A BSCS student and Full-Stack Developer, working with the MERN stack
            and Next.js.
          </p>
          <p>
            Focused on building clean, responsive, and user-friendly web
            applications while continuously exploring modern web technologies.
          </p>
        </div>
        <div className="flex mt-4 gap-3 w-full">
          <button className="border border-black text-black px-3 py-1 rounded w-[80%]">
            Email Me
          </button>
          <button className="border border-black text-black px-3 py-1 rounded">
            LinkedIn
          </button>
          <button className="border border-black text-black px-3 py-1 rounded">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
