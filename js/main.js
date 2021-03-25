const swiper = new Swiper('.hotel-grid__swip', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 4000
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport:true,
  },
});


ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [51.54, 46.00],
      zoom: 7,
    });
    var myPlacemark = new ymaps.Placemark([51.54, 46.00]);
    myMap.geoObjects.add(myPlacemark);
};

const Reviews = new Swiper('.reviews__swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button--next  ',
    prevEl: '.reviews-button--prev',
  },
  
});

var menuButton = document.querySelector(".button-menu")
menuButton.addEventListener("click", function () {
  console.log("click button");
  document.querySelector(".header-bot").classList.toggle("header-bot--visible");
});

var bodyInvisible = document.querySelector(".button-menu")
menuButton.addEventListener("click", function () {
  console.log("click button");
  document.querySelector("body").classList.toggle("body-invisible");
})

