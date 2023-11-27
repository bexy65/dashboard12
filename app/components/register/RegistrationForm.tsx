"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastName: "",
    dob: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Form Data:", formData);
    // Redirect to a success page or perform other actions as needed
  };

  return (
    <>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#002D74] mb-3">Register</h2>
        <Link
          href={"/login"}
          type="button"
          className="flex items-center justify-center w-1/4 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-blue-700 dark:bg-blue-500 hover:bg-gray-100 dark:text-gray-200 "
        >
          <span>Go back</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            id="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Enter Date of Birth"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            required
          />
        </div>

        <div className="flex justify-center items-center mt-4">
          <button className="w-full p-3 bg-white border rounded-xl hover:border-blue-700">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
