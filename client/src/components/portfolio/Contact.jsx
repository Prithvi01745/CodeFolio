import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";

function Contact({ portfolio }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-600 dark:bg-sky-900/40 dark:text-sky-300">
            Get In Touch
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Have a project in mind, internship opportunity, or just want to
            connect? I'd love to hear from you.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Email */}

          <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-2xl text-white shadow-lg">

              <FaEnvelope />

            </div>

            <h3 className="mb-3 text-2xl font-bold">
              Email
            </h3>

            <p className="mb-6 text-slate-500 dark:text-slate-400">
              Reach me anytime via email.
            </p>

            <a
              href={`mailto:${portfolio.email}`}
              className="break-all font-medium text-sky-600 transition hover:text-indigo-600"
            >
              {portfolio.email || "email@example.com"}
            </a>

          </div>

          {/* GitHub */}

          {portfolio.socialLinks?.github && (

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 text-2xl text-white shadow-lg">

                <FaGithub />

              </div>

              <h3 className="mb-3 text-2xl font-bold">
                GitHub
              </h3>

              <p className="mb-6 text-slate-500 dark:text-slate-400">
                Explore my repositories and open-source work.
              </p>

              <a
                href={portfolio.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-600 hover:text-indigo-600"
              >
                Visit Profile →
              </a>

            </div>

          )}

          {/* LinkedIn */}

          {portfolio.socialLinks?.linkedin && (

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-2xl text-white shadow-lg">

                <FaLinkedin />

              </div>

              <h3 className="mb-3 text-2xl font-bold">
                LinkedIn
              </h3>

              <p className="mb-6 text-slate-500 dark:text-slate-400">
                Connect with me professionally.
              </p>

              <a
                href={portfolio.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-600 hover:text-indigo-600"
              >
                Connect →
              </a>

            </div>

          )}

          {/* Website */}

          {portfolio.socialLinks?.website && (

            <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-2xl text-white shadow-lg">

                <FaGlobe />

              </div>

              <h3 className="mb-3 text-2xl font-bold">
                Website
              </h3>

              <p className="mb-6 text-slate-500 dark:text-slate-400">
                Visit my personal website or blog.
              </p>

              <a
                href={portfolio.socialLinks.website}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-600 hover:text-indigo-600"
              >
                Visit Website →
              </a>

            </div>

          )}

          {/* Resume */}

          {portfolio.resume && (

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 text-2xl text-white shadow-lg">

                <FaFileDownload />

              </div>

              <h3 className="mb-3 text-2xl font-bold">
                Resume
              </h3>

              <p className="mb-6 text-slate-500 dark:text-slate-400">
                Download my latest resume.
              </p>

              <a
                href={portfolio.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
              >

                <FaPaperPlane />

                Download Resume

              </a>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Contact;