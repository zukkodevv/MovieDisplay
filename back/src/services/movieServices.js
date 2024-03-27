//class Movies {
//  constructor(title, year, director, duration, genre, rate, poster) {
//    if (
//      typeof title !== "string" ||
//      typeof year !== "number" ||
//      typeof director !== "string" ||
//      typeof duration !== "string" ||
//      typeof genre === "number" ||
//      typeof rate !== "number" ||
//      typeof poster !== "string"
//    ) {
//      throw new Error("Error: Algún dato no es correcto.");
//    }
//
//    this.title = title;
//    this.year = year;
//    this.director = director;
//    this.duration = duration;
//    this.genre = genre;
//    this.rate = rate;
//    this.poster = poster;
//  }
//}
//
//// const peli1 = new Movies(
////   "La piedra mágica",
////   2000,
////   "Juaroncho",
////   "2hr 30min",
////   "Pesadilla - papaleta",
////   2.3,
////   "soy una url"
//// );
////
//// console.log(peli1);  - EXITO
//
//const peli1 = new Movies(
//  "Guardians of the Galaxy Vol. 2",
//  2017,
//  "James Gunn",
//  "2h 16min",
//  ["Action", "Adventure", "Comedy"],
//  7.7,
//  "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//);
//
//const peli2 = new Movies(
//  "Star Wars: Episode IV - A New Hope",
//  1977,
//  "George Lucas",
//  "2h 1min",
//  ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//  8.7,
//  "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
//);
//
//const peli3 = new Movies(
//  "The Lord of the Rings: The Fellowship of the Ring",
//  2001,
//  "Peter Jackson",
//  "2h 58min",
//  ["Action", "Adventure", "Drama", "Fantasy"],
//  8.8,
//  "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
//);
//
//const pelis = [peli1, peli2, peli3];
//
//module.exports = {
//  Movies,
//  pelis,
//};

// module.exports = {
//   getMovies: async () => {
//     return [
//       {
//         title: "Guardians of the Galaxy Vol. 2",
//         year: 2017,
//         director: "James Gunn",
//         duration: "2h 16min",
//         genre: ["Action", "Adventure", "Comedy"],
//         rate: 7.7,
//         poster:
//           "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//       },
//       {
//         title: "Star Wars: Episode IV - A New Hope",
//         year: 1977,
//         director: "George Lucas",
//         duration: "2h 1min",
//         genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//         rate: 8.7,
//         poster:
//           "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//       },
//       {
//         title: "The Lord of the Rings: The Fellowship of the Ring",
//         year: 2001,
//         director: "Peter Jackson",
//         duration: "2h 58min",
//         genre: ["Action", "Adventure", "Drama", "Fantasy"],
//         rate: 8.8,
//         poster:
//           "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//       },
//     ];
//   },
// };

const Movie = require("../models/Movie");
//* Requerimos el modelo que usaremos para poder hacer el CRUD en la base de datos.

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },
  createMovies: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};
