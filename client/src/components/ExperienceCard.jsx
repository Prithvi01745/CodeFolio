import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaBriefcase,
} from "react-icons/fa";

import TechnologyChip from "./TechnologyChip";

function ExperienceCard({
  experience,
  onEdit,
  onDelete,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

      {/* ================= HEADER ================= */}

      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 p-6 text-white">

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

              <FaBuilding className="text-2xl" />

            </div>

            <h2 className="text-2xl font-bold">

              {experience.company}

            </h2>

            <p className="mt-2 text-sky-100">

              {experience.jobTitle}

            </p>

          </div>

          <span className="rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">

            {experience.employmentType}

          </span>

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">

        {/* Location & Duration */}

        <div className="space-y-4">

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">

            <FaMapMarkerAlt className="text-sky-600" />

            <span>

              {experience.location || "Remote"}

            </span>

          </div>

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">

            <FaCalendarAlt className="text-sky-600" />

            <span>

              {experience.startDate}

              {" — "}

              {experience.currentlyWorking
                ? "Present"
                : experience.endDate}

            </span>

          </div>

        </div>

        {/* Description */}

        <div className="mt-8">

          <div className="mb-3 flex items-center gap-2">

            <FaBriefcase className="text-sky-600" />

            <h3 className="font-semibold text-slate-700 dark:text-slate-200">

              Responsibilities

            </h3>

          </div>

          <p className="line-clamp-5 whitespace-pre-line leading-7 text-slate-600 dark:text-slate-300">

            {experience.description}

          </p>

        </div>

        {/* Technologies */}

        <div className="mt-8">

          <h3 className="mb-4 font-semibold text-slate-700 dark:text-slate-200">

            Technologies

          </h3>

          <div className="flex flex-wrap gap-3">

            {experience.technologies?.map((tech) => (

              <TechnologyChip
                key={tech}
                technology={tech}
              />

            ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <button
            onClick={() => onEdit(experience)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 py-3 font-semibold text-white transition hover:scale-105"
          >
            <FaEdit />

            Edit

          </button>

          <button
            onClick={() => onDelete(experience._id)}
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

export default ExperienceCard;