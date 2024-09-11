import React, { useState } from 'react';
import { createContact } from '../services/api';

const CreateContact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    data_store: 'CRM'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createContact(formData);
      console.log('Contact created:', result);
      // Show success message
    } catch (error) {
      console.error('Error creating contact:', error);
      // Show error message
    }
  };

  // Implement form inputs and handle changes

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Create Contact</h2>
      <form onSubmit={handleSubmit}>
        {/* Implement form fields */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateContact;