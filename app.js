import * as moviesServices from "./movies/index.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const result = await moviesServices.getAllMovies();
      return console.log(result);
  }
};

invokeAction({action: 'list'});
