(function($){skel.breakpoints({wide:'(max-width: 1680px)',normal:'(max-width: 1280px)',narrow:'(max-width: 980px)',narrower:'(max-width: 840px)',mobile:'(max-width: 736px)',mobilep:'(max-width: 480px)'});$(function(){var $window=$(window),$body=$('body');$body.addClass('is-loading');$window.on('load',function(){$body.removeClass('is-loading');});$('form').placeholder();skel.on('+narrower -narrower',function(){$.prioritize('.important\\28 narrower\\29',skel.breakpoint('narrower').active);});$('#nav > ul').dropotron({offsetY:-15,hoverDelay:0,alignment:'center'});$('<div id="titleBar">'+'<a href="#navPanel" class="toggle"></a>'+'<span class="title">'+'Hep Oils'+'</span>'+'</div>').appendTo($body);$('<div id="navPanel">'+'<nav>'+$('#nav').navList()+'</nav>'+'</div>').appendTo($body).panel({delay:500,hideOnClick:true,hideOnSwipe:true,resetScroll:true,resetForms:true,side:'left',target:$body,visibleClass:'navPanel-visible'});if(skel.vars.os=='wp'&&skel.vars.osVersion<10)$('#titleBar, #navPanel, #page-wrapper').css('transition','none');});})(jQuery);