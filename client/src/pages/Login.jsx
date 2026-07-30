import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { loginUser } from "../services/authService";
import { Authcontext } from "../context/Authcontext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const { login } = useContext(Authcontext);

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);

      login(response.user, response.token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-4">

      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"></div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-3xl bg-white/90 backdrop-blur-lg shadow-2xl border border-white p-8"
      >
        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to your CodeFolio account
          </p>

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
              placeholder="Enter your password"
              className="w-full p-3 outline-none bg-transparent"
            />

          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 py-3 text-white font-semibold shadow-lg hover:scale-[1.02] transition duration-300 disabled:opacity-60"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-6 text-gray-500">

          Don't have an account?

          <Link
            to="/register"
            className="text-sky-600 font-semibold ml-2 hover:underline"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;