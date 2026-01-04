"use client";

import { useRef, useState, useEffect } from "react";
import { useMusicStore } from "../app/stores/musicStore";
import { Music, Play, Pause, SkipBack, SkipForward, X } from "lucide-react";
import { motion } from "framer-motion";
const songs = [
  {
    title: "Birds of the Feather",
    artist: "Billie Eilish",
    src: "/music/birdsOfFeather.mp3",
  },

  {
    title: "Guitar Melody",
    artist: "Healing Guitar",
    src: "/music/guitarMelody.mp3",
  },
  {
    title: "Arcade (Guitar Cover)",
    artist: "Bod G",
    src: "/music/Arcade.mp3",
  },
  {
    title: "Still With You ",
    artist: "JK",
    src: "/music/stillWithYou.mp3",
  },
];

export default function FloatingMusic() {
  const audioRef = useRef(null);
  const { playing, setPlaying, currentSong, setCurrentSong } = useMusicStore();
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const next = () => {
    const nextIndex = (currentSong + 1) % songs.length;
    setCurrentSong(nextIndex);
    // Do not change playing state here
  };

  const prev = () => {
    const prevIndex = (currentSong - 1 + songs.length) % songs.length;
    setCurrentSong(prevIndex);
    // Do not change playing state here
  };

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.09;
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, playing]);

  return (
    <div ref={wrapperRef} className="fixed top-6 right-6 z-50">
      {/* Floating Button */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer 
    border !text-gray-300 backdrop-blur 
    border-transparent 
    hover:scale-110 hover:bg-blue-500/20 hover:border-blue-400
    transition"
        >
          <Music size={18} />
        </motion.button>

        {/* Tooltip */}
        <span
          className="absolute right-12 top-1/2 -translate-y-1/2
    whitespace-nowrap text-xs !text-gray-300
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300 pointer-events-none"
        >
          Now playing
        </span>
      </motion.div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-52 pointer-events-auto">
          <div
            className="rounded-xl bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl  border border-white/10 p-4  shadow-xl space-y-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm !text-gray-200 font-medium">
                  {songs[currentSong].title}
                </p>
                <p className="text-[11px] tracking-wider font-thin !text-gray-400">
                  {songs[currentSong].artist}
                </p>
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={16} className="!text-gray-400 cursor-pointer" />
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6  !text-gray-300">
              <button onClick={prev} className="cursor-pointer">
                <SkipBack size={18} />
              </button>

              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20
                flex items-center justify-center cursor-pointer text-blue-400"
              >
                {playing ? <Pause size={22} /> : <Play size={22} />}
              </button>

              <button onClick={next} className="cursor-pointer">
                <SkipForward size={18} />
              </button>
            </div>

            {/* Audio */}
          </div>
        </div>
      )}
      <audio ref={audioRef} src={songs[currentSong].src} onEnded={next} />
    </div>
  );
}
