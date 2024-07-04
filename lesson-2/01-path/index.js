import movies from "./movies/index.js";

movies.read()
  .then(console.log)
  .catch(console.error)
