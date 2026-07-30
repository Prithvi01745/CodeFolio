import { useEffect, useState } from "react";
import {
  getExperience,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../services/experienceService";

import TechnologyChip from "../components/TechnologyChip";
import ExperienceCard from "../components/ExperienceCard";

function ExperienceForm() {

  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [technology, setTechnology] = useState("");

  const [technologies, setTechnologies] = useState([]);

  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    employmentType: "Internship",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });

  // =====================
  // Load
  // =====================

  const loadExperience = async () => {
    try {
      setLoading(true);

      const res = await getExperience();

      if (res.success) {
        setExperience(res.experience);
      }

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExperience();
  }, []);

  // =====================
  // Handle Change
  // =====================

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

  };

  // =====================
  // Technology
  // =====================

  const addTechnology = () => {

    const tech = technology.trim();

    if (!tech) return;

    if (technologies.includes(tech)) return;

    setTechnologies([...technologies, tech]);

    setTechnology("");

  };

  const removeTechnology = (tech) => {

    setTechnologies(
      technologies.filter((item) => item !== tech)
    );

  };

  // =====================
  // Submit
  // =====================

  const handleSubmit = async (e) => {

    e.preventDefault();

    const payload = {
      ...formData,
      technologies,
    };

    try {

      let res;

      if (editingId) {

        res = await updateExperience(
          editingId,
          payload
        );

      } else {

        res = await addExperience(payload);

      }

      if (res.success) {

        loadExperience();

        setEditingId(null);

        setTechnologies([]);

        setTechnology("");

        setFormData({
          company: "",
          jobTitle: "",
          employmentType: "Internship",
          location: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          description: "",
        });

      }

    } catch (err) {
      console.log(err);
    }

  };

  // =====================
  // Edit
  // =====================

  const handleEdit = (item) => {

    setEditingId(item._id);

    setTechnologies(item.technologies || []);

    setFormData({
      company: item.company,
      jobTitle: item.jobTitle,
      employmentType: item.employmentType,
      location: item.location,
      startDate: item.startDate,
      endDate: item.endDate,
      currentlyWorking: item.currentlyWorking,
      description: item.description,
    });

  };

  // =====================
  // Delete
  // =====================

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this experience?"))
      return;

    await deleteExperience(id);

    loadExperience();

  };

  // =====================
  // Search
  // =====================

  const filteredExperience =
    experience.filter((item) => {

      const q = search.toLowerCase();

      return (
        item.company.toLowerCase().includes(q) ||
        item.jobTitle.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
      );

    });
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">

      {/* ================= HERO ================= */}

      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 p-8 text-white shadow-2xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="mb-2 uppercase tracking-[0.3em] text-sky-100">
              CODEFOLIO
            </p>

            <h1 className="text-4xl font-bold">
              Experience Dashboard
            </h1>

            <p className="mt-4 max-w-2xl text-sky-100 leading-7">
              Showcase your internships, jobs, freelance work and professional
              experience with a modern timeline designed to impress recruiters.
            </p>

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                {experience.length}
              </h2>

              <p className="mt-2 text-sm text-sky-100">
                Experience
              </p>

            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                {technologies.length}
              </h2>

              <p className="mt-2 text-sm text-sky-100">
                Technologies
              </p>

            </div>

            <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

              <h2 className="text-3xl font-bold">
                {editingId ? 1 : 0}
              </h2>

              <p className="mt-2 text-sm text-sky-100">
                Editing
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

        <div className="mb-8">

          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

            {editingId
              ? "Update Experience"
              : "Add Experience"}

          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Enter your professional experience below.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Company */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
              Company
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Google"
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          {/* Job Title */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
              Job Title
            </label>

            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Frontend Developer Intern"
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          {/* Employment Type */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
              Employment Type
            </label>

            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option>Internship</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Freelance</option>
              <option>Contract</option>
            </select>

          </div>

          {/* Location */}

          <div>

            <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Mumbai"
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

        </div>

              {/* ================= DATES ================= */}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Start Date
          </label>

          <input
            type="month"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            End Date
          </label>

          <input
            type="month"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            disabled={formData.currentlyWorking}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

      </div>

      {/* ================= CURRENTLY WORKING ================= */}

      <div className="mt-8">

        <label className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-300 dark:border-slate-700 dark:bg-slate-800">

          <input
            type="checkbox"
            name="currentlyWorking"
            checked={formData.currentlyWorking}
            onChange={handleChange}
            className="h-5 w-5 accent-sky-600"
          />

          <div>

            <h3 className="font-semibold text-slate-700 dark:text-white">
              Currently Working Here
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enable this if you're still working in this role.
            </p>

          </div>

        </label>

      </div>

      {/* ================= TECHNOLOGIES ================= */}

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
          Technologies Used
        </label>

        <div className="flex gap-3">

          <input
            type="text"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            placeholder="React, Node.js..."
            className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <button
            type="button"
            onClick={addTechnology}
            className="rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Add
          </button>

        </div>

        <div className="mt-5 flex flex-wrap gap-3">

          {technologies.map((tech) => (

            <TechnologyChip
              key={tech}
              technology={tech}
              onRemove={() => removeTechnology(tech)}
            />

          ))}

        </div>

      </div>

      {/* ================= DESCRIPTION ================= */}

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
          Description
        </label>

        <textarea
          rows="6"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your responsibilities, achievements, and technologies you worked with..."
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

      </div>

      {/* ================= SAVE BUTTON ================= */}

      <div className="mt-10 flex gap-4">

        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
        >
          {editingId
            ? "Update Experience"
            : "Save Experience"}
        </button>

      </div>

    </form>

        {/* ================= SEARCH ================= */}

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900">

      <div className="flex flex-col gap-4 md:flex-row">

        <input
          type="text"
          placeholder="Search by company, job title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

        <button
          type="button"
          onClick={() => setSearch("")}
          className="rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black"
        >
          Clear Search
        </button>

      </div>

    </div>

    {/* ================= EXPERIENCE ================= */}

    {filteredExperience.length === 0 ? (

      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-5xl text-white shadow-xl">
          💼
        </div>

        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
          No Experience Found
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400">
          {search
            ? "No experience matches your search. Try another keyword."
            : "Add your internships, jobs or freelance work to strengthen your portfolio."}
        </p>

      </div>

    ) : (

      <>

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Professional Experience
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Showing {filteredExperience.length} of {experience.length} experiences
            </p>

          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredExperience.map((item) => (

            <ExperienceCard
              key={item._id}
              experience={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

          ))}

        </div>

      </>

    )}

    {/* ================= FOOTER ================= */}

    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-900 to-indigo-900 p-10 text-white shadow-2xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Build Your Professional Journey
          </h2>

          <p className="mt-3 max-w-2xl text-sky-100 leading-7">
            Keep your work experience updated to showcase your career growth,
            internships, achievements, and technical expertise.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {experience.length}
            </h3>

            <p className="mt-2 text-sky-100">
              Experience
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {technologies.length}
            </h3>

            <p className="mt-2 text-sky-100">
              Technologies
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {filteredExperience.length}
            </h3>

            <p className="mt-2 text-sky-100">
              Visible
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
);

}

export default ExperienceForm;