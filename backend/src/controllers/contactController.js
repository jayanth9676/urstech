const Contact = require('../models/Contact');
const freshsalesApi = require('../config/freshsalesApi');

exports.createContact = async (req, res) => {
  const { first_name, last_name, email, mobile_number, data_store } = req.body;
  
  try {
    if (data_store === 'CRM') {
      const response = await freshsalesApi.post('/contacts', {
        contact: { first_name, last_name, email, mobile_number }
      });
      res.json(response.data);
    } else {
      const contact = new Contact({ first_name, last_name, email, mobile_number });
      await contact.save();
      res.json(contact);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error creating contact', details: error.message });
  }
};

// Implement getContact, updateContact, and deleteContact similarly