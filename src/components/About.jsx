import React from "react";
import { motion } from "framer-motion";

import Logo from "./Logo.jsx";

const About = () => {
  return (
    <section id="about" className="bg-[#F3EDED] px-4 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* Circle Image */}
        <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden shadow-md">
          <img
            // src="https://picsum.photos/200" // Random image
            src="public\images\image0.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-800 max-w-xl leading-relaxed">
          I’m a self-taught front-end developer and recent bootcamp grad with a focus on React and modern web development.
          I enjoy building clean, responsive user interfaces and continuously improving through hands-on projects and learning.
          I’m currently looking for a junior developer role where I can grow, collaborate, and make an impact.
        </p>

        {/* Signature */}
        <div className="text-center mt-6">
          <Logo></Logo>
          <a href="#contact"><p className="text-sm text-gray-600 cursor-pointer hover:text-purple-600 transition-colors duration-200">pauliepaveldev@gmail.com</p></a>
          <div className="my-2">
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 px-6 py-2 border border-gray-500 text-gray-800 text-sm sm:text-base rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              <h2>Get in Touch!</h2>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
