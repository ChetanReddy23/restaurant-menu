import express, { json } from "express";
import cors from "cors";
import { createConnection } from "mysql2/promise";

const app = express();
app.use(cors());
app.use(json());

// Create the connection to database
const connection = await createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "restaurant_menu",
});

app.get("/menu-items", async (req, res) => {
  const [results] = await connection.query(`select * from menu`);
  res.json({ menu: results });
});

app.listen(3000, () => console.log("listening on port 3000"));
