(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))f(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const u of h.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function r(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function f(c){if(c.ep)return;c.ep=!0;const h=r(c);fetch(c.href,h)}})();var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function No(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ei={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(a,l){(function(r,f){f(l)})($o,function(r){var f="1.9.4";function c(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var h=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function u(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var _=0;function g(t){return"_leaflet_id"in t||(t._leaflet_id=++_),t._leaflet_id}function b(t,e,i){var n,s,o,d;return d=function(){n=!1,s&&(o.apply(i,s),s=!1)},o=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(d,e),n=!0)},o}function w(t,e,i){var n=e[1],s=e[0],o=n-s;return t===n&&i?t:((t-s)%o+o)%o+s}function P(){return!1}function T(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function k(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function z(t){return k(t).split(/\s+/)}function x(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?h(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function W(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var Q=/\{ *([\w_ -]+) *\}/g;function Tt(t,e){return t.replace(Q,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var U=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function kt(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Xt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function ue(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var Gt=0;function ke(t){var e=+new Date,i=Math.max(0,16-(e-Gt));return Gt=e+i,window.setTimeout(t,i)}var te=window.requestAnimationFrame||ue("RequestAnimationFrame")||ke,Dt=window.cancelAnimationFrame||ue("CancelAnimationFrame")||ue("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function it(t,e,i){if(i&&te===ke)t.call(e);else return te.call(window,u(t,e))}function ft(t){t&&Dt.call(window,t)}var cs={__proto__:null,extend:c,create:h,bind:u,get lastId(){return _},stamp:g,throttle:b,wrapNum:w,falseFn:P,formatNum:T,trim:k,splitWords:z,setOptions:x,getParamString:W,template:Tt,isArray:U,indexOf:kt,emptyImageUrl:Xt,requestFn:te,cancelFn:Dt,requestAnimFrame:it,cancelAnimFrame:ft};function Ct(){}Ct.extend=function(t){var e=function(){x(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=h(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&c(e,t.statics),t.includes&&(us(t.includes),c.apply(null,[n].concat(t.includes))),c(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?h(i.options):{},c(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var o=0,d=n._initHooks.length;o<d;o++)n._initHooks[o].call(this)}},e},Ct.include=function(t){var e=this.prototype.options;return c(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},Ct.mergeOptions=function(t){return c(this.prototype.options,t),this},Ct.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function us(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=U(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ct={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=z(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=z(t);for(var s=arguments.length===1,o=0,d=t.length;o<d;o++)s?this._off(t[o]):this._off(t[o],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,o;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,o=n.length;s<o;s++)n[s].fn=P;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var d=this._listens(t,e,i);if(d!==!1){var m=n[d];this._firingCount&&(m.fn=P,this._events[t]=n=n.slice()),n.splice(d,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=c({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var o=0,d=s.length;o<d;o++){var m=s[o],p=m.fn;m.once&&this.off(t,p,m.ctx),p.call(m.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var o=this._events&&this._events[t];if(o&&o.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var d in this._eventParents)if(this._eventParents[d].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,o=n.length;s<o;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=z(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[g(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[g(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,c({layer:t.target,propagatedFrom:t.target},t),!0)}};ct.addEventListener=ct.on,ct.removeEventListener=ct.clearAllEventListeners=ct.off,ct.addOneTimeEventListener=ct.once,ct.fireEvent=ct.fire,ct.hasEventListeners=ct.listens;var he=Ct.extend(ct);function E(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var Oi=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};E.prototype={clone:function(){return new E(this.x,this.y)},add:function(t){return this.clone()._add(M(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(M(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new E(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new E(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Oi(this.x),this.y=Oi(this.y),this},distanceTo:function(t){t=M(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=M(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=M(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+T(this.x)+", "+T(this.y)+")"}};function M(t,e,i){return t instanceof E?t:U(t)?new E(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new E(t.x,t.y):new E(t,e,i)}function Z(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}Z.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof E||typeof t[0]=="number"||"x"in t)e=i=M(t);else if(t=nt(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return M((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return M(this.min.x,this.max.y)},getTopRight:function(){return M(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof E?t=M(t):t=nt(t),t instanceof Z?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=nt(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>=e.x&&n.x<=i.x,d=s.y>=e.y&&n.y<=i.y;return o&&d},overlaps:function(t){t=nt(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>e.x&&n.x<i.x,d=s.y>e.y&&n.y<i.y;return o&&d},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return nt(M(e.x-n,e.y-s),M(i.x+n,i.y+s))},equals:function(t){return t?(t=nt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function nt(t,e){return!t||t instanceof Z?t:new Z(t,e)}function st(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}st.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof N)n=t,s=t;else if(t instanceof st){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend(R(t)||F(t)):this;return!e&&!i?(this._southWest=new N(n.lat,n.lng),this._northEast=new N(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new st(new N(e.lat-n,e.lng-s),new N(i.lat+n,i.lng+s))},getCenter:function(){return new N((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new N(this.getNorth(),this.getWest())},getSouthEast:function(){return new N(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof N||"lat"in t?t=R(t):t=F(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof st?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=F(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>=e.lat&&n.lat<=i.lat,d=s.lng>=e.lng&&n.lng<=i.lng;return o&&d},overlaps:function(t){t=F(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>e.lat&&n.lat<i.lat,d=s.lng>e.lng&&n.lng<i.lng;return o&&d},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=F(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function F(t,e){return t instanceof st?t:new st(t,e)}function N(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}N.prototype={equals:function(t,e){if(!t)return!1;t=R(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+T(this.lat,t)+", "+T(this.lng,t)+")"},distanceTo:function(t){return Zt.distance(this,R(t))},wrap:function(){return Zt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return F([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new N(this.lat,this.lng,this.alt)}};function R(t,e,i){return t instanceof N?t:U(t)&&typeof t[0]!="object"?t.length===3?new N(t[0],t[1],t[2]):t.length===2?new N(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new N(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new N(t,e,i)}var Mt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new Z(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?w(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?w(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new N(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var o=t.getSouthWest(),d=t.getNorthEast(),m=new N(o.lat-n,o.lng-s),p=new N(d.lat-n,d.lng-s);return new st(m,p)}},Zt=c({},Mt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,o=Math.sin((e.lat-t.lat)*i/2),d=Math.sin((e.lng-t.lng)*i/2),m=o*o+Math.cos(n)*Math.cos(s)*d*d,p=2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m));return this.R*p}}),$i=6378137,Ke={R:$i,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new E(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new N((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=$i*Math.PI;return new Z([-t,-t],[t,t])}()};function Ye(t,e,i,n){if(U(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}Ye.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new E((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function fe(t,e,i,n){return new Ye(t,e,i,n)}var Je=c({},Zt,{code:"EPSG:3857",projection:Ke,transformation:function(){var t=.5/(Math.PI*Ke.R);return fe(t,.5,-t,.5)}()}),hs=c({},Je,{code:"EPSG:900913"});function Ni(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Di(t,e){var i="",n,s,o,d,m,p;for(n=0,o=t.length;n<o;n++){for(m=t[n],s=0,d=m.length;s<d;s++)p=m[s],i+=(s?"L":"M")+p.x+" "+p.y;i+=e?S.svg?"z":"x":""}return i||"M0 0"}var Qe=document.documentElement.style,Ce="ActiveXObject"in window,fs=Ce&&!document.addEventListener,Zi="msLaunchUri"in navigator&&!("documentMode"in document),Xe=xt("webkit"),Hi=xt("android"),qi=xt("android 2")||xt("android 3"),ms=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ps=Hi&&xt("Google")&&ms<537&&!("AudioNode"in window),ti=!!window.opera,Wi=!Zi&&xt("chrome"),Fi=xt("gecko")&&!Xe&&!ti&&!Ce,gs=!Wi&&xt("safari"),Vi=xt("phantom"),Gi="OTransition"in Qe,vs=navigator.platform.indexOf("Win")===0,Ui=Ce&&"transition"in Qe,ei="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!qi,ji="MozPerspective"in Qe,_s=!window.L_DISABLE_3D&&(Ui||ei||ji)&&!Gi&&!Vi,me=typeof orientation<"u"||xt("mobile"),ys=me&&Xe,bs=me&&ei,Ki=!window.PointerEvent&&window.MSPointerEvent,Yi=!!(window.PointerEvent||Ki),Ji="ontouchstart"in window||!!window.TouchEvent,ws=!window.L_NO_TOUCH&&(Ji||Yi),Ts=me&&ti,xs=me&&Fi,Ps=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ls=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",P,e),window.removeEventListener("testPassiveEventSupport",P,e)}catch{}return t}(),Ss=function(){return!!document.createElement("canvas").getContext}(),ii=!!(document.createElementNS&&Ni("svg").createSVGRect),ks=!!ii&&function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Cs=!ii&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}}(),Ms=navigator.platform.indexOf("Mac")===0,Es=navigator.platform.indexOf("Linux")===0;function xt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var S={ie:Ce,ielt9:fs,edge:Zi,webkit:Xe,android:Hi,android23:qi,androidStock:ps,opera:ti,chrome:Wi,gecko:Fi,safari:gs,phantom:Vi,opera12:Gi,win:vs,ie3d:Ui,webkit3d:ei,gecko3d:ji,any3d:_s,mobile:me,mobileWebkit:ys,mobileWebkit3d:bs,msPointer:Ki,pointer:Yi,touch:ws,touchNative:Ji,mobileOpera:Ts,mobileGecko:xs,retina:Ps,passiveEvents:Ls,canvas:Ss,svg:ii,vml:Cs,inlineSvg:ks,mac:Ms,linux:Es},Qi=S.msPointer?"MSPointerDown":"pointerdown",Xi=S.msPointer?"MSPointerMove":"pointermove",tn=S.msPointer?"MSPointerUp":"pointerup",en=S.msPointer?"MSPointerCancel":"pointercancel",ni={touchstart:Qi,touchmove:Xi,touchend:tn,touchcancel:en},nn={touchstart:Os,touchmove:Me,touchend:Me,touchcancel:Me},ee={},sn=!1;function As(t,e,i){return e==="touchstart"&&Rs(),nn[e]?(i=nn[e].bind(this,i),t.addEventListener(ni[e],i,!1),i):(console.warn("wrong event specified:",e),P)}function Is(t,e,i){if(!ni[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(ni[e],i,!1)}function Bs(t){ee[t.pointerId]=t}function zs(t){ee[t.pointerId]&&(ee[t.pointerId]=t)}function on(t){delete ee[t.pointerId]}function Rs(){sn||(document.addEventListener(Qi,Bs,!0),document.addEventListener(Xi,zs,!0),document.addEventListener(tn,on,!0),document.addEventListener(en,on,!0),sn=!0)}function Me(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in ee)e.touches.push(ee[i]);e.changedTouches=[e],t(e)}}function Os(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&Y(e),Me(t,e)}function $s(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Ns=200;function Ds(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(o){if(o.detail!==1){n=o.detail;return}if(!(o.pointerType==="mouse"||o.sourceCapabilities&&!o.sourceCapabilities.firesTouchEvents)){var d=cn(o);if(!(d.some(function(p){return p instanceof HTMLLabelElement&&p.attributes.for})&&!d.some(function(p){return p instanceof HTMLInputElement||p instanceof HTMLSelectElement}))){var m=Date.now();m-i<=Ns?(n++,n===2&&e($s(o))):n=1,i=m}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function Zs(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var si=Ie(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),pe=Ie(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),an=pe==="webkitTransition"||pe==="OTransition"?pe+"End":"transitionend";function rn(t){return typeof t=="string"?document.getElementById(t):t}function ge(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function $(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function H(t){var e=t.parentNode;e&&e.removeChild(t)}function Ee(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ie(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function ne(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function oi(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Ae(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function I(t,e){if(t.classList!==void 0)for(var i=z(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!oi(t,e)){var o=Ae(t);ai(t,(o?o+" ":"")+e)}}function q(t,e){t.classList!==void 0?t.classList.remove(e):ai(t,k((" "+Ae(t)+" ").replace(" "+e+" "," ")))}function ai(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Ae(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function mt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Hs(t,e)}function Hs(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Ie(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Ut(t,e,i){var n=e||new E(0,0);t.style[si]=(S.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function V(t,e){t._leaflet_pos=e,S.any3d?Ut(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function jt(t){return t._leaflet_pos||new E(0,0)}var ve,_e,ri;if("onselectstart"in document)ve=function(){A(window,"selectstart",Y)},_e=function(){D(window,"selectstart",Y)};else{var ye=Ie(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ve=function(){if(ye){var t=document.documentElement.style;ri=t[ye],t[ye]="none"}},_e=function(){ye&&(document.documentElement.style[ye]=ri,ri=void 0)}}function li(){A(window,"dragstart",Y)}function di(){D(window,"dragstart",Y)}var Be,ci;function ui(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(ze(),Be=t,ci=t.style.outlineStyle,t.style.outlineStyle="none",A(window,"keydown",ze))}function ze(){Be&&(Be.style.outlineStyle=ci,Be=void 0,ci=void 0,D(window,"keydown",ze))}function ln(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function hi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var qs={__proto__:null,TRANSFORM:si,TRANSITION:pe,TRANSITION_END:an,get:rn,getStyle:ge,create:$,remove:H,empty:Ee,toFront:ie,toBack:ne,hasClass:oi,addClass:I,removeClass:q,setClass:ai,getClass:Ae,setOpacity:mt,testProp:Ie,setTransform:Ut,setPosition:V,getPosition:jt,get disableTextSelection(){return ve},get enableTextSelection(){return _e},disableImageDrag:li,enableImageDrag:di,preventOutline:ui,restoreOutline:ze,getSizedParentNode:ln,getScale:hi};function A(t,e,i,n){if(e&&typeof e=="object")for(var s in e)mi(t,s,e[s],i);else{e=z(e);for(var o=0,d=e.length;o<d;o++)mi(t,e[o],i,n)}return this}var Pt="_leaflet_events";function D(t,e,i,n){if(arguments.length===1)dn(t),delete t[Pt];else if(e&&typeof e=="object")for(var s in e)pi(t,s,e[s],i);else if(e=z(e),arguments.length===2)dn(t,function(m){return kt(e,m)!==-1});else for(var o=0,d=e.length;o<d;o++)pi(t,e[o],i,n);return this}function dn(t,e){for(var i in t[Pt]){var n=i.split(/\d/)[0];(!e||e(n))&&pi(t,n,null,null,i)}}var fi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function mi(t,e,i,n){var s=e+g(i)+(n?"_"+g(n):"");if(t[Pt]&&t[Pt][s])return this;var o=function(m){return i.call(n||t,m||window.event)},d=o;!S.touchNative&&S.pointer&&e.indexOf("touch")===0?o=As(t,e,o):S.touch&&e==="dblclick"?o=Ds(t,o):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(fi[e]||e,o,S.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(o=function(m){m=m||window.event,vi(t,m)&&d(m)},t.addEventListener(fi[e],o,!1)):t.addEventListener(e,d,!1):t.attachEvent("on"+e,o),t[Pt]=t[Pt]||{},t[Pt][s]=o}function pi(t,e,i,n,s){s=s||e+g(i)+(n?"_"+g(n):"");var o=t[Pt]&&t[Pt][s];if(!o)return this;!S.touchNative&&S.pointer&&e.indexOf("touch")===0?Is(t,e,o):S.touch&&e==="dblclick"?Zs(t,o):"removeEventListener"in t?t.removeEventListener(fi[e]||e,o,!1):t.detachEvent("on"+e,o),t[Pt][s]=null}function Kt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function gi(t){return mi(t,"wheel",Kt),this}function be(t){return A(t,"mousedown touchstart dblclick contextmenu",Kt),t._leaflet_disable_click=!0,this}function Y(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Yt(t){return Y(t),Kt(t),this}function cn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function un(t,e){if(!e)return new E(t.clientX,t.clientY);var i=hi(e),n=i.boundingClientRect;return new E((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Ws=S.linux&&S.chrome?window.devicePixelRatio:S.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function hn(t){return S.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Ws:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function vi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Fs={__proto__:null,on:A,off:D,stopPropagation:Kt,disableScrollPropagation:gi,disableClickPropagation:be,preventDefault:Y,stop:Yt,getPropagationPath:cn,getMousePosition:un,getWheelDelta:hn,isExternalTarget:vi,addListener:A,removeListener:D},fn=he.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=jt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=it(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),V(this._el,i),this.fire("step")},_complete:function(){ft(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),O=he.extend({options:{crs:Je,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=x(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(R(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=pe&&S.any3d&&!S.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),A(this._proxy,an,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(R(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=c({animate:i.animate},i.zoom),i.pan=c({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(S.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(S.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),o=t instanceof E?t:this.latLngToContainerPoint(t),d=o.subtract(s).multiplyBy(1-1/n),m=this.containerPointToLatLng(s.add(d));return this.setView(m,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():F(t);var i=M(e.paddingTopLeft||e.padding||[0,0]),n=M(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var o=n.subtract(i).divideBy(2),d=this.project(t.getSouthWest(),s),m=this.project(t.getNorthEast(),s),p=this.unproject(d.add(m).divideBy(2).add(o),s);return{center:p,zoom:s}},fitBounds:function(t,e){if(t=F(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=M(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new fn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){I(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!S.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),o=this.getSize(),d=this._zoom;t=R(t),e=e===void 0?d:e;var m=Math.max(o.x,o.y),p=m*this.getZoomScale(d,e),v=s.distanceTo(n)||1,y=1.42,C=y*y;function B(G){var Ge=G?-1:1,Bo=G?p:m,zo=p*p-m*m+Ge*C*C*v*v,Ro=2*Bo*C*v,Ci=zo/Ro,Un=Math.sqrt(Ci*Ci+1)-Ci,Oo=Un<1e-9?-18:Math.log(Un);return Oo}function X(G){return(Math.exp(G)-Math.exp(-G))/2}function j(G){return(Math.exp(G)+Math.exp(-G))/2}function gt(G){return X(G)/j(G)}var ot=B(0);function de(G){return m*(j(ot)/j(ot+y*G))}function Mo(G){return m*(j(ot)*gt(ot+y*G)-X(ot))/C}function Eo(G){return 1-Math.pow(1-G,1.5)}var Ao=Date.now(),Vn=(B(1)-ot)/y,Io=i.duration?1e3*i.duration:1e3*Vn*.8;function Gn(){var G=(Date.now()-Ao)/Io,Ge=Eo(G)*Vn;G<=1?(this._flyToFrame=it(Gn,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(Mo(Ge)/v)),d),this.getScaleZoom(m/de(Ge),d),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),Gn.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=F(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,F(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=M(e.paddingTopLeft||e.padding||[0,0]),n=M(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),o=this.project(t),d=this.getPixelBounds(),m=nt([d.min.add(i),d.max.subtract(n)]),p=m.getSize();if(!m.contains(o)){this._enforcingBounds=!0;var v=o.subtract(m.getCenter()),y=m.extend(o).getSize().subtract(p);s.x+=v.x<0?-y.x:y.x,s.y+=v.y<0?-y.y:y.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=c({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),o=n.subtract(s);return!o.x&&!o.y?this:(t.animate&&t.pan?this.panBy(o):(t.pan&&this._rawPanBy(o),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=c({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=u(this._handleGeolocationResponse,this),i=u(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new N(e,i),s=n.toBounds(t.coords.accuracy*2),o=this._locateOptions;if(o.setView){var d=this.getBoundsZoom(s);this.setView(n,o.maxZoom?Math.min(d,o.maxZoom):d)}var m={latlng:n,bounds:s,timestamp:t.timestamp};for(var p in t.coords)typeof t.coords[p]=="number"&&(m[p]=t.coords[p]);this.fire("locationfound",m)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),H(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ft(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)H(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=$("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new st(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=F(t),i=M(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),o=this.getMaxZoom(),d=t.getNorthWest(),m=t.getSouthEast(),p=this.getSize().subtract(i),v=nt(this.project(m,n),this.project(d,n)).getSize(),y=S.any3d?this.options.zoomSnap:1,C=p.x/v.x,B=p.y/v.y,X=e?Math.max(C,B):Math.min(C,B);return n=this.getScaleZoom(X,n),y&&(n=Math.round(n/(y/100))*(y/100),n=e?Math.ceil(n/y)*y:Math.floor(n/y)*y),Math.max(s,Math.min(o,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new E(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new Z(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(R(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(M(t),e)},layerPointToLatLng:function(t){var e=M(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(R(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(R(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(F(t))},distance:function(t,e){return this.options.crs.distance(R(t),R(e))},containerPointToLayerPoint:function(t){return M(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return M(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(M(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(R(t)))},mouseEventToContainerPoint:function(t){return un(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=rn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");A(e,"scroll",this._onScroll,this),this._containerId=g(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&S.any3d,I(t,"leaflet-container"+(S.touch?" leaflet-touch":"")+(S.retina?" leaflet-retina":"")+(S.ielt9?" leaflet-oldie":"")+(S.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=ge(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),V(this._mapPane,new E(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(I(t.markerPane,"leaflet-zoom-hide"),I(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){V(this._mapPane,new E(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ft(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){V(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[g(this._container)]=this;var e=t?D:A;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),S.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ft(this._resizeRequest),this._resizeRequest=it(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",o=t.target||t.srcElement,d=!1;o;){if(n=this._targets[g(o)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){d=!0;break}if(n&&n.listens(e,!0)&&(s&&!vi(o,t)||(i.push(n),s))||o===this._container)break;o=o.parentNode}return!i.length&&!d&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&ui(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=c({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var o=[],d=0;d<i.length;d++)i[d].listens(e,!0)&&o.push(i[d]);s=o.concat(s)}if(s.length){e==="contextmenu"&&Y(t);var m=s[0],p={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var v=m.getLatLng&&(!m._radius||m._radius<=10);p.containerPoint=v?this.latLngToContainerPoint(m.getLatLng()):this.mouseEventToContainerPoint(t),p.layerPoint=this.containerPointToLayerPoint(p.containerPoint),p.latlng=v?m.getLatLng():this.layerPointToLatLng(p.layerPoint)}for(d=0;d<s.length;d++)if(s[d].fire(e,p,!0),p.originalEvent._stopped||s[d].options.bubblingMouseEvents===!1&&kt(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return jt(this._mapPane)||new E(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return nt([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),o=new Z(n.subtract(s),n.add(s)),d=this._getBoundsOffset(o,i,e);return Math.abs(d.x)<=1&&Math.abs(d.y)<=1?t:this.unproject(n.add(d),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new Z(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=nt(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),o=n.max.subtract(t.max),d=this._rebound(s.x,-o.x),m=this._rebound(s.y,-o.y);return new E(d,m)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=S.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){q(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=$("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=si,n=this._proxy.style[i];Ut(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){H(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Ut(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(it(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,I(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&q(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Vs(t,e){return new O(t,e)}var _t=Ct.extend({options:{position:"topright"},initialize:function(t){x(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return I(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(H(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),we=function(t){return new _t(t)};O.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=$("div",e+"control-container",this._container);function n(s,o){var d=e+s+" "+e+o;t[s+o]=$("div",d,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)H(this._controlCorners[t]);H(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var mn=_t.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){x(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return _t.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(g(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){I(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(I(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):q(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return q(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=$("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),be(e),gi(e);var n=this._section=$("section",t+"-list");i&&(this._map.on("click",this.collapse,this),A(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=$("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),A(s,{keydown:function(o){o.keyCode===13&&this._expandSafely()},click:function(o){Y(o),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=$("div",t+"-base",n),this._separator=$("div",t+"-separator",n),this._overlaysList=$("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&g(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(u(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ee(this._baseLayersList),Ee(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(g(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+g(this),i),this._layerControlInputs.push(n),n.layerId=g(t.layer),A(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var o=document.createElement("span");e.appendChild(o),o.appendChild(n),o.appendChild(s);var d=t.overlay?this._overlaysList:this._baseLayersList;return d.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(o=0;o<s.length;o++)this._map.hasLayer(s[o])&&this._map.removeLayer(s[o]);for(o=0;o<n.length;o++)this._map.hasLayer(n[o])||this._map.addLayer(n[o]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,A(t,"click",Y),this.expand();var e=this;setTimeout(function(){D(t,"click",Y),e._preventClick=!1})}}),Gs=function(t,e,i){return new mn(t,e,i)},_i=_t.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=$("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var o=$("a",i,n);return o.innerHTML=t,o.href="#",o.title=e,o.setAttribute("role","button"),o.setAttribute("aria-label",e),be(o),A(o,"click",Yt),A(o,"click",s,this),A(o,"click",this._refocusOnMap,this),o},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";q(this._zoomInButton,e),q(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(I(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(I(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});O.mergeOptions({zoomControl:!0}),O.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new _i,this.addControl(this.zoomControl))});var Us=function(t){return new _i(t)},pn=_t.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=$("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=$("div",e,i)),t.imperial&&(this._iScale=$("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),js=function(t){return new pn(t)},Ks='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',yi=_t.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(S.inlineSvg?Ks+" ":"")+"Leaflet</a>"},initialize:function(t){x(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=$("div","leaflet-control-attribution"),be(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});O.mergeOptions({attributionControl:!0}),O.addInitHook(function(){this.options.attributionControl&&new yi().addTo(this)});var Ys=function(t){return new yi(t)};_t.Layers=mn,_t.Zoom=_i,_t.Scale=pn,_t.Attribution=yi,we.layers=Gs,we.zoom=Us,we.scale=js,we.attribution=Ys;var Lt=Ct.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Lt.addTo=function(t,e){return t.addHandler(e,this),this};var Js={Events:ct},gn=S.touch?"touchstart mousedown":"mousedown",Ht=he.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){x(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(A(this._dragStartTarget,gn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Ht._dragging===this&&this.finishDrag(!0),D(this._dragStartTarget,gn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!oi(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Ht._dragging===this&&this.finishDrag();return}if(!(Ht._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Ht._dragging=this,this._preventOutline&&ui(this._element),li(),ve(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=ln(this._element);this._startPoint=new E(e.clientX,e.clientY),this._startPos=jt(this._element),this._parentScale=hi(i);var n=t.type==="mousedown";A(document,n?"mousemove":"touchmove",this._onMove,this),A(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new E(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,Y(t),this._moved||(this.fire("dragstart"),this._moved=!0,I(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),I(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),V(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){q(document.body,"leaflet-dragging"),this._lastTarget&&(q(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),D(document,"mousemove touchmove",this._onMove,this),D(document,"mouseup touchend touchcancel",this._onUp,this),di(),_e();var e=this._moved&&this._moving;this._moving=!1,Ht._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function vn(t,e,i){var n,s=[1,4,2,8],o,d,m,p,v,y,C,B;for(o=0,y=t.length;o<y;o++)t[o]._code=Jt(t[o],e);for(m=0;m<4;m++){for(C=s[m],n=[],o=0,y=t.length,d=y-1;o<y;d=o++)p=t[o],v=t[d],p._code&C?v._code&C||(B=Re(v,p,C,e,i),B._code=Jt(B,e),n.push(B)):(v._code&C&&(B=Re(v,p,C,e,i),B._code=Jt(B,e),n.push(B)),n.push(p));t=n}return t}function _n(t,e){var i,n,s,o,d,m,p,v,y;if(!t||t.length===0)throw new Error("latlngs not passed");pt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var C=R([0,0]),B=F(t),X=B.getNorthWest().distanceTo(B.getSouthWest())*B.getNorthEast().distanceTo(B.getNorthWest());X<1700&&(C=bi(t));var j=t.length,gt=[];for(i=0;i<j;i++){var ot=R(t[i]);gt.push(e.project(R([ot.lat-C.lat,ot.lng-C.lng])))}for(m=p=v=0,i=0,n=j-1;i<j;n=i++)s=gt[i],o=gt[n],d=s.y*o.x-o.y*s.x,p+=(s.x+o.x)*d,v+=(s.y+o.y)*d,m+=d*3;m===0?y=gt[0]:y=[p/m,v/m];var de=e.unproject(M(y));return R([de.lat+C.lat,de.lng+C.lng])}function bi(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var o=R(t[s]);e+=o.lat,i+=o.lng,n++}return R([e/n,i/n])}var Qs={__proto__:null,clipPolygon:vn,polygonCenter:_n,centroid:bi};function yn(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=eo(t,i),t=to(t,i),t}function bn(t,e,i){return Math.sqrt(Te(t,e,i,!0))}function Xs(t,e,i){return Te(t,e,i)}function to(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,wi(t,s,e,0,i-1);var o,d=[];for(o=0;o<i;o++)s[o]&&d.push(t[o]);return d}function wi(t,e,i,n,s){var o=0,d,m,p;for(m=n+1;m<=s-1;m++)p=Te(t[m],t[n],t[s],!0),p>o&&(d=m,o=p);o>i&&(e[d]=1,wi(t,e,i,n,d),wi(t,e,i,d,s))}function eo(t,e){for(var i=[t[0]],n=1,s=0,o=t.length;n<o;n++)io(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<o-1&&i.push(t[o-1]),i}var wn;function Tn(t,e,i,n,s){var o=n?wn:Jt(t,i),d=Jt(e,i),m,p,v;for(wn=d;;){if(!(o|d))return[t,e];if(o&d)return!1;m=o||d,p=Re(t,e,m,i,s),v=Jt(p,i),m===o?(t=p,o=v):(e=p,d=v)}}function Re(t,e,i,n,s){var o=e.x-t.x,d=e.y-t.y,m=n.min,p=n.max,v,y;return i&8?(v=t.x+o*(p.y-t.y)/d,y=p.y):i&4?(v=t.x+o*(m.y-t.y)/d,y=m.y):i&2?(v=p.x,y=t.y+d*(p.x-t.x)/o):i&1&&(v=m.x,y=t.y+d*(m.x-t.x)/o),new E(v,y,s)}function Jt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function io(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function Te(t,e,i,n){var s=e.x,o=e.y,d=i.x-s,m=i.y-o,p=d*d+m*m,v;return p>0&&(v=((t.x-s)*d+(t.y-o)*m)/p,v>1?(s=i.x,o=i.y):v>0&&(s+=d*v,o+=m*v)),d=t.x-s,m=t.y-o,n?d*d+m*m:new E(s,o)}function pt(t){return!U(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function xn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),pt(t)}function Pn(t,e){var i,n,s,o,d,m,p,v;if(!t||t.length===0)throw new Error("latlngs not passed");pt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var y=R([0,0]),C=F(t),B=C.getNorthWest().distanceTo(C.getSouthWest())*C.getNorthEast().distanceTo(C.getNorthWest());B<1700&&(y=bi(t));var X=t.length,j=[];for(i=0;i<X;i++){var gt=R(t[i]);j.push(e.project(R([gt.lat-y.lat,gt.lng-y.lng])))}for(i=0,n=0;i<X-1;i++)n+=j[i].distanceTo(j[i+1])/2;if(n===0)v=j[0];else for(i=0,o=0;i<X-1;i++)if(d=j[i],m=j[i+1],s=d.distanceTo(m),o+=s,o>n){p=(o-n)/s,v=[m.x-p*(m.x-d.x),m.y-p*(m.y-d.y)];break}var ot=e.unproject(M(v));return R([ot.lat+y.lat,ot.lng+y.lng])}var no={__proto__:null,simplify:yn,pointToSegmentDistance:bn,closestPointOnSegment:Xs,clipSegment:Tn,_getEdgeIntersection:Re,_getBitCode:Jt,_sqClosestPointOnSegment:Te,isFlat:pt,_flat:xn,polylineCenter:Pn},Ti={project:function(t){return new E(t.lng,t.lat)},unproject:function(t){return new N(t.y,t.x)},bounds:new Z([-180,-90],[180,90])},xi={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Z([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,o=Math.sqrt(1-s*s),d=o*Math.sin(n),m=Math.tan(Math.PI/4-n/2)/Math.pow((1-d)/(1+d),o/2);return n=-i*Math.log(Math.max(m,1e-10)),new E(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),o=Math.exp(-t.y/i),d=Math.PI/2-2*Math.atan(o),m=0,p=.1,v;m<15&&Math.abs(p)>1e-7;m++)v=s*Math.sin(d),v=Math.pow((1-v)/(1+v),s/2),p=Math.PI/2-2*Math.atan(o*v)-d,d+=p;return new N(d*e,t.x*e/i)}},so={__proto__:null,LonLat:Ti,Mercator:xi,SphericalMercator:Ke},oo=c({},Zt,{code:"EPSG:3395",projection:xi,transformation:function(){var t=.5/(Math.PI*xi.R);return fe(t,.5,-t,.5)}()}),Ln=c({},Zt,{code:"EPSG:4326",projection:Ti,transformation:fe(1/180,1,-1/180,.5)}),ao=c({},Mt,{projection:Ti,transformation:fe(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Mt.Earth=Zt,Mt.EPSG3395=oo,Mt.EPSG3857=Je,Mt.EPSG900913=hs,Mt.EPSG4326=Ln,Mt.Simple=ao;var yt=he.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[g(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[g(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});O.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=g(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=g(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return g(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?U(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[g(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=g(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var se=yt.extend({initialize:function(t,e){x(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return g(t)}}),ro=function(t,e){return new se(t,e)},Et=se.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),se.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),se.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new st;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),lo=function(t,e){return new Et(t,e)},oe=Ct.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){x(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=M(n),o=M(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return S.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function co(t){return new oe(t)}var xe=oe.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof xe.imagePath!="string"&&(xe.imagePath=this._detectIconPath()),(this.options.imagePath||xe.imagePath)+oe.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var o=n.exec(i);return o&&o[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=$("div","leaflet-default-icon-path",document.body),e=ge(t,"background-image")||ge(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Sn=Lt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Ht(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),I(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&q(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,o=jt(e._icon),d=i.getPixelBounds(),m=i.getPixelOrigin(),p=nt(d.min._subtract(m).add(s),d.max._subtract(m).subtract(s));if(!p.contains(o)){var v=M((Math.max(p.max.x,o.x)-p.max.x)/(d.max.x-p.max.x)-(Math.min(p.min.x,o.x)-p.min.x)/(d.min.x-p.min.x),(Math.max(p.max.y,o.y)-p.max.y)/(d.max.y-p.max.y)-(Math.min(p.min.y,o.y)-p.min.y)/(d.min.y-p.min.y)).multiplyBy(n);i.panBy(v,{animate:!1}),this._draggable._newPos._add(v),this._draggable._startPos._add(v),V(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=it(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(ft(this._panRequest),this._panRequest=it(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=jt(e._icon),s=e._map.layerPointToLatLng(n);i&&V(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){ft(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Oe=yt.extend({options:{icon:new xe,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){x(this,e),this._latlng=R(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=R(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),I(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&A(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),o=!1;s!==this._shadow&&(this._removeShadow(),o=!0),s&&(I(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&D(this._icon,"focus",this._panOnFocus,this),H(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&H(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&V(this._icon,t),this._shadow&&V(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(I(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Sn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Sn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&mt(this._icon,t),this._shadow&&mt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?M(e.iconSize):M(0,0),n=e.iconAnchor?M(e.iconAnchor):M(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function uo(t,e){return new Oe(t,e)}var qt=yt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return x(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),$e=qt.extend({options:{fill:!0,radius:10},initialize:function(t,e){x(this,e),this._latlng=R(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=R(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return qt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new Z(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ho(t,e){return new $e(t,e)}var Pi=$e.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=c({},i,{radius:e})),x(this,e),this._latlng=R(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new st(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:qt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===Zt.distance){var s=Math.PI/180,o=this._mRadius/Zt.R/s,d=i.project([e+o,t]),m=i.project([e-o,t]),p=d.add(m).divideBy(2),v=i.unproject(p).lat,y=Math.acos((Math.cos(o*s)-Math.sin(e*s)*Math.sin(v*s))/(Math.cos(e*s)*Math.cos(v*s)))/s;(isNaN(y)||y===0)&&(y=o/Math.cos(Math.PI/180*e)),this._point=p.subtract(i.getPixelOrigin()),this._radius=isNaN(y)?0:p.x-i.project([v,t-y]).x,this._radiusY=p.y-d.y}else{var C=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(C).x}this._updateBounds()}});function fo(t,e,i){return new Pi(t,e,i)}var At=qt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){x(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=Te,s,o,d=0,m=this._parts.length;d<m;d++)for(var p=this._parts[d],v=1,y=p.length;v<y;v++){s=p[v-1],o=p[v];var C=n(t,s,o,!0);C<e&&(e=C,i=n(t,s,o))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=R(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new st,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return pt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=pt(t),n=0,s=t.length;n<s;n++)i?(e[n]=R(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new Z;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new E(t,t);this._rawPxBounds&&(this._pxBounds=new Z([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof N,s=t.length,o,d;if(n){for(d=[],o=0;o<s;o++)d[o]=this._map.latLngToLayerPoint(t[o]),i.extend(d[o]);e.push(d)}else for(o=0;o<s;o++)this._projectLatlngs(t[o],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,o,d,m,p;for(i=0,s=0,o=this._rings.length;i<o;i++)for(p=this._rings[i],n=0,d=p.length;n<d-1;n++)m=Tn(p[n],p[n+1],t,n,!0),m&&(e[s]=e[s]||[],e[s].push(m[0]),(m[1]!==p[n+1]||n===d-2)&&(e[s].push(m[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=yn(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,o,d,m,p=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,o=this._parts.length;i<o;i++)for(m=this._parts[i],n=0,d=m.length,s=d-1;n<d;s=n++)if(!(!e&&n===0)&&bn(t,m[s],m[n])<=p)return!0;return!1}});function mo(t,e){return new At(t,e)}At._flat=xn;var ae=At.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return _n(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=At.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof N&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){At.prototype._setLatLngs.call(this,t),pt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return pt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new E(e,e);if(t=new Z(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,o;n<s;n++)o=vn(this._rings[n],t,!0),o.length&&this._parts.push(o)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,o,d,m,p,v;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,p=this._parts.length;o<p;o++)for(i=this._parts[o],d=0,v=i.length,m=v-1;d<v;m=d++)n=i[d],s=i[m],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||At.prototype._containsPoint.call(this,t,!0)}});function po(t,e){return new ae(t,e)}var It=Et.extend({initialize:function(t,e){x(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=U(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var o=this.options;if(o.filter&&!o.filter(t))return this;var d=Ne(t,o);return d?(d.feature=He(t),d.defaultOptions=d.options,this.resetStyle(d),o.onEachFeature&&o.onEachFeature(t,d),this.addLayer(d)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=c({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Ne(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],o=e&&e.pointToLayer,d=e&&e.coordsToLatLng||Li,m,p,v,y;if(!n&&!i)return null;switch(i.type){case"Point":return m=d(n),kn(o,t,m,e);case"MultiPoint":for(v=0,y=n.length;v<y;v++)m=d(n[v]),s.push(kn(o,t,m,e));return new Et(s);case"LineString":case"MultiLineString":return p=De(n,i.type==="LineString"?0:1,d),new At(p,e);case"Polygon":case"MultiPolygon":return p=De(n,i.type==="Polygon"?1:2,d),new ae(p,e);case"GeometryCollection":for(v=0,y=i.geometries.length;v<y;v++){var C=Ne({geometry:i.geometries[v],type:"Feature",properties:t.properties},e);C&&s.push(C)}return new Et(s);case"FeatureCollection":for(v=0,y=i.features.length;v<y;v++){var B=Ne(i.features[v],e);B&&s.push(B)}return new Et(s);default:throw new Error("Invalid GeoJSON object.")}}function kn(t,e,i,n){return t?t(e,i):new Oe(i,n&&n.markersInheritOptions&&n)}function Li(t){return new N(t[1],t[0],t[2])}function De(t,e,i){for(var n=[],s=0,o=t.length,d;s<o;s++)d=e?De(t[s],e-1,i):(i||Li)(t[s]),n.push(d);return n}function Si(t,e){return t=R(t),t.alt!==void 0?[T(t.lng,e),T(t.lat,e),T(t.alt,e)]:[T(t.lng,e),T(t.lat,e)]}function Ze(t,e,i,n){for(var s=[],o=0,d=t.length;o<d;o++)s.push(e?Ze(t[o],pt(t[o])?0:e-1,i,n):Si(t[o],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function re(t,e){return t.feature?c({},t.feature,{geometry:e}):He(e)}function He(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var ki={toGeoJSON:function(t){return re(this,{type:"Point",coordinates:Si(this.getLatLng(),t)})}};Oe.include(ki),Pi.include(ki),$e.include(ki),At.include({toGeoJSON:function(t){var e=!pt(this._latlngs),i=Ze(this._latlngs,e?1:0,!1,t);return re(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),ae.include({toGeoJSON:function(t){var e=!pt(this._latlngs),i=e&&!pt(this._latlngs[0]),n=Ze(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),re(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),se.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),re(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var o=s.toGeoJSON(t);if(i)n.push(o.geometry);else{var d=He(o);d.type==="FeatureCollection"?n.push.apply(n,d.features):n.push(d)}}}),i?re(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function Cn(t,e){return new It(t,e)}var go=Cn,qe=yt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=F(e),x(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(I(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){H(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ie(this._image),this},bringToBack:function(){return this._map&&ne(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=F(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:$("img");if(I(e,"leaflet-image-layer"),this._zoomAnimated&&I(e,"leaflet-zoom-animated"),this.options.className&&I(e,this.options.className),e.onselectstart=P,e.onmousemove=P,e.onload=u(this.fire,this,"load"),e.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Ut(this._image,i,e)},_reset:function(){var t=this._image,e=new Z(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();V(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){mt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),vo=function(t,e,i){return new qe(t,e,i)},Mn=qe.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:$("video");if(I(e,"leaflet-image-layer"),this._zoomAnimated&&I(e,"leaflet-zoom-animated"),this.options.className&&I(e,this.options.className),e.onselectstart=P,e.onmousemove=P,e.onloadeddata=u(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}U(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var d=$("source");d.src=this._url[o],e.appendChild(d)}}});function _o(t,e,i){return new Mn(t,e,i)}var En=qe.extend({_initImage:function(){var t=this._image=this._url;I(t,"leaflet-image-layer"),this._zoomAnimated&&I(t,"leaflet-zoom-animated"),this.options.className&&I(t,this.options.className),t.onselectstart=P,t.onmousemove=P}});function yo(t,e,i){return new En(t,e,i)}var St=yt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof N||U(t))?(this._latlng=R(t),x(this,e)):(x(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&mt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&mt(this._container,1),this.bringToFront(),this.options.interactive&&(I(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(mt(this._container,0),this._removeTimeout=setTimeout(u(H,void 0,this._container),200)):H(this._container),this.options.interactive&&(q(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=R(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ie(this._container),this},bringToBack:function(){return this._map&&ne(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof Et){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=M(this.options.offset),i=this._getAnchor();this._zoomAnimated?V(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});O.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),yt.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(x(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var We=St.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,St.prototype.openOn.call(this,t)},onAdd:function(t){St.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof qt||this._source.on("preclick",Kt))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof qt||this._source.off("preclick",Kt))},getEvents:function(){var t=St.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=$("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=$("div",t+"-content-wrapper",e);if(this._contentNode=$("div",t+"-content",i),be(e),gi(this._contentNode),A(e,"contextmenu",Kt),this._tipContainer=$("div",t+"-tip-container",e),this._tip=$("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=$("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',A(n,"click",function(s){Y(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",I(t,o)):q(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();V(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(ge(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new E(this._containerLeft,-i-this._containerBottom);s._add(jt(this._container));var o=t.layerPointToContainerPoint(s),d=M(this.options.autoPanPadding),m=M(this.options.autoPanPaddingTopLeft||d),p=M(this.options.autoPanPaddingBottomRight||d),v=t.getSize(),y=0,C=0;o.x+n+p.x>v.x&&(y=o.x+n-v.x+p.x),o.x-y-m.x<0&&(y=o.x-m.x),o.y+i+p.y>v.y&&(C=o.y+i-v.y+p.y),o.y-C-m.y<0&&(C=o.y-m.y),(y||C)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([y,C]))}},_getAnchor:function(){return M(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),bo=function(t,e){return new We(t,e)};O.mergeOptions({closePopupOnClick:!0}),O.include({openPopup:function(t,e,i){return this._initOverlay(We,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),yt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(We,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Et||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Yt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof qt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Fe=St.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){St.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=St.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=$("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+g(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,o=n.latLngToContainerPoint(n.getCenter()),d=n.layerPointToContainerPoint(t),m=this.options.direction,p=s.offsetWidth,v=s.offsetHeight,y=M(this.options.offset),C=this._getAnchor();m==="top"?(e=p/2,i=v):m==="bottom"?(e=p/2,i=0):m==="center"?(e=p/2,i=v/2):m==="right"?(e=0,i=v/2):m==="left"?(e=p,i=v/2):d.x<o.x?(m="right",e=0,i=v/2):(m="left",e=p+(y.x+C.x)*2,i=v/2),t=t.subtract(M(e,i,!0)).add(y).add(C),q(s,"leaflet-tooltip-right"),q(s,"leaflet-tooltip-left"),q(s,"leaflet-tooltip-top"),q(s,"leaflet-tooltip-bottom"),I(s,"leaflet-tooltip-"+m),V(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&mt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return M(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),wo=function(t,e){return new Fe(t,e)};O.include({openTooltip:function(t,e,i){return this._initOverlay(Fe,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),yt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Fe,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Et||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(A(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),A(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var An=oe.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Ee(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=M(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function To(t){return new An(t)}oe.Default=xe;var Pe=yt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:S.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){x(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),H(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ie(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ne(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=b(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof E?t:new E(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,o;n<s;n++)o=e[n].style.zIndex,e[n]!==this._container&&o&&(i=t(i,+o));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!S.ielt9){mt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var o=Math.min(1,(t-s.loaded)/200);mt(s.el,o),o<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(ft(this._fadeFrame),this._fadeFrame=it(this._updateOpacity,this))}},_onOpaqueTile:P,_initContainer:function(){this._container||(this._container=$("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(H(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=$("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),P(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:P,_onRemoveLevel:P,_onCreateLevel:P,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)H(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),o=Math.floor(e/2),d=i-1,m=new E(+s,+o);m.z=+d;var p=this._tileCoordsToKey(m),v=this._tiles[p];return v&&v.active?(v.retain=!0,!0):(v&&v.loaded&&(v.retain=!0),d>n?this._retainParent(s,o,d,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var o=2*e;o<2*e+2;o++){var d=new E(s,o);d.z=i+1;var m=this._tileCoordsToKey(d),p=this._tiles[m];if(p&&p.active){p.retain=!0;continue}else p&&p.loaded&&(p.retain=!0);i+1<n&&this._retainChildren(s,o,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var o=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||o)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();S.any3d?Ut(t.el,s,n):V(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),o=e.getSize().divideBy(n*2);return new Z(s.subtract(o),s.add(o))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),o=s.getCenter(),d=[],m=this.options.keepBuffer,p=new Z(s.getBottomLeft().subtract([m,-m]),s.getTopRight().add([m,-m]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var v in this._tiles){var y=this._tiles[v].coords;(y.z!==this._tileZoom||!p.contains(new E(y.x,y.y)))&&(this._tiles[v].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var C=s.min.y;C<=s.max.y;C++)for(var B=s.min.x;B<=s.max.x;B++){var X=new E(B,C);if(X.z=this._tileZoom,!!this._isValidTile(X)){var j=this._tiles[this._tileCoordsToKey(X)];j?j.current=!0:d.push(X)}}if(d.sort(function(ot,de){return ot.distanceTo(o)-de.distanceTo(o)}),d.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var gt=document.createDocumentFragment();for(B=0;B<d.length;B++)this._addTile(d[B],gt);this._level.el.appendChild(gt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return F(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),o=e.unproject(n,t.z),d=e.unproject(s,t.z);return[o,d]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new st(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new E(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(H(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){I(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=P,t.onmousemove=P,S.ielt9&&this.options.opacity<1&&mt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),u(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&it(u(this._tileReady,this,t,null,s)),V(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(mt(i.el,0),ft(this._fadeFrame),this._fadeFrame=it(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(I(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),S.ielt9||!this._map._fadeAnimated?it(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new E(this._wrapX?w(t.x,this._wrapX):t.x,this._wrapY?w(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new Z(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function xo(t){return new Pe(t)}var le=Pe.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=x(this,e),e.detectRetina&&S.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return A(i,"load",u(this._tileOnLoad,this,e,i)),A(i,"error",u(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:S.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return Tt(this._url,c(e,this.options))},_tileOnLoad:function(t,e){S.ielt9?setTimeout(u(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=P,e.onerror=P,!e.complete)){e.src=Xt;var i=this._tiles[t].coords;H(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Xt),Pe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Xt))return Pe.prototype._tileReady.call(this,t,e,i)}});function In(t,e){return new le(t,e)}var Bn=le.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=c({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=x(this,e);var s=e.detectRetina&&S.retina?2:1,o=this.getTileSize();i.width=o.x*s,i.height=o.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,le.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=nt(i.project(e[0]),i.project(e[1])),s=n.min,o=n.max,d=(this._wmsVersion>=1.3&&this._crs===Ln?[s.y,s.x,o.y,o.x]:[s.x,s.y,o.x,o.y]).join(","),m=le.prototype.getTileUrl.call(this,t);return m+W(this.wmsParams,m,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+d},setParams:function(t,e){return c(this.wmsParams,t),e||this.redraw(),this}});function Po(t,e){return new Bn(t,e)}le.WMS=Bn,In.wms=Po;var Bt=yt.extend({options:{padding:.1},initialize:function(t){x(this,t),g(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),I(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),o=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));S.any3d?Ut(this._container,o,i):V(this._container,o)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new Z(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),zn=Bt.extend({options:{tolerance:0},getEvents:function(){var t=Bt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Bt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");A(t,"mousemove",this._onMouseMove,this),A(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),A(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){ft(this._redrawRequest),delete this._ctx,H(this._container),D(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Bt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=S.retina?2:1;V(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",S.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Bt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[g(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[g(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||it(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Z,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,o,d=t._parts,m=d.length,p=this._ctx;if(m){for(p.beginPath(),i=0;i<m;i++){for(n=0,s=d[i].length;n<s;n++)o=d[i][n],p[n?"lineTo":"moveTo"](o.x,o.y);e&&p.closePath()}this._fillStroke(p,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(q(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(I(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function Rn(t){return S.canvas?new zn(t):null}var Le=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Lo={_initContainer:function(){this._container=$("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Bt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Le("shape");I(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Le("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[g(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;H(e),t.removeInteractiveTarget(e),delete this._layers[g(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=Le("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=U(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=Le("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){ie(t._container)},_bringToBack:function(t){ne(t._container)}},Ve=S.vml?Le:Ni,Se=Bt.extend({_initContainer:function(){this._container=Ve("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ve("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){H(this._container),D(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Bt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),V(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Ve("path");t.options.className&&I(e,t.options.className),t.options.interactive&&I(e,"leaflet-interactive"),this._updateStyle(t),this._layers[g(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){H(t._path),t.removeInteractiveTarget(t._path),delete this._layers[g(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Di(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,o)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){ie(t._path)},_bringToBack:function(t){ne(t._path)}});S.vml&&Se.include(Lo);function On(t){return S.svg||S.vml?new Se(t):null}O.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Rn(t)||On(t)}});var $n=ae.extend({initialize:function(t,e){ae.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=F(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function So(t,e){return new $n(t,e)}Se.create=Ve,Se.pointsToPath=Di,It.geometryToLayer=Ne,It.coordsToLatLng=Li,It.coordsToLatLngs=De,It.latLngToCoords=Si,It.latLngsToCoords=Ze,It.getFeature=re,It.asFeature=He,O.mergeOptions({boxZoom:!0});var Nn=Lt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){A(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){D(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){H(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ve(),li(),this._startPoint=this._map.mouseEventToContainerPoint(t),A(document,{contextmenu:Yt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=$("div","leaflet-zoom-box",this._container),I(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new Z(this._point,this._startPoint),i=e.getSize();V(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(H(this._box),q(this._container,"leaflet-crosshair")),_e(),di(),D(document,{contextmenu:Yt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var e=new st(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});O.addInitHook("addHandler","boxZoom",Nn),O.mergeOptions({doubleClickZoom:!0});var Dn=Lt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});O.addInitHook("addHandler","doubleClickZoom",Dn),O.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Zn=Lt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Ht(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}I(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){q(this._map._container,"leaflet-grab"),q(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=F(this._map.options.maxBounds);this._offsetLimit=nt(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,o=(n+e+i)%t-e-i,d=Math.abs(s+i)<Math.abs(o+i)?s:o;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=d},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),o=(this._lastTime-this._times[0])/1e3,d=i.easeLinearity,m=s.multiplyBy(d/o),p=m.distanceTo([0,0]),v=Math.min(i.inertiaMaxSpeed,p),y=m.multiplyBy(v/p),C=v/(i.inertiaDeceleration*d),B=y.multiplyBy(-C/2).round();!B.x&&!B.y?e.fire("moveend"):(B=e._limitOffset(B,e.options.maxBounds),it(function(){e.panBy(B,{duration:C,easeLinearity:d,noMoveStart:!0,animate:!0})}))}}});O.addInitHook("addHandler","dragging",Zn),O.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Hn=Lt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),A(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),D(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){A(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){D(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=M(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(M(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Yt(t)}}});O.addInitHook("addHandler","keyboard",Hn),O.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var qn=Lt.extend({addHooks:function(){A(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){D(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=hn(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),n),Yt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,o=i?Math.ceil(s/i)*i:s,d=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,d&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+d):t.setZoomAround(this._lastMousePos,e+d))}});O.addInitHook("addHandler","scrollWheelZoom",qn);var ko=600;O.mergeOptions({tapHold:S.touchNative&&S.safari&&S.mobile,tapTolerance:15});var Wn=Lt.extend({addHooks:function(){A(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){D(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new E(e.clientX,e.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(A(document,"touchend",Y),A(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),ko),A(document,"touchend touchcancel contextmenu",this._cancel,this),A(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){D(document,"touchend",Y),D(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),D(document,"touchend touchcancel contextmenu",this._cancel,this),D(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new E(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});O.addInitHook("addHandler","tapHold",Wn),O.mergeOptions({touchZoom:S.touch,bounceAtZoomLimits:!0});var Fn=Lt.extend({addHooks:function(){I(this._map._container,"leaflet-touch-zoom"),A(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){q(this._map._container,"leaflet-touch-zoom"),D(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),A(document,"touchmove",this._onTouchMove,this),A(document,"touchend touchcancel",this._onTouchEnd,this),Y(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var o=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&o.x===0&&o.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),ft(this._animRequest);var d=u(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=it(d,this,!0),Y(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ft(this._animRequest),D(document,"touchmove",this._onTouchMove,this),D(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});O.addInitHook("addHandler","touchZoom",Fn),O.BoxZoom=Nn,O.DoubleClickZoom=Dn,O.Drag=Zn,O.Keyboard=Hn,O.ScrollWheelZoom=qn,O.TapHold=Wn,O.TouchZoom=Fn,r.Bounds=Z,r.Browser=S,r.CRS=Mt,r.Canvas=zn,r.Circle=Pi,r.CircleMarker=$e,r.Class=Ct,r.Control=_t,r.DivIcon=An,r.DivOverlay=St,r.DomEvent=Fs,r.DomUtil=qs,r.Draggable=Ht,r.Evented=he,r.FeatureGroup=Et,r.GeoJSON=It,r.GridLayer=Pe,r.Handler=Lt,r.Icon=oe,r.ImageOverlay=qe,r.LatLng=N,r.LatLngBounds=st,r.Layer=yt,r.LayerGroup=se,r.LineUtil=no,r.Map=O,r.Marker=Oe,r.Mixin=Js,r.Path=qt,r.Point=E,r.PolyUtil=Qs,r.Polygon=ae,r.Polyline=At,r.Popup=We,r.PosAnimation=fn,r.Projection=so,r.Rectangle=$n,r.Renderer=Bt,r.SVG=Se,r.SVGOverlay=En,r.TileLayer=le,r.Tooltip=Fe,r.Transformation=Ye,r.Util=cs,r.VideoOverlay=Mn,r.bind=u,r.bounds=nt,r.canvas=Rn,r.circle=fo,r.circleMarker=ho,r.control=we,r.divIcon=To,r.extend=c,r.featureGroup=lo,r.geoJSON=Cn,r.geoJson=go,r.gridLayer=xo,r.icon=co,r.imageOverlay=vo,r.latLng=R,r.latLngBounds=F,r.layerGroup=ro,r.map=Vs,r.marker=uo,r.point=M,r.polygon=po,r.polyline=mo,r.popup=bo,r.rectangle=So,r.setOptions=x,r.stamp=g,r.svg=On,r.svgOverlay=yo,r.tileLayer=In,r.tooltip=wo,r.transformation=fe,r.version=f,r.videoOverlay=_o;var Co=window.L;r.noConflict=function(){return window.L=Co,this},window.L=r})})(Ei,Ei.exports);var Do=Ei.exports;const zt=No(Do),Zo="AquaGuardDB",Ho=2;let Ue=null;function Nt(){return Ue||(Ue=new Promise((a,l)=>{const r=indexedDB.open(Zo,Ho);r.onupgradeneeded=f=>{const c=f.target.result;if(c.objectStoreNames.contains("users")||c.createObjectStore("users",{keyPath:"username"}),!c.objectStoreNames.contains("waterTests")){const h=c.createObjectStore("waterTests",{keyPath:"id",autoIncrement:!0});h.createIndex("ward","ward",{unique:!1}),h.createIndex("username","username",{unique:!1}),h.createIndex("timestamp","timestamp",{unique:!1})}if(!c.objectStoreNames.contains("fieldTesterRequests")){const h=c.createObjectStore("fieldTesterRequests",{keyPath:"id",autoIncrement:!0});h.createIndex("username","username",{unique:!1}),h.createIndex("ward","ward",{unique:!1})}c.objectStoreNames.contains("wardData")||c.createObjectStore("wardData",{keyPath:"wardId"}),c.objectStoreNames.contains("syncQueue")||c.createObjectStore("syncQueue",{keyPath:"id",autoIncrement:!0})},r.onsuccess=f=>{const c=f.target.result;try{const u=c.transaction("fieldTesterRequests","readwrite").objectStore("fieldTesterRequests"),_=u.count();_.onsuccess=()=>{_.result===0&&(u.put({id:"FT-001",user_id:101,username:"geetha_m",household_name:"Geetha Menon",phone:"+91 94471 22334",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"TC 14/820, Hillside Lane, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Pending Field Tester Response",requested_time:"Today, 4:00 PM",notes:"Slight muddy odor after morning rainfall",created_at:new Date(Date.now()-36e5).toISOString()}),u.put({id:"FT-002",user_id:102,username:"ramesh_n",household_name:"Ramesh Nair",phone:"+91 94472 55667",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"House 22B, Temple Road, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Accepted",requested_time:"Tomorrow, 10:00 AM",notes:"Well water looks brownish after heavy downpour",created_at:new Date(Date.now()-72e5).toISOString()}),u.put({id:"FT-003",user_id:103,username:"deepa_t",household_name:"Deepa Thomas",phone:"+91 94473 88990",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"TC 19/410, Canal View, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Verified",requested_time:"Yesterday, 2:00 PM",test_result:"High Coliform Count",verification_status:"Confirmed Contamination",observations:"Laboratory strip test confirmed coliform presence. Ward sanitary committee informed.",notes:"Verified coliform contamination; ward notified.",created_at:new Date(Date.now()-864e5).toISOString()}))}}catch{}a(c)},r.onerror=f=>{console.error("IndexedDB open error:",f.target.error),l(f.target.error)}}),Ue)}async function qo(a){const l=await Nt();return new Promise((r,f)=>{const u=l.transaction("users","readonly").objectStore("users").get(a);u.onsuccess=()=>r(u.result||null),u.onerror=()=>f(u.error)})}async function Ft(a){const l=await Nt();return new Promise((r,f)=>{const u=l.transaction("users","readwrite").objectStore("users").put(a);u.onsuccess=()=>r(u.result),u.onerror=()=>f(u.error)})}async function Wo(a){const l=await Nt();return new Promise((r,f)=>{const c=l.transaction(["waterTests","syncQueue"],"readwrite"),h=c.objectStore("waterTests"),u=c.objectStore("syncQueue"),_=h.add(a);_.onsuccess=g=>{const b=g.target.result;a.id=b,a.synced||u.add({type:"WATER_TEST",data:a,timestamp:Date.now()})},c.oncomplete=()=>r(a),c.onerror=()=>f(c.error)})}async function Yn(){const a=await Nt();return new Promise((l,r)=>{const h=a.transaction("waterTests","readonly").objectStore("waterTests").getAll();h.onsuccess=()=>l(h.result||[]),h.onerror=()=>r(h.error)})}async function Jn(a){return(await Yn()).filter(r=>r.username===a)}async function Fo(a){const l=await Nt();return new Promise((r,f)=>{const c=l.transaction(["fieldTesterRequests","syncQueue"],"readwrite"),h=c.objectStore("fieldTesterRequests"),u=c.objectStore("syncQueue"),_=h.put(a);_.onsuccess=g=>{a.id||(a.id=g.target.result),a.synced||u.add({type:"FIELD_REQUEST",data:a,timestamp:Date.now()})},c.oncomplete=()=>r(a),c.onerror=()=>f(c.error)})}async function ce(a){const l=await Nt();return new Promise((r,f)=>{const u=l.transaction("fieldTesterRequests","readwrite").objectStore("fieldTesterRequests").put(a);u.onsuccess=()=>r(a),u.onerror=()=>f(u.error)})}async function Ii(){const a=await Nt();return new Promise((l,r)=>{const h=a.transaction("fieldTesterRequests","readonly").objectStore("fieldTesterRequests").getAll();h.onsuccess=()=>l(h.result||[]),h.onerror=()=>r(h.error)})}async function Bi(a){return(await Ii()).find(r=>String(r.id)===String(a))||null}async function Qn(a){return(await Ii()).filter(r=>r.username===a)}async function Vo(a){return(await Ii()).filter(r=>!!(r.field_tester_id&&String(r.field_tester_id)===String(a)||r.field_tester_name&&(r.field_tester_name===a||a==="Anil Kumar")||a===1||a==="1"||a==="tester1"||a==="anil_tester"))}async function Go(){const a=await Nt();return new Promise((l,r)=>{const h=a.transaction("syncQueue","readonly").objectStore("syncQueue").count();h.onsuccess=()=>l(h.result||0),h.onerror=()=>r(h.error)})}async function Uo(){const a=await Nt();return new Promise((l,r)=>{const f=a.transaction(["syncQueue","waterTests","fieldTesterRequests"],"readwrite"),c=f.objectStore("syncQueue"),h=f.objectStore("waterTests"),u=f.objectStore("fieldTesterRequests"),_=c.getAll();_.onsuccess=()=>{(_.result||[]).forEach(b=>{var w,P;if(b.type==="WATER_TEST"&&((w=b.data)!=null&&w.id)){const T=h.get(b.data.id);T.onsuccess=()=>{if(T.result){const k=T.result;k.synced=!0,h.put(k)}}}else if(b.type==="FIELD_REQUEST"&&((P=b.data)!=null&&P.id)){const T=u.get(b.data.id);T.onsuccess=()=>{if(T.result){const k=T.result;k.synced=!0,u.put(k)}}}}),c.clear()},f.oncomplete=()=>l(!0),f.onerror=()=>r(f.error)})}const Ot="aquaguard_active_session";typeof localStorage<"u"&&localStorage.removeItem("aquaguard_active_user");function zi(){try{const a=sessionStorage.getItem(Ot);return a?JSON.parse(a):null}catch{return null}}async function jo(a,l){if(!a||!l)throw new Error("Please enter both username and password/PIN.");const r=a.trim().toLowerCase();if(navigator.onLine)try{const h=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,pin:String(l).trim()})});if(h.ok){const u=await h.json().catch(()=>({}));if(u&&u.user)return sessionStorage.setItem(Ot,JSON.stringify(u.user)),await Ft(u.user),u.user}else if(h.status===401){const u=await h.json().catch(()=>({}));throw new Error(u.error||"Incorrect password/PIN. Please try again.")}}catch(h){if(h.message&&(h.message.includes("PIN")||h.message.includes("password")||h.message.includes("Incorrect")))throw h;console.warn("Network auth unavailable, falling back to local demo storage:",h)}const f={tester1:{id:1,name:"Anil Kumar",username:"tester1",pin:"tester123",role:"field_tester",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening"},anil_tester:{id:1,name:"Anil Kumar",username:"anil_tester",pin:"1234",role:"field_tester",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening"},sreya_tester:{id:2,name:"Sreya P.",username:"sreya_tester",pin:"1234",role:"field_tester",ward:"Ward 2",panchayat:"Puzhakkal Panchayat",lat:10.5081,lng:76.205,specialty:"Spectrophotometric Turbidity, Coliform Test Strip"},rahul_tester:{id:3,name:"Rahul K.",username:"rahul_tester",pin:"1234",role:"field_tester",ward:"Ward 4",panchayat:"Puzhakkal Panchayat",lat:10.5972,lng:76.205,specialty:"Residual Chlorine & Microbial Assay, Chemical Contaminants"},noura123:{id:4,name:"Noura",username:"noura123",pin:"1234",role:"household",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.545,lng:76.205}};if(f[r]){if(f[r].pin===String(l).trim())return sessionStorage.setItem(Ot,JSON.stringify(f[r])),await Ft(f[r]),f[r];throw new Error("Incorrect password/PIN. Please try again.")}const c=await qo(r);if(!c)throw new Error("Account not found locally. Please register or check credentials.");if(String(c.pin).trim()!==String(l).trim())throw new Error("Incorrect password/PIN. Please try again.");return sessionStorage.setItem(Ot,JSON.stringify(c)),c}async function Ko({name:a,username:l,pin:r,ward:f,panchayat:c,lat:h,lng:u}){if(!a||!a.trim())throw new Error("Please enter your full name.");if(!l||!l.trim())throw new Error("Please enter a username.");if(!r||!r.trim())throw new Error("Please set a PIN or password.");if(!f)throw new Error("Please select your ward.");const _=l.trim().toLowerCase();if(navigator.onLine)try{const b=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.trim(),username:_,pin:String(r).trim(),role:"household",ward:f.trim(),panchayat:c?c.trim():"Puzhakkal Panchayat",lat:h||10.545,lng:u||76.205})}),w=await b.json();if(b.ok&&w.user)return sessionStorage.setItem(Ot,JSON.stringify(w.user)),await Ft(w.user),w.user;if(b.status===409)throw new Error(w.error)}catch(b){if(b.message&&b.message.includes("already taken"))throw b;console.warn("Network registration failed, saving locally:",b)}const g={id:Date.now(),username:_,name:a.trim(),pin:r.trim(),role:"household",ward:f.trim(),panchayat:c?c.trim():"Puzhakkal Panchayat",lat:h||10.545,lng:u||76.205,createdAt:new Date().toISOString()};return await Ft(g),sessionStorage.setItem(Ot,JSON.stringify(g)),g}async function Yo({name:a,phone:l,username:r,pin:f,tester_reg_no:c,test_types:h,ward:u,panchayat:_,area:g,lat:b,lng:w}){if(!a||!a.trim())throw new Error("Please enter your full name.");if(!r||!r.trim())throw new Error("Please enter a username.");if(!f||!f.trim())throw new Error("Please set a PIN or password.");const P=r.trim().toLowerCase();if(navigator.onLine)try{const k=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.trim(),phone:l?l.trim():"+91 98471 00000",username:P,pin:String(f).trim(),tester_reg_no:c?c.trim():`FT-REG-${Math.floor(1e3+Math.random()*9e3)}`,test_types:h||"Water Quality & Coliform Analysis",role:"field_tester",ward:u?u.trim():"Ward 5",panchayat:_?_.trim():"Puzhakkal Panchayat",area:g?g.trim():"Ward 5 Community Area",lat:b||10.548,lng:w||76.202})}),z=await k.json();if(k.ok&&z.user)return await Ft(z.user),{success:!0,message:z.message||"Account created successfully. Please log in.",user:z.user};if(k.status===409)throw new Error(z.error)}catch(k){if(k.message&&k.message.includes("already taken"))throw k;console.warn("Network registration failed, saving locally:",k)}const T={id:Date.now(),username:P,name:a.trim(),phone:l?l.trim():"+91 98471 00000",pin:f.trim(),tester_reg_no:c?c.trim():`FT-REG-${Math.floor(1e3+Math.random()*9e3)}`,test_types:h||"Water Quality & Coliform Analysis",role:"field_tester",ward:u?u.trim():"Ward 5",panchayat:_?_.trim():"Puzhakkal Panchayat",area:g?g.trim():"Ward 5 Community Area",specialty:h||"Water Quality & Coliform Analysis",available:1,lat:b||10.548,lng:w||76.202,createdAt:new Date().toISOString()};return await Ft(T),{success:!0,message:"Account created successfully. Please log in.",user:T}}async function Jo(a,l){const r=zi();if(navigator.onLine)try{const c=await fetch(`/api/testers/${a||r.id}/profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),h=await c.json();if(c.ok&&h.profile){const u={...r,...h.profile};return sessionStorage.setItem(Ot,JSON.stringify(u)),await Ft(u),u}}catch(c){console.warn("Network profile update failed:",c)}const f={...r,...l};return sessionStorage.setItem(Ot,JSON.stringify(f)),await Ft(f),f}function Ri(){sessionStorage.removeItem(Ot),typeof localStorage<"u"&&localStorage.removeItem("aquaguard_active_user")}const et="Puzhakkal Panchayat",Wt=[{id:"Ward 1",name:"Ward 1 - Viyyoor North",panchayat:et,center:[10.5512,76.2155],rainfall:"Normal",rainfallMm:14,floodRisk:"Low",mosquitoRisk:"Low",responseStatus:"Normal",polygon:[[10.558,76.208],[10.559,76.222],[10.546,76.223],[10.544,76.21],[10.558,76.208]]},{id:"Ward 2",name:"Ward 2 - Puzhakkal Riverbanks",panchayat:et,center:[10.542,76.195],rainfall:"Heavy",rainfallMm:98,floodRisk:"High",mosquitoRisk:"High",responseStatus:"Monitoring Active",polygon:[[10.55,76.185],[10.552,76.205],[10.536,76.208],[10.533,76.188],[10.55,76.185]]},{id:"Ward 3",name:"Ward 3 - Amala Hills",panchayat:et,center:[10.562,76.178],rainfall:"Moderate",rainfallMm:42,floodRisk:"Low",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.57,76.168],[10.572,76.188],[10.555,76.19],[10.552,76.17],[10.57,76.168]]},{id:"Ward 4",name:"Ward 4 - Sobha City Environs",panchayat:et,center:[10.535,76.218],rainfall:"Moderate",rainfallMm:38,floodRisk:"Moderate",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.544,76.21],[10.545,76.228],[10.526,76.227],[10.525,76.211],[10.544,76.21]]},{id:"Ward 5",name:"Ward 5 - Central Market & Canal",panchayat:et,center:[10.545,76.205],rainfall:"Heavy",rainfallMm:112,floodRisk:"High",mosquitoRisk:"High",responseStatus:"Attention Required",polygon:[[10.552,76.198],[10.554,76.212],[10.538,76.214],[10.536,76.2],[10.552,76.198]]},{id:"Ward 6",name:"Ward 6 - Ayyanthole Border",panchayat:et,center:[10.528,76.198],rainfall:"Normal",rainfallMm:22,floodRisk:"Low",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.536,76.19],[10.537,76.206],[10.52,76.208],[10.518,76.192],[10.536,76.19]]},{id:"Ward 7",name:"Ward 7 - Muthuvara Junction",panchayat:et,center:[10.558,76.195],rainfall:"Normal",rainfallMm:18,floodRisk:"Low",mosquitoRisk:"Low",responseStatus:"Normal",polygon:[[10.566,76.188],[10.567,76.204],[10.552,76.205],[10.55,76.189],[10.566,76.188]]}],Qo=[{id:"base-1",username:"resident_anon1",ward:"Ward 5",panchayat:et,testType:"H2S Strip Test",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-14*36e5).toISOString().split("T")[0],time:"09:30",notes:"Black precipitate formed on paper strip after 18 hours.",location:[10.547,76.203],fieldVerification:{status:"Verified",referenceCode:"REF-FT-8421",date:new Date(Date.now()-8*36e5).toISOString().split("T")[0],verifiedBy:"Field Officer S. Nair",notes:"Coliform confirmed with dual-wavelength portable photometer.",result:"Abnormal"},labVerification:{status:"Recommended",notes:"Formal biological culture confirmation advised."},synced:!0,timestamp:Date.now()-14*36e5},{id:"base-2",username:"resident_anon2",ward:"Ward 5",panchayat:et,testType:"Field Coliform Kit",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-6*36e5).toISOString().split("T")[0],time:"14:15",notes:"Well water sample turned yellow with gas bubbles in vial.",location:[10.543,76.208],fieldVerification:{status:"Verified",referenceCode:"REF-FT-8422",date:new Date(Date.now()-2*36e5).toISOString().split("T")[0],verifiedBy:"Field Officer M. Varma",notes:"Spectrophotometric turbidity check 12 NTU.",result:"Abnormal"},labVerification:{status:"Pending",notes:"Sample dispatched to District Water Authority Lab."},synced:!0,timestamp:Date.now()-6*36e5},{id:"base-3",username:"resident_anon3",ward:"Ward 5",panchayat:et,testType:"Turbidity / Visual Check",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-20*36e5).toISOString().split("T")[0],time:"11:20",notes:"High brownish sediment following canal overflow.",location:[10.549,76.207],fieldVerification:{status:"Pending",referenceCode:"REF-FT-8425",date:null,verifiedBy:null,notes:"Field test visit scheduled for tomorrow morning.",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-20*36e5},{id:"base-4",username:"resident_anon4",ward:"Ward 5",panchayat:et,testType:"Chlorine Residual Test",testMethod:"Individual Screening",result:"Normal",date:new Date(Date.now()-28*36e5).toISOString().split("T")[0],time:"08:00",notes:"Chlorine residual present at 0.4 mg/L.",location:[10.541,76.202],fieldVerification:{status:"Not Required",referenceCode:null,date:null,verifiedBy:null,notes:"",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-28*36e5},{id:"base-5",username:"resident_anon5",ward:"Ward 2",panchayat:et,testType:"Turbidity / Visual Check",testMethod:"Individual Screening",result:"Inconclusive",date:new Date(Date.now()-18*36e5).toISOString().split("T")[0],time:"16:45",notes:"Water is slightly turbid after river level rise.",location:[10.54,76.192],fieldVerification:{status:"Pending",referenceCode:"REF-FT-8430",date:null,verifiedBy:null,notes:"Field visit assigned to Riverbank Health Inspector.",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-18*36e5},{id:"base-6",username:"resident_anon6",ward:"Ward 1",panchayat:et,testType:"Chlorine Residual Test",testMethod:"Individual Screening",result:"Normal",date:new Date(Date.now()-22*36e5).toISOString().split("T")[0],time:"11:00",notes:"Adequate free residual chlorine observed (0.5 mg/L).",location:[10.553,76.218],fieldVerification:{status:"Not Required",referenceCode:null,date:null,verifiedBy:null,notes:"",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-22*36e5}],Xo=[{name:"Puzhakkal River Flood Basin",polygon:[[10.553,76.182],[10.554,76.203],[10.535,76.206],[10.531,76.186]],severity:"High",description:"Active inundation risk along river catchment."},{name:"Ward 5 Lowland Drainage Zone",polygon:[[10.55,76.2],[10.551,76.21],[10.541,76.211],[10.54,76.201]],severity:"Moderate",description:"Surface runoff accumulation during heavy monsoon rain."}],ta=72*60*60*1e3,jn=3;async function Xn(){let a=[];try{a=await Yn()}catch(l){console.warn("Error reading IndexedDB tests:",l)}return[...Qo,...a]}function $t(a){if(!a)return!1;const l=String(a).toLowerCase();return l.includes("abnormal")||l.includes("positive")}async function ts(a){const l=await Xn(),r=Date.now(),f=l.filter(_=>_.ward===a),c=f.filter(_=>{if(!$t(_.result))return!1;const g=_.timestamp||(_.date?new Date(_.date).getTime():0);return r-g<=ta}),h=f.filter(_=>_.fieldVerification&&_.fieldVerification.status==="Verified");return{isPatternDetected:c.length>=jn,preliminaryPositiveCount:c.length,fieldVerifiedCount:h.length,threshold:jn,windowHours:72,alertTitle:"Possible Water-Quality Pattern",alertMessage:"Possible water-quality pattern detected based on multiple abnormal reports. Professional field verification is recommended.",recentPreliminaryPositives:c,fieldVerifiedPositives:h}}function es(a){return Wt.find(r=>r.id===a)||{id:a,name:a,panchayat:"Puzhakkal Panchayat",rainfall:"Normal",rainfallMm:20,floodRisk:"Low",responseStatus:"Normal",center:[10.545,76.205]}}async function is(a){const l=es(a),r=await ts(a),f=[];return r.isPatternDetected&&f.push({id:"alert-contamination",type:"contamination",severity:"hazard",badge:"Pattern Detected",title:r.alertTitle,message:r.alertMessage,details:`${r.preliminaryPositiveCount} preliminary abnormal reports recorded (${r.fieldVerifiedCount} professionally verified) in ${l.id}.`,alternateSolutions:[{id:"sol-boil",title:"Vigorous Rolling Boil Disinfection",tag:"Emergency Gold Standard",icon:"🔥",timeRequired:"10–15 mins",cost:"Household stove / Free",effectiveness:"Kills 99.99% of bacterial coliforms, E. coli, enteric viruses, and microbial cysts.",bestFor:"All immediate drinking water, cooking, and infant formula.",steps:["Filter raw water through clean micro-mesh or folded cotton cloth to remove suspended particulate matter.","Heat water to a continuous, vigorous rolling boil and maintain boiling for at least 1 to 3 minutes.","Allow water to cool naturally in a sterilized, covered stainless steel or glass container with a dedicated tap/ladle."]},{id:"sol-chlorine",title:"Point-of-Use Chlorination / Halazone Treatment",tag:"Large Storage & Overhead Tanks",icon:"💧",timeRequired:"30 mins contact time",cost:"Minimal (Available at PHC / Panchayat)",effectiveness:"Provides lasting residual antimicrobial protection against bacterial regrowth for up to 48 hours.",bestFor:"Overhead storage tanks, 20L water cans, and well reservoirs.",steps:["Add 1 standard chlorine / Halazone tablet (0.5g) or 4 drops of 0.5% sodium hypochlorite per 20 Litres of clear water.","Stir thoroughly and let stand covered in shade for at least 30 minutes before first consumption.","A faint chlorine scent confirms active residual disinfection against secondary bacterial contamination."]},{id:"sol-kiosk",title:"Ward 5 Community Safe Water Kiosk",tag:"Free Municipal RO/UV Supply",icon:"🏢",timeRequired:"Available 7:00 AM – 7:00 PM",cost:"Free Public Service",effectiveness:"Certified multi-stage reverse osmosis + ultraviolet sterilized municipal safe water.",bestFor:"Households with persistent well discoloration, turbidity, or foul odor.",steps:["Visit the Panchayat Clean Water Distribution Kiosk at Ward 5 Civic Centre (0.8 km).","Bring clean food-grade containers for daily 25L household allocation.","Water quality is verified twice daily with automated digital TDS and microbiological monitoring."]},{id:"sol-tester",title:"Request Certified Field Tester Verification",tag:"Professional On-Site Test",icon:"🧪",timeRequired:"Scheduled Visit",cost:"Subsidized",action:"book_tester",effectiveness:"Official on-site photometer turbidity analysis and verified coliform strip assay for ward response.",bestFor:"Residents requiring official verification to trigger municipal sanitization.",steps:["Schedule a certified nearby Field Tester (e.g. Anil Kumar, 2.3 km away) to visit your residence.","Tester performs on-site photometer turbidity & chemical screening with rapid microbial vial incubation.","Verification results are officially submitted to ward health records and local response committees."]}]}),l.rainfall==="Heavy"&&f.push({id:"alert-rainfall",type:"rainfall",severity:"warning",badge:"Heavy Rainfall",title:"Heavy Rainfall Alert",message:"Heavy rainfall has been detected in your ward. Local water sources may be affected. Consider checking your drinking water.",details:`Observed precipitation: ${l.rainfallMm}mm in the last 24 hours.`,alternateSolutions:[{id:"sol-wellhead",title:"Wellhead Elevation & Sandbag Bunding",tag:"Surface Runoff Protection",icon:"🧱",timeRequired:"30 mins",cost:"Low / Household effort",effectiveness:"Blocks 95% of agricultural and stormwater surface runoff from draining into well shafts.",bestFor:"Low-lying ring wells and wells near roadside storm drains.",steps:["Stack a double-tier sandbag ring (min 0.5m height) tightly around the well parapet rim.","Dig a 15cm shallow diversion trench around the apron to redirect stormwater away from wellhead.","Ensure the well opening is covered with a watertight lid or waterproof tarpaulin."]},{id:"sol-firstflush",title:"Rainwater Harvesting First-Flush Diversion",tag:"Roof Runoff Protection",icon:"🌧️",timeRequired:"10–15 mins",cost:"Zero",effectiveness:"Prevents atmospheric soot, bird droppings, and roof grit from fouling clean storage cisterns.",bestFor:"Households utilizing rooftop rainwater harvesting.",steps:["Open the first-flush bypass drain for the first 15–20 minutes of intense rainfall.","Allow initial dirty wash to drain out before switching water flow to main storage tank.","Engage secondary gravel-sand filter and add 1 potassium permanganate crystal for preventive biological inhibition."]},{id:"sol-tanker",title:"Emergency Potable Water Tanker Helpline",tag:"Municipal Emergency Cell",icon:"🚛",timeRequired:"Dispatched within 2–4 hours",cost:"Free Municipal Assistance",effectiveness:"Guaranteed safe drinking water delivered directly during storm events.",bestFor:"Households whose domestic wells have turned murky or flooded.",steps:["Contact the Puzhakkal Disaster Management Water Desk at toll-free 1800-425-9283.","Provide your Ward (Ward 5) and landmark for urgent water bowser routing.","Emergency bowsers will deliver 50L drinking water per family directly."]}]}),l.floodRisk==="High"&&f.push({id:"alert-flood",type:"flood",severity:"warning",badge:"Flood Warning",title:"Flood Risk Alert",message:"Your location is within or near a potentially affected area. Follow local safety guidance and consider checking your drinking water.",details:`River and canal levels elevated in ${l.name}.`,alternateSolutions:[{id:"sol-shock",title:"Well Shock Chlorination (Post-Inundation Protocol)",tag:"Disinfection Protocol",icon:"🧴",timeRequired:"Overnight (12 hours)",cost:"₹50 Bleaching powder",effectiveness:"Sterilizes floodwater contaminants, coliform bacteria, and soil microbes in well shaft.",bestFor:"Wells submerged or surrounded by floodwaters.",steps:["Pump out murky standing water once external flood levels recede below the apron.","Prepare a slurry of 50g fresh bleaching powder (33% active chlorine) per 1000 Litres of well volume.","Pour slurry around the interior walls, agitate water vigorously, and let stand for 12 hours before pumping out."]},{id:"sol-relief-water",title:"PHC Emergency Potable Water Cans",tag:"Immediate Relief",icon:"🚰",timeRequired:"Instant pickup",cost:"Free Relief Supply",effectiveness:"Sealed food-grade potable drinking supply distributed by health volunteers.",bestFor:"Residents whose household water sources are currently inundated.",steps:["Visit the Ward Flood Relief Camp at Government UP School.","Collect 10L sealed potable water cans and chlorine purification sachets.","Report any gastrointestinal illness immediately to the on-site Medical Officer."]}]}),(l.rainfall==="Heavy"||l.floodRisk==="High")&&f.push({id:"alert-mosquito",type:"mosquito",severity:"warning",badge:"Vector Risk",title:"Stagnant Water & Mosquito Breeding Hazard",message:"Recent rain and pooled surface water elevate mosquito breeding risks. Take preventative source reduction measures.",details:`Stagnant water pockets detected across low-lying zones in ${l.name}.`,alternateSolutions:[{id:"sol-dryday",title:'Weekly "Dry Day" Source Elimination',tag:"Community Source Reduction",icon:"🧹",timeRequired:"20 mins every Sunday",cost:"Zero",effectiveness:"Disrupts Aedes aegypti mosquito breeding cycle; prevents dengue and chikungunya outbreak.",bestFor:"All household yards, terraces, and open storage compounds.",steps:["Inspect outdoor flowerpot trays, air cooler bases, coconut shells, and tarpaulin folds.","Empty standing water, scrub container inner walls to dislodge mosquito eggs, and invert containers.","Ensure rooftop drains and sunshades flow freely without water pooling."]},{id:"sol-mesh",title:"Mosquito Mesh Screening on Wells & Vents",tag:"Physical Barrier",icon:"🕸️",timeRequired:"One-time setup",cost:"Low (Nylon mesh ₹80)",effectiveness:"Completely blocks adult mosquitoes from accessing dark humid well shafts for egg laying.",bestFor:"Open domestic ring wells and overhead rainwater tank vent pipes.",steps:["Cover the open mouth of domestic wells with durable 40-mesh nylon or stainless steel screening.","Ensure screening is anchored snugly with weighted cord around the concrete parapet.","Inspect and cover overflow pipes of overhead tanks with fine mesh."]},{id:"sol-guppy",title:"Biological Larvicide & Guppy Fish Deployment",tag:"Biological Control",icon:"🐟",timeRequired:"Single release",cost:"Free from PHC",effectiveness:"Larvivorous fish consume up to 100 mosquito larvae per day in standing water.",bestFor:"Ornamental garden pools, farm ponds, and agricultural open wells.",steps:["Collect Gambusia or Poecilia reticulata (Guppy) fingerlings from the Primary Health Centre.","Introduce 5–10 fingerlings into unsealed water storage bodies or farm ponds.","Avoid applying chemical bleach or pesticides in water bodies containing bio-control fish."]}]}),f.length===0&&f.push({id:"alert-preventive",type:"preventive",severity:"info",badge:"Preventive Safety",title:"Standard Water Safety & Treatment Alternatives",message:"Conditions in your ward are currently stable. Maintain baseline disinfection and monitoring protocols.",details:`Baseline surveillance active in ${l.name}. No critical environmental hazards detected.`,alternateSolutions:[{id:"sol-routine-boil",title:"Routine Household Boiling",tag:"Daily Best Practice",icon:"🔥",timeRequired:"10 mins",cost:"Domestic stove",effectiveness:"Provides complete baseline microbial safety against seasonal waterborne bacteria.",bestFor:"Routine daily drinking and infant care.",steps:["Bring daily drinking water to a full rolling boil for 1 minute.","Store in clean, non-corrosive vessels with secure lids.","Clean water storage jugs daily with hot water."]},{id:"sol-gravity-filter",title:"Ceramic Gravity Candle Filtration",tag:"Point-of-Use Physical Filter",icon:"🏺",timeRequired:"Continuous passive filtration",cost:"One-time filter purchase",effectiveness:"0.2-micron ceramic micro-pores remove 99% of particulate sediment, protozoa, and cysts.",bestFor:"Everyday household tap and well water clarity.",steps:["Pour well or tap water into the upper chamber of a dual-chamber stainless steel gravity filter.","Scrub ceramic filter candles weekly with a soft brush under clean running water (no soap).","Pair with light chlorination or boiling for comprehensive bacterial barrier."]},{id:"sol-periodic-test",title:"Monthly Self Water Quality Screening",tag:"Household Vigilance",icon:"🧪",timeRequired:"5 mins",cost:"Free test strips",action:"self_test",effectiveness:"Detects sudden changes in pH, turbidity, or microbial contamination before health risks emerge.",bestFor:"Monthly routine monitoring of domestic wells.",steps:['Use the AquaGuard "Test Water" tool to log monthly baseline readings.',"Check clarity, odor, and color changes after seasonal rains.","Request certified Field Tester if any anomaly is observed."]}]}),{ward:l,contamination:r,alerts:f}}async function ns(a){const r=(await Xn()).filter(w=>w.ward===a),f=es(a),c=await ts(a),h=r.length,u=r.filter(w=>$t(w.result)).length,_=r.filter(w=>w.fieldVerification&&w.fieldVerification.status==="Verified").length;let g="Normal";c.isPatternDetected?g="Attention Required":(f.rainfall==="Heavy"||f.floodRisk==="High")&&(g="Monitoring Active");const b=r.sort((w,P)=>(P.timestamp||0)-(w.timestamp||0)).slice(0,8).map(w=>{const P=$t(w.result),T=w.fieldVerification&&w.fieldVerification.status==="Verified";let k="";return T?k=`Field-verified report logged in ${w.ward} (${w.testType}) - Ref ${w.fieldVerification.referenceCode||"Verified"}.`:P?k=`Preliminary abnormal water screening logged in ${w.ward} (${w.testType}).`:k=`Preliminary normal water screening recorded in ${w.ward} (${w.testType}).`,{id:w.id,text:k,isPositive:P,isVerified:T,result:w.result,date:w.date,time:w.time}});return{wardId:a,wardName:f.name,panchayat:f.panchayat,totalReports:h,preliminaryPositiveReports:u,fieldVerifiedReports:_,rainfallDetected:f.rainfall==="Heavy"?"Heavy rainfall detected":`${f.rainfall} rainfall`,rainfallMm:f.rainfallMm,floodRisk:f.floodRisk,contaminationPattern:c.isPatternDetected?"Detected":"None detected",isContaminatedPattern:c.isPatternDetected,responseStatus:g,feed:b}}let vt="home",J="dashboard",tt="household",Qt="login",bt="",ht=!navigator.onLine,lt="optionA",rt=null,Rt=10,je=null,ut={household:!0,wards:!0,preliminary:!0,verified:!0,hazard:!0,clusters:!0};document.addEventListener("DOMContentLoaded",()=>{ea(),at()});function ea(){window.addEventListener("online",async()=>{ht=!1,Ai(),await ss(),wt()}),window.addEventListener("offline",()=>{ht=!0,Ai(),wt()})}function ia(){ht=!ht,Ai(),ht||ss(),wt()}async function ss(){try{const a=await Go();a>0&&(await Uo(),dt(`Synchronized ${a} locally stored records.`))}catch(a){console.warn("Sync error:",a)}}function at(){const a=document.getElementById("app");if(!a)return;const l=zi();if(!l){a.innerHTML=na(),sa();return}l.role==="field_tester"?oa(a,l):ca(a)}function Ai(){const a=document.getElementById("statusBadge"),l=document.getElementById("btnToggleOffline");a&&(a.className=`status-pill ${ht?"offline":"online"}`,a.innerHTML=`
      <span class="status-dot"></span>
      <span>${ht?"Offline":"Online – Sync Available"}</span>
    `),l&&(l.textContent=ht?"Go Online":"Simulate Offline")}function na(){return Qt==="register"?`
      <div class="auth-wrapper">
        <div class="auth-hero">
          <div class="auth-logo">
            <svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
          <h1 class="auth-title">Create Household Account</h1>
          <p class="auth-subtitle">Register your household in AquaGuard</p>
        </div>

        <div class="auth-card">
          <form id="formRegister">
            <div id="authErrorMsg"></div>

            <div class="form-group">
              <label class="form-label" for="regName">Household Representative Name</label>
              <input type="text" class="form-control" id="regName" placeholder="e.g. Noura" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="regUsername">Username</label>
              <input type="text" class="form-control" id="regUsername" placeholder="e.g. noura123" required autocomplete="username" />
            </div>

            <div class="form-group">
              <label class="form-label" for="regPin">Password or PIN</label>
              <input type="password" class="form-control" id="regPin" placeholder="e.g. 1234" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="regWard">Ward</label>
              <select class="form-control" id="regWard" required>
                ${Wt.map(a=>`<option value="${a.id}" ${a.id==="Ward 5"?"selected":""}>${a.name}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="regPanchayat">Panchayat</label>
              <input type="text" class="form-control" id="regPanchayat" value="${et}" required />
            </div>

            <button type="submit" class="btn btn-primary" id="btnSubmitRegister" style="margin-top: 10px;">
              Create Household Account
            </button>
            <button type="button" class="btn btn-secondary" id="btnGoToLogin" style="margin-top: 8px;">
              Back to Login
            </button>
          </form>
        </div>
      </div>
    `:Qt==="register_tester"?`
      <div class="auth-wrapper">
        <div class="auth-hero">
          <div class="auth-logo" style="background: var(--accent-teal-gradient);">
            <svg viewBox="0 0 24 24" fill="#ffffff"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h1 class="auth-title">Create Field Tester Account</h1>
          <p class="auth-subtitle">Register as a Certified Water Quality Field Tester</p>
        </div>

        <div class="auth-card">
          <form id="formRegisterTester">
            <div id="authErrorMsg"></div>

            <div class="form-group">
              <label class="form-label" for="regTesterName">Full Name *</label>
              <input type="text" class="form-control" id="regTesterName" placeholder="e.g. Priya Varma" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="regTesterPhone">Phone Number *</label>
              <input type="tel" class="form-control" id="regTesterPhone" placeholder="e.g. +91 98471 23456" required />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group">
                <label class="form-label" for="regTesterUsername">Username *</label>
                <input type="text" class="form-control" id="regTesterUsername" placeholder="e.g. priya_tester" required autocomplete="username" />
              </div>

              <div class="form-group">
                <label class="form-label" for="regTesterPin">Password / PIN *</label>
                <input type="password" class="form-control" id="regTesterPin" placeholder="e.g. 1234" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="regTesterRegNo">Field Tester ID / Registration No</label>
              <input type="text" class="form-control" id="regTesterRegNo" placeholder="e.g. FT-REG-8492" value="FT-REG-${Math.floor(1e3+Math.random()*9e3)}" />
            </div>

            <!-- Test Types Multi-Select -->
            <div class="form-group">
              <label class="form-label">Test Types You Can Perform *</label>
              <div style="display: flex; flex-direction: column; gap: 6px; background: rgba(15, 23, 42, 0.6); padding: 10px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-size: 0.82rem;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Water Quality & Coliform Analysis" checked />
                  <span>Water Quality & Coliform Analysis</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Turbidity & pH Screening" checked />
                  <span>Turbidity & pH Screening</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Residual Chlorine & Microbial Assay" />
                  <span>Residual Chlorine & Microbial Assay</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Chemical Contaminants & TDS" />
                  <span>Chemical Contaminants & TDS</span>
                </label>
              </div>
            </div>

            <!-- Current Location Section -->
            <div class="form-group" style="margin-top: 14px;">
              <label class="form-label">Current Service Location *</label>
              <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                <button type="button" class="btn btn-sm btn-primary" id="btnTesterUseGeo" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">
                  📍 Use My Current Location
                </button>
                <button type="button" class="btn btn-sm btn-secondary" id="btnTesterManualLoc" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">
                  ✏️ Enter Location Manually
                </button>
              </div>

              <!-- Location Details Card -->
              <div id="testerLocationCard" style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px; font-size: 0.84rem; line-height: 1.6;">
                <div id="testerGeoStatus" style="color: #38bdf8; margin-bottom: 6px; font-weight: 600;">
                  📍 Default: Puzhakkal Panchayat, Ward 5
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterWard">Ward</label>
                    <select class="form-control" id="regTesterWard" style="font-size: 0.8rem; padding: 6px 8px;">
                      ${Wt.map(a=>`<option value="${a.id}" ${a.id==="Ward 5"?"selected":""}>${a.name}</option>`).join("")}
                    </select>
                  </div>
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterPanchayat">Panchayat</label>
                    <input type="text" class="form-control" id="regTesterPanchayat" value="${et}" style="font-size: 0.8rem; padding: 6px 8px;" />
                  </div>
                </div>

                <div class="form-group" style="margin-top: 8px; margin-bottom: 6px;">
                  <label class="form-label" style="font-size: 0.75rem;" for="regTesterArea">Community / Area</label>
                  <input type="text" class="form-control" id="regTesterArea" value="Ward 5 / Puzhakkal North" placeholder="e.g. Ward 5 / Puzhakkal North" style="font-size: 0.8rem; padding: 6px 8px;" />
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterLat">Latitude</label>
                    <input type="number" step="0.0001" class="form-control" id="regTesterLat" value="10.548" style="font-size: 0.8rem; padding: 6px 8px;" />
                  </div>
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterLng">Longitude</label>
                    <input type="number" step="0.0001" class="form-control" id="regTesterLng" value="76.202" style="font-size: 0.8rem; padding: 6px 8px;" />
                  </div>
                </div>
              </div>

              <!-- Brief explanation note -->
              <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 6px; line-height: 1.4;">
                ℹ️ <em>Location coordinates are used to match households with nearby certified Field Testers. Your exact home address is never revealed to households.</em>
              </div>
            </div>

            <button type="submit" class="btn btn-primary" id="btnSubmitRegisterTester" style="margin-top: 12px;">
              Create Field Tester Account
            </button>
            <button type="button" class="btn btn-secondary" id="btnGoToLoginFromTesterReg" style="margin-top: 8px;">
              ← Back to Field Tester Login
            </button>
          </form>
        </div>
      </div>
    `:`
    <div class="auth-wrapper">
      <div class="auth-hero">
        <div class="auth-logo">
          <svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
        </div>
        <h1 class="auth-title">AquaGuard</h1>
        <p class="auth-subtitle">Household Water Safety & Community Alert System</p>
        <span class="offline-ready-indicator">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Offline Login Available
        </span>
      </div>

      <!-- SUCCESS MESSAGE BANNER IF ACCOUNT CREATED -->
      ${bt?`
        <div style="max-width: 440px; margin: 0 auto 14px auto; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #a7f3d0; padding: 12px 16px; border-radius: 10px; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span><strong>${bt}</strong></span>
        </div>
      `:""}

      <!-- TWO LARGE VISIBLE OPTIONS -->
      <div class="role-choice-grid">
        <div class="role-choice-tile ${tt==="household"?"active":""}" id="tileRoleHousehold">
          <div class="role-tile-icon">🏠</div>
          <div class="role-tile-title">Household User</div>
          <div class="role-tile-desc">Log in as Household User</div>
        </div>

        <div class="role-choice-tile ${tt==="field_tester"?"active":""}" id="tileRoleTester">
          <div class="role-tile-icon">🧪</div>
          <div class="role-tile-title">Field Tester</div>
          <div class="role-tile-desc">Log in as Field Tester</div>
        </div>
      </div>

      <div class="auth-card">
        <div style="font-weight: 700; font-size: 1.05rem; color: #fff; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>${tt==="household"?"🏠 Household Login":"🧪 Field Tester Login"}</span>
        </div>

        <form id="formLogin">
          <div id="authErrorMsg"></div>

          <div class="form-group">
            <label class="form-label" for="loginUsername">
              ${tt==="household"?"Household Username":"Field Tester Username"}
            </label>
            <input type="text" class="form-control" id="loginUsername" 
              placeholder="${tt==="household"?"e.g. noura123":"e.g. tester1"}" 
              required autocomplete="username" />
          </div>

          <div class="form-group">
            <label class="form-label" for="loginPin">Password / PIN</label>
            <input type="password" class="form-control" id="loginPin" 
              placeholder="${tt==="household"?"e.g. 1234":"e.g. tester123"}" 
              required />
          </div>

          <button type="submit" class="btn btn-primary" id="btnLogin" style="margin-top: 8px;">
            ${tt==="household"?"Login as Household":"Login as Field Tester"}
          </button>

          ${tt==="household"?`
            <button type="button" class="btn btn-secondary" id="btnGoToRegister" style="margin-top: 8px;">
              Create Household Account
            </button>
          `:`
            <!-- Clearly visible Create Field Tester Account option -->
            <button type="button" class="btn btn-secondary" id="btnGoToTesterRegister" style="margin-top: 8px;">
              Create Field Tester Account
            </button>

            <!-- Visibly provided demo credentials -->
            <div class="demo-creds-banner" style="margin-top: 14px;">
              <div><strong>Demo Field Tester:</strong></div>
              <div>Username: <code>tester1</code> (or <code>anil_tester</code>)</div>
              <div>Password: <code>tester123</code> (or <code>1234</code>)</div>
              <button type="button" class="btn-autofill-demo" id="btnAutofillTester">
                ⚡ Auto-fill Tester Demo Login
              </button>
            </div>
          `}
        </form>
      </div>
    </div>
  `}function sa(){var f,c,h,u,_,g,b,w,P;(f=document.getElementById("tileRoleHousehold"))==null||f.addEventListener("click",()=>{tt="household",bt="",at()}),(c=document.getElementById("tileRoleTester"))==null||c.addEventListener("click",()=>{tt="field_tester",bt="",at()}),(h=document.getElementById("btnGoToRegister"))==null||h.addEventListener("click",()=>{Qt="register",bt="",at()}),(u=document.getElementById("btnGoToTesterRegister"))==null||u.addEventListener("click",()=>{Qt="register_tester",bt="",at()}),(_=document.getElementById("btnGoToLogin"))==null||_.addEventListener("click",()=>{Qt="login",bt="",at()}),(g=document.getElementById("btnGoToLoginFromTesterReg"))==null||g.addEventListener("click",()=>{Qt="login",tt="field_tester",bt="",at()}),(b=document.getElementById("btnAutofillTester"))==null||b.addEventListener("click",()=>{const T=document.getElementById("loginUsername"),k=document.getElementById("loginPin");T&&k&&(T.value="tester1",k.value="tester123")}),(w=document.getElementById("btnTesterUseGeo"))==null||w.addEventListener("click",()=>{const T=document.getElementById("testerGeoStatus"),k=document.getElementById("regTesterLat"),z=document.getElementById("regTesterLng"),x=document.getElementById("regTesterArea");if(!navigator.geolocation){alert("Geolocation is not supported by your browser.");return}T&&(T.innerHTML="⏳ Acquiring GPS location..."),navigator.geolocation.getCurrentPosition(W=>{const Q=W.coords.latitude,Tt=W.coords.longitude;k&&(k.value=Q.toFixed(4)),z&&(z.value=Tt.toFixed(4)),T&&(T.innerHTML=`✓ GPS Locked: ${Q.toFixed(4)}, ${Tt.toFixed(4)}`),x&&(!x.value||x.value.includes("Default"))&&(x.value="Ward 5 / Puzhakkal Sector"),dt("Acquired current GPS coordinates.")},W=>{k&&(k.value="10.548"),z&&(z.value="76.202"),T&&(T.innerHTML="📍 Using local service coordinates (Puzhakkal)"),dt("Could not acquire GPS, using approximate local coordinates.")},{timeout:8e3})}),(P=document.getElementById("btnTesterManualLoc"))==null||P.addEventListener("click",()=>{const T=document.getElementById("regTesterArea"),k=document.getElementById("testerGeoStatus");T&&T.focus(),k&&(k.innerHTML="✏️ Manual Entry Mode: adjust Ward, Area, and Coordinates")});const a=document.getElementById("formLogin");a==null||a.addEventListener("submit",async T=>{T.preventDefault();const k=document.getElementById("loginUsername").value,z=document.getElementById("loginPin").value,x=document.getElementById("authErrorMsg");try{await jo(k,z),vt="home",J="dashboard",bt="",at()}catch(W){x&&(x.innerHTML=`<div class="notice-box notice-offline">${W.message}</div>`)}});const l=document.getElementById("formRegister");l==null||l.addEventListener("submit",async T=>{T.preventDefault();const k=document.getElementById("regName").value,z=document.getElementById("regUsername").value,x=document.getElementById("regPin").value,W=document.getElementById("regWard").value,Q=document.getElementById("regPanchayat").value,Tt=document.getElementById("authErrorMsg"),U=Wt.find(kt=>kt.id===W);try{await Ko({name:k,username:z,pin:x,ward:W,panchayat:Q,lat:U?U.center[0]:10.545,lng:U?U.center[1]:76.205}),vt="home",bt="",at()}catch(kt){Tt&&(Tt.innerHTML=`<div class="notice-box notice-offline">${kt.message}</div>`)}});const r=document.getElementById("formRegisterTester");r==null||r.addEventListener("submit",async T=>{T.preventDefault();const k=document.getElementById("regTesterName").value,z=document.getElementById("regTesterPhone").value,x=document.getElementById("regTesterUsername").value,W=document.getElementById("regTesterPin").value,Q=document.getElementById("regTesterRegNo").value,Tt=document.getElementById("regTesterWard").value,U=document.getElementById("regTesterPanchayat").value,kt=document.getElementById("regTesterArea").value,Xt=parseFloat(document.getElementById("regTesterLat").value)||10.548,ue=parseFloat(document.getElementById("regTesterLng").value)||76.202,Gt=document.getElementById("authErrorMsg"),ke=document.querySelectorAll('input[name="testerTestTypes"]:checked'),te=Array.from(ke).map(Dt=>Dt.value).join(", ");if(!te){Gt&&(Gt.innerHTML='<div class="notice-box notice-offline">Please select at least one test type you can perform.</div>');return}try{const Dt=await Yo({name:k,phone:z,username:x,pin:W,tester_reg_no:Q,test_types:te,ward:Tt,panchayat:U,area:kt,lat:Xt,lng:ue});Qt="login",tt="field_tester",bt=Dt.message||"Account created successfully. Please log in.",at()}catch(Dt){Gt&&(Gt.innerHTML=`<div class="notice-box notice-offline">${Dt.message}</div>`)}})}function oa(a,l){var r;a.innerHTML=`
    <header class="app-header">
      <div class="brand-badge" id="btnHeaderTester">
        <div class="brand-icon" style="background: var(--accent-teal-gradient);">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span class="brand-name">AquaGuard <small style="font-size: 0.65rem; color: #38bdf8;">INSPECTOR</small></span>
      </div>
      <div class="header-actions">
        <button class="btn btn-sm btn-danger" id="btnTesterLogoutHeader" style="width: auto; padding: 4px 10px; font-size: 0.74rem;">
          Logout
        </button>
      </div>
    </header>

    <main class="view-container" id="mainContent">
      <!-- Tester Dynamic Content -->
    </main>

    <!-- Field Tester Bottom Nav -->
    <nav class="bottom-nav">
      <button class="nav-item ${J==="dashboard"?"active":""}" data-ttab="dashboard">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>Dashboard</span>
      </button>
      <button class="nav-item ${J==="new"?"active":""}" data-ttab="new">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
        <span>New Requests</span>
      </button>
      <button class="nav-item ${J==="accepted"?"active":""}" data-ttab="accepted">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Accepted</span>
      </button>
      <button class="nav-item ${J==="completed"?"active":""}" data-ttab="completed">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        <span>Completed</span>
      </button>
      <button class="nav-item ${J==="profile"?"active":""}" data-ttab="profile">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </button>
    </nav>

    <div id="modalHost"></div>
  `,(r=document.getElementById("btnTesterLogoutHeader"))==null||r.addEventListener("click",()=>{Ri(),tt="household",at()}),document.querySelectorAll(".bottom-nav .nav-item").forEach(f=>{f.addEventListener("click",c=>{J=c.currentTarget.getAttribute("data-ttab"),Vt(l)})}),Vt(l)}async function Vt(a){const l=document.getElementById("mainContent");if(!l)return;let r=[],f={new_requests:1,accepted:1,completed:1,pending_results:0};try{const h=await fetch(`/api/requests?role=field_tester&user_id=${a.id||1}`);if(h.ok)r=(await h.json()).requests||[];else throw new Error("API not available")}catch{r=await Vo(a.id||a.name)}try{const h=await fetch(`/api/testers/stats/${a.id||1}`);if(h.ok)f=await h.json();else throw new Error("API stats not available")}catch{const u=r.filter(b=>b.status==="Pending"||b.status==="Pending Field Tester Response"||b.status==="Time Change Suggested").length,_=r.filter(b=>b.status==="Accepted"||b.status==="Test In Progress").length,g=r.filter(b=>b.status==="Test Completed"||b.status==="Verified").length;f={new_requests:u,accepted:_,completed:g,pending_results:r.filter(b=>b.status==="Test In Progress").length}}let c=r;if(J==="new"?c=r.filter(h=>h.status==="Pending"||h.status==="Pending Field Tester Response"||h.status==="Time Change Suggested"):J==="accepted"?c=r.filter(h=>h.status==="Accepted"||h.status==="Test In Progress"):J==="completed"&&(c=r.filter(h=>h.status==="Test Completed"||h.status==="Verified")),J==="profile"){as(l,a);return}l.innerHTML=`
    <!-- Top Greeting Header -->
    <div class="user-banner" style="background: linear-gradient(135deg, rgba(20, 184, 166, 0.22) 0%, rgba(30, 41, 59, 0.9) 100%); border-color: rgba(20, 184, 166, 0.4);">
      <div>
        <h2 class="user-greeting">Hello, ${a.name.split(" ")[0]}</h2>
        <div class="user-subtext" style="color: #5eead4;">
          <span>Field Tester • ${a.ward||"Ward 5"}</span>
        </div>
      </div>
      <div>
        <span class="badge badge-safe">Inspector Online</span>
      </div>
    </div>

    <!-- Summary Metrics Cards (Exact Specification: New Requests 3, Accepted 2, Completed 5, Pending Results 1) -->
    <div class="tester-metrics-grid">
      <div class="metric-card">
        <div class="metric-val" style="color: #fbbf24;">${f.new_requests}</div>
        <div class="metric-lbl">New Requests</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: #38bdf8;">${f.accepted}</div>
        <div class="metric-lbl">Accepted</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: #34d399;">${f.completed}</div>
        <div class="metric-lbl">Completed</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: #c084fc;">${f.pending_results}</div>
        <div class="metric-lbl">Pending Results</div>
      </div>
    </div>

    <!-- Tester Sub-Navigation Tabs -->
    <div class="tester-nav-tabs">
      <button class="tester-nav-tab ${J==="dashboard"?"active":""}" data-tab="dashboard">
        Dashboard All
      </button>
      <button class="tester-nav-tab ${J==="new"?"active":""}" data-tab="new">
        New Requests
      </button>
      <button class="tester-nav-tab ${J==="accepted"?"active":""}" data-tab="accepted">
        Accepted Requests
      </button>
      <button class="tester-nav-tab ${J==="completed"?"active":""}" data-tab="completed">
        Completed Tests
      </button>
    </div>

    <!-- Incoming Test Requests Section -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
          Incoming Test Requests
        </h3>
        <span class="badge badge-info">${c.length} Showing</span>
      </div>

      <div id="testerRequestsList">
        ${c.length>0?c.map(h=>aa(h)).join(""):'<div style="text-align: center; padding: 20px; color: var(--text-dim);">No requests matching this view.</div>'}
      </div>
    </div>
  `,ra(a,r)}function aa(a){const l=a.status==="Pending",r=a.status==="Accepted",f=a.status==="Test In Progress",c=a.status==="Test Completed"||a.status==="Verified";return`
    <div class="request-card">
      <div class="request-header">
        <span class="request-id">Request ${a.id}</span>
        <span class="badge ${c?"badge-safe":r?"badge-info":f||l?"badge-warn":"badge-danger"}">${a.status}</span>
      </div>

      <div class="request-meta-grid">
        <div>Household: <strong style="color: #fff;">${a.household_name}</strong></div>
        <div>Ward: <strong>${a.ward}</strong></div>
        <div>Distance: <strong>${a.distance_km||2.3} km</strong></div>
        <div>Test Type: <strong>${a.test_type}</strong></div>
        <div>Requested Time: <strong>${a.requested_date||"Today"}, ${a.requested_time||"4:00 PM"}</strong></div>
        <div>Location: <strong>${a.location_desc||a.ward}</strong></div>
      </div>

      ${a.suggested_time&&a.status==="Time Change Suggested"?`<div style="font-size: 0.78rem; color: #fbbf24; margin-top: 4px;">
              You suggested a new time: <b>${a.suggested_time}</b> (Awaiting Household confirmation)
             </div>`:""}

      ${a.observations?`<div style="font-size: 0.8rem; color: #a7f3d0; background: rgba(16, 185, 129, 0.1); padding: 6px 10px; border-radius: 6px; margin-top: 4px;">
              <strong>Observations:</strong> ${a.observations} • Result: <b>${a.field_result||"Abnormal"}</b>
             </div>`:""}

      <div class="request-actions">
        ${l||a.status==="Time Change Suggested"?`<button class="btn btn-sm btn-primary btn-view-request" data-id="${a.id}">[View Request]</button>`:r||f?`
              <button class="btn btn-sm btn-success btn-start-test-action" data-id="${a.id}" data-hname="${a.household_name}" data-ward="${a.ward}" data-test="${a.test_type}">
                ${f?"Continue Test → Submit Result":"Start Field Test"}
              </button>
              <button class="btn btn-sm btn-secondary btn-view-request" data-id="${a.id}" style="width: auto;">
                View Details
              </button>
            `:`<button class="btn btn-sm btn-secondary btn-view-request" data-id="${a.id}">[View Request Record]</button>`}
      </div>
    </div>
  `}function ra(a,l){document.querySelectorAll(".tester-nav-tab").forEach(r=>{r.addEventListener("click",f=>{J=f.currentTarget.getAttribute("data-tab"),Vt(a)})}),document.querySelectorAll(".btn-view-request").forEach(r=>{r.addEventListener("click",f=>{const c=f.currentTarget.getAttribute("data-id"),h=l.find(u=>u.id===c)||{id:c,household_name:"Noura",ward:"Ward 5",location_desc:"Ward 5",test_type:"Water Quality Test",requested_date:"Today",requested_time:"4:00 PM",notes:"Possible abnormal home-test result.",status:"Pending"};la(h,a)})}),document.querySelectorAll(".btn-start-test-action").forEach(r=>{r.addEventListener("click",async f=>{const c=f.currentTarget.getAttribute("data-id"),h=f.currentTarget.getAttribute("data-hname"),u=f.currentTarget.getAttribute("data-ward"),_=f.currentTarget.getAttribute("data-test");try{await fetch(`/api/requests/${c}/start_test`,{method:"POST"})}catch{}const g=await Bi(c);g&&(g.status="Test In Progress",await ce(g)),os({reqId:c,hname:h,ward:u,test:_,user:a})})})}function la(a,l){var f,c,h,u,_;const r=document.getElementById("modalHost");r&&(r.innerHTML=`
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline></svg>
          <span>Field Test Request – ${a.id}</span>
        </div>

        <div style="font-size: 0.88rem; line-height: 1.8; color: #e2e8f0; margin-bottom: 14px;">
          <div><strong>Household:</strong> ${a.household_name}</div>
          <div><strong>Ward:</strong> ${a.ward}</div>
          <div><strong>Location:</strong> ${a.location_desc||a.ward}</div>
          <div><strong>Test Type:</strong> ${a.test_type}</div>
          <div><strong>Requested Date:</strong> ${a.requested_date||"Today"}</div>
          <div><strong>Requested Time:</strong> ${a.requested_time||"4:00 PM"}</div>
          ${a.notes?`<div><strong>Notes:</strong> <em>"${a.notes}"</em></div>`:""}
          <div><strong>Current Status:</strong> <span class="badge badge-warn">${a.status}</span></div>
        </div>

        <!-- Action Buttons: [Accept Request], [Suggest Different Time], [Reject Request] -->
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${a.status==="Pending"||a.status==="Time Change Suggested"?`
            <button class="btn btn-success" id="btnModalAcceptReq">
              [Accept Request]
            </button>
            <button class="btn btn-warn" id="btnModalSuggestTime">
              [Suggest Different Time]
            </button>
            <button class="btn btn-danger" id="btnModalRejectReq">
              [Reject Request]
            </button>
          `:a.status==="Accepted"?`
            <button class="btn btn-primary" id="btnModalStartTestFromModal">
              Start Field Test
            </button>
          `:""}
          <button class="btn btn-secondary" id="btnModalCloseView" style="margin-top: 4px;">
            Close
          </button>
        </div>
      </div>
    </div>
  `,(f=document.getElementById("btnModalCloseView"))==null||f.addEventListener("click",()=>{r.innerHTML=""}),(c=document.getElementById("btnModalAcceptReq"))==null||c.addEventListener("click",async()=>{try{await fetch(`/api/requests/${a.id}/accept`,{method:"POST"})}catch{}a.status="Accepted",await ce(a),r.innerHTML="",dt(`Request ${a.id} Accepted! Status is now Accepted.`),Vt(l)}),(h=document.getElementById("btnModalRejectReq"))==null||h.addEventListener("click",async()=>{try{await fetch(`/api/requests/${a.id}/reject`,{method:"POST"})}catch{}a.status="Rejected",await ce(a),r.innerHTML="",dt(`Request ${a.id} Rejected.`),Vt(l)}),(u=document.getElementById("btnModalSuggestTime"))==null||u.addEventListener("click",()=>{da(a,l)}),(_=document.getElementById("btnModalStartTestFromModal"))==null||_.addEventListener("click",()=>{r.innerHTML="",os({reqId:a.id,hname:a.household_name,ward:a.ward,test:a.test_type,user:l})}))}function da(a,l){var f,c;const r=document.getElementById("modalHost");r&&(r.innerHTML=`
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: #fbbf24;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          <span>Suggest Different Time (${a.id})</span>
        </div>
        <p style="font-size: 0.84rem; color: var(--text-dim); margin-bottom: 12px;">
          Original requested time was: <strong>${a.requested_time||"4:00 PM"}</strong>
        </p>

        <form id="formSuggestTime">
          <div class="form-group">
            <label class="form-label" for="suggDate">Suggested Date</label>
            <input type="date" class="form-control" id="suggDate" value="${new Date().toISOString().split("T")[0]}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="suggTime">Suggested Time</label>
            <input type="text" class="form-control" id="suggTime" value="5:30 PM" required />
          </div>

          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <button type="submit" class="btn btn-primary" id="btnConfirmSendTime">
              Send Time Change
            </button>
            <button type="button" class="btn btn-secondary" id="btnCancelTimeModal" style="width: auto;">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  `,(f=document.getElementById("btnCancelTimeModal"))==null||f.addEventListener("click",()=>{r.innerHTML=""}),(c=document.getElementById("formSuggestTime"))==null||c.addEventListener("submit",async h=>{h.preventDefault();const u=document.getElementById("suggDate").value,_=document.getElementById("suggTime").value;try{await fetch(`/api/requests/${a.id}/suggest_time`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({suggested_date:u,suggested_time:_})})}catch{}a.status="Time Change Suggested",a.suggested_date=u,a.suggested_time=_,await ce(a),r.innerHTML="",dt(`Suggested new time (${_}) sent to ${a.household_name}.`),Vt(l)}))}function os({reqId:a,hname:l,ward:r,test:f,user:c}){var u,_;const h=document.getElementById("modalHost");h&&(h.innerHTML=`
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: #38bdf8;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Submit Field Test Result</span>
        </div>

        <div style="font-size: 0.84rem; color: var(--text-dim); margin-bottom: 12px; line-height: 1.6;">
          <div>Request ID: <strong>${a}</strong></div>
          <div>Household: <strong>${l}</strong> (${r})</div>
          <div>Test Type: <strong>${f}</strong></div>
        </div>

        <form id="formSubmitFieldResult">
          <div class="form-group">
            <label class="form-label" for="fieldTestDateTime">Test Date/Time</label>
            <input type="text" class="form-control" id="fieldTestDateTime" value="Today, 5:30 PM" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="resSelect">Result</label>
            <select class="form-control" id="resSelect" required>
              <option value="Normal">Normal</option>
              <option value="Abnormal" selected>Abnormal</option>
              <option value="Inconclusive">Inconclusive</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="ftObservations">Observations</label>
            <textarea class="form-control" id="ftObservations" rows="2" placeholder="e.g. Photometer turbidity 14 NTU, microbial contamination detected."></textarea>
          </div>

          <div class="form-group">
            <label class="form-label" for="ftPhotoUpload">Upload Test Photo</label>
            <input type="file" accept="image/*" class="form-control" id="ftPhotoUpload" />
          </div>

          <div class="form-group">
            <label class="form-label" for="ftAdditionalNotes">Additional Notes</label>
            <textarea class="form-control" id="ftAdditionalNotes" rows="2" placeholder="e.g. Advised household to boil water. Certified Lab Verification Recommended."></textarea>
          </div>

          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <button type="submit" class="btn btn-primary" id="btnSubmitResultBtn">
              Submit Result
            </button>
            <button type="button" class="btn btn-secondary" id="btnCancelResultModal" style="width: auto;">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  `,(u=document.getElementById("btnCancelResultModal"))==null||u.addEventListener("click",()=>{h.innerHTML=""}),(_=document.getElementById("formSubmitFieldResult"))==null||_.addEventListener("submit",async g=>{g.preventDefault();const b=document.getElementById("resSelect").value,w=document.getElementById("ftObservations").value;document.getElementById("ftAdditionalNotes").value;try{await fetch(`/api/requests/${a}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({result:b,test_type:f,observations:w||"Field inspection confirmed abnormal coliform readings.",lab_status:b==="Abnormal"?"Recommended":"Not Required"})})}catch{}const P=await Bi(a);P&&(P.status="Test Completed",P.test_result=b,P.observations=w||"Field inspection completed.",P.lab_status=b==="Abnormal"?"Recommended":"Not Required",await ce(P)),h.innerHTML="",dt("Field test result submitted successfully. Status: Test Completed."),Vt(c)}))}function as(a,l){var r,f,c;a.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Field Tester Profile
        </h2>
        <span class="badge ${l.available!==0?"badge-safe":"badge-warn"}">
          ${l.available!==0?"● Available":"● Off Duty / Busy"}
        </span>
      </div>

      <form id="formTesterProfile">
        <div id="profileFeedbackMsg"></div>

        <div class="form-group">
          <label class="form-label" for="editTesterName">Full Name</label>
          <input type="text" class="form-control" id="editTesterName" value="${l.name||""}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterPhone">Phone Number</label>
          <input type="tel" class="form-control" id="editTesterPhone" value="${l.phone||"+91 98471 23456"}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterRegNo">Registration / Certification No</label>
          <input type="text" class="form-control" id="editTesterRegNo" value="${l.tester_reg_no||"FT-REG-1042"}" readonly style="opacity: 0.8;" />
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterTypes">Test Types You Can Perform</label>
          <textarea class="form-control" id="editTesterTypes" rows="2">${l.test_types||l.specialty||"Water Quality & Coliform Analysis, Turbidity & pH Screening"}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterArea">Service Area / Community</label>
          <input type="text" class="form-control" id="editTesterArea" value="${l.area||`${l.ward} / Puzhakkal Sector`}" />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label" for="editTesterWard">Base Ward</label>
            <select class="form-control" id="editTesterWard">
              ${Wt.map(h=>`<option value="${h.id}" ${h.id===l.ward?"selected":""}>${h.name}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="editTesterAvail">Availability Status</label>
            <select class="form-control" id="editTesterAvail">
              <option value="1" ${l.available!==0?"selected":""}>Available Now</option>
              <option value="0" ${l.available===0?"selected":""}>Off Duty / Busy</option>
            </select>
          </div>
        </div>

        <!-- Location Coordinates with Geolocation button -->
        <div class="form-group">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <label class="form-label" style="margin: 0;">Location Coordinates</label>
            <button type="button" class="btn btn-sm btn-secondary" id="btnUpdateTesterGeo" style="width: auto; padding: 3px 8px; font-size: 0.75rem;">
              📍 Use Current GPS
            </button>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <input type="number" step="0.0001" class="form-control" id="editTesterLat" value="${l.lat||10.548}" />
            <input type="number" step="0.0001" class="form-control" id="editTesterLng" value="${l.lng||76.202}" />
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Coordinates are used by AquaGuard to calculate proximity for households.
          </div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 14px;">
          <button type="submit" class="btn btn-primary" id="btnSaveTesterProfile">
            Save Profile Changes
          </button>
        </div>
      </form>

      <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
        <button class="btn btn-danger" id="btnLogoutTesterBtn">
          Log Out of Field Tester
        </button>
      </div>
    </div>
  `,(r=document.getElementById("btnUpdateTesterGeo"))==null||r.addEventListener("click",()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(h=>{const u=document.getElementById("editTesterLat"),_=document.getElementById("editTesterLng");u&&(u.value=h.coords.latitude.toFixed(4)),_&&(_.value=h.coords.longitude.toFixed(4)),dt("Updated location to current GPS coordinates.")},()=>{dt("Could not acquire GPS position.")})}),(f=document.getElementById("formTesterProfile"))==null||f.addEventListener("submit",async h=>{h.preventDefault();const u=document.getElementById("editTesterName").value,_=document.getElementById("editTesterPhone").value,g=document.getElementById("editTesterTypes").value,b=document.getElementById("editTesterArea").value,w=document.getElementById("editTesterWard").value,P=parseInt(document.getElementById("editTesterAvail").value,10),T=parseFloat(document.getElementById("editTesterLat").value)||l.lat,k=parseFloat(document.getElementById("editTesterLng").value)||l.lng;try{const z=await Jo(l.id,{name:u,phone:_,test_types:g,area:b,ward:w,available:P,lat:T,lng:k});dt("Profile updated successfully!"),as(a,z)}catch{dt("Failed to update profile")}}),(c=document.getElementById("btnLogoutTesterBtn"))==null||c.addEventListener("click",()=>{Ri(),tt="household",at()})}function ca(a,l){a.innerHTML=`
    <header class="app-header">
      <div class="brand-badge" id="btnHeaderHome">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
        </div>
        <span class="brand-name">AquaGuard</span>
      </div>
      <div class="header-actions">
        <div class="status-pill ${ht?"offline":"online"}" id="statusBadge">
          <span class="status-dot"></span>
          <span>${ht?"Offline":"Online – Sync Available"}</span>
        </div>
        <button class="status-toggle-btn" id="btnToggleOffline">
          ${ht?"Go Online":"Simulate Offline"}
        </button>
      </div>
    </header>

    <main class="view-container" id="mainContent">
      <!-- Dynamic Tab Content -->
    </main>

    <!-- Household Navigation Bar with My Requests -->
    <nav class="bottom-nav">
      <button class="nav-item ${vt==="home"?"active":""}" data-tab="home">
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>Home</span>
      </button>
      <button class="nav-item ${vt==="test"?"active":""}" data-tab="test">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        <span>Test Water</span>
      </button>
      <button class="nav-item ${vt==="mytests"?"active":""}" data-tab="mytests">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        <span>My Tests</span>
      </button>
      <button class="nav-item ${vt==="myrequests"?"active":""}" data-tab="myrequests">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline><path d="M4 12h16"></path></svg>
        <span>My Requests</span>
      </button>
      <button class="nav-item ${vt==="community"?"active":""}" data-tab="community">
        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <span>Community</span>
      </button>
      <button class="nav-item ${vt==="map"?"active":""}" data-tab="map">
        <svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
        <span>GIS Map</span>
      </button>
      <button class="nav-item ${vt==="alerts"?"active":""}" data-tab="alerts">
        <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>Alerts</span>
      </button>
      <button class="nav-item ${vt==="profile"?"active":""}" data-tab="profile">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </button>
    </nav>

    <div id="modalHost"></div>
  `,ua(),wt()}function ua(){var a,l;(a=document.getElementById("btnToggleOffline"))==null||a.addEventListener("click",ia),(l=document.getElementById("btnHeaderHome"))==null||l.addEventListener("click",()=>K("home")),document.querySelectorAll(".bottom-nav .nav-item").forEach(r=>{r.addEventListener("click",f=>{const c=f.currentTarget.getAttribute("data-tab");c&&K(c)})})}function K(a){vt=a,document.querySelectorAll(".bottom-nav .nav-item").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tab")===a)}),wt()}async function wt(){const a=zi();if(!a){at();return}if(a.role==="field_tester"){Vt(a);return}const l=document.getElementById("mainContent");if(l)switch(vt){case"home":await Kn(l,a);break;case"test":await ha(l,a);break;case"mytests":await _a(l,a);break;case"myrequests":await rs(l,a);break;case"community":await ya(l,a);break;case"map":await ba(l,a);break;case"alerts":await Pa(l,a);break;case"profile":await Sa(l,a);break;default:await Kn(l,a)}}async function Kn(a,l){var b,w,P,T,k,z;const{ward:r,alerts:f}=await is(l.ward);let c=[];try{if(navigator.onLine&&(l.id||l.username)){const x=l.id?`user_id=${l.id}`:`username=${encodeURIComponent(l.username)}`,W=await fetch(`/api/tests?${x}`);if(W.ok){const Q=await W.json();Q.tests&&(c=Q.tests)}}}catch{}if(c.length===0)try{c=await Jn(l.username)}catch{}const h=c.length>0?c[0]:null;let u=null;try{if(l.id||l.username){const x=l.id?`user_id=${l.id}`:`username=${encodeURIComponent(l.username)}`,W=await fetch(`/api/requests?role=household&${x}`);if(W.ok){const Q=await W.json();Q.requests&&Q.requests.length>0&&(u=Q.requests[0])}}}catch{}if(!u&&l.username)try{const x=await Qn(l.username);x&&x.length>0&&(u=x[x.length-1])}catch{}const _=ns(l.ward||"Ward 5");let g={total_tests:_.totalReports||18,participating_households:Math.max(1,Math.round((_.totalReports||18)*.7)),tests_this_week:Math.round((_.totalReports||18)*.5),preliminary_abnormal_reports:_.preliminaryPositiveReports||0,field_verified_reports:_.fieldVerifiedReports||0,pattern_detected:_.isContaminatedPattern||!1,rainfall:r.rainfall||"Normal",flood_risk:r.floodRisk||"Low",rainfall_mm:r.rainfallMm||14};try{const x=await fetch(`/api/community/${encodeURIComponent(l.ward||"Ward 5")}`);x.ok&&(g=await x.json())}catch{}a.innerHTML=`
    <!-- Top Greeting Banner -->
    <div class="user-banner">
      <div>
        <h2 class="user-greeting">Welcome, ${l.name}</h2>
        <div class="user-subtext">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${l.ward} | ${l.panchayat||"Local Panchayat"}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-primary" id="btnQuickTestWater" style="width: auto;">
          Test Water
        </button>
      </div>
    </div>

    <!-- Personal Water Tests Card -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan-light)" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          My Water-Test Records
        </h3>
        ${h?`<span class="badge ${$t(h.result)?"badge-danger":"badge-safe"}">${h.result}</span>`:'<span class="badge badge-info">0 Recorded</span>'}
      </div>
      ${h?`
        <div style="font-size: 0.9rem; color: #f1f5f9;">
          <strong>Latest Screening:</strong> ${h.testType||h.test_type} (${h.date||h.date_time})
        </div>
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <button class="btn btn-sm btn-primary" id="btnHomeTestWater" style="width: auto;">+ Test Water</button>
          <button class="btn btn-sm btn-secondary" id="btnGoToMyTests" style="width: auto;">View My Tests →</button>
        </div>
      `:`
        <div style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 12px;">
          No water tests recorded yet.
        </div>
        <button class="btn btn-primary" id="btnHomeTestWater">
          Test Water
        </button>
      `}
    </div>

    <!-- Personal Field Tester Requests Card -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          My Field Tester Requests
        </h3>
        <span class="badge ${u?u.status==="Accepted"?"badge-info":u.status==="Test Completed"||u.status==="Verified"?"badge-safe":"badge-warn":"badge-info"}">
          ${u?u.status:"0 Active"}
        </span>
      </div>
      ${u?`
        <div style="font-size: 0.86rem; color: #e2e8f0;">
          Field Tester: <strong>${u.field_tester_name}</strong>
        </div>
        <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">
          Status: <strong>${u.status}</strong> • Appointment: ${u.requested_date} (${u.suggested_time||u.requested_time})
        </div>
        <div style="margin-top: 8px;">
          <button class="btn btn-sm btn-secondary" id="btnGoToMyRequests" style="width: auto;">
            Open My Requests →
          </button>
        </div>
      `:`
        <div style="font-size: 0.88rem; color: var(--text-muted);">
          No Field Tester requests yet.
        </div>
      `}
    </div>

    <!-- Environmental Hazard Indicators (Clean: NO mosquito risk, NO fake disease claims) -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 13h16a4.5 4.5 0 0 0 2-3.8z"></path></svg>
          Environmental Conditions (${l.ward})
        </h3>
        <span class="badge ${g.rainfall==="Heavy"?"badge-danger":"badge-safe"}">
          ${g.rainfall==="Heavy"?"Rainfall Warning":"Normal"}
        </span>
      </div>
      <div style="font-size: 0.88rem; color: #e2e8f0; line-height: 1.5;">
        ${g.rainfall==="Heavy"?`Heavy rainfall observed in your ward (${g.rainfall_mm}mm). Local water sources and runoff may be affected.`:`Precipitation normal (${g.rainfall_mm}mm). Local conditions stable.`}
      </div>
      <div style="font-size: 0.82rem; color: var(--text-dim); margin-top: 6px;">
        Flooding / Waterlogging Status: <strong style="color: ${g.flood_risk==="High"?"#f87171":"#34d399"};">${g.flood_risk}</strong>
      </div>
      <div style="margin-top: 10px;">
        <button class="btn btn-sm btn-secondary" id="btnGoToAlertsSolutions" style="width: auto; background: rgba(14, 165, 233, 0.15); border-color: rgba(14, 165, 233, 0.35); color: #38bdf8;">
          💡 View Alternate Solutions (${f.length} Active) →
        </button>
      </div>
    </div>

    <!-- Community Overview Card (Dynamic database counts) -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
          Community Water Status (${l.ward})
        </h3>
        <button class="btn btn-sm btn-secondary" id="btnGoToCommunityView" style="width: auto;">View Community →</button>
      </div>
      ${g.total_tests===0?`
        <div style="font-size: 0.88rem; color: var(--text-muted); padding: 4px 0;">
          No community test data available yet.
        </div>
      `:`
        <div class="stat-grid">
          <div class="stat-item">
            <div class="stat-value">${g.total_tests}</div>
            <div class="stat-label">Total Water Tests</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" style="color: ${g.preliminary_abnormal_reports>0?"#f87171":"#34d399"};">
              ${g.preliminary_abnormal_reports}
            </div>
            <div class="stat-label">Preliminary Abnormal</div>
          </div>
        </div>
      `}
    </div>
  `,(b=document.getElementById("btnQuickTestWater"))==null||b.addEventListener("click",()=>{lt="optionA",rt=null,K("test")}),(w=document.getElementById("btnHomeTestWater"))==null||w.addEventListener("click",()=>{lt="optionA",rt=null,K("test")}),(P=document.getElementById("btnGoToMyTests"))==null||P.addEventListener("click",()=>K("mytests")),(T=document.getElementById("btnGoToMyRequests"))==null||T.addEventListener("click",()=>K("myrequests")),(k=document.getElementById("btnGoToCommunityView"))==null||k.addEventListener("click",()=>K("community")),(z=document.getElementById("btnGoToAlertsSolutions"))==null||z.addEventListener("click",()=>K("alerts"))}async function ha(a,l){const r=new Date().toISOString().split("T")[0],f=new Date().toTimeString().split(" ")[0].substring(0,5);a.innerHTML=`
    <!-- Stepper Lifecycle -->
    <div class="workflow-stepper">
      <div class="workflow-step ${lt==="optionA"?"active":"completed"}">
        <div class="workflow-dot">1</div>
        <span>Home Test</span>
      </div>
      <div class="workflow-line ${lt==="optionB"?"active":""}"></div>
      <div class="workflow-step ${lt==="optionB"?"active":""}">
        <div class="workflow-dot">2</div>
        <span>Book Field Tester</span>
      </div>
      <div class="workflow-line"></div>
      <div class="workflow-step">
        <div class="workflow-dot">3</div>
        <span>Inspection</span>
      </div>
    </div>

    <!-- Option Selector -->
    <div class="test-options-grid">
      <div class="option-select-card ${lt==="optionA"?"active":""}" id="btnSelectOptionA">
        <span class="option-badge">Option A</span>
        <h4 class="option-title">Individual / Home Test</h4>
        <p class="option-desc">Quick Home Screening with an approved test kit.</p>
      </div>

      <div class="option-select-card ${lt==="optionB"?"active":""}" id="btnSelectOptionB">
        <span class="option-badge" style="background: rgba(20, 184, 166, 0.2); color: var(--accent-teal);">Option B</span>
        <h4 class="option-title">Book Field Tester</h4>
        <p class="option-desc">Find nearby certified testers for professional verification.</p>
      </div>
    </div>

    <div id="testNoticeContainer"></div>

    ${lt==="optionA"?fa(r,f):rt?pa(rt,l,r):await ma(l)}
  `,ga(l)}function fa(a,l){return`
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan-light)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          Quick Home Screening (Preliminary)
        </h3>
        <span class="badge badge-warn">Preliminary Screening</span>
      </div>

      <form id="formIndividualTest">
        <div class="form-group">
          <label class="form-label" for="testType">Test Type</label>
          <select class="form-control" id="testType" required>
            <option value="H2S Strip Test">H2S Strip Test (Bacteriological Paper Strip)</option>
            <option value="Field Coliform Kit">Field Coliform Kit (Vial / Culture)</option>
            <option value="Chlorine Residual Test">Chlorine Residual Test (OT / DPD)</option>
            <option value="Turbidity / Visual Check">Turbidity / Visual Check</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Screening Result</label>
          <div class="result-options">
            <label class="result-option">
              <input type="radio" name="testResult" value="Normal" />
              <div class="result-box res-neg">
                <span>Normal</span>
              </div>
            </label>

            <label class="result-option">
              <input type="radio" name="testResult" value="Abnormal / Possible Concern" required checked />
              <div class="result-box res-pos">
                <span>Abnormal / Possible Concern</span>
              </div>
            </label>

            <label class="result-option">
              <input type="radio" name="testResult" value="Inconclusive" />
              <div class="result-box res-inc">
                <span>Inconclusive</span>
              </div>
            </label>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label" for="testDate">Date</label>
            <input type="date" class="form-control" id="testDate" value="${a}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="testTime">Time</label>
            <input type="time" class="form-control" id="testTime" value="${l}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="testPhoto">Optional Photo (Record)</label>
          <input type="file" accept="image/*" class="form-control" id="testPhoto" />
        </div>

        <div class="form-group">
          <label class="form-label" for="testNotes">Notes</label>
          <textarea class="form-control" id="testNotes" rows="2" placeholder="e.g. Color change after 24h incubation"></textarea>
        </div>

        <button type="submit" class="btn btn-primary" id="btnSaveTestResult" style="margin-top: 6px;">
          Save Test Result
        </button>
      </form>
    </div>
  `}async function ma(a){let l=[];try{const r=Rt==="all"?"all=true":`radius=${Rt}`,f=await fetch(`/api/testers/nearby?lat=${a.lat||10.545}&lng=${a.lng||76.205}&${r}`);if(f.ok)l=(await f.json()).testers||[];else throw new Error("API not ok")}catch{const f=a.lat||10.545,c=a.lng||76.205;l=[{id:1,name:"Anil Kumar",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening",test_types:"Water Quality & Coliform Analysis, Turbidity & pH Screening",area:"Ward 5 / Puzhakkal North",available:!0,ward:"Ward 5",tester_reg_no:"FT-REG-1042"},{id:2,name:"Sreya P.",lat:10.5081,lng:76.205,specialty:"Spectrophotometric Turbidity, Coliform Test Strip",test_types:"Spectrophotometric Turbidity, Coliform Test Strip",area:"Ward 2 / Riverside Sector",available:!0,ward:"Ward 2",tester_reg_no:"FT-REG-2088"},{id:3,name:"Rahul K.",lat:10.5972,lng:76.205,specialty:"Residual Chlorine & Microbial Assay, Chemical Contaminants",test_types:"Residual Chlorine & Microbial Assay, Chemical Contaminants",area:"Ward 4 / Hilltop Sector",available:!0,ward:"Ward 4",tester_reg_no:"FT-REG-3190"}].map(u=>{const _=(u.lat-f)*Math.PI/180,g=(u.lng-c)*Math.PI/180,b=Math.sin(_/2)**2+Math.cos(f*Math.PI/180)*Math.cos(u.lat*Math.PI/180)*Math.sin(g/2)**2,w=Math.round(6371*2*Math.atan2(Math.sqrt(b),Math.sqrt(1-b))*10)/10;return{...u,distance_km:w}}),Rt!=="all"&&(l=l.filter(u=>u.distance_km<=Number(Rt))),l.sort((u,_)=>u.distance_km-_.distance_km)}return`
    <div class="card">
      <div class="card-header" style="flex-wrap: wrap; gap: 8px;">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Nearby Certified Field Testers
        </h3>
        
        <!-- Search Radius Selector -->
        <div style="display: flex; gap: 4px; font-size: 0.76rem;">
          <button class="btn btn-sm ${Rt===10?"btn-primary":"btn-secondary"} btn-set-radius" data-radius="10" style="padding: 3px 8px; width: auto;">
            10 km
          </button>
          <button class="btn btn-sm ${Rt===25?"btn-primary":"btn-secondary"} btn-set-radius" data-radius="25" style="padding: 3px 8px; width: auto;">
            25 km
          </button>
          <button class="btn btn-sm ${Rt==="all"?"btn-primary":"btn-secondary"} btn-set-radius" data-radius="all" style="padding: 3px 8px; width: auto;">
            All
          </button>
        </div>
      </div>

      <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.4;">
        📍 Sorted by distance from your saved location in <strong>${a.ward||"Ward 5"}</strong>. Testers' exact home coordinates are protected for privacy.
      </div>

      ${l.length===0?`
        <div style="text-align: center; padding: 24px 14px; background: rgba(15, 23, 42, 0.6); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle); margin: 8px 0;">
          <div style="font-size: 1.05rem; font-weight: 700; color: #fbbf24; margin-bottom: 6px;">
            No nearby Field Testers available
          </div>
          <p style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 14px;">
            No registered testers found within ${Rt} km. You can expand your search radius to find testers serving adjoining wards.
          </p>
          <button class="btn btn-primary btn-set-radius" data-radius="25" style="width: auto; padding: 6px 16px; margin: 0 auto;">
            Search Wider Service Area (25 km)
          </button>
        </div>
      `:`
        <div class="testers-list">
          ${l.map(r=>`
            <div class="tester-card" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px; background: rgba(15, 23, 42, 0.65); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 10px;">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                  <strong style="color: #fff; font-size: 0.98rem;">${r.name}</strong>
                  ${r.tester_reg_no?`<span class="badge badge-info" style="font-size: 0.65rem; padding: 2px 6px;">${r.tester_reg_no}</span>`:""}
                </div>
                
                <div class="tester-distance" style="font-size: 0.82rem; margin: 2px 0;">
                  <span style="color: #38bdf8; font-weight: 600;">📍 ${r.distance_km} km away</span>
                  <span style="color: var(--text-muted);"> • </span>
                  <span style="color: #cbd5e1;">${r.area||r.ward}</span>
                  <span style="color: var(--text-muted);"> • </span>
                  <span style="color: ${r.available?"#34d399":"#f87171"}; font-weight: 600;">
                    ${r.available?"● Available":"● Busy"}
                  </span>
                </div>

                <div class="tester-spec" style="font-size: 0.78rem; color: #94a3b8; margin-top: 4px;">
                  🧪 Tests: <span style="color: #e2e8f0;">${r.test_types||r.specialty||"Water Quality Testing"}</span>
                </div>
              </div>

              <div>
                <button class="btn btn-sm btn-primary btn-select-tester" 
                  data-id="${r.id}" data-name="${r.name}" data-distance="${r.distance_km}" data-ward="${r.ward}" data-area="${r.area||r.ward}"
                  style="width: auto; padding: 8px 14px; font-weight: 600;">
                  Request Tester
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      `}
    </div>
  `}function pa(a,l,r){return`
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Request Field Test
        </h3>
        <button class="btn btn-sm btn-secondary" id="btnBackToTesters" style="width: auto;">
          ← Back to Testers
        </button>
      </div>

      <div style="background: rgba(15, 23, 42, 0.7); border-radius: var(--radius-md); padding: 12px; margin-bottom: 14px; border: 1px solid var(--border-subtle); font-size: 0.86rem; line-height: 1.6;">
        <div>Field Tester: <strong style="color: #fff;">${a.name}</strong> (${a.distance_km} km away)</div>
        <div>Service Area: <strong>${a.area||a.ward}</strong></div>
        <div>Household Location: <strong>${l.name}'s saved location (${l.ward})</strong></div>
      </div>

      <form id="formSendFieldRequest">
        <div class="form-group">
          <label class="form-label" for="reqTestType">Test Type</label>
          <input type="text" class="form-control" id="reqTestType" value="Water Quality Test" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label" for="reqDate">Preferred Date</label>
            <input type="date" class="form-control" id="reqDate" value="${r}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="reqTime">Preferred Time</label>
            <input type="text" class="form-control" id="reqTime" value="4:00 PM" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reqNotes">Additional Notes</label>
          <textarea class="form-control" id="reqNotes" rows="2" placeholder="e.g. Well water following heavy rainfall. Possible abnormal home-test result."></textarea>
        </div>

        <button type="submit" class="btn btn-primary" id="btnSendRequest" style="margin-top: 6px;">
          Send Request
        </button>
      </form>
    </div>
  `}function ga(a){var f,c,h;(f=document.getElementById("btnSelectOptionA"))==null||f.addEventListener("click",()=>{lt="optionA",rt=null,wt()}),(c=document.getElementById("btnSelectOptionB"))==null||c.addEventListener("click",()=>{lt="optionB",wt()}),document.querySelectorAll(".btn-set-radius").forEach(u=>{u.addEventListener("click",_=>{const g=_.currentTarget.getAttribute("data-radius");Rt=g==="all"?"all":parseInt(g,10),wt()})}),document.querySelectorAll(".btn-select-tester").forEach(u=>{u.addEventListener("click",_=>{const g=_.currentTarget.getAttribute("data-id"),b=_.currentTarget.getAttribute("data-name"),w=_.currentTarget.getAttribute("data-distance"),P=_.currentTarget.getAttribute("data-ward"),T=_.currentTarget.getAttribute("data-area");rt={id:g,name:b,distance_km:w,ward:P,area:T},wt()})}),(h=document.getElementById("btnBackToTesters"))==null||h.addEventListener("click",()=>{rt=null,wt()});const l=document.getElementById("formIndividualTest");l==null||l.addEventListener("submit",async u=>{var k;u.preventDefault();const _=document.getElementById("testType").value,g=((k=document.querySelector('input[name="testResult"]:checked'))==null?void 0:k.value)||"Abnormal / Possible Concern",b=document.getElementById("testDate").value,w=document.getElementById("testTime").value,P=document.getElementById("testNotes").value,T={user_id:a.id,username:a.username,ward:a.ward,panchayat:a.panchayat,test_type:_,source:"home",result:g,date:b,time:w,date_time:`${b} ${w}`,notes:P.trim(),lat:a.lat||10.545,lng:a.lng||76.205,verification_status:$t(g)?"Pending":"Not Required",lab_status:"Not Required",timestamp:Date.now()};if(navigator.onLine)try{await fetch("/api/tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)})}catch{}await Wo(T),Mi(g==="Normal"?{isAbnormal:!1,title:"Screening Complete",message:"No abnormal indication was recorded in this preliminary screening.",onContinue:()=>K("home")}:g==="Inconclusive"?{isAbnormal:!1,title:"Screening Inconclusive",message:"Test was inconclusive. Re-testing or scheduling professional field verification is recommended.",onContinue:()=>K("home")}:{isAbnormal:!0,title:"Possible Water-Quality Concern",message:"Possible water-quality concern detected. Professional field verification is recommended.",onBook:()=>{lt="optionB",rt=null,wt()},onContinue:()=>K("home")})});const r=document.getElementById("formSendFieldRequest");r==null||r.addEventListener("submit",async u=>{var z;u.preventDefault();const _=document.getElementById("reqTestType").value,g=document.getElementById("reqDate").value,b=document.getElementById("reqTime").value,w=document.getElementById("reqNotes").value,P={user_id:a.id,household_user_id:a.id,username:a.username,household_name:a.name,phone:a.phone||"+91 98470 11111",address:`${a.name}'s Residence, ${a.ward}`,field_tester_id:rt.id,field_tester_name:rt.name,ward:a.ward,location_desc:`${a.name}'s saved location (${a.ward})`,lat:a.lat||10.545,lng:a.lng||76.205,test_type:_,requested_date:g,requested_time:b,notes:w.trim()};let T=null;try{const x=await fetch("/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});x.ok&&(T=(await x.json()).request)}catch{}T||(T={id:`REQ-${Math.floor(1e3+Math.random()*9e3)}`,...P,status:"Pending Field Tester Response",created_at:new Date().toISOString()}),await Fo(T);const k=document.getElementById("testNoticeContainer");k&&(k.innerHTML=`
        <div class="notice-box notice-success" style="flex-direction: column; align-items: flex-start;">
          <div style="font-weight: 800; font-size: 1.05rem; color: #34d399; margin-bottom: 4px;">
            Request Sent
          </div>
          <div style="font-size: 0.9rem; line-height: 1.6; color: #fff;">
            Your request has been sent to <strong>${T.field_tester_name}</strong>.<br/>
            Request ID: <b>${T.id}</b><br/>
            Status: <span class="badge badge-warn">Pending Field Tester Response</span>
          </div>
          <button class="btn btn-sm btn-primary" id="btnGoToRequestsNow" style="margin-top: 10px; width: auto;">
            View My Requests →
          </button>
        </div>
      `,(z=document.getElementById("btnGoToRequestsNow"))==null||z.addEventListener("click",()=>K("myrequests"))),rt=null})}function Mi({isAbnormal:a,title:l,message:r,onBook:f,onContinue:c}){var u,_;const h=document.getElementById("modalHost");h&&(h.innerHTML=`
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: ${a?"#fbbf24":"#34d399"};">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${a?'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>':'<polyline points="20 6 9 17 4 12"/>'}
          </svg>
          <span>${l}</span>
        </div>
        <p class="prompt-modal-body">
          ${r}
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${a&&f?'<button class="btn btn-primary" id="btnModalBook">Book Field Tester</button>':""}
          <button class="btn btn-secondary" id="btnModalContinue">
            ${a?"Continue Without Booking":"Return to Dashboard"}
          </button>
        </div>
      </div>
    </div>
  `,(u=document.getElementById("btnModalBook"))==null||u.addEventListener("click",()=>{h.innerHTML="",f&&f()}),(_=document.getElementById("btnModalContinue"))==null||_.addEventListener("click",()=>{h.innerHTML="",c&&c()}))}async function rs(a,l){var f;let r=[];try{const c=await fetch(`/api/requests?role=household&user_id=${l.id||4}`);if(c.ok)r=(await c.json()).requests||[];else throw new Error("API not available")}catch{r=await Qn(l.username)}a.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          My Requests
        </h2>
        <button class="btn btn-sm btn-primary" id="btnBookAnotherTesterReq" style="width: auto;">
          + Book Field Tester
        </button>
      </div>

      <div id="requestsListContainer">
        ${r.length>0?r.map(c=>va(c)).join(""):'<div style="font-size: 0.85rem; color: var(--text-dim); padding: 14px;">No requests submitted yet.</div>'}
      </div>
    </div>
  `,(f=document.getElementById("btnBookAnotherTesterReq"))==null||f.addEventListener("click",()=>{lt="optionB",rt=null,K("test")}),document.querySelectorAll(".btn-accept-new-time").forEach(c=>{c.addEventListener("click",async h=>{const u=h.currentTarget.getAttribute("data-id");try{await fetch(`/api/requests/${u}/accept_time`,{method:"POST"})}catch{}const _=await Bi(u);_&&(_.status="Accepted",_.suggested_time&&(_.requested_time=`${_.suggested_date||"Updated"} ${_.suggested_time}`),await ce(_)),dt("Accepted new appointment time!"),rs(a,l)})})}function va(a){const l=a.status==="Time Change Suggested",r=a.status==="Accepted"||a.status==="Test In Progress",f=a.status==="Test Completed"||a.status==="Verified",c=a.status==="Rejected";return`
    <div class="my-test-card" style="border-color: ${f?"rgba(16, 185, 129, 0.4)":r?"rgba(14, 165, 233, 0.4)":l?"rgba(245, 158, 11, 0.5)":c?"rgba(239, 68, 68, 0.4)":"rgba(245, 158, 11, 0.3)"};">
      <div class="my-test-top">
        <div>
          <strong style="color: #fff; font-size: 1rem;">${a.id}</strong>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 1px;">
            Field Tester: <strong style="color: #fff;">${a.field_tester_name}</strong>
          </div>
        </div>
        <span class="badge ${f?"badge-safe":r?"badge-info":l?"badge-warn":c?"badge-danger":"badge-warn"}">${a.status}</span>
      </div>

      <div style="font-size: 0.85rem; color: #e2e8f0; line-height: 1.6;">
        <div>Test: <strong>${a.test_type}</strong></div>
        <div>Requested: <strong>${a.requested_time||"4:00 PM"}</strong></div>
        ${a.suggested_time?`<div>Updated appointment: <strong>${a.suggested_time}</strong></div>`:""}
      </div>

      <!-- Time Change Suggested Banner -->
      ${l?`
        <div class="time-change-banner" style="margin-top: 8px;">
          <div><strong>Field Tester suggested a new time:</strong></div>
          <div style="font-size: 0.84rem; margin: 4px 0;">
            Original: <b>${a.requested_time||"4:00 PM"}</b> | Suggested: <b>${a.suggested_time||"5:30 PM"}</b>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 6px;">
            <button class="btn btn-sm btn-success btn-accept-new-time" data-id="${a.id}" style="width: auto;">
              Accept New Time
            </button>
            <button class="btn btn-sm btn-secondary" onclick="alert('Please select another tester from the Book tab.')" style="width: auto;">
              Request Another Time
            </button>
          </div>
        </div>
      `:""}

      ${r?`
        <div style="font-size: 0.82rem; color: #38bdf8; margin-top: 4px;">
          ✓ Field Tester Accepted Your Request. Visit confirmed for ${a.suggested_time||a.requested_time}.
        </div>
      `:""}

      ${f?`
        <div style="font-size: 0.82rem; line-height: 1.6; color: #a7f3d0; background: rgba(16, 185, 129, 0.1); padding: 8px 10px; border-radius: 6px; margin-top: 4px;">
          <div>Result: <strong style="color: ${a.field_result==="Abnormal"?"#f87171":"#34d399"};">${a.field_result||"Abnormal"}</strong></div>
          <div>Verification: <strong>Completed</strong></div>
          ${a.lab_status==="Recommended"?'<div style="color: #c084fc; font-weight: 700;">Certified Lab Verification Recommended</div>':""}
        </div>
      `:""}
    </div>
  `}async function _a(a,l){var f;let r=[];try{r=(await(await fetch(`/api/tests?username=${l.username}`)).json()).tests||[]}catch{r=await Jn(l.username)}a.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan-light)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
          Water Quality Tests & History
        </h2>
        <button class="btn btn-sm btn-primary" id="btnAddNewTestMy" style="width: auto;">
          + New Test
        </button>
      </div>

      <div>
        ${r.length>0?r.map(c=>`
          <div class="my-test-card">
            <div class="my-test-top">
              <div>
                <strong style="color: #fff;">${c.test_type||c.testType||"Water Quality Test"}</strong>
                <div style="font-size: 0.78rem; color: var(--text-dim);">
                  Type: <b>${c.source==="field"?"Field Verification":"Home Screening"}</b>
                  ${c.tester_name?`• Tester: <b>${c.tester_name}</b>`:""}
                </div>
              </div>
              <span class="badge ${$t(c.result)?"badge-danger":c.result==="Normal"?"badge-safe":"badge-warn"}">${c.result}</span>
            </div>

            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
              Date: ${c.date_time||c.date}
            </div>

            <div class="status-chip-row">
              <span class="status-chip ${c.verification_status==="Verified"?"field-verified":"field-pending"}">
                Status: <strong>${c.verification_status==="Verified"?"Verified":"Field Verification Recommended"}</strong>
              </span>
              ${c.lab_status==="Recommended"?'<span class="status-chip lab-rec">Certified Lab Verification Recommended</span>':""}
            </div>
            ${c.notes?`<div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 3px;"><em>"${c.notes}"</em></div>`:""}
          </div>
        `).join(""):'<div style="font-size: 0.85rem; color: var(--text-dim); padding: 14px;">No water tests recorded yet.</div>'}
      </div>
    </div>
  `,(f=document.getElementById("btnAddNewTestMy"))==null||f.addEventListener("click",()=>K("test"))}async function ya(a,l){var c,h;let r={ward:l.ward||"Ward 5",has_data:!1,total_tests:0,participating_households:0,tests_this_week:0,preliminary_abnormal_reports:0,field_verified_reports:0,pattern_detected:!1,pattern_description:"No abnormal water-quality pattern detected.",rainfall:"Normal",rainfall_mm:14,flood_risk:"Low",response_status:"Normal"};try{const u=await fetch(`/api/community/${encodeURIComponent(l.ward||"Ward 5")}`);u.ok&&(r=await u.json())}catch{const _=await ns(l.ward);r.total_tests=_.totalReports,r.preliminary_abnormal_reports=_.preliminaryPositiveReports,r.field_verified_reports=_.fieldVerifiedReports,r.has_data=_.totalReports>0}let f=[];try{f=(await dbGetAllWaterTests()).filter(g=>g.ward===l.ward).slice(-6).reverse().map(g=>({text:g.verification_status==="Verified"?`Field-verified report logged in ${g.ward} (${g.test_type||g.testType||"Water Test"}).`:$t(g.result)?`Preliminary abnormal water screening logged in ${g.ward} (${g.test_type||g.testType||"Home Test"}).`:`Preliminary normal water screening recorded in ${g.ward} (${g.test_type||g.testType||"Home Test"}).`,date:g.date_time||g.date||"Recent",isVerified:g.verification_status==="Verified",isPositive:$t(g.result)}))}catch{}a.innerHTML=`
    <!-- Community Top Banner -->
    <div class="user-banner">
      <div>
        <h2 class="user-greeting">${l.ward} Community</h2>
        <div class="user-subtext">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${l.ward} | ${l.panchayat||"Local Panchayat"}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-primary" id="btnCommTestWater" style="width: auto;">
          Test Water
        </button>
      </div>
    </div>

    ${!r.has_data||r.total_tests===0?`
      <!-- Empty Community State -->
      <div class="card" style="text-align: center; padding: 26px 16px;">
        <div style="width: 52px; height: 52px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: #38bdf8;">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
        </div>
        <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 6px; font-weight: 700;">No community test data available yet.</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 16px; line-height: 1.5;">
          There are currently no registered test records for ${l.ward}. As households in this locality perform water screenings, community trends will update here automatically.
        </p>
        <button class="btn btn-primary" id="btnCommEmptyStartTest" style="width: auto; margin: 0 auto; padding: 8px 20px;">
          Log First Test for ${l.ward}
        </button>
      </div>

      <!-- Environmental Hazard Overview -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 13h16a4.5 4.5 0 0 0 2-3.8z"></path></svg>
            Environmental Hazard Overview (${l.ward})
          </h3>
          <span class="badge ${r.rainfall==="Heavy"?"badge-danger":"badge-safe"}">${r.rainfall}</span>
        </div>
        <div class="stat-grid">
          <div class="stat-item">
            <div class="stat-value" style="font-size: 1.25rem;">${r.rainfall}</div>
            <div class="stat-label">Precipitation (${r.rainfall_mm}mm)</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" style="font-size: 1.25rem; color: ${r.flood_risk==="High"?"#f87171":"#34d399"};">${r.flood_risk}</div>
            <div class="stat-label">Flooding / Waterlogging</div>
          </div>
        </div>
      </div>
    `:`
      <!-- Ward-Level Response View Card -->
      <div class="ward-response-card ${r.pattern_detected?"attention":""}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h2 style="font-size: 1.15rem; font-weight: 700; color: #fff;">
            ${l.ward} Community Response View
          </h2>
          <span class="badge ${r.response_status==="Attention Required"?"badge-danger":"badge-safe"}">
            ${r.response_status}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Community Name:</span>
          <span class="response-val">${l.ward} (${l.panchayat||"Local Panchayat"})</span>
        </div>

        <div class="response-row">
          <span class="response-label">Participating Households:</span>
          <span class="response-val" style="color: #38bdf8;">${r.participating_households}</span>
        </div>

        <div class="response-row">
          <span class="response-label">Water Tests This Week:</span>
          <span class="response-val">${r.tests_this_week}</span>
        </div>

        <div class="response-row">
          <span class="response-label">Preliminary Abnormal Reports:</span>
          <span class="response-val" style="color: ${r.preliminary_abnormal_reports>0?"#f87171":"#34d399"};">
            ${r.preliminary_abnormal_reports}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Field-Verified Reports:</span>
          <span class="response-val" style="color: #38bdf8;">
            ${r.field_verified_reports}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Possible Water-Quality Pattern:</span>
          <span class="response-val" style="color: ${r.pattern_detected?"#f87171":"#34d399"};">
            ${r.pattern_detected?"Yes (Multiple abnormal reports)":"None detected"}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Current Rainfall / Hazard:</span>
          <span class="response-val" style="color: ${r.rainfall==="Heavy"?"#38bdf8":"#e2e8f0"};">
            ${r.rainfall} (${r.rainfall_mm}mm) • Flood Risk: ${r.flood_risk}
          </span>
        </div>
      </div>

      <!-- Situation Assessment -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan-light)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
            Situation Assessment
          </h3>
          <span class="badge ${r.pattern_detected?"badge-danger":"badge-safe"}">
            ${r.pattern_detected?"Advisory Active":"Normal"}
          </span>
        </div>
        <p style="font-size: 0.92rem; line-height: 1.5; color: #f1f5f9;">
          ${r.pattern_detected?`Possible water-quality pattern detected based on multiple abnormal reports in ${l.ward}. Local residents are advised to perform individual home screenings or request certified field verification.`:`Water-quality indicators in ${l.ward} remain within normal ranges. Continue periodic testing and report any observations.`}
        </p>
      </div>

      <!-- Privacy-Safe Area Feed -->
      ${f.length>0?`
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Recent Community Observations</h3>
            <span class="badge badge-safe">Privacy Protected</span>
          </div>
          <div class="feed-list">
            ${f.map(u=>`
              <div class="feed-item">
                <div class="feed-dot" style="background: ${u.isVerified?"#38bdf8":u.isPositive?"#f87171":"#34d399"};"></div>
                <div class="feed-text">
                  <div>${u.text}</div>
                  <div class="feed-time">${u.date}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}
    `}
  `,(c=document.getElementById("btnCommTestWater"))==null||c.addEventListener("click",()=>K("test")),(h=document.getElementById("btnCommEmptyStartTest"))==null||h.addEventListener("click",()=>K("test"))}async function ba(a,l){a.innerHTML=`
    <div class="card" style="padding: 14px;">
      <div class="card-header" style="margin-bottom: 6px;">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan-light)" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg>
          GIS Hazard & Water Safety Map
        </h2>
        <span class="badge ${ht?"badge-warn":"badge-safe"}">
          ${ht?"Cached Map Data":"Live OSM Tiles"}
        </span>
      </div>

      <div id="mapContainer"></div>

      <div class="map-layer-controls">
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrHousehold" ${ut.household?"checked":""} />
          <span>Registered Household</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrWards" ${ut.wards?"checked":""} />
          <span>Community Boundaries</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrPrelim" ${ut.preliminary?"checked":""} />
          <span>Water Tests (Preliminary)</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrVerified" ${ut.verified?"checked":""} />
          <span>Field-Verified Reports</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrHazard" ${ut.hazard?"checked":""} />
          <span>Rainfall & Flood Zones</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrClusters" ${ut.clusters?"checked":""} />
          <span>Water-Quality Patterns</span>
        </label>
      </div>
    </div>
  `,wa(l),await ls(l)}function wa(a){[{id:"chkLyrHousehold",key:"household"},{id:"chkLyrWards",key:"wards"},{id:"chkLyrPrelim",key:"preliminary"},{id:"chkLyrVerified",key:"verified"},{id:"chkLyrHazard",key:"hazard"},{id:"chkLyrClusters",key:"clusters"}].forEach(({id:r,key:f})=>{var c;(c=document.getElementById(r))==null||c.addEventListener("change",h=>{ut[f]=h.target.checked,ls(a)})})}async function ls(a){if(je&&(je.remove(),je=null),!document.getElementById("mapContainer"))return;const r=Wt.find(u=>u.id===a.ward)||Wt[4],f=a.lat||r.center[0],c=a.lng||r.center[1],h=zt.map("mapContainer",{zoomControl:!0,attributionControl:!1}).setView([f,c],14);if(je=h,zt.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,crossOrigin:!0}).addTo(h),ut.wards&&Wt.forEach(u=>{const _=u.id===a.ward;zt.polygon(u.polygon,{color:_?"#38bdf8":"#64748b",weight:_?3:1.5,fillColor:u.rainfall==="Heavy"?"#0284c7":"#334155",fillOpacity:.25}).addTo(h).bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45;">
          <strong style="color: #38bdf8;">Actual Data: Registered Community</strong><br/>
          Community: <b>${u.name}</b><br/>
          Environmental Rainfall: <b>${u.rainfall} (${u.rainfallMm}mm)</b><br/>
          Flooding / Waterlogging: <b>${u.floodRisk}</b>
        </div>
      `)}),ut.hazard&&Xo.forEach(u=>{zt.polygon(u.polygon,{color:"#f59e0b",weight:1.5,fillColor:"#f59e0b",fillOpacity:.28}).addTo(h).bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45;">
          <strong style="color: #fbbf24;">Environmental Data</strong><br/>
          Flooding / Waterlogging Affected Area<br/>
          <small style="color: var(--text-dim);">Observed surface water accumulation zone.</small>
        </div>
      `)}),ut.clusters&&(a.ward==="Ward 5"||r.id==="Ward 5")&&zt.circle(r.center,{radius:460,color:"#ef4444",fillColor:"#ef4444",fillOpacity:.22,weight:2}).addTo(h).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.45;">
        <strong style="color: #f87171;">Derived Information</strong><br/>
        Possible water-quality pattern detected based on multiple abnormal reports.<br/>
        <small style="color: var(--text-dim);">Derived spatial indicator; authorized field verification recommended.</small>
      </div>
    `),ut.preliminary)try{(await dbGetAllWaterTests()).filter(g=>g.ward===a.ward&&$t(g.result)).forEach(g=>{const b=g.lat||f+(Math.random()-.5)*.006,w=g.lng||c+(Math.random()-.5)*.006;zt.circleMarker([b,w],{radius:6,color:"#f87171",fillColor:"#ef4444",fillOpacity:.85,weight:1.5}).addTo(h).bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4;">
            <strong style="color: #f87171;">Actual Data: Water-Test Report</strong><br/>
            Test Type: <b>${g.test_type||g.testType||"Home Screening"}</b><br/>
            Result: <b style="color: #f87171;">${g.result}</b><br/>
            Date: ${g.date_time||g.date||"Recent"}
          </div>
        `)})}catch{}if(ut.verified)try{(await dbGetAllWaterTests()).filter(g=>g.ward===a.ward&&(g.verification_status==="Verified"||g.fieldVerification&&g.fieldVerification.status==="Verified")).forEach(g=>{const b=g.lat||f+(Math.random()-.5)*.005,w=g.lng||c+(Math.random()-.5)*.005;zt.circleMarker([b,w],{radius:7,color:"#38bdf8",fillColor:"#0284c7",fillOpacity:.9,weight:2}).addTo(h).bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4;">
            <strong style="color: #38bdf8;">Actual Data: Field-Verified Report</strong><br/>
            Tester: <b>${g.tester_name||"Certified Field Tester"}</b><br/>
            Verification Result: <b>${g.result||"Verified"}</b><br/>
            Status: <b style="color: #34d399;">Field Verified</b>
          </div>
        `)})}catch{}if(ut.household&&a.role!=="field_tester"){const u=zt.divIcon({className:"marker-household",html:`
        <div style="width: 32px; height: 32px; background: #0284c7; border: 2.5px solid #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 12px #0ea5e9;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </div>
      `,iconSize:[32,32],iconAnchor:[16,16]});zt.marker([f,c],{icon:u}).addTo(h).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.4;">
        <strong style="color: #38bdf8;">Actual Data: Registered Household Location</strong><br/>
        User: <b>${a.name}</b><br/>
        Ward: ${a.ward||"Local Ward"}
      </div>
    `)}}function ds(a){try{return JSON.parse(localStorage.getItem(`applied_solutions_${a||"default"}`)||"[]")}catch{return[]}}function Ta(a,l){const r=ds(a),f=r.indexOf(l);return f>-1?r.splice(f,1):r.push(l),localStorage.setItem(`applied_solutions_${a||"default"}`,JSON.stringify(r)),r.includes(l)}function xa(a,l){const r=a.alternateSolutions||[],f=ds(l.username);return`
    <div class="alert-card ${a.type}" style="margin-bottom: 18px;">
      <div class="alert-heading">
        <span style="font-weight: 700; font-size: 0.98rem; display: flex; align-items: center; gap: 8px;">
          ${a.type==="contamination"?"⚠️":a.type==="rainfall"?"🌧️":a.type==="mosquito"?"🦟":a.type==="flood"?"🌊":"🛡️"}
          ${a.title}
        </span>
        <span class="badge ${a.severity==="hazard"?"badge-danger":"badge-warn"}">${a.badge}</span>
      </div>

      <div class="alert-body" style="font-size: 0.88rem; line-height: 1.5; color: #f1f5f9; margin-bottom: 8px;">
        ${a.message}
      </div>

      ${a.details?`<div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 10px;">ℹ️ ${a.details}</div>`:""}

      ${r.length>0?`
        <div class="solutions-wrapper">
          <div class="solutions-header-row">
            <div class="solutions-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a6 6 0 0 1 6 6c0 2.22-1.2 4.16-3 5.2V17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3.8C7.2 12.16 6 10.22 6 8a6 6 0 0 1 6-6z"></path><path d="M9 21h6"></path></svg>
              <span>Recommended Alternate Solutions (${r.length})</span>
            </div>
            <span class="solutions-toggle-badge">${r.length} Actions Available</span>
          </div>

          <div class="solutions-grid" id="sol-grid-${a.id||a.type}">
            ${r.map(c=>{const h=f.includes(c.id);return`
                <div class="solution-card">
                  <div class="solution-top">
                    <div class="solution-heading">
                      <span class="solution-icon">${c.icon||"💧"}</span>
                      <span>${c.title}</span>
                    </div>
                    <span class="solution-tag">${c.tag||"Recommended"}</span>
                  </div>

                  <div class="solution-meta-row">
                    ${c.timeRequired?`<div class="solution-meta-item">⏱️ <span>${c.timeRequired}</span></div>`:""}
                    ${c.cost?`<div class="solution-meta-item">💰 <span>${c.cost}</span></div>`:""}
                    ${c.bestFor?`<div class="solution-meta-item">🎯 <span>${c.bestFor}</span></div>`:""}
                  </div>

                  <ol class="solution-steps">
                    ${(c.steps||[]).map(u=>`<li>${u}</li>`).join("")}
                  </ol>

                  ${c.effectiveness?`
                    <div class="solution-effectiveness">
                      🛡️ <strong>Effectiveness:</strong> ${c.effectiveness}
                    </div>
                  `:""}

                  <div class="solution-footer">
                    <button class="btn-solution-applied ${h?"active-applied":""}" data-solid="${c.id}">
                      ${h?"✓ Applied by Household":"Mark as Applied"}
                    </button>

                    ${c.action==="book_tester"?`
                      <button class="btn-solution-action btn-sol-book-tester">
                        Book Nearby Field Tester →
                      </button>
                    `:c.action==="self_test"?`
                      <button class="btn-solution-action btn-sol-self-test">
                        Start Water Test →
                      </button>
                    `:""}
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      `:""}
    </div>
  `}async function Pa(a,l){const{alerts:r}=await is(l.ward);r.reduce((f,c)=>{var h;return f+(((h=c.alternateSolutions)==null?void 0:h.length)||0)},0),a.innerHTML=`
    <div class="card">
      <div class="card-header" style="flex-wrap: wrap; gap: 8px;">
        <div>
          <h2 class="card-title">Active Hazards & Alternate Solutions</h2>
          <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 2px;">
            Targeted remediation, safe water alternatives, and preventive steps for ${l.ward}
          </div>
        </div>
        <span class="badge ${r.length>0?"badge-danger":"badge-safe"}">${r.length} Active Alerts</span>
      </div>

      <div style="background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.25); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 16px; font-size: 0.82rem; color: #bae6fd; line-height: 1.5;">
        💡 <strong>Actionable Household Guidance:</strong> Each alert below includes tested alternate safe-water solutions, disinfection protocols, or municipal relief resources. You can mark which solutions you have applied to keep track of your family's safety.
      </div>

      ${r.length>0?r.map(f=>xa(f,l)).join(""):'<div style="font-size: 0.9rem; color: var(--text-muted); padding: 10px 4px;">No active environmental hazard advisories for your area.</div>'}
    </div>
  `,La(a,l)}function La(a,l){a.querySelectorAll(".btn-solution-applied").forEach(r=>{r.addEventListener("click",f=>{const c=f.currentTarget.getAttribute("data-solid");Ta(l.username,c)?(f.currentTarget.classList.add("active-applied"),f.currentTarget.textContent="✓ Applied by Household",dt("Solution marked as applied by your household!")):(f.currentTarget.classList.remove("active-applied"),f.currentTarget.textContent="Mark as Applied",dt("Removed solution from applied list."))})}),a.querySelectorAll(".btn-sol-book-tester").forEach(r=>{r.addEventListener("click",()=>{lt="optionB",rt=null,K("test")})}),a.querySelectorAll(".btn-sol-self-test").forEach(r=>{r.addEventListener("click",()=>{lt="optionA",rt=null,K("test")})})}async function Sa(a,l){var r;a.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Household Profile</h2>
        <span class="badge badge-safe">Active Session</span>
      </div>
      <div style="font-size: 0.9rem; line-height: 1.8; color: #e2e8f0;">
        <div><strong>Name:</strong> ${l.name}</div>
        <div><strong>Username:</strong> ${l.username}</div>
        <div><strong>Ward:</strong> ${l.ward}</div>
        <div><strong>Panchayat:</strong> ${l.panchayat}</div>
      </div>
      <div style="margin-top: 20px;">
        <button class="btn btn-danger" id="btnLogoutHouseholdBtn">
          Log Out of AquaGuard
        </button>
      </div>
    </div>
  `,(r=document.getElementById("btnLogoutHouseholdBtn"))==null||r.addEventListener("click",()=>{Ri(),tt="household",at()})}function dt(a){const l=document.getElementById("appToast");l&&l.remove();const r=document.createElement("div");r.id="appToast",r.style.cssText=`
    position: fixed;
    top: 66px;
    left: 50%;
    transform: translateX(-50%);
    background: #0f172a;
    border: 1px solid #38bdf8;
    color: #e2e8f0;
    padding: 8px 16px;
    border-radius: 9999px;
    font-size: 0.82rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: fadeIn 0.2s ease-out;
  `,r.innerHTML=`
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${a}</span>
  `,document.body.appendChild(r),setTimeout(()=>r.remove(),3200)}
