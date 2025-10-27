const { Router } = require("express");
const {
  deleteBook,
  renderAddBookForm,
  renderUpdateForm,
  updateBook,
  addBook,
} = require("../controller/booksController");

const booksRouter = Router();
booksRouter.post("/deleteBook/:genreId", deleteBook);
booksRouter.post("/newBook", addBook);
booksRouter.get("/newBook", renderAddBookForm);
booksRouter.get("/updateBook", renderUpdateForm); // css not working becuase of another param
booksRouter.post("/updateBook", updateBook);

module.exports = booksRouter;
