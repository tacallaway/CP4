const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
  name: String,
  releaseYear: Number,
  author: String,
  genre: String
});

function findAll() {
  return Book.find({}).exec();
}

function find(id) {
  return Book.findOne({ _id: id }).exec();
}

function create(name, releaseYear, author, genre) {
  const book = new Book({
    name,
    releaseYear,
    author,
    genre
  });

  return book.save();
};

async function update(id, name, releaseYear, author, genre) {

  const book = await find(id);  
  book.name = name;
  book.releaseYear = releaseYear;
  book.author = author;
  book.genre = genre;
  return book.save();
}

function remove(id) {

  return Book.deleteOne({ _id: id });
}

module.exports = {
  Book,
  findAll,
  create,
  update,
  find,
  remove
};