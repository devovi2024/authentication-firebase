import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FaEnvelope, FaLock, FaUserPlus, FaPhone, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'; 
import auth from '../../firebase';
import signinImage from "../../assets/sign+up+logo+FINAL+PNG.png"

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  
  // Firebase authentication hook
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  // Error Handling UI
  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error.message}</div>;
  }

  // Loading State with Spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  // If user is registered successfully
  if (user) {
    return <div className="text-green-500 text-center py-4">Registered User: {user.user.email}</div>;
  }

  return (
    <div className="flex h-screen bg-white p-6">
      
      {/* Left-side Illustration */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <img src={signinImage} alt="Sign Up Illustration" className="max-w-sm" />
      </div>
      
      {/* Right-side Form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-10 shadow-lg rounded-lg">
        
        {/* Form Header */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <FaUserPlus className="text-blue-600" /> Sign Up
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
          
          {/* Phone Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 shadow-sm bg-gray-100">
              <FaPhone className="text-gray-400" />
              <input
                type="tel"
                className="flex-1 ml-2 outline-none bg-transparent text-gray-700"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => createUserWithEmailAndPassword(email, password)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all text-lg font-semibold shadow-md hover:shadow-xl"
            >
              Sign Up
            </button>

            {console.log(user)}
            <button className="w-full border border-gray-400 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-all text-lg font-semibold shadow-md">
              Signin
            </button>

            <button>Sign out </button>
          </div>
          
          {/* Social Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Or sign up with</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all text-red-500">
                <FaGoogle className="w-6 h-6" />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all text-blue-600">
                <FaFacebook className="w-6 h-6" />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all text-blue-400">
                <FaTwitter className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
