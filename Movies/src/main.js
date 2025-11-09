import "./scss/style.scss";
import { allMoviesByPage } from "./js/ApiFetch";
import {createDynamicBar} from "./js/top-bar-dynamic"
sessionStorage.clear()
let movies=await allMoviesByPage(1);
createDynamicBar(movies);