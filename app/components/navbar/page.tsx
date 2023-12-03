'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false);
    const { user, error, isLoading } = useUser();
    let res;

    if (error) return <div>Error on getting user...</div>;

    if (user) {
        router.push('/dashboard');
        res = <Link href={'/api/auth/logout'}>Logout</Link>;
    } else {
        res = <Link href={'/api/auth/login'}>Login</Link>;
    }

    return (
        <div className='flex justify-between items-center w-full h-14 px-4 text-black bg-blue-400 nav'>
            <div>
                <h1 className='text-2xl font-signature ml-2'>
                    <a
                        className='link-underline link-underline-black text-white hover:text-black duration-100'
                        href=''
                        target='_blank'
                        rel='noreferrer'
                    >
                        Logo
                    </a>
                </h1>
            </div>

            <ul className='hidden md:flex'>
                <li className='nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 hover:text-black duration-100 link-underline'>
                    <Link href={'/home'}>Home</Link>
                </li>
                {user ? (
                    <li className='nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-black duration-100 link-underline'>
                        <Link href={'/dashboard'}>Dashboard</Link>
                    </li>
                ) : (
                    <></>
                )}
                <li className='nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 hover:text-black duration-100 link-underline'>
                    {res}
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10 text-white md:hidden'
            >
                {nav ? <FaTimes size={32} /> : <FaBars size={32} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-300 to-blue-700 text-white'>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} href={'/home'}>
                            Home
                        </Link>
                    </li>
                    {user ? (
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link
                                onClick={() => setNav(!nav)}
                                href={'/dashboard'}
                            >
                                Dashboard
                            </Link>
                        </li>
                    ) : (
                        <></>
                    )}
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        {res}
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
