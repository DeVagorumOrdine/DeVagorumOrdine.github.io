function applyDarstellung(selected){
    // console.log(selected);
    if (selected == 'transk'){
        $('.tei-ex').hide();
        $('.tei-pc').show();
        $('.tei-reg').hide();
        $('.tei-abbr').show();
        $('.tei-expan').hide();
        $('.tei-am').show();
        $('.tei-orig').show();
        $('.tei-sic').show();
        $('.tei-corr').hide();
        $('.tei-surplus').show()
        $('.tei-del').show();
        $('.tei-add').addClass('tei-add-pal');
        $('.tei-hi.Red').css('color', 'red');
        //In the options menu
        $('.suboptions-ed').hide();
  
    } else if (selected == 'edit'){
        $('.tei-abbr').hide();
        $('.tei-am').hide();
        $('.tei-expan').show();
        $('.tei-orig').hide();
        $('.tei-sic').hide();
        $('.tei-corr').show();
        $('.tei-surplus').hide();
        $('.tei-ex').show();
        $('.tei-reg').show()
        $('.tei-del').hide();
        $('.tei-add').removeClass('tei-add-pal');
        $('.tei-hi.Red').css('color', 'black');
  
        punctuation();
  
        //In the options menu
        $('.suboptions-ed').show();
        italicExpansion();
    };
    
  };
  
function italicExpansion(){
    if ($('input[name=italic-abbr]').is(':checked')){
        $('.tei-ex').addClass('font-italic');
    } else {
        $('.tei-ex').removeClass('font-italic');
    };
};
  
function punctuation(){
    if ($('input[name=pc]').is(':checked')){
        $('.tei-pc').show();
    } else {
        $('.tei-pc').hide();
    };
};
  
  function lb_show(){
    if ($('input[name=lb-show]').is(':checked')){
      $('.tei-lb').show();
    } else {
      $('.tei-lb').hide();
    };  
  };
  
  function l_show(){
    if ($('input[name=l-show]').is(':checked')){
      $('.tei-l:not(.pre-lb-verse)').add('.tei-lg:not(.pre-lb-stanza)').show();
    } else {
      $('.tei-l').add('.tei-lg').hide();
    };  
  };
  
  function applyLayout(selected){
    // console.log(selected);
    if (selected == 'sem'){
      $('span.tei-lg > br').show();
      $('span.tei-l > br').show();
      $('span.tei-lb > br').hide();
  
      $('span.tei-lg ').removeClass('lv-secondary');
      $('span.tei-lg ').addClass('lg-primary');
      $('span.tei-lg > span ').removeClass('lv-secondary');
      $('span.tei-lg > span').addClass('lg-primary');
      $('span.tei-l > span').removeClass('lv-secondary');
      $('span.tei-l > span').addClass('lv-primary');
      $('span.tei-lb > span').removeClass('lv-primary');
      $('span.tei-lb > span').addClass('lv-secondary');
      //Menu
      $('.suboptions-3').show();
      $('.suboptions-4').hide();
      
      $('.tei-l').show();
      $('.tei-lg').show();
      
      //Submenu
      lb_show();
      
  
      //Change order of lb and lg/l when next to each other
      $('.pre-lb-verse').show();
      $('.post-lb-verse').remove();
      $('.pre-lb-stanza').show();
      $('.post-lb-stanza').remove();
      
  
    } else if (selected == 'fac'){
      $('span.tei-lg > br').hide();
      $('span.tei-l > br').hide();
      $('span.tei-lb > br').show();
  
      $('span.tei-lg ').removeClass('lg-primary');
      $('span.tei-lg ').addClass('lv-secondary');
      $('span.tei-lg > span').removeClass('lg-primary');
      $('span.tei-lg > span').addClass('lv-secondary');
      $('span.tei-l > span').removeClass('lv-primary');
      $('span.tei-l > span').addClass('lv-secondary');
      $('span.tei-lb > span').removeClass('lv-secondary');
      $('span.tei-lb > span').addClass('lv-primary');
  
      // Menu
      $('.suboptions-4').show();
      $('.suboptions-3').hide();
  
      //Submenu
      $('.tei-lb').show();
      l_show();
  
      //Change order of lb and lg/l when next to each other
      $.each ($('.tei-lb').prev('.tei-l'), function(){
        // console.log($(this));
        var clone = $(this).clone();
        $(this).next('.tei-lb').after(clone);
        clone.removeClass('pre-lb-verse');
        clone.addClass('post-lb-verse');
        $(this).addClass('pre-lb-verse');
        $(this).hide();
      });

      $.each ($('.tei-l.pre-lb-verse').prev('.tei-lg'), function(){
        console.log($(this));
        var clone = $(this).clone();
        $(this).nextAll('.tei-lb').first().after(clone);
        clone.removeClass('pre-lb-stanza');
        clone.addClass('post-lb-stanza');
        $(this).addClass('pre-lb-stanza');
        $(this).hide();
      });
      
    };
  };
  
  function lemma(){
    $('.tei-att-lemma').hide();
    
    $( '.tei-w' ).hover( 
      function(){
        if ($('input[name=lemma]').is(':checked')){
          var lemma_el = $(this).find('.tei-att-lemma');
          if (lemma_el.children('i').length == 0) {
            lemma_el.prepend('<i>lem: </i>');
          }
          lemma_chars = lemma_el.text().length;
          lemma_el.width(lemma_chars * 9)

          if ($('input[name=int-gloss]').is(':checked')){
            lemma_el.css('top', '-2.5rem');
          } else {
            lemma_el.css('top', '-1.7rem');
          }


          lemma_el.show();
        }}, 
      function(){
        $(this).find('.tei-att-lemma').hide();
      });
  }

  function korrekturen(){    
    if ($('input[name=korr]').is(':checked')){
      $('.tei-corr').parent('.tei-w').css('text-decoration', 'underline 2px').css('text-decoration-color', '#7d62b2');
      $('.tei-corr').css('text-decoration', 'underline 2px').css('text-decoration-color', '#7d62b2');
      $('.tei-sic').parent('.tei-w').css('text-decoration', 'underline 2px').css('text-decoration-color', '#7d62b2');
      $('.tei-sic').css('text-decoration', 'underline 2px').css('text-decoration-color', '#7d62b2');
    } else {
      $('.tei-corr').parent('.tei-w').css('text-decoration', 'none');
      $('.tei-corr').css('text-decoration', 'none');
      $('.tei-sic').parent('.tei-w').css('text-decoration', 'none');
      $('.tei-sic').css('text-decoration', 'none');
    }
  }

  function interlinear_glosses(){
    if ($('input[name=int-gloss]').is(':checked')){
      $('.gloss-interlinear').show();
      $('#edition').css('line-height', 2);
      // $('.gloss-interlinear').css('color', '#a87790');
      $('.gloss-interlinear').css('color', '#77a8a8');
      $('.gloss-target').css('text-decoration', 'underline').css('text-decoration-color', '#77a8a8');
    }else {
      $('.gloss-interlinear').hide();
      $('#edition').css('line-height', 1.5);
      $('.gloss-target').css('text-decoration', 'none');
    }

    $('.gloss').hover(
      function(){
        console.log('In');
      },
      function(){
        console.log('Out');
      }
    );

  }
    
  // ADD AM RAND
  function addRandPopup(){
    $('.tei-add-margin-right').hover(
      function(){
        $(this).append('<span class="tei-add-margin-right-popup">Am rechtem Rand</span>')
        if ($('input[name=lemma]').is(':checked')){
          $(this).children('.tei-add-margin-right-popup').css('top', '-3.2rem')
        } else {
          $(this).children('.tei-add-margin-right-popup').css('top', '-1.5rem')
        };
      },
      function(){
        $(this).children('.tei-add-margin-right-popup').remove();
        },
      )
    }
  
    // DEL AM RAND
    function delRandPopup(){
      $('.tei-del-implicit').hover(
        function(){
          $(this).append('<span class="tei-del-implicit-popup">Implizit ersetzt durch Schreiberkorrektur</span>');
          if ($('input[name=lemma]').is(':checked')){
            $(this).children('.tei-del-implicit-popup').css('top', '-4.2rem')
          } else {
            $(this).children('.tei-del-implicit-popup').css('top', '-2.5rem')
          };
        },
        function(){
          $(this).children('.tei-del-implicit-popup').remove();
        })
    }
    

$(document).ready(function(){
    //MENU DARSTELLUNG
  $('#optionen-toggle').on('click', function(){
    if ($('#anzeige-optionen').css('right') != '0px'){
      $('#anzeige-optionen').animate({right: '0px'}, 800);
    } else {
      $('#anzeige-optionen').animate({right: '-400px'}, 800);  
    }
  });

  $('#close-options').on('click', function(){
    $('#anzeige-optionen').animate({right: '-400px'}, 800);
  })

      

  // DARSTELLUNG
  applyDarstellung( $('input[name=darstellung]:checked').val() );
  $('input[name=darstellung]').on('input', function(){
  applyDarstellung( $(this).val() );
  });

  $('input[name=italic-abbr]').on('input', function(){
  italicExpansion();
  });
  $('input[name=pc]').on('input', function(){
  punctuation();
  });
  $('input[name=korr]').on('input', function(){
    korrekturen();
    });

  // KORR
  var bigCorr = $('.tei-corr').has('.tei-w, .tei-pc');
  var bigSic = $('.tei-sic').has('.tei-w, .tei-pc');
  var smallCorr = $('.tei-w').has('.tei-corr').not('.tei-sic .tei-w').not('.tei-corr .tei-w');
  var smallSic = $('.tei-w').has('.tei-sic').not('.tei-sic .tei-w').not('.tei-corr .tei-w');
  bigCorr.add( smallCorr).add(bigSic).add(smallSic).hover(
    function(){
      var original = $(this).clone(); // if this is a w and not a corr with w inside
      if ( $(this).hasClass('tei-corr') ) {
        original = $(this).prev('.tei-sic').clone();
      }
      original.find('.tei-att-lemma, .tei-abbr, .tei-am, .tei-corr, .tei-reg').remove();
      original.find('*').not('.tei-sic').each(function(){
        $(this).contents().unwrap();
      });
      
      var ediert = $(this).clone();// if this is a w and not a sic with w inside
      if ( $(this).hasClass('tei-sic') ) {
        ediert = $(this).next('.tei-corr').clone();
      }
      ediert.find('.tei-att-lemma, .tei-sic, .tei-abbr, .tei-am, .tei-orig').remove();
      ediert.find('*').not('.tei-corr').each(function(){
        $(this).contents().unwrap();
      });

      var sic_string = '&#8709;'
      if (original.length > 0){
        sic_string = original.html()
      }

      $(this).append('<span class="corr-popup"><i>lect.</i> '+ sic_string + '<br/>' +
                      '<i>corr.</i> '+ ediert.html() +'</span>'); 
      $('.corr-popup').find('.tei-corr').show();
      $('.corr-popup').find('.tei-sic').show();
      if ($('input[name=lemma]').is(':checked')){
        $('.corr-popup').css('top', '-5.2rem')
      } else {
        $('.corr-popup').css('top', '-3.5rem')
      };
        
    },
    function(){$(this).find('.corr-popup').remove();})
  

  

  //LAYOUT
  applyLayout( $('input[name=layout]:checked').val() );
  $('input[name=layout]').on('input', function(){
    applyLayout( $(this).val() );
    });
  $('input[name=lb-show]').on('input', function(){
    lb_show();
    });
  $('input[name=l-show]').on('input', function(){
    l_show();
    });
  $('input[name=int-gloss]').on('input', function(){
    interlinear_glosses();
    });

  
  lemma();
  korrekturen();
  addRandPopup();
  delRandPopup();
  
  // GLOSSES
  if ( $('#edition').has('.gloss').length < 1){
    $('input[name=int-gloss]').prop( "checked", false );
    $('input[name=int-gloss]').attr('disabled','disabled');
  };
  interlinear_glosses();



    
});


module.exports = { applyLayout, applyDarstellung, lemma, addRandPopup, delRandPopup };