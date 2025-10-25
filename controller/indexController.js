const db = require("../db/queries");

async function renderHomepage(req, res) {
  res.render("index");
}

async function renderAllGenres(req, res) {
  const genres = await db.getAllGenres();
  res.render("genres", { genres });
}

async function renderAllBooks(req, res) {
  const books = await db.getAllBooks();

  res.render("books", { books, genreId: "books" });
}

module.exports = { renderHomepage, renderAllGenres, renderAllBooks };
