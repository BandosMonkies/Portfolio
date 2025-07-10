// src/sections/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-accent mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <p className="text-white/80 mb-6">
          Have a project idea, collaboration, or just want to say hi? I'm always open to tech talks and new adventures.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
          <a
            href="mailto:qwer@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <FaEnvelope /> nagarajhegdekanchi@gmail.com
          </a>

          <a
            href="https://github.com/qwerrty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <FaGithub /> github.com/Nagaraj-Hegde-Kanchi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
