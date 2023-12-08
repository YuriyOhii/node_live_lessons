// method for work with movies data
import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const moviesPath = path.join("movies", "movies.json");

const reWriteMovies = async (data) => {
  await fs.writeFile(moviesPath, data);
};

export const getAllMovies = async () => {
  const data = await fs.readFile(moviesPath);
  return JSON.parse(data);
};

export const getMovieById = async (id) => {
  const movies = await getAllMovies();
  const movie = movies.find((el) => el.id === id);
  return movie || null;
};

export const addMovie = async (data) => {
  const movies = await getAllMovies();
  const newMovie = { id: nanoid(), ...data };
  movies.push(newMovie);
  reWriteMovies(JSON.stringify(movies, null, 2));
  return newMovie;
};
