!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.miniplayer=e():(t.xgplayer=t.xgplayer||{},t.xgplayer.PlayerControls=t.xgplayer.PlayerControls||{},t.xgplayer.PlayerControls.miniplayer=e())}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.util=void 0,e.createDom=s,e.hasClass=a,e.addClass=l,e.removeClass=h,e.toggleClass=d,e.findDom=u,e.padStart=c,e.format=p,e.event=f,e.typeOf=g,e.deepCopy=v,e.getBgImage=y,e.copyDom=m,e._setInterval=x,e._clearInterval=b,e.createImgBtn=w,e.isWeiXin=_,e.isUc=E,e.computeWatchDur=C,e.offInDestroy=P,e.on=D,e.once=M,e.getBuffered2=S,e.checkIsBrowser=k;var n,o=i(3),r=(n=o)&&n.__esModule?n:{default:n};function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(t);return o.className=n,o.innerHTML=e,Object.keys(i).forEach((function(e){var n=e,r=i[e];"video"===t||"audio"===t?r&&o.setAttribute(n,r):o.setAttribute(n,r)})),o}function a(t,e){return!!t&&(t.classList?Array.prototype.some.call(t.classList,(function(t){return t===e})):!!t.className&&!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")))}function l(t,e){t&&(t.classList?e.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(e){e&&t.classList.add(e)})):a(t,e)||(t.className+=" "+e))}function h(t,e){t&&(t.classList?e.split(/\s+/g).forEach((function(e){t.classList.remove(e)})):a(t,e)&&e.split(/\s+/g).forEach((function(e){var i=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(i," ")})))}function d(t,e){t&&e.split(/\s+/g).forEach((function(e){a(t,e)?h(t,e):l(t,e)}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments[1],i=void 0;try{i=t.querySelector(e)}catch(n){0===e.indexOf("#")&&(i=t.getElementById(e.slice(1)))}return i}function c(t,e,i){for(var n=String(i),o=e>>0,r=Math.ceil(o/n.length),s=[],a=String(t);r--;)s.push(n);return s.join("").substring(0,o-a.length)+a}function p(t){if(window.isNaN(t))return"";var e=c(Math.floor(t/3600),2,0),i=c(Math.floor((t-3600*e)/60),2,0),n=c(Math.floor(t-3600*e-60*i),2,0);return("00"===e?[i,n]:[e,i,n]).join(":")}function f(t){if(t.touches){var e=t.touches[0]||t.changedTouches[0];t.clientX=e.clientX||0,t.clientY=e.clientY||0,t.offsetX=e.pageX-e.target.offsetLeft,t.offsetY=e.pageY-e.target.offsetTop}t._target=t.target||t.srcElement}function g(t){return Object.prototype.toString.call(t).match(/([^\s.*]+)(?=]$)/g)[0]}function v(t,e){if("Object"===g(e)&&"Object"===g(t))return Object.keys(e).forEach((function(i){"Object"!==g(e[i])||e[i]instanceof Node?"Array"===g(e[i])?t[i]="Array"===g(t[i])?t[i].concat(e[i]):e[i]:t[i]=e[i]:t[i]?v(t[i],e[i]):t[i]=e[i]})),t}function y(t){var e=(t.currentStyle||window.getComputedStyle(t,null)).backgroundImage;if(!e||"none"===e)return"";var i=document.createElement("a");return i.href=e.replace(/url\("|"\)/g,""),i.href}function m(t){if(t&&1===t.nodeType){var e=document.createElement(t.tagName);return Array.prototype.forEach.call(t.attributes,(function(t){e.setAttribute(t.name,t.value)})),t.innerHTML&&(e.innerHTML=t.innerHTML),e}return""}function x(t,e,i,n){t._interval[e]||(t._interval[e]=setInterval(i.bind(t),n))}function b(t,e){clearInterval(t._interval[e]),t._interval[e]=null}function w(t,e,i,n){var o=s("xg-"+t,"",{},"xgplayer-"+t+"-img");if(o.style.backgroundImage='url("'+e+'")',i&&n){var r=void 0,a=void 0,l=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(t){return!(i.indexOf(t)>-1&&n.indexOf(t)>-1)||(r=Number(i.slice(0,i.indexOf(t)).trim()),a=Number(n.slice(0,n.indexOf(t)).trim()),l=t,!1)})),o.style.width=""+r+l,o.style.height=""+a+l,o.style.backgroundSize=""+r+l+" "+a+l,o.style.margin="start"===t?"-"+a/2+l+" auto auto -"+r/2+l:"auto 5px auto 5px"}return o}function _(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function E(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function C(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],i=0;i<t.length;i++)if(!(!t[i].end||t[i].begin<0||t[i].end<0||t[i].end<t[i].begin))if(e.length<1)e.push({begin:t[i].begin,end:t[i].end});else for(var n=0;n<e.length;n++){var o=t[i].begin,r=t[i].end;if(r<e[n].begin){e.splice(n,0,{begin:o,end:r});break}if(!(o>e[n].end)){var s=e[n].begin,a=e[n].end;e[n].begin=Math.min(o,s),e[n].end=Math.max(r,a);break}if(n>e.length-2){e.push({begin:o,end:r});break}}for(var l=0,h=0;h<e.length;h++)l+=e[h].end-e[h].begin;return l}function P(t,e,i,n){t.once(n,(function o(){t.off(e,i),t.off(n,o)}))}function D(t,e,i,n){if(n)t.on(e,i),P(t,e,i,n);else{t.on(e,(function n(o){i(o),t.off(e,n)}))}}function M(t,e,i,n){if(n)t.once(e,i),P(t,e,i,n);else{t.once(e,(function n(o){i(o),t.off(e,n)}))}}function S(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,i=[],n=0;n<t.length;n++)i.push({start:t.start(n)<.5?0:t.start(n),end:t.end(n)});i.sort((function(t,e){var i=t.start-e.start;return i||e.end-t.end}));var o=[];if(e)for(var s=0;s<i.length;s++){var a=o.length;if(a){var l=o[a-1].end;i[s].start-l<e?i[s].end>l&&(o[a-1].end=i[s].end):o.push(i[s])}else o.push(i[s])}else o=i;return new r.default(o)}function k(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}e.util={createDom:s,hasClass:a,addClass:l,removeClass:h,toggleClass:d,findDom:u,padStart:c,format:p,event:f,typeOf:g,deepCopy:v,getBgImage:y,copyDom:m,setInterval:x,clearInterval:b,createImgBtn:w,isWeiXin:_,isUc:E,computeWatchDur:C,offInDestroy:P,on:D,once:M,getBuffered2:S,checkIsBrowser:k}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(i(2)),o=r(i(9));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"miniplayer",method:function(){n.default.method.call(this),o.default.method.call(this)}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i(0),r=i(4),s=(n=r)&&n.__esModule?n:{default:n};e.default={name:"miniplayer",method:function(){var t=this,e=t.root;function i(){(0,o.hasClass)(e,"xgplayer-miniplayer-active")?t.exitMiniplayer():t.getMiniplayer()}t.on("miniplayerBtnClick",i),t.once("destroy",(function e(){t.off("miniplayerBtnClick",i),t.off("destroy",e)})),t.getMiniplayer=function(){(0,o.hasClass)(e,"xgplayer-is-fullscreen")&&this.exitFullscreen(e),(0,o.hasClass)(e,"xgplayer-is-cssfullscreen")&&this.exitCssFullscreen(),(0,o.hasClass)(e,"xgplayer-rotate-fullscreen")&&this.exitRotateFullscreen();var t=(0,o.createDom)("xg-miniplayer-lay","<div></div>",{},"xgplayer-miniplayer-lay");this.root.appendChild(t);var i=(0,o.createDom)("xg-miniplayer-drag",'<div class="drag-handle"><span>'+this.lang.MINIPLAYER_DRAG+"</span></div>",{tabindex:9},"xgplayer-miniplayer-drag");this.root.appendChild(i);new s.default(".xgplayer",{handle:".drag-handle"});(0,o.addClass)(this.root,"xgplayer-miniplayer-active"),this.root.style.right=0,this.root.style.bottom="200px",this.root.style.top="",this.root.style.left="",this.root.style.width="320px",this.root.style.height="180px",this.config.miniplayerConfig&&(void 0!==this.config.miniplayerConfig.top&&(this.root.style.top=this.config.miniplayerConfig.top+"px",this.root.style.bottom=""),void 0!==this.config.miniplayerConfig.bottom&&(this.root.style.bottom=this.config.miniplayerConfig.bottom+"px"),void 0!==this.config.miniplayerConfig.left&&(this.root.style.left=this.config.miniplayerConfig.left+"px",this.root.style.right=""),void 0!==this.config.miniplayerConfig.right&&(this.root.style.right=this.config.miniplayerConfig.right+"px"),void 0!==this.config.miniplayerConfig.width&&(this.root.style.width=this.config.miniplayerConfig.width+"px"),void 0!==this.config.miniplayerConfig.height&&(this.root.style.height=this.config.miniplayerConfig.height+"px")),this.config.fluid&&(this.root.style["padding-top"]="");var n=this;["click","touchend"].forEach((function(e){t.addEventListener(e,(function(t){t.preventDefault(),t.stopPropagation(),n.exitMiniplayer()}))}))},t.exitMiniplayer=function(){(0,o.removeClass)(this.root,"xgplayer-miniplayer-active"),this.root.style.right="",this.root.style.bottom="",this.root.style.top="",this.root.style.left="",this.config.fluid?(this.root.style.width="100%",this.root.style.height="0",this.root.style["padding-top"]=100*this.config.height/this.config.width+"%"):(this.config.width&&("number"!=typeof this.config.width?this.root.style.width=this.config.width:this.root.style.width=this.config.width+"px"),this.config.height&&("number"!=typeof this.config.height?this.root.style.height=this.config.height:this.root.style.height=this.config.height+"px"));var t=(0,o.findDom)(this.root,".xgplayer-miniplayer-lay");t&&t.parentNode&&t.parentNode.removeChild(t);var e=(0,o.findDom)(this.root,".xgplayer-miniplayer-drag");e&&e.parentNode&&e.parentNode.removeChild(e)}}},t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bufferedList=e}return n(t,[{key:"start",value:function(t){return this.bufferedList[t].start}},{key:"end",value:function(t){return this.bufferedList[t].end}},{key:"length",get:function(){return this.bufferedList.length}}]),t}();e.default=o,t.exports=e.default},function(t,e,i){var n,o;
/*!
 * Draggabilly v2.3.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */!function(r,s){n=[i(5),i(6)],void 0===(o=function(t,e){return function(t,e,i){function n(t,e){for(var i in e)t[i]=e[i];return t}var o=t.jQuery;function r(t,e){this.element="string"==typeof t?document.querySelector(t):t,o&&(this.$element=o(this.element)),this.options=n({},this.constructor.defaults),this.option(e),this._create()}var s=r.prototype=Object.create(i.prototype);r.defaults={},s.option=function(t){n(this.options,t)};var a={relative:!0,absolute:!0,fixed:!0};function l(t,e,i){return i=i||"round",e?Math[i](t/e)*e:t}s._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=n({},this.position);var t=getComputedStyle(this.element);a[t.position]||(this.element.style.position="relative"),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},s.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},s.dispatchEvent=function(t,e,i){var n=[e].concat(i);this.emitEvent(t,n),this.dispatchJQueryEvent(t,e,i)},s.dispatchJQueryEvent=function(e,i,n){var o=t.jQuery;if(o&&this.$element){var r=o.Event(i);r.type=e,this.$element.trigger(r,n)}},s._getPosition=function(){var t=getComputedStyle(this.element),e=this._getPositionCoord(t.left,"width"),i=this._getPositionCoord(t.top,"height");this.position.x=isNaN(e)?0:e,this.position.y=isNaN(i)?0:i,this._addTransformPosition(t)},s._getPositionCoord=function(t,i){if(-1!=t.indexOf("%")){var n=e(this.element.parentNode);return n?parseFloat(t)/100*n[i]:0}return parseInt(t,10)},s._addTransformPosition=function(t){var e=t.transform;if(0===e.indexOf("matrix")){var i=e.split(","),n=0===e.indexOf("matrix3d")?12:4,o=parseInt(i[n],10),r=parseInt(i[n+1],10);this.position.x+=o,this.position.y+=r}},s.onPointerDown=function(t,e){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",t,[e])},s.pointerDown=function(t,e){this.okayPointerDown(t)&&this.isEnabled?(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.element.classList.add("is-pointer-down"),this.dispatchEvent("pointerDown",t,[e])):this._pointerReset()},s.dragStart=function(t,e){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[e]),this.animate())},s.measureContainment=function(){var t=this.getContainer();if(t){var i=e(this.element),n=e(t),o=this.element.getBoundingClientRect(),r=t.getBoundingClientRect(),s=n.borderLeftWidth+n.borderRightWidth,a=n.borderTopWidth+n.borderBottomWidth,l=this.relativeStartPosition={x:o.left-(r.left+n.borderLeftWidth),y:o.top-(r.top+n.borderTopWidth)};this.containSize={width:n.width-s-l.x-i.width,height:n.height-a-l.y-i.height}}},s.getContainer=function(){var t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},s.onPointerMove=function(t,e,i){this.dispatchJQueryEvent("pointerMove",t,[e,i])},s.dragMove=function(t,e,i){if(this.isEnabled){var n=i.x,o=i.y,r=this.options.grid,s=r&&r[0],a=r&&r[1];n=l(n,s),o=l(o,a),n=this.containDrag("x",n,s),o=this.containDrag("y",o,a),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[e,i])}},s.containDrag=function(t,e,i){if(!this.options.containment)return e;var n="x"==t?"width":"height",o=l(-this.relativeStartPosition[t],i,"ceil"),r=this.containSize[n];return r=l(r,i,"floor"),Math.max(o,Math.min(r,e))},s.onPointerUp=function(t,e){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",t,[e])},s.dragEnd=function(t,e){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[e]))},s.animate=function(){if(this.isDragging){this.positionDrag();var t=this;requestAnimationFrame((function(){t.animate()}))}},s.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},s.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},s.staticClick=function(t,e){this.dispatchEvent("staticClick",t,[e])},s.setPosition=function(t,e){this.position.x=t,this.position.y=e,this.setLeftTop()},s.enable=function(){this.isEnabled=!0},s.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},s.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},s._init=function(){},o&&o.bridget&&o.bridget("draggabilly",r);return r}(r,t,e)}.apply(e,n))||(t.exports=o)}(window)},function(t,e,i){var n,o;
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */window,void 0===(o="function"==typeof(n=function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;function o(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var r,s=!1;function a(e){if(function(){if(!s){s=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),a.isBoxSizeOuter=r,i.removeChild(e)}}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var l=o(e);if("none"==l.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++)t[i[e]]=0;return t}();var h={};h.width=e.offsetWidth,h.height=e.offsetHeight;for(var d=h.isBorderBox="border-box"==l.boxSizing,u=0;u<n;u++){var c=i[u],p=l[c],f=parseFloat(p);h[c]=isNaN(f)?0:f}var g=h.paddingLeft+h.paddingRight,v=h.paddingTop+h.paddingBottom,y=h.marginLeft+h.marginRight,m=h.marginTop+h.marginBottom,x=h.borderLeftWidth+h.borderRightWidth,b=h.borderTopWidth+h.borderBottomWidth,w=d&&r,_=t(l.width);!1!==_&&(h.width=_+(w?0:g+x));var E=t(l.height);return!1!==E&&(h.height=E+(w?0:v+b)),h.innerWidth=h.width-(g+x),h.innerHeight=h.height-(v+b),h.outerWidth=h.width+y,h.outerHeight=h.height+m,h}}return a})?n.call(e,i,e,t):n)||(t.exports=o)},function(t,e,i){var n,o;
/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */!function(r,s){n=[i(7)],void 0===(o=function(t){return function(t,e){"use strict";function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(e){for(var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n=e?this._touchActionValue:"",o=0;o<this.handles.length;o++){var r=this.handles[o];this._bindStartEvent(r,e),r[i]("click",this),t.PointerEvent&&(r.style.touchAction=n)}},n._touchActionValue="none",n.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return n.okayPointerDown=function(t){var e=o[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},n.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},i.getPointerPoint=e.getPointerPoint,i}(r,t)}.apply(e,n))||(t.exports=o)}(window)},function(t,e,i){var n,o;
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */!function(r,s){n=[i(8)],void 0===(o=function(t){return function(t,e){"use strict";function i(){}var n=i.prototype=Object.create(e.prototype);n.bindStartEvent=function(t){this._bindStartEvent(t,!0)},n.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},n._bindStartEvent=function(e,i){var n=(i=void 0===i||i)?"addEventListener":"removeEventListener",o="mousedown";t.PointerEvent?o="pointerdown":"ontouchstart"in t&&(o="touchstart"),e[n](o,this)},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},n.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},n.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},n.onpointerdown=function(t){this._pointerDown(t,t)},n._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},n.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return n._bindPostStartEvents=function(e){if(e){var i=o[e.type];i.forEach((function(e){t.addEventListener(e,this)}),this),this._boundPointerEvents=i}},n._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach((function(e){t.removeEventListener(e,this)}),this),delete this._boundPointerEvents)},n.onmousemove=function(t){this._pointerMove(t,t)},n.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},n.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},n._pointerMove=function(t,e){this.pointerMove(t,e)},n.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},n.onmouseup=function(t){this._pointerUp(t,t)},n.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},n.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},n._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},n._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},n._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},n.pointerDone=function(){},n.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},n.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},n._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},n.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}(r,t)}.apply(e,n))||(t.exports=o)}(window)},function(t,e,i){var n,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(n=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?n.call(e,i,e,t):n)||(t.exports=o)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0);i(10);e.default={name:"s_miniplayer",method:function(){var t=this;if(t.config.miniplayer){var e=t.lang.MINIPLAYER,i=(0,n.createDom)("xg-miniplayer",'<p class="name"><span>'+e+"</span></p>",{tabindex:9},"xgplayer-miniplayer");t.once("ready",(function(){t.controls.appendChild(i)})),["click","touchend"].forEach((function(e){i.addEventListener(e,(function(e){e.preventDefault(),e.stopPropagation(),t.userGestureTrigEvent("miniplayerBtnClick")}))}))}}},t.exports=e.default},function(t,e,i){var n=i(11),o=i(13),r="string"==typeof n?[[t.i,n,""]]:n;(e=t.exports=n.locals||{})._getContent=function(){return r},e._getCss=function(){return""+n},e._insertCss=function(t){return o(r,t)}},function(t,e,i){(t.exports=i(12)(!1)).push([t.i,".xgplayer-skin-default .xgplayer-miniplayer{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-miniplayer .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-miniplayer .name span{width:80px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-miniplayer-lay{position:absolute;top:26px;left:0;width:100%;height:100%;z-index:130;cursor:pointer;background-color:transparent;display:none}.xgplayer-skin-default .xgplayer-miniplayer-lay div{width:100%;height:100%}.xgplayer-skin-default .xgplayer-miniplayer-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:130;display:none}.xgplayer-skin-default .xgplayer-miniplayer-drag .drag-handle{width:100%}.xgplayer-skin-default.xgplayer-miniplayer-active{position:fixed;right:0;bottom:200px;width:320px;height:180px;z-index:110}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-controls,.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-danmu{display:none}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-miniplayer-lay{display:block}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-miniplayer-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default.xgplayer-inactive .xgplayer-miniplayer-drag{display:none}.lang-is-jp .xgplayer-miniplayer .name span{width:70px;height:20px}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[i].concat(r).concat([o]).join("\n")}var s;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e,i){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var n={};function o(t){t.forEach((function(t){if(--n[t]<=0){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)}}))}t.exports=function(t,e){for(var i,r=void 0===e?{}:e,s=r.replace,a=void 0!==s&&s,l=r.prepend,h=void 0!==l&&l,d=r.prefix,u=void 0===d?"s":d,c=[],p=0;p<t.length;p++){var f=t[p],g=f[0],v=f[1],y=f[2],m=f[3],x=""+u+g+"-"+p;if(c.push(x),!n[x]||a){n[x]=1;var b=document.getElementById(x),w=!1;b||(w=!0,(b=document.createElement("style")).setAttribute("type","text/css"),b.id=x,y&&b.setAttribute("media",y));var _=v;m&&"function"==typeof btoa&&(_+="\n/*# sourceMappingURL=data:application/json;base64,"+(i=JSON.stringify(m),btoa(encodeURIComponent(i).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode("0x"+e)})))+"*/"),_+="\n/*# sourceURL="+m.file+"?"+x+"*/"),"textContent"in b?b.textContent=_:b.styleSheet.cssText=_,w&&(h?document.head.insertBefore(b,document.head.childNodes[0]):document.head.appendChild(b))}else n[x]++}return o.bind(null,c)}}])}));