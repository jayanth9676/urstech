import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-64 p-4">
      <nav>
        <ul>
          <li className="mb-2"><a href="#">Link 1</a></li>
          <li className="mb-2"><a href="#">Link 2</a></li>
          <li className="mb-2"><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;