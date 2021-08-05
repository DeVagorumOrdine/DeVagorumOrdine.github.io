import stanzas from './stanzas.json'

// URL PARAM
const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
var show_wits = urlParams.get('wit').split(',');
var str = urlParams.get('str');
var spaltenzahl = show_wits.length

$(document).ready(function(){

    $('#strophe-id').text(str);

    console.log(spaltenzahl);
    var columnBootst = 2;
    if (12 % spaltenzahl == 0){
        columnBootst = 12 / spaltenzahl
    } else {
        columnBootst = spaltenzahl + 'r'
    };
    for(var i=0; i < spaltenzahl; i++){
        console.log(stanzas["stanzas"]["B-3"]);
        $('#texts').append('<div class="col-md-'+ columnBootst +'">'+
            '<div class="text-col mb-4" id="textcol'+i+'">'+
            '<h1 style="font-size:32px">' + show_wits[i].substr(0, show_wits[i].indexOf("-")) + '</h1>'+
            stanzas['stanzas'][show_wits[i]]+
            '</div>'+
        '</div>')
        
    };
});