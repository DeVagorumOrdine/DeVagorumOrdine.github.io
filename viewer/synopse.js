import pages from './pages.json' ;
import fragments from './html_fragments.json';
// import {applyLayout} from './visual_options';
const vis_opt = require("./visual_options");

const colorMap = {1: 'red', 
    2:'green', 
    3: 'blue',
    4: 'yellow',
    5: 'black',
    6: 'violet',
    7: 'brown',
    8: 'darkblue',
    9: 'green',
    10: 'red',
    11: 'blue',
    12: 'blue',
    13: 'blue',
    14: 'blue',
    15: 'blue',
    16: 'blue',
}

var texts_available = '';
$.each(pages, function(key){
    texts_available += '<option>'+key+'</option>';
});

function load_text(sel_col, sigle){
    var text = '';
    $.each(fragments['texts'][sigle], function(key, val){
        text += val;
    });
    sel_col.html(text);
    $('.tei-att-lemma').hide();
};

function strophen_div(column){
    var colId = '#textcol' + column;
    // $('.tei-lg').css('color','red');
    $(colId + ' > .tei-lg > br').remove();
    $(colId + ' > .tei-lg').each(function(){
        $(this).add($(this).nextUntil('.tei-lg')).wrapAll('<div class="stanza">');
    });


    $(colId + ' > .stanza').each(function(){
        $(this).css('margin', '2rem');
        $(this).css('padding', '1rem');
        var stanza_nr = $(this).children('span.tei-lg').children('span.n').text().substring(5)
        var color = colorMap[stanza_nr];
        $(this).css('border', 'solid 2px ' + color);
        $(this).css('border-radius', '10px');
    });
    // $(colId + ' > .stanza').css('margin', '2rem');
    // $(colId + ' > .stanza').css('padding', '1rem');
    // $(colId + ' > .stanza').css('border', 'solid 5px green');

};


$(document).ready(function(){
    const current_url = window.location.search;
    const urlParams = new URLSearchParams(current_url);
    const spaltenzahl = urlParams.get('sp');
    $('#spalten-sel-'+spaltenzahl).addClass('active');
    for(var i=1; i <= spaltenzahl; i++){
        $('#texts').append('<div class="col-md-3">'+
            '<div class="form-group">'+
            '  <div class="form-row align-items-center">'+
            '       <div class="col-md-3 m-auto">'+
                        '<select class="form-control text-selector" id="textauswahl'+i+'">'+
                        texts_available+
                        '</select>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="text-col" id="textcol'+i+'">'+
            '</div>'+
        '</div>')
        
    };

    $.each( $('.text-col'), function(){
        load_text( $(this), 'B');
    } );

    $('.text-selector').change(function(){
        // console.log($(this).val() );
        var idnr = $(this).attr('id').substring(11);
        load_text( $('#textcol'+idnr) ,$(this).val() );
        vis_opt.applyLayout('sem');
        // console.log($('input[name=darstellung]:checked').val());
        vis_opt.applyDarstellung( $('input[name=darstellung]:checked').val() );
        vis_opt.lemma();
        strophen_div(idnr);
    });

    for (i=1; i<= spaltenzahl; i++){
        strophen_div(i);
    };
    
});