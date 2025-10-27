require("dotenv").config();
const db = require("../db/queries");
const { validationResult, matchedData } = require("express-validator");
const genresValidator = require("../middlewares/genresValidator");
const passwordValidator = require("../middlewares/passwordValidator");

async function getGenreBooks(req, res) {
  const { genreId } = req.query;
  const books = await db.getGenreBooks(genreId);
  res.render("books", { books, genreId });
}

async function renderUpdateGenreForm(req, res) {
  const { genreId } = req.query;
  const genreDetails = await db.getGenre(genreId);
  console.log(genreDetails);
  res.render("updateGenres", {
    genreId,
    genreDetails: genreDetails[0],
  });
}

async function renderDeleteConfirmationGenre(req, res) {
  const { genreId } = req.query;
  const genreDetails = await db.getGenre(genreId);
  res.render("deleteConfirmationGenre", { genreDetails: genreDetails[0] });
}

async function renderAddGenreForm(req, res) {
  res.render("addGenre");
}

const updateGenre = [
  genresValidator.concat(passwordValidator),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("updateGenre", { errors: errors.array() });
    }
    const { genreId } = req.body;
    const { genre } = matchedData(req);
    await db.updateGenre(genreId, genre);
    res.redirect("/genres");
  },
];

const addGenre = [
  genresValidator.concat(passwordValidator),
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

const deleteGenre = [
  passwordValidator,
  async (req, res) => {
    const errors = validationResult(req);
    const { genreId } = req.body;
    const genreDetails = await db.getGenre(genreId);

    if (!errors.isEmpty()) {
      return res.status(400).render("deleteConfirmationGenre", {
        errors: errors.array(),
        genreDetails: genreDetails[0],
      });
    }
    await db.deleteGenre(genreId);
    res.redirect("/genres");
  },
];

module.exports = {
  getGenreBooks,
  deleteGenre,
  renderUpdateGenreForm,
  renderDeleteConfirmationGenre,
  updateGenre,
  addGenre,
  renderAddGenreForm,
};
