import palette from './palette.json' ;

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

$(document).ready(function(){
    $.each(palette['palette'], function(id, color){
        $('.sid-' + id).css('border', 'solid ' + color + ' 5px');
        console.log(id, $('.sid-' + id).length);
    })

    $('.full').hover(function(){
        var cls = $(this).attr('class');
        var sid = $(this).attr('class').substr(cls.indexOf("-") + 1);
        var rgb = hexToRgb(palette['palette'][sid].substr(1));
        $('.sid-' + sid).css('background-color', 'rgba(' + rgb + ', .4)');
    }, function(){
        var cls = $(this).attr('class');
        var sid = $(this).attr('class').substr(cls.indexOf("-") + 1);
        $('.sid-' + sid).css('background-color', 'white');
    })

});
