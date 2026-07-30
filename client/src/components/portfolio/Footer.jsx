import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer({ portfolio }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-sky-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-sky-300">
              Thanks for Visiting
            </span>

            <h2 className="mt-6 text-5xl font-black bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">

              {portfolio.name || "Your Name"}

            </h2>

            <p className="mt-4 text-xl font-medium text-sky-300">

              {portfolio.title || "Full Stack Developer"}

            </p>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">

              Thank you for taking the time to explore my portfolio.
              I'm always excited to collaborate on innovative projects,
              internship opportunities, and meaningful software solutions.

            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col justify-center items-start lg:items-end">

            <h3 className="mb-6 text-2xl font-bold">
              Connect With Me
            </h3>

            <div className="flex gap-5">

              {portfolio.socialLinks?.github && (

                <a
                  href={portfolio.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-sky-600 hover:shadow-xl"
                >
                  <FaGithub />
                </a>

              )}

              {portfolio.socialLinks?.linkedin && (

                <a
                  href={portfolio.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-sky-600 hover:shadow-xl"
                >
                  <FaLinkedin />
                </a>

              )}

              {portfolio.socialLinks?.website && (

                <a
                  href={portfolio.socialLinks.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-sky-600 hover:shadow-xl"
                >
                  <FaGlobe />
                </a>

              )}

            </div>

            <button
              onClick={scrollToTop}
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaArrowUp />

              Back to Top

            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">

          <p className="text-slate-400">

            © {new Date().getFullYear()}{" "}

            <span className="font-semibold text-white">

              {portfolio.name || "Your Name"}

            </span>

            . All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-slate-400">

            Built with

            <FaHeart className="text-red-500" />

            React • Node.js • MongoDB

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;