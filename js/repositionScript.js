window.url=(function(){function b(c){return!isNaN(parseFloat(c))&&isFinite(c)}return function a(p,d){var c=d||window.location.toString();if(c.substring(0,2)==="//"){c="http:"+c}else{if(c.split("://").length===1){c="http://"+c}}d=c.split("/");var g={auth:""},o=d[2].split("@");if(o.length===1){o=o[0].split(":")}else{g.auth=o[0];o=o[1].split(":")}g.protocol=d[0],g.hostname=o[0],g.port=(o[1]||"80"),g.pathname="/"+d.slice(3,d.length).join("/").split("?")[0].split("#")[0];var e=g.pathname;if(e.split(".").length===1&&e[e.length-1]!=="/"){e+="/"}var k=g.hostname,l=k.split("."),m=e.split("/");if(!p){return c}else{if(p==="hostname"){return k}else{if(p==="domain"){return l.slice(-2).join(".")}else{if(p==="tld"){return l.slice(-1).join(".")}else{if(p==="sub"){return l.slice(0,l.length-2).join(".")}else{if(p==="port"){return g.port||"80"}else{if(p==="protocol"){return g.protocol.split(":")[0]}else{if(p==="auth"){return g.auth}else{if(p==="user"){return g.auth.split(":")[0]}else{if(p==="pass"){return g.auth.split(":")[1]||""}else{if(p==="path"){return e}else{if(p[0]==="."){p=p.substring(1);if(b(p)){p=parseInt(p);return l[p<0?l.length+p:p-1]||""}}else{if(b(p)){p=parseInt(p);return m[p<0?m.length-1+p:p]||""}else{if(p==="file"){return m.slice(-1)[0]}else{if(p==="filename"){return m.slice(-1)[0].split(".")[0]}else{if(p==="fileext"){return m.slice(-1)[0].split(".")[1]||""}else{if(p[0]==="?"||p[0]==="#"){var h=c,f=null;if(p[0]==="?"){h=(h.split("?")[1]||"").split("#")[0]}else{if(p[0]==="#"){h=(h.split("#")[1]||"")}}if(!p[1]){return h}p=p.substring(1);h=h.split("&");for(var j=0,n=h.length;j<n;j++){f=h[j].split("=");if(f[0]===p){return f[1]}}}}}}}}}}}}}}}}}}}return""}})();$(function(){var $iframe=$('#iframe');var $switcher=$('#switcher');var vW=$(window).width();var vH=$(window).height();var vHdisp;var w;var h;var hs;var t=200;var mtop;var top;var $btn=$('a.device');var obj={doIt:function(e){e.preventDefault();$this=$(this);if($this.hasClass('vert')&&$this.hasClass('rotate')){w=$this.data('h');h=$this.data('w');$this.removeClass('vert').addClass('rotated');}else{w=$this.data('w');h=$this.data('h');top=20;$this.addClass('vert').removeClass('rotated');}
if($this.hasClass('full')){w="100%";h=vH;mtop='0px';top=0;}else{mtop=20+'px'}
hs=h;vHdisp=vH- $switcher.height()- top*2;if(parseInt(h)>vHdisp){$iframe.animate({width:w,height:vH- top*2- $switcher.height(),'marginTop':mtop},t);}else{$iframe.animate({width:w,height:h,'marginTop':mtop},t);}
$btn.removeClass("active");$this.addClass("active");}}
$($btn).on('click',obj.doIt);$(window).smartresize(function(){vW=$(window).width();vH=$(window).height();$iframe.css({height:(parseInt(h)>vH- $switcher.height()- top*2)?vH- top*2- $switcher.height()+'px':hs});}).smartresize();});(function($,sr){var debounce=function(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){if(!execAsap)func.apply(obj,args);timeout=null;};if(timeout)clearTimeout(timeout);else if(execAsap)func.apply(obj,args);timeout=setTimeout(delayed,threshold||100);};}
jQuery.fn[sr]=function(fn){return fn?this.bind('resize',debounce(fn)):this.trigger(sr);};})(jQuery,'smartresize');