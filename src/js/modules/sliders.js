import Swiper, { Pagination, Autoplay } from "swiper";

const cardSliders = document.querySelectorAll(".card-slider");
cardSliders.forEach(slider => {
  if (slider) {
    new Swiper(slider, {
      modules: [Pagination, Autoplay],
      wrapperClass: "card-slider-wrapper",
      slideClass: "card-slider-slide",

      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1200,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        el: slider.querySelector(".pagination"),
        clickable: true,
      },
    });
  }
});
