window.PlayerControls=window.PlayerControls||{},window.PlayerControls.play=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(1)),r=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}t.default={name:"play",method:function(){a.default.method.call(this),r.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"play",method:function(){var e=this;function t(){if(e.config.allowPlayAfterEnded||!e.ended)if(e.paused){var t=e.play();void 0!==t&&t&&t.catch((function(e){}))}else e.pause()}e.on("playBtnClick",t),e.once("destroy",(function n(){e.off("playBtnClick",t),e.off("destroy",n)}))}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=i(n(5)),l=i(n(6));function i(e){return e&&e.__esModule?e:{default:e}}n(7);t.default={name:"s_play",method:function(){var e=this,t=e.config.playBtn?e.config.playBtn:{},n=void 0;n="img"===t.type?(0,a.createImgBtn)("play",t.url.play,t.width,t.height):(0,a.createDom)("xg-play",'<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play">'+r.default+'</div>\n                                      <div class="xgplayer-icon-pause">'+l.default+"</div>\n                                     </xg-icon>",{},"xgplayer-play");var i={};i.play=e.lang.PLAY_TIPS,i.pause=e.lang.PAUSE_TIPS;var o=(0,a.createDom)("xg-tips",'<span class="xgplayer-tip-play">'+i.play+'</span>\n                                        <span class="xgplayer-tip-pause">'+i.pause+"</span>",{},"xgplayer-tips");n.appendChild(o),e.once("ready",(function(){e.controls&&e.controls.appendChild(n)})),["click","touchend"].forEach((function(t){n.addEventListener(t,(function(t){t.preventDefault(),t.stopPropagation(),e.userGestureTrigEvent("playBtnClick")}))}))}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=i,t.hasClass=o,t.addClass=p,t.removeClass=s,t.toggleClass=u,t.findDom=c,t.padStart=y,t.format=g,t.event=f,t.typeOf=d,t.deepCopy=x,t.getBgImage=v,t.copyDom=h,t._setInterval=m,t._clearInterval=b,t.createImgBtn=k,t.isWeiXin=w,t.isUc=_,t.computeWatchDur=C,t.offInDestroy=O,t.on=L,t.once=M,t.getBuffered2=j,t.checkIsBrowser=E;var a,r=n(4),l=(a=r)&&a.__esModule?a:{default:a};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=document.createElement(e);return r.className=a,r.innerHTML=t,Object.keys(n).forEach((function(t){var a=t,l=n[t];"video"===e||"audio"===e?l&&r.setAttribute(a,l):r.setAttribute(a,l)})),r}function o(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function p(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):o(e,t)||(e.className+=" "+t))}function s(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):o(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function u(e,t){e&&t.split(/\s+/g).forEach((function(t){o(e,t)?s(e,t):p(e,t)}))}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(a){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function y(e,t,n){for(var a=String(n),r=t>>0,l=Math.ceil(r/a.length),i=[],o=String(e);l--;)i.push(a);return i.join("").substring(0,r-o.length)+o}function g(e){if(window.isNaN(e))return"";var t=y(Math.floor(e/3600),2,0),n=y(Math.floor((e-3600*t)/60),2,0),a=y(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,a]:[t,n,a]).join(":")}function f(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function d(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function x(e,t){if("Object"===d(t)&&"Object"===d(e))return Object.keys(t).forEach((function(n){"Object"!==d(t[n])||t[n]instanceof Node?"Array"===d(t[n])?e[n]="Array"===d(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?x(e[n],t[n]):e[n]=t[n]})),e}function v(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function h(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function m(e,t,n,a){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),a))}function b(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function k(e,t,n,a){var r=i("xg-"+e,"",{},"xgplayer-"+e+"-img");if(r.style.backgroundImage='url("'+t+'")',n&&a){var l=void 0,o=void 0,p=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&a.indexOf(e)>-1)||(l=Number(n.slice(0,n.indexOf(e)).trim()),o=Number(a.slice(0,a.indexOf(e)).trim()),p=e,!1)})),r.style.width=""+l+p,r.style.height=""+o+p,r.style.backgroundSize=""+l+p+" "+o+p,r.style.margin="start"===e?"-"+o/2+p+" auto auto -"+l/2+p:"auto 5px auto 5px"}return r}function w(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function _(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function C(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var a=0;a<t.length;a++){var r=e[n].begin,l=e[n].end;if(l<t[a].begin){t.splice(a,0,{begin:r,end:l});break}if(!(r>t[a].end)){var i=t[a].begin,o=t[a].end;t[a].begin=Math.min(r,i),t[a].end=Math.max(l,o);break}if(a>t.length-2){t.push({begin:r,end:l});break}}for(var p=0,s=0;s<t.length;s++)p+=t[s].end-t[s].begin;return p}function O(e,t,n,a){e.once(a,(function r(){e.off(t,n),e.off(a,r)}))}function L(e,t,n,a){if(a)e.on(t,n),O(e,t,n,a);else{e.on(t,(function a(r){n(r),e.off(t,a)}))}}function M(e,t,n,a){if(a)e.once(t,n),O(e,t,n,a);else{e.once(t,(function a(r){n(r),e.off(t,a)}))}}function j(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],a=0;a<e.length;a++)n.push({start:e.start(a)<.5?0:e.start(a),end:e.end(a)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var r=[];if(t)for(var i=0;i<n.length;i++){var o=r.length;if(o){var p=r[o-1].end;n[i].start-p<t?n[i].end>p&&(r[o-1].end=n[i].end):r.push(n[i])}else r.push(n[i])}else r=n;return new l.default(r)}function E(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}t.util={createDom:i,hasClass:o,addClass:p,removeClass:s,toggleClass:u,findDom:c,padStart:y,format:g,event:f,typeOf:d,deepCopy:x,getBgImage:v,copyDom:h,setInterval:m,clearInterval:b,createImgBtn:k,isWeiXin:w,isUc:_,computeWatchDur:C,offInDestroy:O,on:L,once:M,getBuffered2:j,checkIsBrowser:E}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return a(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n'},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n'},function(e,t,n){var a=n(8),r=n(10),l="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return l},t._getCss=function(){return""+a},t._insertCss=function(e){return r(l,e)}},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:40px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),l=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[n].concat(l).concat([r]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(a[l]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var a={};function r(e){e.forEach((function(e){if(--a[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var n,l=void 0===t?{}:t,i=l.replace,o=void 0!==i&&i,p=l.prepend,s=void 0!==p&&p,u=l.prefix,c=void 0===u?"s":u,y=[],g=0;g<e.length;g++){var f=e[g],d=f[0],x=f[1],v=f[2],h=f[3],m=""+c+d+"-"+g;if(y.push(m),!a[m]||o){a[m]=1;var b=document.getElementById(m),k=!1;b||(k=!0,(b=document.createElement("style")).setAttribute("type","text/css"),b.id=m,v&&b.setAttribute("media",v));var w=x;h&&"function"==typeof btoa&&(w+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(h),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))+"*/"),w+="\n/*# sourceURL="+h.file+"?"+m+"*/"),"textContent"in b?b.textContent=w:b.styleSheet.cssText=w,k&&(s?document.head.insertBefore(b,document.head.childNodes[0]):document.head.appendChild(b))}else a[m]++}return r.bind(null,y)}}]);