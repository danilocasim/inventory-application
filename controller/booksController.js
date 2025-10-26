const db = require("../db/queries");

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
  res.render("addBook");
}

async function addBook(req, res) {
  const { genreId, title } = req.body;
  await db.addBook(genreId, title);
  res.redirect("/");
}

async function updateBook(req, res) {
  const { bookId, currentGenre } = req.params;
  const { genreId, title } = req.body;
  await db.updateBook(bookId, title, genreId);
  res.redirect(`/genres/${currentGenre}`);
}

module.exports = {
  deleteBook,
  renderAddBookForm,
  addBook,
  renderUpdateForm,
  updateBook,
  deleteBook,
};
