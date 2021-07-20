const navbar = "<button class= \"navbar-toggler \" type= \"button \" data-toggle= \"collapse \" data-target= \"#collapsibleNavbar \"> <span class= \"navbar-toggler-icon \"></span> \n </button> "+
        "<div class= \"collapse navbar-collapse \" id= \"collapsibleNavbar \"> \n <!-- Links --> "+
        "<ul class= \"navbar-nav \"> "+
        "<li class= \"nav-item active \"> <a class= \"nav-link \" href= \"https://devagorumordine.github.io/ \">Startseite</a></li>"+
        "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/mss.html \">Edition</a></li>"+
        "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/mss.html \">Handschriften</a></li>"+
        "<li class= \"nav-item \"><a class= \"nav-link \" href= \"# \">Team</a></li></ul></div>"

$(document).ready(function(){
    $('#navbarcont').append(navbar);
});