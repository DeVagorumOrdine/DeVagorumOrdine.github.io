const navbar = "<button class= \"navbar-toggler\" type= \"button\" data-toggle= \"collapse\" data-target=\"#collapsibleNavbar\" aria-controls=\"collapsibleNavbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button> "+
        "<div class= \"collapse navbar-collapse \" id=\"collapsibleNavbar\">"+
        "<ul class= \"navbar-nav mr-auto\"> "+
        "<li class= \"nav-item active \"> <a class= \"nav-link \" href= \"https://devagorumordine.github.io/ \">De Vagorum Ordine</a></li>"+
        // "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/mss.html \">Edition</a></li>"+
        "<li class=\"nav-item dropdown\">"+
        "<a class=\"nav-link dropdown-toggle\" href=\"/synopse_intro.html\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
          "Edition</a>"+
        "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">"+
          "<a class=\"dropdown-item\" href=\"/mss.html?sp=3&wit=B\">Texte</a>"+
          "<a class=\"dropdown-item\" href=\"/mss_bes.html\">Handschriftenbeschreibungen</a>"+
          "<a class=\"dropdown-item\" href=\"/funkt.html\">Funktionalität</a>"+
          "<a class=\"dropdown-item\" href=\"/bib.html\">Bibliographie und Links</a>"+
        "</div></li>"+
        "<li class=\"nav-item dropdown\">"+
        "<a class=\"nav-link dropdown-toggle\" href=\"/synopse_intro.html\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
          "Synopse</a>"+
        "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">"+
          "<a class=\"dropdown-item\" href=\"/synopse.html?sp=3&wit=B\">Textsynopse</a>"+
          "<a class=\"dropdown-item\" href=\"/strophen_synopse.html\">Strophensynopse</a>"+
        "</div></li>"+
        "<li class=\"nav-item dropdown\">"+
        "<a class=\"nav-link dropdown-toggle\" href=\"/synopse_intro.html\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
          "Zur Website</a>"+
        "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">"+
          "<a class=\"dropdown-item\" href=\"/team.html?sp=3&wit=B\">Team</a>"+
          "<a class=\"dropdown-item\" href=\"/dank.html\">Danksagungen</a>"+
          "<a class=\"dropdown-item\" href=\"/lizenz.html\">Lizenz</a>"+
        "</div></li>"+
        // "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/synopse.html?sp=3&wit=B \">Synopse</a></li>"+
        // "<li class= \"nav-item \"><a class= \"nav-link \" href= \"/team.html \">Team</a></li>"+
        "</ul>"+
        // "<span class=\"navbar-text dvo-logo\">De Vagorum Ordine</span>"+
        "</div>"


        // "<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">"+
$(document).ready(function(){
    $('#navbarcont').append(navbar);
});