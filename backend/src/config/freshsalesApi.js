const axios = require('axios');

const freshsalesApi = axios.create({
  baseURL: `https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api`,
  headers: {
    'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

module.exports = freshsalesApi;