import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

import Project from "./components/sections/projects/ProjectGrid";
import Skills from "./components/sections/skills/Skills";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact"

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
