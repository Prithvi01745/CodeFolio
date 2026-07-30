import { FaGithub, FaLinkedin, FaGlobe, FaMoon, FaSun } from "react-icons/fa";

function Hero({ portfolio, darkMode, setDarkMode }) {
  return (
    <section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-100 transition-all dark:from-slate-950 dark:via-slate-900 dark:to-black"
>

  {/* Background */}

  <div className="absolute inset-0 -z-10 overflow-hidden">

    <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"></div>

    <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl"></div>

    <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>

  </div>

  <div className="mx-auto w-full max-w-7xl px-6 py-20">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left */}

      <div>

        <div className="inline-flex items-center gap-3 rounded-full border border-green-300 bg-green-50 px-5 py-2 dark:border-green-700 dark:bg-green-900/30">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500"></span>

          <span className="font-medium text-green-700 dark:text-green-300">
            Available for Opportunities
          </span>

        </div>

        <p className="mt-8 text-lg font-semibold uppercase tracking-[0.35em] text-sky-600">

          Hello, I'm

        </p>

        <h1 className="mt-5 text-6xl font-black leading-tight lg:text-7xl">

          <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">

            {portfolio.name}

          </span>

        </h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-700 dark:text-slate-300">

          {portfolio.title}

        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-400">

          {portfolio.bio}

        </p>

                {/* ================= BUTTONS ================= */}

        <div className="mt-12 flex flex-wrap gap-5">

          {portfolio.resume && (
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">📄</span>

              <span>Download Resume</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          )}

          {portfolio.socialLinks?.github && (
            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
            >
              <FaGithub className="text-xl" />

              GitHub
            </a>
          )}

          {portfolio.socialLinks?.linkedin && (
            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
            >
              <FaLinkedin className="text-xl" />

              LinkedIn
            </a>
          )}

          {portfolio.socialLinks?.website && (
            <a
              href={portfolio.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
            >
              <FaGlobe className="text-xl" />

              Website
            </a>
          )}

        </div>

        {/* ================= STATS ================= */}

        <div className="mt-16 grid grid-cols-3 gap-5">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-4xl font-black text-sky-600">
              {portfolio.projects?.length || 0}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              Projects
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-4xl font-black text-indigo-600">
              {portfolio.skills?.length || 0}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              Skills
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-4xl font-black text-violet-600">
              {portfolio.experience?.length || 0}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              Experience
            </p>

          </div>

        </div>

      </div>

            {/* ================= RIGHT ================= */}

      <div className="relative flex justify-center">

        {/* Background Glow */}

        <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-violet-500/20 blur-3xl"></div>

        {/* Decorative Ring */}

        <div className="absolute h-[360px] w-[360px] rounded-full border border-sky-300/30 dark:border-sky-700/30"></div>

        <div className="absolute h-[450px] w-[450px] rounded-full border border-dashed border-indigo-300/20 dark:border-indigo-700/20"></div>

        {/* Profile Card */}

        <div className="relative z-10 rounded-[40px] border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/60">

          <img
            src={
              portfolio.profileImage ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                portfolio.name
              )}&background=2563eb&color=fff&size=500`
            }
            alt={portfolio.name}
            className="h-80 w-80 rounded-3xl object-cover shadow-2xl"
          />

        </div>

        {/* Floating Card 1 */}

        <div className="absolute -left-8 top-16 hidden rounded-2xl border border-white/30 bg-white/70 p-5 shadow-xl backdrop-blur-xl lg:block dark:border-slate-700 dark:bg-slate-900/70">

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Experience
          </p>

          <h3 className="mt-2 text-3xl font-black text-sky-600">
            {portfolio.experience?.length || 0}+
          </h3>

        </div>

        {/* Floating Card 2 */}

        <div className="absolute -right-8 bottom-16 hidden rounded-2xl border border-white/30 bg-white/70 p-5 shadow-xl backdrop-blur-xl lg:block dark:border-slate-700 dark:bg-slate-900/70">

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Projects
          </p>

          <h3 className="mt-2 text-3xl font-black text-indigo-600">
            {portfolio.projects?.length || 0}+
          </h3>

        </div>

        {/* Floating Card 3 */}

        <div className="absolute bottom-0 left-12 hidden rounded-2xl border border-white/30 bg-white/70 p-5 shadow-xl backdrop-blur-xl lg:block dark:border-slate-700 dark:bg-slate-900/70">

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Skills
          </p>

          <h3 className="mt-2 text-3xl font-black text-violet-600">
            {portfolio.skills?.length || 0}+
          </h3>

        </div>

      </div>

    </div>

  </div>

        {/* ================= SCROLL INDICATOR ================= */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center">

        <span className="mb-3 text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-slate-400 dark:border-slate-600">

          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-sky-500"></div>

        </div>

      </div>

      {/* Decorative Blur */}

      <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>

      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

    </section>
  );
}

export default Hero;