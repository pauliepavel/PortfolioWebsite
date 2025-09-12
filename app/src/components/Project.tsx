import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  link: string;
  images: string[];
  tags: string[];
}

const projectData: ProjectData[] = [
  {
    id: "airhomes",
    title: "AirHomes – Real Estate Blog",
    description: "BlogApp demo for showcasing web development skills.",
    longDescription:
      "This project is a template for a real estate company blog, created as part of my portfolio. It demonstrates how a blog platform can be designed for publishing articles, managing content, and presenting consulting insights. While the content is placeholder, the project highlights my ability to integrate modern frontend technologies, clean UI design, and backend functionality to simulate a real-world blogging experience.",
    link: "https://example.com/project1",
    images: [
      "https://picsum.photos/id/1011/800/600",
      "https://picsum.photos/id/1012/800/600",
    ],
    tags: ["React", "Tailwind", "API"],
  },
  {
    id: "project2",
    title: "Project Heading 2",
    description: "Information about project - Project description",
    longDescription: "This is a more detailed description of Project 2.",
    link: "https://example.com/project2",
    images: [
      "https://picsum.photos/id/1013/800/600",
      "https://picsum.photos/id/1014/800/600",
    ],
    tags: ["Next.js", "Sass", "CMS"],
  },
  {
    id: "project3",
    title: "Project Heading 3",
    description: "Information about project - Project description",
    longDescription: "This is a more detailed description of Project 3.",
    link: "https://example.com/project3",
    images: [
      "https://picsum.photos/id/1015/800/600",
      "https://picsum.photos/id/1016/800/600",
    ],
    tags: ["JavaScript", "REST API", "Firebase"],
  },
  {
    id: "project4",
    title: "Project Heading 4",
    description: "Information about project - Project description",
    longDescription: "This is a more detailed description of Project 4.",
    link: "https://example.com/project4",
    images: [
      "https://picsum.photos/id/1018/800/600",
      "https://picsum.photos/id/1019/800/600",
    ],
    tags: ["Figma", "UX", "Git"],
  },
];

// ----------------------
// Modal Component
// ----------------------
interface ModalProps {
  project: ProjectData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      ref={modalRef}
    >
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative focus:outline-none">
        <button
          className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 id="project-title" className="text-2xl font-bold mb-2">
          {project.title}
        </h2>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Images */}
        <div className="mb-4 space-y-2">
          {project.images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded w-full object-contain"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{project.longDescription}</p>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none"
        >
          Visit Project
        </a>
      </div>
    </div>,
    document.body
  );
};

// ----------------------
// Project Grid Component
// ----------------------
const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  return (
    <section className="px-4 py-8" id="projects">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {projectData.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="w-full max-w-xs bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={`Open details for ${project.title}`}
          >
            <div className="block rounded-md overflow-hidden group">
              <div className="relative aspect-square">
                <img
                  src={project.images[0]}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 transition-transform duration-500 group-hover:-translate-y-full" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Project;
