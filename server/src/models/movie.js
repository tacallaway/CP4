const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
  name: String,
  releaseYear: Number
});

function findAll() {
  return Movie.find({}).exec();
}

function find(id) {
  return Movie.findOne({ _id: id }).exec();
}

function create(name, releaseYear) {
  const movie = new Movie({
    name: name,
    releaseYear: releaseYear,
  });

  return movie.save();
};

async function update(id, name, releaseYear) {

  const movie = await find(id);  
  movie.name = name;
  movie.releaseYear = releaseYear;
  return movie.save();
}

function remove(id) {

  return Movie.deleteOne({ _id: id });
}

module.exports = {
  Movie,
  findAll,
  create,
  update,
  find,
  remove
};