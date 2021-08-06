import palette from './palette.json' ;
import stanzas_corresp from './stanzas_corresp.json';

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

$(document).ready(function(){
    var full_divs = $('.full');

    $.each(palette['palette'], function(id, color){
        id = id.replace('-',',');
        full_divs.filter(function () { 
            return $(this).find('h4').text() == id;
         }).css('border', 'solid ' + color + ' 5px');
        
    })

    $('.full').hover(function(){
        var sid_comma = $(this).find('h4').text();
        var sid_dash = sid_comma.replace(',','-');
        var rgb = hexToRgb(palette['palette'][sid_dash].substr(1));
        full_divs.filter(function(){
            return $(this).find('h4').text() == sid_comma;
        }).css('background-color', 'rgba(' + rgb + ', .4)');
    }, function(){
        var sid_comma = $(this).find('h4').text();
        full_divs.filter(function(){
            return $(this).find('h4').text() == sid_comma;
        }).css('background-color', 'white');
    })

    $('.full').click(function(){
        var sid_comma = $(this).find('h4').text();
        
        var wits = stanzas_corresp[sid_comma];
        var new_window_width = 250 + 260 * Object.keys(wits).length;
        
        
        window.open('/synopse1.html?str=' + sid_comma, '', "width="+ new_window_width + 
                    ",height=500,top=300,left=100");
    });

});
