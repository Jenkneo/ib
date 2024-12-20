import Database from 'better-sqlite3';

const db = new Database('database.sqlite');

export function initializeDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      isAdmin BOOLEAN DEFAULT 0,
      organizationName TEXT,
      industryType TEXT,
      annualBudget REAL,
      securityBudget REAL,
      organizationSize TEXT CHECK(organizationSize IN ('small', 'medium', 'large'))
    )
  `);
}

export function createUser(userData) {
  const stmt = db.prepare(`
    INSERT INTO users (firstName, lastName, email, password, isAdmin)
    VALUES (@firstName, @lastName, @email, @password, @isAdmin)
  `);
  return stmt.run({ ...userData, isAdmin: userData.isAdmin || 0 });
}

export function findUserByEmail(email) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
}

export function updateUserProfile(userId, profileData) {
  const stmt = db.prepare(`
    UPDATE users SET
      organizationName = @organizationName,
      industryType = @industryType,
      annualBudget = @annualBudget,
      securityBudget = @securityBudget,
      organizationSize = @organizationSize
    WHERE id = @userId
  `);
  return stmt.run({ ...profileData, userId });
}

export function getUserProfile(userId) {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
  return stmt.get(userId);
}

export function getTotalUsers() {
  const stmt = db.prepare('SELECT COUNT(*) as total FROM users');
  return stmt.get();
}

export function getAllUsers() {
  const stmt = db.prepare(`
    SELECT 
      id,
      firstName,
      lastName,
      email,
      isAdmin,
      organizationName,
      industryType,
      annualBudget,
      securityBudget,
      organizationSize
    FROM users
  `);
  return stmt.all();
}