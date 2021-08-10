import pages from './pages.json' ;
import stanzas from './stanzas.json';
// import fragments from './html_fragments.json';
import palette from './palette.json';
import corresp from './stanzas_corresp.json';

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
    $.each(stanzas['stanzas'][sigle], function(key, val){
        text += val;
    });

    sel_col.html(text);
    $('.tei-att-lemma').hide();
    $('.tei-note').hide();
};

function strophen_div(column){
    var colId = '#textcol' + column;
    $(colId + ' .tei-lg br').remove();
    $(colId + ' .tei-lg').each(function(){
        console.log( $(this));
        $(this).add($(this).nextUntil('.tei-lg')).wrapAll('<div class="stanza">');
    });


    $(colId + ' .stanza').each(function(){
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
            $(this).append('<span class="align">Parallelansicht</span>')
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
            $(this).find('span.all-str').show();
        },
        function(){
            $(this).find('span.align').hide();
            $(this).find('span.all-str').hide();
        });
        
    $('span.align').click(function(){
        var clicked_stanza = $(this).closest('.stanza');
        var stroph_id = $(this).parent().children('span.corresp').text();
        var corresp_str = $('.tei-lg').filter(function(){
            return $(this).find('span.corresp').text() == stroph_id;
        });

        if (corresp_str.length > 1){
            var leit_position = $(this).parent().offset().top;
            var leit_scroll = $(this).closest('.text-col').scrollTop();
            corresp_str.each(function(){
                if ($(this).offset().top != leit_position){
                    var sel_stanza = $(this);
                    var el_offset = $(this).offset().top;
                    var el_scroll = $(this).closest('.text-col').scrollTop();
                    var new_scroll = el_offset + el_scroll - leit_position;
                    if ( new_scroll < 0){
                        new_scroll = 0
                    }
                    // $(this).closest('.text-col').scrollTop(new_scroll) ;
                    $(this).closest('.text-col').animate({scrollTop: new_scroll + 'px'}, 500, 'swing', function() { 
                        var color = sel_stanza.closest('.stanza').css('border').split(' ').slice(2).join(' ');
                        color = color.replace(')', ', 0.5)');
                        console.log(color);
                        sel_stanza.closest('.stanza').css('background-color', color);
                        clicked_stanza.css('background-color', color);
                        setTimeout(function(){
                            sel_stanza.closest('.stanza').css('background-color', 'white');
                            clicked_stanza.css('background-color', 'white');
                        }, 500);
                     });
                    }
                });
            } 
        else {
            // alert('Diese Strophe wird in den ausgewählten Handschriften nicht weiter bezeugt')
        }
        });
    $('span.all-str').click(function(){
        var sid = $(this).prevAll('span.corresp').text();
        var number_of_wits = Object.keys(corresp[sid]).length;
        if (number_of_wits > 1){
            var new_window_width = 250 + 260 * number_of_wits;
            window.open('/synopse1.html?str=' + sid, '', "width="+ new_window_width + 
                    ",height=500,top=300,left=100");
        } else {
            if ( $(this).find('.msg-unika').length == 0 ){
                $(this).append('<span class="msg-unika">Unika in dieser Hs.</span>')
            }
        }
    });
    $('span.all-str').hover(function(){
        var sid = $(this).prevAll('span.corresp').text();
        var number_of_wits = Object.keys(corresp[sid]).length;
        if ( $(this).find('.msg-unika').length == 0 ){
            if (number_of_wits < 2){ 
                $(this).append('<span class="msg-unika">Unika in dieser Hs.</span>')
            } else {
                $(this).append('<span class="msg-unika">'+ Object.keys(corresp[sid])+'</span>')
            }
        }
        $(this).find('.msg-unika').show();

    }, function(){
        $(this).find('.msg-unika').hide();
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
            '<div class="text-col p-3" id="textcol'+i+'" style="overflow-y:scroll;">'+
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
        // vis_opt.addRandPopup();
        // vis_opt.delRandPopup();
        strophen_div(idnr);

        // Update global variable show_wits that stores the wits that are used in the params to load the page
        show_wits = [];
        $('.text-selector').each(function(){
            show_wits.push($(this).val());
        });
        updateSpaltenzahlLinks();
        
        $('.gloss').hide();

        addAlignmentAndStrophensynopse();
        

    });

    for (i=1; i<= spaltenzahl; i++){
        strophen_div(i);
    };

    addAlignmentAndStrophensynopse();
    // vis_opt.addRandPopup();
    


    // Set max height for columns to be equal to the viewport
    $('.text-col').css('height', $(window).height());

    
    
});