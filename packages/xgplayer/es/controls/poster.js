!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.poster=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.poster=t())}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(3),i="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-poster{display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-skin-default.xgplayer-nostart .xgplayer-poster{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var u;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var r={};function o(e){e.forEach((function(e){if(--r[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var n,i=void 0===t?{}:t,u=i.replace,a=void 0!==u&&u,s=i.prepend,c=void 0!==s&&s,f=i.prefix,p=void 0===f?"s":f,l=[],d=0;d<e.length;d++){var y=e[d],g=y[0],m=y[1],b=y[2],h=y[3],v=""+p+g+"-"+d;if(l.push(v),!r[v]||a){r[v]=1;var x=document.getElementById(v),j=!1;x||(j=!0,(x=document.createElement("style")).setAttribute("type","text/css"),x.id=v,b&&x.setAttribute("media",b));var C=m;h&&"function"==typeof btoa&&(C+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(h),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))+"*/"),C+="\n/*# sourceURL="+h.file+"?"+v+"*/"),"textContent"in x?x.textContent=C:x.styleSheet.cssText=C,j&&(c?document.head.insertBefore(x,document.head.childNodes[0]):document.head.appendChild(x))}else r[v]++}return o.bind(null,l)}},function(e,t,n){"use strict";n.r(t);function r(e="div",t="",n={},r=""){let o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach(t=>{let r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)}),o}n(0);var o={name:"s_poster",method:function(){let e=this.root;if(!this.config.poster)return;let t=r("xg-poster","",{},"xgplayer-poster");t.style.backgroundImage=`url(${this.config.poster})`,e.appendChild(t)}};t.default={name:"poster",method:function(){o.method.call(this)}}}])}));