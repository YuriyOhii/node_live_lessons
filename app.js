import * as moviesServices from "./movies/index.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const result = await moviesServices.getAllMovies();
      return console.log(result);
    case "getMovie":
      const movie = await moviesServices.getMovieById(id);
      return console.log(movie);
    case "add":
      const newMovie = await moviesServices.addMovie(data);
      return console.log(newMovie);
    case "update":
      const updatedMovie = await moviesServices.updateMovie(id, data);
      return console.log(updatedMovie);
    case "delete":
      const deletedMovie = await moviesServices.deleteMovieById(id);
      return console.log(deletedMovie);
  }
};

invokeAction({
  action: "list",
  id: "zCd_RioNMOBaQwAXnc8Px",
  director: "yura",
});
