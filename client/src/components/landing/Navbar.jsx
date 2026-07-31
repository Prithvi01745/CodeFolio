import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition">

              <FaCode className="text-white text-lg" />

            </div>

            <div>

              <h1 className="text-2xl font-black tracking-tight text-slate-900">
                CodeFolio
              </h1>

              <p className="text-xs text-gray-500">
                Portfolio Builder
              </p>

            </div>
          </Link>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">

            <a
              href="#features"
              className="relative text-slate-700 hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="relative text-slate-700 hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              How It Works
            </a>

            <Link
              to="/login"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Login
            </Link>

          </nav>

          {/* Right Buttons */}

          <div className="hidden md:flex items-center gap-4">

            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition font-medium"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-xl hover:shadow-blue-300 transition hover:scale-105"
            >
              Get Started
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;