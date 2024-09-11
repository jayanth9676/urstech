import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">Header</header>
      <div className="flex flex-1">
        <aside className="bg-gray-200 w-64 p-4">Sidebar</aside>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;