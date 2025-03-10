import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import auth from "../../firebase";

const GoogleSignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      toast.success("Sign-in successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => signInWithGoogle()}
        className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
      >
        <FaGoogle className="mr-2 text-xl" /> Continue with Google
      </button>

      {/* Loading Spinner */}
      {loading && (
        <div className="mt-4 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          <p className="ml-2 text-blue-500 font-semibold">Authenticating...</p>
        </div>
      )}
    </div>
  );
};

export default GoogleSignUp;