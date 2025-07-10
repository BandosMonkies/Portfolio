// src/sections/Hero.jsx

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import HeroText from "../components/HeroText";
import TechLogos from "../components/TechLogos";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden" id="hero">
      {/* Fullscreen Background 3D Starfield */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full text-center"
        >
          <HeroText />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="w-full text-center"
        >
          <TechLogos />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

