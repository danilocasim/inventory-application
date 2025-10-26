const { Router } = require("express");
const {
  deleteBook,
  renderAddBookForm,
  addBook,
} = require("../controller/booksController");

const booksRouter = Router();

booksRouter.post("/delete/:genreId/:bookId", deleteBook);
booksRouter.get("/newBook", renderAddBookForm);
booksRouter.post("/newBook", addBook);

module.exports = booksRouter;
