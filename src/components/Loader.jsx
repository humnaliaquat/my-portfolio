"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Logo animation */}
      <motion.div className="  rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xl">Hamna Liaqaut</span>
      </motion.div>
    </div>
  );
}
