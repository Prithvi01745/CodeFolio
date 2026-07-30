import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";
import Education from "../components/portfolio/Education";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

function DeveloperTemplate({ portfolio }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (!portfolio) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-sky-500"></div>

          <h2 className="mt-6 text-3xl font-bold text-white">
            Loading Portfolio...
          </h2>

          <p className="mt-3 text-slate-400">
            Preparing your professional portfolio
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden scroll-smooth bg-gradient-to-br from-slate-50 via-white to-sky-50 text-gray-900 transition-all duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white">

      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
      </div>

      {/* Back to Dashboard */}
      <Link
        to="/dashboard"
        className="fixed left-6 top-6 z-50 flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 text-gray-800 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-700"
      >
        <FaArrowLeft />
        <span className="font-semibold">Back to Dashboard</span>
      </Link>

      {/* Hero */}
      <Hero
        portfolio={portfolio}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* About */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <About portfolio={portfolio} />
      </section>

      {/* Skills */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <Skills portfolio={portfolio} />
      </section>

      {/* Projects */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <Projects portfolio={portfolio} />
      </section>

      {/* Experience */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <Experience portfolio={portfolio} />
      </section>

      {/* Education */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <Education portfolio={portfolio} />
      </section>

      {/* Contact */}
      <section className="mx-auto mt-24 max-w-7xl px-6 pb-20">
        <Contact portfolio={portfolio} />
      </section>

      {/* Footer */}
      <Footer portfolio={portfolio} />

    </div>
  );
}

export default DeveloperTemplate;