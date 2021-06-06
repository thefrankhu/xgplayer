window.PlayerControls=window.PlayerControls||{},window.PlayerControls.progress=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};t.default={name:"progress",method:function(){i.default.method.call(this)}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2),i=r(4),a=(n=i)&&n.__esModule?n:{default:n};r(5);var s=function(e){return(0,o.hasClass)(e.root,"xgplayer-rotate-fullscreen")};t.default={name:"s_progress",method:function(){var e=this,t=(0,o.createDom)("xg-progress",'<xg-outer class="xgplayer-progress-outer">\n                                                   <xg-cache class="xgplayer-progress-cache"></xg-cache>\n                                                   <xg-played class="xgplayer-progress-played">\n                                                     <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n                                                     <xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point>\n                                                     <xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail>\n                                                   </xg-played>\n                                                 </xg-outer>',{tabindex:1},"xgplayer-progress"),r=void 0;e.controls.appendChild(t);var n=t.querySelector(".xgplayer-progress-played"),i=t.querySelector(".xgplayer-progress-outer"),l=t.querySelector(".xgplayer-progress-cache"),p=t.querySelector(".xgplayer-progress-point"),u=t.querySelector(".xgplayer-progress-thumbnail");function d(r,n){r.addEventListener("mouseenter",(function(e){n&&((0,o.addClass)(r,"xgplayer-progress-dot-show"),(0,o.addClass)(t,"xgplayer-progress-dot-active"))})),r.addEventListener("mouseleave",(function(e){n&&((0,o.removeClass)(r,"xgplayer-progress-dot-show"),(0,o.removeClass)(t,"xgplayer-progress-dot-active"))})),r.addEventListener("touchend",(function(i){i.stopPropagation(),n&&((0,o.hasClass)(r,"xgplayer-progress-dot-show")||Object.keys(e.dotArr).forEach((function(t){e.dotArr[t]&&(0,o.removeClass)(e.dotArr[t],"xgplayer-progress-dot-show")})),(0,o.toggleClass)(r,"xgplayer-progress-dot-show"),(0,o.toggleClass)(t,"xgplayer-progress-dot-active"))}))}function c(){e.config.progressDot&&"Array"===(0,o.typeOf)(e.config.progressDot)&&e.config.progressDot.forEach((function(t){if(t.time>=0&&t.time<=e.duration){var r=(0,o.createDom)("xg-progress-dot",t.text?'<span class="xgplayer-progress-tip">'+t.text+"</span>":"",{},"xgplayer-progress-dot");if(r.style.left=t.time/e.duration*100+"%",t.duration>=0&&(r.style.width=Math.min(t.duration,e.duration-t.time)/e.duration*100+"%"),t.style)for(var n in t.style)r.style[n]=t.style[n];i.appendChild(r),e.dotArr[t.time]=r,d(r,t.text)}}))}e.dotArr={},e.once("canplay",c),e.addProgressDot=function(t,r,n,a){if(!e.dotArr[t]&&t>=0&&t<=e.duration){var s=(0,o.createDom)("xg-progress-dot",r?'<span class="xgplayer-progress-tip">'+r+"</span>":"",{},"xgplayer-progress-dot");if(s.style.left=t/e.duration*100+"%",n>=0&&(s.style.width=Math.min(n,e.duration-t)/e.duration*100+"%"),a)for(var l in a)s.style[l]=a[l];i.appendChild(s),e.dotArr[t]=s,d(s,r)}},e.removeProgressDot=function(t){if(t>=0&&t<=e.duration&&e.dotArr[t]){var r=e.dotArr[t];r.parentNode.removeChild(r),r=null,e.dotArr[t]=null}},e.removeAllProgressDot=function(){Object.keys(e.dotArr).forEach((function(t){if(e.dotArr[t]){var r=e.dotArr[t];r.parentNode.removeChild(r),r=null,e.dotArr[t]=null}}))};var g=0,f=0,y=0,v=0,x=0,h=0,m=[],b=void 0,w=void 0,k=function(){e.config.thumbnail&&(e.config.thumbnail.isShowCoverPreview&&!b&&(n.removeChild(u),b=(0,o.createDom)("xg-coverpreview",'<xg-outer class="xgplayer-coverpreview-outer">\n            <xg-thumbnail class="xgplayer-coverpreview-thumbnail"></xg-thumbnail>\n            <xg-point class="xgplayer-coverpreview-point"></xg-point>\n          </xg-outer>',{tabindex:1},"xgplayer-coverpreview"),b.querySelector(".xgplayer-coverpreview-outer"),w=b.querySelector(".xgplayer-coverpreview-point"),u=b.querySelector(".xgplayer-coverpreview-thumbnail"),e.root.appendChild(b)),g=e.config.thumbnail.pic_num,f=e.config.thumbnail.width,y=e.config.thumbnail.height,v=e.config.thumbnail.col,x=e.config.thumbnail.row,m=e.config.thumbnail.urls,u.style.width=f+"px",u.style.height=y+"px")};e.on("loadedmetadata",k),"function"==typeof e.config.disableSwipeHandler&&"function"==typeof e.config.enableSwipeHandler&&(e.root.addEventListener("touchmove",(function(t){t.preventDefault(),e.disableSwipe||(e.disableSwipe=!0,e.config.disableSwipeHandler.call(e))})),e.root.addEventListener("touchstart",(function(t){e.disableSwipe=!0,e.config.disableSwipeHandler.call(e)})),e.root.addEventListener("touchend",(function(t){e.disableSwipe=!1,e.config.enableSwipeHandler.call(e)}))),["touchstart","mousedown"].forEach((function(i){t.addEventListener(i,(function(i){if(!e.config.disableProgress){if(i.stopPropagation(),(0,o.event)(i),i._target===p||!e.config.allowSeekAfterEnded&&e.ended)return!0;t.focus();var l=n.getBoundingClientRect().left,d=s(e);d?(l=n.getBoundingClientRect().top,r=t.getBoundingClientRect().height):(r=t.getBoundingClientRect().width,l=n.getBoundingClientRect().left);var c=function(t){t.stopPropagation(),(0,o.event)(t),e.isProgressMoving=!0;var i=(d?t.clientY:t.clientX)-l;i>r&&(i=r);var a=i/r*e.duration;if(a<0&&(a=0),e.config.allowSeekPlayed&&Number(a).toFixed(1)>e.maxPlayedTime);else if(n.style.width=100*i/r+"%","video"!==e.videoConfig.mediaType||e.dash||e.config.closeMoveSeek){var s=(0,o.findDom)(e.controls,".xgplayer-time");s&&(s.innerHTML='<span class="xgplayer-time-current">'+(0,o.format)(a||0)+"</span><span>"+(0,o.format)(e.duration)+"</span>")}else e.currentTime=Number(a).toFixed(1);if(e.config.thumbnail&&e.config.thumbnail.isShowCoverPreview){w.innerHTML="<span>"+(0,o.format)(a)+"</span> / "+(0,o.format)(e.duration||0),h=e.duration/g;var p=Math.floor(a/h);u.style.backgroundImage="url("+m[Math.ceil((p+1)/(v*x))-1]+")";var c=p+1-v*x*(Math.ceil((p+1)/(v*x))-1),k=Math.ceil(c/x)-1,C=c-k*x-1;u.style["background-position"]="-"+C*f+"px -"+k*y+"px",b.style.display="block"}e.emit("focus")},k=function i(s){if(s.stopPropagation(),(0,o.event)(s),window.removeEventListener("mousemove",c),window.removeEventListener("touchmove",c,{passive:!1}),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",i),a.default.browser.indexOf("ie")<0&&t.blur(),!e.isProgressMoving||e.videoConfig&&"audio"===e.videoConfig.mediaType||e.dash||e.config.closeMoveSeek){var p=(d?s.clientY:s.clientX)-l;p>r&&(p=r);var u=p/r*e.duration;u<0&&(u=0),e.config.allowSeekPlayed&&Number(u).toFixed(1)>e.maxPlayedTime||(n.style.width=100*p/r+"%",e.currentTime=Number(u).toFixed(1))}e.config.thumbnail&&e.config.thumbnail.isShowCoverPreview&&(b.style.display="none"),e.emit("focus"),e.isProgressMoving=!1};return window.addEventListener("mousemove",c),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("mouseup",k),window.addEventListener("touchend",k),!0}}))})),t.addEventListener("mouseenter",(function(r){if(!e.config.allowSeekAfterEnded&&e.ended)return!0;var n=s(e),i=n?t.getBoundingClientRect().top:t.getBoundingClientRect().left,a=n?t.getBoundingClientRect().height:t.getBoundingClientRect().width,l=function(r){var s=((n?r.clientY:r.clientX)-i)/a*e.duration;s=s<0?0:s,p.textContent=(0,o.format)(s);var l=p.getBoundingClientRect().width;if(e.config.thumbnail&&!e.config.thumbnail.isShowCoverPreview){h=e.duration/g;var d=Math.floor(s/h);u.style.backgroundImage="url("+m[Math.ceil((d+1)/(v*x))-1]+")";var c=d+1-v*x*(Math.ceil((d+1)/(v*x))-1),b=Math.ceil(c/x)-1,w=c-b*x-1;u.style["background-position"]="-"+w*f+"px -"+b*y+"px";var k=(n?r.clientY:r.clientX)-i-f/2;k=(k=k>0?k:0)<a-f?k:a-f,u.style.left=k+"px",u.style.top=-10-y+"px",u.style.display="block",p.style.left=k+f/2-l/2+"px"}else{var C=r.clientX-i-l/2;C=(C=C>0?C:0)>a-l?a-l:C,p.style.left=C+"px"}(0,o.hasClass)(t,"xgplayer-progress-dot-active")?p.style.display="none":p.style.display="block"},d=function(e){l(e)};t.addEventListener("mousemove",d,!1),t.addEventListener("mouseleave",(function r(n){t.removeEventListener("mousemove",d,!1),t.removeEventListener("mouseleave",r,!1),l(n),p.style.display="none",e.config.thumbnail&&!e.config.thumbnail.isShowCoverPreview&&(u.style.display="none")}),!1),l(r)}),!1);var C=function(){if(void 0===e.maxPlayedTime&&(e.maxPlayedTime=0),e.maxPlayedTime<e.currentTime&&(e.maxPlayedTime=e.currentTime),!r&&t&&(r=t.getBoundingClientRect().width),"audio"!==e.videoConfig.mediaType||!e.isProgressMoving||!e.dash){var o=e.currentTime/e.duration,i=Number(n.style.width.replace("%","")||"0")/Number(t.style.width||"100");Math.abs(o-i)<=1&&(n.style.width=100*e.currentTime/e.duration+"%")}};e.on("timeupdate",C);var P=function(){n.style.width=100*e.currentTime/e.duration+"%"};e.on("currentTimeChange",P);var S=function(){n.style.width="0%"};e.on("srcChange",S);var E=function(){var t=e.buffered;if(t&&t.length>0){for(var r=t.end(t.length-1),n=0,o=t.length;n<o;n++)if(e.currentTime>=t.start(n)&&e.currentTime<=t.end(n)){r=t.end(n);for(var i=n+1;i<t.length;i++)if(t.start(i)-t.end(i-1)>=2){r=t.end(i-1);break}break}l.style.width=r/e.duration*100+"%"}},L=["bufferedChange","cacheupdate","ended","timeupdate"];L.forEach((function(t){e.on(t,E)})),e.once("destroy",(function t(){e.removeAllProgressDot(),e.off("canplay",c),e.off("timeupdate",C),e.off("currentTimeChange",P),e.off("srcChange",S),e.off("loadedmetadata",k),L.forEach((function(t){e.off(t,E)})),e.off("destroy",t)}))}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=a,t.hasClass=s,t.addClass=l,t.removeClass=p,t.toggleClass=u,t.findDom=d,t.padStart=c,t.format=g,t.event=f,t.typeOf=y,t.deepCopy=v,t.getBgImage=x,t.copyDom=h,t._setInterval=m,t._clearInterval=b,t.createImgBtn=w,t.isWeiXin=k,t.isUc=C,t.computeWatchDur=P,t.offInDestroy=S,t.on=E,t.once=L,t.getBuffered2=M,t.checkIsBrowser=O;var n,o=r(3),i=(n=o)&&n.__esModule?n:{default:n};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=n,o.innerHTML=t,Object.keys(r).forEach((function(t){var n=t,i=r[t];"video"===e||"audio"===e?i&&o.setAttribute(n,i):o.setAttribute(n,i)})),o}function s(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function l(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):s(e,t)||(e.className+=" "+t))}function p(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):s(e,t)&&t.split(/\s+/g).forEach((function(t){var r=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(r," ")})))}function u(e,t){e&&t.split(/\s+/g).forEach((function(t){s(e,t)?p(e,t):l(e,t)}))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],r=void 0;try{r=e.querySelector(t)}catch(n){0===t.indexOf("#")&&(r=e.getElementById(t.slice(1)))}return r}function c(e,t,r){for(var n=String(r),o=t>>0,i=Math.ceil(o/n.length),a=[],s=String(e);i--;)a.push(n);return a.join("").substring(0,o-s.length)+s}function g(e){if(window.isNaN(e))return"";var t=c(Math.floor(e/3600),2,0),r=c(Math.floor((e-3600*t)/60),2,0),n=c(Math.floor(e-3600*t-60*r),2,0);return("00"===t?[r,n]:[t,r,n]).join(":")}function f(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function y(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function v(e,t){if("Object"===y(t)&&"Object"===y(e))return Object.keys(t).forEach((function(r){"Object"!==y(t[r])||t[r]instanceof Node?"Array"===y(t[r])?e[r]="Array"===y(e[r])?e[r].concat(t[r]):t[r]:e[r]=t[r]:e[r]?v(e[r],t[r]):e[r]=t[r]})),e}function x(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var r=document.createElement("a");return r.href=t.replace(/url\("|"\)/g,""),r.href}function h(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function m(e,t,r,n){e._interval[t]||(e._interval[t]=setInterval(r.bind(e),n))}function b(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function w(e,t,r,n){var o=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(o.style.backgroundImage='url("'+t+'")',r&&n){var i=void 0,s=void 0,l=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(r.indexOf(e)>-1&&n.indexOf(e)>-1)||(i=Number(r.slice(0,r.indexOf(e)).trim()),s=Number(n.slice(0,n.indexOf(e)).trim()),l=e,!1)})),o.style.width=""+i+l,o.style.height=""+s+l,o.style.backgroundSize=""+i+l+" "+s+l,o.style.margin="start"===e?"-"+s/2+l+" auto auto -"+i/2+l:"auto 5px auto 5px"}return o}function k(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function C(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function P(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],r=0;r<e.length;r++)if(!(!e[r].end||e[r].begin<0||e[r].end<0||e[r].end<e[r].begin))if(t.length<1)t.push({begin:e[r].begin,end:e[r].end});else for(var n=0;n<t.length;n++){var o=e[r].begin,i=e[r].end;if(i<t[n].begin){t.splice(n,0,{begin:o,end:i});break}if(!(o>t[n].end)){var a=t[n].begin,s=t[n].end;t[n].begin=Math.min(o,a),t[n].end=Math.max(i,s);break}if(n>t.length-2){t.push({begin:o,end:i});break}}for(var l=0,p=0;p<t.length;p++)l+=t[p].end-t[p].begin;return l}function S(e,t,r,n){e.once(n,(function o(){e.off(t,r),e.off(n,o)}))}function E(e,t,r,n){if(n)e.on(t,r),S(e,t,r,n);else{e.on(t,(function n(o){r(o),e.off(t,n)}))}}function L(e,t,r,n){if(n)e.once(t,r),S(e,t,r,n);else{e.once(t,(function n(o){r(o),e.off(t,n)}))}}function M(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,r=[],n=0;n<e.length;n++)r.push({start:e.start(n)<.5?0:e.start(n),end:e.end(n)});r.sort((function(e,t){var r=e.start-t.start;return r||t.end-e.end}));var o=[];if(t)for(var a=0;a<r.length;a++){var s=o.length;if(s){var l=o[s-1].end;r[a].start-l<t?r[a].end>l&&(o[s-1].end=r[a].end):o.push(r[a])}else o.push(r[a])}else o=r;return new i.default(o)}function O(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}t.util={createDom:a,hasClass:s,addClass:l,removeClass:p,toggleClass:u,findDom:d,padStart:c,format:g,event:f,typeOf:y,deepCopy:v,getBgImage:x,copyDom:h,setInterval:m,clearInterval:b,createImgBtn:w,isWeiXin:k,isUc:C,computeWatchDur:P,offInDestroy:S,on:E,once:L,getBuffered2:M,checkIsBrowser:O}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return n(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};Object.defineProperty(n,"device",{get:function(){return n.os.isPc?"pc":"mobile"}}),Object.defineProperty(n,"browser",{get:function(){var e=navigator.userAgent.toLowerCase(),t={ie:/rv:([\d.]+)\) like gecko/,firfox:/firefox\/([\d.]+)/,chrome:/chrome\/([\d.]+)/,opera:/opera.([\d.]+)/,safari:/version\/([\d.]+).*safari/};return[].concat(Object.keys(t).filter((function(r){return t[r].test(e)})))[0]||""}}),Object.defineProperty(n,"os",{get:function(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),r=/(?:SymbianOS)/.test(e)||t,n=/(?:Android)/.test(e),o=/(?:Firefox)/.test(e),i=/(?:iPad|PlayBook)/.test(e)||n&&!/(?:Mobile)/.test(e)||o&&/(?:Tablet)/.test(e),a=/(?:iPhone)/.test(e)&&!i;return{isTablet:i,isPhone:a,isAndroid:n,isPc:!(a||n||r||i),isSymbian:r,isWindowsPhone:t,isFireFox:o}}}),t.default=n,e.exports=t.default},function(e,t,r){var n=r(6),o=r(8),i="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:12px;right:12px;outline:none;top:-15px;z-index:35}.xgplayer-skin-default .xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-skin-default .xgplayer-progress-cache,.xgplayer-skin-default .xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-skin-default .xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-skin-default .xgplayer-progress-btn{display:none;position:absolute;left:0;top:-5px;width:13px;height:13px;border-radius:30px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26);left:100%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:36}.xgplayer-skin-default .xgplayer-progress-point{position:absolute}.xgplayer-skin-default .xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-skin-default .xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-skin-default .xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;bottom:200%;right:50%;-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);height:auto;line-height:30px;width:auto;background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-skin-default .xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-skin-default .xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-skin-default .xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-skin-default .xgplayer-coverpreview{position:absolute;width:100%;height:100%;top:0;left:0;display:none}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer{position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-thumbnail{display:block}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point{display:block;text-align:center;font-family:PingFangSC-Regular;font-size:11px;color:#ccc;padding:2px 4px}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point span{color:#fff}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-btn{display:block;top:-3px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress-btn{display:block!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px!important;margin-top:8.5px!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-btn{display:block!important;top:-5px!important}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var n={};function o(e){e.forEach((function(e){if(--n[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var r,i=void 0===t?{}:t,a=i.replace,s=void 0!==a&&a,l=i.prepend,p=void 0!==l&&l,u=i.prefix,d=void 0===u?"s":u,c=[],g=0;g<e.length;g++){var f=e[g],y=f[0],v=f[1],x=f[2],h=f[3],m=""+d+y+"-"+g;if(c.push(m),!n[m]||s){n[m]=1;var b=document.getElementById(m),w=!1;b||(w=!0,(b=document.createElement("style")).setAttribute("type","text/css"),b.id=m,x&&b.setAttribute("media",x));var k=v;h&&"function"==typeof btoa&&(k+="\n/*# sourceMappingURL=data:application/json;base64,"+(r=JSON.stringify(h),btoa(encodeURIComponent(r).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))+"*/"),k+="\n/*# sourceURL="+h.file+"?"+m+"*/"),"textContent"in b?b.textContent=k:b.styleSheet.cssText=k,w&&(p?document.head.insertBefore(b,document.head.childNodes[0]):document.head.appendChild(b))}else n[m]++}return o.bind(null,c)}}]);