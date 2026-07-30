import { useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

import ProjectModal from "./ProjectModal";

function ProjectsTable() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const data = await getProjects();
      setProjects(data.projects);
    } catch (err) {
      console.log(err);
    }
  }

  async function saveProject(projectData) {
    try {
      if (editingProject) {
        await updateProject(editingProject._id, projectData);
      } else {
        await addProject(projectData);
      }

      setEditingProject(null);
      setShowModal(false);
      loadProjects();
    } catch (err) {
      console.log(err);
    }
  }

  async function removeProject(id) {
    try {
      await deleteProject(id);
      loadProjects();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <button
          onClick={() => {
            setEditingProject(null);
            setShowModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Project
        </button>

      </div>

      <div className="space-y-5">

        {projects.length === 0 && (
          <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
            No projects added yet.
          </div>
        )}

        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow rounded-xl p-5"
          >
            <h2 className="text-xl font-bold">
              {project.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {project.description}
            </p>

            <div className="mt-3">
              <span className="font-semibold">
                Tech Stack:
              </span>{" "}
              {project.techStack}
            </div>

            <div className="flex gap-5 mt-4">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}

            </div>

            <div className="flex gap-5 mt-5">

              <button
                onClick={() => {
                  setEditingProject(project);
                  setShowModal(true);
                }}
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Edit
              </button>

              <button
                onClick={() => removeProject(project._id)}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

      {showModal && (
        <ProjectModal
          project={editingProject}
          onClose={() => {
            setEditingProject(null);
            setShowModal(false);
          }}
          onSave={saveProject}
        />
      )}
    </div>
  );
}

export default ProjectsTable;