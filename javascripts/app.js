$(document).ready(function(){$(document).foundation(),Socialite.load();var o=$("body article .sidebar"),l=$(".toc",o);l.length&&(l.find("h4").preped('<a href="#top">&uArr;</a>'),l.find("ul#markdown-toc > li").each(function(o){var l=$(this),a=l.children("ul");if(a.length){var e=$('<a href="#" class="toggle"><span class="open">&dArr;</span><span class="close">&lArr;</span></a>');e.click(function(){return l.toggleClass("closed"),!1}),l.prepend(e),o>0&&l.addClass("closed")}}))}),$(window).load(function(){var o=($("body article .sidebar"),$("body article .content")),l=$("body article .sidebar-float");if(l.length){var a,e,t=!1,s=l.offset().top;$(window).bind("scroll",function(){e=o.outerHeight()+s-l.outerHeight()-100,$(this).scrollTop()>=e?(console.log("hide float sidebar"),t||(l.hide(),t=!0)):$(this).scrollTop()>=s?(t&&(t=!1,l.show()),a||(a=!0,l.addClass("float"))):a&&$(this).scrollTop()<=s&&a&&(a=!1,l.removeClass("float"))})}});