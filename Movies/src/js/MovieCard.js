export function createCard(movies){
    let main=document.getElementById("app");
    let sectionMain=document.createElement("section");
    sectionMain.className="section-main"

    for (let value of movies){
        sectionMain.appendChild(createDivCard(value));
    }
    main.appendChild(sectionMain);
}

function createDivCard(value){
    let divCard= document.createElement("div");
    divCard.className="movie-card";
    divCard.appendChild(createDivImg(value));
    divCard.appendChild(createTitle(value));
    divCard.appendChild(createValoration(value));
    divCard.appendChild(createDescription(value));
    return  divCard;
}
function createDivImg(value){
    let divImg=document.createElement("div");
    divImg.className="containerM-img"
    let img =document.createElement("img");
    img.className="post-movie"
    img.setAttribute("src","https://image.tmdb.org/t/p/w300/"+value.poster_path)
    divImg.appendChild(img);
    img.addEventListener("click",(e)=>{
        console.log(value);
    })
    return divImg;
}

function createTitle(value){
    let title=document.createElement("h2");
    title.className="title-movie";
    title.textContent=value.title;
    return title;
}
function createValoration(value){
    let valoration=document.createElement("p");
    valoration.textContent="Valoracion "+value.vote_average;
    return valoration;
}

function createDescription(value){
    let description=document.createElement("p");
    description.className="movie-overview";
    description.textContent=value.overview;
    return description;
}
