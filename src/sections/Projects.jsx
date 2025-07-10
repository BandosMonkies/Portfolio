// src/sections/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Snake & Ladder (C + Raylib)",
    description: "A classic board game recreation using C and Raylib, built as part of a college project.",
    repo: "https://github.com/Nagaraj-Hegde-Kanchi/Snake-And-Ladder",
  },
  {
    title: "Ludos Bandos (HTML + CSS + JS)",
    description: "A board game of classic Ludo showcasing layout and styling skills.",
    repo: "https://github.com/Nagaraj-Hegde-Kanchi.git",
  },
  {
    title: "Login Interface (Python)", 
    description: "A fully functional Login Interface using Custom TKinter module in Python.",
    repo: "https://github.com/Nagaraj-Hegde-Kanchi/login_interface",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-[#0d0d0d] text-white py-20 px-6 md:px-16" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-accent mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/10 hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-accent mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm mb-4">{project.description}</p>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm hover:text-accent transition-colors duration-300"
              >
                <FaGithub className="mr-2" /> View Repo
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
