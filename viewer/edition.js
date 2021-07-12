import fragments from './html_fragments.json';

// function applyDarstellung(selected){
//     console.log(selected);
//     if (selected == 'transk'){
//         $('.tei-ex').hide();
//         $('.tei-pc').hide();
//         $('.tei-reg').hide();
//         $('.tei-am').show();
//         $('.tei-orig').show();
//         $('.tei-sic').show()
//     } else if (selected == 'edit'){
//         $('.tei-am').hide();
//         $('.tei-orig').hide();
//         $('.tei-sic').hide()
//         $('.tei-ex').show();
//         $('.tei-reg').show()
//     };
// };


    
// $(document).ready(function(){
//     var source = "CB219-95v";
//     $('#edition').append(fragments.texts[source]);
    
    
//     // Optionen Darstellung
//     $('#optionen-toggle').on('click', function(){
//             $('#anzeige-optionen').animate({left: '0px'}, 800);
//     });

//     $('#close-options').on('click', function(){
//         $('#anzeige-optionen').animate({left: '-200px'}, 800);
//     })


//     // DARSTELLUNG
//     applyDarstellung( $('input[name=darstellung]:checked').val() );
//     $('input[name=darstellung]').on('input', function(){
//         applyDarstellung( $(this).val() );
//     });

//     // LEMMA
//     $('.tei-att-lemma').hide();
//     $('.tei-w').on('click', function(){
//         $(this).find('.tei-att-lemma').show();
//     });

    

// });

