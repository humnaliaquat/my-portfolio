"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function GoToTop({ scrollContainerRef }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const onScroll = () => setShow(scrollContainer.scrollTop > 300);
    scrollContainer.addEventListener("scroll", onScroll);

    return () => scrollContainer.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);

  if (!show) return null;

  const scrollToTop = () => {
    scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[60] w-10 h-10 rounded-full
        bg-white/50 backdrop-blur border border-white/20 text-white
        hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
    >
      <ChevronUp size={18} className="mx-auto" />
    </button>
  );
}
