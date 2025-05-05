import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import logo1 from "../../assets/logo1.png"; // Import your logo image

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, we are just logging the input values. You can add real authentication here.
    console.log("Login submitted:", { email, password });

    // Redirect to dashboard after successful login (For now, assuming successful login)
    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[407px] h-[505px] bg-white rounded-md shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo1} alt="logo" className="w-24 h-10" />
        </div>

        {/* Welcome text */}
        <div className="text-center mb-4">
          <h2 className="text-[18px] font-semibold text-gray-800 mb-2 whitespace-nowrap">
            Welcome to Styyl Admin Panel 👋🏻
          </h2>
          <p className="text-sm text-zinc-500">
            Please sign-in to your account and start the adventure
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@gmail.com"
              className="w-full h-12 px-4 border rounded-md border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-12 px-4 border rounded-md border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 border-gray-300 rounded-md"
            />
            <label htmlFor="remember-me" className="text-sm text-zinc-500">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="self-stretch px-5 py-2.5 bg-gradient-to-l from-teal-400 to-teal-500  inline-flex justify-center items-center gap-2 w-[344px] h-[37px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mt-4"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
