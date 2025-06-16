import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About.jsx";

import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="bg-[#F3EDED] min-h-screen font-sans">
      <div className="container mx-auto p-4 flex flex-col gap-5">
        <Navbar />
        <Hero />
        <About/>
        {/* <Project/> */}
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
