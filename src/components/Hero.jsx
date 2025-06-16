import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Logo from "./Logo.jsx";

const Hero = () => {
  return (
    <section className="w-full px-4 py-20 bg-[#F3EDED]" id="home">
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left: Image + Logo */}
        <div className="flex flex-col items-center md:items-start">
          {/* Tilt Image */}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 rounded-xl shadow-md overflow-hidden">
              <img
                src="https://picsum.photos/300/300"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
          </Tilt>

          {/* Logo under image */}
          <div className="mt-4">
            <Logo />
          </div>
        </div>

        {/* Right: Initials */}
        <div className="flex flex-col items-start text-black leading-none">
          <div className="text-[70px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-medium">P</div>
          <div className="text-[70px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-medium">Ch</div>
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <div className="flex justify-center mt-16">
        <motion.div
          className="text-2xl text-gray-500 animate-bounce mt-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
