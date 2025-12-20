import mysql from "mysql2/promise";

let db;

async function connectToDatabase() {
  if (!db) {
    db = await mysql.createConnection({
      host: "localhost",
      user: "Marta",
      password: "Marta1Angelo#",
      database: "meryem"
    });
    console.log("Mit MySQL verbunden!");
  }
  return db;
}

export default connectToDatabase;