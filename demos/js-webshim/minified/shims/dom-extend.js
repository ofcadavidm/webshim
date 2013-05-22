webshims.register("dom-extend",function(e,t,n,i,r){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var a=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly.."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};a(),setTimeout(a,90),t.ready("DOM",a),e(a),t.ready("WINDOWLOAD",a)}var o=t.modules,s=/\s*,\s*/,u={},l={},c={},p={},d={},f=e.fn.val,m=function(t,n,i,r,a){return a?f.call(e(t)):f.call(e(t),i)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var i,r=0;null!=(i=n[r]);r++)try{e(i).triggerHandler("remove")}catch(a){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var i=e.isFunction(t);return this.each(function(a){if(n=this,1===n.nodeType)if(i){var o=t.call(n,a,e.prop(n,"value",r,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,r,a){a||(a=i),e(a)[r?"onTrigger":"on"](t,n),this.on("remove",function(i){i.originalEvent||e(a).off(t,n)})};var h="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,n,i){if(t=t.jquery?t[0]:t,!t)return i||{};var a=e.data(t,h);return i!==r&&(a||(a=e.data(t,h,{})),n&&(a[n]=i)),n?a&&a[n]:a};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var i=v(this,"shadowData"),r=i&&i[t.prop]||this;-1==e.inArray(r,n)&&n.push(r)}),this.pushStack(n)}}),e.Tween.propHooks._default&&e.css&&function(){var n=!1;try{n="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(i){t.error(i)}var r=n?function(t,n){return e.css(t,n,!1,"")}:function(t,n){return e.css(t,n,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var n;return null==t.elem[t.prop]&&!l[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(n=r(t.elem,t.prop),n&&"auto"!==n?n:0):l[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):l[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(n){u[n]=e[n],e[n]=function(t,i,a,o,s){var p="val"==o,f=p?m:u[n];if(!t||!l[i]||1!==t.nodeType||!p&&o&&"attr"==n&&e.attrFn[i])return f(t,i,a,o,s);var h,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=n||a!==!1&&null!==a?n:"removeAttr";if(b||(b=c["*"]),b&&(b=b[i]),b&&(h=b[w]),h){if("value"==i&&(v=h.isVal,h.isVal=p),"removeAttr"===w)return h.value.call(t);if(a===r)return h.get?h.get.call(t):h.value;h.set&&("attr"==n&&a===!0&&(a=i),g=h.set.call(t,a)),"value"==i&&(h.isVal=v)}else g=f(t,i,a,o,s);if((a!==r||"removeAttr"===w)&&d[y]&&d[y][i]){var T;T="removeAttr"==w?!1:"prop"==w?!!a:!0,d[y][i].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,a,T,p?"val":w,n)})}return g},p[n]=function(e,i,a){c[e]||(c[e]={}),c[e][i]||(c[e][i]={});var o=c[e][i][n],s=function(e,t,r){return t&&t[e]?t[e]:r&&r[e]?r[e]:"prop"==n&&"value"==i?function(e){var t=this;return a.isVal?m(t,i,e,!1,0===arguments.length):u[n](t,i,e)}:"prop"==n&&"value"==e&&a.value.apply?function(){var e=u[n](this,i);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return u[n](this,i,e)}};c[e][i][n]=a,a.value===r&&(a.set||(a.set=a.writeable?s("set",a,o):t.cfg.useStrict&&"prop"==i?function(){throw i+" is readonly on "+e}:function(){t.info(i+" is readonly on "+e)}),a.get||(a.get=s("get",a,o))),["value","get","set"].forEach(function(e){a[e]&&(a["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(i.createElement("foobar")),n=Object.prototype.hasOwnProperty,r=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(a,o,s){var u,l;if(!(r&&(u=i.createElement(a))&&(l=t.getPrototypeOf(u))&&e!==l)||u[o]&&n.call(u,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(a,o,s.value);else{var c=u[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},l[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var n={};t.addReady(function(i,a){var o={},s=function(t){o[t]||(o[t]=e(i.getElementsByTagName(t)),a[0]&&e.nodeName(a[0],t)&&(o[t]=o[t].add(a)))};e.each(n,function(e,n){return s(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),r):(t.warn("Error: with "+e+"-property. methods: "+n),r)}),o=null});var a,o=e([]),s=function(t,r){n[t]?n[t].push(r):n[t]=[r],e.isDOMReady&&(a||e(i.getElementsByTagName(t))).each(r)};return{createTmpCache:function(t){return e.isDOMReady&&(a=a||e(i.getElementsByTagName(t))),a||o},flushTmpCache:function(){a=null},content:function(t,n){s(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,n,i){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=i})})}}}(),b=function(e,t){e.defaultValue===r&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var i=n.prop("id");return i||(t++,i="ID-"+t,n.eq(0).prop("id",i)),i}}(),implement:function(e,n){var i=v(e,"implemented")||v(e,"implemented",{});return i[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(i[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,i){var r,a=(e._data(t,"events")||{})[n];a&&a.length>1&&(r=a.pop(),i||(i="bind"),"bind"==i&&a.delegateCount?a.splice(a.delegateCount,0,r):a.unshift(r)),t=null},addShadowDom:function(){var r,a,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(r),r=setTimeout(function(){if("resize"==t.type){var r=e(n).width(),u=e(n).width();if(u==a&&r==o)return;a=u,o=r,s.height=s.getHeight(),s.width=s.getWidth()}e(i).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=i.body,r=i.documentElement;s[t]=function(){return Math.max(n["scroll"+e],r["scroll"+e],n["offset"+e],r["offset"+e],r["client"+e])}})},start:function(){!this.init&&i.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(n,i,r){if(n&&i){r=r||{},n.jquery&&(n=n[0]),i.jquery&&(i=i[0]);var a=e.data(n,h)||e.data(n,h,{}),o=e.data(i,h)||e.data(i,h,{}),s={};r.shadowFocusElement?r.shadowFocusElement&&(r.shadowFocusElement.jquery&&(r.shadowFocusElement=r.shadowFocusElement[0]),s=e.data(r.shadowFocusElement,h)||e.data(r.shadowFocusElement,h,s)):r.shadowFocusElement=i,e(n).on("remove",function(t){t.originalEvent||e(i).remove()}),a.hasShadow=i,s.nativeElement=o.nativeElement=n,s.shadowData=o.shadowData=a.shadowData={nativeElement:n,shadowElement:i,shadowFocusElement:r.shadowFocusElement},r.shadowChilds&&r.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),r.data&&(s.shadowData.data=o.shadowData.data=a.shadowData.data=r.data),r=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=i.createElement("a");return t.style.display="none",function(n,i){b(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,r=this.getAttribute(i);if(null==r)return"";if(t.setAttribute("href",r+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(a){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,i){"string"==typeof i&&(i=i.split(s)),i.forEach(function(i){t.defineNodeNamesProperty(n,i,{prop:{set:function(t){e.attr(this,i,t)},get:function(){return e.attr(this,i)||""}}})})},defineNodeNameProperty:function(n,i,r){return l[i]=!0,r.reflect&&t.propTypes[r.propType||"standard"](r,i),["prop","attr","removeAttr"].forEach(function(a){var o=r[a];o&&(o="prop"===a?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[a](n,i,o),"*"!=n&&t.cfg.extendNative&&"prop"==a&&o.value&&e.isFunction(o.value)&&g(n,i,o),r[a]=o)}),r.initAttr&&y.content(n,i),r},defineNodeNameProperties:function(e,n,i,r){for(var a in n)!r&&n[a].initAttr&&y.createTmpCache(e),i&&(n[a][i]||(n[a][i]={},["value","set","get"].forEach(function(e){e in n[a]&&(n[a][i][e]=n[a][e],delete n[a][e])}))),n[a]=t.defineNodeNameProperty(e,a,n[a]);return r||y.flushTmpCache(),n},createElement:function(n,i,r){var a;return e.isFunction(i)&&(i={after:i}),y.createTmpCache(n),i.before&&y.createElement(n,i.before),r&&(a=t.defineNodeNameProperties(n,r,!1,!0)),i.after&&y.createElement(n,i.after),y.flushTmpCache(),a},onNodeNamesPropertyModify:function(t,n,i,r){"string"==typeof t&&(t=t.split(s)),e.isFunction(i)&&(i={set:i}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof n&&(n=n.split(s)),i.initAttr&&y.createTmpCache(e),n.forEach(function(t){d[e][t]||(d[e][t]=[],l[t]=!0),i.set&&(r&&(i.set.only=r),d[e][t].push(i.set)),i.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,i,a){a||(a={}),e.isFunction(a)&&(a.set=a),t.defineNodeNamesProperty(n,i,{attr:{set:function(e){this.setAttribute(i,e),a.set&&a.set.call(this,!0)},get:function(){var e=this.getAttribute(i);return null==e?r:i}},removeAttr:{value:function(){this.removeAttribute(i),a.set&&a.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:a.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var i;return n===r?(i=e.attributes[t]||{},n=i.specified?i.value:null,null==n?r:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),r)}},activeLang:function(){var n,i,r=[],a={},s=/:\/\/|^\.*\//,u=function(n,i,r){var a;return i&&r&&-1!==e.inArray(i,r.availabeLangs||[])?(n.loading=!0,a=r.langSrc,s.test(a)||(a=t.cfg.basePath+a),t.loader.loadScript(a+i+".js",function(){n.langObj[i]?(n.loading=!1,c(n,!0)):e(function(){n.langObj[i]&&c(n,!0),n.loading=!1})}),!0):!1},l=function(e){a[e]&&a[e].forEach(function(e){e.callback(n,i,"")})},c=function(e,t){if(e.activeLang!=n&&e.activeLang!==i){var r=o[e.module].options;e.langObj[n]||i&&e.langObj[i]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[i],n),l(e.module)):t||u(e,n,r)||u(e,i,r)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),l(e.module))}},p=function(t){return"string"==typeof t&&t!==n?(n=t,i=n.split("-")[0],n==i&&(i=!1),e.each(r,function(e,t){c(t)})):"object"==typeof t&&(t.register?(a[t.register]||(a[t.register]=[]),a[t.register].push(t),t.callback(n,i,"")):(t.activeLang||(t.activeLang=""),r.push(t),c(t))),n};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,i,r,a){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[n](e,i,r,a)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},i=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(r,a){if(e.each(n,function(t,n){for(var o=e(t,r).add(a.filter(t)),s=0,u=o.length;u>s;s++)i(o[s],n)}),r===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),u=s.length;if(o&&!e(o).closest("section, article")[0]&&i(o,"banner"),!u)return;var l=s[u-1];e(l).closest("section, article")[0]||i(l,"contentinfo")}})}}(jQuery,document);