const { Router } = require("express");
const {
  deleteBook,
  renderAddBookForm,
  addBook,
  renderUpdateForm,
  updateBook,
} = require("../controller/booksController");

const booksRouter = Router();

booksRouter.post("/delete/:genreId/:bookId", deleteBook);
booksRouter.get("/newBook", renderAddBookForm);
booksRouter.post("/newBook", addBook);
booksRouter.get("/updateBook/:genreId/:bookId", renderUpdateForm);
booksRouter.post("/updateBook/:currentGenre/:bookId", updateBook);

module.exports = booksRouter;
