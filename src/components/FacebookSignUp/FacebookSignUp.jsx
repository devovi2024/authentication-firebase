import React from "react";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { FaFacebook } from "react-icons/fa";
import auth from "../../firebase";

const FacebookSignUp = () => {
  const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);

  return (
    <div className="flex flex-col items-center mt-4">
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <button
        onClick={() => signInWithFacebook()}
        className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
      >
        <FaFacebook className="mr-2 text-xl" /> Facebook
      </button>
      {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      {user && <p className="text-green-500 mt-2">Signed in as {user.user.email}</p>}
    </div>
  );
};

export default FacebookSignUp;
