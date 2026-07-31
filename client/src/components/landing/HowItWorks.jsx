import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaEdit,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaUserPlus />,
    title: "Create Your Account",
    description:
      "Register in a few seconds and access your personalized CodeFolio dashboard.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: <FaEdit />,
    title: "Build Your Portfolio",
    description:
      "Add your profile, skills, education, projects and work experience using beautiful forms.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: <FaRocket />,
    title: "Publish & Share",
    description:
      "Get your own portfolio URL and share it with recruiters, companies and clients.",
    color: "from-indigo-500 to-blue-600",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-32 bg-slate-950 text-white"
    >
      {/* Background Blur */}

      <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black">
            Launch Your Portfolio
            <span className="block text-blue-400">
              In Three Easy Steps
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-lg leading-8">
            CodeFolio simplifies portfolio creation with a smooth workflow,
            helping you focus on showcasing your skills instead of writing code.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="hidden lg:block absolute top-14 left-0 w-full h-1 bg-white/10"></div>

          <div className="grid lg:grid-cols-3 gap-12 relative">

            {steps.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                className="relative"
              >

                {/* Circle */}

                <div
                  className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-3xl shadow-2xl border-8 border-slate-950 relative z-10`}
                >
                  {step.icon}
                </div>

                {/* Card */}

                <div className="mt-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 hover:border-blue-400 transition duration-300">

                  <span className="text-blue-400 font-bold tracking-widest">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    {step.description}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all">

                    Learn More

                    <FaArrowRight />

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;