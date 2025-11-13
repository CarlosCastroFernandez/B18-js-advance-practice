import "./scss/style.scss";
import { allMoviesByPage } from "./js/ApiFetch";
import {createDynamicBar} from "./js/top-bar-dynamic"
import { searchMovie } from "./js/search_movie";
sessionStorage.clear()
sessionStorage.setItem("option","grid");
let movies=await allMoviesByPage(1,"upcoming",0);
localStorage.setItem("movies",JSON.stringify(movies));
createDynamicBar(movies);
searchMovie();