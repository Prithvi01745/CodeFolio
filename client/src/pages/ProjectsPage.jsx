import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import ProjectForm from "../components/projects/ProjectForm";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";

import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../services/projectService";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      techStack: [],
      repoLink: "",
      liveLink: "",
      screenshot: "",
    },
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const data = await getProjects();

      if (data.success) {
        setProjects(data.projects);
      }
    } catch (error) {
      toast.error("Unable to load projects");
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(formData) {
    try {
      let response;

      if (editingProject) {
        response = await updateProject(editingProject._id, formData);
        toast.success("Project updated");
      } else {
        response = await addProject(formData);
        toast.success("Project added");
      }

      setProjects(response.projects);

      reset({
        title: "",
        description: "",
        techStack: [],
        repoLink: "",
        liveLink: "",
        screenshot: "",
      });

      setEditingProject(null);
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  function handleEdit(project) {
    setEditingProject(project);

    reset(project);

    setOpen(true);
  }

  async function handleDelete(id) {
    if (!confirm("Delete this project?")) return;

    try {
      const response = await deleteProject(id);

      setProjects(response.projects);

      toast.success("Project deleted");
    } catch {
      toast.error("Unable to delete");
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Projects
          </h1>

          <p className="text-gray-500 mt-2">
            Showcase your best work.
          </p>

        </div>

        <button
          onClick={() => {
            reset();
            setEditingProject(null);
            setOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          + Add Project
        </button>

      </div>

      {loading ? (
        <p>Loading...</p>
      ) : projects.length === 0 ? (
        <div className="text-center bg-white rounded-2xl shadow p-16">
          No Projects Yet
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}

        </div>
      )}

      <ProjectModal
        open={open}
        title={
          editingProject
            ? "Edit Project"
            : "Add Project"
        }
        onClose={() => setOpen(false)}
      >
        <ProjectForm
          register={register}
          handleSubmit={handleSubmit}
          watch={watch}
          setValue={setValue}
          errors={errors}
          onSubmit={onSubmit}
          defaultValues={editingProject}
        />
      </ProjectModal>

    </div>
  );
}

export default ProjectsPage;