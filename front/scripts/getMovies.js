const data = require("./index");

const moviesSection = document.getElementById("cards");
//* Definimos una constante con el div general del HTML que esta encargado de contener las tarjetas de las películas.

const getMovies = (data) => {
  //* Definimos una constate cómo una arrow function que toma el parametro de data, este parametro debería referirse al objeto JSON recibido por la llamada en index.js al ser importado.
  data.forEach((movie) => {
    //* Decimos que se itere el array del JSON por cada objeto que contiene y se refiera a cada iteración(objeto) cómo movie, y para cada iteración ejecute el siguiente código;
    renderCards(movie);
    //* Le decimos al código que ejecute la función render cards con cada objeto del array cómo parametro de renderCards.
  });
};

function renderCards({ title, year, director, duration, genre, rate, poster }) {
  //* Definimos una función que toma los parametros definidos desde la petición al API obtenidos y iterados con la función getMovies
  const movieElement = document.createElement("article");
  //* Se crea un nuevo elemeto  article para luego estar dentro del moviesSection y agregar semantica.
  const containerMovie = document.createElement("div");
  //* Se crea el div que ira dentro del article, conteniendo todo el html de la tarjeta.
  containerMovie.classList.add("divMovie");
  //* Se le añade la clase divMovie para añadir css al div que contiene todo el html de las peliculas y posteriormente ponemos lo que ira dentro de su html:
  containerMovie.innerHTML = `
    <div class="p-3 border mx-2 every-container" ">
  <img class = "every-poster mx-3" src =  "${poster}" alt = ${title}/>
<h3 class = "container every-title mt-3 p-2" title = "${title}"> ${title} </h3>
<hr>
<h5 class = "container every-thing p-1"> Año de estreno: ${year} </h5>
<hr>
<h5 class = "container every-thing p-1"> Director: ${director} </h5>
<hr>
<h5 class = "container every-thing p-1"> Duración: ${duration} </h5>
<hr>
<h5 title = "${genre.join(
    " - "
  )}" class = "container every-thing every-genre p-1" > Géneros; ${genre.join(
    " - "
  )}
<h5>
<hr>
<h5 class = "container every-thing p-1"> Rating: ${rate} </h5>

</div>
   `;

  moviesSection.appendChild(movieElement);
  //* Al div definido en nuestro html y llamado con la constante moviesSection le ponemos adentro el article para la semántica
  movieElement.appendChild(containerMovie);
  //* Al article le ponemos dentro el div con todo el html de las tarjetas
}

module.exports = getMovies;
//^^ Exportamos el módulo para luego ser requerido por index.js
