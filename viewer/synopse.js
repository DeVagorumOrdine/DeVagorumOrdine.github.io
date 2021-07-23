import pages from './pages.json' ;
import fragments from './html_fragments.json';

$.each(fragments['texts'], function(key){
    console.log(key);
    // ('#edition').append(fragments[val]);
});

$(document).ready(function(){
    const current_url = window.location.search;
    const urlParams = new URLSearchParams(current_url);
    const spaltenzahl = urlParams.get('sp');
    $('#spalten-sel-'+spaltenzahl).addClass('active');
    for(var i=1; i <= spaltenzahl; i++){
        $('#texts').append('<div class="col-md"><p>Hola</p></div>')
    };
    
});