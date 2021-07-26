import pages from './pages.json' ;
import fragments from './html_fragments.json';
// import {applyLayout} from './visual_options';
const vis_opt = require("./visual_options");




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


$(document).ready(function(){
    const current_url = window.location.search;
    const urlParams = new URLSearchParams(current_url);
    const spaltenzahl = urlParams.get('sp');
    $('#spalten-sel-'+spaltenzahl).addClass('active');
    for(var i=1; i <= spaltenzahl; i++){
        $('#texts').append('<div class="col-md-3">'+
            '<div class="form-group">'+
            '  <div class="form-row align-items-center">'+
            '       <div class="col-md-4 m-auto">'+
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
        console.log($('input[name=darstellung]:checked').val());
        vis_opt.applyDarstellung( $('input[name=darstellung]:checked').val() );
        vis_opt.lemma();
    });
    
});