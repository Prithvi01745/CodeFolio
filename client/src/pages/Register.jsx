import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUser,
  FaUserCircle,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import { registerUser } from "../services/authService";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-4">

      {/* Background Blur */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"></div>

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"></div>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-3xl bg-white/90 backdrop-blur-lg shadow-2xl border border-white p-8"
      >

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join CodeFolio and build your portfolio
          </p>

        </div>

        {/* Full Name */}

        <div className="mb-5">

          <label className="font-medium text-gray-700">
            Full Name
          </label>

          <div className="flex items-center mt-2 border rounded-xl px-4 focus-within:ring-2 focus-within:ring-sky-400">

            <FaUser className="text-gray-400" />

            <input
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Enter your full name"
              className="w-full p-3 outline-none bg-transparent"
            />

          </div>

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}

        </div>

        {/* Username */}

        <div className="mb-5">

          <label className="font-medium text-gray-700">
            Username
          </label>

          <div className="flex items-center mt-2 border rounded-xl px-4 focus-within:ring-2 focus-within:ring-sky-400">

            <FaUserCircle className="text-gray-400" />

            <input
              {...register("username", {
                required: "Username is required",
              })}
              placeholder="Choose a username"
              className="w-full p-3 outline-none bg-transparent"
            />

          </div>

          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}

        </div>

        {/* Email */}

        <div className="mb-5">

          <label className="font-medium text-gray-700">
            Email
          </label>

          <div className="flex items-center mt-2 border rounded-xl px-4 focus-within:ring-2 focus-within:ring-sky-400">

            <FaEnvelope className="text-gray-400" />

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 outline-none bg-transparent"
            />

          </div>

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}

        </div>

        {/* Password */}

        <div className="mb-6">

          <label className="font-medium text-gray-700">
            Password
          </label>

          <div className="flex items-center mt-2 border rounded-xl px-4 focus-within:ring-2 focus-within:ring-sky-400">

            <FaLock className="text-gray-400" />

            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Create a password"
              className="w-full p-3 outline-none bg-transparent"
            />

          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 py-3 text-white font-semibold shadow-lg hover:scale-[1.02] transition duration-300 disabled:opacity-60"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>

        {/* Login Link */}

        <p className="text-center mt-6 text-gray-500">

          Already have an account?

          <Link
            to="/login"
            className="text-sky-600 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;