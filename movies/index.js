// method for work with movies data
import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const moviesPath = path.join("movies", "movies.json");

const reWriteMovies = async (data) => {
  await fs.writeFile(moviesPath, JSON.stringify(data, null, 2));
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
  await reWriteMovies(movies);
  return newMovie;
};

export const updateMovie = async (id, data) => {
  const movies = await getAllMovies();
  const movieIdx = movies.findIndex((el) => el.id === id);
  if (movieIdx === -1) return null;
  movies[movieIdx] = { ...movies[movieIdx], ...data };
  await reWriteMovies(movies);
  return movies[movieIdx];
};

export const deleteMovieById = async (id) => {
  const movies = await getAllMovies();
  const movieIdx = movies.findIndex((el) => el.id === id);
  if (movieIdx === -1) { return null};
  const [result] = movies.splice(movieIdx, 1);
  await reWriteMovies(movies);
  return result;
};
