(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))h(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function r(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function h(d){if(d.ep)return;d.ep=!0;const u=r(d);fetch(d.href,u)}})();var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fo(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ri={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(a,l){(function(r,h){h(l)})(qo,function(r){var h="1.9.4";function d(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var u=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function m(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var g=0;function v(t){return"_leaflet_id"in t||(t._leaflet_id=++g),t._leaflet_id}function T(t,e,i){var n,s,o,c;return c=function(){n=!1,s&&(o.apply(i,s),s=!1)},o=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(c,e),n=!0)},o}function x(t,e,i){var n=e[1],s=e[0],o=n-s;return t===n&&i?t:((t-s)%o+o)%o+s}function C(){return!1}function y(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function P(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function S(t){return P(t).split(/\s+/)}function b(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?u(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function H(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var R=/\{ *([\w_ -]+) *\}/g;function U(t,e){return t.replace(R,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var V=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function pt(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Ut="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function fe(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var jt=0;function Ee(t){var e=+new Date,i=Math.max(0,16-(e-jt));return jt=e+i,window.setTimeout(t,i)}var ie=window.requestAnimationFrame||fe("RequestAnimationFrame")||Ee,Dt=window.cancelAnimationFrame||fe("CancelAnimationFrame")||fe("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function at(t,e,i){if(i&&ie===Ee)t.call(e);else return ie.call(window,m(t,e))}function gt(t){t&&Dt.call(window,t)}var ps={__proto__:null,extend:d,create:u,bind:m,get lastId(){return g},stamp:v,throttle:T,wrapNum:x,falseFn:C,formatNum:y,trim:P,splitWords:S,setOptions:b,getParamString:H,template:U,isArray:V,indexOf:pt,emptyImageUrl:Ut,requestFn:ie,cancelFn:Dt,requestAnimFrame:at,cancelAnimFrame:gt};function Mt(){}Mt.extend=function(t){var e=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=u(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&d(e,t.statics),t.includes&&(gs(t.includes),d.apply(null,[n].concat(t.includes))),d(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?u(i.options):{},d(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var o=0,c=n._initHooks.length;o<c;o++)n._initHooks[o].call(this)}},e},Mt.include=function(t){var e=this.prototype.options;return d(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},Mt.mergeOptions=function(t){return d(this.prototype.options,t),this},Mt.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function gs(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=V(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ht={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=S(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=S(t);for(var s=arguments.length===1,o=0,c=t.length;o<c;o++)s?this._off(t[o]):this._off(t[o],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,o;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,o=n.length;s<o;s++)n[s].fn=C;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var c=this._listens(t,e,i);if(c!==!1){var f=n[c];this._firingCount&&(f.fn=C,this._events[t]=n=n.slice()),n.splice(c,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=d({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var o=0,c=s.length;o<c;o++){var f=s[o],p=f.fn;f.once&&this.off(t,p,f.ctx),p.call(f.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var o=this._events&&this._events[t];if(o&&o.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var c in this._eventParents)if(this._eventParents[c].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,o=n.length;s<o;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=S(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[v(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[v(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,d({layer:t.target,propagatedFrom:t.target},t),!0)}};ht.addEventListener=ht.on,ht.removeEventListener=ht.clearAllEventListeners=ht.off,ht.addOneTimeEventListener=ht.once,ht.fireEvent=ht.fire,ht.hasEventListeners=ht.listens;var me=Mt.extend(ht);function A(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var qi=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};A.prototype={clone:function(){return new A(this.x,this.y)},add:function(t){return this.clone()._add(E(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(E(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new A(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new A(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=qi(this.x),this.y=qi(this.y),this},distanceTo:function(t){t=E(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=E(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=E(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+y(this.x)+", "+y(this.y)+")"}};function E(t,e,i){return t instanceof A?t:V(t)?new A(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new A(t.x,t.y):new A(t,e,i)}function q(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}q.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof A||typeof t[0]=="number"||"x"in t)e=i=E(t);else if(t=rt(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return E((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return E(this.min.x,this.max.y)},getTopRight:function(){return E(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof A?t=E(t):t=rt(t),t instanceof q?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=rt(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>=e.x&&n.x<=i.x,c=s.y>=e.y&&n.y<=i.y;return o&&c},overlaps:function(t){t=rt(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>e.x&&n.x<i.x,c=s.y>e.y&&n.y<i.y;return o&&c},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return rt(E(e.x-n,e.y-s),E(i.x+n,i.y+s))},equals:function(t){return t?(t=rt(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function rt(t,e){return!t||t instanceof q?t:new q(t,e)}function lt(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}lt.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof D)n=t,s=t;else if(t instanceof lt){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend(O(t)||j(t)):this;return!e&&!i?(this._southWest=new D(n.lat,n.lng),this._northEast=new D(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new lt(new D(e.lat-n,e.lng-s),new D(i.lat+n,i.lng+s))},getCenter:function(){return new D((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new D(this.getNorth(),this.getWest())},getSouthEast:function(){return new D(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof D||"lat"in t?t=O(t):t=j(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof lt?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=j(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>=e.lat&&n.lat<=i.lat,c=s.lng>=e.lng&&n.lng<=i.lng;return o&&c},overlaps:function(t){t=j(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>e.lat&&n.lat<i.lat,c=s.lng>e.lng&&n.lng<i.lng;return o&&c},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=j(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function j(t,e){return t instanceof lt?t:new lt(t,e)}function D(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}D.prototype={equals:function(t,e){if(!t)return!1;t=O(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+y(this.lat,t)+", "+y(this.lng,t)+")"},distanceTo:function(t){return Zt.distance(this,O(t))},wrap:function(){return Zt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return j([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new D(this.lat,this.lng,this.alt)}};function O(t,e,i){return t instanceof D?t:V(t)&&typeof t[0]!="object"?t.length===3?new D(t[0],t[1],t[2]):t.length===2?new D(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new D(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new D(t,e,i)}var Et={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new q(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?x(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?x(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new D(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var o=t.getSouthWest(),c=t.getNorthEast(),f=new D(o.lat-n,o.lng-s),p=new D(c.lat-n,c.lng-s);return new lt(f,p)}},Zt=d({},Et,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,o=Math.sin((e.lat-t.lat)*i/2),c=Math.sin((e.lng-t.lng)*i/2),f=o*o+Math.cos(n)*Math.cos(s)*c*c,p=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));return this.R*p}}),Fi=6378137,ti={R:Fi,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new A(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new D((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=Fi*Math.PI;return new q([-t,-t],[t,t])}()};function ei(t,e,i,n){if(V(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}ei.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new A((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function pe(t,e,i,n){return new ei(t,e,i,n)}var ii=d({},Zt,{code:"EPSG:3857",projection:ti,transformation:function(){var t=.5/(Math.PI*ti.R);return pe(t,.5,-t,.5)}()}),vs=d({},ii,{code:"EPSG:900913"});function Wi(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Vi(t,e){var i="",n,s,o,c,f,p;for(n=0,o=t.length;n<o;n++){for(f=t[n],s=0,c=f.length;s<c;s++)p=f[s],i+=(s?"L":"M")+p.x+" "+p.y;i+=e?k.svg?"z":"x":""}return i||"M0 0"}var ni=document.documentElement.style,Ae="ActiveXObject"in window,_s=Ae&&!document.addEventListener,Gi="msLaunchUri"in navigator&&!("documentMode"in document),si=Pt("webkit"),Ui=Pt("android"),ji=Pt("android 2")||Pt("android 3"),ys=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),bs=Ui&&Pt("Google")&&ys<537&&!("AudioNode"in window),oi=!!window.opera,Ki=!Gi&&Pt("chrome"),Yi=Pt("gecko")&&!si&&!oi&&!Ae,ws=!Ki&&Pt("safari"),Ji=Pt("phantom"),Qi="OTransition"in ni,Ts=navigator.platform.indexOf("Win")===0,Xi=Ae&&"transition"in ni,ai="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ji,tn="MozPerspective"in ni,xs=!window.L_DISABLE_3D&&(Xi||ai||tn)&&!Qi&&!Ji,ge=typeof orientation<"u"||Pt("mobile"),Ps=ge&&si,Ls=ge&&ai,en=!window.PointerEvent&&window.MSPointerEvent,nn=!!(window.PointerEvent||en),sn="ontouchstart"in window||!!window.TouchEvent,ks=!window.L_NO_TOUCH&&(sn||nn),Ss=ge&&oi,Cs=ge&&Yi,Ms=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Es=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",C,e),window.removeEventListener("testPassiveEventSupport",C,e)}catch{}return t}(),As=function(){return!!document.createElement("canvas").getContext}(),ri=!!(document.createElementNS&&Wi("svg").createSVGRect),Is=!!ri&&function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Bs=!ri&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}}(),zs=navigator.platform.indexOf("Mac")===0,Rs=navigator.platform.indexOf("Linux")===0;function Pt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var k={ie:Ae,ielt9:_s,edge:Gi,webkit:si,android:Ui,android23:ji,androidStock:bs,opera:oi,chrome:Ki,gecko:Yi,safari:ws,phantom:Ji,opera12:Qi,win:Ts,ie3d:Xi,webkit3d:ai,gecko3d:tn,any3d:xs,mobile:ge,mobileWebkit:Ps,mobileWebkit3d:Ls,msPointer:en,pointer:nn,touch:ks,touchNative:sn,mobileOpera:Ss,mobileGecko:Cs,retina:Ms,passiveEvents:Es,canvas:As,svg:ri,vml:Bs,inlineSvg:Is,mac:zs,linux:Rs},on=k.msPointer?"MSPointerDown":"pointerdown",an=k.msPointer?"MSPointerMove":"pointermove",rn=k.msPointer?"MSPointerUp":"pointerup",ln=k.msPointer?"MSPointerCancel":"pointercancel",li={touchstart:on,touchmove:an,touchend:rn,touchcancel:ln},dn={touchstart:Zs,touchmove:Ie,touchend:Ie,touchcancel:Ie},ne={},cn=!1;function Os(t,e,i){return e==="touchstart"&&Ds(),dn[e]?(i=dn[e].bind(this,i),t.addEventListener(li[e],i,!1),i):(console.warn("wrong event specified:",e),C)}function $s(t,e,i){if(!li[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(li[e],i,!1)}function Ns(t){ne[t.pointerId]=t}function Hs(t){ne[t.pointerId]&&(ne[t.pointerId]=t)}function un(t){delete ne[t.pointerId]}function Ds(){cn||(document.addEventListener(on,Ns,!0),document.addEventListener(an,Hs,!0),document.addEventListener(rn,un,!0),document.addEventListener(ln,un,!0),cn=!0)}function Ie(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in ne)e.touches.push(ne[i]);e.changedTouches=[e],t(e)}}function Zs(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&tt(e),Ie(t,e)}function qs(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Fs=200;function Ws(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(o){if(o.detail!==1){n=o.detail;return}if(!(o.pointerType==="mouse"||o.sourceCapabilities&&!o.sourceCapabilities.firesTouchEvents)){var c=gn(o);if(!(c.some(function(p){return p instanceof HTMLLabelElement&&p.attributes.for})&&!c.some(function(p){return p instanceof HTMLInputElement||p instanceof HTMLSelectElement}))){var f=Date.now();f-i<=Fs?(n++,n===2&&e(qs(o))):n=1,i=f}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function Vs(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var di=Re(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ve=Re(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),hn=ve==="webkitTransition"||ve==="OTransition"?ve+"End":"transitionend";function fn(t){return typeof t=="string"?document.getElementById(t):t}function _e(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function N(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function F(t){var e=t.parentNode;e&&e.removeChild(t)}function Be(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function se(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function oe(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function ci(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=ze(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function B(t,e){if(t.classList!==void 0)for(var i=S(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!ci(t,e)){var o=ze(t);ui(t,(o?o+" ":"")+e)}}function G(t,e){t.classList!==void 0?t.classList.remove(e):ui(t,P((" "+ze(t)+" ").replace(" "+e+" "," ")))}function ui(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function ze(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function vt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Gs(t,e)}function Gs(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Re(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Kt(t,e,i){var n=e||new A(0,0);t.style[di]=(k.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function K(t,e){t._leaflet_pos=e,k.any3d?Kt(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Yt(t){return t._leaflet_pos||new A(0,0)}var ye,be,hi;if("onselectstart"in document)ye=function(){I(window,"selectstart",tt)},be=function(){Z(window,"selectstart",tt)};else{var we=Re(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ye=function(){if(we){var t=document.documentElement.style;hi=t[we],t[we]="none"}},be=function(){we&&(document.documentElement.style[we]=hi,hi=void 0)}}function fi(){I(window,"dragstart",tt)}function mi(){Z(window,"dragstart",tt)}var Oe,pi;function gi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&($e(),Oe=t,pi=t.style.outlineStyle,t.style.outlineStyle="none",I(window,"keydown",$e))}function $e(){Oe&&(Oe.style.outlineStyle=pi,Oe=void 0,pi=void 0,Z(window,"keydown",$e))}function mn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function vi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Us={__proto__:null,TRANSFORM:di,TRANSITION:ve,TRANSITION_END:hn,get:fn,getStyle:_e,create:N,remove:F,empty:Be,toFront:se,toBack:oe,hasClass:ci,addClass:B,removeClass:G,setClass:ui,getClass:ze,setOpacity:vt,testProp:Re,setTransform:Kt,setPosition:K,getPosition:Yt,get disableTextSelection(){return ye},get enableTextSelection(){return be},disableImageDrag:fi,enableImageDrag:mi,preventOutline:gi,restoreOutline:$e,getSizedParentNode:mn,getScale:vi};function I(t,e,i,n){if(e&&typeof e=="object")for(var s in e)yi(t,s,e[s],i);else{e=S(e);for(var o=0,c=e.length;o<c;o++)yi(t,e[o],i,n)}return this}var Lt="_leaflet_events";function Z(t,e,i,n){if(arguments.length===1)pn(t),delete t[Lt];else if(e&&typeof e=="object")for(var s in e)bi(t,s,e[s],i);else if(e=S(e),arguments.length===2)pn(t,function(f){return pt(e,f)!==-1});else for(var o=0,c=e.length;o<c;o++)bi(t,e[o],i,n);return this}function pn(t,e){for(var i in t[Lt]){var n=i.split(/\d/)[0];(!e||e(n))&&bi(t,n,null,null,i)}}var _i={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function yi(t,e,i,n){var s=e+v(i)+(n?"_"+v(n):"");if(t[Lt]&&t[Lt][s])return this;var o=function(f){return i.call(n||t,f||window.event)},c=o;!k.touchNative&&k.pointer&&e.indexOf("touch")===0?o=Os(t,e,o):k.touch&&e==="dblclick"?o=Ws(t,o):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(_i[e]||e,o,k.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(o=function(f){f=f||window.event,Ti(t,f)&&c(f)},t.addEventListener(_i[e],o,!1)):t.addEventListener(e,c,!1):t.attachEvent("on"+e,o),t[Lt]=t[Lt]||{},t[Lt][s]=o}function bi(t,e,i,n,s){s=s||e+v(i)+(n?"_"+v(n):"");var o=t[Lt]&&t[Lt][s];if(!o)return this;!k.touchNative&&k.pointer&&e.indexOf("touch")===0?$s(t,e,o):k.touch&&e==="dblclick"?Vs(t,o):"removeEventListener"in t?t.removeEventListener(_i[e]||e,o,!1):t.detachEvent("on"+e,o),t[Lt][s]=null}function Jt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function wi(t){return yi(t,"wheel",Jt),this}function Te(t){return I(t,"mousedown touchstart dblclick contextmenu",Jt),t._leaflet_disable_click=!0,this}function tt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Qt(t){return tt(t),Jt(t),this}function gn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function vn(t,e){if(!e)return new A(t.clientX,t.clientY);var i=vi(e),n=i.boundingClientRect;return new A((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var js=k.linux&&k.chrome?window.devicePixelRatio:k.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function _n(t){return k.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/js:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Ti(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Ks={__proto__:null,on:I,off:Z,stopPropagation:Jt,disableScrollPropagation:wi,disableClickPropagation:Te,preventDefault:tt,stop:Qt,getPropagationPath:gn,getMousePosition:vn,getWheelDelta:_n,isExternalTarget:Ti,addListener:I,removeListener:Z},yn=me.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Yt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=at(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),K(this._el,i),this.fire("step")},_complete:function(){gt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),$=me.extend({options:{crs:ii,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=b(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=m(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(O(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ve&&k.any3d&&!k.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),I(this._proxy,hn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(O(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=d({animate:i.animate},i.zoom),i.pan=d({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(k.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(k.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),o=t instanceof A?t:this.latLngToContainerPoint(t),c=o.subtract(s).multiplyBy(1-1/n),f=this.containerPointToLatLng(s.add(c));return this.setView(f,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():j(t);var i=E(e.paddingTopLeft||e.padding||[0,0]),n=E(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var o=n.subtract(i).divideBy(2),c=this.project(t.getSouthWest(),s),f=this.project(t.getNorthEast(),s),p=this.unproject(c.add(f).divideBy(2).add(o),s);return{center:p,zoom:s}},fitBounds:function(t,e){if(t=j(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=E(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new yn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){B(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!k.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),o=this.getSize(),c=this._zoom;t=O(t),e=e===void 0?c:e;var f=Math.max(o.x,o.y),p=f*this.getZoomScale(c,e),_=s.distanceTo(n)||1,w=1.42,M=w*w;function z(Y){var Ke=Y?-1:1,No=Y?p:f,Ho=p*p-f*f+Ke*M*M*_*_,Do=2*No*M*_,Bi=Ho/Do,Xn=Math.sqrt(Bi*Bi+1)-Bi,Zo=Xn<1e-9?-18:Math.log(Xn);return Zo}function nt(Y){return(Math.exp(Y)-Math.exp(-Y))/2}function X(Y){return(Math.exp(Y)+Math.exp(-Y))/2}function yt(Y){return nt(Y)/X(Y)}var dt=z(0);function ue(Y){return f*(X(dt)/X(dt+w*Y))}function zo(Y){return f*(X(dt)*yt(dt+w*Y)-nt(dt))/M}function Ro(Y){return 1-Math.pow(1-Y,1.5)}var Oo=Date.now(),Jn=(z(1)-dt)/w,$o=i.duration?1e3*i.duration:1e3*Jn*.8;function Qn(){var Y=(Date.now()-Oo)/$o,Ke=Ro(Y)*Jn;Y<=1?(this._flyToFrame=at(Qn,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(zo(Ke)/_)),c),this.getScaleZoom(f/ue(Ke),c),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),Qn.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=j(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,j(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=E(e.paddingTopLeft||e.padding||[0,0]),n=E(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),o=this.project(t),c=this.getPixelBounds(),f=rt([c.min.add(i),c.max.subtract(n)]),p=f.getSize();if(!f.contains(o)){this._enforcingBounds=!0;var _=o.subtract(f.getCenter()),w=f.extend(o).getSize().subtract(p);s.x+=_.x<0?-w.x:w.x,s.y+=_.y<0?-w.y:w.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=d({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),o=n.subtract(s);return!o.x&&!o.y?this:(t.animate&&t.pan?this.panBy(o):(t.pan&&this._rawPanBy(o),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(m(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=d({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=m(this._handleGeolocationResponse,this),i=m(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new D(e,i),s=n.toBounds(t.coords.accuracy*2),o=this._locateOptions;if(o.setView){var c=this.getBoundsZoom(s);this.setView(n,o.maxZoom?Math.min(c,o.maxZoom):c)}var f={latlng:n,bounds:s,timestamp:t.timestamp};for(var p in t.coords)typeof t.coords[p]=="number"&&(f[p]=t.coords[p]);this.fire("locationfound",f)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),F(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(gt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)F(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=N("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new lt(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=j(t),i=E(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),o=this.getMaxZoom(),c=t.getNorthWest(),f=t.getSouthEast(),p=this.getSize().subtract(i),_=rt(this.project(f,n),this.project(c,n)).getSize(),w=k.any3d?this.options.zoomSnap:1,M=p.x/_.x,z=p.y/_.y,nt=e?Math.max(M,z):Math.min(M,z);return n=this.getScaleZoom(nt,n),w&&(n=Math.round(n/(w/100))*(w/100),n=e?Math.ceil(n/w)*w:Math.floor(n/w)*w),Math.max(s,Math.min(o,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new A(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new q(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(O(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(E(t),e)},layerPointToLatLng:function(t){var e=E(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(O(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(O(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(j(t))},distance:function(t,e){return this.options.crs.distance(O(t),O(e))},containerPointToLayerPoint:function(t){return E(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return E(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(E(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(O(t)))},mouseEventToContainerPoint:function(t){return vn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=fn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");I(e,"scroll",this._onScroll,this),this._containerId=v(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&k.any3d,B(t,"leaflet-container"+(k.touch?" leaflet-touch":"")+(k.retina?" leaflet-retina":"")+(k.ielt9?" leaflet-oldie":"")+(k.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=_e(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),K(this._mapPane,new A(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(B(t.markerPane,"leaflet-zoom-hide"),B(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){K(this._mapPane,new A(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return gt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){K(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[v(this._container)]=this;var e=t?Z:I;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),k.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){gt(this._resizeRequest),this._resizeRequest=at(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",o=t.target||t.srcElement,c=!1;o;){if(n=this._targets[v(o)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){c=!0;break}if(n&&n.listens(e,!0)&&(s&&!Ti(o,t)||(i.push(n),s))||o===this._container)break;o=o.parentNode}return!i.length&&!c&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&gi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=d({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var o=[],c=0;c<i.length;c++)i[c].listens(e,!0)&&o.push(i[c]);s=o.concat(s)}if(s.length){e==="contextmenu"&&tt(t);var f=s[0],p={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var _=f.getLatLng&&(!f._radius||f._radius<=10);p.containerPoint=_?this.latLngToContainerPoint(f.getLatLng()):this.mouseEventToContainerPoint(t),p.layerPoint=this.containerPointToLayerPoint(p.containerPoint),p.latlng=_?f.getLatLng():this.layerPointToLatLng(p.layerPoint)}for(c=0;c<s.length;c++)if(s[c].fire(e,p,!0),p.originalEvent._stopped||s[c].options.bubblingMouseEvents===!1&&pt(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Yt(this._mapPane)||new A(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return rt([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),o=new q(n.subtract(s),n.add(s)),c=this._getBoundsOffset(o,i,e);return Math.abs(c.x)<=1&&Math.abs(c.y)<=1?t:this.unproject(n.add(c),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new q(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=rt(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),o=n.max.subtract(t.max),c=this._rebound(s.x,-o.x),f=this._rebound(s.y,-o.y);return new A(c,f)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=k.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){G(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=N("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=di,n=this._proxy.style[i];Kt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){F(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Kt(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(at(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,B(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(m(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&G(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ys(t,e){return new $(t,e)}var bt=Mt.extend({options:{position:"topright"},initialize:function(t){b(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return B(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(F(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),xe=function(t){return new bt(t)};$.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=N("div",e+"control-container",this._container);function n(s,o){var c=e+s+" "+e+o;t[s+o]=N("div",c,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)F(this._controlCorners[t]);F(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var bn=bt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){b(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return bt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(v(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){B(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(B(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):G(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return G(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=N("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),Te(e),wi(e);var n=this._section=N("section",t+"-list");i&&(this._map.on("click",this.collapse,this),I(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=N("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),I(s,{keydown:function(o){o.keyCode===13&&this._expandSafely()},click:function(o){tt(o),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=N("div",t+"-base",n),this._separator=N("div",t+"-separator",n),this._overlaysList=N("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&v(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(m(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Be(this._baseLayersList),Be(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(v(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+v(this),i),this._layerControlInputs.push(n),n.layerId=v(t.layer),I(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var o=document.createElement("span");e.appendChild(o),o.appendChild(n),o.appendChild(s);var c=t.overlay?this._overlaysList:this._baseLayersList;return c.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(o=0;o<s.length;o++)this._map.hasLayer(s[o])&&this._map.removeLayer(s[o]);for(o=0;o<n.length;o++)this._map.hasLayer(n[o])||this._map.addLayer(n[o]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,I(t,"click",tt),this.expand();var e=this;setTimeout(function(){Z(t,"click",tt),e._preventClick=!1})}}),Js=function(t,e,i){return new bn(t,e,i)},xi=bt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=N("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var o=N("a",i,n);return o.innerHTML=t,o.href="#",o.title=e,o.setAttribute("role","button"),o.setAttribute("aria-label",e),Te(o),I(o,"click",Qt),I(o,"click",s,this),I(o,"click",this._refocusOnMap,this),o},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";G(this._zoomInButton,e),G(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(B(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(B(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});$.mergeOptions({zoomControl:!0}),$.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new xi,this.addControl(this.zoomControl))});var Qs=function(t){return new xi(t)},wn=bt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=N("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=N("div",e,i)),t.imperial&&(this._iScale=N("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),Xs=function(t){return new wn(t)},to='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Pi=bt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(k.inlineSvg?to+" ":"")+"Leaflet</a>"},initialize:function(t){b(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=N("div","leaflet-control-attribution"),Te(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});$.mergeOptions({attributionControl:!0}),$.addInitHook(function(){this.options.attributionControl&&new Pi().addTo(this)});var eo=function(t){return new Pi(t)};bt.Layers=bn,bt.Zoom=xi,bt.Scale=wn,bt.Attribution=Pi,xe.layers=Js,xe.zoom=Qs,xe.scale=Xs,xe.attribution=eo;var kt=Mt.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});kt.addTo=function(t,e){return t.addHandler(e,this),this};var io={Events:ht},Tn=k.touch?"touchstart mousedown":"mousedown",qt=me.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){b(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(I(this._dragStartTarget,Tn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(qt._dragging===this&&this.finishDrag(!0),Z(this._dragStartTarget,Tn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!ci(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){qt._dragging===this&&this.finishDrag();return}if(!(qt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(qt._dragging=this,this._preventOutline&&gi(this._element),fi(),ye(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=mn(this._element);this._startPoint=new A(e.clientX,e.clientY),this._startPos=Yt(this._element),this._parentScale=vi(i);var n=t.type==="mousedown";I(document,n?"mousemove":"touchmove",this._onMove,this),I(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new A(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,tt(t),this._moved||(this.fire("dragstart"),this._moved=!0,B(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),B(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),K(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){G(document.body,"leaflet-dragging"),this._lastTarget&&(G(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Z(document,"mousemove touchmove",this._onMove,this),Z(document,"mouseup touchend touchcancel",this._onUp,this),mi(),be();var e=this._moved&&this._moving;this._moving=!1,qt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function xn(t,e,i){var n,s=[1,4,2,8],o,c,f,p,_,w,M,z;for(o=0,w=t.length;o<w;o++)t[o]._code=Xt(t[o],e);for(f=0;f<4;f++){for(M=s[f],n=[],o=0,w=t.length,c=w-1;o<w;c=o++)p=t[o],_=t[c],p._code&M?_._code&M||(z=Ne(_,p,M,e,i),z._code=Xt(z,e),n.push(z)):(_._code&M&&(z=Ne(_,p,M,e,i),z._code=Xt(z,e),n.push(z)),n.push(p));t=n}return t}function Pn(t,e){var i,n,s,o,c,f,p,_,w;if(!t||t.length===0)throw new Error("latlngs not passed");_t(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var M=O([0,0]),z=j(t),nt=z.getNorthWest().distanceTo(z.getSouthWest())*z.getNorthEast().distanceTo(z.getNorthWest());nt<1700&&(M=Li(t));var X=t.length,yt=[];for(i=0;i<X;i++){var dt=O(t[i]);yt.push(e.project(O([dt.lat-M.lat,dt.lng-M.lng])))}for(f=p=_=0,i=0,n=X-1;i<X;n=i++)s=yt[i],o=yt[n],c=s.y*o.x-o.y*s.x,p+=(s.x+o.x)*c,_+=(s.y+o.y)*c,f+=c*3;f===0?w=yt[0]:w=[p/f,_/f];var ue=e.unproject(E(w));return O([ue.lat+M.lat,ue.lng+M.lng])}function Li(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var o=O(t[s]);e+=o.lat,i+=o.lng,n++}return O([e/n,i/n])}var no={__proto__:null,clipPolygon:xn,polygonCenter:Pn,centroid:Li};function Ln(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=ao(t,i),t=oo(t,i),t}function kn(t,e,i){return Math.sqrt(Pe(t,e,i,!0))}function so(t,e,i){return Pe(t,e,i)}function oo(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,ki(t,s,e,0,i-1);var o,c=[];for(o=0;o<i;o++)s[o]&&c.push(t[o]);return c}function ki(t,e,i,n,s){var o=0,c,f,p;for(f=n+1;f<=s-1;f++)p=Pe(t[f],t[n],t[s],!0),p>o&&(c=f,o=p);o>i&&(e[c]=1,ki(t,e,i,n,c),ki(t,e,i,c,s))}function ao(t,e){for(var i=[t[0]],n=1,s=0,o=t.length;n<o;n++)ro(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<o-1&&i.push(t[o-1]),i}var Sn;function Cn(t,e,i,n,s){var o=n?Sn:Xt(t,i),c=Xt(e,i),f,p,_;for(Sn=c;;){if(!(o|c))return[t,e];if(o&c)return!1;f=o||c,p=Ne(t,e,f,i,s),_=Xt(p,i),f===o?(t=p,o=_):(e=p,c=_)}}function Ne(t,e,i,n,s){var o=e.x-t.x,c=e.y-t.y,f=n.min,p=n.max,_,w;return i&8?(_=t.x+o*(p.y-t.y)/c,w=p.y):i&4?(_=t.x+o*(f.y-t.y)/c,w=f.y):i&2?(_=p.x,w=t.y+c*(p.x-t.x)/o):i&1&&(_=f.x,w=t.y+c*(f.x-t.x)/o),new A(_,w,s)}function Xt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ro(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function Pe(t,e,i,n){var s=e.x,o=e.y,c=i.x-s,f=i.y-o,p=c*c+f*f,_;return p>0&&(_=((t.x-s)*c+(t.y-o)*f)/p,_>1?(s=i.x,o=i.y):_>0&&(s+=c*_,o+=f*_)),c=t.x-s,f=t.y-o,n?c*c+f*f:new A(s,o)}function _t(t){return!V(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Mn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),_t(t)}function En(t,e){var i,n,s,o,c,f,p,_;if(!t||t.length===0)throw new Error("latlngs not passed");_t(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var w=O([0,0]),M=j(t),z=M.getNorthWest().distanceTo(M.getSouthWest())*M.getNorthEast().distanceTo(M.getNorthWest());z<1700&&(w=Li(t));var nt=t.length,X=[];for(i=0;i<nt;i++){var yt=O(t[i]);X.push(e.project(O([yt.lat-w.lat,yt.lng-w.lng])))}for(i=0,n=0;i<nt-1;i++)n+=X[i].distanceTo(X[i+1])/2;if(n===0)_=X[0];else for(i=0,o=0;i<nt-1;i++)if(c=X[i],f=X[i+1],s=c.distanceTo(f),o+=s,o>n){p=(o-n)/s,_=[f.x-p*(f.x-c.x),f.y-p*(f.y-c.y)];break}var dt=e.unproject(E(_));return O([dt.lat+w.lat,dt.lng+w.lng])}var lo={__proto__:null,simplify:Ln,pointToSegmentDistance:kn,closestPointOnSegment:so,clipSegment:Cn,_getEdgeIntersection:Ne,_getBitCode:Xt,_sqClosestPointOnSegment:Pe,isFlat:_t,_flat:Mn,polylineCenter:En},Si={project:function(t){return new A(t.lng,t.lat)},unproject:function(t){return new D(t.y,t.x)},bounds:new q([-180,-90],[180,90])},Ci={R:6378137,R_MINOR:6356752314245179e-9,bounds:new q([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,o=Math.sqrt(1-s*s),c=o*Math.sin(n),f=Math.tan(Math.PI/4-n/2)/Math.pow((1-c)/(1+c),o/2);return n=-i*Math.log(Math.max(f,1e-10)),new A(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),o=Math.exp(-t.y/i),c=Math.PI/2-2*Math.atan(o),f=0,p=.1,_;f<15&&Math.abs(p)>1e-7;f++)_=s*Math.sin(c),_=Math.pow((1-_)/(1+_),s/2),p=Math.PI/2-2*Math.atan(o*_)-c,c+=p;return new D(c*e,t.x*e/i)}},co={__proto__:null,LonLat:Si,Mercator:Ci,SphericalMercator:ti},uo=d({},Zt,{code:"EPSG:3395",projection:Ci,transformation:function(){var t=.5/(Math.PI*Ci.R);return pe(t,.5,-t,.5)}()}),An=d({},Zt,{code:"EPSG:4326",projection:Si,transformation:pe(1/180,1,-1/180,.5)}),ho=d({},Et,{projection:Si,transformation:pe(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Et.Earth=Zt,Et.EPSG3395=uo,Et.EPSG3857=ii,Et.EPSG900913=vs,Et.EPSG4326=An,Et.Simple=ho;var wt=me.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[v(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[v(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});$.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=v(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=v(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return v(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?V(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[v(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=v(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ae=wt.extend({initialize:function(t,e){b(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return v(t)}}),fo=function(t,e){return new ae(t,e)},At=ae.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),ae.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),ae.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new lt;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),mo=function(t,e){return new At(t,e)},re=Mt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){b(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=E(n),o=E(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return k.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function po(t){return new re(t)}var Le=re.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof Le.imagePath!="string"&&(Le.imagePath=this._detectIconPath()),(this.options.imagePath||Le.imagePath)+re.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var o=n.exec(i);return o&&o[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=N("div","leaflet-default-icon-path",document.body),e=_e(t,"background-image")||_e(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),In=kt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new qt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),B(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&G(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,o=Yt(e._icon),c=i.getPixelBounds(),f=i.getPixelOrigin(),p=rt(c.min._subtract(f).add(s),c.max._subtract(f).subtract(s));if(!p.contains(o)){var _=E((Math.max(p.max.x,o.x)-p.max.x)/(c.max.x-p.max.x)-(Math.min(p.min.x,o.x)-p.min.x)/(c.min.x-p.min.x),(Math.max(p.max.y,o.y)-p.max.y)/(c.max.y-p.max.y)-(Math.min(p.min.y,o.y)-p.min.y)/(c.min.y-p.min.y)).multiplyBy(n);i.panBy(_,{animate:!1}),this._draggable._newPos._add(_),this._draggable._startPos._add(_),K(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=at(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(gt(this._panRequest),this._panRequest=at(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Yt(e._icon),s=e._map.layerPointToLatLng(n);i&&K(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){gt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),He=wt.extend({options:{icon:new Le,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){b(this,e),this._latlng=O(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=O(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),B(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&I(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),o=!1;s!==this._shadow&&(this._removeShadow(),o=!0),s&&(B(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Z(this._icon,"focus",this._panOnFocus,this),F(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&F(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&K(this._icon,t),this._shadow&&K(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(B(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),In)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new In(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&vt(this._icon,t),this._shadow&&vt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?E(e.iconSize):E(0,0),n=e.iconAnchor?E(e.iconAnchor):E(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function go(t,e){return new He(t,e)}var Ft=wt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return b(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),De=Ft.extend({options:{fill:!0,radius:10},initialize:function(t,e){b(this,e),this._latlng=O(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=O(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Ft.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new q(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function vo(t,e){return new De(t,e)}var Mi=De.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=d({},i,{radius:e})),b(this,e),this._latlng=O(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new lt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Ft.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===Zt.distance){var s=Math.PI/180,o=this._mRadius/Zt.R/s,c=i.project([e+o,t]),f=i.project([e-o,t]),p=c.add(f).divideBy(2),_=i.unproject(p).lat,w=Math.acos((Math.cos(o*s)-Math.sin(e*s)*Math.sin(_*s))/(Math.cos(e*s)*Math.cos(_*s)))/s;(isNaN(w)||w===0)&&(w=o/Math.cos(Math.PI/180*e)),this._point=p.subtract(i.getPixelOrigin()),this._radius=isNaN(w)?0:p.x-i.project([_,t-w]).x,this._radiusY=p.y-c.y}else{var M=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(M).x}this._updateBounds()}});function _o(t,e,i){return new Mi(t,e,i)}var It=Ft.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){b(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=Pe,s,o,c=0,f=this._parts.length;c<f;c++)for(var p=this._parts[c],_=1,w=p.length;_<w;_++){s=p[_-1],o=p[_];var M=n(t,s,o,!0);M<e&&(e=M,i=n(t,s,o))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return En(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=O(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new lt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return _t(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=_t(t),n=0,s=t.length;n<s;n++)i?(e[n]=O(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new q;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new A(t,t);this._rawPxBounds&&(this._pxBounds=new q([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof D,s=t.length,o,c;if(n){for(c=[],o=0;o<s;o++)c[o]=this._map.latLngToLayerPoint(t[o]),i.extend(c[o]);e.push(c)}else for(o=0;o<s;o++)this._projectLatlngs(t[o],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,o,c,f,p;for(i=0,s=0,o=this._rings.length;i<o;i++)for(p=this._rings[i],n=0,c=p.length;n<c-1;n++)f=Cn(p[n],p[n+1],t,n,!0),f&&(e[s]=e[s]||[],e[s].push(f[0]),(f[1]!==p[n+1]||n===c-2)&&(e[s].push(f[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=Ln(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,o,c,f,p=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,o=this._parts.length;i<o;i++)for(f=this._parts[i],n=0,c=f.length,s=c-1;n<c;s=n++)if(!(!e&&n===0)&&kn(t,f[s],f[n])<=p)return!0;return!1}});function yo(t,e){return new It(t,e)}It._flat=Mn;var le=It.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=It.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof D&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){It.prototype._setLatLngs.call(this,t),_t(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return _t(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new A(e,e);if(t=new q(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,o;n<s;n++)o=xn(this._rings[n],t,!0),o.length&&this._parts.push(o)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,o,c,f,p,_;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,p=this._parts.length;o<p;o++)for(i=this._parts[o],c=0,_=i.length,f=_-1;c<_;f=c++)n=i[c],s=i[f],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||It.prototype._containsPoint.call(this,t,!0)}});function bo(t,e){return new le(t,e)}var Bt=At.extend({initialize:function(t,e){b(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=V(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var o=this.options;if(o.filter&&!o.filter(t))return this;var c=Ze(t,o);return c?(c.feature=We(t),c.defaultOptions=c.options,this.resetStyle(c),o.onEachFeature&&o.onEachFeature(t,c),this.addLayer(c)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=d({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Ze(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],o=e&&e.pointToLayer,c=e&&e.coordsToLatLng||Ei,f,p,_,w;if(!n&&!i)return null;switch(i.type){case"Point":return f=c(n),Bn(o,t,f,e);case"MultiPoint":for(_=0,w=n.length;_<w;_++)f=c(n[_]),s.push(Bn(o,t,f,e));return new At(s);case"LineString":case"MultiLineString":return p=qe(n,i.type==="LineString"?0:1,c),new It(p,e);case"Polygon":case"MultiPolygon":return p=qe(n,i.type==="Polygon"?1:2,c),new le(p,e);case"GeometryCollection":for(_=0,w=i.geometries.length;_<w;_++){var M=Ze({geometry:i.geometries[_],type:"Feature",properties:t.properties},e);M&&s.push(M)}return new At(s);case"FeatureCollection":for(_=0,w=i.features.length;_<w;_++){var z=Ze(i.features[_],e);z&&s.push(z)}return new At(s);default:throw new Error("Invalid GeoJSON object.")}}function Bn(t,e,i,n){return t?t(e,i):new He(i,n&&n.markersInheritOptions&&n)}function Ei(t){return new D(t[1],t[0],t[2])}function qe(t,e,i){for(var n=[],s=0,o=t.length,c;s<o;s++)c=e?qe(t[s],e-1,i):(i||Ei)(t[s]),n.push(c);return n}function Ai(t,e){return t=O(t),t.alt!==void 0?[y(t.lng,e),y(t.lat,e),y(t.alt,e)]:[y(t.lng,e),y(t.lat,e)]}function Fe(t,e,i,n){for(var s=[],o=0,c=t.length;o<c;o++)s.push(e?Fe(t[o],_t(t[o])?0:e-1,i,n):Ai(t[o],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function de(t,e){return t.feature?d({},t.feature,{geometry:e}):We(e)}function We(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Ii={toGeoJSON:function(t){return de(this,{type:"Point",coordinates:Ai(this.getLatLng(),t)})}};He.include(Ii),Mi.include(Ii),De.include(Ii),It.include({toGeoJSON:function(t){var e=!_t(this._latlngs),i=Fe(this._latlngs,e?1:0,!1,t);return de(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),le.include({toGeoJSON:function(t){var e=!_t(this._latlngs),i=e&&!_t(this._latlngs[0]),n=Fe(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),de(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),ae.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),de(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var o=s.toGeoJSON(t);if(i)n.push(o.geometry);else{var c=We(o);c.type==="FeatureCollection"?n.push.apply(n,c.features):n.push(c)}}}),i?de(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function zn(t,e){return new Bt(t,e)}var wo=zn,Ve=wt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=j(e),b(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(B(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){F(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&se(this._image),this},bringToBack:function(){return this._map&&oe(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=j(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:N("img");if(B(e,"leaflet-image-layer"),this._zoomAnimated&&B(e,"leaflet-zoom-animated"),this.options.className&&B(e,this.options.className),e.onselectstart=C,e.onmousemove=C,e.onload=m(this.fire,this,"load"),e.onerror=m(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Kt(this._image,i,e)},_reset:function(){var t=this._image,e=new q(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();K(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){vt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),To=function(t,e,i){return new Ve(t,e,i)},Rn=Ve.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:N("video");if(B(e,"leaflet-image-layer"),this._zoomAnimated&&B(e,"leaflet-zoom-animated"),this.options.className&&B(e,this.options.className),e.onselectstart=C,e.onmousemove=C,e.onloadeddata=m(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}V(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var c=N("source");c.src=this._url[o],e.appendChild(c)}}});function xo(t,e,i){return new Rn(t,e,i)}var On=Ve.extend({_initImage:function(){var t=this._image=this._url;B(t,"leaflet-image-layer"),this._zoomAnimated&&B(t,"leaflet-zoom-animated"),this.options.className&&B(t,this.options.className),t.onselectstart=C,t.onmousemove=C}});function Po(t,e,i){return new On(t,e,i)}var St=wt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof D||V(t))?(this._latlng=O(t),b(this,e)):(b(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&vt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&vt(this._container,1),this.bringToFront(),this.options.interactive&&(B(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(vt(this._container,0),this._removeTimeout=setTimeout(m(F,void 0,this._container),200)):F(this._container),this.options.interactive&&(G(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=O(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&se(this._container),this},bringToBack:function(){return this._map&&oe(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof At){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=E(this.options.offset),i=this._getAnchor();this._zoomAnimated?K(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});$.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),wt.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(b(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var Ge=St.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,St.prototype.openOn.call(this,t)},onAdd:function(t){St.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Ft||this._source.on("preclick",Jt))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ft||this._source.off("preclick",Jt))},getEvents:function(){var t=St.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=N("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=N("div",t+"-content-wrapper",e);if(this._contentNode=N("div",t+"-content",i),Te(e),wi(this._contentNode),I(e,"contextmenu",Jt),this._tipContainer=N("div",t+"-tip-container",e),this._tip=N("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=N("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',I(n,"click",function(s){tt(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",B(t,o)):G(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();K(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(_e(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new A(this._containerLeft,-i-this._containerBottom);s._add(Yt(this._container));var o=t.layerPointToContainerPoint(s),c=E(this.options.autoPanPadding),f=E(this.options.autoPanPaddingTopLeft||c),p=E(this.options.autoPanPaddingBottomRight||c),_=t.getSize(),w=0,M=0;o.x+n+p.x>_.x&&(w=o.x+n-_.x+p.x),o.x-w-f.x<0&&(w=o.x-f.x),o.y+i+p.y>_.y&&(M=o.y+i-_.y+p.y),o.y-M-f.y<0&&(M=o.y-f.y),(w||M)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([w,M]))}},_getAnchor:function(){return E(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Lo=function(t,e){return new Ge(t,e)};$.mergeOptions({closePopupOnClick:!0}),$.include({openPopup:function(t,e,i){return this._initOverlay(Ge,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),wt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Ge,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof At||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Qt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Ft)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Ue=St.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){St.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=St.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=N("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+v(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,o=n.latLngToContainerPoint(n.getCenter()),c=n.layerPointToContainerPoint(t),f=this.options.direction,p=s.offsetWidth,_=s.offsetHeight,w=E(this.options.offset),M=this._getAnchor();f==="top"?(e=p/2,i=_):f==="bottom"?(e=p/2,i=0):f==="center"?(e=p/2,i=_/2):f==="right"?(e=0,i=_/2):f==="left"?(e=p,i=_/2):c.x<o.x?(f="right",e=0,i=_/2):(f="left",e=p+(w.x+M.x)*2,i=_/2),t=t.subtract(E(e,i,!0)).add(w).add(M),G(s,"leaflet-tooltip-right"),G(s,"leaflet-tooltip-left"),G(s,"leaflet-tooltip-top"),G(s,"leaflet-tooltip-bottom"),B(s,"leaflet-tooltip-"+f),K(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&vt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return E(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),ko=function(t,e){return new Ue(t,e)};$.include({openTooltip:function(t,e,i){return this._initOverlay(Ue,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),wt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ue,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof At||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(I(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),I(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var $n=re.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Be(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=E(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function So(t){return new $n(t)}re.Default=Le;var ke=wt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:k.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){b(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),F(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(se(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(oe(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=T(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof A?t:new A(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,o;n<s;n++)o=e[n].style.zIndex,e[n]!==this._container&&o&&(i=t(i,+o));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!k.ielt9){vt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var o=Math.min(1,(t-s.loaded)/200);vt(s.el,o),o<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(gt(this._fadeFrame),this._fadeFrame=at(this._updateOpacity,this))}},_onOpaqueTile:C,_initContainer:function(){this._container||(this._container=N("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(F(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=N("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),C(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:C,_onRemoveLevel:C,_onCreateLevel:C,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)F(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),o=Math.floor(e/2),c=i-1,f=new A(+s,+o);f.z=+c;var p=this._tileCoordsToKey(f),_=this._tiles[p];return _&&_.active?(_.retain=!0,!0):(_&&_.loaded&&(_.retain=!0),c>n?this._retainParent(s,o,c,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var o=2*e;o<2*e+2;o++){var c=new A(s,o);c.z=i+1;var f=this._tileCoordsToKey(c),p=this._tiles[f];if(p&&p.active){p.retain=!0;continue}else p&&p.loaded&&(p.retain=!0);i+1<n&&this._retainChildren(s,o,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var o=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||o)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();k.any3d?Kt(t.el,s,n):K(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),o=e.getSize().divideBy(n*2);return new q(s.subtract(o),s.add(o))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),o=s.getCenter(),c=[],f=this.options.keepBuffer,p=new q(s.getBottomLeft().subtract([f,-f]),s.getTopRight().add([f,-f]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var _ in this._tiles){var w=this._tiles[_].coords;(w.z!==this._tileZoom||!p.contains(new A(w.x,w.y)))&&(this._tiles[_].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var M=s.min.y;M<=s.max.y;M++)for(var z=s.min.x;z<=s.max.x;z++){var nt=new A(z,M);if(nt.z=this._tileZoom,!!this._isValidTile(nt)){var X=this._tiles[this._tileCoordsToKey(nt)];X?X.current=!0:c.push(nt)}}if(c.sort(function(dt,ue){return dt.distanceTo(o)-ue.distanceTo(o)}),c.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var yt=document.createDocumentFragment();for(z=0;z<c.length;z++)this._addTile(c[z],yt);this._level.el.appendChild(yt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return j(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),o=e.unproject(n,t.z),c=e.unproject(s,t.z);return[o,c]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new lt(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new A(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(F(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){B(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=C,t.onmousemove=C,k.ielt9&&this.options.opacity<1&&vt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),m(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&at(m(this._tileReady,this,t,null,s)),K(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(vt(i.el,0),gt(this._fadeFrame),this._fadeFrame=at(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(B(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),k.ielt9||!this._map._fadeAnimated?at(this._pruneTiles,this):setTimeout(m(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new A(this._wrapX?x(t.x,this._wrapX):t.x,this._wrapY?x(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new q(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Co(t){return new ke(t)}var ce=ke.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=b(this,e),e.detectRetina&&k.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return I(i,"load",m(this._tileOnLoad,this,e,i)),I(i,"error",m(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:k.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return U(this._url,d(e,this.options))},_tileOnLoad:function(t,e){k.ielt9?setTimeout(m(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=C,e.onerror=C,!e.complete)){e.src=Ut;var i=this._tiles[t].coords;F(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Ut),ke.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Ut))return ke.prototype._tileReady.call(this,t,e,i)}});function Nn(t,e){return new ce(t,e)}var Hn=ce.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=d({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=b(this,e);var s=e.detectRetina&&k.retina?2:1,o=this.getTileSize();i.width=o.x*s,i.height=o.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,ce.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=rt(i.project(e[0]),i.project(e[1])),s=n.min,o=n.max,c=(this._wmsVersion>=1.3&&this._crs===An?[s.y,s.x,o.y,o.x]:[s.x,s.y,o.x,o.y]).join(","),f=ce.prototype.getTileUrl.call(this,t);return f+H(this.wmsParams,f,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+c},setParams:function(t,e){return d(this.wmsParams,t),e||this.redraw(),this}});function Mo(t,e){return new Hn(t,e)}ce.WMS=Hn,Nn.wms=Mo;var zt=wt.extend({options:{padding:.1},initialize:function(t){b(this,t),v(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),B(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),o=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));k.any3d?Kt(this._container,o,i):K(this._container,o)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new q(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Dn=zt.extend({options:{tolerance:0},getEvents:function(){var t=zt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){zt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");I(t,"mousemove",this._onMouseMove,this),I(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),I(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){gt(this._redrawRequest),delete this._ctx,F(this._container),Z(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){zt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=k.retina?2:1;K(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",k.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){zt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[v(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[v(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||at(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new q,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,o,c=t._parts,f=c.length,p=this._ctx;if(f){for(p.beginPath(),i=0;i<f;i++){for(n=0,s=c[i].length;n<s;n++)o=c[i][n],p[n?"lineTo":"moveTo"](o.x,o.y);e&&p.closePath()}this._fillStroke(p,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(G(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(B(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(m(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function Zn(t){return k.canvas?new Dn(t):null}var Se=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Eo={_initContainer:function(){this._container=N("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(zt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Se("shape");B(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Se("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[v(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;F(e),t.removeInteractiveTarget(e),delete this._layers[v(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=Se("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=V(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=Se("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){se(t._container)},_bringToBack:function(t){oe(t._container)}},je=k.vml?Se:Wi,Ce=zt.extend({_initContainer:function(){this._container=je("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=je("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){F(this._container),Z(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){zt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),K(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=je("path");t.options.className&&B(e,t.options.className),t.options.interactive&&B(e,"leaflet-interactive"),this._updateStyle(t),this._layers[v(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){F(t._path),t.removeInteractiveTarget(t._path),delete this._layers[v(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Vi(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,o)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){se(t._path)},_bringToBack:function(t){oe(t._path)}});k.vml&&Ce.include(Eo);function qn(t){return k.svg||k.vml?new Ce(t):null}$.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Zn(t)||qn(t)}});var Fn=le.extend({initialize:function(t,e){le.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=j(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Ao(t,e){return new Fn(t,e)}Ce.create=je,Ce.pointsToPath=Vi,Bt.geometryToLayer=Ze,Bt.coordsToLatLng=Ei,Bt.coordsToLatLngs=qe,Bt.latLngToCoords=Ai,Bt.latLngsToCoords=Fe,Bt.getFeature=de,Bt.asFeature=We,$.mergeOptions({boxZoom:!0});var Wn=kt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){I(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Z(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){F(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ye(),fi(),this._startPoint=this._map.mouseEventToContainerPoint(t),I(document,{contextmenu:Qt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=N("div","leaflet-zoom-box",this._container),B(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new q(this._point,this._startPoint),i=e.getSize();K(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(F(this._box),G(this._container,"leaflet-crosshair")),be(),mi(),Z(document,{contextmenu:Qt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(m(this._resetState,this),0);var e=new lt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});$.addInitHook("addHandler","boxZoom",Wn),$.mergeOptions({doubleClickZoom:!0});var Vn=kt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});$.addInitHook("addHandler","doubleClickZoom",Vn),$.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Gn=kt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new qt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}B(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){G(this._map._container,"leaflet-grab"),G(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=j(this._map.options.maxBounds);this._offsetLimit=rt(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,o=(n+e+i)%t-e-i,c=Math.abs(s+i)<Math.abs(o+i)?s:o;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=c},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),o=(this._lastTime-this._times[0])/1e3,c=i.easeLinearity,f=s.multiplyBy(c/o),p=f.distanceTo([0,0]),_=Math.min(i.inertiaMaxSpeed,p),w=f.multiplyBy(_/p),M=_/(i.inertiaDeceleration*c),z=w.multiplyBy(-M/2).round();!z.x&&!z.y?e.fire("moveend"):(z=e._limitOffset(z,e.options.maxBounds),at(function(){e.panBy(z,{duration:M,easeLinearity:c,noMoveStart:!0,animate:!0})}))}}});$.addInitHook("addHandler","dragging",Gn),$.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Un=kt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),I(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Z(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){I(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Z(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=E(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(E(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Qt(t)}}});$.addInitHook("addHandler","keyboard",Un),$.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var jn=kt.extend({addHooks:function(){I(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Z(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=_n(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(m(this._performZoom,this),n),Qt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,o=i?Math.ceil(s/i)*i:s,c=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,c&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+c):t.setZoomAround(this._lastMousePos,e+c))}});$.addInitHook("addHandler","scrollWheelZoom",jn);var Io=600;$.mergeOptions({tapHold:k.touchNative&&k.safari&&k.mobile,tapTolerance:15});var Kn=kt.extend({addHooks:function(){I(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Z(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new A(e.clientX,e.clientY),this._holdTimeout=setTimeout(m(function(){this._cancel(),this._isTapValid()&&(I(document,"touchend",tt),I(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Io),I(document,"touchend touchcancel contextmenu",this._cancel,this),I(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){Z(document,"touchend",tt),Z(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),Z(document,"touchend touchcancel contextmenu",this._cancel,this),Z(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new A(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});$.addInitHook("addHandler","tapHold",Kn),$.mergeOptions({touchZoom:k.touch,bounceAtZoomLimits:!0});var Yn=kt.extend({addHooks:function(){B(this._map._container,"leaflet-touch-zoom"),I(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){G(this._map._container,"leaflet-touch-zoom"),Z(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),I(document,"touchmove",this._onTouchMove,this),I(document,"touchend touchcancel",this._onTouchEnd,this),tt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var o=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&o.x===0&&o.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),gt(this._animRequest);var c=m(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=at(c,this,!0),tt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,gt(this._animRequest),Z(document,"touchmove",this._onTouchMove,this),Z(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});$.addInitHook("addHandler","touchZoom",Yn),$.BoxZoom=Wn,$.DoubleClickZoom=Vn,$.Drag=Gn,$.Keyboard=Un,$.ScrollWheelZoom=jn,$.TapHold=Kn,$.TouchZoom=Yn,r.Bounds=q,r.Browser=k,r.CRS=Et,r.Canvas=Dn,r.Circle=Mi,r.CircleMarker=De,r.Class=Mt,r.Control=bt,r.DivIcon=$n,r.DivOverlay=St,r.DomEvent=Ks,r.DomUtil=Us,r.Draggable=qt,r.Evented=me,r.FeatureGroup=At,r.GeoJSON=Bt,r.GridLayer=ke,r.Handler=kt,r.Icon=re,r.ImageOverlay=Ve,r.LatLng=D,r.LatLngBounds=lt,r.Layer=wt,r.LayerGroup=ae,r.LineUtil=lo,r.Map=$,r.Marker=He,r.Mixin=io,r.Path=Ft,r.Point=A,r.PolyUtil=no,r.Polygon=le,r.Polyline=It,r.Popup=Ge,r.PosAnimation=yn,r.Projection=co,r.Rectangle=Fn,r.Renderer=zt,r.SVG=Ce,r.SVGOverlay=On,r.TileLayer=ce,r.Tooltip=Ue,r.Transformation=ei,r.Util=ps,r.VideoOverlay=Rn,r.bind=m,r.bounds=rt,r.canvas=Zn,r.circle=_o,r.circleMarker=vo,r.control=xe,r.divIcon=So,r.extend=d,r.featureGroup=mo,r.geoJSON=zn,r.geoJson=wo,r.gridLayer=Co,r.icon=po,r.imageOverlay=To,r.latLng=O,r.latLngBounds=j,r.layerGroup=fo,r.map=Ys,r.marker=go,r.point=E,r.polygon=bo,r.polyline=yo,r.popup=Lo,r.rectangle=Ao,r.setOptions=b,r.stamp=v,r.svg=qn,r.svgOverlay=Po,r.tileLayer=Nn,r.tooltip=ko,r.transformation=pe,r.version=h,r.videoOverlay=xo;var Bo=window.L;r.noConflict=function(){return window.L=Bo,this},window.L=r})})(Ri,Ri.exports);var Wo=Ri.exports;const Ct=Fo(Wo),Vo="AquaGuardDB",Go=2;let Ye=null;function Ht(){return Ye||(Ye=new Promise((a,l)=>{const r=indexedDB.open(Vo,Go);r.onupgradeneeded=h=>{const d=h.target.result;if(d.objectStoreNames.contains("users")||d.createObjectStore("users",{keyPath:"username"}),!d.objectStoreNames.contains("waterTests")){const u=d.createObjectStore("waterTests",{keyPath:"id",autoIncrement:!0});u.createIndex("ward","ward",{unique:!1}),u.createIndex("username","username",{unique:!1}),u.createIndex("timestamp","timestamp",{unique:!1})}if(!d.objectStoreNames.contains("fieldTesterRequests")){const u=d.createObjectStore("fieldTesterRequests",{keyPath:"id",autoIncrement:!0});u.createIndex("username","username",{unique:!1}),u.createIndex("ward","ward",{unique:!1})}d.objectStoreNames.contains("wardData")||d.createObjectStore("wardData",{keyPath:"wardId"}),d.objectStoreNames.contains("syncQueue")||d.createObjectStore("syncQueue",{keyPath:"id",autoIncrement:!0})},r.onsuccess=h=>{const d=h.target.result;try{const m=d.transaction("fieldTesterRequests","readwrite").objectStore("fieldTesterRequests"),g=m.count();g.onsuccess=()=>{g.result===0&&(m.put({id:"FT-001",user_id:101,username:"geetha_m",household_name:"Geetha Menon",phone:"+91 94471 22334",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"TC 14/820, Hillside Lane, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Pending Field Tester Response",requested_time:"Today, 4:00 PM",notes:"Slight muddy odor after morning rainfall",created_at:new Date(Date.now()-36e5).toISOString()}),m.put({id:"FT-002",user_id:102,username:"ramesh_n",household_name:"Ramesh Nair",phone:"+91 94472 55667",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"House 22B, Temple Road, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Accepted",requested_time:"Tomorrow, 10:00 AM",notes:"Well water looks brownish after heavy downpour",created_at:new Date(Date.now()-72e5).toISOString()}),m.put({id:"FT-003",user_id:103,username:"deepa_t",household_name:"Deepa Thomas",phone:"+91 94473 88990",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"TC 19/410, Canal View, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Verified",requested_time:"Yesterday, 2:00 PM",test_result:"High Coliform Count",verification_status:"Confirmed Contamination",observations:"Laboratory strip test confirmed coliform presence. Ward sanitary committee informed.",notes:"Verified coliform contamination; ward notified.",created_at:new Date(Date.now()-864e5).toISOString()}))}}catch{}a(d)},r.onerror=h=>{console.error("IndexedDB open error:",h.target.error),l(h.target.error)}}),Ye)}async function Uo(a){const l=await Ht();return new Promise((r,h)=>{const m=l.transaction("users","readonly").objectStore("users").get(a);m.onsuccess=()=>r(m.result||null),m.onerror=()=>h(m.error)})}async function Vt(a){const l=await Ht();return new Promise((r,h)=>{const m=l.transaction("users","readwrite").objectStore("users").put(a);m.onsuccess=()=>r(m.result),m.onerror=()=>h(m.error)})}async function ns(a){const l=await Ht();return new Promise((r,h)=>{const d=l.transaction(["waterTests","syncQueue"],"readwrite"),u=d.objectStore("waterTests"),m=d.objectStore("syncQueue"),g=u.add(a);g.onsuccess=v=>{const T=v.target.result;a.id=T,a.synced||m.add({type:"WATER_TEST",data:a,timestamp:Date.now()})},d.oncomplete=()=>r(a),d.onerror=()=>h(d.error)})}async function ss(){const a=await Ht();return new Promise((l,r)=>{const u=a.transaction("waterTests","readonly").objectStore("waterTests").getAll();u.onsuccess=()=>l(u.result||[]),u.onerror=()=>r(u.error)})}async function Oi(a){return(await ss()).filter(r=>r.username===a)}async function jo(a){const l=await Ht();return new Promise((r,h)=>{const d=l.transaction(["fieldTesterRequests","syncQueue"],"readwrite"),u=d.objectStore("fieldTesterRequests"),m=d.objectStore("syncQueue"),g=u.put(a);g.onsuccess=v=>{a.id||(a.id=v.target.result),a.synced||m.add({type:"FIELD_REQUEST",data:a,timestamp:Date.now()})},d.oncomplete=()=>r(a),d.onerror=()=>h(d.error)})}async function he(a){const l=await Ht();return new Promise((r,h)=>{const m=l.transaction("fieldTesterRequests","readwrite").objectStore("fieldTesterRequests").put(a);m.onsuccess=()=>r(a),m.onerror=()=>h(m.error)})}async function Hi(){const a=await Ht();return new Promise((l,r)=>{const u=a.transaction("fieldTesterRequests","readonly").objectStore("fieldTesterRequests").getAll();u.onsuccess=()=>l(u.result||[]),u.onerror=()=>r(u.error)})}async function Di(a){return(await Hi()).find(r=>String(r.id)===String(a))||null}async function $i(a){return(await Hi()).filter(r=>r.username===a)}async function ts(a){return(await Hi()).filter(r=>!!(r.field_tester_id&&String(r.field_tester_id)===String(a)||r.field_tester_name&&(r.field_tester_name===a||a==="Anil Kumar")||a===1||a==="1"||a==="tester1"||a==="anil_tester"))}async function Ko(){const a=await Ht();return new Promise((l,r)=>{const u=a.transaction("syncQueue","readonly").objectStore("syncQueue").count();u.onsuccess=()=>l(u.result||0),u.onerror=()=>r(u.error)})}async function Yo(){const a=await Ht();return new Promise((l,r)=>{const h=a.transaction(["syncQueue","waterTests","fieldTesterRequests"],"readwrite"),d=h.objectStore("syncQueue"),u=h.objectStore("waterTests"),m=h.objectStore("fieldTesterRequests"),g=d.getAll();g.onsuccess=()=>{(g.result||[]).forEach(T=>{var x,C;if(T.type==="WATER_TEST"&&((x=T.data)!=null&&x.id)){const y=u.get(T.data.id);y.onsuccess=()=>{if(y.result){const P=y.result;P.synced=!0,u.put(P)}}}else if(T.type==="FIELD_REQUEST"&&((C=T.data)!=null&&C.id)){const y=m.get(T.data.id);y.onsuccess=()=>{if(y.result){const P=y.result;P.synced=!0,m.put(P)}}}}),d.clear()},h.oncomplete=()=>l(!0),h.onerror=()=>r(h.error)})}const $t="aquaguard_active_session";typeof localStorage<"u"&&localStorage.removeItem("aquaguard_active_user");function Zi(){try{const a=sessionStorage.getItem($t);return a?JSON.parse(a):null}catch{return null}}async function Jo(a,l){if(!a||!l)throw new Error("Please enter both username and password/PIN.");const r=a.trim().toLowerCase();if(navigator.onLine)try{const u=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,pin:String(l).trim()})});if(u.ok){const m=await u.json().catch(()=>({}));if(m&&m.user)return sessionStorage.setItem($t,JSON.stringify(m.user)),await Vt(m.user),m.user}else if(u.status===401){const m=await u.json().catch(()=>({}));throw new Error(m.error||"Incorrect password/PIN. Please try again.")}}catch(u){if(u.message&&(u.message.includes("PIN")||u.message.includes("password")||u.message.includes("Incorrect")))throw u;console.warn("Network auth unavailable, falling back to local demo storage:",u)}const h={tester1:{id:1,name:"Anil Kumar",username:"tester1",pin:"tester123",role:"field_tester",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening"},anil_tester:{id:1,name:"Anil Kumar",username:"anil_tester",pin:"1234",role:"field_tester",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening"},sreya_tester:{id:2,name:"Sreya P.",username:"sreya_tester",pin:"1234",role:"field_tester",ward:"Ward 2",panchayat:"Puzhakkal Panchayat",lat:10.5081,lng:76.205,specialty:"Spectrophotometric Turbidity, Coliform Test Strip"},rahul_tester:{id:3,name:"Rahul K.",username:"rahul_tester",pin:"1234",role:"field_tester",ward:"Ward 4",panchayat:"Puzhakkal Panchayat",lat:10.5972,lng:76.205,specialty:"Residual Chlorine & Microbial Assay, Chemical Contaminants"},noura123:{id:4,name:"Noura",username:"noura123",pin:"1234",role:"household",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.545,lng:76.205}};if(h[r]){if(h[r].pin===String(l).trim())return sessionStorage.setItem($t,JSON.stringify(h[r])),await Vt(h[r]),h[r];throw new Error("Incorrect password/PIN. Please try again.")}const d=await Uo(r);if(!d)throw new Error("Account not found locally. Please register or check credentials.");if(String(d.pin).trim()!==String(l).trim())throw new Error("Incorrect password/PIN. Please try again.");return sessionStorage.setItem($t,JSON.stringify(d)),d}async function Qo({name:a,username:l,pin:r,ward:h,panchayat:d,lat:u,lng:m}){if(!a||!a.trim())throw new Error("Please enter your full name.");if(!l||!l.trim())throw new Error("Please enter a username.");if(!r||!r.trim())throw new Error("Please set a PIN or password.");if(!h)throw new Error("Please select your ward.");const g=l.trim().toLowerCase();if(navigator.onLine)try{const T=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.trim(),username:g,pin:String(r).trim(),role:"household",ward:h.trim(),panchayat:d?d.trim():"Puzhakkal Panchayat",lat:u||10.545,lng:m||76.205})}),x=await T.json();if(T.ok&&x.user)return sessionStorage.setItem($t,JSON.stringify(x.user)),await Vt(x.user),x.user;if(T.status===409)throw new Error(x.error)}catch(T){if(T.message&&T.message.includes("already taken"))throw T;console.warn("Network registration failed, saving locally:",T)}const v={id:Date.now(),username:g,name:a.trim(),pin:r.trim(),role:"household",ward:h.trim(),panchayat:d?d.trim():"Puzhakkal Panchayat",lat:u||10.545,lng:m||76.205,createdAt:new Date().toISOString()};return await Vt(v),sessionStorage.setItem($t,JSON.stringify(v)),v}async function Xo({name:a,phone:l,username:r,pin:h,tester_reg_no:d,test_types:u,ward:m,panchayat:g,area:v,lat:T,lng:x}){if(!a||!a.trim())throw new Error("Please enter your full name.");if(!r||!r.trim())throw new Error("Please enter a username.");if(!h||!h.trim())throw new Error("Please set a PIN or password.");const C=r.trim().toLowerCase();if(navigator.onLine)try{const P=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.trim(),phone:l?l.trim():"+91 98471 00000",username:C,pin:String(h).trim(),tester_reg_no:d?d.trim():`FT-REG-${Math.floor(1e3+Math.random()*9e3)}`,test_types:u||"Water Quality & Coliform Analysis",role:"field_tester",ward:m?m.trim():"Ward 5",panchayat:g?g.trim():"Puzhakkal Panchayat",area:v?v.trim():"Ward 5 Community Area",lat:T||10.548,lng:x||76.202})}),S=await P.json();if(P.ok&&S.user)return await Vt(S.user),{success:!0,message:S.message||"Account created successfully. Please log in.",user:S.user};if(P.status===409)throw new Error(S.error)}catch(P){if(P.message&&P.message.includes("already taken"))throw P;console.warn("Network registration failed, saving locally:",P)}const y={id:Date.now(),username:C,name:a.trim(),phone:l?l.trim():"+91 98471 00000",pin:h.trim(),tester_reg_no:d?d.trim():`FT-REG-${Math.floor(1e3+Math.random()*9e3)}`,test_types:u||"Water Quality & Coliform Analysis",role:"field_tester",ward:m?m.trim():"Ward 5",panchayat:g?g.trim():"Puzhakkal Panchayat",area:v?v.trim():"Ward 5 Community Area",specialty:u||"Water Quality & Coliform Analysis",available:1,lat:T||10.548,lng:x||76.202,createdAt:new Date().toISOString()};return await Vt(y),{success:!0,message:"Account created successfully. Please log in.",user:y}}async function ta(a,l){const r=Zi();if(navigator.onLine)try{const d=await fetch(`/api/testers/${a||r.id}/profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),u=await d.json();if(d.ok&&u.profile){const m={...r,...u.profile};return sessionStorage.setItem($t,JSON.stringify(m)),await Vt(m),m}}catch(d){console.warn("Network profile update failed:",d)}const h={...r,...l};return sessionStorage.setItem($t,JSON.stringify(h)),await Vt(h),h}function Xe(){sessionStorage.removeItem($t),typeof localStorage<"u"&&localStorage.removeItem("aquaguard_active_user")}const ot="Puzhakkal Panchayat",Wt=[{id:"Ward 1",name:"Ward 1 - Viyyoor North",panchayat:ot,center:[10.5512,76.2155],rainfall:"Normal",rainfallMm:14,floodRisk:"Low",mosquitoRisk:"Low",responseStatus:"Normal",polygon:[[10.558,76.208],[10.559,76.222],[10.546,76.223],[10.544,76.21],[10.558,76.208]]},{id:"Ward 2",name:"Ward 2 - Puzhakkal Riverbanks",panchayat:ot,center:[10.542,76.195],rainfall:"Heavy",rainfallMm:98,floodRisk:"High",mosquitoRisk:"High",responseStatus:"Monitoring Active",polygon:[[10.55,76.185],[10.552,76.205],[10.536,76.208],[10.533,76.188],[10.55,76.185]]},{id:"Ward 3",name:"Ward 3 - Amala Hills",panchayat:ot,center:[10.562,76.178],rainfall:"Moderate",rainfallMm:42,floodRisk:"Low",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.57,76.168],[10.572,76.188],[10.555,76.19],[10.552,76.17],[10.57,76.168]]},{id:"Ward 4",name:"Ward 4 - Sobha City Environs",panchayat:ot,center:[10.535,76.218],rainfall:"Moderate",rainfallMm:38,floodRisk:"Moderate",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.544,76.21],[10.545,76.228],[10.526,76.227],[10.525,76.211],[10.544,76.21]]},{id:"Ward 5",name:"Ward 5 - Central Market & Canal",panchayat:ot,center:[10.545,76.205],rainfall:"Heavy",rainfallMm:112,floodRisk:"High",mosquitoRisk:"High",responseStatus:"Attention Required",polygon:[[10.552,76.198],[10.554,76.212],[10.538,76.214],[10.536,76.2],[10.552,76.198]]},{id:"Ward 6",name:"Ward 6 - Ayyanthole Border",panchayat:ot,center:[10.528,76.198],rainfall:"Normal",rainfallMm:22,floodRisk:"Low",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.536,76.19],[10.537,76.206],[10.52,76.208],[10.518,76.192],[10.536,76.19]]},{id:"Ward 7",name:"Ward 7 - Muthuvara Junction",panchayat:ot,center:[10.558,76.195],rainfall:"Normal",rainfallMm:18,floodRisk:"Low",mosquitoRisk:"Low",responseStatus:"Normal",polygon:[[10.566,76.188],[10.567,76.204],[10.552,76.205],[10.55,76.189],[10.566,76.188]]}],ea=[{id:"base-1",username:"resident_anon1",ward:"Ward 5",panchayat:ot,testType:"H2S Strip Test",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-14*36e5).toISOString().split("T")[0],time:"09:30",notes:"Black precipitate formed on paper strip after 18 hours.",location:[10.547,76.203],fieldVerification:{status:"Verified",referenceCode:"REF-FT-8421",date:new Date(Date.now()-8*36e5).toISOString().split("T")[0],verifiedBy:"Field Officer S. Nair",notes:"Coliform confirmed with dual-wavelength portable photometer.",result:"Abnormal"},labVerification:{status:"Recommended",notes:"Formal biological culture confirmation advised."},synced:!0,timestamp:Date.now()-14*36e5},{id:"base-2",username:"resident_anon2",ward:"Ward 5",panchayat:ot,testType:"Field Coliform Kit",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-6*36e5).toISOString().split("T")[0],time:"14:15",notes:"Well water sample turned yellow with gas bubbles in vial.",location:[10.543,76.208],fieldVerification:{status:"Verified",referenceCode:"REF-FT-8422",date:new Date(Date.now()-2*36e5).toISOString().split("T")[0],verifiedBy:"Field Officer M. Varma",notes:"Spectrophotometric turbidity check 12 NTU.",result:"Abnormal"},labVerification:{status:"Pending",notes:"Sample dispatched to District Water Authority Lab."},synced:!0,timestamp:Date.now()-6*36e5},{id:"base-3",username:"resident_anon3",ward:"Ward 5",panchayat:ot,testType:"Turbidity / Visual Check",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-20*36e5).toISOString().split("T")[0],time:"11:20",notes:"High brownish sediment following canal overflow.",location:[10.549,76.207],fieldVerification:{status:"Pending",referenceCode:"REF-FT-8425",date:null,verifiedBy:null,notes:"Field test visit scheduled for tomorrow morning.",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-20*36e5},{id:"base-4",username:"resident_anon4",ward:"Ward 5",panchayat:ot,testType:"Chlorine Residual Test",testMethod:"Individual Screening",result:"Normal",date:new Date(Date.now()-28*36e5).toISOString().split("T")[0],time:"08:00",notes:"Chlorine residual present at 0.4 mg/L.",location:[10.541,76.202],fieldVerification:{status:"Not Required",referenceCode:null,date:null,verifiedBy:null,notes:"",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-28*36e5},{id:"base-5",username:"resident_anon5",ward:"Ward 2",panchayat:ot,testType:"Turbidity / Visual Check",testMethod:"Individual Screening",result:"Inconclusive",date:new Date(Date.now()-18*36e5).toISOString().split("T")[0],time:"16:45",notes:"Water is slightly turbid after river level rise.",location:[10.54,76.192],fieldVerification:{status:"Pending",referenceCode:"REF-FT-8430",date:null,verifiedBy:null,notes:"Field visit assigned to Riverbank Health Inspector.",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-18*36e5},{id:"base-6",username:"resident_anon6",ward:"Ward 1",panchayat:ot,testType:"Chlorine Residual Test",testMethod:"Individual Screening",result:"Normal",date:new Date(Date.now()-22*36e5).toISOString().split("T")[0],time:"11:00",notes:"Adequate free residual chlorine observed (0.5 mg/L).",location:[10.553,76.218],fieldVerification:{status:"Not Required",referenceCode:null,date:null,verifiedBy:null,notes:"",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-22*36e5}],ia=[{name:"Puzhakkal River Flood Basin",polygon:[[10.553,76.182],[10.554,76.203],[10.535,76.206],[10.531,76.186]],severity:"High",description:"Active inundation risk along river catchment."},{name:"Ward 5 Lowland Drainage Zone",polygon:[[10.55,76.2],[10.551,76.21],[10.541,76.211],[10.54,76.201]],severity:"Moderate",description:"Surface runoff accumulation during heavy monsoon rain."}],na=72*60*60*1e3,es=3;async function os(){let a=[];try{a=await ss()}catch(l){console.warn("Error reading IndexedDB tests:",l)}return[...ea,...a]}function Nt(a){if(!a)return!1;const l=String(a).toLowerCase();return l.includes("abnormal")||l.includes("positive")}async function as(a){const l=await os(),r=Date.now(),h=l.filter(g=>g.ward===a),d=h.filter(g=>{if(!Nt(g.result))return!1;const v=g.timestamp||(g.date?new Date(g.date).getTime():0);return r-v<=na}),u=h.filter(g=>g.fieldVerification&&g.fieldVerification.status==="Verified");return{isPatternDetected:d.length>=es,preliminaryPositiveCount:d.length,fieldVerifiedCount:u.length,threshold:es,windowHours:72,alertTitle:"Possible Water-Quality Pattern",alertMessage:"Possible water-quality pattern detected based on multiple abnormal reports. Professional field verification is recommended.",recentPreliminaryPositives:d,fieldVerifiedPositives:u}}function rs(a){return Wt.find(r=>r.id===a)||{id:a,name:a,panchayat:"Puzhakkal Panchayat",rainfall:"Normal",rainfallMm:20,floodRisk:"Low",responseStatus:"Normal",center:[10.545,76.205]}}async function ls(a){const l=rs(a),r=await as(a),h=[];return r.isPatternDetected&&h.push({id:"alert-contamination",type:"contamination",severity:"hazard",badge:"Pattern Detected",title:r.alertTitle,message:r.alertMessage,details:`${r.preliminaryPositiveCount} preliminary abnormal reports recorded (${r.fieldVerifiedCount} professionally verified) in ${l.id}.`,alternateSolutions:[{id:"sol-boil",title:"Vigorous Rolling Boil Disinfection",tag:"Emergency Gold Standard",icon:"🔥",timeRequired:"10–15 mins",cost:"Household stove / Free",effectiveness:"Kills 99.99% of bacterial coliforms, E. coli, enteric viruses, and microbial cysts.",bestFor:"All immediate drinking water, cooking, and infant formula.",steps:["Filter raw water through clean micro-mesh or folded cotton cloth to remove suspended particulate matter.","Heat water to a continuous, vigorous rolling boil and maintain boiling for at least 1 to 3 minutes.","Allow water to cool naturally in a sterilized, covered stainless steel or glass container with a dedicated tap/ladle."]},{id:"sol-chlorine",title:"Point-of-Use Chlorination / Halazone Treatment",tag:"Large Storage & Overhead Tanks",icon:"💧",timeRequired:"30 mins contact time",cost:"Minimal (Available at PHC / Panchayat)",effectiveness:"Provides lasting residual antimicrobial protection against bacterial regrowth for up to 48 hours.",bestFor:"Overhead storage tanks, 20L water cans, and well reservoirs.",steps:["Add 1 standard chlorine / Halazone tablet (0.5g) or 4 drops of 0.5% sodium hypochlorite per 20 Litres of clear water.","Stir thoroughly and let stand covered in shade for at least 30 minutes before first consumption.","A faint chlorine scent confirms active residual disinfection against secondary bacterial contamination."]},{id:"sol-kiosk",title:"Ward 5 Community Safe Water Kiosk",tag:"Free Municipal RO/UV Supply",icon:"🏢",timeRequired:"Available 7:00 AM – 7:00 PM",cost:"Free Public Service",effectiveness:"Certified multi-stage reverse osmosis + ultraviolet sterilized municipal safe water.",bestFor:"Households with persistent well discoloration, turbidity, or foul odor.",steps:["Visit the Panchayat Clean Water Distribution Kiosk at Ward 5 Civic Centre (0.8 km).","Bring clean food-grade containers for daily 25L household allocation.","Water quality is verified twice daily with automated digital TDS and microbiological monitoring."]},{id:"sol-tester",title:"Request Certified Field Tester Verification",tag:"Professional On-Site Test",icon:"🧪",timeRequired:"Scheduled Visit",cost:"Subsidized",action:"book_tester",effectiveness:"Official on-site photometer turbidity analysis and verified coliform strip assay for ward response.",bestFor:"Residents requiring official verification to trigger municipal sanitization.",steps:["Schedule a certified nearby Field Tester (e.g. Anil Kumar, 2.3 km away) to visit your residence.","Tester performs on-site photometer turbidity & chemical screening with rapid microbial vial incubation.","Verification results are officially submitted to ward health records and local response committees."]}]}),l.rainfall==="Heavy"&&h.push({id:"alert-rainfall",type:"rainfall",severity:"warning",badge:"Heavy Rainfall",title:"Heavy Rainfall Alert",message:"Heavy rainfall has been detected in your ward. Local water sources may be affected. Consider checking your drinking water.",details:`Observed precipitation: ${l.rainfallMm}mm in the last 24 hours.`,alternateSolutions:[{id:"sol-wellhead",title:"Wellhead Elevation & Sandbag Bunding",tag:"Surface Runoff Protection",icon:"🧱",timeRequired:"30 mins",cost:"Low / Household effort",effectiveness:"Blocks 95% of agricultural and stormwater surface runoff from draining into well shafts.",bestFor:"Low-lying ring wells and wells near roadside storm drains.",steps:["Stack a double-tier sandbag ring (min 0.5m height) tightly around the well parapet rim.","Dig a 15cm shallow diversion trench around the apron to redirect stormwater away from wellhead.","Ensure the well opening is covered with a watertight lid or waterproof tarpaulin."]},{id:"sol-firstflush",title:"Rainwater Harvesting First-Flush Diversion",tag:"Roof Runoff Protection",icon:"🌧️",timeRequired:"10–15 mins",cost:"Zero",effectiveness:"Prevents atmospheric soot, bird droppings, and roof grit from fouling clean storage cisterns.",bestFor:"Households utilizing rooftop rainwater harvesting.",steps:["Open the first-flush bypass drain for the first 15–20 minutes of intense rainfall.","Allow initial dirty wash to drain out before switching water flow to main storage tank.","Engage secondary gravel-sand filter and add 1 potassium permanganate crystal for preventive biological inhibition."]},{id:"sol-tanker",title:"Emergency Potable Water Tanker Helpline",tag:"Municipal Emergency Cell",icon:"🚛",timeRequired:"Dispatched within 2–4 hours",cost:"Free Municipal Assistance",effectiveness:"Guaranteed safe drinking water delivered directly during storm events.",bestFor:"Households whose domestic wells have turned murky or flooded.",steps:["Contact the Puzhakkal Disaster Management Water Desk at toll-free 1800-425-9283.","Provide your Ward (Ward 5) and landmark for urgent water bowser routing.","Emergency bowsers will deliver 50L drinking water per family directly."]}]}),l.floodRisk==="High"&&h.push({id:"alert-flood",type:"flood",severity:"warning",badge:"Flood Warning",title:"Flood Risk Alert",message:"Your location is within or near a potentially affected area. Follow local safety guidance and consider checking your drinking water.",details:`River and canal levels elevated in ${l.name}.`,alternateSolutions:[{id:"sol-shock",title:"Well Shock Chlorination (Post-Inundation Protocol)",tag:"Disinfection Protocol",icon:"🧴",timeRequired:"Overnight (12 hours)",cost:"₹50 Bleaching powder",effectiveness:"Sterilizes floodwater contaminants, coliform bacteria, and soil microbes in well shaft.",bestFor:"Wells submerged or surrounded by floodwaters.",steps:["Pump out murky standing water once external flood levels recede below the apron.","Prepare a slurry of 50g fresh bleaching powder (33% active chlorine) per 1000 Litres of well volume.","Pour slurry around the interior walls, agitate water vigorously, and let stand for 12 hours before pumping out."]},{id:"sol-relief-water",title:"PHC Emergency Potable Water Cans",tag:"Immediate Relief",icon:"🚰",timeRequired:"Instant pickup",cost:"Free Relief Supply",effectiveness:"Sealed food-grade potable drinking supply distributed by health volunteers.",bestFor:"Residents whose household water sources are currently inundated.",steps:["Visit the Ward Flood Relief Camp at Government UP School.","Collect 10L sealed potable water cans and chlorine purification sachets.","Report any gastrointestinal illness immediately to the on-site Medical Officer."]}]}),(l.rainfall==="Heavy"||l.floodRisk==="High")&&h.push({id:"alert-mosquito",type:"mosquito",severity:"warning",badge:"Vector Risk",title:"Stagnant Water & Mosquito Breeding Hazard",message:"Recent rain and pooled surface water elevate mosquito breeding risks. Take preventative source reduction measures.",details:`Stagnant water pockets detected across low-lying zones in ${l.name}.`,alternateSolutions:[{id:"sol-dryday",title:'Weekly "Dry Day" Source Elimination',tag:"Community Source Reduction",icon:"🧹",timeRequired:"20 mins every Sunday",cost:"Zero",effectiveness:"Disrupts Aedes aegypti mosquito breeding cycle; prevents dengue and chikungunya outbreak.",bestFor:"All household yards, terraces, and open storage compounds.",steps:["Inspect outdoor flowerpot trays, air cooler bases, coconut shells, and tarpaulin folds.","Empty standing water, scrub container inner walls to dislodge mosquito eggs, and invert containers.","Ensure rooftop drains and sunshades flow freely without water pooling."]},{id:"sol-mesh",title:"Mosquito Mesh Screening on Wells & Vents",tag:"Physical Barrier",icon:"🕸️",timeRequired:"One-time setup",cost:"Low (Nylon mesh ₹80)",effectiveness:"Completely blocks adult mosquitoes from accessing dark humid well shafts for egg laying.",bestFor:"Open domestic ring wells and overhead rainwater tank vent pipes.",steps:["Cover the open mouth of domestic wells with durable 40-mesh nylon or stainless steel screening.","Ensure screening is anchored snugly with weighted cord around the concrete parapet.","Inspect and cover overflow pipes of overhead tanks with fine mesh."]},{id:"sol-guppy",title:"Biological Larvicide & Guppy Fish Deployment",tag:"Biological Control",icon:"🐟",timeRequired:"Single release",cost:"Free from PHC",effectiveness:"Larvivorous fish consume up to 100 mosquito larvae per day in standing water.",bestFor:"Ornamental garden pools, farm ponds, and agricultural open wells.",steps:["Collect Gambusia or Poecilia reticulata (Guppy) fingerlings from the Primary Health Centre.","Introduce 5–10 fingerlings into unsealed water storage bodies or farm ponds.","Avoid applying chemical bleach or pesticides in water bodies containing bio-control fish."]}]}),h.length===0&&h.push({id:"alert-preventive",type:"preventive",severity:"info",badge:"Preventive Safety",title:"Standard Water Safety & Treatment Alternatives",message:"Conditions in your ward are currently stable. Maintain baseline disinfection and monitoring protocols.",details:`Baseline surveillance active in ${l.name}. No critical environmental hazards detected.`,alternateSolutions:[{id:"sol-routine-boil",title:"Routine Household Boiling",tag:"Daily Best Practice",icon:"🔥",timeRequired:"10 mins",cost:"Domestic stove",effectiveness:"Provides complete baseline microbial safety against seasonal waterborne bacteria.",bestFor:"Routine daily drinking and infant care.",steps:["Bring daily drinking water to a full rolling boil for 1 minute.","Store in clean, non-corrosive vessels with secure lids.","Clean water storage jugs daily with hot water."]},{id:"sol-gravity-filter",title:"Ceramic Gravity Candle Filtration",tag:"Point-of-Use Physical Filter",icon:"🏺",timeRequired:"Continuous passive filtration",cost:"One-time filter purchase",effectiveness:"0.2-micron ceramic micro-pores remove 99% of particulate sediment, protozoa, and cysts.",bestFor:"Everyday household tap and well water clarity.",steps:["Pour well or tap water into the upper chamber of a dual-chamber stainless steel gravity filter.","Scrub ceramic filter candles weekly with a soft brush under clean running water (no soap).","Pair with light chlorination or boiling for comprehensive bacterial barrier."]},{id:"sol-periodic-test",title:"Monthly Self Water Quality Screening",tag:"Household Vigilance",icon:"🧪",timeRequired:"5 mins",cost:"Free test strips",action:"self_test",effectiveness:"Detects sudden changes in pH, turbidity, or microbial contamination before health risks emerge.",bestFor:"Monthly routine monitoring of domestic wells.",steps:['Use the AquaGuard "Test Water" tool to log monthly baseline readings.',"Check clarity, odor, and color changes after seasonal rains.","Request certified Field Tester if any anomaly is observed."]}]}),{ward:l,contamination:r,alerts:h}}async function ds(a){const r=(await os()).filter(x=>x.ward===a),h=rs(a),d=await as(a),u=r.length,m=r.filter(x=>Nt(x.result)).length,g=r.filter(x=>x.fieldVerification&&x.fieldVerification.status==="Verified").length;let v="Normal";d.isPatternDetected?v="Attention Required":(h.rainfall==="Heavy"||h.floodRisk==="High")&&(v="Monitoring Active");const T=r.sort((x,C)=>(C.timestamp||0)-(x.timestamp||0)).slice(0,8).map(x=>{const C=Nt(x.result),y=x.fieldVerification&&x.fieldVerification.status==="Verified";let P="";return y?P=`Field-verified report logged in ${x.ward} (${x.testType}) - Ref ${x.fieldVerification.referenceCode||"Verified"}.`:C?P=`Preliminary abnormal water screening logged in ${x.ward} (${x.testType}).`:P=`Preliminary normal water screening recorded in ${x.ward} (${x.testType}).`,{id:x.id,text:P,isPositive:C,isVerified:y,result:x.result,date:x.date,time:x.time}});return{wardId:a,wardName:h.name,panchayat:h.panchayat,totalReports:u,preliminaryPositiveReports:m,fieldVerifiedReports:g,rainfallDetected:h.rainfall==="Heavy"?"Heavy rainfall detected":`${h.rainfall} rainfall`,rainfallMm:h.rainfallMm,floodRisk:h.floodRisk,contaminationPattern:d.isPatternDetected?"Detected":"None detected",isContaminatedPattern:d.isPatternDetected,responseStatus:v,feed:T}}let J="home",W="dashboard",et="household",te="login",Tt="",mt=!navigator.onLine,ut="optionA",ct=null,Rt=10;async function ee(a,l={}){try{if(!(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&!a.startsWith("http"))return null;const h=await fetch(a,l),d=h.headers.get("content-type")||"";if(h.ok&&d.includes("application/json"))return await h.json()}catch{}return null}let Je=null,Ot={household:!0,wards:!0,preliminary:!0,verified:!0,hazard:!0,clusters:!0},ft={waterTests:!0,fieldVerified:!0,rainfall:!0,floodHazard:!0,community:!0};function sa(){const a=new Date().getHours();return a<12?"Good morning":a<17?"Good afternoon":"Good evening"}document.addEventListener("DOMContentLoaded",()=>{oa(),st()});function oa(){window.addEventListener("online",async()=>{mt=!1,Ni(),await cs(),xt()}),window.addEventListener("offline",()=>{mt=!0,Ni(),xt()})}function aa(){mt=!mt,Ni(),mt||cs(),xt()}async function cs(){try{const a=await Ko();a>0&&(await Yo(),it(`Synchronized ${a} locally stored records.`))}catch(a){console.warn("Sync error:",a)}}function st(){const a=document.getElementById("app");if(!a)return;const l=Zi();if(!l){a.innerHTML=ra(),la();return}l.role==="field_tester"?da(a,l):ma(a,l)}function Ni(){const a=document.getElementById("statusBadge"),l=document.getElementById("btnToggleOffline");a&&(a.className=`status-pill ${mt?"offline":"online"}`,a.innerHTML=`
      <span class="status-dot"></span>
      <span>${mt?"Offline":"Online – Sync Available"}</span>
    `),l&&(l.textContent=mt?"Go Online":"Simulate Offline")}function Me(a=36,l="main"){return`
    <svg width="${a}" height="${a}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="aquaguard-brand-svg">
      <defs>
        <linearGradient id="aqGrad_${l}" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#14b8a6"/>
          <stop offset="100%" stop-color="#0f766e"/>
        </linearGradient>
        <linearGradient id="aqDrop_${l}" x1="24" y1="14" x2="24" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
      </defs>
      <!-- Base Emblem -->
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#aqGrad_${l})" stroke="#2dd4bf" stroke-width="1.2"/>
      <!-- Shield Contour -->
      <path d="M24 9C29.5 9 34 11.5 35 17C36 25 30 32.5 24 37C18 32.5 12 25 13 17C14 11.5 18.5 9 24 9Z" fill="rgba(255, 255, 255, 0.16)" stroke="rgba(255, 255, 255, 0.65)" stroke-width="1.2" stroke-linejoin="round"/>
      <!-- Luminous Droplet -->
      <path d="M24 13.5C24 13.5 31.5 23 31.5 28C31.5 32.142 28.142 35.5 24 35.5C19.858 35.5 16.5 32.142 16.5 28C16.5 23 24 13.5 24 13.5Z" fill="url(#aqDrop_${l})"/>
      <!-- Health & Safety Checkmark -->
      <path d="M20 28L22.8 30.8L28 25" stroke="#0f766e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Light Reflection -->
      <ellipse cx="20.5" cy="23.5" rx="1.5" ry="2.2" transform="rotate(-25 20.5 23.5)" fill="#ffffff" opacity="0.9"/>
    </svg>
  `}function ra(){return te==="register"?`
      <div class="auth-wrapper">
        <div class="auth-hero">
          <div class="auth-logo">
            ${Me(72,"reg")}
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
              <input type="text" class="form-control" id="regPanchayat" value="${ot}" required />
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
    `:te==="register_tester"?`
      <div class="auth-wrapper">
        <div class="auth-hero">
          <div class="auth-logo">
            ${Me(72,"tester_reg")}
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
              <div style="display: flex; flex-direction: column; gap: 6px; background: var(--bg-muted); padding: 10px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.82rem; color: var(--text-main);">
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
              <div id="testerLocationCard" style="background: var(--bg-muted); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 10px; font-size: 0.84rem; line-height: 1.6;">
                <div id="testerGeoStatus" style="color: var(--primary); margin-bottom: 6px; font-weight: 600;">
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
                    <input type="text" class="form-control" id="regTesterPanchayat" value="${ot}" style="font-size: 0.8rem; padding: 6px 8px;" />
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
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 6px; line-height: 1.4;">
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
          ${Me(76,"login")}
        </div>
        <h1 class="auth-title">AquaGuard</h1>
        <p class="auth-subtitle">Household Water Safety & Community Alert System</p>
        <span class="offline-ready-indicator">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Offline Login Available
        </span>
      </div>

      <!-- SUCCESS MESSAGE BANNER IF ACCOUNT CREATED -->
      ${Tt?`
        <div style="max-width: 440px; margin: 0 auto 14px auto; background: #ecfdf5; border: 1px solid #10b981; color: #065f46; padding: 12px 16px; border-radius: 10px; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span><strong>${Tt}</strong></span>
        </div>
      `:""}

      <!-- TWO LARGE VISIBLE OPTIONS -->
      <div class="role-choice-grid">
        <div class="role-choice-tile ${et==="household"?"active":""}" id="tileRoleHousehold">
          <div class="role-tile-icon">🏠</div>
          <div class="role-tile-title">Household User</div>
          <div class="role-tile-desc">Log in as Household User</div>
        </div>

        <div class="role-choice-tile ${et==="field_tester"?"active":""}" id="tileRoleTester">
          <div class="role-tile-icon">🧪</div>
          <div class="role-tile-title">Field Tester</div>
          <div class="role-tile-desc">Log in as Field Tester</div>
        </div>
      </div>

      <div class="auth-card">
        <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-main); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>${et==="household"?"🏠 Household Login":"🧪 Field Tester Login"}</span>
        </div>


        <form id="formLogin">
          <div id="authErrorMsg"></div>

          <div class="form-group">
            <label class="form-label" for="loginUsername">
              ${et==="household"?"Household Username":"Field Tester Username"}
            </label>
            <input type="text" class="form-control" id="loginUsername" 
              placeholder="${et==="household"?"e.g. noura123":"e.g. tester1"}" 
              required autocomplete="username" />
          </div>

          <div class="form-group">
            <label class="form-label" for="loginPin">Password / PIN</label>
            <input type="password" class="form-control" id="loginPin" 
              placeholder="${et==="household"?"e.g. 1234":"e.g. tester123"}" 
              required />
          </div>

          <button type="submit" class="btn btn-primary" id="btnLogin" style="margin-top: 8px;">
            ${et==="household"?"Login as Household":"Login as Field Tester"}
          </button>

          ${et==="household"?`
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
  `}function la(){var h,d,u,m,g,v,T,x,C;(h=document.getElementById("tileRoleHousehold"))==null||h.addEventListener("click",()=>{et="household",Tt="",st()}),(d=document.getElementById("tileRoleTester"))==null||d.addEventListener("click",()=>{et="field_tester",Tt="",st()}),(u=document.getElementById("btnGoToRegister"))==null||u.addEventListener("click",()=>{te="register",Tt="",st()}),(m=document.getElementById("btnGoToTesterRegister"))==null||m.addEventListener("click",()=>{te="register_tester",Tt="",st()}),(g=document.getElementById("btnGoToLogin"))==null||g.addEventListener("click",()=>{te="login",Tt="",st()}),(v=document.getElementById("btnGoToLoginFromTesterReg"))==null||v.addEventListener("click",()=>{te="login",et="field_tester",Tt="",st()}),(T=document.getElementById("btnAutofillTester"))==null||T.addEventListener("click",()=>{const y=document.getElementById("loginUsername"),P=document.getElementById("loginPin");y&&P&&(y.value="tester1",P.value="tester123")}),(x=document.getElementById("btnTesterUseGeo"))==null||x.addEventListener("click",()=>{const y=document.getElementById("testerGeoStatus"),P=document.getElementById("regTesterLat"),S=document.getElementById("regTesterLng"),b=document.getElementById("regTesterArea");if(!navigator.geolocation){alert("Geolocation is not supported by your browser.");return}y&&(y.innerHTML="⏳ Acquiring GPS location..."),navigator.geolocation.getCurrentPosition(H=>{const R=H.coords.latitude,U=H.coords.longitude;P&&(P.value=R.toFixed(4)),S&&(S.value=U.toFixed(4)),y&&(y.innerHTML=`✓ GPS Locked: ${R.toFixed(4)}, ${U.toFixed(4)}`),b&&(!b.value||b.value.includes("Default"))&&(b.value="Ward 5 / Puzhakkal Sector"),it("Acquired current GPS coordinates.")},H=>{P&&(P.value="10.548"),S&&(S.value="76.202"),y&&(y.innerHTML="📍 Using local service coordinates (Puzhakkal)"),it("Could not acquire GPS, using approximate local coordinates.")},{timeout:8e3})}),(C=document.getElementById("btnTesterManualLoc"))==null||C.addEventListener("click",()=>{const y=document.getElementById("regTesterArea"),P=document.getElementById("testerGeoStatus");y&&y.focus(),P&&(P.innerHTML="✏️ Manual Entry Mode: adjust Ward, Area, and Coordinates")});const a=document.getElementById("formLogin");a==null||a.addEventListener("submit",async y=>{y.preventDefault();const P=document.getElementById("loginUsername").value,S=document.getElementById("loginPin").value,b=document.getElementById("authErrorMsg");try{await Jo(P,S),J="home",W="dashboard",Tt="",st()}catch(H){b&&(b.innerHTML=`<div class="notice-box notice-offline">${H.message}</div>`)}});const l=document.getElementById("formRegister");l==null||l.addEventListener("submit",async y=>{y.preventDefault();const P=document.getElementById("regName").value,S=document.getElementById("regUsername").value,b=document.getElementById("regPin").value,H=document.getElementById("regWard").value,R=document.getElementById("regPanchayat").value,U=document.getElementById("authErrorMsg"),V=Wt.find(pt=>pt.id===H);try{await Qo({name:P,username:S,pin:b,ward:H,panchayat:R,lat:V?V.center[0]:10.545,lng:V?V.center[1]:76.205}),J="home",Tt="",st()}catch(pt){U&&(U.innerHTML=`<div class="notice-box notice-offline">${pt.message}</div>`)}});const r=document.getElementById("formRegisterTester");r==null||r.addEventListener("submit",async y=>{y.preventDefault();const P=document.getElementById("regTesterName").value,S=document.getElementById("regTesterPhone").value,b=document.getElementById("regTesterUsername").value,H=document.getElementById("regTesterPin").value,R=document.getElementById("regTesterRegNo").value,U=document.getElementById("regTesterWard").value,V=document.getElementById("regTesterPanchayat").value,pt=document.getElementById("regTesterArea").value,Ut=parseFloat(document.getElementById("regTesterLat").value)||10.548,fe=parseFloat(document.getElementById("regTesterLng").value)||76.202,jt=document.getElementById("authErrorMsg"),Ee=document.querySelectorAll('input[name="testerTestTypes"]:checked'),ie=Array.from(Ee).map(Dt=>Dt.value).join(", ");if(!ie){jt&&(jt.innerHTML='<div class="notice-box notice-offline">Please select at least one test type you can perform.</div>');return}try{const Dt=await Xo({name:P,phone:S,username:b,pin:H,tester_reg_no:R,test_types:ie,ward:U,panchayat:V,area:pt,lat:Ut,lng:fe});te="login",et="field_tester",Tt=Dt.message||"Account created successfully. Please log in.",st()}catch(Dt){jt&&(jt.innerHTML=`<div class="notice-box notice-offline">${Dt.message}</div>`)}})}function da(a,l){var r;a.innerHTML=`
    <header class="app-header">
      <div style="display: flex; align-items: center; gap: 20px;">
        <div class="brand-badge" id="btnHeaderTester" style="cursor: pointer;">
          <div class="brand-icon">
            ${Me(36,"tester_hdr")}
          </div>
          <div>
            <span class="brand-name">AquaGuard</span>
            <div class="brand-subtitle">Field Inspector Portal</div>
          </div>
        </div>

        <!-- Desktop Navigation Bar for Field Tester -->
        <nav class="desktop-nav">
          <button class="nav-link ${W==="dashboard"?"active":""}" data-ttab="dashboard">Dashboard</button>
          <button class="nav-link ${W==="new"?"active":""}" data-ttab="new">New Requests</button>
          <button class="nav-link ${W==="accepted"?"active":""}" data-ttab="accepted">Accepted</button>
          <button class="nav-link ${W==="completed"?"active":""}" data-ttab="completed">Completed</button>
          <button class="nav-link ${W==="profile"?"active":""}" data-ttab="profile">Profile</button>
        </nav>
      </div>

      <div class="header-actions">
        <div class="user-chip" title="${l.name}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${l.name.split(" ")[0]}</span>
          <span style="color: var(--text-muted); font-weight: normal;">•</span>
          <span style="color: var(--primary); font-weight: 600;">${l.ward||"Ward 5"}</span>
        </div>
        <button class="btn-header-logout" id="btnTesterLogoutHeader" title="Sign out">
          Logout
        </button>
      </div>
    </header>

    <main class="view-container" id="mainContent">
      <!-- Tester Dynamic Content -->
    </main>

    <!-- Field Tester Mobile Bottom Nav -->
    <nav class="bottom-nav">
      <button class="nav-item ${W==="dashboard"?"active":""}" data-ttab="dashboard">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>Dashboard</span>
      </button>
      <button class="nav-item ${W==="new"?"active":""}" data-ttab="new">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
        <span>New</span>
      </button>
      <button class="nav-item ${W==="accepted"?"active":""}" data-ttab="accepted">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Accepted</span>
      </button>
      <button class="nav-item ${W==="completed"?"active":""}" data-ttab="completed">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        <span>Completed</span>
      </button>
      <button class="nav-item ${W==="profile"?"active":""}" data-ttab="profile">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </button>
    </nav>

    <div id="modalHost"></div>
  `,(r=document.getElementById("btnTesterLogoutHeader"))==null||r.addEventListener("click",()=>{Xe(),et="field_tester",st()}),document.querySelectorAll(".bottom-nav .nav-item, .desktop-nav .nav-link").forEach(h=>{h.addEventListener("click",d=>{W=d.currentTarget.getAttribute("data-ttab"),document.querySelectorAll(".bottom-nav .nav-item").forEach(u=>{u.classList.toggle("active",u.getAttribute("data-ttab")===W)}),document.querySelectorAll(".desktop-nav .nav-link").forEach(u=>{u.classList.toggle("active",u.getAttribute("data-ttab")===W)}),Gt(l)})}),Gt(l)}async function Gt(a){const l=document.getElementById("mainContent");if(!l)return;let r=[],h={new_requests:1,accepted:1,completed:1,pending_results:0};try{const u=await ee(`/api/requests?role=field_tester&user_id=${a.id||1}`);u&&u.requests?r=u.requests:r=await ts(a.id||a.name)}catch{r=await ts(a.id||a.name)}try{const u=await ee(`/api/testers/stats/${a.id||1}`);if(u)h=u;else throw new Error("Fallback to local stats")}catch{const m=r.filter(T=>T.status==="Pending"||T.status==="Pending Field Tester Response"||T.status==="Time Change Suggested").length,g=r.filter(T=>T.status==="Accepted"||T.status==="Test In Progress").length,v=r.filter(T=>T.status==="Test Completed"||T.status==="Verified").length;h={new_requests:m,accepted:g,completed:v,pending_results:r.filter(T=>T.status==="Test In Progress").length}}let d=r;if(W==="new"?d=r.filter(u=>u.status==="Pending"||u.status==="Pending Field Tester Response"||u.status==="Time Change Suggested"):W==="accepted"?d=r.filter(u=>u.status==="Accepted"||u.status==="Test In Progress"):W==="completed"&&(d=r.filter(u=>u.status==="Test Completed"||u.status==="Verified")),W==="profile"){hs(l,a);return}l.innerHTML=`
    <!-- Top Greeting Header -->
    <div class="welcome-section" style="margin-bottom: 16px;">
      <div class="welcome-text">
        <h1 class="welcome-title">Hello, ${a.name.split(" ")[0]}</h1>
        <p class="welcome-subtitle">Field Inspector Portal • Authorized Water Safety Testing</p>
      </div>
      <div class="location-badge">
        <span class="badge badge-safe">● Certified Inspector</span>
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">${a.ward||"Ward 5"}</span>
      </div>
    </div>

    <!-- Summary Metrics Cards -->
    <div class="tester-metrics-grid">
      <div class="metric-card">
        <div class="metric-val" style="color: var(--warning);">${h.new_requests}</div>
        <div class="metric-lbl">New Requests</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: var(--primary);">${h.accepted}</div>
        <div class="metric-lbl">Accepted</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: var(--success);">${h.completed}</div>
        <div class="metric-lbl">Completed</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: var(--text-secondary);">${h.pending_results}</div>
        <div class="metric-lbl">Pending Results</div>
      </div>
    </div>

    <!-- Tester Sub-Navigation Tabs -->
    <div class="tester-nav-tabs">
      <button class="tester-nav-tab ${W==="dashboard"?"active":""}" data-tab="dashboard">
        Dashboard All
      </button>
      <button class="tester-nav-tab ${W==="new"?"active":""}" data-tab="new">
        New Requests
      </button>
      <button class="tester-nav-tab ${W==="accepted"?"active":""}" data-tab="accepted">
        Accepted Requests
      </button>
      <button class="tester-nav-tab ${W==="completed"?"active":""}" data-tab="completed">
        Completed Tests
      </button>
    </div>

    <!-- Incoming Test Requests Section -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
          Incoming Test Requests
        </h3>
        <span class="badge badge-info">${d.length} Showing</span>
      </div>

      <div id="testerRequestsList">
        ${d.length>0?d.map(u=>ca(u)).join(""):'<div style="text-align: center; padding: 24px; color: var(--text-muted);">No requests matching this view.</div>'}
      </div>
    </div>
  `,ua(a,r)}function ca(a){const l=a.status==="Pending"||a.status==="Pending Field Tester Response",r=a.status==="Accepted",h=a.status==="Test In Progress",d=a.status==="Test Completed"||a.status==="Verified";return`
    <div class="request-card">
      <div class="request-header">
        <span class="request-id">Request ${a.id}</span>
        <span class="badge ${d?"badge-safe":r?"badge-info":h||l?"badge-warn":"badge-danger"}">${a.status}</span>
      </div>

      <div class="request-meta-grid">
        <div>Household: <strong style="color: var(--text-main);">${a.household_name}</strong></div>
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
        ${l||a.status==="Time Change Suggested"?`<button class="btn btn-sm btn-primary btn-view-request" data-id="${a.id}">[View Request]</button>`:r||h?`
              <button class="btn btn-sm btn-success btn-start-test-action" data-id="${a.id}" data-hname="${a.household_name}" data-ward="${a.ward}" data-test="${a.test_type}">
                ${h?"Continue Test → Submit Result":"Start Field Test"}
              </button>
              <button class="btn btn-sm btn-secondary btn-view-request" data-id="${a.id}" style="width: auto;">
                View Details
              </button>
            `:`<button class="btn btn-sm btn-secondary btn-view-request" data-id="${a.id}">[View Request Record]</button>`}
      </div>
    </div>
  `}function ua(a,l){document.querySelectorAll(".tester-nav-tab").forEach(r=>{r.addEventListener("click",h=>{W=h.currentTarget.getAttribute("data-tab"),Gt(a)})}),document.querySelectorAll(".btn-view-request").forEach(r=>{r.addEventListener("click",h=>{const d=h.currentTarget.getAttribute("data-id"),u=l.find(m=>m.id===d)||{id:d,household_name:"Noura",ward:"Ward 5",location_desc:"Ward 5",test_type:"Water Quality Test",requested_date:"Today",requested_time:"4:00 PM",notes:"Possible abnormal home-test result.",status:"Pending"};ha(u,a)})}),document.querySelectorAll(".btn-start-test-action").forEach(r=>{r.addEventListener("click",async h=>{const d=h.currentTarget.getAttribute("data-id"),u=h.currentTarget.getAttribute("data-hname"),m=h.currentTarget.getAttribute("data-ward"),g=h.currentTarget.getAttribute("data-test");try{await fetch(`/api/requests/${d}/start_test`,{method:"POST"})}catch{}const v=await Di(d);v&&(v.status="Test In Progress",await he(v)),us({reqId:d,hname:u,ward:m,test:g,user:a})})})}function ha(a,l){var h,d,u,m,g;const r=document.getElementById("modalHost");r&&(r.innerHTML=`
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline></svg>
          <span>Field Test Request – ${a.id}</span>
        </div>

        <div style="font-size: 0.88rem; line-height: 1.8; color: var(--text-main); margin-bottom: 14px;">
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
          ${a.status==="Pending"||a.status==="Pending Field Tester Response"||a.status==="Time Change Suggested"?`
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
  `,(h=document.getElementById("btnModalCloseView"))==null||h.addEventListener("click",()=>{r.innerHTML=""}),(d=document.getElementById("btnModalAcceptReq"))==null||d.addEventListener("click",async()=>{try{await fetch(`/api/requests/${a.id}/accept`,{method:"POST"})}catch{}a.status="Accepted",await he(a),r.innerHTML="",it(`Request ${a.id} Accepted! Status is now Accepted.`),Gt(l)}),(u=document.getElementById("btnModalRejectReq"))==null||u.addEventListener("click",async()=>{try{await fetch(`/api/requests/${a.id}/reject`,{method:"POST"})}catch{}a.status="Rejected",await he(a),r.innerHTML="",it(`Request ${a.id} Rejected.`),Gt(l)}),(m=document.getElementById("btnModalSuggestTime"))==null||m.addEventListener("click",()=>{fa(a,l)}),(g=document.getElementById("btnModalStartTestFromModal"))==null||g.addEventListener("click",()=>{r.innerHTML="",us({reqId:a.id,hname:a.household_name,ward:a.ward,test:a.test_type,user:l})}))}function fa(a,l){var h,d;const r=document.getElementById("modalHost");r&&(r.innerHTML=`
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
  `,(h=document.getElementById("btnCancelTimeModal"))==null||h.addEventListener("click",()=>{r.innerHTML=""}),(d=document.getElementById("formSuggestTime"))==null||d.addEventListener("submit",async u=>{u.preventDefault();const m=document.getElementById("suggDate").value,g=document.getElementById("suggTime").value;try{await fetch(`/api/requests/${a.id}/suggest_time`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({suggested_date:m,suggested_time:g})})}catch{}a.status="Time Change Suggested",a.suggested_date=m,a.suggested_time=g,await he(a),r.innerHTML="",it(`Suggested new time (${g}) sent to ${a.household_name}.`),Gt(l)}))}function us({reqId:a,hname:l,ward:r,test:h,user:d}){var m,g;const u=document.getElementById("modalHost");u&&(u.innerHTML=`
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: #38bdf8;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Submit Field Test Result</span>
        </div>

        <div style="font-size: 0.84rem; color: var(--text-dim); margin-bottom: 12px; line-height: 1.6;">
          <div>Request ID: <strong>${a}</strong></div>
          <div>Household: <strong>${l}</strong> (${r})</div>
          <div>Test Type: <strong>${h}</strong></div>
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
  `,(m=document.getElementById("btnCancelResultModal"))==null||m.addEventListener("click",()=>{u.innerHTML=""}),(g=document.getElementById("formSubmitFieldResult"))==null||g.addEventListener("submit",async v=>{v.preventDefault();const T=document.getElementById("resSelect").value,x=document.getElementById("ftObservations").value,C=document.getElementById("ftAdditionalNotes").value;try{await fetch(`/api/requests/${a}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({result:T,test_type:h,observations:x||"Field inspection confirmed abnormal coliform readings.",lab_status:T==="Abnormal"?"Recommended":"Not Required"})})}catch{}const y=await Di(a);if(y){y.status="Test Completed",y.test_result=T,y.observations=x||"Field inspection completed.",y.lab_status=T==="Abnormal"?"Recommended":"Not Required",await he(y);const P={user_id:y.user_id,username:y.username,ward:y.ward,panchayat:y.panchayat||"Puzhakkal Panchayat",test_type:`${y.test_type||h}`,source:"field",tester_name:d.name,result:T,date:new Date().toISOString().split("T")[0],time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),date_time:`${new Date().toISOString().split("T")[0]} ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`,notes:x||C||`Field verified test performed by certified inspector ${d.name}`,lat:y.lat||10.545,lng:y.lng||76.205,verification_status:"Verified",lab_status:T==="Abnormal"?"Recommended":"Not Required",timestamp:Date.now()};await ns(P)}u.innerHTML="",it("Field test result submitted successfully! Verified report recorded."),Gt(d)}))}function hs(a,l){var r,h,d;a.innerHTML=`
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
              ${Wt.map(u=>`<option value="${u.id}" ${u.id===l.ward?"selected":""}>${u.name}</option>`).join("")}
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
  `,(r=document.getElementById("btnUpdateTesterGeo"))==null||r.addEventListener("click",()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(u=>{const m=document.getElementById("editTesterLat"),g=document.getElementById("editTesterLng");m&&(m.value=u.coords.latitude.toFixed(4)),g&&(g.value=u.coords.longitude.toFixed(4)),it("Updated location to current GPS coordinates.")},()=>{it("Could not acquire GPS position.")})}),(h=document.getElementById("formTesterProfile"))==null||h.addEventListener("submit",async u=>{u.preventDefault();const m=document.getElementById("editTesterName").value,g=document.getElementById("editTesterPhone").value,v=document.getElementById("editTesterTypes").value,T=document.getElementById("editTesterArea").value,x=document.getElementById("editTesterWard").value,C=parseInt(document.getElementById("editTesterAvail").value,10),y=parseFloat(document.getElementById("editTesterLat").value)||l.lat,P=parseFloat(document.getElementById("editTesterLng").value)||l.lng;try{const S=await ta(l.id,{name:m,phone:g,test_types:v,area:T,ward:x,available:C,lat:y,lng:P});it("Profile updated successfully!"),hs(a,S)}catch{it("Failed to update profile")}}),(d=document.getElementById("btnLogoutTesterBtn"))==null||d.addEventListener("click",()=>{Xe(),et="household",st()})}function ma(a,l){a.innerHTML=`
    <header class="app-header">
      <div style="display: flex; align-items: center; gap: 20px;">
        <div class="brand-badge" id="btnHeaderHome" style="cursor: pointer;">
          <div class="brand-icon">
            ${Me(36,"home_hdr")}
          </div>
          <div>
            <span class="brand-name">AquaGuard</span>
            <div class="brand-subtitle">Water Safety Platform</div>
          </div>
        </div>

        <!-- Desktop Navigation Bar -->
        <nav class="desktop-nav">
          <button class="nav-link ${J==="home"?"active":""}" data-tab="home">Home</button>
          <button class="nav-link ${J==="test"?"active":""}" data-tab="test">Test Water</button>
          <button class="nav-link ${J==="mytests"?"active":""}" data-tab="mytests">My Tests</button>
          <button class="nav-link ${J==="myrequests"?"active":""}" data-tab="myrequests">My Requests</button>
          <button class="nav-link ${J==="community"?"active":""}" data-tab="community">Community</button>
          <button class="nav-link ${J==="map"?"active":""}" data-tab="map">GIS Map</button>
          <button class="nav-link ${J==="alerts"?"active":""}" data-tab="alerts">Alerts</button>
          <button class="nav-link ${J==="profile"?"active":""}" data-tab="profile">Profile</button>
        </nav>
      </div>

      <div class="header-actions">
        <div class="status-pill ${mt?"offline":"online"}" id="statusBadge">
          <span class="status-dot"></span>
          <span>${mt?"Offline":"Online Sync"}</span>
        </div>
        <button class="status-toggle-btn" id="btnToggleOffline">
          ${mt?"Go Online":"Simulate Offline"}
        </button>

        <div class="user-chip" id="btnHeaderProfile" title="${l.name}" style="cursor: pointer;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>${l.name.split(" ")[0]}</span>
          <span style="color: var(--text-muted); font-weight: normal;">•</span>
          <span style="color: var(--primary); font-weight: 600;">${l.ward||"Ward 5"}</span>
        </div>

        <button class="btn-header-logout" id="btnHeaderLogout" title="Sign out">
          Logout
        </button>
      </div>
    </header>

    <main class="view-container" id="mainContent">
      <!-- Dynamic Tab Content -->
    </main>

    <!-- Household Mobile Navigation Bar -->
    <nav class="bottom-nav">
      <button class="nav-item ${J==="home"?"active":""}" data-tab="home">
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>Home</span>
      </button>
      <button class="nav-item ${J==="test"?"active":""}" data-tab="test">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        <span>Test Water</span>
      </button>
      <button class="nav-item ${J==="mytests"?"active":""}" data-tab="mytests">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        <span>My Tests</span>
      </button>
      <button class="nav-item ${J==="myrequests"?"active":""}" data-tab="myrequests">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline><path d="M4 12h16"></path></svg>
        <span>My Requests</span>
      </button>
      <button class="nav-item ${J==="community"?"active":""}" data-tab="community">
        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <span>Community</span>
      </button>
      <button class="nav-item ${J==="map"?"active":""}" data-tab="map">
        <svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
        <span>GIS Map</span>
      </button>
      <button class="nav-item ${J==="alerts"?"active":""}" data-tab="alerts">
        <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>Alerts</span>
      </button>
      <button class="nav-item ${J==="profile"?"active":""}" data-tab="profile">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </button>
    </nav>

    <div id="modalHost"></div>
  `,pa(),xt()}function pa(){var a,l,r,h;(a=document.getElementById("btnToggleOffline"))==null||a.addEventListener("click",aa),(l=document.getElementById("btnHeaderHome"))==null||l.addEventListener("click",()=>Q("home")),(r=document.getElementById("btnHeaderProfile"))==null||r.addEventListener("click",()=>Q("profile")),(h=document.getElementById("btnHeaderLogout"))==null||h.addEventListener("click",()=>{Xe(),et="household",st()}),document.querySelectorAll(".bottom-nav .nav-item, .desktop-nav .nav-link").forEach(d=>{d.addEventListener("click",u=>{const m=u.currentTarget.getAttribute("data-tab");m&&Q(m)})})}function Q(a){J=a,document.querySelectorAll(".bottom-nav .nav-item").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tab")===a)}),document.querySelectorAll(".desktop-nav .nav-link").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tab")===a)}),xt()}async function xt(){const a=Zi();if(!a){st();return}if(a.role==="field_tester"){Gt(a);return}const l=document.getElementById("mainContent");if(l)switch(J){case"home":await is(l,a);break;case"test":await ga(l,a);break;case"mytests":await Ta(l,a);break;case"myrequests":await fs(l,a);break;case"community":await xa(l,a);break;case"map":await Pa(l,a);break;case"alerts":await Ca(l,a);break;case"profile":await Ea(l,a);break;default:await is(l,a)}}async function is(a,l){var T,x,C,y,P;const{ward:r}=await ls(l.ward);let h=[];try{const S=l.id?`user_id=${l.id}`:`username=${encodeURIComponent(l.username)}`,b=await ee(`/api/tests?${S}`);b&&b.tests&&(h=b.tests)}catch{}if(h.length===0)try{h=await Oi(l.username)}catch{}h.sort((S,b)=>(b.timestamp||0)-(S.timestamp||0));const d=h.length>0?h[0]:null;let u=null;try{if(l.id||l.username){const S=l.id?`user_id=${l.id}`:`username=${encodeURIComponent(l.username)}`,b=await fetch(`/api/requests?role=household&${S}`);if(b.ok){const H=await b.json();H.requests&&H.requests.length>0&&(u=H.requests[0])}}}catch{}if(!u&&l.username)try{const S=await $i(l.username);S&&S.length>0&&(u=S[S.length-1])}catch{}const m=ds(l.ward||"Ward 5");let g={total_tests:m.totalReports||18,participating_households:Math.max(1,Math.round((m.totalReports||18)*.7)),tests_this_week:Math.round((m.totalReports||18)*.5),preliminary_abnormal_reports:m.preliminaryPositiveReports||0,field_verified_reports:m.fieldVerifiedReports||0,pattern_detected:m.isContaminatedPattern||!1,rainfall:r.rainfall||"Normal",flood_risk:r.floodRisk||"Low",rainfall_mm:r.rainfallMm||14};try{const S=await fetch(`/api/community/${encodeURIComponent(l.ward||"Ward 5")}`);S.ok&&(g=await S.json())}catch{}a.innerHTML=`
    <!-- Top Welcome Section -->
    <div class="welcome-section">
      <div class="welcome-text">
        <h1 class="welcome-title">${sa()}, ${l.name}</h1>
        <p class="welcome-subtitle">Monitor your household water safety and stay informed about your community.</p>
      </div>
      <div class="location-badge">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>${l.ward||"Ward 5"} | ${l.panchayat||"Ernakulam Central"}</span>
      </div>
    </div>

    <!-- Main Central GIS Map (Primary Visual Centerpiece) -->
    <div class="gis-map-card">
      <div class="map-header">
        <div class="map-title-row">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
          <h2>Community Water Safety & Hazard GIS</h2>
        </div>
        <div class="map-layer-toggles">
          <label class="layer-chip ${ft.waterTests?"active":""}">
            <input type="checkbox" id="chkHomeLyrTests" ${ft.waterTests?"checked":""} />
            <span class="legend-dot test"></span> Water Tests
          </label>
          <label class="layer-chip ${ft.fieldVerified?"active":""}">
            <input type="checkbox" id="chkHomeLyrVerified" ${ft.fieldVerified?"checked":""} />
            <span class="legend-dot verified"></span> Field Verified
          </label>
          <label class="layer-chip ${ft.rainfall?"active":""}">
            <input type="checkbox" id="chkHomeLyrRainfall" ${ft.rainfall?"checked":""} />
            <span class="legend-dot area"></span> Rainfall
          </label>
          <label class="layer-chip ${ft.floodHazard?"active":""}">
            <input type="checkbox" id="chkHomeLyrHazard" ${ft.floodHazard?"checked":""} />
            <span class="legend-dot hazard"></span> Flood / Hazard
          </label>
          <label class="layer-chip ${ft.community?"active":""}">
            <input type="checkbox" id="chkHomeLyrCommunity" ${ft.community?"checked":""} />
            <span class="legend-dot area" style="background-color: #64748b;"></span> Community
          </label>
        </div>
      </div>

      <div id="homeMapContainer" class="gis-map-frame"></div>

      <div class="map-legend-bar">
        <div class="legend-item"><span class="legend-dot area"></span> Registered Household</div>
        <div class="legend-item"><span class="legend-dot verified"></span> Field-Verified Test</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #ef4444; border-radius: 50%;"></span> Preliminary Abnormal</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #f59e0b;"></span> Hazard / Waterlogging Zone</div>
        <div class="legend-item"><span class="legend-dot area" style="background: #94a3b8;"></span> Ward Boundary</div>
      </div>
    </div>

    <!-- Below the Map: 3 Clean Information Sections -->
    <div class="dashboard-grid">
      <!-- 1. Water Safety -->
      <div class="info-card">
        <div class="info-card-header">
          <div class="info-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            Water Safety
          </div>
          ${d?`<span class="badge ${Nt(d.result)?"badge-danger":"badge-safe"}">${d.result}</span>`:'<span class="badge badge-info">Not Screened</span>'}
        </div>
        <div class="info-card-body">
          ${d?`
            <div style="font-weight: 600; color: var(--text-main); margin-bottom: 2px;">
              ${d.testType||d.test_type||"Water Quality Test"}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
              Tested on ${d.date||d.date_time} • Source: ${d.source||"Household Tap"}
            </div>
            <div class="info-card-actions">
              <button class="btn btn-sm btn-primary" id="btnHomeTestWater">+ Test Water</button>
              <button class="btn btn-sm btn-secondary" id="btnGoToMyTests">View History →</button>
            </div>
          `:`
            <div style="color: var(--text-muted); margin-bottom: 12px; font-size: 0.86rem;">
              No water tests recorded yet. Screen your household water to detect safety risks early.
            </div>
            <button class="btn btn-sm btn-primary" id="btnHomeTestWater" style="width: 100%;">
              Test Water
            </button>
          `}
        </div>
      </div>

      <!-- 2. Field Testing -->
      <div class="info-card">
        <div class="info-card-header">
          <div class="info-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Field Testing
          </div>
          <span class="badge ${u?u.status==="Accepted"?"badge-info":u.status==="Test Completed"||u.status==="Verified"?"badge-safe":"badge-warn":"badge-info"}">
            ${u?u.status:"No Requests"}
          </span>
        </div>
        <div class="info-card-body">
          ${u?`
            <div style="font-weight: 600; color: var(--text-main); margin-bottom: 2px;">
              ${u.field_tester_name||"Field Tester"}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
              Status: <strong>${u.status}</strong> • Date: ${u.requested_date} (${u.suggested_time||u.requested_time||"Scheduled"})
            </div>
            <div class="info-card-actions">
              <button class="btn btn-sm btn-secondary" id="btnGoToMyRequests">View Details →</button>
              <button class="btn btn-sm btn-outline" id="btnFindFieldTester">Book Another</button>
            </div>
          `:`
            <div style="color: var(--text-muted); margin-bottom: 12px; font-size: 0.86rem;">
              No Field Tester requests yet. Request an authorized professional to inspect and test your water.
            </div>
            <button class="btn btn-sm btn-secondary" id="btnFindFieldTester" style="width: 100%;">
              Find a Field Tester
            </button>
          `}
        </div>
      </div>

      <!-- 3. Your Community -->
      <div class="info-card card-full-width">
        <div class="info-card-header">
          <div class="info-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Your Community Overview
          </div>
          <button class="btn btn-sm btn-secondary" id="btnGoToCommunityView" style="padding: 4px 10px; font-size: 0.78rem;">
            Full Community Report →
          </button>
        </div>
        <div class="info-card-body">
          <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 8px;">
            Community: <strong>${l.ward||"Ward 5"}</strong> • Rainfall: <strong>${g.rainfall} (${g.rainfall_mm}mm)</strong> • Flooding Risk: <strong>${g.flood_risk}</strong>
          </div>
          <div class="community-stats-grid">
            <div class="comm-stat-cell">
              <div class="comm-stat-value">${g.participating_households}</div>
              <div class="comm-stat-label">Participating Households</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value">${g.tests_this_week}</div>
              <div class="comm-stat-label">Tests This Week</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value" style="color: ${g.preliminary_abnormal_reports>0?"var(--danger)":"var(--primary)"};">
                ${g.preliminary_abnormal_reports}
              </div>
              <div class="comm-stat-label">Preliminary Abnormal</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value" style="color: var(--success);">${g.field_verified_reports}</div>
              <div class="comm-stat-label">Field-Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,(T=document.getElementById("btnHomeTestWater"))==null||T.addEventListener("click",()=>{ut="optionA",ct=null,Q("test")}),(x=document.getElementById("btnFindFieldTester"))==null||x.addEventListener("click",()=>{ut="optionB",ct=null,Q("test")}),(C=document.getElementById("btnGoToMyTests"))==null||C.addEventListener("click",()=>Q("mytests")),(y=document.getElementById("btnGoToMyRequests"))==null||y.addEventListener("click",()=>Q("myrequests")),(P=document.getElementById("btnGoToCommunityView"))==null||P.addEventListener("click",()=>Q("community")),[{id:"chkHomeLyrTests",key:"waterTests"},{id:"chkHomeLyrVerified",key:"fieldVerified"},{id:"chkHomeLyrRainfall",key:"rainfall"},{id:"chkHomeLyrHazard",key:"floodHazard"},{id:"chkHomeLyrCommunity",key:"community"}].forEach(({id:S,key:b})=>{const H=document.getElementById(S);H==null||H.addEventListener("change",R=>{var U;ft[b]=R.target.checked,(U=H.closest(".layer-chip"))==null||U.classList.toggle("active",R.target.checked),Qe("homeMapContainer",l,ft)})}),await Qe("homeMapContainer",l,ft)}async function ga(a,l){const r=new Date().toISOString().split("T")[0],h=new Date().toTimeString().split(" ")[0].substring(0,5);a.innerHTML=`
    <!-- Stepper Lifecycle -->
    <div class="workflow-stepper">
      <div class="workflow-step ${ut==="optionA"?"active":"completed"}">
        <div class="workflow-dot">1</div>
        <span>Home Test</span>
      </div>
      <div class="workflow-line ${ut==="optionB"?"active":""}"></div>
      <div class="workflow-step ${ut==="optionB"?"active":""}">
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
      <div class="option-select-card ${ut==="optionA"?"active":""}" id="btnSelectOptionA">
        <span class="option-badge">Option A</span>
        <h4 class="option-title">Individual / Home Test</h4>
        <p class="option-desc">Quick Home Screening with an approved test kit.</p>
      </div>

      <div class="option-select-card ${ut==="optionB"?"active":""}" id="btnSelectOptionB">
        <span class="option-badge" style="background: rgba(20, 184, 166, 0.2); color: var(--accent-teal);">Option B</span>
        <h4 class="option-title">Book Field Tester</h4>
        <p class="option-desc">Find nearby certified testers for professional verification.</p>
      </div>
    </div>

    <div id="testNoticeContainer"></div>

    ${ut==="optionA"?va(r,h):ct?ya(ct,l,r):await _a(l)}
  `,ba(l)}function va(a,l){return`
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
  `}async function _a(a){let l=[];try{const r=Rt==="all"?"all=true":`radius=${Rt}`,h=await fetch(`/api/testers/nearby?lat=${a.lat||10.545}&lng=${a.lng||76.205}&${r}`);if(h.ok)l=(await h.json()).testers||[];else throw new Error("API not ok")}catch{const h=a.lat||10.545,d=a.lng||76.205;l=[{id:1,name:"Anil Kumar",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening",test_types:"Water Quality & Coliform Analysis, Turbidity & pH Screening",area:"Ward 5 / Puzhakkal North",available:!0,ward:"Ward 5",tester_reg_no:"FT-REG-1042"},{id:2,name:"Sreya P.",lat:10.5081,lng:76.205,specialty:"Spectrophotometric Turbidity, Coliform Test Strip",test_types:"Spectrophotometric Turbidity, Coliform Test Strip",area:"Ward 2 / Riverside Sector",available:!0,ward:"Ward 2",tester_reg_no:"FT-REG-2088"},{id:3,name:"Rahul K.",lat:10.5972,lng:76.205,specialty:"Residual Chlorine & Microbial Assay, Chemical Contaminants",test_types:"Residual Chlorine & Microbial Assay, Chemical Contaminants",area:"Ward 4 / Hilltop Sector",available:!0,ward:"Ward 4",tester_reg_no:"FT-REG-3190"}].map(m=>{const g=(m.lat-h)*Math.PI/180,v=(m.lng-d)*Math.PI/180,T=Math.sin(g/2)**2+Math.cos(h*Math.PI/180)*Math.cos(m.lat*Math.PI/180)*Math.sin(v/2)**2,x=Math.round(6371*2*Math.atan2(Math.sqrt(T),Math.sqrt(1-T))*10)/10;return{...m,distance_km:x}}),Rt!=="all"&&(l=l.filter(m=>m.distance_km<=Number(Rt))),l.sort((m,g)=>m.distance_km-g.distance_km)}return`
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
        <div style="text-align: center; padding: 24px 14px; background: var(--bg-muted); border-radius: var(--radius-md); border: 1px dashed var(--border-color); margin: 8px 0;">
          <div style="font-size: 1.05rem; font-weight: 700; color: var(--warning); margin-bottom: 6px;">
            No nearby Field Testers available
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">
            No registered testers found within ${Rt} km. You can expand your search radius to find testers serving adjoining wards.
          </p>
          <button class="btn btn-primary btn-set-radius" data-radius="25" style="width: auto; padding: 6px 16px; margin: 0 auto;">
            Search Wider Service Area (25 km)
          </button>
        </div>
      `:`
        <div class="testers-list">
          ${l.map(r=>`
            <div class="tester-item">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                  <strong style="color: var(--text-main); font-size: 0.98rem;">${r.name}</strong>
                  ${r.tester_reg_no?`<span class="badge badge-info" style="font-size: 0.65rem; padding: 2px 6px;">${r.tester_reg_no}</span>`:""}
                </div>
                
                <div class="tester-distance" style="font-size: 0.82rem; margin: 2px 0;">
                  <span style="color: var(--primary); font-weight: 600;">📍 ${r.distance_km} km away</span>
                  <span style="color: var(--text-muted);"> • </span>
                  <span style="color: var(--text-secondary);">${r.area||r.ward}</span>
                  <span style="color: var(--text-muted);"> • </span>
                  <span style="color: ${r.available?"var(--success)":"var(--danger)"}; font-weight: 600;">
                    ${r.available?"● Available":"● Busy"}
                  </span>
                </div>

                <div class="tester-spec" style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
                  🧪 Tests: <span style="color: var(--text-main); font-weight: 500;">${r.test_types||r.specialty||"Water Quality Testing"}</span>
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
  `}function ya(a,l,r){return`
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Request Field Test
        </h3>
        <button class="btn btn-sm btn-secondary" id="btnBackToTesters" style="width: auto;">
          ← Back to Testers
        </button>
      </div>

      <div style="background: var(--bg-muted); border-radius: var(--radius-md); padding: 12px; margin-bottom: 14px; border: 1px solid var(--border-color); font-size: 0.86rem; line-height: 1.6; color: var(--text-main);">
        <div>Field Tester: <strong style="color: var(--text-main);">${a.name}</strong> (${a.distance_km} km away)</div>
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
  `}function ba(a){var h,d,u;(h=document.getElementById("btnSelectOptionA"))==null||h.addEventListener("click",()=>{ut="optionA",ct=null,xt()}),(d=document.getElementById("btnSelectOptionB"))==null||d.addEventListener("click",()=>{ut="optionB",xt()}),document.querySelectorAll(".btn-set-radius").forEach(m=>{m.addEventListener("click",g=>{const v=g.currentTarget.getAttribute("data-radius");Rt=v==="all"?"all":parseInt(v,10),xt()})}),document.querySelectorAll(".btn-select-tester").forEach(m=>{m.addEventListener("click",g=>{const v=g.currentTarget.getAttribute("data-id"),T=g.currentTarget.getAttribute("data-name"),x=g.currentTarget.getAttribute("data-distance"),C=g.currentTarget.getAttribute("data-ward"),y=g.currentTarget.getAttribute("data-area");ct={id:v,name:T,distance_km:x,ward:C,area:y},xt()})}),(u=document.getElementById("btnBackToTesters"))==null||u.addEventListener("click",()=>{ct=null,xt()});const l=document.getElementById("formIndividualTest");l==null||l.addEventListener("submit",async m=>{var P;m.preventDefault();const g=document.getElementById("testType").value,v=((P=document.querySelector('input[name="testResult"]:checked'))==null?void 0:P.value)||"Abnormal / Possible Concern",T=document.getElementById("testDate").value,x=document.getElementById("testTime").value,C=document.getElementById("testNotes").value,y={user_id:a.id,username:a.username,ward:a.ward,panchayat:a.panchayat,test_type:g,source:"home",result:v,date:T,time:x,date_time:`${T} ${x}`,notes:C.trim(),lat:a.lat||10.545,lng:a.lng||76.205,verification_status:Nt(v)?"Pending":"Not Required",lab_status:"Not Required",timestamp:Date.now()};await ee("/api/tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}),await ns(y),it("Water screening test recorded successfully!"),zi(v==="Normal"?{isAbnormal:!1,title:"Screening Complete",message:"No abnormal indication was recorded in this preliminary screening. Your drinking water parameters are within standard baseline.",onContinue:()=>Q("home")}:v==="Inconclusive"?{isAbnormal:!1,title:"Screening Inconclusive",message:"Test was inconclusive. Re-testing or scheduling professional field verification is recommended.",onContinue:()=>Q("home")}:{isAbnormal:!0,title:"Possible Water-Quality Concern",message:"Possible water-quality concern detected. Professional field verification by a certified tester is recommended.",onBook:()=>{ut="optionB",ct=null,xt()},onContinue:()=>Q("home")})});const r=document.getElementById("formSendFieldRequest");r==null||r.addEventListener("submit",async m=>{var b;m.preventDefault();const g=document.getElementById("reqTestType").value,v=document.getElementById("reqDate").value,T=document.getElementById("reqTime").value,x=document.getElementById("reqNotes").value,C={user_id:a.id,household_user_id:a.id,username:a.username,household_name:a.name,phone:a.phone||"+91 98470 11111",address:`${a.name}'s Residence, ${a.ward}`,field_tester_id:ct.id,field_tester_name:ct.name,ward:a.ward,location_desc:`${a.name}'s saved location (${a.ward})`,lat:a.lat||10.545,lng:a.lng||76.205,test_type:g,requested_date:v,requested_time:T,notes:x.trim()};let y=null;const P=await ee("/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});P&&P.request&&(y=P.request),y||(y={id:`REQ-${Math.floor(1e3+Math.random()*9e3)}`,...C,status:"Pending Field Tester Response",created_at:new Date().toISOString()}),await jo(y),it(`Request sent to ${y.field_tester_name}!`);const S=document.getElementById("testNoticeContainer");S&&(S.innerHTML=`
        <div class="notice-box notice-success" style="flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
          <div style="font-weight: 700; font-size: 1.05rem; color: var(--status-safe-text); margin-bottom: 4px;">
            ✓ Request Sent to Field Tester
          </div>
          <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-main);">
            Your request has been dispatched to <strong>${y.field_tester_name}</strong>.<br/>
            Request ID: <b>${y.id}</b><br/>
            Status: <span class="badge badge-warn">Pending Field Tester Response</span>
          </div>
          <button class="btn btn-sm btn-primary" id="btnGoToRequestsNow" style="margin-top: 10px; width: auto;">
            View My Requests →
          </button>
        </div>
      `,(b=document.getElementById("btnGoToRequestsNow"))==null||b.addEventListener("click",()=>Q("myrequests"))),ct=null})}function zi({isAbnormal:a,title:l,message:r,onBook:h,onContinue:d}){var m,g,v;const u=document.getElementById("modalHost");u&&(u.innerHTML=`
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: ${a?"#d97706":"#059669"};">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${a?'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>':'<polyline points="20 6 9 17 4 12"/>'}
          </svg>
          <span>${l}</span>
        </div>
        <p class="prompt-modal-body">
          ${r}
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${a&&h?'<button class="btn btn-primary" id="btnModalBook">Book Nearby Field Tester →</button>':""}
          <button class="btn btn-secondary" id="btnModalViewTests">
            View in My Tests
          </button>
          <button class="btn btn-secondary" id="btnModalContinue">
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  `,(m=document.getElementById("btnModalBook"))==null||m.addEventListener("click",()=>{u.innerHTML="",h&&h()}),(g=document.getElementById("btnModalViewTests"))==null||g.addEventListener("click",()=>{u.innerHTML="",Q("mytests")}),(v=document.getElementById("btnModalContinue"))==null||v.addEventListener("click",()=>{u.innerHTML="",d&&d()}))}async function fs(a,l){var h;let r=[];try{const d=await ee(`/api/requests?role=household&user_id=${l.id||4}`);d&&d.requests?r=d.requests:r=await $i(l.username)}catch{r=await $i(l.username)}r.sort((d,u)=>new Date(u.created_at||0)-new Date(d.created_at||0)),a.innerHTML=`
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
        ${r.length>0?r.map(d=>wa(d)).join(""):'<div style="font-size: 0.85rem; color: var(--text-dim); padding: 14px;">No requests submitted yet.</div>'}
      </div>
    </div>
  `,(h=document.getElementById("btnBookAnotherTesterReq"))==null||h.addEventListener("click",()=>{ut="optionB",ct=null,Q("test")}),document.querySelectorAll(".btn-accept-new-time").forEach(d=>{d.addEventListener("click",async u=>{const m=u.currentTarget.getAttribute("data-id");try{await fetch(`/api/requests/${m}/accept_time`,{method:"POST"})}catch{}const g=await Di(m);g&&(g.status="Accepted",g.suggested_time&&(g.requested_time=`${g.suggested_date||"Updated"} ${g.suggested_time}`),await he(g)),it("Accepted new appointment time!"),fs(a,l)})})}function wa(a){const l=a.status==="Time Change Suggested",r=a.status==="Accepted"||a.status==="Test In Progress",h=a.status==="Test Completed"||a.status==="Verified",d=a.status==="Rejected";return`
    <div class="my-test-card" style="border-color: ${h?"var(--primary-border)":r?"var(--primary)":l?"var(--warning)":d?"var(--danger)":"var(--border-color)"};">
      <div class="my-test-top">
        <div>
          <strong style="color: var(--text-main); font-size: 1rem;">${a.id}</strong>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 1px;">
            Field Tester: <strong style="color: var(--text-main);">${a.field_tester_name}</strong>
          </div>
        </div>
        <span class="badge ${h?"badge-safe":r?"badge-info":l?"badge-warn":d?"badge-danger":"badge-warn"}">${a.status}</span>
      </div>

      <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
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
        <div style="font-size: 0.82rem; color: var(--primary); margin-top: 4px; font-weight: 500;">
          ✓ Field Tester Accepted Your Request. Visit confirmed for ${a.suggested_time||a.requested_time}.
        </div>
      `:""}

      ${h?`
        <div style="font-size: 0.82rem; line-height: 1.6; color: var(--success); background: #f0fdf4; border: 1px solid #bbf7d0; padding: 8px 10px; border-radius: 6px; margin-top: 4px;">
          <div>Result: <strong style="color: ${a.field_result==="Abnormal"?"var(--danger)":"var(--success)"};">${a.field_result||"Abnormal"}</strong></div>
          <div>Verification: <strong>Completed</strong></div>
          ${a.lab_status==="Recommended"?'<div style="color: var(--primary); font-weight: 700;">Certified Lab Verification Recommended</div>':""}
        </div>
      `:""}
    </div>
  `}async function Ta(a,l){var h;let r=[];try{const d=await ee(`/api/tests?username=${encodeURIComponent(l.username)}`);d&&d.tests?r=d.tests:r=await Oi(l.username)}catch{r=await Oi(l.username)}r.sort((d,u)=>(u.timestamp||0)-(d.timestamp||0)),a.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
          Water Quality Tests & History
        </h2>
        <button class="btn btn-sm btn-primary" id="btnAddNewTestMy" style="width: auto;">
          + New Test
        </button>
      </div>

      <div>
        ${r.length>0?r.map(d=>`
          <div class="my-test-card">
            <div class="my-test-top">
              <div>
                <strong style="color: var(--text-main);">${d.test_type||d.testType||"Water Quality Test"}</strong>
                <div style="font-size: 0.78rem; color: var(--text-muted);">
                  Type: <b>${d.source==="field"?"Field Verification":"Home Screening"}</b>
                  ${d.tester_name?`• Tester: <b>${d.tester_name}</b>`:""}
                </div>
              </div>
              <span class="badge ${Nt(d.result)?"badge-danger":d.result==="Normal"?"badge-safe":"badge-warn"}">${d.result}</span>
            </div>


            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
              Date: ${d.date_time||d.date}
            </div>

            <div class="status-chip-row">
              <span class="status-chip ${d.verification_status==="Verified"?"field-verified":"field-pending"}">
                Status: <strong>${d.verification_status==="Verified"?"Verified":"Field Verification Recommended"}</strong>
              </span>
              ${d.lab_status==="Recommended"?'<span class="status-chip lab-rec">Certified Lab Verification Recommended</span>':""}
            </div>
            ${d.notes?`<div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 3px;"><em>"${d.notes}"</em></div>`:""}
          </div>
        `).join(""):'<div style="font-size: 0.85rem; color: var(--text-dim); padding: 14px;">No water tests recorded yet.</div>'}
      </div>
    </div>
  `,(h=document.getElementById("btnAddNewTestMy"))==null||h.addEventListener("click",()=>Q("test"))}async function xa(a,l){var d,u;let r={ward:l.ward||"Ward 5",has_data:!1,total_tests:0,participating_households:0,tests_this_week:0,preliminary_abnormal_reports:0,field_verified_reports:0,pattern_detected:!1,pattern_description:"No abnormal water-quality pattern detected.",rainfall:"Normal",rainfall_mm:14,flood_risk:"Low",response_status:"Normal"};try{const m=await fetch(`/api/community/${encodeURIComponent(l.ward||"Ward 5")}`);m.ok&&(r=await m.json())}catch{const g=await ds(l.ward);r.total_tests=g.totalReports,r.preliminary_abnormal_reports=g.preliminaryPositiveReports,r.field_verified_reports=g.fieldVerifiedReports,r.has_data=g.totalReports>0}let h=[];try{h=(await dbGetAllWaterTests()).filter(v=>v.ward===l.ward).slice(-6).reverse().map(v=>({text:v.verification_status==="Verified"?`Field-verified report logged in ${v.ward} (${v.test_type||v.testType||"Water Test"}).`:Nt(v.result)?`Preliminary abnormal water screening logged in ${v.ward} (${v.test_type||v.testType||"Home Test"}).`:`Preliminary normal water screening recorded in ${v.ward} (${v.test_type||v.testType||"Home Test"}).`,date:v.date_time||v.date||"Recent",isVerified:v.verification_status==="Verified",isPositive:Nt(v.result)}))}catch{}a.innerHTML=`
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
        <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--primary-light); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: var(--primary);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
        </div>
        <h3 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 6px; font-weight: 700;">No community test data available yet.</h3>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 13h16a4.5 4.5 0 0 0 2-3.8z"></path></svg>
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
            <div class="stat-value" style="font-size: 1.25rem; color: ${r.flood_risk==="High"?"var(--danger)":"var(--success)"};">${r.flood_risk}</div>
            <div class="stat-label">Flooding / Waterlogging</div>
          </div>
        </div>
      </div>
    `:`
      <!-- Ward-Level Response View Card -->
      <div class="ward-response-card ${r.pattern_detected?"attention":""}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h2 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">
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
          <span class="response-val" style="color: var(--primary); font-weight: 600;">${r.participating_households}</span>
        </div>

        <div class="response-row">
          <span class="response-label">Water Tests This Week:</span>
          <span class="response-val">${r.tests_this_week}</span>
        </div>

        <div class="response-row">
          <span class="response-label">Preliminary Abnormal Reports:</span>
          <span class="response-val" style="color: ${r.preliminary_abnormal_reports>0?"var(--danger)":"var(--success)"};">
            ${r.preliminary_abnormal_reports}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Field-Verified Reports:</span>
          <span class="response-val" style="color: var(--primary); font-weight: 600;">
            ${r.field_verified_reports}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Possible Water-Quality Pattern:</span>
          <span class="response-val" style="color: ${r.pattern_detected?"var(--danger)":"var(--success)"};">
            ${r.pattern_detected?"Yes (Multiple abnormal reports)":"None detected"}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Current Rainfall / Hazard:</span>
          <span class="response-val" style="color: ${r.rainfall==="Heavy"?"var(--primary)":"var(--text-secondary)"};">
            ${r.rainfall} (${r.rainfall_mm}mm) • Flood Risk: ${r.flood_risk}
          </span>
        </div>
      </div>

      <!-- Situation Assessment -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
            Situation Assessment
          </h3>
          <span class="badge ${r.pattern_detected?"badge-danger":"badge-safe"}">
            ${r.pattern_detected?"Advisory Active":"Normal"}
          </span>
        </div>
        <p style="font-size: 0.92rem; line-height: 1.5; color: var(--text-main);">
          ${r.pattern_detected?`Possible water-quality pattern detected based on multiple abnormal reports in ${l.ward}. Local residents are advised to perform individual home screenings or request certified field verification.`:`Water-quality indicators in ${l.ward} remain within normal ranges. Continue periodic testing and report any observations.`}
        </p>
      </div>


      <!-- Privacy-Safe Area Feed -->
      ${h.length>0?`
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Recent Community Observations</h3>
            <span class="badge badge-safe">Privacy Protected</span>
          </div>
          <div class="feed-list">
            ${h.map(m=>`
              <div class="feed-item">
                <div class="feed-dot" style="background: ${m.isVerified?"#38bdf8":m.isPositive?"#f87171":"#34d399"};"></div>
                <div class="feed-text">
                  <div>${m.text}</div>
                  <div class="feed-time">${m.date}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}
    `}
  `,(d=document.getElementById("btnCommTestWater"))==null||d.addEventListener("click",()=>Q("test")),(u=document.getElementById("btnCommEmptyStartTest"))==null||u.addEventListener("click",()=>Q("test"))}async function Qe(a,l,r){if(Je){try{Je.remove()}catch{}Je=null}if(!document.getElementById(a))return;const d=Wt.find(b=>b.id===l.ward)||Wt[4],u=l.lat||d.center[0],m=l.lng||d.center[1],g=Ct.map(a,{zoomControl:!0,attributionControl:!1}).setView([u,m],14);if(Je=g,Ct.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{maxZoom:19,subdomains:"abcd",crossOrigin:!0}).addTo(g),(r.community??r.wards)&&Wt.forEach(b=>{const H=b.id===l.ward;Ct.polygon(b.polygon,{color:H?"#0f766e":"#94a3b8",weight:H?2.5:1.2,fillColor:H?"#0f766e":"#cbd5e1",fillOpacity:H?.08:.04}).addTo(g).bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
          <strong style="color: #0f766e;">Registered Community Boundary</strong><br/>
          Community: <b>${b.name}</b><br/>
          Environmental Rainfall: <b>${b.rainfall} (${b.rainfallMm}mm)</b><br/>
          Flooding / Waterlogging: <b>${b.floodRisk}</b>
        </div>
      `)}),(r.floodHazard??r.hazard)&&ia.forEach(b=>{Ct.polygon(b.polygon,{color:"#d97706",weight:1.5,fillColor:"#f59e0b",fillOpacity:.2}).addTo(g).bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
          <strong style="color: #d97706;">Environmental Hazard Indicator</strong><br/>
          Flooding / Waterlogging Affected Zone<br/>
          <small style="color: #64748b;">Observed surface water accumulation area following rainfall.</small>
        </div>
      `)}),(r.rainfall??(r.hazard&&d.rainfall==="Heavy"))&&d.rainfall==="Heavy"&&Ct.circle(d.center,{radius:650,color:"#0284c7",fillColor:"#0284c7",fillOpacity:.12,weight:1.5,dashArray:"4, 4"}).addTo(g).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
        <strong style="color: #0284c7;">Rainfall Advisory Zone</strong><br/>
        Observed Rainfall: <b>Heavy (${d.rainfallMm}mm)</b><br/>
        <small style="color: #64748b;">High runoff conditions may increase microbial contamination risk in shallow wells.</small>
      </div>
    `),r.clusters&&(l.ward==="Ward 5"||d.id==="Ward 5")&&Ct.circle(d.center,{radius:460,color:"#ef4444",fillColor:"#ef4444",fillOpacity:.18,weight:1.5,dashArray:"3, 3"}).addTo(g).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
        <strong style="color: #dc2626;">Spatial Pattern Indicator</strong><br/>
        Multiple abnormal reports detected in this locality.<br/>
        <small style="color: #64748b;">Preliminary indicator; field verification recommended.</small>
      </div>
    `),r.waterTests??r.preliminary)try{(await dbGetAllWaterTests()).filter(R=>R.ward===l.ward).forEach(R=>{const U=Nt(R.result),V=R.lat||u+(Math.random()-.5)*.006,pt=R.lng||m+(Math.random()-.5)*.006;Ct.circleMarker([V,pt],{radius:6,color:U?"#dc2626":"#16a34a",fillColor:U?"#ef4444":"#22c55e",fillOpacity:.85,weight:1.5}).addTo(g).bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
            <strong style="color: ${U?"#dc2626":"#16a34a"};">Water-Test Screening</strong><br/>
            Test Type: <b>${R.test_type||R.testType||"Home Screening"}</b><br/>
            Source: <b>${R.source||"Household Tap"}</b><br/>
            Result: <b style="color: ${U?"#dc2626":"#16a34a"};">${R.result}</b><br/>
            Date: ${R.date_time||R.date||"Recent"}
          </div>
        `)})}catch{}if(r.fieldVerified??r.verified)try{(await dbGetAllWaterTests()).filter(R=>R.ward===l.ward&&(R.verification_status==="Verified"||R.fieldVerification&&R.fieldVerification.status==="Verified")).forEach(R=>{const U=R.lat||u+(Math.random()-.5)*.005,V=R.lng||m+(Math.random()-.5)*.005;Ct.circleMarker([U,V],{radius:7,color:"#0f766e",fillColor:"#14b8a6",fillOpacity:.95,weight:2}).addTo(g).bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
            <strong style="color: #0f766e;">Authorized Field Verification</strong><br/>
            Tester: <b>${R.tester_name||"Certified Field Tester"}</b><br/>
            Result: <b>${R.result||"Verified Safe"}</b><br/>
            Status: <b style="color: #0f766e;">Field Verified</b>
          </div>
        `)})}catch{}if((r.household??!0)&&l.role!=="field_tester"){const b=Ct.divIcon({className:"marker-household",html:`
        <div style="width: 32px; height: 32px; background: #0f766e; border: 2.5px solid #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(15, 118, 110, 0.4);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </div>
      `,iconSize:[32,32],iconAnchor:[16,16]});Ct.marker([u,m],{icon:b}).addTo(g).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
        <strong style="color: #0f766e;">Your Registered Household</strong><br/>
        User: <b>${l.name}</b><br/>
        Location: ${l.ward||"Ward 5"} | ${l.panchayat||"Ernakulam Central"}
      </div>
    `)}}async function Pa(a,l){a.innerHTML=`
    <div class="card" style="padding: 16px;">
      <div class="card-header" style="margin-bottom: 10px;">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg>
          GIS Hazard & Water Safety Map
        </h2>
        <span class="badge ${mt?"badge-warn":"badge-safe"}">
          ${mt?"Cached Offline Map":"Live Spatial View"}
        </span>
      </div>

      <div id="mapContainer" class="gis-map-frame" style="height: 480px; margin-bottom: 12px;"></div>

      <div class="map-layer-controls">
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrHousehold" ${Ot.household?"checked":""} />
          <span>Registered Household</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrWards" ${Ot.wards?"checked":""} />
          <span>Community Boundaries</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrPrelim" ${Ot.preliminary?"checked":""} />
          <span>Water Tests (Preliminary)</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrVerified" ${Ot.verified?"checked":""} />
          <span>Field-Verified Reports</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrHazard" ${Ot.hazard?"checked":""} />
          <span>Rainfall & Flood Zones</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrClusters" ${Ot.clusters?"checked":""} />
          <span>Water-Quality Patterns</span>
        </label>
      </div>

      <div class="map-legend-bar" style="margin-top: 12px;">
        <div class="legend-item"><span class="legend-dot area"></span> Registered Household</div>
        <div class="legend-item"><span class="legend-dot verified"></span> Field-Verified Test</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #ef4444; border-radius: 50%;"></span> Preliminary Abnormal</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #f59e0b;"></span> Hazard / Waterlogging Zone</div>
        <div class="legend-item"><span class="legend-dot area" style="background: #94a3b8;"></span> Ward Boundary</div>
      </div>
    </div>
  `,La(l),await Qe("mapContainer",l,Ot)}function La(a){[{id:"chkLyrHousehold",key:"household"},{id:"chkLyrWards",key:"wards"},{id:"chkLyrPrelim",key:"preliminary"},{id:"chkLyrVerified",key:"verified"},{id:"chkLyrHazard",key:"hazard"},{id:"chkLyrClusters",key:"clusters"}].forEach(({id:r,key:h})=>{var d;(d=document.getElementById(r))==null||d.addEventListener("change",u=>{Ot[h]=u.target.checked,Qe("mapContainer",a,Ot)})})}function ms(a){try{return JSON.parse(localStorage.getItem(`applied_solutions_${a||"default"}`)||"[]")}catch{return[]}}function ka(a,l){const r=ms(a),h=r.indexOf(l);return h>-1?r.splice(h,1):r.push(l),localStorage.setItem(`applied_solutions_${a||"default"}`,JSON.stringify(r)),r.includes(l)}function Sa(a,l){const r=a.alternateSolutions||[],h=ms(l.username);return`
    <div class="alert-card ${a.type}" style="margin-bottom: 18px;">
      <div class="alert-heading">
        <span style="font-weight: 700; font-size: 0.98rem; display: flex; align-items: center; gap: 8px;">
          ${a.type==="contamination"?"⚠️":a.type==="rainfall"?"🌧️":a.type==="mosquito"?"🦟":a.type==="flood"?"🌊":"🛡️"}
          ${a.title}
        </span>
        <span class="badge ${a.severity==="hazard"?"badge-danger":"badge-warn"}">${a.badge}</span>
      </div>

      <div class="alert-body" style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main); margin-bottom: 8px;">
        ${a.message}
      </div>

      ${a.details?`<div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">ℹ️ ${a.details}</div>`:""}

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
            ${r.map(d=>{const u=h.includes(d.id);return`
                <div class="solution-card">
                  <div class="solution-top">
                    <div class="solution-heading">
                      <span class="solution-icon">${d.icon||"💧"}</span>
                      <span>${d.title}</span>
                    </div>
                    <span class="solution-tag">${d.tag||"Recommended"}</span>
                  </div>

                  <div class="solution-meta-row">
                    ${d.timeRequired?`<div class="solution-meta-item">⏱️ <span>${d.timeRequired}</span></div>`:""}
                    ${d.cost?`<div class="solution-meta-item">💰 <span>${d.cost}</span></div>`:""}
                    ${d.bestFor?`<div class="solution-meta-item">🎯 <span>${d.bestFor}</span></div>`:""}
                  </div>

                  <ol class="solution-steps">
                    ${(d.steps||[]).map(m=>`<li>${m}</li>`).join("")}
                  </ol>

                  ${d.effectiveness?`
                    <div class="solution-effectiveness">
                      🛡️ <strong>Effectiveness:</strong> ${d.effectiveness}
                    </div>
                  `:""}

                  <div class="solution-footer">
                    <button class="btn-solution-applied ${u?"active-applied":""}" data-solid="${d.id}">
                      ${u?"✓ Applied by Household":"Mark as Applied"}
                    </button>

                    ${d.action==="book_tester"?`
                      <button class="btn-solution-action btn-sol-book-tester">
                        Book Nearby Field Tester →
                      </button>
                    `:d.action==="self_test"?`
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
  `}async function Ca(a,l){const{alerts:r}=await ls(l.ward);r.reduce((h,d)=>{var u;return h+(((u=d.alternateSolutions)==null?void 0:u.length)||0)},0),a.innerHTML=`
    <div class="card">
      <div class="card-header" style="flex-wrap: wrap; gap: 8px;">
        <div>
          <h2 class="card-title">Active Hazards & Alternate Solutions</h2>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
            Targeted remediation, safe water alternatives, and preventive steps for ${l.ward}
          </div>
        </div>
        <span class="badge ${r.length>0?"badge-danger":"badge-safe"}">${r.length} Active Alerts</span>
      </div>

      <div style="background: var(--primary-light); border: 1px solid var(--primary-border); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 16px; font-size: 0.82rem; color: var(--text-main); line-height: 1.5;">
        💡 <strong>Actionable Household Guidance:</strong> Each alert below includes tested alternate safe-water solutions, disinfection protocols, or municipal relief resources. You can mark which solutions you have applied to keep track of your family's safety.
      </div>


      ${r.length>0?r.map(h=>Sa(h,l)).join(""):'<div style="font-size: 0.9rem; color: var(--text-muted); padding: 10px 4px;">No active environmental hazard advisories for your area.</div>'}
    </div>
  `,Ma(a,l)}function Ma(a,l){a.querySelectorAll(".btn-solution-applied").forEach(r=>{r.addEventListener("click",h=>{const d=h.currentTarget.getAttribute("data-solid");ka(l.username,d)?(h.currentTarget.classList.add("active-applied"),h.currentTarget.textContent="✓ Applied by Household",it("Solution marked as applied by your household!")):(h.currentTarget.classList.remove("active-applied"),h.currentTarget.textContent="Mark as Applied",it("Removed solution from applied list."))})}),a.querySelectorAll(".btn-sol-book-tester").forEach(r=>{r.addEventListener("click",()=>{ut="optionB",ct=null,Q("test")})}),a.querySelectorAll(".btn-sol-self-test").forEach(r=>{r.addEventListener("click",()=>{ut="optionA",ct=null,Q("test")})})}async function Ea(a,l){var r;a.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Household Profile</h2>
        <span class="badge badge-safe">Active Session</span>
      </div>
      <div style="font-size: 0.9rem; line-height: 1.8; color: var(--text-main);">
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
  `,(r=document.getElementById("btnLogoutHouseholdBtn"))==null||r.addEventListener("click",()=>{Xe(),et="household",st()})}function it(a){const l=document.getElementById("appToast");l&&l.remove();const r=document.createElement("div");r.id="appToast",r.style.cssText=`
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%);
    background: #0f172a;
    border: 1px solid #334155;
    color: #ffffff;
    padding: 8px 18px;
    border-radius: 9999px;
    font-size: 0.82rem;
    font-weight: 500;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: fadeIn 0.2s ease-out;
  `,r.innerHTML=`
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${a}</span>
  `,document.body.appendChild(r),setTimeout(()=>r.remove(),3200)}
