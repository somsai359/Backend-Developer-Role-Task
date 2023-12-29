const router = require('express').Router();
const admin = require('../models/admin');

// Admin credentials
const adminEmail = 'admin@admin.com';
const adminPassword = 'admin';

// Admin login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === adminEmail && password === adminPassword) {
      // If the credentials match, allow admin access
      res.json({ message: 'Admin logged in successfully' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error in admin login', error: err.message });
  }
});

module.exports = router;
