import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiGit,
  SiReactrouter
} from "react-icons/si";

const skills = [
  // Front-End
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    description: "ES6+, DOM manipulation, and asynchronous patterns.",
  },
  {
    name: "React",
    icon: <SiReact className="text-blue-500" />,
    description: "Components, hooks, context API, and SPA development.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    description: "Typed JavaScript for safer and maintainable code.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    description: "Responsive UI with utility-first styling.",
  },
  {
    name: "Sass",
    icon: <SiSass className="text-pink-500" />,
    description: "Variables, mixins, and nesting for scalable styles.",
  },

  // Back-End
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-800" />,
    description: "REST APIs, middleware, and server-side logic.",
  },

  // Tools / Design
  {
    name: "Git",
    icon: <SiGit className="text-orange-600" />,
    description: "Version control and collaboration using GitHub workflows.",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-purple-600" />,
    description: "UI/UX design, prototyping, and design-to-code workflow.",
  },

   // --------------------------
  // Suggested skills to learn later (for resume / growth)
  // --------------------------

  {
    name: "React Router",
    icon: <SiReactrouter className="text-purple-500" />,
    description: "Client-side routing for multi-page React applications."
  },
  // {
  //   name: "Node.js",
  //   icon: <SiNodedotjs className="text-green-600" />,
  //   description: "Server-side JavaScript for APIs and backend logic.",
  // },
  // {
  //   name: "MongoDB",
  //   icon: <SiMongodb className="text-green-700" />,
  //   description: "NoSQL database for flexible, document-based storage.",
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: <SiPostgresql className="text-blue-700" />,
  //   description: "Relational database for structured data and queries.",
  // },
  // {
  //   name: "Redux / State Management",
  //   icon: <SiRedux className="text-violet-600" />,
  //   description: "Centralized state management for larger apps.",
  // },
  // {
  //   name: "Jest",
  //   icon: <SiJest className="text-red-500" />,
  //   description: "Unit and integration testing for JavaScript/TypeScript apps.",
  // },
  // {
  //   name: "Cypress",
  //   icon: <SiCypress className="text-green-400" />,
  //   description: "End-to-end testing for front-end applications.",
  // },
  // {
  //   name: "GraphQL",
  //   icon: <SiGraphql className="text-pink-500" />,
  //   description: "Flexible API queries and data fetching alternative to REST.",
  // },
  // {
  //   name: "Docker",
  //   icon: <SiDocker className="text-blue-400" />,
  //   description: "Containerization for consistent development and deployment.",
  // },
  // {
  //   name: "Vercel / Deployment",
  //   icon: <SiVercel className="text-black" />,
  //   description: "Deploy front-end apps quickly with global CDN support.",
  // },
];


const Skills = () => {
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
            <div className="text-5xl p-5 rounded-full hover:scale-110 transition duration-300">
              {icon}
            </div>

            {/* Tooltip */}
            <div className="absolute top-[110%] sm:bottom-[-130%] sm:top-auto w-64 max-w-xs px-4 py-3 
                            rounded-md shadow-lg backdrop-blur-md bg-white/80  
                            text-gray-800 opacity-0 group-hover:opacity-100 
                            pointer-events-none transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 
                            text-sm text-center z-10">
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
