import express from 'express';
const router = express.Router();

import protect from '../middleware/authMiddleware.js';
import allowRoles from '../middleware/roleMiddleware.js';
import { createUserByAdmin } from '../controllers/userController.js';

// 🔐 Protected + Role-based route
router.post(
  '/create',
  protect,
  allowRoles('admin', 'chief_editor', 'editor'),
  createUserByAdmin
);

export default router;