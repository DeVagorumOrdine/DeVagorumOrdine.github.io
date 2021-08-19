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

import pages from './pages.json'
import fragments from './html_fragments.json';

const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
const ms = urlParams.get('ms')
const pg = urlParams.get('pg')


// Set the height of the map, based on viewport
$('#map').height( $(window).height() - 30 )


// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.
var extent = [0, 0, pages[ms]["sizes"][pg][0], pages[ms]["sizes"][pg][1]];
console.log(pages[ms]["sizes"]);
var projection = new Projection({
  code: 'projection1',
  units: 'pixels',
  extent: extent,
});

var msLayer =     new ImageLayer({
    source: new Static({
      attributions: pages[ms]['shelfmark'] + ', ' +  pg ,
      url: 'https://devagorumordine.github.io/img/mss/'+ ms +'_' + pg +'.jpg',
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



$(document).ready(function(){
  console.log(ms,pg)
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
  
  $('#edition').append(fragments.texts[ms][pg]);
  
  
  

  // ÜBERSETZUNG

  $('#uebersetzung').on('click', function(){
    window.open('/translation.html?ms=' + ms, '', "width=500,height=600,top=300,left=1000");
    return false;
  });
  
  
  // SCROLL IMAGE
  const map = $('#map');
  $(window).scroll(function() {
    var map_offset = map.offset()['top'];
    var distance = $(window).height() +  $(document).scrollTop() - map_offset - map.height();
    var previous = parseInt(map.css('top'));
    var movement = previous + distance - 20;
    if (movement < 0) {
      map.css('top', 0);  
    } 
    else if (distance < 0 || previous + map.height() + 30 < $('#edition').height() ) {
      map.css('top', movement);
    };
  });


});

