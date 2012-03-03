Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,f,w,n){f.inputTypes=f.inputTypes||{};var s=f.cfg.forms,q,r=f.inputTypes,x={radio:1,checkbox:1};f.addInputType=function(b,a){r[b]=a};var t={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},u={valueMissing:function(b,c,d){if(!b.attr("required"))return!1;var m=!1;if(!("type"in d))d.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();
if("select"==d.nodeName){if(c=!c)if(!(c=0>b[0].selectedIndex))b=b[0],c="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=c}else b=x[d.type]?"checkbox"==d.type?!b.is(":checked"):!f.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!c;return b},tooLong:function(){return!1},typeMismatch:function(b,a,d){if(""===a||"select"==d.nodeName)return!1;var f=!1;if(!("type"in d))d.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();r[d.type]&&r[d.type].mismatch&&
(f=r[d.type].mismatch(a,b));return f},patternMismatch:function(b,a,d){if(""===a||"select"==d.nodeName)return!1;b=b.attr("pattern");if(!b)return!1;try{b=RegExp("^(?:"+b+")$")}catch(m){f.error('invalid pattern value: "'+b+'" | '+m),b=!1}return!b?!1:!b.test(a)}};f.addValidityRule=function(a,c){u[a]=c};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=this.form||this;a.data(b,"invalidEventShim")||(a(b).data("invalidEventShim",!0).bind("submit",
a.event.special.invalid.handler),f.moveToFirstEvent(b,"submit"))},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){q=!0;b.testedValidity=!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),q=!1;q=!1}}};a(n).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var y=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,
"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return y.apply(this,arguments)}});f.addInputType("email",{mismatch:function(){var a=s.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(c){return!a.test(c)}}()});f.addInputType("url",{mismatch:function(){var a=s.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});f.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return f.inputTypes[a]?a:this.type}}});f.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},t)}}},"prop");var j=function(b){var c,d=a.prop(b,"validity");if(d)a.data(b,"cachedValidity",
d);else return!0;if(!d.valid){c=a.Event("invalid");var m=a(b).trigger(c);if(q&&!j.unhandledInvalids&&!c.isDefaultPrevented())f.validityAlert.showFor(m),j.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return d.valid};f.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,c=a("input,textarea,select",this).filter(function(){var a=f.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});j.unhandledInvalids=!1;for(var d=0,m=c.length;d<m;d++)j(c[d])||
(b=!1);return b}}});f.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){j.unhandledInvalids=!1;return j(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");f.data(this,"customvalidationMessage",""+b)}},willValidate:{set:a.noop,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.disabled||c.readOnly||b[c.type]||c.form&&a.prop(c.form,"noValidate"))}}()},
validity:{set:a.noop,get:function(){var b=a(this).getNativeElement(),c=b[0],d=a.data(c,"cachedValidity");if(d)return d;d=a.extend({},t);if(!a.prop(c,"willValidate")||"submit"==c.type)return d;var m=b.val(),i={nodeName:c.nodeName.toLowerCase()};d.customError=!!f.data(c,"customvalidationMessage");if(d.customError)d.valid=!1;a.each(u,function(a,c){if(c(b,m,i))d[a]=!0,d.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",d.valid?"false":"true");c=b=null;return d}}},"prop");f.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<f.browserVersion});f.reflectProperties(["input"],["pattern"]);var p=function(){var b,c=0,d=a([]),f=1E9,i=function(){var a=d.prop("value"),b=a.length;b>c&&b>f&&(b=Math.max(c,f),d.prop("value",a.substr(0,b)));c=b},g=function(){clearTimeout(b);d.unbind(".maxlengthconstraint")};return function(l,h){g();if(-1<h)f=h,c=a.prop(l,"value").length,d=a(l),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",
function(){setTimeout(i,0)}),d.bind("keyup.maxlengthconstraint",i),d.bind("blur.maxlengthconstraint",g),b=setInterval(i,200)}}();p.update=function(b,c){b===n.activeElement&&(null==c&&(c=a.prop(b,"maxlength")),p(e.target,c))};a(n).bind("focusin",function(b){var c;"TEXTAREA"==b.target.nodeName&&-1<(c=a.prop(b.target,"maxlength"))&&p(b.target,c)});f.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);p.update(this)},get:function(){var a=this.getAttribute("maxlength");
return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);p.update(this,a)}else this.setAttribute("maxlength","0"),p.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});f.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}});
var z={submit:1,button:1,image:1},g={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),
d="form"+b.name,f=b.name,i="click.webshimssubmittermutate"+f,j=function(){if("form"in this&&z[this.type]){var h=a.prop(this,"form");if(h){var o=a.attr(this,d);if(null!=o&&(!b.limitedTo||o.toLowerCase()===a.prop(this,c))){var v=a.attr(h,f);a.attr(h,f,o);setTimeout(function(){if(null!=v)a.attr(h,f,v);else try{a(h).removeAttr(f)}catch(b){h.removeAttribute(f)}},9)}}}};switch(b.proptype){case "url":var l=n.createElement("form");g[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,
d);if(null==b)return"";l.setAttribute("action",b);return l.action}}};break;case "boolean":g[c]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":g[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var h=a.attr(this,d);return!h||(h=h.toLowerCase())&&!b.limitedTo[h]?b.defaultProp:h}}};break;default:g[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=
a.attr(this,d);return null!=b?b:""}}}}g[d]||(g[d]={});g[d].attr={set:function(b){g[d].attr._supset.call(this,b);a(this).unbind(i).bind(i,j)},get:function(){return g[d].attr._supget.call(this)}};g[d].initAttr=!0;g[d].removeAttr={value:function(){a(this).unbind(i);g[d].removeAttr._supvalue.call(this)}}});f.defineNodeNamesProperties(["input","button"],g);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")&&f.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",
""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}});f.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});f.addReady(function(b,c){var d;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==n&&!("form"in(n.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&
d.offsetHeight&&d.offsetWidth&&d.focus()}catch(f){}});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var b="over"==f.cfg.forms.placeholderType,c=["textarea"];Modernizr.input.placeholder||c.push("input");var d=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},g=function(c,
o,f,k){!1===f&&(f=a.prop(c,"value"));if(!b&&"password"!=c.type){if(!f&&k&&d(c)){var g;a(c).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(){c.value=a.prop(c,"value");o.box.removeClass("placeholder-visible");clearTimeout(g);a(c).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){d(c);clearTimeout(g);g=setTimeout(function(){d(c)},9)}).bind("blur.placeholderremove",
function(){clearTimeout(g);a(c).unbind(".placeholderremove")});return}c.value=f}else if(!f&&k){a(c).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(){o.box.removeClass("placeholder-visible");a(c).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(c).unbind(".placeholderremove")});return}o.box.removeClass("placeholder-visible")},i=function(c,d,f,k,i){if(!k&&(k=a.data(c,"placeHolder"),!k))return;a(c).unbind(".placeholderremove");
if("focus"==i||!i&&c===n.activeElement)("password"==c.type||b||a(c).hasClass("placeholder-visible"))&&g(c,k,"",!0);else if(!1===d&&(d=a.prop(c,"value")),d)g(c,k,d);else if(!1===f&&(f=a.attr(c,"placeholder")||""),f&&!d){d=k;!1===f&&(f=a.prop(c,"placeholder"));if(!b&&"password"!=c.type)c.value=f;d.box.addClass("placeholder-visible")}else g(c,k,d)},j=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labeledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),
d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},l=function(){var c={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(c){var d=a.data(c,"placeHolder");if(d)return d;d=a.data(c,"placeHolder",{text:j(c)});a(c).bind("focus.placeholder blur.placeholder",function(a){i(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});c.form&&a(c.form).bind("reset.placeholder",
function(a){setTimeout(function(){i(c,!1,!1,d,a.type)},0)});if("password"==c.type||b){d.box=a(c).wrap('<span class="placeholder-box placeholder-box-'+(c.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(c).bind("mousedown.placeholder",function(){i(this,!1,!1,d,"focus");try{setTimeout(function(){c.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(b,f){var g=(parseInt(a.curCSS(c,"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(c,"margin"+f),10)||0,0)+(parseInt(a.curCSS(c,
"border"+f+"Width"),10)||0);d.text.css("padding"+f,g)});a.curCSS(c,"lineHeight");var f={width:a(c).width(),height:a(c).height()},h=a.curCSS(c,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(b,f){var g=a.curCSS(c,f);d.text.css(f)!=g&&d.text.css(f,g)});f.width&&f.height&&d.text.css(f);"none"!==h&&d.box.addClass("placeholder-box-"+h)}else f=function(b){a(c).hasClass("placeholder-visible")&&(g(c,d,""),b&&"submit"==b.type&&setTimeout(function(){b.isDefaultPrevented()&&i(c,
!1,!1,d)},9))},a.nodeName(d.text[0],"label")&&setTimeout(function(){d.text.hide()[a.browser.msie?"insertBefore":"insertAfter"](c)},9),a(w).bind("beforeunload",f),d.box=a(c),c.form&&a(c.form).submit(f);return d},update:function(b,d){if(c[a.prop(b,"type")]||a.nodeName(b,"textarea")){var f=l.create(b);f.text.text(d);i(b,!1,d,f)}}}}();a.webshims.publicMethods={pHolder:l};c.forEach(function(a){f.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){f.contentAttr(this,"placeholder",a);l.update(this,
a)},get:function(){return f.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});c.forEach(function(b){var c={},d;["attr","prop"].forEach(function(b){c[b]={set:function(c){var g=f.contentAttr(this,"placeholder");a.removeData(this,"cachedValidity");var h=d[b]._supset.call(this,c);g&&"value"in this&&i(this,c,g);return h},get:function(){return a(this).hasClass("placeholder-visible")?"":d[b]._supget.call(this)}}});d=f.defineNodeNameProperty(b,"value",c)})}})()});
