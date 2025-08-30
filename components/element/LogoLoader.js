// components/LogoLoader.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import LogoSVG from "@/public/icons/logoLoading";

const LogoLoader = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0B1D3A] via-[#14284C] to-[#0B1D3A] flex items-center justify-center overflow-hidden"
      aria-label="Loading"
    >
      <div className="absolute inset-0 bg-[#0B1D3A] opacity-50 backdrop-blur-md"></div>

      <motion.div
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ scale: [0.7, 1.05, 0.7], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <LogoSVG className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36" />
      </motion.div>
    </div>
  );
};

export default LogoLoader;
