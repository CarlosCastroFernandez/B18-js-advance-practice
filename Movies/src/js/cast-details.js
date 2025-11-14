export function createCast(cast) {
  let sectionCast = document.createElement("section");
  sectionCast.className = "section-team";

  sectionCast.appendChild(createDivContainerCast(cast.cast));
  sectionCast.appendChild(createDivContainerCast(cast.crew));

  return sectionCast;
}

function createDivContainerCast(casts) {
  let containerDivCast = document.createElement("div");
  containerDivCast.className = "container-div-cast";
  let repartoTitle = document.createElement("h2");
  repartoTitle.textContent = "REPARTO";
  repartoTitle.style.margin = "30px";
  let containerCast = document.createElement("div");
  containerCast.className = "container-last-cast";
  for (let value of casts) {
    let divCard = document.createElement("div");
    let img = document.createElement("img");
    img.className = "img-team";
    img.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/" + value.profile_path
    );
    img.onerror = function () {
      this.src = "src/img/profile.png";
    };
    let titleName = document.createElement("h5");
    titleName.textContent = value.name;
    let character = document.createElement("p");
    character.textContent = value.character;
    divCard.appendChild(img);
    divCard.appendChild(titleName);
    divCard.appendChild(character);
    containerCast.appendChild(divCard);
  }
  containerDivCast.appendChild(repartoTitle);

  containerDivCast.appendChild(containerCast);
  return containerDivCast;
}
