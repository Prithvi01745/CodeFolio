import {
  FaGithub,
  FaExternalLinkAlt,
  FaEdit,
  FaTrash,
  FaStar,
} from "react-icons/fa";

import TechnologyChip from "./TechnologyChip";

function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

      {/* ================= IMAGE ================= */}

      <div className="relative h-60 overflow-hidden">

        {project.featured && (
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 font-semibold text-slate-900 shadow-lg">
            <FaStar />
            Featured
          </div>
        )}

        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/800x500?text=No+Image";
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-200 text-slate-500 dark:bg-slate-800">
            No Image
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

          {project.title}

        </h2>

        <p className="mt-4 line-clamp-4 leading-7 text-slate-600 dark:text-slate-300">

          {project.description}

        </p>

        {/* ================= TECH STACK ================= */}

        <div className="mt-6 flex flex-wrap gap-3">

          {project.techStack?.map((tech) => (
            <TechnologyChip
              key={tech}
              technology={tech}
            />
          ))}

        </div>

        {/* ================= LINKS ================= */}

        <div className="mt-8 flex flex-wrap gap-4">

          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:scale-105 hover:bg-black"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 font-medium text-white transition hover:scale-105"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

        {/* ================= ACTION BUTTONS ================= */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <button
            onClick={() => onEdit(project)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition hover:scale-105"
          >
            <FaEdit />
            Edit
          </button>

          <button
            onClick={() => onDelete(project._id)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-red-700 py-3 font-semibold text-white transition hover:scale-105"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;