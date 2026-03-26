import express from 'express';
const router = express.Router();

import { registerUser, loginUser, changePassword } from '../controllers/authController.js';
import protect from '../middleware/authMiddleware.js';
import allowRoles from '../middleware/roleMiddleware.js';

// 🔓 Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/change-password', protect, changePassword);

// 🔐 Protected Route (test)
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Protected route working',
    user: req.user
  });
});

router.get('/admin', protect, allowRoles('admin'), (req, res) => {
  res.json({
    message: 'Welcome Admin 🚀'
  });
});

export default router;