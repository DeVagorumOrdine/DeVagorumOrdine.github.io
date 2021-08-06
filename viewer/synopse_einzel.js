import stanzas from './stanzas.json'

// URL PARAM
const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
var show_wits = urlParams.get('wit').split(',');
var str = urlParams.get('str');
var spaltenzahl = show_wits.length

$(document).ready(function(){

    $('#strophe-id').text(str);

    var columnBootst = 2;
    if (12 % spaltenzahl == 0){
        columnBootst = 12 / spaltenzahl
    } else {
        columnBootst = spaltenzahl + 'r'
    };
    for(var i=0; i < spaltenzahl; i++){
        var index_dash = show_wits[i].indexOf("-");
        var sigle = show_wits[i].substr(0,index_dash);
        var num = show_wits[i].substr(index_dash +1);
        console.log(sigle);
        $('#texts').append('<div class="col-md-'+ columnBootst +'">'+
            '<div class="text-col mb-4" id="textcol'+i+'">'+
            '<h1 style="font-size:32px">' + sigle + '</h1>'+
            stanzas['stanzas'][sigle][num]+
            '</div>'+
        '</div>')
        
    };
});