const axios = require("axios");

const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const genres = document.getElementById("genres");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

const form = document.getElementById("formMovies");

const submit = document.getElementById("btnSubmit");
const btnClear = document.getElementById("btnClear");

function reset() {
  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  genres.value = "";
  rate.value = "";
  poster.value = "";

  btnClear.addEventListener("click", () => form.reset());
}

function deliver() {
  if (
    typeof title.value !== "string" ||
    typeof director.value !== "string" ||
    typeof duration.value !== "string" ||
    typeof genres.value !== "string" ||
    typeof poster.value !== "string"
  ) {
    alert("Datos erroneos");
  } else {
    alert("Todo correcto");
    send();
  }
}

function send() {
  const genreArray = genres.value.split(",").map((genre) => genre.trim());
  console.log("Géneros:", genreArray);

  axios
    .post("http://localhost:3001/movies/postMovies", {
      title: title.value,
      year: year.value,
      director: director.value,
      duration: duration.value,
      genre: genreArray,
      rate: rate.value,
      poster: poster.value,
    })
    .then(() => {
      alert("Películas creadas correctamente");
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

reset();

submit.addEventListener("click", deliver);
