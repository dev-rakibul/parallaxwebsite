(function($){
    'use strict'
    
    // code starts
    
    // top-arrow 
    $(window).scroll( function(){
        var dis = $(window).scrollTop();
        if (dis > 350) {
            $('.top-arrow').fadeIn();
            }
        else{
            $('.top-arrow').fadeOut();
        }
    } );
    
    $('.top-arrow').on('click', function(){
        $('html').animate({ scrollTop : 0 })
    });
    
}) (jQuery);