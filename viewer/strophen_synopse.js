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

    $('.full').click(function(){
        var cls = $(this).attr('class');
        var sid = $(this).attr('class').substr(cls.indexOf("-") + 1);
        var sid_comma = sid.replace('-',',');
        var elements = $('.full.sid-'+ sid);
        var wits = [];
        elements.each(function(idx){
            var wit = $(this).attr('class').split(' ')[1].substr(7);
            wit += '-' + $(this).find('span.inner-n').text();
            wits.push(wit);
        });
        
        console.log(wits.length);
        var new_window_width = 200 + 250 * wits.length;
        
        wits = wits.sort().join(',');
        
        window.open('/synopse1.html?str=' + sid_comma +'&wit=' + wits, '', "width="+ new_window_width + 
                    ",height=500,top=300,left=100");
    });

});
