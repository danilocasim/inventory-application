require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env;

app.get("/", (req, res) => res.send("HEY"));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`The server is live on http://localhost:${PORT}`);
});
