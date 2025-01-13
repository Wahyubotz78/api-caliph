!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}((function(e){"use strict";var t=/\r?\n/g,r={};r.fileapi=void 0!==e('<input type="file">').get(0).files,r.formdata=void 0!==window.FormData;var a=!!e.fn.prop;function n(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function i(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout((function(){i.clk=i.clk_x=i.clk_y=null}),100)}function o(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}e.fn.attr2=function(){if(!a)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,n,i,s){if(!this.length)return o("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:n,dataType:i},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),u=t.method||t.type||this.attr2("method"),(l=(l="string"==typeof(c=t.url||this.attr2("action"))?e.trim(c):"")||window.location.href||"")&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var d={};if(this.trigger("form-pre-serialize",[this,t,d]),d.veto)return o("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return o("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var m,h=[],v=this.formToArray(t.semantic,h,t.filtering);if(t.data){var g=e.isFunction(t.data)?t.data(v):t.data;t.extraData=g,m=e.param(g,p)}if(t.beforeSubmit&&!1===t.beforeSubmit(v,this,t))return o("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,d]),d.veto)return o("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var x=e.param(v,p);m&&(x=x?x+"&"+m:m),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+x,t.data=null):t.data=x;var y=[];if(t.resetForm&&y.push((function(){f.resetForm()})),t.clearForm&&y.push((function(){f.clearForm(t.includeHidden)})),!t.dataType&&t.target){var b=t.success||function(){};y.push((function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each((function(){b.apply(this,i)}))}))}else t.success&&(e.isArray(t.success)?e.merge(y,t.success):y.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=y.length;i<o;i++)y[i].apply(n,[e,r,a||f,f])},t.error){var T=t.error;t.error=function(e,r,a){var n=t.context||this;T.apply(n,[e,r,a,f])}}if(t.complete){var j=t.complete;t.complete=function(e,r){var a=t.context||this;j.apply(a,[e,r,f])}}var w=e("input[type=file]:enabled",this).filter((function(){return""!==e(this).val()})),S=w.length>0,k="multipart/form-data",D=f.attr("enctype")===k||f.attr("encoding")===k,A=r.fileapi&&r.formdata;o("fileAPI :"+A);var L,F=(S||D)&&!A;!1!==t.iframe&&(t.iframe||F)?t.closeKeepAlive?e.get(t.closeKeepAlive,(function(){L=X(v)})):L=X(v):L=(S||D)&&A?O(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",L);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this;function M(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function O(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=M(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",(function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)}),!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}function X(r){var n,i,s,c,l,d,p,m,v,g,x,y,b=f[0],T=e.Deferred();if(T.abort=function(e){m.abort(e)},r)for(i=0;i<h.length;i++)n=e(h[i]),a?n.prop("disabled",!1):n.removeAttr("disabled");(s=e.extend(!0,{},e.ajaxSettings,t)).context=s.context||s,l="jqFormIO"+(new Date).getTime();var j=b.ownerDocument,w=f.closest("body");if(s.iframeTarget?(g=(d=e(s.iframeTarget,j)).attr2("name"))?l=g:d.attr2("name",l):(d=e('<iframe name="'+l+'" src="'+s.iframeSrc+'" />',j)).css({position:"absolute",top:"-1000px",left:"-1000px"}),p=d[0],m={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";o("aborting upload... "+r),this.aborted=1;try{p.contentWindow.document.execCommand&&p.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",s.iframeSrc),m.error=r,s.error&&s.error.call(s.context,m,r,t),c&&e.event.trigger("ajaxError",[m,s,r]),s.complete&&s.complete.call(s.context,m,r)}},(c=s.global)&&0==e.active++&&e.event.trigger("ajaxStart"),c&&e.event.trigger("ajaxSend",[m,s]),s.beforeSend&&!1===s.beforeSend.call(s.context,m,s))return s.global&&e.active--,T.reject(),T;if(m.aborted)return T.reject(),T;function S(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){o("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){o("cannot get iframe.contentDocument: "+r),t=e.document}return t}(v=b.clk)&&(g=v.name)&&!v.disabled&&(s.extraData=s.extraData||{},s.extraData[g]=v.value,"image"===v.type&&(s.extraData[g+".x"]=b.clk_x,s.extraData[g+".y"]=b.clk_y));var k=e("meta[name=csrf-token]").attr("content"),D=e("meta[name=csrf-param]").attr("content");function A(){var t=f.attr2("target"),r=f.attr2("action"),a=f.attr("enctype")||f.attr("encoding")||"multipart/form-data";b.setAttribute("target",l),u&&!/post/i.test(u)||b.setAttribute("method","POST"),r!==s.url&&b.setAttribute("action",s.url),s.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),s.timeout&&(y=setTimeout((function(){x=!0,O(1)}),s.timeout));var n=[];try{if(s.extraData)for(var i in s.extraData)s.extraData.hasOwnProperty(i)&&(e.isPlainObject(s.extraData[i])&&s.extraData[i].hasOwnProperty("name")&&s.extraData[i].hasOwnProperty("value")?n.push(e('<input type="hidden" name="'+s.extraData[i].name+'">',j).val(s.extraData[i].value).appendTo(b)[0]):n.push(e('<input type="hidden" name="'+i+'">',j).val(s.extraData[i]).appendTo(b)[0]));s.iframeTarget||d.appendTo(w),p.attachEvent?p.attachEvent("onload",O):p.addEventListener("load",O,!1),setTimeout((function e(){try{var t=S(p).readyState;o("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){o("Server abort: ",e," (",e.name,")"),O(2),y&&clearTimeout(y),y=void 0}}),15);try{b.submit()}catch(e){document.createElement("form").submit.apply(b)}}finally{b.setAttribute("action",r),b.setAttribute("enctype",a),t?b.setAttribute("target",t):f.removeAttr("target"),e(n).remove()}}D&&k&&(s.extraData=s.extraData||{},s.extraData[D]=k),s.forceSync?A():setTimeout(A,10);var L,F,E,M=50;function O(t){if(!m.aborted&&!E){if((F=S(p))||(o("cannot access response document"),t=2),1===t&&m)return m.abort("timeout"),void T.reject(m,"timeout");if(2===t&&m)return m.abort("server abort"),void T.reject(m,"error","server abort");if(F&&F.location.href!==s.iframeSrc||x){p.detachEvent?p.detachEvent("onload",O):p.removeEventListener("load",O,!1);var r,a="success";try{if(x)throw"timeout";var n="xml"===s.dataType||F.XMLDocument||e.isXMLDoc(F);if(o("isXml="+n),!n&&window.opera&&(null===F.body||!F.body.innerHTML)&&--M)return o("requeing onLoad callback, DOM not available"),void setTimeout(O,250);var i=F.body?F.body:F.documentElement;m.responseText=i?i.innerHTML:null,m.responseXML=F.XMLDocument?F.XMLDocument:F,n&&(s.dataType="xml"),m.getResponseHeader=function(e){return{"content-type":s.dataType}[e.toLowerCase()]},i&&(m.status=Number(i.getAttribute("status"))||m.status,m.statusText=i.getAttribute("statusText")||m.statusText);var u=(s.dataType||"").toLowerCase(),l=/(json|script|text)/.test(u);if(l||s.textarea){var f=F.getElementsByTagName("textarea")[0];if(f)m.responseText=f.value,m.status=Number(f.getAttribute("status"))||m.status,m.statusText=f.getAttribute("statusText")||m.statusText;else if(l){var h=F.getElementsByTagName("pre")[0],v=F.getElementsByTagName("body")[0];h?m.responseText=h.textContent?h.textContent:h.innerText:v&&(m.responseText=v.textContent?v.textContent:v.innerText)}}else"xml"===u&&!m.responseXML&&m.responseText&&(m.responseXML=X(m.responseText));try{L=q(m,u,s)}catch(e){a="parsererror",m.error=r=e||a}}catch(e){o("error caught: ",e),a="error",m.error=r=e||a}m.aborted&&(o("upload aborted"),a=null),m.status&&(a=m.status>=200&&m.status<300||304===m.status?"success":"error"),"success"===a?(s.success&&s.success.call(s.context,L,"success",m),T.resolve(m.responseText,"success",m),c&&e.event.trigger("ajaxSuccess",[m,s])):a&&(void 0===r&&(r=m.statusText),s.error&&s.error.call(s.context,m,a,r),T.reject(m,"error",r),c&&e.event.trigger("ajaxError",[m,s,r])),c&&e.event.trigger("ajaxComplete",[m,s]),c&&!--e.active&&e.event.trigger("ajaxStop"),s.complete&&s.complete.call(s.context,m,a),E=!0,s.timeout&&clearTimeout(y),setTimeout((function(){s.iframeTarget?d.attr("src",s.iframeSrc):d.remove(),m.responseXML=null}),100)}}}var X=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},q=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=C(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return T}},e.fn.ajaxForm=function(t,r,a,s){if(("string"==typeof t||!1===t&&arguments.length>0)&&(t={url:t,data:r,dataType:a},"function"==typeof s&&(t.success=s)),(t=t||{}).delegation=t.delegation&&e.isFunction(e.fn.on),!t.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(o("DOM not ready, queuing ajaxForm"),e((function(){e(u.s,u.c).ajaxForm(t)})),this):(o("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return t.delegation?(e(document).off("submit.form-plugin",this.selector,n).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,t,n).on("click.form-plugin",this.selector,t,i),this):this.ajaxFormUnbind().on("submit.form-plugin",t,n).on("click.form-plugin",t,i)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,a,n){var i=[];if(0===this.length)return i;var o,s,u,c,l,f,d,p,m=this[0],h=this.attr("id"),v=t||void 0===m.elements?m.getElementsByTagName("*"):m.elements;if(v&&(v=e.makeArray(v)),h&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(o)),!v||!v.length)return i;for(e.isFunction(n)&&(v=e.map(v,n)),s=0,d=v.length;s<d;s++)if((c=(f=v[s]).name)&&!f.disabled)if(t&&m.clk&&"image"===f.type)m.clk===f&&(i.push({name:c,value:e(f).val(),type:f.type}),i.push({name:c+".x",value:m.clk_x},{name:c+".y",value:m.clk_y}));else if((l=e.fieldValue(f,!0))&&l.constructor===Array)for(a&&a.push(f),u=0,p=l.length;u<p;u++)i.push({name:c,value:l[u]});else if(r.fileapi&&"file"===f.type){a&&a.push(f);var g=f.files;if(g.length)for(u=0;u<g.length;u++)i.push({name:c,value:g[u],type:f.type});else i.push({name:c,value:"",type:f.type})}else null!=l&&(a&&a.push(f),i.push({name:c,value:l,type:f.type,required:f.required}));if(!t&&m.clk){var x=e(m.clk),y=x[0];(c=y.name)&&!y.disabled&&"image"===y.type&&(i.push({name:c,value:x.val()}),i.push({name:c+".x",value:m.clk_x},{name:c+".y",value:m.clk_y}))}return i},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each((function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!=n&&r.push({name:this.name,value:n})}})),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(r,a){var n=r.name,i=r.type,o=r.tagName.toLowerCase();if(void 0===a&&(a=!0),a&&(!n||r.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!r.checked||("submit"===i||"image"===i)&&r.form&&r.form.clk!==r||"select"===o&&-1===r.selectedIndex))return null;if("select"===o){var s=r.selectedIndex;if(s<0)return null;for(var u=[],c=r.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(r).val().replace(t,"\r\n")},e.fn.clearForm=function(t){return this.each((function(){e("input,select,textarea",this).clearFields(t)}))},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each((function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")}))},e.fn.resetForm=function(){return this.each((function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each((function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1})),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}}))},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each((function(){this.disabled=!e}))},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each((function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}}))},e.fn.ajaxSubmit.debug=!1}));