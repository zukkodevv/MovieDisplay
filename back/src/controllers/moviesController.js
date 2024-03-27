const movieServices = require("../services/movieServices");

module.exports = {
  getMovies: async (req, res) => {
    //* Comenzamos a construir la lógica del controlador, definiendolo cómo una constante llamada moviesController con una función que recibe la petición y puede programar una respuesta, en este caos solo contruiremos la lógica de la respuesta.
    try {
      const movies = await movieServices.getMovies();

      res.status(200).json(movies);
      //* Le decimos que cuándo todo se ejecute correctamente, devuelva cómo respuesta el estatus 200 (OK) y un mensaje "pelis en camino".
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createMovie: async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const newMovie = await movieServices.createMovies({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    res.status(200).json(newMovie);
  },
};
