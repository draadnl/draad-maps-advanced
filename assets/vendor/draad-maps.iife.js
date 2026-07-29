var DraadMaps=(function(Ge){"use strict";function La(i,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}function Ca(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ta(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var n=function s(){var a=!1;try{a=this instanceof s}catch{}return a?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(i).forEach(function(s){var a=Object.getOwnPropertyDescriptor(i,s);Object.defineProperty(n,s,a.get?a:{enumerable:!0,get:function(){return i[s]}})}),n}var Re={exports:{}};var za=Re.exports,dr;function ur(){return dr||(dr=1,(function(i,e){(function(n,s){s(e)})(za,(function(n){var s="1.9.4";function a(t){var r,o,d,f;for(o=1,d=arguments.length;o<d;o++){f=arguments[o];for(r in f)t[r]=f[r]}return t}var l=Object.create||(function(){function t(){}return function(r){return t.prototype=r,new t}})();function h(t,r){var o=Array.prototype.slice;if(t.bind)return t.bind.apply(t,o.call(arguments,1));var d=o.call(arguments,2);return function(){return t.apply(r,d.length?d.concat(o.call(arguments)):arguments)}}var c=0;function u(t){return"_leaflet_id"in t||(t._leaflet_id=++c),t._leaflet_id}function m(t,r,o){var d,f,p,b;return b=function(){d=!1,f&&(p.apply(o,f),f=!1)},p=function(){d?f=arguments:(t.apply(o,arguments),setTimeout(b,r),d=!0)},p}function v(t,r,o){var d=r[1],f=r[0],p=d-f;return t===d&&o?t:((t-f)%p+p)%p+f}function _(){return!1}function g(t,r){if(r===!1)return t;var o=Math.pow(10,r===void 0?6:r);return Math.round(t*o)/o}function w(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function x(t){return w(t).split(/\s+/)}function S(t,r){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?l(t.options):{});for(var o in r)t.options[o]=r[o];return t.options}function P(t,r,o){var d=[];for(var f in t)d.push(encodeURIComponent(o?f.toUpperCase():f)+"="+encodeURIComponent(t[f]));return(!r||r.indexOf("?")===-1?"?":"&")+d.join("&")}var C=/\{ *([\w_ -]+) *\}/g;function E(t,r){return t.replace(C,function(o,d){var f=r[d];if(f===void 0)throw new Error("No value provided for variable "+o);return typeof f=="function"&&(f=f(r)),f})}var z=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function R(t,r){for(var o=0;o<t.length;o++)if(t[o]===r)return o;return-1}var j="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function F(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var J=0;function ot(t){var r=+new Date,o=Math.max(0,16-(r-J));return J=r+o,window.setTimeout(t,o)}var et=window.requestAnimationFrame||F("RequestAnimationFrame")||ot,St=window.cancelAnimationFrame||F("CancelAnimationFrame")||F("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Q(t,r,o){if(o&&et===ot)t.call(r);else return et.call(window,h(t,r))}function ht(t){t&&St.call(window,t)}var ie={__proto__:null,extend:a,create:l,bind:h,get lastId(){return c},stamp:u,throttle:m,wrapNum:v,falseFn:_,formatNum:g,trim:w,splitWords:x,setOptions:S,getParamString:P,template:E,isArray:z,indexOf:R,emptyImageUrl:j,requestFn:et,cancelFn:St,requestAnimFrame:Q,cancelAnimFrame:ht};function Ft(){}Ft.extend=function(t){var r=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},o=r.__super__=this.prototype,d=l(o);d.constructor=r,r.prototype=d;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(r[f]=this[f]);return t.statics&&a(r,t.statics),t.includes&&(du(t.includes),a.apply(null,[d].concat(t.includes))),a(d,t),delete d.statics,delete d.includes,d.options&&(d.options=o.options?l(o.options):{},a(d.options,t.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){o.callInitHooks&&o.callInitHooks.call(this),this._initHooksCalled=!0;for(var p=0,b=d._initHooks.length;p<b;p++)d._initHooks[p].call(this)}},r},Ft.include=function(t){var r=this.prototype.options;return a(this.prototype,t),t.options&&(this.prototype.options=r,this.mergeOptions(t.options)),this},Ft.mergeOptions=function(t){return a(this.prototype.options,t),this},Ft.addInitHook=function(t){var r=Array.prototype.slice.call(arguments,1),o=typeof t=="function"?t:function(){this[t].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(o),this};function du(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=z(t)?t:[t];for(var r=0;r<t.length;r++)t[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var At={on:function(t,r,o){if(typeof t=="object")for(var d in t)this._on(d,t[d],r);else{t=x(t);for(var f=0,p=t.length;f<p;f++)this._on(t[f],r,o)}return this},off:function(t,r,o){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var d in t)this._off(d,t[d],r);else{t=x(t);for(var f=arguments.length===1,p=0,b=t.length;p<b;p++)f?this._off(t[p]):this._off(t[p],r,o)}return this},_on:function(t,r,o,d){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(t,r,o)===!1){o===this&&(o=void 0);var f={fn:r,ctx:o};d&&(f.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(f)}},_off:function(t,r,o){var d,f,p;if(this._events&&(d=this._events[t],!!d)){if(arguments.length===1){if(this._firingCount)for(f=0,p=d.length;f<p;f++)d[f].fn=_;delete this._events[t];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var b=this._listens(t,r,o);if(b!==!1){var y=d[b];this._firingCount&&(y.fn=_,this._events[t]=d=d.slice()),d.splice(b,1)}}},fire:function(t,r,o){if(!this.listens(t,o))return this;var d=a({},r,{type:t,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var f=this._events[t];if(f){this._firingCount=this._firingCount+1||1;for(var p=0,b=f.length;p<b;p++){var y=f[p],M=y.fn;y.once&&this.off(t,M,y.ctx),M.call(y.ctx||this,d)}this._firingCount--}}return o&&this._propagateEvent(d),this},listens:function(t,r,o,d){typeof t!="string"&&console.warn('"string" type argument expected');var f=r;typeof r!="function"&&(d=!!r,f=void 0,o=void 0);var p=this._events&&this._events[t];if(p&&p.length&&this._listens(t,f,o)!==!1)return!0;if(d){for(var b in this._eventParents)if(this._eventParents[b].listens(t,r,o,d))return!0}return!1},_listens:function(t,r,o){if(!this._events)return!1;var d=this._events[t]||[];if(!r)return!!d.length;o===this&&(o=void 0);for(var f=0,p=d.length;f<p;f++)if(d[f].fn===r&&d[f].ctx===o)return f;return!1},once:function(t,r,o){if(typeof t=="object")for(var d in t)this._on(d,t[d],r,!0);else{t=x(t);for(var f=0,p=t.length;f<p;f++)this._on(t[f],r,o,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[u(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[u(t)],this},_propagateEvent:function(t){for(var r in this._eventParents)this._eventParents[r].fire(t.type,a({layer:t.target,propagatedFrom:t.target},t),!0)}};At.addEventListener=At.on,At.removeEventListener=At.clearAllEventListeners=At.off,At.addOneTimeEventListener=At.once,At.fireEvent=At.fire,At.hasEventListeners=At.listens;var ri=Ft.extend(At);function D(t,r,o){this.x=o?Math.round(t):t,this.y=o?Math.round(r):r}var vs=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};D.prototype={clone:function(){return new D(this.x,this.y)},add:function(t){return this.clone()._add(q(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(q(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new D(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new D(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=vs(this.x),this.y=vs(this.y),this},distanceTo:function(t){t=q(t);var r=t.x-this.x,o=t.y-this.y;return Math.sqrt(r*r+o*o)},equals:function(t){return t=q(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=q(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function q(t,r,o){return t instanceof D?t:z(t)?new D(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new D(t.x,t.y):new D(t,r,o)}function nt(t,r){if(t)for(var o=r?[t,r]:t,d=0,f=o.length;d<f;d++)this.extend(o[d])}nt.prototype={extend:function(t){var r,o;if(!t)return this;if(t instanceof D||typeof t[0]=="number"||"x"in t)r=o=q(t);else if(t=Et(t),r=t.min,o=t.max,!r||!o)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=o.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(o.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(o.y,this.max.y)),this},getCenter:function(t){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var r,o;return typeof t[0]=="number"||t instanceof D?t=q(t):t=Et(t),t instanceof nt?(r=t.min,o=t.max):r=o=t,r.x>=this.min.x&&o.x<=this.max.x&&r.y>=this.min.y&&o.y<=this.max.y},intersects:function(t){t=Et(t);var r=this.min,o=this.max,d=t.min,f=t.max,p=f.x>=r.x&&d.x<=o.x,b=f.y>=r.y&&d.y<=o.y;return p&&b},overlaps:function(t){t=Et(t);var r=this.min,o=this.max,d=t.min,f=t.max,p=f.x>r.x&&d.x<o.x,b=f.y>r.y&&d.y<o.y;return p&&b},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var r=this.min,o=this.max,d=Math.abs(r.x-o.x)*t,f=Math.abs(r.y-o.y)*t;return Et(q(r.x-d,r.y-f),q(o.x+d,o.y+f))},equals:function(t){return t?(t=Et(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function Et(t,r){return!t||t instanceof nt?t:new nt(t,r)}function Pt(t,r){if(t)for(var o=r?[t,r]:t,d=0,f=o.length;d<f;d++)this.extend(o[d])}Pt.prototype={extend:function(t){var r=this._southWest,o=this._northEast,d,f;if(t instanceof Y)d=t,f=t;else if(t instanceof Pt){if(d=t._southWest,f=t._northEast,!d||!f)return this}else return t?this.extend($(t)||ct(t)):this;return!r&&!o?(this._southWest=new Y(d.lat,d.lng),this._northEast=new Y(f.lat,f.lng)):(r.lat=Math.min(d.lat,r.lat),r.lng=Math.min(d.lng,r.lng),o.lat=Math.max(f.lat,o.lat),o.lng=Math.max(f.lng,o.lng)),this},pad:function(t){var r=this._southWest,o=this._northEast,d=Math.abs(r.lat-o.lat)*t,f=Math.abs(r.lng-o.lng)*t;return new Pt(new Y(r.lat-d,r.lng-f),new Y(o.lat+d,o.lng+f))},getCenter:function(){return new Y((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Y(this.getNorth(),this.getWest())},getSouthEast:function(){return new Y(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Y||"lat"in t?t=$(t):t=ct(t);var r=this._southWest,o=this._northEast,d,f;return t instanceof Pt?(d=t.getSouthWest(),f=t.getNorthEast()):d=f=t,d.lat>=r.lat&&f.lat<=o.lat&&d.lng>=r.lng&&f.lng<=o.lng},intersects:function(t){t=ct(t);var r=this._southWest,o=this._northEast,d=t.getSouthWest(),f=t.getNorthEast(),p=f.lat>=r.lat&&d.lat<=o.lat,b=f.lng>=r.lng&&d.lng<=o.lng;return p&&b},overlaps:function(t){t=ct(t);var r=this._southWest,o=this._northEast,d=t.getSouthWest(),f=t.getNorthEast(),p=f.lat>r.lat&&d.lat<o.lat,b=f.lng>r.lng&&d.lng<o.lng;return p&&b},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,r){return t?(t=ct(t),this._southWest.equals(t.getSouthWest(),r)&&this._northEast.equals(t.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ct(t,r){return t instanceof Pt?t:new Pt(t,r)}function Y(t,r,o){if(isNaN(t)||isNaN(r))throw new Error("Invalid LatLng object: ("+t+", "+r+")");this.lat=+t,this.lng=+r,o!==void 0&&(this.alt=+o)}Y.prototype={equals:function(t,r){if(!t)return!1;t=$(t);var o=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return o<=(r===void 0?1e-9:r)},toString:function(t){return"LatLng("+g(this.lat,t)+", "+g(this.lng,t)+")"},distanceTo:function(t){return ne.distance(this,$(t))},wrap:function(){return ne.wrapLatLng(this)},toBounds:function(t){var r=180*t/40075017,o=r/Math.cos(Math.PI/180*this.lat);return ct([this.lat-r,this.lng-o],[this.lat+r,this.lng+o])},clone:function(){return new Y(this.lat,this.lng,this.alt)}};function $(t,r,o){return t instanceof Y?t:z(t)&&typeof t[0]!="object"?t.length===3?new Y(t[0],t[1],t[2]):t.length===2?new Y(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Y(t.lat,"lng"in t?t.lng:t.lon,t.alt):r===void 0?null:new Y(t,r,o)}var $t={latLngToPoint:function(t,r){var o=this.projection.project(t),d=this.scale(r);return this.transformation._transform(o,d)},pointToLatLng:function(t,r){var o=this.scale(r),d=this.transformation.untransform(t,o);return this.projection.unproject(d)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var r=this.projection.bounds,o=this.scale(t),d=this.transformation.transform(r.min,o),f=this.transformation.transform(r.max,o);return new nt(d,f)},infinite:!1,wrapLatLng:function(t){var r=this.wrapLng?v(t.lng,this.wrapLng,!0):t.lng,o=this.wrapLat?v(t.lat,this.wrapLat,!0):t.lat,d=t.alt;return new Y(o,r,d)},wrapLatLngBounds:function(t){var r=t.getCenter(),o=this.wrapLatLng(r),d=r.lat-o.lat,f=r.lng-o.lng;if(d===0&&f===0)return t;var p=t.getSouthWest(),b=t.getNorthEast(),y=new Y(p.lat-d,p.lng-f),M=new Y(b.lat-d,b.lng-f);return new Pt(y,M)}},ne=a({},$t,{wrapLng:[-180,180],R:6371e3,distance:function(t,r){var o=Math.PI/180,d=t.lat*o,f=r.lat*o,p=Math.sin((r.lat-t.lat)*o/2),b=Math.sin((r.lng-t.lng)*o/2),y=p*p+Math.cos(d)*Math.cos(f)*b*b,M=2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y));return this.R*M}}),bs=6378137,Tn={R:bs,MAX_LATITUDE:85.0511287798,project:function(t){var r=Math.PI/180,o=this.MAX_LATITUDE,d=Math.max(Math.min(o,t.lat),-o),f=Math.sin(d*r);return new D(this.R*t.lng*r,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(t){var r=180/Math.PI;return new Y((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*r,t.x*r/this.R)},bounds:(function(){var t=bs*Math.PI;return new nt([-t,-t],[t,t])})()};function zn(t,r,o,d){if(z(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=r,this._c=o,this._d=d}zn.prototype={transform:function(t,r){return this._transform(t.clone(),r)},_transform:function(t,r){return r=r||1,t.x=r*(this._a*t.x+this._b),t.y=r*(this._c*t.y+this._d),t},untransform:function(t,r){return r=r||1,new D((t.x/r-this._b)/this._a,(t.y/r-this._d)/this._c)}};function si(t,r,o,d){return new zn(t,r,o,d)}var In=a({},ne,{code:"EPSG:3857",projection:Tn,transformation:(function(){var t=.5/(Math.PI*Tn.R);return si(t,.5,-t,.5)})()}),uu=a({},In,{code:"EPSG:900913"});function ys(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ws(t,r){var o="",d,f,p,b,y,M;for(d=0,p=t.length;d<p;d++){for(y=t[d],f=0,b=y.length;f<b;f++)M=y[f],o+=(f?"L":"M")+M.x+" "+M.y;o+=r?O.svg?"z":"x":""}return o||"M0 0"}var Nn=document.documentElement.style,Fi="ActiveXObject"in window,fu=Fi&&!document.addEventListener,xs="msLaunchUri"in navigator&&!("documentMode"in document),On=qt("webkit"),Ms=qt("android"),Ss=qt("android 2")||qt("android 3"),pu=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),mu=Ms&&qt("Google")&&pu<537&&!("AudioNode"in window),Gn=!!window.opera,Es=!xs&&qt("chrome"),Ps=qt("gecko")&&!On&&!Gn&&!Fi,_u=!Es&&qt("safari"),ks=qt("phantom"),As="OTransition"in Nn,gu=navigator.platform.indexOf("Win")===0,Ls=Fi&&"transition"in Nn,Rn="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Ss,Cs="MozPerspective"in Nn,vu=!window.L_DISABLE_3D&&(Ls||Rn||Cs)&&!As&&!ks,ai=typeof orientation<"u"||qt("mobile"),bu=ai&&On,yu=ai&&Rn,Ts=!window.PointerEvent&&window.MSPointerEvent,zs=!!(window.PointerEvent||Ts),Is="ontouchstart"in window||!!window.TouchEvent,wu=!window.L_NO_TOUCH&&(Is||zs),xu=ai&&Gn,Mu=ai&&Ps,Su=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Eu=(function(){var t=!1;try{var r=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",_,r),window.removeEventListener("testPassiveEventSupport",_,r)}catch{}return t})(),Pu=(function(){return!!document.createElement("canvas").getContext})(),Bn=!!(document.createElementNS&&ys("svg").createSVGRect),ku=!!Bn&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Au=!Bn&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var r=t.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}})(),Lu=navigator.platform.indexOf("Mac")===0,Cu=navigator.platform.indexOf("Linux")===0;function qt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var O={ie:Fi,ielt9:fu,edge:xs,webkit:On,android:Ms,android23:Ss,androidStock:mu,opera:Gn,chrome:Es,gecko:Ps,safari:_u,phantom:ks,opera12:As,win:gu,ie3d:Ls,webkit3d:Rn,gecko3d:Cs,any3d:vu,mobile:ai,mobileWebkit:bu,mobileWebkit3d:yu,msPointer:Ts,pointer:zs,touch:wu,touchNative:Is,mobileOpera:xu,mobileGecko:Mu,retina:Su,passiveEvents:Eu,canvas:Pu,svg:Bn,vml:Au,inlineSvg:ku,mac:Lu,linux:Cu},Ns=O.msPointer?"MSPointerDown":"pointerdown",Os=O.msPointer?"MSPointerMove":"pointermove",Gs=O.msPointer?"MSPointerUp":"pointerup",Rs=O.msPointer?"MSPointerCancel":"pointercancel",Fn={touchstart:Ns,touchmove:Os,touchend:Gs,touchcancel:Rs},Bs={touchstart:Gu,touchmove:qi,touchend:qi,touchcancel:qi},ke={},Fs=!1;function Tu(t,r,o){return r==="touchstart"&&Ou(),Bs[r]?(o=Bs[r].bind(this,o),t.addEventListener(Fn[r],o,!1),o):(console.warn("wrong event specified:",r),_)}function zu(t,r,o){if(!Fn[r]){console.warn("wrong event specified:",r);return}t.removeEventListener(Fn[r],o,!1)}function Iu(t){ke[t.pointerId]=t}function Nu(t){ke[t.pointerId]&&(ke[t.pointerId]=t)}function qs(t){delete ke[t.pointerId]}function Ou(){Fs||(document.addEventListener(Ns,Iu,!0),document.addEventListener(Os,Nu,!0),document.addEventListener(Gs,qs,!0),document.addEventListener(Rs,qs,!0),Fs=!0)}function qi(t,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var o in ke)r.touches.push(ke[o]);r.changedTouches=[r],t(r)}}function Gu(t,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&_t(r),qi(t,r)}function Ru(t){var r={},o,d;for(d in t)o=t[d],r[d]=o&&o.bind?o.bind(t):o;return t=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var Bu=200;function Fu(t,r){t.addEventListener("dblclick",r);var o=0,d;function f(p){if(p.detail!==1){d=p.detail;return}if(!(p.pointerType==="mouse"||p.sourceCapabilities&&!p.sourceCapabilities.firesTouchEvents)){var b=Us(p);if(!(b.some(function(M){return M instanceof HTMLLabelElement&&M.attributes.for})&&!b.some(function(M){return M instanceof HTMLInputElement||M instanceof HTMLSelectElement}))){var y=Date.now();y-o<=Bu?(d++,d===2&&r(Ru(p))):d=1,o=y}}}return t.addEventListener("click",f),{dblclick:r,simDblclick:f}}function qu(t,r){t.removeEventListener("dblclick",r.dblclick),t.removeEventListener("click",r.simDblclick)}var qn=ji(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),oi=ji(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ds=oi==="webkitTransition"||oi==="OTransition"?oi+"End":"transitionend";function Zs(t){return typeof t=="string"?document.getElementById(t):t}function li(t,r){var o=t.style[r]||t.currentStyle&&t.currentStyle[r];if((!o||o==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(t,null);o=d?d[r]:null}return o==="auto"?null:o}function V(t,r,o){var d=document.createElement(t);return d.className=r||"",o&&o.appendChild(d),d}function rt(t){var r=t.parentNode;r&&r.removeChild(t)}function Di(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ae(t){var r=t.parentNode;r&&r.lastChild!==t&&r.appendChild(t)}function Le(t){var r=t.parentNode;r&&r.firstChild!==t&&r.insertBefore(t,r.firstChild)}function Dn(t,r){if(t.classList!==void 0)return t.classList.contains(r);var o=Zi(t);return o.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(o)}function H(t,r){if(t.classList!==void 0)for(var o=x(r),d=0,f=o.length;d<f;d++)t.classList.add(o[d]);else if(!Dn(t,r)){var p=Zi(t);Zn(t,(p?p+" ":"")+r)}}function lt(t,r){t.classList!==void 0?t.classList.remove(r):Zn(t,w((" "+Zi(t)+" ").replace(" "+r+" "," ")))}function Zn(t,r){t.className.baseVal===void 0?t.className=r:t.className.baseVal=r}function Zi(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Tt(t,r){"opacity"in t.style?t.style.opacity=r:"filter"in t.style&&Du(t,r)}function Du(t,r){var o=!1,d="DXImageTransform.Microsoft.Alpha";try{o=t.filters.item(d)}catch{if(r===1)return}r=Math.round(r*100),o?(o.Enabled=r!==100,o.Opacity=r):t.style.filter+=" progid:"+d+"(opacity="+r+")"}function ji(t){for(var r=document.documentElement.style,o=0;o<t.length;o++)if(t[o]in r)return t[o];return!1}function he(t,r,o){var d=r||new D(0,0);t.style[qn]=(O.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(o?" scale("+o+")":"")}function dt(t,r){t._leaflet_pos=r,O.any3d?he(t,r):(t.style.left=r.x+"px",t.style.top=r.y+"px")}function ce(t){return t._leaflet_pos||new D(0,0)}var hi,ci,jn;if("onselectstart"in document)hi=function(){Z(window,"selectstart",_t)},ci=function(){tt(window,"selectstart",_t)};else{var di=ji(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);hi=function(){if(di){var t=document.documentElement.style;jn=t[di],t[di]="none"}},ci=function(){di&&(document.documentElement.style[di]=jn,jn=void 0)}}function Hn(){Z(window,"dragstart",_t)}function Un(){tt(window,"dragstart",_t)}var Hi,$n;function Wn(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Ui(),Hi=t,$n=t.style.outlineStyle,t.style.outlineStyle="none",Z(window,"keydown",Ui))}function Ui(){Hi&&(Hi.style.outlineStyle=$n,Hi=void 0,$n=void 0,tt(window,"keydown",Ui))}function js(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Vn(t){var r=t.getBoundingClientRect();return{x:r.width/t.offsetWidth||1,y:r.height/t.offsetHeight||1,boundingClientRect:r}}var Zu={__proto__:null,TRANSFORM:qn,TRANSITION:oi,TRANSITION_END:Ds,get:Zs,getStyle:li,create:V,remove:rt,empty:Di,toFront:Ae,toBack:Le,hasClass:Dn,addClass:H,removeClass:lt,setClass:Zn,getClass:Zi,setOpacity:Tt,testProp:ji,setTransform:he,setPosition:dt,getPosition:ce,get disableTextSelection(){return hi},get enableTextSelection(){return ci},disableImageDrag:Hn,enableImageDrag:Un,preventOutline:Wn,restoreOutline:Ui,getSizedParentNode:js,getScale:Vn};function Z(t,r,o,d){if(r&&typeof r=="object")for(var f in r)Kn(t,f,r[f],o);else{r=x(r);for(var p=0,b=r.length;p<b;p++)Kn(t,r[p],o,d)}return this}var Dt="_leaflet_events";function tt(t,r,o,d){if(arguments.length===1)Hs(t),delete t[Dt];else if(r&&typeof r=="object")for(var f in r)Xn(t,f,r[f],o);else if(r=x(r),arguments.length===2)Hs(t,function(y){return R(r,y)!==-1});else for(var p=0,b=r.length;p<b;p++)Xn(t,r[p],o,d);return this}function Hs(t,r){for(var o in t[Dt]){var d=o.split(/\d/)[0];(!r||r(d))&&Xn(t,d,null,null,o)}}var Jn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Kn(t,r,o,d){var f=r+u(o)+(d?"_"+u(d):"");if(t[Dt]&&t[Dt][f])return this;var p=function(y){return o.call(d||t,y||window.event)},b=p;!O.touchNative&&O.pointer&&r.indexOf("touch")===0?p=Tu(t,r,p):O.touch&&r==="dblclick"?p=Fu(t,p):"addEventListener"in t?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?t.addEventListener(Jn[r]||r,p,O.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(p=function(y){y=y||window.event,Yn(t,y)&&b(y)},t.addEventListener(Jn[r],p,!1)):t.addEventListener(r,b,!1):t.attachEvent("on"+r,p),t[Dt]=t[Dt]||{},t[Dt][f]=p}function Xn(t,r,o,d,f){f=f||r+u(o)+(d?"_"+u(d):"");var p=t[Dt]&&t[Dt][f];if(!p)return this;!O.touchNative&&O.pointer&&r.indexOf("touch")===0?zu(t,r,p):O.touch&&r==="dblclick"?qu(t,p):"removeEventListener"in t?t.removeEventListener(Jn[r]||r,p,!1):t.detachEvent("on"+r,p),t[Dt][f]=null}function de(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Qn(t){return Kn(t,"wheel",de),this}function ui(t){return Z(t,"mousedown touchstart dblclick contextmenu",de),t._leaflet_disable_click=!0,this}function _t(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function ue(t){return _t(t),de(t),this}function Us(t){if(t.composedPath)return t.composedPath();for(var r=[],o=t.target;o;)r.push(o),o=o.parentNode;return r}function $s(t,r){if(!r)return new D(t.clientX,t.clientY);var o=Vn(r),d=o.boundingClientRect;return new D((t.clientX-d.left)/o.x-r.clientLeft,(t.clientY-d.top)/o.y-r.clientTop)}var ju=O.linux&&O.chrome?window.devicePixelRatio:O.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ws(t){return O.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/ju:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Yn(t,r){var o=r.relatedTarget;if(!o)return!0;try{for(;o&&o!==t;)o=o.parentNode}catch{return!1}return o!==t}var Hu={__proto__:null,on:Z,off:tt,stopPropagation:de,disableScrollPropagation:Qn,disableClickPropagation:ui,preventDefault:_t,stop:ue,getPropagationPath:Us,getMousePosition:$s,getWheelDelta:Ws,isExternalTarget:Yn,addListener:Z,removeListener:tt},Vs=ri.extend({run:function(t,r,o,d){this.stop(),this._el=t,this._inProgress=!0,this._duration=o||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=ce(t),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Q(this._animate,this),this._step()},_step:function(t){var r=+new Date-this._startTime,o=this._duration*1e3;r<o?this._runFrame(this._easeOut(r/o),t):(this._runFrame(1),this._complete())},_runFrame:function(t,r){var o=this._startPos.add(this._offset.multiplyBy(t));r&&o._round(),dt(this._el,o),this.fire("step")},_complete:function(){ht(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),W=ri.extend({options:{crs:In,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,r){r=S(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView($(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=oi&&O.any3d&&!O.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Z(this._proxy,Ds,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,r,o){if(r=r===void 0?this._zoom:this._limitZoom(r),t=this._limitCenter($(t),r,this.options.maxBounds),o=o||{},this._stop(),this._loaded&&!o.reset&&o!==!0){o.animate!==void 0&&(o.zoom=a({animate:o.animate},o.zoom),o.pan=a({animate:o.animate,duration:o.duration},o.pan));var d=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,r,o.zoom):this._tryAnimatedPan(t,o.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(t,r,o.pan&&o.pan.noMoveStart),this},setZoom:function(t,r){return this._loaded?this.setView(this.getCenter(),t,{zoom:r}):(this._zoom=t,this)},zoomIn:function(t,r){return t=t||(O.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,r)},zoomOut:function(t,r){return t=t||(O.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,r)},setZoomAround:function(t,r,o){var d=this.getZoomScale(r),f=this.getSize().divideBy(2),p=t instanceof D?t:this.latLngToContainerPoint(t),b=p.subtract(f).multiplyBy(1-1/d),y=this.containerPointToLatLng(f.add(b));return this.setView(y,r,{zoom:o})},_getBoundsCenterZoom:function(t,r){r=r||{},t=t.getBounds?t.getBounds():ct(t);var o=q(r.paddingTopLeft||r.padding||[0,0]),d=q(r.paddingBottomRight||r.padding||[0,0]),f=this.getBoundsZoom(t,!1,o.add(d));if(f=typeof r.maxZoom=="number"?Math.min(r.maxZoom,f):f,f===1/0)return{center:t.getCenter(),zoom:f};var p=d.subtract(o).divideBy(2),b=this.project(t.getSouthWest(),f),y=this.project(t.getNorthEast(),f),M=this.unproject(b.add(y).divideBy(2).add(p),f);return{center:M,zoom:f}},fitBounds:function(t,r){if(t=ct(t),!t.isValid())throw new Error("Bounds are not valid.");var o=this._getBoundsCenterZoom(t,r);return this.setView(o.center,o.zoom,r)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,r){return this.setView(t,this._zoom,{pan:r})},panBy:function(t,r){if(t=q(t).round(),r=r||{},!t.x&&!t.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Vs,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){H(this._mapPane,"leaflet-pan-anim");var o=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,o,r.duration||.25,r.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,r,o){if(o=o||{},o.animate===!1||!O.any3d)return this.setView(t,r,o);this._stop();var d=this.project(this.getCenter()),f=this.project(t),p=this.getSize(),b=this._zoom;t=$(t),r=r===void 0?b:r;var y=Math.max(p.x,p.y),M=y*this.getZoomScale(b,r),k=f.distanceTo(d)||1,N=1.42,B=N*N;function U(ut){var rn=ut?-1:1,If=ut?M:y,Nf=M*M-y*y+rn*B*B*k*k,Of=2*If*B*k,cr=Nf/Of,Aa=Math.sqrt(cr*cr+1)-cr,Gf=Aa<1e-9?-18:Math.log(Aa);return Gf}function bt(ut){return(Math.exp(ut)-Math.exp(-ut))/2}function ft(ut){return(Math.exp(ut)+Math.exp(-ut))/2}function It(ut){return bt(ut)/ft(ut)}var kt=U(0);function Oe(ut){return y*(ft(kt)/ft(kt+N*ut))}function Lf(ut){return y*(ft(kt)*It(kt+N*ut)-bt(kt))/B}function Cf(ut){return 1-Math.pow(1-ut,1.5)}var Tf=Date.now(),Pa=(U(1)-kt)/N,zf=o.duration?1e3*o.duration:1e3*Pa*.8;function ka(){var ut=(Date.now()-Tf)/zf,rn=Cf(ut)*Pa;ut<=1?(this._flyToFrame=Q(ka,this),this._move(this.unproject(d.add(f.subtract(d).multiplyBy(Lf(rn)/k)),b),this.getScaleZoom(y/Oe(rn),b),{flyTo:!0})):this._move(t,r)._moveEnd(!0)}return this._moveStart(!0,o.noMoveStart),ka.call(this),this},flyToBounds:function(t,r){var o=this._getBoundsCenterZoom(t,r);return this.flyTo(o.center,o.zoom,r)},setMaxBounds:function(t){return t=ct(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var r=this.options.minZoom;return this.options.minZoom=t,this._loaded&&r!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var r=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&r!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,r){this._enforcingBounds=!0;var o=this.getCenter(),d=this._limitCenter(o,this._zoom,ct(t));return o.equals(d)||this.panTo(d,r),this._enforcingBounds=!1,this},panInside:function(t,r){r=r||{};var o=q(r.paddingTopLeft||r.padding||[0,0]),d=q(r.paddingBottomRight||r.padding||[0,0]),f=this.project(this.getCenter()),p=this.project(t),b=this.getPixelBounds(),y=Et([b.min.add(o),b.max.subtract(d)]),M=y.getSize();if(!y.contains(p)){this._enforcingBounds=!0;var k=p.subtract(y.getCenter()),N=y.extend(p).getSize().subtract(M);f.x+=k.x<0?-N.x:N.x,f.y+=k.y<0?-N.y:N.y,this.panTo(this.unproject(f),r),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=a({animate:!1,pan:!0},t===!0?{animate:!0}:t);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),d=r.divideBy(2).round(),f=o.divideBy(2).round(),p=d.subtract(f);return!p.x&&!p.y?this:(t.animate&&t.pan?this.panBy(p):(t.pan&&this._rawPanBy(p),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:o}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=a({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=h(this._handleGeolocationResponse,this),o=h(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,o,t):navigator.geolocation.getCurrentPosition(r,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var r=t.code,o=t.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+o+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var r=t.coords.latitude,o=t.coords.longitude,d=new Y(r,o),f=d.toBounds(t.coords.accuracy*2),p=this._locateOptions;if(p.setView){var b=this.getBoundsZoom(f);this.setView(d,p.maxZoom?Math.min(b,p.maxZoom):b)}var y={latlng:d,bounds:f,timestamp:t.timestamp};for(var M in t.coords)typeof t.coords[M]=="number"&&(y[M]=t.coords[M]);this.fire("locationfound",y)}},addHandler:function(t,r){if(!r)return this;var o=this[t]=new r(this);return this._handlers.push(o),this.options[t]&&o.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),rt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ht(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)rt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,r){var o="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),d=V("div",o,r||this._mapPane);return t&&(this._panes[t]=d),d},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),r=this.unproject(t.getBottomLeft()),o=this.unproject(t.getTopRight());return new Pt(r,o)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,r,o){t=ct(t),o=q(o||[0,0]);var d=this.getZoom()||0,f=this.getMinZoom(),p=this.getMaxZoom(),b=t.getNorthWest(),y=t.getSouthEast(),M=this.getSize().subtract(o),k=Et(this.project(y,d),this.project(b,d)).getSize(),N=O.any3d?this.options.zoomSnap:1,B=M.x/k.x,U=M.y/k.y,bt=r?Math.max(B,U):Math.min(B,U);return d=this.getScaleZoom(bt,d),N&&(d=Math.round(d/(N/100))*(N/100),d=r?Math.ceil(d/N)*N:Math.floor(d/N)*N),Math.max(f,Math.min(p,d))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new D(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,r){var o=this._getTopLeftPoint(t,r);return new nt(o,o.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,r){var o=this.options.crs;return r=r===void 0?this._zoom:r,o.scale(t)/o.scale(r)},getScaleZoom:function(t,r){var o=this.options.crs;r=r===void 0?this._zoom:r;var d=o.zoom(t*o.scale(r));return isNaN(d)?1/0:d},project:function(t,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint($(t),r)},unproject:function(t,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(q(t),r)},layerPointToLatLng:function(t){var r=q(t).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(t){var r=this.project($(t))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng($(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(ct(t))},distance:function(t,r){return this.options.crs.distance($(t),$(r))},containerPointToLayerPoint:function(t){return q(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return q(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var r=this.containerPointToLayerPoint(q(t));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(t)))},mouseEventToContainerPoint:function(t){return $s(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var r=this._container=Zs(t);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Z(r,"scroll",this._onScroll,this),this._containerId=u(r)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&O.any3d,H(t,"leaflet-container"+(O.touch?" leaflet-touch":"")+(O.retina?" leaflet-retina":"")+(O.ielt9?" leaflet-oldie":"")+(O.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=li(t,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),dt(this._mapPane,new D(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(H(t.markerPane,"leaflet-zoom-hide"),H(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,r,o){dt(this._mapPane,new D(0,0));var d=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var f=this._zoom!==r;this._moveStart(f,o)._move(t,r)._moveEnd(f),this.fire("viewreset"),d&&this.fire("load")},_moveStart:function(t,r){return t&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(t,r,o,d){r===void 0&&(r=this._zoom);var f=this._zoom!==r;return this._zoom=r,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),d?o&&o.pinch&&this.fire("zoom",o):((f||o&&o.pinch)&&this.fire("zoom",o),this.fire("move",o)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ht(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){dt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[u(this._container)]=this;var r=t?tt:Z;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),O.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ht(this._resizeRequest),this._resizeRequest=Q(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,r){for(var o=[],d,f=r==="mouseout"||r==="mouseover",p=t.target||t.srcElement,b=!1;p;){if(d=this._targets[u(p)],d&&(r==="click"||r==="preclick")&&this._draggableMoved(d)){b=!0;break}if(d&&d.listens(r,!0)&&(f&&!Yn(p,t)||(o.push(d),f))||p===this._container)break;p=p.parentNode}return!o.length&&!b&&!f&&this.listens(r,!0)&&(o=[this]),o},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var r=t.target||t.srcElement;if(!(!this._loaded||r._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(r))){var o=t.type;o==="mousedown"&&Wn(r),this._fireDOMEvent(t,o)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,r,o){if(t.type==="click"){var d=a({},t);d.type="preclick",this._fireDOMEvent(d,d.type,o)}var f=this._findEventTargets(t,r);if(o){for(var p=[],b=0;b<o.length;b++)o[b].listens(r,!0)&&p.push(o[b]);f=p.concat(f)}if(f.length){r==="contextmenu"&&_t(t);var y=f[0],M={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var k=y.getLatLng&&(!y._radius||y._radius<=10);M.containerPoint=k?this.latLngToContainerPoint(y.getLatLng()):this.mouseEventToContainerPoint(t),M.layerPoint=this.containerPointToLayerPoint(M.containerPoint),M.latlng=k?y.getLatLng():this.layerPointToLatLng(M.layerPoint)}for(b=0;b<f.length;b++)if(f[b].fire(r,M,!0),M.originalEvent._stopped||f[b].options.bubblingMouseEvents===!1&&R(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,r=this._handlers.length;t<r;t++)this._handlers[t].disable()},whenReady:function(t,r){return this._loaded?t.call(r||this,{target:this}):this.on("load",t,r),this},_getMapPanePos:function(){return ce(this._mapPane)||new D(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,r){var o=t&&r!==void 0?this._getNewPixelOrigin(t,r):this.getPixelOrigin();return o.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,r){var o=this.getSize()._divideBy(2);return this.project(t,r)._subtract(o)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,r,o){var d=this._getNewPixelOrigin(o,r);return this.project(t,r)._subtract(d)},_latLngBoundsToNewLayerBounds:function(t,r,o){var d=this._getNewPixelOrigin(o,r);return Et([this.project(t.getSouthWest(),r)._subtract(d),this.project(t.getNorthWest(),r)._subtract(d),this.project(t.getSouthEast(),r)._subtract(d),this.project(t.getNorthEast(),r)._subtract(d)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,r,o){if(!o)return t;var d=this.project(t,r),f=this.getSize().divideBy(2),p=new nt(d.subtract(f),d.add(f)),b=this._getBoundsOffset(p,o,r);return Math.abs(b.x)<=1&&Math.abs(b.y)<=1?t:this.unproject(d.add(b),r)},_limitOffset:function(t,r){if(!r)return t;var o=this.getPixelBounds(),d=new nt(o.min.add(t),o.max.add(t));return t.add(this._getBoundsOffset(d,r))},_getBoundsOffset:function(t,r,o){var d=Et(this.project(r.getNorthEast(),o),this.project(r.getSouthWest(),o)),f=d.min.subtract(t.min),p=d.max.subtract(t.max),b=this._rebound(f.x,-p.x),y=this._rebound(f.y,-p.y);return new D(b,y)},_rebound:function(t,r){return t+r>0?Math.round(t-r)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(r))},_limitZoom:function(t){var r=this.getMinZoom(),o=this.getMaxZoom(),d=O.any3d?this.options.zoomSnap:1;return d&&(t=Math.round(t/d)*d),Math.max(r,Math.min(o,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){lt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,r){var o=this._getCenterOffset(t)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(o)?!1:(this.panBy(o,r),!0)},_createAnimProxy:function(){var t=this._proxy=V("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(r){var o=qn,d=this._proxy.style[o];he(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),d===this._proxy.style[o]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){rt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),r=this.getZoom();he(this._proxy,this.project(t,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,r,o){if(this._animatingZoom)return!0;if(o=o||{},!this._zoomAnimated||o.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(r),f=this._getCenterOffset(t)._divideBy(1-1/d);return o.animate!==!0&&!this.getSize().contains(f)?!1:(Q(function(){this._moveStart(!0,o.noMoveStart||!1)._animateZoom(t,r,!0)},this),!0)},_animateZoom:function(t,r,o,d){this._mapPane&&(o&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=r,H(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:r,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&lt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Uu(t,r){return new W(t,r)}var Gt=Ft.extend({options:{position:"topright"},initialize:function(t){S(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var r=this._map;return r&&r.removeControl(this),this.options.position=t,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var r=this._container=this.onAdd(t),o=this.getPosition(),d=t._controlCorners[o];return H(r,"leaflet-control"),o.indexOf("bottom")!==-1?d.insertBefore(r,d.firstChild):d.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(rt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),fi=function(t){return new Gt(t)};W.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},r="leaflet-",o=this._controlContainer=V("div",r+"control-container",this._container);function d(f,p){var b=r+f+" "+r+p;t[f+p]=V("div",b,o)}d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)rt(this._controlCorners[t]);rt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Js=Gt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,r,o,d){return o<d?-1:d<o?1:0}},initialize:function(t,r,o){S(this,o),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in t)this._addLayer(t[d],d);for(d in r)this._addLayer(r[d],d,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Gt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,r){return this._addLayer(t,r),this._map?this._update():this},addOverlay:function(t,r){return this._addLayer(t,r,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var r=this._getLayer(u(t));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){H(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(H(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):lt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return lt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",r=this._container=V("div",t),o=this.options.collapsed;r.setAttribute("aria-haspopup",!0),ui(r),Qn(r);var d=this._section=V("section",t+"-list");o&&(this._map.on("click",this.collapse,this),Z(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=V("a",t+"-toggle",r);f.href="#",f.title="Layers",f.setAttribute("role","button"),Z(f,{keydown:function(p){p.keyCode===13&&this._expandSafely()},click:function(p){_t(p),this._expandSafely()}},this),o||this.expand(),this._baseLayersList=V("div",t+"-base",d),this._separator=V("div",t+"-separator",d),this._overlaysList=V("div",t+"-overlays",d),r.appendChild(d)},_getLayer:function(t){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&u(this._layers[r].layer)===t)return this._layers[r]},_addLayer:function(t,r,o){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:r,overlay:o}),this.options.sortLayers&&this._layers.sort(h(function(d,f){return this.options.sortFunction(d.layer,f.layer,d.name,f.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Di(this._baseLayersList),Di(this._overlaysList),this._layerControlInputs=[];var t,r,o,d,f=0;for(o=0;o<this._layers.length;o++)d=this._layers[o],this._addItem(d),r=r||d.overlay,t=t||!d.overlay,f+=d.overlay?0:1;return this.options.hideSingleBase&&(t=t&&f>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=r&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var r=this._getLayer(u(t.target)),o=r.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;o&&this._map.fire(o,r)},_createRadioElement:function(t,r){var o='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(r?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=o,d.firstChild},_addItem:function(t){var r=document.createElement("label"),o=this._map.hasLayer(t.layer),d;t.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=o):d=this._createRadioElement("leaflet-base-layers_"+u(this),o),this._layerControlInputs.push(d),d.layerId=u(t.layer),Z(d,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+t.name;var p=document.createElement("span");r.appendChild(p),p.appendChild(d),p.appendChild(f);var b=t.overlay?this._overlaysList:this._baseLayersList;return b.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,r,o,d=[],f=[];this._handlingClick=!0;for(var p=t.length-1;p>=0;p--)r=t[p],o=this._getLayer(r.layerId).layer,r.checked?d.push(o):r.checked||f.push(o);for(p=0;p<f.length;p++)this._map.hasLayer(f[p])&&this._map.removeLayer(f[p]);for(p=0;p<d.length;p++)this._map.hasLayer(d[p])||this._map.addLayer(d[p]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,r,o,d=this._map.getZoom(),f=t.length-1;f>=0;f--)r=t[f],o=this._getLayer(r.layerId).layer,r.disabled=o.options.minZoom!==void 0&&d<o.options.minZoom||o.options.maxZoom!==void 0&&d>o.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,Z(t,"click",_t),this.expand();var r=this;setTimeout(function(){tt(t,"click",_t),r._preventClick=!1})}}),$u=function(t,r,o){return new Js(t,r,o)},tr=Gt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var r="leaflet-control-zoom",o=V("div",r+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,r+"-in",o,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,r+"-out",o,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),o},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,r,o,d,f){var p=V("a",o,d);return p.innerHTML=t,p.href="#",p.title=r,p.setAttribute("role","button"),p.setAttribute("aria-label",r),ui(p),Z(p,"click",ue),Z(p,"click",f,this),Z(p,"click",this._refocusOnMap,this),p},_updateDisabled:function(){var t=this._map,r="leaflet-disabled";lt(this._zoomInButton,r),lt(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(H(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(H(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});W.mergeOptions({zoomControl:!0}),W.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new tr,this.addControl(this.zoomControl))});var Wu=function(t){return new tr(t)},Ks=Gt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var r="leaflet-control-scale",o=V("div",r),d=this.options;return this._addScales(d,r+"-line",o),t.on(d.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),o},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,r,o){t.metric&&(this._mScale=V("div",r,o)),t.imperial&&(this._iScale=V("div",r,o))},_update:function(){var t=this._map,r=t.getSize().y/2,o=t.distance(t.containerPointToLatLng([0,r]),t.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(o)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var r=this._getRoundNum(t),o=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,o,r/t)},_updateImperial:function(t){var r=t*3.2808399,o,d,f;r>5280?(o=r/5280,d=this._getRoundNum(o),this._updateScale(this._iScale,d+" mi",d/o)):(f=this._getRoundNum(r),this._updateScale(this._iScale,f+" ft",f/r))},_updateScale:function(t,r,o){t.style.width=Math.round(this.options.maxWidth*o)+"px",t.innerHTML=r},_getRoundNum:function(t){var r=Math.pow(10,(Math.floor(t)+"").length-1),o=t/r;return o=o>=10?10:o>=5?5:o>=3?3:o>=2?2:1,r*o}}),Vu=function(t){return new Ks(t)},Ju='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',er=Gt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(O.inlineSvg?Ju+" ":"")+"Leaflet</a>"},initialize:function(t){S(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=V("div","leaflet-control-attribution"),ui(this._container);for(var r in t._layers)t._layers[r].getAttribution&&this.addAttribution(t._layers[r].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var r in this._attributions)this._attributions[r]&&t.push(r);var o=[];this.options.prefix&&o.push(this.options.prefix),t.length&&o.push(t.join(", ")),this._container.innerHTML=o.join(' <span aria-hidden="true">|</span> ')}}});W.mergeOptions({attributionControl:!0}),W.addInitHook(function(){this.options.attributionControl&&new er().addTo(this)});var Ku=function(t){return new er(t)};Gt.Layers=Js,Gt.Zoom=tr,Gt.Scale=Ks,Gt.Attribution=er,fi.layers=$u,fi.zoom=Wu,fi.scale=Vu,fi.attribution=Ku;var Zt=Ft.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Zt.addTo=function(t,r){return t.addHandler(r,this),this};var Xu={Events:At},Xs=O.touch?"touchstart mousedown":"mousedown",re=ri.extend({options:{clickTolerance:3},initialize:function(t,r,o,d){S(this,d),this._element=t,this._dragStartTarget=r||t,this._preventOutline=o},enable:function(){this._enabled||(Z(this._dragStartTarget,Xs,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(re._dragging===this&&this.finishDrag(!0),tt(this._dragStartTarget,Xs,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Dn(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){re._dragging===this&&this.finishDrag();return}if(!(re._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(re._dragging=this,this._preventOutline&&Wn(this._element),Hn(),hi(),!this._moving)){this.fire("down");var r=t.touches?t.touches[0]:t,o=js(this._element);this._startPoint=new D(r.clientX,r.clientY),this._startPos=ce(this._element),this._parentScale=Vn(o);var d=t.type==="mousedown";Z(document,d?"mousemove":"touchmove",this._onMove,this),Z(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var r=t.touches&&t.touches.length===1?t.touches[0]:t,o=new D(r.clientX,r.clientY)._subtract(this._startPoint);!o.x&&!o.y||Math.abs(o.x)+Math.abs(o.y)<this.options.clickTolerance||(o.x/=this._parentScale.x,o.y/=this._parentScale.y,_t(t),this._moved||(this.fire("dragstart"),this._moved=!0,H(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),H(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(o),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),dt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){lt(document.body,"leaflet-dragging"),this._lastTarget&&(lt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),tt(document,"mousemove touchmove",this._onMove,this),tt(document,"mouseup touchend touchcancel",this._onUp,this),Un(),ci();var r=this._moved&&this._moving;this._moving=!1,re._dragging=!1,r&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Qs(t,r,o){var d,f=[1,4,2,8],p,b,y,M,k,N,B,U;for(p=0,N=t.length;p<N;p++)t[p]._code=fe(t[p],r);for(y=0;y<4;y++){for(B=f[y],d=[],p=0,N=t.length,b=N-1;p<N;b=p++)M=t[p],k=t[b],M._code&B?k._code&B||(U=$i(k,M,B,r,o),U._code=fe(U,r),d.push(U)):(k._code&B&&(U=$i(k,M,B,r,o),U._code=fe(U,r),d.push(U)),d.push(M));t=d}return t}function Ys(t,r){var o,d,f,p,b,y,M,k,N;if(!t||t.length===0)throw new Error("latlngs not passed");zt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var B=$([0,0]),U=ct(t),bt=U.getNorthWest().distanceTo(U.getSouthWest())*U.getNorthEast().distanceTo(U.getNorthWest());bt<1700&&(B=ir(t));var ft=t.length,It=[];for(o=0;o<ft;o++){var kt=$(t[o]);It.push(r.project($([kt.lat-B.lat,kt.lng-B.lng])))}for(y=M=k=0,o=0,d=ft-1;o<ft;d=o++)f=It[o],p=It[d],b=f.y*p.x-p.y*f.x,M+=(f.x+p.x)*b,k+=(f.y+p.y)*b,y+=b*3;y===0?N=It[0]:N=[M/y,k/y];var Oe=r.unproject(q(N));return $([Oe.lat+B.lat,Oe.lng+B.lng])}function ir(t){for(var r=0,o=0,d=0,f=0;f<t.length;f++){var p=$(t[f]);r+=p.lat,o+=p.lng,d++}return $([r/d,o/d])}var Qu={__proto__:null,clipPolygon:Qs,polygonCenter:Ys,centroid:ir};function ta(t,r){if(!r||!t.length)return t.slice();var o=r*r;return t=ef(t,o),t=tf(t,o),t}function ea(t,r,o){return Math.sqrt(pi(t,r,o,!0))}function Yu(t,r,o){return pi(t,r,o)}function tf(t,r){var o=t.length,d=typeof Uint8Array<"u"?Uint8Array:Array,f=new d(o);f[0]=f[o-1]=1,nr(t,f,r,0,o-1);var p,b=[];for(p=0;p<o;p++)f[p]&&b.push(t[p]);return b}function nr(t,r,o,d,f){var p=0,b,y,M;for(y=d+1;y<=f-1;y++)M=pi(t[y],t[d],t[f],!0),M>p&&(b=y,p=M);p>o&&(r[b]=1,nr(t,r,o,d,b),nr(t,r,o,b,f))}function ef(t,r){for(var o=[t[0]],d=1,f=0,p=t.length;d<p;d++)nf(t[d],t[f])>r&&(o.push(t[d]),f=d);return f<p-1&&o.push(t[p-1]),o}var ia;function na(t,r,o,d,f){var p=d?ia:fe(t,o),b=fe(r,o),y,M,k;for(ia=b;;){if(!(p|b))return[t,r];if(p&b)return!1;y=p||b,M=$i(t,r,y,o,f),k=fe(M,o),y===p?(t=M,p=k):(r=M,b=k)}}function $i(t,r,o,d,f){var p=r.x-t.x,b=r.y-t.y,y=d.min,M=d.max,k,N;return o&8?(k=t.x+p*(M.y-t.y)/b,N=M.y):o&4?(k=t.x+p*(y.y-t.y)/b,N=y.y):o&2?(k=M.x,N=t.y+b*(M.x-t.x)/p):o&1&&(k=y.x,N=t.y+b*(y.x-t.x)/p),new D(k,N,f)}function fe(t,r){var o=0;return t.x<r.min.x?o|=1:t.x>r.max.x&&(o|=2),t.y<r.min.y?o|=4:t.y>r.max.y&&(o|=8),o}function nf(t,r){var o=r.x-t.x,d=r.y-t.y;return o*o+d*d}function pi(t,r,o,d){var f=r.x,p=r.y,b=o.x-f,y=o.y-p,M=b*b+y*y,k;return M>0&&(k=((t.x-f)*b+(t.y-p)*y)/M,k>1?(f=o.x,p=o.y):k>0&&(f+=b*k,p+=y*k)),b=t.x-f,y=t.y-p,d?b*b+y*y:new D(f,p)}function zt(t){return!z(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function ra(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),zt(t)}function sa(t,r){var o,d,f,p,b,y,M,k;if(!t||t.length===0)throw new Error("latlngs not passed");zt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var N=$([0,0]),B=ct(t),U=B.getNorthWest().distanceTo(B.getSouthWest())*B.getNorthEast().distanceTo(B.getNorthWest());U<1700&&(N=ir(t));var bt=t.length,ft=[];for(o=0;o<bt;o++){var It=$(t[o]);ft.push(r.project($([It.lat-N.lat,It.lng-N.lng])))}for(o=0,d=0;o<bt-1;o++)d+=ft[o].distanceTo(ft[o+1])/2;if(d===0)k=ft[0];else for(o=0,p=0;o<bt-1;o++)if(b=ft[o],y=ft[o+1],f=b.distanceTo(y),p+=f,p>d){M=(p-d)/f,k=[y.x-M*(y.x-b.x),y.y-M*(y.y-b.y)];break}var kt=r.unproject(q(k));return $([kt.lat+N.lat,kt.lng+N.lng])}var rf={__proto__:null,simplify:ta,pointToSegmentDistance:ea,closestPointOnSegment:Yu,clipSegment:na,_getEdgeIntersection:$i,_getBitCode:fe,_sqClosestPointOnSegment:pi,isFlat:zt,_flat:ra,polylineCenter:sa},rr={project:function(t){return new D(t.lng,t.lat)},unproject:function(t){return new Y(t.y,t.x)},bounds:new nt([-180,-90],[180,90])},sr={R:6378137,R_MINOR:6356752314245179e-9,bounds:new nt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var r=Math.PI/180,o=this.R,d=t.lat*r,f=this.R_MINOR/o,p=Math.sqrt(1-f*f),b=p*Math.sin(d),y=Math.tan(Math.PI/4-d/2)/Math.pow((1-b)/(1+b),p/2);return d=-o*Math.log(Math.max(y,1e-10)),new D(t.lng*r*o,d)},unproject:function(t){for(var r=180/Math.PI,o=this.R,d=this.R_MINOR/o,f=Math.sqrt(1-d*d),p=Math.exp(-t.y/o),b=Math.PI/2-2*Math.atan(p),y=0,M=.1,k;y<15&&Math.abs(M)>1e-7;y++)k=f*Math.sin(b),k=Math.pow((1-k)/(1+k),f/2),M=Math.PI/2-2*Math.atan(p*k)-b,b+=M;return new Y(b*r,t.x*r/o)}},sf={__proto__:null,LonLat:rr,Mercator:sr,SphericalMercator:Tn},af=a({},ne,{code:"EPSG:3395",projection:sr,transformation:(function(){var t=.5/(Math.PI*sr.R);return si(t,.5,-t,.5)})()}),aa=a({},ne,{code:"EPSG:4326",projection:rr,transformation:si(1/180,1,-1/180,.5)}),of=a({},$t,{projection:rr,transformation:si(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,r){var o=r.lng-t.lng,d=r.lat-t.lat;return Math.sqrt(o*o+d*d)},infinite:!0});$t.Earth=ne,$t.EPSG3395=af,$t.EPSG3857=In,$t.EPSG900913=uu,$t.EPSG4326=aa,$t.Simple=of;var Rt=ri.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[u(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[u(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var r=t.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var o=this.getEvents();r.on(o,this),this.once("remove",function(){r.off(o,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});W.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var r=u(t);return this._layers[r]?this:(this._layers[r]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var r=u(t);return this._layers[r]?(this._loaded&&t.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return u(t)in this._layers},eachLayer:function(t,r){for(var o in this._layers)t.call(r,this._layers[o]);return this},_addLayers:function(t){t=t?z(t)?t:[t]:[];for(var r=0,o=t.length;r<o;r++)this.addLayer(t[r])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[u(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var r=u(t);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,r=-1/0,o=this._getZoomSpan();for(var d in this._zoomBoundLayers){var f=this._zoomBoundLayers[d].options;t=f.minZoom===void 0?t:Math.min(t,f.minZoom),r=f.maxZoom===void 0?r:Math.max(r,f.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=t===1/0?void 0:t,o!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ce=Rt.extend({initialize:function(t,r){S(this,r),this._layers={};var o,d;if(t)for(o=0,d=t.length;o<d;o++)this.addLayer(t[o])},addLayer:function(t){var r=this.getLayerId(t);return this._layers[r]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var r=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(t){var r=typeof t=="number"?t:this.getLayerId(t);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var r=Array.prototype.slice.call(arguments,1),o,d;for(o in this._layers)d=this._layers[o],d[t]&&d[t].apply(d,r);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,r){for(var o in this._layers)t.call(r,this._layers[o]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return u(t)}}),lf=function(t,r){return new Ce(t,r)},Wt=Ce.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ce.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ce.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new Pt;for(var r in this._layers){var o=this._layers[r];t.extend(o.getBounds?o.getBounds():o.getLatLng())}return t}}),hf=function(t,r){return new Wt(t,r)},Te=Ft.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){S(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,r){var o=this._getIconUrl(t);if(!o){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(o,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(d,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},_setIconStyles:function(t,r){var o=this.options,d=o[r+"Size"];typeof d=="number"&&(d=[d,d]);var f=q(d),p=q(r==="shadow"&&o.shadowAnchor||o.iconAnchor||f&&f.divideBy(2,!0));t.className="leaflet-marker-"+r+" "+(o.className||""),p&&(t.style.marginLeft=-p.x+"px",t.style.marginTop=-p.y+"px"),f&&(t.style.width=f.x+"px",t.style.height=f.y+"px")},_createImg:function(t,r){return r=r||document.createElement("img"),r.src=t,r},_getIconUrl:function(t){return O.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function cf(t){return new Te(t)}var mi=Te.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof mi.imagePath!="string"&&(mi.imagePath=this._detectIconPath()),(this.options.imagePath||mi.imagePath)+Te.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var r=function(o,d,f){var p=d.exec(o);return p&&p[f]};return t=r(t,/^url\((['"])?(.+)\1\)$/,2),t&&r(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=V("div","leaflet-default-icon-path",document.body),r=li(t,"background-image")||li(t,"backgroundImage");if(document.body.removeChild(t),r=this._stripUrl(r),r)return r;var o=document.querySelector('link[href$="leaflet.css"]');return o?o.href.substring(0,o.href.length-11-1):""}}),oa=Zt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new re(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),H(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&lt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var r=this._marker,o=r._map,d=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,p=ce(r._icon),b=o.getPixelBounds(),y=o.getPixelOrigin(),M=Et(b.min._subtract(y).add(f),b.max._subtract(y).subtract(f));if(!M.contains(p)){var k=q((Math.max(M.max.x,p.x)-M.max.x)/(b.max.x-M.max.x)-(Math.min(M.min.x,p.x)-M.min.x)/(b.min.x-M.min.x),(Math.max(M.max.y,p.y)-M.max.y)/(b.max.y-M.max.y)-(Math.min(M.min.y,p.y)-M.min.y)/(b.min.y-M.min.y)).multiplyBy(d);o.panBy(k,{animate:!1}),this._draggable._newPos._add(k),this._draggable._startPos._add(k),dt(r._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Q(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(ht(this._panRequest),this._panRequest=Q(this._adjustPan.bind(this,t)))},_onDrag:function(t){var r=this._marker,o=r._shadow,d=ce(r._icon),f=r._map.layerPointToLatLng(d);o&&dt(o,d),r._latlng=f,t.latlng=f,t.oldLatLng=this._oldLatLng,r.fire("move",t).fire("drag",t)},_onDragEnd:function(t){ht(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Wi=Rt.extend({options:{icon:new mi,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,r){S(this,r),this._latlng=$(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var r=this._latlng;return this._latlng=$(t),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),o=t.icon.createIcon(this._icon),d=!1;o!==this._icon&&(this._icon&&this._removeIcon(),d=!0,t.title&&(o.title=t.title),o.tagName==="IMG"&&(o.alt=t.alt||"")),H(o,r),t.keyboard&&(o.tabIndex="0",o.setAttribute("role","button")),this._icon=o,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Z(o,"focus",this._panOnFocus,this);var f=t.icon.createShadow(this._shadow),p=!1;f!==this._shadow&&(this._removeShadow(),p=!0),f&&(H(f,r),f.alt=""),this._shadow=f,t.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&p&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&tt(this._icon,"focus",this._panOnFocus,this),rt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&rt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&dt(this._icon,t),this._shadow&&dt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(H(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),oa)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new oa(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Tt(this._icon,t),this._shadow&&Tt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var r=this.options.icon.options,o=r.iconSize?q(r.iconSize):q(0,0),d=r.iconAnchor?q(r.iconAnchor):q(0,0);t.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:o.subtract(d)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function df(t,r){return new Wi(t,r)}var se=Rt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return S(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Vi=se.extend({options:{fill:!0,radius:10},initialize:function(t,r){S(this,r),this._latlng=$(t),this._radius=this.options.radius},setLatLng:function(t){var r=this._latlng;return this._latlng=$(t),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var r=t&&t.radius||this._radius;return se.prototype.setStyle.call(this,t),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,r=this._radiusY||t,o=this._clickTolerance(),d=[t+o,r+o];this._pxBounds=new nt(this._point.subtract(d),this._point.add(d))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function uf(t,r){return new Vi(t,r)}var ar=Vi.extend({initialize:function(t,r,o){if(typeof r=="number"&&(r=a({},o,{radius:r})),S(this,r),this._latlng=$(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new Pt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:se.prototype.setStyle,_project:function(){var t=this._latlng.lng,r=this._latlng.lat,o=this._map,d=o.options.crs;if(d.distance===ne.distance){var f=Math.PI/180,p=this._mRadius/ne.R/f,b=o.project([r+p,t]),y=o.project([r-p,t]),M=b.add(y).divideBy(2),k=o.unproject(M).lat,N=Math.acos((Math.cos(p*f)-Math.sin(r*f)*Math.sin(k*f))/(Math.cos(r*f)*Math.cos(k*f)))/f;(isNaN(N)||N===0)&&(N=p/Math.cos(Math.PI/180*r)),this._point=M.subtract(o.getPixelOrigin()),this._radius=isNaN(N)?0:M.x-o.project([k,t-N]).x,this._radiusY=M.y-b.y}else{var B=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=o.latLngToLayerPoint(this._latlng),this._radius=this._point.x-o.latLngToLayerPoint(B).x}this._updateBounds()}});function ff(t,r,o){return new ar(t,r,o)}var Vt=se.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,r){S(this,r),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var r=1/0,o=null,d=pi,f,p,b=0,y=this._parts.length;b<y;b++)for(var M=this._parts[b],k=1,N=M.length;k<N;k++){f=M[k-1],p=M[k];var B=d(t,f,p,!0);B<r&&(r=B,o=d(t,f,p))}return o&&(o.distance=Math.sqrt(r)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return sa(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,r){return r=r||this._defaultShape(),t=$(t),r.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new Pt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return zt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var r=[],o=zt(t),d=0,f=t.length;d<f;d++)o?(r[d]=$(t[d]),this._bounds.extend(r[d])):r[d]=this._convertLatLngs(t[d]);return r},_project:function(){var t=new nt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),r=new D(t,t);this._rawPxBounds&&(this._pxBounds=new nt([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(t,r,o){var d=t[0]instanceof Y,f=t.length,p,b;if(d){for(b=[],p=0;p<f;p++)b[p]=this._map.latLngToLayerPoint(t[p]),o.extend(b[p]);r.push(b)}else for(p=0;p<f;p++)this._projectLatlngs(t[p],r,o)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,o,d,f,p,b,y,M;for(o=0,f=0,p=this._rings.length;o<p;o++)for(M=this._rings[o],d=0,b=M.length;d<b-1;d++)y=na(M[d],M[d+1],t,d,!0),y&&(r[f]=r[f]||[],r[f].push(y[0]),(y[1]!==M[d+1]||d===b-2)&&(r[f].push(y[1]),f++))}},_simplifyPoints:function(){for(var t=this._parts,r=this.options.smoothFactor,o=0,d=t.length;o<d;o++)t[o]=ta(t[o],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,r){var o,d,f,p,b,y,M=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,p=this._parts.length;o<p;o++)for(y=this._parts[o],d=0,b=y.length,f=b-1;d<b;f=d++)if(!(!r&&d===0)&&ea(t,y[f],y[d])<=M)return!0;return!1}});function pf(t,r){return new Vt(t,r)}Vt._flat=ra;var ze=Vt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ys(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var r=Vt.prototype._convertLatLngs.call(this,t),o=r.length;return o>=2&&r[0]instanceof Y&&r[0].equals(r[o-1])&&r.pop(),r},_setLatLngs:function(t){Vt.prototype._setLatLngs.call(this,t),zt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return zt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,r=this.options.weight,o=new D(r,r);if(t=new nt(t.min.subtract(o),t.max.add(o)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,f=this._rings.length,p;d<f;d++)p=Qs(this._rings[d],t,!0),p.length&&this._parts.push(p)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var r=!1,o,d,f,p,b,y,M,k;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(p=0,M=this._parts.length;p<M;p++)for(o=this._parts[p],b=0,k=o.length,y=k-1;b<k;y=b++)d=o[b],f=o[y],d.y>t.y!=f.y>t.y&&t.x<(f.x-d.x)*(t.y-d.y)/(f.y-d.y)+d.x&&(r=!r);return r||Vt.prototype._containsPoint.call(this,t,!0)}});function mf(t,r){return new ze(t,r)}var Jt=Wt.extend({initialize:function(t,r){S(this,r),this._layers={},t&&this.addData(t)},addData:function(t){var r=z(t)?t:t.features,o,d,f;if(r){for(o=0,d=r.length;o<d;o++)f=r[o],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var p=this.options;if(p.filter&&!p.filter(t))return this;var b=Ji(t,p);return b?(b.feature=Qi(t),b.defaultOptions=b.options,this.resetStyle(b),p.onEachFeature&&p.onEachFeature(t,b),this.addLayer(b)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=a({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(r){this._setLayerStyle(r,t)},this)},_setLayerStyle:function(t,r){t.setStyle&&(typeof r=="function"&&(r=r(t.feature)),t.setStyle(r))}});function Ji(t,r){var o=t.type==="Feature"?t.geometry:t,d=o?o.coordinates:null,f=[],p=r&&r.pointToLayer,b=r&&r.coordsToLatLng||or,y,M,k,N;if(!d&&!o)return null;switch(o.type){case"Point":return y=b(d),la(p,t,y,r);case"MultiPoint":for(k=0,N=d.length;k<N;k++)y=b(d[k]),f.push(la(p,t,y,r));return new Wt(f);case"LineString":case"MultiLineString":return M=Ki(d,o.type==="LineString"?0:1,b),new Vt(M,r);case"Polygon":case"MultiPolygon":return M=Ki(d,o.type==="Polygon"?1:2,b),new ze(M,r);case"GeometryCollection":for(k=0,N=o.geometries.length;k<N;k++){var B=Ji({geometry:o.geometries[k],type:"Feature",properties:t.properties},r);B&&f.push(B)}return new Wt(f);case"FeatureCollection":for(k=0,N=o.features.length;k<N;k++){var U=Ji(o.features[k],r);U&&f.push(U)}return new Wt(f);default:throw new Error("Invalid GeoJSON object.")}}function la(t,r,o,d){return t?t(r,o):new Wi(o,d&&d.markersInheritOptions&&d)}function or(t){return new Y(t[1],t[0],t[2])}function Ki(t,r,o){for(var d=[],f=0,p=t.length,b;f<p;f++)b=r?Ki(t[f],r-1,o):(o||or)(t[f]),d.push(b);return d}function lr(t,r){return t=$(t),t.alt!==void 0?[g(t.lng,r),g(t.lat,r),g(t.alt,r)]:[g(t.lng,r),g(t.lat,r)]}function Xi(t,r,o,d){for(var f=[],p=0,b=t.length;p<b;p++)f.push(r?Xi(t[p],zt(t[p])?0:r-1,o,d):lr(t[p],d));return!r&&o&&f.length>0&&f.push(f[0].slice()),f}function Ie(t,r){return t.feature?a({},t.feature,{geometry:r}):Qi(r)}function Qi(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var hr={toGeoJSON:function(t){return Ie(this,{type:"Point",coordinates:lr(this.getLatLng(),t)})}};Wi.include(hr),ar.include(hr),Vi.include(hr),Vt.include({toGeoJSON:function(t){var r=!zt(this._latlngs),o=Xi(this._latlngs,r?1:0,!1,t);return Ie(this,{type:(r?"Multi":"")+"LineString",coordinates:o})}}),ze.include({toGeoJSON:function(t){var r=!zt(this._latlngs),o=r&&!zt(this._latlngs[0]),d=Xi(this._latlngs,o?2:r?1:0,!0,t);return r||(d=[d]),Ie(this,{type:(o?"Multi":"")+"Polygon",coordinates:d})}}),Ce.include({toMultiPoint:function(t){var r=[];return this.eachLayer(function(o){r.push(o.toGeoJSON(t).geometry.coordinates)}),Ie(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(t){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(t);var o=r==="GeometryCollection",d=[];return this.eachLayer(function(f){if(f.toGeoJSON){var p=f.toGeoJSON(t);if(o)d.push(p.geometry);else{var b=Qi(p);b.type==="FeatureCollection"?d.push.apply(d,b.features):d.push(b)}}}),o?Ie(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}}});function ha(t,r){return new Jt(t,r)}var _f=ha,Yi=Rt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,r,o){this._url=t,this._bounds=ct(r),S(this,o)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(H(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){rt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ae(this._image),this},bringToBack:function(){return this._map&&Le(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=ct(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",r=this._image=t?this._url:V("img");if(H(r,"leaflet-image-layer"),this._zoomAnimated&&H(r,"leaflet-zoom-animated"),this.options.className&&H(r,this.options.className),r.onselectstart=_,r.onmousemove=_,r.onload=h(this.fire,this,"load"),r.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(t){var r=this._map.getZoomScale(t.zoom),o=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;he(this._image,o,r)},_reset:function(){var t=this._image,r=new nt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),o=r.getSize();dt(t,r.min),t.style.width=o.x+"px",t.style.height=o.y+"px"},_updateOpacity:function(){Tt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),gf=function(t,r,o){return new Yi(t,r,o)},ca=Yi.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",r=this._image=t?this._url:V("video");if(H(r,"leaflet-image-layer"),this._zoomAnimated&&H(r,"leaflet-zoom-animated"),this.options.className&&H(r,this.options.className),r.onselectstart=_,r.onmousemove=_,r.onloadeddata=h(this.fire,this,"load"),t){for(var o=r.getElementsByTagName("source"),d=[],f=0;f<o.length;f++)d.push(o[f].src);this._url=o.length>0?d:[r.src];return}z(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var p=0;p<this._url.length;p++){var b=V("source");b.src=this._url[p],r.appendChild(b)}}});function vf(t,r,o){return new ca(t,r,o)}var da=Yi.extend({_initImage:function(){var t=this._image=this._url;H(t,"leaflet-image-layer"),this._zoomAnimated&&H(t,"leaflet-zoom-animated"),this.options.className&&H(t,this.options.className),t.onselectstart=_,t.onmousemove=_}});function bf(t,r,o){return new da(t,r,o)}var jt=Rt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,r){t&&(t instanceof Y||z(t))?(this._latlng=$(t),S(this,r)):(S(this,t),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Tt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Tt(this._container,1),this.bringToFront(),this.options.interactive&&(H(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Tt(this._container,0),this._removeTimeout=setTimeout(h(rt,void 0,this._container),200)):rt(this._container),this.options.interactive&&(lt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=$(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ae(this._container),this},bringToBack:function(){return this._map&&Le(this._container),this},_prepareOpen:function(t){var r=this._source;if(!r._map)return!1;if(r instanceof Wt){r=null;var o=this._source._layers;for(var d in o)if(o[d]._map){r=o[d];break}if(!r)return!1;this._source=r}if(!t)if(r.getCenter)t=r.getCenter();else if(r.getLatLng)t=r.getLatLng();else if(r.getBounds)t=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")t.innerHTML=r;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),r=q(this.options.offset),o=this._getAnchor();this._zoomAnimated?dt(this._container,t.add(o)):r=r.add(t).add(o);var d=this._containerBottom=-r.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=d+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});W.include({_initOverlay:function(t,r,o,d){var f=r;return f instanceof t||(f=new t(d).setContent(r)),o&&f.setLatLng(o),f}}),Rt.include({_initOverlay:function(t,r,o,d){var f=o;return f instanceof t?(S(f,d),f._source=this):(f=r&&!d?r:new t(d,this),f.setContent(o)),f}});var tn=jt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,jt.prototype.openOn.call(this,t)},onAdd:function(t){jt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof se||this._source.on("preclick",de))},onRemove:function(t){jt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof se||this._source.off("preclick",de))},getEvents:function(){var t=jt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",r=this._container=V("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),o=this._wrapper=V("div",t+"-content-wrapper",r);if(this._contentNode=V("div",t+"-content",o),ui(r),Qn(this._contentNode),Z(r,"contextmenu",de),this._tipContainer=V("div",t+"-tip-container",r),this._tip=V("div",t+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=V("a",t+"-close-button",r);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',Z(d,"click",function(f){_t(f),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,r=t.style;r.width="",r.whiteSpace="nowrap";var o=t.offsetWidth;o=Math.min(o,this.options.maxWidth),o=Math.max(o,this.options.minWidth),r.width=o+1+"px",r.whiteSpace="",r.height="";var d=t.offsetHeight,f=this.options.maxHeight,p="leaflet-popup-scrolled";f&&d>f?(r.height=f+"px",H(t,p)):lt(t,p),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),o=this._getAnchor();dt(this._container,r.add(o))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,r=parseInt(li(this._container,"marginBottom"),10)||0,o=this._container.offsetHeight+r,d=this._containerWidth,f=new D(this._containerLeft,-o-this._containerBottom);f._add(ce(this._container));var p=t.layerPointToContainerPoint(f),b=q(this.options.autoPanPadding),y=q(this.options.autoPanPaddingTopLeft||b),M=q(this.options.autoPanPaddingBottomRight||b),k=t.getSize(),N=0,B=0;p.x+d+M.x>k.x&&(N=p.x+d-k.x+M.x),p.x-N-y.x<0&&(N=p.x-y.x),p.y+o+M.y>k.y&&(B=p.y+o-k.y+M.y),p.y-B-y.y<0&&(B=p.y-y.y),(N||B)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([N,B]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),yf=function(t,r){return new tn(t,r)};W.mergeOptions({closePopupOnClick:!0}),W.include({openPopup:function(t,r,o){return this._initOverlay(tn,t,r,o).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),Rt.include({bindPopup:function(t,r){return this._popup=this._initOverlay(tn,this._popup,t,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Wt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){ue(t);var r=t.layer||t.target;if(this._popup._source===r&&!(r instanceof se)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=r,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var en=jt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){jt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){jt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=jt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",r=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=V("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var r,o,d=this._map,f=this._container,p=d.latLngToContainerPoint(d.getCenter()),b=d.layerPointToContainerPoint(t),y=this.options.direction,M=f.offsetWidth,k=f.offsetHeight,N=q(this.options.offset),B=this._getAnchor();y==="top"?(r=M/2,o=k):y==="bottom"?(r=M/2,o=0):y==="center"?(r=M/2,o=k/2):y==="right"?(r=0,o=k/2):y==="left"?(r=M,o=k/2):b.x<p.x?(y="right",r=0,o=k/2):(y="left",r=M+(N.x+B.x)*2,o=k/2),t=t.subtract(q(r,o,!0)).add(N).add(B),lt(f,"leaflet-tooltip-right"),lt(f,"leaflet-tooltip-left"),lt(f,"leaflet-tooltip-top"),lt(f,"leaflet-tooltip-bottom"),H(f,"leaflet-tooltip-"+y),dt(f,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Tt(this._container,t)},_animateZoom:function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(r)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),wf=function(t,r){return new en(t,r)};W.include({openTooltip:function(t,r,o){return this._initOverlay(en,t,r,o).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Rt.include({bindTooltip:function(t,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(en,this._tooltip,t,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var r=t?"off":"on",o={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?o.add=this._openTooltip:(o.mouseover=this._openTooltip,o.mouseout=this.closeTooltip,o.click=this._openTooltip,this._map?this._addFocusListeners():o.add=this._addFocusListeners),this._tooltip.options.sticky&&(o.mousemove=this._moveTooltip),this[r](o),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Wt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var r=typeof t.getElement=="function"&&t.getElement();r&&(Z(r,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),Z(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var r=typeof t.getElement=="function"&&t.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var r=t.latlng,o,d;this._tooltip.options.sticky&&t.originalEvent&&(o=this._map.mouseEventToContainerPoint(t.originalEvent),d=this._map.containerPointToLayerPoint(o),r=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(r)}});var ua=Te.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var r=t&&t.tagName==="DIV"?t:document.createElement("div"),o=this.options;if(o.html instanceof Element?(Di(r),r.appendChild(o.html)):r.innerHTML=o.html!==!1?o.html:"",o.bgPos){var d=q(o.bgPos);r.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function xf(t){return new ua(t)}Te.Default=mi;var _i=Rt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:O.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){S(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),rt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ae(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Le(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof D?t:new D(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var r=this.getPane().children,o=-t(-1/0,1/0),d=0,f=r.length,p;d<f;d++)p=r[d].style.zIndex,r[d]!==this._container&&p&&(o=t(o,+p));isFinite(o)&&(this.options.zIndex=o+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!O.ielt9){Tt(this._container,this.options.opacity);var t=+new Date,r=!1,o=!1;for(var d in this._tiles){var f=this._tiles[d];if(!(!f.current||!f.loaded)){var p=Math.min(1,(t-f.loaded)/200);Tt(f.el,p),p<1?r=!0:(f.active?o=!0:this._onOpaqueTile(f),f.active=!0)}}o&&!this._noPrune&&this._pruneTiles(),r&&(ht(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=V("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,r=this.options.maxZoom;if(t!==void 0){for(var o in this._levels)o=Number(o),this._levels[o].el.children.length||o===t?(this._levels[o].el.style.zIndex=r-Math.abs(t-o),this._onUpdateLevel(o)):(rt(this._levels[o].el),this._removeTilesAtZoom(o),this._onRemoveLevel(o),delete this._levels[o]);var d=this._levels[t],f=this._map;return d||(d=this._levels[t]={},d.el=V("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=r,d.origin=f.project(f.unproject(f.getPixelOrigin()),t).round(),d.zoom=t,this._setZoomTransform(d,f.getCenter(),f.getZoom()),_(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var t,r,o=this._map.getZoom();if(o>this.options.maxZoom||o<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)r=this._tiles[t],r.retain=r.current;for(t in this._tiles)if(r=this._tiles[t],r.current&&!r.active){var d=r.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var r in this._tiles)this._tiles[r].coords.z===t&&this._removeTile(r)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)rt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,r,o,d){var f=Math.floor(t/2),p=Math.floor(r/2),b=o-1,y=new D(+f,+p);y.z=+b;var M=this._tileCoordsToKey(y),k=this._tiles[M];return k&&k.active?(k.retain=!0,!0):(k&&k.loaded&&(k.retain=!0),b>d?this._retainParent(f,p,b,d):!1)},_retainChildren:function(t,r,o,d){for(var f=2*t;f<2*t+2;f++)for(var p=2*r;p<2*r+2;p++){var b=new D(f,p);b.z=o+1;var y=this._tileCoordsToKey(b),M=this._tiles[y];if(M&&M.active){M.retain=!0;continue}else M&&M.loaded&&(M.retain=!0);o+1<d&&this._retainChildren(f,p,o+1,d)}},_resetView:function(t){var r=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var r=this.options;return r.minNativeZoom!==void 0&&t<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<t?r.maxNativeZoom:t},_setView:function(t,r,o,d){var f=Math.round(r);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var p=this.options.updateWhenZooming&&f!==this._tileZoom;(!d||p)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(t),o||this._pruneTiles(),this._noPrune=!!o),this._setZoomTransforms(t,r)},_setZoomTransforms:function(t,r){for(var o in this._levels)this._setZoomTransform(this._levels[o],t,r)},_setZoomTransform:function(t,r,o){var d=this._map.getZoomScale(o,t.zoom),f=t.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(r,o)).round();O.any3d?he(t.el,f,d):dt(t.el,f)},_resetGrid:function(){var t=this._map,r=t.options.crs,o=this._tileSize=this.getTileSize(),d=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,r.wrapLng[0]],d).x/o.x),Math.ceil(t.project([0,r.wrapLng[1]],d).x/o.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([r.wrapLat[0],0],d).y/o.x),Math.ceil(t.project([r.wrapLat[1],0],d).y/o.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var r=this._map,o=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),d=r.getZoomScale(o,this._tileZoom),f=r.project(t,this._tileZoom).floor(),p=r.getSize().divideBy(d*2);return new nt(f.subtract(p),f.add(p))},_update:function(t){var r=this._map;if(r){var o=this._clampZoom(r.getZoom());if(t===void 0&&(t=r.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(t),f=this._pxBoundsToTileRange(d),p=f.getCenter(),b=[],y=this.options.keepBuffer,M=new nt(f.getBottomLeft().subtract([y,-y]),f.getTopRight().add([y,-y]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var k in this._tiles){var N=this._tiles[k].coords;(N.z!==this._tileZoom||!M.contains(new D(N.x,N.y)))&&(this._tiles[k].current=!1)}if(Math.abs(o-this._tileZoom)>1){this._setView(t,o);return}for(var B=f.min.y;B<=f.max.y;B++)for(var U=f.min.x;U<=f.max.x;U++){var bt=new D(U,B);if(bt.z=this._tileZoom,!!this._isValidTile(bt)){var ft=this._tiles[this._tileCoordsToKey(bt)];ft?ft.current=!0:b.push(bt)}}if(b.sort(function(kt,Oe){return kt.distanceTo(p)-Oe.distanceTo(p)}),b.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var It=document.createDocumentFragment();for(U=0;U<b.length;U++)this._addTile(b[U],It);this._level.el.appendChild(It)}}}},_isValidTile:function(t){var r=this._map.options.crs;if(!r.infinite){var o=this._globalTileRange;if(!r.wrapLng&&(t.x<o.min.x||t.x>o.max.x)||!r.wrapLat&&(t.y<o.min.y||t.y>o.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(t);return ct(this.options.bounds).overlaps(d)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var r=this._map,o=this.getTileSize(),d=t.scaleBy(o),f=d.add(o),p=r.unproject(d,t.z),b=r.unproject(f,t.z);return[p,b]},_tileCoordsToBounds:function(t){var r=this._tileCoordsToNwSe(t),o=new Pt(r[0],r[1]);return this.options.noWrap||(o=this._map.wrapLatLngBounds(o)),o},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var r=t.split(":"),o=new D(+r[0],+r[1]);return o.z=+r[2],o},_removeTile:function(t){var r=this._tiles[t];r&&(rt(r.el),delete this._tiles[t],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){H(t,"leaflet-tile");var r=this.getTileSize();t.style.width=r.x+"px",t.style.height=r.y+"px",t.onselectstart=_,t.onmousemove=_,O.ielt9&&this.options.opacity<1&&Tt(t,this.options.opacity)},_addTile:function(t,r){var o=this._getTilePos(t),d=this._tileCoordsToKey(t),f=this.createTile(this._wrapCoords(t),h(this._tileReady,this,t));this._initTile(f),this.createTile.length<2&&Q(h(this._tileReady,this,t,null,f)),dt(f,o),this._tiles[d]={el:f,coords:t,current:!0},r.appendChild(f),this.fire("tileloadstart",{tile:f,coords:t})},_tileReady:function(t,r,o){r&&this.fire("tileerror",{error:r,tile:o,coords:t});var d=this._tileCoordsToKey(t);o=this._tiles[d],o&&(o.loaded=+new Date,this._map._fadeAnimated?(Tt(o.el,0),ht(this._fadeFrame),this._fadeFrame=Q(this._updateOpacity,this)):(o.active=!0,this._pruneTiles()),r||(H(o.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:o.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),O.ielt9||!this._map._fadeAnimated?Q(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var r=new D(this._wrapX?v(t.x,this._wrapX):t.x,this._wrapY?v(t.y,this._wrapY):t.y);return r.z=t.z,r},_pxBoundsToTileRange:function(t){var r=this.getTileSize();return new nt(t.min.unscaleBy(r).floor(),t.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Mf(t){return new _i(t)}var Ne=_i.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,r){this._url=t,r=S(this,r),r.detectRetina&&O.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,r){return this._url===t&&r===void 0&&(r=!0),this._url=t,r||this.redraw(),this},createTile:function(t,r){var o=document.createElement("img");return Z(o,"load",h(this._tileOnLoad,this,r,o)),Z(o,"error",h(this._tileOnError,this,r,o)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(o.referrerPolicy=this.options.referrerPolicy),o.alt="",o.src=this.getTileUrl(t),o},getTileUrl:function(t){var r={r:O.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var o=this._globalTileRange.max.y-t.y;this.options.tms&&(r.y=o),r["-y"]=o}return E(this._url,a(r,this.options))},_tileOnLoad:function(t,r){O.ielt9?setTimeout(h(t,this,null,r),0):t(null,r)},_tileOnError:function(t,r,o){var d=this.options.errorTileUrl;d&&r.getAttribute("src")!==d&&(r.src=d),t(o,r)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,r=this.options.maxZoom,o=this.options.zoomReverse,d=this.options.zoomOffset;return o&&(t=r-t),t+d},_getSubdomain:function(t){var r=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var t,r;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(r=this._tiles[t].el,r.onload=_,r.onerror=_,!r.complete)){r.src=j;var o=this._tiles[t].coords;rt(r),delete this._tiles[t],this.fire("tileabort",{tile:r,coords:o})}},_removeTile:function(t){var r=this._tiles[t];if(r)return r.el.setAttribute("src",j),_i.prototype._removeTile.call(this,t)},_tileReady:function(t,r,o){if(!(!this._map||o&&o.getAttribute("src")===j))return _i.prototype._tileReady.call(this,t,r,o)}});function fa(t,r){return new Ne(t,r)}var pa=Ne.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,r){this._url=t;var o=a({},this.defaultWmsParams);for(var d in r)d in this.options||(o[d]=r[d]);r=S(this,r);var f=r.detectRetina&&O.retina?2:1,p=this.getTileSize();o.width=p.x*f,o.height=p.y*f,this.wmsParams=o},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,Ne.prototype.onAdd.call(this,t)},getTileUrl:function(t){var r=this._tileCoordsToNwSe(t),o=this._crs,d=Et(o.project(r[0]),o.project(r[1])),f=d.min,p=d.max,b=(this._wmsVersion>=1.3&&this._crs===aa?[f.y,f.x,p.y,p.x]:[f.x,f.y,p.x,p.y]).join(","),y=Ne.prototype.getTileUrl.call(this,t);return y+P(this.wmsParams,y,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+b},setParams:function(t,r){return a(this.wmsParams,t),r||this.redraw(),this}});function Sf(t,r){return new pa(t,r)}Ne.WMS=pa,fa.wms=Sf;var Kt=Rt.extend({options:{padding:.1},initialize:function(t){S(this,t),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),H(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,r){var o=this._map.getZoomScale(r,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,r),p=d.multiplyBy(-o).add(f).subtract(this._map._getNewPixelOrigin(t,r));O.any3d?he(this._container,p,o):dt(this._container,p)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,r=this._map.getSize(),o=this._map.containerPointToLayerPoint(r.multiplyBy(-t)).round();this._bounds=new nt(o,o.add(r.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ma=Kt.extend({options:{tolerance:0},getEvents:function(){var t=Kt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Kt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Z(t,"mousemove",this._onMouseMove,this),Z(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Z(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){ht(this._redrawRequest),delete this._ctx,rt(this._container),tt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var r in this._layers)t=this._layers[r],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kt.prototype._update.call(this);var t=this._bounds,r=this._container,o=t.getSize(),d=O.retina?2:1;dt(r,t.min),r.width=d*o.x,r.height=d*o.y,r.style.width=o.x+"px",r.style.height=o.y+"px",O.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Kt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[u(t)]=t;var r=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var r=t._order,o=r.next,d=r.prev;o?o.prev=d:this._drawLast=d,d?d.next=o:this._drawFirst=o,delete t._order,delete this._layers[u(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var r=t.options.dashArray.split(/[, ]+/),o=[],d,f;for(f=0;f<r.length;f++){if(d=Number(r[f]),isNaN(d))return;o.push(d)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Q(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var r=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new nt,this._redrawBounds.extend(t._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(t._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var r=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,r=this._redrawBounds;if(this._ctx.save(),r){var o=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,o.x,o.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)t=d.layer,(!r||t._pxBounds&&t._pxBounds.intersects(r))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,r){if(this._drawing){var o,d,f,p,b=t._parts,y=b.length,M=this._ctx;if(y){for(M.beginPath(),o=0;o<y;o++){for(d=0,f=b[o].length;d<f;d++)p=b[o][d],M[d?"lineTo":"moveTo"](p.x,p.y);r&&M.closePath()}this._fillStroke(M,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var r=t._point,o=this._ctx,d=Math.max(Math.round(t._radius),1),f=(Math.max(Math.round(t._radiusY),1)||d)/d;f!==1&&(o.save(),o.scale(1,f)),o.beginPath(),o.arc(r.x,r.y/f,d,0,Math.PI*2,!1),f!==1&&o.restore(),this._fillStroke(o,t)}},_fillStroke:function(t,r){var o=r.options;o.fill&&(t.globalAlpha=o.fillOpacity,t.fillStyle=o.fillColor||o.color,t.fill(o.fillRule||"evenodd")),o.stroke&&o.weight!==0&&(t.setLineDash&&t.setLineDash(r.options&&r.options._dashArray||[]),t.globalAlpha=o.opacity,t.lineWidth=o.weight,t.strokeStyle=o.color,t.lineCap=o.lineCap,t.lineJoin=o.lineJoin,t.stroke())},_onClick:function(t){for(var r=this._map.mouseEventToLayerPoint(t),o,d,f=this._drawFirst;f;f=f.next)o=f.layer,o.options.interactive&&o._containsPoint(r)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(o))&&(d=o);this._fireEvent(d?[d]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,r)}},_handleMouseOut:function(t){var r=this._hoveredLayer;r&&(lt(this._container,"leaflet-interactive"),this._fireEvent([r],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,r){if(!this._mouseHoverThrottled){for(var o,d,f=this._drawFirst;f;f=f.next)o=f.layer,o.options.interactive&&o._containsPoint(r)&&(d=o);d!==this._hoveredLayer&&(this._handleMouseOut(t),d&&(H(this._container,"leaflet-interactive"),this._fireEvent([d],t,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,r,o){this._map._fireDOMEvent(r,o||r.type,t)},_bringToFront:function(t){var r=t._order;if(r){var o=r.next,d=r.prev;if(o)o.prev=d;else return;d?d.next=o:o&&(this._drawFirst=o),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(t)}},_bringToBack:function(t){var r=t._order;if(r){var o=r.next,d=r.prev;if(d)d.next=o;else return;o?o.prev=d:d&&(this._drawLast=d),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(t)}}});function _a(t){return O.canvas?new ma(t):null}var gi=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Ef={_initContainer:function(){this._container=V("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Kt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var r=t._container=gi("shape");H(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",t._path=gi("path"),r.appendChild(t._path),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){var r=t._container;this._container.appendChild(r),t.options.interactive&&t.addInteractiveTarget(r)},_removePath:function(t){var r=t._container;rt(r),t.removeInteractiveTarget(r),delete this._layers[u(t)]},_updateStyle:function(t){var r=t._stroke,o=t._fill,d=t.options,f=t._container;f.stroked=!!d.stroke,f.filled=!!d.fill,d.stroke?(r||(r=t._stroke=gi("stroke")),f.appendChild(r),r.weight=d.weight+"px",r.color=d.color,r.opacity=d.opacity,d.dashArray?r.dashStyle=z(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=d.lineCap.replace("butt","flat"),r.joinstyle=d.lineJoin):r&&(f.removeChild(r),t._stroke=null),d.fill?(o||(o=t._fill=gi("fill")),f.appendChild(o),o.color=d.fillColor||d.color,o.opacity=d.fillOpacity):o&&(f.removeChild(o),t._fill=null)},_updateCircle:function(t){var r=t._point.round(),o=Math.round(t._radius),d=Math.round(t._radiusY||o);this._setPath(t,t._empty()?"M0 0":"AL "+r.x+","+r.y+" "+o+","+d+" 0,"+65535*360)},_setPath:function(t,r){t._path.v=r},_bringToFront:function(t){Ae(t._container)},_bringToBack:function(t){Le(t._container)}},nn=O.vml?gi:ys,vi=Kt.extend({_initContainer:function(){this._container=nn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=nn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){rt(this._container),tt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kt.prototype._update.call(this);var t=this._bounds,r=t.getSize(),o=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,o.setAttribute("width",r.x),o.setAttribute("height",r.y)),dt(o,t.min),o.setAttribute("viewBox",[t.min.x,t.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(t){var r=t._path=nn("path");t.options.className&&H(r,t.options.className),t.options.interactive&&H(r,"leaflet-interactive"),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){rt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[u(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var r=t._path,o=t.options;r&&(o.stroke?(r.setAttribute("stroke",o.color),r.setAttribute("stroke-opacity",o.opacity),r.setAttribute("stroke-width",o.weight),r.setAttribute("stroke-linecap",o.lineCap),r.setAttribute("stroke-linejoin",o.lineJoin),o.dashArray?r.setAttribute("stroke-dasharray",o.dashArray):r.removeAttribute("stroke-dasharray"),o.dashOffset?r.setAttribute("stroke-dashoffset",o.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),o.fill?(r.setAttribute("fill",o.fillColor||o.color),r.setAttribute("fill-opacity",o.fillOpacity),r.setAttribute("fill-rule",o.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(t,r){this._setPath(t,ws(t._parts,r))},_updateCircle:function(t){var r=t._point,o=Math.max(Math.round(t._radius),1),d=Math.max(Math.round(t._radiusY),1)||o,f="a"+o+","+d+" 0 1,0 ",p=t._empty()?"M0 0":"M"+(r.x-o)+","+r.y+f+o*2+",0 "+f+-o*2+",0 ";this._setPath(t,p)},_setPath:function(t,r){t._path.setAttribute("d",r)},_bringToFront:function(t){Ae(t._path)},_bringToBack:function(t){Le(t._path)}});O.vml&&vi.include(Ef);function ga(t){return O.svg||O.vml?new vi(t):null}W.include({getRenderer:function(t){var r=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var r=this._paneRenderers[t];return r===void 0&&(r=this._createRenderer({pane:t}),this._paneRenderers[t]=r),r},_createRenderer:function(t){return this.options.preferCanvas&&_a(t)||ga(t)}});var va=ze.extend({initialize:function(t,r){ze.prototype.initialize.call(this,this._boundsToLatLngs(t),r)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=ct(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Pf(t,r){return new va(t,r)}vi.create=nn,vi.pointsToPath=ws,Jt.geometryToLayer=Ji,Jt.coordsToLatLng=or,Jt.coordsToLatLngs=Ki,Jt.latLngToCoords=lr,Jt.latLngsToCoords=Xi,Jt.getFeature=Ie,Jt.asFeature=Qi,W.mergeOptions({boxZoom:!0});var ba=Zt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Z(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){tt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){rt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),hi(),Hn(),this._startPoint=this._map.mouseEventToContainerPoint(t),Z(document,{contextmenu:ue,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=V("div","leaflet-zoom-box",this._container),H(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var r=new nt(this._point,this._startPoint),o=r.getSize();dt(this._box,r.min),this._box.style.width=o.x+"px",this._box.style.height=o.y+"px"},_finish:function(){this._moved&&(rt(this._box),lt(this._container,"leaflet-crosshair")),ci(),Un(),tt(document,{contextmenu:ue,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var r=new Pt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});W.addInitHook("addHandler","boxZoom",ba),W.mergeOptions({doubleClickZoom:!0});var ya=Zt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var r=this._map,o=r.getZoom(),d=r.options.zoomDelta,f=t.originalEvent.shiftKey?o-d:o+d;r.options.doubleClickZoom==="center"?r.setZoom(f):r.setZoomAround(t.containerPoint,f)}});W.addInitHook("addHandler","doubleClickZoom",ya),W.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var wa=Zt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new re(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}H(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){lt(this._map._container,"leaflet-grab"),lt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=ct(this._map.options.maxBounds);this._offsetLimit=Et(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var r=this._lastTime=+new Date,o=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(o),this._times.push(r),this._prunePositions(r)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,r){return t-(t-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;t.x<r.min.x&&(t.x=this._viscousLimit(t.x,r.min.x)),t.y<r.min.y&&(t.y=this._viscousLimit(t.y,r.min.y)),t.x>r.max.x&&(t.x=this._viscousLimit(t.x,r.max.x)),t.y>r.max.y&&(t.y=this._viscousLimit(t.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,r=Math.round(t/2),o=this._initialWorldOffset,d=this._draggable._newPos.x,f=(d-r+o)%t+r-o,p=(d+r+o)%t-r-o,b=Math.abs(f+o)<Math.abs(p+o)?f:p;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=b},_onDragEnd:function(t){var r=this._map,o=r.options,d=!o.inertia||t.noInertia||this._times.length<2;if(r.fire("dragend",t),d)r.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),p=(this._lastTime-this._times[0])/1e3,b=o.easeLinearity,y=f.multiplyBy(b/p),M=y.distanceTo([0,0]),k=Math.min(o.inertiaMaxSpeed,M),N=y.multiplyBy(k/M),B=k/(o.inertiaDeceleration*b),U=N.multiplyBy(-B/2).round();!U.x&&!U.y?r.fire("moveend"):(U=r._limitOffset(U,r.options.maxBounds),Q(function(){r.panBy(U,{duration:B,easeLinearity:b,noMoveStart:!0,animate:!0})}))}}});W.addInitHook("addHandler","dragging",wa),W.mergeOptions({keyboard:!0,keyboardPanDelta:80});var xa=Zt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Z(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),tt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,r=document.documentElement,o=t.scrollTop||r.scrollTop,d=t.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(d,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var r=this._panKeys={},o=this.keyCodes,d,f;for(d=0,f=o.left.length;d<f;d++)r[o.left[d]]=[-1*t,0];for(d=0,f=o.right.length;d<f;d++)r[o.right[d]]=[t,0];for(d=0,f=o.down.length;d<f;d++)r[o.down[d]]=[0,t];for(d=0,f=o.up.length;d<f;d++)r[o.up[d]]=[0,-1*t]},_setZoomDelta:function(t){var r=this._zoomKeys={},o=this.keyCodes,d,f;for(d=0,f=o.zoomIn.length;d<f;d++)r[o.zoomIn[d]]=t;for(d=0,f=o.zoomOut.length;d<f;d++)r[o.zoomOut[d]]=-t},_addHooks:function(){Z(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){tt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var r=t.keyCode,o=this._map,d;if(r in this._panKeys){if(!o._panAnim||!o._panAnim._inProgress)if(d=this._panKeys[r],t.shiftKey&&(d=q(d).multiplyBy(3)),o.options.maxBounds&&(d=o._limitOffset(q(d),o.options.maxBounds)),o.options.worldCopyJump){var f=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(d)));o.panTo(f)}else o.panBy(d)}else if(r in this._zoomKeys)o.setZoom(o.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&o._popup&&o._popup.options.closeOnEscapeKey)o.closePopup();else return;ue(t)}}});W.addInitHook("addHandler","keyboard",xa),W.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ma=Zt.extend({addHooks:function(){Z(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){tt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var r=Ws(t),o=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var d=Math.max(o-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),d),ue(t)},_performZoom:function(){var t=this._map,r=t.getZoom(),o=this._map.options.zoomSnap||0;t._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,p=o?Math.ceil(f/o)*o:f,b=t._limitZoom(r+(this._delta>0?p:-p))-r;this._delta=0,this._startTime=null,b&&(t.options.scrollWheelZoom==="center"?t.setZoom(r+b):t.setZoomAround(this._lastMousePos,r+b))}});W.addInitHook("addHandler","scrollWheelZoom",Ma);var kf=600;W.mergeOptions({tapHold:O.touchNative&&O.safari&&O.mobile,tapTolerance:15});var Sa=Zt.extend({addHooks:function(){Z(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){tt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var r=t.touches[0];this._startPos=this._newPos=new D(r.clientX,r.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(Z(document,"touchend",_t),Z(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),kf),Z(document,"touchend touchcancel contextmenu",this._cancel,this),Z(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){tt(document,"touchend",_t),tt(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),tt(document,"touchend touchcancel contextmenu",this._cancel,this),tt(document,"touchmove",this._onMove,this)},_onMove:function(t){var r=t.touches[0];this._newPos=new D(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,r){var o=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});o._simulated=!0,r.target.dispatchEvent(o)}});W.addInitHook("addHandler","tapHold",Sa),W.mergeOptions({touchZoom:O.touch,bounceAtZoomLimits:!0});var Ea=Zt.extend({addHooks:function(){H(this._map._container,"leaflet-touch-zoom"),Z(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){lt(this._map._container,"leaflet-touch-zoom"),tt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var r=this._map;if(!(!t.touches||t.touches.length!==2||r._animatingZoom||this._zooming)){var o=r.mouseEventToContainerPoint(t.touches[0]),d=r.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(o.add(d)._divideBy(2))),this._startDist=o.distanceTo(d),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),Z(document,"touchmove",this._onTouchMove,this),Z(document,"touchend touchcancel",this._onTouchEnd,this),_t(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var r=this._map,o=r.mouseEventToContainerPoint(t.touches[0]),d=r.mouseEventToContainerPoint(t.touches[1]),f=o.distanceTo(d)/this._startDist;if(this._zoom=r.getScaleZoom(f,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&f<1||this._zoom>r.getMaxZoom()&&f>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var p=o._add(d)._divideBy(2)._subtract(this._centerPoint);if(f===1&&p.x===0&&p.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(p),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),ht(this._animRequest);var b=h(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Q(b,this,!0),_t(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ht(this._animRequest),tt(document,"touchmove",this._onTouchMove,this),tt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});W.addInitHook("addHandler","touchZoom",Ea),W.BoxZoom=ba,W.DoubleClickZoom=ya,W.Drag=wa,W.Keyboard=xa,W.ScrollWheelZoom=Ma,W.TapHold=Sa,W.TouchZoom=Ea,n.Bounds=nt,n.Browser=O,n.CRS=$t,n.Canvas=ma,n.Circle=ar,n.CircleMarker=Vi,n.Class=Ft,n.Control=Gt,n.DivIcon=ua,n.DivOverlay=jt,n.DomEvent=Hu,n.DomUtil=Zu,n.Draggable=re,n.Evented=ri,n.FeatureGroup=Wt,n.GeoJSON=Jt,n.GridLayer=_i,n.Handler=Zt,n.Icon=Te,n.ImageOverlay=Yi,n.LatLng=Y,n.LatLngBounds=Pt,n.Layer=Rt,n.LayerGroup=Ce,n.LineUtil=rf,n.Map=W,n.Marker=Wi,n.Mixin=Xu,n.Path=se,n.Point=D,n.PolyUtil=Qu,n.Polygon=ze,n.Polyline=Vt,n.Popup=tn,n.PosAnimation=Vs,n.Projection=sf,n.Rectangle=va,n.Renderer=Kt,n.SVG=vi,n.SVGOverlay=da,n.TileLayer=Ne,n.Tooltip=en,n.Transformation=zn,n.Util=ie,n.VideoOverlay=ca,n.bind=h,n.bounds=Et,n.canvas=_a,n.circle=ff,n.circleMarker=uf,n.control=fi,n.divIcon=xf,n.extend=a,n.featureGroup=hf,n.geoJSON=ha,n.geoJson=_f,n.gridLayer=Mf,n.icon=cf,n.imageOverlay=gf,n.latLng=$,n.latLngBounds=ct,n.layerGroup=lf,n.map=Uu,n.marker=df,n.point=q,n.polygon=mf,n.polyline=pf,n.popup=yf,n.rectangle=Pf,n.setOptions=S,n.stamp=u,n.svg=ga,n.svgOverlay=bf,n.tileLayer=fa,n.tooltip=wf,n.transformation=si,n.version=s,n.videoOverlay=vf;var Af=window.L;n.noConflict=function(){return window.L=Af,this},window.L=n}))})(Re,Re.exports)),Re.exports}var fr=ur();const G=Ca(fr),Ia=La({__proto__:null,default:G},[fr]);function Na(i){i("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),i("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),i("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var e=1;e<=60;++e)i("EPSG:"+(32600+e),"+proj=utm +zone="+e+" +datum=WGS84 +units=m"),i("EPSG:"+(32700+e),"+proj=utm +zone="+e+" +south +datum=WGS84 +units=m");i("EPSG:5041","+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),i("EPSG:5042","+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m"),i.WGS84=i["EPSG:4326"],i["EPSG:3785"]=i["EPSG:3857"],i.GOOGLE=i["EPSG:3857"],i["EPSG:900913"]=i["EPSG:3857"],i["EPSG:102113"]=i["EPSG:3857"]}var ae=1,oe=2,pe=3,Oa=4,sn=5,pr=6378137,Ga=6356752314e-3,mr=.0066943799901413165,Be=484813681109536e-20,A=Math.PI/2,Ra=.16666666666666666,Ba=.04722222222222222,Fa=.022156084656084655,T=1e-10,st=.017453292519943295,yt=57.29577951308232,K=Math.PI/4,Fe=Math.PI*2,at=3.14159265359,wt={};wt.greenwich=0,wt.lisbon=-9.131906111111,wt.paris=2.337229166667,wt.bogota=-74.080916666667,wt.madrid=-3.687938888889,wt.rome=12.452333333333,wt.bern=7.439583333333,wt.jakarta=106.807719444444,wt.ferro=-17.666666666667,wt.brussels=4.367975,wt.stockholm=18.058277777778,wt.athens=23.7163375,wt.oslo=10.722916666667;const qa={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var _r=/[\s_\-\/\(\)]/g;function Xt(i,e){if(i[e])return i[e];for(var n=Object.keys(i),s=e.toLowerCase().replace(_r,""),a=-1,l,h;++a<n.length;)if(l=n[a],h=l.toLowerCase().replace(_r,""),h===s)return i[l]}function an(i){var e={},n=i.split("+").map(function(c){return c.trim()}).filter(function(c){return c}).reduce(function(c,u){var m=u.split("=");return m.push(!0),c[m[0].toLowerCase()]=m[1],c},{}),s,a,l,h={proj:"projName",datum:"datumCode",rf:function(c){e.rf=parseFloat(c)},lat_0:function(c){e.lat0=c*st},lat_1:function(c){e.lat1=c*st},lat_2:function(c){e.lat2=c*st},lat_ts:function(c){e.lat_ts=c*st},lon_0:function(c){e.long0=c*st},lon_1:function(c){e.long1=c*st},lon_2:function(c){e.long2=c*st},alpha:function(c){e.alpha=parseFloat(c)*st},gamma:function(c){e.rectified_grid_angle=parseFloat(c)*st},lonc:function(c){e.longc=c*st},x_0:function(c){e.x0=parseFloat(c)},y_0:function(c){e.y0=parseFloat(c)},k_0:function(c){e.k0=parseFloat(c)},k:function(c){e.k0=parseFloat(c)},a:function(c){e.a=parseFloat(c)},b:function(c){e.b=parseFloat(c)},r:function(c){e.a=e.b=parseFloat(c)},r_a:function(){e.R_A=!0},zone:function(c){e.zone=parseInt(c,10)},south:function(){e.utmSouth=!0},towgs84:function(c){e.datum_params=c.split(",").map(function(u){return parseFloat(u)})},to_meter:function(c){e.to_meter=parseFloat(c)},units:function(c){e.units=c;var u=Xt(qa,c);u&&(e.to_meter=u.to_meter)},from_greenwich:function(c){e.from_greenwich=c*st},pm:function(c){var u=Xt(wt,c);e.from_greenwich=(u||parseFloat(c))*st},nadgrids:function(c){c==="@null"?e.datumCode="none":e.nadgrids=c},axis:function(c){var u="ewnsud";c.length===3&&u.indexOf(c.substr(0,1))!==-1&&u.indexOf(c.substr(1,1))!==-1&&u.indexOf(c.substr(2,1))!==-1&&(e.axis=c)},approx:function(){e.approx=!0},over:function(){e.over=!0}};for(s in n)a=n[s],s in h?(l=h[s],typeof l=="function"?l(a):e[l]=a):e[s]=a;return typeof e.datumCode=="string"&&e.datumCode!=="WGS84"&&(e.datumCode=e.datumCode.toLowerCase()),e.projStr=i,e}class gr{static getId(e){const n=e.find(s=>Array.isArray(s)&&s[0]==="ID");return n&&n.length>=3?{authority:n[1],code:parseInt(n[2],10)}:null}static convertUnit(e,n="unit"){if(!e||e.length<3)return{type:n,name:"unknown",conversion_factor:null};const s=e[1],a=parseFloat(e[2])||null,l=e.find(c=>Array.isArray(c)&&c[0]==="ID"),h=l?{authority:l[1],code:parseInt(l[2],10)}:null;return{type:n,name:s,conversion_factor:a,id:h}}static convertAxis(e){const n=e[1]||"Unknown";let s;const a=n.match(/^\((.)\)$/);if(a){const m=a[1].toUpperCase();if(m==="E")s="east";else if(m==="N")s="north";else if(m==="U")s="up";else throw new Error(`Unknown axis abbreviation: ${m}`)}else s=e[2]?e[2].toLowerCase():"unknown";const l=e.find(m=>Array.isArray(m)&&m[0]==="ORDER"),h=l?parseInt(l[1],10):null,c=e.find(m=>Array.isArray(m)&&(m[0]==="LENGTHUNIT"||m[0]==="ANGLEUNIT"||m[0]==="SCALEUNIT")),u=this.convertUnit(c);return{name:n,direction:s,unit:u,order:h}}static extractAxes(e){return e.filter(n=>Array.isArray(n)&&n[0]==="AXIS").map(n=>this.convertAxis(n)).sort((n,s)=>(n.order||0)-(s.order||0))}static convert(e,n={}){switch(e[0]){case"PROJCRS":n.type="ProjectedCRS",n.name=e[1],n.base_crs=e.find(g=>Array.isArray(g)&&g[0]==="BASEGEOGCRS")?this.convert(e.find(g=>Array.isArray(g)&&g[0]==="BASEGEOGCRS")):null,n.conversion=e.find(g=>Array.isArray(g)&&g[0]==="CONVERSION")?this.convert(e.find(g=>Array.isArray(g)&&g[0]==="CONVERSION")):null;const s=e.find(g=>Array.isArray(g)&&g[0]==="CS");s&&(n.coordinate_system={type:s[1],axis:this.extractAxes(e)});const a=e.find(g=>Array.isArray(g)&&g[0]==="LENGTHUNIT");if(a){const g=this.convertUnit(a);n.coordinate_system.unit=g}n.id=this.getId(e);break;case"BASEGEOGCRS":case"GEOGCRS":n.type="GeographicCRS",n.name=e[1];const l=e.find(g=>Array.isArray(g)&&(g[0]==="DATUM"||g[0]==="ENSEMBLE"));if(l){const g=this.convert(l);l[0]==="ENSEMBLE"?n.datum_ensemble=g:n.datum=g;const w=e.find(x=>Array.isArray(x)&&x[0]==="PRIMEM");w&&w[1]!=="Greenwich"&&(g.prime_meridian={name:w[1],longitude:parseFloat(w[2])})}n.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(e)},n.id=this.getId(e);break;case"DATUM":n.type="GeodeticReferenceFrame",n.name=e[1],n.ellipsoid=e.find(g=>Array.isArray(g)&&g[0]==="ELLIPSOID")?this.convert(e.find(g=>Array.isArray(g)&&g[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":n.type="DatumEnsemble",n.name=e[1],n.members=e.filter(g=>Array.isArray(g)&&g[0]==="MEMBER").map(g=>({type:"DatumEnsembleMember",name:g[1],id:this.getId(g)}));const h=e.find(g=>Array.isArray(g)&&g[0]==="ENSEMBLEACCURACY");h&&(n.accuracy=parseFloat(h[1]));const c=e.find(g=>Array.isArray(g)&&g[0]==="ELLIPSOID");c&&(n.ellipsoid=this.convert(c)),n.id=this.getId(e);break;case"ELLIPSOID":n.type="Ellipsoid",n.name=e[1],n.semi_major_axis=parseFloat(e[2]),n.inverse_flattening=parseFloat(e[3]),e.find(g=>Array.isArray(g)&&g[0]==="LENGTHUNIT")&&this.convert(e.find(g=>Array.isArray(g)&&g[0]==="LENGTHUNIT"),n);break;case"CONVERSION":n.type="Conversion",n.name=e[1],n.method=e.find(g=>Array.isArray(g)&&g[0]==="METHOD")?this.convert(e.find(g=>Array.isArray(g)&&g[0]==="METHOD")):null,n.parameters=e.filter(g=>Array.isArray(g)&&g[0]==="PARAMETER").map(g=>this.convert(g));break;case"METHOD":n.type="Method",n.name=e[1],n.id=this.getId(e);break;case"PARAMETER":n.type="Parameter",n.name=e[1],n.value=parseFloat(e[2]),n.unit=this.convertUnit(e.find(g=>Array.isArray(g)&&(g[0]==="LENGTHUNIT"||g[0]==="ANGLEUNIT"||g[0]==="SCALEUNIT"))),n.id=this.getId(e);break;case"BOUNDCRS":n.type="BoundCRS";const u=e.find(g=>Array.isArray(g)&&g[0]==="SOURCECRS");if(u){const g=u.find(w=>Array.isArray(w));n.source_crs=g?this.convert(g):null}const m=e.find(g=>Array.isArray(g)&&g[0]==="TARGETCRS");if(m){const g=m.find(w=>Array.isArray(w));n.target_crs=g?this.convert(g):null}const v=e.find(g=>Array.isArray(g)&&g[0]==="ABRIDGEDTRANSFORMATION");v?n.transformation=this.convert(v):n.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(n.type="Transformation",n.name=e[1],n.method=e.find(g=>Array.isArray(g)&&g[0]==="METHOD")?this.convert(e.find(g=>Array.isArray(g)&&g[0]==="METHOD")):null,n.parameters=e.filter(g=>Array.isArray(g)&&(g[0]==="PARAMETER"||g[0]==="PARAMETERFILE")).map(g=>{if(g[0]==="PARAMETER")return this.convert(g);if(g[0]==="PARAMETERFILE")return{name:g[1],value:g[2],id:{authority:"EPSG",code:8656}}}),n.parameters.length===7){const g=n.parameters[6];g.name==="Scale difference"&&(g.value=Math.round((g.value-1)*1e12)/1e6)}n.id=this.getId(e);break;case"AXIS":n.coordinate_system||(n.coordinate_system={type:"unspecified",axis:[]}),n.coordinate_system.axis.push(this.convertAxis(e));break;case"LENGTHUNIT":const _=this.convertUnit(e,"LinearUnit");n.coordinate_system&&n.coordinate_system.axis&&n.coordinate_system.axis.forEach(g=>{g.unit||(g.unit=_)}),_.conversion_factor&&_.conversion_factor!==1&&n.semi_major_axis&&(n.semi_major_axis={value:n.semi_major_axis,unit:_});break;default:n.keyword=e[0];break}return n}}class Da extends gr{static convert(e,n={}){return super.convert(e,n),n.coordinate_system&&n.coordinate_system.subtype==="Cartesian"&&delete n.coordinate_system,n.usage&&delete n.usage,n}}class Za extends gr{static convert(e,n={}){super.convert(e,n);const s=e.find(l=>Array.isArray(l)&&l[0]==="CS");s&&(n.coordinate_system={subtype:s[1],axis:this.extractAxes(e)});const a=e.find(l=>Array.isArray(l)&&l[0]==="USAGE");if(a){const l=a.find(u=>Array.isArray(u)&&u[0]==="SCOPE"),h=a.find(u=>Array.isArray(u)&&u[0]==="AREA"),c=a.find(u=>Array.isArray(u)&&u[0]==="BBOX");n.usage={},l&&(n.usage.scope=l[1]),h&&(n.usage.area=h[1]),c&&(n.usage.bbox=c.slice(1))}return n}}function ja(i){return i.find(e=>Array.isArray(e)&&e[0]==="USAGE")?"2019":(i.find(e=>Array.isArray(e)&&e[0]==="CS")||i[0]==="BOUNDCRS"||i[0]==="PROJCRS"||i[0]==="GEOGCRS","2015")}function Ha(i){return(ja(i)==="2019"?Za:Da).convert(i)}function Ua(i){const e=i.toUpperCase();return e.includes("PROJCRS")||e.includes("GEOGCRS")||e.includes("BOUNDCRS")||e.includes("VERTCRS")||e.includes("LENGTHUNIT")||e.includes("ANGLEUNIT")||e.includes("SCALEUNIT")?"WKT2":(e.includes("PROJCS")||e.includes("GEOGCS")||e.includes("LOCAL_CS")||e.includes("VERT_CS")||e.includes("UNIT"),"WKT1")}var qe=1,vr=2,br=3,bi=4,yr=5,on=-1,$a=/\s/,Wa=/[A-Za-z]/,Va=/[A-Za-z84_]/,yi=/[,\]]/,wr=/[\d\.E\-\+]/;function Ht(i){if(typeof i!="string")throw new Error("not a string");this.text=i.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=qe}Ht.prototype.readCharicter=function(){var i=this.text[this.place++];if(this.state!==bi)for(;$a.test(i);){if(this.place>=this.text.length)return;i=this.text[this.place++]}switch(this.state){case qe:return this.neutral(i);case vr:return this.keyword(i);case bi:return this.quoted(i);case yr:return this.afterquote(i);case br:return this.number(i);case on:return}},Ht.prototype.afterquote=function(i){if(i==='"'){this.word+='"',this.state=bi;return}if(yi.test(i)){this.word=this.word.trim(),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in afterquote yet, index '+this.place)},Ht.prototype.afterItem=function(i){if(i===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=qe;return}if(i==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=qe,this.currentObject=this.stack.pop(),this.currentObject||(this.state=on);return}},Ht.prototype.number=function(i){if(wr.test(i)){this.word+=i;return}if(yi.test(i)){this.word=parseFloat(this.word),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in number yet, index '+this.place)},Ht.prototype.quoted=function(i){if(i==='"'){this.state=yr;return}this.word+=i},Ht.prototype.keyword=function(i){if(Va.test(i)){this.word+=i;return}if(i==="["){var e=[];e.push(this.word),this.level++,this.root===null?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,this.state=qe;return}if(yi.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in keyword yet, index '+this.place)},Ht.prototype.neutral=function(i){if(Wa.test(i)){this.word=i,this.state=vr;return}if(i==='"'){this.word="",this.state=bi;return}if(wr.test(i)){this.word=i,this.state=br;return}if(yi.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in neutral yet, index '+this.place)},Ht.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===on)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Ja(i){var e=new Ht(i);return e.output()}function ln(i,e,n){Array.isArray(e)&&(n.unshift(e),e=null);var s=e?{}:i,a=n.reduce(function(l,h){return me(h,l),l},s);e&&(i[e]=a)}function me(i,e){if(!Array.isArray(i)){e[i]=!0;return}var n=i.shift();if(n==="PARAMETER"&&(n=i.shift()),i.length===1){if(Array.isArray(i[0])){e[n]={},me(i[0],e[n]);return}e[n]=i[0];return}if(!i.length){e[n]=!0;return}if(n==="TOWGS84"){e[n]=i;return}if(n==="AXIS"){n in e||(e[n]=[]),e[n].push(i);return}Array.isArray(n)||(e[n]={});var s;switch(n){case"UNIT":case"PRIMEM":case"VERT_DATUM":e[n]={name:i[0].toLowerCase(),convert:i[1]},i.length===3&&me(i[2],e[n]);return;case"SPHEROID":case"ELLIPSOID":e[n]={name:i[0],a:i[1],rf:i[2]},i.length===4&&me(i[3],e[n]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":i[0]=["name",i[0]],ln(e,n,i);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":i[0]=["name",i[0]],ln(e,n,i),e[n].type=n;return;default:for(s=-1;++s<i.length;)if(!Array.isArray(i[s]))return me(i,e[n]);return ln(e,n,i)}}var Ka=.017453292519943295;function Nt(i){return i*Ka}function xr(i){const e=(i.projName||"").toLowerCase().replace(/_/g," ");!i.long0&&i.longc&&(e==="albers conic equal area"||e==="lambert azimuthal equal area")&&(i.long0=i.longc),!i.lat_ts&&i.lat1&&(e==="stereographic south pole"||e==="polar stereographic (variant b)")?(i.lat0=Nt(i.lat1>0?90:-90),i.lat_ts=i.lat1,delete i.lat1):!i.lat_ts&&i.lat0&&(e==="polar stereographic"||e==="polar stereographic (variant a)")&&(i.lat_ts=i.lat0,i.lat0=Nt(i.lat0>0?90:-90),delete i.lat1)}function Mr(i){let e={units:null,to_meter:void 0};return typeof i=="string"?(e.units=i.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.units==="meter"&&(e.to_meter=1)):i&&i.name&&(e.units=i.name.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.to_meter=i.conversion_factor),e}function Sr(i){return typeof i=="object"?i.value*i.unit.conversion_factor:i}function Er(i,e){i.ellipsoid.radius?(e.a=i.ellipsoid.radius,e.rf=0):(e.a=Sr(i.ellipsoid.semi_major_axis),i.ellipsoid.inverse_flattening!==void 0?e.rf=i.ellipsoid.inverse_flattening:i.ellipsoid.semi_major_axis!==void 0&&i.ellipsoid.semi_minor_axis!==void 0&&(e.rf=e.a/(e.a-Sr(i.ellipsoid.semi_minor_axis))))}function wi(i,e={}){return!i||typeof i!="object"?i:i.type==="BoundCRS"?(wi(i.source_crs,e),i.transformation&&(i.transformation.method&&i.transformation.method.name==="NTv2"?e.nadgrids=i.transformation.parameters[0].value:e.datum_params=i.transformation.parameters.map(n=>n.value)),e):(Object.keys(i).forEach(n=>{const s=i[n];if(s!==null)switch(n){case"name":if(e.srsCode)break;e.name=s,e.srsCode=s;break;case"type":s==="GeographicCRS"?e.projName="longlat":s==="ProjectedCRS"&&i.conversion&&i.conversion.method&&(e.projName=i.conversion.method.name);break;case"datum":case"datum_ensemble":s.ellipsoid&&(e.ellps=s.ellipsoid.name,Er(s,e)),s.prime_meridian&&(e.from_greenwich=s.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":e.ellps=s.name,Er(s,e);break;case"prime_meridian":e.long0=(s.longitude||0)*Math.PI/180;break;case"coordinate_system":if(s.axis){if(e.axis=s.axis.map(a=>{const l=a.direction;if(l==="east")return"e";if(l==="north")return"n";if(l==="west")return"w";if(l==="south")return"s";throw new Error(`Unknown axis direction: ${l}`)}).join("")+"u",s.unit){const{units:a,to_meter:l}=Mr(s.unit);e.units=a,e.to_meter=l}else if(s.axis[0]&&s.axis[0].unit){const{units:a,to_meter:l}=Mr(s.axis[0].unit);e.units=a,e.to_meter=l}}break;case"id":s.authority&&s.code&&(e.title=s.authority+":"+s.code);break;case"conversion":s.method&&s.method.name&&(e.projName=s.method.name),s.parameters&&s.parameters.forEach(a=>{const l=a.name.toLowerCase().replace(/\s+/g,"_"),h=a.value;a.unit&&a.unit.conversion_factor?e[l]=h*a.unit.conversion_factor:a.unit==="degree"?e[l]=h*Math.PI/180:e[l]=h});break;case"unit":s.name&&(e.units=s.name.toLowerCase(),e.units==="metre"&&(e.units="meter")),s.conversion_factor&&(e.to_meter=s.conversion_factor);break;case"base_crs":wi(s,e),e.datumCode=s.id?s.id.authority+"_"+s.id.code:s.name;break}}),e.latitude_of_false_origin!==void 0&&(e.lat0=e.latitude_of_false_origin),e.longitude_of_false_origin!==void 0&&(e.long0=e.longitude_of_false_origin),e.latitude_of_standard_parallel!==void 0&&(e.lat0=e.latitude_of_standard_parallel,e.lat1=e.latitude_of_standard_parallel),e.latitude_of_1st_standard_parallel!==void 0&&(e.lat1=e.latitude_of_1st_standard_parallel),e.latitude_of_2nd_standard_parallel!==void 0&&(e.lat2=e.latitude_of_2nd_standard_parallel),e.latitude_of_projection_centre!==void 0&&(e.lat0=e.latitude_of_projection_centre),e.longitude_of_projection_centre!==void 0&&(e.longc=e.longitude_of_projection_centre),e.easting_at_false_origin!==void 0&&(e.x0=e.easting_at_false_origin),e.northing_at_false_origin!==void 0&&(e.y0=e.northing_at_false_origin),e.latitude_of_natural_origin!==void 0&&(e.lat0=e.latitude_of_natural_origin),e.longitude_of_natural_origin!==void 0&&(e.long0=e.longitude_of_natural_origin),e.longitude_of_origin!==void 0&&(e.long0=e.longitude_of_origin),e.false_easting!==void 0&&(e.x0=e.false_easting),e.easting_at_projection_centre&&(e.x0=e.easting_at_projection_centre),e.false_northing!==void 0&&(e.y0=e.false_northing),e.northing_at_projection_centre&&(e.y0=e.northing_at_projection_centre),e.standard_parallel_1!==void 0&&(e.lat1=e.standard_parallel_1),e.standard_parallel_2!==void 0&&(e.lat2=e.standard_parallel_2),e.scale_factor_at_natural_origin!==void 0&&(e.k0=e.scale_factor_at_natural_origin),e.scale_factor_at_projection_centre!==void 0&&(e.k0=e.scale_factor_at_projection_centre),e.scale_factor_on_pseudo_standard_parallel!==void 0&&(e.k0=e.scale_factor_on_pseudo_standard_parallel),e.azimuth!==void 0&&(e.alpha=e.azimuth),e.azimuth_at_projection_centre!==void 0&&(e.alpha=e.azimuth_at_projection_centre),e.angle_from_rectified_to_skew_grid&&(e.rectified_grid_angle=e.angle_from_rectified_to_skew_grid),xr(e),e)}var Xa=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function Qa(i,e){var n=e[0],s=e[1];!(n in i)&&s in i&&(i[n]=i[s],e.length===3&&(i[n]=e[2](i[n])))}function Pr(i){for(var e=Object.keys(i),n=0,s=e.length;n<s;++n){var a=e[n];Xa.indexOf(a)!==-1&&Ya(i[a]),typeof i[a]=="object"&&Pr(i[a])}}function Ya(i){if(i.AUTHORITY){var e=Object.keys(i.AUTHORITY)[0];e&&e in i.AUTHORITY&&(i.title=e+":"+i.AUTHORITY[e])}if(i.type==="GEOGCS"?i.projName="longlat":i.type==="LOCAL_CS"?(i.projName="identity",i.local=!0):typeof i.PROJECTION=="object"?i.projName=Object.keys(i.PROJECTION)[0]:i.projName=i.PROJECTION,i.AXIS){for(var n="",s=0,a=i.AXIS.length;s<a;++s){var l=[i.AXIS[s][0].toLowerCase(),i.AXIS[s][1].toLowerCase()];l[0].indexOf("north")!==-1||(l[0]==="y"||l[0]==="lat")&&l[1]==="north"?n+="n":l[0].indexOf("south")!==-1||(l[0]==="y"||l[0]==="lat")&&l[1]==="south"?n+="s":l[0].indexOf("east")!==-1||(l[0]==="x"||l[0]==="lon")&&l[1]==="east"?n+="e":(l[0].indexOf("west")!==-1||(l[0]==="x"||l[0]==="lon")&&l[1]==="west")&&(n+="w")}n.length===2&&(n+="u"),n.length===3&&(i.axis=n)}i.UNIT&&(i.units=i.UNIT.name.toLowerCase(),i.units==="metre"&&(i.units="meter"),i.UNIT.convert&&(i.type==="GEOGCS"?i.DATUM&&i.DATUM.SPHEROID&&(i.to_meter=i.UNIT.convert*i.DATUM.SPHEROID.a):i.to_meter=i.UNIT.convert));var h=i.GEOGCS;i.type==="GEOGCS"&&(h=i),h&&(h.DATUM?i.datumCode=h.DATUM.name.toLowerCase():i.datumCode=h.name.toLowerCase(),i.datumCode.slice(0,2)==="d_"&&(i.datumCode=i.datumCode.slice(2)),i.datumCode==="new_zealand_1949"&&(i.datumCode="nzgd49"),(i.datumCode==="wgs_1984"||i.datumCode==="world_geodetic_system_1984")&&(i.PROJECTION==="Mercator_Auxiliary_Sphere"&&(i.sphere=!0),i.datumCode="wgs84"),i.datumCode==="belge_1972"&&(i.datumCode="rnb72"),h.DATUM&&h.DATUM.SPHEROID&&(i.ellps=h.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),i.ellps.toLowerCase().slice(0,13)==="international"&&(i.ellps="intl"),i.a=h.DATUM.SPHEROID.a,i.rf=parseFloat(h.DATUM.SPHEROID.rf,10)),h.DATUM&&h.DATUM.TOWGS84&&(i.datum_params=h.DATUM.TOWGS84),~i.datumCode.indexOf("osgb_1936")&&(i.datumCode="osgb36"),~i.datumCode.indexOf("osni_1952")&&(i.datumCode="osni52"),(~i.datumCode.indexOf("tm65")||~i.datumCode.indexOf("geodetic_datum_of_1965"))&&(i.datumCode="ire65"),i.datumCode==="ch1903+"&&(i.datumCode="ch1903"),~i.datumCode.indexOf("israel")&&(i.datumCode="isr93")),i.b&&!isFinite(i.b)&&(i.b=i.a),i.rectified_grid_angle&&(i.rectified_grid_angle=Nt(i.rectified_grid_angle));function c(v){var _=i.to_meter||1;return v*_}var u=function(v){return Qa(i,v)},m=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Nt],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Nt],["x0","false_easting",c],["y0","false_northing",c],["long0","central_meridian",Nt],["lat0","latitude_of_origin",Nt],["lat0","standard_parallel_1",Nt],["lat1","standard_parallel_1",Nt],["lat2","standard_parallel_2",Nt],["azimuth","Azimuth"],["alpha","azimuth",Nt],["srsCode","name"]];m.forEach(u),xr(i)}function xi(i){if(typeof i=="object")return wi(i);const e=Ua(i);var n=Ja(i);if(e==="WKT2"){const l=Ha(n);return wi(l)}var s=n[0],a={};return me(n,a),Pr(a),a[s]}function pt(i){var e=this;if(arguments.length===2){var n=arguments[1];typeof n=="string"?n.charAt(0)==="+"?pt[i]=an(arguments[1]):pt[i]=xi(arguments[1]):n&&typeof n=="object"&&!("projName"in n)?pt[i]=xi(arguments[1]):(pt[i]=n,n||delete pt[i])}else if(arguments.length===1){if(Array.isArray(i))return i.map(function(s){return Array.isArray(s)?pt.apply(e,s):pt(s)});if(typeof i=="string"){if(i in pt)return pt[i]}else"EPSG"in i?pt["EPSG:"+i.EPSG]=i:"ESRI"in i?pt["ESRI:"+i.ESRI]=i:"IAU2000"in i?pt["IAU2000:"+i.IAU2000]=i:console.log(i);return}}Na(pt);function to(i){return typeof i=="string"}function eo(i){return i in pt}function io(i){return i.indexOf("+")!==0&&i.indexOf("[")!==-1||typeof i=="object"&&!("srsCode"in i)}var no=["3857","900913","3785","102113"];function ro(i){var e=Xt(i,"authority");if(e){var n=Xt(e,"epsg");return n&&no.indexOf(n)>-1}}function so(i){var e=Xt(i,"extension");if(e)return Xt(e,"proj4")}function ao(i){return i[0]==="+"}function oo(i){if(to(i)){if(eo(i))return pt[i];if(io(i)){var e=xi(i);if(ro(e))return pt["EPSG:3857"];var n=so(e);return n?an(n):e}if(ao(i))return an(i)}else return"projName"in i?i:xi(i)}function kr(i,e){i=i||{};var n,s;if(!e)return i;for(s in e)n=e[s],n!==void 0&&(i[s]=n);return i}function Bt(i,e,n){var s=i*e;return n/Math.sqrt(1-s*s)}function De(i){return i<0?-1:1}function I(i,e){return e||Math.abs(i)<=at?i:i-De(i)*Fe}function Ot(i,e,n){var s=i*n,a=.5*i;return s=Math.pow((1-s)/(1+s),a),Math.tan(.5*(A-e))/s}function Ze(i,e){for(var n=.5*i,s,a,l=A-2*Math.atan(e),h=0;h<=15;h++)if(s=i*Math.sin(l),a=A-2*Math.atan(e*Math.pow((1-s)/(1+s),n))-l,l+=a,Math.abs(a)<=1e-10)return l;return-9999}function lo(){var i=this.b/this.a;this.es=1-i*i,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Bt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function ho(i){var e=i.x,n=i.y;if(n*yt>90&&n*yt<-90&&e*yt>180&&e*yt<-180)return null;var s,a;if(Math.abs(Math.abs(n)-A)<=T)return null;if(this.sphere)s=this.x0+this.a*this.k0*I(e-this.long0,this.over),a=this.y0+this.a*this.k0*Math.log(Math.tan(K+.5*n));else{var l=Math.sin(n),h=Ot(this.e,n,l);s=this.x0+this.a*this.k0*I(e-this.long0,this.over),a=this.y0-this.a*this.k0*Math.log(h)}return i.x=s,i.y=a,i}function co(i){var e=i.x-this.x0,n=i.y-this.y0,s,a;if(this.sphere)a=A-2*Math.atan(Math.exp(-n/(this.a*this.k0)));else{var l=Math.exp(-n/(this.a*this.k0));if(a=Ze(this.e,l),a===-9999)return null}return s=I(this.long0+e/(this.a*this.k0),this.over),i.x=s,i.y=a,i}var uo=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"];const fo={init:lo,forward:ho,inverse:co,names:uo};function po(){}function Ar(i){return i}var Lr=["longlat","identity"],mo=[fo,{init:po,forward:Ar,inverse:Ar,names:Lr}],le={},_e=[];function Cr(i,e){var n=_e.length;return i.names?(_e[n]=i,i.names.forEach(function(s){le[s.toLowerCase()]=n}),this):(console.log(e),!0)}function Tr(i){return i.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}function _o(i){if(!i)return!1;var e=i.toLowerCase();if(typeof le[e]<"u"&&_e[le[e]]||(e=Tr(e),e in le&&_e[le[e]]))return _e[le[e]]}function go(){mo.forEach(Cr)}const vo={start:go,add:Cr,get:_o};var zr={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"},andrae:{a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"},clrk80:{a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:63558348467e-4,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};const bo=zr.WGS84;function yo(i,e,n,s){var a=i*i,l=e*e,h=(a-l)/a,c=0;s?(i*=1-h*(Ra+h*(Ba+h*Fa)),a=i*i,h=0):c=Math.sqrt(h);var u=(a-l)/l;return{es:h,e:c,ep2:u}}function wo(i,e,n,s,a){if(!i){var l=Xt(zr,s);l||(l=bo),i=l.a,e=l.b,n=l.rf}return n&&!e&&(e=(1-1/n)*i),(n===0||Math.abs(i-e)<T)&&(a=!0,e=i),{a:i,b:e,rf:n,sphere:a}}var Mi={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-8.393,0.749,-10.276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"374,150,588"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"}};for(var xo in Mi){var hn=Mi[xo];hn.datumName&&(Mi[hn.datumName]=hn)}function Mo(i,e,n,s,a,l,h){var c={};return i===void 0||i==="none"?c.datum_type=sn:c.datum_type=Oa,e&&(c.datum_params=e.map(parseFloat),(c.datum_params[0]!==0||c.datum_params[1]!==0||c.datum_params[2]!==0)&&(c.datum_type=ae),c.datum_params.length>3&&(c.datum_params[3]!==0||c.datum_params[4]!==0||c.datum_params[5]!==0||c.datum_params[6]!==0)&&(c.datum_type=oe,c.datum_params[3]*=Be,c.datum_params[4]*=Be,c.datum_params[5]*=Be,c.datum_params[6]=c.datum_params[6]/1e6+1)),h&&(c.datum_type=pe,c.grids=h),c.a=n,c.b=s,c.es=a,c.ep2=l,c}var cn={};function So(i,e,n){return e instanceof ArrayBuffer?Eo(i,e,n):{ready:Po(i,e)}}function Eo(i,e,n){var s=!0;n!==void 0&&n.includeErrorFields===!1&&(s=!1);var a=new DataView(e),l=Lo(a),h=Co(a,l),c=To(a,h,l,s),u={header:h,subgrids:c};return cn[i]=u,u}async function Po(i,e){for(var n=[],s=await e.getImageCount(),a=s-1;a>=0;a--){var l=await e.getImage(a),h=await l.readRasters(),c=h,u=[l.getWidth(),l.getHeight()],m=l.getBoundingBox().map(Ir),v=[l.fileDirectory.ModelPixelScale[0],l.fileDirectory.ModelPixelScale[1]].map(Ir),_=m[0]+(u[0]-1)*v[0],g=m[3]-(u[1]-1)*v[1],w=c[0],x=c[1],S=[];for(let E=u[1]-1;E>=0;E--)for(let z=u[0]-1;z>=0;z--){var P=E*u[0]+z;S.push([-Qt(x[P]),Qt(w[P])])}n.push({del:v,lim:u,ll:[-_,g],cvs:S})}var C={header:{nSubgrids:s},subgrids:n};return cn[i]=C,C}function ko(i){if(i===void 0)return null;var e=i.split(",");return e.map(Ao)}function Ao(i){if(i.length===0)return null;var e=i[0]==="@";return e&&(i=i.slice(1)),i==="null"?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:i,mandatory:!e,grid:cn[i]||null,isNull:!1}}function Ir(i){return i*Math.PI/180}function Qt(i){return i/3600*Math.PI/180}function Lo(i){var e=i.getInt32(8,!1);return e===11?!1:(e=i.getInt32(8,!0),e!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function Co(i,e){return{nFields:i.getInt32(8,e),nSubgridFields:i.getInt32(24,e),nSubgrids:i.getInt32(40,e),shiftType:dn(i,56,64).trim(),fromSemiMajorAxis:i.getFloat64(120,e),fromSemiMinorAxis:i.getFloat64(136,e),toSemiMajorAxis:i.getFloat64(152,e),toSemiMinorAxis:i.getFloat64(168,e)}}function dn(i,e,n){return String.fromCharCode.apply(null,new Uint8Array(i.buffer.slice(e,n)))}function To(i,e,n,s){for(var a=176,l=[],h=0;h<e.nSubgrids;h++){var c=Io(i,a,n),u=No(i,a,c,n,s),m=Math.round(1+(c.upperLongitude-c.lowerLongitude)/c.longitudeInterval),v=Math.round(1+(c.upperLatitude-c.lowerLatitude)/c.latitudeInterval);l.push({ll:[Qt(c.lowerLongitude),Qt(c.lowerLatitude)],del:[Qt(c.longitudeInterval),Qt(c.latitudeInterval)],lim:[m,v],count:c.gridNodeCount,cvs:zo(u)});var _=16;s===!1&&(_=8),a+=176+c.gridNodeCount*_}return l}function zo(i){return i.map(function(e){return[Qt(e.longitudeShift),Qt(e.latitudeShift)]})}function Io(i,e,n){return{name:dn(i,e+8,e+16).trim(),parent:dn(i,e+24,e+24+8).trim(),lowerLatitude:i.getFloat64(e+72,n),upperLatitude:i.getFloat64(e+88,n),lowerLongitude:i.getFloat64(e+104,n),upperLongitude:i.getFloat64(e+120,n),latitudeInterval:i.getFloat64(e+136,n),longitudeInterval:i.getFloat64(e+152,n),gridNodeCount:i.getInt32(e+168,n)}}function No(i,e,n,s,a){var l=e+176,h=16;a===!1&&(h=8);for(var c=[],u=0;u<n.gridNodeCount;u++){var m={latitudeShift:i.getFloat32(l+u*h,s),longitudeShift:i.getFloat32(l+u*h+4,s)};a!==!1&&(m.latitudeAccuracy=i.getFloat32(l+u*h+8,s),m.longitudeAccuracy=i.getFloat32(l+u*h+12,s)),c.push(m)}return c}function Lt(i,e){if(!(this instanceof Lt))return new Lt(i);this.forward=null,this.inverse=null,this.init=null,this.name,this.names=null,this.title,e=e||function(m){if(m)throw m};var n=oo(i);if(typeof n!="object"){e("Could not parse to valid json: "+i);return}var s=Lt.projections.get(n.projName);if(!s){e("Could not get projection name from: "+i);return}if(n.datumCode&&n.datumCode!=="none"){var a=Xt(Mi,n.datumCode);a&&(n.datum_params=n.datum_params||(a.towgs84?a.towgs84.split(","):null),n.ellps=a.ellipse,n.datumName=a.datumName?a.datumName:n.datumCode)}n.k0=n.k0||1,n.axis=n.axis||"enu",n.ellps=n.ellps||"wgs84",n.lat1=n.lat1||n.lat0;var l=wo(n.a,n.b,n.rf,n.ellps,n.sphere),h=yo(l.a,l.b,l.rf,n.R_A),c=ko(n.nadgrids),u=n.datum||Mo(n.datumCode,n.datum_params,l.a,l.b,h.es,h.ep2,c);kr(this,n),kr(this,s),this.a=l.a,this.b=l.b,this.rf=l.rf,this.sphere=l.sphere,this.es=h.es,this.e=h.e,this.ep2=h.ep2,this.datum=u,"init"in this&&typeof this.init=="function"&&this.init(),e(null,this)}Lt.projections=vo,Lt.projections.start();function Oo(i,e){return i.datum_type!==e.datum_type||i.a!==e.a||Math.abs(i.es-e.es)>5e-11?!1:i.datum_type===ae?i.datum_params[0]===e.datum_params[0]&&i.datum_params[1]===e.datum_params[1]&&i.datum_params[2]===e.datum_params[2]:i.datum_type===oe?i.datum_params[0]===e.datum_params[0]&&i.datum_params[1]===e.datum_params[1]&&i.datum_params[2]===e.datum_params[2]&&i.datum_params[3]===e.datum_params[3]&&i.datum_params[4]===e.datum_params[4]&&i.datum_params[5]===e.datum_params[5]&&i.datum_params[6]===e.datum_params[6]:!0}function Nr(i,e,n){var s=i.x,a=i.y,l=i.z?i.z:0,h,c,u,m;if(a<-A&&a>-1.001*A)a=-A;else if(a>A&&a<1.001*A)a=A;else{if(a<-A)return{x:-1/0,y:-1/0,z:i.z};if(a>A)return{x:1/0,y:1/0,z:i.z}}return s>Math.PI&&(s-=2*Math.PI),c=Math.sin(a),m=Math.cos(a),u=c*c,h=n/Math.sqrt(1-e*u),{x:(h+l)*m*Math.cos(s),y:(h+l)*m*Math.sin(s),z:(h*(1-e)+l)*c}}function Or(i,e,n,s){var a=1e-12,l=a*a,h=30,c,u,m,v,_,g,w,x,S,P,C,E,z,R=i.x,j=i.y,F=i.z?i.z:0,J,ot,et;if(c=Math.sqrt(R*R+j*j),u=Math.sqrt(R*R+j*j+F*F),c/n<a){if(J=0,u/n<a)return ot=A,et=-s,{x:i.x,y:i.y,z:i.z}}else J=Math.atan2(j,R);m=F/u,v=c/u,_=1/Math.sqrt(1-e*(2-e)*v*v),x=v*(1-e)*_,S=m*_,z=0;do z++,w=n/Math.sqrt(1-e*S*S),et=c*x+F*S-w*(1-e*S*S),g=e*w/(w+et),_=1/Math.sqrt(1-g*(2-g)*v*v),P=v*(1-g)*_,C=m*_,E=C*x-P*S,x=P,S=C;while(E*E>l&&z<h);return ot=Math.atan(C/Math.abs(P)),{x:J,y:ot,z:et}}function Go(i,e,n){if(e===ae)return{x:i.x+n[0],y:i.y+n[1],z:i.z+n[2]};if(e===oe){var s=n[0],a=n[1],l=n[2],h=n[3],c=n[4],u=n[5],m=n[6];return{x:m*(i.x-u*i.y+c*i.z)+s,y:m*(u*i.x+i.y-h*i.z)+a,z:m*(-c*i.x+h*i.y+i.z)+l}}}function Ro(i,e,n){if(e===ae)return{x:i.x-n[0],y:i.y-n[1],z:i.z-n[2]};if(e===oe){var s=n[0],a=n[1],l=n[2],h=n[3],c=n[4],u=n[5],m=n[6],v=(i.x-s)/m,_=(i.y-a)/m,g=(i.z-l)/m;return{x:v+u*_-c*g,y:-u*v+_+h*g,z:c*v-h*_+g}}}function Si(i){return i===ae||i===oe}function Bo(i,e,n){if(Oo(i,e)||i.datum_type===sn||e.datum_type===sn)return n;var s=i.a,a=i.es;if(i.datum_type===pe){var l=Gr(i,!1,n);if(l!==0)return;s=pr,a=mr}var h=e.a,c=e.b,u=e.es;if(e.datum_type===pe&&(h=pr,c=Ga,u=mr),a===u&&s===h&&!Si(i.datum_type)&&!Si(e.datum_type))return n;if(n=Nr(n,a,s),Si(i.datum_type)&&(n=Go(n,i.datum_type,i.datum_params)),Si(e.datum_type)&&(n=Ro(n,e.datum_type,e.datum_params)),n=Or(n,u,h,c),e.datum_type===pe){var m=Gr(e,!0,n);if(m!==0)return}return n}function Gr(i,e,n){if(i.grids===null||i.grids.length===0)return console.log("Grid shift grids not found"),-1;var s={x:-n.x,y:n.y},a={x:Number.NaN,y:Number.NaN},l=[];t:for(var h=0;h<i.grids.length;h++){var c=i.grids[h];if(l.push(c.name),c.isNull){a=s;break}if(c.grid===null){if(c.mandatory)return console.log("Unable to find mandatory grid '"+c.name+"'"),-1;continue}for(var u=c.grid.subgrids,m=0,v=u.length;m<v;m++){var _=u[m],g=(Math.abs(_.del[1])+Math.abs(_.del[0]))/1e4,w=_.ll[0]-g,x=_.ll[1]-g,S=_.ll[0]+(_.lim[0]-1)*_.del[0]+g,P=_.ll[1]+(_.lim[1]-1)*_.del[1]+g;if(!(x>s.y||w>s.x||P<s.y||S<s.x)&&(a=Fo(s,e,_),!isNaN(a.x)))break t}}return isNaN(a.x)?(console.log("Failed to find a grid shift table for location '"+-s.x*yt+" "+s.y*yt+" tried: '"+l+"'"),-1):(n.x=-a.x,n.y=a.y,0)}function Fo(i,e,n){var s={x:Number.NaN,y:Number.NaN};if(isNaN(i.x))return s;var a={x:i.x,y:i.y};a.x-=n.ll[0],a.y-=n.ll[1],a.x=I(a.x-Math.PI)+Math.PI;var l=Rr(a,n);if(e){if(isNaN(l.x))return s;l.x=a.x-l.x,l.y=a.y-l.y;var h=9,c=1e-12,u,m;do{if(m=Rr(l,n),isNaN(m.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}u={x:a.x-(m.x+l.x),y:a.y-(m.y+l.y)},l.x+=u.x,l.y+=u.y}while(h--&&Math.abs(u.x)>c&&Math.abs(u.y)>c);if(h<0)return console.log("Inverse grid shift iterator failed to converge."),s;s.x=I(l.x+n.ll[0]),s.y=l.y+n.ll[1]}else isNaN(l.x)||(s.x=i.x+l.x,s.y=i.y+l.y);return s}function Rr(i,e){var n={x:i.x/e.del[0],y:i.y/e.del[1]},s={x:Math.floor(n.x),y:Math.floor(n.y)},a={x:n.x-1*s.x,y:n.y-1*s.y},l={x:Number.NaN,y:Number.NaN},h;if(s.x<0||s.x>=e.lim[0]||s.y<0||s.y>=e.lim[1])return l;h=s.y*e.lim[0]+s.x;var c={x:e.cvs[h][0],y:e.cvs[h][1]};h++;var u={x:e.cvs[h][0],y:e.cvs[h][1]};h+=e.lim[0];var m={x:e.cvs[h][0],y:e.cvs[h][1]};h--;var v={x:e.cvs[h][0],y:e.cvs[h][1]},_=a.x*a.y,g=a.x*(1-a.y),w=(1-a.x)*(1-a.y),x=(1-a.x)*a.y;return l.x=w*c.x+g*u.x+x*v.x+_*m.x,l.y=w*c.y+g*u.y+x*v.y+_*m.y,l}function Br(i,e,n){var s=n.x,a=n.y,l=n.z||0,h,c,u,m={};for(u=0;u<3;u++)if(!(e&&u===2&&n.z===void 0))switch(u===0?(h=s,"ew".indexOf(i.axis[u])!==-1?c="x":c="y"):u===1?(h=a,"ns".indexOf(i.axis[u])!==-1?c="y":c="x"):(h=l,c="z"),i.axis[u]){case"e":m[c]=h;break;case"w":m[c]=-h;break;case"n":m[c]=h;break;case"s":m[c]=-h;break;case"u":n[c]!==void 0&&(m.z=h);break;case"d":n[c]!==void 0&&(m.z=-h);break;default:return null}return m}function Fr(i){var e={x:i[0],y:i[1]};return i.length>2&&(e.z=i[2]),i.length>3&&(e.m=i[3]),e}function qo(i){qr(i.x),qr(i.y)}function qr(i){if(typeof Number.isFinite=="function"){if(Number.isFinite(i))return;throw new TypeError("coordinates must be finite numbers")}if(typeof i!="number"||i!==i||!isFinite(i))throw new TypeError("coordinates must be finite numbers")}function Do(i,e){return(i.datum.datum_type===ae||i.datum.datum_type===oe||i.datum.datum_type===pe)&&e.datumCode!=="WGS84"||(e.datum.datum_type===ae||e.datum.datum_type===oe||e.datum.datum_type===pe)&&i.datumCode!=="WGS84"}function Ei(i,e,n,s){var a;Array.isArray(n)?n=Fr(n):n={x:n.x,y:n.y,z:n.z,m:n.m};var l=n.z!==void 0;if(qo(n),i.datum&&e.datum&&Do(i,e)&&(a=new Lt("WGS84"),n=Ei(i,a,n,s),i=a),s&&i.axis!=="enu"&&(n=Br(i,!1,n)),i.projName==="longlat")n={x:n.x*st,y:n.y*st,z:n.z||0};else if(i.to_meter&&(n={x:n.x*i.to_meter,y:n.y*i.to_meter,z:n.z||0}),n=i.inverse(n),!n)return;if(i.from_greenwich&&(n.x+=i.from_greenwich),n=Bo(i.datum,e.datum,n),!!n)return n=n,e.from_greenwich&&(n={x:n.x-e.from_greenwich,y:n.y,z:n.z||0}),e.projName==="longlat"?n={x:n.x*yt,y:n.y*yt,z:n.z||0}:(n=e.forward(n),e.to_meter&&(n={x:n.x/e.to_meter,y:n.y/e.to_meter,z:n.z||0})),s&&e.axis!=="enu"?Br(e,!0,n):(n&&!l&&delete n.z,n)}var Dr=Lt("WGS84");function un(i,e,n,s){var a,l,h;return Array.isArray(n)?(a=Ei(i,e,n,s)||{x:NaN,y:NaN},n.length>2?typeof i.name<"u"&&i.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"?typeof a.z=="number"?[a.x,a.y,a.z].concat(n.slice(3)):[a.x,a.y,n[2]].concat(n.slice(3)):[a.x,a.y].concat(n.slice(2)):[a.x,a.y]):(l=Ei(i,e,n,s),h=Object.keys(n),h.length===2||h.forEach(function(c){if(typeof i.name<"u"&&i.name==="geocent"||typeof e.name<"u"&&e.name==="geocent"){if(c==="x"||c==="y"||c==="z")return}else if(c==="x"||c==="y")return;l[c]=n[c]}),l)}function Pi(i){return i instanceof Lt?i:typeof i=="object"&&"oProj"in i?i.oProj:Lt(i)}function Zo(i,e,n){var s,a,l=!1,h;return typeof e>"u"?(a=Pi(i),s=Dr,l=!0):(typeof e.x<"u"||Array.isArray(e))&&(n=e,a=Pi(i),s=Dr,l=!0),s||(s=Pi(i)),a||(a=Pi(e)),n?un(s,a,n):(h={forward:function(c,u){return un(s,a,c,u)},inverse:function(c,u){return un(a,s,c,u)}},l&&(h.oProj=a),h)}var Zr=6,jr="AJSAJS",Hr="AFAFAF",ge=65,xt=73,Ct=79,je=86,He=90;const jo={forward:Ur,inverse:Ho,toPoint:$r};function Ur(i,e){return e=e||5,Wo(Uo({lat:i[1],lon:i[0]}),e)}function Ho(i){var e=pn(Jr(i.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]}function $r(i){var e=pn(Jr(i.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function fn(i){return i*(Math.PI/180)}function Wr(i){return 180*(i/Math.PI)}function Uo(i){var e=i.lat,n=i.lon,s=6378137,a=.00669438,l=.9996,h,c,u,m,v,_,g,w=fn(e),x=fn(n),S,P;P=Math.floor((n+180)/6)+1,n===180&&(P=60),e>=56&&e<64&&n>=3&&n<12&&(P=32),e>=72&&e<84&&(n>=0&&n<9?P=31:n>=9&&n<21?P=33:n>=21&&n<33?P=35:n>=33&&n<42&&(P=37)),h=(P-1)*6-180+3,S=fn(h),c=a/(1-a),u=s/Math.sqrt(1-a*Math.sin(w)*Math.sin(w)),m=Math.tan(w)*Math.tan(w),v=c*Math.cos(w)*Math.cos(w),_=Math.cos(w)*(x-S),g=s*((1-a/4-3*a*a/64-5*a*a*a/256)*w-(3*a/8+3*a*a/32+45*a*a*a/1024)*Math.sin(2*w)+(15*a*a/256+45*a*a*a/1024)*Math.sin(4*w)-35*a*a*a/3072*Math.sin(6*w));var C=l*u*(_+(1-m+v)*_*_*_/6+(5-18*m+m*m+72*v-58*c)*_*_*_*_*_/120)+5e5,E=l*(g+u*Math.tan(w)*(_*_/2+(5-m+9*v+4*v*v)*_*_*_*_/24+(61-58*m+m*m+600*v-330*c)*_*_*_*_*_*_/720));return e<0&&(E+=1e7),{northing:Math.round(E),easting:Math.round(C),zoneNumber:P,zoneLetter:$o(e)}}function pn(i){var e=i.northing,n=i.easting,s=i.zoneLetter,a=i.zoneNumber;if(a<0||a>60)return null;var l=.9996,h=6378137,c=.00669438,u,m=(1-Math.sqrt(1-c))/(1+Math.sqrt(1-c)),v,_,g,w,x,S,P,C,E,z=n-5e5,R=e;s<"N"&&(R-=1e7),P=(a-1)*6-180+3,u=c/(1-c),S=R/l,C=S/(h*(1-c/4-3*c*c/64-5*c*c*c/256)),E=C+(3*m/2-27*m*m*m/32)*Math.sin(2*C)+(21*m*m/16-55*m*m*m*m/32)*Math.sin(4*C)+151*m*m*m/96*Math.sin(6*C),v=h/Math.sqrt(1-c*Math.sin(E)*Math.sin(E)),_=Math.tan(E)*Math.tan(E),g=u*Math.cos(E)*Math.cos(E),w=h*(1-c)/Math.pow(1-c*Math.sin(E)*Math.sin(E),1.5),x=z/(v*l);var j=E-v*Math.tan(E)/w*(x*x/2-(5+3*_+10*g-4*g*g-9*u)*x*x*x*x/24+(61+90*_+298*g+45*_*_-252*u-3*g*g)*x*x*x*x*x*x/720);j=Wr(j);var F=(x-(1+2*_+g)*x*x*x/6+(5-2*g+28*_-3*g*g+8*u+24*_*_)*x*x*x*x*x/120)/Math.cos(E);F=P+Wr(F);var J;if(i.accuracy){var ot=pn({northing:i.northing+i.accuracy,easting:i.easting+i.accuracy,zoneLetter:i.zoneLetter,zoneNumber:i.zoneNumber});J={top:ot.lat,right:ot.lon,bottom:j,left:F}}else J={lat:j,lon:F};return J}function $o(i){var e="Z";return 84>=i&&i>=72?e="X":72>i&&i>=64?e="W":64>i&&i>=56?e="V":56>i&&i>=48?e="U":48>i&&i>=40?e="T":40>i&&i>=32?e="S":32>i&&i>=24?e="R":24>i&&i>=16?e="Q":16>i&&i>=8?e="P":8>i&&i>=0?e="N":0>i&&i>=-8?e="M":-8>i&&i>=-16?e="L":-16>i&&i>=-24?e="K":-24>i&&i>=-32?e="J":-32>i&&i>=-40?e="H":-40>i&&i>=-48?e="G":-48>i&&i>=-56?e="F":-56>i&&i>=-64?e="E":-64>i&&i>=-72?e="D":-72>i&&i>=-80&&(e="C"),e}function Wo(i,e){var n="00000"+i.easting,s="00000"+i.northing;return i.zoneNumber+i.zoneLetter+Vo(i.easting,i.northing,i.zoneNumber)+n.substr(n.length-5,e)+s.substr(s.length-5,e)}function Vo(i,e,n){var s=Vr(n),a=Math.floor(i/1e5),l=Math.floor(e/1e5)%20;return Jo(a,l,s)}function Vr(i){var e=i%Zr;return e===0&&(e=Zr),e}function Jo(i,e,n){var s=n-1,a=jr.charCodeAt(s),l=Hr.charCodeAt(s),h=a+i-1,c=l+e,u=!1;h>He&&(h=h-He+ge-1,u=!0),(h===xt||a<xt&&h>xt||(h>xt||a<xt)&&u)&&h++,(h===Ct||a<Ct&&h>Ct||(h>Ct||a<Ct)&&u)&&(h++,h===xt&&h++),h>He&&(h=h-He+ge-1),c>je?(c=c-je+ge-1,u=!0):u=!1,(c===xt||l<xt&&c>xt||(c>xt||l<xt)&&u)&&c++,(c===Ct||l<Ct&&c>Ct||(c>Ct||l<Ct)&&u)&&(c++,c===xt&&c++),c>je&&(c=c-je+ge-1);var m=String.fromCharCode(h)+String.fromCharCode(c);return m}function Jr(i){if(i&&i.length===0)throw"MGRSPoint coverting from nothing";for(var e=i.length,n=null,s="",a,l=0;!/[A-Z]/.test(a=i.charAt(l));){if(l>=2)throw"MGRSPoint bad conversion from: "+i;s+=a,l++}var h=parseInt(s,10);if(l===0||l+3>e)throw"MGRSPoint bad conversion from: "+i;var c=i.charAt(l++);if(c<="A"||c==="B"||c==="Y"||c>="Z"||c==="I"||c==="O")throw"MGRSPoint zone letter "+c+" not handled: "+i;n=i.substring(l,l+=2);for(var u=Vr(h),m=Ko(n.charAt(0),u),v=Xo(n.charAt(1),u);v<Qo(c);)v+=2e6;var _=e-l;if(_%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+i;var g=_/2,w=0,x=0,S,P,C,E,z;return g>0&&(S=1e5/Math.pow(10,g),P=i.substring(l,l+g),w=parseFloat(P)*S,C=i.substring(l+g),x=parseFloat(C)*S),E=w+m,z=x+v,{easting:E,northing:z,zoneLetter:c,zoneNumber:h,accuracy:S}}function Ko(i,e){for(var n=jr.charCodeAt(e-1),s=1e5,a=!1;n!==i.charCodeAt(0);){if(n++,n===xt&&n++,n===Ct&&n++,n>He){if(a)throw"Bad character: "+i;n=ge,a=!0}s+=1e5}return s}function Xo(i,e){if(i>"V")throw"MGRSPoint given invalid Northing "+i;for(var n=Hr.charCodeAt(e-1),s=0,a=!1;n!==i.charCodeAt(0);){if(n++,n===xt&&n++,n===Ct&&n++,n>je){if(a)throw"Bad character: "+i;n=ge,a=!0}s+=1e5}return s}function Qo(i){var e;switch(i){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+i}function ve(i,e,n){if(!(this instanceof ve))return new ve(i,e,n);if(Array.isArray(i))this.x=i[0],this.y=i[1],this.z=i[2]||0;else if(typeof i=="object")this.x=i.x,this.y=i.y,this.z=i.z||0;else if(typeof i=="string"&&typeof e>"u"){var s=i.split(",");this.x=parseFloat(s[0]),this.y=parseFloat(s[1]),this.z=parseFloat(s[2])||0}else this.x=i,this.y=e,this.z=n||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}ve.fromMGRS=function(i){return new ve($r(i))},ve.prototype.toMGRS=function(i){return Ur([this.x,this.y],i)};var Yo=1,tl=.25,Kr=.046875,Xr=.01953125,Qr=.01068115234375,el=.75,il=.46875,nl=.013020833333333334,rl=.007120768229166667,sl=.3645833333333333,al=.005696614583333333,ol=.3076171875;function mn(i){var e=[];e[0]=Yo-i*(tl+i*(Kr+i*(Xr+i*Qr))),e[1]=i*(el-i*(Kr+i*(Xr+i*Qr)));var n=i*i;return e[2]=n*(il-i*(nl+i*rl)),n*=i,e[3]=n*(sl-i*al),e[4]=n*i*ol,e}function be(i,e,n,s){return n*=e,e*=e,s[0]*i-n*(s[1]+e*(s[2]+e*(s[3]+e*s[4])))}var ll=20;function _n(i,e,n){for(var s=1/(1-e),a=i,l=ll;l;--l){var h=Math.sin(a),c=1-e*h*h;if(c=(be(a,h,Math.cos(a),n)-i)*(c*Math.sqrt(c))*s,a-=c,Math.abs(c)<T)return a}return a}function hl(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=mn(this.es),this.ml0=be(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function cl(i){var e=i.x,n=i.y,s=I(e-this.long0,this.over),a,l,h,c=Math.sin(n),u=Math.cos(n);if(this.es){var v=u*s,_=Math.pow(v,2),g=this.ep2*Math.pow(u,2),w=Math.pow(g,2),x=Math.abs(u)>T?Math.tan(n):0,S=Math.pow(x,2),P=Math.pow(S,2);a=1-this.es*Math.pow(c,2),v=v/Math.sqrt(a);var C=be(n,c,u,this.en);l=this.a*(this.k0*v*(1+_/6*(1-S+g+_/20*(5-18*S+P+14*g-58*S*g+_/42*(61+179*P-P*S-479*S)))))+this.x0,h=this.a*(this.k0*(C-this.ml0+c*s*v/2*(1+_/12*(5-S+9*g+4*w+_/30*(61+P-58*S+270*g-330*S*g+_/56*(1385+543*P-P*S-3111*S))))))+this.y0}else{var m=u*Math.sin(s);if(Math.abs(Math.abs(m)-1)<T)return 93;if(l=.5*this.a*this.k0*Math.log((1+m)/(1-m))+this.x0,h=u*Math.cos(s)/Math.sqrt(1-Math.pow(m,2)),m=Math.abs(h),m>=1){if(m-1>T)return 93;h=0}else h=Math.acos(h);n<0&&(h=-h),h=this.a*this.k0*(h-this.lat0)+this.y0}return i.x=l,i.y=h,i}function dl(i){var e,n,s,a,l=(i.x-this.x0)*(1/this.a),h=(i.y-this.y0)*(1/this.a);if(this.es)if(e=this.ml0+h/this.k0,n=_n(e,this.es,this.en),Math.abs(n)<A){var _=Math.sin(n),g=Math.cos(n),w=Math.abs(g)>T?Math.tan(n):0,x=this.ep2*Math.pow(g,2),S=Math.pow(x,2),P=Math.pow(w,2),C=Math.pow(P,2);e=1-this.es*Math.pow(_,2);var E=l*Math.sqrt(e)/this.k0,z=Math.pow(E,2);e=e*w,s=n-e*z/(1-this.es)*.5*(1-z/12*(5+3*P-9*x*P+x-4*S-z/30*(61+90*P-252*x*P+45*C+46*x-z/56*(1385+3633*P+4095*C+1574*C*P)))),a=I(this.long0+E*(1-z/6*(1+2*P+x-z/20*(5+28*P+24*C+8*x*P+6*x-z/42*(61+662*P+1320*C+720*C*P))))/g,this.over)}else s=A*De(h),a=0;else{var c=Math.exp(l/this.k0),u=.5*(c-1/c),m=this.lat0+h/this.k0,v=Math.cos(m);e=Math.sqrt((1-Math.pow(v,2))/(1+Math.pow(u,2))),s=Math.asin(e),h<0&&(s=-s),u===0&&v===0?a=0:a=I(Math.atan2(u,v)+this.long0,this.over)}return i.x=a,i.y=s,i}var ul=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const ki={init:hl,forward:cl,inverse:dl,names:ul};function Yr(i){var e=Math.exp(i);return e=(e-1/e)/2,e}function Mt(i,e){i=Math.abs(i),e=Math.abs(e);var n=Math.max(i,e),s=Math.min(i,e)/(n||1);return n*Math.sqrt(1+Math.pow(s,2))}function fl(i){var e=1+i,n=e-1;return n===0?i:i*Math.log(e)/n}function pl(i){var e=Math.abs(i);return e=fl(e*(1+e/(Mt(1,e)+1))),i<0?-e:e}function gn(i,e){for(var n=2*Math.cos(2*e),s=i.length-1,a=i[s],l=0,h;--s>=0;)h=-l+n*a+i[s],l=a,a=h;return e+h*Math.sin(2*e)}function ml(i,e){for(var n=2*Math.cos(e),s=i.length-1,a=i[s],l=0,h;--s>=0;)h=-l+n*a+i[s],l=a,a=h;return Math.sin(e)*h}function _l(i){var e=Math.exp(i);return e=(e+1/e)/2,e}function ts(i,e,n){for(var s=Math.sin(e),a=Math.cos(e),l=Yr(n),h=_l(n),c=2*a*h,u=-2*s*l,m=i.length-1,v=i[m],_=0,g=0,w=0,x,S;--m>=0;)x=g,S=_,g=v,_=w,v=-x+c*g-u*_+i[m],w=-S+u*g+c*_;return c=s*h,u=a*l,[c*v-u*w,c*w+u*v]}function gl(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(ki.init.apply(this),this.forward=ki.forward,this.inverse=ki.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var i=this.es/(1+Math.sqrt(1-this.es)),e=i/(2-i),n=e;this.cgb[0]=e*(2+e*(-.6666666666666666+e*(-2+e*(2.577777777777778+e*(.5777777777777777+e*-4.228148148148148))))),this.cbg[0]=e*(-2+e*(.6666666666666666+e*(1.3333333333333333+e*(-1.8222222222222222+e*(.7111111111111111+e*.9824338624338624))))),n=n*e,this.cgb[1]=n*(2.3333333333333335+e*(-1.6+e*(-5.044444444444444+e*(8.584126984126984+e*2.458201058201058)))),this.cbg[1]=n*(1.6666666666666667+e*(-1.0666666666666667+e*(-1.4444444444444444+e*(2.86984126984127+e*-1.6105820105820106)))),n=n*e,this.cgb[2]=n*(3.7333333333333334+e*(-3.8857142857142857+e*(-12.019047619047619+e*26.03668430335097))),this.cbg[2]=n*(-1.7333333333333334+e*(1.619047619047619+e*(1.6+e*-4.474779541446208))),n=n*e,this.cgb[3]=n*(6.792063492063492+e*(-9.485714285714286+e*-28.188500881834216)),this.cbg[3]=n*(1.9634920634920634+e*(-2.4+e*-1.7518165784832451)),n=n*e,this.cgb[4]=n*(13.250793650793652+e*-23.22238255571589),this.cbg[4]=n*(-2.3301587301587303+e*3.5144460477793813),n=n*e,this.cgb[5]=n*27.011268237934903,this.cbg[5]=n*2.8496841430174764,n=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+n*(.25+n*(.015625+n/256))),this.utg[0]=e*(-.5+e*(.6666666666666666+e*(-.3854166666666667+e*(.002777777777777778+e*(.158203125+e*-.15905919312169312))))),this.gtu[0]=e*(.5+e*(-.6666666666666666+e*(.3125+e*(.22777777777777777+e*(-.4409722222222222+e*.20875661375661375))))),this.utg[1]=n*(-.020833333333333332+e*(-.06666666666666667+e*(.3034722222222222+e*(-.4380952380952381+e*.2890188388723545)))),this.gtu[1]=n*(.2708333333333333+e*(-.6+e*(.38680555555555557+e*(.44603174603174606+e*-1.0248393063822752)))),n=n*e,this.utg[2]=n*(-.035416666666666666+e*(.04404761904761905+e*(.046651785714285715+e*-.06138668430335097))),this.gtu[2]=n*(.25416666666666665+e*(-.7357142857142858+e*(.5603050595238095+e*.9237378747795415))),n=n*e,this.utg[3]=n*(-.02726314484126984+e*(.021825396825396824+e*.11439745921516754)),this.gtu[3]=n*(.30729786706349205+e*(-1.0654761904761905+e*.9096203979276896)),n=n*e,this.utg[4]=n*(-.02841641865079365+e*.027268468414301746),this.gtu[4]=n*(.4306671626984127+e*-1.713007555715889),n=n*e,this.utg[5]=n*-.03233083094085698,this.gtu[5]=n*.6650675310896665;var s=gn(this.cbg,this.lat0);this.Zb=-this.Qn*(s+ml(this.gtu,2*s))}function vl(i){var e=I(i.x-this.long0,this.over),n=i.y;n=gn(this.cbg,n);var s=Math.sin(n),a=Math.cos(n),l=Math.sin(e),h=Math.cos(e);n=Math.atan2(s,h*a),e=Math.atan2(l*a,Mt(s,a*h)),e=pl(Math.tan(e));var c=ts(this.gtu,2*n,2*e);n=n+c[0],e=e+c[1];var u,m;return Math.abs(e)<=2.623395162778?(u=this.a*(this.Qn*e)+this.x0,m=this.a*(this.Qn*n+this.Zb)+this.y0):(u=1/0,m=1/0),i.x=u,i.y=m,i}function bl(i){var e=(i.x-this.x0)*(1/this.a),n=(i.y-this.y0)*(1/this.a);n=(n-this.Zb)/this.Qn,e=e/this.Qn;var s,a;if(Math.abs(e)<=2.623395162778){var l=ts(this.utg,2*n,2*e);n=n+l[0],e=e+l[1],e=Math.atan(Yr(e));var h=Math.sin(n),c=Math.cos(n),u=Math.sin(e),m=Math.cos(e);n=Math.atan2(h*m,Mt(u,m*c)),e=Math.atan2(u,m*c),s=I(e+this.long0,this.over),a=gn(this.cgb,n)}else s=1/0,a=1/0;return i.x=s,i.y=a,i}var yl=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Ai={init:gl,forward:vl,inverse:bl,names:yl};function wl(i,e){if(i===void 0){if(i=Math.floor((I(e)+Math.PI)*30/Math.PI)+1,i<0)return 0;if(i>60)return 60}return i}var xl="etmerc";function Ml(){var i=wl(this.zone,this.long0);if(i===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(i)-183)*st,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Ai.init.apply(this),this.forward=Ai.forward,this.inverse=Ai.inverse}var Sl=["Universal Transverse Mercator System","utm"];const El={init:Ml,names:Sl,dependsOn:xl};function vn(i,e){return Math.pow((1-i)/(1+i),e)}var Pl=20;function kl(){var i=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*i*i),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(i/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+K)/(Math.pow(Math.tan(.5*this.lat0+K),this.C)*vn(this.e*i,this.ratexp))}function Al(i){var e=i.x,n=i.y;return i.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*n+K),this.C)*vn(this.e*Math.sin(n),this.ratexp))-A,i.x=this.C*e,i}function Ll(i){for(var e=1e-14,n=i.x/this.C,s=i.y,a=Math.pow(Math.tan(.5*s+K)/this.K,1/this.C),l=Pl;l>0&&(s=2*Math.atan(a*vn(this.e*Math.sin(i.y),-.5*this.e))-A,!(Math.abs(s-i.y)<e));--l)i.y=s;return l?(i.x=n,i.y=s,i):null}const bn={init:kl,forward:Al,inverse:Ll};function Cl(){bn.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function Tl(i){var e,n,s,a;return i.x=I(i.x-this.long0,this.over),bn.forward.apply(this,[i]),e=Math.sin(i.y),n=Math.cos(i.y),s=Math.cos(i.x),a=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*n*s),i.x=a*n*Math.sin(i.x),i.y=a*(this.cosc0*e-this.sinc0*n*s),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function zl(i){var e,n,s,a,l;if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,l=Mt(i.x,i.y)){var h=2*Math.atan2(l,this.R2);e=Math.sin(h),n=Math.cos(h),a=Math.asin(n*this.sinc0+i.y*e*this.cosc0/l),s=Math.atan2(i.x*e,l*this.cosc0*n-i.y*this.sinc0*e)}else a=this.phic0,s=0;return i.x=s,i.y=a,bn.inverse.apply(this,[i]),i.x=I(i.x+this.long0,this.over),i}var Il=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const Nl={init:Cl,forward:Tl,inverse:zl,names:Il};function yn(i,e,n){return e*=n,Math.tan(.5*(A+i))*Math.pow((1-e)/(1+e),.5*n)}function Ol(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=T&&(this.k0=.5*(1+De(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=T&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=T&&Math.abs(Math.cos(this.lat_ts))>T&&(this.k0=.5*this.cons*Bt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/Ot(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Bt(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(yn(this.lat0,this.sinlat0,this.e))-A,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function Gl(i){var e=i.x,n=i.y,s=Math.sin(n),a=Math.cos(n),l,h,c,u,m,v,_=I(e-this.long0,this.over);return Math.abs(Math.abs(e-this.long0)-Math.PI)<=T&&Math.abs(n+this.lat0)<=T?(i.x=NaN,i.y=NaN,i):this.sphere?(l=2*this.k0/(1+this.sinlat0*s+this.coslat0*a*Math.cos(_)),i.x=this.a*l*a*Math.sin(_)+this.x0,i.y=this.a*l*(this.coslat0*s-this.sinlat0*a*Math.cos(_))+this.y0,i):(h=2*Math.atan(yn(n,s,this.e))-A,u=Math.cos(h),c=Math.sin(h),Math.abs(this.coslat0)<=T?(m=Ot(this.e,n*this.con,this.con*s),v=2*this.a*this.k0*m/this.cons,i.x=this.x0+v*Math.sin(e-this.long0),i.y=this.y0-this.con*v*Math.cos(e-this.long0),i):(Math.abs(this.sinlat0)<T?(l=2*this.a*this.k0/(1+u*Math.cos(_)),i.y=l*c):(l=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*c+this.cosX0*u*Math.cos(_))),i.y=l*(this.cosX0*c-this.sinX0*u*Math.cos(_))+this.y0),i.x=l*u*Math.sin(_)+this.x0,i))}function Rl(i){i.x-=this.x0,i.y-=this.y0;var e,n,s,a,l,h=Math.sqrt(i.x*i.x+i.y*i.y);if(this.sphere){var c=2*Math.atan(h/(2*this.a*this.k0));return e=this.long0,n=this.lat0,h<=T?(i.x=e,i.y=n,i):(n=Math.asin(Math.cos(c)*this.sinlat0+i.y*Math.sin(c)*this.coslat0/h),Math.abs(this.coslat0)<T?this.lat0>0?e=I(this.long0+Math.atan2(i.x,-1*i.y),this.over):e=I(this.long0+Math.atan2(i.x,i.y),this.over):e=I(this.long0+Math.atan2(i.x*Math.sin(c),h*this.coslat0*Math.cos(c)-i.y*this.sinlat0*Math.sin(c)),this.over),i.x=e,i.y=n,i)}else if(Math.abs(this.coslat0)<=T){if(h<=T)return n=this.lat0,e=this.long0,i.x=e,i.y=n,i;i.x*=this.con,i.y*=this.con,s=h*this.cons/(2*this.a*this.k0),n=this.con*Ze(this.e,s),e=this.con*I(this.con*this.long0+Math.atan2(i.x,-1*i.y),this.over)}else a=2*Math.atan(h*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,h<=T?l=this.X0:(l=Math.asin(Math.cos(a)*this.sinX0+i.y*Math.sin(a)*this.cosX0/h),e=I(this.long0+Math.atan2(i.x*Math.sin(a),h*this.cosX0*Math.cos(a)-i.y*this.sinX0*Math.sin(a)),this.over)),n=-1*Ze(this.e,Math.tan(.5*(A+l)));return i.x=e,i.y=n,i}var Bl=["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"];const Fl={init:Ol,forward:Gl,inverse:Rl,names:Bl,ssfn_:yn};function ql(){var i=this.lat0;this.lambda0=this.long0;var e=Math.sin(i),n=this.a,s=this.rf,a=1/s,l=2*a-Math.pow(a,2),h=this.e=Math.sqrt(l);this.R=this.k0*n*Math.sqrt(1-l)/(1-l*Math.pow(e,2)),this.alpha=Math.sqrt(1+l/(1-l)*Math.pow(Math.cos(i),4)),this.b0=Math.asin(e/this.alpha);var c=Math.log(Math.tan(Math.PI/4+this.b0/2)),u=Math.log(Math.tan(Math.PI/4+i/2)),m=Math.log((1+h*e)/(1-h*e));this.K=c-this.alpha*u+this.alpha*h/2*m}function Dl(i){var e=Math.log(Math.tan(Math.PI/4-i.y/2)),n=this.e/2*Math.log((1+this.e*Math.sin(i.y))/(1-this.e*Math.sin(i.y))),s=-this.alpha*(e+n)+this.K,a=2*(Math.atan(Math.exp(s))-Math.PI/4),l=this.alpha*(i.x-this.lambda0),h=Math.atan(Math.sin(l)/(Math.sin(this.b0)*Math.tan(a)+Math.cos(this.b0)*Math.cos(l))),c=Math.asin(Math.cos(this.b0)*Math.sin(a)-Math.sin(this.b0)*Math.cos(a)*Math.cos(l));return i.y=this.R/2*Math.log((1+Math.sin(c))/(1-Math.sin(c)))+this.y0,i.x=this.R*h+this.x0,i}function Zl(i){for(var e=i.x-this.x0,n=i.y-this.y0,s=e/this.R,a=2*(Math.atan(Math.exp(n/this.R))-Math.PI/4),l=Math.asin(Math.cos(this.b0)*Math.sin(a)+Math.sin(this.b0)*Math.cos(a)*Math.cos(s)),h=Math.atan(Math.sin(s)/(Math.cos(this.b0)*Math.cos(s)-Math.sin(this.b0)*Math.tan(a))),c=this.lambda0+h/this.alpha,u=0,m=l,v=-1e3,_=0;Math.abs(m-v)>1e-7;){if(++_>20)return;u=1/this.alpha*(Math.log(Math.tan(Math.PI/4+l/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(m))/2)),v=m,m=2*Math.atan(Math.exp(u))-Math.PI/2}return i.x=c,i.y=m,i}var jl=["somerc"];const Hl={init:ql,forward:Dl,inverse:Zl,names:jl};var ye=1e-7;function Ul(i){var e=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],n=typeof i.projName=="object"?Object.keys(i.projName)[0]:i.projName;return"no_uoff"in i||"no_off"in i||e.indexOf(n)!==-1||e.indexOf(Tr(n))!==-1}function $l(){var i,e,n,s,a,l,h,c,u,m,v=0,_,g=0,w=0,x=0,S=0,P=0,C=0;this.no_off=Ul(this),this.no_rot="no_rot"in this;var E=!1;"alpha"in this&&(E=!0);var z=!1;if("rectified_grid_angle"in this&&(z=!0),E&&(C=this.alpha),z&&(v=this.rectified_grid_angle),E||z)g=this.longc;else if(w=this.long1,S=this.lat1,x=this.long2,P=this.lat2,Math.abs(S-P)<=ye||(i=Math.abs(S))<=ye||Math.abs(i-A)<=ye||Math.abs(Math.abs(this.lat0)-A)<=ye||Math.abs(Math.abs(P)-A)<=ye)throw new Error;var R=1-this.es;e=Math.sqrt(R),Math.abs(this.lat0)>T?(c=Math.sin(this.lat0),n=Math.cos(this.lat0),i=1-this.es*c*c,this.B=n*n,this.B=Math.sqrt(1+this.es*this.B*this.B/R),this.A=this.B*this.k0*e/i,s=this.B*e/(n*Math.sqrt(i)),a=s*s-1,a<=0?a=0:(a=Math.sqrt(a),this.lat0<0&&(a=-a)),this.E=a+=s,this.E*=Math.pow(Ot(this.e,this.lat0,c),this.B)):(this.B=1/e,this.A=this.k0,this.E=s=a=1),E||z?(E?(_=Math.asin(Math.sin(C)/s),z||(v=C)):(_=v,C=Math.asin(s*Math.sin(_))),this.lam0=g-Math.asin(.5*(a-1/a)*Math.tan(_))/this.B):(l=Math.pow(Ot(this.e,S,Math.sin(S)),this.B),h=Math.pow(Ot(this.e,P,Math.sin(P)),this.B),a=this.E/l,u=(h-l)/(h+l),m=this.E*this.E,m=(m-h*l)/(m+h*l),i=w-x,i<-Math.PI?x-=Fe:i>Math.PI&&(x+=Fe),this.lam0=I(.5*(w+x)-Math.atan(m*Math.tan(.5*this.B*(w-x))/u)/this.B,this.over),_=Math.atan(2*Math.sin(this.B*I(w-this.lam0,this.over))/(a-1/a)),v=C=Math.asin(s*Math.sin(_))),this.singam=Math.sin(_),this.cosgam=Math.cos(_),this.sinrot=Math.sin(v),this.cosrot=Math.cos(v),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(s*s-1)/Math.cos(C))),this.lat0<0&&(this.u_0=-this.u_0)),a=.5*_,this.v_pole_n=this.ArB*Math.log(Math.tan(K-a)),this.v_pole_s=this.ArB*Math.log(Math.tan(K+a))}function Wl(i){var e={},n,s,a,l,h,c,u,m;if(i.x=i.x-this.lam0,Math.abs(Math.abs(i.y)-A)>T){if(h=this.E/Math.pow(Ot(this.e,i.y,Math.sin(i.y)),this.B),c=1/h,n=.5*(h-c),s=.5*(h+c),l=Math.sin(this.B*i.x),a=(n*this.singam-l*this.cosgam)/s,Math.abs(Math.abs(a)-1)<T)throw new Error;m=.5*this.ArB*Math.log((1-a)/(1+a)),c=Math.cos(this.B*i.x),Math.abs(c)<ye?u=this.A*i.x:u=this.ArB*Math.atan2(n*this.cosgam+l*this.singam,c)}else m=i.y>0?this.v_pole_n:this.v_pole_s,u=this.ArB*i.y;return this.no_rot?(e.x=u,e.y=m):(u-=this.u_0,e.x=m*this.cosrot+u*this.sinrot,e.y=u*this.cosrot-m*this.sinrot),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function Vl(i){var e,n,s,a,l,h,c,u={};if(i.x=(i.x-this.x0)*(1/this.a),i.y=(i.y-this.y0)*(1/this.a),this.no_rot?(n=i.y,e=i.x):(n=i.x*this.cosrot-i.y*this.sinrot,e=i.y*this.cosrot+i.x*this.sinrot+this.u_0),s=Math.exp(-this.BrA*n),a=.5*(s-1/s),l=.5*(s+1/s),h=Math.sin(this.BrA*e),c=(h*this.cosgam+a*this.singam)/l,Math.abs(Math.abs(c)-1)<T)u.x=0,u.y=c<0?-A:A;else{if(u.y=this.E/Math.sqrt((1+c)/(1-c)),u.y=Ze(this.e,Math.pow(u.y,1/this.B)),u.y===1/0)throw new Error;u.x=-this.rB*Math.atan2(a*this.cosgam-h*this.singam,Math.cos(this.BrA*e))}return u.x+=this.lam0,u}var Jl=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const Kl={init:$l,forward:Wl,inverse:Vl,names:Jl};function Xl(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<T)){var i=this.b/this.a;this.e=Math.sqrt(1-i*i);var e=Math.sin(this.lat1),n=Math.cos(this.lat1),s=Bt(this.e,e,n),a=Ot(this.e,this.lat1,e),l=Math.sin(this.lat2),h=Math.cos(this.lat2),c=Bt(this.e,l,h),u=Ot(this.e,this.lat2,l),m=Math.abs(Math.abs(this.lat0)-A)<T?0:Ot(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>T?this.ns=Math.log(s/c)/Math.log(a/u):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=s/(this.ns*Math.pow(a,this.ns)),this.rh=this.a*this.f0*Math.pow(m,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function Ql(i){var e=i.x,n=i.y;Math.abs(2*Math.abs(n)-Math.PI)<=T&&(n=De(n)*(A-2*T));var s=Math.abs(Math.abs(n)-A),a,l;if(s>T)a=Ot(this.e,n,Math.sin(n)),l=this.a*this.f0*Math.pow(a,this.ns);else{if(s=n*this.ns,s<=0)return null;l=0}var h=this.ns*I(e-this.long0,this.over);return i.x=this.k0*(l*Math.sin(h))+this.x0,i.y=this.k0*(this.rh-l*Math.cos(h))+this.y0,i}function Yl(i){var e,n,s,a,l,h=(i.x-this.x0)/this.k0,c=this.rh-(i.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(h*h+c*c),n=1):(e=-Math.sqrt(h*h+c*c),n=-1);var u=0;if(e!==0&&(u=Math.atan2(n*h,n*c)),e!==0||this.ns>0){if(n=1/this.ns,s=Math.pow(e/(this.a*this.f0),n),a=Ze(this.e,s),a===-9999)return null}else a=-A;return l=I(u/this.ns+this.long0,this.over),i.x=l,i.y=a,i}var th=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const eh={init:Xl,forward:Ql,inverse:Yl,names:th};function ih(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function nh(i){var e,n,s,a,l,h,c,u=i.x,m=i.y,v=I(u-this.long0,this.over);return e=Math.pow((1+this.e*Math.sin(m))/(1-this.e*Math.sin(m)),this.alfa*this.e/2),n=2*(Math.atan(this.k*Math.pow(Math.tan(m/2+this.s45),this.alfa)/e)-this.s45),s=-v*this.alfa,a=Math.asin(Math.cos(this.ad)*Math.sin(n)+Math.sin(this.ad)*Math.cos(n)*Math.cos(s)),l=Math.asin(Math.cos(n)*Math.sin(s)/Math.cos(a)),h=this.n*l,c=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(a/2+this.s45),this.n),i.y=c*Math.cos(h)/1,i.x=c*Math.sin(h)/1,this.czech||(i.y*=-1,i.x*=-1),i}function rh(i){var e,n,s,a,l,h,c,u,m=i.x;i.x=i.y,i.y=m,this.czech||(i.y*=-1,i.x*=-1),h=Math.sqrt(i.x*i.x+i.y*i.y),l=Math.atan2(i.y,i.x),a=l/Math.sin(this.s0),s=2*(Math.atan(Math.pow(this.ro0/h,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(s)-Math.sin(this.ad)*Math.cos(s)*Math.cos(a)),n=Math.asin(Math.cos(s)*Math.sin(a)/Math.cos(e)),i.x=this.long0-n/this.alfa,c=e,u=0;var v=0;do i.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(c))/(1-this.e*Math.sin(c)),this.e/2))-this.s45),Math.abs(c-i.y)<1e-10&&(u=1),c=i.y,v+=1;while(u===0&&v<15);return v>=15?null:i}var sh=["Krovak","krovak"];const ah={init:ih,forward:nh,inverse:rh,names:sh};function vt(i,e,n,s,a){return i*a-e*Math.sin(2*a)+n*Math.sin(4*a)-s*Math.sin(6*a)}function Ue(i){return 1-.25*i*(1+i/16*(3+1.25*i))}function $e(i){return .375*i*(1+.25*i*(1+.46875*i))}function We(i){return .05859375*i*i*(1+.75*i)}function Ve(i){return i*i*i*.011393229166666666}function wn(i,e,n){var s=e*n;return i/Math.sqrt(1-s*s)}function Yt(i){return Math.abs(i)<A?i:i-De(i)*Math.PI}function Li(i,e,n,s,a){var l,h;l=i/e;for(var c=0;c<15;c++)if(h=(i-(e*l-n*Math.sin(2*l)+s*Math.sin(4*l)-a*Math.sin(6*l)))/(e-2*n*Math.cos(2*l)+4*s*Math.cos(4*l)-6*a*Math.cos(6*l)),l+=h,Math.abs(h)<=1e-10)return l;return NaN}function oh(){this.sphere||(this.e0=Ue(this.es),this.e1=$e(this.es),this.e2=We(this.es),this.e3=Ve(this.es),this.ml0=this.a*vt(this.e0,this.e1,this.e2,this.e3,this.lat0))}function lh(i){var e,n,s=i.x,a=i.y;if(s=I(s-this.long0,this.over),this.sphere)e=this.a*Math.asin(Math.cos(a)*Math.sin(s)),n=this.a*(Math.atan2(Math.tan(a),Math.cos(s))-this.lat0);else{var l=Math.sin(a),h=Math.cos(a),c=wn(this.a,this.e,l),u=Math.tan(a)*Math.tan(a),m=s*Math.cos(a),v=m*m,_=this.es*h*h/(1-this.es),g=this.a*vt(this.e0,this.e1,this.e2,this.e3,a);e=c*m*(1-v*u*(.16666666666666666-(8-u+8*_)*v/120)),n=g-this.ml0+c*l/h*v*(.5+(5-u+6*_)*v/24)}return i.x=e+this.x0,i.y=n+this.y0,i}function hh(i){i.x-=this.x0,i.y-=this.y0;var e=i.x/this.a,n=i.y/this.a,s,a;if(this.sphere){var l=n+this.lat0;s=Math.asin(Math.sin(l)*Math.cos(e)),a=Math.atan2(Math.tan(e),Math.cos(l))}else{var h=this.ml0/this.a+n,c=Li(h,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(c)-A)<=T)return i.x=this.long0,i.y=A,n<0&&(i.y*=-1),i;var u=wn(this.a,this.e,Math.sin(c)),m=u*u*u/this.a/this.a*(1-this.es),v=Math.pow(Math.tan(c),2),_=e*this.a/u,g=_*_;s=c-u*Math.tan(c)/m*_*_*(.5-(1+3*v)*_*_/24),a=_*(1-g*(v/3+(1+3*v)*v*g/15))/Math.cos(c)}return i.x=I(a+this.long0,this.over),i.y=Yt(s),i}var ch=["Cassini","Cassini_Soldner","cass"];const dh={init:oh,forward:lh,inverse:hh,names:ch};function te(i,e){var n;return i>1e-7?(n=i*e,(1-i*i)*(e/(1-n*n)-.5/i*Math.log((1-n)/(1+n)))):2*e}var xn=1,Mn=2,Sn=3,Ci=4;function uh(){var i=Math.abs(this.lat0);if(Math.abs(i-A)<T?this.mode=this.lat0<0?xn:Mn:Math.abs(i)<T?this.mode=Sn:this.mode=Ci,this.es>0){var e;switch(this.qp=te(this.e,1),this.mmf=.5/(1-this.es),this.apa=wh(this.es),this.mode){case Mn:this.dd=1;break;case xn:this.dd=1;break;case Sn:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case Ci:this.rq=Math.sqrt(.5*this.qp),e=Math.sin(this.lat0),this.sinb1=te(this.e,e)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*e*e)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===Ci&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function fh(i){var e,n,s,a,l,h,c,u,m,v,_=i.x,g=i.y;if(_=I(_-this.long0,this.over),this.sphere){if(l=Math.sin(g),v=Math.cos(g),s=Math.cos(_),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(n=this.mode===this.EQUIT?1+v*s:1+this.sinph0*l+this.cosph0*v*s,n<=T)return null;n=Math.sqrt(2/n),e=n*v*Math.sin(_),n*=this.mode===this.EQUIT?l:this.cosph0*l-this.sinph0*v*s}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(s=-s),Math.abs(g+this.lat0)<T)return null;n=K-g*.5,n=2*(this.mode===this.S_POLE?Math.cos(n):Math.sin(n)),e=n*Math.sin(_),n*=s}}else{switch(c=0,u=0,m=0,s=Math.cos(_),a=Math.sin(_),l=Math.sin(g),h=te(this.e,l),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(c=h/this.qp,u=Math.sqrt(1-c*c)),this.mode){case this.OBLIQ:m=1+this.sinb1*c+this.cosb1*u*s;break;case this.EQUIT:m=1+u*s;break;case this.N_POLE:m=A+g,h=this.qp-h;break;case this.S_POLE:m=g-A,h=this.qp+h;break}if(Math.abs(m)<T)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:m=Math.sqrt(2/m),this.mode===this.OBLIQ?n=this.ymf*m*(this.cosb1*c-this.sinb1*u*s):n=(m=Math.sqrt(2/(1+u*s)))*c*this.ymf,e=this.xmf*m*u*a;break;case this.N_POLE:case this.S_POLE:h>=0?(e=(m=Math.sqrt(h))*a,n=s*(this.mode===this.S_POLE?m:-m)):e=n=0;break}}return i.x=this.a*e+this.x0,i.y=this.a*n+this.y0,i}function ph(i){i.x-=this.x0,i.y-=this.y0;var e=i.x/this.a,n=i.y/this.a,s,a,l,h,c,u,m;if(this.sphere){var v=0,_,g=0;if(_=Math.sqrt(e*e+n*n),a=_*.5,a>1)return null;switch(a=2*Math.asin(a),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(g=Math.sin(a),v=Math.cos(a)),this.mode){case this.EQUIT:a=Math.abs(_)<=T?0:Math.asin(n*g/_),e*=g,n=v*_;break;case this.OBLIQ:a=Math.abs(_)<=T?this.lat0:Math.asin(v*this.sinph0+n*g*this.cosph0/_),e*=g*this.cosph0,n=(v-Math.sin(a)*this.sinph0)*_;break;case this.N_POLE:n=-n,a=A-a;break;case this.S_POLE:a-=A;break}s=n===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(e,n)}else{if(m=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e/=this.dd,n*=this.dd,u=Math.sqrt(e*e+n*n),u<T)return i.x=this.long0,i.y=this.lat0,i;h=2*Math.asin(.5*u/this.rq),l=Math.cos(h),e*=h=Math.sin(h),this.mode===this.OBLIQ?(m=l*this.sinb1+n*h*this.cosb1/u,c=this.qp*m,n=u*this.cosb1*l-n*this.sinb1*h):(m=n*h/u,c=this.qp*m,n=u*l)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),c=e*e+n*n,!c)return i.x=this.long0,i.y=this.lat0,i;m=1-c/this.qp,this.mode===this.S_POLE&&(m=-m)}s=Math.atan2(e,n),a=xh(Math.asin(m),this.apa)}return i.x=I(this.long0+s,this.over),i.y=a,i}var mh=.3333333333333333,_h=.17222222222222222,gh=.10257936507936508,vh=.06388888888888888,bh=.0664021164021164,yh=.016415012942191543;function wh(i){var e,n=[];return n[0]=i*mh,e=i*i,n[0]+=e*_h,n[1]=e*vh,e*=i,n[0]+=e*gh,n[1]+=e*bh,n[2]=e*yh,n}function xh(i,e){var n=i+i;return i+e[0]*Math.sin(n)+e[1]*Math.sin(n+n)+e[2]*Math.sin(n+n+n)}var Mh=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const Sh={init:uh,forward:fh,inverse:ph,names:Mh,S_POLE:xn,N_POLE:Mn,EQUIT:Sn,OBLIQ:Ci};function ee(i){return Math.abs(i)>1&&(i=i>1?1:-1),Math.asin(i)}function Eh(){Math.abs(this.lat1+this.lat2)<T||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Bt(this.e3,this.sin_po,this.cos_po),this.qs1=te(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Bt(this.e3,this.sin_po,this.cos_po),this.qs2=te(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=te(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>T?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function Ph(i){var e=i.x,n=i.y;this.sin_phi=Math.sin(n),this.cos_phi=Math.cos(n);var s=te(this.e3,this.sin_phi),a=this.a*Math.sqrt(this.c-this.ns0*s)/this.ns0,l=this.ns0*I(e-this.long0,this.over),h=a*Math.sin(l)+this.x0,c=this.rh-a*Math.cos(l)+this.y0;return i.x=h,i.y=c,i}function kh(i){var e,n,s,a,l,h;return i.x-=this.x0,i.y=this.rh-i.y+this.y0,this.ns0>=0?(e=Math.sqrt(i.x*i.x+i.y*i.y),s=1):(e=-Math.sqrt(i.x*i.x+i.y*i.y),s=-1),a=0,e!==0&&(a=Math.atan2(s*i.x,s*i.y)),s=e*this.ns0/this.a,this.sphere?h=Math.asin((this.c-s*s)/(2*this.ns0)):(n=(this.c-s*s)/this.ns0,h=this.phi1z(this.e3,n)),l=I(a/this.ns0+this.long0,this.over),i.x=l,i.y=h,i}function Ah(i,e){var n,s,a,l,h,c=ee(.5*e);if(i<T)return c;for(var u=i*i,m=1;m<=25;m++)if(n=Math.sin(c),s=Math.cos(c),a=i*n,l=1-a*a,h=.5*l*l/s*(e/(1-u)-n/l+.5/i*Math.log((1-a)/(1+a))),c=c+h,Math.abs(h)<=1e-7)return c;return null}var Lh=["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"];const Ch={init:Eh,forward:Ph,inverse:kh,names:Lh,phi1z:Ah};function Th(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function zh(i){var e,n,s,a,l,h,c,u,m=i.x,v=i.y;return s=I(m-this.long0,this.over),e=Math.sin(v),n=Math.cos(v),a=Math.cos(s),h=this.sin_p14*e+this.cos_p14*n*a,l=1,h>0||Math.abs(h)<=T?(c=this.x0+this.a*l*n*Math.sin(s)/h,u=this.y0+this.a*l*(this.cos_p14*e-this.sin_p14*n*a)/h):(c=this.x0+this.infinity_dist*n*Math.sin(s),u=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*n*a)),i.x=c,i.y=u,i}function Ih(i){var e,n,s,a,l,h;return i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,(e=Math.sqrt(i.x*i.x+i.y*i.y))?(a=Math.atan2(e,this.rc),n=Math.sin(a),s=Math.cos(a),h=ee(s*this.sin_p14+i.y*n*this.cos_p14/e),l=Math.atan2(i.x*n,e*this.cos_p14*s-i.y*this.sin_p14*n),l=I(this.long0+l,this.over)):(h=this.phic0,l=0),i.x=l,i.y=h,i}var Nh=["gnom"];const Oh={init:Th,forward:zh,inverse:Ih,names:Nh};function Gh(i,e){var n=1-(1-i*i)/(2*i)*Math.log((1-i)/(1+i));if(Math.abs(Math.abs(e)-n)<1e-6)return e<0?-1*A:A;for(var s=Math.asin(.5*e),a,l,h,c,u=0;u<30;u++)if(l=Math.sin(s),h=Math.cos(s),c=i*l,a=Math.pow(1-c*c,2)/(2*h)*(e/(1-i*i)-l/(1-c*c)+.5/i*Math.log((1-c)/(1+c))),s+=a,Math.abs(a)<=1e-10)return s;return NaN}function Rh(){this.sphere||(this.k0=Bt(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Bh(i){var e=i.x,n=i.y,s,a,l=I(e-this.long0,this.over);if(this.sphere)s=this.x0+this.a*l*Math.cos(this.lat_ts),a=this.y0+this.a*Math.sin(n)/Math.cos(this.lat_ts);else{var h=te(this.e,Math.sin(n));s=this.x0+this.a*this.k0*l,a=this.y0+this.a*h*.5/this.k0}return i.x=s,i.y=a,i}function Fh(i){i.x-=this.x0,i.y-=this.y0;var e,n;return this.sphere?(e=I(this.long0+i.x/this.a/Math.cos(this.lat_ts),this.over),n=Math.asin(i.y/this.a*Math.cos(this.lat_ts))):(n=Gh(this.e,2*i.y*this.k0/this.a),e=I(this.long0+i.x/(this.a*this.k0),this.over)),i.x=e,i.y=n,i}var qh=["cea"];const Dh={init:Rh,forward:Bh,inverse:Fh,names:qh};function Zh(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function jh(i){var e=i.x,n=i.y,s=I(e-this.long0,this.over),a=Yt(n-this.lat0);return i.x=this.x0+this.a*s*this.rc,i.y=this.y0+this.a*a,i}function Hh(i){var e=i.x,n=i.y;return i.x=I(this.long0+(e-this.x0)/(this.a*this.rc),this.over),i.y=Yt(this.lat0+(n-this.y0)/this.a),i}var Uh=["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"];const $h={init:Zh,forward:jh,inverse:Hh,names:Uh};var es=20;function Wh(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ue(this.es),this.e1=$e(this.es),this.e2=We(this.es),this.e3=Ve(this.es),this.ml0=this.a*vt(this.e0,this.e1,this.e2,this.e3,this.lat0)}function Vh(i){var e=i.x,n=i.y,s,a,l,h=I(e-this.long0,this.over);if(l=h*Math.sin(n),this.sphere)Math.abs(n)<=T?(s=this.a*h,a=-1*this.a*this.lat0):(s=this.a*Math.sin(l)/Math.tan(n),a=this.a*(Yt(n-this.lat0)+(1-Math.cos(l))/Math.tan(n)));else if(Math.abs(n)<=T)s=this.a*h,a=-1*this.ml0;else{var c=wn(this.a,this.e,Math.sin(n))/Math.tan(n);s=c*Math.sin(l),a=this.a*vt(this.e0,this.e1,this.e2,this.e3,n)-this.ml0+c*(1-Math.cos(l))}return i.x=s+this.x0,i.y=a+this.y0,i}function Jh(i){var e,n,s,a,l,h,c,u,m;if(s=i.x-this.x0,a=i.y-this.y0,this.sphere)if(Math.abs(a+this.a*this.lat0)<=T)e=I(s/this.a+this.long0,this.over),n=0;else{h=this.lat0+a/this.a,c=s*s/this.a/this.a+h*h,u=h;var v;for(l=es;l;--l)if(v=Math.tan(u),m=-1*(h*(u*v+1)-u-.5*(u*u+c)*v)/((u-h)/v-1),u+=m,Math.abs(m)<=T){n=u;break}e=I(this.long0+Math.asin(s*Math.tan(u)/this.a)/Math.sin(n),this.over)}else if(Math.abs(a+this.ml0)<=T)n=0,e=I(this.long0+s/this.a,this.over);else{h=(this.ml0+a)/this.a,c=s*s/this.a/this.a+h*h,u=h;var _,g,w,x,S;for(l=es;l;--l)if(S=this.e*Math.sin(u),_=Math.sqrt(1-S*S)*Math.tan(u),g=this.a*vt(this.e0,this.e1,this.e2,this.e3,u),w=this.e0-2*this.e1*Math.cos(2*u)+4*this.e2*Math.cos(4*u)-6*this.e3*Math.cos(6*u),x=g/this.a,m=(h*(_*x+1)-x-.5*_*(x*x+c))/(this.es*Math.sin(2*u)*(x*x+c-2*h*x)/(4*_)+(h-x)*(_*w-2/Math.sin(2*u))-w),u-=m,Math.abs(m)<=T){n=u;break}_=Math.sqrt(1-this.es*Math.pow(Math.sin(n),2))*Math.tan(n),e=I(this.long0+Math.asin(s*_/this.a)/Math.sin(n),this.over)}return i.x=e,i.y=n,i}var Kh=["Polyconic","American_Polyconic","poly"];const Xh={init:Wh,forward:Vh,inverse:Jh,names:Kh};function Qh(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Yh(i){var e,n=i.x,s=i.y,a=s-this.lat0,l=n-this.long0,h=a/Be*1e-5,c=l,u=1,m=0;for(e=1;e<=10;e++)u=u*h,m=m+this.A[e]*u;var v=m,_=c,g=1,w=0,x,S,P=0,C=0;for(e=1;e<=6;e++)x=g*v-w*_,S=w*v+g*_,g=x,w=S,P=P+this.B_re[e]*g-this.B_im[e]*w,C=C+this.B_im[e]*g+this.B_re[e]*w;return i.x=C*this.a+this.x0,i.y=P*this.a+this.y0,i}function tc(i){var e,n=i.x,s=i.y,a=n-this.x0,l=s-this.y0,h=l/this.a,c=a/this.a,u=1,m=0,v,_,g=0,w=0;for(e=1;e<=6;e++)v=u*h-m*c,_=m*h+u*c,u=v,m=_,g=g+this.C_re[e]*u-this.C_im[e]*m,w=w+this.C_im[e]*u+this.C_re[e]*m;for(var x=0;x<this.iterations;x++){var S=g,P=w,C,E,z=h,R=c;for(e=2;e<=6;e++)C=S*g-P*w,E=P*g+S*w,S=C,P=E,z=z+(e-1)*(this.B_re[e]*S-this.B_im[e]*P),R=R+(e-1)*(this.B_im[e]*S+this.B_re[e]*P);S=1,P=0;var j=this.B_re[1],F=this.B_im[1];for(e=2;e<=6;e++)C=S*g-P*w,E=P*g+S*w,S=C,P=E,j=j+e*(this.B_re[e]*S-this.B_im[e]*P),F=F+e*(this.B_im[e]*S+this.B_re[e]*P);var J=j*j+F*F;g=(z*j+R*F)/J,w=(R*j-z*F)/J}var ot=g,et=w,St=1,Q=0;for(e=1;e<=9;e++)St=St*ot,Q=Q+this.D[e]*St;var ht=this.lat0+Q*Be*1e5,ie=this.long0+et;return i.x=ie,i.y=ht,i}var ec=["New_Zealand_Map_Grid","nzmg"];const ic={init:Qh,forward:Yh,inverse:tc,names:ec};function nc(){}function rc(i){var e=i.x,n=i.y,s=I(e-this.long0,this.over),a=this.x0+this.a*s,l=this.y0+this.a*Math.log(Math.tan(Math.PI/4+n/2.5))*1.25;return i.x=a,i.y=l,i}function sc(i){i.x-=this.x0,i.y-=this.y0;var e=I(this.long0+i.x/this.a,this.over),n=2.5*(Math.atan(Math.exp(.8*i.y/this.a))-Math.PI/4);return i.x=e,i.y=n,i}var ac=["Miller_Cylindrical","mill"];const oc={init:nc,forward:rc,inverse:sc,names:ac};var lc=20;function hc(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=mn(this.es)}function cc(i){var e,n,s=i.x,a=i.y;if(s=I(s-this.long0,this.over),this.sphere){if(!this.m)a=this.n!==1?Math.asin(this.n*Math.sin(a)):a;else for(var l=this.n*Math.sin(a),h=lc;h;--h){var c=(this.m*a+Math.sin(a)-l)/(this.m+Math.cos(a));if(a-=c,Math.abs(c)<T)break}e=this.a*this.C_x*s*(this.m+Math.cos(a)),n=this.a*this.C_y*a}else{var u=Math.sin(a),m=Math.cos(a);n=this.a*be(a,u,m,this.en),e=this.a*s*m/Math.sqrt(1-this.es*u*u)}return i.x=e,i.y=n,i}function dc(i){var e,n,s,a;return i.x-=this.x0,s=i.x/this.a,i.y-=this.y0,e=i.y/this.a,this.sphere?(e/=this.C_y,s=s/(this.C_x*(this.m+Math.cos(e))),this.m?e=ee((this.m*e+Math.sin(e))/this.n):this.n!==1&&(e=ee(Math.sin(e)/this.n)),s=I(s+this.long0,this.over),e=Yt(e)):(e=_n(i.y/this.a,this.es,this.en),a=Math.abs(e),a<A?(a=Math.sin(e),n=this.long0+i.x*Math.sqrt(1-this.es*a*a)/(this.a*Math.cos(e)),s=I(n,this.over)):a-T<A&&(s=this.long0)),i.x=s,i.y=e,i}var uc=["Sinusoidal","sinu"];const fc={init:hc,forward:cc,inverse:dc,names:uc};function pc(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0}function mc(i){for(var e=i.x,n=i.y,s=I(e-this.long0,this.over),a=n,l=Math.PI*Math.sin(n);;){var h=-(a+Math.sin(a)-l)/(1+Math.cos(a));if(a+=h,Math.abs(h)<T)break}a/=2,Math.PI/2-Math.abs(n)<T&&(s=0);var c=.900316316158*this.a*s*Math.cos(a)+this.x0,u=1.4142135623731*this.a*Math.sin(a)+this.y0;return i.x=c,i.y=u,i}function _c(i){var e,n;i.x-=this.x0,i.y-=this.y0,n=i.y/(1.4142135623731*this.a),Math.abs(n)>.999999999999&&(n=.999999999999),e=Math.asin(n);var s=I(this.long0+i.x/(.900316316158*this.a*Math.cos(e)),this.over);s<-Math.PI&&(s=-Math.PI),s>Math.PI&&(s=Math.PI),n=(2*e+Math.sin(2*e))/Math.PI,Math.abs(n)>1&&(n=1);var a=Math.asin(n);return i.x=s,i.y=a,i}var gc=["Mollweide","moll"];const vc={init:pc,forward:mc,inverse:_c,names:gc};function bc(){Math.abs(this.lat1+this.lat2)<T||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ue(this.es),this.e1=$e(this.es),this.e2=We(this.es),this.e3=Ve(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=Bt(this.e,this.sin_phi,this.cos_phi),this.ml1=vt(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<T?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=Bt(this.e,this.sin_phi,this.cos_phi),this.ml2=vt(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=vt(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function yc(i){var e=i.x,n=i.y,s;if(this.sphere)s=this.a*(this.g-n);else{var a=vt(this.e0,this.e1,this.e2,this.e3,n);s=this.a*(this.g-a)}var l=this.ns*I(e-this.long0,this.over),h=this.x0+s*Math.sin(l),c=this.y0+this.rh-s*Math.cos(l);return i.x=h,i.y=c,i}function wc(i){i.x-=this.x0,i.y=this.rh-i.y+this.y0;var e,n,s,a;this.ns>=0?(n=Math.sqrt(i.x*i.x+i.y*i.y),e=1):(n=-Math.sqrt(i.x*i.x+i.y*i.y),e=-1);var l=0;if(n!==0&&(l=Math.atan2(e*i.x,e*i.y)),this.sphere)return a=I(this.long0+l/this.ns,this.over),s=Yt(this.g-n/this.a),i.x=a,i.y=s,i;var h=this.g-n/this.a;return s=Li(h,this.e0,this.e1,this.e2,this.e3),a=I(this.long0+l/this.ns,this.over),i.x=a,i.y=s,i}var xc=["Equidistant_Conic","eqdc"];const Mc={init:bc,forward:yc,inverse:wc,names:xc};function Sc(){this.R=this.a}function Ec(i){var e=i.x,n=i.y,s=I(e-this.long0,this.over),a,l;Math.abs(n)<=T&&(a=this.x0+this.R*s,l=this.y0);var h=ee(2*Math.abs(n/Math.PI));(Math.abs(s)<=T||Math.abs(Math.abs(n)-A)<=T)&&(a=this.x0,n>=0?l=this.y0+Math.PI*this.R*Math.tan(.5*h):l=this.y0+Math.PI*this.R*-Math.tan(.5*h));var c=.5*Math.abs(Math.PI/s-s/Math.PI),u=c*c,m=Math.sin(h),v=Math.cos(h),_=v/(m+v-1),g=_*_,w=_*(2/m-1),x=w*w,S=Math.PI*this.R*(c*(_-x)+Math.sqrt(u*(_-x)*(_-x)-(x+u)*(g-x)))/(x+u);s<0&&(S=-S),a=this.x0+S;var P=u+_;return S=Math.PI*this.R*(w*P-c*Math.sqrt((x+u)*(u+1)-P*P))/(x+u),n>=0?l=this.y0+S:l=this.y0-S,i.x=a,i.y=l,i}function Pc(i){var e,n,s,a,l,h,c,u,m,v,_,g,w;return i.x-=this.x0,i.y-=this.y0,_=Math.PI*this.R,s=i.x/_,a=i.y/_,l=s*s+a*a,h=-Math.abs(a)*(1+l),c=h-2*a*a+s*s,u=-2*h+1+2*a*a+l*l,w=a*a/u+(2*c*c*c/u/u/u-9*h*c/u/u)/27,m=(h-c*c/3/u)/u,v=2*Math.sqrt(-m/3),_=3*w/m/v,Math.abs(_)>1&&(_>=0?_=1:_=-1),g=Math.acos(_)/3,i.y>=0?n=(-v*Math.cos(g+Math.PI/3)-c/3/u)*Math.PI:n=-(-v*Math.cos(g+Math.PI/3)-c/3/u)*Math.PI,Math.abs(s)<T?e=this.long0:e=I(this.long0+Math.PI*(l-1+Math.sqrt(1+2*(s*s-a*a)+l*l))/2/s,this.over),i.x=e,i.y=n,i}var kc=["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"];const Ac={init:Sc,forward:Ec,inverse:Pc,names:kc};function Lc(i,e,n,s,a,l){const h=s-e,c=Math.atan((1-l)*Math.tan(i)),u=Math.atan((1-l)*Math.tan(n)),m=Math.sin(c),v=Math.cos(c),_=Math.sin(u),g=Math.cos(u);let w=h,x,S=100,P,C,E,z,R,j,F,J,ot,et,St,Q,ht,ie;do{if(P=Math.sin(w),C=Math.cos(w),E=Math.sqrt(g*P*(g*P)+(v*_-m*g*C)*(v*_-m*g*C)),E===0)return{azi1:0,s12:0};z=m*_+v*g*C,R=Math.atan2(E,z),j=v*g*P/E,F=1-j*j,J=F!==0?z-2*m*_/F:0,ot=l/16*F*(4+l*(4-3*F)),x=w,w=h+(1-ot)*l*j*(R+ot*E*(J+ot*z*(-1+2*J*J)))}while(Math.abs(w-x)>1e-12&&--S>0);return S===0?{azi1:NaN,s12:NaN}:(et=F*(a*a-a*(1-l)*(a*(1-l)))/(a*(1-l)*(a*(1-l))),St=1+et/16384*(4096+et*(-768+et*(320-175*et))),Q=et/1024*(256+et*(-128+et*(74-47*et))),ht=Q*E*(J+Q/4*(z*(-1+2*J*J)-Q/6*J*(-3+4*E*E)*(-3+4*J*J))),ie=a*(1-l)*St*(R-ht),{azi1:Math.atan2(g*P,v*_-m*g*C),s12:ie})}function Cc(i,e,n,s,a,l){const h=Math.atan((1-l)*Math.tan(i)),c=Math.sin(h),u=Math.cos(h),m=Math.sin(n),v=Math.cos(n),_=Math.atan2(c,u*v),g=u*m,w=1-g*g,x=w*(a*a-a*(1-l)*(a*(1-l)))/(a*(1-l)*(a*(1-l))),S=1+x/16384*(4096+x*(-768+x*(320-175*x))),P=x/1024*(256+x*(-128+x*(74-47*x)));let C=s/(a*(1-l)*S),E,z=100,R,j,F,J;do R=Math.cos(2*_+C),j=Math.sin(C),F=Math.cos(C),J=P*j*(R+P/4*(F*(-1+2*R*R)-P/6*R*(-3+4*j*j)*(-3+4*R*R))),E=C,C=s/(a*(1-l)*S)+J;while(Math.abs(C-E)>1e-12&&--z>0);if(z===0)return{lat2:NaN,lon2:NaN};const ot=c*j-u*F*v,et=Math.atan2(c*F+u*j*v,(1-l)*Math.sqrt(g*g+ot*ot)),St=Math.atan2(j*m,u*F-c*j*v),Q=l/16*w*(4+l*(4-3*w)),ht=St-(1-Q)*l*g*(C+Q*j*(R+Q*F*(-1+2*R*R))),ie=e+ht;return{lat2:et,lon2:ie}}function Tc(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))}function zc(i){var e=i.x,n=i.y,s=Math.sin(i.y),a=Math.cos(i.y),l=I(e-this.long0,this.over),h,c,u,m,v,_,g,w,x,S,P;return this.sphere?Math.abs(this.sin_p12-1)<=T?(i.x=this.x0+this.a*(A-n)*Math.sin(l),i.y=this.y0-this.a*(A-n)*Math.cos(l),i):Math.abs(this.sin_p12+1)<=T?(i.x=this.x0+this.a*(A+n)*Math.sin(l),i.y=this.y0+this.a*(A+n)*Math.cos(l),i):(x=this.sin_p12*s+this.cos_p12*a*Math.cos(l),g=Math.acos(x),w=g?g/Math.sin(g):1,i.x=this.x0+this.a*w*a*Math.sin(l),i.y=this.y0+this.a*w*(this.cos_p12*s-this.sin_p12*a*Math.cos(l)),i):(h=Ue(this.es),c=$e(this.es),u=We(this.es),m=Ve(this.es),Math.abs(this.sin_p12-1)<=T?(v=this.a*vt(h,c,u,m,A),_=this.a*vt(h,c,u,m,n),i.x=this.x0+(v-_)*Math.sin(l),i.y=this.y0-(v-_)*Math.cos(l),i):Math.abs(this.sin_p12+1)<=T?(v=this.a*vt(h,c,u,m,A),_=this.a*vt(h,c,u,m,n),i.x=this.x0+(v+_)*Math.sin(l),i.y=this.y0+(v+_)*Math.cos(l),i):Math.abs(e)<T&&Math.abs(n-this.lat0)<T?(i.x=i.y=0,i):(S=Lc(this.lat0,this.long0,n,e,this.a,this.f),P=S.azi1,i.x=S.s12*Math.sin(P),i.y=S.s12*Math.cos(P),i))}function Ic(i){i.x-=this.x0,i.y-=this.y0;var e,n,s,a,l,h,c,u,m,v,_,g,w,x,S,P;return this.sphere?(e=Math.sqrt(i.x*i.x+i.y*i.y),e>2*A*this.a?void 0:(n=e/this.a,s=Math.sin(n),a=Math.cos(n),l=this.long0,Math.abs(e)<=T?h=this.lat0:(h=ee(a*this.sin_p12+i.y*s*this.cos_p12/e),c=Math.abs(this.lat0)-A,Math.abs(c)<=T?this.lat0>=0?l=I(this.long0+Math.atan2(i.x,-i.y),this.over):l=I(this.long0-Math.atan2(-i.x,i.y),this.over):l=I(this.long0+Math.atan2(i.x*s,e*this.cos_p12*a-i.y*this.sin_p12*s),this.over)),i.x=l,i.y=h,i)):(u=Ue(this.es),m=$e(this.es),v=We(this.es),_=Ve(this.es),Math.abs(this.sin_p12-1)<=T?(g=this.a*vt(u,m,v,_,A),e=Math.sqrt(i.x*i.x+i.y*i.y),w=g-e,h=Li(w/this.a,u,m,v,_),l=I(this.long0+Math.atan2(i.x,-1*i.y),this.over),i.x=l,i.y=h,i):Math.abs(this.sin_p12+1)<=T?(g=this.a*vt(u,m,v,_,A),e=Math.sqrt(i.x*i.x+i.y*i.y),w=e-g,h=Li(w/this.a,u,m,v,_),l=I(this.long0+Math.atan2(i.x,i.y),this.over),i.x=l,i.y=h,i):(x=Math.atan2(i.x,i.y),S=Math.sqrt(i.x*i.x+i.y*i.y),P=Cc(this.lat0,this.long0,x,S,this.a,this.f),i.x=P.lon2,i.y=P.lat2,i))}var Nc=["Azimuthal_Equidistant","aeqd"];const Oc={init:Tc,forward:zc,inverse:Ic,names:Nc};function Gc(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function Rc(i){var e,n,s,a,l,h,c,u,m=i.x,v=i.y;return s=I(m-this.long0,this.over),e=Math.sin(v),n=Math.cos(v),a=Math.cos(s),h=this.sin_p14*e+this.cos_p14*n*a,l=1,(h>0||Math.abs(h)<=T)&&(c=this.a*l*n*Math.sin(s),u=this.y0+this.a*l*(this.cos_p14*e-this.sin_p14*n*a)),i.x=c,i.y=u,i}function Bc(i){var e,n,s,a,l,h,c;return i.x-=this.x0,i.y-=this.y0,e=Math.sqrt(i.x*i.x+i.y*i.y),n=ee(e/this.a),s=Math.sin(n),a=Math.cos(n),h=this.long0,Math.abs(e)<=T?(c=this.lat0,i.x=h,i.y=c,i):(c=ee(a*this.sin_p14+i.y*s*this.cos_p14/e),l=Math.abs(this.lat0)-A,Math.abs(l)<=T?(this.lat0>=0?h=I(this.long0+Math.atan2(i.x,-i.y),this.over):h=I(this.long0-Math.atan2(-i.x,i.y),this.over),i.x=h,i.y=c,i):(h=I(this.long0+Math.atan2(i.x*s,e*this.cos_p14*a-i.y*this.sin_p14*s),this.over),i.x=h,i.y=c,i))}var Fc=["ortho"];const qc={init:Gc,forward:Rc,inverse:Bc,names:Fc};var it={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},X={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function Dc(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=A-K/2?this.face=it.TOP:this.lat0<=-(A-K/2)?this.face=it.BOTTOM:Math.abs(this.long0)<=K?this.face=it.FRONT:Math.abs(this.long0)<=A+K?this.face=this.long0>0?it.RIGHT:it.LEFT:this.face=it.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function Zc(i){var e={x:0,y:0},n,s,a,l,h,c,u={value:0};if(i.x-=this.long0,this.es!==0?n=Math.atan(this.one_minus_f_squared*Math.tan(i.y)):n=i.y,s=i.x,this.face===it.TOP)l=A-n,s>=K&&s<=A+K?(u.value=X.AREA_0,a=s-A):s>A+K||s<=-(A+K)?(u.value=X.AREA_1,a=s>0?s-at:s+at):s>-(A+K)&&s<=-K?(u.value=X.AREA_2,a=s+A):(u.value=X.AREA_3,a=s);else if(this.face===it.BOTTOM)l=A+n,s>=K&&s<=A+K?(u.value=X.AREA_0,a=-s+A):s<K&&s>=-K?(u.value=X.AREA_1,a=-s):s<-K&&s>=-(A+K)?(u.value=X.AREA_2,a=-s-A):(u.value=X.AREA_3,a=s>0?-s+at:-s-at);else{var m,v,_,g,w,x,S;this.face===it.RIGHT?s=we(s,+A):this.face===it.BACK?s=we(s,+at):this.face===it.LEFT&&(s=we(s,-A)),g=Math.sin(n),w=Math.cos(n),x=Math.sin(s),S=Math.cos(s),m=w*S,v=w*x,_=g,this.face===it.FRONT?(l=Math.acos(m),a=Ti(l,_,v,u)):this.face===it.RIGHT?(l=Math.acos(v),a=Ti(l,_,-m,u)):this.face===it.BACK?(l=Math.acos(-m),a=Ti(l,_,-v,u)):this.face===it.LEFT?(l=Math.acos(-v),a=Ti(l,_,m,u)):(l=a=0,u.value=X.AREA_0)}return c=Math.atan(12/at*(a+Math.acos(Math.sin(a)*Math.cos(K))-A)),h=Math.sqrt((1-Math.cos(l))/(Math.cos(c)*Math.cos(c))/(1-Math.cos(Math.atan(1/Math.cos(a))))),u.value===X.AREA_1?c+=A:u.value===X.AREA_2?c+=at:u.value===X.AREA_3&&(c+=1.5*at),e.x=h*Math.cos(c),e.y=h*Math.sin(c),e.x=e.x*this.a+this.x0,e.y=e.y*this.a+this.y0,i.x=e.x,i.y=e.y,i}function jc(i){var e={lam:0,phi:0},n,s,a,l,h,c,u,m,v,_={value:0};if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,s=Math.atan(Math.sqrt(i.x*i.x+i.y*i.y)),n=Math.atan2(i.y,i.x),i.x>=0&&i.x>=Math.abs(i.y)?_.value=X.AREA_0:i.y>=0&&i.y>=Math.abs(i.x)?(_.value=X.AREA_1,n-=A):i.x<0&&-i.x>=Math.abs(i.y)?(_.value=X.AREA_2,n=n<0?n+at:n-at):(_.value=X.AREA_3,n+=A),v=at/12*Math.tan(n),h=Math.sin(v)/(Math.cos(v)-1/Math.sqrt(2)),c=Math.atan(h),a=Math.cos(n),l=Math.tan(s),u=1-a*a*l*l*(1-Math.cos(Math.atan(1/Math.cos(c)))),u<-1?u=-1:u>1&&(u=1),this.face===it.TOP)m=Math.acos(u),e.phi=A-m,_.value===X.AREA_0?e.lam=c+A:_.value===X.AREA_1?e.lam=c<0?c+at:c-at:_.value===X.AREA_2?e.lam=c-A:e.lam=c;else if(this.face===it.BOTTOM)m=Math.acos(u),e.phi=m-A,_.value===X.AREA_0?e.lam=-c+A:_.value===X.AREA_1?e.lam=-c:_.value===X.AREA_2?e.lam=-c-A:e.lam=c<0?-c-at:-c+at;else{var g,w,x;g=u,v=g*g,v>=1?x=0:x=Math.sqrt(1-v)*Math.sin(c),v+=x*x,v>=1?w=0:w=Math.sqrt(1-v),_.value===X.AREA_1?(v=w,w=-x,x=v):_.value===X.AREA_2?(w=-w,x=-x):_.value===X.AREA_3&&(v=w,w=x,x=-v),this.face===it.RIGHT?(v=g,g=-w,w=v):this.face===it.BACK?(g=-g,w=-w):this.face===it.LEFT&&(v=g,g=w,w=-v),e.phi=Math.acos(-x)-A,e.lam=Math.atan2(w,g),this.face===it.RIGHT?e.lam=we(e.lam,-A):this.face===it.BACK?e.lam=we(e.lam,-at):this.face===it.LEFT&&(e.lam=we(e.lam,+A))}if(this.es!==0){var S,P,C;S=e.phi<0?1:0,P=Math.tan(e.phi),C=this.b/Math.sqrt(P*P+this.one_minus_f_squared),e.phi=Math.atan(Math.sqrt(this.a*this.a-C*C)/(this.one_minus_f*C)),S&&(e.phi=-e.phi)}return e.lam+=this.long0,i.x=e.lam,i.y=e.phi,i}function Ti(i,e,n,s){var a;return i<T?(s.value=X.AREA_0,a=0):(a=Math.atan2(e,n),Math.abs(a)<=K?s.value=X.AREA_0:a>K&&a<=A+K?(s.value=X.AREA_1,a-=A):a>A+K||a<=-(A+K)?(s.value=X.AREA_2,a=a>=0?a-at:a+at):(s.value=X.AREA_3,a+=A)),a}function we(i,e){var n=i+e;return n<-at?n+=Fe:n>+at&&(n-=Fe),n}var Hc=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const Uc={init:Dc,forward:Zc,inverse:jc,names:Hc};var En=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Je=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],is=.8487,ns=1.3523,rs=yt/5,$c=1/rs,xe=18,zi=function(i,e){return i[0]+e*(i[1]+e*(i[2]+e*i[3]))},Wc=function(i,e){return i[1]+e*(2*i[2]+e*3*i[3])};function Vc(i,e,n,s){for(var a=e;s;--s){var l=i(a);if(a-=l,Math.abs(l)<n)break}return a}function Jc(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function Kc(i){var e=I(i.x-this.long0,this.over),n=Math.abs(i.y),s=Math.floor(n*rs);s<0?s=0:s>=xe&&(s=xe-1),n=yt*(n-$c*s);var a={x:zi(En[s],n)*e,y:zi(Je[s],n)};return i.y<0&&(a.y=-a.y),a.x=a.x*this.a*is+this.x0,a.y=a.y*this.a*ns+this.y0,a}function Xc(i){var e={x:(i.x-this.x0)/(this.a*is),y:Math.abs(i.y-this.y0)/(this.a*ns)};if(e.y>=1)e.x/=En[xe][0],e.y=i.y<0?-A:A;else{var n=Math.floor(e.y*xe);for(n<0?n=0:n>=xe&&(n=xe-1);;)if(Je[n][0]>e.y)--n;else if(Je[n+1][0]<=e.y)++n;else break;var s=Je[n],a=5*(e.y-s[0])/(Je[n+1][0]-s[0]);a=Vc(function(l){return(zi(s,l)-e.y)/Wc(s,l)},a,T,100),e.x/=zi(En[n],a),e.y=(5*n+a)*st,i.y<0&&(e.y=-e.y)}return e.x=I(e.x+this.long0,this.over),e}var Qc=["Robinson","robin"];const Yc={init:Jc,forward:Kc,inverse:Xc,names:Qc};function td(){this.name="geocent"}function ed(i){var e=Nr(i,this.es,this.a);return e}function id(i){var e=Or(i,this.es,this.a,this.b);return e}var nd=["Geocentric","geocentric","geocent","Geocent"];const rd={init:td,forward:ed,inverse:id,names:nd};var gt={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Ke={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function sd(){if(Object.keys(Ke).forEach((function(n){if(typeof this[n]>"u")this[n]=Ke[n].def;else{if(Ke[n].num&&isNaN(this[n]))throw new Error("Invalid parameter value, must be numeric "+n+" = "+this[n]);Ke[n].num&&(this[n]=parseFloat(this[n]))}Ke[n].degrees&&(this[n]=this[n]*st)}).bind(this)),Math.abs(Math.abs(this.lat0)-A)<T?this.mode=this.lat0<0?gt.S_POLE:gt.N_POLE:Math.abs(this.lat0)<T?this.mode=gt.EQUIT:(this.mode=gt.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var i=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(i),this.sw=Math.sin(i)}function ad(i){i.x-=this.long0;var e=Math.sin(i.y),n=Math.cos(i.y),s=Math.cos(i.x),a,l;switch(this.mode){case gt.OBLIQ:l=this.sinph0*e+this.cosph0*n*s;break;case gt.EQUIT:l=n*s;break;case gt.S_POLE:l=-e;break;case gt.N_POLE:l=e;break}switch(l=this.pn1/(this.p-l),a=l*n*Math.sin(i.x),this.mode){case gt.OBLIQ:l*=this.cosph0*e-this.sinph0*n*s;break;case gt.EQUIT:l*=e;break;case gt.N_POLE:l*=-(n*s);break;case gt.S_POLE:l*=n*s;break}var h,c;return h=l*this.cg+a*this.sg,c=1/(h*this.sw*this.h1+this.cw),a=(a*this.cg-l*this.sg)*this.cw*c,l=h*c,i.x=a*this.a,i.y=l*this.a,i}function od(i){i.x/=this.a,i.y/=this.a;var e={x:i.x,y:i.y},n,s,a;a=1/(this.pn1-i.y*this.sw),n=this.pn1*i.x*a,s=this.pn1*i.y*this.cw*a,i.x=n*this.cg+s*this.sg,i.y=s*this.cg-n*this.sg;var l=Mt(i.x,i.y);if(Math.abs(l)<T)e.x=0,e.y=i.y;else{var h,c;switch(c=1-l*l*this.pfact,c=(this.p-Math.sqrt(c))/(this.pn1/l+l/this.pn1),h=Math.sqrt(1-c*c),this.mode){case gt.OBLIQ:e.y=Math.asin(h*this.sinph0+i.y*c*this.cosph0/l),i.y=(h-this.sinph0*Math.sin(e.y))*l,i.x*=c*this.cosph0;break;case gt.EQUIT:e.y=Math.asin(i.y*c/l),i.y=h*l,i.x*=c;break;case gt.N_POLE:e.y=Math.asin(h),i.y=-i.y;break;case gt.S_POLE:e.y=-Math.asin(h);break}e.x=Math.atan2(i.x,i.y)}return i.x=e.x+this.long0,i.y=e.y,i}var ld=["Tilted_Perspective","tpers"];const hd={init:sd,forward:ad,inverse:od,names:ld};function cd(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var i=1-this.es,e=1/i;this.radius_p=Math.sqrt(i),this.radius_p2=i,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function dd(i){var e=i.x,n=i.y,s,a,l,h;if(e=e-this.long0,this.shape==="ellipse"){n=Math.atan(this.radius_p2*Math.tan(n));var c=this.radius_p/Mt(this.radius_p*Math.cos(n),Math.sin(n));if(a=c*Math.cos(e)*Math.cos(n),l=c*Math.sin(e)*Math.cos(n),h=c*Math.sin(n),(this.radius_g-a)*a-l*l-h*h*this.radius_p_inv2<0)return i.x=Number.NaN,i.y=Number.NaN,i;s=this.radius_g-a,this.flip_axis?(i.x=this.radius_g_1*Math.atan(l/Mt(h,s)),i.y=this.radius_g_1*Math.atan(h/s)):(i.x=this.radius_g_1*Math.atan(l/s),i.y=this.radius_g_1*Math.atan(h/Mt(l,s)))}else this.shape==="sphere"&&(s=Math.cos(n),a=Math.cos(e)*s,l=Math.sin(e)*s,h=Math.sin(n),s=this.radius_g-a,this.flip_axis?(i.x=this.radius_g_1*Math.atan(l/Mt(h,s)),i.y=this.radius_g_1*Math.atan(h/s)):(i.x=this.radius_g_1*Math.atan(l/s),i.y=this.radius_g_1*Math.atan(h/Mt(l,s))));return i.x=i.x*this.a,i.y=i.y*this.a,i}function ud(i){var e=-1,n=0,s=0,a,l,h,c;if(i.x=i.x/this.a,i.y=i.y/this.a,this.shape==="ellipse"){this.flip_axis?(s=Math.tan(i.y/this.radius_g_1),n=Math.tan(i.x/this.radius_g_1)*Mt(1,s)):(n=Math.tan(i.x/this.radius_g_1),s=Math.tan(i.y/this.radius_g_1)*Mt(1,n));var u=s/this.radius_p;if(a=n*n+u*u+e*e,l=2*this.radius_g*e,h=l*l-4*a*this.C,h<0)return i.x=Number.NaN,i.y=Number.NaN,i;c=(-l-Math.sqrt(h))/(2*a),e=this.radius_g+c*e,n*=c,s*=c,i.x=Math.atan2(n,e),i.y=Math.atan(s*Math.cos(i.x)/e),i.y=Math.atan(this.radius_p_inv2*Math.tan(i.y))}else if(this.shape==="sphere"){if(this.flip_axis?(s=Math.tan(i.y/this.radius_g_1),n=Math.tan(i.x/this.radius_g_1)*Math.sqrt(1+s*s)):(n=Math.tan(i.x/this.radius_g_1),s=Math.tan(i.y/this.radius_g_1)*Math.sqrt(1+n*n)),a=n*n+s*s+e*e,l=2*this.radius_g*e,h=l*l-4*a*this.C,h<0)return i.x=Number.NaN,i.y=Number.NaN,i;c=(-l-Math.sqrt(h))/(2*a),e=this.radius_g+c*e,n*=c,s*=c,i.x=Math.atan2(n,e),i.y=Math.atan(s*Math.cos(i.x)/e)}return i.x=i.x+this.long0,i}var fd=["Geostationary Satellite View","Geostationary_Satellite","geos"];const pd={init:cd,forward:dd,inverse:ud,names:fd};var Xe=1.340264,Qe=-.081106,Ye=893e-6,ti=.003796,Ii=Math.sqrt(3)/2;function md(){this.es=0,this.long0=this.long0!==void 0?this.long0:0,this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0}function _d(i){var e=I(i.x-this.long0,this.over),n=i.y,s=Math.asin(Ii*Math.sin(n)),a=s*s,l=a*a*a;return i.x=e*Math.cos(s)/(Ii*(Xe+3*Qe*a+l*(7*Ye+9*ti*a))),i.y=s*(Xe+Qe*a+l*(Ye+ti*a)),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function gd(i){i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a;var e=1e-9,n=12,s=i.y,a,l,h,c,u,m;for(m=0;m<n&&(a=s*s,l=a*a*a,h=s*(Xe+Qe*a+l*(Ye+ti*a))-i.y,c=Xe+3*Qe*a+l*(7*Ye+9*ti*a),s-=u=h/c,!(Math.abs(u)<e));++m);return a=s*s,l=a*a*a,i.x=Ii*i.x*(Xe+3*Qe*a+l*(7*Ye+9*ti*a))/Math.cos(s),i.y=Math.asin(Math.sin(s)/Ii),i.x=I(i.x+this.long0,this.over),i}var vd=["eqearth","Equal Earth","Equal_Earth"];const bd={init:md,forward:_d,inverse:gd,names:vd};var ei=1e-10;function yd(){var i;if(this.phi1=this.lat1,Math.abs(this.phi1)<ei)throw new Error;this.es?(this.en=mn(this.es),this.m1=be(this.phi1,this.am1=Math.sin(this.phi1),i=Math.cos(this.phi1),this.en),this.am1=i/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=xd,this.forward=wd):(Math.abs(this.phi1)+ei>=A?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=Sd,this.forward=Md)}function wd(i){var e=I(i.x-(this.long0||0),this.over),n=i.y,s,a,l;return s=this.am1+this.m1-be(n,a=Math.sin(n),l=Math.cos(n),this.en),a=l*e/(s*Math.sqrt(1-this.es*a*a)),i.x=s*Math.sin(a),i.y=this.am1-s*Math.cos(a),i.x=this.a*i.x+(this.x0||0),i.y=this.a*i.y+(this.y0||0),i}function xd(i){i.x=(i.x-(this.x0||0))/this.a,i.y=(i.y-(this.y0||0))/this.a;var e,n,s,a;if(n=Mt(i.x,i.y=this.am1-i.y),a=_n(this.am1+this.m1-n,this.es,this.en),(e=Math.abs(a))<A)e=Math.sin(a),s=n*Math.atan2(i.x,i.y)*Math.sqrt(1-this.es*e*e)/Math.cos(a);else if(Math.abs(e-A)<=ei)s=0;else throw new Error;return i.x=I(s+(this.long0||0),this.over),i.y=Yt(a),i}function Md(i){var e=I(i.x-(this.long0||0),this.over),n=i.y,s,a;return a=this.cphi1+this.phi1-n,Math.abs(a)>ei?(i.x=a*Math.sin(s=e*Math.cos(n)/a),i.y=this.cphi1-a*Math.cos(s)):i.x=i.y=0,i.x=this.a*i.x+(this.x0||0),i.y=this.a*i.y+(this.y0||0),i}function Sd(i){i.x=(i.x-(this.x0||0))/this.a,i.y=(i.y-(this.y0||0))/this.a;var e,n,s=Mt(i.x,i.y=this.cphi1-i.y);if(n=this.cphi1+this.phi1-s,Math.abs(n)>A)throw new Error;return Math.abs(Math.abs(n)-A)<=ei?e=0:e=s*Math.atan2(i.x,i.y)/Math.cos(n),i.x=I(e+(this.long0||0),this.over),i.y=Yt(n),i}var Ed=["bonne","Bonne (Werner lat_1=90)"];const Pd={init:yd,names:Ed},ss={OBLIQUE:{forward:Td,inverse:Id},TRANSVERSE:{forward:zd,inverse:Nd}},Ni={ROTATE:{o_alpha:"oAlpha",o_lon_c:"oLongC",o_lat_c:"oLatC"},NEW_POLE:{o_lat_p:"oLatP",o_lon_p:"oLongP"},NEW_EQUATOR:{o_lon_1:"oLong1",o_lat_1:"oLat1",o_lon_2:"oLong2",o_lat_2:"oLat2"}};function kd(){if(this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.title=this.title||"General Oblique Transformation",this.isIdentity=Lr.includes(this.o_proj),!this.o_proj)throw new Error("Missing parameter: o_proj");if(this.o_proj==="ob_tran")throw new Error("Invalid value for o_proj: "+this.o_proj);const i=this.projStr.replace("+proj=ob_tran","").replace("+o_proj=","+proj=").trim(),e=Lt(i);if(!e)throw new Error("Invalid parameter: o_proj. Unknown projection "+this.o_proj);e.long0=0,this.obliqueProjection=e;let n;const s=Object.keys(Ni),a=c=>{if(typeof this[c]>"u")return;const u=parseFloat(this[c])*st;if(isNaN(u))throw new Error("Invalid value for "+c+": "+this[c]);return u};for(let c=0;c<s.length;c++){const u=s[c],m=Ni[u],v=Object.entries(m);if(v.some(([g])=>typeof this[g]<"u")){n=m;for(let g=0;g<v.length;g++){const[w,x]=v[g],S=a(w);if(typeof S>"u")throw new Error("Missing parameter: "+w+".");this[x]=S}break}}if(!n)throw new Error("No valid parameters provided for ob_tran projection.");const{lamp:l,phip:h}=Cd(this,n);this.lamp=l,Math.abs(h)>T?(this.cphip=Math.cos(h),this.sphip=Math.sin(h),this.projectionType=ss.OBLIQUE):this.projectionType=ss.TRANSVERSE}function Ad(i){return this.projectionType.forward(this,i)}function Ld(i){return this.projectionType.inverse(this,i)}function Cd(i,e){let n,s;if(e===Ni.ROTATE){let a=i.oLongC,l=i.oLatC,h=i.oAlpha;if(Math.abs(Math.abs(l)-A)<=T)throw new Error("Invalid value for o_lat_c: "+i.o_lat_c+" should be < 90°");s=a+Math.atan2(-1*Math.cos(h),-1*Math.sin(h)*Math.sin(l)),n=Math.asin(Math.cos(l)*Math.sin(h))}else if(e===Ni.NEW_POLE)s=i.oLongP,n=i.oLatP;else{let a=i.oLong1,l=i.oLat1,h=i.oLong2,c=i.oLat2,u=Math.abs(l);if(Math.abs(l)>A-T)throw new Error("Invalid value for o_lat_1: "+i.o_lat_1+" should be < 90°");if(Math.abs(c)>A-T)throw new Error("Invalid value for o_lat_2: "+i.o_lat_2+" should be < 90°");if(Math.abs(l-c)<T)throw new Error("Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2");if(u<T)throw new Error("Invalid value for o_lat_1: o_lat_1 should be different from zero");s=Math.atan2(Math.cos(l)*Math.sin(c)*Math.cos(a)-Math.sin(l)*Math.cos(c)*Math.cos(h),Math.sin(l)*Math.cos(c)*Math.sin(h)-Math.cos(l)*Math.sin(c)*Math.sin(a)),n=Math.atan(-1*Math.cos(s-a)/Math.tan(l))}return{lamp:s,phip:n}}function Td(i,e){let{x:n,y:s}=e;n+=i.long0;const a=Math.cos(n),l=Math.sin(s),h=Math.cos(s);e.x=I(Math.atan2(h*Math.sin(n),i.sphip*h*a+i.cphip*l)+i.lamp),e.y=Math.asin(i.sphip*l-i.cphip*h*a);const c=i.obliqueProjection.forward(e);return i.isIdentity&&(c.x*=yt,c.y*=yt),c}function zd(i,e){let{x:n,y:s}=e;n+=i.long0;const a=Math.cos(s),l=Math.cos(n);e.x=I(Math.atan2(a*Math.sin(n),Math.sin(s))+i.lamp),e.y=Math.asin(-1*a*l);const h=i.obliqueProjection.forward(e);return i.isIdentity&&(h.x*=yt,h.y*=yt),h}function Id(i,e){i.isIdentity&&(e.x*=st,e.y*=st);const n=i.obliqueProjection.inverse(e);let{x:s,y:a}=n;if(s<Number.MAX_VALUE){s-=i.lamp;const l=Math.cos(s),h=Math.sin(a),c=Math.cos(a);e.x=Math.atan2(c*Math.sin(s),i.sphip*c*l-i.cphip*h),e.y=Math.asin(i.sphip*h+i.cphip*c*l)}return e.x=I(e.x+i.long0),e}function Nd(i,e){i.isIdentity&&(e.x*=st,e.y*=st);const n=i.obliqueProjection.inverse(e);let{x:s,y:a}=n;if(s<Number.MAX_VALUE){const l=Math.cos(a);s-=i.lamp,e.x=Math.atan2(l*Math.sin(s),-1*Math.sin(a)),e.y=Math.asin(l*Math.cos(s))}return e.x=I(e.x+i.long0),e}var Od=["General Oblique Transformation","General_Oblique_Transformation","ob_tran"];const Gd={init:kd,forward:Ad,inverse:Ld,names:Od};function Rd(i){i.Proj.projections.add(ki),i.Proj.projections.add(Ai),i.Proj.projections.add(El),i.Proj.projections.add(Nl),i.Proj.projections.add(Fl),i.Proj.projections.add(Hl),i.Proj.projections.add(Kl),i.Proj.projections.add(eh),i.Proj.projections.add(ah),i.Proj.projections.add(dh),i.Proj.projections.add(Sh),i.Proj.projections.add(Ch),i.Proj.projections.add(Oh),i.Proj.projections.add(Dh),i.Proj.projections.add($h),i.Proj.projections.add(Xh),i.Proj.projections.add(ic),i.Proj.projections.add(oc),i.Proj.projections.add(fc),i.Proj.projections.add(vc),i.Proj.projections.add(Mc),i.Proj.projections.add(Ac),i.Proj.projections.add(Oc),i.Proj.projections.add(qc),i.Proj.projections.add(Uc),i.Proj.projections.add(Yc),i.Proj.projections.add(rd),i.Proj.projections.add(hd),i.Proj.projections.add(pd),i.Proj.projections.add(bd),i.Proj.projections.add(Pd),i.Proj.projections.add(Gd)}const Oi=Object.assign(Zo,{defaultDatum:"WGS84",Proj:Lt,WGS84:new Lt("WGS84"),Point:ve,toPoint:Fr,defs:pt,nadgrid:So,transform:Ei,mgrs:jo,version:"__VERSION__"});Rd(Oi);const Bd=Object.freeze(Object.defineProperty({__proto__:null,default:Oi},Symbol.toStringTag,{value:"Module"}));var Pn={exports:{}};const Fd=Ta(Bd);var as;function qd(){return as||(as=1,(function(i){(function(e){var n,s;n=ur(),s=Fd,i.exports=e(n,s)})(function(e,n){return n.__esModule&&n.default&&(n=n.default),e.Proj={},e.Proj._isProj4Obj=function(s){return typeof s.inverse<"u"&&typeof s.forward<"u"},e.Proj.Projection=e.Class.extend({initialize:function(s,a,l){var h=e.Proj._isProj4Obj(s);this._proj=h?s:this._projFromCodeDef(s,a),this.bounds=h?a:l},project:function(s){var a=this._proj.forward([s.lng,s.lat]);return new e.Point(a[0],a[1])},unproject:function(s,a){var l=this._proj.inverse([s.x,s.y]);return new e.LatLng(l[1],l[0],a)},_projFromCodeDef:function(s,a){if(a)n.defs(s,a);else if(n.defs[s]===void 0){var l=s.split(":");if(l.length>3&&(s=l[l.length-3]+":"+l[l.length-1]),n.defs[s]===void 0)throw"No projection definition for code "+s}return n(s)}}),e.Proj.CRS=e.Class.extend({includes:e.CRS,options:{transformation:new e.Transformation(1,0,-1,0)},initialize:function(s,a,l){var h,c,u,m;if(e.Proj._isProj4Obj(s)?(c=s,h=c.srsCode,m=a||{},this.projection=new e.Proj.Projection(c,m.bounds)):(h=s,u=a,m=l||{},this.projection=new e.Proj.Projection(h,u,m.bounds)),e.Util.setOptions(this,m),this.code=h,this.transformation=this.options.transformation,this.options.origin&&(this.transformation=new e.Transformation(1,-this.options.origin[0],-1,this.options.origin[1])),this.options.scales)this._scales=this.options.scales;else if(this.options.resolutions){this._scales=[];for(var v=this.options.resolutions.length-1;v>=0;v--)this.options.resolutions[v]&&(this._scales[v]=1/this.options.resolutions[v])}this.infinite=!this.options.bounds},scale:function(s){var a=Math.floor(s),l,h,c,u;return s===a?this._scales[s]:(l=this._scales[a],h=this._scales[a+1],c=h-l,u=s-a,l+c*u)},zoom:function(s){var a=this._closestElement(this._scales,s),l=this._scales.indexOf(a),h,c,u;return s===a?l:a===void 0?-1/0:(c=l+1,h=this._scales[c],h===void 0?1/0:(u=h-a,(s-a)/u+l))},distance:e.CRS.Earth.distance,R:e.CRS.Earth.R,_closestElement:function(s,a){for(var l,h=s.length;h--;)s[h]<=a&&(l===void 0||l<s[h])&&(l=s[h]);return l}}),e.Proj.GeoJSON=e.GeoJSON.extend({initialize:function(s,a){this._callLevel=0,e.GeoJSON.prototype.initialize.call(this,s,a)},addData:function(s){var a;s&&(s.crs&&s.crs.type==="name"?a=new e.Proj.CRS(s.crs.properties.name):s.crs&&s.crs.type&&(a=new e.Proj.CRS(s.crs.type+":"+s.crs.properties.code)),a!==void 0&&(this.options.coordsToLatLng=function(l){var h=e.point(l[0],l[1]);return a.projection.unproject(h)})),this._callLevel++;try{e.GeoJSON.prototype.addData.call(this,s)}finally{this._callLevel--,this._callLevel===0&&delete this.options.coordsToLatLng}}}),e.Proj.geoJson=function(s,a){return new e.Proj.GeoJSON(s,a)},e.Proj.ImageOverlay=e.ImageOverlay.extend({initialize:function(s,a,l){e.ImageOverlay.prototype.initialize.call(this,s,null,l),this._projectedBounds=a},_animateZoom:function(s){var a=this._map.getZoomScale(s.zoom),l=e.point(this._projectedBounds.min.x,this._projectedBounds.max.y),h=this._projectedToNewLayerPoint(l,s.zoom,s.center);e.DomUtil.setTransform(this._image,h,a)},_reset:function(){var s=this._map.getZoom(),a=this._map.getPixelOrigin(),l=e.bounds(this._transform(this._projectedBounds.min,s)._subtract(a),this._transform(this._projectedBounds.max,s)._subtract(a)),h=l.getSize();e.DomUtil.setPosition(this._image,l.min),this._image.style.width=h.x+"px",this._image.style.height=h.y+"px"},_projectedToNewLayerPoint:function(s,a,l){var h=this._map.getSize()._divideBy(2),c=this._map.project(l,a)._subtract(h)._round(),u=c.add(this._map._getMapPanePos());return this._transform(s,a)._subtract(u)},_transform:function(s,a){var l=this._map.options.crs,h=l.transformation,c=l.scale(a);return h.transform(s,c)}}),e.Proj.imageOverlay=function(s,a,l){return new e.Proj.ImageOverlay(s,a,l)},e.Proj})})(Pn)),Pn.exports}qd();const os="+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs";Oi.defs("EPSG:28992",os);function Me(i){return i?i.toLowerCase()==="wgs84"?"EPSG:4326":i.toLowerCase()==="rd"?"EPSG:28992":/^\d+$/.test(i)?`EPSG:${i}`:i.toUpperCase():null}function kn(i){const e=Dd(i);if(!e)return!1;const[n,s]=e;return Math.abs(n)>180||Math.abs(s)>90}function Dd(i){const e=i.features||[i];for(const n of e){const s=n.geometry?.coordinates;if(!s)continue;let a=s;for(;Array.isArray(a[0]);)a=a[0];return a}return null}function ls(i){const e=i.crs?.properties?.name;if(!e)return null;const n=e.match(/EPSG::?(\d+)$/i);return n?`EPSG:${n[1]}`:e.match(/^EPSG:\d+$/i)?e.toUpperCase():null}function Gi(i,e){const[n,s]=i;return Oi(e,"EPSG:4326",[n,s])}function Zd(){return new G.Proj.CRS("EPSG:28992",os,{resolutions:[3440.64,1720.32,860.16,430.08,215.04,107.52,53.76,26.88,13.44,6.72,3.36,1.68,.84,.42,.21],bounds:G.bounds([-285401.92,22598.08],[595401.9199999999,903401.9199999999]),origin:[-285401.92,22598.08]})}const hs={search:`<symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="11" cy="11" r="8"/>
<path d="m21 21-4.35-4.35"/>
</symbol>`,close:`<symbol id="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M18 6 6 18"/>
<path d="m6 6 12 12"/>
</symbol>`,spinner:`<symbol id="icon-spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M21 12a9 9 0 1 1-6.219-8.56"/>
</symbol>`,"arrow-left":`<symbol id="icon-arrow-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M19 12H5"/>
<path d="m12 5-7 7 7 7"/>
</symbol>`,"arrow-right":`<symbol id="icon-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 12h14"/>
<path d="m12 5 7 7-7 7"/>
</symbol>`,hamburger:`<symbol id="icon-hamburger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M4 6h16"/>
<path d="M4 12h16"/>
<path d="M4 18h16"/>
</symbol>`,list:`<symbol id="icon-list" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M8 6h13"/>
<path d="M8 12h13"/>
<path d="M8 18h13"/>
<path d="M3 6h.01"/>
<path d="M3 12h.01"/>
<path d="M3 18h.01"/>
</symbol>`,filter:`<symbol id="icon-filter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M22 3H2l8 9.46V19l4 2V12.46L22 3z"/>
</symbol>`,"chevron-down":`<symbol id="icon-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="m6 9 6 6 6-6"/>
</symbol>`,"chevron-left":`<symbol id="icon-chevron-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="m15 18-6-6 6-6"/>
</symbol>`,"chevron-right":`<symbol id="icon-chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="m9 18 6-6-6-6"/>
</symbol>`,check:`<symbol id="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M20 6 9 17l-5-5"/>
</symbol>`,plus:`<symbol id="icon-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 12h14"/>
<path d="M12 5v14"/>
</symbol>`,minus:`<symbol id="icon-minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M5 12h14"/>
</symbol>`,grid:`<symbol id="icon-grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect width="7" height="7" x="3" y="3" rx="1"/>
<rect width="7" height="7" x="14" y="3" rx="1"/>
<rect width="7" height="7" x="14" y="14" rx="1"/>
<rect width="7" height="7" x="3" y="14" rx="1"/>
</symbol>`,map:`<symbol id="icon-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"/>
<path d="M9 3v15"/>
<path d="M15 6v15"/>
</symbol>`,"map-pin":`<symbol id="icon-map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
<circle cx="12" cy="10" r="3"/>
</symbol>`,"external-link":`<symbol id="icon-external-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M15 3h6v6"/>
<path d="M10 14 21 3"/>
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
</symbol>`};function cs(i){return`<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true"><defs>
${i}
</defs></svg>`}const jd=cs(Object.values(hs).join(`
`));let An=null,ds={},Se=null;const us=new Set;function fs(){if(An!==null)return An;if(typeof window<"u"&&window.__DRAAD_MAPS_ICON_SPRITE__)return window.__DRAAD_MAPS_ICON_SPRITE__;if(Se)return Se;const i={...hs,...ds};return Se=cs(Object.values(i).join(`
`)),Se}function ps(){const i=fs();for(const e of us){const n=e.querySelector("[data-dm-icons]");n&&(n.innerHTML=i)}}function Hd(i){An=i,Se=null,ps()}function Ud(i){Object.assign(ds,i),Se=null,ps()}function Ut(i){if(us.add(i),i.querySelector("[data-dm-icons]"))return;const e=document.createElement("div");e.setAttribute("data-dm-icons",""),e.innerHTML=fs(),i.prepend(e)}const $d=`/* required styles */\r
\r
.leaflet-pane,\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-tile-container,\r
.leaflet-pane > svg,\r
.leaflet-pane > canvas,\r
.leaflet-zoom-box,\r
.leaflet-image-layer,\r
.leaflet-layer {\r
	position: absolute;\r
	left: 0;\r
	top: 0;\r
	}\r
.leaflet-container {\r
	overflow: hidden;\r
	}\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	-webkit-user-select: none;\r
	   -moz-user-select: none;\r
	        user-select: none;\r
	  -webkit-user-drag: none;\r
	}\r
/* Prevents IE11 from highlighting tiles in blue */\r
.leaflet-tile::selection {\r
	background: transparent;\r
}\r
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r
.leaflet-safari .leaflet-tile {\r
	image-rendering: -webkit-optimize-contrast;\r
	}\r
/* hack that prevents hw layers "stretching" when loading new tiles */\r
.leaflet-safari .leaflet-tile-container {\r
	width: 1600px;\r
	height: 1600px;\r
	-webkit-transform-origin: 0 0;\r
	}\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	display: block;\r
	}\r
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r
.leaflet-container .leaflet-overlay-pane svg {\r
	max-width: none !important;\r
	max-height: none !important;\r
	}\r
.leaflet-container .leaflet-marker-pane img,\r
.leaflet-container .leaflet-shadow-pane img,\r
.leaflet-container .leaflet-tile-pane img,\r
.leaflet-container img.leaflet-image-layer,\r
.leaflet-container .leaflet-tile {\r
	max-width: none !important;\r
	max-height: none !important;\r
	width: auto;\r
	padding: 0;\r
	}\r
\r
.leaflet-container img.leaflet-tile {\r
	/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\r
	mix-blend-mode: plus-lighter;\r
}\r
\r
.leaflet-container.leaflet-touch-zoom {\r
	-ms-touch-action: pan-x pan-y;\r
	touch-action: pan-x pan-y;\r
	}\r
.leaflet-container.leaflet-touch-drag {\r
	-ms-touch-action: pinch-zoom;\r
	/* Fallback for FF which doesn't support pinch-zoom */\r
	touch-action: none;\r
	touch-action: pinch-zoom;\r
}\r
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r
	-ms-touch-action: none;\r
	touch-action: none;\r
}\r
.leaflet-container {\r
	-webkit-tap-highlight-color: transparent;\r
}\r
.leaflet-container a {\r
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r
}\r
.leaflet-tile {\r
	filter: inherit;\r
	visibility: hidden;\r
	}\r
.leaflet-tile-loaded {\r
	visibility: inherit;\r
	}\r
.leaflet-zoom-box {\r
	width: 0;\r
	height: 0;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	z-index: 800;\r
	}\r
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r
.leaflet-overlay-pane svg {\r
	-moz-user-select: none;\r
	}\r
\r
.leaflet-pane         { z-index: 400; }\r
\r
.leaflet-tile-pane    { z-index: 200; }\r
.leaflet-overlay-pane { z-index: 400; }\r
.leaflet-shadow-pane  { z-index: 500; }\r
.leaflet-marker-pane  { z-index: 600; }\r
.leaflet-tooltip-pane   { z-index: 650; }\r
.leaflet-popup-pane   { z-index: 700; }\r
\r
.leaflet-map-pane canvas { z-index: 100; }\r
.leaflet-map-pane svg    { z-index: 200; }\r
\r
.leaflet-vml-shape {\r
	width: 1px;\r
	height: 1px;\r
	}\r
.lvml {\r
	behavior: url(#default#VML);\r
	display: inline-block;\r
	position: absolute;\r
	}\r
\r
\r
/* control positioning */\r
\r
.leaflet-control {\r
	position: relative;\r
	z-index: 800;\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
.leaflet-top,\r
.leaflet-bottom {\r
	position: absolute;\r
	z-index: 1000;\r
	pointer-events: none;\r
	}\r
.leaflet-top {\r
	top: 0;\r
	}\r
.leaflet-right {\r
	right: 0;\r
	}\r
.leaflet-bottom {\r
	bottom: 0;\r
	}\r
.leaflet-left {\r
	left: 0;\r
	}\r
.leaflet-control {\r
	float: left;\r
	clear: both;\r
	}\r
.leaflet-right .leaflet-control {\r
	float: right;\r
	}\r
.leaflet-top .leaflet-control {\r
	margin-top: 10px;\r
	}\r
.leaflet-bottom .leaflet-control {\r
	margin-bottom: 10px;\r
	}\r
.leaflet-left .leaflet-control {\r
	margin-left: 10px;\r
	}\r
.leaflet-right .leaflet-control {\r
	margin-right: 10px;\r
	}\r
\r
\r
/* zoom and fade animations */\r
\r
.leaflet-fade-anim .leaflet-popup {\r
	opacity: 0;\r
	-webkit-transition: opacity 0.2s linear;\r
	   -moz-transition: opacity 0.2s linear;\r
	        transition: opacity 0.2s linear;\r
	}\r
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r
	opacity: 1;\r
	}\r
.leaflet-zoom-animated {\r
	-webkit-transform-origin: 0 0;\r
	    -ms-transform-origin: 0 0;\r
	        transform-origin: 0 0;\r
	}\r
svg.leaflet-zoom-animated {\r
	will-change: transform;\r
}\r
\r
.leaflet-zoom-anim .leaflet-zoom-animated {\r
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r
	}\r
.leaflet-zoom-anim .leaflet-tile,\r
.leaflet-pan-anim .leaflet-tile {\r
	-webkit-transition: none;\r
	   -moz-transition: none;\r
	        transition: none;\r
	}\r
\r
.leaflet-zoom-anim .leaflet-zoom-hide {\r
	visibility: hidden;\r
	}\r
\r
\r
/* cursors */\r
\r
.leaflet-interactive {\r
	cursor: pointer;\r
	}\r
.leaflet-grab {\r
	cursor: -webkit-grab;\r
	cursor:    -moz-grab;\r
	cursor:         grab;\r
	}\r
.leaflet-crosshair,\r
.leaflet-crosshair .leaflet-interactive {\r
	cursor: crosshair;\r
	}\r
.leaflet-popup-pane,\r
.leaflet-control {\r
	cursor: auto;\r
	}\r
.leaflet-dragging .leaflet-grab,\r
.leaflet-dragging .leaflet-grab .leaflet-interactive,\r
.leaflet-dragging .leaflet-marker-draggable {\r
	cursor: move;\r
	cursor: -webkit-grabbing;\r
	cursor:    -moz-grabbing;\r
	cursor:         grabbing;\r
	}\r
\r
/* marker & overlays interactivity */\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-image-layer,\r
.leaflet-pane > svg path,\r
.leaflet-tile-container {\r
	pointer-events: none;\r
	}\r
\r
.leaflet-marker-icon.leaflet-interactive,\r
.leaflet-image-layer.leaflet-interactive,\r
.leaflet-pane > svg path.leaflet-interactive,\r
svg.leaflet-image-layer.leaflet-interactive path {\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
\r
/* visual tweaks */\r
\r
.leaflet-container {\r
	background: #ddd;\r
	outline-offset: 1px;\r
	}\r
.leaflet-container a {\r
	color: #0078A8;\r
	}\r
.leaflet-zoom-box {\r
	border: 2px dotted #38f;\r
	background: rgba(255,255,255,0.5);\r
	}\r
\r
\r
/* general typography */\r
.leaflet-container {\r
	font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;\r
	font-size: 12px;\r
	font-size: 0.75rem;\r
	line-height: 1.5;\r
	}\r
\r
\r
/* general toolbar styles */\r
\r
.leaflet-bar {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);\r
	border-radius: 4px;\r
	}\r
.leaflet-bar a {\r
	background-color: #fff;\r
	border-bottom: 1px solid #ccc;\r
	width: 26px;\r
	height: 26px;\r
	line-height: 26px;\r
	display: block;\r
	text-align: center;\r
	text-decoration: none;\r
	color: black;\r
	}\r
.leaflet-bar a,\r
.leaflet-control-layers-toggle {\r
	background-position: 50% 50%;\r
	background-repeat: no-repeat;\r
	display: block;\r
	}\r
.leaflet-bar a:hover,\r
.leaflet-bar a:focus {\r
	background-color: #f4f4f4;\r
	}\r
.leaflet-bar a:first-child {\r
	border-top-left-radius: 4px;\r
	border-top-right-radius: 4px;\r
	}\r
.leaflet-bar a:last-child {\r
	border-bottom-left-radius: 4px;\r
	border-bottom-right-radius: 4px;\r
	border-bottom: none;\r
	}\r
.leaflet-bar a.leaflet-disabled {\r
	cursor: default;\r
	background-color: #f4f4f4;\r
	color: #bbb;\r
	}\r
\r
.leaflet-touch .leaflet-bar a {\r
	width: 30px;\r
	height: 30px;\r
	line-height: 30px;\r
	}\r
.leaflet-touch .leaflet-bar a:first-child {\r
	border-top-left-radius: 2px;\r
	border-top-right-radius: 2px;\r
	}\r
.leaflet-touch .leaflet-bar a:last-child {\r
	border-bottom-left-radius: 2px;\r
	border-bottom-right-radius: 2px;\r
	}\r
\r
/* zoom control */\r
\r
.leaflet-control-zoom-in,\r
.leaflet-control-zoom-out {\r
	font: bold 18px 'Lucida Console', Monaco, monospace;\r
	text-indent: 1px;\r
	}\r
\r
.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r
	font-size: 22px;\r
	}\r
\r
\r
/* layers control */\r
\r
.leaflet-control-layers {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);\r
	background: #fff;\r
	border-radius: 5px;\r
	}\r
.leaflet-control-layers-toggle {\r
	background-image: url(images/layers.png);\r
	width: 36px;\r
	height: 36px;\r
	}\r
.leaflet-retina .leaflet-control-layers-toggle {\r
	background-image: url(images/layers-2x.png);\r
	background-size: 26px 26px;\r
	}\r
.leaflet-touch .leaflet-control-layers-toggle {\r
	width: 44px;\r
	height: 44px;\r
	}\r
.leaflet-control-layers .leaflet-control-layers-list,\r
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r
	display: none;\r
	}\r
.leaflet-control-layers-expanded .leaflet-control-layers-list {\r
	display: block;\r
	position: relative;\r
	}\r
.leaflet-control-layers-expanded {\r
	padding: 6px 10px 6px 6px;\r
	color: #333;\r
	background: #fff;\r
	}\r
.leaflet-control-layers-scrollbar {\r
	overflow-y: scroll;\r
	overflow-x: hidden;\r
	padding-right: 5px;\r
	}\r
.leaflet-control-layers-selector {\r
	margin-top: 2px;\r
	position: relative;\r
	top: 1px;\r
	}\r
.leaflet-control-layers label {\r
	display: block;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	}\r
.leaflet-control-layers-separator {\r
	height: 0;\r
	border-top: 1px solid #ddd;\r
	margin: 5px -10px 5px -6px;\r
	}\r
\r
/* Default icon URLs */\r
.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r
	background-image: url(images/marker-icon.png);\r
	}\r
\r
\r
/* attribution and scale controls */\r
\r
.leaflet-container .leaflet-control-attribution {\r
	background: #fff;\r
	background: rgba(255, 255, 255, 0.8);\r
	margin: 0;\r
	}\r
.leaflet-control-attribution,\r
.leaflet-control-scale-line {\r
	padding: 0 5px;\r
	color: #333;\r
	line-height: 1.4;\r
	}\r
.leaflet-control-attribution a {\r
	text-decoration: none;\r
	}\r
.leaflet-control-attribution a:hover,\r
.leaflet-control-attribution a:focus {\r
	text-decoration: underline;\r
	}\r
.leaflet-attribution-flag {\r
	display: inline !important;\r
	vertical-align: baseline !important;\r
	width: 1em;\r
	height: 0.6669em;\r
	}\r
.leaflet-left .leaflet-control-scale {\r
	margin-left: 5px;\r
	}\r
.leaflet-bottom .leaflet-control-scale {\r
	margin-bottom: 5px;\r
	}\r
.leaflet-control-scale-line {\r
	border: 2px solid #777;\r
	border-top: none;\r
	line-height: 1.1;\r
	padding: 2px 5px 1px;\r
	white-space: nowrap;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	background: rgba(255, 255, 255, 0.8);\r
	text-shadow: 1px 1px #fff;\r
	}\r
.leaflet-control-scale-line:not(:first-child) {\r
	border-top: 2px solid #777;\r
	border-bottom: none;\r
	margin-top: -2px;\r
	}\r
.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r
	border-bottom: 2px solid #777;\r
	}\r
\r
.leaflet-touch .leaflet-control-attribution,\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	box-shadow: none;\r
	}\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	border: 2px solid rgba(0,0,0,0.2);\r
	background-clip: padding-box;\r
	}\r
\r
\r
/* popup */\r
\r
.leaflet-popup {\r
	position: absolute;\r
	text-align: center;\r
	margin-bottom: 20px;\r
	}\r
.leaflet-popup-content-wrapper {\r
	padding: 1px;\r
	text-align: left;\r
	border-radius: 12px;\r
	}\r
.leaflet-popup-content {\r
	margin: 13px 24px 13px 20px;\r
	line-height: 1.3;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	min-height: 1px;\r
	}\r
.leaflet-popup-content p {\r
	margin: 17px 0;\r
	margin: 1.3em 0;\r
	}\r
.leaflet-popup-tip-container {\r
	width: 40px;\r
	height: 20px;\r
	position: absolute;\r
	left: 50%;\r
	margin-top: -1px;\r
	margin-left: -20px;\r
	overflow: hidden;\r
	pointer-events: none;\r
	}\r
.leaflet-popup-tip {\r
	width: 17px;\r
	height: 17px;\r
	padding: 1px;\r
\r
	margin: -10px auto 0;\r
	pointer-events: auto;\r
\r
	-webkit-transform: rotate(45deg);\r
	   -moz-transform: rotate(45deg);\r
	    -ms-transform: rotate(45deg);\r
	        transform: rotate(45deg);\r
	}\r
.leaflet-popup-content-wrapper,\r
.leaflet-popup-tip {\r
	background: white;\r
	color: #333;\r
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);\r
	}\r
.leaflet-container a.leaflet-popup-close-button {\r
	position: absolute;\r
	top: 0;\r
	right: 0;\r
	border: none;\r
	text-align: center;\r
	width: 24px;\r
	height: 24px;\r
	font: 16px/24px Tahoma, Verdana, sans-serif;\r
	color: #757575;\r
	text-decoration: none;\r
	background: transparent;\r
	}\r
.leaflet-container a.leaflet-popup-close-button:hover,\r
.leaflet-container a.leaflet-popup-close-button:focus {\r
	color: #585858;\r
	}\r
.leaflet-popup-scrolled {\r
	overflow: auto;\r
	}\r
\r
.leaflet-oldie .leaflet-popup-content-wrapper {\r
	-ms-zoom: 1;\r
	}\r
.leaflet-oldie .leaflet-popup-tip {\r
	width: 24px;\r
	margin: 0 auto;\r
\r
	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r
	}\r
\r
.leaflet-oldie .leaflet-control-zoom,\r
.leaflet-oldie .leaflet-control-layers,\r
.leaflet-oldie .leaflet-popup-content-wrapper,\r
.leaflet-oldie .leaflet-popup-tip {\r
	border: 1px solid #999;\r
	}\r
\r
\r
/* div icon */\r
\r
.leaflet-div-icon {\r
	background: #fff;\r
	border: 1px solid #666;\r
	}\r
\r
\r
/* Tooltip */\r
/* Base styles for the element that has a tooltip */\r
.leaflet-tooltip {\r
	position: absolute;\r
	padding: 6px;\r
	background-color: #fff;\r
	border: 1px solid #fff;\r
	border-radius: 3px;\r
	color: #222;\r
	white-space: nowrap;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
	pointer-events: none;\r
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);\r
	}\r
.leaflet-tooltip.leaflet-interactive {\r
	cursor: pointer;\r
	pointer-events: auto;\r
	}\r
.leaflet-tooltip-top:before,\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	position: absolute;\r
	pointer-events: none;\r
	border: 6px solid transparent;\r
	background: transparent;\r
	content: "";\r
	}\r
\r
/* Directions */\r
\r
.leaflet-tooltip-bottom {\r
	margin-top: 6px;\r
}\r
.leaflet-tooltip-top {\r
	margin-top: -6px;\r
}\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-top:before {\r
	left: 50%;\r
	margin-left: -6px;\r
	}\r
.leaflet-tooltip-top:before {\r
	bottom: 0;\r
	margin-bottom: -12px;\r
	border-top-color: #fff;\r
	}\r
.leaflet-tooltip-bottom:before {\r
	top: 0;\r
	margin-top: -12px;\r
	margin-left: -6px;\r
	border-bottom-color: #fff;\r
	}\r
.leaflet-tooltip-left {\r
	margin-left: -6px;\r
}\r
.leaflet-tooltip-right {\r
	margin-left: 6px;\r
}\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	top: 50%;\r
	margin-top: -6px;\r
	}\r
.leaflet-tooltip-left:before {\r
	right: 0;\r
	margin-right: -12px;\r
	border-left-color: #fff;\r
	}\r
.leaflet-tooltip-right:before {\r
	left: 0;\r
	margin-left: -12px;\r
	border-right-color: #fff;\r
	}\r
\r
/* Printing */\r
\r
@media print {\r
	/* Prevent printers from removing background-images of controls. */\r
	.leaflet-control {\r
		-webkit-print-color-adjust: exact;\r
		print-color-adjust: exact;\r
		}\r
	}\r
`,Wd=`:host {
	display: var(--draad-map-components-map-display, block);
	inline-size: var(--draad-map-components-map-width, 100%);
	block-size: var(--draad-map-components-map-height, auto);
	/* Floor at the mobile height (70svh) at EVERY width, so the map never dips
	   below it just above the mobile breakpoint — the aspect-ratio only makes it
	   taller on wide screens. Also never shorter than the tallest infowindow
	   (--…-content-min-height is set by JS so cards don't clip). */
	min-block-size: max(
		var(--draad-map-components-map-min-height, 70svh),
		var(--draad-map-components-map-content-min-height, 0px)
	);
	aspect-ratio: var(--draad-map-components-map-aspect-ratio, 4 / 3);
}

.icon {
	display: block;
	inline-size: 1em;
	block-size: 1em;
	fill: currentColor;
}

:host([list-open]) {
	aspect-ratio: unset;
	min-block-size: unset;
	block-size: auto;
}

:host([list-open]) .map,
:host([list-open]) .map__container {
	block-size: auto;
}

.map {
	position: relative;
	display: flex;
	flex-direction: column;
	inline-size: 100%;
	block-size: 100%;
	margin: 0;
}

/* Toolbar above the map */
.map__toolbar {
	display: flex;
	align-items: flex-end;
	flex-wrap: wrap;
	gap: var(--draad-map-components-map-toolbar-gap, 8px);
	padding: var(--draad-map-components-map-toolbar-padding, 12px 0);
	background: var(--draad-map-components-map-toolbar-color-bg, #ffffff);
	border-block-end: var(--draad-map-components-map-toolbar-border-width, 1px) solid var(--draad-map-components-map-toolbar-color-border, #e5e5e5);
	flex-shrink: 0;
	inline-size: min(100%, var(--draad-map-components-toolbar-width, 100%));
	margin-inline: auto;
}

/* Right-align the list toggle */
.map__toolbar ::slotted(dm-list) {
	margin-inline-start: auto;
}

/* On small screens: search fills full row, buttons wrap below */
@media (max-width: 640px) {
	/* The full-width card sits above the bottom-left zoom control on mobile.
	   Lift its bottom edge clear of the zoom (its own margin + height) and leave
	   the same gap above it as the card has on its other sides. */
	:host {
		--draad-map-components-infowindow-offset-bottom: calc(
			10px                                                              /* zoom's bottom margin (Leaflet default) */
			+ var(--draad-map-components-map-zoom-size, 36px)                 /* zoom height */
			+ var(--draad-map-components-infowindow-offset-top, 10px)         /* gap matching the card's top/sides */
		);
	}
	/* A 4/3 landscape map is too short on a phone (collapses to the min-height
	   floor). Track the viewport height so the map follows the screen shape.
	   Floor scales with viewport width (engages on short/landscape screens)
	   rather than a static px. */
	:host(:not([list-open])) {
		aspect-ratio: auto;
		block-size: var(--draad-map-components-map-height-mobile, 70svh);
		min-block-size: max(
			var(--draad-map-components-map-min-height-mobile, 80vw),
			var(--draad-map-components-map-content-min-height, 0px)
		);
	}
	.map__toolbar ::slotted(dm-search) {
		flex: 1 1 100%;
	}
	.map__toolbar ::slotted(dm-list) {
		margin-inline-start: 0;
	}
	/* Full-width infowindow on narrow screens: span the area edge-to-edge (left
	   gap matches the others) and stretch the slotted card to fill it (the card
	   sets its own inline-size to 100% in its mobile rule). The :host() qualifier
	   raises specificity above the base .map__position--top-right rule, which is
	   declared later in the file. */
	:host(:not([list-open])) .map__position--top-right {
		inset-inline-start: var(--draad-map-components-infowindow-offset-left, 10px);
		align-items: stretch;
	}
	/* Lay the zoom buttons side-by-side on mobile to save vertical space,
	   reversed so − sits on the left and + on the right. */
	.leaflet-control-container .leaflet-control-zoom {
		display: flex;
		flex-direction: row-reverse;
	}
	.leaflet-control-container .leaflet-control-zoom a {
		border-block-end: none;
	}
	/* Divider on the left button's trailing edge, between the two buttons. */
	.leaflet-control-container .leaflet-control-zoom a:last-child {
		border-inline-end: var(--draad-map-components-map-zoom-border-width, 1px) solid var(--draad-map-components-map-zoom-color-divider, #e5e5e5);
	}
}

.map__toolbar:empty {
	display: none;
}

/* Map container (holds canvas + overlays) */
.map__container {
	position: relative;
	flex: 1;
	min-block-size: 0;
}

.map__infowindow {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: 1002;
}

.map__infowindow ::slotted(*) {
	pointer-events: auto;
}

.map__canvas {
	inline-size: 100%;
	block-size: 100%;
	/* ponytail: own stacking context so Leaflet's pane/control z-indexes stay inside the canvas */
	isolation: isolate;
}

.map__list {
	inline-size: 100%;
}

.map__position {
	position: absolute;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	gap: var(--draad-map-components-map-position-gap, 8px);
	pointer-events: none;
	max-block-size: calc(100% - 20px);
	overflow-y: auto;
}

.map__position ::slotted(*) {
	pointer-events: auto;
}

.map__position--top-left {
	inset-block-start: var(--draad-map-components-map-position-offset, 10px);
	inset-inline-start: var(--draad-map-components-map-position-offset, 10px);
}

.map__position--top-right {
	/* Outer spacing of the area the infowindow can fill — adjustable per side so
	   the card can be kept clear of the zoom control or other overlays. Defaults
	   are literal (NOT the shared --map-position-offset, which themes may zero
	   for a flush toolbar) so the card always keeps its own gap. Left is unset
	   (card stays anchored to the right) until a left spacing is given. */
	inset-block-start: var(--draad-map-components-infowindow-offset-top, 10px);
	inset-block-end: var(--draad-map-components-infowindow-offset-bottom, 24px);
	inset-inline-end: var(--draad-map-components-infowindow-offset-right, 10px);
	inset-inline-start: var(--draad-map-components-infowindow-offset-left, auto);
	z-index: 1001;
	overflow: hidden;
	align-items: flex-start;
}

.map__position--bottom-left {
	inset-block-end: var(--draad-map-components-map-position-offset-bottom, var(--draad-map-components-map-position-offset, 24px));
	inset-inline-start: var(--draad-map-components-map-position-offset, 10px);
}

.map__position--bottom-right {
	inset-block-end: var(--draad-map-components-map-position-offset-bottom, var(--draad-map-components-map-position-offset, 24px));
	inset-inline-end: var(--draad-map-components-map-position-offset, 10px);
}

/* Leaflet overrides */
.leaflet-control-container .leaflet-attribution-flag {
	/* !important is needed here to overwrite the important in the Leaflet styles */
	display: none !important;
}

/* Zoom control styling to match design */
.leaflet-control-container .leaflet-control-zoom {
	border: var(--draad-map-components-map-zoom-border-width, 1px) solid var(--draad-map-components-map-zoom-color-border, #e5e5e5);
	border-radius: var(--draad-map-components-map-zoom-radius, 6px);
	box-shadow: none;
	overflow: hidden;
}

.leaflet-control-container .leaflet-control-zoom a {
	display: flex;
	align-items: center;
	justify-content: center;
	inline-size: var(--draad-map-components-map-zoom-size, 36px);
	block-size: var(--draad-map-components-map-zoom-size, 36px);
	line-height: 1;
	font-size: var(--draad-map-components-map-zoom-font-size, 1rem);
	font-weight: var(--draad-map-components-map-zoom-font-weight, var(--draad-map-components-font-weight-normal, 400));
	color: var(--draad-map-components-map-zoom-color-text, currentColor);
	background: var(--draad-map-components-map-zoom-color-bg, #ffffff);
	border: none;
	border-block-end: var(--draad-map-components-map-zoom-border-width, 1px) solid var(--draad-map-components-map-zoom-color-divider, #e5e5e5);
}

.map__zoom-icon {
	inline-size: 16px;
	block-size: 16px;
}

.leaflet-control-container .leaflet-control-zoom a:last-child {
	border-block-end: none;
}

.leaflet-control-container .leaflet-control-zoom a:hover {
	background: var(--draad-map-components-map-zoom-color-bg-hover, #f5f5f5);
	color: var(--draad-map-components-map-zoom-color-text-hover, currentColor);
}

.leaflet-control-container .leaflet-control-zoom a:focus-visible {
	outline: 2px solid var(--draad-map-components-map-zoom-color-focus, Highlight);
	outline-offset: -2px;
}

.leaflet-control-container .leaflet-control-zoom-in,
.leaflet-control-container .leaflet-control-zoom-out {
	font-family: var(--draad-map-components-map-font-family, var(--draad-map-components-font-family));
}

/* Cluster icon overrides */
.marker-cluster-small,
.marker-cluster-medium,
.marker-cluster-large {
	background-color: var(--draad-map-components-cluster-color-bg-outer, #fff);
	border-radius: 50%;
	box-shadow: var(--draad-map-components-cluster-shadow, 0 2px 6px rgba(0, 0, 0, 0.25));
}

.marker-cluster-small div,
.marker-cluster-medium div,
.marker-cluster-large div {
	background-color: var(--draad-map-components-cluster-color-bg, #0a0a0a);
	color: var(--draad-map-components-cluster-color-text, #fff);
	border-radius: 50%;
	margin: var(--draad-map-components-cluster-inner-margin, 3px);
	width: calc(100% - var(--draad-map-components-cluster-inner-margin, 3px) * 2) !important;
	height: calc(100% - var(--draad-map-components-cluster-inner-margin, 3px) * 2) !important;
	line-height: calc(var(--draad-map-components-cluster-size, 40px) - var(--draad-map-components-cluster-inner-margin, 3px) * 2) !important;
	font-weight: var(--draad-map-components-cluster-font-weight, 600);
	font-size: var(--draad-map-components-cluster-font-size, 14px);
}

/* Motion preference - wrap any transitions/animations */
@media (prefers-reduced-motion: no-preference) {
	.leaflet-control-container .leaflet-control-zoom a {
		transition: background-color 0.15s ease, color 0.15s ease;
	}
}
`,Vd=`.leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {
	-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;
	-moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;
	-o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;
	transition: transform 0.3s ease-out, opacity 0.3s ease-in;
}

.leaflet-cluster-spider-leg {
	/* stroke-dashoffset (duration and function) should match with leaflet-marker-icon transform in order to track it exactly */
	-webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;
	-moz-transition: -moz-stroke-dashoffset 0.3s ease-out, -moz-stroke-opacity 0.3s ease-in;
	-o-transition: -o-stroke-dashoffset 0.3s ease-out, -o-stroke-opacity 0.3s ease-in;
	transition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;
}

.marker-cluster-small {
	background-color: rgba(181, 226, 140, 0.6);
}
.marker-cluster-small div {
	background-color: rgba(110, 204, 57, 0.6);
}

.marker-cluster-medium {
	background-color: rgba(241, 211, 87, 0.6);
}
.marker-cluster-medium div {
	background-color: rgba(240, 194, 12, 0.6);
}

.marker-cluster-large {
	background-color: rgba(253, 156, 115, 0.6);
}
.marker-cluster-large div {
	background-color: rgba(241, 128, 23, 0.6);
}

/* IE 6-8 fallback colors */
.leaflet-oldie .marker-cluster-small {
	background-color: rgb(181, 226, 140);
}
.leaflet-oldie .marker-cluster-small div {
	background-color: rgb(110, 204, 57);
}

.leaflet-oldie .marker-cluster-medium {
	background-color: rgb(241, 211, 87);
}
.leaflet-oldie .marker-cluster-medium div {
	background-color: rgb(240, 194, 12);
}

.leaflet-oldie .marker-cluster-large {
	background-color: rgb(253, 156, 115);
}
.leaflet-oldie .marker-cluster-large div {
	background-color: rgb(241, 128, 23);
}

.marker-cluster {
	background-clip: padding-box;
	border-radius: 20px;
}
.marker-cluster div {
	width: 30px;
	height: 30px;
	margin-left: 5px;
	margin-top: 5px;

	text-align: center;
	border-radius: 15px;
	font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
.marker-cluster span {
	line-height: 30px;
}
`,ms=`.list {
	font-family: var(--draad-map-components-list-font-family, var(--draad-map-components-font-family, inherit));
	font-size: var(--draad-map-components-list-font-size, var(--draad-map-components-font-size-sm, 0.875rem));
}

.icon {
	display: block;
	inline-size: 1em;
	block-size: 1em;
	fill: currentColor;
}

/* Toggle button - secondary (outlined) style */
.list__toggle {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	gap: var(--draad-map-components-button-secondary-gap, 8px);
	padding: var(--draad-map-components-button-secondary-lg-padding, 10px 16px);
	block-size: var(--draad-map-components-button-secondary-lg-block-size, 40px);
	border: var(--draad-map-components-button-secondary-border-width, 1px) solid var(--draad-map-components-button-secondary-color-border, currentColor);
	border-radius: var(--draad-map-components-button-secondary-radius, 6px);
	background: var(--draad-map-components-button-secondary-color-bg, #fff);
	cursor: pointer;
	font-family: var(--draad-map-components-font-family);
	font-size: var(--draad-map-components-button-secondary-lg-font-size, 0.875rem);
	font-weight: var(--draad-map-components-button-secondary-lg-font-weight, 500);
	line-height: var(--draad-map-components-button-secondary-lg-line-height, 1.5);
	color: var(--draad-map-components-button-secondary-color-text, currentColor);
}

@media (prefers-reduced-motion: no-preference) {
	.list__toggle {
		transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
	}
}

.list__toggle:hover {
	border-color: var(--draad-map-components-button-secondary-color-border-hover, currentColor);
	color: var(--draad-map-components-button-secondary-color-text-hover, currentColor);
}

.list__toggle:active {
	border-color: var(--draad-map-components-button-secondary-color-border-active);
	color: var(--draad-map-components-button-secondary-color-text-active);
}

.list__toggle:focus-visible {
	outline: var(--draad-map-components-button-secondary-focus-ring-width, 2px) var(--draad-map-components-button-secondary-focus-ring-style, dashed) var(--draad-map-components-button-secondary-color-focus-ring, Highlight);
	outline-offset: 2px;
}

.list__toggle:disabled {
	background: var(--draad-map-components-button-secondary-color-bg-disabled);
	color: var(--draad-map-components-button-secondary-color-text-disabled);
	border-color: var(--draad-map-components-button-secondary-color-bg-disabled);
	cursor: not-allowed;
}

.list__icon {
	inline-size: var(--draad-map-components-list-toggle-icon-size, 24px);
	block-size: var(--draad-map-components-list-toggle-icon-size, 24px);
	flex-shrink: 0;
}

.list__text--short {
	display: none;
}

@media (max-width: 640px) {
	.list__text--full {
		display: none;
	}
	.list__text--short {
		display: inline;
	}
}
`;class Jd extends HTMLElement{#t;#n=!1;#e;#i=null;map;RDnew;constructor(){super(),this.#t=this.attachShadow({mode:"open"}),this.#t.innerHTML=`
			<figure class="map" part="map">
				<div class="map__toolbar" part="toolbar">
					<slot name="toolbar"></slot>
				</div>
				<div class="map__container" part="container">
					<div class="map__position map__position--top-left" part="slot-top-left">
						<slot name="top-left"></slot>
					</div>
					<div class="map__position map__position--top-right" part="slot-top-right">
						<slot name="top-right"></slot>
					</div>
					<div class="map__position map__position--bottom-left" part="slot-bottom-left">
						<slot name="bottom-left"></slot>
					</div>
					<div class="map__position map__position--bottom-right" part="slot-bottom-right">
						<slot name="bottom-right"></slot>
					</div>
					<div class="map__infowindow" part="infowindow-slot">
						<slot name="infowindow"></slot>
					</div>
					<div class="map__canvas" part="canvas" role="application" aria-label="Interactieve kaart">
						<slot></slot>
					</div>
					<div class="map__list" part="list-slot" hidden>
						<slot name="list"></slot>
					</div>
				</div>
				<figcaption class="map__caption" part="caption">
					<slot name="caption"></slot>
				</figcaption>
			</figure>
		`,this.#e=this.#a()}#a(){const e=new CSSStyleSheet;e.replaceSync($d);const n=new CSSStyleSheet;n.replaceSync(Wd);const s=new CSSStyleSheet;s.replaceSync(Vd);const a=new CSSStyleSheet;a.replaceSync(ms),this.#t.adoptedStyleSheets=[e,n,s,a]}get zoomPosition(){const e={"top-left":"topleft","top-right":"topright","bottom-left":"bottomleft","bottom-right":"bottomright"},n=this.getAttribute("zoom-position");return e[n]??"bottomleft"}get center(){const e=this.getAttribute("center");if(!e)return[52.0705,4.3007];const[n,s]=e.split(",").map(Number);return[n,s]}get zoom(){const e=this.getAttribute("zoom");return e!==null?Number(e):12}get maxBounds(){const e=this.getAttribute("max-bounds");if(e==="false"||e==="")return null;if(!e)return[[50.6,3],[53.8,7.3]];const[n,s,a,l]=e.split(",").map(Number);return[[n,s],[a,l]]}get tileUrl(){return this.getAttribute("tile-url")??"https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/standaard/EPSG:3857/{z}/{x}/{y}.png"}get tileAttribution(){return this.getAttribute("tile-attribution")??'Kaartgegevens: <a href="https://www.kadaster.nl">Kadaster</a>'}get minZoom(){const e=this.getAttribute("min-zoom");return e!==null?Number(e):1}get maxZoom(){const e=this.getAttribute("max-zoom");return e!==null?Number(e):19}async connectedCallback(){this.#n||(await this.#e,Ut(this.#t),this.initialize())}initialize(){this.#n=!0,this.RDnew=Zd();const e=G.map(this.#t.querySelector(".map__canvas"),{center:this.center,worldCopyJump:!0,zoom:this.zoom,zoomControl:!1});this.maxBounds&&e.setMaxBounds(this.maxBounds),this.map=e,G.control.zoom({position:this.zoomPosition}).addTo(this.map);const n=this.#t.querySelector(".leaflet-control-zoom-in"),s=this.#t.querySelector(".leaflet-control-zoom-out");n&&(n.innerHTML='<svg class="map__zoom-icon" aria-hidden="true"><use href="#icon-plus"/></svg>'),s&&(s.innerHTML='<svg class="map__zoom-icon" aria-hidden="true"><use href="#icon-minus"/></svg>'),G.tileLayer(this.tileUrl,{maxZoom:this.maxZoom,minZoom:this.minZoom,attribution:this.tileAttribution}).addTo(this.map),this.#i=new ResizeObserver(()=>{this.map&&this.map.invalidateSize()}),this.#i.observe(this.#t.querySelector(".map__canvas")),this.addEventListener("dm-list:open",()=>this.#r()),this.addEventListener("dm-list:close",()=>this.#s()),this.addEventListener("dm-infowindow:open",a=>this.#l(a.target)),this.dispatchEvent(new CustomEvent("dm-map:ready",{bubbles:!0,composed:!0,detail:{map:this.map}}))}#l(e){const n=e?.shadowRoot?.querySelector(".infowindow"),s=e?.shadowRoot?.querySelector(".infowindow__body"),a=this.#t.querySelector(".map__position--top-right");if(!n||!s||!a)return;const l=this.getBoundingClientRect(),h=parseFloat(getComputedStyle(a).insetInlineEnd)||10,c=this.#t.querySelector(".leaflet-control-zoom");let u=h;if(c){const _=c.getBoundingClientRect(),g=a.getBoundingClientRect(),w=g.left<_.right&&g.right>_.left,x=_.top>l.top+l.height/2;w&&x&&(u=l.bottom-_.top+h)}this.style.setProperty("--draad-map-components-infowindow-offset-bottom",`${Math.ceil(u)}px`);const v=n.offsetHeight+(s.scrollHeight-s.clientHeight)-a.clientHeight;if(v>0){const _=Math.ceil(l.height+v),g=parseFloat(this.style.getPropertyValue("--draad-map-components-map-content-min-height"))||0;_>g&&this.style.setProperty("--draad-map-components-map-content-min-height",`${_}px`)}}#r(){this.querySelectorAll("dm-infowindow").forEach(a=>{a.isOpen&&a.close()});const e=this.#t.querySelector(".map__canvas"),n=this.#t.querySelector(".map__list"),s=this.#t.querySelectorAll(".map__position");this.setAttribute("list-open",""),e.hidden=!0,n.hidden=!1,s.forEach(a=>a.hidden=!0)}#s(){const e=this.#t.querySelector(".map__canvas"),n=this.#t.querySelector(".map__list"),s=this.#t.querySelectorAll(".map__position");this.removeAttribute("list-open"),e.hidden=!1,n.hidden=!0,s.forEach(a=>a.hidden=!1),this.map&&this.map.invalidateSize()}disconnectedCallback(){this.#i&&(this.#i.disconnect(),this.#i=null),this.map&&(this.map.remove(),this.map=null)}}customElements.define("dm-map",Jd);function Ee(i,e){i.hasAttribute("hidden")&&e&&e.remove()}function ii(i,e,n,s){e&&n&&(e.addTo(n),i.removeAttribute("hidden"),i.dispatchEvent(new CustomEvent(`${s}:show`,{bubbles:!0,detail:{layer:e}})))}function ni(i,e,n){e&&(e.remove(),i.setAttribute("hidden",""),i.dispatchEvent(new CustomEvent(`${n}:hide`,{bubbles:!0,detail:{layer:e}})))}class Ri extends HTMLElement{#t=null;#n=null;#e={};#i=!1;#a=!1;marker=null;static get observedAttributes(){return["center","target","icon","icon-hover","icon-active","label","hidden","properties"]}get center(){const e=this.getAttribute("center");if(!e)return null;const[n,s]=e.split(",").map(Number);return[n,s]}set center(e){Array.isArray(e)?this.setAttribute("center",e.join(",")):this.setAttribute("center",e)}get target(){return this.getAttribute("target")}set target(e){this.setAttribute("target",e)}get active(){return this.#a}set active(e){this.#a=!!e,this.#h()}get label(){return this.getAttribute("label")}set label(e){this.setAttribute("label",e)}get properties(){return JSON.parse(this.getAttribute("properties")||"null")}set properties(e){this.setAttribute("properties",JSON.stringify(e))}show(){const e=this.#n||this.#t;this.removeAttribute("hidden"),ii(this,this.marker,e,"dm-marker"),this.dispatchEvent(new CustomEvent("dm-marker:show",{bubbles:!0,composed:!0,detail:{marker:this.marker}}))}hide(){this.setAttribute("hidden",""),ni(this,this.marker,"dm-marker"),this.dispatchEvent(new CustomEvent("dm-marker:hide",{bubbles:!0,composed:!0,detail:{marker:this.marker}}))}toggle(){this.hidden?this.show():this.hide()}connectedCallback(){const e=this.closest("dm-layer"),n=this.closest("dm-map");e?e.layerGroup&&n?.map?this.#o(e.layerGroup,n.map):e.addEventListener("dm-layer:ready",s=>{this.#o(s.detail.layerGroup,s.detail.map)},{once:!0}):n&&(n.map?this.#o(null,n.map):n.addEventListener("dm-map:ready",s=>{this.#o(null,s.detail.map)},{once:!0}))}static#l="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#555" stroke="#333" stroke-width="2" d="M12.5 1C6.15 1 1 6.15 1 12.5c0 9.38 11.5 27.5 11.5 27.5S24 21.88 24 12.5C24 6.15 18.85 1 12.5 1z"/><circle fill="#fff" cx="12.5" cy="12.5" r="5"/></svg>');async#r(e){return e?new Promise(n=>{const s=new Image;s.onload=()=>{const l=30/s.naturalWidth,h=Math.round(s.naturalWidth*l),c=Math.round(s.naturalHeight*l);n(G.icon({iconUrl:e,iconSize:[h,c],iconAnchor:[Math.round(h/2),c],popupAnchor:[0,-c]}))},s.onerror=()=>{n(G.icon({iconUrl:Ri.#l,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]}))},s.src=e}):G.icon({iconUrl:Ri.#l,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]})}async#s(){const e=window.__DRAAD_MAPS_BASE__||"",n=this.getAttribute("icon")||(e?`${e}/markers/marker.png`:null),s=this.getAttribute("icon-hover")||(e?`${e}/markers/marker-hover.png`:null),a=this.getAttribute("icon-active")||(e?`${e}/markers/marker-active.png`:null),[l,h,c]=await Promise.all([this.#r(n),this.#r(s),this.#r(a)]);this.#e={default:l,hover:h,active:c}}async#o(e,n){this.#t=n,this.#n=e;const s=this.center;s&&(await this.#s(),this.marker=G.marker(s,{icon:this.#e.default}),e?this.marker.addTo(e):this.marker.addTo(n),Ee(this,this.marker),this.marker.on("mouseover",()=>{this.#i=!0,this.#h(),this.dispatchEvent(new CustomEvent("dm-marker:hover",{bubbles:!0,composed:!0,detail:{marker:this.marker,hovering:!0}}))}),this.marker.on("mouseout",()=>{this.#i=!1,this.#h(),this.dispatchEvent(new CustomEvent("dm-marker:hover",{bubbles:!0,composed:!0,detail:{marker:this.marker,hovering:!1}}))}),this.marker.on("click",()=>{this.active=!this.active,this.dispatchEvent(new CustomEvent("dm-marker:click",{bubbles:!0,composed:!0,detail:{marker:this.marker,targetId:this.target}}))}))}#h(){this.marker&&(this.#a?this.marker.setIcon(this.#e.active):this.#i?this.marker.setIcon(this.#e.hover):this.marker.setIcon(this.#e.default))}async attributeChangedCallback(e,n,s){if(!(n===s||!this.marker))switch(e){case"center":{const a=this.center;a&&this.marker.setLatLng(a);break}case"hidden":this.hasAttribute("hidden")?this.hide():this.show();break;case"properties":break;case"icon":case"icon-hover":case"icon-active":await this.#s(),this.#h();break}}disconnectedCallback(){this.marker&&(this.marker.off("mouseover"),this.marker.off("mouseout"),this.marker.off("click"),this.marker.remove(),this.marker=null),this.#t=null,this.#n=null}}customElements.define("dm-marker",Ri);function Pe(i,e){return!e||Object.keys(e).length===0?i:i.filter(n=>Object.entries(e).every(([s,a])=>{const l=n.properties?.[s];if(a&&typeof a=="object"&&"min"in a&&"max"in a){const h=Number(l);return isNaN(h)?!1:h>=a.min&&h<=a.max}if(Array.isArray(a)){const h=String(l??"");if(h.includes(",")){const c=h.split(",").map(u=>u.trim());return a.some(u=>c.includes(u))}return a.includes(h)}return!1}))}class Kd extends HTMLElement{#t=null;#n=null;layerGroup=null;static get observedAttributes(){return["name","label","hidden","cluster","cluster-max-zoom","cluster-radius","filter-property","filter-label","filter-properties","filter-labels"]}get name(){return this.getAttribute("name")}set name(e){this.setAttribute("name",e)}get label(){return this.getAttribute("label")}set label(e){this.setAttribute("label",e)}get hidden(){return this.hasAttribute("hidden")}set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get filterProperty(){return this.getAttribute("filter-property")}set filterProperty(e){this.setAttribute("filter-property",e)}get filterLabel(){return this.getAttribute("filter-label")}set filterLabel(e){this.setAttribute("filter-label",e)}get filterProperties(){return this.getAttribute("filter-properties")}set filterProperties(e){this.setAttribute("filter-properties",e)}get filterLabels(){return this.getAttribute("filter-labels")}set filterLabels(e){this.setAttribute("filter-labels",e)}get cluster(){return this.hasAttribute("cluster")}set cluster(e){e?this.setAttribute("cluster",""):this.removeAttribute("cluster")}get clusterMaxZoom(){const e=parseInt(this.getAttribute("cluster-max-zoom"));return isNaN(e)||e<0||e>18?16:e}set clusterMaxZoom(e){this.setAttribute("cluster-max-zoom",String(e))}get clusterRadius(){const e=parseInt(this.getAttribute("cluster-radius"));return isNaN(e)||e<=0?80:e}set clusterRadius(e){this.setAttribute("cluster-radius",String(e))}get data(){const e=this.querySelectorAll("dm-marker[properties]");return e.length===0?null:{type:"FeatureCollection",features:Array.from(e).map(n=>({type:"Feature",properties:{label:n.label,...n.properties},geometry:null}))}}show(){ii(this,this.layerGroup,this.#t,"dm-layer")}hide(){ni(this,this.layerGroup,"dm-layer")}toggle(){this.hidden?this.show():this.hide()}connectedCallback(){const e=this.closest("dm-map");e&&(!this.id&&(this.filterProperty||this.filterProperties)&&(this.id=`dm-layer-${Math.random().toString(36).slice(2,9)}`),e.map?this.#a(e.map):e.addEventListener("dm-map:ready",n=>{this.#a(n.detail.map)},{once:!0}),this.#n=this.#e.bind(this),this.addEventListener("dm-filter:apply",this.#n))}#e(e){this.querySelectorAll("dm-geojson[filter-property], dm-geojson[filter-properties], dm-wfs[filter-property], dm-wfs[filter-properties]").forEach(a=>{a.dispatchEvent(new CustomEvent("dm-filter:apply",{bubbles:!1,detail:e.detail}))});const s=e.detail.filters;this.querySelectorAll("dm-marker").forEach(a=>{const l=a.properties;this.#i(l,s)?a.show():a.hide()})}#i(e,n){return!n||Object.keys(n).length===0?!0:e?Pe([{properties:e}],n).length>0:!1}#a(e){this.#t=e,this.cluster&&G.markerClusterGroup?this.layerGroup=G.markerClusterGroup({maxClusterRadius:this.clusterRadius,disableClusteringAtZoom:this.clusterMaxZoom+1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,zoomToBoundsOnClick:!0}).addTo(e):this.layerGroup=G.layerGroup().addTo(e),this.dispatchEvent(new CustomEvent("dm-layer:ready",{bubbles:!0,composed:!0,detail:{layerGroup:this.layerGroup,map:this.#t}}))}attributeChangedCallback(e,n,s){n===s||!this.layerGroup||e==="hidden"&&(s!==null?this.hide():this.show())}disconnectedCallback(){this.#n&&(this.removeEventListener("dm-filter:apply",this.#n),this.#n=null),this.layerGroup&&this.#t&&(this.layerGroup.remove(),this.layerGroup=null,this.#t=null)}}customElements.define("dm-layer",Kd);function Ln(i){try{const e=new URL(i,window.location.origin);return e.protocol==="http:"||e.protocol==="https:"||e.protocol==="blob:"}catch{return!1}}const Xd=["application/json","application/geo+json","application/vnd.geo+json","text/plain","text/xml","application/xml","application/gml+xml","image/png","image/jpeg","image/svg+xml"];function Cn(i){const n=(i.headers.get("content-type")||"").split(";")[0].trim().toLowerCase();if(!Xd.includes(n))throw new Error(`Unexpected content type: ${n}`)}async function*_s(i,e={}){const{batchSize:n=100,onProgress:s=null,signal:a=null,crsTransformer:l=null}=e;try{const h=(await i.json()).features||[],c=h.length;if(a?.aborted)throw new DOMException("Aborted","AbortError");for(let u=0;u<c;u+=n){if(a?.aborted)throw new DOMException("Aborted","AbortError");const m=h.slice(u,Math.min(u+n,c)),v=u+m.length,_={loaded:v,total:c,percent:Math.round(v/c*100),featuresRendered:v};s&&s(_),yield{features:m,progress:_}}}catch(h){throw h}}class Bi extends HTMLElement{#t=null;#n=null;#e=null;#i=null;#a=null;#l=null;#r=!1;#s=null;#o=null;#h=null;#d={};#u=null;#c=null;#f=null;get#p(){const e=getComputedStyle(this),n=e.getPropertyValue("--draad-map-components-geojson-color").trim()||"#555",s=e.getPropertyValue("--draad-map-components-geojson-fill-color").trim()||n,a=parseFloat(e.getPropertyValue("--draad-map-components-geojson-fill-opacity"))||.15,l=parseFloat(e.getPropertyValue("--draad-map-components-geojson-opacity"))||.8,h=parseInt(e.getPropertyValue("--draad-map-components-geojson-weight"))||2,c=e.getPropertyValue("--draad-map-components-geojson-dash-array").trim()||"6 4";return{color:n,weight:h,dashArray:c,fillColor:s,fillOpacity:a,opacity:l}}get#_(){return{dashArray:null,opacity:1}}static#b="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#555" stroke="#333" stroke-width="2" d="M12.5 1C6.15 1 1 6.15 1 12.5c0 9.38 11.5 27.5 11.5 27.5S24 21.88 24 12.5C24 6.15 18.85 1 12.5 1z"/><circle fill="#fff" cx="12.5" cy="12.5" r="5"/></svg>');static get observedAttributes(){return["src","crs","label","hidden","filter-property","filter-label","filter-properties","filter-labels","infowindow-properties","infowindow-labels","streaming","batch-size","icon","icon-hover","icon-active"]}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",e)}get crs(){return this.getAttribute("crs")}set crs(e){this.setAttribute("crs",e)}get geoJsonLayer(){return this.#e}get data(){return this.#i}get label(){return this.getAttribute("label")}set label(e){this.setAttribute("label",e)}get hidden(){return this.hasAttribute("hidden")}set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get filterProperty(){return this.getAttribute("filter-property")}set filterProperty(e){this.setAttribute("filter-property",e)}get filterLabel(){return this.getAttribute("filter-label")}set filterLabel(e){this.setAttribute("filter-label",e)}get filterProperties(){return this.getAttribute("filter-properties")}set filterProperties(e){this.setAttribute("filter-properties",e)}get filterLabels(){return this.getAttribute("filter-labels")}set filterLabels(e){this.setAttribute("filter-labels",e)}get infowindowProperties(){return this.getAttribute("infowindow-properties")}set infowindowProperties(e){this.setAttribute("infowindow-properties",e)}get infowindowLabels(){return this.getAttribute("infowindow-labels")}set infowindowLabels(e){this.setAttribute("infowindow-labels",e)}get streaming(){return this.hasAttribute("streaming")}set streaming(e){e?this.setAttribute("streaming",""):this.removeAttribute("streaming")}get batchSize(){const e=parseInt(this.getAttribute("batch-size"));return isNaN(e)||e<1||e>1e4?100:e}set batchSize(e){this.setAttribute("batch-size",String(e))}get cluster(){return this.hasAttribute("cluster")}set cluster(e){e?this.setAttribute("cluster",""):this.removeAttribute("cluster")}get clusterMaxZoom(){const e=parseInt(this.getAttribute("cluster-max-zoom"));return isNaN(e)||e<0||e>22?null:e}set clusterMaxZoom(e){this.setAttribute("cluster-max-zoom",String(e))}get clusterRadius(){const e=parseInt(this.getAttribute("cluster-radius"));return isNaN(e)||e<=0?80:e}set clusterRadius(e){this.setAttribute("cluster-radius",String(e))}get isStreaming(){return this.#r}get loadProgress(){return this.#s}setPointToLayer(e){this.#u=e}show(){const e=this.#n||this.#t;ii(this,this.#e,e,"dm-geojson")}hide(){ni(this,this.#e,"dm-geojson")}toggle(){this.hidden?this.show():this.hide()}connectedCallback(){const e=this.closest("dm-layer"),n=this.closest("dm-map");e?e.layerGroup?this.#v(e.layerGroup,n.map):e.addEventListener("dm-layer:ready",s=>{this.#v(s.detail.layerGroup,s.detail.map)},{once:!0}):n&&(n.map?this.#v(null,n.map):n.addEventListener("dm-map:ready",s=>{this.#v(null,s.detail.map)},{once:!0})),this.#a=this.#y.bind(this),this.addEventListener("dm-filter:apply",this.#a),this.addEventListener("dm-geojson:feature-click",s=>{const a=s.detail?.layer?.feature?s.detail.layer:this.#A(s.detail?.feature);this.#m(a)})}#A(e){if(!e)return null;let n=null;const s=a=>{a?.eachLayer?.(l=>{n||(l.feature===e?n=l:l.eachLayer&&s(l))})};return s(this.#e),n||s(this.#h),n}#m(e){!e||e===this.#f||(this.clearActiveFeature(),e.setIcon&&this.#d.active?(e._dmActive=!0,e.setIcon(this.#d.active),e.setZIndexOffset?.(1e3)):e.setStyle&&(e.setStyle(this.#_),e.bringToFront?.()),this.#f=e)}clearActiveFeature(){const e=this.#f;e&&(e.setIcon?(e._dmActive=!1,e.setIcon(e._dmCustomIcon||this.#d.default),e.setZIndexOffset?.(0)):e.setStyle&&e.setStyle(this.#p),this.#f=null)}#y(e){this.#o=e.detail.filters,this.#z(e.detail.filters)}#k(e){return e?new Promise(n=>{const s=new Image;s.onload=()=>{const a=30/s.naturalWidth,l=Math.round(s.naturalWidth*a),h=Math.round(s.naturalHeight*a);n(G.icon({iconUrl:e,iconSize:[l,h],iconAnchor:[Math.round(l/2),h],popupAnchor:[0,-h]}))},s.onerror=()=>n(G.icon({iconUrl:Bi.#b,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]})),s.src=e}):Promise.resolve(G.icon({iconUrl:Bi.#b,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]}))}async#E(){const e=window.__DRAAD_MAPS_BASE__||"",n=this.getAttribute("icon")||(e?`${e}/markers/marker.png`:null),s=this.getAttribute("icon-hover")||(e?`${e}/markers/marker-hover.png`:null),a=this.getAttribute("icon-active")||(e?`${e}/markers/marker-active.png`:null),[l,h,c]=await Promise.all([this.#k(n),this.#k(s),this.#k(a)]);this.#d={default:l,hover:h,active:c}}#g(e,n){if(this.#u)return this.#u(e,n);const s=G.marker(n,{icon:this.#d.default});return s.on("mouseover",()=>s.setIcon(this.#d.hover)),s.on("mouseout",()=>{s.setIcon(s._dmActive?this.#d.active:s._dmCustomIcon||this.#d.default)}),s}#L(){const e={maxClusterRadius:this.clusterRadius,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,zoomToBoundsOnClick:!0};this.clusterMaxZoom!==null&&(e.disableClusteringAtZoom=this.clusterMaxZoom+1);const n=G.markerClusterGroup(e);return n.on("clusterclick",s=>{this.dispatchEvent(new CustomEvent("dm-geojson:cluster-click",{bubbles:!0,composed:!0,detail:{cluster:s.layer,latlng:s.latlng,childCount:s.layer.getChildCount()}}))}),n}#C(e){return e?(e.features||(e.type==="Feature"?[e]:[])).some(s=>s.geometry?.type==="Point"||s.geometry?.type==="MultiPoint"):!1}async#P(){this.#r=!0,this.#s={loaded:0,total:null,percent:null,featuresRendered:0},this.#l=new AbortController;const e=this.#l;await this.#E(),this.#e=G.geoJSON(null);const n=this.#n||this.#t;this.#e.addTo(n),this.#i={type:"FeatureCollection",features:[]};try{const s=await fetch(this.src,{signal:this.#l.signal});if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const a=this.#M(this.crs,null);if(!a){this.dispatchEvent(new CustomEvent("dm-geojson:error",{bubbles:!0,composed:!0,detail:{error:new Error("Could not determine coordinate system. Add a crs attribute.")}}));return}let l=!0;for await(const{features:h}of _s(s,{batchSize:this.batchSize,onProgress:c=>{this.#s=c,this.dispatchEvent(new CustomEvent("dm-geojson:progress",{detail:c,bubbles:!0,composed:!0}))},signal:this.#l.signal,crsTransformer:a})){if(e!==this.#l)return;this.#i.features.push(...h);const c=this.#o?Pe(h,this.#o):h;c.length>0&&(await this.#w(c),l&&(this.dispatchEvent(new CustomEvent("dm-geojson:first-feature",{detail:{feature:c[0],layer:this.#e},bubbles:!0,composed:!0})),l=!1)),this.#s.featuresRendered=this.#i.features.length}e===this.#l&&(this.#r=!1),Ee(this,this.#e),this.dispatchEvent(new CustomEvent("dm-geojson:ready",{bubbles:!0,composed:!0,detail:{layer:this.#e,data:this.#i}}))}catch(s){if(e===this.#l&&(this.#r=!1),s.name==="AbortError")return;this.dispatchEvent(new CustomEvent("dm-geojson:error",{bubbles:!0,composed:!0,detail:{error:s}}))}}async#w(e){return new Promise(n=>{requestAnimationFrame(()=>{const s={type:"FeatureCollection",features:e},a=this.#M(this.crs,null);G.geoJSON(s,{coordsToLatLng:a,style:()=>({...this.#p}),pointToLayer:(l,h)=>this.#g(l,h),onEachFeature:(l,h)=>{h.setStyle&&(h.on("mouseover",()=>h.setStyle(this.#_)),h.on("mouseout",()=>h.setStyle(h._dmActive?this.#_:this.#p))),h.on("click",c=>{this.dispatchEvent(new CustomEvent("dm-geojson:feature-click",{bubbles:!0,composed:!0,detail:{feature:l,layer:h,latlng:c.latlng}}))}),this.#e.addLayer(h)}}),n()})})}#x(){this.#l&&(this.#l.abort(),this.#l=null,this.#r=!1)}async#v(e,n){this.#c&&await this.#c;let s;this.#c=new Promise(a=>s=a);try{this.#t=n,this.#n=e;const a=this.src;if(!a)return;if(!Ln(a))throw new Error("Invalid URL: must be http or https");if(this.streaming){await this.#P();return}const l=await fetch(a);if(!l.ok)throw new Error(`HTTP ${l.status}: ${l.statusText}`);Cn(l);const h=await l.json();this.#i=h;const c=this.#M(this.crs,h);if(!c){this.dispatchEvent(new CustomEvent("dm-geojson:error",{bubbles:!0,composed:!0,detail:{error:new Error("Could not determine coordinate system. Add a crs attribute.")}}));return}await this.#E();const u={coordsToLatLng:c,style:()=>({...this.#p}),pointToLayer:(v,_)=>this.#g(v,_),onEachFeature:(v,_)=>{_.setStyle&&(_.on("mouseover",()=>_.setStyle(this.#_)),_.on("mouseout",()=>_.setStyle(_._dmActive?this.#_:this.#p))),_.on("click",g=>{this.dispatchEvent(new CustomEvent("dm-geojson:feature-click",{bubbles:!0,composed:!0,detail:{feature:v,layer:_,latlng:g.latlng}}))})}},m=e&&typeof e.getMaxZoom=="function"?n:e||n;if(this.cluster&&G.markerClusterGroup&&this.#C(h)){const v={type:"FeatureCollection",features:[]},_={type:"FeatureCollection",features:[]};for(const w of h.features||[])w.geometry?.type==="Point"||w.geometry?.type==="MultiPoint"?v.features.push(w):_.features.push(w);this.#h=this.#L(),this.#h.addTo(m);const g=[];G.geoJSON(v,u).eachLayer(w=>g.push(w)),this.#h.addLayers(g),_.features.length>0?(this.#e=G.geoJSON(_,u),this.#e.addTo(m)):this.#e=this.#h}else this.#e=G.geoJSON(h,u),this.#e.addTo(m);Ee(this,this.#e),this.dispatchEvent(new CustomEvent("dm-geojson:ready",{bubbles:!0,composed:!0,detail:{layer:this.#e,data:this.#i}}))}catch(a){this.dispatchEvent(new CustomEvent("dm-geojson:error",{bubbles:!0,composed:!0,detail:{error:a}}))}finally{s(),this.#c=null}}#M(e,n){const s=Me(e);return s?s==="EPSG:4326"?a=>G.latLng(a[1],a[0]):a=>{const[l,h]=Gi(a,s);return G.latLng(h,l)}:kn(n)?null:a=>G.latLng(a[1],a[0])}attributeChangedCallback(e,n,s){n===s||!this.#t||this.#R(e,s)}async#R(e,n){switch(e){case"src":case"crs":await this.#B();break;case"hidden":n!==null?this.hide():this.show();break;case"icon":case"icon-hover":case"icon-active":await this.#E(),await this.#B();break}}async#B(){this.#x(),this.#h&&this.#h!==this.#e&&this.#h.remove(),this.#h=null,this.#e&&(this.#e.remove(),this.#e=null),this.#i=null,this.#s=null,await this.#v(this.#n,this.#t)}async#z(e){if(!this.#e||!this.#i)return;if(this.#r){this.#x(),await this.#B();return}const n={coordsToLatLng:this.#M(this.crs,this.#i),style:()=>({...this.#p}),pointToLayer:(a,l)=>this.#g(a,l),onEachFeature:(a,l)=>{l.setStyle&&(l.on("mouseover",()=>l.setStyle(this.#_)),l.on("mouseout",()=>l.setStyle(l._dmActive?this.#_:this.#p))),l.on("click",h=>{this.dispatchEvent(new CustomEvent("dm-geojson:feature-click",{bubbles:!0,composed:!0,detail:{feature:a,layer:l,latlng:h.latlng}}))})}},s=!e||Object.keys(e).length===0?this.#i:{type:"FeatureCollection",features:Pe(this.#i.features,e)};if(this.#h){const a={type:"FeatureCollection",features:[]},l={type:"FeatureCollection",features:[]};for(const c of s.features||[])c.geometry?.type==="Point"||c.geometry?.type==="MultiPoint"?a.features.push(c):l.features.push(c);this.#h.clearLayers();const h=[];if(G.geoJSON(a,n).eachLayer(c=>h.push(c)),this.#h.addLayers(h),this.#e!==this.#h){this.#e.clearLayers();const c=[];G.geoJSON(l,n).eachLayer(u=>c.push(u)),c.forEach(u=>this.#e.addLayer(u))}}else{this.#e.clearLayers();const a=[];G.geoJSON(s,n).eachLayer(l=>a.push(l)),a.forEach(l=>this.#e.addLayer(l))}this.dispatchEvent(new CustomEvent("dm-geojson:updated",{bubbles:!0,composed:!0,detail:{layer:this.#e,data:s}}))}disconnectedCallback(){this.#x(),this.#a&&(this.removeEventListener("dm-filter:apply",this.#a),this.#a=null),this.#h&&this.#h!==this.#e&&this.#h.remove(),this.#h=null,this.#e&&(this.#e.remove(),this.#e=null),this.#t=null,this.#n=null,this.#i=null,this.#s=null,this.#o=null,this.#u=null}}customElements.define("dm-geojson",Bi);function gs(i,e){if(!e)return i;const n=encodeURIComponent(i);if(e.includes("{url}"))return e.replace("{url}",n);const s=e.slice(-1),a=s==="?"||s==="&"?"":e.includes("?")?"&":"?";return`${e}${a}url=${n}`}class mt extends HTMLElement{#t=null;#n=null;#e=null;#i=null;#a=null;#l=null;#r=null;#s={};#o=null;#h=!1;#d=null;#u=null;static#c={color:"#555",weight:2,dashArray:"6 4",fillColor:"#555",fillOpacity:.15,opacity:.8};static#f={dashArray:null,opacity:1};static get observedAttributes(){return["src","name","version","format","crs","max-features","proxy","label","hidden","filter-property","filter-label","filter-properties","filter-labels","infowindow-properties","infowindow-labels","streaming","batch-size","cache-ttl","bbox-filter"]}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",e)}get name(){return this.getAttribute("name")}set name(e){this.setAttribute("name",e)}get version(){return this.getAttribute("version")||"1.1.0"}set version(e){this.setAttribute("version",e)}get format(){return this.getAttribute("format")||"application/json"}set format(e){this.setAttribute("format",e)}get crs(){return this.getAttribute("crs")}set crs(e){this.setAttribute("crs",e)}get proxy(){return this.getAttribute("proxy")}set proxy(e){this.setAttribute("proxy",e)}get wfsLayer(){return this.#e}get data(){return this.#i}get label(){return this.getAttribute("label")}set label(e){this.setAttribute("label",e)}get hidden(){return this.hasAttribute("hidden")}set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get filterProperty(){return this.getAttribute("filter-property")}set filterProperty(e){this.setAttribute("filter-property",e)}get filterLabel(){return this.getAttribute("filter-label")}set filterLabel(e){this.setAttribute("filter-label",e)}get filterProperties(){return this.getAttribute("filter-properties")}set filterProperties(e){this.setAttribute("filter-properties",e)}get filterLabels(){return this.getAttribute("filter-labels")}set filterLabels(e){this.setAttribute("filter-labels",e)}get infowindowProperties(){return this.getAttribute("infowindow-properties")}set infowindowProperties(e){this.setAttribute("infowindow-properties",e)}get infowindowLabels(){return this.getAttribute("infowindow-labels")}set infowindowLabels(e){this.setAttribute("infowindow-labels",e)}get streaming(){return this.hasAttribute("streaming")}set streaming(e){e?this.setAttribute("streaming",""):this.removeAttribute("streaming")}get batchSize(){const e=parseInt(this.getAttribute("batch-size"));return isNaN(e)||e<1||e>1e4?100:e}set batchSize(e){this.setAttribute("batch-size",String(e))}get cluster(){return this.hasAttribute("cluster")}set cluster(e){e?this.setAttribute("cluster",""):this.removeAttribute("cluster")}get clusterMaxZoom(){const e=parseInt(this.getAttribute("cluster-max-zoom"));return isNaN(e)||e<0||e>22?null:e}set clusterMaxZoom(e){this.setAttribute("cluster-max-zoom",String(e))}get clusterRadius(){const e=parseInt(this.getAttribute("cluster-radius"));return isNaN(e)||e<=0?80:e}set clusterRadius(e){this.setAttribute("cluster-radius",String(e))}get cacheTtl(){const e=parseInt(this.getAttribute("cache-ttl"));return isNaN(e)?300:e}set cacheTtl(e){this.setAttribute("cache-ttl",String(e))}get bboxFilter(){return this.hasAttribute("bbox-filter")}set bboxFilter(e){e?this.setAttribute("bbox-filter",""):this.removeAttribute("bbox-filter")}get isStreaming(){return this.#h}get loadProgress(){return this.#d}show(){const e=this.#n||this.#t;ii(this,this.#e,e,"dm-wfs")}hide(){ni(this,this.#e,"dm-wfs")}toggle(){this.hidden?this.show():this.hide()}refresh(){return this.#v()}getFeatures(){return this.#i?[...this.#i.features||[]]:[]}cancelRequest(){this.#m()}connectedCallback(){const e=this.closest("dm-layer"),n=this.closest("dm-map");e?e.layerGroup?this.#w(e.layerGroup,n.map):e.addEventListener("dm-layer:ready",s=>{this.#w(s.detail.layerGroup,s.detail.map)},{once:!0}):n&&(n.map?this.#w(null,n.map):n.addEventListener("dm-map:ready",s=>{this.#w(null,s.detail.map)},{once:!0})),this.#a=this.#b.bind(this),this.addEventListener("dm-filter:apply",this.#a),this.addEventListener("dm-wfs:feature-click",s=>{const a=s.detail?.layer?.feature?s.detail.layer:this.#p(s.detail?.feature);this.#_(a)})}#p(e){if(!e)return null;let n=null;const s=a=>{a?.eachLayer?.(l=>{n||(l.feature===e?n=l:l.eachLayer&&s(l))})};return s(this.#e),n||s(this.#r),n}#_(e){!e||e===this.#l||(this.clearActiveFeature(),e.setIcon&&this.#s.active?(e._dmActive=!0,e.setIcon(this.#s.active),e.setZIndexOffset?.(1e3)):e.setStyle&&(e.setStyle(mt.#f),e.bringToFront?.()),this.#l=e)}clearActiveFeature(){const e=this.#l;e&&(e.setIcon?(e._dmActive=!1,e.setIcon(e._dmCustomIcon||this.#s.default),e.setZIndexOffset?.(0)):e.setStyle&&e.setStyle(mt.#c),this.#l=null)}#b(e){this.#u=e.detail.filters,this.#M(e.detail.filters)}#A(){const e=new URL(this.src,window.location.origin),n=e.searchParams,s=this.version;n.set("service","WFS"),n.set("version",s),n.set("request","GetFeature");const a=s==="2.0.0"?"typeNames":"typeName";n.set(a,this.name),n.set("outputFormat",this.format);const l=this.crs;l&&n.set("srsName",Me(l));const h=this.getAttribute("max-features");if(h){const u=s==="2.0.0"?"count":"maxFeatures";n.set(u,h)}const c=e.toString();return gs(c,this.proxy)}#m(){this.#o&&(this.#o.abort(),this.#o=null)}#y(e){return e?(e.features||(e.type==="Feature"?[e]:[])).some(s=>s.geometry?.type==="Point"||s.geometry?.type==="MultiPoint"):!1}#k(){const e={maxClusterRadius:this.clusterRadius,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,zoomToBoundsOnClick:!0},n=this.clusterMaxZoom;n!==null&&(e.disableClusteringAtZoom=n+1);const s=G.markerClusterGroup(e);return s.on("clusterclick",a=>{this.dispatchEvent(new CustomEvent("dm-wfs:cluster-click",{bubbles:!0,composed:!0,detail:{cluster:a.layer,latlng:a.latlng,childCount:a.layer.getChildCount()}}))}),s}#E(e){return e?e==="EPSG:4326"?n=>G.latLng(n[1],n[0]):n=>{const[s,a]=Gi(n,e);return G.latLng(a,s)}:n=>G.latLng(n[1],n[0])}#g(e,n){let s=Me(e);return s||(s=ls(n)),s?s==="EPSG:4326"?a=>G.latLng(a[1],a[0]):a=>{const[l,h]=Gi(a,s);return G.latLng(h,l)}:kn(n)?null:a=>G.latLng(a[1],a[0])}#L(e){return n=>{this.dispatchEvent(new CustomEvent("dm-wfs:feature-click",{bubbles:!0,composed:!0,detail:{feature:e,layer:n.target,latlng:n.latlng}}))}}async#C(e,n){return new Promise(s=>{requestAnimationFrame(()=>{const a={type:"FeatureCollection",features:e};G.geoJSON(a,{coordsToLatLng:n,style:()=>({...mt.#c}),onEachFeature:(l,h)=>{h.setStyle&&(h.on("mouseover",()=>h.setStyle(mt.#f)),h.on("mouseout",()=>h.setStyle(h._dmActive?mt.#f:mt.#c))),h.on("click",c=>{this.dispatchEvent(new CustomEvent("dm-wfs:feature-click",{bubbles:!0,composed:!0,detail:{feature:l,layer:h,latlng:c.latlng}}))}),this.#e.addLayer(h)}}),s()})})}async#P(){this.#h=!0,this.#d={loaded:0,total:null,percent:null,featuresRendered:0},this.#o=new AbortController,this.#e=G.geoJSON(null);const e=this.#n||this.#t;this.#e.addTo(e),this.#i={type:"FeatureCollection",features:[]};const n=this.#A();try{if(!Ln(n))throw new Error("Invalid URL: must be http or https");const s=await fetch(n);if(!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);Cn(s);let a=Me(this.crs),l=s;if(!a){const u=await s.json();a=ls(u),l=new Response(JSON.stringify(u),{headers:s.headers})}const h=this.#E(a);if(!h){this.dispatchEvent(new CustomEvent("dm-wfs:error",{bubbles:!0,composed:!0,detail:{error:new Error("Could not determine coordinate system. Add a crs attribute.")}}));return}let c=!0;for await(const u of _s(l,{batchSize:this.batchSize,onProgress:m=>{this.#d=m,this.dispatchEvent(new CustomEvent("dm-wfs:progress",{bubbles:!0,composed:!0,detail:m}))},signal:this.#o.signal,crsTransformer:h})){this.#i.features.push(...u.features);const m=this.#u?Pe(u.features,this.#u):u.features;m.length>0&&(await this.#C(m,h),c&&(this.dispatchEvent(new CustomEvent("dm-wfs:first-feature",{bubbles:!0,composed:!0,detail:{feature:m[0],layer:this.#e}})),c=!1)),this.#d&&(this.#d.featuresRendered=this.#i.features.length)}this.#h=!1,Ee(this,this.#e),this.dispatchEvent(new CustomEvent("dm-wfs:ready",{bubbles:!0,composed:!0,detail:{layer:this.#e,data:this.#i}}))}catch(s){if(this.#h=!1,s.name==="AbortError")return;this.dispatchEvent(new CustomEvent("dm-wfs:error",{bubbles:!0,composed:!0,detail:{error:s}}))}}async#w(e,n){if(this.#t=n,this.#n=e,!this.src||!this.name)return;if(this.streaming){await this.#P();return}const s=this.#A();try{if(!Ln(s))throw new Error("Invalid URL: must be http or https");const a=await fetch(s);if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);Cn(a);const l=await a.json();this.#i=l;const h=this.#g(this.crs,l);if(!h){this.dispatchEvent(new CustomEvent("dm-wfs:error",{bubbles:!0,composed:!0,detail:{error:new Error("Could not determine coordinate system. Add a crs attribute.")}}));return}const c=(m,v)=>{v.setStyle&&(v.on("mouseover",()=>v.setStyle(mt.#f)),v.on("mouseout",()=>v.setStyle(v._dmActive?mt.#f:mt.#c))),v.on("click",_=>{this.dispatchEvent(new CustomEvent("dm-wfs:feature-click",{bubbles:!0,composed:!0,detail:{feature:m,layer:v,latlng:_.latlng}}))})},u=e&&typeof e.getMaxZoom=="function"?n:e||n;if(this.cluster&&G.markerClusterGroup&&this.#y(l)){const m={type:"FeatureCollection",features:[]},v={type:"FeatureCollection",features:[]};for(const g of l.features||[])g.geometry?.type==="Point"||g.geometry?.type==="MultiPoint"?m.features.push(g):v.features.push(g);this.#r=this.#k(),this.#r.addTo(u);const _=[];G.geoJSON(m,{coordsToLatLng:h,onEachFeature:c}).eachLayer(g=>_.push(g)),this.#r.addLayers(_),v.features.length>0?(this.#e=G.geoJSON(v,{coordsToLatLng:h,style:()=>({...mt.#c}),onEachFeature:c}),this.#e.addTo(u)):this.#e=this.#r}else this.#e=G.geoJSON(l,{coordsToLatLng:h,style:()=>({...mt.#c}),onEachFeature:c}),this.#e.addTo(u);Ee(this,this.#e),this.dispatchEvent(new CustomEvent("dm-wfs:ready",{bubbles:!0,composed:!0,detail:{layer:this.#e,data:this.#i}}))}catch(a){this.dispatchEvent(new CustomEvent("dm-wfs:error",{bubbles:!0,composed:!0,detail:{error:a}}))}}attributeChangedCallback(e,n,s){n===s||!this.#t||this.#x(e,s)}#x(e,n){switch(e){case"src":case"name":case"version":case"format":case"crs":case"max-features":case"proxy":this.#v();break;case"hidden":n!==null?this.hide():this.show();break}}async#v(){this.#m(),this.#r&&this.#r!==this.#e&&this.#r.remove(),this.#r=null,this.#e&&(this.#e.remove(),this.#e=null),this.#i=null,this.#d=null,await this.#w(this.#n,this.#t)}async#M(e){if(!this.#e||!this.#i)return;if(this.#h){this.#m(),await this.#v();return}const n=this.#g(this.crs,this.#i),s=(h,c)=>{c.setStyle&&(c.on("mouseover",()=>c.setStyle(mt.#f)),c.on("mouseout",()=>c.setStyle(c._dmActive?mt.#f:mt.#c))),c.on("click",u=>{this.dispatchEvent(new CustomEvent("dm-wfs:feature-click",{bubbles:!0,composed:!0,detail:{feature:h,layer:c,latlng:u.latlng}}))})},a=()=>({...mt.#c});if(!e||Object.keys(e).length===0){this.#e.clearLayers(),G.geoJSON(this.#i,{coordsToLatLng:n,style:a,onEachFeature:s}).eachLayer(h=>this.#e.addLayer(h));return}this.#e.clearLayers();const l={type:"FeatureCollection",features:Pe(this.#i.features,e)};G.geoJSON(l,{coordsToLatLng:n,style:a,onEachFeature:s}).eachLayer(h=>this.#e.addLayer(h))}disconnectedCallback(){this.#m(),this.#a&&(this.removeEventListener("dm-filter:apply",this.#a),this.#a=null),this.#r&&this.#r!==this.#e&&this.#r.remove(),this.#r=null,this.#e&&(this.#e.remove(),this.#e=null),this.#t=null,this.#n=null,this.#i=null,this.#d=null,this.#u=null}}customElements.define("dm-wfs",mt);class Qd extends HTMLElement{#t=null;#n=null;#e=null;static get observedAttributes(){return["src","layers","version","format","transparent","styles","crs","proxy","opacity","min-zoom","max-zoom","label","hidden","time"]}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",e)}get layers(){return this.getAttribute("layers")}set layers(e){this.setAttribute("layers",e)}get version(){return this.getAttribute("version")||"1.1.1"}set version(e){this.setAttribute("version",e)}get format(){return this.getAttribute("format")||"image/png"}set format(e){this.setAttribute("format",e)}get transparent(){const e=this.getAttribute("transparent");return e===null||e==="true"}set transparent(e){this.setAttribute("transparent",String(e))}get styles(){return this.getAttribute("styles")||""}set styles(e){this.setAttribute("styles",e)}get crs(){return this.getAttribute("crs")}set crs(e){this.setAttribute("crs",e)}get proxy(){return this.getAttribute("proxy")}set proxy(e){this.setAttribute("proxy",e)}get opacity(){const e=this.getAttribute("opacity");return e?parseFloat(e):1}set opacity(e){this.setAttribute("opacity",String(e))}get time(){return this.getAttribute("time")}set time(e){this.setAttribute("time",e)}get wmsLayer(){return this.#e}get label(){return this.getAttribute("label")}set label(e){this.setAttribute("label",e)}setOpacity(e){this.#e&&this.#e.setOpacity(e),this.setAttribute("opacity",String(e))}setTime(e){const n=this.time;this.setAttribute("time",e),this.refresh(),this.dispatchEvent(new CustomEvent("dm-wms:time-change",{bubbles:!0,composed:!0,detail:{time:e,previousTime:n}}))}refresh(){this.#e&&(this.#e.remove(),this.#e=null),this.#i(this.#n,this.#t)}show(){const e=this.#n||this.#t;this.removeAttribute("hidden"),ii(this,this.#e,e,"dm-wms")}hide(){this.setAttribute("hidden",""),ni(this,this.#e,"dm-wms")}toggle(){this.hidden?this.show():this.hide()}connectedCallback(){const e=this.closest("dm-layer"),n=this.closest("dm-map");e?e.layerGroup?this.#i(e.layerGroup,n.map):e.addEventListener("dm-layer:ready",s=>{this.#i(s.detail.layerGroup,s.detail.map)},{once:!0}):n&&(n.map?this.#i(null,n.map):n.addEventListener("dm-map:ready",s=>{this.#i(null,s.detail.map)},{once:!0}))}#i(e,n){if(this.#t=n,this.#n=e,!this.src){this.#r(new Error("dm-wms requires a src attribute"));return}if(!this.layers){this.#r(new Error("dm-wms requires a layers attribute"));return}try{const s=this.#a(),a=this.#l();this.#e=G.tileLayer.wms(s,a),e?this.#e.addTo(e):this.#e.addTo(n),Ee(this,this.#e),this.dispatchEvent(new CustomEvent("dm-wms:ready",{bubbles:!0,composed:!0,detail:{layer:this.#e}}))}catch(s){this.#r(s)}}#a(){let e=this.src;return e=e.replace(/\?+$/,""),gs(e,this.proxy)}#l(){const e={layers:this.layers,format:this.format,transparent:this.transparent,version:this.version,styles:this.styles,opacity:this.opacity,attribution:'&copy; <a href="https://www.kadaster.nl">Kadaster</a>'},n=this.crs;n&&(e.crs=Me(n));const s=this.getAttribute("min-zoom"),a=this.getAttribute("max-zoom");s&&(e.minZoom=parseInt(s,10)),a&&(e.maxZoom=parseInt(a,10));const l=this.time;return l&&(e.TIME=l),e}#r(e){this.dispatchEvent(new CustomEvent("dm-wms:error",{bubbles:!0,composed:!0,detail:{error:e}}))}attributeChangedCallback(e,n,s){if(!(n===s||!this.#e))switch(e){case"opacity":{const a=parseFloat(s);isNaN(a)||this.#e.setOpacity(a);break}case"hidden":this.hasAttribute("hidden")?this.hide():this.show();break;case"time":this.#s();break;case"src":case"layers":case"version":case"format":case"transparent":case"styles":case"crs":case"proxy":case"min-zoom":case"max-zoom":this.#s();break}}#s(){this.#e&&(this.#e.remove(),this.#e=null),this.#i(this.#n,this.#t)}disconnectedCallback(){this.#e&&(this.#e.remove(),this.#e=null),this.#t=null,this.#n=null}}customElements.define("dm-wms",Qd);const Yd=`:host {
	display: block;
	inline-size: var(--draad-map-components-search-width, 296px);
	align-self: flex-end;
}

.icon {
	display: block;
	inline-size: 1em;
	block-size: 1em;
	fill: currentColor;
}

.search {
	font-family: var(--draad-map-components-search-font-family, inherit);
	font-size: var(--draad-map-components-search-input-font-size, 0.875rem);
	line-height: 1.5;
}

/* Label */
.search__label {
	display: block;
	margin-block-end: 4px;
	font-size: var(--draad-map-components-search-label-font-size, 1.25rem);
	font-weight: 700;
	color: var(--draad-map-components-search-label-color, currentColor);
	line-height: 1.5;
}

/* Form wrapper */
.search__form {
	position: relative;
}

/* Input wrapper — the visible bordered container */
.search__input-wrapper {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 4px 4px 4px 16px;
	background: var(--draad-map-components-search-input-bg, #fff);
	border: 1px solid var(--draad-map-components-search-input-border, currentColor);
	border-radius: var(--draad-map-components-search-input-radius, 6px);
	box-sizing: border-box;
}

.search__input-wrapper:focus-within {
	border-color: var(--draad-map-components-search-input-border-focus, currentColor);
	outline: 2px dashed var(--draad-map-components-search-focus-ring, Highlight);
	outline-offset: 2px;
}

/* Open state: square bottom corners to merge with dropdown */
.search__form[data-open] .search__input-wrapper {
	border-radius: var(--draad-map-components-search-input-radius, 6px) var(--draad-map-components-search-input-radius, 6px) 0 0;
}

/* Input field — no own border/bg, fills flex space */
.search__input {
	flex: 1 0 0;
	min-inline-size: 0;
	padding: 0;
	border: none;
	border-radius: 0;
	font-family: inherit;
	font-size: var(--draad-map-components-search-input-font-size, 1.125rem);
	line-height: 1.5;
	background: transparent;
	color: var(--draad-map-components-search-input-color, currentColor);
	box-sizing: border-box;
}

.search__input:focus {
	outline: none;
}

.search__input::placeholder {
	color: var(--draad-map-components-search-placeholder-color, currentColor);
}

/* Clear (×) button */
.search__clear:not([hidden]) {
	display: flex;
}

.search__clear {
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	inline-size: 24px;
	block-size: 24px;
	padding: 0;
	border: none;
	background: transparent;
	font-family: var(--draad-map-components-font-family);
	color: var(--draad-map-components-search-input-color, currentColor);
	cursor: pointer;
}

.search__clear:focus-visible {
	outline: 2px dashed var(--draad-map-components-search-focus-ring, Highlight);
	outline-offset: 2px;
	border-radius: 2px;
}

/* Search button */
.search__button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	flex-shrink: 0;
	inline-size: var(--draad-map-components-button-primary-md-size, 36px);
	block-size: var(--draad-map-components-button-primary-md-size, 36px);
	padding: var(--draad-map-components-button-primary-md-padding, 8px);
	border: none;
	border-radius: var(--draad-map-components-button-primary-radius, 6px);
	background: var(--draad-map-components-button-primary-color-bg, #0a0a0a);
	color: var(--draad-map-components-button-primary-color-text, #fafafa);
	font-family: var(--draad-map-components-font-family);
	cursor: pointer;
	line-height: 0;
}

@media (prefers-reduced-motion: no-preference) {
	.search__button {
		transition: background 0.2s ease;
	}
}

.search__button:hover {
	background: var(--draad-map-components-button-primary-color-bg-hover, #171717);
}

.search__button:focus-visible {
	outline: var(--draad-map-components-button-primary-focus-ring-width, 2px) var(--draad-map-components-button-primary-focus-ring-style, dashed) var(--draad-map-components-button-primary-color-focus-ring, Highlight);
	outline-offset: 2px;
}

.search__button:active {
	background: var(--draad-map-components-button-primary-color-bg-active, #0a0a0a);
}

.search__button:disabled {
	background: var(--draad-map-components-button-primary-color-bg-disabled);
	color: var(--draad-map-components-button-primary-color-text-disabled);
	cursor: not-allowed;
}

/* Icons */
.search__icon {
	display: block;
	inline-size: var(--draad-map-components-icon-size-lg, 20px);
	block-size: var(--draad-map-components-icon-size-lg, 20px);
	flex-shrink: 0;
}

.search__icon--spinner {
	display: none;
}

/* Loading state */
.search__button--loading .search__icon--magnifier {
	display: none;
}

.search__button--loading .search__icon--spinner {
	display: block;
	animation: search-spin 1.5s linear infinite;
}

@keyframes search-spin {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

/* Listbox dropdown */
.search__listbox:not([hidden]) {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.search__listbox {
	position: absolute;
	inset-inline: 0;
	inset-block-start: 100%;
	margin: 0;
	padding: 24px;
	list-style: none;
	background: var(--draad-map-components-search-listbox-bg, #fff);
	border: 1px solid var(--draad-map-components-search-input-border, currentColor);
	border-block-start: none;
	border-radius: 0 0 var(--draad-map-components-search-input-radius, 6px) var(--draad-map-components-search-input-radius, 6px);
	max-block-size: var(--draad-map-components-search-listbox-max-height, 400px);
	overflow-y: auto;
	z-index: var(--draad-map-components-search-listbox-z-index, 1000);
	scrollbar-width: thin;
	scrollbar-color: #d4d4d4 #e5e5e5;
	box-sizing: border-box;
}

/* Result item */
.search__result {
	display: flex;
	align-items: center;
	gap: 4px;
	cursor: pointer;
	padding: 0;
}

.search__result[aria-selected="true"] .search__result-label {
	text-decoration: underline;
}

/* Result icon */
.search__result-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	inline-size: 20px;
	block-size: 20px;
	flex-shrink: 0;
	color: var(--draad-map-components-search-link-color, currentColor);
}

/* Result label */
.search__result-label {
	font-size: var(--draad-map-components-search-input-font-size, 0.875rem);
	font-family: inherit;
	line-height: 1.5;
	color: var(--draad-map-components-search-link-color, currentColor);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* Group heading inside the dropdown */
.search__group-label {
	font-size: var(--draad-map-components-search-input-font-size, 0.875rem);
	font-weight: 700;
	color: var(--draad-map-components-search-label-color, currentColor);
	line-height: 1.5;
	padding: 0;
}

/* Extra top spacing when a group label follows results */
.search__result ~ .search__group-label {
	margin-block-start: 16px;
}

/* No results message */
.search__no-results {
	font-size: 16px;
	color: var(--draad-map-components-search-no-results-color, currentColor);
	font-style: italic;
}

/* Visually hidden for screen readers */
.visually-hidden {
	position: absolute;
	inline-size: 1px;
	block-size: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}

/* Scrollbar styling */
.search__listbox::-webkit-scrollbar {
	inline-size: 8px;
}

.search__listbox::-webkit-scrollbar-track {
	background: #e5e5e5;
	border-radius: 4px;
}

.search__listbox::-webkit-scrollbar-thumb {
	background: #d4d4d4;
	border-radius: 4px;
}

.search__listbox::-webkit-scrollbar-thumb:hover {
	background: #a3a3a3;
}
`;class tu extends HTMLElement{#t;#n=null;#e;#i=null;#a=null;#l=null;#r=-1;#s=[];#o=null;#h=null;#d;#u;static get observedAttributes(){return["placeholder","label","search-properties","search-labels","radius","min-chars","debounce","address-filter"]}attributeChangedCallback(e,n,s){n!==s&&this.#n&&(this.#p(),Ut(this.#t),this.#_())}constructor(){super(),this.#t=this.attachShadow({mode:"open"}),this.#d=`search-input-${Math.random().toString(36).slice(2,9)}`,this.#u=`search-listbox-${Math.random().toString(36).slice(2,9)}`,this.#e=this.#c()}#c(){const e=new CSSStyleSheet;e.replaceSync(Yd),this.#t.adoptedStyleSheets=[e]}get placeholder(){return this.getAttribute("placeholder")||"Zoeken..."}set placeholder(e){this.setAttribute("placeholder",e)}get label(){return this.getAttribute("label")||"Zoek op straat, wijk of stadsdeel"}set label(e){this.setAttribute("label",e)}get searchProperties(){const e=this.getAttribute("search-properties");return e?e.split(",").map(n=>n.trim()).filter(n=>n):null}set searchProperties(e){Array.isArray(e)?this.setAttribute("search-properties",e.join(",")):this.setAttribute("search-properties",e)}get searchLabels(){const e=this.getAttribute("search-labels");return e?e.split(",").map(n=>n.trim()).filter(n=>n):null}set searchLabels(e){Array.isArray(e)?this.setAttribute("search-labels",e.join(",")):this.setAttribute("search-labels",e)}get radius(){const e=this.getAttribute("radius"),n=parseInt(e,10);return Number.isFinite(n)&&n>0?n:1e4}set radius(e){this.setAttribute("radius",String(e))}get minChars(){const e=this.getAttribute("min-chars"),n=parseInt(e,10);return Number.isFinite(n)&&n>=0?n:2}set minChars(e){this.setAttribute("min-chars",String(e))}get debounceDelay(){const e=this.getAttribute("debounce"),n=parseInt(e,10);return Number.isFinite(n)&&n>=0?n:300}set debounceDelay(e){this.setAttribute("debounce",String(e))}get addressFilter(){const e=this.getAttribute("address-filter");return e&&e.trim()?e.trim():null}set addressFilter(e){this.setAttribute("address-filter",e)}connectedCallback(){const e=this.closest("dm-map");e&&(e.map?this.#f(e):e.addEventListener("dm-map:ready",()=>{this.#f(e)},{once:!0}))}async#f(e){this.#n=e,await this.#e,this.#p(),Ut(this.#t),this.#_()}#p(){this.#t.innerHTML=`
			<div class="search" part="root">
				<label for="${this.#d}" class="search__label" part="label">${this.#Z(this.label)}</label>
				<div class="search__form" part="form" role="search">
					<div class="search__input-wrapper" part="input-wrapper">
						<input
							type="text"
							id="${this.#d}"
							class="search__input"
							part="input"
							placeholder="${this.#G(this.placeholder)}"
							maxlength="200"
							autocomplete="off"
							aria-autocomplete="list"
							aria-controls="${this.#u}"
							aria-expanded="false"
							aria-haspopup="listbox"
						>
						<button type="button" class="search__clear" part="clear" aria-label="Zoekopdracht wissen" hidden>
							<svg class="search__icon" aria-hidden="true"><use href="#icon-close"/></svg>
						</button>
						<button type="button" class="search__button" part="button" aria-label="Zoeken">
							<svg class="search__icon search__icon--magnifier" aria-hidden="true"><use href="#icon-search"/></svg>
							<svg class="search__icon search__icon--spinner" aria-hidden="true"><use href="#icon-spinner"/></svg>
						</button>
					</div>
					<ul
						id="${this.#u}"
						class="search__listbox"
						part="listbox"
						role="listbox"
						aria-label="Zoekresultaten"
						hidden
					></ul>
				</div>
				<div role="status" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
			</div>
		`}#_(){const e=this.#t.querySelector(".search__input"),n=this.#t.querySelector(".search__button"),s=this.#t.querySelector(".search__clear"),a=this.#t.querySelector(".search__listbox");e.addEventListener("input",l=>this.#b(l)),e.addEventListener("keydown",l=>this.#A(l)),e.addEventListener("focus",()=>this.#m()),e.addEventListener("blur",l=>this.#y(l)),n.addEventListener("click",()=>this.#k()),s.addEventListener("click",()=>{e.value="",s.hidden=!0,this.#s=[],this.#D(),e.focus()}),a.addEventListener("mousedown",l=>{l.preventDefault()}),a.addEventListener("click",l=>{const h=l.target.closest('[role="option"]');if(h){const c=parseInt(h.dataset.index,10);this.#F(c)}})}#b(e){const n=e.target.value.trim(),s=this.#t.querySelector(".search__clear");if(s&&(s.hidden=!e.target.value),this.#l&&(clearTimeout(this.#l),this.#l=null),this.#$(),n.length<this.minChars){this.#s=[],this.#D();return}this.#l=setTimeout(()=>{this.#g(n)},this.debounceDelay)}#A(e){const s=!this.#t.querySelector(".search__listbox").hidden;switch(e.key){case"ArrowDown":e.preventDefault(),s&&this.#I(1);break;case"ArrowUp":e.preventDefault(),s&&this.#I(-1);break;case"Enter":if(e.preventDefault(),s&&this.#s.length>0){const a=this.#r>=0?this.#r:0;this.#F(a)}else this.#E();break;case"Escape":e.preventDefault(),this.#D();break;case"Tab":this.#D();break}}#m(){this.#s.length>0&&this.#J()}#y(e){this.#a=setTimeout(()=>{this.#D()},150)}#k(){if(this.#s.length>0){const e=this.#r>=0?this.#r:0;this.#F(e)}else this.#E()}#E(){const n=this.#t.querySelector(".search__input").value.trim();n.length>=this.minChars&&this.#g(n)}async#g(e){this.#i&&this.#i.abort(),this.#i=new AbortController,this.#O(!0);try{const[n,s]=await Promise.all([this.#C(e),this.#L(e,this.#i.signal)]),a=s?.error===!0,l=a?s.results:s;this.#s=[...n.slice(0,5),...l.slice(0,10)],this.#q(a),this.#J();const h=this.#s.length;let c=h>0?`${h} resultaat${h!==1?"en":""} gevonden`:"Geen resultaten gevonden";a&&(c+=". Zoeken in adressen niet beschikbaar"),this.#H(c)}catch(n){n.name!=="AbortError"&&this.#H("Er is een fout opgetreden bij het zoeken")}finally{this.#O(!1)}}async#L(e,n){const s=new URL("https://api.pdok.nl/bzk/locatieserver/search/v3_1/free");s.searchParams.set("q",e),s.searchParams.set("rows","10"),s.searchParams.set("fq","type:(provincie OR gemeente OR woonplaats OR wijk OR buurt OR weg OR adres)"),this.addressFilter&&s.searchParams.append("fq",this.addressFilter),s.searchParams.set("fl","id,weergavenaam,type,score,centroide_ll,geometrie_ll");try{const a=await fetch(s.toString(),{signal:n});if(!a.ok)throw new Error(`HTTP ${a.status}`);return((await a.json()).response?.docs||[]).map(c=>({type:"address",label:c.weergavenaam,subtype:c.type,coordinates:this.#M(c.centroide_ll),geometry:c.geometrie_ll?this.#R(c.geometrie_ll):null,bounds:null,raw:c}))}catch(a){if(a.name==="AbortError")throw a;return{error:!0,results:[]}}}#C(e){const n=[],s=e.toLowerCase(),a=this.searchProperties,l=this.#n.querySelectorAll("dm-geojson, dm-wfs");for(const c of l){if(n.length>=5)break;const u=c.data;if(!u?.features)continue;const m=c.geoJsonLayer||c.wfsLayer;if(m)for(const v of u.features){if(n.length>=5)break;const _=v.properties||{},g=this.#P(_,s,a);if(g.length>0){const{label:w,matchedProperty:x}=this.#w(_,g);n.push({type:"feature",label:w,subtype:x,feature:v,layer:m,bounds:this.#x(v,m),coordinates:this.#v(v,m),source:c})}}}const h=this.#n.querySelectorAll("dm-marker[label]");for(const c of h){if(n.length>=5)break;const u=c.label;if(u&&u.toLowerCase().includes(s)){const m=c.center;if(!m)continue;n.push({type:"marker",label:u,subtype:"marker",coordinates:m,bounds:null,marker:c})}}return n}#P(e,n,s){const a=[];for(const[l,h]of Object.entries(e))s&&!s.includes(l)||typeof h=="string"&&h.toLowerCase().includes(n)&&a.push({key:l,value:h});return a}#w(e,n){const s=n[0],a=this.searchLabels,l=this.searchProperties;let h=s.key;if(l&&a){const c=l.indexOf(s.key);c>=0&&a[c]&&(h=a[c])}return{label:s.value,matchedProperty:h}}#x(e,n){const s=e.geometry;if(!s||s.type==="Point")return null;try{let l=null;if(n.eachLayer(h=>{h.feature===e&&(l=h)}),l&&l.getBounds)return l.getBounds()}catch{}return null}#v(e,n){const s=e.geometry;if(!s)return null;const a=s.type,l=s.coordinates;if(a==="Point")return[l[1],l[0]];try{let h=null;if(n.eachLayer(c=>{c.feature===e&&(h=c)}),h){if(h.getBounds){const c=h.getBounds().getCenter();return[c.lat,c.lng]}if(h.getLatLng){const c=h.getLatLng();return[c.lat,c.lng]}}}catch{}return null}#M(e){if(!e)return null;const n=e.match(/POINT\s*\(\s*([\d.-]+)\s+([\d.-]+)\s*\)/i);if(!n)return null;const s=parseFloat(n[1]),a=parseFloat(n[2]);return isNaN(a)||isNaN(s)?null:[a,s]}#R(e){if(!e)return null;const n=e.match(/^(\w+)/i);if(!n)return null;const s=n[1].toUpperCase();try{if(s==="POLYGON"||s==="MULTIPOLYGON")return this.#B(e,s);if(s==="LINESTRING"||s==="MULTILINESTRING")return this.#z(e,s);if(s==="POINT"){const a=this.#M(e);return a?{type:"Point",coordinates:[a[1],a[0]]}:null}}catch{}return null}#B(e,n){const s=[],a=/\(\s*([\d.\s,-]+)\s*\)/g;let l;for(;(l=a.exec(e))!==null;){const h=l[1].split(",").map(c=>{const[u,m]=c.trim().split(/\s+/).map(parseFloat);return[m,u]});h.length>0&&s.push(h)}return s.length===0?null:{type:n==="MULTIPOLYGON"?"MultiPolygon":"Polygon",coordinates:s}}#z(e,n){const s=[];if(n==="LINESTRING"){const a=e.match(/LINESTRING\s*\(\s*([\d.\s,-]+)\s*\)/i);if(a){const l=a[1].split(",").map(h=>{const[c,u]=h.trim().split(/\s+/).map(parseFloat);return[u,c]});s.push(l)}}else{const a=/\(\s*([\d.\s,-]+)\s*\)/g;let l;for(;(l=a.exec(e))!==null;){const h=l[1].split(",").map(c=>{const[u,m]=c.trim().split(/\s+/).map(parseFloat);return[m,u]});h.length>0&&s.push(h)}}return s.length===0?null:{type:n==="MULTILINESTRING"?"MultiLineString":"LineString",coordinates:s}}#U(e){if(e.type==="address"&&e.subtype){const n=e.subtype.toLowerCase();if(n==="provincie")return 5e4;if(n==="gemeente")return 2e4;if(n==="woonplaats")return 15e3;if(n==="wijk"||n==="buurt")return 3e3;if(n==="weg")return 5e3}return this.radius}#q(e=!1){const n=this.#t.querySelector(".search__listbox"),s=this.#t.querySelector(".search__input");if(this.#s.length===0){n.innerHTML=`
				<li class="search__no-results" part="no-results" role="option" aria-disabled="true">
					${e?"Zoeken in adressen niet beschikbaar":"Geen resultaten gevonden"}
				</li>
			`,this.#r=-1;return}let a="";e&&(a='<li class="search__no-results" part="no-results" role="option" aria-disabled="true">Zoeken in adressen niet beschikbaar</li>');const l=this.#s.filter(v=>v.type==="feature"||v.type==="marker"),h=this.#s.filter(v=>v.type==="address"),c=l.length>0&&h.length>0,u=(v,_)=>{const g=_===this.#r;return`
				<li
					id="search-option-${_}"
					class="search__result"
					part="result"
					role="option"
					data-index="${_}"
					aria-selected="${g}"
				>
					<span class="search__result-icon" aria-hidden="true">
						${this.#X(v)}
					</span>
					<span class="search__result-label">${this.#Z(v.label)}</span>
				</li>
			`};let m="";c?(m+='<li class="search__group-label" part="group-label" role="presentation">Op de kaart</li>',m+=l.map(v=>u(v,this.#s.indexOf(v))).join(""),m+='<li class="search__group-label" part="group-label" role="presentation">Adressen</li>',m+=h.map(v=>u(v,this.#s.indexOf(v))).join("")):m+=this.#s.map((v,_)=>u(v,_)).join(""),n.innerHTML=m+a,this.#r>=0?s.setAttribute("aria-activedescendant",`search-option-${this.#r}`):s.removeAttribute("aria-activedescendant")}#V(e){switch(e.type){case"address":return e.subtype||"Adres";case"feature":return e.subtype||"Object";case"marker":return"Marker";default:return""}}#X(e){switch(e.type){case"address":return'<svg aria-hidden="true" width="20" height="20"><use href="#icon-map-pin"/></svg>';case"feature":return'<svg aria-hidden="true" width="20" height="20"><use href="#icon-hamburger"/></svg>';case"marker":return'<svg aria-hidden="true" width="20" height="20"><use href="#icon-map-pin"/></svg>';default:return""}}#J(){const e=this.#t.querySelector(".search__listbox"),n=this.#t.querySelector(".search__input"),s=this.#t.querySelector(".search__form");e.hidden=!1,n.setAttribute("aria-expanded","true"),s.dataset.open="true"}#D(){const e=this.#t.querySelector(".search__listbox"),n=this.#t.querySelector(".search__input"),s=this.#t.querySelector(".search__form");e.hidden=!0,n.setAttribute("aria-expanded","false"),n.removeAttribute("aria-activedescendant"),this.#r=-1,delete s.dataset.open}#I(e){const n=this.#s.length-1;if(n<0)return;this.#r+=e,this.#r<0?this.#r=n:this.#r>n&&(this.#r=0),this.#q();const s=this.#t.querySelector(`#search-option-${this.#r}`);s&&s.scrollIntoView({block:"nearest"})}#F(e){const n=this.#s[e];if(!n)return;const s=this.#t.querySelector(".search__input"),a=this.#t.querySelector(".search__clear");s.value=n.label,a&&(a.hidden=!n.label),this.#D(),this.#K(n),this.#Y(n),this.dispatchEvent(new CustomEvent("dm-search:select",{bubbles:!0,composed:!0,detail:{type:n.type,label:n.label,coordinates:n.coordinates,bounds:n.bounds,feature:n.feature,marker:n.marker,raw:n.raw}}))}#K(e){const n=this.#n.map;if(!n)return;this.#$();const s=e.geometry?.type||"";s.includes("Polygon")||s.includes("Line")?this.#Q(e):e.type==="address"&&e.coordinates&&this.#N(e.coordinates);let a;if(this.#o?.getBounds)a=this.#o.getBounds();else if(e.bounds)a=e.bounds;else if(e.coordinates){const l=G.latLng(e.coordinates[0],e.coordinates[1]),h=this.#U(e);a=l.toBounds(h)}a&&(n.fitBounds(a,{padding:[40,40]}),this.dispatchEvent(new CustomEvent("dm-search:zoom",{bubbles:!0,composed:!0,detail:{bounds:a,result:e}})))}#Q(e){const n=this.#n.map;if(!n||!e.geometry)return;const s=e.geometry,a=s.type==="LineString"||s.type==="MultiLineString",l=this.#j(),h={color:l,weight:a?4:2,opacity:.8,fillColor:l,fillOpacity:a?0:.15};s.type==="Polygon"||s.type==="MultiPolygon"?this.#o=G.polygon(s.coordinates,h):s.type==="LineString"?this.#o=G.polyline(s.coordinates[0],h):s.type==="MultiLineString"&&(this.#o=G.polyline(s.coordinates,h)),this.#o&&this.#o.addTo(n)}#N(e){const n=this.#n?.map;!n||!e||(this.#o=G.circleMarker(e,{radius:9,color:"#fff",weight:2,fillColor:this.#j(),fillOpacity:1,opacity:1}).addTo(n))}#j(){const e=getComputedStyle(this);return e.getPropertyValue("--draad-map-components-search-highlight-color").trim()||e.getPropertyValue("--draad-map-components-color-primary").trim()||"#268641"}#Y(e){if(e.type==="marker"&&e.marker)e.marker.active=!0,e.marker.marker?.setZIndexOffset?.(1e3),this.#h=e.marker,e.marker.dispatchEvent(new CustomEvent("dm-marker:click",{bubbles:!0,composed:!0,detail:{marker:e.marker.marker??null,targetId:e.marker.target}}));else if(e.type==="feature"&&e.source){const n=e.source.tagName==="DM-WFS"?"wfs":"geojson";e.source.dispatchEvent(new CustomEvent(`dm-${n}:feature-click`,{bubbles:!0,composed:!0,detail:{feature:e.feature,layer:e.layer,latlng:null}}))}}#$(){this.#o&&this.#n?.map&&(this.#n.map.removeLayer(this.#o),this.#o=null),this.#n?.querySelectorAll("dm-geojson, dm-wfs").forEach(e=>e.clearActiveFeature?.()),this.#h&&(this.#h.active=!1,this.#h.marker?.setZIndexOffset?.(0),this.#h=null)}#O(e){const n=this.#t.querySelector(".search__button");e?(n.classList.add("search__button--loading"),n.setAttribute("aria-busy","true")):(n.classList.remove("search__button--loading"),n.removeAttribute("aria-busy"))}#H(e){const n=this.#t.querySelector('[role="status"]');n&&(n.textContent="",setTimeout(()=>{n.textContent=e},100))}#Z(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}#G(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}disconnectedCallback(){this.#i&&(this.#i.abort(),this.#i=null),this.#a&&(clearTimeout(this.#a),this.#a=null),this.#l&&(clearTimeout(this.#l),this.#l=null),this.#$(),this.#n=null,this.#s=[]}}customElements.define("dm-search",tu);const eu=`/* dm-infowindow - Card panel styling */
:host {
	display: flex;
	flex-direction: column;
	max-block-size: 100%;
}

:host([hidden]) {
	display: none;
}

.icon {
	display: block;
	inline-size: 1em;
	block-size: 1em;
	fill: currentColor;
}

.infowindow {
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	min-block-size: 0;
	inline-size: var(--draad-map-components-infowindow-inline-size, 280px);
	max-inline-size: calc(100vw - 32px);
	background: var(--draad-map-components-infowindow-bg, #fff);
	border: 1px solid var(--draad-map-components-infowindow-border, #e5e5e5);
	font-family: var(--draad-map-components-infowindow-font-family, inherit);
	font-size: 0.875rem;
	overflow: hidden;
}

.infowindow[hidden] {
	display: none;
}

.infowindow:focus-visible {
	outline: 2px solid var(--draad-map-components-infowindow-accent, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

/* Close button */
.infowindow__close {
	position: absolute;
	inset-block-start: 8px;
	inset-inline-end: 8px;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	inline-size: var(--draad-map-components-button-secondary-md-size, 36px);
	block-size: var(--draad-map-components-button-secondary-md-size, 36px);
	padding: var(--draad-map-components-button-secondary-md-padding, 8px);
	border: var(--draad-map-components-button-secondary-border-width, 1px) solid var(--draad-map-components-button-secondary-color-border, currentColor);
	border-radius: var(--draad-map-components-button-secondary-radius, 6px);
	background: var(--draad-map-components-button-secondary-color-bg, #fff);
	color: var(--draad-map-components-button-secondary-color-text, currentColor);
	font-family: var(--draad-map-components-font-family);
	font-size: var(--draad-map-components-button-secondary-md-icon-size, 20px);
	cursor: pointer;
}

@media (prefers-reduced-motion: no-preference) {
	.infowindow__close {
		transition: border-color 0.2s ease, color 0.2s ease;
	}
}

.infowindow__close:hover {
	border-color: var(--draad-map-components-button-secondary-color-border-hover, currentColor);
	color: var(--draad-map-components-button-secondary-color-text-hover, currentColor);
}

.infowindow__close:focus-visible {
	outline: var(--draad-map-components-button-secondary-focus-ring-width, 2px) var(--draad-map-components-button-secondary-focus-ring-style, dashed) var(--draad-map-components-button-secondary-color-focus-ring, Highlight);
	outline-offset: 2px;
}

.infowindow__close-icon {
	inline-size: 1rem;
	block-size: 1rem;
}

/* Media slot (header image) */
.infowindow__media {
	flex-shrink: 0;
	inline-size: 100%;
	max-block-size: var(--draad-map-components-infowindow-media-max-height, 180px);
	overflow: hidden;
	background: var(--draad-map-components-infowindow-media-bg, #f5f5f5);
}

.infowindow__media:empty {
	display: none;
}

.infowindow__media ::slotted(img) {
	display: block;
	inline-size: 100%;
	block-size: auto;
	object-fit: cover;
}

/* Body content */
.infowindow__body {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-block-size: 0;
	padding: var(--draad-map-components-infowindow-padding, 16px);
	overflow-y: auto;
}

.infowindow__content {
	display: flex;
	flex-direction: column;
	gap: var(--draad-map-components-infowindow-gap, 16px);
}

/* Featured image — bleeds edge-to-edge from body padding */
.infowindow__content .featured-image {
	margin-block-start: calc(-1 * var(--draad-map-components-infowindow-padding, 16px));
	margin-inline: calc(-1 * var(--draad-map-components-infowindow-padding, 16px));
	inline-size: calc(100% + 2 * var(--draad-map-components-infowindow-padding, 16px));
	block-size: var(--draad-map-components-infowindow-media-max-height, 180px);
	overflow: hidden;
}

.infowindow__content .featured-image:not(:has(img[src])) {
	display: none;
}

.infowindow__content .featured-image img {
	display: block;
	inline-size: 100%;
	block-size: 100%;
	object-fit: cover;
}

/* Headings */
.infowindow__content h1,
.infowindow__content h2,
.infowindow__content h3 {
	margin: 0;
	font-family: var(--draad-map-components-heading-font-family, var(--draad-map-components-font-family, inherit));
	font-weight: 700;
	color: var(--draad-map-components-infowindow-heading, currentColor);
	line-height: 1.3;
}

.infowindow__content h1 { font-size: var(--draad-map-components-infowindow-h1-font-size, 2rem); }
.infowindow__content h2 { font-size: var(--draad-map-components-infowindow-h2-font-size, 1.75rem); }
.infowindow__content h3 { font-size: var(--draad-map-components-infowindow-h3-font-size, 1.5rem); }

/* Tighten eyebrow → title gap (flex gap is 24px; -22px yields 2px net gap per Figma) */
.infowindow__content .label + h1,
.infowindow__content .label + h2,
.infowindow__content .label + h3,
.infowindow__content [data-label] + h1,
.infowindow__content [data-label] + h2,
.infowindow__content [data-label] + h3 {
	margin-block-start: var(--draad-map-components-infowindow-heading-margin-block-start, -14px);
}

/* Paragraphs */
.infowindow__content p {
	margin: 0;
	font-size: 1.125rem;
	color: var(--draad-map-components-infowindow-text, currentColor);
	line-height: 1.5;
}

/* Label styling */
.infowindow__content .label,
.infowindow__content [data-label] {
	display: block;
	font-size: var(--draad-map-components-eyebrow-font-size, 0.75rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: var(--draad-map-components-eyebrow-letter-spacing, 0.5px);
	color: var(--draad-map-components-eyebrow-color, currentColor);
}

/* Address */
.infowindow__content .address,
.infowindow__content address {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: var(--draad-map-components-address-font-size, 0.875rem);
	font-style: normal;
	color: var(--draad-map-components-address-color, currentColor);
	text-decoration: underline;
}

.infowindow__content .address > svg,
.infowindow__content address > svg {
	flex-shrink: 0;
	inline-size: 16px;
	block-size: 16px;
}

/* Action button */
.infowindow__content .action,
.infowindow__content a.button,
.infowindow__content button.action {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 16px 8px 12px;
	background: var(--draad-map-components-button-primary-color-bg, #0a0a0a);
	color: var(--draad-map-components-button-primary-color-text, #fafafa);
	border: none;
	border-radius: var(--draad-map-components-button-primary-radius, 6px);
	font-family: var(--draad-map-components-font-family, inherit);
	font-size: 1.125rem;
	line-height: 1.5;
	text-decoration: none;
	cursor: pointer;
	width: fit-content;
}

@media (prefers-reduced-motion: no-preference) {
	.infowindow__content .action,
	.infowindow__content a.button,
	.infowindow__content button.action {
		transition: background 0.2s ease;
	}
}

.infowindow__content .action:hover,
.infowindow__content a.button:hover,
.infowindow__content button.action:hover {
	background: var(--draad-map-components-button-primary-color-bg-hover, #171717);
}

.infowindow__content .action:active,
.infowindow__content a.button:active,
.infowindow__content button.action:active {
	background: var(--draad-map-components-button-primary-color-bg-active);
}

.infowindow__content .action:focus-visible,
.infowindow__content a.button:focus-visible,
.infowindow__content button.action:focus-visible {
	outline: var(--draad-map-components-button-primary-focus-ring-width, 2px) var(--draad-map-components-button-primary-focus-ring-style, dashed) var(--draad-map-components-button-primary-color-focus-ring, Highlight);
	outline-offset: 2px;
}

/* External-link icon for action button */
.infowindow__content .action > svg,
.infowindow__content a.button > svg {
	flex-shrink: 0;
	inline-size: 20px;
	block-size: 20px;
}

/* Links */
.infowindow__content a:not(.button):not(.action) {
	color: var(--draad-map-components-infowindow-accent, var(--draad-map-components-color-primary, currentColor));
	text-decoration: none;
}

.infowindow__content a:not(.button):not(.action):hover {
	text-decoration: underline;
}

.infowindow__content a:not(.button):not(.action):focus-visible {
	outline: 2px solid var(--draad-map-components-infowindow-accent, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

/* Definition list for properties */
.infowindow__content dl {
	margin: 0;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 4px 12px;
}

.infowindow__content dt {
	font-weight: 600;
	color: var(--draad-map-components-infowindow-text, currentColor);
}

.infowindow__content dd {
	margin: 0;
	color: var(--draad-map-components-infowindow-text, currentColor);
}

/* Chips */
.infowindow__content .chips {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.infowindow__content .chips:empty {
	display: none;
}

.infowindow__content .chips span {
	display: inline-flex;
	align-items: center;
	block-size: var(--draad-map-components-chip-block-size, 24px);
	padding: 0 12px;
	border: 1px solid var(--draad-map-components-infowindow-chip-border, #e5e5e5);
	border-radius: var(--draad-map-components-chip-radius, 9999px);
	background: var(--draad-map-components-chip-bg, #fff);
	font-size: 1rem;
	color: var(--draad-map-components-eyebrow-color, currentColor);
}

/* Responsive adjustments */
/* Full-width card on narrow screens (the map stretches its area to match).
   !important deliberately overrides the theme's fixed card width on mobile. */
@media (max-width: 640px) {
	.infowindow {
		inline-size: 100% !important;
		max-inline-size: none !important;
	}
}
`;class iu extends HTMLElement{#t;#n=null;#e=null;#i=null;#a=null;#l=null;#r=null;#s=null;#o=null;#h=null;#d=!1;#u;constructor(){super(),this.#t=this.attachShadow({mode:"open"}),this.#u=this.#c()}#c(){const e=new CSSStyleSheet;e.replaceSync(eu),this.#t.adoptedStyleSheets=[e]}static get observedAttributes(){return["for","feature-id","trigger"]}get for(){return this.getAttribute("for")}set for(e){this.setAttribute("for",e)}get featureId(){return this.getAttribute("feature-id")}set featureId(e){this.setAttribute("feature-id",e)}get trigger(){return this.getAttribute("trigger")||"click"}set trigger(e){this.setAttribute("trigger",e)}get isOpen(){return this.#d}connectedCallback(){const e=this.closest("dm-map");e&&(this.#n=e,this.setAttribute("slot","top-right"),this.#_(),this.setAttribute("hidden",""),Ut(this.#t),e.map?this.#f():e.addEventListener("dm-map:ready",()=>{this.#f()},{once:!0}))}async#f(){await this.#u,this.#b(),this.#l=e=>this.#p(e),this.#n.addEventListener("dm-infowindow:open",this.#l)}#p(e){e.target!==this&&this.isOpen&&this.close()}#_(){this.#t.innerHTML=`
			<article class="infowindow" part="panel" role="dialog" aria-modal="false" aria-label="Objectinformatie" hidden>
				<button class="infowindow__close" part="close" type="button" aria-label="Sluiten">
					<svg class="infowindow__close-icon" aria-hidden="true"><use href="#icon-close"/></svg>
				</button>
				<div class="infowindow__media" part="media">
					<slot name="media"></slot>
				</div>
				<div class="infowindow__body" part="body">
					<div class="infowindow__content" part="content">
						<!-- Content will be inserted here -->
					</div>
				</div>
			</article>
		`,this.#t.querySelector(".infowindow__close").addEventListener("click",()=>this.close())}#b(){const e=this.for;e&&(this.#e=document.getElementById(e),this.#e?this.#m():this.#A(e))}#A(e){this.#s&&this.#s.disconnect(),this.#s=new MutationObserver((n,s)=>{const a=document.getElementById(e);a&&(this.#e=a,this.#m(),s.disconnect(),this.#s=null)}),this.#s.observe(this.#n,{childList:!0,subtree:!0})}#m(){const e=this.trigger,n=this.#e.tagName.toLowerCase();n==="dm-marker"?this.#k(e):(n==="dm-geojson"||n==="dm-wfs")&&this.#E(e,n)}#y(){if(this.#e&&(this.#i&&(this.#e.removeEventListener("dm-marker:click",this.#i),this.#i=null),this.#a)){const e=this.#e.tagName.toLowerCase().replace("dm-","");this.#e.removeEventListener(`dm-${e}:feature-click`,this.#a),this.#a=null}}#k(e){e==="click"&&(this.#i=n=>this.#g(n),this.#e.addEventListener("dm-marker:click",this.#i))}#E(e,n){const a=`dm-${n.replace("dm-","")}:feature-click`;e==="click"&&(this.#a=l=>this.#L(l),this.#e.addEventListener(a,this.#a))}#g(e){if(this.#h=null,this.isOpen)this.close();else{const n=this.#P();this.#U(n),this.open()}}#L(e){const{feature:n}=e.detail;if(!this.#C(n))return;this.#h=n;const s=this.#w(n);this.#U(s),this.#R(this,n),this.open()}#C(e){const n=this.featureId;return!n||n==="*"||e.id!==void 0&&String(e.id)===n||e.properties?.id!==void 0&&String(e.properties.id)===n}#P(){const e=document.createElement("div"),n=this.querySelector("template");if(n)e.appendChild(n.content.cloneNode(!0));else for(const s of this.childNodes)s.nodeType===Node.ELEMENT_NODE&&s.hasAttribute("slot")||e.appendChild(s.cloneNode(!0));return this.#v(e),e}#w(e){const n=document.createElement("div"),s=this.querySelector("template");if(s){const a=s.content.cloneNode(!0);n.appendChild(a),this.#R(n,e),this.#B(n)}else if(this.#e&&this.#x()){const a=this.#M(e);a&&n.appendChild(a)}else for(const a of this.childNodes)a.nodeType===Node.ELEMENT_NODE&&a.hasAttribute("slot")||n.appendChild(a.cloneNode(!0));return this.#v(n),n}#x(){return this.#e?.getAttribute("infowindow-properties")}#v(e){const n=a=>{const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("aria-hidden","true");const h=document.createElementNS("http://www.w3.org/2000/svg","use");return h.setAttribute("href",`#${a}`),l.appendChild(h),l},s=a=>{const l=a.getAttribute("href");if(!l)return!1;try{return new URL(l,window.location.href).origin!==window.location.origin}catch{return!1}};e.querySelectorAll(".address, address").forEach(a=>{a.setAttribute("part","address"),a.prepend(n("icon-map-pin"))}),e.querySelectorAll(".action, a.button, button.action").forEach(a=>{a.setAttribute("part","action"),s(a)&&a.prepend(n("icon-external-link"))})}#M(e){const n=this.#e.getAttribute("infowindow-properties"),s=this.#e.getAttribute("infowindow-labels");if(!n)return null;const a=n.split(",").map(c=>c.trim()),l=s?s.split(",").map(c=>c.trim()):a,h=document.createElement("dl");h.className="dm-infowindow-data",h.setAttribute("part","data-table");for(let c=0;c<a.length;c++){const u=e.properties?.[a[c]];if(u==null||u==="")continue;const m=document.createElement("dt");m.textContent=l[c]||a[c],h.appendChild(m);const v=document.createElement("dd");v.innerHTML=u!==null&&typeof u=="object"?JSON.stringify(u):String(u),h.appendChild(v)}return h.children.length>0?h:null}#R(e,n){const s=new Set(["https:","http:","mailto:","tel:"]),a=(l,h)=>{l.style.display=h?"":"none"};e.querySelectorAll("[data-field]").forEach(l=>{const h=this.#z(n,l.getAttribute("data-field")),c=h!=null?String(h):"";l.textContent=c,a(l,c!=="")}),e.querySelectorAll("[data-href]").forEach(l=>{const h=this.#z(n,l.getAttribute("data-href"));let c=!1;if(h!=null)try{const u=new URL(String(h),window.location.origin);s.has(u.protocol)?(l.setAttribute("href",String(h)),c=!0):l.removeAttribute("href")}catch{l.removeAttribute("href")}else l.removeAttribute("href");a(l,c)}),e.querySelectorAll("[data-src]").forEach(l=>{const h=this.#z(n,l.getAttribute("data-src"));let c=!1;if(h!=null)try{const u=new URL(String(h),window.location.origin);u.protocol==="https:"||u.protocol==="http:"?(l.setAttribute("src",String(h)),c=!0):l.removeAttribute("src")}catch{l.removeAttribute("src")}else l.removeAttribute("src");a(l,c)})}#B(e){e.querySelectorAll("dl.dm-infowindow-data").forEach(n=>{const s=Array.from(n.children);let a=!1;s.forEach((l,h)=>{if(l.tagName!=="DD")return;if(l.style.display==="none"||l.textContent===""){l.style.display="none";const u=s[h-1];u&&u.tagName==="DT"&&(u.style.display="none")}else a=!0}),a||(n.style.display="none")})}#z(e,n){if(!n.startsWith("properties.")&&n!=="id"&&n!=="properties")return;const s=new Set(["__proto__","constructor","prototype"]),a=n.split(".");let l=e;for(const h of a){if(l==null||s.has(h)||!Object.prototype.hasOwnProperty.call(l,h))return;l=l[h]}return l}#U(e){const n=this.#t.querySelector(".infowindow__content");for(n.innerHTML="";e.firstChild;)n.appendChild(e.firstChild);n.querySelectorAll("a").forEach(s=>s.setAttribute("part","link"))}open(){this.#t.querySelector(".infowindow").removeAttribute("hidden"),this.removeAttribute("hidden"),this.#d=!0,this.#q(),this.dispatchEvent(new CustomEvent("dm-infowindow:open",{bubbles:!0,composed:!0,detail:{target:this.#e,feature:this.#h}}))}close(){this.#t.querySelector(".infowindow").setAttribute("hidden",""),this.setAttribute("hidden",""),this.#d=!1,this.#r&&(document.removeEventListener("keydown",this.#r),this.#r=null),this.#e?.tagName.toLowerCase()==="dm-marker"?this.#e.active=!1:this.#e?.clearActiveFeature?.(),this.#o&&typeof this.#o.focus=="function"&&this.#o.focus(),this.#o=null,this.dispatchEvent(new CustomEvent("dm-infowindow:close",{bubbles:!0,composed:!0,detail:{target:this.#e}}))}toggle(){this.isOpen?this.close():this.open()}#q(){const e=this.#t.querySelector(".infowindow");this.#o=document.activeElement,e.setAttribute("tabindex","-1"),e.focus(),this.#r=n=>{n.key==="Escape"&&this.isOpen&&this.close()},document.addEventListener("keydown",this.#r)}attributeChangedCallback(e,n,s){if(!(n===s||!this.#n))switch(e){case"for":this.#y(),this.#e=null,this.#b();break;case"trigger":this.#y(),this.#e&&this.#m();break}}disconnectedCallback(){this.#y(),this.#l&&(this.#n?.removeEventListener("dm-infowindow:open",this.#l),this.#l=null),this.#r&&(document.removeEventListener("keydown",this.#r),this.#r=null),this.#s&&(this.#s.disconnect(),this.#s=null),this.#n=null,this.#e=null,this.#o=null,this.#h=null}}customElements.define("dm-infowindow",iu);const nu=`.icon {
	display: block;
	inline-size: 1em;
	block-size: 1em;
	fill: currentColor;
}

.legend {
	background: var(--draad-map-components-legend-bg, #ffffff);
	font-family: var(--draad-map-components-legend-font-family, inherit);
	font-size: var(--draad-map-components-legend-font-size, 0.875rem);
	line-height: 1.5;
	inline-size: var(--draad-map-components-legend-width, 285px);
}

.legend__toggle {
	display: flex;
	align-items: center;
	gap: var(--draad-map-components-legend-gap, 8px);
	inline-size: 100%;
	padding: 15px 16px;
	block-size: 51px;
	border: none;
	background: transparent;
	cursor: pointer;
	font-size: inherit;
	font-family: inherit;
	text-align: start;
	color: var(--draad-map-components-legend-color-text, currentColor);
}

.legend__toggle:hover {
	background: var(--draad-map-components-legend-hover-bg, #f5f5f5);
}

.legend__toggle:focus-visible {
	outline: 2px solid var(--draad-map-components-legend-focus-color, var(--draad-map-components-color-primary, Highlight));
	outline-offset: -2px;
}

.legend__title {
	font-weight: 700;
	color: var(--draad-map-components-legend-color-text, currentColor);
}

.legend__icon {
	inline-size: var(--draad-map-components-icon-size-md, 18px);
	block-size: var(--draad-map-components-icon-size-md, 18px);
	flex-shrink: 0;
	fill: currentColor;
}

@media (prefers-reduced-motion: no-preference) {
	.legend__icon {
		transition: transform 0.2s ease;
	}
}

.legend__toggle[aria-expanded="true"] .legend__icon {
	transform: rotate(180deg);
}

.legend__content {
	border: none;
}

.legend__content[hidden] {
	display: none;
}

.legend__list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: var(--draad-map-components-legend-item-gap, 12px);
	padding-inline: var(--draad-map-components-legend-padding, 16px);
	padding-block-end: var(--draad-map-components-legend-padding, 16px);
}

.legend__item {
	padding: 0;
}

.legend__item-header {
	display: flex;
	align-items: flex-start;
	gap: var(--draad-map-components-legend-checkbox-gap, 6px);
}

/* Checkbox - 24x24 with #333 border per Figma */
.legend__item input[type="checkbox"] {
	appearance: none;
	-webkit-appearance: none;
	inline-size: 24px;
	block-size: 24px;
	min-inline-size: 24px;
	margin: 0;
	border: 1px solid var(--draad-map-components-legend-checkbox-border, #e5e5e5);
	background: var(--draad-map-components-legend-checkbox-bg, #fff);
	cursor: pointer;
	flex-shrink: 0;
}

/* icon-check data-URI exception: native <input type="checkbox"> can't host sprite <use> children */
.legend__item input[type="checkbox"]:checked {
	background-color: var(--draad-map-components-legend-checkbox-checked-bg, var(--draad-map-components-color-primary, #0a0a0a));
	background-image: var(--draad-map-components-checkbox-check-icon, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fafafa'%3E%3Cpath d='M20.6644 5.2526C21.0772 5.61952 21.1143 6.25159 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33565C19.6195 4.92286 20.2516 4.88568 20.6644 5.2526Z'/%3E%3C/svg%3E"));
	background-repeat: no-repeat;
	background-position: center;
	background-size: 16px;
	border-color: var(--draad-map-components-legend-checkbox-checked-border, var(--draad-map-components-color-primary, #0a0a0a));
}

.legend__item input[type="checkbox"]:focus-visible {
	outline: 2px solid var(--draad-map-components-legend-focus-color, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

/* Layer type icons - 18x24 per Figma */
.legend__type-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	inline-size: 18px;
	block-size: 24px;
	flex-shrink: 0;
	color: var(--draad-map-components-legend-icon-color, var(--draad-map-components-color-primary, currentColor));
}

.legend__type-icon--polygon::before {
	content: '';
	display: block;
	inline-size: 18px;
	block-size: 3px;
	background: currentColor;
}

.legend__type-icon svg {
	inline-size: 16px;
	block-size: 16px;
	fill: currentColor;
}

/* Item expand chevron */
.legend__item-chevron-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	inline-size: 18px;
	block-size: 24px;
	flex-shrink: 0;
	color: var(--draad-map-components-legend-color-text, currentColor);
}

.legend__item-chevron {
	inline-size: var(--draad-map-components-icon-size-sm, 12px);
	block-size: var(--draad-map-components-icon-size-sm, 12px);
	fill: currentColor;
}

@media (prefers-reduced-motion: no-preference) {
	.legend__item-chevron {
		transition: transform 0.2s ease;
	}
}

.legend__item-toggle {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;
}

.legend__item-toggle:focus-visible {
	outline: 2px solid var(--draad-map-components-legend-focus-color, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

.legend__item-toggle[aria-expanded="true"] .legend__item-chevron {
	transform: rotate(180deg);
}

.legend__item-toggle[hidden] {
	display: none;
}


.legend__name {
	color: var(--draad-map-components-legend-color-text, currentColor);
	line-height: 1.5;
	cursor: pointer;
}

/* Item description */
.legend__item-description {
	padding-block: var(--draad-map-components-legend-desc-padding-block, 8px);
	padding-inline-start: calc(24px + 18px + 18px + 6px * 3);
	font-size: 0.875rem;
	line-height: 1.35;
	color: var(--draad-map-components-legend-color-text-muted, currentColor);
}

.legend__item-description[hidden] {
	display: none;
}

.legend__item-description p {
	margin: 0;
}`;class ru extends HTMLElement{#t;#n=!1;#e=[];#i=new Set;#a;constructor(){super(),this.#t=this.attachShadow({mode:"open"}),this.#a=this.#l()}#l(){const e=new CSSStyleSheet;e.replaceSync(nu),this.#t.adoptedStyleSheets=[e]}connectedCallback(){const e=this.closest("dm-map");e&&(e.map?this.#r(e):e.addEventListener("dm-map:ready",()=>{this.#r(e)},{once:!0}))}async#r(e){await this.#a,this.#e=this.#o(e),this.#d(),Ut(this.#t),this.#u()}#s(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}#o(e){const n=[];return e.querySelectorAll(":scope > dm-layer[label]").forEach(l=>{n.push({element:l,label:l.label,type:"layer",layerType:this.#h(l),description:l.getAttribute("description")})}),[":scope > dm-marker[label]",":scope > dm-geojson[label]",":scope > dm-wfs[label]",":scope > dm-wms[label]"].forEach(l=>{e.querySelectorAll(l).forEach(c=>{const u=c.tagName.toLowerCase().replace("dm-","");n.push({element:c,label:c.label,type:u,layerType:this.#h(c),description:c.getAttribute("description")})})}),n}#h(e){const n=e.tagName.toLowerCase();if(n==="dm-marker")return"point";if(n==="dm-wms")return"raster";const s=e.getAttribute("geometry-type");if(s){if(s.toLowerCase().includes("point")||s.toLowerCase().includes("marker"))return"point";if(s.toLowerCase().includes("line"))return"polygon"}return"polygon"}#d(){const e=s=>s==="point"?'<svg width="16" height="16" aria-hidden="true"><use href="#icon-map-pin"/></svg>':s==="raster"?'<svg width="16" height="16" aria-hidden="true"><use href="#icon-grid"/></svg>':"",n=this.#e.map((s,a)=>{const l=s.element.hidden?"":"checked",h=this.#s(s.label),c=s.description?this.#s(s.description):"",u=!!s.description,m=this.#i.has(a),v=`legend-layer-${a}`;return`
				<li class="legend__item" part="item">
					<div class="legend__item-header" part="item-header">
						<input type="checkbox" id="${v}" ${l} data-index="${a}">
						<span class="legend__type-icon legend__type-icon--${s.layerType}" part="item-icon" aria-hidden="true">${e(s.layerType)}</span>
						${u?`
						<button
							class="legend__item-toggle"
							part="item-toggle"
							type="button"
							aria-expanded="${m}"
							aria-controls="desc-${a}"
							aria-label="Beschrijving van ${h} tonen/verbergen"
							data-index="${a}"
						>
							<span class="legend__item-chevron-wrapper">
								<svg class="legend__item-chevron" aria-hidden="true"><use href="#icon-chevron-down"/></svg>
							</span>
						</button>
						`:""}
						<label for="${v}" class="legend__name" part="item-name">${h}</label>
					</div>
					${u?`
						<div class="legend__item-description" part="item-description" id="desc-${a}" ${m?"":"hidden"}>
							<p>${c}</p>
						</div>
					`:""}
				</li>
			`}).join("");this.#t.innerHTML=`
			<div class="legend" part="root">
				<button
					class="legend__toggle"
					part="toggle"
					type="button"
					aria-expanded="${this.#n}"
					aria-controls="legend-content"
				>
					<span class="legend__title" part="title">Legenda</span>
					<svg class="legend__icon" aria-hidden="true"><use href="#icon-chevron-down"/></svg>
				</button>
				<div id="legend-content" class="legend__content" part="content" ${this.#n?"":"hidden"}>
					<ul class="legend__list" part="list">
						${n}
					</ul>
				</div>
			</div>
		`}#u(){this.#t.querySelector(".legend__toggle").addEventListener("click",()=>this.#f()),this.#t.querySelectorAll('input[type="checkbox"]').forEach(a=>{a.addEventListener("change",l=>{const h=parseInt(l.target.dataset.index,10),c=this.#e[h];l.target.checked?c.element.show():c.element.hide()})}),this.#t.querySelectorAll(".legend__item-toggle").forEach(a=>{a.addEventListener("click",l=>{const h=parseInt(l.currentTarget.dataset.index,10);this.#c(h)})}),this.#e.forEach((a,l)=>{const h=a.type==="layer"?"dm-layer":`dm-${a.type}`;a.element.addEventListener(`${h}:show`,()=>{const c=this.#t.querySelector(`input[data-index="${l}"]`);c&&(c.checked=!0)}),a.element.addEventListener(`${h}:hide`,()=>{const c=this.#t.querySelector(`input[data-index="${l}"]`);c&&(c.checked=!1)})})}#c(e){this.#i.has(e)?this.#i.delete(e):this.#i.add(e);const n=this.#t.querySelector(`.legend__item-toggle[data-index="${e}"]`),s=this.#t.querySelector(`#desc-${e}`);if(n&&s){const a=this.#i.has(e);n.setAttribute("aria-expanded",String(a)),a?s.removeAttribute("hidden"):s.setAttribute("hidden","")}}#f(){this.#n=!this.#n;const e=this.#t.querySelector(".legend__toggle"),n=this.#t.querySelector(".legend__content");e.setAttribute("aria-expanded",String(this.#n)),this.#n?n.removeAttribute("hidden"):n.setAttribute("hidden","")}disconnectedCallback(){this.#e=[],this.#i.clear()}}customElements.define("dm-legend",ru);const su=`/* ============================================
   dm-list panel styles (injected into dm-map via slot)
   Loaded as Ef in the bundle (shadow DOM stylesheet)
   ============================================ */

:host {
	display: block;
	inline-size: 100%;
	font-family: var(--draad-map-components-list-font-family, inherit);
	font-size: 0.875rem;
}

.list__panel {
	padding-block: var(--draad-map-components-list-padding, 16px);
	inline-size: min(100%, var(--draad-map-components-list-width, 100%));
	margin-inline: auto;
}

/* Result count */
.list__count {
	margin: 0;
	margin-block-end: 16px;
	font-size: 0.875rem;
	color: var(--draad-map-components-list-color-text-muted, currentColor);
}

/* Card grid */
.list__grid {
	display: grid;
	grid-template-columns: repeat(var(--draad-map-components-list-columns, 3), 1fr);
	gap: var(--draad-map-components-list-grid-gap, 16px);
}

@media (max-width: 900px) {
	.list__grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 640px) {
	.list__grid {
		grid-template-columns: 1fr;
	}
}

/* Card shell — mirrors infowindow */
.list__card {
	background: var(--draad-map-components-list-card-bg, #fff);
	border: var(--draad-map-components-list-card-border, 1px solid #e5e5e5);
	border-radius: var(--draad-map-components-list-card-radius, 8px);
	cursor: pointer;
	overflow: hidden;
}

@media (prefers-reduced-motion: no-preference) {
	.list__card {
		transition: border-color 0.15s ease;
	}
}

.list__card:hover {
	border-color: var(--draad-map-components-list-color-primary, var(--draad-map-components-color-primary, currentColor));
}

.list__card:focus-visible {
	outline: 2px solid var(--draad-map-components-list-color-primary, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

.list__card a:focus-visible {
	outline: none;
}

.list__card:has(a:focus-visible) {
	outline: 2px solid var(--draad-map-components-list-color-primary, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

/* Card link — vertical layout */
.list__card a {
	display: flex;
	flex-direction: column;
	color: inherit;
	text-decoration: none;
	font: inherit;
}

/* Featured image (full-bleed, above body padding) */
.list__card .featured-image {
	inline-size: 100%;
	block-size: 180px;
	overflow: hidden;
	flex-shrink: 0;
}

.list__card .featured-image:not(:has(img[src])) {
	display: none;
}

.list__card .featured-image img {
	display: block;
	inline-size: 100%;
	block-size: 100%;
	object-fit: cover;
}

/* Bare img (not wrapped in .featured-image) */
.list__card a > img {
	display: block;
	inline-size: 100%;
	block-size: 180px;
	object-fit: cover;
	flex-shrink: 0;
}

/* Body: all direct children that aren't images or action get horizontal padding */
.list__card a > :not(.featured-image):not(img):not(.action) {
	padding-inline: var(--draad-map-components-list-card-padding, 16px);
}

/* Top padding: first non-image element */
.list__card a > :not(.featured-image):not(img):not(.action):first-child {
	padding-block-start: var(--draad-map-components-list-card-padding, 16px);
}

/* Top padding: when image is first, the next sibling starts the body */
.list__card a > .featured-image:first-child + *,
.list__card a > img:first-child + * {
	padding-block-start: var(--draad-map-components-list-card-padding, 16px);
}

/* Bottom padding on last child (not action — action uses margin) */
.list__card a > :not(.action):last-child {
	padding-block-end: var(--draad-map-components-list-card-padding, 16px);
}

/* Vertical gap between body elements */
.list__card a > :not(.featured-image):not(img):not(.label):not([data-label]) + :not(.featured-image):not(img) {
	margin-block-start: 24px;
}

/* Action button: indented from card edges, 32px bottom clearance */
.list__card a > .action {
	margin-inline: var(--draad-map-components-list-card-padding, 16px);
	margin-block-end: var(--draad-map-components-list-card-padding, 16px);
}

/* ── Typography (mirrors infowindow__content) ──────────────────────── */

/* Eyebrow / label */
.list__card .label,
.list__card [data-label] {
	display: block;
	font-size: var(--draad-map-components-eyebrow-font-size, 0.75rem);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: var(--draad-map-components-eyebrow-letter-spacing, 0.5px);
	color: var(--draad-map-components-eyebrow-color, currentColor);
}

/* Title */
.list__card h1,
.list__card h2,
.list__card h3 {
	margin: 0;
	font-family: var(--draad-map-components-heading-font-family, var(--draad-map-components-font-family, inherit));
	font-weight: 700;
	color: var(--draad-map-components-infowindow-heading, currentColor);
	line-height: 1.3;
}

.list__card h1 { font-size: var(--draad-map-components-list-card-h1-font-size, 2rem); }
.list__card h2 { font-size: var(--draad-map-components-list-card-h2-font-size, 1.75rem); }
.list__card h3 { font-size: var(--draad-map-components-list-card-h3-font-size, 1.5rem); }

/* Tighten eyebrow → title gap */
.list__card .label + h1,
.list__card .label + h2,
.list__card .label + h3,
.list__card [data-label] + h1,
.list__card [data-label] + h2,
.list__card [data-label] + h3 {
	margin-block-start: var(--draad-map-components-eyebrow-margin-block-start, -18px);
}

/* Address */
.list__card .address,
.list__card address {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 0.875rem;
	font-style: normal;
	color: var(--draad-map-components-address-color, currentColor);
	text-decoration: underline;
}

.list__card .address > svg,
.list__card address > svg {
	flex-shrink: 0;
	inline-size: 16px;
	block-size: 16px;
}

/* Description */
.list__card p {
	margin: 0;
	font-size: 1.125rem;
	color: var(--draad-map-components-infowindow-text, currentColor);
	line-height: 1.5;
}

.list__card p:empty { display: none; }

/* Chips */
.list__card .chips {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.list__card .chips:empty { display: none; }

.list__card .chips span {
	display: inline-flex;
	align-items: center;
	block-size: var(--draad-map-components-chip-block-size, 24px);
	padding: 0 12px;
	border: var(--draad-map-components-chip-border, 1px solid #e5e5e5);
	border-radius: var(--draad-map-components-chip-radius, 9999px);
	background: var(--draad-map-components-chip-bg, #fff);
	font-size: 1rem;
	color: var(--draad-map-components-eyebrow-color, currentColor);
}

/* Action button */
.list__card .action,
.list__card a.button {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 16px 8px 12px;
	background: var(--draad-map-components-button-primary-color-bg, #0a0a0a);
	color: var(--draad-map-components-button-primary-color-text, #fafafa);
	border: none;
	border-radius: var(--draad-map-components-button-primary-radius, 6px);
	font-family: inherit;
	font-size: 1.125rem;
	line-height: 1.5;
	text-decoration: none;
	cursor: pointer;
	width: fit-content;
}

.list__card .action > svg,
.list__card a.button > svg {
	flex-shrink: 0;
	inline-size: 20px;
	block-size: 20px;
}

@media (prefers-reduced-motion: no-preference) {
	.list__card .action,
	.list__card a.button {
		transition: background 0.2s ease;
	}
}

.list__card .action:hover,
.list__card a.button:hover {
	background: var(--draad-map-components-button-primary-color-bg-hover, #171717);
}

/* Hide empty eyebrow/label */
.list__card .eyebrow:empty,
.list__card [data-label]:empty {
	display: none;
}

/* When img is followed by an empty eyebrow, give the next element the top padding
   and cancel the sibling gap margin (this selector has higher specificity than the gap rule) */
.list__card a > img:first-child + .eyebrow:empty + *,
.list__card a > img:first-child + [data-label]:empty + * {
	padding-block-start: var(--draad-map-components-list-card-padding, 16px);
	margin-block-start: 0;
}

/* Empty state */
.list__empty {
	text-align: center;
	color: var(--draad-map-components-list-color-text-muted, currentColor);
	padding: 48px 24px;
	font-style: italic;
}

/* Pagination */
.list__pagination {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-block-start: 24px;
	padding-block-start: 16px;
	border-block-start: 1px solid var(--draad-map-components-list-pagination-border, #e5e5e5);
}

.list__pagination-arrow {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	color: currentColor;
	border-radius: 2px;
}

.list__pagination-arrow:first-child {
	padding-inline-end: 10px;
}

.list__pagination-arrow:last-child {
	padding-inline-start: 10px;
}

.list__pagination-arrow[disabled] {
	opacity: 0.4;
	cursor: not-allowed;
}

.list__pagination-arrow:not([disabled]):focus-visible {
	outline: 2px dashed var(--draad-map-components-list-pagination-focus, var(--draad-map-components-focus-color, Highlight));
	outline-offset: 2px;
}

.list__pagination-icon {
	inline-size: 20px;
	block-size: 20px;
	flex-shrink: 0;
}

.list__pagination-pages {
	display: flex;
	align-items: center;
}

.list__pagination-page {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	inline-size: 32px;
	block-size: 32px;
	background: transparent;
	border: none;
	border-radius: 3px;
	padding: 0;
	font: inherit;
	font-size: 1.125rem;
	color: currentColor;
	cursor: pointer;
}

.list__pagination-page:not(.list__pagination-page--active):hover {
	color: var(--draad-map-components-list-pagination-color-active, var(--draad-map-components-color-primary, currentColor));
}

.list__pagination-page--active {
	font-weight: 700;
	color: var(--draad-map-components-list-pagination-color-active, var(--draad-map-components-color-primary, currentColor));
	background: var(--draad-map-components-list-pagination-page-bg-active, #fff);
}

.list__pagination-page:focus-visible {
	outline: 2px dashed var(--draad-map-components-list-pagination-focus, var(--draad-map-components-focus-color, Highlight));
	outline-offset: 2px;
}

.list__pagination-ellipsis {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	inline-size: 32px;
	block-size: 32px;
	font: inherit;
	font-size: 1.125rem;
	color: currentColor;
}
`,au=new Set(["http:","https:","mailto:","tel:"]),ou=new Set(["__proto__","constructor","prototype"]);class lu extends HTMLElement{#t;#n=[];#e=new Map;#i=null;#a=null;#l=!1;#r;#s=null;#o=null;#h=new Map;#d=new Map;#u=null;#c=1;constructor(){super(),this.#t=this.attachShadow({mode:"open"}),this.#r=this.#f()}#f(){const e=new CSSStyleSheet;e.replaceSync(ms),this.#t.adoptedStyleSheets=[e],this.#o=new CSSStyleSheet,this.#o.replaceSync(su)}static get observedAttributes(){return["for","label","columns","per-page","prev-label","next-label","page-label"]}attributeChangedCallback(e){this.#l&&(e==="per-page"&&(this.#c=1),this.#g())}get for(){return this.getAttribute("for")}get label(){return this.getAttribute("label")||"Lijst bekijken"}get shortLabel(){return this.getAttribute("short-label")||"Lijst"}get columns(){const e=parseInt(this.getAttribute("columns"),10);return e>=1&&e<=4?e:3}get perPage(){const e=parseInt(this.getAttribute("per-page"),10);return e>=1&&e<=200?e:12}get prevLabel(){return this.getAttribute("prev-label")||"Vorige"}get nextLabel(){return this.getAttribute("next-label")||"Volgende"}get pageLabelTemplate(){return this.getAttribute("page-label")||"Pagina {current} van {total}"}connectedCallback(){const e=this.closest("dm-map");e&&(e.map?this.#p(e):(this.#u=()=>this.#p(e),e.addEventListener("dm-map:ready",this.#u,{once:!0})))}async#p(e){this.#s=e,await this.#r,this.#_(),Ut(this.#t),this.#b(),this.#A()}#_(){const e=document.createElement("div");e.className="list",e.setAttribute("part","toggle-wrapper");const n=document.createElement("button");n.className="list__toggle",n.type="button",n.setAttribute("part","toggle"),n.setAttribute("aria-pressed","false"),n.setAttribute("aria-label",this.label),n.innerHTML='<svg class="list__icon" part="toggle-icon" aria-hidden="true"><use href="#icon-list"/></svg>';const s=document.createElement("span");s.className="list__text list__text--full",s.setAttribute("part","toggle-text-full"),s.textContent=this.label,n.appendChild(s);const a=document.createElement("span");a.className="list__text list__text--short",a.setAttribute("part","toggle-text-short"),a.textContent=this.shortLabel,n.appendChild(a),n.addEventListener("click",()=>this.#m()),e.appendChild(n),this.#t.appendChild(e)}#b(){const e=this.for;if(!e)return;const n=e.split(",").map(s=>s.trim()).filter(Boolean);this.#n=[],n.forEach(s=>{const a=this.#s.querySelector(`#${CSS.escape(s)}`);a&&this.#n.push(a)})}#A(){this.#n.forEach(e=>{const n=h=>{this.#e.set(e.id,h.detail.filters),this.#c=1,this.#l&&this.#g()};this.#h.set(e,n),e.addEventListener("dm-filter:apply",n);const s=e.tagName.toLowerCase(),a=s==="dm-geojson"?"dm-geojson:ready":s==="dm-wfs"?"dm-wfs:ready":"dm-layer:ready",l=()=>{this.#c=1,this.#l&&this.#g()};this.#d.set(e,{event:a,handler:l}),e.addEventListener(a,l)})}#m(){this.#l?this.#k():this.#y()}#y(){this.#l=!0;const e=this.#t.querySelector(".list__toggle");e.setAttribute("aria-pressed","true");const n=e.querySelector(".list__icon");e.querySelector(".list__text--full").textContent="Kaart bekijken",e.querySelector(".list__text--short").textContent="Kaart",n.innerHTML='<use href="#icon-map"/>',this.#i||(this.#i=document.createElement("div"),this.#i.setAttribute("slot","list"),this.#a=this.#i.attachShadow({mode:"open"}),this.#o&&(this.#a.adoptedStyleSheets=[this.#o]),this.#s.appendChild(this.#i)),this.#c=1,this.#g(),this.dispatchEvent(new CustomEvent("dm-list:open",{bubbles:!0,composed:!0,detail:{source:this}})),requestAnimationFrame(()=>{const s=this.#a?.querySelector(".list__card");s&&s.focus()})}#k(){this.#l=!1;const e=this.#t.querySelector(".list__toggle");e.setAttribute("aria-pressed","false");const n=e.querySelector(".list__icon");e.querySelector(".list__text--full").textContent=this.label,e.querySelector(".list__text--short").textContent=this.shortLabel,n.innerHTML='<use href="#icon-list"/>',e.focus(),this.dispatchEvent(new CustomEvent("dm-list:close",{bubbles:!0,composed:!0,detail:{source:this}}))}#E(){const e=[];return this.#n.forEach(n=>{const s=n.data;if(!s?.features)return;let a=s.features;const l=this.#e.get(n.id);l&&Object.keys(l).length>0&&(a=Pe(a,l)),a.forEach(h=>{e.push({feature:h,source:n})})}),e}#g(){if(!this.#a)return;const e=this.querySelector("template"),n=this.#E(),s=n.length,a=this.perPage,l=Math.max(1,Math.ceil(s/a));this.#c>l&&(this.#c=l),this.#c<1&&(this.#c=1);const h=(this.#c-1)*a,c=Math.min(h+a,s),u=n.slice(h,c);if(n.length===0){this.#a.innerHTML=`
				<div class="list__panel" part="panel">
					<p class="list__empty" part="empty">Geen resultaten gevonden.</p>
				</div>
			`,Ut(this.#a);return}const m=document.createElement("div");m.className="list__panel",m.setAttribute("part","panel"),m.style.setProperty("--draad-map-components-list-columns",this.columns);const v=document.createElement("p");v.className="list__count",v.setAttribute("part","count"),v.setAttribute("role","status"),v.setAttribute("aria-live","polite"),v.textContent=s<=a?`${s} ${s!==1?"resultaten":"resultaat"}`:`${h+1}–${c} van ${s} resultaten`,m.appendChild(v);const _=document.createElement("div");_.className="list__grid",_.setAttribute("part","grid");const g=e?.content.querySelector("a[href], [data-href]")??null;if(u.forEach(({feature:w,source:x},S)=>{const P=h+S,C=document.createElement("article");if(C.className="list__card",C.setAttribute("part","card"),C.setAttribute("tabindex","0"),g||C.setAttribute("role","button"),e){const E=e.content.cloneNode(!0);this.#C(E,w),C.appendChild(E)}else{const E=w.properties?.name||w.properties?.naam||w.id||`Feature ${P+1}`,z=document.createElement("h3");z.textContent=String(E),C.appendChild(z)}this.#L(C),C.addEventListener("click",E=>{E.target.closest("a[href]")||(this.dispatchEvent(new CustomEvent("dm-list:item-click",{bubbles:!0,composed:!0,detail:{feature:w,index:P,source:x}})),this.#k(),this.#w(w,x))}),C.addEventListener("keydown",E=>{E.key==="Enter"&&!E.target.closest("a[href]")&&C.click()}),_.appendChild(C)}),m.appendChild(_),l>1){const w=document.createElement("nav");w.className="list__pagination",w.setAttribute("part","pagination"),w.setAttribute("aria-label","Paginering");const x=document.createElement("button");x.type="button",x.className="list__pagination-arrow",x.setAttribute("part","pagination-prev"),x.setAttribute("aria-label",this.prevLabel),x.dataset.dir="prev",this.#c===1&&(x.disabled=!0),x.innerHTML='<svg class="list__pagination-icon" aria-hidden="true" focusable="false"><use href="#icon-chevron-left"/></svg>';const S=document.createElement("div");S.className="list__pagination-pages",S.setAttribute("role","status"),S.setAttribute("aria-live","polite"),S.setAttribute("aria-label",this.pageLabelTemplate.replace("{current}",this.#c).replace("{total}",l)),this.#v(this.#c,l).forEach(C=>{if(C==="..."){const E=document.createElement("span");E.className="list__pagination-ellipsis",E.setAttribute("aria-hidden","true"),E.textContent="…",S.appendChild(E)}else{const E=document.createElement("button");E.type="button",E.className="list__pagination-page",E.dataset.page=C,E.textContent=C,C===this.#c&&(E.classList.add("list__pagination-page--active"),E.setAttribute("aria-current","page")),S.appendChild(E)}});const P=document.createElement("button");P.type="button",P.className="list__pagination-arrow",P.setAttribute("part","pagination-next"),P.setAttribute("aria-label",this.nextLabel),P.dataset.dir="next",this.#c===l&&(P.disabled=!0),P.innerHTML='<svg class="list__pagination-icon" aria-hidden="true" focusable="false"><use href="#icon-chevron-right"/></svg>',w.append(x,S,P),w.addEventListener("click",C=>{const E=C.target.closest("button[data-page]");if(E&&!E.disabled){this.#M(parseInt(E.dataset.page,10));return}const z=C.target.closest("button[data-dir]");!z||z.disabled||this.#M(z.dataset.dir==="next"?this.#c+1:this.#c-1)}),m.appendChild(w)}this.#a.innerHTML="",Ut(this.#a),this.#a.appendChild(m)}#L(e){const n=a=>{const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("aria-hidden","true");const h=document.createElementNS("http://www.w3.org/2000/svg","use");return h.setAttribute("href",`#${a}`),l.appendChild(h),l},s=a=>{const l=a.getAttribute("href");if(!l)return!1;try{return new URL(l,window.location.href).origin!==window.location.origin}catch{return!1}};e.querySelectorAll(".address, address").forEach(a=>a.prepend(n("icon-map-pin"))),e.querySelectorAll(".action, a.button").forEach(a=>{s(a)&&a.prepend(n("icon-external-link"))})}#C(e,n){const s=(a,l)=>{a.style.display=l?"":"none"};e.querySelectorAll("[data-field]").forEach(a=>{const l=this.#P(n,a.getAttribute("data-field")),h=l!=null?String(l):"";a.textContent=h,s(a,h!=="")}),e.querySelectorAll("[data-href]").forEach(a=>{const l=a.getAttribute("data-href"),h=this.#P(n,l);if(h!=null){const c=String(h);try{const u=new URL(c,window.location.origin);au.has(u.protocol)?a.setAttribute("href",c):a.removeAttribute("href")}catch{a.removeAttribute("href")}}else a.removeAttribute("href")}),e.querySelectorAll("[data-src]").forEach(a=>{const l=a.getAttribute("data-src"),h=this.#P(n,l);let c=!1;if(h!=null){const u=String(h);try{const m=new URL(u,window.location.origin);m.protocol==="https:"||m.protocol==="http:"?(a.setAttribute("src",u),c=!0):a.removeAttribute("src")}catch{a.removeAttribute("src")}}else a.removeAttribute("src");s(a,c)}),e.querySelectorAll("[data-chips]").forEach(a=>{const l=a.getAttribute("data-chips"),h=this.#P(n,l);if(h!=null){const c=String(h).split(",").map(u=>u.trim()).filter(Boolean);a.innerHTML="",c.forEach(u=>{const m=document.createElement("span");m.className="chip",m.textContent=u,a.appendChild(m)})}}),e.querySelectorAll("dl.dm-infowindow-data").forEach(a=>{let l=!1;a.querySelectorAll("dd").forEach(h=>{const c=h.style.display==="none"||h.textContent.trim()==="",u=h.previousElementSibling;u&&u.tagName==="DT"&&s(u,!c),c||(l=!0)}),l||s(a,!1)}),e.querySelectorAll(".chips").forEach(a=>{[...a.children].some(h=>h.style.display!=="none"&&h.textContent.trim()!=="")||s(a,!1)})}#P(e,n){if(!n.startsWith("properties.")&&n!=="id"&&n!=="properties")return;const s=n.split(".");let a=e;for(const l of s){if(a==null||ou.has(l)||!Object.prototype.hasOwnProperty.call(a,l))return;a=a[l]}return a}async#w(e,n){if(!this.#s?.map)return;const s=e.geometry;if(!s)return;const a=this.#s.map,h=kn(e)?Me(n?.getAttribute("crs"))||"EPSG:28992":null,c=(u,m)=>{if(h){const[v,_]=Gi([u,m],h);return[_,v]}return[m,u]};if(s.type==="Point"){const[u,m]=s.coordinates;a.setView(c(u,m),Math.max(a.getZoom(),16))}else try{const u=(await Promise.resolve().then(()=>Ia)).default,m=h?{coordsToLatLng:_=>u.latLng(c(_[0],_[1]))}:{},v=u.geoJSON(e,m);a.fitBounds(v.getBounds(),{padding:[50,50]})}catch{const u=this.#x(s);u&&a.setView(c(u[0],u[1]),Math.max(a.getZoom(),16))}}#x(e){let n=e.coordinates;for(;Array.isArray(n)&&Array.isArray(n[0]);)n=n[0];return Array.isArray(n)&&n.length>=2?n:null}#v(e,n){return n<=5?Array.from({length:n},(s,a)=>a+1):e<=3?[1,2,3,"...",n]:e>=n-2?[1,"...",n-3,n-2,n-1,n]:[1,"...",e-1,e,e+1,"...",n]}#M(e){const n=this.perPage,s=this.#E().length,a=Math.max(1,Math.ceil(s/n));this.#c=Math.max(1,Math.min(e,a)),this.#g(),this.#i?.scrollIntoView({block:"start",behavior:"smooth"}),requestAnimationFrame(()=>{const l=this.#a?.querySelector(".list__card");l&&l.focus()})}disconnectedCallback(){this.#u&&(this.closest("dm-map")?.removeEventListener("dm-map:ready",this.#u),this.#u=null),this.#h.forEach((e,n)=>{n.removeEventListener("dm-filter:apply",e)}),this.#h.clear(),this.#d.forEach(({event:e,handler:n},s)=>{s.removeEventListener(e,n)}),this.#d.clear(),this.#i?.parentNode&&this.#i.parentNode.removeChild(this.#i),this.#i=null,this.#a=null,this.#n=[],this.#e.clear(),this.#s=null}}customElements.define("dm-list",lu);const hu=`.icon {
	display: block;
	inline-size: 1em;
	block-size: 1em;
	fill: currentColor;
}

.filter {
	font-family: var(--draad-map-components-filter-font-family, inherit);
	font-size: 0.875rem;
}

/* ─── Toggle button ──────────────────────────────────────────────────────── */

.filter__toggle {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	gap: var(--draad-map-components-button-secondary-gap, 8px);
	padding: var(--draad-map-components-button-secondary-lg-padding, 10px 16px);
	block-size: var(--draad-map-components-button-secondary-lg-block-size, 40px);
	border: var(--draad-map-components-button-secondary-border-width, 1px) solid var(--draad-map-components-button-secondary-color-border, currentColor);
	border-radius: var(--draad-map-components-button-secondary-radius, 6px);
	background: var(--draad-map-components-button-secondary-color-bg, #fff);
	cursor: pointer;
	font-family: var(--draad-map-components-font-family);
	font-size: var(--draad-map-components-button-secondary-lg-font-size, 0.875rem);
	font-weight: var(--draad-map-components-button-secondary-lg-font-weight, 500);
	line-height: var(--draad-map-components-button-secondary-lg-line-height, 1.5);
	color: var(--draad-map-components-button-secondary-color-text, currentColor);
}

@media (prefers-reduced-motion: no-preference) {
	.filter__toggle {
		transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
	}
}

.filter__toggle:hover {
	border-color: var(--draad-map-components-button-secondary-color-border-hover, currentColor);
	color: var(--draad-map-components-button-secondary-color-text-hover, currentColor);
}

.filter__toggle:active {
	border-color: var(--draad-map-components-button-secondary-color-border-active);
	color: var(--draad-map-components-button-secondary-color-text-active);
}

.filter__toggle:focus-visible {
	outline: var(--draad-map-components-button-secondary-focus-ring-width, 2px) var(--draad-map-components-button-secondary-focus-ring-style, dashed) var(--draad-map-components-button-secondary-color-focus-ring, Highlight);
	outline-offset: 2px;
}

.filter__toggle:disabled {
	background: var(--draad-map-components-button-secondary-color-bg-disabled);
	color: var(--draad-map-components-button-secondary-color-text-disabled);
	border-color: var(--draad-map-components-button-secondary-color-bg-disabled);
	cursor: not-allowed;
}

.filter__toggle[aria-expanded='true'] {
	background: var(--draad-map-components-filter-trigger-color-bg-open, transparent);
}

.filter__icon {
	inline-size: var(--draad-map-components-icon-size-xl, 24px);
	block-size: var(--draad-map-components-icon-size-xl, 24px);
	flex-shrink: 0;
}

/* ─── Dialog variant ─────────────────────────────────────────────────────── */

.filter__dialog {
	border: none;
	border-radius: var(--draad-map-components-filter-panel-radius, 8px);
	box-shadow: var(--draad-map-components-filter-panel-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
	padding: 0;
	inline-size: 760px;
	max-inline-size: calc(100vw - 32px);
	max-block-size: 80vh;
	font-family: inherit;
	font-size: inherit;
}

.filter__dialog::backdrop {
	background: var(--draad-map-components-filter-backdrop-color, transparent);
}

/* ─── Header ─────────────────────────────────────────────────────────────── */

.filter__header {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: var(--draad-map-components-filter-header-padding, 16px);
	background: var(--draad-map-components-filter-header-color-bg, #fff);
}

.filter__header-text {
	display: flex;
	flex-direction: column;
	gap: var(--draad-map-components-filter-header-gap, 4px);
}

.filter__header h2 {
	margin: 0;
	font-family: var(--draad-map-components-filter-header-font-family, var(--draad-map-components-heading-font-family, var(--draad-map-components-font-family, inherit)));
	font-size: var(--draad-map-components-filter-header-title-size, 1.125rem);
	font-weight: var(--draad-map-components-filter-header-title-weight, 600);
	line-height: 1.3;
	color: var(--draad-map-components-filter-header-color-title, currentColor);
}

.filter__close {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	padding: 4px;
	margin: -4px -4px 0 8px;
	border: none;
	background: none;
	color: inherit;
	cursor: pointer;
	border-radius: 4px;
}

.filter__close svg {
	inline-size: var(--draad-map-components-icon-size-lg, 20px);
	block-size: var(--draad-map-components-icon-size-lg, 20px);
	fill: currentColor;
}

.filter__close:focus-visible {
	outline: 2px dashed Highlight;
	outline-offset: 2px;
}

.filter__subtitle {
	margin: 0;
	font-size: 0.875rem;
	color: var(--draad-map-components-filter-header-color-subtitle, currentColor);
}

/* ─── Content ────────────────────────────────────────────────────────────── */

.filter__content {
	padding: var(--draad-map-components-filter-content-padding, 0 16px 16px);
	max-block-size: 60vh;
	overflow-y: auto;
}

.filter__empty,
.filter__loading {
	text-align: center;
	color: var(--draad-map-components-filter-empty-color-text, currentColor);
	padding: 24px;
	font-style: var(--draad-map-components-filter-empty-font-style, italic);
}

/* ─── Sections ───────────────────────────────────────────────────────────── */

.filter__section {
	margin-block-end: var(--draad-map-components-filter-section-gap, 16px);
}

.filter__section:last-child {
	margin-block-end: 0;
}

.filter__section-title {
	display: block;
	margin: 0 0 0.5em;
	font-family: var(--draad-map-components-filter-section-font-family, var(--draad-map-components-heading-font-family, var(--draad-map-components-font-family, inherit)));
	font-size: var(--draad-map-components-filter-section-title-size, 1rem);
	font-weight: var(--draad-map-components-filter-section-title-weight, 600);
	line-height: 1.3;
	color: var(--draad-map-components-filter-section-color-title, currentColor);
}

.filter__single {
	margin: 0;
	color: var(--draad-map-components-filter-empty-color-text, currentColor);
	font-size: 0.875rem;
}

/* ─── Collapsible section toggles ────────────────────────────────────────── */

.filter__section-toggle {
	display: flex;
	align-items: center;
	justify-content: space-between;
	inline-size: 100%;
	padding: var(--draad-map-components-filter-section-title-padding, var(--draad-map-components-filter-section-toggle-padding, 8px 0));
	border: none;
	background: transparent;
	cursor: pointer;
	font-family: var(--draad-map-components-filter-section-font-family, var(--draad-map-components-heading-font-family, var(--draad-map-components-font-family, inherit)));
	font-size: var(--draad-map-components-filter-section-title-size, 1rem);
	font-weight: var(--draad-map-components-filter-section-title-weight, 600);
	line-height: var(--draad-map-components-filter-section-title-line-height, 1.3);
	color: var(--draad-map-components-filter-section-color-title, currentColor);
	text-align: start;
	gap: var(--draad-map-components-filter-section-title-gap, 8px);
}

@media (prefers-reduced-motion: no-preference) {
	.filter__section-toggle {
		transition: color 0.2s ease;
	}
}

.filter__section-toggle:hover {
	color: var(--draad-map-components-filter-section-color-title-hover, currentColor);
}

.filter__section-toggle:focus-visible {
	outline: 2px solid var(--draad-map-components-filter-section-color-focus, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

.filter__section-chevron {
	flex-shrink: 0;
	inline-size: 12px;
	block-size: 12px;
	color: var(--draad-map-components-filter-section-color-chevron, currentColor);
	transform: rotate(0deg);
}

@media (prefers-reduced-motion: no-preference) {
	.filter__section-chevron {
		transition: transform 0.2s ease;
	}
}

.filter__section-toggle[aria-expanded="true"] .filter__section-chevron {
	transform: rotate(180deg);
}

.filter__section-content[hidden] {
	display: none;
}

/* ─── Fieldset / checkbox grid ───────────────────────────────────────────── */

.filter__fieldset {
	border: none;
	margin: 0;
	padding: var(--draad-map-components-filter-fieldset-padding, 8px 0);
	display: flex;
	flex-wrap: wrap;
	gap: var(--draad-map-components-filter-fieldset-gap, 16px);
}

.visually-hidden {
	position: absolute;
	inline-size: 1px;
	block-size: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}

.filter__checkbox-label {
	display: flex;
	align-items: flex-start;
	gap: var(--draad-map-components-filter-checkbox-label-gap, 8px);
	cursor: pointer;
	line-height: var(--draad-map-components-filter-checkbox-line-height, 1.5);
}

.filter__checkbox-label:has(.filter__checkbox:focus-visible) {
	outline: 2px solid var(--draad-map-components-filter-checkbox-color-focus, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
	border-radius: 2px;
}

/* Custom checkbox visual.
   Centred on the FIRST text line, not the whole label — hence flex-start plus a
   computed offset rather than align-items:center, which would drift on wrap.
   The offset is derived from the type tokens so it survives a theme scaling the
   font up; a fixed nudge only looks right at the default size. */
.filter__checkbox-label::before {
	content: '';
	flex-shrink: 0;
	margin-block-start: calc(
		(
			var(--draad-map-components-filter-checkbox-font-size, 0.875rem) *
			var(--draad-map-components-filter-checkbox-line-height, 1.5)
			- var(--draad-map-components-filter-checkbox-size, 18px)
		) / 2
	);
	inline-size: var(--draad-map-components-filter-checkbox-size, 18px);
	block-size: var(--draad-map-components-filter-checkbox-size, 18px);
	border: 1px solid var(--draad-map-components-filter-checkbox-color-border, currentColor);
	border-radius: var(--draad-map-components-filter-checkbox-radius, 6px);
	background: var(--draad-map-components-filter-checkbox-color-bg, transparent);
	box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__checkbox-label::before {
		transition: background 0.15s ease, border-color 0.15s ease;
	}
}

/* icon-check data-URI exception: CSS ::before pseudo-elements cannot reference SVG sprite <use> fragments */
.filter__checkbox-label:has(.filter__checkbox:checked)::before {
	background-color: var(--draad-map-components-filter-checkbox-color-checked, var(--draad-map-components-color-primary, #0a0a0a));
	border-color: var(--draad-map-components-filter-checkbox-color-checked, var(--draad-map-components-color-primary, #0a0a0a));
	background-image: var(--draad-map-components-checkbox-check-icon, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fafafa'%3E%3Cpath d='M20.6644 5.2526C21.0772 5.61952 21.1143 6.25159 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33565C19.6195 4.92286 20.2516 4.88568 20.6644 5.2526Z'/%3E%3C/svg%3E"));
	background-repeat: no-repeat;
	background-position: center;
	background-size: 70%;
}

.filter__checkbox-icon {
	display: none;
}

.filter__checkbox-icon svg {
	inline-size: 100%;
	block-size: 100%;
}

.filter__checkbox {
	position: absolute;
	inline-size: 1px;
	block-size: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
}

.filter__checkbox-text {
	font-size: var(--draad-map-components-filter-checkbox-font-size, 0.875rem);
	color: var(--draad-map-components-filter-checkbox-color-text, currentColor);
	font-weight: var(--draad-map-components-filter-checkbox-font-weight, 400);
	/* Same token the box offset above is computed from — they must not drift. */
	line-height: var(--draad-map-components-filter-checkbox-line-height, 1.5);
}

/* ─── Custom Select Component ────────────────────────────────────────────── */

.filter__custom-select {
	position: relative;
	inline-size: 100%;
}

.filter__custom-select-display {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.375rem;
	padding: 10px 2.5rem 10px 12px;
	min-block-size: 51px;
	border: 1px solid var(--draad-map-components-filter-checkbox-color-border, #e5e5e5);
	border-radius: 0;
	background: var(--draad-map-components-filter-checkbox-label-color-bg, #fff);
	cursor: pointer;
	position: relative;
	box-sizing: border-box;
}

.filter__custom-select:hover .filter__custom-select-display {
	border-color: var(--draad-map-components-filter-checkbox-color-border, #e5e5e5);
}

.filter__custom-select:focus-visible .filter__custom-select-display,
.filter__custom-select[aria-expanded="true"] .filter__custom-select-display {
	outline: 2px solid var(--draad-map-components-filter-checkbox-color-focus, var(--draad-map-components-color-primary, Highlight));
	outline-offset: -2px;
	border-color: var(--draad-map-components-filter-checkbox-color-checked, var(--draad-map-components-color-primary, #0a0a0a));
}

.filter__custom-select-placeholder {
	font-size: 0.9375rem;
	color: var(--draad-map-components-filter-empty-color-text, currentColor);
}

.filter__custom-select-arrow {
	position: absolute;
	inset-inline-end: 0.75rem;
	inset-block-start: 50%;
	transform: translateY(-50%);
	inline-size: 12px;
	block-size: 12px;
	color: var(--draad-map-components-filter-section-color-chevron, currentColor);
	pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__custom-select-arrow {
		transition: transform 0.2s ease;
	}
}

.filter__custom-select[aria-expanded="true"] .filter__custom-select-arrow {
	transform: translateY(-50%) rotate(180deg);
}

/* ─── Chips ──────────────────────────────────────────────────────────────── */

.filter__chip {
	display: inline-flex;
	align-items: center;
	gap: var(--draad-map-components-filter-chip-gap, 0.25rem);
	padding: var(--draad-map-components-filter-chip-padding, 0.25rem 0.25rem 0.25rem 0.5rem);
	background: var(--draad-map-components-filter-chip-bg, #f5f5f5);
	color: var(--draad-map-components-filter-chip-color, currentColor);
	border-radius: var(--draad-map-components-filter-chip-radius, 9999px);
	font-size: var(--draad-map-components-filter-chip-font-size, 0.75rem);
	line-height: 1;
}

.filter__chip-text {
	max-inline-size: var(--draad-map-components-filter-chip-text-max-width, 200px);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	line-height: 1;
	display: flex;
	align-items: center;
}

.filter__chip-remove {
	display: flex;
	align-items: center;
	justify-content: center;
	inline-size: var(--draad-map-components-filter-chip-remove-size, 1rem);
	block-size: var(--draad-map-components-filter-chip-remove-size, 1rem);
	border: none;
	border-radius: 50%;
	background: var(--draad-map-components-filter-chip-remove-bg, #e5e5e5);
	color: var(--draad-map-components-filter-chip-remove-color, currentColor);
	cursor: pointer;
	padding: 0;
	flex-shrink: 0;
}

.filter__chip-remove svg {
	display: block;
	width: var(--draad-map-components-filter-chip-remove-icon-size, 0.625rem);
	height: var(--draad-map-components-filter-chip-remove-icon-size, 0.625rem);
}

@media (prefers-reduced-motion: no-preference) {
	.filter__chip-remove {
		transition: background 0.2s ease;
	}
}

.filter__chip-remove:hover {
	background: var(--draad-map-components-filter-chip-remove-bg-hover, #d4d4d4);
}

.filter__chip-remove:focus-visible {
	outline: 2px solid var(--draad-map-components-filter-chip-remove-focus, Highlight);
	outline-offset: 1px;
}

/* ─── Dropdown menu ──────────────────────────────────────────────────────── */

.filter__custom-select-dropdown {
	/* Fixed so the listbox escapes the filter panel's overflow:auto clipping;
	   JS (#repositionCustomSelect) sets top/left/width in viewport coords. */
	position: fixed;
	inset-block-start: calc(100% + 4px);
	inset-inline-start: 0;
	inline-size: 100%;
	max-block-size: 240px;
	overflow-y: auto;
	background: var(--draad-map-components-filter-checkbox-label-color-bg, #fff);
	border: 1px solid var(--draad-map-components-filter-checkbox-color-border, #e5e5e5);
	border-radius: 0;
	box-shadow: var(--draad-map-components-shadow-dropdown, 0 4px 12px rgba(0, 0, 0, 0.15));
	z-index: 10;
	display: none;
	scrollbar-width: thin;
	scrollbar-color: var(--draad-map-components-filter-scrollbar-thumb, #d4d4d4) var(--draad-map-components-filter-scrollbar-bg, #e5e5e5);
}

.filter__custom-select[aria-expanded="true"] .filter__custom-select-dropdown {
	display: block;
}

.filter__option {
	padding: var(--draad-map-components-filter-option-padding, 8px 12px);
	cursor: pointer;
	font-size: 0.9375rem;
	color: var(--draad-map-components-filter-checkbox-color-text, currentColor);
}

@media (prefers-reduced-motion: no-preference) {
	.filter__option {
		transition: background 0.15s ease;
	}
}

.filter__option:hover,
.filter__option:focus {
	background: var(--draad-map-components-filter-checkbox-label-color-bg-hover, #f5f5f5);
	outline: none;
}

.filter__option-empty {
	padding: 0.625rem 0.75rem;
	font-size: 0.875rem;
	color: var(--draad-map-components-filter-empty-color-text, currentColor);
	font-style: var(--draad-map-components-filter-empty-font-style, italic);
	text-align: center;
}

/* ─── Dropdown scrollbar styling ─────────────────────────────────────────── */

.filter__custom-select-dropdown::-webkit-scrollbar {
	inline-size: 8px;
}

.filter__custom-select-dropdown::-webkit-scrollbar-track {
	background: var(--draad-map-components-filter-scrollbar-bg, #e5e5e5);
	border-radius: var(--draad-map-components-filter-scrollbar-radius, 4px);
}

.filter__custom-select-dropdown::-webkit-scrollbar-thumb {
	background: var(--draad-map-components-filter-scrollbar-thumb, #d4d4d4);
	border-radius: var(--draad-map-components-filter-scrollbar-radius, 4px);
}

.filter__custom-select-dropdown::-webkit-scrollbar-thumb:hover {
	background: var(--draad-map-components-filter-scrollbar-thumb-hover, #a3a3a3);
}

/* ─── Range slider ───────────────────────────────────────────────────────── */

.filter__range {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.filter__range-label {
	display: flex;
	flex-direction: column;
	gap: 8px;
	cursor: pointer;
}

.filter__range-label span {
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--draad-map-components-filter-empty-color-text, currentColor);
}

.filter__range-output {
	font-weight: 600;
	color: var(--draad-map-components-filter-toggle-color-border, var(--draad-map-components-color-primary, currentColor));
}

.filter__range-input {
	inline-size: 100%;
	block-size: 6px;
	-webkit-appearance: none;
	appearance: none;
	background: var(--draad-map-components-filter-range-track-color, #e5e5e5);
	border-radius: 3px;
	outline: none;
	cursor: pointer;
}

.filter__range-input::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	inline-size: 18px;
	block-size: 18px;
	background: var(--draad-map-components-filter-toggle-color-border, var(--draad-map-components-color-primary, #0a0a0a));
	border-radius: 50%;
	cursor: pointer;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__range-input::-webkit-slider-thumb {
		transition: background 0.2s ease;
	}
}

.filter__range-input::-webkit-slider-thumb:hover {
	background: var(--draad-map-components-filter-toggle-color-border-hover, var(--draad-map-components-color-primary-hover, #171717));
}

.filter__range-input::-moz-range-thumb {
	inline-size: 18px;
	block-size: 18px;
	background: var(--draad-map-components-filter-toggle-color-border, var(--draad-map-components-color-primary, #0a0a0a));
	border: none;
	border-radius: 50%;
	cursor: pointer;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__range-input::-moz-range-thumb {
		transition: background 0.2s ease;
	}
}

.filter__range-input::-moz-range-thumb:hover {
	background: var(--draad-map-components-filter-toggle-color-border-hover, var(--draad-map-components-color-primary-hover, #171717));
}

.filter__range-input:focus-visible {
	outline: 2px solid var(--draad-map-components-filter-toggle-color-border, var(--draad-map-components-color-primary, Highlight));
	outline-offset: 2px;
}

/* ─── Action buttons ─────────────────────────────────────────────────────── */

.filter__actions {
	display: none;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	gap: var(--draad-map-components-filter-actions-gap, 12px);
	padding: var(--draad-map-components-filter-actions-padding, 12px 16px);
	border-block-start: 1px solid var(--draad-map-components-filter-actions-color-border, #e5e5e5);
	/* The dropdown panel scrolls as a whole, so stick the row to its bottom edge
	   instead of letting it scroll out of reach on a long filter list. */
	position: sticky;
	inset-block-end: 0;
	background: var(--draad-map-components-filter-panel-color-bg, #fff);
}

.filter:not(.filter--auto-submit) .filter__actions {
	display: flex;
}

.filter__apply {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	gap: var(--draad-map-components-button-primary-gap, 8px);
	padding: var(--draad-map-components-button-primary-lg-padding, 10px 16px);
	block-size: var(--draad-map-components-button-primary-lg-block-size, 40px);
	border: none;
	border-radius: var(--draad-map-components-button-primary-radius, 6px);
	background: var(--draad-map-components-button-primary-color-bg, #0a0a0a);
	color: var(--draad-map-components-button-primary-color-text, #fafafa);
	font-family: var(--draad-map-components-font-family);
	font-size: var(--draad-map-components-button-primary-lg-font-size, 0.875rem);
	font-weight: var(--draad-map-components-button-primary-lg-font-weight, 500);
	line-height: var(--draad-map-components-button-primary-lg-line-height, 1.5);
	cursor: pointer;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__apply {
		transition: background 0.2s ease;
	}
}

.filter__apply:hover {
	background: var(--draad-map-components-button-primary-color-bg-hover, #171717);
}

.filter__apply:active {
	background: var(--draad-map-components-button-primary-color-bg-active);
}

.filter__apply:focus-visible {
	outline: var(--draad-map-components-button-primary-focus-ring-width, 2px) var(--draad-map-components-button-primary-focus-ring-style, dashed) var(--draad-map-components-button-primary-color-focus-ring, Highlight);
	outline-offset: 2px;
}

.filter__apply:disabled {
	background: var(--draad-map-components-button-primary-color-bg-disabled);
	color: var(--draad-map-components-button-primary-color-text-disabled);
	cursor: not-allowed;
}

.filter__reset {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	gap: var(--draad-map-components-button-secondary-gap, 8px);
	padding: var(--draad-map-components-button-secondary-lg-padding, 10px 16px);
	block-size: var(--draad-map-components-button-secondary-lg-block-size, 40px);
	border: var(--draad-map-components-button-secondary-border-width, 1px) solid var(--draad-map-components-button-secondary-color-border, currentColor);
	border-radius: var(--draad-map-components-button-secondary-radius, 6px);
	background: var(--draad-map-components-button-secondary-color-bg, #fff);
	color: var(--draad-map-components-button-secondary-color-text, currentColor);
	font-family: var(--draad-map-components-font-family);
	font-size: var(--draad-map-components-button-secondary-lg-font-size, 0.875rem);
	font-weight: var(--draad-map-components-button-secondary-lg-font-weight, 500);
	line-height: var(--draad-map-components-button-secondary-lg-line-height, 1.5);
	cursor: pointer;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__reset {
		transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
	}
}

.filter__reset:hover {
	border-color: var(--draad-map-components-button-secondary-color-border-hover, currentColor);
	color: var(--draad-map-components-button-secondary-color-text-hover, currentColor);
}

.filter__reset:active {
	border-color: var(--draad-map-components-button-secondary-color-border-active);
	color: var(--draad-map-components-button-secondary-color-text-active);
}

.filter__reset:focus-visible {
	outline: var(--draad-map-components-button-secondary-focus-ring-width, 2px) var(--draad-map-components-button-secondary-focus-ring-style, dashed) var(--draad-map-components-button-secondary-color-focus-ring, Highlight);
	outline-offset: 2px;
}

/* ─── Content scrollbar ──────────────────────────────────────────────────── */

.filter__content {
	scrollbar-width: thin;
	scrollbar-color: var(--draad-map-components-filter-scrollbar-thumb, #d4d4d4) var(--draad-map-components-filter-scrollbar-bg, #e5e5e5);
}

.filter__content::-webkit-scrollbar {
	inline-size: 8px;
}

.filter__content::-webkit-scrollbar-track {
	background: var(--draad-map-components-filter-scrollbar-bg, #e5e5e5);
	border-radius: var(--draad-map-components-filter-scrollbar-radius, 4px);
}

.filter__content::-webkit-scrollbar-thumb {
	background: var(--draad-map-components-filter-scrollbar-thumb, #d4d4d4);
	border-radius: var(--draad-map-components-filter-scrollbar-radius, 4px);
}

.filter__content::-webkit-scrollbar-thumb:hover {
	background: var(--draad-map-components-filter-scrollbar-thumb-hover, #a3a3a3);
}

/* ─── Shared panel base (sidebar & dropdown) ─────────────────────────────── */

.filter__panel {
	display: none;
	flex-direction: column;
	font-family: var(--draad-map-components-filter-font-family, inherit);
	font-size: inherit;
}

.filter__panel--open {
	display: flex;
}

/* ─── Sidebar variant ────────────────────────────────────────────────────── */

.filter--sidebar {
	position: static;
}

.filter__panel--sidebar {
	position: absolute;
	inset-block-start: var(--draad-map-components-filter-sidebar-inset-block-start, 0);
	inset-inline-end: 0;
	block-size: var(--draad-map-components-filter-sidebar-height, 100%);
	inline-size: var(--draad-map-components-filter-sidebar-width, 400px);
	max-inline-size: calc(100vw - 32px);
	z-index: var(--draad-map-components-filter-sidebar-z-index, 1100);
	overflow-y: auto;
	background: var(--draad-map-components-filter-sidebar-color-bg, var(--draad-map-components-filter-panel-color-bg, #fff));
	color: var(--draad-map-components-filter-sidebar-color-text, inherit);
	border-radius: var(--draad-map-components-filter-panel-radius, 0);
	box-shadow: var(--draad-map-components-filter-panel-shadow, -4px 0 24px rgba(0, 0, 0, 0.15));
	transform: translateX(100%);
	scrollbar-width: thin;
	scrollbar-color: var(--draad-map-components-filter-scrollbar-thumb, #d4d4d4) transparent;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__panel--sidebar {
		transition: transform 0.3s ease;
	}
}

.filter__panel--sidebar.filter__panel--open {
	transform: translateX(0);
}

.filter__panel--sidebar .filter__content {
	max-block-size: none;
	flex: 1;
}

.filter__overlay {
	display: var(--draad-map-components-filter-overlay-display, block);
	position: absolute;
	inset: 0;
	z-index: calc(var(--draad-map-components-filter-sidebar-z-index, 1100) - 1);
	background: transparent;
	pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
	.filter__overlay {
		transition: background 0.3s ease;
	}
}

.filter__overlay--visible {
	background: var(--draad-map-components-filter-backdrop-color, transparent);
	pointer-events: auto;
}

/* ─── Dropdown variant ───────────────────────────────────────────────────── */

.filter--dropdown {
	position: relative;
}

.filter__panel--dropdown {
	position: fixed;
	inline-size: var(--draad-map-components-filter-dropdown-width, 400px);
	max-inline-size: calc(100vw - 32px);
	max-block-size: var(--draad-map-components-filter-dropdown-max-height, 70vh);
	overflow-y: auto;
	z-index: var(--draad-map-components-filter-dropdown-z-index, 10000);
	transition: none;
	background: var(--draad-map-components-filter-panel-color-bg, #fff);
	border: 1px solid var(--draad-map-components-filter-checkbox-color-border, #e5e5e5);
	border-radius: var(--draad-map-components-filter-panel-radius, 8px);
	box-shadow: var(--draad-map-components-filter-panel-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
}

.filter__panel--dropdown .filter__content {
	max-block-size: none;
}
`;class cu extends HTMLElement{#t;#n=null;#e=[];#i={};#a={};#l=new Map;#r=new WeakMap;#s=new Map;#o=new Map;#h;#d=!1;#u=!1;#c=null;#f=null;#p=null;#_=!1;#b=null;constructor(){super(),this.#t=this.attachShadow({mode:"open"}),this.#h=this.#A()}#A(){const e=new CSSStyleSheet;e.replaceSync(hu),this.#t.adoptedStyleSheets=[e]}get#m(){const e=this.getAttribute("variant");return e==="dropdown"||e==="sidebar"?e:"dialog"}get#y(){return this.getAttribute("submit")==="auto"}get#k(){return this.getAttribute("dismiss")==="close"?"close":"actions"}get#E(){return this.hasAttribute("collapsible")}get#g(){return this.getAttribute("bool-label")||"Ja"}connectedCallback(){const e=this.closest("dm-map");e&&(e.map?this.#L(e):e.addEventListener("dm-map:ready",()=>{this.#L(e)},{once:!0}))}async#L(e){if(this.#n=e,await this.#h,this.#C(),this.#P(),this.#U(),Ut(this.#t),this.#Y(),this.#I(),this.#O(),this.hasAttribute("open")&&this.#m==="sidebar"){const s=this.#t.querySelector(".filter__panel--sidebar"),a=this.#t.querySelector(".filter__toggle");s?.classList.add("filter__panel--open"),a?.setAttribute("aria-expanded","true"),this.#u=!0}this.#it()&&(this.#d=!0,this.#a=JSON.parse(JSON.stringify(this.#i))),this.#b=()=>this.#it(!0),window.addEventListener("popstate",this.#b)}#C(){const e=["dm-geojson[filter-property], dm-geojson[filter-properties]","dm-wfs[filter-property], dm-wfs[filter-properties]","dm-layer[filter-property], dm-layer[filter-properties]"];this.#e=[],e.forEach(n=>{this.#n.querySelectorAll(n).forEach(s=>{const a=s.getAttribute("filter-properties"),l=s.getAttribute("filter-labels"),h=s.getAttribute("filter-property"),c=s.getAttribute("filter-label"),u=s.getAttribute("filter-types"),m=s.getAttribute("filter-collapsed"),v=s.getAttribute("filter-bool-labels");let _=[],g=[],w=[],x=[],S=[];if(a){for(_=a.split(",").map(E=>E.trim()).filter(Boolean),l&&(g=l.split(",").map(E=>E.trim()).filter(Boolean)),v&&(S=v.split(",").map(E=>E.trim())),u&&(w=u.split(",").map(E=>E.trim()).filter(Boolean)),m&&(x=m.split(",").map(E=>E.trim()).filter(Boolean));g.length<_.length;)g.push(_[g.length]);for(;w.length<_.length;)w.push("auto");for(;x.length<_.length;)x.push("false");for(;S.length<_.length;)S.push("")}else h&&(_=[h],g=[c||h],w=[u||"auto"],x=[m||"false"],S=[v||""]);if(_.length===0)return;const P=s.id||`filter-source-${this.#e.length}`,C=s.getAttribute("filter-key");if(_.forEach((E,z)=>{this.#e.push({element:s,label:g[z],property:E,groupKey:C||E,type:s.tagName.toLowerCase(),id:P,filterType:w[z]||"auto",collapsed:x[z]==="true",boolLabel:S[z]||""})}),!this.#r.has(s))if(this.#r.set(s,!0),s.data)_.forEach(E=>{this.#x(s,E)});else{const E=s.tagName==="DM-GEOJSON"?"dm-geojson:ready":s.tagName==="DM-WFS"?"dm-wfs:ready":"dm-layer:ready";let z=!1;s.addEventListener(E,()=>{z||(z=!0,_.forEach(R=>{this.#x(s,R)}),this.#P(),this.#I(),this.#O())},{once:!0}),s.data&&!z&&(z=!0,_.forEach(R=>{this.#x(s,R)}))}})})}#P(){this.#o=new Map,this.#e.forEach(e=>{this.#o.has(e.groupKey)||this.#o.set(e.groupKey,{label:e.label,filterType:e.filterType,collapsed:e.collapsed,boolLabel:e.boolLabel,sources:[]});const n=this.#o.get(e.groupKey);n.sources.find(a=>a.element===e.element&&a.property===e.property)||n.sources.push({element:e.element,id:e.id,property:e.property})})}#w(e,n){const s=new Set;if(n.sources.forEach(({id:l,property:h})=>{const c=`${l}:${h}`,u=this.#l.get(c);u&&u.values.forEach(m=>s.add(m))}),s.size===0)return null;const a=Array.from(s).sort((l,h)=>typeof l=="number"&&typeof h=="number"?l-h:String(l).localeCompare(String(h)));return{values:a,valueType:this.#R(a)}}#x(e,n){const s=this.#v(e,n),a=this.#R(s),l=this.#e.find(c=>c.element===e&&c.property===n);if(!l)return;const h=`${l.id}:${n}`;this.#l.set(h,{values:s,valueType:a}),this.#d&&Object.keys(this.#i).length>0&&this.#G(),this.#K()&&(this.#I(),this.#O())}#v(e,n){if(!e.data?.features)return[];const s=new Set;return e.data.features.forEach(a=>{const l=a.properties?.[n];if(l!=null){const h=String(l);h.includes(",")?h.split(",").forEach(c=>{const u=c.trim();u&&s.add(u)}):s.add(l)}}),Array.from(s).sort((a,l)=>typeof a=="number"&&typeof l=="number"?a-l:String(a).localeCompare(String(l)))}#M(e,n){const s=new Map;return n.sources.forEach(({element:a,property:l})=>{a.data?.features&&a.data.features.forEach(h=>{const c=h.properties?.[l];if(c==null)return;const u=String(c);(u.includes(",")?u.split(",").map(v=>v.trim()).filter(Boolean):[u]).forEach(v=>{s.set(v,(s.get(v)||0)+1)})})}),s}#R(e){if(e.length===0)return{isNumeric:!1};if(e.length===1)return{isNumeric:!1,single:!0};if(e.every(s=>typeof s=="number"?!0:typeof s=="string"?!isNaN(Number(s))&&s.trim()!=="":!1)){const s=e.map(a=>Number(a));return{isNumeric:!0,min:Math.min(...s),max:Math.max(...s)}}return{isNumeric:!1}}#B(e,n){const s=this.#o.get(e)?.filterType;return s&&s!=="auto"?s==="range"&&!n.valueType.isNumeric?this.#z(n):s:this.#z(n)}#z({values:e,valueType:n}){return n.isNumeric&&!n.single?"range":e.length<=20?"checkbox":"dropdown"}#U(){const e=this.#m;e==="dropdown"?this.#J():e==="sidebar"?this.#D():this.#X()}#q(){return`
			<button
				part="toggle"
				class="filter__toggle"
				data-action="toggle-panel"
				type="button"
				aria-haspopup="${this.#m==="dialog"?"dialog":"true"}"
				aria-expanded="false"
				aria-controls="filter-panel"
				aria-label="Filters openen"
			>
				<svg class="filter__icon" aria-hidden="true"><use href="#icon-filter"/></svg>
				<span class="filter__text">Filter</span>
			</button>
		`}#V(){const e=this.#y?" filter--auto-submit":"",n=this.getAttribute("label")||"Filters";return`
			<div part="header" class="filter__header">
				<div class="filter__header-text">
					<h2>${this.#T(n)}</h2>
					<slot name="header"></slot>
				</div>
				${this.#k==="close"?`
					<button type="button" part="close" class="filter__close" aria-label="Filters sluiten">
						<svg aria-hidden="true"><use href="#icon-close"/></svg>
					</button>
				`:""}
			</div>

			<div part="content" class="filter__content${e}">
				<!-- Content will be built dynamically -->
			</div>

			<div part="actions" class="filter__actions${e}">
				<button type="button" part="reset" class="filter__reset">Filters wissen</button>
				<button type="button" part="apply" class="filter__apply">Toepassen</button>
			</div>
		`}#X(){const e=this.getAttribute("label")||"Filters",n=this.#y?" filter--auto-submit":"";this.#t.innerHTML=`
			<div part="root" class="filter filter--dialog${n}">
				${this.#q()}

				<dialog id="filter-panel" part="dialog" class="filter__dialog" role="dialog" aria-modal="true" aria-label="${this.#S(e)}">
					${this.#V()}
				</dialog>

				<div role="status" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
			</div>
		`}#J(){const e=this.getAttribute("label")||"Filters",n=this.#y?" filter--auto-submit":"";this.#t.innerHTML=`
			<div part="root" class="filter filter--dropdown${n}">
				${this.#q()}

				<div id="filter-panel" part="dropdown" class="filter__panel filter__panel--dropdown" role="region" aria-label="${this.#S(e)}">
					${this.#V()}
				</div>

				<div role="status" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
			</div>
		`}#D(){const e=this.getAttribute("label")||"Filters",n=this.#y?" filter--auto-submit":"";this.#t.innerHTML=`
			<div part="root" class="filter filter--sidebar${n}">
				${this.#q()}

				<div class="filter__overlay" part="overlay" aria-hidden="true"></div>

				<div id="filter-panel" part="sidebar" class="filter__panel filter__panel--sidebar" role="region" aria-label="${this.#S(e)}">
					${this.#V()}
				</div>

				<div role="status" aria-live="polite" aria-atomic="true" class="visually-hidden"></div>
			</div>
		`}#I(){if(!this.#_){this.#_=!0;try{const e=this.#t.querySelector(".filter__content");if(!e)return;if(this.#o.size===0){e.innerHTML='<p class="filter__empty">Geen filterbare gegevensbronnen gevonden.</p>';return}const n=[];this.#o.forEach((s,a)=>{let l=this.#w(a,s);if(l||(s.sources.forEach(({element:E,property:z})=>{E.data&&this.#x(E,z)}),l=this.#w(a,s)),!l||l.values.length===0){n.push(`
						<div class="filter__section" part="section" data-property="${this.#S(a)}">
							<h3 class="filter__section-title" part="section-title">${this.#T(s.label)}</h3>
							<p class="filter__loading">Loading data...</p>
						</div>
					`);return}const{values:h,valueType:c}=l,u=this.#B(a,l),m=s.collapsed,v=m?"false":"true",_=m?" hidden":"";if(u==="bool"){const E=this.#i[a]?.[0]==="1"?" checked":"",z=s.boolLabel||this.#g,R=this.#T(z),F=`
						<label class="filter__checkbox-label">
							<input
								type="checkbox"
								class="filter__checkbox"
								value="1"
								aria-label="${this.#T(`${s.label}: ${z}`)}"
								${E}
							>
							<span class="filter__checkbox-text">${R}</span>
						</label>`;n.push(`
						<div class="filter__section filter__section--bool" part="section" data-property="${this.#S(a)}">
							${this.#F(s.label,a,v,_,F)}
						</div>
					`);return}if(u==="single"||c.single){n.push(`
						<div class="filter__section" part="section" data-property="${this.#S(a)}">
							${this.#F(s.label,a,v,_,`
								<p class="filter__single">Value: ${this.#T(String(h[0]))}</p>
							`)}
						</div>
					`);return}if(u==="range"){const E=this.#i[a]?.min??c.min,z=this.#i[a]?.max??c.max,R=`
						<div class="filter__range">
							<label class="filter__range-label">
								<span>Min: <output class="filter__range-output">${E}</output></span>
								<input
									type="range"
									class="filter__range-input"
									data-bound="min"
									min="${c.min}"
									max="${c.max}"
									value="${E}"
									step="${this.#nt(c.min,c.max)}"
									aria-label="${this.#S(s.label)} minimum value"
								>
							</label>
							<label class="filter__range-label">
								<span>Max: <output class="filter__range-output">${z}</output></span>
								<input
									type="range"
									class="filter__range-input"
									data-bound="max"
									min="${c.min}"
									max="${c.max}"
									value="${z}"
									step="${this.#nt(c.min,c.max)}"
									aria-label="${this.#S(s.label)} maximum value"
								>
							</label>
						</div>`;n.push(`
						<div class="filter__section" part="section" data-property="${this.#S(a)}">
							${this.#F(s.label,a,v,_,R)}
						</div>
					`);return}if(u==="checkbox"){const E=s.sources.reduce((F,{element:J})=>F||this.#ct(J),null),z=this.#M(a,s),R=h.map(F=>{const J=this.#at(a,F)?"checked":"",ot=this.#S(String(F)),et=this.#T(String(F)),St=z.get(String(F))||0,Q=St>0?` (${St})`:"",ht=E?.[F]?this.#dt(E[F]):this.#W();return`
							<label class="filter__checkbox-label">
								<input
									type="checkbox"
									class="filter__checkbox"
									value="${ot}"
									aria-label="${et}${Q}"
									${J}
								>
								<span class="filter__checkbox-text">${et}${Q}</span>
							</label>
						`}).join(""),j=`
						<fieldset class="filter__fieldset">
							<legend class="visually-hidden">${this.#T(s.label)}</legend>
							${R}
						</fieldset>`;n.push(`
						<div class="filter__section" part="section" data-property="${this.#S(a)}">
							${this.#F(s.label,a,v,_,j)}
						</div>
					`);return}const g=this.#i[a]||[],w=g.map(E=>{const z=this.#S(String(E)),R=this.#T(String(E));return`
						<span class="filter__chip" part="chip" data-value="${z}">
							<span class="filter__chip-text">${R}</span>
							<button type="button" class="filter__chip-remove" aria-label="Verwijder ${R}" tabindex="-1">
								<svg aria-hidden="true"><use href="#icon-close"/></svg>
							</button>
						</span>
					`}).join(""),x=h.filter(E=>!g.includes(String(E))).map(E=>{const z=this.#S(String(E)),R=this.#T(String(E));return`
							<div class="filter__option" data-value="${z}" role="option" tabindex="0">
								${R}
							</div>
						`}).join(""),S=`filter-select-${a}`,P=g.length===0?"Selecteer waarden...":"",C=`
					<div class="filter__custom-select" part="select" id="${S}" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-label="${this.#S(s.label)}" tabindex="0">
						<div class="filter__custom-select-display">
							${w}
							${g.length===0?`<span class="filter__custom-select-placeholder">${P}</span>`:""}
							<svg class="filter__custom-select-arrow" aria-hidden="true"><use href="#icon-chevron-down"/></svg>
						</div>
						<div class="filter__custom-select-dropdown" role="listbox">
							${x||'<div class="filter__option-empty">Alle waarden geselecteerd</div>'}
						</div>
					</div>`;n.push(`
					<div class="filter__section" part="section" data-property="${this.#S(a)}">
						${this.#F(s.label,a,v,_,C)}
					</div>
				`)}),e.innerHTML=n.join("")}finally{this.#_=!1}}}#F(e,n,s,a,l){if(this.#E){const h=`filter-section-${this.#S(n)}`;return`
				<button type="button" part="section-toggle" class="filter__section-toggle" aria-expanded="${s}" aria-controls="${h}">
					<span class="filter__section-toggle-text">${this.#T(e)}</span>
					<svg class="filter__section-chevron" aria-hidden="true"><use href="#icon-chevron-down"/></svg>
				</button>
				<div class="filter__section-content" id="${h}"${a}>
					${l}
				</div>`}return`
			<h3 class="filter__section-title" part="section-title">${this.#T(e)}</h3>
			${l}`}#K(){return this.#m==="dialog"?this.#t.querySelector("dialog")?.open??!1:this.#u}#Q(){const e=this.#m,n=this.#t.querySelector(".filter__toggle");if(this.#I(),this.#O(),e==="dialog")this.#t.querySelector("dialog").showModal(),n.setAttribute("aria-expanded","true");else if(e==="dropdown"){const s=this.#t.querySelector(".filter__panel--dropdown"),a=()=>{const l=n.getBoundingClientRect(),h=this.closest("dm-map"),c=h?h.getBoundingClientRect():null;s.style.top=`${l.bottom+4}px`,c?(s.style.left=`${c.left}px`,s.style.right=`${window.innerWidth-c.right}px`,s.style.inlineSize="auto"):(s.style.left="",s.style.right=`${window.innerWidth-l.right}px`,s.style.inlineSize="")};a(),s.classList.add("filter__panel--open"),n.setAttribute("aria-expanded","true"),this.#u=!0,this.#f=a,window.addEventListener("scroll",this.#f,{passive:!0,capture:!0}),this.#c=l=>{l.composedPath().some(h=>h===s||h===n)||this.#N()},requestAnimationFrame(()=>{document.addEventListener("click",this.#c,!0)}),this.#t.addEventListener("keydown",this.#j)}else if(e==="sidebar"){const s=this.#t.querySelector(".filter__panel--sidebar"),a=this.#t.querySelector(".filter__overlay");s.classList.add("filter__panel--open"),a.classList.add("filter__overlay--visible"),n.setAttribute("aria-expanded","true"),this.#u=!0,this.#t.addEventListener("keydown",this.#j)}}#N(){const e=this.#m,n=this.#t.querySelector(".filter__toggle");if(e==="dialog")this.#t.querySelector("dialog").close();else if(e==="dropdown")this.#t.querySelector(".filter__panel--dropdown")?.classList.remove("filter__panel--open"),this.#u=!1,this.#f&&(window.removeEventListener("scroll",this.#f,{capture:!0}),this.#f=null),this.#c&&(document.removeEventListener("click",this.#c,!0),this.#c=null),this.#t.removeEventListener("keydown",this.#j);else if(e==="sidebar"){const s=this.#t.querySelector(".filter__panel--sidebar"),a=this.#t.querySelector(".filter__overlay");s?.classList.remove("filter__panel--open"),a?.classList.remove("filter__overlay--visible"),this.#u=!1,this.#t.removeEventListener("keydown",this.#j)}n.setAttribute("aria-expanded","false"),n.focus()}#j=e=>{e.key==="Escape"&&this.#N()};#Y(){this.#t.querySelector(".filter__toggle").addEventListener("click",()=>{this.#K()?this.#N():this.#Q()});const e=this.#t.querySelector('slot[name="header"]');if(e){const n=()=>{const s=e.assignedNodes().length>0;e.closest(".filter__header-text")?.classList.toggle("filter__header-text--empty",!s)};e.addEventListener("slotchange",n),n()}if(this.#t.querySelector(".filter__apply").addEventListener("click",()=>{this.#H(),this.#G(),this.#N()}),this.#t.querySelector(".filter__reset").addEventListener("click",()=>{this.#tt(),this.#N()}),this.#t.querySelector(".filter__close")?.addEventListener("click",()=>this.#N()),this.#m==="dialog"){const n=this.#t.querySelector("dialog");n.addEventListener("close",()=>{const s=this.#t.querySelector(".filter__toggle");s.setAttribute("aria-expanded","false"),s.focus()}),n.addEventListener("click",s=>{s.target===n&&this.#N()})}this.#m==="sidebar"&&this.#t.querySelector(".filter__overlay")?.addEventListener("click",()=>this.#N())}#$(e){const n=e.querySelector(".filter__custom-select-display"),s=e.querySelector(".filter__custom-select-dropdown");if(!n||!s)return;const a=n.getBoundingClientRect(),l=4,h=240,c=window.innerHeight,u=c-a.bottom-l,m=a.top-l,v=u<160&&m>u,_=v?m:u;s.style.left=`${a.left}px`,s.style.width=`${a.width}px`,s.style.maxBlockSize=`${Math.max(120,Math.min(h,_))}px`,v?(s.style.top="auto",s.style.bottom=`${c-a.top+l}px`):(s.style.bottom="auto",s.style.top=`${a.bottom+l}px`)}#O(){const e=this.#t.querySelector(".filter__content");if(!e)return;this.#p?.abort(),this.#p=new AbortController;const{signal:n}=this.#p,s=this.#y;e.querySelectorAll(".filter__section-toggle").forEach(a=>{a.addEventListener("click",()=>{const l=a.getAttribute("aria-expanded")==="true",h=a.getAttribute("aria-controls"),c=this.#t.getElementById(h);c&&(a.setAttribute("aria-expanded",l?"false":"true"),l?c.setAttribute("hidden",""):c.removeAttribute("hidden"))},{signal:n})}),e.querySelectorAll(".filter__checkbox").forEach(a=>{a.addEventListener("change",()=>{this.#H(),s?this.#G():this.#Z()},{signal:n})}),e.querySelectorAll(".filter__custom-select").forEach(a=>{a.addEventListener("click",l=>{if(l.target.closest(".filter__chip-remove"))return;const h=a.getAttribute("aria-expanded")==="true";if(e.querySelectorAll(".filter__custom-select").forEach(c=>{c.setAttribute("aria-expanded","false")}),a.setAttribute("aria-expanded",h?"false":"true"),!h){this.#$(a);const c=a.querySelector(".filter__option");c&&setTimeout(()=>c.focus(),0)}},{signal:n}),a.addEventListener("keydown",l=>{if(l.key==="Enter"||l.key===" "){l.preventDefault();const h=a.getAttribute("aria-expanded")==="true";if(a.setAttribute("aria-expanded",h?"false":"true"),!h){this.#$(a);const c=a.querySelector(".filter__option");c&&setTimeout(()=>c.focus(),0)}}else if(l.key==="Escape")a.setAttribute("aria-expanded","false"),a.focus();else if(l.key==="ArrowDown"){l.preventDefault();const h=[...a.querySelectorAll(".filter__option")],c=h.indexOf(this.#t.activeElement);(h[c+1]||h[0])?.focus()}else if(l.key==="ArrowUp"){l.preventDefault();const h=[...a.querySelectorAll(".filter__option")],c=h.indexOf(this.#t.activeElement);(h[c-1]||h[h.length-1])?.focus()}},{signal:n})}),e.querySelectorAll(".filter__option").forEach(a=>{a.addEventListener("click",l=>{const c=l.target.closest(".filter__section").dataset.property,u=l.target.dataset.value;this.#i[c]||(this.#i[c]=[]),this.#i[c].push(u),this.#I(),this.#O(),s?this.#G():this.#Z()},{signal:n}),a.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a.click())},{signal:n})}),e.querySelectorAll(".filter__chip-remove").forEach(a=>{a.addEventListener("click",l=>{l.stopPropagation();const h=l.target.closest(".filter__chip"),u=l.target.closest(".filter__section").dataset.property,m=h.dataset.value;this.#i[u]&&(this.#i[u]=this.#i[u].filter(v=>v!==m),this.#i[u].length===0&&delete this.#i[u]),this.#I(),this.#O(),s?this.#G():this.#Z()},{signal:n})}),this.#t.addEventListener("click",a=>{a.composedPath().some(l=>l?.classList?.contains("filter__custom-select"))||e.querySelectorAll(".filter__custom-select").forEach(l=>{l.setAttribute("aria-expanded","false")})},{signal:n}),e.querySelectorAll(".filter__range-input").forEach(a=>{const l=a.closest(".filter__section")?.dataset.property||"unknown",h=this.#rt(()=>{this.#H(),s?this.#G():this.#Z()},150,`range-${l}-${a.dataset.bound}`);a.addEventListener("input",c=>{const u=c.target.closest("label").querySelector("output");u&&(u.textContent=c.target.value),h()},{signal:n}),a.addEventListener("change",()=>{this.#H(),s?this.#G():this.#Z()},{signal:n})})}#H(){const e={};this.#t.querySelectorAll(".filter__section").forEach(n=>{const s=n.dataset.property,a=n.querySelectorAll(".filter__checkbox");if(a.length>0){const c=Array.from(a).filter(u=>u.checked).map(u=>u.value);c.length>0&&(e[s]=c);return}const l=n.querySelectorAll(".filter__chip");if(l.length>0){const c=Array.from(l).map(u=>u.dataset.value);c.length>0&&(e[s]=c);return}if(n.querySelectorAll(".filter__range-input").length===2){const c=n.querySelector('[data-bound="min"]'),u=n.querySelector('[data-bound="max"]');c&&u&&(e[s]={min:Number(c.value),max:Number(u.value)})}}),this.#i=e,this.#d=!1}#Z(){const e=this.#t.querySelector(".filter__apply");if(e){const n=JSON.stringify(this.#i)!==JSON.stringify(this.#a);e.classList.toggle("filter__apply--dirty",n)}}#G(){const e=new Map;this.#o.forEach((a,l)=>{const h=this.#i[l];a.sources.forEach(({element:c,property:u})=>{e.has(c)||e.set(c,{}),h!==void 0&&(e.get(c)[u]=h)})}),e.forEach((a,l)=>{l.dispatchEvent(new CustomEvent("dm-filter:apply",{bubbles:!1,detail:{filters:a}}))}),this.#a=JSON.parse(JSON.stringify(this.#i)),this.#et();const n=this.#t.querySelector(".filter__apply");n&&n.classList.remove("filter__apply--dirty");const s=Object.keys(this.#i).length;this.#rt(()=>{this.#st(s>0?`${s} filter${s!==1?"s":""} actief`:"Alle filters gewist")},500,"announce")()}#tt(){this.#i={},this.#d=!1;const e=new Set;this.#o.forEach(s=>{s.sources.forEach(({element:a})=>e.add(a))}),e.forEach(s=>{s.dispatchEvent(new CustomEvent("dm-filter:apply",{bubbles:!1,detail:{filters:{}}}))}),this.#a={},this.#et(),this.#st("Alle filters zijn gewist"),this.#I(),this.#O();const n=this.#t.querySelector(".filter__apply");n&&n.classList.remove("filter__apply--dirty")}#at(e,n){const s=this.#i[e];return!s||!Array.isArray(s)?!1:s.includes(String(n))}#et(){try{const e=new URL(window.location.href);Object.keys(this.#i).length===0?e.searchParams.delete("filters"):e.searchParams.set("filters",this.#ot(this.#i)),window.history.pushState({},"",e)}catch{}}#it(e=!1){try{const n=new URLSearchParams(window.location.search).get("filters");if(!n)return!1;const s=this.#lt(n);return this.#i=s,e&&this.#G(),!0}catch{return!1}}#ot(e){return btoa(encodeURIComponent(JSON.stringify(e)))}#lt(e){if(e.length>1e4)return{};const n=decodeURIComponent(atob(e));return this.#ht(JSON.parse(n))}#ht(e){if(typeof e!="object"||e===null||Array.isArray(e))return{};const n={};for(const[s,a]of Object.entries(e))Array.isArray(a)&&a.every(l=>typeof l=="string")?n[s]=a:a&&typeof a=="object"&&!Array.isArray(a)&&typeof a.min=="number"&&typeof a.max=="number"&&(n[s]={min:a.min,max:a.max});return n}#nt(e,n){const s=n-e;return s<=10?.1:s<=100?1:s<=1e3?10:100}#T(e){const n=document.createElement("div");return n.textContent=e,n.innerHTML}#S(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}#ct(e){const n=e.getAttribute("filter-icons");if(!n)return null;try{return JSON.parse(n)}catch{return null}}#W(){return`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/>
		</svg>`}#dt(e){if(!e||typeof e!="string")return this.#W();try{const n=new DOMParser().parseFromString(e,"image/svg+xml");if(n.querySelector("parsererror"))return this.#W();const s=n.querySelector("svg");return s?(s.querySelectorAll("script, foreignObject, object, embed, iframe").forEach(a=>a.remove()),s.querySelectorAll("*").forEach(a=>{for(const l of[...a.attributes])(l.name.startsWith("on")||l.name==="href"||l.name==="xlink:href"||l.name.toLowerCase().includes("javascript"))&&a.removeAttribute(l.name)}),s.querySelectorAll("[href], [xlink\\:href]").forEach(a=>{const l=a.getAttribute("href")||a.getAttribute("xlink:href");l&&l.toLowerCase().includes("javascript:")&&a.remove()}),s.outerHTML):this.#W()}catch{return this.#W()}}#rt(e,n=150,s="default"){return(...a)=>{this.#s.has(s)&&clearTimeout(this.#s.get(s));const l=setTimeout(()=>{e.apply(this,a),this.#s.delete(s)},n);this.#s.set(s,l)}}#st(e){const n=this.#t.querySelector('[role="status"]');n&&(n.textContent="",setTimeout(()=>{n.textContent=e},100))}get activeFilterCount(){return Object.keys(this.#i).length}getFilterState(){return JSON.parse(JSON.stringify(this.#i))}resetFilters(){this.#tt()}exportFilters(){return JSON.stringify(this.#i)}disconnectedCallback(){this.#s.forEach(e=>clearTimeout(e)),this.#s.clear(),this.#p?.abort(),this.#p=null,this.#c&&(document.removeEventListener("click",this.#c,!0),this.#c=null),this.#b&&(window.removeEventListener("popstate",this.#b),this.#b=null),this.#e=[],this.#i={},this.#a={},this.#l.clear(),this.#o.clear(),this.#n=null}}return customElements.define("dm-filter",cu),Ge.ICON_SPRITE=jd,Ge.registerIcons=Ud,Ge.setIconSprite=Hd,Object.defineProperty(Ge,Symbol.toStringTag,{value:"Module"}),Ge})({});
