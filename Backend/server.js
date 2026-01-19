import express from 'express';
import connectToDatabase from "./db.js";

const app = express();
app.use(cors()); 


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



// GET-Endpunkt: Alle Produkte abrufen
app.get('/api/produkte', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [rows] = await db.query('SELECT * FROM produkte;');
    res.json(rows);
  } catch (error) {
    console.error('Fehler beim Abrufen der Produkte:', error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Produkte' });
  }
});

// POST-Endpunkt: Neues Produkt hinzufügen
app.post('/api/produkte', async (req, res) => {
  const {
    typ,
    kettentyp,
    laenge,
    material,
    preis,
    bestand
  } = req.body;

  try {
    const db = await connectToDatabase();

    const sql = `
      INSERT INTO produkte
      (typ, kettentyp, laenge, material, preis, bestand)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(sql, [
      typ,
      kettentyp,
      laenge,
      material,
      preis,
      bestand
    ]);

    res.status(201).json({
      message: "Produkt erfolgreich eingefügt",
      id: result.insertId
    });

  } catch (error) {
    console.error("Fehler beim Einfügen:", error);
    res.status(500).json({ error: "Produkt konnte nicht eingefügt werden" });
  }
});


// db.js
// async function saveBenutzer(name, email, passwort) {
//   const connection = await getConnection();
//   try {
//     const [result] = await connection.execute(
//       'INSERT INTO benutzer (name, email, passwort) VALUES (?, ?, ?)',
//       [name, email, passwort]
//     );
//     return result;
//   } finally {
//     await connection.end();
//   }
// }

// Server starten


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
