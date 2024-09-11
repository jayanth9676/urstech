const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const axios = require('axios');
const axiosRateLimit = require('axios-rate-limit');

const api = axiosRateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000 });

// Create Contact
router.post('/createContact', async (req, res) => {
  const { first_name, last_name, email, mobile_number, data_store } = req.body;

  try {
    if (data_store === 'CRM') {
      const response = await api.post(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts`, {
        contact: { first_name, last_name, email, mobile_number }
      }, {
        headers: { 'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}` }
      });
      res.json(response.data);
    } else {
      const contact = new Contact({ first_name, last_name, email, mobile_number });
      await contact.save();
      res.json(contact);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Contact
router.post('/getContact', async (req, res) => {
  const { contact_id, data_store } = req.body;

  try {
    if (data_store === 'CRM') {
      const response = await api.get(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts/${contact_id}`, {
        headers: { 'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}` }
      });
      res.json(response.data);
    } else {
      const contact = await Contact.findById(contact_id);
      res.json(contact);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Contact
router.post('/updateContact', async (req, res) => {
  const { contact_id, new_email, new_mobile_number, data_store } = req.body;

  try {
    if (data_store === 'CRM') {
      const response = await api.put(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts/${contact_id}`, {
        contact: { email: new_email, mobile_number: new_mobile_number }
      }, {
        headers: { 'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}` }
      });
      res.json(response.data);
    } else {
      const contact = await Contact.findByIdAndUpdate(contact_id, { email: new_email, mobile_number: new_mobile_number }, { new: true });
      res.json(contact);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Contact
router.post('/deleteContact', async (req, res) => {
  const { contact_id, data_store } = req.body;

  try {
    if (data_store === 'CRM') {
      await api.delete(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts/${contact_id}`, {
        headers: { 'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}` }
      });
      res.json({ message: 'Contact deleted successfully' });
    } else {
      await Contact.findByIdAndDelete(contact_id);
      res.json({ message: 'Contact deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;