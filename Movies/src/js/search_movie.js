import { allMoviesByPage } from "./ApiFetch";
import { createDynamicBar } from "./top-bar-dynamic";

export function searchMovie() {
  let container = document.querySelector(".container-search");

  let lista = Array.from(container.children);
  console.log(lista);
  container.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (document.body.querySelector(".section-main")) {
      document.body.querySelector(".section-main").remove();
      createDynamicBar(await allMoviesByPage(lista[0].value, null, 3));
    } else if (document.body.querySelector(".section-main-list")) {
      document.body.querySelector(".section-main-list").remove();
      createDynamicBar(await allMoviesByPage(lista[0].value, null, 3));
    } else {
      document.body.querySelector(".section-details").remove();
      document.body.querySelector(".section-team").remove();
      if (document.body.querySelector(".section-header3"))
        document.body.querySelector(".section-header3").remove();
      createDynamicBar(await allMoviesByPage(lista[0].value, null, 3));
    }
  });
}
