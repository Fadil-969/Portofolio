const typing=document.getElementById("typing");

const text=[
"RPL Student",
"Web Developer",
"Frontend Developer"
];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

current=text[i];

if(!isDeleting){

typing.innerHTML=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

}

else{

typing.innerHTML=current.substring(0,j--);

if(j<0){

isDeleting=false;

i++;

if(i==text.length)i=0;

}

}

setTimeout(type,isDeleting?60:120);

}

type();

const theme=document.getElementById("theme");

theme.onclick=()=>{

document.body.classList.toggle("dark");

localStorage.setItem("theme",document.body.classList.contains("dark"));

}

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("dark");

}

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

    },1200);

});

const loader=document.getElementById("loader");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

})

})

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el)

})

const number=document.querySelectorAll(".number");

number.forEach(num=>{

const update=()=>{

const target=+num.dataset.target;

const value=+num.innerHTML;

const speed=25;

if(value<target){

num.innerHTML=value+1;

setTimeout(update,speed);

}

}

update();

})

/* ============================  PROJECT SEARCH  ============================ */

const search = document.getElementById("searchProject");

search.addEventListener("keyup",()=>{

const keyword = search.value.toLowerCase();

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

const title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(keyword)){

card.style.display="block";

}

else{

card.style.display="none";

}

})

})