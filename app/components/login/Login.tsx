"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

function LoginInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`${password} - ${email}`);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
      {/* form method post */}

      <form className="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
            required
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
      px-4 py-3 mt-6"
        >
          Log In
        </button>
      </form>

      <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
        <hr className="border-gray-500" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-500" />
      </div>

      <div className="flex justify-center items-center mt-3">
        <Link
          href={"/register"}
          className="w-full p-3 text-center bg-white border rounded-xl hover:scale-105 duration-300 border-blue-400"
        >
          Register
        </Link>
      </div>
    </>
  );
}

export default LoginInputs;
