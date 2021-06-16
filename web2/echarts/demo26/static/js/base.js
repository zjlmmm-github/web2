$(function(){nav();})
function nav(){$(".nav>ul>li").hover(function(){$(this).find(".li_ul").stop(true,true).slideDown("slow");stop();},function(){$(this).find(".li_ul").slideUp("slow");})}