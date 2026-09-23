(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))h(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function r(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function h(c){if(c.ep)return;c.ep=!0;const u=r(c);fetch(c.href,u)}})();var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ho(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Bi={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(a,l){(function(r,h){h(l)})(No,function(r){var h="1.9.4";function c(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var u=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function m(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var v=0;function _(t){return"_leaflet_id"in t||(t._leaflet_id=++v),t._leaflet_id}function w(t,e,i){var n,s,o,d;return d=function(){n=!1,s&&(o.apply(i,s),s=!1)},o=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(d,e),n=!0)},o}function T(t,e,i){var n=e[1],s=e[0],o=n-s;return t===n&&i?t:((t-s)%o+o)%o+s}function k(){return!1}function x(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function S(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function C(t){return S(t).split(/\s+/)}function b(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?u(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function R(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var O=/\{ *([\w_ -]+) *\}/g;function U(t,e){return t.replace(O,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var V=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function pt(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Ut="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function he(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var jt=0;function Ce(t){var e=+new Date,i=Math.max(0,16-(e-jt));return jt=e+i,window.setTimeout(t,i)}var ee=window.requestAnimationFrame||he("RequestAnimationFrame")||Ce,Zt=window.cancelAnimationFrame||he("CancelAnimationFrame")||he("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function ot(t,e,i){if(i&&ee===Ce)t.call(e);else return ee.call(window,m(t,e))}function vt(t){t&&Zt.call(window,t)}var us={__proto__:null,extend:c,create:u,bind:m,get lastId(){return v},stamp:_,throttle:w,wrapNum:T,falseFn:k,formatNum:x,trim:S,splitWords:C,setOptions:b,getParamString:R,template:U,isArray:V,indexOf:pt,emptyImageUrl:Ut,requestFn:ee,cancelFn:Zt,requestAnimFrame:ot,cancelAnimFrame:vt};function Mt(){}Mt.extend=function(t){var e=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=u(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&c(e,t.statics),t.includes&&(hs(t.includes),c.apply(null,[n].concat(t.includes))),c(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?u(i.options):{},c(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var o=0,d=n._initHooks.length;o<d;o++)n._initHooks[o].call(this)}},e},Mt.include=function(t){var e=this.prototype.options;return c(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},Mt.mergeOptions=function(t){return c(this.prototype.options,t),this},Mt.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function hs(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=V(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ht={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=C(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=C(t);for(var s=arguments.length===1,o=0,d=t.length;o<d;o++)s?this._off(t[o]):this._off(t[o],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,o;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,o=n.length;s<o;s++)n[s].fn=k;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var d=this._listens(t,e,i);if(d!==!1){var f=n[d];this._firingCount&&(f.fn=k,this._events[t]=n=n.slice()),n.splice(d,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=c({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var o=0,d=s.length;o<d;o++){var f=s[o],p=f.fn;f.once&&this.off(t,p,f.ctx),p.call(f.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var o=this._events&&this._events[t];if(o&&o.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var d in this._eventParents)if(this._eventParents[d].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,o=n.length;s<o;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=C(t);for(var s=0,o=t.length;s<o;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[_(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[_(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,c({layer:t.target,propagatedFrom:t.target},t),!0)}};ht.addEventListener=ht.on,ht.removeEventListener=ht.clearAllEventListeners=ht.off,ht.addOneTimeEventListener=ht.once,ht.fireEvent=ht.fire,ht.hasEventListeners=ht.listens;var fe=Mt.extend(ht);function A(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var Ni=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};A.prototype={clone:function(){return new A(this.x,this.y)},add:function(t){return this.clone()._add(E(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(E(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new A(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new A(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Ni(this.x),this.y=Ni(this.y),this},distanceTo:function(t){t=E(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=E(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=E(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+x(this.x)+", "+x(this.y)+")"}};function E(t,e,i){return t instanceof A?t:V(t)?new A(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new A(t.x,t.y):new A(t,e,i)}function F(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}F.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof A||typeof t[0]=="number"||"x"in t)e=i=E(t);else if(t=at(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return E((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return E(this.min.x,this.max.y)},getTopRight:function(){return E(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof A?t=E(t):t=at(t),t instanceof F?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=at(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>=e.x&&n.x<=i.x,d=s.y>=e.y&&n.y<=i.y;return o&&d},overlaps:function(t){t=at(t);var e=this.min,i=this.max,n=t.min,s=t.max,o=s.x>e.x&&n.x<i.x,d=s.y>e.y&&n.y<i.y;return o&&d},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return at(E(e.x-n,e.y-s),E(i.x+n,i.y+s))},equals:function(t){return t?(t=at(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function at(t,e){return!t||t instanceof F?t:new F(t,e)}function rt(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}rt.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof Z)n=t,s=t;else if(t instanceof rt){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend($(t)||j(t)):this;return!e&&!i?(this._southWest=new Z(n.lat,n.lng),this._northEast=new Z(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new rt(new Z(e.lat-n,e.lng-s),new Z(i.lat+n,i.lng+s))},getCenter:function(){return new Z((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Z(this.getNorth(),this.getWest())},getSouthEast:function(){return new Z(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Z||"lat"in t?t=$(t):t=j(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof rt?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=j(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>=e.lat&&n.lat<=i.lat,d=s.lng>=e.lng&&n.lng<=i.lng;return o&&d},overlaps:function(t){t=j(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),o=s.lat>e.lat&&n.lat<i.lat,d=s.lng>e.lng&&n.lng<i.lng;return o&&d},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=j(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function j(t,e){return t instanceof rt?t:new rt(t,e)}function Z(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}Z.prototype={equals:function(t,e){if(!t)return!1;t=$(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+x(this.lat,t)+", "+x(this.lng,t)+")"},distanceTo:function(t){return Dt.distance(this,$(t))},wrap:function(){return Dt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return j([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new Z(this.lat,this.lng,this.alt)}};function $(t,e,i){return t instanceof Z?t:V(t)&&typeof t[0]!="object"?t.length===3?new Z(t[0],t[1],t[2]):t.length===2?new Z(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Z(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new Z(t,e,i)}var Et={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new F(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?T(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?T(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new Z(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var o=t.getSouthWest(),d=t.getNorthEast(),f=new Z(o.lat-n,o.lng-s),p=new Z(d.lat-n,d.lng-s);return new rt(f,p)}},Dt=c({},Et,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,o=Math.sin((e.lat-t.lat)*i/2),d=Math.sin((e.lng-t.lng)*i/2),f=o*o+Math.cos(n)*Math.cos(s)*d*d,p=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));return this.R*p}}),Hi=6378137,Qe={R:Hi,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new A(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new Z((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=Hi*Math.PI;return new F([-t,-t],[t,t])}()};function Xe(t,e,i,n){if(V(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}Xe.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new A((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function me(t,e,i,n){return new Xe(t,e,i,n)}var ti=c({},Dt,{code:"EPSG:3857",projection:Qe,transformation:function(){var t=.5/(Math.PI*Qe.R);return me(t,.5,-t,.5)}()}),fs=c({},ti,{code:"EPSG:900913"});function Zi(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Di(t,e){var i="",n,s,o,d,f,p;for(n=0,o=t.length;n<o;n++){for(f=t[n],s=0,d=f.length;s<d;s++)p=f[s],i+=(s?"L":"M")+p.x+" "+p.y;i+=e?P.svg?"z":"x":""}return i||"M0 0"}var ei=document.documentElement.style,Me="ActiveXObject"in window,ms=Me&&!document.addEventListener,Fi="msLaunchUri"in navigator&&!("documentMode"in document),ii=Pt("webkit"),qi=Pt("android"),Wi=Pt("android 2")||Pt("android 3"),ps=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),vs=qi&&Pt("Google")&&ps<537&&!("AudioNode"in window),ni=!!window.opera,Vi=!Fi&&Pt("chrome"),Gi=Pt("gecko")&&!ii&&!ni&&!Me,gs=!Vi&&Pt("safari"),Ui=Pt("phantom"),ji="OTransition"in ei,_s=navigator.platform.indexOf("Win")===0,Ki=Me&&"transition"in ei,si="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Wi,Yi="MozPerspective"in ei,ys=!window.L_DISABLE_3D&&(Ki||si||Yi)&&!ji&&!Ui,pe=typeof orientation<"u"||Pt("mobile"),bs=pe&&ii,ws=pe&&si,Ji=!window.PointerEvent&&window.MSPointerEvent,Qi=!!(window.PointerEvent||Ji),Xi="ontouchstart"in window||!!window.TouchEvent,Ts=!window.L_NO_TOUCH&&(Xi||Qi),xs=pe&&ni,Ps=pe&&Gi,Ls=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ks=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",k,e),window.removeEventListener("testPassiveEventSupport",k,e)}catch{}return t}(),Ss=function(){return!!document.createElement("canvas").getContext}(),oi=!!(document.createElementNS&&Zi("svg").createSVGRect),Cs=!!oi&&function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ms=!oi&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}}(),Es=navigator.platform.indexOf("Mac")===0,As=navigator.platform.indexOf("Linux")===0;function Pt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var P={ie:Me,ielt9:ms,edge:Fi,webkit:ii,android:qi,android23:Wi,androidStock:vs,opera:ni,chrome:Vi,gecko:Gi,safari:gs,phantom:Ui,opera12:ji,win:_s,ie3d:Ki,webkit3d:si,gecko3d:Yi,any3d:ys,mobile:pe,mobileWebkit:bs,mobileWebkit3d:ws,msPointer:Ji,pointer:Qi,touch:Ts,touchNative:Xi,mobileOpera:xs,mobileGecko:Ps,retina:Ls,passiveEvents:ks,canvas:Ss,svg:oi,vml:Ms,inlineSvg:Cs,mac:Es,linux:As},tn=P.msPointer?"MSPointerDown":"pointerdown",en=P.msPointer?"MSPointerMove":"pointermove",nn=P.msPointer?"MSPointerUp":"pointerup",sn=P.msPointer?"MSPointerCancel":"pointercancel",ai={touchstart:tn,touchmove:en,touchend:nn,touchcancel:sn},on={touchstart:$s,touchmove:Ee,touchend:Ee,touchcancel:Ee},ie={},an=!1;function Is(t,e,i){return e==="touchstart"&&Os(),on[e]?(i=on[e].bind(this,i),t.addEventListener(ai[e],i,!1),i):(console.warn("wrong event specified:",e),k)}function Bs(t,e,i){if(!ai[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(ai[e],i,!1)}function zs(t){ie[t.pointerId]=t}function Rs(t){ie[t.pointerId]&&(ie[t.pointerId]=t)}function rn(t){delete ie[t.pointerId]}function Os(){an||(document.addEventListener(tn,zs,!0),document.addEventListener(en,Rs,!0),document.addEventListener(nn,rn,!0),document.addEventListener(sn,rn,!0),an=!0)}function Ee(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in ie)e.touches.push(ie[i]);e.changedTouches=[e],t(e)}}function $s(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&tt(e),Ee(t,e)}function Ns(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Hs=200;function Zs(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(o){if(o.detail!==1){n=o.detail;return}if(!(o.pointerType==="mouse"||o.sourceCapabilities&&!o.sourceCapabilities.firesTouchEvents)){var d=hn(o);if(!(d.some(function(p){return p instanceof HTMLLabelElement&&p.attributes.for})&&!d.some(function(p){return p instanceof HTMLInputElement||p instanceof HTMLSelectElement}))){var f=Date.now();f-i<=Hs?(n++,n===2&&e(Ns(o))):n=1,i=f}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function Ds(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var ri=Be(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ve=Be(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ln=ve==="webkitTransition"||ve==="OTransition"?ve+"End":"transitionend";function dn(t){return typeof t=="string"?document.getElementById(t):t}function ge(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function H(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function q(t){var e=t.parentNode;e&&e.removeChild(t)}function Ae(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ne(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function se(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function li(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Ie(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function B(t,e){if(t.classList!==void 0)for(var i=C(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!li(t,e)){var o=Ie(t);di(t,(o?o+" ":"")+e)}}function G(t,e){t.classList!==void 0?t.classList.remove(e):di(t,S((" "+Ie(t)+" ").replace(" "+e+" "," ")))}function di(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Ie(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function gt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Fs(t,e)}function Fs(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Be(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Kt(t,e,i){var n=e||new A(0,0);t.style[ri]=(P.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function K(t,e){t._leaflet_pos=e,P.any3d?Kt(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Yt(t){return t._leaflet_pos||new A(0,0)}var _e,ye,ci;if("onselectstart"in document)_e=function(){I(window,"selectstart",tt)},ye=function(){D(window,"selectstart",tt)};else{var be=Be(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);_e=function(){if(be){var t=document.documentElement.style;ci=t[be],t[be]="none"}},ye=function(){be&&(document.documentElement.style[be]=ci,ci=void 0)}}function ui(){I(window,"dragstart",tt)}function hi(){D(window,"dragstart",tt)}var ze,fi;function mi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Re(),ze=t,fi=t.style.outlineStyle,t.style.outlineStyle="none",I(window,"keydown",Re))}function Re(){ze&&(ze.style.outlineStyle=fi,ze=void 0,fi=void 0,D(window,"keydown",Re))}function cn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function pi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var qs={__proto__:null,TRANSFORM:ri,TRANSITION:ve,TRANSITION_END:ln,get:dn,getStyle:ge,create:H,remove:q,empty:Ae,toFront:ne,toBack:se,hasClass:li,addClass:B,removeClass:G,setClass:di,getClass:Ie,setOpacity:gt,testProp:Be,setTransform:Kt,setPosition:K,getPosition:Yt,get disableTextSelection(){return _e},get enableTextSelection(){return ye},disableImageDrag:ui,enableImageDrag:hi,preventOutline:mi,restoreOutline:Re,getSizedParentNode:cn,getScale:pi};function I(t,e,i,n){if(e&&typeof e=="object")for(var s in e)gi(t,s,e[s],i);else{e=C(e);for(var o=0,d=e.length;o<d;o++)gi(t,e[o],i,n)}return this}var Lt="_leaflet_events";function D(t,e,i,n){if(arguments.length===1)un(t),delete t[Lt];else if(e&&typeof e=="object")for(var s in e)_i(t,s,e[s],i);else if(e=C(e),arguments.length===2)un(t,function(f){return pt(e,f)!==-1});else for(var o=0,d=e.length;o<d;o++)_i(t,e[o],i,n);return this}function un(t,e){for(var i in t[Lt]){var n=i.split(/\d/)[0];(!e||e(n))&&_i(t,n,null,null,i)}}var vi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function gi(t,e,i,n){var s=e+_(i)+(n?"_"+_(n):"");if(t[Lt]&&t[Lt][s])return this;var o=function(f){return i.call(n||t,f||window.event)},d=o;!P.touchNative&&P.pointer&&e.indexOf("touch")===0?o=Is(t,e,o):P.touch&&e==="dblclick"?o=Zs(t,o):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(vi[e]||e,o,P.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(o=function(f){f=f||window.event,bi(t,f)&&d(f)},t.addEventListener(vi[e],o,!1)):t.addEventListener(e,d,!1):t.attachEvent("on"+e,o),t[Lt]=t[Lt]||{},t[Lt][s]=o}function _i(t,e,i,n,s){s=s||e+_(i)+(n?"_"+_(n):"");var o=t[Lt]&&t[Lt][s];if(!o)return this;!P.touchNative&&P.pointer&&e.indexOf("touch")===0?Bs(t,e,o):P.touch&&e==="dblclick"?Ds(t,o):"removeEventListener"in t?t.removeEventListener(vi[e]||e,o,!1):t.detachEvent("on"+e,o),t[Lt][s]=null}function Jt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function yi(t){return gi(t,"wheel",Jt),this}function we(t){return I(t,"mousedown touchstart dblclick contextmenu",Jt),t._leaflet_disable_click=!0,this}function tt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Qt(t){return tt(t),Jt(t),this}function hn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function fn(t,e){if(!e)return new A(t.clientX,t.clientY);var i=pi(e),n=i.boundingClientRect;return new A((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Ws=P.linux&&P.chrome?window.devicePixelRatio:P.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function mn(t){return P.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Ws:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function bi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Vs={__proto__:null,on:I,off:D,stopPropagation:Jt,disableScrollPropagation:yi,disableClickPropagation:we,preventDefault:tt,stop:Qt,getPropagationPath:hn,getMousePosition:fn,getWheelDelta:mn,isExternalTarget:bi,addListener:I,removeListener:D},pn=fe.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Yt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=ot(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),K(this._el,i),this.fire("step")},_complete:function(){vt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),N=fe.extend({options:{crs:ti,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=b(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=m(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView($(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ve&&P.any3d&&!P.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),I(this._proxy,ln,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter($(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=c({animate:i.animate},i.zoom),i.pan=c({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(P.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(P.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),o=t instanceof A?t:this.latLngToContainerPoint(t),d=o.subtract(s).multiplyBy(1-1/n),f=this.containerPointToLatLng(s.add(d));return this.setView(f,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():j(t);var i=E(e.paddingTopLeft||e.padding||[0,0]),n=E(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var o=n.subtract(i).divideBy(2),d=this.project(t.getSouthWest(),s),f=this.project(t.getNorthEast(),s),p=this.unproject(d.add(f).divideBy(2).add(o),s);return{center:p,zoom:s}},fitBounds:function(t,e){if(t=j(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=E(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new pn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){B(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!P.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),o=this.getSize(),d=this._zoom;t=$(t),e=e===void 0?d:e;var f=Math.max(o.x,o.y),p=f*this.getZoomScale(d,e),g=s.distanceTo(n)||1,y=1.42,M=y*y;function z(Y){var Ue=Y?-1:1,zo=Y?p:f,Ro=p*p-f*f+Ue*M*M*g*g,Oo=2*zo*M*g,Ai=Ro/Oo,Kn=Math.sqrt(Ai*Ai+1)-Ai,$o=Kn<1e-9?-18:Math.log(Kn);return $o}function it(Y){return(Math.exp(Y)-Math.exp(-Y))/2}function Q(Y){return(Math.exp(Y)+Math.exp(-Y))/2}function yt(Y){return it(Y)/Q(Y)}var lt=z(0);function ce(Y){return f*(Q(lt)/Q(lt+y*Y))}function Eo(Y){return f*(Q(lt)*yt(lt+y*Y)-it(lt))/M}function Ao(Y){return 1-Math.pow(1-Y,1.5)}var Io=Date.now(),Un=(z(1)-lt)/y,Bo=i.duration?1e3*i.duration:1e3*Un*.8;function jn(){var Y=(Date.now()-Io)/Bo,Ue=Ao(Y)*Un;Y<=1?(this._flyToFrame=ot(jn,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(Eo(Ue)/g)),d),this.getScaleZoom(f/ce(Ue),d),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),jn.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=j(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,j(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=E(e.paddingTopLeft||e.padding||[0,0]),n=E(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),o=this.project(t),d=this.getPixelBounds(),f=at([d.min.add(i),d.max.subtract(n)]),p=f.getSize();if(!f.contains(o)){this._enforcingBounds=!0;var g=o.subtract(f.getCenter()),y=f.extend(o).getSize().subtract(p);s.x+=g.x<0?-y.x:y.x,s.y+=g.y<0?-y.y:y.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=c({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),o=n.subtract(s);return!o.x&&!o.y?this:(t.animate&&t.pan?this.panBy(o):(t.pan&&this._rawPanBy(o),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(m(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=c({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=m(this._handleGeolocationResponse,this),i=m(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new Z(e,i),s=n.toBounds(t.coords.accuracy*2),o=this._locateOptions;if(o.setView){var d=this.getBoundsZoom(s);this.setView(n,o.maxZoom?Math.min(d,o.maxZoom):d)}var f={latlng:n,bounds:s,timestamp:t.timestamp};for(var p in t.coords)typeof t.coords[p]=="number"&&(f[p]=t.coords[p]);this.fire("locationfound",f)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),q(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(vt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)q(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=H("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new rt(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=j(t),i=E(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),o=this.getMaxZoom(),d=t.getNorthWest(),f=t.getSouthEast(),p=this.getSize().subtract(i),g=at(this.project(f,n),this.project(d,n)).getSize(),y=P.any3d?this.options.zoomSnap:1,M=p.x/g.x,z=p.y/g.y,it=e?Math.max(M,z):Math.min(M,z);return n=this.getScaleZoom(it,n),y&&(n=Math.round(n/(y/100))*(y/100),n=e?Math.ceil(n/y)*y:Math.floor(n/y)*y),Math.max(s,Math.min(o,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new A(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new F(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint($(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(E(t),e)},layerPointToLatLng:function(t){var e=E(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project($(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng($(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(j(t))},distance:function(t,e){return this.options.crs.distance($(t),$(e))},containerPointToLayerPoint:function(t){return E(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return E(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(E(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(t)))},mouseEventToContainerPoint:function(t){return fn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=dn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");I(e,"scroll",this._onScroll,this),this._containerId=_(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&P.any3d,B(t,"leaflet-container"+(P.touch?" leaflet-touch":"")+(P.retina?" leaflet-retina":"")+(P.ielt9?" leaflet-oldie":"")+(P.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=ge(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),K(this._mapPane,new A(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(B(t.markerPane,"leaflet-zoom-hide"),B(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){K(this._mapPane,new A(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return vt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){K(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[_(this._container)]=this;var e=t?D:I;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),P.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){vt(this._resizeRequest),this._resizeRequest=ot(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",o=t.target||t.srcElement,d=!1;o;){if(n=this._targets[_(o)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){d=!0;break}if(n&&n.listens(e,!0)&&(s&&!bi(o,t)||(i.push(n),s))||o===this._container)break;o=o.parentNode}return!i.length&&!d&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&mi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=c({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var o=[],d=0;d<i.length;d++)i[d].listens(e,!0)&&o.push(i[d]);s=o.concat(s)}if(s.length){e==="contextmenu"&&tt(t);var f=s[0],p={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var g=f.getLatLng&&(!f._radius||f._radius<=10);p.containerPoint=g?this.latLngToContainerPoint(f.getLatLng()):this.mouseEventToContainerPoint(t),p.layerPoint=this.containerPointToLayerPoint(p.containerPoint),p.latlng=g?f.getLatLng():this.layerPointToLatLng(p.layerPoint)}for(d=0;d<s.length;d++)if(s[d].fire(e,p,!0),p.originalEvent._stopped||s[d].options.bubblingMouseEvents===!1&&pt(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Yt(this._mapPane)||new A(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return at([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),o=new F(n.subtract(s),n.add(s)),d=this._getBoundsOffset(o,i,e);return Math.abs(d.x)<=1&&Math.abs(d.y)<=1?t:this.unproject(n.add(d),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new F(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=at(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),o=n.max.subtract(t.max),d=this._rebound(s.x,-o.x),f=this._rebound(s.y,-o.y);return new A(d,f)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=P.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){G(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=H("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=ri,n=this._proxy.style[i];Kt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){q(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Kt(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(ot(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,B(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(m(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&G(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Gs(t,e){return new N(t,e)}var bt=Mt.extend({options:{position:"topright"},initialize:function(t){b(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return B(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(q(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Te=function(t){return new bt(t)};N.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=H("div",e+"control-container",this._container);function n(s,o){var d=e+s+" "+e+o;t[s+o]=H("div",d,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)q(this._controlCorners[t]);q(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var vn=bt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){b(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return bt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(_(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){B(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(B(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):G(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return G(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=H("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),we(e),yi(e);var n=this._section=H("section",t+"-list");i&&(this._map.on("click",this.collapse,this),I(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=H("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),I(s,{keydown:function(o){o.keyCode===13&&this._expandSafely()},click:function(o){tt(o),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=H("div",t+"-base",n),this._separator=H("div",t+"-separator",n),this._overlaysList=H("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&_(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(m(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ae(this._baseLayersList),Ae(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(_(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+_(this),i),this._layerControlInputs.push(n),n.layerId=_(t.layer),I(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var o=document.createElement("span");e.appendChild(o),o.appendChild(n),o.appendChild(s);var d=t.overlay?this._overlaysList:this._baseLayersList;return d.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(o=0;o<s.length;o++)this._map.hasLayer(s[o])&&this._map.removeLayer(s[o]);for(o=0;o<n.length;o++)this._map.hasLayer(n[o])||this._map.addLayer(n[o]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,I(t,"click",tt),this.expand();var e=this;setTimeout(function(){D(t,"click",tt),e._preventClick=!1})}}),Us=function(t,e,i){return new vn(t,e,i)},wi=bt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=H("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var o=H("a",i,n);return o.innerHTML=t,o.href="#",o.title=e,o.setAttribute("role","button"),o.setAttribute("aria-label",e),we(o),I(o,"click",Qt),I(o,"click",s,this),I(o,"click",this._refocusOnMap,this),o},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";G(this._zoomInButton,e),G(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(B(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(B(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});N.mergeOptions({zoomControl:!0}),N.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new wi,this.addControl(this.zoomControl))});var js=function(t){return new wi(t)},gn=bt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=H("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=H("div",e,i)),t.imperial&&(this._iScale=H("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),Ks=function(t){return new gn(t)},Ys='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Ti=bt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(P.inlineSvg?Ys+" ":"")+"Leaflet</a>"},initialize:function(t){b(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=H("div","leaflet-control-attribution"),we(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});N.mergeOptions({attributionControl:!0}),N.addInitHook(function(){this.options.attributionControl&&new Ti().addTo(this)});var Js=function(t){return new Ti(t)};bt.Layers=vn,bt.Zoom=wi,bt.Scale=gn,bt.Attribution=Ti,Te.layers=Us,Te.zoom=js,Te.scale=Ks,Te.attribution=Js;var kt=Mt.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});kt.addTo=function(t,e){return t.addHandler(e,this),this};var Qs={Events:ht},_n=P.touch?"touchstart mousedown":"mousedown",Ft=fe.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){b(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(I(this._dragStartTarget,_n,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Ft._dragging===this&&this.finishDrag(!0),D(this._dragStartTarget,_n,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!li(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Ft._dragging===this&&this.finishDrag();return}if(!(Ft._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Ft._dragging=this,this._preventOutline&&mi(this._element),ui(),_e(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=cn(this._element);this._startPoint=new A(e.clientX,e.clientY),this._startPos=Yt(this._element),this._parentScale=pi(i);var n=t.type==="mousedown";I(document,n?"mousemove":"touchmove",this._onMove,this),I(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new A(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,tt(t),this._moved||(this.fire("dragstart"),this._moved=!0,B(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),B(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),K(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){G(document.body,"leaflet-dragging"),this._lastTarget&&(G(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),D(document,"mousemove touchmove",this._onMove,this),D(document,"mouseup touchend touchcancel",this._onUp,this),hi(),ye();var e=this._moved&&this._moving;this._moving=!1,Ft._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function yn(t,e,i){var n,s=[1,4,2,8],o,d,f,p,g,y,M,z;for(o=0,y=t.length;o<y;o++)t[o]._code=Xt(t[o],e);for(f=0;f<4;f++){for(M=s[f],n=[],o=0,y=t.length,d=y-1;o<y;d=o++)p=t[o],g=t[d],p._code&M?g._code&M||(z=Oe(g,p,M,e,i),z._code=Xt(z,e),n.push(z)):(g._code&M&&(z=Oe(g,p,M,e,i),z._code=Xt(z,e),n.push(z)),n.push(p));t=n}return t}function bn(t,e){var i,n,s,o,d,f,p,g,y;if(!t||t.length===0)throw new Error("latlngs not passed");_t(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var M=$([0,0]),z=j(t),it=z.getNorthWest().distanceTo(z.getSouthWest())*z.getNorthEast().distanceTo(z.getNorthWest());it<1700&&(M=xi(t));var Q=t.length,yt=[];for(i=0;i<Q;i++){var lt=$(t[i]);yt.push(e.project($([lt.lat-M.lat,lt.lng-M.lng])))}for(f=p=g=0,i=0,n=Q-1;i<Q;n=i++)s=yt[i],o=yt[n],d=s.y*o.x-o.y*s.x,p+=(s.x+o.x)*d,g+=(s.y+o.y)*d,f+=d*3;f===0?y=yt[0]:y=[p/f,g/f];var ce=e.unproject(E(y));return $([ce.lat+M.lat,ce.lng+M.lng])}function xi(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var o=$(t[s]);e+=o.lat,i+=o.lng,n++}return $([e/n,i/n])}var Xs={__proto__:null,clipPolygon:yn,polygonCenter:bn,centroid:xi};function wn(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=io(t,i),t=eo(t,i),t}function Tn(t,e,i){return Math.sqrt(xe(t,e,i,!0))}function to(t,e,i){return xe(t,e,i)}function eo(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,Pi(t,s,e,0,i-1);var o,d=[];for(o=0;o<i;o++)s[o]&&d.push(t[o]);return d}function Pi(t,e,i,n,s){var o=0,d,f,p;for(f=n+1;f<=s-1;f++)p=xe(t[f],t[n],t[s],!0),p>o&&(d=f,o=p);o>i&&(e[d]=1,Pi(t,e,i,n,d),Pi(t,e,i,d,s))}function io(t,e){for(var i=[t[0]],n=1,s=0,o=t.length;n<o;n++)no(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<o-1&&i.push(t[o-1]),i}var xn;function Pn(t,e,i,n,s){var o=n?xn:Xt(t,i),d=Xt(e,i),f,p,g;for(xn=d;;){if(!(o|d))return[t,e];if(o&d)return!1;f=o||d,p=Oe(t,e,f,i,s),g=Xt(p,i),f===o?(t=p,o=g):(e=p,d=g)}}function Oe(t,e,i,n,s){var o=e.x-t.x,d=e.y-t.y,f=n.min,p=n.max,g,y;return i&8?(g=t.x+o*(p.y-t.y)/d,y=p.y):i&4?(g=t.x+o*(f.y-t.y)/d,y=f.y):i&2?(g=p.x,y=t.y+d*(p.x-t.x)/o):i&1&&(g=f.x,y=t.y+d*(f.x-t.x)/o),new A(g,y,s)}function Xt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function no(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function xe(t,e,i,n){var s=e.x,o=e.y,d=i.x-s,f=i.y-o,p=d*d+f*f,g;return p>0&&(g=((t.x-s)*d+(t.y-o)*f)/p,g>1?(s=i.x,o=i.y):g>0&&(s+=d*g,o+=f*g)),d=t.x-s,f=t.y-o,n?d*d+f*f:new A(s,o)}function _t(t){return!V(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Ln(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),_t(t)}function kn(t,e){var i,n,s,o,d,f,p,g;if(!t||t.length===0)throw new Error("latlngs not passed");_t(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var y=$([0,0]),M=j(t),z=M.getNorthWest().distanceTo(M.getSouthWest())*M.getNorthEast().distanceTo(M.getNorthWest());z<1700&&(y=xi(t));var it=t.length,Q=[];for(i=0;i<it;i++){var yt=$(t[i]);Q.push(e.project($([yt.lat-y.lat,yt.lng-y.lng])))}for(i=0,n=0;i<it-1;i++)n+=Q[i].distanceTo(Q[i+1])/2;if(n===0)g=Q[0];else for(i=0,o=0;i<it-1;i++)if(d=Q[i],f=Q[i+1],s=d.distanceTo(f),o+=s,o>n){p=(o-n)/s,g=[f.x-p*(f.x-d.x),f.y-p*(f.y-d.y)];break}var lt=e.unproject(E(g));return $([lt.lat+y.lat,lt.lng+y.lng])}var so={__proto__:null,simplify:wn,pointToSegmentDistance:Tn,closestPointOnSegment:to,clipSegment:Pn,_getEdgeIntersection:Oe,_getBitCode:Xt,_sqClosestPointOnSegment:xe,isFlat:_t,_flat:Ln,polylineCenter:kn},Li={project:function(t){return new A(t.lng,t.lat)},unproject:function(t){return new Z(t.y,t.x)},bounds:new F([-180,-90],[180,90])},ki={R:6378137,R_MINOR:6356752314245179e-9,bounds:new F([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,o=Math.sqrt(1-s*s),d=o*Math.sin(n),f=Math.tan(Math.PI/4-n/2)/Math.pow((1-d)/(1+d),o/2);return n=-i*Math.log(Math.max(f,1e-10)),new A(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),o=Math.exp(-t.y/i),d=Math.PI/2-2*Math.atan(o),f=0,p=.1,g;f<15&&Math.abs(p)>1e-7;f++)g=s*Math.sin(d),g=Math.pow((1-g)/(1+g),s/2),p=Math.PI/2-2*Math.atan(o*g)-d,d+=p;return new Z(d*e,t.x*e/i)}},oo={__proto__:null,LonLat:Li,Mercator:ki,SphericalMercator:Qe},ao=c({},Dt,{code:"EPSG:3395",projection:ki,transformation:function(){var t=.5/(Math.PI*ki.R);return me(t,.5,-t,.5)}()}),Sn=c({},Dt,{code:"EPSG:4326",projection:Li,transformation:me(1/180,1,-1/180,.5)}),ro=c({},Et,{projection:Li,transformation:me(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Et.Earth=Dt,Et.EPSG3395=ao,Et.EPSG3857=ti,Et.EPSG900913=fs,Et.EPSG4326=Sn,Et.Simple=ro;var wt=fe.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[_(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[_(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});N.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=_(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=_(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return _(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?V(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[_(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=_(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var oe=wt.extend({initialize:function(t,e){b(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return _(t)}}),lo=function(t,e){return new oe(t,e)},At=oe.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),oe.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),oe.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new rt;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),co=function(t,e){return new At(t,e)},ae=Mt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){b(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=E(n),o=E(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),o&&(t.style.marginLeft=-o.x+"px",t.style.marginTop=-o.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return P.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function uo(t){return new ae(t)}var Pe=ae.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof Pe.imagePath!="string"&&(Pe.imagePath=this._detectIconPath()),(this.options.imagePath||Pe.imagePath)+ae.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var o=n.exec(i);return o&&o[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=H("div","leaflet-default-icon-path",document.body),e=ge(t,"background-image")||ge(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Cn=kt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Ft(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),B(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&G(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,o=Yt(e._icon),d=i.getPixelBounds(),f=i.getPixelOrigin(),p=at(d.min._subtract(f).add(s),d.max._subtract(f).subtract(s));if(!p.contains(o)){var g=E((Math.max(p.max.x,o.x)-p.max.x)/(d.max.x-p.max.x)-(Math.min(p.min.x,o.x)-p.min.x)/(d.min.x-p.min.x),(Math.max(p.max.y,o.y)-p.max.y)/(d.max.y-p.max.y)-(Math.min(p.min.y,o.y)-p.min.y)/(d.min.y-p.min.y)).multiplyBy(n);i.panBy(g,{animate:!1}),this._draggable._newPos._add(g),this._draggable._startPos._add(g),K(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=ot(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(vt(this._panRequest),this._panRequest=ot(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Yt(e._icon),s=e._map.layerPointToLatLng(n);i&&K(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){vt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),$e=wt.extend({options:{icon:new Pe,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){b(this,e),this._latlng=$(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=$(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),B(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&I(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),o=!1;s!==this._shadow&&(this._removeShadow(),o=!0),s&&(B(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&o&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&D(this._icon,"focus",this._panOnFocus,this),q(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&q(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&K(this._icon,t),this._shadow&&K(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(B(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Cn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Cn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&gt(this._icon,t),this._shadow&&gt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?E(e.iconSize):E(0,0),n=e.iconAnchor?E(e.iconAnchor):E(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ho(t,e){return new $e(t,e)}var qt=wt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return b(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ne=qt.extend({options:{fill:!0,radius:10},initialize:function(t,e){b(this,e),this._latlng=$(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=$(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return qt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new F(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function fo(t,e){return new Ne(t,e)}var Si=Ne.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=c({},i,{radius:e})),b(this,e),this._latlng=$(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new rt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:qt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===Dt.distance){var s=Math.PI/180,o=this._mRadius/Dt.R/s,d=i.project([e+o,t]),f=i.project([e-o,t]),p=d.add(f).divideBy(2),g=i.unproject(p).lat,y=Math.acos((Math.cos(o*s)-Math.sin(e*s)*Math.sin(g*s))/(Math.cos(e*s)*Math.cos(g*s)))/s;(isNaN(y)||y===0)&&(y=o/Math.cos(Math.PI/180*e)),this._point=p.subtract(i.getPixelOrigin()),this._radius=isNaN(y)?0:p.x-i.project([g,t-y]).x,this._radiusY=p.y-d.y}else{var M=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(M).x}this._updateBounds()}});function mo(t,e,i){return new Si(t,e,i)}var It=qt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){b(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=xe,s,o,d=0,f=this._parts.length;d<f;d++)for(var p=this._parts[d],g=1,y=p.length;g<y;g++){s=p[g-1],o=p[g];var M=n(t,s,o,!0);M<e&&(e=M,i=n(t,s,o))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return kn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=$(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new rt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return _t(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=_t(t),n=0,s=t.length;n<s;n++)i?(e[n]=$(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new F;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new A(t,t);this._rawPxBounds&&(this._pxBounds=new F([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof Z,s=t.length,o,d;if(n){for(d=[],o=0;o<s;o++)d[o]=this._map.latLngToLayerPoint(t[o]),i.extend(d[o]);e.push(d)}else for(o=0;o<s;o++)this._projectLatlngs(t[o],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,o,d,f,p;for(i=0,s=0,o=this._rings.length;i<o;i++)for(p=this._rings[i],n=0,d=p.length;n<d-1;n++)f=Pn(p[n],p[n+1],t,n,!0),f&&(e[s]=e[s]||[],e[s].push(f[0]),(f[1]!==p[n+1]||n===d-2)&&(e[s].push(f[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=wn(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,o,d,f,p=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,o=this._parts.length;i<o;i++)for(f=this._parts[i],n=0,d=f.length,s=d-1;n<d;s=n++)if(!(!e&&n===0)&&Tn(t,f[s],f[n])<=p)return!0;return!1}});function po(t,e){return new It(t,e)}It._flat=Ln;var re=It.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return bn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=It.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof Z&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){It.prototype._setLatLngs.call(this,t),_t(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return _t(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new A(e,e);if(t=new F(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,o;n<s;n++)o=yn(this._rings[n],t,!0),o.length&&this._parts.push(o)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,o,d,f,p,g;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,p=this._parts.length;o<p;o++)for(i=this._parts[o],d=0,g=i.length,f=g-1;d<g;f=d++)n=i[d],s=i[f],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||It.prototype._containsPoint.call(this,t,!0)}});function vo(t,e){return new re(t,e)}var Bt=At.extend({initialize:function(t,e){b(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=V(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var o=this.options;if(o.filter&&!o.filter(t))return this;var d=He(t,o);return d?(d.feature=Fe(t),d.defaultOptions=d.options,this.resetStyle(d),o.onEachFeature&&o.onEachFeature(t,d),this.addLayer(d)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=c({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function He(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],o=e&&e.pointToLayer,d=e&&e.coordsToLatLng||Ci,f,p,g,y;if(!n&&!i)return null;switch(i.type){case"Point":return f=d(n),Mn(o,t,f,e);case"MultiPoint":for(g=0,y=n.length;g<y;g++)f=d(n[g]),s.push(Mn(o,t,f,e));return new At(s);case"LineString":case"MultiLineString":return p=Ze(n,i.type==="LineString"?0:1,d),new It(p,e);case"Polygon":case"MultiPolygon":return p=Ze(n,i.type==="Polygon"?1:2,d),new re(p,e);case"GeometryCollection":for(g=0,y=i.geometries.length;g<y;g++){var M=He({geometry:i.geometries[g],type:"Feature",properties:t.properties},e);M&&s.push(M)}return new At(s);case"FeatureCollection":for(g=0,y=i.features.length;g<y;g++){var z=He(i.features[g],e);z&&s.push(z)}return new At(s);default:throw new Error("Invalid GeoJSON object.")}}function Mn(t,e,i,n){return t?t(e,i):new $e(i,n&&n.markersInheritOptions&&n)}function Ci(t){return new Z(t[1],t[0],t[2])}function Ze(t,e,i){for(var n=[],s=0,o=t.length,d;s<o;s++)d=e?Ze(t[s],e-1,i):(i||Ci)(t[s]),n.push(d);return n}function Mi(t,e){return t=$(t),t.alt!==void 0?[x(t.lng,e),x(t.lat,e),x(t.alt,e)]:[x(t.lng,e),x(t.lat,e)]}function De(t,e,i,n){for(var s=[],o=0,d=t.length;o<d;o++)s.push(e?De(t[o],_t(t[o])?0:e-1,i,n):Mi(t[o],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function le(t,e){return t.feature?c({},t.feature,{geometry:e}):Fe(e)}function Fe(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Ei={toGeoJSON:function(t){return le(this,{type:"Point",coordinates:Mi(this.getLatLng(),t)})}};$e.include(Ei),Si.include(Ei),Ne.include(Ei),It.include({toGeoJSON:function(t){var e=!_t(this._latlngs),i=De(this._latlngs,e?1:0,!1,t);return le(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),re.include({toGeoJSON:function(t){var e=!_t(this._latlngs),i=e&&!_t(this._latlngs[0]),n=De(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),le(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),oe.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),le(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var o=s.toGeoJSON(t);if(i)n.push(o.geometry);else{var d=Fe(o);d.type==="FeatureCollection"?n.push.apply(n,d.features):n.push(d)}}}),i?le(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function En(t,e){return new Bt(t,e)}var go=En,qe=wt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=j(e),b(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(B(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){q(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ne(this._image),this},bringToBack:function(){return this._map&&se(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=j(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:H("img");if(B(e,"leaflet-image-layer"),this._zoomAnimated&&B(e,"leaflet-zoom-animated"),this.options.className&&B(e,this.options.className),e.onselectstart=k,e.onmousemove=k,e.onload=m(this.fire,this,"load"),e.onerror=m(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Kt(this._image,i,e)},_reset:function(){var t=this._image,e=new F(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();K(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){gt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),_o=function(t,e,i){return new qe(t,e,i)},An=qe.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:H("video");if(B(e,"leaflet-image-layer"),this._zoomAnimated&&B(e,"leaflet-zoom-animated"),this.options.className&&B(e,this.options.className),e.onselectstart=k,e.onmousemove=k,e.onloadeddata=m(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}V(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var d=H("source");d.src=this._url[o],e.appendChild(d)}}});function yo(t,e,i){return new An(t,e,i)}var In=qe.extend({_initImage:function(){var t=this._image=this._url;B(t,"leaflet-image-layer"),this._zoomAnimated&&B(t,"leaflet-zoom-animated"),this.options.className&&B(t,this.options.className),t.onselectstart=k,t.onmousemove=k}});function bo(t,e,i){return new In(t,e,i)}var St=wt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof Z||V(t))?(this._latlng=$(t),b(this,e)):(b(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&gt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&gt(this._container,1),this.bringToFront(),this.options.interactive&&(B(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(gt(this._container,0),this._removeTimeout=setTimeout(m(q,void 0,this._container),200)):q(this._container),this.options.interactive&&(G(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=$(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ne(this._container),this},bringToBack:function(){return this._map&&se(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof At){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=E(this.options.offset),i=this._getAnchor();this._zoomAnimated?K(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});N.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),wt.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(b(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var We=St.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,St.prototype.openOn.call(this,t)},onAdd:function(t){St.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof qt||this._source.on("preclick",Jt))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof qt||this._source.off("preclick",Jt))},getEvents:function(){var t=St.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=H("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=H("div",t+"-content-wrapper",e);if(this._contentNode=H("div",t+"-content",i),we(e),yi(this._contentNode),I(e,"contextmenu",Jt),this._tipContainer=H("div",t+"-tip-container",e),this._tip=H("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=H("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',I(n,"click",function(s){tt(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",B(t,o)):G(t,o),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();K(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(ge(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new A(this._containerLeft,-i-this._containerBottom);s._add(Yt(this._container));var o=t.layerPointToContainerPoint(s),d=E(this.options.autoPanPadding),f=E(this.options.autoPanPaddingTopLeft||d),p=E(this.options.autoPanPaddingBottomRight||d),g=t.getSize(),y=0,M=0;o.x+n+p.x>g.x&&(y=o.x+n-g.x+p.x),o.x-y-f.x<0&&(y=o.x-f.x),o.y+i+p.y>g.y&&(M=o.y+i-g.y+p.y),o.y-M-f.y<0&&(M=o.y-f.y),(y||M)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([y,M]))}},_getAnchor:function(){return E(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),wo=function(t,e){return new We(t,e)};N.mergeOptions({closePopupOnClick:!0}),N.include({openPopup:function(t,e,i){return this._initOverlay(We,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),wt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(We,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof At||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Qt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof qt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Ve=St.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){St.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){St.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=St.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=H("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+_(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,o=n.latLngToContainerPoint(n.getCenter()),d=n.layerPointToContainerPoint(t),f=this.options.direction,p=s.offsetWidth,g=s.offsetHeight,y=E(this.options.offset),M=this._getAnchor();f==="top"?(e=p/2,i=g):f==="bottom"?(e=p/2,i=0):f==="center"?(e=p/2,i=g/2):f==="right"?(e=0,i=g/2):f==="left"?(e=p,i=g/2):d.x<o.x?(f="right",e=0,i=g/2):(f="left",e=p+(y.x+M.x)*2,i=g/2),t=t.subtract(E(e,i,!0)).add(y).add(M),G(s,"leaflet-tooltip-right"),G(s,"leaflet-tooltip-left"),G(s,"leaflet-tooltip-top"),G(s,"leaflet-tooltip-bottom"),B(s,"leaflet-tooltip-"+f),K(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&gt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return E(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),To=function(t,e){return new Ve(t,e)};N.include({openTooltip:function(t,e,i){return this._initOverlay(Ve,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),wt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ve,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof At||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(I(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),I(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var Bn=ae.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Ae(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=E(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function xo(t){return new Bn(t)}ae.Default=Pe;var Le=wt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:P.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){b(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),q(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ne(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(se(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=w(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof A?t:new A(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,o;n<s;n++)o=e[n].style.zIndex,e[n]!==this._container&&o&&(i=t(i,+o));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!P.ielt9){gt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var o=Math.min(1,(t-s.loaded)/200);gt(s.el,o),o<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(vt(this._fadeFrame),this._fadeFrame=ot(this._updateOpacity,this))}},_onOpaqueTile:k,_initContainer:function(){this._container||(this._container=H("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(q(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=H("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),k(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:k,_onRemoveLevel:k,_onCreateLevel:k,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)q(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),o=Math.floor(e/2),d=i-1,f=new A(+s,+o);f.z=+d;var p=this._tileCoordsToKey(f),g=this._tiles[p];return g&&g.active?(g.retain=!0,!0):(g&&g.loaded&&(g.retain=!0),d>n?this._retainParent(s,o,d,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var o=2*e;o<2*e+2;o++){var d=new A(s,o);d.z=i+1;var f=this._tileCoordsToKey(d),p=this._tiles[f];if(p&&p.active){p.retain=!0;continue}else p&&p.loaded&&(p.retain=!0);i+1<n&&this._retainChildren(s,o,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var o=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||o)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();P.any3d?Kt(t.el,s,n):K(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),o=e.getSize().divideBy(n*2);return new F(s.subtract(o),s.add(o))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),o=s.getCenter(),d=[],f=this.options.keepBuffer,p=new F(s.getBottomLeft().subtract([f,-f]),s.getTopRight().add([f,-f]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var g in this._tiles){var y=this._tiles[g].coords;(y.z!==this._tileZoom||!p.contains(new A(y.x,y.y)))&&(this._tiles[g].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var M=s.min.y;M<=s.max.y;M++)for(var z=s.min.x;z<=s.max.x;z++){var it=new A(z,M);if(it.z=this._tileZoom,!!this._isValidTile(it)){var Q=this._tiles[this._tileCoordsToKey(it)];Q?Q.current=!0:d.push(it)}}if(d.sort(function(lt,ce){return lt.distanceTo(o)-ce.distanceTo(o)}),d.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var yt=document.createDocumentFragment();for(z=0;z<d.length;z++)this._addTile(d[z],yt);this._level.el.appendChild(yt)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return j(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),o=e.unproject(n,t.z),d=e.unproject(s,t.z);return[o,d]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new rt(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new A(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(q(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){B(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=k,t.onmousemove=k,P.ielt9&&this.options.opacity<1&&gt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),m(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&ot(m(this._tileReady,this,t,null,s)),K(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(gt(i.el,0),vt(this._fadeFrame),this._fadeFrame=ot(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(B(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),P.ielt9||!this._map._fadeAnimated?ot(this._pruneTiles,this):setTimeout(m(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new A(this._wrapX?T(t.x,this._wrapX):t.x,this._wrapY?T(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new F(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Po(t){return new Le(t)}var de=Le.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=b(this,e),e.detectRetina&&P.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return I(i,"load",m(this._tileOnLoad,this,e,i)),I(i,"error",m(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:P.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return U(this._url,c(e,this.options))},_tileOnLoad:function(t,e){P.ielt9?setTimeout(m(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=k,e.onerror=k,!e.complete)){e.src=Ut;var i=this._tiles[t].coords;q(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Ut),Le.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Ut))return Le.prototype._tileReady.call(this,t,e,i)}});function zn(t,e){return new de(t,e)}var Rn=de.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=c({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=b(this,e);var s=e.detectRetina&&P.retina?2:1,o=this.getTileSize();i.width=o.x*s,i.height=o.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,de.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=at(i.project(e[0]),i.project(e[1])),s=n.min,o=n.max,d=(this._wmsVersion>=1.3&&this._crs===Sn?[s.y,s.x,o.y,o.x]:[s.x,s.y,o.x,o.y]).join(","),f=de.prototype.getTileUrl.call(this,t);return f+R(this.wmsParams,f,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+d},setParams:function(t,e){return c(this.wmsParams,t),e||this.redraw(),this}});function Lo(t,e){return new Rn(t,e)}de.WMS=Rn,zn.wms=Lo;var zt=wt.extend({options:{padding:.1},initialize:function(t){b(this,t),_(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),B(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),o=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));P.any3d?Kt(this._container,o,i):K(this._container,o)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new F(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),On=zt.extend({options:{tolerance:0},getEvents:function(){var t=zt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){zt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");I(t,"mousemove",this._onMouseMove,this),I(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),I(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){vt(this._redrawRequest),delete this._ctx,q(this._container),D(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){zt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=P.retina?2:1;K(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",P.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){zt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[_(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[_(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||ot(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new F,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,o,d=t._parts,f=d.length,p=this._ctx;if(f){for(p.beginPath(),i=0;i<f;i++){for(n=0,s=d[i].length;n<s;n++)o=d[i][n],p[n?"lineTo":"moveTo"](o.x,o.y);e&&p.closePath()}this._fillStroke(p,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(G(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(B(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(m(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function $n(t){return P.canvas?new On(t):null}var ke=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),ko={_initContainer:function(){this._container=H("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(zt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=ke("shape");B(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=ke("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[_(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;q(e),t.removeInteractiveTarget(e),delete this._layers[_(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=ke("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=V(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=ke("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){ne(t._container)},_bringToBack:function(t){se(t._container)}},Ge=P.vml?ke:Zi,Se=zt.extend({_initContainer:function(){this._container=Ge("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ge("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){q(this._container),D(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){zt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),K(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Ge("path");t.options.className&&B(e,t.options.className),t.options.interactive&&B(e,"leaflet-interactive"),this._updateStyle(t),this._layers[_(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){q(t._path),t.removeInteractiveTarget(t._path),delete this._layers[_(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,Di(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,o)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){ne(t._path)},_bringToBack:function(t){se(t._path)}});P.vml&&Se.include(ko);function Nn(t){return P.svg||P.vml?new Se(t):null}N.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&$n(t)||Nn(t)}});var Hn=re.extend({initialize:function(t,e){re.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=j(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function So(t,e){return new Hn(t,e)}Se.create=Ge,Se.pointsToPath=Di,Bt.geometryToLayer=He,Bt.coordsToLatLng=Ci,Bt.coordsToLatLngs=Ze,Bt.latLngToCoords=Mi,Bt.latLngsToCoords=De,Bt.getFeature=le,Bt.asFeature=Fe,N.mergeOptions({boxZoom:!0});var Zn=kt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){I(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){D(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){q(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),_e(),ui(),this._startPoint=this._map.mouseEventToContainerPoint(t),I(document,{contextmenu:Qt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=H("div","leaflet-zoom-box",this._container),B(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new F(this._point,this._startPoint),i=e.getSize();K(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(q(this._box),G(this._container,"leaflet-crosshair")),ye(),hi(),D(document,{contextmenu:Qt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(m(this._resetState,this),0);var e=new rt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});N.addInitHook("addHandler","boxZoom",Zn),N.mergeOptions({doubleClickZoom:!0});var Dn=kt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});N.addInitHook("addHandler","doubleClickZoom",Dn),N.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Fn=kt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Ft(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}B(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){G(this._map._container,"leaflet-grab"),G(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=j(this._map.options.maxBounds);this._offsetLimit=at(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,o=(n+e+i)%t-e-i,d=Math.abs(s+i)<Math.abs(o+i)?s:o;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=d},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),o=(this._lastTime-this._times[0])/1e3,d=i.easeLinearity,f=s.multiplyBy(d/o),p=f.distanceTo([0,0]),g=Math.min(i.inertiaMaxSpeed,p),y=f.multiplyBy(g/p),M=g/(i.inertiaDeceleration*d),z=y.multiplyBy(-M/2).round();!z.x&&!z.y?e.fire("moveend"):(z=e._limitOffset(z,e.options.maxBounds),ot(function(){e.panBy(z,{duration:M,easeLinearity:d,noMoveStart:!0,animate:!0})}))}}});N.addInitHook("addHandler","dragging",Fn),N.mergeOptions({keyboard:!0,keyboardPanDelta:80});var qn=kt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),I(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),D(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){I(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){D(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=E(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(E(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Qt(t)}}});N.addInitHook("addHandler","keyboard",qn),N.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Wn=kt.extend({addHooks:function(){I(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){D(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=mn(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(m(this._performZoom,this),n),Qt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,o=i?Math.ceil(s/i)*i:s,d=t._limitZoom(e+(this._delta>0?o:-o))-e;this._delta=0,this._startTime=null,d&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+d):t.setZoomAround(this._lastMousePos,e+d))}});N.addInitHook("addHandler","scrollWheelZoom",Wn);var Co=600;N.mergeOptions({tapHold:P.touchNative&&P.safari&&P.mobile,tapTolerance:15});var Vn=kt.extend({addHooks:function(){I(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){D(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new A(e.clientX,e.clientY),this._holdTimeout=setTimeout(m(function(){this._cancel(),this._isTapValid()&&(I(document,"touchend",tt),I(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Co),I(document,"touchend touchcancel contextmenu",this._cancel,this),I(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){D(document,"touchend",tt),D(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),D(document,"touchend touchcancel contextmenu",this._cancel,this),D(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new A(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});N.addInitHook("addHandler","tapHold",Vn),N.mergeOptions({touchZoom:P.touch,bounceAtZoomLimits:!0});var Gn=kt.extend({addHooks:function(){B(this._map._container,"leaflet-touch-zoom"),I(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){G(this._map._container,"leaflet-touch-zoom"),D(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),I(document,"touchmove",this._onTouchMove,this),I(document,"touchend touchcancel",this._onTouchEnd,this),tt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var o=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&o.x===0&&o.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),vt(this._animRequest);var d=m(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=ot(d,this,!0),tt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,vt(this._animRequest),D(document,"touchmove",this._onTouchMove,this),D(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});N.addInitHook("addHandler","touchZoom",Gn),N.BoxZoom=Zn,N.DoubleClickZoom=Dn,N.Drag=Fn,N.Keyboard=qn,N.ScrollWheelZoom=Wn,N.TapHold=Vn,N.TouchZoom=Gn,r.Bounds=F,r.Browser=P,r.CRS=Et,r.Canvas=On,r.Circle=Si,r.CircleMarker=Ne,r.Class=Mt,r.Control=bt,r.DivIcon=Bn,r.DivOverlay=St,r.DomEvent=Vs,r.DomUtil=qs,r.Draggable=Ft,r.Evented=fe,r.FeatureGroup=At,r.GeoJSON=Bt,r.GridLayer=Le,r.Handler=kt,r.Icon=ae,r.ImageOverlay=qe,r.LatLng=Z,r.LatLngBounds=rt,r.Layer=wt,r.LayerGroup=oe,r.LineUtil=so,r.Map=N,r.Marker=$e,r.Mixin=Qs,r.Path=qt,r.Point=A,r.PolyUtil=Xs,r.Polygon=re,r.Polyline=It,r.Popup=We,r.PosAnimation=pn,r.Projection=oo,r.Rectangle=Hn,r.Renderer=zt,r.SVG=Se,r.SVGOverlay=In,r.TileLayer=de,r.Tooltip=Ve,r.Transformation=Xe,r.Util=us,r.VideoOverlay=An,r.bind=m,r.bounds=at,r.canvas=$n,r.circle=mo,r.circleMarker=fo,r.control=Te,r.divIcon=xo,r.extend=c,r.featureGroup=co,r.geoJSON=En,r.geoJson=go,r.gridLayer=Po,r.icon=uo,r.imageOverlay=_o,r.latLng=$,r.latLngBounds=j,r.layerGroup=lo,r.map=Gs,r.marker=ho,r.point=E,r.polygon=vo,r.polyline=po,r.popup=wo,r.rectangle=So,r.setOptions=b,r.stamp=_,r.svg=Nn,r.svgOverlay=bo,r.tileLayer=zn,r.tooltip=To,r.transformation=me,r.version=h,r.videoOverlay=yo;var Mo=window.L;r.noConflict=function(){return window.L=Mo,this},window.L=r})})(Bi,Bi.exports);var Zo=Bi.exports;const Ct=Ho(Zo),Do="AquaGuardDB",Fo=2;let je=null;function Ht(){return je||(je=new Promise((a,l)=>{const r=indexedDB.open(Do,Fo);r.onupgradeneeded=h=>{const c=h.target.result;if(c.objectStoreNames.contains("users")||c.createObjectStore("users",{keyPath:"username"}),!c.objectStoreNames.contains("waterTests")){const u=c.createObjectStore("waterTests",{keyPath:"id",autoIncrement:!0});u.createIndex("ward","ward",{unique:!1}),u.createIndex("username","username",{unique:!1}),u.createIndex("timestamp","timestamp",{unique:!1})}if(!c.objectStoreNames.contains("fieldTesterRequests")){const u=c.createObjectStore("fieldTesterRequests",{keyPath:"id",autoIncrement:!0});u.createIndex("username","username",{unique:!1}),u.createIndex("ward","ward",{unique:!1})}c.objectStoreNames.contains("wardData")||c.createObjectStore("wardData",{keyPath:"wardId"}),c.objectStoreNames.contains("syncQueue")||c.createObjectStore("syncQueue",{keyPath:"id",autoIncrement:!0})},r.onsuccess=h=>{const c=h.target.result;try{const m=c.transaction("fieldTesterRequests","readwrite").objectStore("fieldTesterRequests"),v=m.count();v.onsuccess=()=>{v.result===0&&(m.put({id:"FT-001",user_id:101,username:"geetha_m",household_name:"Geetha Menon",phone:"+91 94471 22334",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"TC 14/820, Hillside Lane, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Pending Field Tester Response",requested_time:"Today, 4:00 PM",notes:"Slight muddy odor after morning rainfall",created_at:new Date(Date.now()-36e5).toISOString()}),m.put({id:"FT-002",user_id:102,username:"ramesh_n",household_name:"Ramesh Nair",phone:"+91 94472 55667",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"House 22B, Temple Road, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Accepted",requested_time:"Tomorrow, 10:00 AM",notes:"Well water looks brownish after heavy downpour",created_at:new Date(Date.now()-72e5).toISOString()}),m.put({id:"FT-003",user_id:103,username:"deepa_t",household_name:"Deepa Thomas",phone:"+91 94473 88990",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",address:"TC 19/410, Canal View, Ward 5",field_tester_id:1,field_tester_name:"Anil Kumar",status:"Verified",requested_time:"Yesterday, 2:00 PM",test_result:"High Coliform Count",verification_status:"Confirmed Contamination",observations:"Laboratory strip test confirmed coliform presence. Ward sanitary committee informed.",notes:"Verified coliform contamination; ward notified.",created_at:new Date(Date.now()-864e5).toISOString()}))}}catch{}a(c)},r.onerror=h=>{console.error("IndexedDB open error:",h.target.error),l(h.target.error)}}),je)}async function qo(a){const l=await Ht();return new Promise((r,h)=>{const m=l.transaction("users","readonly").objectStore("users").get(a);m.onsuccess=()=>r(m.result||null),m.onerror=()=>h(m.error)})}async function Vt(a){const l=await Ht();return new Promise((r,h)=>{const m=l.transaction("users","readwrite").objectStore("users").put(a);m.onsuccess=()=>r(m.result),m.onerror=()=>h(m.error)})}async function Wo(a){const l=await Ht();return new Promise((r,h)=>{const c=l.transaction(["waterTests","syncQueue"],"readwrite"),u=c.objectStore("waterTests"),m=c.objectStore("syncQueue"),v=u.add(a);v.onsuccess=_=>{const w=_.target.result;a.id=w,a.synced||m.add({type:"WATER_TEST",data:a,timestamp:Date.now()})},c.oncomplete=()=>r(a),c.onerror=()=>h(c.error)})}async function Qn(){const a=await Ht();return new Promise((l,r)=>{const u=a.transaction("waterTests","readonly").objectStore("waterTests").getAll();u.onsuccess=()=>l(u.result||[]),u.onerror=()=>r(u.error)})}async function Xn(a){return(await Qn()).filter(r=>r.username===a)}async function Vo(a){const l=await Ht();return new Promise((r,h)=>{const c=l.transaction(["fieldTesterRequests","syncQueue"],"readwrite"),u=c.objectStore("fieldTesterRequests"),m=c.objectStore("syncQueue"),v=u.put(a);v.onsuccess=_=>{a.id||(a.id=_.target.result),a.synced||m.add({type:"FIELD_REQUEST",data:a,timestamp:Date.now()})},c.oncomplete=()=>r(a),c.onerror=()=>h(c.error)})}async function ue(a){const l=await Ht();return new Promise((r,h)=>{const m=l.transaction("fieldTesterRequests","readwrite").objectStore("fieldTesterRequests").put(a);m.onsuccess=()=>r(a),m.onerror=()=>h(m.error)})}async function Ri(){const a=await Ht();return new Promise((l,r)=>{const u=a.transaction("fieldTesterRequests","readonly").objectStore("fieldTesterRequests").getAll();u.onsuccess=()=>l(u.result||[]),u.onerror=()=>r(u.error)})}async function Oi(a){return(await Ri()).find(r=>String(r.id)===String(a))||null}async function ts(a){return(await Ri()).filter(r=>r.username===a)}async function Go(a){return(await Ri()).filter(r=>!!(r.field_tester_id&&String(r.field_tester_id)===String(a)||r.field_tester_name&&(r.field_tester_name===a||a==="Anil Kumar")||a===1||a==="1"||a==="tester1"||a==="anil_tester"))}async function Uo(){const a=await Ht();return new Promise((l,r)=>{const u=a.transaction("syncQueue","readonly").objectStore("syncQueue").count();u.onsuccess=()=>l(u.result||0),u.onerror=()=>r(u.error)})}async function jo(){const a=await Ht();return new Promise((l,r)=>{const h=a.transaction(["syncQueue","waterTests","fieldTesterRequests"],"readwrite"),c=h.objectStore("syncQueue"),u=h.objectStore("waterTests"),m=h.objectStore("fieldTesterRequests"),v=c.getAll();v.onsuccess=()=>{(v.result||[]).forEach(w=>{var T,k;if(w.type==="WATER_TEST"&&((T=w.data)!=null&&T.id)){const x=u.get(w.data.id);x.onsuccess=()=>{if(x.result){const S=x.result;S.synced=!0,u.put(S)}}}else if(w.type==="FIELD_REQUEST"&&((k=w.data)!=null&&k.id)){const x=m.get(w.data.id);x.onsuccess=()=>{if(x.result){const S=x.result;S.synced=!0,m.put(S)}}}}),c.clear()},h.oncomplete=()=>l(!0),h.onerror=()=>r(h.error)})}const $t="aquaguard_active_session";typeof localStorage<"u"&&localStorage.removeItem("aquaguard_active_user");function $i(){try{const a=sessionStorage.getItem($t);return a?JSON.parse(a):null}catch{return null}}async function Ko(a,l){if(!a||!l)throw new Error("Please enter both username and password/PIN.");const r=a.trim().toLowerCase();if(navigator.onLine)try{const u=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,pin:String(l).trim()})});if(u.ok){const m=await u.json().catch(()=>({}));if(m&&m.user)return sessionStorage.setItem($t,JSON.stringify(m.user)),await Vt(m.user),m.user}else if(u.status===401){const m=await u.json().catch(()=>({}));throw new Error(m.error||"Incorrect password/PIN. Please try again.")}}catch(u){if(u.message&&(u.message.includes("PIN")||u.message.includes("password")||u.message.includes("Incorrect")))throw u;console.warn("Network auth unavailable, falling back to local demo storage:",u)}const h={tester1:{id:1,name:"Anil Kumar",username:"tester1",pin:"tester123",role:"field_tester",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening"},anil_tester:{id:1,name:"Anil Kumar",username:"anil_tester",pin:"1234",role:"field_tester",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening"},sreya_tester:{id:2,name:"Sreya P.",username:"sreya_tester",pin:"1234",role:"field_tester",ward:"Ward 2",panchayat:"Puzhakkal Panchayat",lat:10.5081,lng:76.205,specialty:"Spectrophotometric Turbidity, Coliform Test Strip"},rahul_tester:{id:3,name:"Rahul K.",username:"rahul_tester",pin:"1234",role:"field_tester",ward:"Ward 4",panchayat:"Puzhakkal Panchayat",lat:10.5972,lng:76.205,specialty:"Residual Chlorine & Microbial Assay, Chemical Contaminants"},noura123:{id:4,name:"Noura",username:"noura123",pin:"1234",role:"household",ward:"Ward 5",panchayat:"Puzhakkal Panchayat",lat:10.545,lng:76.205}};if(h[r]){if(h[r].pin===String(l).trim())return sessionStorage.setItem($t,JSON.stringify(h[r])),await Vt(h[r]),h[r];throw new Error("Incorrect password/PIN. Please try again.")}const c=await qo(r);if(!c)throw new Error("Account not found locally. Please register or check credentials.");if(String(c.pin).trim()!==String(l).trim())throw new Error("Incorrect password/PIN. Please try again.");return sessionStorage.setItem($t,JSON.stringify(c)),c}async function Yo({name:a,username:l,pin:r,ward:h,panchayat:c,lat:u,lng:m}){if(!a||!a.trim())throw new Error("Please enter your full name.");if(!l||!l.trim())throw new Error("Please enter a username.");if(!r||!r.trim())throw new Error("Please set a PIN or password.");if(!h)throw new Error("Please select your ward.");const v=l.trim().toLowerCase();if(navigator.onLine)try{const w=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.trim(),username:v,pin:String(r).trim(),role:"household",ward:h.trim(),panchayat:c?c.trim():"Puzhakkal Panchayat",lat:u||10.545,lng:m||76.205})}),T=await w.json();if(w.ok&&T.user)return sessionStorage.setItem($t,JSON.stringify(T.user)),await Vt(T.user),T.user;if(w.status===409)throw new Error(T.error)}catch(w){if(w.message&&w.message.includes("already taken"))throw w;console.warn("Network registration failed, saving locally:",w)}const _={id:Date.now(),username:v,name:a.trim(),pin:r.trim(),role:"household",ward:h.trim(),panchayat:c?c.trim():"Puzhakkal Panchayat",lat:u||10.545,lng:m||76.205,createdAt:new Date().toISOString()};return await Vt(_),sessionStorage.setItem($t,JSON.stringify(_)),_}async function Jo({name:a,phone:l,username:r,pin:h,tester_reg_no:c,test_types:u,ward:m,panchayat:v,area:_,lat:w,lng:T}){if(!a||!a.trim())throw new Error("Please enter your full name.");if(!r||!r.trim())throw new Error("Please enter a username.");if(!h||!h.trim())throw new Error("Please set a PIN or password.");const k=r.trim().toLowerCase();if(navigator.onLine)try{const S=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.trim(),phone:l?l.trim():"+91 98471 00000",username:k,pin:String(h).trim(),tester_reg_no:c?c.trim():`FT-REG-${Math.floor(1e3+Math.random()*9e3)}`,test_types:u||"Water Quality & Coliform Analysis",role:"field_tester",ward:m?m.trim():"Ward 5",panchayat:v?v.trim():"Puzhakkal Panchayat",area:_?_.trim():"Ward 5 Community Area",lat:w||10.548,lng:T||76.202})}),C=await S.json();if(S.ok&&C.user)return await Vt(C.user),{success:!0,message:C.message||"Account created successfully. Please log in.",user:C.user};if(S.status===409)throw new Error(C.error)}catch(S){if(S.message&&S.message.includes("already taken"))throw S;console.warn("Network registration failed, saving locally:",S)}const x={id:Date.now(),username:k,name:a.trim(),phone:l?l.trim():"+91 98471 00000",pin:h.trim(),tester_reg_no:c?c.trim():`FT-REG-${Math.floor(1e3+Math.random()*9e3)}`,test_types:u||"Water Quality & Coliform Analysis",role:"field_tester",ward:m?m.trim():"Ward 5",panchayat:v?v.trim():"Puzhakkal Panchayat",area:_?_.trim():"Ward 5 Community Area",specialty:u||"Water Quality & Coliform Analysis",available:1,lat:w||10.548,lng:T||76.202,createdAt:new Date().toISOString()};return await Vt(x),{success:!0,message:"Account created successfully. Please log in.",user:x}}async function Qo(a,l){const r=$i();if(navigator.onLine)try{const c=await fetch(`/api/testers/${a||r.id}/profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),u=await c.json();if(c.ok&&u.profile){const m={...r,...u.profile};return sessionStorage.setItem($t,JSON.stringify(m)),await Vt(m),m}}catch(c){console.warn("Network profile update failed:",c)}const h={...r,...l};return sessionStorage.setItem($t,JSON.stringify(h)),await Vt(h),h}function Je(){sessionStorage.removeItem($t),typeof localStorage<"u"&&localStorage.removeItem("aquaguard_active_user")}const st="Puzhakkal Panchayat",Wt=[{id:"Ward 1",name:"Ward 1 - Viyyoor North",panchayat:st,center:[10.5512,76.2155],rainfall:"Normal",rainfallMm:14,floodRisk:"Low",mosquitoRisk:"Low",responseStatus:"Normal",polygon:[[10.558,76.208],[10.559,76.222],[10.546,76.223],[10.544,76.21],[10.558,76.208]]},{id:"Ward 2",name:"Ward 2 - Puzhakkal Riverbanks",panchayat:st,center:[10.542,76.195],rainfall:"Heavy",rainfallMm:98,floodRisk:"High",mosquitoRisk:"High",responseStatus:"Monitoring Active",polygon:[[10.55,76.185],[10.552,76.205],[10.536,76.208],[10.533,76.188],[10.55,76.185]]},{id:"Ward 3",name:"Ward 3 - Amala Hills",panchayat:st,center:[10.562,76.178],rainfall:"Moderate",rainfallMm:42,floodRisk:"Low",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.57,76.168],[10.572,76.188],[10.555,76.19],[10.552,76.17],[10.57,76.168]]},{id:"Ward 4",name:"Ward 4 - Sobha City Environs",panchayat:st,center:[10.535,76.218],rainfall:"Moderate",rainfallMm:38,floodRisk:"Moderate",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.544,76.21],[10.545,76.228],[10.526,76.227],[10.525,76.211],[10.544,76.21]]},{id:"Ward 5",name:"Ward 5 - Central Market & Canal",panchayat:st,center:[10.545,76.205],rainfall:"Heavy",rainfallMm:112,floodRisk:"High",mosquitoRisk:"High",responseStatus:"Attention Required",polygon:[[10.552,76.198],[10.554,76.212],[10.538,76.214],[10.536,76.2],[10.552,76.198]]},{id:"Ward 6",name:"Ward 6 - Ayyanthole Border",panchayat:st,center:[10.528,76.198],rainfall:"Normal",rainfallMm:22,floodRisk:"Low",mosquitoRisk:"Medium",responseStatus:"Normal",polygon:[[10.536,76.19],[10.537,76.206],[10.52,76.208],[10.518,76.192],[10.536,76.19]]},{id:"Ward 7",name:"Ward 7 - Muthuvara Junction",panchayat:st,center:[10.558,76.195],rainfall:"Normal",rainfallMm:18,floodRisk:"Low",mosquitoRisk:"Low",responseStatus:"Normal",polygon:[[10.566,76.188],[10.567,76.204],[10.552,76.205],[10.55,76.189],[10.566,76.188]]}],Xo=[{id:"base-1",username:"resident_anon1",ward:"Ward 5",panchayat:st,testType:"H2S Strip Test",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-14*36e5).toISOString().split("T")[0],time:"09:30",notes:"Black precipitate formed on paper strip after 18 hours.",location:[10.547,76.203],fieldVerification:{status:"Verified",referenceCode:"REF-FT-8421",date:new Date(Date.now()-8*36e5).toISOString().split("T")[0],verifiedBy:"Field Officer S. Nair",notes:"Coliform confirmed with dual-wavelength portable photometer.",result:"Abnormal"},labVerification:{status:"Recommended",notes:"Formal biological culture confirmation advised."},synced:!0,timestamp:Date.now()-14*36e5},{id:"base-2",username:"resident_anon2",ward:"Ward 5",panchayat:st,testType:"Field Coliform Kit",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-6*36e5).toISOString().split("T")[0],time:"14:15",notes:"Well water sample turned yellow with gas bubbles in vial.",location:[10.543,76.208],fieldVerification:{status:"Verified",referenceCode:"REF-FT-8422",date:new Date(Date.now()-2*36e5).toISOString().split("T")[0],verifiedBy:"Field Officer M. Varma",notes:"Spectrophotometric turbidity check 12 NTU.",result:"Abnormal"},labVerification:{status:"Pending",notes:"Sample dispatched to District Water Authority Lab."},synced:!0,timestamp:Date.now()-6*36e5},{id:"base-3",username:"resident_anon3",ward:"Ward 5",panchayat:st,testType:"Turbidity / Visual Check",testMethod:"Individual Screening",result:"Abnormal",date:new Date(Date.now()-20*36e5).toISOString().split("T")[0],time:"11:20",notes:"High brownish sediment following canal overflow.",location:[10.549,76.207],fieldVerification:{status:"Pending",referenceCode:"REF-FT-8425",date:null,verifiedBy:null,notes:"Field test visit scheduled for tomorrow morning.",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-20*36e5},{id:"base-4",username:"resident_anon4",ward:"Ward 5",panchayat:st,testType:"Chlorine Residual Test",testMethod:"Individual Screening",result:"Normal",date:new Date(Date.now()-28*36e5).toISOString().split("T")[0],time:"08:00",notes:"Chlorine residual present at 0.4 mg/L.",location:[10.541,76.202],fieldVerification:{status:"Not Required",referenceCode:null,date:null,verifiedBy:null,notes:"",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-28*36e5},{id:"base-5",username:"resident_anon5",ward:"Ward 2",panchayat:st,testType:"Turbidity / Visual Check",testMethod:"Individual Screening",result:"Inconclusive",date:new Date(Date.now()-18*36e5).toISOString().split("T")[0],time:"16:45",notes:"Water is slightly turbid after river level rise.",location:[10.54,76.192],fieldVerification:{status:"Pending",referenceCode:"REF-FT-8430",date:null,verifiedBy:null,notes:"Field visit assigned to Riverbank Health Inspector.",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-18*36e5},{id:"base-6",username:"resident_anon6",ward:"Ward 1",panchayat:st,testType:"Chlorine Residual Test",testMethod:"Individual Screening",result:"Normal",date:new Date(Date.now()-22*36e5).toISOString().split("T")[0],time:"11:00",notes:"Adequate free residual chlorine observed (0.5 mg/L).",location:[10.553,76.218],fieldVerification:{status:"Not Required",referenceCode:null,date:null,verifiedBy:null,notes:"",result:null},labVerification:{status:"Not Required",notes:""},synced:!0,timestamp:Date.now()-22*36e5}],ta=[{name:"Puzhakkal River Flood Basin",polygon:[[10.553,76.182],[10.554,76.203],[10.535,76.206],[10.531,76.186]],severity:"High",description:"Active inundation risk along river catchment."},{name:"Ward 5 Lowland Drainage Zone",polygon:[[10.55,76.2],[10.551,76.21],[10.541,76.211],[10.54,76.201]],severity:"Moderate",description:"Surface runoff accumulation during heavy monsoon rain."}],ea=72*60*60*1e3,Yn=3;async function es(){let a=[];try{a=await Qn()}catch(l){console.warn("Error reading IndexedDB tests:",l)}return[...Xo,...a]}function Nt(a){if(!a)return!1;const l=String(a).toLowerCase();return l.includes("abnormal")||l.includes("positive")}async function is(a){const l=await es(),r=Date.now(),h=l.filter(v=>v.ward===a),c=h.filter(v=>{if(!Nt(v.result))return!1;const _=v.timestamp||(v.date?new Date(v.date).getTime():0);return r-_<=ea}),u=h.filter(v=>v.fieldVerification&&v.fieldVerification.status==="Verified");return{isPatternDetected:c.length>=Yn,preliminaryPositiveCount:c.length,fieldVerifiedCount:u.length,threshold:Yn,windowHours:72,alertTitle:"Possible Water-Quality Pattern",alertMessage:"Possible water-quality pattern detected based on multiple abnormal reports. Professional field verification is recommended.",recentPreliminaryPositives:c,fieldVerifiedPositives:u}}function ns(a){return Wt.find(r=>r.id===a)||{id:a,name:a,panchayat:"Puzhakkal Panchayat",rainfall:"Normal",rainfallMm:20,floodRisk:"Low",responseStatus:"Normal",center:[10.545,76.205]}}async function ss(a){const l=ns(a),r=await is(a),h=[];return r.isPatternDetected&&h.push({id:"alert-contamination",type:"contamination",severity:"hazard",badge:"Pattern Detected",title:r.alertTitle,message:r.alertMessage,details:`${r.preliminaryPositiveCount} preliminary abnormal reports recorded (${r.fieldVerifiedCount} professionally verified) in ${l.id}.`,alternateSolutions:[{id:"sol-boil",title:"Vigorous Rolling Boil Disinfection",tag:"Emergency Gold Standard",icon:"🔥",timeRequired:"10–15 mins",cost:"Household stove / Free",effectiveness:"Kills 99.99% of bacterial coliforms, E. coli, enteric viruses, and microbial cysts.",bestFor:"All immediate drinking water, cooking, and infant formula.",steps:["Filter raw water through clean micro-mesh or folded cotton cloth to remove suspended particulate matter.","Heat water to a continuous, vigorous rolling boil and maintain boiling for at least 1 to 3 minutes.","Allow water to cool naturally in a sterilized, covered stainless steel or glass container with a dedicated tap/ladle."]},{id:"sol-chlorine",title:"Point-of-Use Chlorination / Halazone Treatment",tag:"Large Storage & Overhead Tanks",icon:"💧",timeRequired:"30 mins contact time",cost:"Minimal (Available at PHC / Panchayat)",effectiveness:"Provides lasting residual antimicrobial protection against bacterial regrowth for up to 48 hours.",bestFor:"Overhead storage tanks, 20L water cans, and well reservoirs.",steps:["Add 1 standard chlorine / Halazone tablet (0.5g) or 4 drops of 0.5% sodium hypochlorite per 20 Litres of clear water.","Stir thoroughly and let stand covered in shade for at least 30 minutes before first consumption.","A faint chlorine scent confirms active residual disinfection against secondary bacterial contamination."]},{id:"sol-kiosk",title:"Ward 5 Community Safe Water Kiosk",tag:"Free Municipal RO/UV Supply",icon:"🏢",timeRequired:"Available 7:00 AM – 7:00 PM",cost:"Free Public Service",effectiveness:"Certified multi-stage reverse osmosis + ultraviolet sterilized municipal safe water.",bestFor:"Households with persistent well discoloration, turbidity, or foul odor.",steps:["Visit the Panchayat Clean Water Distribution Kiosk at Ward 5 Civic Centre (0.8 km).","Bring clean food-grade containers for daily 25L household allocation.","Water quality is verified twice daily with automated digital TDS and microbiological monitoring."]},{id:"sol-tester",title:"Request Certified Field Tester Verification",tag:"Professional On-Site Test",icon:"🧪",timeRequired:"Scheduled Visit",cost:"Subsidized",action:"book_tester",effectiveness:"Official on-site photometer turbidity analysis and verified coliform strip assay for ward response.",bestFor:"Residents requiring official verification to trigger municipal sanitization.",steps:["Schedule a certified nearby Field Tester (e.g. Anil Kumar, 2.3 km away) to visit your residence.","Tester performs on-site photometer turbidity & chemical screening with rapid microbial vial incubation.","Verification results are officially submitted to ward health records and local response committees."]}]}),l.rainfall==="Heavy"&&h.push({id:"alert-rainfall",type:"rainfall",severity:"warning",badge:"Heavy Rainfall",title:"Heavy Rainfall Alert",message:"Heavy rainfall has been detected in your ward. Local water sources may be affected. Consider checking your drinking water.",details:`Observed precipitation: ${l.rainfallMm}mm in the last 24 hours.`,alternateSolutions:[{id:"sol-wellhead",title:"Wellhead Elevation & Sandbag Bunding",tag:"Surface Runoff Protection",icon:"🧱",timeRequired:"30 mins",cost:"Low / Household effort",effectiveness:"Blocks 95% of agricultural and stormwater surface runoff from draining into well shafts.",bestFor:"Low-lying ring wells and wells near roadside storm drains.",steps:["Stack a double-tier sandbag ring (min 0.5m height) tightly around the well parapet rim.","Dig a 15cm shallow diversion trench around the apron to redirect stormwater away from wellhead.","Ensure the well opening is covered with a watertight lid or waterproof tarpaulin."]},{id:"sol-firstflush",title:"Rainwater Harvesting First-Flush Diversion",tag:"Roof Runoff Protection",icon:"🌧️",timeRequired:"10–15 mins",cost:"Zero",effectiveness:"Prevents atmospheric soot, bird droppings, and roof grit from fouling clean storage cisterns.",bestFor:"Households utilizing rooftop rainwater harvesting.",steps:["Open the first-flush bypass drain for the first 15–20 minutes of intense rainfall.","Allow initial dirty wash to drain out before switching water flow to main storage tank.","Engage secondary gravel-sand filter and add 1 potassium permanganate crystal for preventive biological inhibition."]},{id:"sol-tanker",title:"Emergency Potable Water Tanker Helpline",tag:"Municipal Emergency Cell",icon:"🚛",timeRequired:"Dispatched within 2–4 hours",cost:"Free Municipal Assistance",effectiveness:"Guaranteed safe drinking water delivered directly during storm events.",bestFor:"Households whose domestic wells have turned murky or flooded.",steps:["Contact the Puzhakkal Disaster Management Water Desk at toll-free 1800-425-9283.","Provide your Ward (Ward 5) and landmark for urgent water bowser routing.","Emergency bowsers will deliver 50L drinking water per family directly."]}]}),l.floodRisk==="High"&&h.push({id:"alert-flood",type:"flood",severity:"warning",badge:"Flood Warning",title:"Flood Risk Alert",message:"Your location is within or near a potentially affected area. Follow local safety guidance and consider checking your drinking water.",details:`River and canal levels elevated in ${l.name}.`,alternateSolutions:[{id:"sol-shock",title:"Well Shock Chlorination (Post-Inundation Protocol)",tag:"Disinfection Protocol",icon:"🧴",timeRequired:"Overnight (12 hours)",cost:"₹50 Bleaching powder",effectiveness:"Sterilizes floodwater contaminants, coliform bacteria, and soil microbes in well shaft.",bestFor:"Wells submerged or surrounded by floodwaters.",steps:["Pump out murky standing water once external flood levels recede below the apron.","Prepare a slurry of 50g fresh bleaching powder (33% active chlorine) per 1000 Litres of well volume.","Pour slurry around the interior walls, agitate water vigorously, and let stand for 12 hours before pumping out."]},{id:"sol-relief-water",title:"PHC Emergency Potable Water Cans",tag:"Immediate Relief",icon:"🚰",timeRequired:"Instant pickup",cost:"Free Relief Supply",effectiveness:"Sealed food-grade potable drinking supply distributed by health volunteers.",bestFor:"Residents whose household water sources are currently inundated.",steps:["Visit the Ward Flood Relief Camp at Government UP School.","Collect 10L sealed potable water cans and chlorine purification sachets.","Report any gastrointestinal illness immediately to the on-site Medical Officer."]}]}),(l.rainfall==="Heavy"||l.floodRisk==="High")&&h.push({id:"alert-mosquito",type:"mosquito",severity:"warning",badge:"Vector Risk",title:"Stagnant Water & Mosquito Breeding Hazard",message:"Recent rain and pooled surface water elevate mosquito breeding risks. Take preventative source reduction measures.",details:`Stagnant water pockets detected across low-lying zones in ${l.name}.`,alternateSolutions:[{id:"sol-dryday",title:'Weekly "Dry Day" Source Elimination',tag:"Community Source Reduction",icon:"🧹",timeRequired:"20 mins every Sunday",cost:"Zero",effectiveness:"Disrupts Aedes aegypti mosquito breeding cycle; prevents dengue and chikungunya outbreak.",bestFor:"All household yards, terraces, and open storage compounds.",steps:["Inspect outdoor flowerpot trays, air cooler bases, coconut shells, and tarpaulin folds.","Empty standing water, scrub container inner walls to dislodge mosquito eggs, and invert containers.","Ensure rooftop drains and sunshades flow freely without water pooling."]},{id:"sol-mesh",title:"Mosquito Mesh Screening on Wells & Vents",tag:"Physical Barrier",icon:"🕸️",timeRequired:"One-time setup",cost:"Low (Nylon mesh ₹80)",effectiveness:"Completely blocks adult mosquitoes from accessing dark humid well shafts for egg laying.",bestFor:"Open domestic ring wells and overhead rainwater tank vent pipes.",steps:["Cover the open mouth of domestic wells with durable 40-mesh nylon or stainless steel screening.","Ensure screening is anchored snugly with weighted cord around the concrete parapet.","Inspect and cover overflow pipes of overhead tanks with fine mesh."]},{id:"sol-guppy",title:"Biological Larvicide & Guppy Fish Deployment",tag:"Biological Control",icon:"🐟",timeRequired:"Single release",cost:"Free from PHC",effectiveness:"Larvivorous fish consume up to 100 mosquito larvae per day in standing water.",bestFor:"Ornamental garden pools, farm ponds, and agricultural open wells.",steps:["Collect Gambusia or Poecilia reticulata (Guppy) fingerlings from the Primary Health Centre.","Introduce 5–10 fingerlings into unsealed water storage bodies or farm ponds.","Avoid applying chemical bleach or pesticides in water bodies containing bio-control fish."]}]}),h.length===0&&h.push({id:"alert-preventive",type:"preventive",severity:"info",badge:"Preventive Safety",title:"Standard Water Safety & Treatment Alternatives",message:"Conditions in your ward are currently stable. Maintain baseline disinfection and monitoring protocols.",details:`Baseline surveillance active in ${l.name}. No critical environmental hazards detected.`,alternateSolutions:[{id:"sol-routine-boil",title:"Routine Household Boiling",tag:"Daily Best Practice",icon:"🔥",timeRequired:"10 mins",cost:"Domestic stove",effectiveness:"Provides complete baseline microbial safety against seasonal waterborne bacteria.",bestFor:"Routine daily drinking and infant care.",steps:["Bring daily drinking water to a full rolling boil for 1 minute.","Store in clean, non-corrosive vessels with secure lids.","Clean water storage jugs daily with hot water."]},{id:"sol-gravity-filter",title:"Ceramic Gravity Candle Filtration",tag:"Point-of-Use Physical Filter",icon:"🏺",timeRequired:"Continuous passive filtration",cost:"One-time filter purchase",effectiveness:"0.2-micron ceramic micro-pores remove 99% of particulate sediment, protozoa, and cysts.",bestFor:"Everyday household tap and well water clarity.",steps:["Pour well or tap water into the upper chamber of a dual-chamber stainless steel gravity filter.","Scrub ceramic filter candles weekly with a soft brush under clean running water (no soap).","Pair with light chlorination or boiling for comprehensive bacterial barrier."]},{id:"sol-periodic-test",title:"Monthly Self Water Quality Screening",tag:"Household Vigilance",icon:"🧪",timeRequired:"5 mins",cost:"Free test strips",action:"self_test",effectiveness:"Detects sudden changes in pH, turbidity, or microbial contamination before health risks emerge.",bestFor:"Monthly routine monitoring of domestic wells.",steps:['Use the AquaGuard "Test Water" tool to log monthly baseline readings.',"Check clarity, odor, and color changes after seasonal rains.","Request certified Field Tester if any anomaly is observed."]}]}),{ward:l,contamination:r,alerts:h}}async function os(a){const r=(await es()).filter(T=>T.ward===a),h=ns(a),c=await is(a),u=r.length,m=r.filter(T=>Nt(T.result)).length,v=r.filter(T=>T.fieldVerification&&T.fieldVerification.status==="Verified").length;let _="Normal";c.isPatternDetected?_="Attention Required":(h.rainfall==="Heavy"||h.floodRisk==="High")&&(_="Monitoring Active");const w=r.sort((T,k)=>(k.timestamp||0)-(T.timestamp||0)).slice(0,8).map(T=>{const k=Nt(T.result),x=T.fieldVerification&&T.fieldVerification.status==="Verified";let S="";return x?S=`Field-verified report logged in ${T.ward} (${T.testType}) - Ref ${T.fieldVerification.referenceCode||"Verified"}.`:k?S=`Preliminary abnormal water screening logged in ${T.ward} (${T.testType}).`:S=`Preliminary normal water screening recorded in ${T.ward} (${T.testType}).`,{id:T.id,text:S,isPositive:k,isVerified:x,result:T.result,date:T.date,time:T.time}});return{wardId:a,wardName:h.name,panchayat:h.panchayat,totalReports:u,preliminaryPositiveReports:m,fieldVerifiedReports:v,rainfallDetected:h.rainfall==="Heavy"?"Heavy rainfall detected":`${h.rainfall} rainfall`,rainfallMm:h.rainfallMm,floodRisk:h.floodRisk,contaminationPattern:c.isPatternDetected?"Detected":"None detected",isContaminatedPattern:c.isPatternDetected,responseStatus:_,feed:w}}let J="home",W="dashboard",et="household",te="login",Tt="",mt=!navigator.onLine,ct="optionA",dt=null,Rt=10,Ke=null,Ot={household:!0,wards:!0,preliminary:!0,verified:!0,hazard:!0,clusters:!0},ft={waterTests:!0,fieldVerified:!0,rainfall:!0,floodHazard:!0,community:!0};function ia(){const a=new Date().getHours();return a<12?"Good morning":a<17?"Good afternoon":"Good evening"}document.addEventListener("DOMContentLoaded",()=>{na(),nt()});function na(){window.addEventListener("online",async()=>{mt=!1,zi(),await as(),xt()}),window.addEventListener("offline",()=>{mt=!0,zi(),xt()})}function sa(){mt=!mt,zi(),mt||as(),xt()}async function as(){try{const a=await Uo();a>0&&(await jo(),ut(`Synchronized ${a} locally stored records.`))}catch(a){console.warn("Sync error:",a)}}function nt(){const a=document.getElementById("app");if(!a)return;const l=$i();if(!l){a.innerHTML=oa(),aa();return}l.role==="field_tester"?ra(a,l):ha(a,l)}function zi(){const a=document.getElementById("statusBadge"),l=document.getElementById("btnToggleOffline");a&&(a.className=`status-pill ${mt?"offline":"online"}`,a.innerHTML=`
      <span class="status-dot"></span>
      <span>${mt?"Offline":"Online – Sync Available"}</span>
    `),l&&(l.textContent=mt?"Go Online":"Simulate Offline")}function oa(){return te==="register"?`
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
              <input type="text" class="form-control" id="regPanchayat" value="${st}" required />
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
                    <input type="text" class="form-control" id="regTesterPanchayat" value="${st}" style="font-size: 0.8rem; padding: 6px 8px;" />
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
  `}function aa(){var h,c,u,m,v,_,w,T,k;(h=document.getElementById("tileRoleHousehold"))==null||h.addEventListener("click",()=>{et="household",Tt="",nt()}),(c=document.getElementById("tileRoleTester"))==null||c.addEventListener("click",()=>{et="field_tester",Tt="",nt()}),(u=document.getElementById("btnGoToRegister"))==null||u.addEventListener("click",()=>{te="register",Tt="",nt()}),(m=document.getElementById("btnGoToTesterRegister"))==null||m.addEventListener("click",()=>{te="register_tester",Tt="",nt()}),(v=document.getElementById("btnGoToLogin"))==null||v.addEventListener("click",()=>{te="login",Tt="",nt()}),(_=document.getElementById("btnGoToLoginFromTesterReg"))==null||_.addEventListener("click",()=>{te="login",et="field_tester",Tt="",nt()}),(w=document.getElementById("btnAutofillTester"))==null||w.addEventListener("click",()=>{const x=document.getElementById("loginUsername"),S=document.getElementById("loginPin");x&&S&&(x.value="tester1",S.value="tester123")}),(T=document.getElementById("btnTesterUseGeo"))==null||T.addEventListener("click",()=>{const x=document.getElementById("testerGeoStatus"),S=document.getElementById("regTesterLat"),C=document.getElementById("regTesterLng"),b=document.getElementById("regTesterArea");if(!navigator.geolocation){alert("Geolocation is not supported by your browser.");return}x&&(x.innerHTML="⏳ Acquiring GPS location..."),navigator.geolocation.getCurrentPosition(R=>{const O=R.coords.latitude,U=R.coords.longitude;S&&(S.value=O.toFixed(4)),C&&(C.value=U.toFixed(4)),x&&(x.innerHTML=`✓ GPS Locked: ${O.toFixed(4)}, ${U.toFixed(4)}`),b&&(!b.value||b.value.includes("Default"))&&(b.value="Ward 5 / Puzhakkal Sector"),ut("Acquired current GPS coordinates.")},R=>{S&&(S.value="10.548"),C&&(C.value="76.202"),x&&(x.innerHTML="📍 Using local service coordinates (Puzhakkal)"),ut("Could not acquire GPS, using approximate local coordinates.")},{timeout:8e3})}),(k=document.getElementById("btnTesterManualLoc"))==null||k.addEventListener("click",()=>{const x=document.getElementById("regTesterArea"),S=document.getElementById("testerGeoStatus");x&&x.focus(),S&&(S.innerHTML="✏️ Manual Entry Mode: adjust Ward, Area, and Coordinates")});const a=document.getElementById("formLogin");a==null||a.addEventListener("submit",async x=>{x.preventDefault();const S=document.getElementById("loginUsername").value,C=document.getElementById("loginPin").value,b=document.getElementById("authErrorMsg");try{await Ko(S,C),J="home",W="dashboard",Tt="",nt()}catch(R){b&&(b.innerHTML=`<div class="notice-box notice-offline">${R.message}</div>`)}});const l=document.getElementById("formRegister");l==null||l.addEventListener("submit",async x=>{x.preventDefault();const S=document.getElementById("regName").value,C=document.getElementById("regUsername").value,b=document.getElementById("regPin").value,R=document.getElementById("regWard").value,O=document.getElementById("regPanchayat").value,U=document.getElementById("authErrorMsg"),V=Wt.find(pt=>pt.id===R);try{await Yo({name:S,username:C,pin:b,ward:R,panchayat:O,lat:V?V.center[0]:10.545,lng:V?V.center[1]:76.205}),J="home",Tt="",nt()}catch(pt){U&&(U.innerHTML=`<div class="notice-box notice-offline">${pt.message}</div>`)}});const r=document.getElementById("formRegisterTester");r==null||r.addEventListener("submit",async x=>{x.preventDefault();const S=document.getElementById("regTesterName").value,C=document.getElementById("regTesterPhone").value,b=document.getElementById("regTesterUsername").value,R=document.getElementById("regTesterPin").value,O=document.getElementById("regTesterRegNo").value,U=document.getElementById("regTesterWard").value,V=document.getElementById("regTesterPanchayat").value,pt=document.getElementById("regTesterArea").value,Ut=parseFloat(document.getElementById("regTesterLat").value)||10.548,he=parseFloat(document.getElementById("regTesterLng").value)||76.202,jt=document.getElementById("authErrorMsg"),Ce=document.querySelectorAll('input[name="testerTestTypes"]:checked'),ee=Array.from(Ce).map(Zt=>Zt.value).join(", ");if(!ee){jt&&(jt.innerHTML='<div class="notice-box notice-offline">Please select at least one test type you can perform.</div>');return}try{const Zt=await Jo({name:S,phone:C,username:b,pin:R,tester_reg_no:O,test_types:ee,ward:U,panchayat:V,area:pt,lat:Ut,lng:he});te="login",et="field_tester",Tt=Zt.message||"Account created successfully. Please log in.",nt()}catch(Zt){jt&&(jt.innerHTML=`<div class="notice-box notice-offline">${Zt.message}</div>`)}})}function ra(a,l){var r;a.innerHTML=`
    <header class="app-header">
      <div style="display: flex; align-items: center; gap: 20px;">
        <div class="brand-badge" id="btnHeaderTester" style="cursor: pointer;">
          <div class="brand-icon" style="background: var(--primary);">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
  `,(r=document.getElementById("btnTesterLogoutHeader"))==null||r.addEventListener("click",()=>{Je(),et="field_tester",nt()}),document.querySelectorAll(".bottom-nav .nav-item, .desktop-nav .nav-link").forEach(h=>{h.addEventListener("click",c=>{W=c.currentTarget.getAttribute("data-ttab"),document.querySelectorAll(".bottom-nav .nav-item").forEach(u=>{u.classList.toggle("active",u.getAttribute("data-ttab")===W)}),document.querySelectorAll(".desktop-nav .nav-link").forEach(u=>{u.classList.toggle("active",u.getAttribute("data-ttab")===W)}),Gt(l)})}),Gt(l)}async function Gt(a){const l=document.getElementById("mainContent");if(!l)return;let r=[],h={new_requests:1,accepted:1,completed:1,pending_results:0};try{const u=await fetch(`/api/requests?role=field_tester&user_id=${a.id||1}`);if(u.ok)r=(await u.json()).requests||[];else throw new Error("API not available")}catch{r=await Go(a.id||a.name)}try{const u=await fetch(`/api/testers/stats/${a.id||1}`);if(u.ok)h=await u.json();else throw new Error("API stats not available")}catch{const m=r.filter(w=>w.status==="Pending"||w.status==="Pending Field Tester Response"||w.status==="Time Change Suggested").length,v=r.filter(w=>w.status==="Accepted"||w.status==="Test In Progress").length,_=r.filter(w=>w.status==="Test Completed"||w.status==="Verified").length;h={new_requests:m,accepted:v,completed:_,pending_results:r.filter(w=>w.status==="Test In Progress").length}}let c=r;if(W==="new"?c=r.filter(u=>u.status==="Pending"||u.status==="Pending Field Tester Response"||u.status==="Time Change Suggested"):W==="accepted"?c=r.filter(u=>u.status==="Accepted"||u.status==="Test In Progress"):W==="completed"&&(c=r.filter(u=>u.status==="Test Completed"||u.status==="Verified")),W==="profile"){ls(l,a);return}l.innerHTML=`
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
        <span class="badge badge-info">${c.length} Showing</span>
      </div>

      <div id="testerRequestsList">
        ${c.length>0?c.map(u=>la(u)).join(""):'<div style="text-align: center; padding: 24px; color: var(--text-muted);">No requests matching this view.</div>'}
      </div>
    </div>
  `,da(a,r)}function la(a){const l=a.status==="Pending",r=a.status==="Accepted",h=a.status==="Test In Progress",c=a.status==="Test Completed"||a.status==="Verified";return`
    <div class="request-card">
      <div class="request-header">
        <span class="request-id">Request ${a.id}</span>
        <span class="badge ${c?"badge-safe":r?"badge-info":h||l?"badge-warn":"badge-danger"}">${a.status}</span>
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
  `}function da(a,l){document.querySelectorAll(".tester-nav-tab").forEach(r=>{r.addEventListener("click",h=>{W=h.currentTarget.getAttribute("data-tab"),Gt(a)})}),document.querySelectorAll(".btn-view-request").forEach(r=>{r.addEventListener("click",h=>{const c=h.currentTarget.getAttribute("data-id"),u=l.find(m=>m.id===c)||{id:c,household_name:"Noura",ward:"Ward 5",location_desc:"Ward 5",test_type:"Water Quality Test",requested_date:"Today",requested_time:"4:00 PM",notes:"Possible abnormal home-test result.",status:"Pending"};ca(u,a)})}),document.querySelectorAll(".btn-start-test-action").forEach(r=>{r.addEventListener("click",async h=>{const c=h.currentTarget.getAttribute("data-id"),u=h.currentTarget.getAttribute("data-hname"),m=h.currentTarget.getAttribute("data-ward"),v=h.currentTarget.getAttribute("data-test");try{await fetch(`/api/requests/${c}/start_test`,{method:"POST"})}catch{}const _=await Oi(c);_&&(_.status="Test In Progress",await ue(_)),rs({reqId:c,hname:u,ward:m,test:v,user:a})})})}function ca(a,l){var h,c,u,m,v;const r=document.getElementById("modalHost");r&&(r.innerHTML=`
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
  `,(h=document.getElementById("btnModalCloseView"))==null||h.addEventListener("click",()=>{r.innerHTML=""}),(c=document.getElementById("btnModalAcceptReq"))==null||c.addEventListener("click",async()=>{try{await fetch(`/api/requests/${a.id}/accept`,{method:"POST"})}catch{}a.status="Accepted",await ue(a),r.innerHTML="",ut(`Request ${a.id} Accepted! Status is now Accepted.`),Gt(l)}),(u=document.getElementById("btnModalRejectReq"))==null||u.addEventListener("click",async()=>{try{await fetch(`/api/requests/${a.id}/reject`,{method:"POST"})}catch{}a.status="Rejected",await ue(a),r.innerHTML="",ut(`Request ${a.id} Rejected.`),Gt(l)}),(m=document.getElementById("btnModalSuggestTime"))==null||m.addEventListener("click",()=>{ua(a,l)}),(v=document.getElementById("btnModalStartTestFromModal"))==null||v.addEventListener("click",()=>{r.innerHTML="",rs({reqId:a.id,hname:a.household_name,ward:a.ward,test:a.test_type,user:l})}))}function ua(a,l){var h,c;const r=document.getElementById("modalHost");r&&(r.innerHTML=`
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
  `,(h=document.getElementById("btnCancelTimeModal"))==null||h.addEventListener("click",()=>{r.innerHTML=""}),(c=document.getElementById("formSuggestTime"))==null||c.addEventListener("submit",async u=>{u.preventDefault();const m=document.getElementById("suggDate").value,v=document.getElementById("suggTime").value;try{await fetch(`/api/requests/${a.id}/suggest_time`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({suggested_date:m,suggested_time:v})})}catch{}a.status="Time Change Suggested",a.suggested_date=m,a.suggested_time=v,await ue(a),r.innerHTML="",ut(`Suggested new time (${v}) sent to ${a.household_name}.`),Gt(l)}))}function rs({reqId:a,hname:l,ward:r,test:h,user:c}){var m,v;const u=document.getElementById("modalHost");u&&(u.innerHTML=`
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
  `,(m=document.getElementById("btnCancelResultModal"))==null||m.addEventListener("click",()=>{u.innerHTML=""}),(v=document.getElementById("formSubmitFieldResult"))==null||v.addEventListener("submit",async _=>{_.preventDefault();const w=document.getElementById("resSelect").value,T=document.getElementById("ftObservations").value;document.getElementById("ftAdditionalNotes").value;try{await fetch(`/api/requests/${a}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({result:w,test_type:h,observations:T||"Field inspection confirmed abnormal coliform readings.",lab_status:w==="Abnormal"?"Recommended":"Not Required"})})}catch{}const k=await Oi(a);k&&(k.status="Test Completed",k.test_result=w,k.observations=T||"Field inspection completed.",k.lab_status=w==="Abnormal"?"Recommended":"Not Required",await ue(k)),u.innerHTML="",ut("Field test result submitted successfully. Status: Test Completed."),Gt(c)}))}function ls(a,l){var r,h,c;a.innerHTML=`
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
  `,(r=document.getElementById("btnUpdateTesterGeo"))==null||r.addEventListener("click",()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(u=>{const m=document.getElementById("editTesterLat"),v=document.getElementById("editTesterLng");m&&(m.value=u.coords.latitude.toFixed(4)),v&&(v.value=u.coords.longitude.toFixed(4)),ut("Updated location to current GPS coordinates.")},()=>{ut("Could not acquire GPS position.")})}),(h=document.getElementById("formTesterProfile"))==null||h.addEventListener("submit",async u=>{u.preventDefault();const m=document.getElementById("editTesterName").value,v=document.getElementById("editTesterPhone").value,_=document.getElementById("editTesterTypes").value,w=document.getElementById("editTesterArea").value,T=document.getElementById("editTesterWard").value,k=parseInt(document.getElementById("editTesterAvail").value,10),x=parseFloat(document.getElementById("editTesterLat").value)||l.lat,S=parseFloat(document.getElementById("editTesterLng").value)||l.lng;try{const C=await Qo(l.id,{name:m,phone:v,test_types:_,area:w,ward:T,available:k,lat:x,lng:S});ut("Profile updated successfully!"),ls(a,C)}catch{ut("Failed to update profile")}}),(c=document.getElementById("btnLogoutTesterBtn"))==null||c.addEventListener("click",()=>{Je(),et="household",nt()})}function ha(a,l){a.innerHTML=`
    <header class="app-header">
      <div style="display: flex; align-items: center; gap: 20px;">
        <div class="brand-badge" id="btnHeaderHome" style="cursor: pointer;">
          <div class="brand-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
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
  `,fa(),xt()}function fa(){var a,l,r,h;(a=document.getElementById("btnToggleOffline"))==null||a.addEventListener("click",sa),(l=document.getElementById("btnHeaderHome"))==null||l.addEventListener("click",()=>X("home")),(r=document.getElementById("btnHeaderProfile"))==null||r.addEventListener("click",()=>X("profile")),(h=document.getElementById("btnHeaderLogout"))==null||h.addEventListener("click",()=>{Je(),et="household",nt()}),document.querySelectorAll(".bottom-nav .nav-item, .desktop-nav .nav-link").forEach(c=>{c.addEventListener("click",u=>{const m=u.currentTarget.getAttribute("data-tab");m&&X(m)})})}function X(a){J=a,document.querySelectorAll(".bottom-nav .nav-item").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tab")===a)}),document.querySelectorAll(".desktop-nav .nav-link").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-tab")===a)}),xt()}async function xt(){const a=$i();if(!a){nt();return}if(a.role==="field_tester"){Gt(a);return}const l=document.getElementById("mainContent");if(l)switch(J){case"home":await Jn(l,a);break;case"test":await ma(l,a);break;case"mytests":await ba(l,a);break;case"myrequests":await ds(l,a);break;case"community":await wa(l,a);break;case"map":await Ta(l,a);break;case"alerts":await ka(l,a);break;case"profile":await Ca(l,a);break;default:await Jn(l,a)}}async function Jn(a,l){var w,T,k,x,S;const{ward:r}=await ss(l.ward);let h=[];try{if(navigator.onLine&&(l.id||l.username)){const C=l.id?`user_id=${l.id}`:`username=${encodeURIComponent(l.username)}`,b=await fetch(`/api/tests?${C}`);if(b.ok){const R=await b.json();R.tests&&(h=R.tests)}}}catch{}if(h.length===0)try{h=await Xn(l.username)}catch{}const c=h.length>0?h[0]:null;let u=null;try{if(l.id||l.username){const C=l.id?`user_id=${l.id}`:`username=${encodeURIComponent(l.username)}`,b=await fetch(`/api/requests?role=household&${C}`);if(b.ok){const R=await b.json();R.requests&&R.requests.length>0&&(u=R.requests[0])}}}catch{}if(!u&&l.username)try{const C=await ts(l.username);C&&C.length>0&&(u=C[C.length-1])}catch{}const m=os(l.ward||"Ward 5");let v={total_tests:m.totalReports||18,participating_households:Math.max(1,Math.round((m.totalReports||18)*.7)),tests_this_week:Math.round((m.totalReports||18)*.5),preliminary_abnormal_reports:m.preliminaryPositiveReports||0,field_verified_reports:m.fieldVerifiedReports||0,pattern_detected:m.isContaminatedPattern||!1,rainfall:r.rainfall||"Normal",flood_risk:r.floodRisk||"Low",rainfall_mm:r.rainfallMm||14};try{const C=await fetch(`/api/community/${encodeURIComponent(l.ward||"Ward 5")}`);C.ok&&(v=await C.json())}catch{}a.innerHTML=`
    <!-- Top Welcome Section -->
    <div class="welcome-section">
      <div class="welcome-text">
        <h1 class="welcome-title">${ia()}, ${l.name}</h1>
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
          ${c?`<span class="badge ${Nt(c.result)?"badge-danger":"badge-safe"}">${c.result}</span>`:'<span class="badge badge-info">Not Screened</span>'}
        </div>
        <div class="info-card-body">
          ${c?`
            <div style="font-weight: 600; color: var(--text-main); margin-bottom: 2px;">
              ${c.testType||c.test_type||"Water Quality Test"}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
              Tested on ${c.date||c.date_time} • Source: ${c.source||"Household Tap"}
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
            Community: <strong>${l.ward||"Ward 5"}</strong> • Rainfall: <strong>${v.rainfall} (${v.rainfall_mm}mm)</strong> • Flooding Risk: <strong>${v.flood_risk}</strong>
          </div>
          <div class="community-stats-grid">
            <div class="comm-stat-cell">
              <div class="comm-stat-value">${v.participating_households}</div>
              <div class="comm-stat-label">Participating Households</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value">${v.tests_this_week}</div>
              <div class="comm-stat-label">Tests This Week</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value" style="color: ${v.preliminary_abnormal_reports>0?"var(--danger)":"var(--primary)"};">
                ${v.preliminary_abnormal_reports}
              </div>
              <div class="comm-stat-label">Preliminary Abnormal</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value" style="color: var(--success);">${v.field_verified_reports}</div>
              <div class="comm-stat-label">Field-Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,(w=document.getElementById("btnHomeTestWater"))==null||w.addEventListener("click",()=>{ct="optionA",dt=null,X("test")}),(T=document.getElementById("btnFindFieldTester"))==null||T.addEventListener("click",()=>{ct="optionB",dt=null,X("test")}),(k=document.getElementById("btnGoToMyTests"))==null||k.addEventListener("click",()=>X("mytests")),(x=document.getElementById("btnGoToMyRequests"))==null||x.addEventListener("click",()=>X("myrequests")),(S=document.getElementById("btnGoToCommunityView"))==null||S.addEventListener("click",()=>X("community")),[{id:"chkHomeLyrTests",key:"waterTests"},{id:"chkHomeLyrVerified",key:"fieldVerified"},{id:"chkHomeLyrRainfall",key:"rainfall"},{id:"chkHomeLyrHazard",key:"floodHazard"},{id:"chkHomeLyrCommunity",key:"community"}].forEach(({id:C,key:b})=>{const R=document.getElementById(C);R==null||R.addEventListener("change",O=>{var U;ft[b]=O.target.checked,(U=R.closest(".layer-chip"))==null||U.classList.toggle("active",O.target.checked),Ye("homeMapContainer",l,ft)})}),await Ye("homeMapContainer",l,ft)}async function ma(a,l){const r=new Date().toISOString().split("T")[0],h=new Date().toTimeString().split(" ")[0].substring(0,5);a.innerHTML=`
    <!-- Stepper Lifecycle -->
    <div class="workflow-stepper">
      <div class="workflow-step ${ct==="optionA"?"active":"completed"}">
        <div class="workflow-dot">1</div>
        <span>Home Test</span>
      </div>
      <div class="workflow-line ${ct==="optionB"?"active":""}"></div>
      <div class="workflow-step ${ct==="optionB"?"active":""}">
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
      <div class="option-select-card ${ct==="optionA"?"active":""}" id="btnSelectOptionA">
        <span class="option-badge">Option A</span>
        <h4 class="option-title">Individual / Home Test</h4>
        <p class="option-desc">Quick Home Screening with an approved test kit.</p>
      </div>

      <div class="option-select-card ${ct==="optionB"?"active":""}" id="btnSelectOptionB">
        <span class="option-badge" style="background: rgba(20, 184, 166, 0.2); color: var(--accent-teal);">Option B</span>
        <h4 class="option-title">Book Field Tester</h4>
        <p class="option-desc">Find nearby certified testers for professional verification.</p>
      </div>
    </div>

    <div id="testNoticeContainer"></div>

    ${ct==="optionA"?pa(r,h):dt?ga(dt,l,r):await va(l)}
  `,_a(l)}function pa(a,l){return`
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
  `}async function va(a){let l=[];try{const r=Rt==="all"?"all=true":`radius=${Rt}`,h=await fetch(`/api/testers/nearby?lat=${a.lat||10.545}&lng=${a.lng||76.205}&${r}`);if(h.ok)l=(await h.json()).testers||[];else throw new Error("API not ok")}catch{const h=a.lat||10.545,c=a.lng||76.205;l=[{id:1,name:"Anil Kumar",lat:10.5657,lng:76.205,specialty:"Water Quality & Coliform Analysis, Turbidity & pH Screening",test_types:"Water Quality & Coliform Analysis, Turbidity & pH Screening",area:"Ward 5 / Puzhakkal North",available:!0,ward:"Ward 5",tester_reg_no:"FT-REG-1042"},{id:2,name:"Sreya P.",lat:10.5081,lng:76.205,specialty:"Spectrophotometric Turbidity, Coliform Test Strip",test_types:"Spectrophotometric Turbidity, Coliform Test Strip",area:"Ward 2 / Riverside Sector",available:!0,ward:"Ward 2",tester_reg_no:"FT-REG-2088"},{id:3,name:"Rahul K.",lat:10.5972,lng:76.205,specialty:"Residual Chlorine & Microbial Assay, Chemical Contaminants",test_types:"Residual Chlorine & Microbial Assay, Chemical Contaminants",area:"Ward 4 / Hilltop Sector",available:!0,ward:"Ward 4",tester_reg_no:"FT-REG-3190"}].map(m=>{const v=(m.lat-h)*Math.PI/180,_=(m.lng-c)*Math.PI/180,w=Math.sin(v/2)**2+Math.cos(h*Math.PI/180)*Math.cos(m.lat*Math.PI/180)*Math.sin(_/2)**2,T=Math.round(6371*2*Math.atan2(Math.sqrt(w),Math.sqrt(1-w))*10)/10;return{...m,distance_km:T}}),Rt!=="all"&&(l=l.filter(m=>m.distance_km<=Number(Rt))),l.sort((m,v)=>m.distance_km-v.distance_km)}return`
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
  `}function ga(a,l,r){return`
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
  `}function _a(a){var h,c,u;(h=document.getElementById("btnSelectOptionA"))==null||h.addEventListener("click",()=>{ct="optionA",dt=null,xt()}),(c=document.getElementById("btnSelectOptionB"))==null||c.addEventListener("click",()=>{ct="optionB",xt()}),document.querySelectorAll(".btn-set-radius").forEach(m=>{m.addEventListener("click",v=>{const _=v.currentTarget.getAttribute("data-radius");Rt=_==="all"?"all":parseInt(_,10),xt()})}),document.querySelectorAll(".btn-select-tester").forEach(m=>{m.addEventListener("click",v=>{const _=v.currentTarget.getAttribute("data-id"),w=v.currentTarget.getAttribute("data-name"),T=v.currentTarget.getAttribute("data-distance"),k=v.currentTarget.getAttribute("data-ward"),x=v.currentTarget.getAttribute("data-area");dt={id:_,name:w,distance_km:T,ward:k,area:x},xt()})}),(u=document.getElementById("btnBackToTesters"))==null||u.addEventListener("click",()=>{dt=null,xt()});const l=document.getElementById("formIndividualTest");l==null||l.addEventListener("submit",async m=>{var S;m.preventDefault();const v=document.getElementById("testType").value,_=((S=document.querySelector('input[name="testResult"]:checked'))==null?void 0:S.value)||"Abnormal / Possible Concern",w=document.getElementById("testDate").value,T=document.getElementById("testTime").value,k=document.getElementById("testNotes").value,x={user_id:a.id,username:a.username,ward:a.ward,panchayat:a.panchayat,test_type:v,source:"home",result:_,date:w,time:T,date_time:`${w} ${T}`,notes:k.trim(),lat:a.lat||10.545,lng:a.lng||76.205,verification_status:Nt(_)?"Pending":"Not Required",lab_status:"Not Required",timestamp:Date.now()};if(navigator.onLine)try{await fetch("/api/tests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})}catch{}await Wo(x),Ii(_==="Normal"?{isAbnormal:!1,title:"Screening Complete",message:"No abnormal indication was recorded in this preliminary screening.",onContinue:()=>X("home")}:_==="Inconclusive"?{isAbnormal:!1,title:"Screening Inconclusive",message:"Test was inconclusive. Re-testing or scheduling professional field verification is recommended.",onContinue:()=>X("home")}:{isAbnormal:!0,title:"Possible Water-Quality Concern",message:"Possible water-quality concern detected. Professional field verification is recommended.",onBook:()=>{ct="optionB",dt=null,xt()},onContinue:()=>X("home")})});const r=document.getElementById("formSendFieldRequest");r==null||r.addEventListener("submit",async m=>{var C;m.preventDefault();const v=document.getElementById("reqTestType").value,_=document.getElementById("reqDate").value,w=document.getElementById("reqTime").value,T=document.getElementById("reqNotes").value,k={user_id:a.id,household_user_id:a.id,username:a.username,household_name:a.name,phone:a.phone||"+91 98470 11111",address:`${a.name}'s Residence, ${a.ward}`,field_tester_id:dt.id,field_tester_name:dt.name,ward:a.ward,location_desc:`${a.name}'s saved location (${a.ward})`,lat:a.lat||10.545,lng:a.lng||76.205,test_type:v,requested_date:_,requested_time:w,notes:T.trim()};let x=null;try{const b=await fetch("/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});b.ok&&(x=(await b.json()).request)}catch{}x||(x={id:`REQ-${Math.floor(1e3+Math.random()*9e3)}`,...k,status:"Pending Field Tester Response",created_at:new Date().toISOString()}),await Vo(x);const S=document.getElementById("testNoticeContainer");S&&(S.innerHTML=`
        <div class="notice-box notice-success" style="flex-direction: column; align-items: flex-start;">
          <div style="font-weight: 800; font-size: 1.05rem; color: #34d399; margin-bottom: 4px;">
            Request Sent
          </div>
          <div style="font-size: 0.9rem; line-height: 1.6; color: #fff;">
            Your request has been sent to <strong>${x.field_tester_name}</strong>.<br/>
            Request ID: <b>${x.id}</b><br/>
            Status: <span class="badge badge-warn">Pending Field Tester Response</span>
          </div>
          <button class="btn btn-sm btn-primary" id="btnGoToRequestsNow" style="margin-top: 10px; width: auto;">
            View My Requests →
          </button>
        </div>
      `,(C=document.getElementById("btnGoToRequestsNow"))==null||C.addEventListener("click",()=>X("myrequests"))),dt=null})}function Ii({isAbnormal:a,title:l,message:r,onBook:h,onContinue:c}){var m,v;const u=document.getElementById("modalHost");u&&(u.innerHTML=`
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
          ${a&&h?'<button class="btn btn-primary" id="btnModalBook">Book Field Tester</button>':""}
          <button class="btn btn-secondary" id="btnModalContinue">
            ${a?"Continue Without Booking":"Return to Dashboard"}
          </button>
        </div>
      </div>
    </div>
  `,(m=document.getElementById("btnModalBook"))==null||m.addEventListener("click",()=>{u.innerHTML="",h&&h()}),(v=document.getElementById("btnModalContinue"))==null||v.addEventListener("click",()=>{u.innerHTML="",c&&c()}))}async function ds(a,l){var h;let r=[];try{const c=await fetch(`/api/requests?role=household&user_id=${l.id||4}`);if(c.ok)r=(await c.json()).requests||[];else throw new Error("API not available")}catch{r=await ts(l.username)}a.innerHTML=`
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
        ${r.length>0?r.map(c=>ya(c)).join(""):'<div style="font-size: 0.85rem; color: var(--text-dim); padding: 14px;">No requests submitted yet.</div>'}
      </div>
    </div>
  `,(h=document.getElementById("btnBookAnotherTesterReq"))==null||h.addEventListener("click",()=>{ct="optionB",dt=null,X("test")}),document.querySelectorAll(".btn-accept-new-time").forEach(c=>{c.addEventListener("click",async u=>{const m=u.currentTarget.getAttribute("data-id");try{await fetch(`/api/requests/${m}/accept_time`,{method:"POST"})}catch{}const v=await Oi(m);v&&(v.status="Accepted",v.suggested_time&&(v.requested_time=`${v.suggested_date||"Updated"} ${v.suggested_time}`),await ue(v)),ut("Accepted new appointment time!"),ds(a,l)})})}function ya(a){const l=a.status==="Time Change Suggested",r=a.status==="Accepted"||a.status==="Test In Progress",h=a.status==="Test Completed"||a.status==="Verified",c=a.status==="Rejected";return`
    <div class="my-test-card" style="border-color: ${h?"var(--primary-border)":r?"var(--primary)":l?"var(--warning)":c?"var(--danger)":"var(--border-color)"};">
      <div class="my-test-top">
        <div>
          <strong style="color: var(--text-main); font-size: 1rem;">${a.id}</strong>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 1px;">
            Field Tester: <strong style="color: var(--text-main);">${a.field_tester_name}</strong>
          </div>
        </div>
        <span class="badge ${h?"badge-safe":r?"badge-info":l?"badge-warn":c?"badge-danger":"badge-warn"}">${a.status}</span>
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
  `}async function ba(a,l){var h;let r=[];try{r=(await(await fetch(`/api/tests?username=${l.username}`)).json()).tests||[]}catch{r=await Xn(l.username)}a.innerHTML=`
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
        ${r.length>0?r.map(c=>`
          <div class="my-test-card">
            <div class="my-test-top">
              <div>
                <strong style="color: var(--text-main);">${c.test_type||c.testType||"Water Quality Test"}</strong>
                <div style="font-size: 0.78rem; color: var(--text-muted);">
                  Type: <b>${c.source==="field"?"Field Verification":"Home Screening"}</b>
                  ${c.tester_name?`• Tester: <b>${c.tester_name}</b>`:""}
                </div>
              </div>
              <span class="badge ${Nt(c.result)?"badge-danger":c.result==="Normal"?"badge-safe":"badge-warn"}">${c.result}</span>
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
  `,(h=document.getElementById("btnAddNewTestMy"))==null||h.addEventListener("click",()=>X("test"))}async function wa(a,l){var c,u;let r={ward:l.ward||"Ward 5",has_data:!1,total_tests:0,participating_households:0,tests_this_week:0,preliminary_abnormal_reports:0,field_verified_reports:0,pattern_detected:!1,pattern_description:"No abnormal water-quality pattern detected.",rainfall:"Normal",rainfall_mm:14,flood_risk:"Low",response_status:"Normal"};try{const m=await fetch(`/api/community/${encodeURIComponent(l.ward||"Ward 5")}`);m.ok&&(r=await m.json())}catch{const v=await os(l.ward);r.total_tests=v.totalReports,r.preliminary_abnormal_reports=v.preliminaryPositiveReports,r.field_verified_reports=v.fieldVerifiedReports,r.has_data=v.totalReports>0}let h=[];try{h=(await dbGetAllWaterTests()).filter(_=>_.ward===l.ward).slice(-6).reverse().map(_=>({text:_.verification_status==="Verified"?`Field-verified report logged in ${_.ward} (${_.test_type||_.testType||"Water Test"}).`:Nt(_.result)?`Preliminary abnormal water screening logged in ${_.ward} (${_.test_type||_.testType||"Home Test"}).`:`Preliminary normal water screening recorded in ${_.ward} (${_.test_type||_.testType||"Home Test"}).`,date:_.date_time||_.date||"Recent",isVerified:_.verification_status==="Verified",isPositive:Nt(_.result)}))}catch{}a.innerHTML=`
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
  `,(c=document.getElementById("btnCommTestWater"))==null||c.addEventListener("click",()=>X("test")),(u=document.getElementById("btnCommEmptyStartTest"))==null||u.addEventListener("click",()=>X("test"))}async function Ye(a,l,r){if(Ke){try{Ke.remove()}catch{}Ke=null}if(!document.getElementById(a))return;const c=Wt.find(b=>b.id===l.ward)||Wt[4],u=l.lat||c.center[0],m=l.lng||c.center[1],v=Ct.map(a,{zoomControl:!0,attributionControl:!1}).setView([u,m],14);if(Ke=v,Ct.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{maxZoom:19,subdomains:"abcd",crossOrigin:!0}).addTo(v),(r.community??r.wards)&&Wt.forEach(b=>{const R=b.id===l.ward;Ct.polygon(b.polygon,{color:R?"#0f766e":"#94a3b8",weight:R?2.5:1.2,fillColor:R?"#0f766e":"#cbd5e1",fillOpacity:R?.08:.04}).addTo(v).bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
          <strong style="color: #0f766e;">Registered Community Boundary</strong><br/>
          Community: <b>${b.name}</b><br/>
          Environmental Rainfall: <b>${b.rainfall} (${b.rainfallMm}mm)</b><br/>
          Flooding / Waterlogging: <b>${b.floodRisk}</b>
        </div>
      `)}),(r.floodHazard??r.hazard)&&ta.forEach(b=>{Ct.polygon(b.polygon,{color:"#d97706",weight:1.5,fillColor:"#f59e0b",fillOpacity:.2}).addTo(v).bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
          <strong style="color: #d97706;">Environmental Hazard Indicator</strong><br/>
          Flooding / Waterlogging Affected Zone<br/>
          <small style="color: #64748b;">Observed surface water accumulation area following rainfall.</small>
        </div>
      `)}),(r.rainfall??(r.hazard&&c.rainfall==="Heavy"))&&c.rainfall==="Heavy"&&Ct.circle(c.center,{radius:650,color:"#0284c7",fillColor:"#0284c7",fillOpacity:.12,weight:1.5,dashArray:"4, 4"}).addTo(v).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
        <strong style="color: #0284c7;">Rainfall Advisory Zone</strong><br/>
        Observed Rainfall: <b>Heavy (${c.rainfallMm}mm)</b><br/>
        <small style="color: #64748b;">High runoff conditions may increase microbial contamination risk in shallow wells.</small>
      </div>
    `),r.clusters&&(l.ward==="Ward 5"||c.id==="Ward 5")&&Ct.circle(c.center,{radius:460,color:"#ef4444",fillColor:"#ef4444",fillOpacity:.18,weight:1.5,dashArray:"3, 3"}).addTo(v).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
        <strong style="color: #dc2626;">Spatial Pattern Indicator</strong><br/>
        Multiple abnormal reports detected in this locality.<br/>
        <small style="color: #64748b;">Preliminary indicator; field verification recommended.</small>
      </div>
    `),r.waterTests??r.preliminary)try{(await dbGetAllWaterTests()).filter(O=>O.ward===l.ward).forEach(O=>{const U=Nt(O.result),V=O.lat||u+(Math.random()-.5)*.006,pt=O.lng||m+(Math.random()-.5)*.006;Ct.circleMarker([V,pt],{radius:6,color:U?"#dc2626":"#16a34a",fillColor:U?"#ef4444":"#22c55e",fillOpacity:.85,weight:1.5}).addTo(v).bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
            <strong style="color: ${U?"#dc2626":"#16a34a"};">Water-Test Screening</strong><br/>
            Test Type: <b>${O.test_type||O.testType||"Home Screening"}</b><br/>
            Source: <b>${O.source||"Household Tap"}</b><br/>
            Result: <b style="color: ${U?"#dc2626":"#16a34a"};">${O.result}</b><br/>
            Date: ${O.date_time||O.date||"Recent"}
          </div>
        `)})}catch{}if(r.fieldVerified??r.verified)try{(await dbGetAllWaterTests()).filter(O=>O.ward===l.ward&&(O.verification_status==="Verified"||O.fieldVerification&&O.fieldVerification.status==="Verified")).forEach(O=>{const U=O.lat||u+(Math.random()-.5)*.005,V=O.lng||m+(Math.random()-.5)*.005;Ct.circleMarker([U,V],{radius:7,color:"#0f766e",fillColor:"#14b8a6",fillOpacity:.95,weight:2}).addTo(v).bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
            <strong style="color: #0f766e;">Authorized Field Verification</strong><br/>
            Tester: <b>${O.tester_name||"Certified Field Tester"}</b><br/>
            Result: <b>${O.result||"Verified Safe"}</b><br/>
            Status: <b style="color: #0f766e;">Field Verified</b>
          </div>
        `)})}catch{}if((r.household??!0)&&l.role!=="field_tester"){const b=Ct.divIcon({className:"marker-household",html:`
        <div style="width: 32px; height: 32px; background: #0f766e; border: 2.5px solid #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(15, 118, 110, 0.4);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </div>
      `,iconSize:[32,32],iconAnchor:[16,16]});Ct.marker([u,m],{icon:b}).addTo(v).bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
        <strong style="color: #0f766e;">Your Registered Household</strong><br/>
        User: <b>${l.name}</b><br/>
        Location: ${l.ward||"Ward 5"} | ${l.panchayat||"Ernakulam Central"}
      </div>
    `)}}async function Ta(a,l){a.innerHTML=`
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
  `,xa(l),await Ye("mapContainer",l,Ot)}function xa(a){[{id:"chkLyrHousehold",key:"household"},{id:"chkLyrWards",key:"wards"},{id:"chkLyrPrelim",key:"preliminary"},{id:"chkLyrVerified",key:"verified"},{id:"chkLyrHazard",key:"hazard"},{id:"chkLyrClusters",key:"clusters"}].forEach(({id:r,key:h})=>{var c;(c=document.getElementById(r))==null||c.addEventListener("change",u=>{Ot[h]=u.target.checked,Ye("mapContainer",a,Ot)})})}function cs(a){try{return JSON.parse(localStorage.getItem(`applied_solutions_${a||"default"}`)||"[]")}catch{return[]}}function Pa(a,l){const r=cs(a),h=r.indexOf(l);return h>-1?r.splice(h,1):r.push(l),localStorage.setItem(`applied_solutions_${a||"default"}`,JSON.stringify(r)),r.includes(l)}function La(a,l){const r=a.alternateSolutions||[],h=cs(l.username);return`
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
            ${r.map(c=>{const u=h.includes(c.id);return`
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
                    ${(c.steps||[]).map(m=>`<li>${m}</li>`).join("")}
                  </ol>

                  ${c.effectiveness?`
                    <div class="solution-effectiveness">
                      🛡️ <strong>Effectiveness:</strong> ${c.effectiveness}
                    </div>
                  `:""}

                  <div class="solution-footer">
                    <button class="btn-solution-applied ${u?"active-applied":""}" data-solid="${c.id}">
                      ${u?"✓ Applied by Household":"Mark as Applied"}
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
  `}async function ka(a,l){const{alerts:r}=await ss(l.ward);r.reduce((h,c)=>{var u;return h+(((u=c.alternateSolutions)==null?void 0:u.length)||0)},0),a.innerHTML=`
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


      ${r.length>0?r.map(h=>La(h,l)).join(""):'<div style="font-size: 0.9rem; color: var(--text-muted); padding: 10px 4px;">No active environmental hazard advisories for your area.</div>'}
    </div>
  `,Sa(a,l)}function Sa(a,l){a.querySelectorAll(".btn-solution-applied").forEach(r=>{r.addEventListener("click",h=>{const c=h.currentTarget.getAttribute("data-solid");Pa(l.username,c)?(h.currentTarget.classList.add("active-applied"),h.currentTarget.textContent="✓ Applied by Household",ut("Solution marked as applied by your household!")):(h.currentTarget.classList.remove("active-applied"),h.currentTarget.textContent="Mark as Applied",ut("Removed solution from applied list."))})}),a.querySelectorAll(".btn-sol-book-tester").forEach(r=>{r.addEventListener("click",()=>{ct="optionB",dt=null,X("test")})}),a.querySelectorAll(".btn-sol-self-test").forEach(r=>{r.addEventListener("click",()=>{ct="optionA",dt=null,X("test")})})}async function Ca(a,l){var r;a.innerHTML=`
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
  `,(r=document.getElementById("btnLogoutHouseholdBtn"))==null||r.addEventListener("click",()=>{Je(),et="household",nt()})}function ut(a){const l=document.getElementById("appToast");l&&l.remove();const r=document.createElement("div");r.id="appToast",r.style.cssText=`
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
