$(document).ready(function(){
    console.log($('.slidetoggle-text').text());

    console.log($('.slidetoggle-text').html());

    console.log($('.input-val').val());

    console.log($('.animate.text').attr("style"));

    $('.get-value').click(function(){
        $('.set-value').text($('.input-val').val());
    });

    $('.set-value').html('<b>test</b>');

    $('.input-val').val('Telephone');

    $('.append').click(function(){
        $('.append-text').append('<b>text</b>');
    });

    $('.append-text').prepend('<b>ELEMENT</b>');

    $('<b>insert this text before</b>').insertBefore('.append-text');

    $('<b>insert this text after</b>').insertAfter('.append-text');
    
    $('.after-before').after('<b>TTXTXTXTX</>');

    $('.remove-text').click(function(){
        $('.remove').remove();
    });

    $('.empty').click(function(){
        $('.empty-text').empty();
    });

    $('.blue').addClass('red');

    $('.blue').removeClass('green');

    $('.toggle-btn').click(function(){
        $('.toggle-class').toggleClass('hide-content');
    });

 });