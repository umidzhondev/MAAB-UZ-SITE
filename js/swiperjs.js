// * Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    500: {
      slidesPerView:2,
      spaceBetween: 15,
    },
    401: {
      slidesPerView: 1,
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    401: {
      slidesPerView: 1.3,
    },
    340: {
      spaceBetween: 10,
      slidesPerView: 1.1,
    },
    280: {
      slidesPerView: 1,
    },
  },
});
