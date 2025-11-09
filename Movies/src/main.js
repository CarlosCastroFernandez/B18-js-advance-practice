import "./scss/style.scss";
import { allMoviesByPage } from "./js/ApiFetch";
import { createCard } from "./js/MovieCard";

let movies=await allMoviesByPage(1);
createCard(movies);