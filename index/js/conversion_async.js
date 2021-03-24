(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this),ea="function"===typeof Symbol&&"symbol"===typeof Symbol("x"),l={},fa={};function p(a,b){var c=fa[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]} 
function u(a,b,c){if(b)a:{var d=a.split(".");a=1===d.length;var e=d[0],f;!a&&e in l?f=l:f=da;for(e=0;e<d.length-1;e++){var g=d[e];if(!(g in f))break a;f=f[g]}d=d[d.length-1];c=ea&&"es6"===c?f[d]:null;b=b(c);null!=b&&(a?ba(l,d,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===fa[d]&&(fa[d]=ea?da.Symbol(d):"$jscp$"+d),ba(f,fa[d],{configurable:!0,writable:!0,value:b})))}} 
u("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.g=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d=0;return b},"es6"); 
u("Symbol.iterator",function(a){if(a)return a;a=(0,l.Symbol)("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a},"es6"); 
function ha(a){a={next:a};a[p(l.Symbol,"iterator")]=function(){return this};return a} 
u("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}},"es6"); 
function ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[p(l.Symbol,"iterator")]=function(){return e};return e}u("Array.prototype.values",function(a){return a?a:function(){return ia(this,function(b,c){return c})}},"es8");u("Array.prototype.keys",function(a){return a?a:function(){return ia(this,function(b){return b})}},"es6"); 
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}},"es8");var x=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,ka=null;function la(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ja.test(a)?a:""}function ma(a){a.o=void 0;a.i=function(){return a.o?a.o:a.o=new a}}function na(a){return a};function oa(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};function pa(a,b){this.j=a===qa&&b||"";this.g=ra}var ra={},qa={};function sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},xa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};var ya;a:{var za=x.navigator;if(za){var Aa=za.userAgent;if(Aa){ya=Aa;break a}}ya=""};var Ba;function Ca(a,b){this.g=b===Da?a:""}Ca.prototype.toString=function(){return this.g+""};var Da={};function Ea(a){if(void 0===Ba){var b=null;var c=x.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:na,createScript:na,createScriptURL:na})}catch(d){x.console&&x.console.error(d.message)}Ba=b}else Ba=b}a=(b=Ba)?b.createScriptURL(a):a;return new Ca(a,Da)};function Fa(a,b){a.src=b instanceof Ca&&b.constructor===Ca?b.g:"type_error:TrustedResourceUrl";(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=x?b=la(b.document):(null===ka&&(ka=la(x.document)),b=ka);b&&a.setAttribute("nonce",b)};function Ga(a){Ga[" "](a);return a}Ga[" "]=function(){};function Ha(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};var Ia=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ja(a){var b=a.match(Ia);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function Ka(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var La=/#|$/; 
function Ma(a,b){var c=a.search(La),d=Ka(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}var Na=/[?&]($|#)/; 
function A(a,b,c){for(var d=a.search(La),e=0,f,g=[];0<=(f=Ka(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(Na,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function Oa(){if(!x.crypto)return Math.random();try{var a=new Uint32Array(1);x.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function Pa(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Ra=sa(function(){return xa(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Qa)||1E-4>Math.random()}),Sa=sa(function(){return-1!=ya.indexOf("MSIE")});function Qa(a){return-1!=ya.indexOf(a)} 
function D(a){return/^true$/.test(a)};var Ta=oa("0.20"),Ua=oa("0.002"),Va=oa("0.00"),Wa=oa("0.00"),Xa=D("true"),Ya=D("true"),Za=D("true"),$a=D("true"),ab=D("false");var bb=null;function cb(){if(null===bb){bb="";try{var a="";try{a=x.top.location.hash}catch(c){a=x.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);bb=b?b[1]:""}}catch(c){}}return bb} 
function E(a,b,c){var d=F;if(c?d.g.hasOwnProperty(c)&&""==d.g[c]:1){var e;e=(e=cb())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!Sa()&&!Ra()&&(e=Math.random(),e<b)){e=Oa();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.g.hasOwnProperty(c)&&(d.g[c]=a):d.j[a]=!0)}}function G(a){var b=F;return b.g.hasOwnProperty(a)?b.g[a]:""}function db(){var a=F,b=[];Pa(a.j,function(c,d){b.push(d)});Pa(a.g,function(c){""!=c&&b.push(c)});return b};var eb={G:2,N:13,M:14,J:16,I:17,H:18},F=null;function fb(){return!!F&&"592230571"==G(16)}function I(){return!!F&&("2505059651"==G(18)||"2505059650"==G(18))};var gb={};function J(a){gb.TAGGING=gb.TAGGING||[];gb.TAGGING[a]=!0};function hb(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&J(4):J(5);return b}function ib(a,b){if(a&&hb(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]}function jb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};var K=window,L=document;Object.freeze({async:1,nonce:1,onerror:1,onload:1,src:1,type:1});function kb(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.j=function(b){a[1933]=b}}ma(kb);function M(a){var b=void 0===b?!1:b;return kb.i().g(a,b)};var N=[];function O(){var a={};var b=K.google_tag_data;K.google_tag_data=void 0===b?a:b;a=K.google_tag_data;a.ics||(a.ics={entries:{},set:lb,update:mb,addListener:nb,notifyListeners:ob,active:!1,usedDefault:!1});return a.ics} 
function lb(a,b,c,d,e,f){var g=O();g.active=!0;g.usedDefault=!0;if(void 0!=b){var k=g.entries;g=k[a]||{};var h=g.region;c=c&&"string"==typeof c?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||c===e||(c===d?h!==e:!c&&!h)){e=!!(f&&0<f&&void 0===g.update);var m={region:c,initial:"granted"===b,update:g.update,quiet:e};if(""!==d||!1!==g.initial)k[a]=m;e&&K.setTimeout(function(){k[a]===m&&m.quiet&&(m.quiet=!1,pb(a),ob(),J(2))},f)}}} 
function mb(a,b){var c=O();c.active=!0;if(void 0!=b){var d=P(a);c=c.entries;c=c[a]=c[a]||{};c.update="granted"===b;b=P(a);c.quiet?(c.quiet=!1,pb(a)):b!==d&&pb(a)}}function nb(a,b){N.push({u:a,A:b})}function pb(a){for(var b=0;b<N.length;++b){var c=N[b];hb(c.u)&&-1!==c.u.indexOf(a)&&(c.v=!0)}}function ob(a){for(var b=0;b<N.length;++b){var c=N[b];if(c.v){c.v=!1;try{c.A({O:a})}catch(d){}}}}function P(a){a=O().entries[a]||{};return void 0!==a.update?a.update:void 0!==a.initial?a.initial:void 0} 
function qb(a){return!(O().entries[a]||{}).quiet}function rb(a,b){O().addListener(a,b)}function sb(a){function b(){for(var e=0;e<c.length;e++)if(!qb(c[e]))return!0;return!1}var c=["ad_storage"];if(b()){var d=!1;rb(c,function(e){d||b()||(d=!0,a(e))})}else a({})}function tb(a){if(!1===P("ad_storage")){var b=!1;rb(["ad_storage"],function(c){!b&&P("ad_storage")&&(a(c),b=!0)})}};function Q(a){if(!M(1937))return!0;try{return Ga(a.cookie),!0}catch(b){return!1}};function ub(a,b,c,d){if(vb(d)){d=[];b=String(b||(Q(document)?document.cookie:"")).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].replace(/^\s*|\s*$/g,"");g&&g==a&&((f=f.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&c&&(f=decodeURIComponent(f)),d.push(f))}a=d}else a=[];return a}function wb(a,b,c,d){var e=Q(document)?document.cookie:"",f=document;Q(f)&&(f.cookie=a);a=Q(document)?document.cookie:"";return e!=a||void 0!=c&&0<=ub(b,a,!1,d).indexOf(c)} 
function xb(a,b,c){function d(r,q,y){if(null==y)return delete g[q],r;g[q]=y;return r+"; "+q+"="+y}function e(r,q){if(null==q)return delete g[q],r;g[q]=!0;return r+"; "+q}if(vb(c.m)){if(void 0==b)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=yb(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var k=c.expires.toUTCString();else null!=c.expires&&(k=c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.P);f=d(f,"samesite",c.R);c.S&& 
(f=e(f,"secure"));k=c.domain;if("auto"===k){k=zb();for(var h=0;h<k.length;++h){var m="none"!==k[h]?k[h]:void 0,n=d(f,"domain",m);n=e(n,c.flags);if(!Ab(m,c.path)&&wb(n,a,b,c.m))break}}else k&&"none"!==k&&(f=d(f,"domain",k)),f=e(f,c.flags),Ab(k,c.path)||wb(f,a,b,c.m)}}function Bb(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");xb(a,b,c)}function yb(a){a&&1200<a.length&&(a=a.substring(0,1200));return a}var Cb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Db=/(^|\.)doubleclick\.net$/i; 
function Ab(a,b){return Db.test(document.location.hostname)||"/"===b&&Cb.test(a)}function zb(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=document.location.hostname;Db.test(b)||Cb.test(b)||a.push("none");return a}function vb(a){if(!(M(1933)&&a&&M(1933)&&O().active))return!0;if(!qb(a))return!1;a=P(a);return null==a?!0:!!a};function Eb(a,b){var c,d=a.B;null==d&&(d=7776E3);0!==d&&(c=new Date((b||(new Date).getTime())+1E3*d));return{path:a.path,domain:a.domain,flags:a.flags,encode:!0,expires:c}};function Fb(a){var b=[],c=L.cookie.split(";");a=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push({s:e[1],value:e[2],timestamp:Number(e[2].split(".")[1])||0})}b.sort(function(f,g){return g.timestamp-f.timestamp});return b} 
function R(a,b){a=Fb(a);var c={};if(!a||!a.length)return c;for(var d=0;d<a.length;d++){var e=a[d].value.split(".");if(!("1"!=e[0]||b&&3>e.length||!b&&3!==e.length)&&Number(e[1])){c[a[d].s]||(c[a[d].s]=[]);var f={version:e[0],timestamp:1E3*Number(e[1]),h:e[2]};b&&3<e.length&&(f.labels=e.slice(3));c[a[d].s].push(f)}}return c};var Gb=/:[0-9]+$/;function Hb(a,b){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(decodeURIComponent(d[0]).replace(/\+/g," ")===b)return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g," ")}} 
function Ib(a,b){var c="query";if("protocol"===c||"port"===c)a.protocol=Jb(a.protocol)||Jb(K.location.protocol);"port"===c?a.port=String(Number(a.hostname?a.port:K.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===c&&(a.hostname=(a.hostname||K.location.hostname).replace(Gb,"").toLowerCase());var d=Jb(a.protocol);c&&(c=String(c).toLowerCase());switch(c){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,b));a=b;break;case "protocol":a= 
d;break;case "host":a=a.hostname.replace(Gb,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==d?80:"https"==d?443:""));break;case "path":a.pathname||a.hostname||J(1);a="/"==a.pathname.charAt(0)?a.pathname:"/"+a.pathname;a=a.split("/");a:if(b=a[a.length-1],c=[],Array.prototype.indexOf)b=c.indexOf(b),b="number"==typeof b?b:-1;else{for(d=0;d<c.length;d++)if(c[d]===b){b=d;break a}b=-1}0<=b&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");b&&(a=Hb(a,b)); 
break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a}function Jb(a){return a?a.replace(":","").toLowerCase():""};var Kb={};var Lb=/^\w+$/,Mb=/^[\w-]+$/,Nb=/^~?[\w-]+$/,Ob={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"};function S(){if(!M(1933)||!M(1933)||!O().active)return!0;var a=P("ad_storage");return null==a?!0:!!a}function Qb(a,b){qb("ad_storage")?S()?a():tb(a):b?J(3):sb(function(){Qb(a,!0)})}function Rb(a){return Sb(a).map(function(b){return b.h})} 
function Sb(a){var b=[];if(!Q(L)||!L.cookie)return b;a=ub(a,L.cookie,void 0,"ad_storage");if(!a||0==a.length)return b;for(var c={},d=0;d<a.length;c={l:c.l},d++){var e=Tb(a[d]);if(null!=e){var f=e;e=f.version;c.l=f.h;var g=f.timestamp;f=f.labels;var k=ib(b,function(h){return function(m){return m.h===h.l}}(c));k?(k.timestamp=Math.max(k.timestamp,g),k.labels=Ub(k.labels,f||[])):b.push({version:e,h:c.l,timestamp:g,labels:f})}}b.sort(function(h,m){return m.timestamp-h.timestamp});return Vb(b)} 
function Ub(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(a=0;a<b.length;a++)c[b[a]]||d.push(b[a]);return d}function Wb(a){return a&&"string"==typeof a&&a.match(Lb)?a:"_gcl"} 
function Xb(){var a=K.location.href,b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||J(1),c="/"+c);a=b.hostname.replace(Gb,"");var d={href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port};b=Ib(d,"gclid");c=Ib(d,"gclsrc");a=Ib(d,"wbraid");var e=Ib(d,"dclid");b&&c&&a||(d=d.hash.replace("#",""),b=b||Hb(d,"gclid"),c=c||Hb(d,"gclsrc"),a=a||Hb(d,"wbraid"));return Yb(b,c,e,a)} 
function Yb(a,b,c,d){function e(g,k){f[k]||(f[k]=[]);f[k].push(g)}var f={};f.gclid=a;f.gclsrc=b;f.dclid=c;void 0!==d&&Mb.test(d)&&(f.gbraid=d,e(d,"gb"));if(void 0!==a&&a.match(Mb))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return f}function Zb(){var a={},b=Xb();Qb(function(){$b(b,a)})} 
function $b(a,b,c,d){function e(n){n=["GCL",m,n];0<d.length&&n.push(d.join("."));return n.join(".")}function f(n,r){if(n=ac(n,g))Bb(n,r,k),h=!0}b=b||{};d=d||[];var g=Wb(b.prefix);c=c||(new Date).getTime();var k=Eb(b,c);k.m="ad_storage";var h=!1,m=Math.round(c/1E3);a.aw&&(!0===b.T?f("aw",e("~"+a.aw[0])):f("aw",e(a.aw[0])));a.dc&&f("dc",e(a.dc[0]));a.gf&&f("gf",e(a.gf[0]));a.ha&&f("ha",e(a.ha[0]));a.gp&&f("gp",e(a.gp[0]));(void 0==Kb.enable_gbraid_cookie_write?0:Kb.enable_gbraid_cookie_write)&&!h&& 
a.gb&&f("gb",e(a.gb[0]))}function ac(a,b){a=Ob[a];if(void 0!==a)return b+a}function bc(a){return 0!==cc(a.split(".")).length?1E3*(Number(a.split(".")[1])||0):0}function Tb(a){a=cc(a.split("."));return 0===a.length?null:{version:a[0],h:a[2],timestamp:1E3*(Number(a[1])||0),labels:a.slice(3)}}function cc(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Nb.test(a[2])?[]:a}function Vb(a){return a.filter(function(b){return Nb.test(b.h)})} 
function dc(){var a=["aw"],b={};if(Q(L)){for(var c=Wb(b.prefix),d={},e=0;e<a.length;e++)Ob[a[e]]&&(d[a[e]]=Ob[a[e]]);Qb(function(){jb(d,function(f,g){g=ub(c+g,L.cookie,void 0,"ad_storage");g.sort(function(n,r){return bc(r)-bc(n)});if(g.length){var k=g[0];g=bc(k);var h=0!==cc(k.split(".")).length?k.split(".").slice(3):[],m={};k=0!==cc(k.split(".")).length?k.split(".")[2]:void 0;m[f]=[k];$b(m,b,g,h)}})})}} 
function ec(a,b,c){var d=[];c=c||{};if(!S())return d;var e=Sb(a);if(!e.length)return d;for(var f=0;f<e.length;f++)-1===(e[f].labels||[]).indexOf(b)?d.push(0):d.push(1);1!==d[0]&&(f=e[0],e=e[0].timestamp,b=[f.version,Math.round(e/1E3),f.h].concat(f.labels||[],[b]).join("."),c=Eb(c,e),c.m="ad_storage",Bb(a,b,c));return d}function fc(a,b){b=Wb(b);a=ac(a,b);if(!a)return 0;a=Sb(a);for(var c=b=0;c<a.length;c++)b=Math.max(b,a[c].timestamp);return b} 
function gc(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var hc=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,ic=/^~?[\w-]+(?:\.~?[\w-]+)*$/,jc=/^\d+\.fls\.doubleclick\.net$/,kc=/;gac=([^;?]+)/,lc=/;gacgb=([^;?]+)/,mc=/;gclaw=([^;?]+)/,nc=/;gclgb=([^;?]+)/; 
function oc(a,b,c){if(jc.test(a.location.host))return(b=a.location.href.match(c))&&2==b.length&&b[1].match(hc)?decodeURIComponent(b[1]):"";a=[];for(var d in b){c=[];for(var e=b[d],f=0;f<e.length;f++)c.push(e[f].h);a.push(d+":"+c.join(","))}return 0<a.length?a.join(";"):""}function pc(a,b){if(!I())return"";var c=S()?R("_gac_gb",!0):{},d=[],e=!1,f;for(f in c)c=ec("_gac_gb_"+f,a,b),e=e||0!==c.length&&c.some(function(g){return 1===g}),d.push(f+":"+c.join("."));return e?d.join(";"):""} 
function qc(a,b,c,d){if(jc.test(a.location.host)){if((a=a.location.href.match(d))&&2==a.length&&a[1].match(ic))return[{h:a[1]}]}else return Sb((b||"_gcl")+c);return[]}function rc(a,b){return qc(a,b,"_aw",mc).map(function(c){return c.h}).join(".")}function sc(a,b){return I()?qc(a,b,"_gb",nc).map(function(c){return c.h}).join("."):""}function tc(a){0!==Rb("_gcl_aw").length||a&&0!==Rb(a+"_aw").length||(Zb(),dc())} 
function uc(a,b){if(!I())return"";a=ec((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===a.length||a.every(function(c){return 0===c})?"":a.join(".")};function vc(a){var b=x.performance;return b&&b.timing&&b.timing[a]||0};var wc={K:0,C:1,L:2,F:3,D:4};function T(){this.g={}}function xc(a,b,c){"number"===typeof c&&0<c&&(a.g[b]=Math.round(c))}function yc(a){var b=T.i();var c=void 0===c?x:c;c=c.performance;xc(b,a,c&&c.now?c.now():null)}function zc(){function a(){return xc(b,0,vc("loadEventStart")-vc("navigationStart"))}var b=T.i();0!=vc("loadEventStart")?a():window.addEventListener("load",a)}function Ac(a,b){b.google_tag_manager&&b.google_tag_manager._li&&(b=b.google_tag_manager._li,xc(a,4,b.cbt),xc(a,3,b.cst))} 
function Bc(){var a=T.i();return p(Object,"values").call(Object,wc).map(function(b){return[b,a.g[b]||0]})}ma(T);function Cc(a,b,c){a=Dc(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function Dc(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var Ec={},Fc=null; 
function Gc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;void 0===a&&(a=0);if(!Fc)for(Fc={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===Fc[k]&&(Fc[k]=g)}}a=Ec[a];c=[];for(d=0;d<b.length;d+=3){var h=b[d],m=(e=d+1<b.length)?b[d+1]:0;k=(f=d+2<b.length)?b[d+2]:0;g=h>>2;h=(h&3)<<4|m>> 
4;m=(m&15)<<2|k>>6;k&=63;f||(k=64,e||(m=64));c.push(a[g],a[h],a[m]||"",a[k]||"")}return c.join("")};function Hc(a,b,c,d){var e=Ma(c,"fmt");if(d){var f=Ma(c,"random"),g=Ma(c,"label")||"";if(!f)return!1;f=Gc(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")));if(!Cc(a,f,d))return!1}e&&4!=e&&(c=A(c,"rfmt",e));c=A(c,"fmt",4);e=Ha("SCRIPT");Fa(e,Ea(c));e.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(e);return!0};var Ic=D("false");function Jc(){if("function"==typeof K.__uspapi){var a="";try{K.__uspapi("getUSPData",1,function(b,c){c&&b&&(b=b.uspString)&&/^[\da-zA-Z-]{1,20}$/.test(b)&&(a=b)})}catch(b){}return a}};var Kc={id:!0,origin:!0,destination:!0,start_date:!0,end_date:!0,location_id:!0},Lc="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "); 
function Mc(a,b){var c=a;return function(){--c;0>=c&&b()}}function U(a){return null!=a?encodeURIComponent(String(a)):""}function Nc(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""}function V(a,b){b=U(b);return""!=b&&(a=U(a),""!=a)?"&".concat(a,"=",b):""}function Oc(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function Pc(a){if(!a||"object"!=typeof a||"function"==typeof a.join)return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&"function"==typeof d.join){for(var e=[],f=0;f<d.length;++f){var g=Oc(d[f]);null!=g&&e.push(g)}d=0==e.length?null:e.join(",")}else d=Oc(d);(e=Oc(c))&&null!=d&&b.push(e+"="+d)}return b.join(";")}function W(a){return"number"!=typeof a&&"string"!=typeof a?"":U(a.toString())} 
function Qc(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="",d="";b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix)&&"_gcl"!=b.google_gcl_cookie_prefix&&(d=b.google_gcl_cookie_prefix);var e={};b.google_gcl_cookie_domain&&(e.domain=b.google_gcl_cookie_domain);b.google_gcl_cookie_flags&&(e.flags=b.google_gcl_cookie_flags);b.google_gcl_cookie_max_age_seconds&& 
(e.B=b.google_gcl_cookie_max_age_seconds);b.google_gcl_cookie_path&&(e.path=b.google_gcl_cookie_path);d&&(e.prefix=d);var f=d;if(I())if(jc.test(a.location.host))f=!(mc.test(a.location.href)||kc.test(a.location.href));else{var g=Math.max(fc("aw",f),gc(S()?R():{}));f=Math.max(fc("gb",f),gc(S()?R("_gac_gb",!0):{}))>g}else f=!1;if(f){c=sc(a,d||void 0);b=b.google_conversion_label;f=uc(b,e);c=V("gclgb",c)+(f?V("mcov",f):"");if(d)return c;a=I()?oc(a,S()?R("_gac_gb",!0):{},lc):"";e=pc(b,e);return c+(a?V("gacgb", 
a):"")+(e?V("gacmcov",e):"")}if(d)return c=rc(a,d),V("gclaw",c);(e=rc(a))&&(c=V("gclaw",e));a=oc(a,S()?R():{},kc);return c+(a?V("gac",a):"")}function Rc(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(void 0==a||""==a)return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function Sc(a,b,c,d,e,f){f=void 0===f?null:f;var g="https://",k="landing"===d.google_conversion_type?"/extclk":"/";switch(e){default:return"";case 2:case 3:var h="googleads.g.doubleclick.net/";var m="pagead/viewthroughconversion/";break;case 1:h="www.google.com/";m="pagead/1p-conversion/";break;case 0:h=d.google_conversion_domain||"www.googleadservices.com/";m="pagead/conversion/";break;case 4:h="www.google.com/",m="pagead/privacysandbox/conversion/"}Xa&&d.google_transport_url&&(h=d.google_transport_url); 
"/"!==h[h.length-1]&&(h+="/");if(0===h.indexOf("http://")||0===h.indexOf("https://"))g="";g=[g,h,m,U(d.google_conversion_id),k,"?random=",U(d.google_conversion_time)].join("");var n=f;n=void 0===n?null:n;f=V("cv",d.google_conversion_js_version);h=V("fst",d.google_conversion_first_time);m=V("num",d.google_conversion_snippets);k=V("fmt",d.google_conversion_format);var r=d.google_remarketing_only?V("userId",d.google_user_id):"";var q=d.google_tag_for_child_directed_treatment;q=null==q||0!=q&&1!=q?"": 
V("tfcd",q);var y=d.google_tag_for_under_age_of_consent;y=null==y||0!=y&&1!=y?"":V("tfua",y);var ta=d.google_allow_ad_personalization_signals;ta=!1===ta?V("npa",1):!0===ta?V("npa",0):"";var ua=d.google_restricted_data_processing;ua=Za?!0===ua?V("rdp",1):!1===ua?V("rdp",0):"":"";var ad=V("value",d.google_conversion_value),bd=V("currency_code",d.google_conversion_currency),cd=V("label",d.google_conversion_label),dd=V("oid",d.google_conversion_order_id),ed=V("bg",d.google_conversion_color);a:{var v= 
d.google_conversion_language;if(null!=v){v=v.toString();if(2==v.length){v=V("hl",v);break a}if(5==v.length){v=V("hl",v.substring(0,2))+V("gl",v.substring(3,5));break a}}v=""}var fd=V("guid","ON"),gd=!d.google_conversion_domain&&"GooglemKTybQhCsO"in x&&"function"==typeof x.GooglemKTybQhCsO?V("resp","GooglemKTybQhCsO"):"",hd=V("disvt",d.google_disable_viewthrough),id=V("eid",db().join());var Z=d.google_conversion_date;var t=[];if(a){var C=a.screen;C&&(t.push(V("u_h",C.height)),t.push(V("u_w",C.width)), 
t.push(V("u_ah",C.availHeight)),t.push(V("u_aw",C.availWidth)),t.push(V("u_cd",C.colorDepth)));a.history&&t.push(V("u_his",a.history.length))}Z&&"function"==typeof Z.getTimezoneOffset&&t.push(V("u_tz",-Z.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&t.push(V("u_java",b.javaEnabled())),b.plugins&&t.push(V("u_nplug",b.plugins.length)),b.mimeTypes&&t.push(V("u_nmime",b.mimeTypes.length)));Z=t.join("");t=V("gtm",d.google_gtm);b=b&&b.sendBeacon?V("sendb","1"):"";C=Tc();var kd=V("ig",/googleadservices\.com/.test("www.googleadservices.com")? 
1:0),B=n;B=void 0===B?null:B;n=Pc(d.google_custom_params);B=Pc(B);n=n.concat(0<n.length&&0<B.length?";":"",B);n=""==n?"":"&".concat("data=",encodeURIComponent(n));B=Qc(c,d);var Pb=d.google_conversion_page_url,ld=d.google_conversion_referrer_url,va="";if(c){if(a.top==a)var w=0;else{var H=a.location.ancestorOrigins;if(H)w=H[H.length-1]==a.location.origin?1:2;else{H=a.top;try{var z;if(z=!!H&&null!=H.location.href)c:{try{Ga(H.foo);z=!0;break c}catch(md){}z=!1}w=z}catch(md){w=!1}w=w?1:2}}z=Pb?Pb:1==w? 
a.top.location.href:a.location.href;va+=V("frm",w);va+=V("url",Nc(z));va+=V("ref",Nc(ld||c.referrer))}a=[f,h,m,k,r,q,y,ta,ua,ad,bd,cd,dd,ed,v,fd,gd,hd,id,Z,t,b,C,kd,n,B,va,Rc(c),Uc(d.google_additional_params),Uc(d.google_remarketing_only?{}:d.google_additional_conversion_params),"&hn="+U("www.googleadservices.com"),Vc(a)].join("");c=cb();a+=0<c.length?"&debug_experiment_id="+c:"";if(d.google_remarketing_only||d.google_conversion_domain)d=a;else{c=[V("mid",d.google_conversion_merchant_id),V("fcntr",d.google_basket_feed_country), 
V("flng",d.google_basket_feed_language),V("dscnt",d.google_basket_discount),V("bttype",d.google_basket_transaction_type)].join("");if(d)if(d=d.google_conversion_items){w=[];z=0;for(f=d.length;z<f;z++)h=d[z],m=[],h&&(m.push(W(h.value)),m.push(W(h.quantity)),m.push(W(h.item_id)),m.push(W(h.start_date)),m.push(W(h.end_date)),w.push("("+m.join("*")+")"));d=0<w.length?"&item="+w.join(""):""}else d="";else d="";d=[a,c,d].join("");d=4E3<d.length?[a,V("item","elngth")].join(""):d}g+=d;1===e?g+=[V("gcp",1), 
V("sscte",1),V("ct_cookie_present",1)].join(""):3==e&&(g+=V("gcp",1),g+=V("ct_cookie_present",1));Ya&&(e=Jc(),void 0!==e&&(g+=V("us_privacy",e||"error")));return g}function Wc(a){if(!Ic){var b=Ha("IFRAME");b.style.display="none";b.src="https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";a.body.appendChild(b)}}function Xc(){return new Image} 
function Yc(a,b,c,d,e,f){var g=c.onload_callback,k;e&&g&&g.call?k=g:k=function(){};d+=V("async","1");e=c.google_gtm_url_processor;"function"==typeof e&&(d=e(d));g=(e=c.opt_image_generator)&&e.call;if(!(f=g||!f)){if(c.google_conversion_domain)var h=!1;else try{h=Hc(a,b,d,k)}catch(m){h=!1}f=!h}f&&(a=Xc,g&&(a=e),a=a(),a.src=d,a.onload=k)} 
function Zc(a,b){F&&"376635471"==G(2)&&("complete"===b.readyState?Wc(b):a.addEventListener?a.addEventListener("load",function(){Wc(b)}):a.attachEvent("onload",function(){Wc(b)}))} 
function $c(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);return!0}function jd(a,b){function c(f){d[f]=b&&null!=b[f]?b[f]:a[f]}for(var d={},e=0;e<Lc.length;e++)c(Lc[e]);c("onload_callback");return d} 
function nd(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=void 0;d.hasOwnProperty("google_business_vertical")?(e=d.google_business_vertical,b[e]=b[e]||{google_business_vertical:e}):(e="",Object.prototype.hasOwnProperty.call(b,e)||(b[e]={}));e=b[e];for(var f=p(Object,"keys").call(Object,d).filter(function(h){return Kc.hasOwnProperty(h)}),g=0;g<f.length;g++){var k=f[g];k in e||(e[k]=[]);e[k].push(d[k])}}return p(Object,"values").call(Object,b)} 
function Tc(){var a="";fb()&&(a=Bc().map(function(b){return b.join("-")}).join("_"));return V("li",a)}function Vc(a){if(!$a||!a.__gsaExp||!a.__gsaExp.id)return"";a=a.__gsaExp.id;if("function"!=typeof a)return"";try{var b=Number(a());return isNaN(b)?"":V("gsaexp",b)}catch(c){return""}}function Uc(a){if(!a)return"";var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=V(c,a[c]));return b};var od=!1,pd=document.currentScript&&document.currentScript.src||""; 
function qd(a,b,c){try{if(!od&&(od=!0,!c.google_gtm)){var d=!1,e=a.location.search.split("?")[1];e&&0<=wa(e.split("&"),"gtm_debug=x")&&(d=!0);d||0!==b.referrer.indexOf("https://tagassistant.google.com/")||(d=!0);!d&&0<=wa(b.cookie.split("; "),"__TAG_ASSISTANT=x")&&(d=!0);!d&&a.__TAG_ASSISTANT_API&&(d=!0);if(d){if(!a["google.tagmanager.debugui2.queue"]){a["google.tagmanager.debugui2.queue"]=[];var f=new pa(qa,"https://www.googletagmanager.com/debug/bootstrap"),g=Ea(f instanceof pa&&f.constructor=== 
pa&&f.g===ra?f.j:"type_error:Const"),k=b.createElement("script");Fa(k,g);var h=b.getElementsByTagName("script")[0];h&&h.parentNode&&h.parentNode.insertBefore(k,h)}a["google.tagmanager.debugui2.queue"].push({messageType:"LEGACY_CONTAINER_STARTING",data:{id:"AW-"+(c.google_conversion_id||""),scriptSource:pd}})}}}catch(m){}};var rd=!1;function sd(a,b){a.onload_callback&&"function"==typeof a.onload_callback.call?a.onload_callback=Mc(b,a.onload_callback):a.onload_callback=function(){}} 
function td(a,b,c,d){qd(a,c,d||a);if(!d)return!1;fb()&&(yc(2),d.google_gtm&&Ac(T.i(),a));var e=!1;if(3!=d.google_conversion_format)return!1;try{if($c(d)){d.google_remarketing_only&&d.google_enable_display_cookie_match&&!Ic&&F&&E(["376635470","376635471"],Ta,2);d.google_remarketing_only&&!d.google_conversion_domain&&F&&E(["759238990","759238991"],Wa,13);!d.google_remarketing_only||d.google_conversion_domain||F&&("759248991"==G(14)||"759248990"==G(14))||F&&E(["759248990","759248991"],Va,14);!1!==d.google_conversion_linker&& 
(F&&E(["2505059650","2505059651"],ab?1:0,18),d.google_gtm||tc(d.google_gcl_cookie_prefix));if(1==d.google_remarketing_only&&null!=d.google_gtag_event_data&&null!=d.google_gtag_event_data.items&&d.google_gtag_event_data.items.constructor===Array&&0<d.google_gtag_event_data.items.length)ud(a,b,c,d);else{var f=!1;p("www.googleadservices.com","endsWith").call("www.googleadservices.com","google.com")&&(f=!0);var g=d.google_additional_params;g&&g.dg&&(f="e"===g.dg);g=function(){var h=d.google_gtm_experiments;if(h&&h.capi&& 
!d.google_transport_url){if(h=!rd){h=c;var m=p("www.googleadservices.com","endsWith").call("www.googleadservices.com","google.com")?"":"A7iusd6XVbb7SOF83vXQdziVdvBy4R7Bh2tuVErLbKXxemIjQH20g7jWaz48nG08Cd6zfylzuF+H+1s9S3JodAEAAACOeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d";h=void 0===h?window.document:h;if(m&&h.head){var n=document.createElement("meta");n.httpEquiv="origin-trial";n.content=m;h.head.appendChild(n);h=n}else h=null;h=!h}h?h=!1:(rd=!0,h=(h=c.featurePolicy)&&"function"===typeof h.features?0<=h.features().indexOf("conversion-measurement"):!1)}else h=!1;h&&(h=d.google_additional_conversion_params|| 
{},h.capi="1",d.google_additional_conversion_params=h,Yc(a,c,d,Sc(a,b,c,d,4),!1,!1))};var k=function(h){Yc(a,c,d,Sc(a,b,c,d,h),!0,!0)};d.google_remarketing_only?k(2):f?(sd(d,2),g(),k(1),k(3)):(g(),k(0))}d.google_remarketing_only&&d.google_enable_display_cookie_match&&Zc(a,c);e=!0}}catch(h){}return e}function ud(a,b,c,d){var e=nd(d.google_gtag_event_data.items);sd(d,e.length);for(var f=0;f<e.length;f++)Yc(a,c,d,Sc(a,b,c,d,2,e[f]),!0,!0),d.google_conversion_time=d.google_conversion_time+1};F=new function(){var a=[],b=0,c;for(c in eb)a[b++]=eb[c];this.j={};this.g={};a=a||[];b=0;for(c=a.length;b<c;++b)this.g[a[b]]=""};E(["592230570","592230571"],Ua,16);fb()&&(yc(1),zc()); 
function vd(a,b,c){function d(m,n){var r=new Image;r.onload=m;r.src=n}function e(){--f;if(0>=f){var m=Dc(a,!1),n=m[b];n&&(delete m[b],(m=n[0])&&m.call&&m())}}var f=c.length+1;if(2==c.length){var g=c[0],k=c[1];0<=Ka(g,0,"rmt_tld",g.search(La))&&0<=Ka(g,0,"ipr",g.search(La))&&!k.match(Ia)[6]&&(k+=Ja(g),c[1]=A(k,"rmt_tld","1"))}for(g=0;g<c.length;g++){k=c[g];var h=Ma(k,"fmt");switch(parseInt(h,10)){case 1:case 2:(h=a.document.getElementById("goog_conv_iframe"))&&!h.src?(h.onload=e,h.src=k):d(e,k);break; 
case 4:Hc(a,a.document,k,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){e();break}else k=A(k,"sendb",2);k=A(k,"fmt",3);default:d(e,k)}}e()}var wd=["GooglemKTybQhCsO"],X=x;wd[0]in X||"undefined"==typeof X.execScript||X.execScript("var "+wd[0]);for(var Y;wd.length&&(Y=wd.shift());)wd.length||void 0===vd?X[Y]&&X[Y]!==Object.prototype[Y]?X=X[Y]:X=X[Y]={}:X[Y]=vd; 
window.google_trackConversion=function(a){var b=window,c=navigator,d=document;a=jd(b,a);a.google_conversion_format=3;var e=!!a.google_gtm;kb.i().j(e);return td(b,c,d,a)};}).call(this);
