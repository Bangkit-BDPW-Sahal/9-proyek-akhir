/** @format */

function toggleNav() {
  var navList = document.querySelector(".nav-list");
  var burgerMenu = document.querySelector(".burger-menu");

  navList.classList.toggle("active");
  burgerMenu.classList.toggle("active");
}
