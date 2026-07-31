import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaTimes,
  FaFolderOpen,
  FaGithub,
  FaGlobe,
  FaImage,
  FaCode,
} from "react-icons/fa";

function ProjectModal({ onClose, onSave, project }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (project) {
      reset(project);
    } else {
      reset({
        title: "",
        description: "",
        techStack: "",
        github: "",
        liveDemo: "",
        image: "",
      });
    }
  }, [project, reset]);

  const submit = (data) => {
    onSave(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5">

      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-8 py-6 text-white">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold">
                {project ? "Edit Project" : "Add New Project"}
              </h2>

              <p className="mt-2 text-blue-100">
                Showcase your best work in your portfolio.
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-xl bg-white/20 p-3 transition hover:bg-white/30"
            >
              <FaTimes size={18} />
            </button>

          </div>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(submit)}
          className="space-y-6 p-8"
        >

          {/* Project Title */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Project Title
            </label>

            <input
              {...register("title", { required: true })}
              placeholder="Portfolio Website"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          {/* Description */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-200">
              Description
            </label>

            <textarea
              rows={5}
              {...register("description")}
              placeholder="Describe your project..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          {/* Tech Stack */}

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
              <FaCode />
              Tech Stack
            </label>

            <input
              {...register("techStack")}
              placeholder="React, Node.js, Express, MongoDB"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          {/* Two Column Layout */}

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
                <FaGithub />
                GitHub URL
              </label>

              <input
                {...register("github")}
                placeholder="https://github.com/..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
                <FaGlobe />
                Live Demo
              </label>

              <input
                {...register("liveDemo")}
                placeholder="https://yourwebsite.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

            </div>

          </div>

          {/* Image */}

          <div>

            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
              <FaImage />
              Project Image URL
            </label>

            <input
              {...register("image")}
              placeholder="https://..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          {/* Preview Box */}

          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-800">

            <FaFolderOpen
              size={48}
              className="mx-auto text-blue-500"
            />

            <h3 className="mt-4 text-xl font-semibold text-slate-800 dark:text-white">
              Your Project will appear as a premium portfolio card.
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Fill in the project details and save to update your portfolio.
            </p>

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 border-t border-slate-200 pt-6 dark:border-slate-700">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {project ? "Update Project" : "Save Project"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ProjectModal;