// close overlay
jQuery.fn.overlayclose=function(){$(".overlay").hide();$(".overlay-bg").fadeOut().remove();$("body").css("overflow","visible");return this};jQuery.fn.overlaybgheight=function(){$(".overlay-bg").height($(document).height());return this};jQuery.fn.center=function(){this.css("position","fixed");this.css("top","20%");this.css("left",Math.max(0,($(window).width()-this.outerWidth())/2+$(window).scrollLeft())+"px");return this};$(document).ready(function(){$(".open-overlay").click(function(){$(".overlay").overlayclose();$(".overlay").center().show();$("body").append('<div class="overlay-bg"></div>');$(".overlay").overlaybgheight();$("body").css("overflow","hidden")});$(".overlay .overlay-close").click(function(){$(".overlay").overlayclose()})});