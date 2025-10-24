const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  database: "books_management",
  username: "danilo",
  password: "06092005",
  port: 5432,
});
