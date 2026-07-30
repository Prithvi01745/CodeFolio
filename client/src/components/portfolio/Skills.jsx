import { FaCode, FaTools } from "react-icons/fa";

function Skills({ portfolio }) {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:bg-sky-900/40 dark:text-sky-300">
            My Skills
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I enjoy building scalable, modern, and user-friendly applications
            using the latest technologies and development tools.
          </p>

        </div>

        {/* Skills Grid */}

        {portfolio.skills?.length > 0 ? (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {portfolio.skills.map((skill) => (

              <div
                key={skill._id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              >

                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg">

                  <FaCode size={28} />

                </div>

                {/* Skill Name */}

                <h3 className="text-3xl font-bold text-slate-800 dark:text-white">

                  {skill.skillName}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">

                  {skill.description}

                </p>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>

                {/* Technologies */}

                <div>

                  <div className="mb-4 flex items-center gap-2">

                    <FaTools className="text-sky-600" />

                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                      Technologies
                    </h4>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    {skill.technologies?.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 px-4 py-2 text-sm font-semibold text-sky-700 transition-all duration-300 hover:scale-105 dark:from-slate-800 dark:to-slate-700 dark:text-sky-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl">

              <FaCode size={40} />

            </div>

            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              No Skills Added
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-slate-500 dark:text-slate-400">
              Skills will appear here once they have been added to the portfolio.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Skills;