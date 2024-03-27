const { Router } = require("express");
//* Requerimos el componente router de express
const moviesController = require("../controllers/moviesController");
//* Requerimos el controlador de solicitud a la ruta "/"

const moviesRouter = Router();
//* asignamos moviesrouter como una instancia del componente router lo que nos permitira usarlo para crear una ruta nueva.

moviesRouter.get("/", moviesController.getMovies);
//* asignamos que cuándo se hace una llamada tipo get a la ruta terminada en "/" se ejecute el controlador de moviesController.

moviesRouter.post("/movies/postMovies", moviesController.createMovie);

module.exports = moviesRouter;
