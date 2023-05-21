var swiper3 = new Swiper(".team__swiper", {
    slidesPerView: 3.1,
    spaceBetween: 40,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400:{
        slidesPerView:3.2,
      },
      993: {
        slidesPerView: 2.5,
      },
      769: {
        slidesPerView: 2,
        spaceBetween:20,
      },
      577: {
        slidesPerView:1.5,
      },
      401: {
        slidesPerView: 1.3,
      },
      300: {
        slidesPerView: 1,
      },
    },
  });
  