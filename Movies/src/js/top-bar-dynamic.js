import { createCardGrid } from "./movie-card-grid";



export function createDynamicBar(movies){
    let cardGrid;
    let cardList;
    if (sessionStorage.getItem("option")==="grid"){
        cardGrid=createCardGrid(movies);
    }else if(sessionStorage.getItem("option")==="list"){
        //OTRA
      
    }else{
       cardGrid= createCardGrid(movies)
    }
    let sectionh2=document.querySelector(".section-header2");
    sectionh2.className="section-header2"
    sectionh2.appendChild(createSelect());
    sectionh2.appendChild(createDivImg(movies,cardGrid,cardList));
   
}

function createDivImg(movies,cardGrid,cardList){
    let divImg=document.createElement("div");
    divImg.style.display="flex";
    divImg.style.gap="10px";
    let imgGrid=document.createElement("img");
    imgGrid.setAttribute("src","src/img/grid-layout.svg")
    imgGrid.style.width="30px";
    let imgList=document.createElement("img");
    imgList.style.width="30px";
    imgList.setAttribute("src","src/img/list-layout.svg");
    divImg.appendChild(imgGrid);
    divImg.appendChild(imgList);

    imgGrid.addEventListener("click",(e)=>{
        sessionStorage.setItem("option","grid");
        if (typeof cardList!== undefined){
            cardList.remove();
        }
        cardGrid=createCardGrid(movies);
 

    })
    imgList.addEventListener("click",(e)=>{
        sessionStorage.setItem("option","list");
        console.log("ENtro");
        if(typeof cardGrid!==undefined){
            cardGrid.remove();
        }
        //falta el cardList
     
   
    })

    return divImg;

    }
 

function createSelect(){
    let select=document.createElement("select");
    let option=document.createElement("option");
    option.setAttribute("value","Proximamente");
    option.textContent="Proximamente";
    select.appendChild(option);
    return select;

}