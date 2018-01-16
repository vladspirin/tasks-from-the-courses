$(document).ready(function (){
    $('.sliders li:last-child').prependTo('.sliders');
    var step = $('.sliders li').outerWidth();
    
    $('.next').click(function () {
        $('.sliders').animate({"left": -step}, 500,
        function () {
            $('.sliders li:first-child').appendTo('.sliders');
            $('.sliders').css({ "left": 0});
        });
    });

    $('.prev').click(function () {
        $('.sliders').animate({ "left": step }, 500,
            function () {
                $('.sliders li:first-child').appendTo('.sliders');
                $('.sliders').css({ "left": 0 });
            });
    });

});