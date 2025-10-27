const db = require("../db/queries");
const bookValidator = require("../middlewares/booksValidator");
const { validationResult, matchedData } = require("express-validator");

async function deleteBook(req, res) {
  const { genreId } = req.params;
  const { bookId } = req.body;
  await db.deleteBook(bookId);
  if (genreId === "books") res.redirect(`/${genreId}`);
  res.redirect(`/booksGenre?genreId=${genreId}`);
}

async function renderUpdateForm(req, res) {
  const { bookId } = req.query;
  const genres = await db.getAllGenres();
  const book = await db.getBook(bookId);
  res.render("updateBook", { book: book[0], genres });
}

async function renderAddBookForm(req, res) {
  const genres = await db.getAllGenres();
  res.render("addBook", { genres });
}

const addBook = [
  bookValidator,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const genres = await db.getAllGenres();

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
        .render("updateBook", { errors: errors.array(), genres });
    }
    const { bookId } = req.body;
    const { genreId, title } = matchedData(req);
    await db.updateBook(bookId, title, genreId);

    res.redirect(`/booksGenre?genreId=${genreId}`);
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
