import { useEffect } from "react";
import { useForm } from "react-hook-form";

function ProjectModal({ onClose, onSave, project }) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

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
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-5">
          {project ? "Edit Project" : "Add Project"}
        </h2>

        <form
          onSubmit={handleSubmit(submit)}
          className="space-y-4"
        >
          <input
            {...register("title", { required: true })}
            placeholder="Project Title"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("techStack")}
            placeholder="React, Node, MongoDB"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("github")}
            placeholder="GitHub URL"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("liveDemo")}
            placeholder="Live Demo URL"
            className="w-full border rounded-lg p-3"
          />

          <input
            {...register("image")}
            placeholder="Project Image URL"
            className="w-full border rounded-lg p-3"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              {project ? "Update" : "Save"}
            </button>

          </div>
        </form>

      </div>
    </div>
  );
}

export default ProjectModal;