const { Router } = require("express");
const {
  getGenreBooks,
  deleteGenre,
  renderUpdateGenreForm,
  updateGenre,
  renderAddGenreForm,
  addGenre,
  renderDeleteConfirmationGenre,
} = require("../controller/genresController");
const genresRouter = Router();

genresRouter.get("/booksGenre", getGenreBooks);
genresRouter.get("/deleteGenre", renderDeleteConfirmationGenre);
genresRouter.post("/deleteGenre", deleteGenre);

genresRouter.get("/updateGenre", renderUpdateGenreForm);
genresRouter.post("/updateGenre", updateGenre);
genresRouter.get("/newGenre", renderAddGenreForm);
genresRouter.post("/newGenre", addGenre);
module.exports = genresRouter;
