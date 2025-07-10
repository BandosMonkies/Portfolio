// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-accent">BandosMonkies.dev</h1>

        <ul className="flex space-x-6 text-white text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
