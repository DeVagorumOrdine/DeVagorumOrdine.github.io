parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cxbB":[function(require,module,exports) {
module.exports={B:{shelfmark:"München, BSB, Cod. lat. mon. 4660 (Carmen Buranum 219)",pages:["95v","96r","96v"]},Lz:{shelfmark:"Leipzig, Universitätsbibliothek, Ms. 1250",pages:["33r"]},M:{shelfmark:"München, BSB, Cod. lat. mon. 18910",pages:["193v"]},"Pé":{shelfmark:"Pécs/Fünfkirchen, Bischöfliche Bibliothek, DD. III. 18",pages:["95"]},Pr:{shelfmark:"Prag, Nationalbibliothek, V G 17",pages:["96r"]},Vo:{shelfmark:"Volterra, Bibl. Guarnacci, 100 (8653)",pages:["13v","14r"]},We:{shelfmark:"Gräflich Stolbergischen Bibliothek zu Wernigerode, Zb 4m",pages:["140r"]},Wi:{shelfmark:"Wittingau/Třeboň, Státní Archiv, A 7",pages:["147v","148r"]}};
},{}],"YvoJ":[function(require,module,exports) {
"use strict";var e=s(require("./pages.json"));function s(e){return e&&e.__esModule?e:{default:e}}$(document).ready(function(){$.each(e.default,function(e,s){var t="";$.each(s.pages,function(s,i){0!=s&&(t+=" - "),t+='<a href="edition.html?ms='+e+"&pg="+i+'">'+i+"</a>"}),$("#ms_list").append('<div class="list-group-item"><img class="mss-thumb m-3" src="https://devagorumordine.github.io/img/'+e+"_"+s.pages[0]+'-thumb.jpg"></img><h3 class="m-3">'+e+"</h3><h4>"+s.shelfmark+"</h4>"+t+"</div>")})});
},{"./pages.json":"cxbB"}]},{},["YvoJ"], null)