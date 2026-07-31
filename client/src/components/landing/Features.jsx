import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaProjectDiagram,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    color: "from-blue-500 to-cyan-500",
    title: "Portfolio Builder",
    desc: "Create a professional developer portfolio in minutes without writing code.",
    tag: "Easy",
  },
  {
    icon: <FaPalette />,
    color: "from-purple-500 to-pink-500",
    title: "Beautiful Templates",
    desc: "Choose modern portfolio templates designed for developers and students.",
    tag: "Modern",
  },
  {
    icon: <FaProjectDiagram />,
    color: "from-green-500 to-emerald-500",
    title: "Project Showcase",
    desc: "Highlight projects with GitHub links, live demos and technologies used.",
    tag: "Professional",
  },
  {
    icon: <FaMobileAlt />,
    color: "from-orange-500 to-red-500",
    title: "Fully Responsive",
    desc: "Your portfolio automatically adapts to desktop, tablet and mobile devices.",
    tag: "Responsive",
  },
  {
    icon: <FaCloudUploadAlt />,
    color: "from-sky-500 to-blue-600",
    title: "Resume Upload",
    desc: "Upload resumes, profile images and personal information with ease.",
    tag: "Simple",
  },
  {
    icon: <FaRocket />,
    color: "from-indigo-500 to-purple-600",
    title: "Fast & Secure",
    desc: "Powered by the MERN stack with JWT authentication for maximum security.",
    tag: "Secure",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-32 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">

            Everything You Need

            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">

              To Build Your Portfolio

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            CodeFolio provides every essential feature required to build,
            customize and publish a beautiful developer portfolio that impresses recruiters.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >

              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 from-blue-500 via-indigo-500 to-purple-500"></div>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl shadow-lg`}
              >
                {feature.icon}
              </div>

              <div className="mt-8">

                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {feature.tag}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.desc}
                </p>

                <button
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 group-hover:gap-4 transition-all"
                >
                  Learn More

                  <FaArrowRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;