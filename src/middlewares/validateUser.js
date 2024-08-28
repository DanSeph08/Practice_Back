const validateUser = (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid user name' });
  }
  next();
};

module.exports = {
  validateUser,
};