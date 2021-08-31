$(document).ready(function(){
    $('.dropdown-menu-1').hide();

    $('.website_content').on('click', function(){
        if ($('.dropdown-menu-1').is(':visible') ){
            $('.dropdown-menu-1').hide();
        }
    })

    $('.dropdown-toggle-1').on('click', function(){
        console.log($('.dropdown-menu-1').is(':hidden'));
        $('.dropdown-menu-1').toggle();
    })

    
})