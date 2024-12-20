import { getUserProfile } from '../database.js';

export function requireAdmin(req, res, next) {
  const userId = req.user.userId;
  const user = getUserProfile(userId);

  if (!user || !user.isAdmin) {
    console.log(user.isAdmin)
    return res.status(403).json({ message: 'Admin access required' });
  }

  next();
}