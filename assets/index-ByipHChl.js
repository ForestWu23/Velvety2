var rM=Object.defineProperty;var sM=(t,e,n)=>e in t?rM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Dr=(t,e,n)=>sM(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Pv={exports:{}},Qc={},Lv={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=Symbol.for("react.element"),aM=Symbol.for("react.portal"),oM=Symbol.for("react.fragment"),lM=Symbol.for("react.strict_mode"),uM=Symbol.for("react.profiler"),cM=Symbol.for("react.provider"),fM=Symbol.for("react.context"),dM=Symbol.for("react.forward_ref"),hM=Symbol.for("react.suspense"),pM=Symbol.for("react.memo"),mM=Symbol.for("react.lazy"),z0=Symbol.iterator;function gM(t){return t===null||typeof t!="object"?null:(t=z0&&t[z0]||t["@@iterator"],typeof t=="function"?t:null)}var Dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iv=Object.assign,Nv={};function fo(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Dv}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uv(){}Uv.prototype=fo.prototype;function Wp(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Dv}var Xp=Wp.prototype=new Uv;Xp.constructor=Wp;Iv(Xp,fo.prototype);Xp.isPureReactComponent=!0;var V0=Array.isArray,Fv=Object.prototype.hasOwnProperty,Yp={current:null},Ov={key:!0,ref:!0,__self:!0,__source:!0};function kv(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Fv.call(e,i)&&!Ov.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fl,type:t,key:s,ref:a,props:r,_owner:Yp.current}}function _M(t,e){return{$$typeof:Fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fl}function vM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var H0=/\/+/g;function Af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vM(""+t.key):e.toString(36)}function Hu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fl:case aM:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Af(a,0):i,V0(r)?(n="",t!=null&&(n=t.replace(H0,"$&/")+"/"),Hu(r,e,n,"",function(u){return u})):r!=null&&($p(r)&&(r=_M(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(H0,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",V0(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Af(s,o);a+=Hu(s,e,n,l,r)}else if(l=gM(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Af(s,o++),a+=Hu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Zl(t,e,n){if(t==null)return t;var i=[],r=0;return Hu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function xM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},Gu={transition:null},yM={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:Gu,ReactCurrentOwner:Yp};function Bv(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Zl,forEach:function(t,e,n){Zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zl(t,function(){e++}),e},toArray:function(t){return Zl(t,function(e){return e})||[]},only:function(t){if(!$p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=fo;Xe.Fragment=oM;Xe.Profiler=uM;Xe.PureComponent=Wp;Xe.StrictMode=lM;Xe.Suspense=hM;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yM;Xe.act=Bv;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Iv({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Yp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Fv.call(e,l)&&!Ov.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Fl,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:fM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cM,_context:t},t.Consumer=t};Xe.createElement=kv;Xe.createFactory=function(t){var e=kv.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:dM,render:t}};Xe.isValidElement=$p;Xe.lazy=function(t){return{$$typeof:mM,_payload:{_status:-1,_result:t},_init:xM}};Xe.memo=function(t,e){return{$$typeof:pM,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Gu.transition;Gu.transition={};try{t()}finally{Gu.transition=e}};Xe.unstable_act=Bv;Xe.useCallback=function(t,e){return Sn.current.useCallback(t,e)};Xe.useContext=function(t){return Sn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Sn.current.useEffect(t,e)};Xe.useId=function(){return Sn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Sn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};Xe.useRef=function(t){return Sn.current.useRef(t)};Xe.useState=function(t){return Sn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Sn.current.useTransition()};Xe.version="18.3.1";Lv.exports=Xe;var G=Lv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SM=G,MM=Symbol.for("react.element"),EM=Symbol.for("react.fragment"),wM=Object.prototype.hasOwnProperty,TM=SM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RM={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)wM.call(e,i)&&!RM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:MM,type:t,key:s,ref:a,props:r,_owner:TM.current}}Qc.Fragment=EM;Qc.jsx=zv;Qc.jsxs=zv;Pv.exports=Qc;var z=Pv.exports,Vv={exports:{}},Qn={},Hv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,$){var ee=N.length;N.push($);e:for(;0<ee;){var ne=ee-1>>>1,se=N[ne];if(0<r(se,$))N[ne]=$,N[ee]=se,ee=ne;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var $=N[0],ee=N.pop();if(ee!==$){N[0]=ee;e:for(var ne=0,se=N.length,ke=se>>>1;ne<ke;){var Ce=2*(ne+1)-1,Ue=N[Ce],te=Ce+1,me=N[te];if(0>r(Ue,ee))te<se&&0>r(me,Ue)?(N[ne]=me,N[te]=ee,ne=te):(N[ne]=Ue,N[Ce]=ee,ne=Ce);else if(te<se&&0>r(me,ee))N[ne]=me,N[te]=ee,ne=te;else break e}}return $}function r(N,$){var ee=N.sortIndex-$.sortIndex;return ee!==0?ee:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=N)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function S(N){if(v=!1,x(N),!_)if(n(l)!==null)_=!0,Y(M);else{var $=n(u);$!==null&&k(S,$.startTime-N)}}function M(N,$){_=!1,v&&(v=!1,h(y),y=-1),p=!0;var ee=f;try{for(x($),d=n(l);d!==null&&(!(d.expirationTime>$)||N&&!L());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var se=ne(d.expirationTime<=$);$=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&i(l),x($)}else i(l);d=n(l)}if(d!==null)var ke=!0;else{var Ce=n(u);Ce!==null&&k(S,Ce.startTime-$),ke=!1}return ke}finally{d=null,f=ee,p=!1}}var T=!1,w=null,y=-1,R=5,P=-1;function L(){return!(t.unstable_now()-P<R)}function F(){if(w!==null){var N=t.unstable_now();P=N;var $=!0;try{$=w(!0,N)}finally{$?W():(T=!1,w=null)}}else T=!1}var W;if(typeof m=="function")W=function(){m(F)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,D=V.port2;V.port1.onmessage=F,W=function(){D.postMessage(null)}}else W=function(){g(F,0)};function Y(N){w=N,T||(T=!0,W())}function k(N,$){y=g(function(){N(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Y(M))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var ee=f;f=$;try{return N()}finally{f=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=f;f=N;try{return $()}finally{f=ee}},t.unstable_scheduleCallback=function(N,$,ee){var ne=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ne+ee:ne):ee=ne,N){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ee+se,N={id:c++,callback:$,priorityLevel:N,startTime:ee,expirationTime:se,sortIndex:-1},ee>ne?(N.sortIndex=ee,e(u,N),n(l)===null&&N===n(u)&&(v?(h(y),y=-1):v=!0,k(S,ee-ne))):(N.sortIndex=se,e(l,N),_||p||(_=!0,Y(M))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var $=f;return function(){var ee=f;f=$;try{return N.apply(this,arguments)}finally{f=ee}}}})(Gv);Hv.exports=Gv;var AM=Hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bM=G,jn=AM;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wv=new Set,al={};function Zs(t,e){ja(t,e),ja(t+"Capture",e)}function ja(t,e){for(al[t]=e,t=0;t<e.length;t++)Wv.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,CM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G0={},W0={};function PM(t){return Xd.call(W0,t)?!0:Xd.call(G0,t)?!1:CM.test(t)?W0[t]=!0:(G0[t]=!0,!1)}function LM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DM(t,e,n,i){if(e===null||typeof e>"u"||LM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var qp=/[\-:]([a-z])/g;function jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qp,jp);rn[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qp,jp);rn[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qp,jp);rn[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kp(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DM(e,n,r,i)&&(n=null),i||r===null?PM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Tr=bM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),Ma=Symbol.for("react.portal"),Ea=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Qp=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),$v=Symbol.for("react.offscreen"),X0=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=X0&&t[X0]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,bf;function Oo(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var Cf=!1;function Pf(t,e){if(!t||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function IM(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=Pf(t.type,!1),t;case 11:return t=Pf(t.type.render,!1),t;case 1:return t=Pf(t.type,!0),t;default:return""}}function jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ea:return"Fragment";case Ma:return"Portal";case Yd:return"Profiler";case Zp:return"StrictMode";case $d:return"Suspense";case qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yv:return(t.displayName||"Context")+".Consumer";case Xv:return(t._context.displayName||"Context")+".Provider";case Qp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jp:return e=t.displayName||null,e!==null?e:jd(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return jd(t(e))}catch{}}return null}function NM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jd(e);case 8:return e===Zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UM(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=UM(t))}function jv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kd(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Y0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kv(t,e){e=e.checked,e!=null&&Kp(t,"checked",e,!1)}function Zd(t,e){Kv(t,e);var n=os(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qd(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qd(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function Oa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function q0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(ko(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function Zv(t,e){var n=os(e.value),i=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function j0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eu,Jv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FM=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){FM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function ex(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function tx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ex(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var OM=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function th(t,e){if(e){if(OM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=null;function em(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,ka=null,Ba=null;function K0(t){if(t=Bl(t)){if(typeof rh!="function")throw Error(de(280));var e=t.stateNode;e&&(e=rf(e),rh(t.stateNode,t.type,e))}}function nx(t){ka?Ba?Ba.push(t):Ba=[t]:ka=t}function ix(){if(ka){var t=ka,e=Ba;if(Ba=ka=null,K0(t),e)for(t=0;t<e.length;t++)K0(e[t])}}function rx(t,e){return t(e)}function sx(){}var Lf=!1;function ax(t,e,n){if(Lf)return t(e,n);Lf=!0;try{return rx(t,e,n)}finally{Lf=!1,(ka!==null||Ba!==null)&&(sx(),ix())}}function ll(t,e){var n=t.stateNode;if(n===null)return null;var i=rf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var sh=!1;if(gr)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){sh=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{sh=!1}function kM(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $o=!1,pc=null,mc=!1,ah=null,BM={onError:function(t){$o=!0,pc=t}};function zM(t,e,n,i,r,s,a,o,l){$o=!1,pc=null,kM.apply(BM,arguments)}function VM(t,e,n,i,r,s,a,o,l){if(zM.apply(this,arguments),$o){if($o){var u=pc;$o=!1,pc=null}else throw Error(de(198));mc||(mc=!0,ah=u)}}function Qs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ox(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Z0(t){if(Qs(t)!==t)throw Error(de(188))}function HM(t){var e=t.alternate;if(!e){if(e=Qs(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Z0(r),t;if(s===i)return Z0(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function lx(t){return t=HM(t),t!==null?ux(t):null}function ux(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ux(t);if(e!==null)return e;t=t.sibling}return null}var cx=jn.unstable_scheduleCallback,Q0=jn.unstable_cancelCallback,GM=jn.unstable_shouldYield,WM=jn.unstable_requestPaint,kt=jn.unstable_now,XM=jn.unstable_getCurrentPriorityLevel,tm=jn.unstable_ImmediatePriority,fx=jn.unstable_UserBlockingPriority,gc=jn.unstable_NormalPriority,YM=jn.unstable_LowPriority,dx=jn.unstable_IdlePriority,Jc=null,Xi=null;function $M(t){if(Xi&&typeof Xi.onCommitFiberRoot=="function")try{Xi.onCommitFiberRoot(Jc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ri=Math.clz32?Math.clz32:KM,qM=Math.log,jM=Math.LN2;function KM(t){return t>>>=0,t===0?32:31-(qM(t)/jM|0)|0}var tu=64,nu=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _c(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Bo(o):(s&=a,s!==0&&(i=Bo(s)))}else a=n&~r,a!==0?i=Bo(a):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ri(e),r=1<<n,i|=t[n],e&=~r;return i}function ZM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ri(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ZM(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hx(){var t=tu;return tu<<=1,!(tu&4194240)&&(tu=64),t}function Df(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ri(e),t[e]=n}function JM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function px(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mx,im,gx,_x,vx,lh=!1,iu=[],Zr=null,Qr=null,Jr=null,ul=new Map,cl=new Map,Hr=[],eE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function J0(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function Eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bl(e),e!==null&&im(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tE(t,e,n,i,r){switch(e){case"focusin":return Zr=Eo(Zr,t,e,n,i,r),!0;case"dragenter":return Qr=Eo(Qr,t,e,n,i,r),!0;case"mouseover":return Jr=Eo(Jr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ul.set(s,Eo(ul.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,cl.set(s,Eo(cl.get(s)||null,t,e,n,i,r)),!0}return!1}function xx(t){var e=Ls(t.target);if(e!==null){var n=Qs(e);if(n!==null){if(e=n.tag,e===13){if(e=ox(n),e!==null){t.blockedOn=e,vx(t.priority,function(){gx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ih=i,n.target.dispatchEvent(i),ih=null}else return e=Bl(n),e!==null&&im(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){Wu(t)&&n.delete(e)}function nE(){lh=!1,Zr!==null&&Wu(Zr)&&(Zr=null),Qr!==null&&Wu(Qr)&&(Qr=null),Jr!==null&&Wu(Jr)&&(Jr=null),ul.forEach(eg),cl.forEach(eg)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,lh||(lh=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,nE)))}function fl(t){function e(r){return wo(r,t)}if(0<iu.length){wo(iu[0],t);for(var n=1;n<iu.length;n++){var i=iu[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zr!==null&&wo(Zr,t),Qr!==null&&wo(Qr,t),Jr!==null&&wo(Jr,t),ul.forEach(e),cl.forEach(e),n=0;n<Hr.length;n++)i=Hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)xx(n),n.blockedOn===null&&Hr.shift()}var za=Tr.ReactCurrentBatchConfig,vc=!0;function iE(t,e,n,i){var r=at,s=za.transition;za.transition=null;try{at=1,rm(t,e,n,i)}finally{at=r,za.transition=s}}function rE(t,e,n,i){var r=at,s=za.transition;za.transition=null;try{at=4,rm(t,e,n,i)}finally{at=r,za.transition=s}}function rm(t,e,n,i){if(vc){var r=uh(t,e,n,i);if(r===null)Hf(t,e,i,xc,n),J0(t,i);else if(tE(r,t,e,n,i))i.stopPropagation();else if(J0(t,i),e&4&&-1<eE.indexOf(t)){for(;r!==null;){var s=Bl(r);if(s!==null&&mx(s),s=uh(t,e,n,i),s===null&&Hf(t,e,i,xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hf(t,e,i,null,n)}}var xc=null;function uh(t,e,n,i){if(xc=null,t=em(i),t=Ls(t),t!==null)if(e=Qs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ox(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xc=t,null}function yx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XM()){case tm:return 1;case fx:return 4;case gc:case YM:return 16;case dx:return 536870912;default:return 16}default:return 16}}var Xr=null,sm=null,Xu=null;function Sx(){if(Xu)return Xu;var t,e=sm,n=e.length,i,r="value"in Xr?Xr.value:Xr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xu=r.slice(t,1<i?1-i:void 0)}function Yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ru(){return!0}function tg(){return!1}function Jn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ru:tg,this.isPropagationStopped=tg,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=Jn(ho),kl=bt({},ho,{view:0,detail:0}),sE=Jn(kl),If,Nf,To,ef=bt({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:om,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(If=t.screenX-To.screenX,Nf=t.screenY-To.screenY):Nf=If=0,To=t),If)},movementY:function(t){return"movementY"in t?t.movementY:Nf}}),ng=Jn(ef),aE=bt({},ef,{dataTransfer:0}),oE=Jn(aE),lE=bt({},kl,{relatedTarget:0}),Uf=Jn(lE),uE=bt({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),cE=Jn(uE),fE=bt({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dE=Jn(fE),hE=bt({},ho,{data:0}),ig=Jn(hE),pE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _E(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gE[t])?!!e[t]:!1}function om(){return _E}var vE=bt({},kl,{key:function(t){if(t.key){var e=pE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:om,charCode:function(t){return t.type==="keypress"?Yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xE=Jn(vE),yE=bt({},ef,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rg=Jn(yE),SE=bt({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:om}),ME=Jn(SE),EE=bt({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),wE=Jn(EE),TE=bt({},ef,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RE=Jn(TE),AE=[9,13,27,32],lm=gr&&"CompositionEvent"in window,qo=null;gr&&"documentMode"in document&&(qo=document.documentMode);var bE=gr&&"TextEvent"in window&&!qo,Mx=gr&&(!lm||qo&&8<qo&&11>=qo),sg=" ",ag=!1;function Ex(t,e){switch(t){case"keyup":return AE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wa=!1;function CE(t,e){switch(t){case"compositionend":return wx(e);case"keypress":return e.which!==32?null:(ag=!0,sg);case"textInput":return t=e.data,t===sg&&ag?null:t;default:return null}}function PE(t,e){if(wa)return t==="compositionend"||!lm&&Ex(t,e)?(t=Sx(),Xu=sm=Xr=null,wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mx&&e.locale!=="ko"?null:e.data;default:return null}}var LE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LE[t.type]:e==="textarea"}function Tx(t,e,n,i){nx(i),e=yc(e,"onChange"),0<e.length&&(n=new am("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var jo=null,dl=null;function DE(t){Fx(t,0)}function tf(t){var e=Aa(t);if(jv(e))return t}function IE(t,e){if(t==="change")return e}var Rx=!1;if(gr){var Ff;if(gr){var Of="oninput"in document;if(!Of){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),Of=typeof lg.oninput=="function"}Ff=Of}else Ff=!1;Rx=Ff&&(!document.documentMode||9<document.documentMode)}function ug(){jo&&(jo.detachEvent("onpropertychange",Ax),dl=jo=null)}function Ax(t){if(t.propertyName==="value"&&tf(dl)){var e=[];Tx(e,dl,t,em(t)),ax(DE,e)}}function NE(t,e,n){t==="focusin"?(ug(),jo=e,dl=n,jo.attachEvent("onpropertychange",Ax)):t==="focusout"&&ug()}function UE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tf(dl)}function FE(t,e){if(t==="click")return tf(e)}function OE(t,e){if(t==="input"||t==="change")return tf(e)}function kE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ci=typeof Object.is=="function"?Object.is:kE;function hl(t,e){if(Ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xd.call(e,r)||!Ci(t[r],e[r]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,e){var n=cg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function bx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cx(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BE(t){var e=Cx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bx(n.ownerDocument.documentElement,n)){if(i!==null&&um(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=fg(n,s);var a=fg(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zE=gr&&"documentMode"in document&&11>=document.documentMode,Ta=null,ch=null,Ko=null,fh=!1;function dg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fh||Ta==null||Ta!==hc(i)||(i=Ta,"selectionStart"in i&&um(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&hl(Ko,i)||(Ko=i,i=yc(ch,"onSelect"),0<i.length&&(e=new am("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ta)))}function su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ra={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},kf={},Px={};gr&&(Px=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function nf(t){if(kf[t])return kf[t];if(!Ra[t])return t;var e=Ra[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Px)return kf[t]=e[n];return t}var Lx=nf("animationend"),Dx=nf("animationiteration"),Ix=nf("animationstart"),Nx=nf("transitionend"),Ux=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hs(t,e){Ux.set(t,e),Zs(e,[t])}for(var Bf=0;Bf<hg.length;Bf++){var zf=hg[Bf],VE=zf.toLowerCase(),HE=zf[0].toUpperCase()+zf.slice(1);hs(VE,"on"+HE)}hs(Lx,"onAnimationEnd");hs(Dx,"onAnimationIteration");hs(Ix,"onAnimationStart");hs("dblclick","onDoubleClick");hs("focusin","onFocus");hs("focusout","onBlur");hs(Nx,"onTransitionEnd");ja("onMouseEnter",["mouseout","mouseover"]);ja("onMouseLeave",["mouseout","mouseover"]);ja("onPointerEnter",["pointerout","pointerover"]);ja("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GE=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function pg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,VM(i,e,void 0,t),t.currentTarget=null}function Fx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;pg(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;pg(r,o,u),s=l}}}if(mc)throw t=ah,mc=!1,ah=null,t}function gt(t,e){var n=e[gh];n===void 0&&(n=e[gh]=new Set);var i=t+"__bubble";n.has(i)||(Ox(e,t,2,!1),n.add(i))}function Vf(t,e,n){var i=0;e&&(i|=4),Ox(n,t,i,e)}var au="_reactListening"+Math.random().toString(36).slice(2);function pl(t){if(!t[au]){t[au]=!0,Wv.forEach(function(n){n!=="selectionchange"&&(GE.has(n)||Vf(n,!1,t),Vf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[au]||(e[au]=!0,Vf("selectionchange",!1,e))}}function Ox(t,e,n,i){switch(yx(e)){case 1:var r=iE;break;case 4:r=rE;break;default:r=rm}n=r.bind(null,e,n,t),r=void 0,!sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ls(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ax(function(){var u=s,c=em(n),d=[];e:{var f=Ux.get(t);if(f!==void 0){var p=am,_=t;switch(t){case"keypress":if(Yu(n)===0)break e;case"keydown":case"keyup":p=xE;break;case"focusin":_="focus",p=Uf;break;case"focusout":_="blur",p=Uf;break;case"beforeblur":case"afterblur":p=Uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ME;break;case Lx:case Dx:case Ix:p=cE;break;case Nx:p=wE;break;case"scroll":p=sE;break;case"wheel":p=RE;break;case"copy":case"cut":case"paste":p=dE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rg}var v=(e&4)!==0,g=!v&&t==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ll(m,h),S!=null&&v.push(ml(m,S,x)))),g)break;m=m.return}0<v.length&&(f=new p(f,_,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==ih&&(_=n.relatedTarget||n.fromElement)&&(Ls(_)||_[_r]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Ls(_):null,_!==null&&(g=Qs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(v=ng,S="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=rg,S="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?f:Aa(p),x=_==null?f:Aa(_),f=new v(S,m+"leave",p,n,c),f.target=g,f.relatedTarget=x,S=null,Ls(c)===u&&(v=new v(h,m+"enter",_,n,c),v.target=x,v.relatedTarget=g,S=v),g=S,p&&_)t:{for(v=p,h=_,m=0,x=v;x;x=ia(x))m++;for(x=0,S=h;S;S=ia(S))x++;for(;0<m-x;)v=ia(v),m--;for(;0<x-m;)h=ia(h),x--;for(;m--;){if(v===h||h!==null&&v===h.alternate)break t;v=ia(v),h=ia(h)}v=null}else v=null;p!==null&&mg(d,f,p,v,!1),_!==null&&g!==null&&mg(d,g,_,v,!0)}}e:{if(f=u?Aa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var M=IE;else if(og(f))if(Rx)M=OE;else{M=UE;var T=NE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=FE);if(M&&(M=M(t,u))){Tx(d,M,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Qd(f,"number",f.value)}switch(T=u?Aa(u):window,t){case"focusin":(og(T)||T.contentEditable==="true")&&(Ta=T,ch=u,Ko=null);break;case"focusout":Ko=ch=Ta=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,dg(d,n,c);break;case"selectionchange":if(zE)break;case"keydown":case"keyup":dg(d,n,c)}var w;if(lm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else wa?Ex(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Mx&&n.locale!=="ko"&&(wa||y!=="onCompositionStart"?y==="onCompositionEnd"&&wa&&(w=Sx()):(Xr=c,sm="value"in Xr?Xr.value:Xr.textContent,wa=!0)),T=yc(u,y),0<T.length&&(y=new ig(y,t,null,n,c),d.push({event:y,listeners:T}),w?y.data=w:(w=wx(n),w!==null&&(y.data=w)))),(w=bE?CE(t,n):PE(t,n))&&(u=yc(u,"onBeforeInput"),0<u.length&&(c=new ig("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}Fx(d,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ll(t,n),s!=null&&i.unshift(ml(t,s,r)),s=ll(t,e),s!=null&&i.push(ml(t,s,r))),t=t.return}return i}function ia(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ll(n,s),l!=null&&a.unshift(ml(n,l,o))):r||(l=ll(n,s),l!=null&&a.push(ml(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var WE=/\r\n?/g,XE=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(WE,`
`).replace(XE,"")}function ou(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(de(425))}function Sc(){}var dh=null,hh=null;function ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,YE=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,$E=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(qE)}:mh;function qE(t){setTimeout(function(){throw t})}function Gf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fl(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),Bi="__reactFiber$"+po,gl="__reactProps$"+po,_r="__reactContainer$"+po,gh="__reactEvents$"+po,jE="__reactListeners$"+po,KE="__reactHandles$"+po;function Ls(t){var e=t[Bi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Bi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vg(t);t!==null;){if(n=t[Bi])return n;t=vg(t)}return e}t=n,n=t.parentNode}return null}function Bl(t){return t=t[Bi]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Aa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function rf(t){return t[gl]||null}var _h=[],ba=-1;function ps(t){return{current:t}}function _t(t){0>ba||(t.current=_h[ba],_h[ba]=null,ba--)}function ht(t,e){ba++,_h[ba]=t.current,t.current=e}var ls={},mn=ps(ls),bn=ps(!1),Gs=ls;function Ka(t,e){var n=t.type.contextTypes;if(!n)return ls;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Cn(t){return t=t.childContextTypes,t!=null}function Mc(){_t(bn),_t(mn)}function xg(t,e,n){if(mn.current!==ls)throw Error(de(168));ht(mn,e),ht(bn,n)}function kx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,NM(t)||"Unknown",r));return bt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ls,Gs=mn.current,ht(mn,t),ht(bn,bn.current),!0}function yg(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=kx(t,e,Gs),i.__reactInternalMemoizedMergedChildContext=t,_t(bn),_t(mn),ht(mn,t)):_t(bn),ht(bn,n)}var or=null,sf=!1,Wf=!1;function Bx(t){or===null?or=[t]:or.push(t)}function ZE(t){sf=!0,Bx(t)}function ms(){if(!Wf&&or!==null){Wf=!0;var t=0,e=at;try{var n=or;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}or=null,sf=!1}catch(r){throw or!==null&&(or=or.slice(t+1)),cx(tm,ms),r}finally{at=e,Wf=!1}}return null}var Ca=[],Pa=0,wc=null,Tc=0,ai=[],oi=0,Ws=null,ur=1,cr="";function Ts(t,e){Ca[Pa++]=Tc,Ca[Pa++]=wc,wc=t,Tc=e}function zx(t,e,n){ai[oi++]=ur,ai[oi++]=cr,ai[oi++]=Ws,Ws=t;var i=ur;t=cr;var r=32-Ri(i)-1;i&=~(1<<r),n+=1;var s=32-Ri(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ur=1<<32-Ri(e)+r|n<<r|i,cr=s+t}else ur=1<<s|n<<r|i,cr=t}function cm(t){t.return!==null&&(Ts(t,1),zx(t,1,0))}function fm(t){for(;t===wc;)wc=Ca[--Pa],Ca[Pa]=null,Tc=Ca[--Pa],Ca[Pa]=null;for(;t===Ws;)Ws=ai[--oi],ai[oi]=null,cr=ai[--oi],ai[oi]=null,ur=ai[--oi],ai[oi]=null}var $n=null,Wn=null,vt=!1,Ei=null;function Vx(t,e){var n=ci(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$n=t,Wn=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$n=t,Wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ws!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ci(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$n=t,Wn=null,!0):!1;default:return!1}}function vh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xh(t){if(vt){var e=Wn;if(e){var n=e;if(!Sg(t,e)){if(vh(t))throw Error(de(418));e=es(n.nextSibling);var i=$n;e&&Sg(t,e)?Vx(i,n):(t.flags=t.flags&-4097|2,vt=!1,$n=t)}}else{if(vh(t))throw Error(de(418));t.flags=t.flags&-4097|2,vt=!1,$n=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function lu(t){if(t!==$n)return!1;if(!vt)return Mg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ph(t.type,t.memoizedProps)),e&&(e=Wn)){if(vh(t))throw Hx(),Error(de(418));for(;e;)Vx(t,e),e=es(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wn=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wn=null}}else Wn=$n?es(t.stateNode.nextSibling):null;return!0}function Hx(){for(var t=Wn;t;)t=es(t.nextSibling)}function Za(){Wn=$n=null,vt=!1}function dm(t){Ei===null?Ei=[t]:Ei.push(t)}var QE=Tr.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function uu(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Eg(t){var e=t._init;return e(t._payload)}function Gx(t){function e(h,m){if(t){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=rs(h,m),h.index=0,h.sibling=null,h}function s(h,m,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=2,m)):(h.flags|=1048576,m)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,m,x,S){return m===null||m.tag!==6?(m=Zf(x,h.mode,S),m.return=h,m):(m=r(m,x),m.return=h,m)}function l(h,m,x,S){var M=x.type;return M===Ea?c(h,m,x.props.children,S,x.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zr&&Eg(M)===m.type)?(S=r(m,x.props),S.ref=Ro(h,m,x),S.return=h,S):(S=Ju(x.type,x.key,x.props,null,h.mode,S),S.ref=Ro(h,m,x),S.return=h,S)}function u(h,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Qf(x,h.mode,S),m.return=h,m):(m=r(m,x.children||[]),m.return=h,m)}function c(h,m,x,S,M){return m===null||m.tag!==7?(m=ks(x,h.mode,S,M),m.return=h,m):(m=r(m,x),m.return=h,m)}function d(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zf(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ql:return x=Ju(m.type,m.key,m.props,null,h.mode,x),x.ref=Ro(h,null,m),x.return=h,x;case Ma:return m=Qf(m,h.mode,x),m.return=h,m;case zr:var S=m._init;return d(h,S(m._payload),x)}if(ko(m)||So(m))return m=ks(m,h.mode,x,null),m.return=h,m;uu(h,m)}return null}function f(h,m,x,S){var M=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:o(h,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:return x.key===M?l(h,m,x,S):null;case Ma:return x.key===M?u(h,m,x,S):null;case zr:return M=x._init,f(h,m,M(x._payload),S)}if(ko(x)||So(x))return M!==null?null:c(h,m,x,S,null);uu(h,x)}return null}function p(h,m,x,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,o(m,h,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ql:return h=h.get(S.key===null?x:S.key)||null,l(m,h,S,M);case Ma:return h=h.get(S.key===null?x:S.key)||null,u(m,h,S,M);case zr:var T=S._init;return p(h,m,x,T(S._payload),M)}if(ko(S)||So(S))return h=h.get(x)||null,c(m,h,S,M,null);uu(m,S)}return null}function _(h,m,x,S){for(var M=null,T=null,w=m,y=m=0,R=null;w!==null&&y<x.length;y++){w.index>y?(R=w,w=null):R=w.sibling;var P=f(h,w,x[y],S);if(P===null){w===null&&(w=R);break}t&&w&&P.alternate===null&&e(h,w),m=s(P,m,y),T===null?M=P:T.sibling=P,T=P,w=R}if(y===x.length)return n(h,w),vt&&Ts(h,y),M;if(w===null){for(;y<x.length;y++)w=d(h,x[y],S),w!==null&&(m=s(w,m,y),T===null?M=w:T.sibling=w,T=w);return vt&&Ts(h,y),M}for(w=i(h,w);y<x.length;y++)R=p(w,h,y,x[y],S),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?y:R.key),m=s(R,m,y),T===null?M=R:T.sibling=R,T=R);return t&&w.forEach(function(L){return e(h,L)}),vt&&Ts(h,y),M}function v(h,m,x,S){var M=So(x);if(typeof M!="function")throw Error(de(150));if(x=M.call(x),x==null)throw Error(de(151));for(var T=M=null,w=m,y=m=0,R=null,P=x.next();w!==null&&!P.done;y++,P=x.next()){w.index>y?(R=w,w=null):R=w.sibling;var L=f(h,w,P.value,S);if(L===null){w===null&&(w=R);break}t&&w&&L.alternate===null&&e(h,w),m=s(L,m,y),T===null?M=L:T.sibling=L,T=L,w=R}if(P.done)return n(h,w),vt&&Ts(h,y),M;if(w===null){for(;!P.done;y++,P=x.next())P=d(h,P.value,S),P!==null&&(m=s(P,m,y),T===null?M=P:T.sibling=P,T=P);return vt&&Ts(h,y),M}for(w=i(h,w);!P.done;y++,P=x.next())P=p(w,h,y,P.value,S),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?y:P.key),m=s(P,m,y),T===null?M=P:T.sibling=P,T=P);return t&&w.forEach(function(F){return e(h,F)}),vt&&Ts(h,y),M}function g(h,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Ea&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:e:{for(var M=x.key,T=m;T!==null;){if(T.key===M){if(M=x.type,M===Ea){if(T.tag===7){n(h,T.sibling),m=r(T,x.props.children),m.return=h,h=m;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zr&&Eg(M)===T.type){n(h,T.sibling),m=r(T,x.props),m.ref=Ro(h,T,x),m.return=h,h=m;break e}n(h,T);break}else e(h,T);T=T.sibling}x.type===Ea?(m=ks(x.props.children,h.mode,S,x.key),m.return=h,h=m):(S=Ju(x.type,x.key,x.props,null,h.mode,S),S.ref=Ro(h,m,x),S.return=h,h=S)}return a(h);case Ma:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),m=r(m,x.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Qf(x,h.mode,S),m.return=h,h=m}return a(h);case zr:return T=x._init,g(h,m,T(x._payload),S)}if(ko(x))return _(h,m,x,S);if(So(x))return v(h,m,x,S);uu(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,x),m.return=h,h=m):(n(h,m),m=Zf(x,h.mode,S),m.return=h,h=m),a(h)):n(h,m)}return g}var Qa=Gx(!0),Wx=Gx(!1),Rc=ps(null),Ac=null,La=null,hm=null;function pm(){hm=La=Ac=null}function mm(t){var e=Rc.current;_t(Rc),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Va(t,e){Ac=t,hm=La=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function pi(t){var e=t._currentValue;if(hm!==t)if(t={context:t,memoizedValue:e,next:null},La===null){if(Ac===null)throw Error(de(308));La=t,Ac.dependencies={lanes:0,firstContext:t}}else La=La.next=t;return e}var Ds=null;function gm(t){Ds===null?Ds=[t]:Ds.push(t)}function Xx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gm(e)):(n.next=r.next,r.next=n),e.interleaved=n,vr(t,i)}function vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function _m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vr(t,n)}return r=i.interleaved,r===null?(e.next=e,gm(i)):(e.next=r.next,r.next=e),i.interleaved=e,vr(t,n)}function $u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nm(t,n)}}function wg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,i){var r=t.updateQueue;Vr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,v=o;switch(f=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=bt({},d,f);break e;case 2:Vr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ys|=a,t.lanes=a,t.memoizedState=d}}function Tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var zl={},Yi=ps(zl),_l=ps(zl),vl=ps(zl);function Is(t){if(t===zl)throw Error(de(174));return t}function vm(t,e){switch(ht(vl,e),ht(_l,t),ht(Yi,zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eh(e,t)}_t(Yi),ht(Yi,e)}function Ja(){_t(Yi),_t(_l),_t(vl)}function $x(t){Is(vl.current);var e=Is(Yi.current),n=eh(e,t.type);e!==n&&(ht(_l,t),ht(Yi,n))}function xm(t){_l.current===t&&(_t(Yi),_t(_l))}var Et=ps(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xf=[];function ym(){for(var t=0;t<Xf.length;t++)Xf[t]._workInProgressVersionPrimary=null;Xf.length=0}var qu=Tr.ReactCurrentDispatcher,Yf=Tr.ReactCurrentBatchConfig,Xs=0,Rt=null,Wt=null,jt=null,Pc=!1,Zo=!1,xl=0,JE=0;function an(){throw Error(de(321))}function Sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ci(t[n],e[n]))return!1;return!0}function Mm(t,e,n,i,r,s){if(Xs=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qu.current=t===null||t.memoizedState===null?iw:rw,t=n(i,r),Zo){s=0;do{if(Zo=!1,xl=0,25<=s)throw Error(de(301));s+=1,jt=Wt=null,e.updateQueue=null,qu.current=sw,t=n(i,r)}while(Zo)}if(qu.current=Lc,e=Wt!==null&&Wt.next!==null,Xs=0,jt=Wt=Rt=null,Pc=!1,e)throw Error(de(300));return t}function Em(){var t=xl!==0;return xl=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Rt.memoizedState=jt=t:jt=jt.next=t,jt}function mi(){if(Wt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=jt===null?Rt.memoizedState:jt.next;if(e!==null)jt=e,Wt=t;else{if(t===null)throw Error(de(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},jt===null?Rt.memoizedState=jt=t:jt=jt.next=t}return jt}function yl(t,e){return typeof e=="function"?e(t):e}function $f(t){var e=mi(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Xs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Rt.lanes|=c,Ys|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Ci(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,Ys|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qf(t){var e=mi(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Ci(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function qx(){}function jx(t,e){var n=Rt,i=mi(),r=e(),s=!Ci(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,wm(Qx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Sl(9,Zx.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(de(349));Xs&30||Kx(n,e,r)}return r}function Kx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zx(t,e,n,i){e.value=n,e.getSnapshot=i,Jx(e)&&ey(t)}function Qx(t,e,n){return n(function(){Jx(e)&&ey(t)})}function Jx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ci(t,n)}catch{return!0}}function ey(t){var e=vr(t,1);e!==null&&Ai(e,t,1,-1)}function Rg(t){var e=Fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:t},e.queue=t,t=t.dispatch=nw.bind(null,Rt,t),[e.memoizedState,t]}function Sl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ty(){return mi().memoizedState}function ju(t,e,n,i){var r=Fi();Rt.flags|=t,r.memoizedState=Sl(1|e,n,void 0,i===void 0?null:i)}function af(t,e,n,i){var r=mi();i=i===void 0?null:i;var s=void 0;if(Wt!==null){var a=Wt.memoizedState;if(s=a.destroy,i!==null&&Sm(i,a.deps)){r.memoizedState=Sl(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=Sl(1|e,n,s,i)}function Ag(t,e){return ju(8390656,8,t,e)}function wm(t,e){return af(2048,8,t,e)}function ny(t,e){return af(4,2,t,e)}function iy(t,e){return af(4,4,t,e)}function ry(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sy(t,e,n){return n=n!=null?n.concat([t]):null,af(4,4,ry.bind(null,e,t),n)}function Tm(){}function ay(t,e){var n=mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function oy(t,e){var n=mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ly(t,e,n){return Xs&21?(Ci(n,e)||(n=hx(),Rt.lanes|=n,Ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function ew(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Yf.transition;Yf.transition={};try{t(!1),e()}finally{at=n,Yf.transition=i}}function uy(){return mi().memoizedState}function tw(t,e,n){var i=is(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},cy(t))fy(e,n);else if(n=Xx(t,e,n,i),n!==null){var r=yn();Ai(n,t,i,r),dy(n,e,i)}}function nw(t,e,n){var i=is(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(cy(t))fy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Ci(o,a)){var l=e.interleaved;l===null?(r.next=r,gm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Xx(t,e,r,i),n!==null&&(r=yn(),Ai(n,t,i,r),dy(n,e,i))}}function cy(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function fy(t,e){Zo=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nm(t,n)}}var Lc={readContext:pi,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},iw={readContext:pi,useCallback:function(t,e){return Fi().memoizedState=[t,e===void 0?null:e],t},useContext:pi,useEffect:Ag,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ju(4194308,4,ry.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return ju(4,2,t,e)},useMemo:function(t,e){var n=Fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tw.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=Fi();return t={current:t},e.memoizedState=t},useState:Rg,useDebugValue:Tm,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=Rg(!1),e=t[0];return t=ew.bind(null,t[1]),Fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=Fi();if(vt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Kt===null)throw Error(de(349));Xs&30||Kx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ag(Qx.bind(null,i,s,t),[t]),i.flags|=2048,Sl(9,Zx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Fi(),e=Kt.identifierPrefix;if(vt){var n=cr,i=ur;n=(i&~(1<<32-Ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rw={readContext:pi,useCallback:ay,useContext:pi,useEffect:wm,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:iy,useMemo:oy,useReducer:$f,useRef:ty,useState:function(){return $f(yl)},useDebugValue:Tm,useDeferredValue:function(t){var e=mi();return ly(e,Wt.memoizedState,t)},useTransition:function(){var t=$f(yl)[0],e=mi().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:jx,useId:uy,unstable_isNewReconciler:!1},sw={readContext:pi,useCallback:ay,useContext:pi,useEffect:wm,useImperativeHandle:sy,useInsertionEffect:ny,useLayoutEffect:iy,useMemo:oy,useReducer:qf,useRef:ty,useState:function(){return qf(yl)},useDebugValue:Tm,useDeferredValue:function(t){var e=mi();return Wt===null?e.memoizedState=t:ly(e,Wt.memoizedState,t)},useTransition:function(){var t=qf(yl)[0],e=mi().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:jx,useId:uy,unstable_isNewReconciler:!1};function Si(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var of={isMounted:function(t){return(t=t._reactInternals)?Qs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=is(t),s=dr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Ai(e,t,r,i),$u(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=is(t),s=dr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Ai(e,t,r,i),$u(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=is(t),r=dr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ts(t,r,i),e!==null&&(Ai(e,t,i,n),$u(e,t,i))}};function bg(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!hl(n,i)||!hl(r,s):!0}function hy(t,e,n){var i=!1,r=ls,s=e.contextType;return typeof s=="object"&&s!==null?s=pi(s):(r=Cn(e)?Gs:mn.current,i=e.contextTypes,s=(i=i!=null)?Ka(t,r):ls),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=of,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&of.enqueueReplaceState(e,e.state,null)}function Mh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_m(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=pi(s):(s=Cn(e)?Gs:mn.current,r.context=Ka(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&of.enqueueReplaceState(r,r.state,null),bc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=IM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aw=typeof WeakMap=="function"?WeakMap:Map;function py(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ic||(Ic=!0,Ih=i),Eh(t,e)},n}function my(t,e,n){n=dr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Eh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eh(t,e),typeof i!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Pg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new aw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yw.bind(null,t,e,n),e.then(t,t))}function Lg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var ow=Tr.ReactCurrentOwner,An=!1;function vn(t,e,n,i){e.child=t===null?Wx(e,null,n,i):Qa(e,t.child,n,i)}function Ig(t,e,n,i,r){n=n.render;var s=e.ref;return Va(e,r),i=Mm(t,e,n,i,s,r),n=Em(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xr(t,e,r)):(vt&&n&&cm(e),e.flags|=1,vn(t,e,i,r),e.child)}function Ng(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gy(t,e,s,i,r)):(t=Ju(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(a,i)&&t.ref===e.ref)return xr(t,e,r)}return e.flags|=1,t=rs(s,i),t.ref=e.ref,t.return=e,e.child=t}function gy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(hl(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,xr(t,e,r)}return wh(t,e,n,i,r)}function _y(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ia,Vn),Vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ia,Vn),Vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ia,Vn),Vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ia,Vn),Vn|=i;return vn(t,e,r,n),e.child}function vy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wh(t,e,n,i,r){var s=Cn(n)?Gs:mn.current;return s=Ka(e,s),Va(e,r),n=Mm(t,e,n,i,s,r),i=Em(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xr(t,e,r)):(vt&&i&&cm(e),e.flags|=1,vn(t,e,n,r),e.child)}function Ug(t,e,n,i,r){if(Cn(n)){var s=!0;Ec(e)}else s=!1;if(Va(e,r),e.stateNode===null)Ku(t,e),hy(e,n,i),Mh(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=pi(u):(u=Cn(n)?Gs:mn.current,u=Ka(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Cg(e,a,i,u),Vr=!1;var f=e.memoizedState;a.state=f,bc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||bn.current||Vr?(typeof c=="function"&&(Sh(e,n,c,i),l=e.memoizedState),(o=Vr||bg(e,n,o,i,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Yx(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Si(e.type,o),a.props=u,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=pi(l):(l=Cn(n)?Gs:mn.current,l=Ka(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Cg(e,a,i,l),Vr=!1,f=e.memoizedState,a.state=f,bc(e,i,a,r);var _=e.memoizedState;o!==d||f!==_||bn.current||Vr?(typeof p=="function"&&(Sh(e,n,p,i),_=e.memoizedState),(u=Vr||bg(e,n,u,i,f,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Th(t,e,n,i,s,r)}function Th(t,e,n,i,r,s){vy(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&yg(e,n,!1),xr(t,e,s);i=e.stateNode,ow.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Qa(e,t.child,null,s),e.child=Qa(e,null,o,s)):vn(t,e,o,s),e.memoizedState=i.state,r&&yg(e,n,!0),e.child}function xy(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),vm(t,e.containerInfo)}function Fg(t,e,n,i,r){return Za(),dm(r),e.flags|=256,vn(t,e,n,i),e.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function yy(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(Et,r&1),t===null)return xh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=cf(a,i,0,null),t=ks(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ah(n),e.memoizedState=Rh,t):Rm(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return lw(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=rs(o,s):(s=ks(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ah(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Rh,i}return s=t.child,t=s.sibling,i=rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rm(t,e){return e=cf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cu(t,e,n,i){return i!==null&&dm(i),Qa(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lw(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=jf(Error(de(422))),cu(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cf({mode:"visible",children:i.children},r,0,null),s=ks(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qa(e,t.child,null,a),e.child.memoizedState=Ah(a),e.memoizedState=Rh,s);if(!(e.mode&1))return cu(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=jf(s,i,void 0),cu(t,e,a,i)}if(o=(a&t.childLanes)!==0,An||o){if(i=Kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vr(t,r),Ai(i,t,r,-1))}return Dm(),i=jf(Error(de(421))),cu(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Sw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Wn=es(r.nextSibling),$n=e,vt=!0,Ei=null,t!==null&&(ai[oi++]=ur,ai[oi++]=cr,ai[oi++]=Ws,ur=t.id,cr=t.overflow,Ws=e),e=Rm(e,i.children),e.flags|=4096,e)}function Og(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yh(t.return,e,n)}function Kf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,n,e);else if(t.tag===19)Og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kf(e,!0,n,null,s);break;case"together":Kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=rs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uw(t,e,n){switch(e.tag){case 3:xy(e),Za();break;case 5:$x(e);break;case 1:Cn(e.type)&&Ec(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?yy(t,e,n):(ht(Et,Et.current&1),t=xr(t,e,n),t!==null?t.sibling:null);ht(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,_y(t,e,n)}return xr(t,e,n)}var My,bh,Ey,wy;My=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};Ey=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Is(Yi.current);var s=null;switch(n){case"input":r=Kd(t,r),i=Kd(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Jd(t,r),i=Jd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}th(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(al.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(al.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};wy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cw(t,e,n){var i=e.pendingProps;switch(fm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Cn(e.type)&&Mc(),on(e),null;case 3:return i=e.stateNode,Ja(),_t(bn),_t(mn),ym(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ei!==null&&(Fh(Ei),Ei=null))),bh(t,e),on(e),null;case 5:xm(e);var r=Is(vl.current);if(n=e.type,t!==null&&e.stateNode!=null)Ey(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return on(e),null}if(t=Is(Yi.current),lu(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bi]=e,i[gl]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<zo.length;r++)gt(zo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Y0(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":q0(i,s),gt("invalid",i)}th(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ou(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ou(i.textContent,o,t),r=["children",""+o]):al.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Jl(i),$0(i,s,!0);break;case"textarea":Jl(i),j0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Bi]=e,t[gl]=i,My(t,e,!1,!1),e.stateNode=t;e:{switch(a=nh(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<zo.length;r++)gt(zo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Y0(t,i),r=Kd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":q0(t,i),r=Jd(t,i),gt("invalid",t);break;default:r=i}th(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?tx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ol(t,l):typeof l=="number"&&ol(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(al.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Kp(t,s,l,a))}switch(n){case"input":Jl(t),$0(t,i,!1);break;case"textarea":Jl(t),j0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+os(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Oa(t,!!i.multiple,s,!1):i.defaultValue!=null&&Oa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)wy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Is(vl.current),Is(Yi.current),lu(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bi]=e,(s=i.nodeValue!==n)&&(t=$n,t!==null))switch(t.tag){case 3:ou(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ou(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bi]=e,e.stateNode=i}return on(e),null;case 13:if(_t(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Wn!==null&&e.mode&1&&!(e.flags&128))Hx(),Za(),e.flags|=98560,s=!1;else if(s=lu(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[Bi]=e}else Za(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else Ei!==null&&(Fh(Ei),Ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Xt===0&&(Xt=3):Dm())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return Ja(),bh(t,e),t===null&&pl(e.stateNode.containerInfo),on(e),null;case 10:return mm(e.type._context),on(e),null;case 17:return Cn(e.type)&&Mc(),on(e),null;case 19:if(_t(Et),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ao(s,!1);else{if(Xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Cc(t),a!==null){for(e.flags|=128,Ao(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>to&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return on(e),null}else 2*kt()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=Et.current,ht(Et,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return Lm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Vn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function fw(t,e){switch(fm(e),e.tag){case 1:return Cn(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ja(),_t(bn),_t(mn),ym(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(_t(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Za()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Et),null;case 4:return Ja(),null;case 10:return mm(e.type._context),null;case 22:case 23:return Lm(),null;case 24:return null;default:return null}}var fu=!1,cn=!1,dw=typeof WeakSet=="function"?WeakSet:Set,be=null;function Da(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Ch(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var kg=!1;function hw(t,e){if(dh=vc,t=Cx(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hh={focusedElem:t,selectionRange:n},vc=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,g=_.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Si(e.type,v),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){Lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=kg,kg=!1,_}function Qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ch(e,n,s)}r=r.next}while(r!==i)}}function lf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ty(t){var e=t.alternate;e!==null&&(t.alternate=null,Ty(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bi],delete e[gl],delete e[gh],delete e[jE],delete e[KE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ry(t){return t.tag===5||t.tag===3||t.tag===4}function Bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ry(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(Lh(t,e,n),t=t.sibling;t!==null;)Lh(t,e,n),t=t.sibling}function Dh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}var Jt=null,Mi=!1;function Ir(t,e,n){for(n=n.child;n!==null;)Ay(t,e,n),n=n.sibling}function Ay(t,e,n){if(Xi&&typeof Xi.onCommitFiberUnmount=="function")try{Xi.onCommitFiberUnmount(Jc,n)}catch{}switch(n.tag){case 5:cn||Da(n,e);case 6:var i=Jt,r=Mi;Jt=null,Ir(t,e,n),Jt=i,Mi=r,Jt!==null&&(Mi?(t=Jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Jt.removeChild(n.stateNode));break;case 18:Jt!==null&&(Mi?(t=Jt,n=n.stateNode,t.nodeType===8?Gf(t.parentNode,n):t.nodeType===1&&Gf(t,n),fl(t)):Gf(Jt,n.stateNode));break;case 4:i=Jt,r=Mi,Jt=n.stateNode.containerInfo,Mi=!0,Ir(t,e,n),Jt=i,Mi=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ch(n,e,a),r=r.next}while(r!==i)}Ir(t,e,n);break;case 1:if(!cn&&(Da(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Lt(n,e,o)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Ir(t,e,n),cn=i):Ir(t,e,n);break;default:Ir(t,e,n)}}function zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dw),e.forEach(function(i){var r=Mw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function _i(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Jt=o.stateNode,Mi=!1;break e;case 3:Jt=o.stateNode.containerInfo,Mi=!0;break e;case 4:Jt=o.stateNode.containerInfo,Mi=!0;break e}o=o.return}if(Jt===null)throw Error(de(160));Ay(s,a,r),Jt=null,Mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)by(e,t),e=e.sibling}function by(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_i(e,t),Ii(t),i&4){try{Qo(3,t,t.return),lf(3,t)}catch(v){Lt(t,t.return,v)}try{Qo(5,t,t.return)}catch(v){Lt(t,t.return,v)}}break;case 1:_i(e,t),Ii(t),i&512&&n!==null&&Da(n,n.return);break;case 5:if(_i(e,t),Ii(t),i&512&&n!==null&&Da(n,n.return),t.flags&32){var r=t.stateNode;try{ol(r,"")}catch(v){Lt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Kv(r,s),nh(o,a);var u=nh(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?tx(r,d):c==="dangerouslySetInnerHTML"?Jv(r,d):c==="children"?ol(r,d):Kp(r,c,d,u)}switch(o){case"input":Zd(r,s);break;case"textarea":Zv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Oa(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Oa(r,!!s.multiple,s.defaultValue,!0):Oa(r,!!s.multiple,s.multiple?[]:"",!1))}r[gl]=s}catch(v){Lt(t,t.return,v)}}break;case 6:if(_i(e,t),Ii(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Lt(t,t.return,v)}}break;case 3:if(_i(e,t),Ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(v){Lt(t,t.return,v)}break;case 4:_i(e,t),Ii(t);break;case 13:_i(e,t),Ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cm=kt())),i&4&&zg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(u=cn)||c,_i(e,t),cn=u):_i(e,t),Ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(be=t,c=t.child;c!==null;){for(d=be=c;be!==null;){switch(f=be,p=f.child,f.tag){case 0:case 11:case 14:case 15:Qo(4,f,f.return);break;case 1:Da(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Lt(i,n,v)}}break;case 5:Da(f,f.return);break;case 22:if(f.memoizedState!==null){Hg(d);continue}}p!==null?(p.return=f,be=p):Hg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ex("display",a))}catch(v){Lt(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Lt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_i(e,t),Ii(t),i&4&&zg(t);break;case 21:break;default:_i(e,t),Ii(t)}}function Ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ry(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ol(r,""),i.flags&=-33);var s=Bg(t);Dh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Bg(t);Lh(t,o,a);break;default:throw Error(de(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pw(t,e,n){be=t,Cy(t)}function Cy(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||fu;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||cn;o=fu;var u=cn;if(fu=a,(cn=l)&&!u)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?Gg(r):l!==null?(l.return=a,be=l):Gg(r);for(;s!==null;)be=s,Cy(s),s=s.sibling;be=r,fu=o,cn=u}Vg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Vg(t)}}function Vg(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||lf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tg(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&fl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}cn||e.flags&512&&Ph(e)}catch(f){Lt(e,e.return,f)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Hg(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Gg(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lf(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{Ph(e)}catch(l){Lt(e,s,l)}break;case 5:var a=e.return;try{Ph(e)}catch(l){Lt(e,a,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var mw=Math.ceil,Dc=Tr.ReactCurrentDispatcher,Am=Tr.ReactCurrentOwner,hi=Tr.ReactCurrentBatchConfig,et=0,Kt=null,Ht=null,tn=0,Vn=0,Ia=ps(0),Xt=0,Ml=null,Ys=0,uf=0,bm=0,Jo=null,Tn=null,Cm=0,to=1/0,sr=null,Ic=!1,Ih=null,ns=null,du=!1,Yr=null,Nc=0,el=0,Nh=null,Zu=-1,Qu=0;function yn(){return et&6?kt():Zu!==-1?Zu:Zu=kt()}function is(t){return t.mode&1?et&2&&tn!==0?tn&-tn:QE.transition!==null?(Qu===0&&(Qu=hx()),Qu):(t=at,t!==0||(t=window.event,t=t===void 0?16:yx(t.type)),t):1}function Ai(t,e,n,i){if(50<el)throw el=0,Nh=null,Error(de(185));Ol(t,n,i),(!(et&2)||t!==Kt)&&(t===Kt&&(!(et&2)&&(uf|=n),Xt===4&&Gr(t,tn)),Pn(t,i),n===1&&et===0&&!(e.mode&1)&&(to=kt()+500,sf&&ms()))}function Pn(t,e){var n=t.callbackNode;QM(t,e);var i=_c(t,t===Kt?tn:0);if(i===0)n!==null&&Q0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Q0(n),e===1)t.tag===0?ZE(Wg.bind(null,t)):Bx(Wg.bind(null,t)),$E(function(){!(et&6)&&ms()}),n=null;else{switch(px(i)){case 1:n=tm;break;case 4:n=fx;break;case 16:n=gc;break;case 536870912:n=dx;break;default:n=gc}n=Oy(n,Py.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Py(t,e){if(Zu=-1,Qu=0,et&6)throw Error(de(327));var n=t.callbackNode;if(Ha()&&t.callbackNode!==n)return null;var i=_c(t,t===Kt?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Uc(t,i);else{e=i;var r=et;et|=2;var s=Dy();(Kt!==t||tn!==e)&&(sr=null,to=kt()+500,Os(t,e));do try{vw();break}catch(o){Ly(t,o)}while(!0);pm(),Dc.current=s,et=r,Ht!==null?e=0:(Kt=null,tn=0,e=Xt)}if(e!==0){if(e===2&&(r=oh(t),r!==0&&(i=r,e=Uh(t,r))),e===1)throw n=Ml,Os(t,0),Gr(t,i),Pn(t,kt()),n;if(e===6)Gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!gw(r)&&(e=Uc(t,i),e===2&&(s=oh(t),s!==0&&(i=s,e=Uh(t,s))),e===1))throw n=Ml,Os(t,0),Gr(t,i),Pn(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Rs(t,Tn,sr);break;case 3:if(Gr(t,i),(i&130023424)===i&&(e=Cm+500-kt(),10<e)){if(_c(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=mh(Rs.bind(null,t,Tn,sr),e);break}Rs(t,Tn,sr);break;case 4:if(Gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Ri(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mw(i/1960))-i,10<i){t.timeoutHandle=mh(Rs.bind(null,t,Tn,sr),i);break}Rs(t,Tn,sr);break;case 5:Rs(t,Tn,sr);break;default:throw Error(de(329))}}}return Pn(t,kt()),t.callbackNode===n?Py.bind(null,t):null}function Uh(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Os(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&Fh(e)),t}function Fh(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function gw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~bm,e&=~uf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ri(e),i=1<<n;t[n]=-1,e&=~i}}function Wg(t){if(et&6)throw Error(de(327));Ha();var e=_c(t,0);if(!(e&1))return Pn(t,kt()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var i=oh(t);i!==0&&(e=i,n=Uh(t,i))}if(n===1)throw n=Ml,Os(t,0),Gr(t,e),Pn(t,kt()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rs(t,Tn,sr),Pn(t,kt()),null}function Pm(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(to=kt()+500,sf&&ms())}}function $s(t){Yr!==null&&Yr.tag===0&&!(et&6)&&Ha();var e=et;et|=1;var n=hi.transition,i=at;try{if(hi.transition=null,at=1,t)return t()}finally{at=i,hi.transition=n,et=e,!(et&6)&&ms()}}function Lm(){Vn=Ia.current,_t(Ia)}function Os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YE(n)),Ht!==null)for(n=Ht.return;n!==null;){var i=n;switch(fm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:Ja(),_t(bn),_t(mn),ym();break;case 5:xm(i);break;case 4:Ja();break;case 13:_t(Et);break;case 19:_t(Et);break;case 10:mm(i.type._context);break;case 22:case 23:Lm()}n=n.return}if(Kt=t,Ht=t=rs(t.current,null),tn=Vn=e,Xt=0,Ml=null,bm=uf=Ys=0,Tn=Jo=null,Ds!==null){for(e=0;e<Ds.length;e++)if(n=Ds[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ds=null}return t}function Ly(t,e){do{var n=Ht;try{if(pm(),qu.current=Lc,Pc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pc=!1}if(Xs=0,jt=Wt=Rt=null,Zo=!1,xl=0,Am.current=null,n===null||n.return===null){Xt=1,Ml=e,Ht=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=tn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Lg(a);if(p!==null){p.flags&=-257,Dg(p,a,o,s,e),p.mode&1&&Pg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Pg(s,u,e),Dm();break e}l=Error(de(426))}}else if(vt&&o.mode&1){var g=Lg(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Dg(g,a,o,s,e),dm(eo(l,o));break e}}s=l=eo(l,o),Xt!==4&&(Xt=2),Jo===null?Jo=[s]:Jo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=py(s,l,e);wg(s,h);break e;case 1:o=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ns===null||!ns.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=my(s,o,e);wg(s,S);break e}}s=s.return}while(s!==null)}Ny(n)}catch(M){e=M,Ht===n&&n!==null&&(Ht=n=n.return);continue}break}while(!0)}function Dy(){var t=Dc.current;return Dc.current=Lc,t===null?Lc:t}function Dm(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Kt===null||!(Ys&268435455)&&!(uf&268435455)||Gr(Kt,tn)}function Uc(t,e){var n=et;et|=2;var i=Dy();(Kt!==t||tn!==e)&&(sr=null,Os(t,e));do try{_w();break}catch(r){Ly(t,r)}while(!0);if(pm(),et=n,Dc.current=i,Ht!==null)throw Error(de(261));return Kt=null,tn=0,Xt}function _w(){for(;Ht!==null;)Iy(Ht)}function vw(){for(;Ht!==null&&!GM();)Iy(Ht)}function Iy(t){var e=Fy(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,e===null?Ny(t):Ht=e,Am.current=null}function Ny(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fw(n,e),n!==null){n.flags&=32767,Ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Ht=null;return}}else if(n=cw(n,e,Vn),n!==null){Ht=n;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=t}while(e!==null);Xt===0&&(Xt=5)}function Rs(t,e,n){var i=at,r=hi.transition;try{hi.transition=null,at=1,xw(t,e,n,i)}finally{hi.transition=r,at=i}return null}function xw(t,e,n,i){do Ha();while(Yr!==null);if(et&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JM(t,s),t===Kt&&(Ht=Kt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||du||(du=!0,Oy(gc,function(){return Ha(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=hi.transition,hi.transition=null;var a=at;at=1;var o=et;et|=4,Am.current=null,hw(t,n),by(n,t),BE(hh),vc=!!dh,hh=dh=null,t.current=n,pw(n),WM(),et=o,at=a,hi.transition=s}else t.current=n;if(du&&(du=!1,Yr=t,Nc=r),s=t.pendingLanes,s===0&&(ns=null),$M(n.stateNode),Pn(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ic)throw Ic=!1,t=Ih,Ih=null,t;return Nc&1&&t.tag!==0&&Ha(),s=t.pendingLanes,s&1?t===Nh?el++:(el=0,Nh=t):el=0,ms(),null}function Ha(){if(Yr!==null){var t=px(Nc),e=hi.transition,n=at;try{if(hi.transition=null,at=16>t?16:t,Yr===null)var i=!1;else{if(t=Yr,Yr=null,Nc=0,et&6)throw Error(de(331));var r=et;for(et|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(be=u;be!==null;){var c=be;switch(c.tag){case 0:case 11:case 15:Qo(8,c,s)}var d=c.child;if(d!==null)d.return=c,be=d;else for(;be!==null;){c=be;var f=c.sibling,p=c.return;if(Ty(c),c===u){be=null;break}if(f!==null){f.return=p,be=f;break}be=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,be=h;break e}be=s.return}}var m=t.current;for(be=m;be!==null;){a=be;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,be=x;else e:for(a=m;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:lf(9,o)}}catch(M){Lt(o,o.return,M)}if(o===a){be=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,be=S;break e}be=o.return}}if(et=r,ms(),Xi&&typeof Xi.onPostCommitFiberRoot=="function")try{Xi.onPostCommitFiberRoot(Jc,t)}catch{}i=!0}return i}finally{at=n,hi.transition=e}}return!1}function Xg(t,e,n){e=eo(n,e),e=py(t,e,1),t=ts(t,e,1),e=yn(),t!==null&&(Ol(t,1,e),Pn(t,e))}function Lt(t,e,n){if(t.tag===3)Xg(t,t,n);else for(;e!==null;){if(e.tag===3){Xg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){t=eo(n,t),t=my(e,t,1),e=ts(e,t,1),t=yn(),e!==null&&(Ol(e,1,t),Pn(e,t));break}}e=e.return}}function yw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(tn&n)===n&&(Xt===4||Xt===3&&(tn&130023424)===tn&&500>kt()-Cm?Os(t,0):bm|=n),Pn(t,e)}function Uy(t,e){e===0&&(t.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var n=yn();t=vr(t,e),t!==null&&(Ol(t,e,n),Pn(t,n))}function Sw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uy(t,n)}function Mw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),Uy(t,n)}var Fy;Fy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,uw(t,e,n);An=!!(t.flags&131072)}else An=!1,vt&&e.flags&1048576&&zx(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ku(t,e),t=e.pendingProps;var r=Ka(e,mn.current);Va(e,n),r=Mm(null,e,i,t,r,n);var s=Em();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Cn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_m(e),r.updater=of,e.stateNode=r,r._reactInternals=e,Mh(e,i,t,n),e=Th(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&cm(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ku(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ww(i),t=Si(i,t),r){case 0:e=wh(null,e,i,t,n);break e;case 1:e=Ug(null,e,i,t,n);break e;case 11:e=Ig(null,e,i,t,n);break e;case 14:e=Ng(null,e,i,Si(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),wh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Ug(t,e,i,r,n);case 3:e:{if(xy(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yx(t,e),bc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(de(423)),e),e=Fg(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(de(424)),e),e=Fg(t,e,i,n,r);break e}else for(Wn=es(e.stateNode.containerInfo.firstChild),$n=e,vt=!0,Ei=null,n=Wx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Za(),i===r){e=xr(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return $x(e),t===null&&xh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ph(i,r)?a=null:s!==null&&ph(i,s)&&(e.flags|=32),vy(t,e),vn(t,e,a,n),e.child;case 6:return t===null&&xh(e),null;case 13:return yy(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qa(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Ig(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Rc,i._currentValue),i._currentValue=a,s!==null)if(Ci(s.value,a)){if(s.children===r.children&&!bn.current){e=xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=dr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),yh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Va(e,n),r=pi(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=Si(i,e.pendingProps),r=Si(i.type,r),Ng(t,e,i,r,n);case 15:return gy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Ku(t,e),e.tag=1,Cn(i)?(t=!0,Ec(e)):t=!1,Va(e,n),hy(e,i,r),Mh(e,i,r,n),Th(null,e,i,!0,t,n);case 19:return Sy(t,e,n);case 22:return _y(t,e,n)}throw Error(de(156,e.tag))};function Oy(t,e){return cx(t,e)}function Ew(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,e,n,i){return new Ew(t,e,n,i)}function Im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ww(t){if(typeof t=="function")return Im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qp)return 11;if(t===Jp)return 14}return 2}function rs(t,e){var n=t.alternate;return n===null?(n=ci(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ju(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Im(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ea:return ks(n.children,r,s,e);case Zp:a=8,r|=8;break;case Yd:return t=ci(12,n,e,r|2),t.elementType=Yd,t.lanes=s,t;case $d:return t=ci(13,n,e,r),t.elementType=$d,t.lanes=s,t;case qd:return t=ci(19,n,e,r),t.elementType=qd,t.lanes=s,t;case $v:return cf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xv:a=10;break e;case Yv:a=9;break e;case Qp:a=11;break e;case Jp:a=14;break e;case zr:a=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=ci(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ks(t,e,n,i){return t=ci(7,t,i,e),t.lanes=n,t}function cf(t,e,n,i){return t=ci(22,t,i,e),t.elementType=$v,t.lanes=n,t.stateNode={isHidden:!1},t}function Zf(t,e,n){return t=ci(6,t,null,e),t.lanes=n,t}function Qf(t,e,n){return e=ci(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Df(0),this.expirationTimes=Df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Df(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nm(t,e,n,i,r,s,a,o,l){return t=new Tw(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ci(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_m(s),t}function Rw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ma,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ky(t){if(!t)return ls;t=t._reactInternals;e:{if(Qs(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(Cn(n))return kx(t,n,e)}return e}function By(t,e,n,i,r,s,a,o,l){return t=Nm(n,i,!0,t,r,s,a,o,l),t.context=ky(null),n=t.current,i=yn(),r=is(n),s=dr(i,r),s.callback=e??null,ts(n,s,r),t.current.lanes=r,Ol(t,r,i),Pn(t,i),t}function ff(t,e,n,i){var r=e.current,s=yn(),a=is(r);return n=ky(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ts(r,e,a),t!==null&&(Ai(t,r,a,s),$u(t,r,a)),a}function Fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Um(t,e){Yg(t,e),(t=t.alternate)&&Yg(t,e)}function Aw(){return null}var zy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fm(t){this._internalRoot=t}df.prototype.render=Fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));ff(t,e,null,null)};df.prototype.unmount=Fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$s(function(){ff(null,t,null,null)}),e[_r]=null}};function df(t){this._internalRoot=t}df.prototype.unstable_scheduleHydration=function(t){if(t){var e=_x();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hr.length&&e!==0&&e<Hr[n].priority;n++);Hr.splice(n,0,t),n===0&&xx(t)}};function Om(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $g(){}function bw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Fc(a);s.call(u)}}var a=By(e,i,t,0,null,!1,!1,"",$g);return t._reactRootContainer=a,t[_r]=a.current,pl(t.nodeType===8?t.parentNode:t),$s(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Fc(l);o.call(u)}}var l=Nm(t,0,!1,null,null,!1,!1,"",$g);return t._reactRootContainer=l,t[_r]=l.current,pl(t.nodeType===8?t.parentNode:t),$s(function(){ff(e,l,n,i)}),l}function pf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Fc(a);o.call(l)}}ff(e,a,t,r)}else a=bw(n,e,t,r,i);return Fc(a)}mx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(nm(e,n|1),Pn(e,kt()),!(et&6)&&(to=kt()+500,ms()))}break;case 13:$s(function(){var i=vr(t,1);if(i!==null){var r=yn();Ai(i,t,1,r)}}),Um(t,1)}};im=function(t){if(t.tag===13){var e=vr(t,134217728);if(e!==null){var n=yn();Ai(e,t,134217728,n)}Um(t,134217728)}};gx=function(t){if(t.tag===13){var e=is(t),n=vr(t,e);if(n!==null){var i=yn();Ai(n,t,e,i)}Um(t,e)}};_x=function(){return at};vx=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};rh=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=rf(i);if(!r)throw Error(de(90));jv(i),Zd(i,r)}}}break;case"textarea":Zv(t,n);break;case"select":e=n.value,e!=null&&Oa(t,!!n.multiple,e,!1)}};rx=Pm;sx=$s;var Cw={usingClientEntryPoint:!1,Events:[Bl,Aa,rf,nx,ix,Pm]},bo={findFiberByHostInstance:Ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pw={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lx(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||Aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Jc=hu.inject(Pw),Xi=hu}catch{}}Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;Qn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Om(e))throw Error(de(200));return Rw(t,e,null,n)};Qn.createRoot=function(t,e){if(!Om(t))throw Error(de(299));var n=!1,i="",r=zy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nm(t,1,!1,null,null,n,!1,i,r),t[_r]=e.current,pl(t.nodeType===8?t.parentNode:t),new Fm(e)};Qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=lx(e),t=t===null?null:t.stateNode,t};Qn.flushSync=function(t){return $s(t)};Qn.hydrate=function(t,e,n){if(!hf(e))throw Error(de(200));return pf(null,t,e,!0,n)};Qn.hydrateRoot=function(t,e,n){if(!Om(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=zy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=By(e,null,t,1,n??null,r,!1,s,a),t[_r]=e.current,pl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new df(e)};Qn.render=function(t,e,n){if(!hf(e))throw Error(de(200));return pf(null,t,e,!1,n)};Qn.unmountComponentAtNode=function(t){if(!hf(t))throw Error(de(40));return t._reactRootContainer?($s(function(){pf(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};Qn.unstable_batchedUpdates=Pm;Qn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hf(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return pf(t,e,n,!1,i)};Qn.version="18.3.1-next-f1338f8080-20240426";function Vy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vy)}catch(t){console.error(t)}}Vy(),Vv.exports=Qn;var Lw=Vv.exports,Hy,qg=Lw;Hy=qg.createRoot,qg.hydrateRoot;/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var km=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Gy=/^[\\/]{2}/;function Dw(t,e){return e+t.replace(/\\/g,"/")}var jg="popstate";function Kg(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Iw(t={}){function e(i,r){var u;let s=(u=r.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||i.location;return Oh("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default",s?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function n(i,r){return typeof r=="string"?r:El(r)}return Uw(e,n,null,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ki(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Nw(){return Math.random().toString(36).substring(2,10)}function Zg(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Oh(t,e,n=null,i,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?mo(e):e,state:n,key:e&&e.key||i||Nw(),mask:r}}function El({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function Uw(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,u=c();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function c(){return(a.state||{idx:null}).idx}function d(){o="POP";let g=c(),h=g==null?null:g-u;u=g,l&&l({action:o,location:v.location,delta:h})}function f(g,h){o="PUSH";let m=Kg(g)?g:Oh(v.location,g,h);u=c()+1;let x=Zg(m,u),S=v.createHref(m.mask||m);try{a.pushState(x,"",S)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(S)}s&&l&&l({action:o,location:v.location,delta:1})}function p(g,h){o="REPLACE";let m=Kg(g)?g:Oh(v.location,g,h);u=c();let x=Zg(m,u),S=v.createHref(m.mask||m);a.replaceState(x,"",S),s&&l&&l({action:o,location:v.location,delta:0})}function _(g){return Fw(r,g)}let v={get action(){return o},get location(){return t(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(jg,d),l=g,()=>{r.removeEventListener(jg,d),l=null}},createHref(g){return e(r,g)},createURL:_,encodeLocation(g){let h=_(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(g){return a.go(g)}};return v}function Fw(t,e,n=!1){let i="http://localhost";t&&(i=t.location.origin!=="null"?t.location.origin:t.location.href),At(i,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:El(e);return r=r.replace(/ $/,"%20"),!n&&Gy.test(r)&&(r=i+r),new URL(r,i)}function Wy(t,e,n="/"){return Ow(t,e,n,!1)}function Ow(t,e,n,i,r){let s=typeof e=="string"?mo(e):e,a=yr(s.pathname||"/",n);if(a==null)return null;let o=kw(t),l=null,u=jw(a);for(let c=0;l==null&&c<o.length;++c)l=qw(o[c],u,i);return l}function kw(t){let e=Xy(t);return Bw(e),e}function Xy(t,e=[],n=[],i="",r=!1){let s=(a,o,l=r,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(i)&&l)return;At(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length)}let d=bi([i,c.relativePath]),f=n.concat(c);a.children&&a.children.length>0&&(At(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Xy(a.children,e,f,d,l)),!(a.path==null&&!a.index)&&e.push({path:d,score:Yw(d,a.index),routesMeta:f.map((p,_)=>{let[v,g]=qy(p.relativePath,p.caseSensitive,_===f.length-1);return{...p,matcher:v,compiledParams:g}})})};return t.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of Yy(a.path))s(a,o,!0,u)}),e}function Yy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Yy(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Bw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$w(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var zw=/^:[\w-]+$/,Vw=3,Hw=2,Gw=1,Ww=10,Xw=-2,Qg=t=>t==="*";function Yw(t,e){let n=t.split("/"),i=n.length;return n.some(Qg)&&(i+=Xw),e&&(i+=Hw),n.filter(r=>!Qg(r)).reduce((r,s)=>r+(zw.test(s)?Vw:s===""?Gw:Ww),i)}function $w(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function qw(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",d={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f=l.matcher&&l.compiledParams?$y(d,c,l.matcher,l.compiledParams):Oc(d,c),p=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=Oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:bi([s,f.pathname]),pathnameBase:Qw(bi([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=bi([s,f.pathnameBase]))}return a}function Oc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=qy(t.path,t.caseSensitive,t.end);return $y(t,e,n,i)}function $y(t,e,n,i){let r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let _=o[f]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[f];return d&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function qy(t,e=!1,n=!0){Ki(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,c)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let d=c.charAt(u+a.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function jw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ki(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function yr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Kw(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?mo(t):t,s;return n?(n=Ky(n),n.startsWith("/")?s=Jg(n.substring(1),"/"):s=Jg(n,e)):s=e,{pathname:s,search:Jw(i),hash:eT(r)}}function Jg(t,e){let n=kc(e).split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Jf(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jy(t){let e=Zw(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Bm(t,e,n,i=!1){let r;typeof t=="string"?r=mo(t):(r={...t},At(!r.pathname||!r.pathname.includes("?"),Jf("?","pathname","search",r)),At(!r.pathname||!r.pathname.includes("#"),Jf("#","pathname","hash",r)),At(!r.search||!r.search.includes("#"),Jf("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=Kw(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Ky=t=>t.replace(/[\\/]{2,}/g,"/"),bi=t=>Ky(t.join("/")),kc=t=>t.replace(/\/+$/,""),Qw=t=>kc(t).replace(/^\/*/,"/"),Jw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,tT=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function nT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function iT(t){let e=t.map(n=>n.route.path).filter(Boolean);return bi(e)||"/"}var Zy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Qy(t,e){let n=t;if(typeof n!="string"||!km.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,r=!1;if(Zy)try{let s=new URL(window.location.href),a=Gy.test(n)?new URL(Dw(n,s.protocol)):new URL(n),o=yr(a.pathname,e);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:r=!0}catch{Ki(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jy=["POST","PUT","PATCH","DELETE"];new Set(Jy);var rT=["GET",...Jy];new Set(rT);var sT=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function aT(t){try{return sT.includes(new URL(t).protocol)}catch{return!1}}var go=G.createContext(null);go.displayName="DataRouter";var mf=G.createContext(null);mf.displayName="DataRouterState";var eS=G.createContext(!1);function oT(){return G.useContext(eS)}var tS=G.createContext({isTransitioning:!1});tS.displayName="ViewTransition";var lT=G.createContext(new Map);lT.displayName="Fetchers";var uT=G.createContext(null);uT.displayName="Await";var gi=G.createContext(null);gi.displayName="Navigation";var Vl=G.createContext(null);Vl.displayName="Location";var Rr=G.createContext({outlet:null,matches:[],isDataRoute:!1});Rr.displayName="Route";var zm=G.createContext(null);zm.displayName="RouteError";var nS="REACT_ROUTER_ERROR",cT="REDIRECT",fT="ROUTE_ERROR_RESPONSE";function dT(t){if(t.startsWith(`${nS}:${cT}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function hT(t){if(t.startsWith(`${nS}:${fT}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new tT(e.status,e.statusText,e.data)}catch{}}function pT(t,{relative:e}={}){At(Hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=G.useContext(gi),{hash:r,pathname:s,search:a}=Gl(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:bi([n,s])),i.createHref({pathname:o,search:a,hash:r})}function Hl(){return G.useContext(Vl)!=null}function Ar(){return At(Hl(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(Vl).location}var iS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rS(t){G.useContext(gi).static||G.useLayoutEffect(t)}function mT(){let{isDataRoute:t}=G.useContext(Rr);return t?bT():gT()}function gT(){At(Hl(),"useNavigate() may be used only in the context of a <Router> component.");let t=G.useContext(go),{basename:e,navigator:n}=G.useContext(gi),{matches:i}=G.useContext(Rr),{pathname:r}=Ar(),s=JSON.stringify(jy(i)),a=G.useRef(!1);return rS(()=>{a.current=!0}),G.useCallback((l,u={})=>{if(Ki(a.current,iS),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=Bm(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:bi([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,r,t])}G.createContext(null);function Gl(t,{relative:e}={}){let{matches:n}=G.useContext(Rr),{pathname:i}=Ar(),r=JSON.stringify(jy(n));return G.useMemo(()=>Bm(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function _T(t,e){return sS(t,e)}function sS(t,e,n){var g;At(Hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=G.useContext(gi),{matches:r}=G.useContext(Rr),s=r[r.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let h=u&&u.path||"";oS(o,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let c=Ar(),d;if(e){let h=typeof e=="string"?mo(e):e;At(l==="/"||((g=h.pathname)==null?void 0:g.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),d=h}else d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let h=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(h.length).join("/")}let _=n&&n.state.matches.length?n.state.matches.map(h=>Object.assign(h,{route:n.manifest[h.route.id]||h.route})):Wy(t,{pathname:p});Ki(u||_!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Ki(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=MT(_&&_.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:bi([l,i.encodeLocation?i.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:bi([l,i.encodeLocation?i.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),r,n);return e&&v?G.createElement(Vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},v):v}function vT(){let t=AT(),e=nT(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:s},"ErrorBoundary")," or"," ",G.createElement("code",{style:s},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),n?G.createElement("pre",{style:r},n):null,a)}var xT=G.createElement(vT,null),aS=class extends G.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=hT(t.digest);n&&(t=n)}let e=t!==void 0?G.createElement(Rr.Provider,{value:this.props.routeContext},G.createElement(zm.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?G.createElement(yT,{error:t},e):e}};aS.contextType=eS;var ed=new WeakMap;function yT({children:t,error:e}){let{basename:n}=G.useContext(gi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=dT(e.digest);if(i){let r=ed.get(e);if(r)throw r;let s=Qy(i.location,n),a=s.absoluteURL||s.to;if(aT(a))throw new Error("Invalid redirect location");if(Zy&&!ed.get(e))if(s.isExternal||i.reloadDocument)window.location.href=a;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw ed.set(e,o),o}return G.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a}`})}}return t}function ST({routeContext:t,match:e,children:n}){let i=G.useContext(go);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(Rr.Provider,{value:t},n)}function MT(t,e=[],n){let i=n==null?void 0:n.state;if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let r=t,s=i==null?void 0:i.errors;if(s!=null){let c=r.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);At(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let a=!1,o=-1;if(n&&i){a=i.renderFallback;for(let c=0;c<r.length;c++){let d=r[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=c),d.route.id){let{loaderData:f,errors:p}=i,_=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!p||p[d.route.id]===void 0);if(d.route.lazy||_){n.isStatic&&(a=!0),o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}}let l=n==null?void 0:n.onError,u=i&&l?(c,d)=>{var f,p;l(c,{location:i.location,params:((p=(f=i.matches)==null?void 0:f[0])==null?void 0:p.params)??{},pattern:iT(i.matches),errorInfo:d})}:void 0;return r.reduceRight((c,d,f)=>{let p,_=!1,v=null,g=null;i&&(p=s&&d.route.id?s[d.route.id]:void 0,v=d.route.errorElement||xT,a&&(o<0&&f===0?(oS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,g=null):o===f&&(_=!0,g=d.route.hydrateFallbackElement||null)));let h=e.concat(r.slice(0,f+1)),m=()=>{let x;return p?x=v:_?x=g:d.route.Component?x=G.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=c,G.createElement(ST,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:i!=null},children:x})};return i&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?G.createElement(aS,{location:i.location,revalidation:i.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):m()},null)}function Vm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ET(t){let e=G.useContext(go);return At(e,Vm(t)),e}function wT(t){let e=G.useContext(mf);return At(e,Vm(t)),e}function TT(t){let e=G.useContext(Rr);return At(e,Vm(t)),e}function Hm(t){let e=TT(t),n=e.matches[e.matches.length-1];return At(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function RT(){return Hm("useRouteId")}function AT(){var i;let t=G.useContext(zm),e=wT("useRouteError"),n=Hm("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function bT(){let{router:t}=ET("useNavigate"),e=Hm("useNavigate"),n=G.useRef(!1);return rS(()=>{n.current=!0}),G.useCallback(async(r,s={})=>{Ki(n.current,iS),n.current&&(typeof r=="number"?await t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var e_={};function oS(t,e,n){!e&&!e_[t]&&(e_[t]=!0,Ki(!1,n))}G.memo(CT);function CT({routes:t,manifest:e,future:n,state:i,isStatic:r,onError:s}){return sS(t,void 0,{manifest:e,state:i,isStatic:r,onError:s})}function lS(t){At(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function PT({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1,useTransitions:a}){At(!Hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=G.useMemo(()=>({basename:o,navigator:r,static:s,useTransitions:a,future:{}}),[o,r,s,a]);typeof n=="string"&&(n=mo(n));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:p="default",mask:_}=n,v=G.useMemo(()=>{let g=yr(u,o);return g==null?null:{location:{pathname:g,search:c,hash:d,state:f,key:p,mask:_},navigationType:i}},[o,u,c,d,f,p,i,_]);return Ki(v!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:G.createElement(gi.Provider,{value:l},G.createElement(Vl.Provider,{children:e,value:v}))}function LT({children:t,location:e}){return _T(kh(t),e)}function kh(t,e=[]){let n=[];return G.Children.forEach(t,(i,r)=>{if(!G.isValidElement(i))return;let s=[...e,r];if(i.type===G.Fragment){n.push.apply(n,kh(i.props.children,s));return}At(i.type===lS,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),At(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=kh(i.props.children,s)),n.push(a)}),n}var ec="get",tc="application/x-www-form-urlencoded";function gf(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function DT(t){return gf(t)&&t.tagName.toLowerCase()==="button"}function IT(t){return gf(t)&&t.tagName.toLowerCase()==="form"}function NT(t){return gf(t)&&t.tagName.toLowerCase()==="input"}function UT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FT(t,e){return t.button===0&&(!e||e==="_self")&&!UT(t)}var pu=null;function OT(){if(pu===null)try{new FormData(document.createElement("form"),0),pu=!1}catch{pu=!0}return pu}var kT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function td(t){return t!=null&&!kT.has(t)?(Ki(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tc}"`),null):t}function BT(t,e){let n,i,r,s,a;if(IT(t)){let o=t.getAttribute("action");i=o?yr(o,e):null,n=t.getAttribute("method")||ec,r=td(t.getAttribute("enctype"))||tc,s=new FormData(t)}else if(DT(t)||NT(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?yr(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||ec,r=td(t.getAttribute("formenctype"))||td(o.getAttribute("enctype"))||tc,s=new FormData(o,t),!OT()){let{name:u,type:c,value:d}=t;if(c==="image"){let f=u?`${u}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else u&&s.append(u,d)}}else{if(gf(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ec,i=null,r=tc,a=t}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function uS(t,e,n,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&yr(r.pathname,e)==="/"?r.pathname=`${kc(e)}/_root.${i}`:r.pathname=`${kc(r.pathname)}.${i}`,r}async function zT(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VT(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function HT(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await zT(s,n);return a.links?a.links():[]}return[]}));return YT(i.flat(1).filter(VT).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function t_(t,e,n,i,r,s){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?e.filter((l,u)=>{var d;let c=i.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function GT(t,e,{includeHydrateFallback:n}={}){return WT(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function WT(t){return[...new Set(t)]}function XT(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function YT(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(XT(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function Wm(){let t=G.useContext(go);return Gm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function $T(){let t=G.useContext(mf);return Gm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Xm=G.createContext(void 0);Xm.displayName="FrameworkContext";function _f(){let t=G.useContext(Xm);return Gm(t,"You must render this element inside a <HydratedRouter> element"),t}function qT(t,e){let n=G.useContext(Xm),[i,r]=G.useState(!1),[s,a]=G.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=e,f=G.useRef(null);G.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let v=h=>{h.forEach(m=>{a(m.isIntersecting)})},g=new IntersectionObserver(v,{threshold:.5});return f.current&&g.observe(f.current),()=>{g.disconnect()}}},[t]),G.useEffect(()=>{if(i){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),a(!1)};return n?t!=="intent"?[s,f,{}]:[s,f,{onFocus:Co(o,p),onBlur:Co(l,_),onMouseEnter:Co(u,p),onMouseLeave:Co(c,_),onTouchStart:Co(d,p)}]:[!1,f,{}]}function Co(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function jT({page:t,...e}){let n=oT(),{nonce:i}=_f(),{router:r}=Wm(),s=G.useMemo(()=>Wy(r.routes,t,r.basename),[r.routes,t,r.basename]);return s?(e.nonce==null&&i&&(e={...e,nonce:i}),n?G.createElement(ZT,{page:t,matches:s,...e}):G.createElement(QT,{page:t,matches:s,...e})):null}function KT(t){let{manifest:e,routeModules:n}=_f(),[i,r]=G.useState([]);return G.useEffect(()=>{let s=!1;return HT(t,e,n).then(a=>{s||r(a)}),()=>{s=!0}},[t,e,n]),i}function ZT({page:t,matches:e,...n}){let i=Ar(),{future:r}=_f(),{basename:s}=Wm(),a=G.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let o=uS(t,s,r.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let c of e)typeof c.route.shouldRevalidate=="function"?l=!0:u.push(c.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,r.v8_trailingSlashAwareDataRequests,t,i,e]);return G.createElement(G.Fragment,null,a.map(o=>G.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function QT({page:t,matches:e,...n}){let i=Ar(),{future:r,manifest:s,routeModules:a}=_f(),{basename:o}=Wm(),{loaderData:l,matches:u}=$T(),c=G.useMemo(()=>t_(t,e,u,s,i,"data"),[t,e,u,s,i]),d=G.useMemo(()=>t_(t,e,u,s,i,"assets"),[t,e,u,s,i]),f=G.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let v=new Set,g=!1;if(e.forEach(m=>{var S;let x=s.routes[m.route.id];!x||!x.hasLoader||(!c.some(M=>M.route.id===m.route.id)&&m.route.id in l&&((S=a[m.route.id])!=null&&S.shouldRevalidate)||x.hasClientLoader?g=!0:v.add(m.route.id))}),v.size===0)return[];let h=uS(t,o,r.v8_trailingSlashAwareDataRequests,"data");return g&&v.size>0&&h.searchParams.set("_routes",e.filter(m=>v.has(m.route.id)).map(m=>m.route.id).join(",")),[h.pathname+h.search]},[o,r.v8_trailingSlashAwareDataRequests,l,i,s,c,e,t,a]),p=G.useMemo(()=>GT(d,s),[d,s]),_=KT(d);return G.createElement(G.Fragment,null,f.map(v=>G.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),p.map(v=>G.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),_.map(({key:v,link:g})=>G.createElement("link",{key:v,nonce:n.nonce,...g,crossOrigin:g.crossOrigin??n.crossOrigin})))}function JT(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var eR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eR&&(window.__reactRouterVersion="7.18.1")}catch{}function tR({basename:t,children:e,useTransitions:n,window:i}){let r=G.useRef();r.current==null&&(r.current=Iw({window:i,v5Compat:!0}));let s=r.current,[a,o]=G.useState({action:s.action,location:s.location}),l=G.useCallback(u=>{n===!1?o(u):G.startTransition(()=>o(u))},[n]);return G.useLayoutEffect(()=>s.listen(l),[s,l]),G.createElement(PT,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:s,useTransitions:n})}var Ym=G.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,..._},v){let{basename:g,navigator:h,useTransitions:m}=G.useContext(gi),x=typeof c=="string"&&km.test(c),S=Qy(c,g);c=S.to;let M=pT(c,{relative:r}),T=Ar(),w=null;if(o){let D=Bm(o,[],T.mask?T.mask.pathname:"/",!0);g!=="/"&&(D.pathname=D.pathname==="/"?g:bi([g,D.pathname])),w=h.createHref(D)}let[y,R,P]=qT(i,_),L=sR(c,{replace:a,mask:o,state:l,target:u,preventScrollReset:d,relative:r,viewTransition:f,defaultShouldRevalidate:p,useTransitions:m});function F(D){e&&e(D),D.defaultPrevented||L(D)}let W=!(S.isExternal||s),V=G.createElement("a",{..._,...P,href:(W?w:void 0)||S.absoluteURL||M,onClick:W?F:e,ref:JT(v,R),target:u,"data-discover":!x&&n==="render"?"true":void 0});return y&&!x?G.createElement(G.Fragment,null,V,G.createElement(jT,{page:M})):V});Ym.displayName="Link";var nR=G.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...u},c){let d=Gl(a,{relative:u.relative}),f=Ar(),p=G.useContext(mf),{navigator:_,basename:v}=G.useContext(gi),g=p!=null&&cR(d)&&o===!0,h=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,m=f.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(m=m.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&v&&(x=yr(x,v)||x);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let M=m===h||!r&&m.startsWith(h)&&m.charAt(S)==="/",T=x!=null&&(x===h||!r&&x.startsWith(h)&&x.charAt(h.length)==="/"),w={isActive:M,isPending:T,isTransitioning:g},y=M?e:void 0,R;typeof i=="function"?R=i(w):R=[i,M?"active":null,T?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let P=typeof s=="function"?s(w):s;return G.createElement(Ym,{...u,"aria-current":y,className:R,ref:c,style:P,to:a,viewTransition:o},typeof l=="function"?l(w):l)});nR.displayName="NavLink";var iR=G.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:a=ec,action:o,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f,...p},_)=>{let{useTransitions:v}=G.useContext(gi),g=lR(),h=uR(o,{relative:u}),m=a.toLowerCase()==="get"?"get":"post",x=typeof o=="string"&&km.test(o),S=M=>{if(l&&l(M),M.defaultPrevented)return;M.preventDefault();let T=M.nativeEvent.submitter,w=(T==null?void 0:T.getAttribute("formmethod"))||a,y=()=>g(T||M.currentTarget,{fetcherKey:e,method:w,navigate:n,replace:r,state:s,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f});v&&n!==!1?G.startTransition(()=>y()):y()};return G.createElement("form",{ref:_,method:m,action:h,onSubmit:i?l:S,...p,"data-discover":!x&&t==="render"?"true":void 0})});iR.displayName="Form";function rR(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cS(t){let e=G.useContext(go);return At(e,rR(t)),e}function sR(t,{target:e,replace:n,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let c=mT(),d=Ar(),f=Gl(t,{relative:a});return G.useCallback(p=>{if(FT(p,e)){p.preventDefault();let _=n!==void 0?n:El(d)===El(f),v=()=>c(t,{replace:_,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?G.startTransition(()=>v()):v()}},[d,c,f,n,i,r,e,t,s,a,o,l,u])}var aR=0,oR=()=>`__${String(++aR)}__`;function lR(){let{router:t}=cS("useSubmit"),{basename:e}=G.useContext(gi),n=RT(),i=t.fetch,r=t.navigate;return G.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:c,body:d}=BT(s,e);if(a.navigate===!1){let f=a.fetcherKey||oR();await i(f,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await r(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,r,e,n])}function uR(t,{relative:e}={}){let{basename:n}=G.useContext(gi),i=G.useContext(Rr);At(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Gl(t||".",{relative:e})},a=Ar();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(c=>c==="")){o.delete("index"),l.filter(d=>d).forEach(d=>o.append("index",d));let c=o.toString();s.search=c?`?${c}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:bi([n,s.pathname])),El(s)}function cR(t,{relative:e}={}){let n=G.useContext(tS);At(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=cS("useViewTransitionState"),r=Gl(t,{relative:e});if(!n.isTransitioning)return!1;let s=yr(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=yr(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Oc(r.pathname,a)!=null||Oc(r.pathname,s)!=null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $m="185",fR=0,n_=1,dR=2,nc=1,hR=2,Vo=3,us=0,Ln=1,zi=2,hr=0,Ga=1,i_=2,r_=3,s_=4,pR=5,Cs=100,mR=101,gR=102,_R=103,vR=104,xR=200,yR=201,SR=202,MR=203,Bh=204,zh=205,ER=206,wR=207,TR=208,RR=209,AR=210,bR=211,CR=212,PR=213,LR=214,Vh=0,Hh=1,Gh=2,no=3,Wh=4,Xh=5,Yh=6,$h=7,fS=0,DR=1,IR=2,$i=0,dS=1,hS=2,pS=3,mS=4,gS=5,_S=6,vS=7,xS=300,qs=301,io=302,nd=303,id=304,vf=306,qh=1e3,fr=1001,jh=1002,en=1003,NR=1004,mu=1005,dn=1006,rd=1007,Ns=1008,ui=1009,yS=1010,SS=1011,wl=1012,qm=1013,Zi=1014,Hi=1015,Sr=1016,jm=1017,Km=1018,Tl=1020,MS=35902,ES=35899,wS=1021,TS=1022,Ti=1023,Mr=1026,Us=1027,RS=1028,Zm=1029,js=1030,Qm=1031,Jm=1033,ic=33776,rc=33777,sc=33778,ac=33779,Kh=35840,Zh=35841,Qh=35842,Jh=35843,ep=36196,tp=37492,np=37496,ip=37488,rp=37489,Bc=37490,sp=37491,ap=37808,op=37809,lp=37810,up=37811,cp=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,xp=37821,yp=36492,Sp=36494,Mp=36495,Ep=36283,wp=36284,zc=36285,Tp=36286,UR=3200,a_=0,FR=1,Wr="",xn="srgb",Vc="srgb-linear",Hc="linear",st="srgb",ra=7680,o_=519,OR=512,kR=513,BR=514,e0=515,zR=516,VR=517,t0=518,HR=519,l_=35044,u_="300 es",Gi=2e3,Gc=2001;function GR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WR(){const t=Rl("canvas");return t.style.display="block",t}const c_={};function f_(...t){const e="THREE."+t.shift();console.log(e,...t)}function AS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=AS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=AS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Wa(...t){const e=t.join(" ");e in c_||(c_[e]=!0,Oe(...t))}function XR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const YR={[Vh]:Hh,[Gh]:Yh,[Wh]:$h,[no]:Xh,[Hh]:Vh,[Yh]:Gh,[$h]:Wh,[Xh]:no};class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let d_=1234567;const tl=Math.PI/180,Al=180/Math.PI;function _o(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function n0(t,e){return(t%e+e)%e}function $R(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function qR(t,e,n){return t!==e?(n-t)/(e-t):0}function nl(t,e,n){return(1-n)*t+n*e}function jR(t,e,n,i){return nl(t,e,1-Math.exp(-n*i))}function KR(t,e=1){return e-Math.abs(n0(t,e*2)-e)}function ZR(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function QR(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function JR(t,e){return t+Math.floor(Math.random()*(e-t+1))}function eA(t,e){return t+Math.random()*(e-t)}function tA(t){return t*(.5-Math.random())}function nA(t){t!==void 0&&(d_=t);let e=d_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iA(t){return t*tl}function rA(t){return t*Al}function sA(t){return(t&t-1)===0&&t!==0}function aA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function oA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lA(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*c,l*d,l*f,o*u);break;case"YZY":t.set(l*f,o*c,l*d,o*u);break;case"ZXZ":t.set(l*d,l*f,o*c,o*u);break;case"XZX":t.set(o*c,l*_,l*p,o*u);break;case"YXY":t.set(l*p,o*c,l*_,o*u);break;case"ZYZ":t.set(l*_,l*p,o*c,o*u);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const h_={DEG2RAD:tl,RAD2DEG:Al,generateUUID:_o,clamp:$e,euclideanModulo:n0,mapLinear:$R,inverseLerp:qR,lerp:nl,damp:jR,pingpong:KR,smoothstep:ZR,smootherstep:QR,randInt:JR,randFloat:eA,randFloatSpread:tA,seededRandom:nA,degToRad:iA,radToDeg:rA,isPowerOfTwo:sA,ceilPowerOfTwo:aA,floorPowerOfTwo:oA,setQuaternionFromProperEuler:lA,normalize:gn,denormalize:ya},A0=class A0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};A0.prototype.isVector2=!0;let qe=A0;class vo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(d!==v||l!==f||u!==p||c!==_){let g=l*f+u*p+c*_+d*v;g<0&&(f=-f,p=-p,_=-_,v=-v,g=-g);let h=1-o;if(g<.9995){const m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+v*o}else{l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+v*o;const m=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=m,u*=m,c*=m,d*=m}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+c*d+l*p-u*f,e[n+1]=l*_+c*f+u*d-o*p,e[n+2]=u*_+c*p+o*f-l*d,e[n+3]=c*_-o*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const b0=class b0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(p_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(p_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};b0.prototype.isVector3=!0;let Z=b0;const sd=new Z,p_=new vo,C0=class C0{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],g=r[3],h=r[6],m=r[1],x=r[4],S=r[7],M=r[2],T=r[5],w=r[8];return s[0]=a*v+o*m+l*M,s[3]=a*g+o*x+l*T,s[6]=a*h+o*S+l*w,s[1]=u*v+c*m+d*M,s[4]=u*g+c*x+d*T,s[7]=u*h+c*S+d*w,s[2]=f*v+p*m+_*M,s[5]=f*g+p*x+_*T,s[8]=f*h+p*S+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,p=u*s-a*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(c*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=p*v,e[7]=(i*l-u*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Wa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ad.makeScale(e,n)),this}rotate(e){return Wa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ad.makeRotation(-e)),this}translate(e,n){return Wa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ad.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};C0.prototype.isMatrix3=!0;let ze=C0;const ad=new ze,m_=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uA(){const t={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Xa(r.r),r.g=Xa(r.g),r.b=Xa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wr?Hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Vc]:{primaries:e,whitePoint:i,transfer:Hc,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),t}const je=uA();function pr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let sa;class cA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sa===void 0&&(sa=Rl("canvas")),sa.width=e.width,sa.height=e.height;const r=sa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=sa}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pr(n[i]/255)*255):n[i]=pr(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fA=0;class i0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(od(r[a].image)):s.push(od(r[a]))}else s=od(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function od(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let dA=0;const ld=new Z;class hn extends Js{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=fr,r=fr,s=dn,a=Ns,o=Ti,l=ui,u=hn.DEFAULT_ANISOTROPY,c=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=_o(),this.name="",this.source=new i0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=xS;hn.DEFAULT_ANISOTROPY=1;const P0=class P0{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(p+1)/2,M=(h+1)/2,T=(c+f)/4,w=(d+v)/4,y=(_+g)/4;return x>S&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=w/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=w/s,r=y/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-v)/m,this.z=(f-c)/m,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};P0.prototype.isVector4=!0;let Dt=P0;class hA extends Js{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new i0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends hA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bS extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pA extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=class Zc{constructor(e,n,i,r,s,a,o,l,u,c,d,f,p,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,d,f,p,_,v,g)}set(e,n,i,r,s,a,o,l,u,c,d,f,p,_,v,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/aa.setFromMatrixColumn(e,0).length(),s=1/aa.setFromMatrixColumn(e,1).length(),a=1/aa.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*d,_=o*c,v=o*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+_*u,n[5]=f-v*u,n[9]=-o*l,n[2]=v-f*u,n[6]=_+p*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,v=u*d;n[0]=f+v*o,n[4]=_*o-p,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-o,n[2]=p*o-_,n[6]=v+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,v=u*d;n[0]=f-v*o,n[4]=-a*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*c,n[9]=v-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*d,_=o*c,v=o*d;n[0]=l*c,n[4]=_*u-p,n[8]=f*u+v,n[1]=l*d,n[5]=v*u+f,n[9]=p*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,_=o*l,v=o*u;n[0]=l*c,n[4]=v-f*d,n[8]=_*d+p,n[1]=d,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=p*d+_,n[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,p=a*u,_=o*l,v=o*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+v,n[5]=a*c,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*c,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mA,e,gA)}lookAt(e,n,i){const r=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Nr.crossVectors(i,Bn),Nr.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Nr.crossVectors(i,Bn)),Nr.normalize(),gu.crossVectors(Bn,Nr),r[0]=Nr.x,r[4]=gu.x,r[8]=Bn.x,r[1]=Nr.y,r[5]=gu.y,r[9]=Bn.y,r[2]=Nr.z,r[6]=gu.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],g=i[10],h=i[14],m=i[3],x=i[7],S=i[11],M=i[15],T=r[0],w=r[4],y=r[8],R=r[12],P=r[1],L=r[5],F=r[9],W=r[13],V=r[2],D=r[6],Y=r[10],k=r[14],N=r[3],$=r[7],ee=r[11],ne=r[15];return s[0]=a*T+o*P+l*V+u*N,s[4]=a*w+o*L+l*D+u*$,s[8]=a*y+o*F+l*Y+u*ee,s[12]=a*R+o*W+l*k+u*ne,s[1]=c*T+d*P+f*V+p*N,s[5]=c*w+d*L+f*D+p*$,s[9]=c*y+d*F+f*Y+p*ee,s[13]=c*R+d*W+f*k+p*ne,s[2]=_*T+v*P+g*V+h*N,s[6]=_*w+v*L+g*D+h*$,s[10]=_*y+v*F+g*Y+h*ee,s[14]=_*R+v*W+g*k+h*ne,s[3]=m*T+x*P+S*V+M*N,s[7]=m*w+x*L+S*D+M*$,s[11]=m*y+x*F+S*Y+M*ee,s[15]=m*R+x*W+S*k+M*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],h=e[15],m=l*p-u*f,x=o*p-u*d,S=o*f-l*d,M=a*p-u*c,T=a*f-l*c,w=a*d-o*c;return n*(v*m-g*x+h*S)-i*(_*m-g*M+h*T)+r*(_*x-v*M+h*w)-s*(_*S-v*T+g*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],c=e[10];return n*(a*c-o*u)-i*(s*c-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],h=e[15],m=n*o-i*a,x=n*l-r*a,S=n*u-s*a,M=i*l-r*o,T=i*u-s*o,w=r*u-s*l,y=c*v-d*_,R=c*g-f*_,P=c*h-p*_,L=d*g-f*v,F=d*h-p*v,W=f*h-p*g,V=m*W-x*F+S*L+M*P-T*R+w*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/V;return e[0]=(o*W-l*F+u*L)*D,e[1]=(r*F-i*W-s*L)*D,e[2]=(v*w-g*T+h*M)*D,e[3]=(f*T-d*w-p*M)*D,e[4]=(l*P-a*W-u*R)*D,e[5]=(n*W-r*P+s*R)*D,e[6]=(g*S-_*w-h*x)*D,e[7]=(c*w-f*S+p*x)*D,e[8]=(a*F-o*P+u*y)*D,e[9]=(i*P-n*F-s*y)*D,e[10]=(_*T-v*S+h*m)*D,e[11]=(d*S-c*T-p*m)*D,e[12]=(o*R-a*L-l*y)*D,e[13]=(n*L-i*R+r*y)*D,e[14]=(v*x-_*M-g*m)*D,e[15]=(c*M-d*x+f*m)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,d=o+o,f=s*u,p=s*c,_=s*d,v=a*c,g=a*d,h=o*d,m=l*u,x=l*c,S=l*d,M=i.x,T=i.y,w=i.z;return r[0]=(1-(v+h))*M,r[1]=(p+S)*M,r[2]=(_-x)*M,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(_+x)*w,r[9]=(g-m)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=aa.set(r[0],r[1],r[2]).length();const o=aa.set(r[4],r[5],r[6]).length(),l=aa.set(r[8],r[9],r[10]).length();s<0&&(a=-a),vi.copy(this);const u=1/a,c=1/o,d=1/l;return vi.elements[0]*=u,vi.elements[1]*=u,vi.elements[2]*=u,vi.elements[4]*=c,vi.elements[5]*=c,vi.elements[6]*=c,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,n.setFromRotationMatrix(vi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Gi,l=!1){const u=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===Gi)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Gc)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Gi,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===Gi)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===Gc)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Zc.prototype.isMatrix4=!0;let Gt=Zc;const aa=new Z,vi=new Gt,mA=new Z(0,0,0),gA=new Z(1,1,1),Nr=new Z,gu=new Z,Bn=new Z,__=new Gt,v_=new vo;class Ks{constructor(e=0,n=0,i=0,r=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return __.makeRotationFromQuaternion(e),this.setFromRotationMatrix(__,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return v_.setFromEuler(this),this.setFromQuaternion(v_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class CS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _A=0;const x_=new Z,oa=new vo,Ji=new Gt,_u=new Z,Po=new Z,vA=new Z,xA=new vo,y_=new Z(1,0,0),S_=new Z(0,1,0),M_=new Z(0,0,1),E_={type:"added"},yA={type:"removed"},la={type:"childadded",child:null},ud={type:"childremoved",child:null};class Dn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new Z,n=new Ks,i=new vo,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ze}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new CS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oa.setFromAxisAngle(e,n),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,n){return oa.setFromAxisAngle(e,n),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(y_,e)}rotateY(e){return this.rotateOnAxis(S_,e)}rotateZ(e){return this.rotateOnAxis(M_,e)}translateOnAxis(e,n){return x_.copy(e).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(y_,e)}translateY(e){return this.translateOnAxis(S_,e)}translateZ(e){return this.translateOnAxis(M_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_u.copy(e):_u.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Po,_u,this.up):Ji.lookAt(_u,Po,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),oa.setFromRotationMatrix(Ji),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(E_),la.child=e,this.dispatchEvent(la),la.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yA),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(E_),la.child=e,this.dispatchEvent(la),la.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,vA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,xA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new Z(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Na extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SA={type:"move"};class cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),h=this._getHandJoint(u,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const PS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},vu={h:0,s:0,l:0};function fd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=n0(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fd(a,s,e+1/3),this.g=fd(a,s,e),this.b=fd(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=PS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return je.workingToColorSpace(un.copy(this),e),Math.round($e(un.r*255,0,255))*65536+Math.round($e(un.g*255,0,255))*256+Math.round($e(un.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(un.copy(this),n);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=xn){je.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,r=un.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+n,Ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ur),e.getHSL(vu);const i=nl(Ur.h,vu.h,n),r=nl(Ur.s,vu.s,n),s=nl(Ur.l,vu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new tt;tt.NAMES=PS;class r0{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=n,this.far=i}clone(){return new r0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class LS extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ks,this.environmentIntensity=1,this.environmentRotation=new Ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xi=new Z,er=new Z,dd=new Z,tr=new Z,ua=new Z,ca=new Z,w_=new Z,hd=new Z,pd=new Z,md=new Z,gd=new Dt,_d=new Dt,vd=new Dt;class wi{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xi.subVectors(e,n),r.cross(xi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){xi.subVectors(r,n),er.subVectors(i,n),dd.subVectors(e,n);const a=xi.dot(xi),o=xi.dot(er),l=xi.dot(dd),u=er.dot(er),c=er.dot(dd),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-o*c)*f,_=(a*c-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tr.x),l.addScaledVector(a,tr.y),l.addScaledVector(o,tr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(e,n),_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gd,s.x),a.addScaledVector(_d,s.y),a.addScaledVector(vd,s.z),a}static isFrontFacing(e,n,i,r){return xi.subVectors(i,n),er.subVectors(e,n),xi.cross(er).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),xi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ua.subVectors(r,i),ca.subVectors(s,i),hd.subVectors(e,i);const l=ua.dot(hd),u=ca.dot(hd);if(l<=0&&u<=0)return n.copy(i);pd.subVectors(e,r);const c=ua.dot(pd),d=ca.dot(pd);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(ua,a);md.subVectors(e,s);const p=ua.dot(md),_=ca.dot(md);if(_>=0&&p<=_)return n.copy(s);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(ca,o);const g=c*_-p*d;if(g<=0&&d-c>=0&&p-_>=0)return w_.subVectors(s,r),o=(d-c)/(d-c+(p-_)),n.copy(r).addScaledVector(w_,o);const h=1/(g+v+f);return a=v*h,o=f*h,n.copy(i).addScaledVector(ua,a).addScaledVector(ca,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wl{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(s,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xu.copy(i.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),yu.subVectors(this.max,Lo),fa.subVectors(e.a,Lo),da.subVectors(e.b,Lo),ha.subVectors(e.c,Lo),Fr.subVectors(da,fa),Or.subVectors(ha,da),xs.subVectors(fa,ha);let n=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-xs.z,xs.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,xs.z,0,-xs.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-xs.y,xs.x,0];return!xd(n,fa,da,ha,yu)||(n=[1,0,0,0,1,0,0,0,1],!xd(n,fa,da,ha,yu))?!1:(Su.crossVectors(Fr,Or),n=[Su.x,Su.y,Su.z],xd(n,fa,da,ha,yu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],yi=new Z,xu=new Wl,fa=new Z,da=new Z,ha=new Z,Fr=new Z,Or=new Z,xs=new Z,Lo=new Z,yu=new Z,Su=new Z,ys=new Z;function xd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ys.fromArray(t,s);const o=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),l=e.dot(ys),u=n.dot(ys),c=i.dot(ys);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const zt=new Z,Mu=new qe;let MA=0;class ji extends Js{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=l_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mu.fromBufferAttribute(this,n),Mu.applyMatrix3(e),this.setXY(n,Mu.x,Mu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class DS extends ji{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class IS extends ji{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mr extends ji{constructor(e,n,i){super(new Float32Array(e),n,i)}}const EA=new Wl,Do=new Z,yd=new Z;class s0{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):EA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(yd)),this.expandByPoint(Do.copy(e.center).sub(yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wA=0;const ni=new Gt,Sd=new Dn,pa=new Z,zn=new Wl,Io=new Wl,qt=new Z;class br extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(GR(e)?IS:DS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pa).negate(),this.translate(pa.x,pa.y,pa.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new s0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Io.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(zn.min,Io.min),zn.expandByPoint(qt),qt.addVectors(zn.max,Io.max),zn.expandByPoint(qt)):(zn.expandByPoint(Io.min),zn.expandByPoint(Io.max))}zn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)qt.fromBufferAttribute(o,u),l&&(pa.fromBufferAttribute(e,u),qt.add(pa)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ji(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new Z,l[y]=new Z;const u=new Z,c=new Z,d=new Z,f=new qe,p=new qe,_=new qe,v=new Z,g=new Z;function h(y,R,P){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),_.fromBufferAttribute(s,P),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),o[y].add(v),o[R].add(v),o[P].add(v),l[y].add(g),l[R].add(g),l[P].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,R=m.length;y<R;++y){const P=m[y],L=P.start,F=P.count;for(let W=L,V=L+F;W<V;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new Z,S=new Z,M=new Z,T=new Z;function w(y){M.fromBufferAttribute(r,y),T.copy(M);const R=o[y];x.copy(R),x.sub(M.multiplyScalar(M.dot(R))).normalize(),S.crossVectors(T,R);const L=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,L)}for(let y=0,R=m.length;y<R;++y){const P=m[y],L=P.start,F=P.count;for(let W=L,V=L+F;W<V;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ji(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,u=new Z,c=new Z,d=new Z;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new ji(f,c,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new br,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TA=0;class xf extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Ga,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ga&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==zh&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new Z,Md=new Z,Eu=new Z,kr=new Z,Ed=new Z,wu=new Z,wd=new Z;class RA{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ir.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,n),ir.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Md.copy(e).add(n).multiplyScalar(.5),Eu.copy(n).sub(e).normalize(),kr.copy(this.origin).sub(Md);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Eu),o=kr.dot(this.direction),l=-kr.dot(Eu),u=kr.lengthSq(),c=Math.abs(1-a*a);let d,f,p,_;if(c>0)if(d=a*l-o,f=a*o-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const v=1/c;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Md).addScaledVector(Eu,f),p}intersectSphere(e,n){ir.subVectors(e.center,this.origin);const i=ir.dot(this.direction),r=ir.dot(ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,n,i,r,s){Ed.subVectors(n,e),wu.subVectors(i,e),wd.crossVectors(Ed,wu);let a=this.direction.dot(wd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kr.subVectors(this.origin,e);const l=o*this.direction.dot(wu.crossVectors(kr,wu));if(l<0)return null;const u=o*this.direction.dot(Ed.cross(kr));if(u<0||l+u>a)return null;const c=-o*kr.dot(wd);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class a0 extends xf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ks,this.combine=fS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const T_=new Gt,Ss=new RA,Tu=new s0,R_=new Z,Ru=new Z,Au=new Z,bu=new Z,Td=new Z,Cu=new Z,A_=new Z,Pu=new Z;class Pi extends Dn{constructor(e=new br,n=new a0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(Td.fromBufferAttribute(d,e),a?Cu.addScaledVector(Td,c):Cu.addScaledVector(Td.sub(n),c))}n.add(Cu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tu.copy(i.boundingSphere),Tu.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(Tu.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Tu,R_)===null||Ss.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(T_.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(T_),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],h=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,M=x;S<M;S+=3){const T=o.getX(S),w=o.getX(S+1),y=o.getX(S+2);r=Lu(this,h,e,i,u,c,d,T,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const m=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);r=Lu(this,a,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],h=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,M=x;S<M;S+=3){const T=S,w=S+1,y=S+2;r=Lu(this,h,e,i,u,c,d,T,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const m=g,x=g+1,S=g+2;r=Lu(this,a,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function AA(t,e,n,i,r,s,a,o){let l;if(e.side===Ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===us,o),l===null)return null;Pu.copy(o),Pu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Pu);return u<n.near||u>n.far?null:{distance:u,point:Pu.clone(),object:t}}function Lu(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Ru),t.getVertexPosition(l,Au),t.getVertexPosition(u,bu);const c=AA(t,e,n,i,Ru,Au,bu,A_);if(c){const d=new Z;wi.getBarycoord(A_,Ru,Au,bu,d),r&&(c.uv=wi.getInterpolatedAttribute(r,o,l,u,d,new qe)),s&&(c.uv1=wi.getInterpolatedAttribute(s,o,l,u,d,new qe)),a&&(c.normal=wi.getInterpolatedAttribute(a,o,l,u,d,new Z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new Z,materialIndex:0};wi.getNormal(Ru,Au,bu,f.normal),c.face=f,c.barycoord=d}return c}class bA extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=en,c=en,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rd=new Z,CA=new Z,PA=new ze;class As{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Rd.subVectors(i,n).cross(CA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Rd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PA.getNormalMatrix(e),r=this.coplanarPoint(Rd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new s0,LA=new qe(.5,.5),Du=new Z;class NS{constructor(e=new As,n=new As,i=new As,r=new As,s=new As,a=new As){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],_=s[8],v=s[9],g=s[10],h=s[11],m=s[12],x=s[13],S=s[14],M=s[15];if(r[0].setComponents(u-a,p-c,h-_,M-m).normalize(),r[1].setComponents(u+a,p+c,h+_,M+m).normalize(),r[2].setComponents(u+o,p+d,h+v,M+x).normalize(),r[3].setComponents(u-o,p-d,h-v,M-x).normalize(),i)r[4].setComponents(l,f,g,S).normalize(),r[5].setComponents(u-l,p-f,h-g,M-S).normalize();else if(r[4].setComponents(u-l,p-f,h-g,M-S).normalize(),n===Gi)r[5].setComponents(u+l,p+f,h+g,M+S).normalize();else if(n===Gc)r[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const n=LA.distanceTo(e.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Du.x=r.normal.x>0?e.max.x:e.min.x,Du.y=r.normal.y>0?e.max.y:e.min.y,Du.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class US extends hn{constructor(e=[],n=qs,i,r,s,a,o,l,u,c){super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ro extends hn{constructor(e,n,i=Zi,r,s,a,o=en,l=en,u,c=Mr,d=1){if(c!==Mr&&c!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new i0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class DA extends ro{constructor(e,n=Zi,i=qs,r,s,a=en,o=en,l,u=Mr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class FS extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xl extends br{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mr(u,3)),this.setAttribute("normal",new mr(c,3)),this.setAttribute("uv",new mr(d,2));function _(v,g,h,m,x,S,M,T,w,y,R){const P=S/w,L=M/y,F=S/2,W=M/2,V=T/2,D=w+1,Y=y+1;let k=0,N=0;const $=new Z;for(let ee=0;ee<Y;ee++){const ne=ee*L-W;for(let se=0;se<D;se++){const ke=se*P-F;$[v]=ke*m,$[g]=ne*x,$[h]=V,u.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[h]=T>0?1:-1,c.push($.x,$.y,$.z),d.push(se/w),d.push(1-ee/y),k+=1}}for(let ee=0;ee<y;ee++)for(let ne=0;ne<w;ne++){const se=f+ne+D*ee,ke=f+ne+D*(ee+1),Ce=f+(ne+1)+D*(ee+1),Ue=f+(ne+1)+D*ee;l.push(se,ke,Ue),l.push(ke,Ce,Ue),N+=6}o.addGroup(p,N,R),p+=N,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xo extends br{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=n/l,p=[],_=[],v=[],g=[];for(let h=0;h<c;h++){const m=h*f-a;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-m,0),v.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){const x=m+u*h,S=m+u*(h+1),M=m+1+u*(h+1),T=m+1+u*h;p.push(x,S,T),p.push(S,M,T)}this.setIndex(p),this.setAttribute("position",new mr(_,3)),this.setAttribute("normal",new mr(v,3)),this.setAttribute("uv",new mr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(b_(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(b_(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function b_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function IA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function OS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const NA={clone:so,merge:_n};var UA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends xf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UA,this.fragmentShader=FA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=IA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Gt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class OA extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kA extends xf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BA extends xf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ad={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(C_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!C_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function C_(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zA{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const VA=new zA;class o0{constructor(e){this.manager=e!==void 0?e:VA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}o0.DEFAULT_MATERIAL_NAME="__DEFAULT";const ma=new WeakMap;let HA=class extends o0{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ad.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let d=ma.get(a);d===void 0&&(d=[],ma.set(a,d)),d.push({onLoad:n,onError:r})}return a}const o=Rl("img");function l(){c(),n&&n(this);const d=ma.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}ma.delete(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),Ad.remove(`image:${e}`);const f=ma.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(d)}ma.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ad.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};class GA extends o0{constructor(e){super(e)}load(e,n,i,r){const s=new hn,a=new HA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class WA extends Dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Iu=new Z,Nu=new vo,Ni=new Z;class kS extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Iu,Nu,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Nu,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Iu,Nu,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Nu,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Br=new Z,P_=new qe,L_=new qe;class li extends kS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,n){return this.getViewBounds(e,P_,L_),n.subVectors(L_,P_)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class l0 extends kS{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class XA extends WA{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ga=-90,_a=1;class YA extends Dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new li(ga,_a,e,n);r.layers=this.layers,this.add(r);const s=new li(ga,_a,e,n);s.layers=this.layers,this.add(s);const a=new li(ga,_a,e,n);a.layers=this.layers,this.add(a);const o=new li(ga,_a,e,n);o.layers=this.layers,this.add(o);const l=new li(ga,_a,e,n);l.layers=this.layers,this.add(l);const u=new li(ga,_a,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $A extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class BS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const L0=class L0{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};L0.prototype.isMatrix2=!0;let D_=L0;function I_(t,e,n,i){const r=qA(i);switch(n){case wS:return t*e;case RS:return t*e/r.components*r.byteLength;case Zm:return t*e/r.components*r.byteLength;case js:return t*e*2/r.components*r.byteLength;case Qm:return t*e*2/r.components*r.byteLength;case TS:return t*e*3/r.components*r.byteLength;case Ti:return t*e*4/r.components*r.byteLength;case Jm:return t*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Jh:return Math.max(t,16)*Math.max(e,8)/4;case Kh:case Qh:return Math.max(t,8)*Math.max(e,8)/2;case ep:case tp:case ip:case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case np:case Bc:case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yp:case Sp:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ep:case wp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zc:case Tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qA(t){switch(t){case ui:case yS:return{byteLength:1,components:1};case wl:case SS:case Sr:return{byteLength:2,components:1};case jm:case Km:return{byteLength:2,components:4};case Zi:case qm:case Hi:return{byteLength:4,components:1};case MS:case ES:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$m}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$m);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zS(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jA(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var KA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZA=`#ifdef USE_ALPHAHASH
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
#endif`,QA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nb=`#ifdef USE_AOMAP
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
#endif`,ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rb=`#ifdef USE_BATCHING
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
#endif`,sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ub=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xb=`#define PI 3.141592653589793
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
} // validated`,yb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sb=`vec3 transformedNormal = objectNormal;
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
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ob=`#ifdef USE_GRADIENTMAP
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
}`,kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$b=`PhysicalMaterial material;
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
#endif`,qb=`uniform sampler2D dfgLUT;
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
}`,jb=`
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a2=`#if defined( USE_POINTS_UV )
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
#endif`,o2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`#ifdef USE_MORPHTARGETS
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
#endif`,h2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x2=`#ifdef USE_NORMALMAP
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
#endif`,y2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,F2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O2=`#ifdef USE_SKINNING
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
#endif`,k2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,X2=`#ifdef USE_TRANSMISSION
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z2=`uniform sampler2D t2D;
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
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nC=`#include <common>
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
}`,iC=`#if DEPTH_PACKING == 3200
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
}`,rC=`#define DISTANCE
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
}`,sC=`#define DISTANCE
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
}`,aC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lC=`uniform float scale;
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
}`,uC=`uniform vec3 diffuse;
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
}`,cC=`#include <common>
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
}`,fC=`uniform vec3 diffuse;
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
}`,dC=`#define LAMBERT
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
}`,hC=`#define LAMBERT
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
}`,pC=`#define MATCAP
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
}`,mC=`#define MATCAP
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
}`,gC=`#define NORMAL
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
}`,_C=`#define NORMAL
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
}`,vC=`#define PHONG
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
}`,xC=`#define PHONG
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
}`,yC=`#define STANDARD
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
}`,SC=`#define STANDARD
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
}`,MC=`#define TOON
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
}`,EC=`#define TOON
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
}`,wC=`uniform float size;
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
}`,TC=`uniform vec3 diffuse;
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
}`,RC=`#include <common>
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
}`,AC=`uniform vec3 color;
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
}`,bC=`uniform float rotation;
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
}`,CC=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:KA,alphahash_pars_fragment:ZA,alphamap_fragment:QA,alphamap_pars_fragment:JA,alphatest_fragment:eb,alphatest_pars_fragment:tb,aomap_fragment:nb,aomap_pars_fragment:ib,batching_pars_vertex:rb,batching_vertex:sb,begin_vertex:ab,beginnormal_vertex:ob,bsdfs:lb,iridescence_fragment:ub,bumpmap_pars_fragment:cb,clipping_planes_fragment:fb,clipping_planes_pars_fragment:db,clipping_planes_pars_vertex:hb,clipping_planes_vertex:pb,color_fragment:mb,color_pars_fragment:gb,color_pars_vertex:_b,color_vertex:vb,common:xb,cube_uv_reflection_fragment:yb,defaultnormal_vertex:Sb,displacementmap_pars_vertex:Mb,displacementmap_vertex:Eb,emissivemap_fragment:wb,emissivemap_pars_fragment:Tb,colorspace_fragment:Rb,colorspace_pars_fragment:Ab,envmap_fragment:bb,envmap_common_pars_fragment:Cb,envmap_pars_fragment:Pb,envmap_pars_vertex:Lb,envmap_physical_pars_fragment:Hb,envmap_vertex:Db,fog_vertex:Ib,fog_pars_vertex:Nb,fog_fragment:Ub,fog_pars_fragment:Fb,gradientmap_pars_fragment:Ob,lightmap_pars_fragment:kb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:zb,lights_pars_begin:Vb,lights_toon_fragment:Gb,lights_toon_pars_fragment:Wb,lights_phong_fragment:Xb,lights_phong_pars_fragment:Yb,lights_physical_fragment:$b,lights_physical_pars_fragment:qb,lights_fragment_begin:jb,lights_fragment_maps:Kb,lights_fragment_end:Zb,lightprobes_pars_fragment:Qb,logdepthbuf_fragment:Jb,logdepthbuf_pars_fragment:e2,logdepthbuf_pars_vertex:t2,logdepthbuf_vertex:n2,map_fragment:i2,map_pars_fragment:r2,map_particle_fragment:s2,map_particle_pars_fragment:a2,metalnessmap_fragment:o2,metalnessmap_pars_fragment:l2,morphinstance_vertex:u2,morphcolor_vertex:c2,morphnormal_vertex:f2,morphtarget_pars_vertex:d2,morphtarget_vertex:h2,normal_fragment_begin:p2,normal_fragment_maps:m2,normal_pars_fragment:g2,normal_pars_vertex:_2,normal_vertex:v2,normalmap_pars_fragment:x2,clearcoat_normal_fragment_begin:y2,clearcoat_normal_fragment_maps:S2,clearcoat_pars_fragment:M2,iridescence_pars_fragment:E2,opaque_fragment:w2,packing:T2,premultiplied_alpha_fragment:R2,project_vertex:A2,dithering_fragment:b2,dithering_pars_fragment:C2,roughnessmap_fragment:P2,roughnessmap_pars_fragment:L2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:I2,shadowmap_vertex:N2,shadowmask_pars_fragment:U2,skinbase_vertex:F2,skinning_pars_vertex:O2,skinning_vertex:k2,skinnormal_vertex:B2,specularmap_fragment:z2,specularmap_pars_fragment:V2,tonemapping_fragment:H2,tonemapping_pars_fragment:G2,transmission_fragment:W2,transmission_pars_fragment:X2,uv_pars_fragment:Y2,uv_pars_vertex:$2,uv_vertex:q2,worldpos_vertex:j2,background_vert:K2,background_frag:Z2,backgroundCube_vert:Q2,backgroundCube_frag:J2,cube_vert:eC,cube_frag:tC,depth_vert:nC,depth_frag:iC,distance_vert:rC,distance_frag:sC,equirect_vert:aC,equirect_frag:oC,linedashed_vert:lC,linedashed_frag:uC,meshbasic_vert:cC,meshbasic_frag:fC,meshlambert_vert:dC,meshlambert_frag:hC,meshmatcap_vert:pC,meshmatcap_frag:mC,meshnormal_vert:gC,meshnormal_frag:_C,meshphong_vert:vC,meshphong_frag:xC,meshphysical_vert:yC,meshphysical_frag:SC,meshtoon_vert:MC,meshtoon_frag:EC,points_vert:wC,points_frag:TC,shadow_vert:RC,shadow_frag:AC,sprite_vert:bC,sprite_frag:CC},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ki={basic:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:_n([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:_n([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:_n([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:_n([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:_n([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:_n([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:_n([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:_n([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:_n([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:_n([ye.common,ye.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:_n([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ki.physical={uniforms:_n([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Uu={r:0,b:0,g:0},PC=new Gt,VS=new ze;VS.set(-1,0,0,0,1,0,0,0,1);function LC(t,e,n,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,u,c=null,d=0,f=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function _(m){let x=!1;const S=p(m);S===null?g(a,o):S&&S.isColor&&(g(S,1),x=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(m,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===vf)?(u===void 0&&(u=new Pi(new Xl(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:so(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PC.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(VS),u.material.toneMapped=je.getTransfer(S.colorSpace)!==st,(c!==S||d!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pi(new xo(2,2),new Li({name:"BackgroundMaterial",uniforms:so(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Uu,OS(t)),n.buffers.color.setClear(Uu.r,Uu.g,Uu.b,x,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:_,addToRenderList:v,dispose:h}}function DC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,F,W,V,D){let Y=!1;const k=d(L,V,W,F);s!==k&&(s=k,u(s.object)),Y=p(L,V,W,D),Y&&_(L,V,W,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(L,F,W,V),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function c(L){return t.deleteVertexArray(L)}function d(L,F,W,V){const D=V.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const k=L.isInstancedMesh===!0?L.id:0;let N=Y[k];N===void 0&&(N={},Y[k]=N);let $=N[W.id];$===void 0&&($={},N[W.id]=$);let ee=$[D];return ee===void 0&&(ee=f(l()),$[D]=ee),ee}function f(L){const F=[],W=[],V=[];for(let D=0;D<n;D++)F[D]=0,W[D]=0,V[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:V,object:L,attributes:{},index:null}}function p(L,F,W,V){const D=s.attributes,Y=F.attributes;let k=0;const N=W.getAttributes();for(const $ in N)if(N[$].location>=0){const ne=D[$];let se=Y[$];if(se===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;k++}return s.attributesNum!==k||s.index!==V}function _(L,F,W,V){const D={},Y=F.attributes;let k=0;const N=W.getAttributes();for(const $ in N)if(N[$].location>=0){let ne=Y[$];ne===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),D[$]=se,k++}s.attributes=D,s.attributesNum=k,s.index=V}function v(){const L=s.newAttributes;for(let F=0,W=L.length;F<W;F++)L[F]=0}function g(L){h(L,0)}function h(L,F){const W=s.newAttributes,V=s.enabledAttributes,D=s.attributeDivisors;W[L]=1,V[L]===0&&(t.enableVertexAttribArray(L),V[L]=1),D[L]!==F&&(t.vertexAttribDivisor(L,F),D[L]=F)}function m(){const L=s.newAttributes,F=s.enabledAttributes;for(let W=0,V=F.length;W<V;W++)F[W]!==L[W]&&(t.disableVertexAttribArray(W),F[W]=0)}function x(L,F,W,V,D,Y,k){k===!0?t.vertexAttribIPointer(L,F,W,D,Y):t.vertexAttribPointer(L,F,W,V,D,Y)}function S(L,F,W,V){v();const D=V.attributes,Y=W.getAttributes(),k=F.defaultAttributeValues;for(const N in Y){const $=Y[N];if($.location>=0){let ee=D[N];if(ee===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const ne=ee.normalized,se=ee.itemSize,ke=e.get(ee);if(ke===void 0)continue;const Ce=ke.buffer,Ue=ke.type,te=ke.bytesPerElement,me=Ue===t.INT||Ue===t.UNSIGNED_INT||ee.gpuType===qm;if(ee.isInterleavedBufferAttribute){const he=ee.data,Fe=he.stride,Be=ee.offset;if(he.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)h($.location+Ne,he.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)g($.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Ne=0;Ne<$.locationSize;Ne++)x($.location+Ne,se/$.locationSize,Ue,ne,Fe*te,(Be+se/$.locationSize*Ne)*te,me)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<$.locationSize;he++)h($.location+he,ee.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<$.locationSize;he++)g($.location+he);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let he=0;he<$.locationSize;he++)x($.location+he,se/$.locationSize,Ue,ne,se*te,se/$.locationSize*he*te,me)}}else if(k!==void 0){const ne=k[N];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv($.location,ne);break;case 3:t.vertexAttrib3fv($.location,ne);break;case 4:t.vertexAttrib4fv($.location,ne);break;default:t.vertexAttrib1fv($.location,ne)}}}}m()}function M(){R();for(const L in i){const F=i[L];for(const W in F){const V=F[W];for(const D in V){const Y=V[D];for(const k in Y)c(Y[k].object),delete Y[k];delete V[D]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const W in F){const V=F[W];for(const D in V){const Y=V[D];for(const k in Y)c(Y[k].object),delete Y[k];delete V[D]}}delete i[L.id]}function w(L){for(const F in i){const W=i[F];for(const V in W){const D=W[V];if(D[L.id]===void 0)continue;const Y=D[L.id];for(const k in Y)c(Y[k].object),delete Y[k];delete D[L.id]}}}function y(L){for(const F in i){const W=i[F],V=L.isInstancedMesh===!0?L.id:0,D=W[V];if(D!==void 0){for(const Y in D){const k=D[Y];for(const N in k)c(k[N].object),delete k[N];delete D[Y]}delete W[V],Object.keys(W).length===0&&delete i[F]}}}function R(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:m}}function IC(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function NC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Ti&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const y=w===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ui&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hi&&!y)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Oe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:M,samples:T}}function UC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new As,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const m=s?0:i,x=m*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let M=0;M!==x;++M)S[M]=n[M];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const h=p+v*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(d[x]).applyMatrix4(m,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const $r=4,N_=[.125,.215,.35,.446,.526,.582],Ps=20,FC=256,No=new l0,U_=new tt;let bd=null,Cd=0,Pd=0,Ld=!1;const OC=new Z;class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=OC}=s;bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Cd,Pd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Sr,format:Ti,colorSpace:Vc,depthBuffer:!1},r=O_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kC(s)),this._blurMaterial=zC(s,e,n),this._ggxMaterial=BC(s,e,n)}return r}_compileMaterial(e){const n=new Pi(new br,e);this._renderer.compile(n,No)}_sceneToCubeUV(e,n,i,r,s){const l=new li(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(U_),d.toneMapping=$i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pi(new Xl,new a0({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let h=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,h=!0):(g.color.copy(U_),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const M=this._cubeSize;va(r,S*M,x>2?M:0,M,M),d.setRenderTarget(r),h&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qs||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;va(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,No)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-$r?i-_+$r:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,va(s,g,h,3*v,2*v),r.setRenderTarget(s),r.render(o,No),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,va(e,g,h,3*v,2*v),r.setRenderTarget(e),r.render(o,No)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ps-1),v=s/_,g=isFinite(s)?1+Math.floor(c*v):Ps;g>Ps&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);const h=[];let m=0;for(let w=0;w<Ps;++w){const y=w/v,R=Math.exp(-y*y/2);h.push(R),w===0?m+=R:w<g&&(m+=2*R)}for(let w=0;w<h.length;w++)h[w]=h[w]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],M=3*S*(r>x-$r?r-x+$r:0),T=4*(this._cubeSize-S);va(n,M,T,3*S,2*S),l.setRenderTarget(n),l.render(d,No)}}function kC(t){const e=[],n=[],i=[];let r=t;const s=t-$r+1+N_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-$r?l=N_[a-t+$r-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,v=3,g=2,h=1,m=new Float32Array(v*_*p),x=new Float32Array(g*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,y=T>2?0:-1,R=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];m.set(R,v*_*T),x.set(f,g*_*T);const P=[T,T,T,T,T,T];S.set(P,h*_*T)}const M=new br;M.setAttribute("position",new ji(m,v)),M.setAttribute("uv",new ji(x,g)),M.setAttribute("faceIndex",new ji(S,h)),i.push(new Pi(M,null)),r>$r&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function O_(t,e,n){const i=new qi(t,e,n);return i.texture.mapping=vf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BC(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function zC(t,e,n){const i=new Float32Array(Ps),r=new Z(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function k_(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function B_(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}class HS extends qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new US(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xl(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:hr});s.uniforms.tEquirect.value=n;const a=new Pi(r,s),o=n.minFilter;return n.minFilter===Ns&&(n.minFilter=dn),new YA(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function VC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===nd||p===id)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new HS(_.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",u),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,_=p===nd||p===id,v=p===qs||p===io;if(_||v){let g=n.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new F_(t)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const m=f.image;return _&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new F_(t)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f,p){return p===nd?f.mapping=qs:p===id&&(f.mapping=io),f}function l(f){let p=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&p++;return p===_}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function HC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Wa("WebGLRenderer: "+i+" extension not supported."),r}}}function GC(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(_===void 0)return;if(p!==null){const m=p.array;v=p.version;for(let x=0,S=m.length;x<S;x+=3){const M=m[x+0],T=m[x+1],w=m[x+2];f.push(M,T,T,w,w,M)}}else{const m=_.array;v=_.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const M=x+0,T=x+1,w=x+2;f.push(M,T,T,w,w,M)}}const g=new(_.count>=65535?IS:DS)(f,1);g.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function WC(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function u(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*a,p),n.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let v=0;for(let g=0;g<p;g++)v+=f[g];n.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function XC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YC(t,e,n){const i=new WeakMap,r=new Dt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*T*4*d),y=new bS(w,M,T,d);y.type=Hi,y.needsUpdate=!0;const R=S*4;for(let L=0;L<d;L++){const F=h[L],W=m[L],V=x[L],D=M*T*4*L;for(let Y=0;Y<F.count;Y++){const k=Y*R;_===!0&&(r.fromBufferAttribute(F,Y),w[D+k+0]=r.x,w[D+k+1]=r.y,w[D+k+2]=r.z,w[D+k+3]=0),v===!0&&(r.fromBufferAttribute(W,Y),w[D+k+4]=r.x,w[D+k+5]=r.y,w[D+k+6]=r.z,w[D+k+7]=0),g===!0&&(r.fromBufferAttribute(V,Y),w[D+k+8]=r.x,w[D+k+9]=r.y,w[D+k+10]=r.z,w[D+k+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new qe(M,T)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function $C(t,e,n,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const qC={[dS]:"LINEAR_TONE_MAPPING",[hS]:"REINHARD_TONE_MAPPING",[pS]:"CINEON_TONE_MAPPING",[mS]:"ACES_FILMIC_TONE_MAPPING",[_S]:"AGX_TONE_MAPPING",[vS]:"NEUTRAL_TONE_MAPPING",[gS]:"CUSTOM_TONE_MAPPING"};function jC(t,e,n,i,r,s){const a=new qi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ro(e,n):void 0}),o=new qi(e,n,{type:Sr,depthBuffer:!1,stencilBuffer:!1}),l=new br;l.setAttribute("position",new mr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new mr([0,2,0,0,2,0],2));const u=new OA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pi(l,u),d=new l0(-1,1,1,-1,0,1);let f=null,p=null,_=!1,v,g=null,h=[],m=!1;this.setSize=function(x,S){a.setSize(x,S),o.setSize(x,S);for(let M=0;M<h.length;M++){const T=h[M];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){h=x,m=h.length>0&&h[0].isRenderPass===!0;const S=a.width,M=a.height;for(let T=0;T<h.length;T++){const w=h[T];w.setSize&&w.setSize(S,M)}},this.begin=function(x,S){if(_||x.toneMapping===$i&&h.length===0)return!1;if(g=S,S!==null){const M=S.width,T=S.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return m===!1&&x.setRenderTarget(a),v=x.toneMapping,x.toneMapping=$i,!0},this.hasRenderPass=function(){return m},this.end=function(x,S){x.toneMapping=v,_=!0;let M=a,T=o;for(let w=0;w<h.length;w++){const y=h[w];if(y.enabled!==!1&&(y.render(x,T,M,S),y.needsSwap!==!1)){const R=M;M=T,T=R}}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,u.defines={},je.getTransfer(f)===st&&(u.defines.SRGB_TRANSFER="");const w=qC[p];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(g),x.render(c,d),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const GS=new hn,Rp=new ro(1,1),WS=new bS,XS=new pA,YS=new US,z_=[],V_=[],H_=new Float32Array(16),G_=new Float32Array(9),W_=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=z_[r];if(s===void 0&&(s=new Float32Array(r),z_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sf(t,e){let n=V_[e];n===void 0&&(n=new Int32Array(e),V_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function KC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function QC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function eP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,i))return;W_.set(i),t.uniformMatrix2fv(this.addr,!1,W_),$t(n,i)}}function tP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,i))return;G_.set(i),t.uniformMatrix3fv(this.addr,!1,G_),$t(n,i)}}function nP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,i))return;H_.set(i),t.uniformMatrix4fv(this.addr,!1,H_),$t(n,i)}}function iP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function sP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function aP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function oP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function uP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function cP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function fP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rp.compareFunction=n.isReversedDepthBuffer()?t0:e0,s=Rp):s=GS,n.setTexture2D(e||s,r)}function dP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||XS,r)}function hP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||YS,r)}function pP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||WS,r)}function mP(t){switch(t){case 5126:return KC;case 35664:return ZC;case 35665:return QC;case 35666:return JC;case 35674:return eP;case 35675:return tP;case 35676:return nP;case 5124:case 35670:return iP;case 35667:case 35671:return rP;case 35668:case 35672:return sP;case 35669:case 35673:return aP;case 5125:return oP;case 36294:return lP;case 36295:return uP;case 36296:return cP;case 35678:case 36198:case 36298:case 36306:case 35682:return fP;case 35679:case 36299:case 36307:return dP;case 35680:case 36300:case 36308:case 36293:return hP;case 36289:case 36303:case 36311:case 36292:return pP}}function gP(t,e){t.uniform1fv(this.addr,e)}function _P(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function vP(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function xP(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function yP(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function SP(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function MP(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function EP(t,e){t.uniform1iv(this.addr,e)}function wP(t,e){t.uniform2iv(this.addr,e)}function TP(t,e){t.uniform3iv(this.addr,e)}function RP(t,e){t.uniform4iv(this.addr,e)}function AP(t,e){t.uniform1uiv(this.addr,e)}function bP(t,e){t.uniform2uiv(this.addr,e)}function CP(t,e){t.uniform3uiv(this.addr,e)}function PP(t,e){t.uniform4uiv(this.addr,e)}function LP(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Rp:a=GS;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function DP(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||XS,s[a])}function IP(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||YS,s[a])}function NP(t,e,n){const i=this.cache,r=e.length,s=Sf(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||WS,s[a])}function UP(t){switch(t){case 5126:return gP;case 35664:return _P;case 35665:return vP;case 35666:return xP;case 35674:return yP;case 35675:return SP;case 35676:return MP;case 5124:case 35670:return EP;case 35667:case 35671:return wP;case 35668:case 35672:return TP;case 35669:case 35673:return RP;case 5125:return AP;case 36294:return bP;case 36295:return CP;case 36296:return PP;case 35678:case 36198:case 36298:case 36306:case 35682:return LP;case 35679:case 36299:case 36307:return DP;case 35680:case 36300:case 36308:case 36293:return IP;case 36289:case 36303:case 36311:case 36292:return NP}}class FP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mP(n.type)}}class OP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UP(n.type)}}class kP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function X_(t,e){t.seq.push(e),t.map[e.id]=e}function BP(t,e,n){const i=t.name,r=i.length;for(Dd.lastIndex=0;;){const s=Dd.exec(i),a=Dd.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){X_(n,u===void 0?new FP(o,t,e):new OP(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new kP(o),X_(n,d)),n=d}}}class oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);BP(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Y_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const zP=37297;let VP=0;function HP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const $_=new ze;function GP(t){je._getMatrix($_,je.workingColorSpace,t);const e=`mat3( ${$_.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Hc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function q_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+HP(t.getShaderSource(e),o)}else return s}function WP(t,e){const n=GP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const XP={[dS]:"Linear",[hS]:"Reinhard",[pS]:"Cineon",[mS]:"ACESFilmic",[_S]:"AgX",[vS]:"Neutral",[gS]:"Custom"};function YP(t,e){const n=XP[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fu=new Z;function $P(){je.getLuminanceCoefficients(Fu);const t=Fu.x.toFixed(4),e=Fu.y.toFixed(4),n=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function jP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ho(t){return t!==""}function j_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(t){return t.replace(ZP,JP)}const QP=new Map;function JP(t,e){let n=Ge[e];if(n===void 0){const i=QP.get(e);if(i!==void 0)n=Ge[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ap(n)}const e3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(t){return t.replace(e3,t3)}function t3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Q_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const n3={[nc]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function i3(t){return n3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r3={[qs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[vf]:"ENVMAP_TYPE_CUBE_UV"};function s3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":r3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const a3={[io]:"ENVMAP_MODE_REFRACTION"};function o3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":a3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l3={[fS]:"ENVMAP_BLENDING_MULTIPLY",[DR]:"ENVMAP_BLENDING_MIX",[IR]:"ENVMAP_BLENDING_ADD"};function u3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":l3[t.combine]||"ENVMAP_BLENDING_NONE"}function c3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function f3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=i3(n),u=s3(n),c=o3(n),d=u3(n),f=c3(n),p=qP(n),_=jP(s),v=r.createProgram();let g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ho).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ho).join(`
`),h.length>0&&(h+=`
`)):(g=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),h=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Ge.tonemapping_pars_fragment:"",n.toneMapping!==$i?YP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,WP("linearToOutputTexel",n.outputColorSpace),$P(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),a=Ap(a),a=j_(a,n),a=K_(a,n),o=Ap(o),o=j_(o,n),o=K_(o,n),a=Z_(a),o=Z_(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===u_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===u_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+g+a,S=m+h+o,M=Y_(r,r.VERTEX_SHADER,x),T=Y_(r,r.FRAGMENT_SHADER,S);r.attachShader(v,M),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(M)||"",V=r.getShaderInfoLog(T)||"",D=F.trim(),Y=W.trim(),k=V.trim();let N=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,M,T);else{const ee=q_(r,M,"vertex"),ne=q_(r,T,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+ee+`
`+ne)}else D!==""?Oe("WebGLProgram: Program Info Log:",D):(Y===""||k==="")&&($=!1);$&&(L.diagnostics={runnable:N,programLog:D,vertexShader:{log:Y,prefix:g},fragmentShader:{log:k,prefix:h}})}r.deleteShader(M),r.deleteShader(T),y=new oc(r,v),R=KP(r,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let R;this.getAttributes=function(){return R===void 0&&w(this),R};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(v,zP)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}let d3=0;class h3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new p3(e),n.set(e,i)),i}}class p3{constructor(e){this.id=d3++,this.code=e,this.usedTimes=0}}function m3(t){return t===js||t===Bc||t===zc}function g3(t,e,n,i,r,s){const a=new CS,o=new h3,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,R,P,L,F,W){const V=L.fog,D=F.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||Y,k),$=N&&N.mapping===vf?N.image.height:null,ee=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ne=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,se=ne!==void 0?ne.length:0;let ke=0;D.morphAttributes.position!==void 0&&(ke=1),D.morphAttributes.normal!==void 0&&(ke=2),D.morphAttributes.color!==void 0&&(ke=3);let Ce,Ue,te,me;if(ee){const we=ki[ee];Ce=we.vertexShader,Ue=we.fragmentShader}else{Ce=y.vertexShader,Ue=y.fragmentShader;const we=o.getVertexShaderStage(y),rt=o.getFragmentShaderStage(y);o.update(y,we,rt),te=we.id,me=rt.id}const he=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,pt=!!y.map,He=!!y.matcap,it=!!N,Ze=!!y.aoMap,Ye=!!y.lightMap,yt=!!y.bumpMap&&y.wireframe===!1,Ct=!!y.normalMap,Nt=!!y.displacementMap,Bt=!!y.emissiveMap,mt=!!y.metalnessMap,St=!!y.roughnessMap,C=y.anisotropy>0,_e=y.clearcoat>0,xe=y.dispersion>0,b=y.iridescence>0,E=y.sheen>0,I=y.transmission>0,O=C&&!!y.anisotropyMap,X=_e&&!!y.clearcoatMap,re=_e&&!!y.clearcoatNormalMap,oe=_e&&!!y.clearcoatRoughnessMap,H=b&&!!y.iridescenceMap,Q=b&&!!y.iridescenceThicknessMap,ae=E&&!!y.sheenColorMap,ve=E&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,Te=!!y.specularIntensityMap,Pe=I&&!!y.transmissionMap,pe=I&&!!y.thicknessMap,U=!!y.gradientMap,ue=!!y.alphaMap,q=y.alphaTest>0,le=!!y.alphaHash,ge=!!y.extensions;let ie=$i;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ie=t.toneMapping);const Ee={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:Ue,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:pt,matcap:He,envMap:it,envMapMode:it&&N.mapping,envMapCubeUVHeight:$,aoMap:Ze,lightMap:Ye,bumpMap:yt,normalMap:Ct,displacementMap:Nt,emissiveMap:Bt,normalMapObjectSpace:Ct&&y.normalMapType===FR,normalMapTangentSpace:Ct&&y.normalMapType===a_,packedNormalMap:Ct&&y.normalMapType===a_&&m3(y.normalMap.format),metalnessMap:mt,roughnessMap:St,anisotropy:C,anisotropyMap:O,clearcoat:_e,clearcoatMap:X,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,dispersion:xe,iridescence:b,iridescenceMap:H,iridescenceThicknessMap:Q,sheen:E,sheenColorMap:ae,sheenRoughnessMap:ve,specularMap:fe,specularColorMap:ce,specularIntensityMap:Te,transmission:I,transmissionMap:Pe,thicknessMap:pe,gradientMap:U,opaque:y.transparent===!1&&y.blending===Ga&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:q,alphaHash:le,combine:y.combine,mapUv:pt&&_(y.map.channel),aoMapUv:Ze&&_(y.aoMap.channel),lightMapUv:Ye&&_(y.lightMap.channel),bumpMapUv:yt&&_(y.bumpMap.channel),normalMapUv:Ct&&_(y.normalMap.channel),displacementMapUv:Nt&&_(y.displacementMap.channel),emissiveMapUv:Bt&&_(y.emissiveMap.channel),metalnessMapUv:mt&&_(y.metalnessMap.channel),roughnessMapUv:St&&_(y.roughnessMap.channel),anisotropyMapUv:O&&_(y.anisotropyMap.channel),clearcoatMapUv:X&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:H&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(y.sheenRoughnessMap.channel),specularMapUv:fe&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:Te&&_(y.specularIntensityMap.channel),transmissionMapUv:Pe&&_(y.transmissionMap.channel),thicknessMapUv:pe&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ct||C),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(pt||ue),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&Ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:pt&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zi,flipSided:y.side===Ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)R.push(P),R.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(h(R,y),m(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function h(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function m(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function x(y){const R=p[y.type];let P;if(R){const L=ki[R];P=NA.clone(L.uniforms)}else P=y.uniforms;return P}function S(y,R){let P=c.get(R);return P!==void 0?++P.usedTimes:(P=new f3(t,R,y,r),u.push(P),c.set(R,P)),P}function M(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:x,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:w}}function _3(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function v3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function J_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ev(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,v,g,h){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:h},t[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=_,m.materialVariant=a(f),m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=g,m.group=h),e++,m}function l(f,p,_,v,g,h){const m=o(f,p,_,v,g,h);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):n.push(m)}function u(f,p,_,v,g,h){const m=o(f,p,_,v,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function c(f,p,_){n.length>1&&n.sort(f||v3),i.length>1&&i.sort(p||J_),r.length>1&&r.sort(p||J_),_&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=t.length;f<p;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function x3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new ev,t.set(i,[a])):r>=s.length?(a=new ev,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function y3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new tt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function S3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let M3=0;function E3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function w3(t){const e=new y3,n=S3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Z);const r=new Z,s=new Gt,a=new Gt;function o(u){let c=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,_=0,v=0,g=0,h=0,m=0,x=0,S=0,M=0,T=0,w=0;u.sort(E3);for(let R=0,P=u.length;R<P;R++){const L=u[R],F=L.color,W=L.intensity,V=L.distance;let D=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===js?D=L.shadow.map.texture:D=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=F.r*W,d+=F.g*W,f+=F.b*W;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],W);w++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,N=n.get(L);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=L.shadow.matrix,m++}i.directional[p]=Y,p++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(W),Y.distance=V,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[v]=Y;const k=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,k.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=k.matrix,L.castShadow){const N=n.get(L);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=D,S++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(F).multiplyScalar(W),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=Y,g++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const k=L.shadow,N=n.get(L);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,N.shadowCameraNear=k.camera.near,N.shadowCameraFar=k.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=D,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(W),Y.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[h]=Y,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==h||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==M||y.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,y.directionalLength=p,y.pointLength=_,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=h,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=M,y.numLightProbes=w,i.version=M3++)}function l(u,c){let d=0,f=0,p=0,_=0,v=0;const g=c.matrixWorldInverse;for(let h=0,m=u.length;h<m;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function tv(t){const e=new w3(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function T3(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new tv(t),e.set(r,[o])):s>=a.length?(o=new tv(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const R3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A3=`uniform sampler2D shadow_pass;
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
}`,b3=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],C3=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],nv=new Gt,Uo=new Z,Id=new Z;function P3(t,e,n){let i=new NS;const r=new qe,s=new qe,a=new Dt,o=new kA,l=new BA,u={},c=n.maxTextureSize,d={[us]:Ln,[Ln]:us,[zi]:zi},f=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:R3,fragmentShader:A3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new br;_.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pi(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let h=this.type;this.render=function(T,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===hR&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const R=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(hr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=h!==this.type;W&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(D=>D.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,D=T.length;V<D;V++){const Y=T[V],k=Y.shadow;if(k===void 0){Oe("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const N=k.getFrameExtents();r.multiply(N),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/N.x),r.x=s.x*N.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/N.y),r.y=s.y*N.y,k.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=$,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Vo){if(Y.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new qi(r.x,r.y,{format:js,type:Sr,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new ro(r.x,r.y,Hi),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=Mr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=en,k.map.depthTexture.magFilter=en}else Y.isPointLight?(k.map=new HS(r.x),k.map.depthTexture=new DA(r.x,Zi)):(k.map=new qi(r.x,r.y),k.map.depthTexture=new ro(r.x,r.y,Zi)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=Mr,this.type===nc?(k.map.depthTexture.compareFunction=$?t0:e0,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=en,k.map.depthTexture.magFilter=en);k.camera.updateProjectionMatrix()}const ee=k.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<ee;ne++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(k.map),t.clear());const se=k.getViewport(ne);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),F.viewport(a)}if(Y.isPointLight){const se=k.camera,ke=k.matrix,Ce=Y.distance||se.far;Ce!==se.far&&(se.far=Ce,se.updateProjectionMatrix()),Uo.setFromMatrixPosition(Y.matrixWorld),se.position.copy(Uo),Id.copy(se.position),Id.add(b3[ne]),se.up.copy(C3[ne]),se.lookAt(Id),se.updateMatrixWorld(),ke.makeTranslation(-Uo.x,-Uo.y,-Uo.z),nv.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),k._frustum.setFromProjectionMatrix(nv,se.coordinateSystem,se.reversedDepth)}else k.updateMatrices(Y);i=k.getFrustum(),S(w,y,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Vo&&m(k,y),k.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(R,P,L)};function m(T,w){const y=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qi(r.x,r.y,{format:js,type:Sr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,y,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,y,p,v,null)}function x(T,w,y,R){let P=null;const L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=y.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=P.uuid,W=w.uuid;let V=u[F];V===void 0&&(V={},u[F]=V);let D=V[W];D===void 0&&(D=P.clone(),V[W]=D,w.addEventListener("dispose",M)),P=D}if(P.visible=w.visible,P.wireframe=w.wireframe,R===Vo?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=t.properties.get(P);F.light=y}return P}function S(T,w,y,R,P){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Vo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const W=e.update(T),V=T.material;if(Array.isArray(V)){const D=W.groups;for(let Y=0,k=D.length;Y<k;Y++){const N=D[Y],$=V[N.materialIndex];if($&&$.visible){const ee=x(T,$,R,P);T.onBeforeShadow(t,T,w,y,W,ee,N),t.renderBufferDirect(y,null,W,ee,T,N),T.onAfterShadow(t,T,w,y,W,ee,N)}}}else if(V.visible){const D=x(T,V,R,P);T.onBeforeShadow(t,T,w,y,W,D,null),t.renderBufferDirect(y,null,W,D,T,null),T.onAfterShadow(t,T,w,y,W,D,null)}}const F=T.children;for(let W=0,V=F.length;W<V;W++)S(F[W],w,y,R,P)}function M(T){T.target.removeEventListener("dispose",M);for(const y in u){const R=u[y],P=T.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function L3(t,e){function n(){let U=!1;const ue=new Dt;let q=null;const le=new Dt(0,0,0,0);return{setMask:function(ge){q!==ge&&!U&&(t.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ie,Ee,we,rt){rt===!0&&(ge*=we,ie*=we,Ee*=we),ue.set(ge,ie,Ee,we),le.equals(ue)===!1&&(t.clearColor(ge,ie,Ee,we),le.copy(ue))},reset:function(){U=!1,q=null,le.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,q=null,le=null,ge=null;return{setReversed:function(ie){if(ue!==ie){const Ee=e.get("EXT_clip_control");ie?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const we=ge;ge=null,this.setClear(we)}},getReversed:function(){return ue},setTest:function(ie){ie?he(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(ie){q!==ie&&!U&&(t.depthMask(ie),q=ie)},setFunc:function(ie){if(ue&&(ie=YR[ie]),le!==ie){switch(ie){case Vh:t.depthFunc(t.NEVER);break;case Hh:t.depthFunc(t.ALWAYS);break;case Gh:t.depthFunc(t.LESS);break;case no:t.depthFunc(t.LEQUAL);break;case Wh:t.depthFunc(t.EQUAL);break;case Xh:t.depthFunc(t.GEQUAL);break;case Yh:t.depthFunc(t.GREATER);break;case $h:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ge!==ie&&(ge=ie,ue&&(ie=1-ie),t.clearDepth(ie))},reset:function(){U=!1,q=null,le=null,ge=null,ue=!1}}}function r(){let U=!1,ue=null,q=null,le=null,ge=null,ie=null,Ee=null,we=null,rt=null;return{setTest:function(nt){U||(nt?he(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!U&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,En,ei){(q!==nt||le!==En||ge!==ei)&&(t.stencilFunc(nt,En,ei),q=nt,le=En,ge=ei)},setOp:function(nt,En,ei){(ie!==nt||Ee!==En||we!==ei)&&(t.stencilOp(nt,En,ei),ie=nt,Ee=En,we=ei)},setLocked:function(nt){U=nt},setClear:function(nt){rt!==nt&&(t.clearStencil(nt),rt=nt)},reset:function(){U=!1,ue=null,q=null,le=null,ge=null,ie=null,Ee=null,we=null,rt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,_=[],v=null,g=!1,h=null,m=null,x=null,S=null,M=null,T=null,w=null,y=new tt(0,0,0),R=0,P=!1,L=null,F=null,W=null,V=null,D=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec($)[1]),k=N>=1):$.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=N>=2);let ee=null,ne={};const se=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Ce=new Dt().fromArray(se),Ue=new Dt().fromArray(ke);function te(U,ue,q,le){const ge=new Uint8Array(4),ie=t.createTexture();t.bindTexture(U,ie),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<q;Ee++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ue+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ie}const me={};me[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(t.DEPTH_TEST),a.setFunc(no),yt(!1),Ct(n_),he(t.CULL_FACE),Ze(hr);function he(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function Fe(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Be(U,ue){return f[U]!==ue?(t.bindFramebuffer(U,ue),f[U]=ue,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ne(U,ue){let q=_,le=!1;if(U){q=p.get(ue),q===void 0&&(q=[],p.set(ue,q));const ge=U.textures;if(q.length!==ge.length||q[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ee=ge.length;ie<Ee;ie++)q[ie]=t.COLOR_ATTACHMENT0+ie;q.length=ge.length,le=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,le=!0);le&&t.drawBuffers(q)}function pt(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const He={[Cs]:t.FUNC_ADD,[mR]:t.FUNC_SUBTRACT,[gR]:t.FUNC_REVERSE_SUBTRACT};He[_R]=t.MIN,He[vR]=t.MAX;const it={[xR]:t.ZERO,[yR]:t.ONE,[SR]:t.SRC_COLOR,[Bh]:t.SRC_ALPHA,[AR]:t.SRC_ALPHA_SATURATE,[TR]:t.DST_COLOR,[ER]:t.DST_ALPHA,[MR]:t.ONE_MINUS_SRC_COLOR,[zh]:t.ONE_MINUS_SRC_ALPHA,[RR]:t.ONE_MINUS_DST_COLOR,[wR]:t.ONE_MINUS_DST_ALPHA,[bR]:t.CONSTANT_COLOR,[CR]:t.ONE_MINUS_CONSTANT_COLOR,[PR]:t.CONSTANT_ALPHA,[LR]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(U,ue,q,le,ge,ie,Ee,we,rt,nt){if(U===hr){g===!0&&(Fe(t.BLEND),g=!1);return}if(g===!1&&(he(t.BLEND),g=!0),U!==pR){if(U!==h||nt!==P){if((m!==Cs||M!==Cs)&&(t.blendEquation(t.FUNC_ADD),m=Cs,M=Cs),nt)switch(U){case Ga:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case i_:t.blendFunc(t.ONE,t.ONE);break;case r_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case s_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",U);break}else switch(U){case Ga:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case i_:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case r_:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",U);break}x=null,S=null,T=null,w=null,y.set(0,0,0),R=0,h=U,P=nt}return}ge=ge||ue,ie=ie||q,Ee=Ee||le,(ue!==m||ge!==M)&&(t.blendEquationSeparate(He[ue],He[ge]),m=ue,M=ge),(q!==x||le!==S||ie!==T||Ee!==w)&&(t.blendFuncSeparate(it[q],it[le],it[ie],it[Ee]),x=q,S=le,T=ie,w=Ee),(we.equals(y)===!1||rt!==R)&&(t.blendColor(we.r,we.g,we.b,rt),y.copy(we),R=rt),h=U,P=!1}function Ye(U,ue){U.side===zi?Fe(t.CULL_FACE):he(t.CULL_FACE);let q=U.side===Ln;ue&&(q=!q),yt(q),U.blending===Ga&&U.transparent===!1?Ze(hr):Ze(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const le=U.stencilWrite;o.setTest(le),le&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function yt(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function Ct(U){U!==fR?(he(t.CULL_FACE),U!==F&&(U===n_?t.cullFace(t.BACK):U===dR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),F=U}function Nt(U){U!==W&&(k&&t.lineWidth(U),W=U)}function Bt(U,ue,q){U?(he(t.POLYGON_OFFSET_FILL),(V!==ue||D!==q)&&(V=ue,D=q,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,q))):Fe(t.POLYGON_OFFSET_FILL)}function mt(U){U?he(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function St(U){U===void 0&&(U=t.TEXTURE0+Y-1),ee!==U&&(t.activeTexture(U),ee=U)}function C(U,ue,q){q===void 0&&(ee===null?q=t.TEXTURE0+Y-1:q=ee);let le=ne[q];le===void 0&&(le={type:void 0,texture:void 0},ne[q]=le),(le.type!==U||le.texture!==ue)&&(ee!==q&&(t.activeTexture(q),ee=q),t.bindTexture(U,ue||me[U]),le.type=U,le.texture=ue)}function _e(){const U=ne[ee];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xe(){try{t.compressedTexImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function E(){try{t.texSubImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function I(){try{t.texSubImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function O(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function X(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function re(){try{t.texStorage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function oe(){try{t.texStorage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function H(){try{t.texImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function Q(){try{t.texImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function ae(U){return d[U]!==void 0?d[U]:t.getParameter(U)}function ve(U,ue){d[U]!==ue&&(t.pixelStorei(U,ue),d[U]=ue)}function fe(U){Ce.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ce.copy(U))}function ce(U){Ue.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ue.copy(U))}function Te(U,ue){let q=u.get(ue);q===void 0&&(q=new WeakMap,u.set(ue,q));let le=q.get(U);le===void 0&&(le=t.getUniformBlockIndex(ue,U.name),q.set(U,le))}function Pe(U,ue){const le=u.get(ue).get(U);l.get(ue)!==le&&(t.uniformBlockBinding(ue,le,U.__bindingPointIndex),l.set(ue,le))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},ee=null,ne={},f={},p=new WeakMap,_=[],v=null,g=!1,h=null,m=null,x=null,S=null,M=null,T=null,w=null,y=new tt(0,0,0),R=0,P=!1,L=null,F=null,W=null,V=null,D=null,Ce.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Fe,bindFramebuffer:Be,drawBuffers:Ne,useProgram:pt,setBlending:Ze,setMaterial:Ye,setFlipSided:yt,setCullFace:Ct,setLineWidth:Nt,setPolygonOffset:Bt,setScissorTest:mt,activeTexture:St,bindTexture:C,unbindTexture:_e,compressedTexImage2D:xe,compressedTexImage3D:b,texImage2D:H,texImage3D:Q,pixelStorei:ve,getParameter:ae,updateUBOMapping:Te,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:oe,texSubImage2D:E,texSubImage3D:I,compressedTexSubImage2D:O,compressedTexSubImage3D:X,scissor:fe,viewport:ce,reset:pe}}function D3(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qe,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,E){return _?new OffscreenCanvas(b,E):Rl("canvas")}function g(b,E,I){let O=1;const X=xe(b);if((X.width>I||X.height>I)&&(O=I/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const re=Math.floor(O*X.width),oe=Math.floor(O*X.height);f===void 0&&(f=v(re,oe));const H=E?v(re,oe):f;return H.width=re,H.height=oe,H.getContext("2d").drawImage(b,0,0,re,oe),Oe("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+re+"x"+oe+")."),H}else return"data"in b&&Oe("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function h(b){return b.generateMipmaps}function m(b){t.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(b,E,I,O,X,re=!1){if(b!==null){if(t[b]!==void 0)return t[b];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe;O&&(oe=e.get("EXT_texture_norm16"),oe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=E;if(E===t.RED&&(I===t.FLOAT&&(H=t.R32F),I===t.HALF_FLOAT&&(H=t.R16F),I===t.UNSIGNED_BYTE&&(H=t.R8),I===t.UNSIGNED_SHORT&&oe&&(H=oe.R16_EXT),I===t.SHORT&&oe&&(H=oe.R16_SNORM_EXT)),E===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.R8UI),I===t.UNSIGNED_SHORT&&(H=t.R16UI),I===t.UNSIGNED_INT&&(H=t.R32UI),I===t.BYTE&&(H=t.R8I),I===t.SHORT&&(H=t.R16I),I===t.INT&&(H=t.R32I)),E===t.RG&&(I===t.FLOAT&&(H=t.RG32F),I===t.HALF_FLOAT&&(H=t.RG16F),I===t.UNSIGNED_BYTE&&(H=t.RG8),I===t.UNSIGNED_SHORT&&oe&&(H=oe.RG16_EXT),I===t.SHORT&&oe&&(H=oe.RG16_SNORM_EXT)),E===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.RG8UI),I===t.UNSIGNED_SHORT&&(H=t.RG16UI),I===t.UNSIGNED_INT&&(H=t.RG32UI),I===t.BYTE&&(H=t.RG8I),I===t.SHORT&&(H=t.RG16I),I===t.INT&&(H=t.RG32I)),E===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.RGB8UI),I===t.UNSIGNED_SHORT&&(H=t.RGB16UI),I===t.UNSIGNED_INT&&(H=t.RGB32UI),I===t.BYTE&&(H=t.RGB8I),I===t.SHORT&&(H=t.RGB16I),I===t.INT&&(H=t.RGB32I)),E===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),I===t.UNSIGNED_INT&&(H=t.RGBA32UI),I===t.BYTE&&(H=t.RGBA8I),I===t.SHORT&&(H=t.RGBA16I),I===t.INT&&(H=t.RGBA32I)),E===t.RGB&&(I===t.UNSIGNED_SHORT&&oe&&(H=oe.RGB16_EXT),I===t.SHORT&&oe&&(H=oe.RGB16_SNORM_EXT),I===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),E===t.RGBA){const Q=re?Hc:je.getTransfer(X);I===t.FLOAT&&(H=t.RGBA32F),I===t.HALF_FLOAT&&(H=t.RGBA16F),I===t.UNSIGNED_BYTE&&(H=Q===st?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT&&oe&&(H=oe.RGBA16_EXT),I===t.SHORT&&oe&&(H=oe.RGBA16_SNORM_EXT),I===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function M(b,E){let I;return b?E===null||E===Zi||E===Tl?I=t.DEPTH24_STENCIL8:E===Hi?I=t.DEPTH32F_STENCIL8:E===wl&&(I=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===Tl?I=t.DEPTH_COMPONENT24:E===Hi?I=t.DEPTH_COMPONENT32F:E===wl&&(I=t.DEPTH_COMPONENT16),I}function T(b,E){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function w(b){const E=b.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&d.delete(E)}function y(b){const E=b.target;E.removeEventListener("dispose",y),L(E)}function R(b){const E=i.get(b);if(E.__webglInit===void 0)return;const I=b.source,O=p.get(I);if(O){const X=O[E.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(b),Object.keys(O).length===0&&p.delete(I)}i.remove(b)}function P(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const I=b.source,O=p.get(I);delete O[E.__cacheKey],a.memory.textures--}function L(b){const E=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(E.__webglFramebuffer[O]))for(let X=0;X<E.__webglFramebuffer[O].length;X++)t.deleteFramebuffer(E.__webglFramebuffer[O][X]);else t.deleteFramebuffer(E.__webglFramebuffer[O]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[O])}else{if(Array.isArray(E.__webglFramebuffer))for(let O=0;O<E.__webglFramebuffer.length;O++)t.deleteFramebuffer(E.__webglFramebuffer[O]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let O=0;O<E.__webglColorRenderbuffer.length;O++)E.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[O]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const I=b.textures;for(let O=0,X=I.length;O<X;O++){const re=i.get(I[O]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(I[O])}i.remove(b)}let F=0;function W(){F=0}function V(){return F}function D(b){F=b}function Y(){const b=F;return b>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),F+=1,b}function k(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function N(b,E){const I=i.get(b);if(b.isVideoTexture&&C(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&I.__version!==b.version){const O=b.image;if(O===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(I,b,E);return}}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+E)}function $(b,E){const I=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){Fe(I,b,E);return}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+E)}function ee(b,E){const I=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){Fe(I,b,E);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+E)}function ne(b,E){const I=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&I.__version!==b.version){Be(I,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+E)}const se={[qh]:t.REPEAT,[fr]:t.CLAMP_TO_EDGE,[jh]:t.MIRRORED_REPEAT},ke={[en]:t.NEAREST,[NR]:t.NEAREST_MIPMAP_NEAREST,[mu]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[rd]:t.LINEAR_MIPMAP_NEAREST,[Ns]:t.LINEAR_MIPMAP_LINEAR},Ce={[OR]:t.NEVER,[HR]:t.ALWAYS,[kR]:t.LESS,[e0]:t.LEQUAL,[BR]:t.EQUAL,[t0]:t.GEQUAL,[zR]:t.GREATER,[VR]:t.NOTEQUAL};function Ue(b,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===rd||E.magFilter===mu||E.magFilter===Ns||E.minFilter===dn||E.minFilter===rd||E.minFilter===mu||E.minFilter===Ns)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,se[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,se[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,se[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ke[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ke[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===en||E.minFilter!==mu&&E.minFilter!==Ns||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function te(b,E){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",w));const O=E.source;let X=p.get(O);X===void 0&&(X={},p.set(O,X));const re=k(E);if(re!==b.__cacheKey){X[re]===void 0&&(X[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),X[re].usedTimes++;const oe=X[b.__cacheKey];oe!==void 0&&(X[b.__cacheKey].usedTimes--,oe.usedTimes===0&&P(E)),b.__cacheKey=re,b.__webglTexture=X[re].texture}return I}function me(b,E,I){return Math.floor(Math.floor(b/I)/E)}function he(b,E,I,O){const re=b.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,I,O,E.data);else{re.sort((ve,fe)=>ve.start-fe.start);let oe=0;for(let ve=1;ve<re.length;ve++){const fe=re[oe],ce=re[ve],Te=fe.start+fe.count,Pe=me(ce.start,E.width,4),pe=me(fe.start,E.width,4);ce.start<=Te+1&&Pe===pe&&me(ce.start+ce.count-1,E.width,4)===Pe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++oe,re[oe]=ce)}re.length=oe+1;const H=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let ve=0,fe=re.length;ve<fe;ve++){const ce=re[ve],Te=Math.floor(ce.start/4),Pe=Math.ceil(ce.count/4),pe=Te%E.width,U=Math.floor(Te/E.width),ue=Pe,q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,pe,U,ue,q,I,O,E.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,H),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ae)}}function Fe(b,E,I){let O=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(O=t.TEXTURE_3D);const X=te(b,E),re=E.source;n.bindTexture(O,b.__webglTexture,t.TEXTURE0+I);const oe=i.get(re);if(re.version!==oe.__version||X===!0){if(n.activeTexture(t.TEXTURE0+I),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const q=je.getPrimaries(je.workingColorSpace),le=E.colorSpace===Wr?null:je.getPrimaries(E.colorSpace),ge=E.colorSpace===Wr||q===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=g(E.image,!1,r.maxTextureSize);Q=_e(E,Q);const ae=s.convert(E.format,E.colorSpace),ve=s.convert(E.type);let fe=S(E.internalFormat,ae,ve,E.normalized,E.colorSpace,E.isVideoTexture);Ue(O,E);let ce;const Te=E.mipmaps,Pe=E.isVideoTexture!==!0,pe=oe.__version===void 0||X===!0,U=re.dataReady,ue=T(E,Q);if(E.isDepthTexture)fe=M(E.format===Us,E.type),pe&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,fe,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,fe,Q.width,Q.height,0,ae,ve,null));else if(E.isDataTexture)if(Te.length>0){Pe&&pe&&n.texStorage2D(t.TEXTURE_2D,ue,fe,Te[0].width,Te[0].height);for(let q=0,le=Te.length;q<le;q++)ce=Te[q],Pe?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ce.width,ce.height,ae,ve,ce.data):n.texImage2D(t.TEXTURE_2D,q,fe,ce.width,ce.height,0,ae,ve,ce.data);E.generateMipmaps=!1}else Pe?(pe&&n.texStorage2D(t.TEXTURE_2D,ue,fe,Q.width,Q.height),U&&he(E,Q,ae,ve)):n.texImage2D(t.TEXTURE_2D,0,fe,Q.width,Q.height,0,ae,ve,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,Te[0].width,Te[0].height,Q.depth);for(let q=0,le=Te.length;q<le;q++)if(ce=Te[q],E.format!==Ti)if(ae!==null)if(Pe){if(U)if(E.layerUpdates.size>0){const ge=I_(ce.width,ce.height,E.format,E.type);for(const ie of E.layerUpdates){const Ee=ce.data.subarray(ie*ge/ce.data.BYTES_PER_ELEMENT,(ie+1)*ge/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,ie,ce.width,ce.height,1,ae,Ee)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,Q.depth,ae,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,fe,ce.width,ce.height,Q.depth,0,ce.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,Q.depth,ae,ve,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,fe,ce.width,ce.height,Q.depth,0,ae,ve,ce.data)}else{Pe&&pe&&n.texStorage2D(t.TEXTURE_2D,ue,fe,Te[0].width,Te[0].height);for(let q=0,le=Te.length;q<le;q++)ce=Te[q],E.format!==Ti?ae!==null?Pe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,ce.width,ce.height,ae,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,q,fe,ce.width,ce.height,0,ce.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ce.width,ce.height,ae,ve,ce.data):n.texImage2D(t.TEXTURE_2D,q,fe,ce.width,ce.height,0,ae,ve,ce.data)}else if(E.isDataArrayTexture)if(Pe){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,Q.width,Q.height,Q.depth),U)if(E.layerUpdates.size>0){const q=I_(Q.width,Q.height,E.format,E.type);for(const le of E.layerUpdates){const ge=Q.data.subarray(le*q/Q.data.BYTES_PER_ELEMENT,(le+1)*q/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,ae,ve,ge)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,ve,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,ae,ve,Q.data);else if(E.isData3DTexture)Pe?(pe&&n.texStorage3D(t.TEXTURE_3D,ue,fe,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,ve,Q.data)):n.texImage3D(t.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,ae,ve,Q.data);else if(E.isFramebufferTexture){if(pe)if(Pe)n.texStorage2D(t.TEXTURE_2D,ue,fe,Q.width,Q.height);else{let q=Q.width,le=Q.height;for(let ge=0;ge<ue;ge++)n.texImage2D(t.TEXTURE_2D,ge,fe,q,le,0,ae,ve,null),q>>=1,le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in t){const q=t.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Q.parentNode!==q){q.appendChild(Q),d.add(E),q.onpaint=le=>{const ge=le.changedElements;for(const ie of d)ge.includes(ie.image)&&(ie.needsUpdate=!0)},q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ge=t.RGBA,ie=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,ie,Ee,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Pe&&pe){const q=xe(Te[0]);n.texStorage2D(t.TEXTURE_2D,ue,fe,q.width,q.height)}for(let q=0,le=Te.length;q<le;q++)ce=Te[q],Pe?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ae,ve,ce):n.texImage2D(t.TEXTURE_2D,q,fe,ae,ve,ce);E.generateMipmaps=!1}else if(Pe){if(pe){const q=xe(Q);n.texStorage2D(t.TEXTURE_2D,ue,fe,q.width,q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,ve,Q)}else n.texImage2D(t.TEXTURE_2D,0,fe,ae,ve,Q);h(E)&&m(O),oe.__version=re.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Be(b,E,I){if(E.image.length!==6)return;const O=te(b,E),X=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+I);const re=i.get(X);if(X.version!==re.__version||O===!0){n.activeTexture(t.TEXTURE0+I);const oe=je.getPrimaries(je.workingColorSpace),H=E.colorSpace===Wr?null:je.getPrimaries(E.colorSpace),Q=E.colorSpace===Wr||oe===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,ve=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!ae&&!ve?fe[ie]=g(E.image[ie],!0,r.maxCubemapSize):fe[ie]=ve?E.image[ie].image:E.image[ie],fe[ie]=_e(E,fe[ie]);const ce=fe[0],Te=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type),pe=S(E.internalFormat,Te,Pe,E.normalized,E.colorSpace),U=E.isVideoTexture!==!0,ue=re.__version===void 0||O===!0,q=X.dataReady;let le=T(E,ce);Ue(t.TEXTURE_CUBE_MAP,E);let ge;if(ae){U&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,pe,ce.width,ce.height);for(let ie=0;ie<6;ie++){ge=fe[ie].mipmaps;for(let Ee=0;Ee<ge.length;Ee++){const we=ge[Ee];E.format!==Ti?Te!==null?U?q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Te,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,pe,we.width,we.height,0,we.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Te,Pe,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,pe,we.width,we.height,0,Te,Pe,we.data)}}}else{if(ge=E.mipmaps,U&&ue){ge.length>0&&le++;const ie=xe(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,pe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ve){U?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Te,Pe,fe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,fe[ie].width,fe[ie].height,0,Te,Pe,fe[ie].data);for(let Ee=0;Ee<ge.length;Ee++){const rt=ge[Ee].image[ie].image;U?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,rt.width,rt.height,Te,Pe,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,pe,rt.width,rt.height,0,Te,Pe,rt.data)}}else{U?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te,Pe,fe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Te,Pe,fe[ie]);for(let Ee=0;Ee<ge.length;Ee++){const we=ge[Ee];U?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,Te,Pe,we.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,pe,Te,Pe,we.image[ie])}}}h(E)&&m(t.TEXTURE_CUBE_MAP),re.__version=X.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ne(b,E,I,O,X,re){const oe=s.convert(I.format,I.colorSpace),H=s.convert(I.type),Q=S(I.internalFormat,oe,H,I.normalized,I.colorSpace),ae=i.get(E),ve=i.get(I);if(ve.__renderTarget=E,!ae.__hasExternalTextures){const fe=Math.max(1,E.width>>re),ce=Math.max(1,E.height>>re);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,re,Q,fe,ce,E.depth,0,oe,H,null):n.texImage2D(X,re,Q,fe,ce,0,oe,H,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),St(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,X,ve.__webglTexture,0,mt(E)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,X,ve.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pt(b,E,I){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const O=E.depthTexture,X=O&&O.isDepthTexture?O.type:null,re=M(E.stencilBuffer,X),oe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;St(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(E),re,E.width,E.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(E),re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,b)}else{const O=E.textures;for(let X=0;X<O.length;X++){const re=O[X],oe=s.convert(re.format,re.colorSpace),H=s.convert(re.type),Q=S(re.internalFormat,oe,H,re.normalized,re.colorSpace);St(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(E),Q,E.width,E.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(E),Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(b,E,I){const O=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(E.depthTexture);if(X.__renderTarget=E,(!X.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O){if(X.__webglInit===void 0&&(X.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,E.depthTexture);const ae=s.convert(E.depthTexture.format),ve=s.convert(E.depthTexture.type);let fe;E.depthTexture.format===Mr?fe=t.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(fe=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,E.width,E.height,0,ae,ve,null)}}else N(E.depthTexture,0);const re=X.__webglTexture,oe=mt(E),H=O?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,Q=E.depthTexture.format===Us?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Mr)St(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,H,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Q,H,re,0);else if(E.depthTexture.format===Us)St(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,H,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,Q,H,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(b){const E=i.get(b),I=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const O=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),O){const X=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,O.removeEventListener("dispose",X)};O.addEventListener("dispose",X),E.__depthDisposeCallback=X}E.__boundDepthTexture=O}if(b.depthTexture&&!E.__autoAllocateDepthBuffer)if(I)for(let O=0;O<6;O++)He(E.__webglFramebuffer[O],b,O);else{const O=b.texture.mipmaps;O&&O.length>0?He(E.__webglFramebuffer[0],b,0):He(E.__webglFramebuffer,b,0)}else if(I){E.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[O]),E.__webglDepthbuffer[O]===void 0)E.__webglDepthbuffer[O]=t.createRenderbuffer(),pt(E.__webglDepthbuffer[O],b,!1);else{const X=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,re)}}else{const O=b.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),pt(E.__webglDepthbuffer,b,!1);else{const X=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(b,E,I){const O=i.get(b);E!==void 0&&Ne(O.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&it(b)}function Ye(b){const E=b.texture,I=i.get(b),O=i.get(E);b.addEventListener("dispose",y);const X=b.textures,re=b.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=E.version,a.memory.textures++),re){I.__webglFramebuffer=[];for(let H=0;H<6;H++)if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer[H]=[];for(let Q=0;Q<E.mipmaps.length;Q++)I.__webglFramebuffer[H][Q]=t.createFramebuffer()}else I.__webglFramebuffer[H]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer=[];for(let H=0;H<E.mipmaps.length;H++)I.__webglFramebuffer[H]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(oe)for(let H=0,Q=X.length;H<Q;H++){const ae=i.get(X[H]);ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&St(b)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let H=0;H<X.length;H++){const Q=X[H];I.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[H]);const ae=s.convert(Q.format,Q.colorSpace),ve=s.convert(Q.type),fe=S(Q.internalFormat,ae,ve,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),ce=mt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,fe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,I.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),pt(I.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,E);for(let H=0;H<6;H++)if(E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ne(I.__webglFramebuffer[H][Q],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,Q);else Ne(I.__webglFramebuffer[H],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);h(E)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let H=0,Q=X.length;H<Q;H++){const ae=X[H],ve=i.get(ae);let fe=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ve.__webglTexture),Ue(fe,ae),Ne(I.__webglFramebuffer,b,ae,t.COLOR_ATTACHMENT0+H,fe,0),h(ae)&&m(fe)}n.unbindTexture()}else{let H=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(H=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(H,O.__webglTexture),Ue(H,E),E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ne(I.__webglFramebuffer[Q],b,E,t.COLOR_ATTACHMENT0,H,Q);else Ne(I.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,H,0);h(E)&&m(H),n.unbindTexture()}b.depthBuffer&&it(b)}function yt(b){const E=b.textures;for(let I=0,O=E.length;I<O;I++){const X=E[I];if(h(X)){const re=x(b),oe=i.get(X).__webglTexture;n.bindTexture(re,oe),m(re),n.unbindTexture()}}}const Ct=[],Nt=[];function Bt(b){if(b.samples>0){if(St(b)===!1){const E=b.textures,I=b.width,O=b.height;let X=t.COLOR_BUFFER_BIT;const re=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(b),H=E.length>1;if(H)for(let ae=0;ae<E.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const ve=i.get(E[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ve,0)}t.blitFramebuffer(0,0,I,O,0,0,I,O,X,t.NEAREST),l===!0&&(Ct.length=0,Nt.length=0,Ct.push(t.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ct.push(re),Nt.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let ae=0;ae<E.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const ve=i.get(E[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function mt(b){return Math.min(r.maxSamples,b.samples)}function St(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function C(b){const E=a.render.frame;c.get(b)!==E&&(c.set(b,E),b.update())}function _e(b,E){const I=b.colorSpace,O=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==Vc&&I!==Wr&&(je.getTransfer(I)===st?(O!==Ti||X!==ui)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",I)),E}function xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.getTextureUnits=V,this.setTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=Ze,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function I3(t,e){function n(i,r=Wr){let s;const a=je.getTransfer(r);if(i===ui)return t.UNSIGNED_BYTE;if(i===jm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Km)return t.UNSIGNED_SHORT_5_5_5_1;if(i===MS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ES)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===yS)return t.BYTE;if(i===SS)return t.SHORT;if(i===wl)return t.UNSIGNED_SHORT;if(i===qm)return t.INT;if(i===Zi)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===Sr)return t.HALF_FLOAT;if(i===wS)return t.ALPHA;if(i===TS)return t.RGB;if(i===Ti)return t.RGBA;if(i===Mr)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===RS)return t.RED;if(i===Zm)return t.RED_INTEGER;if(i===js)return t.RG;if(i===Qm)return t.RG_INTEGER;if(i===Jm)return t.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===ac)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kh||i===Zh||i===Qh||i===Jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ep||i===tp||i===np||i===ip||i===rp||i===Bc||i===sp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ep||i===tp)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===np)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ip)return s.COMPRESSED_R11_EAC;if(i===rp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bc)return s.COMPRESSED_RG11_EAC;if(i===sp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ap||i===op||i===lp||i===up||i===cp||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===_p||i===vp||i===xp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ap)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===op)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===up)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_p)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yp||i===Sp||i===Mp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yp)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ep||i===wp||i===zc||i===Tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ep)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const N3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U3=`
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

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new FS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:N3,fragmentShader:U3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pi(new xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O3 extends Js{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",g=new F3,h={},m=n.getContextAttributes();let x=null,S=null;const M=[],T=[],w=new qe;let y=null;const R=new li;R.viewport=new Dt;const P=new li;P.viewport=new Dt;const L=[R,P],F=new $A;let W=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=M[te];return me===void 0&&(me=new cd,M[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=M[te];return me===void 0&&(me=new cd,M[te]=me),me.getGripSpace()},this.getHand=function(te){let me=M[te];return me===void 0&&(me=new cd,M[te]=me),me.getHandSpace()};function D(te){const me=T.indexOf(te.inputSource);if(me===-1)return;const he=M[me];he!==void 0&&(he.update(te.inputSource,te.frame,u||a),he.dispatchEvent({type:te.type,data:te.inputSource}))}function Y(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",k);for(let te=0;te<M.length;te++){const me=T[te];me!==null&&(T[te]=null,M[te].disconnect(me))}W=null,V=null,g.reset();for(const te in h)delete h[te];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Fe=null,Be=null;m.depth&&(Be=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=m.stencil?Us:Mr,Fe=m.stencil?Tl:Zi);const Ne={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qi(f.textureWidth,f.textureHeight,{format:Ti,type:ui,depthTexture:new ro(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qi(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(te){for(let me=0;me<te.removed.length;me++){const he=te.removed[me],Fe=T.indexOf(he);Fe>=0&&(T[Fe]=null,M[Fe].disconnect(he))}for(let me=0;me<te.added.length;me++){const he=te.added[me];let Fe=T.indexOf(he);if(Fe===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=T.length){T.push(he),Fe=Ne;break}else if(T[Ne]===null){T[Ne]=he,Fe=Ne;break}if(Fe===-1)break}const Be=M[Fe];Be&&Be.connect(he)}}const N=new Z,$=new Z;function ee(te,me,he){N.setFromMatrixPosition(me.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const Fe=N.distanceTo($),Be=me.projectionMatrix.elements,Ne=he.projectionMatrix.elements,pt=Be[14]/(Be[10]-1),He=Be[14]/(Be[10]+1),it=(Be[9]+1)/Be[5],Ze=(Be[9]-1)/Be[5],Ye=(Be[8]-1)/Be[0],yt=(Ne[8]+1)/Ne[0],Ct=pt*Ye,Nt=pt*yt,Bt=Fe/(-Ye+yt),mt=Bt*-Ye;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(mt),te.translateZ(Bt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Be[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const St=pt+Bt,C=He+Bt,_e=Ct-mt,xe=Nt+(Fe-mt),b=it*He/C*St,E=Ze*He/C*St;te.projectionMatrix.makePerspective(_e,xe,b,E,St,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ne(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let me=te.near,he=te.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(he=g.depthFar)),F.near=P.near=R.near=me,F.far=P.far=R.far=he,(W!==F.near||V!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,V=F.far),F.layers.mask=te.layers.mask|6,R.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Fe=te.parent,Be=F.cameras;ne(F,Fe);for(let Ne=0;Ne<Be.length;Ne++)ne(Be[Ne],Fe);Be.length===2?ee(F,R,P):F.projectionMatrix.copy(R.projectionMatrix),se(te,F,Fe)};function se(te,me,he){he===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Al*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(te){return h[te]};let ke=null;function Ce(te,me){if(c=me.getViewerPose(u||a),_=me,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;he.length!==F.cameras.length&&(F.cameras.length=0,Fe=!0);for(let He=0;He<he.length;He++){const it=he[He];let Ze=null;if(p!==null)Ze=p.getViewport(it);else{const yt=d.getViewSubImage(f,it);Ze=yt.viewport,He===0&&(e.setRenderTargetTextures(S,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(S))}let Ye=L[He];Ye===void 0&&(Ye=new li,Ye.layers.enable(He),Ye.viewport=new Dt,L[He]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),He===0&&(F.matrix.copy(Ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Fe===!0&&F.cameras.push(Ye)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const He=d.getDepthInformation(he[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(Be&&Be.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<he.length;He++){const it=he[He].camera;if(it){let Ze=h[it];Ze||(Ze=new FS,h[it]=Ze);const Ye=d.getCameraImage(it);Ze.sourceTexture=Ye}}}}for(let he=0;he<M.length;he++){const Fe=T[he],Be=M[he];Fe!==null&&Be!==void 0&&Be.update(Fe,me,u||a)}ke&&ke(te,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ue=new zS;Ue.setAnimationLoop(Ce),this.setAnimationLoop=function(te){ke=te},this.dispose=function(){}}}const k3=new Gt,$S=new ze;$S.set(-1,0,0,0,1,0,0,0,1);function B3(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,OS(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,x,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Ln&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Ln&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),x=m.envMap,S=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(k3.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($S),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function z3(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const T=M.program;i.uniformBlockBinding(S,T)}function u(S,M){let T=r[S.id];T===void 0&&(g(S),T=c(S),r[S.id]=T,S.addEventListener("dispose",m));const w=M.program;i.updateUBOMapping(S,w);const y=e.render.frame;s[S.id]!==y&&(f(S),s[S.id]=y)}function c(S){const M=d();S.__bindingPointIndex=M;const T=t.createBuffer(),w=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,w,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=r[S.id],T=S.uniforms,w=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let y=0,R=T.length;y<R;y++){const P=T[y];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)p(P[L],y,L,w);else p(P,y,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,M,T,w){if(v(S,M,T,w)===!0){const y=S.__offset,R=S.value;if(Array.isArray(R)){let P=0;for(let L=0;L<R.length;L++){const F=R[L],W=h(F);_(F,S.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function _(S,M,T){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,T)}function v(S,M,T,w){const y=S.value,R=M+"_"+T;if(w[R]===void 0)return typeof y=="number"||typeof y=="boolean"?w[R]=y:ArrayBuffer.isView(y)?w[R]=y.slice():w[R]=y.clone(),!0;{const P=w[R];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return w[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(S){const M=S.uniforms;let T=0;const w=16;for(let R=0,P=M.length;R<P;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let F=0,W=L.length;F<W;F++){const V=L[F],D=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,k=D.length;Y<k;Y++){const N=D[Y],$=h(N),ee=T%w,ne=ee%$.boundary,se=ee+ne;T+=ne,se!==0&&w-se<$.storage&&(T+=w-se),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=$.storage}}}const y=T%w;return y>0&&(T+=w-y),S.__size=T,S.__cache={},this}function h(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function x(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:x}}const V3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;function H3(){return Ui===null&&(Ui=new bA(V3,16,16,js,Sr),Ui.name="DFG_LUT",Ui.minFilter=dn,Ui.magFilter=dn,Ui.wrapS=fr,Ui.wrapT=fr,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class qS{constructor(e={}){const{canvas:n=WR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ui}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,g=new Set([Jm,Qm,Zm]),h=new Set([ui,Zi,wl,Tl,jm,Km]),m=new Uint32Array(4),x=new Int32Array(4),S=new Z;let M=null,T=null;const w=[],y=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,W=null,V=null,D=null;this._outputColorSpace=xn;let Y=0,k=0,N=null,$=-1,ee=null;const ne=new Dt,se=new Dt;let ke=null;const Ce=new tt(0);let Ue=0,te=n.width,me=n.height,he=1,Fe=null,Be=null;const Ne=new Dt(0,0,te,me),pt=new Dt(0,0,te,me);let He=!1;const it=new NS;let Ze=!1,Ye=!1;const yt=new Gt,Ct=new Z,Nt=new Dt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function St(){return N===null?he:1}let C=i;function _e(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$m}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",En,!1),C===null){const B="webgl2";if(C=_e(B,A),C===null)throw _e(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Je("WebGLRenderer: "+A.message),A}let xe,b,E,I,O,X,re,oe,H,Q,ae,ve,fe,ce,Te,Pe,pe,U,ue,q,le,ge,ie;function Ee(){xe=new HC(C),xe.init(),le=new I3(C,xe),b=new NC(C,xe,e,le),E=new L3(C,xe),b.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),W=C.createFramebuffer(),V=C.createFramebuffer(),D=C.createFramebuffer(),I=new XC(C),O=new _3,X=new D3(C,xe,E,O,b,le,I),re=new VC(P),oe=new jA(C),ge=new DC(C,oe),H=new GC(C,oe,I,ge),Q=new $C(C,H,oe,ge,I),U=new YC(C,b,X),Te=new UC(O),ae=new g3(P,re,xe,b,ge,Te),ve=new B3(P,O),fe=new x3,ce=new T3(xe),pe=new LC(P,re,E,Q,_,l),Pe=new P3(P,Q,b),ie=new z3(C,I,b,E),ue=new IC(C,xe,I),q=new WC(C,xe,I),I.programs=ae.programs,P.capabilities=b,P.extensions=xe,P.properties=O,P.renderLists=fe,P.shadowMap=Pe,P.state=E,P.info=I}Ee(),v!==ui&&(R=new jC(v,n.width,n.height,o,r,s));const we=new O3(P,C);this.xr=we,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(te,me,!1))},this.getSize=function(A){return A.set(te,me)},this.setSize=function(A,B,J=!0){if(we.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,me=B,n.width=Math.floor(A*he),n.height=Math.floor(B*he),J===!0&&(n.style.width=A+"px",n.style.height=B+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(te*he,me*he).floor()},this.setDrawingBufferSize=function(A,B,J){te=A,me=B,he=J,n.width=Math.floor(A*J),n.height=Math.floor(B*J),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(v===ui){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ne)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,B,J,j){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,B,J,j),E.viewport(ne.copy(Ne).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,B,J,j){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,B,J,j),E.scissor(se.copy(pt).multiplyScalar(he).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(A){E.setScissorTest(He=A)},this.setOpaqueSort=function(A){Fe=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,J=!0){let j=0;if(A){let K=!1;if(N!==null){const Me=N.texture.format;K=g.has(Me)}if(K){const Me=N.texture.type,Ae=h.has(Me),Se=pe.getClearColor(),Le=pe.getClearAlpha(),De=Se.r,Ve=Se.g,We=Se.b;Ae?(m[0]=De,m[1]=Ve,m[2]=We,m[3]=Le,C.clearBufferuiv(C.COLOR,0,m)):(x[0]=De,x[1]=Ve,x[2]=We,x[3]=Le,C.clearBufferiv(C.COLOR,0,x))}else j|=C.COLOR_BUFFER_BIT}B&&(j|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(j|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&C.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",En,!1),pe.dispose(),fe.dispose(),ce.dispose(),O.dispose(),re.dispose(),Q.dispose(),ge.dispose(),ie.dispose(),ae.dispose(),we.dispose(),we.removeEventListener("sessionstart",D0),we.removeEventListener("sessionend",I0),vs.stop()};function rt(A){A.preventDefault(),f_("WebGLRenderer: Context Lost."),L=!0}function nt(){f_("WebGLRenderer: Context Restored."),L=!1;const A=I.autoReset,B=Pe.enabled,J=Pe.autoUpdate,j=Pe.needsUpdate,K=Pe.type;Ee(),I.autoReset=A,Pe.enabled=B,Pe.autoUpdate=J,Pe.needsUpdate=j,Pe.type=K}function En(A){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ei(A){const B=A.target;B.removeEventListener("dispose",ei),$l(B)}function $l(A){ql(A),O.remove(A)}function ql(A){const B=O.get(A).programs;B!==void 0&&(B.forEach(function(J){ae.releaseProgram(J)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,J,j,K,Me){B===null&&(B=Bt);const Ae=K.isMesh&&K.matrixWorld.determinantAffine()<0,Se=tM(A,B,J,j,K);E.setMaterial(j,Ae);let Le=J.index,De=1;if(j.wireframe===!0){if(Le=H.getWireframeAttribute(J),Le===void 0)return;De=2}const Ve=J.drawRange,We=J.attributes.position;let Ie=Ve.start*De,ot=(Ve.start+Ve.count)*De;Me!==null&&(Ie=Math.max(Ie,Me.start*De),ot=Math.min(ot,(Me.start+Me.count)*De)),Le!==null?(Ie=Math.max(Ie,0),ot=Math.min(ot,Le.count)):We!=null&&(Ie=Math.max(Ie,0),ot=Math.min(ot,We.count));const Ut=ot-Ie;if(Ut<0||Ut===1/0)return;ge.setup(K,j,Se,J,Le);let Pt,lt=ue;if(Le!==null&&(Pt=oe.get(Le),lt=q,lt.setIndex(Pt)),K.isMesh)j.wireframe===!0?(E.setLineWidth(j.wireframeLinewidth*St()),lt.setMode(C.LINES)):lt.setMode(C.TRIANGLES);else if(K.isLine){let sn=j.linewidth;sn===void 0&&(sn=1),E.setLineWidth(sn*St()),K.isLineSegments?lt.setMode(C.LINES):K.isLineLoop?lt.setMode(C.LINE_LOOP):lt.setMode(C.LINE_STRIP)}else K.isPoints?lt.setMode(C.POINTS):K.isSprite&&lt.setMode(C.TRIANGLES);if(K.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))lt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const sn=K._multiDrawStarts,Re=K._multiDrawCounts,kn=K._multiDrawCount,Qe=Le?oe.get(Le).bytesPerElement:1,ti=O.get(j).currentProgram.getUniforms();for(let Di=0;Di<kn;Di++)ti.setValue(C,"_gl_DrawID",Di),lt.render(sn[Di]/Qe,Re[Di])}else if(K.isInstancedMesh)lt.renderInstances(Ie,Ut,K.count);else if(J.isInstancedBufferGeometry){const sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,sn);lt.renderInstances(Ie,Ut,Re)}else lt.render(Ie,Ut)};function _s(A,B,J){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,Kl(A,B,J),A.side=us,A.needsUpdate=!0,Kl(A,B,J),A.side=zi):Kl(A,B,J)}this.compile=function(A,B,J=null){J===null&&(J=A),T=ce.get(J),T.init(B),y.push(T),J.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),A!==J&&A.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights();const j=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Me=K.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const Se=Me[Ae];_s(Se,J,K),j.add(Se)}else _s(Me,J,K),j.add(Me)}),T=y.pop(),j},this.compileAsync=function(A,B,J=null){const j=this.compile(A,B,J);return new Promise(K=>{function Me(){if(j.forEach(function(Ae){O.get(Ae).currentProgram.isReady()&&j.delete(Ae)}),j.size===0){K(A);return}setTimeout(Me,10)}xe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Tf=null;function J1(A){Tf&&Tf(A)}function D0(){vs.stop()}function I0(){vs.start()}const vs=new zS;vs.setAnimationLoop(J1),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(A){Tf=A,we.setAnimationLoop(A),A===null?vs.stop():vs.start()},we.addEventListener("sessionstart",D0),we.addEventListener("sessionend",I0),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(A,B);const J=we.enabled===!0&&we.isPresenting===!0,j=R!==null&&(N===null||J)&&R.begin(P,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(B),B=we.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,B,N),T=ce.get(A,y.length),T.init(B),T.state.textureUnits=X.getTextureUnits(),y.push(T),yt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(yt,Gi,B.reversedDepth),Ye=this.localClippingEnabled,Ze=Te.init(this.clippingPlanes,Ye),M=fe.get(A,w.length),M.init(),w.push(M),we.enabled===!0&&we.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Rf(Ae,B,-1/0,P.sortObjects)}Rf(A,B,0,P.sortObjects),M.finish(),P.sortObjects===!0&&M.sort(Fe,Be,B.reversedDepth),mt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,mt&&pe.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Te.beginShadows();const K=T.state.shadowsArray;if(Pe.render(K,A,B),Ze===!0&&Te.endShadows(),(j&&R.hasRenderPass())===!1){const Ae=M.opaque,Se=M.transmissive;if(T.setupLights(),B.isArrayCamera){const Le=B.cameras;if(Se.length>0)for(let De=0,Ve=Le.length;De<Ve;De++){const We=Le[De];U0(Ae,Se,A,We)}mt&&pe.render(A);for(let De=0,Ve=Le.length;De<Ve;De++){const We=Le[De];N0(M,A,We,We.viewport)}}else Se.length>0&&U0(Ae,Se,A,B),mt&&pe.render(A),N0(M,A,B)}N!==null&&k===0&&(X.updateMultisampleRenderTarget(N),X.updateRenderTargetMipmap(N)),j&&R.end(P),A.isScene===!0&&A.onAfterRender(P,A,B),ge.resetDefaultState(),$=-1,ee=null,y.pop(),y.length>0?(T=y[y.length-1],X.setTextureUnits(T.state.textureUnits),Ze===!0&&Te.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,F!==null&&F.renderEnd()};function Rf(A,B,J,j){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){j&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const Ae=Q.update(A),Se=A.material;Se.visible&&M.push(A,Ae,Se,J,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){const Ae=Q.update(A),Se=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Nt.copy(Ae.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(Se)){const Le=Ae.groups;for(let De=0,Ve=Le.length;De<Ve;De++){const We=Le[De],Ie=Se[We.materialIndex];Ie&&Ie.visible&&M.push(A,Ae,Ie,J,Nt.z,We)}}else Se.visible&&M.push(A,Ae,Se,J,Nt.z,null)}}const Me=A.children;for(let Ae=0,Se=Me.length;Ae<Se;Ae++)Rf(Me[Ae],B,J,j)}function N0(A,B,J,j){const{opaque:K,transmissive:Me,transparent:Ae}=A;T.setupLightsView(J),Ze===!0&&Te.setGlobalState(P.clippingPlanes,J),j&&E.viewport(ne.copy(j)),K.length>0&&jl(K,B,J),Me.length>0&&jl(Me,B,J),Ae.length>0&&jl(Ae,B,J),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function U0(A,B,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const Ie=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new qi(1,1,{generateMipmaps:!0,type:Ie?Sr:ui,minFilter:Ns,samples:Math.max(4,b.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const Me=T.state.transmissionRenderTarget[j.id],Ae=j.viewport||ne;Me.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const Se=P.getRenderTarget(),Le=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(Ce),Ue=P.getClearAlpha(),Ue<1&&P.setClearColor(16777215,.5),P.clear(),mt&&pe.render(J);const Ve=P.toneMapping;P.toneMapping=$i;const We=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),Ze===!0&&Te.setGlobalState(P.clippingPlanes,j),jl(A,J,j),X.updateMultisampleRenderTarget(Me),X.updateRenderTargetMipmap(Me),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ot=0,Ut=B.length;ot<Ut;ot++){const Pt=B[ot],{object:lt,geometry:sn,material:Re,group:kn}=Pt;if(Re.side===zi&&lt.layers.test(j.layers)){const Qe=Re.side;Re.side=Ln,Re.needsUpdate=!0,F0(lt,J,j,sn,Re,kn),Re.side=Qe,Re.needsUpdate=!0,Ie=!0}}Ie===!0&&(X.updateMultisampleRenderTarget(Me),X.updateRenderTargetMipmap(Me))}P.setRenderTarget(Se,Le,De),P.setClearColor(Ce,Ue),We!==void 0&&(j.viewport=We),P.toneMapping=Ve}function jl(A,B,J){const j=B.isScene===!0?B.overrideMaterial:null;for(let K=0,Me=A.length;K<Me;K++){const Ae=A[K],{object:Se,geometry:Le,group:De}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),Se.layers.test(J.layers)&&F0(Se,B,J,Le,Ve,De)}}function F0(A,B,J,j,K,Me){A.onBeforeRender(P,B,J,j,K,Me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(P,B,J,j,A,Me),K.transparent===!0&&K.side===zi&&K.forceSinglePass===!1?(K.side=Ln,K.needsUpdate=!0,P.renderBufferDirect(J,B,j,K,A,Me),K.side=us,K.needsUpdate=!0,P.renderBufferDirect(J,B,j,K,A,Me),K.side=zi):P.renderBufferDirect(J,B,j,K,A,Me),A.onAfterRender(P,B,J,j,K,Me)}function Kl(A,B,J){B.isScene!==!0&&(B=Bt);const j=O.get(A),K=T.state.lights,Me=T.state.shadowsArray,Ae=K.state.version,Se=ae.getParameters(A,K.state,Me,B,J,T.state.lightProbeGridArray),Le=ae.getProgramCacheKey(Se);let De=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,j.fog=B.fog;const Ve=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=re.get(A.envMap||j.environment,Ve),j.envMapRotation=j.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",ei),De=new Map,j.programs=De);let We=De.get(Le);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===Ae)return k0(A,Se),We}else Se.uniforms=ae.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,J,Se),A.onBeforeCompile(Se,P),We=ae.acquireProgram(Se,Le),De.set(Le,We),j.uniforms=Se.uniforms;const Ie=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=Te.uniform),k0(A,Se),j.needsLights=iM(A),j.lightsStateVersion=Ae,j.needsLights&&(Ie.ambientLightColor.value=K.state.ambient,Ie.lightProbe.value=K.state.probe,Ie.directionalLights.value=K.state.directional,Ie.directionalLightShadows.value=K.state.directionalShadow,Ie.spotLights.value=K.state.spot,Ie.spotLightShadows.value=K.state.spotShadow,Ie.rectAreaLights.value=K.state.rectArea,Ie.ltc_1.value=K.state.rectAreaLTC1,Ie.ltc_2.value=K.state.rectAreaLTC2,Ie.pointLights.value=K.state.point,Ie.pointLightShadows.value=K.state.pointShadow,Ie.hemisphereLights.value=K.state.hemi,Ie.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ie.spotLightMatrix.value=K.state.spotLightMatrix,Ie.spotLightMap.value=K.state.spotLightMap,Ie.pointShadowMatrix.value=K.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=We,j.uniformsList=null,We}function O0(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=oc.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function k0(A,B){const J=O.get(A);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function eM(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let J=0,j=A.length;J<j;J++){const K=A[J];if(K.texture!==null&&K.boundingBox.containsPoint(S))return K}return null}function tM(A,B,J,j,K){B.isScene!==!0&&(B=Bt),X.resetTextureUnits();const Me=B.fog,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?B.environment:null,Se=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:je.workingColorSpace,Le=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,De=re.get(j.envMap||Ae,Le),Ve=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ie=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color;let Pt=$i;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,sn=lt!==void 0?lt.length:0,Re=O.get(j),kn=T.state.lights;if(Ze===!0&&(Ye===!0||A!==ee)){const dt=A===ee&&j.id===$;Te.setState(j,A,dt)}let Qe=!1;j.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==kn.state.version||Re.outputColorSpace!==Se||K.isBatchedMesh&&Re.batching===!1||!K.isBatchedMesh&&Re.batching===!0||K.isBatchedMesh&&Re.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Re.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Re.instancing===!1||!K.isInstancedMesh&&Re.instancing===!0||K.isSkinnedMesh&&Re.skinning===!1||!K.isSkinnedMesh&&Re.skinning===!0||K.isInstancedMesh&&Re.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Re.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Re.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Re.instancingMorph===!1&&K.morphTexture!==null||Re.envMap!==De||j.fog===!0&&Re.fog!==Me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Te.numPlanes||Re.numIntersection!==Te.numIntersection)||Re.vertexAlphas!==Ve||Re.vertexTangents!==We||Re.morphTargets!==Ie||Re.morphNormals!==ot||Re.morphColors!==Ut||Re.toneMapping!==Pt||Re.morphTargetsCount!==sn||!!Re.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Re.__version=j.version);let ti=Re.currentProgram;Qe===!0&&(ti=Kl(j,B,K),F&&j.isNodeMaterial&&F.onUpdateProgram(j,ti,Re));let Di=!1,Cr=!1,ta=!1;const ut=ti.getUniforms(),Ft=Re.uniforms;if(E.useProgram(ti.program)&&(Di=!0,Cr=!0,ta=!0),j.id!==$&&($=j.id,Cr=!0),Re.needsLights){const dt=eM(T.state.lightProbeGridArray,K);Re.lightProbeGrid!==dt&&(Re.lightProbeGrid=dt,Cr=!0)}if(Di||ee!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",A.projectionMatrix),ut.setValue(C,"viewMatrix",A.matrixWorldInverse);const Lr=ut.map.cameraPosition;Lr!==void 0&&Lr.setValue(C,Ct.setFromMatrixPosition(A.matrixWorld)),b.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ut.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),ee!==A&&(ee=A,Cr=!0,ta=!0)}if(Re.needsLights&&(kn.state.directionalShadowMap.length>0&&ut.setValue(C,"directionalShadowMap",kn.state.directionalShadowMap,X),kn.state.spotShadowMap.length>0&&ut.setValue(C,"spotShadowMap",kn.state.spotShadowMap,X),kn.state.pointShadowMap.length>0&&ut.setValue(C,"pointShadowMap",kn.state.pointShadowMap,X)),K.isSkinnedMesh){ut.setOptional(C,K,"bindMatrix"),ut.setOptional(C,K,"bindMatrixInverse");const dt=K.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ut.setValue(C,"boneTexture",dt.boneTexture,X))}K.isBatchedMesh&&(ut.setOptional(C,K,"batchingTexture"),ut.setValue(C,"batchingTexture",K._matricesTexture,X),ut.setOptional(C,K,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",K._indirectTexture,X),ut.setOptional(C,K,"batchingColorTexture"),K._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",K._colorsTexture,X));const Pr=J.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&U.update(K,J,ti),(Cr||Re.receiveShadow!==K.receiveShadow)&&(Re.receiveShadow=K.receiveShadow,ut.setValue(C,"receiveShadow",K.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&B.environment!==null&&(Ft.envMapIntensity.value=B.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=H3()),Cr){if(ut.setValue(C,"toneMappingExposure",P.toneMappingExposure),Re.needsLights&&nM(Ft,ta),Me&&j.fog===!0&&ve.refreshFogUniforms(Ft,Me),ve.refreshMaterialUniforms(Ft,j,he,me,T.state.transmissionRenderTarget[A.id]),Re.needsLights&&Re.lightProbeGrid){const dt=Re.lightProbeGrid;Ft.probesSH.value=dt.texture,Ft.probesMin.value.copy(dt.boundingBox.min),Ft.probesMax.value.copy(dt.boundingBox.max),Ft.probesResolution.value.copy(dt.resolution)}oc.upload(C,O0(Re),Ft,X)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(oc.upload(C,O0(Re),Ft,X),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ut.setValue(C,"center",K.center),ut.setValue(C,"modelViewMatrix",K.modelViewMatrix),ut.setValue(C,"normalMatrix",K.normalMatrix),ut.setValue(C,"modelMatrix",K.matrixWorld),j.uniformsGroups!==void 0){const dt=j.uniformsGroups;for(let Lr=0,na=dt.length;Lr<na;Lr++){const B0=dt[Lr];ie.update(B0,ti),ie.bind(B0,ti)}}return ti}function nM(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function iM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,B,J){const j=O.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=B,O.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const J=O.get(A);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,J=0){N=A,Y=B,k=J;let j=null,K=!1,Me=!1;if(A){const Se=O.get(A);if(Se.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(C.FRAMEBUFFER,Se.__webglFramebuffer),ne.copy(A.viewport),se.copy(A.scissor),ke=A.scissorTest,E.viewport(ne),E.scissor(se),E.setScissorTest(ke),$=-1;return}else if(Se.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(Se.__hasExternalTextures)X.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(Se.__boundDepthTexture!==Ve){if(Ve!==null&&O.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Me=!0);const De=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[B])?j=De[B][J]:j=De[B],K=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?j=O.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?j=De[J]:j=De,ne.copy(A.viewport),se.copy(A.scissor),ke=A.scissorTest}else ne.copy(Ne).multiplyScalar(he).floor(),se.copy(pt).multiplyScalar(he).floor(),ke=He;if(J!==0&&(j=W),E.bindFramebuffer(C.FRAMEBUFFER,j)&&E.drawBuffers(A,j),E.viewport(ne),E.scissor(se),E.setScissorTest(ke),K){const Se=O.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,J)}else if(Me){const Se=B;for(let Le=0;Le<A.textures.length;Le++){const De=O.get(A.textures[Le]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Le,De.__webglTexture,J,Se)}}else if(A!==null&&J!==0){const Se=O.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Se.__webglTexture,J)}$=-1},this.readRenderTargetPixels=function(A,B,J,j,K,Me,Ae,Se=0){if(!(A&&A.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){E.bindFramebuffer(C.FRAMEBUFFER,Le);try{const De=A.textures[Se],Ve=De.format,We=De.type;if(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Se),!b.textureFormatReadable(Ve)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(We)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-j&&J>=0&&J<=A.height-K&&C.readPixels(B,J,j,K,le.convert(Ve),le.convert(We),Me)}finally{const De=N!==null?O.get(N).__webglFramebuffer:null;E.bindFramebuffer(C.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,B,J,j,K,Me,Ae,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(B>=0&&B<=A.width-j&&J>=0&&J<=A.height-K){E.bindFramebuffer(C.FRAMEBUFFER,Le);const De=A.textures[Se],Ve=De.format,We=De.type;if(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Se),!b.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ie),C.bufferData(C.PIXEL_PACK_BUFFER,Me.byteLength,C.STREAM_READ),C.readPixels(B,J,j,K,le.convert(Ve),le.convert(We),0);const ot=N!==null?O.get(N).__webglFramebuffer:null;E.bindFramebuffer(C.FRAMEBUFFER,ot);const Ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await XR(C,Ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ie),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Me),C.deleteBuffer(Ie),C.deleteSync(Ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,J=0){const j=Math.pow(2,-J),K=Math.floor(A.image.width*j),Me=Math.floor(A.image.height*j),Ae=B!==null?B.x:0,Se=B!==null?B.y:0;X.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,Ae,Se,K,Me),E.unbindTexture()},this.copyTextureToTexture=function(A,B,J=null,j=null,K=0,Me=0){let Ae,Se,Le,De,Ve,We,Ie,ot,Ut;const Pt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(J!==null)Ae=J.max.x-J.min.x,Se=J.max.y-J.min.y,Le=J.isBox3?J.max.z-J.min.z:1,De=J.min.x,Ve=J.min.y,We=J.isBox3?J.min.z:0;else{const Ft=Math.pow(2,-K);Ae=Math.floor(Pt.width*Ft),Se=Math.floor(Pt.height*Ft),A.isDataArrayTexture?Le=Pt.depth:A.isData3DTexture?Le=Math.floor(Pt.depth*Ft):Le=1,De=0,Ve=0,We=0}j!==null?(Ie=j.x,ot=j.y,Ut=j.z):(Ie=0,ot=0,Ut=0);const lt=le.convert(B.format),sn=le.convert(B.type);let Re;B.isData3DTexture?(X.setTexture3D(B,0),Re=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(X.setTexture2DArray(B,0),Re=C.TEXTURE_2D_ARRAY):(X.setTexture2D(B,0),Re=C.TEXTURE_2D),E.activeTexture(C.TEXTURE0),E.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const kn=E.getParameter(C.UNPACK_ROW_LENGTH),Qe=E.getParameter(C.UNPACK_IMAGE_HEIGHT),ti=E.getParameter(C.UNPACK_SKIP_PIXELS),Di=E.getParameter(C.UNPACK_SKIP_ROWS),Cr=E.getParameter(C.UNPACK_SKIP_IMAGES);E.pixelStorei(C.UNPACK_ROW_LENGTH,Pt.width),E.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pt.height),E.pixelStorei(C.UNPACK_SKIP_PIXELS,De),E.pixelStorei(C.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(C.UNPACK_SKIP_IMAGES,We);const ta=A.isDataArrayTexture||A.isData3DTexture,ut=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Ft=O.get(A),Pr=O.get(B),dt=O.get(Ft.__renderTarget),Lr=O.get(Pr.__renderTarget);E.bindFramebuffer(C.READ_FRAMEBUFFER,dt.__webglFramebuffer),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let na=0;na<Le;na++)ta&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,O.get(A).__webglTexture,K,We+na),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,O.get(B).__webglTexture,Me,Ut+na)),C.blitFramebuffer(De,Ve,Ae,Se,Ie,ot,Ae,Se,C.DEPTH_BUFFER_BIT,C.NEAREST);E.bindFramebuffer(C.READ_FRAMEBUFFER,null),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||O.has(A)){const Ft=O.get(A),Pr=O.get(B);E.bindFramebuffer(C.READ_FRAMEBUFFER,V),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,D);for(let dt=0;dt<Le;dt++)ta?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,K,We+dt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ft.__webglTexture,K),ut?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pr.__webglTexture,Me,Ut+dt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pr.__webglTexture,Me),K!==0?C.blitFramebuffer(De,Ve,Ae,Se,Ie,ot,Ae,Se,C.COLOR_BUFFER_BIT,C.NEAREST):ut?C.copyTexSubImage3D(Re,Me,Ie,ot,Ut+dt,De,Ve,Ae,Se):C.copyTexSubImage2D(Re,Me,Ie,ot,De,Ve,Ae,Se);E.bindFramebuffer(C.READ_FRAMEBUFFER,null),E.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ut?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Re,Me,Ie,ot,Ut,Ae,Se,Le,lt,sn,Pt.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(Re,Me,Ie,ot,Ut,Ae,Se,Le,lt,Pt.data):C.texSubImage3D(Re,Me,Ie,ot,Ut,Ae,Se,Le,lt,sn,Pt):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Me,Ie,ot,Ae,Se,lt,sn,Pt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Me,Ie,ot,Pt.width,Pt.height,lt,Pt.data):C.texSubImage2D(C.TEXTURE_2D,Me,Ie,ot,Ae,Se,lt,sn,Pt);E.pixelStorei(C.UNPACK_ROW_LENGTH,kn),E.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qe),E.pixelStorei(C.UNPACK_SKIP_PIXELS,ti),E.pixelStorei(C.UNPACK_SKIP_ROWS,Di),E.pixelStorei(C.UNPACK_SKIP_IMAGES,Cr),Me===0&&B.generateMipmaps&&C.generateMipmap(Re),E.unbindTexture()},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){Y=0,k=0,N=null,E.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}const bp=8,G3=`
#define MAX_COLORS ${bp}
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
`,W3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function X3(t){const e=t.replace("#","").trim(),n=e.length===3?[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16)]:[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)];return new Z(n[0]/255,n[1]/255,n[2]/255)}function Y3({className:t,style:e,rotation:n=90,speed:i=.2,colors:r=[],transparent:s=!0,autoRotate:a=0,scale:o=1,frequency:l=1,warpStrength:u=1,mouseInfluence:c=1,parallax:d=.5,noise:f=.15,iterations:p=1,intensity:_=1.5,bandWidth:v=6}){const g=G.useRef(null),h=G.useRef(null),m=G.useRef(null),x=G.useRef(null),S=G.useRef(null),M=G.useRef(n),T=G.useRef(a),w=G.useRef(new qe(0,0)),y=G.useRef(new qe(0,0));return G.useEffect(()=>{const R=g.current,P=new LS,L=new l0(-1,1,1,-1,0,1),F=new xo(2,2),W=Array.from({length:bp},()=>new Z(0,0,0)),V=new Li({vertexShader:W3,fragmentShader:G3,uniforms:{uCanvas:{value:new qe(1,1)},uTime:{value:0},uSpeed:{value:i},uRot:{value:new qe(1,0)},uColorCount:{value:0},uColors:{value:W},uTransparent:{value:s?1:0},uScale:{value:o},uFrequency:{value:l},uWarpStrength:{value:u},uPointer:{value:new qe(0,0)},uMouseInfluence:{value:c},uParallax:{value:d},uNoise:{value:f},uIterations:{value:p},uIntensity:{value:_},uBandWidth:{value:v}},premultipliedAlpha:!0,transparent:!0});h.current=V,P.add(new Pi(F,V));const D=new qS({antialias:!1,powerPreference:"high-performance",alpha:!0});m.current=D,D.outputColorSpace=xn,D.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),D.setClearColor(0,s?0:1),D.domElement.style.cssText="width:100%;height:100%;display:block;",R.appendChild(D.domElement);const Y=new BS,k=()=>{const ne=R.clientWidth||1,se=R.clientHeight||1;D.setSize(ne,se,!1),V.uniforms.uCanvas.value.set(ne,se)};k();const N=new ResizeObserver(k);N.observe(R),S.current=N;const $=()=>{const ne=Y.getDelta();V.uniforms.uTime.value=Y.elapsedTime;const ke=(M.current%360+T.current*Y.elapsedTime)*Math.PI/180;V.uniforms.uRot.value.set(Math.cos(ke),Math.sin(ke));const Ce=y.current,Ue=w.current;Ce.lerp(Ue,Math.min(1,ne*8)),V.uniforms.uPointer.value.copy(Ce),D.render(P,L),x.current=requestAnimationFrame($)};x.current=requestAnimationFrame($);const ee=ne=>{const se=R.getBoundingClientRect();w.current.set((ne.clientX-se.left)/(se.width||1)*2-1,-((ne.clientY-se.top)/(se.height||1)*2-1))};return window.addEventListener("pointermove",ee,{passive:!0}),()=>{var ne;x.current!==null&&cancelAnimationFrame(x.current),(ne=S.current)==null||ne.disconnect(),window.removeEventListener("pointermove",ee),F.dispose(),V.dispose(),D.dispose(),D.forceContextLoss(),D.domElement.parentElement===R&&R.removeChild(D.domElement)}},[]),G.useEffect(()=>{const R=h.current,P=m.current;if(!R)return;M.current=n,T.current=a,R.uniforms.uSpeed.value=i,R.uniforms.uScale.value=o,R.uniforms.uFrequency.value=l,R.uniforms.uWarpStrength.value=u,R.uniforms.uMouseInfluence.value=c,R.uniforms.uParallax.value=d,R.uniforms.uNoise.value=f,R.uniforms.uIterations.value=p,R.uniforms.uIntensity.value=_,R.uniforms.uBandWidth.value=v;const L=(r||[]).filter(Boolean).slice(0,bp).map(X3);R.uniforms.uColors.value.forEach((F,W)=>{W<L.length?F.copy(L[W]):F.set(0,0,0)}),R.uniforms.uColorCount.value=L.length,R.uniforms.uTransparent.value=s?1:0,P==null||P.setClearColor(0,s?0:1)},[n,a,i,o,l,u,c,d,f,p,_,v,r,s]),z.jsx("div",{ref:g,className:t,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",...e}})}const ii=80,$3=38,q3=[1,2,3];function Ou({topColor:t,bottomColor:e}){const n=G.useRef(null),i=G.useRef(null);return G.useEffect(()=>{const r=n.current,s=i.current;if(!r||!s)return;let a=window.innerWidth;s.width=a*window.devicePixelRatio,s.height=ii*window.devicePixelRatio,s.style.width=a+"px",s.style.height=ii+"px";const o=s.getContext("2d");o.scale(window.devicePixelRatio,window.devicePixelRatio);let l=0,u=window.scrollY,c=1,d=0;function f(){const h=window.scrollY-u;h!==0&&(c=h>0?1:-1),d+=Math.abs(h),u=window.scrollY}window.addEventListener("scroll",f,{passive:!0});function p(){a=window.innerWidth,s.width=a*window.devicePixelRatio,s.height=ii*window.devicePixelRatio,s.style.width=a+"px",s.style.height=ii+"px",o.scale(window.devicePixelRatio,window.devicePixelRatio)}window.addEventListener("resize",p);const _=performance.now();let v;function g(){const m=r.getBoundingClientRect().top,x=m-ii/2;if(s.style.top=x+"px",m>-ii&&m<window.innerHeight+ii){s.style.visibility="visible",d>0&&(l=Math.min(l+d*.4,$3),d=0),l*=.91,Math.abs(l)<.15&&(l=0);const M=(performance.now()-_)/1e3,T=ii/2;o.clearRect(0,0,a,ii),o.fillStyle=t,o.fillRect(0,0,a,ii),o.beginPath(),o.moveTo(0,T);for(let w=0;w<=a;w+=2){const y=w/a;let R=0;q3.forEach((P,L)=>{const F=Math.sin(P*Math.PI*y),W=Math.pow(.45,L),V=1.8+P*1.2,D=Math.cos(V*M)*W;R+=F*D}),o.lineTo(w,T-l*R*c)}o.lineTo(a,ii),o.lineTo(0,ii),o.closePath(),o.fillStyle=e,o.fill()}else s.style.visibility="hidden",l*=.91,d=0;v=requestAnimationFrame(g)}return g(),()=>{cancelAnimationFrame(v),window.removeEventListener("scroll",f),window.removeEventListener("resize",p)}},[t,e]),z.jsxs(z.Fragment,{children:[z.jsx("div",{ref:n,style:{position:"relative",height:0,pointerEvents:"none"}}),z.jsx("canvas",{ref:i,style:{position:"fixed",left:0,zIndex:50,pointerEvents:"none",display:"block",visibility:"hidden"}})]})}function j3(){return z.jsxs("header",{className:"top-nav","aria-label":"VelvetY main navigation",children:[z.jsxs("a",{className:"brand",href:"/","aria-label":"VelvetY home",children:[z.jsx("span",{className:"brand-mark","aria-hidden":"true"}),z.jsx("span",{children:"VelvetY"})]}),z.jsxs("nav",{className:"nav-links","aria-label":"Primary navigation",children:[z.jsx("a",{href:"#services",children:"Services"}),z.jsx("a",{href:"#work",children:"Work"}),z.jsx("a",{href:"#studio",children:"Studio"}),z.jsx("a",{className:"nav-cta",href:"#contact",children:"Start a project"})]})]})}class ri{constructor(e,n,i){Dr(this,"x");Dr(this,"y");Dr(this,"z");this.x=e,this.y=n,this.z=i}dot2(e,n){return this.x*e+this.y*n}}class K3{constructor(e=0){Dr(this,"grad3");Dr(this,"p");Dr(this,"perm");Dr(this,"gradP");this.grad3=[new ri(1,1,0),new ri(-1,1,0),new ri(1,-1,0),new ri(-1,-1,0),new ri(1,0,1),new ri(-1,0,1),new ri(1,0,-1),new ri(-1,0,-1),new ri(0,1,1),new ri(0,-1,1),new ri(0,1,-1),new ri(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(e)}seed(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(let n=0;n<256;n++){const i=n&1?this.p[n]^e&255:this.p[n]^e>>8&255;this.perm[n]=this.perm[n+256]=i,this.gradP[n]=this.gradP[n+256]=this.grad3[i%12]}}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,n,i){return(1-i)*e+i*n}perlin2(e,n){let i=Math.floor(e),r=Math.floor(n);e-=i,n-=r,i&=255,r&=255;const s=this.gradP[i+this.perm[r]].dot2(e,n),a=this.gradP[i+this.perm[r+1]].dot2(e,n-1),o=this.gradP[i+1+this.perm[r]].dot2(e-1,n),l=this.gradP[i+1+this.perm[r+1]].dot2(e-1,n-1),u=this.fade(e);return this.lerp(this.lerp(s,o,u),this.lerp(a,l,u),this.fade(n))}}function Z3(){const t=G.useRef(null),e=G.useRef(null);return G.useEffect(()=>{const n=e.current,i=t.current;if(!n||!i)return;const r=n.getContext("2d"),s=new K3(Math.random()),a={lineColor:"rgba(244,241,232,.18)",waveSpeedX:.018,waveSpeedY:.008,waveAmpX:34,waveAmpY:18,xGap:13,yGap:36,friction:.925,tension:.006,maxCursorMove:92};let o={width:0,height:0,left:0,top:0},l=[];const u={x:-10,y:0,lx:0,ly:0,sx:0,sy:0,v:0,vs:0,a:0,set:!1};let c=0;function d(){o=i.getBoundingClientRect();const M=Math.min(window.devicePixelRatio||1,window.innerWidth<=760?1.15:1.5);n.width=Math.max(1,Math.floor(o.width*M)),n.height=Math.max(1,Math.floor(o.height*M)),r.setTransform(M,0,0,M,0,0)}function f(){const{width:M,height:T}=o;l=[];const w=M+200,y=T+30,R=Math.ceil(w/a.xGap),P=Math.ceil(y/a.yGap),L=(M-a.xGap*R)/2,F=(T-a.yGap*P)/2;for(let W=0;W<=R;W++){const V=[];for(let D=0;D<=P;D++)V.push({x:L+a.xGap*W,y:F+a.yGap*D,wave:{x:0,y:0},cursor:{x:0,y:0,vx:0,vy:0}});l.push(V)}}function p(M){for(const T of l)for(const w of T){const y=s.perlin2((w.x+M*a.waveSpeedX)*.002,(w.y+M*a.waveSpeedY)*.0015)*12;w.wave.x=Math.cos(y)*a.waveAmpX,w.wave.y=Math.sin(y)*a.waveAmpY;const R=w.x-u.sx,P=w.y-u.sy,L=Math.hypot(R,P),F=Math.max(175,u.vs);if(L<F){const W=1-L/F,V=Math.cos(L*.001)*W;w.cursor.vx+=Math.cos(u.a)*V*F*u.vs*65e-5,w.cursor.vy+=Math.sin(u.a)*V*F*u.vs*65e-5}w.cursor.vx+=(0-w.cursor.x)*a.tension,w.cursor.vy+=(0-w.cursor.y)*a.tension,w.cursor.vx*=a.friction,w.cursor.vy*=a.friction,w.cursor.x+=w.cursor.vx*2,w.cursor.y+=w.cursor.vy*2,w.cursor.x=Math.min(a.maxCursorMove,Math.max(-92,w.cursor.x)),w.cursor.y=Math.min(a.maxCursorMove,Math.max(-92,w.cursor.y))}}function _(M,T=!0){const w=M.x+M.wave.x+(T?M.cursor.x:0),y=M.y+M.wave.y+(T?M.cursor.y:0);return{x:Math.round(w*10)/10,y:Math.round(y*10)/10}}function v(){const{width:M,height:T}=o;r.clearRect(0,0,M,T),r.beginPath(),r.strokeStyle=a.lineColor,r.lineWidth=1;for(const w of l){let y=_(w[0],!1);r.moveTo(y.x,y.y),w.forEach((R,P)=>{const L=P===w.length-1;y=_(R,!L);const F=_(w[P+1]||w[w.length-1],!L);r.lineTo(y.x,y.y),L&&r.moveTo(F.x,F.y)})}r.stroke()}function g(M){u.sx+=(u.x-u.sx)*.1,u.sy+=(u.y-u.sy)*.1;const T=u.x-u.lx,w=u.y-u.ly,y=Math.hypot(T,w);u.v=y,u.vs+=(y-u.vs)*.1,u.vs=Math.min(100,u.vs),u.lx=u.x,u.ly=u.y,u.a=Math.atan2(w,T),i.style.setProperty("--x",`${u.sx}px`),i.style.setProperty("--y",`${u.sy}px`),p(M),v(),c=requestAnimationFrame(g)}function h(M,T){const w=o;u.x=M-w.left,u.y=T-w.top,u.set||(u.sx=u.x,u.sy=u.y,u.lx=u.x,u.ly=u.y,u.set=!0)}function m(){d(),f()}function x(M){h(M.clientX,M.clientY)}function S(M){const T=M.touches[0];T&&h(T.clientX,T.clientY)}return d(),f(),c=requestAnimationFrame(g),window.addEventListener("resize",m),window.addEventListener("mousemove",x),window.addEventListener("touchmove",S,{passive:!0}),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",x),window.removeEventListener("touchmove",S),cancelAnimationFrame(c)}},[]),z.jsx("div",{className:"waves-root","aria-hidden":"true",children:z.jsx("div",{ref:t,className:"waves-inner",children:z.jsx("canvas",{ref:e,className:"waves-canvas"})})})}function Q3(){const t=G.useRef(null);return G.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d",{alpha:!0}),i=(C,_e,xe)=>Math.max(_e,Math.min(xe,C)),r=(C,_e)=>C+Math.random()*(_e-C),s=C=>(C=i(C,0,1),1-Math.pow(1-C,3)),a=C=>(C=i(C,0,1),C<.5?4*C*C*C:1-Math.pow(-2*C+2,3)/2),o=C=>{const _e=Math.sin(C*127.1+311.7)*43758.5453123;return _e-Math.floor(_e)},l=matchMedia("(max-width: 760px)").matches,u=matchMedia("(prefers-reduced-motion: reduce)").matches;let c=1,d=1,f=1,p=0,_=0,v=260,g=0,h=performance.now();const m={baseSpin:.18,mouseSpin:.36,inertia:.9,outerGravity:1.05,innerFluid:1.05,implodeStrength:1.55,implodePoint:.18,expandStrength:.9,explodeStrength:1.55,explodePoint:.28,vanishPoint:.44,vanishSpeed:1.35,centerText:"",textSize:.72,textAlpha:.82,textGlow:.72,textExplode:.82},x={active:!1,x:0,y:0,tx:0,ty:0,px:-9999,py:-9999,vx:0,vy:0,outer:0,inner:0,pulse:0,last:0},S={x:-.22,y:-.62,z:-.08,vx:.003,vy:.005,vz:.001},M={value:0,target:0,progress:0,implode:0,expand:0,explode:0,vanish:0,flash:0},T=[],w=[],y=[];function R(C,_e,xe,b,E,I){let O=Math.cos(b),X=Math.sin(b),re=_e*O-xe*X,oe=_e*X+xe*O;_e=re,xe=oe,O=Math.cos(E),X=Math.sin(E);let H=C*O+xe*X;return oe=-C*X+xe*O,C=H,xe=oe,O=Math.cos(I),X=Math.sin(I),H=C*O-_e*X,re=C*X+_e*O,{x:H,y:re,z:xe}}function P(){f=Math.min(window.devicePixelRatio||1,l?1.15:1.55),c=Math.max(1,innerWidth),d=Math.max(1,innerHeight),e.width=Math.floor(c*f),e.height=Math.floor(d*f),e.style.width=c+"px",e.style.height=d+"px",n.setTransform(f,0,0,f,0,0),p=c*.5,_=d*.5,v=Math.min(c,d)*(l?.34:.36)}function L(){T.length=w.length=y.length=0;const C=l?1550:3900,_e=l?290:680;for(let b=0;b<C;b++){const E=Math.random();let I=Math.PI*2*E;const O=r(-.88,.88),X=Math.acos(O),re=Math.floor(r(0,6)),oe=re*1.047+o(b)*.65;I+=Math.sin(X*4.2+oe)*.33;const H=Math.sin(I*2.8+X*5.4+oe)*.5+.5;if(o(b*3.3+re*17.7)>.83&&H<.62||Math.abs(O)<.18&&H<.33)continue;const Q=r(.89,1.04)+Math.sin(I*5+X*3)*.018,ae=Math.sin(X)*Math.cos(I)*Q,ve=Math.sin(X)*Math.sin(I)*Q,fe=Math.cos(X)*Q,ce=Math.pow(1-Math.abs(O),.55);T.push({x:ae,y:ve,z:fe,stream:re,phase:r(0,Math.PI*2),twinkle:r(.55,1),size:Math.random()<.92?r(.5,1.15):r(1.15,1.95),alpha:r(.52,1)*ce})}for(let b=0;b<_e;b++){const E=r(0,Math.PI*2),I=Math.acos(r(-.8,.8)),O=Math.pow(r(.18,.82),1.8);O<.24&&Math.random()<.7||w.push({x:Math.sin(I)*Math.cos(E)*O,y:Math.sin(I)*Math.sin(E)*O,z:Math.cos(I)*O,phase:r(0,Math.PI*2),size:r(.42,1),alpha:r(.16,.38)})}const xe=l?8:14;for(let b=0;b<xe;b++){const E=[],I=r(0,Math.PI*2),O=r(Math.PI*.55,Math.PI*1.55),X=r(-1.2,1.2),re=r(-1.1,1.1),oe=r(-.55,.55),H=r(.78,1.08);for(let Q=0;Q<110;Q++){const ae=Q/109;if(Math.sin(ae*Math.PI*r(2,5.5)+b)*.5+.5<.22||ae>.44&&ae<.55&&b%3===0){E.push(null);continue}const fe=I+O*ae;E.push(R(Math.cos(fe)*H,Math.sin(fe)*H,Math.sin(fe*1.7+b)*.07,X,re,oe))}y.push({points:E,phase:r(0,Math.PI*2),alpha:r(.24,.5),size:r(.38,.76)})}}function F(C,_e,xe,b,E){const I=R(C.x,C.y,C.z,_e,xe,b),O=1.55/(1.55-I.z*.34);return{x:p+I.x*v*E*O,y:_+I.y*v*E*O,z:I.z,p:O}}function W(C,_e,xe,b){b<=.006||xe<=0||(n.globalAlpha=b,n.beginPath(),n.arc(C,_e,xe,0,Math.PI*2),n.fill())}function V(){const C=i(M.value,0,1),_e=i(m.explodePoint,.2,.9),xe=i(Math.min(m.implodePoint,_e-.08),.08,.62),b=Math.max(.09,xe*.72),E=Math.max(xe+.12,_e-.04),I=s(C/b),O=1-a((C-b)/Math.max(.001,E-b)),X=s((C-xe)/Math.max(.001,_e-xe)),re=s((C-_e)/Math.max(.001,1-_e)),oe=i(Math.max(m.vanishPoint,_e+.03),_e+.03,.99),H=s((C-oe)/Math.max(.012,(1-oe)/Math.max(.25,m.vanishSpeed)));M.progress=C,M.implode=C<=b?I:Math.max(0,O),M.expand=X*(1-re*.15),M.explode=re,M.vanish=H,M.flash+=((re>.04&&H<.94?re*(1-H):0)-M.flash)*.12}function D(C,_e,xe,b){if(M.progress<=.002)return C;const E=Math.hypot(C.x,C.y,C.z)||1,I=C.x/E,O=C.y/E,X=C.z/E,re=o((_e.phase||0)*53.7+(("stream"in _e?_e.stream:0)||0)*17.1+(b==="dust"?9.5:0)),oe=b==="dust"?1.22:b==="arc"?.7:1.05,H=b==="dust"?.76:b==="arc"?.42:.6,Q=b==="dust"?1.18:b==="arc"?.58:.92;let ae=Math.max(.08,1-M.implode*m.implodeStrength*oe)+M.expand*m.expandStrength*H;M.explode>.001&&(ae+=M.explode*m.explodeStrength*Q*(.55+re*.9));const ve=Math.sin(xe*5.2+(_e.phase||0)*4.7+E*3)*M.explode,fe=Math.cos(xe*3.4+(_e.phase||0)*2.9)*M.explode*(.1+re*.16);return{x:C.x*ae+(-O*ve+X*fe)*.34,y:C.y*ae+(I*ve-X*fe)*.34,z:C.z*ae+(I*fe+O*ve)*.24}}function Y(C,_e,xe,b,E){if(!x.active||x.outer<.01&&x.inner<.01)return C;const I=v*b,O=x.px-p,X=x.py-_,re=Math.hypot(O,X)||1,oe=O/re,H=X/re,Q=C.x-p,ae=C.y-_,ve=Math.hypot(Q,ae)||1,fe=Q/ve,ce=ae/ve;let Te=C.x,Pe=C.y;if(E==="shell"&&x.outer>.01){const pe=i((fe*oe+ce*H-.32)/.68,0,1),U=1-i(Math.hypot(C.x-x.px,C.y-x.py)/(I*.88),0,1),ue=i((ve/I-.36)/.7,0,1),q=Math.pow(i(x.outer*m.outerGravity*Math.max(pe,U*.92)*ue*(.72+o((_e.phase||0)*41.7)*.92),0,1),1.05);if(q>.01){const le=Math.sin(xe*3.6+(_e.phase||0)*2.7)*I*.035,ge=x.px+oe*I*.1,ie=x.py+H*I*.1;Te+=(ge-Te)*q*.8*m.outerGravity+-H*le*q,Pe+=(ie-Pe)*q*.8*m.outerGravity+oe*le*q}}if(x.inner>.01){const pe=C.x-x.px,U=C.y-x.py,ue=Math.hypot(pe,U)||1,q=pe/ue,le=U/ue,ge=I*(E==="dust"?.58:.42),ie=1-i(ue/ge,0,1),Ee=Math.pow(i(x.inner*m.innerFluid*ie*(.62+o((_e.phase||0)*61.3)*.78),0,1),.72);if(Ee>.01){const we=Math.sin(xe*6.1+(_e.phase||0)*5.3+ve*.015),rt=I*(E==="dust"?.3:.22)*m.innerFluid;Te+=q*rt*Ee+-le*we*I*.095*Ee,Pe+=le*rt*Ee+q*we*I*.095*Ee}}return{x:Te,y:Pe,z:C.z,p:C.p}}function k(C,_e,xe){const b=String(m.centerText||"").trim();if(!b)return;const E=i(M.vanish,0,.98),I=i(m.textAlpha,0,1)*xe*(1-E);if(I<=.01)return;const O=1-M.implode*m.implodeStrength*.16,X=1+M.expand*m.expandStrength*.1,re=1+M.explode*m.textExplode*.32,oe=Math.max(.18,O*X*re),H=Math.max(22,v*.23*m.textSize*_e*oe),Q=Math.sin(C*1.25)*1.8-v*M.implode*.03,ae=s(M.explode),ve=v*m.explodeStrength*m.textExplode*ae,fe=v*M.implode*m.implodeStrength*.055;n.save(),n.globalCompositeOperation="screen",n.textAlign="center",n.textBaseline="middle",n.font=`950 ${H}px Inter, ui-sans-serif, system-ui, sans-serif`,n.lineJoin="round",n.shadowColor="rgba(255,255,255,.72)";const ce=Array.from(b),Te=ce.map(q=>Math.max(2,n.measureText(q).width)),Pe=H*.025,pe=Te.reduce((q,le)=>q+le,0)+Pe*Math.max(0,ce.length-1);let U=-pe/2;for(let q=0;q<ce.length;q++){const le=ce[q],ge=U+Te[q]/2;U+=Te[q]+Pe;const ie=o((q+1)*91.17+b.length*13.9),Ee=-Math.PI*.5+(q-(ce.length-1)/2)*.72+(ie-.5)*1.05,we=ce.length<=1?0:q/(ce.length-1)-.5,rt=Math.sin(C*(2.6+ie*2.1)+ie*9)*v*.018*ae,nt=p+ge*(1-M.implode*.34)+Math.cos(Ee)*ve*(.32+ie*.85)+we*ve*.42,En=_+Q+Math.sin(Ee)*ve*(.3+ie*.78)+rt-fe,ei=(ie-.5)*1.55*ae+we*.28*ae,$l=I*(1-ae*.18)*(1-E*.42);n.save(),n.translate(nt,En),n.rotate(ei);const ql=Math.max(H,Te[q]),_s=n.createLinearGradient(-ql*.55,-H*.45,ql*.55,H*.55);_s.addColorStop(0,"rgba(255,255,255,.98)"),_s.addColorStop(.55,"rgba(248,246,238,.76)"),_s.addColorStop(1,"rgba(255,255,255,.95)"),n.shadowBlur=18*m.textGlow*(1+ae*.7),n.globalAlpha=$l*.2,n.lineWidth=Math.max(1.2,H*.045),n.strokeStyle="rgba(248,246,238,.88)",n.strokeText(le,0,0),n.globalAlpha=$l,n.shadowBlur=9*m.textGlow*(1+ae*.55),n.fillStyle=_s,n.fillText(le,0,0),n.restore()}if(Math.floor(performance.now()/520)%2===0&&M.explode<.05&&M.vanish<.05){const q=p+pe/2+H*.13;n.globalAlpha=I*.78,n.shadowBlur=8*m.textGlow,n.strokeStyle="rgba(248,246,238,.82)",n.lineWidth=Math.max(1.2,H*.028),n.beginPath(),n.moveTo(q,_+Q-H*.35),n.lineTo(q,_+Q+H*.35),n.stroke()}n.restore()}function N(C){const _e=C??performance.now(),xe=Math.min(50,_e-h);h=_e,x.x+=(x.tx-x.x)*.095,x.y+=(x.ty-x.y)*.095,x.vx*=.88,x.vy*=.88,M.value+=(M.target-M.value)*.065,V();const b=u?0:m.baseSpin,E=x.active?i(Math.hypot(x.vx,x.vy)*m.mouseSpin,0,1.05):0,I=xe*.001;S.vx+=(-b*.03+x.vy*m.mouseSpin*.2)*I,S.vy+=(b*.05+x.vx*m.mouseSpin*.26)*I,S.vz+=(b*.01+(x.vx-x.vy)*m.mouseSpin*.05)*I,S.vx*=m.inertia,S.vy*=m.inertia,S.vz*=m.inertia,S.x+=S.vx*(1+E*.22),S.y+=S.vy*(1+E*.28),S.z+=S.vz*(1+E*.15);const O=Math.hypot(x.px-p,x.py-_),X=v*(1+M.value*.04),re=x.active?i((O-X*.72)/(X*.58),0,1)*(1-i((O-X*1.78)/(X*.5),0,1)):0,oe=x.active?1-i(O/(X*.82),0,1):0;x.outer+=(re-x.outer)*.14,x.inner+=(oe-x.inner)*.18,x.pulse+=(x.outer+x.inner-x.pulse)*.1,n.clearRect(0,0,c,d);const H=u?0:_e*.001,Q=Math.max(.22,1+M.value*.01-M.implode*m.implodeStrength*.19+M.expand*m.expandStrength*.05),ae=S.x+x.y*.085+Math.sin(H*.34)*.045,ve=S.y+x.x*.105,fe=S.z+Math.sin(H*.22)*.038,ce=M.progress<.02?1:1-i(M.vanish,0,.96);n.save(),n.globalCompositeOperation="source-over";const Te=Math.max(8,v*(.5-M.implode*.2+M.explode*.24)),Pe=n.createRadialGradient(p,_,0,p,_,Te);Pe.addColorStop(0,"rgba(0,0,0,.32)"),Pe.addColorStop(.55,"rgba(0,0,0,.19)"),Pe.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=Pe,n.globalAlpha=.75,n.beginPath(),n.arc(p,_,Te,0,Math.PI*2),n.fill(),n.globalAlpha=1,k(H,Q,ce),n.fillStyle="#fffdf6",n.shadowColor="rgba(255,255,255,.45)",n.shadowBlur=0;for(const pe of y)for(let U=0;U<pe.points.length;U++){const ue=pe.points[U];if(!ue)continue;const q=D({x:ue.x,y:ue.y,z:ue.z+Math.sin(H*.42+pe.phase+U*.035)*.018},{phase:pe.phase+U*.013},H,"arc"),le=F(q,ae,ve,fe,Q),ge=i((le.z+1.08)/2.16,0,1);W(le.x,le.y,pe.size*le.p,Math.min(1,pe.alpha*1.28*(.32+ge*.8)*(.72+Math.sin(H*2+U*.8)*.12)*ce))}for(const pe of w){const U=Math.sin(H*.65+pe.phase)*.018,ue=D({x:pe.x*(1+U),y:pe.y,z:pe.z},pe,H,"dust"),q=Y(F(ue,ae*.96,ve*1.08,fe,Q),pe,H,Q,"dust"),le=i((q.z+1)/2,0,1),ge=.7+Math.sin(H*2.1+pe.phase)*.18;W(q.x,q.y,pe.size*q.p,Math.min(1,pe.alpha*1.32*ge*(.28+le*.62)*ce))}for(const pe of T){const U=Math.sin(H*(.55+(pe.stream||0)*.015)+pe.phase+pe.y*3)*.02,ue=Math.cos(H*.38+pe.phase+pe.x*2)*.012,q=D({x:pe.x+pe.y*ue,y:pe.y+U,z:pe.z-pe.x*ue},pe,H,"shell"),le=Y(F(q,ae,ve,fe,Q),pe,H,Q,"shell"),ge=i((le.z+1.1)/2.2,0,1),ie=Math.hypot(le.x-p,le.y-_)/(v*Q),Ee=i((ie-.48)/.46,0,1),we=.76+Math.sin(H*(1.4+(pe.twinkle||1))+pe.phase*3)*.18,rt=1.18+M.explode*m.explodeStrength*1.15,nt=pe.alpha*1.55*we*(.23+ge*.8)*(.46+Ee*.88)*rt*ce,En=pe.size*le.p*(ge>.63?1.08:.8)*(1+M.explode*m.explodeStrength*.52);W(le.x,le.y,En,M.progress<.02?Math.min(Math.max(nt,.105),.96):Math.min(nt,.96))}n.shadowBlur=7,n.shadowColor="rgba(255,255,255,.55)";for(let pe=0;pe<T.length;pe+=83){const U=T[pe],ue=Y(F(D(U,U,H,"shell"),ae,ve,fe,Q),U,H,Q,"shell"),q=i((ue.z+1.1)/2.2,0,1);q<.56||W(ue.x,ue.y,1.15*ue.p,M.progress<.02?Math.max(.48*q*ce,.11):.4*q*ce)}n.shadowBlur=0,x.active&&x.pulse>.02&&(n.save(),n.globalCompositeOperation="screen",n.strokeStyle="rgba(248,246,238,.42)",n.fillStyle="#f8f6ee",n.globalAlpha=.08+x.pulse*.14,n.beginPath(),n.arc(x.px,x.py,v*(.05+x.pulse*.055),0,Math.PI*2),n.stroke(),W(x.px,x.py,1.6+x.pulse*2.2,.2+x.pulse*.36),n.restore()),M.flash>.02&&(n.save(),n.globalCompositeOperation="screen",n.strokeStyle="rgba(248,246,238,.28)",n.lineWidth=1,n.globalAlpha=M.flash*.34,n.beginPath(),n.arc(p,_,v*(.76+M.explode*m.explodeStrength*.55),0,Math.PI*2),n.stroke(),n.globalAlpha=M.flash*.13,n.beginPath(),n.arc(p,_,v*(.45+M.explode*m.explodeStrength*.36),0,Math.PI*2),n.stroke(),n.restore()),n.restore(),g=requestAnimationFrame(N)}let $=!0;const ee=C=>new Promise(_e=>setTimeout(_e,C));async function ne(C,_e={min:58,max:185}){for(const xe of Array.from(C)){if(!$)return;m.centerText+=xe,await ee(r(_e.min,_e.max))}}async function se(C={min:32,max:96}){for(;m.centerText.length&&$;)m.centerText=Array.from(m.centerText).slice(0,-1).join(""),await ee(r(C.min,C.max))}async function ke(){for(await ee(520);$;)m.centerText="",await ne("Hello...",{min:70,max:210}),await ee(760),await se({min:34,max:90}),await ee(260),await ne("Welcome to",{min:52,max:165}),await ee(760),await se({min:30,max:82}),await ee(240),await ne("VelvetY",{min:78,max:220}),await ee(1800),await se({min:30,max:82}),await ee(300)}const Ce={virtualP:0,unlocked:!1,touchY:null},Ue=.62,te=.62,me=.82,he=.16;function Fe(){const C=document.querySelector(".intro-scroll");return C?Math.max(1,C.scrollHeight-innerHeight):Math.max(1,document.documentElement.scrollHeight-innerHeight)}function Be(){const C=Fe();e.classList.toggle("pass-through",scrollY>C-2)}function Ne(C){C=i(C,0,1),M.target=C,document.documentElement.style.setProperty("--p",C>.995?"1":C.toFixed(4));const _e=C<te-.001?0:1;document.documentElement.style.setProperty("--white-guide-opacity",_e.toFixed(3));const b=Array.from(document.querySelectorAll(".piano-key")).filter(I=>getComputedStyle(I).display!=="none"),E=Math.max(1,b.length);b.forEach((I,O)=>{const X=E<=1?0:(me-te)/(E-1),re=te+O*X,oe=a((C-re)/he),H=Math.max(1e-4,1-oe),Q=C>=te-.001&&oe<.985;I.style.transform=`scaleY(${H})`,I.style.opacity=oe>.985?"0":"1",I.style.borderRightColor=Q?"rgba(255,255,255,.10)":"rgba(255,255,255,0)",I.style.boxShadow=Q?"0 22px 70px rgba(0,0,0,.58)":"none"})}function pt(){const C=Fe(),_e=i(scrollY/C,0,1);if(scrollY<=1&&!Ce.unlocked){Ne(Ce.virtualP),Be();return}if(scrollY<=1&&Ce.unlocked&&Ce.virtualP<Ue){Ce.unlocked=!1,Ne(Ce.virtualP),Be();return}const xe=Ue+_e*(1-Ue);Ne(xe),Be()}function He(C,_e){const xe=scrollY<=1,b=C<0;if(xe&&(!Ce.unlocked||b&&Ce.virtualP>0)){_e&&_e.cancelable&&_e.preventDefault();const E=Fe();return Ce.virtualP=i(Ce.virtualP+C/(E*.78),0,Ue),Ce.unlocked=Ce.virtualP>=Ue-8e-4,Ne(Ce.virtualP),!0}return!xe&&b&&scrollY<4&&(Ce.virtualP=Ue),!1}function it(C){const _e=(C.clientX/innerWidth-.5)*2,xe=-(C.clientY/innerHeight-.5)*2,b=performance.now(),E=Math.max(12,b-(x.last||b));x.active&&(x.vx+=i((_e-x.tx)/E*1e3,-1.6,1.6),x.vy+=i((xe-x.ty)/E*1e3,-1.6,1.6)),x.px=C.clientX,x.py=C.clientY,x.active=!0,x.last=b,x.tx=_e,x.ty=xe}function Ze(){x.active=!1}function Ye(C){He(C.deltaY,C)||(e.classList.contains("pass-through")&&(C.cancelable&&C.preventDefault(),window.scrollBy(0,C.deltaY)),requestAnimationFrame(pt))}function yt(C){var _e;Ce.touchY=((_e=C.touches[0])==null?void 0:_e.clientY)??null}function Ct(C){const _e=C.touches[0];if(!_e||Ce.touchY===null)return;const xe=Ce.touchY-_e.clientY;Ce.touchY=_e.clientY,!He(xe,C)&&e.classList.contains("pass-through")&&(C.cancelable&&C.preventDefault(),window.scrollBy(0,xe))}function Nt(C){const _e={ArrowDown:80,PageDown:360," ":360,ArrowUp:-80,PageUp:-360,Home:-9999};C.key in _e&&(C.key==="Home"&&(Ce.virtualP=0),He(_e[C.key],C))}function Bt(){P()}function mt(){pt()}function St(){document.hidden?cancelAnimationFrame(g):(h=performance.now(),g=requestAnimationFrame(N))}return P(),L(),pt(),Be(),g=requestAnimationFrame(N),ke(),addEventListener("resize",Bt,{passive:!0}),addEventListener("scroll",mt,{passive:!0}),addEventListener("wheel",Ye,{passive:!1}),addEventListener("touchstart",yt,{passive:!0}),addEventListener("touchmove",Ct,{passive:!1}),addEventListener("keydown",Nt,{passive:!1}),addEventListener("pointermove",it,{passive:!0}),addEventListener("pointerleave",Ze,{passive:!0}),document.addEventListener("visibilitychange",St),()=>{$=!1,cancelAnimationFrame(g),removeEventListener("resize",Bt),removeEventListener("scroll",mt),removeEventListener("wheel",Ye),removeEventListener("touchstart",yt),removeEventListener("touchmove",Ct),removeEventListener("keydown",Nt),removeEventListener("pointermove",it),removeEventListener("pointerleave",Ze),document.removeEventListener("visibilitychange",St),document.documentElement.style.removeProperty("--p"),document.documentElement.style.removeProperty("--white-guide-opacity"),e.classList.remove("pass-through")}},[]),z.jsxs(z.Fragment,{children:[z.jsx(Z3,{}),z.jsx("canvas",{ref:t,className:"orb-canvas","aria-label":"Animated VelvetY orbital particle field"}),z.jsx("section",{className:"intro-scroll","aria-label":"VelvetY animated intro",children:z.jsxs("div",{className:"site-shell",children:[z.jsx("div",{className:"white-guide","aria-hidden":"true"}),z.jsx(j3,{}),z.jsx("main",{className:"hero","aria-label":"VelvetY homepage hero"}),z.jsxs("div",{className:"piano-curtain","aria-hidden":"true",children:[z.jsx("span",{className:"piano-key k1"}),z.jsx("span",{className:"piano-key k2"}),z.jsx("span",{className:"piano-key k3"}),z.jsx("span",{className:"piano-key k4"}),z.jsx("span",{className:"piano-key k5"}),z.jsx("span",{className:"piano-key k6"})]}),z.jsx("div",{className:"scroll-hint",children:"scroll to interact"})]})})]})}const iv=[{id:1,label:"Prendiville Group",size:"small",img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",alt:"Website displayed on a tablet for a hospitality project"},{id:2,label:"Walyalup Fremantle Arts Centre",size:"large",img:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1500&q=82",alt:"Outdoor creative posters and cultural venue imagery"},{id:3,label:"Luxwin",size:"small",img:"https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=82",alt:"Crystal glass abstract product brand visual"},{id:4,label:"RTRFM 92.1",size:"medium",img:"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=82",alt:"Audio mixing console and digital radio interface"},{id:5,label:"Revo Fitness",size:"medium",img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=82",alt:"Fitness studio interior for gym website project"},{id:6,label:"Pacific Energy",size:"medium",img:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=82",alt:"Solar energy project image with blue sky"}];function J3(){return z.jsxs("section",{className:"selected-works",id:"work","aria-label":"Selected works",children:[z.jsxs("h2",{className:"works-title",children:["Selected works ",z.jsx("span",{className:"works-count",children:iv.length})]}),z.jsx("div",{className:"works-grid",children:iv.map(t=>z.jsxs("article",{className:`work-card ${t.size}`,children:[z.jsx("span",{className:"work-label",children:t.label}),z.jsx("img",{src:t.img,alt:t.alt,loading:"lazy"})]},t.id))})]})}function ar(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function jS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bl={duration:.5,overwrite:!1,delay:0},u0,nn,xt,fi=1e8,ft=1/fi,Cp=Math.PI*2,eL=Cp/4,tL=0,KS=Math.sqrt,nL=Math.cos,iL=Math.sin,Zt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},Er=function(e){return typeof e=="number"},c0=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},In=function(e){return e!==!1},f0=function(){return typeof window<"u"},ku=function(e){return It(e)||Zt(e)},ZS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,rL=/random\([^)]+\)/g,sL=/,\s*/g,rv=/(?:-?\.?\d|\.)+/gi,QS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ua=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,JS=/[+-]=-?[.\d]+/,aL=/[^,'"\[\]\s]+/gi,oL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,Oi,Pp,d0,Kn={},Wc={},e1,t1=function(e){return(Wc=ao(e,Kn))&&On},h0=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Cl=function(e,n){return!n&&console.warn(e)},n1=function(e,n){return e&&(Kn[e]=n)&&Wc&&(Wc[e]=n)||Kn},Pl=function(){return 0},lL={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},uL={suppressEvents:!0},p0={},ss=[],Lp={},i1,Hn={},Ud={},sv=30,uc=[],m0="",g0=function(e){var n=e[0],i,r;if(Qi(n)||It(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=uc.length;r--&&!uc[r].targetTest(n););i=uc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new T1(e[r],i)))||e.splice(r,1);return e},Bs=function(e){return e._gsap||g0(di(e))[0]._gsap},r1=function(e,n,i){return(i=e[n])&&It(i)?e[n]():c0(i)&&e.getAttribute&&e.getAttribute(n)||i},Nn=function(e,n){return(e=e.split(",")).forEach(n)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Ya=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},cL=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Xc=function(){var e=ss.length,n=ss.slice(0),i,r;for(Lp={},ss.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},_0=function(e){return!!(e._initted||e._startAt||e.add)},s1=function(e,n,i,r){ss.length&&!nn&&Xc(),e.render(n,i,!!(nn&&n<0&&_0(e))),ss.length&&!nn&&Xc()},a1=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(aL).length<2?n:Zt(e)?e.trim():e},o1=function(e){return e},Zn=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},fL=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},ao=function(e,n){for(var i in n)e[i]=n[i];return e},av=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Qi(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Yc=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},il=function(e){var n=e.parent||wt,i=e.keyframes?fL(pn(e.keyframes)):Zn;if(In(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},dL=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},l1=function(e,n,i,r,s){var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},Mf=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},cs=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zs=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},hL=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Dp=function(e,n,i,r){return e._startAt&&(nn?e._startAt.revert(lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},pL=function t(e){return!e||e._ts&&t(e.parent)},ov=function(e){return e._repeat?oo(e._tTime,e=e.duration()+e._rDelay)*e:0},oo=function(e,n){var i=Math.floor(e=Mt(e/n));return e&&i===e?i-1:i},$c=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Ef=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},wf=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Mt(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Ef(e),i._dirty||zs(i,e)),e},u1=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=$c(e.rawTime(),n),(!n._dur||Yl(0,n.totalDuration(),i)-n._tTime>ft)&&n.render(i,!0)),zs(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ft}},Vi=function(e,n,i,r){return n.parent&&cs(n),n._start=Mt((Er(i)?i:i||e!==wt?si(e,i,n):e._time)+n._delay),n._end=Mt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),l1(e,n,"_first","_last",e._sort?"_start":0),Ip(n)||(e._recent=n),r||u1(e,n),e._ts<0&&wf(e,e._tTime),e},c1=function(e,n){return(Kn.ScrollTrigger||h0("scrollTrigger",n))&&Kn.ScrollTrigger.create(n,e)},f1=function(e,n,i,r,s){if(x0(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&i1!==Gn.frame)return ss.push(e),e._lazy=[s,r],1},mL=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Ip=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},gL=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&mL(e)&&!(!e._initted&&Ip(e))||(e._ts<0||e._dp._ts<0)&&!Ip(e))?0:1,o=e._rDelay,l=0,u,c,d;if(o&&e._repeat&&(l=Yl(0,e._tDur,n),c=oo(l,o),e._yoyo&&c&1&&(a=1-a),c!==oo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||nn||r||e._zTime===ft||!n&&e._zTime){if(!e._initted&&f1(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?ft:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;n<0&&Dp(e,n,i,!0),e._onUpdate&&!i&&Xn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Xn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&cs(e,1),!i&&!nn&&(Xn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},_L=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},lo=function(e,n,i,r){var s=e._repeat,a=Mt(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Mt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&wf(e,e._tTime=e._tDur*o),e.parent&&Ef(e),i||zs(e.parent,e),e},lv=function(e){return e instanceof Rn?zs(e):lo(e,e._dur)},vL={_start:0,endTime:Pl,totalDuration:Pl},si=function t(e,n,i){var r=e.labels,s=e._recent||vL,a=e.duration()>=fi?s.endTime(!1):e._dur,o,l,u;return Zt(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),u=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),u&&i&&(l=l/100*(pn(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},rl=function(e,n,i){var r=Er(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;a.immediateRender=In(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new Vt(n[0],a,n[s+1])},gs=function(e,n){return e||e===0?n(e):n},Yl=function(e,n,i){return i<e?e:i>n?n:i},fn=function(e,n){return!Zt(e)||!(n=oL.exec(e))?"":n[1]},xL=function(e,n,i){return gs(i,function(r){return Yl(e,n,r)})},Np=[].slice,d1=function(e,n){return e&&Qi(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==Oi},yL=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Zt(r)&&!n||d1(r,1)?(s=i).push.apply(s,di(r)):i.push(r)})||i},di=function(e,n,i){return xt&&!n&&xt.selector?xt.selector(e):Zt(e)&&!i&&(Pp||!uo())?Np.call((n||d0).querySelectorAll(e),0):pn(e)?yL(e,i):d1(e)?Np.call(e,0):e?[e]:[]},Up=function(e){return e=di(e)[0]||Cl("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return di(n,i.querySelectorAll?i:i===e?Cl("Invalid scope")||d0.createElement("div"):e)}},h1=function(e){return e.sort(function(){return .5-Math.random()})},p1=function(e){if(It(e))return e;var n=Qi(e)?e:{each:e},i=Vs(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=n.axis,c=r,d=r;return Zt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],d=r[1]),function(f,p,_){var v=(_||n).length,g=a[v],h,m,x,S,M,T,w,y,R;if(!g){if(R=n.grid==="auto"?0:(n.grid||[1,fi])[1],!R){for(w=-fi;w<(w=_[R++].getBoundingClientRect().left)&&R<v;);R<v&&R--}for(g=a[v]=[],h=l?Math.min(R,v)*c-.5:r%R,m=R===fi?0:l?v*d/R-.5:r/R|0,w=0,y=fi,T=0;T<v;T++)x=T%R-h,S=m-(T/R|0),g[T]=M=u?Math.abs(u==="y"?S:x):KS(x*x+S*S),M>w&&(w=M),M<y&&(y=M);r==="random"&&h1(g),g.max=w-y,g.min=y,g.v=v=(parseFloat(n.amount)||parseFloat(n.each)*(R>v?v-1:u?u==="y"?v/R:R:Math.max(R,v/R))||0)*(r==="edges"?-1:1),g.b=v<0?s-v:s,g.u=fn(n.amount||n.each)||0,i=i&&v<0?IL(i):i}return v=(g[f]-g.min)/g.max||0,Mt(g.b+(i?i(v):v)*g.v)+g.u}},Fp=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Mt(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(Er(i)?0:fn(i))}},m1=function(e,n){var i=pn(e),r,s;return!i&&Qi(e)&&(r=i=e.radius||fi,e.values?(e=di(e.values),(s=!Er(e[0]))&&(r*=r)):e=Fp(e.increment)),gs(n,i?It(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=fi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-o,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-o),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:a,s||c===a||Er(a)?c:c+fn(a)}:Fp(e))},g1=function(e,n,i,r){return gs(pn(e)?!n:i===!0?!!(i=0):!r,function(){return pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},SL=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},ML=function(e,n){return function(i){return e(parseFloat(i))+(n||fn(i))}},EL=function(e,n,i){return v1(e,n,0,1,i)},_1=function(e,n,i){return gs(i,function(r){return e[~~n(r)]})},wL=function t(e,n,i){var r=n-e;return pn(e)?_1(e,t(0,e.length),n):gs(i,function(s){return(r+(s-e)%r)%r+e})},TL=function t(e,n,i){var r=n-e,s=r*2;return pn(e)?_1(e,t(0,e.length-1),n):gs(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ll=function(e){return e.replace(rL,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(sL);return g1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},v1=function(e,n,i,r,s){var a=n-e,o=r-i;return gs(s,function(l){return i+((l-e)/a*o||0)})},RL=function t(e,n,i,r){var s=isNaN(e+n)?0:function(p){return(1-p)*e+p*n};if(!s){var a=Zt(e),o={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(pn(e)&&!pn(n)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(t(e[u-1],e[u]));d--,s=function(_){_*=d;var v=Math.min(f,~~_);return c[v](_-v)},i=n}else r||(e=ao(pn(e)?[]:{},e));if(!c){for(l in n)v0.call(o,e,l,"get",n[l]);s=function(_){return M0(_,o)||(a?e.p:e)}}}return gs(i,s)},uv=function(e,n,i){var r=e.labels,s=fi,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Xn=function(e,n,i){var r=e.vars,s=r[n],a=xt,o=e._ctx,l,u,c;if(s)return l=r[n+"Params"],u=r.callbackScope||e,i&&ss.length&&Xc(),o&&(xt=o),c=l?s.apply(u,l):s.call(u),xt=a,c},Go=function(e){return cs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Xn(e,"onInterrupt"),e},Fa,x1=[],y1=function(e){if(e)if(e=!e.name&&e.default||e,f0()||e.headless){var n=e.name,i=It(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:Pl,render:M0,add:v0,kill:GL,modifier:HL,rawVars:0},a={targetTest:0,get:0,getSetter:S0,aliases:{},register:0};if(uo(),e!==r){if(Hn[n])return;Zn(r,Zn(Yc(e,s),a)),ao(r.prototype,ao(s,Yc(e,a))),Hn[r.prop=n]=r,e.targetTest&&(uc.push(r),p0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}n1(n,r),e.register&&e.register(On,r,Un)}else x1.push(e)},ct=255,Wo={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Fd=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*ct+.5|0},S1=function(e,n,i){var r=e?Er(e)?[e>>16,e>>8&ct,e&ct]:0:Wo.black,s,a,o,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wo[e])r=Wo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(rv),!n)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=Fd(l+1/3,s,a),r[1]=Fd(l,s,a),r[2]=Fd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(QS),i&&r.length<4&&(r[3]=1),r}else r=e.match(rv)||Wo.transparent;r=r.map(Number)}return n&&!_&&(s=r[0]/ct,a=r[1]/ct,o=r[2]/ct,d=Math.max(s,a,o),f=Math.min(s,a,o),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},M1=function(e){var n=[],i=[],r=-1;return e.split(as).forEach(function(s){var a=s.match(Ua)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},cv=function(e,n,i){var r="",s=(e+r).match(as),a=n?"hsla(":"rgba(",o=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=S1(f,n,1))&&a+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=M1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(as,"1").split(Ua),d=u.length-1;o<d;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(as),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},as=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wo)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),AL=/hsl[a]?\(/,E1=function(e){var n=e.join(" "),i;if(as.lastIndex=0,as.test(n))return i=AL.test(n),e[1]=cv(e[1],i),e[0]=cv(e[0],i,M1(e[1])),!0},Dl,Gn=function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,u,c,d,f,p,_=function v(g){var h=t()-r,m=g===!0,x,S,M,T;if((h>e||h<0)&&(i+=h-n),r+=h,M=r-i,x=M-a,(x>0||m)&&(T=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,a+=x+(x>=s?4:s-x),S=1),m||(l=u(v)),S)for(p=0;p<o.length;p++)o[p](M,f,T,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){e1&&(!Pp&&f0()&&(Oi=Pp=window,d0=Oi.document||{},Kn.gsap=On,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(On.version),t1(Wc||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),x1.forEach(y1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(g){return setTimeout(g,a-d.time*1e3+1|0)},Dl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Dl=0,u=Pl},lagSmoothing:function(g,h){e=g||1/0,n=Math.min(h||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,h,m){var x=h?function(S,M,T,w){g(S,M,T,w),d.remove(x)}:g;return d.remove(g),o[m?"unshift":"push"](x),uo(),x},remove:function(g,h){~(h=o.indexOf(g))&&o.splice(h,1)&&p>=h&&p--},_listeners:o},d}(),uo=function(){return!Dl&&Gn.wake()},Ke={},bL=/^[\d.\-M][\d.\-,\s]/,CL=/["']/g,PL=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),n[r]=isNaN(u)?u.replace(CL,"").trim():+u,r=l.substr(o+1).trim();return n},LL=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},DL=function(e){var n=(e+"").split("("),i=Ke[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[PL(n[1])]:LL(e).split(",").map(a1)):Ke._CE&&bL.test(e)?Ke._CE("",e):i},IL=function(e){return function(n){return 1-e(1-n)}},Vs=function(e,n){return e&&(It(e)?e:Ke[e]||DL(e))||n},ea=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return Nn(e,function(o){Ke[o]=Kn[o]=s,Ke[a=o.toLowerCase()]=i;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},w1=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Od=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/Cp*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*iL((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:w1(o);return s=Cp/s,l.config=function(u,c){return t(e,u,c)},l},kd=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:w1(i);return r.config=function(s){return t(e,s)},r};Nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;ea(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;ea("Elastic",Od("in"),Od("out"),Od());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};ea("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ea("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});ea("Circ",function(t){return-(KS(1-t*t)-1)});ea("Sine",function(t){return t===1?1:-nL(t*eL)+1});ea("Back",kd("in"),kd("out"),kd());Ke.SteppedEase=Ke.steps=Kn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-ft;return function(o){return((r*Yl(0,a,o)|0)+s)*i}}};bl.ease=Ke["quad.out"];Nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return m0+=t+","+t+"Params,"});var T1=function(e,n){this.id=tL++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:r1,this.set=n?n.getSetter:S0},Il=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,lo(this,+n.duration,1,1),this.data=n.data,xt&&(this._ctx=xt,xt.data.push(this)),Dl||Gn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,lo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(uo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wf(this,i),!s._dp||s.parent||u1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),s1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ov(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ov(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?oo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?$c(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ft?0:this._rts,this.totalTime(Yl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ef(this),hL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Mt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(In(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$c(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=uL);var r=nn;return nn=i,_0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),nn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,lv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,lv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(si(this,i),In(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,In(r)),this._dur||(this._zTime=-ft),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ft)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=It(i)?i:o1,l=function(){var c=r.then;r.then=null,s&&s(),It(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Go(this)},t}();Zn(Il.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var Rn=function(t){jS(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=In(i.sortChildren),wt&&Vi(i.parent||wt,ar(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&c1(ar(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return rl(0,arguments,this),this},n.from=function(r,s,a){return rl(1,arguments,this),this},n.fromTo=function(r,s,a,o){return rl(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,il(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Vt(r,s,si(this,a),1),this},n.call=function(r,s,a){return Vi(this,Vt.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new Vt(r,a,si(this,l)),this},n.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,il(a).immediateRender=In(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},n.staggerFromTo=function(r,s,a,o,l,u,c,d){return o.startAt=a,il(o).immediateRender=In(o.immediateRender),this.staggerTo(r,s,o,l,u,c,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Mt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,v,g,h,m,x,S,M,T,w;if(this!==wt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(f=Mt(c%g),c===l?(v=this._repeat,f=u):(M=Mt(c/g),v=~~M,v&&v===M&&(f=u,v--),f>u&&(f=u)),M=oo(this._tTime,g),!o&&this._tTime&&M!==v&&this._tTime-M*g-this._dur<=0&&(M=v),T&&v&1&&(f=u-f,w=1),v!==M&&!this._lock){var y=T&&M&1,R=y===(T&&v&1);if(v<M&&(y=!y),o=y?0:c%u?u:c,this._lock=1,this.render(o||(w?0:Mt(v*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=v),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,R&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=_L(this,Mt(o),Mt(f)),m&&(c-=f-(f=m._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!M&&(Xn(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!h){m=0,_&&(c+=this._zTime=-ft);break}}p=_}else{p=this._last;for(var P=r<0?r:f;p;){if(_=p._prev,(p._act||P<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,s,a||nn&&_0(p)),f!==this._time||!this._ts&&!h){m=0,_&&(c+=this._zTime=P?-ft:ft);break}}p=_}}if(m&&!s&&(this.pause(),m.render(f>=o?0:-ft)._zTime=f>=o?1:-1,this._ts))return this._start=S,Ef(this),this.render(r,s,a);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&cs(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Xn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(Er(s)||(s=si(this,s,r)),!(r instanceof Il)){if(pn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Zt(r))return this.addLabel(r,s);if(It(r))r=Vt.delayedCall(0,r);else return this}return this!==r?Vi(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-fi);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof Vt?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return Zt(r)?this.removeLabel(r):It(r)?this.killTweensOf(r):(r.parent===this&&Mf(this,r),r===this._recent&&(this._recent=this._last),zs(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Gn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=si(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Vt.delayedCall(0,s||Pl,a);return o.data="isPause",this._hasPause=1,Vi(this,o,si(this,r))},n.removePause=function(r){var s=this._first;for(r=si(this,r);s;)s._start===r&&s.data==="isPause"&&cs(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)qr!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=di(r),l=this._first,u=Er(s),c;l;)l instanceof Vt?cL(l._targets,o)&&(u?(!qr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=si(a,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Vt.to(a,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!p){var g=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());_._dur!==g&&lo(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,Zn({startAt:{time:si(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),uv(this,si(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),uv(this,si(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ft)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=Mt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return zs(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),zs(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=fi,u,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vi(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Mt(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;lo(a,a===wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(wt._ts&&(s1(wt,$c(r,wt)),i1=Gn.frame),Gn.frame>=sv){sv+=qn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&qn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e}(Il);Zn(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var NL=function(e,n,i,r,s,a,o){var l=new Un(this._pt,e,n,0,1,L1,null,s),u=0,c=0,d,f,p,_,v,g,h,m;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Ll(r)),a&&(m=[i,r],a(m,e,n),i=m[0],r=m[1]),f=i.match(Nd)||[];d=Nd.exec(r);)_=d[0],v=r.substring(u,d.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(g=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:g,c:_.charAt(1)==="="?Ya(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=Nd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(JS.test(r)||h)&&(l.e=0),this._pt=l,l},v0=function(e,n,i,r,s,a,o,l,u,c){It(r)&&(r=r(s||0,e,a));var d=e[n],f=i!=="get"?i:It(d)?u?e[n.indexOf("set")||!It(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():d,p=It(d)?u?BL:C1:y0,_;if(Zt(r)&&(~r.indexOf("random(")&&(r=Ll(r)),r.charAt(1)==="="&&(_=Ya(f,r)+(fn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Op)return!isNaN(f*r)&&r!==""?(_=new Un(this._pt,e,n,+f||0,r-(f||0),typeof d=="boolean"?VL:P1,0,p),u&&(_.fp=u),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(n in e)&&h0(n,r),NL.call(this,e,n,f,r,p,l||qn.stringFilter,u))},UL=function(e,n,i,r,s){if(It(e)&&(e=sl(e,s,n,i,r)),!Qi(e)||e.style&&e.nodeType||pn(e)||ZS(e))return Zt(e)?sl(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=sl(e[o],s,n,i,r);return a},R1=function(e,n,i,r,s,a){var o,l,u,c;if(Hn[e]&&(o=new Hn[e]).init(s,o.rawVars?n[e]:UL(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Un(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Fa))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},qr,Op,x0=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,v=e._startAt,g=e._targets,h=e.parent,m=h&&h.data==="nested"?h.vars.targets:g,x=e._overwrite==="auto"&&!u0,S=e.timeline,M=r.easeReverse||d,T,w,y,R,P,L,F,W,V,D,Y,k,N;if(S&&(!f||!s)&&(s="none"),e._ease=Vs(s,bl.ease),e._rEase=M&&(Vs(M)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(W=g[0]?Bs(g[0]).harness:0,k=W&&r[W.prop],T=Yc(r,p0),v&&(v._zTime<0&&v.progress(1),n<0&&c&&o&&!p?v.render(-1,!0):v.revert(c&&_?lc:lL),v._lazy=0),a){if(cs(e._startAt=Vt.set(g,Zn({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!v&&In(l),startAt:null,delay:0,onUpdate:u&&function(){return Xn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(nn||!o&&!p)&&e._startAt.revert(lc),o&&_&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(c&&_&&!v){if(n&&(o=!1),y=Zn({overwrite:!1,data:"isFromStart",lazy:o&&!v&&In(l),immediateRender:o,stagger:0,parent:h},T),k&&(y[W.prop]=k),cs(e._startAt=Vt.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(nn?e._startAt.revert(lc):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,ft,ft);else if(!n)return}for(e._pt=e._ptCache=0,l=_&&In(l)||l&&!_,w=0;w<g.length;w++){if(P=g[w],F=P._gsap||g0(g)[w]._gsap,e._ptLookup[w]=D={},Lp[F.id]&&ss.length&&Xc(),Y=m===g?w:m.indexOf(P),W&&(V=new W).init(P,k||T,e,Y,m)!==!1&&(e._pt=R=new Un(e._pt,P,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function($){D[$]=R}),V.priority&&(L=1)),!W||k)for(y in T)Hn[y]&&(V=R1(y,T,e,Y,P,m))?V.priority&&(L=1):D[y]=R=v0.call(e,P,y,"get",T[y],Y,m,0,r.stringFilter);e._op&&e._op[w]&&e.kill(P,e._op[w]),x&&e._pt&&(qr=e,wt.killTweensOf(P,D,e.globalTime(n)),N=!e.parent,qr=0),e._pt&&l&&(Lp[F.id]=1)}L&&D1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,f&&n<=0&&S.render(fi,!0,!0)},FL=function(e,n,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,d,f,p;if(!u)for(u=e._ptCache[n]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return Op=1,e.vars[n]="+=0",x0(e,o),Op=0,l?Cl(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=Ot(i)+fn(d.e)),d.b&&(d.b=c.s+fn(d.b))},OL=function(e,n){var i=e[0]?Bs(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=ao({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},kL=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(pn(n))o=i[e]||(i[e]=[]),n.forEach(function(l,u){return o.push({t:u/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},sl=function(e,n,i,r,s){return It(e)?e.call(n,i,r,s):Zt(e)&&~e.indexOf("random(")?Ll(e):e},A1=m0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",b1={};Nn(A1+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return b1[t]=1});var Vt=function(t){jS(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:il(r))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,v=l.defaults,g=l.scrollTrigger,h=r.parent||wt,m=(pn(i)||ZS(i)?Er(i[0]):"length"in r)?[i]:di(i),x,S,M,T,w,y,R,P;if(o._targets=m.length?g0(m):Cl("GSAP target "+i+" not found. https://gsap.com",!qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||ku(u)||ku(c)){r=o.vars;var L=r.easeReverse||r.yoyoEase;if(x=o.timeline=new Rn({data:"nested",defaults:v||{},targets:h&&h.data==="nested"?h.vars.targets:m}),x.kill(),x.parent=x._dp=ar(o),x._start=0,f||ku(u)||ku(c)){if(T=m.length,R=f&&p1(f),Qi(f))for(w in f)~A1.indexOf(w)&&(P||(P={}),P[w]=f[w]);for(S=0;S<T;S++)M=Yc(r,b1),M.stagger=0,L&&(M.easeReverse=L),P&&ao(M,P),y=m[S],M.duration=+sl(u,ar(o),S,y,m),M.delay=(+sl(c,ar(o),S,y,m)||0)-o._delay,!f&&T===1&&M.delay&&(o._delay=c=M.delay,o._start+=c,M.delay=0),x.to(y,M,R?R(S,y,m):0),x._ease=Ke.none;x.duration()?u=c=0:o.timeline=0}else if(_){il(Zn(x.vars.defaults,{ease:"none"})),x._ease=Vs(_.ease||r.ease||"none");var F=0,W,V,D;if(pn(_))_.forEach(function(Y){return x.to(m,Y,">")}),x.duration();else{M={};for(w in _)w==="ease"||w==="easeEach"||kL(w,_[w],M,_.easeEach);for(w in M)for(W=M[w].sort(function(Y,k){return Y.t-k.t}),F=0,S=0;S<W.length;S++)V=W[S],D={ease:V.e,duration:(V.t-(S?W[S-1].t:0))/100*u},D[w]=V.v,x.to(m,D,F),F+=D.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||o.duration(u=x.duration())}else o.timeline=0;return p===!0&&!u0&&(qr=ar(o),wt.killTweensOf(m),qr=0),Vi(h,ar(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!_&&o._start===Mt(h._time)&&In(d)&&pL(ar(o))&&h.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-c)||0)),g&&c1(ar(o),g),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-ft&&!c?l:r<ft?0:r,f,p,_,v,g,h,m,x;if(!u)gL(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,a);if(f=Mt(d%v),d===l?(_=this._repeat,f=u):(g=Mt(d/v),_=~~g,_&&_===g?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),g=oo(this._tTime,v),f===o&&!a&&this._initted&&_===g)return this._tTime=d,this;_!==g&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==v&&this._initted&&(this._lock=a=1,this.render(Mt(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(f1(this,c?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var M=S?o:u-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(S?-1:1)/M:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(f/u);if(this._from&&(this.ratio=m=1-m),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!g&&(Xn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Dp(this,r,s,a),Xn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Dp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&cs(this,1),!s&&!(c&&!o)&&(d||o||h)&&(Xn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){Dl||Gn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||x0(this,u),c=this._ease(u/this._dur),FL(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(wf(this,0),this.parent||l1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,qr&&qr.vars.overwrite!==!0)._first||Go(this),this.parent&&a!==this.timeline.totalDuration()&&lo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?di(r):o,u=this._ptLookup,c=this._pt,d,f,p,_,v,g,h;if((!s||s==="all")&&dL(o,l))return s==="all"&&(this._pt=0),Go(this);for(d=this._op=this._op||[],s!=="all"&&(Zt(s)&&(v={},Nn(s,function(m){return v[m]=1}),s=v),s=OL(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(v in _)g=f&&f[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&Mf(this,g,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&c&&Go(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return rl(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return rl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return wt.killTweensOf(r,s,a)},e}(Il);Zn(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nn("staggerTo,staggerFrom,staggerFromTo",function(t){Vt[t]=function(){var e=new Rn,n=Np.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var y0=function(e,n,i){return e[n]=i},C1=function(e,n,i){return e[n](i)},BL=function(e,n,i,r){return e[n](r.fp,i)},zL=function(e,n,i){return e.setAttribute(n,i)},S0=function(e,n){return It(e[n])?C1:c0(e[n])&&e.setAttribute?zL:y0},P1=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},VL=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},L1=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},M0=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},HL=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},GL=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?Mf(this,n,"_pt"):n.dep||(i=1),n=r;return!i},WL=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},D1=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},Un=function(){function t(n,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||P1,this.d=l||this,this.set=u||y0,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=WL,this.m=i,this.mt=s,this.tween=r},t}();Nn(m0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return p0[t]=1});Kn.TweenMax=Kn.TweenLite=Vt;Kn.TimelineLite=Kn.TimelineMax=Rn;wt=new Rn({sortChildren:!1,defaults:bl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=E1;var Hs=[],cc={},XL=[],fv=0,YL=0,Bd=function(e){return(cc[e]||XL).map(function(n){return n()})},kp=function(){var e=Date.now(),n=[];e-fv>2&&(Bd("matchMediaInit"),Hs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Oi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&n.push(i))}),Bd("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),fv=e,Bd("matchMedia"))},I1=function(){function t(n,i){this.selector=i&&Up(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YL++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){It(i)&&(s=r,r=i,i=It);var a=this,o=function(){var u=xt,c=a.selector,d;return u&&u!==a&&u.data.push(a),s&&(a.selector=Up(s)),xt=a,d=r.apply(a,arguments),It(d)&&a._r.push(d),xt=u,a.selector=c,a.isReverted=!1,d};return a.last=o,i===It?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=xt;xt=null,i(this),xt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Vt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Rn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Vt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Hs.length;a--;)Hs[a].id===this.id&&Hs.splice(a,1)},e.revert=function(i){this.kill(i||{})},t}(),$L=function(){function t(n){this.contexts=[],this.scope=n,xt&&xt.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){Qi(i)||(i={matches:i});var a=new I1(0,s||this.scope),o=a.conditions={},l,u,c;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Oi.matchMedia(i[u]),l&&(Hs.indexOf(a)<0&&Hs.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(kp):l.addEventListener("change",kp)));return c&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),qc={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return y1(r)})},timeline:function(e){return new Rn(e)},getTweensOf:function(e,n){return wt.getTweensOf(e,n)},getProperty:function(e,n,i,r){Zt(e)&&(e=di(e)[0]);var s=Bs(e||{}).get,a=i?o1:a1;return i==="native"&&(i=""),e&&(n?a((Hn[n]&&Hn[n].get||s)(e,n,i,r)):function(o,l,u){return a((Hn[o]&&Hn[o].get||s)(e,o,l,u))})},quickSetter:function(e,n,i){if(e=di(e),e.length>1){var r=e.map(function(c){return On.quickSetter(c,n,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var a=Hn[n],o=Bs(e),l=o.harness&&(o.harness.aliases||{})[n]||n,u=a?function(c){var d=new a;Fa._pt=0,d.init(e,i?c+i:c,Fa,0,[e]),d.render(1,d),Fa._pt&&M0(1,Fa)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,n,i){var r,s=On.to(e,Zn((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(n,l,u,c)};return a.tween=s,a},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vs(e.ease,bl.ease)),av(bl,e||{})},config:function(e){return av(qn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Hn[o]&&!Kn[o]&&Cl(n+" effect requires "+o+" plugin.")}),Ud[n]=function(o,l,u){return i(di(o),Zn(l||{},s),u)},a&&(Rn.prototype[n]=function(o,l,u){return this.add(Ud[n](o,Qi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){Ke[e]=Vs(n)},parseEase:function(e,n){return arguments.length?Vs(e,n):Ke},getById:function(e){return wt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Rn(e),r,s;for(i.smoothChildTiming=In(e.smoothChildTiming),wt.remove(i),i._dp=0,i._time=i._tTime=wt._time,r=wt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Vt&&r.vars.onComplete===r._targets[0]))&&Vi(i,r,r._start-r._delay),r=s;return Vi(wt,i,0),i},context:function(e,n){return e?new I1(e,n):xt},matchMedia:function(e){return new $L(e)},matchMediaRefresh:function(){return Hs.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||kp()},addEventListener:function(e,n){var i=cc[e]||(cc[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=cc[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:wL,wrapYoyo:TL,distribute:p1,random:g1,snap:m1,normalize:EL,getUnit:fn,clamp:xL,splitColor:S1,toArray:di,selector:Up,mapRange:v1,pipe:SL,unitize:ML,interpolate:RL,shuffle:h1},install:t1,effects:Ud,ticker:Gn,updateRoot:Rn.updateRoot,plugins:Hn,globalTimeline:wt,core:{PropTween:Un,globals:n1,Tween:Vt,Timeline:Rn,Animation:Il,getCache:Bs,_removeLinkedListItem:Mf,reverting:function(){return nn},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return u0=e}}};Nn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return qc[t]=Vt[t]});Gn.add(Rn.updateRoot);Fa=qc.to({},{duration:0});var qL=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},jL=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=qL(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},zd=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Zt(s)&&(l={},Nn(s,function(c){return l[c]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}jL(o,s)}}}},On=qc.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)nn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},zd("roundProps",Fp),zd("modifiers"),zd("snap",m1))||qc;Vt.version=Rn.version=On.version="3.15.0";e1=1;f0()&&uo();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dv,jr,$a,E0,Fs,hv,w0,KL=function(){return typeof window<"u"},wr={},bs=180/Math.PI,qa=Math.PI/180,xa=Math.atan2,pv=1e8,T0=/([A-Z])/g,ZL=/(left|right|width|margin|padding|x)/i,QL=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bp=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},JL=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},eD=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},tD=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},nD=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},N1=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},U1=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},iD=function(e,n,i){return e.style[n]=i},rD=function(e,n,i){return e.style.setProperty(n,i)},sD=function(e,n,i){return e._gsap[n]=i},aD=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},oD=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},lD=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},Tt="transform",Fn=Tt+"Origin",uD=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in wr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=lr(r,o)}):this.tfm[e]=a.x?a[e]:lr(r,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return Wi.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(Tt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Fn,n,"")),e=Tt}(s||n)&&this.props.push(e,n,s[e])},F1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cD=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(T0,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=w0(),(!s||!s.isStart)&&!i[Tt]&&(F1(i),r.zOrigin&&i[Fn]&&(i[Fn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},O1=function(e,n){var i={target:e,props:[],revert:cD,save:uD};return e._gsap||On.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},k1,zp=function(e,n){var i=jr.createElementNS?jr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):jr.createElement(e);return i&&i.style?i:jr.createElement(e)},Yn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(T0,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,co(n)||n,1)||""},mv="O,Moz,ms,Ms,Webkit".split(","),co=function(e,n,i){var r=n||Fs,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(mv[a]+e in s););return a<0?null:(a===3?"ms":a>=0?mv[a]:"")+e},Vp=function(){KL()&&window.document&&(dv=window,jr=dv.document,$a=jr.documentElement,Fs=zp("div")||{style:{}},zp("div"),Tt=co(Tt),Fn=Tt+"Origin",Fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",k1=!!co("perspective"),w0=On.core.reverting,E0=1)},gv=function(e){var n=e.ownerSVGElement,i=zp("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),$a.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),$a.removeChild(i),s},_v=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},B1=function(e){var n,i;try{n=e.getBBox()}catch{n=gv(e),i=1}return n&&(n.width||n.height)||i||(n=gv(e)),n&&!n.width&&!n.x&&!n.y?{x:+_v(e,["x","cx","x1"])||0,y:+_v(e,["y","cy","y1"])||0,width:0,height:0}:n},z1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&B1(e))},fs=function(e,n){if(n){var i=e.style,r;n in wr&&n!==Fn&&(n=Tt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(T0,"-$1").toLowerCase())):i.removeAttribute(n)}},Kr=function(e,n,i,r,s,a){var o=new Un(e._pt,n,i,0,1,a?U1:N1);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},vv={deg:1,rad:1,turn:1},fD={grid:1,flex:1},ds=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Fs.style,l=ZL.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,v,g,h;if(r===a||!s||vv[r]||vv[a])return s;if(a!=="px"&&!f&&(s=t(e,n,i,"px")),h=e.getCTM&&z1(e),(p||a==="%")&&(wr[n]||~n.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Ot(p?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:r),v=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===jr||!v.appendChild)&&(v=jr.body),g=v._gsap,g&&p&&g.width&&l&&g.time===Gn.time&&!g.uncache)return Ot(s/g.width*d);if(p&&(n==="height"||n==="width")){var m=e.style[n];e.style[n]=d+r,_=e[c],m?e.style[n]=m:fs(e,n)}else(p||a==="%")&&!fD[Yn(v,"display")]&&(o.position=Yn(e,"position")),v===e&&(o.position="static"),v.appendChild(Fs),_=Fs[c],v.removeChild(Fs),o.position="absolute";return l&&p&&(g=Bs(v),g.time=Gn.time,g.width=v[c]),Ot(f?_*s/d:_&&s?d/_*s:0)},lr=function(e,n,i,r){var s;return E0||Vp(),n in Wi&&n!=="transform"&&(n=Wi[n],~n.indexOf(",")&&(n=n.split(",")[0])),wr[n]&&n!=="transform"?(s=Ul(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Kc(Yn(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=jc[n]&&jc[n](e,n,i)||Yn(e,n)||r1(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ds(e,n,s,i)+i:s},dD=function(e,n,i,r){if(!i||i==="none"){var s=co(n,e,1),a=s&&Yn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=Yn(e,"borderTopColor"))}var o=new Un(this._pt,e.style,n,0,1,L1),l=0,u=0,c,d,f,p,_,v,g,h,m,x,S,M;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[n],e.style[n]=r,r=Yn(e,n)||r,v?e.style[n]=v:fs(e,n)),c=[i,r],E1(c),i=c[0],r=c[1],f=i.match(Ua)||[],M=r.match(Ua)||[],M.length){for(;d=Ua.exec(r);)g=d[0],m=r.substring(l,d.index),_?_=(_+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(_=1),g!==(v=f[u++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),g.charAt(1)==="="&&(g=Ya(p,g)+S),h=parseFloat(g),x=g.substr((h+"").length),l=Ua.lastIndex-x.length,x||(x=x||qn.units[n]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=ds(e,n,v,x)||0),o._pt={_next:o._pt,p:m||u===1?m:",",s:p,c:h-p,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?U1:N1;return JS.test(r)&&(o.e=0),this._pt=o,o},xv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hD=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=xv[i]||i,n[1]=xv[r]||r,n.join(" ")},pD=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],wr[o]&&(l=1,o=o==="transformOrigin"?Fn:Tt),fs(i,o);l&&(fs(i,Tt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ul(i,1),a.uncache=1,F1(r)))}},jc={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Un(e._pt,n,i,0,0,pD);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Nl=[1,0,0,1,0,0],V1={},H1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yv=function(e){var n=Yn(e,Tt);return H1(n)?Nl:n.substr(7).match(QS).map(Ot)},R0=function(e,n){var i=e._gsap||Bs(e),r=e.style,s=yv(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Nl:s):(s===Nl&&!e.offsetParent&&e!==$a&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,$a.appendChild(e)),s=yv(e),l?r.display=l:fs(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):$a.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hp=function(e,n,i,r,s,a){var o=e._gsap,l=s||R0(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,p=l[0],_=l[1],v=l[2],g=l[3],h=l[4],m=l[5],x=n.split(" "),S=parseFloat(x[0])||0,M=parseFloat(x[1])||0,T,w,y,R;i?l!==Nl&&(w=p*g-_*v)&&(y=S*(g/w)+M*(-v/w)+(v*m-g*h)/w,R=S*(-_/w)+M*(p/w)-(p*m-_*h)/w,S=y,M=R):(T=B1(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(x[1]||x[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&o.smooth?(h=S-u,m=M-c,o.xOffset=d+(h*p+m*v)-h,o.yOffset=f+(h*_+m*g)-m):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[Fn]="0px 0px",a&&(Kr(a,o,"xOrigin",u,S),Kr(a,o,"yOrigin",c,M),Kr(a,o,"xOffset",d,o.xOffset),Kr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Ul=function(e,n){var i=e._gsap||new T1(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Yn(e,Fn)||"0",c,d,f,p,_,v,g,h,m,x,S,M,T,w,y,R,P,L,F,W,V,D,Y,k,N,$,ee,ne,se,ke,Ce,Ue;return c=d=f=v=g=h=m=x=S=0,p=_=1,i.svg=!!(e.getCTM&&z1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),r.scale=r.rotate=r.translate="none"),w=R0(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",k=""):k=!n&&e.getAttribute("data-svg-origin"),Hp(e,k||u,!!k||i.originIsAbsolute,i.smooth!==!1,w)),M=i.xOrigin||0,T=i.yOrigin||0,w!==Nl&&(L=w[0],F=w[1],W=w[2],V=w[3],c=D=w[4],d=Y=w[5],w.length===6?(p=Math.sqrt(L*L+F*F),_=Math.sqrt(V*V+W*W),v=L||F?xa(F,L)*bs:0,m=W||V?xa(W,V)*bs+v:0,m&&(_*=Math.abs(Math.cos(m*qa))),i.svg&&(c-=M-(M*L+T*W),d-=T-(M*F+T*V))):(Ue=w[6],ke=w[7],ee=w[8],ne=w[9],se=w[10],Ce=w[11],c=w[12],d=w[13],f=w[14],y=xa(Ue,se),g=y*bs,y&&(R=Math.cos(-y),P=Math.sin(-y),k=D*R+ee*P,N=Y*R+ne*P,$=Ue*R+se*P,ee=D*-P+ee*R,ne=Y*-P+ne*R,se=Ue*-P+se*R,Ce=ke*-P+Ce*R,D=k,Y=N,Ue=$),y=xa(-W,se),h=y*bs,y&&(R=Math.cos(-y),P=Math.sin(-y),k=L*R-ee*P,N=F*R-ne*P,$=W*R-se*P,Ce=V*P+Ce*R,L=k,F=N,W=$),y=xa(F,L),v=y*bs,y&&(R=Math.cos(y),P=Math.sin(y),k=L*R+F*P,N=D*R+Y*P,F=F*R-L*P,Y=Y*R-D*P,L=k,D=N),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,h=180-h),p=Ot(Math.sqrt(L*L+F*F+W*W)),_=Ot(Math.sqrt(Y*Y+Ue*Ue)),y=xa(D,Y),m=Math.abs(y)>2e-4?y*bs:0,S=Ce?1/(Ce<0?-Ce:Ce):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!H1(Yn(e,Tt)),k&&e.setAttribute("transform",k))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(p*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,m+=m<=0?180:-180)),n=n||i.uncache,i.x=c-((i.xPercent=c&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Ot(p),i.scaleY=Ot(_),i.rotation=Ot(v)+o,i.rotationX=Ot(g)+o,i.rotationY=Ot(h)+o,i.skewX=m+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Fn]=Kc(u)),i.xOffset=i.yOffset=0,i.force3D=qn.force3D,i.renderTransform=i.svg?gD:k1?G1:mD,i.uncache=0,i},Kc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vd=function(e,n,i){var r=fn(n);return Ot(parseFloat(n)+parseFloat(ds(e,"x",i+"px",r)))+r},mD=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,G1(e,n)},Es="0deg",Fo="0px",ws=") ",G1=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,v=i.scaleY,g=i.transformPerspective,h=i.force3D,m=i.target,x=i.zOrigin,S="",M=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Es||c!==Es)){var T=parseFloat(c)*qa,w=Math.sin(T),y=Math.cos(T),R;T=parseFloat(d)*qa,R=Math.cos(T),a=Vd(m,a,w*R*-x),o=Vd(m,o,-Math.sin(T)*-x),l=Vd(m,l,y*R*-x+x)}g!==Fo&&(S+="perspective("+g+ws),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(M||a!==Fo||o!==Fo||l!==Fo)&&(S+=l!==Fo||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ws),u!==Es&&(S+="rotate("+u+ws),c!==Es&&(S+="rotateY("+c+ws),d!==Es&&(S+="rotateX("+d+ws),(f!==Es||p!==Es)&&(S+="skew("+f+", "+p+ws),(_!==1||v!==1)&&(S+="scale("+_+", "+v+ws),m.style[Tt]=S||"translate(0, 0)"},gD=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,v=i.yOrigin,g=i.xOffset,h=i.yOffset,m=i.forceCSS,x=parseFloat(a),S=parseFloat(o),M,T,w,y,R;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=qa,u*=qa,M=Math.cos(l)*d,T=Math.sin(l)*d,w=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=qa,R=Math.tan(u-c),R=Math.sqrt(1+R*R),w*=R,y*=R,c&&(R=Math.tan(c),R=Math.sqrt(1+R*R),M*=R,T*=R)),M=Ot(M),T=Ot(T),w=Ot(w),y=Ot(y)):(M=d,y=f,T=w=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=ds(p,"x",a,"px"),S=ds(p,"y",o,"px")),(_||v||g||h)&&(x=Ot(x+_-(_*M+v*w)+g),S=Ot(S+v-(_*T+v*y)+h)),(r||s)&&(R=p.getBBox(),x=Ot(x+r/100*R.width),S=Ot(S+s/100*R.height)),R="matrix("+M+","+T+","+w+","+y+","+x+","+S+")",p.setAttribute("transform",R),m&&(p.style[Tt]=R)},_D=function(e,n,i,r,s){var a=360,o=Zt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?bs:1),u=l-r,c=r+u+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*pv)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*pv)%a-~~(u/a)*a)),e._pt=f=new Un(e._pt,n,i,r,u,JL),f.e=c,f.u="deg",e._props.push(i),f},Sv=function(e,n){for(var i in n)e[i]=n[i];return e},vD=function(e,n,i){var r=Sv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[Tt]=n,o=Ul(i,1),fs(i,Tt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Tt],a[Tt]=n,o=Ul(i,1),a[Tt]=u);for(l in wr)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=fn(u),_=fn(c),d=p!==_?ds(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new Un(e._pt,o,l,d,f-d,Bp),e._pt.u=_||0,e._props.push(l));Sv(o,r)};Nn("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});jc[e>1?"border"+t:t]=function(o,l,u,c,d){var f,p;if(arguments.length<4)return f=a.map(function(_){return lr(o,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},a.forEach(function(_,v){return p[_]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,p,d)}});var W1={name:"css",register:Vp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,d,f,p,_,v,g,h,m,x,S,M,T,w,y,R;E0||Vp(),this.styles=this.styles||O1(e),y=this.styles.props,this.tween=i;for(v in n)if(v!=="autoRound"&&(c=n[v],!(Hn[v]&&R1(v,n,i,r,e,s)))){if(p=typeof c,_=jc[v],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ll(c)),_)_(this,e,v,c,i)&&(w=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",as.lastIndex=0,as.test(u)||(g=fn(u),h=fn(c),h?g!==h&&(u=ds(e,v,u,h)+h):g&&(c+=g)),this.add(o,"setProperty",u,c,r,s,0,0,v),a.push(v),y.push(v,0,o[v]);else if(p!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Zt(u)&&~u.indexOf("random(")&&(u=Ll(u)),fn(u+"")||u==="auto"||(u+=qn.units[v]||fn(lr(e,v))||""),(u+"").charAt(1)==="="&&(u=lr(e,v))):u=lr(e,v),f=parseFloat(u),m=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),d=parseFloat(c),v in Wi&&(v==="autoAlpha"&&(f===1&&lr(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,o.visibility),Kr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Wi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in wr,x){if(this.styles.save(v),R=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Yn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=c,c=Yn(e,"perspective"),P?e.style.perspective=P:fs(e,"perspective")}d=parseFloat(c)}if(S||(M=e._gsap,M.renderTransform&&!n.parseTransform||Ul(e,n.parseTransform),T=n.smoothOrigin!==!1&&M.smooth,S=this._pt=new Un(this._pt,o,Tt,0,1,M.renderTransform,M,0,-1),S.dep=1),v==="scale")this._pt=new Un(this._pt,M,"scaleY",M.scaleY,(m?Ya(M.scaleY,m+d):d)-M.scaleY||0,Bp),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(Fn,0,o[Fn]),c=hD(c),M.svg?Hp(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==M.zOrigin&&Kr(this,M,"zOrigin",M.zOrigin,h),Kr(this,o,v,Kc(u),Kc(c)));continue}else if(v==="svgOrigin"){Hp(e,c,1,T,0,this);continue}else if(v in V1){_D(this,M,v,f,m?Ya(f,m+c):c);continue}else if(v==="smoothOrigin"){Kr(this,M,"smooth",M.smooth,c);continue}else if(v==="force3D"){M[v]=c;continue}else if(v==="transform"){vD(this,c,e);continue}}else v in o||(v=co(v)||v);if(x||(d||d===0)&&(f||f===0)&&!QL.test(c)&&v in o)g=(u+"").substr((f+"").length),d||(d=0),h=fn(c)||(v in qn.units?qn.units[v]:g),g!==h&&(f=ds(e,v,u,h)),this._pt=new Un(this._pt,x?M:o,v,f,(m?Ya(f,m+d):d)-f,!x&&(h==="px"||v==="zIndex")&&n.autoRound!==!1?nD:Bp),this._pt.u=h||0,x&&R!==c?(this._pt.b=u,this._pt.e=R,this._pt.r=tD):g!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=eD);else if(v in o)dD.call(this,e,v,u,m?m+c:c);else if(v in e)this.add(e,v,u||e[v],m?m+c:c,r,s);else if(v!=="parseTransform"){h0(v,c);continue}x||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),a.push(v)}}w&&D1(this)},render:function(e,n){if(n.tween._time||!w0())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:lr,aliases:Wi,getSetter:function(e,n,i){var r=Wi[n];return r&&r.indexOf(",")<0&&(n=r),n in wr&&n!==Fn&&(e._gsap.x||lr(e,"x"))?i&&hv===i?n==="scale"?aD:sD:(hv=i||{})&&(n==="scale"?oD:lD):e.style&&!c0(e.style[n])?iD:~n.indexOf("-")?rD:S0(e,n)},core:{_removeProperty:fs,_getMatrix:R0}};On.utils.checkPrefix=co;On.core.getStyleSaver=O1;(function(t,e,n,i){var r=Nn(t+","+e+","+n,function(s){wr[s]=1});Nn(e,function(s){qn.units[s]="deg",V1[s]=1}),Wi[r[13]]=t+","+e,Nn(i,function(s){var a=s.split(":");Wi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){qn.units[t]="px"});On.registerPlugin(W1);var fc=On.registerPlugin(W1)||On;fc.core.Tween;const Mv=[.09,.09,.1,.11,.12,.13,.2,.24,.28,.32,.36,.4,.46,.52,.58,.66,.76,.92];function xD(t){if(t===Mv.length)return[...Mv];const e=.09,n=.92;return Array.from({length:t},(i,r)=>{const s=t<=1?0:r/(t-1),a=s*s*(3-2*s);return e+(n-e)*a})}function Ev(t,e,n){const r=e>=Math.floor(n*2/3)?.072:.048,s=e<Math.floor(n/3)?.022:.032;return Math.min(r,Math.max(s,t*.16))}function wv(t,e){return t>=Math.floor(e*2/3)?"power1.inOut":"none"}function yD({slides:t,alt:e="VelvetY showcase"}){const n=G.useRef(null),[i,r]=G.useState(!1),[s,a]=G.useState(!1);return G.useEffect(()=>{const o=window.matchMedia("(prefers-reduced-motion: reduce)"),l=()=>r(o.matches);return l(),o.addEventListener("change",l),()=>o.removeEventListener("change",l)},[]),G.useEffect(()=>{if(i||t.length===0)return;let o=!0;return Promise.all(t.map(l=>new Promise(u=>{const c=new Image;c.onload=()=>u(),c.onerror=()=>u(),c.src=l}))).then(()=>{o&&a(!0)}),()=>{o=!1,a(!1)}},[t,i]),G.useEffect(()=>{if(i||!s||!n.current)return;const o=Array.from(n.current.querySelectorAll("[data-fastcut-slide]")),l=o.length;if(l===0)return;const u=xD(l);fc.set(o,{opacity:0,zIndex:1}),fc.set(o[0],{opacity:1,zIndex:2});const c=fc.timeline({repeat:-1});let d=0;for(let g=1;g<l;g++){const h=u[g-1],m=Ev(h,g-1,l),x=wv(g-1,l);d+=h;const S=d-m;c.to(o[g-1],{opacity:0,duration:m,ease:x,zIndex:1},S),c.to(o[g],{opacity:1,duration:m,ease:x,zIndex:2},S)}const f=u[l-1],p=Ev(f,l-1,l),_=wv(l-1,l);d+=f;const v=d-p;return c.to(o[l-1],{opacity:0,duration:p,ease:_,zIndex:1},v),c.to(o[0],{opacity:1,duration:p,ease:_,zIndex:2},v),()=>{c.kill()}},[s,i,t]),t.length===0?null:i?z.jsx("img",{src:t[0],alt:e,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):z.jsx("div",{ref:n,style:{position:"absolute",inset:0,overflow:"hidden",background:"#111"},children:t.map((o,l)=>z.jsx("img",{"data-fastcut-slide":!0,src:o,alt:"",decoding:"sync",draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:l===0?1:0,zIndex:l===0?2:1,willChange:"opacity"}},o))})}function SD({badge:t,imageSrc:e,slides:n,imageAlt:i="VelvetY showreel"}){return z.jsx("div",{style:{position:"absolute",inset:"clamp(24px, 5vw, 48px)",containerType:"size",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",boxSizing:"border-box"},children:z.jsxs("div",{style:{width:"min(100cqw, calc(100cqh * 16 / 10))",maxHeight:"100cqh",aspectRatio:"16 / 10",position:"relative",borderRadius:18,overflow:"hidden",background:"#111",pointerEvents:"auto",filter:"drop-shadow(0 32px 64px rgba(0,0,0,.72))",flexShrink:0},children:[n&&n.length>0?z.jsx(yD,{slides:n,alt:i}):z.jsx("img",{src:e,alt:i,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),z.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,.08) 0%, rgba(0,0,0,.40) 100%)",pointerEvents:"none"}}),z.jsx("div",{style:{position:"absolute",top:14,left:14,background:"rgba(0,0,0,.58)",backdropFilter:"blur(8px)",color:"#fff",fontSize:11,letterSpacing:"0.06em",padding:"5px 12px",borderRadius:999,fontFamily:"SFMono-Regular, Consolas, monospace",textTransform:"uppercase",zIndex:1},children:t})]})})}const MD="/Velvety2/".replace(/\/$/,""),ED=t=>`${MD}/assets/gallery/${t}`,wD=["alice.webp","bnpl.webp","cloth.webp","david.webp","done.webp","expand.webp","game.webp","hand.webp","lake.webp","lexend.webp","mindful.webp","music.webp","plan.webp","real.webp","sarah.webp","sheep.webp","smart.webp","website.webp"].map(ED);function TD(){return z.jsx("section",{style:{position:"relative",zIndex:3,height:"100vh",background:"transparent",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},"aria-label":"VelvetY showcase",children:z.jsxs("div",{style:{position:"relative",width:"clamp(360px, 92vw, 1380px)",height:"clamp(260px, 82vh, 800px)",borderRadius:28,overflow:"hidden",boxShadow:"0 0 0 9999px #000"},children:[z.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,.48) 100%)",pointerEvents:"none",zIndex:1}}),z.jsx("div",{style:{position:"absolute",inset:0,zIndex:2},children:z.jsx(SD,{badge:"#VELVETY",slides:wD})})]})})}const Tv=["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"];function RD(){const t=G.useRef(null),e=G.useRef(null);return G.useEffect(()=>{const n=t.current,i=e.current;if(!n)return;const r=new LS;r.fog=new r0(16119283,7,20);const s={width:window.innerWidth,height:window.innerHeight},a=new li(35,s.width/s.height,.1,100);a.position.set(0,.25,8.8),r.add(a);const o=new qS({canvas:n,antialias:!0,alpha:!0});o.setSize(s.width,s.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.outputColorSpace=xn;const l=new Na,u=new Na;l.add(u),r.add(l);const c=new GA;c.setCrossOrigin("anonymous");const d=Tv.length,f=3.45,p=2.05,_=2.9,v=[];function g(V,D,Y,k){const N=new xo(V,D,34,10),$=N.attributes.position,ee=N.attributes.uv;for(let ne=0;ne<$.count;ne++){const se=(ee.getX(ne)-.5)*k;$.setXYZ(ne,Math.sin(se)*Y,$.getY(ne),Y-Math.cos(se)*Y)}return N.computeVertexNormals(),N}const h=g(p,_,f,p/f);Tv.forEach((V,D)=>{const Y=c.load(V,()=>{Y.colorSpace=xn,Y.anisotropy=o.capabilities.getMaxAnisotropy()}),k=new a0({map:Y,side:zi,transparent:!0,opacity:0}),N=new Pi(h,k),$=D/d*Math.PI*2;N.position.x=Math.sin($)*f,N.position.z=Math.cos($)*f,N.rotation.y=$+Math.PI,N.userData.baseAngle=$,N.userData.phase=Math.random()*Math.PI*2,N.userData.fadeStart=performance.now()+.06*D*1e3,u.add(N),v.push(N)}),r.add(new XA(16777215,2.25));const m={targetY:0,currentY:0,autoVelocity:.0016,scrollVelocity:0,dragVelocity:0,targetX:-.06,currentX:-.06,targetZ:0,currentZ:0,cameraX:0,cameraY:0,scrollDirection:1,lastScrollY:window.scrollY,isDragging:!1,lastPointerX:0,lastPointerY:0},x=(V,D,Y)=>Math.max(D,Math.min(Y,V));function S(){l.position.x=s.width<760?.25:1.75,l.position.y=s.width<760?.75:.25,a.position.z=s.width<760?13:11,a.updateProjectionMatrix()}S();function M(V){m.isDragging=!0,m.lastPointerX=V.clientX,m.lastPointerY=V.clientY,m.dragVelocity=0,i&&(i.style.opacity="0"),n.setPointerCapture(V.pointerId),n.style.cursor="grabbing"}function T(V){if(!m.isDragging)return;const D=V.clientX-m.lastPointerX,Y=V.clientY-m.lastPointerY;m.lastPointerX=V.clientX,m.lastPointerY=V.clientY,m.targetY+=D*.0068,m.targetX+=Y*.00125,m.targetZ+=D*-42e-5,m.cameraX+=D*-22e-5,m.cameraY+=Y*24e-5,m.dragVelocity=D*82e-5,m.targetX=x(m.targetX,-.28,.22),m.targetZ=x(m.targetZ,-.095,.095),m.cameraX=x(m.cameraX,-.085,.085),m.cameraY=x(m.cameraY,-.075,.095)}function w(){m.isDragging=!1,m.autoVelocity=x(m.dragVelocity,-.035,.035),n.style.cursor="grab"}n.addEventListener("pointerdown",M),n.addEventListener("pointermove",T),n.addEventListener("pointerup",w),n.addEventListener("pointercancel",w);function y(){const V=window.scrollY-m.lastScrollY;m.lastScrollY=window.scrollY,Math.abs(V)>0&&(m.scrollDirection=V>0?1:-1,m.scrollVelocity+=x(V*9e-5,-.055,.055),m.targetY+=V*.0022)}window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("wheel",V=>{m.scrollVelocity+=x(V.deltaY*35e-6,-.026,.026)},{passive:!0});function R(){s.width=window.innerWidth,s.height=window.innerHeight,a.aspect=s.width/s.height,a.updateProjectionMatrix(),o.setSize(s.width,s.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),S()}window.addEventListener("resize",R);const P=new BS;let L,F=!0;function W(){if(!F)return;const V=P.getElapsedTime(),D=performance.now(),Y=.0014*m.scrollDirection,k=m.autoVelocity+m.scrollVelocity+Y;m.isDragging||(m.targetY+=k,m.autoVelocity*=.982,m.scrollVelocity*=.91,Math.abs(m.autoVelocity)<.0012&&(m.autoVelocity=.0012*m.scrollDirection)),m.currentY+=(m.targetY-m.currentY)*.09,m.currentX+=(m.targetX-m.currentX)*.06,m.currentZ+=(m.targetZ-m.currentZ)*.055,l.rotation.y=m.currentY,l.rotation.x=m.currentX,l.rotation.z=m.currentZ+Math.sin(V*.4)*.004,a.position.x+=(m.cameraX-a.position.x)*.045,a.position.y+=(.25+m.cameraY-a.position.y)*.045,a.lookAt(.25,.15,0),m.cameraX*=.93,m.cameraY*=.94,m.isDragging||(m.targetZ*=.96,m.targetX+=(-.08-m.targetX)*.012),v.forEach((N,$)=>{const ee=N.material,ne=Math.min(Math.max((D-N.userData.fadeStart)/1100,0),1),se=N.userData.baseAngle+m.currentY,ke=Math.cos(se);N.scale.setScalar(h_.mapLinear(ke,-1,1,.78,1.1)),ee.opacity=ne*h_.mapLinear(ke,-1,1,.22,1),N.position.y=Math.sin(V*.55+N.userData.phase)*.025,N.rotation.z=Math.sin(V*.45+$)*.006}),o.render(r,a),L=requestAnimationFrame(W)}return W(),i&&setTimeout(()=>{i.style.transition="opacity 0.8s ease",i.style.opacity="0"},2400),()=>{F=!1,cancelAnimationFrame(L),window.removeEventListener("resize",R),window.removeEventListener("scroll",y),n.removeEventListener("pointerdown",M),n.removeEventListener("pointermove",T),n.removeEventListener("pointerup",w),n.removeEventListener("pointercancel",w),o.dispose(),h.dispose(),v.forEach(V=>V.material.dispose())}},[]),z.jsxs("section",{style:{position:"relative",zIndex:4,height:"100vh",overflow:"hidden",fontFamily:"Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",color:"#171717"},"aria-label":"Digital brands that move",children:[z.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,background:"#f5f5f3"}}),z.jsx("canvas",{ref:t,style:{position:"absolute",top:0,left:0,zIndex:1,display:"block",cursor:"grab",touchAction:"none"}}),z.jsx("div",{style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"none",background:`
            linear-gradient(90deg, rgba(245,245,243,0.98) 0%, rgba(245,245,243,0.46) 24%, rgba(245,245,243,0) 54%),
            linear-gradient(0deg,  rgba(245,245,243,0.88) 0%, rgba(245,245,243,0)    36%),
            radial-gradient(circle at 78% 50%, rgba(245,245,243,0) 0%, rgba(245,245,243,0.15) 44%, rgba(245,245,243,0.76) 100%)
          `}}),z.jsxs("div",{style:{position:"absolute",left:"clamp(24px, 5vw, 76px)",bottom:"clamp(34px, 7vh, 86px)",width:"min(540px, 86vw)",zIndex:5,pointerEvents:"none"},children:[z.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,marginBottom:18,padding:"9px 14px",border:"1px solid rgba(23,23,23,0.12)",borderRadius:999,background:"rgba(255,255,255,0.42)",backdropFilter:"blur(12px)",fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(23,23,23,0.72)"},children:[z.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#101010",display:"inline-block"}}),"Scroll + Drag the Carousel"]}),z.jsxs("h2",{style:{margin:0,fontSize:"clamp(48px, 9vw, 124px)",lineHeight:.86,letterSpacing:"-0.075em",fontWeight:850,maxWidth:760,color:"#171717"},children:["Brands",z.jsx("br",{}),z.jsx("em",{style:{display:"block",fontFamily:'Georgia, "Times New Roman", serif',fontStyle:"italic",fontWeight:500,letterSpacing:"-0.08em"},children:"Redesign"})]}),z.jsx("p",{style:{margin:"22px 0 0",maxWidth:470,fontSize:15,lineHeight:1.65,color:"rgba(23,23,23,0.68)"},children:"We create websites, Shopify stores, UI/UX systems, logos, and packaging that help brands look sharper, feel stronger, and grow online."})]}),z.jsx("div",{ref:e,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:5,padding:"10px 14px",borderRadius:999,background:"rgba(16,16,16,0.86)",color:"#fff",fontSize:12,letterSpacing:"0.18em",textTransform:"uppercase",pointerEvents:"none",opacity:.92},children:"DRAG"})]})}function X1(t,e){for(let n=0;n<t;n++)e.call(this,n)}function Sa(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n}function Qt(t=null,e=null,n=null){t==null?(t=0,e=1):t!=null&&e==null&&(e=t,t=0);const i=e-t;return n==null&&(n=r=>r),t+n(Math.random())*i}function Hd(t){return Qt()<=t}let wn=64;const Rv={x:0,y:0,r:0,spreadX:0,spreadY:0,momentum:0,momentumX:0,lastSpawn:0,nextSpawn:0,parent:null,isNew:!0,killed:!1,shrink:0},AD={minR:10,maxR:40,maxDrops:900,rainChance:.3,rainLimit:3,dropletsRate:50,dropletsSize:[2,4],dropletsCleaningRadiusMultiplier:.43,raining:!0,globalTimeScale:1,trailRate:1,autoShrink:!0,spawnArea:[-.1,.95],trailScaleRange:[.2,.5],collisionRadius:.65,collisionRadiusIncrease:.01,dropFallMultiplier:1,collisionBoostMultiplier:.05,collisionBoost:1};function Y1(t,e,n,i,r,s={}){this.width=t,this.height=e,this.scale=n,this.dropAlpha=i,this.dropColor=r,this.options=Object.assign({},AD,s),this.init()}Y1.prototype={dropColor:null,dropAlpha:null,canvas:null,ctx:null,width:0,height:0,scale:0,dropletsPixelDensity:1,droplets:null,dropletsCtx:null,dropletsCounter:0,drops:null,dropsGfx:null,clearDropletsGfx:null,textureCleaningIterations:0,lastRender:null,options:null,init(){this.canvas=Sa(this.width,this.height),this.ctx=this.canvas.getContext("2d"),this.droplets=Sa(this.width*this.dropletsPixelDensity,this.height*this.dropletsPixelDensity),this.dropletsCtx=this.droplets.getContext("2d"),this.drops=[],this.dropsGfx=[],this.renderDropsGfx(),this.update()},get deltaR(){return this.options.maxR-this.options.minR},get area(){return this.width*this.height/this.scale},get areaMultiplier(){return Math.sqrt(this.area/(1024*768))},drawDroplet(t,e,n){this.drawDrop(this.dropletsCtx,Object.assign(Object.create(Rv),{x:t*this.dropletsPixelDensity,y:e*this.dropletsPixelDensity,r:n*this.dropletsPixelDensity}))},renderDropsGfx(){let t=Sa(wn,wn),e=t.getContext("2d");this.dropsGfx=Array.apply(null,Array(255)).map((i,r)=>{let s=Sa(wn,wn),a=s.getContext("2d");return e.clearRect(0,0,wn,wn),e.globalCompositeOperation="source-over",e.drawImage(this.dropColor,0,0,wn,wn),e.globalCompositeOperation="screen",e.fillStyle="rgba(0,0,"+r+",1)",e.fillRect(0,0,wn,wn),a.globalCompositeOperation="source-over",a.drawImage(this.dropAlpha,0,0,wn,wn),a.globalCompositeOperation="source-in",a.drawImage(t,0,0,wn,wn),s}),this.clearDropletsGfx=Sa(128,128);let n=this.clearDropletsGfx.getContext("2d");n.fillStyle="#000",n.beginPath(),n.arc(64,64,64,0,Math.PI*2),n.fill()},drawDrop(t,e){if(this.dropsGfx.length>0){let n=e.x,i=e.y,r=e.r,s=e.spreadX,a=e.spreadY,o=1,l=1.5,u=Math.max(0,Math.min(1,(r-this.options.minR)/this.deltaR*.9));u*=1/((e.spreadX+e.spreadY)*.5+1),t.globalAlpha=1,t.globalCompositeOperation="source-over",u=Math.floor(u*(this.dropsGfx.length-1)),t.drawImage(this.dropsGfx[u],(n-r*o*(s+1))*this.scale,(i-r*l*(a+1))*this.scale,r*2*o*(s+1)*this.scale,r*2*l*(a+1)*this.scale)}},clearDroplets(t,e,n=30){let i=this.dropletsCtx;i.globalCompositeOperation="destination-out",i.drawImage(this.clearDropletsGfx,(t-n)*this.dropletsPixelDensity*this.scale,(e-n)*this.dropletsPixelDensity*this.scale,n*2*this.dropletsPixelDensity*this.scale,n*2*this.dropletsPixelDensity*this.scale*1.5)},clearCanvas(){this.ctx.clearRect(0,0,this.width,this.height)},createDrop(t){return this.drops.length>=this.options.maxDrops*this.areaMultiplier?null:Object.assign(Object.create(Rv),t)},addDrop(t){return this.drops.length>=this.options.maxDrops*this.areaMultiplier||t==null?!1:(this.drops.push(t),!0)},updateRain(t){let e=[];if(this.options.raining){let n=this.options.rainLimit*t*this.areaMultiplier,i=0;for(;Hd(this.options.rainChance*t*this.areaMultiplier)&&i<n;){i++;let r=Qt(this.options.minR,this.options.maxR,a=>Math.pow(a,3)),s=this.createDrop({x:Qt(this.width/this.scale),y:Qt(this.height/this.scale*this.options.spawnArea[0],this.height/this.scale*this.options.spawnArea[1]),r,momentum:1+(r-this.options.minR)*.1+Qt(2),spreadX:1.5,spreadY:1.5});s!=null&&e.push(s)}}return e},clearDrops(){this.drops.forEach(t=>{setTimeout(()=>{t.shrink=.1+Qt(.5)},Qt(1200))}),this.clearTexture()},clearTexture(){this.textureCleaningIterations=50},updateDroplets(t){this.textureCleaningIterations>0&&(this.textureCleaningIterations-=1*t,this.dropletsCtx.globalCompositeOperation="destination-out",this.dropletsCtx.fillStyle="rgba(0,0,0,"+.05*t+")",this.dropletsCtx.fillRect(0,0,this.width*this.dropletsPixelDensity,this.height*this.dropletsPixelDensity)),this.options.raining&&(this.dropletsCounter+=this.options.dropletsRate*t*this.areaMultiplier,X1(this.dropletsCounter,e=>{this.dropletsCounter--,this.drawDroplet(Qt(this.width/this.scale),Qt(this.height/this.scale),Qt(...this.options.dropletsSize,n=>n*n))})),this.ctx.drawImage(this.droplets,0,0,this.width,this.height)},updateDrops(t){let e=[];this.updateDroplets(t);let n=this.updateRain(t);e=e.concat(n),this.drops.sort((i,r)=>{let s=i.y*(this.width/this.scale)+i.x,a=r.y*(this.width/this.scale)+r.x;return s>a?1:s==a?0:-1}),this.drops.forEach(function(i,r){if(!i.killed){if(Hd((i.r-this.options.minR*this.options.dropFallMultiplier)*(.1/this.deltaR)*t)&&(i.momentum+=Qt(i.r/this.options.maxR*4)),this.options.autoShrink&&i.r<=this.options.minR&&Hd(.05*t)&&(i.shrink+=.01),i.r-=i.shrink*t,i.r<=0&&(i.killed=!0),this.options.raining&&(i.lastSpawn+=i.momentum*t*this.options.trailRate,i.lastSpawn>i.nextSpawn)){let o=this.createDrop({x:i.x+Qt(-i.r,i.r)*.1,y:i.y-i.r*.01,r:i.r*Qt(...this.options.trailScaleRange),spreadY:i.momentum*.1,parent:i});o!=null&&(e.push(o),i.r*=Math.pow(.97,t),i.lastSpawn=0,i.nextSpawn=Qt(this.options.minR,this.options.maxR)-i.momentum*2*this.options.trailRate+(this.options.maxR-i.r))}i.spreadX*=Math.pow(.4,t),i.spreadY*=Math.pow(.7,t);let s=i.momentum>0;s&&!i.killed&&(i.y+=i.momentum*this.options.globalTimeScale,i.x+=i.momentumX*this.options.globalTimeScale,i.y>this.height/this.scale+i.r&&(i.killed=!0));let a=(s||i.isNew)&&!i.killed;i.isNew=!1,a&&this.drops.slice(r+1,r+70).forEach(o=>{if(i!=o&&i.r>o.r&&i.parent!=o&&o.parent!=i&&!o.killed){let u=o.x-i.x,c=o.y-i.y;var l=Math.sqrt(u*u+c*c);if(l<(i.r+o.r)*(this.options.collisionRadius+i.momentum*this.options.collisionRadiusIncrease*t)){let d=Math.PI,f=i.r,p=o.r,_=d*(f*f),v=d*(p*p),g=Math.sqrt((_+v*.8)/d);g>this.maxR&&(g=this.maxR),i.r=g,i.momentumX+=u*.1,i.spreadX=0,i.spreadY=0,o.killed=!0,i.momentum=Math.max(o.momentum,Math.min(40,i.momentum+g*this.options.collisionBoostMultiplier+this.options.collisionBoost))}}}),i.momentum-=Math.max(1,this.options.minR*.5-i.momentum)*.1*t,i.momentum<0&&(i.momentum=0),i.momentumX*=Math.pow(.7,t),i.killed||(e.push(i),s&&this.options.dropletsRate>0&&this.clearDroplets(i.x,i.y,i.r*this.options.dropletsCleaningRadiusMultiplier),this.drawDrop(this.ctx,i))}},this),this.drops=e},destroyed:!1,destroy(){this.destroyed=!0},update(){if(this.destroyed)return;this.clearCanvas();let t=Date.now();this.lastRender==null&&(this.lastRender=t);let n=(t-this.lastRender)/(1/60*1e3);n>1.1&&(n=1.1),n*=this.options.globalTimeScale,this.lastRender=t,this.updateDrops(n),requestAnimationFrame(this.update.bind(this))}};function bD(t,e={}){let n=["webgl","experimental-webgl"],i=null;return n.some(r=>{try{i=t.getContext(r,e)}catch{}return i!=null}),i==null&&document.body.classList.add("no-webgl"),i}function CD(t,e,n){let i=Av(t,e,t.VERTEX_SHADER),r=Av(t,n,t.FRAGMENT_SHADER),s=t.createProgram();if(t.attachShader(s,i),t.attachShader(s,r),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)){var o=t.getProgramInfoLog(s);return j1("Error in program linking: "+o),t.deleteProgram(s),null}var l=t.getAttribLocation(s,"a_position"),u=t.getAttribLocation(s,"a_texCoord"),c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0);var d=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,d),t.enableVertexAttribArray(l),t.vertexAttribPointer(l,2,t.FLOAT,!1,0,0),s}function Av(t,e,n){let i=t.createShader(n);if(t.shaderSource(i,e),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){let s=t.getShaderInfoLog(i);return j1("Error compiling shader '"+i+"':"+s),t.deleteShader(i),null}return i}function PD(t,e,n){var i=t.createTexture();return $1(t,n),t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),e==null||q1(t,e),i}function LD(t,e,n,i,...r){let s=t.getUniformLocation(e,"u_"+i);t["uniform"+n](s,...r)}function $1(t,e){t.activeTexture(t["TEXTURE"+e])}function q1(t,e){t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e)}function DD(t,e,n,i,r){var s=e,a=e+i,o=n,l=n+r;t.bufferData(t.ARRAY_BUFFER,new Float32Array([s,o,a,o,s,l,s,l,a,o,a,l]),t.STATIC_DRAW)}function j1(t){console.error(t)}function K1(t,e,n,i){this.init(t,e,n,i)}K1.prototype={canvas:null,gl:null,program:null,width:0,height:0,init(t,e,n,i){this.canvas=t,this.width=t.width,this.height=t.height,this.gl=bD(t,e),this.program=this.createProgram(n,i),this.useProgram(this.program)},createProgram(t,e){return CD(this.gl,t,e)},useProgram(t){this.program=t,this.gl.useProgram(t)},createTexture(t,e){return PD(this.gl,t,e)},createUniform(t,e,...n){LD(this.gl,this.program,t,e,...n)},activeTexture(t){$1(this.gl,t)},updateTexture(t){q1(this.gl,t)},draw(){DD(this.gl,-1,-1,2,2),this.gl.drawArrays(this.gl.TRIANGLES,0,6)}};const ID=`precision mediump float;

attribute vec2 a_position;

void main() {
   gl_Position = vec4(a_position,0.0,1.0);
}
`,ND=`precision mediump float;

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
`,UD={renderShadow:!1,minRefraction:256,maxRefraction:512,brightness:1,alphaMultiply:20,alphaSubtract:5,parallaxBg:5,parallaxFg:20};function Z1(t,e,n,i,r=null,s={}){this.canvas=t,this.canvasLiquid=e,this.imageShine=r,this.imageFg=n,this.imageBg=i,this.options=Object.assign({},UD,s),this.init()}Z1.prototype={canvas:null,gl:null,canvasLiquid:null,width:0,height:0,imageShine:"",imageFg:"",imageBg:"",textures:null,programWater:null,programBlurX:null,programBlurY:null,parallaxX:0,parallaxY:0,renderShadow:!1,options:null,init(){this.width=this.canvas.width,this.height=this.canvas.height,this.gl=new K1(this.canvas,{alpha:!1},ID,ND);let t=this.gl;this.programWater=t.program,t.createUniform("2f","resolution",this.width,this.height),t.createUniform("1f","textureRatio",this.imageBg.width/this.imageBg.height),t.createUniform("1i","renderShine",this.imageShine!=null),t.createUniform("1i","renderShadow",this.options.renderShadow),t.createUniform("1f","minRefraction",this.options.minRefraction),t.createUniform("1f","refractionDelta",this.options.maxRefraction-this.options.minRefraction),t.createUniform("1f","brightness",this.options.brightness),t.createUniform("1f","alphaMultiply",this.options.alphaMultiply),t.createUniform("1f","alphaSubtract",this.options.alphaSubtract),t.createUniform("1f","parallaxBg",this.options.parallaxBg),t.createUniform("1f","parallaxFg",this.options.parallaxFg),t.createTexture(null,0),this.textures=[{name:"textureShine",img:this.imageShine==null?Sa(2,2):this.imageShine},{name:"textureFg",img:this.imageFg},{name:"textureBg",img:this.imageBg}],this.textures.forEach((e,n)=>{t.createTexture(e.img,n+1),t.createUniform("1i",e.name,n+1)}),this.draw()},destroyed:!1,destroy(){this.destroyed=!0},draw(){this.destroyed||(this.gl.useProgram(this.programWater),this.gl.createUniform("2f","parallax",this.parallaxX,this.parallaxY),this.updateTexture(),this.gl.draw(),requestAnimationFrame(this.draw.bind(this)))},updateTextures(){this.textures.forEach((t,e)=>{this.gl.activeTexture(e+1),this.gl.updateTexture(t.img)})},updateTexture(){this.gl.activeTexture(0),this.gl.updateTexture(this.canvasLiquid)},resize(){},get overlayTexture(){},set overlayTexture(t){}};function FD(t,e,n){return new Promise((i,r)=>{typeof t=="string"&&(t={name:"image"+e,src:t});let s=new Image;t.img=s,s.addEventListener("load",a=>{i(t)}),s.src=t.src})}function OD(t,e){return Promise.all(t.map((n,i)=>FD(n,i)))}function kD(t,e){return new Promise((n,i)=>{OD(t).then(r=>{let s={};r.forEach(a=>{s[a.name]={img:a.img,src:a.src}}),n(s)})})}const BD="/Velvety2/".replace(/\/$/,""),Bu=t=>`${BD}${t}`;function zD({className:t,citySrc:e=Bu("/assets/images/city-footer.jpg"),fixed:n=!1,active:i=!0,zIndex:r}){const s=G.useRef(null),a=G.useRef(null);return G.useEffect(()=>{if(!i)return;const o=s.current,l=a.current;if(!o||!l)return;let u=!0,c=null,d=null;const f=()=>n?{w:window.innerWidth,h:window.innerHeight}:{w:Math.max(1,l.clientWidth),h:Math.max(1,l.clientHeight)},p=()=>{const h=window.devicePixelRatio||1,{w:m,h:x}=f();o.width=m*h,o.height=x*h,o.style.width=`${m}px`,o.style.height=`${x}px`};(async()=>{try{const h=await kD([{name:"dropAlpha",src:Bu("/assets/rain/drop-alpha.png")},{name:"dropColor",src:Bu("/assets/rain/drop-color.png")},{name:"dropShine",src:Bu("/assets/rain/drop-shine2.png")}]);if(!u)return;const m=new Image;if(m.src=e,await m.decode(),!u)return;p(),c=new Y1(o.width,o.height,window.devicePixelRatio||1,h.dropAlpha.img,h.dropColor.img,{minR:18,maxR:42,rainChance:.35,rainLimit:6,dropletsRate:24,globalTimeScale:.5,trailRate:1,dropFallMultiplier:.25,trailScaleRange:[.2,.35],autoShrink:!0,spawnArea:[-.2,.95],collisionRadius:.45,collisionRadiusIncrease:0,collisionBoost:.35,collisionBoostMultiplier:.025}),X1(40,()=>{c==null||c.addDrop(c.createDrop({x:Qt(o.width),y:Qt(o.height),r:Qt(8,18)}))}),d=new Z1(o,c.canvas,m,m,h.dropShine.img,{renderShadow:!0,minRefraction:128,maxRefraction:512,brightness:1.04,alphaMultiply:7,alphaSubtract:3})}catch(h){console.warn("[RainEffect] init failed:",h)}})();const v=()=>p(),g=n?null:new ResizeObserver(v);return g&&g.observe(l),n&&window.addEventListener("resize",v),()=>{u=!1,g==null||g.disconnect(),n&&window.removeEventListener("resize",v),c==null||c.destroy(),d==null||d.destroy(),c=null,d=null}},[i,e,n]),i?z.jsx("div",{ref:a,className:t,style:{position:n?"fixed":"absolute",inset:0,overflow:"hidden",pointerEvents:"none",...r!=null?{zIndex:r}:{}},"aria-hidden":!0,children:z.jsx("canvas",{ref:s,style:{display:"block",width:"100%",height:"100%"}})}):null}function VD({imageSrc:t,videoSrc:e,imageAlt:n,label:i}){const r={width:"100%",height:"100%",objectFit:"cover",display:"block"};return e?z.jsx("video",{src:e,muted:!0,loop:!0,playsInline:!0,autoPlay:!0,style:r,"aria-label":n??i}):z.jsx("img",{src:t,alt:n??i,style:r})}function bv({badge:t,label:e,imageSrc:n,videoSrc:i,imageAlt:r}){return z.jsxs("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:10,pointerEvents:"auto"},children:[z.jsx("p",{style:{margin:0,fontSize:10,fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.55)",fontFamily:"SFMono-Regular, Consolas, monospace"},children:e}),z.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16 / 10",maxHeight:"100%",borderRadius:16,overflow:"hidden",background:"#111",filter:"drop-shadow(0 24px 48px rgba(0,0,0,.65))"},children:[z.jsx(VD,{imageSrc:n,videoSrc:i,imageAlt:r,label:e}),z.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,.06) 0%, rgba(0,0,0,.38) 100%)",pointerEvents:"none"}}),z.jsx("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,.58)",backdropFilter:"blur(8px)",color:"#fff",fontSize:10,letterSpacing:"0.08em",padding:"4px 10px",borderRadius:999,fontFamily:"SFMono-Regular, Consolas, monospace",textTransform:"uppercase"},children:t})]})]})}function HD({left:t,right:e}){return z.jsxs("div",{style:{position:"absolute",inset:"clamp(16px, 2.5vw, 32px)",display:"flex",alignItems:"center",gap:"clamp(12px, 2vw, 28px)",pointerEvents:"none",boxSizing:"border-box"},children:[z.jsx(bv,{...t}),z.jsx(bv,{...e})]})}const GD="/Velvety2/".replace(/\/$/,""),WD=t=>`${GD}/assets/images/${t}`,XD="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",YD="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85";function $D(){const t=G.useRef(null),[e,n]=G.useState(!1);return G.useEffect(()=>{const i=t.current;if(!i)return;const r=new IntersectionObserver(([s])=>n(s.isIntersecting),{rootMargin:"80px 0px"});return r.observe(i),()=>r.disconnect()},[]),z.jsxs("section",{ref:t,style:{position:"relative",zIndex:3,height:"100vh",background:"transparent",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},"aria-label":"Project before and after comparison",children:[z.jsx(zD,{fixed:!0,active:e,citySrc:WD("city-footer.jpg"),zIndex:2}),z.jsxs("div",{style:{position:"relative",zIndex:3,width:"clamp(400px, 96vw, 1680px)",height:"clamp(320px, 88vh, 920px)",borderRadius:28,overflow:"hidden",boxShadow:"0 0 0 9999px #000"},children:[z.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,.48) 100%)",pointerEvents:"none",zIndex:1}}),z.jsx("div",{style:{position:"absolute",inset:0,zIndex:2},children:z.jsx(HD,{left:{badge:"Before",label:"Project — Old",imageSrc:XD,imageAlt:"Project before redesign"},right:{badge:"After",label:"Project — New",imageSrc:YD,imageAlt:"Project after redesign"}})})]})]})}const qD="/Velvety2/".replace(/\/$/,""),zu=t=>`${qD}/assets/images/${t}`,dc=[{src:zu("HuagenLogo5x5.png"),alt:"Huagen"},{src:zu("ThriveLogo.png"),alt:"Thrive"},{src:zu("MajorPetsLogo.png"),alt:"Major Pets"},{src:zu("HomeLinkLogo.jpg"),alt:"HomeLink"}],Gp="Inter, ui-sans-serif, system-ui, sans-serif",rr="1px solid rgba(0,0,0,0.09)",Vu=dc.length,Xo=180,Q1=64,Gd=Xo+Q1;function Wd(t,e,n){return Math.max(e,Math.min(n,t))}function jD(){const[t,e]=G.useState(0),[n,i]=G.useState(0),[r,s]=G.useState(!1),a=G.useRef(null),o=G.useRef(0),l=G.useRef({x:0,trackX:0,pointerId:-1}),u=G.useRef(0),c=G.useRef(null),d=x=>-x*Gd,f=x=>{const S=Wd(x,0,Vu-1);o.current=S,e(S),i(0)},p=()=>{c.current&&clearTimeout(c.current)},_=()=>{p(),c.current=setTimeout(()=>{f((o.current+1)%Vu),_()},5e3)};G.useEffect(()=>(_(),p),[]);const v=x=>{x.currentTarget.setPointerCapture(x.pointerId),p(),s(!0),u.current=0,l.current={x:x.clientX,trackX:d(o.current),pointerId:x.pointerId}},g=x=>{if(!r)return;const S=x.clientX-l.current.x;u.current=Math.max(u.current,Math.abs(S));const M=d(Vu-1);i(Wd(l.current.trackX+S,M,0)-d(o.current))},h=x=>{if(r){s(!1);try{x.currentTarget.releasePointerCapture(x.pointerId)}catch{}if(u.current<5){const S=x.currentTarget.getBoundingClientRect(),M=x.clientX-S.left,T=d(o.current)+n,w=S.width/2;let y=0,R=Number.POSITIVE_INFINITY;for(let P=0;P<Vu;P++){const L=w+P*Gd+T,F=Math.abs(M-L);F<R&&(R=F,y=P)}R<=Xo*.5?f(y):f(x.clientX<S.left+S.width/2?o.current-1:o.current+1)}else{const S=d(o.current)+n;f(Math.round(-S/Gd))}_()}},m=d(t)+n;return z.jsxs("div",{style:{padding:"24px 0 32px"},children:[z.jsx("div",{ref:a,onPointerDown:v,onPointerMove:g,onPointerUp:h,onPointerCancel:h,style:{position:"relative",overflow:"hidden",height:110,cursor:r?"grabbing":"grab",touchAction:"none",userSelect:"none"},children:z.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:Q1,paddingLeft:`calc(50% - ${Xo/2}px)`,paddingRight:`calc(50% - ${Xo/2}px)`,transform:`translateX(${m}px)`,transition:r?"none":"transform 0.45s cubic-bezier(0.22,1,0.36,1)",willChange:"transform",pointerEvents:"auto"},children:dc.map((x,S)=>{const M=Math.abs(S-t),T=Wd(M,0,2)/2;return z.jsx("button",{type:"button",onClick:()=>{p(),f(S),_()},style:{flexShrink:0,width:Xo,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none",padding:0,cursor:"pointer",transform:`scale(${1-T*.2})`,opacity:1-T*.55,filter:`grayscale(${T*55}%)`,transition:r?"none":"transform 0.4s, opacity 0.4s, filter 0.4s"},children:z.jsx("img",{src:x.src,alt:x.alt,draggable:!1,style:{maxHeight:60,maxWidth:"90%",objectFit:"contain",display:"block"}})},x.alt)})})}),z.jsxs("div",{style:{textAlign:"center",marginTop:20},children:[z.jsx("p",{style:{margin:"0 0 14px",fontSize:13,fontWeight:500,letterSpacing:"0.06em",color:"#374151",fontFamily:Gp},children:dc[t].alt}),z.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8},children:dc.map((x,S)=>z.jsx("button",{type:"button","aria-label":`Show ${x.alt}`,onClick:()=>{p(),f(S),_()},style:{width:S===t?22:7,height:7,borderRadius:4,border:"none",padding:0,cursor:"pointer",background:S===t?"#08090b":"#d1d5db",transition:"width 0.25s, background 0.25s"}},x.alt))})]})]})}const KD=[{num:"01",title:"Design",desc:"Most design looks like most other design. Safe and predictable. We ask uncomfortable questions that dig into the real problems — and build identities that earn attention.",items:["Web Design","UX Design","Branding","Graphic Design"]},{num:"02",title:"Development",desc:"The right technology depends on the problem. We build fast, scalable websites and Shopify stores — all here in Seattle, by the people who manage every aspect of your project.",items:["Web Development","Shopify Stores","UI Systems","Web Support"]},{num:"03",title:"Strategy",desc:"Creative without data is guesswork. Data without creativity is bland. We'd rather do the harder thing and build campaigns that look stunning and perform. That's where the results are.",items:["Brand Strategy","Social Media","SEO","GEO"]}];function ZD(){return z.jsxs("section",{style:{position:"relative",zIndex:3,minHeight:"100vh",background:"#f5f5f3",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:Gp,color:"#08090b"},children:[z.jsxs("div",{style:{flex:"1 0 0",padding:"clamp(48px, 6vw, 80px) clamp(24px, 4.5vw, 72px) 0",display:"flex",flexDirection:"column"},children:[z.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderTop:rr,borderLeft:rr},children:[z.jsxs("div",{style:{borderRight:rr,borderBottom:rr,padding:"clamp(24px,3vw,40px)"},children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:18},children:[z.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#08090b"}}),z.jsx("p",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.26em",textTransform:"uppercase",color:"#9ca3af",margin:0},children:"Studio"})]}),z.jsx("h2",{style:{margin:0,fontSize:"clamp(24px,3vw,44px)",fontWeight:500,lineHeight:1.12,letterSpacing:"-0.04em"},children:"We are a Seattle studio with a shared obsession for brands that matter."})]}),z.jsxs("div",{style:{borderRight:rr,borderBottom:rr,padding:"clamp(24px,3vw,40px)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[z.jsx("p",{style:{margin:"0 0 32px",fontSize:"clamp(13px,1.05vw,15px)",lineHeight:1.74,color:"#4b5563",maxWidth:440},children:"The team is a mix — creative, technical, practical, opinionated. Some of us make noise, some make spreadsheets."}),z.jsx("a",{href:"#",style:{fontSize:11,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:"#08090b",textDecoration:"none"},children:"Our Work ↗"})]})]}),z.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",borderLeft:rr,flex:"1 0 0"},children:KD.map(n=>z.jsxs("div",{style:{borderRight:rr,borderBottom:rr,padding:"clamp(22px,2.5vw,36px)"},children:[z.jsx("span",{style:{display:"block",fontSize:10,fontWeight:600,letterSpacing:"0.22em",color:"#c8c8c8",marginBottom:10},children:n.num}),z.jsx("h3",{style:{margin:"0 0 12px",fontSize:"clamp(15px,1.4vw,19px)",fontWeight:500},children:n.title}),z.jsx("p",{style:{margin:"0 0 18px",fontSize:"clamp(12px,0.88vw,13px)",lineHeight:1.7,color:"#6b7280"},children:n.desc}),z.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:7},children:n.items.map(i=>z.jsxs("li",{style:{fontSize:"clamp(12px,0.92vw,14px)",color:"#374151",display:"flex",alignItems:"center",gap:8},children:[z.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#d1d5db"}}),i]},i))})]},n.num))})]}),z.jsxs("div",{children:[z.jsx("p",{style:{textAlign:"center",fontSize:10,fontWeight:600,letterSpacing:"0.30em",textTransform:"uppercase",color:"#bbb",margin:"24px 0 0",fontFamily:Gp},children:"Trusted by ambitious brands"}),z.jsx(jD,{})]})]})}const QD="/Velvety2/".replace(/\/$/,""),JD=t=>`${QD}/assets/images/${t}`,eI=[{label:"Contact Us",to:"/contact"},{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Projects",to:"/projects"}],tI=6,nI={muted:"rgba(255,253,245,0.70)",body:"rgba(255,253,245,0.85)",faint:"rgba(255,253,245,0.60)",email:"#fff",border:"rgba(255,253,245,0.20)",inputBg:"rgba(255,255,255,0.05)",input:"#fff",underline:"rgba(255,253,245,0.85)"},iI={muted:"rgba(8,9,11,0.68)",body:"rgba(8,9,11,0.85)",faint:"rgba(8,9,11,0.60)",email:"#08090b",border:"rgba(8,9,11,0.18)",inputBg:"rgba(8,9,11,0.05)",input:"#08090b",underline:"rgba(8,9,11,0.85)"},rI=()=>z.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"}),z.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),sI=()=>z.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[z.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),z.jsx("path",{d:"M22 7l-10 7L2 7"})]}),aI=()=>z.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:z.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"})});function Cv({palette:t,hovered:e,setHovered:n,interactive:i=!1}){return z.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"64px 40px 40px"},children:[z.jsx("img",{src:JD("logoSmall2.png"),alt:"VelvetY",style:{height:48,width:"auto",display:"block"}}),z.jsxs("div",{style:{marginTop:48,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48},children:[z.jsxs("div",{children:[z.jsx("p",{style:{fontSize:12,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:t.muted,margin:0},children:"Let’s start working together"}),z.jsx("a",{href:"mailto:info@velvetydesign.com",style:{display:"inline-block",marginTop:16,fontSize:"clamp(22px, 3vw, 34px)",fontWeight:800,letterSpacing:"-0.04em",color:t.email,textDecoration:"none",lineHeight:1.1,pointerEvents:i?"auto":"none"},children:"info@velvetydesign.com"}),z.jsxs("ul",{style:{marginTop:32,listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:12,fontSize:13,color:t.body},children:[z.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[z.jsx(rI,{}),z.jsx("span",{children:"2203B 22nd AVE S, Seattle, WA 98144"})]}),z.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[z.jsx(sI,{}),z.jsx("a",{href:"mailto:info@velvetydesign.com",style:{color:"inherit",textDecoration:"none",pointerEvents:i?"auto":"none"},children:"info@velvetydesign.com"})]}),z.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[z.jsx(aI,{}),z.jsx("span",{children:"(206) 601-5969"})]})]})]}),z.jsxs("div",{children:[z.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:t.muted,margin:0},children:"Company"}),z.jsx("ul",{style:{marginTop:20,listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:12,fontSize:14,color:t.body},children:eI.map(r=>z.jsx("li",{children:z.jsxs(Ym,{to:r.to,style:{display:"inline-flex",alignItems:"center",gap:8,color:t.body,textDecoration:"none",pointerEvents:i?"auto":"none"},onMouseEnter:()=>n==null?void 0:n(r.label),onMouseLeave:()=>n==null?void 0:n(null),children:[r.label,z.jsx("span",{style:{display:"block",height:1,background:t.underline,width:e===r.label?20:0,transition:"width 0.3s"}})]})},r.label))})]}),z.jsxs("div",{children:[z.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:t.muted,margin:0},children:"Subscribe"}),z.jsxs("form",{onSubmit:r=>r.preventDefault(),style:{marginTop:20,display:"flex",alignItems:"center",gap:8,borderRadius:999,border:`1px solid ${t.border}`,background:t.inputBg,padding:"4px 4px 4px 16px",pointerEvents:i?"auto":"none"},children:[z.jsx("input",{type:"email",placeholder:"Enter your email","aria-label":"Email",style:{flex:1,background:"transparent",border:"none",outline:"none",fontSize:13,color:t.input,minWidth:0}}),z.jsx("button",{type:"submit",style:{flexShrink:0,background:t.email,color:t.email==="#fff"?"#0a0a0a":"#fff",border:"none",borderRadius:999,padding:"8px 16px",fontSize:12,fontWeight:600,cursor:"pointer"},children:"Submit"})]})]})]}),z.jsx("p",{style:{marginTop:56,paddingTop:24,textAlign:"center",fontSize:12,color:t.faint},children:"© Copyright 2026 by VELVETY LLC"})]})}function oI(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(!i)continue;const r=i.getBoundingClientRect();if(t>=r.left&&t<r.right)return n}return-1}function lI(){const[t,e]=G.useState(null),[n,i]=G.useState(null),[r,s]=G.useState("inset(0 100% 0 0)"),a=G.useRef(null),o=G.useRef([]),l=G.useCallback(d=>{if(d===null){s("inset(0 100% 0 0)");return}const f=a.current,p=o.current[d];if(!f||!p)return;const _=f.getBoundingClientRect(),v=p.getBoundingClientRect(),g=Math.max(0,v.left-_.left),h=Math.max(0,_.right-v.right);s(`inset(0 ${h}px 0 ${g}px)`)},[]),u=d=>{const f=oI(d.clientX,o.current);if(f===n)return;const p=f>=0?f:null;i(p),l(p)},c=()=>{i(null),l(null)};return z.jsxs("footer",{ref:a,onMouseMove:u,onMouseLeave:c,style:{position:"relative",overflow:"hidden",zIndex:3,minHeight:520,background:"#f5f5f3",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},children:[z.jsx("div",{className:"footer-piano-white","aria-hidden":!0}),z.jsx("div",{className:"footer-piano-curtain","aria-hidden":!0,children:Array.from({length:tI},(d,f)=>z.jsx("div",{ref:p=>{o.current[f]=p},className:`footer-piano-key fk${f+1}${n===f?" is-lifted":""}`},f))}),z.jsx("div",{className:"footer-content-layer footer-content-layer--interactive",style:{zIndex:2},children:z.jsx(Cv,{palette:nI,hovered:t,setHovered:e,interactive:!0})}),z.jsx("div",{className:"footer-content-layer",style:{zIndex:3,clipPath:r,transition:"clip-path 0.08s linear"},"aria-hidden":!0,children:z.jsx(Cv,{palette:iI,hovered:t})})]})}function uI(){return z.jsxs("div",{style:{background:"#000"},children:[z.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none"},children:z.jsx(Y3,{rotation:285,colors:["#e83d0d","#1e52bf","#7cff67"],speed:.18,frequency:1.1,warpStrength:1.2,noise:.08,iterations:3,intensity:1.2,bandWidth:5,transparent:!1,mouseInfluence:.6,parallax:.3})}),z.jsx(Q3,{}),z.jsx(J3,{}),z.jsx(Ou,{topColor:"#f5f5f3",bottomColor:"#000000"}),z.jsx(TD,{}),z.jsx(Ou,{topColor:"#000000",bottomColor:"#f5f5f3"}),z.jsx(RD,{}),z.jsx(Ou,{topColor:"#f5f5f3",bottomColor:"#000000"}),z.jsx($D,{}),z.jsx(Ou,{topColor:"#000000",bottomColor:"#f5f5f3"}),z.jsx(ZD,{}),z.jsx(lI,{})]})}function cI(){return z.jsx(LT,{children:z.jsx(lS,{path:"/",element:z.jsx(uI,{})})})}Hy(document.getElementById("root")).render(z.jsx(G.StrictMode,{children:z.jsx(tR,{basename:"/Velvety2/".replace(/\/$/,""),children:z.jsx(cI,{})})}));
