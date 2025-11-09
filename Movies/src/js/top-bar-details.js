export function createHeaderForDetails(){

    let sectionHeader=document.createElement("section");
    sectionHeader.className="section-header3";
    let img =document.createElement("img");
    img.setAttribute("src","src/img/left-arrow.svg");
    sectionHeader.appendChild(img)
    return sectionHeader;
}

export function createMainDetails(movie){
    let sectionMain=document.createElement("section");
    sectionMain.className="section-details";
    sectionMain.appendChild(createDivPrincipal(movie));
    return sectionMain;
}

function createDivPrincipal(movie){
    let div=document.createElement("div")
    div.className="div-details-principal"
    div.style.backgroundImage = " linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/w300/"+movie.poster_path;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.style.backgroundRepeat = "no-repeat";
    div.appendChild(createDivContainer(movie))
    return div;
}
function createDivContainer(movie){
    let divContainerDetails=document.createElement("div");
    divContainerDetails.className="div-details-second"
    let img=document.createElement("img")
    img.className="detail-img";
    img.setAttribute("src","https://image.tmdb.org/t/p/w300/"+movie.poster_path)
    divContainerDetails.appendChild(img)
    divContainerDetails.appendChild(createDivDetailsInfo(movie))
    divContainerDetails.appendChild(createDescription(movie))
    return divContainerDetails;
}

function createDivDetailsInfo(movie){
    let divContainerDetailsInfo=document.createElement("div");
    divContainerDetailsInfo.className="div-details-second-info";
    divContainerDetailsInfo.appendChild(createTitleAndValoration(movie)[0]);
    divContainerDetailsInfo.appendChild(createTitleAndValoration(movie)[1]);
    return divContainerDetailsInfo;
}

function createTitleAndValoration(movie){
    let title=document.createElement("h1");
    let valoration=document.createElement("p");
    title.textContent=movie.title;
    valoration.textContent="Valoration "+movie.vote_average;
    let lista=[];
    lista.push(title)
    lista.push(valoration);
    return lista;
}
function createDescription(movie){
    let description=document.createElement("p");
    description.className="description-overview";
    description.textContent=movie.overview;
    return description;
}