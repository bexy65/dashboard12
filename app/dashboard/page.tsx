import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React, { use } from 'react';
import DashboardMain from '../components/dashboard/main';

export default withPageAuthRequired(
    function DashboardPage() {
        return (
            <div className='flex-none h-screen w-full'>
                <DashboardMain />
            </div>
        );
    },
    { returnTo: '/dashboard' }
);
