// hamburger
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".menu");
const navlink = document.querySelector(".navlink");
const html = document.querySelector("html");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  html.classList.toggle("antiscroll");
});

navlink.addEventListener("click", function () {
  html.classList.remove("antiscroll");
  nav.classList.remove("slide");
  menuToggle.checked = false;
});
