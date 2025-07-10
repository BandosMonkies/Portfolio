// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-4 border-t border-white/10 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Bandos Monkeys. Built with ❤️ using React & Three.js 
      </p>
    </footer>
  );
};

export default Footer;
