import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from "../../firebase";

const GithubSignUp = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log('User signed in:', user); 
      toast.success("Sign-in successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    }
    if (error) {
      console.error("Error:", error);  // For debugging
      toast.error(error.message);
    }
  }, [user, error, navigate]);

  const handleGithubSignIn = () => {
    signInWithGithub();
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleGithubSignIn}
        className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md"
      >
        <FaGithub className="mr-2 text-xl" />  GitHub
      </button>

      {loading && (
        <div className="mt-4 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          <p className="ml-2 text-blue-500 font-semibold">Authenticating...</p>
        </div>
      )}
    </div>
  );
};

export default GithubSignUp;
