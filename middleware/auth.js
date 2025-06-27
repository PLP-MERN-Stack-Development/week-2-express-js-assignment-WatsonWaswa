module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validKey = process.env.API_KEY || '12345';

  if (apiKey !== validKey) {
    return res.status(401).json({ error: 'Unauthorized - Invalid API key' });
  }
  next();
};
