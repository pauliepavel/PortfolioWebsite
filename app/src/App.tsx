import React from "react";
import Navbar from "./components/layout/Navbar.js";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";

import Project from "./components/sections/projects/Project.js";
import Skills from "./components/sections/skills/Skills.js";
import Footer from "./components/layout/Footer.js";
import Contact from "./components/sections/Contact.js"

const App = () => {
  return (
    <div className="bg-gradient-to-t from-[#ebddf3] via-[#F3EDED] to-[#F3EDED] dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
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
