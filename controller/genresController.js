const db = require("../db/queries");

async function getGenreBooks(req, res) {
  const { genre } = req.params;
  const books = await db.getGenreBooks(genre);
  res.render("books", { books, genreId: genre });
}

module.exports = { getGenreBooks };
