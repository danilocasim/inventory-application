const db = require("../db/queries");

async function getGenreBooks(req, res) {
  const { genre } = req.params;
  const books = await db.getGenreBooks(genre);
  console.log(await db.getGenreBooks(genre));
  res.render("books", { books });
}

module.exports = { getGenreBooks };
