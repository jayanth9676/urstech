import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [dataStore, setDataStore] = useState('CRM');
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, [dataStore]);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/getContacts?data_store=${dataStore}`);
      setContacts(response.data);
      setError(null);
    } catch (err) {
      if (err.response && err.response.status === 429) {
        const retryAfter = err.response.data.retryAfter || 60;
        setError(`Rate limit exceeded. Please try again in ${retryAfter} seconds.`);
        setTimeout(fetchContacts, retryAfter * 1000);
      } else {
        setError('Failed to fetch contacts');
      }
    }
    setIsLoading(false);
  };

  const handleCreateContact = async (contactData) => {
    try {
      await axios.post(`${API_URL}/createContact`, { ...contactData, data_store: dataStore });
      fetchContacts();
    } catch (err) {
      setError('Failed to create contact');
    }
  };

  const handleUpdateContact = async (contactData) => {
    try {
      await axios.post(`${API_URL}/updateContact`, { ...contactData, data_store: dataStore });
      fetchContacts();
    } catch (err) {
      setError('Failed to update contact');
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      await axios.post(`${API_URL}/deleteContact`, { contact_id: contactId, data_store: dataStore });
      fetchContacts();
    } catch (err) {
      setError('Failed to delete contact');
    }
  };

  // Render your UI here, including the contact list, forms for creating/editing contacts,
  // and the data store switch. Use the state and functions defined above to manage the data.

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Implement your UI here */}
    </div>
  );
};

export default Dashboard;