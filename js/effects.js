$(document).ready(function(){
    
    $('.fade-out').click(function(){
        $('.fadeout-text').fadeOut();
    });

    $('.fade-in').click(function(){
        $('.fadein-text').fadeIn();
    });

    $('.fade-toggle').click(function(){
        $('.fadetoggle-text').fadeToggle(slow);
    });

    $('.slide-down').click(function(){
        $('.slidedown-text').slideDown("900");
    });

    $('.slide-up').click(function(){
        $('.slideup-text').slideUp("fast");
    });

    $('.slide-toggle').click(function(){
        $('.slidetoggle-text').slideToggle("slow");
    });

    $('.animate').click(function(){
        $('.animate-square').animate({"left": "250px", "top": "30px"});
    });

});