import {
  FaGithub,
  FaExternalLinkAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Screenshot */}
      <div className="h-52 bg-gray-100">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Screenshot
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-800">
          {project.title}
        </h2>

        <p className="mt-3 text-gray-600 text-sm leading-6 min-h-[70px]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-5">

          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}

        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => onEdit(project)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-2 flex justify-center items-center gap-2"
          >
            <FaEdit />
            Edit
          </button>

          <button
            onClick={() => onDelete(project._id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 flex justify-center items-center gap-2"
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