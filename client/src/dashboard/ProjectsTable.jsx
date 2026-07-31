import { useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

import ProjectModal from "./ProjectModal";

import {
  FaPlus,
  FaFolderOpen,
  FaCode,
  FaRocket,
} from "react-icons/fa";

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
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* ================= HERO ================= */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-10 text-white shadow-2xl">

        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">

              Portfolio Management

            </span>

            <h1 className="mt-5 text-5xl font-extrabold">

              🚀 My Projects

            </h1>

            <p className="mt-4 max-w-2xl text-lg text-blue-100">

              Showcase your best work by managing all your projects
              in one beautiful place.

            </p>

          </div>

          <button
            onClick={() => {
              setEditingProject(null);
              setShowModal(true);
            }}
            className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaPlus />

            Add New Project
          </button>

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">

                Total Projects

              </p>

              <h2 className="mt-2 text-4xl font-bold">

                {projects.length}

              </h2>

            </div>

            <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">

              <FaFolderOpen size={30} />

            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">

                Technologies

              </p>

              <h2 className="mt-2 text-4xl font-bold">

                {
                  new Set(
                    projects.flatMap((project) =>
                      (project.techStack || "")
                        .split(",")
                        .map((tech) => tech.trim())
                        .filter(Boolean)
                    )
                  ).size
                }

              </h2>

            </div>

            <div className="rounded-2xl bg-green-100 p-4 text-green-600">

              <FaCode size={30} />

            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">

                Portfolio Status

              </p>

              <h2 className="mt-2 text-4xl font-bold text-blue-600">

                {projects.length ? "Ready" : "Empty"}

              </h2>

            </div>

            <div className="rounded-2xl bg-purple-100 p-4 text-purple-600">

              <FaRocket size={30} />

            </div>

          </div>

        </div>

      </div>

      {/* ================= PROJECT SECTION ================= */}

      <div className="mt-10">
                {projects.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900">

              <FaFolderOpen size={42} />

            </div>

            <h2 className="mt-8 text-3xl font-bold text-slate-800 dark:text-white">

              No Projects Yet

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">

              Your portfolio is waiting to shine.
              Add your first project and showcase your work,
              technologies and achievements.

            </p>

            <button
              onClick={() => {
                setEditingProject(null);
                setShowModal(true);
              }}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >

              <FaPlus />

              Add Your First Project

            </button>

          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">

            {projects.map((project) => (

              <div
                key={project._id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">

                  {project.image ? (

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                  ) : (

                    <div className="flex h-full items-center justify-center">

                      <FaFolderOpen className="text-7xl text-slate-400" />

                    </div>

                  )}

                  <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 backdrop-blur">

                    Project

                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

                    {project.title}

                  </h2>

                  <p className="mt-4 text-slate-600 leading-7 dark:text-slate-300">

                    {project.description}

                  </p>

                  {/* ================= TECH STACK ================= */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {(project.techStack || "")
                      .split(",")
                      .filter(Boolean)
                      .map((tech, index) => (

                        <span
                          key={index}
                          className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                        >

                          {tech.trim()}

                        </span>

                      ))}

                  </div>
                                    {/* ================= LINKS ================= */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-black"
                      >
                        💻 GitHub
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                      >
                        🚀 Live Demo
                      </a>
                    )}

                  </div>

                  {/* ================= ACTIONS ================= */}

                  <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-700">

                    <button
                      onClick={() => {
                        setEditingProject(project);
                        setShowModal(true);
                      }}
                      className="rounded-xl bg-yellow-100 px-5 py-3 font-semibold text-yellow-700 transition-all duration-300 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200"
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => removeProject(project._id)}
                      className="rounded-xl bg-red-100 px-5 py-3 font-semibold text-red-700 transition-all duration-300 hover:bg-red-200 dark:bg-red-900 dark:text-red-200"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
            {/* ================= PROJECT MODAL ================= */}

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