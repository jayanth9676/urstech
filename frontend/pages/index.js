import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    data_store: 'DATABASE'
  });
  const [contactId, setContactId] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, action) => {
    e.preventDefault();
    try {
      let response;
      switch (action) {
        case 'create':
          response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/createContact`, formData);
          break;
        case 'get':
          response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/getContact`, { contact_id: contactId, data_store: formData.data_store });
          break;
        case 'update':
          response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/updateContact`, { ...formData, contact_id: contactId });
          break;
        case 'delete':
          response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/deleteContact`, { contact_id: contactId, data_store: formData.data_store });
          break;
      }
      setResult(response.data);
    } catch (error) {
      setResult({ error: error.message });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <form onSubmit={(e) => handleSubmit(e, 'create')} className="mb-4">
        <input type="text" name="first_name" placeholder="First Name" onChange={handleInputChange} className="border p-2 mr-2" />
        <input type="text" name="last_name" placeholder="Last Name" onChange={handleInputChange} className="border p-2 mr-2" />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} className="border p-2 mr-2" />
        <input type="tel" name="mobile_number" placeholder="Mobile Number" onChange={handleInputChange} className="border p-2 mr-2" />
        <select name="data_store" onChange={handleInputChange} className="border p-2 mr-2">
          <option value="DATABASE">Database</option>
          <option value="CRM">CRM</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2">Create Contact</button>
      </form>
      <div className="mb-4">
        <input type="text" placeholder="Contact ID" onChange={(e) => setContactId(e.target.value)} className="border p-2 mr-2" />
        <button onClick={(e) => handleSubmit(e, 'get')} className="bg-green-500 text-white p-2 mr-2">Get Contact</button>
        <button onClick={(e) => handleSubmit(e, 'update')} className="bg-yellow-500 text-white p-2 mr-2">Update Contact</button>
        <button onClick={(e) => handleSubmit(e, 'delete')} className="bg-red-500 text-white p-2">Delete Contact</button>
      </div>
      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}