import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-3xl font-bold text-blue-500">
            CodeFolio
          </h2>

          <p className="text-gray-400 mt-2">
            Build. Showcase. Get Hired.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={28} />
          </a>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} CodeFolio. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;