import mss from './pages.json'

$(document).ready(function(){
    $.each(mss, function(key,value){
        // console.log(key,value);
        var pages = '';
        $.each(value['pages'], function(index, pg){
            if (index != 0){
                pages += ' - '
            }
            pages += '<a href="'+ 'edition.html?ms='+ key +'&pg='+ pg +'">' + pg + '</a>'
        })
        
        $('#ms_list').append('<div class="list-group-item col-md-6 col-sm-12">'+
        '<img class="mss-thumb m-3" src="https://devagorumordine.github.io/img/mss/'+
        key +'_'+ value['pages'][0] +'-thumb.jpg' +
        '"></img>'+
        '<h3 class="m-3">'+key + '</h3>'+
        '<h5>'+ value['shelfmark']+'</h5>'+
        pages + 
        '</div>')
    })
});