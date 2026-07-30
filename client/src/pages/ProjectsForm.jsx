import { useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  uploadProjectImage,
} from "../services/projectService";

import TechnologyChip from "../components/TechnologyChip";
import ProjectCard from "../components/ProjectCard";
import toast from "react-hot-toast";

function ProjectsForm() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [technology, setTechnology] = useState("");

  const [techStack, setTechStack] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    repoLink: "",
    liveLink: "",
    screenshot: "",
    featured: false,
  });

  // =========================
  // Load Projects
  // =========================

  const loadProjects = async () => {
    try {
      setLoading(true);

      const res = await getProjects();

      if (res.success) {
        setProjects(res.projects);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // =========================
  // Handle Input
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // Technology Chips
  // =========================

  const addTechnology = () => {
    const tech = technology.trim();

    if (!tech) return;

    if (techStack.includes(tech)) return;

    setTechStack([...techStack, tech]);

    setTechnology("");
  };

  const removeTechnology = (tech) => {
    setTechStack(
      techStack.filter((item) => item !== tech)
    );
  };

  // =========================
  // Upload Image
  // =========================

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setUploading(true);

      const res = await uploadProjectImage(file);

      if (res.success) {
        setFormData((prev) => ({
          ...prev,
          screenshot: res.imageUrl,
        }));
      }
    } catch (err) {
      console.log(err);
      toast.error("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  // =========================
  // Submit
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error("Please fill all required fields.");
      return;
    }

    const payload = {
      title: formData.title,
      description: formData.description,
      techStack,
      repoLink: formData.repoLink,
      liveLink: formData.liveLink,
      screenshot: formData.screenshot,
      featured: formData.featured,
    };

    try {
      setLoading(true);

      let res;

      if (editingId) {
        res = await updateProject(editingId, payload);
      } else {
        res = await addProject(payload);
      }

      if (res.success) {
        await loadProjects();

        toast.success(
          editingId
            ? "Project updated successfully!"
            : "Project added successfully!"
        );

        cancelEditing();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Edit
  // =========================

  const handleEdit = (project) => {
    setEditingId(project._id);

    setFormData({
      title: project.title,
      description: project.description,
      repoLink: project.repoLink,
      liveLink: project.liveLink,
      screenshot: project.screenshot,
      featured: project.featured || false,
    });

    setTechStack(project.techStack || []);
  };

  // =========================
  // Delete
  // =========================

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await deleteProject(id);

      await loadProjects();

      toast.success("Project deleted successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  const cancelEditing = () => {
    setEditingId(null);

    setFormData({
      title: "",
      description: "",
      repoLink: "",
      liveLink: "",
      screenshot: "",
      featured: false,
    });

    setTechStack([]);

    setTechnology("");
  };

  // =========================
  // Search
  // =========================

  const filteredProjects = projects.filter((project) => {
    const query = search.toLowerCase();

    return (
      project.title?.toLowerCase().includes(query) ||
      project.description?.toLowerCase().includes(query) ||
      project.techStack?.some((tech) =>
        tech.toLowerCase().includes(query)
      )
    );
  });

  const featuredCount = projects.filter(
    (project) => project.featured
  ).length;

  const technologiesCount = new Set(
    projects.flatMap((project) => project.techStack || [])
  ).size;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* ================= HERO ================= */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-10 text-white shadow-2xl">

        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="relative z-10">

          <h1 className="text-5xl font-extrabold">

            🚀 Projects Dashboard

          </h1>

          <p className="mt-4 max-w-3xl text-lg text-blue-100">

            Add, edit and manage your portfolio projects with
            screenshots, GitHub repositories and live demos.

          </p>

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <p className="text-sm text-slate-500">

            Total Projects

          </p>

          <h2 className="mt-3 text-4xl font-bold text-blue-600">

            {projects.length}

          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <p className="text-sm text-slate-500">

            Featured Projects

          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">

            {featuredCount}

          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">

          <p className="text-sm text-slate-500">

            Technologies

          </p>

          <h2 className="mt-3 text-4xl font-bold text-purple-600">

            {technologiesCount}

          </h2>

        </div>

      </div>

            {/* ================= PROJECT FORM ================= */}

      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
      >
        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">

              {editingId ? "✏ Edit Project" : "➕ Add New Project"}

            </h2>

            <p className="mt-2 text-slate-500">

              Fill all project details to showcase your work professionally.

            </p>

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Project Title */}

          <div>

            <label className="mb-2 block font-semibold">

              Project Title

            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="AI Smart Shopping Trolley"
              className="w-full rounded-2xl border border-slate-300 bg-white p-4 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          {/* Project Image */}

          <div>

            <label className="mb-2 block font-semibold">

              Project Screenshot

            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full rounded-2xl border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
            />

            {uploading && (

              <p className="mt-3 text-blue-600">

                Uploading image...

              </p>

            )}

            {formData.screenshot && (

              <img
                src={formData.screenshot}
                alt="Preview"
                className="mt-5 h-60 w-full rounded-2xl border object-cover shadow-xl"
              />

            )}

          </div>

        </div>

        {/* Description */}

        <div className="mt-8">

          <label className="mb-2 block font-semibold">

            Project Description

          </label>

          <textarea
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project..."
            className="w-full rounded-2xl border border-slate-300 bg-white p-4 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        {/* Technology Stack */}

        <div className="mt-8">

          <label className="mb-3 block font-semibold">

            Technology Stack

          </label>

          <div className="flex gap-4">

            <input
              type="text"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              placeholder="React"
              className="flex-1 rounded-2xl border border-slate-300 bg-white p-4 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <button
              type="button"
              onClick={addTechnology}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-white transition hover:scale-105"
            >

              Add

            </button>

          </div>

          <div className="mt-5 flex flex-wrap gap-3">

            {techStack.map((tech) => (

              <TechnologyChip
                key={tech}
                technology={tech}
                onRemove={() => removeTechnology(tech)}
              />

            ))}

          </div>

        </div>

        {/* Repository & Live Demo */}

        <div className="mt-8 grid gap-8 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-semibold">

              GitHub Repository

            </label>

            <input
              type="text"
              name="repoLink"
              value={formData.repoLink}
              onChange={handleChange}
              placeholder="https://github.com/username/project"
              className="w-full rounded-2xl border border-slate-300 bg-white p-4 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold">

              Live Demo

            </label>

            <input
              type="text"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://project-demo.vercel.app"
              className="w-full rounded-2xl border border-slate-300 bg-white p-4 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

        </div>

        {/* Featured */}

        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(e) =>
              setFormData({
                ...formData,
                featured: e.target.checked,
              })
            }
            className="h-5 w-5"
          />

          <label className="font-semibold">

            ⭐ Mark as Featured Project

          </label>

        </div>

        {/* Action Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
          >

            {loading
              ? "Saving..."
              : editingId
              ? "Update Project"
              : "Save Project"}

          </button>

          {editingId && (

            <button
              type="button"
              onClick={cancelEditing}
              className="rounded-2xl bg-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-700"
            >

              Cancel

            </button>

          )}

        </div>

      </form>

            {/* ================= SEARCH ================= */}

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-900">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

              🔍 Search Projects

            </h2>

            <p className="mt-2 text-slate-500">

              Quickly find any project by title, description or technology.

            </p>

          </div>

          <div className="flex w-full gap-4 lg:w-[500px]">

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-2xl border border-slate-300 bg-white p-4 transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <button
              type="button"
              onClick={() => setSearch("")}
              className="rounded-2xl bg-slate-700 px-8 text-white transition hover:bg-slate-800"
            >

              Clear

            </button>

          </div>

        </div>

      </div>

      {/* ================= PROJECTS HEADER ================= */}

      <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">

            📁 My Projects

          </h2>

          <p className="mt-2 text-slate-500">

            Showing <span className="font-semibold">{filteredProjects.length}</span> project(s)

          </p>

        </div>

        <div className="flex gap-4">

          <div className="rounded-2xl bg-blue-50 px-6 py-4 shadow dark:bg-slate-800">

            <p className="text-sm text-slate-500">

              Total

            </p>

            <h3 className="text-2xl font-bold text-blue-600">

              {projects.length}

            </h3>

          </div>

          <div className="rounded-2xl bg-green-50 px-6 py-4 shadow dark:bg-slate-800">

            <p className="text-sm text-slate-500">

              Featured

            </p>

            <h3 className="text-2xl font-bold text-green-600">

              {featuredCount}

            </h3>

          </div>

        </div>

      </div>

      {/* ================= PROJECT LIST ================= */}

      {filteredProjects.length === 0 ? (

        <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">

            <span className="text-5xl">

              📂

            </span>

          </div>

          <h2 className="mt-8 text-3xl font-bold text-slate-800 dark:text-white">

            No Projects Found

          </h2>

          <p className="mx-auto mt-4 max-w-lg text-slate-500">

            No project matches your search. Add your first project or try a different keyword.

          </p>

        </div>

      ) : (

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredProjects.map((project) => (

            <ProjectCard
              key={project._id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}

            {/* ================= FOOTER ================= */}

      <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-10 text-white shadow-2xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-3xl font-bold">

              🚀 Keep Building Amazing Projects

            </h2>

            <p className="mt-3 max-w-2xl text-blue-100 leading-7">

              A strong portfolio is built by consistently adding high-quality
              projects. Keep your GitHub repositories, live demos, screenshots,
              and technology stacks updated to impress recruiters.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">

                {projects.length}

              </h3>

              <p className="mt-2 text-blue-100">

                Projects

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">

                {featuredCount}

              </h3>

              <p className="mt-2 text-blue-100">

                Featured

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">

                {technologiesCount}

              </h3>

              <p className="mt-2 text-blue-100">

                Technologies

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

              <h3 className="text-4xl font-bold">

                {filteredProjects.length}

              </h3>

              <p className="mt-2 text-blue-100">

                Visible

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectsForm;