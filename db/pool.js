const { Pool } = require("pg");
require("dotenv").config();

const { DB_NAME, DB_HOST, USERNAME, DB_PASSWORD } = process.env;

module.exports = new Pool({
  host: DB_HOST,
  database: DB_NAME,
  username: USERNAME,
  password: DB_PASSWORD,
  port: 5432,
});
