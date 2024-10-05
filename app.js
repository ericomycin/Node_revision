import express from "express";
import dotenv from 'dotenv';
import path from "node:path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static('public'));

app.listen(PORT, () =>{
  console.log(`App is running at ${PORT}`)
})

app.get("/", (req, res) =>{
  res.render("index")}
)

app.get("/about", (req, res) => {
  res.render("about")
})