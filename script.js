let openMenu = document.querySelector(".menu-btn");
let navList = document.querySelector("#nav-list");

openMenu.addEventListener("click", () => {
  navList.classList.toggle("open");
  openMenu.classList.toggle("open");
});

let trackImg = document.querySelectorAll(".track img");
let cards = document.querySelectorAll(".card");
let track = document.querySelector(".track");
let leftBtn = document.querySelector(".arrow.left");
let rightBtn = document.querySelector(".arrow.right");

let p = 0;
function carousel() {
  let length = cards.length;
  rightBtn.addEventListener("click", (e) => {
    if (p === length - 1) return;
    p++;
    slide(p);
  });
  leftBtn.addEventListener("click", (e) => {
    if (p === 0) return;
    p--;
    slide(p);
  });
}
function slide(p) {
  cards[p].style.width = "40vmin";
  if (cards[p - 1]) cards[p - 1].style.width = "13.4vmin";
  if (cards[p + 1]) cards[p + 1].style.width = "13.4vmin";
}
function reset() {
  cards.forEach((e) => {
    e.style.width = "13.4vmin";
  });
}
cards.forEach((e, i) => {
  e.addEventListener("click", () => {
    reset();
    slide(i);
    p = i
  });
});
carousel();
slide(0);
