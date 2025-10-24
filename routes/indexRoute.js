const { Router } = require("express");
const {
  renderHomepage,
  renderAllGenres,
  renderAllBooks,
} = require("../controller/indexController");
const indexRouter = Router();

indexRouter.get("/", renderHomepage);
indexRouter.get("/genres", renderAllGenres);
indexRouter.get("/books", renderAllBooks);

module.exports = indexRouter;
