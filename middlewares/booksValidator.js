const { body } = require("express-validator");

const notEmptyError = "must contain a name of the title";
const requiredSelectError = "User must select one genre";

const bookValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage(`the title ${notEmptyError}`)
    .isLength({ min: 3 })
    .withMessage("Enter a minimum of 3 character"),
  body("genreId").trim().notEmpty().withMessage(`$${requiredSelectError}`),
];

module.exports = bookValidator;
