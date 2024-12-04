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
    INSERT INTO users (firstName, lastName, email, password)
    VALUES (@firstName, @lastName, @email, @password)
  `);
  return stmt.run(userData);
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