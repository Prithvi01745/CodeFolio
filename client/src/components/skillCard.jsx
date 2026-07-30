import {
  FaEdit,
  FaTrash,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

function SkillCard({ skill, onEdit, onDelete }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

      {/* ================= HEADER ================= */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white">

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

              <FaCode className="text-2xl" />

            </div>

            <h2 className="text-2xl font-bold">

              {skill.skillName}

            </h2>

          </div>

          <div className="rounded-xl bg-white/20 px-3 py-2 text-sm font-semibold backdrop-blur">

            {skill.technologies?.length || 0} Tech

          </div>

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">

        <p className="line-clamp-4 leading-7 text-slate-600 dark:text-slate-300">

          {skill.description}

        </p>

        {/* ================= TECHNOLOGIES ================= */}

        <div className="mt-8">

          <div className="mb-4 flex items-center gap-2">

            <FaLayerGroup className="text-blue-600" />

            <h3 className="font-semibold text-slate-700 dark:text-slate-200">

              Technologies

            </h3>

          </div>

          <div className="flex flex-wrap gap-3">

            {skill.technologies?.map((tech, index) => (

              <span
                key={index}
                className="rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 text-sm font-medium text-blue-700 transition group-hover:scale-105 dark:bg-slate-800 dark:text-blue-300"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* ================= ACTIONS ================= */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <button
            onClick={() => onEdit(skill)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition hover:scale-105"
          >
            <FaEdit />

            Edit

          </button>

          <button
            onClick={() => onDelete(skill._id)}
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

export default SkillCard;