import React, { useState, useEffect, useRef } from "react";
import { skills } from "./SkillsData";

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  // Close tooltip when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        skillsRef.current &&
        !skillsRef.current.contains(event.target as Node)
      ) {
        setActiveSkill(null);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSkill(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleToggle = (name: string) => {
    setActiveSkill((prev) => (prev === name ? null : name));
  };

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
        Skills
      </h2>

      <div
        ref={skillsRef}
        className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto px-4"
      >
        {skills.map(({ name, icon, description }) => (
          <div key={name} className="relative flex flex-col items-center group">
            {/* Icon (clickable + keyboard accessible) */}
            <button
              onClick={() => handleToggle(name)}
              aria-expanded={activeSkill === name}
              aria-controls={`tooltip-${name}`}
              className="text-5xl p-5 rounded-full hover:scale-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {icon}
            </button>

            {/* Tooltip */}
            <div
              id={`tooltip-${name}`}
              role="tooltip"
              className={`
                absolute top-[110%] sm:bottom-[-130%] sm:top-auto
                w-64 max-w-xs px-4 py-3 rounded-md shadow-lg
                backdrop-blur-md bg-white/80 dark:bg-gray-900 text-gray-800 dark:text-gray-200
                text-sm text-center z-10 transition-all duration-300 transform
                ${activeSkill === name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
                group-hover:opacity-100 group-hover:translate-y-0
              `}
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
