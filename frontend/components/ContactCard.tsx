import React, { useState } from 'react';
import axios from 'axios';
import { Contact } from '../types/Contact';

interface ContactCardProps {
  contact: Contact;
  onContactUpdated: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onContactUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleUpdate = async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/contacts/${contact._id}`, {
        name,
        email,
        phone,
      });
      setIsEditing(false);
      onContactUpdated();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/contacts/${contact._id}`);
      onContactUpdated();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4 transition duration-300 hover:shadow-xl">
        <input
          className="w-full mb-2 p-2 border border-gray-300 rounded"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full mb-2 p-2 border border-gray-300 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300"
            onClick={handleUpdate}
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 transition duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{contact.name}</h3>
      <p className="text-gray-600 mb-1">{contact.email}</p>
      <p className="text-gray-600 mb-4">{contact.phone}</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;