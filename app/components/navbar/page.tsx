'use client';
import Link from 'next/link';
import React, { use, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '@/app/authProvider';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isLogged, login, logout } = useAuth();

  const statusLabelFlag = isLogged === false ? 'login' : 'logout';

  const handleNavLogin = () => {
    setNav(!nav);
    login();
  };
  const handleNavLogout = () => {
    setNav(!nav);
    logout();
  };

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: statusLabelFlag,
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-14 px-4 text-black bg-blue-400 fixed nav'>
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className='text-2xl font-signature ml-2'>
          <a
            className='link-underline link-underline-black text-white hover:text-black duration-300 '
            href=''
            target='_blank'
            rel='noreferrer'
          >
            Logo
          </a>
        </h1>
      </div>

      <ul className='hidden md:flex'>
        {isLogged ? (
          <li className='nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-black duration-200 link-underline'>
            <Link onClick={logout} href={'/home'}>
              Logout
            </Link>
          </li>
        ) : (
          <li className='nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-black duration-200 link-underline'>
            <Link onClick={login} href={'/login'}>
              Login
            </Link>
          </li>
        )}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-white md:hidden'
      >
        {nav ? <FaTimes size={32} /> : <FaBars size={32} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-300 to-blue-700 text-white'>
          {isLogged ? (
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={handleNavLogout} href={'/home'}>
                Logout
              </Link>
            </li>
          ) : (
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={handleNavLogin} href={'/login'}>
                Login
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
