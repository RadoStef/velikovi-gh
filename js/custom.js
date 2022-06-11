$(document).ready(function(){

    var splide = new Splide( '.splide', {
        focus     : 'center',
        autoHeight: true,
        autoWight: true,
      } );
      
      splide.mount();

    $(".menu-button").click(function(){
        $('.mobile-navigation').slideToggle("slow");
    });

    $(".menu-button").click(function(){
        $('h1').css("color", "white");
    });

});