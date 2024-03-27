require("dotenv").config();

const mongoose = require("mongoose");

const movieDB = async () => {
  const movies = await mongoose.connect(process.env.MOVIES_URI);
  return movies;
};

module.exports = movieDB;
