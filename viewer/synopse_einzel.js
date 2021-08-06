import stanzas from './stanzas.json';
import correspondences from './stanzas_corresp.json';

// URL PARAM
const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
var str = urlParams.get('str');
var show_wits = correspondences[str]
var spaltenzahl = Object.keys(show_wits).length

$(document).ready(function(){
    console.log(spaltenzahl);
    $('#strophe-id').text(str);

    var columnBootst = 2;
    if (12 % spaltenzahl == 0){
        columnBootst = 12 / spaltenzahl
    } else {
        columnBootst = spaltenzahl + 'r'
    };

    var col = 1;
    $.each(show_wits, function(sigle, num){
        $('#texts').append('<div class="col-md-'+ columnBootst +'">'+
            '<div class="text-col mb-4" id="textcol'+ col +'">'+
            '<h1 style="font-size:32px">' + sigle + '</h1>'+
            stanzas['stanzas'][sigle][num]+
            '</div>'+
        '</div>');
        col += 1;
    });

});