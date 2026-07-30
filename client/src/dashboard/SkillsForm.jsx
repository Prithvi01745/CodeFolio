import { useEffect, useState } from "react";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../services/skillService";

import skillCard from "../components/skillCard";
import TechnologyChip from "../components/TechnologyChip";
import toast from "react-hot-toast";

function SkillsForm() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [technology, setTechnology] = useState("");

  const [technologies, setTechnologies] = useState([]);

  const [formData, setFormData] = useState({
    skillName: "",
    description: "",
  });

  // =========================
  // Load Skills
  // =========================

  const loadSkills = async () => {
    try {
      setLoading(true);

      const res = await getSkills();

      if (res.success) {
        setSkills(res.skills);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  // =========================
  // Form Change
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

    if (
      technologies.some(
        (item) => item.toLowerCase() === tech.toLowerCase()
      )
    ) {
      toast.error("Technology already added.");
      return;
    }

    setTechnologies([...technologies, tech]);

    setTechnology("");
  };

  const removeTechnology = (tech) => {
    setTechnologies(
      technologies.filter((item) => item !== tech)
    );
  };

  // =========================
  // Submit
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.skillName ||
      !formData.description ||
      technologies.length === 0
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    const payload = {
      skillName: formData.skillName,
      description: formData.description,
      technologies,
    };

    try {
      setLoading(true);

      let res;

      if (editingId) {
        res = await updateSkill(editingId, payload);
      } else {
        res = await addSkill(payload);
      }

      if (res.success) {
        await loadSkills();
        toast.success(
          editingId
            ? "Skill updated successfully!"
            : "Skill added successfully!"
        );

        setFormData({
          skillName: "",
          description: "",
        });

        setTechnologies([]);

        setTechnology("");

        setEditingId(null);
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

  const handleEdit = (skill) => {
    setEditingId(skill._id);

    setFormData({
      skillName: skill.skillName,
      description: skill.description,
    });

    setTechnologies(skill.technologies);
  };

  const cancelEditing = () => {
    setEditingId(null);

    setFormData({
      skillName: "",
      description: "",
    });

    setTechnologies([]);

    setTechnology("");
  };

  // =========================
  // Delete
  // =========================

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this skill?")) return;

    try {
      await deleteSkill(id);

      await loadSkills();

      toast.success("Skill deleted successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  const filteredSkills = skills.filter((skill) => {
  const query = search.toLowerCase();

  return (
    skill.skillName?.toLowerCase().includes(query) ||
    skill.description?.toLowerCase().includes(query) ||
    skill.technologies?.some((tech) =>
      tech.toLowerCase().includes(query)
    )
  );
});
    return (
  <div className="mx-auto max-w-7xl space-y-8 p-6">

    {/* ================= HERO ================= */}

    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-2xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="mb-2 text-blue-100 uppercase tracking-[0.3em]">
            CODEFOLIO
          </p>

          <h1 className="text-4xl font-bold">
            Skills Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100 leading-7">
            Showcase your technical expertise with beautifully organized
            skills and technologies. Recruiters can quickly understand
            your strengths through a clean and modern presentation.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <h2 className="text-3xl font-bold">
              {skills.length}
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              Skills
            </p>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <h2 className="text-3xl font-bold">
              {technologies.length}
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <h2 className="text-3xl font-bold">
              {filteredSkills.length}
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              Results
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* ================= FORM ================= */}

    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {editingId ? "Edit Skill" : "Add New Skill"}
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Fill in your skill details and technologies.
          </p>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Skill Name */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Skill Name
          </label>

          <input
            type="text"
            name="skillName"
            maxLength={50}
            value={formData.skillName}
            onChange={handleChange}
            placeholder="Frontend Development"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        {/* Technology */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Technology
          </label>

          <div className="flex gap-3">

            <input
              type="text"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              placeholder="React, Node.js..."
              className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <button
              type="button"
              onClick={addTechnology}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Add
            </button>

          </div>

        </div>

      </div>

            {/* ================= TECHNOLOGY CHIPS ================= */}

      <div className="mt-8">

        <label className="mb-3 block font-semibold text-slate-700 dark:text-slate-300">
          Selected Technologies
        </label>

        {technologies.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            No technologies added yet.
          </div>

        ) : (

          <div className="flex flex-wrap gap-3">

            {technologies.map((tech) => (

              <TechnologyChip
                key={tech}
                technology={tech}
                onRemove={() => removeTechnology(tech)}
              />

            ))}

          </div>

        )}

      </div>

      {/* ================= DESCRIPTION ================= */}

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
          Description
        </label>

        <textarea
          rows="6"
          maxLength={500}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your expertise, experience, tools you use, and what you are confident in..."
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

        <div className="mt-2 flex justify-between">

          <span className="text-sm text-slate-500 dark:text-slate-400">
            Maximum 500 characters
          </span>

          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {formData.description.length}/500
          </span>

        </div>

      </div>

      {/* ================= ACTION BUTTONS ================= */}

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Saving..."
            : editingId
            ? "Update Skill"
            : "Save Skill"}
        </button>

        {editingId && (

          <button
            type="button"
            onClick={cancelEditing}
            className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Cancel
          </button>

        )}

      </div>

    </form>

    {/* ================= SEARCH ================= */}

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900">

      <div className="flex flex-col gap-4 md:flex-row">

        <input
          type="text"
          placeholder="Search by skill, technology or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

        <button
          type="button"
          onClick={() => setSearch("")}
          className="rounded-2xl bg-slate-800 px-8 py-4 font-semibold text-white transition hover:bg-black"
        >
          Clear Search
        </button>

      </div>

    </div>

        {/* ================= SKILLS ================= */}

    {filteredSkills.length === 0 ? (

      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-5xl text-white shadow-xl">
          💻
        </div>

        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
          No Skills Found
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400">
          {search
            ? "No skills match your current search. Try another keyword."
            : "Start building your portfolio by adding your first professional skill."}
        </p>

      </div>

    ) : (

      <>

        {/* Section Header */}

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Your Skills
            </h2>

            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Showing {filteredSkills.length} of {skills.length} skills.
            </p>

          </div>

        </div>

        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredSkills.map((skill) => (

            <SkillCard
              key={skill._id}
              skill={skill}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          ))}

        </div>

      </>

    )}

    {/* ================= FOOTER ================= */}

    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-10 text-white shadow-2xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Keep Growing Your Skill Set
          </h2>

          <p className="mt-3 max-w-2xl text-blue-100 leading-7">
            Continuously update your technical skills and technologies.
            A well-maintained portfolio demonstrates continuous learning
            and helps recruiters quickly understand your strengths.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {skills.length}
            </h3>

            <p className="mt-2 text-blue-100">
              Skills
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {technologies.length}
            </h3>

            <p className="mt-2 text-blue-100">
              Technologies
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {filteredSkills.length}
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

export default SkillsForm;