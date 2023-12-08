// method for work with movies data
import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const moviesPath = path.join("movies", "movies.json");

export const getAllMovies = async () => {
  const data = await fs.readFile(moviesPath);
  return JSON.parse(data);
};
