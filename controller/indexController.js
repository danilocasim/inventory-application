const db = require("../db/queries");

async function renderHomepage(req, res) {
  res.render("index");
}

async function renderAllGenres(req, res) {
  const genres = await db.getAllGenres();
  console.log(genres);
  res.render("genres", { genres });
}

async function renderAllBooks(req, res) {
  res.render("books");
}

module.exports = { renderHomepage, renderAllGenres, renderAllBooks };
