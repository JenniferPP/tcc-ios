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
