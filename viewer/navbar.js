const navbar = "<button class= \"navbar-toggler \" type= \"button \" data-toggle= \"collapse \" data-target= \"#collapsibleNavbar \"> <span class= \"navbar-toggler-icon \"></span> \n </button> "+
        "<div class= \"collapse navbar-collapse \" id= \"collapsibleNavbar \"> \n <!-- Links --> "+
        "<ul class= \"navbar-nav \"> "+
        "<li class= \"nav-item active \"> <a class= \"nav-link \" href= \"https://devagorumordine.github.io/ \">Startseite</a></li>"+
        "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/synopse.html?sp=3&wit=B \">Synopse</a></li>"+
        "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/mss.html \">Hss. Editionen</a></li>"+
        "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/team.html \">Team</a></li></ul></div>"

$(document).ready(function(){
    $('#navbarcont').append(navbar);
});