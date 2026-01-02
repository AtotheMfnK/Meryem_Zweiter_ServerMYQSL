import express from 'express';


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

// POST-Endpunkt: Neues Schmuckprodukt hinzufügen
app.post('/api/produkte', async (req, res) => {
  try {
    const { typ, kettentyp, laenge, material, preis, bestand } = req.body;

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    const [result] = await connection.query(
      'INSERT INTO produkte (typ, kettentyp, laenge, material, preis, bestand) VALUES (?, ?, ?, ?, ?, ?)',
      [typ, kettentyp, laenge, material, preis, bestand]
    );

    await connection.end();
    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Produkts:', error);
    res.status(500).json({ error: error.message });
  }
});


// GET-Endpunkt: Alle Produkte abrufen
app.get('/api/produkte', async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM produkte;');
    await connection.end();
    res.json(rows);
  } catch (error) {
    console.error('Fehler beim Abrufen der Produkte:', error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Produkte' });
  }
});

// POST-Endpunkt: Neues Produkt hinzufügen
app.post('/api/produkte', async (req, res) => {
  try {
    const { typ, kettentyp, laenge, material, preis, bestand } = req.body;
    const connection = await getConnection();

    const [result] = await connection.query(
      'INSERT INTO produkte (typ, kettentyp, laenge, material, preis, bestand) VALUES (?, ?, ?, ?, ?, ?)',
      [typ, kettentyp, laenge, material, preis, bestand]
    );

    await connection.end();
    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Produkts:', error);
    res.status(500).json({ error: 'Fehler beim Hinzufügen des Produkts' });
  }
})
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
