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

async function addBook(genreId, title) {
  await pool.query("INSERT INTO book (bookGenre, title) VALUES ($1, $2)", [
    genreId,
    title,
  ]);
}

async function deleteBook(id) {
  await pool.query("DELETE FROM book WHERE id = $1;", [id]);
}

module.exports = {
  getAllGenres,
  getAllBooks,
  getGenreBooks,
  deleteBook,
  addBook,
};
