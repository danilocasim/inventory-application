const db = require("../db/queries");
const bookValidator = require("../middlewares/booksValidator");
const { validationResult, matchedData } = require("express-validator");

async function deleteBook(req, res) {
  const { bookId, genreId } = req.params;
  await db.deleteBook(bookId);
  if (genreId === "books") res.redirect(`/${genreId}`);
  res.redirect(`/genres/${genreId}`);
}

async function renderUpdateForm(req, res) {
  const { bookId } = req.params;
  const book = await db.getBook(bookId);
  res.render("updateBook", { book: book[0] });
}

async function renderAddBookForm(req, res) {
  const genres = await db.getAllGenres();
  res.render("addBook", { genres });
}

const addBook = [
  bookValidator,
  async (req, res) => {
    const errors = validationResult(req);
    const genres = await db.getAllGenres();

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("addBook", { errors: errors.array(), genres });
    }
    const { genreId, title } = matchedData(req);
    await db.addBook(genreId, title);
    res.redirect("/");
  },
];

const updateBook = [
  bookValidator,
  async (req, res) => {
    const errors = validationResult(req);
    const genres = await db.getAllGenres();

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("addBook", { errors: errors.array(), genres });
    }
    const { bookId, currentGenre } = req.params;
    const { genreId, title } = matchedData(req);
    await db.updateBook(bookId, title, genreId);
    res.redirect(`/genres/${currentGenre}`);
  },
];

module.exports = {
  deleteBook,
  renderAddBookForm,
  renderUpdateForm,
  updateBook,
  addBook,
  deleteBook,
};
