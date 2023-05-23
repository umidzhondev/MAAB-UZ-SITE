// * Navbar Menu
const nav = document.querySelector("#mobile__menu");
const navBtn = document.querySelector(".navbar--open--icon");
const navLinks = document.querySelectorAll(".nav__link");
const select = document.getElementById("change-language");

// * Navbar Menu Toggle Event
navBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  navBtn.children[0].classList.toggle("active-burger");
});

// * Navbar Menu Close
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    nav.classList.remove("open");
    navBtn.children[0].classList.remove("active-burger");
  }
});

document.querySelector("#nowYear").textContent = new Date().getFullYear();

localStorage.setItem("language", "en");


select.value = localStorage.getItem("language");
select.dispatchEvent(new Event('change'));

let pagesPath =[
  "/pages/data-analytics.html",
  "/pages/data-visualization.html",
  "/pages/data-engineering.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/index.html",
]

