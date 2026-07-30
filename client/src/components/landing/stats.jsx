import { FaUsers, FaFolderOpen, FaCode, FaGlobe } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={40} />,
    number: "500+",
    title: "Developers",
  },
  {
    icon: <FaFolderOpen size={40} />,
    number: "1500+",
    title: "Projects",
  },
  {
    icon: <FaCode size={40} />,
    number: "10+",
    title: "Templates",
  },
  {
    icon: <FaGlobe size={40} />,
    number: "99.9%",
    title: "Uptime",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Trusted by Developers
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center text-blue-400 mb-5">
                {stat.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {stat.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;