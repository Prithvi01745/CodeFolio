import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Ready to Build Your Portfolio?
        </h2>

        <p className="text-xl text-blue-100 mt-6">
          Join CodeFolio today and showcase your work to recruiters,
          companies and clients.
        </p>

        <Link
          to="/register"
          className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          Get Started Free
        </Link>

      </div>
    </section>
  );
}

export default CTA;