import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiGit,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    description: "Strong in ES6+, DOM manipulation, and asynchronous patterns.",
  },
  {
    name: "React",
    icon: <SiReact className="text-blue-500" />,
    description: "Experienced with components, hooks, context API, and SPA design.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" />,
    description: "Proficient in SSR, API routes, dynamic routing, and optimization.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    description: "Responsive UI development using utility-first styling.",
  },
  {
    name: "Sass",
    icon: <SiSass className="text-pink-500" />,
    description: "Used variables, mixins, and nesting for scalable styles.",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-purple-600" />,
    description: "Design collaboration, UI prototyping, and design-to-code workflow.",
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-600" />,
    description: "Version control, collaboration, and GitHub-based workflows.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto px-4">
        {skills.map(({ name, icon, description }) => (
          <div key={name} className="relative group flex flex-col items-center">
            <div className="text-5xl p-5 rounded-full hover:scale-110 transition duration-300">
              {icon}
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-[-110%] w-64 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 text-center z-10">
              <p className="font-semibold mb-1">{name}</p>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
