import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Gradient Line */}

      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500"></div>

      {/* Background Blur */}

      <div className="absolute -top-20 left-0 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CodeFolio
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Build a beautiful developer portfolio,
              showcase your projects,
              and impress recruiters with a single professional link.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaTwitter size={20} />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-xl font-bold">
              Product
            </h3>

            <ul className="space-y-4 mt-6 text-slate-400">

              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-white transition">
                  How It Works
                </a>
              </li>

              <li>
                <Link to="/register" className="hover:text-white transition">
                  Templates
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold">
              Company
            </h3>

            <ul className="space-y-4 mt-6 text-slate-400">

              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* CTA */}

          <div>

            <h3 className="text-xl font-bold">
              Ready to Build?
            </h3>

            <p className="mt-6 text-slate-400 leading-8">
              Create your developer portfolio today
              and start sharing your work with recruiters.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
            >
              Get Started

              <FaArrowRight />
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} CodeFolio. All rights reserved.
          </p>

          <p className="text-slate-500">
            Built with ❤️ using MERN Stack
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;