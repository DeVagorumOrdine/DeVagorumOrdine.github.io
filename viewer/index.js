import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';
import {getCenter} from 'ol/extent';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import {Circle, Fill, RegularShape, Stroke, Style} from 'ol/style';
import {LineString, Point} from 'ol/geom';

import FontSymbol from 'ol-ext/style/FontSymbol';

import pages from './pages.json'
import fragments from './html_fragments.json';

const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
const ms = urlParams.get('ms')
const pg = urlParams.get('pg')

// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.
var extent = [0, 0, 2781, 3990];
var projection = new Projection({
  code: 'bsb-image',
  units: 'pixels',
  extent: extent,
});

var msLayer =     new ImageLayer({
    source: new Static({
      attributions: pages[ms]['shelfmark'] + ', ' +  pg,
      url: 'https://devagorumordine.github.io/img/'+ ms +'_' + pg +'.jpg',
      projection: projection,
      imageExtent: extent,
    }),
  }) ;

var points = [
    new Point([913,885]),
    new Point([2388,1052])
];

var lines = new Feature({
    // geometry: new LineString(points),
    geometry: new Point([200,200])
});

var linesLayer = new VectorLayer({
    source: new VectorSource({
        features: [lines]
    }) ,
    style: new Style({
            // image: new FontSymbol({
            //     glyph: '' ,
            //     form: 'marker',
            //     radius: 10,
            //     offsetY: -15,
            //     // gradient: true,
            //     fontSize: 1.0,
            //     fontStyle: '',
            //     color: 'white',
            //     fill: new Fill({
            //         color: 'blue',
            //     }),
            //     stroke: new Stroke({
            //         color: 'black',
            //         width: 1.5
            //     })
            // })
            // It works with the marker, should use polygons and also store them in a json file

        stroke: new Stroke({
            color: 'red',
            width: 15
        })
    })
});


var map = new Map({
  layers: [msLayer],
  target: 'map',
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom:2,
    maxZoom: 8,
  }),
});

map.addLayer(linesLayer)




// EDITION
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
  console.log(selected);
  if (selected == 'sem'){
    $('span.tei-lg > br').show();
    $('span.tei-l > br').show();
    $('span.tei-lb > br').hide();

    $('span.tei-lg > span').removeClass('lv-secondary');
    $('span.tei-lg > span').addClass('lv-primary');
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

    $('span.tei-lg > span').removeClass('lv-primary');
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



$(document).ready(function(){
  var source = ms + '-' + pg ;
  
  // HEADER and PAGINATION
  $('#current_page_header').append(pages[ms]['shelfmark']);
  $.each(pages[ms]['pages'], function(idx, val){
    if (val == pg){
      $('#pager').append('<li class="page-item active"><a class="page-link" href="'+
                          '/edition.html?ms='+ ms + '&pg='+ val +
                          '">'+val+'</a></li>');  
    } else {
      $('#pager').append('<li class="page-item"><a class="page-link" href="'+
                          '/edition.html?ms='+ ms + '&pg='+ val +
                          '">'+val+'</a></li>');
    }
      
  });
  
  // APPEND THE TEXT
  $('#edition').append(fragments.texts[source]);
  
  
  // Optionen Darstellung
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
  $('input[name=pc]').on('input', function(){
    punctuation();
  });

  
  

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
  $('.tei-att-lemma').hide();
  
  
    
  $( '.tei-w' ).hover( 
    function(){
      if ($('input[name=lemma]').is(':checked')){
        $(this).find('.tei-att-lemma').show();
      }}, 
    function(){
      $(this).find('.tei-att-lemma').hide();
    });
  
  
  // Move the image down when there is too much text
  // var ed_height = $('#edition').height();
  $(window).scroll(function() {
    var current_margin = $('#map').css('margin-top');
    current_margin = parseInt(current_margin);
    // console.log(current_margin)
    var top_of_element = $("#map").offset().top;
    var bottom_of_element = $("#map").offset().top + $("#map").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();


    if (top_of_screen > (bottom_of_element - 300)){
      $('#map').css('margin-top', current_margin + 500);
    } else if (bottom_of_screen < top_of_element +300){
      $('#map').css('margin-top', current_margin - 500);
    };
});
  
  
  
  
  



  


});

