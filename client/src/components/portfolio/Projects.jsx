import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCode,
} from "react-icons/fa";

function Projects({ portfolio }) {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:bg-sky-900/40 dark:text-sky-300">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A collection of projects that showcase my technical skills,
            creativity, problem-solving ability, and passion for building
            modern applications.
          </p>

        </div>

        {/* Projects */}

        {portfolio.projects?.length > 0 ? (

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {portfolio.projects.map((project) => (

              <div
                key={project._id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={
                      project.screenshot ||
                      "https://placehold.co/600x350?text=Project"
                    }
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {project.featured && (

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow-lg">

                      <FaStar />

                      Featured

                    </div>

                  )}

                </div>

                {/* Content */}

                <div className="p-8">

                  <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white">

                      <FaCode />

                    </div>

                    <h3 className="text-2xl font-bold">

                      {project.title}

                    </h3>

                  </div>

                  <p className="leading-8 text-slate-600 dark:text-slate-400">

                    {project.description}

                  </p>

                  {/* Tech Stack */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.techStack?.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:scale-105 dark:from-slate-800 dark:to-slate-700 dark:text-sky-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-10 grid grid-cols-2 gap-4">

                    {project.liveLink ? (

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
                      >

                        <FaExternalLinkAlt />

                        Live Demo

                      </a>

                    ) : (

                      <div></div>

                    )}

                    {project.repoLink ? (

                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white py-4 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
                      >

                        <FaGithub />

                        GitHub

                      </a>

                    ) : (

                      <div></div>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-20 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl">

              <FaCode size={42} />

            </div>

            <h3 className="text-4xl font-black">

              No Projects Yet

            </h3>

            <p className="mx-auto mt-5 max-w-lg text-lg text-slate-500 dark:text-slate-400">

              Your amazing projects will appear here once you add them.

            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Projects;