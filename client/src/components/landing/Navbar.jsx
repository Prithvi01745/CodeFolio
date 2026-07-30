import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          CodeFolio
        </Link>

        <div className="hidden md:flex items-center gap-8">

          <a
            href="#features"
            className="hover:text-blue-600 transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="hover:text-blue-600 transition"
          >
            How It Works
          </a>

          <Link
            to="/login"
            className="hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;