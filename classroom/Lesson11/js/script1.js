// jquery(); --анологично --- $();

$(document).ready(function () {
  var div1 = $('#div1');
  var button = $('.button');
  console.log(div1);
  button.click(function () {
    // div1.append('<p>text</p>').addClass('color');
    // div1.fadeToggle(500);
    div1
    .animate({width: '100px', height: '100px'}, 500);
  });

  $('li').click(function () {
    $(this).css({"color": "red"});
  });

});

