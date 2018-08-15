!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function L(){}function R(t,n){for(var e in n)t[e]=n[e];return t}function u(t,n){for(var e in n)t[e]=1;return t}function j(t,n){t.appendChild(n)}function M(t,n,e){t.insertBefore(n,e)}function I(t){t.parentNode.removeChild(t)}function s(t,n){for(;t.firstChild;)n.appendChild(t.firstChild)}function U(){return document.createDocumentFragment()}function B(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function l(t,n,e){t.addEventListener(n,e,!1)}function f(t,n,e){t.removeEventListener(n,e,!1)}function Y(t,n){t._handlers=Object.create(null),t._bind=n._bind,t.options=n,t.root=n.root||t,t.store=n.store||t.root.store}function D(t){for(;t&&t.length;)t.shift()()}var t={destroy:function(t){this.destroy=L,this.fire("destroy"),this.set=L,this._fragment.d(!1!==t),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,n){var e=t in this._handlers&&this._handlers[t].slice();if(e)for(var o=0;o<e.length;o+=1){var r=e[o];if(!r.__calling)try{r.__calling=!0,r.call(this,n)}finally{r.__calling=!1}}},on:function(t,n){var e=this._handlers[t]||(this._handlers[t]=[]);return e.push(n),{cancel:function(){var t=e.indexOf(n);~t&&e.splice(t,1)}}},set:function(t){this._set(R({},t)),this.root._lock||(this.root._lock=!0,D(this.root._beforecreate),D(this.root._oncreate),D(this.root._aftercreate),this.root._lock=!1)},_recompute:L,_set:function(t){var n=this._state,e={},o=!1;for(var r in t)this._differs(t[r],n[r])&&(e[r]=o=!0);o&&(this._state=R(R({},n),t),this._recompute(e,this._state),this._bind&&this._bind(e,this._state),this._fragment&&(this.fire("state",{changed:e,current:this._state,previous:n}),this._fragment.p(e,this._state),this.fire("update",{changed:e,current:this._state,previous:n})))},_mount:function(t,n){this._fragment[this._fragment.i?"i":"m"](t,n||null)},_differs:function(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}},o="router-link-active";var n={navigate:function(t,n){(t.preventDefault(),n)&&(history.location.pathname!==n&&(this.get().replace?history.replace(n):history.push(n)))},setActiveClass:function(t){var n=t.pathname===this.get().to;this.set({isActive:n})}};function i(){this.get().event()}function a(t){var n=this;Y(this,t),this._state=R({replace:!1,to:"/",basePath:"",isActive:!1,className:"",activeClassName:o,event:null},t.data),this._recompute({isActive:1,className:1,activeClassName:1},this._state),this._intro=!0,this._handlers.destroy=[i],this._slotted=t.slots||{},t.root||(this._oncreate=[]),this.slots={},this._fragment=function(n,e){var o,r,i=n._slotted.default;function a(t){n.navigate(t,e.to)}return{c:function(){l(o=B("a"),"click",a),o.href=r=""+e.basePath+e.to,o.className=e.computedClassName},m:function(t,n){M(t,o,n),i&&j(o,i)},p:function(t,n){e=n,(t.basePath||t.to)&&r!==(r=""+e.basePath+e.to)&&(o.href=r),t.computedClassName&&(o.className=e.computedClassName)},d:function(t){t&&I(o),i&&s(o,i),f(o,"click",a)}}}(this,this._state),this.root._oncreate.push(function(){(function(){this.setActiveClass(history.location),this.set({event:history.listen(this.setActiveClass.bind(this))})}).call(n),n.fire("update",{changed:u({},n._state),current:n._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),D(this._oncreate))}R(a.prototype,t),R(a.prototype,n),a.prototype._recompute=function(t,n){var e,o,r,i,a;(t.isActive||t.className||t.activeClassName)&&this._differs(n.computedClassName,n.computedClassName=(o=(e=n).isActive,r=e.className,i=e.activeClassName,a=[],"string"==typeof r&&a.push(r),o&&a.push(i),a.join(" ")))&&(t.computedClassName=!0)};var A=function(){},N=function(t,n,e,o,r,i,a,s){if(!t){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[e,o,r,i,a,s],u=0;(c=new Error(n.replace(/%s/g,function(){return l[u++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}};function d(t){return"/"===t.charAt(0)}function p(t,n){for(var e=n,o=e+1,r=t.length;o<r;e+=1,o+=1)t[e]=t[o];t.pop()}var h="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)};var m,H=function(t){return"/"===t.charAt(0)?t:"/"+t},g=function(t){return"/"===t.charAt(0)?t.substr(1):t},T=function(t,n){return new RegExp("^"+n+"(\\/|\\?|#|$)","i").test(t)},E=function(t,n){return T(t,n)?t.substr(n.length):t},J=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},q=function(t){var n=t.pathname,e=t.search,o=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r},b=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},G=function(t,n,e,o){var r=void 0;"string"==typeof t?(r=function(t){var n=t||"/",e="",o="",r=n.indexOf("#");-1!==r&&(o=n.substr(r),n=n.substr(0,r));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===o?"":o}}(t)).state=n:(void 0===(r=b({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==n&&void 0===r.state&&(r.state=n));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(r.key=e),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",e=t&&t.split("/")||[],o=n&&n.split("/")||[],r=t&&d(t),i=n&&d(n),a=r||i;if(t&&d(t)?o=e:e.length&&(o.pop(),o=o.concat(e)),!o.length)return"/";var s=void 0;if(o.length){var c=o[o.length-1];s="."===c||".."===c||""===c}else s=!1;for(var l=0,u=o.length;0<=u;u--){var f=o[u];"."===f?p(o,u):".."===f?(p(o,u),l++):l&&(p(o,u),l--)}if(!a)for(;l--;l)o.unshift("..");!a||""===o[0]||o[0]&&d(o[0])||o.unshift("");var h=o.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h}(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r},P=function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&function e(n,o){if(n===o)return!0;if(null==n||null==o)return!1;if(Array.isArray(n))return Array.isArray(o)&&n.length===o.length&&n.every(function(t,n){return e(t,o[n])});var t=void 0===n?"undefined":h(n);if(t!==(void 0===o?"undefined":h(o)))return!1;if("object"===t){var r=n.valueOf(),i=o.valueOf();if(r!==n||i!==o)return e(r,i);var a=Object.keys(n),s=Object.keys(o);return a.length===s.length&&a.every(function(t){return e(n[t],o[t])})}return!1}(t.state,n.state)},K=function(){var i=null,o=[];return{setPrompt:function(t){return A(null==i,"A history supports only one prompt at a time"),i=t,function(){i===t&&(i=null)}},confirmTransitionTo:function(t,n,e,o){if(null!=i){var r="function"==typeof i?i(t,n):i;"string"==typeof r?"function"==typeof e?e(r,o):(A(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==r)}else o(!0)},appendListener:function(t){var n=!0,e=function(){n&&t.apply(void 0,arguments)};return o.push(e),function(){n=!1,o=o.filter(function(t){return t!==e})}},notifyListeners:function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];o.forEach(function(t){return t.apply(void 0,n)})}}},W=!("undefined"==typeof window||!window.document||!window.document.createElement),Q=function(t,n,e){return t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent("on"+n,e)},V=function(t,n,e){return t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent("on"+n,e)},Z=function(t,n){return n(window.confirm(t))},$="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},X=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},tt="popstate",nt="hashchange",et=function(){try{return window.history.state||{}}catch(t){return{}}},v=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};N(W,"Browser history needs a DOM");var n,s=window.history,c=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,e=!(-1===window.navigator.userAgent.indexOf("Trident")),o=t.forceRefresh,l=void 0!==o&&o,r=t.getUserConfirmation,u=void 0===r?Z:r,i=t.keyLength,a=void 0===i?6:i,f=t.basename?J(H(t.basename)):"",h=function(t){var n=t||{},e=n.key,o=n.state,r=window.location,i=r.pathname+r.search+r.hash;return A(!f||T(i,f),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+f+'".'),f&&(i=E(i,f)),G(i,o,e)},d=function(){return Math.random().toString(36).substr(2,a)},p=K(),m=function(t){X(P,t),P.length=s.length,p.notifyListeners(P.location,P.action)},g=function(t){void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")||y(h(t.state))},b=function(){y(h(et()))},v=!1,y=function(n){if(v)v=!1,m();else{p.confirmTransitionTo(n,"POP",u,function(t){t?m({action:"POP",location:n}):w(n)})}},w=function(t){var n=P.location,e=x.indexOf(n.key);-1===e&&(e=0);var o=x.indexOf(t.key);-1===o&&(o=0);var r=e-o;r&&(v=!0,S(r))},_=h(et()),x=[_.key],k=function(t){return f+q(t)},S=function(t){s.go(t)},C=0,O=function(t){1===(C+=t)?(Q(window,tt,g),e&&Q(window,nt,b)):0===C&&(V(window,tt,g),e&&V(window,nt,b))},z=!1,P={length:s.length,action:"POP",location:_,createHref:k,push:function(t,n){A(!("object"===(void 0===t?"undefined":$(t))&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=G(t,n,d(),P.location);p.confirmTransitionTo(a,"PUSH",u,function(t){if(t){var n=k(a),e=a.key,o=a.state;if(c)if(s.pushState({key:e,state:o},null,n),l)window.location.href=n;else{var r=x.indexOf(P.location.key),i=x.slice(0,-1===r?0:r+1);i.push(a.key),x=i,m({action:"PUSH",location:a})}else A(void 0===o,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=n}})},replace:function(t,n){A(!("object"===(void 0===t?"undefined":$(t))&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i="REPLACE",a=G(t,n,d(),P.location);p.confirmTransitionTo(a,i,u,function(t){if(t){var n=k(a),e=a.key,o=a.state;if(c)if(s.replaceState({key:e,state:o},null,n),l)window.location.replace(n);else{var r=x.indexOf(P.location.key);-1!==r&&(x[r]=a.key),m({action:i,location:a})}else A(void 0===o,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(n)}})},go:S,goBack:function(){return S(-1)},goForward:function(){return S(1)},block:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],n=p.setPrompt(t);return z||(O(1),z=!0),function(){return z&&(z=!1,O(-1)),n()}},listen:function(t){var n=p.appendListener(t);return O(1),function(){O(-1),n()}}};return P},ot=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},rt="hashchange",it={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+g(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:g,decodePath:H},slash:{encodePath:H,decodePath:H}},at=function(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)},st=function(t){var n=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,0<=n?n:0)+"#"+t)},y=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};N(W,"Hash history needs a DOM");var n=window.history,e=-1===window.navigator.userAgent.indexOf("Firefox"),o=t.getUserConfirmation,s=void 0===o?Z:o,r=t.hashType,i=void 0===r?"slash":r,c=t.basename?J(H(t.basename)):"",a=it[i],l=a.encodePath,u=a.decodePath,f=function(){var t=u(at());return A(!c||T(t,c),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+c+'".'),c&&(t=E(t,c)),G(t)},h=K(),d=function(t){ot(z,t),z.length=n.length,h.notifyListeners(z.location,z.action)},p=!1,m=null,g=function(){var t=at(),n=l(t);if(t!==n)st(n);else{var e=f(),o=z.location;if(!p&&P(o,e))return;if(m===q(e))return;m=null,b(e)}},b=function(n){if(p)p=!1,d();else{h.confirmTransitionTo(n,"POP",s,function(t){t?d({action:"POP",location:n}):v(n)})}},v=function(t){var n=z.location,e=x.lastIndexOf(q(n));-1===e&&(e=0);var o=x.lastIndexOf(q(t));-1===o&&(o=0);var r=e-o;r&&(p=!0,k(r))},y=at(),w=l(y);y!==w&&st(w);var _=f(),x=[q(_)],k=function(t){A(e,"Hash history go(n) causes a full page reload in this browser"),n.go(t)},S=0,C=function(t){1===(S+=t)?Q(window,rt,g):0===S&&V(window,rt,g)},O=!1,z={length:n.length,action:"POP",location:_,createHref:function(t){return"#"+l(c+q(t))},push:function(t,n){A(void 0===n,"Hash history cannot push state; it is ignored");var a=G(t,void 0,void 0,z.location);h.confirmTransitionTo(a,"PUSH",s,function(t){if(t){var n,e=q(a),o=l(c+e);if(at()!==o){m=e,n=o,window.location.hash=n;var r=x.lastIndexOf(q(z.location)),i=x.slice(0,-1===r?0:r+1);i.push(e),x=i,d({action:"PUSH",location:a})}else A(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),d()}})},replace:function(t,n){A(void 0===n,"Hash history cannot replace state; it is ignored");var r="REPLACE",i=G(t,void 0,void 0,z.location);h.confirmTransitionTo(i,r,s,function(t){if(t){var n=q(i),e=l(c+n);at()!==e&&(m=n,st(e));var o=x.indexOf(q(z.location));-1!==o&&(x[o]=n),d({action:r,location:i})}})},go:k,goBack:function(){return k(-1)},goForward:function(){return k(1)},block:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],n=h.setPrompt(t);return O||(C(1),O=!0),function(){return O&&(O=!1,C(-1)),n()}},listen:function(t){var n=h.appendListener(t);return C(1),function(){C(-1),n()}}};return z},w="[a-zA-Z]+",_=function(t,n,e,o){var r=t[n],i=r.Component,a=r.props;i||(i=t[n]);var s={data:{path:o}};return a=a||{},Object.prototype.hasOwnProperty.call(a,"data")&&(a.data.path=o,s={}),new i(function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(t){c(n,t,e[t])})}return n}({target:e},a,s))},x=function(t,o){var n=t.filter(function(t){return null!==t.match(new RegExp(":".concat(w)))}).map(function(t){return t.match(new RegExp(":(".concat(w,")")))[1]}),r={};return n.forEach(function(t,n){var e=n+1;r[t]=o[e]}),r},k="default",S=function(){function n(t){var s=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,"target",null),c(this,"listener",null),c(this,"content",null),c(this,"options",{}),c(this,"handleRouteChange",function(t){var n=!1;for(var e in s.content&&(s.content.destroy(),s.content=null),s.options.routes)if(Object.prototype.hasOwnProperty.call(s.options.routes,e)){var o=e.split("/"),r=o.map(function(t){return null!==t.match(new RegExp(":".concat(w)))?"([a-zA-Z0-9]+)":t}).join("\\/"),i=t.pathname.match(new RegExp("^".concat(r,"$")));if(null!==i){var a=x(o,i);s.content=_(s.options.routes,e,s.target,a),n=!0;break}}!n&&s.options.routes[k]&&(s.content=_(s.options.routes,k,s.target,{}))}),this.options=t,m=function(t){switch(t){case"history":return v();default:return y()}}(t.mode),Object.defineProperty(window,"history",{get:function(){return m}})}var t,e,o;return t=n,(e=[{key:"create",value:function(t){this.target="string"==typeof t?document.querySelector(t):t,this.listener=m.listen(this.handleRouteChange),this.handleRouteChange(m.location)}},{key:"destroy",value:function(){this.listener&&(this.listener(),this.listener=null)}}])&&r(t.prototype,e),o&&r(t,o),n}();S.push=function(t){m.push(t)},S.replace=function(t){m.replace(t)},S.go=function(t){m.go(t)},S.listen=function(t){m.listen(t)},S.__VERSION__="2.0.0-beta.0",S.RouterLink=a;var C='<h1 id="introduction">Introduction</h1>\n<p>Svelte Router is an unofficial router for <a href="https://svelte.technology">Svelte</a>.</p>\n<p>Just for fun :)</p>\n';function O(t){var e,o;Y(this,t),this._state=R({content:C},t.data),this._intro=!0,this._fragment=(e=this._state,{c:function(){o=B("section")},m:function(t,n){M(t,o,n),o.innerHTML=e.content},p:function(t,n){t.content&&(o.innerHTML=n.content)},d:function(t){t&&I(o)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}R(O.prototype,t);var z='<h1 id="installation">Installation</h1>\n<h2 id="npm">npm</h2>\n<p>Installing with npm is recommended and it works seamlessly with webpack.</p>\n<pre><code class="lang-sh">npm install svelte-router\n</code></pre>\n<h2 id="cdn">CDN</h2>\n<pre><code class="lang-html">&lt;script src=&quot;//unpkg.com/svelte-router/lib/svelte-router.js&quot;&gt;&lt;/script&gt;\n</code></pre>\n';function ct(t){var e,o;Y(this,t),this._state=R({content:z},t.data),this._intro=!0,this._fragment=(e=this._state,{c:function(){o=B("section")},m:function(t,n){M(t,o,n),o.innerHTML=e.content},p:function(t,n){t.content&&(o.innerHTML=n.content)},d:function(t){t&&I(o)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}R(ct.prototype,t);var lt='<h1 id="basic-usage">Basic Usage</h1>\n';function ut(t){var e,o;Y(this,t),this._state=R({content:lt},t.data),this._intro=!0,this._fragment=(e=this._state,{c:function(){o=B("section")},m:function(t,n){M(t,o,n),o.innerHTML=e.content},p:function(t,n){t.content&&(o.innerHTML=n.content)},d:function(t){t&&I(o)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}R(ut.prototype,t);var ft='<h1 id="api">API</h1>\n';function ht(t){var e,o;Y(this,t),this._state=R({content:ft},t.data),this._intro=!0,this._fragment=(e=this._state,{c:function(){o=B("section")},m:function(t,n){M(t,o,n),o.innerHTML=e.content},p:function(t,n){t.content&&(o.innerHTML=n.content)},d:function(t){t&&I(o)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}R(ht.prototype,t);var dt='<h1 id="routerlink">RouterLink</h1>\n';function pt(t){var e,o;Y(this,t),this._state=R({content:dt},t.data),this._intro=!0,this._fragment=(e=this._state,{c:function(){o=B("section")},m:function(t,n){M(t,o,n),o.innerHTML=e.content},p:function(t,n){t.content&&(o.innerHTML=n.content)},d:function(t){t&&I(o)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}R(pt.prototype,t);function mt(t){Y(this,t),this._state=R({},t.data),this._intro=!0,this._slotted=t.slots||{},this.slots={},this._fragment=function(n,t){var e,o=n._slotted.default;function r(t){n.handleClick()}return{c:function(){l(e=B("button"),"click",r),e.className="alius-button is-primary"},m:function(t,n){M(t,e,n),o&&j(e,o)},p:L,d:function(t){t&&I(e),o&&s(e,o),f(e,"click",r)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}R(mt.prototype,t),R(mt.prototype,{handleClick:function(){this.fire("click")}});var gt={goHome:function(){S.replace("/")}};function bt(t){var n,e,o,r,i;Y(this,t),this._state=R({},t.data),this._intro=!0,t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=((n=this)._state,(i=new mt({root:n.root,store:n.store,slots:{default:U()}})).on("click",function(t){n.goHome()}),{c:function(){(e=B("h1")).textContent="404 Not Found",o=F("\n"),r=F("Go Home"),i._fragment.c()},m:function(t,n){M(t,e,n),M(t,o,n),j(i._slotted.default,r),i._mount(t,n)},p:L,d:function(t){t&&(I(e),I(o)),i.destroy(t)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,D(this._beforecreate),D(this._oncreate),D(this._aftercreate),this._lock=!1)}R(bt.prototype,t),R(bt.prototype,gt);var vt={mode:"hash",routes:{"/":O,"/installation":ct,"/guide/basic-usage":ut,"/guide/api":ht,"/component/router-link":pt,default:bt}},yt=S.RouterLink;function wt(t){var n,e,o,r,i,a,s,c;Y(this,t),this._state=R({},t.data),this._intro=!0,document.getElementById("svelte-1724mea-style")||((n=B("style")).id="svelte-1724mea-style",n.textContent=".sr-header.svelte-1724mea{height:64px;padding:0 24px;display:flex;align-items:center;box-shadow:0 0 15px 0 rgba(0, 0, 0, .05)}.sr-header.svelte-1724mea h1.svelte-1724mea{margin:0;font-size:24px;font-weight:300}",j(document.head,n)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=((e=this)._state,c=new yt({root:e.root,store:e.store,slots:{default:U()},data:{to:"/"}}),{c:function(){o=B("header"),r=F("\n    "),i=B("h1"),a=F("Svelte Router"),s=F("\n  "),c._fragment.c(),i.className="svelte-1724mea",o.className="sr-header svelte-1724mea"},m:function(t,n){M(t,o,n),j(c._slotted.default,r),j(c._slotted.default,i),j(i,a),j(c._slotted.default,s),c._mount(o,null)},p:L,d:function(t){t&&I(o),c.destroy()}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,D(this._beforecreate),D(this._oncreate),D(this._aftercreate),this._lock=!1)}R(wt.prototype,t);var _t=S.RouterLink;function xt(t){var n,e,o,r,i,a,s,c,l,u,f,h,d,p,m,g,b,v,y,w,_,x,k,S,C,O,z,P,A,N,H,T,E;Y(this,t),this._state=R({},t.data),this._intro=!0,document.getElementById("svelte-dbz4to-style")||((n=B("style")).id="svelte-dbz4to-style",n.textContent=".sr-menu.svelte-dbz4to{width:240px;height:100%;box-shadow:0 0 15px 0 rgba(0, 0, 0, .05);overflow:auto}.sr-menu.svelte-dbz4to ul.svelte-dbz4to{padding:0;list-style:none}.sr-menu.svelte-dbz4to a{padding:6px 0 6px 24px;color:var(--sliver);display:block}.sr-menu.svelte-dbz4to a.router-link-active{color:var(--primary);box-shadow:4px 0px 0px inset var(--primary)}.sr-menu-group.svelte-dbz4to span.svelte-dbz4to{padding:6px 0 6px 24px;color:var(--sliver);font-weight:bold;display:block}.sr-menu-group.svelte-dbz4to a{padding-left:36px}",j(document.head,n)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=((e=this)._state,A=new _t({root:e.root,store:e.store,slots:{default:U()},data:{to:"/"}}),N=new _t({root:e.root,store:e.store,slots:{default:U()},data:{to:"/installation"}}),H=new _t({root:e.root,store:e.store,slots:{default:U()},data:{to:"/guide/basic-usage",replace:!0}}),T=new _t({root:e.root,store:e.store,slots:{default:U()},data:{to:"/guide/api"}}),E=new _t({root:e.root,store:e.store,slots:{default:U()},data:{to:"/component/router-link",replace:!0}}),{c:function(){o=B("aside"),r=B("ul"),i=B("li"),a=F("Introduction"),A._fragment.c(),s=F("\n    "),c=B("li"),l=F("Installation"),N._fragment.c(),u=F("\n    "),f=B("li"),h=B("div"),(d=B("span")).textContent="Getting Started",p=F("\n        "),m=B("ul"),g=B("li"),b=F("Basic Usage"),H._fragment.c(),v=F("\n          "),y=B("li"),w=F("API"),T._fragment.c(),_=F("\n    "),x=B("li"),k=B("div"),(S=B("span")).textContent="Component",C=F("\n        "),O=B("ul"),z=B("li"),P=F("RouterLink"),E._fragment.c(),d.className="svelte-dbz4to",m.className="svelte-dbz4to",h.className="sr-menu-group svelte-dbz4to",S.className="svelte-dbz4to",O.className="svelte-dbz4to",k.className="sr-menu-group svelte-dbz4to",r.className="svelte-dbz4to",o.className="sr-menu svelte-dbz4to"},m:function(t,n){M(t,o,n),j(o,r),j(r,i),j(A._slotted.default,a),A._mount(i,null),j(r,s),j(r,c),j(N._slotted.default,l),N._mount(c,null),j(r,u),j(r,f),j(f,h),j(h,d),j(h,p),j(h,m),j(m,g),j(H._slotted.default,b),H._mount(g,null),j(m,v),j(m,y),j(T._slotted.default,w),T._mount(y,null),j(r,_),j(r,x),j(x,k),j(k,S),j(k,C),j(k,O),j(O,z),j(E._slotted.default,P),E._mount(z,null)},p:L,d:function(t){t&&I(o),A.destroy(),N.destroy(),H.destroy(),T.destroy(),E.destroy()}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,D(this._beforecreate),D(this._oncreate),D(this._aftercreate),this._lock=!1)}R(xt.prototype,t);var kt=new S(vt);function St(){kt.destroy()}function Ct(t){var n,e,o,r,i,a,s,c,l=this;Y(this,t),this._state=R({},t.data),this._intro=!0,this._handlers.destroy=[St],document.getElementById("svelte-1y0r6yl-style")||((n=B("style")).id="svelte-1y0r6yl-style",n.textContent="html, body, #example{height:100%}#app{max-width:740px;margin:auto}.sr-container.svelte-1y0r6yl{height:calc(100% - 64px);display:flex}.sr-main.svelte-1y0r6yl{width:calc(100% - 240px);height:100%;padding:12px 36px;overflow:auto}",j(document.head,n)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=((e=this)._state,s=new wt({root:e.root,store:e.store}),c=new xt({root:e.root,store:e.store}),{c:function(){s._fragment.c(),o=F("\n"),r=B("section"),c._fragment.c(),i=F("\n  "),(a=B("main")).innerHTML='<div id="app"></div>',a.className="sr-main svelte-1y0r6yl",r.className="sr-container svelte-1y0r6yl"},m:function(t,n){s._mount(t,n),M(t,o,n),M(t,r,n),c._mount(r,null),j(r,i),j(r,a)},p:L,d:function(t){s.destroy(t),t&&(I(o),I(r)),c.destroy()}}),this.root._oncreate.push(function(){(function(){kt.create("#app")}).call(l),l.fire("update",{changed:u({},l._state),current:l._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,D(this._beforecreate),D(this._oncreate),D(this._aftercreate),this._lock=!1)}S.listen(function(){console.log("router changed")}),R(Ct.prototype,t);!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===e&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}('/*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/* Document\n   ========================================================================== */\n\n/**\n * Use a better box model (opinionated).\n */\n\nhtml {\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n\t-webkit-box-sizing: inherit;\n\t        box-sizing: inherit;\n}\n\n/**\n * Use a more readable tab size (opinionated).\n */\n\n:root {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n\tmargin: 0;\n}\n\n/**\n * Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n */\n\nbody {\n\tfont-family:\n\t\t-apple-system,\n\t\tBlinkMacSystemFont,\n\t\t\'Segoe UI\',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t\'Apple Color Emoji\',\n\t\t\'Segoe UI Emoji\',\n\t\t\'Segoe UI Symbol\';\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct height in Firefox.\n */\n\nhr {\n\theight: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Add the correct text decoration in Chrome, Edge, and Safari.\n */\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n * 1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family: SFMono-Regular, Consolas, \'Liberation Mono\', Menlo, Courier, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\n * Remove the inheritance of text transform in Edge and Firefox.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n\t-webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\'button\']::-moz-focus-inner,\n[type=\'reset\']::-moz-focus-inner,\n[type=\'submit\']::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\'button\']:-moz-focusring,\n[type=\'reset\']:-moz-focusring,\n[type=\'submit\']:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * Remove the padding so developers are not caught out when they zero out `fieldset` elements in all browsers.\n */\n\nlegend {\n\tpadding: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome and Firefox.\n */\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n[type=\'number\']::-webkit-inner-spin-button,\n[type=\'number\']::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\'search\'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\'search\']::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Chrome and Safari.\n */\n\nsummary {\n\tdisplay: list-item;\n}\n\n:root {\n  --default: #969696;\n  --primary: #1f74ff;\n  --danger: #ff4757;\n  --success: #46c93a;\n  --dark: #1e1e1e;\n  --warning: #ffba00;\n  --white: #ffffff;\n  --gray: #fafafa;\n  --sliver: #565a5f;\n\n  --header-color: #495060;\n  --border-color: #ededed;\n\n  --mark-background-color: rgba(255, 229, 100, .3);\n  --mark-border-color: #e7c000;\n\n  --font-family-base: -apple-system, \n    "Helvetica Neue", "Arial", "Segoe UI",\n    "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei",\n    "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",\n    "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC",\n    "WenQuanYi Micro Hei", SimSun, sans-serif;\n  --font-family-code: Courier, \'Courier New\', monospace;\n}\n\nhtml {\n  color: #565a5f;\n  color: var(--sliver);\n  font-family: -apple-system, \n    "Helvetica Neue", "Arial", "Segoe UI",\n    "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei",\n    "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",\n    "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC",\n    "WenQuanYi Micro Hei", SimSun, sans-serif;\n  font-family: var(--font-family-base);\n\tline-height: 1.875;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n  text-rendering: optimizelegibility;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-size: inherit;\n}\n\nmain {\n  display: block;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #495060;\n  color: var(--header-color);\n  line-height: 1.35;\n}\n\nh1 {\n  font-size: 2em;\n}\n\nh2 {\n  font-size: 1.8em;\n}\n\nh3 {\n  font-size: 1.6em;\n}\n\nh4 {\n  font-size: 1.4em;\n}\n\nh5,\nh6 {\n  font-size: 1.2em;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ncaption,\nth {\n  text-align: left;\n}\n\nth,\ntd,\ntable caption {\n  padding: 0.5em 1em;\n  color: inherit;\n  border: 1px solid #ededed;\n  border: 1px solid var(--border-color);\n}\n\ntable th {\n  background-color: #fafafa;\n  background-color: var(--gray);\n}\n\na {\n  color: #1f74ff;\n  color: var(--primary);\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n\na:hover {\n  color: color-mod(#1f74ff alpha(90%));\n  color: color-mod(var(--primary) alpha(90%));\n}\n\nem {\n  position: relative;\n  font-style: normal;\n}\n\nem::after {\n  content: "・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・";\n  position: absolute;\n  top: 0.65em;\n  left: 0;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\ncite {\n  font-style: normal;\n  font-weight: bold;\n}\n\nblockquote {\n  position: relative;\n  margin: 1em 3em 1em 2em;\n  color: #969696;\n  color: var(--default);\n  padding: .2em 0 .2em 2em;\n  border-left: 4px solid #1f74ff;\n  border-left: 4px solid var(--primary);\n}\n\nabbr {\n  cursor: help;\n}\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\nmark {\n  margin: 0 5px;\n  padding: 3px 2px;\n  background-color: rgba(255, 229, 100, .3);\n  background-color: var(--mark-background-color);\n  border-bottom: 1px solid #e7c000;\n  border-bottom: 1px solid var(--mark-border-color);\n}\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: Courier, \'Courier New\', monospace;\n  font-family: var(--font-family-code);\n  font-weight: bold;\n}\n\npre {\n  padding: 1em 1.5em;\n  white-space: pre-wrap;\n  background-color: #fafafa;\n  background-color: var(--gray);\n  border: 1px solid #ededed;\n  border: 1px solid var(--border-color);\n  display: block;\n}\n\ncode {\n  color: #1f74ff;\n  color: var(--primary);\n}\n\nsmall {\n\tfont-size: .9em;\n}\n\n.alius-button {\n  position: relative;\n  padding: 10px;\n  color: #ffffff;\n  color: var(--white);\n  font-size: 12px;\n  background: #969696;\n  background: var(--default);\n  border: 0;\n  border-radius: 5px;\n  overflow: hidden;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n  cursor: pointer\n}\n\n.alius-button:focus {\n    outline: none;\n  }\n\n.alius-button[disabled] {\n    opacity: .5;\n    cursor: default;\n    pointer-events: none;\n  }\n\n.alius-button.is-primary {\n    background-color: #1f74ff;\n    background-color: var(--primary)\n  }\n\n.alius-button.is-primary:hover {\n      -webkit-box-shadow: 0 8px 25px -8px #1f74ff;\n              box-shadow: 0 8px 25px -8px #1f74ff;\n      -webkit-box-shadow: 0 8px 25px -8px var(--primary);\n              box-shadow: 0 8px 25px -8px var(--primary);\n    }\n\n.alius-button.is-danger {\n    color: #ffffff;\n    color: var(--white);\n    background-color: #ff4757;\n    background-color: var(--danger)\n  }\n\n.alius-button.is-danger:hover {\n      -webkit-box-shadow: 0 8px 25px -8px #ff4757;\n              box-shadow: 0 8px 25px -8px #ff4757;\n      -webkit-box-shadow: 0 8px 25px -8px var(--danger);\n              box-shadow: 0 8px 25px -8px var(--danger);\n    }\n\n.alius-button.is-success {\n    color: #ffffff;\n    color: var(--white);\n    background-color: #46c93a;\n    background-color: var(--success)\n  }\n\n.alius-button.is-success:hover {\n      -webkit-box-shadow: 0 8px 25px -8px #46c93a;\n              box-shadow: 0 8px 25px -8px #46c93a;\n      -webkit-box-shadow: 0 8px 25px -8px var(--success);\n              box-shadow: 0 8px 25px -8px var(--success);\n    }\n\n.alius-button.is-warning {\n    color: #ffffff;\n    color: var(--white);\n    background-color: #ffba00;\n    background-color: var(--warning)\n  }\n\n.alius-button.is-warning:hover {\n      -webkit-box-shadow: 0 8px 25px -8px #ffba00;\n              box-shadow: 0 8px 25px -8px #ffba00;\n      -webkit-box-shadow: 0 8px 25px -8px var(--warning);\n              box-shadow: 0 8px 25px -8px var(--warning);\n    }\n'),new Ct({target:document.querySelector("#example")})}();
