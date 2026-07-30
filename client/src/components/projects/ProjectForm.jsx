import { useState } from "react";
import toast from "react-hot-toast";

import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";
import FileUpload from "../common/FileUpload";
import LoadingButton from "../common/LoadingButton";


function ProjectForm({
  register,
  handleSubmit,
  watch,
  setValue,
  errors,
  onSubmit,
  defaultValues,
}) {
  const [tech, setTech] = useState("");

  const techStack = watch("techStack") || [];

  const addTechnology = () => {
    const value = tech.trim();

    if (!value) return;

    if (techStack.includes(value)) {
      toast.error("Technology already added");
      return;
    }

    setValue("techStack", [...techStack, value]);
    setTech("");
  };

  const removeTechnology = (technology) => {
    setValue(
      "techStack",
      techStack.filter((item) => item !== technology)
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <InputField
        label="Project Title"
        placeholder="Locality Connector"
        register={register}
        name="title"
        required
        errors={errors}
      />

      <TextAreaField
        label="Description"
        placeholder="Describe your project..."
        register={register}
        watch={watch}
        name="description"
      />

      <div>
        <label className="font-semibold block mb-2">
          Technologies
        </label>

        <div className="flex gap-3">
          <input
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="flex-1 border rounded-xl p-3"
            placeholder="React"
          />

          <button
            type="button"
            onClick={addTechnology}
            className="bg-blue-600 text-white px-5 rounded-xl"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((item) => (
            <span
              key={item}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
            >
              {item}

              <button
                type="button"
                onClick={() => removeTechnology(item)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <InputField
        label="GitHub Repository"
        placeholder="https://github.com/..."
        register={register}
        name="repoLink"
        errors={errors}
      />

      <InputField
        label="Live Demo"
        placeholder="https://..."
        register={register}
        name="liveLink"
        errors={errors}
      />

      <FileUpload
        label="Project Screenshot"
        accept="image/*"
        value={watch("screenshot")}
        onUpload={(url) => setValue("screenshot", url)}
      />

      {watch("screenshot") && (
        <img
          src={watch("screenshot")}
          alt="Project"
          className="w-full rounded-xl border"
        />
      )}

      <LoadingButton
        loading={false}
        text={
          defaultValues
            ? "Update Project"
            : "Add Project"
        }
      />
    </form>
  );
}

export default ProjectForm;