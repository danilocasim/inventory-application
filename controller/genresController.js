const db = require("../db/queries");

async function getGenreBooks(req, res) {
  const { genreId } = req.params;
  const books = await db.getGenreBooks(genreId);
  res.render("books", { books, genreId });
}

async function renderUpdateGenreForm(req, res) {
  const { genreId } = req.params;
  const genreDetails = await db.getGenre(genreId);
  res.render("updateGenres", {
    genreId,
    genreDetails: genreDetails[0],
  });
}

async function updateGenre(req, res) {
  const { genreId } = req.params;
  const { genre } = req.body;

  await db.updateGenre(genreId, genre);
  res.redirect("/genres");
}

async function deleteGenre(req, res) {
  const { genreId } = req.params;
  await db.deleteGenre(genreId);
  res.redirect("/genres");
}

module.exports = {
  getGenreBooks,
  deleteGenre,
  renderUpdateGenreForm,
  updateGenre,
};
