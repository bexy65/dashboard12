'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const router = useRouter();
  const succesAtRegister = () => toast('User successfuly created!');
  const failEmailExistAtRegister = () =>
    toast('Email already exist, please choose another one!');

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    lastName: '',
    password: '',
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setPasswordError('Password should be 8 or longer');
      return;
    }

    try {
      // Check if the email is already in use
      const response = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        console.error('Error during registration:', error);
      } else {
        const data = await response.json();
        if (data.massage) {
          setEmailError(data.massage);
          //Toast implementation
          failEmailExistAtRegister();
        }
        //Toast implementation
        succesAtRegister();
        console.log('User registered successfully');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className='flex flex-row justify-between mb-4'>
        <h2 className='text-2xl font-bold text-[#002D74] mb-3'>Register</h2>
        <Link
          href={'/login'}
          type='button'
          className='flex items-center justify-center w-1/4 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-blue-700 dark:bg-blue-500 hover:bg-gray-100 dark:text-gray-200 '
        >
          <span>Go back</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label className='block text-gray-700'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter Name'
          className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
          required
        />

        <label className='block text-gray-700'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          value={formData.lastName}
          onChange={handleChange}
          placeholder='Enter Last Name'
          className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
          required
        />

        <label className='block text-gray-700'>Email Address</label>
        <input
          type='email'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Email Address'
          className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
          required
        />
        <p className='text-red-500 my-2'>{emailError && emailError}</p>

        <label className='block text-gray-700 mt-4'>Password</label>
        <input
          type='password'
          value={formData.password}
          onChange={handleChange}
          name='password'
          id='password'
          placeholder='Enter Password'
          className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none'
          required
        />
        <p className='text-red-500 my-2'>{passwordError && passwordError}</p>

        <div className='flex justify-center items-center mt-4'>
          <button className='w-full p-3 bg-white border rounded-xl hover:border-blue-700'>
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
