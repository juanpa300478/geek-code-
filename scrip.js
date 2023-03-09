
const menu = document.getElementById("menu");
const titulo = document.getElementById("titulo");


const interMENU =(item,style)=>{
    for(let i=0;i<item.children.length;i++){
        item.children[i].addEventListener("mouseenter",()=>{
            item.children[i].classList.add(style);
           
       })
       item.children[i].addEventListener("mouseleave",()=>{
           item.children[i].classList.remove(style);
       })
    }
}
interMENU(menu,"menu_item-stile");

//interaction de titulo

window.addEventListener("load",()=>{
    titulo.children[0].textContent = "Inicio";
    titulo.classList.replace("content_titulo-i","content_titulo");
})


for(let i=0;i<4;i++){
    menu.children[i].addEventListener("click",()=>{
        titulo.children[0].textContent = menu.children[i].textContent;
        titulo.classList.replace("content_titulo","content_titulo-i");
        
        setTimeout(() => {
            titulo.classList.replace("content_titulo-i","content_titulo");
        },700)
        logo();
    })
}

//animation logo

const logo =()=>{
    setTimeout(() => {
        menu.children[4].classList.add("logo-i");
    },10)
    setTimeout(() => {
        menu.children[4].classList.replace("logo-i","logo-1");
    },1000)
    setTimeout(() => {
        menu.children[4].classList.replace("logo-1","logo-2");
    },2000)
    setTimeout(() => {
        menu.children[4].classList.replace("logo-2","logo-3");
    },3000)
    setTimeout(() => {
        menu.children[4].classList.replace("logo-3","logo-i");
    },10)
}



console.log(menu.children)