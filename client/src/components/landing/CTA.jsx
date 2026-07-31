import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700"></div>

      <div className="absolute -top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-xl p-14 text-center shadow-2xl"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-white/20 text-white font-semibold">
            START TODAY
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-black text-white leading-tight">
            Build a Portfolio
            <span className="block">
              That Gets You Hired
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            Join CodeFolio and create a professional developer portfolio
            that showcases your projects, skills and achievements —
            all without writing extra code.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/register"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-blue-700 font-bold shadow-xl transition hover:scale-105"
            >
              Get Started Free

              <FaArrowRight />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center rounded-2xl border border-white/40 px-8 py-4 text-white font-semibold transition hover:bg-white/10"
            >
              Sign In
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;