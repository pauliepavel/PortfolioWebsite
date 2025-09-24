import React, { useState } from "react";
import { ProjectData } from "./ProjectData";

import { Modal } from "./Project";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  link: string;
  images: string[];
  tags: string[];
}

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
