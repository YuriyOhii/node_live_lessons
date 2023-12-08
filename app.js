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
  }
};

invokeAction({ action: "list", director: 'yura', title: 'my title' });
