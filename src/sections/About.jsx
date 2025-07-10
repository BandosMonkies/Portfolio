// src/sections/About.jsx

import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg"; // Optional profile image

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
      <motion.div
        className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-accent"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profileImg}
          alt="Nagaraj Hegde"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-white/80">
          I’m Nagaraj, a 2nd year B.Tech explorer at PES University, Bangalore.
          A curious mind with a love for blinking LEDs, beautiful code, and the sweet hum of a well-running Linux terminal. I tinker with C, C++, Python, and love crafting clean frontends with React and Three.js.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-white/80">
          I don’t just chase trends—I play with them. Whether it’s debugging broken code or breaking things just to rebuild better, I enjoy the chaos of creation.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
