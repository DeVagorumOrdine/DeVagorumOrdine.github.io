parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pOoM":[function(require,module,exports) {
function e(e){"transk"==e?($(".tei-ex").hide(),$(".tei-pc").show(),$(".tei-reg").hide(),$(".tei-abbr").show(),$(".tei-expan").hide(),$(".tei-am").show(),$(".tei-orig").show(),$(".tei-sic").show(),$(".tei-corr").hide(),$(".tei-surplus").show(),$(".tei-del").show(),$(".tei-add").addClass("tei-add-pal"),$(".tei-hi.Red").css("color","red"),$(".suboptions-ed").hide()):"edit"==e&&($(".tei-abbr").hide(),$(".tei-am").hide(),$(".tei-expan").show(),$(".tei-orig").hide(),$(".tei-sic").hide(),$(".tei-corr").show(),$(".tei-surplus").hide(),$(".tei-ex").show(),$(".tei-reg").show(),$(".tei-del").hide(),$(".tei-add").removeClass("tei-add-pal"),$(".tei-hi.Red").css("color","black"),t(),$(".suboptions-ed").show(),i())}function i(){$("input[name=italic-abbr]").is(":checked")?$(".tei-ex").addClass("font-italic"):$(".tei-ex").removeClass("font-italic")}function t(){$("input[name=pc]").is(":checked")?$(".tei-pc").show():$(".tei-pc").hide()}function s(){$("input[name=lb-show]").is(":checked")?$(".tei-lb").show():$(".tei-lb").hide()}function n(){$("input[name=l-show]").is(":checked")?$(".tei-l:not(.pre-lb-verse)").add(".tei-lg:not(.pre-lb-stanza)").show():$(".tei-l").add(".tei-lg").hide()}function o(e){"sem"==e?($("span.tei-lg > br").show(),$("span.tei-l > br").show(),$("span.tei-lb > br").hide(),$("span.tei-lg ").removeClass("lv-secondary"),$("span.tei-lg ").addClass("lg-primary"),$("span.tei-lg > span ").removeClass("lv-secondary"),$("span.tei-lg > span").addClass("lg-primary"),$("span.tei-l > span").removeClass("lv-secondary"),$("span.tei-l > span").addClass("lv-primary"),$("span.tei-lb > span").removeClass("lv-primary"),$("span.tei-lb > span").addClass("lv-secondary"),$(".suboptions-3").show(),$(".suboptions-4").hide(),$(".tei-l").show(),$(".tei-lg").show(),s(),$(".pre-lb-verse").show(),$(".post-lb-verse").remove(),$(".pre-lb-stanza").show(),$(".post-lb-stanza").remove()):"fac"==e&&($("span.tei-lg > br").hide(),$("span.tei-l > br").hide(),$("span.tei-lb > br").show(),$("span.tei-lg ").removeClass("lg-primary"),$("span.tei-lg ").addClass("lv-secondary"),$("span.tei-lg > span").removeClass("lg-primary"),$("span.tei-lg > span").addClass("lv-secondary"),$("span.tei-l > span").removeClass("lv-primary"),$("span.tei-l > span").addClass("lv-secondary"),$("span.tei-lb > span").removeClass("lv-secondary"),$("span.tei-lb > span").addClass("lv-primary"),$(".suboptions-4").show(),$(".suboptions-3").hide(),$(".tei-lb").show(),n(),$.each($(".tei-lb").prev(".tei-l"),function(){var e=$(this).clone();$(this).next(".tei-lb").after(e),e.removeClass("pre-lb-verse"),e.addClass("post-lb-verse"),$(this).addClass("pre-lb-verse"),$(this).hide()}),$.each($(".tei-l.pre-lb-verse").prev(".tei-lg"),function(){console.log($(this));var e=$(this).clone();$(this).nextAll(".tei-lb").first().after(e),e.removeClass("pre-lb-stanza"),e.addClass("post-lb-stanza"),$(this).addClass("pre-lb-stanza"),$(this).hide()}))}function a(){$(".tei-att-lemma").hide(),$(".tei-w").hover(function(){if($("input[name=lemma]").is(":checked")){var e=$(this).find(".tei-att-lemma");0==e.children("i").length&&e.prepend("<i>lem: </i>"),lemma_chars=e.text().length,e.width(9*lemma_chars),$("input[name=int-gloss]").is(":checked")?e.css("top","-2.5rem"):e.css("top","-1.7rem"),e.show()}},function(){$(this).find(".tei-att-lemma").hide()})}function r(){$("input[name=korr]").is(":checked")?($(".tei-corr").parent(".tei-w").css("text-decoration","underline 2px").css("text-decoration-color","#7d62b2"),$(".tei-corr").css("text-decoration","underline 2px").css("text-decoration-color","#7d62b2"),$(".tei-sic").parent(".tei-w").css("text-decoration","underline 2px").css("text-decoration-color","#7d62b2"),$(".tei-sic").css("text-decoration","underline 2px").css("text-decoration-color","#7d62b2")):($(".tei-corr").parent(".tei-w").css("text-decoration","none"),$(".tei-corr").css("text-decoration","none"),$(".tei-sic").parent(".tei-w").css("text-decoration","none"),$(".tei-sic").css("text-decoration","none"))}function l(){$("input[name=int-gloss]").is(":checked")?($(".gloss-interlinear").show(),$("#edition").css("line-height",2),$(".gloss-interlinear").css("color","#77a8a8"),$(".gloss-target").css("text-decoration","underline").css("text-decoration-color","#77a8a8")):($(".gloss-interlinear").hide(),$("#edition").css("line-height",1.5),$(".gloss-target").css("text-decoration","none")),$(".gloss").hover(function(){console.log("In")},function(){console.log("Out")})}$(document).ready(function(){$("#optionen-toggle").on("click",function(){"0px"!=$("#anzeige-optionen").css("right")?$("#anzeige-optionen").animate({right:"0px"},800):$("#anzeige-optionen").animate({right:"-400px"},800)}),$("#close-options").on("click",function(){$("#anzeige-optionen").animate({right:"-400px"},800)}),e($("input[name=darstellung]:checked").val()),$("input[name=darstellung]").on("input",function(){e($(this).val())}),$("input[name=italic-abbr]").on("input",function(){i()}),$("input[name=pc]").on("input",function(){t()}),$("input[name=korr]").on("input",function(){r()});var c=$(".tei-corr").has(".tei-w, .tei-pc"),p=$(".tei-sic").has(".tei-w, .tei-pc"),d=$(".tei-w").has(".tei-corr").not(".tei-sic .tei-w").not(".tei-corr .tei-w"),h=$(".tei-w").has(".tei-sic").not(".tei-sic .tei-w").not(".tei-corr .tei-w");c.add(d).add(p).add(h).hover(function(){var e=$(this).clone();$(this).hasClass("tei-corr")&&(e=$(this).prev(".tei-sic").clone()),e.find(".tei-att-lemma, .tei-abbr, .tei-am, .tei-corr, .tei-reg").remove(),e.find("*").not(".tei-sic").each(function(){$(this).contents().unwrap()});var i=$(this).clone();$(this).hasClass("tei-sic")&&(i=$(this).next(".tei-corr").clone()),i.find(".tei-att-lemma, .tei-sic, .tei-abbr, .tei-am, .tei-orig").remove(),i.find("*").not(".tei-corr").each(function(){$(this).contents().unwrap()}),$(this).append('<span class="corr-popup"><i>lect.</i> '+e.html()+"<br/><i>corr.</i> "+i.html()+"</span>"),$(".corr-popup").find(".tei-corr").show(),$(".corr-popup").find(".tei-sic").show(),$("input[name=lemma]").is(":checked")?$(".corr-popup").css("top","-5.2rem"):$(".corr-popup").css("top","-3.5rem")},function(){$(this).find(".corr-popup").remove()}),o($("input[name=layout]:checked").val()),$("input[name=layout]").on("input",function(){o($(this).val())}),$("input[name=lb-show]").on("input",function(){s()}),$("input[name=l-show]").on("input",function(){n()}),$("input[name=int-gloss]").on("input",function(){l()}),a(),r(),$("#edition").has(".gloss").length<1&&($("input[name=int-gloss]").prop("checked",!1),$("input[name=int-gloss]").attr("disabled","disabled")),l()}),module.exports={applyLayout:o,applyDarstellung:e,lemma:a};
},{}]},{},["pOoM"], null)