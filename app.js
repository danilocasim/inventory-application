require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/indexRoute");
const genresRouter = require("./routes/genresRoute");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env;

app.use("/", indexRouter);
app.use("/genres", genresRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`The server is live on http://localhost:${PORT}`);
});
