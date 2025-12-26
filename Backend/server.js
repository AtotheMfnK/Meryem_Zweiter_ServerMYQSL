// Altes CommonJS: const express = require('express');
// Neues ES-Modul:
import express from 'express';
import mysql from 'mysql2/promise'; // Promise-basierte API

const app = express();

// Middleware
app.use(express.json());

// Rest deines Codes bleibt gleich...
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



// POST-Endpoint für Kontaktdaten
app.post('/api/kontakt', async (req, res) => {
  const { email, nachricht } = req.body;
  // ... Rest deines Codes ...
});

// db.js
async function saveBenutzer(name, email, passwort) {
  const connection = await getConnection();
  try {
    const [result] = await connection.execute(
      'INSERT INTO benutzer (name, email, passwort) VALUES (?, ?, ?)',
      [name, email, passwort]
    );
    return result;
  } finally {
    await connection.end();
  }
}

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
