// Electron_vue/database.js
const Database = require('better-sqlite3');
const path = require('path');

// Create DB in Electron_vue folder
const db = new Database(path.join(__dirname, 'events.db'));

// Create events table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    organizer TEXT,
    date TEXT,
    time TEXT,
    location TEXT,
    description TEXT,
    email TEXT
  )
`).run();

// Add an event
function addEvent(event) {
  const stmt = db.prepare(`
    INSERT INTO events (name, organizer, date, time, location, description, email)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    event.name,
    event.organizer,
    event.date,
    event.time,
    event.location,
    event.description,
    event.email
  );
}

// Get all events
function getAllEvents() {
  return db.prepare('SELECT * FROM events').all();
}

module.exports = { addEvent, getAllEvents };
