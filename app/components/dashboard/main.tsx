'use client';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Sidebar from './sidebar';

function DashboardMain() {
    const { user, error, isLoading } = useUser();
    if (!user) return;

    return (
        <div className='grid grid-cols-4'>
            <div className='hidden border-2 border-gray-500 bg-gray-200 md:block md:col-span-1 lg:block lg:col-span-1'>
                <Sidebar />
            </div>

            <div className='col-span-4 md:col-span-3 lg:col-span-3 bg-gray-300 p-4'>
                <div>
                    {error ? (
                        <h2>{error.message}</h2>
                    ) : (
                        <div>
                            <h1>{user.name}</h1>
                            <ul>
                                <li>{user.nickname}</li>
                                <li>{user.email}</li>
                                <img src={user.picture} alt={user.name} />
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DashboardMain;
