webshims.register("dom-extend",function(e,t,i,n,a){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var r=function(){if(!i.jQuery||i.$&&i.jQuery!=i.$||i.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),i.$&&(i.$=t.$),i.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};r(),setTimeout(r,90),t.ready("DOM",r),e(r),t.ready("WINDOWLOAD",r)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,i,n,a,r){return r?f.call(e(t)):f.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(i){if(!e.widget)for(var n,a=0;null!=(n=i[a]);a++)try{e(n).triggerHandler("remove")}catch(r){}t(i)}}(),e.fn.val=function(t){var i=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return i&&1===i.nodeType?e.prop(i,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(i=this,1===i.nodeType)if(n){var o=t.call(i,r,e.prop(i,"value",a,"val",!0));null==o&&(o=""),e.prop(i,"value",o,"val")}else e.prop(i,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,i,a,r){return r||(r=n),e(r)[a?"onTrigger":"on"](t,i),this.on("remove",function(n){n.originalEvent||e(r).off(t,i)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,i,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,m);return n!==a&&(r||(r=e.data(t,m,{})),i&&(r[i]=n)),i?r&&r[i]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var i=[];return this.each(function(){var n=v(this,"shadowData"),a=n&&n[t.prop]||this;-1==e.inArray(a,i)&&i.push(a)}),this.pushStack(i)}}),["removeAttr","prop","attr"].forEach(function(i){l[i]=e[i],e[i]=function(t,n,r,o,s){var d="val"==o,f=d?h:l[i];if(!t||!u[n]||1!==t.nodeType||!d&&o&&"attr"==i&&e.attrFn[n])return f(t,n,r,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=i||r!==!1&&null!==r?i:"removeAttr";if(b||(b=c["*"]),b&&(b=b[n]),b&&(m=b[w]),m){if("value"==n&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(r===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==i&&r===!0&&(r=n),g=m.set.call(t,r)),"value"==n&&(m.isVal=v)}else g=f(t,n,r,o,s);if((r!==a||"removeAttr"===w)&&p[y]&&p[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!r:!0,p[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==i)||"attr"==e.only&&"prop"!=i)&&e.call(t,r,T,d?"val":w,i)})}return g},d[i]=function(e,n,r){c[e]||(c[e]={}),c[e][n]||(c[e][n]={});var o=c[e][n][i],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==i&&"value"==n?function(e){var t=this;return r.isVal?h(t,n,e,!1,0===arguments.length):l[i](t,n,e)}:"prop"==i&&"value"==e&&r.value.apply?function(){var e=l[i](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[i](this,n,e)}};c[e][n][i]=r,r.value===a&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(n.createElement("foobar")),i=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var l,u;if(!(a&&(l=n.createElement(r))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&i.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(r,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var i={};t.addReady(function(n,r){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(i,function(e,i){return s(e),i&&i.forEach?(i.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+i),a)}),o=null});var r,o=e([]),s=function(t,a){i[t]?i[t].push(a):i[t]=[a],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,i){s(t,function(){var t=e.attr(this,i);null!=t&&e.attr(this,i,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,i,n){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[i]=this[i],this[i]=n})})}}}(),b=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(i){i=e(i);var n=i.prop("id");return n||(t++,n="ID-"+t,i.eq(0).prop("id",n)),n}}(),implement:function(e,i){var n=v(e,"implemented")||v(e,"implemented",{});return n[i]?(t.warn(i+" already implemented for element #"+e.id),!1):(n[i]=!0,!0)},extendUNDEFProp:function(t,i){e.each(i,function(e,i){e in t||(t[e]=i)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,i,n){var a,r=(e._data(t,"events")||{})[i];r&&r.length>1&&(a=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(i).width(),l=e(i).width();if(l==r&&a==o)return;r=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var i=n.body,a=n.documentElement;s[t]=function(){return Math.max(i["scroll"+e],a["scroll"+e],i["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).on("updatelayout",this.handler),e(i).bind("resize",this.handler),function(){var t,i=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),i.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(i,n,a){if(i&&n){a=a||{},i.jquery&&(i=i[0]),n.jquery&&(n=n[0]);var r=e.data(i,m)||e.data(i,m,{}),o=e.data(n,m)||e.data(n,m,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,m)||e.data(a.shadowFocusElement,m,s)):a.shadowFocusElement=n,e(i).on("remove",function(t){t.originalEvent||setTimeout(function(){e(n).remove()},4)}),r.hasShadow=n,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=r.shadowData={nativeElement:i,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(i,n){b(i),i.prop||(i.prop={set:function(e){i.attr.set.call(this,e)},get:function(){var i,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(r){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(i,n){"string"==typeof n&&(n=n.split(s)),n.forEach(function(n){t.defineNodeNamesProperty(i,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(i,n,a){return u[n]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,n),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[r](i,n,o),"*"!=i&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&g(i,n,o),a[r]=o)}),a.initAttr&&y.content(i,n),a},defineNodeNameProperties:function(e,i,n,a){for(var r in i)!a&&i[r].initAttr&&y.createTmpCache(e),n&&(i[r][n]||(i[r][n]={},["value","set","get"].forEach(function(e){e in i[r]&&(i[r][n][e]=i[r][e],delete i[r][e])}))),i[r]=t.defineNodeNameProperty(e,r,i[r]);return a||y.flushTmpCache(),i},createElement:function(i,n,a){var r;return e.isFunction(n)&&(n={after:n}),y.createTmpCache(i),n.before&&y.createElement(i,n.before),a&&(r=t.defineNodeNameProperties(i,a,!1,!0)),n.after&&y.createElement(i,n.after),y.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,i,n,a){"string"==typeof t&&(t=t.split(s)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof i&&(i=i.split(s)),n.initAttr&&y.createTmpCache(e),i.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),n.set&&(a&&(n.set.only=a),p[e][t].push(n.set)),n.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(i,n,{attr:{set:function(e){this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,i){if(e.nodeName){var n;return i===a?(n=e.attributes[t]||{},i=n.specified?n.value:null,null==i?a:i):("boolean"==typeof i?i?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,i),a)}},activeLang:function(){var i,n,a=[],r={},s=/:\/\/|^\.*\//,l=function(i,n,a){var r;return n&&a&&-1!==e.inArray(n,a.availabeLangs||[])?(i.loading=!0,r=a.langSrc,s.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+n+".js",function(){i.langObj[n]?(i.loading=!1,c(i,!0)):e(function(){i.langObj[n]&&c(i,!0),i.loading=!1})}),!0):!1},u=function(e){r[e]&&r[e].forEach(function(e){e.callback(i,n,"")})},c=function(e,t){if(e.activeLang!=i&&e.activeLang!==n){var a=o[e.module].options;e.langObj[i]||n&&e.langObj[n]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[n],i),u(e.module)):t||l(e,i,a)||l(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],i),u(e.module))}},d=function(t){return"string"==typeof t&&t!==i?(i=t,n=i.split("-")[0],i==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback(i,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),i};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,i){t[e]=function(e,n,a,r){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[i](e,n,a,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var i=e.getAttribute("role");i||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(i,function(t,i){for(var o=e(t,a).add(r.filter(t)),s=0,l=o.length;l>s;s++)n(o[s],i)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||n(u,"contentinfo")}})}}(webshims.$,document),webshims.register("mediaelement-jaris",function(e,t,i,n,a,r){"use strict";var o=t.mediaelement,s=i.swfmini,l=Modernizr.audio&&Modernizr.video,u=s.hasFlashPlayerVersion("9.0.115"),c=0,d="ActiveXObject"in i&&l,p={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},f=Object.keys(p),h={currentTime:0,volume:1,muted:!1};Object.keys(h);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:a,_calledMeta:!1,lastDuration:0},p,h),v=function(e){try{e.nodeName}catch(i){return null}var n=t.data(e,"mediaelement");return n&&"third"==n.isActive?n:null},g=function(t,i){i=e.Event(i),i.preventDefault(),e.event.trigger(i,a,t)},y=r.playerPath||t.cfg.basePath+"swf/"+(r.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(r.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e};o.jarisEvent={};var w,T={onPlayPause:function(e,t,i){var n,a;if(null==i)try{n=t.api.api_get("isPlaying")}catch(r){}else n=i;n==t.paused&&(t.paused=!n,a=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,a),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var i,n=t.duration;t.duration=e.duration,n==t.duration||isNaN(t.duration)||t._calledMeta&&2>(i=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},i>50?0:i>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),g(t._elem,"timeupdate")},onProgress:function(t,i){if(i.ended&&(i.ended=!1),i.duration&&!isNaN(i.duration)){var n=t.loaded/t.total;n>.02&&.2>n?b(3,i):n>.2&&(n>.99&&(i.networkState=1),b(4,i)),i._bufferedEnd&&i._bufferedEnd>n&&(i._bufferedStart=i.currentTime||0),i._bufferedEnd=n,i.buffered.length=1,e.event.trigger("progress",a,i._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var i=function(e){var t=!0;try{e.api.api_get("volume")}catch(i){t=!1}return t};return function(n,r){var o=0,s=function(){return o>9?(r.tryedReframeing=0,a):(o++,r.tryedReframeing++,i(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,x(r),E(r)):6>r.tryedReframeing?3>r.tryedReframeing?(r.reframeTimer=setTimeout(s,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error")),a)};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(w),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(s,9):s())}}()};T.onMute=T.onVolumeChange;var E=function(e){var i,n=e.actionQueue.length,a=0;if(n&&"third"==e.isActive)for(;e.actionQueue.length&&n>a;){a++,i=e.actionQueue.shift();try{e.api[i.fn].apply(e.api,i.args)}catch(r){t.warn(r)}}e.actionQueue.length&&(e.actionQueue=[])},x=function(t){t&&((t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(i){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(l){var k={play:1,playing:1},A=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],S=A.map(function(e){return e+".webshimspolyfill"}).join(" "),C=function(i){var n=t.data(i.target,"mediaelement");if(n){var a=i.originalEvent&&i.originalEvent.type===i.type;a==("third"==n.activating)&&(i.stopImmediatePropagation(),k[i.type]&&(n.isActive!=n.activating?e(i.target).pause():a&&(e.prop(i.target,"pause")._supvalue||e.noop).apply(i.target)))}};N=function(i){e(i).off(S).on(S,C),A.forEach(function(e){t.moveToFirstEvent(i,e)})},N(n)}o.setActive=function(i,n,a){if(a||(a=t.data(i,"mediaelement")),a&&a.isActive!=n){"html5"!=n&&"third"!=n&&t.warn("wrong type for mediaelement activating: "+n);var r=t.data(i,"shadowData");a.activating=n,e(i).pause(),a.isActive=n,"third"==n?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(i).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(i).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(i).trigger("mediaelementapichange")}};var _=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(i){if(i){var n=t,a=i.networkState;for(b(0,i),clearTimeout(i._durationChangeTimer);--n>-1;)delete i[e[n]];i.actionQueue=[],i.buffered.length=0,a&&g(i._elem,"emptied")}}}(),P=function(){var t={},i=function(i){var a,r,o;return t[i.currentSrc]?a=t[i.currentSrc]:i.videoHeight&&i.videoWidth?(t[i.currentSrc]={width:i.videoWidth,height:i.videoHeight},a=t[i.currentSrc]):(r=e.attr(i._elem,"poster"))&&(a=t[r],a||(o=n.createElement("img"),o.onload=function(){t[r]={width:this.width,height:this.height},t[r].height&&t[r].width?O(i,e.prop(i._elem,"controls")):delete t[r]},o.src=r,o.complete&&o.onload())),a||{width:300,height:"video"==i._elemNodeName?150:50}};return function(t){var n,a,r=t.elemDimensions;return("auto"==r.width||"auto"==r.height)&&(r=e.extend({},t.elemDimensions),n=i(t),a=n.width/n.height,"auto"==r.width&&"auto"==r.height?r=n:"auto"==r.width?(t.shadowElem.css({height:r.height}),r.width=t.shadowElem.height()*a):(t.shadowElem.css({width:r.width}),r.height=t.shadowElem.width()/a)),r}}(),O=function(t,i){var n,a=t._elem,r=t.shadowElem;e(a)[i?"addClass":"removeClass"]("webshims-controls"),"third"==t.isActive&&("audio"!=t._elemNodeName||i?(t.elemDimensions={width:a.style.width||e.attr(a,"width")||e(a).width(),height:a.style.height||e.attr(a,"height")||e(a).height()},n=P(t),n.minWidth=a.style.minWidth,n.minHeight=a.style.minHeight,r.css(n)):r.css({width:0,height:0}))},D=function(){var t={"":1,auto:1};return function(i){var n=e.attr(i,"preload");return null==n||"none"==n||e.prop(i,"autoplay")?!1:(n=e.prop(i,"preload"),!!(t[n]||"metadata"==n&&e(i).is(".preload-in-doubt, video:not([poster])")))}}(),F={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},M=function(e){return e.replace?e.replace(F.A,"%26").replace(F.a,"%26").replace(F.e,"%3D").replace(F.q,"%3F"):e};if("matchMedia"in i){var I=!1;try{I=i.matchMedia("only all").matches}catch(j){}I&&(o.sortMedia=function(e,t){try{e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches}catch(i){return 0}return e==t?0:e?-1:1})}o.createSWF=function(i,n,d){if(!u)return setTimeout(function(){e(i).mediaLoad()},1),a;1>c?c=1:c++,d||(d=t.data(i,"mediaelement")),(e.attr(i,"height")||e.attr(i,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var p,f="audio/rtmp"==n.type||"video/rtmp"==n.type,h=e.extend({},r.vars,{poster:M(e.attr(i,"poster")&&e.prop(i,"poster")||""),source:M(n.streamId||n.srcProp),server:M(n.server||"")}),v=e(i).data("vars")||{},g=e.prop(i,"controls"),b="jarisplayer-"+t.getID(i),E=e.extend({},r.params,e(i).data("params")),x=i.nodeName.toLowerCase(),k=e.extend({},r.attrs,{name:b,id:b},e(i).data("attrs")),A=function(){"third"==d.isActive&&O(d,e.prop(i,"controls"))};d&&d.swfCreated?(o.setActive(i,"third",d),d.currentSrc=n.srcProp,d.shadowElem.html('<div id="'+b+'">'),d.api=!1,d.actionQueue=[],p=d.shadowElem,_(d)):(p=e('<div class="polyfill-'+x+' polyfill-mediaelement" id="wrapper-'+b+'"><div id="'+b+'"></div>').css({position:"relative",overflow:"hidden"}),d=t.data(i,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:x},_elem:{value:i},currentSrc:{value:n.srcProp},swfCreated:{value:!0},id:{value:b.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):(d.duration-d._bufferedStart)*d._bufferedEnd+d._bufferedStart},length:0}}})),p.insertBefore(i),l&&e.extend(d,{volume:e.prop(i,"volume"),muted:e.prop(i,"muted"),paused:e.prop(i,"paused")}),t.addShadowDom(i,p),t.data(i,"mediaelement")||t.data(i,"mediaelement",d),N(i),o.setActive(i,"third",d),O(d,g),e(i).on({"updatemediaelementdimensions loadedmetadata emptied":A,remove:function(e){!e.originalEvent&&o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==i&&(delete o.jarisEvent[d.id],clearTimeout(w),clearTimeout(d.flashBlock))}}).onWSOff("updateshadowdom",A)),o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==i||(o.jarisEvent[d.id]=function(e){if("ready"==e.type){var t=function(){d.api&&(D(i)&&d.api.api_preload(),T.ready(e,d))};d.api?t():setTimeout(t,9)}else d.currentTime=e.position,d.api&&(!d._calledMeta&&isNaN(e.duration)&&d.duration!=e.duration&&isNaN(d.duration)&&T.onDataInitialized(e,d),d._ppFlag||"onPlayPause"==e.type||T.onPlayPause(e,d),T[e.type]&&T[e.type](e,d)),d.duration=e.duration},o.jarisEvent[d.id].elem=i),e.extend(h,{id:b,evtId:d.id,controls:""+g,autostart:"false",nodename:x},v),f?h.streamtype="rtmp":"audio/mpeg"==n.type||"audio/mp3"==n.type?(h.type="audio",h.streamtype="file"):"video/youtube"==n.type&&(h.streamtype="youtube"),r.changeSWF(h,i,n,d,"embed"),clearTimeout(d.flashBlock),s.embedSWF(y,b,"100%","100%","9.0.115",!1,h,E,k,function(n){if(n.success){var a=function(){(!n.ref.parentNode&&p[0].parentNode||"none"==n.ref.style.display)&&(p.addClass("flashblocker-assumed"),e(i).trigger("flashblocker"),t.warn("flashblocker assumed")),e(n.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};d.api=n.ref,g||e(n.ref).attr("tabindex","-1").css("outline","none"),d.flashBlock=setTimeout(a,99),w||(clearTimeout(w),w=setTimeout(function(){a();var i=e(n.ref);i[0].offsetWidth>1&&i[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>i[0].offsetWidth||2>i[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),i=null},8e3))}})};var L=function(e,t,i,n){return n=n||v(e),n?(n.api&&n.api[t]?n.api[t].apply(n.api,i||[]):(n.actionQueue.push({fn:t,args:i}),n.actionQueue.length>10&&setTimeout(function(){n.actionQueue.length>5&&n.actionQueue.shift()},99)),n):!1};if(["audio","video"].forEach(function(i){var n,a={},r=function(e){("audio"!=i||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=v(this);return t?t[e]:l&&n[e].prop._supget?n[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){r(e),delete a[e].writeable,a[e].set=t};o("volume",function(e){var i=v(this);if(i)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),L(this,"api_volume",[e],i),i.volume!=e&&(i.volume=e,g(i._elem,"volumechange")),i=null);else if(n.volume.prop._supset)return n.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,L(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(n.muted.prop._supset)return n.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||L(this,"api_seek",[e],t);else if(n.currentTime.prop._supset)return n.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),L(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(n[e].prop._supvalue)return n[e].prop._supvalue.apply(this,arguments)}}}),f.forEach(r),t.onNodeNamesPropertyModify(i,"controls",function(t,n){var a=v(this);e(this)[n?"addClass":"removeClass"]("webshims-controls"),a&&("audio"==i&&O(a,n),L(this,"api_controls",[n],a))}),t.onNodeNamesPropertyModify(i,"preload",function(){var i,n,a;D(this)&&(i=v(this),i?L(this,"api_preload",[],i):!d||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(a=this,n=t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){e(a).mediaLoad()},9)))}),n=t.defineNodeNameProperties(i,a,"prop")}),u&&e.cleanData){var W=e.cleanData,V={object:1,OBJECT:1};e.cleanData=function(e){var t,i;if(e&&(i=e.length)&&c)for(t=0;i>t;t++)if(V[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(n){}}return W.apply(this,arguments)}}l?"media"in n.createElement("source")||t.reflectProperties("source",["media"]):(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),t.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});