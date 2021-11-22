// Poup perfil

var moveLeft = 0;
var moveDown = 0;
$('a.popper').hover(function (e) {

    var target = '#' + ($(this).attr('data-popbox'));
    $(target).show();
    moveLeft = $(this).outerWidth();
    moveDown = ($(target).outerHeight() / 2);
}, function () {
    var target = '#' + ($(this).attr('data-popbox'));
    if (!($("a.popper").hasClass("show"))) {
        $(target).hide();
    }
});

$('a.popper').mousemove(function (e) {
    var target = '#' + ($(this).attr('data-popbox'));

    leftD = e.pageX + parseInt(moveLeft);
    maxRight = leftD + $(target).outerWidth();
    windowLeft = $(window).width() - 40;
    windowRight = 0;
    maxLeft = e.pageX - (parseInt(moveLeft) + $(target).outerWidth() + 20);

    if (maxRight > windowLeft && maxLeft > windowRight) {
        leftD = maxLeft;
    }

    topD = e.pageY - parseInt(moveDown);
    maxBottom = parseInt(e.pageY + parseInt(moveDown) + 20);
    windowBottom = parseInt(parseInt($(document).scrollTop()) + parseInt($(window).height()));
    maxTop = topD;
    windowTop = parseInt($(document).scrollTop());
    if (maxBottom > windowBottom) {
        topD = windowBottom - $(target).outerHeight() - 20;
    } else if (maxTop < windowTop) {
        topD = windowTop + 20;
    }

    $(target).css('top', topD).css('left', leftD);
});
$('a.popper').click(function (e) {
    var target = '#' + ($(this).attr('data-popbox'));
    if (!($(this).hasClass("show"))) {
        $(target).show();
    }
    $(this).toggleClass("show");
});


//JS do meu Menu
$('.hamburguer').click(function(){
    $(this).toggleClass("click");
    $('.mainMenu').toggleClass("show");
});

$('.prodBtn').click(function(){
    $('.mainMenu ul .prod-show').toggleClass("show");
    $('.mainMenu ul .only').toggleClass("rotate");
});

$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});


// Carousel de mais vendidos
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


//Validação do campo Newsletter
console.clear()
function validar(){
    alert('Ficamos muito felizes por você fazer parte da nossa comunidade!')
}   
