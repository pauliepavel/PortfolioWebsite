import React from "react";
import Navbar from "./components/layout/Navbar.js";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";

import Project from "./components/sections/Project.js";
import Skills from "./components/sections/skills/Skills.js";
import Footer from "./components/layout/Footer.js";
import Contact from "./components/sections/Contact.js"

const App = () => {
  return (
    <div className="bg-[#F3EDED] dark:bg-gray-900 min-h-screen font-sans">
      <div className="container mx-auto p-4 flex flex-col gap-5">
        <Navbar />
        <Hero />
        <About/>
        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
