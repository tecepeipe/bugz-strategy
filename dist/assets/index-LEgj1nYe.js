(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))c(v);new MutationObserver(v=>{for(const T of v)if(T.type==="childList")for(const H of T.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&c(H)}).observe(document,{childList:!0,subtree:!0});function h(v){const T={};return v.integrity&&(T.integrity=v.integrity),v.referrerPolicy&&(T.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?T.credentials="include":v.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function c(v){if(v.ep)return;v.ep=!0;const T=h(v);fetch(v.href,T)}})();var kc={exports:{}},Xn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function _g(){if(Id)return Xn;Id=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function h(c,v,T){var H=null;if(T!==void 0&&(H=""+T),v.key!==void 0&&(H=""+v.key),"key"in v){T={};for(var D in v)D!=="key"&&(T[D]=v[D])}else T=v;return v=T.ref,{$$typeof:s,type:c,key:H,ref:v!==void 0?v:null,props:T}}return Xn.Fragment=r,Xn.jsx=h,Xn.jsxs=h,Xn}var Fd;function Rg(){return Fd||(Fd=1,kc.exports=_g()),kc.exports}var f=Rg(),Pc={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function qg(){if(Wd)return $;Wd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),H=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),q=Symbol.iterator;function k(m){return m===null||typeof m!="object"?null:(m=q&&m[q]||m["@@iterator"],typeof m=="function"?m:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,ne={};function F(m,C,R){this.props=m,this.context=C,this.refs=ne,this.updater=R||w}F.prototype.isReactComponent={},F.prototype.setState=function(m,C){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,C,"setState")},F.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Ae(){}Ae.prototype=F.prototype;function xe(m,C,R){this.props=m,this.context=C,this.refs=ne,this.updater=R||w}var Ne=xe.prototype=new Ae;Ne.constructor=xe,P(Ne,F.prototype),Ne.isPureReactComponent=!0;var Be=Array.isArray;function Re(){}var X={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Ke(m,C,R){var U=R.ref;return{$$typeof:s,type:m,key:C,ref:U!==void 0?U:null,props:R}}function st(m,C){return Ke(m.type,C,m.props)}function pt(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function ve(m){var C={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(R){return C[R]})}var At=/\/+/g;function G(m,C){return typeof m=="object"&&m!==null&&m.key!=null?ve(""+m.key):C.toString(36)}function Ce(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Re,Re):(m.status="pending",m.then(function(C){m.status==="pending"&&(m.status="fulfilled",m.value=C)},function(C){m.status==="pending"&&(m.status="rejected",m.reason=C)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function E(m,C,R,U,J){var W=typeof m;(W==="undefined"||W==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(W){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case s:case r:ue=!0;break;case B:return ue=m._init,E(ue(m._payload),C,R,U,J)}}if(ue)return J=J(m),ue=U===""?"."+G(m,0):U,Be(J)?(R="",ue!=null&&(R=ue.replace(At,"$&/")+"/"),E(J,C,R,"",function(Tt){return Tt})):J!=null&&(pt(J)&&(J=st(J,R+(J.key==null||m&&m.key===J.key?"":(""+J.key).replace(At,"$&/")+"/")+ue)),C.push(J)),1;ue=0;var De=U===""?".":U+":";if(Be(m))for(var ge=0;ge<m.length;ge++)U=m[ge],W=De+G(U,ge),ue+=E(U,C,R,W,J);else if(ge=k(m),typeof ge=="function")for(m=ge.call(m),ge=0;!(U=m.next()).done;)U=U.value,W=De+G(U,ge++),ue+=E(U,C,R,W,J);else if(W==="object"){if(typeof m.then=="function")return E(Ce(m),C,R,U,J);throw C=String(m),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ue}function _(m,C,R){if(m==null)return m;var U=[],J=0;return E(m,U,"","",function(W){return C.call(R,W,J++)}),U}function V(m){if(m._status===-1){var C=m._result;C=C(),C.then(function(R){(m._status===0||m._status===-1)&&(m._status=1,m._result=R)},function(R){(m._status===0||m._status===-1)&&(m._status=2,m._result=R)}),m._status===-1&&(m._status=0,m._result=C)}if(m._status===1)return m._result.default;throw m._result}var ce=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ae={map:_,forEach:function(m,C,R){_(m,function(){C.apply(this,arguments)},R)},count:function(m){var C=0;return _(m,function(){C++}),C},toArray:function(m){return _(m,function(C){return C})||[]},only:function(m){if(!pt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return $.Activity=A,$.Children=ae,$.Component=F,$.Fragment=h,$.Profiler=v,$.PureComponent=xe,$.StrictMode=c,$.Suspense=z,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,$.__COMPILER_RUNTIME={__proto__:null,c:function(m){return X.H.useMemoCache(m)}},$.cache=function(m){return function(){return m.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(m,C,R){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var U=P({},m.props),J=m.key;if(C!=null)for(W in C.key!==void 0&&(J=""+C.key),C)!Ge.call(C,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&C.ref===void 0||(U[W]=C[W]);var W=arguments.length-2;if(W===1)U.children=R;else if(1<W){for(var ue=Array(W),De=0;De<W;De++)ue[De]=arguments[De+2];U.children=ue}return Ke(m.type,J,U)},$.createContext=function(m){return m={$$typeof:H,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:T,_context:m},m},$.createElement=function(m,C,R){var U,J={},W=null;if(C!=null)for(U in C.key!==void 0&&(W=""+C.key),C)Ge.call(C,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(J[U]=C[U]);var ue=arguments.length-2;if(ue===1)J.children=R;else if(1<ue){for(var De=Array(ue),ge=0;ge<ue;ge++)De[ge]=arguments[ge+2];J.children=De}if(m&&m.defaultProps)for(U in ue=m.defaultProps,ue)J[U]===void 0&&(J[U]=ue[U]);return Ke(m,W,J)},$.createRef=function(){return{current:null}},$.forwardRef=function(m){return{$$typeof:D,render:m}},$.isValidElement=pt,$.lazy=function(m){return{$$typeof:B,_payload:{_status:-1,_result:m},_init:V}},$.memo=function(m,C){return{$$typeof:p,type:m,compare:C===void 0?null:C}},$.startTransition=function(m){var C=X.T,R={};X.T=R;try{var U=m(),J=X.S;J!==null&&J(R,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(Re,ce)}catch(W){ce(W)}finally{C!==null&&R.types!==null&&(C.types=R.types),X.T=C}},$.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},$.use=function(m){return X.H.use(m)},$.useActionState=function(m,C,R){return X.H.useActionState(m,C,R)},$.useCallback=function(m,C){return X.H.useCallback(m,C)},$.useContext=function(m){return X.H.useContext(m)},$.useDebugValue=function(){},$.useDeferredValue=function(m,C){return X.H.useDeferredValue(m,C)},$.useEffect=function(m,C){return X.H.useEffect(m,C)},$.useEffectEvent=function(m){return X.H.useEffectEvent(m)},$.useId=function(){return X.H.useId()},$.useImperativeHandle=function(m,C,R){return X.H.useImperativeHandle(m,C,R)},$.useInsertionEffect=function(m,C){return X.H.useInsertionEffect(m,C)},$.useLayoutEffect=function(m,C){return X.H.useLayoutEffect(m,C)},$.useMemo=function(m,C){return X.H.useMemo(m,C)},$.useOptimistic=function(m,C){return X.H.useOptimistic(m,C)},$.useReducer=function(m,C,R){return X.H.useReducer(m,C,R)},$.useRef=function(m){return X.H.useRef(m)},$.useState=function(m){return X.H.useState(m)},$.useSyncExternalStore=function(m,C,R){return X.H.useSyncExternalStore(m,C,R)},$.useTransition=function(){return X.H.useTransition()},$.version="19.2.8",$}var $d;function Fc(){return $d||($d=1,Pc.exports=qg()),Pc.exports}var K=Fc(),Qc={exports:{}},Jn={},wc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Ug(){return ep||(ep=1,(function(s){function r(E,_){var V=E.length;E.push(_);e:for(;0<V;){var ce=V-1>>>1,ae=E[ce];if(0<v(ae,_))E[ce]=_,E[V]=ae,V=ce;else break e}}function h(E){return E.length===0?null:E[0]}function c(E){if(E.length===0)return null;var _=E[0],V=E.pop();if(V!==_){E[0]=V;e:for(var ce=0,ae=E.length,m=ae>>>1;ce<m;){var C=2*(ce+1)-1,R=E[C],U=C+1,J=E[U];if(0>v(R,V))U<ae&&0>v(J,R)?(E[ce]=J,E[U]=V,ce=U):(E[ce]=R,E[C]=V,ce=C);else if(U<ae&&0>v(J,V))E[ce]=J,E[U]=V,ce=U;else break e}}return _}function v(E,_){var V=E.sortIndex-_.sortIndex;return V!==0?V:E.id-_.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var T=performance;s.unstable_now=function(){return T.now()}}else{var H=Date,D=H.now();s.unstable_now=function(){return H.now()-D}}var z=[],p=[],B=1,A=null,q=3,k=!1,w=!1,P=!1,ne=!1,F=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function Ne(E){for(var _=h(p);_!==null;){if(_.callback===null)c(p);else if(_.startTime<=E)c(p),_.sortIndex=_.expirationTime,r(z,_);else break;_=h(p)}}function Be(E){if(P=!1,Ne(E),!w)if(h(z)!==null)w=!0,Re||(Re=!0,ve());else{var _=h(p);_!==null&&Ce(Be,_.startTime-E)}}var Re=!1,X=-1,Ge=5,Ke=-1;function st(){return ne?!0:!(s.unstable_now()-Ke<Ge)}function pt(){if(ne=!1,Re){var E=s.unstable_now();Ke=E;var _=!0;try{e:{w=!1,P&&(P=!1,Ae(X),X=-1),k=!0;var V=q;try{t:{for(Ne(E),A=h(z);A!==null&&!(A.expirationTime>E&&st());){var ce=A.callback;if(typeof ce=="function"){A.callback=null,q=A.priorityLevel;var ae=ce(A.expirationTime<=E);if(E=s.unstable_now(),typeof ae=="function"){A.callback=ae,Ne(E),_=!0;break t}A===h(z)&&c(z),Ne(E)}else c(z);A=h(z)}if(A!==null)_=!0;else{var m=h(p);m!==null&&Ce(Be,m.startTime-E),_=!1}}break e}finally{A=null,q=V,k=!1}_=void 0}}finally{_?ve():Re=!1}}}var ve;if(typeof xe=="function")ve=function(){xe(pt)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,G=At.port2;At.port1.onmessage=pt,ve=function(){G.postMessage(null)}}else ve=function(){F(pt,0)};function Ce(E,_){X=F(function(){E(s.unstable_now())},_)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return q},s.unstable_next=function(E){switch(q){case 1:case 2:case 3:var _=3;break;default:_=q}var V=q;q=_;try{return E()}finally{q=V}},s.unstable_requestPaint=function(){ne=!0},s.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var V=q;q=E;try{return _()}finally{q=V}},s.unstable_scheduleCallback=function(E,_,V){var ce=s.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ce+V:ce):V=ce,E){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=V+ae,E={id:B++,callback:_,priorityLevel:E,startTime:V,expirationTime:ae,sortIndex:-1},V>ce?(E.sortIndex=V,r(p,E),h(z)===null&&E===h(p)&&(P?(Ae(X),X=-1):P=!0,Ce(Be,V-ce))):(E.sortIndex=ae,r(z,E),w||k||(w=!0,Re||(Re=!0,ve()))),E},s.unstable_shouldYield=st,s.unstable_wrapCallback=function(E){var _=q;return function(){var V=q;q=_;try{return E.apply(this,arguments)}finally{q=V}}}})(Yc)),Yc}var tp;function Gg(){return tp||(tp=1,wc.exports=Ug()),wc.exports}var Vc={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function kg(){if(ap)return rt;ap=1;var s=Fc();function r(z){var p="https://react.dev/errors/"+z;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)p+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+z+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var c={d:{f:h,r:function(){throw Error(r(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},v=Symbol.for("react.portal");function T(z,p,B){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:A==null?null:""+A,children:z,containerInfo:p,implementation:B}}var H=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(z,p){if(z==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,rt.createPortal=function(z,p){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return T(z,p,null,B)},rt.flushSync=function(z){var p=H.T,B=c.p;try{if(H.T=null,c.p=2,z)return z()}finally{H.T=p,c.p=B,c.d.f()}},rt.preconnect=function(z,p){typeof z=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(z,p))},rt.prefetchDNS=function(z){typeof z=="string"&&c.d.D(z)},rt.preinit=function(z,p){if(typeof z=="string"&&p&&typeof p.as=="string"){var B=p.as,A=D(B,p.crossOrigin),q=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;B==="style"?c.d.S(z,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:A,integrity:q,fetchPriority:k}):B==="script"&&c.d.X(z,{crossOrigin:A,integrity:q,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},rt.preinitModule=function(z,p){if(typeof z=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var B=D(p.as,p.crossOrigin);c.d.M(z,{crossOrigin:B,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(z)},rt.preload=function(z,p){if(typeof z=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var B=p.as,A=D(B,p.crossOrigin);c.d.L(z,B,{crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},rt.preloadModule=function(z,p){if(typeof z=="string")if(p){var B=D(p.as,p.crossOrigin);c.d.m(z,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:B,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(z)},rt.requestFormReset=function(z){c.d.r(z)},rt.unstable_batchedUpdates=function(z,p){return z(p)},rt.useFormState=function(z,p,B){return H.H.useFormState(z,p,B)},rt.useFormStatus=function(){return H.H.useHostTransitionStatus()},rt.version="19.2.8",rt}var lp;function Pg(){if(lp)return Vc.exports;lp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Vc.exports=kg(),Vc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Qg(){if(np)return Jn;np=1;var s=Gg(),r=Fc(),h=Pg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function T(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function H(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(T(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=T(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return z(n),e;if(i===l)return z(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,o=n.child;o;){if(o===a){u=!0,a=n,l=i;break}if(o===l){u=!0,l=n,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,l=n;break}if(o===l){u=!0,l=i,a=n;break}o=o.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,q=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),Ae=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function ve(e){return e===null||typeof e!="object"?null:(e=pt&&e[pt]||e["@@iterator"],typeof e=="function"?e:null)}var At=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===At?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case F:return"Profiler";case ne:return"StrictMode";case Be:return"Suspense";case Re:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case xe:return e.displayName||"Context";case Ae:return(e._context.displayName||"Context")+".Consumer";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}var Ce=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ce=[],ae=-1;function m(e){return{current:e}}function C(e){0>ae||(e.current=ce[ae],ce[ae]=null,ae--)}function R(e,t){ae++,ce[ae]=e.current,e.current=t}var U=m(null),J=m(null),W=m(null),ue=m(null);function De(e,t){switch(R(W,t),R(J,e),R(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bd(t),e=xd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(U),R(U,e)}function ge(){C(U),C(J),C(W)}function Tt(e){e.memoizedState!==null&&R(ue,e);var t=U.current,a=xd(t,e.type);t!==a&&(R(J,e),R(U,a))}function Et(e){J.current===e&&(C(U),C(J)),ue.current===e&&(C(ue),Yn._currentValue=V)}var Qe,Va;function Yt(e){if(Qe===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Va=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+Va}var pl=!1;function ml(e,t){if(!e||pl)return"";pl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var S=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){S=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){S=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&S&&typeof M.stack=="string")return[M.stack,S.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var d=u.split(`
`),x=o.split(`
`);for(n=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;if(l===d.length||n===x.length)for(l=d.length-1,n=x.length-1;1<=l&&0<=n&&d[l]!==x[n];)n--;for(;1<=l&&0<=n;l--,n--)if(d[l]!==x[n]){if(l!==1||n!==1)do if(l--,n--,0>n||d[l]!==x[n]){var O=`
`+d[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=n);break}}}finally{pl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Eu(e,t){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==t&&t!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return ml(e.type,!1);case 11:return ml(e.type.render,!1);case 1:return ml(e.type,!0);case 31:return Yt("Activity");default:return""}}function Wn(e){try{var t="",a=null;do t+=Eu(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Mt=Object.prototype.hasOwnProperty,ea=s.unstable_scheduleCallback,en=s.unstable_cancelCallback,Mu=s.unstable_shouldYield,zu=s.unstable_requestPaint,tt=s.unstable_now,tn=s.unstable_getCurrentPriorityLevel,$n=s.unstable_ImmediatePriority,ei=s.unstable_UserBlockingPriority,gl=s.unstable_NormalPriority,L=s.unstable_LowPriority,ie=s.unstable_IdlePriority,oe=s.log,he=s.unstable_setDisableYieldValue,ke=null,je=null;function at(e){if(typeof oe=="function"&&he(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(ke,e)}catch{}}var me=Math.clz32?Math.clz32:lt,Vt=Math.log,zt=Math.LN2;function lt(e){return e>>>=0,e===0?32:31-(Vt(e)/zt|0)|0}var mt=256,ti=262144,ai=4194304;function Za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function li(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Za(l):(u&=o,u!==0?n=Za(u):a||(a=o&~e,a!==0&&(n=Za(a))))):(o=l&~i,o!==0?n=Za(o):u!==0?n=Za(u):a||(a=l&~e,a!==0&&(n=Za(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function an(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ap(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $c(){var e=ai;return ai<<=1,(ai&62914560)===0&&(ai=4194304),e}function Ou(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ln(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tp(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,x=e.hiddenUpdates;for(a=u&~a;0<a;){var O=31-me(a),j=1<<O;o[O]=0,d[O]=-1;var S=x[O];if(S!==null)for(x[O]=null,O=0;O<S.length;O++){var M=S[O];M!==null&&(M.lane&=-536870913)}a&=~j}l!==0&&es(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function es(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-me(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ts(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-me(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function as(e,t){var a=t&-t;return a=(a&42)!==0?1:Cu(a),(a&(e.suspendedLanes|t))!==0?0:a}function Cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ls(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:wd(e.type))}function ns(e,t){var a=_.p;try{return _.p=e,t()}finally{_.p=a}}var Sa=Math.random().toString(36).slice(2),nt="__reactFiber$"+Sa,gt="__reactProps$"+Sa,hl="__reactContainer$"+Sa,Nu="__reactEvents$"+Sa,Ep="__reactListeners$"+Sa,Mp="__reactHandles$"+Sa,is="__reactResources$"+Sa,nn="__reactMarker$"+Sa;function ju(e){delete e[nt],delete e[gt],delete e[Nu],delete e[Ep],delete e[Mp]}function vl(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[hl]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Od(e);e!==null;){if(a=e[nt])return a;e=Od(e)}return t}e=a,a=e.parentNode}return null}function yl(e){if(e=e[nt]||e[hl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function bl(e){var t=e[is];return t||(t=e[is]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[nn]=!0}var us=new Set,os={};function Ka(e,t){xl(e,t),xl(e+"Capture",t)}function xl(e,t){for(os[e]=t,e=0;e<t.length;e++)us.add(t[e])}var zp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cs={},ss={};function Op(e){return Mt.call(ss,e)?!0:Mt.call(cs,e)?!1:zp.test(e)?ss[e]=!0:(cs[e]=!0,!1)}function ni(e,t,a){if(Op(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ii(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ta(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bu(e){if(!e._valueTracker){var t=rs(e)?"checked":"value";e._valueTracker=Cp(e,t,""+e[t])}}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=rs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hp=/[\n"\\]/g;function _t(e){return e.replace(Hp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Du(e,t,a,l,n,i,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Lu(e,u,Lt(t)):a!=null?Lu(e,u,Lt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Lt(o):e.removeAttribute("name")}function ds(e,t,a,l,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Bu(e);return}a=a!=null?""+Lt(a):"",t=t!=null?""+Lt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Bu(e)}function Lu(e,t,a){t==="number"&&ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Sl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Lt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ps(e,t,a){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Lt(a):""}function ms(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Ce(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Lt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Bu(e)}function Al(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gs(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Np.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hs(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&gs(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&gs(e,i,t[i])}function _u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return Bp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var Ru=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,El=null;function vs(e){var t=yl(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Du(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[gt]||null;if(!n)throw Error(c(90));Du(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&fs(l)}break e;case"textarea":ps(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Sl(e,!!a.multiple,t,!1)}}}var Uu=!1;function ys(e,t,a){if(Uu)return e(t,a);Uu=!0;try{var l=e(t);return l}finally{if(Uu=!1,(Tl!==null||El!==null)&&(Xi(),Tl&&(t=Tl,e=El,El=Tl=null,vs(t),e)))for(t=0;t<e.length;t++)vs(e[t])}}function on(e,t){var a=e.stateNode;if(a===null)return null;var l=a[gt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(la)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{Gu=!1}var Aa=null,ku=null,ci=null;function bs(){if(ci)return ci;var e,t=ku,a=t.length,l,n="value"in Aa?Aa.value:Aa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return ci=n.slice(e,1<l?1-l:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function xs(){return!1}function ht(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:xs,this.isPropagationStopped=xs,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fi=ht(Xa),sn=A({},Xa,{view:0,detail:0}),Dp=ht(sn),Pu,Qu,rn,di=A({},sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rn&&(rn&&e.type==="mousemove"?(Pu=e.screenX-rn.screenX,Qu=e.screenY-rn.screenY):Qu=Pu=0,rn=e),Pu)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Ss=ht(di),Lp=A({},di,{dataTransfer:0}),_p=ht(Lp),Rp=A({},sn,{relatedTarget:0}),wu=ht(Rp),qp=A({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Up=ht(qp),Gp=A({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=ht(Gp),Pp=A({},Xa,{data:0}),As=ht(Pp),Qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yp[e])?!!t[e]:!1}function Yu(){return Vp}var Zp=A({},sn,{key:function(e){if(e.key){var t=Qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=ht(Zp),Xp=A({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=ht(Xp),Jp=A({},sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),Ip=ht(Jp),Fp=A({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wp=ht(Fp),$p=A({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=ht($p),tm=A({},Xa,{newState:0,oldState:0}),am=ht(tm),lm=[9,13,27,32],Vu=la&&"CompositionEvent"in window,fn=null;la&&"documentMode"in document&&(fn=document.documentMode);var nm=la&&"TextEvent"in window&&!fn,Es=la&&(!Vu||fn&&8<fn&&11>=fn),Ms=" ",zs=!1;function Os(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ml=!1;function im(e,t){switch(e){case"compositionend":return Cs(t);case"keypress":return t.which!==32?null:(zs=!0,Ms);case"textInput":return e=t.data,e===Ms&&zs?null:e;default:return null}}function um(e,t){if(Ml)return e==="compositionend"||!Vu&&Os(e,t)?(e=bs(),ci=ku=Aa=null,Ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Es&&t.locale!=="ko"?null:t.data;default:return null}}var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!om[e.type]:t==="textarea"}function Ns(e,t,a,l){Tl?El?El.push(l):El=[l]:Tl=l,t=tu(t,"onChange"),0<t.length&&(a=new fi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var dn=null,pn=null;function cm(e){pd(e,0)}function pi(e){var t=un(e);if(fs(t))return e}function js(e,t){if(e==="change")return t}var Bs=!1;if(la){var Zu;if(la){var Ku="oninput"in document;if(!Ku){var Ds=document.createElement("div");Ds.setAttribute("oninput","return;"),Ku=typeof Ds.oninput=="function"}Zu=Ku}else Zu=!1;Bs=Zu&&(!document.documentMode||9<document.documentMode)}function Ls(){dn&&(dn.detachEvent("onpropertychange",_s),pn=dn=null)}function _s(e){if(e.propertyName==="value"&&pi(pn)){var t=[];Ns(t,pn,e,qu(e)),ys(cm,t)}}function sm(e,t,a){e==="focusin"?(Ls(),dn=t,pn=a,dn.attachEvent("onpropertychange",_s)):e==="focusout"&&Ls()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(pn)}function fm(e,t){if(e==="click")return pi(t)}function dm(e,t){if(e==="input"||e==="change")return pi(t)}function pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:pm;function mn(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Mt.call(t,n)||!Ot(e[n],t[n]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qs(e,t){var a=Rs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rs(a)}}function Us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ui(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ui(e.document)}return t}function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mm=la&&"documentMode"in document&&11>=document.documentMode,zl=null,Ju=null,gn=null,Iu=!1;function ks(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||zl==null||zl!==ui(l)||(l=zl,"selectionStart"in l&&Xu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),gn&&mn(gn,l)||(gn=l,l=tu(Ju,"onSelect"),0<l.length&&(t=new fi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=zl)))}function Ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ol={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Fu={},Ps={};la&&(Ps=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function Ia(e){if(Fu[e])return Fu[e];if(!Ol[e])return e;var t=Ol[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ps)return Fu[e]=t[a];return e}var Qs=Ia("animationend"),ws=Ia("animationiteration"),Ys=Ia("animationstart"),gm=Ia("transitionrun"),hm=Ia("transitionstart"),vm=Ia("transitioncancel"),Vs=Ia("transitionend"),Zs=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function Zt(e,t){Zs.set(e,t),Ka(t,[e])}var mi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],Cl=0,$u=0;function gi(){for(var e=Cl,t=$u=Cl=0;t<e;){var a=Rt[t];Rt[t++]=null;var l=Rt[t];Rt[t++]=null;var n=Rt[t];Rt[t++]=null;var i=Rt[t];if(Rt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Ks(a,n,i)}}function hi(e,t,a,l){Rt[Cl++]=e,Rt[Cl++]=t,Rt[Cl++]=a,Rt[Cl++]=l,$u|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function eo(e,t,a,l){return hi(e,t,a,l),vi(e)}function Fa(e,t){return hi(e,null,null,t),vi(e)}function Ks(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-me(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function vi(e){if(50<qn)throw qn=0,rc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hl={};function ym(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,a,l){return new ym(e,t,a,l)}function to(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,t){var a=e.alternate;return a===null?(a=Ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")to(e)&&(u=1);else if(typeof e=="string")u=Tg(e,a,U.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=Ct(31,a,t,n),e.elementType=Ke,e.lanes=i,e;case P:return Wa(a.children,n,i,t);case ne:u=8,n|=24;break;case F:return e=Ct(12,a,t,n|2),e.elementType=F,e.lanes=i,e;case Be:return e=Ct(13,a,t,n),e.elementType=Be,e.lanes=i,e;case Re:return e=Ct(19,a,t,n),e.elementType=Re,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:u=10;break e;case Ae:u=9;break e;case Ne:u=11;break e;case X:u=14;break e;case Ge:u=16,l=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=Ct(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Wa(e,t,a,l){return e=Ct(7,e,l,t),e.lanes=a,e}function ao(e,t,a){return e=Ct(6,e,null,t),e.lanes=a,e}function Js(e){var t=Ct(18,null,null,0);return t.stateNode=e,t}function lo(e,t,a){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Is=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var a=Is.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Wn(t)},Is.set(e,t),t)}return{value:e,source:t,stack:Wn(t)}}var Nl=[],jl=0,bi=null,hn=0,Ut=[],Gt=0,Ta=null,Jt=1,It="";function ia(e,t){Nl[jl++]=hn,Nl[jl++]=bi,bi=e,hn=t}function Fs(e,t,a){Ut[Gt++]=Jt,Ut[Gt++]=It,Ut[Gt++]=Ta,Ta=e;var l=Jt;e=It;var n=32-me(l)-1;l&=~(1<<n),a+=1;var i=32-me(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Jt=1<<32-me(t)+n|a<<n|l,It=i+e}else Jt=1<<i|a<<n|l,It=e}function no(e){e.return!==null&&(ia(e,1),Fs(e,1,0))}function io(e){for(;e===bi;)bi=Nl[--jl],Nl[jl]=null,hn=Nl[--jl],Nl[jl]=null;for(;e===Ta;)Ta=Ut[--Gt],Ut[Gt]=null,It=Ut[--Gt],Ut[Gt]=null,Jt=Ut[--Gt],Ut[Gt]=null}function Ws(e,t){Ut[Gt++]=Jt,Ut[Gt++]=It,Ut[Gt++]=Ta,Jt=t.id,It=t.overflow,Ta=e}var it=null,Le=null,pe=!1,Ea=null,kt=!1,uo=Error(c(519));function Ma(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vn(qt(t,e)),uo}function $s(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[nt]=e,t[gt]=l,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<Gn.length;a++)re(Gn[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),ds(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),ms(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||vd(t.textContent,a)?(l.popover!=null&&(re("beforetoggle",t),re("toggle",t)),l.onScroll!=null&&re("scroll",t),l.onScrollEnd!=null&&re("scrollend",t),l.onClick!=null&&(t.onclick=aa),t=!0):t=!1,t||Ma(e,!0)}function er(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:it=it.return}}function Bl(e){if(e!==it)return!1;if(!pe)return er(e),pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mc(e.type,e.memoizedProps)),a=!a),a&&Le&&Ma(e),er(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Le=zd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Le=zd(e)}else t===27?(t=Le,Ga(e.type)?(e=Nc,Nc=null,Le=e):Le=t):Le=it?Qt(e.stateNode.nextSibling):null;return!0}function $a(){Le=it=null,pe=!1}function oo(){var e=Ea;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),Ea=null),e}function vn(e){Ea===null?Ea=[e]:Ea.push(e)}var co=m(null),el=null,ua=null;function za(e,t,a){R(co,t._currentValue),t._currentValue=a}function oa(e){e._currentValue=co.current,C(co)}function so(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ro(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var d=0;d<t.length;d++)if(o.context===t[d]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),so(i.return,a,e),l||(u=null);break e}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),so(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Dl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var o=n.type;Ot(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===ue.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Yn):e=[Yn])}n=n.return}e!==null&&ro(t,e,a,l),t.flags|=262144}function xi(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tl(e){el=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return tr(el,e)}function Si(e,t){return el===null&&tl(e),tr(e,t)}function tr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ua===null){if(e===null)throw Error(c(308));ua=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ua=ua.next=t;return a}var bm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xm=s.unstable_scheduleCallback,Sm=s.unstable_NormalPriority,Xe={$$typeof:xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fo(){return{controller:new bm,data:new Map,refCount:0}}function yn(e){e.refCount--,e.refCount===0&&xm(Sm,function(){e.controller.abort()})}var bn=null,po=0,Ll=0,_l=null;function Am(e,t){if(bn===null){var a=bn=[];po=0,Ll=hc(),_l={status:"pending",value:void 0,then:function(l){a.push(l)}}}return po++,t.then(ar,ar),t}function ar(){if(--po===0&&bn!==null){_l!==null&&(_l.status="fulfilled");var e=bn;bn=null,Ll=0,_l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var lr=E.S;E.S=function(e,t){Pf=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Am(e,t),lr!==null&&lr(e,t)};var al=m(null);function mo(){var e=al.current;return e!==null?e:He.pooledCache}function Ai(e,t){t===null?R(al,al.current):R(al,t.pool)}function nr(){var e=mo();return e===null?null:{parent:Xe._currentValue,pool:e}}var Rl=Error(c(460)),go=Error(c(474)),Ti=Error(c(542)),Ei={then:function(){}};function ir(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ur(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(aa,aa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cr(e),e;default:if(typeof t.status=="string")t.then(aa,aa);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cr(e),e}throw nl=t,Rl}}function ll(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nl=a,Rl):a}}var nl=null;function or(){if(nl===null)throw Error(c(459));var e=nl;return nl=null,e}function cr(e){if(e===Rl||e===Ti)throw Error(c(483))}var ql=null,xn=0;function Mi(e){var t=xn;return xn+=1,ql===null&&(ql=[]),ur(ql,e,t)}function Sn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zi(e,t){throw t.$$typeof===q?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sr(e){function t(y,g){if(e){var b=y.deletions;b===null?(y.deletions=[g],y.flags|=16):b.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function l(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function n(y,g){return y=na(y,g),y.index=0,y.sibling=null,y}function i(y,g,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<g?(y.flags|=67108866,g):b):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function u(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function o(y,g,b,N){return g===null||g.tag!==6?(g=ao(b,y.mode,N),g.return=y,g):(g=n(g,b),g.return=y,g)}function d(y,g,b,N){var Z=b.type;return Z===P?O(y,g,b.props.children,N,b.key):g!==null&&(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ge&&ll(Z)===g.type)?(g=n(g,b.props),Sn(g,b),g.return=y,g):(g=yi(b.type,b.key,b.props,null,y.mode,N),Sn(g,b),g.return=y,g)}function x(y,g,b,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=lo(b,y.mode,N),g.return=y,g):(g=n(g,b.children||[]),g.return=y,g)}function O(y,g,b,N,Z){return g===null||g.tag!==7?(g=Wa(b,y.mode,N,Z),g.return=y,g):(g=n(g,b),g.return=y,g)}function j(y,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=ao(""+g,y.mode,b),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case k:return b=yi(g.type,g.key,g.props,null,y.mode,b),Sn(b,g),b.return=y,b;case w:return g=lo(g,y.mode,b),g.return=y,g;case Ge:return g=ll(g),j(y,g,b)}if(Ce(g)||ve(g))return g=Wa(g,y.mode,b,null),g.return=y,g;if(typeof g.then=="function")return j(y,Mi(g),b);if(g.$$typeof===xe)return j(y,Si(y,g),b);zi(y,g)}return null}function S(y,g,b,N){var Z=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return Z!==null?null:o(y,g,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case k:return b.key===Z?d(y,g,b,N):null;case w:return b.key===Z?x(y,g,b,N):null;case Ge:return b=ll(b),S(y,g,b,N)}if(Ce(b)||ve(b))return Z!==null?null:O(y,g,b,N,null);if(typeof b.then=="function")return S(y,g,Mi(b),N);if(b.$$typeof===xe)return S(y,g,Si(y,b),N);zi(y,b)}return null}function M(y,g,b,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return y=y.get(b)||null,o(g,y,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return y=y.get(N.key===null?b:N.key)||null,d(g,y,N,Z);case w:return y=y.get(N.key===null?b:N.key)||null,x(g,y,N,Z);case Ge:return N=ll(N),M(y,g,b,N,Z)}if(Ce(N)||ve(N))return y=y.get(b)||null,O(g,y,N,Z,null);if(typeof N.then=="function")return M(y,g,b,Mi(N),Z);if(N.$$typeof===xe)return M(y,g,b,Si(g,N),Z);zi(g,N)}return null}function Q(y,g,b,N){for(var Z=null,ye=null,Y=g,le=g=0,de=null;Y!==null&&le<b.length;le++){Y.index>le?(de=Y,Y=null):de=Y.sibling;var be=S(y,Y,b[le],N);if(be===null){Y===null&&(Y=de);break}e&&Y&&be.alternate===null&&t(y,Y),g=i(be,g,le),ye===null?Z=be:ye.sibling=be,ye=be,Y=de}if(le===b.length)return a(y,Y),pe&&ia(y,le),Z;if(Y===null){for(;le<b.length;le++)Y=j(y,b[le],N),Y!==null&&(g=i(Y,g,le),ye===null?Z=Y:ye.sibling=Y,ye=Y);return pe&&ia(y,le),Z}for(Y=l(Y);le<b.length;le++)de=M(Y,y,le,b[le],N),de!==null&&(e&&de.alternate!==null&&Y.delete(de.key===null?le:de.key),g=i(de,g,le),ye===null?Z=de:ye.sibling=de,ye=de);return e&&Y.forEach(function(Ya){return t(y,Ya)}),pe&&ia(y,le),Z}function I(y,g,b,N){if(b==null)throw Error(c(151));for(var Z=null,ye=null,Y=g,le=g=0,de=null,be=b.next();Y!==null&&!be.done;le++,be=b.next()){Y.index>le?(de=Y,Y=null):de=Y.sibling;var Ya=S(y,Y,be.value,N);if(Ya===null){Y===null&&(Y=de);break}e&&Y&&Ya.alternate===null&&t(y,Y),g=i(Ya,g,le),ye===null?Z=Ya:ye.sibling=Ya,ye=Ya,Y=de}if(be.done)return a(y,Y),pe&&ia(y,le),Z;if(Y===null){for(;!be.done;le++,be=b.next())be=j(y,be.value,N),be!==null&&(g=i(be,g,le),ye===null?Z=be:ye.sibling=be,ye=be);return pe&&ia(y,le),Z}for(Y=l(Y);!be.done;le++,be=b.next())be=M(Y,y,le,be.value,N),be!==null&&(e&&be.alternate!==null&&Y.delete(be.key===null?le:be.key),g=i(be,g,le),ye===null?Z=be:ye.sibling=be,ye=be);return e&&Y.forEach(function(Lg){return t(y,Lg)}),pe&&ia(y,le),Z}function Oe(y,g,b,N){if(typeof b=="object"&&b!==null&&b.type===P&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case k:e:{for(var Z=b.key;g!==null;){if(g.key===Z){if(Z=b.type,Z===P){if(g.tag===7){a(y,g.sibling),N=n(g,b.props.children),N.return=y,y=N;break e}}else if(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ge&&ll(Z)===g.type){a(y,g.sibling),N=n(g,b.props),Sn(N,b),N.return=y,y=N;break e}a(y,g);break}else t(y,g);g=g.sibling}b.type===P?(N=Wa(b.props.children,y.mode,N,b.key),N.return=y,y=N):(N=yi(b.type,b.key,b.props,null,y.mode,N),Sn(N,b),N.return=y,y=N)}return u(y);case w:e:{for(Z=b.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){a(y,g.sibling),N=n(g,b.children||[]),N.return=y,y=N;break e}else{a(y,g);break}else t(y,g);g=g.sibling}N=lo(b,y.mode,N),N.return=y,y=N}return u(y);case Ge:return b=ll(b),Oe(y,g,b,N)}if(Ce(b))return Q(y,g,b,N);if(ve(b)){if(Z=ve(b),typeof Z!="function")throw Error(c(150));return b=Z.call(b),I(y,g,b,N)}if(typeof b.then=="function")return Oe(y,g,Mi(b),N);if(b.$$typeof===xe)return Oe(y,g,Si(y,b),N);zi(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,g!==null&&g.tag===6?(a(y,g.sibling),N=n(g,b),N.return=y,y=N):(a(y,g),N=ao(b,y.mode,N),N.return=y,y=N),u(y)):a(y,g)}return function(y,g,b,N){try{xn=0;var Z=Oe(y,g,b,N);return ql=null,Z}catch(Y){if(Y===Rl||Y===Ti)throw Y;var ye=Ct(29,Y,null,y.mode);return ye.lanes=N,ye.return=y,ye}finally{}}}var il=sr(!0),rr=sr(!1),Oa=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=vi(e),Ks(e,null,a),t}return hi(e,l,t,a),vi(e)}function An(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ts(e,a)}}function yo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bo=!1;function Tn(){if(bo){var e=_l;if(e!==null)throw e}}function En(e,t,a,l){bo=!1;var n=e.updateQueue;Oa=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var d=o,x=d.next;d.next=null,u===null?i=x:u.next=x,u=d;var O=e.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==u&&(o===null?O.firstBaseUpdate=x:o.next=x,O.lastBaseUpdate=d))}if(i!==null){var j=n.baseState;u=0,O=x=d=null,o=i;do{var S=o.lane&-536870913,M=S!==o.lane;if(M?(fe&S)===S:(l&S)===S){S!==0&&S===Ll&&(bo=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var Q=e,I=o;S=t;var Oe=a;switch(I.tag){case 1:if(Q=I.payload,typeof Q=="function"){j=Q.call(Oe,j,S);break e}j=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=I.payload,S=typeof Q=="function"?Q.call(Oe,j,S):Q,S==null)break e;j=A({},j,S);break e;case 2:Oa=!0}}S=o.callback,S!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[S]:M.push(S))}else M={lane:S,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(x=O=M,d=j):O=O.next=M,u|=S;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;M=o,o=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);O===null&&(d=j),n.baseState=d,n.firstBaseUpdate=x,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),La|=u,e.lanes=u,e.memoizedState=j}}function fr(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function dr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fr(a[e],t)}var Ul=m(null),Oi=m(0);function pr(e,t){e=ha,R(Oi,e),R(Ul,t),ha=e|t.baseLanes}function xo(){R(Oi,ha),R(Ul,Ul.current)}function So(){ha=Oi.current,C(Ul),C(Oi)}var Ht=m(null),Pt=null;function Na(e){var t=e.alternate;R(Ve,Ve.current&1),R(Ht,e),Pt===null&&(t===null||Ul.current!==null||t.memoizedState!==null)&&(Pt=e)}function Ao(e){R(Ve,Ve.current),R(Ht,e),Pt===null&&(Pt=e)}function mr(e){e.tag===22?(R(Ve,Ve.current),R(Ht,e),Pt===null&&(Pt=e)):ja()}function ja(){R(Ve,Ve.current),R(Ht,Ht.current)}function Nt(e){C(Ht),Pt===e&&(Pt=null),C(Ve)}var Ve=m(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cc(a)||Hc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=0,ee=null,Me=null,Je=null,Hi=!1,Gl=!1,ul=!1,Ni=0,Mn=0,kl=null,Em=0;function we(){throw Error(c(321))}function To(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ot(e[a],t[a]))return!1;return!0}function Eo(e,t,a,l,n,i){return ca=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Fr:Go,ul=!1,i=a(l,n),ul=!1,Gl&&(i=hr(t,a,l,n)),gr(e),i}function gr(e){E.H=Cn;var t=Me!==null&&Me.next!==null;if(ca=0,Je=Me=ee=null,Hi=!1,Mn=0,kl=null,t)throw Error(c(300));e===null||Ie||(e=e.dependencies,e!==null&&xi(e)&&(Ie=!0))}function hr(e,t,a,l){ee=e;var n=0;do{if(Gl&&(kl=null),Mn=0,Gl=!1,25<=n)throw Error(c(301));if(n+=1,Je=Me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}E.H=Wr,i=t(a,l)}while(Gl);return i}function Mm(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?zn(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(ee.flags|=1024),t}function Mo(){var e=Ni!==0;return Ni=0,e}function zo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Oo(e){if(Hi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hi=!1}ca=0,Je=Me=ee=null,Gl=!1,Mn=Ni=0,kl=null}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ee.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Me===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Je===null?ee.memoizedState:Je.next;if(t!==null)Je=t,Me=e;else{if(e===null)throw ee.alternate===null?Error(c(467)):Error(c(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Je===null?ee.memoizedState=Je=e:Je=Je.next=e}return Je}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zn(e){var t=Mn;return Mn+=1,kl===null&&(kl=[]),e=ur(kl,e,t),t=ee,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Fr:Go),e}function Bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zn(e);if(e.$$typeof===xe)return ut(e)}throw Error(c(438,String(e)))}function Co(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ji(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=st;return t.index++,a}function sa(e,t){return typeof t=="function"?t(e):t}function Di(e){var t=Ze();return Ho(t,Me,e)}function Ho(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=u=null,d=null,x=t,O=!1;do{var j=x.lane&-536870913;if(j!==x.lane?(fe&j)===j:(ca&j)===j){var S=x.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),j===Ll&&(O=!0);else if((ca&S)===S){x=x.next,S===Ll&&(O=!0);continue}else j={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(o=d=j,u=i):d=d.next=j,ee.lanes|=S,La|=S;j=x.action,ul&&a(i,j),i=x.hasEagerState?x.eagerState:a(i,j)}else S={lane:j,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(o=d=S,u=i):d=d.next=S,ee.lanes|=j,La|=j;x=x.next}while(x!==null&&x!==t);if(d===null?u=i:d.next=o,!Ot(i,e.memoizedState)&&(Ie=!0,O&&(a=_l,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=d,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function No(e){var t=Ze(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Ot(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function vr(e,t,a){var l=ee,n=Ze(),i=pe;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!Ot((Me||n).memoizedState,a);if(u&&(n.memoizedState=a,Ie=!0),n=n.queue,Do(xr.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,Pl(9,{destroy:void 0},br.bind(null,l,n,a,t),null),He===null)throw Error(c(349));i||(ca&127)!==0||yr(l,t,a)}return a}function yr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=ji(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function br(e,t,a,l){t.value=a,t.getSnapshot=l,Sr(t)&&Ar(e)}function xr(e,t,a){return a(function(){Sr(t)&&Ar(e)})}function Sr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ot(e,a)}catch{return!0}}function Ar(e){var t=Fa(e,2);t!==null&&St(t,e,2)}function jo(e){var t=ft();if(typeof e=="function"){var a=e;if(e=a(),ul){at(!0);try{a()}finally{at(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function Tr(e,t,a,l){return e.baseState=a,Ho(e,Me,typeof l=="function"?l:sa)}function zm(e,t,a,l,n){if(Ri(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};E.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Er(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Er(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=E.T,u={};E.T=u;try{var o=a(n,l),d=E.S;d!==null&&d(u,o),Mr(e,t,o)}catch(x){Bo(e,t,x)}finally{i!==null&&u.types!==null&&(i.types=u.types),E.T=i}}else try{i=a(n,l),Mr(e,t,i)}catch(x){Bo(e,t,x)}}function Mr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){zr(e,t,l)},function(l){return Bo(e,t,l)}):zr(e,t,a)}function zr(e,t,a){t.status="fulfilled",t.value=a,Or(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Er(e,a)))}function Bo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Or(t),t=t.next;while(t!==l)}e.action=null}function Or(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cr(e,t){return t}function Hr(e,t){if(pe){var a=He.formState;if(a!==null){e:{var l=ee;if(pe){if(Le){t:{for(var n=Le,i=kt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Qt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Le=Qt(n.nextSibling),l=n.data==="F!";break e}}Ma(l)}l=!1}l&&(t=a[0])}}return a=ft(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:t},a.queue=l,a=Xr.bind(null,ee,l),l.dispatch=a,l=jo(!1),i=Uo.bind(null,ee,!1,l.queue),l=ft(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=zm.bind(null,ee,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Nr(e){var t=Ze();return jr(t,Me,e)}function jr(e,t,a){if(t=Ho(e,t,Cr)[0],e=Di(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=zn(t)}catch(u){throw u===Rl?Ti:u}else l=t;t=Ze();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,Pl(9,{destroy:void 0},Om.bind(null,n,a),null)),[l,i,e]}function Om(e,t){e.action=t}function Br(e){var t=Ze(),a=Me;if(a!==null)return jr(t,a,e);Ze(),t=t.memoizedState,a=Ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Pl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ee.updateQueue,t===null&&(t=ji(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Dr(){return Ze().memoizedState}function Li(e,t,a,l){var n=ft();ee.flags|=e,n.memoizedState=Pl(1|t,{destroy:void 0},a,l===void 0?null:l)}function _i(e,t,a,l){var n=Ze();l=l===void 0?null:l;var i=n.memoizedState.inst;Me!==null&&l!==null&&To(l,Me.memoizedState.deps)?n.memoizedState=Pl(t,i,a,l):(ee.flags|=e,n.memoizedState=Pl(1|t,i,a,l))}function Lr(e,t){Li(8390656,8,e,t)}function Do(e,t){_i(2048,8,e,t)}function Cm(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=ji(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function _r(e){var t=Ze().memoizedState;return Cm({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Rr(e,t){return _i(4,2,e,t)}function qr(e,t){return _i(4,4,e,t)}function Ur(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gr(e,t,a){a=a!=null?a.concat([e]):null,_i(4,4,Ur.bind(null,t,e),a)}function Lo(){}function kr(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&To(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Pr(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&To(t,l[1]))return l[0];if(l=e(),ul){at(!0);try{e()}finally{at(!1)}}return a.memoizedState=[l,t],l}function _o(e,t,a){return a===void 0||(ca&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=wf(),ee.lanes|=e,La|=e,a)}function Qr(e,t,a,l){return Ot(a,t)?a:Ul.current!==null?(e=_o(e,a,l),Ot(e,t)||(Ie=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(fe&261930)===0?(Ie=!0,e.memoizedState=a):(e=wf(),ee.lanes|=e,La|=e,t)}function wr(e,t,a,l,n){var i=_.p;_.p=i!==0&&8>i?i:8;var u=E.T,o={};E.T=o,Uo(e,!1,t,a);try{var d=n(),x=E.S;if(x!==null&&x(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=Tm(d,l);On(e,t,O,Dt(e))}else On(e,t,l,Dt(e))}catch(j){On(e,t,{then:function(){},status:"rejected",reason:j},Dt())}finally{_.p=i,u!==null&&o.types!==null&&(u.types=o.types),E.T=u}}function Hm(){}function Ro(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=Yr(e).queue;wr(e,n,t,V,a===null?Hm:function(){return Vr(e),a(l)})}function Yr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vr(e){var t=Yr(e);t.next===null&&(t=e.alternate.memoizedState),On(e,t.next.queue,{},Dt())}function qo(){return ut(Yn)}function Zr(){return Ze().memoizedState}function Kr(){return Ze().memoizedState}function Nm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Dt();e=Ca(a);var l=Ha(t,e,a);l!==null&&(St(l,t,a),An(l,t,a)),t={cache:fo()},e.payload=t;return}t=t.return}}function jm(e,t,a){var l=Dt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ri(e)?Jr(t,a):(a=eo(e,t,a,l),a!==null&&(St(a,e,l),Ir(a,t,l)))}function Xr(e,t,a){var l=Dt();On(e,t,a,l)}function On(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ri(e))Jr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,a);if(n.hasEagerState=!0,n.eagerState=o,Ot(o,u))return hi(e,t,n,0),He===null&&gi(),!1}catch{}finally{}if(a=eo(e,t,n,l),a!==null)return St(a,e,l),Ir(a,t,l),!0}return!1}function Uo(e,t,a,l){if(l={lane:2,revertLane:hc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ri(e)){if(t)throw Error(c(479))}else t=eo(e,a,l,2),t!==null&&St(t,e,2)}function Ri(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Jr(e,t){Gl=Hi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ir(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ts(e,a)}}var Cn={readContext:ut,use:Bi,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};Cn.useEffectEvent=we;var Fr={readContext:ut,use:Bi,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Lr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Li(4194308,4,Ur.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Li(4194308,4,e,t)},useInsertionEffect:function(e,t){Li(4,2,e,t)},useMemo:function(e,t){var a=ft();t=t===void 0?null:t;var l=e();if(ul){at(!0);try{e()}finally{at(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ft();if(a!==void 0){var n=a(t);if(ul){at(!0);try{a(t)}finally{at(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=jm.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:function(e){e=jo(e);var t=e.queue,a=Xr.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Lo,useDeferredValue:function(e,t){var a=ft();return _o(a,e,t)},useTransition:function(){var e=jo(!1);return e=wr.bind(null,ee,e.queue,!0,!1),ft().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ee,n=ft();if(pe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),He===null)throw Error(c(349));(fe&127)!==0||yr(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Lr(xr.bind(null,l,i,e),[e]),l.flags|=2048,Pl(9,{destroy:void 0},br.bind(null,l,i,a,t),null),a},useId:function(){var e=ft(),t=He.identifierPrefix;if(pe){var a=It,l=Jt;a=(l&~(1<<32-me(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ni++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Em++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qo,useFormState:Hr,useActionState:Hr,useOptimistic:function(e){var t=ft();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Uo.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:Co,useCacheRefresh:function(){return ft().memoizedState=Nm.bind(null,ee)},useEffectEvent:function(e){var t=ft(),a={impl:e};return t.memoizedState=a,function(){if((Se&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Go={readContext:ut,use:Bi,useCallback:kr,useContext:ut,useEffect:Do,useImperativeHandle:Gr,useInsertionEffect:Rr,useLayoutEffect:qr,useMemo:Pr,useReducer:Di,useRef:Dr,useState:function(){return Di(sa)},useDebugValue:Lo,useDeferredValue:function(e,t){var a=Ze();return Qr(a,Me.memoizedState,e,t)},useTransition:function(){var e=Di(sa)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:zn(e),t]},useSyncExternalStore:vr,useId:Zr,useHostTransitionStatus:qo,useFormState:Nr,useActionState:Nr,useOptimistic:function(e,t){var a=Ze();return Tr(a,Me,e,t)},useMemoCache:Co,useCacheRefresh:Kr};Go.useEffectEvent=_r;var Wr={readContext:ut,use:Bi,useCallback:kr,useContext:ut,useEffect:Do,useImperativeHandle:Gr,useInsertionEffect:Rr,useLayoutEffect:qr,useMemo:Pr,useReducer:No,useRef:Dr,useState:function(){return No(sa)},useDebugValue:Lo,useDeferredValue:function(e,t){var a=Ze();return Me===null?_o(a,e,t):Qr(a,Me.memoizedState,e,t)},useTransition:function(){var e=No(sa)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:zn(e),t]},useSyncExternalStore:vr,useId:Zr,useHostTransitionStatus:qo,useFormState:Br,useActionState:Br,useOptimistic:function(e,t){var a=Ze();return Me!==null?Tr(a,Me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Co,useCacheRefresh:Kr};Wr.useEffectEvent=_r;function ko(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:A({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Po={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Dt(),n=Ca(l);n.payload=t,a!=null&&(n.callback=a),t=Ha(e,n,l),t!==null&&(St(t,e,l),An(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Dt(),n=Ca(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Ha(e,n,l),t!==null&&(St(t,e,l),An(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Dt(),l=Ca(a);l.tag=2,t!=null&&(l.callback=t),t=Ha(e,l,a),t!==null&&(St(t,e,a),An(t,e,a))}};function $r(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!mn(a,l)||!mn(n,i):!0}function ef(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function ol(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=A({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function tf(e){mi(e)}function af(e){console.error(e)}function lf(e){mi(e)}function qi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function nf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Qo(e,t,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){qi(e,t)},a}function uf(e){return e=Ca(e),e.tag=3,e}function of(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){nf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){nf(t,a,l),typeof n!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Bm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Dl(t,a,n,!0),a=Ht.current,a!==null){switch(a.tag){case 31:case 13:return Pt===null?Ji():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ei?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),pc(e,l,n)),!1;case 22:return a.flags|=65536,l===Ei?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),pc(e,l,n)),!1}throw Error(c(435,a.tag))}return pc(e,l,n),Ji(),!1}if(pe)return t=Ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==uo&&(e=Error(c(422),{cause:l}),vn(qt(e,a)))):(l!==uo&&(t=Error(c(423),{cause:l}),vn(qt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=qt(l,a),n=Qo(e.stateNode,l,n),yo(e,n),Ye!==4&&(Ye=2)),!1;var i=Error(c(520),{cause:l});if(i=qt(i,a),Rn===null?Rn=[i]:Rn.push(i),Ye!==4&&(Ye=2),t===null)return!0;l=qt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Qo(a.stateNode,l,e),yo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_a===null||!_a.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=uf(n),of(n,e,a,l),yo(a,n),!1}a=a.return}while(a!==null);return!1}var wo=Error(c(461)),Ie=!1;function ot(e,t,a,l){t.child=e===null?rr(t,null,a,l):il(t,e.child,a,l)}function cf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return tl(t),l=Eo(e,t,a,u,i,n),o=Mo(),e!==null&&!Ie?(zo(e,t,n),ra(e,t,n)):(pe&&o&&no(t),t.flags|=1,ot(e,t,l,n),t.child)}function sf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!to(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,rf(e,t,i,l,n)):(e=yi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Fo(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:mn,a(u,l)&&e.ref===t.ref)return ra(e,t,n)}return t.flags|=1,e=na(i,l),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(mn(i,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=i,Fo(e,n))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,ra(e,t,n)}return Yo(e,t,a,l,n)}function ff(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return df(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ai(t,i!==null?i.cachePool:null),i!==null?pr(t,i):xo(),mr(t);else return l=t.lanes=536870912,df(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Ai(t,i.cachePool),pr(t,i),ja(),t.memoizedState=null):(e!==null&&Ai(t,null),xo(),ja());return ot(e,t,n,a),t.child}function Hn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function df(e,t,a,l,n){var i=mo();return i=i===null?null:{parent:Xe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Ai(t,null),xo(),mr(t),e!==null&&Dl(e,t,l,!0),t.childLanes=n,null}function Ui(e,t){return t=ki({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pf(e,t,a){return il(t,e.child,null,a),e=Ui(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Dm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(l.mode==="hidden")return e=Ui(t,l),t.lanes=536870912,Hn(null,e);if(Ao(t),(e=Le)?(e=Md(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Jt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Js(e),a.return=t,t.child=a,it=t,Le=null)):e=null,e===null)throw Ma(t);return t.lanes=536870912,null}return Ui(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Ao(t),n)if(t.flags&256)t.flags&=-257,t=pf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ie||Dl(e,t,a,!1),n=(a&e.childLanes)!==0,Ie||n){if(l=He,l!==null&&(u=as(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Fa(e,u),St(l,e,u),wo;Ji(),t=pf(e,t,a)}else e=i.treeContext,Le=Qt(u.nextSibling),it=t,pe=!0,Ea=null,kt=!1,e!==null&&Ws(t,e),t=Ui(t,l),t.flags|=4096;return t}return e=na(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Yo(e,t,a,l,n){return tl(t),a=Eo(e,t,a,l,void 0,n),l=Mo(),e!==null&&!Ie?(zo(e,t,n),ra(e,t,n)):(pe&&l&&no(t),t.flags|=1,ot(e,t,a,n),t.child)}function mf(e,t,a,l,n,i){return tl(t),t.updateQueue=null,a=hr(t,l,a,n),gr(e),l=Mo(),e!==null&&!Ie?(zo(e,t,i),ra(e,t,i)):(pe&&l&&no(t),t.flags|=1,ot(e,t,a,i),t.child)}function gf(e,t,a,l,n){if(tl(t),t.stateNode===null){var i=Hl,u=a.contextType;typeof u=="object"&&u!==null&&(i=ut(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Po,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ho(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?ut(u):Hl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(ko(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Po.enqueueReplaceState(i,i.state,null),En(t,l,i,n),Tn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,d=ol(a,o);i.props=d;var x=i.context,O=a.contextType;u=Hl,typeof O=="object"&&O!==null&&(u=ut(O));var j=a.getDerivedStateFromProps;O=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||x!==u)&&ef(t,i,l,u),Oa=!1;var S=t.memoizedState;i.state=S,En(t,l,i,n),Tn(),x=t.memoizedState,o||S!==x||Oa?(typeof j=="function"&&(ko(t,a,j,l),x=t.memoizedState),(d=Oa||$r(t,a,d,l,S,x,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=x),i.props=l,i.state=x,i.context=u,l=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,vo(e,t),u=t.memoizedProps,O=ol(a,u),i.props=O,j=t.pendingProps,S=i.context,x=a.contextType,d=Hl,typeof x=="object"&&x!==null&&(d=ut(x)),o=a.getDerivedStateFromProps,(x=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||S!==d)&&ef(t,i,l,d),Oa=!1,S=t.memoizedState,i.state=S,En(t,l,i,n),Tn();var M=t.memoizedState;u!==j||S!==M||Oa||e!==null&&e.dependencies!==null&&xi(e.dependencies)?(typeof o=="function"&&(ko(t,a,o,l),M=t.memoizedState),(O=Oa||$r(t,a,O,l,S,M,d)||e!==null&&e.dependencies!==null&&xi(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,M,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,M,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=d,l=O):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Gi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=il(t,e.child,null,n),t.child=il(t,null,a,n)):ot(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ra(e,t,n),e}function hf(e,t,a,l){return $a(),t.flags|=256,ot(e,t,a,l),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zo(e){return{baseLanes:e,cachePool:nr()}}function Ko(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Bt),e}function vf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(n?Na(t):ja(),(e=Le)?(e=Md(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Jt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Js(e),a.return=t,t.child=a,it=t,Le=null)):e=null,e===null)throw Ma(t);return Hc(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ja(),n=t.mode,o=ki({mode:"hidden",children:o},n),l=Wa(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=Zo(a),l.childLanes=Ko(e,u,a),t.memoizedState=Vo,Hn(null,l)):(Na(t),Xo(t,o))}var d=e.memoizedState;if(d!==null&&(o=d.dehydrated,o!==null)){if(i)t.flags&256?(Na(t),t.flags&=-257,t=Jo(e,t,a)):t.memoizedState!==null?(ja(),t.child=e.child,t.flags|=128,t=null):(ja(),o=l.fallback,n=t.mode,l=ki({mode:"visible",children:l.children},n),o=Wa(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,il(t,e.child,null,a),l=t.child,l.memoizedState=Zo(a),l.childLanes=Ko(e,u,a),t.memoizedState=Vo,t=Hn(null,l));else if(Na(t),Hc(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var x=u.dgst;u=x,l=Error(c(419)),l.stack="",l.digest=u,vn({value:l,source:null,stack:null}),t=Jo(e,t,a)}else if(Ie||Dl(e,t,a,!1),u=(a&e.childLanes)!==0,Ie||u){if(u=He,u!==null&&(l=as(u,a),l!==0&&l!==d.retryLane))throw d.retryLane=l,Fa(e,l),St(u,e,l),wo;Cc(o)||Ji(),t=Jo(e,t,a)}else Cc(o)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Le=Qt(o.nextSibling),it=t,pe=!0,Ea=null,kt=!1,e!==null&&Ws(t,e),t=Xo(t,l.children),t.flags|=4096);return t}return n?(ja(),o=l.fallback,n=t.mode,d=e.child,x=d.sibling,l=na(d,{mode:"hidden",children:l.children}),l.subtreeFlags=d.subtreeFlags&65011712,x!==null?o=na(x,o):(o=Wa(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Hn(null,l),l=t.child,o=e.child.memoizedState,o===null?o=Zo(a):(n=o.cachePool,n!==null?(d=Xe._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=nr(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=Ko(e,u,a),t.memoizedState=Vo,Hn(e.child,l)):(Na(t),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Xo(e,t){return t=ki({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ki(e,t){return e=Ct(22,e,null,t),e.lanes=0,e}function Jo(e,t,a){return il(t,e.child,null,a),e=Xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),so(e.return,t,a)}function Io(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function bf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Ve.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,R(Ve,u),ot(e,t,l,a),l=pe?hn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,a,t);else if(e.tag===19)yf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ci(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Io(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ci(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Io(t,!0,a,null,i,l);break;case"together":Io(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ra(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),La|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Dl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=na(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Fo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xi(e)))}function Lm(e,t,a){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),za(t,Xe,e.memoizedState.cache),$a();break;case 27:case 5:Tt(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:za(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ao(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Na(t),t.flags|=128,null):(a&t.child.childLanes)!==0?vf(e,t,a):(Na(t),e=ra(e,t,a),e!==null?e.sibling:null);Na(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Dl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return bf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(Ve,Ve.current),l)break;return null;case 22:return t.lanes=0,ff(e,t,a,t.pendingProps);case 24:za(t,Xe,e.memoizedState.cache)}return ra(e,t,a)}function xf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Fo(e,a)&&(t.flags&128)===0)return Ie=!1,Lm(e,t,a);Ie=(e.flags&131072)!==0}else Ie=!1,pe&&(t.flags&1048576)!==0&&Fs(t,hn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ll(t.elementType),t.type=e,typeof e=="function")to(e)?(l=ol(e,l),t.tag=1,t=gf(null,t,e,l,a)):(t.tag=0,t=Yo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Ne){t.tag=11,t=cf(null,t,e,l,a);break e}else if(n===X){t.tag=14,t=sf(null,t,e,l,a);break e}}throw t=G(e)||e,Error(c(306,t,""))}}return t;case 0:return Yo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ol(l,t.pendingProps),gf(e,t,l,n,a);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,vo(e,t),En(t,l,null,a);var u=t.memoizedState;if(l=u.cache,za(t,Xe,l),l!==i.cache&&ro(t,[Xe],a,!0),Tn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=hf(e,t,l,a);break e}else if(l!==n){n=qt(Error(c(424)),t),vn(n),t=hf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Qt(e.firstChild),it=t,pe=!0,Ea=null,kt=!0,a=rr(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($a(),l===n){t=ra(e,t,a);break e}ot(e,t,l,a)}t=t.child}return t;case 26:return Gi(e,t),e===null?(a=jd(t.type,null,t.pendingProps,null))?t.memoizedState=a:pe||(a=t.type,e=t.pendingProps,l=au(W.current).createElement(a),l[nt]=t,l[gt]=e,ct(l,a,e),$e(l),t.stateNode=l):t.memoizedState=jd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Tt(t),e===null&&pe&&(l=t.stateNode=Cd(t.type,t.pendingProps,W.current),it=t,kt=!0,n=Le,Ga(t.type)?(Nc=n,Le=Qt(l.firstChild)):Le=n),ot(e,t,t.pendingProps.children,a),Gi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((n=l=Le)&&(l=rg(l,t.type,t.pendingProps,kt),l!==null?(t.stateNode=l,it=t,Le=Qt(l.firstChild),kt=!1,n=!0):n=!1),n||Ma(t)),Tt(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Mc(n,i)?l=null:u!==null&&Mc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Eo(e,t,Mm,null,null,a),Yn._currentValue=n),Gi(e,t),ot(e,t,l,a),t.child;case 6:return e===null&&pe&&((e=a=Le)&&(a=fg(a,t.pendingProps,kt),a!==null?(t.stateNode=a,it=t,Le=null,e=!0):e=!1),e||Ma(t)),null;case 13:return vf(e,t,a);case 4:return De(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=il(t,null,l,a):ot(e,t,l,a),t.child;case 11:return cf(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,za(t,t.type,l.value),ot(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,tl(t),n=ut(n),l=l(n),t.flags|=1,ot(e,t,l,a),t.child;case 14:return sf(e,t,t.type,t.pendingProps,a);case 15:return rf(e,t,t.type,t.pendingProps,a);case 19:return bf(e,t,a);case 31:return Dm(e,t,a);case 22:return ff(e,t,a,t.pendingProps);case 24:return tl(t),l=ut(Xe),e===null?(n=mo(),n===null&&(n=He,i=fo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ho(t),za(t,Xe,n)):((e.lanes&a)!==0&&(vo(e,t),En(t,null,null,a),Tn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),za(t,Xe,l)):(l=i.cache,za(t,Xe,l),l!==n.cache&&ro(t,[Xe],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function fa(e){e.flags|=4}function Wo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Kf())e.flags|=8192;else throw nl=Ei,go}else e.flags&=-16777217}function Sf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rd(t))if(Kf())e.flags|=8192;else throw nl=Ei,go}function Pi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$c():536870912,e.lanes|=t,Vl|=t)}function Nn(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function _m(e,t,a){var l=t.pendingProps;switch(io(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),oa(Xe),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bl(t)?fa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,oo())),_e(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(fa(t),i!==null?(_e(t),Sf(t,i)):(_e(t),Wo(t,n,null,l,a))):i?i!==e.memoizedState?(fa(t),_e(t),Sf(t,i)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&fa(t),_e(t),Wo(t,n,e,l,a)),null;case 27:if(Et(t),a=W.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&fa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return _e(t),null}e=U.current,Bl(t)?$s(t):(e=Cd(n,l,a),t.stateNode=e,fa(t))}return _e(t),null;case 5:if(Et(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&fa(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return _e(t),null}if(i=U.current,Bl(t))$s(t);else{var u=au(W.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[nt]=t,i[gt]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(ct(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&fa(t)}}return _e(t),Wo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&fa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=W.current,Bl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=it,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vd(e.nodeValue,a)),e||Ma(t,!0)}else e=au(e).createTextNode(l),e[nt]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Bl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[nt]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Bl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[nt]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),n=!1}else n=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Pi(t,t.updateQueue),_e(t),null);case 4:return ge(),e===null&&xc(t.stateNode.containerInfo),_e(t),null;case 10:return oa(t.type),_e(t),null;case 19:if(C(Ve),l=t.memoizedState,l===null)return _e(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Nn(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ci(e),i!==null){for(t.flags|=128,Nn(l,!1),e=i.updateQueue,t.updateQueue=e,Pi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Xs(a,e),a=a.sibling;return R(Ve,Ve.current&1|2),pe&&ia(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&tt()>Zi&&(t.flags|=128,n=!0,Nn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ci(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Pi(t,e),Nn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!pe)return _e(t),null}else 2*tt()-l.renderingStartTime>Zi&&a!==536870912&&(t.flags|=128,n=!0,Nn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=tt(),e.sibling=null,a=Ve.current,R(Ve,n?a&1|2:a&1),pe&&ia(t,l.treeForkCount),e):(_e(t),null);case 22:case 23:return Nt(t),So(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Pi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&C(al),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),oa(Xe),_e(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Rm(e,t){switch(io(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oa(Xe),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Et(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(c(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Ve),null;case 4:return ge(),null;case 10:return oa(t.type),null;case 22:case 23:return Nt(t),So(),e!==null&&C(al),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return oa(Xe),null;case 25:return null;default:return null}}function Af(e,t){switch(io(t),t.tag){case 3:oa(Xe),ge();break;case 26:case 27:case 5:Et(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:C(Ve);break;case 10:oa(t.type);break;case 22:case 23:Nt(t),So(),e!==null&&C(al);break;case 24:oa(Xe)}}function jn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(o){Ee(t,t.return,o)}}function Ba(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var d=a,x=o;try{x()}catch(O){Ee(n,d,O)}}}l=l.next}while(l!==i)}}catch(O){Ee(t,t.return,O)}}function Tf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{dr(t,a)}catch(l){Ee(e,e.return,l)}}}function Ef(e,t,a){a.props=ol(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ee(e,t,l)}}function Bn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Ee(e,t,n)}}function Ft(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ee(e,t,n)}else a.current=null}function Mf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ee(e,e.return,n)}}function $o(e,t,a){try{var l=e.stateNode;ng(l,e.type,a,t),l[gt]=t}catch(n){Ee(e,e.return,n)}}function zf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=aa));else if(l!==4&&(l===27&&Ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(tc(e,t,a),e=e.sibling;e!==null;)tc(e,t,a),e=e.sibling}function Qi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qi(e,t,a),e=e.sibling;e!==null;)Qi(e,t,a),e=e.sibling}function Of(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ct(t,l,a),t[nt]=e,t[gt]=a}catch(i){Ee(e,e.return,i)}}var da=!1,Fe=!1,ac=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,et=null;function qm(e,t){if(e=e.containerInfo,Tc=su,e=Gs(e),Xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,o=-1,d=-1,x=0,O=0,j=e,S=null;t:for(;;){for(var M;j!==a||n!==0&&j.nodeType!==3||(o=u+n),j!==i||l!==0&&j.nodeType!==3||(d=u+l),j.nodeType===3&&(u+=j.nodeValue.length),(M=j.firstChild)!==null;)S=j,j=M;for(;;){if(j===e)break t;if(S===a&&++x===n&&(o=u),S===i&&++O===l&&(d=u),(M=j.nextSibling)!==null)break;j=S,S=j.parentNode}j=M}a=o===-1||d===-1?null:{start:o,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ec={focusedElem:e,selectionRange:a},su=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Q=ol(a.type,n);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(I){Ee(a,a.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Oc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function Hf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),l&4&&jn(5,a);break;case 1:if(ma(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){Ee(a,a.return,u)}else{var n=ol(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Ee(a,a.return,u)}}l&64&&Tf(a),l&512&&Bn(a,a.return);break;case 3:if(ma(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{dr(e,t)}catch(u){Ee(a,a.return,u)}}break;case 27:t===null&&l&4&&Of(a);case 26:case 5:ma(e,a),t===null&&l&4&&Mf(a),l&512&&Bn(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),l&4&&Bf(e,a);break;case 13:ma(e,a),l&4&&Df(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zm.bind(null,a),dg(e,a))));break;case 22:if(l=a.memoizedState!==null||da,!l){t=t!==null&&t.memoizedState!==null||Fe,n=da;var i=Fe;da=l,(Fe=t)&&!i?ga(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),da=n,Fe=i}break;case 30:break;default:ma(e,a)}}function Nf(e){var t=e.alternate;t!==null&&(e.alternate=null,Nf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ju(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,vt=!1;function pa(e,t,a){for(a=a.child;a!==null;)jf(e,t,a),a=a.sibling}function jf(e,t,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(ke,a)}catch{}switch(a.tag){case 26:Fe||Ft(a,t),pa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||Ft(a,t);var l=qe,n=vt;Ga(a.type)&&(qe=a.stateNode,vt=!1),pa(e,t,a),Pn(a.stateNode),qe=l,vt=n;break;case 5:Fe||Ft(a,t);case 6:if(l=qe,n=vt,qe=null,pa(e,t,a),qe=l,vt=n,qe!==null)if(vt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(i){Ee(a,t,i)}else try{qe.removeChild(a.stateNode)}catch(i){Ee(a,t,i)}break;case 18:qe!==null&&(vt?(e=qe,Td(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$l(e)):Td(qe,a.stateNode));break;case 4:l=qe,n=vt,qe=a.stateNode.containerInfo,vt=!0,pa(e,t,a),qe=l,vt=n;break;case 0:case 11:case 14:case 15:Ba(2,a,t),Fe||Ba(4,a,t),pa(e,t,a);break;case 1:Fe||(Ft(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ef(a,t,l)),pa(e,t,a);break;case 21:pa(e,t,a);break;case 22:Fe=(l=Fe)||a.memoizedState!==null,pa(e,t,a),Fe=l;break;default:pa(e,t,a)}}function Bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$l(e)}catch(a){Ee(t,t.return,a)}}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){Ee(t,t.return,a)}}function Um(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cf),t;default:throw Error(c(435,e.tag))}}function wi(e,t){var a=Um(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Km.bind(null,e,l);l.then(n,n)}})}function yt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(Ga(o.type)){qe=o.stateNode,vt=!1;break e}break;case 5:qe=o.stateNode,vt=!1;break e;case 3:case 4:qe=o.stateNode.containerInfo,vt=!0;break e}o=o.return}if(qe===null)throw Error(c(160));jf(i,u,n),qe=null,vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Lf(t,e),t=t.sibling}var Kt=null;function Lf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),bt(e),l&4&&(Ba(3,e,e.return),jn(3,e),Ba(5,e,e.return));break;case 1:yt(t,e),bt(e),l&512&&(Fe||a===null||Ft(a,a.return)),l&64&&da&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Kt;if(yt(t,e),bt(e),l&512&&(Fe||a===null||Ft(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[nn]||i[nt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),ct(i,l,a),i[nt]=e,$e(i),l=i;break e;case"link":var u=Ld("link","href",n).get(l+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break t}}i=n.createElement(l),ct(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Ld("meta","content",n).get(l+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break t}}i=n.createElement(l),ct(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[nt]=e,$e(i),l=i}e.stateNode=l}else _d(n,e.type,e.stateNode);else e.stateNode=Dd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?_d(n,e.type,e.stateNode):Dd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$o(e,e.memoizedProps,a.memoizedProps)}break;case 27:yt(t,e),bt(e),l&512&&(Fe||a===null||Ft(a,a.return)),a!==null&&l&4&&$o(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yt(t,e),bt(e),l&512&&(Fe||a===null||Ft(a,a.return)),e.flags&32){n=e.stateNode;try{Al(n,"")}catch(Q){Ee(e,e.return,Q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,$o(e,n,a!==null?a.memoizedProps:n)),l&1024&&(ac=!0);break;case 6:if(yt(t,e),bt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Q){Ee(e,e.return,Q)}}break;case 3:if(iu=null,n=Kt,Kt=lu(t.containerInfo),yt(t,e),Kt=n,bt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(Q){Ee(e,e.return,Q)}ac&&(ac=!1,_f(e));break;case 4:l=Kt,Kt=lu(e.stateNode.containerInfo),yt(t,e),bt(e),Kt=l;break;case 12:yt(t,e),bt(e);break;case 31:yt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wi(e,l)));break;case 13:yt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vi=tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wi(e,l)));break;case 22:n=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,x=da,O=Fe;if(da=x||n,Fe=O||d,yt(t,e),Fe=O,da=x,bt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||d||da||Fe||cl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=d.stateNode;var j=d.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null;o.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(Q){Ee(d,d.return,Q)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(Q){Ee(d,d.return,Q)}}}else if(t.tag===18){if(a===null){d=t;try{var M=d.stateNode;n?Ed(M,!0):Ed(d.stateNode,!1)}catch(Q){Ee(d,d.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,wi(e,a))));break;case 19:yt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wi(e,l)));break;case 30:break;case 21:break;default:yt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(zf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=ec(e);Qi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Al(u,""),a.flags&=-33);var o=ec(e);Qi(e,o,u);break;case 3:case 4:var d=a.stateNode.containerInfo,x=ec(e);tc(e,x,d);break;default:throw Error(c(161))}}catch(O){Ee(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_f(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Hf(e,t.alternate,t),t=t.sibling}function cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ba(4,t,t.return),cl(t);break;case 1:Ft(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ef(t,t.return,a),cl(t);break;case 27:Pn(t.stateNode);case 26:case 5:Ft(t,t.return),cl(t);break;case 22:t.memoizedState===null&&cl(t);break;case 30:cl(t);break;default:cl(t)}e=e.sibling}}function ga(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ga(n,i,a),jn(4,i);break;case 1:if(ga(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(x){Ee(l,l.return,x)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)fr(d[n],o)}catch(x){Ee(l,l.return,x)}}a&&u&64&&Tf(i),Bn(i,i.return);break;case 27:Of(i);case 26:case 5:ga(n,i,a),a&&l===null&&u&4&&Mf(i),Bn(i,i.return);break;case 12:ga(n,i,a);break;case 31:ga(n,i,a),a&&u&4&&Bf(n,i);break;case 13:ga(n,i,a),a&&u&4&&Df(n,i);break;case 22:i.memoizedState===null&&ga(n,i,a),Bn(i,i.return);break;case 30:break;default:ga(n,i,a)}t=t.sibling}}function lc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yn(a))}function nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e))}function Xt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rf(e,t,a,l),t=t.sibling}function Rf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,l),n&2048&&jn(9,t);break;case 1:Xt(e,t,a,l);break;case 3:Xt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yn(e)));break;case 12:if(n&2048){Xt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){Ee(t,t.return,d)}}else Xt(e,t,a,l);break;case 31:Xt(e,t,a,l);break;case 13:Xt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Xt(e,t,a,l):Dn(e,t):i._visibility&2?Xt(e,t,a,l):(i._visibility|=2,Ql(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&lc(u,t);break;case 24:Xt(e,t,a,l),n&2048&&nc(t.alternate,t);break;default:Xt(e,t,a,l)}}function Ql(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,o=a,d=l,x=u.flags;switch(u.tag){case 0:case 11:case 15:Ql(i,u,o,d,n),jn(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?Ql(i,u,o,d,n):Dn(i,u):(O._visibility|=2,Ql(i,u,o,d,n)),n&&x&2048&&lc(u.alternate,u);break;case 24:Ql(i,u,o,d,n),n&&x&2048&&nc(u.alternate,u);break;default:Ql(i,u,o,d,n)}t=t.sibling}}function Dn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Dn(a,l),n&2048&&lc(l.alternate,l);break;case 24:Dn(a,l),n&2048&&nc(l.alternate,l);break;default:Dn(a,l)}t=t.sibling}}var Ln=8192;function wl(e,t,a){if(e.subtreeFlags&Ln)for(e=e.child;e!==null;)qf(e,t,a),e=e.sibling}function qf(e,t,a){switch(e.tag){case 26:wl(e,t,a),e.flags&Ln&&e.memoizedState!==null&&Eg(a,Kt,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,a);break;case 3:case 4:var l=Kt;Kt=lu(e.stateNode.containerInfo),wl(e,t,a),Kt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ln,Ln=16777216,wl(e,t,a),Ln=l):wl(e,t,a));break;default:wl(e,t,a)}}function Uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function _n(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];et=l,kf(l,e)}Uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gf(e),e=e.sibling}function Gf(e){switch(e.tag){case 0:case 11:case 15:_n(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:_n(e);break;case 12:_n(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yi(e)):_n(e);break;default:_n(e)}}function Yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];et=l,kf(l,e)}Uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ba(8,t,t.return),Yi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Yi(t));break;default:Yi(t)}e=e.sibling}}function kf(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:Ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:yn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,et=l;else e:for(a=e;et!==null;){l=et;var n=l.sibling,i=l.return;if(Nf(l),l===a){et=null;break e}if(n!==null){n.return=i,et=n;break e}et=i}}}var Gm={getCacheForType:function(e){var t=ut(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ut(Xe).controller.signal}},km=typeof WeakMap=="function"?WeakMap:Map,Se=0,He=null,se=null,fe=0,Te=0,jt=null,Da=!1,Yl=!1,ic=!1,ha=0,Ye=0,La=0,sl=0,uc=0,Bt=0,Vl=0,Rn=null,xt=null,oc=!1,Vi=0,Pf=0,Zi=1/0,Ki=null,_a=null,We=0,Ra=null,Zl=null,va=0,cc=0,sc=null,Qf=null,qn=0,rc=null;function Dt(){return(Se&2)!==0&&fe!==0?fe&-fe:E.T!==null?hc():ls()}function wf(){if(Bt===0)if((fe&536870912)===0||pe){var e=ti;ti<<=1,(ti&3932160)===0&&(ti=262144),Bt=e}else Bt=536870912;return e=Ht.current,e!==null&&(e.flags|=32),Bt}function St(e,t,a){(e===He&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Kl(e,0),qa(e,fe,Bt,!1)),ln(e,a),((Se&2)===0||e!==He)&&(e===He&&((Se&2)===0&&(sl|=a),Ye===4&&qa(e,fe,Bt,!1)),Wt(e))}function Yf(e,t,a){if((Se&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||an(e,t),n=l?wm(e,t):dc(e,t,!0),i=l;do{if(n===0){Yl&&!l&&qa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Pm(a)){n=dc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=Rn;var d=o.current.memoizedState.isDehydrated;if(d&&(Kl(o,u).flags|=256),u=dc(o,u,!1),u!==2){if(ic&&!d){o.errorRecoveryDisabledLanes|=i,sl|=i,n=4;break e}i=xt,xt=n,i!==null&&(xt===null?xt=i:xt.push.apply(xt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Kl(e,0),qa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:qa(l,t,Bt,!Da);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Vi+300-tt(),10<n)){if(qa(l,t,Bt,!Da),li(l,0,!0)!==0)break e;va=t,l.timeoutHandle=Sd(Vf.bind(null,l,a,xt,Ki,oc,t,Bt,sl,Vl,Da,i,"Throttled",-0,0),n);break e}Vf(l,a,xt,Ki,oc,t,Bt,sl,Vl,Da,i,null,-0,0)}}break}while(!0);Wt(e)}function Vf(e,t,a,l,n,i,u,o,d,x,O,j,S,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},qf(t,i,j);var Q=(i&62914560)===i?Vi-tt():(i&4194048)===i?Pf-tt():0;if(Q=Mg(j,Q),Q!==null){va=i,e.cancelPendingCommit=Q($f.bind(null,e,t,i,a,l,n,u,o,d,O,j,null,S,M)),qa(e,i,u,!x);return}}$f(e,t,i,a,l,n,u,o,d)}function Pm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Ot(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qa(e,t,a,l){t&=~uc,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-me(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&es(e,a,t)}function Xi(){return(Se&6)===0?(Un(0),!1):!0}function fc(){if(se!==null){if(Te===0)var e=se.return;else e=se,ua=el=null,Oo(e),ql=null,xn=0,e=se;for(;e!==null;)Af(e.alternate,e),e=e.return;se=null}}function Kl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,og(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,fc(),He=e,se=a=na(e.current,null),fe=t,Te=0,jt=null,Da=!1,Yl=an(e,t),ic=!1,Vl=Bt=uc=sl=La=Ye=0,xt=Rn=null,oc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-me(l),i=1<<n;t|=e[n],l&=~i}return ha=t,gi(),a}function Zf(e,t){ee=null,E.H=Cn,t===Rl||t===Ti?(t=or(),Te=3):t===go?(t=or(),Te=4):Te=t===wo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,se===null&&(Ye=1,qi(e,qt(t,e.current)))}function Kf(){var e=Ht.current;return e===null?!0:(fe&4194048)===fe?Pt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Pt:!1}function Xf(){var e=E.H;return E.H=Cn,e===null?Cn:e}function Jf(){var e=E.A;return E.A=Gm,e}function Ji(){Ye=4,Da||(fe&4194048)!==fe&&Ht.current!==null||(Yl=!0),(La&134217727)===0&&(sl&134217727)===0||He===null||qa(He,fe,Bt,!1)}function dc(e,t,a){var l=Se;Se|=2;var n=Xf(),i=Jf();(He!==e||fe!==t)&&(Ki=null,Kl(e,t)),t=!1;var u=Ye;e:do try{if(Te!==0&&se!==null){var o=se,d=jt;switch(Te){case 8:fc(),u=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(t=!0);var x=Te;if(Te=0,jt=null,Xl(e,o,d,x),a&&Yl){u=0;break e}break;default:x=Te,Te=0,jt=null,Xl(e,o,d,x)}}Qm(),u=Ye;break}catch(O){Zf(e,O)}while(!0);return t&&e.shellSuspendCounter++,ua=el=null,Se=l,E.H=n,E.A=i,se===null&&(He=null,fe=0,gi()),u}function Qm(){for(;se!==null;)If(se)}function wm(e,t){var a=Se;Se|=2;var l=Xf(),n=Jf();He!==e||fe!==t?(Ki=null,Zi=tt()+500,Kl(e,t)):Yl=an(e,t);e:do try{if(Te!==0&&se!==null){t=se;var i=jt;t:switch(Te){case 1:Te=0,jt=null,Xl(e,t,i,1);break;case 2:case 9:if(ir(i)){Te=0,jt=null,Ff(t);break}t=function(){Te!==2&&Te!==9||He!==e||(Te=7),Wt(e)},i.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:ir(i)?(Te=0,jt=null,Ff(t)):(Te=0,jt=null,Xl(e,t,i,7));break;case 5:var u=null;switch(se.tag){case 26:u=se.memoizedState;case 5:case 27:var o=se;if(u?Rd(u):o.stateNode.complete){Te=0,jt=null;var d=o.sibling;if(d!==null)se=d;else{var x=o.return;x!==null?(se=x,Ii(x)):se=null}break t}}Te=0,jt=null,Xl(e,t,i,5);break;case 6:Te=0,jt=null,Xl(e,t,i,6);break;case 8:fc(),Ye=6;break e;default:throw Error(c(462))}}Ym();break}catch(O){Zf(e,O)}while(!0);return ua=el=null,E.H=l,E.A=n,Se=a,se!==null?0:(He=null,fe=0,gi(),Ye)}function Ym(){for(;se!==null&&!Mu();)If(se)}function If(e){var t=xf(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?Ii(e):se=t}function Ff(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=mf(a,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=mf(a,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:Oo(t);default:Af(a,t),t=se=Xs(t,ha),t=xf(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?Ii(e):se=t}function Xl(e,t,a,l){ua=el=null,Oo(t),ql=null,xn=0;var n=t.return;try{if(Bm(e,n,t,a,fe)){Ye=1,qi(e,qt(a,e.current)),se=null;return}}catch(i){if(n!==null)throw se=n,i;Ye=1,qi(e,qt(a,e.current)),se=null;return}t.flags&32768?(pe||l===1?e=!0:Yl||(fe&536870912)!==0?e=!1:(Da=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wf(t,e)):Ii(t)}function Ii(e){var t=e;do{if((t.flags&32768)!==0){Wf(t,Da);return}e=t.return;var a=_m(t.alternate,t,ha);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ye===0&&(Ye=5)}function Wf(e,t){do{var a=Rm(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Ye=6,se=null}function $f(e,t,a,l,n,i,u,o,d){e.cancelPendingCommit=null;do Fi();while(We!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=$u,Tp(e,a,i,u,o,d),e===He&&(se=He=null,fe=0),Zl=t,Ra=e,va=a,cc=i,sc=n,Qf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xm(gl,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=E.T,E.T=null,n=_.p,_.p=2,u=Se,Se|=4;try{qm(e,t,a)}finally{Se=u,_.p=n,E.T=l}}We=1,ed(),td(),ad()}}function ed(){if(We===1){We=0;var e=Ra,t=Zl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var l=_.p;_.p=2;var n=Se;Se|=4;try{Lf(t,e);var i=Ec,u=Gs(e.containerInfo),o=i.focusedElem,d=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&Us(o.ownerDocument.documentElement,o)){if(d!==null&&Xu(o)){var x=d.start,O=d.end;if(O===void 0&&(O=x),"selectionStart"in o)o.selectionStart=x,o.selectionEnd=Math.min(O,o.value.length);else{var j=o.ownerDocument||document,S=j&&j.defaultView||window;if(S.getSelection){var M=S.getSelection(),Q=o.textContent.length,I=Math.min(d.start,Q),Oe=d.end===void 0?I:Math.min(d.end,Q);!M.extend&&I>Oe&&(u=Oe,Oe=I,I=u);var y=qs(o,I),g=qs(o,Oe);if(y&&g&&(M.rangeCount!==1||M.anchorNode!==y.node||M.anchorOffset!==y.offset||M.focusNode!==g.node||M.focusOffset!==g.offset)){var b=j.createRange();b.setStart(y.node,y.offset),M.removeAllRanges(),I>Oe?(M.addRange(b),M.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),M.addRange(b))}}}}for(j=[],M=o;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<j.length;o++){var N=j[o];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}su=!!Tc,Ec=Tc=null}finally{Se=n,_.p=l,E.T=a}}e.current=t,We=2}}function td(){if(We===2){We=0;var e=Ra,t=Zl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var l=_.p;_.p=2;var n=Se;Se|=4;try{Hf(e,t.alternate,t)}finally{Se=n,_.p=l,E.T=a}}We=3}}function ad(){if(We===4||We===3){We=0,zu();var e=Ra,t=Zl,a=va,l=Qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Zl=Ra=null,ld(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(_a=null),Hu(a),t=t.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(ke,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=E.T,n=_.p,_.p=2,E.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{E.T=t,_.p=n}}(va&3)!==0&&Fi(),Wt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===rc?qn++:(qn=0,rc=e):qn=0,Un(0)}}function ld(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yn(t)))}function Fi(){return ed(),td(),ad(),nd()}function nd(){if(We!==5)return!1;var e=Ra,t=cc;cc=0;var a=Hu(va),l=E.T,n=_.p;try{_.p=32>a?32:a,E.T=null,a=sc,sc=null;var i=Ra,u=va;if(We=0,Zl=Ra=null,va=0,(Se&6)!==0)throw Error(c(331));var o=Se;if(Se|=4,Gf(i.current),Rf(i,i.current,u,a),Se=o,Un(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(ke,i)}catch{}return!0}finally{_.p=n,E.T=l,ld(e,t)}}function id(e,t,a){t=qt(a,t),t=Qo(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(ln(e,2),Wt(e))}function Ee(e,t,a){if(e.tag===3)id(e,e,a);else for(;t!==null;){if(t.tag===3){id(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_a===null||!_a.has(l))){e=qt(a,e),a=uf(2),l=Ha(t,a,2),l!==null&&(of(a,l,t,e),ln(l,2),Wt(l));break}}t=t.return}}function pc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new km;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ic=!0,n.add(a),e=Vm.bind(null,e,t,a),t.then(e,e))}function Vm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(fe&a)===a&&(Ye===4||Ye===3&&(fe&62914560)===fe&&300>tt()-Vi?(Se&2)===0&&Kl(e,0):uc|=a,Vl===fe&&(Vl=0)),Wt(e)}function ud(e,t){t===0&&(t=$c()),e=Fa(e,t),e!==null&&(ln(e,t),Wt(e))}function Zm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ud(e,a)}function Km(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),ud(e,a)}function Xm(e,t){return ea(e,t)}var Wi=null,Jl=null,mc=!1,$i=!1,gc=!1,Ua=0;function Wt(e){e!==Jl&&e.next===null&&(Jl===null?Wi=Jl=e:Jl=Jl.next=e),$i=!0,mc||(mc=!0,Im())}function Un(e,t){if(!gc&&$i){gc=!0;do for(var a=!1,l=Wi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-me(42|e)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,rd(l,i))}else i=fe,i=li(l,l===He?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||an(l,i)||(a=!0,rd(l,i));l=l.next}while(a);gc=!1}}function Jm(){od()}function od(){$i=mc=!1;var e=0;Ua!==0&&ug()&&(e=Ua);for(var t=tt(),a=null,l=Wi;l!==null;){var n=l.next,i=cd(l,t);i===0?(l.next=null,a===null?Wi=n:a.next=n,n===null&&(Jl=a)):(a=l,(e!==0||(i&3)!==0)&&($i=!0)),l=n}We!==0&&We!==5||Un(e),Ua!==0&&(Ua=0)}function cd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-me(i),o=1<<u,d=n[u];d===-1?((o&a)===0||(o&l)!==0)&&(n[u]=Ap(o,t)):d<=t&&(e.expiredLanes|=o),i&=~o}if(t=He,a=fe,a=li(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&en(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||an(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&en(l),Hu(a)){case 2:case 8:a=ei;break;case 32:a=gl;break;case 268435456:a=ie;break;default:a=gl}return l=sd.bind(null,e),a=ea(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&en(l),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fi()&&e.callbackNode!==a)return null;var l=fe;return l=li(e,e===He?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Yf(e,l,t),cd(e,tt()),e.callbackNode!=null&&e.callbackNode===a?sd.bind(null,e):null)}function rd(e,t){if(Fi())return null;Yf(e,t,!0)}function Im(){cg(function(){(Se&6)!==0?ea($n,Jm):od()})}function hc(){if(Ua===0){var e=Ll;e===0&&(e=mt,mt<<=1,(mt&261888)===0&&(mt=256)),Ua=e}return Ua}function fd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function dd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Fm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=fd((n[gt]||null).action),u=l.submitter;u&&(t=(t=u[gt]||null)?fd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var o=new fi("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ua!==0){var d=u?dd(n,u):new FormData(n);Ro(a,{pending:!0,data:d,method:n.method,action:i},null,d)}}else typeof i=="function"&&(o.preventDefault(),d=u?dd(n,u):new FormData(n),Ro(a,{pending:!0,data:d,method:n.method,action:i},i,d))},currentTarget:n}]})}}for(var vc=0;vc<Wu.length;vc++){var yc=Wu[vc],Wm=yc.toLowerCase(),$m=yc[0].toUpperCase()+yc.slice(1);Zt(Wm,"on"+$m)}Zt(Qs,"onAnimationEnd"),Zt(ws,"onAnimationIteration"),Zt(Ys,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(gm,"onTransitionRun"),Zt(hm,"onTransitionStart"),Zt(vm,"onTransitionCancel"),Zt(Vs,"onTransitionEnd"),xl("onMouseEnter",["mouseout","mouseover"]),xl("onMouseLeave",["mouseout","mouseover"]),xl("onPointerEnter",["pointerout","pointerover"]),xl("onPointerLeave",["pointerout","pointerover"]),Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gn));function pd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var o=l[u],d=o.instance,x=o.currentTarget;if(o=o.listener,d!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=x;try{i(n)}catch(O){mi(O)}n.currentTarget=null,i=d}else for(u=0;u<l.length;u++){if(o=l[u],d=o.instance,x=o.currentTarget,o=o.listener,d!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=x;try{i(n)}catch(O){mi(O)}n.currentTarget=null,i=d}}}}function re(e,t){var a=t[Nu];a===void 0&&(a=t[Nu]=new Set);var l=e+"__bubble";a.has(l)||(md(t,e,2,!1),a.add(l))}function bc(e,t,a){var l=0;t&&(l|=4),md(a,e,l,t)}var eu="_reactListening"+Math.random().toString(36).slice(2);function xc(e){if(!e[eu]){e[eu]=!0,us.forEach(function(a){a!=="selectionchange"&&(eg.has(a)||bc(a,!1,e),bc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eu]||(t[eu]=!0,bc("selectionchange",!1,t))}}function md(e,t,a,l){switch(wd(t)){case 2:var n=Cg;break;case 8:n=Hg;break;default:n=_c}a=n.bind(null,t,a,e),n=void 0,!Gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Sc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=l.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=vl(o),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){l=i=u;continue e}o=o.parentNode}}l=l.return}ys(function(){var x=i,O=qu(a),j=[];e:{var S=Zs.get(e);if(S!==void 0){var M=fi,Q=e;switch(e){case"keypress":if(si(a)===0)break e;case"keydown":case"keyup":M=Kp;break;case"focusin":Q="focus",M=wu;break;case"focusout":Q="blur",M=wu;break;case"beforeblur":case"afterblur":M=wu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Ip;break;case Qs:case ws:case Ys:M=Up;break;case Vs:M=Wp;break;case"scroll":case"scrollend":M=Dp;break;case"wheel":M=em;break;case"copy":case"cut":case"paste":M=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Ts;break;case"toggle":case"beforetoggle":M=am}var I=(t&4)!==0,Oe=!I&&(e==="scroll"||e==="scrollend"),y=I?S!==null?S+"Capture":null:S;I=[];for(var g=x,b;g!==null;){var N=g;if(b=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||b===null||y===null||(N=on(g,y),N!=null&&I.push(kn(g,N,b))),Oe)break;g=g.return}0<I.length&&(S=new M(S,Q,null,a,O),j.push({event:S,listeners:I}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",S&&a!==Ru&&(Q=a.relatedTarget||a.fromElement)&&(vl(Q)||Q[hl]))break e;if((M||S)&&(S=O.window===O?O:(S=O.ownerDocument)?S.defaultView||S.parentWindow:window,M?(Q=a.relatedTarget||a.toElement,M=x,Q=Q?vl(Q):null,Q!==null&&(Oe=T(Q),I=Q.tag,Q!==Oe||I!==5&&I!==27&&I!==6)&&(Q=null)):(M=null,Q=x),M!==Q)){if(I=Ss,N="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(I=Ts,N="onPointerLeave",y="onPointerEnter",g="pointer"),Oe=M==null?S:un(M),b=Q==null?S:un(Q),S=new I(N,g+"leave",M,a,O),S.target=Oe,S.relatedTarget=b,N=null,vl(O)===x&&(I=new I(y,g+"enter",Q,a,O),I.target=b,I.relatedTarget=Oe,N=I),Oe=N,M&&Q)t:{for(I=tg,y=M,g=Q,b=0,N=y;N;N=I(N))b++;N=0;for(var Z=g;Z;Z=I(Z))N++;for(;0<b-N;)y=I(y),b--;for(;0<N-b;)g=I(g),N--;for(;b--;){if(y===g||g!==null&&y===g.alternate){I=y;break t}y=I(y),g=I(g)}I=null}else I=null;M!==null&&gd(j,S,M,I,!1),Q!==null&&Oe!==null&&gd(j,Oe,Q,I,!0)}}e:{if(S=x?un(x):window,M=S.nodeName&&S.nodeName.toLowerCase(),M==="select"||M==="input"&&S.type==="file")var ye=js;else if(Hs(S))if(Bs)ye=dm;else{ye=rm;var Y=sm}else M=S.nodeName,!M||M.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?x&&_u(x.elementType)&&(ye=js):ye=fm;if(ye&&(ye=ye(e,x))){Ns(j,ye,a,O);break e}Y&&Y(e,S,x),e==="focusout"&&x&&S.type==="number"&&x.memoizedProps.value!=null&&Lu(S,"number",S.value)}switch(Y=x?un(x):window,e){case"focusin":(Hs(Y)||Y.contentEditable==="true")&&(zl=Y,Ju=x,gn=null);break;case"focusout":gn=Ju=zl=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,ks(j,a,O);break;case"selectionchange":if(mm)break;case"keydown":case"keyup":ks(j,a,O)}var le;if(Vu)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ml?Os(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Es&&a.locale!=="ko"&&(Ml||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ml&&(le=bs()):(Aa=O,ku="value"in Aa?Aa.value:Aa.textContent,Ml=!0)),Y=tu(x,de),0<Y.length&&(de=new As(de,e,null,a,O),j.push({event:de,listeners:Y}),le?de.data=le:(le=Cs(a),le!==null&&(de.data=le)))),(le=nm?im(e,a):um(e,a))&&(de=tu(x,"onBeforeInput"),0<de.length&&(Y=new As("onBeforeInput","beforeinput",null,a,O),j.push({event:Y,listeners:de}),Y.data=le)),Fm(j,e,x,a,O)}pd(j,t)})}function kn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function tu(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=on(e,a),n!=null&&l.unshift(kn(e,n,i)),n=on(e,t),n!=null&&l.push(kn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function tg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var o=a,d=o.alternate,x=o.stateNode;if(o=o.tag,d!==null&&d===l)break;o!==5&&o!==26&&o!==27||x===null||(d=x,n?(x=on(a,i),x!=null&&u.unshift(kn(a,x,d))):n||(x=on(a,i),x!=null&&u.push(kn(a,x,d)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var ag=/\r\n?/g,lg=/\u0000|\uFFFD/g;function hd(e){return(typeof e=="string"?e:""+e).replace(ag,`
`).replace(lg,"")}function vd(e,t){return t=hd(t),hd(e)===t}function ze(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Al(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Al(e,""+l);break;case"className":ii(e,"class",l);break;case"tabIndex":ii(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,a,l);break;case"style":hs(e,l,i);break;case"data":if(t!=="object"){ii(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=oi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",n.name,n,null),ze(e,t,"formEncType",n.formEncType,n,null),ze(e,t,"formMethod",n.formMethod,n,null),ze(e,t,"formTarget",n.formTarget,n,null)):(ze(e,t,"encType",n.encType,n,null),ze(e,t,"method",n.method,n,null),ze(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=oi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=aa);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=oi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":re("beforetoggle",e),re("toggle",e),ni(e,"popover",l);break;case"xlinkActuate":ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ta(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ta(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ta(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ta(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ni(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jp.get(a)||a,ni(e,a,l))}}function Ac(e,t,a,l,n,i){switch(a){case"style":hs(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Al(e,l):(typeof l=="number"||typeof l=="bigint")&&Al(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!os.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[gt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ni(e,a,l)}}}function ct(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,i,u,a,null)}}n&&ze(e,t,"srcSet",a.srcSet,a,null),l&&ze(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var o=i=u=n=null,d=null,x=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":n=O;break;case"type":u=O;break;case"checked":d=O;break;case"defaultChecked":x=O;break;case"value":i=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:ze(e,t,l,O,a,null)}}ds(e,i,o,d,x,u,n,!1);return;case"select":re("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:ze(e,t,n,o,a,null)}t=i,a=u,e.multiple=!!l,t!=null?Sl(e,!!l,t,!1):a!=null&&Sl(e,!!l,a,!0);return;case"textarea":re("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:ze(e,t,u,o,a,null)}ms(e,l,n,i);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(l=a[d],l!=null))switch(d){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ze(e,t,d,l,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<Gn.length;l++)re(Gn[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,x,l,a,null)}return;default:if(_u(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&Ac(e,t,O,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&ze(e,t,o,l,a,null))}function ng(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,d=null,x=null,O=null;for(M in a){var j=a[M];if(a.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":d=j;default:l.hasOwnProperty(M)||ze(e,t,M,null,l,j)}}for(var S in l){var M=l[S];if(j=a[S],l.hasOwnProperty(S)&&(M!=null||j!=null))switch(S){case"type":i=M;break;case"name":n=M;break;case"checked":x=M;break;case"defaultChecked":O=M;break;case"value":u=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==j&&ze(e,t,S,M,l,j)}}Du(e,u,o,d,x,O,i,n);return;case"select":M=u=o=S=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":M=d;default:l.hasOwnProperty(i)||ze(e,t,i,null,l,d)}for(n in l)if(i=l[n],d=a[n],l.hasOwnProperty(n)&&(i!=null||d!=null))switch(n){case"value":S=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==d&&ze(e,t,n,i,l,d)}t=o,a=u,l=M,S!=null?Sl(e,!!a,S,!1):!!l!=!!a&&(t!=null?Sl(e,!!a,t,!0):Sl(e,!!a,a?[]:"",!1));return;case"textarea":M=S=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ze(e,t,o,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":S=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&ze(e,t,u,n,l,i)}ps(e,S,M);return;case"option":for(var Q in a)if(S=a[Q],a.hasOwnProperty(Q)&&S!=null&&!l.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:ze(e,t,Q,null,l,S)}for(d in l)if(S=l[d],M=a[d],l.hasOwnProperty(d)&&S!==M&&(S!=null||M!=null))switch(d){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:ze(e,t,d,S,l,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in a)S=a[I],a.hasOwnProperty(I)&&S!=null&&!l.hasOwnProperty(I)&&ze(e,t,I,null,l,S);for(x in l)if(S=l[x],M=a[x],l.hasOwnProperty(x)&&S!==M&&(S!=null||M!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,t));break;default:ze(e,t,x,S,l,M)}return;default:if(_u(t)){for(var Oe in a)S=a[Oe],a.hasOwnProperty(Oe)&&S!==void 0&&!l.hasOwnProperty(Oe)&&Ac(e,t,Oe,void 0,l,S);for(O in l)S=l[O],M=a[O],!l.hasOwnProperty(O)||S===M||S===void 0&&M===void 0||Ac(e,t,O,S,l,M);return}}for(var y in a)S=a[y],a.hasOwnProperty(y)&&S!=null&&!l.hasOwnProperty(y)&&ze(e,t,y,null,l,S);for(j in l)S=l[j],M=a[j],!l.hasOwnProperty(j)||S===M||S==null&&M==null||ze(e,t,j,S,l,M)}function yd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ig(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&yd(u)){for(u=0,o=n.responseEnd,l+=1;l<a.length;l++){var d=a[l],x=d.startTime;if(x>o)break;var O=d.transferSize,j=d.initiatorType;O&&yd(j)&&(d=d.responseEnd,u+=O*(d<o?1:(o-x)/(d-x)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tc=null,Ec=null;function au(e){return e.nodeType===9?e:e.ownerDocument}function bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zc=null;function ug(){var e=window.event;return e&&e.type==="popstate"?e===zc?!1:(zc=e,!0):(zc=null,!1)}var Sd=typeof setTimeout=="function"?setTimeout:void 0,og=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,cg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(sg)}:Sd;function sg(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function Td(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),$l(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[nn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Pn(e.ownerDocument.body);a=n}while(a);$l(t)}function Ed(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oc(a),ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[nn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function fg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function Md(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function Cc(e){return e.data==="$?"||e.data==="$~"}function Hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nc=null;function zd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Cd(e,t,a){switch(t=au(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ju(e)}var wt=new Map,Hd=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ya=_.d;_.d={f:pg,r:mg,D:gg,C:hg,L:vg,m:yg,X:xg,S:bg,M:Sg};function pg(){var e=ya.f(),t=Xi();return e||t}function mg(e){var t=yl(e);t!==null&&t.tag===5&&t.type==="form"?Vr(t):ya.r(e)}var Il=typeof document>"u"?null:document;function Nd(e,t,a){var l=Il;if(l&&typeof t=="string"&&t){var n=_t(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Hd.has(n)||(Hd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),ct(t,"link",e),$e(t),l.head.appendChild(t)))}}function gg(e){ya.D(e),Nd("dns-prefetch",e,null)}function hg(e,t){ya.C(e,t),Nd("preconnect",e,t)}function vg(e,t,a){ya.L(e,t,a);var l=Il;if(l&&e&&t){var n='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+_t(a.imageSizes)+'"]')):n+='[href="'+_t(e)+'"]';var i=n;switch(t){case"style":i=Fl(e);break;case"script":i=Wl(e)}wt.has(i)||(e=A({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),wt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Qn(i))||t==="script"&&l.querySelector(wn(i))||(t=l.createElement("link"),ct(t,"link",e),$e(t),l.head.appendChild(t)))}}function yg(e,t){ya.m(e,t);var a=Il;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Wl(e)}if(!wt.has(i)&&(e=A({rel:"modulepreload",href:e},t),wt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wn(i)))return}l=a.createElement("link"),ct(l,"link",e),$e(l),a.head.appendChild(l)}}}function bg(e,t,a){ya.S(e,t,a);var l=Il;if(l&&e){var n=bl(l).hoistableStyles,i=Fl(e);t=t||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(Qn(i)))o.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},a),(a=wt.get(i))&&jc(e,a);var d=u=l.createElement("link");$e(d),ct(d,"link",e),d._p=new Promise(function(x,O){d.onload=x,d.onerror=O}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,nu(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function xg(e,t){ya.X(e,t);var a=Il;if(a&&e){var l=bl(a).hoistableScripts,n=Wl(e),i=l.get(n);i||(i=a.querySelector(wn(n)),i||(e=A({src:e,async:!0},t),(t=wt.get(n))&&Bc(e,t),i=a.createElement("script"),$e(i),ct(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Sg(e,t){ya.M(e,t);var a=Il;if(a&&e){var l=bl(a).hoistableScripts,n=Wl(e),i=l.get(n);i||(i=a.querySelector(wn(n)),i||(e=A({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&Bc(e,t),i=a.createElement("script"),$e(i),ct(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function jd(e,t,a,l){var n=(n=W.current)?lu(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Fl(a.href),a=bl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fl(a.href);var i=bl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Qn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),wt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wt.set(e,a),i||Ag(n,e,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wl(a),a=bl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Fl(e){return'href="'+_t(e)+'"'}function Qn(e){return'link[rel="stylesheet"]['+e+"]"}function Bd(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Ag(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ct(t,"link",a),$e(t),e.head.appendChild(t))}function Wl(e){return'[src="'+_t(e)+'"]'}function wn(e){return"script[async]"+e}function Dd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return t.instance=l,$e(l),l;var n=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),ct(l,"style",n),nu(l,a.precedence,e),t.instance=l;case"stylesheet":n=Fl(a.href);var i=e.querySelector(Qn(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;l=Bd(a),(n=wt.get(n))&&jc(l,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var u=i;return u._p=new Promise(function(o,d){u.onload=o,u.onerror=d}),ct(i,"link",l),t.state.loading|=4,nu(i,a.precedence,e),t.instance=i;case"script":return i=Wl(a.src),(n=e.querySelector(wn(i)))?(t.instance=n,$e(n),n):(l=a,(n=wt.get(i))&&(l=A({},a),Bc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),ct(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,nu(l,a.precedence,e));return t.instance}function nu(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function jc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var iu=null;function Ld(e,t,a){if(iu===null){var l=new Map,n=iu=new Map;n.set(a,l)}else n=iu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[nn]||i[nt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function _d(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Tg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Fl(l.href),i=t.querySelector(Qn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=uu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,$e(i);return}i=t.ownerDocument||t,l=Bd(l),(n=wt.get(n))&&jc(l,n),i=i.createElement("link"),$e(i);var u=i;u._p=new Promise(function(o,d){u.onload=o,u.onerror=d}),ct(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Dc=0;function Mg(e,t){return e.stylesheets&&e.count===0&&cu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Dc===0&&(Dc=62500*ig());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Dc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function cu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,t.forEach(zg,e),ou=null,uu.call(e))}function zg(e,t){if(!(t.state.loading&4)){var a=ou.get(e);if(a)var l=a.get(null);else{a=new Map,ou.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=uu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Yn={$$typeof:xe,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Og(e,t,a,l,n,i,u,o,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.hiddenUpdates=Ou(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function qd(e,t,a,l,n,i,u,o,d,x,O,j){return e=new Og(e,t,a,u,d,x,O,j,o),t=1,i===!0&&(t|=24),i=Ct(3,null,null,t),e.current=i,i.stateNode=e,t=fo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ho(i),e}function Ud(e){return e?(e=Hl,e):Hl}function Gd(e,t,a,l,n,i){n=Ud(n),l.context===null?l.context=n:l.pendingContext=n,l=Ca(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Ha(e,l,t),a!==null&&(St(a,e,t),An(a,e,t))}function kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lc(e,t){kd(e,t),(e=e.alternate)&&kd(e,t)}function Pd(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&St(t,e,67108864),Lc(e,67108864)}}function Qd(e){if(e.tag===13||e.tag===31){var t=Dt();t=Cu(t);var a=Fa(e,t);a!==null&&St(a,e,t),Lc(e,t)}}var su=!0;function Cg(e,t,a,l){var n=E.T;E.T=null;var i=_.p;try{_.p=2,_c(e,t,a,l)}finally{_.p=i,E.T=n}}function Hg(e,t,a,l){var n=E.T;E.T=null;var i=_.p;try{_.p=8,_c(e,t,a,l)}finally{_.p=i,E.T=n}}function _c(e,t,a,l){if(su){var n=Rc(l);if(n===null)Sc(e,t,l,ru,a),Yd(e,l);else if(jg(n,e,t,a,l))l.stopPropagation();else if(Yd(e,l),t&4&&-1<Ng.indexOf(e)){for(;n!==null;){var i=yl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Za(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var d=1<<31-me(u);o.entanglements[1]|=d,u&=~d}Wt(i),(Se&6)===0&&(Zi=tt()+500,Un(0))}}break;case 31:case 13:o=Fa(i,2),o!==null&&St(o,i,2),Xi(),Lc(i,2)}if(i=Rc(l),i===null&&Sc(e,t,l,ru,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Sc(e,t,l,null,a)}}function Rc(e){return e=qu(e),qc(e)}var ru=null;function qc(e){if(ru=null,e=vl(e),e!==null){var t=T(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=H(t),e!==null)return e;e=null}else if(a===31){if(e=D(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ru=e,null}function wd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tn()){case $n:return 2;case ei:return 8;case gl:case L:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Uc=!1,ka=null,Pa=null,Qa=null,Vn=new Map,Zn=new Map,wa=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yd(e,t){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function Kn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=yl(t),t!==null&&Pd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function jg(e,t,a,l,n){switch(t){case"focusin":return ka=Kn(ka,e,t,a,l,n),!0;case"dragenter":return Pa=Kn(Pa,e,t,a,l,n),!0;case"mouseover":return Qa=Kn(Qa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Vn.set(i,Kn(Vn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Zn.set(i,Kn(Zn.get(i)||null,e,t,a,l,n)),!0}return!1}function Vd(e){var t=vl(e.target);if(t!==null){var a=T(t);if(a!==null){if(t=a.tag,t===13){if(t=H(a),t!==null){e.blockedOn=t,ns(e.priority,function(){Qd(a)});return}}else if(t===31){if(t=D(a),t!==null){e.blockedOn=t,ns(e.priority,function(){Qd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Rc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ru=l,a.target.dispatchEvent(l),Ru=null}else return t=yl(a),t!==null&&Pd(t),e.blockedOn=a,!1;t.shift()}return!0}function Zd(e,t,a){fu(e)&&a.delete(t)}function Bg(){Uc=!1,ka!==null&&fu(ka)&&(ka=null),Pa!==null&&fu(Pa)&&(Pa=null),Qa!==null&&fu(Qa)&&(Qa=null),Vn.forEach(Zd),Zn.forEach(Zd)}function du(e,t){e.blockedOn===t&&(e.blockedOn=null,Uc||(Uc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Bg)))}var pu=null;function Kd(e){pu!==e&&(pu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pu===e&&(pu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(qc(l||a)===null)continue;break}var i=yl(a);i!==null&&(e.splice(t,3),t-=3,Ro(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function $l(e){function t(d){return du(d,e)}ka!==null&&du(ka,e),Pa!==null&&du(Pa,e),Qa!==null&&du(Qa,e),Vn.forEach(t),Zn.forEach(t);for(var a=0;a<wa.length;a++){var l=wa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Vd(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[gt]||null;if(typeof i=="function")u||Kd(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[gt]||null)o=u.formAction;else if(qc(n)!==null)continue}else o=u.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Kd(a)}}}function Xd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Gc(e){this._internalRoot=e}mu.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=Dt();Gd(a,l,e,t,null,null)},mu.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gd(e.current,2,null,e,null,null),Xi(),t[hl]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ls();e={blockedOn:null,target:e,priority:t};for(var a=0;a<wa.length&&t!==0&&t<wa[a].priority;a++);wa.splice(a,0,e),a===0&&Vd(e)}};var Jd=r.version;if(Jd!=="19.2.8")throw Error(c(527,Jd,"19.2.8"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var Dg={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{ke=gu.inject(Dg),je=gu}catch{}}return Jn.createRoot=function(e,t){if(!v(e))throw Error(c(299));var a=!1,l="",n=tf,i=af,u=lf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=qd(e,1,!1,null,null,a,l,null,n,i,u,Xd),e[hl]=t.current,xc(e),new Gc(t)},Jn.hydrateRoot=function(e,t,a){if(!v(e))throw Error(c(299));var l=!1,n="",i=tf,u=af,o=lf,d=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=qd(e,1,!0,t,a??null,l,n,d,i,u,o,Xd),t.context=Ud(null),a=t.current,l=Dt(),l=Cu(l),n=Ca(l),n.callback=null,Ha(a,n,l),a=l,t.current.lanes=a,ln(t,a),Wt(t),e[hl]=t.current,xc(e),new mu(t)},Jn.version="19.2.8",Jn}var ip;function wg(){if(ip)return Qc.exports;ip=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Qc.exports=Qg(),Qc.exports}var Yg=wg();const rl={QUEEN:{type:"QUEEN",name:"Queen Bee",emoji:"🐝",description:"Moves 1 space per turn. Must be placed by turn 4. Game ends when a Queen is surrounded.",count:1},SPIDER:{type:"SPIDER",name:"Spider",emoji:"🕷️",description:"Moves exactly 3 spaces around the swarm perimeter without backtracking.",count:2},BEETLE:{type:"BEETLE",name:"Beetle",emoji:"🪲",description:"Moves 1 space on ground or climbs on top of adjacent pieces to pin them.",count:2},GRASSHOPPER:{type:"GRASSHOPPER",name:"Grasshopper",emoji:"🦗",description:"Jumps in a straight line over connected pieces to the first empty space.",count:3},SOLDIER_ANT:{type:"SOLDIER_ANT",name:"Soldier Ant",emoji:"🐜",description:"Moves any distance around the perimeter of the swarm.",count:3},MOSQUITO:{type:"MOSQUITO",name:"Mosquito",emoji:"🦟",description:"Copies movement ability of any adjacent piece touching it (acts like Beetle on top of swarm).",count:1,isExpansion:!0},LADYBUG:{type:"LADYBUG",name:"Ladybug",emoji:"🐞",description:"Moves exactly 3 spaces: 2 spaces on top of the swarm and 1 space down.",count:1,isExpansion:!0},PILLBUG:{type:"PILLBUG",name:"Pillbug",emoji:"🪳",description:"Moves 1 space OR picks up an adjacent unstacked piece and moves it to another adjacent empty space.",count:1,isExpansion:!0}};function te(s,r){return`${s},${r}`}const up={WELCOME:"tutorialWelcome",PLACE_QUEEN:"tutorialPlaceQueen",OPP_QUEEN:"tutorialOppQueen",PLACE_SPIDER:"tutorialPlaceSpider",OPP_SPIDER:"tutorialOppSpider",PLACE_BEETLE:"tutorialPlaceBeetle",OPP_BEETLE:"tutorialOppBeetle",PLACE_GRASSHOPPER:"tutorialPlaceGrasshopper",OPP_GRASSHOPPER:"tutorialOppGrasshopper",MOVE_EXAMPLE:"tutorialMoveExample",COMPLETE:"tutorialComplete"},sp=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function op(s,r){const h=sp[(r%6+6)%6];return{q:s.q+h.q,r:s.r+h.r}}function Pe(s){return sp.map(r=>({q:s.q+r.q,r:s.r+r.r}))}function $t(s,r){return s.q===r.q&&s.r===r.r}function rp(s,r){const h=Pe(s),c=Pe(r);return h.filter(v=>c.some(T=>$t(v,T)))}function Vg(s,r,h=42){const c=h*Math.sqrt(3)*(s+r/2),v=h*(3/2)*r;return{x:c,y:v}}function Zg(s,r,h=42){const c=[];for(let v=0;v<6;v++){const T=60*v-30,H=Math.PI/180*T,D=s+h*Math.cos(H),z=r+h*Math.sin(H);c.push(`${D.toFixed(2)},${z.toFixed(2)}`)}return c.join(" ")}function Fn(s){const r=new Map;return s.forEach((h,c)=>{r.set(c,[...h])}),r}function dl(s,r){const h=s.get(te(r.q,r.r));return!h||h.length===0?null:h[h.length-1]}function ba(s,r){const h=s.get(te(r.q,r.r));return h?h.length:0}function dt(s,r){return ba(s,r)>0}function Su(s){const r=[];return s.forEach((h,c)=>{if(h.length>0){const[v,T]=c.split(",").map(Number);r.push({q:v,r:T})}}),r}function fl(s,r){for(const h of s.values())for(const c of h)if(c.player===r&&c.type==="QUEEN")return!0;return!1}function vu(s,r){for(const[h,c]of s.entries())for(const v of c)if(v.player===r&&v.type==="QUEEN"){const[T,H]=h.split(",").map(Number);return{q:T,r:H}}return null}function Kg(s){const r=Su(s);if(r.length<=1)return!0;const h=new Set,c=[r[0]];for(h.add(te(r[0].q,r[0].r));c.length>0;){const v=c.shift(),T=Pe(v);for(const H of T){const D=te(H.q,H.r);dt(s,H)&&!h.has(D)&&(h.add(D),c.push(H))}}return h.size===r.length}function fp(s,r){const h=s.get(te(r.q,r.r));if(!h||h.length===0)return!1;if(h.length>1)return!0;const c=Fn(s);return c.delete(te(r.q,r.r)),Kg(c)}function In(s,r,h,c=0){const v=rp(r,h);if(v.length!==2)return!1;const T=ba(s,v[0]),H=ba(s,v[1]),D=Math.max(c,ba(s,r)-1,ba(s,h));return!(T>D&&H>D)}function Au(s,r,h,c=!0){if(dt(s,h)||!In(s,r,h,0))return!1;const v=Fn(s),T=v.get(te(r.q,r.r));return T&&(T.length===1?v.delete(te(r.q,r.r)):T.pop()),Pe(h).some(z=>dt(v,z))}function Xc(s,r,h){const c=Su(s);if(c.length===0)return[{q:0,r:0}];if(c.length===1)return Pe(c[0]);const v=new Set,T=[];for(const H of c)for(const D of Pe(H))dt(s,D)||v.add(te(D.q,D.r));for(const H of v){const[D,z]=H.split(",").map(Number),p={q:D,r:z},B=Pe(p);let A=!1,q=!1;for(const k of B){const w=dl(s,k);w&&(w.player===r?A=!0:q=!0)}A&&!q&&T.push(p)}return T}function dp(s,r,h,c,v=null,T={mosquito:!0,ladybug:!0,pillbug:!0}){if(!fl(s,h))return[];const H=s.get(te(r.q,r.r));if(!H||H.length===0)return[];const D=H[H.length-1];if(D.player!==h)return[];if(D.id===v)return[];if(!fp(s,r))return[];const z=Wc(s,r,D),p=new Set,B=Fn(s),A=B.get(te(r.q,r.r));A&&(A.length>1?A.pop():B.delete(te(r.q,r.r)));for(const q of z){const k=Xg(s,r,q);for(const w of k)Pe(w).some(P=>dt(B,P))&&p.add(te(w.q,w.r))}return Array.from(p).map(q=>{const[k,w]=q.split(",").map(Number);return{q:k,r:w}})}function Wc(s,r,h,c){if(h.type!=="MOSQUITO")return[h.type];if(ba(s,r)>1)return["BEETLE"];const T=new Set,H=Pe(r);for(const D of H){const z=dl(s,D);z&&(z.type==="MOSQUITO"||T.add(z.type))}return T.size===0?[]:Array.from(T)}function Xg(s,r,h,c){switch(h){case"QUEEN":return pp(s,r);case"SPIDER":return Jg(s,r);case"BEETLE":return Ig(s,r);case"GRASSHOPPER":return Fg(s,r);case"SOLDIER_ANT":return Wg(s,r);case"LADYBUG":return $g(s,r);case"PILLBUG":return eh(s,r);default:return[]}}function pp(s,r){return Pe(r).filter(c=>Au(s,r,c))}function Jg(s,r){const h=[];function c(D,z,p){if(z===3){h.push(D);return}const B=Pe(D);for(const A of B){const q=te(A.q,A.r);if(!p.has(q)&&Au(s,D,A)){const k=new Set(p);k.add(q),c(A,z+1,k)}}}const v=new Set([te(r.q,r.r)]);c(r,0,v);const T=new Set,H=[];for(const D of h){const z=te(D.q,D.r);T.has(z)||(T.add(z),H.push(D))}return H}function Ig(s,r){const h=Pe(r),c=[],v=ba(s,r);for(const T of h){const H=ba(s,T);if(H>=1||v>1){const D=Math.max(v-1,H);In(s,r,T,D)&&c.push(T)}else Au(s,r,T)&&c.push(T)}return c}function Fg(s,r){const h=[];for(let c=0;c<6;c++){let v=op(r,c),T=0;for(;dt(s,v);)T++,v=op(v,c);T>0&&h.push(v)}return h}function Wg(s,r){const h=new Set([te(r.q,r.r)]),c=[r];for(;c.length>0;){const v=c.shift(),T=Pe(v);for(const H of T){const D=te(H.q,H.r);h.has(D)||Au(s,v,H)&&(h.add(D),c.push(H))}}return h.delete(te(r.q,r.r)),Array.from(h).map(v=>{const[T,H]=v.split(",").map(Number);return{q:T,r:H}})}function $g(s,r){const h=new Set,c=Pe(r).filter(v=>dt(s,v)&&In(s,r,v,0));for(const v of c){const T=Pe(v).filter(H=>!$t(H,r)&&dt(s,H)&&In(s,v,H,1));for(const H of T){const D=Pe(H).filter(z=>!$t(z,v)&&!dt(s,z)&&In(s,H,z,0));for(const z of D)h.add(te(z.q,z.r))}}return Array.from(h).map(v=>{const[T,H]=v.split(",").map(Number);return{q:T,r:H}})}function eh(s,r){return pp(s,r)}function mp(s,r,h,c=null){if(!fl(s,h))return[];const v=s.get(te(r.q,r.r));if(!v||v.length===0)return[];if(v[v.length-1].id===c)return[];const H=Pe(r),D=H.filter(p=>!dt(s,p));if(D.length===0)return[];const z=[];for(const p of H)if(dt(s,p)){const B=s.get(te(p.q,p.r));if(B.length===1){const A=B[0];if(A.id===c||!fp(s,p))continue;const q=D.filter(k=>!rp(p,k).filter(ne=>!$t(ne,r)).some(ne=>ba(s,ne)>=2));q.length>0&&z.push({targetHex:p,piece:A,destinationHexes:q})}}return z}function yu(s,r,h,c,v=null,T={mosquito:!0,ladybug:!0,pillbug:!0}){const H=[],D=fl(s,r),z=Xc(s,r);if(c>=4&&!D){const p=h.find(B=>B.type==="QUEEN");if(p)for(const B of z)H.push({type:"PLACE",pieceId:p.id,bugType:"QUEEN",player:r,toHex:B});return H}if(z.length>0&&h.length>0){const p=new Set,B=new Map;for(const A of h)p.has(A.type)||(p.add(A.type),B.set(A.type,A));for(const[A,q]of B.entries())for(const k of z)H.push({type:"PLACE",pieceId:q.id,bugType:A,player:r,toHex:k})}if(D){const p=Su(s);for(const B of p){const A=dl(s,B);if(A&&A.player===r){const q=dp(s,B,r,c,v,T);for(const w of q)H.push({type:"MOVE",pieceId:A.id,bugType:A.type,player:r,fromHex:B,toHex:w});if(Wc(s,B,A).includes("PILLBUG")){const w=mp(s,B,r,v);for(const P of w)for(const ne of P.destinationHexes)H.push({type:"PILLBUG_SPECIAL",pieceId:A.id,bugType:A.type,player:r,fromHex:B,pillbugTargetHex:P.targetHex,toHex:ne})}}}}return H}function Tu(s){const r=vu(s,1),h=vu(s,2);let c=0,v=0;r&&(c=Pe(r).filter(z=>dt(s,z)).length),h&&(v=Pe(h).filter(z=>dt(s,z)).length);const T=c===6,H=v===6;return T&&H?{isGameOver:!0,winner:"DRAW",p1QueenSurroundedCount:c,p2QueenSurroundedCount:v}:T?{isGameOver:!0,winner:2,p1QueenSurroundedCount:c,p2QueenSurroundedCount:v}:H?{isGameOver:!0,winner:1,p1QueenSurroundedCount:c,p2QueenSurroundedCount:v}:{isGameOver:!1,winner:null,p1QueenSurroundedCount:c,p2QueenSurroundedCount:v}}function th(s,r,h,c,v,T,H,D=null,z={mosquito:!0,ladybug:!0,pillbug:!0}){const p=yu(s,r,h,v,D,z);return p.length===0?null:H==="EASY"?ah(s,r,p,v):H==="MEDIUM"?lh(s,r,h,c,v,T,p):nh(s,r,h,c,v,T,p,D,z)}function ah(s,r,h,c){if(!fl(s,r)&&c>=3){const v=h.filter(T=>T.bugType==="QUEEN");if(v.length>0)return v[Math.floor(Math.random()*v.length)]}return h[Math.floor(Math.random()*h.length)]}function lh(s,r,h,c,v,T,H,D,z){let p=-1/0,B=[];for(const A of H){const{nextBoard:q,nextAIReserve:k,nextHumanReserve:w}=bu(s,A,r,h,c),P=gp(q,r,k,w,v,T);P>p+1e-9?(p=P,B=[A]):Math.abs(P-p)<=1e-9&&B.push(A)}return B[Math.floor(Math.random()*B.length)]}function nh(s,r,h,c,v,T,H,D,z){let A=-1/0,q=1/0,k=-1/0,w=H[0];for(const P of H){const{nextBoard:ne,nextAIReserve:F,nextHumanReserve:Ae}=bu(s,P,r,h,c),xe=Tu(ne);if(xe.isGameOver){if(xe.winner===r)return P;continue}const Ne=hu(ne,1,A,q,!1,r,1,F,Ae,v+1,T,Jc(s,P),z);Ne>k&&(k=Ne,w=P),A=Math.max(A,k)}return w}function hu(s,r,h,c,v,T,H,D,z,p,B,A,q){const k=Tu(s);if(k.isGameOver)return k.winner===T?1e4:k.winner===H?-1e4:0;if(r===0)return gp(s,T,D,z,p,B);const F=yu(s,v?T:H,v?D:z,v?p:B,A,q);if(F.length===0)return hu(s,r-1,h,c,!v,T,H,D,z,v?p+1:p,v?B:B+1,A,q);if(v){let Ae=-1/0;for(const xe of F){const{nextBoard:Ne,nextAIReserve:Be,nextHumanReserve:Re}=bu(s,xe,T,D,z),X=hu(Ne,r-1,h,c,!1,T,H,Be,Re,p+1,B,Jc(s,xe),q);if(Ae=Math.max(Ae,X),h=Math.max(h,X),c<=h)break}return Ae}else{let Ae=1/0;for(const xe of F){const{nextBoard:Ne,nextAIReserve:Be,nextHumanReserve:Re}=bu(s,xe,H,D,z),X=hu(Ne,r-1,h,c,!0,T,H,Be,Re,p,B+1,Jc(s,xe),q);if(Ae=Math.min(Ae,X),c=Math.min(c,X),c<=h)break}return Ae}}function gp(s,r,h,c,v,T,H){const z=Tu(s);if(z.isGameOver)return z.winner===r?1e4:z.winner===1?-1e4:0;const p=vu(s,r),B=vu(s,1);let A=0;if(B){const k=Pe(B),w=k.filter(ne=>{var F;return((F=dl(s,ne))==null?void 0:F.player)===r}).length,P=k.filter(ne=>dt(s,ne)).length;A+=w*220,A+=(P-w)*50,P>=3&&(A+=100),P>=4&&(A+=200),P===5&&(A+=500)}else A+=T>=3?30:10;if(p){const k=Pe(p),w=k.filter(F=>{var Ae;return((Ae=dl(s,F))==null?void 0:Ae.player)===1}).length,P=k.filter(F=>dt(s,F)).length,ne=P-w;A-=w*180,P>=4&&(A-=250),P===5&&(A-=400),A+=ne*15}else A-=v>=3?60:15;A+=h.length*20,A-=c.length*20;const q=Su(s);for(const k of q){const w=s.get(te(k.q,k.r));if(w.length>1){const P=w[w.length-1],ne=w[w.length-2];P.player===r&&ne.player===1?(A+=80,ne.type==="QUEEN"&&(A+=200)):P.player===1&&ne.player===r&&(A-=90,ne.type==="QUEEN"&&(A-=250))}}return A}function Jc(s,r){var h;return r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex?((h=dl(s,r.pillbugTargetHex))==null?void 0:h.id)??r.pieceId:r.pieceId}function bu(s,r,h,c,v){const T=Fn(s);let H=c,D=v;if(r.type==="PLACE"){c.some(A=>A.id===r.pieceId)?H=c.filter(A=>A.id!==r.pieceId):D=v.filter(A=>A.id!==r.pieceId);const z={id:r.pieceId,type:r.bugType,player:h},p=te(r.toHex.q,r.toHex.r),B=T.get(p)||[];T.set(p,[...B,z])}else if(r.type==="MOVE"){if(r.fromHex){const z=te(r.fromHex.q,r.fromHex.r),p=T.get(z)||[],B=p.pop();if(p.length===0&&T.delete(z),B){const A=te(r.toHex.q,r.toHex.r),q=T.get(A)||[];T.set(A,[...q,B])}}}else if(r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex){const z=te(r.pillbugTargetHex.q,r.pillbugTargetHex.r),p=T.get(z)||[],B=p.pop();if(p.length===0&&T.delete(z),B){const A=te(r.toHex.q,r.toHex.r),q=T.get(A)||[];T.set(A,[...q,B])}}return{nextBoard:T,nextAIReserve:H,nextHumanReserve:D}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uh=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,h,c)=>c?c.toUpperCase():h.toLowerCase()),cp=s=>{const r=uh(s);return r.charAt(0).toUpperCase()+r.slice(1)},hp=(...s)=>s.filter((r,h,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===h).join(" ").trim(),oh=s=>{for(const r in s)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ch={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=K.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:h=2,absoluteStrokeWidth:c,className:v="",children:T,iconNode:H,...D},z)=>K.createElement("svg",{ref:z,...ch,width:r,height:r,stroke:s,strokeWidth:c?Number(h)*24/Number(r):h,className:hp("lucide",v),...!T&&!oh(D)&&{"aria-hidden":"true"},...D},[...H.map(([p,B])=>K.createElement(p,B)),...Array.isArray(T)?T:[T]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(s,r)=>{const h=K.forwardRef(({className:c,...v},T)=>K.createElement(sh,{ref:T,iconNode:r,className:hp(`lucide-${ih(cp(s))}`,`lucide-${s}`,c),...v}));return h.displayName=cp(s),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],fh=Ue("book-open",rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ph=Ue("bot",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gh=Ue("check",mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],vh=Ue("chevron-down",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],bh=Ue("chevron-up",yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],vp=Ue("circle-alert",xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],yp=Ue("code-xml",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Th=Ue("copy",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mh=Ue("download",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Ic=Ue("graduation-cap",zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Ch=Ue("history",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Nh=Ue("maximize-2",Hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Bh=Ue("move",jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Lh=Ue("play",Dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Rh=Ue("refresh-cw",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Uh=Ue("rotate-ccw",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kh=Ue("settings",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Qh=Ue("skip-forward",Ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Yh=Ue("sparkles",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Zh=Ue("trophy",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Xh=Ue("users",Kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bp=Ue("x",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Fh=Ue("zoom-in",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],$h=Ue("zoom-out",Wh),ev={appTitle:{en:"BUGZ",es:"BUGZ",pt:"BUGZ",fr:"BUGZ",de:"BUGZ",ja:"BUGZ",zh:"BUGZ"},appSubtitle:{en:"Strategy",es:"Estrategia",pt:"Estratégia",fr:"Stratégie",de:"Strategie",ja:"ストラテジー",zh:"战略"},vsAi:{en:"VS AI ({diff})",es:"VS IA ({diff})",pt:"VS IA ({diff})",fr:"VS IA ({diff})",de:"Gegen KI ({diff})",ja:"AIと対戦 ({diff})",zh:"对战AI（{diff}）"},passAndPlay:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},aiThinking:{en:"AI Thinking...",es:"IA pensando…",pt:"IA pensando…",fr:"L’IA réfléchit…",de:"KI denkt…",ja:"AI思考中…",zh:"AI思考中…"},playersTurn:{en:"Player {n}'s Turn ({color})",es:"Turno del Jugador {n} ({color})",pt:"Vez do Jogador {n} ({color})",fr:"Tour du Joueur {n} ({color})",de:"Spieler {n} am Zug ({color})",ja:"プレイヤー{n}の番（{color}）",zh:"玩家{n}的回合（{color}）"},white:{en:"White",es:"Blanco",pt:"Branco",fr:"Blanc",de:"Weiß",ja:"白",zh:"白"},black:{en:"Black",es:"Negro",pt:"Preto",fr:"Noir",de:"Schwarz",ja:"黒",zh:"黑"},undoTitle:{en:"Undo Move (Unlimited Step Rewind)",es:"Deshacer movimiento (rebobinado ilimitado)",pt:"Desfazer movimento (rebobinar ilimitado)",fr:"Annuler le coup (retour illimité)",de:"Zug rückgängig (unbegrenztes Zurückspulen)",ja:"手を戻す（無制限リプレイ）",zh:"撤销一步（无限回退）"},newGameTitle:{en:"New Game / Match Settings",es:"Nueva partida / Configuración",pt:"Nova partida / Configurações",fr:"Nouvelle partie / Paramètres",de:"Neues Spiel / Einstellungen",ja:"新規ゲーム / 設定",zh:"新游戏 / 设置"},kotlinTitle:{en:"View & Export Android Kotlin Compose Code",es:"Ver y exportar el código Kotlin Compose",pt:"Ver e exportar o código Kotlin Compose",fr:"Voir et exporter le code Kotlin Compose",de:"Kotlin-Compose-Code ansehen & exportieren",ja:"Kotlin Composeコードの表示と出力",zh:"查看并导出Kotlin Compose代码"},kotlinSource:{en:"Kotlin Source",es:"Código Kotlin",pt:"Código Kotlin",fr:"Code Kotlin",de:"Kotlin-Quellcode",ja:"Kotlinソース",zh:"Kotlin源码"},toastForcedPass:{en:"Player {n} has no legal moves available. Turn passed!",es:"El Jugador {n} no tiene movimientos legales. ¡Turno pasado!",pt:"O Jogador {n} não tem movimentos legais. Turno passado!",fr:"Le Joueur {n} n’a aucun coup légal. Tour passé !",de:"Spieler {n} hat keine legalen Züge. Zug übersprungen!",ja:"プレイヤー{n}は合法手がありません。パスしました！",zh:"玩家{n}没有合法走法。跳过回合！"},toastAiPass:{en:"AI (Player 2) has no valid moves. Turn passed!",es:"La IA (Jugador 2) no tiene movimientos válidos. ¡Turno pasado!",pt:"A IA (Jogador 2) não tem movimentos válidos. Turno passado!",fr:"L’IA (Joueur 2) n’a aucun coup valide. Tour passé !",de:"Die KI (Spieler 2) hat keine gültigen Züge. Zug übersprungen!",ja:"AI（プレイヤー2）は有効な手がありません。パスしました！",zh:"AI（玩家2）没有有效走法。跳过回合！"},passLogDesc:{en:"Player {n} was forced to pass turn.",es:"El Jugador {n} se vio obligado a pasar.",pt:"O Jogador {n} foi obrigado a passar.",fr:"Le Joueur {n} a été forcé de passer.",de:"Spieler {n} musste den Zug aussetzen.",ja:"プレイヤー{n}はパスを余儀なくされました。",zh:"玩家{n}被迫跳过回合。"},placedDesc:{en:"Placed {bug} at ({q}, {r})",es:"Colocó {bug} en ({q}, {r})",pt:"Colocou {bug} em ({q}, {r})",fr:"A placé {bug} en ({q}, {r})",de:"{bug} bei ({q}, {r}) platziert",ja:"{bug} を ({q}, {r}) に配置",zh:"将{bug}放置在({q}, {r})"},movedDesc:{en:"Moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"Movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"Moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"A déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"{bug} von ({q1}, {r1}) nach ({q2}, {r2}) bewegt",ja:"{bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"将{bug}从({q1}, {r1})移动到({q2}, {r2})"},pillbugMovedDesc:{en:"Pillbug moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"La cochinilla movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"A bicho-bola moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"Le cloporte a déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"Assel bewegt {bug} von ({q1}, {r1}) nach ({q2}, {r2})",ja:"ダンゴムシが {bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"潮虫将{bug}从({q1}, {r1})移动到({q2}, {r2})"},zoomIn:{en:"Zoom In",es:"Acercar",pt:"Aproximar",fr:"Zoom avant",de:"Vergrößern",ja:"拡大",zh:"放大"},zoomOut:{en:"Zoom Out",es:"Alejar",pt:"Afastar",fr:"Zoom arrière",de:"Verkleinern",ja:"縮小",zh:"缩小"},recenter:{en:"Recenter Board",es:"Centrar tablero",pt:"Centralizar tabuleiro",fr:"Recentrer le plateau",de:"Brett zentrieren",ja:"盤面を中央に",zh:"居中棋盘"},panHint:{en:"Drag canvas to pan • Scroll to zoom",es:"Arrastra para mover • Rueda para zoom",pt:"Arraste para mover • Role para zoom",fr:"Faites glisser pour déplacer • Molette pour zoomer",de:"Ziehen zum Verschieben • Scrollen zum Zoomen",ja:"ドラッグで移動 • スクロールでズーム",zh:"拖动画布平移 • 滚动缩放"},setupSubtitle:{en:"Configure your match mode, AI strength, and expansion pieces.",es:"Configura el modo de partida, la fuerza de la IA y las piezas de expansión.",pt:"Configure o modo de partida, a força da IA e as peças de expansão.",fr:"Configurez le mode de partie, la force de l’IA et les pièces d’extension.",de:"Konfiguriere Spielmodus, KI-Stärke und Erweiterungspieces.",ja:"対戦モード、AIの強さ、拡張ピースを設定します。",zh:"设置对战模式、AI强度和扩展棋子。"},gameModeLabel:{en:"Game Mode",es:"Modo de juego",pt:"Modo de jogo",fr:"Mode de jeu",de:"Spielmodus",ja:"ゲームモード",zh:"游戏模式"},passPlayBtn:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},vsAiBtn:{en:"VS AI Engine",es:"VS Motor IA",pt:"VS Motor IA",fr:"VS Moteur IA",de:"Gegen KI-Engine",ja:"AIエンジンと対戦",zh:"对战AI引擎"},aiDifficultyLabel:{en:"AI Difficulty",es:"Dificultad de la IA",pt:"Dificuldade da IA",fr:"Difficulté de l’IA",de:"KI-Schwierigkeit",ja:"AIの難易度",zh:"AI难度"},easyBtn:{en:"Easy",es:"Fácil",pt:"Fácil",fr:"Facile",de:"Leicht",ja:"かんたん",zh:"简单"},mediumBtn:{en:"Medium",es:"Medio",pt:"Médio",fr:"Moyen",de:"Mittel",ja:"ふつう",zh:"中等"},hardBtn:{en:"Hard (Minimax)",es:"Difícil (Minimax)",pt:"Difícil (Minimax)",fr:"Difficile (Minimax)",de:"Schwer (Minimax)",ja:"むずかしい（Minimax）",zh:"困难（Minimax）"},expansionsLabel:{en:"Expansions",es:"Expansiones",pt:"Expansões",fr:"Extensions",de:"Erweiterungen",ja:"拡張",zh:"扩展"},mosquitoLabel:{en:"🦟 The Mosquito",es:"🦟 El mosquito",pt:"🦟 O pernilongo",fr:"🦟 Le moustique",de:"🦟 Die Mücke",ja:"🦟 蚊",zh:"🦟 蚊子"},ladybugLabel:{en:"🐞 The Ladybug",es:"🐞 La mariquita",pt:"🐞 A joaninha",fr:"🐞 La coccinelle",de:"🐞 Der Marienkäfer",ja:"🐞 テントウムシ",zh:"🐞 瓢虫"},pillbugLabel:{en:"💊 The Pillbug",es:"💊 La cochinilla",pt:"💊 O bicho-bola",fr:"💊 Le cloporte",de:"💊 Die Assel",ja:"💊 ダンゴムシ",zh:"💊 潮虫"},cancel:{en:"Cancel",es:"Cancelar",pt:"Cancelar",fr:"Annuler",de:"Abbrechen",ja:"キャンセル",zh:"取消"},startGame:{en:"Start Game",es:"Comenzar",pt:"Começar",fr:"Commencer",de:"Start",ja:"開始",zh:"开始游戏"},learnToPlay:{en:"Learn to Play",es:"Aprende a jugar",pt:"Aprenda a jogar",fr:"Apprendre à jouer",de:"Lernen zu spielen",ja:"遊び方を学ぶ",zh:"学习玩法"},playerLabel:{en:"Player {n} ({color})",es:"Jugador {n} ({color})",pt:"Jogador {n} ({color})",fr:"Joueur {n} ({color})",de:"Spieler {n} ({color})",ja:"プレイヤー{n}（{color}）",zh:"玩家{n}（{color}）"},reserveCount:{en:"Reserve ({n})",es:"Reserva ({n})",pt:"Reserva ({n})",fr:"Réserve ({n})",de:"Reserve ({n})",ja:"リザーブ（{n}）",zh:"后备（{n}）"},turn4Warning:{en:"Turn 4 Mandatory: You MUST place your Queen Bee!",es:"Turno 4 obligatorio: ¡Debes colocar tu abeja reina!",pt:"Turno 4 obrigatório: Você DEVE colocar sua abelha rainha!",fr:"Tour 4 obligatoire : vous DEVEZ placer votre reine !",de:"Pflichtzug 4: Du MUSST deine Bienenkönigin platzieren!",ja:"4手目必須: 女王バチを配置しなければなりません！",zh:"第4回合强制：你必须放置蜂后！"},moveHistory:{en:"Move History ({n})",es:"Historial de movimientos ({n})",pt:"Histórico de movimentos ({n})",fr:"Historique des coups ({n})",de:"Zugverlauf ({n})",ja:"手番履歴（{n}）",zh:"走法历史（{n}）"},noMoves:{en:"No moves recorded yet.",es:"Aún no hay movimientos.",pt:"Nenhum movimento registrado ainda.",fr:"Aucun coup enregistré pour l’instant.",de:"Noch keine Züge aufgezeichnet.",ja:"まだ手は記録されていません。",zh:"暂无走法记录。"},drawTitle:{en:"🤝 Mutual Draw!",es:"🤝 ¡Empate mutuo!",pt:"🤝 Empate mútuo!",fr:"🤝 Égalité mutuelle !",de:"🤝 Unentschieden!",ja:"🤝 引き分け！",zh:"🤝 平局！"},p1WinTitle:{en:"🎉 Player 1 (White) Wins!",es:"🎉 ¡Gana el Jugador 1 (Blanco)!",pt:"🎉 O Jogador 1 (Branco) venceu!",fr:"🎉 Le Joueur 1 (Blanc) gagne !",de:"🎉 Spieler 1 (Weiß) gewinnt!",ja:"🎉 プレイヤー1（白）の勝利！",zh:"🎉 玩家1（白）获胜！"},p2WinTitle:{en:"🎉 Player 2 (Black) Wins!",es:"🎉 ¡Gana el Jugador 2 (Negro)!",pt:"🎉 O Jogador 2 (Preto) venceu!",fr:"🎉 Le Joueur 2 (Noir) gagne !",de:"🎉 Spieler 2 (Schwarz) gewinnt!",ja:"🎉 プレイヤー2（黒）の勝利！",zh:"🎉 玩家2（黑）获胜！"},drawDesc:{en:"Both Queen Bees were completely surrounded simultaneously!",es:"¡Ambas abejas reinas quedaron completamente rodeadas a la vez!",pt:"As duas abelhas rainhas foram completamente cercadas ao mesmo tempo!",fr:"Les deux reines ont été entièrement encerclées en même temps !",de:"Beide Bienenköniginnen wurden gleichzeitig vollständig eingekreist!",ja:"両方の女王バチが同時に完全に囲まれました！",zh:"两只蜂后同时被完全围住！"},winDesc:{en:"The opposing Queen Bee has been completely surrounded on all 6 sides!",es:"¡La abeja reina rival quedó completamente rodeada por los 6 lados!",pt:"A abelha rainha adversária foi completamente cercada nos 6 lados!",fr:"La reine adverse a été entièrement encerclée sur ses 6 côtés !",de:"Die gegnerische Bienenkönigin wurde auf allen 6 Seiten vollständig eingekreist!",ja:"相手の女王バチが6方向すべてを囲まれました！",zh:"对手的蜂后已被六面全部围住！"},playAgain:{en:"Play Again",es:"Jugar de nuevo",pt:"Jogar de novo",fr:"Rejouer",de:"Nochmal spielen",ja:"もう一度プレイ",zh:"再来一局"},matchOptions:{en:"Match Options / Difficulty",es:"Opciones / Dificultad",pt:"Opções / Dificuldade",fr:"Options / Difficulté",de:"Optionen / Schwierigkeit",ja:"対戦設定 / 難易度",zh:"对局选项 / 难度"},rulesTitle:{en:"How to Play Bugz",es:"Cómo jugar a Bugz",pt:"Como jogar Bugz",fr:"Comment jouer à Bugz",de:"So spielst du Bugz",ja:"Bugzの遊び方",zh:"如何玩Bugz"},close:{en:"Close",es:"Cerrar",pt:"Fechar",fr:"Fermer",de:"Schließen",ja:"閉じる",zh:"关闭"},goalTitle:{en:"🎯 Goal:",es:"🎯 Objetivo:",pt:"🎯 Objetivo:",fr:"🎯 Objectif :",de:"🎯 Ziel:",ja:"🎯 目的:",zh:"🎯 目标："},goalDesc:{en:"Surround the opponent's Queen Bee with pieces on all six sides. First to do so wins; both surrounded at once is a draw.",es:"Rodea la abeja reina del rival con piezas por los seis lados. El primero en lograrlo gana; si ambas quedan rodeadas a la vez, es empate.",pt:"Cerque a abelha rainha do oponente com peças em todos os seis lados. Quem conseguir primeiro vence; se ambas forem cercadas ao mesmo tempo, empata.",fr:"Encerclez la reine adverse avec des pièces sur les six côtés. Le premier à y parvenir gagne ; si les deux sont encerclées à la fois, c’est une égalité.",de:"Umschließe die Bienenkönigin des Gegners auf allen sechs Seiten. Wer das zuerst schafft, gewinnt; sind beide gleichzeitig eingekreist, ist es ein Unentschieden.",ja:"相手の女王バチの6方向すべてを自分の駒で囲みましょう。先に囲んだ方が勝ち。同時なら引き分けです。",zh:"用棋子将对手的蜂后六面围住。先完成者获胜；同时围住则为平局。"},coreRulesTitle:{en:"📜 Core Rules",es:"📜 Reglas básicas",pt:"📜 Regras básicas",fr:"📜 Règles de base",de:"📜 Grundregeln",ja:"📜 基本ルール",zh:"📜 基本规则"},coreRule1:{en:"Play one piece per turn (placement) or move one of your pieces.",es:"Coloca una pieza por turno o mueve una de tus piezas.",pt:"Jogue uma peça por turno (colocação) ou mova uma de suas peças.",fr:"Jouez une pièce par tour (placement) ou déplacez une de vos pièces.",de:"Setze pro Zug eine Kachel (Platzierung) oder bewege eine deiner Kacheln.",ja:"毎ターン1枚配置するか、自分の駒を1つ動かします。",zh:"每回合放置一枚棋子，或移动自己的一枚棋子。"},coreRule2:{en:"Your Queen Bee must be introduced by your 4th turn.",es:"Debes introducir tu abeja reina en tu 4º turno.",pt:"Sua abelha rainha deve ser introduzida até o seu 4º turno.",fr:"Votre reine doit être introduite avant votre 4e tour.",de:"Deine Bienenkönigin muss bis zu deinem 4. Zug eingeführt werden.",ja:"女王バチは4手目までに配置しなければなりません。",zh:"蜂后必须在你的第4回合之前上场。"},coreRule3:{en:"Your first piece is placed anywhere; later pieces must be placed adjacent to one of your pieces. Except for your second placement, pieces may not be placed touching an opponent's piece.",es:"Tu primera pieza se coloca en cualquier lugar; las siguientes deben ir adyacentes a una de tus piezas. Salvo la segunda colocación, no puedes colocar piezas tocando piezas del rival.",pt:"Sua primeira peça pode ser colocada em qualquer lugar; as seguintes devem ficar adjacentes a uma de suas peças. Exceto a segunda colocação, as peças não podem tocar peças do oponente.",fr:"Votre première pièce est placée n’importe où ; les suivantes doivent être adjacentes à une de vos pièces. Sauf pour la deuxième pose, vous ne pouvez pas poser une pièce touchant une pièce adverse.",de:"Deine erste Kachel platzierst du überall; spätere müssen an eine deiner Kacheln angrenzen. Außer bei deiner zweiten Platzierung dürfen Kacheln nicht gegnerische Kacheln berühren.",ja:"最初の1枚はどこにでも置けます。以降は自分の駒に隣接して置きます。2枚目の配置以外は、相手の駒に接する配置はできません。",zh:"第一枚棋子可放在任意位置；之后的棋子必须与自己的棋子相邻。除第二次放置外，棋子不能与对手棋子接触。"},coreRule4:{en:"The swarm must always stay connected. You may never move a piece that would split the Swarm, and you may not move a piece into a gap unless it still fits the freedom-to-move rule (no squeezing between stacked pieces).",es:"El enjambre debe permanecer siempre conectado. Nunca muevas una pieza que dividiría el enjambre, ni la metas en un hueco si no respeta la regla de libertad de movimiento (sin apretujones entre piezas apiladas).",pt:"O enxame deve permanecer sempre conectado. Nunca mova uma peça que dividiria o enxame, nem mova para um vão sem respeitar a regra de liberdade de movimento (sem apertar entre peças empilhadas).",fr:"L’essaim doit toujours rester connecté. Vous ne pouvez jamais déplacer une pièce qui diviserait l’essaim, ni la glisser dans un espace étroit (pas de glissement entre pièces empilées).",de:"Der Schwarm muss immer verbunden bleiben. Du darfst nie eine Kachel ziehen, die den Schwarm spaltet, und nicht in eine Lücke ziehen, es sei denn, es gilt die Bewegungsfreiheitsregel (kein Durchquetschen zwischen gestapelten Kacheln).",ja:"ハイブは常に繋がっていなければなりません。盤面を分断する動きはできず、積み上げた駒の隙間に入り込む動きも禁止です。",zh:"蜂群必须始终保持连通。不得移动会分裂蜂群的棋子，也不得将棋子挤入过窄的缝隙（不得在堆叠棋子之间挤入）。"},insectTitle:{en:"🦗 Insect Movements",es:"🦗 Movimientos de los insectos",pt:"🦗 Movimentos dos insetos",fr:"🦗 Déplacements des insectes",de:"🦗 Bewegungen der Insekten",ja:"🦗 昆虫の動き",zh:"🦗 昆虫的走法"},insectQueen:{en:"moves exactly 1 hex per turn.",es:"se mueve exactamente 1 hexágono por turno.",pt:"move exatamente 1 hexágono por turno.",fr:"se déplace d’exactement 1 hexagone par tour.",de:"zieht genau 1 Feld pro Zug.",ja:"毎ターンちょうど1マス移動します。",zh:"每回合恰好移动1格。"},insectSpider:{en:"crawls exactly 3 hexes along the outside edge, never retracing.",es:"se arrastra exactamente 3 hexágonos por el borde exterior, sin retroceder.",pt:"rasteja exatamente 3 hexágonos pela borda externa, sem retroceder.",fr:"se déplace d’exactement 3 hexagones le long du bord, sans jamais revenir en arrière.",de:"kriecht genau 3 Felder entlang der Außenkante, nie rückwärts.",ja:"外周に沿ってちょうど3マス移動し、後戻りはできません。",zh:"沿外围恰好爬行3格，不得折返。"},insectBeetle:{en:"moves 1 hex and can climb on top of other pieces (including a Queen) to block them; a beetle on top moves like a beetle over the stack.",es:"se mueve 1 hexágono y puede subir sobre otras piezas (incluida la reina) para bloquearlas; uno arriba se mueve como un escarabajo sobre la pila.",pt:"move 1 hexágono e pode subir sobre outras peças (inclusive a rainha) para bloqueá-las; um besouro no topo move-se como besouro sobre a pilha.",fr:"se déplace d’1 hexagone et peut grimper sur d’autres pièces (y compris la reine) pour les bloquer ; un scarabée en haut se déplace par-dessus la pile.",de:"zieht 1 Feld und kann auf andere Kacheln (auch die Königin) klettern, um sie zu blockieren; ein Käfer oben zieht über den Stapel.",ja:"1マス移動し、他の駒（女王バチを含む）の上に登って封鎖できます。上に乗ったカブトムシはスタックの上を移動します。",zh:"移动1格，可爬上其他棋子（包括蜂后）将其封锁；上方的甲虫可沿堆叠移动。"},insectGrasshopper:{en:"jumps in a straight line over at least one piece, landing on the first empty hex in that line.",es:"salta en línea recta sobre al menos una pieza y aterriza en el primer hexágono vacío de esa línea.",pt:"salta em linha reta sobre pelo menos uma peça, pousando no primeiro hexágono vazio da linha.",fr:"saute en ligne droite par-dessus au moins une pièce et atterrit sur le premier hexagone vide de la ligne.",de:"springt in einer geraden Linie über mindestens eine Kachel und landet auf dem ersten leeren Feld dieser Linie.",ja:"一直線に少なくとも1つの駒を飛び越え、その線上で最初の空きマスに着地します。",zh:"沿直线跳过至少一枚棋子，落在该线路上第一个空格。"},insectAnt:{en:"may slide any number of hexes along the outside of the Swarm.",es:"puede deslizarse cualquier cantidad de hexágonos por el exterior del enjambre.",pt:"pode deslizar qualquer número de hexágonos pela parte externa do enxame.",fr:"peut glisser d’un nombre quelconque d’hexagones le long de l’extérieur de l’essaim.",de:"kann beliebig viele Felder entlang der Außenseite des Schwarms gleiten.",ja:"ハイブの外周に沿って好きなだけ滑るように移動できます。",zh:"可沿蜂群外部滑动任意数量的格子。"},insectMosquito:{en:"copies the movement (or pillbug ability) of any piece it touches.",es:"copia el movimiento (o la habilidad de la cochinilla) de cualquier pieza que toque.",pt:"copia o movimento (ou a habilidade do bicho-bola) de qualquer peça que toque.",fr:"copie le déplacement (ou l’aptitude du cloporte) de toute pièce qu’il touche.",de:"kopiert die Bewegung (oder Assel-Fähigkeit) jeder Kachel, die es berührt.",ja:"接触している駒の移動（またはダンゴムシの能力）をコピーします。",zh:"复制与之接触的任何棋子的走法（或潮虫能力）。"},insectLadybug:{en:"moves exactly 2 hexes on top of the Swarm, then 1 hex back down to the board (may land on empty board hexes).",es:"se mueve exactamente 2 hexágonos sobre el enjambre y luego 1 hexágono hacia abajo al tablero (puede aterrizar en hexágonos vacíos).",pt:"move exatamente 2 hexágonos sobre o enxame e depois 1 hexágono de volta ao tabuleiro (pode pousar em hexágonos vazios).",fr:"se déplace d’exactement 2 hexagones par-dessus l’essaim, puis redescend d’1 hexagone sur le plateau (peut atterrir sur des cases vides).",de:"zieht genau 2 Felder über dem Schwarm und dann 1 Feld zurück auf das Brett (darf auf leere Felder landen).",ja:"ハイブの上をちょうど2マス移動し、その後1マス盤面に降ります（空きマスに着地可）。",zh:"在蜂群上方恰好移动2格，然后向下1格落回棋盘（可落在空棋盘格上）。"},insectPillbug:{en:"moves 1 space like the Queen Bee, or may pick up an adjacent unstacked piece (friend or foe) and place it in any empty space adjacent to it. The moved piece is stunned and cannot move on the opponent’s next turn.",es:"se mueve 1 espacio como la Abeja Reina, o puede levantar una pieza adyacente apilada (aliada o enemiga) y colocarla en cualquier espacio vacío adyacente. La pieza movida queda aturdida y no puede moverse en el siguiente turno del rival.",pt:"move-se 1 espaço como a Abelha Rainha, ou pode levantar uma peça adjacente não empilhada (aliada ou inimiga) e colocá-la em qualquer espaço vazio adjacente. A peça movida fica atordoada e não pode se mover no próximo turno do oponente.",fr:"se déplace de 1 case comme la Reine, ou peut soulever une pièce adjacente non empilée (alliée ou ennemie) et la placer dans n’importe quelle case vide adjacente. La pièce déplacée est étourdie et ne peut pas bouger au tour suivant de l’adversaire.",de:"zieht 1 Feld wie die Bienenkönigin oder darf eine benachbarte, nicht gestapelte Kachel (Feind oder Freund) aufheben und auf ein beliebiges benachbartes leeres Feld setzen. Die bewegte Kachel ist benommen und kann im nächsten Zug des Gegners nicht ziehen.",ja:"女王蜂のように1マス動くか、隣接する未スタックの駒（敵味方どちらでも）を持ち上げて、隣接する任意の空きマスに置けます。動かされた駒はスタンし、相手の次のターンは動けません。",zh:"像蜂后一样移动1格，或可拿起相邻未堆叠的棋子（敌我均可）放到其相邻的任意空位。被移动的棋子陷入眩晕，对手下一回合不能移动。"},codeTitle:{en:"Single-File Android Source Code",es:"Código fuente Android de un solo archivo",pt:"Código-fonte Android em arquivo único",fr:"Code source Android en un seul fichier",de:"Android-Quellcode in einer Datei",ja:"単一ファイルのAndroidソースコード",zh:"单文件Android源代码"},codeBadge:{en:"BugzApp.kt (Jetpack Compose)",es:"BugzApp.kt (Jetpack Compose)",pt:"BugzApp.kt (Jetpack Compose)",fr:"BugzApp.kt (Jetpack Compose)",de:"BugzApp.kt (Jetpack Compose)",ja:"BugzApp.kt (Jetpack Compose)",zh:"BugzApp.kt (Jetpack Compose)"},codeDesc:{en:"Complete Kotlin application logic, Compose canvas, AI minimax, and game loop.",es:"Lógica completa de la app en Kotlin, lienzo Compose, minimax de IA y bucle de juego.",pt:"Lógica completa do app em Kotlin, canvas Compose, minimax da IA e loop do jogo.",fr:"Logique complète de l’app en Kotlin, canevas Compose, minimax IA et boucle de jeu.",de:"Vollständige Kotlin-App-Logik, Compose-Canvas, KI-Minimax und Spielschleife.",ja:"完全なKotlinアプリロジック、Composeキャンバス、AIミニマックス、ゲームループ。",zh:"完整的Kotlin应用逻辑、Compose画布、AI极小化极大和游戏循环。"},copied:{en:"Copied!",es:"¡Copiado!",pt:"Copiado!",fr:"Copié !",de:"Kopiert!",ja:"コピーしました！",zh:"已复制！"},copyCode:{en:"Copy Code",es:"Copiar código",pt:"Copiar código",fr:"Copier le code",de:"Code kopieren",ja:"コードをコピー",zh:"复制代码"},downloadKt:{en:"Download .kt",es:"Descargar .kt",pt:"Baixar .kt",fr:"Télécharger .kt",de:".kt herunterladen",ja:".ktをダウンロード",zh:"下载.kt"},tutorialMode:{en:"🎓 Tutorial",es:"🎓 Tutorial",pt:"🎓 Tutorial",fr:"🎓 Tutoriel",de:"🎓 Tutorial",ja:"🎓 チュートリアル",zh:"🎓 教程"},tutorialWelcome:{en:"Welcome! This tutorial will teach you how to play Bugz. You'll learn placement, movement, and winning. Tap Next to begin!",es:"¡Bienvenido! Este tutorial te enseñará a jugar Bugz. Aprenderás colocación, movimiento y victoria. ¡Toca Siguiente para empezar!",pt:"Bem-vindo! Este tutorial vai te ensinar a jogar Bugz. Você vai aprender colocação, movimento e vitória. Toque em Próximo para começar!",fr:"Bienvenue ! Ce tutoriel vous apprendra à jouer à Bugz. Vous apprendrez le placement, le déplacement et la victoire. Appuyez sur Suivant !",de:"Willkommen! Dieses Tutorial bringt dir Bugz bei. Du lernst Platzierung, Bewegung und Sieg. Tippe auf Weiter!",ja:"ようこそ！このチュートリアルでBugzの遊び方を学びましょう。配置、移動、勝利条件を学びます。「次へ」をタップ！",zh:"欢迎！本教程将教你如何玩Bugz。你将学习放置、移动和获胜条件。点击「下一步」开始！"},tutorialNext:{en:"Next",es:"Siguiente",pt:"Próximo",fr:"Suivant",de:"Weiter",ja:"次へ",zh:"下一步"},tutorialSkip:{en:"Skip Tutorial",es:"Saltar tutorial",pt:"Pular tutorial",fr:"Passer le tutoriel",de:"Tutorial überspringen",ja:"チュートリアルをスキップ",zh:"跳过教程"},tutorialStepLabel:{en:"Step {n}:",es:"Paso {n}:",pt:"Passo {n}:",fr:"Étape {n} :",de:"Schritt {n}:",ja:"ステップ{n}:",zh:"第{n}步："},tutorialPlaceQueen:{en:"Tap the 🐝 Queen Bee in your reserve below, then tap any hex on the board to place her.",es:"Toca la 🐝 abeja reina en tu reserva abajo, luego toca cualquier hexágono para colocarla.",pt:"Toque na 🐝 abelha rainha na sua reserva abaixo, depois toque em qualquer hexágono para colocá-la.",fr:"Appuyez sur la 🐝 reine dans votre réserve ci-dessous, puis sur un hexagone pour la placer.",de:"Tippe auf die 🐝 Bienenkönigin in deiner Reserve unten, dann auf ein beliebiges Feld zum Platzieren.",ja:"下のリザーブから🐝女王バチをタップし、盤面のマスをタップして配置しましょう。",zh:"点击下方后备中的🐝蜂后，然后点击棋盘上的任意格子放置她。"},tutorialOppQueen:{en:"⏳ Opponent is placing their Queen Bee…",es:"⏳ El oponente está colocando su abeja reina…",pt:"⏳ O oponente está colocando a abelha rainha…",fr:"⏳ L'adversaire place sa reine…",de:"⏳ Gegner platziert seine Bienenkönigin…",ja:"⏳ 相手が女王バチを配置中…",zh:"⏳ 对手正在放置蜂后…"},tutorialPlaceSpider:{en:"Tap the 🕷️ Spider in your reserve, then tap a highlighted hex to place it. Spiders move exactly 3 spaces around the edge.",es:"Toca la 🕷️ araña en tu reserva, luego toca un hexágono resaltado para colocarla. Las arañas se mueven exactamente 3 espacios por el borde.",pt:"Toque na 🕷️ aranha na sua reserva, depois toque em um hexágono destacado para colocá-la. Aranhas se movem exatamente 3 espaços pela borda.",fr:"Appuyez sur l'🕷️ araignée dans votre réserve, puis sur un hexagone en surbrillance. Les araignées se déplacent d'exactement 3 cases sur le bord.",de:"Tippe auf die 🕷️ Spinne in deiner Reserve, dann auf ein hervorgehobenes Feld. Spinnen bewegen sich genau 3 Felder am Rand.",ja:"リザーブから🕷️クモをタップし、ハイライトされたマスに配置しましょう。クモは外周に沿って3マス移動します。",zh:"点击后备中的🕷️蜘蛛，然后点击高亮格子放置。蜘蛛沿外周恰好移动3格。"},tutorialOppSpider:{en:"⏳ Opponent is placing a Spider…",es:"⏳ El oponente está colocando una araña…",pt:"⏳ O oponente está colocando uma aranha…",fr:"⏳ L'adversaire place une araignée…",de:"⏳ Gegner platziert eine Spinne…",ja:"⏳ 相手がクモを配置中…",zh:"⏳ 对手正在放置蜘蛛…"},tutorialPlaceBeetle:{en:"Tap the 🪲 Beetle in your reserve, then tap a highlighted hex to place it. Beetles move 1 space and can climb on top of other pieces!",es:"Toca el 🪲 escarabajo en tu reserva, luego toca un hexágono resaltado para colocarlo. ¡Los escarabajos se mueven 1 espacio y pueden subir encima de otras piezas!",pt:"Toque no 🪲 besouro na sua reserva, depois toque em um hexágono destacado para colocá-lo. Os besouros se movem 1 espaço e podem subir em cima de outras peças!",fr:"Appuyez sur le 🪲 scarabée dans votre réserve, puis sur un hexagone en surbrillance. Les scarabées se déplacent d'1 case et peuvent grimper sur d'autres pièces !",de:"Tippe auf den 🪲 Käfer in deiner Reserve, dann auf ein hervorgehobenes Feld. Käfer bewegen sich 1 Feld und können auf andere Kacheln klettern!",ja:"リザーブから🪲カブトムシをタップし、ハイライトされたマスに配置しましょう。カブトムシは1マス移動し、他の駒の上に登れます！",zh:"点击后备中的🪲甲虫，然后点击高亮格子放置。甲虫移动1格，还能爬到其他棋子上面！"},tutorialOppBeetle:{en:"⏳ Opponent is placing a Beetle…",es:"⏳ El oponente está colocando un escarabajo…",pt:"⏳ O oponente está colocando um besouro…",fr:"⏳ L'adversaire place un scarabée…",de:"⏳ Gegner platziert einen Käfer…",ja:"⏳ 相手がカブトムシを配置中…",zh:"⏳ 对手正在放置甲虫…"},tutorialPlaceGrasshopper:{en:"Tap the 🦗 Grasshopper in your reserve, then tap a highlighted hex to place it. Grasshoppers jump in a straight line over pieces!",es:"Toca el 🦗 saltamontes en tu reserva, luego toca un hexágono resaltado para colocarlo. ¡Los saltamontes saltan en línea recta sobre las piezas!",pt:"Toque no 🦗 gafanhoto na sua reserva, depois toque em um hexágono destacado para colocá-lo. Gafanhotos pulam em linha reta sobre as peças!",fr:"Appuyez sur la 🦗 sauterelle dans votre réserve, puis sur un hexagone en surbrillance. Les sauterelles sautent en ligne droite par-dessus les pièces !",de:"Tippe auf den 🦗 Grashüpfer in deiner Reserve, dann auf ein hervorgehobenes Feld. Grashüpfer springen in gerader Linie über Kacheln!",ja:"リザーブから🦗バッタをタップし、ハイライトされたマスに配置しましょう。バッタは一直線に駒を飛び越えます！",zh:"点击后备中的🦗蚱蜢，然后点击高亮格子放置。蚱蜢沿直线跳过棋子！"},tutorialOppGrasshopper:{en:"⏳ Opponent is placing a Grasshopper…",es:"⏳ El oponente está colocando un saltamontes…",pt:"⏳ O oponente está colocando um gafanhoto…",fr:"⏳ L'adversaire place une sauterelle…",de:"⏳ Gegner platziert einen Grashüpfer…",ja:"⏳ 相手がバッタを配置中…",zh:"⏳ 对手正在放置蚱蜢…"},tutorialMoveExample:{en:"Now try moving! Tap one of your pieces on the board, then tap a highlighted hex to move it.",es:"¡Ahora intenta mover! Toca una de tus piezas en el tablero, luego toca un hexágono resaltado para moverla.",pt:"Agora tente mover! Toque em uma de suas peças no tabuleiro, depois toque em um hexágono destacado para movê-la.",fr:"Essayez de déplacer ! Appuyez sur une de vos pièces sur le plateau, puis sur un hexagone en surbrillance pour la déplacer.",de:"Versuche jetzt zu ziehen! Tippe auf eine deiner Kacheln auf dem Brett, dann auf ein hervorgehobenes Feld zum Bewegen.",ja:"移動してみましょう！盤面の自分の駒をタップし、ハイライトされたマスをタップして移動します。",zh:"现在试试移动！点击棋盘上你的棋子，然后点击高亮格子来移动它。"},tutorialComplete:{en:"🎉 Tutorial complete! You've learned the basics — placement, movement, and the goal. Keep playing to discover more strategies. Have fun!",es:"🎉 ¡Tutorial completo! Has aprendido lo básico — colocación, movimiento y el objetivo. Sigue jugando para descubrir más estrategias. ¡Diviértete!",pt:"🎉 Tutorial completo! Você aprendeu o básico — colocação, movimento e o objetivo. Continue jogando para descobrir mais estratégias. Divirta-se!",fr:"🎉 Tutoriel terminé ! Vous avez appris les bases — placement, déplacement et objectif. Continuez à jouer pour découvrir plus de stratégies. Amusez-vous !",de:"🎉 Tutorial abgeschlossen! Du hast die Grundlagen gelernt — Platzierung, Bewegung und Ziel. Spiele weiter, um mehr Strategien zu entdecken. Viel Spaß!",ja:"🎉 チュートリアル完了！基本を学びました — 配置、移動、目的。もっと戦略を見つけるために遊び続けましょう。楽しんで！",zh:"🎉 教程完成！你已经学会了基本操作——放置、移动和目标。继续游玩以探索更多策略。祝你玩得开心！"},tutorialGotIt:{en:"Got It — New Game",es:"Entendido — Nueva partida",pt:"Entendi — Nova partida",fr:"Compris — Nouvelle partie",de:"Verstanden — Neues Spiel",ja:"わかりました — 新規ゲーム",zh:"知道了 — 新游戏"}},xu=["en","es","pt","fr","de","ja","zh"],tv={en:"English",es:"Español",pt:"Português",fr:"Français",de:"Deutsch",ja:"日本語",zh:"中文"},xp="bugz-lang-v1";function av(){try{const s=localStorage.getItem(xp);if(s&&xu.includes(s))return s}catch{}return lv()}function lv(){try{const s=typeof navigator<"u"?navigator.languages??[navigator.language]:[];for(const r of s){const h=r.toLowerCase().replace(/_/g,"-");if(xu.includes(h))return h;const c=h.split("-")[0];if(xu.includes(c))return c}}catch{}return"en"}const Sp=K.createContext({lang:"en",setLang:()=>{},t:s=>String(s)}),nv=({children:s})=>{const[r,h]=K.useState(()=>av());K.useEffect(()=>{try{localStorage.setItem(xp,r)}catch{}},[r]);const c=(v,T)=>{const H=ev[v],D=H?H[r]??H.en:String(v);return T?D.replace(/\{(\w+)\}/g,(z,p)=>T[p]!==void 0?String(T[p]):`{${p}}`):D};return f.jsx(Sp.Provider,{value:{lang:r,setLang:h,t:c},children:s})};function xa(){return K.useContext(Sp)}const iv=({className:s=""})=>{const{lang:r,setLang:h}=xa();return f.jsx("select",{value:r,onChange:c=>h(c.target.value),"aria-label":"Language",className:`rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-slate-200 transition-colors hover:bg-slate-700 cursor-pointer ${s}`,children:xu.map(c=>f.jsx("option",{value:c,children:tv[c]},c))})},uv=({board:s,selectedHex:r,validDestinations:h,pillbugTargetHex:c,pillbugDestinations:v,onSelectHex:T,onSelectDestination:H,onSelectPillbugTarget:D,currentPlayer:z,isAITurn:p,lastMovedHex:B})=>{const{t:A}=xa(),q=K.useRef(null),[k,w]=K.useState(1),[P,ne]=K.useState({x:0,y:0}),[F,Ae]=K.useState(!1),[xe,Ne]=K.useState({x:0,y:0}),Be=42,Re=()=>{ne({x:0,y:0}),w(1)},X=G=>{G.preventDefault();const Ce=G.deltaY<0?1.1:.9;w(E=>Math.min(Math.max(E*Ce,.4),2.5))},Ge=G=>{G.button===0&&(Ae(!0),Ne({x:G.clientX-P.x,y:G.clientY-P.y}))},Ke=G=>{F&&ne({x:G.clientX-xe.x,y:G.clientY-xe.y})},st=()=>{Ae(!1)},pt=Array.from(s.keys()).map(G=>{const[Ce,E]=G.split(",").map(Number);return{q:Ce,r:E}}),ve=new Map;for(const G of pt){const Ce=te(G.q,G.r);ve.set(Ce,G);for(const E of Pe(G)){const _=te(E.q,E.r);ve.has(_)||ve.set(_,E)}}if(ve.size===0){const G={q:0,r:0};ve.set(te(0,0),G);for(const Ce of Pe(G))ve.set(te(Ce.q,Ce.r),Ce)}for(const G of h)ve.set(te(G.q,G.r),G);for(const G of v)ve.set(te(G.q,G.r),G);const At=Array.from(ve.values());return f.jsxs("div",{ref:q,className:"relative w-full h-full bg-slate-900 overflow-hidden select-none cursor-grab active:cursor-grabbing border border-slate-800 rounded-2xl shadow-inner",onWheel:X,onMouseDown:Ge,onMouseMove:Ke,onMouseUp:st,onMouseLeave:st,children:[f.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-2 rounded-xl shadow-lg",children:[f.jsx("button",{onClick:()=>w(G=>Math.min(G*1.2,2.5)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:A("zoomIn"),children:f.jsx(Fh,{className:"w-5 h-5"})}),f.jsx("button",{onClick:()=>w(G=>Math.max(G/1.2,.4)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:A("zoomOut"),children:f.jsx($h,{className:"w-5 h-5"})}),f.jsx("button",{onClick:Re,className:"p-2 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-lg transition-colors",title:A("recenter"),children:f.jsx(Nh,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"absolute top-4 left-4 z-10 pointer-events-none bg-slate-950/60 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 flex items-center gap-2",children:[f.jsx(Bh,{className:"w-3.5 h-3.5 text-amber-400 animate-pulse"}),f.jsx("span",{children:A("panHint")})]}),f.jsx("svg",{className:"w-full h-full pointer-events-auto",style:{touchAction:"none"},children:f.jsxs("g",{transform:`translate(${q.current?q.current.clientWidth/2+P.x:P.x}, ${q.current?q.current.clientHeight/2+P.y:P.y}) scale(${k})`,children:[f.jsxs("defs",{children:[f.jsxs("radialGradient",{id:"p1Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),f.jsx("stop",{offset:"100%",stopColor:"#f1f5f9"})]}),f.jsxs("radialGradient",{id:"p2Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#334155"}),f.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),f.jsxs("radialGradient",{id:"validGrad",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.8"})]}),f.jsxs("filter",{id:"glowGold",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[f.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),f.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),At.map(G=>{const Ce=te(G.q,G.r),{x:E,y:_}=Vg(G.q,G.r,Be),V=s.get(Ce)||[],ce=V.length>0,ae=ce?V[V.length-1]:null,m=V.length,C=r&&$t(r,G),R=h.some(Et=>$t(Et,G)),U=c&&$t(c,G),J=v.some(Et=>$t(Et,G)),W=(B==null?void 0:B.to)&&$t(B.to,G),ue=Zg(E,_,Be-2);let De="none",ge="#334155",Tt=1.5;return ce&&ae?ae.player===1?(De="url(#p1Gradient)",ge="#e2e8f0"):(De="url(#p2Gradient)",ge="#475569"):(R||J)&&(De="rgba(16, 185, 129, 0.15)",ge="#10b981",Tt=2.5),C?(ge="#f59e0b",Tt=4):U?(ge="#ec4899",Tt=3.5):W&&(ge="#3b82f6",Tt=3),f.jsxs("g",{className:"transition-all duration-200 cursor-pointer group",onClick:Et=>{Et.stopPropagation(),!p&&(J&&H||R&&H?H(G):ce&&(c&&D&&$t(c,G)?D(G):T(G)))},children:[f.jsx("polygon",{points:ue,fill:De,stroke:ge,strokeWidth:Tt,className:`${R||J?"animate-pulse hover:fill-emerald-500/30":""} ${C?"filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]":""}`}),(R||J)&&f.jsx("circle",{cx:E,cy:_,r:14,fill:"#10b981",className:"animate-ping opacity-75"}),ce&&ae&&f.jsxs(f.Fragment,{children:[f.jsx("text",{x:E,y:_+8,textAnchor:"middle",fontSize:26,className:"pointer-events-none select-none drop-shadow",children:rl[ae.type].emoji}),m>1&&f.jsxs("g",{transform:`translate(${E+14}, ${_-18})`,children:[f.jsx("circle",{r:10,fill:"#f59e0b",stroke:"#1e293b",strokeWidth:1.5}),f.jsx("text",{x:0,y:3.5,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:"#0f172a",children:m})]}),f.jsx("circle",{cx:E-16,cy:_-16,r:6,fill:ae.player===1?"#ffffff":"#0f172a",stroke:ae.player===1?"#cbd5e1":"#64748b",strokeWidth:1.5})]}),!ce&&(R||J)&&f.jsx("circle",{cx:E,cy:_,r:7,fill:"#10b981"}),f.jsxs("text",{x:E,y:_+(ce?28:4),textAnchor:"middle",fontSize:8,fill:"#64748b",className:"opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:[G.q,",",G.r]})]},Ce)})]})})]})},Zc=({player:s,reserve:r,isActive:h,selectedBugType:c,onSelectBugType:v,turnCount:T,queenPlaced:H})=>{const{t:D}=xa(),z=new Map;for(const B of r){const A=z.get(B.type)||[];A.push(B),z.set(B.type,A)}const p=T===4&&!H;return f.jsxs("div",{className:`p-4 rounded-2xl border transition-all duration-300 ${h?s===1?"bg-slate-800/90 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]":"bg-slate-900/90 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]":"bg-slate-900/50 border-slate-800/80 opacity-70"}`,children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full border ${s===1?"bg-white border-slate-300":"bg-slate-950 border-slate-600"}`}),f.jsx("h3",{className:"font-bold text-sm text-slate-100",children:D("playerLabel",{n:s,color:D(s===1?"white":"black")})})]}),f.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:D("reserveCount",{n:r.length})})]}),p&&h&&f.jsxs("div",{className:"mb-3 p-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-300 text-xs flex items-center gap-1.5 animate-bounce",children:[f.jsx(vp,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:D("turn4Warning")})]}),f.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-4 gap-2",children:Array.from(z.entries()).map(([B,A])=>{const q=rl[B],k=A.length,w=c===B,P=!h||k===0||p&&B!=="QUEEN";return f.jsxs("button",{onClick:()=>!P&&v(B),disabled:P,title:`${q.name}: ${q.description}`,className:`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${w?"bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-md":P?"bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-40 cursor-not-allowed":"bg-slate-800/60 border-slate-700/80 hover:bg-slate-700/80 text-slate-200 hover:border-slate-500 cursor-pointer"}`,children:[f.jsx("span",{className:"text-2xl mb-1 select-none",children:q.emoji}),f.jsx("span",{className:"text-[10px] font-semibold truncate max-w-full",children:q.name.split(" ")[0]}),f.jsxs("span",{className:`absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold border ${w?"bg-amber-500 text-slate-950 border-amber-300":"bg-slate-900 text-slate-300 border-slate-700"}`,children:["x",k]})]},B)})})]})},ov=({logs:s})=>{const{t:r}=xa(),[h,c]=K.useState(!1);return f.jsxs("div",{className:"bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all",children:[f.jsxs("button",{onClick:()=>c(!h),className:"w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Ch,{className:"w-4 h-4 text-amber-400"}),f.jsx("span",{children:r("moveHistory",{n:s.length})})]}),h?f.jsx(vh,{className:"w-4 h-4"}):f.jsx(bh,{className:"w-4 h-4"})]}),h&&f.jsx("div",{className:"max-h-48 overflow-y-auto p-3 divide-y divide-slate-800/60 text-xs text-slate-400",children:s.length===0?f.jsx("p",{className:"text-center italic py-2 text-slate-500",children:r("noMoves")}):[...s].reverse().map((v,T)=>f.jsxs("div",{className:"py-1.5 flex items-start justify-between gap-2",children:[f.jsxs("span",{className:"font-mono text-[10px] text-slate-500",children:["T",v.turnNumber," P",v.player]}),f.jsx("span",{className:"text-slate-200 font-medium flex-1 text-right",children:v.description})]},T))})]})},cv=({isOpen:s,onClose:r})=>{const{t:h}=xa();return s?f.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsx("h2",{className:"text-xl font-black text-slate-100",children:h("rulesTitle")}),f.jsx("button",{onClick:r,className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",title:h("close"),children:f.jsx(bp,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"px-6 py-5 overflow-y-auto space-y-4",children:[f.jsx("div",{children:f.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[f.jsx("span",{className:"font-bold text-amber-400",children:h("goalTitle")})," ",h("goalDesc")]})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("coreRulesTitle")}),f.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:["• ",h("coreRule1")]}),f.jsxs("li",{children:["• ",h("coreRule2")]}),f.jsxs("li",{children:["• ",h("coreRule3")]}),f.jsxs("li",{children:["• ",h("coreRule4")]})]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("insectTitle")}),f.jsxs("ul",{className:"space-y-2 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐝"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Queen Bee"})," — ",h("insectQueen")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🕷️"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Spider"})," — ",h("insectSpider")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪲"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Beetle"})," — ",h("insectBeetle")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦗"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Grasshopper"})," — ",h("insectGrasshopper")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐜"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Soldier Ant"})," — ",h("insectAnt")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦟"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Mosquito"})," — ",h("insectMosquito")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐞"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Ladybug"})," — ",h("insectLadybug")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪳"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Pillbug"})," — ",h("insectPillbug")]})]})]})]})]})}):null},sv=({isOpen:s,onStartGame:r,onClose:h,canCancel:c=!1})=>{const{t:v}=xa(),[T,H]=K.useState("AI"),[D,z]=K.useState("MEDIUM"),[p,B]=K.useState(!1),[A,q]=K.useState({mosquito:!0,ladybug:!0,pillbug:!0}),[k,w]=K.useState(!1),P=()=>{p?B(!1):(B(!0),H("AI"),z("EASY"),q({mosquito:!1,ladybug:!1,pillbug:!1}))},ne=F=>{H(F),F==="PASS_AND_PLAY"&&B(!1)};return s?f.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:[f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-1 flex items-center gap-2 px-6 pt-6",children:f.jsxs("span",{children:["🐝 ",v("appTitle")," ",v("appSubtitle")]})}),f.jsx("p",{className:"text-xs text-slate-400 mb-4 px-6",children:v("setupSubtitle")}),f.jsxs("div",{className:"overflow-y-auto px-6 pb-6 flex-1",children:[f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("gameModeLabel")}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("button",{onClick:()=>ne("PASS_AND_PLAY"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${T==="PASS_AND_PLAY"&&!p?"bg-amber-500/15 border-amber-400 text-amber-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(Xh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("passPlayBtn")})]}),f.jsxs("button",{onClick:()=>ne("AI"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${T==="AI"&&!p?"bg-blue-500/15 border-blue-400 text-blue-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(ph,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("vsAiBtn")})]}),f.jsxs("button",{onClick:P,className:`col-span-2 p-2.5 rounded-2xl border flex items-center justify-center gap-2 transition-all ${p?"bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(Ic,{className:"w-5 h-5"}),f.jsx("span",{className:"text-xs font-bold",children:v("tutorialMode")})]})]})]}),T==="AI"&&!p&&f.jsxs("div",{className:"mb-6 animate-fade-in",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("aiDifficultyLabel")}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EASY","MEDIUM","HARD"].map(F=>f.jsx("button",{onClick:()=>z(F),className:`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${D===F?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:v(F==="EASY"?"easyBtn":F==="MEDIUM"?"mediumBtn":"hardBtn")},F))})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5",children:[f.jsx(Yh,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:v("expansionsLabel")})]}),f.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800",children:[f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsx("span",{children:v("mosquitoLabel")}),f.jsx("input",{type:"checkbox",checked:A.mosquito,disabled:p,onChange:F=>q({...A,mosquito:F.target.checked}),className:"w-4 h-4 accent-amber-500 rounded disabled:opacity-40"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsx("span",{children:v("ladybugLabel")}),f.jsx("input",{type:"checkbox",checked:A.ladybug,disabled:p,onChange:F=>q({...A,ladybug:F.target.checked}),className:"w-4 h-4 accent-amber-500 rounded disabled:opacity-40"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsx("span",{children:v("pillbugLabel")}),f.jsx("input",{type:"checkbox",checked:A.pillbug,disabled:p,onChange:F=>q({...A,pillbug:F.target.checked}),className:"w-4 h-4 accent-amber-500 rounded disabled:opacity-40"})]})]})]})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[c&&h&&f.jsx("button",{onClick:h,className:"flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("cancel")}),f.jsxs("button",{onClick:()=>r({mode:T,aiDifficulty:D,expansions:A,tutorialMode:p}),className:"flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Lh,{className:"w-4 h-4 fill-slate-950"}),f.jsx("span",{children:v("startGame")})]})]}),f.jsx("div",{className:"mt-4 flex justify-center",children:f.jsxs("button",{onClick:()=>w(!0),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800/60",children:[f.jsx(fh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:v("learnToPlay")})]})})]}),f.jsx(cv,{isOpen:k,onClose:()=>w(!1)})]}):null},rv=({isOpen:s,winner:r,onRestart:h,onNewGameSetup:c})=>{const{t:v}=xa();return s?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4 text-amber-400",children:f.jsx(Zh,{className:"w-8 h-8"})}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-2",children:v(r==="DRAW"?"drawTitle":r===1?"p1WinTitle":"p2WinTitle")}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:v(r==="DRAW"?"drawDesc":"winDesc")}),f.jsxs("div",{className:"flex flex-col gap-2",children:[f.jsxs("button",{onClick:h,className:"w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Rh,{className:"w-4 h-4"}),f.jsx("span",{children:v("playAgain")})]}),f.jsx("button",{onClick:c,className:"w-full py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("matchOptions")})]})]})}):null},Kc=`package com.bugz.game

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
`,fv=({isOpen:s,onClose:r})=>{const{t:h}=xa(),[c,v]=K.useState(!1);if(!s)return null;const T=()=>{navigator.clipboard.writeText(Kc),v(!0),setTimeout(()=>v(!1),2e3)},H=()=>{const D=new Blob([Kc],{type:"text/plain;charset=utf-8"}),z=URL.createObjectURL(D),p=document.createElement("a");p.href=z,p.download="BugzApp.kt",document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(z)};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl",children:f.jsx(yp,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-slate-100 text-sm flex items-center gap-2",children:[f.jsx("span",{children:h("codeTitle")}),f.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",children:h("codeBadge")})]}),f.jsx("p",{className:"text-xs text-slate-400",children:h("codeDesc")})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:T,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors",children:[c?f.jsx(gh,{className:"w-4 h-4 text-emerald-400"}):f.jsx(Th,{className:"w-4 h-4"}),f.jsx("span",{children:h(c?"copied":"copyCode")})]}),f.jsxs("button",{onClick:H,className:"px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors",children:[f.jsx(Mh,{className:"w-4 h-4"}),f.jsx("span",{children:h("downloadKt")})]}),f.jsx("button",{onClick:r,className:"p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors",children:f.jsx(bp,{className:"w-5 h-5"})})]})]}),f.jsx("div",{className:"flex-1 overflow-auto p-6 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300",children:f.jsx("pre",{className:"select-text whitespace-pre-wrap",children:Kc})})]})})};function dv(){return f.jsx(nv,{children:f.jsx(pv,{})})}function pv(){const{t:s}=xa(),[r,h]=K.useState({mode:"AI",aiDifficulty:"MEDIUM",expansions:{mosquito:!0,ladybug:!0,pillbug:!0}}),[c,v]=K.useState(new Map),[T,H]=K.useState([]),[D,z]=K.useState([]),[p,B]=K.useState(1),[A,q]=K.useState(1),[k,w]=K.useState(1),[P,ne]=K.useState(null),[F,Ae]=K.useState(null),[xe,Ne]=K.useState([]),[Be,Re]=K.useState([]),[X,Ge]=K.useState(null),[Ke,st]=K.useState(null),[pt,ve]=K.useState([]),[At,G]=K.useState(null),[Ce,E]=K.useState([]),[_,V]=K.useState([]),[ce,ae]=K.useState(0),[m,C]=K.useState(!1),[R,U]=K.useState(null),J=K.useRef(0),[W,ue]=K.useState(!0),[De,ge]=K.useState(!1),[Tt,Et]=K.useState(!1),[Qe,Va]=K.useState("COMPLETE"),Yt=!!(r.tutorialMode&&Qe!=="COMPLETE"),pl=(L,ie)=>{const oe=[];return Object.keys(rl).forEach(he=>{const ke=rl[he];if(!ke.isExpansion||he==="MOSQUITO"&&ie.mosquito||he==="LADYBUG"&&ie.ladybug||he==="PILLBUG"&&ie.pillbug)for(let je=0;je<ke.count;je++)oe.push({id:`p${L}_${he}_${je}`,type:he,player:L})}),oe},ml=K.useCallback(L=>{h(L),v(new Map),H(pl(1,L.expansions)),z(pl(2,L.expansions)),B(1),q(1),w(1),ne(null),Ae(null),Ne([]),Re([]),Ge(null),st(null),ve([]),G(null),E([]),V([]),ae(0),C(!1),ue(!1),ge(!1),U(null),Va(L.tutorialMode?"WELCOME":"COMPLETE"),J.current+=1},[]),Eu=K.useCallback((L,ie,oe,he,ke,je,at,me)=>{const zt={board:Array.from(L.entries()).map(([lt,mt])=>[lt,[...mt]]),p1Reserve:[...ie],p2Reserve:[...oe],currentPlayer:he,turnCountP1:ke,turnCountP2:je,lastMovedPieceId:at,moveHistory:[...me]};Re(lt=>[...lt,zt])},[]),Wn=K.useCallback(()=>{if(Be.length===0||m)return;let L=1;r.mode==="AI"&&Be.length>=2&&(L=2);const ie=Math.max(0,Be.length-L),oe=Be[ie],he=new Map;oe.board.forEach(([ke,je])=>he.set(ke,[...je])),v(he),H([...oe.p1Reserve]),z([...oe.p2Reserve]),B(oe.currentPlayer),q(oe.turnCountP1),w(oe.turnCountP2),ne(oe.lastMovedPieceId),Ne([...oe.moveHistory]),Re(ke=>ke.slice(0,ie)),Ge(null),st(null),ve([]),G(null),E([]),V([]),ae(0)},[Be,m,r.mode]),Mt=Tu(c);K.useEffect(()=>{Mt.isGameOver&&!De&&ge(!0)},[Mt,De]),K.useEffect(()=>{if(Mt.isGameOver)return;const L=p===1?T:D,ie=p===1?A:k;if(yu(c,p,L,ie,P,r.expansions).length===0&&(c.size>0||T.length>0)){U(s("toastForcedPass",{n:p})),setTimeout(()=>U(null),3e3);const he={turnNumber:ie,player:p,actionType:"PASS",bugType:"QUEEN",description:s("passLogDesc",{n:p})};Ne(ke=>[...ke,he]),B(p===1?2:1)}},[p,c,T,D,A,k,P,r.expansions,Mt.isGameOver]),K.useEffect(()=>{if(!(r.tutorialMode&&Qe!=="COMPLETE")&&r.mode==="AI"&&p===2&&!Mt.isGameOver&&!m){if(yu(c,2,D,k,P,r.expansions).length===0)return;C(!0);const ie=J.current,oe=setTimeout(()=>{if(J.current!==ie){C(!1);return}try{const he=th(c,2,D,T,k,A,r.aiDifficulty,P,r.expansions);he?ea(he):(U(s("toastAiPass")),setTimeout(()=>U(null),3e3),B(1))}finally{C(!1)}},600);return()=>clearTimeout(oe)}},[p,r,c,T,D,A,k,P,Mt.isGameOver,Qe]);const ea=L=>{Eu(c,T,D,p,A,k,P,xe);const ie=Fn(c);let oe=[...T],he=[...D],ke="";if(L.type==="PLACE"){if(L.player===1){const lt=oe.findIndex(mt=>mt.id===L.pieceId);lt!==-1&&oe.splice(lt,1)}else{const lt=he.findIndex(mt=>mt.id===L.pieceId);lt!==-1&&he.splice(lt,1)}const me={id:L.pieceId,type:L.bugType,player:L.player},Vt=te(L.toHex.q,L.toHex.r),zt=ie.get(Vt)||[];ie.set(Vt,[...zt,me]),ke=s("placedDesc",{bug:rl[L.bugType].name,q:L.toHex.q,r:L.toHex.r}),Ae({to:L.toHex})}else if(L.type==="MOVE"&&L.fromHex){const me=te(L.fromHex.q,L.fromHex.r),Vt=ie.get(me)||[],zt=Vt.pop();if(Vt.length===0&&ie.delete(me),zt){const lt=te(L.toHex.q,L.toHex.r),mt=ie.get(lt)||[];ie.set(lt,[...mt,zt])}ke=s("movedDesc",{bug:rl[L.bugType].name,q1:L.fromHex.q,r1:L.fromHex.r,q2:L.toHex.q,r2:L.toHex.r}),Ae({from:L.fromHex,to:L.toHex})}else if(L.type==="PILLBUG_SPECIAL"&&L.pillbugTargetHex){const me=te(L.pillbugTargetHex.q,L.pillbugTargetHex.r),Vt=ie.get(me)||[],zt=Vt.pop();if(Vt.length===0&&ie.delete(me),zt){const lt=te(L.toHex.q,L.toHex.r),mt=ie.get(lt)||[];ie.set(lt,[...mt,zt])}ke=s("pillbugMovedDesc",{bug:zt?rl[zt.type].name:"piece",q1:L.pillbugTargetHex.q,r1:L.pillbugTargetHex.r,q2:L.toHex.q,r2:L.toHex.r}),Ae({from:L.pillbugTargetHex,to:L.toHex})}v(ie),H(oe),z(he);let je=null;if(L.type==="PILLBUG_SPECIAL"&&L.pillbugTargetHex){const me=ie.get(te(L.toHex.q,L.toHex.r));je=me&&me.length>0?me[me.length-1].id:L.pieceId}else je=L.pieceId;ne(je);const at={turnNumber:p===1?A:k,player:p,actionType:L.type,bugType:L.bugType,from:L.fromHex,to:L.toHex,description:ke};Ne(me=>[...me,at]),Ge(null),st(null),ve([]),G(null),E([]),V([]),ae(0),p===1?(q(me=>me+1),B(2)):(w(me=>me+1),B(1)),r.tutorialMode&&Qe!=="COMPLETE"&&zu()},en={WELCOME:0,PLACE_QUEEN:1,OPP_QUEEN:0,PLACE_SPIDER:2,OPP_SPIDER:0,PLACE_BEETLE:3,OPP_BEETLE:0,PLACE_GRASSHOPPER:4,OPP_GRASSHOPPER:0,MOVE_EXAMPLE:5,COMPLETE:0},Mu={WELCOME:"PLACE_QUEEN",PLACE_QUEEN:"OPP_QUEEN",OPP_QUEEN:"PLACE_SPIDER",PLACE_SPIDER:"OPP_SPIDER",OPP_SPIDER:"PLACE_BEETLE",PLACE_BEETLE:"OPP_BEETLE",OPP_BEETLE:"PLACE_GRASSHOPPER",PLACE_GRASSHOPPER:"OPP_GRASSHOPPER",OPP_GRASSHOPPER:"MOVE_EXAMPLE",MOVE_EXAMPLE:"COMPLETE",COMPLETE:"COMPLETE"},zu=()=>{Va(Mu[Qe])};K.useEffect(()=>{if(!Yt||!Qe.startsWith("OPP_")||Mt.isGameOver)return;const L=Qe==="OPP_QUEEN"?"QUEEN":Qe==="OPP_SPIDER"?"SPIDER":Qe==="OPP_BEETLE"?"BEETLE":"GRASSHOPPER";C(!0);const ie=setTimeout(()=>{const oe=D.find(he=>he.type===L);if(oe){const he=Xc(c,2);he.length>0&&ea({type:"PLACE",pieceId:oe.id,bugType:L,player:2,toHex:he[0]})}C(!1)},800);return()=>{clearTimeout(ie),C(!1)}},[Qe,Yt,c,D,k,Mt.isGameOver]);const tt=()=>{Va("COMPLETE"),h(L=>({...L,tutorialMode:!1})),ue(!0)},tn=L=>{if(!m)if(Ge(null),G(null),E([]),Ke===L)st(null),ve([]);else{st(L);const ie=Xc(c,p);ve(ie)}},$n=L=>{if(m)return;const ie=c.get(te(L.q,L.r)),oe=ie&&ie.length>0?ie[ie.length-1]:null;if(st(null),X&&X.q===L.q&&X.r===L.r){Ge(null),ve([]),G(null),E([]);return}if(oe&&oe.player===p){Ge(L);const ke=dp(c,L,p,p===1?A:k,P,r.expansions);if(ve(ke),Wc(c,L,oe,r.expansions).includes("PILLBUG")){const at=mp(c,L,p,P);V(at),ae(0),at.length>0&&(G(at[0].targetHex),E(at[0].destinationHexes))}else V([]),ae(0),G(null),E([])}},ei=()=>{if(_.length===0)return;const L=(ce+1)%_.length;ae(L),G(_[L].targetHex),E(_[L].destinationHexes)},gl=L=>{if(m)return;const ie=p===1?T:D;if(Ke){const oe=ie.find(he=>he.type===Ke);oe&&ea({type:"PLACE",pieceId:oe.id,bugType:Ke,player:p,toHex:L})}else if(X){const oe=dl(c,X);oe&&(At&&Ce.some(he=>he.q===L.q&&he.r===L.r)?ea({type:"PILLBUG_SPECIAL",pieceId:oe.id,bugType:oe.type,player:p,fromHex:X,pillbugTargetHex:At,toHex:L}):ea({type:"MOVE",pieceId:oe.id,bugType:oe.type,player:p,fromHex:X,toHex:L}))}};return f.jsxs("div",{className:"flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden",children:[f.jsxs("header",{className:"bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-2xl",children:"🐝"}),f.jsxs("h1",{className:"text-lg font-black tracking-tight text-amber-400",children:[s("appTitle")," ",f.jsx("span",{className:"text-slate-400 text-xs font-normal",children:s("appSubtitle")})]})]}),f.jsx("span",{className:"hidden sm:inline-block text-sm font-semibold px-3 pt-1.5 pb-2.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 translate-y-2.5",children:r.mode==="AI"?s("vsAi",{diff:s(r.aiDifficulty==="EASY"?"easyBtn":r.aiDifficulty==="MEDIUM"?"mediumBtn":"hardBtn")}):s("passAndPlay")})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${p===1?"bg-slate-800 border-amber-400 text-amber-300":"bg-slate-900 border-blue-400 text-blue-300"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${p===1?"bg-white":"bg-slate-950 border border-slate-500"} ${m?"animate-ping":""}`}),f.jsx("span",{children:m?s("aiThinking"):s("playersTurn",{n:p,color:s(p===1?"white":"black")})})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(iv,{className:"!px-1.5 !py-1"}),f.jsx("button",{onClick:Wn,disabled:Be.length===0||m,className:`p-2 rounded-xl border transition-colors ${Be.length>0&&!m?"bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white":"bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed"}`,title:s("undoTitle"),children:f.jsx(Uh,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>ue(!0),className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors",title:s("newGameTitle"),children:f.jsx(kh,{className:"w-4 h-4"})}),f.jsxs("button",{onClick:()=>Et(!0),className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold",title:s("kotlinTitle"),children:[f.jsx(yp,{className:"w-4 h-4"}),f.jsx("span",{className:"hidden md:inline",children:s("kotlinSource")})]})]})]})]}),R&&f.jsxs("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce",children:[f.jsx(vp,{className:"w-4 h-4"}),f.jsx("span",{children:R})]}),Qe==="WELCOME"&&!W&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-slate-900 border border-amber-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[f.jsx(Ic,{className:"w-6 h-6 text-amber-400"}),f.jsx("h3",{className:"text-lg font-black text-amber-300",children:s("tutorialMode")})]}),f.jsx("p",{className:"text-sm text-slate-300 mb-5 leading-relaxed",children:s("tutorialWelcome")}),f.jsxs("div",{className:"flex gap-3",children:[f.jsx("button",{onClick:tt,className:"flex-1 py-2.5 px-4 rounded-xl border border-slate-700 text-slate-400 text-xs font-bold hover:bg-slate-800 transition-colors",children:s("tutorialSkip")}),f.jsx("button",{onClick:()=>Va("PLACE_QUEEN"),className:"flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-transform active:scale-95",children:s("tutorialNext")})]})]})}),r.tutorialMode&&Qe==="COMPLETE"&&c.size>0&&!W&&!De&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl",children:[f.jsx("p",{className:"text-sm text-slate-300 mb-5 leading-relaxed",children:s("tutorialComplete")}),f.jsx("button",{onClick:tt,className:"w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-transform active:scale-95",children:s("tutorialGotIt")})]})}),Yt&&!W&&Qe!=="WELCOME"&&f.jsxs("div",{className:"bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 flex items-center justify-between z-20",children:[f.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[f.jsx(Ic,{className:"w-4 h-4 text-amber-400 shrink-0"}),f.jsx("span",{className:"text-amber-200 font-medium",children:Qe.startsWith("OPP_")?s(up[Qe]):s("tutorialStepLabel",{n:en[Qe]})+" "+s(up[Qe])})]}),f.jsxs("button",{onClick:tt,className:"shrink-0 ml-3 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors",children:[f.jsx(Qh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:s("tutorialSkip")})]})]}),f.jsxs("div",{className:"flex-1 flex flex-col md:flex-row relative overflow-hidden",children:[f.jsxs("div",{className:"hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4",children:[f.jsx(Zc,{player:1,reserve:T,isActive:p===1&&!m,selectedBugType:p===1?Ke:null,onSelectBugType:tn,turnCount:A,queenPlaced:fl(c,1)}),f.jsx(Zc,{player:2,reserve:D,isActive:p===2&&!m,selectedBugType:p===2?Ke:null,onSelectBugType:tn,turnCount:k,queenPlaced:fl(c,2)})]}),f.jsxs("div",{className:"flex-1 relative h-full",children:[f.jsx(uv,{board:c,selectedHex:X,validDestinations:pt,pillbugTargetHex:At,pillbugDestinations:Ce,onSelectHex:$n,onSelectDestination:gl,onSelectPillbugTarget:ei,currentPlayer:p,isAITurn:m,lastMovedHex:F}),f.jsx("div",{className:"absolute bottom-4 right-4 z-20 max-w-xs w-full",children:f.jsx(ov,{logs:xe})})]}),f.jsx("div",{className:"block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20",children:f.jsx(Zc,{player:p,reserve:p===1?T:D,isActive:!m,selectedBugType:Ke,onSelectBugType:tn,turnCount:p===1?A:k,queenPlaced:fl(c,p)})})]}),f.jsx(sv,{isOpen:W,onStartGame:ml,onClose:()=>ue(!1),canCancel:c.size>0}),f.jsx(rv,{isOpen:De,winner:Mt.winner,onRestart:()=>ml(r),onNewGameSetup:()=>{ge(!1),ue(!0)}}),f.jsx(fv,{isOpen:Tt,onClose:()=>Et(!1)})]})}Yg.createRoot(document.getElementById("root")).render(f.jsx(K.StrictMode,{children:f.jsx(dv,{})}));
