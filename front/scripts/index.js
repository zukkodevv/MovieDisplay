const axios = require("axios");
const getMovies = require("./getMovies");
//* Requerimos la función getMovies de su archivo.

// URL QUE USAREMOS: https://students-api.up.railway.app/movies

const pelis = async () => {
  try {
    const data = await axios.get("http://localhost:3001");
    const pelis = data.data;
    return getMovies(pelis);
  } catch (err) {
    console.log(err.message);
  }
};
pelis();

module.exports = pelis;
