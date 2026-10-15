let openMenu = document.querySelector(".menu-btn");
let navList = document.querySelector("#nav-list");

openMenu.addEventListener("click", () => {
  navList.classList.toggle("open");
  openMenu.classList.toggle("open");
});

let trackImg = document.querySelectorAll(".track img");
let track = document.querySelector(".track");
let container = document.querySelector(".container");
let isDown = false;
 let tx;
 let startX;
 let tx0 = -50;
container.addEventListener("mousemove", (e)=>{
  if(!isDown) return;
  let x = e.clientX;
  let deltaX = startX - x ;
  tx = -100*deltaX/innerWidth/2;
  track.style.transform = `translateX(${tx + tx0}%)`; 
})
container.addEventListener("mousedown",(e)=>{
  startX = e.clientX;
  isDown=true
})
container.addEventListener("mouseup", e=>{
  isDown = false;
  tx0 +=  tx;
})