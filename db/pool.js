const { Pool } = require("pg");
require("dotenv").config();

// for localhost
const { NODE_ENV, DB_NAME, DB_HOST, USERNAME, DB_PASSWORD } = process.env;

// for neon
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE, PGCHANNELBINDING } =
  process.env;

if (NODE_ENV === "dev") {
  module.exports = new Pool({
    host: DB_HOST,
    database: DB_NAME,
    username: USERNAME,
    password: DB_PASSWORD,
    port: 5432,
  });
}

if (NODE_ENV === "prod") {
  module.exports = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
      require: true,
    },
  });
}
