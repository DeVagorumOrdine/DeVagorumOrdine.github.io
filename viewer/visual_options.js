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
        // $('.tei-pc').show();
        $('.tei-add').removeClass('tei-add-pal');
  
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
      $('.tei-l:not(.pre-lb-verse)').show();
    } else {
      $('.tei-l').hide();
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
  
      //Submenu
      lb_show();
      $('.tei-l').show();
  
      //Change order of lb and lg/l when next to each other
      $('.pre-lb-verse').show();
      $('.post-lb-verse').remove();
      
  
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
    };
  };
  
  function lemma(){
    $('.tei-att-lemma').hide();
    
    $( '.tei-w' ).hover( 
      function(){
        if ($('input[name=lemma]').is(':checked')){
          $(this).find('.tei-att-lemma').show();
        }}, 
      function(){
        $(this).find('.tei-att-lemma').hide();
      });
  }

  function korrekturen(){    
    if ($('input[name=korr]').is(':checked')){
      $('.tei-corr').parent().css('text-decoration', 'underline 2px').css('text-decoration-color', '#7d62b2');
    } else {
      $('.tei-corr').parent().css('text-decoration', 'none');
    }
  }
    
    

$(document).ready(function(){
    //MENU DARSTELLUNG
  $('#optionen-toggle').on('click', function(){
    $('#anzeige-optionen').animate({right: '0px'}, 800);
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
  var smallCorr = $('.tei-w').has('.tei-corr');
  bigCorr.add( smallCorr ).hover(
    function(){
      var original = $(this).clone();
      original.find('.tei-att-lemma, .tei-abbr, .tei-am, .tei-corr, .tei-reg').remove();
      original.find('*').not('.tei-sic').each(function(){
        $(this).contents().unwrap();
      });
      var ediert = $(this).clone();
      ediert.find('.tei-att-lemma, .tei-sic, .tei-abbr, .tei-am, .tei-orig').remove();
      ediert.find('*').not('.tei-corr').each(function(){
        $(this).contents().unwrap();
      });
      // $(this).append('<span class="corr-popup">Original: '+ cloned.text() +'</span>');}, 
      $(this).append('<span class="corr-popup"><i>lect.</i> '+ original.html() + '<br/>' +
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

  // LEMMA
  lemma();

  korrekturen();


    
});


module.exports = { applyLayout, applyDarstellung, lemma };