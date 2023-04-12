// * Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    401: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var swiper2 = new Swiper(".services--swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
});
