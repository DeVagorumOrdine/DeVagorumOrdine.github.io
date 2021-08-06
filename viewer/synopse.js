import pages from './pages.json' ;
import fragments from './html_fragments.json';
import stanzas from './stanzas.json';
import palette from './palette.json';

const vis_opt = require("./visual_options");


// URL PARAM
const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
const spaltenzahl = urlParams.get('sp');
var show_wits = urlParams.get('wit').split(',');


var texts_available = '<option>--</option>';
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
        $(this).css('margin-top', '2rem');
        $(this).css('padding', '1rem');
        var stanza_id = $(this).children('span.tei-lg').children('span.corresp').text()
        
        // var color = colorMap[stanza_nr];
        console.log(stanza_id);
        var color = palette['palette'][stanza_id.replace(',','-')];
        $(this).css('border', 'solid 2px ' + color);
        $(this).css('border-radius', '10px');
    });
    // $(colId + ' > .stanza').css('margin', '2rem');
    // $(colId + ' > .stanza').css('padding', '1rem');
    // $(colId + ' > .stanza').css('border', 'solid 5px green');

};

function updateSpaltenzahlLinks(){
    $('.page-link').each(function () { 
        $(this).attr('href', '?sp=' + $(this).text() + '&wit=' + show_wits.join());
     });
};

function addAlignmentAndStrophensynopse(){
    $('.tei-lg').each(function(){
        if ( $(this).find('span.align').length < 1 ){
            $(this).append('<span class="align">Align</span>')
            $('span.align').hide();
        };
        if ( $(this).find('span.all-str').length < 1 ){
            $(this).append('<span class="all-str">Alle</span>')
            $('span.all-str').hide();
        };
     
    });
    $('.stanza').hover(
        function(){
            $(this).find('span.align').show();
            // $(this).find('span.all-str').show();
        },
        function(){
            $(this).find('span.align').hide();
            $(this).find('span.all-str').hide();
        });
        
    $('span.align').click(function(){
        var stroph_id = $(this).parent().children('span.corresp').text();
        var corresp_str = $('.tei-lg').filter(function(){
            return $(this).find('span.corresp').text() == stroph_id;
        });

        if (corresp_str.length > 1){
            var leit_position = $(this).parent().offset().top;
            var leit_scroll = $(this).closest('.text-col').scrollTop();
            corresp_str.each(function(){
                if ($(this).offset().top != leit_position){
                    var el_offset = $(this).offset().top;
                    var el_scroll = $(this).closest('.text-col').scrollTop();
                    var new_scroll = el_offset + el_scroll - leit_position;
                    if ( new_scroll < 0){
                        new_scroll = 0
                    }
                    console.log(new_scroll);
                    $(this).closest('.text-col').scrollTop(new_scroll) ;
                    }
                });
            } 
        else {
            // alert('Diese Strophe wird in den ausgewählten Handschriften nicht weiter bezeugt')
        }
        });
    $('span.all-str').click(function(){

    });

    }

$(document).ready(function(){
    $('#spalten-sel-'+spaltenzahl).addClass('active');
    var columnBootst = 2;
    if (12 % spaltenzahl == 0){
        columnBootst = 12 / spaltenzahl
    } else {
        columnBootst = spaltenzahl + 'r'
    };
    for(var i=1; i <= spaltenzahl; i++){
        $('#texts').append('<div class="col-md-'+ columnBootst +'">'+
            '<div class="form-group">'+
            '  <div class="form-row align-items-center">'+
            '       <div class="col m-auto">'+
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

    $.each( $('.text-col'), function(idx){
        load_text( $(this), show_wits[idx]);
        $('#textauswahl' + (idx + 1)).val(show_wits[idx]);
    } );

    updateSpaltenzahlLinks();

    

    $('.text-selector').change(function(){
        // console.log($(this).val() );
        var idnr = $(this).attr('id').substring(11);
        load_text( $('#textcol'+idnr) ,$(this).val() );
        vis_opt.applyLayout('sem');
        // console.log($('input[name=darstellung]:checked').val());
        vis_opt.applyDarstellung( $('input[name=darstellung]:checked').val() );
        vis_opt.lemma();
        strophen_div(idnr);

        // Update global variable show_wits that stores the wits that are used in the params to load the page
        show_wits = [];
        $('.text-selector').each(function(){
            show_wits.push($(this).val());
        });
        updateSpaltenzahlLinks();
        
        $('.gloss').hide();

        addAlignmentAndStrophensynopse()

    });

    for (i=1; i<= spaltenzahl; i++){
        strophen_div(i);
    };

    addAlignmentAndStrophensynopse();
    


    // Set max height for columns to be equal to the viewport
    $('.text-col').css('height', $(window).height());

    
    
});