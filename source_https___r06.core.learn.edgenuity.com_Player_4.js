
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js gt-ie9">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"NRJS-140e8e1440f20064fe5","applicationID":"1587475711","transactionName":"NVZaZkMEV0UEWhBRCgwcdWRySnViLHULXwwMcFdcRRdWWglcFhcsDFddSg==","queueTime":0,"applicationTime":52,"agent":"","atts":""}</script><script type="text/javascript">(window.NREUM||(NREUM={})).init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]},distributed_tracing:{enabled:true}};(window.NREUM||(NREUM={})).loader_config={agentID:"1834875662",accountID:"2824160",trustKey:"2758984",xpid:"Vg4FVVdVCBABUVlVAwYCUVUA",licenseKey:"NRJS-140e8e1440f20064fe5",applicationID:"1587475711"};/*! For license information please see nr-loader-spa-1221.min.js.LICENSE.txt */
(function(){var __webpack_modules__={507:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function detectPolyfillFeatures(){var featureStatus={};return checkAndAddFeature("Promise","PROMISE"),checkAndAddFeature("Array.prototype.includes","ARRAY_INCLUDES"),checkAndAddFeature("Object.assign","OBJECT_ASSIGN"),checkAndAddFeature("Object.entries","OBJECT_ENTRIES"),featureStatus;function checkAndAddFeature(funcString,featName){try{var func=eval("self."+funcString);-1!==func.toString().indexOf("[native code]")?featureStatus[featName]=Status.NATIVE:featureStatus[featName]=Status.CHANGED}catch(e){featureStatus[featName]=Status.UNAVAIL}}}__webpack_require__.d(__webpack_exports__,{n:function(){return detectPolyfillFeatures}});var Status={UNAVAIL:"NotSupported",NATIVE:"Detected",CHANGED:"Modified"}},2687:function(e,t,r){"use strict";var n=r(2141);t.Z=(0,n.ky)(16)},1719:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});var n=0,i=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);i&&(n=+i[1])},3524:function(e,t,r){"use strict";var n,i;if(r.d(t,{H:function(){return i}}),r(8283).B){var o=document.createElement("div");o.innerHTML="\x3c!--[if lte IE 6]><div></div><![endif]--\x3e\x3c!--[if lte IE 7]><div></div><![endif]--\x3e\x3c!--[if lte IE 8]><div></div><![endif]--\x3e\x3c!--[if lte IE 9]><div></div><![endif]--\x3e",n=o.getElementsByTagName("div").length}i=4===n?6:3===n?7:2===n?8:1===n?9:0},5970:function(e,t,r){"use strict";r.d(t,{P_:function(){return l},Mt:function(){return h},C5:function(){return u},DL:function(){return _},OP:function(){return q},Yu:function(){return g},Dg:function(){return p},CX:function(){return s},GE:function(){return m},sU:function(){return I}});var n={};r.r(n),r.d(n,{agent:function(){return O},match:function(){return P},version:function(){return x}});var i=r(4580),o=function(e,t){var r=this;return e&&"object"==typeof e?t&&"object"==typeof t?(Object.assign(this,t),void Object.entries(e).forEach((function(e){var t=e[0],n=e[1];r[t]=n}))):console.error("setting a Configurable requires a model to set its initial properties"):console.error("setting a Configurable requires an object as input")},a={beacon:i.ce.beacon,errorBeacon:i.ce.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},c={};function u(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!c[e])throw new Error("Info for "+e+" was never set");return c[e]}function s(e,t){if(!e)throw new Error("All info objects require an agent identifier!");c[e]=new o(t,a),(0,i.Qy)(e,c[e],"info")}var f={privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,enabled:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0},metrics:{enabled:!0},page_action:{enabled:!0},page_view_event:{enabled:!0},page_view_timing:{enabled:!0},session_trace:{enabled:!0},spa:{enabled:!0}},d={};function l(e){if(!e)throw new Error("All configuration objects require an agent identifier!");if(!d[e])throw new Error("Configuration for "+e+" was never set");return d[e]}function p(e,t){if(!e)throw new Error("All configuration objects require an agent identifier!");d[e]=new o(t,f),(0,i.Qy)(e,d[e],"config")}function h(e,t){if(!e)throw new Error("All configuration objects require an agent identifier!");var r=l(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}var v={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},b={};function _(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!b[e])throw new Error("LoaderConfig for "+e+" was never set");return b[e]}function m(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");b[e]=new o(t,v),(0,i.Qy)(e,b[e],"loader_config")}var g=(0,i.mF)().o,y=r(3524),w=r(9206),O=null,x=null;if(navigator.userAgent){var E=navigator.userAgent,k=E.match(/Version\/(\S+)\s+Safari/);k&&-1===E.indexOf("Chrome")&&-1===E.indexOf("Chromium")&&(O="Safari",x=k[1])}function P(e,t){if(!O)return!1;if(e!==O)return!1;if(!t)return!0;if(!x)return!1;for(var r=x.split("."),n=t.split("."),i=0;i<n.length;i++)if(n[i]!==r[i])return!1;return!0}var j=r(2141),S=r(8283).B?window.sessionStorage:void 0,L="NRBA_SESSION_ID";var T=self.XMLHttpRequest,C=T&&T.prototype,A={};function q(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!A[e])throw new Error("Runtime for "+e+" was never set");return A[e]}function I(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");var r,a;A[e]=new o(t,(r=e,{customTransaction:void 0,disabled:!1,features:{},maxBytes:6===y.H?2e3:3e4,offset:(0,w.yf)(),onerror:void 0,origin:""+self.location,ptid:void 0,releaseIds:{},sessionId:1==h(r,"privacy.cookies_enabled")&&S?(null===(a=S.getItem(L))&&(a=(0,j.ky)(16),S.setItem(L,a)),a):null,xhrWrappable:T&&C&&C.addEventListener&&!/CriOS/.test(navigator.userAgent),userAgent:n})),(0,i.Qy)(e,A[e],"runtime")}},8873:function(e,t,r){"use strict";r.d(t,{q:function(){return n}});var n=["1221","PROD"].filter((function(e){return e})).join(".")},1925:function(e,t,r){"use strict";r.d(t,{w:function(){return i}});var n={agentIdentifier:""},i=function(e){var t=this;if("object"!=typeof e)return console.error("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,n),Object.entries(e).forEach((function(e){var r=e[0],i=e[1];Object.keys(n).includes(r)&&(t.sharedContext[r]=i)}))}},2071:function(e,t,r){"use strict";r.d(t,{c:function(){return f},ee:function(){return n}});var n,i=r(4580),o=r(9010),a=r(9599),c="nr@context",u=(0,i.fP)();function s(){}function f(e){return(0,o.X)(e,c,d)}function d(){return new s}function l(){(n.backlog.api||n.backlog.feature)&&(n.aborted=!0,n.backlog={})}u.ee?n=u.ee:(n=function e(t,r){var i={},u={},f={},p={on:b,addEventListener:b,removeEventListener:_,emit:v,get:g,listeners:m,context:h,buffer:y,abort:l,aborted:!1,isBuffering:w,debugId:r,backlog:t&&t.backlog?t.backlog:{}};return p;function h(e){return e&&e instanceof s?e:e?(0,o.X)(e,c,d):d()}function v(e,r,i,o,a){if(!1!==a&&(a=!0),!n.aborted||o){t&&a&&t.emit(e,r,i);for(var c=h(i),s=m(e),f=s.length,d=0;d<f;d++)s[d].apply(c,r);var l=O()[u[e]];return l&&l.push([p,e,r,c]),c}}function b(e,t){i[e]=m(e).concat(t)}function _(e,t){var r=i[e];if(r)for(var n=0;n<r.length;n++)r[n]===t&&r.splice(n,1)}function m(e){return i[e]||[]}function g(t){return f[t]=f[t]||e(p,t)}function y(e,t){var r=O();p.aborted||(0,a.D)(e,(function(e,n){t=t||"feature",u[n]=t,t in r||(r[t]=[])}))}function w(e){return!!O()[u[e]]}function O(){return p.backlog}}(void 0,"globalEE"),u.ee=n)},3195:function(e,t,r){"use strict";r.d(t,{E:function(){return n},p:function(){return i}});var n=r(2071).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4539:function(e,t,r){"use strict";r.d(t,{X:function(){return o}});var n=r(3195);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.E,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.E);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3585:function(e,t,r){"use strict";r.d(t,{m:function(){return o}});var n=!1;try{var i=Object.defineProperty({},"passive",{get:function(){n=!0}});self.addEventListener("testPassive",null,i),self.removeEventListener("testPassive",null,i)}catch(e){}function o(e){return n?{passive:!0,capture:!!e}:!!e}},2141:function(e,t,r){"use strict";function n(){var e=null,t=0,r=self.crypto||self.msCrypto;function n(){return e?15&e[t++]:16*Math.random()|0}r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var i,o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",c=0;c<o.length;c++)a+="x"===(i=o[c])?n().toString(16):"y"===i?(i=3&n()|8).toString(16):i;return a}function i(){return a(16)}function o(){return a(32)}function a(e){var t=null,r=0,n=self.crypto||self.msCrypto;n&&n.getRandomValues&&Uint8Array&&(t=n.getRandomValues(new Uint8Array(31)));for(var i=[],o=0;o<e;o++)i.push(a().toString(16));return i.join("");function a(){return t?15&t[r++]:16*Math.random()|0}}r.d(t,{Ht:function(){return o},M:function(){return i},Rl:function(){return n},ky:function(){return a}})},9206:function(e,t,r){"use strict";r.d(t,{nb:function(){return u},os:function(){return s},yf:function(){return c},zO:function(){return a}});var n=r(1209),i=(new Date).getTime(),o=i;function a(){return n.G&&performance.now?Math.round(performance.now()):(i=Math.max((new Date).getTime(),i))-o}function c(){return i}function u(e){o=e}function s(){return o}},1209:function(e,t,r){"use strict";var n,i;r.d(t,{G:function(){return o}});var o=void 0!==(null==(n=self.performance)||null==(i=n.timing)?void 0:i.navigationStart)},745:function(e,t,r){"use strict";r.d(t,{s:function(){return c},v:function(){return u}});var n=r(7036),i=r(1719),o=r(9206),a=r(1209),c=!0;function u(e){var t=function(){if(i.I&&i.I<9)return;if(a.G)return c=!1,self.performance.timing.navigationStart}();t&&((0,n.B)(e,"starttime",t),(0,o.nb)(t))}},7036:function(e,t,r){"use strict";r.d(t,{B:function(){return o},L:function(){return a}});var n=r(9206),i={};function o(e,t,r){void 0===r&&(r=(0,n.zO)()+(0,n.os)()),i[e]=i[e]||{},i[e][t]=r}function a(e,t,r,n){var o,a,c=e.sharedContext.agentIdentifier,u=null==(o=i[c])?void 0:o[r],s=null==(a=i[c])?void 0:a[n];void 0!==u&&void 0!==s&&e.store("measures",t,{value:s-u})}},7233:function(e,t,r){"use strict";r.d(t,{e:function(){return o}});var n=r(8283),i={};function o(e){if(e in i)return i[e];if(0===(e||"").indexOf("data:"))return{protocol:"data"};var t,r=self.location,o={};if(n.B)(t=document.createElement("a")).href=e;else try{t=new URL(e,r.href)}catch(e){return o}o.port=t.port;var a=t.href.split("://");!o.port&&a[1]&&(o.port=a[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===a[0]?"443":"80"),o.hostname=t.hostname||r.hostname,o.pathname=t.pathname,o.protocol=a[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname);var c=!t.protocol||":"===t.protocol||t.protocol===r.protocol,u=t.hostname===r.hostname&&t.port===r.port;return o.sameOrigin=c&&(!t.hostname||u),"/"===o.pathname&&(i[e]=o),o}},8547:function(e,t,r){"use strict";r.d(t,{T:function(){return i}});var n=r(8283),i={isFileProtocol:function(){var e,t=(0,n.ek)(),r=Boolean("file:"===(null==(e=t.location)?void 0:e.protocol));r&&(i.supportabilityMetricSent=!0);return r},supportabilityMetricSent:!1}},9011:function(e,t,r){"use strict";r.d(t,{K:function(){return o}});var n=r(5970),i=["ajax","jserrors","metrics","page_action","page_view_event","page_view_timing","session_trace","spa"];function o(e){var t={};return i.forEach((function(r){t[r]=function(e,t){return!0!==(0,n.OP)(t).disabled&&!1!==(0,n.Mt)(t,e+".enabled")}(r,e)})),t}},8025:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(2071),i=function(e,t,r){void 0===r&&(r=[]),this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.externalFeatures=r}},9010:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},9599:function(e,t,r){"use strict";r.d(t,{D:function(){return i}});var n=Object.prototype.hasOwnProperty;function i(e,t){var r=[],i="",o=0;for(i in e)n.call(e,i)&&(r[o]=t(i,e[i]),o+=1);return r}},248:function(e,t,r){"use strict";r.d(t,{$c:function(){return s},Ng:function(){return f},RR:function(){return u}});var n=r(5970),i=r(1925),o=r(8547);function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}var c={regex:/^file:\/\/(.*)/,replacement:"file://OBFUSCATED"},u=function(e){var t,r;function n(t){return e.call(this,t)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,a(t,r);var i=n.prototype;return i.shouldObfuscate=function(){return s(this.sharedContext.agentIdentifier).length>0},i.obfuscateString=function(e){if(!e||"string"!=typeof e)return e;for(var t=s(this.sharedContext.agentIdentifier),r=e,n=0;n<t.length;n++){var i=t[n].regex,o=t[n].replacement||"*";r=r.replace(i,o)}return r},n}(i.w);function s(e){var t=[],r=(0,n.Mt)(e,"obfuscate")||[];return t=t.concat(r),o.T.isFileProtocol()&&t.push(c),t}function f(e){for(var t=!1,r=!1,n=0;n<e.length;n++){"regex"in e[n]?"string"!=typeof e[n].regex&&e[n].regex.constructor!==RegExp&&(console&&console.warn&&console.warn('An obfuscation replacement rule contains a "regex" value with an invalid type (must be a string or RegExp)'),r=!0):(console&&console.warn&&console.warn('An obfuscation replacement rule was detected missing a "regex" value.'),r=!0);var i=e[n].replacement;i&&"string"!=typeof i&&(console&&console.warn&&console.warn('An obfuscation replacement rule contains a "replacement" value with an invalid type (must be a string)'),t=!0)}return!t&&!r}},4580:function(e,t,r){"use strict";r.d(t,{EZ:function(){return u},Qy:function(){return c},ce:function(){return i},fP:function(){return o},gG:function(){return s},mF:function(){return a}});var n=r(9206),i={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function o(){return self.NREUM||(self.NREUM={}),void 0===self.newrelic&&(self.newrelic=self.NREUM),self.NREUM}function a(){var e=o();if(!e.o){var t=self,r=t.XMLHttpRequest;e.o={ST:setTimeout,SI:t.setImmediate,CT:clearTimeout,XHR:r,REQ:t.Request,EV:t.Event,PR:t.Promise,MO:t.MutationObserver,FETCH:t.fetch}}return e}function c(e,t,r){var i,a,c=o(),u=c.initializedAgents||{},s=u[e]||{};return Object.keys(s).length||(s.initializedAt={ms:(0,n.zO)(),date:new Date}),c.initializedAgents=Object.assign({},u,((a={})[e]=Object.assign({},s,((i={})[r]=t,i)),a)),c}function u(e,t){o()[e]=t}function s(){var e,t;return e=o(),t=e.info||{},e.info=Object.assign({beacon:i.beacon,errorBeacon:i.errorBeacon},t),function(){var e=o(),t=e.init||{};e.init=Object.assign({},t)}(),a(),function(){var e=o(),t=e.loader_config||{};e.loader_config=Object.assign({},t)}(),o()}},6023:function(e,t,r){"use strict";function n(){return"function"==typeof self.PerformanceObserver}r.d(t,{W:function(){return n}})},8283:function(e,t,r){"use strict";r.d(t,{B:function(){return a},ek:function(){return o},n2:function(){return c}});var n=self,i=n;function o(){return i}var a=Boolean("object"==typeof window&&self.document),c=Boolean("undefined"!=typeof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator)},8539:function(e){e.exports=function(e,t,r){t||(t=0),void 0===r&&(r=e?e.length:0);for(var n=-1,i=r-t||0,o=Array(i<0?0:i);++n<i;)o[n]=e[t+n];return o}}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,r){return __webpack_require__.f[r](e,t),t}),[]))},__webpack_require__.u=function(e){return e+"."+__webpack_require__.h().slice(0,8)+"-1221.js"},__webpack_require__.h=function(){return"25fcbbf1b6e5e9bcbd37"},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},inProgress={},dataWebpackPrefix="NRBA:",__webpack_require__.l=function(e,t,r,n){if(inProgress[e])inProgress[e].push(t);else{var i,o;if(void 0!==r)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var u=a[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==dataWebpackPrefix+r){i=u;break}}i||(o=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,__webpack_require__.nc&&i.setAttribute("nonce",__webpack_require__.nc),i.setAttribute("data-webpack",dataWebpackPrefix+r),i.src=e),inProgress[e]=[t];var s=function(t,r){i.onerror=i.onload=null,clearTimeout(f);var n=inProgress[e];if(delete inProgress[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),o&&document.head.appendChild(i)}},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="https://js-agent.newrelic.com/",function(){var e={122:0,351:0};__webpack_require__.f.j=function(t,r){var n=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(r,i){n=e[t]=[r,i]}));r.push(n[2]=i);var o=__webpack_require__.p+__webpack_require__.u(t),a=new Error;__webpack_require__.l(o,(function(r){if(__webpack_require__.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,n[1](a)}}),"chunk-"+t,t)}};var t=function(t,r){var n,i,o=r[0],a=r[1],c=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)__webpack_require__.o(a,n)&&(__webpack_require__.m[n]=a[n]);if(c)c(__webpack_require__)}for(t&&t(r);u<o.length;u++)i=o[u],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkNRBA=self.webpackChunkNRBA||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var __webpack_exports__={};!function(){"use strict";__webpack_require__.r(__webpack_exports__);var e=__webpack_require__(507),t=__webpack_require__(3585),r=__webpack_require__(8283),n=r.B&&window,i=n&&n.document;function o(e){if(!i||"complete"===i.readyState)return e()||!0}function a(e){o(e)||n.addEventListener("load",e,(0,t.m)(!1))}function c(e){o(e)||i.addEventListener("DOMContentLoaded",e,(0,t.m)(!1))}var u=__webpack_require__(2071);function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function f(e,t,r,i){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),c=new P(i||[]);return n(a,"_invoke",{value:O(e,r,c)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var l={};function p(){}function h(){}function v(){}var b={};u(b,o,(function(){return this}));var _=Object.getPrototypeOf,m=_&&_(_(j([])));m&&m!==t&&r.call(m,o)&&(b=m);var g=v.prototype=p.prototype=Object.create(b);function y(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function i(n,o,a,c){var u=d(e[n],e,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){i("next",e,a,c)}),(function(e){i("throw",e,a,c)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return i("throw",e,a,c)}))}c(u.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function O(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return S()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),u(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new w(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(g),u(g,c,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function f(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}var d=0;function l(e){var t;(t=s().mark((function t(){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d++){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,__webpack_require__.e(859).then(__webpack_require__.bind(__webpack_require__,7859));case 5:return r=t.sent,n=r.aggregator,t.next=9,n(e);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),console.error("Failed to successfully load all aggregators. Aborting...\n",t.t0),u.ee.abort();case 15:case"end":return t.stop()}}),t,null,[[2,11]])})),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(e){f(o,n,i,a,c,"next",e)}function c(e){f(o,n,i,a,c,"throw",e)}a(void 0)}))})()}var p=__webpack_require__(2687),h=__webpack_require__(3195),v=__webpack_require__(9206),b=__webpack_require__(7036),_=__webpack_require__(745),m=__webpack_require__(8025);function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}var y,w,O,x=function(e){var t,n;function i(t){var n;return n=e.call(this,t)||this,r.B?((0,_.v)(t),(0,b.B)(t,"firstbyte",(0,v.yf)()),a((function(){return n.measureWindowLoaded()})),c((function(){return n.measureDomContentLoaded()})),n):function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,g(t,n);var o=i.prototype;return o.measureWindowLoaded=function(){var e=(0,v.zO)();(0,b.B)(this.agentIdentifier,"onload",e+(0,v.os)()),(0,h.p)("timing",["load",e],void 0,void 0,this.ee)},o.measureDomContentLoaded=function(){(0,b.B)(this.agentIdentifier,"domContent",(0,v.zO)()+(0,v.os)())},i}(m.W);r.B&&(void 0!==document.hidden?(y="hidden",w="visibilitychange",O="visibilityState"):void 0!==document.msHidden?(y="msHidden",w="msvisibilitychange"):void 0!==document.webkitHidden&&(y="webkitHidden",w="webkitvisibilitychange",O="webkitVisibilityState"));var E=__webpack_require__(5970);function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}var P=function(e){var n,i;function o(n){var i,o;if(!(i=e.call(this,n)||this).isEnabled()||!r.B)return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i);if(i.pageHiddenTime="hidden"===document.visibilityState?-1:1/0,i.performanceObserver,i.lcpPerformanceObserver,i.clsPerformanceObserver,i.fiRecorded=!1,"PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){i.performanceObserver=new PerformanceObserver((function(){var e;return(e=i).perfObserver.apply(e,arguments)}));try{i.performanceObserver.observe({entryTypes:["paint"]})}catch(e){}i.lcpPerformanceObserver=new PerformanceObserver((function(){var e;return(e=i).lcpObserver.apply(e,arguments)}));try{i.lcpPerformanceObserver.observe({entryTypes:["largest-contentful-paint"]})}catch(e){}i.clsPerformanceObserver=new PerformanceObserver((function(){var e;return(e=i).clsObserver.apply(e,arguments)}));try{i.clsPerformanceObserver.observe({type:"layout-shift",buffered:!0})}catch(e){}}if("addEventListener"in document){i.fiRecorded=!1;["click","keydown","mousedown","pointerdown","touchstart"].forEach((function(e){document.addEventListener(e,(function(){var e;return(e=i).captureInteraction.apply(e,arguments)}),(0,t.m)(!1))}))}return o=function(){var e;return(e=i).captureVisibilityChange.apply(e,arguments)},"addEventListener"in document&&w&&document.addEventListener(w,(function(){O&&document[O]?o(document[O]):document[y]?o("hidden"):o("visible")}),(0,t.m)(!1)),i}i=e,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,k(n,i);var a=o.prototype;return a.isEnabled=function(){return!1!==(0,E.Mt)(this.agentIdentifier,"page_view_timing.enabled")},a.perfObserver=function(e,t){var r=this;e.getEntries().forEach((function(e){"first-paint"===e.name?(0,h.p)("timing",["fp",Math.floor(e.startTime)],void 0,void 0,r.ee):"first-contentful-paint"===e.name&&(0,h.p)("timing",["fcp",Math.floor(e.startTime)],void 0,void 0,r.ee)}))},a.lcpObserver=function(e,t){var r=e.getEntries();if(r.length>0){var n=r[r.length-1];if(this.pageHiddenTime<n.startTime)return;var i=[n],o=this.addConnectionAttributes({});o&&i.push(o),(0,h.p)("lcp",i,void 0,void 0,this.ee)}},a.clsObserver=function(e){var t=this;e.getEntries().forEach((function(e){e.hadRecentInput||(0,h.p)("cls",[e],void 0,void 0,t.ee)}))},a.addConnectionAttributes=function(e){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t)return t.type&&(e["net-type"]=t.type),t.effectiveType&&(e["net-etype"]=t.effectiveType),t.rtt&&(e["net-rtt"]=t.rtt),t.downlink&&(e["net-dlink"]=t.downlink),e},a.captureInteraction=function(e){if(e instanceof E.Yu.EV&&!this.fiRecorded){var t=Math.round(e.timeStamp),r={type:e.type};this.addConnectionAttributes(r),t<=(0,v.zO)()?r.fid=(0,v.zO)()-t:t>(0,v.os)()&&t<=Date.now()?(t-=(0,v.os)(),r.fid=(0,v.zO)()-t):t=(0,v.zO)(),this.fiRecorded=!0,(0,h.p)("timing",["fi",t,r],void 0,void 0,this.ee)}},a.captureVisibilityChange=function(e){"hidden"===e&&(this.pageHiddenTime=(0,v.zO)(),(0,h.p)("pageHide",[this.pageHiddenTime],void 0,void 0,this.ee))},o}(m.W),j=__webpack_require__(4539),S="React",L="Angular",T="AngularJS",C="Backbone",A="Ember",q="Vue",I="Meteor",R="Zepto",N="Jquery";function H(){if(!r.B)return[];var e=[];try{(function(){try{if(window.React||window.ReactDOM||window.ReactRedux)return!0;if(document.querySelector("[data-reactroot], [data-reactid]"))return!0;for(var e=document.querySelectorAll("body > div"),t=0;t<e.length;t++)if(Object.keys(e[t]).indexOf("_reactRootContainer")>=0)return!0;return!1}catch(e){return!1}})()&&e.push(S),function(){try{return!!window.angular||(!!document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]")||!!document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]'))}catch(e){return!1}}()&&e.push(T),function(){try{return!!(window.hasOwnProperty("ng")&&window.ng.hasOwnProperty("coreTokens")&&window.ng.coreTokens.hasOwnProperty("NgZone"))||!!document.querySelectorAll("[ng-version]").length}catch(e){return!1}}()&&e.push(L),window.Backbone&&e.push(C),window.Ember&&e.push(A),window.Vue&&e.push(q),window.Meteor&&e.push(I),window.Zepto&&e.push(R),window.jQuery&&e.push(N)}catch(e){}return e}var B,z=__webpack_require__(8547),M=__webpack_require__(248),D=__webpack_require__(8873);function F(e,t,r){return F=G()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&W(i,r.prototype),i},F.apply(null,arguments)}function G(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},W(e,t)}var U,X,V,Z=Boolean(self.Worker),Y=Boolean(self.SharedWorker),J=Boolean(null==(B=self.navigator)?void 0:B.serviceWorker);function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}var K=function(e){var t,n;function i(t,r){var n;return void 0===r&&(r={}),(n=e.call(this,t)||this).PfFeatStatusEnum=r,n.singleChecks(),(0,j.X)("record-supportability",(function(){var e;return(e=n).recordSupportability.apply(e,arguments)}),void 0,n.ee),(0,j.X)("record-custom",(function(){var e;return(e=n).recordCustom.apply(e,arguments)}),void 0,n.ee),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,Q(t,n);var o=i.prototype;return o.recordSupportability=function(e,t){var r=["sm",e,{name:e},t];return(0,h.p)("storeMetric",r,null,void 0,this.ee),r},o.recordCustom=function(e,t){var r=["cm",e,{name:e},t];return(0,h.p)("storeEventMetrics",r,null,void 0,this.ee),r},o.singleChecks=function(){var e=this;this.recordSupportability("Generic/Version/"+D.q+"/Detected"),r.B&&c((function(){H().forEach((function(t){e.recordSupportability("Framework/"+t+"/Detected")}))})),z.T.isFileProtocol()&&(this.recordSupportability("Generic/FileProtocol/Detected"),z.T.supportabilityMetricSent=!0);var t=(0,M.$c)(this.agentIdentifier);t.length>0&&this.recordSupportability("Generic/Obfuscate/Detected"),t.length>0&&!(0,M.Ng)(t)&&this.recordSupportability("Generic/Obfuscate/Invalid"),r.B&&this.reportPolyfillsNeeded(),function(e){if(!U){if(Z){U=Worker;try{self.Worker=n(U,"Dedicated")}catch(e){a(e,"Dedicated")}if(Y){X=SharedWorker;try{self.SharedWorker=n(X,"Shared")}catch(e){a(e,"Shared")}}else i("Shared");if(J){V=navigator.serviceWorker.register;try{self.navigator.serviceWorker.register=(t=V,function(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return o("Service",null==(e=n[1])?void 0:e.type),t.apply(navigator.serviceWorker,n)})}catch(e){a(e,"Service")}}else i("Service");var t;return}i("All")}function n(e,t){return new Proxy(e,{construct:function(e,r){var n;return o(t,null==(n=r[1])?void 0:n.type),F(e,r)}})}function i(t){r.n2||e("Workers/"+t+"/Unavailable")}function o(t,r){e("module"===r?"Workers/"+t+"/Module":"Workers/"+t+"/Classic")}function a(t,r){e("Workers/"+r+"/SM/Unsupported"),console.warn("NR Agent: Unable to capture "+r+" workers.",t)}}(this.recordSupportability.bind(this))},o.reportPolyfillsNeeded=function(){this.recordSupportability("Generic/Polyfill/Promise/"+this.PfFeatStatusEnum.PROMISE),this.recordSupportability("Generic/Polyfill/ArrayIncludes/"+this.PfFeatStatusEnum.ARRAY_INCLUDES),this.recordSupportability("Generic/Polyfill/ObjectAssign/"+this.PfFeatStatusEnum.OBJECT_ASSIGN),this.recordSupportability("Generic/Polyfill/ObjectEntries/"+this.PfFeatStatusEnum.OBJECT_ENTRIES)},i}(m.W),$=__webpack_require__(9010),ee=__webpack_require__(8539),te=__webpack_require__.n(ee),re=__webpack_require__(9599),ne=self,ie="fetch-",oe="fetch-body-",ae=["arrayBuffer","blob","json","text","formData"],ce=ne.Request,ue=ne.Response,se="prototype",fe="nr@context",de={};function le(e){var t=function(e){return(e||u.ee).get("fetch")}(e);if(!(ce&&ue&&ne.fetch))return t;if(de[t.debugId])return t;function r(e,r,n){var i=e[r];"function"==typeof i&&(e[r]=function(){var e,r=te()(arguments),o={};t.emit(n+"before-start",[r],o),o[fe]&&o[fe].dt&&(e=o[fe].dt);var a=i.apply(this,r);return t.emit(n+"start",[r,e],a),a.then((function(e){return t.emit(n+"end",[null,e],a),e}),(function(e){throw t.emit(n+"end",[e],a),e}))})}return de[t.debugId]=!0,(0,re.D)(ae,(function(e,t){r(ce[se],t,oe),r(ue[se],t,oe)})),r(ne,"fetch",ie),t.on("fetch-end",(function(e,r){var n=this;if(r){var i=r.headers.get("content-length");null!==i&&(n.rxSize=i),t.emit("fetch-done",[null,r],n)}else t.emit("fetch-done",[e],n)})),t}var pe="nr@original",he=Object.prototype.hasOwnProperty,ve=!1;function be(e,t){return e||(e=u.ee),r.inPlace=function(e,t,n,i,o){n||(n="");var a,c,u,s="-"===n.charAt(0);for(u=0;u<t.length;u++)c=t[u],ge(a=e[c])||(e[c]=r(a,s?c+n:n,i,c,o))},r.flag=pe,r;function r(t,r,i,o,a){return ge(t)?t:(r||(r=""),c[pe]=t,me(t,c,e),c);function c(){var c,u,s,f;try{u=this,c=te()(arguments),s="function"==typeof i?i(c,u):i||{}}catch(t){_e([t,"",[c,u,o],s],e)}n(r+"start",[c,u,o],s,a);try{return f=t.apply(u,c)}catch(e){throw n(r+"err",[c,u,e],s,a),e}finally{n(r+"end",[c,u,f],s,a)}}}function n(r,n,i,o){if(!ve||t){var a=ve;ve=!0;try{e.emit(r,n,i,t,o)}catch(t){_e([t,r,n,i],e)}ve=a}}}function _e(e,t){t||(t=u.ee);try{t.emit("internal-error",e)}catch(e){}}function me(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){_e([e],r)}for(var n in e)he.call(e,n)&&(t[n]=e[n]);return t}function ge(e){return!(e&&e instanceof Function&&e.apply&&!e[pe])}function ye(e,t,r){var n=e[t];e[t]=function(e,t){var r=t(e);return r[pe]=e,me(e,r,u.ee),r}(n,r)}function we(){for(var e=arguments.length,t=new Array(e),r=0;r<e;++r)t[r]=arguments[r];return t}var Oe={};function xe(e){var t=function(e){return(e||u.ee).get("timer")}(e);if(Oe[t.debugId])return t;Oe[t.debugId]=!0;var r=be(t),n="setTimeout",i="setInterval",o="clearTimeout",a="-start";return r.inPlace(self,[n,"setImmediate"],"setTimeout-"),r.inPlace(self,[i],"setInterval-"),r.inPlace(self,[o,"clearImmediate"],"clearTimeout-"),t.on(i+a,(function(e,t,n){e[0]=r(e[0],"fn-",null,n)})),t.on(n+a,(function(e,t,n){this.method=n,this.timerDuration=isNaN(e[1])?0:+e[1],e[0]=r(e[0],"fn-",this,n)})),t}var Ee={};function ke(e){var t=function(e){return(e||u.ee).get("raf")}(e);if(Ee[t.debugId]||!r.B)return t;Ee[t.debugId]=!0;var n=be(t);return n.inPlace(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","msRequestAnimationFrame"],"raf-"),t.on("raf-start",(function(e){e[0]=n(e[0],"fn-")})),t}var Pe={};function je(e){var t=function(e){return(e||u.ee).get("history")}(e);if(Pe[t.debugId]||!r.B)return t;Pe[t.debugId]=!0;var n=be(t),i=window.history&&window.history.constructor&&window.history.constructor.prototype,o=window.history;return i&&i.pushState&&i.replaceState&&(o=i),n.inPlace(o,["pushState","replaceState"],"-"),t}var Se={};function Le(e){var n=function(e){return(e||u.ee).get("jsonp")}(e);if(Se[n.debugId]||!r.B)return n;Se[n.debugId]=!0;var i=be(n),o=/[?&](?:callback|cb)=([^&#]+)/,a=/(.*)\.([^.]+)/,c=/^(\w+)(\.|$)(.*)$/,s=["appendChild","insertBefore","replaceChild"];function f(e,t){var r=e.match(c),n=r[1],i=r[3];return i?f(i,t[n]):t[n]}return"addEventListener"in window&&(Node&&Node.prototype&&Node.prototype.appendChild?i.inPlace(Node.prototype,s,"dom-"):(i.inPlace(HTMLElement.prototype,s,"dom-"),i.inPlace(HTMLHeadElement.prototype,s,"dom-"),i.inPlace(HTMLBodyElement.prototype,s,"dom-"))),n.on("dom-start",(function(e){!function(e){if(!e||"string"!=typeof e.nodeName||"script"!==e.nodeName.toLowerCase())return;if("function"!=typeof e.addEventListener)return;var r=(c=e.src,u=c.match(o),u?u[1]:null);var c,u;if(!r)return;var s=function(e){var t=e.match(a);if(t&&t.length>=3)return{key:t[2],parent:f(t[1],window)};return{key:e,parent:window}}(r);if("function"!=typeof s.parent[s.key])return;var d={};function l(){n.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,t.m)(!1)),e.removeEventListener("error",p,(0,t.m)(!1))}function p(){n.emit("jsonp-error",[],d),n.emit("jsonp-end",[],d),e.removeEventListener("load",l,(0,t.m)(!1)),e.removeEventListener("error",p,(0,t.m)(!1))}i.inPlace(s.parent,[s.key],"cb-",d),e.addEventListener("load",l,(0,t.m)(!1)),e.addEventListener("error",p,(0,t.m)(!1)),n.emit("new-jsonp",[e.src],d)}(e[0])})),n}var Te={};function Ce(e){var t=function(e){return(e||u.ee).get("mutation")}(e);if(Te[t.debugId]||!r.B)return t;Te[t.debugId]=!0;var n=be(t),i=E.Yu.MO;return i&&(window.MutationObserver=function(e){return this instanceof i?new i(n(e,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype),t}var Ae={};function qe(e){var t=function(e){return(e||u.ee).get("promise")}(e);if(Ae[t.debugId])return t;Ae[t.debugId]=!0;var r=u.c,n=be(t),i=E.Yu.PR;return i&&function(){function e(e){var r=t.context(),o=n(e,"executor-",r,null,!1),a=new i(o);return t.context(a).getCtx=function(){return r},a}self.Promise=e,Object.defineProperty(self.Promise,"name",{value:"Promise"}),["all","race"].forEach((function(e){var r=i[e];i[e]=function(n){var o=!1;(0,re.D)(n,(function(t,r){Promise.resolve(r).then(c("all"===e),c(!1))}));var a=r.apply(i,arguments);return i.resolve(a);function c(e){return function(){t.emit("propagate",[null,!o],a,!1,!1),o=o||!e}}}})),["resolve","reject"].forEach((function(e){var r=i[e];i[e]=function(e){var n=r.apply(i,arguments);return e!==n&&t.emit("propagate",[e,!0],n,!1,!1),n}})),i.prototype.catch=function(e){return this.then(null,e)},Object.assign(i.prototype,{constructor:{value:e}}),(0,re.D)(Object.getOwnPropertyNames(i),(function(t,r){try{e[r]=i[r]}catch(e){}})),ye(i.prototype,"then",(function(e){return function(){var i=this,o=we.apply(this,arguments),a=r(i);a.promise=i,o[0]=n(o[0],"cb-",a,null,!1),o[1]=n(o[1],"cb-",a,null,!1);var c=e.apply(this,o);return a.nextPromise=c,t.emit("propagate",[i,!0],c,!1,!1),c}})),t.on("executor-start",(function(e){e[0]=n(e[0],"resolve-",this,null,!1),e[1]=n(e[1],"resolve-",this,null,!1)})),t.on("executor-err",(function(e,t,r){e[1](r)})),t.on("cb-end",(function(e,r,n){t.emit("propagate",[n,!0],this.nextPromise,!1,!1)})),t.on("propagate",(function(e,r,n){this.getCtx&&!r||(this.getCtx=function(){if(e instanceof Promise)var r=t.context(e);return r&&r.getCtx?r.getCtx():this})})),e.toString=function(){return""+i}}(),t}var Ie={};function Re(e){var t=function(e){return(e||u.ee).get("events")}(e);if(Ie[t.debugId])return t;Ie[t.debugId]=!0;var n=be(t,!0),i=XMLHttpRequest,o="addEventListener",a="removeEventListener";function c(e){for(var t=e;t&&!t.hasOwnProperty(o);)t=Object.getPrototypeOf(t);t&&s(t)}function s(e){n.inPlace(e,[o,a],"-",f)}function f(e,t){return e[1]}return"getPrototypeOf"in Object?(r.B&&c(document),c(self),c(i.prototype)):i.prototype.hasOwnProperty(o)&&(s(self),s(i.prototype)),t.on("addEventListener-start",(function(e,t){var r=e[1];if(null!==r&&("function"==typeof r||"object"==typeof r)){var i=(0,$.X)(r,"nr@wrapped",(function(){var e={object:function(){if("function"!=typeof r.handleEvent)return;return r.handleEvent.apply(r,arguments)},function:r}[typeof r];return e?n(e,"fn-",null,e.name||"anonymous"):r}));this.wrapped=e[1]=i}})),t.on("removeEventListener-start",(function(e){e[1]=this.wrapped||e[1]})),t}var Ne={};function He(e){var r=e||u.ee,n=function(e){return(e||u.ee).get("xhr")}(r);if(Ne[n.debugId])return n;Ne[n.debugId]=!0,Re(r);var i=be(n),o=E.Yu.XHR,a=E.Yu.MO,c=E.Yu.PR,s=E.Yu.SI,f="readystatechange",d=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],l=[],p=self.XMLHttpRequest.listeners,h=self.XMLHttpRequest=function(e){var r=new o(e);function i(){try{n.emit("new-xhr",[r],r),r.addEventListener(f,b,(0,t.m)(!1))}catch(e){console.error(e);try{n.emit("internal-error",[e])}catch(e){}}}return this.listeners=p?[].concat(p,[i]):[i],this.listeners.forEach((function(e){return e()})),r};function v(e,t){i.inPlace(t,["onreadystatechange"],"fn-",w)}function b(){var e=this,t=n.context(e);e.readyState>3&&!t.resolved&&(t.resolved=!0,n.emit("xhr-resolved",[],e)),i.inPlace(e,d,"fn-",w)}if(function(e,t){for(var r in e)t[r]=e[r]}(o,h),h.prototype=o.prototype,i.inPlace(h.prototype,["open","send"],"-xhr-",w),n.on("send-xhr-start",(function(e,t){v(e,t),function(e){l.push(e),a&&(_?_.then(y):s?s(y):(m=-m,g.data=m))}(t)})),n.on("open-xhr-start",v),a){var _=c&&c.resolve();if(!s&&!c){var m=1,g=document.createTextNode(m);new a(y).observe(g,{characterData:!0})}}else r.on("fn-end",(function(e){e[0]&&e[0].type===f||y()}));function y(){for(var e=0;e<l.length;e++)v(0,l[e]);l.length&&(l=[])}function w(e,t){return t}return n}function Be(e){return Re(e)}function ze(e){return le(e)}function Me(e){return je(e)}function De(e){return ke(e)}function Fe(e){return xe(e)}function Ge(e){return He(e)}var We,Ue={};try{We=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(Ue.console=!0,-1!==We.indexOf("dev")&&(Ue.dev=!0),-1!==We.indexOf("nr_dev")&&(Ue.nrDev=!0))}catch(e){}function Xe(e){try{Ue.console&&Xe(e)}catch(e){}}function Ve(e,t){return Ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ve(e,t)}Ue.nrDev&&u.ee.on("internal-error",(function(e){Xe(e.stack)})),Ue.dev&&u.ee.on("fn-err",(function(e,t,r){Xe(r.stack)})),Ue.dev&&(Xe("NR AGENT IN DEVELOPMENT MODE"),Xe("flags: "+(0,re.D)(Ue,(function(e,t){return e})).join(", ")));var Ze="nr@seenError",Ye=function(e){var t,r;function n(t){var r;(r=e.call(this,t)||this).skipNext=0,r.handleErrors=!1,r.origOnerror=self.onerror;var n=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r),i=(0,E.OP)(r.agentIdentifier);i.features.err=!0,n.ee.on("fn-start",(function(e,t,r){n.handleErrors&&(n.skipNext+=1)})),n.ee.on("fn-err",(function(e,t,r){n.handleErrors&&!r[Ze]&&((0,$.X)(r,Ze,(function(){return!0})),this.thrown=!0,Qe(r,void 0,n.ee))})),n.ee.on("fn-end",(function(){n.handleErrors&&!this.thrown&&n.skipNext>0&&(n.skipNext-=1)})),n.ee.on("internal-error",(function(e){(0,h.p)("ierr",[e,(0,v.zO)(),!0],void 0,void 0,n.ee)}));var o=self.onerror;self.onerror=function(){var e;return o&&o.apply(void 0,arguments),(e=r).onerrorHandler.apply(e,arguments),!1};try{self.addEventListener("unhandledrejection",(function(e){var t=new Error(""+e.reason);(0,h.p)("err",[t,(0,v.zO)(),!1,{unhandledPromiseRejection:1}],void 0,void 0,r.ee)}))}catch(e){}try{throw new Error}catch(e){"stack"in e&&(Fe(r.ee),De(r.ee),"addEventListener"in self&&Be(r.ee),i.xhrWrappable&&Ge(r.ee),n.handleErrors=!0)}return r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,Ve(t,r),n.prototype.onerrorHandler=function(e,t,r,n,i){try{this.skipNext?this.skipNext-=1:Qe(i||new Je(e,t,r),!0,this.ee)}catch(e){try{(0,h.p)("ierr",[e,(0,v.zO)(),!0],void 0,void 0,this.ee)}catch(e){}}return"function"==typeof this.origOnerror&&this.origOnerror.apply(this,te()(arguments))},n}(m.W);function Je(e,t,r){this.message=e||"Uncaught error with no additional information",this.sourceURL=t,this.line=r}function Qe(e,t,r){var n=t?null:(0,v.zO)();(0,h.p)("err",[e,n],void 0,void 0,r)}var Ke=1;function $e(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===self?0:(0,$.X)(e,"nr@id",(function(){return Ke++}))}var et=__webpack_require__(1719);function tt(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return JSON.stringify(e).length}catch(e){return}}}var rt=__webpack_require__(7233),nt=__webpack_require__(2141),it=function(){function e(e){this.agentIdentifier=e,this.generateTracePayload=this.generateTracePayload.bind(this),this.shouldGenerateTrace=this.shouldGenerateTrace.bind(this)}var t=e.prototype;return t.generateTracePayload=function(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,E.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,n=(t.agentID||"").toString()||null,i=(t.trustKey||"").toString()||null;if(!r||!n)return null;var o=(0,nt.M)(),a=(0,nt.Ht)(),c=Date.now(),u={spanId:o,traceId:a,timestamp:c};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(u.traceContextParentHeader=this.generateTraceContextParentHeader(o,a),u.traceContextStateHeader=this.generateTraceContextStateHeader(o,c,r,n,i)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(u.newrelicHeader=this.generateTraceHeader(o,a,c,r,n,i)),u},t.generateTraceContextParentHeader=function(e,t){return"00-"+t+"-"+e+"-01"},t.generateTraceContextStateHeader=function(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t},t.generateTraceHeader=function(e,t,r,n,i,o){if(!("function"==typeof self.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return o&&n!==o&&(a.d.tk=o),btoa(JSON.stringify(a))},t.shouldGenerateTrace=function(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)},t.isAllowedOrigin=function(e){var t=!1,r={};if((0,E.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,E.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var n=0;n<r.allowed_origins.length;n++){var i=(0,rt.e)(r.allowed_origins[n]);if(e.hostname===i.hostname&&e.protocol===i.protocol&&e.port===i.port){t=!0;break}}return t},t.isDtEnabled=function(){var e=(0,E.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled},t.excludeNewrelicHeader=function(){var e=(0,E.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header},t.useNewrelicHeaderForCors=function(){var e=(0,E.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header},t.useTraceContextHeadersForCors=function(){var e=(0,E.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers},e}();function ot(e,t){return ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ot(e,t)}var at=["load","error","abort","timeout"],ct=at.length,ut=E.Yu.REQ,st=self.XMLHttpRequest,ft=function(e){var r,n;function i(r){var n;n=e.call(this,r)||this;var i=(0,E.OP)(n.agentIdentifier);return!i.xhrWrappable||i.disabled?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n):(i.features.xhr=!0,n.dt=new it(n.agentIdentifier),n.handler=function(e,t,r,i){return(0,h.p)(e,t,r,i,n.ee)},n.wrappedFetch=ze(n.ee),Ge(n.ee),function(e,r,n,i){function o(e){var r=this;r.totalCbs=0,r.called=0,r.cbTime=0,r.end=w,r.ended=!1,r.xhrGuids={},r.lastSize=null,r.loadCaptureCalled=!1,r.params=this.params||{},r.metrics=this.metrics||{},e.addEventListener("load",(function(t){x(r,e)}),(0,t.m)(!1)),et.I&&(et.I>34||et.I<10)||e.addEventListener("progress",(function(e){r.lastSize=e.loaded}),(0,t.m)(!1))}function a(e){this.params={method:e[0]},O(this,e[1]),this.metrics={}}function c(t,r){var n=(0,E.DL)(e);"xpid"in n&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",n.xpid);var o=i.generateTracePayload(this.parsedOrigin);if(o){var a=!1;o.newrelicHeader&&(r.setRequestHeader("newrelic",o.newrelicHeader),a=!0),o.traceContextParentHeader&&(r.setRequestHeader("traceparent",o.traceContextParentHeader),o.traceContextStateHeader&&r.setRequestHeader("tracestate",o.traceContextStateHeader),a=!0),a&&(this.dt=o)}}function u(e,n){var i=this.metrics,o=e[0],a=this;if(i&&o){var c=tt(o);c&&(i.txSize=c)}this.startTime=(0,v.zO)(),this.listener=function(e){try{"abort"!==e.type||a.loadCaptureCalled||(a.params.aborted=!0),("load"!==e.type||a.called===a.totalCbs&&(a.onloadCalled||"function"!=typeof n.onload))&&a.end(n)}catch(e){try{r.emit("internal-error",[e])}catch(e){}}};for(var u=0;u<ct;u++)n.addEventListener(at[u],this.listener,(0,t.m)(!1))}function s(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||this.end(r)}function f(e,t){var r=""+$e(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function d(e,t){var r=""+$e(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function l(){this.endTime=(0,v.zO)()}function p(e,t){t instanceof st&&"load"===e[0]&&r.emit("xhr-load-added",[e[1],e[2]],t)}function h(e,t){t instanceof st&&"load"===e[0]&&r.emit("xhr-load-removed",[e[1],e[2]],t)}function b(e,t,r){t instanceof st&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,v.zO)()))}function _(e,t){this.xhrCbStart&&r.emit("xhr-cb-time",[(0,v.zO)()-this.xhrCbStart,this.onload,t],t)}function m(e){var t,r=e[1]||{};"string"==typeof e[0]?t=e[0]:e[0]&&e[0].url?t=e[0].url:self.URL&&e[0]&&e[0]instanceof URL&&(t=e[0].href),t&&(this.parsedOrigin=(0,rt.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=i.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if("string"==typeof e[0]||self.URL&&e[0]&&e[0]instanceof URL){var o={};for(var a in r)o[a]=r[a];o.headers=new Headers(r.headers||{}),c(o.headers,n)&&(this.dt=n),e.length>1?e[1]=o:e.push(o)}else e[0]&&e[0].headers&&c(e[0].headers,n)&&(this.dt=n);function c(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function g(e,t){this.params={},this.metrics={},this.startTime=(0,v.zO)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof ut?r=i.url:self.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),O(this,r);var o=(""+(i&&i instanceof ut&&i.method||n.method||"GET")).toUpperCase();this.params.method=o,this.txSize=tt(n.body)||0}function y(e,t){var r;this.endTime=(0,v.zO)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(r=+this.rxSize);var i={txSize:this.txSize,rxSize:r,duration:(0,v.zO)()-this.startTime};n("xhr",[this.params,i,this.startTime,this.endTime,"fetch"],this)}function w(e){var t=this.params,r=this.metrics;if(!this.ended){this.ended=!0;for(var i=0;i<ct;i++)e.removeEventListener(at[i],this.listener,!1);t.aborted||(r.duration=(0,v.zO)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):x(this,e),r.cbTime=this.cbTime,n("xhr",[t,r,this.startTime,this.endTime,"xhr"],this))}}function O(e,t){var r=(0,rt.e)(t),n=e.params;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}function x(e,t){e.params.status=t.status;var r=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?tt(e.response):"text"===r||""===r||void 0===r?tt(e.responseText):void 0}(t,e.lastSize);if(r&&(e.metrics.rxSize=r),e.sameOrigin){var n=t.getResponseHeader("X-NewRelic-App-Data");n&&(e.params.cat=n.split(", ").pop())}e.loadCaptureCalled=!0}r.on("new-xhr",o),r.on("open-xhr-start",a),r.on("open-xhr-end",c),r.on("send-xhr-start",u),r.on("xhr-cb-time",s),r.on("xhr-load-added",f),r.on("xhr-load-removed",d),r.on("xhr-resolved",l),r.on("addEventListener-end",p),r.on("removeEventListener-end",h),r.on("fn-end",_),r.on("fetch-before-start",m),r.on("fetch-start",g),r.on("fn-start",b),r.on("fetch-done",y)}(n.agentIdentifier,n.ee,n.handler,n.dt),n)}return n=e,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,ot(r,n),i}(m.W);var dt=__webpack_require__(6023);function lt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pt(e,t){return pt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},pt(e,t)}var ht="addEventListener",vt="resourcetimingbufferfull",bt="bstResource",_t="-start",mt="-end",gt="fn-start",yt="fn-end",wt="bstTimer",Ot="pushState",xt=E.Yu.EV,Et=function(e){var n,i;function o(n){var i;if(i=e.call(this,n)||this,!r.B)return lt(i);if(!(window.performance&&window.performance.timing&&window.performance.getEntriesByType))return lt(i);(0,E.OP)(i.agentIdentifier).features.stn=!0;var o=i.ee;function a(e){if((0,h.p)(bt,[window.performance.getEntriesByType("resource")],void 0,void 0,o),window.performance.clearResourceTimings)try{window.performance.removeEventListener(vt,a,!1)}catch(e){}else try{window.performance.removeEventListener("webkitresourcetimingbufferfull",a,!1)}catch(e){}}return i.timerEE=Fe(i.ee),i.rafEE=De(i.ee),Me(i.ee),Be(i.ee),i.ee.on(gt,(function(e,t){e[0]instanceof xt&&(this.bstStart=(0,v.zO)())})),i.ee.on(yt,(function(e,t){var r=e[0];r instanceof xt&&(0,h.p)("bst",[r,t,this.bstStart,(0,v.zO)()],void 0,void 0,o)})),i.timerEE.on(gt,(function(e,t,r){this.bstStart=(0,v.zO)(),this.bstType=r})),i.timerEE.on(yt,(function(e,t){(0,h.p)(wt,[t,this.bstStart,(0,v.zO)(),this.bstType],void 0,void 0,o)})),i.rafEE.on(gt,(function(){this.bstStart=(0,v.zO)()})),i.rafEE.on(yt,(function(e,t){(0,h.p)(wt,[t,this.bstStart,(0,v.zO)(),"requestAnimationFrame"],void 0,void 0,o)})),i.ee.on(Ot+_t,(function(e){this.time=(0,v.zO)(),this.startPath=location.pathname+location.hash})),i.ee.on(Ot+mt,(function(e){(0,h.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,void 0,o)})),(0,dt.W)()?((0,h.p)(bt,[window.performance.getEntriesByType("resource")],void 0,void 0,o),function(){var e=new PerformanceObserver((function(e,t){var r=e.getEntries();(0,h.p)(bt,[r],void 0,void 0,o)}));try{e.observe({entryTypes:["resource"]})}catch(e){}}()):ht in window.performance&&(window.performance.clearResourceTimings?window.performance.addEventListener(vt,a,(0,t.m)(!1)):window.performance.addEventListener("webkitresourcetimingbufferfull",a,(0,t.m)(!1))),document.addEventListener("scroll",i.noOp,(0,t.m)(!1)),document.addEventListener("keypress",i.noOp,(0,t.m)(!1)),document.addEventListener("click",i.noOp,(0,t.m)(!1)),i}return i=e,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,pt(n,i),o.prototype.noOp=function(e){},o}(m.W);function kt(e,t){return kt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},kt(e,t)}var Pt=function(e){var t,r;function n(t){var r;return r=e.call(this,t)||this,(0,E.OP)(r.agentIdentifier).features.ins=!0,r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,kt(t,r),n}(m.W);function jt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function St(e,t){return St=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},St(e,t)}var Lt="fn-start",Tt="fn-end",Ct="cb-start",At="cb-end",qt=self,It=qt.location,Rt=function(e){var n,i;function o(n){var i;if(i=e.call(this,n)||this,!r.B)return jt(i);var o=(0,E.OP)(i.agentIdentifier);if(!qt.addEventListener||!o.xhrWrappable||o.disabled)return jt(i);o.features.spa=!0;var a,c=0,u=i.ee.get("tracer"),s=Le(i.ee),f=function(e){return qe(e)}(i.ee),d=Be(i.ee),l=Fe(i.ee),p=Ge(i.ee),h=ze(i.ee),b=Me(i.ee),_=function(e){return Ce(e)}(i.ee);function m(e,t){b.emit("newURL",[""+It,t])}function g(){c++,a=It.hash,this["fn-start"]=(0,v.zO)()}function y(){c--,It.hash!==a&&m(0,!0);var e=(0,v.zO)();this.jsTime=~~this.jsTime+e-this["fn-start"],this["fn-end"]=e}function w(e,t){e.on(t,(function(){this[t]=(0,v.zO)()}))}return i.ee.on(Lt,g),f.on(Ct,g),s.on(Ct,g),i.ee.on(Tt,y),f.on(At,y),s.on(At,y),i.ee.buffer([Lt,Tt,"xhr-resolved"]),d.buffer([Lt]),l.buffer(["setTimeout-end","clearTimeout-start",Lt]),p.buffer([Lt,"new-xhr","send-xhr-start"]),h.buffer(["fetch-start","fetch-done","fetch-body-start","fetch-body-end"]),b.buffer(["newURL"]),_.buffer([Lt]),f.buffer(["propagate",Ct,At,"executor-err","resolve-start"]),u.buffer([Lt,"no-fn-start"]),s.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),w(h,"fetch-start"),w(h,"fetch-done"),w(s,"new-jsonp"),w(s,"jsonp-end"),w(s,"cb-start"),b.on("pushState-end",m),b.on("replaceState-end",m),qt.addEventListener("hashchange",m,(0,t.m)(!0)),qt.addEventListener("load",m,(0,t.m)(!0)),qt.addEventListener("popstate",(function(){m(0,c>1)}),(0,t.m)(!0)),i}return i=e,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,St(n,i),o}(m.W),Nt=__webpack_require__(9011),Ht=__webpack_require__(4580);var Bt=!1;var zt,Mt,Dt,Ft=(0,e.n)();try{!function(){if(!Bt){var e=(0,Ht.gG)();r.n2&&(e.info.jsAttributes=Object.assign({},e.info.jsAttributes,{isWorker:!0}));try{(0,E.CX)(p.Z,e.info),(0,E.Dg)(p.Z,e.init),(0,E.GE)(p.Z,e.loader_config),(0,E.sU)(p.Z,{}),function(e){var t=(0,Ht.fP)(),r=u.ee.get(e),n=r.get("tracer"),i="api-",o="api-ixn-";function a(){}(0,re.D)(["setErrorHandler","finished","addToTrace","inlineHit","addRelease"],(function(e,r){t[r]=s(i,r,!0,"api")})),t.addPageAction=s(i,"addPageAction",!0),t.setCurrentRouteName=s(i,"routeName",!0),t.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,E.OP)(e).customTransaction=(r||"http://custom.transaction")+t,s(i,"setPageViewName",!0,"api")()},t.setCustomAttribute=function(t,r){var n,o=(0,E.C5)(e);return(0,E.CX)(e,Object.assign({},o,{jsAttributes:Object.assign({},o.jsAttributes,(n={},n[t]=r,n))})),s(i,"setCustomAttribute",!0,"api")()},t.interaction=function(){return(new a).get()};var c=a.prototype={createTracer:function(e,t){var i={},o=this,a="function"==typeof t;return(0,h.p)("api-ixn-tracer",[(0,v.zO)(),e,i],o,void 0,r),function(){if(n.emit((a?"":"no-")+"fn-start",[(0,v.zO)(),o,a],i),a)try{return t.apply(this,arguments)}catch(e){throw n.emit("fn-err",[arguments,this,"string"==typeof e?new Error(e):e],i),e}finally{n.emit("fn-end",[(0,v.zO)()],i)}}}};function s(e,t,n,i){return function(){return(0,h.p)("record-supportability",["API/"+t+"/called"],void 0,void 0,r),(0,h.p)(e+t,[(0,v.zO)()].concat(te()(arguments)),n?null:this,i,r),n?void 0:this}}(0,re.D)("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),(function(e,t){c[t]=s(o,t)})),t.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,h.p)("record-supportability",["API/noticeError/called"],void 0,void 0,r),(0,h.p)("err",[e,(0,v.zO)(),!1,t],void 0,void 0,r)}}(p.Z),Bt=!0}catch(e){}}}();var Gt=(0,Nt.K)(p.Z);Gt.page_view_event&&new x(p.Z),Gt.page_view_timing&&new P(p.Z),Gt.metrics&&new K(p.Z,Ft),Gt.jserrors&&new Ye(p.Z),Gt.ajax&&new ft(p.Z),Gt.session_trace&&new Et(p.Z),Gt.page_action&&new Pt(p.Z),Gt.spa&&new Rt(p.Z),zt="spa",void 0===Dt&&(Dt=1e3),Mt?setTimeout((function(){return l(zt)}),Dt):r.B?a((function(){return l(zt)})):l(zt)}catch(e){var Wt,Ut,Xt;null!=(Wt=self)&&null!=(Ut=Wt.newrelic)&&null!=(Xt=Ut.ee)&&Xt.abort&&self.newrelic.ee.abort()}}(),self.NRBA=__webpack_exports__})();
//# sourceMappingURL=https://js-agent.newrelic.com/nr-loader-spa-1221.min.25fcbbf1.map</script>
    <title>Player - Imagine Edgenuity for Students</title>
    <script type="text/javascript">
        // Console fix
        if (typeof console === "undefined") {
            console = { log: function () { } };
        }
        document.domain =
        (function (){ //Neat way to prevent creation of a global variable or function.
            var domainSlices = document.domain.split(".");
            return domainSlices[domainSlices.length - 2] + "." + domainSlices[domainSlices.length - 1];
        })();
            var thisPageID = 1e7 * Math.random(); window.addEventListener("storage", function(e){ "RecentPageID" == e.key && e.newValue != thisPageID && localStorage.setItem("WrongPageID", e.newValue),"WrongPageID" == e.key && e.newValue == thisPageID && (document.location = "/Player/Error/Duplicate")}),localStorage.setItem("RecentPageID", thisPageID);
    </script>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1" />
    <link class="rebranded-favicons" rel="apple-touch-icon-precomposed" href="/Player/favicon_iPad144x144.png" sizes="144x144" type="image/png" />
    <link class="rebranded-favicons" rel="apple-touch-icon-precomposed" href="/Player/favicon_mobile114x114.png" sizes="114x114" type="image/png" />
    <link class="rebranded-favicons" rel="apple-touch-icon-precomposed" href="/Player/favicon_iPad72x72.png" sizes="72x72" type="image/png" />
    <link class="rebranded-favicons" rel="apple-touch-icon-precomposed" href="/Player/favicon_mobile57x57.png" type="image/png" />
    <link class="rebranded-favicons" rel="shortcut icon" href="/Player/favicon.ico" type="image/x-icon" />
    <link href="/Player/Resources/css/font-awesome.css" rel="stylesheet" />

    <link href="//learn.education2020.com/cdn/uikit/0.4/cache.css" rel="stylesheet" />

    <link href="/Player/Resources/css/playerCssBundle?v=vpkRxQ-UX70IvFLZ5PtVvWaIKpuRXEt31egcB0WQOnI1" rel="stylesheet"/>


    <!-- Initialization -->
    <script type="text/javascript">
        var initialization = {"Services":{"Main":{"Name":"Main","Location":"https://r06.core.learn.edgenuity.com/Player/LTILaunch/"},"Overlay":{"Name":"Overlay","Location":"https://r06.core.learn.edgenuity.com/Player/Overlay/"},"Note":{"Name":"Note","Location":"https://core.learn.edgenuity.com/noteapi/api/ENotes"},"Glossary":{"Name":"Glossary","Location":"https://r06.core.learn.edgenuity.com/contentengineapi/api/glossary/getwordlistbyid/"},"Transcript":{"Name":"Transcript","Location":"https://r06.core.learn.edgenuity.com/contentengineapi/api/"},"proxy":{"Name":"Dictionary","Location":"/Player/Proxy"},"AssessmentLessonList":{"Name":"AssessmentLessonList","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/enote/getrelatednotes/"},"Activity":{"Name":"Activity","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/navigation/getnextactivity"},"CurrentActivity":{"Name":"CurrentActivity","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/navigation//GetCurrentActivity"},"EndActivity":{"Name":"EndActivity","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/navigation/getendactivityinfo"},"StartActivity":{"Name":"StartActivity","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/navigation//StartActivity"},"LoadActivityAttempt":{"Name":"LoadActivityAttempt","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/navigation/loadactivityattempt"},"PrevActivity":{"Name":"PrevActivity","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/navigation/getpreviousactivity"},"LTILink":{"Name":"LTILink","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/lti/getltilink"},"GradeBarInfo":{"Name":"GradeBarInfo","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/graderesult/GetGradeBarInfo"},"SessionHandler":{"Name":"SessionHandler","Location":"https://r06.core.learn.edgenuity.com/student/LogSessionInfo.ashx"},"ReadAloud":{"Name":"ReadAloud","Location":"//edgenuityservices.speechstream.net/SpeechServices/index.html"},"teacherComment":{"Name":"teacherComment","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/TeacherComment/GetTeacherComment"},"score":{"Name":"score","Location":"/ContentEngineAPI/api/Scores/"},"LeavePageURL":{"Name":"LeavePageURL","Location":"/LMSAPI/req/Navigation/LeavePage/"},"Tools":{"Name":"Tools","Location":"https://r06.core.learn.edgenuity.com/lmsapi/req/tool/gettools"}},"StartActivity":{"CourseId":"6d71d0de-870f-4809-a706-582cbc9b9ef6","CurrentId":"379f93ec-7d55-11e3-a6b0-bc764e043e0c"},"InitialLaunchData":{"ResourceLinkID":null,"LearningObjectKey":"379f93ec-7d55-11e3-a6b0-bc764e043e0c","LessonKey":"5b88bf30-40c0-11e3-853f-bc764e043e0c","LinkLookupURL":"https://r06.core.learn.edgenuity.com/lmsapi/req/lti/getltilink","NavigationURL":"https://r06.core.learn.edgenuity.com/lmsapi/req/navigation/","ResultID":"","Role":"Learner","UserID":"76349486","UpdateGradeURL":"https://r06.core.learn.edgenuity.com/lis/ResultManager.svc/ReplaceResult/","ContextID":"ad5dbf9c-f575-4135-997a-bde2a6ff54c2","CEContextID":"ad5dbf9c-f575-4135-997a-bde2a6ff54c2","FirstName":"Brent","LastName":"Jacobs","CourseName":"GA-GSE English Language Arts 9","LessonName":"Improving Vocabulary with Word Parts and Context Clues","ActivityName":"Instruction","Email":"","ReturnURL":"https://student.edgenuity.com/?\u0026returnOrder=baa7cd47-7dfa-e911-a988-005056b51702","SchoolName":"HORIZONS LEARNING CENTER","SchoolID":"102494","DistrictID":"36930","DistrictName":"LIBERTY COUNTY SCHOOL SYSTEM","LivePersonEnabled":false,"SelectedStudentChatType":"","StudentEmail":"","Subject":"Language Arts","TranslateEnabled":false,"TranslateLocation":"//learn.education2020.com/cdn/translation/1.0/cache/minify.js","ReadAloudEnabled":false,"SessionKey":"4mvxqgkfvofttl11rr0kx2pj","ContentVariableLookupURL":"https://r06.core.learn.edgenuity.com/lmsapi/req/lti/getcontentvariables","StudentOptions":1,"CourseID":"98735497","ToolsService":"https://r06.core.learn.edgenuity.com/lmsapi/req/tool/gettools","ConsumerKey":"player","IsSSLimited":"False","AllowPretestsAndQuizzes":"False","WYSIWYGEnabled":true,"IsT4L":false,"UseLargePlayer":false,"EssayType":"","touchEnabled":false,"SessionID":"65199458","LogoutURL":"/Student/Authentication/Logout","InactivityTimeout":1620000,"InactivityCountdown":180000,"SessionCallbackTimeout":180000,"Impersonation":false,"ImpersonationURL":"","LMSCourseID":"ad5dbf9c-f575-4135-997a-bde2a6ff54c2","RequestTime":1673540867000,"IsRestrictedActivity":false,"HideENotes":false,"LMSAPIBasePath":"https://r06.core.learn.edgenuity.com/lmsapi/"},"InitialActivityData":{"Hash":null,"LessonName":"Improving Vocabulary with Word Parts and Context Clues","ActivityName":"Instruction","ActivityStatus":"Active","ActivityOrder":"baa7cd47-7dfa-e911-a988-005056b51702","CourseID":null,"AttemptID":"","GlossaryID":"5b88bf30-40c0-11e3-853f-bc764e043e0c","ToolsID":"75002635","NotesID":"player_5b88bf30-40c0-11e3-853f-bc764e043e0c_ad5dbf9c-f575-4135-997a-bde2a6ff54c2","TranscriptID":"379f93ec-7d55-11e3-a6b0-bc764e043e0c","LearningObjectKey":"379f93ec-7d55-11e3-a6b0-bc764e043e0c","LessonKey":"00000000-0000-0000-0000-000000000000","ResourceLinkID":"","Progress":3.1,"PrevActivity":{"LessonName":"Improving Vocabulary with Word Parts and Context Clues","ActivityName":"Warm-Up","ActivityOrder":"b9a7cd47-7dfa-e911-a988-005056b51702"},"NextActivity":{"LessonName":"Improving Vocabulary with Word Parts and Context Clues","ActivityName":"Instruction","ActivityOrder":"baa7cd47-7dfa-e911-a988-005056b51702"},"Warning":null,"ShowOverlay":false,"LookupLink":null,"UserID":null,"ContextID":null,"CEContextID":null,"Role":null,"ConsumerKey":"player","NavigationLocked":false,"EssayType":null},"Brand":"- Imagine Edgenuity for Students"};
        sessionStorage.setItem("LMSAPIBasePath", initialization.InitialLaunchData.LMSAPIBasePath);
        sessionStorage.setItem("SchoolId", initialization.InitialLaunchData.SchoolID);
    </script>

    <!-- Included Libraries -->
    <script type="text/javascript" src="/Player/Resources/vendor/modernizr-2.6.1-respond-1.1.0.min.js"></script>
    <script type="text/javascript" src="/Player/Resources/vendor/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="/Player/Resources/Player/js/FormPost.js"></script>
    <script type="text/javascript" src="//learn.education2020.com/cdn/jqueryui/1.10.0/cache/minify.js"></script>
    <script type="text/javascript" src="/Player/Resources/vendor/json2.js"></script>
    <script type="text/javascript" src="/Player/Resources/vendor/knockout-2.3.0.js"></script>
    <script type="text/javascript" src="/Player/Resources/vendor/audiojs/audio.js"></script>
    <script type="text/javascript" src="/Player/Resources/vendor/flash_detect_min.js"></script>
    <script type="text/javascript" src="/Player/Resources/vendor/NumberFormatter.js"></script>
    <script type="text/javascript" src="/Player/Resources/vendor/detectmobilebrowser.js"></script>

        <script type="text/javascript" src="//core.learn.edgenuity.com/assets/CKEditor/ckeditor.js"></script>
        <script type="text/javascript" src="//core.learn.edgenuity.com/assets/CKEditor/wysiwyg.js"></script>
    <script type="text/javascript" src="//learn.education2020.com/cdn/iframenotify/1.1/cache/minify.js"></script>
    <script type="text/javascript" src="//learn.education2020.com/cdn/inactivityMessage/1.0/cache/minify.js"></script>

    <script src="/Player/Resources/js/playerJsBundle?v=f1UNxwdYS_1vBoyU25UzqkkGQqZ_ek-fG4j3shXi_r41"></script>


    <script type="text/javascript">
        var inited = false;
        var NextActivityName = "";
        let playButtonFocusTimeout;

        document.addEventListener("keydown", onTabShowVideoControls);
        function onTabShowVideoControls(e) {
            if (e.key === 'Tab') {
                const videoPlayerIframe = document.getElementById('stageFrame');
                if (!videoPlayerIframe) {
                    return;
                }
                const videoPlayerControls = videoPlayerIframe.contentWindow.document.getElementsByClassName('vcplayer');
                if (videoPlayerControls && videoPlayerControls[0] && videoPlayerControls[0].style) {
                    videoPlayerControls[0].style.visibility = "visible";
                }
            }
        }

        function initToolBar(){
            var options = { scripts: [] };
            inited = true;
                
                    options.highlight= {
                        uniqueID: "379f93ec-7d55-11e3-a6b0-bc764e043e0c_76349486",
                        persistLocation: "//r06.core.learn.edgenuity.com/contentengineapi/rest/Highlighter",
                        stylesheet: "https://learn.education2020.com/cdn/highlights/1.0/cache/minify.css"},
                    options.scripts.push("https://learn.education2020.com/cdn/highlights/1.0/cache/minify.js");
                

            if (initialization.InitialLaunchData.ReadAloudEnabled){
                options.scripts.push("//configuration.speechstream.net/edgenuity/courseware/v216/config.js");
            }

            Namespace.global().playerView.toolbar().initialize(options,
                function()
                {
                    if (initialization.InitialLaunchData.ReadAloudEnabled){
                        //Add a global callback so that we can reset the audioPlaying flg to false once speech is complete
                        eba_speech_complete_callback = "setTimeout(function(){if(!$rw_isSpeaking())Namespace.global().playerView.toolbar().audioPlaying(false);},1000);";

                        // TB-334: Update Speechstream code from 191 to 208
                        // Pass the following variables in TexthelpSpeechStream.addToolbar(bookId, pageId, studentId)
                        TexthelpSpeechStream.addToolbar(
                            getBookId(),
                            "379f93ec-7d55-11e3-a6b0-bc764e043e0c",
                            null //we don't use annotations so pass in null here
                        );

                        // SpeechStreamAssistor.setBookId("");
                        // SpeechStreamAssistor.setPageId("379f93ec-7d55-11e3-a6b0-bc764e043e0c");

                        $(window).on("load", function () {
                            SpeechStream.cacheMode.setCacheMode(SpeechStream.cacheMode.CACHE_WITH_LIVE_SERVER);
                        });
                    }

                    playButtonFocusTimeout = setInterval(playButtonFocus, 500);
                });
        }

        var delayLoadToolbar = function () {
            if (Namespace.compiled)
                initToolBar();
            else {
                setTimeout(delayLoadToolbar, 100);
            }
        }

        function playButtonFocus() {
            const videoPlayerIframe = document.getElementById('stageFrame');
            if (!videoPlayerIframe) {
                return;
            }

            const videoPlayerControls = videoPlayerIframe.contentWindow.document.getElementsByClassName('vcplayer');
            if (videoPlayerControls && videoPlayerControls[0] && videoPlayerControls[0].style) {
                videoPlayerControls[0].style.visibility = "visible";
            }

            const videoPlayerPlayButton = videoPlayerIframe.contentWindow.document.getElementById('uid1_play');
            if (videoPlayerPlayButton) {
                videoPlayerPlayButton.focus();

                if (videoPlayerPlayButton.addEventListener) {
                    videoPlayerPlayButton.addEventListener("keyup", (e) => frameKeyUp(e, videoPlayerPlayButton), true);
                    videoPlayerPlayButton.addEventListener("focusin", (e) => frameFocusIn(e, videoPlayerPlayButton), true);
                    videoPlayerPlayButton.addEventListener("focusout", (e) => frameFocusOut(e, videoPlayerPlayButton), true);
                }

                clearTimeout(playButtonFocusTimeout);
            }

        }

        function frameKeyUp(e, videoPlayerPlayButton) {
            if (e.key && (e.key === 'Enter' || e.key === ' ' || e.key.toLowerCase() === 'p')) {
                videoPlayerPlayButton.click();
                videoPlayerPlayButton.focus();
            }
        }

        function frameFocusIn(e, videoPlayerPlayButton) {
            videoPlayerPlayButton.style.border = 'white';
            videoPlayerPlayButton.style.borderStyle = 'solid';
        }

        function frameFocusOut(e, videoPlayerPlayButton) {
            videoPlayerPlayButton.style.border = '';
            videoPlayerPlayButton.style.borderStyle = '';
        }

        var setNextActivityName = function () {
            if (Namespace.compiled) {
                Namespace.global().playerView.getNextActivity(true); //sets the name of the next activity, used if next is a quiz
                setTimeout(setNext, 500);
            }
            else {
                setTimeout(setNextActivityName, 100);
            }
        }

        function setNext() {
            this.NextActivityName = Namespace.global().playerView.NextActivityName;
        }

        iFN.listen("ChildFrameLoaded", function (d) {
            console.log("TextHelp_iFrameLoaded done.now loading texthelp scripts");
            if(typeof $rw_parseNewSection == "undefined"){
                if (!inited) {
                    delayLoadToolbar();
                    setNextActivityName();
                }
            }
            else{
                $rw_parseNewSection(document.body);
            }
        });

        $(function(){
            Namespace.global().playerView.lessonPaneView().glossaryView().glossary().searchURL = "//edgenuityservices.speechstream.net/rwserver/?query=dictionaryHtml&locale=US&userName=e2020&swf=162&custID=1890";

            Namespace.global().playerView.nextReloadURL = "/Player/Home/Next";
            Namespace.global().playerView.prevReloadURL = "/Player/Home/Prev";
        });

        function getBookId() {
            return "" ? "" : "null";
        }
    </script>

    <style>
        .lp_buttons_area {
            background-color: black;
        }
    </style>


    <script type="text/javascript" src="https://configuration.speechstream.net/edgenuity/courseware/v216/config.js"></script>
</head>
<body data-bind="pageTitle: title" data-title=" - Imagine Edgenuity for Students" data-title-default="Player" class="activityActive" onload="TexthelpSpeechStream.addToolbar(getBookId(), '379f93ec-7d55-11e3-a6b0-bc764e043e0c', null);">
    <input id="WYSIWYGEnabled" name="WYSIWYGEnabled" type="hidden" value="True" />
    <div class="mainhead" data-bind="animatedStyle: { 'marginRight': lessonPaneView().neighborMarginRight}">
        <a href="#wrap" class="skipLink">Skip to main content</a>
        <a href="#" class="nav-home nav" data-bind="visible: ReturnURL, attr: { href: ReturnURL }, click: goHome">Home</a>
        <span class="course" data-bind="html: stageView().CourseName"></span>
        <ul class="head-nav">
            <li>

            </li>
            <li class="settings-button">
                <a class="nav" href="#" onclick="$('#settings').show()"><i class="icon-flat-preferences"></i></a>
            </li>
            <li class="parent" data-bind="with: $root.Translator, visible: $root.Translator().enabled, click: $root.Translator().toggleLanguages" no-translate="true">
                <a href="#" class="nav" data-bind="text: currentLanguage().nativeName">English</a>
                <ul class="language-list-wrapper" data-bind="visible: showLanguages()" style="display:none;">
                    <!-- ko foreach: currentDisplay -->
                    <li><a href="#" data-bind="text: nativeName, click: function(){ $parent.setLanguage($data.googleAbbr) }, attr: { title: name }"></a></li>
                    <!-- /ko -->
                    <li><a href="#" data-bind="text: moreActive() ? 'less..' : 'more..', click: toggleMore"></a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav dave" data-bind="text: user().FullName, click: user().toggleUserMenu"></a>
                <ul data-bind="visible: user().userMenu, if: $root.logoutURL" style="display:none;">
                    <li style="cursor: pointer"><a data-bind="click: $root.logoutSave">Sign Out</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <script type="text/html" id="tree-node-template">
        <li class="tree-node">
            <a href="#" class="tree-node-element" data-bind="text: Name, click: expand, css: { 'tree-node-has-children': hasItems, 'tree-node-open': expanded }">Link</a>
            <!-- ko if: expanded -->
            <ul class="tree-parent tree-open" data-bind="template: { name: 'tree-node-template', foreach: Items }"></ul>
            <!-- /ko -->
        </li>
    </script>
    <script type="text/html" id="impersonation-template">
        <div class="ImpersonateBanner clearfix">
            <i class="fa fa-exclamation-triangle pull-left"></i> <div class="pull-left">You are currently logged in as a student. <br /> Any action you take will be saved as though the student completed it.</div>
            <a class="ed-btn ed-btn-error pull-right" href="#" data-bind="click: $root.unimpersonate">End Impersonation Session</a>
        </div>
    </script>
    <!-- ko with: $root.lessonPaneView -->
    <div style="display:none;" data-bind="css: { 'lesson-pane-hidden': !$root.lessonPaneView().permission() },visible:$root.lessonPaneView().permission()" id="lesson-pane-wrapper">
        <div>
            <span onclick="moveTutoring()" class="lesson-pane-trigger" data-bind="click: clickTrigger, animatedStyle: {'marginRight': neighborMarginRight }">
                <i class="icon-adv-open" data-bind="css: { 'icon-adv-open': !active(), 'icon-adv-close': active() }"></i>
            </span>
        </div>
        <div class="lesson-pane" data-bind="animatedStyle: { 'width': width, 'right' : right }">
            <div class="uitabs">
                <ul data-bind="with: noteView">
                    <li class="activity colored"><a href="#activity">Activity</a></li>
                        <li style="display:none;" data-bind="visible: show"><a href="#enotes" id="aEnotes">eNotes</a></li>
                    <li style="display:none;" data-bind="visible: (!lessonList().IseNotesReadonly() && (allow() || hideENotes) && !hideGlossaryAndTranscript())"><a href="#glossary">Glossary</a></li>
                    <li style="display:none;" data-bind="visible: (!lessonList().IseNotesReadonly() && allow() && !hideGlossaryAndTranscript())"><a href="#transcript">Transcript</a></li>
                </ul>
                <div id="advancedIcon" class="">
                    <i class="icon-expand1" onclick="moveAdvanceTutoring()" data-bind="click: clickAdvanced, css: { 'icon-expand1': !advanced(), 'icon-shrink1': advanced() }"></i>
                </div>
                <div id="activity"></div>
                    <div id="enotes" style="display:none;" data-bind="with: noteView, visible: noteView().show">
                        <div id="AssessmenteNotesPanel" data-bind="if: (lessonList().IseNotesReadonly() && allow())">
                            <p data-bind="visible: lessonList().IseNotesReadonly" class="noNotesMessage">
                                Cannot add notes during assessments.
                            </p>
                            <div id="AssessmentLessonListPanel" data-bind="visible: lessonList().assessmentLessonListView">
                                <ul class="tree-widget tree-parent" data-bind="template: { name: 'tree-node-template', foreach: lessonList().lessonTree().Items }"></ul>
                            </div>
                            <div id="eNotesReadOnlyPanel" style="display:none;" data-bind="visible: lessonList().assessmentNotesView()">
                                <!-- image button for show lessons -->
                                <div data-bind="visible: ShowLessonsLink">
                                    <a id="ShowLessonList" class="uibtn uibtn-blue uibtn-arrow-previous" href="#" data-bind="click:  function() {lessonList().ShowLessonListView(); }">Show Lessons</a>
                                </div>
                                <div id="notepad-title" data-bind="html: lessonList().LessonName()"></div>
                                <p class="hasNotes" data-bind="ifnot: lessonList().hasNotes">
                                    No Notes are available for the selected lesson.<br />
                                    <br />
                                </p>
                                <div data-bind="if: lessonList().hasNotes">
                                    <div class="notepad-display-assessment" id="notepad-display-pane" no-translate="true">
                                        <!-- ko with: lessonList -->
                                        <ul class="notepad-inner" data-bind="foreach: Notes()">
                                            <li class="notepad-note note-m-in">
                                                <span data-bind="html: Content"></span>
                                            </li>
                                        </ul>
                                        <!-- /ko -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="eNotesEditPanel" style="display:none;" data-bind="visible: (!lessonList().IseNotesReadonly() && allow())">
                            <div id="notepad-title" data-bind="html: $root.stageView().Title"></div>
                            <div class="notepad-display" id="notepad-display-pane" no-translate="true" data-bind="style: { 'margin-bottom' : $root.lessonPaneView().advanced() ? '350px' : '275px' }">
                                <!-- ko with: noteList -->
                                <ul class="notepad-inner" data-bind="foreach: Notes">
                                    <li class="notepad-note note-m-in">
                                        <span class="eNotesSpanContent" data-bind="html: Content, click: $parents[1].editNote"></span>
                                        <div class="icon-go1" data-bind="visible: Bookmark, click: $parents[1].bookmark"></div>
                                    </li>
                                </ul>
                                <!-- /ko -->
                            </div>
                            <div class="notepad-form notepad-form-normal">
                                <div id="notepad-header">
                                    <span class="notepad-form-label">Add New Note</span>
                                        <span class="notepad-form-advanced" id="notepad-form-show-advanced" data-bind="click: $root.lessonPaneView().clickAdvanced, visible: !($root.lessonPaneView().advanced())">Advanced</span>
                                        <span class="notepad-form-advanced" id="notepad-form-hide-advanced" data-bind="click: $root.lessonPaneView().clickAdvanced, visible: $root.lessonPaneView().advanced">Hide Advanced</span>
                                </div>
                                <form no-translate="true">
                                    <textarea id="notepad-form-editor"></textarea>
                                    <input type="button" class="uibtn uibtn-sm" value="Cancel" data-bind="click: clear, visible: isEdit()" />
                                    <input type="button" class="uibtn uibtn-sm" value="Delete" data-bind="click: deleteNote, visible: isEdit()" />
                                    <input type="button" id="saveButton" class="uibtn uibtn-blue uibtn-sm" value="Save" data-bind="click: saveNote" />
                                </form>
                            </div>
                        </div>
                        <!-- ko if: loading -->
                        <div>
                            <p class="hasNotes">Loading Notes...</p>
                        </div>
                        <!-- /ko -->
                        <!-- ko if: !allow() && !loading() -->
                        <div>
                            <p class="hasNotes">Notes are not available during this assessment.</p>
                        </div>
                        <!-- /ko -->
                    </div>
                <div id="glossary">
                    <div class="tab-inner" data-bind="with: glossaryView().glossary">
                        
                        <span class="glossary-search-container">
                            <input type="search" data-bind="value: searchTerm, valueUpdate: 'afterkeydown', enterKey: search" class="uiinput" />
                        </span>
                        <span class="glossary-separator">
                            <span data-bind="text: displaySearch() ? 'Search Results' : 'Lesson Word List'"></span>
                            <span class="icon-remove1" data-bind="visible: displaySearch, click: closeSearch"></span>
                        </span>
                        <ul class="glossary-word-list" data-bind="foreach: WordList">
                            <li>
                                <span class="glossary-word-button" data-bind="click: $parent.play"><i class="icon-play1"></i></span>
                                <div class="glossary-text">
                                    <span class="glossary-word">
                                        <span data-bind="text: Word"></span>:
                                    </span>
                                    <span class="glossary-definition" data-bind="html: Definition"></span>
                                </div>
                            </li>
                        </ul>
                        <span class="vocabWords" data-bind="visible: WordList().length == 0, text: displaySearch() ? 'No results found' : 'This lesson has no vocabulary words'"></span>
                    </div>
                </div>
                <div id="transcript">
                    <div class="tab-inner">
                        <div class="transcript">
                            <!-- ko with: transcriptView -->
                            <!-- ko if: show -->
                            <ul class="transcript-inner" data-bind="foreach: TranscriptList">
                                <li class="transcript-section">
                                    Section <span data-bind="html: $data.Rank"></span>
                                    <ul class="transcript-section-content">
                                        <!-- ko foreach: $data.TimeBlocks -->
                                        <li class="transcript-timeblock">
                                            <span class="transcript-time" data-bind="text: $data.BeginTime"></span>
                                            <span class="transcript-text" data-bind="text: $data.Text"></span>
                                        </li>
                                        <!-- /ko -->
                                    </ul>
                                </li>
                            </ul>
                            <!-- /ko -->
                            <div data-bind="ifnot: show">
                                <div class="transcript-no-content">Transcripts are not available for this activity.</div>
                            </div>
                            <!-- /ko -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /ko -->
    <!-- ko if: $root.Impersonation -->
    <!-- ko template: { name: 'impersonation-template' } --><!-- /ko -->
    <!-- /ko -->

    <div id="wrap" data-bind="animatedStyle: { 'marginRight':  $root.lessonPaneView().neighborMarginRight }">
        <div data-bind="css: {'na-parent': $root.stageView().useLargePlayer()}">
            <div id="lessonInfo" data-bind="style: { width: !$root.stageView().useLargePlayer() ? $root.stageView().width : '' }, with: $root.stageView">
                <h1 id="lesson-title" data-bind="html: Title"></h1>
                <h2 id="activity-title" data-bind="html: ActivityName"></h2>
                <h2 id="activity-status-label" data-bind="visible: ActivityStatus"></h2>
                <h2 id="activity-status" data-bind="text: ActivityStatus"></h2>
                <span data-bind="visible: !$root.stageView().useLargePlayer()">
                    
<!-- ko with: $root.gradebar-->
<div class="gradebar-wrap" style="display:none;" data-bind="visible: Visible(), css : {'na-gradebar-wrap': $root.stageView().isNova()}">
    <div class="gradebar">
        <span class="grade" data-bind="html: GradeString, style:{color: (Passed() | Pending() | Processing()) ? 'white' : 'red'}"></span>
        <span class="attempt">
            Attempt <span data-bind="html: NumAttempts"></span>
        </span>
        <ul>
            <li data-bind="if: FeedbackAvailable, css: {'feedback-glow': FeedbackUnread, 'feedback-active': CurrentTab()=='feedback', 'feedback': !FeedbackUnread() & CurrentTab() != 'feedback' }">
                <a data-bind="click: getFeedback"></a>
            </li>
            
        </ul>
    </div>
    <div class="gradetabs" data-bind="if: CurrentTab">
        <div id="feedback" class="gradetab" data-bind="visible: CurrentTab() == 'feedback'" style="display: block;">
            <p data-bind="foreach: feedback">
                <span class="tag" data-bind="visible: tag, text: tag"></span>
                <span class="text" data-bind="text: text"></span>
                <!-- ko if: audio -->
                <audio controls style="display: block">
                    <source data-bind="attr: { src: audio }" />
                </audio>
                <!-- /ko -->
                <br />
                <span class="user" data-bind="text: '- ' + user"></span><span class="submitted">Submitted <span data-bind="text: date"></span></span>
            </p>
            <div data-bind="visible: feedback().length == 0">
                Loading...
            </div>
        </div>
        <div id="rubric" class="gradetab" data-bind="visible: CurrentTab() == 'rubric'" style="display: block;">
            <div class="rubric-header">
                <i class="icon-rubric-gray"></i>Rubric
            </div>
            <!-- ko foreach: rubricItems -->
            <div class="rubric-item ui-helper-clearfix">
                <div class="uikit-rubric-container">
                    <p class="uikit-rubric-title">Score</p>
                    <div class="uikit-rubric-content">
                        <p class="score" data-bind="text: score">4</p>
                    </div>
                    <div class="uikit-rubric-footer" data-bind="text: 'out of ' + maxScore">out of 6</div>
                </div>
                <div class="rubric-info">
                    <div class="rubric-title" data-bind="text: name"></div>
                    <!-- ko if: score > 0 -->
                    <div class="rubric-level" data-bind="text: score + ' - ' + scoreDescription"></div>
                    <div class="rubric-text" data-bind="text: description"></div>
                    <!-- /ko -->
                </div>
            </div>
            <!-- /ko -->
        </div>
    </div>
</div>
<!-- /ko -->

                </span>
            </div>

            <div id="viewer-frame" data-bind="style: { width: $root.stageView().width, height: $root.stageView().height }">
                <span data-bind="visible: $root.stageView().useLargePlayer()">
                    
<!-- ko with: $root.gradebar-->
<div class="gradebar-wrap" style="display:none;" data-bind="visible: Visible(), css : {'na-gradebar-wrap': $root.stageView().isNova()}">
    <div class="gradebar">
        <span class="grade" data-bind="html: GradeString, style:{color: (Passed() | Pending() | Processing()) ? 'white' : 'red'}"></span>
        <span class="attempt">
            Attempt <span data-bind="html: NumAttempts"></span>
        </span>
        <ul>
            <li data-bind="if: FeedbackAvailable, css: {'feedback-glow': FeedbackUnread, 'feedback-active': CurrentTab()=='feedback', 'feedback': !FeedbackUnread() & CurrentTab() != 'feedback' }">
                <a data-bind="click: getFeedback"></a>
            </li>
            
        </ul>
    </div>
    <div class="gradetabs" data-bind="if: CurrentTab">
        <div id="feedback" class="gradetab" data-bind="visible: CurrentTab() == 'feedback'" style="display: block;">
            <p data-bind="foreach: feedback">
                <span class="tag" data-bind="visible: tag, text: tag"></span>
                <span class="text" data-bind="text: text"></span>
                <!-- ko if: audio -->
                <audio controls style="display: block">
                    <source data-bind="attr: { src: audio }" />
                </audio>
                <!-- /ko -->
                <br />
                <span class="user" data-bind="text: '- ' + user"></span><span class="submitted">Submitted <span data-bind="text: date"></span></span>
            </p>
            <div data-bind="visible: feedback().length == 0">
                Loading...
            </div>
        </div>
        <div id="rubric" class="gradetab" data-bind="visible: CurrentTab() == 'rubric'" style="display: block;">
            <div class="rubric-header">
                <i class="icon-rubric-gray"></i>Rubric
            </div>
            <!-- ko foreach: rubricItems -->
            <div class="rubric-item ui-helper-clearfix">
                <div class="uikit-rubric-container">
                    <p class="uikit-rubric-title">Score</p>
                    <div class="uikit-rubric-content">
                        <p class="score" data-bind="text: score">4</p>
                    </div>
                    <div class="uikit-rubric-footer" data-bind="text: 'out of ' + maxScore">out of 6</div>
                </div>
                <div class="rubric-info">
                    <div class="rubric-title" data-bind="text: name"></div>
                    <!-- ko if: score > 0 -->
                    <div class="rubric-level" data-bind="text: score + ' - ' + scoreDescription"></div>
                    <div class="rubric-text" data-bind="text: description"></div>
                    <!-- /ko -->
                </div>
            </div>
            <!-- /ko -->
        </div>
    </div>
</div>
<!-- /ko -->

                </span>
                <ul class="toolbar" data-bind="with: $root.toolbar" no-translate="true">
                    <li class="tools-highlight1 highlighter" data-active="false" data-bind="visible: displayHighlights && !$root.stageView().isNova()">
                        <a href="#">Highlighter</a>
                        <ul>
                            <li class="tools-highlight highlighter yellow" data-color="yellow" title="Yellow" data-bind="click: HighlightYellow">
                                <a href="#">Yellow</a>
                            </li>
                            <li class="tools-highlight highlighter cyan" data-color="cyan" title="Cyan" data-bind="click: HighlightCyan">
                                <a href="#">Cyan</a>
                            </li>
                            <li class="tools-highlight highlighter magenta" data-color="magenta" title="Magenta" data-bind="click: HighlightMagenta">
                                <a href="#">Magenta</a>
                            </li>
                            <li class="tools-highlight highlighter green" data-color="green" title="Green" data-bind="click: HighlightGreen">
                                <a href="#">Greeen</a>
                            </li>
                            <li class="tools-highlight highlighter none" data-color="none" title="Clear" data-bind="click: ClearAllHighlights">
                                <a href="#">Clear Highlights</a>
                            </li>
                        </ul>
                    </li>
                    <li class="tools-headphones1 audio" data-active="false" data-bind="visible: showAudio">
                        <a href="#">Headphones</a>
                        
                        <ul>
                            <li class="tools-headphones2 audio stop" title="Stop" data-bind="click: StopAudio">
                                <a href="#">Stop Audio</a>
                            </li>
                            <li class="tools-headphones3 audio play" title="Play/Pause" data-bind="click: playAudio, css: {'pause': audioPlaying}">
                                <a href="#">Play Audio</a>
                            </li>
                            <li class="audio label">
                                <label>Speed</label>
                            </li>
                            <li class="tools-blank audio dropdown">
                                <select data-bind="options: $root.toolbar().audioSpeed, optionsText: 'name', optionsValue: 'speed', value: choosenSpeed"></select>
                            </li>
                        </ul>
                    </li>
                    <li id="tools-calc" data-active="false" data-bind="visible: $root.toolbar().tools().length > 0 , attr: { 'class': 'tools-' + ($root.toolbar().tools().length > 0 ? $root.toolbar().tools()[0].name():'calc1')}">
                        <a href="#">Calculators</a>
                        <ul data-bind="foreach: $root.toolbar().tools">
                            <li data-bind="attr: { 'class': 'tools-' + name(), title: displayname },  click: $parent.OpenCalculator, style: { backgroundPosition: offsetLeft() + 'px ' + offsetTop() + 'px', backgroundImage: 'url(' + image() + ')' }">
                                <a href="#" data-bind="text: displayname, attr: {href: link}"></a>
                            </li>
                        </ul>
                    </li>
                    <li id="tools-res" data-active="false" data-bind="visible: $root.toolbar().references().length > 0, attr: { 'class': 'tools-' + ($root.toolbar().references().length > 0 ? $root.toolbar().references()[0].name():'res2')}">
                        <a href="#">Resources</a>
                        <ul data-bind="foreach: $root.toolbar().references">
                            <li data-bind="attr: { 'class': 'tools-' + name(), title: displayname },   click: $parent.OpenReference, style: { backgroundPosition: offsetLeft() + 'px ' + offsetTop() + 'px', backgroundImage: 'url(' + image() + ')' }">
                                <a href="#" data-bind="text: displayname, attr: {href: link}"></a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <iframe allow="autoplay; fullscreen; microphone *" id="stageFrame" onload="iFrameNotify.notify({frame: window,message:'ChildFrameLoaded'});" name="stageFrame" frameborder="0" seamless scrolling="auto" data-bind="attr: { src: $root.stageView().Url }"></iframe>
            </div>
        </div>
    </div>
    
    <footer class="lightboxfoot">
        <div class="modalwrap" style="z-index:10000">
            <div id="blankNoteAlert" class="notify warning">
                <h5>Error</h5>
                <p>The note text cannot be blank.</p>
            </div>
        </div>
    </footer>
    <!-- ko with: $root.timeout -->
    <div class="modalwrap" id="inActivityMessage" data-bind="style: { display: running() ? 'block' : 'none' }" style="display:none;z-index:10000">
        <div class="notify warning" style="position: fixed; top: 50%; left:50%;height: 200px; width: 400px; margin: -150px 0px 0px -200px; display: block">
            <h5>Low Time</h5>
            <div id="timeLeft" class="timer" data-bind="text: display"></div>
            <p>You don't seem to be active. Are you still working?</p>
            <a id="timerLogout" title="Logout" class="uibtn uibtn-med" href="#" data-bind="click: chooseNo">No<br /><span class="small">Log me out.</span></a>
            <a id="timerStay" title="Stay" class="uibtn uibtn-blue uibtn-med uibtn-alt blueHighlight" href="#" data-bind="click: chooseYes">Yes<br /><span class="small">Keep me logged in.</span></a>
        </div>
    </div>
    <!-- /ko -->
    <div class="footer-wrapper">
        <div data-bind="text: this.NextActivityName"></div>
       
        <div class="mainfoot" data-bind="animatedStyle: { 'marginRight':  $root.lessonPaneView().neighborMarginRight }">
            <a href="#" class="footnav goLeft" data-bind="click: $root.getPreviousActivity, realEnable: $root.stageView().prevEnabled"><i class="nav-icon" data-bind="realEnable: $root.stageView().prevEnabled"></i>Previous Activity</a>
            
            <a href="#" class="footnav goRight" data-bind="click: function() { if(this.NextObjectType && this.NextObjectType.indexOf('A') === 0){ document.getElementById('aEnotes').click()}; $root.getNextActivity(); }, realEnable: $root.stageView().nextEnabled">Next Activity<i class="nav-icon" data-bind="realEnable: $root.stageView().nextEnabled"></i></a>
            <a href="#" style="display:none;" data-bind="click: $root.validateActivityForChat()" />

        </div>
    </div>
</body>
</html>
