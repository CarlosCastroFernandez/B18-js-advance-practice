import { allMoviesByPage } from "./ApiFetch";
import { createHeaderForDetails, createMainDetails } from "./top-bar-details";

export function createCardGrid(movies) {
  let main = document.getElementById("app");
  let sectionMain = document.createElement("section");
  sectionMain.className = "section-main";
    console.log(movies);
  for (let value of movies) {
    sectionMain.appendChild(createDivCard(value, sectionMain, main));
  }
  main.appendChild(sectionMain);
  return sectionMain;
}

function createDivCard(value, sectionMain, main) {
  let divCard = document.createElement("div");
  divCard.className = "movie-card";
  divCard.appendChild(createDivImg(value, sectionMain, main));
  divCard.appendChild(createTitle(value));
  divCard.appendChild(createValoration(value));
  divCard.appendChild(createDescription(value));
  return divCard;
}
function createDivImg(value, sectionMain, main) {
  let divImg = document.createElement("div");
  divImg.className = "containerM-img";
  let img = document.createElement("img");
  img.className = "post-movie";
  img.setAttribute(
    "src",
    "https://image.tmdb.org/t/p/w300/" + value.poster_path
  );
  divImg.appendChild(img);
  img.addEventListener("click", async (e) => {
    main.removeChild(sectionMain);
    document.body.querySelector(".section-header2").remove();
    document.body.querySelector("header").appendChild(createHeaderForDetails());
    let result = await createMainDetails(await allMoviesByPage(value.id, null, 1));
    console.log("RESULT "+result);
    main.appendChild(result[0]);
    main.appendChild(result[1]);
  });
  return divImg;
}

function createTitle(value) {
  let title = document.createElement("h2");
  title.className = "title-movie";
  title.textContent = value.title;
  return title;
}
function createValoration(value) {
  let valoration = document.createElement("p");
  valoration.textContent = "Valoracion " + value.vote_average;
  return valoration;
}

function createDescription(value) {
  let description = document.createElement("p");
  description.className = "movie-overview";
  description.textContent = value.overview;
  return description;
}
