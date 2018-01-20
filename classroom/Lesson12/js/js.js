$(document).ready(function () {
  
  $('.myTestSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '130px'
  });
  $('#button').click(function () {
    $('.myTestSlider').slick('slickNext');
  });

  $('.myTestSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
    // $('.text-section').hide(0);
       // 1-способ
    // $('.text-section').css('display'^ 'none'); 
    // 2-способ
    $('#' + nextSlide).hide();
    $('#' + nextSlide).slideDown(500);

  });

});
// найти все возможные jQuery плагины в Google