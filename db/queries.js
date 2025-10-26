const pool = require("./pool");

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres ORDER BY id;");
  return rows;
}

async function getAllBooks() {
  const { rows } = await pool.query("SELECT * FROM book ORDER BY id");
  return rows;
}

async function getGenreBooks(id) {
  const { rows } = await pool.query(
    "SELECT book.id, book.title FROM book INNER JOIN genres ON book.bookGenre = genres.id WHERE genres.id = $1 ORDER BY book.id",
    [id]
  );
  return rows;
}

async function getBook(id) {
  const { rows } = await pool.query("SELECT * FROM book WHERE id = $1", [id]);

  return rows;
}

async function getGenre(id) {
  const { rows } = await pool.query("SELECT * FROM genres WHERE id = $1", [id]);
  return rows;
}

async function addBook(genreId, title) {
  await pool.query("INSERT INTO book (bookGenre, title) VALUES ($1, $2)", [
    genreId,
    title,
  ]);
}

async function updateBook(id, title, bookGenre) {
  await pool.query(
    "UPDATE book SET title = $1, bookGenre = $2 WHERE id = $3;",
    [title, bookGenre, id]
  );
}

async function updateGenre(id, genre) {
  await pool.query("UPDATE genres SET genre = $1 WHERE id = $2;", [genre, id]);
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
