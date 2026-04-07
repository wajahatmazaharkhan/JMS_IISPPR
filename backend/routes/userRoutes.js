import express from 'express';
const router = express.Router();

import protect from '../middleware/authMiddleware.js';
import allowRoles from '../middleware/roleMiddleware.js';
import { createUserByAdmin, updateUserRole } from '../controllers/userController.js';

// 🔐 Protected + Role-based route
router.post(
  '/create',
  protect,
  allowRoles('admin', 'chief_editor', 'editor'),
  createUserByAdmin
);

router.put(
  '/:id/role',
  protect,
  allowRoles('admin'),
  updateUserRole
);

export default router;