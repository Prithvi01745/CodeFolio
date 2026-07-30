import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 flex items-center">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-6xl font-extrabold text-white leading-tight">
            Build Your
            <br />
            Developer Portfolio
            <br />
            in Minutes.
          </h1>

          <p className="text-blue-100 text-xl mt-8 leading-8">
            Create stunning portfolios, showcase your projects,
            upload your resume and share everything with one link.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/register"
              className="bg-white text-blue-700 font-semibold px-7 py-4 rounded-xl hover:scale-105 transition flex items-center gap-2"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <Link
              to="/login"
              className="border-2 border-white text-white px-7 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

            <div className="w-28 h-28 rounded-full bg-blue-600 mx-auto"></div>

            <h2 className="text-3xl font-bold mt-6 text-center">
              John Doe
            </h2>

            <p className="text-center text-gray-500 mt-2">
              Full Stack Developer
            </p>

            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <span className="bg-blue-100 px-3 py-2 rounded-full">
                React
              </span>

              <span className="bg-green-100 px-3 py-2 rounded-full">
                Node.js
              </span>

              <span className="bg-yellow-100 px-3 py-2 rounded-full">
                MongoDB
              </span>
            </div>

            <div className="mt-8 space-y-3">

              <div className="bg-gray-100 p-4 rounded-lg">
                Portfolio Website
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                CodeFolio Project
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                AI Chat Application
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;