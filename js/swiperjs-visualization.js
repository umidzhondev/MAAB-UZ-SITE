var swiper3 = new Swiper(".use-cases--swiper", {
    slidesPerView: 5,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400:{
        slidesPerView:5,
      },
      993: {
        slidesPerView: 4.6,
      },
      769: {
        slidesPerView: 3,
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
  