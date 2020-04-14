const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
  name: String,
  releaseYear: String,
  starring: String,
  boxOffice: String
});

function findAll() {
  return Movie.find({}).exec();
}

function find(id) {
  return Movie.findOne({ _id: id }).exec();
}

function create(name, releaseYear, starring, boxOffice) {
  const movie = new Movie({
    name,
    releaseYear,
    starring,
    boxOffice
  });

  return movie.save();
};

async function update(id, name, releaseYear, starring, boxOffice) {

  const movie = await find(id);  
  movie.name = name;
  movie.releaseYear = releaseYear;
  movie.starring = starring;
  movie.boxOffice = boxOffice;
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