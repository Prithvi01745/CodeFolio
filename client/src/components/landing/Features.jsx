import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaProjectDiagram,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode size={35} />,
    title: "Portfolio Builder",
    desc: "Create your developer portfolio without writing extra code.",
  },
  {
    icon: <FaPalette size={35} />,
    title: "Multiple Templates",
    desc: "Choose beautiful templates and personalize your portfolio.",
  },
  {
    icon: <FaProjectDiagram size={35} />,
    title: "Project Showcase",
    desc: "Display projects with GitHub and live demo links.",
  },
  {
    icon: <FaMobileAlt size={35} />,
    title: "Responsive",
    desc: "Looks great on desktop, tablet and mobile.",
  },
  {
    icon: <FaCloudUploadAlt size={35} />,
    title: "Cloud Upload",
    desc: "Upload profile pictures and resumes easily.",
  },
  {
    icon: <FaRocket size={35} />,
    title: "Fast & Secure",
    desc: "JWT authentication with MERN architecture.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Why Choose CodeFolio?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-500 mt-5 mb-16"
        >
          Everything you need to build your portfolio.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-blue-600">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;