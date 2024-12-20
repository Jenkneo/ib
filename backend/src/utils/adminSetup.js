import bcrypt from 'bcryptjs';
import { findUserByEmail, createUser } from '../database.js';

export async function setupDefaultAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminFirstName = process.env.ADMIN_FIRST_NAME;
  const adminLastName = process.env.ADMIN_LAST_NAME;

  try {
    const existingAdmin = findUserByEmail(adminEmail);
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      
      createUser({
        firstName: adminFirstName,
        lastName: adminLastName,
        email: adminEmail,
        password: hashedPassword,
        isAdmin: true
      });
      
      console.log('Default admin user created successfully');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
}