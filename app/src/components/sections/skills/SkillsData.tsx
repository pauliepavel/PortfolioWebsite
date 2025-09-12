import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiGit,
  SiReactrouter,
} from "react-icons/si";
import { ReactElement } from "react";

export interface Skill {
  name: string;
  icon: ReactElement;
  description: string;
}

export const skills: Skill[] = [
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
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
    description: "REST APIs, middleware, and server-side logic.",
  },
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
  {
    name: "React Router",
    icon: <SiReactrouter className="text-purple-500" />,
    description: "Client-side routing for multi-page React applications.",
  },
];
