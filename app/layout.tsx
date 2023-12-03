import type { Metadata } from 'next';
import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from './components/navbar/page';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <UserProvider>
            <html lang='en'>
                <body className='flex flex-col min-h-screen items-center'>
                    <Navbar />
                    {children}
                </body>
            </html>
        </UserProvider>
    );
}
