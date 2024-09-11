import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Contact Management System</title>
        <meta name="description" content="Manage your contacts efficiently" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto py-4 px-4">
            <h1 className="text-2xl font-bold text-gray-800">Contact Manager</h1>
          </div>
        </header>
        <main className="max-w-6xl mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="bg-white shadow-sm mt-8">
          <div className="max-w-6xl mx-auto py-4 px-4 text-center text-gray-600">
            &copy; 2023 Contact Management System. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;