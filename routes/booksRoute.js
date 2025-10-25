const { Router } = require("express");
const { deleteBook } = require("../controller/booksController");

const booksRouter = Router();

booksRouter.post("/:genreId/:bookId", deleteBook);

module.exports = booksRouter;
