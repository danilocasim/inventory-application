const { body } = require("express-validator");

const notEmptyError = "must contain a name of the genre";
const genresValidator = [
  body("genre")
    .trim()
    .notEmpty()
    .withMessage(`the genre ${notEmptyError}`)
    .isLength({ min: 3 })
    .withMessage("Enter a minimum of 3 character"),
];

module.exports = genresValidator;
