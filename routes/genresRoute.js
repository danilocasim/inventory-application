const { Router } = require("express");
const {
  getGenreBooks,
  deleteGenre,
  renderUpdateGenreForm,
  updateGenre,
} = require("../controller/genresController");
const genresRouter = Router();

genresRouter.get("/genres/:genreId", getGenreBooks);
genresRouter.post("/delete/:genreId", deleteGenre);

genresRouter.get("/updateGenre/:genreId", renderUpdateGenreForm);
genresRouter.post("/updateGenre/:genreId", updateGenre);
module.exports = genresRouter;
