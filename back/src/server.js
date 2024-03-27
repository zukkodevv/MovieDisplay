//================================REQUERIMIENTO DE ARCHIVOS=====================================
const express = require("express");
//* Requerimos express para usar sus métodos.
const router = require("./routes/rIndex.js");
//* Requerimos el componente de express "Router" instanciado en la constante "router" en el archivo rIndex.js par poder usarlo cómo ruta de las peticiones.

//================================REQUERIMIENTO DE MIDDLEWARES=====================================
const cors = require("cors");
//* Requerimos el middleware pre-built para añadir seguridad "cors" para poder implementarlo en el flujo de la petición.
const morgan = require("morgan");
//* Requerimos el middleware pre-built para recibir mayor información sobre las peticiones "morgan" para poder implementarlo al flujo de la petición

//==========================IMPLEMENTACIÓN MIDDLEWARES PRE-BUILT=====================================
const app = express();
//* Definimos app como una constante de express, app es dónde se "aloja" el servidor por así decirlo, mediante el podremos levantarlo. (No es lo mismo que router)

app.use(morgan("dev"));
//* El método use() le indica al código que la solicitud debe pasar por el lugar que esta entre parentésis. En este caso le indicamos que pase por el middleware pre-built morgan para que nos de información de la solicitud en formato "dev".

app.use(cors());
//* le indicamos a la solicitud que pase por el middleware "Cors" para así darle más seguridad a nuestro servidor, rechazando solicitudes de otras aplicaciones que quieran conectarse.

app.use(express.json());
//* Por último cuándo ya se hayan implementado los dos anteriores middlewares, le indicamos a la solicitud (recordar que siempre son formato JSON) que pase por el middleware incorporado con express que transforma la solicitud de formato JSON a objetos de javascript.
//==========================IMPLEMENTACIÓN MIDDLEWARES CUSTOM=====================================
app.use((req, res, next) => {
  console.log("Estamos pasando por mi propio middleware");
  next();
});
//========================TERMINÓ LA IMPLEMENTACION DE MIDDLEWARES==================================
app.use(router);
//* Después de que la petición viajó por todos los middlewares y los pasó correctamente le decimos que siga su flujo por el router.

module.exports = app;
//* Lo exportamos para poder levantar el servidor en index.js
