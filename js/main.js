/*global $, console, alert*/

$(function () {
    
    "use strict";
    
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
        
        if ($(this).scrollTop() >= 150) {
        
            navbar.addClass('scrolled').fadeOut(1800);

        } else {
            
            navbar.addClass('scrolled').fadeIn(500);
        }
    });
    
    //deal with tabs
    $('.tab-switch li').click(function () {
        //add active class link
        $(this).addClass('selected').siblings().removeClass('selected');
        //haide all divs 
        $('.tabs-section .tabs-content > div').hide();
        //show dic connected with links
        $('.' + $(this).data('class')).show();
    });
    
});
