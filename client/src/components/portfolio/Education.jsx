import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

function Education({ portfolio }) {
  return (
    <section
      id="education"
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
            Education
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Academic Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            My educational background that helped build my technical
            foundation and problem-solving abilities.
          </p>

        </div>

        {portfolio.education?.length > 0 ? (

          <div className="relative">

            {/* Timeline */}

            <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-sky-500 via-indigo-500 to-violet-500 lg:block"></div>

            <div className="space-y-12">

              {portfolio.education.map((edu) => (

                <div
                  key={edu._id}
                  className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900 lg:ml-20"
                >

                  {/* Timeline Dot */}

                  <div className="absolute -left-[95px] top-10 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg lg:flex">

                    <FaGraduationCap />

                  </div>

                  <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                    {/* Left */}

                    <div className="flex-1">

                      <h3 className="text-3xl font-bold">

                        {edu.degree || "Degree"}

                      </h3>

                      <p className="mt-3 text-xl font-semibold text-sky-600">

                        {edu.institution || "Institution"}

                      </p>

                      {edu.fieldOfStudy && (

                        <p className="mt-2 text-slate-600 dark:text-slate-400">

                          {edu.fieldOfStudy}

                        </p>

                      )}

                      <div className="mt-5 flex flex-wrap gap-6 text-slate-500 dark:text-slate-400">

                        {edu.location && (

                          <span className="flex items-center gap-2">

                            <FaMapMarkerAlt className="text-sky-600" />

                            {edu.location}

                          </span>

                        )}

                        <span className="flex items-center gap-2">

                          <FaCalendarAlt className="text-sky-600" />

                          {edu.startYear} — {edu.endYear}

                        </span>

                      </div>

                    </div>

                    {/* Grade */}

                    {edu.grade && (

                      <div>

                        <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-5 text-center text-white shadow-xl">

                          <FaAward className="mx-auto mb-3 text-2xl" />

                          <p className="text-sm uppercase tracking-wider">

                            Grade / CGPA

                          </p>

                          <h3 className="mt-2 text-3xl font-black">

                            {edu.grade}

                          </h3>

                        </div>

                      </div>

                    )}

                  </div>

                  {/* Description */}

                  {edu.description && (

                    <div className="mt-8 rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">

                      <h4 className="mb-3 font-semibold">

                        Overview

                      </h4>

                      <p className="leading-8 text-slate-600 dark:text-slate-400">

                        {edu.description}

                      </p>

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        ) : (

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-20 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl">

              <FaGraduationCap size={42} />

            </div>

            <h3 className="text-4xl font-black">

              No Education Added

            </h3>

            <p className="mx-auto mt-5 max-w-lg text-lg text-slate-500 dark:text-slate-400">

              Educational qualifications will appear here once they are added.

            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Education;