import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../layout/Logo";

const Hero: React.FC = () => {
  const [isCinemaOpen, setIsCinemaOpen] = useState<boolean>(false);

  return (
    <section className="relative w-full px-4 py-20 bg-[#F3EDED] dark:bg-gray-900" id="home">
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Animated Hover Image */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden cursor-pointer"
            onClick={() => setIsCinemaOpen(true)}
          >
            <img
              src="https://picsum.photos/300/300"
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Logo */}
          <div className="mt-4">
            <Logo />
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          className="hidden sm:flex flex-1 flex-col items-start text-black dark:text-gray-200 leading-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-[70px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-medium">
            P
          </div>
          <div className="text-[70px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-medium">
            Ch
          </div>
        </motion.div>
      </motion.div>

      {/* Text + CTA */}
      <motion.div
        className="text-center max-w-3xl mx-auto mt-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 my-4">
          Hey, I'm Pavel
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
          A front-end developer passionate about crafting clean, responsive user
          interfaces with React & Tailwind.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-2 rounded-full border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-purple-600 hover:text-white transition duration-300"
        >
          View My Work
        </a>
      </motion.div>

      {/* Cinema Modal View */}
      <AnimatePresence>
        {isCinemaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setIsCinemaOpen(false)}
          >
            <motion.img
              src="https://picsum.photos/1000/800"
              alt="Full Image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
