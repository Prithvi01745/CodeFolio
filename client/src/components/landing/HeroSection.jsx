import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaRocket,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 min-h-screen flex items-center">

      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"></div>

        <div className="absolute top-52 right-0 w-[420px] h-[420px] rounded-full bg-purple-400/20 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-cyan-300/20 blur-3xl"></div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 shadow-sm"
            >
              <FaRocket />
              Build Your Developer Portfolio in Minutes
            </motion.div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">

              Create a

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">

                Professional Portfolio

              </span>

              That Gets You Hired

            </h1>

            {/* Subtitle */}

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">

              CodeFolio helps students and developers build beautiful,
              ATS-friendly portfolios without writing code.
              Showcase projects, skills, experience, education,
              and share one professional link with recruiters.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/register"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-blue-300"
              >

                Get Started Free

                <FaArrowRight className="transition group-hover:translate-x-1" />

              </Link>

              <a
                href="#features"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >

                Explore Features

              </a>

            </div>

            {/* Trust Indicators */}

            <div className="mt-12 grid grid-cols-2 gap-4">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500 text-xl" />

                <span className="text-slate-700">
                  No Coding Required
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500 text-xl" />

                <span className="text-slate-700">
                  Fully Responsive
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500 text-xl" />

                <span className="text-slate-700">
                  ATS Friendly
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500 text-xl" />

                <span className="text-slate-700">
                  Share with One Link
                </span>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
          >
                      {/* Main Glass Card */}

            <div className="relative rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-8">

              {/* Top Status */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    Developer Profile
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    John Developer
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Full Stack MERN Developer
                  </p>

                </div>

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>

                </div>

              </div>

              {/* Avatar */}

              <div className="flex justify-center mt-10">

                <div className="relative">

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-40"></div>

                  <img
                    src="/avatar.png"
                    alt="Developer"
                    className="relative w-48 h-48 object-cover rounded-full border-[6px] border-white shadow-2xl"
                  />

                </div>

              </div>

              {/* Tech Stack */}

              <div className="mt-10">

                <p className="text-sm font-semibold text-slate-600 mb-4">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-3">

                  <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                    Node.js
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                    MongoDB
                  </span>

                  <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                    Express
                  </span>

                </div>

              </div>

              {/* Featured Projects */}

              <div className="mt-10">

                <p className="text-sm font-semibold text-slate-600 mb-5">
                  Featured Projects
                </p>

                <div className="space-y-4">

                  <div className="rounded-2xl border border-slate-200 p-4 hover:border-blue-400 hover:shadow-lg transition">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">

                        <FaLaptopCode className="text-blue-600" />

                      </div>

                      <div>

                        <h4 className="font-semibold text-slate-900">
                          CodeFolio
                        </h4>

                        <p className="text-sm text-slate-500">
                          Developer Portfolio Builder
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4 hover:border-purple-400 hover:shadow-lg transition">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">

                        <FaGithub className="text-purple-600" />

                      </div>

                      <div>

                        <h4 className="font-semibold text-slate-900">
                          Portfolio Website
                        </h4>

                        <p className="text-sm text-slate-500">
                          Personal Portfolio
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card 1 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .5 }}
              className="absolute -left-12 top-12 bg-white rounded-2xl shadow-xl px-5 py-4 hidden lg:block"
            >

              <p className="text-3xl font-black text-blue-600">
                50+
              </p>

              <p className="text-sm text-slate-500">
                Portfolio Sections
              </p>

            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .7 }}
              className="absolute -right-10 bottom-12 bg-white rounded-2xl shadow-xl px-5 py-4 hidden lg:block"
            >

              <p className="text-3xl font-black text-purple-600">
                ATS
              </p>

              <p className="text-sm text-slate-500">
                Friendly Design
              </p>

            </motion.div>
                        {/* Decorative Floating Elements */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-8 right-24 hidden lg:flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl"
            >
              🚀
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-0 left-10 hidden lg:flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xl"
            >
              💻
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-28 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          <div className="rounded-3xl border border-white/70 bg-white/70 p-8 text-center shadow-xl backdrop-blur-lg">

            <h3 className="text-4xl font-black text-blue-600">
              100%
            </h3>

            <p className="mt-2 text-slate-600">
              Responsive
            </p>

          </div>

          <div className="rounded-3xl border border-white/70 bg-white/70 p-8 text-center shadow-xl backdrop-blur-lg">

            <h3 className="text-4xl font-black text-purple-600">
              MERN
            </h3>

            <p className="mt-2 text-slate-600">
              Powered
            </p>

          </div>

          <div className="rounded-3xl border border-white/70 bg-white/70 p-8 text-center shadow-xl backdrop-blur-lg">

            <h3 className="text-4xl font-black text-cyan-600">
              ATS
            </h3>

            <p className="mt-2 text-slate-600">
              Friendly
            </p>

          </div>

          <div className="rounded-3xl border border-white/70 bg-white/70 p-8 text-center shadow-xl backdrop-blur-lg">

            <h3 className="text-4xl font-black text-indigo-600">
              JWT
            </h3>

            <p className="mt-2 text-slate-600">
              Secure Login
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;