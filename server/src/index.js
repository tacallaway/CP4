const express = require('express');
const app = express();
const bodyParser = require("body-parser");
require('./database');
const dbMovies = require('./models/movie');
const dbBooks = require('./models/book');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/movies', async (req, res) => {
  const movies = await dbMovies.findAll();
  res.send(movies);
});

app.post('/movies', async (req, res) => {
  try {
    const movie = await dbMovies.create(
      req.body.name,
      req.body.releaseYear,
      req.body.starring,
      req.body.boxOffice,
    );
  
    res.status(201).send(movie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/movies/:id', async (req, res) => {
  const movie = await dbMovies.find(req.params.id);
  res.send(movie);
})

app.put('/movies/:id', async (req, res) => {
  try {
    const movie = await dbMovies.update(
      req.params.id,
      req.body.name,
      req.body.releaseYear,
      req.body.starring,
      req.body.boxOffice,
    );
      
    res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    await dbMovies.remove(req.params.id);
      
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/books', async (req, res) => {
  const books = await dbBooks.findAll();
  res.send(books);
});

app.post('/books', async (req, res) => {
  try {
    const book = await dbBooks.create(
      req.body.name,
      req.body.releaseYear,
      req.body.author,
      req.body.genre
    );
  
    res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/books/:id', async (req, res) => {
  const book = await dbBooks.find(req.params.id);
  res.send(book);
})

app.put('/books/:id', async (req, res) => {
  try {
    const book = await dbBooks.update(
      req.params.id,
      req.body.name,
      req.body.releaseYear,
      req.body.author,
      req.body.genre
    );
      
    res.status(200).send(book);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    await dbBooks.remove(req.params.id);
      
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
