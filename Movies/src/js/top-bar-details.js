import { allMoviesByPage } from "./ApiFetch";
import { createCast } from "./cast-details";
import { createCardGrid } from "./movie-card-grid";
import { createCardList } from "./movie-card-list";
import { createDynamicBar } from "./top-bar-dynamic";

export function createHeaderForDetails() {
    let sectionHeader;
    let img;
  if (!document.body.querySelector(".section-header3")) {
     sectionHeader = document.createElement("section");
    sectionHeader.className = "section-header3";
     img = document.createElement("img");
    img.setAttribute("src", "src/img/left-arrow.svg");
    img.style.cursor = "pointer";
    sectionHeader.appendChild(img);
  }

  img.addEventListener("click", (e) => {
    sectionHeader.remove();
    document.body.querySelector(".section-details").remove();
    document.body.querySelector(".section-reparto").remove();
    createDynamicBar(JSON.parse(localStorage.getItem("movies")));
  });
  return sectionHeader;
}

export async function createMainDetails(movie) {
  let sectionMain = document.createElement("section");
  sectionMain.className = "section-details";
  sectionMain.appendChild(createDivPrincipal(movie));
  let cast = createCast(await allMoviesByPage(movie.id, null, 2));
  let lista = [sectionMain, cast];
  return lista;
}

function createDivPrincipal(movie) {
  let div = document.createElement("div");
  div.className = "div-details-principal";
  div.style.backgroundImage =
    " linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/w300/" +
    movie.poster_path;
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.backgroundRepeat = "no-repeat";
  let img = document.createElement("img");
  img.className = "detail-img";
  img.setAttribute(
    "src",
    "https://image.tmdb.org/t/p/w300/" + movie.poster_path
  );
  div.appendChild(img);
  div.appendChild(createDivDetailsInfo(movie));

  return div;
}

function createDivDetailsInfo(movie) {
  let divContainerDetailsInfo = document.createElement("div");
  divContainerDetailsInfo.className = "div-details-second-info";
  divContainerDetailsInfo.appendChild(createTitleAndValoration(movie));
  divContainerDetailsInfo.appendChild(createDescription(movie));
  return divContainerDetailsInfo;
}

function createTitleAndValoration(movie) {
  let divContainer = document.createElement("div");
  let title = document.createElement("h1");
  let valoration = document.createElement("p");
  title.textContent = movie.title;
  valoration.textContent = "Valoration " + movie.votos;
  divContainer.appendChild(title);
  divContainer.appendChild(valoration);
  return divContainer;
}
function createDescription(movie) {
  let divContainer = document.createElement("div");
  let sinopsis = document.createElement("h2");
  sinopsis.textContent = "Sinopsis";
  let description = document.createElement("p");
  description.className = "description-overview";
  description.textContent = movie.sinopsis;
  divContainer.appendChild(sinopsis);
  divContainer.appendChild(description);

  return divContainer;
}
