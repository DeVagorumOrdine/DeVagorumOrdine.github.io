parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pOoM":[function(require,module,exports) {
function e(e){"transk"==e?($(".tei-ex").hide(),$(".tei-pc").show(),$(".tei-reg").hide(),$(".tei-abbr").show(),$(".tei-expan").hide(),$(".tei-am").show(),$(".tei-orig").show(),$(".tei-sic").show(),$(".tei-surplus").show(),$(".tei-del").show(),$(".tei-add").addClass("tei-add-pal"),$(".suboptions-ed").hide()):"edit"==e&&($(".tei-abbr").hide(),$(".tei-am").hide(),$(".tei-expan").show(),$(".tei-orig").hide(),$(".tei-sic").hide(),$(".tei-surplus").hide(),$(".tei-ex").show(),$(".tei-reg").show(),$(".tei-del").hide(),$(".tei-add").removeClass("tei-add-pal"),n(),$(".suboptions-ed").show(),i())}function i(){$("input[name=italic-abbr]").is(":checked")?$(".tei-ex").addClass("font-italic"):$(".tei-ex").removeClass("font-italic")}function n(){$("input[name=pc]").is(":checked")?$(".tei-pc").show():$(".tei-pc").hide()}function s(){$("input[name=lb-show]").is(":checked")?$(".tei-lb").show():$(".tei-lb").hide()}function t(){$("input[name=l-show]").is(":checked")?$(".tei-l:not(.pre-lb-verse)").show():$(".tei-l").hide()}function a(e){console.log(e),"sem"==e?($("span.tei-lg > br").show(),$("span.tei-l > br").show(),$("span.tei-lb > br").hide(),$("span.tei-lg > span").removeClass("lv-secondary"),$("span.tei-lg > span").addClass("lv-primary"),$("span.tei-l > span").removeClass("lv-secondary"),$("span.tei-l > span").addClass("lv-primary"),$("span.tei-lb > span").removeClass("lv-primary"),$("span.tei-lb > span").addClass("lv-secondary"),$(".suboptions-3").show(),$(".suboptions-4").hide(),s(),$(".tei-l").show(),$(".pre-lb-verse").show(),$(".post-lb-verse").remove()):"fac"==e&&($("span.tei-lg > br").hide(),$("span.tei-l > br").hide(),$("span.tei-lb > br").show(),$("span.tei-lg > span").removeClass("lv-primary"),$("span.tei-lg > span").addClass("lv-secondary"),$("span.tei-l > span").removeClass("lv-primary"),$("span.tei-l > span").addClass("lv-secondary"),$("span.tei-lb > span").removeClass("lv-secondary"),$("span.tei-lb > span").addClass("lv-primary"),$(".suboptions-4").show(),$(".suboptions-3").hide(),$(".tei-lb").show(),t(),$.each($(".tei-lb").prev(".tei-l"),function(){var e=$(this).clone();$(this).next(".tei-lb").after(e),e.removeClass("pre-lb-verse"),e.addClass("post-lb-verse"),$(this).addClass("pre-lb-verse"),$(this).hide()}))}function o(){$(".tei-att-lemma").hide(),$(".tei-w").hover(function(){$("input[name=lemma]").is(":checked")&&$(this).find(".tei-att-lemma").show()},function(){$(this).find(".tei-att-lemma").hide()})}$(document).ready(function(){$("#optionen-toggle").on("click",function(){console.log("WOrking"),$("#anzeige-optionen").animate({right:"0px"},800)}),$("#close-options").on("click",function(){$("#anzeige-optionen").animate({right:"-400px"},800)}),e($("input[name=darstellung]:checked").val()),$("input[name=darstellung]").on("input",function(){e($(this).val())}),$("input[name=italic-abbr]").on("input",function(){i()}),$("input[name=pc]").on("input",function(){n()}),$("input[name=pc]").on("input",function(){n()}),a($("input[name=layout]:checked").val()),$("input[name=layout]").on("input",function(){a($(this).val())}),$("input[name=lb-show]").on("input",function(){s()}),$("input[name=l-show]").on("input",function(){t()}),o()}),module.exports={applyLayout:a,applyDarstellung:e,lemma:o};
},{}]},{},["pOoM"], null)