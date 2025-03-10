import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import auth from "../../firebase";
import signinImage from "../../assets/sign+up+logo+FINAL+PNG.png";
import GoogleSignUp from "../GoogleSignUp/GoogleSignUp";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Firebase authentication hook
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // If user is signed in successfully
  if (user) {
    return (
      <div className="text-green-500 text-center py-4">
        Signed In User: {user.user.email}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white p-6">
      {/* Left-side Illustration */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <img src={signinImage} alt="Sign In Illustration" className="max-w-sm" />
      </div>

      {/* Right-side Form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-10 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <FaSignInAlt className="text-blue-600" /> Sign In
        </h2>

        <div className="w-full max-w-sm">
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm bg-gray-100">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                className="flex-1 ml-2 outline-none bg-transparent text-gray-700"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm bg-gray-100">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                className="flex-1 ml-2 outline-none bg-transparent text-gray-700"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            onClick={() => signInWithEmailAndPassword(email, password)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all text-lg font-semibold shadow-md hover:shadow-xl"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <div className="mt-4 text-center text-gray-600">
            <p>
              Don't have an account?{" "}
              <NavLink to="/signup" className="text-blue-600 hover:underline ml-2">
                Sign Up
              </NavLink>
            </p>
          </div>

          {/* Google Sign In */}
          <div className="flex justify-center items-center mt-4">
            <GoogleSignUp />
          </div>

          {/* Error Handling */}
          {error && <p className="text-red-500 text-center mt-4">Error: {error.message}</p>}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center h-16">
              <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
