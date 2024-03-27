const app = require("./src/server");
//* Requerimos la instancia de express instanciado en la constante "app" para usar sus métodos en nuestro servidor.

const dbCon = require("./src/config/movieDB");
//* Requerimos la configuración de la base de datos MongoDB que se conecta vía Moongose con el URI proporiconado por .env para tener a disposición la solicitud a la base de datos que usaremos a continuación.

dbCon().then((res) => {
  app.listen(3001, () => {
    console.log("servidor escuchando en el puerto 3001");
    //* Usamos la instancia de express almacenada en la constante app en el archivo server.js para indicarle que levante el servidor y comience a escuchar en el puerto 3001, y que de un mensaje cuándo el servidor se levante correctamente.
  });
});
