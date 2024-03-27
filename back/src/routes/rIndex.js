const moviesRouter = require("./moviesRouter");
//* Requerimos la instancia del componente Router de express asignada cómo valor de la constante moviesRouter para poder definir una nueva ruta que reciba peticiones.

const moviesController = require("../controllers/moviesController");

const { Router } = require("express");
//* Requerimos el componente Router de express para que este disponible, poder crear una constante con el componente instanciado y poder crear una nueva ruta que reciba peticiones.

const router = Router();
//* Creamos una intancia de Router asignada como router que va a recibir peticiones a una ruta posteriormente.

router.post("/movies/postMovie", moviesRouter);

router.use("/movies", moviesRouter);
//* Le indicmaos al servidor que cuándo reciba una solicitud a la ruta "/movies" ejecute su lógica de ruta.

router.use("/", moviesRouter);
//* Le indicamos al servidor que cuándo reciba una solicitud a la ruta "/" ejecute la misma lógica de ruta que la anterior.

module.exports = router;
//* Exportamos el router para poder requerirlo en otros archivos.
