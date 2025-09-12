import React from "react";
import { skills } from "./SkillsData";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto px-4">
        {skills.map(({ name, icon, description }) => (
          <div
            key={name}
            className="relative group flex flex-col items-center"
          >
            {/* Skill Icon */}
            <div className="text-5xl p-5 rounded-full hover:scale-110 transition duration-300">
              {icon}
            </div>

            {/* Tooltip */}
            <div
              className="absolute top-[110%] sm:bottom-[-130%] sm:top-auto 
                         w-64 max-w-xs px-4 py-3 rounded-md shadow-lg 
                         backdrop-blur-md bg-white/80 text-gray-800 
                         opacity-0 group-hover:opacity-100 pointer-events-none 
                         transition-all duration-300 transform translate-y-2 
                         group-hover:translate-y-0 text-sm text-center z-10"
            >
              <p className="font-semibold mb-1">{name}</p>
              <p className="break-words leading-snug">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
