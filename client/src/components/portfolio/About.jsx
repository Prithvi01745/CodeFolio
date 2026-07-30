import {
  FaUserGraduate,
  FaLaptopCode,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";

function About({ portfolio }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:bg-sky-900/40 dark:text-sky-300">
            About Me
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Know More About Me
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Passionate about building scalable web applications,
            solving real-world problems, and continuously learning
            modern technologies.
          </p>

        </div>

        {/* Main Layout */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <span className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2 font-semibold text-white">
              {portfolio.title}
            </span>

            <h3 className="mt-8 text-4xl font-black leading-tight">

              Building Digital Products
              <br />

              That Make an Impact.

            </h3>

            <p className="mt-8 text-lg leading-9 text-slate-600 dark:text-slate-400">

              {portfolio.bio ||
                "Passionate software developer with experience in React, Node.js, Express and MongoDB. I enjoy transforming ideas into modern, scalable, and user-friendly applications while continuously learning new technologies."}

            </p>

            <div className="mt-10 flex items-center gap-3 font-semibold text-sky-600">

              <span>Let's Build Something Amazing</span>

              <FaArrowRight />

            </div>

          </div>

          {/* Right Side */}

          <div className="grid gap-6 sm:grid-cols-2">

            {/* Projects */}

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 dark:bg-slate-800">

                <FaProjectDiagram
                  size={30}
                  className="text-sky-600"
                />

              </div>

              <h3 className="text-5xl font-black text-sky-600">

                {portfolio.projects?.length || 0}

              </h3>

              <p className="mt-3 text-lg font-semibold">

                Projects

              </p>

              <p className="mt-2 text-slate-500 dark:text-slate-400">

                Successfully completed portfolio and real-world projects.

              </p>

            </div>

            {/* Skills */}

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-slate-800">

                <FaLaptopCode
                  size={30}
                  className="text-indigo-600"
                />

              </div>

              <h3 className="text-5xl font-black text-indigo-600">

                {portfolio.skills?.length || 0}

              </h3>

              <p className="mt-3 text-lg font-semibold">

                Skills

              </p>

              <p className="mt-2 text-slate-500 dark:text-slate-400">

                Modern technologies used to build scalable applications.

              </p>

            </div>

            {/* Education */}

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:col-span-2">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 dark:bg-slate-800">

                    <FaUserGraduate
                      size={30}
                      className="text-violet-600"
                    />

                  </div>

                  <h3 className="text-5xl font-black text-violet-600">

                    {portfolio.education?.length || 0}

                  </h3>

                  <p className="mt-3 text-lg font-semibold">

                    Education

                  </p>

                  <p className="mt-2 text-slate-500 dark:text-slate-400">

                    Academic qualifications and certifications that
                    shaped my technical journey.

                  </p>

                </div>

                <div className="rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 px-8 py-6 text-center text-white shadow-xl">

                  <h3 className="text-4xl font-black">

                    {portfolio.projects?.length || 0}+

                  </h3>

                  <p className="mt-2">

                    Portfolio Highlights

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;