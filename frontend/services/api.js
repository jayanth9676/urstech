import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createContact = async (contactData) => {
  try {
    const response = await axios.post(`${API_URL}/createContact`, contactData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Implement getContact, updateContact, and deleteContact similarly