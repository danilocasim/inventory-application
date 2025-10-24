const { Router } = require("express");
const { getGenreBooks } = require("../controller/genresController");
const genresRouter = Router();

genresRouter.get("/:genre", getGenreBooks);

module.exports = genresRouter;
