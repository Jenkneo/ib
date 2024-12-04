import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { getUserProfile, updateUserProfile } from '../database.js';

const router = express.Router();

// Get user profile
router.get('/', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    const userProfile = getUserProfile(userId);

    if (!userProfile) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove sensitive information
    delete userProfile.password;
    
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// Update user profile
router.put('/', authenticateToken, (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      organizationName,
      industryType,
      annualBudget,
      securityBudget,
      organizationSize
    } = req.body;

    updateUserProfile(userId, {
      organizationName,
      industryType,
      annualBudget,
      securityBudget,
      organizationSize
    });

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

export default router;