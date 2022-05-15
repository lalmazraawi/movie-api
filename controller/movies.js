const movies = require('../movies')


const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByDirectorAndByTitle = (request, response) => {
  const { title } = request.params
  const foundMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase()) ||
    movie.directors.find((director) => director.toLowerCase().includes(title.toLowerCase()))
  })

  return response.send(foundMovie)
}

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovies = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovies)

  return response.status(201).send(newMovies)
}

module.exports = {
  getAllMovies,
  getMovieByDirectorAndByTitle,
  saveNewMovie,

}