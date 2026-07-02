var OM=Object.defineProperty;var kM=(t,e,n)=>e in t?OM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Or=(t,e,n)=>kM(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Qv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jv={exports:{}},cf={},ex={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yl=Symbol.for("react.element"),BM=Symbol.for("react.portal"),zM=Symbol.for("react.fragment"),VM=Symbol.for("react.strict_mode"),HM=Symbol.for("react.profiler"),GM=Symbol.for("react.provider"),WM=Symbol.for("react.context"),XM=Symbol.for("react.forward_ref"),YM=Symbol.for("react.suspense"),$M=Symbol.for("react.memo"),jM=Symbol.for("react.lazy"),Q0=Symbol.iterator;function qM(t){return t===null||typeof t!="object"?null:(t=Q0&&t[Q0]||t["@@iterator"],typeof t=="function"?t:null)}var tx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nx=Object.assign,ix={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=ix,this.updater=n||tx}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rx(){}rx.prototype=Mo.prototype;function tm(t,e,n){this.props=t,this.context=e,this.refs=ix,this.updater=n||tx}var nm=tm.prototype=new rx;nm.constructor=tm;nx(nm,Mo.prototype);nm.isPureReactComponent=!0;var J0=Array.isArray,sx=Object.prototype.hasOwnProperty,im={current:null},ax={key:!0,ref:!0,__self:!0,__source:!0};function ox(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)sx.call(e,i)&&!ax.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Yl,type:t,key:s,ref:a,props:r,_owner:im.current}}function KM(t,e){return{$$typeof:Yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yl}function ZM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eg=/\/+/g;function kf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZM(""+t.key):e.toString(36)}function Zu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Yl:case BM:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+kf(a,0):i,J0(r)?(n="",t!=null&&(n=t.replace(eg,"$&/")+"/"),Zu(r,e,n,"",function(u){return u})):r!=null&&(rm(r)&&(r=KM(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(eg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",J0(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+kf(s,o);a+=Zu(s,e,n,l,r)}else if(l=qM(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+kf(s,o++),a+=Zu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ou(t,e,n){if(t==null)return t;var i=[],r=0;return Zu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function QM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bn={current:null},Qu={transition:null},JM={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:Qu,ReactCurrentOwner:im};function lx(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ou,forEach:function(t,e,n){ou(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ou(t,function(){e++}),e},toArray:function(t){return ou(t,function(e){return e})||[]},only:function(t){if(!rm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Mo;Xe.Fragment=zM;Xe.Profiler=HM;Xe.PureComponent=tm;Xe.StrictMode=VM;Xe.Suspense=YM;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JM;Xe.act=lx;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=nx({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=im.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)sx.call(e,l)&&!ax.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Yl,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:WM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GM,_context:t},t.Consumer=t};Xe.createElement=ox;Xe.createFactory=function(t){var e=ox.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:XM,render:t}};Xe.isValidElement=rm;Xe.lazy=function(t){return{$$typeof:jM,_payload:{_status:-1,_result:t},_init:QM}};Xe.memo=function(t,e){return{$$typeof:$M,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Qu.transition;Qu.transition={};try{t()}finally{Qu.transition=e}};Xe.unstable_act=lx;Xe.useCallback=function(t,e){return bn.current.useCallback(t,e)};Xe.useContext=function(t){return bn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return bn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return bn.current.useEffect(t,e)};Xe.useId=function(){return bn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return bn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return bn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return bn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return bn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return bn.current.useReducer(t,e,n)};Xe.useRef=function(t){return bn.current.useRef(t)};Xe.useState=function(t){return bn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return bn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return bn.current.useTransition()};Xe.version="18.3.1";ex.exports=Xe;var O=ex.exports;const kt=Qv(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE=O,tE=Symbol.for("react.element"),nE=Symbol.for("react.fragment"),iE=Object.prototype.hasOwnProperty,rE=eE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sE={key:!0,ref:!0,__self:!0,__source:!0};function ux(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)iE.call(e,i)&&!sE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tE,type:t,key:s,ref:a,props:r,_owner:rE.current}}cf.Fragment=nE;cf.jsx=ux;cf.jsxs=ux;Jv.exports=cf;var D=Jv.exports,cx={exports:{}},ii={},fx={exports:{}},dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,$){var W=k.length;k.push($);e:for(;0<W;){var ne=W-1>>>1,ie=k[ne];if(0<r(ie,$))k[ne]=$,k[W]=ie,W=ne;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var $=k[0],W=k.pop();if(W!==$){k[0]=W;e:for(var ne=0,ie=k.length,be=ie>>>1;ne<be;){var me=2*(ne+1)-1,Ce=k[me],te=me+1,le=k[te];if(0>r(Ce,W))te<ie&&0>r(le,Ce)?(k[ne]=le,k[te]=W,ne=te):(k[ne]=Ce,k[me]=W,ne=me);else if(te<ie&&0>r(le,W))k[ne]=le,k[te]=W,ne=te;else break e}}return $}function r(k,$){var W=k.sortIndex-$.sortIndex;return W!==0?W:k.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=k)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function S(k){if(_=!1,y(k),!g)if(n(l)!==null)g=!0,Z(M);else{var $=n(u);$!==null&&B(S,$.startTime-k)}}function M(k,$){g=!1,_&&(_=!1,h(x),x=-1),p=!0;var W=f;try{for(y($),d=n(l);d!==null&&(!(d.expirationTime>$)||k&&!L());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var ie=ne(d.expirationTime<=$);$=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&i(l),y($)}else i(l);d=n(l)}if(d!==null)var be=!0;else{var me=n(u);me!==null&&B(S,me.startTime-$),be=!1}return be}finally{d=null,f=W,p=!1}}var T=!1,w=null,x=-1,b=5,P=-1;function L(){return!(t.unstable_now()-P<b)}function N(){if(w!==null){var k=t.unstable_now();P=k;var $=!0;try{$=w(!0,k)}finally{$?H():(T=!1,w=null)}}else T=!1}var H;if(typeof v=="function")H=function(){v(N)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,F=X.port2;X.port1.onmessage=N,H=function(){F.postMessage(null)}}else H=function(){m(N,0)};function Z(k){w=k,T||(T=!0,H())}function B(k,$){x=m(function(){k(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Z(M))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var W=f;f=$;try{return k()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var W=f;f=k;try{return $()}finally{f=W}},t.unstable_scheduleCallback=function(k,$,W){var ne=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ne+W:ne):W=ne,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=W+ie,k={id:c++,callback:$,priorityLevel:k,startTime:W,expirationTime:ie,sortIndex:-1},W>ne?(k.sortIndex=W,e(u,k),n(l)===null&&k===n(u)&&(_?(h(x),x=-1):_=!0,B(S,W-ne))):(k.sortIndex=ie,e(l,k),g||p||(g=!0,Z(M))),k},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(k){var $=f;return function(){var W=f;f=$;try{return k.apply(this,arguments)}finally{f=W}}}})(dx);fx.exports=dx;var aE=fx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE=O,ei=aE;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hx=new Set,gl={};function aa(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(gl[t]=e,t=0;t<e.length;t++)hx.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=Object.prototype.hasOwnProperty,lE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function uE(t){return nh.call(ng,t)?!0:nh.call(tg,t)?!1:lE.test(t)?ng[t]=!0:(tg[t]=!0,!1)}function cE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fE(t,e,n,i){if(e===null||typeof e>"u"||cE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new Rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new Rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new Rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new Rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new Rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new Rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new Rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new Rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new Rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var sm=/[\-:]([a-z])/g;function am(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sm,am);ln[e]=new Rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sm,am);ln[e]=new Rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sm,am);ln[e]=new Rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new Rn(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new Rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new Rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function om(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fE(e,n,r,i)&&(n=null),i||r===null?uE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Lr=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),Da=Symbol.for("react.portal"),Ia=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),cm=Symbol.for("react.memo"),Yr=Symbol.for("react.lazy"),gx=Symbol.for("react.offscreen"),ig=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=ig&&t[ig]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,Bf;function jo(t){if(Bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bf=e&&e[1]||""}return`
`+Bf+t}var zf=!1;function Vf(t,e){if(!t||zf)return"";zf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{zf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function dE(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=Vf(t.type,!1),t;case 11:return t=Vf(t.type.render,!1),t;case 1:return t=Vf(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ia:return"Fragment";case Da:return"Portal";case ih:return"Profiler";case lm:return"StrictMode";case rh:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mx:return(t.displayName||"Context")+".Consumer";case px:return(t._context.displayName||"Context")+".Provider";case um:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cm:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case Yr:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function hE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ps(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _x(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pE(t){var e=_x(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=pE(t))}function vx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=_x(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oh(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ps(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xx(t,e){e=e.checked,e!=null&&om(t,"checked",e,!1)}function lh(t,e){xx(t,e);var n=ps(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||Ec(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qo=Array.isArray;function $a(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ps(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ag(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(qo(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ps(n)}}function yx(t,e){var n=ps(e.value),i=ps(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function og(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,Mx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _l(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mE=["Webkit","ms","Moz","O"];Object.keys(nl).forEach(function(t){mE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nl[e]=nl[t]})});function Ex(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||nl.hasOwnProperty(t)&&nl[t]?(""+e).trim():e+"px"}function wx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ex(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gE=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(t,e){if(e){if(gE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function fm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,ja=null,qa=null;function lg(t){if(t=ql(t)){if(typeof mh!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=mf(e),mh(t.stateNode,t.type,e))}}function Tx(t){ja?qa?qa.push(t):qa=[t]:ja=t}function bx(){if(ja){var t=ja,e=qa;if(qa=ja=null,lg(t),e)for(t=0;t<e.length;t++)lg(e[t])}}function Rx(t,e){return t(e)}function Ax(){}var Hf=!1;function Cx(t,e,n){if(Hf)return t(e,n);Hf=!0;try{return Rx(t,e,n)}finally{Hf=!1,(ja!==null||qa!==null)&&(Ax(),bx())}}function vl(t,e){var n=t.stateNode;if(n===null)return null;var i=mf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var gh=!1;if(Mr)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){gh=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{gh=!1}function _E(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var il=!1,wc=null,Tc=!1,_h=null,vE={onError:function(t){il=!0,wc=t}};function xE(t,e,n,i,r,s,a,o,l){il=!1,wc=null,_E.apply(vE,arguments)}function yE(t,e,n,i,r,s,a,o,l){if(xE.apply(this,arguments),il){if(il){var u=wc;il=!1,wc=null}else throw Error(pe(198));Tc||(Tc=!0,_h=u)}}function oa(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Px(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ug(t){if(oa(t)!==t)throw Error(pe(188))}function SE(t){var e=t.alternate;if(!e){if(e=oa(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ug(r),t;if(s===i)return ug(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function Lx(t){return t=SE(t),t!==null?Dx(t):null}function Dx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dx(t);if(e!==null)return e;t=t.sibling}return null}var Ix=ei.unstable_scheduleCallback,cg=ei.unstable_cancelCallback,ME=ei.unstable_shouldYield,EE=ei.unstable_requestPaint,zt=ei.unstable_now,wE=ei.unstable_getCurrentPriorityLevel,dm=ei.unstable_ImmediatePriority,Nx=ei.unstable_UserBlockingPriority,bc=ei.unstable_NormalPriority,TE=ei.unstable_LowPriority,Ux=ei.unstable_IdlePriority,ff=null,Ki=null;function bE(t){if(Ki&&typeof Ki.onCommitFiberRoot=="function")try{Ki.onCommitFiberRoot(ff,t,void 0,(t.current.flags&128)===128)}catch{}}var Li=Math.clz32?Math.clz32:CE,RE=Math.log,AE=Math.LN2;function CE(t){return t>>>=0,t===0?32:31-(RE(t)/AE|0)|0}var fu=64,du=4194304;function Ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ko(o):(s&=a,s!==0&&(i=Ko(s)))}else a=n&~r,a!==0?i=Ko(a):s!==0&&(i=Ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Li(e),r=1<<n,i|=t[n],e&=~r;return i}function PE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Li(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=PE(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fx(){var t=fu;return fu<<=1,!(fu&4194240)&&(fu=64),t}function Gf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Li(e),t[e]=n}function DE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function hm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Ox(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kx,pm,Bx,zx,Vx,xh=!1,hu=[],rs=null,ss=null,as=null,xl=new Map,yl=new Map,jr=[],IE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":xl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(e.pointerId)}}function Io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ql(e),e!==null&&pm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function NE(t,e,n,i,r){switch(e){case"focusin":return rs=Io(rs,t,e,n,i,r),!0;case"dragenter":return ss=Io(ss,t,e,n,i,r),!0;case"mouseover":return as=Io(as,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xl.set(s,Io(xl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,yl.set(s,Io(yl.get(s)||null,t,e,n,i,r)),!0}return!1}function Hx(t){var e=Bs(t.target);if(e!==null){var n=oa(e);if(n!==null){if(e=n.tag,e===13){if(e=Px(n),e!==null){t.blockedOn=e,Vx(t.priority,function(){Bx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ph=i,n.target.dispatchEvent(i),ph=null}else return e=ql(n),e!==null&&pm(e),t.blockedOn=n,!1;e.shift()}return!0}function dg(t,e,n){Ju(t)&&n.delete(e)}function UE(){xh=!1,rs!==null&&Ju(rs)&&(rs=null),ss!==null&&Ju(ss)&&(ss=null),as!==null&&Ju(as)&&(as=null),xl.forEach(dg),yl.forEach(dg)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,xh||(xh=!0,ei.unstable_scheduleCallback(ei.unstable_NormalPriority,UE)))}function Sl(t){function e(r){return No(r,t)}if(0<hu.length){No(hu[0],t);for(var n=1;n<hu.length;n++){var i=hu[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rs!==null&&No(rs,t),ss!==null&&No(ss,t),as!==null&&No(as,t),xl.forEach(e),yl.forEach(e),n=0;n<jr.length;n++)i=jr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)Hx(n),n.blockedOn===null&&jr.shift()}var Ka=Lr.ReactCurrentBatchConfig,Ac=!0;function FE(t,e,n,i){var r=at,s=Ka.transition;Ka.transition=null;try{at=1,mm(t,e,n,i)}finally{at=r,Ka.transition=s}}function OE(t,e,n,i){var r=at,s=Ka.transition;Ka.transition=null;try{at=4,mm(t,e,n,i)}finally{at=r,Ka.transition=s}}function mm(t,e,n,i){if(Ac){var r=yh(t,e,n,i);if(r===null)Jf(t,e,i,Cc,n),fg(t,i);else if(NE(r,t,e,n,i))i.stopPropagation();else if(fg(t,i),e&4&&-1<IE.indexOf(t)){for(;r!==null;){var s=ql(r);if(s!==null&&kx(s),s=yh(t,e,n,i),s===null&&Jf(t,e,i,Cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jf(t,e,i,null,n)}}var Cc=null;function yh(t,e,n,i){if(Cc=null,t=fm(i),t=Bs(t),t!==null)if(e=oa(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Px(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function Gx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wE()){case dm:return 1;case Nx:return 4;case bc:case TE:return 16;case Ux:return 536870912;default:return 16}default:return 16}}var Zr=null,gm=null,ec=null;function Wx(){if(ec)return ec;var t,e=gm,n=e.length,i,r="value"in Zr?Zr.value:Zr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pu(){return!0}function hg(){return!1}function ri(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pu:hg,this.isPropagationStopped=hg,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_m=ri(Eo),jl=Ct({},Eo,{view:0,detail:0}),kE=ri(jl),Wf,Xf,Uo,df=Ct({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(Wf=t.screenX-Uo.screenX,Xf=t.screenY-Uo.screenY):Xf=Wf=0,Uo=t),Wf)},movementY:function(t){return"movementY"in t?t.movementY:Xf}}),pg=ri(df),BE=Ct({},df,{dataTransfer:0}),zE=ri(BE),VE=Ct({},jl,{relatedTarget:0}),Yf=ri(VE),HE=Ct({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),GE=ri(HE),WE=Ct({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XE=ri(WE),YE=Ct({},Eo,{data:0}),mg=ri(YE),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qE[t])?!!e[t]:!1}function vm(){return KE}var ZE=Ct({},jl,{key:function(t){if(t.key){var e=$E[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vm,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QE=ri(ZE),JE=Ct({},df,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=ri(JE),ew=Ct({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vm}),tw=ri(ew),nw=Ct({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),iw=ri(nw),rw=Ct({},df,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=ri(rw),aw=[9,13,27,32],xm=Mr&&"CompositionEvent"in window,rl=null;Mr&&"documentMode"in document&&(rl=document.documentMode);var ow=Mr&&"TextEvent"in window&&!rl,Xx=Mr&&(!xm||rl&&8<rl&&11>=rl),_g=" ",vg=!1;function Yx(t,e){switch(t){case"keyup":return aw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $x(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Na=!1;function lw(t,e){switch(t){case"compositionend":return $x(e);case"keypress":return e.which!==32?null:(vg=!0,_g);case"textInput":return t=e.data,t===_g&&vg?null:t;default:return null}}function uw(t,e){if(Na)return t==="compositionend"||!xm&&Yx(t,e)?(t=Wx(),ec=gm=Zr=null,Na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xx&&e.locale!=="ko"?null:e.data;default:return null}}var cw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cw[t.type]:e==="textarea"}function jx(t,e,n,i){Tx(i),e=Pc(e,"onChange"),0<e.length&&(n=new _m("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sl=null,Ml=null;function fw(t){sy(t,0)}function hf(t){var e=Oa(t);if(vx(e))return t}function dw(t,e){if(t==="change")return e}var qx=!1;if(Mr){var $f;if(Mr){var jf="oninput"in document;if(!jf){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),jf=typeof yg.oninput=="function"}$f=jf}else $f=!1;qx=$f&&(!document.documentMode||9<document.documentMode)}function Sg(){sl&&(sl.detachEvent("onpropertychange",Kx),Ml=sl=null)}function Kx(t){if(t.propertyName==="value"&&hf(Ml)){var e=[];jx(e,Ml,t,fm(t)),Cx(fw,e)}}function hw(t,e,n){t==="focusin"?(Sg(),sl=e,Ml=n,sl.attachEvent("onpropertychange",Kx)):t==="focusout"&&Sg()}function pw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hf(Ml)}function mw(t,e){if(t==="click")return hf(e)}function gw(t,e){if(t==="input"||t==="change")return hf(e)}function _w(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ni=typeof Object.is=="function"?Object.is:_w;function El(t,e){if(Ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nh.call(e,r)||!Ni(t[r],e[r]))return!1}return!0}function Mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,e){var n=Mg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mg(n)}}function Zx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qx(){for(var t=window,e=Ec();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ec(t.document)}return e}function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vw(t){var e=Qx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zx(n.ownerDocument.documentElement,n)){if(i!==null&&ym(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Eg(n,s);var a=Eg(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xw=Mr&&"documentMode"in document&&11>=document.documentMode,Ua=null,Sh=null,al=null,Mh=!1;function wg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Ua==null||Ua!==Ec(i)||(i=Ua,"selectionStart"in i&&ym(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),al&&El(al,i)||(al=i,i=Pc(Sh,"onSelect"),0<i.length&&(e=new _m("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ua)))}function mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fa={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},qf={},Jx={};Mr&&(Jx=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function pf(t){if(qf[t])return qf[t];if(!Fa[t])return t;var e=Fa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jx)return qf[t]=e[n];return t}var ey=pf("animationend"),ty=pf("animationiteration"),ny=pf("animationstart"),iy=pf("transitionend"),ry=new Map,Tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ys(t,e){ry.set(t,e),aa(e,[t])}for(var Kf=0;Kf<Tg.length;Kf++){var Zf=Tg[Kf],yw=Zf.toLowerCase(),Sw=Zf[0].toUpperCase()+Zf.slice(1);ys(yw,"on"+Sw)}ys(ey,"onAnimationEnd");ys(ty,"onAnimationIteration");ys(ny,"onAnimationStart");ys("dblclick","onDoubleClick");ys("focusin","onFocus");ys("focusout","onBlur");ys(iy,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));aa("onBeforeInput",["compositionend","keypress","textInput","paste"]);aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function bg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yE(i,e,void 0,t),t.currentTarget=null}function sy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;bg(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;bg(r,o,u),s=l}}}if(Tc)throw t=_h,Tc=!1,_h=null,t}function gt(t,e){var n=e[Rh];n===void 0&&(n=e[Rh]=new Set);var i=t+"__bubble";n.has(i)||(ay(e,t,2,!1),n.add(i))}function Qf(t,e,n){var i=0;e&&(i|=4),ay(n,t,i,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function wl(t){if(!t[gu]){t[gu]=!0,hx.forEach(function(n){n!=="selectionchange"&&(Mw.has(n)||Qf(n,!1,t),Qf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,Qf("selectionchange",!1,e))}}function ay(t,e,n,i){switch(Gx(e)){case 1:var r=FE;break;case 4:r=OE;break;default:r=mm}n=r.bind(null,e,n,t),r=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Jf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Bs(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Cx(function(){var u=s,c=fm(n),d=[];e:{var f=ry.get(t);if(f!==void 0){var p=_m,g=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":p=QE;break;case"focusin":g="focus",p=Yf;break;case"focusout":g="blur",p=Yf;break;case"beforeblur":case"afterblur":p=Yf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tw;break;case ey:case ty:case ny:p=GE;break;case iy:p=iw;break;case"scroll":p=kE;break;case"wheel":p=sw;break;case"copy":case"cut":case"paste":p=XE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gg}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=vl(v,h),S!=null&&_.push(Tl(v,S,y)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==ph&&(g=n.relatedTarget||n.fromElement)&&(Bs(g)||g[Er]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Bs(g):null,g!==null&&(m=oa(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=pg,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=gg,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Oa(p),y=g==null?f:Oa(g),f=new _(S,v+"leave",p,n,c),f.target=m,f.relatedTarget=y,S=null,Bs(c)===u&&(_=new _(h,v+"enter",g,n,c),_.target=y,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,h=g,v=0,y=_;y;y=da(y))v++;for(y=0,S=h;S;S=da(S))y++;for(;0<v-y;)_=da(_),v--;for(;0<y-v;)h=da(h),y--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=da(_),h=da(h)}_=null}else _=null;p!==null&&Rg(d,f,p,_,!1),g!==null&&m!==null&&Rg(d,m,g,_,!0)}}e:{if(f=u?Oa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var M=dw;else if(xg(f))if(qx)M=gw;else{M=pw;var T=hw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=mw);if(M&&(M=M(t,u))){jx(d,M,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&uh(f,"number",f.value)}switch(T=u?Oa(u):window,t){case"focusin":(xg(T)||T.contentEditable==="true")&&(Ua=T,Sh=u,al=null);break;case"focusout":al=Sh=Ua=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,wg(d,n,c);break;case"selectionchange":if(xw)break;case"keydown":case"keyup":wg(d,n,c)}var w;if(xm)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Na?Yx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Xx&&n.locale!=="ko"&&(Na||x!=="onCompositionStart"?x==="onCompositionEnd"&&Na&&(w=Wx()):(Zr=c,gm="value"in Zr?Zr.value:Zr.textContent,Na=!0)),T=Pc(u,x),0<T.length&&(x=new mg(x,t,null,n,c),d.push({event:x,listeners:T}),w?x.data=w:(w=$x(n),w!==null&&(x.data=w)))),(w=ow?lw(t,n):uw(t,n))&&(u=Pc(u,"onBeforeInput"),0<u.length&&(c=new mg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}sy(d,e)})}function Tl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=vl(t,n),s!=null&&i.unshift(Tl(t,s,r)),s=vl(t,e),s!=null&&i.push(Tl(t,s,r))),t=t.return}return i}function da(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rg(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=vl(n,s),l!=null&&a.unshift(Tl(n,l,o))):r||(l=vl(n,s),l!=null&&a.push(Tl(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ew=/\r\n?/g,ww=/\u0000|\uFFFD/g;function Ag(t){return(typeof t=="string"?t:""+t).replace(Ew,`
`).replace(ww,"")}function _u(t,e,n){if(e=Ag(e),Ag(t)!==e&&n)throw Error(pe(425))}function Lc(){}var Eh=null,wh=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,bw=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(t){return Cg.resolve(null).then(t).catch(Rw)}:bh;function Rw(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sl(e)}function os(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Wi="__reactFiber$"+wo,bl="__reactProps$"+wo,Er="__reactContainer$"+wo,Rh="__reactEvents$"+wo,Aw="__reactListeners$"+wo,Cw="__reactHandles$"+wo;function Bs(t){var e=t[Wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[Wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pg(t);t!==null;){if(n=t[Wi])return n;t=Pg(t)}return e}t=n,n=t.parentNode}return null}function ql(t){return t=t[Wi]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function mf(t){return t[bl]||null}var Ah=[],ka=-1;function Ss(t){return{current:t}}function vt(t){0>ka||(t.current=Ah[ka],Ah[ka]=null,ka--)}function ht(t,e){ka++,Ah[ka]=t.current,t.current=e}var ms={},xn=Ss(ms),In=Ss(!1),Zs=ms;function ao(t,e){var n=t.type.contextTypes;if(!n)return ms;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Nn(t){return t=t.childContextTypes,t!=null}function Dc(){vt(In),vt(xn)}function Lg(t,e,n){if(xn.current!==ms)throw Error(pe(168));ht(xn,e),ht(In,n)}function oy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,hE(t)||"Unknown",r));return Ct({},n,i)}function Ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ms,Zs=xn.current,ht(xn,t),ht(In,In.current),!0}function Dg(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=oy(t,e,Zs),i.__reactInternalMemoizedMergedChildContext=t,vt(In),vt(xn),ht(xn,t)):vt(In),ht(In,n)}var hr=null,gf=!1,td=!1;function ly(t){hr===null?hr=[t]:hr.push(t)}function Pw(t){gf=!0,ly(t)}function Ms(){if(!td&&hr!==null){td=!0;var t=0,e=at;try{var n=hr;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hr=null,gf=!1}catch(r){throw hr!==null&&(hr=hr.slice(t+1)),Ix(dm,Ms),r}finally{at=e,td=!1}}return null}var Ba=[],za=0,Nc=null,Uc=0,fi=[],di=0,Qs=null,mr=1,gr="";function Ds(t,e){Ba[za++]=Uc,Ba[za++]=Nc,Nc=t,Uc=e}function uy(t,e,n){fi[di++]=mr,fi[di++]=gr,fi[di++]=Qs,Qs=t;var i=mr;t=gr;var r=32-Li(i)-1;i&=~(1<<r),n+=1;var s=32-Li(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mr=1<<32-Li(e)+r|n<<r|i,gr=s+t}else mr=1<<s|n<<r|i,gr=t}function Sm(t){t.return!==null&&(Ds(t,1),uy(t,1,0))}function Mm(t){for(;t===Nc;)Nc=Ba[--za],Ba[za]=null,Uc=Ba[--za],Ba[za]=null;for(;t===Qs;)Qs=fi[--di],fi[di]=null,gr=fi[--di],fi[di]=null,mr=fi[--di],fi[di]=null}var Qn=null,qn=null,xt=!1,Ai=null;function cy(t,e){var n=mi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,qn=os(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qs!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,qn=null,!0):!1;default:return!1}}function Ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ph(t){if(xt){var e=qn;if(e){var n=e;if(!Ig(t,e)){if(Ch(t))throw Error(pe(418));e=os(n.nextSibling);var i=Qn;e&&Ig(t,e)?cy(i,n):(t.flags=t.flags&-4097|2,xt=!1,Qn=t)}}else{if(Ch(t))throw Error(pe(418));t.flags=t.flags&-4097|2,xt=!1,Qn=t}}}function Ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function vu(t){if(t!==Qn)return!1;if(!xt)return Ng(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=qn)){if(Ch(t))throw fy(),Error(pe(418));for(;e;)cy(t,e),e=os(e.nextSibling)}if(Ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qn=os(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qn=null}}else qn=Qn?os(t.stateNode.nextSibling):null;return!0}function fy(){for(var t=qn;t;)t=os(t.nextSibling)}function oo(){qn=Qn=null,xt=!1}function Em(t){Ai===null?Ai=[t]:Ai.push(t)}var Lw=Lr.ReactCurrentBatchConfig;function Fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function xu(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ug(t){var e=t._init;return e(t._payload)}function dy(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=fs(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,y,S){return v===null||v.tag!==6?(v=ld(y,h.mode,S),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,S){var M=y.type;return M===Ia?c(h,v,y.props.children,S,y.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yr&&Ug(M)===v.type)?(S=r(v,y.props),S.ref=Fo(h,v,y),S.return=h,S):(S=lc(y.type,y.key,y.props,null,h.mode,S),S.ref=Fo(h,v,y),S.return=h,S)}function u(h,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=ud(y,h.mode,S),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function c(h,v,y,S,M){return v===null||v.tag!==7?(v=Ys(y,h.mode,S,M),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ld(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:return y=lc(v.type,v.key,v.props,null,h.mode,y),y.ref=Fo(h,null,v),y.return=h,y;case Da:return v=ud(v,h.mode,y),v.return=h,v;case Yr:var S=v._init;return d(h,S(v._payload),y)}if(qo(v)||Lo(v))return v=Ys(v,h.mode,y,null),v.return=h,v;xu(h,v)}return null}function f(h,v,y,S){var M=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:o(h,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lu:return y.key===M?l(h,v,y,S):null;case Da:return y.key===M?u(h,v,y,S):null;case Yr:return M=y._init,f(h,v,M(y._payload),S)}if(qo(y)||Lo(y))return M!==null?null:c(h,v,y,S,null);xu(h,y)}return null}function p(h,v,y,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,o(v,h,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case lu:return h=h.get(S.key===null?y:S.key)||null,l(v,h,S,M);case Da:return h=h.get(S.key===null?y:S.key)||null,u(v,h,S,M);case Yr:var T=S._init;return p(h,v,y,T(S._payload),M)}if(qo(S)||Lo(S))return h=h.get(y)||null,c(v,h,S,M,null);xu(v,S)}return null}function g(h,v,y,S){for(var M=null,T=null,w=v,x=v=0,b=null;w!==null&&x<y.length;x++){w.index>x?(b=w,w=null):b=w.sibling;var P=f(h,w,y[x],S);if(P===null){w===null&&(w=b);break}t&&w&&P.alternate===null&&e(h,w),v=s(P,v,x),T===null?M=P:T.sibling=P,T=P,w=b}if(x===y.length)return n(h,w),xt&&Ds(h,x),M;if(w===null){for(;x<y.length;x++)w=d(h,y[x],S),w!==null&&(v=s(w,v,x),T===null?M=w:T.sibling=w,T=w);return xt&&Ds(h,x),M}for(w=i(h,w);x<y.length;x++)b=p(w,h,x,y[x],S),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?x:b.key),v=s(b,v,x),T===null?M=b:T.sibling=b,T=b);return t&&w.forEach(function(L){return e(h,L)}),xt&&Ds(h,x),M}function _(h,v,y,S){var M=Lo(y);if(typeof M!="function")throw Error(pe(150));if(y=M.call(y),y==null)throw Error(pe(151));for(var T=M=null,w=v,x=v=0,b=null,P=y.next();w!==null&&!P.done;x++,P=y.next()){w.index>x?(b=w,w=null):b=w.sibling;var L=f(h,w,P.value,S);if(L===null){w===null&&(w=b);break}t&&w&&L.alternate===null&&e(h,w),v=s(L,v,x),T===null?M=L:T.sibling=L,T=L,w=b}if(P.done)return n(h,w),xt&&Ds(h,x),M;if(w===null){for(;!P.done;x++,P=y.next())P=d(h,P.value,S),P!==null&&(v=s(P,v,x),T===null?M=P:T.sibling=P,T=P);return xt&&Ds(h,x),M}for(w=i(h,w);!P.done;x++,P=y.next())P=p(w,h,x,P.value,S),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?x:P.key),v=s(P,v,x),T===null?M=P:T.sibling=P,T=P);return t&&w.forEach(function(N){return e(h,N)}),xt&&Ds(h,x),M}function m(h,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Ia&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case lu:e:{for(var M=y.key,T=v;T!==null;){if(T.key===M){if(M=y.type,M===Ia){if(T.tag===7){n(h,T.sibling),v=r(T,y.props.children),v.return=h,h=v;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yr&&Ug(M)===T.type){n(h,T.sibling),v=r(T,y.props),v.ref=Fo(h,T,y),v.return=h,h=v;break e}n(h,T);break}else e(h,T);T=T.sibling}y.type===Ia?(v=Ys(y.props.children,h.mode,S,y.key),v.return=h,h=v):(S=lc(y.type,y.key,y.props,null,h.mode,S),S.ref=Fo(h,v,y),S.return=h,h=S)}return a(h);case Da:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=ud(y,h.mode,S),v.return=h,h=v}return a(h);case Yr:return T=y._init,m(h,v,T(y._payload),S)}if(qo(y))return g(h,v,y,S);if(Lo(y))return _(h,v,y,S);xu(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=ld(y,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return m}var lo=dy(!0),hy=dy(!1),Fc=Ss(null),Oc=null,Va=null,wm=null;function Tm(){wm=Va=Oc=null}function bm(t){var e=Fc.current;vt(Fc),t._currentValue=e}function Lh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Za(t,e){Oc=t,wm=Va=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dn=!0),t.firstContext=null)}function xi(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},Va===null){if(Oc===null)throw Error(pe(308));Va=t,Oc.dependencies={lanes:0,firstContext:t}}else Va=Va.next=t;return e}var zs=null;function Rm(t){zs===null?zs=[t]:zs.push(t)}function py(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rm(e)):(n.next=r.next,r.next=n),e.interleaved=n,wr(t,i)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function Am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function my(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ls(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wr(t,n)}return r=i.interleaved,r===null?(e.next=e,Rm(i)):(e.next=r.next,r.next=e),i.interleaved=e,wr(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hm(t,n)}}function Fg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kc(t,e,n,i){var r=t.updateQueue;$r=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,_=o;switch(f=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Ct({},d,f);break e;case 2:$r=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ea|=a,t.lanes=a,t.memoizedState=d}}function Og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var Kl={},Zi=Ss(Kl),Rl=Ss(Kl),Al=Ss(Kl);function Vs(t){if(t===Kl)throw Error(pe(174));return t}function Cm(t,e){switch(ht(Al,e),ht(Rl,t),ht(Zi,Kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fh(e,t)}vt(Zi),ht(Zi,e)}function uo(){vt(Zi),vt(Rl),vt(Al)}function gy(t){Vs(Al.current);var e=Vs(Zi.current),n=fh(e,t.type);e!==n&&(ht(Rl,t),ht(Zi,n))}function Pm(t){Rl.current===t&&(vt(Zi),vt(Rl))}var wt=Ss(0);function Bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function Lm(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var ic=Lr.ReactCurrentDispatcher,id=Lr.ReactCurrentBatchConfig,Js=0,Rt=null,jt=null,Jt=null,zc=!1,ol=!1,Cl=0,Dw=0;function cn(){throw Error(pe(321))}function Dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ni(t[n],e[n]))return!1;return!0}function Im(t,e,n,i,r,s){if(Js=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?Fw:Ow,t=n(i,r),ol){s=0;do{if(ol=!1,Cl=0,25<=s)throw Error(pe(301));s+=1,Jt=jt=null,e.updateQueue=null,ic.current=kw,t=n(i,r)}while(ol)}if(ic.current=Vc,e=jt!==null&&jt.next!==null,Js=0,Jt=jt=Rt=null,zc=!1,e)throw Error(pe(300));return t}function Nm(){var t=Cl!==0;return Cl=0,t}function Vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Rt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function yi(){if(jt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Jt===null?Rt.memoizedState:Jt.next;if(e!==null)Jt=e,jt=t;else{if(t===null)throw Error(pe(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Jt===null?Rt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Pl(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=yi(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Js&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Rt.lanes|=c,ea|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Ni(i,e.memoizedState)||(Dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,ea|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sd(t){var e=yi(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Ni(s,e.memoizedState)||(Dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function _y(){}function vy(t,e){var n=Rt,i=yi(),r=e(),s=!Ni(i.memoizedState,r);if(s&&(i.memoizedState=r,Dn=!0),i=i.queue,Um(Sy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Jt!==null&&Jt.memoizedState.tag&1){if(n.flags|=2048,Ll(9,yy.bind(null,n,i,r,e),void 0,null),en===null)throw Error(pe(349));Js&30||xy(n,e,r)}return r}function xy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yy(t,e,n,i){e.value=n,e.getSnapshot=i,My(e)&&Ey(t)}function Sy(t,e,n){return n(function(){My(e)&&Ey(t)})}function My(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ni(t,n)}catch{return!0}}function Ey(t){var e=wr(t,1);e!==null&&Di(e,t,1,-1)}function kg(t){var e=Vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pl,lastRenderedState:t},e.queue=t,t=t.dispatch=Uw.bind(null,Rt,t),[e.memoizedState,t]}function Ll(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function wy(){return yi().memoizedState}function rc(t,e,n,i){var r=Vi();Rt.flags|=t,r.memoizedState=Ll(1|e,n,void 0,i===void 0?null:i)}function _f(t,e,n,i){var r=yi();i=i===void 0?null:i;var s=void 0;if(jt!==null){var a=jt.memoizedState;if(s=a.destroy,i!==null&&Dm(i,a.deps)){r.memoizedState=Ll(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=Ll(1|e,n,s,i)}function Bg(t,e){return rc(8390656,8,t,e)}function Um(t,e){return _f(2048,8,t,e)}function Ty(t,e){return _f(4,2,t,e)}function by(t,e){return _f(4,4,t,e)}function Ry(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ay(t,e,n){return n=n!=null?n.concat([t]):null,_f(4,4,Ry.bind(null,e,t),n)}function Fm(){}function Cy(t,e){var n=yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Py(t,e){var n=yi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ly(t,e,n){return Js&21?(Ni(n,e)||(n=Fx(),Rt.lanes|=n,ea|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=n)}function Iw(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=id.transition;id.transition={};try{t(!1),e()}finally{at=n,id.transition=i}}function Dy(){return yi().memoizedState}function Nw(t,e,n){var i=cs(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Iy(t))Ny(e,n);else if(n=py(t,e,n,i),n!==null){var r=Tn();Di(n,t,i,r),Uy(n,e,i)}}function Uw(t,e,n){var i=cs(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iy(t))Ny(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Ni(o,a)){var l=e.interleaved;l===null?(r.next=r,Rm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=py(t,e,r,i),n!==null&&(r=Tn(),Di(n,t,i,r),Uy(n,e,i))}}function Iy(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function Ny(t,e){ol=zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Uy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hm(t,n)}}var Vc={readContext:xi,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},Fw={readContext:xi,useCallback:function(t,e){return Vi().memoizedState=[t,e===void 0?null:e],t},useContext:xi,useEffect:Bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,Ry.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=Vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Nw.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=Vi();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:Fm,useDeferredValue:function(t){return Vi().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=Iw.bind(null,t[1]),Vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=Vi();if(xt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),en===null)throw Error(pe(349));Js&30||xy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bg(Sy.bind(null,i,s,t),[t]),i.flags|=2048,Ll(9,yy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vi(),e=en.identifierPrefix;if(xt){var n=gr,i=mr;n=(i&~(1<<32-Li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ow={readContext:xi,useCallback:Cy,useContext:xi,useEffect:Um,useImperativeHandle:Ay,useInsertionEffect:Ty,useLayoutEffect:by,useMemo:Py,useReducer:rd,useRef:wy,useState:function(){return rd(Pl)},useDebugValue:Fm,useDeferredValue:function(t){var e=yi();return Ly(e,jt.memoizedState,t)},useTransition:function(){var t=rd(Pl)[0],e=yi().memoizedState;return[t,e]},useMutableSource:_y,useSyncExternalStore:vy,useId:Dy,unstable_isNewReconciler:!1},kw={readContext:xi,useCallback:Cy,useContext:xi,useEffect:Um,useImperativeHandle:Ay,useInsertionEffect:Ty,useLayoutEffect:by,useMemo:Py,useReducer:sd,useRef:wy,useState:function(){return sd(Pl)},useDebugValue:Fm,useDeferredValue:function(t){var e=yi();return jt===null?e.memoizedState=t:Ly(e,jt.memoizedState,t)},useTransition:function(){var t=sd(Pl)[0],e=yi().memoizedState;return[t,e]},useMutableSource:_y,useSyncExternalStore:vy,useId:Dy,unstable_isNewReconciler:!1};function bi(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Dh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vf={isMounted:function(t){return(t=t._reactInternals)?oa(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Tn(),r=cs(t),s=vr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ls(t,s,r),e!==null&&(Di(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Tn(),r=cs(t),s=vr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ls(t,s,r),e!==null&&(Di(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tn(),i=cs(t),r=vr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ls(t,r,i),e!==null&&(Di(e,t,i,n),nc(e,t,i))}};function zg(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!El(n,i)||!El(r,s):!0}function Fy(t,e,n){var i=!1,r=ms,s=e.contextType;return typeof s=="object"&&s!==null?s=xi(s):(r=Nn(e)?Zs:xn.current,i=e.contextTypes,s=(i=i!=null)?ao(t,r):ms),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vf.enqueueReplaceState(e,e.state,null)}function Ih(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Am(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=xi(s):(s=Nn(e)?Zs:xn.current,r.context=ao(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vf.enqueueReplaceState(r,r.state,null),kc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",i=e;do n+=dE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ad(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Bw=typeof WeakMap=="function"?WeakMap:Map;function Oy(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gc||(Gc=!0,Wh=i),Nh(t,e)},n}function ky(t,e,n){n=vr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nh(t,e),typeof i!="function"&&(us===null?us=new Set([this]):us.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Hg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Bw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Jw.bind(null,t,e,n),e.then(t,t))}function Gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,ls(n,e,1))),n.lanes|=1),t)}var zw=Lr.ReactCurrentOwner,Dn=!1;function En(t,e,n,i){e.child=t===null?hy(e,null,n,i):lo(e,t.child,n,i)}function Xg(t,e,n,i,r){n=n.render;var s=e.ref;return Za(e,r),i=Im(t,e,n,i,s,r),n=Nm(),t!==null&&!Dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tr(t,e,r)):(xt&&n&&Sm(e),e.flags|=1,En(t,e,i,r),e.child)}function Yg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,By(t,e,s,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:El,n(a,i)&&t.ref===e.ref)return Tr(t,e,r)}return e.flags|=1,t=fs(s,i),t.ref=e.ref,t.return=e,e.child=t}function By(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(El(s,i)&&t.ref===e.ref)if(Dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Dn=!0);else return e.lanes=t.lanes,Tr(t,e,r)}return Uh(t,e,n,i,r)}function zy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ga,Yn),Yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ga,Yn),Yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ga,Yn),Yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ga,Yn),Yn|=i;return En(t,e,r,n),e.child}function Vy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uh(t,e,n,i,r){var s=Nn(n)?Zs:xn.current;return s=ao(e,s),Za(e,r),n=Im(t,e,n,i,s,r),i=Nm(),t!==null&&!Dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tr(t,e,r)):(xt&&i&&Sm(e),e.flags|=1,En(t,e,n,r),e.child)}function $g(t,e,n,i,r){if(Nn(n)){var s=!0;Ic(e)}else s=!1;if(Za(e,r),e.stateNode===null)sc(t,e),Fy(e,n,i),Ih(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=xi(u):(u=Nn(n)?Zs:xn.current,u=ao(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Vg(e,a,i,u),$r=!1;var f=e.memoizedState;a.state=f,kc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||In.current||$r?(typeof c=="function"&&(Dh(e,n,c,i),l=e.memoizedState),(o=$r||zg(e,n,o,i,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,my(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:bi(e.type,o),a.props=u,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=xi(l):(l=Nn(n)?Zs:xn.current,l=ao(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Vg(e,a,i,l),$r=!1,f=e.memoizedState,a.state=f,kc(e,i,a,r);var g=e.memoizedState;o!==d||f!==g||In.current||$r?(typeof p=="function"&&(Dh(e,n,p,i),g=e.memoizedState),(u=$r||zg(e,n,u,i,f,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Fh(t,e,n,i,s,r)}function Fh(t,e,n,i,r,s){Vy(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Dg(e,n,!1),Tr(t,e,s);i=e.stateNode,zw.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,o,s)):En(t,e,o,s),e.memoizedState=i.state,r&&Dg(e,n,!0),e.child}function Hy(t){var e=t.stateNode;e.pendingContext?Lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lg(t,e.context,!1),Cm(t,e.containerInfo)}function jg(t,e,n,i,r){return oo(),Em(r),e.flags|=256,En(t,e,n,i),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(wt,r&1),t===null)return Ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Sf(a,i,0,null),t=Ys(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kh(n),e.memoizedState=Oh,t):Om(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Vw(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fs(o,s):(s=Ys(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?kh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,i}return s=t.child,t=s.sibling,i=fs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Om(t,e){return e=Sf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yu(t,e,n,i){return i!==null&&Em(i),lo(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vw(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ad(Error(pe(422))),yu(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sf({mode:"visible",children:i.children},r,0,null),s=Ys(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,a),e.child.memoizedState=kh(a),e.memoizedState=Oh,s);if(!(e.mode&1))return yu(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(pe(419)),i=ad(s,i,void 0),yu(t,e,a,i)}if(o=(a&t.childLanes)!==0,Dn||o){if(i=en,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wr(t,r),Di(i,t,r,-1))}return Gm(),i=ad(Error(pe(421))),yu(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=eT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,qn=os(r.nextSibling),Qn=e,xt=!0,Ai=null,t!==null&&(fi[di++]=mr,fi[di++]=gr,fi[di++]=Qs,mr=t.id,gr=t.overflow,Qs=e),e=Om(e,i.children),e.flags|=4096,e)}function qg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lh(t.return,e,n)}function od(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(En(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qg(t,n,e);else if(t.tag===19)qg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Bc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),od(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Bc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}od(e,!0,n,null,s);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ea|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=fs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hw(t,e,n){switch(e.tag){case 3:Hy(e),oo();break;case 5:gy(e);break;case 1:Nn(e.type)&&Ic(e);break;case 4:Cm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Fc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(ht(wt,wt.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);ht(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,zy(t,e,n)}return Tr(t,e,n)}var Xy,Bh,Yy,$y;Xy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bh=function(){};Yy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Vs(Zi.current);var s=null;switch(n){case"input":r=oh(t,r),i=oh(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=ch(t,r),i=ch(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Lc)}dh(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$y=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Gw(t,e,n){var i=e.pendingProps;switch(Mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return Nn(e.type)&&Dc(),fn(e),null;case 3:return i=e.stateNode,uo(),vt(In),vt(xn),Lm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ai!==null&&($h(Ai),Ai=null))),Bh(t,e),fn(e),null;case 5:Pm(e);var r=Vs(Al.current);if(n=e.type,t!==null&&e.stateNode!=null)Yy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return fn(e),null}if(t=Vs(Zi.current),vu(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wi]=e,i[bl]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Zo.length;r++)gt(Zo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":rg(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":ag(i,s),gt("invalid",i)}dh(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&_u(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&_u(i.textContent,o,t),r=["children",""+o]):gl.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":uu(i),sg(i,s,!0);break;case"textarea":uu(i),og(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Lc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Wi]=e,t[bl]=i,Xy(t,e,!1,!1),e.stateNode=t;e:{switch(a=hh(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Zo.length;r++)gt(Zo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":rg(t,i),r=oh(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),gt("invalid",t);break;case"textarea":ag(t,i),r=ch(t,i),gt("invalid",t);break;default:r=i}dh(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?wx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_l(t,l):typeof l=="number"&&_l(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&om(t,s,l,a))}switch(n){case"input":uu(t),sg(t,i,!1);break;case"textarea":uu(t),og(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ps(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$a(t,!!i.multiple,s,!1):i.defaultValue!=null&&$a(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Lc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)$y(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=Vs(Al.current),Vs(Zi.current),vu(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wi]=e,(s=i.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:_u(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_u(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wi]=e,e.stateNode=i}return fn(e),null;case 13:if(vt(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&qn!==null&&e.mode&1&&!(e.flags&128))fy(),oo(),e.flags|=98560,s=!1;else if(s=vu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[Wi]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),s=!1}else Ai!==null&&($h(Ai),Ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?qt===0&&(qt=3):Gm())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return uo(),Bh(t,e),t===null&&wl(e.stateNode.containerInfo),fn(e),null;case 10:return bm(e.type._context),fn(e),null;case 17:return Nn(e.type)&&Dc(),fn(e),null;case 19:if(vt(wt),s=e.memoizedState,s===null)return fn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Oo(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Bc(t),a!==null){for(e.flags|=128,Oo(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&zt()>fo&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Bc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return fn(e),null}else 2*zt()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,n=wt.current,ht(wt,i?n&1|2:n&1),e):(fn(e),null);case 22:case 23:return Hm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Yn&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function Ww(t,e){switch(Mm(e),e.tag){case 1:return Nn(e.type)&&Dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return uo(),vt(In),vt(xn),Lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pm(e),null;case 13:if(vt(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(wt),null;case 4:return uo(),null;case 10:return bm(e.type._context),null;case 22:case 23:return Hm(),null;case 24:return null;default:return null}}var Su=!1,pn=!1,Xw=typeof WeakSet=="function"?WeakSet:Set,Le=null;function Ha(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function zh(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var Kg=!1;function Yw(t,e){if(Eh=Ac,t=Qx(),ym(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},Ac=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:bi(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(S){Dt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return g=Kg,Kg=!1,g}function ll(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zh(e,n,s)}r=r.next}while(r!==i)}}function xf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jy(t){var e=t.alternate;e!==null&&(t.alternate=null,jy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wi],delete e[bl],delete e[Rh],delete e[Aw],delete e[Cw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qy(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lc));else if(i!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function Gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}var rn=null,Ri=!1;function kr(t,e,n){for(n=n.child;n!==null;)Ky(t,e,n),n=n.sibling}function Ky(t,e,n){if(Ki&&typeof Ki.onCommitFiberUnmount=="function")try{Ki.onCommitFiberUnmount(ff,n)}catch{}switch(n.tag){case 5:pn||Ha(n,e);case 6:var i=rn,r=Ri;rn=null,kr(t,e,n),rn=i,Ri=r,rn!==null&&(Ri?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(Ri?(t=rn,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),Sl(t)):ed(rn,n.stateNode));break;case 4:i=rn,r=Ri,rn=n.stateNode.containerInfo,Ri=!0,kr(t,e,n),rn=i,Ri=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zh(n,e,a),r=r.next}while(r!==i)}kr(t,e,n);break;case 1:if(!pn&&(Ha(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Dt(n,e,o)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,kr(t,e,n),pn=i):kr(t,e,n);break;default:kr(t,e,n)}}function Qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xw),e.forEach(function(i){var r=tT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Mi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:rn=o.stateNode,Ri=!1;break e;case 3:rn=o.stateNode.containerInfo,Ri=!0;break e;case 4:rn=o.stateNode.containerInfo,Ri=!0;break e}o=o.return}if(rn===null)throw Error(pe(160));Ky(s,a,r),rn=null,Ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zy(e,t),e=e.sibling}function Zy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mi(e,t),ki(t),i&4){try{ll(3,t,t.return),xf(3,t)}catch(_){Dt(t,t.return,_)}try{ll(5,t,t.return)}catch(_){Dt(t,t.return,_)}}break;case 1:Mi(e,t),ki(t),i&512&&n!==null&&Ha(n,n.return);break;case 5:if(Mi(e,t),ki(t),i&512&&n!==null&&Ha(n,n.return),t.flags&32){var r=t.stateNode;try{_l(r,"")}catch(_){Dt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&xx(r,s),hh(o,a);var u=hh(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?wx(r,d):c==="dangerouslySetInnerHTML"?Mx(r,d):c==="children"?_l(r,d):om(r,c,d,u)}switch(o){case"input":lh(r,s);break;case"textarea":yx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$a(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?$a(r,!!s.multiple,s.defaultValue,!0):$a(r,!!s.multiple,s.multiple?[]:"",!1))}r[bl]=s}catch(_){Dt(t,t.return,_)}}break;case 6:if(Mi(e,t),ki(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Dt(t,t.return,_)}}break;case 3:if(Mi(e,t),ki(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sl(e.containerInfo)}catch(_){Dt(t,t.return,_)}break;case 4:Mi(e,t),ki(t);break;case 13:Mi(e,t),ki(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zm=zt())),i&4&&Qg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(u=pn)||c,Mi(e,t),pn=u):Mi(e,t),ki(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Le=t,c=t.child;c!==null;){for(d=Le=c;Le!==null;){switch(f=Le,p=f.child,f.tag){case 0:case 11:case 14:case 15:ll(4,f,f.return);break;case 1:Ha(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Dt(i,n,_)}}break;case 5:Ha(f,f.return);break;case 22:if(f.memoizedState!==null){e_(d);continue}}p!==null?(p.return=f,Le=p):e_(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ex("display",a))}catch(_){Dt(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Dt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mi(e,t),ki(t),i&4&&Qg(t);break;case 21:break;default:Mi(e,t),ki(t)}}function ki(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qy(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_l(r,""),i.flags&=-33);var s=Zg(t);Gh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Zg(t);Hh(t,o,a);break;default:throw Error(pe(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $w(t,e,n){Le=t,Qy(t)}function Qy(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var r=Le,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Su;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||pn;o=Su;var u=pn;if(Su=a,(pn=l)&&!u)for(Le=r;Le!==null;)a=Le,l=a.child,a.tag===22&&a.memoizedState!==null?t_(r):l!==null?(l.return=a,Le=l):t_(r);for(;s!==null;)Le=s,Qy(s),s=s.sibling;Le=r,Su=o,pn=u}Jg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Le=s):Jg(t)}}function Jg(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||xf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Og(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Og(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Sl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}pn||e.flags&512&&Vh(e)}catch(f){Dt(e,e.return,f)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function e_(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function t_(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xf(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{Vh(e)}catch(l){Dt(e,s,l)}break;case 5:var a=e.return;try{Vh(e)}catch(l){Dt(e,a,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){Le=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Le=o;break}Le=e.return}}var jw=Math.ceil,Hc=Lr.ReactCurrentDispatcher,km=Lr.ReactCurrentOwner,vi=Lr.ReactCurrentBatchConfig,et=0,en=null,Yt=null,an=0,Yn=0,Ga=Ss(0),qt=0,Dl=null,ea=0,yf=0,Bm=0,ul=null,Pn=null,zm=0,fo=1/0,fr=null,Gc=!1,Wh=null,us=null,Mu=!1,Qr=null,Wc=0,cl=0,Xh=null,ac=-1,oc=0;function Tn(){return et&6?zt():ac!==-1?ac:ac=zt()}function cs(t){return t.mode&1?et&2&&an!==0?an&-an:Lw.transition!==null?(oc===0&&(oc=Fx()),oc):(t=at,t!==0||(t=window.event,t=t===void 0?16:Gx(t.type)),t):1}function Di(t,e,n,i){if(50<cl)throw cl=0,Xh=null,Error(pe(185));$l(t,n,i),(!(et&2)||t!==en)&&(t===en&&(!(et&2)&&(yf|=n),qt===4&&qr(t,an)),Un(t,i),n===1&&et===0&&!(e.mode&1)&&(fo=zt()+500,gf&&Ms()))}function Un(t,e){var n=t.callbackNode;LE(t,e);var i=Rc(t,t===en?an:0);if(i===0)n!==null&&cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cg(n),e===1)t.tag===0?Pw(n_.bind(null,t)):ly(n_.bind(null,t)),bw(function(){!(et&6)&&Ms()}),n=null;else{switch(Ox(i)){case 1:n=dm;break;case 4:n=Nx;break;case 16:n=bc;break;case 536870912:n=Ux;break;default:n=bc}n=aS(n,Jy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jy(t,e){if(ac=-1,oc=0,et&6)throw Error(pe(327));var n=t.callbackNode;if(Qa()&&t.callbackNode!==n)return null;var i=Rc(t,t===en?an:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xc(t,i);else{e=i;var r=et;et|=2;var s=tS();(en!==t||an!==e)&&(fr=null,fo=zt()+500,Xs(t,e));do try{Zw();break}catch(o){eS(t,o)}while(!0);Tm(),Hc.current=s,et=r,Yt!==null?e=0:(en=null,an=0,e=qt)}if(e!==0){if(e===2&&(r=vh(t),r!==0&&(i=r,e=Yh(t,r))),e===1)throw n=Dl,Xs(t,0),qr(t,i),Un(t,zt()),n;if(e===6)qr(t,i);else{if(r=t.current.alternate,!(i&30)&&!qw(r)&&(e=Xc(t,i),e===2&&(s=vh(t),s!==0&&(i=s,e=Yh(t,s))),e===1))throw n=Dl,Xs(t,0),qr(t,i),Un(t,zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Is(t,Pn,fr);break;case 3:if(qr(t,i),(i&130023424)===i&&(e=zm+500-zt(),10<e)){if(Rc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bh(Is.bind(null,t,Pn,fr),e);break}Is(t,Pn,fr);break;case 4:if(qr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Li(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jw(i/1960))-i,10<i){t.timeoutHandle=bh(Is.bind(null,t,Pn,fr),i);break}Is(t,Pn,fr);break;case 5:Is(t,Pn,fr);break;default:throw Error(pe(329))}}}return Un(t,zt()),t.callbackNode===n?Jy.bind(null,t):null}function Yh(t,e){var n=ul;return t.current.memoizedState.isDehydrated&&(Xs(t,e).flags|=256),t=Xc(t,e),t!==2&&(e=Pn,Pn=n,e!==null&&$h(e)),t}function $h(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function qw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qr(t,e){for(e&=~Bm,e&=~yf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Li(e),i=1<<n;t[n]=-1,e&=~i}}function n_(t){if(et&6)throw Error(pe(327));Qa();var e=Rc(t,0);if(!(e&1))return Un(t,zt()),null;var n=Xc(t,e);if(t.tag!==0&&n===2){var i=vh(t);i!==0&&(e=i,n=Yh(t,i))}if(n===1)throw n=Dl,Xs(t,0),qr(t,e),Un(t,zt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Is(t,Pn,fr),Un(t,zt()),null}function Vm(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(fo=zt()+500,gf&&Ms())}}function ta(t){Qr!==null&&Qr.tag===0&&!(et&6)&&Qa();var e=et;et|=1;var n=vi.transition,i=at;try{if(vi.transition=null,at=1,t)return t()}finally{at=i,vi.transition=n,et=e,!(et&6)&&Ms()}}function Hm(){Yn=Ga.current,vt(Ga)}function Xs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tw(n)),Yt!==null)for(n=Yt.return;n!==null;){var i=n;switch(Mm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dc();break;case 3:uo(),vt(In),vt(xn),Lm();break;case 5:Pm(i);break;case 4:uo();break;case 13:vt(wt);break;case 19:vt(wt);break;case 10:bm(i.type._context);break;case 22:case 23:Hm()}n=n.return}if(en=t,Yt=t=fs(t.current,null),an=Yn=e,qt=0,Dl=null,Bm=yf=ea=0,Pn=ul=null,zs!==null){for(e=0;e<zs.length;e++)if(n=zs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}zs=null}return t}function eS(t,e){do{var n=Yt;try{if(Tm(),ic.current=Vc,zc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zc=!1}if(Js=0,Jt=jt=Rt=null,ol=!1,Cl=0,km.current=null,n===null||n.return===null){qt=1,Dl=e,Yt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=an,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gg(a);if(p!==null){p.flags&=-257,Wg(p,a,o,s,e),p.mode&1&&Hg(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Hg(s,u,e),Gm();break e}l=Error(pe(426))}}else if(xt&&o.mode&1){var m=Gg(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wg(m,a,o,s,e),Em(co(l,o));break e}}s=l=co(l,o),qt!==4&&(qt=2),ul===null?ul=[s]:ul.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Oy(s,l,e);Fg(s,h);break e;case 1:o=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(us===null||!us.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ky(s,o,e);Fg(s,S);break e}}s=s.return}while(s!==null)}iS(n)}catch(M){e=M,Yt===n&&n!==null&&(Yt=n=n.return);continue}break}while(!0)}function tS(){var t=Hc.current;return Hc.current=Vc,t===null?Vc:t}function Gm(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||!(ea&268435455)&&!(yf&268435455)||qr(en,an)}function Xc(t,e){var n=et;et|=2;var i=tS();(en!==t||an!==e)&&(fr=null,Xs(t,e));do try{Kw();break}catch(r){eS(t,r)}while(!0);if(Tm(),et=n,Hc.current=i,Yt!==null)throw Error(pe(261));return en=null,an=0,qt}function Kw(){for(;Yt!==null;)nS(Yt)}function Zw(){for(;Yt!==null&&!ME();)nS(Yt)}function nS(t){var e=sS(t.alternate,t,Yn);t.memoizedProps=t.pendingProps,e===null?iS(t):Yt=e,km.current=null}function iS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ww(n,e),n!==null){n.flags&=32767,Yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Yt=null;return}}else if(n=Gw(n,e,Yn),n!==null){Yt=n;return}if(e=e.sibling,e!==null){Yt=e;return}Yt=e=t}while(e!==null);qt===0&&(qt=5)}function Is(t,e,n){var i=at,r=vi.transition;try{vi.transition=null,at=1,Qw(t,e,n,i)}finally{vi.transition=r,at=i}return null}function Qw(t,e,n,i){do Qa();while(Qr!==null);if(et&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DE(t,s),t===en&&(Yt=en=null,an=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mu||(Mu=!0,aS(bc,function(){return Qa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vi.transition,vi.transition=null;var a=at;at=1;var o=et;et|=4,km.current=null,Yw(t,n),Zy(n,t),vw(wh),Ac=!!Eh,wh=Eh=null,t.current=n,$w(n),EE(),et=o,at=a,vi.transition=s}else t.current=n;if(Mu&&(Mu=!1,Qr=t,Wc=r),s=t.pendingLanes,s===0&&(us=null),bE(n.stateNode),Un(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gc)throw Gc=!1,t=Wh,Wh=null,t;return Wc&1&&t.tag!==0&&Qa(),s=t.pendingLanes,s&1?t===Xh?cl++:(cl=0,Xh=t):cl=0,Ms(),null}function Qa(){if(Qr!==null){var t=Ox(Wc),e=vi.transition,n=at;try{if(vi.transition=null,at=16>t?16:t,Qr===null)var i=!1;else{if(t=Qr,Qr=null,Wc=0,et&6)throw Error(pe(331));var r=et;for(et|=4,Le=t.current;Le!==null;){var s=Le,a=s.child;if(Le.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Le=u;Le!==null;){var c=Le;switch(c.tag){case 0:case 11:case 15:ll(8,c,s)}var d=c.child;if(d!==null)d.return=c,Le=d;else for(;Le!==null;){c=Le;var f=c.sibling,p=c.return;if(jy(c),c===u){Le=null;break}if(f!==null){f.return=p,Le=f;break}Le=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Le=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Le=a;else e:for(;Le!==null;){if(s=Le,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ll(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Le=h;break e}Le=s.return}}var v=t.current;for(Le=v;Le!==null;){a=Le;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Le=y;else e:for(a=v;Le!==null;){if(o=Le,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xf(9,o)}}catch(M){Dt(o,o.return,M)}if(o===a){Le=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Le=S;break e}Le=o.return}}if(et=r,Ms(),Ki&&typeof Ki.onPostCommitFiberRoot=="function")try{Ki.onPostCommitFiberRoot(ff,t)}catch{}i=!0}return i}finally{at=n,vi.transition=e}}return!1}function i_(t,e,n){e=co(n,e),e=Oy(t,e,1),t=ls(t,e,1),e=Tn(),t!==null&&($l(t,1,e),Un(t,e))}function Dt(t,e,n){if(t.tag===3)i_(t,t,n);else for(;e!==null;){if(e.tag===3){i_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(us===null||!us.has(i))){t=co(n,t),t=ky(e,t,1),e=ls(e,t,1),t=Tn(),e!==null&&($l(e,1,t),Un(e,t));break}}e=e.return}}function Jw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Tn(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(an&n)===n&&(qt===4||qt===3&&(an&130023424)===an&&500>zt()-zm?Xs(t,0):Bm|=n),Un(t,e)}function rS(t,e){e===0&&(t.mode&1?(e=du,du<<=1,!(du&130023424)&&(du=4194304)):e=1);var n=Tn();t=wr(t,e),t!==null&&($l(t,e,n),Un(t,n))}function eT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rS(t,n)}function tT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),rS(t,n)}var sS;sS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||In.current)Dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dn=!1,Hw(t,e,n);Dn=!!(t.flags&131072)}else Dn=!1,xt&&e.flags&1048576&&uy(e,Uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=ao(e,xn.current);Za(e,n),r=Im(null,e,i,t,r,n);var s=Nm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nn(i)?(s=!0,Ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Am(e),r.updater=vf,e.stateNode=r,r._reactInternals=e,Ih(e,i,t,n),e=Fh(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Sm(e),En(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iT(i),t=bi(i,t),r){case 0:e=Uh(null,e,i,t,n);break e;case 1:e=$g(null,e,i,t,n);break e;case 11:e=Xg(null,e,i,t,n);break e;case 14:e=Yg(null,e,i,bi(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),Uh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),$g(t,e,i,r,n);case 3:e:{if(Hy(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,my(t,e),kc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=co(Error(pe(423)),e),e=jg(t,e,i,n,r);break e}else if(i!==r){r=co(Error(pe(424)),e),e=jg(t,e,i,n,r);break e}else for(qn=os(e.stateNode.containerInfo.firstChild),Qn=e,xt=!0,Ai=null,n=hy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),i===r){e=Tr(t,e,n);break e}En(t,e,i,n)}e=e.child}return e;case 5:return gy(e),t===null&&Ph(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Th(i,r)?a=null:s!==null&&Th(i,s)&&(e.flags|=32),Vy(t,e),En(t,e,a,n),e.child;case 6:return t===null&&Ph(e),null;case 13:return Gy(t,e,n);case 4:return Cm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):En(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),Xg(t,e,i,r,n);case 7:return En(t,e,e.pendingProps,n),e.child;case 8:return En(t,e,e.pendingProps.children,n),e.child;case 12:return En(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Fc,i._currentValue),i._currentValue=a,s!==null)if(Ni(s.value,a)){if(s.children===r.children&&!In.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(pe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Lh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}En(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Za(e,n),r=xi(r),i=i(r),e.flags|=1,En(t,e,i,n),e.child;case 14:return i=e.type,r=bi(i,e.pendingProps),r=bi(i.type,r),Yg(t,e,i,r,n);case 15:return By(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bi(i,r),sc(t,e),e.tag=1,Nn(i)?(t=!0,Ic(e)):t=!1,Za(e,n),Fy(e,i,r),Ih(e,i,r,n),Fh(null,e,i,!0,t,n);case 19:return Wy(t,e,n);case 22:return zy(t,e,n)}throw Error(pe(156,e.tag))};function aS(t,e){return Ix(t,e)}function nT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(t,e,n,i){return new nT(t,e,n,i)}function Wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iT(t){if(typeof t=="function")return Wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===um)return 11;if(t===cm)return 14}return 2}function fs(t,e){var n=t.alternate;return n===null?(n=mi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Wm(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ia:return Ys(n.children,r,s,e);case lm:a=8,r|=8;break;case ih:return t=mi(12,n,e,r|2),t.elementType=ih,t.lanes=s,t;case rh:return t=mi(13,n,e,r),t.elementType=rh,t.lanes=s,t;case sh:return t=mi(19,n,e,r),t.elementType=sh,t.lanes=s,t;case gx:return Sf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case px:a=10;break e;case mx:a=9;break e;case um:a=11;break e;case cm:a=14;break e;case Yr:a=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=mi(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ys(t,e,n,i){return t=mi(7,t,i,e),t.lanes=n,t}function Sf(t,e,n,i){return t=mi(22,t,i,e),t.elementType=gx,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=mi(6,t,null,e),t.lanes=n,t}function ud(t,e,n){return e=mi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gf(0),this.expirationTimes=Gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xm(t,e,n,i,r,s,a,o,l){return t=new rT(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),t}function sT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Da,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function oS(t){if(!t)return ms;t=t._reactInternals;e:{if(oa(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(Nn(n))return oy(t,n,e)}return e}function lS(t,e,n,i,r,s,a,o,l){return t=Xm(n,i,!0,t,r,s,a,o,l),t.context=oS(null),n=t.current,i=Tn(),r=cs(n),s=vr(i,r),s.callback=e??null,ls(n,s,r),t.current.lanes=r,$l(t,r,i),Un(t,i),t}function Mf(t,e,n,i){var r=e.current,s=Tn(),a=cs(r);return n=oS(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ls(r,e,a),t!==null&&(Di(t,r,a,s),nc(t,r,a)),a}function Yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function r_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ym(t,e){r_(t,e),(t=t.alternate)&&r_(t,e)}function aT(){return null}var uS=typeof reportError=="function"?reportError:function(t){console.error(t)};function $m(t){this._internalRoot=t}Ef.prototype.render=$m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));Mf(t,e,null,null)};Ef.prototype.unmount=$m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ta(function(){Mf(null,t,null,null)}),e[Er]=null}};function Ef(t){this._internalRoot=t}Ef.prototype.unstable_scheduleHydration=function(t){if(t){var e=zx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&Hx(t)}};function jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function s_(){}function oT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Yc(a);s.call(u)}}var a=lS(e,i,t,0,null,!1,!1,"",s_);return t._reactRootContainer=a,t[Er]=a.current,wl(t.nodeType===8?t.parentNode:t),ta(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Yc(l);o.call(u)}}var l=Xm(t,0,!1,null,null,!1,!1,"",s_);return t._reactRootContainer=l,t[Er]=l.current,wl(t.nodeType===8?t.parentNode:t),ta(function(){Mf(e,l,n,i)}),l}function Tf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Yc(a);o.call(l)}}Mf(e,a,t,r)}else a=oT(n,e,t,r,i);return Yc(a)}kx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ko(e.pendingLanes);n!==0&&(hm(e,n|1),Un(e,zt()),!(et&6)&&(fo=zt()+500,Ms()))}break;case 13:ta(function(){var i=wr(t,1);if(i!==null){var r=Tn();Di(i,t,1,r)}}),Ym(t,1)}};pm=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Tn();Di(e,t,134217728,n)}Ym(t,134217728)}};Bx=function(t){if(t.tag===13){var e=cs(t),n=wr(t,e);if(n!==null){var i=Tn();Di(n,t,e,i)}Ym(t,e)}};zx=function(){return at};Vx=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mf(i);if(!r)throw Error(pe(90));vx(i),lh(i,r)}}}break;case"textarea":yx(t,n);break;case"select":e=n.value,e!=null&&$a(t,!!n.multiple,e,!1)}};Rx=Vm;Ax=ta;var lT={usingClientEntryPoint:!1,Events:[ql,Oa,mf,Tx,bx,Vm]},ko={findFiberByHostInstance:Bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uT={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lx(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||aT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{ff=Eu.inject(uT),Ki=Eu}catch{}}ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lT;ii.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jm(e))throw Error(pe(200));return sT(t,e,null,n)};ii.createRoot=function(t,e){if(!jm(t))throw Error(pe(299));var n=!1,i="",r=uS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xm(t,1,!1,null,null,n,!1,i,r),t[Er]=e.current,wl(t.nodeType===8?t.parentNode:t),new $m(e)};ii.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=Lx(e),t=t===null?null:t.stateNode,t};ii.flushSync=function(t){return ta(t)};ii.hydrate=function(t,e,n){if(!wf(e))throw Error(pe(200));return Tf(null,t,e,!0,n)};ii.hydrateRoot=function(t,e,n){if(!jm(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=uS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=lS(e,null,t,1,n??null,r,!1,s,a),t[Er]=e.current,wl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ef(e)};ii.render=function(t,e,n){if(!wf(e))throw Error(pe(200));return Tf(null,t,e,!1,n)};ii.unmountComponentAtNode=function(t){if(!wf(t))throw Error(pe(40));return t._reactRootContainer?(ta(function(){Tf(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};ii.unstable_batchedUpdates=Vm;ii.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wf(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Tf(t,e,n,!1,i)};ii.version="18.3.1-next-f1338f8080-20240426";function cS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cS)}catch(t){console.error(t)}}cS(),cx.exports=ii;var cT=cx.exports,fS,a_=cT;fS=a_.createRoot,a_.hydrateRoot;/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qm=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,dS=/^[\\/]{2}/;function fT(t,e){return e+t.replace(/\\/g,"/")}var o_="popstate";function l_(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function dT(t={}){function e(i,r){var u;let s=(u=r.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||i.location;return jh("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default",s?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function n(i,r){return typeof r=="string"?r:Il(r)}return pT(e,n,null,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hT(){return Math.random().toString(36).substring(2,10)}function u_(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function jh(t,e,n=null,i,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?To(e):e,state:n,key:e&&e.key||i||hT(),mask:r}}function Il({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function To(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function pT(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,u=c();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function c(){return(a.state||{idx:null}).idx}function d(){o="POP";let m=c(),h=m==null?null:m-u;u=m,l&&l({action:o,location:_.location,delta:h})}function f(m,h){o="PUSH";let v=l_(m)?m:jh(_.location,m,h);u=c()+1;let y=u_(v,u),S=_.createHref(v.mask||v);try{a.pushState(y,"",S)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(S)}s&&l&&l({action:o,location:_.location,delta:1})}function p(m,h){o="REPLACE";let v=l_(m)?m:jh(_.location,m,h);u=c();let y=u_(v,u),S=_.createHref(v.mask||v);a.replaceState(y,"",S),s&&l&&l({action:o,location:_.location,delta:0})}function g(m){return mT(r,m)}let _={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(o_,d),l=m,()=>{r.removeEventListener(o_,d),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return a.go(m)}};return _}function mT(t,e,n=!1){let i="http://localhost";t&&(i=t.location.origin!=="null"?t.location.origin:t.location.href),At(i,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Il(e);return r=r.replace(/ $/,"%20"),!n&&dS.test(r)&&(r=i+r),new URL(r,i)}function hS(t,e,n="/"){return gT(t,e,n,!1)}function gT(t,e,n,i,r){let s=typeof e=="string"?To(e):e,a=br(s.pathname||"/",n);if(a==null)return null;let o=_T(t),l=null,u=AT(a);for(let c=0;l==null&&c<o.length;++c)l=RT(o[c],u,i);return l}function _T(t){let e=pS(t);return vT(e),e}function pS(t,e=[],n=[],i="",r=!1){let s=(a,o,l=r,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(i)&&l)return;At(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length)}let d=Ii([i,c.relativePath]),f=n.concat(c);a.children&&a.children.length>0&&(At(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),pS(a.children,e,f,d,l)),!(a.path==null&&!a.index)&&e.push({path:d,score:TT(d,a.index),routesMeta:f.map((p,g)=>{let[_,m]=_S(p.relativePath,p.caseSensitive,g===f.length-1);return{...p,matcher:_,compiledParams:m}})})};return t.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of mS(a.path))s(a,o,!0,u)}),e}function mS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=mS(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function vT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bT(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var xT=/^:[\w-]+$/,yT=3,ST=2,MT=1,ET=10,wT=-2,c_=t=>t==="*";function TT(t,e){let n=t.split("/"),i=n.length;return n.some(c_)&&(i+=wT),e&&(i+=ST),n.filter(r=>!c_(r)).reduce((r,s)=>r+(xT.test(s)?yT:s===""?MT:ET),i)}function bT(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function RT(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",d={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f=l.matcher&&l.compiledParams?gS(d,c,l.matcher,l.compiledParams):$c(d,c),p=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=$c({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Ii([s,f.pathname]),pathnameBase:LT(Ii([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ii([s,f.pathnameBase]))}return a}function $c(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=_S(t.path,t.caseSensitive,t.end);return gS(t,e,n,i)}function gS(t,e,n,i){let r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let g=o[f]||"";a=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const p=o[f];return d&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function _S(t,e=!1,n=!0){tr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,c)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let d=c.charAt(u+a.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function AT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function br(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function CT(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?To(t):t,s;return n?(n=xS(n),n.startsWith("/")?s=f_(n.substring(1),"/"):s=f_(n,e)):s=e,{pathname:s,search:DT(i),hash:IT(r)}}function f_(t,e){let n=jc(e).split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function cd(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function PT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vS(t){let e=PT(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Km(t,e,n,i=!1){let r;typeof t=="string"?r=To(t):(r={...t},At(!r.pathname||!r.pathname.includes("?"),cd("?","pathname","search",r)),At(!r.pathname||!r.pathname.includes("#"),cd("#","pathname","hash",r)),At(!r.search||!r.search.includes("#"),cd("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=CT(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var xS=t=>t.replace(/[\\/]{2,}/g,"/"),Ii=t=>xS(t.join("/")),jc=t=>t.replace(/\/+$/,""),LT=t=>jc(t).replace(/^\/*/,"/"),DT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,IT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,NT=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function UT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function FT(t){let e=t.map(n=>n.route.path).filter(Boolean);return Ii(e)||"/"}var yS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function SS(t,e){let n=t;if(typeof n!="string"||!qm.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,r=!1;if(yS)try{let s=new URL(window.location.href),a=dS.test(n)?new URL(fT(n,s.protocol)):new URL(n),o=br(a.pathname,e);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:r=!0}catch{tr(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var MS=["POST","PUT","PATCH","DELETE"];new Set(MS);var OT=["GET",...MS];new Set(OT);var kT=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function BT(t){try{return kT.includes(new URL(t).protocol)}catch{return!1}}var bo=O.createContext(null);bo.displayName="DataRouter";var bf=O.createContext(null);bf.displayName="DataRouterState";var ES=O.createContext(!1);function zT(){return O.useContext(ES)}var wS=O.createContext({isTransitioning:!1});wS.displayName="ViewTransition";var VT=O.createContext(new Map);VT.displayName="Fetchers";var HT=O.createContext(null);HT.displayName="Await";var Si=O.createContext(null);Si.displayName="Navigation";var Zl=O.createContext(null);Zl.displayName="Location";var Dr=O.createContext({outlet:null,matches:[],isDataRoute:!1});Dr.displayName="Route";var Zm=O.createContext(null);Zm.displayName="RouteError";var TS="REACT_ROUTER_ERROR",GT="REDIRECT",WT="ROUTE_ERROR_RESPONSE";function XT(t){if(t.startsWith(`${TS}:${GT}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function YT(t){if(t.startsWith(`${TS}:${WT}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new NT(e.status,e.statusText,e.data)}catch{}}function $T(t,{relative:e}={}){At(Ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=O.useContext(Si),{hash:r,pathname:s,search:a}=Jl(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:Ii([n,s])),i.createHref({pathname:o,search:a,hash:r})}function Ql(){return O.useContext(Zl)!=null}function rr(){return At(Ql(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Zl).location}var bS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function RS(t){O.useContext(Si).static||O.useLayoutEffect(t)}function AS(){let{isDataRoute:t}=O.useContext(Dr);return t?ab():jT()}function jT(){At(Ql(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(bo),{basename:e,navigator:n}=O.useContext(Si),{matches:i}=O.useContext(Dr),{pathname:r}=rr(),s=JSON.stringify(vS(i)),a=O.useRef(!1);return RS(()=>{a.current=!0}),O.useCallback((l,u={})=>{if(tr(a.current,bS),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=Km(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ii([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,r,t])}O.createContext(null);function Jl(t,{relative:e}={}){let{matches:n}=O.useContext(Dr),{pathname:i}=rr(),r=JSON.stringify(vS(n));return O.useMemo(()=>Km(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function qT(t,e){return CS(t,e)}function CS(t,e,n){var m;At(Ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=O.useContext(Si),{matches:r}=O.useContext(Dr),s=r[r.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let h=u&&u.path||"";LS(o,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let c=rr(),d;if(e){let h=typeof e=="string"?To(e):e;At(l==="/"||((m=h.pathname)==null?void 0:m.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),d=h}else d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let h=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(h.length).join("/")}let g=n&&n.state.matches.length?n.state.matches.map(h=>Object.assign(h,{route:n.manifest[h.route.id]||h.route})):hS(t,{pathname:p});tr(u||g!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),tr(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=eb(g&&g.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:Ii([l,i.encodeLocation?i.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:Ii([l,i.encodeLocation?i.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),r,n);return e&&_?O.createElement(Zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},_):_}function KT(){let t=sb(),e=UT(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"ErrorBoundary")," or"," ",O.createElement("code",{style:s},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:r},n):null,a)}var ZT=O.createElement(KT,null),PS=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=YT(t.digest);n&&(t=n)}let e=t!==void 0?O.createElement(Dr.Provider,{value:this.props.routeContext},O.createElement(Zm.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?O.createElement(QT,{error:t},e):e}};PS.contextType=ES;var fd=new WeakMap;function QT({children:t,error:e}){let{basename:n}=O.useContext(Si);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=XT(e.digest);if(i){let r=fd.get(e);if(r)throw r;let s=SS(i.location,n),a=s.absoluteURL||s.to;if(BT(a))throw new Error("Invalid redirect location");if(yS&&!fd.get(e))if(s.isExternal||i.reloadDocument)window.location.href=a;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw fd.set(e,o),o}return O.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a}`})}}return t}function JT({routeContext:t,match:e,children:n}){let i=O.useContext(bo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(Dr.Provider,{value:t},n)}function eb(t,e=[],n){let i=n==null?void 0:n.state;if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let r=t,s=i==null?void 0:i.errors;if(s!=null){let c=r.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);At(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let a=!1,o=-1;if(n&&i){a=i.renderFallback;for(let c=0;c<r.length;c++){let d=r[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=c),d.route.id){let{loaderData:f,errors:p}=i,g=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!p||p[d.route.id]===void 0);if(d.route.lazy||g){n.isStatic&&(a=!0),o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}}let l=n==null?void 0:n.onError,u=i&&l?(c,d)=>{var f,p;l(c,{location:i.location,params:((p=(f=i.matches)==null?void 0:f[0])==null?void 0:p.params)??{},pattern:FT(i.matches),errorInfo:d})}:void 0;return r.reduceRight((c,d,f)=>{let p,g=!1,_=null,m=null;i&&(p=s&&d.route.id?s[d.route.id]:void 0,_=d.route.errorElement||ZT,a&&(o<0&&f===0?(LS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),g=!0,m=null):o===f&&(g=!0,m=d.route.hydrateFallbackElement||null)));let h=e.concat(r.slice(0,f+1)),v=()=>{let y;return p?y=_:g?y=m:d.route.Component?y=O.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,O.createElement(JT,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:i!=null},children:y})};return i&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?O.createElement(PS,{location:i.location,revalidation:i.revalidation,component:_,error:p,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):v()},null)}function Qm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tb(t){let e=O.useContext(bo);return At(e,Qm(t)),e}function nb(t){let e=O.useContext(bf);return At(e,Qm(t)),e}function ib(t){let e=O.useContext(Dr);return At(e,Qm(t)),e}function Jm(t){let e=ib(t),n=e.matches[e.matches.length-1];return At(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function rb(){return Jm("useRouteId")}function sb(){var i;let t=O.useContext(Zm),e=nb("useRouteError"),n=Jm("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function ab(){let{router:t}=tb("useNavigate"),e=Jm("useNavigate"),n=O.useRef(!1);return RS(()=>{n.current=!0}),O.useCallback(async(r,s={})=>{tr(n.current,bS),n.current&&(typeof r=="number"?await t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var d_={};function LS(t,e,n){!e&&!d_[t]&&(d_[t]=!0,tr(!1,n))}O.memo(ob);function ob({routes:t,manifest:e,future:n,state:i,isStatic:r,onError:s}){return CS(t,void 0,{manifest:e,state:i,isStatic:r,onError:s})}function qh(t){At(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lb({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1,useTransitions:a}){At(!Ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=O.useMemo(()=>({basename:o,navigator:r,static:s,useTransitions:a,future:{}}),[o,r,s,a]);typeof n=="string"&&(n=To(n));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:p="default",mask:g}=n,_=O.useMemo(()=>{let m=br(u,o);return m==null?null:{location:{pathname:m,search:c,hash:d,state:f,key:p,mask:g},navigationType:i}},[o,u,c,d,f,p,i,g]);return tr(_!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:O.createElement(Si.Provider,{value:l},O.createElement(Zl.Provider,{children:e,value:_}))}function ub({children:t,location:e}){return qT(Kh(t),e)}function Kh(t,e=[]){let n=[];return O.Children.forEach(t,(i,r)=>{if(!O.isValidElement(i))return;let s=[...e,r];if(i.type===O.Fragment){n.push.apply(n,Kh(i.props.children,s));return}At(i.type===qh,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),At(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Kh(i.props.children,s)),n.push(a)}),n}var uc="get",cc="application/x-www-form-urlencoded";function Rf(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function cb(t){return Rf(t)&&t.tagName.toLowerCase()==="button"}function fb(t){return Rf(t)&&t.tagName.toLowerCase()==="form"}function db(t){return Rf(t)&&t.tagName.toLowerCase()==="input"}function hb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pb(t,e){return t.button===0&&(!e||e==="_self")&&!hb(t)}var wu=null;function mb(){if(wu===null)try{new FormData(document.createElement("form"),0),wu=!1}catch{wu=!0}return wu}var gb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dd(t){return t!=null&&!gb.has(t)?(tr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cc}"`),null):t}function _b(t,e){let n,i,r,s,a;if(fb(t)){let o=t.getAttribute("action");i=o?br(o,e):null,n=t.getAttribute("method")||uc,r=dd(t.getAttribute("enctype"))||cc,s=new FormData(t)}else if(cb(t)||db(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?br(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||uc,r=dd(t.getAttribute("formenctype"))||dd(o.getAttribute("enctype"))||cc,s=new FormData(o,t),!mb()){let{name:u,type:c,value:d}=t;if(c==="image"){let f=u?`${u}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else u&&s.append(u,d)}}else{if(Rf(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=uc,i=null,r=cc,a=t}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function e0(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function DS(t,e,n,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&br(r.pathname,e)==="/"?r.pathname=`${jc(e)}/_root.${i}`:r.pathname=`${jc(r.pathname)}.${i}`,r}async function vb(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xb(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function yb(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await vb(s,n);return a.links?a.links():[]}return[]}));return wb(i.flat(1).filter(xb).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function h_(t,e,n,i,r,s){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?e.filter((l,u)=>{var d;let c=i.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Sb(t,e,{includeHydrateFallback:n}={}){return Mb(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function Mb(t){return[...new Set(t)]}function Eb(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function wb(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(Eb(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function t0(){let t=O.useContext(bo);return e0(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Tb(){let t=O.useContext(bf);return e0(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var n0=O.createContext(void 0);n0.displayName="FrameworkContext";function Af(){let t=O.useContext(n0);return e0(t,"You must render this element inside a <HydratedRouter> element"),t}function bb(t,e){let n=O.useContext(n0),[i,r]=O.useState(!1),[s,a]=O.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=e,f=O.useRef(null);O.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let _=h=>{h.forEach(v=>{a(v.isIntersecting)})},m=new IntersectionObserver(_,{threshold:.5});return f.current&&m.observe(f.current),()=>{m.disconnect()}}},[t]),O.useEffect(()=>{if(i){let _=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(_)}}},[i]);let p=()=>{r(!0)},g=()=>{r(!1),a(!1)};return n?t!=="intent"?[s,f,{}]:[s,f,{onFocus:Bo(o,p),onBlur:Bo(l,g),onMouseEnter:Bo(u,p),onMouseLeave:Bo(c,g),onTouchStart:Bo(d,p)}]:[!1,f,{}]}function Bo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Rb({page:t,...e}){let n=zT(),{nonce:i}=Af(),{router:r}=t0(),s=O.useMemo(()=>hS(r.routes,t,r.basename),[r.routes,t,r.basename]);return s?(e.nonce==null&&i&&(e={...e,nonce:i}),n?O.createElement(Cb,{page:t,matches:s,...e}):O.createElement(Pb,{page:t,matches:s,...e})):null}function Ab(t){let{manifest:e,routeModules:n}=Af(),[i,r]=O.useState([]);return O.useEffect(()=>{let s=!1;return yb(t,e,n).then(a=>{s||r(a)}),()=>{s=!0}},[t,e,n]),i}function Cb({page:t,matches:e,...n}){let i=rr(),{future:r}=Af(),{basename:s}=t0(),a=O.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let o=DS(t,s,r.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let c of e)typeof c.route.shouldRevalidate=="function"?l=!0:u.push(c.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,r.v8_trailingSlashAwareDataRequests,t,i,e]);return O.createElement(O.Fragment,null,a.map(o=>O.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function Pb({page:t,matches:e,...n}){let i=rr(),{future:r,manifest:s,routeModules:a}=Af(),{basename:o}=t0(),{loaderData:l,matches:u}=Tb(),c=O.useMemo(()=>h_(t,e,u,s,i,"data"),[t,e,u,s,i]),d=O.useMemo(()=>h_(t,e,u,s,i,"assets"),[t,e,u,s,i]),f=O.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let _=new Set,m=!1;if(e.forEach(v=>{var S;let y=s.routes[v.route.id];!y||!y.hasLoader||(!c.some(M=>M.route.id===v.route.id)&&v.route.id in l&&((S=a[v.route.id])!=null&&S.shouldRevalidate)||y.hasClientLoader?m=!0:_.add(v.route.id))}),_.size===0)return[];let h=DS(t,o,r.v8_trailingSlashAwareDataRequests,"data");return m&&_.size>0&&h.searchParams.set("_routes",e.filter(v=>_.has(v.route.id)).map(v=>v.route.id).join(",")),[h.pathname+h.search]},[o,r.v8_trailingSlashAwareDataRequests,l,i,s,c,e,t,a]),p=O.useMemo(()=>Sb(d,s),[d,s]),g=Ab(d);return O.createElement(O.Fragment,null,f.map(_=>O.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),p.map(_=>O.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),g.map(({key:_,link:m})=>O.createElement("link",{key:_,nonce:n.nonce,...m,crossOrigin:m.crossOrigin??n.crossOrigin})))}function Lb(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Db=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Db&&(window.__reactRouterVersion="7.18.1")}catch{}function Ib({basename:t,children:e,useTransitions:n,window:i}){let r=O.useRef();r.current==null&&(r.current=dT({window:i,v5Compat:!0}));let s=r.current,[a,o]=O.useState({action:s.action,location:s.location}),l=O.useCallback(u=>{n===!1?o(u):O.startTransition(()=>o(u))},[n]);return O.useLayoutEffect(()=>s.listen(l),[s,l]),O.createElement(lb,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:s,useTransitions:n})}var na=O.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...g},_){let{basename:m,navigator:h,useTransitions:v}=O.useContext(Si),y=typeof c=="string"&&qm.test(c),S=SS(c,m);c=S.to;let M=$T(c,{relative:r}),T=rr(),w=null;if(o){let F=Km(o,[],T.mask?T.mask.pathname:"/",!0);m!=="/"&&(F.pathname=F.pathname==="/"?m:Ii([m,F.pathname])),w=h.createHref(F)}let[x,b,P]=bb(i,g),L=Ob(c,{replace:a,mask:o,state:l,target:u,preventScrollReset:d,relative:r,viewTransition:f,defaultShouldRevalidate:p,useTransitions:v});function N(F){e&&e(F),F.defaultPrevented||L(F)}let H=!(S.isExternal||s),X=O.createElement("a",{...g,...P,href:(H?w:void 0)||S.absoluteURL||M,onClick:H?N:e,ref:Lb(_,b),target:u,"data-discover":!y&&n==="render"?"true":void 0});return x&&!y?O.createElement(O.Fragment,null,X,O.createElement(Rb,{page:M})):X});na.displayName="Link";var Nb=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...u},c){let d=Jl(a,{relative:u.relative}),f=rr(),p=O.useContext(bf),{navigator:g,basename:_}=O.useContext(Si),m=p!=null&&Hb(d)&&o===!0,h=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,v=f.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),y=y?y.toLowerCase():null,h=h.toLowerCase()),y&&_&&(y=br(y,_)||y);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let M=v===h||!r&&v.startsWith(h)&&v.charAt(S)==="/",T=y!=null&&(y===h||!r&&y.startsWith(h)&&y.charAt(h.length)==="/"),w={isActive:M,isPending:T,isTransitioning:m},x=M?e:void 0,b;typeof i=="function"?b=i(w):b=[i,M?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let P=typeof s=="function"?s(w):s;return O.createElement(na,{...u,"aria-current":x,className:b,ref:c,style:P,to:a,viewTransition:o},typeof l=="function"?l(w):l)});Nb.displayName="NavLink";var Ub=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:a=uc,action:o,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f,...p},g)=>{let{useTransitions:_}=O.useContext(Si),m=zb(),h=Vb(o,{relative:u}),v=a.toLowerCase()==="get"?"get":"post",y=typeof o=="string"&&qm.test(o),S=M=>{if(l&&l(M),M.defaultPrevented)return;M.preventDefault();let T=M.nativeEvent.submitter,w=(T==null?void 0:T.getAttribute("formmethod"))||a,x=()=>m(T||M.currentTarget,{fetcherKey:e,method:w,navigate:n,replace:r,state:s,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f});_&&n!==!1?O.startTransition(()=>x()):x()};return O.createElement("form",{ref:g,method:v,action:h,onSubmit:i?l:S,...p,"data-discover":!y&&t==="render"?"true":void 0})});Ub.displayName="Form";function Fb(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function IS(t){let e=O.useContext(bo);return At(e,Fb(t)),e}function Ob(t,{target:e,replace:n,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let c=AS(),d=rr(),f=Jl(t,{relative:a});return O.useCallback(p=>{if(pb(p,e)){p.preventDefault();let g=n!==void 0?n:Il(d)===Il(f),_=()=>c(t,{replace:g,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?O.startTransition(()=>_()):_()}},[d,c,f,n,i,r,e,t,s,a,o,l,u])}var kb=0,Bb=()=>`__${String(++kb)}__`;function zb(){let{router:t}=IS("useSubmit"),{basename:e}=O.useContext(Si),n=rb(),i=t.fetch,r=t.navigate;return O.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:c,body:d}=_b(s,e);if(a.navigate===!1){let f=a.fetcherKey||Bb();await i(f,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await r(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,r,e,n])}function Vb(t,{relative:e}={}){let{basename:n}=O.useContext(Si),i=O.useContext(Dr);At(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Jl(t||".",{relative:e})},a=rr();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(c=>c==="")){o.delete("index"),l.filter(d=>d).forEach(d=>o.append("index",d));let c=o.toString();s.search=c?`?${c}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Ii([n,s.pathname])),Il(s)}function Hb(t,{relative:e}={}){let n=O.useContext(wS);At(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=IS("useViewTransitionState"),r=Jl(t,{relative:e});if(!n.isTransitioning)return!1;let s=br(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=br(n.nextLocation.pathname,i)||n.nextLocation.pathname;return $c(r.pathname,a)!=null||$c(r.pathname,s)!=null}var NS={exports:{}},Gb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Wb=Gb,Xb=Wb;function US(){}function FS(){}FS.resetWarningCache=US;var Yb=function(){function t(i,r,s,a,o,l){if(l!==Xb){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:FS,resetWarningCache:US};return n.PropTypes=n,n};NS.exports=Yb();var $b=NS.exports;const _t=Qv($b);function p_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function m_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?p_(Object(n),!0).forEach(function(i){OS(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function fc(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fc=function(e){return typeof e}:fc=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fc(t)}function OS(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jb(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function qb(t,e){if(t==null)return{};var n=jb(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Kb(t,e){return Zb(t)||Qb(t,e)||Jb(t,e)||eR()}function Zb(t){if(Array.isArray(t))return t}function Qb(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var i=[],r=!0,s=!1,a,o;try{for(n=n.call(t);!(r=(a=n.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw o}}return i}}function Jb(t,e){if(t){if(typeof t=="string")return g_(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g_(t,e)}}function g_(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function eR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yn=function(e,n,i){var r=!!i,s=kt.useRef(i);kt.useEffect(function(){s.current=i},[i]),kt.useEffect(function(){if(!r||!e)return function(){};var a=function(){s.current&&s.current.apply(s,arguments)};return e.on(n,a),function(){e.off(n,a)}},[r,n,e,s])},tR=function(e){var n=kt.useRef(e);return kt.useEffect(function(){n.current=e},[e]),n.current},qc=function(e){return e!==null&&fc(e)==="object"},__="[object Object]",nR=function t(e,n){if(!qc(e)||!qc(n))return e===n;var i=Array.isArray(e),r=Array.isArray(n);if(i!==r)return!1;var s=Object.prototype.toString.call(e)===__,a=Object.prototype.toString.call(n)===__;if(s!==a)return!1;if(!s&&!i)return e===n;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var u={},c=0;c<o.length;c+=1)u[o[c]]=!0;for(var d=0;d<l.length;d+=1)u[l[d]]=!0;var f=Object.keys(u);if(f.length!==o.length)return!1;var p=e,g=n,_=function(h){return t(p[h],g[h])};return f.every(_)},iR=function(e,n,i){return qc(e)?Object.keys(e).reduce(function(r,s){var a=!qc(n)||!nR(e[s],n[s]);return i.includes(s)?(a&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),r):a?m_(m_({},r||{}),{},OS({},s,e[s])):r},null):null},kS=kt.createContext(null);kS.displayName="ElementsContext";var rR=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e};_t.any,_t.object;_t.func.isRequired;var BS=kt.createContext(null);BS.displayName="CheckoutSdkContext";var sR=function(e,n){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CheckoutProvider> provider."));return e},aR=kt.createContext(null);aR.displayName="CheckoutContext";_t.any,_t.shape({fetchClientSecret:_t.func.isRequired,elementsOptions:_t.object}).isRequired;var v_=function(e){var n=kt.useContext(BS),i=kt.useContext(kS);if(n&&i)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return n?sR(n,e):rR(i,e)},oR=["mode"],lR=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Vt=function(e,n){var i="".concat(lR(e),"Element"),r=function(l){var u=l.id,c=l.className,d=l.options,f=d===void 0?{}:d,p=l.onBlur,g=l.onFocus,_=l.onReady,m=l.onChange,h=l.onEscape,v=l.onClick,y=l.onLoadError,S=l.onLoaderStart,M=l.onNetworksChange,T=l.onConfirm,w=l.onCancel,x=l.onShippingAddressChange,b=l.onShippingRateChange,P=l.onSavedPaymentMethodRemove,L=l.onSavedPaymentMethodUpdate,N=v_("mounts <".concat(i,">")),H="elements"in N?N.elements:null,X="checkoutSdk"in N?N.checkoutSdk:null,F=kt.useState(null),Z=Kb(F,2),B=Z[0],k=Z[1],$=kt.useRef(null),W=kt.useRef(null);yn(B,"blur",p),yn(B,"focus",g),yn(B,"escape",h),yn(B,"click",v),yn(B,"loaderror",y),yn(B,"loaderstart",S),yn(B,"networkschange",M),yn(B,"confirm",T),yn(B,"cancel",w),yn(B,"shippingaddresschange",x),yn(B,"shippingratechange",b),yn(B,"savedpaymentmethodremove",P),yn(B,"savedpaymentmethodupdate",L),yn(B,"change",m);var ne;_&&(e==="expressCheckout"?ne=_:ne=function(){_(B)}),yn(B,"ready",ne),kt.useLayoutEffect(function(){if($.current===null&&W.current!==null&&(H||X)){var be=null;if(X)switch(e){case"payment":be=X.createPaymentElement(f);break;case"address":if("mode"in f){var me=f.mode,Ce=qb(f,oR);if(me==="shipping")be=X.createShippingAddressElement(Ce);else if(me==="billing")be=X.createBillingAddressElement(Ce);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":be=X.createExpressCheckoutElement(f);break;case"currencySelector":be=X.createCurrencySelectorElement();break;case"taxId":be=X.createTaxIdElement(f);break;default:throw new Error("Invalid Element type ".concat(i,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else H&&(be=H.create(e,f));$.current=be,k(be),be&&be.mount(W.current)}},[H,X,f]);var ie=tR(f);return kt.useEffect(function(){if($.current){var be=iR(f,ie,["paymentRequest"]);be&&"update"in $.current&&$.current.update(be)}},[f,ie]),kt.useLayoutEffect(function(){return function(){if($.current&&typeof $.current.destroy=="function")try{$.current.destroy(),$.current=null}catch{}}},[]),kt.createElement("div",{id:u,className:c,ref:W})},s=function(l){v_("mounts <".concat(i,">"));var u=l.id,c=l.className;return kt.createElement("div",{id:u,className:c})},a=n?s:r;return a.propTypes={id:_t.string,className:_t.string,onChange:_t.func,onBlur:_t.func,onFocus:_t.func,onReady:_t.func,onEscape:_t.func,onClick:_t.func,onLoadError:_t.func,onLoaderStart:_t.func,onNetworksChange:_t.func,onConfirm:_t.func,onCancel:_t.func,onShippingAddressChange:_t.func,onShippingRateChange:_t.func,onSavedPaymentMethodRemove:_t.func,onSavedPaymentMethodUpdate:_t.func,options:_t.object},a.displayName=i,a.__elementType=e,a},Ht=typeof window>"u",uR=kt.createContext(null);uR.displayName="EmbeddedCheckoutProviderContext";Vt("auBankAccount",Ht);var cR=Vt("card",Ht);Vt("cardNumber",Ht);Vt("cardExpiry",Ht);Vt("cardCvc",Ht);Vt("fpxBank",Ht);Vt("iban",Ht);Vt("idealBank",Ht);Vt("p24Bank",Ht);Vt("epsBank",Ht);Vt("payment",Ht);Vt("expressCheckout",Ht);Vt("currencySelector",Ht);Vt("paymentRequestButton",Ht);Vt("linkAuthentication",Ht);Vt("address",Ht);Vt("shippingAddress",Ht);Vt("paymentMethodMessaging",Ht);Vt("affirmMessage",Ht);Vt("afterpayClearpayMessage",Ht);Vt("taxId",Ht);var i0=Object.defineProperty,fR=Object.getOwnPropertyDescriptor,dR=Object.getOwnPropertyNames,hR=Object.prototype.hasOwnProperty,pR=(t,e)=>{for(var n in e)i0(t,n,{get:e[n],enumerable:!0})},mR=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of dR(e))!hR.call(t,r)&&r!==n&&i0(t,r,{get:()=>e[r],enumerable:!(i=fR(e,r))||i.enumerable});return t},gR=t=>mR(i0({},"__esModule",{value:!0}),t),x_=(t,e,n)=>new Promise((i,r)=>{var s=l=>{try{o(n.next(l))}catch(u){r(u)}},a=l=>{try{o(n.throw(l))}catch(u){r(u)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,a);o((n=n.apply(t,e)).next())}),zS={};pR(zS,{SubmissionError:()=>Ns,appendExtraData:()=>dc,createClient:()=>VS,getDefaultClient:()=>OR,isSubmissionError:()=>bR});var r0=gR(zS),Jr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_R=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function vR(t){t=String(t);for(var e,n,i,r,s="",a=0,o=t.length%3;a<t.length;){if((n=t.charCodeAt(a++))>255||(i=t.charCodeAt(a++))>255||(r=t.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");e=n<<16|i<<8|r,s+=Jr.charAt(e>>18&63)+Jr.charAt(e>>12&63)+Jr.charAt(e>>6&63)+Jr.charAt(e&63)}return o?s.slice(0,o-3)+"===".substring(o):s}function xR(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!_R.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(t.length&3));for(var e,n="",i,r,s=0;s<t.length;)e=Jr.indexOf(t.charAt(s++))<<18|Jr.indexOf(t.charAt(s++))<<12|(i=Jr.indexOf(t.charAt(s++)))<<6|(r=Jr.indexOf(t.charAt(s++))),n+=i===64?String.fromCharCode(e>>16&255):r===64?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,e&255);return n}var yR=()=>navigator.webdriver||!!document.documentElement.getAttribute(xR("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,SR=class{constructor(){this.loadedAt=Date.now(),this.webdriver=yR()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},MR=class{constructor(t){this.kind="success",this.next=t.next}};function ER(t){return"next"in t&&typeof t.next=="string"}var wR=class{constructor(e,n){this.paymentIntentClientSecret=e,this.resubmitKey=n,this.kind="stripePluginPending"}};function TR(t){if("stripe"in t&&"resubmitKey"in t&&typeof t.resubmitKey=="string"){let{stripe:e}=t;return typeof e=="object"&&e!=null&&"paymentIntentClientSecret"in e&&typeof e.paymentIntentClientSecret=="string"}return!1}function bR(t){return t.kind==="error"}var Ns=class{constructor(...t){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var e;for(let n of t){if(!n.field){this.formErrors.push({code:n.code&&RR(n.code)?n.code:"UNSPECIFIED",message:n.message});continue}let i=(e=this.fieldErrors.get(n.field))!=null?e:[];i.push({code:n.code&&CR(n.code)?n.code:"UNSPECIFIED",message:n.message}),this.fieldErrors.set(n.field,i)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(t){var e;return(e=this.fieldErrors.get(t))!=null?e:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function RR(t){return t in AR}var AR={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function CR(t){return t in PR}var PR={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function LR(t){return"errors"in t&&Array.isArray(t.errors)&&t.errors.every(e=>typeof e.message=="string")||"error"in t&&typeof t.error=="string"}var DR="4.0.0",IR=t=>vR(JSON.stringify(t)),NR=t=>{let e=`@formspree/core@${DR}`;return t?`${t} ${e}`:e};function dc(t,e,n){t instanceof FormData?t.append(e,n):t[e]=n}function UR(t){return t!==null&&typeof t=="object"}var FR=class{constructor(t={}){this.project=t.project,this.stripe=t.stripe,typeof window<"u"&&(this.session=new SR)}submitForm(t,e){return x_(this,arguments,function*(n,i,r={}){let s=r.endpoint||"https://formspree.io",a=this.project?`${s}/p/${this.project}/f/${n}`:`${s}/f/${n}`,o={Accept:"application/json","Formspree-Client":NR(r.clientName)};this.session&&(o["Formspree-Session-Data"]=IR(this.session.data())),i instanceof FormData||(o["Content-Type"]="application/json");function l(c){return x_(this,null,function*(){try{let d=yield(yield fetch(a,{method:"POST",mode:"cors",body:c instanceof FormData?c:JSON.stringify(c),headers:o})).json();if(UR(d)){if(LR(d))return Array.isArray(d.errors)?new Ns(...d.errors):new Ns({message:d.error});if(TR(d))return new wR(d.stripe.paymentIntentClientSecret,d.resubmitKey);if(ER(d))return new MR({next:d.next})}return new Ns({message:"Unexpected response format"})}catch(d){let f=d instanceof Error?d.message:`Unknown error while posting to Formspree: ${JSON.stringify(d)}`;return new Ns({message:f})}})}if(this.stripe&&r.createPaymentMethod){let c=yield r.createPaymentMethod();if(c.error)return new Ns({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});dc(i,"paymentMethod",c.paymentMethod.id);let d=yield l(i);if(d.kind==="error")return d;if(d.kind==="stripePluginPending"){let f=yield this.stripe.handleCardAction(d.paymentIntentClientSecret);if(f.error)return new Ns({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});i instanceof FormData?i.delete("paymentMethod"):delete i.paymentMethod,dc(i,"paymentIntent",f.paymentIntent.id),dc(i,"resubmitKey",d.resubmitKey);let p=yield l(i);return y_(p),p}return d}let u=yield l(i);return y_(u),u})}};function y_(t){let{kind:e}=t;if(e!=="success"&&e!=="error")throw new Error(`Unexpected submission result (kind: ${e})`)}var VS=t=>new FR(t),OR=()=>(hd||(hd=VS()),hd),hd;function ha(t){let{prefix:e,field:n,errors:i,...r}=t;if(i==null)return null;let s=n?i.getFieldErrors(n):i.getFormErrors();return s.length===0?null:kt.createElement("div",{...r},e?`${e} `:null,s.map(a=>a.message).join(", "))}var kR=O.createContext({elements:null});function BR(){return O.useContext(kR)}var zR=kt.createContext(null);function VR(){return O.useContext(zR)??{client:r0.getDefaultClient()}}var HR="3.0.0",GR=`@formspree/react@${HR}`;function WR(t,e={}){let n=VR(),{client:i=n.client,extraData:r,origin:s}=e,{elements:a}=BR(),{stripe:o}=i;return async function(l){let u=XR(l)?YR(l):l;if(typeof r=="object")for(let[f,p]of Object.entries(r)){let g;typeof p=="function"?g=await p():g=p,g!==void 0&&r0.appendExtraData(u,f,g)}let c=a==null?void 0:a.getElement(cR),d=o&&c?()=>o.createPaymentMethod({type:"card",card:c,billing_details:$R(u)}):void 0;return i.submitForm(t,u,{endpoint:s,clientName:GR,createPaymentMethod:d})}}function XR(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function YR(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function $R(t){let e={address:jR(t)};for(let n of["name","email","phone"]){let i=t instanceof FormData?t.get(n):t[n];i&&typeof i=="string"&&(e[n]=i)}return e}function jR(t){let e={};for(let[n,i]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let r=t instanceof FormData?t.get(n):t[n];r&&typeof r=="string"&&(e[i]=r)}return e}function qR(t,e={}){let[n,i]=O.useState(null),[r,s]=O.useState(null),[a,o]=O.useState(!1),[l,u]=O.useState(!1),c=WR(t,{client:e.client,extraData:e.data,origin:e.endpoint});return[{errors:n,result:r,submitting:a,succeeded:l},async function(d){o(!0);let f=await c(d);o(!1),r0.isSubmissionError(f)?(i(f),u(!1)):(i(null),s(f),u(!0))},function(){i(null),s(null),o(!1),u(!1)}]}const KR="mnjkgkkl";function ZR(t){const e=new FormData(t),n={},i=String(e.get("name")??"").trim(),r=String(e.get("email")??"").trim(),s=String(e.get("phone")??"").trim(),a=String(e.get("budget")??"").trim(),o=String(e.get("idea")??"").trim();return i||(n.name="Name is required."),r?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)||(n.email="Please enter a valid email address."):n.email="Email is required.",s||(n.phone="Phone is required."),a?(Number.isNaN(Number(a))||Number(a)<0)&&(n.budget="Please enter a valid budget amount."):n.budget="Budget is required.",o||(n.idea="Idea is required."),n}function zo(){return D.jsx("span",{className:"project-form__asterisk","aria-hidden":"true",children:" *"})}function QR({onClose:t}){const[e,n]=qR(KR),[i,r]=O.useState({});O.useEffect(()=>{if(!e.succeeded)return;const o=window.setTimeout(t,2800);return()=>window.clearTimeout(o)},[e.succeeded,t]);const s=o=>{o.preventDefault();const l=ZR(o.currentTarget);if(Object.keys(l).length>0){r(l);return}r({}),n(o)},a=o=>i[o]?"project-form__field project-form__field--invalid":"project-form__field";return e.succeeded?D.jsxs("div",{className:"project-form-success",children:[D.jsx("p",{className:"project-form-success__title",children:"Thanks — we got it."}),D.jsx("p",{className:"project-form-success__body",children:"We’ll review your idea and get back to you shortly."})]}):D.jsxs("form",{className:"project-form",onSubmit:s,noValidate:!0,children:[D.jsxs("label",{className:a("name"),children:[D.jsxs("span",{children:["Name",D.jsx(zo,{})]}),D.jsx("input",{type:"text",name:"name",autoComplete:"name",placeholder:"Your name","aria-invalid":!!i.name,"aria-describedby":i.name?"error-name":void 0}),i.name&&D.jsx("span",{id:"error-name",className:"project-form__error",role:"alert",children:i.name}),D.jsx(ha,{prefix:"Name",field:"name",errors:e.errors,className:"project-form__error"})]}),D.jsxs("label",{className:a("email"),children:[D.jsxs("span",{children:["Email",D.jsx(zo,{})]}),D.jsx("input",{type:"email",name:"email",autoComplete:"email",placeholder:"you@company.com","aria-invalid":!!i.email,"aria-describedby":i.email?"error-email":void 0}),i.email&&D.jsx("span",{id:"error-email",className:"project-form__error",role:"alert",children:i.email}),D.jsx(ha,{prefix:"Email",field:"email",errors:e.errors,className:"project-form__error"})]}),D.jsxs("label",{className:a("phone"),children:[D.jsxs("span",{children:["Phone",D.jsx(zo,{})]}),D.jsx("input",{type:"tel",name:"phone",autoComplete:"tel",placeholder:"+1 (555) 000-0000","aria-invalid":!!i.phone,"aria-describedby":i.phone?"error-phone":void 0}),i.phone&&D.jsx("span",{id:"error-phone",className:"project-form__error",role:"alert",children:i.phone}),D.jsx(ha,{prefix:"Phone",field:"phone",errors:e.errors,className:"project-form__error"})]}),D.jsxs("label",{className:a("budget"),children:[D.jsxs("span",{children:["Budget (USD)",D.jsx(zo,{})]}),D.jsx("input",{type:"number",name:"budget",min:0,step:100,inputMode:"decimal",placeholder:"10000","aria-invalid":!!i.budget,"aria-describedby":i.budget?"error-budget":void 0}),i.budget&&D.jsx("span",{id:"error-budget",className:"project-form__error",role:"alert",children:i.budget}),D.jsx(ha,{prefix:"Budget",field:"budget",errors:e.errors,className:"project-form__error"})]}),D.jsxs("label",{className:`${a("idea")} project-form__field--full`,children:[D.jsxs("span",{children:["Idea",D.jsx(zo,{})]}),D.jsx("textarea",{name:"idea",rows:4,placeholder:"Tell us about the project, goals, and timeline…","aria-invalid":!!i.idea,"aria-describedby":i.idea?"error-idea":void 0}),i.idea&&D.jsx("span",{id:"error-idea",className:"project-form__error",role:"alert",children:i.idea}),D.jsx(ha,{prefix:"Idea",field:"idea",errors:e.errors,className:"project-form__error"})]}),D.jsx(ha,{errors:e.errors,className:"project-form__error project-form__error--form"}),D.jsx("button",{type:"submit",className:"project-form__submit",disabled:e.submitting,children:e.submitting?"Sending…":"Submit"})]})}const HS=O.createContext(null);function GS(){const t=O.useContext(HS);if(!t)throw new Error("useProjectForm must be used within ProjectFormProvider");return t}function JR({children:t}){const[e,n]=O.useState(!1),i=O.useCallback(()=>n(!0),[]),r=O.useCallback(()=>n(!1),[]),s=O.useCallback(()=>n(a=>!a),[]);return D.jsxs(HS.Provider,{value:{open:e,openForm:i,closeForm:r,toggleForm:s},children:[t,D.jsx(eA,{})]})}function eA(){const{open:t,closeForm:e,toggleForm:n}=GS(),i=O.useRef(null),[r,s]=O.useState(0),a=O.useCallback(()=>{e(),s(o=>o+1)},[e]);return O.useEffect(()=>{if(!t)return;const o=l=>{l.key==="Escape"&&a()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,a]),O.useEffect(()=>{if(!t)return;const o=l=>{const u=i.current,c=document.getElementById("project-form-trigger");u!=null&&u.contains(l.target)||c!=null&&c.contains(l.target)||a()};return document.addEventListener("pointerdown",o),()=>document.removeEventListener("pointerdown",o)},[t,a]),D.jsxs("div",{className:"project-form-root","aria-live":"polite",children:[D.jsxs("div",{ref:i,className:`project-form-panel${t?" is-open":""}`,role:"dialog","aria-modal":"true","aria-labelledby":"project-form-title","aria-hidden":!t,children:[D.jsxs("div",{className:"project-form-panel__head",children:[D.jsxs("div",{children:[D.jsx("p",{className:"project-form-panel__eyebrow",children:"New inquiry"}),D.jsx("h2",{id:"project-form-title",className:"project-form-panel__title",children:"Start a project"})]}),D.jsx("button",{type:"button",className:"project-form-panel__close",onClick:a,"aria-label":"Close form",children:"×"})]}),D.jsx(QR,{onClose:a},r)]}),D.jsx("button",{id:"project-form-trigger",type:"button",className:`project-form-trigger${t?" is-open":""}`,onClick:n,"aria-expanded":t,"aria-controls":"project-form-title",children:t?"Close":"Contact"})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const s0="185",tA=0,S_=1,nA=2,hc=1,iA=2,Qo=3,gs=0,Fn=1,Xi=2,xr=0,Ja=1,M_=2,E_=3,w_=4,rA=5,Os=100,sA=101,aA=102,oA=103,lA=104,uA=200,cA=201,fA=202,dA=203,Zh=204,Qh=205,hA=206,pA=207,mA=208,gA=209,_A=210,vA=211,xA=212,yA=213,SA=214,Jh=0,ep=1,tp=2,ho=3,np=4,ip=5,rp=6,sp=7,WS=0,MA=1,EA=2,Qi=0,XS=1,YS=2,$S=3,jS=4,qS=5,KS=6,ZS=7,QS=300,ia=301,po=302,pd=303,md=304,Cf=306,ap=1e3,_r=1001,op=1002,sn=1003,wA=1004,Tu=1005,gn=1006,gd=1007,Hs=1008,pi=1009,JS=1010,e1=1011,Nl=1012,a0=1013,nr=1014,$i=1015,Rr=1016,o0=1017,l0=1018,Ul=1020,t1=35902,n1=35899,i1=1021,r1=1022,Pi=1023,Ar=1026,Gs=1027,s1=1028,u0=1029,ra=1030,c0=1031,f0=1033,pc=33776,mc=33777,gc=33778,_c=33779,lp=35840,up=35841,cp=35842,fp=35843,dp=36196,hp=37492,pp=37496,mp=37488,gp=37489,Kc=37490,_p=37491,vp=37808,xp=37809,yp=37810,Sp=37811,Mp=37812,Ep=37813,wp=37814,Tp=37815,bp=37816,Rp=37817,Ap=37818,Cp=37819,Pp=37820,Lp=37821,Dp=36492,Ip=36494,Np=36495,Up=36283,Fp=36284,Zc=36285,Op=36286,TA=3200,T_=0,bA=1,Kr="",wn="srgb",Qc="srgb-linear",Jc="linear",st="srgb",pa=7680,b_=519,RA=512,AA=513,CA=514,d0=515,PA=516,LA=517,h0=518,DA=519,R_=35044,A_="300 es",ji=2e3,ef=2001;function IA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NA(){const t=Fl("canvas");return t.style.display="block",t}const C_={};function P_(...t){const e="THREE."+t.shift();console.log(e,...t)}function a1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=a1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=a1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function eo(...t){const e=t.join(" ");e in C_||(C_[e]=!0,Be(...t))}function UA(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const FA={[Jh]:ep,[tp]:rp,[np]:sp,[ho]:ip,[ep]:Jh,[rp]:tp,[sp]:np,[ip]:ho};class la{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L_=1234567;const fl=Math.PI/180,Ol=180/Math.PI;function Ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function p0(t,e){return(t%e+e)%e}function OA(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function kA(t,e,n){return t!==e?(n-t)/(e-t):0}function dl(t,e,n){return(1-n)*t+n*e}function BA(t,e,n,i){return dl(t,e,1-Math.exp(-n*i))}function zA(t,e=1){return e-Math.abs(p0(t,e*2)-e)}function VA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function HA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function GA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function WA(t,e){return t+Math.random()*(e-t)}function XA(t){return t*(.5-Math.random())}function YA(t){t!==void 0&&(L_=t);let e=L_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $A(t){return t*fl}function jA(t){return t*Ol}function qA(t){return(t&t-1)===0&&t!==0}function KA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ZA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function QA(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*c,l*d,l*f,o*u);break;case"YZY":t.set(l*f,o*c,l*d,o*u);break;case"ZXZ":t.set(l*d,l*f,o*c,o*u);break;case"XZX":t.set(o*c,l*g,l*p,o*u);break;case"YXY":t.set(l*p,o*c,l*g,o*u);break;case"ZYZ":t.set(l*g,l*p,o*c,o*u);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const D_={DEG2RAD:fl,RAD2DEG:Ol,generateUUID:Ro,clamp:$e,euclideanModulo:p0,mapLinear:OA,inverseLerp:kA,lerp:dl,damp:BA,pingpong:zA,smoothstep:VA,smootherstep:HA,randInt:GA,randFloat:WA,randFloatSpread:XA,seededRandom:YA,degToRad:$A,radToDeg:jA,isPowerOfTwo:qA,ceilPowerOfTwo:KA,floorPowerOfTwo:ZA,setQuaternionFromProperEuler:QA,normalize:Sn,denormalize:Pa},B0=class B0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};B0.prototype.isVector2=!0;let je=B0;class Ao{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==f||u!==p||c!==g){let m=l*f+u*p+c*g+d*_;m<0&&(f=-f,p=-p,g=-g,_=-_,m=-m);let h=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);h=Math.sin(h*v)/y,o=Math.sin(o*v)/y,l=l*h+f*o,u=u*h+p*o,c=c*h+g*o,d=d*h+_*o}else{l=l*h+f*o,u=u*h+p*o,c=c*h+g*o,d=d*h+_*o;const v=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=v,u*=v,c*=v,d*=v}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+c*d+l*p-u*f,e[n+1]=l*g+c*f+u*d-o*p,e[n+2]=u*g+c*p+o*f-l*d,e[n+3]=c*g-o*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"YXZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"ZXY":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"ZYX":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"YZX":this._x=f*c*d+u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d-f*p*g;break;case"XZY":this._x=f*c*d-u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d+f*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const z0=class z0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(I_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(I_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};z0.prototype.isVector3=!0;let Q=z0;const _d=new Q,I_=new Ao,V0=class V0{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],y=r[4],S=r[7],M=r[2],T=r[5],w=r[8];return s[0]=a*_+o*v+l*M,s[3]=a*m+o*y+l*T,s[6]=a*h+o*S+l*w,s[1]=u*_+c*v+d*M,s[4]=u*m+c*y+d*T,s[7]=u*h+c*S+d*w,s[2]=f*_+p*v+g*M,s[5]=f*m+p*y+g*T,s[8]=f*h+p*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,p=u*s-a*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vd.makeScale(e,n)),this}rotate(e){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vd.makeRotation(-e)),this}translate(e,n){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};V0.prototype.isMatrix3=!0;let ze=V0;const vd=new ze,N_=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U_=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JA(){const t={enabled:!0,workingColorSpace:Qc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kr?Jc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qc]:{primaries:e,whitePoint:i,transfer:Jc,toXYZ:N_,fromXYZ:U_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:N_,fromXYZ:U_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),t}const qe=JA();function yr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function to(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ma;class eC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=Fl("canvas")),ma.width=e.width,ma.height=e.height;const r=ma.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ma}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yr(n[i]/255)*255):n[i]=yr(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tC=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tC++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xd(r[a].image)):s.push(xd(r[a]))}else s=xd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let nC=0;const yd=new Q;class _n extends la{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=_r,r=_r,s=gn,a=Hs,o=Pi,l=pi,u=_n.DEFAULT_ANISOTROPY,c=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Ro(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==QS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ap:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case op:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ap:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case op:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=QS;_n.DEFAULT_ANISOTROPY=1;const H0=class H0{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(p+1)/2,M=(h+1)/2,T=(c+f)/4,w=(d+_)/4,x=(g+m)/4;return y>S&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=w/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=w/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};H0.prototype.isVector4=!0;let It=H0;class iC extends la{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new _n(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new m0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends iC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o1 extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rC extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uf=class uf{constructor(e,n,i,r,s,a,o,l,u,c,d,f,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,d,f,p,g,_,m)}set(e,n,i,r,s,a,o,l,u,c,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uf().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ga.setFromMatrixColumn(e,0).length(),s=1/ga.setFromMatrixColumn(e,1).length(),a=1/ga.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*d,g=o*c,_=o*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=f-_*u,n[9]=-o*l,n[2]=_-f*u,n[6]=g+p*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,g=u*c,_=u*d;n[0]=f+_*o,n[4]=g*o-p,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-o,n[2]=p*o-g,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,g=u*c,_=u*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*c,n[9]=_-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*d,g=o*c,_=o*d;n[0]=l*c,n[4]=g*u-p,n[8]=f*u+_,n[1]=l*d,n[5]=_*u+f,n[9]=p*u-g,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,g=o*l,_=o*u;n[0]=l*c,n[4]=_-f*d,n[8]=g*d+p,n[1]=d,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=p*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,p=a*u,g=o*l,_=o*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+_,n[5]=a*c,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*c,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sC,e,aC)}lookAt(e,n,i){const r=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Br.crossVectors(i,Wn),Br.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Br.crossVectors(i,Wn)),Br.normalize(),bu.crossVectors(Wn,Br),r[0]=Br.x,r[4]=bu.x,r[8]=Wn.x,r[1]=Br.y,r[5]=bu.y,r[9]=Wn.y,r[2]=Br.z,r[6]=bu.z,r[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],y=i[7],S=i[11],M=i[15],T=r[0],w=r[4],x=r[8],b=r[12],P=r[1],L=r[5],N=r[9],H=r[13],X=r[2],F=r[6],Z=r[10],B=r[14],k=r[3],$=r[7],W=r[11],ne=r[15];return s[0]=a*T+o*P+l*X+u*k,s[4]=a*w+o*L+l*F+u*$,s[8]=a*x+o*N+l*Z+u*W,s[12]=a*b+o*H+l*B+u*ne,s[1]=c*T+d*P+f*X+p*k,s[5]=c*w+d*L+f*F+p*$,s[9]=c*x+d*N+f*Z+p*W,s[13]=c*b+d*H+f*B+p*ne,s[2]=g*T+_*P+m*X+h*k,s[6]=g*w+_*L+m*F+h*$,s[10]=g*x+_*N+m*Z+h*W,s[14]=g*b+_*H+m*B+h*ne,s[3]=v*T+y*P+S*X+M*k,s[7]=v*w+y*L+S*F+M*$,s[11]=v*x+y*N+S*Z+M*W,s[15]=v*b+y*H+S*B+M*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15],v=l*p-u*f,y=o*p-u*d,S=o*f-l*d,M=a*p-u*c,T=a*f-l*c,w=a*d-o*c;return n*(_*v-m*y+h*S)-i*(g*v-m*M+h*T)+r*(g*y-_*M+h*w)-s*(g*S-_*T+m*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],c=e[10];return n*(a*c-o*u)-i*(s*c-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=n*o-i*a,y=n*l-r*a,S=n*u-s*a,M=i*l-r*o,T=i*u-s*o,w=r*u-s*l,x=c*_-d*g,b=c*m-f*g,P=c*h-p*g,L=d*m-f*_,N=d*h-p*_,H=f*h-p*m,X=v*H-y*N+S*L+M*P-T*b+w*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/X;return e[0]=(o*H-l*N+u*L)*F,e[1]=(r*N-i*H-s*L)*F,e[2]=(_*w-m*T+h*M)*F,e[3]=(f*T-d*w-p*M)*F,e[4]=(l*P-a*H-u*b)*F,e[5]=(n*H-r*P+s*b)*F,e[6]=(m*S-g*w-h*y)*F,e[7]=(c*w-f*S+p*y)*F,e[8]=(a*N-o*P+u*x)*F,e[9]=(i*P-n*N-s*x)*F,e[10]=(g*T-_*S+h*v)*F,e[11]=(d*S-c*T-p*v)*F,e[12]=(o*b-a*L-l*x)*F,e[13]=(n*L-i*b+r*x)*F,e[14]=(_*y-g*M-m*v)*F,e[15]=(c*M-d*y+f*v)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,d=o+o,f=s*u,p=s*c,g=s*d,_=a*c,m=a*d,h=o*d,v=l*u,y=l*c,S=l*d,M=i.x,T=i.y,w=i.z;return r[0]=(1-(_+h))*M,r[1]=(p+S)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+y)*w,r[9]=(m-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ga.set(r[0],r[1],r[2]).length();const o=ga.set(r[4],r[5],r[6]).length(),l=ga.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ei.copy(this);const u=1/a,c=1/o,d=1/l;return Ei.elements[0]*=u,Ei.elements[1]*=u,Ei.elements[2]*=u,Ei.elements[4]*=c,Ei.elements[5]*=c,Ei.elements[6]*=c,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,n.setFromRotationMatrix(Ei),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ji,l=!1){const u=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===ji)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ef)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ji,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===ji)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ef)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};uf.prototype.isMatrix4=!0;let $t=uf;const ga=new Q,Ei=new $t,sC=new Q(0,0,0),aC=new Q(1,1,1),Br=new Q,bu=new Q,Wn=new Q,F_=new $t,O_=new Ao;class sa{constructor(e=0,n=0,i=0,r=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return F_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return O_.setFromEuler(this),this.setFromQuaternion(O_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class l1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oC=0;const k_=new Q,_a=new Ao,sr=new $t,Ru=new Q,Vo=new Q,lC=new Q,uC=new Ao,B_=new Q(1,0,0),z_=new Q(0,1,0),V_=new Q(0,0,1),H_={type:"added"},cC={type:"removed"},va={type:"childadded",child:null},Sd={type:"childremoved",child:null};class On extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oC++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new Q,n=new sa,i=new Ao,r=new Q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new ze}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _a.setFromAxisAngle(e,n),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,n){return _a.setFromAxisAngle(e,n),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(B_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(V_,e)}translateOnAxis(e,n){return k_.copy(e).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(B_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(V_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ru.copy(e):Ru.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Vo,Ru,this.up):sr.lookAt(Ru,Vo,this.up),this.quaternion.setFromRotationMatrix(sr),r&&(sr.extractRotation(r.matrixWorld),_a.setFromRotationMatrix(sr),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H_),va.child=e,this.dispatchEvent(va),va.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cC),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H_),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,lC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,uC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}On.DEFAULT_UP=new Q(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wa extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fC={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const u1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Au={h:0,s:0,l:0};function Ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=p0(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ed(a,s,e+1/3),this.g=Ed(a,s,e),this.b=Ed(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=wn){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const i=u1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return qe.workingToColorSpace(hn.copy(this),e),Math.round($e(hn.r*255,0,255))*65536+Math.round($e(hn.g*255,0,255))*256+Math.round($e(hn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(hn.copy(this),n);const i=hn.r,r=hn.g,s=hn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=wn){qe.workingToColorSpace(hn.copy(this),e);const n=hn.r,i=hn.g,r=hn.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+n,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zr),e.getHSL(Au);const i=dl(zr.h,Au.h,n),r=dl(zr.s,Au.s,n),s=dl(zr.l,Au.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new tt;tt.NAMES=u1;class g0{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=n,this.far=i}clone(){return new g0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class c1 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const wi=new Q,ar=new Q,wd=new Q,or=new Q,xa=new Q,ya=new Q,G_=new Q,Td=new Q,bd=new Q,Rd=new Q,Ad=new It,Cd=new It,Pd=new It;class Ci{constructor(e=new Q,n=new Q,i=new Q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wi.subVectors(e,n),r.cross(wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wi.subVectors(r,n),ar.subVectors(i,n),wd.subVectors(e,n);const a=wi.dot(wi),o=wi.dot(ar),l=wi.dot(wd),u=ar.dot(ar),c=ar.dot(wd),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,or.x),l.addScaledVector(a,or.y),l.addScaledVector(o,or.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ad.setScalar(0),Cd.setScalar(0),Pd.setScalar(0),Ad.fromBufferAttribute(e,n),Cd.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ad,s.x),a.addScaledVector(Cd,s.y),a.addScaledVector(Pd,s.z),a}static isFrontFacing(e,n,i,r){return wi.subVectors(i,n),ar.subVectors(e,n),wi.cross(ar).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),wi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xa.subVectors(r,i),ya.subVectors(s,i),Td.subVectors(e,i);const l=xa.dot(Td),u=ya.dot(Td);if(l<=0&&u<=0)return n.copy(i);bd.subVectors(e,r);const c=xa.dot(bd),d=ya.dot(bd);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(xa,a);Rd.subVectors(e,s);const p=xa.dot(Rd),g=ya.dot(Rd);if(g>=0&&p<=g)return n.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(ya,o);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return G_.subVectors(s,r),o=(d-c)/(d-c+(p-g)),n.copy(r).addScaledVector(G_,o);const h=1/(m+_+f);return a=_*h,o=f*h,n.copy(i).addScaledVector(xa,a).addScaledVector(ya,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eu{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ti):Ti.fromBufferAttribute(s,a),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cu.copy(i.boundingBox)),Cu.applyMatrix4(e.matrixWorld),this.union(Cu)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Pu.subVectors(this.max,Ho),Sa.subVectors(e.a,Ho),Ma.subVectors(e.b,Ho),Ea.subVectors(e.c,Ho),Vr.subVectors(Ma,Sa),Hr.subVectors(Ea,Ma),bs.subVectors(Sa,Ea);let n=[0,-Vr.z,Vr.y,0,-Hr.z,Hr.y,0,-bs.z,bs.y,Vr.z,0,-Vr.x,Hr.z,0,-Hr.x,bs.z,0,-bs.x,-Vr.y,Vr.x,0,-Hr.y,Hr.x,0,-bs.y,bs.x,0];return!Ld(n,Sa,Ma,Ea,Pu)||(n=[1,0,0,0,1,0,0,0,1],!Ld(n,Sa,Ma,Ea,Pu))?!1:(Lu.crossVectors(Vr,Hr),n=[Lu.x,Lu.y,Lu.z],Ld(n,Sa,Ma,Ea,Pu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ti=new Q,Cu=new eu,Sa=new Q,Ma=new Q,Ea=new Q,Vr=new Q,Hr=new Q,bs=new Q,Ho=new Q,Pu=new Q,Lu=new Q,Rs=new Q;function Ld(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Rs.fromArray(t,s);const o=r.x*Math.abs(Rs.x)+r.y*Math.abs(Rs.y)+r.z*Math.abs(Rs.z),l=e.dot(Rs),u=n.dot(Rs),c=i.dot(Rs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Wt=new Q,Du=new je;let dC=0;class er extends la{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=R_,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Du.fromBufferAttribute(this,n),Du.applyMatrix3(e),this.setXY(n,Du.x,Du.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Pa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class f1 extends er{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class d1 extends er{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sr extends er{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hC=new eu,Go=new Q,Dd=new Q;class _0{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Dd)),this.expandByPoint(Go.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pC=0;const oi=new $t,Id=new On,wa=new Q,Xn=new eu,Wo=new eu,Qt=new Q;class Ir extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IA(e)?d1:f1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,i){return oi.makeTranslation(e,n,i),this.applyMatrix4(oi),this}scale(e,n,i){return oi.makeScale(e,n,i),this.applyMatrix4(oi),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Wo.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Xn.min,Wo.min),Xn.expandByPoint(Qt),Qt.addVectors(Xn.max,Wo.max),Xn.expandByPoint(Qt)):(Xn.expandByPoint(Wo.min),Xn.expandByPoint(Wo.max))}Xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Qt.fromBufferAttribute(o,u),l&&(wa.fromBufferAttribute(e,u),Qt.add(wa)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new er(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new Q,l[x]=new Q;const u=new Q,c=new Q,d=new Q,f=new je,p=new je,g=new je,_=new Q,m=new Q;function h(x,b,P){u.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,P),c.sub(u),d.sub(u),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),o[x].add(_),o[b].add(_),o[P].add(_),l[x].add(m),l[b].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,b=v.length;x<b;++x){const P=v[x],L=P.start,N=P.count;for(let H=L,X=L+N;H<X;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new Q,S=new Q,M=new Q,T=new Q;function w(x){M.fromBufferAttribute(r,x),T.copy(M);const b=o[x];y.copy(b),y.sub(M.multiplyScalar(M.dot(b))).normalize(),S.crossVectors(T,b);const L=S.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,L)}for(let x=0,b=v.length;x<b;++x){const P=v[x],L=P.start,N=P.count;for(let H=L,X=L+N;H<X;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new er(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Q,s=new Q,a=new Q,o=new Q,l=new Q,u=new Q,c=new Q,d=new Q;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let h=0;h<c;h++)f[g++]=u[p++]}return new er(f,c,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ir,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mC=0;class Pf extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=Ja,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Qh,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ja&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zh&&(i.blendSrc=this.blendSrc),this.blendDst!==Qh&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new Q,Nd=new Q,Iu=new Q,Gr=new Q,Ud=new Q,Nu=new Q,Fd=new Q;class gC{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ur.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,n),ur.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nd.copy(e).add(n).multiplyScalar(.5),Iu.copy(n).sub(e).normalize(),Gr.copy(this.origin).sub(Nd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Iu),o=Gr.dot(this.direction),l=-Gr.dot(Iu),u=Gr.lengthSq(),c=Math.abs(1-a*a);let d,f,p,g;if(c>0)if(d=a*l-o,f=a*o-l,g=s*c,d>=0)if(f>=-g)if(f<=g){const _=1/c;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Nd).addScaledVector(Iu,f),p}intersectSphere(e,n){ur.subVectors(e.center,this.origin);const i=ur.dot(this.direction),r=ur.dot(ur)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,n,i,r,s){Ud.subVectors(n,e),Nu.subVectors(i,e),Fd.crossVectors(Ud,Nu);let a=this.direction.dot(Fd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gr.subVectors(this.origin,e);const l=o*this.direction.dot(Nu.crossVectors(Gr,Nu));if(l<0)return null;const u=o*this.direction.dot(Ud.cross(Gr));if(u<0||l+u>a)return null;const c=-o*Gr.dot(Fd);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class v0 extends Pf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=WS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const W_=new $t,As=new gC,Uu=new _0,X_=new Q,Fu=new Q,Ou=new Q,ku=new Q,Od=new Q,Bu=new Q,Y_=new Q,zu=new Q;class Ui extends On{constructor(e=new Ir,n=new v0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(Od.fromBufferAttribute(d,e),a?Bu.addScaledVector(Od,c):Bu.addScaledVector(Od.sub(n),c))}n.add(Bu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uu.copy(i.boundingSphere),Uu.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(Uu.containsPoint(As.origin)===!1&&(As.intersectSphere(Uu,X_)===null||As.origin.distanceToSquared(X_)>(e.far-e.near)**2))&&(W_.copy(s).invert(),As.copy(e.ray).applyMatrix4(W_),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,As)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=y;S<M;S+=3){const T=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);r=Vu(this,h,e,i,u,c,d,T,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=Vu(this,a,e,i,u,c,d,v,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,M=y;S<M;S+=3){const T=S,w=S+1,x=S+2;r=Vu(this,h,e,i,u,c,d,T,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,y=m+1,S=m+2;r=Vu(this,a,e,i,u,c,d,v,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _C(t,e,n,i,r,s,a,o){let l;if(e.side===Fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gs,o),l===null)return null;zu.copy(o),zu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(zu);return u<n.near||u>n.far?null:{distance:u,point:zu.clone(),object:t}}function Vu(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Fu),t.getVertexPosition(l,Ou),t.getVertexPosition(u,ku);const c=_C(t,e,n,i,Fu,Ou,ku,Y_);if(c){const d=new Q;Ci.getBarycoord(Y_,Fu,Ou,ku,d),r&&(c.uv=Ci.getInterpolatedAttribute(r,o,l,u,d,new je)),s&&(c.uv1=Ci.getInterpolatedAttribute(s,o,l,u,d,new je)),a&&(c.normal=Ci.getInterpolatedAttribute(a,o,l,u,d,new Q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new Q,materialIndex:0};Ci.getNormal(Fu,Ou,ku,f.normal),c.face=f,c.barycoord=d}return c}class vC extends _n{constructor(e=null,n=1,i=1,r,s,a,o,l,u=sn,c=sn,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new Q,xC=new Q,yC=new ze;class Us{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kd.subVectors(i,n).cross(xC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(kd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yC.getNormalMatrix(e),r=this.coplanarPoint(kd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new _0,SC=new je(.5,.5),Hu=new Q;class h1{constructor(e=new Us,n=new Us,i=new Us,r=new Us,s=new Us,a=new Us){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ji,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],h=s[11],v=s[12],y=s[13],S=s[14],M=s[15];if(r[0].setComponents(u-a,p-c,h-g,M-v).normalize(),r[1].setComponents(u+a,p+c,h+g,M+v).normalize(),r[2].setComponents(u+o,p+d,h+_,M+y).normalize(),r[3].setComponents(u-o,p-d,h-_,M-y).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(u-l,p-f,h-m,M-S).normalize();else if(r[4].setComponents(u-l,p-f,h-m,M-S).normalize(),n===ji)r[5].setComponents(u+l,p+f,h+m,M+S).normalize();else if(n===ef)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const n=SC.distanceTo(e.center);return Cs.radius=.7071067811865476+n,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Hu.x=r.normal.x>0?e.max.x:e.min.x,Hu.y=r.normal.y>0?e.max.y:e.min.y,Hu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p1 extends _n{constructor(e=[],n=ia,i,r,s,a,o,l,u,c){super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mo extends _n{constructor(e,n,i=nr,r,s,a,o=sn,l=sn,u,c=Ar,d=1){if(c!==Ar&&c!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new m0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class MC extends mo{constructor(e,n=nr,i=ia,r,s,a=sn,o=sn,l,u=Ar){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class m1 extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tu extends Ir{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sr(u,3)),this.setAttribute("normal",new Sr(c,3)),this.setAttribute("uv",new Sr(d,2));function g(_,m,h,v,y,S,M,T,w,x,b){const P=S/w,L=M/x,N=S/2,H=M/2,X=T/2,F=w+1,Z=x+1;let B=0,k=0;const $=new Q;for(let W=0;W<Z;W++){const ne=W*L-H;for(let ie=0;ie<F;ie++){const be=ie*P-N;$[_]=be*v,$[m]=ne*y,$[h]=X,u.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[h]=T>0?1:-1,c.push($.x,$.y,$.z),d.push(ie/w),d.push(1-W/x),B+=1}}for(let W=0;W<x;W++)for(let ne=0;ne<w;ne++){const ie=f+ne+F*W,be=f+ne+F*(W+1),me=f+(ne+1)+F*(W+1),Ce=f+(ne+1)+F*W;l.push(ie,be,Ce),l.push(be,me,Ce),k+=6}o.addGroup(p,k,b),p+=k,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Co extends Ir{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const v=h*f-a;for(let y=0;y<u;y++){const S=y*d-s;g.push(S,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const y=v+u*h,S=v+u*(h+1),M=v+1+u*(h+1),T=v+1+u*h;p.push(y,S,T),p.push(S,M,T)}this.setIndex(p),this.setAttribute("position",new Sr(g,3)),this.setAttribute("normal",new Sr(_,3)),this.setAttribute("uv",new Sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}function go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if($_(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if($_(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Mn(t){const e={};for(let n=0;n<t.length;n++){const i=go(t[n]);for(const r in i)e[r]=i[r]}return e}function $_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function EC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const wC={clone:go,merge:Mn};var TC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Pf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TC,this.fragmentShader=bC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=EC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new It().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RC extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class AC extends Pf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CC extends Pf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(j_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!j_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function j_(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class PC{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],g=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const LC=new PC;class x0{constructor(e){this.manager=e!==void 0?e:LC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}x0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ta=new WeakMap;let DC=class extends x0{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bd.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let d=Ta.get(a);d===void 0&&(d=[],Ta.set(a,d)),d.push({onLoad:n,onError:r})}return a}const o=Fl("img");function l(){c(),n&&n(this);const d=Ta.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Ta.delete(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),Bd.remove(`image:${e}`);const f=Ta.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(d)}Ta.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bd.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};class IC extends x0{constructor(e){super(e)}load(e,n,i,r){const s=new _n,a=new DC(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class NC extends On{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Gu=new Q,Wu=new Ao,Bi=new Q;class _1 extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gu,Wu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gu,Wu,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Gu,Wu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gu,Wu,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new Q,q_=new je,K_=new je;class hi extends _1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,n){return this.getViewBounds(e,q_,K_),n.subVectors(K_,q_)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class y0 extends _1{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UC extends NC{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ba=-90,Ra=1;class FC extends On{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(ba,Ra,e,n);r.layers=this.layers,this.add(r);const s=new hi(ba,Ra,e,n);s.layers=this.layers,this.add(s);const a=new hi(ba,Ra,e,n);a.layers=this.layers,this.add(a);const o=new hi(ba,Ra,e,n);o.layers=this.layers,this.add(o);const l=new hi(ba,Ra,e,n);l.layers=this.layers,this.add(l);const u=new hi(ba,Ra,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ef)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class OC extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class v1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const G0=class G0{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};G0.prototype.isMatrix2=!0;let Z_=G0;function Q_(t,e,n,i){const r=kC(i);switch(n){case i1:return t*e;case s1:return t*e/r.components*r.byteLength;case u0:return t*e/r.components*r.byteLength;case ra:return t*e*2/r.components*r.byteLength;case c0:return t*e*2/r.components*r.byteLength;case r1:return t*e*3/r.components*r.byteLength;case Pi:return t*e*4/r.components*r.byteLength;case f0:return t*e*4/r.components*r.byteLength;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case up:case fp:return Math.max(t,16)*Math.max(e,8)/4;case lp:case cp:return Math.max(t,8)*Math.max(e,8)/2;case dp:case hp:case mp:case gp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pp:case Kc:case _p:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Ip:case Np:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Up:case Fp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zc:case Op:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kC(t){switch(t){case pi:case JS:return{byteLength:1,components:1};case Nl:case e1:case Rr:return{byteLength:2,components:1};case o0:case l0:return{byteLength:2,components:4};case nr:case a0:case $i:return{byteLength:4,components:1};case t1:case n1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:s0}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=s0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function x1(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BC(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var zC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$C=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g2="gl_FragColor = linearToOutputTexel( gl_FragColor );",_2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,D2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,G2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_P=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$P=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,KP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:zC,alphahash_pars_fragment:VC,alphamap_fragment:HC,alphamap_pars_fragment:GC,alphatest_fragment:WC,alphatest_pars_fragment:XC,aomap_fragment:YC,aomap_pars_fragment:$C,batching_pars_vertex:jC,batching_vertex:qC,begin_vertex:KC,beginnormal_vertex:ZC,bsdfs:QC,iridescence_fragment:JC,bumpmap_pars_fragment:e2,clipping_planes_fragment:t2,clipping_planes_pars_fragment:n2,clipping_planes_pars_vertex:i2,clipping_planes_vertex:r2,color_fragment:s2,color_pars_fragment:a2,color_pars_vertex:o2,color_vertex:l2,common:u2,cube_uv_reflection_fragment:c2,defaultnormal_vertex:f2,displacementmap_pars_vertex:d2,displacementmap_vertex:h2,emissivemap_fragment:p2,emissivemap_pars_fragment:m2,colorspace_fragment:g2,colorspace_pars_fragment:_2,envmap_fragment:v2,envmap_common_pars_fragment:x2,envmap_pars_fragment:y2,envmap_pars_vertex:S2,envmap_physical_pars_fragment:D2,envmap_vertex:M2,fog_vertex:E2,fog_pars_vertex:w2,fog_fragment:T2,fog_pars_fragment:b2,gradientmap_pars_fragment:R2,lightmap_pars_fragment:A2,lights_lambert_fragment:C2,lights_lambert_pars_fragment:P2,lights_pars_begin:L2,lights_toon_fragment:I2,lights_toon_pars_fragment:N2,lights_phong_fragment:U2,lights_phong_pars_fragment:F2,lights_physical_fragment:O2,lights_physical_pars_fragment:k2,lights_fragment_begin:B2,lights_fragment_maps:z2,lights_fragment_end:V2,lightprobes_pars_fragment:H2,logdepthbuf_fragment:G2,logdepthbuf_pars_fragment:W2,logdepthbuf_pars_vertex:X2,logdepthbuf_vertex:Y2,map_fragment:$2,map_pars_fragment:j2,map_particle_fragment:q2,map_particle_pars_fragment:K2,metalnessmap_fragment:Z2,metalnessmap_pars_fragment:Q2,morphinstance_vertex:J2,morphcolor_vertex:eP,morphnormal_vertex:tP,morphtarget_pars_vertex:nP,morphtarget_vertex:iP,normal_fragment_begin:rP,normal_fragment_maps:sP,normal_pars_fragment:aP,normal_pars_vertex:oP,normal_vertex:lP,normalmap_pars_fragment:uP,clearcoat_normal_fragment_begin:cP,clearcoat_normal_fragment_maps:fP,clearcoat_pars_fragment:dP,iridescence_pars_fragment:hP,opaque_fragment:pP,packing:mP,premultiplied_alpha_fragment:gP,project_vertex:_P,dithering_fragment:vP,dithering_pars_fragment:xP,roughnessmap_fragment:yP,roughnessmap_pars_fragment:SP,shadowmap_pars_fragment:MP,shadowmap_pars_vertex:EP,shadowmap_vertex:wP,shadowmask_pars_fragment:TP,skinbase_vertex:bP,skinning_pars_vertex:RP,skinning_vertex:AP,skinnormal_vertex:CP,specularmap_fragment:PP,specularmap_pars_fragment:LP,tonemapping_fragment:DP,tonemapping_pars_fragment:IP,transmission_fragment:NP,transmission_pars_fragment:UP,uv_pars_fragment:FP,uv_pars_vertex:OP,uv_vertex:kP,worldpos_vertex:BP,background_vert:zP,background_frag:VP,backgroundCube_vert:HP,backgroundCube_frag:GP,cube_vert:WP,cube_frag:XP,depth_vert:YP,depth_frag:$P,distance_vert:jP,distance_frag:qP,equirect_vert:KP,equirect_frag:ZP,linedashed_vert:QP,linedashed_frag:JP,meshbasic_vert:e3,meshbasic_frag:t3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:r3,meshmatcap_frag:s3,meshnormal_vert:a3,meshnormal_frag:o3,meshphong_vert:l3,meshphong_frag:u3,meshphysical_vert:c3,meshphysical_frag:f3,meshtoon_vert:d3,meshtoon_frag:h3,points_vert:p3,points_frag:m3,shadow_vert:g3,shadow_frag:_3,sprite_vert:v3,sprite_frag:x3},Se={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Gi={basic:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Mn([Se.points,Se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Mn([Se.common,Se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Mn([Se.sprite,Se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Mn([Se.common,Se.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Mn([Se.lights,Se.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Gi.physical={uniforms:Mn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Xu={r:0,b:0,g:0},y3=new $t,y1=new ze;y1.set(-1,0,0,0,1,0,0,0,1);function S3(t,e,n,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,u,c=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const S=v.backgroundBlurriness>0;y=e.get(y,S)}return y}function g(v){let y=!1;const S=p(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),y=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===Cf)?(u===void 0&&(u=new Ui(new tu(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:go(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y3.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(y1),u.material.toneMapped=qe.getTransfer(S.colorSpace)!==st,(c!==S||d!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ui(new Co(2,2),new Fi({name:"BackgroundMaterial",uniforms:go(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Xu,g1(t)),n.buffers.color.setClear(Xu.r,Xu.g,Xu.b,y,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:h}}function M3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,N,H,X,F){let Z=!1;const B=d(L,X,H,N);s!==B&&(s=B,u(s.object)),Z=p(L,X,H,F),Z&&g(L,X,H,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(L,N,H,X),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function c(L){return t.deleteVertexArray(L)}function d(L,N,H,X){const F=X.wireframe===!0;let Z=i[N.id];Z===void 0&&(Z={},i[N.id]=Z);const B=L.isInstancedMesh===!0?L.id:0;let k=Z[B];k===void 0&&(k={},Z[B]=k);let $=k[H.id];$===void 0&&($={},k[H.id]=$);let W=$[F];return W===void 0&&(W=f(l()),$[F]=W),W}function f(L){const N=[],H=[],X=[];for(let F=0;F<n;F++)N[F]=0,H[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:X,object:L,attributes:{},index:null}}function p(L,N,H,X){const F=s.attributes,Z=N.attributes;let B=0;const k=H.getAttributes();for(const $ in k)if(k[$].location>=0){const ne=F[$];let ie=Z[$];if(ie===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),ne===void 0||ne.attribute!==ie||ie&&ne.data!==ie.data)return!0;B++}return s.attributesNum!==B||s.index!==X}function g(L,N,H,X){const F={},Z=N.attributes;let B=0;const k=H.getAttributes();for(const $ in k)if(k[$].location>=0){let ne=Z[$];ne===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const ie={};ie.attribute=ne,ne&&ne.data&&(ie.data=ne.data),F[$]=ie,B++}s.attributes=F,s.attributesNum=B,s.index=X}function _(){const L=s.newAttributes;for(let N=0,H=L.length;N<H;N++)L[N]=0}function m(L){h(L,0)}function h(L,N){const H=s.newAttributes,X=s.enabledAttributes,F=s.attributeDivisors;H[L]=1,X[L]===0&&(t.enableVertexAttribArray(L),X[L]=1),F[L]!==N&&(t.vertexAttribDivisor(L,N),F[L]=N)}function v(){const L=s.newAttributes,N=s.enabledAttributes;for(let H=0,X=N.length;H<X;H++)N[H]!==L[H]&&(t.disableVertexAttribArray(H),N[H]=0)}function y(L,N,H,X,F,Z,B){B===!0?t.vertexAttribIPointer(L,N,H,F,Z):t.vertexAttribPointer(L,N,H,X,F,Z)}function S(L,N,H,X){_();const F=X.attributes,Z=H.getAttributes(),B=N.defaultAttributeValues;for(const k in Z){const $=Z[k];if($.location>=0){let W=F[k];if(W===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const ne=W.normalized,ie=W.itemSize,be=e.get(W);if(be===void 0)continue;const me=be.buffer,Ce=be.type,te=be.bytesPerElement,le=Ce===t.INT||Ce===t.UNSIGNED_INT||W.gpuType===a0;if(W.isInterleavedBufferAttribute){const fe=W.data,Oe=fe.stride,ke=W.offset;if(fe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<$.locationSize;Fe++)h($.location+Fe,fe.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Fe=0;Fe<$.locationSize;Fe++)m($.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Fe=0;Fe<$.locationSize;Fe++)y($.location+Fe,ie/$.locationSize,Ce,ne,Oe*te,(ke+ie/$.locationSize*Fe)*te,le)}else{if(W.isInstancedBufferAttribute){for(let fe=0;fe<$.locationSize;fe++)h($.location+fe,W.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let fe=0;fe<$.locationSize;fe++)m($.location+fe);t.bindBuffer(t.ARRAY_BUFFER,me);for(let fe=0;fe<$.locationSize;fe++)y($.location+fe,ie/$.locationSize,Ce,ne,ie*te,ie/$.locationSize*fe*te,le)}}else if(B!==void 0){const ne=B[k];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv($.location,ne);break;case 3:t.vertexAttrib3fv($.location,ne);break;case 4:t.vertexAttrib4fv($.location,ne);break;default:t.vertexAttrib1fv($.location,ne)}}}}v()}function M(){b();for(const L in i){const N=i[L];for(const H in N){const X=N[H];for(const F in X){const Z=X[F];for(const B in Z)c(Z[B].object),delete Z[B];delete X[F]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const N=i[L.id];for(const H in N){const X=N[H];for(const F in X){const Z=X[F];for(const B in Z)c(Z[B].object),delete Z[B];delete X[F]}}delete i[L.id]}function w(L){for(const N in i){const H=i[N];for(const X in H){const F=H[X];if(F[L.id]===void 0)continue;const Z=F[L.id];for(const B in Z)c(Z[B].object),delete Z[B];delete F[L.id]}}}function x(L){for(const N in i){const H=i[N],X=L.isInstancedMesh===!0?L.id:0,F=H[X];if(F!==void 0){for(const Z in F){const B=F[Z];for(const k in B)c(B[k].object),delete B[k];delete F[Z]}delete H[X],Object.keys(H).length===0&&delete i[N]}}}function b(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function E3(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function w3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Pi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==pi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$i&&!x)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Be("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:M,samples:T}}function T3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Us,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,y=v*4;let S=h.clippingState||null;l.value=S,S=c(g,f,y,p);for(let M=0;M!==y;++M)S[M]=n[M];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const es=4,J_=[.125,.215,.35,.446,.526,.582],ks=20,b3=256,Xo=new y0,ev=new tt;let zd=null,Vd=0,Hd=0,Gd=!1;const R3=new Q;class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=R3}=s;zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Vd,Hd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ia||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Rr,format:Pi,colorSpace:Qc,depthBuffer:!1},r=nv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A3(s)),this._blurMaterial=P3(s,e,n),this._ggxMaterial=C3(s,e,n)}return r}_compileMaterial(e){const n=new Ui(new Ir,e);this._renderer.compile(n,Xo)}_sceneToCubeUV(e,n,i,r,s){const l=new hi(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(ev),d.toneMapping=Qi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new tu,new v0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,h=!0):(m.color.copy(ev),h=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[y],s.y,s.z)):S===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[y]));const M=this._cubeSize;Aa(r,S*M,y>2?M:0,M,M),d.setRenderTarget(r),h&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ia||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Aa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Xo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-es?i-g+es:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Aa(s,m,h,3*_,2*_),r.setRenderTarget(s),r.render(o,Xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Aa(e,m,h,3*_,2*_),r.setRenderTarget(e),r.render(o,Xo)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ks-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):ks;m>ks&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);const h=[];let v=0;for(let w=0;w<ks;++w){const x=w/_,b=Math.exp(-x*x/2);h.push(b),w===0?v+=b:w<m&&(v+=2*b)}for(let w=0;w<h.length;w++)h[w]=h[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const S=this._sizeLods[r],M=3*S*(r>y-es?r-y+es:0),T=4*(this._cubeSize-S);Aa(n,M,T,3*S,2*S),l.setRenderTarget(n),l.render(d,Xo)}}function A3(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+J_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-es?l=J_[a-t+es-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,x=T>2?0:-1,b=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];v.set(b,_*g*T),y.set(f,m*g*T);const P=[T,T,T,T,T,T];S.set(P,h*g*T)}const M=new Ir;M.setAttribute("position",new er(v,_)),M.setAttribute("uv",new er(y,m)),M.setAttribute("faceIndex",new er(S,h)),i.push(new Ui(M,null)),r>es&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function nv(t,e,n){const i=new Ji(t,e,n);return i.texture.mapping=Cf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function C3(t,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function P3(t,e,n){const i=new Float32Array(ks),r=new Q(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function iv(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function rv(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class S1 extends Ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new p1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new tu(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:xr});s.uniforms.tEquirect.value=n;const a=new Ui(r,s),o=n.minFilter;return n.minFilter===Hs&&(n.minFilter=gn),new FC(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function L3(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===pd||p===md)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new S1(g.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",u),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,g=p===pd||p===md,_=p===ia||p===po;if(g||_){let m=n.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new tv(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new tv(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function o(f,p){return p===pd?f.mapping=ia:p===md&&(f.mapping=po),f}function l(f){let p=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&p++;return p===g}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function D3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&eo("WebGLRenderer: "+i+" extension not supported."),r}}}function I3(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const v=p.array;_=p.version;for(let y=0,S=v.length;y<S;y+=3){const M=v[y+0],T=v[y+1],w=v[y+2];f.push(M,T,T,w,w,M)}}else{const v=g.array;_=g.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const M=y+0,T=y+1,w=y+2;f.push(M,T,T,w,w,M)}}const m=new(g.count>=65535?d1:f1)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function N3(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function u(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*a,p),n.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let _=0;for(let m=0;m<p;m++)_+=f[m];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function U3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function F3(t,e,n){const i=new WeakMap,r=new It;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*T*4*d),x=new o1(w,M,T,d);x.type=$i,x.needsUpdate=!0;const b=S*4;for(let L=0;L<d;L++){const N=h[L],H=v[L],X=y[L],F=M*T*4*L;for(let Z=0;Z<N.count;Z++){const B=Z*b;g===!0&&(r.fromBufferAttribute(N,Z),w[F+B+0]=r.x,w[F+B+1]=r.y,w[F+B+2]=r.z,w[F+B+3]=0),_===!0&&(r.fromBufferAttribute(H,Z),w[F+B+4]=r.x,w[F+B+5]=r.y,w[F+B+6]=r.z,w[F+B+7]=0),m===!0&&(r.fromBufferAttribute(X,Z),w[F+B+8]=r.x,w[F+B+9]=r.y,w[F+B+10]=r.z,w[F+B+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new je(M,T)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function O3(t,e,n,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const k3={[XS]:"LINEAR_TONE_MAPPING",[YS]:"REINHARD_TONE_MAPPING",[$S]:"CINEON_TONE_MAPPING",[jS]:"ACES_FILMIC_TONE_MAPPING",[KS]:"AGX_TONE_MAPPING",[ZS]:"NEUTRAL_TONE_MAPPING",[qS]:"CUSTOM_TONE_MAPPING"};function B3(t,e,n,i,r,s){const a=new Ji(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new mo(e,n):void 0}),o=new Ji(e,n,{type:Rr,depthBuffer:!1,stencilBuffer:!1}),l=new Ir;l.setAttribute("position",new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Sr([0,2,0,0,2,0],2));const u=new RC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ui(l,u),d=new y0(-1,1,1,-1,0,1);let f=null,p=null,g=!1,_,m=null,h=[],v=!1;this.setSize=function(y,S){a.setSize(y,S),o.setSize(y,S);for(let M=0;M<h.length;M++){const T=h[M];T.setSize&&T.setSize(y,S)}},this.setEffects=function(y){h=y,v=h.length>0&&h[0].isRenderPass===!0;const S=a.width,M=a.height;for(let T=0;T<h.length;T++){const w=h[T];w.setSize&&w.setSize(S,M)}},this.begin=function(y,S){if(g||y.toneMapping===Qi&&h.length===0)return!1;if(m=S,S!==null){const M=S.width,T=S.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return v===!1&&y.setRenderTarget(a),_=y.toneMapping,y.toneMapping=Qi,!0},this.hasRenderPass=function(){return v},this.end=function(y,S){y.toneMapping=_,g=!0;let M=a,T=o;for(let w=0;w<h.length;w++){const x=h[w];if(x.enabled!==!1&&(x.render(y,T,M,S),x.needsSwap!==!1)){const b=M;M=T,T=b}}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,u.defines={},qe.getTransfer(f)===st&&(u.defines.SRGB_TRANSFER="");const w=k3[p];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(c,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const M1=new _n,kp=new mo(1,1),E1=new o1,w1=new rC,T1=new p1,sv=[],av=[],ov=new Float32Array(16),lv=new Float32Array(9),uv=new Float32Array(4);function Po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sv[r];if(s===void 0&&(s=new Float32Array(r),sv[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Df(t,e){let n=av[e];n===void 0&&(n=new Int32Array(e),av[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function z3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function V3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function H3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function G3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function W3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;uv.set(i),t.uniformMatrix2fv(this.addr,!1,uv),Zt(n,i)}}function X3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;lv.set(i),t.uniformMatrix3fv(this.addr,!1,lv),Zt(n,i)}}function Y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;ov.set(i),t.uniformMatrix4fv(this.addr,!1,ov),Zt(n,i)}}function $3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function K3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function Z3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function J3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function eL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function tL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kp.compareFunction=n.isReversedDepthBuffer()?h0:d0,s=kp):s=M1,n.setTexture2D(e||s,r)}function nL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||w1,r)}function iL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||T1,r)}function rL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||E1,r)}function sL(t){switch(t){case 5126:return z3;case 35664:return V3;case 35665:return H3;case 35666:return G3;case 35674:return W3;case 35675:return X3;case 35676:return Y3;case 5124:case 35670:return $3;case 35667:case 35671:return j3;case 35668:case 35672:return q3;case 35669:case 35673:return K3;case 5125:return Z3;case 36294:return Q3;case 36295:return J3;case 36296:return eL;case 35678:case 36198:case 36298:case 36306:case 35682:return tL;case 35679:case 36299:case 36307:return nL;case 35680:case 36300:case 36308:case 36293:return iL;case 36289:case 36303:case 36311:case 36292:return rL}}function aL(t,e){t.uniform1fv(this.addr,e)}function oL(t,e){const n=Po(e,this.size,2);t.uniform2fv(this.addr,n)}function lL(t,e){const n=Po(e,this.size,3);t.uniform3fv(this.addr,n)}function uL(t,e){const n=Po(e,this.size,4);t.uniform4fv(this.addr,n)}function cL(t,e){const n=Po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fL(t,e){const n=Po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dL(t,e){const n=Po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hL(t,e){t.uniform1iv(this.addr,e)}function pL(t,e){t.uniform2iv(this.addr,e)}function mL(t,e){t.uniform3iv(this.addr,e)}function gL(t,e){t.uniform4iv(this.addr,e)}function _L(t,e){t.uniform1uiv(this.addr,e)}function vL(t,e){t.uniform2uiv(this.addr,e)}function xL(t,e){t.uniform3uiv(this.addr,e)}function yL(t,e){t.uniform4uiv(this.addr,e)}function SL(t,e,n){const i=this.cache,r=e.length,s=Df(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=kp:a=M1;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function ML(t,e,n){const i=this.cache,r=e.length,s=Df(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||w1,s[a])}function EL(t,e,n){const i=this.cache,r=e.length,s=Df(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||T1,s[a])}function wL(t,e,n){const i=this.cache,r=e.length,s=Df(n,r);Kt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||E1,s[a])}function TL(t){switch(t){case 5126:return aL;case 35664:return oL;case 35665:return lL;case 35666:return uL;case 35674:return cL;case 35675:return fL;case 35676:return dL;case 5124:case 35670:return hL;case 35667:case 35671:return pL;case 35668:case 35672:return mL;case 35669:case 35673:return gL;case 5125:return _L;case 36294:return vL;case 36295:return xL;case 36296:return yL;case 35678:case 36198:case 36298:case 36306:case 35682:return SL;case 35679:case 36299:case 36307:return ML;case 35680:case 36300:case 36308:case 36293:return EL;case 36289:case 36303:case 36311:case 36292:return wL}}class bL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sL(n.type)}}class RL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TL(n.type)}}class AL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function cv(t,e){t.seq.push(e),t.map[e.id]=e}function CL(t,e,n){const i=t.name,r=i.length;for(Wd.lastIndex=0;;){const s=Wd.exec(i),a=Wd.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){cv(n,u===void 0?new bL(o,t,e):new RL(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new AL(o),cv(n,d)),n=d}}}class vc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);CL(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const PL=37297;let LL=0;function DL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const dv=new ze;function IL(t){qe._getMatrix(dv,qe.workingColorSpace,t);const e=`mat3( ${dv.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case Jc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+DL(t.getShaderSource(e),o)}else return s}function NL(t,e){const n=IL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const UL={[XS]:"Linear",[YS]:"Reinhard",[$S]:"Cineon",[jS]:"ACESFilmic",[KS]:"AgX",[ZS]:"Neutral",[qS]:"Custom"};function FL(t,e){const n=UL[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yu=new Q;function OL(){qe.getLuminanceCoefficients(Yu);const t=Yu.x.toFixed(4),e=Yu.y.toFixed(4),n=Yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function BL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Jo(t){return t!==""}function pv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(t){return t.replace(VL,GL)}const HL=new Map;function GL(t,e){let n=Ge[e];if(n===void 0){const i=HL.get(e);if(i!==void 0)n=Ge[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bp(n)}const WL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(t){return t.replace(WL,XL)}function XL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _v(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const YL={[hc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function $L(t){return YL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jL={[ia]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Cf]:"ENVMAP_TYPE_CUBE_UV"};function qL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const KL={[po]:"ENVMAP_MODE_REFRACTION"};function ZL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":KL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QL={[WS]:"ENVMAP_BLENDING_MULTIPLY",[MA]:"ENVMAP_BLENDING_MIX",[EA]:"ENVMAP_BLENDING_ADD"};function JL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":QL[t.combine]||"ENVMAP_BLENDING_NONE"}function eD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tD(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=$L(n),u=qL(n),c=ZL(n),d=JL(n),f=eD(n),p=kL(n),g=BL(s),_=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jo).join(`
`),h.length>0&&(h+=`
`)):(m=[_v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),h=[_v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Qi?FL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,NL("linearToOutputTexel",n.outputColorSpace),OL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jo).join(`
`)),a=Bp(a),a=pv(a,n),a=mv(a,n),o=Bp(o),o=pv(o,n),o=mv(o,n),a=gv(a),o=gv(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+m+a,S=v+h+o,M=fv(r,r.VERTEX_SHADER,y),T=fv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,M),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(M)||"",X=r.getShaderInfoLog(T)||"",F=N.trim(),Z=H.trim(),B=X.trim();let k=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,M,T);else{const W=hv(r,M,"vertex"),ne=hv(r,T,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+W+`
`+ne)}else F!==""?Be("WebGLProgram: Program Info Log:",F):(Z===""||B==="")&&($=!1);$&&(L.diagnostics={runnable:k,programLog:F,vertexShader:{log:Z,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(M),r.deleteShader(T),x=new vc(r,_),b=zL(r,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(_,PL)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}let nD=0;class iD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rD(e),n.set(e,i)),i}}class rD{constructor(e){this.id=nD++,this.code=e,this.usedTimes=0}}function sD(t){return t===ra||t===Kc||t===Zc}function aD(t,e,n,i,r,s){const a=new l1,o=new iD,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,P,L,N,H){const X=L.fog,F=N.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||Z,B),$=k&&k.mapping===Cf?k.image.height:null,W=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ie=ne!==void 0?ne.length:0;let be=0;F.morphAttributes.position!==void 0&&(be=1),F.morphAttributes.normal!==void 0&&(be=2),F.morphAttributes.color!==void 0&&(be=3);let me,Ce,te,le;if(W){const Te=Gi[W];me=Te.vertexShader,Ce=Te.fragmentShader}else{me=x.vertexShader,Ce=x.fragmentShader;const Te=o.getVertexShaderStage(x),rt=o.getFragmentShaderStage(x);o.update(x,Te,rt),te=Te.id,le=rt.id}const fe=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,Fe=N.isBatchedMesh===!0,pt=!!x.map,He=!!x.matcap,it=!!k,Ze=!!x.aoMap,Ye=!!x.lightMap,St=!!x.bumpMap&&x.wireframe===!1,Pt=!!x.normalMap,Ut=!!x.displacementMap,Gt=!!x.emissiveMap,mt=!!x.metalnessMap,Mt=!!x.roughnessMap,C=x.anisotropy>0,ve=x.clearcoat>0,ye=x.dispersion>0,A=x.iridescence>0,E=x.sheen>0,I=x.transmission>0,z=C&&!!x.anisotropyMap,Y=ve&&!!x.clearcoatMap,se=ve&&!!x.clearcoatNormalMap,oe=ve&&!!x.clearcoatRoughnessMap,G=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,ae=E&&!!x.sheenColorMap,xe=E&&!!x.sheenRoughnessMap,he=!!x.specularMap,de=!!x.specularColorMap,Re=!!x.specularIntensityMap,De=I&&!!x.transmissionMap,ge=I&&!!x.thicknessMap,U=!!x.gradientMap,ce=!!x.alphaMap,j=x.alphaTest>0,ue=!!x.alphaHash,_e=!!x.extensions;let re=Qi;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(re=t.toneMapping);const we={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:me,fragmentShader:Ce,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:He,envMap:it,envMapMode:it&&k.mapping,envMapCubeUVHeight:$,aoMap:Ze,lightMap:Ye,bumpMap:St,normalMap:Pt,displacementMap:Ut,emissiveMap:Gt,normalMapObjectSpace:Pt&&x.normalMapType===bA,normalMapTangentSpace:Pt&&x.normalMapType===T_,packedNormalMap:Pt&&x.normalMapType===T_&&sD(x.normalMap.format),metalnessMap:mt,roughnessMap:Mt,anisotropy:C,anisotropyMap:z,clearcoat:ve,clearcoatMap:Y,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:ye,iridescence:A,iridescenceMap:G,iridescenceThicknessMap:J,sheen:E,sheenColorMap:ae,sheenRoughnessMap:xe,specularMap:he,specularColorMap:de,specularIntensityMap:Re,transmission:I,transmissionMap:De,thicknessMap:ge,gradientMap:U,opaque:x.transparent===!1&&x.blending===Ja&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:j,alphaHash:ue,combine:x.combine,mapUv:pt&&g(x.map.channel),aoMapUv:Ze&&g(x.aoMap.channel),lightMapUv:Ye&&g(x.lightMap.channel),bumpMapUv:St&&g(x.bumpMap.channel),normalMapUv:Pt&&g(x.normalMap.channel),displacementMapUv:Ut&&g(x.displacementMap.channel),emissiveMapUv:Gt&&g(x.emissiveMap.channel),metalnessMapUv:mt&&g(x.metalnessMap.channel),roughnessMapUv:Mt&&g(x.roughnessMap.channel),anisotropyMapUv:z&&g(x.anisotropyMap.channel),clearcoatMapUv:Y&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:de&&g(x.specularColorMap.channel),specularIntensityMapUv:Re&&g(x.specularIntensityMap.channel),transmissionMapUv:De&&g(x.transmissionMap.channel),thicknessMapUv:ge&&g(x.thicknessMap.channel),alphaMapUv:ce&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pt||C),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(pt||ce),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Oe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xi,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(b,x),v(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function h(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){const b=p[x.type];let P;if(b){const L=Gi[b];P=wC.clone(L.uniforms)}else P=x.uniforms;return P}function S(x,b){let P=c.get(b);return P!==void 0?++P.usedTimes:(P=new tD(t,b,x,r),u.push(P),c.set(b,P)),P}function M(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),c.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:w}}function oD(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function lD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function vv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,_,m,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=h),e++,v}function l(f,p,g,_,m,h){const v=o(f,p,g,_,m,h);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):n.push(v)}function u(f,p,g,_,m,h){const v=o(f,p,g,_,m,h);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function c(f,p,g){n.length>1&&n.sort(f||lD),i.length>1&&i.sort(p||vv),r.length>1&&r.sort(p||vv),g&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function uD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new xv,t.set(i,[a])):r>=s.length?(a=new xv,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function cD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new tt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return t[e.id]=n,n}}}function fD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dD=0;function hD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pD(t){const e=new cD,n=fD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Q);const r=new Q,s=new $t,a=new $t;function o(u){let c=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,y=0,S=0,M=0,T=0,w=0;u.sort(hD);for(let b=0,P=u.length;b<P;b++){const L=u[b],N=L.color,H=L.intensity,X=L.distance;let F=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ra?F=L.shadow.map.texture:F=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=N.r*H,d+=N.g*H,f+=N.b*H;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],H);w++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,k=n.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=Z,p++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(N).multiplyScalar(H),Z.distance=X,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[_]=Z;const B=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,B.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=B.matrix,L.castShadow){const k=n.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=F,S++}_++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(N).multiplyScalar(H),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const B=L.shadow,k=n.get(L);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=Z,g++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(H),Z.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[h]=Z,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==S||x.numSpotMaps!==M||x.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,x.directionalLength=p,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=S,x.numSpotMaps=M,x.numLightProbes=w,i.version=dD++)}function l(u,c){let d=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const y=u[h];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function yv(t){const e=new pD(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function mD(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yv(t),e.set(r,[o])):s>=a.length?(o=new yv(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const gD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_D=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vD=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],xD=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Sv=new $t,Yo=new Q,Xd=new Q;function yD(t,e,n){let i=new h1;const r=new je,s=new je,a=new It,o=new AC,l=new CC,u={},c=n.maxTextureSize,d={[gs]:Fn,[Fn]:gs,[Xi]:Xi},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:gD,fragmentShader:_D}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ir;g.setAttribute("position",new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ui(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let h=this.type;this.render=function(T,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===iA&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hc);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),N=t.state;N.setBlending(xr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=h!==this.type;H&&w.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(F=>F.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,F=T.length;X<F;X++){const Z=T[X],B=Z.shadow;if(B===void 0){Be("WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const k=B.getFrameExtents();r.multiply(k),s.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/k.x),r.x=s.x*k.x,B.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/k.y),r.y=s.y*k.y,B.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Qo){if(Z.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ji(r.x,r.y,{format:ra,type:Rr,minFilter:gn,magFilter:gn,generateMipmaps:!1}),B.map.texture.name=Z.name+".shadowMap",B.map.depthTexture=new mo(r.x,r.y,$i),B.map.depthTexture.name=Z.name+".shadowMapDepth",B.map.depthTexture.format=Ar,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn}else Z.isPointLight?(B.map=new S1(r.x),B.map.depthTexture=new MC(r.x,nr)):(B.map=new Ji(r.x,r.y),B.map.depthTexture=new mo(r.x,r.y,nr)),B.map.depthTexture.name=Z.name+".shadowMap",B.map.depthTexture.format=Ar,this.type===hc?(B.map.depthTexture.compareFunction=$?h0:d0,B.map.depthTexture.minFilter=gn,B.map.depthTexture.magFilter=gn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn);B.camera.updateProjectionMatrix()}const W=B.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<W;ne++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(B.map),t.clear());const ie=B.getViewport(ne);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),N.viewport(a)}if(Z.isPointLight){const ie=B.camera,be=B.matrix,me=Z.distance||ie.far;me!==ie.far&&(ie.far=me,ie.updateProjectionMatrix()),Yo.setFromMatrixPosition(Z.matrixWorld),ie.position.copy(Yo),Xd.copy(ie.position),Xd.add(vD[ne]),ie.up.copy(xD[ne]),ie.lookAt(Xd),ie.updateMatrixWorld(),be.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Sv.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Sv,ie.coordinateSystem,ie.reversedDepth)}else B.updateMatrices(Z);i=B.getFrustum(),S(w,x,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===Qo&&v(B,x),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,P,L)};function v(T,w){const x=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ji(r.x,r.y,{format:ra,type:Rr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,x,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,x,p,_,null)}function y(T,w,x,b){let P=null;const L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=P.uuid,H=w.uuid;let X=u[N];X===void 0&&(X={},u[N]=X);let F=X[H];F===void 0&&(F=P.clone(),X[H]=F,w.addEventListener("dispose",M)),P=F}if(P.visible=w.visible,P.wireframe=w.wireframe,b===Qo?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=t.properties.get(P);N.light=x}return P}function S(T,w,x,b,P){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Qo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const H=e.update(T),X=T.material;if(Array.isArray(X)){const F=H.groups;for(let Z=0,B=F.length;Z<B;Z++){const k=F[Z],$=X[k.materialIndex];if($&&$.visible){const W=y(T,$,b,P);T.onBeforeShadow(t,T,w,x,H,W,k),t.renderBufferDirect(x,null,H,W,T,k),T.onAfterShadow(t,T,w,x,H,W,k)}}}else if(X.visible){const F=y(T,X,b,P);T.onBeforeShadow(t,T,w,x,H,F,null),t.renderBufferDirect(x,null,H,F,T,null),T.onAfterShadow(t,T,w,x,H,F,null)}}const N=T.children;for(let H=0,X=N.length;H<X;H++)S(N[H],w,x,b,P)}function M(T){T.target.removeEventListener("dispose",M);for(const x in u){const b=u[x],P=T.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function SD(t,e){function n(){let U=!1;const ce=new It;let j=null;const ue=new It(0,0,0,0);return{setMask:function(_e){j!==_e&&!U&&(t.colorMask(_e,_e,_e,_e),j=_e)},setLocked:function(_e){U=_e},setClear:function(_e,re,we,Te,rt){rt===!0&&(_e*=Te,re*=Te,we*=Te),ce.set(_e,re,we,Te),ue.equals(ce)===!1&&(t.clearColor(_e,re,we,Te),ue.copy(ce))},reset:function(){U=!1,j=null,ue.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,j=null,ue=null,_e=null;return{setReversed:function(re){if(ce!==re){const we=e.get("EXT_clip_control");re?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const Te=_e;_e=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function(re){re?fe(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(re){j!==re&&!U&&(t.depthMask(re),j=re)},setFunc:function(re){if(ce&&(re=FA[re]),ue!==re){switch(re){case Jh:t.depthFunc(t.NEVER);break;case ep:t.depthFunc(t.ALWAYS);break;case tp:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case np:t.depthFunc(t.EQUAL);break;case ip:t.depthFunc(t.GEQUAL);break;case rp:t.depthFunc(t.GREATER);break;case sp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=re}},setLocked:function(re){U=re},setClear:function(re){_e!==re&&(_e=re,ce&&(re=1-re),t.clearDepth(re))},reset:function(){U=!1,j=null,ue=null,_e=null,ce=!1}}}function r(){let U=!1,ce=null,j=null,ue=null,_e=null,re=null,we=null,Te=null,rt=null;return{setTest:function(nt){U||(nt?fe(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!U&&(t.stencilMask(nt),ce=nt)},setFunc:function(nt,An,si){(j!==nt||ue!==An||_e!==si)&&(t.stencilFunc(nt,An,si),j=nt,ue=An,_e=si)},setOp:function(nt,An,si){(re!==nt||we!==An||Te!==si)&&(t.stencilOp(nt,An,si),re=nt,we=An,Te=si)},setLocked:function(nt){U=nt},setClear:function(nt){rt!==nt&&(t.clearStencil(nt),rt=nt)},reset:function(){U=!1,ce=null,j=null,ue=null,_e=null,re=null,we=null,Te=null,rt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,g=[],_=null,m=!1,h=null,v=null,y=null,S=null,M=null,T=null,w=null,x=new tt(0,0,0),b=0,P=!1,L=null,N=null,H=null,X=null,F=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),B=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=k>=2);let W=null,ne={};const ie=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),me=new It().fromArray(ie),Ce=new It().fromArray(be);function te(U,ce,j,ue){const _e=new Uint8Array(4),re=t.createTexture();t.bindTexture(U,re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<j;we++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ce+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return re}const le={};le[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(ho),St(!1),Pt(S_),fe(t.CULL_FACE),Ze(xr);function fe(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function Oe(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function ke(U,ce){return f[U]!==ce?(t.bindFramebuffer(U,ce),f[U]=ce,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Fe(U,ce){let j=g,ue=!1;if(U){j=p.get(ce),j===void 0&&(j=[],p.set(ce,j));const _e=U.textures;if(j.length!==_e.length||j[0]!==t.COLOR_ATTACHMENT0){for(let re=0,we=_e.length;re<we;re++)j[re]=t.COLOR_ATTACHMENT0+re;j.length=_e.length,ue=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,ue=!0);ue&&t.drawBuffers(j)}function pt(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const He={[Os]:t.FUNC_ADD,[sA]:t.FUNC_SUBTRACT,[aA]:t.FUNC_REVERSE_SUBTRACT};He[oA]=t.MIN,He[lA]=t.MAX;const it={[uA]:t.ZERO,[cA]:t.ONE,[fA]:t.SRC_COLOR,[Zh]:t.SRC_ALPHA,[_A]:t.SRC_ALPHA_SATURATE,[mA]:t.DST_COLOR,[hA]:t.DST_ALPHA,[dA]:t.ONE_MINUS_SRC_COLOR,[Qh]:t.ONE_MINUS_SRC_ALPHA,[gA]:t.ONE_MINUS_DST_COLOR,[pA]:t.ONE_MINUS_DST_ALPHA,[vA]:t.CONSTANT_COLOR,[xA]:t.ONE_MINUS_CONSTANT_COLOR,[yA]:t.CONSTANT_ALPHA,[SA]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(U,ce,j,ue,_e,re,we,Te,rt,nt){if(U===xr){m===!0&&(Oe(t.BLEND),m=!1);return}if(m===!1&&(fe(t.BLEND),m=!0),U!==rA){if(U!==h||nt!==P){if((v!==Os||M!==Os)&&(t.blendEquation(t.FUNC_ADD),v=Os,M=Os),nt)switch(U){case Ja:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case M_:t.blendFunc(t.ONE,t.ONE);break;case E_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case w_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",U);break}else switch(U){case Ja:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case M_:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case E_:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",U);break}y=null,S=null,T=null,w=null,x.set(0,0,0),b=0,h=U,P=nt}return}_e=_e||ce,re=re||j,we=we||ue,(ce!==v||_e!==M)&&(t.blendEquationSeparate(He[ce],He[_e]),v=ce,M=_e),(j!==y||ue!==S||re!==T||we!==w)&&(t.blendFuncSeparate(it[j],it[ue],it[re],it[we]),y=j,S=ue,T=re,w=we),(Te.equals(x)===!1||rt!==b)&&(t.blendColor(Te.r,Te.g,Te.b,rt),x.copy(Te),b=rt),h=U,P=!1}function Ye(U,ce){U.side===Xi?Oe(t.CULL_FACE):fe(t.CULL_FACE);let j=U.side===Fn;ce&&(j=!j),St(j),U.blending===Ja&&U.transparent===!1?Ze(xr):Ze(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ue=U.stencilWrite;o.setTest(ue),ue&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function St(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function Pt(U){U!==tA?(fe(t.CULL_FACE),U!==N&&(U===S_?t.cullFace(t.BACK):U===nA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),N=U}function Ut(U){U!==H&&(B&&t.lineWidth(U),H=U)}function Gt(U,ce,j){U?(fe(t.POLYGON_OFFSET_FILL),(X!==ce||F!==j)&&(X=ce,F=j,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,j))):Oe(t.POLYGON_OFFSET_FILL)}function mt(U){U?fe(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function Mt(U){U===void 0&&(U=t.TEXTURE0+Z-1),W!==U&&(t.activeTexture(U),W=U)}function C(U,ce,j){j===void 0&&(W===null?j=t.TEXTURE0+Z-1:j=W);let ue=ne[j];ue===void 0&&(ue={type:void 0,texture:void 0},ne[j]=ue),(ue.type!==U||ue.texture!==ce)&&(W!==j&&(t.activeTexture(j),W=j),t.bindTexture(U,ce||le[U]),ue.type=U,ue.texture=ce)}function ve(){const U=ne[W];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ye(){try{t.compressedTexImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function E(){try{t.texSubImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function I(){try{t.texSubImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function z(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function Y(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function se(){try{t.texStorage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function oe(){try{t.texStorage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function G(){try{t.texImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function J(){try{t.texImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function ae(U){return d[U]!==void 0?d[U]:t.getParameter(U)}function xe(U,ce){d[U]!==ce&&(t.pixelStorei(U,ce),d[U]=ce)}function he(U){me.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),me.copy(U))}function de(U){Ce.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ce.copy(U))}function Re(U,ce){let j=u.get(ce);j===void 0&&(j=new WeakMap,u.set(ce,j));let ue=j.get(U);ue===void 0&&(ue=t.getUniformBlockIndex(ce,U.name),j.set(U,ue))}function De(U,ce){const ue=u.get(ce).get(U);l.get(ce)!==ue&&(t.uniformBlockBinding(ce,ue,U.__bindingPointIndex),l.set(ce,ue))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},W=null,ne={},f={},p=new WeakMap,g=[],_=null,m=!1,h=null,v=null,y=null,S=null,M=null,T=null,w=null,x=new tt(0,0,0),b=0,P=!1,L=null,N=null,H=null,X=null,F=null,me.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:Oe,bindFramebuffer:ke,drawBuffers:Fe,useProgram:pt,setBlending:Ze,setMaterial:Ye,setFlipSided:St,setCullFace:Pt,setLineWidth:Ut,setPolygonOffset:Gt,setScissorTest:mt,activeTexture:Mt,bindTexture:C,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:A,texImage2D:G,texImage3D:J,pixelStorei:xe,getParameter:ae,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:se,texStorage3D:oe,texSubImage2D:E,texSubImage3D:I,compressedTexSubImage2D:z,compressedTexSubImage3D:Y,scissor:he,viewport:de,reset:ge}}function MD(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return g?new OffscreenCanvas(A,E):Fl("canvas")}function m(A,E,I){let z=1;const Y=ye(A);if((Y.width>I||Y.height>I)&&(z=I/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(z*Y.width),oe=Math.floor(z*Y.height);f===void 0&&(f=_(se,oe));const G=E?_(se,oe):f;return G.width=se,G.height=oe,G.getContext("2d").drawImage(A,0,0,se,oe),Be("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+oe+")."),G}else return"data"in A&&Be("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function h(A){return A.generateMipmaps}function v(A){t.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,E,I,z,Y,se=!1){if(A!==null){if(t[A]!==void 0)return t[A];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;z&&(oe=e.get("EXT_texture_norm16"),oe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=E;if(E===t.RED&&(I===t.FLOAT&&(G=t.R32F),I===t.HALF_FLOAT&&(G=t.R16F),I===t.UNSIGNED_BYTE&&(G=t.R8),I===t.UNSIGNED_SHORT&&oe&&(G=oe.R16_EXT),I===t.SHORT&&oe&&(G=oe.R16_SNORM_EXT)),E===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.R8UI),I===t.UNSIGNED_SHORT&&(G=t.R16UI),I===t.UNSIGNED_INT&&(G=t.R32UI),I===t.BYTE&&(G=t.R8I),I===t.SHORT&&(G=t.R16I),I===t.INT&&(G=t.R32I)),E===t.RG&&(I===t.FLOAT&&(G=t.RG32F),I===t.HALF_FLOAT&&(G=t.RG16F),I===t.UNSIGNED_BYTE&&(G=t.RG8),I===t.UNSIGNED_SHORT&&oe&&(G=oe.RG16_EXT),I===t.SHORT&&oe&&(G=oe.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.RG8UI),I===t.UNSIGNED_SHORT&&(G=t.RG16UI),I===t.UNSIGNED_INT&&(G=t.RG32UI),I===t.BYTE&&(G=t.RG8I),I===t.SHORT&&(G=t.RG16I),I===t.INT&&(G=t.RG32I)),E===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.RGB8UI),I===t.UNSIGNED_SHORT&&(G=t.RGB16UI),I===t.UNSIGNED_INT&&(G=t.RGB32UI),I===t.BYTE&&(G=t.RGB8I),I===t.SHORT&&(G=t.RGB16I),I===t.INT&&(G=t.RGB32I)),E===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),I===t.UNSIGNED_INT&&(G=t.RGBA32UI),I===t.BYTE&&(G=t.RGBA8I),I===t.SHORT&&(G=t.RGBA16I),I===t.INT&&(G=t.RGBA32I)),E===t.RGB&&(I===t.UNSIGNED_SHORT&&oe&&(G=oe.RGB16_EXT),I===t.SHORT&&oe&&(G=oe.RGB16_SNORM_EXT),I===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(G=t.R11F_G11F_B10F)),E===t.RGBA){const J=se?Jc:qe.getTransfer(Y);I===t.FLOAT&&(G=t.RGBA32F),I===t.HALF_FLOAT&&(G=t.RGBA16F),I===t.UNSIGNED_BYTE&&(G=J===st?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT&&oe&&(G=oe.RGBA16_EXT),I===t.SHORT&&oe&&(G=oe.RGBA16_SNORM_EXT),I===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(A,E){let I;return A?E===null||E===nr||E===Ul?I=t.DEPTH24_STENCIL8:E===$i?I=t.DEPTH32F_STENCIL8:E===Nl&&(I=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===nr||E===Ul?I=t.DEPTH_COMPONENT24:E===$i?I=t.DEPTH_COMPONENT32F:E===Nl&&(I=t.DEPTH_COMPONENT16),I}function T(A,E){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==gn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){const E=A.target;E.removeEventListener("dispose",w),b(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&d.delete(E)}function x(A){const E=A.target;E.removeEventListener("dispose",x),L(E)}function b(A){const E=i.get(A);if(E.__webglInit===void 0)return;const I=A.source,z=p.get(I);if(z){const Y=z[E.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(A),Object.keys(z).length===0&&p.delete(I)}i.remove(A)}function P(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const I=A.source,z=p.get(I);delete z[E.__cacheKey],a.memory.textures--}function L(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(E.__webglFramebuffer[z]))for(let Y=0;Y<E.__webglFramebuffer[z].length;Y++)t.deleteFramebuffer(E.__webglFramebuffer[z][Y]);else t.deleteFramebuffer(E.__webglFramebuffer[z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[z])}else{if(Array.isArray(E.__webglFramebuffer))for(let z=0;z<E.__webglFramebuffer.length;z++)t.deleteFramebuffer(E.__webglFramebuffer[z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let z=0;z<E.__webglColorRenderbuffer.length;z++)E.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const I=A.textures;for(let z=0,Y=I.length;z<Y;z++){const se=i.get(I[z]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(I[z])}i.remove(A)}let N=0;function H(){N=0}function X(){return N}function F(A){N=A}function Z(){const A=N;return A>=r.maxTextures&&Be("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function B(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function k(A,E){const I=i.get(A);if(A.isVideoTexture&&C(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&I.__version!==A.version){const z=A.image;if(z===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(I,A,E);return}}else A.isExternalTexture&&(I.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+E)}function $(A,E){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){Oe(I,A,E);return}else A.isExternalTexture&&(I.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+E)}function W(A,E){const I=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){Oe(I,A,E);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+E)}function ne(A,E){const I=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&I.__version!==A.version){ke(I,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+E)}const ie={[ap]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[op]:t.MIRRORED_REPEAT},be={[sn]:t.NEAREST,[wA]:t.NEAREST_MIPMAP_NEAREST,[Tu]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[gd]:t.LINEAR_MIPMAP_NEAREST,[Hs]:t.LINEAR_MIPMAP_LINEAR},me={[RA]:t.NEVER,[DA]:t.ALWAYS,[AA]:t.LESS,[d0]:t.LEQUAL,[CA]:t.EQUAL,[h0]:t.GEQUAL,[PA]:t.GREATER,[LA]:t.NOTEQUAL};function Ce(A,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gn||E.magFilter===gd||E.magFilter===Tu||E.magFilter===Hs||E.minFilter===gn||E.minFilter===gd||E.minFilter===Tu||E.minFilter===Hs)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ie[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ie[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ie[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,be[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,be[E.minFilter]),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==Tu&&E.minFilter!==Hs||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function te(A,E){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",w));const z=E.source;let Y=p.get(z);Y===void 0&&(Y={},p.set(z,Y));const se=B(E);if(se!==A.__cacheKey){Y[se]===void 0&&(Y[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Y[se].usedTimes++;const oe=Y[A.__cacheKey];oe!==void 0&&(Y[A.__cacheKey].usedTimes--,oe.usedTimes===0&&P(E)),A.__cacheKey=se,A.__webglTexture=Y[se].texture}return I}function le(A,E,I){return Math.floor(Math.floor(A/I)/E)}function fe(A,E,I,z){const se=A.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,I,z,E.data);else{se.sort((xe,he)=>xe.start-he.start);let oe=0;for(let xe=1;xe<se.length;xe++){const he=se[oe],de=se[xe],Re=he.start+he.count,De=le(de.start,E.width,4),ge=le(he.start,E.width,4);de.start<=Re+1&&De===ge&&le(de.start+de.count-1,E.width,4)===De?he.count=Math.max(he.count,de.start+de.count-he.start):(++oe,se[oe]=de)}se.length=oe+1;const G=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let xe=0,he=se.length;xe<he;xe++){const de=se[xe],Re=Math.floor(de.start/4),De=Math.ceil(de.count/4),ge=Re%E.width,U=Math.floor(Re/E.width),ce=De,j=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,ge,U,ce,j,I,z,E.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,G),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ae)}}function Oe(A,E,I){let z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(z=t.TEXTURE_3D);const Y=te(A,E),se=E.source;n.bindTexture(z,A.__webglTexture,t.TEXTURE0+I);const oe=i.get(se);if(se.version!==oe.__version||Y===!0){if(n.activeTexture(t.TEXTURE0+I),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const j=qe.getPrimaries(qe.workingColorSpace),ue=E.colorSpace===Kr?null:qe.getPrimaries(E.colorSpace),_e=E.colorSpace===Kr||j===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let J=m(E.image,!1,r.maxTextureSize);J=ve(E,J);const ae=s.convert(E.format,E.colorSpace),xe=s.convert(E.type);let he=S(E.internalFormat,ae,xe,E.normalized,E.colorSpace,E.isVideoTexture);Ce(z,E);let de;const Re=E.mipmaps,De=E.isVideoTexture!==!0,ge=oe.__version===void 0||Y===!0,U=se.dataReady,ce=T(E,J);if(E.isDepthTexture)he=M(E.format===Gs,E.type),ge&&(De?n.texStorage2D(t.TEXTURE_2D,1,he,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,he,J.width,J.height,0,ae,xe,null));else if(E.isDataTexture)if(Re.length>0){De&&ge&&n.texStorage2D(t.TEXTURE_2D,ce,he,Re[0].width,Re[0].height);for(let j=0,ue=Re.length;j<ue;j++)de=Re[j],De?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,de.width,de.height,ae,xe,de.data):n.texImage2D(t.TEXTURE_2D,j,he,de.width,de.height,0,ae,xe,de.data);E.generateMipmaps=!1}else De?(ge&&n.texStorage2D(t.TEXTURE_2D,ce,he,J.width,J.height),U&&fe(E,J,ae,xe)):n.texImage2D(t.TEXTURE_2D,0,he,J.width,J.height,0,ae,xe,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,he,Re[0].width,Re[0].height,J.depth);for(let j=0,ue=Re.length;j<ue;j++)if(de=Re[j],E.format!==Pi)if(ae!==null)if(De){if(U)if(E.layerUpdates.size>0){const _e=Q_(de.width,de.height,E.format,E.type);for(const re of E.layerUpdates){const we=de.data.subarray(re*_e/de.data.BYTES_PER_ELEMENT,(re+1)*_e/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,re,de.width,de.height,1,ae,we)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,J.depth,ae,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,he,de.width,de.height,J.depth,0,de.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,J.depth,ae,xe,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,he,de.width,de.height,J.depth,0,ae,xe,de.data)}else{De&&ge&&n.texStorage2D(t.TEXTURE_2D,ce,he,Re[0].width,Re[0].height);for(let j=0,ue=Re.length;j<ue;j++)de=Re[j],E.format!==Pi?ae!==null?De?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,de.width,de.height,ae,de.data):n.compressedTexImage2D(t.TEXTURE_2D,j,he,de.width,de.height,0,de.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,de.width,de.height,ae,xe,de.data):n.texImage2D(t.TEXTURE_2D,j,he,de.width,de.height,0,ae,xe,de.data)}else if(E.isDataArrayTexture)if(De){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,he,J.width,J.height,J.depth),U)if(E.layerUpdates.size>0){const j=Q_(J.width,J.height,E.format,E.type);for(const ue of E.layerUpdates){const _e=J.data.subarray(ue*j/J.data.BYTES_PER_ELEMENT,(ue+1)*j/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,J.width,J.height,1,ae,xe,_e)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ae,xe,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,J.width,J.height,J.depth,0,ae,xe,J.data);else if(E.isData3DTexture)De?(ge&&n.texStorage3D(t.TEXTURE_3D,ce,he,J.width,J.height,J.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ae,xe,J.data)):n.texImage3D(t.TEXTURE_3D,0,he,J.width,J.height,J.depth,0,ae,xe,J.data);else if(E.isFramebufferTexture){if(ge)if(De)n.texStorage2D(t.TEXTURE_2D,ce,he,J.width,J.height);else{let j=J.width,ue=J.height;for(let _e=0;_e<ce;_e++)n.texImage2D(t.TEXTURE_2D,_e,he,j,ue,0,ae,xe,null),j>>=1,ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const j=t.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),J.parentNode!==j){j.appendChild(J),d.add(E),j.onpaint=ue=>{const _e=ue.changedElements;for(const re of d)_e.includes(re.image)&&(re.needsUpdate=!0)},j.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const _e=t.RGBA,re=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,re,we,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Re.length>0){if(De&&ge){const j=ye(Re[0]);n.texStorage2D(t.TEXTURE_2D,ce,he,j.width,j.height)}for(let j=0,ue=Re.length;j<ue;j++)de=Re[j],De?U&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ae,xe,de):n.texImage2D(t.TEXTURE_2D,j,he,ae,xe,de);E.generateMipmaps=!1}else if(De){if(ge){const j=ye(J);n.texStorage2D(t.TEXTURE_2D,ce,he,j.width,j.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,xe,J)}else n.texImage2D(t.TEXTURE_2D,0,he,ae,xe,J);h(E)&&v(z),oe.__version=se.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ke(A,E,I){if(E.image.length!==6)return;const z=te(A,E),Y=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+I);const se=i.get(Y);if(Y.version!==se.__version||z===!0){n.activeTexture(t.TEXTURE0+I);const oe=qe.getPrimaries(qe.workingColorSpace),G=E.colorSpace===Kr?null:qe.getPrimaries(E.colorSpace),J=E.colorSpace===Kr||oe===G?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!ae&&!xe?he[re]=m(E.image[re],!0,r.maxCubemapSize):he[re]=xe?E.image[re].image:E.image[re],he[re]=ve(E,he[re]);const de=he[0],Re=s.convert(E.format,E.colorSpace),De=s.convert(E.type),ge=S(E.internalFormat,Re,De,E.normalized,E.colorSpace),U=E.isVideoTexture!==!0,ce=se.__version===void 0||z===!0,j=Y.dataReady;let ue=T(E,de);Ce(t.TEXTURE_CUBE_MAP,E);let _e;if(ae){U&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,ge,de.width,de.height);for(let re=0;re<6;re++){_e=he[re].mipmaps;for(let we=0;we<_e.length;we++){const Te=_e[we];E.format!==Pi?Re!==null?U?j&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,ge,Te.width,Te.height,0,Te.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,0,0,Te.width,Te.height,Re,De,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we,ge,Te.width,Te.height,0,Re,De,Te.data)}}}else{if(_e=E.mipmaps,U&&ce){_e.length>0&&ue++;const re=ye(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,ge,re.width,re.height)}for(let re=0;re<6;re++)if(xe){U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,Re,De,he[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,he[re].width,he[re].height,0,Re,De,he[re].data);for(let we=0;we<_e.length;we++){const rt=_e[we].image[re].image;U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,0,0,rt.width,rt.height,Re,De,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,ge,rt.width,rt.height,0,Re,De,rt.data)}}else{U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,De,he[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ge,Re,De,he[re]);for(let we=0;we<_e.length;we++){const Te=_e[we];U?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,0,0,Re,De,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,we+1,ge,Re,De,Te.image[re])}}}h(E)&&v(t.TEXTURE_CUBE_MAP),se.__version=Y.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Fe(A,E,I,z,Y,se){const oe=s.convert(I.format,I.colorSpace),G=s.convert(I.type),J=S(I.internalFormat,oe,G,I.normalized,I.colorSpace),ae=i.get(E),xe=i.get(I);if(xe.__renderTarget=E,!ae.__hasExternalTextures){const he=Math.max(1,E.width>>se),de=Math.max(1,E.height>>se);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,se,J,he,de,E.depth,0,oe,G,null):n.texImage2D(Y,se,J,he,de,0,oe,G,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Mt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,Y,xe.__webglTexture,0,mt(E)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,Y,xe.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(A,E,I){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer){const z=E.depthTexture,Y=z&&z.isDepthTexture?z.type:null,se=M(E.stencilBuffer,Y),oe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Mt(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(E),se,E.width,E.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(E),se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,se,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,A)}else{const z=E.textures;for(let Y=0;Y<z.length;Y++){const se=z[Y],oe=s.convert(se.format,se.colorSpace),G=s.convert(se.type),J=S(se.internalFormat,oe,G,se.normalized,se.colorSpace);Mt(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(E),J,E.width,E.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(A,E,I){const z=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(E.depthTexture);if(Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,E.depthTexture);const ae=s.convert(E.depthTexture.format),xe=s.convert(E.depthTexture.type);let he;E.depthTexture.format===Ar?he=t.DEPTH_COMPONENT24:E.depthTexture.format===Gs&&(he=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,E.width,E.height,0,ae,xe,null)}}else k(E.depthTexture,0);const se=Y.__webglTexture,oe=mt(E),G=z?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,J=E.depthTexture.format===Gs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ar)Mt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,G,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,J,G,se,0);else if(E.depthTexture.format===Gs)Mt(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,G,se,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,J,G,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(A){const E=i.get(A),I=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const z=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),z){const Y=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),E.__depthDisposeCallback=Y}E.__boundDepthTexture=z}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(I)for(let z=0;z<6;z++)He(E.__webglFramebuffer[z],A,z);else{const z=A.texture.mipmaps;z&&z.length>0?He(E.__webglFramebuffer[0],A,0):He(E.__webglFramebuffer,A,0)}else if(I){E.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[z]),E.__webglDepthbuffer[z]===void 0)E.__webglDepthbuffer[z]=t.createRenderbuffer(),pt(E.__webglDepthbuffer[z],A,!1);else{const Y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}else{const z=A.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),pt(E.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(A,E,I){const z=i.get(A);E!==void 0&&Fe(z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&it(A)}function Ye(A){const E=A.texture,I=i.get(A),z=i.get(E);A.addEventListener("dispose",x);const Y=A.textures,se=A.isWebGLCubeRenderTarget===!0,oe=Y.length>1;if(oe||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=E.version,a.memory.textures++),se){I.__webglFramebuffer=[];for(let G=0;G<6;G++)if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer[G]=[];for(let J=0;J<E.mipmaps.length;J++)I.__webglFramebuffer[G][J]=t.createFramebuffer()}else I.__webglFramebuffer[G]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer=[];for(let G=0;G<E.mipmaps.length;G++)I.__webglFramebuffer[G]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(oe)for(let G=0,J=Y.length;G<J;G++){const ae=i.get(Y[G]);ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Mt(A)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let G=0;G<Y.length;G++){const J=Y[G];I.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[G]);const ae=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),he=S(J.internalFormat,ae,xe,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),de=mt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,I.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),pt(I.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,E);for(let G=0;G<6;G++)if(E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Fe(I.__webglFramebuffer[G][J],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+G,J);else Fe(I.__webglFramebuffer[G],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);h(E)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let G=0,J=Y.length;G<J;G++){const ae=Y[G],xe=i.get(ae);let he=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,xe.__webglTexture),Ce(he,ae),Fe(I.__webglFramebuffer,A,ae,t.COLOR_ATTACHMENT0+G,he,0),h(ae)&&v(he)}n.unbindTexture()}else{let G=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(G=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(G,z.__webglTexture),Ce(G,E),E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Fe(I.__webglFramebuffer[J],A,E,t.COLOR_ATTACHMENT0,G,J);else Fe(I.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,G,0);h(E)&&v(G),n.unbindTexture()}A.depthBuffer&&it(A)}function St(A){const E=A.textures;for(let I=0,z=E.length;I<z;I++){const Y=E[I];if(h(Y)){const se=y(A),oe=i.get(Y).__webglTexture;n.bindTexture(se,oe),v(se),n.unbindTexture()}}}const Pt=[],Ut=[];function Gt(A){if(A.samples>0){if(Mt(A)===!1){const E=A.textures,I=A.width,z=A.height;let Y=t.COLOR_BUFFER_BIT;const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(A),G=E.length>1;if(G)for(let ae=0;ae<E.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),G){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const xe=i.get(E[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,I,z,0,0,I,z,Y,t.NEAREST),l===!0&&(Pt.length=0,Ut.length=0,Pt.push(t.COLOR_ATTACHMENT0+ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pt.push(se),Ut.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let ae=0;ae<E.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const xe=i.get(E[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function mt(A){return Math.min(r.maxSamples,A.samples)}function Mt(A){const E=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function C(A){const E=a.render.frame;c.get(A)!==E&&(c.set(A,E),A.update())}function ve(A,E){const I=A.colorSpace,z=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||I!==Qc&&I!==Kr&&(qe.getTransfer(I)===st?(z!==Pi||Y!==pi)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",I)),E}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=X,this.setTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=Ze,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ED(t,e){function n(i,r=Kr){let s;const a=qe.getTransfer(r);if(i===pi)return t.UNSIGNED_BYTE;if(i===o0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===l0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===t1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===n1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===JS)return t.BYTE;if(i===e1)return t.SHORT;if(i===Nl)return t.UNSIGNED_SHORT;if(i===a0)return t.INT;if(i===nr)return t.UNSIGNED_INT;if(i===$i)return t.FLOAT;if(i===Rr)return t.HALF_FLOAT;if(i===i1)return t.ALPHA;if(i===r1)return t.RGB;if(i===Pi)return t.RGBA;if(i===Ar)return t.DEPTH_COMPONENT;if(i===Gs)return t.DEPTH_STENCIL;if(i===s1)return t.RED;if(i===u0)return t.RED_INTEGER;if(i===ra)return t.RG;if(i===c0)return t.RG_INTEGER;if(i===f0)return t.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lp||i===up||i===cp||i===fp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===up)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dp||i===hp||i===pp||i===mp||i===gp||i===Kc||i===_p)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dp||i===hp)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===mp)return s.COMPRESSED_R11_EAC;if(i===gp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Kc)return s.COMPRESSED_RG11_EAC;if(i===_p)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vp||i===xp||i===yp||i===Sp||i===Mp||i===Ep||i===wp||i===Tp||i===bp||i===Rp||i===Ap||i===Cp||i===Pp||i===Lp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ep)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ap)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dp||i===Ip||i===Np)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Dp)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Np)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Up||i===Fp||i===Zc||i===Op)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Up)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Op)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ul?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const wD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new m1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:wD,fragmentShader:TD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ui(new Co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RD extends la{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new bD,h={},v=n.getContextAttributes();let y=null,S=null;const M=[],T=[],w=new je;let x=null;const b=new hi;b.viewport=new It;const P=new hi;P.viewport=new It;const L=[b,P],N=new OC;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=M[te];return le===void 0&&(le=new Md,M[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=M[te];return le===void 0&&(le=new Md,M[te]=le),le.getGripSpace()},this.getHand=function(te){let le=M[te];return le===void 0&&(le=new Md,M[te]=le),le.getHandSpace()};function F(te){const le=T.indexOf(te.inputSource);if(le===-1)return;const fe=M[le];fe!==void 0&&(fe.update(te.inputSource,te.frame,u||a),fe.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",B);for(let te=0;te<M.length;te++){const le=T[te];le!==null&&(T[te]=null,M[te].disconnect(le))}H=null,X=null,m.reset();for(const te in h)delete h[te];e.setRenderTarget(y),p=null,f=null,d=null,r=null,S=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Oe=null,ke=null;v.depth&&(ke=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=v.stencil?Gs:Ar,Oe=v.stencil?Ul:nr);const Fe={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ji(f.textureWidth,f.textureHeight,{format:Pi,type:pi,depthTexture:new mo(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ji(p.framebufferWidth,p.framebufferHeight,{format:Pi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(te){for(let le=0;le<te.removed.length;le++){const fe=te.removed[le],Oe=T.indexOf(fe);Oe>=0&&(T[Oe]=null,M[Oe].disconnect(fe))}for(let le=0;le<te.added.length;le++){const fe=te.added[le];let Oe=T.indexOf(fe);if(Oe===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=T.length){T.push(fe),Oe=Fe;break}else if(T[Fe]===null){T[Fe]=fe,Oe=Fe;break}if(Oe===-1)break}const ke=M[Oe];ke&&ke.connect(fe)}}const k=new Q,$=new Q;function W(te,le,fe){k.setFromMatrixPosition(le.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const Oe=k.distanceTo($),ke=le.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,pt=ke[14]/(ke[10]-1),He=ke[14]/(ke[10]+1),it=(ke[9]+1)/ke[5],Ze=(ke[9]-1)/ke[5],Ye=(ke[8]-1)/ke[0],St=(Fe[8]+1)/Fe[0],Pt=pt*Ye,Ut=pt*St,Gt=Oe/(-Ye+St),mt=Gt*-Ye;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(mt),te.translateZ(Gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ke[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Mt=pt+Gt,C=He+Gt,ve=Pt-mt,ye=Ut+(Oe-mt),A=it*He/C*Mt,E=Ze*He/C*Mt;te.projectionMatrix.makePerspective(ve,ye,A,E,Mt,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ne(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let le=te.near,fe=te.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),N.near=P.near=b.near=le,N.far=P.far=b.far=fe,(H!==N.near||X!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,X=N.far),N.layers.mask=te.layers.mask|6,b.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;const Oe=te.parent,ke=N.cameras;ne(N,Oe);for(let Fe=0;Fe<ke.length;Fe++)ne(ke[Fe],Oe);ke.length===2?W(N,b,P):N.projectionMatrix.copy(b.projectionMatrix),ie(te,N,Oe)};function ie(te,le,fe){fe===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(fe.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ol*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(te){return h[te]};let be=null;function me(te,le){if(c=le.getViewerPose(u||a),g=le,c!==null){const fe=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Oe=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,Oe=!0);for(let He=0;He<fe.length;He++){const it=fe[He];let Ze=null;if(p!==null)Ze=p.getViewport(it);else{const St=d.getViewSubImage(f,it);Ze=St.viewport,He===0&&(e.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(S))}let Ye=L[He];Ye===void 0&&(Ye=new hi,Ye.layers.enable(He),Ye.viewport=new It,L[He]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),He===0&&(N.matrix.copy(Ye.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Oe===!0&&N.cameras.push(Ye)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const He=d.getDepthInformation(fe[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<fe.length;He++){const it=fe[He].camera;if(it){let Ze=h[it];Ze||(Ze=new m1,h[it]=Ze);const Ye=d.getCameraImage(it);Ze.sourceTexture=Ye}}}}for(let fe=0;fe<M.length;fe++){const Oe=T[fe],ke=M[fe];Oe!==null&&ke!==void 0&&ke.update(Oe,le,u||a)}be&&be(te,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ce=new x1;Ce.setAnimationLoop(me),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}}const AD=new $t,b1=new ze;b1.set(-1,0,0,0,1,0,0,0,1);function CD(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,g1(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(AD.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(b1),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PD(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const T=M.program;i.uniformBlockBinding(S,T)}function u(S,M){let T=r[S.id];T===void 0&&(m(S),T=c(S),r[S.id]=T,S.addEventListener("dispose",v));const w=M.program;i.updateUBOMapping(S,w);const x=e.render.frame;s[S.id]!==x&&(f(S),s[S.id]=x)}function c(S){const M=d();S.__bindingPointIndex=M;const T=t.createBuffer(),w=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,w,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=r[S.id],T=S.uniforms,w=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let x=0,b=T.length;x<b;x++){const P=T[x];if(Array.isArray(P))for(let L=0,N=P.length;L<N;L++)p(P[L],x,L,w);else p(P,x,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,M,T,w){if(_(S,M,T,w)===!0){const x=S.__offset,b=S.value;if(Array.isArray(b)){let P=0;for(let L=0;L<b.length;L++){const N=b[L],H=h(N);g(N,S.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function g(S,M,T){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,T)}function _(S,M,T,w){const x=S.value,b=M+"_"+T;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{const P=w[b];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(S){const M=S.uniforms;let T=0;const w=16;for(let b=0,P=M.length;b<P;b++){const L=Array.isArray(M[b])?M[b]:[M[b]];for(let N=0,H=L.length;N<H;N++){const X=L[N],F=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,B=F.length;Z<B;Z++){const k=F[Z],$=h(k),W=T%w,ne=W%$.boundary,ie=W+ne;T+=ne,ie!==0&&w-ie<$.storage&&(T+=w-ie),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=$.storage}}}const x=T%w;return x>0&&(T+=w-x),S.__size=T,S.__cache={},this}function h(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",S),M}function v(S){const M=S.target;M.removeEventListener("dispose",v);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:y}}const LD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function DD(){return zi===null&&(zi=new vC(LD,16,16,ra,Rr),zi.name="DFG_LUT",zi.minFilter=gn,zi.magFilter=gn,zi.wrapS=_r,zi.wrapT=_r,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class R1{constructor(e={}){const{canvas:n=NA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=pi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([f0,c0,u0]),h=new Set([pi,nr,Nl,Ul,o0,l0]),v=new Uint32Array(4),y=new Int32Array(4),S=new Q;let M=null,T=null;const w=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,N=null,H=null,X=null,F=null;this._outputColorSpace=wn;let Z=0,B=0,k=null,$=-1,W=null;const ne=new It,ie=new It;let be=null;const me=new tt(0);let Ce=0,te=n.width,le=n.height,fe=1,Oe=null,ke=null;const Fe=new It(0,0,te,le),pt=new It(0,0,te,le);let He=!1;const it=new h1;let Ze=!1,Ye=!1;const St=new $t,Pt=new Q,Ut=new It,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Mt(){return k===null?fe:1}let C=i;function ve(R,V){return n.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${s0}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",An,!1),C===null){const V="webgl2";if(C=ve(V,R),C===null)throw ve(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Je("WebGLRenderer: "+R.message),R}let ye,A,E,I,z,Y,se,oe,G,J,ae,xe,he,de,Re,De,ge,U,ce,j,ue,_e,re;function we(){ye=new D3(C),ye.init(),ue=new ED(C,ye),A=new w3(C,ye,e,ue),E=new SD(C,ye),A.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),H=C.createFramebuffer(),X=C.createFramebuffer(),F=C.createFramebuffer(),I=new U3(C),z=new oD,Y=new MD(C,ye,E,z,A,ue,I),se=new L3(P),oe=new BC(C),_e=new M3(C,oe),G=new I3(C,oe,I,_e),J=new O3(C,G,oe,_e,I),U=new F3(C,A,Y),Re=new T3(z),ae=new aD(P,se,ye,A,_e,Re),xe=new CD(P,z),he=new uD,de=new mD(ye),ge=new S3(P,se,E,J,g,l),De=new yD(P,J,A),re=new PD(C,I,A,E),ce=new E3(C,ye,I),j=new N3(C,ye,I),I.programs=ae.programs,P.capabilities=A,P.extensions=ye,P.properties=z,P.renderLists=he,P.shadowMap=De,P.state=E,P.info=I}we(),_!==pi&&(b=new B3(_,n.width,n.height,o,r,s));const Te=new RD(P,C);this.xr=Te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(R){R!==void 0&&(fe=R,this.setSize(te,le,!1))},this.getSize=function(R){return R.set(te,le)},this.setSize=function(R,V,ee=!0){if(Te.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,le=V,n.width=Math.floor(R*fe),n.height=Math.floor(V*fe),ee===!0&&(n.style.width=R+"px",n.style.height=V+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(te*fe,le*fe).floor()},this.setDrawingBufferSize=function(R,V,ee){te=R,le=V,fe=ee,n.width=Math.floor(R*ee),n.height=Math.floor(V*ee),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(_===pi){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ne)},this.getViewport=function(R){return R.copy(Fe)},this.setViewport=function(R,V,ee,q){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,V,ee,q),E.viewport(ne.copy(Fe).multiplyScalar(fe).round())},this.getScissor=function(R){return R.copy(pt)},this.setScissor=function(R,V,ee,q){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,V,ee,q),E.scissor(ie.copy(pt).multiplyScalar(fe).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(R){E.setScissorTest(He=R)},this.setOpaqueSort=function(R){Oe=R},this.setTransparentSort=function(R){ke=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,ee=!0){let q=0;if(R){let K=!1;if(k!==null){const Ee=k.texture.format;K=m.has(Ee)}if(K){const Ee=k.texture.type,Pe=h.has(Ee),Me=ge.getClearColor(),Ie=ge.getClearAlpha(),Ne=Me.r,Ve=Me.g,We=Me.b;Pe?(v[0]=Ne,v[1]=Ve,v[2]=We,v[3]=Ie,C.clearBufferuiv(C.COLOR,0,v)):(y[0]=Ne,y[1]=Ve,y[2]=We,y[3]=Ie,C.clearBufferiv(C.COLOR,0,y))}else q|=C.COLOR_BUFFER_BIT}V&&(q|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),N=R},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",An,!1),ge.dispose(),he.dispose(),de.dispose(),z.dispose(),se.dispose(),J.dispose(),_e.dispose(),re.dispose(),ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",W0),Te.removeEventListener("sessionend",X0),Ts.stop()};function rt(R){R.preventDefault(),P_("WebGLRenderer: Context Lost."),L=!0}function nt(){P_("WebGLRenderer: Context Restored."),L=!1;const R=I.autoReset,V=De.enabled,ee=De.autoUpdate,q=De.needsUpdate,K=De.type;we(),I.autoReset=R,De.enabled=V,De.autoUpdate=ee,De.needsUpdate=q,De.type=K}function An(R){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function si(R){const V=R.target;V.removeEventListener("dispose",si),iu(V)}function iu(R){ru(R),z.remove(R)}function ru(R){const V=z.get(R).programs;V!==void 0&&(V.forEach(function(ee){ae.releaseProgram(ee)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ee,q,K,Ee){V===null&&(V=Gt);const Pe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Me=NM(R,V,ee,q,K);E.setMaterial(q,Pe);let Ie=ee.index,Ne=1;if(q.wireframe===!0){if(Ie=G.getWireframeAttribute(ee),Ie===void 0)return;Ne=2}const Ve=ee.drawRange,We=ee.attributes.position;let Ue=Ve.start*Ne,ot=(Ve.start+Ve.count)*Ne;Ee!==null&&(Ue=Math.max(Ue,Ee.start*Ne),ot=Math.min(ot,(Ee.start+Ee.count)*Ne)),Ie!==null?(Ue=Math.max(Ue,0),ot=Math.min(ot,Ie.count)):We!=null&&(Ue=Math.max(Ue,0),ot=Math.min(ot,We.count));const Ft=ot-Ue;if(Ft<0||Ft===1/0)return;_e.setup(K,q,Me,ee,Ie);let Lt,lt=ce;if(Ie!==null&&(Lt=oe.get(Ie),lt=j,lt.setIndex(Lt)),K.isMesh)q.wireframe===!0?(E.setLineWidth(q.wireframeLinewidth*Mt()),lt.setMode(C.LINES)):lt.setMode(C.TRIANGLES);else if(K.isLine){let un=q.linewidth;un===void 0&&(un=1),E.setLineWidth(un*Mt()),K.isLineSegments?lt.setMode(C.LINES):K.isLineLoop?lt.setMode(C.LINE_LOOP):lt.setMode(C.LINE_STRIP)}else K.isPoints?lt.setMode(C.POINTS):K.isSprite&&lt.setMode(C.TRIANGLES);if(K.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const un=K._multiDrawStarts,Ae=K._multiDrawCounts,Gn=K._multiDrawCount,Qe=Ie?oe.get(Ie).bytesPerElement:1,ai=z.get(q).currentProgram.getUniforms();for(let Oi=0;Oi<Gn;Oi++)ai.setValue(C,"_gl_DrawID",Oi),lt.render(un[Oi]/Qe,Ae[Oi])}else if(K.isInstancedMesh)lt.renderInstances(Ue,Ft,K.count);else if(ee.isInstancedBufferGeometry){const un=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ae=Math.min(ee.instanceCount,un);lt.renderInstances(Ue,Ft,Ae)}else lt.render(Ue,Ft)};function ws(R,V,ee){R.transparent===!0&&R.side===Xi&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,au(R,V,ee),R.side=gs,R.needsUpdate=!0,au(R,V,ee),R.side=Xi):au(R,V,ee)}this.compile=function(R,V,ee=null){ee===null&&(ee=R),T=de.get(ee),T.init(V),x.push(T),ee.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),R!==ee&&R.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights();const q=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Me=Ee[Pe];ws(Me,ee,K),q.add(Me)}else ws(Ee,ee,K),q.add(Ee)}),T=x.pop(),q},this.compileAsync=function(R,V,ee=null){const q=this.compile(R,V,ee);return new Promise(K=>{function Ee(){if(q.forEach(function(Pe){z.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){K(R);return}setTimeout(Ee,10)}ye.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ff=null;function DM(R){Ff&&Ff(R)}function W0(){Ts.stop()}function X0(){Ts.start()}const Ts=new x1;Ts.setAnimationLoop(DM),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(R){Ff=R,Te.setAnimationLoop(R),R===null?Ts.stop():Ts.start()},Te.addEventListener("sessionstart",W0),Te.addEventListener("sessionend",X0),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(R,V);const ee=Te.enabled===!0&&Te.isPresenting===!0,q=b!==null&&(k===null||ee)&&b.begin(P,k);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(V),V=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,V,k),T=de.get(R,x.length),T.init(V),T.state.textureUnits=Y.getTextureUnits(),x.push(T),St.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),it.setFromProjectionMatrix(St,ji,V.reversedDepth),Ye=this.localClippingEnabled,Ze=Re.init(this.clippingPlanes,Ye),M=he.get(R,w.length),M.init(),w.push(M),Te.enabled===!0&&Te.isPresenting===!0){const Pe=P.xr.getDepthSensingMesh();Pe!==null&&Of(Pe,V,-1/0,P.sortObjects)}Of(R,V,0,P.sortObjects),M.finish(),P.sortObjects===!0&&M.sort(Oe,ke,V.reversedDepth),mt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,mt&&ge.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Re.beginShadows();const K=T.state.shadowsArray;if(De.render(K,R,V),Ze===!0&&Re.endShadows(),(q&&b.hasRenderPass())===!1){const Pe=M.opaque,Me=M.transmissive;if(T.setupLights(),V.isArrayCamera){const Ie=V.cameras;if(Me.length>0)for(let Ne=0,Ve=Ie.length;Ne<Ve;Ne++){const We=Ie[Ne];$0(Pe,Me,R,We)}mt&&ge.render(R);for(let Ne=0,Ve=Ie.length;Ne<Ve;Ne++){const We=Ie[Ne];Y0(M,R,We,We.viewport)}}else Me.length>0&&$0(Pe,Me,R,V),mt&&ge.render(R),Y0(M,R,V)}k!==null&&B===0&&(Y.updateMultisampleRenderTarget(k),Y.updateRenderTargetMipmap(k)),q&&b.end(P),R.isScene===!0&&R.onAfterRender(P,R,V),_e.resetDefaultState(),$=-1,W=null,x.pop(),x.length>0?(T=x[x.length-1],Y.setTextureUnits(T.state.textureUnits),Ze===!0&&Re.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,N!==null&&N.renderEnd()};function Of(R,V,ee,q){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLightProbeGrid)T.pushLightProbeGrid(R);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||it.intersectsSprite(R)){q&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Pe=J.update(R),Me=R.material;Me.visible&&M.push(R,Pe,Me,ee,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||it.intersectsObject(R))){const Pe=J.update(R),Me=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ut.copy(Pe.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Me)){const Ie=Pe.groups;for(let Ne=0,Ve=Ie.length;Ne<Ve;Ne++){const We=Ie[Ne],Ue=Me[We.materialIndex];Ue&&Ue.visible&&M.push(R,Pe,Ue,ee,Ut.z,We)}}else Me.visible&&M.push(R,Pe,Me,ee,Ut.z,null)}}const Ee=R.children;for(let Pe=0,Me=Ee.length;Pe<Me;Pe++)Of(Ee[Pe],V,ee,q)}function Y0(R,V,ee,q){const{opaque:K,transmissive:Ee,transparent:Pe}=R;T.setupLightsView(ee),Ze===!0&&Re.setGlobalState(P.clippingPlanes,ee),q&&E.viewport(ne.copy(q)),K.length>0&&su(K,V,ee),Ee.length>0&&su(Ee,V,ee),Pe.length>0&&su(Pe,V,ee),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function $0(R,V,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const Ue=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Ji(1,1,{generateMipmaps:!0,type:Ue?Rr:pi,minFilter:Hs,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const Ee=T.state.transmissionRenderTarget[q.id],Pe=q.viewport||ne;Ee.setSize(Pe.z*P.transmissionResolutionScale,Pe.w*P.transmissionResolutionScale);const Me=P.getRenderTarget(),Ie=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(me),Ce=P.getClearAlpha(),Ce<1&&P.setClearColor(16777215,.5),P.clear(),mt&&ge.render(ee);const Ve=P.toneMapping;P.toneMapping=Qi;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),Ze===!0&&Re.setGlobalState(P.clippingPlanes,q),su(R,ee,q),Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ot=0,Ft=V.length;ot<Ft;ot++){const Lt=V[ot],{object:lt,geometry:un,material:Ae,group:Gn}=Lt;if(Ae.side===Xi&&lt.layers.test(q.layers)){const Qe=Ae.side;Ae.side=Fn,Ae.needsUpdate=!0,j0(lt,ee,q,un,Ae,Gn),Ae.side=Qe,Ae.needsUpdate=!0,Ue=!0}}Ue===!0&&(Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Me,Ie,Ne),P.setClearColor(me,Ce),We!==void 0&&(q.viewport=We),P.toneMapping=Ve}function su(R,V,ee){const q=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Ee=R.length;K<Ee;K++){const Pe=R[K],{object:Me,geometry:Ie,group:Ne}=Pe;let Ve=Pe.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),Me.layers.test(ee.layers)&&j0(Me,V,ee,Ie,Ve,Ne)}}function j0(R,V,ee,q,K,Ee){R.onBeforeRender(P,V,ee,q,K,Ee),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(P,V,ee,q,R,Ee),K.transparent===!0&&K.side===Xi&&K.forceSinglePass===!1?(K.side=Fn,K.needsUpdate=!0,P.renderBufferDirect(ee,V,q,K,R,Ee),K.side=gs,K.needsUpdate=!0,P.renderBufferDirect(ee,V,q,K,R,Ee),K.side=Xi):P.renderBufferDirect(ee,V,q,K,R,Ee),R.onAfterRender(P,V,ee,q,K,Ee)}function au(R,V,ee){V.isScene!==!0&&(V=Gt);const q=z.get(R),K=T.state.lights,Ee=T.state.shadowsArray,Pe=K.state.version,Me=ae.getParameters(R,K.state,Ee,V,ee,T.state.lightProbeGridArray),Ie=ae.getProgramCacheKey(Me);let Ne=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,q.fog=V.fog;const Ve=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=se.get(R.envMap||q.environment,Ve),q.envMapRotation=q.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",si),Ne=new Map,q.programs=Ne);let We=Ne.get(Ie);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Pe)return K0(R,Me),We}else Me.uniforms=ae.getUniforms(R),N!==null&&R.isNodeMaterial&&N.build(R,ee,Me),R.onBeforeCompile(Me,P),We=ae.acquireProgram(Me,Ie),Ne.set(Ie,We),q.uniforms=Me.uniforms;const Ue=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ue.clippingPlanes=Re.uniform),K0(R,Me),q.needsLights=FM(R),q.lightsStateVersion=Pe,q.needsLights&&(Ue.ambientLightColor.value=K.state.ambient,Ue.lightProbe.value=K.state.probe,Ue.directionalLights.value=K.state.directional,Ue.directionalLightShadows.value=K.state.directionalShadow,Ue.spotLights.value=K.state.spot,Ue.spotLightShadows.value=K.state.spotShadow,Ue.rectAreaLights.value=K.state.rectArea,Ue.ltc_1.value=K.state.rectAreaLTC1,Ue.ltc_2.value=K.state.rectAreaLTC2,Ue.pointLights.value=K.state.point,Ue.pointLightShadows.value=K.state.pointShadow,Ue.hemisphereLights.value=K.state.hemi,Ue.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ue.spotLightMatrix.value=K.state.spotLightMatrix,Ue.spotLightMap.value=K.state.spotLightMap,Ue.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=We,q.uniformsList=null,We}function q0(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=vc.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function K0(R,V){const ee=z.get(R);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function IM(R,V){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let ee=0,q=R.length;ee<q;ee++){const K=R[ee];if(K.texture!==null&&K.boundingBox.containsPoint(S))return K}return null}function NM(R,V,ee,q,K){V.isScene!==!0&&(V=Gt),Y.resetTextureUnits();const Ee=V.fog,Pe=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?V.environment:null,Me=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:qe.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ne=se.get(q.envMap||Pe,Ie),Ve=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,We=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!ee.morphAttributes.position,ot=!!ee.morphAttributes.normal,Ft=!!ee.morphAttributes.color;let Lt=Qi;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Lt=P.toneMapping);const lt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,un=lt!==void 0?lt.length:0,Ae=z.get(q),Gn=T.state.lights;if(Ze===!0&&(Ye===!0||R!==W)){const dt=R===W&&q.id===$;Re.setState(q,R,dt)}let Qe=!1;q.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Gn.state.version||Ae.outputColorSpace!==Me||K.isBatchedMesh&&Ae.batching===!1||!K.isBatchedMesh&&Ae.batching===!0||K.isBatchedMesh&&Ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ae.instancing===!1||!K.isInstancedMesh&&Ae.instancing===!0||K.isSkinnedMesh&&Ae.skinning===!1||!K.isSkinnedMesh&&Ae.skinning===!0||K.isInstancedMesh&&Ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ae.instancingMorph===!1&&K.morphTexture!==null||Ae.envMap!==Ne||q.fog===!0&&Ae.fog!==Ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Re.numPlanes||Ae.numIntersection!==Re.numIntersection)||Ae.vertexAlphas!==Ve||Ae.vertexTangents!==We||Ae.morphTargets!==Ue||Ae.morphNormals!==ot||Ae.morphColors!==Ft||Ae.toneMapping!==Lt||Ae.morphTargetsCount!==un||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Ae.__version=q.version);let ai=Ae.currentProgram;Qe===!0&&(ai=au(q,V,K),N&&q.isNodeMaterial&&N.onUpdateProgram(q,ai,Ae));let Oi=!1,Nr=!1,ca=!1;const ut=ai.getUniforms(),Ot=Ae.uniforms;if(E.useProgram(ai.program)&&(Oi=!0,Nr=!0,ca=!0),q.id!==$&&($=q.id,Nr=!0),Ae.needsLights){const dt=IM(T.state.lightProbeGridArray,K);Ae.lightProbeGrid!==dt&&(Ae.lightProbeGrid=dt,Nr=!0)}if(Oi||W!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",R.projectionMatrix),ut.setValue(C,"viewMatrix",R.matrixWorldInverse);const Fr=ut.map.cameraPosition;Fr!==void 0&&Fr.setValue(C,Pt.setFromMatrixPosition(R.matrixWorld)),A.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ut.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),W!==R&&(W=R,Nr=!0,ca=!0)}if(Ae.needsLights&&(Gn.state.directionalShadowMap.length>0&&ut.setValue(C,"directionalShadowMap",Gn.state.directionalShadowMap,Y),Gn.state.spotShadowMap.length>0&&ut.setValue(C,"spotShadowMap",Gn.state.spotShadowMap,Y),Gn.state.pointShadowMap.length>0&&ut.setValue(C,"pointShadowMap",Gn.state.pointShadowMap,Y)),K.isSkinnedMesh){ut.setOptional(C,K,"bindMatrix"),ut.setOptional(C,K,"bindMatrixInverse");const dt=K.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ut.setValue(C,"boneTexture",dt.boneTexture,Y))}K.isBatchedMesh&&(ut.setOptional(C,K,"batchingTexture"),ut.setValue(C,"batchingTexture",K._matricesTexture,Y),ut.setOptional(C,K,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",K._indirectTexture,Y),ut.setOptional(C,K,"batchingColorTexture"),K._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",K._colorsTexture,Y));const Ur=ee.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&U.update(K,ee,ai),(Nr||Ae.receiveShadow!==K.receiveShadow)&&(Ae.receiveShadow=K.receiveShadow,ut.setValue(C,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&V.environment!==null&&(Ot.envMapIntensity.value=V.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=DD()),Nr){if(ut.setValue(C,"toneMappingExposure",P.toneMappingExposure),Ae.needsLights&&UM(Ot,ca),Ee&&q.fog===!0&&xe.refreshFogUniforms(Ot,Ee),xe.refreshMaterialUniforms(Ot,q,fe,le,T.state.transmissionRenderTarget[R.id]),Ae.needsLights&&Ae.lightProbeGrid){const dt=Ae.lightProbeGrid;Ot.probesSH.value=dt.texture,Ot.probesMin.value.copy(dt.boundingBox.min),Ot.probesMax.value.copy(dt.boundingBox.max),Ot.probesResolution.value.copy(dt.resolution)}vc.upload(C,q0(Ae),Ot,Y)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(vc.upload(C,q0(Ae),Ot,Y),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ut.setValue(C,"center",K.center),ut.setValue(C,"modelViewMatrix",K.modelViewMatrix),ut.setValue(C,"normalMatrix",K.normalMatrix),ut.setValue(C,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const dt=q.uniformsGroups;for(let Fr=0,fa=dt.length;Fr<fa;Fr++){const Z0=dt[Fr];re.update(Z0,ai),re.bind(Z0,ai)}}return ai}function UM(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function FM(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,V,ee){const q=z.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),z.get(R.texture).__webglTexture=V,z.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:ee,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const ee=z.get(R);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,ee=0){k=R,Z=V,B=ee;let q=null,K=!1,Ee=!1;if(R){const Me=z.get(R);if(Me.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(C.FRAMEBUFFER,Me.__webglFramebuffer),ne.copy(R.viewport),ie.copy(R.scissor),be=R.scissorTest,E.viewport(ne),E.scissor(ie),E.setScissorTest(be),$=-1;return}else if(Me.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Me.__hasExternalTextures)Y.rebindTextures(R,z.get(R.texture).__webglTexture,z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(Me.__boundDepthTexture!==Ve){if(Ve!==null&&z.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Ne=z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[V])?q=Ne[V][ee]:q=Ne[V],K=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?q=z.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[ee]:q=Ne,ne.copy(R.viewport),ie.copy(R.scissor),be=R.scissorTest}else ne.copy(Fe).multiplyScalar(fe).floor(),ie.copy(pt).multiplyScalar(fe).floor(),be=He;if(ee!==0&&(q=H),E.bindFramebuffer(C.FRAMEBUFFER,q)&&E.drawBuffers(R,q),E.viewport(ne),E.scissor(ie),E.setScissorTest(be),K){const Me=z.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+V,Me.__webglTexture,ee)}else if(Ee){const Me=V;for(let Ie=0;Ie<R.textures.length;Ie++){const Ne=z.get(R.textures[Ie]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,ee,Me)}}else if(R!==null&&ee!==0){const Me=z.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,ee)}$=-1},this.readRenderTargetPixels=function(R,V,ee,q,K,Ee,Pe,Me=0){if(!(R&&R.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){E.bindFramebuffer(C.FRAMEBUFFER,Ie);try{const Ne=R.textures[Me],Ve=Ne.format,We=Ne.type;if(R.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),!A.textureFormatReadable(Ve)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(We)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-q&&ee>=0&&ee<=R.height-K&&C.readPixels(V,ee,q,K,ue.convert(Ve),ue.convert(We),Ee)}finally{const Ne=k!==null?z.get(k).__webglFramebuffer:null;E.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,V,ee,q,K,Ee,Pe,Me=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(V>=0&&V<=R.width-q&&ee>=0&&ee<=R.height-K){E.bindFramebuffer(C.FRAMEBUFFER,Ie);const Ne=R.textures[Me],Ve=Ne.format,We=Ne.type;if(R.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),!A.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ue),C.bufferData(C.PIXEL_PACK_BUFFER,Ee.byteLength,C.STREAM_READ),C.readPixels(V,ee,q,K,ue.convert(Ve),ue.convert(We),0);const ot=k!==null?z.get(k).__webglFramebuffer:null;E.bindFramebuffer(C.FRAMEBUFFER,ot);const Ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await UA(C,Ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ue),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ee),C.deleteBuffer(Ue),C.deleteSync(Ft),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,ee=0){const q=Math.pow(2,-ee),K=Math.floor(R.image.width*q),Ee=Math.floor(R.image.height*q),Pe=V!==null?V.x:0,Me=V!==null?V.y:0;Y.setTexture2D(R,0),C.copyTexSubImage2D(C.TEXTURE_2D,ee,0,0,Pe,Me,K,Ee),E.unbindTexture()},this.copyTextureToTexture=function(R,V,ee=null,q=null,K=0,Ee=0){let Pe,Me,Ie,Ne,Ve,We,Ue,ot,Ft;const Lt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(ee!==null)Pe=ee.max.x-ee.min.x,Me=ee.max.y-ee.min.y,Ie=ee.isBox3?ee.max.z-ee.min.z:1,Ne=ee.min.x,Ve=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const Ot=Math.pow(2,-K);Pe=Math.floor(Lt.width*Ot),Me=Math.floor(Lt.height*Ot),R.isDataArrayTexture?Ie=Lt.depth:R.isData3DTexture?Ie=Math.floor(Lt.depth*Ot):Ie=1,Ne=0,Ve=0,We=0}q!==null?(Ue=q.x,ot=q.y,Ft=q.z):(Ue=0,ot=0,Ft=0);const lt=ue.convert(V.format),un=ue.convert(V.type);let Ae;V.isData3DTexture?(Y.setTexture3D(V,0),Ae=C.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Y.setTexture2DArray(V,0),Ae=C.TEXTURE_2D_ARRAY):(Y.setTexture2D(V,0),Ae=C.TEXTURE_2D),E.activeTexture(C.TEXTURE0),E.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,V.flipY),E.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),E.pixelStorei(C.UNPACK_ALIGNMENT,V.unpackAlignment);const Gn=E.getParameter(C.UNPACK_ROW_LENGTH),Qe=E.getParameter(C.UNPACK_IMAGE_HEIGHT),ai=E.getParameter(C.UNPACK_SKIP_PIXELS),Oi=E.getParameter(C.UNPACK_SKIP_ROWS),Nr=E.getParameter(C.UNPACK_SKIP_IMAGES);E.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),E.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),E.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),E.pixelStorei(C.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(C.UNPACK_SKIP_IMAGES,We);const ca=R.isDataArrayTexture||R.isData3DTexture,ut=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const Ot=z.get(R),Ur=z.get(V),dt=z.get(Ot.__renderTarget),Fr=z.get(Ur.__renderTarget);E.bindFramebuffer(C.READ_FRAMEBUFFER,dt.__webglFramebuffer),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let fa=0;fa<Ie;fa++)ca&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,z.get(R).__webglTexture,K,We+fa),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,z.get(V).__webglTexture,Ee,Ft+fa)),C.blitFramebuffer(Ne,Ve,Pe,Me,Ue,ot,Pe,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);E.bindFramebuffer(C.READ_FRAMEBUFFER,null),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||z.has(R)){const Ot=z.get(R),Ur=z.get(V);E.bindFramebuffer(C.READ_FRAMEBUFFER,X),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,F);for(let dt=0;dt<Ie;dt++)ca?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ot.__webglTexture,K,We+dt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ot.__webglTexture,K),ut?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ur.__webglTexture,Ee,Ft+dt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ur.__webglTexture,Ee),K!==0?C.blitFramebuffer(Ne,Ve,Pe,Me,Ue,ot,Pe,Me,C.COLOR_BUFFER_BIT,C.NEAREST):ut?C.copyTexSubImage3D(Ae,Ee,Ue,ot,Ft+dt,Ne,Ve,Pe,Me):C.copyTexSubImage2D(Ae,Ee,Ue,ot,Ne,Ve,Pe,Me);E.bindFramebuffer(C.READ_FRAMEBUFFER,null),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ut?R.isDataTexture||R.isData3DTexture?C.texSubImage3D(Ae,Ee,Ue,ot,Ft,Pe,Me,Ie,lt,un,Lt.data):V.isCompressedArrayTexture?C.compressedTexSubImage3D(Ae,Ee,Ue,ot,Ft,Pe,Me,Ie,lt,Lt.data):C.texSubImage3D(Ae,Ee,Ue,ot,Ft,Pe,Me,Ie,lt,un,Lt):R.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ee,Ue,ot,Pe,Me,lt,un,Lt.data):R.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ee,Ue,ot,Lt.width,Lt.height,lt,Lt.data):C.texSubImage2D(C.TEXTURE_2D,Ee,Ue,ot,Pe,Me,lt,un,Lt);E.pixelStorei(C.UNPACK_ROW_LENGTH,Gn),E.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qe),E.pixelStorei(C.UNPACK_SKIP_PIXELS,ai),E.pixelStorei(C.UNPACK_SKIP_ROWS,Oi),E.pixelStorei(C.UNPACK_SKIP_IMAGES,Nr),Ee===0&&V.generateMipmaps&&C.generateMipmap(Ae),E.unbindTexture()},this.initRenderTarget=function(R){z.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){Z=0,B=0,k=null,E.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}const zp=8,ID=`
#define MAX_COLORS ${zp}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  for (int j = 0; j < 5; j++) {
    if (j >= uIterations - 1) break;
    vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
    q += (rr - q) * 0.15;
  }

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  col *= uIntensity;

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  vec3 rgb = (uTransparent > 0) ? col * a : col;
  gl_FragColor = vec4(rgb, a);
}
`,ND=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function UD(t){const e=t.replace("#","").trim(),n=e.length===3?[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16)]:[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)];return new Q(n[0]/255,n[1]/255,n[2]/255)}function FD({className:t,style:e,rotation:n=90,speed:i=.2,colors:r=[],transparent:s=!0,autoRotate:a=0,scale:o=1,frequency:l=1,warpStrength:u=1,mouseInfluence:c=1,parallax:d=.5,noise:f=.15,iterations:p=1,intensity:g=1.5,bandWidth:_=6}){const m=O.useRef(null),h=O.useRef(null),v=O.useRef(null),y=O.useRef(null),S=O.useRef(null),M=O.useRef(n),T=O.useRef(a),w=O.useRef(new je(0,0)),x=O.useRef(new je(0,0));return O.useEffect(()=>{const b=m.current,P=new c1,L=new y0(-1,1,1,-1,0,1),N=new Co(2,2),H=Array.from({length:zp},()=>new Q(0,0,0)),X=new Fi({vertexShader:ND,fragmentShader:ID,uniforms:{uCanvas:{value:new je(1,1)},uTime:{value:0},uSpeed:{value:i},uRot:{value:new je(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:s?1:0},uScale:{value:o},uFrequency:{value:l},uWarpStrength:{value:u},uPointer:{value:new je(0,0)},uMouseInfluence:{value:c},uParallax:{value:d},uNoise:{value:f},uIterations:{value:p},uIntensity:{value:g},uBandWidth:{value:_}},premultipliedAlpha:!0,transparent:!0});h.current=X,P.add(new Ui(N,X));const F=new R1({antialias:!1,powerPreference:"high-performance",alpha:!0});v.current=F,F.outputColorSpace=wn,F.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),F.setClearColor(0,s?0:1),F.domElement.style.cssText="width:100%;height:100%;display:block;",b.appendChild(F.domElement);const Z=new v1,B=()=>{const ne=b.clientWidth||1,ie=b.clientHeight||1;F.setSize(ne,ie,!1),X.uniforms.uCanvas.value.set(ne,ie)};B();const k=new ResizeObserver(B);k.observe(b),S.current=k;const $=()=>{const ne=Z.getDelta();X.uniforms.uTime.value=Z.elapsedTime;const be=(M.current%360+T.current*Z.elapsedTime)*Math.PI/180;X.uniforms.uRot.value.set(Math.cos(be),Math.sin(be));const me=x.current,Ce=w.current;me.lerp(Ce,Math.min(1,ne*8)),X.uniforms.uPointer.value.copy(me),F.render(P,L),y.current=requestAnimationFrame($)};y.current=requestAnimationFrame($);const W=ne=>{const ie=b.getBoundingClientRect();w.current.set((ne.clientX-ie.left)/(ie.width||1)*2-1,-((ne.clientY-ie.top)/(ie.height||1)*2-1))};return window.addEventListener("pointermove",W,{passive:!0}),()=>{var ne;y.current!==null&&cancelAnimationFrame(y.current),(ne=S.current)==null||ne.disconnect(),window.removeEventListener("pointermove",W),N.dispose(),X.dispose(),F.dispose(),F.forceContextLoss(),F.domElement.parentElement===b&&b.removeChild(F.domElement)}},[]),O.useEffect(()=>{const b=h.current,P=v.current;if(!b)return;M.current=n,T.current=a,b.uniforms.uSpeed.value=i,b.uniforms.uScale.value=o,b.uniforms.uFrequency.value=l,b.uniforms.uWarpStrength.value=u,b.uniforms.uMouseInfluence.value=c,b.uniforms.uParallax.value=d,b.uniforms.uNoise.value=f,b.uniforms.uIterations.value=p,b.uniforms.uIntensity.value=g,b.uniforms.uBandWidth.value=_;const L=(r||[]).filter(Boolean).slice(0,zp).map(UD);b.uniforms.uColors.value.forEach((N,H)=>{H<L.length?N.copy(L[H]):N.set(0,0,0)}),b.uniforms.uColorCount.value=L.length,b.uniforms.uTransparent.value=s?1:0,P==null||P.setClearColor(0,s?0:1)},[n,a,i,o,l,u,c,d,f,p,g,_,r,s]),D.jsx("div",{ref:m,className:t,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",...e}})}const li=80,OD=38,kD=[1,2,3];function $u({topColor:t,bottomColor:e}){const n=O.useRef(null),i=O.useRef(null);return O.useEffect(()=>{const r=n.current,s=i.current;if(!r||!s)return;let a=window.innerWidth;s.width=a*window.devicePixelRatio,s.height=li*window.devicePixelRatio,s.style.width=a+"px",s.style.height=li+"px";const o=s.getContext("2d");o.scale(window.devicePixelRatio,window.devicePixelRatio);let l=0,u=window.scrollY,c=1,d=0;function f(){const h=window.scrollY-u;h!==0&&(c=h>0?1:-1),d+=Math.abs(h),u=window.scrollY}window.addEventListener("scroll",f,{passive:!0});function p(){a=window.innerWidth,s.width=a*window.devicePixelRatio,s.height=li*window.devicePixelRatio,s.style.width=a+"px",s.style.height=li+"px",o.scale(window.devicePixelRatio,window.devicePixelRatio)}window.addEventListener("resize",p);const g=performance.now();let _;function m(){const v=r.getBoundingClientRect().top,y=v-li/2;if(s.style.top=y+"px",v>-li&&v<window.innerHeight+li){s.style.visibility="visible",d>0&&(l=Math.min(l+d*.4,OD),d=0),l*=.91,Math.abs(l)<.15&&(l=0);const M=(performance.now()-g)/1e3,T=li/2;o.clearRect(0,0,a,li),o.fillStyle=t,o.fillRect(0,0,a,li),o.beginPath(),o.moveTo(0,T);for(let w=0;w<=a;w+=2){const x=w/a;let b=0;kD.forEach((P,L)=>{const N=Math.sin(P*Math.PI*x),H=Math.pow(.45,L),X=1.8+P*1.2,F=Math.cos(X*M)*H;b+=N*F}),o.lineTo(w,T-l*b*c)}o.lineTo(a,li),o.lineTo(0,li),o.closePath(),o.fillStyle=e,o.fill()}else s.style.visibility="hidden",l*=.91,d=0;_=requestAnimationFrame(m)}return m(),()=>{cancelAnimationFrame(_),window.removeEventListener("scroll",f),window.removeEventListener("resize",p)}},[t,e]),D.jsxs(D.Fragment,{children:[D.jsx("div",{ref:n,style:{position:"relative",height:0,pointerEvents:"none"}}),D.jsx("canvas",{ref:i,style:{position:"fixed",left:0,zIndex:50,pointerEvents:"none",display:"block",visibility:"hidden"}})]})}function Mv(){const t=document.getElementById("work");return t?(t.scrollIntoView({behavior:"smooth",block:"start"}),window.history.replaceState(null,"","#work"),!0):!1}function BD(){const t=rr(),e=AS(),{openForm:n}=GS(),i=r=>{if(r.preventDefault(),t.pathname==="/"||t.pathname===""){Mv();return}e("/"),requestAnimationFrame(()=>{requestAnimationFrame(()=>Mv())})};return D.jsxs("header",{className:"top-nav","aria-label":"VelvetY main navigation",children:[D.jsxs(na,{className:"brand",to:"/","aria-label":"VelvetY home",children:[D.jsx("span",{className:"brand-mark","aria-hidden":"true"}),D.jsx("span",{children:"VelvetY"})]}),D.jsxs("nav",{className:"nav-links","aria-label":"Primary navigation",children:[D.jsx("a",{href:"#services",children:"Services"}),D.jsx("a",{href:"#work",onClick:i,children:"Work"}),D.jsx(na,{to:"/about",children:"About"}),D.jsx("button",{type:"button",className:"nav-cta",onClick:n,children:"Start a project"})]})]})}class ui{constructor(e,n,i){Or(this,"x");Or(this,"y");Or(this,"z");this.x=e,this.y=n,this.z=i}dot2(e,n){return this.x*e+this.y*n}}class zD{constructor(e=0){Or(this,"grad3");Or(this,"p");Or(this,"perm");Or(this,"gradP");this.grad3=[new ui(1,1,0),new ui(-1,1,0),new ui(1,-1,0),new ui(-1,-1,0),new ui(1,0,1),new ui(-1,0,1),new ui(1,0,-1),new ui(-1,0,-1),new ui(0,1,1),new ui(0,-1,1),new ui(0,1,-1),new ui(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(e)}seed(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(let n=0;n<256;n++){const i=n&1?this.p[n]^e&255:this.p[n]^e>>8&255;this.perm[n]=this.perm[n+256]=i,this.gradP[n]=this.gradP[n+256]=this.grad3[i%12]}}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,n,i){return(1-i)*e+i*n}perlin2(e,n){let i=Math.floor(e),r=Math.floor(n);e-=i,n-=r,i&=255,r&=255;const s=this.gradP[i+this.perm[r]].dot2(e,n),a=this.gradP[i+this.perm[r+1]].dot2(e,n-1),o=this.gradP[i+1+this.perm[r]].dot2(e-1,n),l=this.gradP[i+1+this.perm[r+1]].dot2(e-1,n-1),u=this.fade(e);return this.lerp(this.lerp(s,o,u),this.lerp(a,l,u),this.fade(n))}}function VD(){const t=O.useRef(null),e=O.useRef(null);return O.useEffect(()=>{const n=e.current,i=t.current;if(!n||!i)return;const r=n.getContext("2d"),s=new zD(Math.random()),a={lineColor:"rgba(244,241,232,.18)",waveSpeedX:.018,waveSpeedY:.008,waveAmpX:34,waveAmpY:18,xGap:13,yGap:36,friction:.925,tension:.006,maxCursorMove:92};let o={width:0,height:0,left:0,top:0},l=[];const u={x:-10,y:0,lx:0,ly:0,sx:0,sy:0,v:0,vs:0,a:0,set:!1};let c=0;function d(){o=i.getBoundingClientRect();const M=Math.min(window.devicePixelRatio||1,window.innerWidth<=760?1.15:1.5);n.width=Math.max(1,Math.floor(o.width*M)),n.height=Math.max(1,Math.floor(o.height*M)),r.setTransform(M,0,0,M,0,0)}function f(){const{width:M,height:T}=o;l=[];const w=M+200,x=T+30,b=Math.ceil(w/a.xGap),P=Math.ceil(x/a.yGap),L=(M-a.xGap*b)/2,N=(T-a.yGap*P)/2;for(let H=0;H<=b;H++){const X=[];for(let F=0;F<=P;F++)X.push({x:L+a.xGap*H,y:N+a.yGap*F,wave:{x:0,y:0},cursor:{x:0,y:0,vx:0,vy:0}});l.push(X)}}function p(M){for(const T of l)for(const w of T){const x=s.perlin2((w.x+M*a.waveSpeedX)*.002,(w.y+M*a.waveSpeedY)*.0015)*12;w.wave.x=Math.cos(x)*a.waveAmpX,w.wave.y=Math.sin(x)*a.waveAmpY;const b=w.x-u.sx,P=w.y-u.sy,L=Math.hypot(b,P),N=Math.max(175,u.vs);if(L<N){const H=1-L/N,X=Math.cos(L*.001)*H;w.cursor.vx+=Math.cos(u.a)*X*N*u.vs*65e-5,w.cursor.vy+=Math.sin(u.a)*X*N*u.vs*65e-5}w.cursor.vx+=(0-w.cursor.x)*a.tension,w.cursor.vy+=(0-w.cursor.y)*a.tension,w.cursor.vx*=a.friction,w.cursor.vy*=a.friction,w.cursor.x+=w.cursor.vx*2,w.cursor.y+=w.cursor.vy*2,w.cursor.x=Math.min(a.maxCursorMove,Math.max(-92,w.cursor.x)),w.cursor.y=Math.min(a.maxCursorMove,Math.max(-92,w.cursor.y))}}function g(M,T=!0){const w=M.x+M.wave.x+(T?M.cursor.x:0),x=M.y+M.wave.y+(T?M.cursor.y:0);return{x:Math.round(w*10)/10,y:Math.round(x*10)/10}}function _(){const{width:M,height:T}=o;r.clearRect(0,0,M,T),r.beginPath(),r.strokeStyle=a.lineColor,r.lineWidth=1;for(const w of l){let x=g(w[0],!1);r.moveTo(x.x,x.y),w.forEach((b,P)=>{const L=P===w.length-1;x=g(b,!L);const N=g(w[P+1]||w[w.length-1],!L);r.lineTo(x.x,x.y),L&&r.moveTo(N.x,N.y)})}r.stroke()}function m(M){u.sx+=(u.x-u.sx)*.1,u.sy+=(u.y-u.sy)*.1;const T=u.x-u.lx,w=u.y-u.ly,x=Math.hypot(T,w);u.v=x,u.vs+=(x-u.vs)*.1,u.vs=Math.min(100,u.vs),u.lx=u.x,u.ly=u.y,u.a=Math.atan2(w,T),i.style.setProperty("--x",`${u.sx}px`),i.style.setProperty("--y",`${u.sy}px`),p(M),_(),c=requestAnimationFrame(m)}function h(M,T){const w=o;u.x=M-w.left,u.y=T-w.top,u.set||(u.sx=u.x,u.sy=u.y,u.lx=u.x,u.ly=u.y,u.set=!0)}function v(){d(),f()}function y(M){h(M.clientX,M.clientY)}function S(M){const T=M.touches[0];T&&h(T.clientX,T.clientY)}return d(),f(),c=requestAnimationFrame(m),window.addEventListener("resize",v),window.addEventListener("mousemove",y),window.addEventListener("touchmove",S,{passive:!0}),()=>{window.removeEventListener("resize",v),window.removeEventListener("mousemove",y),window.removeEventListener("touchmove",S),cancelAnimationFrame(c)}},[]),D.jsx("div",{className:"waves-root","aria-hidden":"true",children:D.jsx("div",{ref:t,className:"waves-inner",children:D.jsx("canvas",{ref:e,className:"waves-canvas"})})})}function HD(){const t=O.useRef(null);return O.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d",{alpha:!0}),i=(C,ve,ye)=>Math.max(ve,Math.min(ye,C)),r=(C,ve)=>C+Math.random()*(ve-C),s=C=>(C=i(C,0,1),1-Math.pow(1-C,3)),a=C=>(C=i(C,0,1),C<.5?4*C*C*C:1-Math.pow(-2*C+2,3)/2),o=C=>{const ve=Math.sin(C*127.1+311.7)*43758.5453123;return ve-Math.floor(ve)},l=matchMedia("(max-width: 760px)").matches,u=matchMedia("(prefers-reduced-motion: reduce)").matches;let c=1,d=1,f=1,p=0,g=0,_=260,m=0,h=performance.now();const v={baseSpin:.18,mouseSpin:.36,inertia:.9,outerGravity:1.05,innerFluid:1.05,implodeStrength:1.55,implodePoint:.18,expandStrength:.9,explodeStrength:1.55,explodePoint:.28,vanishPoint:.44,vanishSpeed:1.35,centerText:"",textSize:.72,textAlpha:.82,textGlow:.72,textExplode:.82},y={active:!1,x:0,y:0,tx:0,ty:0,px:-9999,py:-9999,vx:0,vy:0,outer:0,inner:0,pulse:0,last:0},S={x:-.22,y:-.62,z:-.08,vx:.003,vy:.005,vz:.001},M={value:0,target:0,progress:0,implode:0,expand:0,explode:0,vanish:0,flash:0},T=[],w=[],x=[];function b(C,ve,ye,A,E,I){let z=Math.cos(A),Y=Math.sin(A),se=ve*z-ye*Y,oe=ve*Y+ye*z;ve=se,ye=oe,z=Math.cos(E),Y=Math.sin(E);let G=C*z+ye*Y;return oe=-C*Y+ye*z,C=G,ye=oe,z=Math.cos(I),Y=Math.sin(I),G=C*z-ve*Y,se=C*Y+ve*z,{x:G,y:se,z:ye}}function P(){f=Math.min(window.devicePixelRatio||1,l?1.15:1.55),c=Math.max(1,innerWidth),d=Math.max(1,innerHeight),e.width=Math.floor(c*f),e.height=Math.floor(d*f),e.style.width=c+"px",e.style.height=d+"px",n.setTransform(f,0,0,f,0,0),p=c*.5,g=d*.5,_=Math.min(c,d)*(l?.34:.36)}function L(){T.length=w.length=x.length=0;const C=l?1550:3900,ve=l?290:680;for(let A=0;A<C;A++){const E=Math.random();let I=Math.PI*2*E;const z=r(-.88,.88),Y=Math.acos(z),se=Math.floor(r(0,6)),oe=se*1.047+o(A)*.65;I+=Math.sin(Y*4.2+oe)*.33;const G=Math.sin(I*2.8+Y*5.4+oe)*.5+.5;if(o(A*3.3+se*17.7)>.83&&G<.62||Math.abs(z)<.18&&G<.33)continue;const J=r(.89,1.04)+Math.sin(I*5+Y*3)*.018,ae=Math.sin(Y)*Math.cos(I)*J,xe=Math.sin(Y)*Math.sin(I)*J,he=Math.cos(Y)*J,de=Math.pow(1-Math.abs(z),.55);T.push({x:ae,y:xe,z:he,stream:se,phase:r(0,Math.PI*2),twinkle:r(.55,1),size:Math.random()<.92?r(.5,1.15):r(1.15,1.95),alpha:r(.52,1)*de})}for(let A=0;A<ve;A++){const E=r(0,Math.PI*2),I=Math.acos(r(-.8,.8)),z=Math.pow(r(.18,.82),1.8);z<.24&&Math.random()<.7||w.push({x:Math.sin(I)*Math.cos(E)*z,y:Math.sin(I)*Math.sin(E)*z,z:Math.cos(I)*z,phase:r(0,Math.PI*2),size:r(.42,1),alpha:r(.16,.38)})}const ye=l?8:14;for(let A=0;A<ye;A++){const E=[],I=r(0,Math.PI*2),z=r(Math.PI*.55,Math.PI*1.55),Y=r(-1.2,1.2),se=r(-1.1,1.1),oe=r(-.55,.55),G=r(.78,1.08);for(let J=0;J<110;J++){const ae=J/109;if(Math.sin(ae*Math.PI*r(2,5.5)+A)*.5+.5<.22||ae>.44&&ae<.55&&A%3===0){E.push(null);continue}const he=I+z*ae;E.push(b(Math.cos(he)*G,Math.sin(he)*G,Math.sin(he*1.7+A)*.07,Y,se,oe))}x.push({points:E,phase:r(0,Math.PI*2),alpha:r(.24,.5),size:r(.38,.76)})}}function N(C,ve,ye,A,E){const I=b(C.x,C.y,C.z,ve,ye,A),z=1.55/(1.55-I.z*.34);return{x:p+I.x*_*E*z,y:g+I.y*_*E*z,z:I.z,p:z}}function H(C,ve,ye,A){A<=.006||ye<=0||(n.globalAlpha=A,n.beginPath(),n.arc(C,ve,ye,0,Math.PI*2),n.fill())}function X(){const C=i(M.value,0,1),ve=i(v.explodePoint,.2,.9),ye=i(Math.min(v.implodePoint,ve-.08),.08,.62),A=Math.max(.09,ye*.72),E=Math.max(ye+.12,ve-.04),I=s(C/A),z=1-a((C-A)/Math.max(.001,E-A)),Y=s((C-ye)/Math.max(.001,ve-ye)),se=s((C-ve)/Math.max(.001,1-ve)),oe=i(Math.max(v.vanishPoint,ve+.03),ve+.03,.99),G=s((C-oe)/Math.max(.012,(1-oe)/Math.max(.25,v.vanishSpeed)));M.progress=C,M.implode=C<=A?I:Math.max(0,z),M.expand=Y*(1-se*.15),M.explode=se,M.vanish=G,M.flash+=((se>.04&&G<.94?se*(1-G):0)-M.flash)*.12}function F(C,ve,ye,A){if(M.progress<=.002)return C;const E=Math.hypot(C.x,C.y,C.z)||1,I=C.x/E,z=C.y/E,Y=C.z/E,se=o((ve.phase||0)*53.7+(("stream"in ve?ve.stream:0)||0)*17.1+(A==="dust"?9.5:0)),oe=A==="dust"?1.22:A==="arc"?.7:1.05,G=A==="dust"?.76:A==="arc"?.42:.6,J=A==="dust"?1.18:A==="arc"?.58:.92;let ae=Math.max(.08,1-M.implode*v.implodeStrength*oe)+M.expand*v.expandStrength*G;M.explode>.001&&(ae+=M.explode*v.explodeStrength*J*(.55+se*.9));const xe=Math.sin(ye*5.2+(ve.phase||0)*4.7+E*3)*M.explode,he=Math.cos(ye*3.4+(ve.phase||0)*2.9)*M.explode*(.1+se*.16);return{x:C.x*ae+(-z*xe+Y*he)*.34,y:C.y*ae+(I*xe-Y*he)*.34,z:C.z*ae+(I*he+z*xe)*.24}}function Z(C,ve,ye,A,E){if(!y.active||y.outer<.01&&y.inner<.01)return C;const I=_*A,z=y.px-p,Y=y.py-g,se=Math.hypot(z,Y)||1,oe=z/se,G=Y/se,J=C.x-p,ae=C.y-g,xe=Math.hypot(J,ae)||1,he=J/xe,de=ae/xe;let Re=C.x,De=C.y;if(E==="shell"&&y.outer>.01){const ge=i((he*oe+de*G-.32)/.68,0,1),U=1-i(Math.hypot(C.x-y.px,C.y-y.py)/(I*.88),0,1),ce=i((xe/I-.36)/.7,0,1),j=Math.pow(i(y.outer*v.outerGravity*Math.max(ge,U*.92)*ce*(.72+o((ve.phase||0)*41.7)*.92),0,1),1.05);if(j>.01){const ue=Math.sin(ye*3.6+(ve.phase||0)*2.7)*I*.035,_e=y.px+oe*I*.1,re=y.py+G*I*.1;Re+=(_e-Re)*j*.8*v.outerGravity+-G*ue*j,De+=(re-De)*j*.8*v.outerGravity+oe*ue*j}}if(y.inner>.01){const ge=C.x-y.px,U=C.y-y.py,ce=Math.hypot(ge,U)||1,j=ge/ce,ue=U/ce,_e=I*(E==="dust"?.58:.42),re=1-i(ce/_e,0,1),we=Math.pow(i(y.inner*v.innerFluid*re*(.62+o((ve.phase||0)*61.3)*.78),0,1),.72);if(we>.01){const Te=Math.sin(ye*6.1+(ve.phase||0)*5.3+xe*.015),rt=I*(E==="dust"?.3:.22)*v.innerFluid;Re+=j*rt*we+-ue*Te*I*.095*we,De+=ue*rt*we+j*Te*I*.095*we}}return{x:Re,y:De,z:C.z,p:C.p}}function B(C,ve,ye){const A=String(v.centerText||"").trim();if(!A)return;const E=i(M.vanish,0,.98),I=i(v.textAlpha,0,1)*ye*(1-E);if(I<=.01)return;const z=1-M.implode*v.implodeStrength*.16,Y=1+M.expand*v.expandStrength*.1,se=1+M.explode*v.textExplode*.32,oe=Math.max(.18,z*Y*se),G=Math.max(22,_*.23*v.textSize*ve*oe),J=Math.sin(C*1.25)*1.8-_*M.implode*.03,ae=s(M.explode),xe=_*v.explodeStrength*v.textExplode*ae,he=_*M.implode*v.implodeStrength*.055;n.save(),n.globalCompositeOperation="screen",n.textAlign="center",n.textBaseline="middle",n.font=`950 ${G}px Inter, ui-sans-serif, system-ui, sans-serif`,n.lineJoin="round",n.shadowColor="rgba(255,255,255,.72)";const de=Array.from(A),Re=de.map(j=>Math.max(2,n.measureText(j).width)),De=G*.025,ge=Re.reduce((j,ue)=>j+ue,0)+De*Math.max(0,de.length-1);let U=-ge/2;for(let j=0;j<de.length;j++){const ue=de[j],_e=U+Re[j]/2;U+=Re[j]+De;const re=o((j+1)*91.17+A.length*13.9),we=-Math.PI*.5+(j-(de.length-1)/2)*.72+(re-.5)*1.05,Te=de.length<=1?0:j/(de.length-1)-.5,rt=Math.sin(C*(2.6+re*2.1)+re*9)*_*.018*ae,nt=p+_e*(1-M.implode*.34)+Math.cos(we)*xe*(.32+re*.85)+Te*xe*.42,An=g+J+Math.sin(we)*xe*(.3+re*.78)+rt-he,si=(re-.5)*1.55*ae+Te*.28*ae,iu=I*(1-ae*.18)*(1-E*.42);n.save(),n.translate(nt,An),n.rotate(si);const ru=Math.max(G,Re[j]),ws=n.createLinearGradient(-ru*.55,-G*.45,ru*.55,G*.55);ws.addColorStop(0,"rgba(255,255,255,.98)"),ws.addColorStop(.55,"rgba(248,246,238,.76)"),ws.addColorStop(1,"rgba(255,255,255,.95)"),n.shadowBlur=18*v.textGlow*(1+ae*.7),n.globalAlpha=iu*.2,n.lineWidth=Math.max(1.2,G*.045),n.strokeStyle="rgba(248,246,238,.88)",n.strokeText(ue,0,0),n.globalAlpha=iu,n.shadowBlur=9*v.textGlow*(1+ae*.55),n.fillStyle=ws,n.fillText(ue,0,0),n.restore()}if(Math.floor(performance.now()/520)%2===0&&M.explode<.05&&M.vanish<.05){const j=p+ge/2+G*.13;n.globalAlpha=I*.78,n.shadowBlur=8*v.textGlow,n.strokeStyle="rgba(248,246,238,.82)",n.lineWidth=Math.max(1.2,G*.028),n.beginPath(),n.moveTo(j,g+J-G*.35),n.lineTo(j,g+J+G*.35),n.stroke()}n.restore()}function k(C){const ve=C??performance.now(),ye=Math.min(50,ve-h);h=ve,y.x+=(y.tx-y.x)*.095,y.y+=(y.ty-y.y)*.095,y.vx*=.88,y.vy*=.88,M.value+=(M.target-M.value)*.065,X();const A=u?0:v.baseSpin,E=y.active?i(Math.hypot(y.vx,y.vy)*v.mouseSpin,0,1.05):0,I=ye*.001;S.vx+=(-A*.03+y.vy*v.mouseSpin*.2)*I,S.vy+=(A*.05+y.vx*v.mouseSpin*.26)*I,S.vz+=(A*.01+(y.vx-y.vy)*v.mouseSpin*.05)*I,S.vx*=v.inertia,S.vy*=v.inertia,S.vz*=v.inertia,S.x+=S.vx*(1+E*.22),S.y+=S.vy*(1+E*.28),S.z+=S.vz*(1+E*.15);const z=Math.hypot(y.px-p,y.py-g),Y=_*(1+M.value*.04),se=y.active?i((z-Y*.72)/(Y*.58),0,1)*(1-i((z-Y*1.78)/(Y*.5),0,1)):0,oe=y.active?1-i(z/(Y*.82),0,1):0;y.outer+=(se-y.outer)*.14,y.inner+=(oe-y.inner)*.18,y.pulse+=(y.outer+y.inner-y.pulse)*.1,n.clearRect(0,0,c,d);const G=u?0:ve*.001,J=Math.max(.22,1+M.value*.01-M.implode*v.implodeStrength*.19+M.expand*v.expandStrength*.05),ae=S.x+y.y*.085+Math.sin(G*.34)*.045,xe=S.y+y.x*.105,he=S.z+Math.sin(G*.22)*.038,de=M.progress<.02?1:1-i(M.vanish,0,.96);n.save(),n.globalCompositeOperation="source-over";const Re=Math.max(8,_*(.5-M.implode*.2+M.explode*.24)),De=n.createRadialGradient(p,g,0,p,g,Re);De.addColorStop(0,"rgba(0,0,0,.32)"),De.addColorStop(.55,"rgba(0,0,0,.19)"),De.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=De,n.globalAlpha=.75,n.beginPath(),n.arc(p,g,Re,0,Math.PI*2),n.fill(),n.globalAlpha=1,B(G,J,de),n.fillStyle="#fffdf6",n.shadowColor="rgba(255,255,255,.45)",n.shadowBlur=0;for(const ge of x)for(let U=0;U<ge.points.length;U++){const ce=ge.points[U];if(!ce)continue;const j=F({x:ce.x,y:ce.y,z:ce.z+Math.sin(G*.42+ge.phase+U*.035)*.018},{phase:ge.phase+U*.013},G,"arc"),ue=N(j,ae,xe,he,J),_e=i((ue.z+1.08)/2.16,0,1);H(ue.x,ue.y,ge.size*ue.p,Math.min(1,ge.alpha*1.28*(.32+_e*.8)*(.72+Math.sin(G*2+U*.8)*.12)*de))}for(const ge of w){const U=Math.sin(G*.65+ge.phase)*.018,ce=F({x:ge.x*(1+U),y:ge.y,z:ge.z},ge,G,"dust"),j=Z(N(ce,ae*.96,xe*1.08,he,J),ge,G,J,"dust"),ue=i((j.z+1)/2,0,1),_e=.7+Math.sin(G*2.1+ge.phase)*.18;H(j.x,j.y,ge.size*j.p,Math.min(1,ge.alpha*1.32*_e*(.28+ue*.62)*de))}for(const ge of T){const U=Math.sin(G*(.55+(ge.stream||0)*.015)+ge.phase+ge.y*3)*.02,ce=Math.cos(G*.38+ge.phase+ge.x*2)*.012,j=F({x:ge.x+ge.y*ce,y:ge.y+U,z:ge.z-ge.x*ce},ge,G,"shell"),ue=Z(N(j,ae,xe,he,J),ge,G,J,"shell"),_e=i((ue.z+1.1)/2.2,0,1),re=Math.hypot(ue.x-p,ue.y-g)/(_*J),we=i((re-.48)/.46,0,1),Te=.76+Math.sin(G*(1.4+(ge.twinkle||1))+ge.phase*3)*.18,rt=1.18+M.explode*v.explodeStrength*1.15,nt=ge.alpha*1.55*Te*(.23+_e*.8)*(.46+we*.88)*rt*de,An=ge.size*ue.p*(_e>.63?1.08:.8)*(1+M.explode*v.explodeStrength*.52);H(ue.x,ue.y,An,M.progress<.02?Math.min(Math.max(nt,.105),.96):Math.min(nt,.96))}n.shadowBlur=7,n.shadowColor="rgba(255,255,255,.55)";for(let ge=0;ge<T.length;ge+=83){const U=T[ge],ce=Z(N(F(U,U,G,"shell"),ae,xe,he,J),U,G,J,"shell"),j=i((ce.z+1.1)/2.2,0,1);j<.56||H(ce.x,ce.y,1.15*ce.p,M.progress<.02?Math.max(.48*j*de,.11):.4*j*de)}n.shadowBlur=0,y.active&&y.pulse>.02&&(n.save(),n.globalCompositeOperation="screen",n.strokeStyle="rgba(248,246,238,.42)",n.fillStyle="#f8f6ee",n.globalAlpha=.08+y.pulse*.14,n.beginPath(),n.arc(y.px,y.py,_*(.05+y.pulse*.055),0,Math.PI*2),n.stroke(),H(y.px,y.py,1.6+y.pulse*2.2,.2+y.pulse*.36),n.restore()),M.flash>.02&&(n.save(),n.globalCompositeOperation="screen",n.strokeStyle="rgba(248,246,238,.28)",n.lineWidth=1,n.globalAlpha=M.flash*.34,n.beginPath(),n.arc(p,g,_*(.76+M.explode*v.explodeStrength*.55),0,Math.PI*2),n.stroke(),n.globalAlpha=M.flash*.13,n.beginPath(),n.arc(p,g,_*(.45+M.explode*v.explodeStrength*.36),0,Math.PI*2),n.stroke(),n.restore()),n.restore(),m=requestAnimationFrame(k)}let $=!0;const W=C=>new Promise(ve=>setTimeout(ve,C));async function ne(C,ve={min:58,max:185}){for(const ye of Array.from(C)){if(!$)return;v.centerText+=ye,await W(r(ve.min,ve.max))}}async function ie(C={min:32,max:96}){for(;v.centerText.length&&$;)v.centerText=Array.from(v.centerText).slice(0,-1).join(""),await W(r(C.min,C.max))}async function be(){for(await W(520);$;)v.centerText="",await ne("Hello...",{min:70,max:210}),await W(760),await ie({min:34,max:90}),await W(260),await ne("Welcome to",{min:52,max:165}),await W(760),await ie({min:30,max:82}),await W(240),await ne("VelvetY",{min:78,max:220}),await W(1800),await ie({min:30,max:82}),await W(300)}const me={virtualP:0,unlocked:!1,touchY:null},Ce=.62,te=.62,le=.82,fe=.16;function Oe(){const C=document.querySelector(".intro-scroll");return C?Math.max(1,C.scrollHeight-innerHeight):Math.max(1,document.documentElement.scrollHeight-innerHeight)}function ke(){const C=Oe();e.classList.toggle("pass-through",scrollY>C-2)}function Fe(C){C=i(C,0,1),M.target=C,document.documentElement.style.setProperty("--p",C>.995?"1":C.toFixed(4));const ve=C<te-.001?0:1;document.documentElement.style.setProperty("--white-guide-opacity",ve.toFixed(3));const A=Array.from(document.querySelectorAll(".piano-key")).filter(I=>getComputedStyle(I).display!=="none"),E=Math.max(1,A.length);A.forEach((I,z)=>{const Y=E<=1?0:(le-te)/(E-1),se=te+z*Y,oe=a((C-se)/fe),G=Math.max(1e-4,1-oe),J=C>=te-.001&&oe<.985;I.style.transform=`scaleY(${G})`,I.style.opacity=oe>.985?"0":"1",I.style.borderRightColor=J?"rgba(255,255,255,.10)":"rgba(255,255,255,0)",I.style.boxShadow=J?"0 22px 70px rgba(0,0,0,.58)":"none"})}function pt(){const C=Oe(),ve=i(scrollY/C,0,1);if(scrollY<=1&&!me.unlocked){Fe(me.virtualP),ke();return}if(scrollY<=1&&me.unlocked&&me.virtualP<Ce){me.unlocked=!1,Fe(me.virtualP),ke();return}const ye=Ce+ve*(1-Ce);Fe(ye),ke()}function He(C,ve){const ye=scrollY<=1,A=C<0;if(ye&&(!me.unlocked||A&&me.virtualP>0)){ve&&ve.cancelable&&ve.preventDefault();const E=Oe();return me.virtualP=i(me.virtualP+C/(E*.78),0,Ce),me.unlocked=me.virtualP>=Ce-8e-4,Fe(me.virtualP),!0}return!ye&&A&&scrollY<4&&(me.virtualP=Ce),!1}function it(C){const ve=(C.clientX/innerWidth-.5)*2,ye=-(C.clientY/innerHeight-.5)*2,A=performance.now(),E=Math.max(12,A-(y.last||A));y.active&&(y.vx+=i((ve-y.tx)/E*1e3,-1.6,1.6),y.vy+=i((ye-y.ty)/E*1e3,-1.6,1.6)),y.px=C.clientX,y.py=C.clientY,y.active=!0,y.last=A,y.tx=ve,y.ty=ye}function Ze(){y.active=!1}function Ye(C){He(C.deltaY,C)||(e.classList.contains("pass-through")&&(C.cancelable&&C.preventDefault(),window.scrollBy(0,C.deltaY)),requestAnimationFrame(pt))}function St(C){var ve;me.touchY=((ve=C.touches[0])==null?void 0:ve.clientY)??null}function Pt(C){const ve=C.touches[0];if(!ve||me.touchY===null)return;const ye=me.touchY-ve.clientY;me.touchY=ve.clientY,!He(ye,C)&&e.classList.contains("pass-through")&&(C.cancelable&&C.preventDefault(),window.scrollBy(0,ye))}function Ut(C){const ve={ArrowDown:80,PageDown:360," ":360,ArrowUp:-80,PageUp:-360,Home:-9999};C.key in ve&&(C.key==="Home"&&(me.virtualP=0),He(ve[C.key],C))}function Gt(){P()}function mt(){pt()}function Mt(){document.hidden?cancelAnimationFrame(m):(h=performance.now(),m=requestAnimationFrame(k))}return P(),L(),pt(),ke(),m=requestAnimationFrame(k),be(),addEventListener("resize",Gt,{passive:!0}),addEventListener("scroll",mt,{passive:!0}),addEventListener("wheel",Ye,{passive:!1}),addEventListener("touchstart",St,{passive:!0}),addEventListener("touchmove",Pt,{passive:!1}),addEventListener("keydown",Ut,{passive:!1}),addEventListener("pointermove",it,{passive:!0}),addEventListener("pointerleave",Ze,{passive:!0}),document.addEventListener("visibilitychange",Mt),()=>{$=!1,cancelAnimationFrame(m),removeEventListener("resize",Gt),removeEventListener("scroll",mt),removeEventListener("wheel",Ye),removeEventListener("touchstart",St),removeEventListener("touchmove",Pt),removeEventListener("keydown",Ut),removeEventListener("pointermove",it),removeEventListener("pointerleave",Ze),document.removeEventListener("visibilitychange",Mt),document.documentElement.style.removeProperty("--p"),document.documentElement.style.removeProperty("--white-guide-opacity"),e.classList.remove("pass-through")}},[]),D.jsxs(D.Fragment,{children:[D.jsx(VD,{}),D.jsx("canvas",{ref:t,className:"orb-canvas","aria-label":"Animated VelvetY orbital particle field"}),D.jsx("section",{className:"intro-scroll","aria-label":"VelvetY animated intro",children:D.jsxs("div",{className:"site-shell",children:[D.jsx("div",{className:"white-guide","aria-hidden":"true"}),D.jsx(BD,{}),D.jsx("main",{className:"hero","aria-label":"VelvetY homepage hero"}),D.jsxs("div",{className:"piano-curtain","aria-hidden":"true",children:[D.jsx("span",{className:"piano-key k1"}),D.jsx("span",{className:"piano-key k2"}),D.jsx("span",{className:"piano-key k3"}),D.jsx("span",{className:"piano-key k4"}),D.jsx("span",{className:"piano-key k5"}),D.jsx("span",{className:"piano-key k6"})]}),D.jsx("div",{className:"scroll-hint",children:"scroll to interact"})]})})]})}const Ev=[{id:1,label:"Prendiville Group",size:"small",img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",alt:"Website displayed on a tablet for a hospitality project"},{id:2,label:"Walyalup Fremantle Arts Centre",size:"large",img:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1500&q=82",alt:"Outdoor creative posters and cultural venue imagery"},{id:3,label:"Luxwin",size:"small",img:"https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=82",alt:"Crystal glass abstract product brand visual"},{id:4,label:"RTRFM 92.1",size:"medium",img:"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=82",alt:"Audio mixing console and digital radio interface"},{id:5,label:"Revo Fitness",size:"medium",img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=82",alt:"Fitness studio interior for gym website project"},{id:6,label:"Pacific Energy",size:"medium",img:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=82",alt:"Solar energy project image with blue sky"}];function GD(){return D.jsxs("section",{className:"selected-works",id:"work","aria-label":"Selected works",children:[D.jsxs("h2",{className:"works-title",children:["Selected works ",D.jsx("span",{className:"works-count",children:Ev.length})]}),D.jsx("div",{className:"works-grid",children:Ev.map(t=>D.jsxs("article",{className:`work-card ${t.size}`,children:[D.jsx("span",{className:"work-label",children:t.label}),D.jsx("img",{src:t.img,alt:t.alt,loading:"lazy"})]},t.id))})]})}function WD(t){const e=O.useRef(null),[n,i]=O.useState(!1);return O.useEffect(()=>{const r=e.current;if(!r)return;const s=new IntersectionObserver(([a])=>i(a.isIntersecting),{threshold:.35,rootMargin:"0px",...t});return s.observe(r),()=>s.disconnect()},[]),{ref:e,inView:n}}function dr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kl={duration:.5,overwrite:!1,delay:0},S0,on,yt,gi=1e8,ft=1/gi,Vp=Math.PI*2,XD=Vp/4,YD=0,C1=Math.sqrt,$D=Math.cos,jD=Math.sin,tn=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},Cr=function(e){return typeof e=="number"},M0=function(e){return typeof e>"u"},ir=function(e){return typeof e=="object"},kn=function(e){return e!==!1},E0=function(){return typeof window<"u"},ju=function(e){return Nt(e)||tn(e)},P1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,qD=/random\([^)]+\)/g,KD=/,\s*/g,wv=/(?:-?\.?\d|\.)+/gi,L1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,D1=/[+-]=-?[.\d]+/,ZD=/[^,'"\[\]\s]+/gi,QD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,Hi,Hp,w0,ti={},tf={},I1,N1=function(e){return(tf=_o(e,ti))&&Hn},T0=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Bl=function(e,n){return!n&&console.warn(e)},U1=function(e,n){return e&&(ti[e]=n)&&tf&&(tf[e]=n)||ti},zl=function(){return 0},JD={suppressEvents:!0,isStart:!0,kill:!1},xc={suppressEvents:!0,kill:!1},eI={suppressEvents:!0},b0={},ds=[],Gp={},F1,$n={},$d={},Tv=30,yc=[],R0="",A0=function(e){var n=e[0],i,r;if(ir(n)||Nt(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=yc.length;r--&&!yc[r].targetTest(n););i=yc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new rM(e[r],i)))||e.splice(r,1);return e},$s=function(e){return e._gsap||A0(_i(e))[0]._gsap},O1=function(e,n,i){return(i=e[n])&&Nt(i)?e[n]():M0(i)&&e.getAttribute&&e.getAttribute(n)||i},Bn=function(e,n){return(e=e.split(",")).forEach(n)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},no=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},tI=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},nf=function(){var e=ds.length,n=ds.slice(0),i,r;for(Gp={},ds.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},C0=function(e){return!!(e._initted||e._startAt||e.add)},k1=function(e,n,i,r){ds.length&&!on&&nf(),e.render(n,i,!!(on&&n<0&&C0(e))),ds.length&&!on&&nf()},B1=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(ZD).length<2?n:tn(e)?e.trim():e},z1=function(e){return e},ni=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},nI=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},_o=function(e,n){for(var i in n)e[i]=n[i];return e},bv=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ir(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},rf=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},hl=function(e){var n=e.parent||Tt,i=e.keyframes?nI(vn(e.keyframes)):ni;if(kn(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},iI=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},V1=function(e,n,i,r,s){var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},If=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},_s=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},js=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},rI=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Wp=function(e,n,i,r){return e._startAt&&(on?e._startAt.revert(xc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},sI=function t(e){return!e||e._ts&&t(e.parent)},Rv=function(e){return e._repeat?vo(e._tTime,e=e.duration()+e._rDelay)*e:0},vo=function(e,n){var i=Math.floor(e=Et(e/n));return e&&i===e?i-1:i},sf=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Nf=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Uf=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Et(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Nf(e),i._dirty||js(i,e)),e},H1=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=sf(e.rawTime(),n),(!n._dur||nu(0,n.totalDuration(),i)-n._tTime>ft)&&n.render(i,!0)),js(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ft}},Yi=function(e,n,i,r){return n.parent&&_s(n),n._start=Et((Cr(i)?i:i||e!==Tt?ci(e,i,n):e._time)+n._delay),n._end=Et(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),V1(e,n,"_first","_last",e._sort?"_start":0),Xp(n)||(e._recent=n),r||H1(e,n),e._ts<0&&Uf(e,e._tTime),e},G1=function(e,n){return(ti.ScrollTrigger||T0("scrollTrigger",n))&&ti.ScrollTrigger.create(n,e)},W1=function(e,n,i,r,s){if(L0(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&F1!==jn.frame)return ds.push(e),e._lazy=[s,r],1},aI=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Xp=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},oI=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&aI(e)&&!(!e._initted&&Xp(e))||(e._ts<0||e._dp._ts<0)&&!Xp(e))?0:1,o=e._rDelay,l=0,u,c,d;if(o&&e._repeat&&(l=nu(0,e._tDur,n),c=vo(l,o),e._yoyo&&c&1&&(a=1-a),c!==vo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||on||r||e._zTime===ft||!n&&e._zTime){if(!e._initted&&W1(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?ft:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;n<0&&Wp(e,n,i,!0),e._onUpdate&&!i&&Kn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Kn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&_s(e,1),!i&&!on&&(Kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},lI=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},xo=function(e,n,i,r){var s=e._repeat,a=Et(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Et(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Uf(e,e._tTime=e._tDur*o),e.parent&&Nf(e),i||js(e.parent,e),e},Av=function(e){return e instanceof Ln?js(e):xo(e,e._dur)},uI={_start:0,endTime:zl,totalDuration:zl},ci=function t(e,n,i){var r=e.labels,s=e._recent||uI,a=e.duration()>=gi?s.endTime(!1):e._dur,o,l,u;return tn(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),u=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),u&&i&&(l=l/100*(vn(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},pl=function(e,n,i){var r=Cr(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;a.immediateRender=kn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new Xt(n[0],a,n[s+1])},Es=function(e,n){return e||e===0?n(e):n},nu=function(e,n,i){return i<e?e:i>n?n:i},mn=function(e,n){return!tn(e)||!(n=QD.exec(e))?"":n[1]},cI=function(e,n,i){return Es(i,function(r){return nu(e,n,r)})},Yp=[].slice,X1=function(e,n){return e&&ir(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&ir(e[0]))&&!e.nodeType&&e!==Hi},fI=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return tn(r)&&!n||X1(r,1)?(s=i).push.apply(s,_i(r)):i.push(r)})||i},_i=function(e,n,i){return yt&&!n&&yt.selector?yt.selector(e):tn(e)&&!i&&(Hp||!yo())?Yp.call((n||w0).querySelectorAll(e),0):vn(e)?fI(e,i):X1(e)?Yp.call(e,0):e?[e]:[]},$p=function(e){return e=_i(e)[0]||Bl("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return _i(n,i.querySelectorAll?i:i===e?Bl("Invalid scope")||w0.createElement("div"):e)}},Y1=function(e){return e.sort(function(){return .5-Math.random()})},$1=function(e){if(Nt(e))return e;var n=ir(e)?e:{each:e},i=qs(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=n.axis,c=r,d=r;return tn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],d=r[1]),function(f,p,g){var _=(g||n).length,m=a[_],h,v,y,S,M,T,w,x,b;if(!m){if(b=n.grid==="auto"?0:(n.grid||[1,gi])[1],!b){for(w=-gi;w<(w=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=a[_]=[],h=l?Math.min(b,_)*c-.5:r%b,v=b===gi?0:l?_*d/b-.5:r/b|0,w=0,x=gi,T=0;T<_;T++)y=T%b-h,S=v-(T/b|0),m[T]=M=u?Math.abs(u==="y"?S:y):C1(y*y+S*S),M>w&&(w=M),M<x&&(x=M);r==="random"&&Y1(m),m.max=w-x,m.min=x,m.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(b>_?_-1:u?u==="y"?_/b:b:Math.max(b,_/b))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=mn(n.amount||n.each)||0,i=i&&_<0?wI(i):i}return _=(m[f]-m.min)/m.max||0,Et(m.b+(i?i(_):_)*m.v)+m.u}},jp=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Et(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(Cr(i)?0:mn(i))}},j1=function(e,n){var i=vn(e),r,s;return!i&&ir(e)&&(r=i=e.radius||gi,e.values?(e=_i(e.values),(s=!Cr(e[0]))&&(r*=r)):e=jp(e.increment)),Es(n,i?Nt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=gi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-o,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-o),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:a,s||c===a||Cr(a)?c:c+mn(a)}:jp(e))},q1=function(e,n,i,r){return Es(vn(e)?!n:i===!0?!!(i=0):!r,function(){return vn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},dI=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},hI=function(e,n){return function(i){return e(parseFloat(i))+(n||mn(i))}},pI=function(e,n,i){return Z1(e,n,0,1,i)},K1=function(e,n,i){return Es(i,function(r){return e[~~n(r)]})},mI=function t(e,n,i){var r=n-e;return vn(e)?K1(e,t(0,e.length),n):Es(i,function(s){return(r+(s-e)%r)%r+e})},gI=function t(e,n,i){var r=n-e,s=r*2;return vn(e)?K1(e,t(0,e.length-1),n):Es(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Vl=function(e){return e.replace(qD,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(KD);return q1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Z1=function(e,n,i,r,s){var a=n-e,o=r-i;return Es(s,function(l){return i+((l-e)/a*o||0)})},_I=function t(e,n,i,r){var s=isNaN(e+n)?0:function(p){return(1-p)*e+p*n};if(!s){var a=tn(e),o={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(vn(e)&&!vn(n)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(t(e[u-1],e[u]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=n}else r||(e=_o(vn(e)?[]:{},e));if(!c){for(l in n)P0.call(o,e,l,"get",n[l]);s=function(g){return N0(g,o)||(a?e.p:e)}}}return Es(i,s)},Cv=function(e,n,i){var r=e.labels,s=gi,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Kn=function(e,n,i){var r=e.vars,s=r[n],a=yt,o=e._ctx,l,u,c;if(s)return l=r[n+"Params"],u=r.callbackScope||e,i&&ds.length&&nf(),o&&(yt=o),c=l?s.apply(u,l):s.call(u),yt=a,c},el=function(e){return _s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Kn(e,"onInterrupt"),e},Ya,Q1=[],J1=function(e){if(e)if(e=!e.name&&e.default||e,E0()||e.headless){var n=e.name,i=Nt(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:zl,render:N0,add:P0,kill:NI,modifier:II,rawVars:0},a={targetTest:0,get:0,getSetter:I0,aliases:{},register:0};if(yo(),e!==r){if($n[n])return;ni(r,ni(rf(e,s),a)),_o(r.prototype,_o(s,rf(e,a))),$n[r.prop=n]=r,e.targetTest&&(yc.push(r),b0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}U1(n,r),e.register&&e.register(Hn,r,zn)}else Q1.push(e)},ct=255,tl={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},jd=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*ct+.5|0},eM=function(e,n,i){var r=e?Cr(e)?[e>>16,e>>8&ct,e&ct]:0:tl.black,s,a,o,l,u,c,d,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),tl[e])r=tl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(wv),!n)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=jd(l+1/3,s,a),r[1]=jd(l,s,a),r[2]=jd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(L1),i&&r.length<4&&(r[3]=1),r}else r=e.match(wv)||tl.transparent;r=r.map(Number)}return n&&!g&&(s=r[0]/ct,a=r[1]/ct,o=r[2]/ct,d=Math.max(s,a,o),f=Math.min(s,a,o),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},tM=function(e){var n=[],i=[],r=-1;return e.split(hs).forEach(function(s){var a=s.match(Xa)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},Pv=function(e,n,i){var r="",s=(e+r).match(hs),a=n?"hsla(":"rgba(",o=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=eM(f,n,1))&&a+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=tM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(hs,"1").split(Xa),d=u.length-1;o<d;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(hs),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},hs=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in tl)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),vI=/hsl[a]?\(/,nM=function(e){var n=e.join(" "),i;if(hs.lastIndex=0,hs.test(n))return i=vI.test(n),e[1]=Pv(e[1],i),e[0]=Pv(e[0],i,tM(e[1])),!0},Hl,jn=function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,u,c,d,f,p,g=function _(m){var h=t()-r,v=m===!0,y,S,M,T;if((h>e||h<0)&&(i+=h-n),r+=h,M=r-i,y=M-a,(y>0||v)&&(T=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,a+=y+(y>=s?4:s-y),S=1),v||(l=u(_)),S)for(p=0;p<o.length;p++)o[p](M,f,T,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){I1&&(!Hp&&E0()&&(Hi=Hp=window,w0=Hi.document||{},ti.gsap=Hn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(Hn.version),N1(tf||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Q1.forEach(J1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Hl=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Hl=0,u=zl},lagSmoothing:function(m,h){e=m||1/0,n=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,h,v){var y=h?function(S,M,T,w){m(S,M,T,w),d.remove(y)}:m;return d.remove(m),o[v?"unshift":"push"](y),yo(),y},remove:function(m,h){~(h=o.indexOf(m))&&o.splice(h,1)&&p>=h&&p--},_listeners:o},d}(),yo=function(){return!Hl&&jn.wake()},Ke={},xI=/^[\d.\-M][\d.\-,\s]/,yI=/["']/g,SI=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),n[r]=isNaN(u)?u.replace(yI,"").trim():+u,r=l.substr(o+1).trim();return n},MI=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},EI=function(e){var n=(e+"").split("("),i=Ke[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[SI(n[1])]:MI(e).split(",").map(B1)):Ke._CE&&xI.test(e)?Ke._CE("",e):i},wI=function(e){return function(n){return 1-e(1-n)}},qs=function(e,n){return e&&(Nt(e)?e:Ke[e]||EI(e))||n},ua=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return Bn(e,function(o){Ke[o]=ti[o]=s,Ke[a=o.toLowerCase()]=i;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},iM=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},qd=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/Vp*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*jD((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:iM(o);return s=Vp/s,l.config=function(u,c){return t(e,u,c)},l},Kd=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:iM(i);return r.config=function(s){return t(e,s)},r};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;ua(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;ua("Elastic",qd("in"),qd("out"),qd());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};ua("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ua("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});ua("Circ",function(t){return-(C1(1-t*t)-1)});ua("Sine",function(t){return t===1?1:-$D(t*XD)+1});ua("Back",Kd("in"),Kd("out"),Kd());Ke.SteppedEase=Ke.steps=ti.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-ft;return function(o){return((r*nu(0,a,o)|0)+s)*i}}};kl.ease=Ke["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return R0+=t+","+t+"Params,"});var rM=function(e,n){this.id=YD++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:O1,this.set=n?n.getSetter:I0},Gl=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,xo(this,+n.duration,1,1),this.data=n.data,yt&&(this._ctx=yt,yt.data.push(this)),Hl||jn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,xo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(yo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uf(this,i),!s._dp||s.parent||H1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),k1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Rv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Rv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?vo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?sf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ft?0:this._rts,this.totalTime(nu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Nf(this),rI(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Et(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(kn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=eI);var r=on;return on=i,C0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),on=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Av(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Av(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ci(this,i),kn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,kn(r)),this._dur||(this._zTime=-ft),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ft)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Nt(i)?i:z1,l=function(){var c=r.then;r.then=null,s&&s(),Nt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){el(this)},t}();ni(Gl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var Ln=function(t){A1(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=kn(i.sortChildren),Tt&&Yi(i.parent||Tt,dr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&G1(dr(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return pl(0,arguments,this),this},n.from=function(r,s,a){return pl(1,arguments,this),this},n.fromTo=function(r,s,a,o){return pl(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,hl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(r,s,ci(this,a),1),this},n.call=function(r,s,a){return Yi(this,Xt.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new Xt(r,a,ci(this,l)),this},n.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,hl(a).immediateRender=kn(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},n.staggerFromTo=function(r,s,a,o,l,u,c,d){return o.startAt=a,hl(o).immediateRender=kn(o.immediateRender),this.staggerTo(r,s,o,l,u,c,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Et(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,h,v,y,S,M,T,w;if(this!==Tt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,S=this._start,y=this._ts,h=!y,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=Et(c%m),c===l?(_=this._repeat,f=u):(M=Et(c/m),_=~~M,_&&_===M&&(f=u,_--),f>u&&(f=u)),M=vo(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),T&&_&1&&(f=u-f,w=1),_!==M&&!this._lock){var x=T&&M&1,b=x===(T&&_&1);if(_<M&&(x=!x),o=x?0:c%u?u:c,this._lock=1,this.render(o||(w?0:Et(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,b&&(this._lock=2,o=x?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=lI(this,Et(o),Et(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!M&&(Kn(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-ft);break}}p=g}else{p=this._last;for(var P=r<0?r:f;p;){if(g=p._prev,(p._act||P<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,s,a||on&&C0(p)),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=P?-ft:ft);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-ft)._zTime=f>=o?1:-1,this._ts))return this._start=S,Nf(this),this.render(r,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&_s(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Kn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(Cr(s)||(s=ci(this,s,r)),!(r instanceof Gl)){if(vn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(tn(r))return this.addLabel(r,s);if(Nt(r))r=Xt.delayedCall(0,r);else return this}return this!==r?Yi(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gi);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof Xt?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return tn(r)?this.removeLabel(r):Nt(r)?this.killTweensOf(r):(r.parent===this&&If(this,r),r===this._recent&&(this._recent=this._last),js(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(jn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=ci(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Xt.delayedCall(0,s||zl,a);return o.data="isPause",this._hasPause=1,Yi(this,o,ci(this,r))},n.removePause=function(r){var s=this._first;for(r=ci(this,r);s;)s._start===r&&s.data==="isPause"&&_s(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)ts!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=_i(r),l=this._first,u=Cr(s),c;l;)l instanceof Xt?tI(l._targets,o)&&(u?(!ts||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=ci(a,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,g=Xt.to(a,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==m&&xo(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,ni({startAt:{time:ci(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Cv(this,ci(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Cv(this,ci(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ft)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=Et(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return js(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),js(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=gi,u,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Yi(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Et(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;xo(a,a===Tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Tt._ts&&(k1(Tt,sf(r,Tt)),F1=jn.frame),jn.frame>=Tv){Tv+=Jn.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&Jn.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},e}(Gl);ni(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var TI=function(e,n,i,r,s,a,o){var l=new zn(this._pt,e,n,0,1,cM,null,s),u=0,c=0,d,f,p,g,_,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Vl(r)),a&&(v=[i,r],a(v,e,n),i=v[0],r=v[1]),f=i.match(Yd)||[];d=Yd.exec(r);)g=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?no(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Yd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(D1.test(r)||h)&&(l.e=0),this._pt=l,l},P0=function(e,n,i,r,s,a,o,l,u,c){Nt(r)&&(r=r(s||0,e,a));var d=e[n],f=i!=="get"?i:Nt(d)?u?e[n.indexOf("set")||!Nt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():d,p=Nt(d)?u?PI:lM:D0,g;if(tn(r)&&(~r.indexOf("random(")&&(r=Vl(r)),r.charAt(1)==="="&&(g=no(f,r)+(mn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||qp)return!isNaN(f*r)&&r!==""?(g=new zn(this._pt,e,n,+f||0,r-(f||0),typeof d=="boolean"?DI:uM,0,p),u&&(g.fp=u),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(n in e)&&T0(n,r),TI.call(this,e,n,f,r,p,l||Jn.stringFilter,u))},bI=function(e,n,i,r,s){if(Nt(e)&&(e=ml(e,s,n,i,r)),!ir(e)||e.style&&e.nodeType||vn(e)||P1(e))return tn(e)?ml(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=ml(e[o],s,n,i,r);return a},sM=function(e,n,i,r,s,a){var o,l,u,c;if($n[e]&&(o=new $n[e]).init(s,o.rawVars?n[e]:bI(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new zn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ya))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},ts,qp,L0=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,y=e._overwrite==="auto"&&!S0,S=e.timeline,M=r.easeReverse||d,T,w,x,b,P,L,N,H,X,F,Z,B,k;if(S&&(!f||!s)&&(s="none"),e._ease=qs(s,kl.ease),e._rEase=M&&(qs(M)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(H=m[0]?$s(m[0]).harness:0,B=H&&r[H.prop],T=rf(r,b0),_&&(_._zTime<0&&_.progress(1),n<0&&c&&o&&!p?_.render(-1,!0):_.revert(c&&g?xc:JD),_._lazy=0),a){if(_s(e._startAt=Xt.set(m,ni({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&kn(l),startAt:null,delay:0,onUpdate:u&&function(){return Kn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(on||!o&&!p)&&e._startAt.revert(xc),o&&g&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(c&&g&&!_){if(n&&(o=!1),x=ni({overwrite:!1,data:"isFromStart",lazy:o&&!_&&kn(l),immediateRender:o,stagger:0,parent:h},T),B&&(x[H.prop]=B),_s(e._startAt=Xt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(on?e._startAt.revert(xc):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,ft,ft);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&kn(l)||l&&!g,w=0;w<m.length;w++){if(P=m[w],N=P._gsap||A0(m)[w]._gsap,e._ptLookup[w]=F={},Gp[N.id]&&ds.length&&nf(),Z=v===m?w:v.indexOf(P),H&&(X=new H).init(P,B||T,e,Z,v)!==!1&&(e._pt=b=new zn(e._pt,P,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function($){F[$]=b}),X.priority&&(L=1)),!H||B)for(x in T)$n[x]&&(X=sM(x,T,e,Z,P,v))?X.priority&&(L=1):F[x]=b=P0.call(e,P,x,"get",T[x],Z,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(P,e._op[w]),y&&e._pt&&(ts=e,Tt.killTweensOf(P,F,e.globalTime(n)),k=!e.parent,ts=0),e._pt&&l&&(Gp[N.id]=1)}L&&fM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!k,f&&n<=0&&S.render(gi,!0,!0)},RI=function(e,n,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,d,f,p;if(!u)for(u=e._ptCache[n]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return qp=1,e.vars[n]="+=0",L0(e,o),qp=0,l?Bl(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=Bt(i)+mn(d.e)),d.b&&(d.b=c.s+mn(d.b))},AI=function(e,n){var i=e[0]?$s(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=_o({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},CI=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(vn(n))o=i[e]||(i[e]=[]),n.forEach(function(l,u){return o.push({t:u/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},ml=function(e,n,i,r,s){return Nt(e)?e.call(n,i,r,s):tn(e)&&~e.indexOf("random(")?Vl(e):e},aM=R0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",oM={};Bn(aM+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return oM[t]=1});var Xt=function(t){A1(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:hl(r))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=r.parent||Tt,v=(vn(i)||P1(i)?Cr(i[0]):"length"in r)?[i]:_i(i),y,S,M,T,w,x,b,P;if(o._targets=v.length?A0(v):Bl("GSAP target "+i+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||ju(u)||ju(c)){r=o.vars;var L=r.easeReverse||r.yoyoEase;if(y=o.timeline=new Ln({data:"nested",defaults:_||{},targets:h&&h.data==="nested"?h.vars.targets:v}),y.kill(),y.parent=y._dp=dr(o),y._start=0,f||ju(u)||ju(c)){if(T=v.length,b=f&&$1(f),ir(f))for(w in f)~aM.indexOf(w)&&(P||(P={}),P[w]=f[w]);for(S=0;S<T;S++)M=rf(r,oM),M.stagger=0,L&&(M.easeReverse=L),P&&_o(M,P),x=v[S],M.duration=+ml(u,dr(o),S,x,v),M.delay=(+ml(c,dr(o),S,x,v)||0)-o._delay,!f&&T===1&&M.delay&&(o._delay=c=M.delay,o._start+=c,M.delay=0),y.to(x,M,b?b(S,x,v):0),y._ease=Ke.none;y.duration()?u=c=0:o.timeline=0}else if(g){hl(ni(y.vars.defaults,{ease:"none"})),y._ease=qs(g.ease||r.ease||"none");var N=0,H,X,F;if(vn(g))g.forEach(function(Z){return y.to(v,Z,">")}),y.duration();else{M={};for(w in g)w==="ease"||w==="easeEach"||CI(w,g[w],M,g.easeEach);for(w in M)for(H=M[w].sort(function(Z,B){return Z.t-B.t}),N=0,S=0;S<H.length;S++)X=H[S],F={ease:X.e,duration:(X.t-(S?H[S-1].t:0))/100*u},F[w]=X.v,y.to(v,F,N),N+=F.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||o.duration(u=y.duration())}else o.timeline=0;return p===!0&&!S0&&(ts=dr(o),Tt.killTweensOf(v),ts=0),Yi(h,dr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!g&&o._start===Et(h._time)&&kn(d)&&sI(dr(o))&&h.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-c)||0)),m&&G1(dr(o),m),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-ft&&!c?l:r<ft?0:r,f,p,g,_,m,h,v,y;if(!u)oI(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,y=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,a);if(f=Et(d%_),d===l?(g=this._repeat,f=u):(m=Et(d/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),h=this._yoyo&&g&1,h&&(f=u-f),m=vo(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Et(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(W1(this,c?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var M=S?o:u-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(S?-1:1)/M:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(Kn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Wp(this,r,s,a),Kn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Wp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&_s(this,1),!s&&!(c&&!o)&&(d||o||h)&&(Kn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){Hl||jn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||L0(this,u),c=this._ease(u/this._dur),RI(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Uf(this,0),this.parent||V1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?el(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ts&&ts.vars.overwrite!==!0)._first||el(this),this.parent&&a!==this.timeline.totalDuration()&&xo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?_i(r):o,u=this._ptLookup,c=this._pt,d,f,p,g,_,m,h;if((!s||s==="all")&&iI(o,l))return s==="all"&&(this._pt=0),el(this);for(d=this._op=this._op||[],s!=="all"&&(tn(s)&&(_={},Bn(s,function(v){return _[v]=1}),s=_),s=AI(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){f=u[h],s==="all"?(d[h]=s,g=f,p={}):(p=d[h]=d[h]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&If(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&el(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return pl(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return pl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Tt.killTweensOf(r,s,a)},e}(Gl);ni(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(t){Xt[t]=function(){var e=new Ln,n=Yp.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var D0=function(e,n,i){return e[n]=i},lM=function(e,n,i){return e[n](i)},PI=function(e,n,i,r){return e[n](r.fp,i)},LI=function(e,n,i){return e.setAttribute(n,i)},I0=function(e,n){return Nt(e[n])?lM:M0(e[n])&&e.setAttribute?LI:D0},uM=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},DI=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},cM=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},N0=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},II=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},NI=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?If(this,n,"_pt"):n.dep||(i=1),n=r;return!i},UI=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},fM=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},zn=function(){function t(n,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||uM,this.d=l||this,this.set=u||D0,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=UI,this.m=i,this.mt=s,this.tween=r},t}();Bn(R0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return b0[t]=1});ti.TweenMax=ti.TweenLite=Xt;ti.TimelineLite=ti.TimelineMax=Ln;Tt=new Ln({sortChildren:!1,defaults:kl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=nM;var Ks=[],Sc={},FI=[],Lv=0,OI=0,Zd=function(e){return(Sc[e]||FI).map(function(n){return n()})},Kp=function(){var e=Date.now(),n=[];e-Lv>2&&(Zd("matchMediaInit"),Ks.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Hi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&n.push(i))}),Zd("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Lv=e,Zd("matchMedia"))},dM=function(){function t(n,i){this.selector=i&&$p(i),this.data=[],this._r=[],this.isReverted=!1,this.id=OI++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){Nt(i)&&(s=r,r=i,i=Nt);var a=this,o=function(){var u=yt,c=a.selector,d;return u&&u!==a&&u.data.push(a),s&&(a.selector=$p(s)),yt=a,d=r.apply(a,arguments),Nt(d)&&a._r.push(d),yt=u,a.selector=c,a.isReverted=!1,d};return a.last=o,i===Nt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=yt;yt=null,i(this),yt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Xt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Ln?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Xt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ks.length;a--;)Ks[a].id===this.id&&Ks.splice(a,1)},e.revert=function(i){this.kill(i||{})},t}(),kI=function(){function t(n){this.contexts=[],this.scope=n,yt&&yt.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){ir(i)||(i={matches:i});var a=new dM(0,s||this.scope),o=a.conditions={},l,u,c;yt&&!a.selector&&(a.selector=yt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Hi.matchMedia(i[u]),l&&(Ks.indexOf(a)<0&&Ks.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(Kp):l.addEventListener("change",Kp)));return c&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),af={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return J1(r)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,n){return Tt.getTweensOf(e,n)},getProperty:function(e,n,i,r){tn(e)&&(e=_i(e)[0]);var s=$s(e||{}).get,a=i?z1:B1;return i==="native"&&(i=""),e&&(n?a(($n[n]&&$n[n].get||s)(e,n,i,r)):function(o,l,u){return a(($n[o]&&$n[o].get||s)(e,o,l,u))})},quickSetter:function(e,n,i){if(e=_i(e),e.length>1){var r=e.map(function(c){return Hn.quickSetter(c,n,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var a=$n[n],o=$s(e),l=o.harness&&(o.harness.aliases||{})[n]||n,u=a?function(c){var d=new a;Ya._pt=0,d.init(e,i?c+i:c,Ya,0,[e]),d.render(1,d),Ya._pt&&N0(1,Ya)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,n,i){var r,s=Hn.to(e,ni((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(n,l,u,c)};return a.tween=s,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qs(e.ease,kl.ease)),bv(kl,e||{})},config:function(e){return bv(Jn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!$n[o]&&!ti[o]&&Bl(n+" effect requires "+o+" plugin.")}),$d[n]=function(o,l,u){return i(_i(o),ni(l||{},s),u)},a&&(Ln.prototype[n]=function(o,l,u){return this.add($d[n](o,ir(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){Ke[e]=qs(n)},parseEase:function(e,n){return arguments.length?qs(e,n):Ke},getById:function(e){return Tt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Ln(e),r,s;for(i.smoothChildTiming=kn(e.smoothChildTiming),Tt.remove(i),i._dp=0,i._time=i._tTime=Tt._time,r=Tt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Xt&&r.vars.onComplete===r._targets[0]))&&Yi(i,r,r._start-r._delay),r=s;return Yi(Tt,i,0),i},context:function(e,n){return e?new dM(e,n):yt},matchMedia:function(e){return new kI(e)},matchMediaRefresh:function(){return Ks.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||Kp()},addEventListener:function(e,n){var i=Sc[e]||(Sc[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Sc[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:mI,wrapYoyo:gI,distribute:$1,random:q1,snap:j1,normalize:pI,getUnit:mn,clamp:cI,splitColor:eM,toArray:_i,selector:$p,mapRange:Z1,pipe:dI,unitize:hI,interpolate:_I,shuffle:Y1},install:N1,effects:$d,ticker:jn,updateRoot:Ln.updateRoot,plugins:$n,globalTimeline:Tt,core:{PropTween:zn,globals:U1,Tween:Xt,Timeline:Ln,Animation:Gl,getCache:$s,_removeLinkedListItem:If,reverting:function(){return on},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return S0=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return af[t]=Xt[t]});jn.add(Ln.updateRoot);Ya=af.to({},{duration:0});var BI=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},zI=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=BI(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},Qd=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(tn(s)&&(l={},Bn(s,function(c){return l[c]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}zI(o,s)}}}},Hn=af.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)on?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Qd("roundProps",jp),Qd("modifiers"),Qd("snap",j1))||af;Xt.version=Ln.version=Hn.version="3.15.0";I1=1;E0()&&yo();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dv,ns,io,U0,Ws,Iv,F0,VI=function(){return typeof window<"u"},Pr={},Fs=180/Math.PI,ro=Math.PI/180,Ca=Math.atan2,Nv=1e8,O0=/([A-Z])/g,HI=/(left|right|width|margin|padding|x)/i,GI=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zp=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},WI=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},XI=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},YI=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},$I=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},hM=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},pM=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},jI=function(e,n,i){return e.style[n]=i},qI=function(e,n,i){return e.style.setProperty(n,i)},KI=function(e,n,i){return e._gsap[n]=i},ZI=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},QI=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},JI=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},bt="transform",Vn=bt+"Origin",eN=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=pr(r,o)}):this.tfm[e]=a.x?a[e]:pr(r,e),e===Vn&&(this.tfm.zOrigin=a.zOrigin);else return qi.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(bt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Vn,n,"")),e=bt}(s||n)&&this.props.push(e,n,s[e])},mM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tN=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(O0,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=F0(),(!s||!s.isStart)&&!i[bt]&&(mM(i),r.zOrigin&&i[Vn]&&(i[Vn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},gM=function(e,n){var i={target:e,props:[],revert:tN,save:eN};return e._gsap||Hn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},_M,Qp=function(e,n){var i=ns.createElementNS?ns.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ns.createElement(e);return i&&i.style?i:ns.createElement(e)},Zn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(O0,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,So(n)||n,1)||""},Uv="O,Moz,ms,Ms,Webkit".split(","),So=function(e,n,i){var r=n||Ws,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Uv[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Uv[a]:"")+e},Jp=function(){VI()&&window.document&&(Dv=window,ns=Dv.document,io=ns.documentElement,Ws=Qp("div")||{style:{}},Qp("div"),bt=So(bt),Vn=bt+"Origin",Ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_M=!!So("perspective"),F0=Hn.core.reverting,U0=1)},Fv=function(e){var n=e.ownerSVGElement,i=Qp("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),io.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),io.removeChild(i),s},Ov=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},vM=function(e){var n,i;try{n=e.getBBox()}catch{n=Fv(e),i=1}return n&&(n.width||n.height)||i||(n=Fv(e)),n&&!n.width&&!n.x&&!n.y?{x:+Ov(e,["x","cx","x1"])||0,y:+Ov(e,["y","cy","y1"])||0,width:0,height:0}:n},xM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vM(e))},vs=function(e,n){if(n){var i=e.style,r;n in Pr&&n!==Vn&&(n=bt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(O0,"-$1").toLowerCase())):i.removeAttribute(n)}},is=function(e,n,i,r,s,a){var o=new zn(e._pt,n,i,0,1,a?pM:hM);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},kv={deg:1,rad:1,turn:1},nN={grid:1,flex:1},xs=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Ws.style,l=HI.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",g,_,m,h;if(r===a||!s||kv[r]||kv[a])return s;if(a!=="px"&&!f&&(s=t(e,n,i,"px")),h=e.getCTM&&xM(e),(p||a==="%")&&(Pr[n]||~n.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],Bt(p?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(f?a:r),_=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ns||!_.appendChild)&&(_=ns.body),m=_._gsap,m&&p&&m.width&&l&&m.time===jn.time&&!m.uncache)return Bt(s/m.width*d);if(p&&(n==="height"||n==="width")){var v=e.style[n];e.style[n]=d+r,g=e[c],v?e.style[n]=v:vs(e,n)}else(p||a==="%")&&!nN[Zn(_,"display")]&&(o.position=Zn(e,"position")),_===e&&(o.position="static"),_.appendChild(Ws),g=Ws[c],_.removeChild(Ws),o.position="absolute";return l&&p&&(m=$s(_),m.time=jn.time,m.width=_[c]),Bt(f?g*s/d:g&&s?d/g*s:0)},pr=function(e,n,i,r){var s;return U0||Jp(),n in qi&&n!=="transform"&&(n=qi[n],~n.indexOf(",")&&(n=n.split(",")[0])),Pr[n]&&n!=="transform"?(s=Xl(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:lf(Zn(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=of[n]&&of[n](e,n,i)||Zn(e,n)||O1(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?xs(e,n,s,i)+i:s},iN=function(e,n,i,r){if(!i||i==="none"){var s=So(n,e,1),a=s&&Zn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=Zn(e,"borderTopColor"))}var o=new zn(this._pt,e.style,n,0,1,cM),l=0,u=0,c,d,f,p,g,_,m,h,v,y,S,M;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Zn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[n],e.style[n]=r,r=Zn(e,n)||r,_?e.style[n]=_:vs(e,n)),c=[i,r],nM(c),i=c[0],r=c[1],f=i.match(Xa)||[],M=r.match(Xa)||[],M.length){for(;d=Xa.exec(r);)m=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=no(p,m)+S),h=parseFloat(m),y=m.substr((h+"").length),l=Xa.lastIndex-y.length,y||(y=y||Jn.units[n]||S,l===r.length&&(r+=y,o.e+=y)),S!==y&&(p=xs(e,n,_,y)||0),o._pt={_next:o._pt,p:v||u===1?v:",",s:p,c:h-p,m:g&&g<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?pM:hM;return D1.test(r)&&(o.e=0),this._pt=o,o},Bv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rN=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Bv[i]||i,n[1]=Bv[r]||r,n.join(" ")},sN=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],Pr[o]&&(l=1,o=o==="transformOrigin"?Vn:bt),vs(i,o);l&&(vs(i,bt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Xl(i,1),a.uncache=1,mM(r)))}},of={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new zn(e._pt,n,i,0,0,sN);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Wl=[1,0,0,1,0,0],yM={},SM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zv=function(e){var n=Zn(e,bt);return SM(n)?Wl:n.substr(7).match(L1).map(Bt)},k0=function(e,n){var i=e._gsap||$s(e),r=e.style,s=zv(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wl:s):(s===Wl&&!e.offsetParent&&e!==io&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,io.appendChild(e)),s=zv(e),l?r.display=l:vs(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):io.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},em=function(e,n,i,r,s,a){var o=e._gsap,l=s||k0(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],v=l[5],y=n.split(" "),S=parseFloat(y[0])||0,M=parseFloat(y[1])||0,T,w,x,b;i?l!==Wl&&(w=p*m-g*_)&&(x=S*(m/w)+M*(-_/w)+(_*v-m*h)/w,b=S*(-g/w)+M*(p/w)-(p*v-g*h)/w,S=x,M=b):(T=vM(e),S=T.x+(~y[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(y[1]||y[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&o.smooth?(h=S-u,v=M-c,o.xOffset=d+(h*p+v*_)-h,o.yOffset=f+(h*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[Vn]="0px 0px",a&&(is(a,o,"xOrigin",u,S),is(a,o,"yOrigin",c,M),is(a,o,"xOffset",d,o.xOffset),is(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Xl=function(e,n){var i=e._gsap||new rM(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Zn(e,Vn)||"0",c,d,f,p,g,_,m,h,v,y,S,M,T,w,x,b,P,L,N,H,X,F,Z,B,k,$,W,ne,ie,be,me,Ce;return c=d=f=_=m=h=v=y=S=0,p=g=1,i.svg=!!(e.getCTM&&xM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),r.scale=r.rotate=r.translate="none"),w=k0(e,i.svg),i.svg&&(i.uncache?(k=e.getBBox(),u=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",B=""):B=!n&&e.getAttribute("data-svg-origin"),em(e,B||u,!!B||i.originIsAbsolute,i.smooth!==!1,w)),M=i.xOrigin||0,T=i.yOrigin||0,w!==Wl&&(L=w[0],N=w[1],H=w[2],X=w[3],c=F=w[4],d=Z=w[5],w.length===6?(p=Math.sqrt(L*L+N*N),g=Math.sqrt(X*X+H*H),_=L||N?Ca(N,L)*Fs:0,v=H||X?Ca(H,X)*Fs+_:0,v&&(g*=Math.abs(Math.cos(v*ro))),i.svg&&(c-=M-(M*L+T*H),d-=T-(M*N+T*X))):(Ce=w[6],be=w[7],W=w[8],ne=w[9],ie=w[10],me=w[11],c=w[12],d=w[13],f=w[14],x=Ca(Ce,ie),m=x*Fs,x&&(b=Math.cos(-x),P=Math.sin(-x),B=F*b+W*P,k=Z*b+ne*P,$=Ce*b+ie*P,W=F*-P+W*b,ne=Z*-P+ne*b,ie=Ce*-P+ie*b,me=be*-P+me*b,F=B,Z=k,Ce=$),x=Ca(-H,ie),h=x*Fs,x&&(b=Math.cos(-x),P=Math.sin(-x),B=L*b-W*P,k=N*b-ne*P,$=H*b-ie*P,me=X*P+me*b,L=B,N=k,H=$),x=Ca(N,L),_=x*Fs,x&&(b=Math.cos(x),P=Math.sin(x),B=L*b+N*P,k=F*b+Z*P,N=N*b-L*P,Z=Z*b-F*P,L=B,F=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=Bt(Math.sqrt(L*L+N*N+H*H)),g=Bt(Math.sqrt(Z*Z+Ce*Ce)),x=Ca(F,Z),v=Math.abs(x)>2e-4?x*Fs:0,S=me?1/(me<0?-me:me):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!SM(Zn(e,bt)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=c-((i.xPercent=c&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Bt(p),i.scaleY=Bt(g),i.rotation=Bt(_)+o,i.rotationX=Bt(m)+o,i.rotationY=Bt(h)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Vn]=lf(u)),i.xOffset=i.yOffset=0,i.force3D=Jn.force3D,i.renderTransform=i.svg?oN:_M?MM:aN,i.uncache=0,i},lf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jd=function(e,n,i){var r=mn(n);return Bt(parseFloat(n)+parseFloat(xs(e,"x",i+"px",r)))+r},aN=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,MM(e,n)},Ps="0deg",$o="0px",Ls=") ",MM=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,y=i.zOrigin,S="",M=h==="auto"&&e&&e!==1||h===!0;if(y&&(d!==Ps||c!==Ps)){var T=parseFloat(c)*ro,w=Math.sin(T),x=Math.cos(T),b;T=parseFloat(d)*ro,b=Math.cos(T),a=Jd(v,a,w*b*-y),o=Jd(v,o,-Math.sin(T)*-y),l=Jd(v,l,x*b*-y+y)}m!==$o&&(S+="perspective("+m+Ls),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(M||a!==$o||o!==$o||l!==$o)&&(S+=l!==$o||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ls),u!==Ps&&(S+="rotate("+u+Ls),c!==Ps&&(S+="rotateY("+c+Ls),d!==Ps&&(S+="rotateX("+d+Ls),(f!==Ps||p!==Ps)&&(S+="skew("+f+", "+p+Ls),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Ls),v.style[bt]=S||"translate(0, 0)"},oN=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,y=parseFloat(a),S=parseFloat(o),M,T,w,x,b;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ro,u*=ro,M=Math.cos(l)*d,T=Math.sin(l)*d,w=Math.sin(l-u)*-f,x=Math.cos(l-u)*f,u&&(c*=ro,b=Math.tan(u-c),b=Math.sqrt(1+b*b),w*=b,x*=b,c&&(b=Math.tan(c),b=Math.sqrt(1+b*b),M*=b,T*=b)),M=Bt(M),T=Bt(T),w=Bt(w),x=Bt(x)):(M=d,x=f,T=w=0),(y&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(y=xs(p,"x",a,"px"),S=xs(p,"y",o,"px")),(g||_||m||h)&&(y=Bt(y+g-(g*M+_*w)+m),S=Bt(S+_-(g*T+_*x)+h)),(r||s)&&(b=p.getBBox(),y=Bt(y+r/100*b.width),S=Bt(S+s/100*b.height)),b="matrix("+M+","+T+","+w+","+x+","+y+","+S+")",p.setAttribute("transform",b),v&&(p.style[bt]=b)},lN=function(e,n,i,r,s){var a=360,o=tn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Fs:1),u=l-r,c=r+u+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*Nv)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*Nv)%a-~~(u/a)*a)),e._pt=f=new zn(e._pt,n,i,r,u,WI),f.e=c,f.u="deg",e._props.push(i),f},Vv=function(e,n){for(var i in n)e[i]=n[i];return e},uN=function(e,n,i){var r=Vv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,d,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[bt]=n,o=Xl(i,1),vs(i,bt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[bt],a[bt]=n,o=Xl(i,1),a[bt]=u);for(l in Pr)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=mn(u),g=mn(c),d=p!==g?xs(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new zn(e._pt,o,l,d,f-d,Zp),e._pt.u=g||0,e._props.push(l));Vv(o,r)};Bn("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});of[e>1?"border"+t:t]=function(o,l,u,c,d){var f,p;if(arguments.length<4)return f=a.map(function(g){return pr(o,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,d)}});var EM={name:"css",register:Jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,d,f,p,g,_,m,h,v,y,S,M,T,w,x,b;U0||Jp(),this.styles=this.styles||gM(e),x=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(c=n[_],!($n[_]&&sM(_,n,i,r,e,s)))){if(p=typeof c,g=of[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Vl(c)),g)g(this,e,_,c,i)&&(w=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",hs.lastIndex=0,hs.test(u)||(m=mn(u),h=mn(c),h?m!==h&&(u=xs(e,_,u,h)+h):m&&(c+=m)),this.add(o,"setProperty",u,c,r,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],tn(u)&&~u.indexOf("random(")&&(u=Vl(u)),mn(u+"")||u==="auto"||(u+=Jn.units[_]||mn(pr(e,_))||""),(u+"").charAt(1)==="="&&(u=pr(e,_))):u=pr(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in qi&&(_==="autoAlpha"&&(f===1&&pr(e,"visibility")==="hidden"&&d&&(f=0),x.push("visibility",0,o.visibility),is(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=qi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Pr,y){if(this.styles.save(_),b=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Zn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=c,c=Zn(e,"perspective"),P?e.style.perspective=P:vs(e,"perspective")}d=parseFloat(c)}if(S||(M=e._gsap,M.renderTransform&&!n.parseTransform||Xl(e,n.parseTransform),T=n.smoothOrigin!==!1&&M.smooth,S=this._pt=new zn(this._pt,o,bt,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new zn(this._pt,M,"scaleY",M.scaleY,(v?no(M.scaleY,v+d):d)-M.scaleY||0,Zp),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Vn,0,o[Vn]),c=rN(c),M.svg?em(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==M.zOrigin&&is(this,M,"zOrigin",M.zOrigin,h),is(this,o,_,lf(u),lf(c)));continue}else if(_==="svgOrigin"){em(e,c,1,T,0,this);continue}else if(_ in yM){lN(this,M,_,f,v?no(f,v+c):c);continue}else if(_==="smoothOrigin"){is(this,M,"smooth",M.smooth,c);continue}else if(_==="force3D"){M[_]=c;continue}else if(_==="transform"){uN(this,c,e);continue}}else _ in o||(_=So(_)||_);if(y||(d||d===0)&&(f||f===0)&&!GI.test(c)&&_ in o)m=(u+"").substr((f+"").length),d||(d=0),h=mn(c)||(_ in Jn.units?Jn.units[_]:m),m!==h&&(f=xs(e,_,u,h)),this._pt=new zn(this._pt,y?M:o,_,f,(v?no(f,v+d):d)-f,!y&&(h==="px"||_==="zIndex")&&n.autoRound!==!1?$I:Zp),this._pt.u=h||0,y&&b!==c?(this._pt.b=u,this._pt.e=b,this._pt.r=YI):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=XI);else if(_ in o)iN.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){T0(_,c);continue}y||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,u||e[_])),a.push(_)}}w&&fM(this)},render:function(e,n){if(n.tween._time||!F0())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:pr,aliases:qi,getSetter:function(e,n,i){var r=qi[n];return r&&r.indexOf(",")<0&&(n=r),n in Pr&&n!==Vn&&(e._gsap.x||pr(e,"x"))?i&&Iv===i?n==="scale"?ZI:KI:(Iv=i||{})&&(n==="scale"?QI:JI):e.style&&!M0(e.style[n])?jI:~n.indexOf("-")?qI:I0(e,n)},core:{_removeProperty:vs,_getMatrix:k0}};Hn.utils.checkPrefix=So;Hn.core.getStyleSaver=gM;(function(t,e,n,i){var r=Bn(t+","+e+","+n,function(s){Pr[s]=1});Bn(e,function(s){Jn.units[s]="deg",yM[s]=1}),qi[r[13]]=t+","+e,Bn(i,function(s){var a=s.split(":");qi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Jn.units[t]="px"});Hn.registerPlugin(EM);var Mc=Hn.registerPlugin(EM)||Hn;Mc.core.Tween;const Hv=[.09,.09,.1,.11,.12,.13,.2,.24,.28,.32,.36,.4,.46,.52,.58,.66,.76,.92];function cN(t){if(t===Hv.length)return[...Hv];const e=.09,n=.92;return Array.from({length:t},(i,r)=>{const s=t<=1?0:r/(t-1),a=s*s*(3-2*s);return e+(n-e)*a})}function Gv(t,e,n){const r=e>=Math.floor(n*2/3)?.072:.048,s=e<Math.floor(n/3)?.022:.032;return Math.min(r,Math.max(s,t*.16))}function Wv(t,e){return t>=Math.floor(e*2/3)?"power1.inOut":"none"}function fN({slides:t,alt:e="VelvetY showcase",active:n=!0}){const i=O.useRef(null),[r,s]=O.useState(!1),[a,o]=O.useState(!1);return O.useEffect(()=>{const l=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>s(l.matches);return u(),l.addEventListener("change",u),()=>l.removeEventListener("change",u)},[]),O.useEffect(()=>{if(r||t.length===0)return;let l=!0;return Promise.all(t.map(u=>new Promise(c=>{const d=new Image;d.onload=()=>c(),d.onerror=()=>c(),d.src=u}))).then(()=>{l&&o(!0)}),()=>{l=!1,o(!1)}},[t,r]),O.useEffect(()=>{if(r||!a||!i.current||!n)return;const l=Array.from(i.current.querySelectorAll("[data-fastcut-slide]")),u=l.length;if(u===0)return;const c=cN(u);Mc.set(l,{opacity:0,zIndex:1}),Mc.set(l[0],{opacity:1,zIndex:2});const d=Mc.timeline({repeat:-1});let f=0;for(let h=1;h<u;h++){const v=c[h-1],y=Gv(v,h-1,u),S=Wv(h-1,u);f+=v;const M=f-y;d.to(l[h-1],{opacity:0,duration:y,ease:S,zIndex:1},M),d.to(l[h],{opacity:1,duration:y,ease:S,zIndex:2},M)}const p=c[u-1],g=Gv(p,u-1,u),_=Wv(u-1,u);f+=p;const m=f-g;return d.to(l[u-1],{opacity:0,duration:g,ease:_,zIndex:1},m),d.to(l[0],{opacity:1,duration:g,ease:_,zIndex:2},m),()=>{d.kill()}},[a,r,t,n]),t.length===0?null:r?D.jsx("img",{src:t[0],alt:e,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):D.jsx("div",{ref:i,style:{position:"absolute",inset:0,overflow:"hidden",background:"#111"},children:t.map((l,u)=>D.jsx("img",{"data-fastcut-slide":!0,src:l,alt:"",decoding:"sync",draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:u===0?1:0,zIndex:u===0?2:1,willChange:"opacity"}},l))})}function dN({badge:t,imageSrc:e,slides:n,imageAlt:i="VelvetY showreel",active:r=!0}){return D.jsx("div",{style:{position:"absolute",inset:"clamp(24px, 5vw, 48px)",containerType:"size",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",boxSizing:"border-box"},children:D.jsxs("div",{style:{width:"min(100cqw, calc(100cqh * 16 / 10))",maxHeight:"100cqh",aspectRatio:"16 / 10",position:"relative",borderRadius:18,overflow:"hidden",background:"#111",pointerEvents:"auto",filter:"drop-shadow(0 32px 64px rgba(0,0,0,.72))",flexShrink:0},children:[n&&n.length>0?D.jsx(fN,{slides:n,alt:i,active:r}):D.jsx("img",{src:e,alt:i,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),D.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,.08) 0%, rgba(0,0,0,.40) 100%)",pointerEvents:"none"}}),D.jsx("div",{style:{position:"absolute",top:14,left:14,background:"rgba(0,0,0,.58)",backdropFilter:"blur(8px)",color:"#fff",fontSize:11,letterSpacing:"0.06em",padding:"5px 12px",borderRadius:999,fontFamily:"SFMono-Regular, Consolas, monospace",textTransform:"uppercase",zIndex:1},children:t})]})})}const hN="/Velvety2/".replace(/\/$/,""),pN=t=>`${hN}/assets/gallery/${t}`,mN=["alice.webp","bnpl.webp","cloth.webp","david.webp","done.webp","expand.webp","game.webp","hand.webp","lake.webp","lexend.webp","mindful.webp","music.webp","plan.webp","real.webp","sarah.webp","sheep.webp","smart.webp","website.webp"].map(pN);function gN(){const{ref:t,inView:e}=WD();return D.jsx("section",{ref:t,style:{position:"relative",zIndex:3,height:"100vh",background:"transparent",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},"aria-label":"VelvetY showcase",children:D.jsxs("div",{style:{position:"relative",width:"clamp(360px, 92vw, 1380px)",height:"clamp(260px, 82vh, 800px)",borderRadius:28,overflow:"hidden",boxShadow:"0 0 0 9999px #000"},children:[D.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,.48) 100%)",pointerEvents:"none",zIndex:1}}),D.jsx("div",{style:{position:"absolute",inset:0,zIndex:2},children:D.jsx(dN,{badge:"#VELVETY",slides:mN,active:e})})]})})}const _N="/Velvety2/".replace(/\/$/,""),Xr=t=>`${_N}/assets/cylinder/${t}`,Xv=[Xr("amazon-landing.jpg"),Xr("buyerfolio.jpg"),Xr("green-apple.jpg"),Xr("huagen.png"),Xr("kindle.png"),Xr("micro-ingredients.png"),Xr("nutribites.png"),Xr("ridgeline-homes.png")];function vN(t,e,n){const i=e.width/e.height;if(t.colorSpace=wn,i>n){const r=n/i;t.repeat.set(r,1),t.offset.set((1-r)/2,0)}else{const r=i/n;t.repeat.set(1,r),t.offset.set(0,(1-r)/2)}}function xN(){const t=O.useRef(null),e=O.useRef(null);return O.useEffect(()=>{const n=t.current,i=e.current;if(!n)return;const r=new c1;r.fog=new g0(16119283,7,20);const s={width:window.innerWidth,height:window.innerHeight},a=new hi(35,s.width/s.height,.1,100);a.position.set(0,.25,8.8),r.add(a);const o=new R1({canvas:n,antialias:!0,alpha:!0});o.setSize(s.width,s.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.outputColorSpace=wn;const l=new Wa,u=new Wa;l.add(u),r.add(l);const c=new IC,d=Xv.length,f=4.35,p=2.88,g=1.88,_=p/g,m=p/f,h=[],v=[],y=-.08,S=.13,M=.0015;function T(W,ne,ie,be){const me=new Co(W,ne,36,6),Ce=me.attributes.position,te=me.attributes.uv;for(let le=0;le<Ce.count;le++){const fe=(te.getX(le)-.5)*be;Ce.setXYZ(le,Math.sin(fe)*ie,Ce.getY(le),ie-Math.cos(fe)*ie)}for(let le=0;le<te.count;le++)te.setX(le,1-te.getX(le));return me.computeVertexNormals(),me}const w=T(p,g,f,m);Xv.forEach((W,ne)=>{const ie=c.load(W,te=>{const le=te.image;le!=null&&le.width&&vN(te,le,_),te.anisotropy=o.capabilities.getMaxAnisotropy()});v.push(ie);const be=new v0({map:ie,side:Xi,transparent:!0,opacity:0,depthWrite:!0}),me=new Ui(w,be),Ce=ne/d*Math.PI*2;me.position.x=Math.sin(Ce)*f,me.position.z=Math.cos(Ce)*f,me.rotation.y=Ce+Math.PI,me.userData.baseAngle=Ce,me.userData.phase=Math.random()*Math.PI*2,me.userData.fadeStart=performance.now()+ne*80,u.add(me),h.push(me)}),r.add(new UC(16777215,2.25));const x={targetY:0,currentY:0,autoVelocity:M,scrollVelocity:0,dragVelocity:0,targetX:y,currentX:y,targetZ:S,currentZ:S,cameraX:0,cameraY:0,scrollDirection:1,lastScrollY:window.scrollY,isDragging:!1,lastPointerX:0,lastPointerY:0},b=(W,ne,ie)=>Math.max(ne,Math.min(ie,W));function P(){l.position.x=s.width<760?.25:1.75,l.position.y=s.width<760?.75:.25,a.position.z=s.width<760?10.7:8.8,a.updateProjectionMatrix()}P();function L(W){x.isDragging=!0,x.lastPointerX=W.clientX,x.lastPointerY=W.clientY,x.dragVelocity=0,i&&(i.style.opacity="0"),n.setPointerCapture(W.pointerId),n.style.cursor="grabbing"}function N(W){if(!x.isDragging)return;const ne=W.clientX-x.lastPointerX,ie=W.clientY-x.lastPointerY;x.lastPointerX=W.clientX,x.lastPointerY=W.clientY,x.targetY+=ne*.0068,x.targetX+=ie*.00125,x.targetZ+=ne*-42e-5,x.cameraX+=ne*-22e-5,x.cameraY+=ie*24e-5,x.dragVelocity=ne*82e-5,x.targetX=b(x.targetX,-.28,.22),x.targetZ=b(x.targetZ,-.095,.095),x.cameraX=b(x.cameraX,-.085,.085),x.cameraY=b(x.cameraY,-.075,.095)}function H(){x.isDragging=!1,x.autoVelocity=b(x.dragVelocity,-.035,.035),n.style.cursor="grab"}n.addEventListener("pointerdown",L),n.addEventListener("pointermove",N),n.addEventListener("pointerup",H),n.addEventListener("pointercancel",H);function X(){const W=window.scrollY-x.lastScrollY;x.lastScrollY=window.scrollY,Math.abs(W)>0&&(x.scrollDirection=W>0?1:-1,x.scrollVelocity+=b(W*9e-5,-.055,.055),x.targetY+=W*.0022)}window.addEventListener("scroll",X,{passive:!0}),window.addEventListener("wheel",W=>{x.scrollVelocity+=b(W.deltaY*35e-6,-.026,.026)},{passive:!0});function F(){s.width=window.innerWidth,s.height=window.innerHeight,a.aspect=s.width/s.height,a.updateProjectionMatrix(),o.setSize(s.width,s.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),P()}window.addEventListener("resize",F);const Z=new v1;let B,k=!0;function $(){if(!k)return;const W=Z.getElapsedTime(),ne=performance.now(),ie=.0014*x.scrollDirection,be=x.autoVelocity+x.scrollVelocity+ie;x.isDragging||(x.targetY+=be,x.autoVelocity*=.982,x.scrollVelocity*=.91,Math.abs(x.autoVelocity)<.0012&&(x.autoVelocity=.0012*x.scrollDirection)),x.currentY+=(x.targetY-x.currentY)*.09,x.currentX+=(x.targetX-x.currentX)*.06,x.currentZ+=(x.targetZ-x.currentZ)*.055,l.rotation.y=x.currentY,l.rotation.x=x.currentX,l.rotation.z=x.currentZ+Math.sin(W*.4)*.004,a.position.x+=(x.cameraX-a.position.x)*.045,a.position.y+=(.25+x.cameraY-a.position.y)*.045,a.lookAt(.25,.15,0),x.cameraX*=.93,x.cameraY*=.94,x.isDragging||(x.targetZ*=.96,x.targetX+=(y-x.targetX)*.012,x.targetZ+=(S-x.targetZ)*.012),h.forEach((me,Ce)=>{const te=me.material,le=Math.min(Math.max((ne-me.userData.fadeStart)/900,0),1),fe=me.userData.baseAngle+x.currentY,Oe=Math.cos(fe);me.visible=!0;const ke=D_.mapLinear(Oe,-1,1,.78,1.1);me.scale.setScalar(ke),te.opacity=le*D_.mapLinear(Oe,-1,1,.22,1),me.renderOrder=Math.round((1-Oe)*100),me.position.y=Math.sin(W*.55+me.userData.phase)*.025,me.rotation.z=Math.sin(W*.45+Ce)*.006}),o.render(r,a),B=requestAnimationFrame($)}return $(),i&&setTimeout(()=>{i.style.transition="opacity 0.8s ease",i.style.opacity="0"},2400),()=>{k=!1,cancelAnimationFrame(B),window.removeEventListener("resize",F),window.removeEventListener("scroll",X),n.removeEventListener("pointerdown",L),n.removeEventListener("pointermove",N),n.removeEventListener("pointerup",H),n.removeEventListener("pointercancel",H),o.dispose(),w.dispose(),h.forEach(W=>W.material.dispose()),v.forEach(W=>W.dispose())}},[]),D.jsxs("section",{style:{position:"relative",zIndex:4,height:"100vh",overflow:"hidden",fontFamily:"Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",color:"#171717"},"aria-label":"Digital brands that move",children:[D.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,background:"#f5f5f3"}}),D.jsx("canvas",{ref:t,style:{position:"absolute",top:0,left:0,zIndex:1,display:"block",cursor:"grab",touchAction:"none"}}),D.jsx("div",{style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"none",background:`
            linear-gradient(90deg, rgba(245,245,243,0.98) 0%, rgba(245,245,243,0.46) 24%, rgba(245,245,243,0) 54%),
            linear-gradient(0deg,  rgba(245,245,243,0.88) 0%, rgba(245,245,243,0)    36%),
            radial-gradient(circle at 78% 50%, rgba(245,245,243,0) 0%, rgba(245,245,243,0.15) 44%, rgba(245,245,243,0.76) 100%)
          `}}),D.jsxs("div",{style:{position:"absolute",left:"clamp(24px, 5vw, 76px)",bottom:"clamp(34px, 7vh, 86px)",width:"min(540px, 86vw)",zIndex:5,pointerEvents:"none"},children:[D.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,marginBottom:18,padding:"9px 14px",border:"1px solid rgba(23,23,23,0.12)",borderRadius:999,background:"rgba(255,255,255,0.42)",backdropFilter:"blur(12px)",fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(23,23,23,0.72)"},children:[D.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#101010",display:"inline-block"}}),"Scroll + Drag the Carousel"]}),D.jsxs("h2",{style:{margin:0,fontSize:"clamp(48px, 9vw, 124px)",lineHeight:.86,letterSpacing:"-0.075em",fontWeight:850,maxWidth:760,color:"#171717"},children:["Brands",D.jsx("br",{}),D.jsx("em",{style:{display:"block",fontFamily:'Georgia, "Times New Roman", serif',fontStyle:"italic",fontWeight:500,letterSpacing:"-0.08em"},children:"Redesign"})]}),D.jsx("p",{style:{margin:"22px 0 0",maxWidth:470,fontSize:15,lineHeight:1.65,color:"rgba(23,23,23,0.68)"},children:"We create websites, Shopify stores, UI/UX systems, logos, and packaging that help brands look sharper, feel stronger, and grow online."})]}),D.jsx("div",{ref:e,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:5,padding:"10px 14px",borderRadius:999,background:"rgba(16,16,16,0.86)",color:"#fff",fontSize:12,letterSpacing:"0.18em",textTransform:"uppercase",pointerEvents:"none",opacity:.92},children:"DRAG"})]})}function wM(t,e){for(let n=0;n<t;n++)e.call(this,n)}function La(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n}function nn(t=null,e=null,n=null){t==null?(t=0,e=1):t!=null&&e==null&&(e=t,t=0);const i=e-t;return n==null&&(n=r=>r),t+n(Math.random())*i}function eh(t){return nn()<=t}let Cn=64;const Yv={x:0,y:0,r:0,spreadX:0,spreadY:0,momentum:0,momentumX:0,lastSpawn:0,nextSpawn:0,parent:null,isNew:!0,killed:!1,shrink:0},yN={minR:10,maxR:40,maxDrops:900,rainChance:.3,rainLimit:3,dropletsRate:50,dropletsSize:[2,4],dropletsCleaningRadiusMultiplier:.43,raining:!0,globalTimeScale:1,trailRate:1,autoShrink:!0,spawnArea:[-.1,.95],trailScaleRange:[.2,.5],collisionRadius:.65,collisionRadiusIncrease:.01,dropFallMultiplier:1,collisionBoostMultiplier:.05,collisionBoost:1};function TM(t,e,n,i,r,s={}){this.width=t,this.height=e,this.scale=n,this.dropAlpha=i,this.dropColor=r,this.options=Object.assign({},yN,s),this.init()}TM.prototype={dropColor:null,dropAlpha:null,canvas:null,ctx:null,width:0,height:0,scale:0,dropletsPixelDensity:1,droplets:null,dropletsCtx:null,dropletsCounter:0,drops:null,dropsGfx:null,clearDropletsGfx:null,textureCleaningIterations:0,lastRender:null,options:null,init(){this.canvas=La(this.width,this.height),this.ctx=this.canvas.getContext("2d"),this.droplets=La(this.width*this.dropletsPixelDensity,this.height*this.dropletsPixelDensity),this.dropletsCtx=this.droplets.getContext("2d"),this.drops=[],this.dropsGfx=[],this.renderDropsGfx(),this.update()},get deltaR(){return this.options.maxR-this.options.minR},get area(){return this.width*this.height/this.scale},get areaMultiplier(){return Math.sqrt(this.area/(1024*768))},drawDroplet(t,e,n){this.drawDrop(this.dropletsCtx,Object.assign(Object.create(Yv),{x:t*this.dropletsPixelDensity,y:e*this.dropletsPixelDensity,r:n*this.dropletsPixelDensity}))},renderDropsGfx(){let t=La(Cn,Cn),e=t.getContext("2d");this.dropsGfx=Array.apply(null,Array(255)).map((i,r)=>{let s=La(Cn,Cn),a=s.getContext("2d");return e.clearRect(0,0,Cn,Cn),e.globalCompositeOperation="source-over",e.drawImage(this.dropColor,0,0,Cn,Cn),e.globalCompositeOperation="screen",e.fillStyle="rgba(0,0,"+r+",1)",e.fillRect(0,0,Cn,Cn),a.globalCompositeOperation="source-over",a.drawImage(this.dropAlpha,0,0,Cn,Cn),a.globalCompositeOperation="source-in",a.drawImage(t,0,0,Cn,Cn),s}),this.clearDropletsGfx=La(128,128);let n=this.clearDropletsGfx.getContext("2d");n.fillStyle="#000",n.beginPath(),n.arc(64,64,64,0,Math.PI*2),n.fill()},drawDrop(t,e){if(this.dropsGfx.length>0){let n=e.x,i=e.y,r=e.r,s=e.spreadX,a=e.spreadY,o=1,l=1.5,u=Math.max(0,Math.min(1,(r-this.options.minR)/this.deltaR*.9));u*=1/((e.spreadX+e.spreadY)*.5+1),t.globalAlpha=1,t.globalCompositeOperation="source-over",u=Math.floor(u*(this.dropsGfx.length-1)),t.drawImage(this.dropsGfx[u],(n-r*o*(s+1))*this.scale,(i-r*l*(a+1))*this.scale,r*2*o*(s+1)*this.scale,r*2*l*(a+1)*this.scale)}},clearDroplets(t,e,n=30){let i=this.dropletsCtx;i.globalCompositeOperation="destination-out",i.drawImage(this.clearDropletsGfx,(t-n)*this.dropletsPixelDensity*this.scale,(e-n)*this.dropletsPixelDensity*this.scale,n*2*this.dropletsPixelDensity*this.scale,n*2*this.dropletsPixelDensity*this.scale*1.5)},clearCanvas(){this.ctx.clearRect(0,0,this.width,this.height)},createDrop(t){return this.drops.length>=this.options.maxDrops*this.areaMultiplier?null:Object.assign(Object.create(Yv),t)},addDrop(t){return this.drops.length>=this.options.maxDrops*this.areaMultiplier||t==null?!1:(this.drops.push(t),!0)},updateRain(t){let e=[];if(this.options.raining){let n=this.options.rainLimit*t*this.areaMultiplier,i=0;for(;eh(this.options.rainChance*t*this.areaMultiplier)&&i<n;){i++;let r=nn(this.options.minR,this.options.maxR,a=>Math.pow(a,3)),s=this.createDrop({x:nn(this.width/this.scale),y:nn(this.height/this.scale*this.options.spawnArea[0],this.height/this.scale*this.options.spawnArea[1]),r,momentum:1+(r-this.options.minR)*.1+nn(2),spreadX:1.5,spreadY:1.5});s!=null&&e.push(s)}}return e},clearDrops(){this.drops.forEach(t=>{setTimeout(()=>{t.shrink=.1+nn(.5)},nn(1200))}),this.clearTexture()},clearTexture(){this.textureCleaningIterations=50},updateDroplets(t){this.textureCleaningIterations>0&&(this.textureCleaningIterations-=1*t,this.dropletsCtx.globalCompositeOperation="destination-out",this.dropletsCtx.fillStyle="rgba(0,0,0,"+.05*t+")",this.dropletsCtx.fillRect(0,0,this.width*this.dropletsPixelDensity,this.height*this.dropletsPixelDensity)),this.options.raining&&(this.dropletsCounter+=this.options.dropletsRate*t*this.areaMultiplier,wM(this.dropletsCounter,e=>{this.dropletsCounter--,this.drawDroplet(nn(this.width/this.scale),nn(this.height/this.scale),nn(...this.options.dropletsSize,n=>n*n))})),this.ctx.drawImage(this.droplets,0,0,this.width,this.height)},updateDrops(t){let e=[];this.updateDroplets(t);let n=this.updateRain(t);e=e.concat(n),this.drops.sort((i,r)=>{let s=i.y*(this.width/this.scale)+i.x,a=r.y*(this.width/this.scale)+r.x;return s>a?1:s==a?0:-1}),this.drops.forEach(function(i,r){if(!i.killed){if(eh((i.r-this.options.minR*this.options.dropFallMultiplier)*(.1/this.deltaR)*t)&&(i.momentum+=nn(i.r/this.options.maxR*4)),this.options.autoShrink&&i.r<=this.options.minR&&eh(.05*t)&&(i.shrink+=.01),i.r-=i.shrink*t,i.r<=0&&(i.killed=!0),this.options.raining&&(i.lastSpawn+=i.momentum*t*this.options.trailRate,i.lastSpawn>i.nextSpawn)){let o=this.createDrop({x:i.x+nn(-i.r,i.r)*.1,y:i.y-i.r*.01,r:i.r*nn(...this.options.trailScaleRange),spreadY:i.momentum*.1,parent:i});o!=null&&(e.push(o),i.r*=Math.pow(.97,t),i.lastSpawn=0,i.nextSpawn=nn(this.options.minR,this.options.maxR)-i.momentum*2*this.options.trailRate+(this.options.maxR-i.r))}i.spreadX*=Math.pow(.4,t),i.spreadY*=Math.pow(.7,t);let s=i.momentum>0;s&&!i.killed&&(i.y+=i.momentum*this.options.globalTimeScale,i.x+=i.momentumX*this.options.globalTimeScale,i.y>this.height/this.scale+i.r&&(i.killed=!0));let a=(s||i.isNew)&&!i.killed;i.isNew=!1,a&&this.drops.slice(r+1,r+70).forEach(o=>{if(i!=o&&i.r>o.r&&i.parent!=o&&o.parent!=i&&!o.killed){let u=o.x-i.x,c=o.y-i.y;var l=Math.sqrt(u*u+c*c);if(l<(i.r+o.r)*(this.options.collisionRadius+i.momentum*this.options.collisionRadiusIncrease*t)){let d=Math.PI,f=i.r,p=o.r,g=d*(f*f),_=d*(p*p),m=Math.sqrt((g+_*.8)/d);m>this.maxR&&(m=this.maxR),i.r=m,i.momentumX+=u*.1,i.spreadX=0,i.spreadY=0,o.killed=!0,i.momentum=Math.max(o.momentum,Math.min(40,i.momentum+m*this.options.collisionBoostMultiplier+this.options.collisionBoost))}}}),i.momentum-=Math.max(1,this.options.minR*.5-i.momentum)*.1*t,i.momentum<0&&(i.momentum=0),i.momentumX*=Math.pow(.7,t),i.killed||(e.push(i),s&&this.options.dropletsRate>0&&this.clearDroplets(i.x,i.y,i.r*this.options.dropletsCleaningRadiusMultiplier),this.drawDrop(this.ctx,i))}},this),this.drops=e},destroyed:!1,destroy(){this.destroyed=!0},update(){if(this.destroyed)return;this.clearCanvas();let t=Date.now();this.lastRender==null&&(this.lastRender=t);let n=(t-this.lastRender)/(1/60*1e3);n>1.1&&(n=1.1),n*=this.options.globalTimeScale,this.lastRender=t,this.updateDrops(n),requestAnimationFrame(this.update.bind(this))}};function SN(t,e={}){let n=["webgl","experimental-webgl"],i=null;return n.some(r=>{try{i=t.getContext(r,e)}catch{}return i!=null}),i==null&&document.body.classList.add("no-webgl"),i}function MN(t,e,n){let i=$v(t,e,t.VERTEX_SHADER),r=$v(t,n,t.FRAGMENT_SHADER),s=t.createProgram();if(t.attachShader(s,i),t.attachShader(s,r),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){var o=t.getProgramInfoLog(s);return AM("Error in program linking: "+o),t.deleteProgram(s),null}var l=t.getAttribLocation(s,"a_position"),u=t.getAttribLocation(s,"a_texCoord"),c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0);var d=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,d),t.enableVertexAttribArray(l),t.vertexAttribPointer(l,2,t.FLOAT,!1,0,0),s}function $v(t,e,n){let i=t.createShader(n);if(t.shaderSource(i,e),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){let s=t.getShaderInfoLog(i);return AM("Error compiling shader '"+i+"':"+s),t.deleteShader(i),null}return i}function EN(t,e,n){var i=t.createTexture();return bM(t,n),t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),e==null||RM(t,e),i}function wN(t,e,n,i,...r){let s=t.getUniformLocation(e,"u_"+i);t["uniform"+n](s,...r)}function bM(t,e){t.activeTexture(t["TEXTURE"+e])}function RM(t,e){t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e)}function TN(t,e,n,i,r){var s=e,a=e+i,o=n,l=n+r;t.bufferData(t.ARRAY_BUFFER,new Float32Array([s,o,a,o,s,l,s,l,a,o,a,l]),t.STATIC_DRAW)}function AM(t){console.error(t)}function CM(t,e,n,i){this.init(t,e,n,i)}CM.prototype={canvas:null,gl:null,program:null,width:0,height:0,init(t,e,n,i){this.canvas=t,this.width=t.width,this.height=t.height,this.gl=SN(t,e),this.program=this.createProgram(n,i),this.useProgram(this.program)},createProgram(t,e){return MN(this.gl,t,e)},useProgram(t){this.program=t,this.gl.useProgram(t)},createTexture(t,e){return EN(this.gl,t,e)},createUniform(t,e,...n){wN(this.gl,this.program,t,e,...n)},activeTexture(t){bM(this.gl,t)},updateTexture(t){RM(this.gl,t)},draw(){TN(this.gl,-1,-1,2,2),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}};const bN=`precision mediump float;

attribute vec2 a_position;

void main() {
   gl_Position = vec4(a_position,0.0,1.0);
}
`,RN=`precision mediump float;

// textures
uniform sampler2D u_waterMap;
uniform sampler2D u_textureShine;
uniform sampler2D u_textureFg;
uniform sampler2D u_textureBg;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;
uniform vec2 u_resolution;
uniform vec2 u_parallax;
uniform float u_parallaxFg;
uniform float u_parallaxBg;
uniform float u_textureRatio;
uniform bool u_renderShine;
uniform bool u_renderShadow;
uniform float u_minRefraction;
uniform float u_refractionDelta;
uniform float u_brightness;
uniform float u_alphaMultiply;
uniform float u_alphaSubtract;

// alpha-blends two colors
vec4 blend(vec4 bg,vec4 fg){
  vec3 bgm=bg.rgb*bg.a;
  vec3 fgm=fg.rgb*fg.a;
  float ia=1.0-fg.a;
  float a=(fg.a + bg.a * ia);
  vec3 rgb;
  if(a!=0.0){
    rgb=(fgm + bgm * ia) / a;
  }else{
    rgb=vec3(0.0,0.0,0.0);
  }
  return vec4(rgb,a);
}

vec2 pixel(){
  return vec2(1.0,1.0)/u_resolution;
}

vec2 parallax(float v){
  return u_parallax*pixel()*v;
}

vec2 texCoord(){
  return vec2(gl_FragCoord.x, u_resolution.y-gl_FragCoord.y)/u_resolution;
}

// scales the bg up and proportionally to fill the container
vec2 scaledTexCoord(){
  float ratio=u_resolution.x/u_resolution.y;
  vec2 scale=vec2(1.0,1.0);
  vec2 offset=vec2(0.0,0.0);
  float ratioDelta=ratio-u_textureRatio;
  if(ratioDelta>=0.0){
    scale.y=(1.0+ratioDelta);
    offset.y=ratioDelta/2.0;
  }else{
    scale.x=(1.0-ratioDelta);
    offset.x=-ratioDelta/2.0;
  }
  return (texCoord()+offset)/scale;
}

// get color from fg
vec4 fgColor(float x, float y){
  float p2=u_parallaxFg*2.0;
  vec2 scale=vec2(
    (u_resolution.x+p2)/u_resolution.x,
    (u_resolution.y+p2)/u_resolution.y
  );

  vec2 scaledTexCoord=texCoord()/scale;
  vec2 offset=vec2(
    (1.0-(1.0/scale.x))/2.0,
    (1.0-(1.0/scale.y))/2.0
  );

  return texture2D(u_waterMap,
    (scaledTexCoord+offset)+(pixel()*vec2(x,y))+parallax(u_parallaxFg)
  );
}

void main() {
  vec4 bg=texture2D(u_textureBg,scaledTexCoord()+parallax(u_parallaxBg));

  vec4 cur = fgColor(0.0,0.0);

  float d=cur.b; // "thickness"
  float x=cur.g;
  float y=cur.r;

  float a=clamp(cur.a*u_alphaMultiply-u_alphaSubtract, 0.0,1.0);

  vec2 refraction = (vec2(x,y)-0.5)*2.0;
  vec2 refractionParallax=parallax(u_parallaxBg-u_parallaxFg);
  vec2 refractionPos = scaledTexCoord()
    + (pixel()*refraction*(u_minRefraction+(d*u_refractionDelta)))
    + refractionParallax;

  vec4 tex=texture2D(u_textureFg,refractionPos);

  if(u_renderShine){
    float maxShine=490.0;
    float minShine=maxShine*0.18;
    vec2 shinePos=vec2(0.5,0.5) + ((1.0/512.0)*refraction)* -(minShine+((maxShine-minShine)*d));
    vec4 shine=texture2D(u_textureShine,shinePos);
    tex=blend(tex,shine);
  }

  vec4 fg=vec4(tex.rgb*u_brightness,a);

  if(u_renderShadow){
    float borderAlpha = fgColor(0.,0.-(d*6.0)).a;
    borderAlpha=borderAlpha*u_alphaMultiply-(u_alphaSubtract+0.5);
    borderAlpha=clamp(borderAlpha,0.,1.);
    borderAlpha*=0.2;
    vec4 border=vec4(0.,0.,0.,borderAlpha);
    fg=blend(border,fg);
  }

  gl_FragColor = blend(bg,fg);
}
`,AN={renderShadow:!1,minRefraction:256,maxRefraction:512,brightness:1,alphaMultiply:20,alphaSubtract:5,parallaxBg:5,parallaxFg:20};function PM(t,e,n,i,r=null,s={}){this.canvas=t,this.canvasLiquid=e,this.imageShine=r,this.imageFg=n,this.imageBg=i,this.options=Object.assign({},AN,s),this.init()}PM.prototype={canvas:null,gl:null,canvasLiquid:null,width:0,height:0,imageShine:"",imageFg:"",imageBg:"",textures:null,programWater:null,programBlurX:null,programBlurY:null,parallaxX:0,parallaxY:0,renderShadow:!1,options:null,init(){this.width=this.canvas.width,this.height=this.canvas.height,this.gl=new CM(this.canvas,{alpha:!1},bN,RN);let t=this.gl;this.programWater=t.program,t.createUniform("2f","resolution",this.width,this.height),t.createUniform("1f","textureRatio",this.imageBg.width/this.imageBg.height),t.createUniform("1i","renderShine",this.imageShine!=null),t.createUniform("1i","renderShadow",this.options.renderShadow),t.createUniform("1f","minRefraction",this.options.minRefraction),t.createUniform("1f","refractionDelta",this.options.maxRefraction-this.options.minRefraction),t.createUniform("1f","brightness",this.options.brightness),t.createUniform("1f","alphaMultiply",this.options.alphaMultiply),t.createUniform("1f","alphaSubtract",this.options.alphaSubtract),t.createUniform("1f","parallaxBg",this.options.parallaxBg),t.createUniform("1f","parallaxFg",this.options.parallaxFg),t.createTexture(null,0),this.textures=[{name:"textureShine",img:this.imageShine==null?La(2,2):this.imageShine},{name:"textureFg",img:this.imageFg},{name:"textureBg",img:this.imageBg}],this.textures.forEach((e,n)=>{t.createTexture(e.img,n+1),t.createUniform("1i",e.name,n+1)}),this.draw()},destroyed:!1,destroy(){this.destroyed=!0},draw(){this.destroyed||(this.gl.useProgram(this.programWater),this.gl.createUniform("2f","parallax",this.parallaxX,this.parallaxY),this.updateTexture(),this.gl.draw(),requestAnimationFrame(this.draw.bind(this)))},updateTextures(){this.textures.forEach((t,e)=>{this.gl.activeTexture(e+1),this.gl.updateTexture(t.img)})},updateTexture(){this.gl.activeTexture(0),this.gl.updateTexture(this.canvasLiquid)},resize(){},get overlayTexture(){},set overlayTexture(t){}};function CN(t,e,n){return new Promise((i,r)=>{typeof t=="string"&&(t={name:"image"+e,src:t});let s=new Image;t.img=s,s.addEventListener("load",a=>{i(t)}),s.src=t.src})}function PN(t,e){return Promise.all(t.map((n,i)=>CN(n,i)))}function LN(t,e){return new Promise((n,i)=>{PN(t).then(r=>{let s={};r.forEach(a=>{s[a.name]={img:a.img,src:a.src}}),n(s)})})}const DN="/Velvety2/".replace(/\/$/,""),qu=t=>`${DN}${t}`;function IN({className:t,citySrc:e=qu("/assets/images/city-footer.jpg"),fixed:n=!1,active:i=!0,zIndex:r}){const s=O.useRef(null),a=O.useRef(null);return O.useEffect(()=>{if(!i)return;const o=s.current,l=a.current;if(!o||!l)return;let u=!0,c=null,d=null;const f=()=>n?{w:window.innerWidth,h:window.innerHeight}:{w:Math.max(1,l.clientWidth),h:Math.max(1,l.clientHeight)},p=()=>{const h=window.devicePixelRatio||1,{w:v,h:y}=f();o.width=v*h,o.height=y*h,o.style.width=`${v}px`,o.style.height=`${y}px`};(async()=>{try{const h=await LN([{name:"dropAlpha",src:qu("/assets/rain/drop-alpha.png")},{name:"dropColor",src:qu("/assets/rain/drop-color.png")},{name:"dropShine",src:qu("/assets/rain/drop-shine2.png")}]);if(!u)return;const v=new Image;if(v.src=e,await v.decode(),!u)return;p(),c=new TM(o.width,o.height,window.devicePixelRatio||1,h.dropAlpha.img,h.dropColor.img,{minR:18,maxR:42,rainChance:.35,rainLimit:6,dropletsRate:24,globalTimeScale:.5,trailRate:1,dropFallMultiplier:.25,trailScaleRange:[.2,.35],autoShrink:!0,spawnArea:[-.2,.95],collisionRadius:.45,collisionRadiusIncrease:0,collisionBoost:.35,collisionBoostMultiplier:.025}),wM(40,()=>{c==null||c.addDrop(c.createDrop({x:nn(o.width),y:nn(o.height),r:nn(8,18)}))}),d=new PM(o,c.canvas,v,v,h.dropShine.img,{renderShadow:!0,minRefraction:128,maxRefraction:512,brightness:1.04,alphaMultiply:7,alphaSubtract:3})}catch(h){console.warn("[RainEffect] init failed:",h)}})();const _=()=>p(),m=n?null:new ResizeObserver(_);return m&&m.observe(l),n&&window.addEventListener("resize",_),()=>{u=!1,m==null||m.disconnect(),n&&window.removeEventListener("resize",_),c==null||c.destroy(),d==null||d.destroy(),c=null,d=null}},[i,e,n]),i?D.jsx("div",{ref:a,className:t,style:{position:n?"fixed":"absolute",inset:0,overflow:"hidden",pointerEvents:"none",...r!=null?{zIndex:r}:{}},"aria-hidden":!0,children:D.jsx("canvas",{ref:s,style:{display:"block",width:"100%",height:"100%"}})}):null}function NN({imageSrc:t,videoSrc:e,imageAlt:n,label:i,videoRef:r}){const s={width:"100%",height:"100%",objectFit:"cover",display:"block"};return e?D.jsx("video",{ref:r,src:e,muted:!0,loop:!0,playsInline:!0,autoPlay:!0,style:s,"aria-label":n??i}):D.jsx("img",{src:t,alt:n??i,style:s})}function jv({badge:t,label:e,imageSrc:n,videoSrc:i,imageAlt:r,videoRef:s}){return D.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:10,pointerEvents:"auto"},children:[D.jsx("p",{style:{margin:0,fontSize:10,fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.55)",fontFamily:"SFMono-Regular, Consolas, monospace"},children:e}),D.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16 / 10",maxHeight:"100%",borderRadius:16,overflow:"hidden",background:"#111",filter:"drop-shadow(0 24px 48px rgba(0,0,0,.65))"},children:[D.jsx(NN,{imageSrc:n,videoSrc:i,imageAlt:r,label:e,videoRef:s}),D.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,.06) 0%, rgba(0,0,0,.38) 100%)",pointerEvents:"none"}}),D.jsx("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,.58)",backdropFilter:"blur(8px)",color:"#fff",fontSize:10,letterSpacing:"0.08em",padding:"4px 10px",borderRadius:999,fontFamily:"SFMono-Regular, Consolas, monospace",textTransform:"uppercase"},children:t})]})]})}function UN({left:t,right:e,active:n=!0}){const i=O.useRef(null),r=O.useRef(null),s=O.useRef(!1);return O.useEffect(()=>{if(!n){s.current=!1;return}if(!s.current){s.current=!0;for(const a of[i,r]){const o=a.current;o&&(o.currentTime=0,o.play())}}},[n]),D.jsxs("div",{style:{position:"absolute",inset:"clamp(16px, 2.5vw, 32px)",display:"flex",alignItems:"center",gap:"clamp(12px, 2vw, 28px)",pointerEvents:"none",boxSizing:"border-box"},children:[D.jsx(jv,{...t,videoRef:i}),D.jsx(jv,{...e,videoRef:r})]})}const LM="/Velvety2/".replace(/\/$/,""),FN=t=>`${LM}/assets/images/${t}`,qv=t=>`${LM}/assets/videos/${t}`;function ON(){const t=O.useRef(null),[e,n]=O.useState(!1);return O.useEffect(()=>{const i=t.current;if(!i)return;const r=new IntersectionObserver(([s])=>n(s.isIntersecting),{rootMargin:"80px 0px"});return r.observe(i),()=>r.disconnect()},[]),D.jsxs("section",{ref:t,style:{position:"relative",zIndex:3,height:"100vh",background:"transparent",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},"aria-label":"Project before and after comparison",children:[D.jsx(IN,{fixed:!0,active:e,citySrc:FN("city-footer.jpg"),zIndex:2}),D.jsxs("div",{style:{position:"relative",zIndex:3,width:"clamp(400px, 96vw, 1680px)",height:"clamp(320px, 88vh, 920px)",borderRadius:28,overflow:"hidden",boxShadow:"0 0 0 9999px #000"},children:[D.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,.48) 100%)",pointerEvents:"none",zIndex:1}}),D.jsx("div",{style:{position:"absolute",inset:0,zIndex:2},children:D.jsx(UN,{active:e,left:{badge:"Before",label:"Project — Old",videoSrc:qv("eastside-before.mp4"),imageAlt:"Project before redesign"},right:{badge:"After",label:"Project — New",videoSrc:qv("eastside-after.mp4"),imageAlt:"Project after redesign"}})})]})]})}const kN="/Velvety2/".replace(/\/$/,""),Ku=t=>`${kN}/assets/images/${t}`,th=[{src:Ku("HuagenLogo5x5.png"),alt:"Huagen"},{src:Ku("ThriveLogo.png"),alt:"Thrive"},{src:Ku("MajorPetsLogo.png"),alt:"Major Pets"},{src:Ku("HomeLinkLogo.jpg"),alt:"HomeLink"}],BN=[...th,...th,...th],zN=.6;function VN(){const t=O.useRef(null),e=O.useRef(null),n=O.useRef(0),i=O.useRef(0),r=O.useRef(!1);return O.useEffect(()=>{const s=t.current,a=e.current;if(!s||!a)return;const o=()=>{if(!r.current){n.current-=zN;const d=s.scrollWidth/3;Math.abs(n.current)>=d&&(n.current=0),s.style.transform=`translateX(${n.current}px)`}const l=a.getBoundingClientRect(),u=l.left+l.width/2,c=l.width*.28;s.querySelectorAll("[data-logo-item]").forEach(d=>{const f=d.getBoundingClientRect(),p=f.left+f.width/2,g=Math.abs(p-u),_=Math.max(0,1-g/c);d.style.transform=`scale(${1+_*.65})`,d.style.opacity=String(.55+_*.45)}),i.current=requestAnimationFrame(o)};return i.current=requestAnimationFrame(o),()=>cancelAnimationFrame(i.current)},[]),D.jsx("div",{style:{padding:"24px 0 40px"},children:D.jsx("div",{ref:e,className:"mask-fade-edges",onMouseEnter:()=>{r.current=!0},onMouseLeave:()=>{r.current=!1},style:{position:"relative",overflow:"hidden"},children:D.jsx("div",{ref:t,style:{display:"flex",width:"max-content",alignItems:"center",gap:96,paddingBlock:24,willChange:"transform"},children:BN.map((s,a)=>D.jsx("div",{"data-logo-item":!0,style:{flexShrink:0,transformOrigin:"center center"},children:D.jsx("img",{src:s.src,alt:s.alt,draggable:!1,style:{display:"block",height:56,width:"auto",maxWidth:180,objectFit:"contain"}})},`${s.alt}-${a}`))})})})}const Kv="Inter, ui-sans-serif, system-ui, sans-serif",cr="1px solid rgba(0,0,0,0.09)",HN=[{num:"01",title:"Design",desc:"Most design looks like most other design. Safe and predictable. We ask uncomfortable questions that dig into the real problems — and build identities that earn attention.",items:["Web Design","UX Design","Branding","Graphic Design"]},{num:"02",title:"Development",desc:"The right technology depends on the problem. We build fast, scalable websites and Shopify stores — all here in Seattle, by the people who manage every aspect of your project.",items:["Web Development","Shopify Stores","UI Systems","Web Support"]},{num:"03",title:"Strategy",desc:"Creative without data is guesswork. Data without creativity is bland. We'd rather do the harder thing and build campaigns that look stunning and perform. That's where the results are.",items:["Brand Strategy","Social Media","SEO","GEO"]}];function GN(){return D.jsxs("section",{style:{position:"relative",zIndex:3,minHeight:"100vh",background:"#f5f5f3",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:Kv,color:"#08090b"},children:[D.jsxs("div",{style:{flex:"1 0 0",padding:"clamp(48px, 6vw, 80px) clamp(24px, 4.5vw, 72px) 0",display:"flex",flexDirection:"column"},children:[D.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderTop:cr,borderLeft:cr},children:[D.jsxs("div",{style:{borderRight:cr,borderBottom:cr,padding:"clamp(24px,3vw,40px)"},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:18},children:[D.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#08090b"}}),D.jsx("p",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.26em",textTransform:"uppercase",color:"#9ca3af",margin:0},children:"Studio"})]}),D.jsx("h2",{style:{margin:0,fontSize:"clamp(24px,3vw,44px)",fontWeight:500,lineHeight:1.12,letterSpacing:"-0.04em"},children:"We are a Seattle studio with a shared obsession for brands that matter."})]}),D.jsxs("div",{style:{borderRight:cr,borderBottom:cr,padding:"clamp(24px,3vw,40px)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[D.jsx("p",{style:{margin:"0 0 32px",fontSize:"clamp(13px,1.05vw,15px)",lineHeight:1.74,color:"#4b5563",maxWidth:440},children:"The team is a mix — creative, technical, practical, opinionated. Some of us make noise, some make spreadsheets."}),D.jsx(na,{to:"/about",style:{fontSize:11,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:"#08090b",textDecoration:"none"},children:"About ↗"})]})]}),D.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",borderLeft:cr,flex:"1 0 0"},children:HN.map(n=>D.jsxs("div",{style:{borderRight:cr,borderBottom:cr,padding:"clamp(22px,2.5vw,36px)"},children:[D.jsx("span",{style:{display:"block",fontSize:10,fontWeight:600,letterSpacing:"0.22em",color:"#c8c8c8",marginBottom:10},children:n.num}),D.jsx("h3",{style:{margin:"0 0 12px",fontSize:"clamp(15px,1.4vw,19px)",fontWeight:500},children:n.title}),D.jsx("p",{style:{margin:"0 0 18px",fontSize:"clamp(12px,0.88vw,13px)",lineHeight:1.7,color:"#6b7280"},children:n.desc}),D.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:7},children:n.items.map(i=>D.jsxs("li",{style:{fontSize:"clamp(12px,0.92vw,14px)",color:"#374151",display:"flex",alignItems:"center",gap:8},children:[D.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#d1d5db"}}),i]},i))})]},n.num))})]}),D.jsxs("div",{children:[D.jsx("p",{style:{textAlign:"center",fontSize:10,fontWeight:600,letterSpacing:"0.30em",textTransform:"uppercase",color:"#bbb",margin:"24px 0 0",fontFamily:Kv},children:"Trusted by ambitious brands"}),D.jsx(VN,{})]})]})}const WN="/Velvety2/".replace(/\/$/,""),XN=t=>`${WN}/assets/images/${t}`,YN=[{label:"Contact Us",to:"/contact"},{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Projects",to:"/projects"}],$N=6,jN={muted:"rgba(255,253,245,0.70)",body:"rgba(255,253,245,0.85)",faint:"rgba(255,253,245,0.60)",email:"#fff",border:"rgba(255,253,245,0.20)",inputBg:"rgba(255,255,255,0.05)",input:"#fff",underline:"rgba(255,253,245,0.85)"},qN={muted:"rgba(8,9,11,0.68)",body:"rgba(8,9,11,0.85)",faint:"rgba(8,9,11,0.60)",email:"#08090b",border:"rgba(8,9,11,0.18)",inputBg:"rgba(8,9,11,0.05)",input:"#08090b",underline:"rgba(8,9,11,0.85)"},KN=()=>D.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[D.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"}),D.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),ZN=()=>D.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[D.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),D.jsx("path",{d:"M22 7l-10 7L2 7"})]}),QN=()=>D.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:D.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"})});function Zv({palette:t,hovered:e,setHovered:n,interactive:i=!1}){return D.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"64px 40px 40px"},children:[D.jsx("img",{src:XN("logoSmall2.png"),alt:"VelvetY",style:{height:48,width:"auto",display:"block"}}),D.jsxs("div",{style:{marginTop:48,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48},children:[D.jsxs("div",{children:[D.jsx("p",{style:{fontSize:12,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:t.muted,margin:0},children:"Let’s start working together"}),D.jsx("a",{href:"mailto:info@velvetydesign.com",style:{display:"inline-block",marginTop:16,fontSize:"clamp(22px, 3vw, 34px)",fontWeight:800,letterSpacing:"-0.04em",color:t.email,textDecoration:"none",lineHeight:1.1,pointerEvents:i?"auto":"none"},children:"info@velvetydesign.com"}),D.jsxs("ul",{style:{marginTop:32,listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:12,fontSize:13,color:t.body},children:[D.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[D.jsx(KN,{}),D.jsx("span",{children:"2203B 22nd AVE S, Seattle, WA 98144"})]}),D.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[D.jsx(ZN,{}),D.jsx("a",{href:"mailto:info@velvetydesign.com",style:{color:"inherit",textDecoration:"none",pointerEvents:i?"auto":"none"},children:"info@velvetydesign.com"})]}),D.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[D.jsx(QN,{}),D.jsx("span",{children:"(206) 601-5969"})]})]})]}),D.jsxs("div",{children:[D.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:t.muted,margin:0},children:"Company"}),D.jsx("ul",{style:{marginTop:20,listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:12,fontSize:14,color:t.body},children:YN.map(r=>D.jsx("li",{children:D.jsxs(na,{to:r.to,style:{display:"inline-flex",alignItems:"center",gap:8,color:t.body,textDecoration:"none",pointerEvents:i?"auto":"none"},onMouseEnter:()=>n==null?void 0:n(r.label),onMouseLeave:()=>n==null?void 0:n(null),children:[r.label,D.jsx("span",{style:{display:"block",height:1,background:t.underline,width:e===r.label?20:0,transition:"width 0.3s"}})]})},r.label))})]}),D.jsxs("div",{children:[D.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:t.muted,margin:0},children:"Subscribe"}),D.jsxs("form",{onSubmit:r=>r.preventDefault(),style:{marginTop:20,display:"flex",alignItems:"center",gap:8,borderRadius:999,border:`1px solid ${t.border}`,background:t.inputBg,padding:"4px 4px 4px 16px",pointerEvents:i?"auto":"none"},children:[D.jsx("input",{type:"email",placeholder:"Enter your email","aria-label":"Email",style:{flex:1,background:"transparent",border:"none",outline:"none",fontSize:13,color:t.input,minWidth:0}}),D.jsx("button",{type:"submit",style:{flexShrink:0,background:t.email,color:t.email==="#fff"?"#0a0a0a":"#fff",border:"none",borderRadius:999,padding:"8px 16px",fontSize:12,fontWeight:600,cursor:"pointer"},children:"Submit"})]})]})]}),D.jsx("p",{style:{marginTop:56,paddingTop:24,textAlign:"center",fontSize:12,color:t.faint},children:"© Copyright 2026 by VELVETY LLC"})]})}function JN(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(!i)continue;const r=i.getBoundingClientRect();if(t>=r.left&&t<r.right)return n}return-1}function eU(){const[t,e]=O.useState(null),[n,i]=O.useState(null),[r,s]=O.useState("inset(0 100% 0 0)"),a=O.useRef(null),o=O.useRef([]),l=O.useCallback(d=>{if(d===null){s("inset(0 100% 0 0)");return}const f=a.current,p=o.current[d];if(!f||!p)return;const g=f.getBoundingClientRect(),_=p.getBoundingClientRect(),m=Math.max(0,_.left-g.left),h=Math.max(0,g.right-_.right);s(`inset(0 ${h}px 0 ${m}px)`)},[]),u=d=>{const f=JN(d.clientX,o.current);if(f===n)return;const p=f>=0?f:null;i(p),l(p)},c=()=>{i(null),l(null)};return D.jsxs("footer",{ref:a,onMouseMove:u,onMouseLeave:c,style:{position:"relative",overflow:"hidden",zIndex:3,minHeight:520,background:"#f5f5f3",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},children:[D.jsx("div",{className:"footer-piano-white","aria-hidden":!0}),D.jsx("div",{className:"footer-piano-curtain","aria-hidden":!0,children:Array.from({length:$N},(d,f)=>D.jsx("div",{ref:p=>{o.current[f]=p},className:`footer-piano-key fk${f+1}${n===f?" is-lifted":""}`},f))}),D.jsx("div",{className:"footer-content-layer footer-content-layer--interactive",style:{zIndex:2},children:D.jsx(Zv,{palette:jN,hovered:t,setHovered:e,interactive:!0})}),D.jsx("div",{className:"footer-content-layer",style:{zIndex:3,clipPath:r,transition:"clip-path 0.08s linear"},"aria-hidden":!0,children:D.jsx(Zv,{palette:qN,hovered:t})})]})}function tU(){return O.useEffect(()=>{window.location.hash==="#work"&&requestAnimationFrame(()=>{var t;(t=document.getElementById("work"))==null||t.scrollIntoView({behavior:"smooth",block:"start"})})},[]),D.jsxs("div",{style:{background:"#000"},children:[D.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none"},children:D.jsx(FD,{rotation:285,colors:["#e83d0d","#1e52bf","#7cff67"],speed:.18,frequency:1.1,warpStrength:1.2,noise:.08,iterations:3,intensity:1.2,bandWidth:5,transparent:!1,mouseInfluence:.6,parallax:.3})}),D.jsx(HD,{}),D.jsx(GD,{}),D.jsx($u,{topColor:"#f5f5f3",bottomColor:"#000000"}),D.jsx(gN,{}),D.jsx($u,{topColor:"#000000",bottomColor:"#f5f5f3"}),D.jsx(xN,{}),D.jsx($u,{topColor:"#f5f5f3",bottomColor:"#000000"}),D.jsx(ON,{}),D.jsx($u,{topColor:"#000000",bottomColor:"#f5f5f3"}),D.jsx(GN,{}),D.jsx(eU,{})]})}function nU(){return D.jsxs("section",{style:{minHeight:"100vh",background:"#f5f5f3",color:"#08090b",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif",padding:"clamp(96px, 12vh, 140px) clamp(24px, 5vw, 72px)"},"aria-label":"About VelvetY",children:[D.jsx("p",{style:{margin:"0 0 18px",fontSize:10,fontWeight:600,letterSpacing:"0.26em",textTransform:"uppercase",color:"#9ca3af"},children:"About"}),D.jsx("h1",{style:{margin:"0 0 24px",fontSize:"clamp(36px, 6vw, 72px)",fontWeight:500,lineHeight:1.05,letterSpacing:"-0.04em",maxWidth:720},children:"We are a Seattle studio with a shared obsession for brands that matter."}),D.jsx("p",{style:{margin:"0 0 40px",maxWidth:520,fontSize:16,lineHeight:1.75,color:"#4b5563"},children:"The team is a mix — creative, technical, practical, opinionated. Some of us make noise, some make spreadsheets."}),D.jsx(na,{to:"/",style:{fontSize:11,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:"#08090b",textDecoration:"none"},children:"← Back home"})]})}function iU(){return D.jsx(JR,{children:D.jsxs(ub,{children:[D.jsx(qh,{path:"/",element:D.jsx(tU,{})}),D.jsx(qh,{path:"/about",element:D.jsx(nU,{})})]})})}fS(document.getElementById("root")).render(D.jsx(O.StrictMode,{children:D.jsx(Ib,{basename:"/Velvety2/".replace(/\/$/,""),children:D.jsx(iU,{})})}));
