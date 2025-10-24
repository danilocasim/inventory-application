const pool = require("./pool");

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres");
  return rows;
}

module.exports = { getAllGenres };
