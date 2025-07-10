// src/components/HeroText.jsx

import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="text-center select-none">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-accent drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Nagaraj Hegde
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-white/80 font-medium"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        Tinkerer • Developer • Tech Explorer
      </motion.p>
    </div>
  );
};

export default HeroText;
