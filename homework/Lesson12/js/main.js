$(document).ready(function () {
  $('.collapsible').collapsible();
  $('#fullpage').fullpage({
    menu: '#menu',
    fixedElements: '#header, .footer',
    // slidesNavigation: true,
    // slidesNavPosition: 'bottom',
    sectionsColor: ['#fff', '#fff3e0'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide']
    // paddingTop: '3em'
  });
  // $('.my-slider').slick({
  //   // adaptiveHeight,
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   dots: true
  // });
  $(".dropdown-button").dropdown({
    hover: true,
    belowOrigin: true,
    gutter: 0,
    stopPropagation: true
  });

});