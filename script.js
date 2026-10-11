let openMenu = document.querySelector(".menu-btn");
let navList = document.querySelector("#nav-list");

openMenu.addEventListener("click", () => {
  navList.classList.toggle("open");
  openMenu.classList.toggle("open");
});
