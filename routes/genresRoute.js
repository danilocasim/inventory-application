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

genresRouter.get("/genres/:genreId", getGenreBooks);
genresRouter.get("/deleteGenre/:genreId", renderDeleteConfirmationGenre);
genresRouter.post("/deleteGenre/:genreId", deleteGenre);

genresRouter.get("/updateGenre/:genreId", renderUpdateGenreForm);
genresRouter.post("/updateGenre/:genreId", updateGenre);
genresRouter.get("/newGenre", renderAddGenreForm);
genresRouter.post("/newGenre", addGenre);
module.exports = genresRouter;
