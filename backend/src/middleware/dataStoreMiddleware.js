exports.handleDataStore = (req, res, next) => {
  const { data_store } = req.body;
  if (data_store !== 'CRM' && data_store !== 'DATABASE') {
    return res.status(400).json({ error: 'Invalid data_store value' });
  }
  req.dataStore = data_store;
  next();
};