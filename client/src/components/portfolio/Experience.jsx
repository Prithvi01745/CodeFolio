import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

function Experience({ portfolio }) {
  return (
    <section
      id="experience"
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
            Career Journey
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Professional Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            My internships, professional roles, and the technologies I've used
            while building impactful software solutions.
          </p>

        </div>

        {portfolio.experience?.length > 0 ? (

          <div className="relative">

            {/* Timeline */}

            <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-sky-500 via-indigo-500 to-violet-500 lg:block"></div>

            <div className="space-y-12">

              {portfolio.experience.map((exp) => (

                <div
                  key={exp._id}
                  className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900 lg:ml-20"
                >

                  {/* Timeline Dot */}

                  <div className="absolute -left-[95px] top-10 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg lg:flex">

                    <FaBriefcase />

                  </div>

                  <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                    {/* Left */}

                    <div className="flex-1">

                      <h3 className="text-3xl font-bold">

                        {exp.jobTitle}

                      </h3>

                      <p className="mt-3 text-xl font-semibold text-sky-600">

                        {exp.company || "Company"}

                      </p>

                      <div className="mt-5 flex flex-wrap gap-6 text-slate-500 dark:text-slate-400">

                        <span className="flex items-center gap-2">

                          <FaMapMarkerAlt className="text-sky-600" />

                          {exp.location || "Remote"}

                        </span>

                        <span className="flex items-center gap-2">

                          <FaCalendarAlt className="text-sky-600" />

                          {exp.startDate}

                          {" — "}

                          {exp.currentlyWorking
                            ? "Present"
                            : exp.endDate}

                        </span>

                      </div>

                    </div>

                    {/* Employment Badge */}

                    <div>

                      <span className="rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg">

                        {exp.employmentType || "Full Time"}

                      </span>

                    </div>

                  </div>

                  {/* Description */}

                  <div className="mt-8">

                    <p className="leading-8 text-slate-600 dark:text-slate-400">

                      {exp.description ||
                        "No description available."}

                    </p>

                  </div>

                  {/* Technologies */}

                  <div className="mt-8">

                    <div className="mb-4 flex items-center gap-2">

                      <FaLaptopCode className="text-sky-600" />

                      <h4 className="font-semibold">

                        Technologies Used

                      </h4>

                    </div>

                    <div className="flex flex-wrap gap-3">

                      {exp.technologies?.map((tech) => (

                        <span
                          key={tech}
                          className="rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:scale-105 dark:from-slate-800 dark:to-slate-700 dark:text-sky-300"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ) : (

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-20 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl">

              <FaBriefcase size={42} />

            </div>

            <h3 className="text-4xl font-black">
              No Experience Yet
            </h3>

            <p className="mx-auto mt-5 max-w-lg text-lg text-slate-500 dark:text-slate-400">
              Professional experience and internships will appear here once they
              are added.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Experience;