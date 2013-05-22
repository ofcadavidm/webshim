(function(){var e,t,n=Function.prototype.call,i=Array.prototype,a=Object.prototype,r=i.slice;if(Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=r.call(arguments,1),i=function(){if(this instanceof i){var a=function(){};a.prototype=t.prototype;var o=new a,s=t.apply(o,n.concat(r.call(arguments)));return null!==s&&Object(s)===s?s:o}return t.apply(e,n.concat(r.call(arguments)))};return i}),t=n.bind(a.toString),e=n.bind(a.hasOwnProperty),Array.isArray||(Array.isArray=function(e){return"[object Array]"==t(e)}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var n=y(this),i=arguments[1],a=0,r=n.length>>>0;if("[object Function]"!=t(e))throw new TypeError;for(;r>a;)a in n&&e.call(i,n[a],a,n),a++}),Array.prototype.map||(Array.prototype.map=function(e){var n=y(this),i=n.length>>>0,a=Array(i),r=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var o=0;i>o;o++)o in n&&(a[o]=e.call(r,n[o],o,n));return a}),Array.prototype.filter||(Array.prototype.filter=function(e){var n=y(this),i=n.length>>>0,a=[],r=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var o=0;i>o;o++)o in n&&e.call(r,n[o],o,n)&&a.push(n[o]);return a}),Array.prototype.every||(Array.prototype.every=function(e){var n=y(this),i=n.length>>>0,a=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var r=0;i>r;r++)if(r in n&&!e.call(a,n[r],r,n))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e){var n=y(this),i=n.length>>>0,a=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var r=0;i>r;r++)if(r in n&&e.call(a,n[r],r,n))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var n=y(this),i=n.length>>>0;if("[object Function]"!=t(e))throw new TypeError;if(!i&&1==arguments.length)throw new TypeError;var a,r=0;if(arguments.length>=2)a=arguments[1];else for(;;){if(r in n){a=n[r++];break}if(++r>=i)throw new TypeError}for(;i>r;r++)r in n&&(a=e.call(void 0,a,n[r],r,n));return a}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e){var n=y(this),i=n.length>>>0;if("[object Function]"!=t(e))throw new TypeError;if(!i&&1==arguments.length)throw new TypeError;var a,r=i-1;if(arguments.length>=2)a=arguments[1];else for(;;){if(r in n){a=n[r--];break}if(0>--r)throw new TypeError}do r in this&&(a=e.call(void 0,a,n[r],r,n));while(r--);return a}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=y(this),n=t.length>>>0;if(!n)return-1;var i=0;for(arguments.length>1&&(i=v(arguments[1])),i=i>=0?i:n-Math.abs(i);n>i;i++)if(i in t&&t[i]===e)return i;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e){var t=y(this),n=t.length>>>0;if(!n)return-1;var i=n-1;for(arguments.length>1&&(i=v(arguments[1])),i=i>=0?i:n-Math.abs(i);i>=0;i--)if(i in t&&e===t[i])return i;return-1}),2!=[1,2].splice(0).length){var o=Array.prototype.splice;Array.prototype.splice=function(e,t){return arguments.length?o.apply(this,[e===void 0?0:e,t===void 0?this.length-e:t].concat(r.call(arguments,2))):[]}}if(!Object.keys){var s=!0,l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=l.length;for(var c in{toString:null})s=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var n=[];for(var i in t)e(t,i)&&n.push(i);if(s)for(var a=0,r=u;r>a;a++){var o=l[a];e(t,o)&&n.push(o)}return n}}Date.prototype.toISOString||(Date.prototype.toISOString=function(){var e,t,n;if(!isFinite(this))throw new RangeError;for(e=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],t=e.length;t--;)n=e[t],10>n&&(e[t]="0"+n);return e.slice(0,3).join("-")+"T"+e.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()});var p="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||p.trim()){p="["+p+"]";var d=RegExp("^"+p+p+"*"),h=RegExp(p+p+"*$");String.prototype.trim=function(){return(this+"").replace(d,"").replace(h,"")}}if("0".split(void 0,0).length){var f=String.prototype.split;String.prototype.split=function(e,t){return e===void 0&&0===t?[]:f.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var m=String.prototype.substr;String.prototype.substr=function(e,t){return m.call(this,0>e?0>(e=this.length+e)?0:e:e,t)}}var v=function(e){return e=+e,e!==e?e=-1:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},g="a"!="a"[0],y=function(e){if(null==e)throw new TypeError;return g&&"string"==typeof e&&e?e.split(""):Object(e)}})(),function(e,t){var n="defineProperty",i=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);if(i&&Object[n]&&Object.prototype.__defineGetter__&&function(){try{var e=document.createElement("foo");Object[n](e,"bar",{get:function(){return!0}}),i=!!e.bar}catch(t){i=!1}e=null}(),Modernizr.objectAccessor=!!(i||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__),Modernizr.advancedObjectProperties=i,!(i&&Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor&&Object.defineProperty)){var a=Function.prototype.call,r=Object.prototype,o=a.bind(r.hasOwnProperty);t.objectCreate=function(e,n,i,a){var r,o=function(){};return o.prototype=e,r=new o,a||"__proto__"in r||Modernizr.objectAccessor||(r.__proto__=e),n&&t.defineProperties(r,n),i&&(r.options=jQuery.extend(!0,{},r.options||{},i),i=r.options),r._create&&jQuery.isFunction(r._create)&&r._create(i),r},t.defineProperties=function(e,n){for(var i in n)o(n,i)&&t.defineProperty(e,i,n[i]);return e},t.defineProperty=function(e,t,n){return"object"!=typeof n||null===n?e:o(n,"value")?(e[t]=n.value,e):(e.__defineGetter__&&("function"==typeof n.get&&e.__defineGetter__(t,n.get),"function"==typeof n.set&&e.__defineSetter__(t,n.set)),e)},t.getPrototypeOf=function(e){return Object.getPrototypeOf&&Object.getPrototypeOf(e)||e.__proto__||e.constructor&&e.constructor.prototype},t.getOwnPropertyDescriptor=function(e,t){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var n;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return n=Object.getOwnPropertyDescriptor(e,t)}catch(i){}n={configurable:!0,enumerable:!0,writable:!0,value:void 0};var a=e.__lookupGetter__&&e.__lookupGetter__(t),r=e.__lookupSetter__&&e.__lookupSetter__(t);if(!a&&!r){if(!o(e,t))return;return n.value=e[t],n}return delete n.writable,delete n.value,n.get=n.set=void 0,a&&(n.get=a),r&&(n.set=r),n}}}(jQuery,jQuery.webshims),webshims.register("dom-extend",function(e,t,n,i,a){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var r=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly.."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};r(),setTimeout(r,90),t.ready("DOM",r),e(r),t.ready("WINDOWLOAD",r)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},p={},d={},h=e.fn.val,f=function(t,n,i,a,r){return r?h.call(e(t)):h.call(e(t),i)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var i,a=0;null!=(i=n[a]);a++)try{e(i).triggerHandler("remove")}catch(r){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):h.call(this);if(e.isArray(t))return h.apply(this,arguments);var i=e.isFunction(t);return this.each(function(r){if(n=this,1===n.nodeType)if(i){var o=t.call(n,r,e.prop(n,"value",a,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,a,r){r||(r=i),e(r)[a?"onTrigger":"on"](t,n),this.on("remove",function(i){i.originalEvent||e(r).off(t,n)})};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,n,i){if(t=t.jquery?t[0]:t,!t)return i||{};var r=e.data(t,m);return i!==a&&(r||(r=e.data(t,m,{})),n&&(r[n]=i)),n?r&&r[n]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var i=v(this,"shadowData"),a=i&&i[t.prop]||this;-1==e.inArray(a,n)&&n.push(a)}),this.pushStack(n)}}),e.Tween.propHooks._default&&e.css&&function(){var n=!1;try{n="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(i){t.error(i)}var a=n?function(t,n){return e.css(t,n,!1,"")}:function(t,n){return e.css(t,n,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var n;return null==t.elem[t.prop]&&!u[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(n=a(t.elem,t.prop),n&&"auto"!==n?n:0):u[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):u[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(n){l[n]=e[n],e[n]=function(t,i,r,o,s){var p="val"==o,h=p?f:l[n];if(!t||!u[i]||1!==t.nodeType||!p&&o&&"attr"==n&&e.attrFn[i])return h(t,i,r,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=n||r!==!1&&null!==r?n:"removeAttr";if(b||(b=c["*"]),b&&(b=b[i]),b&&(m=b[w]),m){if("value"==i&&(v=m.isVal,m.isVal=p),"removeAttr"===w)return m.value.call(t);if(r===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==n&&r===!0&&(r=i),g=m.set.call(t,r)),"value"==i&&(m.isVal=v)}else g=h(t,i,r,o,s);if((r!==a||"removeAttr"===w)&&d[y]&&d[y][i]){var x;x="removeAttr"==w?!1:"prop"==w?!!r:!0,d[y][i].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,r,x,p?"val":w,n)})}return g},p[n]=function(e,i,r){c[e]||(c[e]={}),c[e][i]||(c[e][i]={});var o=c[e][i][n],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==n&&"value"==i?function(e){var t=this;return r.isVal?f(t,i,e,!1,0===arguments.length):l[n](t,i,e)}:"prop"==n&&"value"==e&&r.value.apply?function(){var e=l[n](this,i);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[n](this,i,e)}};c[e][i][n]=r,r.value===a&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==i?function(){throw i+" is readonly on "+e}:function(){t.info(i+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(i.createElement("foobar")),n=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var l,u;if(!(a&&(l=i.createElement(r))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&n.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(r,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var n={};t.addReady(function(i,r){var o={},s=function(t){o[t]||(o[t]=e(i.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(n,function(e,n){return s(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+n),a)}),o=null});var r,o=e([]),s=function(t,a){n[t]?n[t].push(a):n[t]=[a],e.isDOMReady&&(r||e(i.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(i.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,n){s(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,n,i){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=i})})}}}(),b=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var i=n.prop("id");return i||(t++,i="ID-"+t,n.eq(0).prop("id",i)),i}}(),implement:function(e,n){var i=v(e,"implemented")||v(e,"implemented",{});return i[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(i[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,i){var a,r=(e._data(t,"events")||{})[n];r&&r.length>1&&(a=r.pop(),i||(i="bind"),"bind"==i&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(n).width(),l=e(n).width();if(l==r&&a==o)return;r=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(i).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=i.body,a=i.documentElement;s[t]=function(){return Math.max(n["scroll"+e],a["scroll"+e],n["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&i.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(n,i,a){if(n&&i){a=a||{},n.jquery&&(n=n[0]),i.jquery&&(i=i[0]);var r=e.data(n,m)||e.data(n,m,{}),o=e.data(i,m)||e.data(i,m,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,m)||e.data(a.shadowFocusElement,m,s)):a.shadowFocusElement=i,e(n).on("remove",function(t){t.originalEvent||e(i).remove()}),r.hasShadow=i,s.nativeElement=o.nativeElement=n,s.shadowData=o.shadowData=r.shadowData={nativeElement:n,shadowElement:i,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=i.createElement("a");return t.style.display="none",function(n,i){b(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,a=this.getAttribute(i);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(r){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,i){"string"==typeof i&&(i=i.split(s)),i.forEach(function(i){t.defineNodeNamesProperty(n,i,{prop:{set:function(t){e.attr(this,i,t)},get:function(){return e.attr(this,i)||""}}})})},defineNodeNameProperty:function(n,i,a){return u[i]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,i),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[r](n,i,o),"*"!=n&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&g(n,i,o),a[r]=o)}),a.initAttr&&y.content(n,i),a},defineNodeNameProperties:function(e,n,i,a){for(var r in n)!a&&n[r].initAttr&&y.createTmpCache(e),i&&(n[r][i]||(n[r][i]={},["value","set","get"].forEach(function(e){e in n[r]&&(n[r][i][e]=n[r][e],delete n[r][e])}))),n[r]=t.defineNodeNameProperty(e,r,n[r]);return a||y.flushTmpCache(),n},createElement:function(n,i,a){var r;return e.isFunction(i)&&(i={after:i}),y.createTmpCache(n),i.before&&y.createElement(n,i.before),a&&(r=t.defineNodeNameProperties(n,a,!1,!0)),i.after&&y.createElement(n,i.after),y.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,n,i,a){"string"==typeof t&&(t=t.split(s)),e.isFunction(i)&&(i={set:i}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof n&&(n=n.split(s)),i.initAttr&&y.createTmpCache(e),n.forEach(function(t){d[e][t]||(d[e][t]=[],u[t]=!0),i.set&&(a&&(i.set.only=a),d[e][t].push(i.set)),i.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,i,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(n,i,{attr:{set:function(e){this.setAttribute(i,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(i);return null==e?a:i}},removeAttr:{value:function(){this.removeAttribute(i),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var i;return n===a?(i=e.attributes[t]||{},n=i.specified?i.value:null,null==n?a:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),a)}},activeLang:function(){var n,i,a=[],r={},s=/:\/\/|^\.*\//,l=function(n,i,a){var r;return i&&a&&-1!==e.inArray(i,a.availabeLangs||[])?(n.loading=!0,r=a.langSrc,s.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+i+".js",function(){n.langObj[i]?(n.loading=!1,c(n,!0)):e(function(){n.langObj[i]&&c(n,!0),n.loading=!1})}),!0):!1},u=function(e){r[e]&&r[e].forEach(function(e){e.callback(n,i,"")})},c=function(e,t){if(e.activeLang!=n&&e.activeLang!==i){var a=o[e.module].options;e.langObj[n]||i&&e.langObj[i]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[i],n),u(e.module)):t||l(e,n,a)||l(e,i,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),u(e.module))}},p=function(t){return"string"==typeof t&&t!==n?(n=t,i=n.split("-")[0],n==i&&(i=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback(n,i,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),n};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,i,a,r){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[n](e,i,a,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},i=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(n,function(t,n){for(var o=e(t,a).add(r.filter(t)),s=0,l=o.length;l>s;s++)i(o[s],n)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&i(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||i(u,"contentinfo")}})}}(jQuery,document),function(){"JSON"in window&&JSON.stringify&&JSON.parse||(this.JSON||(this.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,a,r,o,s=gap,l=t[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?l+"":"null";case"boolean":case"null":return l+"";case"object":if(!l)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(l)){for(r=l.length,n=0;r>n;n+=1)o[n]=str(n,l)||"null";return a=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+s+"]":"["+o.join(",")+"]",gap=s,a}if(rep&&"object"==typeof rep)for(r=rep.length,n=0;r>n;n+=1)i=rep[n],"string"==typeof i&&(a=str(i,l),a&&o.push(quote(i)+(gap?": ":":")+a));else for(i in l)Object.hasOwnProperty.call(l,i)&&(a=str(i,l),a&&o.push(quote(i)+(gap?": ":":")+a));return a=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+s+"}":"{"+o.join(",")+"}",gap=s,a}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;n>i;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,i,a=e[t];if(a&&"object"==typeof a)for(n in a)Object.hasOwnProperty.call(a,n)&&(i=walk(a,n),void 0!==i?a[n]=i:delete a[n]);return reviver.call(e,t,a)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}())}(),function(){var e=jQuery;if("localStorage"in window&&"sessionStorage"in window)return e.webshims.isReady("json-storage",!0),void 0;var t,n=function(t){t&&t.indexOf&&-1!=t.indexOf(";")&&setTimeout(function(){e.webshims.warn("Bad key for localStorage: ; in localStorage. name was: "+t)},0)},i=!1;e.each(["opener","top","parent"],function(e,n){try{if(t=window[n],t&&"name"in t)return t.name,!1;t=!1}catch(i){t=!1}}),t||(t=window,i=!0);var a=function(e){if(!i)try{window.name=e}catch(n){}try{t.name=e}catch(n){t=window,i=!0}},r=function(){var e;if(!i)try{e=window.name}catch(n){}if(!e)try{e=t.name}catch(n){t=window,i=!0}return e},o=function(e){function t(e,t,n){var i,a;n?(i=new Date,i.setTime(i.getTime()+1e3*60*60*24*n),a="; expires="+i.toGMTString()):a="",document.cookie=e+"="+t+a+"; path=/"}function i(e){var t,n,i=e+"=",a=document.cookie.split(";");for(t=0;a.length>t;t++){for(n=a[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(i))return n.substring(i.length,n.length)}return null}function o(n){n=JSON.stringify(n),"session"==e?a(n):t("localStorage",n,365)}function s(){"session"==e?a(""):t("localStorage","",365)}function l(){var t;if(t="session"==e?r():i("localStorage"))try{t=JSON.parse(t)}catch(n){t={}}return t||{}}var u=l();return{clear:function(){u={},s()},getItem:function(e){return e in u?u[e]:null},key:function(e){var t=0;for(var n in u){if(t==e)return n;t++}return null},removeItem:function(e){delete u[e],o(u)},setItem:function(e,t){n(e),u[e]=t+"",o(u)}}};"sessionStorage"in window||(window.sessionStorage=new o("session")),function(){var t,i,a,r="(empty string)+1287520303738",s=function(i){clearTimeout(t);var s;return window.localStorage&&("swf"!=i||a&&a.key)?(e.webshims.isReady("json-storage",!0),void 0):("swf"===i&&(a=document.getElementById("swflocalstorageshim"),s=a?typeof a.GetVariable:"undefined","undefined"==s&&(a=document.swflocalstorageshim,s=a?typeof a.GetVariable:"undefined","undefined"==s&&(a=window.localstorageshim,s=a?typeof a.GetVariable:"undefined")),"undefined"!=s&&(window.localStorage={},window.localStorage.clear=function(){a.clear&&a.clear()},window.localStorage.key=function(e){a.key&&a.key(e)},window.localStorage.removeItem=function(e){a.removeItem&&a.removeItem(e)},window.localStorage.setItem=function(e,t){n(e),t+="",t||(t=r),a.setItem&&a.setItem(e,t)},window.localStorage.getItem=function(e){if(!a.getItem)return null;var t=a.getItem(e,t);return t==r&&(t=""),t},e.webshims.log("flash-localStorage was implemented"))),"localStorage"in window||(window.localStorage=new o("local"),e.webshims.warn("implement cookie-localStorage")),e.webshims.isReady("json-storage",!0),void 0)},l=e.webshims.cfg["json-storage"];webshims.swfLocalStorage={show:function(){l.exceededMessage&&e("#swflocalstorageshim-wrapper").prepend('<div class="polyfill-exceeded-message">'+l.exceededMessage+"</div>"),e("#swflocalstorageshim-wrapper").css({top:e(window).scrollTop()+20,left:e(window).width()/2-e("#swflocalstorageshim-wrapper").outerWidth()/2})},hide:function(t){if(e("#swflocalstorageshim-wrapper").css({top:"",left:""}).find("div.polyfill-exceeded-message").remove(),!t){var n=Error("DOMException: QUOTA_EXCEEDED_ERR");throw n.code=22,n.name="DOMException",n}},isReady:s},webshims.ready("DOM swfmini",function(){var n=window.swfmini;i||"localStorage"in window&&document.getElementById("swflocalstorageshim")||(i=!0,n&&n.hasFlashPlayerVersion("8.0.0")?(e("body").append('<div id="swflocalstorageshim-wrapper"><div id="swflocalstorageshim" /></div>'),n.embedSWF(webshims.cfg.basePath+"swf/localStorage.swf"+(webshims.cfg.addCacheBuster||""),"swflocalstorageshim","295","198","8.0.0",null,{allowscriptaccess:"always"},{name:"swflocalstorageshim"},function(e){e.success||window.localStorage||s()}),clearTimeout(t),t=setTimeout(function(){"localStorage"in window||webshims.warn("Add your development-directory to the local-trusted security sandbox: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"),s()},0===location.protocol.indexOf("file")?500:9999)):s())})}()}();