import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaUserCircle,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

import FileUpload from "../components/common/FileUpload";
import LoadingButton from "../components/common/LoadingButton";

import {
  getProfile,
  updateProfile,
} from "../services/profileService";

function ProfileForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const values = watch();

  const fields = [
    values.name,
    values.username,
    values.title,
    values.bio,
    values.profileImage,
    values.resume,
    values.socialLinks?.github,
  ];

  const percentage = Math.round(
    (fields.filter(Boolean).length / fields.length) * 100
  );

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const data = await getProfile();
      reset(data.user);
    } catch (err) {
      console.log(err);
    }
  }

  async function onSubmit(formData) {
    try {
      await updateProfile(formData);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update profile");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* ================= HERO ================= */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-10 text-white shadow-2xl">

        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>

            <h1 className="text-5xl font-extrabold">

              👤 My Profile

            </h1>

            <p className="mt-3 text-lg text-blue-100">

              Manage your personal information, social links,
              resume and portfolio profile.

            </p>

          </div>

          <div className="flex flex-col items-center">

            {watch("profileImage") ? (

              <img
                src={watch("profileImage")}
                alt="Profile"
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-2xl"
              />

            ) : (

              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg">

                <FaUserCircle className="text-7xl text-white" />

              </div>

            )}

            <p className="mt-4 text-lg font-semibold">

              {watch("name") || "Your Name"}

            </p>

            <p className="text-blue-200">

              {watch("title") || "Professional Title"}

            </p>

          </div>

        </div>

      </div>

      {/* ================= FORM ================= */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
      >

        {/* ================= BASIC INFO ================= */}

        <div>

          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">

            Personal Information

          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Name */}

            <div>

              <label className="font-semibold">

                Full Name

              </label>

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

              {errors.name && (

                <p className="mt-1 text-sm text-red-500">

                  {errors.name.message}

                </p>

              )}

            </div>

            {/* Username */}

            <div>

              <label className="font-semibold">

                Username

              </label>

              <input
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
                placeholder="Username"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

              {errors.username && (

                <p className="mt-1 text-sm text-red-500">

                  {errors.username.message}

                </p>

              )}

            </div>

            {/* Email */}

            <div>

              <label className="font-semibold">

                Email

              </label>

              <input
                value={watch("email") || ""}
                disabled
                className="mt-2 w-full rounded-xl border bg-slate-100 p-3 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
              />

            </div>

            {/* Title */}

            <div>

              <label className="font-semibold">

                Professional Title

              </label>

              <input
                {...register("title")}
                placeholder="Full Stack Developer"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

            </div>

          </div>

        </div>
                {/* ================= BIO ================= */}

        <div>

          <label className="text-lg font-semibold text-slate-800 dark:text-white">

            About You

          </label>

          <textarea
            rows="5"
            maxLength={300}
            {...register("bio")}
            placeholder="Tell recruiters something about yourself..."
            className="mt-3 w-full rounded-2xl border border-slate-300 bg-white p-4 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <div className="mt-2 flex justify-between">

            <p className="text-sm text-slate-500">

              Introduce yourself professionally.

            </p>

            <span className="text-sm font-medium text-blue-600">

              {(watch("bio") || "").length}/300

            </span>

          </div>

        </div>

        {/* ================= SOCIAL LINKS ================= */}

        <div>

          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">

            Social Links

          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* GitHub */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <FaGithub className="text-xl" />

                GitHub

              </label>

              <input
                {...register("socialLinks.github")}
                placeholder="https://github.com/username"
                className="w-full rounded-xl border border-slate-300 bg-white p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

            </div>

            {/* LinkedIn */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <FaLinkedin className="text-xl text-blue-600" />

                LinkedIn

              </label>

              <input
                {...register("socialLinks.linkedin")}
                placeholder="https://linkedin.com/in/username"
                className="w-full rounded-xl border border-slate-300 bg-white p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

            </div>

            {/* Website */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <FaGlobe className="text-xl text-green-600" />

                Website

              </label>

              <input
                {...register("socialLinks.website")}
                placeholder="https://yourwebsite.com"
                className="w-full rounded-xl border border-slate-300 bg-white p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />

            </div>

          </div>

        </div>

        {/* ================= FILES ================= */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Resume */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

            <h3 className="mb-4 text-xl font-bold text-slate-800 dark:text-white">

              📄 Resume

            </h3>

            <FileUpload
              label="Upload Resume"
              accept=".pdf"
              value={watch("resume")}
              onUpload={(url) => setValue("resume", url)}
            />

            {watch("resume") && (

              <a
                href={watch("resume")}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >

                View Resume

              </a>

            )}

          </div>

          {/* Profile Image */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

            <h3 className="mb-4 text-xl font-bold text-slate-800 dark:text-white">

              🖼 Profile Image

            </h3>

            <FileUpload
              label="Upload Profile Image"
              accept="image/*"
              value={watch("profileImage")}
              onUpload={(url) => setValue("profileImage", url)}
            />

            <div className="mt-6 flex justify-center">

              {watch("profileImage") ? (

                <img
                  src={watch("profileImage")}
                  alt="Profile"
                  className="h-40 w-40 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
                />

              ) : (

                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">

                  <FaUserCircle className="text-7xl text-slate-400" />

                </div>

              )}

            </div>

          </div>

        </div>

                {/* ================= PROFILE COMPLETION ================= */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 p-3 text-white">

                  <FaChartLine className="text-2xl" />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

                    Profile Completion

                  </h2>

                  <p className="text-slate-500 dark:text-slate-400">

                    Complete your profile to improve your portfolio.

                  </p>

                </div>

              </div>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-extrabold text-blue-600">

                {percentage}%

              </h2>

              <p className="text-sm text-slate-500">

                Completed

              </p>

            </div>

          </div>

          <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-700"
              style={{ width: `${percentage}%` }}
            ></div>

          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-blue-50 p-4 dark:bg-blue-950">

              <p className="text-sm text-slate-500">

                Name

              </p>

              <p className="mt-2 font-semibold">

                {watch("name") ? "Completed" : "Pending"}

              </p>

            </div>

            <div className="rounded-2xl bg-green-50 p-4 dark:bg-green-950">

              <p className="text-sm text-slate-500">

                Profile Photo

              </p>

              <p className="mt-2 font-semibold">

                {watch("profileImage") ? "Completed" : "Pending"}

              </p>

            </div>

            <div className="rounded-2xl bg-yellow-50 p-4 dark:bg-yellow-950">

              <p className="text-sm text-slate-500">

                Resume

              </p>

              <p className="mt-2 font-semibold">

                {watch("resume") ? "Uploaded" : "Pending"}

              </p>

            </div>

            <div className="rounded-2xl bg-purple-50 p-4 dark:bg-purple-950">

              <p className="text-sm text-slate-500">

                GitHub

              </p>

              <p className="mt-2 font-semibold">

                {watch("socialLinks.github") ? "Connected" : "Pending"}

              </p>

            </div>

          </div>

        </div>

        {/* ================= LIVE PREVIEW ================= */}

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-8 shadow-2xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">

          <h2 className="mb-8 text-3xl font-bold text-slate-800 dark:text-white">

            👀 Live Portfolio Preview

          </h2>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

            <div className="flex justify-center">

              {watch("profileImage") ? (

                <img
                  src={watch("profileImage")}
                  alt="Profile"
                  className="h-44 w-44 rounded-full border-4 border-white object-cover shadow-2xl ring-4 ring-blue-500"
                />

              ) : (

                <div className="flex h-44 w-44 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700">

                  <FaUserCircle className="text-8xl text-slate-500" />

                </div>

              )}

            </div>

            <div className="flex-1">

              <h2 className="text-4xl font-bold text-slate-800 dark:text-white">

                {watch("name") || "Your Name"}

              </h2>

              <p className="mt-2 text-xl font-medium text-blue-600">

                {watch("title") || "Professional Title"}

              </p>

              <p className="mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">

                {watch("bio") ||
                  "Your professional bio will appear here. Introduce yourself, your skills and experience."}

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {watch("socialLinks.github") && (

                  <a
                    href={watch("socialLinks.github")}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:scale-105"
                  >

                    GitHub

                  </a>

                )}

                {watch("socialLinks.linkedin") && (

                  <a
                    href={watch("socialLinks.linkedin")}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:scale-105"
                  >

                    LinkedIn

                  </a>

                )}

                {watch("socialLinks.website") && (

                  <a
                    href={watch("socialLinks.website")}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-green-600 px-5 py-3 text-white transition hover:scale-105"
                  >

                    Website

                  </a>

                )}

              </div>

            </div>

          </div>

        </div>

                {/* ================= SAVE CHANGES ================= */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-2xl">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>

              <h2 className="text-3xl font-bold">

                🚀 Ready to Publish?

              </h2>

              <p className="mt-2 text-blue-100">

                Save your latest changes to instantly update your portfolio.

              </p>

            </div>

            <div className="min-w-[220px]">

              <LoadingButton
                loading={isSubmitting}
                text="💾 Save Changes"
              />

            </div>

          </div>

        </div>

      </form>

      {/* ================= FOOTER ================= */}

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

          🌟 Build Your Personal Brand

        </h2>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">

          A strong portfolio tells your story better than a resume.
          Keep your projects, skills, education and experience updated so
          recruiters can see your growth and achievements.

        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <div className="rounded-2xl bg-blue-50 px-6 py-4 shadow dark:bg-blue-950">

            <h3 className="text-3xl font-bold text-blue-600">

              {percentage}%

            </h3>

            <p className="text-sm text-slate-500">

              Profile Complete

            </p>

          </div>

          <div className="rounded-2xl bg-green-50 px-6 py-4 shadow dark:bg-green-950">

            <h3 className="text-3xl font-bold text-green-600">

              {fields.filter(Boolean).length}

            </h3>

            <p className="text-sm text-slate-500">

              Sections Completed

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileForm;