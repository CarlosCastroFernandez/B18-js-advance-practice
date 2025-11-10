export function createCast(cast) {
  let sectionCast = document.createElement("section");
  sectionCast.className = "section-reparto";
  let containerGlobalReparto=document.createElement("div")
  let titleReparto=document.createElement("h2");
  titleReparto.textContent="Reparto";
  containerGlobalReparto.appendChild(titleReparto)
  containerGlobalReparto.className="global-reparto"
  let divContainerReparto=document.createElement("div")
  divContainerReparto.className="div-global-reparto"
  console.log("CASTTT "+cast);
  let divContainer;
  for (let value of cast) {
    console.log("CASTIG "+value);
    divContainer = document.createElement("div");
    divContainer.className = "div-container-reparto";
    let img = document.createElement("img");
    img.className = "img-reparto";
    img.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + value.profile_path
    );
    let name = document.createElement("h5");
    name.textContent = value.name;
    let character = document.createElement("p");
    character.textContent = value.character;
    divContainer.appendChild(img);
    divContainer.appendChild(name);
    divContainer.appendChild(character);
    divContainerReparto.appendChild(divContainer);

  }
  containerGlobalReparto.appendChild(divContainerReparto)

  sectionCast.appendChild(containerGlobalReparto);
  return sectionCast;
}
