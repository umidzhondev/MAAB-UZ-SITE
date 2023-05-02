// * Accardion
const accardionItems = document.querySelectorAll(".about__accordion-item");
let accardionCount = 0;

accardionItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("active--accordion--item");
  });
});
