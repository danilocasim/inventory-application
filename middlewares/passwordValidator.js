require("dotenv").config();
const { body } = require("express-validator");
const notEmptyError = "Please, input a password";

const { ADMIN_PASSWORD } = process.env;

const passwordValidator = [
  body("password")
    .trim()
    .notEmpty()
    .withMessage(`${notEmptyError}`)
    .equals(ADMIN_PASSWORD)
    .withMessage("Invalid Password, Please try again"),
];

module.exports = passwordValidator;
