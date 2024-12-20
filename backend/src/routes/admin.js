import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/adminAuth.js';
import { getAllUsers } from '../database.js';

const router = express.Router();

// Get all users data (admin only)
router.get('/users', authenticateToken, requireAdmin, (req, res) => {
  try {
    const users = getAllUsers();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users data' });
  }
});

export default router;