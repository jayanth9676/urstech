import React from 'react';

const MainContent = () => {
  const staticData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return (
    <div>
      <h2 className="text-2xl mb-4">Contacts</h2>
      <ul>
        {staticData.map(contact => (
          <li key={contact.id} className="mb-2">
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;