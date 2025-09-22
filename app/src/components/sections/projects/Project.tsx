import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { ProjectData } from "./ProjectData";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  link: string;
  images: string[];
  tags: string[];
}
// ----------------------
// Modal Component
// ----------------------
interface ModalProps {
  project: ProjectData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // ✅ Close when clicking outside of modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      onClick={handleOutsideClick} // listen on backdrop
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative focus:outline-none"
      >
        <button
          className="absolute top-3 right-3 text-xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2
          id="project-title"
          className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100"
        >
          {project.title}
        </h2>

        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-purple-100"
            >
              {tag}
            </span>
          ))}
        </div>

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

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.longDescription}
        </p>

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
        {ProjectData.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="w-full max-w-xs bg-white dark:bg-gray-800 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Project;
