$(document).ready(function () {
  $('.my-slider').slick({
    // adaptiveHeight,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true
  });
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});