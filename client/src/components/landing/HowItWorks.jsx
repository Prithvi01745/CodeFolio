import {
  FaUserPlus,
  FaEdit,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus size={40} />,
    title: "Create an Account",
    description:
      "Sign up in seconds and access your personal dashboard.",
  },
  {
    icon: <FaEdit size={40} />,
    title: "Build Your Portfolio",
    description:
      "Add your profile, projects, skills, resume and choose a template.",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Publish & Share",
    description:
      "Get your personal portfolio link and share it with recruiters.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-500 text-lg mt-4 mb-16">
          Create your portfolio in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center text-blue-600 mb-6">
                {step.icon}
              </div>

              <div className="text-sm font-bold text-blue-600 mb-2">
                STEP {index + 1}
              </div>

              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;