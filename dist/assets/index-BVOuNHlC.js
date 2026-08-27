(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))s(y);new MutationObserver(y=>{for(const A of y)if(A.type==="childList")for(const H of A.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&s(H)}).observe(document,{childList:!0,subtree:!0});function h(y){const A={};return y.integrity&&(A.integrity=y.integrity),y.referrerPolicy&&(A.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?A.credentials="include":y.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function s(y){if(y.ep)return;y.ep=!0;const A=h(y);fetch(y.href,A)}})();var _s={exports:{}},In={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function Dg(){if(Zd)return In;Zd=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function h(s,y,A){var H=null;if(A!==void 0&&(H=""+A),y.key!==void 0&&(H=""+y.key),"key"in y){A={};for(var D in y)D!=="key"&&(A[D]=y[D])}else A=y;return y=A.ref,{$$typeof:o,type:s,key:H,ref:y!==void 0?y:null,props:A}}return In.Fragment=r,In.jsx=h,In.jsxs=h,In}var Pd;function qg(){return Pd||(Pd=1,_s.exports=Dg()),_s.exports}var f=qg(),Ls={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Rg(){if(Xd)return W;Xd=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),H=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),L=Symbol.iterator;function U(p){return p===null||typeof p!="object"?null:(p=L&&p[L]||p["@@iterator"],typeof p=="function"?p:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,ne={};function be(p,C,_){this.props=p,this.context=C,this.refs=ne,this.updater=_||P}be.prototype.isReactComponent={},be.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,C,"setState")},be.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function xe(){}xe.prototype=be.prototype;function ye(p,C,_){this.props=p,this.context=C,this.refs=ne,this.updater=_||P}var Ce=ye.prototype=new xe;Ce.constructor=ye,V(Ce,be.prototype),Ce.isPureReactComponent=!0;var Ne=Array.isArray;function De(){}var X={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function Ve(p,C,_){var G=_.ref;return{$$typeof:o,type:p,key:C,ref:G!==void 0?G:null,props:_}}function it(p,C){return Ve(p.type,C,p.props)}function rt(p){return typeof p=="object"&&p!==null&&p.$$typeof===o}function pe(p){var C={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(_){return C[_]})}var bt=/\/+/g;function k(p,C){return typeof p=="object"&&p!==null&&p.key!=null?pe(""+p.key):C.toString(36)}function Oe(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(De,De):(p.status="pending",p.then(function(C){p.status==="pending"&&(p.status="fulfilled",p.value=C)},function(C){p.status==="pending"&&(p.status="rejected",p.reason=C)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function T(p,C,_,G,K){var te=typeof p;(te==="undefined"||te==="boolean")&&(p=null);var ue=!1;if(p===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(p.$$typeof){case o:case r:ue=!0;break;case B:return ue=p._init,T(ue(p._payload),C,_,G,K)}}if(ue)return K=K(p),ue=G===""?"."+k(p,0):G,Ne(K)?(_="",ue!=null&&(_=ue.replace(bt,"$&/")+"/"),T(K,C,_,"",function(xt){return xt})):K!=null&&(rt(K)&&(K=it(K,_+(K.key==null||p&&p.key===K.key?"":(""+K.key).replace(bt,"$&/")+"/")+ue)),C.push(K)),1;ue=0;var qe=G===""?".":G+":";if(Ne(p))for(var me=0;me<p.length;me++)G=p[me],te=qe+k(G,me),ue+=T(G,C,_,te,K);else if(me=U(p),typeof me=="function")for(p=me.call(p),me=0;!(G=p.next()).done;)G=G.value,te=qe+k(G,me++),ue+=T(G,C,_,te,K);else if(te==="object"){if(typeof p.then=="function")return T(Oe(p),C,_,G,K);throw C=String(p),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ue}function q(p,C,_){if(p==null)return p;var G=[],K=0;return T(p,G,"","",function(te){return C.call(_,te,K++)}),G}function Y(p){if(p._status===-1){var C=p._result;C=C(),C.then(function(_){(p._status===0||p._status===-1)&&(p._status=1,p._result=_)},function(_){(p._status===0||p._status===-1)&&(p._status=2,p._result=_)}),p._status===-1&&(p._status=0,p._result=C)}if(p._status===1)return p._result.default;throw p._result}var ie=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},ee={map:q,forEach:function(p,C,_){q(p,function(){C.apply(this,arguments)},_)},count:function(p){var C=0;return q(p,function(){C++}),C},toArray:function(p){return q(p,function(C){return C})||[]},only:function(p){if(!rt(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return W.Activity=E,W.Children=ee,W.Component=be,W.Fragment=h,W.Profiler=y,W.PureComponent=ye,W.StrictMode=s,W.Suspense=z,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,W.__COMPILER_RUNTIME={__proto__:null,c:function(p){return X.H.useMemoCache(p)}},W.cache=function(p){return function(){return p.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(p,C,_){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var G=V({},p.props),K=p.key;if(C!=null)for(te in C.key!==void 0&&(K=""+C.key),C)!_e.call(C,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&C.ref===void 0||(G[te]=C[te]);var te=arguments.length-2;if(te===1)G.children=_;else if(1<te){for(var ue=Array(te),qe=0;qe<te;qe++)ue[qe]=arguments[qe+2];G.children=ue}return Ve(p.type,K,G)},W.createContext=function(p){return p={$$typeof:H,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:A,_context:p},p},W.createElement=function(p,C,_){var G,K={},te=null;if(C!=null)for(G in C.key!==void 0&&(te=""+C.key),C)_e.call(C,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(K[G]=C[G]);var ue=arguments.length-2;if(ue===1)K.children=_;else if(1<ue){for(var qe=Array(ue),me=0;me<ue;me++)qe[me]=arguments[me+2];K.children=qe}if(p&&p.defaultProps)for(G in ue=p.defaultProps,ue)K[G]===void 0&&(K[G]=ue[G]);return Ve(p,te,K)},W.createRef=function(){return{current:null}},W.forwardRef=function(p){return{$$typeof:D,render:p}},W.isValidElement=rt,W.lazy=function(p){return{$$typeof:B,_payload:{_status:-1,_result:p},_init:Y}},W.memo=function(p,C){return{$$typeof:m,type:p,compare:C===void 0?null:C}},W.startTransition=function(p){var C=X.T,_={};X.T=_;try{var G=p(),K=X.S;K!==null&&K(_,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(De,ie)}catch(te){ie(te)}finally{C!==null&&_.types!==null&&(C.types=_.types),X.T=C}},W.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},W.use=function(p){return X.H.use(p)},W.useActionState=function(p,C,_){return X.H.useActionState(p,C,_)},W.useCallback=function(p,C){return X.H.useCallback(p,C)},W.useContext=function(p){return X.H.useContext(p)},W.useDebugValue=function(){},W.useDeferredValue=function(p,C){return X.H.useDeferredValue(p,C)},W.useEffect=function(p,C){return X.H.useEffect(p,C)},W.useEffectEvent=function(p){return X.H.useEffectEvent(p)},W.useId=function(){return X.H.useId()},W.useImperativeHandle=function(p,C,_){return X.H.useImperativeHandle(p,C,_)},W.useInsertionEffect=function(p,C){return X.H.useInsertionEffect(p,C)},W.useLayoutEffect=function(p,C){return X.H.useLayoutEffect(p,C)},W.useMemo=function(p,C){return X.H.useMemo(p,C)},W.useOptimistic=function(p,C){return X.H.useOptimistic(p,C)},W.useReducer=function(p,C,_){return X.H.useReducer(p,C,_)},W.useRef=function(p){return X.H.useRef(p)},W.useState=function(p){return X.H.useState(p)},W.useSyncExternalStore=function(p,C,_){return X.H.useSyncExternalStore(p,C,_)},W.useTransition=function(){return X.H.useTransition()},W.version="19.2.8",W}var Kd;function Zs(){return Kd||(Kd=1,Ls.exports=Rg()),Ls.exports}var I=Zs(),Us={exports:{}},Fn={},Gs={exports:{}},ks={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function _g(){return Jd||(Jd=1,(function(o){function r(T,q){var Y=T.length;T.push(q);e:for(;0<Y;){var ie=Y-1>>>1,ee=T[ie];if(0<y(ee,q))T[ie]=q,T[Y]=ee,Y=ie;else break e}}function h(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var q=T[0],Y=T.pop();if(Y!==q){T[0]=Y;e:for(var ie=0,ee=T.length,p=ee>>>1;ie<p;){var C=2*(ie+1)-1,_=T[C],G=C+1,K=T[G];if(0>y(_,Y))G<ee&&0>y(K,_)?(T[ie]=K,T[G]=Y,ie=G):(T[ie]=_,T[C]=Y,ie=C);else if(G<ee&&0>y(K,Y))T[ie]=K,T[G]=Y,ie=G;else break e}}return q}function y(T,q){var Y=T.sortIndex-q.sortIndex;return Y!==0?Y:T.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var H=Date,D=H.now();o.unstable_now=function(){return H.now()-D}}var z=[],m=[],B=1,E=null,L=3,U=!1,P=!1,V=!1,ne=!1,be=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function Ce(T){for(var q=h(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=T)s(m),q.sortIndex=q.expirationTime,r(z,q);else break;q=h(m)}}function Ne(T){if(V=!1,Ce(T),!P)if(h(z)!==null)P=!0,De||(De=!0,pe());else{var q=h(m);q!==null&&Oe(Ne,q.startTime-T)}}var De=!1,X=-1,_e=5,Ve=-1;function it(){return ne?!0:!(o.unstable_now()-Ve<_e)}function rt(){if(ne=!1,De){var T=o.unstable_now();Ve=T;var q=!0;try{e:{P=!1,V&&(V=!1,xe(X),X=-1),U=!0;var Y=L;try{t:{for(Ce(T),E=h(z);E!==null&&!(E.expirationTime>T&&it());){var ie=E.callback;if(typeof ie=="function"){E.callback=null,L=E.priorityLevel;var ee=ie(E.expirationTime<=T);if(T=o.unstable_now(),typeof ee=="function"){E.callback=ee,Ce(T),q=!0;break t}E===h(z)&&s(z),Ce(T)}else s(z);E=h(z)}if(E!==null)q=!0;else{var p=h(m);p!==null&&Oe(Ne,p.startTime-T),q=!1}}break e}finally{E=null,L=Y,U=!1}q=void 0}}finally{q?pe():De=!1}}}var pe;if(typeof ye=="function")pe=function(){ye(rt)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,k=bt.port2;bt.port1.onmessage=rt,pe=function(){k.postMessage(null)}}else pe=function(){be(rt,0)};function Oe(T,q){X=be(function(){T(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_next=function(T){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var Y=L;L=q;try{return T()}finally{L=Y}},o.unstable_requestPaint=function(){ne=!0},o.unstable_runWithPriority=function(T,q){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var Y=L;L=T;try{return q()}finally{L=Y}},o.unstable_scheduleCallback=function(T,q,Y){var ie=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ie+Y:ie):Y=ie,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Y+ee,T={id:B++,callback:q,priorityLevel:T,startTime:Y,expirationTime:ee,sortIndex:-1},Y>ie?(T.sortIndex=Y,r(m,T),h(z)===null&&T===h(m)&&(V?(xe(X),X=-1):V=!0,Oe(Ne,Y-ie))):(T.sortIndex=ee,r(z,T),P||U||(P=!0,De||(De=!0,pe()))),T},o.unstable_shouldYield=it,o.unstable_wrapCallback=function(T){var q=L;return function(){var Y=L;L=q;try{return T.apply(this,arguments)}finally{L=Y}}}})(ks)),ks}var Id;function Lg(){return Id||(Id=1,Gs.exports=_g()),Gs.exports}var Qs={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd;function Ug(){if(Fd)return ut;Fd=1;var o=Zs();function r(z){var m="https://react.dev/errors/"+z;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)m+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+z+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var s={d:{f:h,r:function(){throw Error(r(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},y=Symbol.for("react.portal");function A(z,m,B){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:E==null?null:""+E,children:z,containerInfo:m,implementation:B}}var H=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(z,m){if(z==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ut.createPortal=function(z,m){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return A(z,m,null,B)},ut.flushSync=function(z){var m=H.T,B=s.p;try{if(H.T=null,s.p=2,z)return z()}finally{H.T=m,s.p=B,s.d.f()}},ut.preconnect=function(z,m){typeof z=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(z,m))},ut.prefetchDNS=function(z){typeof z=="string"&&s.d.D(z)},ut.preinit=function(z,m){if(typeof z=="string"&&m&&typeof m.as=="string"){var B=m.as,E=D(B,m.crossOrigin),L=typeof m.integrity=="string"?m.integrity:void 0,U=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;B==="style"?s.d.S(z,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:L,fetchPriority:U}):B==="script"&&s.d.X(z,{crossOrigin:E,integrity:L,fetchPriority:U,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ut.preinitModule=function(z,m){if(typeof z=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var B=D(m.as,m.crossOrigin);s.d.M(z,{crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(z)},ut.preload=function(z,m){if(typeof z=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var B=m.as,E=D(B,m.crossOrigin);s.d.L(z,B,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ut.preloadModule=function(z,m){if(typeof z=="string")if(m){var B=D(m.as,m.crossOrigin);s.d.m(z,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(z)},ut.requestFormReset=function(z){s.d.r(z)},ut.unstable_batchedUpdates=function(z,m){return z(m)},ut.useFormState=function(z,m,B){return H.H.useFormState(z,m,B)},ut.useFormStatus=function(){return H.H.useHostTransitionStatus()},ut.version="19.2.8",ut}var Wd;function Gg(){if(Wd)return Qs.exports;Wd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Qs.exports=Ug(),Qs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function kg(){if($d)return Fn;$d=1;var o=Lg(),r=Zs(),h=Gg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function H(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(A(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(s(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return z(n),e;if(i===a)return z(n),t;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,L=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),xe=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ve=Symbol.for("react.activity"),it=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var bt=Symbol.for("react.client.reference");function k(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case be:return"Profiler";case ne:return"StrictMode";case Ne:return"Suspense";case De:return"SuspenseList";case Ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case ye:return e.displayName||"Context";case xe:return(e._context.displayName||"Context")+".Consumer";case Ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:k(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return k(e(t))}catch{}}return null}var Oe=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ie=[],ee=-1;function p(e){return{current:e}}function C(e){0>ee||(e.current=ie[ee],ie[ee]=null,ee--)}function _(e,t){ee++,ie[ee]=e.current,e.current=t}var G=p(null),K=p(null),te=p(null),ue=p(null);function qe(e,t){switch(_(te,t),_(K,e),_(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pd(t),e=gd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(G),_(G,e)}function me(){C(G),C(K),C(te)}function xt(e){e.memoizedState!==null&&_(ue,e);var t=G.current,l=gd(t,e.type);t!==l&&(_(K,e),_(G,l))}function St(e){K.current===e&&(C(G),C(K)),ue.current===e&&(C(ue),Pn._currentValue=Y)}var da,$a;function $t(e){if(da===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);da=t&&t[1]||"",$a=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+da+e+$a}var en=!1;function Vt(e,t){if(!e||en)return"";en=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var S=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){S=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){S=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&S&&typeof M.stack=="string")return[M.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var d=u.split(`
`),x=c.split(`
`);for(n=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;if(a===d.length||n===x.length)for(a=d.length-1,n=x.length-1;1<=a&&0<=n&&d[a]!==x[n];)n--;for(;1<=a&&0<=n;a--,n--)if(d[a]!==x[n]){if(a!==1||n!==1)do if(a--,n--,0>n||d[a]!==x[n]){var O=`
`+d[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=n);break}}}finally{en=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?$t(l):""}function ma(e,t){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return e.child!==t&&t!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return Vt(e.type,!1);case 11:return Vt(e.type.render,!1);case 1:return Vt(e.type,!0);case 31:return $t("Activity");default:return""}}function pa(e){try{var t="",l=null;do t+=ma(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var tn=Object.prototype.hasOwnProperty,ln=o.unstable_scheduleCallback,an=o.unstable_cancelCallback,R=o.unstable_shouldYield,ce=o.unstable_requestPaint,F=o.unstable_now,Te=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,ct=o.unstable_UserBlockingPriority,At=o.unstable_NormalPriority,Le=o.unstable_LowPriority,Dt=o.unstable_IdlePriority,Tt=o.log,$e=o.unstable_setDisableYieldValue,st=null,Mt=null;function xl(e){if(typeof Tt=="function"&&$e(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(st,e)}catch{}}var Et=Math.clz32?Math.clz32:bm,ym=Math.log,vm=Math.LN2;function bm(e){return e>>>=0,e===0?32:31-(ym(e)/vm|0)|0}var $n=256,ei=262144,ti=4194304;function Zl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function li(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Zl(a):(u&=c,u!==0?n=Zl(u):l||(l=c&~e,l!==0&&(n=Zl(l))))):(c=a&~i,c!==0?n=Zl(c):u!==0?n=Zl(u):l||(l=a&~e,l!==0&&(n=Zl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xs(){var e=ti;return ti<<=1,(ti&62914560)===0&&(ti=4194304),e}function Mu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function un(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Sm(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,x=e.hiddenUpdates;for(l=u&~l;0<l;){var O=31-Et(l),j=1<<O;c[O]=0,d[O]=-1;var S=x[O];if(S!==null)for(x[O]=null,O=0;O<S.length;O++){var M=S[O];M!==null&&(M.lane&=-536870913)}l&=~j}a!==0&&Ks(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Ks(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Et(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Js(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Et(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Is(e,t){var l=t&-t;return l=(l&42)!==0?1:Eu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Eu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Ud(e.type))}function Ws(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var Sl=Math.random().toString(36).slice(2),et="__reactFiber$"+Sl,ft="__reactProps$"+Sl,ga="__reactContainer$"+Sl,Ou="__reactEvents$"+Sl,Am="__reactListeners$"+Sl,Tm="__reactHandles$"+Sl,$s="__reactResources$"+Sl,cn="__reactMarker$"+Sl;function Hu(e){delete e[et],delete e[ft],delete e[Ou],delete e[Am],delete e[Tm]}function ha(e){var t=e[et];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ga]||l[et]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Ad(e);e!==null;){if(l=e[et])return l;e=Ad(e)}return t}e=l,l=e.parentNode}return null}function ya(e){if(e=e[et]||e[ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function sn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function va(e){var t=e[$s];return t||(t=e[$s]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[cn]=!0}var eo=new Set,to={};function Pl(e,t){ba(e,t),ba(e+"Capture",t)}function ba(e,t){for(to[e]=t,e=0;e<t.length;e++)eo.add(t[e])}var Mm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lo={},ao={};function Em(e){return tn.call(ao,e)?!0:tn.call(lo,e)?!1:Mm.test(e)?ao[e]=!0:(lo[e]=!0,!1)}function ai(e,t,l){if(Em(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function ni(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function el(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function no(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zm(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cu(e){if(!e._valueTracker){var t=no(e)?"checked":"value";e._valueTracker=zm(e,t,""+e[t])}}function io(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=no(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Om=/[\n"\\]/g;function Rt(e){return e.replace(Om,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nu(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?ju(e,u,qt(t)):l!=null?ju(e,u,qt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+qt(c):e.removeAttribute("name")}function uo(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Cu(e);return}l=l!=null?""+qt(l):"",t=t!=null?""+qt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Cu(e)}function ju(e,t,l){t==="number"&&ii(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function xa(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+qt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function co(e,t,l){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+qt(l):""}function so(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(s(92));if(Oe(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=qt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Cu(e)}function Sa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Hm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oo(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Hm.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function ro(e,t,l){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&oo(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&oo(e,i,t[i])}function Bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(e){return Nm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tl(){}var Du=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Ta=null;function fo(e){var t=ya(e);if(t&&(e=t.stateNode)){var l=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Nu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[ft]||null;if(!n)throw Error(s(90));Nu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&io(a)}break e;case"textarea":co(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&xa(e,!!l.multiple,t,!1)}}}var Ru=!1;function mo(e,t,l){if(Ru)return e(t,l);Ru=!0;try{var a=e(t);return a}finally{if(Ru=!1,(Aa!==null||Ta!==null)&&(Xi(),Aa&&(t=Aa,e=Ta,Ta=Aa=null,fo(t),e)))for(t=0;t<e.length;t++)fo(e[t])}}function on(e,t){var l=e.stateNode;if(l===null)return null;var a=l[ft]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(s(231,t,typeof l));return l}var ll=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(ll)try{var rn={};Object.defineProperty(rn,"passive",{get:function(){_u=!0}}),window.addEventListener("test",rn,rn),window.removeEventListener("test",rn,rn)}catch{_u=!1}var Al=null,Lu=null,ci=null;function po(){if(ci)return ci;var e,t=Lu,l=t.length,a,n="value"in Al?Al.value:Al.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return ci=n.slice(e,1<a?1-a:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function go(){return!1}function dt(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oi:go,this.isPropagationStopped=go,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var Xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=dt(Xl),fn=E({},Xl,{view:0,detail:0}),jm=dt(fn),Uu,Gu,dn,fi=E({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dn&&(dn&&e.type==="mousemove"?(Uu=e.screenX-dn.screenX,Gu=e.screenY-dn.screenY):Gu=Uu=0,dn=e),Uu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),ho=dt(fi),Bm=E({},fi,{dataTransfer:0}),Dm=dt(Bm),qm=E({},fn,{relatedTarget:0}),ku=dt(qm),Rm=E({},Xl,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=dt(Rm),Lm=E({},Xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Um=dt(Lm),Gm=E({},Xl,{data:0}),yo=dt(Gm),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function Qu(){return Ym}var Vm=E({},fn,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zm=dt(Vm),Pm=E({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vo=dt(Pm),Xm=E({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),Km=dt(Xm),Jm=E({},Xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=dt(Jm),Fm=E({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wm=dt(Fm),$m=E({},Xl,{newState:0,oldState:0}),ep=dt($m),tp=[9,13,27,32],wu=ll&&"CompositionEvent"in window,mn=null;ll&&"documentMode"in document&&(mn=document.documentMode);var lp=ll&&"TextEvent"in window&&!mn,bo=ll&&(!wu||mn&&8<mn&&11>=mn),xo=" ",So=!1;function Ao(e,t){switch(e){case"keyup":return tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function To(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ma=!1;function ap(e,t){switch(e){case"compositionend":return To(t);case"keypress":return t.which!==32?null:(So=!0,xo);case"textInput":return e=t.data,e===xo&&So?null:e;default:return null}}function np(e,t){if(Ma)return e==="compositionend"||!wu&&Ao(e,t)?(e=po(),ci=Lu=Al=null,Ma=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bo&&t.locale!=="ko"?null:t.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ip[e.type]:t==="textarea"}function Eo(e,t,l,a){Aa?Ta?Ta.push(a):Ta=[a]:Aa=a,t=eu(t,"onChange"),0<t.length&&(l=new ri("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var pn=null,gn=null;function up(e){sd(e,0)}function di(e){var t=sn(e);if(io(t))return e}function zo(e,t){if(e==="change")return t}var Oo=!1;if(ll){var Yu;if(ll){var Vu="oninput"in document;if(!Vu){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),Vu=typeof Ho.oninput=="function"}Yu=Vu}else Yu=!1;Oo=Yu&&(!document.documentMode||9<document.documentMode)}function Co(){pn&&(pn.detachEvent("onpropertychange",No),gn=pn=null)}function No(e){if(e.propertyName==="value"&&di(gn)){var t=[];Eo(t,gn,e,qu(e)),mo(up,t)}}function cp(e,t,l){e==="focusin"?(Co(),pn=t,gn=l,pn.attachEvent("onpropertychange",No)):e==="focusout"&&Co()}function sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(gn)}function op(e,t){if(e==="click")return di(t)}function rp(e,t){if(e==="input"||e==="change")return di(t)}function fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:fp;function hn(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!tn.call(t,n)||!zt(e[n],t[n]))return!1}return!0}function jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bo(e,t){var l=jo(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=jo(l)}}function Do(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Do(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ii(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ii(e.document)}return t}function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dp=ll&&"documentMode"in document&&11>=document.documentMode,Ea=null,Pu=null,yn=null,Xu=!1;function Ro(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Xu||Ea==null||Ea!==ii(a)||(a=Ea,"selectionStart"in a&&Zu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),yn&&hn(yn,a)||(yn=a,a=eu(Pu,"onSelect"),0<a.length&&(t=new ri("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Ea)))}function Kl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var za={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionrun:Kl("Transition","TransitionRun"),transitionstart:Kl("Transition","TransitionStart"),transitioncancel:Kl("Transition","TransitionCancel"),transitionend:Kl("Transition","TransitionEnd")},Ku={},_o={};ll&&(_o=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Jl(e){if(Ku[e])return Ku[e];if(!za[e])return e;var t=za[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in _o)return Ku[e]=t[l];return e}var Lo=Jl("animationend"),Uo=Jl("animationiteration"),Go=Jl("animationstart"),mp=Jl("transitionrun"),pp=Jl("transitionstart"),gp=Jl("transitioncancel"),ko=Jl("transitionend"),Qo=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function Zt(e,t){Qo.set(e,t),Pl(t,[e])}var mi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Oa=0,Iu=0;function pi(){for(var e=Oa,t=Iu=Oa=0;t<e;){var l=_t[t];_t[t++]=null;var a=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var i=_t[t];if(_t[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&wo(l,n,i)}}function gi(e,t,l,a){_t[Oa++]=e,_t[Oa++]=t,_t[Oa++]=l,_t[Oa++]=a,Iu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Fu(e,t,l,a){return gi(e,t,l,a),hi(e)}function Il(e,t){return gi(e,null,null,t),hi(e)}function wo(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Et(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function hi(e){if(50<Gn)throw Gn=0,us=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ha={};function hp(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,l,a){return new hp(e,t,l,a)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function al(e,t){var l=e.alternate;return l===null?(l=Ot(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Yo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Wu(e)&&(u=1);else if(typeof e=="string")u=Sg(e,l,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ve:return e=Ot(31,l,t,n),e.elementType=Ve,e.lanes=i,e;case V:return Fl(l.children,n,i,t);case ne:u=8,n|=24;break;case be:return e=Ot(12,l,t,n|2),e.elementType=be,e.lanes=i,e;case Ne:return e=Ot(13,l,t,n),e.elementType=Ne,e.lanes=i,e;case De:return e=Ot(19,l,t,n),e.elementType=De,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:u=10;break e;case xe:u=9;break e;case Ce:u=11;break e;case X:u=14;break e;case _e:u=16,a=null;break e}u=29,l=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Ot(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Fl(e,t,l,a){return e=Ot(7,e,a,t),e.lanes=l,e}function $u(e,t,l){return e=Ot(6,e,null,t),e.lanes=l,e}function Vo(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function ec(e,t,l){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zo=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var l=Zo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:pa(t)},Zo.set(e,t),t)}return{value:e,source:t,stack:pa(t)}}var Ca=[],Na=0,vi=null,vn=0,Ut=[],Gt=0,Tl=null,Kt=1,Jt="";function nl(e,t){Ca[Na++]=vn,Ca[Na++]=vi,vi=e,vn=t}function Po(e,t,l){Ut[Gt++]=Kt,Ut[Gt++]=Jt,Ut[Gt++]=Tl,Tl=e;var a=Kt;e=Jt;var n=32-Et(a)-1;a&=~(1<<n),l+=1;var i=32-Et(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Kt=1<<32-Et(t)+n|l<<n|a,Jt=i+e}else Kt=1<<i|l<<n|a,Jt=e}function tc(e){e.return!==null&&(nl(e,1),Po(e,1,0))}function lc(e){for(;e===vi;)vi=Ca[--Na],Ca[Na]=null,vn=Ca[--Na],Ca[Na]=null;for(;e===Tl;)Tl=Ut[--Gt],Ut[Gt]=null,Jt=Ut[--Gt],Ut[Gt]=null,Kt=Ut[--Gt],Ut[Gt]=null}function Xo(e,t){Ut[Gt++]=Kt,Ut[Gt++]=Jt,Ut[Gt++]=Tl,Kt=t.id,Jt=t.overflow,Tl=e}var tt=null,je=null,de=!1,Ml=null,kt=!1,ac=Error(s(519));function El(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bn(Lt(t,e)),ac}function Ko(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[et]=e,t[ft]=a,l){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(l=0;l<Qn.length;l++)oe(Qn[l],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),uo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),so(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||dd(t.textContent,l)?(a.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),a.onScroll!=null&&oe("scroll",t),a.onScrollEnd!=null&&oe("scrollend",t),a.onClick!=null&&(t.onclick=tl),t=!0):t=!1,t||El(e,!0)}function Jo(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:tt=tt.return}}function ja(e){if(e!==tt)return!1;if(!de)return Jo(e),de=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Ss(e.type,e.memoizedProps)),l=!l),l&&je&&El(e),Jo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=Sd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=Sd(e)}else t===27?(t=je,Gl(e.type)?(e=zs,zs=null,je=e):je=t):je=tt?wt(e.stateNode.nextSibling):null;return!0}function Wl(){je=tt=null,de=!1}function nc(){var e=Ml;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),Ml=null),e}function bn(e){Ml===null?Ml=[e]:Ml.push(e)}var ic=p(null),$l=null,il=null;function zl(e,t,l){_(ic,t._currentValue),t._currentValue=l}function ul(e){e._currentValue=ic.current,C(ic)}function uc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function cc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),uc(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),uc(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Ba(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var c=n.type;zt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===ue.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Pn):e=[Pn])}n=n.return}e!==null&&cc(t,e,l,a),t.flags|=262144}function bi(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){$l=e,il=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Io($l,e)}function xi(e,t){return $l===null&&ea(e),Io(e,t)}function Io(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},il===null){if(e===null)throw Error(s(308));il=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else il=il.next=t;return l}var yp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},vp=o.unstable_scheduleCallback,bp=o.unstable_NormalPriority,Pe={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sc(){return{controller:new yp,data:new Map,refCount:0}}function xn(e){e.refCount--,e.refCount===0&&vp(bp,function(){e.controller.abort()})}var Sn=null,oc=0,Da=0,qa=null;function xp(e,t){if(Sn===null){var l=Sn=[];oc=0,Da=ds(),qa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return oc++,t.then(Fo,Fo),t}function Fo(){if(--oc===0&&Sn!==null){qa!==null&&(qa.status="fulfilled");var e=Sn;Sn=null,Da=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sp(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Wo=T.S;T.S=function(e,t){_f=F(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xp(e,t),Wo!==null&&Wo(e,t)};var ta=p(null);function rc(){var e=ta.current;return e!==null?e:He.pooledCache}function Si(e,t){t===null?_(ta,ta.current):_(ta,t.pool)}function $o(){var e=rc();return e===null?null:{parent:Pe._currentValue,pool:e}}var Ra=Error(s(460)),fc=Error(s(474)),Ai=Error(s(542)),Ti={then:function(){}};function er(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tr(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(tl,tl),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ar(e),e;default:if(typeof t.status=="string")t.then(tl,tl);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ar(e),e}throw aa=t,Ra}}function la(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(aa=l,Ra):l}}var aa=null;function lr(){if(aa===null)throw Error(s(459));var e=aa;return aa=null,e}function ar(e){if(e===Ra||e===Ai)throw Error(s(483))}var _a=null,An=0;function Mi(e){var t=An;return An+=1,_a===null&&(_a=[]),tr(_a,e,t)}function Tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ei(e,t){throw t.$$typeof===L?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nr(e){function t(v,g){if(e){var b=v.deletions;b===null?(v.deletions=[g],v.flags|=16):b.push(g)}}function l(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function a(v){for(var g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function n(v,g){return v=al(v,g),v.index=0,v.sibling=null,v}function i(v,g,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<g?(v.flags|=67108866,g):b):(v.flags|=67108866,g)):(v.flags|=1048576,g)}function u(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function c(v,g,b,N){return g===null||g.tag!==6?(g=$u(b,v.mode,N),g.return=v,g):(g=n(g,b),g.return=v,g)}function d(v,g,b,N){var Z=b.type;return Z===V?O(v,g,b.props.children,N,b.key):g!==null&&(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===_e&&la(Z)===g.type)?(g=n(g,b.props),Tn(g,b),g.return=v,g):(g=yi(b.type,b.key,b.props,null,v.mode,N),Tn(g,b),g.return=v,g)}function x(v,g,b,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=ec(b,v.mode,N),g.return=v,g):(g=n(g,b.children||[]),g.return=v,g)}function O(v,g,b,N,Z){return g===null||g.tag!==7?(g=Fl(b,v.mode,N,Z),g.return=v,g):(g=n(g,b),g.return=v,g)}function j(v,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=$u(""+g,v.mode,b),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case U:return b=yi(g.type,g.key,g.props,null,v.mode,b),Tn(b,g),b.return=v,b;case P:return g=ec(g,v.mode,b),g.return=v,g;case _e:return g=la(g),j(v,g,b)}if(Oe(g)||pe(g))return g=Fl(g,v.mode,b,null),g.return=v,g;if(typeof g.then=="function")return j(v,Mi(g),b);if(g.$$typeof===ye)return j(v,xi(v,g),b);Ei(v,g)}return null}function S(v,g,b,N){var Z=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return Z!==null?null:c(v,g,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return b.key===Z?d(v,g,b,N):null;case P:return b.key===Z?x(v,g,b,N):null;case _e:return b=la(b),S(v,g,b,N)}if(Oe(b)||pe(b))return Z!==null?null:O(v,g,b,N,null);if(typeof b.then=="function")return S(v,g,Mi(b),N);if(b.$$typeof===ye)return S(v,g,xi(v,b),N);Ei(v,b)}return null}function M(v,g,b,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return v=v.get(b)||null,c(g,v,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case U:return v=v.get(N.key===null?b:N.key)||null,d(g,v,N,Z);case P:return v=v.get(N.key===null?b:N.key)||null,x(g,v,N,Z);case _e:return N=la(N),M(v,g,b,N,Z)}if(Oe(N)||pe(N))return v=v.get(b)||null,O(g,v,N,Z,null);if(typeof N.then=="function")return M(v,g,b,Mi(N),Z);if(N.$$typeof===ye)return M(v,g,b,xi(g,N),Z);Ei(g,N)}return null}function Q(v,g,b,N){for(var Z=null,ge=null,w=g,le=g=0,fe=null;w!==null&&le<b.length;le++){w.index>le?(fe=w,w=null):fe=w.sibling;var he=S(v,w,b[le],N);if(he===null){w===null&&(w=fe);break}e&&w&&he.alternate===null&&t(v,w),g=i(he,g,le),ge===null?Z=he:ge.sibling=he,ge=he,w=fe}if(le===b.length)return l(v,w),de&&nl(v,le),Z;if(w===null){for(;le<b.length;le++)w=j(v,b[le],N),w!==null&&(g=i(w,g,le),ge===null?Z=w:ge.sibling=w,ge=w);return de&&nl(v,le),Z}for(w=a(w);le<b.length;le++)fe=M(w,v,le,b[le],N),fe!==null&&(e&&fe.alternate!==null&&w.delete(fe.key===null?le:fe.key),g=i(fe,g,le),ge===null?Z=fe:ge.sibling=fe,ge=fe);return e&&w.forEach(function(Vl){return t(v,Vl)}),de&&nl(v,le),Z}function J(v,g,b,N){if(b==null)throw Error(s(151));for(var Z=null,ge=null,w=g,le=g=0,fe=null,he=b.next();w!==null&&!he.done;le++,he=b.next()){w.index>le?(fe=w,w=null):fe=w.sibling;var Vl=S(v,w,he.value,N);if(Vl===null){w===null&&(w=fe);break}e&&w&&Vl.alternate===null&&t(v,w),g=i(Vl,g,le),ge===null?Z=Vl:ge.sibling=Vl,ge=Vl,w=fe}if(he.done)return l(v,w),de&&nl(v,le),Z;if(w===null){for(;!he.done;le++,he=b.next())he=j(v,he.value,N),he!==null&&(g=i(he,g,le),ge===null?Z=he:ge.sibling=he,ge=he);return de&&nl(v,le),Z}for(w=a(w);!he.done;le++,he=b.next())he=M(w,v,le,he.value,N),he!==null&&(e&&he.alternate!==null&&w.delete(he.key===null?le:he.key),g=i(he,g,le),ge===null?Z=he:ge.sibling=he,ge=he);return e&&w.forEach(function(Bg){return t(v,Bg)}),de&&nl(v,le),Z}function ze(v,g,b,N){if(typeof b=="object"&&b!==null&&b.type===V&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case U:e:{for(var Z=b.key;g!==null;){if(g.key===Z){if(Z=b.type,Z===V){if(g.tag===7){l(v,g.sibling),N=n(g,b.props.children),N.return=v,v=N;break e}}else if(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===_e&&la(Z)===g.type){l(v,g.sibling),N=n(g,b.props),Tn(N,b),N.return=v,v=N;break e}l(v,g);break}else t(v,g);g=g.sibling}b.type===V?(N=Fl(b.props.children,v.mode,N,b.key),N.return=v,v=N):(N=yi(b.type,b.key,b.props,null,v.mode,N),Tn(N,b),N.return=v,v=N)}return u(v);case P:e:{for(Z=b.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){l(v,g.sibling),N=n(g,b.children||[]),N.return=v,v=N;break e}else{l(v,g);break}else t(v,g);g=g.sibling}N=ec(b,v.mode,N),N.return=v,v=N}return u(v);case _e:return b=la(b),ze(v,g,b,N)}if(Oe(b))return Q(v,g,b,N);if(pe(b)){if(Z=pe(b),typeof Z!="function")throw Error(s(150));return b=Z.call(b),J(v,g,b,N)}if(typeof b.then=="function")return ze(v,g,Mi(b),N);if(b.$$typeof===ye)return ze(v,g,xi(v,b),N);Ei(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,g!==null&&g.tag===6?(l(v,g.sibling),N=n(g,b),N.return=v,v=N):(l(v,g),N=$u(b,v.mode,N),N.return=v,v=N),u(v)):l(v,g)}return function(v,g,b,N){try{An=0;var Z=ze(v,g,b,N);return _a=null,Z}catch(w){if(w===Ra||w===Ai)throw w;var ge=Ot(29,w,null,v.mode);return ge.lanes=N,ge.return=v,ge}finally{}}}var na=nr(!0),ir=nr(!1),Ol=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Cl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=hi(e),wo(e,null,l),t}return gi(e,a,t,l),hi(e)}function Mn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Js(e,l)}}function pc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var gc=!1;function En(){if(gc){var e=qa;if(e!==null)throw e}}function zn(e,t,l,a){gc=!1;var n=e.updateQueue;Ol=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var d=c,x=d.next;d.next=null,u===null?i=x:u.next=x,u=d;var O=e.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==u&&(c===null?O.firstBaseUpdate=x:c.next=x,O.lastBaseUpdate=d))}if(i!==null){var j=n.baseState;u=0,O=x=d=null,c=i;do{var S=c.lane&-536870913,M=S!==c.lane;if(M?(re&S)===S:(a&S)===S){S!==0&&S===Da&&(gc=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Q=e,J=c;S=t;var ze=l;switch(J.tag){case 1:if(Q=J.payload,typeof Q=="function"){j=Q.call(ze,j,S);break e}j=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=J.payload,S=typeof Q=="function"?Q.call(ze,j,S):Q,S==null)break e;j=E({},j,S);break e;case 2:Ol=!0}}S=c.callback,S!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[S]:M.push(S))}else M={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(x=O=M,d=j):O=O.next=M,u|=S;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;M=c,c=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);O===null&&(d=j),n.baseState=d,n.firstBaseUpdate=x,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),ql|=u,e.lanes=u,e.memoizedState=j}}function ur(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function cr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)ur(l[e],t)}var La=p(null),zi=p(0);function sr(e,t){e=gl,_(zi,e),_(La,t),gl=e|t.baseLanes}function hc(){_(zi,gl),_(La,La.current)}function yc(){gl=zi.current,C(La),C(zi)}var Ht=p(null),Qt=null;function Nl(e){var t=e.alternate;_(we,we.current&1),_(Ht,e),Qt===null&&(t===null||La.current!==null||t.memoizedState!==null)&&(Qt=e)}function vc(e){_(we,we.current),_(Ht,e),Qt===null&&(Qt=e)}function or(e){e.tag===22?(_(we,we.current),_(Ht,e),Qt===null&&(Qt=e)):jl()}function jl(){_(we,we.current),_(Ht,Ht.current)}function Ct(e){C(Ht),Qt===e&&(Qt=null),C(we)}var we=p(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Ms(l)||Es(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=0,$=null,Me=null,Xe=null,Hi=!1,Ua=!1,ia=!1,Ci=0,On=0,Ga=null,Ap=0;function Ue(){throw Error(s(321))}function bc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!zt(e[l],t[l]))return!1;return!0}function xc(e,t,l,a,n,i){return cl=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Pr:Rc,ia=!1,i=l(a,n),ia=!1,Ua&&(i=fr(t,l,a,n)),rr(e),i}function rr(e){T.H=Nn;var t=Me!==null&&Me.next!==null;if(cl=0,Xe=Me=$=null,Hi=!1,On=0,Ga=null,t)throw Error(s(300));e===null||Ke||(e=e.dependencies,e!==null&&bi(e)&&(Ke=!0))}function fr(e,t,l,a){$=e;var n=0;do{if(Ua&&(Ga=null),On=0,Ua=!1,25<=n)throw Error(s(301));if(n+=1,Xe=Me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Xr,i=t(l,a)}while(Ua);return i}function Tp(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Hn(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&($.flags|=1024),t}function Sc(){var e=Ci!==0;return Ci=0,e}function Ac(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Tc(e){if(Hi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hi=!1}cl=0,Xe=Me=$=null,Ua=!1,On=Ci=0,Ga=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?$.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(Me===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Xe===null?$.memoizedState:Xe.next;if(t!==null)Xe=t,Me=e;else{if(e===null)throw $.alternate===null?Error(s(467)):Error(s(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Xe===null?$.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hn(e){var t=On;return On+=1,Ga===null&&(Ga=[]),e=tr(Ga,e,t),t=$,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Pr:Rc),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hn(e);if(e.$$typeof===ye)return lt(e)}throw Error(s(438,String(e)))}function Mc(e){var t=null,l=$.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=$.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Ni(),$.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=it;return t.index++,l}function sl(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Ye();return Ec(t,Me,e)}function Ec(e,t,l){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,d=null,x=t,O=!1;do{var j=x.lane&-536870913;if(j!==x.lane?(re&j)===j:(cl&j)===j){var S=x.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),j===Da&&(O=!0);else if((cl&S)===S){x=x.next,S===Da&&(O=!0);continue}else j={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=j,u=i):d=d.next=j,$.lanes|=S,ql|=S;j=x.action,ia&&l(i,j),i=x.hasEagerState?x.eagerState:l(i,j)}else S={lane:j,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=S,u=i):d=d.next=S,$.lanes|=j,ql|=j;x=x.next}while(x!==null&&x!==t);if(d===null?u=i:d.next=c,!zt(i,e.memoizedState)&&(Ke=!0,O&&(l=qa,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=d,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function zc(e){var t=Ye(),l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);zt(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function dr(e,t,l){var a=$,n=Ye(),i=de;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=t();var u=!zt((Me||n).memoizedState,l);if(u&&(n.memoizedState=l,Ke=!0),n=n.queue,Cc(gr.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,ka(9,{destroy:void 0},pr.bind(null,a,n,l,t),null),He===null)throw Error(s(349));i||(cl&127)!==0||mr(a,t,l)}return l}function mr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=$.updateQueue,t===null?(t=Ni(),$.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function pr(e,t,l,a){t.value=l,t.getSnapshot=a,hr(t)&&yr(e)}function gr(e,t,l){return l(function(){hr(t)&&yr(e)})}function hr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!zt(e,l)}catch{return!0}}function yr(e){var t=Il(e,2);t!==null&&yt(t,e,2)}function Oc(e){var t=ot();if(typeof e=="function"){var l=e;if(e=l(),ia){xl(!0);try{l()}finally{xl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:e},t}function vr(e,t,l,a){return e.baseState=l,Ec(e,Me,typeof a=="function"?a:sl)}function Mp(e,t,l,a,n){if(Ri(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,br(t,i)):(i.next=l.next,t.pending=l.next=i)}}function br(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var c=l(n,a),d=T.S;d!==null&&d(u,c),xr(e,t,c)}catch(x){Hc(e,t,x)}finally{i!==null&&u.types!==null&&(i.types=u.types),T.T=i}}else try{i=l(n,a),xr(e,t,i)}catch(x){Hc(e,t,x)}}function xr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Sr(e,t,a)},function(a){return Hc(e,t,a)}):Sr(e,t,l)}function Sr(e,t,l){t.status="fulfilled",t.value=l,Ar(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,br(e,l)))}function Hc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Ar(t),t=t.next;while(t!==a)}e.action=null}function Ar(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tr(e,t){return t}function Mr(e,t){if(de){var l=He.formState;if(l!==null){e:{var a=$;if(de){if(je){t:{for(var n=je,i=kt;n.nodeType!==8;){if(!i){n=null;break t}if(n=wt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){je=wt(n.nextSibling),a=n.data==="F!";break e}}El(a)}a=!1}a&&(t=l[0])}}return l=ot(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:t},l.queue=a,l=Yr.bind(null,$,a),a.dispatch=l,a=Oc(!1),i=qc.bind(null,$,!1,a.queue),a=ot(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Mp.bind(null,$,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Er(e){var t=Ye();return zr(t,Me,e)}function zr(e,t,l){if(t=Ec(e,t,Tr)[0],e=Bi(sl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Hn(t)}catch(u){throw u===Ra?Ai:u}else a=t;t=Ye();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&($.flags|=2048,ka(9,{destroy:void 0},Ep.bind(null,n,l),null)),[a,i,e]}function Ep(e,t){e.action=t}function Or(e){var t=Ye(),l=Me;if(l!==null)return zr(t,l,e);Ye(),t=t.memoizedState,l=Ye();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ka(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=$.updateQueue,t===null&&(t=Ni(),$.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Hr(){return Ye().memoizedState}function Di(e,t,l,a){var n=ot();$.flags|=e,n.memoizedState=ka(1|t,{destroy:void 0},l,a===void 0?null:a)}function qi(e,t,l,a){var n=Ye();a=a===void 0?null:a;var i=n.memoizedState.inst;Me!==null&&a!==null&&bc(a,Me.memoizedState.deps)?n.memoizedState=ka(t,i,l,a):($.flags|=e,n.memoizedState=ka(1|t,i,l,a))}function Cr(e,t){Di(8390656,8,e,t)}function Cc(e,t){qi(2048,8,e,t)}function zp(e){$.flags|=4;var t=$.updateQueue;if(t===null)t=Ni(),$.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Nr(e){var t=Ye().memoizedState;return zp({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function jr(e,t){return qi(4,2,e,t)}function Br(e,t){return qi(4,4,e,t)}function Dr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qr(e,t,l){l=l!=null?l.concat([e]):null,qi(4,4,Dr.bind(null,t,e),l)}function Nc(){}function Rr(e,t){var l=Ye();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&bc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function _r(e,t){var l=Ye();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&bc(t,a[1]))return a[0];if(a=e(),ia){xl(!0);try{e()}finally{xl(!1)}}return l.memoizedState=[a,t],a}function jc(e,t,l){return l===void 0||(cl&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Uf(),$.lanes|=e,ql|=e,l)}function Lr(e,t,l,a){return zt(l,t)?l:La.current!==null?(e=jc(e,l,a),zt(e,t)||(Ke=!0),e):(cl&42)===0||(cl&1073741824)!==0&&(re&261930)===0?(Ke=!0,e.memoizedState=l):(e=Uf(),$.lanes|=e,ql|=e,t)}function Ur(e,t,l,a,n){var i=q.p;q.p=i!==0&&8>i?i:8;var u=T.T,c={};T.T=c,qc(e,!1,t,l);try{var d=n(),x=T.S;if(x!==null&&x(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=Sp(d,a);Cn(e,t,O,Bt(e))}else Cn(e,t,a,Bt(e))}catch(j){Cn(e,t,{then:function(){},status:"rejected",reason:j},Bt())}finally{q.p=i,u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}function Op(){}function Bc(e,t,l,a){if(e.tag!==5)throw Error(s(476));var n=Gr(e).queue;Ur(e,n,t,Y,l===null?Op:function(){return kr(e),l(a)})}function Gr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:Y},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kr(e){var t=Gr(e);t.next===null&&(t=e.alternate.memoizedState),Cn(e,t.next.queue,{},Bt())}function Dc(){return lt(Pn)}function Qr(){return Ye().memoizedState}function wr(){return Ye().memoizedState}function Hp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Bt();e=Hl(l);var a=Cl(t,e,l);a!==null&&(yt(a,t,l),Mn(a,t,l)),t={cache:sc()},e.payload=t;return}t=t.return}}function Cp(e,t,l){var a=Bt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ri(e)?Vr(t,l):(l=Fu(e,t,l,a),l!==null&&(yt(l,e,a),Zr(l,t,a)))}function Yr(e,t,l){var a=Bt();Cn(e,t,l,a)}function Cn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ri(e))Vr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,zt(c,u))return gi(e,t,n,0),He===null&&pi(),!1}catch{}finally{}if(l=Fu(e,t,n,a),l!==null)return yt(l,e,a),Zr(l,t,a),!0}return!1}function qc(e,t,l,a){if(a={lane:2,revertLane:ds(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ri(e)){if(t)throw Error(s(479))}else t=Fu(e,l,a,2),t!==null&&yt(t,e,2)}function Ri(e){var t=e.alternate;return e===$||t!==null&&t===$}function Vr(e,t){Ua=Hi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Zr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Js(e,l)}}var Nn={readContext:lt,use:ji,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Nn.useEffectEvent=Ue;var Pr={readContext:lt,use:ji,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Cr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Di(4194308,4,Dr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){Di(4,2,e,t)},useMemo:function(e,t){var l=ot();t=t===void 0?null:t;var a=e();if(ia){xl(!0);try{e()}finally{xl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=ot();if(l!==void 0){var n=l(t);if(ia){xl(!0);try{l(t)}finally{xl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Cp.bind(null,$,e),[a.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Oc(e);var t=e.queue,l=Yr.bind(null,$,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Nc,useDeferredValue:function(e,t){var l=ot();return jc(l,e,t)},useTransition:function(){var e=Oc(!1);return e=Ur.bind(null,$,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=$,n=ot();if(de){if(l===void 0)throw Error(s(407));l=l()}else{if(l=t(),He===null)throw Error(s(349));(re&127)!==0||mr(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Cr(gr.bind(null,a,i,e),[e]),a.flags|=2048,ka(9,{destroy:void 0},pr.bind(null,a,i,l,t),null),l},useId:function(){var e=ot(),t=He.identifierPrefix;if(de){var l=Jt,a=Kt;l=(a&~(1<<32-Et(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ci++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Ap++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dc,useFormState:Mr,useActionState:Mr,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=qc.bind(null,$,!0,l),l.dispatch=t,[e,t]},useMemoCache:Mc,useCacheRefresh:function(){return ot().memoizedState=Hp.bind(null,$)},useEffectEvent:function(e){var t=ot(),l={impl:e};return t.memoizedState=l,function(){if((ve&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}},Rc={readContext:lt,use:ji,useCallback:Rr,useContext:lt,useEffect:Cc,useImperativeHandle:qr,useInsertionEffect:jr,useLayoutEffect:Br,useMemo:_r,useReducer:Bi,useRef:Hr,useState:function(){return Bi(sl)},useDebugValue:Nc,useDeferredValue:function(e,t){var l=Ye();return Lr(l,Me.memoizedState,e,t)},useTransition:function(){var e=Bi(sl)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Hn(e),t]},useSyncExternalStore:dr,useId:Qr,useHostTransitionStatus:Dc,useFormState:Er,useActionState:Er,useOptimistic:function(e,t){var l=Ye();return vr(l,Me,e,t)},useMemoCache:Mc,useCacheRefresh:wr};Rc.useEffectEvent=Nr;var Xr={readContext:lt,use:ji,useCallback:Rr,useContext:lt,useEffect:Cc,useImperativeHandle:qr,useInsertionEffect:jr,useLayoutEffect:Br,useMemo:_r,useReducer:zc,useRef:Hr,useState:function(){return zc(sl)},useDebugValue:Nc,useDeferredValue:function(e,t){var l=Ye();return Me===null?jc(l,e,t):Lr(l,Me.memoizedState,e,t)},useTransition:function(){var e=zc(sl)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Hn(e),t]},useSyncExternalStore:dr,useId:Qr,useHostTransitionStatus:Dc,useFormState:Or,useActionState:Or,useOptimistic:function(e,t){var l=Ye();return Me!==null?vr(l,Me,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:wr};Xr.useEffectEvent=Nr;function _c(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:E({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Lc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Bt(),n=Hl(a);n.payload=t,l!=null&&(n.callback=l),t=Cl(e,n,a),t!==null&&(yt(t,e,a),Mn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Bt(),n=Hl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=Cl(e,n,a),t!==null&&(yt(t,e,a),Mn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Bt(),a=Hl(l);a.tag=2,t!=null&&(a.callback=t),t=Cl(e,a,l),t!==null&&(yt(t,e,l),Mn(t,e,l))}};function Kr(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!hn(l,a)||!hn(n,i):!0}function Jr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Lc.enqueueReplaceState(t,t.state,null)}function ua(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=E({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Ir(e){mi(e)}function Fr(e){console.error(e)}function Wr(e){mi(e)}function _i(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function $r(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Uc(e,t,l){return l=Hl(l),l.tag=3,l.payload={element:null},l.callback=function(){_i(e,t)},l}function ef(e){return e=Hl(e),e.tag=3,e}function tf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){$r(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){$r(t,l,a),typeof n!="function"&&(Rl===null?Rl=new Set([this]):Rl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Np(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Ba(t,l,n,!0),l=Ht.current,l!==null){switch(l.tag){case 31:case 13:return Qt===null?Ki():l.alternate===null&&Ge===0&&(Ge=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Ti?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),os(e,a,n)),!1;case 22:return l.flags|=65536,a===Ti?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),os(e,a,n)),!1}throw Error(s(435,l.tag))}return os(e,a,n),Ki(),!1}if(de)return t=Ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==ac&&(e=Error(s(422),{cause:a}),bn(Lt(e,l)))):(a!==ac&&(t=Error(s(423),{cause:a}),bn(Lt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Lt(a,l),n=Uc(e.stateNode,a,n),pc(e,n),Ge!==4&&(Ge=2)),!1;var i=Error(s(520),{cause:a});if(i=Lt(i,l),Un===null?Un=[i]:Un.push(i),Ge!==4&&(Ge=2),t===null)return!0;a=Lt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Uc(l.stateNode,a,e),pc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Rl===null||!Rl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=ef(n),tf(n,e,l,a),pc(l,n),!1}l=l.return}while(l!==null);return!1}var Gc=Error(s(461)),Ke=!1;function at(e,t,l,a){t.child=e===null?ir(t,null,l,a):na(t,e.child,l,a)}function lf(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return ea(t),a=xc(e,t,l,u,i,n),c=Sc(),e!==null&&!Ke?(Ac(e,t,n),ol(e,t,n)):(de&&c&&tc(t),t.flags|=1,at(e,t,a,n),t.child)}function af(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Wu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,nf(e,t,i,a,n)):(e=yi(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Xc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:hn,l(u,a)&&e.ref===t.ref)return ol(e,t,n)}return t.flags|=1,e=al(i,a),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(hn(i,a)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=a=i,Xc(e,n))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,ol(e,t,n)}return kc(e,t,l,a,n)}function uf(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return cf(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Si(t,i!==null?i.cachePool:null),i!==null?sr(t,i):hc(),or(t);else return a=t.lanes=536870912,cf(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Si(t,i.cachePool),sr(t,i),jl(),t.memoizedState=null):(e!==null&&Si(t,null),hc(),jl());return at(e,t,n,l),t.child}function jn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cf(e,t,l,a,n){var i=rc();return i=i===null?null:{parent:Pe._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Si(t,null),hc(),or(t),e!==null&&Ba(e,t,a,!0),t.childLanes=n,null}function Li(e,t){return t=Gi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sf(e,t,l){return na(t,e.child,null,l),e=Li(t,t.pendingProps),e.flags|=2,Ct(t),t.memoizedState=null,e}function jp(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(de){if(a.mode==="hidden")return e=Li(t,a),t.lanes=536870912,jn(null,e);if(vc(t),(e=je)?(e=xd(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tl!==null?{id:Kt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},l=Vo(e),l.return=t,t.child=l,tt=t,je=null)):e=null,e===null)throw El(t);return t.lanes=536870912,null}return Li(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(vc(t),n)if(t.flags&256)t.flags&=-257,t=sf(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ke||Ba(e,t,l,!1),n=(l&e.childLanes)!==0,Ke||n){if(a=He,a!==null&&(u=Is(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Il(e,u),yt(a,e,u),Gc;Ki(),t=sf(e,t,l)}else e=i.treeContext,je=wt(u.nextSibling),tt=t,de=!0,Ml=null,kt=!1,e!==null&&Xo(t,e),t=Li(t,a),t.flags|=4096;return t}return e=al(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ui(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function kc(e,t,l,a,n){return ea(t),l=xc(e,t,l,a,void 0,n),a=Sc(),e!==null&&!Ke?(Ac(e,t,n),ol(e,t,n)):(de&&a&&tc(t),t.flags|=1,at(e,t,l,n),t.child)}function of(e,t,l,a,n,i){return ea(t),t.updateQueue=null,l=fr(t,a,l,n),rr(e),a=Sc(),e!==null&&!Ke?(Ac(e,t,i),ol(e,t,i)):(de&&a&&tc(t),t.flags|=1,at(e,t,l,i),t.child)}function rf(e,t,l,a,n){if(ea(t),t.stateNode===null){var i=Ha,u=l.contextType;typeof u=="object"&&u!==null&&(i=lt(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},dc(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?lt(u):Ha,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(_c(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Lc.enqueueReplaceState(i,i.state,null),zn(t,a,i,n),En(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,d=ua(l,c);i.props=d;var x=i.context,O=l.contextType;u=Ha,typeof O=="object"&&O!==null&&(u=lt(O));var j=l.getDerivedStateFromProps;O=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||x!==u)&&Jr(t,i,a,u),Ol=!1;var S=t.memoizedState;i.state=S,zn(t,a,i,n),En(),x=t.memoizedState,c||S!==x||Ol?(typeof j=="function"&&(_c(t,l,j,a),x=t.memoizedState),(d=Ol||Kr(t,l,d,a,S,x,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),i.props=a,i.state=x,i.context=u,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,mc(e,t),u=t.memoizedProps,O=ua(l,u),i.props=O,j=t.pendingProps,S=i.context,x=l.contextType,d=Ha,typeof x=="object"&&x!==null&&(d=lt(x)),c=l.getDerivedStateFromProps,(x=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||S!==d)&&Jr(t,i,a,d),Ol=!1,S=t.memoizedState,i.state=S,zn(t,a,i,n),En();var M=t.memoizedState;u!==j||S!==M||Ol||e!==null&&e.dependencies!==null&&bi(e.dependencies)?(typeof c=="function"&&(_c(t,l,c,a),M=t.memoizedState),(O=Ol||Kr(t,l,O,a,S,M,d)||e!==null&&e.dependencies!==null&&bi(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,M,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,M,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),i.props=a,i.state=M,i.context=d,a=O):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ui(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=na(t,e.child,null,n),t.child=na(t,null,l,n)):at(e,t,l,n),t.memoizedState=i.state,e=t.child):e=ol(e,t,n),e}function ff(e,t,l,a){return Wl(),t.flags|=256,at(e,t,l,a),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:$o()}}function Yc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=jt),e}function df(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(n?Nl(t):jl(),(e=je)?(e=xd(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tl!==null?{id:Kt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},l=Vo(e),l.return=t,t.child=l,tt=t,je=null)):e=null,e===null)throw El(t);return Es(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(jl(),n=t.mode,c=Gi({mode:"hidden",children:c},n),a=Fl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=wc(l),a.childLanes=Yc(e,u,l),t.memoizedState=Qc,jn(null,a)):(Nl(t),Vc(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(Nl(t),t.flags&=-257,t=Zc(e,t,l)):t.memoizedState!==null?(jl(),t.child=e.child,t.flags|=128,t=null):(jl(),c=a.fallback,n=t.mode,a=Gi({mode:"visible",children:a.children},n),c=Fl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,na(t,e.child,null,l),a=t.child,a.memoizedState=wc(l),a.childLanes=Yc(e,u,l),t.memoizedState=Qc,t=jn(null,a));else if(Nl(t),Es(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var x=u.dgst;u=x,a=Error(s(419)),a.stack="",a.digest=u,bn({value:a,source:null,stack:null}),t=Zc(e,t,l)}else if(Ke||Ba(e,t,l,!1),u=(l&e.childLanes)!==0,Ke||u){if(u=He,u!==null&&(a=Is(u,l),a!==0&&a!==d.retryLane))throw d.retryLane=a,Il(e,a),yt(u,e,a),Gc;Ms(c)||Ki(),t=Zc(e,t,l)}else Ms(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,je=wt(c.nextSibling),tt=t,de=!0,Ml=null,kt=!1,e!==null&&Xo(t,e),t=Vc(t,a.children),t.flags|=4096);return t}return n?(jl(),c=a.fallback,n=t.mode,d=e.child,x=d.sibling,a=al(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,x!==null?c=al(x,c):(c=Fl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,jn(null,a),a=t.child,c=e.child.memoizedState,c===null?c=wc(l):(n=c.cachePool,n!==null?(d=Pe._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=$o(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=Yc(e,u,l),t.memoizedState=Qc,jn(e.child,a)):(Nl(t),l=e.child,e=l.sibling,l=al(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Vc(e,t){return t=Gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gi(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Zc(e,t,l){return na(t,e.child,null,l),e=Vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),uc(e.return,t,l)}function Pc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function pf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=we.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,_(we,u),at(e,t,a,l),a=de?vn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mf(e,l,t);else if(e.tag===19)mf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Oi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Pc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Oi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Pc(t,!0,l,null,i,a);break;case"together":Pc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ol(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Ba(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,l=al(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=al(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Xc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bi(e)))}function Bp(e,t,l){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),zl(t,Pe,e.memoizedState.cache),Wl();break;case 27:case 5:xt(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:zl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Nl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?df(e,t,l):(Nl(t),e=ol(e,t,l),e!==null?e.sibling:null);Nl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Ba(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return pf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),_(we,we.current),a)break;return null;case 22:return t.lanes=0,uf(e,t,l,t.pendingProps);case 24:zl(t,Pe,e.memoizedState.cache)}return ol(e,t,l)}function gf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Xc(e,l)&&(t.flags&128)===0)return Ke=!1,Bp(e,t,l);Ke=(e.flags&131072)!==0}else Ke=!1,de&&(t.flags&1048576)!==0&&Po(t,vn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=la(t.elementType),t.type=e,typeof e=="function")Wu(e)?(a=ua(e,a),t.tag=1,t=rf(null,t,e,a,l)):(t.tag=0,t=kc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Ce){t.tag=11,t=lf(null,t,e,a,l);break e}else if(n===X){t.tag=14,t=af(null,t,e,a,l);break e}}throw t=k(e)||e,Error(s(306,t,""))}}return t;case 0:return kc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ua(a,t.pendingProps),rf(e,t,a,n,l);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,mc(e,t),zn(t,a,null,l);var u=t.memoizedState;if(a=u.cache,zl(t,Pe,a),a!==i.cache&&cc(t,[Pe],l,!0),En(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ff(e,t,a,l);break e}else if(a!==n){n=Lt(Error(s(424)),t),bn(n),t=ff(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=wt(e.firstChild),tt=t,de=!0,Ml=null,kt=!0,l=ir(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Wl(),a===n){t=ol(e,t,l);break e}at(e,t,a,l)}t=t.child}return t;case 26:return Ui(e,t),e===null?(l=zd(t.type,null,t.pendingProps,null))?t.memoizedState=l:de||(l=t.type,e=t.pendingProps,a=tu(te.current).createElement(l),a[et]=t,a[ft]=e,nt(a,l,e),Fe(a),t.stateNode=a):t.memoizedState=zd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xt(t),e===null&&de&&(a=t.stateNode=Td(t.type,t.pendingProps,te.current),tt=t,kt=!0,n=je,Gl(t.type)?(zs=n,je=wt(a.firstChild)):je=n),at(e,t,t.pendingProps.children,l),Ui(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((n=a=je)&&(a=sg(a,t.type,t.pendingProps,kt),a!==null?(t.stateNode=a,tt=t,je=wt(a.firstChild),kt=!1,n=!0):n=!1),n||El(t)),xt(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Ss(n,i)?a=null:u!==null&&Ss(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=xc(e,t,Tp,null,null,l),Pn._currentValue=n),Ui(e,t),at(e,t,a,l),t.child;case 6:return e===null&&de&&((e=l=je)&&(l=og(l,t.pendingProps,kt),l!==null?(t.stateNode=l,tt=t,je=null,e=!0):e=!1),e||El(t)),null;case 13:return df(e,t,l);case 4:return qe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=na(t,null,a,l):at(e,t,a,l),t.child;case 11:return lf(e,t,t.type,t.pendingProps,l);case 7:return at(e,t,t.pendingProps,l),t.child;case 8:return at(e,t,t.pendingProps.children,l),t.child;case 12:return at(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,zl(t,t.type,a.value),at(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,ea(t),n=lt(n),a=a(n),t.flags|=1,at(e,t,a,l),t.child;case 14:return af(e,t,t.type,t.pendingProps,l);case 15:return nf(e,t,t.type,t.pendingProps,l);case 19:return pf(e,t,l);case 31:return jp(e,t,l);case 22:return uf(e,t,l,t.pendingProps);case 24:return ea(t),a=lt(Pe),e===null?(n=rc(),n===null&&(n=He,i=sc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},dc(t),zl(t,Pe,n)):((e.lanes&l)!==0&&(mc(e,t),zn(t,null,null,l),En()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),zl(t,Pe,a)):(a=i.cache,zl(t,Pe,a),a!==n.cache&&cc(t,[Pe],l,!0))),at(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function rl(e){e.flags|=4}function Kc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(wf())e.flags|=8192;else throw aa=Ti,fc}else e.flags&=-16777217}function hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jd(t))if(wf())e.flags|=8192;else throw aa=Ti,fc}function ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xs():536870912,e.lanes|=t,Va|=t)}function Bn(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Dp(e,t,l){var a=t.pendingProps;switch(lc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ul(Pe),me(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ja(t)?rl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nc())),Be(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(rl(t),i!==null?(Be(t),hf(t,i)):(Be(t),Kc(t,n,null,a,l))):i?i!==e.memoizedState?(rl(t),Be(t),hf(t,i)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&rl(t),Be(t),Kc(t,n,e,a,l)),null;case 27:if(St(t),l=te.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rl(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Be(t),null}e=G.current,ja(t)?Ko(t):(e=Td(n,a,l),t.stateNode=e,rl(t))}return Be(t),null;case 5:if(St(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rl(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Be(t),null}if(i=G.current,ja(t))Ko(t);else{var u=tu(te.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[et]=t,i[ft]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(nt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&rl(t)}}return Be(t),Kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=te.current,ja(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=tt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[et]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||dd(e.nodeValue,l)),e||El(t,!0)}else e=tu(e).createTextNode(a),e[et]=t,t.stateNode=e}return Be(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ja(t),l!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[et]=t}else Wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else l=nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Ct(t),t):(Ct(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ja(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[et]=t}else Wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),n=!1}else n=nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ct(t),t):(Ct(t),null)}return Ct(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),ki(t,t.updateQueue),Be(t),null);case 4:return me(),e===null&&hs(t.stateNode.containerInfo),Be(t),null;case 10:return ul(t.type),Be(t),null;case 19:if(C(we),a=t.memoizedState,a===null)return Be(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Bn(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Oi(e),i!==null){for(t.flags|=128,Bn(a,!1),e=i.updateQueue,t.updateQueue=e,ki(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Yo(l,e),l=l.sibling;return _(we,we.current&1|2),de&&nl(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&F()>Zi&&(t.flags|=128,n=!0,Bn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Oi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ki(t,e),Bn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!de)return Be(t),null}else 2*F()-a.renderingStartTime>Zi&&l!==536870912&&(t.flags|=128,n=!0,Bn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=F(),e.sibling=null,l=we.current,_(we,n?l&1|2:l&1),de&&nl(t,a.treeForkCount),e):(Be(t),null);case 22:case 23:return Ct(t),yc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),l=t.updateQueue,l!==null&&ki(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&C(ta),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ul(Pe),Be(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function qp(e,t){switch(lc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ul(Pe),me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return St(t),null;case 31:if(t.memoizedState!==null){if(Ct(t),t.alternate===null)throw Error(s(340));Wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(we),null;case 4:return me(),null;case 10:return ul(t.type),null;case 22:case 23:return Ct(t),yc(),e!==null&&C(ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ul(Pe),null;case 25:return null;default:return null}}function yf(e,t){switch(lc(t),t.tag){case 3:ul(Pe),me();break;case 26:case 27:case 5:St(t);break;case 4:me();break;case 31:t.memoizedState!==null&&Ct(t);break;case 13:Ct(t);break;case 19:C(we);break;case 10:ul(t.type);break;case 22:case 23:Ct(t),yc(),e!==null&&C(ta);break;case 24:ul(Pe)}}function Dn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){Ae(t,t.return,c)}}function Bl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var d=l,x=c;try{x()}catch(O){Ae(n,d,O)}}}a=a.next}while(a!==i)}}catch(O){Ae(t,t.return,O)}}function vf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{cr(t,l)}catch(a){Ae(e,e.return,a)}}}function bf(e,t,l){l.props=ua(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Ae(e,t,a)}}function qn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Ae(e,t,n)}}function It(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Ae(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Ae(e,t,n)}else l.current=null}function xf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Ae(e,e.return,n)}}function Jc(e,t,l){try{var a=e.stateNode;lg(a,e.type,l,t),a[ft]=t}catch(n){Ae(e,e.return,n)}}function Sf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gl(e.type)||e.tag===4}function Ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=tl));else if(a!==4&&(a===27&&Gl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Fc(e,t,l),e=e.sibling;e!==null;)Fc(e,t,l),e=e.sibling}function Qi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Gl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Qi(e,t,l),e=e.sibling;e!==null;)Qi(e,t,l),e=e.sibling}function Af(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);nt(t,a,l),t[et]=e,t[ft]=l}catch(i){Ae(e,e.return,i)}}var fl=!1,Je=!1,Wc=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,We=null;function Rp(e,t){if(e=e.containerInfo,bs=su,e=qo(e),Zu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,d=-1,x=0,O=0,j=e,S=null;t:for(;;){for(var M;j!==l||n!==0&&j.nodeType!==3||(c=u+n),j!==i||a!==0&&j.nodeType!==3||(d=u+a),j.nodeType===3&&(u+=j.nodeValue.length),(M=j.firstChild)!==null;)S=j,j=M;for(;;){if(j===e)break t;if(S===l&&++x===n&&(c=u),S===i&&++O===a&&(d=u),(M=j.nextSibling)!==null)break;j=S,S=j.parentNode}j=M}l=c===-1||d===-1?null:{start:c,end:d}}else l=null}l=l||{start:0,end:0}}else l=null;for(xs={focusedElem:e,selectionRange:l},su=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var Q=ua(l.type,n);e=a.getSnapshotBeforeUpdate(Q,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(J){Ae(l,l.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Ts(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ts(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Mf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ml(e,l),a&4&&Dn(5,l);break;case 1:if(ml(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){Ae(l,l.return,u)}else{var n=ua(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Ae(l,l.return,u)}}a&64&&vf(l),a&512&&qn(l,l.return);break;case 3:if(ml(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{cr(e,t)}catch(u){Ae(l,l.return,u)}}break;case 27:t===null&&a&4&&Af(l);case 26:case 5:ml(e,l),t===null&&a&4&&xf(l),a&512&&qn(l,l.return);break;case 12:ml(e,l);break;case 31:ml(e,l),a&4&&Of(e,l);break;case 13:ml(e,l),a&4&&Hf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Vp.bind(null,l),rg(e,l))));break;case 22:if(a=l.memoizedState!==null||fl,!a){t=t!==null&&t.memoizedState!==null||Je,n=fl;var i=Je;fl=a,(Je=t)&&!i?pl(e,l,(l.subtreeFlags&8772)!==0):ml(e,l),fl=n,Je=i}break;case 30:break;default:ml(e,l)}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,mt=!1;function dl(e,t,l){for(l=l.child;l!==null;)zf(e,t,l),l=l.sibling}function zf(e,t,l){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(st,l)}catch{}switch(l.tag){case 26:Je||It(l,t),dl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Je||It(l,t);var a=Re,n=mt;Gl(l.type)&&(Re=l.stateNode,mt=!1),dl(e,t,l),Yn(l.stateNode),Re=a,mt=n;break;case 5:Je||It(l,t);case 6:if(a=Re,n=mt,Re=null,dl(e,t,l),Re=a,mt=n,Re!==null)if(mt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(l.stateNode)}catch(i){Ae(l,t,i)}else try{Re.removeChild(l.stateNode)}catch(i){Ae(l,t,i)}break;case 18:Re!==null&&(mt?(e=Re,vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Wa(e)):vd(Re,l.stateNode));break;case 4:a=Re,n=mt,Re=l.stateNode.containerInfo,mt=!0,dl(e,t,l),Re=a,mt=n;break;case 0:case 11:case 14:case 15:Bl(2,l,t),Je||Bl(4,l,t),dl(e,t,l);break;case 1:Je||(It(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&bf(l,t,a)),dl(e,t,l);break;case 21:dl(e,t,l);break;case 22:Je=(a=Je)||l.memoizedState!==null,dl(e,t,l),Je=a;break;default:dl(e,t,l)}}function Of(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wa(e)}catch(l){Ae(t,t.return,l)}}}function Hf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wa(e)}catch(l){Ae(t,t.return,l)}}function _p(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(s(435,e.tag))}}function wi(e,t){var l=_p(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Zp.bind(null,e,a);a.then(n,n)}})}function pt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(Gl(c.type)){Re=c.stateNode,mt=!1;break e}break;case 5:Re=c.stateNode,mt=!1;break e;case 3:case 4:Re=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(Re===null)throw Error(s(160));zf(i,u,n),Re=null,mt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}var Pt=null;function Cf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),gt(e),a&4&&(Bl(3,e,e.return),Dn(3,e),Bl(5,e,e.return));break;case 1:pt(t,e),gt(e),a&512&&(Je||l===null||It(l,l.return)),a&64&&fl&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Pt;if(pt(t,e),gt(e),a&512&&(Je||l===null||It(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[cn]||i[et]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),nt(i,a,l),i[et]=e,Fe(i),a=i;break e;case"link":var u=Cd("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),nt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Cd("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),nt(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[et]=e,Fe(i),a=i}e.stateNode=a}else Nd(n,e.type,e.stateNode);else e.stateNode=Hd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Nd(n,e.type,e.stateNode):Hd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,l.memoizedProps)}break;case 27:pt(t,e),gt(e),a&512&&(Je||l===null||It(l,l.return)),l!==null&&a&4&&Jc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(pt(t,e),gt(e),a&512&&(Je||l===null||It(l,l.return)),e.flags&32){n=e.stateNode;try{Sa(n,"")}catch(Q){Ae(e,e.return,Q)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Jc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Wc=!0);break;case 6:if(pt(t,e),gt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Q){Ae(e,e.return,Q)}}break;case 3:if(nu=null,n=Pt,Pt=lu(t.containerInfo),pt(t,e),Pt=n,gt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Wa(t.containerInfo)}catch(Q){Ae(e,e.return,Q)}Wc&&(Wc=!1,Nf(e));break;case 4:a=Pt,Pt=lu(e.stateNode.containerInfo),pt(t,e),gt(e),Pt=a;break;case 12:pt(t,e),gt(e);break;case 31:pt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,wi(e,a)));break;case 13:pt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Vi=F()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,wi(e,a)));break;case 22:n=e.memoizedState!==null;var d=l!==null&&l.memoizedState!==null,x=fl,O=Je;if(fl=x||n,Je=O||d,pt(t,e),Je=O,fl=x,gt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||d||fl||Je||ca(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){d=l=t;try{if(i=d.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=d.stateNode;var j=d.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(Q){Ae(d,d.return,Q)}}}else if(t.tag===6){if(l===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(Q){Ae(d,d.return,Q)}}}else if(t.tag===18){if(l===null){d=t;try{var M=d.stateNode;n?bd(M,!0):bd(d.stateNode,!1)}catch(Q){Ae(d,d.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,wi(e,l))));break;case 19:pt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,wi(e,a)));break;case 30:break;case 21:break;default:pt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Sf(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=Ic(e);Qi(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Sa(u,""),l.flags&=-33);var c=Ic(e);Qi(e,c,u);break;case 3:case 4:var d=l.stateNode.containerInfo,x=Ic(e);Fc(e,x,d);break;default:throw Error(s(161))}}catch(O){Ae(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ml(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mf(e,t.alternate,t),t=t.sibling}function ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bl(4,t,t.return),ca(t);break;case 1:It(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&bf(t,t.return,l),ca(t);break;case 27:Yn(t.stateNode);case 26:case 5:It(t,t.return),ca(t);break;case 22:t.memoizedState===null&&ca(t);break;case 30:ca(t);break;default:ca(t)}e=e.sibling}}function pl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:pl(n,i,l),Dn(4,i);break;case 1:if(pl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(x){Ae(a,a.return,x)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)ur(d[n],c)}catch(x){Ae(a,a.return,x)}}l&&u&64&&vf(i),qn(i,i.return);break;case 27:Af(i);case 26:case 5:pl(n,i,l),l&&a===null&&u&4&&xf(i),qn(i,i.return);break;case 12:pl(n,i,l);break;case 31:pl(n,i,l),l&&u&4&&Of(n,i);break;case 13:pl(n,i,l),l&&u&4&&Hf(n,i);break;case 22:i.memoizedState===null&&pl(n,i,l),qn(i,i.return);break;case 30:break;default:pl(n,i,l)}t=t.sibling}}function $c(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&xn(l))}function es(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xn(e))}function Xt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jf(e,t,l,a),t=t.sibling}function jf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,l,a),n&2048&&Dn(9,t);break;case 1:Xt(e,t,l,a);break;case 3:Xt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xn(e)));break;case 12:if(n&2048){Xt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){Ae(t,t.return,d)}}else Xt(e,t,l,a);break;case 31:Xt(e,t,l,a);break;case 13:Xt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Xt(e,t,l,a):Rn(e,t):i._visibility&2?Xt(e,t,l,a):(i._visibility|=2,Qa(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&$c(u,t);break;case 24:Xt(e,t,l,a),n&2048&&es(t.alternate,t);break;default:Xt(e,t,l,a)}}function Qa(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,d=a,x=u.flags;switch(u.tag){case 0:case 11:case 15:Qa(i,u,c,d,n),Dn(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?Qa(i,u,c,d,n):Rn(i,u):(O._visibility|=2,Qa(i,u,c,d,n)),n&&x&2048&&$c(u.alternate,u);break;case 24:Qa(i,u,c,d,n),n&&x&2048&&es(u.alternate,u);break;default:Qa(i,u,c,d,n)}t=t.sibling}}function Rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Rn(l,a),n&2048&&$c(a.alternate,a);break;case 24:Rn(l,a),n&2048&&es(a.alternate,a);break;default:Rn(l,a)}t=t.sibling}}var _n=8192;function wa(e,t,l){if(e.subtreeFlags&_n)for(e=e.child;e!==null;)Bf(e,t,l),e=e.sibling}function Bf(e,t,l){switch(e.tag){case 26:wa(e,t,l),e.flags&_n&&e.memoizedState!==null&&Ag(l,Pt,e.memoizedState,e.memoizedProps);break;case 5:wa(e,t,l);break;case 3:case 4:var a=Pt;Pt=lu(e.stateNode.containerInfo),wa(e,t,l),Pt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=_n,_n=16777216,wa(e,t,l),_n=a):wa(e,t,l));break;default:wa(e,t,l)}}function Df(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ln(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];We=a,Rf(a,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qf(e),e=e.sibling}function qf(e){switch(e.tag){case 0:case 11:case 15:Ln(e),e.flags&2048&&Bl(9,e,e.return);break;case 3:Ln(e);break;case 12:Ln(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yi(e)):Ln(e);break;default:Ln(e)}}function Yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];We=a,Rf(a,e)}Df(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bl(8,t,t.return),Yi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Yi(t));break;default:Yi(t)}e=e.sibling}}function Rf(e,t){for(;We!==null;){var l=We;switch(l.tag){case 0:case 11:case 15:Bl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:xn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,We=a;else e:for(l=e;We!==null;){a=We;var n=a.sibling,i=a.return;if(Ef(a),a===l){We=null;break e}if(n!==null){n.return=i,We=n;break e}We=i}}}var Lp={getCacheForType:function(e){var t=lt(Pe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return lt(Pe).controller.signal}},Up=typeof WeakMap=="function"?WeakMap:Map,ve=0,He=null,se=null,re=0,Se=0,Nt=null,Dl=!1,Ya=!1,ts=!1,gl=0,Ge=0,ql=0,sa=0,ls=0,jt=0,Va=0,Un=null,ht=null,as=!1,Vi=0,_f=0,Zi=1/0,Pi=null,Rl=null,Ie=0,_l=null,Za=null,hl=0,ns=0,is=null,Lf=null,Gn=0,us=null;function Bt(){return(ve&2)!==0&&re!==0?re&-re:T.T!==null?ds():Fs()}function Uf(){if(jt===0)if((re&536870912)===0||de){var e=ei;ei<<=1,(ei&3932160)===0&&(ei=262144),jt=e}else jt=536870912;return e=Ht.current,e!==null&&(e.flags|=32),jt}function yt(e,t,l){(e===He&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Pa(e,0),Ll(e,re,jt,!1)),un(e,l),((ve&2)===0||e!==He)&&(e===He&&((ve&2)===0&&(sa|=l),Ge===4&&Ll(e,re,jt,!1)),Ft(e))}function Gf(e,t,l){if((ve&6)!==0)throw Error(s(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||nn(e,t),n=a?Qp(e,t):ss(e,t,!0),i=a;do{if(n===0){Ya&&!a&&Ll(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Gp(l)){n=ss(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=Un;var d=c.current.memoizedState.isDehydrated;if(d&&(Pa(c,u).flags|=256),u=ss(c,u,!1),u!==2){if(ts&&!d){c.errorRecoveryDisabledLanes|=i,sa|=i,n=4;break e}i=ht,ht=n,i!==null&&(ht===null?ht=i:ht.push.apply(ht,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Pa(e,0),Ll(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ll(a,t,jt,!Dl);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Vi+300-F(),10<n)){if(Ll(a,t,jt,!Dl),li(a,0,!0)!==0)break e;hl=t,a.timeoutHandle=hd(kf.bind(null,a,l,ht,Pi,as,t,jt,sa,Va,Dl,i,"Throttled",-0,0),n);break e}kf(a,l,ht,Pi,as,t,jt,sa,Va,Dl,i,null,-0,0)}}break}while(!0);Ft(e)}function kf(e,t,l,a,n,i,u,c,d,x,O,j,S,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tl},Bf(t,i,j);var Q=(i&62914560)===i?Vi-F():(i&4194048)===i?_f-F():0;if(Q=Tg(j,Q),Q!==null){hl=i,e.cancelPendingCommit=Q(Kf.bind(null,e,t,i,l,a,n,u,c,d,O,j,null,S,M)),Ll(e,i,u,!x);return}}Kf(e,t,i,l,a,n,u,c,d)}function Gp(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!zt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ll(e,t,l,a){t&=~ls,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-Et(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Ks(e,l,t)}function Xi(){return(ve&6)===0?(kn(0),!1):!0}function cs(){if(se!==null){if(Se===0)var e=se.return;else e=se,il=$l=null,Tc(e),_a=null,An=0,e=se;for(;e!==null;)yf(e.alternate,e),e=e.return;se=null}}function Pa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,ig(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),hl=0,cs(),He=e,se=l=al(e.current,null),re=t,Se=0,Nt=null,Dl=!1,Ya=nn(e,t),ts=!1,Va=jt=ls=sa=ql=Ge=0,ht=Un=null,as=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Et(a),i=1<<n;t|=e[n],a&=~i}return gl=t,pi(),l}function Qf(e,t){$=null,T.H=Nn,t===Ra||t===Ai?(t=lr(),Se=3):t===fc?(t=lr(),Se=4):Se=t===Gc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,se===null&&(Ge=1,_i(e,Lt(t,e.current)))}function wf(){var e=Ht.current;return e===null?!0:(re&4194048)===re?Qt===null:(re&62914560)===re||(re&536870912)!==0?e===Qt:!1}function Yf(){var e=T.H;return T.H=Nn,e===null?Nn:e}function Vf(){var e=T.A;return T.A=Lp,e}function Ki(){Ge=4,Dl||(re&4194048)!==re&&Ht.current!==null||(Ya=!0),(ql&134217727)===0&&(sa&134217727)===0||He===null||Ll(He,re,jt,!1)}function ss(e,t,l){var a=ve;ve|=2;var n=Yf(),i=Vf();(He!==e||re!==t)&&(Pi=null,Pa(e,t)),t=!1;var u=Ge;e:do try{if(Se!==0&&se!==null){var c=se,d=Nt;switch(Se){case 8:cs(),u=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(t=!0);var x=Se;if(Se=0,Nt=null,Xa(e,c,d,x),l&&Ya){u=0;break e}break;default:x=Se,Se=0,Nt=null,Xa(e,c,d,x)}}kp(),u=Ge;break}catch(O){Qf(e,O)}while(!0);return t&&e.shellSuspendCounter++,il=$l=null,ve=a,T.H=n,T.A=i,se===null&&(He=null,re=0,pi()),u}function kp(){for(;se!==null;)Zf(se)}function Qp(e,t){var l=ve;ve|=2;var a=Yf(),n=Vf();He!==e||re!==t?(Pi=null,Zi=F()+500,Pa(e,t)):Ya=nn(e,t);e:do try{if(Se!==0&&se!==null){t=se;var i=Nt;t:switch(Se){case 1:Se=0,Nt=null,Xa(e,t,i,1);break;case 2:case 9:if(er(i)){Se=0,Nt=null,Pf(t);break}t=function(){Se!==2&&Se!==9||He!==e||(Se=7),Ft(e)},i.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:er(i)?(Se=0,Nt=null,Pf(t)):(Se=0,Nt=null,Xa(e,t,i,7));break;case 5:var u=null;switch(se.tag){case 26:u=se.memoizedState;case 5:case 27:var c=se;if(u?jd(u):c.stateNode.complete){Se=0,Nt=null;var d=c.sibling;if(d!==null)se=d;else{var x=c.return;x!==null?(se=x,Ji(x)):se=null}break t}}Se=0,Nt=null,Xa(e,t,i,5);break;case 6:Se=0,Nt=null,Xa(e,t,i,6);break;case 8:cs(),Ge=6;break e;default:throw Error(s(462))}}wp();break}catch(O){Qf(e,O)}while(!0);return il=$l=null,T.H=a,T.A=n,ve=l,se!==null?0:(He=null,re=0,pi(),Ge)}function wp(){for(;se!==null&&!R();)Zf(se)}function Zf(e){var t=gf(e.alternate,e,gl);e.memoizedProps=e.pendingProps,t===null?Ji(e):se=t}function Pf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=of(l,t,t.pendingProps,t.type,void 0,re);break;case 11:t=of(l,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Tc(t);default:yf(l,t),t=se=Yo(t,gl),t=gf(l,t,gl)}e.memoizedProps=e.pendingProps,t===null?Ji(e):se=t}function Xa(e,t,l,a){il=$l=null,Tc(t),_a=null,An=0;var n=t.return;try{if(Np(e,n,t,l,re)){Ge=1,_i(e,Lt(l,e.current)),se=null;return}}catch(i){if(n!==null)throw se=n,i;Ge=1,_i(e,Lt(l,e.current)),se=null;return}t.flags&32768?(de||a===1?e=!0:Ya||(re&536870912)!==0?e=!1:(Dl=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ht.current,a!==null&&a.tag===13&&(a.flags|=16384))),Xf(t,e)):Ji(t)}function Ji(e){var t=e;do{if((t.flags&32768)!==0){Xf(t,Dl);return}e=t.return;var l=Dp(t.alternate,t,gl);if(l!==null){se=l;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ge===0&&(Ge=5)}function Xf(e,t){do{var l=qp(e.alternate,e);if(l!==null){l.flags&=32767,se=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=l}while(e!==null);Ge=6,se=null}function Kf(e,t,l,a,n,i,u,c,d){e.cancelPendingCommit=null;do Ii();while(Ie!==0);if((ve&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Iu,Sm(e,l,i,u,c,d),e===He&&(se=He=null,re=0),Za=t,_l=e,hl=l,ns=i,is=n,Lf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pp(At,function(){return $f(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,n=q.p,q.p=2,u=ve,ve|=4;try{Rp(e,t,l)}finally{ve=u,q.p=n,T.T=a}}Ie=1,Jf(),If(),Ff()}}function Jf(){if(Ie===1){Ie=0;var e=_l,t=Za,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var a=q.p;q.p=2;var n=ve;ve|=4;try{Cf(t,e);var i=xs,u=qo(e.containerInfo),c=i.focusedElem,d=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Do(c.ownerDocument.documentElement,c)){if(d!==null&&Zu(c)){var x=d.start,O=d.end;if(O===void 0&&(O=x),"selectionStart"in c)c.selectionStart=x,c.selectionEnd=Math.min(O,c.value.length);else{var j=c.ownerDocument||document,S=j&&j.defaultView||window;if(S.getSelection){var M=S.getSelection(),Q=c.textContent.length,J=Math.min(d.start,Q),ze=d.end===void 0?J:Math.min(d.end,Q);!M.extend&&J>ze&&(u=ze,ze=J,J=u);var v=Bo(c,J),g=Bo(c,ze);if(v&&g&&(M.rangeCount!==1||M.anchorNode!==v.node||M.anchorOffset!==v.offset||M.focusNode!==g.node||M.focusOffset!==g.offset)){var b=j.createRange();b.setStart(v.node,v.offset),M.removeAllRanges(),J>ze?(M.addRange(b),M.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),M.addRange(b))}}}}for(j=[],M=c;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<j.length;c++){var N=j[c];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}su=!!bs,xs=bs=null}finally{ve=n,q.p=a,T.T=l}}e.current=t,Ie=2}}function If(){if(Ie===2){Ie=0;var e=_l,t=Za,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var a=q.p;q.p=2;var n=ve;ve|=4;try{Mf(e,t.alternate,t)}finally{ve=n,q.p=a,T.T=l}}Ie=3}}function Ff(){if(Ie===4||Ie===3){Ie=0,ce();var e=_l,t=Za,l=hl,a=Lf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ie=5:(Ie=0,Za=_l=null,Wf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Rl=null),zu(l),t=t.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(st,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,n=q.p,q.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{T.T=t,q.p=n}}(hl&3)!==0&&Ii(),Ft(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===us?Gn++:(Gn=0,us=e):Gn=0,kn(0)}}function Wf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xn(t)))}function Ii(){return Jf(),If(),Ff(),$f()}function $f(){if(Ie!==5)return!1;var e=_l,t=ns;ns=0;var l=zu(hl),a=T.T,n=q.p;try{q.p=32>l?32:l,T.T=null,l=is,is=null;var i=_l,u=hl;if(Ie=0,Za=_l=null,hl=0,(ve&6)!==0)throw Error(s(331));var c=ve;if(ve|=4,qf(i.current),jf(i,i.current,u,l),ve=c,kn(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(st,i)}catch{}return!0}finally{q.p=n,T.T=a,Wf(e,t)}}function ed(e,t,l){t=Lt(l,t),t=Uc(e.stateNode,t,2),e=Cl(e,t,2),e!==null&&(un(e,2),Ft(e))}function Ae(e,t,l){if(e.tag===3)ed(e,e,l);else for(;t!==null;){if(t.tag===3){ed(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rl===null||!Rl.has(a))){e=Lt(l,e),l=ef(2),a=Cl(t,l,2),a!==null&&(tf(l,a,t,e),un(a,2),Ft(a));break}}t=t.return}}function os(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Up;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(ts=!0,n.add(l),e=Yp.bind(null,e,t,l),t.then(e,e))}function Yp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,He===e&&(re&l)===l&&(Ge===4||Ge===3&&(re&62914560)===re&&300>F()-Vi?(ve&2)===0&&Pa(e,0):ls|=l,Va===re&&(Va=0)),Ft(e)}function td(e,t){t===0&&(t=Xs()),e=Il(e,t),e!==null&&(un(e,t),Ft(e))}function Vp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),td(e,l)}function Zp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),td(e,l)}function Pp(e,t){return ln(e,t)}var Fi=null,Ka=null,rs=!1,Wi=!1,fs=!1,Ul=0;function Ft(e){e!==Ka&&e.next===null&&(Ka===null?Fi=Ka=e:Ka=Ka.next=e),Wi=!0,rs||(rs=!0,Kp())}function kn(e,t){if(!fs&&Wi){fs=!0;do for(var l=!1,a=Fi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Et(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,id(a,i))}else i=re,i=li(a,a===He?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||nn(a,i)||(l=!0,id(a,i));a=a.next}while(l);fs=!1}}function Xp(){ld()}function ld(){Wi=rs=!1;var e=0;Ul!==0&&ng()&&(e=Ul);for(var t=F(),l=null,a=Fi;a!==null;){var n=a.next,i=ad(a,t);i===0?(a.next=null,l===null?Fi=n:l.next=n,n===null&&(Ka=l)):(l=a,(e!==0||(i&3)!==0)&&(Wi=!0)),a=n}Ie!==0&&Ie!==5||kn(e),Ul!==0&&(Ul=0)}function ad(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Et(i),c=1<<u,d=n[u];d===-1?((c&l)===0||(c&a)!==0)&&(n[u]=xm(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}if(t=He,l=re,l=li(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&an(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||nn(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&an(a),zu(l)){case 2:case 8:l=ct;break;case 32:l=At;break;case 268435456:l=Dt;break;default:l=At}return a=nd.bind(null,e),l=ln(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&an(a),e.callbackPriority=2,e.callbackNode=null,2}function nd(e,t){if(Ie!==0&&Ie!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ii()&&e.callbackNode!==l)return null;var a=re;return a=li(e,e===He?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Gf(e,a,t),ad(e,F()),e.callbackNode!=null&&e.callbackNode===l?nd.bind(null,e):null)}function id(e,t){if(Ii())return null;Gf(e,t,!0)}function Kp(){ug(function(){(ve&6)!==0?ln(Ze,Xp):ld()})}function ds(){if(Ul===0){var e=Da;e===0&&(e=$n,$n<<=1,($n&261888)===0&&($n=256)),Ul=e}return Ul}function ud(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ui(""+e)}function cd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Jp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=ud((n[ft]||null).action),u=a.submitter;u&&(t=(t=u[ft]||null)?ud(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new ri("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ul!==0){var d=u?cd(n,u):new FormData(n);Bc(l,{pending:!0,data:d,method:n.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=u?cd(n,u):new FormData(n),Bc(l,{pending:!0,data:d,method:n.method,action:i},i,d))},currentTarget:n}]})}}for(var ms=0;ms<Ju.length;ms++){var ps=Ju[ms],Ip=ps.toLowerCase(),Fp=ps[0].toUpperCase()+ps.slice(1);Zt(Ip,"on"+Fp)}Zt(Lo,"onAnimationEnd"),Zt(Uo,"onAnimationIteration"),Zt(Go,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(mp,"onTransitionRun"),Zt(pp,"onTransitionStart"),Zt(gp,"onTransitionCancel"),Zt(ko,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),Pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qn));function sd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],d=c.instance,x=c.currentTarget;if(c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=x;try{i(n)}catch(O){mi(O)}n.currentTarget=null,i=d}else for(u=0;u<a.length;u++){if(c=a[u],d=c.instance,x=c.currentTarget,c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=x;try{i(n)}catch(O){mi(O)}n.currentTarget=null,i=d}}}}function oe(e,t){var l=t[Ou];l===void 0&&(l=t[Ou]=new Set);var a=e+"__bubble";l.has(a)||(od(t,e,2,!1),l.add(a))}function gs(e,t,l){var a=0;t&&(a|=4),od(l,e,a,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function hs(e){if(!e[$i]){e[$i]=!0,eo.forEach(function(l){l!=="selectionchange"&&(Wp.has(l)||gs(l,!1,e),gs(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,gs("selectionchange",!1,t))}}function od(e,t,l,a){switch(Ud(t)){case 2:var n=zg;break;case 8:n=Og;break;default:n=js}l=n.bind(null,t,l,e),n=void 0,!_u||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function ys(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=ha(c),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){a=i=u;continue e}c=c.parentNode}}a=a.return}mo(function(){var x=i,O=qu(l),j=[];e:{var S=Qo.get(e);if(S!==void 0){var M=ri,Q=e;switch(e){case"keypress":if(si(l)===0)break e;case"keydown":case"keyup":M=Zm;break;case"focusin":Q="focus",M=ku;break;case"focusout":Q="blur",M=ku;break;case"beforeblur":case"afterblur":M=ku;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Km;break;case Lo:case Uo:case Go:M=_m;break;case ko:M=Im;break;case"scroll":case"scrollend":M=jm;break;case"wheel":M=Wm;break;case"copy":case"cut":case"paste":M=Um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=vo;break;case"toggle":case"beforetoggle":M=ep}var J=(t&4)!==0,ze=!J&&(e==="scroll"||e==="scrollend"),v=J?S!==null?S+"Capture":null:S;J=[];for(var g=x,b;g!==null;){var N=g;if(b=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||b===null||v===null||(N=on(g,v),N!=null&&J.push(wn(g,N,b))),ze)break;g=g.return}0<J.length&&(S=new M(S,Q,null,l,O),j.push({event:S,listeners:J}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",S&&l!==Du&&(Q=l.relatedTarget||l.fromElement)&&(ha(Q)||Q[ga]))break e;if((M||S)&&(S=O.window===O?O:(S=O.ownerDocument)?S.defaultView||S.parentWindow:window,M?(Q=l.relatedTarget||l.toElement,M=x,Q=Q?ha(Q):null,Q!==null&&(ze=A(Q),J=Q.tag,Q!==ze||J!==5&&J!==27&&J!==6)&&(Q=null)):(M=null,Q=x),M!==Q)){if(J=ho,N="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(J=vo,N="onPointerLeave",v="onPointerEnter",g="pointer"),ze=M==null?S:sn(M),b=Q==null?S:sn(Q),S=new J(N,g+"leave",M,l,O),S.target=ze,S.relatedTarget=b,N=null,ha(O)===x&&(J=new J(v,g+"enter",Q,l,O),J.target=b,J.relatedTarget=ze,N=J),ze=N,M&&Q)t:{for(J=$p,v=M,g=Q,b=0,N=v;N;N=J(N))b++;N=0;for(var Z=g;Z;Z=J(Z))N++;for(;0<b-N;)v=J(v),b--;for(;0<N-b;)g=J(g),N--;for(;b--;){if(v===g||g!==null&&v===g.alternate){J=v;break t}v=J(v),g=J(g)}J=null}else J=null;M!==null&&rd(j,S,M,J,!1),Q!==null&&ze!==null&&rd(j,ze,Q,J,!0)}}e:{if(S=x?sn(x):window,M=S.nodeName&&S.nodeName.toLowerCase(),M==="select"||M==="input"&&S.type==="file")var ge=zo;else if(Mo(S))if(Oo)ge=rp;else{ge=sp;var w=cp}else M=S.nodeName,!M||M.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?x&&Bu(x.elementType)&&(ge=zo):ge=op;if(ge&&(ge=ge(e,x))){Eo(j,ge,l,O);break e}w&&w(e,S,x),e==="focusout"&&x&&S.type==="number"&&x.memoizedProps.value!=null&&ju(S,"number",S.value)}switch(w=x?sn(x):window,e){case"focusin":(Mo(w)||w.contentEditable==="true")&&(Ea=w,Pu=x,yn=null);break;case"focusout":yn=Pu=Ea=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Ro(j,l,O);break;case"selectionchange":if(dp)break;case"keydown":case"keyup":Ro(j,l,O)}var le;if(wu)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ma?Ao(e,l)&&(fe="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(fe="onCompositionStart");fe&&(bo&&l.locale!=="ko"&&(Ma||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ma&&(le=po()):(Al=O,Lu="value"in Al?Al.value:Al.textContent,Ma=!0)),w=eu(x,fe),0<w.length&&(fe=new yo(fe,e,null,l,O),j.push({event:fe,listeners:w}),le?fe.data=le:(le=To(l),le!==null&&(fe.data=le)))),(le=lp?ap(e,l):np(e,l))&&(fe=eu(x,"onBeforeInput"),0<fe.length&&(w=new yo("onBeforeInput","beforeinput",null,l,O),j.push({event:w,listeners:fe}),w.data=le)),Jp(j,e,x,l,O)}sd(j,t)})}function wn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function eu(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=on(e,l),n!=null&&a.unshift(wn(e,n,i)),n=on(e,t),n!=null&&a.push(wn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function $p(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rd(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,d=c.alternate,x=c.stateNode;if(c=c.tag,d!==null&&d===a)break;c!==5&&c!==26&&c!==27||x===null||(d=x,n?(x=on(l,i),x!=null&&u.unshift(wn(l,x,d))):n||(x=on(l,i),x!=null&&u.push(wn(l,x,d)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var eg=/\r\n?/g,tg=/\u0000|\uFFFD/g;function fd(e){return(typeof e=="string"?e:""+e).replace(eg,`
`).replace(tg,"")}function dd(e,t){return t=fd(t),fd(e)===t}function Ee(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Sa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Sa(e,""+a);break;case"className":ni(e,"class",a);break;case"tabIndex":ni(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(e,l,a);break;case"style":ro(e,a,i);break;case"data":if(t!=="object"){ni(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ui(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ui(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=tl);break;case"onScroll":a!=null&&oe("scroll",e);break;case"onScrollEnd":a!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ui(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":oe("beforetoggle",e),oe("toggle",e),ai(e,"popover",a);break;case"xlinkActuate":el(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":el(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":el(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":el(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":el(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":el(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":el(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":el(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":el(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ai(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Cm.get(l)||l,ai(e,l,a))}}function vs(e,t,l,a,n,i){switch(l){case"style":ro(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Sa(e,a):(typeof a=="number"||typeof a=="bigint")&&Sa(e,""+a);break;case"onScroll":a!=null&&oe("scroll",e);break;case"onScrollEnd":a!=null&&oe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!to.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[ft]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):ai(e,l,a)}}}function nt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ee(e,t,i,u,l,null)}}n&&Ee(e,t,"srcSet",l.srcSet,l,null),a&&Ee(e,t,"src",l.src,l,null);return;case"input":oe("invalid",e);var c=i=u=n=null,d=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var O=l[a];if(O!=null)switch(a){case"name":n=O;break;case"type":u=O;break;case"checked":d=O;break;case"defaultChecked":x=O;break;case"value":i=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:Ee(e,t,a,O,l,null)}}uo(e,i,c,d,x,u,n,!1);return;case"select":oe("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:Ee(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?xa(e,!!a,t,!1):l!=null&&xa(e,!!a,l,!0);return;case"textarea":oe("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:Ee(e,t,u,c,l,null)}so(e,a,n,i);return;case"option":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ee(e,t,d,a,l,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(a=0;a<Qn.length;a++)oe(Qn[a],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ee(e,t,x,a,l,null)}return;default:if(Bu(t)){for(O in l)l.hasOwnProperty(O)&&(a=l[O],a!==void 0&&vs(e,t,O,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&Ee(e,t,c,a,l,null))}function lg(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,d=null,x=null,O=null;for(M in l){var j=l[M];if(l.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":d=j;default:a.hasOwnProperty(M)||Ee(e,t,M,null,a,j)}}for(var S in a){var M=a[S];if(j=l[S],a.hasOwnProperty(S)&&(M!=null||j!=null))switch(S){case"type":i=M;break;case"name":n=M;break;case"checked":x=M;break;case"defaultChecked":O=M;break;case"value":u=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:M!==j&&Ee(e,t,S,M,a,j)}}Nu(e,u,c,d,x,O,i,n);return;case"select":M=u=c=S=null;for(i in l)if(d=l[i],l.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":M=d;default:a.hasOwnProperty(i)||Ee(e,t,i,null,a,d)}for(n in a)if(i=a[n],d=l[n],a.hasOwnProperty(n)&&(i!=null||d!=null))switch(n){case"value":S=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==d&&Ee(e,t,n,i,a,d)}t=c,l=u,a=M,S!=null?xa(e,!!l,S,!1):!!a!=!!l&&(t!=null?xa(e,!!l,t,!0):xa(e,!!l,l?[]:"",!1));return;case"textarea":M=S=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ee(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":S=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&Ee(e,t,u,n,a,i)}co(e,S,M);return;case"option":for(var Q in l)if(S=l[Q],l.hasOwnProperty(Q)&&S!=null&&!a.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Ee(e,t,Q,null,a,S)}for(d in a)if(S=a[d],M=l[d],a.hasOwnProperty(d)&&S!==M&&(S!=null||M!=null))switch(d){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:Ee(e,t,d,S,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in l)S=l[J],l.hasOwnProperty(J)&&S!=null&&!a.hasOwnProperty(J)&&Ee(e,t,J,null,a,S);for(x in a)if(S=a[x],M=l[x],a.hasOwnProperty(x)&&S!==M&&(S!=null||M!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,t));break;default:Ee(e,t,x,S,a,M)}return;default:if(Bu(t)){for(var ze in l)S=l[ze],l.hasOwnProperty(ze)&&S!==void 0&&!a.hasOwnProperty(ze)&&vs(e,t,ze,void 0,a,S);for(O in a)S=a[O],M=l[O],!a.hasOwnProperty(O)||S===M||S===void 0&&M===void 0||vs(e,t,O,S,a,M);return}}for(var v in l)S=l[v],l.hasOwnProperty(v)&&S!=null&&!a.hasOwnProperty(v)&&Ee(e,t,v,null,a,S);for(j in a)S=a[j],M=l[j],!a.hasOwnProperty(j)||S===M||S==null&&M==null||Ee(e,t,j,S,a,M)}function md(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ag(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&md(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var d=l[a],x=d.startTime;if(x>c)break;var O=d.transferSize,j=d.initiatorType;O&&md(j)&&(d=d.responseEnd,u+=O*(d<c?1:(c-x)/(d-x)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bs=null,xs=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function pd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var As=null;function ng(){var e=window.event;return e&&e.type==="popstate"?e===As?!1:(As=e,!0):(As=null,!1)}var hd=typeof setTimeout=="function"?setTimeout:void 0,ig=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(e){return yd.resolve(null).then(e).catch(cg)}:hd;function cg(e){setTimeout(function(){throw e})}function Gl(e){return e==="head"}function vd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Wa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Yn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Yn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[cn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&Yn(e.ownerDocument.body);l=n}while(l);Wa(t)}function bd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Ts(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ts(l),Hu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function sg(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[cn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function og(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=wt(e.nextSibling),e===null))return null;return e}function xd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function Ms(e){return e.data==="$?"||e.data==="$~"}function Es(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rg(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var zs=null;function Sd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return wt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Td(e,t,l){switch(t=tu(l),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hu(e)}var Yt=new Map,Md=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yl=q.d;q.d={f:fg,r:dg,D:mg,C:pg,L:gg,m:hg,X:vg,S:yg,M:bg};function fg(){var e=yl.f(),t=Xi();return e||t}function dg(e){var t=ya(e);t!==null&&t.tag===5&&t.type==="form"?kr(t):yl.r(e)}var Ja=typeof document>"u"?null:document;function Ed(e,t,l){var a=Ja;if(a&&typeof t=="string"&&t){var n=Rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Md.has(n)||(Md.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),nt(t,"link",e),Fe(t),a.head.appendChild(t)))}}function mg(e){yl.D(e),Ed("dns-prefetch",e,null)}function pg(e,t){yl.C(e,t),Ed("preconnect",e,t)}function gg(e,t,l){yl.L(e,t,l);var a=Ja;if(a&&e&&t){var n='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Rt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Rt(l.imageSizes)+'"]')):n+='[href="'+Rt(e)+'"]';var i=n;switch(t){case"style":i=Ia(e);break;case"script":i=Fa(e)}Yt.has(i)||(e=E({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Yt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Vn(i))||t==="script"&&a.querySelector(Zn(i))||(t=a.createElement("link"),nt(t,"link",e),Fe(t),a.head.appendChild(t)))}}function hg(e,t){yl.m(e,t);var l=Ja;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Fa(e)}if(!Yt.has(i)&&(e=E({rel:"modulepreload",href:e},t),Yt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Zn(i)))return}a=l.createElement("link"),nt(a,"link",e),Fe(a),l.head.appendChild(a)}}}function yg(e,t,l){yl.S(e,t,l);var a=Ja;if(a&&e){var n=va(a).hoistableStyles,i=Ia(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Vn(i)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Yt.get(i))&&Os(e,l);var d=u=a.createElement("link");Fe(d),nt(d,"link",e),d._p=new Promise(function(x,O){d.onload=x,d.onerror=O}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,au(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function vg(e,t){yl.X(e,t);var l=Ja;if(l&&e){var a=va(l).hoistableScripts,n=Fa(e),i=a.get(n);i||(i=l.querySelector(Zn(n)),i||(e=E({src:e,async:!0},t),(t=Yt.get(n))&&Hs(e,t),i=l.createElement("script"),Fe(i),nt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function bg(e,t){yl.M(e,t);var l=Ja;if(l&&e){var a=va(l).hoistableScripts,n=Fa(e),i=a.get(n);i||(i=l.querySelector(Zn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=Yt.get(n))&&Hs(e,t),i=l.createElement("script"),Fe(i),nt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function zd(e,t,l,a){var n=(n=te.current)?lu(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ia(l.href),l=va(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ia(l.href);var i=va(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Vn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Yt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Yt.set(e,l),i||xg(n,e,l,u.state))),t&&a===null)throw Error(s(528,""));return u}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fa(l),l=va(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ia(e){return'href="'+Rt(e)+'"'}function Vn(e){return'link[rel="stylesheet"]['+e+"]"}function Od(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function xg(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),nt(t,"link",l),Fe(t),e.head.appendChild(t))}function Fa(e){return'[src="'+Rt(e)+'"]'}function Zn(e){return"script[async]"+e}function Hd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(l.href)+'"]');if(a)return t.instance=a,Fe(a),a;var n=E({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Fe(a),nt(a,"style",n),au(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ia(l.href);var i=e.querySelector(Vn(n));if(i)return t.state.loading|=4,t.instance=i,Fe(i),i;a=Od(l),(n=Yt.get(n))&&Os(a,n),i=(e.ownerDocument||e).createElement("link"),Fe(i);var u=i;return u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),nt(i,"link",a),t.state.loading|=4,au(i,l.precedence,e),t.instance=i;case"script":return i=Fa(l.src),(n=e.querySelector(Zn(i)))?(t.instance=n,Fe(n),n):(a=l,(n=Yt.get(i))&&(a=E({},l),Hs(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Fe(n),nt(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,au(a,l.precedence,e));return t.instance}function au(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var nu=null;function Cd(e,t,l){if(nu===null){var a=new Map,n=nu=new Map;n.set(l,a)}else n=nu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[cn]||i[et]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Nd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Sg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ag(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ia(a.href),i=t.querySelector(Vn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=iu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Fe(i);return}i=t.ownerDocument||t,a=Od(a),(n=Yt.get(n))&&Os(a,n),i=i.createElement("link"),Fe(i);var u=i;u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),nt(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=iu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Cs=0;function Tg(e,t){return e.stylesheets&&e.count===0&&cu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Cs===0&&(Cs=62500*ag());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Cs?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uu=null;function cu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uu=new Map,t.forEach(Mg,e),uu=null,iu.call(e))}function Mg(e,t){if(!(t.state.loading&4)){var l=uu.get(e);if(l)var a=l.get(null);else{l=new Map,uu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=iu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Pn={$$typeof:ye,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Eg(e,t,l,a,n,i,u,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.hiddenUpdates=Mu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Bd(e,t,l,a,n,i,u,c,d,x,O,j){return e=new Eg(e,t,l,u,d,x,O,j,c),t=1,i===!0&&(t|=24),i=Ot(3,null,null,t),e.current=i,i.stateNode=e,t=sc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},dc(i),e}function Dd(e){return e?(e=Ha,e):Ha}function qd(e,t,l,a,n,i){n=Dd(n),a.context===null?a.context=n:a.pendingContext=n,a=Hl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Cl(e,a,t),l!==null&&(yt(l,e,t),Mn(l,e,t))}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ns(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function _d(e){if(e.tag===13||e.tag===31){var t=Il(e,67108864);t!==null&&yt(t,e,67108864),Ns(e,67108864)}}function Ld(e){if(e.tag===13||e.tag===31){var t=Bt();t=Eu(t);var l=Il(e,t);l!==null&&yt(l,e,t),Ns(e,t)}}var su=!0;function zg(e,t,l,a){var n=T.T;T.T=null;var i=q.p;try{q.p=2,js(e,t,l,a)}finally{q.p=i,T.T=n}}function Og(e,t,l,a){var n=T.T;T.T=null;var i=q.p;try{q.p=8,js(e,t,l,a)}finally{q.p=i,T.T=n}}function js(e,t,l,a){if(su){var n=Bs(a);if(n===null)ys(e,t,a,ou,l),Gd(e,a);else if(Cg(n,e,t,l,a))a.stopPropagation();else if(Gd(e,a),t&4&&-1<Hg.indexOf(e)){for(;n!==null;){var i=ya(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Zl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var d=1<<31-Et(u);c.entanglements[1]|=d,u&=~d}Ft(i),(ve&6)===0&&(Zi=F()+500,kn(0))}}break;case 31:case 13:c=Il(i,2),c!==null&&yt(c,i,2),Xi(),Ns(i,2)}if(i=Bs(a),i===null&&ys(e,t,a,ou,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ys(e,t,a,null,l)}}function Bs(e){return e=qu(e),Ds(e)}var ou=null;function Ds(e){if(ou=null,e=ha(e),e!==null){var t=A(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=H(t),e!==null)return e;e=null}else if(l===31){if(e=D(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ou=e,null}function Ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Te()){case Ze:return 2;case ct:return 8;case At:case Le:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var qs=!1,kl=null,Ql=null,wl=null,Xn=new Map,Kn=new Map,Yl=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":kl=null;break;case"dragenter":case"dragleave":Ql=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Jn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ya(t),t!==null&&_d(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Cg(e,t,l,a,n){switch(t){case"focusin":return kl=Jn(kl,e,t,l,a,n),!0;case"dragenter":return Ql=Jn(Ql,e,t,l,a,n),!0;case"mouseover":return wl=Jn(wl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Xn.set(i,Jn(Xn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Kn.set(i,Jn(Kn.get(i)||null,e,t,l,a,n)),!0}return!1}function kd(e){var t=ha(e.target);if(t!==null){var l=A(t);if(l!==null){if(t=l.tag,t===13){if(t=H(l),t!==null){e.blockedOn=t,Ws(e.priority,function(){Ld(l)});return}}else if(t===31){if(t=D(l),t!==null){e.blockedOn=t,Ws(e.priority,function(){Ld(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ru(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Bs(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Du=a,l.target.dispatchEvent(a),Du=null}else return t=ya(l),t!==null&&_d(t),e.blockedOn=l,!1;t.shift()}return!0}function Qd(e,t,l){ru(e)&&l.delete(t)}function Ng(){qs=!1,kl!==null&&ru(kl)&&(kl=null),Ql!==null&&ru(Ql)&&(Ql=null),wl!==null&&ru(wl)&&(wl=null),Xn.forEach(Qd),Kn.forEach(Qd)}function fu(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ng)))}var du=null;function wd(e){du!==e&&(du=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){du===e&&(du=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Ds(a||l)===null)continue;break}var i=ya(l);i!==null&&(e.splice(t,3),t-=3,Bc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Wa(e){function t(d){return fu(d,e)}kl!==null&&fu(kl,e),Ql!==null&&fu(Ql,e),wl!==null&&fu(wl,e),Xn.forEach(t),Kn.forEach(t);for(var l=0;l<Yl.length;l++){var a=Yl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Yl.length&&(l=Yl[0],l.blockedOn===null);)kd(l),l.blockedOn===null&&Yl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[ft]||null;if(typeof i=="function")u||wd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[ft]||null)c=u.formAction;else if(Ds(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),wd(l)}}}function Yd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Rs(e){this._internalRoot=e}mu.prototype.render=Rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var l=t.current,a=Bt();qd(l,a,e,t,null,null)},mu.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qd(e.current,2,null,e,null,null),Xi(),t[ga]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Yl.length&&t!==0&&t<Yl[l].priority;l++);Yl.splice(l,0,e),l===0&&kd(e)}};var Vd=r.version;if(Vd!=="19.2.8")throw Error(s(527,Vd,"19.2.8"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var jg={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{st=pu.inject(jg),Mt=pu}catch{}}return Fn.createRoot=function(e,t){if(!y(e))throw Error(s(299));var l=!1,a="",n=Ir,i=Fr,u=Wr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Bd(e,1,!1,null,null,l,a,null,n,i,u,Yd),e[ga]=t.current,hs(e),new Rs(t)},Fn.hydrateRoot=function(e,t,l){if(!y(e))throw Error(s(299));var a=!1,n="",i=Ir,u=Fr,c=Wr,d=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(d=l.formState)),t=Bd(e,1,!0,t,l??null,a,n,d,i,u,c,Yd),t.context=Dd(null),l=t.current,a=Bt(),a=Eu(a),n=Hl(a),n.callback=null,Cl(l,n,a),l=a,t.current.lanes=l,un(t,l),Ft(t),e[ga]=t.current,hs(e),new mu(t)},Fn.version="19.2.8",Fn}var em;function Qg(){if(em)return Us.exports;em=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Us.exports=kg(),Us.exports}var wg=Qg();const oa={QUEEN:{type:"QUEEN",name:"Queen Bee",emoji:"🐝",description:"Moves 1 space per turn. Must be placed by turn 4. Game ends when a Queen is surrounded.",count:1},SPIDER:{type:"SPIDER",name:"Spider",emoji:"🕷️",description:"Moves exactly 3 spaces around the swarm perimeter without backtracking.",count:2},BEETLE:{type:"BEETLE",name:"Beetle",emoji:"🪲",description:"Moves 1 space on ground or climbs on top of adjacent pieces to pin them.",count:2},GRASSHOPPER:{type:"GRASSHOPPER",name:"Grasshopper",emoji:"🦗",description:"Jumps in a straight line over connected pieces to the first empty space.",count:3},SOLDIER_ANT:{type:"SOLDIER_ANT",name:"Soldier Ant",emoji:"🐜",description:"Moves any distance around the perimeter of the swarm.",count:3},MOSQUITO:{type:"MOSQUITO",name:"Mosquito",emoji:"🦟",description:"Copies movement ability of any adjacent piece touching it (acts like Beetle on top of swarm).",count:1,isExpansion:!0},LADYBUG:{type:"LADYBUG",name:"Ladybug",emoji:"🐞",description:"Moves exactly 3 spaces: 2 spaces on top of the swarm and 1 space down.",count:1,isExpansion:!0},PILLBUG:{type:"PILLBUG",name:"Pillbug",emoji:"🪳",description:"Moves 1 space OR picks up an adjacent unstacked piece and moves it to another adjacent empty space.",count:1,isExpansion:!0}};function ae(o,r){return`${o},${r}`}const am=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function tm(o,r){const h=am[(r%6+6)%6];return{q:o.q+h.q,r:o.r+h.r}}function ke(o){return am.map(r=>({q:o.q+r.q,r:o.r+r.r}))}function Wt(o,r){return o.q===r.q&&o.r===r.r}function nm(o,r){const h=ke(o),s=ke(r);return h.filter(y=>s.some(A=>Wt(y,A)))}function Yg(o,r,h=42){const s=h*Math.sqrt(3)*(o+r/2),y=h*(3/2)*r;return{x:s,y}}function Vg(o,r,h=42){const s=[];for(let y=0;y<6;y++){const A=60*y-30,H=Math.PI/180*A,D=o+h*Math.cos(H),z=r+h*Math.sin(H);s.push(`${D.toFixed(2)},${z.toFixed(2)}`)}return s.join(" ")}function xu(o){const r=new Map;return o.forEach((h,s)=>{r.set(s,[...h])}),r}function fa(o,r){const h=o.get(ae(r.q,r.r));return!h||h.length===0?null:h[h.length-1]}function vl(o,r){const h=o.get(ae(r.q,r.r));return h?h.length:0}function vt(o,r){return vl(o,r)>0}function Su(o){const r=[];return o.forEach((h,s)=>{if(h.length>0){const[y,A]=s.split(",").map(Number);r.push({q:y,r:A})}}),r}function ra(o,r){for(const h of o.values())for(const s of h)if(s.player===r&&s.type==="QUEEN")return!0;return!1}function hu(o,r){for(const[h,s]of o.entries())for(const y of s)if(y.player===r&&y.type==="QUEEN"){const[A,H]=h.split(",").map(Number);return{q:A,r:H}}return null}function Zg(o){const r=Su(o);if(r.length<=1)return!0;const h=new Set,s=[r[0]];for(h.add(ae(r[0].q,r[0].r));s.length>0;){const y=s.shift(),A=ke(y);for(const H of A){const D=ae(H.q,H.r);vt(o,H)&&!h.has(D)&&(h.add(D),s.push(H))}}return h.size===r.length}function im(o,r){const h=o.get(ae(r.q,r.r));if(!h||h.length===0)return!1;if(h.length>1)return!0;const s=xu(o);return s.delete(ae(r.q,r.r)),Zg(s)}function Wn(o,r,h,s=0){const y=nm(r,h);if(y.length!==2)return!1;const A=vl(o,y[0]),H=vl(o,y[1]),D=Math.max(s,vl(o,r)-1,vl(o,h));return!(A>D&&H>D)}function Au(o,r,h,s=!0){if(vt(o,h)||!Wn(o,r,h,0))return!1;const y=xu(o),A=y.get(ae(r.q,r.r));return A&&(A.length===1?y.delete(ae(r.q,r.r)):A.pop()),ke(h).some(z=>vt(y,z))}function um(o,r,h){const s=Su(o);if(s.length===0)return[{q:0,r:0}];if(s.length===1)return ke(s[0]);const y=new Set,A=[];for(const H of s)for(const D of ke(H))vt(o,D)||y.add(ae(D.q,D.r));for(const H of y){const[D,z]=H.split(",").map(Number),m={q:D,r:z},B=ke(m);let E=!1,L=!1;for(const U of B){const P=fa(o,U);P&&(P.player===r?E=!0:L=!0)}E&&!L&&A.push(m)}return A}function cm(o,r,h,s,y=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){if(!ra(o,h))return[];const H=o.get(ae(r.q,r.r));if(!H||H.length===0)return[];const D=H[H.length-1];if(D.player!==h)return[];if(D.id===y)return[];if(!im(o,r))return[];const z=Ps(o,r,D),m=new Set;for(const B of z)Pg(o,r,B).forEach(L=>m.add(ae(L.q,L.r)));return Array.from(m).map(B=>{const[E,L]=B.split(",").map(Number);return{q:E,r:L}})}function Ps(o,r,h,s){if(h.type!=="MOSQUITO")return[h.type];if(vl(o,r)>1)return["BEETLE"];const A=new Set,H=ke(r);for(const D of H){const z=fa(o,D);z&&(z.type==="MOSQUITO"||A.add(z.type))}return A.size===0?[]:Array.from(A)}function Pg(o,r,h,s){switch(h){case"QUEEN":return sm(o,r);case"SPIDER":return Xg(o,r);case"BEETLE":return Kg(o,r);case"GRASSHOPPER":return Jg(o,r);case"SOLDIER_ANT":return Ig(o,r);case"LADYBUG":return Fg(o,r);case"PILLBUG":return Wg(o,r);default:return[]}}function sm(o,r){return ke(r).filter(s=>Au(o,r,s))}function Xg(o,r){const h=[];function s(D,z,m){if(z===3){h.push(D);return}const B=ke(D);for(const E of B){const L=ae(E.q,E.r);if(!m.has(L)&&Au(o,D,E)){const U=new Set(m);U.add(L),s(E,z+1,U)}}}const y=new Set([ae(r.q,r.r)]);s(r,0,y);const A=new Set,H=[];for(const D of h){const z=ae(D.q,D.r);A.has(z)||(A.add(z),H.push(D))}return H}function Kg(o,r){const h=ke(r),s=[],y=vl(o,r);for(const A of h){const H=vl(o,A);if(H>=1||y>1){const D=Math.max(y-1,H);Wn(o,r,A,D)&&s.push(A)}else Au(o,r,A)&&s.push(A)}return s}function Jg(o,r){const h=[];for(let s=0;s<6;s++){let y=tm(r,s),A=0;for(;vt(o,y);)A++,y=tm(y,s);A>0&&h.push(y)}return h}function Ig(o,r){const h=new Set([ae(r.q,r.r)]),s=[r];for(;s.length>0;){const y=s.shift(),A=ke(y);for(const H of A){const D=ae(H.q,H.r);h.has(D)||Au(o,y,H)&&(h.add(D),s.push(H))}}return h.delete(ae(r.q,r.r)),Array.from(h).map(y=>{const[A,H]=y.split(",").map(Number);return{q:A,r:H}})}function Fg(o,r){const h=new Set,s=ke(r).filter(y=>vt(o,y)&&Wn(o,r,y,0));for(const y of s){const A=ke(y).filter(H=>!Wt(H,r)&&vt(o,H)&&Wn(o,y,H,1));for(const H of A){const D=ke(H).filter(z=>!Wt(z,y)&&!vt(o,z)&&Wn(o,H,z,0));for(const z of D)h.add(ae(z.q,z.r))}}return Array.from(h).map(y=>{const[A,H]=y.split(",").map(Number);return{q:A,r:H}})}function Wg(o,r){return sm(o,r)}function om(o,r,h,s=null){if(!ra(o,h))return[];const y=o.get(ae(r.q,r.r));if(!y||y.length===0)return[];if(y[y.length-1].id===s)return[];const H=ke(r),D=H.filter(m=>!vt(o,m));if(D.length===0)return[];const z=[];for(const m of H)if(vt(o,m)){const B=o.get(ae(m.q,m.r));if(B.length===1){const E=B[0];if(E.id===s||!im(o,m))continue;const L=D.filter(U=>!nm(m,U).filter(ne=>!Wt(ne,r)).some(ne=>vl(o,ne)>=2));L.length>0&&z.push({targetHex:m,piece:E,destinationHexes:L})}}return z}function yu(o,r,h,s,y=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){const H=[],D=ra(o,r),z=um(o,r);if(s>=4&&!D){const m=h.find(B=>B.type==="QUEEN");if(m)for(const B of z)H.push({type:"PLACE",pieceId:m.id,bugType:"QUEEN",player:r,toHex:B});return H}if(z.length>0&&h.length>0){const m=new Set,B=new Map;for(const E of h)m.has(E.type)||(m.add(E.type),B.set(E.type,E));for(const[E,L]of B.entries())for(const U of z)H.push({type:"PLACE",pieceId:L.id,bugType:E,player:r,toHex:U})}if(D){const m=Su(o);for(const B of m){const E=fa(o,B);if(E&&E.player===r){const L=cm(o,B,r,s,y,A);for(const P of L)H.push({type:"MOVE",pieceId:E.id,bugType:E.type,player:r,fromHex:B,toHex:P});if(Ps(o,B,E).includes("PILLBUG")){const P=om(o,B,r,y);for(const V of P)for(const ne of V.destinationHexes)H.push({type:"PILLBUG_SPECIAL",pieceId:E.id,bugType:E.type,player:r,fromHex:B,pillbugTargetHex:V.targetHex,toHex:ne})}}}}return H}function Tu(o){const r=hu(o,1),h=hu(o,2);let s=0,y=0;r&&(s=ke(r).filter(z=>vt(o,z)).length),h&&(y=ke(h).filter(z=>vt(o,z)).length);const A=s===6,H=y===6;return A&&H?{isGameOver:!0,winner:"DRAW",p1QueenSurroundedCount:s,p2QueenSurroundedCount:y}:A?{isGameOver:!0,winner:2,p1QueenSurroundedCount:s,p2QueenSurroundedCount:y}:H?{isGameOver:!0,winner:1,p1QueenSurroundedCount:s,p2QueenSurroundedCount:y}:{isGameOver:!1,winner:null,p1QueenSurroundedCount:s,p2QueenSurroundedCount:y}}function $g(o,r,h,s,y,A,H,D=null,z={mosquito:!0,ladybug:!0,pillbug:!0}){const m=yu(o,r,h,y,D,z);return m.length===0?null:H==="EASY"?eh(o,r,m,y):H==="MEDIUM"?th(o,r,h,s,y,A,m):lh(o,r,h,s,y,A,m,D,z)}function eh(o,r,h,s){if(!ra(o,r)&&s>=3){const y=h.filter(A=>A.bugType==="QUEEN");if(y.length>0)return y[Math.floor(Math.random()*y.length)]}return h[Math.floor(Math.random()*h.length)]}function th(o,r,h,s,y,A,H,D,z){let m=-1/0,B=[];for(const E of H){const{nextBoard:L,nextAIReserve:U,nextHumanReserve:P}=vu(o,E,r,h,s),V=rm(L,r,U,P,y,A);V>m+1e-9?(m=V,B=[E]):Math.abs(V-m)<=1e-9&&B.push(E)}return B[Math.floor(Math.random()*B.length)]}function lh(o,r,h,s,y,A,H,D,z){let E=-1/0,L=1/0,U=-1/0,P=H[0];for(const V of H){const{nextBoard:ne,nextAIReserve:be,nextHumanReserve:xe}=vu(o,V,r,h,s),ye=Tu(ne);if(ye.isGameOver&&ye.winner===r)return V;const Ce=gu(ne,1,E,L,!1,r,1,be,xe,y+1,A,Vs(o,V),z);Ce>U&&(U=Ce,P=V),E=Math.max(E,U)}return P}function gu(o,r,h,s,y,A,H,D,z,m,B,E,L){const U=Tu(o);if(U.isGameOver)return U.winner===A?1e4:U.winner===H?-1e4:0;if(r===0)return rm(o,A,D,z,m,B);const be=yu(o,y?A:H,y?D:z,y?m:B,E,L);if(be.length===0)return gu(o,r-1,h,s,!y,A,H,D,z,y?m+1:m,y?B:B+1,E,L);if(y){let xe=-1/0;for(const ye of be){const{nextBoard:Ce,nextAIReserve:Ne,nextHumanReserve:De}=vu(o,ye,A,D,z),X=gu(Ce,r-1,h,s,!1,A,H,Ne,De,m+1,B,Vs(o,ye),L);if(xe=Math.max(xe,X),h=Math.max(h,X),s<=h)break}return xe}else{let xe=1/0;for(const ye of be){const{nextBoard:Ce,nextAIReserve:Ne,nextHumanReserve:De}=vu(o,ye,H,D,z),X=gu(Ce,r-1,h,s,!0,A,H,Ne,De,m,B+1,Vs(o,ye),L);if(xe=Math.min(xe,X),s=Math.min(s,X),s<=h)break}return xe}}function rm(o,r,h,s,y,A,H){const z=Tu(o);if(z.isGameOver)return z.winner===r?1e4:z.winner===1?-1e4:0;const m=hu(o,r),B=hu(o,1);let E=0;if(B){const U=ke(B),P=U.filter(ne=>{var be;return((be=fa(o,ne))==null?void 0:be.player)===r}).length,V=U.filter(ne=>vt(o,ne)).length;E+=P*150,E+=(V-P)*40,V===5&&(E+=300)}else E+=A>=3?30:10;if(m){const U=ke(m),P=U.filter(be=>{var xe;return((xe=fa(o,be))==null?void 0:xe.player)===1}).length,V=U.filter(be=>vt(o,be)).length,ne=V-P;E-=P*210,V===5&&(E-=400),E+=ne*15}else E-=y>=3?60:15;const L=Su(o);for(const U of L){const P=o.get(ae(U.q,U.r));if(P.length>1){const V=P[P.length-1],ne=P[P.length-2];V.player===r&&ne.player===1?(E+=80,ne.type==="QUEEN"&&(E+=200)):V.player===1&&ne.player===r&&(E-=90,ne.type==="QUEEN"&&(E-=250))}}return E}function Vs(o,r){var h;return r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex?((h=fa(o,r.pillbugTargetHex))==null?void 0:h.id)??r.pieceId:r.pieceId}function vu(o,r,h,s,y){const A=xu(o);let H=[...s],D=[...y];if(r.type==="PLACE"){H=H.filter(E=>E.id!==r.pieceId),D=D.filter(E=>E.id!==r.pieceId);const z={id:r.pieceId,type:r.bugType,player:h},m=ae(r.toHex.q,r.toHex.r),B=A.get(m)||[];A.set(m,[...B,z])}else if(r.type==="MOVE"){if(r.fromHex){const z=ae(r.fromHex.q,r.fromHex.r),m=A.get(z)||[],B=m.pop();if(m.length===0&&A.delete(z),B){const E=ae(r.toHex.q,r.toHex.r),L=A.get(E)||[];A.set(E,[...L,B])}}}else if(r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex){const z=ae(r.pillbugTargetHex.q,r.pillbugTargetHex.r),m=A.get(z)||[],B=m.pop();if(m.length===0&&A.delete(z),B){const E=ae(r.toHex.q,r.toHex.r),L=A.get(E)||[];A.set(E,[...L,B])}}return{nextBoard:A,nextAIReserve:H,nextHumanReserve:D}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nh=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,h,s)=>s?s.toUpperCase():h.toLowerCase()),lm=o=>{const r=nh(o);return r.charAt(0).toUpperCase()+r.slice(1)},fm=(...o)=>o.filter((r,h,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===h).join(" ").trim(),ih=o=>{for(const r in o)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=I.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:h=2,absoluteStrokeWidth:s,className:y="",children:A,iconNode:H,...D},z)=>I.createElement("svg",{ref:z,...uh,width:r,height:r,stroke:o,strokeWidth:s?Number(h)*24/Number(r):h,className:fm("lucide",y),...!A&&!ih(D)&&{"aria-hidden":"true"},...D},[...H.map(([m,B])=>I.createElement(m,B)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(o,r)=>{const h=I.forwardRef(({className:s,...y},A)=>I.createElement(ch,{ref:A,iconNode:r,className:fm(`lucide-${ah(lm(o))}`,`lucide-${o}`,s),...y}));return h.displayName=lm(o),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],oh=Qe("book-open",sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],fh=Qe("bot",rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],mh=Qe("check",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gh=Qe("chevron-down",ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],yh=Qe("chevron-up",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],dm=Qe("circle-alert",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],mm=Qe("code-xml",bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Sh=Qe("copy",xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Th=Qe("download",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Eh=Qe("history",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Oh=Qe("maximize-2",zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Ch=Qe("move",Hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],jh=Qe("play",Nh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Dh=Qe("refresh-cw",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Rh=Qe("rotate-ccw",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Lh=Qe("settings",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Gh=Qe("sparkles",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Qh=Qe("trophy",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Yh=Qe("users",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pm=Qe("x",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ph=Qe("zoom-in",Zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Kh=Qe("zoom-out",Xh),Jh={appTitle:{en:"BUGZ",es:"BUGZ",pt:"BUGZ",fr:"BUGZ",de:"BUGZ",ja:"BUGZ",zh:"BUGZ"},appSubtitle:{en:"Strategy",es:"Estrategia",pt:"Estratégia",fr:"Stratégie",de:"Strategie",ja:"ストラテジー",zh:"战略"},vsAi:{en:"VS AI ({diff})",es:"VS IA ({diff})",pt:"VS IA ({diff})",fr:"VS IA ({diff})",de:"Gegen KI ({diff})",ja:"AIと対戦 ({diff})",zh:"对战AI（{diff}）"},passAndPlay:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},aiThinking:{en:"AI Thinking...",es:"IA pensando…",pt:"IA pensando…",fr:"L’IA réfléchit…",de:"KI denkt…",ja:"AI思考中…",zh:"AI思考中…"},playersTurn:{en:"Player {n}'s Turn ({color})",es:"Turno del Jugador {n} ({color})",pt:"Vez do Jogador {n} ({color})",fr:"Tour du Joueur {n} ({color})",de:"Spieler {n} am Zug ({color})",ja:"プレイヤー{n}の番（{color}）",zh:"玩家{n}的回合（{color}）"},white:{en:"White",es:"Blanco",pt:"Branco",fr:"Blanc",de:"Weiß",ja:"白",zh:"白"},black:{en:"Black",es:"Negro",pt:"Preto",fr:"Noir",de:"Schwarz",ja:"黒",zh:"黑"},undoTitle:{en:"Undo Move (Unlimited Step Rewind)",es:"Deshacer movimiento (rebobinado ilimitado)",pt:"Desfazer movimento (rebobinar ilimitado)",fr:"Annuler le coup (retour illimité)",de:"Zug rückgängig (unbegrenztes Zurückspulen)",ja:"手を戻す（無制限リプレイ）",zh:"撤销一步（无限回退）"},newGameTitle:{en:"New Game / Match Settings",es:"Nueva partida / Configuración",pt:"Nova partida / Configurações",fr:"Nouvelle partie / Paramètres",de:"Neues Spiel / Einstellungen",ja:"新規ゲーム / 設定",zh:"新游戏 / 设置"},kotlinTitle:{en:"View & Export Android Kotlin Compose Code",es:"Ver y exportar el código Kotlin Compose",pt:"Ver e exportar o código Kotlin Compose",fr:"Voir et exporter le code Kotlin Compose",de:"Kotlin-Compose-Code ansehen & exportieren",ja:"Kotlin Composeコードの表示と出力",zh:"查看并导出Kotlin Compose代码"},kotlinSource:{en:"Kotlin Source",es:"Código Kotlin",pt:"Código Kotlin",fr:"Code Kotlin",de:"Kotlin-Quellcode",ja:"Kotlinソース",zh:"Kotlin源码"},toastForcedPass:{en:"Player {n} has no legal moves available. Turn passed!",es:"El Jugador {n} no tiene movimientos legales. ¡Turno pasado!",pt:"O Jogador {n} não tem movimentos legais. Turno passado!",fr:"Le Joueur {n} n’a aucun coup légal. Tour passé !",de:"Spieler {n} hat keine legalen Züge. Zug übersprungen!",ja:"プレイヤー{n}は合法手がありません。パスしました！",zh:"玩家{n}没有合法走法。跳过回合！"},toastAiPass:{en:"AI (Player 2) has no valid moves. Turn passed!",es:"La IA (Jugador 2) no tiene movimientos válidos. ¡Turno pasado!",pt:"A IA (Jogador 2) não tem movimentos válidos. Turno passado!",fr:"L’IA (Joueur 2) n’a aucun coup valide. Tour passé !",de:"Die KI (Spieler 2) hat keine gültigen Züge. Zug übersprungen!",ja:"AI（プレイヤー2）は有効な手がありません。パスしました！",zh:"AI（玩家2）没有有效走法。跳过回合！"},passLogDesc:{en:"Player {n} was forced to pass turn.",es:"El Jugador {n} se vio obligado a pasar.",pt:"O Jogador {n} foi obrigado a passar.",fr:"Le Joueur {n} a été forcé de passer.",de:"Spieler {n} musste den Zug aussetzen.",ja:"プレイヤー{n}はパスを余儀なくされました。",zh:"玩家{n}被迫跳过回合。"},placedDesc:{en:"Placed {bug} at ({q}, {r})",es:"Colocó {bug} en ({q}, {r})",pt:"Colocou {bug} em ({q}, {r})",fr:"A placé {bug} en ({q}, {r})",de:"{bug} bei ({q}, {r}) platziert",ja:"{bug} を ({q}, {r}) に配置",zh:"将{bug}放置在({q}, {r})"},movedDesc:{en:"Moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"Movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"Moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"A déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"{bug} von ({q1}, {r1}) nach ({q2}, {r2}) bewegt",ja:"{bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"将{bug}从({q1}, {r1})移动到({q2}, {r2})"},pillbugMovedDesc:{en:"Pillbug moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"La cochinilla movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"A bicho-bola moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"Le cloporte a déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"Assel bewegt {bug} von ({q1}, {r1}) nach ({q2}, {r2})",ja:"ダンゴムシが {bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"潮虫将{bug}从({q1}, {r1})移动到({q2}, {r2})"},zoomIn:{en:"Zoom In",es:"Acercar",pt:"Aproximar",fr:"Zoom avant",de:"Vergrößern",ja:"拡大",zh:"放大"},zoomOut:{en:"Zoom Out",es:"Alejar",pt:"Afastar",fr:"Zoom arrière",de:"Verkleinern",ja:"縮小",zh:"缩小"},recenter:{en:"Recenter Board",es:"Centrar tablero",pt:"Centralizar tabuleiro",fr:"Recentrer le plateau",de:"Brett zentrieren",ja:"盤面を中央に",zh:"居中棋盘"},panHint:{en:"Drag canvas to pan • Scroll to zoom",es:"Arrastra para mover • Rueda para zoom",pt:"Arraste para mover • Role para zoom",fr:"Faites glisser pour déplacer • Molette pour zoomer",de:"Ziehen zum Verschieben • Scrollen zum Zoomen",ja:"ドラッグで移動 • スクロールでズーム",zh:"拖动画布平移 • 滚动缩放"},setupSubtitle:{en:"Configure your match mode, AI strength, and expansion pieces.",es:"Configura el modo de partida, la fuerza de la IA y las piezas de expansión.",pt:"Configure o modo de partida, a força da IA e as peças de expansão.",fr:"Configurez le mode de partie, la force de l’IA et les pièces d’extension.",de:"Konfiguriere Spielmodus, KI-Stärke und Erweiterungspieces.",ja:"対戦モード、AIの強さ、拡張ピースを設定します。",zh:"设置对战模式、AI强度和扩展棋子。"},gameModeLabel:{en:"Game Mode",es:"Modo de juego",pt:"Modo de jogo",fr:"Mode de jeu",de:"Spielmodus",ja:"ゲームモード",zh:"游戏模式"},passPlayBtn:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},vsAiBtn:{en:"VS AI Engine",es:"VS Motor IA",pt:"VS Motor IA",fr:"VS Moteur IA",de:"Gegen KI-Engine",ja:"AIエンジンと対戦",zh:"对战AI引擎"},aiDifficultyLabel:{en:"AI Difficulty",es:"Dificultad de la IA",pt:"Dificuldade da IA",fr:"Difficulté de l’IA",de:"KI-Schwierigkeit",ja:"AIの難易度",zh:"AI难度"},easyBtn:{en:"Easy",es:"Fácil",pt:"Fácil",fr:"Facile",de:"Leicht",ja:"かんたん",zh:"简单"},mediumBtn:{en:"Medium",es:"Medio",pt:"Médio",fr:"Moyen",de:"Mittel",ja:"ふつう",zh:"中等"},hardBtn:{en:"Hard (Minimax)",es:"Difícil (Minimax)",pt:"Difícil (Minimax)",fr:"Difficile (Minimax)",de:"Schwer (Minimax)",ja:"むずかしい（Minimax）",zh:"困难（Minimax）"},expansionsLabel:{en:"Expansions",es:"Expansiones",pt:"Expansões",fr:"Extensions",de:"Erweiterungen",ja:"拡張",zh:"扩展"},mosquitoLabel:{en:"🦟 The Mosquito",es:"🦟 El mosquito",pt:"🦟 O pernilongo",fr:"🦟 Le moustique",de:"🦟 Die Mücke",ja:"🦟 蚊",zh:"🦟 蚊子"},ladybugLabel:{en:"🐞 The Ladybug",es:"🐞 La mariquita",pt:"🐞 A joaninha",fr:"🐞 La coccinelle",de:"🐞 Der Marienkäfer",ja:"🐞 テントウムシ",zh:"🐞 瓢虫"},pillbugLabel:{en:"💊 The Pillbug",es:"💊 La cochinilla",pt:"💊 O bicho-bola",fr:"💊 Le cloporte",de:"💊 Die Assel",ja:"💊 ダンゴムシ",zh:"💊 潮虫"},cancel:{en:"Cancel",es:"Cancelar",pt:"Cancelar",fr:"Annuler",de:"Abbrechen",ja:"キャンセル",zh:"取消"},startGame:{en:"Start Game",es:"Comenzar",pt:"Começar",fr:"Commencer",de:"Start",ja:"開始",zh:"开始游戏"},learnToPlay:{en:"Learn to Play",es:"Aprende a jugar",pt:"Aprenda a jogar",fr:"Apprendre à jouer",de:"Lernen zu spielen",ja:"遊び方を学ぶ",zh:"学习玩法"},playerLabel:{en:"Player {n} ({color})",es:"Jugador {n} ({color})",pt:"Jogador {n} ({color})",fr:"Joueur {n} ({color})",de:"Spieler {n} ({color})",ja:"プレイヤー{n}（{color}）",zh:"玩家{n}（{color}）"},reserveCount:{en:"Reserve ({n})",es:"Reserva ({n})",pt:"Reserva ({n})",fr:"Réserve ({n})",de:"Reserve ({n})",ja:"リザーブ（{n}）",zh:"后备（{n}）"},turn4Warning:{en:"Turn 4 Mandatory: You MUST place your Queen Bee!",es:"Turno 4 obligatorio: ¡Debes colocar tu abeja reina!",pt:"Turno 4 obrigatório: Você DEVE colocar sua abelha rainha!",fr:"Tour 4 obligatoire : vous DEVEZ placer votre reine !",de:"Pflichtzug 4: Du MUSST deine Bienenkönigin platzieren!",ja:"4手目必須: 女王バチを配置しなければなりません！",zh:"第4回合强制：你必须放置蜂后！"},moveHistory:{en:"Move History ({n})",es:"Historial de movimientos ({n})",pt:"Histórico de movimentos ({n})",fr:"Historique des coups ({n})",de:"Zugverlauf ({n})",ja:"手番履歴（{n}）",zh:"走法历史（{n}）"},noMoves:{en:"No moves recorded yet.",es:"Aún no hay movimientos.",pt:"Nenhum movimento registrado ainda.",fr:"Aucun coup enregistré pour l’instant.",de:"Noch keine Züge aufgezeichnet.",ja:"まだ手は記録されていません。",zh:"暂无走法记录。"},drawTitle:{en:"🤝 Mutual Draw!",es:"🤝 ¡Empate mutuo!",pt:"🤝 Empate mútuo!",fr:"🤝 Égalité mutuelle !",de:"🤝 Unentschieden!",ja:"🤝 引き分け！",zh:"🤝 平局！"},p1WinTitle:{en:"🎉 Player 1 (White) Wins!",es:"🎉 ¡Gana el Jugador 1 (Blanco)!",pt:"🎉 O Jogador 1 (Branco) venceu!",fr:"🎉 Le Joueur 1 (Blanc) gagne !",de:"🎉 Spieler 1 (Weiß) gewinnt!",ja:"🎉 プレイヤー1（白）の勝利！",zh:"🎉 玩家1（白）获胜！"},p2WinTitle:{en:"🎉 Player 2 (Black) Wins!",es:"🎉 ¡Gana el Jugador 2 (Negro)!",pt:"🎉 O Jogador 2 (Preto) venceu!",fr:"🎉 Le Joueur 2 (Noir) gagne !",de:"🎉 Spieler 2 (Schwarz) gewinnt!",ja:"🎉 プレイヤー2（黒）の勝利！",zh:"🎉 玩家2（黑）获胜！"},drawDesc:{en:"Both Queen Bees were completely surrounded simultaneously!",es:"¡Ambas abejas reinas quedaron completamente rodeadas a la vez!",pt:"As duas abelhas rainhas foram completamente cercadas ao mesmo tempo!",fr:"Les deux reines ont été entièrement encerclées en même temps !",de:"Beide Bienenköniginnen wurden gleichzeitig vollständig eingekreist!",ja:"両方の女王バチが同時に完全に囲まれました！",zh:"两只蜂后同时被完全围住！"},winDesc:{en:"The opposing Queen Bee has been completely surrounded on all 6 sides!",es:"¡La abeja reina rival quedó completamente rodeada por los 6 lados!",pt:"A abelha rainha adversária foi completamente cercada nos 6 lados!",fr:"La reine adverse a été entièrement encerclée sur ses 6 côtés !",de:"Die gegnerische Bienenkönigin wurde auf allen 6 Seiten vollständig eingekreist!",ja:"相手の女王バチが6方向すべてを囲まれました！",zh:"对手的蜂后已被六面全部围住！"},playAgain:{en:"Play Again",es:"Jugar de nuevo",pt:"Jogar de novo",fr:"Rejouer",de:"Nochmal spielen",ja:"もう一度プレイ",zh:"再来一局"},matchOptions:{en:"Match Options / Difficulty",es:"Opciones / Dificultad",pt:"Opções / Dificuldade",fr:"Options / Difficulté",de:"Optionen / Schwierigkeit",ja:"対戦設定 / 難易度",zh:"对局选项 / 难度"},rulesTitle:{en:"How to Play Bugz",es:"Cómo jugar a Bugz",pt:"Como jogar Bugz",fr:"Comment jouer à Bugz",de:"So spielst du Bugz",ja:"Bugzの遊び方",zh:"如何玩Bugz"},close:{en:"Close",es:"Cerrar",pt:"Fechar",fr:"Fermer",de:"Schließen",ja:"閉じる",zh:"关闭"},goalTitle:{en:"🎯 Goal:",es:"🎯 Objetivo:",pt:"🎯 Objetivo:",fr:"🎯 Objectif :",de:"🎯 Ziel:",ja:"🎯 目的:",zh:"🎯 目标："},goalDesc:{en:"Surround the opponent's Queen Bee with pieces on all six sides. First to do so wins; both surrounded at once is a draw.",es:"Rodea la abeja reina del rival con piezas por los seis lados. El primero en lograrlo gana; si ambas quedan rodeadas a la vez, es empate.",pt:"Cerque a abelha rainha do oponente com peças em todos os seis lados. Quem conseguir primeiro vence; se ambas forem cercadas ao mesmo tempo, empata.",fr:"Encerclez la reine adverse avec des pièces sur les six côtés. Le premier à y parvenir gagne ; si les deux sont encerclées à la fois, c’est une égalité.",de:"Umschließe die Bienenkönigin des Gegners auf allen sechs Seiten. Wer das zuerst schafft, gewinnt; sind beide gleichzeitig eingekreist, ist es ein Unentschieden.",ja:"相手の女王バチの6方向すべてを自分の駒で囲みましょう。先に囲んだ方が勝ち。同時なら引き分けです。",zh:"用棋子将对手的蜂后六面围住。先完成者获胜；同时围住则为平局。"},coreRulesTitle:{en:"📜 Core Rules",es:"📜 Reglas básicas",pt:"📜 Regras básicas",fr:"📜 Règles de base",de:"📜 Grundregeln",ja:"📜 基本ルール",zh:"📜 基本规则"},coreRule1:{en:"Play one piece per turn (placement) or move one of your pieces.",es:"Coloca una pieza por turno o mueve una de tus piezas.",pt:"Jogue uma peça por turno (colocação) ou mova uma de suas peças.",fr:"Jouez une pièce par tour (placement) ou déplacez une de vos pièces.",de:"Setze pro Zug eine Kachel (Platzierung) oder bewege eine deiner Kacheln.",ja:"毎ターン1枚配置するか、自分の駒を1つ動かします。",zh:"每回合放置一枚棋子，或移动自己的一枚棋子。"},coreRule2:{en:"Your Queen Bee must be introduced by your 4th turn.",es:"Debes introducir tu abeja reina en tu 4º turno.",pt:"Sua abelha rainha deve ser introduzida até o seu 4º turno.",fr:"Votre reine doit être introduite avant votre 4e tour.",de:"Deine Bienenkönigin muss bis zu deinem 4. Zug eingeführt werden.",ja:"女王バチは4手目までに配置しなければなりません。",zh:"蜂后必须在你的第4回合之前上场。"},coreRule3:{en:"Your first piece is placed anywhere; later pieces must be placed adjacent to one of your pieces. Except for your second placement, pieces may not be placed touching an opponent's piece.",es:"Tu primera pieza se coloca en cualquier lugar; las siguientes deben ir adyacentes a una de tus piezas. Salvo la segunda colocación, no puedes colocar piezas tocando piezas del rival.",pt:"Sua primeira peça pode ser colocada em qualquer lugar; as seguintes devem ficar adjacentes a uma de suas peças. Exceto a segunda colocação, as peças não podem tocar peças do oponente.",fr:"Votre première pièce est placée n’importe où ; les suivantes doivent être adjacentes à une de vos pièces. Sauf pour la deuxième pose, vous ne pouvez pas poser une pièce touchant une pièce adverse.",de:"Deine erste Kachel platzierst du überall; spätere müssen an eine deiner Kacheln angrenzen. Außer bei deiner zweiten Platzierung dürfen Kacheln nicht gegnerische Kacheln berühren.",ja:"最初の1枚はどこにでも置けます。以降は自分の駒に隣接して置きます。2枚目の配置以外は、相手の駒に接する配置はできません。",zh:"第一枚棋子可放在任意位置；之后的棋子必须与自己的棋子相邻。除第二次放置外，棋子不能与对手棋子接触。"},coreRule4:{en:"The swarm must always stay connected. You may never move a piece that would split the Swarm, and you may not move a piece into a gap unless it still fits the freedom-to-move rule (no squeezing between stacked pieces).",es:"El enjambre debe permanecer siempre conectado. Nunca muevas una pieza que dividiría el enjambre, ni la metas en un hueco si no respeta la regla de libertad de movimiento (sin apretujones entre piezas apiladas).",pt:"O enxame deve permanecer sempre conectado. Nunca mova uma peça que dividiria o enxame, nem mova para um vão sem respeitar a regra de liberdade de movimento (sem apertar entre peças empilhadas).",fr:"L’essaim doit toujours rester connecté. Vous ne pouvez jamais déplacer une pièce qui diviserait l’essaim, ni la glisser dans un espace étroit (pas de glissement entre pièces empilées).",de:"Der Schwarm muss immer verbunden bleiben. Du darfst nie eine Kachel ziehen, die den Schwarm spaltet, und nicht in eine Lücke ziehen, es sei denn, es gilt die Bewegungsfreiheitsregel (kein Durchquetschen zwischen gestapelten Kacheln).",ja:"ハイブは常に繋がっていなければなりません。盤面を分断する動きはできず、積み上げた駒の隙間に入り込む動きも禁止です。",zh:"蜂群必须始终保持连通。不得移动会分裂蜂群的棋子，也不得将棋子挤入过窄的缝隙（不得在堆叠棋子之间挤入）。"},insectTitle:{en:"🦗 Insect Movements",es:"🦗 Movimientos de los insectos",pt:"🦗 Movimentos dos insetos",fr:"🦗 Déplacements des insectes",de:"🦗 Bewegungen der Insekten",ja:"🦗 昆虫の動き",zh:"🦗 昆虫的走法"},insectQueen:{en:"moves exactly 1 hex per turn.",es:"se mueve exactamente 1 hexágono por turno.",pt:"move exatamente 1 hexágono por turno.",fr:"se déplace d’exactement 1 hexagone par tour.",de:"zieht genau 1 Feld pro Zug.",ja:"毎ターンちょうど1マス移動します。",zh:"每回合恰好移动1格。"},insectSpider:{en:"crawls exactly 3 hexes along the outside edge, never retracing.",es:"se arrastra exactamente 3 hexágonos por el borde exterior, sin retroceder.",pt:"rasteja exatamente 3 hexágonos pela borda externa, sem retroceder.",fr:"se déplace d’exactement 3 hexagones le long du bord, sans jamais revenir en arrière.",de:"kriecht genau 3 Felder entlang der Außenkante, nie rückwärts.",ja:"外周に沿ってちょうど3マス移動し、後戻りはできません。",zh:"沿外围恰好爬行3格，不得折返。"},insectBeetle:{en:"moves 1 hex and can climb on top of other pieces (including a Queen) to block them; a beetle on top moves like a beetle over the stack.",es:"se mueve 1 hexágono y puede subir sobre otras piezas (incluida la reina) para bloquearlas; uno arriba se mueve como un escarabajo sobre la pila.",pt:"move 1 hexágono e pode subir sobre outras peças (inclusive a rainha) para bloqueá-las; um besouro no topo move-se como besouro sobre a pilha.",fr:"se déplace d’1 hexagone et peut grimper sur d’autres pièces (y compris la reine) pour les bloquer ; un scarabée en haut se déplace par-dessus la pile.",de:"zieht 1 Feld und kann auf andere Kacheln (auch die Königin) klettern, um sie zu blockieren; ein Käfer oben zieht über den Stapel.",ja:"1マス移動し、他の駒（女王バチを含む）の上に登って封鎖できます。上に乗ったカブトムシはスタックの上を移動します。",zh:"移动1格，可爬上其他棋子（包括蜂后）将其封锁；上方的甲虫可沿堆叠移动。"},insectGrasshopper:{en:"jumps in a straight line over at least one piece, landing on the first empty hex in that line.",es:"salta en línea recta sobre al menos una pieza y aterriza en el primer hexágono vacío de esa línea.",pt:"salta em linha reta sobre pelo menos uma peça, pousando no primeiro hexágono vazio da linha.",fr:"saute en ligne droite par-dessus au moins une pièce et atterrit sur le premier hexagone vide de la ligne.",de:"springt in einer geraden Linie über mindestens eine Kachel und landet auf dem ersten leeren Feld dieser Linie.",ja:"一直線に少なくとも1つの駒を飛び越え、その線上で最初の空きマスに着地します。",zh:"沿直线跳过至少一枚棋子，落在该线路上第一个空格。"},insectAnt:{en:"may slide any number of hexes along the outside of the Swarm.",es:"puede deslizarse cualquier cantidad de hexágonos por el exterior del enjambre.",pt:"pode deslizar qualquer número de hexágonos pela parte externa do enxame.",fr:"peut glisser d’un nombre quelconque d’hexagones le long de l’extérieur de l’essaim.",de:"kann beliebig viele Felder entlang der Außenseite des Schwarms gleiten.",ja:"ハイブの外周に沿って好きなだけ滑るように移動できます。",zh:"可沿蜂群外部滑动任意数量的格子。"},insectMosquito:{en:"copies the movement (or pillbug ability) of any piece it touches.",es:"copia el movimiento (o la habilidad de la cochinilla) de cualquier pieza que toque.",pt:"copia o movimento (ou a habilidade do bicho-bola) de qualquer peça que toque.",fr:"copie le déplacement (ou l’aptitude du cloporte) de toute pièce qu’il touche.",de:"kopiert die Bewegung (oder Assel-Fähigkeit) jeder Kachel, die es berührt.",ja:"接触している駒の移動（またはダンゴムシの能力）をコピーします。",zh:"复制与之接触的任何棋子的走法（或潮虫能力）。"},insectLadybug:{en:"moves exactly 2 hexes on top of the Swarm, then 1 hex back down to the board (may land on empty board hexes).",es:"se mueve exactamente 2 hexágonos sobre el enjambre y luego 1 hexágono hacia abajo al tablero (puede aterrizar en hexágonos vacíos).",pt:"move exatamente 2 hexágonos sobre o enxame e depois 1 hexágono de volta ao tabuleiro (pode pousar em hexágonos vazios).",fr:"se déplace d’exactement 2 hexagones par-dessus l’essaim, puis redescend d’1 hexagone sur le plateau (peut atterrir sur des cases vides).",de:"zieht genau 2 Felder über dem Schwarm und dann 1 Feld zurück auf das Brett (darf auf leere Felder landen).",ja:"ハイブの上をちょうど2マス移動し、その後1マス盤面に降ります（空きマスに着地可）。",zh:"在蜂群上方恰好移动2格，然后向下1格落回棋盘（可落在空棋盘格上）。"},insectPillbug:{en:"moves 1 space like the Queen Bee, or may pick up an adjacent unstacked piece (friend or foe) and place it in any empty space adjacent to it. The moved piece is stunned and cannot move on the opponent’s next turn.",es:"se mueve 1 espacio como la Abeja Reina, o puede levantar una pieza adyacente apilada (aliada o enemiga) y colocarla en cualquier espacio vacío adyacente. La pieza movida queda aturdida y no puede moverse en el siguiente turno del rival.",pt:"move-se 1 espaço como a Abelha Rainha, ou pode levantar uma peça adjacente não empilhada (aliada ou inimiga) e colocá-la em qualquer espaço vazio adjacente. A peça movida fica atordoada e não pode se mover no próximo turno do oponente.",fr:"se déplace de 1 case comme la Reine, ou peut soulever une pièce adjacente non empilée (alliée ou ennemie) et la placer dans n’importe quelle case vide adjacente. La pièce déplacée est étourdie et ne peut pas bouger au tour suivant de l’adversaire.",de:"zieht 1 Feld wie die Bienenkönigin oder darf eine benachbarte, nicht gestapelte Kachel (Feind oder Freund) aufheben und auf ein beliebiges benachbartes leeres Feld setzen. Die bewegte Kachel ist benommen und kann im nächsten Zug des Gegners nicht ziehen.",ja:"女王蜂のように1マス動くか、隣接する未スタックの駒（敵味方どちらでも）を持ち上げて、隣接する任意の空きマスに置けます。動かされた駒はスタンし、相手の次のターンは動けません。",zh:"像蜂后一样移动1格，或可拿起相邻未堆叠的棋子（敌我均可）放到其相邻的任意空位。被移动的棋子陷入眩晕，对手下一回合不能移动。"},codeTitle:{en:"Single-File Android Source Code",es:"Código fuente Android de un solo archivo",pt:"Código-fonte Android em arquivo único",fr:"Code source Android en un seul fichier",de:"Android-Quellcode in einer Datei",ja:"単一ファイルのAndroidソースコード",zh:"单文件Android源代码"},codeBadge:{en:"BugzApp.kt (Jetpack Compose)",es:"BugzApp.kt (Jetpack Compose)",pt:"BugzApp.kt (Jetpack Compose)",fr:"BugzApp.kt (Jetpack Compose)",de:"BugzApp.kt (Jetpack Compose)",ja:"BugzApp.kt (Jetpack Compose)",zh:"BugzApp.kt (Jetpack Compose)"},codeDesc:{en:"Complete Kotlin application logic, Compose canvas, AI minimax, and game loop.",es:"Lógica completa de la app en Kotlin, lienzo Compose, minimax de IA y bucle de juego.",pt:"Lógica completa do app em Kotlin, canvas Compose, minimax da IA e loop do jogo.",fr:"Logique complète de l’app en Kotlin, canevas Compose, minimax IA et boucle de jeu.",de:"Vollständige Kotlin-App-Logik, Compose-Canvas, KI-Minimax und Spielschleife.",ja:"完全なKotlinアプリロジック、Composeキャンバス、AIミニマックス、ゲームループ。",zh:"完整的Kotlin应用逻辑、Compose画布、AI极小化极大和游戏循环。"},copied:{en:"Copied!",es:"¡Copiado!",pt:"Copiado!",fr:"Copié !",de:"Kopiert!",ja:"コピーしました！",zh:"已复制！"},copyCode:{en:"Copy Code",es:"Copiar código",pt:"Copiar código",fr:"Copier le code",de:"Code kopieren",ja:"コードをコピー",zh:"复制代码"},downloadKt:{en:"Download .kt",es:"Descargar .kt",pt:"Baixar .kt",fr:"Télécharger .kt",de:".kt herunterladen",ja:".ktをダウンロード",zh:"下载.kt"}},bu=["en","es","pt","fr","de","ja","zh"],Ih={en:"English",es:"Español",pt:"Português",fr:"Français",de:"Deutsch",ja:"日本語",zh:"中文"},gm="bugz-lang-v1";function Fh(){try{const o=localStorage.getItem(gm);if(o&&bu.includes(o))return o}catch{}return Wh()}function Wh(){try{const o=typeof navigator<"u"?navigator.languages??[navigator.language]:[];for(const r of o){const h=r.toLowerCase().replace(/_/g,"-");if(bu.includes(h))return h;const s=h.split("-")[0];if(bu.includes(s))return s}}catch{}return"en"}const hm=I.createContext({lang:"en",setLang:()=>{},t:o=>String(o)}),$h=({children:o})=>{const[r,h]=I.useState(()=>Fh());I.useEffect(()=>{try{localStorage.setItem(gm,r)}catch{}},[r]);const s=(y,A)=>{const H=Jh[y],D=H?H[r]??H.en:String(y);return A?D.replace(/\{(\w+)\}/g,(z,m)=>A[m]!==void 0?String(A[m]):`{${m}}`):D};return f.jsx(hm.Provider,{value:{lang:r,setLang:h,t:s},children:o})};function bl(){return I.useContext(hm)}const ey=({className:o=""})=>{const{lang:r,setLang:h}=bl();return f.jsx("select",{value:r,onChange:s=>h(s.target.value),"aria-label":"Language",className:`rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-slate-200 transition-colors hover:bg-slate-700 cursor-pointer ${o}`,children:bu.map(s=>f.jsx("option",{value:s,children:Ih[s]},s))})},ty=({board:o,selectedHex:r,validDestinations:h,pillbugTargetHex:s,pillbugDestinations:y,onSelectHex:A,onSelectDestination:H,onSelectPillbugTarget:D,currentPlayer:z,isAITurn:m,lastMovedHex:B})=>{const{t:E}=bl(),L=I.useRef(null),[U,P]=I.useState(1),[V,ne]=I.useState({x:0,y:0}),[be,xe]=I.useState(!1),[ye,Ce]=I.useState({x:0,y:0}),Ne=42,De=()=>{ne({x:0,y:0}),P(1)},X=k=>{k.preventDefault();const Oe=k.deltaY<0?1.1:.9;P(T=>Math.min(Math.max(T*Oe,.4),2.5))},_e=k=>{k.button===0&&(xe(!0),Ce({x:k.clientX-V.x,y:k.clientY-V.y}))},Ve=k=>{be&&ne({x:k.clientX-ye.x,y:k.clientY-ye.y})},it=()=>{xe(!1)},rt=Array.from(o.keys()).map(k=>{const[Oe,T]=k.split(",").map(Number);return{q:Oe,r:T}}),pe=new Map;for(const k of rt){const Oe=ae(k.q,k.r);pe.set(Oe,k);for(const T of ke(k)){const q=ae(T.q,T.r);pe.has(q)||pe.set(q,T)}}if(pe.size===0){const k={q:0,r:0};pe.set(ae(0,0),k);for(const Oe of ke(k))pe.set(ae(Oe.q,Oe.r),Oe)}for(const k of h)pe.set(ae(k.q,k.r),k);for(const k of y)pe.set(ae(k.q,k.r),k);const bt=Array.from(pe.values());return f.jsxs("div",{ref:L,className:"relative w-full h-full bg-slate-900 overflow-hidden select-none cursor-grab active:cursor-grabbing border border-slate-800 rounded-2xl shadow-inner",onWheel:X,onMouseDown:_e,onMouseMove:Ve,onMouseUp:it,onMouseLeave:it,children:[f.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-2 rounded-xl shadow-lg",children:[f.jsx("button",{onClick:()=>P(k=>Math.min(k*1.2,2.5)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:E("zoomIn"),children:f.jsx(Ph,{className:"w-5 h-5"})}),f.jsx("button",{onClick:()=>P(k=>Math.max(k/1.2,.4)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:E("zoomOut"),children:f.jsx(Kh,{className:"w-5 h-5"})}),f.jsx("button",{onClick:De,className:"p-2 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-lg transition-colors",title:E("recenter"),children:f.jsx(Oh,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"absolute top-4 left-4 z-10 pointer-events-none bg-slate-950/60 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 flex items-center gap-2",children:[f.jsx(Ch,{className:"w-3.5 h-3.5 text-amber-400 animate-pulse"}),f.jsx("span",{children:E("panHint")})]}),f.jsx("svg",{className:"w-full h-full pointer-events-auto",style:{touchAction:"none"},children:f.jsxs("g",{transform:`translate(${L.current?L.current.clientWidth/2+V.x:V.x}, ${L.current?L.current.clientHeight/2+V.y:V.y}) scale(${U})`,children:[f.jsxs("defs",{children:[f.jsxs("radialGradient",{id:"p1Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),f.jsx("stop",{offset:"100%",stopColor:"#f1f5f9"})]}),f.jsxs("radialGradient",{id:"p2Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#334155"}),f.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),f.jsxs("radialGradient",{id:"validGrad",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.8"})]}),f.jsxs("filter",{id:"glowGold",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[f.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),f.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),bt.map(k=>{const Oe=ae(k.q,k.r),{x:T,y:q}=Yg(k.q,k.r,Ne),Y=o.get(Oe)||[],ie=Y.length>0,ee=ie?Y[Y.length-1]:null,p=Y.length,C=r&&Wt(r,k),_=h.some(St=>Wt(St,k)),G=s&&Wt(s,k),K=y.some(St=>Wt(St,k)),te=(B==null?void 0:B.to)&&Wt(B.to,k),ue=Vg(T,q,Ne-2);let qe="none",me="#334155",xt=1.5;return ie&&ee?ee.player===1?(qe="url(#p1Gradient)",me="#e2e8f0"):(qe="url(#p2Gradient)",me="#475569"):(_||K)&&(qe="rgba(16, 185, 129, 0.15)",me="#10b981",xt=2.5),C?(me="#f59e0b",xt=4):G?(me="#ec4899",xt=3.5):te&&(me="#3b82f6",xt=3),f.jsxs("g",{className:"transition-all duration-200 cursor-pointer group",onClick:St=>{St.stopPropagation(),!m&&(K&&H||_&&H?H(k):ie&&(s&&D&&Wt(s,k)?D(k):A(k)))},children:[f.jsx("polygon",{points:ue,fill:qe,stroke:me,strokeWidth:xt,className:`${_||K?"animate-pulse hover:fill-emerald-500/30":""} ${C?"filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]":""}`}),(_||K)&&f.jsx("circle",{cx:T,cy:q,r:14,fill:"#10b981",className:"animate-ping opacity-75"}),ie&&ee&&f.jsxs(f.Fragment,{children:[f.jsx("text",{x:T,y:q+8,textAnchor:"middle",fontSize:26,className:"pointer-events-none select-none drop-shadow",children:oa[ee.type].emoji}),p>1&&f.jsxs("g",{transform:`translate(${T+14}, ${q-18})`,children:[f.jsx("circle",{r:10,fill:"#f59e0b",stroke:"#1e293b",strokeWidth:1.5}),f.jsx("text",{x:0,y:3.5,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:"#0f172a",children:p})]}),f.jsx("circle",{cx:T-16,cy:q-16,r:6,fill:ee.player===1?"#ffffff":"#0f172a",stroke:ee.player===1?"#cbd5e1":"#64748b",strokeWidth:1.5})]}),!ie&&(_||K)&&f.jsx("circle",{cx:T,cy:q,r:7,fill:"#10b981"}),f.jsxs("text",{x:T,y:q+(ie?28:4),textAnchor:"middle",fontSize:8,fill:"#64748b",className:"opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:[k.q,",",k.r]})]},Oe)})]})})]})},ws=({player:o,reserve:r,isActive:h,selectedBugType:s,onSelectBugType:y,turnCount:A,queenPlaced:H})=>{const{t:D}=bl(),z=new Map;for(const B of r){const E=z.get(B.type)||[];E.push(B),z.set(B.type,E)}const m=A===4&&!H;return f.jsxs("div",{className:`p-4 rounded-2xl border transition-all duration-300 ${h?o===1?"bg-slate-800/90 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]":"bg-slate-900/90 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]":"bg-slate-900/50 border-slate-800/80 opacity-70"}`,children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full border ${o===1?"bg-white border-slate-300":"bg-slate-950 border-slate-600"}`}),f.jsx("h3",{className:"font-bold text-sm text-slate-100",children:D("playerLabel",{n:o,color:D(o===1?"white":"black")})})]}),f.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:D("reserveCount",{n:r.length})})]}),m&&h&&f.jsxs("div",{className:"mb-3 p-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-300 text-xs flex items-center gap-1.5 animate-bounce",children:[f.jsx(dm,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:D("turn4Warning")})]}),f.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-4 gap-2",children:Array.from(z.entries()).map(([B,E])=>{const L=oa[B],U=E.length,P=s===B,V=!h||U===0||m&&B!=="QUEEN";return f.jsxs("button",{onClick:()=>!V&&y(B),disabled:V,title:`${L.name}: ${L.description}`,className:`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${P?"bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-md":V?"bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-40 cursor-not-allowed":"bg-slate-800/60 border-slate-700/80 hover:bg-slate-700/80 text-slate-200 hover:border-slate-500 cursor-pointer"}`,children:[f.jsx("span",{className:"text-2xl mb-1 select-none",children:L.emoji}),f.jsx("span",{className:"text-[10px] font-semibold truncate max-w-full",children:L.name.split(" ")[0]}),f.jsxs("span",{className:`absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold border ${P?"bg-amber-500 text-slate-950 border-amber-300":"bg-slate-900 text-slate-300 border-slate-700"}`,children:["x",U]})]},B)})})]})},ly=({logs:o})=>{const{t:r}=bl(),[h,s]=I.useState(!1);return f.jsxs("div",{className:"bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all",children:[f.jsxs("button",{onClick:()=>s(!h),className:"w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Eh,{className:"w-4 h-4 text-amber-400"}),f.jsx("span",{children:r("moveHistory",{n:o.length})})]}),h?f.jsx(gh,{className:"w-4 h-4"}):f.jsx(yh,{className:"w-4 h-4"})]}),h&&f.jsx("div",{className:"max-h-48 overflow-y-auto p-3 divide-y divide-slate-800/60 text-xs text-slate-400",children:o.length===0?f.jsx("p",{className:"text-center italic py-2 text-slate-500",children:r("noMoves")}):[...o].reverse().map((y,A)=>f.jsxs("div",{className:"py-1.5 flex items-start justify-between gap-2",children:[f.jsxs("span",{className:"font-mono text-[10px] text-slate-500",children:["T",y.turnNumber," P",y.player]}),f.jsx("span",{className:"text-slate-200 font-medium flex-1 text-right",children:y.description})]},A))})]})},ay=({isOpen:o,onClose:r})=>{const{t:h}=bl();return o?f.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsx("h2",{className:"text-xl font-black text-slate-100",children:h("rulesTitle")}),f.jsx("button",{onClick:r,className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",title:h("close"),children:f.jsx(pm,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"px-6 py-5 overflow-y-auto space-y-4",children:[f.jsx("div",{children:f.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[f.jsx("span",{className:"font-bold text-amber-400",children:h("goalTitle")})," ",h("goalDesc")]})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("coreRulesTitle")}),f.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:["• ",h("coreRule1")]}),f.jsxs("li",{children:["• ",h("coreRule2")]}),f.jsxs("li",{children:["• ",h("coreRule3")]}),f.jsxs("li",{children:["• ",h("coreRule4")]})]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("insectTitle")}),f.jsxs("ul",{className:"space-y-2 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐝"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Queen Bee"})," — ",h("insectQueen")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🕷️"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Spider"})," — ",h("insectSpider")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪲"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Beetle"})," — ",h("insectBeetle")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦗"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Grasshopper"})," — ",h("insectGrasshopper")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐜"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Soldier Ant"})," — ",h("insectAnt")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦟"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Mosquito"})," — ",h("insectMosquito")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐞"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Ladybug"})," — ",h("insectLadybug")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪳"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Pillbug"})," — ",h("insectPillbug")]})]})]})]})]})}):null},ny=({isOpen:o,onStartGame:r,onClose:h,canCancel:s=!1})=>{const{t:y}=bl(),[A,H]=I.useState("AI"),[D,z]=I.useState("MEDIUM"),[m,B]=I.useState({mosquito:!0,ladybug:!0,pillbug:!0}),[E,L]=I.useState(!1);return o?f.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:[f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-1 flex items-center gap-2",children:f.jsxs("span",{children:["🐝 ",y("appTitle")," ",y("appSubtitle")]})}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:y("setupSubtitle")}),f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:y("gameModeLabel")}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("button",{onClick:()=>H("PASS_AND_PLAY"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="PASS_AND_PLAY"?"bg-amber-500/15 border-amber-400 text-amber-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(Yh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:y("passPlayBtn")})]}),f.jsxs("button",{onClick:()=>H("AI"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="AI"?"bg-blue-500/15 border-blue-400 text-blue-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(fh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:y("vsAiBtn")})]})]})]}),A==="AI"&&f.jsxs("div",{className:"mb-6 animate-fade-in",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:y("aiDifficultyLabel")}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EASY","MEDIUM","HARD"].map(U=>f.jsx("button",{onClick:()=>z(U),className:`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${D===U?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:y(U==="EASY"?"easyBtn":U==="MEDIUM"?"mediumBtn":"hardBtn")},U))})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5",children:[f.jsx(Gh,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:y("expansionsLabel")})]}),f.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800",children:[f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🦟"})," ",y("mosquitoLabel")]}),f.jsx("input",{type:"checkbox",checked:m.mosquito,onChange:U=>B({...m,mosquito:U.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🐞"})," ",y("ladybugLabel")]}),f.jsx("input",{type:"checkbox",checked:m.ladybug,onChange:U=>B({...m,ladybug:U.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"💊"})," ",y("pillbugLabel")]}),f.jsx("input",{type:"checkbox",checked:m.pillbug,onChange:U=>B({...m,pillbug:U.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[s&&h&&f.jsx("button",{onClick:h,className:"flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:y("cancel")}),f.jsxs("button",{onClick:()=>r({mode:A,aiDifficulty:D,expansions:m}),className:"flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(jh,{className:"w-4 h-4 fill-slate-950"}),f.jsx("span",{children:y("startGame")})]})]}),f.jsx("div",{className:"mt-4 flex justify-center",children:f.jsxs("button",{onClick:()=>L(!0),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800/60",children:[f.jsx(oh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:y("learnToPlay")})]})})]}),f.jsx(ay,{isOpen:E,onClose:()=>L(!1)})]}):null},iy=({isOpen:o,winner:r,onRestart:h,onNewGameSetup:s})=>{const{t:y}=bl();return o?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4 text-amber-400",children:f.jsx(Qh,{className:"w-8 h-8"})}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-2",children:y(r==="DRAW"?"drawTitle":r===1?"p1WinTitle":"p2WinTitle")}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:y(r==="DRAW"?"drawDesc":"winDesc")}),f.jsxs("div",{className:"flex flex-col gap-2",children:[f.jsxs("button",{onClick:h,className:"w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Dh,{className:"w-4 h-4"}),f.jsx("span",{children:y("playAgain")})]}),f.jsx("button",{onClick:s,className:"w-full py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:y("matchOptions")})]})]})}):null},Ys=`package com.bugz.game

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.math.*

// ============================================================================
// 0. COLOR SCHEMES
// ============================================================================

private val DarkColors = darkColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFF0F172A),
    onBackground = Color(0xFFE2E8F0),
    surface = Color(0xFF1E293B),
    onSurface = Color(0xFFE2E8F0),
    surfaceVariant = Color(0xFF334155),
    onSurfaceVariant = Color(0xFF94A3B8),
    outline = Color(0xFF64748B)
)

private val LightColors = lightColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFFF8FAFC),
    onBackground = Color(0xFF0F172A),
    surface = Color(0xFFFFFFFF),
    onSurface = Color(0xFF0F172A),
    surfaceVariant = Color(0xFFE2E8F0),
    onSurfaceVariant = Color(0xFF475569),
    outline = Color(0xFF94A3B8)
)

// ============================================================================
// 1. DATA MODELS & DEFINITIONS
// ============================================================================

enum class Player { ONE, TWO }

enum class BugType(
    val title: String,
    val emoji: String,
    val defaultCount: Int,
    val isExpansion: Boolean = false
) {
    QUEEN("Queen Bee", "🐝", 1),
    SPIDER("Spider", "🕷️", 2),
    BEETLE("Beetle", "🪲", 2),
    GRASSHOPPER("Grasshopper", "🦗", 3),
    SOLDIER_ANT("Soldier Ant", "🐜", 3),
    MOSQUITO("Mosquito", "🦟", 1, true),
    LADYBUG("Ladybug", "🐞", 1, true),
    PILLBUG("Pillbug", "🪳", 1, true)
}

data class Piece(val id: String, val type: BugType, val player: Player)

data class AxialHex(val q: Int, val r: Int) {
    fun key() = "$q,$r"
    fun getNeighbors(): List<AxialHex> = listOf(
        AxialHex(q + 1, r), AxialHex(q + 1, r - 1), AxialHex(q, r - 1),
        AxialHex(q - 1, r), AxialHex(q - 1, r + 1), AxialHex(q, r + 1)
    )
}

enum class GameMode { PASS_AND_PLAY, AI }
enum class AIDifficulty { EASY, MEDIUM, HARD }

data class ExpansionsConfig(
    val mosquito: Boolean = true,
    val ladybug: Boolean = true,
    val pillbug: Boolean = true
)

data class GameSettings(
    val mode: GameMode = GameMode.AI,
    val aiDifficulty: AIDifficulty = AIDifficulty.MEDIUM,
    val expansions: ExpansionsConfig = ExpansionsConfig(),
    val humanColor: Player = Player.ONE
)

data class MoveLogEntry(val turn: Int, val player: Player, val text: String)

data class MoveAction(
    val type: ActionType,
    val pieceId: String,
    val bugType: BugType,
    val player: Player,
    val fromHex: AxialHex? = null,
    val toHex: AxialHex,
    val pillbugTargetHex: AxialHex? = null
) {
    enum class ActionType { PLACE, MOVE, PILLBUG_SPECIAL }
}

data class PillbugTargetOption(
    val targetHex: AxialHex,
    val piece: Piece,
    val destinationHexes: List<AxialHex>
)

data class GameStatus(
    val isGameOver: Boolean,
    val winner: Player?,
    val isDraw: Boolean,
    val p1QueenSurroundedCount: Int,
    val p2QueenSurroundedCount: Int
)

// ============================================================================
// 2. CORE GAME ENGINE & BUGZ RULES
// ============================================================================

fun parseKey(key: String): AxialHex {
    val parts = key.split(",").map { it.toInt() }
    return AxialHex(parts[0], parts[1])
}

fun cloneBoard(board: Map<String, List<Piece>>): MutableMap<String, MutableList<Piece>> {
    return board.mapValues { it.value.toMutableList() }.toMutableMap()
}

fun getTopPiece(board: Map<String, List<Piece>>, hex: AxialHex): Piece? {
    val stack = board[hex.key()]
    return if (stack.isNullOrEmpty()) null else stack.last()
}

fun getStackHeight(board: Map<String, List<Piece>>, hex: AxialHex): Int {
    return board[hex.key()]?.size ?: 0
}

fun isOccupied(board: Map<String, List<Piece>>, hex: AxialHex): Boolean {
    return getStackHeight(board, hex) > 0
}

fun getAllOccupiedHexes(board: Map<String, List<Piece>>): List<AxialHex> {
    return board.entries.filter { it.value.isNotEmpty() }.map { parseKey(it.key) }
}

fun isQueenPlaced(board: Map<String, List<Piece>>, player: Player): Boolean {
    return board.values.flatten().any { it.player == player && it.type == BugType.QUEEN }
}

fun getQueenHex(board: Map<String, List<Piece>>, player: Player): AxialHex? {
    for ((key, stack) in board) {
        for (p in stack) {
            if (p.player == player && p.type == BugType.QUEEN) {
                return parseKey(key)
            }
        }
    }
    return null
}

fun isSwarmConnected(board: Map<String, List<Piece>>): Boolean {
    val occupied = getAllOccupiedHexes(board)
    if (occupied.size <= 1) return true

    val visited = mutableSetOf<String>()
    val queue = mutableListOf(occupied.first())
    visited.add(occupied.first().key())

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (neighbor in current.getNeighbors()) {
            val nKey = neighbor.key()
            if (isOccupied(board, neighbor) && !visited.contains(nKey)) {
                visited.add(nKey)
                queue.add(neighbor)
            }
        }
    }
    return visited.size == occupied.size
}

fun canRemovePieceWithoutBreakingSwarm(board: Map<String, List<Piece>>, fromHex: AxialHex): Boolean {
    val stack = board[fromHex.key()] ?: return false
    if (stack.size > 1) return true

    val copyBoard = cloneBoard(board)
    copyBoard.remove(fromHex.key())
    return isSwarmConnected(copyBoard)
}

fun getCommonNeighbors(a: AxialHex, b: AxialHex): List<AxialHex> {
    val aSet = a.getNeighbors().toSet()
    val bSet = b.getNeighbors().toSet()
    return aSet.intersect(bSet).toList()
}

fun canSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex,
    atHeight: Int = 0
): Boolean {
    val common = getCommonNeighbors(fromHex, toHex)
    if (common.size != 2) return false

    val h1 = getStackHeight(board, common[0])
    val h2 = getStackHeight(board, common[1])

    val maxAllowedHeight = maxOf(atHeight, getStackHeight(board, fromHex) - 1, getStackHeight(board, toHex))

    if (h1 > maxAllowedHeight && h2 > maxAllowedHeight) {
        return false
    }
    return true
}

fun isValidGroundSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex
): Boolean {
    if (isOccupied(board, toHex)) return false
    if (!canSlide(board, fromHex, toHex, 0)) return false

    val testBoard = cloneBoard(board)
    val stack = testBoard[fromHex.key()]
    if (stack != null) {
        if (stack.size == 1) testBoard.remove(fromHex.key())
        else stack.removeAt(stack.size - 1)
    }

    val touchesSwarm = toHex.getNeighbors().any { isOccupied(testBoard, it) }
    return touchesSwarm
}

fun getValidPlacements(
    board: Map<String, List<Piece>>,
    player: Player,
    turnCountP: Int
): List<AxialHex> {
    val occupied = getAllOccupiedHexes(board)

    if (occupied.isEmpty()) {
        return listOf(AxialHex(0, 0))
    }

    if (occupied.size == 1) {
        return occupied[0].getNeighbors()
    }

    val candidateKeys = mutableSetOf<String>()
    val validPlacements = mutableListOf<AxialHex>()

    for (hex in occupied) {
        for (n in hex.getNeighbors()) {
            if (!isOccupied(board, n)) {
                candidateKeys.add(n.key())
            }
        }
    }

    for (key in candidateKeys) {
        val candidate = parseKey(key)
        val neighbors = candidate.getNeighbors()

        var touchesFriendly = false
        var touchesEnemy = false

        for (n in neighbors) {
            val topPiece = getTopPiece(board, n)
            if (topPiece != null) {
                if (topPiece.player == player) touchesFriendly = true
                else touchesEnemy = true
            }
        }

        if (touchesFriendly && !touchesEnemy) {
            validPlacements.add(candidate)
        }
    }

    return validPlacements
}

fun getEffectiveBugTypes(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    piece: Piece
): List<BugType> {
    if (piece.type != BugType.MOSQUITO) {
        return listOf(piece.type)
    }

    val stackHeight = getStackHeight(board, fromHex)
    if (stackHeight > 1) {
        return listOf(BugType.BEETLE)
    }

    val copiedTypes = mutableSetOf<BugType>()
    for (n in fromHex.getNeighbors()) {
        val adjTop = getTopPiece(board, n)
        if (adjTop != null && adjTop.type != BugType.MOSQUITO) {
            copiedTypes.add(adjTop.type)
        }
    }

    return copiedTypes.toList()
}

fun getQueenMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return fromHex.getNeighbors().filter { isValidGroundSlide(board, fromHex, it) }
}

fun getSpiderMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableListOf<AxialHex>()

    fun spiderDFS(current: AxialHex, stepCount: Int, visitedKeys: Set<String>) {
        if (stepCount == 3) {
            results.add(current)
            return
        }
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visitedKeys.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    val nextVisited = visitedKeys.toMutableSet()
                    nextVisited.add(nextKey)
                    spiderDFS(next, stepCount + 1, nextVisited)
                }
            }
        }
    }

    val startVisited = setOf(fromHex.key())
    spiderDFS(fromHex, 0, startVisited)

    val uniqueKeys = mutableSetOf<String>()
    val uniqueResults = mutableListOf<AxialHex>()
    for (hex in results) {
        if (uniqueKeys.add(hex.key())) {
            uniqueResults.add(hex)
        }
    }
    return uniqueResults
}

fun getBeetleMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()
    val currentHeight = getStackHeight(board, fromHex)

    for (to in fromHex.getNeighbors()) {
        val targetHeight = getStackHeight(board, to)

        if (targetHeight >= 1 || currentHeight > 1) {
            val clearanceHeight = maxOf(currentHeight - 1, targetHeight)
            if (canSlide(board, fromHex, to, clearanceHeight)) {
                moves.add(to)
            }
        } else {
            if (isValidGroundSlide(board, fromHex, to)) {
                moves.add(to)
            }
        }
    }
    return moves
}

fun getGrasshopperMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()

    for (dirIndex in 0 until 6) {
        var current = fromHex.getNeighbors()[dirIndex]
        var countOver = 0

        while (isOccupied(board, current)) {
            countOver++
            current = current.getNeighbors()[dirIndex]
        }

        if (countOver > 0) {
            moves.add(current)
        }
    }
    return moves
}

fun getSoldierAntMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val visited = mutableSetOf(fromHex.key())
    val queue = mutableListOf(fromHex)

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visited.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    visited.add(nextKey)
                    queue.add(next)
                }
            }
        }
    }

    visited.remove(fromHex.key())

    return visited.map { parseKey(it) }
}

fun getLadybugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableSetOf<String>()

    val step1Candidates = fromHex.getNeighbors().filter { n ->
        isOccupied(board, n) && canSlide(board, fromHex, n, 0)
    }

    for (s1 in step1Candidates) {
        val step2Candidates = s1.getNeighbors().filter { s2 ->
            s2.key() != fromHex.key() && isOccupied(board, s2) && canSlide(board, s1, s2, 1)
        }

        for (s2 in step2Candidates) {
            val step3Candidates = s2.getNeighbors().filter { s3 ->
                s3.key() != s1.key() && !isOccupied(board, s3) && canSlide(board, s2, s3, 0)
            }

            for (s3 in step3Candidates) {
                results.add(s3.key())
            }
        }
    }

    return results.map { parseKey(it) }
}

fun getPillbugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return getQueenMoves(board, fromHex)
}

fun getMovesForBugType(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    bugType: BugType
): List<AxialHex> {
    return when (bugType) {
        BugType.QUEEN -> getQueenMoves(board, fromHex)
        BugType.SPIDER -> getSpiderMoves(board, fromHex)
        BugType.BEETLE -> getBeetleMoves(board, fromHex)
        BugType.GRASSHOPPER -> getGrasshopperMoves(board, fromHex)
        BugType.SOLDIER_ANT -> getSoldierAntMoves(board, fromHex)
        BugType.LADYBUG -> getLadybugMoves(board, fromHex)
        BugType.PILLBUG -> getPillbugMoves(board, fromHex)
        BugType.MOSQUITO -> emptyList()
    }
}

fun getValidMovesForPiece(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    player: Player,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): List<AxialHex> {
    if (!isQueenPlaced(board, player)) {
        return emptyList()
    }

    val stack = board[fromHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()
    val topPiece = stack.last()
    if (topPiece.player != player) return emptyList()

    // A piece moved by a Pillbug special action is stunned and may not move
    // on the opponent's immediately following turn.
    if (topPiece.id == lastMovedPieceId) return emptyList()

    if (!canRemovePieceWithoutBreakingSwarm(board, fromHex)) {
        return emptyList()
    }

    val effectiveBugTypes = getEffectiveBugTypes(board, fromHex, topPiece)
    val validDestinations = mutableSetOf<String>()

    for (bugType in effectiveBugTypes) {
        val dests = getMovesForBugType(board, fromHex, bugType)
        dests.forEach { validDestinations.add(it.key()) }
    }

    return validDestinations.map { parseKey(it) }
}

fun getPillbugSpecialTargets(
    board: Map<String, List<Piece>>,
    pillbugHex: AxialHex,
    player: Player,
    lastMovedPieceId: String?
): List<PillbugTargetOption> {
    if (!isQueenPlaced(board, player)) return emptyList()

    val stack = board[pillbugHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()

    // Official rule: the Pillbug cannot move a piece if the Pillbug itself was
    // moved in the most recent turn.
    val pillbugTop = stack.last()
    if (pillbugTop.id == lastMovedPieceId) return emptyList()

    val emptyAdjacentHexes = pillbugHex.getNeighbors().filter { !isOccupied(board, it) }
    if (emptyAdjacentHexes.isEmpty()) return emptyList()

    val options = mutableListOf<PillbugTargetOption>()

    for (adjHex in pillbugHex.getNeighbors()) {
        if (isOccupied(board, adjHex)) {
            val targetStack = board[adjHex.key()]!!
            if (targetStack.size == 1) {
                val targetPiece = targetStack[0]

                if (targetPiece.id == lastMovedPieceId) continue
                if (!canRemovePieceWithoutBreakingSwarm(board, adjHex)) continue

                // Official "Beetle gate" rule: the piece is lifted over the
                // Pillbug to reach its destination; a gate hex (a common
                // neighbor of the origin and destination other than the
                // Pillbug's own hex) with a stack height of 2+ blocks passage.
                val reachableDestinations = emptyAdjacentHexes.filter { destHex ->
                    val gateHexes = getCommonNeighbors(adjHex, destHex).filter { it != pillbugHex }
                    !gateHexes.any { getStackHeight(board, it) >= 2 }
                }

                if (reachableDestinations.isNotEmpty()) {
                    options.add(
                        PillbugTargetOption(
                            targetHex = adjHex,
                            piece = targetPiece,
                            destinationHexes = reachableDestinations
                        )
                    )
                }
            }
        }
    }

    return options
}

fun getPlayerAllLegalActions(
    board: Map<String, List<Piece>>,
    player: Player,
    reserve: List<Piece>,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): List<MoveAction> {
    val actions = mutableListOf<MoveAction>()
    val queenPlaced = isQueenPlaced(board, player)

    val validPlacements = getValidPlacements(board, player, turnCountP)

    if (turnCountP >= 4 && !queenPlaced) {
        val queenPiece = reserve.firstOrNull { it.type == BugType.QUEEN }
        if (queenPiece != null) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = queenPiece.id,
                        bugType = BugType.QUEEN,
                        player = player,
                        toHex = hex
                    )
                )
            }
        }
        return actions
    }

    if (validPlacements.isNotEmpty() && reserve.isNotEmpty()) {
        val availableBugTypes = mutableSetOf<BugType>()
        val typeToPiece = mutableMapOf<BugType, Piece>()

        for (p in reserve) {
            if (availableBugTypes.add(p.type)) {
                typeToPiece[p.type] = p
            }
        }

        for ((bugType, piece) in typeToPiece) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = piece.id,
                        bugType = bugType,
                        player = player,
                        toHex = hex
                    )
                )
            }
        }
    }

    if (queenPlaced) {
        val occupied = getAllOccupiedHexes(board)

        for (hex in occupied) {
            val topPiece = getTopPiece(board, hex)
            if (topPiece != null && topPiece.player == player) {
                val moves = getValidMovesForPiece(
                    board, hex, player, turnCountP, lastMovedPieceId, expansions
                )

                for (dest in moves) {
                    actions.add(
                        MoveAction(
                            type = MoveAction.ActionType.MOVE,
                            pieceId = topPiece.id,
                            bugType = topPiece.type,
                            player = player,
                            fromHex = hex,
                            toHex = dest
                        )
                    )
                }

                val effectiveTypes = getEffectiveBugTypes(board, hex, topPiece)
                if (effectiveTypes.contains(BugType.PILLBUG)) {
                    val pbTargets = getPillbugSpecialTargets(board, hex, player, lastMovedPieceId)
                    for (opt in pbTargets) {
                        for (destHex in opt.destinationHexes) {
                            actions.add(
                                MoveAction(
                                    type = MoveAction.ActionType.PILLBUG_SPECIAL,
                                    pieceId = topPiece.id,
                                    bugType = topPiece.type,
                                    player = player,
                                    fromHex = hex,
                                    pillbugTargetHex = opt.targetHex,
                                    toHex = destHex
                                )
                            )
                        }
                    }
                }
            }
        }
    }

    return actions
}

fun checkGameStatus(board: Map<String, List<Piece>>): GameStatus {
    val p1QueenHex = getQueenHex(board, Player.ONE)
    val p2QueenHex = getQueenHex(board, Player.TWO)

    var p1Surrounded = 0
    var p2Surrounded = 0

    if (p1QueenHex != null) {
        p1Surrounded = p1QueenHex.getNeighbors().count { isOccupied(board, it) }
    }
    if (p2QueenHex != null) {
        p2Surrounded = p2QueenHex.getNeighbors().count { isOccupied(board, it) }
    }

    val p1IsSurrounded = p1Surrounded == 6
    val p2IsSurrounded = p2Surrounded == 6

    return when {
        p1IsSurrounded && p2IsSurrounded -> GameStatus(true, null, true, p1Surrounded, p2Surrounded)
        p1IsSurrounded -> GameStatus(true, Player.TWO, false, p1Surrounded, p2Surrounded)
        p2IsSurrounded -> GameStatus(true, Player.ONE, false, p1Surrounded, p2Surrounded)
        else -> GameStatus(false, null, false, p1Surrounded, p2Surrounded)
    }
}

class BugzEngine {
    val board = mutableMapOf<String, MutableList<Piece>>()
    val p1Reserve = mutableListOf<Piece>()
    val p2Reserve = mutableListOf<Piece>()
    var currentPlayer = Player.ONE
    var turnCountP1 = 1
    var turnCountP2 = 1
    var lastMovedPieceId: String? = null
    val history = mutableListOf<MoveLogEntry>()
    var expansions = ExpansionsConfig()

    data class EngineSnapshot(
        val board: Map<String, List<Piece>>,
        val p1Reserve: List<Piece>,
        val p2Reserve: List<Piece>,
        val currentPlayer: Player,
        val turnCountP1: Int,
        val turnCountP2: Int,
        val lastMovedPieceId: String?,
        val history: List<MoveLogEntry>
    )

    fun snapshot(): EngineSnapshot {
        return EngineSnapshot(
            board = board.mapValues { it.value.toList() }.toMap(),
            p1Reserve = p1Reserve.toList(),
            p2Reserve = p2Reserve.toList(),
            currentPlayer = currentPlayer,
            turnCountP1 = turnCountP1,
            turnCountP2 = turnCountP2,
            lastMovedPieceId = lastMovedPieceId,
            history = history.toList()
        )
    }

    fun restore(snap: EngineSnapshot) {
        board.clear()
        board.putAll(snap.board.mapValues { it.value.toMutableList() })
        p1Reserve.clear()
        p1Reserve.addAll(snap.p1Reserve)
        p2Reserve.clear()
        p2Reserve.addAll(snap.p2Reserve)
        currentPlayer = snap.currentPlayer
        turnCountP1 = snap.turnCountP1
        turnCountP2 = snap.turnCountP2
        lastMovedPieceId = snap.lastMovedPieceId
        history.clear()
        history.addAll(snap.history)
    }

    fun reserveFor(p: Player): List<Piece> = if (p == Player.ONE) p1Reserve else p2Reserve

    fun turnCountFor(p: Player): Int = if (p == Player.ONE) turnCountP1 else turnCountP2

    fun initNewGame(expansions: ExpansionsConfig) {
        board.clear()
        p1Reserve.clear()
        p2Reserve.clear()
        history.clear()
        currentPlayer = Player.ONE
        turnCountP1 = 1
        turnCountP2 = 1
        lastMovedPieceId = null
        this.expansions = expansions

        fun createReserve(player: Player): List<Piece> {
            val list = mutableListOf<Piece>()
            BugType.values().forEach { bug ->
                if (!bug.isExpansion ||
                    (bug == BugType.MOSQUITO && expansions.mosquito) ||
                    (bug == BugType.LADYBUG && expansions.ladybug) ||
                    (bug == BugType.PILLBUG && expansions.pillbug)
                ) {
                    repeat(bug.defaultCount) { idx ->
                        list.add(Piece("p\${if (player == Player.ONE) 1 else 2}_\${bug.name}_$idx", bug, player))
                    }
                }
            }
            return list
        }

        p1Reserve.addAll(createReserve(Player.ONE))
        p2Reserve.addAll(createReserve(Player.TWO))
    }

    fun isQueenPlaced(player: Player): Boolean {
        return isQueenPlaced(board, player)
    }

    fun placementsForCurrent(): List<AxialHex> {
        return getValidPlacements(board, currentPlayer, turnCountFor(currentPlayer))
    }

    fun movesFor(hex: AxialHex): List<AxialHex> {
        return getValidMovesForPiece(
            board, hex, currentPlayer, turnCountFor(currentPlayer), lastMovedPieceId, expansions
        )
    }

    fun pillbugTargets(hex: AxialHex): List<PillbugTargetOption> {
        return getPillbugSpecialTargets(board, hex, currentPlayer, lastMovedPieceId)
    }

    fun effectiveTypes(hex: AxialHex, piece: Piece): List<BugType> {
        return getEffectiveBugTypes(board, hex, piece)
    }

    fun legalActions(): List<MoveAction> {
        return getPlayerAllLegalActions(
            board, currentPlayer, reserveFor(currentPlayer), turnCountFor(currentPlayer), lastMovedPieceId, expansions
        )
    }

    fun checkGameStatus(): GameStatus {
        return checkGameStatus(board)
    }

    fun executeMove(action: MoveAction) {
        var logDesc = ""
        var actuallyMovedId: String? = null

        if (action.type == MoveAction.ActionType.PLACE) {
            if (action.player == Player.ONE) {
                p1Reserve.removeAll { it.id == action.pieceId }
            } else {
                p2Reserve.removeAll { it.id == action.pieceId }
            }

            val newPiece = Piece(action.pieceId, action.bugType, action.player)
            val key = action.toHex.key()
            val stack = board.getOrPut(key) { mutableListOf() }
            stack.add(newPiece)
            actuallyMovedId = newPiece.id

            logDesc = "Placed \${action.bugType.title} at (\${action.toHex.q}, \${action.toHex.r})"
        } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
            val fromStack = board[action.fromHex.key()] ?: return
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) board.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = "Moved \${action.bugType.title} from (\${action.fromHex.q}, \${action.fromHex.r}) to (\${action.toHex.q}, \${action.toHex.r})"
        } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
            val targetStack = board[action.pillbugTargetHex.key()] ?: return
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) board.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = "Pillbug moved \${movedPiece?.type?.title ?: "piece"} to (\${action.toHex.q}, \${action.toHex.r})"
        }

        // The piece that actually moved/placed is "stunned" on the opponent's next turn.
        lastMovedPieceId = actuallyMovedId ?: action.pieceId

        history.add(
            MoveLogEntry(
                turn = if (action.player == Player.ONE) turnCountP1 else turnCountP2,
                player = action.player,
                text = logDesc
            )
        )

        if (action.player == Player.ONE) {
            turnCountP1++
            currentPlayer = Player.TWO
        } else {
            turnCountP2++
            currentPlayer = Player.ONE
        }
    }

    fun switchTurn() {
        currentPlayer = if (currentPlayer == Player.ONE) Player.TWO else Player.ONE
    }
}

// ============================================================================
// 3. AI ENGINE (Easy / Medium / Hard)
// ============================================================================

fun computeAIMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    difficulty: AIDifficulty,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction? {
    val legalActions = getPlayerAllLegalActions(
        board, aiPlayer, aiReserve, turnCountAI, lastMovedPieceId, expansions
    )

    if (legalActions.isEmpty()) return null

    return when (difficulty) {
        AIDifficulty.EASY -> computeEasyMove(board, aiPlayer, legalActions, turnCountAI)
        AIDifficulty.MEDIUM -> computeMediumMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions
        )
        AIDifficulty.HARD -> computeHardMinimaxMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions
        )
    }
}

fun computeEasyMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    legalActions: List<MoveAction>,
    turnCountAI: Int
): MoveAction {
    // Play the queen when it is due (by the 4th turn) if the AI forgot to place it earlier.
    if (!isQueenPlaced(board, aiPlayer) && turnCountAI >= 3) {
        val queenActions = legalActions.filter { it.bugType == BugType.QUEEN }
        if (queenActions.isNotEmpty()) {
            return queenActions[Math.floor(Math.random() * queenActions.size).toInt()]
        }
    }

    return legalActions[Math.floor(Math.random() * legalActions.size).toInt()]
}

fun computeMediumMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction {
    var bestScore = -1e9
    var bestActions = mutableListOf<MoveAction>()

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board, action, aiPlayer, aiReserve, humanReserve
        )

        val score = evaluateBoard(
            nextBoard, aiPlayer, nextAIReserve, nextHumanReserve, turnCountAI, turnCountHuman, expansions
        )

        if (score > bestScore + 1e-9) {
            bestScore = score
            bestActions = mutableListOf(action)
        } else if (kotlin.math.abs(score - bestScore) <= 1e-9) {
            bestActions.add(action)
        }
    }

    return bestActions[Math.floor(Math.random() * bestActions.size).toInt()]
}

fun computeHardMinimaxMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction {
    val depth = 2
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    var alpha = -1e9
    var beta = 1e9
    var bestScore = -1e9
    var bestAction = legalActions[0]

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board, action, aiPlayer, aiReserve, humanReserve
        )

        val status = checkGameStatus(nextBoard)
        if (status.isGameOver && status.winner == aiPlayer) {
            return action
        }

        val value = minimax(
            nextBoard,
            depth - 1,
            alpha,
            beta,
            false,
            aiPlayer,
            humanPlayer,
            nextAIReserve,
            nextHumanReserve,
            turnCountAI + 1,
            turnCountHuman,
            actuallyMovedPieceId(board, action),
            expansions
        )

        if (value > bestScore) {
            bestScore = value
            bestAction = action
        }
        alpha = maxOf(alpha, bestScore)
    }

    return bestAction
}

fun minimax(
    board: Map<String, List<Piece>>,
    depth: Int,
    alpha: Double,
    beta: Double,
    isMaximizing: Boolean,
    aiPlayer: Player,
    humanPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): Double {
    var alpha = alpha
    var beta = beta

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    if (depth == 0) {
        return evaluateBoard(board, aiPlayer, aiReserve, humanReserve, turnAI, turnHuman, expansions)
    }

    val currentPlayer = if (isMaximizing) aiPlayer else humanPlayer
    val currentReserve = if (isMaximizing) aiReserve else humanReserve
    val oppReserve = if (isMaximizing) humanReserve else aiReserve
    val turnCount = if (isMaximizing) turnAI else turnHuman

    val legalActions = getPlayerAllLegalActions(
        board, currentPlayer, currentReserve, turnCount, lastMovedPieceId, expansions
    )

    if (legalActions.isEmpty()) {
        return minimax(
            board, depth - 1, alpha, beta, !isMaximizing,
            aiPlayer, humanPlayer, aiReserve, humanReserve,
            if (isMaximizing) turnAI + 1 else turnAI,
            if (isMaximizing) turnHuman else turnHuman + 1,
            lastMovedPieceId, expansions
        )
    }

    if (isMaximizing) {
        var maxEval = -1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board, action, aiPlayer, aiReserve, humanReserve
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, false,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI + 1, turnHuman, actuallyMovedPieceId(board, action), expansions
            )

            maxEval = maxOf(maxEval, evalValue)
            alpha = maxOf(alpha, evalValue)
            if (beta <= alpha) break
        }
        return maxEval
    } else {
        var minEval = 1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board, action, humanPlayer, aiReserve, humanReserve
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, true,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI, turnHuman + 1, actuallyMovedPieceId(board, action), expansions
            )

            minEval = minOf(minEval, evalValue)
            beta = minOf(beta, evalValue)
            if (beta <= alpha) break
        }
        return minEval
    }
}

fun evaluateBoard(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    expansions: ExpansionsConfig
): Double {
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    val aiQueenHex = getQueenHex(board, aiPlayer)
    val humanQueenHex = getQueenHex(board, humanPlayer)

    var score = 0.0

    // Attack: surround the human queen.
    if (humanQueenHex != null) {
        val neighbors = humanQueenHex.getNeighbors()
        val aiAdjacent = neighbors.count { getTopPiece(board, it)?.player == aiPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        score += aiAdjacent * 150
        score += (anyOccupied - aiAdjacent) * 40
        if (anyOccupied == 5) score += 300
    } else {
        // Slight pressure to get the human to place their queen, then it becomes targetable.
        score += if (turnHuman >= 3) 30 else 10
    }

    // Defense: protect the AI queen. Only ENEMY pieces adjacent are a threat;
    // the AI's own surrounding pieces are a defensive ring (mild bonus).
    if (aiQueenHex != null) {
        val neighbors = aiQueenHex.getNeighbors()
        val enemyAdjacent = neighbors.count { getTopPiece(board, it)?.player == humanPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        val ownAdjacent = anyOccupied - enemyAdjacent
        score -= enemyAdjacent * 210
        if (anyOccupied == 5) score -= 400
        score += ownAdjacent * 15
    } else {
        // Mild timing pressure so the AI places its queen around its 3rd turn.
        score -= if (turnAI >= 3) 60 else 15
    }

    val occupiedHexes = getAllOccupiedHexes(board)
    for (hex in occupiedHexes) {
        val stack = board[hex.key()]
        if (stack != null && stack.size > 1) {
            val topPiece = stack[stack.size - 1]
            val pinnedPiece = stack[stack.size - 2]

            if (topPiece.player == aiPlayer && pinnedPiece.player == humanPlayer) {
                score += 80
                if (pinnedPiece.type == BugType.QUEEN) score += 200
            } else if (topPiece.player == humanPlayer && pinnedPiece.player == aiPlayer) {
                score -= 90
                if (pinnedPiece.type == BugType.QUEEN) score -= 250
            }
        }
    }

    return score
}

fun actuallyMovedPieceId(board: Map<String, List<Piece>>, action: MoveAction): String {
    return when (action.type) {
        MoveAction.ActionType.PILLBUG_SPECIAL ->
            action.pillbugTargetHex?.let { getTopPiece(board, it)?.id } ?: action.pieceId
        else -> action.pieceId
    }
}

fun simulateAction(
    board: Map<String, List<Piece>>,
    action: MoveAction,
    actingPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>
): Triple<MutableMap<String, MutableList<Piece>>, List<Piece>, List<Piece>> {
    val nextBoard = cloneBoard(board)
    var nextAIReserve = aiReserve.filter { it.id != action.pieceId }
    var nextHumanReserve = humanReserve.filter { it.id != action.pieceId }

    if (action.type == MoveAction.ActionType.PLACE) {
        val newPiece = Piece(action.pieceId, action.bugType, actingPlayer)
        val key = action.toHex.key()
        val existingStack = nextBoard.getOrPut(key) { mutableListOf() }
        existingStack.add(newPiece)
    } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
        val fromStack = nextBoard[action.fromHex.key()]
        if (fromStack != null) {
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) nextBoard.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
        val targetStack = nextBoard[action.pillbugTargetHex.key()]
        if (targetStack != null) {
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) nextBoard.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    }

    return Triple(nextBoard, nextAIReserve, nextHumanReserve)
}

// ============================================================================
// 4. MAIN JETPACK COMPOSE UI APP
// ============================================================================

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BugzApp() {
    val engine = remember { BugzEngine() }

    var gameState by remember { mutableStateOf(0) }
    fun bump() { gameState++ }

    var settings by remember {
        mutableStateOf(GameSettings(GameMode.AI, AIDifficulty.MEDIUM, ExpansionsConfig(), Player.ONE))
    }
    var isSetupOpen by remember { mutableStateOf(true) }
    var gameOver by remember { mutableStateOf<Player?>(null) }
    var isDraw by remember { mutableStateOf(false) }

    var selectedHex by remember { mutableStateOf<AxialHex?>(null) }
    var selectedReserveBug by remember { mutableStateOf<BugType?>(null) }
    var validDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var pillbugTargetHex by remember { mutableStateOf<AxialHex?>(null) }
    var pillbugDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var lastMovedHex by remember { mutableStateOf<AxialHex?>(null) }
    var isAITurn by remember { mutableStateOf(false) }
    var toast by remember { mutableStateOf<String?>(null) }
    var undoStack by remember { mutableStateOf<List<BugzEngine.EngineSnapshot>>(emptyList()) }

    val aiPlayer: Player = if (settings.humanColor == Player.ONE) Player.TWO else Player.ONE

    fun clearSelection() {
        selectedHex = null
        selectedReserveBug = null
        validDestinations = emptyList()
        pillbugTargetHex = null
        pillbugDestinations = emptyList()
    }

    fun applyForcedPasses() {
        var guard = 0
        while (guard < 100) {
            if (gameOver != null) break
            val cur = engine.currentPlayer
            val actions = engine.legalActions()
            if (actions.isNotEmpty()) break
            if (engine.board.isEmpty() && engine.p1Reserve.isEmpty() && engine.p2Reserve.isEmpty()) break

            val turn = engine.turnCountFor(cur)
            engine.history.add(MoveLogEntry(turn, cur, "Player $cur forced to pass (no legal moves)."))
            engine.switchTurn()
            bump()
            guard++
        }
    }

    // AI move trigger: launched in a persistent scope so it is never cancelled by recomposition
    val scope = rememberCoroutineScope()
    var executeMoveImpl: ((MoveAction) -> Unit)? = null

    fun requestAIMove() {
        if (settings.mode != GameMode.AI) return
        if (gameOver != null || isSetupOpen) return
        if (engine.currentPlayer != aiPlayer) return
        if (isAITurn) return

        isAITurn = true
        scope.launch {
            delay(600)

            val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE
            val action = computeAIMove(
                engine.board,
                aiPlayer,
                engine.reserveFor(aiPlayer),
                engine.reserveFor(humanPlayer),
                engine.turnCountFor(aiPlayer),
                engine.turnCountFor(humanPlayer),
                settings.aiDifficulty,
                engine.lastMovedPieceId,
                settings.expansions
            )

            // Guard: game may have been restarted while the AI was thinking
            if (gameOver != null || engine.currentPlayer != aiPlayer || !isAITurn) {
                isAITurn = false
                bump()
                return@launch
            }

            if (action != null) {
                executeMoveImpl?.invoke(action)
            } else {
                undoStack = undoStack + engine.snapshot()
                val turn = engine.turnCountFor(engine.currentPlayer)
                engine.history.add(MoveLogEntry(turn, engine.currentPlayer, "AI (Player \${if (engine.currentPlayer == Player.ONE) 1 else 2}) forced to pass."))
                engine.switchTurn()
                toast = "AI has no valid moves. Turn passed."
                bump()
                applyForcedPasses()
                bump()
            }

            isAITurn = false
            bump()
            // If forced passes bounced the turn back to AI, keep playing
            requestAIMove()
        }
    }

    fun executeMove(action: MoveAction) {
        undoStack = undoStack + engine.snapshot()
        engine.executeMove(action)
        lastMovedHex = action.toHex
        clearSelection()

        val status = engine.checkGameStatus()
        if (status.isGameOver) {
            gameOver = status.winner
            isDraw = status.isDraw
            isAITurn = false
            bump()
            return
        }

        bump()
        applyForcedPasses()
        bump()
        requestAIMove()
    }

    executeMoveImpl = ::executeMove

    fun startNewGame(newSettings: GameSettings) {
        engine.initNewGame(newSettings.expansions)
        settings = newSettings
        gameOver = null
        isDraw = false
        clearSelection()
        lastMovedHex = null
        toast = null
        isAITurn = false
        undoStack = emptyList()
        isSetupOpen = false
        bump()
        requestAIMove()
    }

    fun handleUndo() {
        if (isAITurn || undoStack.isEmpty()) return

        // In AI mode, keep popping until it is the human player's turn again
        var restored = false
        while (undoStack.isNotEmpty()) {
            val snap = undoStack.last()
            undoStack = undoStack.dropLast(1)
            engine.restore(snap)
            restored = true
            if (settings.mode != GameMode.AI || engine.currentPlayer != aiPlayer) break
        }

        if (!restored) return

        clearSelection()
        lastMovedHex = null
        gameOver = null
        isDraw = false
        isAITurn = false
        toast = "Move undone."
        bump()
    }

    // Toast auto-dismiss
    LaunchedEffect(toast) {
        if (toast != null) {
            delay(2500)
            toast = null
        }
    }

    fun queenDue(): Boolean {
        return engine.turnCountFor(engine.currentPlayer) == 4 && !engine.isQueenPlaced(engine.currentPlayer)
    }

    fun handleReserveSelect(bug: BugType) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        if (queenDue() && bug != BugType.QUEEN) {
            toast = "Queen Bee must be placed this turn (4th move rule)."
            return
        }

        selectedHex = null
        pillbugTargetHex = null
        pillbugDestinations = emptyList()

        if (selectedReserveBug == bug) {
            selectedReserveBug = null
            validDestinations = emptyList()
        } else {
            selectedReserveBug = bug
            validDestinations = engine.placementsForCurrent()
        }
    }

    fun handleHexClick(hex: AxialHex) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        val isDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
        val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }

        // Placement
        if (selectedReserveBug != null && isDest) {
            if (queenDue() && selectedReserveBug != BugType.QUEEN) {
                toast = "Queen Bee must be placed this turn (4th move rule)."
                return
            }
            val reserve = engine.reserveFor(engine.currentPlayer)
            val piece = reserve.firstOrNull { it.type == selectedReserveBug } ?: return
            executeMove(
                MoveAction(
                    type = MoveAction.ActionType.PLACE,
                    pieceId = piece.id,
                    bugType = piece.type,
                    player = engine.currentPlayer,
                    toHex = hex
                )
            )
            return
        }

        // Move / Pillbug special
        if (selectedHex != null && (isDest || isPillbugDest)) {
            val topPiece = getTopPiece(engine.board, selectedHex!!) ?: return
            if (pillbugTargetHex != null && isPillbugDest) {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.PILLBUG_SPECIAL,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        pillbugTargetHex = pillbugTargetHex,
                        toHex = hex
                    )
                )
            } else {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.MOVE,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        toHex = hex
                    )
                )
            }
            return
        }

        // Select piece
        val stack = engine.board[hex.key()]
        val topPiece = stack?.lastOrNull()

        selectedReserveBug = null

        if (selectedHex != null && selectedHex!!.q == hex.q && selectedHex!!.r == hex.r) {
            clearSelection()
            return
        }

        if (topPiece != null && topPiece.player == engine.currentPlayer) {
            selectedHex = hex
            validDestinations = engine.movesFor(hex)

            val effectiveTypes = engine.effectiveTypes(hex, topPiece)
            if (effectiveTypes.contains(BugType.PILLBUG)) {
                val targets = engine.pillbugTargets(hex)
                if (targets.isNotEmpty()) {
                    pillbugTargetHex = targets[0].targetHex
                    pillbugDestinations = targets[0].destinationHexes
                } else {
                    pillbugTargetHex = null
                    pillbugDestinations = emptyList()
                }
            } else {
                pillbugTargetHex = null
                pillbugDestinations = emptyList()
            }
        } else {
            clearSelection()
        }
    }

    MaterialTheme(
        colorScheme = if (isSystemInDarkTheme()) DarkColors else LightColors
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    modifier = Modifier.height(74.dp),
                    title = {
                        Column(modifier = Modifier.padding(top = 14.dp)) {
                            Text("🐝 Bugz Strategy", fontWeight = FontWeight.Black)
                            Text(
                                text = when {
                                    gameOver != null -> "Game Over"
                                    isAITurn -> "AI Thinking..."
                                    settings.mode == GameMode.AI -> "VS AI (\${settings.aiDifficulty})"
                                    else -> "Pass & Play"
                                },
                                fontSize = 15.sp,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    },
                    actions = {
                        Text(
                            text = if (gameOver != null)
                                "Winner: \${if (gameOver == Player.ONE) "White" else if (gameOver == Player.TWO) "Black" else "Draw"}"
                            else
                                "Turn: P\${if (engine.currentPlayer == Player.ONE) 1 else 2} · T\${gameState}",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (engine.currentPlayer == Player.ONE)
                                MaterialTheme.colorScheme.primary
                            else
                                if (isSystemInDarkTheme()) Color(0xFF93C5FD) else Color(0xFF1D4ED8),
                            modifier = Modifier.align(Alignment.CenterVertically)
                        )
                        Spacer(Modifier.width(8.dp))
                        IconButton(
                            onClick = { handleUndo() },
                            enabled = undoStack.isNotEmpty() && !isAITurn
                        ) {
                            Text(
                                text = "\\u21B6",
                                fontSize = 24.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (undoStack.isNotEmpty() && !isAITurn)
                                    MaterialTheme.colorScheme.primary
                                else
                                    MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        IconButton(onClick = { isSetupOpen = true }) {
                            Icon(Icons.Default.Settings, contentDescription = "Settings")
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(
                        containerColor = MaterialTheme.colorScheme.background
                    )
                )
            }
        ) { paddingValues ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
                    .background(MaterialTheme.colorScheme.background)
            ) {
                Column(
                    modifier = Modifier.fillMaxSize()
                ) {
                    // Main Interactive Hexagon Canvas (fills space above reserve bar)
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .weight(1f)
                    ) {
                        HexCanvasBoard(
                            board = engine.board,
                            selectedHex = selectedHex,
                            validDestinations = validDestinations,
                            pillbugTargetHex = pillbugTargetHex,
                            pillbugDestinations = pillbugDestinations,
                            lastMovedHex = lastMovedHex,
                            onHexClick = { hex -> handleHexClick(hex) }
                        )

                        // Toast notification
                        toast?.let { msg ->
                            Surface(
                                color = Color(0xFFF59E0B),
                                shape = RoundedCornerShape(16.dp),
                                modifier = Modifier
                                    .align(Alignment.BottomCenter)
                                    .padding(12.dp)
                            ) {
                                Text(
                                    text = msg,
                                    color = Color.Black,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 13.sp,
                                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
                                )
                            }
                        }

                        // Move Log Overlay
                        MoveLogOverlay(
                            history = engine.history,
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(12.dp)
                        )
                    }

                    // Reserve Bar at Bottom
                    ReserveBar(
                        reserve = engine.reserveFor(engine.currentPlayer),
                        selectedBug = selectedReserveBug,
                        isEnabled = !isAITurn && gameOver == null &&
                            !(settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer),
                        queenDue = queenDue(),
                        onSelectBug = { bug -> handleReserveSelect(bug) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(12.dp)
                    )
                }

                // New Game / Setup Modal
                if (isSetupOpen) {
                    SetupModal(
                        currentSettings = settings,
                        onStart = { newSettings ->
                            startNewGame(newSettings)
                        },
                        onDismiss = {
                            if (gameOver != null || engine.board.isNotEmpty()) isSetupOpen = false
                        }
                    )
                }

                // Game Over Dialog
                if (gameOver != null) {
                    GameOverDialog(
                        winner = gameOver,
                        isDraw = isDraw,
                        onRematch = { startNewGame(settings) },
                        onNewSetup = {
                            gameOver = null
                            isDraw = false
                            isSetupOpen = true
                        }
                    )
                }
            }
        }
    }
}

private fun hexToPixel(hex: AxialHex, radius: Float): Offset {
    val x = radius * sqrt(3f) * (hex.q + hex.r / 2f)
    val y = radius * 1.5f * hex.r
    return Offset(x, y)
}

private fun pixelToHex(pos: Offset, center: Offset, radius: Float): AxialHex {
    val relX = pos.x - center.x
    val relY = pos.y - center.y

    val r = (2.0 / 3.0) * (relY / radius)
    var q = (relX / (radius * sqrt(3.0))) - r / 2.0

    val s = -q - r
    var rq = round(q).toInt()
    var rr = round(r).toInt()
    var rs = round(s).toInt()

    val dq = abs(rq - q)
    val dr = abs(rr - r)
    val ds = abs(rs - s)

    if (dq > dr && dq > ds) rq = -rr - rs
    else if (dr > ds) rr = -rq - rs

    return AxialHex(rq, rr)
}

@Composable
fun HexCanvasBoard(
    board: Map<String, List<Piece>>,
    selectedHex: AxialHex?,
    validDestinations: List<AxialHex>,
    pillbugTargetHex: AxialHex?,
    pillbugDestinations: List<AxialHex>,
    lastMovedHex: AxialHex?,
    onHexClick: (AxialHex) -> Unit
) {
    var scale by remember { mutableStateOf(1f) }
    var pan by remember { mutableStateOf(Offset.Zero) }
    var canvasSize by remember { mutableStateOf(Size.Zero) }
    val baseRadius = 42.dp
    val surfaceVariant = MaterialTheme.colorScheme.surfaceVariant
    val outline = MaterialTheme.colorScheme.outline

    // Collect all hexes to render
    val renderMap = mutableMapOf<String, AxialHex>()

    board.forEach { (key, stack) ->
        if (stack.isNotEmpty()) {
            val hex = parseKey(key)
            renderMap[key] = hex
            for (n in hex.getNeighbors()) {
                if (!renderMap.containsKey(n.key())) renderMap[n.key()] = n
            }
        }
    }

    // Empty board: render center + neighbors
    if (renderMap.isEmpty()) {
        val center = AxialHex(0, 0)
        renderMap[center.key()] = center
        for (n in center.getNeighbors()) renderMap[n.key()] = n
    }

    validDestinations.forEach { renderMap[it.key()] = it }
    pillbugDestinations.forEach { renderMap[it.key()] = it }
    selectedHex?.let { renderMap[it.key()] = it }
    pillbugTargetHex?.let { renderMap[it.key()] = it }

    val textMeasurer = rememberTextMeasurer()

    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .onSizeChanged { canvasSize = Size(it.width.toFloat(), it.height.toFloat()) }
            .pointerInput(Unit) {
                detectTransformGestures { _, gesturePan, gestureZoom, _ ->
                    scale = (scale * gestureZoom).coerceIn(0.4f, 2.5f)
                    pan += gesturePan
                }
            }
            .pointerInput(Unit) {
                detectTapGestures { tap ->
                    val center = Offset(canvasSize.width / 2f + pan.x, canvasSize.height / 2f + pan.y)
                    val hexRadius = baseRadius.toPx() * scale
                    val hex = pixelToHex(Offset(tap.x, tap.y), center, hexRadius)
                    onHexClick(hex)
                }
            }
    ) {
        val center = Offset(size.width / 2f + pan.x, size.height / 2f + pan.y)
        val hexRadius = baseRadius.toPx() * scale

        renderMap.values.forEach { hex ->
            val rel = hexToPixel(hex, hexRadius)
            val x = center.x + rel.x
            val y = center.y + rel.y

            val stack = board[hex.key()]
            val isOccupiedTile = stack != null && stack.isNotEmpty()
            val topPiece = stack?.lastOrNull()
            val stackHeight = stack?.size ?: 0

            val isSelected = selectedHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isValidDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
            val isPillbugTarget = pillbugTargetHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }
            val isLastMoved = lastMovedHex?.let { it.q == hex.q && it.r == hex.r } == true

            val path = Path().apply {
                for (i in 0..5) {
                    val angle = (60 * i - 30) * Math.PI / 180.0
                    val px = x + hexRadius * cos(angle).toFloat()
                    val py = y + hexRadius * sin(angle).toFloat()
                    if (i == 0) moveTo(px, py) else lineTo(px, py)
                }
                close()
            }

            val fillColor = when {
                isOccupiedTile && topPiece?.player == Player.ONE -> Color(0xFFF8FAFC)
                isOccupiedTile -> Color(0xFF1E293B)
                isValidDest || isPillbugDest -> Color(0x2E10B981)
                isPillbugTarget -> Color(0x2EEC4899)
                else -> surfaceVariant
            }
            val strokeColor = when {
                isSelected -> Color(0xFFF59E0B)
                isPillbugTarget -> Color(0xFFEC4899)
                isLastMoved -> Color(0xFF3B82F6)
                isValidDest || isPillbugDest -> Color(0xFF10B981)
                isOccupiedTile -> outline
                else -> outline
            }
            val strokeWidth = when {
                isSelected -> 4f
                isPillbugTarget -> 3.5f
                isLastMoved -> 3f
                isValidDest || isPillbugDest -> 2.5f
                else -> 1.5f
            }

            drawPath(path, color = fillColor)
            drawPath(path, color = strokeColor, style = Stroke(width = strokeWidth))

            if (isOccupiedTile && topPiece != null) {
                val emojiSizeSp = with(density) { (hexRadius * 1.05f).toSp() }
                val layout = textMeasurer.measure(
                    AnnotatedString(topPiece.type.emoji),
                    style = TextStyle(fontSize = emojiSizeSp)
                )
                drawText(
                    layout,
                    topLeft = Offset(x - layout.size.width / 2f, y - layout.size.height / 2f)
                )

                if (stackHeight > 1) {
                    val badge = textMeasurer.measure(
                        AnnotatedString(stackHeight.toString()),
                        style = TextStyle(fontSize = 12.sp, color = Color.Black, fontWeight = FontWeight.Bold)
                    )
                    val badgeCenter = Offset(x + hexRadius * 0.72f, y - hexRadius * 0.72f)
                    drawCircle(color = Color(0xFFF59E0B), radius = 12f, center = badgeCenter)
                    drawText(
                        badge,
                        topLeft = Offset(
                            badgeCenter.x - badge.size.width / 2f,
                            badgeCenter.y - badge.size.height / 2f
                        )
                    )
                }

                // Player indicator dot
                val dotColor = if (topPiece.player == Player.ONE) Color.White else Color.Black
                drawCircle(
                    color = dotColor,
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f)
                )
                drawCircle(
                    color = if (topPiece.player == Player.ONE) Color(0xFFCBD5E1) else Color(0xFF64748B),
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f),
                    style = Stroke(width = 1.5f)
                )
            } else if (isValidDest || isPillbugDest) {
                drawCircle(
                    color = Color(0xFF10B981),
                    radius = 9f,
                    center = Offset(x, y)
                )
            }
        }
    }
}

@Composable
fun ReserveBar(
    reserve: List<Piece>,
    selectedBug: BugType?,
    isEnabled: Boolean,
    queenDue: Boolean,
    onSelectBug: (BugType) -> Unit,
    modifier: Modifier = Modifier
) {
    val grouped = reserve.groupBy { it.type }
    val colors = MaterialTheme.colorScheme

    Surface(
        shape = RoundedCornerShape(24.dp),
        color = colors.surface,
        tonalElevation = 8.dp,
        modifier = modifier.fillMaxWidth()
    ) {
        LazyRow(
            contentPadding = PaddingValues(14.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            items(grouped.entries.toList()) { entry ->
                val bug = entry.key
                val count = entry.value.size
                val isSelected = selectedBug == bug
                val cardEnabled = isEnabled && !(queenDue && bug != BugType.QUEEN)

                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(18.dp))
                        .background(
                            when {
                                isSelected -> colors.primary
                                !cardEnabled -> colors.background
                                else -> colors.surfaceVariant
                            }
                        )
                        .border(
                            width = if (isSelected) 2.dp else 1.dp,
                            color = if (isSelected) colors.primary else colors.outline,
                            shape = RoundedCornerShape(18.dp)
                        )
                        .clickable(enabled = cardEnabled) { onSelectBug(bug) }
                        .sizeIn(minHeight = 96.dp, minWidth = 112.dp)
                        .padding(horizontal = 12.dp, vertical = 10.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(
                            text = bug.emoji,
                            fontSize = 46.sp,
                            color = if (isSelected) colors.onPrimary else colors.onSurface
                        )
                        Spacer(Modifier.height(4.dp))
                        Text(
                            text = bug.title,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (isSelected) colors.onPrimary else colors.onSurfaceVariant,
                            maxLines = 1
                        )
                    }

                    // Count badge
                    Box(
                        modifier = Modifier
                            .align(Alignment.TopEnd)
                            .padding(6.dp)
                            .size(28.dp)
                            .clip(CircleShape)
                            .background(if (isSelected) colors.onPrimary else colors.primary),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "$count",
                            fontSize = 14.sp,
                            fontWeight = FontWeight.Black,
                            color = if (isSelected) colors.primary else colors.onPrimary
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun MoveLogOverlay(history: List<MoveLogEntry>, modifier: Modifier = Modifier) {
    var expanded by remember { mutableStateOf(false) }

    val colors = MaterialTheme.colorScheme

    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Toggle tab pinned to the side
        Surface(
            shape = RoundedCornerShape(10.dp),
            color = colors.surface.copy(alpha = 0.9f),
            border = BorderStroke(1.dp, colors.outline),
            onClick = { expanded = !expanded }
        ) {
            Text(
                text = if (expanded) "❯" else "❮",
                fontSize = 18.sp,
                fontWeight = FontWeight.Black,
                color = colors.primary,
                modifier = Modifier
                    .padding(horizontal = 8.dp, vertical = 14.dp)
            )
        }

        if (expanded) {
            Spacer(Modifier.width(4.dp))
            Surface(
                shape = RoundedCornerShape(12.dp),
                color = colors.background.copy(alpha = 0.9f),
                border = BorderStroke(1.dp, colors.outline)
            ) {
                LazyColumn(contentPadding = PaddingValues(8.dp)) {
                    item {
                        Text(
                            "Move Log",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = colors.onSurfaceVariant
                        )
                    }
                    items(history.takeLast(8).reversed()) { entry ->
                        Text(
                            text = "\${entry.turn}. P\${if (entry.player == Player.ONE) 1 else 2}: \${entry.text}",
                            fontSize = 11.sp,
                            color = colors.onSurface,
                            modifier = Modifier.padding(vertical = 1.dp)
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun SetupModal(
    currentSettings: GameSettings,
    onStart: (GameSettings) -> Unit,
    onDismiss: () -> Unit
) {
    var mode by remember { mutableStateOf(currentSettings.mode) }
    var diff by remember { mutableStateOf(currentSettings.aiDifficulty) }
    var humanColor by remember { mutableStateOf(currentSettings.humanColor) }
    var mosquito by remember { mutableStateOf(currentSettings.expansions.mosquito) }
    var ladybug by remember { mutableStateOf(currentSettings.expansions.ladybug) }
    var pillbug by remember { mutableStateOf(currentSettings.expansions.pillbug) }
    var showRules by remember { mutableStateOf(false) }

    if (showRules) {
        RulesDialog(onClose = { showRules = false })
        return
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("🐝 New Bugz Game", fontWeight = FontWeight.Bold) },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text("Select Game Mode:", fontWeight = FontWeight.SemiBold)
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mode == GameMode.PASS_AND_PLAY,
                        onClick = { mode = GameMode.PASS_AND_PLAY },
                        label = { Text("Pass & Play") }
                    )
                    FilterChip(
                        selected = mode == GameMode.AI,
                        onClick = { mode = GameMode.AI },
                        label = { Text("VS AI Engine") }
                    )
                }

                if (mode == GameMode.AI) {
                    Text("AI Difficulty:", fontWeight = FontWeight.SemiBold)
                    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        AIDifficulty.values().forEach { d ->
                            FilterChip(
                                selected = diff == d,
                                onClick = { diff = d },
                                label = { Text(d.name) }
                            )
                        }
                    }

                    Text("You play as:", fontWeight = FontWeight.SemiBold)
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        FilterChip(
                            selected = humanColor == Player.ONE,
                            onClick = { humanColor = Player.ONE },
                            label = { Text("White (P1)") },
                            modifier = Modifier.weight(1f)
                        )
                        FilterChip(
                            selected = humanColor == Player.TWO,
                            onClick = { humanColor = Player.TWO },
                            label = { Text("Black (P2)") },
                            modifier = Modifier.weight(1f)
                        )
                    }
                }

                Text("Expansions:", fontWeight = FontWeight.SemiBold)
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mosquito,
                        onClick = { mosquito = !mosquito },
                        label = { Text("🦟 Mosquito") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    FilterChip(
                        selected = ladybug,
                        onClick = { ladybug = !ladybug },
                        label = { Text("🐞 Ladybug") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    FilterChip(
                        selected = pillbug,
                        onClick = { pillbug = !pillbug },
                        label = { Text("💊 Pillbug") },
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    onStart(
                        GameSettings(
                            mode = mode,
                            aiDifficulty = diff,
                            expansions = ExpansionsConfig(mosquito, ladybug, pillbug),
                            humanColor = humanColor
                        )
                    )
                }
            ) {
                Text("Start Match")
            }
        },
        dismissButton = {
            TextButton(onClick = { showRules = true }) { Text("📖 Learn to Play") }
        }
    )
}

@Composable
fun RulesDialog(onClose: () -> Unit) {
    AlertDialog(
        onDismissRequest = onClose,
        title = { Text("How to Play Bugz", fontWeight = FontWeight.Bold) },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(rememberScrollState())
                    .padding(vertical = 4.dp),
                verticalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                Text(
                    "🎯 Goal: Surround the opponent's Queen Bee with pieces on all six sides. " +
                        "First to do so wins; both surrounded at once is a draw.",
                    fontSize = 13.sp
                )
                Text("📜 Core Rules", fontWeight = FontWeight.Bold)
                Text(
                    "• Play one piece per turn (placement) or move one of your pieces.\\n" +
                        "• Your Queen Bee must be introduced by your 4th turn.\\n" +
                        "• Your first piece is placed anywhere; later pieces must be placed adjacent " +
                        "to one of your pieces. Except for your second placement, pieces may not be " +
                        "placed touching an opponent's piece.\\n" +
                        "• The swarm must always stay connected. You may never move a piece that would " +
                        "split the swarm, and you may not move a piece into a gap unless it still fits " +
                        "the freedom-to-move rule (no squeezing between stacked pieces).",
                    fontSize = 13.sp
                )
                Text("🦗 Insect Movements", fontWeight = FontWeight.Bold)

                Text(
                    "🐝 Queen Bee — moves exactly 1 hex per turn.",
                    fontSize = 13.sp
                )
                Text(
                    "🕷️ Spider — crawls exactly 3 hexes along the outside edge, never retracing.",
                    fontSize = 13.sp
                )
                Text(
                    "🪲 Beetle — moves 1 hex and can climb on top of other pieces (including a " +
                        "Queen) to block them; a beetle on top moves like a beetle over the stack.",
                    fontSize = 13.sp
                )
                Text(
                    "🦗 Grasshopper — jumps in a straight line over at least one piece, landing on " +
                        "the first empty hex in that line.",
                    fontSize = 13.sp
                )
                Text(
                    "🐜 Soldier Ant — may slide any number of hexes along the outside of the swarm.",
                    fontSize = 13.sp
                )
                Text(
                    "🦟 Mosquito — copies the movement (or pillbug ability) of any piece it touches.",
                    fontSize = 13.sp
                )
                Text(
                    "🐞 Ladybug — moves exactly 2 hexes on top of the swarm, then 1 hex back down " +
                        "to the board (may land on empty board hexes).",
                    fontSize = 13.sp
                )
                Text(
                    "🪳 Pillbug — moves 1 space like the Queen Bee, or may pick up an adjacent " +
                        "unstacked piece (friend or foe) and place it in any empty space adjacent to it. " +
                        "The moved piece is stunned and cannot move on the opponent's next turn.",
                    fontSize = 13.sp
                )
            }
        },
        confirmButton = {
            TextButton(onClick = onClose) { Text("Got it") }
        }
    )
}

@Composable
fun GameOverDialog(
    winner: Player?,
    isDraw: Boolean,
    onRematch: () -> Unit,
    onNewSetup: () -> Unit
) {
    val title = if (isDraw) "Draw!" else "Player \${if (winner == Player.ONE) 1 else 2} Wins!"

    AlertDialog(
        onDismissRequest = {},
        title = { Text("🏆 $title", fontWeight = FontWeight.Bold) },
        text = {
            Text(
                if (isDraw) "Both Queens are surrounded. It's a draw!"
                else "The Queen of Player \${if (winner == Player.ONE) 2 else 1} is surrounded. Well played!"
            )
        },
        confirmButton = {
            Button(onClick = onRematch) { Text("Rematch") }
        },
        dismissButton = {
            TextButton(onClick = onNewSetup) { Text("New Game Setup") }
        }
    )
}

// ============================================================================
// 5. ACTIVITY ENTRY POINT
// ============================================================================

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BugzApp()
        }
    }
}
`,uy=({isOpen:o,onClose:r})=>{const{t:h}=bl(),[s,y]=I.useState(!1);if(!o)return null;const A=()=>{navigator.clipboard.writeText(Ys),y(!0),setTimeout(()=>y(!1),2e3)},H=()=>{const D=new Blob([Ys],{type:"text/plain;charset=utf-8"}),z=URL.createObjectURL(D),m=document.createElement("a");m.href=z,m.download="BugzApp.kt",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(z)};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl",children:f.jsx(mm,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-slate-100 text-sm flex items-center gap-2",children:[f.jsx("span",{children:h("codeTitle")}),f.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",children:h("codeBadge")})]}),f.jsx("p",{className:"text-xs text-slate-400",children:h("codeDesc")})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:A,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors",children:[s?f.jsx(mh,{className:"w-4 h-4 text-emerald-400"}):f.jsx(Sh,{className:"w-4 h-4"}),f.jsx("span",{children:h(s?"copied":"copyCode")})]}),f.jsxs("button",{onClick:H,className:"px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors",children:[f.jsx(Th,{className:"w-4 h-4"}),f.jsx("span",{children:h("downloadKt")})]}),f.jsx("button",{onClick:r,className:"p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors",children:f.jsx(pm,{className:"w-5 h-5"})})]})]}),f.jsx("div",{className:"flex-1 overflow-auto p-6 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300",children:f.jsx("pre",{className:"select-text whitespace-pre-wrap",children:Ys})})]})})};function cy(){return f.jsx($h,{children:f.jsx(sy,{})})}function sy(){const{t:o}=bl(),[r,h]=I.useState({mode:"AI",aiDifficulty:"MEDIUM",expansions:{mosquito:!0,ladybug:!0,pillbug:!0}}),[s,y]=I.useState(new Map),[A,H]=I.useState([]),[D,z]=I.useState([]),[m,B]=I.useState(1),[E,L]=I.useState(1),[U,P]=I.useState(1),[V,ne]=I.useState(null),[be,xe]=I.useState(null),[ye,Ce]=I.useState([]),[Ne,De]=I.useState([]),[X,_e]=I.useState(null),[Ve,it]=I.useState(null),[rt,pe]=I.useState([]),[bt,k]=I.useState(null),[Oe,T]=I.useState([]),[q,Y]=I.useState([]),[ie,ee]=I.useState(0),[p,C]=I.useState(!1),[_,G]=I.useState(null),K=I.useRef(0),[te,ue]=I.useState(!0),[qe,me]=I.useState(!1),[xt,St]=I.useState(!1),da=(R,ce)=>{const F=[];return Object.keys(oa).forEach(Te=>{const Ze=oa[Te];if(!Ze.isExpansion||Te==="MOSQUITO"&&ce.mosquito||Te==="LADYBUG"&&ce.ladybug||Te==="PILLBUG"&&ce.pillbug)for(let ct=0;ct<Ze.count;ct++)F.push({id:`p${R}_${Te}_${ct}`,type:Te,player:R})}),F},$a=I.useCallback(R=>{h(R),y(new Map),H(da(1,R.expansions)),z(da(2,R.expansions)),B(1),L(1),P(1),ne(null),xe(null),Ce([]),De([]),_e(null),it(null),pe([]),k(null),T([]),Y([]),ee(0),C(!1),ue(!1),me(!1),G(null),K.current+=1},[]),$t=I.useCallback((R,ce,F,Te,Ze,ct,At,Le)=>{const Tt={board:Array.from(R.entries()).map(([$e,st])=>[$e,[...st]]),p1Reserve:[...ce],p2Reserve:[...F],currentPlayer:Te,turnCountP1:Ze,turnCountP2:ct,lastMovedPieceId:At,moveHistory:[...Le]};De($e=>[...$e,Tt])},[]),en=I.useCallback(()=>{if(Ne.length===0||p)return;let R=1;r.mode==="AI"&&Ne.length>=2&&(R=2);const ce=Math.max(0,Ne.length-R),F=Ne[ce],Te=new Map;F.board.forEach(([Ze,ct])=>Te.set(Ze,[...ct])),y(Te),H([...F.p1Reserve]),z([...F.p2Reserve]),B(F.currentPlayer),L(F.turnCountP1),P(F.turnCountP2),ne(F.lastMovedPieceId),Ce([...F.moveHistory]),De(Ze=>Ze.slice(0,ce)),_e(null),it(null),pe([]),k(null),T([]),Y([]),ee(0)},[Ne,p,r.mode]),Vt=Tu(s);I.useEffect(()=>{Vt.isGameOver&&!qe&&me(!0)},[Vt,qe]),I.useEffect(()=>{if(Vt.isGameOver)return;const R=m===1?A:D,ce=m===1?E:U;if(yu(s,m,R,ce,V,r.expansions).length===0&&(s.size>0||A.length>0)){G(o("toastForcedPass",{n:m})),setTimeout(()=>G(null),3e3);const Te={turnNumber:ce,player:m,actionType:"PASS",bugType:"QUEEN",description:o("passLogDesc",{n:m})};Ce(Ze=>[...Ze,Te]),B(m===1?2:1)}},[m,s,A,D,E,U,V,r.expansions,Vt.isGameOver]),I.useEffect(()=>{if(r.mode==="AI"&&m===2&&!Vt.isGameOver&&!p){if(yu(s,2,D,U,V,r.expansions).length===0)return;C(!0);const ce=K.current,F=setTimeout(()=>{if(K.current!==ce){C(!1);return}try{const Te=$g(s,2,D,A,U,E,r.aiDifficulty,V,r.expansions);Te?ma(Te):(G(o("toastAiPass")),setTimeout(()=>G(null),3e3),B(1))}finally{C(!1)}},600);return()=>clearTimeout(F)}},[m,r,s,A,D,E,U,V,Vt.isGameOver]);const ma=R=>{$t(s,A,D,m,E,U,V,ye);const ce=xu(s);let F=[...A],Te=[...D],Ze="";if(R.type==="PLACE"){if(R.player===1){const $e=F.findIndex(st=>st.id===R.pieceId);$e!==-1&&F.splice($e,1)}else{const $e=Te.findIndex(st=>st.id===R.pieceId);$e!==-1&&Te.splice($e,1)}const Le={id:R.pieceId,type:R.bugType,player:R.player},Dt=ae(R.toHex.q,R.toHex.r),Tt=ce.get(Dt)||[];ce.set(Dt,[...Tt,Le]),Ze=o("placedDesc",{bug:oa[R.bugType].name,q:R.toHex.q,r:R.toHex.r}),xe({to:R.toHex})}else if(R.type==="MOVE"&&R.fromHex){const Le=ae(R.fromHex.q,R.fromHex.r),Dt=ce.get(Le)||[],Tt=Dt.pop();if(Dt.length===0&&ce.delete(Le),Tt){const $e=ae(R.toHex.q,R.toHex.r),st=ce.get($e)||[];ce.set($e,[...st,Tt])}Ze=o("movedDesc",{bug:oa[R.bugType].name,q1:R.fromHex.q,r1:R.fromHex.r,q2:R.toHex.q,r2:R.toHex.r}),xe({from:R.fromHex,to:R.toHex})}else if(R.type==="PILLBUG_SPECIAL"&&R.pillbugTargetHex){const Le=ae(R.pillbugTargetHex.q,R.pillbugTargetHex.r),Dt=ce.get(Le)||[],Tt=Dt.pop();if(Dt.length===0&&ce.delete(Le),Tt){const $e=ae(R.toHex.q,R.toHex.r),st=ce.get($e)||[];ce.set($e,[...st,Tt])}Ze=o("pillbugMovedDesc",{bug:Tt?oa[Tt.type].name:"piece",q1:R.pillbugTargetHex.q,r1:R.pillbugTargetHex.r,q2:R.toHex.q,r2:R.toHex.r}),xe({from:R.pillbugTargetHex,to:R.toHex})}y(ce),H(F),z(Te);let ct=null;if(R.type==="PILLBUG_SPECIAL"&&R.pillbugTargetHex){const Le=ce.get(ae(R.toHex.q,R.toHex.r));ct=Le&&Le.length>0?Le[Le.length-1].id:R.pieceId}else ct=R.pieceId;ne(ct);const At={turnNumber:m===1?E:U,player:m,actionType:R.type,bugType:R.bugType,from:R.fromHex,to:R.toHex,description:Ze};Ce(Le=>[...Le,At]),_e(null),it(null),pe([]),k(null),T([]),Y([]),ee(0),m===1?(L(Le=>Le+1),B(2)):(P(Le=>Le+1),B(1))},pa=R=>{if(!p)if(_e(null),k(null),T([]),Ve===R)it(null),pe([]);else{it(R);const ce=um(s,m);pe(ce)}},tn=R=>{if(p)return;const ce=s.get(ae(R.q,R.r)),F=ce&&ce.length>0?ce[ce.length-1]:null;if(it(null),X&&X.q===R.q&&X.r===R.r){_e(null),pe([]),k(null),T([]);return}if(F&&F.player===m){_e(R);const Ze=cm(s,R,m,m===1?E:U,V,r.expansions);if(pe(Ze),Ps(s,R,F,r.expansions).includes("PILLBUG")){const At=om(s,R,m,V);Y(At),ee(0),At.length>0&&(k(At[0].targetHex),T(At[0].destinationHexes))}else Y([]),ee(0),k(null),T([])}},ln=()=>{if(q.length===0)return;const R=(ie+1)%q.length;ee(R),k(q[R].targetHex),T(q[R].destinationHexes)},an=R=>{if(p)return;const ce=m===1?A:D;if(Ve){const F=ce.find(Te=>Te.type===Ve);F&&ma({type:"PLACE",pieceId:F.id,bugType:Ve,player:m,toHex:R})}else if(X){const F=fa(s,X);F&&(bt&&Oe.some(Te=>Te.q===R.q&&Te.r===R.r)?ma({type:"PILLBUG_SPECIAL",pieceId:F.id,bugType:F.type,player:m,fromHex:X,pillbugTargetHex:bt,toHex:R}):ma({type:"MOVE",pieceId:F.id,bugType:F.type,player:m,fromHex:X,toHex:R}))}};return f.jsxs("div",{className:"flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden",children:[f.jsxs("header",{className:"bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-2xl",children:"🐝"}),f.jsxs("h1",{className:"text-lg font-black tracking-tight text-amber-400",children:[o("appTitle")," ",f.jsx("span",{className:"text-slate-400 text-xs font-normal",children:o("appSubtitle")})]})]}),f.jsx("span",{className:"hidden sm:inline-block text-sm font-semibold px-3 pt-1.5 pb-2.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 translate-y-2.5",children:r.mode==="AI"?o("vsAi",{diff:o(r.aiDifficulty==="EASY"?"easyBtn":r.aiDifficulty==="MEDIUM"?"mediumBtn":"hardBtn")}):o("passAndPlay")})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${m===1?"bg-slate-800 border-amber-400 text-amber-300":"bg-slate-900 border-blue-400 text-blue-300"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${m===1?"bg-white":"bg-slate-950 border border-slate-500"} ${p?"animate-ping":""}`}),f.jsx("span",{children:p?o("aiThinking"):o("playersTurn",{n:m,color:o(m===1?"white":"black")})})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(ey,{className:"!px-1.5 !py-1"}),f.jsx("button",{onClick:en,disabled:Ne.length===0||p,className:`p-2 rounded-xl border transition-colors ${Ne.length>0&&!p?"bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white":"bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed"}`,title:o("undoTitle"),children:f.jsx(Rh,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>ue(!0),className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors",title:o("newGameTitle"),children:f.jsx(Lh,{className:"w-4 h-4"})}),f.jsxs("button",{onClick:()=>St(!0),className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold",title:o("kotlinTitle"),children:[f.jsx(mm,{className:"w-4 h-4"}),f.jsx("span",{className:"hidden md:inline",children:o("kotlinSource")})]})]})]})]}),_&&f.jsxs("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce",children:[f.jsx(dm,{className:"w-4 h-4"}),f.jsx("span",{children:_})]}),f.jsxs("div",{className:"flex-1 flex flex-col md:flex-row relative overflow-hidden",children:[f.jsxs("div",{className:"hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4",children:[f.jsx(ws,{player:1,reserve:A,isActive:m===1&&!p,selectedBugType:m===1?Ve:null,onSelectBugType:pa,turnCount:E,queenPlaced:ra(s,1)}),f.jsx(ws,{player:2,reserve:D,isActive:m===2&&!p,selectedBugType:m===2?Ve:null,onSelectBugType:pa,turnCount:U,queenPlaced:ra(s,2)})]}),f.jsxs("div",{className:"flex-1 relative h-full",children:[f.jsx(ty,{board:s,selectedHex:X,validDestinations:rt,pillbugTargetHex:bt,pillbugDestinations:Oe,onSelectHex:tn,onSelectDestination:an,onSelectPillbugTarget:ln,currentPlayer:m,isAITurn:p,lastMovedHex:be}),f.jsx("div",{className:"absolute bottom-4 right-4 z-20 max-w-xs w-full",children:f.jsx(ly,{logs:ye})})]}),f.jsx("div",{className:"block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20",children:f.jsx(ws,{player:m,reserve:m===1?A:D,isActive:!p,selectedBugType:Ve,onSelectBugType:pa,turnCount:m===1?E:U,queenPlaced:ra(s,m)})})]}),f.jsx(ny,{isOpen:te,onStartGame:$a,onClose:()=>ue(!1),canCancel:s.size>0}),f.jsx(iy,{isOpen:qe,winner:Vt.winner,onRestart:()=>$a(r),onNewGameSetup:()=>{me(!1),ue(!0)}}),f.jsx(uy,{isOpen:xt,onClose:()=>St(!1)})]})}wg.createRoot(document.getElementById("root")).render(f.jsx(I.StrictMode,{children:f.jsx(cy,{})}));
