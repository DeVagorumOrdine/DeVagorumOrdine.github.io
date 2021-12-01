import stanzas from './stanzas.json';
import correspondences from './stanzas_corresp.json';

// URL PARAM
const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
var str = urlParams.get('str');
var show_wits = correspondences[str]
console.log(show_wits);
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
    $.each(show_wits, function(index, duo){
        var sigle = duo[0];
        var num = duo[1];
        
        // When we have a stanza repeated in a witness we should add _ in the json and now we filter it
        if (sigle.indexOf('_') > 0){
            sigle = sigle.substring(0, sigle.indexOf('_'));
        };
        $('#texts').append('<div class="col-md-'+ columnBootst +'">'+
            '<div class="text-col mb-4" id="textcol'+ col +'">'+
            '<h1 style="font-size:32px">' + sigle + '</h1>'+
            stanzas['stanzas'][sigle][num]+
            '</div>'+
        '</div>');
        col += 1;
    });

    $('.corresp').hide();

});