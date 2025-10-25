const db = require("../db/queries");

async function deleteBook(req, res) {
  const { bookId, genreId } = req.params;
  await db.deleteBook(bookId);
  res.redirect(`/genres/${genreId}`);
}

module.exports = { deleteBook };
