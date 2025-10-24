const pool = require("./pool");

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres");
  return rows;
}

async function getAllBooks() {
  const { rows } = await pool.query("SELECT * FROM book");
  return rows;
}

async function getGenreBooks(id) {
  const { rows } = await pool.query(
    "SELECT book.id, book.title FROM book INNER JOIN genres ON book.bookGenre = genres.id WHERE genres.id = $1;",
    [id]
  );
  return rows;
}

module.exports = { getAllGenres, getAllBooks, getGenreBooks };
