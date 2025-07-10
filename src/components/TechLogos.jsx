// src/components/TechLogos.jsx

import React from "react";
import { motion } from "framer-motion";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import cppLogo from "../assets/cpp.png";
import pythonLogo from "../assets/python.png";
import linuxLogo from "../assets/linux.png";

const techs = [
  { name: "HTML", src: htmlLogo },
  { name: "CSS", src: cssLogo },
  { name: "JavaScript", src: jsLogo },
  { name: "React", src: reactLogo },
  { name: "C++", src: cppLogo },
  { name: "Python", src: pythonLogo },
  { name: "Linux", src: linuxLogo },
];

const TechLogos = () => {
  return (
    <div className="mt-10 px-6 flex flex-wrap justify-center gap-6">
      {techs.map((tech, idx) => (
        <motion.div
          key={idx}
          className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-xl p-2 hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20"
          whileHover={{ rotate: 10 }}
          title={tech.name}
        >
          <img
            src={tech.src}
            alt={tech.name}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechLogos;
