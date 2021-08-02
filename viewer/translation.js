import translations from './translation.json';
import pages from './pages.json';

const current_url = window.location.search;
const urlParams = new URLSearchParams(current_url);
const ms = urlParams.get('ms');

$(document).ready(function(){
    $('#title').append( ms + ' <small class="text-muted">' + pages[ms]['shelfmark'] + '</small>' );
    $('#text-tr').append( translations['texts'][ms] );
    
})

