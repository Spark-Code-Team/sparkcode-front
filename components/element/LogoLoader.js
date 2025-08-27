// components/LogoLoader.js
"use client"; // برای استفاده از Framer Motion در App Router

import React from "react";
import { motion } from "framer-motion";
import LogoSVG from "@/public/icons/logoLoading";

const LogoLoader = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#0B1D3A] grid place-items-center"
      aria-label="Loading"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="flex items-center justify-center"
      >
        <LogoSVG className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
      </motion.div>
    </div>
  );
};

export default LogoLoader;
