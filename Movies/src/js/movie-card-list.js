import { createHeaderForDetails, createMainDetails } from "./top-bar-details";

createHeaderForDetails;
export function createCardList(movies) {
  let main = document.getElementById("app");
  let sectionMain = document.createElement("section");
  sectionMain.className = "section-main-list";
  for (let value of movies) {
    sectionMain.appendChild(createDivCard(value, sectionMain, main));
  }
  main.appendChild(sectionMain);
  return sectionMain;
}
function createDivCard(value, sectionMain, main) {
  let divCard = document.createElement("div");
  divCard.className = "movie-card-list";
  divCard.appendChild(createDivImg(value, sectionMain, main));
  divCard.appendChild(containerDiv(value));
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
    main.appendChild(result[0]);
    main.appendChild(result[1]);
  });
  return divImg;
}
function containerDiv(value) {
  let divContainer = document.createElement("div");
  divContainer.className = "div-container-info";
  divContainer.appendChild(divTitleAndValoration(value));
  divContainer.appendChild(createDescription(value));
  return divContainer;
}
function divTitleAndValoration(value) {
  let divContainer = document.createElement("div");
  divContainer.className = "div-parte1";
  divContainer.appendChild(createTitle(value));
  divContainer.appendChild(createValoration(value));
  return divContainer;
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
