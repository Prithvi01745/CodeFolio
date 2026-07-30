import { useEffect, useState } from "react";
import {
  getEducation,
  addEducation,
  updateEducation,
  deleteEducation,
} from "../services/educationService";
import toast from "react-hot-toast";

function EducationForm() {
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    location: "",
    startYear: "",
    endYear: "",
    grade: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  const fetchEducation = async () => {
    try {
        const res = await getEducation();

        if (res.success) {
        setEducation(res.education);
        }
    } catch (err) {
        console.error(err);
        toast.error("Failed to load education");
    }
    };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      location: "",
      startYear: "",
      endYear: "",
      grade: "",
      description: "",
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        let res;

        if (editingId) {
        res = await updateEducation(editingId, form);
        } else {
        res = await addEducation(form);
        }

        if (res.success) {
        toast.success(
            editingId
            ? "Education updated successfully"
            : "Education added successfully"
        );

        resetForm();
        fetchEducation();
        }
    } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
    }
    };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm(item);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this education record?")) return;

    try {
        const res = await deleteEducation(id);

        if (res.success) {
        toast.success("Education deleted successfully");
        fetchEducation();
        }
    } catch (err) {
        console.error(err);
        toast.error("Delete failed");
    }
    };

  return (
  <div className="mx-auto max-w-7xl space-y-8 p-6">

    {/* ================= HERO ================= */}

    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8 text-white shadow-2xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="mb-2 uppercase tracking-[0.3em] text-indigo-100">
            CODEFOLIO
          </p>

          <h1 className="text-4xl font-bold">
            Education Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-indigo-100 leading-7">
            Showcase your educational journey with a professional timeline.
            Highlight your degree, university, achievements and academic
            performance to make your portfolio more impressive.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <h2 className="text-3xl font-bold">
              {education.length}
            </h2>

            <p className="mt-2 text-sm text-indigo-100">
              Records
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <h2 className="text-3xl font-bold">
              {editingId ? "1" : "0"}
            </h2>

            <p className="mt-2 text-sm text-indigo-100">
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
            ? "Update Education"
            : "Add Education"}

        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Fill in your academic details below.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Institution */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Institution
          </label>

          <input
            name="institution"
            value={form.institution}
            onChange={handleChange}
            placeholder="Mumbai University"
            required
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        {/* Degree */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Degree
          </label>

          <input
            name="degree"
            value={form.degree}
            onChange={handleChange}
            placeholder="Bachelor of Engineering"
            required
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        {/* Field of Study */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Field of Study
          </label>

          <input
            name="fieldOfStudy"
            value={form.fieldOfStudy}
            onChange={handleChange}
            placeholder="Computer Engineering"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        {/* Location */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Location
          </label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Mumbai, Maharashtra"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

      </div>

            {/* ================= YEARS ================= */}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Start Year
          </label>

          <input
            name="startYear"
            value={form.startYear}
            onChange={handleChange}
            placeholder="2023"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            End Year
          </label>

          <input
            name="endYear"
            value={form.endYear}
            onChange={handleChange}
            placeholder="2027"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

      </div>

      {/* ================= GRADE ================= */}

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
          Grade / CGPA
        </label>

        <input
          name="grade"
          value={form.grade}
          onChange={handleChange}
          placeholder="7.62 CGPA"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

      </div>

      {/* ================= DESCRIPTION ================= */}

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
          Description
        </label>

        <textarea
          name="description"
          rows="5"
          value={form.description}
          onChange={handleChange}
          placeholder="Describe your academic achievements, coursework, projects, honors, extracurricular activities, or anything that highlights your educational journey..."
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />

        <div className="mt-2 flex justify-end">

          <span className="text-sm text-slate-500 dark:text-slate-400">
            {form.description.length} characters
          </span>

        </div>

      </div>

      {/* ================= BUTTONS ================= */}

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          type="submit"
          className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          {editingId ? "Update Education" : "Add Education"}
        </button>

        {editingId && (

          <button
            type="button"
            onClick={resetForm}
            className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Cancel
          </button>

        )}

      </div>

    </form>

        {/* ================= EDUCATION LIST ================= */}

    {education.length === 0 ? (

      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-5xl text-white shadow-xl">
          🎓
        </div>

        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
          No Education Records
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400">
          Add your academic qualifications to build a stronger professional portfolio.
        </p>

      </div>

    ) : (

      <div className="space-y-8">

        {education.map((item) => (

          <div
            key={item._id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          >

            {/* Header */}

            <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-6 text-white">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.degree}
                  </h2>

                  <p className="mt-2 text-indigo-100 text-lg">
                    {item.institution}
                  </p>

                </div>

                <div className="rounded-2xl bg-white/20 px-5 py-3 backdrop-blur">

                  <span className="font-semibold">
                    {item.startYear} - {item.endYear}
                  </span>

                </div>

              </div>

            </div>

            {/* Body */}

            <div className="p-8">

              <div className="flex flex-wrap gap-3 mb-6">

                {item.fieldOfStudy && (

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-slate-800 dark:text-blue-300">
                    🎓 {item.fieldOfStudy}
                  </span>

                )}

                {item.location && (

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-slate-800 dark:text-green-300">
                    📍 {item.location}
                  </span>

                )}

                {item.grade && (

                  <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 dark:bg-slate-800 dark:text-yellow-300">
                    ⭐ {item.grade}
                  </span>

                )}

              </div>

              {item.description && (

                <p className="leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

              )}

              {/* Buttons */}

              <div className="mt-8 flex gap-4">

                <button
                  onClick={() => handleEdit(item)}
                  className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  ✏ Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="rounded-2xl bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  🗑 Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    )}

    {/* ================= FOOTER ================= */}

    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900 p-10 text-white shadow-2xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Education Builds Your Foundation
          </h2>

          <p className="mt-3 max-w-2xl text-indigo-100 leading-7">
            Keep your academic information updated to help recruiters
            understand your educational background and qualifications.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {education.length}
            </h3>

            <p className="mt-2 text-indigo-100">
              Records
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

            <h3 className="text-4xl font-bold">
              {editingId ? 1 : 0}
            </h3>

            <p className="mt-2 text-indigo-100">
              Editing
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
);

}

export default EducationForm;