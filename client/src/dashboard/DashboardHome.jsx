import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import {
  FaArrowRight,
  FaPlus,
  FaUserEdit,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

import Statistics from "./Statistics";

function DashboardHome() {
  const { user } = useContext(Authcontext);
  return (
    <div className="space-y-8 pb-10">

      {/* ================= HERO SECTION ================= */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-10 shadow-2xl">

        {/* Background Effects */}

        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="relative z-10">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-lg">

            <FaRocket />

            Welcome to CodeFolio

          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-white">

            Welcome Back 👋

          </h1>

          <p className="mt-3 text-lg text-blue-200">

            Build • Manage • Showcase your developer portfolio.

          </p>

          <p className="mt-4 max-w-2xl text-blue-100">

            Manage your projects, profile, education, skills and
            experience from one beautiful dashboard.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to={`/portfolio/${user?.username}`}
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
            >
              View Portfolio

              <FaArrowRight />

            </Link>

            <Link
              to="/dashboard/profile"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:bg-white hover:text-blue-700"
            >
              <FaUserEdit />

              Edit Profile

            </Link>

          </div>

        </div>

      </div>

      {/* ================= STATISTICS ================= */}

      <Statistics />

      {/* ================= PORTFOLIO COMPLETION ================= */}

      <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl dark:border-slate-700 dark:bg-slate-900">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">

              Portfolio Completion

            </h2>

            <p className="mt-1 text-gray-500 dark:text-gray-400">

              Complete your profile to improve your portfolio.

            </p>

          </div>

          <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-900">

            <FaChartLine className="text-3xl text-blue-600" />

          </div>

        </div>

        <div className="mt-7 h-4 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-700"
            style={{ width: "80%" }}
          ></div>

        </div>

        <div className="mt-3 flex justify-between">

          <span className="text-gray-500 dark:text-gray-400">

            Keep updating your portfolio.

          </span>

          <span className="font-bold text-blue-600">

            80%

          </span>

        </div>

      </div>

      {/* ================= TWO COLUMN SECTION ================= */}

      <div className="grid gap-6 lg:grid-cols-2">
                {/* ================= PORTFOLIO OVERVIEW ================= */}

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">

              📊 Portfolio Overview

            </h2>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">

              Active

            </span>

          </div>

          <div className="space-y-5">

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">

              <span className="font-medium">Profile Status</span>

              <span className="font-semibold text-green-600">

                In Progress

              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">

              <span className="font-medium">Projects</span>

              <span className="font-semibold text-blue-600">

                Manage →

              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">

              <span className="font-medium">Skills</span>

              <span className="font-semibold text-green-600">

                Manage →

              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">

              <span className="font-medium">Experience</span>

              <span className="font-semibold text-yellow-600">

                Update →

              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">

              <span className="font-medium">Education</span>

              <span className="font-semibold text-purple-600">

                Update →

              </span>

            </div>

          </div>

        </div>

        {/* ================= QUICK ACTIONS ================= */}

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">

            ⚡ Quick Actions

          </h2>

          <div className="grid grid-cols-2 gap-5">

            <Link
              to="/dashboard/projects"
              className="rounded-2xl bg-blue-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-100 hover:shadow-xl dark:bg-blue-950 dark:hover:bg-blue-900"
            >

              <FaPlus className="mb-4 text-3xl text-blue-600" />

              <h3 className="font-semibold">

                Add Project

              </h3>

            </Link>

            <Link
              to="/dashboard/skills"
              className="rounded-2xl bg-green-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-green-100 hover:shadow-xl dark:bg-green-950 dark:hover:bg-green-900"
            >

              <FaPlus className="mb-4 text-3xl text-green-600" />

              <h3 className="font-semibold">

                Add Skill

              </h3>

            </Link>

            <Link
              to="/dashboard/experience"
              className="rounded-2xl bg-yellow-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-100 hover:shadow-xl dark:bg-yellow-950 dark:hover:bg-yellow-900"
            >

              <FaPlus className="mb-4 text-3xl text-yellow-600" />

              <h3 className="font-semibold">

                Add Experience

              </h3>

            </Link>

            <Link
              to="/dashboard/education"
              className="rounded-2xl bg-purple-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-purple-100 hover:shadow-xl dark:bg-purple-950 dark:hover:bg-purple-900"
            >

              <FaPlus className="mb-4 text-3xl text-purple-600" />

              <h3 className="font-semibold">

                Add Education

              </h3>

            </Link>

          </div>

        </div>

      </div>

      {/* ================= MOTIVATION BANNER ================= */}

      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-center text-white shadow-2xl">

        <h2 className="text-3xl font-bold">

          🚀 Every Great Developer Has a Great Portfolio

        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">

          Keep building projects, improve your skills, and showcase your work.
          Your portfolio is your strongest resume.

        </p>

        <Link
          to="/portfolio"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          View My Portfolio

          <FaArrowRight />

        </Link>

      </div>

    </div>
  );
}

export default DashboardHome;