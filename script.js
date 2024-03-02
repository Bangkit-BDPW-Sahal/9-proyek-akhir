/** @format */
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleContent");
  const hiddenContent = document.getElementById("hiddenContent");

  toggleButton.addEventListener("click", function () {
    hiddenContent.classList.toggle("hidden");
  });
});
