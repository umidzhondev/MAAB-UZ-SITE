// * Navbar Menu
const nav = document.querySelector(".mobile__menu");
const navBtn = document.querySelector(".navbar--open--icon");
const navLinks = document.querySelectorAll(".mobile__nav-link");

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