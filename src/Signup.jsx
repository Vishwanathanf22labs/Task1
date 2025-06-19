import React from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import Leftimage from './assets/images/leftimage.jpg'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Illustration */}
        <div className="bg-white p-6 md:w-1/2 flex items-center justify-center">
          <img
            src={Leftimage}
            alt="Illustration"
            className="w-72 h-auto"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-6">
            Welcome to <span className="text-purple-600 font-bold">Design School</span>
          </h2>

          {/* Social logins */}
          <div className="space-y-3 mb-4">
            <button className="w-full border rounded-md py-2 flex items-center justify-center gap-2 cursor-pointer">
              <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" />
              Login with Google
            </button>
            <button className="w-full border rounded-md py-2 flex items-center justify-center gap-2 cursor-pointer">
              <img src="https://img.icons8.com/ios-filled/16/3b5998/facebook-new.png" alt="Facebook" />
              Login with Facebook
            </button>
          </div>

          <div className="flex items-center justify-center my-2">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          {/* Email Input */}
          <div className="flex items-center border rounded-md px-3 mb-4">
            <FaEnvelope className="text-black-400" />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full py-2 px-2 focus:outline-none"
            />
          </div>
          {/* Password Input */}
          <div className="flex items-center border rounded-md px-3 mb-4">
            <FaLock className="text-black-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-2 focus:outline-none"
            />
          </div>
          <div className='flex flex-row justify-between'>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <div className="text-right text-sm text-purple-600 mb-4 cursor-pointer">
              Forgot Password?
            </div>
          </div>
          {/* Login Button */}
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
            Login
          </button>

          <div className="text-sm text-center mt-4">
            Don’t have an account?{' '}
            <span className="text-purple-600 font-medium cursor-pointer">Register</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
