!function(){"use strict";var t,e,n,i,r=window,o=document,a=Object,l=null,d=!0,s=!1,u=" ",c="Element",f="create"+c,v="DOMTokenList",m="__defineGetter__",h="defineProperty",p="class",g="List",b=p+g,y="rel",w=y+g,A="div",E="length",x="contains",L="apply",C="HTML",T=("item "+x+" add remove toggle toString toLocaleString").split(u),M=T[2],S=T[3],N=T[4],P="prototype",k=h in a||m in a[P]||l,D=function(t,e,n,i){a[h]?a[h](t,e,{configurable:s===k?d:!!i,get:n}):t[m](e,n)},W=function(e,n){var i=this,r=[],o={},l=0,c=0,f=function(){if(l>=c)for(;c<l;++c)(function(t){D(i,t,function(){return v(),r[t]},s)})(c)},v=function(){var t,i,a=arguments,s=/\s+/;if(a[E])for(i=0;i<a[E];++i)if(s.test(a[i]))throw t=new SyntaxError('String "'+a[i]+'" '+x+" an invalid character"),t.code=5,t.name="InvalidCharacterError",t;for(r=(""+e[n]).replace(/^\s+|\s+$/g,"").split(s),""===r[0]&&(r=[]),o={},i=0;i<r[E];++i)o[r[i]]=d;l=r[E],f()};return v(),D(i,E,function(){return v(),l}),i[T[6]]=i[T[5]]=function(){return v(),r.join(u)},i.item=function(t){return v(),r[t]},i[x]=function(t){return v(),!!o[t]},i[M]=function(){v[L](i,t=arguments);for(var t,a,s=0,c=t[E];s<c;++s)a=t[s],o[a]||(r.push(a),o[a]=d);l!==r[E]&&(l=r[E]>>>0,e[n]=r.join(u),f())},i[S]=function(){v[L](i,t=arguments);for(var t,a={},s=0,c=[];s<t[E];++s)a[t[s]]=d,delete o[t[s]];for(s=0;s<r[E];++s)a[r[s]]||c.push(r[s]);r=c,l=c[E]>>>0,e[n]=r.join(u),f()},i[N]=function(e,n){return v[L](i,[e]),t!==n?n?(i[M](e),d):(i[S](e),s):o[e]?(i[S](e),s):(i[M](e),d)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,T[n],{enumerable:s})}(i,a[h]),i},F=function(t,e,n){D(t[P],e,function(){var t,i=this,r=m+h+e;if(i[r])return t;if(i[r]=d,s===k){for(var a,l=F.mirror=F.mirror||o[f](A),u=l.childNodes,c=u[E],v=0;v<c;++v)if(u[v]._R===i){a=u[v];break}a||(a=l.appendChild(o[f](A))),t=W.call(a,i,n)}else t=new W(i,n);return D(i,e,function(){return t}),delete i[r],t},d)};if(r[v])e=o[f](A)[b],P=r[v][P],e[M][L](e,T),2>e[E]&&(n=P[M],i=P[S],P[M]=function(){for(var t=0,e=arguments;t<e[E];++t)n.call(this,e[t])},P[S]=function(){for(var t=0,e=arguments;t<e[E];++t)i.call(this,e[t])}),e[N](g,s)&&(P[N]=function(e,n){var i=this;return i[(n=t===n?!i[x](e):n)?M:S](e),!!n});else{if(k)try{D({},"support")}catch(t){k=s}W.polyfill=d,r[v]=W,F(r[c],b,p+"Name"),F(r[C+"Link"+c],w,y),F(r[C+"Anchor"+c],w,y),F(r[C+"Area"+c],w,y)}}(),function(t,e,n){"use strict";function i(t,e,i,o){i=i||"width";var a,d,s,f=(e.match(u)||[])[2],v="px"===f?1:c[f+"toPx"],m=/r?em/i;if(v||m.test(f)&&!o)t=v?t:"rem"===f?l:"fontSize"===i?t.parentNode||t:t,v=v||parseFloat(r(t,"fontSize")),s=parseFloat(e)*v;else{a=t.style,d=a[i];try{a[i]=e}catch(t){return 0}s=a[i]?parseFloat(r(t,i)):0,a[i]=d!==n?d:null}return s}function r(t,e){var n,a,l,d,c,f=/^top|bottom/,v=["paddingTop","paddingBottom","borderTop","borderBottom"],m=4;if(n=s?s(t)[e]:(a=t.style["pixel"+e.charAt(0).toUpperCase()+e.slice(1)])?a+"px":"fontSize"===e?i(t,"1em","left",1)+"px":t.currentStyle[e],l=(n.match(u)||[])[2],"%"===l&&o)if(f.test(e)){for(d=(c=t.parentNode||t).offsetHeight;m--;)d-=parseFloat(r(c,v[m]));n=parseFloat(n)/100*d+"px"}else n=i(t,n);else("auto"===n||l&&"px"!==l)&&s?n=0:l&&"px"!==l&&!s&&(n=i(t,n)+"px");return n}var o,a=e.createElement("test"),l=e.documentElement,d=e.defaultView,s=d&&d.getComputedStyle,u=/^(-?[\d+\.\-]+)([a-z]+|%)$/i,c={},f=[1/25.4,1/2.54,1/72,1/6],v=["mm","cm","pt","pc","in","mozmm"],m=6;for(l.appendChild(a),s&&(a.style.marginTop="1%",o="1%"===s(a).marginTop);m--;)c[v[m]+"toPx"]=f[m]?f[m]*c.inToPx:i(a,"1"+v[m]);l.removeChild(a),a=n,t.Length={toPx:i}}(this,this.document),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(t){return t}(window.gn||{});gn.extend=function(){for(var t,e,n,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(t=arguments[r]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i},gn.isInViewport=function(t){var e=t.getBoundingClientRect();return e.bottom>0&&e.right>0&&e.top<document.documentElement.clientHeight&&e.left<document.documentElement.clientWidth},gn.indexOf=function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},gn.getSupportedProp=function(t){for(var e=document.documentElement,n=0;n<t.length;n++)if(t[n]in e.style)return t[n]},gn.ready=function(t){if("function"==typeof t)return"complete"===document.readyState?t():void document.addEventListener("DOMContentLoaded",t,!1)},gn.isNodeList=function(t){return"undefined"!=typeof t.item},gn.append=function(t,e){var n,i=gn.isNodeList(t)?t:[t];if("undefined"!=typeof e.nodeType&&1===e.nodeType)for(n=i.length;n--;)i[n].appendChild(e);else if("string"==typeof e)for(n=i.length;n--;)i[n].insertAdjacentHTML("beforeend",e);else if(gn.isNodeList(e)){var r=document.createDocumentFragment();for(n=e.length;n--;)r.insertBefore(e[n],r.firstChild);for(var o=i.length;o--;)i[o].appendChild(r)}},gn.wrap=function(t,e){for(var n=gn.isNodeList(t)?t:[t],i=n.length;i--;){var r=i>0?e.cloneNode(!0):e,o=n[i],a=o.parentNode,l=o.nextSibling;r.appendChild(o),l?a.insertBefore(r,l):a.appendChild(r)}},gn.unwrap=function(t){for(var e=gn.isNodeList(t)?t:[t],n=e.length;n--;){for(var i=e[n],r=i.parentNode;i.firstChild;)r.insertBefore(i.firstChild,i);r.removeChild(i)}},gn.getWidth=function(t){var e=/\d/,n=t.clientWidth,i=t.currentStyle||getComputedStyle(t),r=null===e.exec(i.paddingLeft)?"0px":i.paddingLeft,o=null===e.exec(i.paddingRight)?"0px":i.paddingRight;return n-=parseInt(Length.toPx(t,r))+parseInt(Length.toPx(t,o))};var tinySlider=function(){"use strict";function t(t){function d(){Q.style.width=B*nt+"px";var t;t=0!==it&&"marginLeft"===rt?bt?U*B+it:it:U*B,Q.style.marginLeft=-t+"px";for(var e=nt;e--;)tt[e].style.width=B-it+"px",0!==it&&(tt[e].style[rt]=it+"px")}function s(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function u(t){for(var e=t.length;e--;)s(t[e])&&t.splice(e,1);0===t.length?f():setTimeout(function(){u(t)},16)}function c(){for(var t=Bt(),e=[],n=nt;n--;)if(n>=t&&n<t+_)for(var i=tt[n].querySelectorAll("img"),r=i.length;r--;)e.push(i[r]);0===e.length?f():u(e)}function f(){for(var t,e=Bt(),n=[],i=nt;i--;)i>=e&&i<e+_&&n.push(tt[i].offsetHeight);t=Math.max.apply(null,n),o&&(Q.style[o]=ft/1e3+"s"),Q.style.height=t+"px",Ct=!0,setTimeout(function(){o&&(Q.style[o]="0s"),Ct=!1},ft)}function v(t){o&&(Q.style[o]=ft*t/1e3+"s",Ct=!0)}function m(){navigator.msMaxTouchPoints&&(Q.parentNode.style.msScrollSnapPointsX="snapInterval(0%, "+B+")")}function h(){for(var t=nt;t--;){var e=Bt(),n=tt[t];t>=e&&t<e+_?n.hasAttribute("aria-hidden")&&"true"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","false"):n.hasAttribute("aria-hidden")&&"false"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","true")}}function p(){bt||(et>_?(0===Lt?(X.disabled=!0,D(X,V)):X.disabled=!1,Lt!==et-_||gt?V.disabled=!1:(V.disabled=!0,D(V,X))):(0!==Lt&&(Lt=0,y()),X.disabled=!0,V.disabled=!0,X.setAttribute("tabindex","-1"),V.setAttribute("tabindex","-1"),X===document.activeElement&&X.blur(),V===document.activeElement&&V.blur()))}function g(){if(st&&!t.navContainer)for(var e=K;e--;){var n=$[e];e<Y?n.hasAttribute("hidden")&&n.removeAttribute("hidden"):n.hasAttribute("hidden")||n.setAttribute("hidden","")}}function b(){if(st){var e;if(xt===-1){var n=Lt<0?Lt+et:Lt>=et?Lt-et:Lt;if(e=t.navContainer?n:Math.floor(n/_),!bt&&!t.navContainer){var i=/^-?[0-9]+$/,r=i.test(et/_);r||Lt!==et-_||(e+=1)}}else e=xt,xt=-1;for(var o=Y;o--;){var a=$[o];o===e?"false"===a.getAttribute("aria-selected")&&(a.setAttribute("tabindex","0"),a.setAttribute("aria-selected","true")):"true"===a.getAttribute("aria-selected")&&(a.setAttribute("tabindex","-1"),a.setAttribute("aria-selected","false"))}}}function y(){var t=Q.parentNode.offsetWidth;Dt=-B*Lt,ot&&!bt&&(Dt=Math.max(Dt,-Math.abs(et*B-it-t))),a?Q.style[a]="translate3d("+Dt+"px, 0, 0)":Q.style.left=Dt+"px"}function w(){d(),m(),y(),g(),b(),h(),p(),yt&&c(),At&&O()}function A(){if(bt){var t=wt?Lt<_-U:Lt<=-U,e=wt?Lt>et+U-2*_-1:Lt>=et+U-_;ot&&U&&!wt&&(e=Lt>=et+U-_-1),t&&(Lt+=et),e&&(Lt-=et),o&&(Q.style[o]="0s"),y()}}function E(t){Q.setAttribute("aria-busy","true"),v(t),y(),setTimeout(function(){A(),h(),p(),b(),O(),yt&&c(),Ct=!1,Q.setAttribute("aria-busy","false")},ft*t)}function x(t){if(!Ct){t=wt?t*_:t;var e=Math.abs(t);Lt=bt?Lt+t:Math.max(0,Math.min(Lt+t,et-_)),E(e)}}function L(){x(-1)}function C(){x(Lt===et-_&&gt?-et+_:1)}function T(e){if(!Ct){for(var n,i=e.target||e.srcElement;gn.indexOf($,i)===-1;)i=i.parentNode;xt=n=Number(i.getAttribute("data-slide"));var r,o;r=t.navContainer?n:n*_,r=bt?r:Math.min(r,et-_),o=Math.abs(r-Lt),Lt=r,E(o)}}function M(){Mt=setInterval(function(){x(ht)},mt),St.setAttribute("data-action","stop"),St.innerHTML="<span hidden>Stop Animation</span>"+pt[1],Nt=!0}function S(){clearInterval(Mt),St.setAttribute("data-action","start"),St.innerHTML="<span hidden>Stop Animation</span>"+pt[0],Nt=!1}function N(){Nt?S():M()}function P(){Nt&&S()}function k(t){t=t||window.event,t.keyCode===l.LEFT?x(-1):t.keyCode===l.RIGHT&&x(1)}function D(t,e){"object"==typeof t&&"object"==typeof e&&t===document.activeElement&&(t.blur(),e.focus())}function W(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==l.LEFT&&e!==l.UP&&e!==l.HOME&&e!==l.PAGEUP||n!==X&&X.disabled!==!0&&D(n,X),e!==l.RIGHT&&e!==l.DOWN&&e!==l.END&&e!==l.PAGEDOWN||n!==V&&V.disabled!==!0&&D(n,V),e!==l.ENTER&&e!==l.SPACE||(n===V?C():L())}function F(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==l.LEFT&&e!==l.PAGEUP||n.getAttribute("data-slide")>0&&D(n,n.previousElementSibling),e!==l.UP&&e!==l.HOME||0!==n.getAttribute("data-slide")&&D(n,$[0]),e!==l.RIGHT&&e!==l.PAGEDOWN||n.getAttribute("data-slide")<Y-1&&D(n,n.nextElementSibling),e!==l.DOWN&&e!==l.END||n.getAttribute("data-slide")<Y-1&&D(n,$[Y-1]),e!==l.ENTER&&e!==l.SPACE||T(t)}function O(){if(gn.isInViewport(Q)){var t=Q.querySelectorAll('[aria-hidden="false"] .tiny-lazy');if(0!==t.length)for(var e=0,n=t.length;e<n;e++)t[e].classList.contains("loaded")||(t[e].src=t[e].getAttribute("data-src"),t[e].classList.add("loaded"))}}function I(){Q.style[o]="0s",Q.style.transform="translate3d(-"+-Q.scrollLeft()+"px,0,0)"}function q(t){var e=t.changedTouches[0];Pt=parseInt(e.clientX),kt=parseInt(e.clientY)}function H(t){var e=t.changedTouches[0];Wt=parseInt(e.clientX)-Pt,Ft=parseInt(e.clientY)-kt;var r=n(Math.atan2(Ft,Wt)),l=i(r,15);if("horizontal"===l&&Ct===!1&&(Ot=!0),Ot){o&&(Q.style[o]="0s");var d=bt?-(et+U-_)*B:-(et-_)*B,s=bt?U*B:0;!bt&&ot&&(d=-(et*B-Q.parentNode.offsetWidth)),Dt=-Lt*B+Wt,Dt=Math.max(d,Math.min(Dt,s)),a?Q.style[a]="translate3d("+Dt+"px, 0, 0)":Q.style.left=Dt+"px",t.preventDefault()}}function z(t){var e=t.changedTouches[0];if(Wt=parseInt(e.clientX)-Pt,Ot&&0!==Wt){t.preventDefault(),Ot=!1,Dt=-Lt*B+Wt;var n,i=bt?-U:0,r=bt?et+U-_:et-_;n=-(Dt/B),n=Wt<0?Math.ceil(n):Math.floor(n),n=Math.max(i,Math.min(n,r)),Lt=n,E(1)}}function R(){clearTimeout(J),J=setTimeout(function(){_=zt(),B=jt(),Y=Gt(),w()},100)}function j(){Tt||window.requestAnimationFrame(function(){At&&O(),Tt=!1}),Tt=!0}if(t=gn.extend({container:document.querySelector(".slider"),items:1,gutter:0,gutterPosition:"right",fixedWidth:!1,maxContainerWidth:!1,slideByPage:!1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var G,B,U,_,X,V,$,K,Y,J,Q=t.container,Z=document.createElement("div"),tt=Q.children,et=tt.length,nt=tt.length,it=t.gutter,rt="right"===t.gutterPosition?"marginRight":"marginLeft",ot=t.fixedWidth,at=t.controls,lt=t.controlsText,dt=!!t.controlsContainer&&t.controlsContainer,st=t.nav,ut=!!t.navContainer&&t.navContainer,ct=t.arrowKeys,ft=o?t.speed:0,vt=t.autoplay,mt=t.autoplayTimeout,ht="forward"===t.autoplayDirection?1:-1,pt=t.autoplayText,gt=t.rewind,bt=!(gt||ot&&!t.maxContainerWidth)&&t.loop,yt=t.autoHeight,wt=t.slideByPage,At=t.lazyload,Et=t.touch,xt=-1,Lt=0,Ct=!1,Tt=!1;if(vt)var Mt,St,Nt=!1;if(Et)var Pt=0,kt=0,Dt=0,Wt=0,Ft=0,Ot=!1;var It=!ot&&t.responsive,qt="object"==typeof It&&Object.keys(It),Ht=r(It),zt=function(){return ot?function(){return Math.max(Math.min(et,Math.floor(Q.parentNode.offsetWidth/ot)),1)}:function(){var e,n=document.documentElement.clientWidth;if(void 0!==qt.length&&void 0!==Ht&&qt.length===Ht.length)if(n<qt[0])e=t.items;else if(n>=qt[qt.length-1])e=Ht[Ht.length-1];else for(var i=0;i<qt.length-1;i++)n>=qt[i]&&n<=qt[i+1]&&(e=Ht[i]);else e=t.items;return Math.max(Math.min(et,e),1)}}(),Rt=function(){var e;return e=ot?!!t.maxContainerWidth&&Math.ceil(t.maxContainerWidth/ot):void 0!==Ht.length?Math.max.apply(Math,Ht):t.items,e?Math.min(et,e):e},jt=function(){return ot?function(){return ot+it}:function(){return(gn.getWidth(Q.parentNode)+it)/_}}(),Gt=function(){return t.navContainer?function(){return et}:function(){return Math.ceil(et/_)}}(),Bt=function(){return bt?function(){return Lt+U}:function(){return Lt}}();return _=zt(),U=Rt(),B=jt(),Y=Gt(),{init:function(){Q.classList.add("tiny-content"),0===Q.id.length?Q.id=G=e():G=Q.id,Z.className="tiny-slider",gn.wrap(Q,Z),navigator.msMaxTouchPoints&&(Z.classList.add("ms-touch"),Z.addEventListener("scroll",I,!1));for(var n=0;n<et;n++)tt[n].id=G+"item"+n;if(bt){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),o=U;o--;){var a=tt[o].cloneNode(!0),l=tt[et-1-o].cloneNode(!0);a.id="",l.id="",i.insertBefore(a,i.firstChild),r.appendChild(l)}Q.appendChild(i),Q.insertBefore(r,Q.firstChild),nt=Q.children.length,tt=Q.children}if(st){if(!t.navContainer){for(var d="",s=0;s<et;s++)d+='<button data-slide="'+s+'" tabindex="-1" aria-selected="false" aria-controls="'+G+"item"+s+'" type="button"></button>';vt&&(d+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+pt[0]+"</button>"),d='<div class="tiny-nav" aria-label="Carousel Pagination">'+d+"</div>",gn.append(Z,d),ut=Z.querySelector(".tiny-nav")}if($=ut.querySelectorAll("[data-slide]"),K=$.length,!ut.hasAttribute("aria-label")){ut.setAttribute("aria-label","Carousel Pagination");for(var u=0;u<K;u++){var c=$[u];c.setAttribute("tabindex","-1"),c.setAttribute("aria-selected","false"),c.setAttribute("aria-controls",G+"item"+u)}}}if(at&&(t.controlsContainer||(gn.append(Z,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+G+'" type="button">'+lt[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+G+'" type="button">'+lt[1]+"</button></div>"),dt=Z.querySelector(".tiny-controls")),X=dt.querySelector('[data-controls="prev"]'),V=dt.querySelector('[data-controls="next"]'),dt.hasAttribute("tabindex")||(dt.setAttribute("aria-label","Carousel Navigation"),X.setAttribute("aria-controls",G),V.setAttribute("aria-controls",G),X.setAttribute("tabindex","-1"),V.setAttribute("tabindex","0"))),vt&&(ut||(gn.append(Z,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+pt[0]+"</button></div>"),ut=Z.querySelector(".tiny-nav")),St=ut.querySelector("[data-action]")),w(),Et&&(Q.addEventListener("touchstart",q,!1),Q.addEventListener("touchmove",H,!1),Q.addEventListener("touchend",z,!1),Q.addEventListener("touchcancel",z,!1)),at&&(p(),X.addEventListener("click",L,!1),V.addEventListener("click",C,!1),X.addEventListener("keydown",W,!1),V.addEventListener("keydown",W,!1)),st)for(var f=$.length;f--;)$[f].addEventListener("click",T,!1),$[f].addEventListener("keydown",F,!1);if(vt&&(M(),St.addEventListener("click",N,!1),at&&(X.addEventListener("click",P,!1),V.addEventListener("click",P,!1)),st))for(var v=0;v<K;v++)$[v].addEventListener("click",P,!1);ct&&document.addEventListener("keydown",k,!1),window.addEventListener("resize",R,!1),window.addEventListener("scroll",j,!1)},destory:function(){if(Q.classList.remove("tiny-content"),Q.style.width="",Q.style[o]="",Q.style.transform="",Q.style.marginLeft="",Q.style.left="",gn.unwrap(Z),bt)for(var e=U;e--;)tt[0].remove(),tt[tt.length-1].remove();if(void 0!==G){G=null,Q.removeAttribute("id");for(var n=et;n--;)tt[n].removeAttribute("id"),tt[n].removeAttribute("aria-hidden"),tt[n].style.width=""}if(Et&&(Q.removeEventListener("touchstart",q,!1),Q.removeEventListener("touchmove",H,!1),Q.removeEventListener("touchend",z,!1),Q.removeEventListener("touchcancel",z,!1)),at&&(t.controlsContainer?(dt.removeAttribute("aria-label"),X.removeAttribute("aria-controls"),X.removeAttribute("tabindex"),X.removeEventListener("click",L,!1),X.removeEventListener("keydown",W,!1),V.removeAttribute("aria-controls"),V.removeAttribute("tabindex"),V.removeEventListener("click",C,!1),V.removeEventListener("keydown",W,!1)):(dt.remove(),dt=null,X=null,V=null)),st){if(t.navContainer){ut.removeAttribute("aria-label");for(var i=$.length;i--;)$[i].removeAttribute("aria-selected"),$[i].removeAttribute("aria-controls"),$[i].removeEventListener("click",T,!1),$[i].removeEventListener("keydown",F,!1)}else ut.remove(),ut=null;$=null,K=null}if(vt)if(t.navContainer||null===ut){if(St.removeEventListener("click",N,!1),St=null,at&&t.controlsContainer&&(X.removeEventListener("click",P,!1),V.removeEventListener("click",P,!1)),st&&t.navContainer)for(var r=0;r<K;r++)$[r].removeEventListener("click",P,!1)}else ut.remove(),ut=null;ct&&document.removeEventListener("keydown",ct,!1),window.removeEventListener("resize",R,!1),window.removeEventListener("scroll",j,!1)}}}function e(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function n(t){return t*(180/Math.PI)}function i(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function r(t){if("object"==typeof t){for(var e=[],n=Object.keys(t),i=0,r=n.length;i<r;i++){var o=n[i];e.push(t[o])}return e}return!1}var o=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),a=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),l={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
