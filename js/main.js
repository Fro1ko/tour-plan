const swiper = new Swiper('.swiper-container', {
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

const swiperReviews = new Swiper('.reviews__swiper-container', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 4000
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button--next',
    prevEl: '.reviews-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport:true,
  },
});
