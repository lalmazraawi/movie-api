const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByDirectorAndByTitle, saveNewMovie } = require('./controller/movies')


const app = express()

app.get('/movies/', getAllMovies)

app.get('/movies/:title', getMovieByDirectorAndByTitle)

app.post('/movies', bodyParser.json(), saveNewMovie)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})