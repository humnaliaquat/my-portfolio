import Image from "next/image";
import React from "react";

export default function IntroPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col justify-center items-center w-[700px] px-6 py-4 mx-auto z-20 gap-4">
        {/* Profile Image Wrapper */}
        <div className="w-32 h-32 rounded-full overflow-hidden  flex items-center justify-center">
          <Image
            src="/hani.png"
            alt="my pic"
            width={128}
            height={128}
            className="object-cover  w-full h-full"
          />
        </div>

        <h1 className="text-gray-900 text-4xl font-bold">Hamna Liaquat</h1>
        <div className="text-gray-900 w-[70%] justify-center flex-col flex items-center text-center">
          <p>Full-stack developer specializing in MERN stack, delivering</p>
          <p>scalable and polished web applications.</p>
        </div>
        <div className="flex gap-3">
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
