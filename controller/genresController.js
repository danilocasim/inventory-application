const db = require("../db/queries");
const { validationResult, matchedData } = require("express-validator");
const genresValidator = require("../middlewares/genresValidator");

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

async function deleteGenre(req, res) {
  const { genreId } = req.params;
  await db.deleteGenre(genreId);
  res.redirect("/genres");
}

async function renderAddGenreForm(req, res) {
  res.render("addGenre");
}

const addGenre = [
  genresValidator,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("addGenre", { errors: errors.array() });
    }
    const { genre } = matchedData(req);
    await db.addGenre(genre);
    res.redirect("/genres");
  },
];

const updateGenre = [
  genresValidator,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("addGenre", { errors: errors.array() });
    }
    const { genreId } = req.params;
    const { genre } = matchedData(req);
    await db.updateGenre(genreId, genre);
    res.redirect("/genres");
  },
];

module.exports = {
  getGenreBooks,
  deleteGenre,
  renderUpdateGenreForm,
  updateGenre,
  addGenre,
  renderAddGenreForm,
};
