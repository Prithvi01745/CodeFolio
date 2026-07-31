import { motion } from "framer-motion";
import {
  FaUsers,
  FaFolderOpen,
  FaCode,
  FaGlobe,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "500+",
    title: "Developers",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaFolderOpen />,
    number: "1500+",
    title: "Projects",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaCode />,
    number: "10+",
    title: "Templates",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaGlobe />,
    number: "99.9%",
    title: "Uptime",
    color: "from-orange-500 to-red-500",
  },
];

function Stats() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      <div className="absolute -top-24 left-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 font-semibold">
            TRUSTED PLATFORM
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Numbers That Speak
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Helping developers build professional portfolios with modern design
            and a seamless experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center"
            >
              <div
                className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-2xl shadow-xl`}
              >
                {stat.icon}
              </div>

              <h3 className="mt-8 text-5xl font-black text-white">
                {stat.number}
              </h3>

              <p className="mt-3 text-slate-400">
                {stat.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;