const db = require("../db/queries");

async function deleteBook(req, res) {
  const { bookId, genreId } = req.params;
  await db.deleteBook(bookId);
  if (genreId === "books") res.redirect(`/${genreId}`);
  res.redirect(`/genres/${genreId}`);
}

module.exports = { deleteBook };
