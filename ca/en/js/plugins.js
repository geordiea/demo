function AODA_showMore(){$(".show_more").each(function(){$that=$(this);$a=$('<a href="javascript:void(0);"></a>');$that.parent().append($a);$a.append($that)})}(function(e){var t=e(window);var n=e(document.documentElement);e.fn.reverse=Array.prototype.reverse;window.cookieMonster=window.cookieMonster||{exists:function(e){return void 0!=this.read(e)},read:function(e){return this.utility.foreach.call(this.utility.get(),function(){if(this.key==e)return this.value})},write:function(){if(!arguments.length)return;var e="",t="",n="",r="/",i=60,s=new Date;this.utility.foreach.call(arguments,function(){var e=Object.prototype.toString.call(this).toLowerCase();if(!!~e.indexOf("string")){if(this.charAt(0)=="/")r=this;else if(!t.length)t=this;else if(!n.length)n=this}else if(!!~e.indexOf("number"))i=this});s.setTime(s.getTime()+i*864e5);e=t+"="+(n.length?n:t)+"; expires="+s.toGMTString()+"; path="+r;if(!!window.developer)alert(e);document.cookie=e},erase:function(){this.write.apply(this,Array.prototype.slice.call(arguments).concat([-1]))},utility:{get:function(){if(!document.cookie.length)return[];var e=this.trim;return this.each.call(document.cookie.split(";"),function(){var t=this.split("="),n=e.call(t[0]),r=e.call(t.pop());return{key:n,value:n===r?true:r}})},each:function(){if(typeof arguments[0]!="function")return this;var e=void 0;for(var t=0;t<this.length;t++){var n=arguments[0].call(this[t],t);if(n!=e)this[t]=n}return this},foreach:function(){if(typeof arguments[0]!="function")return;var e=void 0;for(var t=0;t<this.length;t++){var n=arguments[0].call(this[t],t);if(n!=e)return n}},trim:function(){return this.replace(/^\s+|\s+$/g,"")}}};e.xDomainRequest=function(t){if("string"!=typeof t||!t.length)return console.warn("$.xDomainRequest - no url specified.");var n={},r=function(){};for(var i=1;i<arguments.length;i++){var s=arguments[i];if("function"==typeof s)r=s;else if(Object(s)===s)n=s}e.support.cors=true;if("XDomainRequest"in window){var o=new XDomainRequest;o.onprogress=function(){};o.onerror=function(){r.call(this,"","error")};o.ontimeout=function(){r.call(this,"","timeout")};o.onload=function(){r.call(this,this.responseText||"","success")};o.timeout=5e3;var u=[];for(var a in n){if(n.hasOwnProperty(a))u.push(encodeURIComponent(a)+"="+encodeURIComponent(n[a]))}t+=(!!~t.indexOf("?")?"&":"?")+u.join("&");o.open("GET",t);setTimeout(function(){o.send()},0);return o}else return e.get(t,n).fail(function(){r.call(this,"","error")}).done(function(e){r.call(this,e,"success")})};e.fn.header=function(){function b(t){$target=e(a[t]);$target.click()}function w(){function i(){h();u();m()}function u(){var t=e('<a class="aoda-proxy" href="javascript:void(0);"></a>');o=[];a.each(function(n){var r=e(this);var i=t.clone();i.attr("data-index",n);var s=new b(i,r);f(s);r.append(i);var u=e(l[n]);var a=u.find("*");a.each(function(){var t=e(this);if(t.is("a")||t.is("input")||t.is("select")||t.is("button")){s.children.push(t)}});o.push(s)})}function f(t){t.proxy.focus(function(){var n=Number(e(this).attr("data-index"));t.elementGroup.find("img").addClass("focus");e("body").addClass("aoda")});t.proxy.blur(function(){t.elementGroup.find("img").removeClass("focus")});t.proxy.click(function(){v(Number(e(this).attr("data-index")))})}function h(){l=e(".flyout_content");c=e(".flyout_button .active")}function v(t){n=t;$thisFlyout=e(l[t]);l.not($thisFlyout).css(p);c.css(p);e(c[t]).css(d);m()}function m(){g();e(".header_cup").attr("tabIndex",2).focus(function(){e("body").addClass("aoda")});if(n>=0){var t=3;var r;for(var i=0;i<n;i++){r=o[i];r.proxy.attr("tabIndex",t++)}r=o[n];r.proxy.attr("tabIndex",t++);for(var i=0;i<r.children.length;i++){var s=r.children[i];s.attr("tabIndex",t++)}for(var i=n+1;i<o.length;i++){r=o[i];r.proxy.attr("tabIndex",t++)}}else{var t=2;for(var i=0;i<o.length;i++){o[i].proxy.attr("tabIndex",t++)}}}function g(){for(var e=0;e<o.length;e++){o[e].proxy.attr("tabIndex",0);for(var t=0;t<o[e].children.length;t++){o[e].children[t].attr("tabIndex",0)}}}function y(){n=-1;r=-1}function b(e,t,n){var r={proxy:e,elementGroup:t,element:n,children:[]};return r}function w(){var t=e('<a class="menuAnchor" href="#"></a>');a.each(function(n){$me=e(this);$anchor=t.clone();$anchor.attr("tabIndex",n+1);$activeButton=$me.find(".active");$anchor.insertBefore($activeButton)})}var t={};var n=-1;var r=-1;var s;var o=[];var l;var c;var p={display:"none",overflow:"hidden"};var d={display:"block",overflow:"visible"};i();return t}var n=e(this);var r=n.find(".header_flyout");var i=r.find(".header_flyout_navigation");var s=i.children();var o=r.find(".close");var u=n.find(".header_navigation, .header_secondary_navigation");var a=u.children();var f=a.find(".flyout_content");var l=f.find(".header_flyout_nav_menu");var c=l.children("div, a");var h=c.filter(".location_finder_widget");var p=200;var d=400;var v=function(t){t=e.extend({duration:d,easing:"swing",complete:function(){},queue:false},t||{});var n=e.extend({},t);delete n.complete;return e(this).stop(true,true).slideUp(n).fadeOut(t)};a.each(function(){var t=e(this);var n=t.find(".menu-item");var r=t.find(".active");var i=r.filter(".current");var s=r.find(n);var o=n.not(s).last();if(i.length&&o.length)o.clone().addClass("current").insertBefore(r.removeClass("current"))});n.bind("click.header",function(e){e.stopPropagation()});o.add(document.body).bind("click.header",function(){a.find(".active").filter(":visible").trigger("click.header")});f.each(function(t){var n=e(this);var r=n.closest(".flyout_button");var o=r.attr("class").replace("flyout_button","").trim();o=o.length?o:t;n.closest(a).add(this).addClass("flyout_navigation_filter_"+o);n.appendTo(i);s=s.add(n)});var m=function(){c=l.children("div, a")};var g=function(){var t=e(this);var n=t.is(":hidden");if(n)t.show();var r=t.find(c).filter(":visible");var i=r.filter(h);r.css({height:"10em"});i.css({height:"50em"});t.find(".advertisement").each(function(){this.style.display="";this.className=this.className.replace(/(one|two|three)_column/g,"")+" three_column";this.className=this.className.replace(/\s+/g," ");if(!this.offsetLeft){this.className=this.className.replace("three_column","two_column");if(!this.offsetLeft){this.className=this.className.replace("two_column","one_column");if(!this.offsetLeft)this.style.display="none"}}});r.css({height:""});i.css({height:""});if(i.length)r=r.not(h);r.equalizeHeights();if(i.length){var s=r.first();var o=r.last();if(o.length&&s.length&&s[0].offsetLeft){o=o[0];i=h[0];var u=o.offsetTop+o.offsetHeight-i.offsetTop;var a=i.offsetHeight;i.style.height="";var f=i.offsetHeight;i.style.height=a+"px";i.offsetHeight;if(u>f)i.style.height=u+"px"}}if(n)t.hide()};var y=function(){m();f.filter(":visible").each(g)};f.bind("do_equalize_heights.header",function(e){e.stopPropagation();m();g.apply(this)});t.bind("custom_load_event custom_resize_event focus do_equalize_heights.header",debounce(y,500));a.bind("click.header",function(t){t.stopPropagation();var n=e(this);var r=n.find(".active");var o=n.attr("class").split(" ").loop(function(){return"."+this.trim()}).join(", ");var u=s.filter(o);u.appendTo(i);n.addClass("animating");var f=a.not(this).find(".active").filter(":visible");f.trigger("click.header");var l=a.not(this).filter(".animating");n.removeClass("animating");if(l.length){r.stop(true,true).slideUp(p);v.apply(u,[{duration:d}])}else if(f.length){r.stop(true,true).slideDown(p);g.apply(u);u.stop(true,true).slideDown(d,function(){e(this).css({overflow:"visible"})})}else if(u.is(":visible"))v.apply(u,[{duration:d,easing:"linear",complete:function(){r.slideUp(p)}}]);else{r.stop(true,true).slideDown({duration:p,easing:"linear",complete:function(){g.apply(u);u.stop(true,true).slideDown(d,function(){e(this).css({overflow:"visible"})})}})}});var E=new w};e.fn.placeholder=function(t){var n=function(){return e(document.createElement(arguments[0]||"input"))};return e(this).each(function(){var n=e(this);var r=n.val();t=t||"placeholder";if(n.attr("type")=="password"){var i={type:"text",value:r};e.each(n[0].attributes,function(e,t){if(t.specified&&t.name=="class"||t.name=="id"||t.name=="style")i[t.name]=t.value});var s=e(document.createElement(n[0].tagName)).attr(i).addClass(t).focus(function(){s.hide();n.show().focus()});n.blur(function(){if(!n.val().length)s.add(n).toggle()}).hide().before(s.show())}n.bind("focus focused",function(){if(n.val()==r)n.val("").removeClass(t);else n.removeClass(t)});n.bind("blur blurred",function(){if(!n.val().length)n.val(r).addClass(t)});return n.trigger("focused").trigger("blurred")})};e.fn.whenLoaded=function(e){if(typeof e!="function")e=function(){};return this.filter("img[src]").each(function(){var t=this;if(this.complete&&this.naturalWidth!==0)e.apply(this);else{var n=new Image;n.onload=n.onerror=function(){e.apply(t);n=null};n.src=this.src}})};e.fn.allImagesLoaded=function(t){if(typeof t!="function")t=function(){};return this.each(function(){var n=e(this),r=n.find("img[src]"),i=0;n.unbind("all_images_loaded").one("all_images_loaded",t);r.whenLoaded(function(){i++;if(i>=r.length)n.trigger("all_images_loaded")})})};e.fn.backToTop=function(){var n=document.getElementById("top")||document.body;var r=n&&n.tagName=="BODY";return this.each(function(){var i=this;var s=e(i);s.click(function(t){var i=0;if(!r)i=e(n).offset().top;e("html, body").animate({scrollTop:i},500);t.preventDefault()});t.bind("scroll",function(){var e=!!~i.className.indexOf("appear");var t=!e?window.contentPane.top>window.contentPane.verticalMiddle-window.contentPane.top:window.contentPane.top>0;if(!e&&t)s.addClass("appear");else if(e&&!t)s.removeClass("appear")})})};e.fn.customCheckbox=function(t){t=typeof t=="object"?t:{};t.toggleClass=t.toggleClass||"checked";switch("undefined"){case typeof t.unchecked:case typeof t.checked:return e()}var n=function(){return e(document.createElement(arguments[0]||"div"))};var r=e();e(this).each(function(){var i;var s;i=e(this).hide().bind("change",function(){s.trigger("custom_checkbox_check")});s=n("img").addClass("custom_checkbox").bind("custom_checkbox_check",function(){var n=i.is(":checked");e(this).attr("src",n?t.checked:t.unchecked).queue(function(){if(n)e(this).addClass(t.toggleClass).dequeue();else e(this).removeClass(t.toggleClass).dequeue()})}).trigger("custom_checkbox_check").click(function(e){e.preventDefault();e.stopPropagation();i.click()}).insertBefore(i);r=r.add(s)});return r};e.fn.equalizeHeights=function(e){console.warn("$.fn.equalizeHeights - you are using a deprecated version of this function.");return this;var t=this.filter(":visible");if(t.length<2)return this;t[0].style.height="";var n=t[0].clientHeight||t[0].offsetHeight||0;var r=t[0].offsetTop||0;var i=t[0].offsetParent||t[0].parentNode||null;var s=[];var o=typeof e=="function";return t.each(function(u){this.style.height="";var a=this.offsetHeight||this.clientHeight||0;var f=this.offsetTop||0;var l=this.offsetParent||this.parentNode||null;var c=u>=t.length-1;if(l!==i||f!=r||c){if(c){if(a>n)n=a;s.push(this)}for(var h=0;h<s.length;h++){s[h].style.height=n+"px";s[h].style.display="none";if(o)e.call(s[h],n)}n=a;r=this.offsetTop||0;i=l;s=[]}else if(a>n)n=a;s.push(this)}).css({display:""})};e.fn.equalizeHeights=function(e){var t="function"==typeof e;var n=this.toArray();var r,i,s,o,u,a,f;var l=0,c=0,h=[],p=[];for(var d=0;d<n.length;d++){r=n[d];r.style.height="";i=r.offsetHeight||r.clientHeight||0;o=r.offsetParent||r.parentNode||null;if(i&&o){r.equalize_heights_height=i;r.equalize_heights_parent=o;p.push(r)}else{r.equalize_heights_height=null;r.equalize_heights_parent=null}}for(var d=0,v=p.length;d<v;d++){r=p[d];a=d==0;i=r.equalize_heights_height;o=r.equalize_heights_parent;s=r.offsetTop||0;r.equalize_heights_height=null;r.equalize_heights_parent=null;if(a){u=o;c=s}if(s!=c||o!=u){for(var m=0;m<h.length;m++){h[m].style.height=l+"px";if(t)e.call(h[m],l)}h=[];l=i;u=o;c=r.offsetTop||0}if(i>=l)l=i;h.push(r)}for(var d=0;d<h.length;d++){h[d].style.height=l+"px";if(t)e.call(h[m],l)}t=d=v=n=p=r=s=o=u=a=f=l=c=h=null;return this};e.fn.useTallestHeight=function(e){if(this.length<2)return this;var t=0;var n=typeof e=="function";for(var r=0;r<this.length;r++){this[r].style.height="";t=Math.max(this[r].clientHeight||this[r].offsetHeight||0,t)}return this.each(function(){this.style.height=t+"px";if(n)e.call(this,t)})};e.fn.equalizeTallestHeight=function(e){if(this.length<2)return this;var t=0;var n=0;var r=[];if(Object(e)!==e)e={};var i=typeof e.callback=="function";var s=typeof e.swapElement=="function";var o=function(e){var t=e.offsetTop||0;while(e=e.offsetParent){t+=e.offsetTop}return t};for(var u=0;u<this.length;u++){var a=this[u];if(s){var f=e.swapElement.call(a);if(f)a=f}a.style.height="";var l=o(a);if(u>0&&l!=n){for(var c=0;c<r.length;c++){var h=r[c].offsetHeight||0;if(t>h)r[c].style.height=t+"px";if(i)e.callback.call(r[c],t)}t=0;r=[];l=o(a)}n=l;r.push(a);t=Math.max(this[u].offsetHeight||0,t)}for(var u=0;u<r.length;u++){var h=r[u].offsetHeight||0;if(t>h)r[u].style.height=t+"px";if(i)e.callback.call(r[u],t)}return this};e.fn.top=function(){if(!this.length)return 0;var e=this[0],t=e.offsetTop||0;while(e=e.offsetParent){t+=e.offsetTop}return t};e.fn.middle=function(){if(!this.length)return 0;var e=this[0],t=e.offsetTop||0,n=e.offsetHeight||0;while(e=e.offsetParent){t+=e.offsetTop}return t+n/2};e.fn.bottom=function(){if(!this.length)return 0;var e=this[0],t=e.offsetTop||0,n=e.offsetHeight||0;while(e=e.offsetParent){t+=e.offsetTop}return t+n};e.fn.distance=function(){if(!this.length)return{top:0,middle:0,bottom:0};var e=this[0],t=e.offsetTop||0,n=e.offsetHeight||0;while(e=e.offsetParent){t+=e.offsetTop}return{top:t,middle:t+n/2,bottom:t+n}};var r=!!document.documentElement.classList&&"function"==typeof document.documentElement.classList.contains;e.fn.fastClass=r?function(e){return this.length?this[0].classList.contains(e):false}:function(e){return this.length?!!~this[0].className.split(" ").indexOf(e):false};e.fn.wrapArrow=function(){return this.not(function(){return~this.className.indexOf("button--arrow-lastword")||e(this).find("span.last-word").length}).each(function(){var t=e(this),n,r,i=function(e){if(e.nodeType==3&&e.nodeValue&&(r=""+e.nodeValue.trim()))n=e;else for(var t=0;t<e.childNodes.length;t++)i(e.childNodes[t])};i(this);if(n){r=n.nodeValue.split(" ");n.nodeValue="%span%"+r.pop()+"%/span%";if(n.parentElement)n=n.parentElement;else while(n=n.parentNode){if(n.nodeType==1)break}n.innerHTML=n.innerHTML.replace("%span%",(r.length?r.join(" ")+" ":"")+'<span class="last-word">').replace("%/span%","</span>");t.addClass("button--arrow-lastword")}})}})(jQuery);(function(e){"use strict";if(!Date.now)Date.now=function(){return+(new Date)};var t=!!document.documentElement.classList&&"function"==document.documentElement.classList.toggle;var n=function(e){if(!e)return false;return t?this.classList.contains(e):!!~this.className.indexOf(e)};var r=function(e,t){if(!e||"function"!=typeof t)return;if(this.addEventListener)this.addEventListener(e,t,false);else if(this.attachEvent)this.attachEvent("on"+e,t)};e.fn.fitVids=function(t){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var s=document.createElement("div"),o=document.getElementsByTagName("script")[0],u="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";s.className="fit-vids-style";s.id="fit-vids-style";s.style.display="none";s.innerHTML=u;o.parentNode.insertBefore(s,o)}if(Object(t)===t)e.extend(i,t);return this.each(function(){var t=["iframe[src*='youtube']","iframe[src*='player.vimeo.com']","iframe[data-src*='youtube']","embed"];if(i.customSelector)t.push(i.customSelector);var s=e(this).find(t.join(","));s=s.not("object object");s.each(function(){var t=e(this);var i=this.parentNode;var s=null;if(!(this.tagName.toLowerCase()=="embed"&&!!i.tagName&&i.tagName.toLowerCase()=="object"||!!i.className&&!!~i.className.indexOf("fluid-width-video-wrapper"))){var o=this,u=!o.offsetWidth&&!o.offsetHeight;if(u)while(!!o.parentElement&&!!(o=o.parentElement)){o.custom_display=o.style.display||"";o.custom_height=o.style.height||"";o.style.display="block";o.style.height="100%"}var a=this.offsetHeight||this.outerHeight||this.clientHeight||0;var f=this.offsetWidth||this.outerWidth||this.clientWidth||0;if(u){if(!!o.parentNode)o=o.parentNode;while(!!(o=o.childNodes)){for(var l=0;l<o.length;l++){if("custom_display"in o[l]||"custom_height"in o[l]){o=o[l];o.style.display=o.custom_display||"";o.style.height=o.custom_height||"";delete o.custom_display;delete o.custom_height;break}}}}var c=a/f*100;if(!this.id)this.id="fitvid"+Date.now();s=document.createElement("div");s.className="fluid-width-video-wrapper";s.style.paddingTop=c+"%";i.insertBefore(s,this);s.appendChild(this);this.height=this.width=""}if(!!this.src&&!!~this.src.indexOf("youtube")&&!~this.src.indexOf("wmode="))this.src+=(!!~this.src.indexOf("?")?"&":"?")+"wmode=transparent";if(this.hasAttribute("data-src")){var h=this.getAttribute("data-src");if(!!~h.indexOf("youtube")&&!~h.indexOf("wmode="))this.setAttribute("data-src",h+(!!~h.indexOf("?")?"&":"?")+"wmode=transparent")}if(!s)s=i;if((n.call(i,"text-accordion__content")||(i=i.parentNode)&&n.call(i,"text-accordion__content"))&&!n.call(i,"no-close-button")&&!i.querySelector(".close")&&!i.querySelector(".auto-generated-close-button")){var p=document.createElement("div"),d=this;p.className="auto-generated-close-button";r.call(p,"click",function(){e(i).slideUp("slow",function(){if(d.src)d.src=d.src})});s.appendChild(p)}})})}})(window.jQuery||window.Zepto);var AODA_cups=function(){};$(function(){AODA_showMore()})