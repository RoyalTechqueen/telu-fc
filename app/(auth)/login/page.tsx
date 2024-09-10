"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Simulate an async login process
    setTimeout(() => {
      setLoading(false);
      // Redirect to the dashboard after login
    }, 2000);
  };

  return (
    <div className="bg-yellow-100 min-h-screen pt-8 flex flex-col items-center">
      <div className="mb-4">
        <Image
          src="/telu.png"
          alt="logo"
          className="rounded-xl"
          width={70}
          height={70}
        />
      </div>

      <form
        onSubmit={handleLogin}
        className="w-[90%] max-w-[400px] mx-auto p-6 border border-gray-200 rounded-md shadow-lg"
      >
        <div className="mb-6 text-center">
          <h3 className="text-3xl font-bold tracking-tight">Welcome Back!</h3>
          <p>Please Enter your details</p>
        </div>

        <div className="grid gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@any.com"
              className="w-full mt-1 px-4 py-2 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                required
                placeholder="********"
                className="w-full px-4 py-2 h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="text-right mt-2">
              <Link href="/forgot-password" className="text-sm text-orange-400">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="block w-full mt-2 bg-orange-400 text-white px-3 py-2 rounded-full transition-colors hover:bg-orange-600 focus:outline-none flex items-center justify-center"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <div className="flex items-center my-2">
            <hr className="flex-grow border-black" />
            <span className="text-gray-600 px-4">Or Continue With</span>
            <hr className="flex-grow border-black" />
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-white border rounded-full p-2">
              <FcGoogle size={28} />
            </button>
            <button className="bg-white border rounded-full p-2">
              <FaFacebookF color="#1877F2" size={28} />
            </button>
          </div>
          <div className=" text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-orange-400 font-medium">
                Sign Up Now!
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
