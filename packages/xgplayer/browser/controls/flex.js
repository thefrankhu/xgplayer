window.PlayerControls=window.PlayerControls||{},window.PlayerControls.flex=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};t.default={name:"flex",method:function(){i.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);n(4);t.default={name:"s_flex",method:function(){var e=(0,r.createDom)("xg-placeholder","",{},"xgplayer-placeholder");this.controls.appendChild(e)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=a,t.hasClass=u,t.addClass=c,t.removeClass=s,t.toggleClass=f,t.findDom=l,t.padStart=d,t.format=p,t.event=g,t.typeOf=v,t.deepCopy=h,t.getBgImage=m,t.copyDom=b,t._setInterval=y,t._clearInterval=x,t.createImgBtn=w,t.isWeiXin=C,t.isUc=O,t.computeWatchDur=_,t.offInDestroy=j,t.on=M,t.once=I,t.getBuffered2=L,t.checkIsBrowser=E;var r,o=n(3),i=(r=o)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach((function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)})),o}function u(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function c(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):u(e,t)||(e.className+=" "+t))}function s(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):u(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function f(e,t){e&&t.split(/\s+/g).forEach((function(t){u(e,t)?s(e,t):c(e,t)}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function d(e,t,n){for(var r=String(n),o=t>>0,i=Math.ceil(o/r.length),a=[],u=String(e);i--;)a.push(r);return a.join("").substring(0,o-u.length)+u}function p(e){if(window.isNaN(e))return"";var t=d(Math.floor(e/3600),2,0),n=d(Math.floor((e-3600*t)/60),2,0),r=d(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function g(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function v(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function h(e,t){if("Object"===v(t)&&"Object"===v(e))return Object.keys(t).forEach((function(n){"Object"!==v(t[n])||t[n]instanceof Node?"Array"===v(t[n])?e[n]="Array"===v(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?h(e[n],t[n]):e[n]=t[n]})),e}function m(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function b(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function y(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function x(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function w(e,t,n,r){var o=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(o.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,u=void 0,c=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),u=Number(r.slice(0,r.indexOf(e)).trim()),c=e,!1)})),o.style.width=""+i+c,o.style.height=""+u+c,o.style.backgroundSize=""+i+c+" "+u+c,o.style.margin="start"===e?"-"+u/2+c+" auto auto -"+i/2+c:"auto 5px auto 5px"}return o}function C(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function O(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function _(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:o,end:i});break}if(!(o>t[r].end)){var a=t[r].begin,u=t[r].end;t[r].begin=Math.min(o,a),t[r].end=Math.max(i,u);break}if(r>t.length-2){t.push({begin:o,end:i});break}}for(var c=0,s=0;s<t.length;s++)c+=t[s].end-t[s].begin;return c}function j(e,t,n,r){e.once(r,(function o(){e.off(t,n),e.off(r,o)}))}function M(e,t,n,r){if(r)e.on(t,n),j(e,t,n,r);else{e.on(t,(function r(o){n(o),e.off(t,r)}))}}function I(e,t,n,r){if(r)e.once(t,n),j(e,t,n,r);else{e.once(t,(function r(o){n(o),e.off(t,r)}))}}function L(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],r=0;r<e.length;r++)n.push({start:e.start(r)<.5?0:e.start(r),end:e.end(r)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var o=[];if(t)for(var a=0;a<n.length;a++){var u=o.length;if(u){var c=o[u-1].end;n[a].start-c<t?n[a].end>c&&(o[u-1].end=n[a].end):o.push(n[a])}else o.push(n[a])}else o=n;return new i.default(o)}function E(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}t.util={createDom:a,hasClass:u,addClass:c,removeClass:s,toggleClass:f,findDom:l,padStart:d,format:p,event:g,typeOf:v,deepCopy:h,getBgImage:m,copyDom:b,setInterval:y,clearInterval:x,createImgBtn:w,isWeiXin:C,isUc:O,computeWatchDur:_,offInDestroy:j,on:M,once:I,getBuffered2:L,checkIsBrowser:E}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){var r=n(5),o=n(7),i="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var r={};function o(e){e.forEach((function(e){if(--r[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var n,i=void 0===t?{}:t,a=i.replace,u=void 0!==a&&a,c=i.prepend,s=void 0!==c&&c,f=i.prefix,l=void 0===f?"s":f,d=[],p=0;p<e.length;p++){var g=e[p],v=g[0],h=g[1],m=g[2],b=g[3],y=""+l+v+"-"+p;if(d.push(y),!r[y]||u){r[y]=1;var x=document.getElementById(y),w=!1;x||(w=!0,(x=document.createElement("style")).setAttribute("type","text/css"),x.id=y,m&&x.setAttribute("media",m));var C=h;b&&"function"==typeof btoa&&(C+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(b),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))+"*/"),C+="\n/*# sourceURL="+b.file+"?"+y+"*/"),"textContent"in x?x.textContent=C:x.styleSheet.cssText=C,w&&(s?document.head.insertBefore(x,document.head.childNodes[0]):document.head.appendChild(x))}else r[y]++}return o.bind(null,d)}}]);