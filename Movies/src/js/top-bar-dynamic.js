import { allMoviesByPage } from "./ApiFetch";
import { createCardGrid } from "./movie-card-grid";
import { createCardList } from "./movie-card-list";

export function createDynamicBar(movies) {
  let cardGrid;
  let cardList;
  let pasada = true;
  if (sessionStorage.getItem("select") === null) {
    sessionStorage.setItem("select", "Proxmamente");
    pasada = false;
  }

  if (
    document.body.querySelector(".select") !== null &&
    document.body.querySelector(".divContainerImg") !== null
  ) {
    console.log(document.body.querySelector(".select"));
    document.body.querySelector(".select").remove();
    document.body.querySelector(".divContainerImg").remove();
  }
  if (sessionStorage.getItem("option") === "grid") {
    cardGrid = createCardGrid(movies);
  } else if (sessionStorage.getItem("option") === "list") {
    //OTRA
    cardList = createCardList(movies);
  } else {
    cardGrid = createCardGrid(movies);
  }

  let sectionh2 = document.createElement("section");

  if (!document.body.querySelector(".section-header2")) {
    sectionh2 = document.createElement("section");
    sectionh2.className = "section-header2";
    sectionh2.appendChild(createSelect(cardGrid, cardList));
    sectionh2.appendChild(createDivImg(movies, cardGrid, cardList));
    document.body.querySelector("header").appendChild(sectionh2);
  } else {
    sectionh2 = document.querySelector(".section-header2");
    sectionh2.appendChild(createSelect(cardGrid, cardList));
    sectionh2.appendChild(createDivImg(movies, cardGrid, cardList));
  }
}

function createDivImg(movies, cardGrid, cardList) {
  let divImg = document.createElement("div");
  divImg.className = "divContainerImg";
  divImg.style.display = "flex";
  divImg.style.gap = "10px";
  let imgGrid = document.createElement("img");
  imgGrid.setAttribute("src", "src/img/grid-layout.svg");
  imgGrid.style.width = "30px";
  imgGrid.style.cursor = "pointer";
  let imgList = document.createElement("img");
  imgList.style.width = "30px";
  imgList.style.cursor = "pointer";
  imgList.setAttribute("src", "src/img/list-layout.svg");
  divImg.appendChild(imgGrid);
  divImg.appendChild(imgList);

  imgGrid.addEventListener("click", (e) => {
    if (sessionStorage.getItem("option") !== "grid") {
      sessionStorage.setItem("option", "grid");
      if (typeof cardList !== undefined) {
        cardList.remove();
      }
      cardGrid = createCardGrid(movies);
    }
  });
  imgList.addEventListener("click", (e) => {
    if (sessionStorage.getItem("option") !== "list") {
      sessionStorage.setItem("option", "list");
      console.log("ENtro");
      if (typeof cardGrid !== undefined) {
        cardGrid.remove();
      }
      //falta el cardList
      cardList = createCardList(movies);
    }
  });

  return divImg;
}

function createSelect() {
  let select = document.createElement("select");
  select.className = "select";
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  let option4 = document.createElement("option");
  option1.setAttribute("value", "Proximamente");
  option1.textContent = "Proximamente";
  option1.selected =
    sessionStorage.getItem("select") === "Proximamente" ? true : false;
  option2.setAttribute("value", "Populares");
  option2.textContent = "Populares";
  option2.selected =
    sessionStorage.getItem("select") === "Populares" ? true : false;
  option3.setAttribute("value", "Mas Valoradas");
  option3.selected =
    sessionStorage.getItem("select") === "Mas Valoradas" ? true : false;
  option3.textContent = "Mas Valoradas";
  option4.setAttribute("value", "En cartelera");
  option4.textContent = "En cartelera";
  option4.selected =
    sessionStorage.getItem("select") === "En cartelera" ? true : false;

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);

  select.addEventListener("change", async (e) => {
    let movies;
    if (document.body.querySelector(".section-main") !== null) {
      document.body.querySelector(".section-main").remove();
    }
    if (document.body.querySelector(".section-main-list") !== null) {
      console.log(typeof cardList);
      document.body.querySelector(".section-main-list").remove();
    }
    switch (select.value) {
      case "Proximamente":
        movies = await allMoviesByPage(1, "upcoming");
        sessionStorage.setItem("select", "Proximamente");
        createDynamicBar(movies);

        break;
      case "Populares":
        movies = await allMoviesByPage(1, "popular");
        sessionStorage.setItem("select", "Populares");
        createDynamicBar(movies);

        break;
      case "Mas Valoradas":
        movies = await allMoviesByPage(1, "top_rated");
        sessionStorage.setItem("select", "Mas Valoradas");
        createDynamicBar(movies);

        break;
      case "En cartelera":
        movies = await allMoviesByPage(1, "now_playing");
        sessionStorage.setItem("select", "En cartelera");
        createDynamicBar(movies);

        break;
    }
  });
  return select;
}
