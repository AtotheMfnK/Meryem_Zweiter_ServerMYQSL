import express from "express";
import cors from "cors";



const app = express();
const PORT = 3300;
app.use(cors());
app.use(express.json());



// Beispiel-API 
app.get("/api/message", (req, res) => {
  res.json({ msg: "Hallo aus dem Express Backend!" });
});

app.get("/api/users", async (req,res) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query("SELECT * FROM users");
        res.json(rows);
    } catch(err) {
        response.status(500).json({ error:err.message });
    }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

