parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JhvP":[function(require,module,exports) {
var a='<button class= "navbar-toggler" type= "button" data-toggle= "collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class= "collapse navbar-collapse " id="collapsibleNavbar"><ul class= "navbar-nav mr-auto"> <li class= "nav-item active "> <a class= "nav-link " href= "https://devagorumordine.github.io/ ">De Vagorum Ordine</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/synopse_intro.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edition</a><div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="/einf.html?sp=3&wit=B">Einführung</a><a class="dropdown-item" href="/mss.html?sp=3&wit=B">Texte</a><a class="dropdown-item" href="/mss_bes.html">Handschriftenbeschreibungen</a><a class="dropdown-item" href="/funkt.html">Funktionalität</a><a class="dropdown-item" href="/bib.html">Bibliographie und Links</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/synopse_intro.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Synopse</a><div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="/synopse.html?sp=3&wit=B">Textsynopse</a><a class="dropdown-item" href="/strophen_synopse.html">Strophensynopse</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/synopse_intro.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Zur Website</a><div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="/team.html?sp=3&wit=B">Team</a><a class="dropdown-item" href="/dank.html">Danksagungen</a><a class="dropdown-item" href="/lizenz.html">Zitieren</a></div></li></ul></div>';$(document).ready(function(){$("#navbarcont").append(a)});
},{}]},{},["JhvP"], null)