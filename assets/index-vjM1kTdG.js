var X1=Object.defineProperty;var Y1=(n,e,t)=>e in n?X1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Pr=(n,e,t)=>Y1(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Ev={exports:{}},jc={},wv={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=Symbol.for("react.element"),$1=Symbol.for("react.portal"),q1=Symbol.for("react.fragment"),K1=Symbol.for("react.strict_mode"),j1=Symbol.for("react.profiler"),Z1=Symbol.for("react.provider"),Q1=Symbol.for("react.context"),J1=Symbol.for("react.forward_ref"),eM=Symbol.for("react.suspense"),tM=Symbol.for("react.memo"),nM=Symbol.for("react.lazy"),k0=Symbol.iterator;function iM(n){return n===null||typeof n!="object"?null:(n=k0&&n[k0]||n["@@iterator"],typeof n=="function"?n:null)}var Tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rv=Object.assign,Av={};function uo(n,e,t){this.props=n,this.context=e,this.refs=Av,this.updater=t||Tv}uo.prototype.isReactComponent={};uo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};uo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Cv(){}Cv.prototype=uo.prototype;function Hp(n,e,t){this.props=n,this.context=e,this.refs=Av,this.updater=t||Tv}var Gp=Hp.prototype=new Cv;Gp.constructor=Hp;Rv(Gp,uo.prototype);Gp.isPureReactComponent=!0;var B0=Array.isArray,bv=Object.prototype.hasOwnProperty,Wp={current:null},Pv={key:!0,ref:!0,__self:!0,__source:!0};function Lv(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)bv.call(e,i)&&!Pv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fl,type:n,key:s,ref:a,props:r,_owner:Wp.current}}function rM(n,e){return{$$typeof:Fl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Xp(n){return typeof n=="object"&&n!==null&&n.$$typeof===Fl}function sM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var z0=/\/+/g;function Tf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sM(""+n.key):e.toString(36)}function Vu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Fl:case $1:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Tf(a,0):i,B0(r)?(t="",n!=null&&(t=n.replace(z0,"$&/")+"/"),Vu(r,e,t,"",function(u){return u})):r!=null&&(Xp(r)&&(r=rM(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(z0,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",B0(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Tf(s,o);a+=Vu(s,e,t,l,r)}else if(l=iM(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Tf(s,o++),a+=Vu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Zl(n,e,t){if(n==null)return n;var i=[],r=0;return Vu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function aM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var yn={current:null},Hu={transition:null},oM={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Hu,ReactCurrentOwner:Wp};function Dv(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Zl,forEach:function(n,e,t){Zl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Zl(n,function(){e++}),e},toArray:function(n){return Zl(n,function(e){return e})||[]},only:function(n){if(!Xp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=uo;Xe.Fragment=q1;Xe.Profiler=j1;Xe.PureComponent=Hp;Xe.StrictMode=K1;Xe.Suspense=eM;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oM;Xe.act=Dv;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Rv({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)bv.call(e,l)&&!Pv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Fl,type:n.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(n){return n={$$typeof:Q1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Z1,_context:n},n.Consumer=n};Xe.createElement=Lv;Xe.createFactory=function(n){var e=Lv.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:J1,render:n}};Xe.isValidElement=Xp;Xe.lazy=function(n){return{$$typeof:nM,_payload:{_status:-1,_result:n},_init:aM}};Xe.memo=function(n,e){return{$$typeof:tM,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=Hu.transition;Hu.transition={};try{n()}finally{Hu.transition=e}};Xe.unstable_act=Dv;Xe.useCallback=function(n,e){return yn.current.useCallback(n,e)};Xe.useContext=function(n){return yn.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return yn.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return yn.current.useEffect(n,e)};Xe.useId=function(){return yn.current.useId()};Xe.useImperativeHandle=function(n,e,t){return yn.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return yn.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return yn.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return yn.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return yn.current.useReducer(n,e,t)};Xe.useRef=function(n){return yn.current.useRef(n)};Xe.useState=function(n){return yn.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return yn.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return yn.current.useTransition()};Xe.version="18.3.1";wv.exports=Xe;var Y=wv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lM=Y,uM=Symbol.for("react.element"),cM=Symbol.for("react.fragment"),fM=Object.prototype.hasOwnProperty,dM=lM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hM={key:!0,ref:!0,__self:!0,__source:!0};function Iv(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)fM.call(e,i)&&!hM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:uM,type:n,key:s,ref:a,props:r,_owner:dM.current}}jc.Fragment=cM;jc.jsx=Iv;jc.jsxs=Iv;Ev.exports=jc;var G=Ev.exports,Nv={exports:{}},jn={},Uv={exports:{}},Fv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,$){var ee=U.length;U.push($);e:for(;0<ee;){var ne=ee-1>>>1,se=U[ne];if(0<r(se,$))U[ne]=$,U[ee]=se,ee=ne;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var $=U[0],ee=U.pop();if(ee!==$){U[0]=ee;e:for(var ne=0,se=U.length,ke=se>>>1;ne<ke;){var be=2*(ne+1)-1,Ue=U[be],te=be+1,me=U[te];if(0>r(Ue,ee))te<se&&0>r(me,Ue)?(U[ne]=me,U[te]=ee,ne=te):(U[ne]=Ue,U[be]=ee,ne=be);else if(te<se&&0>r(me,ee))U[ne]=me,U[te]=ee,ne=te;else break e}}return $}function r(U,$){var ee=U.sortIndex-$.sortIndex;return ee!==0?ee:U.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=U)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function S(U){if(v=!1,x(U),!_)if(t(l)!==null)_=!0,X(M);else{var $=t(u);$!==null&&k(S,$.startTime-U)}}function M(U,$){_=!1,v&&(v=!1,h(y),y=-1),p=!0;var ee=f;try{for(x($),d=t(l);d!==null&&(!(d.expirationTime>$)||U&&!L());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var se=ne(d.expirationTime<=$);$=n.unstable_now(),typeof se=="function"?d.callback=se:d===t(l)&&i(l),x($)}else i(l);d=t(l)}if(d!==null)var ke=!0;else{var be=t(u);be!==null&&k(S,be.startTime-$),ke=!1}return ke}finally{d=null,f=ee,p=!1}}var T=!1,w=null,y=-1,R=5,P=-1;function L(){return!(n.unstable_now()-P<R)}function N(){if(w!==null){var U=n.unstable_now();P=U;var $=!0;try{$=w(!0,U)}finally{$?H():(T=!1,w=null)}}else T=!1}var H;if(typeof m=="function")H=function(){m(N)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,D=z.port2;z.port1.onmessage=N,H=function(){D.postMessage(null)}}else H=function(){g(N,0)};function X(U){w=U,T||(T=!0,H())}function k(U,$){y=g(function(){U(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,X(M))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var ee=f;f=$;try{return U()}finally{f=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=f;f=U;try{return $()}finally{f=ee}},n.unstable_scheduleCallback=function(U,$,ee){var ne=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ne+ee:ne):ee=ne,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ee+se,U={id:c++,callback:$,priorityLevel:U,startTime:ee,expirationTime:se,sortIndex:-1},ee>ne?(U.sortIndex=ee,e(u,U),t(l)===null&&U===t(u)&&(v?(h(y),y=-1):v=!0,k(S,ee-ne))):(U.sortIndex=se,e(l,U),_||p||(_=!0,X(M))),U},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(U){var $=f;return function(){var ee=f;f=$;try{return U.apply(this,arguments)}finally{f=ee}}}})(Fv);Uv.exports=Fv;var pM=Uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mM=Y,$n=pM;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ov=new Set,al={};function js(n,e){$a(n,e),$a(n+"Capture",e)}function $a(n,e){for(al[n]=e,n=0;n<e.length;n++)Ov.add(e[n])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,gM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V0={},H0={};function _M(n){return Gd.call(H0,n)?!0:Gd.call(V0,n)?!1:gM.test(n)?H0[n]=!0:(V0[n]=!0,!1)}function vM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function xM(n,e,t,i){if(e===null||typeof e>"u"||vM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){nn[n]=new Sn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];nn[e]=new Sn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){nn[n]=new Sn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){nn[n]=new Sn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){nn[n]=new Sn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){nn[n]=new Sn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){nn[n]=new Sn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){nn[n]=new Sn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){nn[n]=new Sn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Yp=/[\-:]([a-z])/g;function $p(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Yp,$p);nn[e]=new Sn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Yp,$p);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Yp,$p);nn[e]=new Sn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){nn[n]=new Sn(n,1,!1,n.toLowerCase(),null,!0,!0)});function qp(n,e,t,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xM(e,t,r,i)&&(t=null),i||r===null?_M(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Er=mM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),ya=Symbol.for("react.portal"),Sa=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),zv=Symbol.for("react.offscreen"),G0=Symbol.iterator;function xo(n){return n===null||typeof n!="object"?null:(n=G0&&n[G0]||n["@@iterator"],typeof n=="function"?n:null)}var Ct=Object.assign,Rf;function Fo(n){if(Rf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Rf=e&&e[1]||""}return`
`+Rf+n}var Af=!1;function Cf(n,e){if(!n||Af)return"";Af=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Af=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Fo(n):""}function yM(n){switch(n.tag){case 5:return Fo(n.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return n=Cf(n.type,!1),n;case 11:return n=Cf(n.type.render,!1),n;case 1:return n=Cf(n.type,!0),n;default:return""}}function $d(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Sa:return"Fragment";case ya:return"Portal";case Wd:return"Profiler";case Kp:return"StrictMode";case Xd:return"Suspense";case Yd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Bv:return(n.displayName||"Context")+".Consumer";case kv:return(n._context.displayName||"Context")+".Provider";case jp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Zp:return e=n.displayName||null,e!==null?e:$d(n.type)||"Memo";case kr:e=n._payload,n=n._init;try{return $d(n(e))}catch{}}return null}function SM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(e);case 8:return e===Kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ss(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Vv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MM(n){var e=Vv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Jl(n){n._valueTracker||(n._valueTracker=MM(n))}function Hv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Vv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function fc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function qd(n,e){var t=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function W0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ss(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gv(n,e){e=e.checked,e!=null&&qp(n,"checked",e,!1)}function Kd(n,e){Gv(n,e);var t=ss(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?jd(n,e.type,t):e.hasOwnProperty("defaultValue")&&jd(n,e.type,ss(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function X0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function jd(n,e,t){(e!=="number"||fc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Oo=Array.isArray;function Ua(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ss(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Zd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(Oo(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ss(t)}}function Wv(n,e){var t=ss(e.value),i=ss(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function $0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Xv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Xv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var eu,Yv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ol(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EM=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(n){EM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Xo[e]=Xo[n]})});function $v(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Xo.hasOwnProperty(n)&&Xo[n]?(""+e).trim():e+"px"}function qv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=$v(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var wM=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jd(n,e){if(e){if(wM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function eh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function Qp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nh=null,Fa=null,Oa=null;function q0(n){if(n=Bl(n)){if(typeof nh!="function")throw Error(de(280));var e=n.stateNode;e&&(e=tf(e),nh(n.stateNode,n.type,e))}}function Kv(n){Fa?Oa?Oa.push(n):Oa=[n]:Fa=n}function jv(){if(Fa){var n=Fa,e=Oa;if(Oa=Fa=null,q0(n),e)for(n=0;n<e.length;n++)q0(e[n])}}function Zv(n,e){return n(e)}function Qv(){}var bf=!1;function Jv(n,e,t){if(bf)return n(e,t);bf=!0;try{return Zv(n,e,t)}finally{bf=!1,(Fa!==null||Oa!==null)&&(Qv(),jv())}}function ll(n,e){var t=n.stateNode;if(t===null)return null;var i=tf(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var ih=!1;if(pr)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){ih=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{ih=!1}function TM(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Yo=!1,dc=null,hc=!1,rh=null,RM={onError:function(n){Yo=!0,dc=n}};function AM(n,e,t,i,r,s,a,o,l){Yo=!1,dc=null,TM.apply(RM,arguments)}function CM(n,e,t,i,r,s,a,o,l){if(AM.apply(this,arguments),Yo){if(Yo){var u=dc;Yo=!1,dc=null}else throw Error(de(198));hc||(hc=!0,rh=u)}}function Zs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ex(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function K0(n){if(Zs(n)!==n)throw Error(de(188))}function bM(n){var e=n.alternate;if(!e){if(e=Zs(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return K0(r),n;if(s===i)return K0(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function tx(n){return n=bM(n),n!==null?nx(n):null}function nx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=nx(n);if(e!==null)return e;n=n.sibling}return null}var ix=$n.unstable_scheduleCallback,j0=$n.unstable_cancelCallback,PM=$n.unstable_shouldYield,LM=$n.unstable_requestPaint,kt=$n.unstable_now,DM=$n.unstable_getCurrentPriorityLevel,Jp=$n.unstable_ImmediatePriority,rx=$n.unstable_UserBlockingPriority,pc=$n.unstable_NormalPriority,IM=$n.unstable_LowPriority,sx=$n.unstable_IdlePriority,Zc=null,Gi=null;function NM(n){if(Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(Zc,n,void 0,(n.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:OM,UM=Math.log,FM=Math.LN2;function OM(n){return n>>>=0,n===0?32:31-(UM(n)/FM|0)|0}var tu=64,nu=4194304;function ko(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=ko(o):(s&=a,s!==0&&(i=ko(s)))}else a=t&~r,a!==0?i=ko(a):s!==0&&(i=ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-wi(e),r=1<<t,i|=n[t],e&=~r;return i}function kM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-wi(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=kM(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function sh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ax(){var n=tu;return tu<<=1,!(tu&4194240)&&(tu=64),n}function Pf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ol(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-wi(e),n[e]=t}function zM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-wi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function em(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-wi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var at=0;function ox(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var lx,tm,ux,cx,fx,ah=!1,iu=[],Kr=null,jr=null,Zr=null,ul=new Map,cl=new Map,zr=[],VM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Z0(n,e){switch(n){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function So(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bl(e),e!==null&&tm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function HM(n,e,t,i,r){switch(e){case"focusin":return Kr=So(Kr,n,e,t,i,r),!0;case"dragenter":return jr=So(jr,n,e,t,i,r),!0;case"mouseover":return Zr=So(Zr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ul.set(s,So(ul.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,cl.set(s,So(cl.get(s)||null,n,e,t,i,r)),!0}return!1}function dx(n){var e=Ps(n.target);if(e!==null){var t=Zs(e);if(t!==null){if(e=t.tag,e===13){if(e=ex(t),e!==null){n.blockedOn=e,fx(n.priority,function(){ux(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=oh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);th=i,t.target.dispatchEvent(i),th=null}else return e=Bl(t),e!==null&&tm(e),n.blockedOn=t,!1;e.shift()}return!0}function Q0(n,e,t){Gu(n)&&t.delete(e)}function GM(){ah=!1,Kr!==null&&Gu(Kr)&&(Kr=null),jr!==null&&Gu(jr)&&(jr=null),Zr!==null&&Gu(Zr)&&(Zr=null),ul.forEach(Q0),cl.forEach(Q0)}function Mo(n,e){n.blockedOn===e&&(n.blockedOn=null,ah||(ah=!0,$n.unstable_scheduleCallback($n.unstable_NormalPriority,GM)))}function fl(n){function e(r){return Mo(r,n)}if(0<iu.length){Mo(iu[0],n);for(var t=1;t<iu.length;t++){var i=iu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Kr!==null&&Mo(Kr,n),jr!==null&&Mo(jr,n),Zr!==null&&Mo(Zr,n),ul.forEach(e),cl.forEach(e),t=0;t<zr.length;t++)i=zr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<zr.length&&(t=zr[0],t.blockedOn===null);)dx(t),t.blockedOn===null&&zr.shift()}var ka=Er.ReactCurrentBatchConfig,gc=!0;function WM(n,e,t,i){var r=at,s=ka.transition;ka.transition=null;try{at=1,nm(n,e,t,i)}finally{at=r,ka.transition=s}}function XM(n,e,t,i){var r=at,s=ka.transition;ka.transition=null;try{at=4,nm(n,e,t,i)}finally{at=r,ka.transition=s}}function nm(n,e,t,i){if(gc){var r=oh(n,e,t,i);if(r===null)zf(n,e,i,_c,t),Z0(n,i);else if(HM(r,n,e,t,i))i.stopPropagation();else if(Z0(n,i),e&4&&-1<VM.indexOf(n)){for(;r!==null;){var s=Bl(r);if(s!==null&&lx(s),s=oh(n,e,t,i),s===null&&zf(n,e,i,_c,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else zf(n,e,i,null,t)}}var _c=null;function oh(n,e,t,i){if(_c=null,n=Qp(i),n=Ps(n),n!==null)if(e=Zs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ex(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return _c=n,null}function hx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DM()){case Jp:return 1;case rx:return 4;case pc:case IM:return 16;case sx:return 536870912;default:return 16}default:return 16}}var Gr=null,im=null,Wu=null;function px(){if(Wu)return Wu;var n,e=im,t=e.length,i,r="value"in Gr?Gr.value:Gr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Wu=r.slice(n,1<i?1-i:void 0)}function Xu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ru(){return!0}function J0(){return!1}function Zn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ru:J0,this.isPropagationStopped=J0,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rm=Zn(co),kl=Ct({},co,{view:0,detail:0}),YM=Zn(kl),Lf,Df,Eo,Qc=Ct({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Eo&&(Eo&&n.type==="mousemove"?(Lf=n.screenX-Eo.screenX,Df=n.screenY-Eo.screenY):Df=Lf=0,Eo=n),Lf)},movementY:function(n){return"movementY"in n?n.movementY:Df}}),eg=Zn(Qc),$M=Ct({},Qc,{dataTransfer:0}),qM=Zn($M),KM=Ct({},kl,{relatedTarget:0}),If=Zn(KM),jM=Ct({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),ZM=Zn(jM),QM=Ct({},co,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),JM=Zn(QM),eE=Ct({},co,{data:0}),tg=Zn(eE),tE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=iE[n])?!!e[n]:!1}function sm(){return rE}var sE=Ct({},kl,{key:function(n){if(n.key){var e=tE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Xu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sm,charCode:function(n){return n.type==="keypress"?Xu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),aE=Zn(sE),oE=Ct({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ng=Zn(oE),lE=Ct({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sm}),uE=Zn(lE),cE=Ct({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),fE=Zn(cE),dE=Ct({},Qc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),hE=Zn(dE),pE=[9,13,27,32],am=pr&&"CompositionEvent"in window,$o=null;pr&&"documentMode"in document&&($o=document.documentMode);var mE=pr&&"TextEvent"in window&&!$o,mx=pr&&(!am||$o&&8<$o&&11>=$o),ig=" ",rg=!1;function gx(n,e){switch(n){case"keyup":return pE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _x(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ma=!1;function gE(n,e){switch(n){case"compositionend":return _x(e);case"keypress":return e.which!==32?null:(rg=!0,ig);case"textInput":return n=e.data,n===ig&&rg?null:n;default:return null}}function _E(n,e){if(Ma)return n==="compositionend"||!am&&gx(n,e)?(n=px(),Wu=im=Gr=null,Ma=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mx&&e.locale!=="ko"?null:e.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!vE[n.type]:e==="textarea"}function vx(n,e,t,i){Kv(i),e=vc(e,"onChange"),0<e.length&&(t=new rm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var qo=null,dl=null;function xE(n){bx(n,0)}function Jc(n){var e=Ta(n);if(Hv(e))return n}function yE(n,e){if(n==="change")return e}var xx=!1;if(pr){var Nf;if(pr){var Uf="oninput"in document;if(!Uf){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Uf=typeof ag.oninput=="function"}Nf=Uf}else Nf=!1;xx=Nf&&(!document.documentMode||9<document.documentMode)}function og(){qo&&(qo.detachEvent("onpropertychange",yx),dl=qo=null)}function yx(n){if(n.propertyName==="value"&&Jc(dl)){var e=[];vx(e,dl,n,Qp(n)),Jv(xE,e)}}function SE(n,e,t){n==="focusin"?(og(),qo=e,dl=t,qo.attachEvent("onpropertychange",yx)):n==="focusout"&&og()}function ME(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Jc(dl)}function EE(n,e){if(n==="click")return Jc(e)}function wE(n,e){if(n==="input"||n==="change")return Jc(e)}function TE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ai=typeof Object.is=="function"?Object.is:TE;function hl(n,e){if(Ai(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Gd.call(e,r)||!Ai(n[r],e[r]))return!1}return!0}function lg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ug(n,e){var t=lg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=lg(t)}}function Sx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Sx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Mx(){for(var n=window,e=fc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=fc(n.document)}return e}function om(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function RE(n){var e=Mx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Sx(t.ownerDocument.documentElement,t)){if(i!==null&&om(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=ug(t,s);var a=ug(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var AE=pr&&"documentMode"in document&&11>=document.documentMode,Ea=null,lh=null,Ko=null,uh=!1;function cg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;uh||Ea==null||Ea!==fc(i)||(i=Ea,"selectionStart"in i&&om(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&hl(Ko,i)||(Ko=i,i=vc(lh,"onSelect"),0<i.length&&(e=new rm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ea)))}function su(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var wa={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},Ff={},Ex={};pr&&(Ex=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function ef(n){if(Ff[n])return Ff[n];if(!wa[n])return n;var e=wa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ex)return Ff[n]=e[t];return n}var wx=ef("animationend"),Tx=ef("animationiteration"),Rx=ef("animationstart"),Ax=ef("transitionend"),Cx=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(n,e){Cx.set(n,e),js(e,[n])}for(var Of=0;Of<fg.length;Of++){var kf=fg[Of],CE=kf.toLowerCase(),bE=kf[0].toUpperCase()+kf.slice(1);fs(CE,"on"+bE)}fs(wx,"onAnimationEnd");fs(Tx,"onAnimationIteration");fs(Rx,"onAnimationStart");fs("dblclick","onDoubleClick");fs("focusin","onFocus");fs("focusout","onBlur");fs(Ax,"onTransitionEnd");$a("onMouseEnter",["mouseout","mouseover"]);$a("onMouseLeave",["mouseout","mouseover"]);$a("onPointerEnter",["pointerout","pointerover"]);$a("onPointerLeave",["pointerout","pointerover"]);js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));js("onBeforeInput",["compositionend","keypress","textInput","paste"]);js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function dg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,CM(i,e,void 0,n),n.currentTarget=null}function bx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;dg(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;dg(r,o,u),s=l}}}if(hc)throw n=rh,hc=!1,rh=null,n}function gt(n,e){var t=e[ph];t===void 0&&(t=e[ph]=new Set);var i=n+"__bubble";t.has(i)||(Px(e,n,2,!1),t.add(i))}function Bf(n,e,t){var i=0;e&&(i|=4),Px(t,n,i,e)}var au="_reactListening"+Math.random().toString(36).slice(2);function pl(n){if(!n[au]){n[au]=!0,Ov.forEach(function(t){t!=="selectionchange"&&(PE.has(t)||Bf(t,!1,n),Bf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[au]||(e[au]=!0,Bf("selectionchange",!1,e))}}function Px(n,e,t,i){switch(hx(e)){case 1:var r=WM;break;case 4:r=XM;break;default:r=nm}t=r.bind(null,e,t,n),r=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function zf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ps(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Jv(function(){var u=s,c=Qp(t),d=[];e:{var f=Cx.get(n);if(f!==void 0){var p=rm,_=n;switch(n){case"keypress":if(Xu(t)===0)break e;case"keydown":case"keyup":p=aE;break;case"focusin":_="focus",p=If;break;case"focusout":_="blur",p=If;break;case"beforeblur":case"afterblur":p=If;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=eg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uE;break;case wx:case Tx:case Rx:p=ZM;break;case Ax:p=fE;break;case"scroll":p=YM;break;case"wheel":p=hE;break;case"copy":case"cut":case"paste":p=JM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ng}var v=(e&4)!==0,g=!v&&n==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ll(m,h),S!=null&&v.push(ml(m,S,x)))),g)break;m=m.return}0<v.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==th&&(_=t.relatedTarget||t.fromElement)&&(Ps(_)||_[mr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Ps(_):null,_!==null&&(g=Zs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(v=eg,S="onMouseLeave",h="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(v=ng,S="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?f:Ta(p),x=_==null?f:Ta(_),f=new v(S,m+"leave",p,t,c),f.target=g,f.relatedTarget=x,S=null,Ps(c)===u&&(v=new v(h,m+"enter",_,t,c),v.target=x,v.relatedTarget=g,S=v),g=S,p&&_)t:{for(v=p,h=_,m=0,x=v;x;x=na(x))m++;for(x=0,S=h;S;S=na(S))x++;for(;0<m-x;)v=na(v),m--;for(;0<x-m;)h=na(h),x--;for(;m--;){if(v===h||h!==null&&v===h.alternate)break t;v=na(v),h=na(h)}v=null}else v=null;p!==null&&hg(d,f,p,v,!1),_!==null&&g!==null&&hg(d,g,_,v,!0)}}e:{if(f=u?Ta(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var M=yE;else if(sg(f))if(xx)M=wE;else{M=ME;var T=SE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=EE);if(M&&(M=M(n,u))){vx(d,M,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&jd(f,"number",f.value)}switch(T=u?Ta(u):window,n){case"focusin":(sg(T)||T.contentEditable==="true")&&(Ea=T,lh=u,Ko=null);break;case"focusout":Ko=lh=Ea=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,cg(d,t,c);break;case"selectionchange":if(AE)break;case"keydown":case"keyup":cg(d,t,c)}var w;if(am)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ma?gx(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(mx&&t.locale!=="ko"&&(Ma||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ma&&(w=px()):(Gr=c,im="value"in Gr?Gr.value:Gr.textContent,Ma=!0)),T=vc(u,y),0<T.length&&(y=new tg(y,n,null,t,c),d.push({event:y,listeners:T}),w?y.data=w:(w=_x(t),w!==null&&(y.data=w)))),(w=mE?gE(n,t):_E(n,t))&&(u=vc(u,"onBeforeInput"),0<u.length&&(c=new tg("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=w))}bx(d,e)})}function ml(n,e,t){return{instance:n,listener:e,currentTarget:t}}function vc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ll(n,t),s!=null&&i.unshift(ml(n,s,r)),s=ll(n,e),s!=null&&i.push(ml(n,s,r))),n=n.return}return i}function na(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hg(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ll(t,s),l!=null&&a.unshift(ml(t,l,o))):r||(l=ll(t,s),l!=null&&a.push(ml(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var LE=/\r\n?/g,DE=/\u0000|\uFFFD/g;function pg(n){return(typeof n=="string"?n:""+n).replace(LE,`
`).replace(DE,"")}function ou(n,e,t){if(e=pg(e),pg(n)!==e&&t)throw Error(de(425))}function xc(){}var ch=null,fh=null;function dh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hh=typeof setTimeout=="function"?setTimeout:void 0,IE=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(n){return mg.resolve(null).then(n).catch(UE)}:hh;function UE(n){setTimeout(function(){throw n})}function Vf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),fl(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);fl(e)}function Qr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function gg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Oi="__reactFiber$"+fo,gl="__reactProps$"+fo,mr="__reactContainer$"+fo,ph="__reactEvents$"+fo,FE="__reactListeners$"+fo,OE="__reactHandles$"+fo;function Ps(n){var e=n[Oi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[mr]||t[Oi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=gg(n);n!==null;){if(t=n[Oi])return t;n=gg(n)}return e}n=t,t=n.parentNode}return null}function Bl(n){return n=n[Oi]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function tf(n){return n[gl]||null}var mh=[],Ra=-1;function ds(n){return{current:n}}function _t(n){0>Ra||(n.current=mh[Ra],mh[Ra]=null,Ra--)}function ht(n,e){Ra++,mh[Ra]=n.current,n.current=e}var as={},pn=ds(as),Rn=ds(!1),Hs=as;function qa(n,e){var t=n.type.contextTypes;if(!t)return as;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function An(n){return n=n.childContextTypes,n!=null}function yc(){_t(Rn),_t(pn)}function _g(n,e,t){if(pn.current!==as)throw Error(de(168));ht(pn,e),ht(Rn,t)}function Lx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,SM(n)||"Unknown",r));return Ct({},t,i)}function Sc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||as,Hs=pn.current,ht(pn,n),ht(Rn,Rn.current),!0}function vg(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=Lx(n,e,Hs),i.__reactInternalMemoizedMergedChildContext=n,_t(Rn),_t(pn),ht(pn,n)):_t(Rn),ht(Rn,t)}var sr=null,nf=!1,Hf=!1;function Dx(n){sr===null?sr=[n]:sr.push(n)}function kE(n){nf=!0,Dx(n)}function hs(){if(!Hf&&sr!==null){Hf=!0;var n=0,e=at;try{var t=sr;for(at=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}sr=null,nf=!1}catch(r){throw sr!==null&&(sr=sr.slice(n+1)),ix(Jp,hs),r}finally{at=e,Hf=!1}}return null}var Aa=[],Ca=0,Mc=null,Ec=0,ri=[],si=0,Gs=null,or=1,lr="";function Es(n,e){Aa[Ca++]=Ec,Aa[Ca++]=Mc,Mc=n,Ec=e}function Ix(n,e,t){ri[si++]=or,ri[si++]=lr,ri[si++]=Gs,Gs=n;var i=or;n=lr;var r=32-wi(i)-1;i&=~(1<<r),t+=1;var s=32-wi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,or=1<<32-wi(e)+r|t<<r|i,lr=s+n}else or=1<<s|t<<r|i,lr=n}function lm(n){n.return!==null&&(Es(n,1),Ix(n,1,0))}function um(n){for(;n===Mc;)Mc=Aa[--Ca],Aa[Ca]=null,Ec=Aa[--Ca],Aa[Ca]=null;for(;n===Gs;)Gs=ri[--si],ri[si]=null,lr=ri[--si],ri[si]=null,or=ri[--si],ri[si]=null}var Xn=null,Hn=null,vt=!1,Si=null;function Nx(n,e){var t=li(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function xg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Xn=n,Hn=Qr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Xn=n,Hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Gs!==null?{id:or,overflow:lr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=li(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Xn=n,Hn=null,!0):!1;default:return!1}}function gh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _h(n){if(vt){var e=Hn;if(e){var t=e;if(!xg(n,e)){if(gh(n))throw Error(de(418));e=Qr(t.nextSibling);var i=Xn;e&&xg(n,e)?Nx(i,t):(n.flags=n.flags&-4097|2,vt=!1,Xn=n)}}else{if(gh(n))throw Error(de(418));n.flags=n.flags&-4097|2,vt=!1,Xn=n}}}function yg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function lu(n){if(n!==Xn)return!1;if(!vt)return yg(n),vt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!dh(n.type,n.memoizedProps)),e&&(e=Hn)){if(gh(n))throw Ux(),Error(de(418));for(;e;)Nx(n,e),e=Qr(e.nextSibling)}if(yg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Hn=Qr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Hn=null}}else Hn=Xn?Qr(n.stateNode.nextSibling):null;return!0}function Ux(){for(var n=Hn;n;)n=Qr(n.nextSibling)}function Ka(){Hn=Xn=null,vt=!1}function cm(n){Si===null?Si=[n]:Si.push(n)}var BE=Er.ReactCurrentBatchConfig;function wo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function uu(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Sg(n){var e=n._init;return e(n._payload)}function Fx(n){function e(h,m){if(n){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function t(h,m){if(!n)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=ns(h,m),h.index=0,h.sibling=null,h}function s(h,m,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=2,m)):(h.flags|=1048576,m)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,m,x,S){return m===null||m.tag!==6?(m=Kf(x,h.mode,S),m.return=h,m):(m=r(m,x),m.return=h,m)}function l(h,m,x,S){var M=x.type;return M===Sa?c(h,m,x.props.children,S,x.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===kr&&Sg(M)===m.type)?(S=r(m,x.props),S.ref=wo(h,m,x),S.return=h,S):(S=Qu(x.type,x.key,x.props,null,h.mode,S),S.ref=wo(h,m,x),S.return=h,S)}function u(h,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=jf(x,h.mode,S),m.return=h,m):(m=r(m,x.children||[]),m.return=h,m)}function c(h,m,x,S,M){return m===null||m.tag!==7?(m=Os(x,h.mode,S,M),m.return=h,m):(m=r(m,x),m.return=h,m)}function d(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Kf(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ql:return x=Qu(m.type,m.key,m.props,null,h.mode,x),x.ref=wo(h,null,m),x.return=h,x;case ya:return m=jf(m,h.mode,x),m.return=h,m;case kr:var S=m._init;return d(h,S(m._payload),x)}if(Oo(m)||xo(m))return m=Os(m,h.mode,x,null),m.return=h,m;uu(h,m)}return null}function f(h,m,x,S){var M=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:o(h,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:return x.key===M?l(h,m,x,S):null;case ya:return x.key===M?u(h,m,x,S):null;case kr:return M=x._init,f(h,m,M(x._payload),S)}if(Oo(x)||xo(x))return M!==null?null:c(h,m,x,S,null);uu(h,x)}return null}function p(h,m,x,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,o(m,h,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ql:return h=h.get(S.key===null?x:S.key)||null,l(m,h,S,M);case ya:return h=h.get(S.key===null?x:S.key)||null,u(m,h,S,M);case kr:var T=S._init;return p(h,m,x,T(S._payload),M)}if(Oo(S)||xo(S))return h=h.get(x)||null,c(m,h,S,M,null);uu(m,S)}return null}function _(h,m,x,S){for(var M=null,T=null,w=m,y=m=0,R=null;w!==null&&y<x.length;y++){w.index>y?(R=w,w=null):R=w.sibling;var P=f(h,w,x[y],S);if(P===null){w===null&&(w=R);break}n&&w&&P.alternate===null&&e(h,w),m=s(P,m,y),T===null?M=P:T.sibling=P,T=P,w=R}if(y===x.length)return t(h,w),vt&&Es(h,y),M;if(w===null){for(;y<x.length;y++)w=d(h,x[y],S),w!==null&&(m=s(w,m,y),T===null?M=w:T.sibling=w,T=w);return vt&&Es(h,y),M}for(w=i(h,w);y<x.length;y++)R=p(w,h,y,x[y],S),R!==null&&(n&&R.alternate!==null&&w.delete(R.key===null?y:R.key),m=s(R,m,y),T===null?M=R:T.sibling=R,T=R);return n&&w.forEach(function(L){return e(h,L)}),vt&&Es(h,y),M}function v(h,m,x,S){var M=xo(x);if(typeof M!="function")throw Error(de(150));if(x=M.call(x),x==null)throw Error(de(151));for(var T=M=null,w=m,y=m=0,R=null,P=x.next();w!==null&&!P.done;y++,P=x.next()){w.index>y?(R=w,w=null):R=w.sibling;var L=f(h,w,P.value,S);if(L===null){w===null&&(w=R);break}n&&w&&L.alternate===null&&e(h,w),m=s(L,m,y),T===null?M=L:T.sibling=L,T=L,w=R}if(P.done)return t(h,w),vt&&Es(h,y),M;if(w===null){for(;!P.done;y++,P=x.next())P=d(h,P.value,S),P!==null&&(m=s(P,m,y),T===null?M=P:T.sibling=P,T=P);return vt&&Es(h,y),M}for(w=i(h,w);!P.done;y++,P=x.next())P=p(w,h,y,P.value,S),P!==null&&(n&&P.alternate!==null&&w.delete(P.key===null?y:P.key),m=s(P,m,y),T===null?M=P:T.sibling=P,T=P);return n&&w.forEach(function(N){return e(h,N)}),vt&&Es(h,y),M}function g(h,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Sa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ql:e:{for(var M=x.key,T=m;T!==null;){if(T.key===M){if(M=x.type,M===Sa){if(T.tag===7){t(h,T.sibling),m=r(T,x.props.children),m.return=h,h=m;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===kr&&Sg(M)===T.type){t(h,T.sibling),m=r(T,x.props),m.ref=wo(h,T,x),m.return=h,h=m;break e}t(h,T);break}else e(h,T);T=T.sibling}x.type===Sa?(m=Os(x.props.children,h.mode,S,x.key),m.return=h,h=m):(S=Qu(x.type,x.key,x.props,null,h.mode,S),S.ref=wo(h,m,x),S.return=h,h=S)}return a(h);case ya:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){t(h,m.sibling),m=r(m,x.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else e(h,m);m=m.sibling}m=jf(x,h.mode,S),m.return=h,h=m}return a(h);case kr:return T=x._init,g(h,m,T(x._payload),S)}if(Oo(x))return _(h,m,x,S);if(xo(x))return v(h,m,x,S);uu(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(t(h,m.sibling),m=r(m,x),m.return=h,h=m):(t(h,m),m=Kf(x,h.mode,S),m.return=h,h=m),a(h)):t(h,m)}return g}var ja=Fx(!0),Ox=Fx(!1),wc=ds(null),Tc=null,ba=null,fm=null;function dm(){fm=ba=Tc=null}function hm(n){var e=wc.current;_t(wc),n._currentValue=e}function vh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ba(n,e){Tc=n,fm=ba=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Tn=!0),n.firstContext=null)}function di(n){var e=n._currentValue;if(fm!==n)if(n={context:n,memoizedValue:e,next:null},ba===null){if(Tc===null)throw Error(de(308));ba=n,Tc.dependencies={lanes:0,firstContext:n}}else ba=ba.next=n;return e}var Ls=null;function pm(n){Ls===null?Ls=[n]:Ls.push(n)}function kx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,pm(e)):(t.next=r.next,r.next=t),e.interleaved=t,gr(n,i)}function gr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Br=!1;function mm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gr(n,t)}return r=i.interleaved,r===null?(e.next=e,pm(i)):(e.next=r.next,r.next=e),i.interleaved=e,gr(n,t)}function Yu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,em(n,t)}}function Mg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Rc(n,e,t,i){var r=n.updateQueue;Br=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,v=o;switch(f=e,p=t,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Ct({},d,f);break e;case 2:Br=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xs|=a,n.lanes=a,n.memoizedState=d}}function Eg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var zl={},Wi=ds(zl),_l=ds(zl),vl=ds(zl);function Ds(n){if(n===zl)throw Error(de(174));return n}function gm(n,e){switch(ht(vl,e),ht(_l,n),ht(Wi,zl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Qd(e,n)}_t(Wi),ht(Wi,e)}function Za(){_t(Wi),_t(_l),_t(vl)}function zx(n){Ds(vl.current);var e=Ds(Wi.current),t=Qd(e,n.type);e!==t&&(ht(_l,n),ht(Wi,t))}function _m(n){_l.current===n&&(_t(Wi),_t(_l))}var Et=ds(0);function Ac(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gf=[];function vm(){for(var n=0;n<Gf.length;n++)Gf[n]._workInProgressVersionPrimary=null;Gf.length=0}var $u=Er.ReactCurrentDispatcher,Wf=Er.ReactCurrentBatchConfig,Ws=0,Rt=null,Wt=null,Kt=null,Cc=!1,jo=!1,xl=0,zE=0;function sn(){throw Error(de(321))}function xm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ai(n[t],e[t]))return!1;return!0}function ym(n,e,t,i,r,s){if(Ws=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$u.current=n===null||n.memoizedState===null?WE:XE,n=t(i,r),jo){s=0;do{if(jo=!1,xl=0,25<=s)throw Error(de(301));s+=1,Kt=Wt=null,e.updateQueue=null,$u.current=YE,n=t(i,r)}while(jo)}if($u.current=bc,e=Wt!==null&&Wt.next!==null,Ws=0,Kt=Wt=Rt=null,Cc=!1,e)throw Error(de(300));return n}function Sm(){var n=xl!==0;return xl=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Rt.memoizedState=Kt=n:Kt=Kt.next=n,Kt}function hi(){if(Wt===null){var n=Rt.alternate;n=n!==null?n.memoizedState:null}else n=Wt.next;var e=Kt===null?Rt.memoizedState:Kt.next;if(e!==null)Kt=e,Wt=n;else{if(n===null)throw Error(de(310));Wt=n,n={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Kt===null?Rt.memoizedState=Kt=n:Kt=Kt.next=n}return Kt}function yl(n,e){return typeof e=="function"?e(n):e}function Xf(n){var e=hi(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=Wt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Ws&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Rt.lanes|=c,Xs|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Ai(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Rt.lanes|=s,Xs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Yf(n){var e=hi(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Ai(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Vx(){}function Hx(n,e){var t=Rt,i=hi(),r=e(),s=!Ai(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,Mm(Xx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(t.flags|=2048,Sl(9,Wx.bind(null,t,i,r,e),void 0,null),jt===null)throw Error(de(349));Ws&30||Gx(t,e,r)}return r}function Gx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Wx(n,e,t,i){e.value=t,e.getSnapshot=i,Yx(e)&&$x(n)}function Xx(n,e,t){return t(function(){Yx(e)&&$x(n)})}function Yx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ai(n,t)}catch{return!0}}function $x(n){var e=gr(n,1);e!==null&&Ti(e,n,1,-1)}function wg(n){var e=Ni();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:n},e.queue=n,n=n.dispatch=GE.bind(null,Rt,n),[e.memoizedState,n]}function Sl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function qx(){return hi().memoizedState}function qu(n,e,t,i){var r=Ni();Rt.flags|=n,r.memoizedState=Sl(1|e,t,void 0,i===void 0?null:i)}function rf(n,e,t,i){var r=hi();i=i===void 0?null:i;var s=void 0;if(Wt!==null){var a=Wt.memoizedState;if(s=a.destroy,i!==null&&xm(i,a.deps)){r.memoizedState=Sl(e,t,s,i);return}}Rt.flags|=n,r.memoizedState=Sl(1|e,t,s,i)}function Tg(n,e){return qu(8390656,8,n,e)}function Mm(n,e){return rf(2048,8,n,e)}function Kx(n,e){return rf(4,2,n,e)}function jx(n,e){return rf(4,4,n,e)}function Zx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Qx(n,e,t){return t=t!=null?t.concat([n]):null,rf(4,4,Zx.bind(null,e,n),t)}function Em(){}function Jx(n,e){var t=hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&xm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ey(n,e){var t=hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&xm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ty(n,e,t){return Ws&21?(Ai(t,e)||(t=ax(),Rt.lanes|=t,Xs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Tn=!0),n.memoizedState=t)}function VE(n,e){var t=at;at=t!==0&&4>t?t:4,n(!0);var i=Wf.transition;Wf.transition={};try{n(!1),e()}finally{at=t,Wf.transition=i}}function ny(){return hi().memoizedState}function HE(n,e,t){var i=ts(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},iy(n))ry(e,t);else if(t=kx(n,e,t,i),t!==null){var r=xn();Ti(t,n,i,r),sy(t,e,i)}}function GE(n,e,t){var i=ts(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(iy(n))ry(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Ai(o,a)){var l=e.interleaved;l===null?(r.next=r,pm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=kx(n,e,r,i),t!==null&&(r=xn(),Ti(t,n,i,r),sy(t,e,i))}}function iy(n){var e=n.alternate;return n===Rt||e!==null&&e===Rt}function ry(n,e){jo=Cc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function sy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,em(n,t)}}var bc={readContext:di,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},WE={readContext:di,useCallback:function(n,e){return Ni().memoizedState=[n,e===void 0?null:e],n},useContext:di,useEffect:Tg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,qu(4194308,4,Zx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return qu(4194308,4,n,e)},useInsertionEffect:function(n,e){return qu(4,2,n,e)},useMemo:function(n,e){var t=Ni();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ni();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=HE.bind(null,Rt,n),[i.memoizedState,n]},useRef:function(n){var e=Ni();return n={current:n},e.memoizedState=n},useState:wg,useDebugValue:Em,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=wg(!1),e=n[0];return n=VE.bind(null,n[1]),Ni().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Rt,r=Ni();if(vt){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),jt===null)throw Error(de(349));Ws&30||Gx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Tg(Xx.bind(null,i,s,n),[n]),i.flags|=2048,Sl(9,Wx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ni(),e=jt.identifierPrefix;if(vt){var t=lr,i=or;t=(i&~(1<<32-wi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=xl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=zE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},XE={readContext:di,useCallback:Jx,useContext:di,useEffect:Mm,useImperativeHandle:Qx,useInsertionEffect:Kx,useLayoutEffect:jx,useMemo:ey,useReducer:Xf,useRef:qx,useState:function(){return Xf(yl)},useDebugValue:Em,useDeferredValue:function(n){var e=hi();return ty(e,Wt.memoizedState,n)},useTransition:function(){var n=Xf(yl)[0],e=hi().memoizedState;return[n,e]},useMutableSource:Vx,useSyncExternalStore:Hx,useId:ny,unstable_isNewReconciler:!1},YE={readContext:di,useCallback:Jx,useContext:di,useEffect:Mm,useImperativeHandle:Qx,useInsertionEffect:Kx,useLayoutEffect:jx,useMemo:ey,useReducer:Yf,useRef:qx,useState:function(){return Yf(yl)},useDebugValue:Em,useDeferredValue:function(n){var e=hi();return Wt===null?e.memoizedState=n:ty(e,Wt.memoizedState,n)},useTransition:function(){var n=Yf(yl)[0],e=hi().memoizedState;return[n,e]},useMutableSource:Vx,useSyncExternalStore:Hx,useId:ny,unstable_isNewReconciler:!1};function xi(n,e){if(n&&n.defaultProps){e=Ct({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function xh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ct({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var sf={isMounted:function(n){return(n=n._reactInternals)?Zs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=xn(),r=ts(n),s=cr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Jr(n,s,r),e!==null&&(Ti(e,n,r,i),Yu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=xn(),r=ts(n),s=cr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Jr(n,s,r),e!==null&&(Ti(e,n,r,i),Yu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=xn(),i=ts(n),r=cr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Jr(n,r,i),e!==null&&(Ti(e,n,i,t),Yu(e,n,i))}};function Rg(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!hl(t,i)||!hl(r,s):!0}function ay(n,e,t){var i=!1,r=as,s=e.contextType;return typeof s=="object"&&s!==null?s=di(s):(r=An(e)?Hs:pn.current,i=e.contextTypes,s=(i=i!=null)?qa(n,r):as),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sf,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Ag(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&sf.enqueueReplaceState(e,e.state,null)}function yh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},mm(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=di(s):(s=An(e)?Hs:pn.current,r.context=qa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sf.enqueueReplaceState(r,r.state,null),Rc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Qa(n,e){try{var t="",i=e;do t+=yM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function $f(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Sh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $E=typeof WeakMap=="function"?WeakMap:Map;function oy(n,e,t){t=cr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Lc||(Lc=!0,Lh=i),Sh(n,e)},t}function ly(n,e,t){t=cr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Sh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Sh(n,e),typeof i!="function"&&(es===null?es=new Set([this]):es.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Cg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $E;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ow.bind(null,n,e,t),e.then(n,n))}function bg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Pg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=cr(-1,1),e.tag=2,Jr(t,e,1))),t.lanes|=1),n)}var qE=Er.ReactCurrentOwner,Tn=!1;function _n(n,e,t,i){e.child=n===null?Ox(e,null,t,i):ja(e,n.child,t,i)}function Lg(n,e,t,i,r){t=t.render;var s=e.ref;return Ba(e,r),i=ym(n,e,t,i,s,r),t=Sm(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,_r(n,e,r)):(vt&&t&&lm(e),e.flags|=1,_n(n,e,i,r),e.child)}function Dg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Lm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,uy(n,e,s,i,r)):(n=Qu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:hl,t(a,i)&&n.ref===e.ref)return _r(n,e,r)}return e.flags|=1,n=ns(s,i),n.ref=e.ref,n.return=e,e.child=n}function uy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(hl(s,i)&&n.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Tn=!0);else return e.lanes=n.lanes,_r(n,e,r)}return Mh(n,e,t,i,r)}function cy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(La,Bn),Bn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ht(La,Bn),Bn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ht(La,Bn),Bn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ht(La,Bn),Bn|=i;return _n(n,e,r,t),e.child}function fy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Mh(n,e,t,i,r){var s=An(t)?Hs:pn.current;return s=qa(e,s),Ba(e,r),t=ym(n,e,t,i,s,r),i=Sm(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,_r(n,e,r)):(vt&&i&&lm(e),e.flags|=1,_n(n,e,t,r),e.child)}function Ig(n,e,t,i,r){if(An(t)){var s=!0;Sc(e)}else s=!1;if(Ba(e,r),e.stateNode===null)Ku(n,e),ay(e,t,i),yh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=di(u):(u=An(t)?Hs:pn.current,u=qa(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Ag(e,a,i,u),Br=!1;var f=e.memoizedState;a.state=f,Rc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Rn.current||Br?(typeof c=="function"&&(xh(e,t,c,i),l=e.memoizedState),(o=Br||Rg(e,t,o,i,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Bx(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:xi(e.type,o),a.props=u,d=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=di(l):(l=An(t)?Hs:pn.current,l=qa(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Ag(e,a,i,l),Br=!1,f=e.memoizedState,a.state=f,Rc(e,i,a,r);var _=e.memoizedState;o!==d||f!==_||Rn.current||Br?(typeof p=="function"&&(xh(e,t,p,i),_=e.memoizedState),(u=Br||Rg(e,t,u,i,f,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Eh(n,e,t,i,s,r)}function Eh(n,e,t,i,r,s){fy(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&vg(e,t,!1),_r(n,e,s);i=e.stateNode,qE.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=ja(e,n.child,null,s),e.child=ja(e,null,o,s)):_n(n,e,o,s),e.memoizedState=i.state,r&&vg(e,t,!0),e.child}function dy(n){var e=n.stateNode;e.pendingContext?_g(n,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(n,e.context,!1),gm(n,e.containerInfo)}function Ng(n,e,t,i,r){return Ka(),cm(r),e.flags|=256,_n(n,e,t,i),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function hy(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ht(Et,r&1),n===null)return _h(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lf(a,i,0,null),n=Os(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Th(t),e.memoizedState=wh,n):wm(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return KE(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ns(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ns(o,s):(s=Os(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Th(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=wh,i}return s=n.child,n=s.sibling,i=ns(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function wm(n,e){return e=lf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function cu(n,e,t,i){return i!==null&&cm(i),ja(e,n.child,null,t),n=wm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function KE(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=$f(Error(de(422))),cu(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lf({mode:"visible",children:i.children},r,0,null),s=Os(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ja(e,n.child,null,a),e.child.memoizedState=Th(a),e.memoizedState=wh,s);if(!(e.mode&1))return cu(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=$f(s,i,void 0),cu(n,e,a,i)}if(o=(a&n.childLanes)!==0,Tn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gr(n,r),Ti(i,n,r,-1))}return Pm(),i=$f(Error(de(421))),cu(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=lw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Hn=Qr(r.nextSibling),Xn=e,vt=!0,Si=null,n!==null&&(ri[si++]=or,ri[si++]=lr,ri[si++]=Gs,or=n.id,lr=n.overflow,Gs=e),e=wm(e,i.children),e.flags|=4096,e)}function Ug(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),vh(n.return,e,t)}function qf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function py(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(n,e,i.children,t),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ug(n,t,e);else if(n.tag===19)Ug(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ht(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ac(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),qf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ac(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}qf(e,!0,t,null,s);break;case"together":qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ku(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function _r(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Xs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=ns(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ns(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function jE(n,e,t){switch(e.tag){case 3:dy(e),Ka();break;case 5:zx(e);break;case 1:An(e.type)&&Sc(e);break;case 4:gm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(Et,Et.current&1),e.flags|=128,null):t&e.child.childLanes?hy(n,e,t):(ht(Et,Et.current&1),n=_r(n,e,t),n!==null?n.sibling:null);ht(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return py(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,cy(n,e,t)}return _r(n,e,t)}var my,Rh,gy,_y;my=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rh=function(){};gy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ds(Wi.current);var s=null;switch(t){case"input":r=qd(n,r),i=qd(n,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=Zd(n,r),i=Zd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=xc)}Jd(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(al.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(al.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_y=function(n,e,t,i){t!==i&&(e.flags|=4)};function To(n,e){if(!vt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ZE(n,e,t){var i=e.pendingProps;switch(um(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return An(e.type)&&yc(),an(e),null;case 3:return i=e.stateNode,Za(),_t(Rn),_t(pn),vm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(lu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Si!==null&&(Nh(Si),Si=null))),Rh(n,e),an(e),null;case 5:_m(e);var r=Ds(vl.current);if(t=e.type,n!==null&&e.stateNode!=null)gy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return an(e),null}if(n=Ds(Wi.current),lu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Oi]=e,i[gl]=s,n=(e.mode&1)!==0,t){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)gt(Bo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":W0(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Y0(i,s),gt("invalid",i)}Jd(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ou(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ou(i.textContent,o,n),r=["children",""+o]):al.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(t){case"input":Jl(i),X0(i,s,!0);break;case"textarea":Jl(i),$0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Xv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Oi]=e,n[gl]=i,my(n,e,!1,!1),e.stateNode=n;e:{switch(a=eh(t,i),t){case"dialog":gt("cancel",n),gt("close",n),r=i;break;case"iframe":case"object":case"embed":gt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)gt(Bo[r],n);r=i;break;case"source":gt("error",n),r=i;break;case"img":case"image":case"link":gt("error",n),gt("load",n),r=i;break;case"details":gt("toggle",n),r=i;break;case"input":W0(n,i),r=qd(n,i),gt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),gt("invalid",n);break;case"textarea":Y0(n,i),r=Zd(n,i),gt("invalid",n);break;default:r=i}Jd(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?qv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ol(n,l):typeof l=="number"&&ol(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(al.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",n):l!=null&&qp(n,s,l,a))}switch(t){case"input":Jl(n),X0(n,i,!1);break;case"textarea":Jl(n),$0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ss(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ua(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ua(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=xc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)_y(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=Ds(vl.current),Ds(Wi.current),lu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Oi]=e,(s=i.nodeValue!==t)&&(n=Xn,n!==null))switch(n.tag){case 3:ou(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ou(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Oi]=e,e.stateNode=i}return an(e),null;case 13:if(_t(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(vt&&Hn!==null&&e.mode&1&&!(e.flags&128))Ux(),Ka(),e.flags|=98560,s=!1;else if(s=lu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[Oi]=e}else Ka(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else Si!==null&&(Nh(Si),Si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Et.current&1?Xt===0&&(Xt=3):Pm())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return Za(),Rh(n,e),n===null&&pl(e.stateNode.containerInfo),an(e),null;case 10:return hm(e.type._context),an(e),null;case 17:return An(e.type)&&yc(),an(e),null;case 19:if(_t(Et),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)To(s,!1);else{if(Xt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Ac(n),a!==null){for(e.flags|=128,To(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ht(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&kt()>Ja&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ac(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return an(e),null}else 2*kt()-s.renderingStartTime>Ja&&t!==1073741824&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,t=Et.current,ht(Et,i?t&1|2:t&1),e):(an(e),null);case 22:case 23:return bm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Bn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function QE(n,e){switch(um(e),e.tag){case 1:return An(e.type)&&yc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Za(),_t(Rn),_t(pn),vm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return _m(e),null;case 13:if(_t(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Ka()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _t(Et),null;case 4:return Za(),null;case 10:return hm(e.type._context),null;case 22:case 23:return bm(),null;case 24:return null;default:return null}}var fu=!1,un=!1,JE=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Pa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Lt(n,e,i)}else t.current=null}function Ah(n,e,t){try{t()}catch(i){Lt(n,e,i)}}var Fg=!1;function ew(n,e){if(ch=gc,n=Mx(),om(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(fh={focusedElem:n,selectionRange:t},gc=!1,Ce=e;Ce!==null;)if(e=Ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ce=n;else for(;Ce!==null;){e=Ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,g=_.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:xi(e.type,v),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){Lt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}return _=Fg,Fg=!1,_}function Zo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ah(e,t,s)}r=r.next}while(r!==i)}}function af(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ch(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function vy(n){var e=n.alternate;e!==null&&(n.alternate=null,vy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Oi],delete e[gl],delete e[ph],delete e[FE],delete e[OE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xy(n){return n.tag===5||n.tag===3||n.tag===4}function Og(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=xc));else if(i!==4&&(n=n.child,n!==null))for(bh(n,e,t),n=n.sibling;n!==null;)bh(n,e,t),n=n.sibling}function Ph(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ph(n,e,t),n=n.sibling;n!==null;)Ph(n,e,t),n=n.sibling}var Qt=null,yi=!1;function Lr(n,e,t){for(t=t.child;t!==null;)yy(n,e,t),t=t.sibling}function yy(n,e,t){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(Zc,t)}catch{}switch(t.tag){case 5:un||Pa(t,e);case 6:var i=Qt,r=yi;Qt=null,Lr(n,e,t),Qt=i,yi=r,Qt!==null&&(yi?(n=Qt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Qt.removeChild(t.stateNode));break;case 18:Qt!==null&&(yi?(n=Qt,t=t.stateNode,n.nodeType===8?Vf(n.parentNode,t):n.nodeType===1&&Vf(n,t),fl(n)):Vf(Qt,t.stateNode));break;case 4:i=Qt,r=yi,Qt=t.stateNode.containerInfo,yi=!0,Lr(n,e,t),Qt=i,yi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ah(t,e,a),r=r.next}while(r!==i)}Lr(n,e,t);break;case 1:if(!un&&(Pa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Lt(t,e,o)}Lr(n,e,t);break;case 21:Lr(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,Lr(n,e,t),un=i):Lr(n,e,t);break;default:Lr(n,e,t)}}function kg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new JE),e.forEach(function(i){var r=uw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function mi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Qt=o.stateNode,yi=!1;break e;case 3:Qt=o.stateNode.containerInfo,yi=!0;break e;case 4:Qt=o.stateNode.containerInfo,yi=!0;break e}o=o.return}if(Qt===null)throw Error(de(160));yy(s,a,r),Qt=null,yi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sy(e,n),e=e.sibling}function Sy(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(e,n),Li(n),i&4){try{Zo(3,n,n.return),af(3,n)}catch(v){Lt(n,n.return,v)}try{Zo(5,n,n.return)}catch(v){Lt(n,n.return,v)}}break;case 1:mi(e,n),Li(n),i&512&&t!==null&&Pa(t,t.return);break;case 5:if(mi(e,n),Li(n),i&512&&t!==null&&Pa(t,t.return),n.flags&32){var r=n.stateNode;try{ol(r,"")}catch(v){Lt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Gv(r,s),eh(o,a);var u=eh(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?qv(r,d):c==="dangerouslySetInnerHTML"?Yv(r,d):c==="children"?ol(r,d):qp(r,c,d,u)}switch(o){case"input":Kd(r,s);break;case"textarea":Wv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ua(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ua(r,!!s.multiple,s.defaultValue,!0):Ua(r,!!s.multiple,s.multiple?[]:"",!1))}r[gl]=s}catch(v){Lt(n,n.return,v)}}break;case 6:if(mi(e,n),Li(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Lt(n,n.return,v)}}break;case 3:if(mi(e,n),Li(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(v){Lt(n,n.return,v)}break;case 4:mi(e,n),Li(n);break;case 13:mi(e,n),Li(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Am=kt())),i&4&&kg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(un=(u=un)||c,mi(e,n),un=u):mi(e,n),Li(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ce=n,c=n.child;c!==null;){for(d=Ce=c;Ce!==null;){switch(f=Ce,p=f.child,f.tag){case 0:case 11:case 14:case 15:Zo(4,f,f.return);break;case 1:Pa(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Lt(i,t,v)}}break;case 5:Pa(f,f.return);break;case 22:if(f.memoizedState!==null){zg(d);continue}}p!==null?(p.return=f,Ce=p):zg(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=$v("display",a))}catch(v){Lt(n,n.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Lt(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mi(e,n),Li(n),i&4&&kg(n);break;case 21:break;default:mi(e,n),Li(n)}}function Li(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(xy(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ol(r,""),i.flags&=-33);var s=Og(n);Ph(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Og(n);bh(n,o,a);break;default:throw Error(de(161))}}catch(l){Lt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function tw(n,e,t){Ce=n,My(n)}function My(n,e,t){for(var i=(n.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||fu;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||un;o=fu;var u=un;if(fu=a,(un=l)&&!u)for(Ce=r;Ce!==null;)a=Ce,l=a.child,a.tag===22&&a.memoizedState!==null?Vg(r):l!==null?(l.return=a,Ce=l):Vg(r);for(;s!==null;)Ce=s,My(s),s=s.sibling;Ce=r,fu=o,un=u}Bg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):Bg(n)}}function Bg(n){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||af(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:xi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Eg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Eg(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&fl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}un||e.flags&512&&Ch(e)}catch(f){Lt(e,e.return,f)}}if(e===n){Ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function zg(n){for(;Ce!==null;){var e=Ce;if(e===n){Ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function Vg(n){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{af(4,e)}catch(l){Lt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){Lt(e,s,l)}break;case 5:var a=e.return;try{Ch(e)}catch(l){Lt(e,a,l)}}}catch(l){Lt(e,e.return,l)}if(e===n){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var nw=Math.ceil,Pc=Er.ReactCurrentDispatcher,Tm=Er.ReactCurrentOwner,fi=Er.ReactCurrentBatchConfig,et=0,jt=null,Ht=null,en=0,Bn=0,La=ds(0),Xt=0,Ml=null,Xs=0,of=0,Rm=0,Qo=null,En=null,Am=0,Ja=1/0,ir=null,Lc=!1,Lh=null,es=null,du=!1,Wr=null,Dc=0,Jo=0,Dh=null,ju=-1,Zu=0;function xn(){return et&6?kt():ju!==-1?ju:ju=kt()}function ts(n){return n.mode&1?et&2&&en!==0?en&-en:BE.transition!==null?(Zu===0&&(Zu=ax()),Zu):(n=at,n!==0||(n=window.event,n=n===void 0?16:hx(n.type)),n):1}function Ti(n,e,t,i){if(50<Jo)throw Jo=0,Dh=null,Error(de(185));Ol(n,t,i),(!(et&2)||n!==jt)&&(n===jt&&(!(et&2)&&(of|=t),Xt===4&&Vr(n,en)),Cn(n,i),t===1&&et===0&&!(e.mode&1)&&(Ja=kt()+500,nf&&hs()))}function Cn(n,e){var t=n.callbackNode;BM(n,e);var i=mc(n,n===jt?en:0);if(i===0)t!==null&&j0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&j0(t),e===1)n.tag===0?kE(Hg.bind(null,n)):Dx(Hg.bind(null,n)),NE(function(){!(et&6)&&hs()}),t=null;else{switch(ox(i)){case 1:t=Jp;break;case 4:t=rx;break;case 16:t=pc;break;case 536870912:t=sx;break;default:t=pc}t=Py(t,Ey.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ey(n,e){if(ju=-1,Zu=0,et&6)throw Error(de(327));var t=n.callbackNode;if(za()&&n.callbackNode!==t)return null;var i=mc(n,n===jt?en:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ic(n,i);else{e=i;var r=et;et|=2;var s=Ty();(jt!==n||en!==e)&&(ir=null,Ja=kt()+500,Fs(n,e));do try{sw();break}catch(o){wy(n,o)}while(!0);dm(),Pc.current=s,et=r,Ht!==null?e=0:(jt=null,en=0,e=Xt)}if(e!==0){if(e===2&&(r=sh(n),r!==0&&(i=r,e=Ih(n,r))),e===1)throw t=Ml,Fs(n,0),Vr(n,i),Cn(n,kt()),t;if(e===6)Vr(n,i);else{if(r=n.current.alternate,!(i&30)&&!iw(r)&&(e=Ic(n,i),e===2&&(s=sh(n),s!==0&&(i=s,e=Ih(n,s))),e===1))throw t=Ml,Fs(n,0),Vr(n,i),Cn(n,kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:ws(n,En,ir);break;case 3:if(Vr(n,i),(i&130023424)===i&&(e=Am+500-kt(),10<e)){if(mc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){xn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=hh(ws.bind(null,n,En,ir),e);break}ws(n,En,ir);break;case 4:if(Vr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-wi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nw(i/1960))-i,10<i){n.timeoutHandle=hh(ws.bind(null,n,En,ir),i);break}ws(n,En,ir);break;case 5:ws(n,En,ir);break;default:throw Error(de(329))}}}return Cn(n,kt()),n.callbackNode===t?Ey.bind(null,n):null}function Ih(n,e){var t=Qo;return n.current.memoizedState.isDehydrated&&(Fs(n,e).flags|=256),n=Ic(n,e),n!==2&&(e=En,En=t,e!==null&&Nh(e)),n}function Nh(n){En===null?En=n:En.push.apply(En,n)}function iw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ai(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(n,e){for(e&=~Rm,e&=~of,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-wi(e),i=1<<t;n[t]=-1,e&=~i}}function Hg(n){if(et&6)throw Error(de(327));za();var e=mc(n,0);if(!(e&1))return Cn(n,kt()),null;var t=Ic(n,e);if(n.tag!==0&&t===2){var i=sh(n);i!==0&&(e=i,t=Ih(n,i))}if(t===1)throw t=Ml,Fs(n,0),Vr(n,e),Cn(n,kt()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ws(n,En,ir),Cn(n,kt()),null}function Cm(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(Ja=kt()+500,nf&&hs())}}function Ys(n){Wr!==null&&Wr.tag===0&&!(et&6)&&za();var e=et;et|=1;var t=fi.transition,i=at;try{if(fi.transition=null,at=1,n)return n()}finally{at=i,fi.transition=t,et=e,!(et&6)&&hs()}}function bm(){Bn=La.current,_t(La)}function Fs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,IE(t)),Ht!==null)for(t=Ht.return;t!==null;){var i=t;switch(um(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yc();break;case 3:Za(),_t(Rn),_t(pn),vm();break;case 5:_m(i);break;case 4:Za();break;case 13:_t(Et);break;case 19:_t(Et);break;case 10:hm(i.type._context);break;case 22:case 23:bm()}t=t.return}if(jt=n,Ht=n=ns(n.current,null),en=Bn=e,Xt=0,Ml=null,Rm=of=Xs=0,En=Qo=null,Ls!==null){for(e=0;e<Ls.length;e++)if(t=Ls[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Ls=null}return n}function wy(n,e){do{var t=Ht;try{if(dm(),$u.current=bc,Cc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cc=!1}if(Ws=0,Kt=Wt=Rt=null,jo=!1,xl=0,Tm.current=null,t===null||t.return===null){Xt=1,Ml=e,Ht=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=bg(a);if(p!==null){p.flags&=-257,Pg(p,a,o,s,e),p.mode&1&&Cg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Cg(s,u,e),Pm();break e}l=Error(de(426))}}else if(vt&&o.mode&1){var g=bg(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Pg(g,a,o,s,e),cm(Qa(l,o));break e}}s=l=Qa(l,o),Xt!==4&&(Xt=2),Qo===null?Qo=[s]:Qo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=oy(s,l,e);Mg(s,h);break e;case 1:o=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(es===null||!es.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ly(s,o,e);Mg(s,S);break e}}s=s.return}while(s!==null)}Ay(t)}catch(M){e=M,Ht===t&&t!==null&&(Ht=t=t.return);continue}break}while(!0)}function Ty(){var n=Pc.current;return Pc.current=bc,n===null?bc:n}function Pm(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),jt===null||!(Xs&268435455)&&!(of&268435455)||Vr(jt,en)}function Ic(n,e){var t=et;et|=2;var i=Ty();(jt!==n||en!==e)&&(ir=null,Fs(n,e));do try{rw();break}catch(r){wy(n,r)}while(!0);if(dm(),et=t,Pc.current=i,Ht!==null)throw Error(de(261));return jt=null,en=0,Xt}function rw(){for(;Ht!==null;)Ry(Ht)}function sw(){for(;Ht!==null&&!PM();)Ry(Ht)}function Ry(n){var e=by(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,e===null?Ay(n):Ht=e,Tm.current=null}function Ay(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=QE(t,e),t!==null){t.flags&=32767,Ht=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Xt=6,Ht=null;return}}else if(t=ZE(t,e,Bn),t!==null){Ht=t;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=n}while(e!==null);Xt===0&&(Xt=5)}function ws(n,e,t){var i=at,r=fi.transition;try{fi.transition=null,at=1,aw(n,e,t,i)}finally{fi.transition=r,at=i}return null}function aw(n,e,t,i){do za();while(Wr!==null);if(et&6)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(zM(n,s),n===jt&&(Ht=jt=null,en=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||du||(du=!0,Py(pc,function(){return za(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=fi.transition,fi.transition=null;var a=at;at=1;var o=et;et|=4,Tm.current=null,ew(n,t),Sy(t,n),RE(fh),gc=!!ch,fh=ch=null,n.current=t,tw(t),LM(),et=o,at=a,fi.transition=s}else n.current=t;if(du&&(du=!1,Wr=n,Dc=r),s=n.pendingLanes,s===0&&(es=null),NM(t.stateNode),Cn(n,kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,n=Lh,Lh=null,n;return Dc&1&&n.tag!==0&&za(),s=n.pendingLanes,s&1?n===Dh?Jo++:(Jo=0,Dh=n):Jo=0,hs(),null}function za(){if(Wr!==null){var n=ox(Dc),e=fi.transition,t=at;try{if(fi.transition=null,at=16>n?16:n,Wr===null)var i=!1;else{if(n=Wr,Wr=null,Dc=0,et&6)throw Error(de(331));var r=et;for(et|=4,Ce=n.current;Ce!==null;){var s=Ce,a=s.child;if(Ce.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ce=u;Ce!==null;){var c=Ce;switch(c.tag){case 0:case 11:case 15:Zo(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ce=d;else for(;Ce!==null;){c=Ce;var f=c.sibling,p=c.return;if(vy(c),c===u){Ce=null;break}if(f!==null){f.return=p,Ce=f;break}Ce=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Ce=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ce=a;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ce=h;break e}Ce=s.return}}var m=n.current;for(Ce=m;Ce!==null;){a=Ce;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Ce=x;else e:for(a=m;Ce!==null;){if(o=Ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:af(9,o)}}catch(M){Lt(o,o.return,M)}if(o===a){Ce=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ce=S;break e}Ce=o.return}}if(et=r,hs(),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(Zc,n)}catch{}i=!0}return i}finally{at=t,fi.transition=e}}return!1}function Gg(n,e,t){e=Qa(t,e),e=oy(n,e,1),n=Jr(n,e,1),e=xn(),n!==null&&(Ol(n,1,e),Cn(n,e))}function Lt(n,e,t){if(n.tag===3)Gg(n,n,t);else for(;e!==null;){if(e.tag===3){Gg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(es===null||!es.has(i))){n=Qa(t,n),n=ly(e,n,1),e=Jr(e,n,1),n=xn(),e!==null&&(Ol(e,1,n),Cn(e,n));break}}e=e.return}}function ow(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=xn(),n.pingedLanes|=n.suspendedLanes&t,jt===n&&(en&t)===t&&(Xt===4||Xt===3&&(en&130023424)===en&&500>kt()-Am?Fs(n,0):Rm|=t),Cn(n,e)}function Cy(n,e){e===0&&(n.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var t=xn();n=gr(n,e),n!==null&&(Ol(n,e,t),Cn(n,t))}function lw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Cy(n,t)}function uw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),Cy(n,t)}var by;by=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Rn.current)Tn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Tn=!1,jE(n,e,t);Tn=!!(n.flags&131072)}else Tn=!1,vt&&e.flags&1048576&&Ix(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ku(n,e),n=e.pendingProps;var r=qa(e,pn.current);Ba(e,t),r=ym(null,e,i,n,r,t);var s=Sm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mm(e),r.updater=sf,e.stateNode=r,r._reactInternals=e,yh(e,i,n,t),e=Eh(null,e,i,!0,s,t)):(e.tag=0,vt&&s&&lm(e),_n(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ku(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fw(i),n=xi(i,n),r){case 0:e=Mh(null,e,i,n,t);break e;case 1:e=Ig(null,e,i,n,t);break e;case 11:e=Lg(null,e,i,n,t);break e;case 14:e=Dg(null,e,i,xi(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Mh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Ig(n,e,i,r,t);case 3:e:{if(dy(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bx(n,e),Rc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qa(Error(de(423)),e),e=Ng(n,e,i,t,r);break e}else if(i!==r){r=Qa(Error(de(424)),e),e=Ng(n,e,i,t,r);break e}else for(Hn=Qr(e.stateNode.containerInfo.firstChild),Xn=e,vt=!0,Si=null,t=Ox(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ka(),i===r){e=_r(n,e,t);break e}_n(n,e,i,t)}e=e.child}return e;case 5:return zx(e),n===null&&_h(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,dh(i,r)?a=null:s!==null&&dh(i,s)&&(e.flags|=32),fy(n,e),_n(n,e,a,t),e.child;case 6:return n===null&&_h(e),null;case 13:return hy(n,e,t);case 4:return gm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ja(e,null,i,t):_n(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Lg(n,e,i,r,t);case 7:return _n(n,e,e.pendingProps,t),e.child;case 8:return _n(n,e,e.pendingProps.children,t),e.child;case 12:return _n(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(wc,i._currentValue),i._currentValue=a,s!==null)if(Ai(s.value,a)){if(s.children===r.children&&!Rn.current){e=_r(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=cr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),vh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),vh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}_n(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ba(e,t),r=di(r),i=i(r),e.flags|=1,_n(n,e,i,t),e.child;case 14:return i=e.type,r=xi(i,e.pendingProps),r=xi(i.type,r),Dg(n,e,i,r,t);case 15:return uy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Ku(n,e),e.tag=1,An(i)?(n=!0,Sc(e)):n=!1,Ba(e,t),ay(e,i,r),yh(e,i,r,t),Eh(null,e,i,!0,n,t);case 19:return py(n,e,t);case 22:return cy(n,e,t)}throw Error(de(156,e.tag))};function Py(n,e){return ix(n,e)}function cw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,e,t,i){return new cw(n,e,t,i)}function Lm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fw(n){if(typeof n=="function")return Lm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===jp)return 11;if(n===Zp)return 14}return 2}function ns(n,e){var t=n.alternate;return t===null?(t=li(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Qu(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Lm(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Sa:return Os(t.children,r,s,e);case Kp:a=8,r|=8;break;case Wd:return n=li(12,t,e,r|2),n.elementType=Wd,n.lanes=s,n;case Xd:return n=li(13,t,e,r),n.elementType=Xd,n.lanes=s,n;case Yd:return n=li(19,t,e,r),n.elementType=Yd,n.lanes=s,n;case zv:return lf(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case kv:a=10;break e;case Bv:a=9;break e;case jp:a=11;break e;case Zp:a=14;break e;case kr:a=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=li(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Os(n,e,t,i){return n=li(7,n,i,e),n.lanes=t,n}function lf(n,e,t,i){return n=li(22,n,i,e),n.elementType=zv,n.lanes=t,n.stateNode={isHidden:!1},n}function Kf(n,e,t){return n=li(6,n,null,e),n.lanes=t,n}function jf(n,e,t){return e=li(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function dw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pf(0),this.expirationTimes=Pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dm(n,e,t,i,r,s,a,o,l){return n=new dw(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=li(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},mm(s),n}function hw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ya,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ly(n){if(!n)return as;n=n._reactInternals;e:{if(Zs(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(An(t))return Lx(n,t,e)}return e}function Dy(n,e,t,i,r,s,a,o,l){return n=Dm(t,i,!0,n,r,s,a,o,l),n.context=Ly(null),t=n.current,i=xn(),r=ts(t),s=cr(i,r),s.callback=e??null,Jr(t,s,r),n.current.lanes=r,Ol(n,r,i),Cn(n,i),n}function uf(n,e,t,i){var r=e.current,s=xn(),a=ts(r);return t=Ly(t),e.context===null?e.context=t:e.pendingContext=t,e=cr(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Jr(r,e,a),n!==null&&(Ti(n,r,a,s),Yu(n,r,a)),a}function Nc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Im(n,e){Wg(n,e),(n=n.alternate)&&Wg(n,e)}function pw(){return null}var Iy=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nm(n){this._internalRoot=n}cf.prototype.render=Nm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));uf(n,e,null,null)};cf.prototype.unmount=Nm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ys(function(){uf(null,n,null,null)}),e[mr]=null}};function cf(n){this._internalRoot=n}cf.prototype.unstable_scheduleHydration=function(n){if(n){var e=cx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<zr.length&&e!==0&&e<zr[t].priority;t++);zr.splice(t,0,n),t===0&&dx(n)}};function Um(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ff(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xg(){}function mw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Nc(a);s.call(u)}}var a=Dy(e,i,n,0,null,!1,!1,"",Xg);return n._reactRootContainer=a,n[mr]=a.current,pl(n.nodeType===8?n.parentNode:n),Ys(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Nc(l);o.call(u)}}var l=Dm(n,0,!1,null,null,!1,!1,"",Xg);return n._reactRootContainer=l,n[mr]=l.current,pl(n.nodeType===8?n.parentNode:n),Ys(function(){uf(e,l,t,i)}),l}function df(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Nc(a);o.call(l)}}uf(e,a,n,r)}else a=mw(t,e,n,r,i);return Nc(a)}lx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ko(e.pendingLanes);t!==0&&(em(e,t|1),Cn(e,kt()),!(et&6)&&(Ja=kt()+500,hs()))}break;case 13:Ys(function(){var i=gr(n,1);if(i!==null){var r=xn();Ti(i,n,1,r)}}),Im(n,1)}};tm=function(n){if(n.tag===13){var e=gr(n,134217728);if(e!==null){var t=xn();Ti(e,n,134217728,t)}Im(n,134217728)}};ux=function(n){if(n.tag===13){var e=ts(n),t=gr(n,e);if(t!==null){var i=xn();Ti(t,n,e,i)}Im(n,e)}};cx=function(){return at};fx=function(n,e){var t=at;try{return at=n,e()}finally{at=t}};nh=function(n,e,t){switch(e){case"input":if(Kd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=tf(i);if(!r)throw Error(de(90));Hv(i),Kd(i,r)}}}break;case"textarea":Wv(n,t);break;case"select":e=t.value,e!=null&&Ua(n,!!t.multiple,e,!1)}};Zv=Cm;Qv=Ys;var gw={usingClientEntryPoint:!1,Events:[Bl,Ta,tf,Kv,jv,Cm]},Ro={findFiberByHostInstance:Ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_w={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=tx(n),n===null?null:n.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Zc=hu.inject(_w),Gi=hu}catch{}}jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;jn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Um(e))throw Error(de(200));return hw(n,e,null,t)};jn.createRoot=function(n,e){if(!Um(n))throw Error(de(299));var t=!1,i="",r=Iy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dm(n,1,!1,null,null,t,!1,i,r),n[mr]=e.current,pl(n.nodeType===8?n.parentNode:n),new Nm(e)};jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=tx(e),n=n===null?null:n.stateNode,n};jn.flushSync=function(n){return Ys(n)};jn.hydrate=function(n,e,t){if(!ff(e))throw Error(de(200));return df(null,n,e,!0,t)};jn.hydrateRoot=function(n,e,t){if(!Um(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Iy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Dy(e,null,n,1,t??null,r,!1,s,a),n[mr]=e.current,pl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new cf(e)};jn.render=function(n,e,t){if(!ff(e))throw Error(de(200));return df(null,n,e,!1,t)};jn.unmountComponentAtNode=function(n){if(!ff(n))throw Error(de(40));return n._reactRootContainer?(Ys(function(){df(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1};jn.unstable_batchedUpdates=Cm;jn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ff(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return df(n,e,t,!1,i)};jn.version="18.3.1-next-f1338f8080-20240426";function Ny(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ny)}catch(n){console.error(n)}}Ny(),Nv.exports=jn;var vw=Nv.exports,Uy,Yg=vw;Uy=Yg.createRoot,Yg.hydrateRoot;/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fm=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Fy=/^[\\/]{2}/;function xw(n,e){return e+n.replace(/\\/g,"/")}var $g="popstate";function qg(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function yw(n={}){function e(i,r){var u;let s=(u=r.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||i.location;return Uh("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default",s?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function t(i,r){return typeof r=="string"?r:El(r)}return Mw(e,t,null,n)}function At(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function qi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Sw(){return Math.random().toString(36).substring(2,10)}function Kg(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Uh(n,e,t=null,i,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ho(e):e,state:t,key:e&&e.key||i||Sw(),mask:r}}function El({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ho(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function Mw(n,e,t,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,u=c();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function c(){return(a.state||{idx:null}).idx}function d(){o="POP";let g=c(),h=g==null?null:g-u;u=g,l&&l({action:o,location:v.location,delta:h})}function f(g,h){o="PUSH";let m=qg(g)?g:Uh(v.location,g,h);u=c()+1;let x=Kg(m,u),S=v.createHref(m.mask||m);try{a.pushState(x,"",S)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(S)}s&&l&&l({action:o,location:v.location,delta:1})}function p(g,h){o="REPLACE";let m=qg(g)?g:Uh(v.location,g,h);u=c();let x=Kg(m,u),S=v.createHref(m.mask||m);a.replaceState(x,"",S),s&&l&&l({action:o,location:v.location,delta:0})}function _(g){return Ew(r,g)}let v={get action(){return o},get location(){return n(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener($g,d),l=g,()=>{r.removeEventListener($g,d),l=null}},createHref(g){return e(r,g)},createURL:_,encodeLocation(g){let h=_(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(g){return a.go(g)}};return v}function Ew(n,e,t=!1){let i="http://localhost";n&&(i=n.location.origin!=="null"?n.location.origin:n.location.href),At(i,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:El(e);return r=r.replace(/ $/,"%20"),!t&&Fy.test(r)&&(r=i+r),new URL(r,i)}function Oy(n,e,t="/"){return ww(n,e,t,!1)}function ww(n,e,t,i,r){let s=typeof e=="string"?ho(e):e,a=vr(s.pathname||"/",t);if(a==null)return null;let o=Tw(n),l=null,u=Fw(a);for(let c=0;l==null&&c<o.length;++c)l=Uw(o[c],u,i);return l}function Tw(n){let e=ky(n);return Rw(e),e}function ky(n,e=[],t=[],i="",r=!1){let s=(a,o,l=r,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(i)&&l)return;At(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length)}let d=Ri([i,c.relativePath]),f=t.concat(c);a.children&&a.children.length>0&&(At(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),ky(a.children,e,f,d,l)),!(a.path==null&&!a.index)&&e.push({path:d,score:Iw(d,a.index),routesMeta:f.map((p,_)=>{let[v,g]=Vy(p.relativePath,p.caseSensitive,_===f.length-1);return{...p,matcher:v,compiledParams:g}})})};return n.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of By(a.path))s(a,o,!0,u)}),e}function By(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=By(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function Rw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Nw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Aw=/^:[\w-]+$/,Cw=3,bw=2,Pw=1,Lw=10,Dw=-2,jg=n=>n==="*";function Iw(n,e){let t=n.split("/"),i=t.length;return t.some(jg)&&(i+=Dw),e&&(i+=bw),t.filter(r=>!jg(r)).reduce((r,s)=>r+(Aw.test(s)?Cw:s===""?Pw:Lw),i)}function Nw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function Uw(n,e,t=!1){let{routesMeta:i}=n,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",d={path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f=l.matcher&&l.compiledParams?zy(d,c,l.matcher,l.compiledParams):Uc(d,c),p=l.route;if(!f&&u&&t&&!i[i.length-1].route.index&&(f=Uc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Ri([s,f.pathname]),pathnameBase:Bw(Ri([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ri([s,f.pathnameBase]))}return a}function Uc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Vy(n.path,n.caseSensitive,n.end);return zy(n,e,t,i)}function zy(n,e,t,i){let r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,{paramName:c,isOptional:d},f)=>{if(c==="*"){let _=o[f]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[f];return d&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:n}}function Vy(n,e=!1,t=!0){qi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,c)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let d=c.charAt(u+a.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Fw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function vr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Ow(n,e="/"){let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?ho(n):n,s;return t?(t=Gy(t),t.startsWith("/")?s=Zg(t.substring(1),"/"):s=Zg(t,e)):s=e,{pathname:s,search:zw(i),hash:Vw(r)}}function Zg(n,e){let t=Fc(e).split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Zf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kw(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Hy(n){let e=kw(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Om(n,e,t,i=!1){let r;typeof n=="string"?r=ho(n):(r={...n},At(!r.pathname||!r.pathname.includes("?"),Zf("?","pathname","search",r)),At(!r.pathname||!r.pathname.includes("#"),Zf("#","pathname","hash",r)),At(!r.search||!r.search.includes("#"),Zf("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=Ow(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var Gy=n=>n.replace(/[\\/]{2,}/g,"/"),Ri=n=>Gy(n.join("/")),Fc=n=>n.replace(/\/+$/,""),Bw=n=>Fc(n).replace(/^\/*/,"/"),zw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Vw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,Hw=class{constructor(n,e,t,i=!1){this.status=n,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Gw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Ww(n){let e=n.map(t=>t.route.path).filter(Boolean);return Ri(e)||"/"}var Wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xy(n,e){let t=n;if(typeof t!="string"||!Fm.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,r=!1;if(Wy)try{let s=new URL(window.location.href),a=Fy.test(t)?new URL(xw(t,s.protocol)):new URL(t),o=vr(a.pathname,e);a.origin===s.origin&&o!=null?t=o+a.search+a.hash:r=!0}catch{qi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Yy=["POST","PUT","PATCH","DELETE"];new Set(Yy);var Xw=["GET",...Yy];new Set(Xw);var Yw=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function $w(n){try{return Yw.includes(new URL(n).protocol)}catch{return!1}}var po=Y.createContext(null);po.displayName="DataRouter";var hf=Y.createContext(null);hf.displayName="DataRouterState";var $y=Y.createContext(!1);function qw(){return Y.useContext($y)}var qy=Y.createContext({isTransitioning:!1});qy.displayName="ViewTransition";var Kw=Y.createContext(new Map);Kw.displayName="Fetchers";var jw=Y.createContext(null);jw.displayName="Await";var pi=Y.createContext(null);pi.displayName="Navigation";var Vl=Y.createContext(null);Vl.displayName="Location";var wr=Y.createContext({outlet:null,matches:[],isDataRoute:!1});wr.displayName="Route";var km=Y.createContext(null);km.displayName="RouteError";var Ky="REACT_ROUTER_ERROR",Zw="REDIRECT",Qw="ROUTE_ERROR_RESPONSE";function Jw(n){if(n.startsWith(`${Ky}:${Zw}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function eT(n){if(n.startsWith(`${Ky}:${Qw}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Hw(e.status,e.statusText,e.data)}catch{}}function tT(n,{relative:e}={}){At(Hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=Y.useContext(pi),{hash:r,pathname:s,search:a}=Gl(n,{relative:e}),o=s;return t!=="/"&&(o=s==="/"?t:Ri([t,s])),i.createHref({pathname:o,search:a,hash:r})}function Hl(){return Y.useContext(Vl)!=null}function Tr(){return At(Hl(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(Vl).location}var jy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zy(n){Y.useContext(pi).static||Y.useLayoutEffect(n)}function nT(){let{isDataRoute:n}=Y.useContext(wr);return n?mT():iT()}function iT(){At(Hl(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(po),{basename:e,navigator:t}=Y.useContext(pi),{matches:i}=Y.useContext(wr),{pathname:r}=Tr(),s=JSON.stringify(Hy(i)),a=Y.useRef(!1);return Zy(()=>{a.current=!0}),Y.useCallback((l,u={})=>{if(qi(a.current,jy),!a.current)return;if(typeof l=="number"){t.go(l);return}let c=Om(l,JSON.parse(s),r,u.relative==="path");n==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ri([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,s,r,n])}Y.createContext(null);function Gl(n,{relative:e}={}){let{matches:t}=Y.useContext(wr),{pathname:i}=Tr(),r=JSON.stringify(Hy(t));return Y.useMemo(()=>Om(n,JSON.parse(r),i,e==="path"),[n,r,i,e])}function rT(n,e){return Qy(n,e)}function Qy(n,e,t){var g;At(Hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=Y.useContext(pi),{matches:r}=Y.useContext(wr),s=r[r.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let h=u&&u.path||"";eS(o,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let c=Tr(),d;if(e){let h=typeof e=="string"?ho(e):e;At(l==="/"||((g=h.pathname)==null?void 0:g.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),d=h}else d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let h=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(h.length).join("/")}let _=t&&t.state.matches.length?t.state.matches.map(h=>Object.assign(h,{route:t.manifest[h.route.id]||h.route})):Oy(n,{pathname:p});qi(u||_!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),qi(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=uT(_&&_.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:Ri([l,i.encodeLocation?i.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:Ri([l,i.encodeLocation?i.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),r,t);return e&&v?Y.createElement(Vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},v):v}function sT(){let n=pT(),e=Gw(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:s},"ErrorBoundary")," or"," ",Y.createElement("code",{style:s},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:r},t):null,a)}var aT=Y.createElement(sT,null),Jy=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=eT(n.digest);t&&(n=t)}let e=n!==void 0?Y.createElement(wr.Provider,{value:this.props.routeContext},Y.createElement(km.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?Y.createElement(oT,{error:n},e):e}};Jy.contextType=$y;var Qf=new WeakMap;function oT({children:n,error:e}){let{basename:t}=Y.useContext(pi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=Jw(e.digest);if(i){let r=Qf.get(e);if(r)throw r;let s=Xy(i.location,t),a=s.absoluteURL||s.to;if($w(a))throw new Error("Invalid redirect location");if(Wy&&!Qf.get(e))if(s.isExternal||i.reloadDocument)window.location.href=a;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw Qf.set(e,o),o}return Y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a}`})}}return n}function lT({routeContext:n,match:e,children:t}){let i=Y.useContext(po);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(wr.Provider,{value:n},t)}function uT(n,e=[],t){let i=t==null?void 0:t.state;if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let r=n,s=i==null?void 0:i.errors;if(s!=null){let c=r.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);At(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let a=!1,o=-1;if(t&&i){a=i.renderFallback;for(let c=0;c<r.length;c++){let d=r[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(o=c),d.route.id){let{loaderData:f,errors:p}=i,_=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!p||p[d.route.id]===void 0);if(d.route.lazy||_){t.isStatic&&(a=!0),o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}}let l=t==null?void 0:t.onError,u=i&&l?(c,d)=>{var f,p;l(c,{location:i.location,params:((p=(f=i.matches)==null?void 0:f[0])==null?void 0:p.params)??{},pattern:Ww(i.matches),errorInfo:d})}:void 0;return r.reduceRight((c,d,f)=>{let p,_=!1,v=null,g=null;i&&(p=s&&d.route.id?s[d.route.id]:void 0,v=d.route.errorElement||aT,a&&(o<0&&f===0?(eS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,g=null):o===f&&(_=!0,g=d.route.hydrateFallbackElement||null)));let h=e.concat(r.slice(0,f+1)),m=()=>{let x;return p?x=v:_?x=g:d.route.Component?x=Y.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=c,Y.createElement(lT,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:i!=null},children:x})};return i&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?Y.createElement(Jy,{location:i.location,revalidation:i.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):m()},null)}function Bm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cT(n){let e=Y.useContext(po);return At(e,Bm(n)),e}function fT(n){let e=Y.useContext(hf);return At(e,Bm(n)),e}function dT(n){let e=Y.useContext(wr);return At(e,Bm(n)),e}function zm(n){let e=dT(n),t=e.matches[e.matches.length-1];return At(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function hT(){return zm("useRouteId")}function pT(){var i;let n=Y.useContext(km),e=fT("useRouteError"),t=zm("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function mT(){let{router:n}=cT("useNavigate"),e=zm("useNavigate"),t=Y.useRef(!1);return Zy(()=>{t.current=!0}),Y.useCallback(async(r,s={})=>{qi(t.current,jy),t.current&&(typeof r=="number"?await n.navigate(r):await n.navigate(r,{fromRouteId:e,...s}))},[n,e])}var Qg={};function eS(n,e,t){!e&&!Qg[n]&&(Qg[n]=!0,qi(!1,t))}Y.memo(gT);function gT({routes:n,manifest:e,future:t,state:i,isStatic:r,onError:s}){return Qy(n,void 0,{manifest:e,state:i,isStatic:r,onError:s})}function tS(n){At(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _T({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:r,static:s=!1,useTransitions:a}){At(!Hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=n.replace(/^\/*/,"/"),l=Y.useMemo(()=>({basename:o,navigator:r,static:s,useTransitions:a,future:{}}),[o,r,s,a]);typeof t=="string"&&(t=ho(t));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:p="default",mask:_}=t,v=Y.useMemo(()=>{let g=vr(u,o);return g==null?null:{location:{pathname:g,search:c,hash:d,state:f,key:p,mask:_},navigationType:i}},[o,u,c,d,f,p,i,_]);return qi(v!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:Y.createElement(pi.Provider,{value:l},Y.createElement(Vl.Provider,{children:e,value:v}))}function vT({children:n,location:e}){return rT(Fh(n),e)}function Fh(n,e=[]){let t=[];return Y.Children.forEach(n,(i,r)=>{if(!Y.isValidElement(i))return;let s=[...e,r];if(i.type===Y.Fragment){t.push.apply(t,Fh(i.props.children,s));return}At(i.type===tS,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),At(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Fh(i.props.children,s)),t.push(a)}),t}var Ju="get",ec="application/x-www-form-urlencoded";function pf(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function xT(n){return pf(n)&&n.tagName.toLowerCase()==="button"}function yT(n){return pf(n)&&n.tagName.toLowerCase()==="form"}function ST(n){return pf(n)&&n.tagName.toLowerCase()==="input"}function MT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ET(n,e){return n.button===0&&(!e||e==="_self")&&!MT(n)}var pu=null;function wT(){if(pu===null)try{new FormData(document.createElement("form"),0),pu=!1}catch{pu=!0}return pu}var TT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jf(n){return n!=null&&!TT.has(n)?(qi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ec}"`),null):n}function RT(n,e){let t,i,r,s,a;if(yT(n)){let o=n.getAttribute("action");i=o?vr(o,e):null,t=n.getAttribute("method")||Ju,r=Jf(n.getAttribute("enctype"))||ec,s=new FormData(n)}else if(xT(n)||ST(n)&&(n.type==="submit"||n.type==="image")){let o=n.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=n.getAttribute("formaction")||o.getAttribute("action");if(i=l?vr(l,e):null,t=n.getAttribute("formmethod")||o.getAttribute("method")||Ju,r=Jf(n.getAttribute("formenctype"))||Jf(o.getAttribute("enctype"))||ec,s=new FormData(o,n),!wT()){let{name:u,type:c,value:d}=n;if(c==="image"){let f=u?`${u}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else u&&s.append(u,d)}}else{if(pf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ju,i=null,r=ec,a=n}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:t.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function nS(n,e,t,i){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&vr(r.pathname,e)==="/"?r.pathname=`${Fc(e)}/_root.${i}`:r.pathname=`${Fc(r.pathname)}.${i}`,r}async function AT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function CT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function bT(n,e,t){let i=await Promise.all(n.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await AT(s,t);return a.links?a.links():[]}return[]}));return IT(i.flat(1).filter(CT).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Jg(n,e,t,i,r,s){let a=(l,u)=>t[u]?l.route.id!==t[u].route.id:!0,o=(l,u)=>{var c;return t[u].pathname!==l.pathname||((c=t[u].route.path)==null?void 0:c.endsWith("*"))&&t[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?e.filter((l,u)=>{var d;let c=i.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let f=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((d=t[0])==null?void 0:d.params)||{},nextUrl:new URL(n,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function PT(n,e,{includeHydrateFallback:t}={}){return LT(n.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),t&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function LT(n){return[...new Set(n)]}function DT(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function IT(n,e){let t=new Set;return new Set(e),n.reduce((i,r)=>{let s=JSON.stringify(DT(r));return t.has(s)||(t.add(s),i.push({key:s,link:r})),i},[])}function Hm(){let n=Y.useContext(po);return Vm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function NT(){let n=Y.useContext(hf);return Vm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Gm=Y.createContext(void 0);Gm.displayName="FrameworkContext";function mf(){let n=Y.useContext(Gm);return Vm(n,"You must render this element inside a <HydratedRouter> element"),n}function UT(n,e){let t=Y.useContext(Gm),[i,r]=Y.useState(!1),[s,a]=Y.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:d}=e,f=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let v=h=>{h.forEach(m=>{a(m.isIntersecting)})},g=new IntersectionObserver(v,{threshold:.5});return f.current&&g.observe(f.current),()=>{g.disconnect()}}},[n]),Y.useEffect(()=>{if(i){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),a(!1)};return t?n!=="intent"?[s,f,{}]:[s,f,{onFocus:Ao(o,p),onBlur:Ao(l,_),onMouseEnter:Ao(u,p),onMouseLeave:Ao(c,_),onTouchStart:Ao(d,p)}]:[!1,f,{}]}function Ao(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function FT({page:n,...e}){let t=qw(),{nonce:i}=mf(),{router:r}=Hm(),s=Y.useMemo(()=>Oy(r.routes,n,r.basename),[r.routes,n,r.basename]);return s?(e.nonce==null&&i&&(e={...e,nonce:i}),t?Y.createElement(kT,{page:n,matches:s,...e}):Y.createElement(BT,{page:n,matches:s,...e})):null}function OT(n){let{manifest:e,routeModules:t}=mf(),[i,r]=Y.useState([]);return Y.useEffect(()=>{let s=!1;return bT(n,e,t).then(a=>{s||r(a)}),()=>{s=!0}},[n,e,t]),i}function kT({page:n,matches:e,...t}){let i=Tr(),{future:r}=mf(),{basename:s}=Hm(),a=Y.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let o=nS(n,s,r.v8_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let c of e)typeof c.route.shouldRevalidate=="function"?l=!0:u.push(c.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,r.v8_trailingSlashAwareDataRequests,n,i,e]);return Y.createElement(Y.Fragment,null,a.map(o=>Y.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...t})))}function BT({page:n,matches:e,...t}){let i=Tr(),{future:r,manifest:s,routeModules:a}=mf(),{basename:o}=Hm(),{loaderData:l,matches:u}=NT(),c=Y.useMemo(()=>Jg(n,e,u,s,i,"data"),[n,e,u,s,i]),d=Y.useMemo(()=>Jg(n,e,u,s,i,"assets"),[n,e,u,s,i]),f=Y.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let v=new Set,g=!1;if(e.forEach(m=>{var S;let x=s.routes[m.route.id];!x||!x.hasLoader||(!c.some(M=>M.route.id===m.route.id)&&m.route.id in l&&((S=a[m.route.id])!=null&&S.shouldRevalidate)||x.hasClientLoader?g=!0:v.add(m.route.id))}),v.size===0)return[];let h=nS(n,o,r.v8_trailingSlashAwareDataRequests,"data");return g&&v.size>0&&h.searchParams.set("_routes",e.filter(m=>v.has(m.route.id)).map(m=>m.route.id).join(",")),[h.pathname+h.search]},[o,r.v8_trailingSlashAwareDataRequests,l,i,s,c,e,n,a]),p=Y.useMemo(()=>PT(d,s),[d,s]),_=OT(d);return Y.createElement(Y.Fragment,null,f.map(v=>Y.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...t})),p.map(v=>Y.createElement("link",{key:v,rel:"modulepreload",href:v,...t})),_.map(({key:v,link:g})=>Y.createElement("link",{key:v,nonce:t.nonce,...g,crossOrigin:g.crossOrigin??t.crossOrigin})))}function zT(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var VT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{VT&&(window.__reactRouterVersion="7.18.1")}catch{}function HT({basename:n,children:e,useTransitions:t,window:i}){let r=Y.useRef();r.current==null&&(r.current=yw({window:i,v5Compat:!0}));let s=r.current,[a,o]=Y.useState({action:s.action,location:s.location}),l=Y.useCallback(u=>{t===!1?o(u):Y.startTransition(()=>o(u))},[t]);return Y.useLayoutEffect(()=>s.listen(l),[s,l]),Y.createElement(_T,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:s,useTransitions:t})}var Wm=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,..._},v){let{basename:g,navigator:h,useTransitions:m}=Y.useContext(pi),x=typeof c=="string"&&Fm.test(c),S=Xy(c,g);c=S.to;let M=tT(c,{relative:r}),T=Tr(),w=null;if(o){let D=Om(o,[],T.mask?T.mask.pathname:"/",!0);g!=="/"&&(D.pathname=D.pathname==="/"?g:Ri([g,D.pathname])),w=h.createHref(D)}let[y,R,P]=UT(i,_),L=YT(c,{replace:a,mask:o,state:l,target:u,preventScrollReset:d,relative:r,viewTransition:f,defaultShouldRevalidate:p,useTransitions:m});function N(D){e&&e(D),D.defaultPrevented||L(D)}let H=!(S.isExternal||s),z=Y.createElement("a",{..._,...P,href:(H?w:void 0)||S.absoluteURL||M,onClick:H?N:e,ref:zT(v,R),target:u,"data-discover":!x&&t==="render"?"true":void 0});return y&&!x?Y.createElement(Y.Fragment,null,z,Y.createElement(FT,{page:M})):z});Wm.displayName="Link";var GT=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...u},c){let d=Gl(a,{relative:u.relative}),f=Tr(),p=Y.useContext(hf),{navigator:_,basename:v}=Y.useContext(pi),g=p!=null&&ZT(d)&&o===!0,h=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,m=f.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;t||(m=m.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&v&&(x=vr(x,v)||x);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let M=m===h||!r&&m.startsWith(h)&&m.charAt(S)==="/",T=x!=null&&(x===h||!r&&x.startsWith(h)&&x.charAt(h.length)==="/"),w={isActive:M,isPending:T,isTransitioning:g},y=M?e:void 0,R;typeof i=="function"?R=i(w):R=[i,M?"active":null,T?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let P=typeof s=="function"?s(w):s;return Y.createElement(Wm,{...u,"aria-current":y,className:R,ref:c,style:P,to:a,viewTransition:o},typeof l=="function"?l(w):l)});GT.displayName="NavLink";var WT=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:r,state:s,method:a=Ju,action:o,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f,...p},_)=>{let{useTransitions:v}=Y.useContext(pi),g=KT(),h=jT(o,{relative:u}),m=a.toLowerCase()==="get"?"get":"post",x=typeof o=="string"&&Fm.test(o),S=M=>{if(l&&l(M),M.defaultPrevented)return;M.preventDefault();let T=M.nativeEvent.submitter,w=(T==null?void 0:T.getAttribute("formmethod"))||a,y=()=>g(T||M.currentTarget,{fetcherKey:e,method:w,navigate:t,replace:r,state:s,relative:u,preventScrollReset:c,viewTransition:d,defaultShouldRevalidate:f});v&&t!==!1?Y.startTransition(()=>y()):y()};return Y.createElement("form",{ref:_,method:m,action:h,onSubmit:i?l:S,...p,"data-discover":!x&&n==="render"?"true":void 0})});WT.displayName="Form";function XT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iS(n){let e=Y.useContext(po);return At(e,XT(n)),e}function YT(n,{target:e,replace:t,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let c=nT(),d=Tr(),f=Gl(n,{relative:a});return Y.useCallback(p=>{if(ET(p,e)){p.preventDefault();let _=t!==void 0?t:El(d)===El(f),v=()=>c(n,{replace:_,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?Y.startTransition(()=>v()):v()}},[d,c,f,t,i,r,e,n,s,a,o,l,u])}var $T=0,qT=()=>`__${String(++$T)}__`;function KT(){let{router:n}=iS("useSubmit"),{basename:e}=Y.useContext(pi),t=hT(),i=n.fetch,r=n.navigate;return Y.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:c,body:d}=RT(s,e);if(a.navigate===!1){let f=a.fetcherKey||qT();await i(f,t,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await r(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,r,e,t])}function jT(n,{relative:e}={}){let{basename:t}=Y.useContext(pi),i=Y.useContext(wr);At(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Gl(n||".",{relative:e})},a=Tr();if(n==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(c=>c==="")){o.delete("index"),l.filter(d=>d).forEach(d=>o.append("index",d));let c=o.toString();s.search=c?`?${c}`:""}}return(!n||n===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(s.pathname=s.pathname==="/"?t:Ri([t,s.pathname])),El(s)}function ZT(n,{relative:e}={}){let t=Y.useContext(qy);At(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=iS("useViewTransitionState"),r=Gl(n,{relative:e});if(!t.isTransitioning)return!1;let s=vr(t.currentLocation.pathname,i)||t.currentLocation.pathname,a=vr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Uc(r.pathname,a)!=null||Uc(r.pathname,s)!=null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xm="185",QT=0,e_=1,JT=2,tc=1,eR=2,zo=3,os=0,bn=1,ki=2,fr=0,Va=1,t_=2,n_=3,i_=4,tR=5,Cs=100,nR=101,iR=102,rR=103,sR=104,aR=200,oR=201,lR=202,uR=203,Oh=204,kh=205,cR=206,fR=207,dR=208,hR=209,pR=210,mR=211,gR=212,_R=213,vR=214,Bh=0,zh=1,Vh=2,eo=3,Hh=4,Gh=5,Wh=6,Xh=7,rS=0,xR=1,yR=2,Xi=0,sS=1,aS=2,oS=3,lS=4,uS=5,cS=6,fS=7,dS=300,$s=301,to=302,ed=303,td=304,gf=306,Yh=1e3,ur=1001,$h=1002,Jt=1003,SR=1004,mu=1005,fn=1006,nd=1007,Is=1008,oi=1009,hS=1010,pS=1011,wl=1012,Ym=1013,Ki=1014,zi=1015,xr=1016,$m=1017,qm=1018,Tl=1020,mS=35902,gS=35899,_S=1021,vS=1022,Ei=1023,yr=1026,Ns=1027,xS=1028,Km=1029,qs=1030,jm=1031,Zm=1033,nc=33776,ic=33777,rc=33778,sc=33779,qh=35840,Kh=35841,jh=35842,Zh=35843,Qh=36196,Jh=37492,ep=37496,tp=37488,np=37489,Oc=37490,ip=37491,rp=37808,sp=37809,ap=37810,op=37811,lp=37812,up=37813,cp=37814,fp=37815,dp=37816,hp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,xp=36494,yp=36495,Sp=36283,Mp=36284,kc=36285,Ep=36286,MR=3200,r_=0,ER=1,Hr="",vn="srgb",Bc="srgb-linear",zc="linear",st="srgb",ia=7680,s_=519,wR=512,TR=513,RR=514,Qm=515,AR=516,CR=517,Jm=518,bR=519,a_=35044,o_="300 es",Vi=2e3,Vc=2001;function PR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LR(){const n=Rl("canvas");return n.style.display="block",n}const l_={};function u_(...n){const e="THREE."+n.shift();console.log(e,...n)}function yS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=yS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=yS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ha(...n){const e=n.join(" ");e in l_||(l_[e]=!0,Oe(...n))}function DR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const IR={[Bh]:zh,[Vh]:Wh,[Hh]:Xh,[eo]:Gh,[zh]:Bh,[Wh]:Vh,[Xh]:Hh,[Gh]:eo};class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let c_=1234567;const el=Math.PI/180,Al=180/Math.PI;function mo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function e0(n,e){return(n%e+e)%e}function NR(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function UR(n,e,t){return n!==e?(t-n)/(e-n):0}function tl(n,e,t){return(1-t)*n+t*e}function FR(n,e,t,i){return tl(n,e,1-Math.exp(-t*i))}function OR(n,e=1){return e-Math.abs(e0(n,e*2)-e)}function kR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function BR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function VR(n,e){return n+Math.random()*(e-n)}function HR(n){return n*(.5-Math.random())}function GR(n){n!==void 0&&(c_=n);let e=c_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WR(n){return n*el}function XR(n){return n*Al}function YR(n){return(n&n-1)===0&&n!==0}function $R(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function KR(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*d,l*f,o*u);break;case"YZY":n.set(l*f,o*c,l*d,o*u);break;case"ZXZ":n.set(l*d,l*f,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*p,o*c,o*u);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const f_={DEG2RAD:el,RAD2DEG:Al,generateUUID:mo,clamp:$e,euclideanModulo:e0,mapLinear:NR,inverseLerp:UR,lerp:tl,damp:FR,pingpong:OR,smoothstep:kR,smootherstep:BR,randInt:zR,randFloat:VR,randFloatSpread:HR,seededRandom:GR,degToRad:WR,radToDeg:XR,isPowerOfTwo:YR,ceilPowerOfTwo:$R,floorPowerOfTwo:qR,setQuaternionFromProperEuler:KR,normalize:mn,denormalize:xa},T0=class T0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};T0.prototype.isVector2=!0;let qe=T0;class go{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(d!==v||l!==f||u!==p||c!==_){let g=l*f+u*p+c*_+d*v;g<0&&(f=-f,p=-p,_=-_,v=-v,g=-g);let h=1-o;if(g<.9995){const m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+v*o}else{l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+v*o;const m=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=m,u*=m,c*=m,d*=m}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-o*p,e[t+2]=u*_+c*p+o*f-l*d,e[t+3]=c*_-o*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const R0=class R0{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(d_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(d_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};R0.prototype.isVector3=!0;let Z=R0;const id=new Z,d_=new go,A0=class A0{constructor(e,t,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],g=r[3],h=r[6],m=r[1],x=r[4],S=r[7],M=r[2],T=r[5],w=r[8];return s[0]=a*v+o*m+l*M,s[3]=a*g+o*x+l*T,s[6]=a*h+o*S+l*w,s[1]=u*v+c*m+d*M,s[4]=u*g+c*x+d*T,s[7]=u*h+c*S+d*w,s[2]=f*v+p*m+_*M,s[5]=f*g+p*x+_*T,s[8]=f*h+p*S+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,p=u*s-a*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rd.makeScale(e,t)),this}rotate(e){return Ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rd.makeRotation(-e)),this}translate(e,t){return Ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};A0.prototype.isMatrix3=!0;let ze=A0;const rd=new ze,h_=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jR(){const n={enabled:!0,workingColorSpace:Bc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Ga(r.r),r.g=Ga(r.g),r.b=Ga(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hr?zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bc]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:h_,fromXYZ:p_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}const Ke=jR();function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ra;class ZR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ra===void 0&&(ra=Rl("canvas")),ra.width=e.width,ra.height=e.height;const r=ra.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ra}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=dr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QR=0;class t0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QR++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sd(r[a].image)):s.push(sd(r[a]))}else s=sd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function sd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ZR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let JR=0;const ad=new Z;class dn extends Qs{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=ur,r=ur,s=fn,a=Is,o=Ei,l=oi,u=dn.DEFAULT_ANISOTROPY,c=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=mo(),this.name="",this.source=new t0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case $h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case $h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=dS;dn.DEFAULT_ANISOTROPY=1;const C0=class C0{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,M=(h+1)/2,T=(c+f)/4,w=(d+v)/4,y=(_+g)/4;return x>S&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=w/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=w/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-v)/m,this.z=(f-c)/m,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};C0.prototype.isVector4=!0;let Dt=C0;class eA extends Qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new dn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new t0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends eA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class SS extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tA extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=class Kc{constructor(e,t,i,r,s,a,o,l,u,c,d,f,p,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,d,f,p,_,v,g)}set(e,t,i,r,s,a,o,l,u,c,d,f,p,_,v,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/sa.setFromMatrixColumn(e,0).length(),s=1/sa.setFromMatrixColumn(e,1).length(),a=1/sa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*d,_=o*c,v=o*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-v*u,t[9]=-o*l,t[2]=v-f*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,v=u*d;t[0]=f+v*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,v=u*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=v-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*d,_=o*c,v=o*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+v,t[1]=l*d,t[5]=v*u+f,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,p=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+v,t[5]=a*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nA,e,iA)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Dr.crossVectors(i,On),Dr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Dr.crossVectors(i,On)),Dr.normalize(),gu.crossVectors(On,Dr),r[0]=Dr.x,r[4]=gu.x,r[8]=On.x,r[1]=Dr.y,r[5]=gu.y,r[9]=On.y,r[2]=Dr.z,r[6]=gu.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],g=i[10],h=i[14],m=i[3],x=i[7],S=i[11],M=i[15],T=r[0],w=r[4],y=r[8],R=r[12],P=r[1],L=r[5],N=r[9],H=r[13],z=r[2],D=r[6],X=r[10],k=r[14],U=r[3],$=r[7],ee=r[11],ne=r[15];return s[0]=a*T+o*P+l*z+u*U,s[4]=a*w+o*L+l*D+u*$,s[8]=a*y+o*N+l*X+u*ee,s[12]=a*R+o*H+l*k+u*ne,s[1]=c*T+d*P+f*z+p*U,s[5]=c*w+d*L+f*D+p*$,s[9]=c*y+d*N+f*X+p*ee,s[13]=c*R+d*H+f*k+p*ne,s[2]=_*T+v*P+g*z+h*U,s[6]=_*w+v*L+g*D+h*$,s[10]=_*y+v*N+g*X+h*ee,s[14]=_*R+v*H+g*k+h*ne,s[3]=m*T+x*P+S*z+M*U,s[7]=m*w+x*L+S*D+M*$,s[11]=m*y+x*N+S*X+M*ee,s[15]=m*R+x*H+S*k+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],h=e[15],m=l*p-u*f,x=o*p-u*d,S=o*f-l*d,M=a*p-u*c,T=a*f-l*c,w=a*d-o*c;return t*(v*m-g*x+h*S)-i*(_*m-g*M+h*T)+r*(_*x-v*M+h*w)-s*(_*S-v*T+g*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],c=e[10];return t*(a*c-o*u)-i*(s*c-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],h=e[15],m=t*o-i*a,x=t*l-r*a,S=t*u-s*a,M=i*l-r*o,T=i*u-s*o,w=r*u-s*l,y=c*v-d*_,R=c*g-f*_,P=c*h-p*_,L=d*g-f*v,N=d*h-p*v,H=f*h-p*g,z=m*H-x*N+S*L+M*P-T*R+w*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/z;return e[0]=(o*H-l*N+u*L)*D,e[1]=(r*N-i*H-s*L)*D,e[2]=(v*w-g*T+h*M)*D,e[3]=(f*T-d*w-p*M)*D,e[4]=(l*P-a*H-u*R)*D,e[5]=(t*H-r*P+s*R)*D,e[6]=(g*S-_*w-h*x)*D,e[7]=(c*w-f*S+p*x)*D,e[8]=(a*N-o*P+u*y)*D,e[9]=(i*P-t*N-s*y)*D,e[10]=(_*T-v*S+h*m)*D,e[11]=(d*S-c*T-p*m)*D,e[12]=(o*R-a*L-l*y)*D,e[13]=(t*L-i*R+r*y)*D,e[14]=(v*x-_*M-g*m)*D,e[15]=(c*M-d*x+f*m)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,d=o+o,f=s*u,p=s*c,_=s*d,v=a*c,g=a*d,h=o*d,m=l*u,x=l*c,S=l*d,M=i.x,T=i.y,w=i.z;return r[0]=(1-(v+h))*M,r[1]=(p+S)*M,r[2]=(_-x)*M,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(_+x)*w,r[9]=(g-m)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=sa.set(r[0],r[1],r[2]).length();const o=sa.set(r[4],r[5],r[6]).length(),l=sa.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gi.copy(this);const u=1/a,c=1/o,d=1/l;return gi.elements[0]*=u,gi.elements[1]*=u,gi.elements[2]*=u,gi.elements[4]*=c,gi.elements[5]*=c,gi.elements[6]*=c,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,t.setFromRotationMatrix(gi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Vi,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===Vi)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Vc)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Vi,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===Vi)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===Vc)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Kc.prototype.isMatrix4=!0;let Gt=Kc;const sa=new Z,gi=new Gt,nA=new Z(0,0,0),iA=new Z(1,1,1),Dr=new Z,gu=new Z,On=new Z,m_=new Gt,g_=new go;class Ks{constructor(e=0,t=0,i=0,r=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class MS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rA=0;const __=new Z,aa=new go,Zi=new Gt,_u=new Z,Co=new Z,sA=new Z,aA=new go,v_=new Z(1,0,0),x_=new Z(0,1,0),y_=new Z(0,0,1),S_={type:"added"},oA={type:"removed"},oa={type:"childadded",child:null},od={type:"childremoved",child:null};class Pn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Z,t=new Ks,i=new go,r=new Z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ze}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new MS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(x_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,t){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(x_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_u.copy(e):_u.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Co,_u,this.up):Zi.lookAt(_u,Co,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),aa.setFromRotationMatrix(Zi),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),oa.child=e,this.dispatchEvent(oa),oa.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oA),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,sA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,aA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new Z(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lA={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),h=this._getHandJoint(u,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ES={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},vu={h:0,s:0,l:0};function ud(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=e0(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ud(a,s,e+1/3),this.g=ud(a,s,e),this.b=ud(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=ES[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Ke.workingToColorSpace(ln.copy(this),e),Math.round($e(ln.r*255,0,255))*65536+Math.round($e(ln.g*255,0,255))*256+Math.round($e(ln.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=vn){Ke.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(vu);const i=tl(Ir.h,vu.h,t),r=tl(Ir.s,vu.s,t),s=tl(Ir.l,vu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new tt;tt.NAMES=ES;class n0{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new n0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wS extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ks,this.environmentIntensity=1,this.environmentRotation=new Ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new Z,Qi=new Z,cd=new Z,Ji=new Z,la=new Z,ua=new Z,M_=new Z,fd=new Z,dd=new Z,hd=new Z,pd=new Dt,md=new Dt,gd=new Dt;class Mi{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_i.subVectors(e,t),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_i.subVectors(r,t),Qi.subVectors(i,t),cd.subVectors(e,t);const a=_i.dot(_i),o=_i.dot(Qi),l=_i.dot(cd),u=Qi.dot(Qi),c=Qi.dot(cd),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-o*c)*f,_=(a*c-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(a,Ji.y),l.addScaledVector(o,Ji.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,t),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pd,s.x),a.addScaledVector(md,s.y),a.addScaledVector(gd,s.z),a}static isFrontFacing(e,t,i,r){return _i.subVectors(i,t),Qi.subVectors(e,t),_i.cross(Qi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;la.subVectors(r,i),ua.subVectors(s,i),fd.subVectors(e,i);const l=la.dot(fd),u=ua.dot(fd);if(l<=0&&u<=0)return t.copy(i);dd.subVectors(e,r);const c=la.dot(dd),d=ua.dot(dd);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(la,a);hd.subVectors(e,s);const p=la.dot(hd),_=ua.dot(hd);if(_>=0&&p<=_)return t.copy(s);const v=p*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(ua,o);const g=c*_-p*d;if(g<=0&&d-c>=0&&p-_>=0)return M_.subVectors(s,r),o=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(M_,o);const h=1/(g+v+f);return a=v*h,o=f*h,t.copy(i).addScaledVector(la,a).addScaledVector(ua,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wl{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(s,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xu.copy(i.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),yu.subVectors(this.max,bo),ca.subVectors(e.a,bo),fa.subVectors(e.b,bo),da.subVectors(e.c,bo),Nr.subVectors(fa,ca),Ur.subVectors(da,fa),_s.subVectors(ca,da);let t=[0,-Nr.z,Nr.y,0,-Ur.z,Ur.y,0,-_s.z,_s.y,Nr.z,0,-Nr.x,Ur.z,0,-Ur.x,_s.z,0,-_s.x,-Nr.y,Nr.x,0,-Ur.y,Ur.x,0,-_s.y,_s.x,0];return!_d(t,ca,fa,da,yu)||(t=[1,0,0,0,1,0,0,0,1],!_d(t,ca,fa,da,yu))?!1:(Su.crossVectors(Nr,Ur),t=[Su.x,Su.y,Su.z],_d(t,ca,fa,da,yu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],vi=new Z,xu=new Wl,ca=new Z,fa=new Z,da=new Z,Nr=new Z,Ur=new Z,_s=new Z,bo=new Z,yu=new Z,Su=new Z,vs=new Z;function _d(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vs.fromArray(n,s);const o=r.x*Math.abs(vs.x)+r.y*Math.abs(vs.y)+r.z*Math.abs(vs.z),l=e.dot(vs),u=t.dot(vs),c=i.dot(vs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const zt=new Z,Mu=new qe;let uA=0;class $i extends Qs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=a_,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mu.fromBufferAttribute(this,t),Mu.applyMatrix3(e),this.setXY(t,Mu.x,Mu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==a_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class TS extends $i{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class RS extends $i{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hr extends $i{constructor(e,t,i){super(new Float32Array(e),t,i)}}const cA=new Wl,Po=new Z,vd=new Z;class i0{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(vd)),this.expandByPoint(Po.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fA=0;const ei=new Gt,xd=new Pn,ha=new Z,kn=new Wl,Lo=new Wl,qt=new Z;class Rr extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PR(e)?RS:TS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ha).negate(),this.translate(ha.x,ha.y,ha.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new i0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Lo.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(kn.min,Lo.min),kn.expandByPoint(qt),qt.addVectors(kn.max,Lo.max),kn.expandByPoint(qt)):(kn.expandByPoint(Lo.min),kn.expandByPoint(Lo.max))}kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)qt.fromBufferAttribute(o,u),l&&(ha.fromBufferAttribute(e,u),qt.add(ha)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $i(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new Z,l[y]=new Z;const u=new Z,c=new Z,d=new Z,f=new qe,p=new qe,_=new qe,v=new Z,g=new Z;function h(y,R,P){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),_.fromBufferAttribute(s,P),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(L),o[y].add(v),o[R].add(v),o[P].add(v),l[y].add(g),l[R].add(g),l[P].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,R=m.length;y<R;++y){const P=m[y],L=P.start,N=P.count;for(let H=L,z=L+N;H<z;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new Z,S=new Z,M=new Z,T=new Z;function w(y){M.fromBufferAttribute(r,y),T.copy(M);const R=o[y];x.copy(R),x.sub(M.multiplyScalar(M.dot(R))).normalize(),S.crossVectors(T,R);const L=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,L)}for(let y=0,R=m.length;y<R;++y){const P=m[y],L=P.start,N=P.count;for(let H=L,z=L+N;H<z;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,u=new Z,c=new Z,d=new Z;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new $i(f,c,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dA=0;class _f extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Va,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=kh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Va&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tr=new Z,yd=new Z,Eu=new Z,Fr=new Z,Sd=new Z,wu=new Z,Md=new Z;class hA{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yd.copy(e).add(t).multiplyScalar(.5),Eu.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(yd);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Eu),o=Fr.dot(this.direction),l=-Fr.dot(Eu),u=Fr.lengthSq(),c=Math.abs(1-a*a);let d,f,p,_;if(c>0)if(d=a*l-o,f=a*o-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const v=1/c;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yd).addScaledVector(Eu,f),p}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const i=tr.dot(this.direction),r=tr.dot(tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,i,r,s){Sd.subVectors(t,e),wu.subVectors(i,e),Md.crossVectors(Sd,wu);let a=this.direction.dot(Md),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fr.subVectors(this.origin,e);const l=o*this.direction.dot(wu.crossVectors(Fr,wu));if(l<0)return null;const u=o*this.direction.dot(Sd.cross(Fr));if(u<0||l+u>a)return null;const c=-o*Fr.dot(Md);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class r0 extends _f{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ks,this.combine=rS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const E_=new Gt,xs=new hA,Tu=new i0,w_=new Z,Ru=new Z,Au=new Z,Cu=new Z,Ed=new Z,bu=new Z,T_=new Z,Pu=new Z;class Ci extends Pn{constructor(e=new Rr,t=new r0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(Ed.fromBufferAttribute(d,e),a?bu.addScaledVector(Ed,c):bu.addScaledVector(Ed.sub(t),c))}t.add(bu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tu.copy(i.boundingSphere),Tu.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(Tu.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Tu,w_)===null||xs.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(E_.copy(s).invert(),xs.copy(e.ray).applyMatrix4(E_),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],h=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,M=x;S<M;S+=3){const T=o.getX(S),w=o.getX(S+1),y=o.getX(S+2);r=Lu(this,h,e,i,u,c,d,T,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const m=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);r=Lu(this,a,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const g=f[_],h=a[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,M=x;S<M;S+=3){const T=S,w=S+1,y=S+2;r=Lu(this,h,e,i,u,c,d,T,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,h=v;g<h;g+=3){const m=g,x=g+1,S=g+2;r=Lu(this,a,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function pA(n,e,t,i,r,s,a,o){let l;if(e.side===bn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===os,o),l===null)return null;Pu.copy(o),Pu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Pu);return u<t.near||u>t.far?null:{distance:u,point:Pu.clone(),object:n}}function Lu(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Ru),n.getVertexPosition(l,Au),n.getVertexPosition(u,Cu);const c=pA(n,e,t,i,Ru,Au,Cu,T_);if(c){const d=new Z;Mi.getBarycoord(T_,Ru,Au,Cu,d),r&&(c.uv=Mi.getInterpolatedAttribute(r,o,l,u,d,new qe)),s&&(c.uv1=Mi.getInterpolatedAttribute(s,o,l,u,d,new qe)),a&&(c.normal=Mi.getInterpolatedAttribute(a,o,l,u,d,new Z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new Z,materialIndex:0};Mi.getNormal(Ru,Au,Cu,f.normal),c.face=f,c.barycoord=d}return c}class mA extends dn{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Jt,c=Jt,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new Z,gA=new Z,_A=new ze;class Ts{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wd.subVectors(i,t).cross(gA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(wd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_A.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new i0,vA=new qe(.5,.5),Du=new Z;class AS{constructor(e=new Ts,t=new Ts,i=new Ts,r=new Ts,s=new Ts,a=new Ts){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],_=s[8],v=s[9],g=s[10],h=s[11],m=s[12],x=s[13],S=s[14],M=s[15];if(r[0].setComponents(u-a,p-c,h-_,M-m).normalize(),r[1].setComponents(u+a,p+c,h+_,M+m).normalize(),r[2].setComponents(u+o,p+d,h+v,M+x).normalize(),r[3].setComponents(u-o,p-d,h-v,M-x).normalize(),i)r[4].setComponents(l,f,g,S).normalize(),r[5].setComponents(u-l,p-f,h-g,M-S).normalize();else if(r[4].setComponents(u-l,p-f,h-g,M-S).normalize(),t===Vi)r[5].setComponents(u+l,p+f,h+g,M+S).normalize();else if(t===Vc)r[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const t=vA.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Du.x=r.normal.x>0?e.max.x:e.min.x,Du.y=r.normal.y>0?e.max.y:e.min.y,Du.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CS extends dn{constructor(e=[],t=$s,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class no extends dn{constructor(e,t,i=Ki,r,s,a,o=Jt,l=Jt,u,c=yr,d=1){if(c!==yr&&c!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new t0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xA extends no{constructor(e,t=Ki,i=$s,r,s,a=Jt,o=Jt,l,u=yr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bS extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xl extends Rr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(u,3)),this.setAttribute("normal",new hr(c,3)),this.setAttribute("uv",new hr(d,2));function _(v,g,h,m,x,S,M,T,w,y,R){const P=S/w,L=M/y,N=S/2,H=M/2,z=T/2,D=w+1,X=y+1;let k=0,U=0;const $=new Z;for(let ee=0;ee<X;ee++){const ne=ee*L-H;for(let se=0;se<D;se++){const ke=se*P-N;$[v]=ke*m,$[g]=ne*x,$[h]=z,u.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[h]=T>0?1:-1,c.push($.x,$.y,$.z),d.push(se/w),d.push(1-ee/y),k+=1}}for(let ee=0;ee<y;ee++)for(let ne=0;ne<w;ne++){const se=f+ne+D*ee,ke=f+ne+D*(ee+1),be=f+(ne+1)+D*(ee+1),Ue=f+(ne+1)+D*ee;l.push(se,ke,Ue),l.push(ke,be,Ue),U+=6}o.addGroup(p,U,R),p+=U,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _o extends Rr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=t/l,p=[],_=[],v=[],g=[];for(let h=0;h<c;h++){const m=h*f-a;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-m,0),v.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){const x=m+u*h,S=m+u*(h+1),M=m+1+u*(h+1),T=m+1+u*h;p.push(x,S,T),p.push(S,M,T)}this.setIndex(p),this.setAttribute("position",new hr(_,3)),this.setAttribute("normal",new hr(v,3)),this.setAttribute("uv",new hr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}function io(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(R_(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(R_(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=io(n[t]);for(const r in i)e[r]=i[r]}return e}function R_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function yA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function PS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const SA={clone:io,merge:gn};var MA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends _f{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MA,this.fragmentShader=EA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=yA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Gt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wA extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class TA extends _f{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RA extends _f{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(A_(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!A_(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function A_(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class AA{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const CA=new AA;class s0{constructor(e){this.manager=e!==void 0?e:CA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}s0.DEFAULT_MATERIAL_NAME="__DEFAULT";const pa=new WeakMap;class bA extends s0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Td.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=pa.get(a);d===void 0&&(d=[],pa.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=Rl("img");function l(){c(),t&&t(this);const d=pa.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}pa.delete(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),Td.remove(`image:${e}`);const f=pa.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(d)}pa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Td.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class PA extends s0{constructor(e){super(e)}load(e,t,i,r){const s=new dn,a=new bA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class LA extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Iu=new Z,Nu=new go,Di=new Z;class LS extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Iu,Nu,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Nu,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Iu,Nu,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Nu,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Or=new Z,C_=new qe,b_=new qe;class ai extends LS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,C_,b_),t.subVectors(b_,C_)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class a0 extends LS{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class DA extends LA{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ma=-90,ga=1;class IA extends Pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ai(ma,ga,e,t);r.layers=this.layers,this.add(r);const s=new ai(ma,ga,e,t);s.layers=this.layers,this.add(s);const a=new ai(ma,ga,e,t);a.layers=this.layers,this.add(a);const o=new ai(ma,ga,e,t);o.layers=this.layers,this.add(o);const l=new ai(ma,ga,e,t);l.layers=this.layers,this.add(l);const u=new ai(ma,ga,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class NA extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class DS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const b0=class b0{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};b0.prototype.isMatrix2=!0;let P_=b0;function L_(n,e,t,i){const r=UA(i);switch(t){case _S:return n*e;case xS:return n*e/r.components*r.byteLength;case Km:return n*e/r.components*r.byteLength;case qs:return n*e*2/r.components*r.byteLength;case jm:return n*e*2/r.components*r.byteLength;case vS:return n*e*3/r.components*r.byteLength;case Ei:return n*e*4/r.components*r.byteLength;case Zm:return n*e*4/r.components*r.byteLength;case nc:case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Zh:return Math.max(n,16)*Math.max(e,8)/4;case qh:case jh:return Math.max(n,8)*Math.max(e,8)/2;case Qh:case Jh:case tp:case np:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ep:case Oc:case ip:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case op:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vp:case xp:case yp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sp:case Mp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kc:case Ep:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function UA(n){switch(n){case oi:case hS:return{byteLength:1,components:1};case wl:case pS:case xr:return{byteLength:2,components:1};case $m:case qm:return{byteLength:2,components:4};case Ki:case Ym:case zi:return{byteLength:4,components:1};case mS:case gS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xm}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function IS(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function FA(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,o),d.length===0)n.bufferSubData(u,0,c);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var OA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kA=`#ifdef USE_ALPHAHASH
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
#endif`,BA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GA=`#ifdef USE_AOMAP
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
#endif`,WA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XA=`#ifdef USE_BATCHING
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
#endif`,YA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jA=`#ifdef USE_IRIDESCENCE
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
#endif`,ZA=`#ifdef USE_BUMPMAP
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
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,aC=`#define PI 3.141592653589793
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
} // validated`,oC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lC=`vec3 transformedNormal = objectNormal;
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
#endif`,uC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hC="gl_FragColor = linearToOutputTexel( gl_FragColor );",pC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mC=`#ifdef USE_ENVMAP
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
#endif`,gC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_C=`#ifdef USE_ENVMAP
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
#endif`,vC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xC=`#ifdef USE_ENVMAP
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
#endif`,yC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wC=`#ifdef USE_GRADIENTMAP
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
}`,TC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bC=`#ifdef USE_ENVMAP
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
#endif`,PC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NC=`PhysicalMaterial material;
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
#endif`,UC=`uniform sampler2D dfgLUT;
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
}`,FC=`
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
#endif`,OC=`#if defined( RE_IndirectDiffuse )
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
#endif`,kC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$C=`#if defined( USE_POINTS_UV )
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
#endif`,qC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JC=`#ifdef USE_MORPHTARGETS
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
#endif`,e2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a2=`#ifdef USE_NORMALMAP
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
#endif`,o2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M2=`float getShadowMask() {
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
}`,E2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w2=`#ifdef USE_SKINNING
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
#endif`,T2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R2=`#ifdef USE_SKINNING
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
#endif`,A2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L2=`#ifdef USE_TRANSMISSION
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
#endif`,D2=`#ifdef USE_TRANSMISSION
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k2=`uniform sampler2D t2D;
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
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G2=`#include <common>
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
}`,W2=`#if DEPTH_PACKING == 3200
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
}`,X2=`#define DISTANCE
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
}`,Y2=`#define DISTANCE
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
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`uniform float scale;
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
}`,j2=`uniform vec3 diffuse;
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
}`,Z2=`#include <common>
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
}`,Q2=`uniform vec3 diffuse;
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
}`,J2=`#define LAMBERT
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
}`,eb=`#define LAMBERT
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
}`,tb=`#define MATCAP
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
}`,nb=`#define MATCAP
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
}`,ib=`#define NORMAL
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
}`,rb=`#define NORMAL
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
}`,sb=`#define PHONG
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
}`,ab=`#define PHONG
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
}`,ob=`#define STANDARD
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
}`,lb=`#define STANDARD
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
}`,ub=`#define TOON
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
}`,cb=`#define TOON
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
}`,fb=`uniform float size;
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
}`,db=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,pb=`uniform vec3 color;
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
}`,mb=`uniform float rotation;
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
}`,gb=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:OA,alphahash_pars_fragment:kA,alphamap_fragment:BA,alphamap_pars_fragment:zA,alphatest_fragment:VA,alphatest_pars_fragment:HA,aomap_fragment:GA,aomap_pars_fragment:WA,batching_pars_vertex:XA,batching_vertex:YA,begin_vertex:$A,beginnormal_vertex:qA,bsdfs:KA,iridescence_fragment:jA,bumpmap_pars_fragment:ZA,clipping_planes_fragment:QA,clipping_planes_pars_fragment:JA,clipping_planes_pars_vertex:eC,clipping_planes_vertex:tC,color_fragment:nC,color_pars_fragment:iC,color_pars_vertex:rC,color_vertex:sC,common:aC,cube_uv_reflection_fragment:oC,defaultnormal_vertex:lC,displacementmap_pars_vertex:uC,displacementmap_vertex:cC,emissivemap_fragment:fC,emissivemap_pars_fragment:dC,colorspace_fragment:hC,colorspace_pars_fragment:pC,envmap_fragment:mC,envmap_common_pars_fragment:gC,envmap_pars_fragment:_C,envmap_pars_vertex:vC,envmap_physical_pars_fragment:bC,envmap_vertex:xC,fog_vertex:yC,fog_pars_vertex:SC,fog_fragment:MC,fog_pars_fragment:EC,gradientmap_pars_fragment:wC,lightmap_pars_fragment:TC,lights_lambert_fragment:RC,lights_lambert_pars_fragment:AC,lights_pars_begin:CC,lights_toon_fragment:PC,lights_toon_pars_fragment:LC,lights_phong_fragment:DC,lights_phong_pars_fragment:IC,lights_physical_fragment:NC,lights_physical_pars_fragment:UC,lights_fragment_begin:FC,lights_fragment_maps:OC,lights_fragment_end:kC,lightprobes_pars_fragment:BC,logdepthbuf_fragment:zC,logdepthbuf_pars_fragment:VC,logdepthbuf_pars_vertex:HC,logdepthbuf_vertex:GC,map_fragment:WC,map_pars_fragment:XC,map_particle_fragment:YC,map_particle_pars_fragment:$C,metalnessmap_fragment:qC,metalnessmap_pars_fragment:KC,morphinstance_vertex:jC,morphcolor_vertex:ZC,morphnormal_vertex:QC,morphtarget_pars_vertex:JC,morphtarget_vertex:e2,normal_fragment_begin:t2,normal_fragment_maps:n2,normal_pars_fragment:i2,normal_pars_vertex:r2,normal_vertex:s2,normalmap_pars_fragment:a2,clearcoat_normal_fragment_begin:o2,clearcoat_normal_fragment_maps:l2,clearcoat_pars_fragment:u2,iridescence_pars_fragment:c2,opaque_fragment:f2,packing:d2,premultiplied_alpha_fragment:h2,project_vertex:p2,dithering_fragment:m2,dithering_pars_fragment:g2,roughnessmap_fragment:_2,roughnessmap_pars_fragment:v2,shadowmap_pars_fragment:x2,shadowmap_pars_vertex:y2,shadowmap_vertex:S2,shadowmask_pars_fragment:M2,skinbase_vertex:E2,skinning_pars_vertex:w2,skinning_vertex:T2,skinnormal_vertex:R2,specularmap_fragment:A2,specularmap_pars_fragment:C2,tonemapping_fragment:b2,tonemapping_pars_fragment:P2,transmission_fragment:L2,transmission_pars_fragment:D2,uv_pars_fragment:I2,uv_pars_vertex:N2,uv_vertex:U2,worldpos_vertex:F2,background_vert:O2,background_frag:k2,backgroundCube_vert:B2,backgroundCube_frag:z2,cube_vert:V2,cube_frag:H2,depth_vert:G2,depth_frag:W2,distance_vert:X2,distance_frag:Y2,equirect_vert:$2,equirect_frag:q2,linedashed_vert:K2,linedashed_frag:j2,meshbasic_vert:Z2,meshbasic_frag:Q2,meshlambert_vert:J2,meshlambert_frag:eb,meshmatcap_vert:tb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:rb,meshphong_vert:sb,meshphong_frag:ab,meshphysical_vert:ob,meshphysical_frag:lb,meshtoon_vert:ub,meshtoon_frag:cb,points_vert:fb,points_frag:db,shadow_vert:hb,shadow_frag:pb,sprite_vert:mb,sprite_frag:gb},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Fi={basic:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:gn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:gn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:gn([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:gn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:gn([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:gn([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:gn([ye.common,ye.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:gn([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Fi.physical={uniforms:gn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Uu={r:0,b:0,g:0},_b=new Gt,NS=new ze;NS.set(-1,0,0,0,1,0,0,0,1);function vb(n,e,t,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,u,c=null,d=0,f=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function _(m){let x=!1;const S=p(m);S===null?g(a,o):S&&S.isColor&&(g(S,1),x=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(m,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===gf)?(u===void 0&&(u=new Ci(new Xl(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:io(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(NS),u.material.toneMapped=Ke.getTransfer(S.colorSpace)!==st,(c!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ci(new _o(2,2),new bi({name:"BackgroundMaterial",uniforms:io(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Uu,PS(n)),t.buffers.color.setClear(Uu.r,Uu.g,Uu.b,x,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),o=x,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:_,addToRenderList:v,dispose:h}}function xb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,N,H,z,D){let X=!1;const k=d(L,z,H,N);s!==k&&(s=k,u(s.object)),X=p(L,z,H,D),X&&_(L,z,H,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(L,N,H,z),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function u(L){return n.bindVertexArray(L)}function c(L){return n.deleteVertexArray(L)}function d(L,N,H,z){const D=z.wireframe===!0;let X=i[N.id];X===void 0&&(X={},i[N.id]=X);const k=L.isInstancedMesh===!0?L.id:0;let U=X[k];U===void 0&&(U={},X[k]=U);let $=U[H.id];$===void 0&&($={},U[H.id]=$);let ee=$[D];return ee===void 0&&(ee=f(l()),$[D]=ee),ee}function f(L){const N=[],H=[],z=[];for(let D=0;D<t;D++)N[D]=0,H[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:z,object:L,attributes:{},index:null}}function p(L,N,H,z){const D=s.attributes,X=N.attributes;let k=0;const U=H.getAttributes();for(const $ in U)if(U[$].location>=0){const ne=D[$];let se=X[$];if(se===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function _(L,N,H,z){const D={},X=N.attributes;let k=0;const U=H.getAttributes();for(const $ in U)if(U[$].location>=0){let ne=X[$];ne===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),D[$]=se,k++}s.attributes=D,s.attributesNum=k,s.index=z}function v(){const L=s.newAttributes;for(let N=0,H=L.length;N<H;N++)L[N]=0}function g(L){h(L,0)}function h(L,N){const H=s.newAttributes,z=s.enabledAttributes,D=s.attributeDivisors;H[L]=1,z[L]===0&&(n.enableVertexAttribArray(L),z[L]=1),D[L]!==N&&(n.vertexAttribDivisor(L,N),D[L]=N)}function m(){const L=s.newAttributes,N=s.enabledAttributes;for(let H=0,z=N.length;H<z;H++)N[H]!==L[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function x(L,N,H,z,D,X,k){k===!0?n.vertexAttribIPointer(L,N,H,D,X):n.vertexAttribPointer(L,N,H,z,D,X)}function S(L,N,H,z){v();const D=z.attributes,X=H.getAttributes(),k=N.defaultAttributeValues;for(const U in X){const $=X[U];if($.location>=0){let ee=D[U];if(ee===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const ne=ee.normalized,se=ee.itemSize,ke=e.get(ee);if(ke===void 0)continue;const be=ke.buffer,Ue=ke.type,te=ke.bytesPerElement,me=Ue===n.INT||Ue===n.UNSIGNED_INT||ee.gpuType===Ym;if(ee.isInterleavedBufferAttribute){const he=ee.data,Fe=he.stride,Be=ee.offset;if(he.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)h($.location+Ne,he.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)g($.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Ne=0;Ne<$.locationSize;Ne++)x($.location+Ne,se/$.locationSize,Ue,ne,Fe*te,(Be+se/$.locationSize*Ne)*te,me)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<$.locationSize;he++)h($.location+he,ee.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<$.locationSize;he++)g($.location+he);n.bindBuffer(n.ARRAY_BUFFER,be);for(let he=0;he<$.locationSize;he++)x($.location+he,se/$.locationSize,Ue,ne,se*te,se/$.locationSize*he*te,me)}}else if(k!==void 0){const ne=k[U];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv($.location,ne);break;case 3:n.vertexAttrib3fv($.location,ne);break;case 4:n.vertexAttrib4fv($.location,ne);break;default:n.vertexAttrib1fv($.location,ne)}}}}m()}function M(){R();for(const L in i){const N=i[L];for(const H in N){const z=N[H];for(const D in z){const X=z[D];for(const k in X)c(X[k].object),delete X[k];delete z[D]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const N=i[L.id];for(const H in N){const z=N[H];for(const D in z){const X=z[D];for(const k in X)c(X[k].object),delete X[k];delete z[D]}}delete i[L.id]}function w(L){for(const N in i){const H=i[N];for(const z in H){const D=H[z];if(D[L.id]===void 0)continue;const X=D[L.id];for(const k in X)c(X[k].object),delete X[k];delete D[L.id]}}}function y(L){for(const N in i){const H=i[N],z=L.isInstancedMesh===!0?L.id:0,D=H[z];if(D!==void 0){for(const X in D){const k=D[X];for(const U in k)c(k[U].object),delete k[U];delete D[X]}delete H[z],Object.keys(H).length===0&&delete i[N]}}}function R(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:m}}function yb(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Sb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Ei&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const y=w===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==oi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zi&&!y)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Oe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:M,samples:T}}function Mb(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ts,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const m=s?0:i,x=m*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let M=0;M!==x;++M)S[M]=t[M];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const h=p+v*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,S=p;x!==v;++x,S+=4)a.copy(d[x]).applyMatrix4(m,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Xr=4,D_=[.125,.215,.35,.446,.526,.582],bs=20,Eb=256,Do=new a0,I_=new tt;let Rd=null,Ad=0,Cd=0,bd=!1;const wb=new Z;class N_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=wb}=s;Rd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,Ad,Cd),this._renderer.xr.enabled=bd,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:xr,format:Ei,colorSpace:Bc,depthBuffer:!1},r=U_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tb(s)),this._blurMaterial=Ab(s,e,t),this._ggxMaterial=Rb(s,e,t)}return r}_compileMaterial(e){const t=new Ci(new Rr,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,i,r,s){const l=new ai(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(I_),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new Xl,new r0({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let h=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,h=!0):(g.color.copy(I_),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const M=this._cubeSize;_a(r,S*M,x>2?M:0,M,M),d.setRenderTarget(r),h&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$s||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Do)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-Xr?i-_+Xr:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,_a(s,g,h,3*v,2*v),r.setRenderTarget(s),r.render(o,Do),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,_a(e,g,h,3*v,2*v),r.setRenderTarget(e),r.render(o,Do)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*bs-1),v=s/_,g=isFinite(s)?1+Math.floor(c*v):bs;g>bs&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bs}`);const h=[];let m=0;for(let w=0;w<bs;++w){const y=w/v,R=Math.exp(-y*y/2);h.push(R),w===0?m+=R:w<g&&(m+=2*R)}for(let w=0;w<h.length;w++)h[w]=h[w]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],M=3*S*(r>x-Xr?r-x+Xr:0),T=4*(this._cubeSize-S);_a(t,M,T,3*S,2*S),l.setRenderTarget(t),l.render(d,Do)}}function Tb(n){const e=[],t=[],i=[];let r=n;const s=n-Xr+1+D_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Xr?l=D_[a-n+Xr-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,v=3,g=2,h=1,m=new Float32Array(v*_*p),x=new Float32Array(g*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,y=T>2?0:-1,R=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];m.set(R,v*_*T),x.set(f,g*_*T);const P=[T,T,T,T,T,T];S.set(P,h*_*T)}const M=new Rr;M.setAttribute("position",new $i(m,v)),M.setAttribute("uv",new $i(x,g)),M.setAttribute("faceIndex",new $i(S,h)),i.push(new Ci(M,null)),r>Xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function U_(n,e,t){const i=new Yi(n,e,t);return i.texture.mapping=gf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rb(n,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Ab(n,e,t){const i=new Float32Array(bs),r=new Z(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function F_(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function O_(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function vf(){return`

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
	`}class US extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xl(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:fr});s.uniforms.tEquirect.value=t;const a=new Ci(r,s),o=t.minFilter;return t.minFilter===Is&&(t.minFilter=fn),new IA(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Cb(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===ed||p===td)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new US(_.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,_=p===ed||p===td,v=p===$s||p===to;if(_||v){let g=t.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new N_(n)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const m=f.image;return _&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new N_(n)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f,p){return p===ed?f.mapping=$s:p===td&&(f.mapping=to),f}function l(f){let p=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&p++;return p===_}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function bb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ha("WebGLRenderer: "+i+" extension not supported."),r}}}function Pb(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(_===void 0)return;if(p!==null){const m=p.array;v=p.version;for(let x=0,S=m.length;x<S;x+=3){const M=m[x+0],T=m[x+1],w=m[x+2];f.push(M,T,T,w,w,M)}}else{const m=_.array;v=_.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const M=x+0,T=x+1,w=x+2;f.push(M,T,T,w,w,M)}}const g=new(_.count>=65535?RS:TS)(f,1);g.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function Lb(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function u(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*a,p),t.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let v=0;for(let g=0;g<p;g++)v+=f[g];t.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function Db(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ib(n,e,t){const i=new WeakMap,r=new Dt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*T*4*d),y=new SS(w,M,T,d);y.type=zi,y.needsUpdate=!0;const R=S*4;for(let L=0;L<d;L++){const N=h[L],H=m[L],z=x[L],D=M*T*4*L;for(let X=0;X<N.count;X++){const k=X*R;_===!0&&(r.fromBufferAttribute(N,X),w[D+k+0]=r.x,w[D+k+1]=r.y,w[D+k+2]=r.z,w[D+k+3]=0),v===!0&&(r.fromBufferAttribute(H,X),w[D+k+4]=r.x,w[D+k+5]=r.y,w[D+k+6]=r.z,w[D+k+7]=0),g===!0&&(r.fromBufferAttribute(z,X),w[D+k+8]=r.x,w[D+k+9]=r.y,w[D+k+10]=r.z,w[D+k+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new qe(M,T)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Nb(n,e,t,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Ub={[sS]:"LINEAR_TONE_MAPPING",[aS]:"REINHARD_TONE_MAPPING",[oS]:"CINEON_TONE_MAPPING",[lS]:"ACES_FILMIC_TONE_MAPPING",[cS]:"AGX_TONE_MAPPING",[fS]:"NEUTRAL_TONE_MAPPING",[uS]:"CUSTOM_TONE_MAPPING"};function Fb(n,e,t,i,r,s){const a=new Yi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new no(e,t):void 0}),o=new Yi(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),l=new Rr;l.setAttribute("position",new hr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new hr([0,2,0,0,2,0],2));const u=new wA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ci(l,u),d=new a0(-1,1,1,-1,0,1);let f=null,p=null,_=!1,v,g=null,h=[],m=!1;this.setSize=function(x,S){a.setSize(x,S),o.setSize(x,S);for(let M=0;M<h.length;M++){const T=h[M];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){h=x,m=h.length>0&&h[0].isRenderPass===!0;const S=a.width,M=a.height;for(let T=0;T<h.length;T++){const w=h[T];w.setSize&&w.setSize(S,M)}},this.begin=function(x,S){if(_||x.toneMapping===Xi&&h.length===0)return!1;if(g=S,S!==null){const M=S.width,T=S.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return m===!1&&x.setRenderTarget(a),v=x.toneMapping,x.toneMapping=Xi,!0},this.hasRenderPass=function(){return m},this.end=function(x,S){x.toneMapping=v,_=!0;let M=a,T=o;for(let w=0;w<h.length;w++){const y=h[w];if(y.enabled!==!1&&(y.render(x,T,M,S),y.needsSwap!==!1)){const R=M;M=T,T=R}}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,u.defines={},Ke.getTransfer(f)===st&&(u.defines.SRGB_TRANSFER="");const w=Ub[p];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(g),x.render(c,d),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const FS=new dn,wp=new no(1,1),OS=new SS,kS=new tA,BS=new CS,k_=[],B_=[],z_=new Float32Array(16),V_=new Float32Array(9),H_=new Float32Array(4);function vo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=k_[r];if(s===void 0&&(s=new Float32Array(r),k_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xf(n,e){let t=B_[e];t===void 0&&(t=new Int32Array(e),B_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ob(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function Vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;H_.set(i),n.uniformMatrix2fv(this.addr,!1,H_),$t(t,i)}}function Hb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;V_.set(i),n.uniformMatrix3fv(this.addr,!1,V_),$t(t,i)}}function Gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,i))return;z_.set(i),n.uniformMatrix4fv(this.addr,!1,z_),$t(t,i)}}function Wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function Qb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wp.compareFunction=t.isReversedDepthBuffer()?Jm:Qm,s=wp):s=FS,t.setTexture2D(e||s,r)}function Jb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||kS,r)}function eP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||BS,r)}function tP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||OS,r)}function nP(n){switch(n){case 5126:return Ob;case 35664:return kb;case 35665:return Bb;case 35666:return zb;case 35674:return Vb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return $b;case 5125:return qb;case 36294:return Kb;case 36295:return jb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return eP;case 36289:case 36303:case 36311:case 36292:return tP}}function iP(n,e){n.uniform1fv(this.addr,e)}function rP(n,e){const t=vo(e,this.size,2);n.uniform2fv(this.addr,t)}function sP(n,e){const t=vo(e,this.size,3);n.uniform3fv(this.addr,t)}function aP(n,e){const t=vo(e,this.size,4);n.uniform4fv(this.addr,t)}function oP(n,e){const t=vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lP(n,e){const t=vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uP(n,e){const t=vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cP(n,e){n.uniform1iv(this.addr,e)}function fP(n,e){n.uniform2iv(this.addr,e)}function dP(n,e){n.uniform3iv(this.addr,e)}function hP(n,e){n.uniform4iv(this.addr,e)}function pP(n,e){n.uniform1uiv(this.addr,e)}function mP(n,e){n.uniform2uiv(this.addr,e)}function gP(n,e){n.uniform3uiv(this.addr,e)}function _P(n,e){n.uniform4uiv(this.addr,e)}function vP(n,e,t){const i=this.cache,r=e.length,s=xf(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=wp:a=FS;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function xP(n,e,t){const i=this.cache,r=e.length,s=xf(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||kS,s[a])}function yP(n,e,t){const i=this.cache,r=e.length,s=xf(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||BS,s[a])}function SP(n,e,t){const i=this.cache,r=e.length,s=xf(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||OS,s[a])}function MP(n){switch(n){case 5126:return iP;case 35664:return rP;case 35665:return sP;case 35666:return aP;case 35674:return oP;case 35675:return lP;case 35676:return uP;case 5124:case 35670:return cP;case 35667:case 35671:return fP;case 35668:case 35672:return dP;case 35669:case 35673:return hP;case 5125:return pP;case 36294:return mP;case 36295:return gP;case 36296:return _P;case 35678:case 36198:case 36298:case 36306:case 35682:return vP;case 35679:case 36299:case 36307:return xP;case 35680:case 36300:case 36308:case 36293:return yP;case 36289:case 36303:case 36311:case 36292:return SP}}class EP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nP(t.type)}}class wP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MP(t.type)}}class TP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function G_(n,e){n.seq.push(e),n.map[e.id]=e}function RP(n,e,t){const i=n.name,r=i.length;for(Pd.lastIndex=0;;){const s=Pd.exec(i),a=Pd.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){G_(t,u===void 0?new EP(o,n,e):new wP(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new TP(o),G_(t,d)),t=d}}}class ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);RP(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function W_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AP=37297;let CP=0;function bP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const X_=new ze;function PP(n){Ke._getMatrix(X_,Ke.workingColorSpace,n);const e=`mat3( ${X_.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case zc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Y_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+bP(n.getShaderSource(e),o)}else return s}function LP(n,e){const t=PP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const DP={[sS]:"Linear",[aS]:"Reinhard",[oS]:"Cineon",[lS]:"ACESFilmic",[cS]:"AgX",[fS]:"Neutral",[uS]:"Custom"};function IP(n,e){const t=DP[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fu=new Z;function NP(){Ke.getLuminanceCoefficients(Fu);const n=Fu.x.toFixed(4),e=Fu.y.toFixed(4),t=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function FP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vo(n){return n!==""}function $_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function q_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(n){return n.replace(kP,zP)}const BP=new Map;function zP(n,e){let t=Ge[e];if(t===void 0){const i=BP.get(e);if(i!==void 0)t=Ge[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tp(t)}const VP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(n){return n.replace(VP,HP)}function HP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function j_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const GP={[tc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function WP(n){return GP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XP={[$s]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[gf]:"ENVMAP_TYPE_CUBE_UV"};function YP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":XP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const $P={[to]:"ENVMAP_MODE_REFRACTION"};function qP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$P[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KP={[rS]:"ENVMAP_BLENDING_MULTIPLY",[xR]:"ENVMAP_BLENDING_MIX",[yR]:"ENVMAP_BLENDING_ADD"};function jP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":KP[n.combine]||"ENVMAP_BLENDING_NONE"}function ZP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QP(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=WP(t),u=YP(t),c=qP(t),d=jP(t),f=ZP(t),p=UP(t),_=FP(s),v=r.createProgram();let g,h,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vo).join(`
`),h.length>0&&(h+=`
`)):(g=[j_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),h=[j_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Xi?IP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,LP("linearToOutputTexel",t.outputColorSpace),NP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),a=Tp(a),a=$_(a,t),a=q_(a,t),o=Tp(o),o=$_(o,t),o=q_(o,t),a=K_(a),o=K_(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+g+a,S=m+h+o,M=W_(r,r.VERTEX_SHADER,x),T=W_(r,r.FRAGMENT_SHADER,S);r.attachShader(v,M),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(M)||"",z=r.getShaderInfoLog(T)||"",D=N.trim(),X=H.trim(),k=z.trim();let U=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,M,T);else{const ee=Y_(r,M,"vertex"),ne=Y_(r,T,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+ee+`
`+ne)}else D!==""?Oe("WebGLProgram: Program Info Log:",D):(X===""||k==="")&&($=!1);$&&(L.diagnostics={runnable:U,programLog:D,vertexShader:{log:X,prefix:g},fragmentShader:{log:k,prefix:h}})}r.deleteShader(M),r.deleteShader(T),y=new ac(r,v),R=OP(r,v)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let R;this.getAttributes=function(){return R===void 0&&w(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(v,AP)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}let JP=0;class e3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new t3(e),t.set(e,i)),i}}class t3{constructor(e){this.id=JP++,this.code=e,this.usedTimes=0}}function n3(n){return n===qs||n===Oc||n===kc}function i3(n,e,t,i,r,s){const a=new MS,o=new e3,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,R,P,L,N,H){const z=L.fog,D=N.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||X,k),$=U&&U.mapping===gf?U.image.height:null,ee=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ne=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,se=ne!==void 0?ne.length:0;let ke=0;D.morphAttributes.position!==void 0&&(ke=1),D.morphAttributes.normal!==void 0&&(ke=2),D.morphAttributes.color!==void 0&&(ke=3);let be,Ue,te,me;if(ee){const we=Fi[ee];be=we.vertexShader,Ue=we.fragmentShader}else{be=y.vertexShader,Ue=y.fragmentShader;const we=o.getVertexShaderStage(y),rt=o.getFragmentShaderStage(y);o.update(y,we,rt),te=we.id,me=rt.id}const he=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,Ne=N.isBatchedMesh===!0,pt=!!y.map,He=!!y.matcap,it=!!U,Ze=!!y.aoMap,Ye=!!y.lightMap,yt=!!y.bumpMap&&y.wireframe===!1,bt=!!y.normalMap,Nt=!!y.displacementMap,Bt=!!y.emissiveMap,mt=!!y.metalnessMap,St=!!y.roughnessMap,b=y.anisotropy>0,_e=y.clearcoat>0,xe=y.dispersion>0,C=y.iridescence>0,E=y.sheen>0,I=y.transmission>0,O=b&&!!y.anisotropyMap,W=_e&&!!y.clearcoatMap,re=_e&&!!y.clearcoatNormalMap,oe=_e&&!!y.clearcoatRoughnessMap,V=C&&!!y.iridescenceMap,Q=C&&!!y.iridescenceThicknessMap,ae=E&&!!y.sheenColorMap,ve=E&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,Te=!!y.specularIntensityMap,Pe=I&&!!y.transmissionMap,pe=I&&!!y.thicknessMap,F=!!y.gradientMap,ue=!!y.alphaMap,q=y.alphaTest>0,le=!!y.alphaHash,ge=!!y.extensions;let ie=Xi;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ee={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:be,fragmentShader:Ue,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:pt,matcap:He,envMap:it,envMapMode:it&&U.mapping,envMapCubeUVHeight:$,aoMap:Ze,lightMap:Ye,bumpMap:yt,normalMap:bt,displacementMap:Nt,emissiveMap:Bt,normalMapObjectSpace:bt&&y.normalMapType===ER,normalMapTangentSpace:bt&&y.normalMapType===r_,packedNormalMap:bt&&y.normalMapType===r_&&n3(y.normalMap.format),metalnessMap:mt,roughnessMap:St,anisotropy:b,anisotropyMap:O,clearcoat:_e,clearcoatMap:W,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,dispersion:xe,iridescence:C,iridescenceMap:V,iridescenceThicknessMap:Q,sheen:E,sheenColorMap:ae,sheenRoughnessMap:ve,specularMap:fe,specularColorMap:ce,specularIntensityMap:Te,transmission:I,transmissionMap:Pe,thicknessMap:pe,gradientMap:F,opaque:y.transparent===!1&&y.blending===Va&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:q,alphaHash:le,combine:y.combine,mapUv:pt&&_(y.map.channel),aoMapUv:Ze&&_(y.aoMap.channel),lightMapUv:Ye&&_(y.lightMap.channel),bumpMapUv:yt&&_(y.bumpMap.channel),normalMapUv:bt&&_(y.normalMap.channel),displacementMapUv:Nt&&_(y.displacementMap.channel),emissiveMapUv:Bt&&_(y.emissiveMap.channel),metalnessMapUv:mt&&_(y.metalnessMap.channel),roughnessMapUv:St&&_(y.roughnessMap.channel),anisotropyMapUv:O&&_(y.anisotropyMap.channel),clearcoatMapUv:W&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(y.sheenRoughnessMap.channel),specularMapUv:fe&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:Te&&_(y.specularIntensityMap.channel),transmissionMapUv:Pe&&_(y.transmissionMap.channel),thicknessMapUv:pe&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(bt||b),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(pt||ue),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&bt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Fe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:pt&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ki,flipSided:y.side===bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)R.push(P),R.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(h(R,y),m(R,y),R.push(n.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function h(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function m(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function x(y){const R=p[y.type];let P;if(R){const L=Fi[R];P=SA.clone(L.uniforms)}else P=y.uniforms;return P}function S(y,R){let P=c.get(R);return P!==void 0?++P.usedTimes:(P=new QP(n,R,y,r),u.push(P),c.set(R,P)),P}function M(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:x,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:w}}function r3(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function s3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Z_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Q_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,v,g,h){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:h},n[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=_,m.materialVariant=a(f),m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=g,m.group=h),e++,m}function l(f,p,_,v,g,h){const m=o(f,p,_,v,g,h);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):t.push(m)}function u(f,p,_,v,g,h){const m=o(f,p,_,v,g,h);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,p,_){t.length>1&&t.sort(f||s3),i.length>1&&i.sort(p||Z_),r.length>1&&r.sort(p||Z_),_&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function a3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Q_,n.set(i,[a])):r>=s.length?(a=new Q_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function o3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new tt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function l3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let u3=0;function c3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function f3(n){const e=new o3,t=l3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Z);const r=new Z,s=new Gt,a=new Gt;function o(u){let c=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,_=0,v=0,g=0,h=0,m=0,x=0,S=0,M=0,T=0,w=0;u.sort(c3);for(let R=0,P=u.length;R<P;R++){const L=u[R],N=L.color,H=L.intensity,z=L.distance;let D=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qs?D=L.shadow.map.texture:D=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=N.r*H,d+=N.g*H,f+=N.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);w++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,U=t.get(L);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=L.shadow.matrix,m++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(H),X.distance=z,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const k=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,k.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=k.matrix,L.castShadow){const U=t.get(L);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=D,S++}v++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(N).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=X,g++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const k=L.shadow,U=t.get(L);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,U.shadowCameraNear=k.camera.near,U.shadowCameraFar=k.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=D,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[h]=X,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==h||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==M||y.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,y.directionalLength=p,y.pointLength=_,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=h,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=M,y.numLightProbes=w,i.version=u3++)}function l(u,c){let d=0,f=0,p=0,_=0,v=0;const g=c.matrixWorldInverse;for(let h=0,m=u.length;h<m;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function J_(n){const e=new f3(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function d3(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new J_(n),e.set(r,[o])):s>=a.length?(o=new J_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const h3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p3=`uniform sampler2D shadow_pass;
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
}`,m3=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],g3=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],ev=new Gt,Io=new Z,Ld=new Z;function _3(n,e,t){let i=new AS;const r=new qe,s=new qe,a=new Dt,o=new TA,l=new RA,u={},c=t.maxTextureSize,d={[os]:bn,[bn]:os,[ki]:ki},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:h3,fragmentShader:p3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Rr;_.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ci(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let h=this.type;this.render=function(T,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===eR&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tc);const R=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(fr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=h!==this.type;H&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(D=>D.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,D=T.length;z<D;z++){const X=T[z],k=X.shadow;if(k===void 0){Oe("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const U=k.getFrameExtents();r.multiply(U),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,k.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=$,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===zo){if(X.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yi(r.x,r.y,{format:qs,type:xr,minFilter:fn,magFilter:fn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new no(r.x,r.y,zi),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=yr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Jt,k.map.depthTexture.magFilter=Jt}else X.isPointLight?(k.map=new US(r.x),k.map.depthTexture=new xA(r.x,Ki)):(k.map=new Yi(r.x,r.y),k.map.depthTexture=new no(r.x,r.y,Ki)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=yr,this.type===tc?(k.map.depthTexture.compareFunction=$?Jm:Qm,k.map.depthTexture.minFilter=fn,k.map.depthTexture.magFilter=fn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Jt,k.map.depthTexture.magFilter=Jt);k.camera.updateProjectionMatrix()}const ee=k.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<ee;ne++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(k.map),n.clear());const se=k.getViewport(ne);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),N.viewport(a)}if(X.isPointLight){const se=k.camera,ke=k.matrix,be=X.distance||se.far;be!==se.far&&(se.far=be,se.updateProjectionMatrix()),Io.setFromMatrixPosition(X.matrixWorld),se.position.copy(Io),Ld.copy(se.position),Ld.add(m3[ne]),se.up.copy(g3[ne]),se.lookAt(Ld),se.updateMatrixWorld(),ke.makeTranslation(-Io.x,-Io.y,-Io.z),ev.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ev,se.coordinateSystem,se.reversedDepth)}else k.updateMatrices(X);i=k.getFrustum(),S(w,y,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===zo&&m(k,y),k.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(R,P,L)};function m(T,w){const y=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yi(r.x,r.y,{format:qs,type:xr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,y,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,y,p,v,null)}function x(T,w,y,R){let P=null;const L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=y.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=P.uuid,H=w.uuid;let z=u[N];z===void 0&&(z={},u[N]=z);let D=z[H];D===void 0&&(D=P.clone(),z[H]=D,w.addEventListener("dispose",M)),P=D}if(P.visible=w.visible,P.wireframe=w.wireframe,R===zo?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=n.properties.get(P);N.light=y}return P}function S(T,w,y,R,P){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===zo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const H=e.update(T),z=T.material;if(Array.isArray(z)){const D=H.groups;for(let X=0,k=D.length;X<k;X++){const U=D[X],$=z[U.materialIndex];if($&&$.visible){const ee=x(T,$,R,P);T.onBeforeShadow(n,T,w,y,H,ee,U),n.renderBufferDirect(y,null,H,ee,T,U),T.onAfterShadow(n,T,w,y,H,ee,U)}}}else if(z.visible){const D=x(T,z,R,P);T.onBeforeShadow(n,T,w,y,H,D,null),n.renderBufferDirect(y,null,H,D,T,null),T.onAfterShadow(n,T,w,y,H,D,null)}}const N=T.children;for(let H=0,z=N.length;H<z;H++)S(N[H],w,y,R,P)}function M(T){T.target.removeEventListener("dispose",M);for(const y in u){const R=u[y],P=T.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function v3(n,e){function t(){let F=!1;const ue=new Dt;let q=null;const le=new Dt(0,0,0,0);return{setMask:function(ge){q!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){F=ge},setClear:function(ge,ie,Ee,we,rt){rt===!0&&(ge*=we,ie*=we,Ee*=we),ue.set(ge,ie,Ee,we),le.equals(ue)===!1&&(n.clearColor(ge,ie,Ee,we),le.copy(ue))},reset:function(){F=!1,q=null,le.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,q=null,le=null,ge=null;return{setReversed:function(ie){if(ue!==ie){const Ee=e.get("EXT_clip_control");ie?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const we=ge;ge=null,this.setClear(we)}},getReversed:function(){return ue},setTest:function(ie){ie?he(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(ie){q!==ie&&!F&&(n.depthMask(ie),q=ie)},setFunc:function(ie){if(ue&&(ie=IR[ie]),le!==ie){switch(ie){case Bh:n.depthFunc(n.NEVER);break;case zh:n.depthFunc(n.ALWAYS);break;case Vh:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case Hh:n.depthFunc(n.EQUAL);break;case Gh:n.depthFunc(n.GEQUAL);break;case Wh:n.depthFunc(n.GREATER);break;case Xh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=ie}},setLocked:function(ie){F=ie},setClear:function(ie){ge!==ie&&(ge=ie,ue&&(ie=1-ie),n.clearDepth(ie))},reset:function(){F=!1,q=null,le=null,ge=null,ue=!1}}}function r(){let F=!1,ue=null,q=null,le=null,ge=null,ie=null,Ee=null,we=null,rt=null;return{setTest:function(nt){F||(nt?he(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!F&&(n.stencilMask(nt),ue=nt)},setFunc:function(nt,Mn,Qn){(q!==nt||le!==Mn||ge!==Qn)&&(n.stencilFunc(nt,Mn,Qn),q=nt,le=Mn,ge=Qn)},setOp:function(nt,Mn,Qn){(ie!==nt||Ee!==Mn||we!==Qn)&&(n.stencilOp(nt,Mn,Qn),ie=nt,Ee=Mn,we=Qn)},setLocked:function(nt){F=nt},setClear:function(nt){rt!==nt&&(n.clearStencil(nt),rt=nt)},reset:function(){F=!1,ue=null,q=null,le=null,ge=null,ie=null,Ee=null,we=null,rt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,_=[],v=null,g=!1,h=null,m=null,x=null,S=null,M=null,T=null,w=null,y=new tt(0,0,0),R=0,P=!1,L=null,N=null,H=null,z=null,D=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec($)[1]),k=U>=1):$.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=U>=2);let ee=null,ne={};const se=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),be=new Dt().fromArray(se),Ue=new Dt().fromArray(ke);function te(F,ue,q,le){const ge=new Uint8Array(4),ie=n.createTexture();n.bindTexture(F,ie),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<q;Ee++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ue+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ie}const me={};me[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(n.DEPTH_TEST),a.setFunc(eo),yt(!1),bt(e_),he(n.CULL_FACE),Ze(fr);function he(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function Fe(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Be(F,ue){return f[F]!==ue?(n.bindFramebuffer(F,ue),f[F]=ue,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ne(F,ue){let q=_,le=!1;if(F){q=p.get(ue),q===void 0&&(q=[],p.set(ue,q));const ge=F.textures;if(q.length!==ge.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ee=ge.length;ie<Ee;ie++)q[ie]=n.COLOR_ATTACHMENT0+ie;q.length=ge.length,le=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,le=!0);le&&n.drawBuffers(q)}function pt(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const He={[Cs]:n.FUNC_ADD,[nR]:n.FUNC_SUBTRACT,[iR]:n.FUNC_REVERSE_SUBTRACT};He[rR]=n.MIN,He[sR]=n.MAX;const it={[aR]:n.ZERO,[oR]:n.ONE,[lR]:n.SRC_COLOR,[Oh]:n.SRC_ALPHA,[pR]:n.SRC_ALPHA_SATURATE,[dR]:n.DST_COLOR,[cR]:n.DST_ALPHA,[uR]:n.ONE_MINUS_SRC_COLOR,[kh]:n.ONE_MINUS_SRC_ALPHA,[hR]:n.ONE_MINUS_DST_COLOR,[fR]:n.ONE_MINUS_DST_ALPHA,[mR]:n.CONSTANT_COLOR,[gR]:n.ONE_MINUS_CONSTANT_COLOR,[_R]:n.CONSTANT_ALPHA,[vR]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(F,ue,q,le,ge,ie,Ee,we,rt,nt){if(F===fr){g===!0&&(Fe(n.BLEND),g=!1);return}if(g===!1&&(he(n.BLEND),g=!0),F!==tR){if(F!==h||nt!==P){if((m!==Cs||M!==Cs)&&(n.blendEquation(n.FUNC_ADD),m=Cs,M=Cs),nt)switch(F){case Va:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case t_:n.blendFunc(n.ONE,n.ONE);break;case n_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case i_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case Va:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case t_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case n_:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i_:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}x=null,S=null,T=null,w=null,y.set(0,0,0),R=0,h=F,P=nt}return}ge=ge||ue,ie=ie||q,Ee=Ee||le,(ue!==m||ge!==M)&&(n.blendEquationSeparate(He[ue],He[ge]),m=ue,M=ge),(q!==x||le!==S||ie!==T||Ee!==w)&&(n.blendFuncSeparate(it[q],it[le],it[ie],it[Ee]),x=q,S=le,T=ie,w=Ee),(we.equals(y)===!1||rt!==R)&&(n.blendColor(we.r,we.g,we.b,rt),y.copy(we),R=rt),h=F,P=!1}function Ye(F,ue){F.side===ki?Fe(n.CULL_FACE):he(n.CULL_FACE);let q=F.side===bn;ue&&(q=!q),yt(q),F.blending===Va&&F.transparent===!1?Ze(fr):Ze(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const le=F.stencilWrite;o.setTest(le),le&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function bt(F){F!==QT?(he(n.CULL_FACE),F!==N&&(F===e_?n.cullFace(n.BACK):F===JT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),N=F}function Nt(F){F!==H&&(k&&n.lineWidth(F),H=F)}function Bt(F,ue,q){F?(he(n.POLYGON_OFFSET_FILL),(z!==ue||D!==q)&&(z=ue,D=q,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,q))):Fe(n.POLYGON_OFFSET_FILL)}function mt(F){F?he(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function St(F){F===void 0&&(F=n.TEXTURE0+X-1),ee!==F&&(n.activeTexture(F),ee=F)}function b(F,ue,q){q===void 0&&(ee===null?q=n.TEXTURE0+X-1:q=ee);let le=ne[q];le===void 0&&(le={type:void 0,texture:void 0},ne[q]=le),(le.type!==F||le.texture!==ue)&&(ee!==q&&(n.activeTexture(q),ee=q),n.bindTexture(F,ue||me[F]),le.type=F,le.texture=ue)}function _e(){const F=ne[ee];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function xe(){try{n.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function E(){try{n.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function I(){try{n.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function re(){try{n.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function oe(){try{n.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function V(){try{n.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function Q(){try{n.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function ae(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function ve(F,ue){d[F]!==ue&&(n.pixelStorei(F,ue),d[F]=ue)}function fe(F){be.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),be.copy(F))}function ce(F){Ue.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function Te(F,ue){let q=u.get(ue);q===void 0&&(q=new WeakMap,u.set(ue,q));let le=q.get(F);le===void 0&&(le=n.getUniformBlockIndex(ue,F.name),q.set(F,le))}function Pe(F,ue){const le=u.get(ue).get(F);l.get(ue)!==le&&(n.uniformBlockBinding(ue,le,F.__bindingPointIndex),l.set(ue,le))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},ee=null,ne={},f={},p=new WeakMap,_=[],v=null,g=!1,h=null,m=null,x=null,S=null,M=null,T=null,w=null,y=new tt(0,0,0),R=0,P=!1,L=null,N=null,H=null,z=null,D=null,be.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Fe,bindFramebuffer:Be,drawBuffers:Ne,useProgram:pt,setBlending:Ze,setMaterial:Ye,setFlipSided:yt,setCullFace:bt,setLineWidth:Nt,setPolygonOffset:Bt,setScissorTest:mt,activeTexture:St,bindTexture:b,unbindTexture:_e,compressedTexImage2D:xe,compressedTexImage3D:C,texImage2D:V,texImage3D:Q,pixelStorei:ve,getParameter:ae,updateUBOMapping:Te,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:oe,texSubImage2D:E,texSubImage3D:I,compressedTexSubImage2D:O,compressedTexSubImage3D:W,scissor:fe,viewport:ce,reset:pe}}function x3(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qe,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return _?new OffscreenCanvas(C,E):Rl("canvas")}function g(C,E,I){let O=1;const W=xe(C);if((W.width>I||W.height>I)&&(O=I/Math.max(W.width,W.height)),O<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(O*W.width),oe=Math.floor(O*W.height);f===void 0&&(f=v(re,oe));const V=E?v(re,oe):f;return V.width=re,V.height=oe,V.getContext("2d").drawImage(C,0,0,re,oe),Oe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+re+"x"+oe+")."),V}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),C;return C}function h(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,E,I,O,W,re=!1){if(C!==null){if(n[C]!==void 0)return n[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;O&&(oe=e.get("EXT_texture_norm16"),oe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=E;if(E===n.RED&&(I===n.FLOAT&&(V=n.R32F),I===n.HALF_FLOAT&&(V=n.R16F),I===n.UNSIGNED_BYTE&&(V=n.R8),I===n.UNSIGNED_SHORT&&oe&&(V=oe.R16_EXT),I===n.SHORT&&oe&&(V=oe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.R8UI),I===n.UNSIGNED_SHORT&&(V=n.R16UI),I===n.UNSIGNED_INT&&(V=n.R32UI),I===n.BYTE&&(V=n.R8I),I===n.SHORT&&(V=n.R16I),I===n.INT&&(V=n.R32I)),E===n.RG&&(I===n.FLOAT&&(V=n.RG32F),I===n.HALF_FLOAT&&(V=n.RG16F),I===n.UNSIGNED_BYTE&&(V=n.RG8),I===n.UNSIGNED_SHORT&&oe&&(V=oe.RG16_EXT),I===n.SHORT&&oe&&(V=oe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.RG8UI),I===n.UNSIGNED_SHORT&&(V=n.RG16UI),I===n.UNSIGNED_INT&&(V=n.RG32UI),I===n.BYTE&&(V=n.RG8I),I===n.SHORT&&(V=n.RG16I),I===n.INT&&(V=n.RG32I)),E===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.RGB8UI),I===n.UNSIGNED_SHORT&&(V=n.RGB16UI),I===n.UNSIGNED_INT&&(V=n.RGB32UI),I===n.BYTE&&(V=n.RGB8I),I===n.SHORT&&(V=n.RGB16I),I===n.INT&&(V=n.RGB32I)),E===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),I===n.UNSIGNED_INT&&(V=n.RGBA32UI),I===n.BYTE&&(V=n.RGBA8I),I===n.SHORT&&(V=n.RGBA16I),I===n.INT&&(V=n.RGBA32I)),E===n.RGB&&(I===n.UNSIGNED_SHORT&&oe&&(V=oe.RGB16_EXT),I===n.SHORT&&oe&&(V=oe.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),E===n.RGBA){const Q=re?zc:Ke.getTransfer(W);I===n.FLOAT&&(V=n.RGBA32F),I===n.HALF_FLOAT&&(V=n.RGBA16F),I===n.UNSIGNED_BYTE&&(V=Q===st?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&oe&&(V=oe.RGBA16_EXT),I===n.SHORT&&oe&&(V=oe.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(C,E){let I;return C?E===null||E===Ki||E===Tl?I=n.DEPTH24_STENCIL8:E===zi?I=n.DEPTH32F_STENCIL8:E===wl&&(I=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===Tl?I=n.DEPTH_COMPONENT24:E===zi?I=n.DEPTH_COMPONENT32F:E===wl&&(I=n.DEPTH_COMPONENT16),I}function T(C,E){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){const E=C.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&d.delete(E)}function y(C){const E=C.target;E.removeEventListener("dispose",y),L(E)}function R(C){const E=i.get(C);if(E.__webglInit===void 0)return;const I=C.source,O=p.get(I);if(O){const W=O[E.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(C),Object.keys(O).length===0&&p.delete(I)}i.remove(C)}function P(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const I=C.source,O=p.get(I);delete O[E.__cacheKey],a.memory.textures--}function L(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(E.__webglFramebuffer[O]))for(let W=0;W<E.__webglFramebuffer[O].length;W++)n.deleteFramebuffer(E.__webglFramebuffer[O][W]);else n.deleteFramebuffer(E.__webglFramebuffer[O]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[O])}else{if(Array.isArray(E.__webglFramebuffer))for(let O=0;O<E.__webglFramebuffer.length;O++)n.deleteFramebuffer(E.__webglFramebuffer[O]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let O=0;O<E.__webglColorRenderbuffer.length;O++)E.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[O]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const I=C.textures;for(let O=0,W=I.length;O<W;O++){const re=i.get(I[O]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(I[O])}i.remove(C)}let N=0;function H(){N=0}function z(){return N}function D(C){N=C}function X(){const C=N;return C>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function U(C,E){const I=i.get(C);if(C.isVideoTexture&&b(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){const O=C.image;if(O===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(I,C,E);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+E)}function $(C,E){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Fe(I,C,E);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+E)}function ee(C,E){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Fe(I,C,E);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+E)}function ne(C,E){const I=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){Be(I,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+E)}const se={[Yh]:n.REPEAT,[ur]:n.CLAMP_TO_EDGE,[$h]:n.MIRRORED_REPEAT},ke={[Jt]:n.NEAREST,[SR]:n.NEAREST_MIPMAP_NEAREST,[mu]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[nd]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},be={[wR]:n.NEVER,[bR]:n.ALWAYS,[TR]:n.LESS,[Qm]:n.LEQUAL,[RR]:n.EQUAL,[Jm]:n.GEQUAL,[AR]:n.GREATER,[CR]:n.NOTEQUAL};function Ue(C,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===nd||E.magFilter===mu||E.magFilter===Is||E.minFilter===fn||E.minFilter===nd||E.minFilter===mu||E.minFilter===Is)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,se[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,se[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,se[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ke[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ke[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jt||E.minFilter!==mu&&E.minFilter!==Is||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function te(C,E){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w));const O=E.source;let W=p.get(O);W===void 0&&(W={},p.set(O,W));const re=k(E);if(re!==C.__cacheKey){W[re]===void 0&&(W[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),W[re].usedTimes++;const oe=W[C.__cacheKey];oe!==void 0&&(W[C.__cacheKey].usedTimes--,oe.usedTimes===0&&P(E)),C.__cacheKey=re,C.__webglTexture=W[re].texture}return I}function me(C,E,I){return Math.floor(Math.floor(C/I)/E)}function he(C,E,I,O){const re=C.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,I,O,E.data);else{re.sort((ve,fe)=>ve.start-fe.start);let oe=0;for(let ve=1;ve<re.length;ve++){const fe=re[oe],ce=re[ve],Te=fe.start+fe.count,Pe=me(ce.start,E.width,4),pe=me(fe.start,E.width,4);ce.start<=Te+1&&Pe===pe&&me(ce.start+ce.count-1,E.width,4)===Pe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++oe,re[oe]=ce)}re.length=oe+1;const V=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ve=0,fe=re.length;ve<fe;ve++){const ce=re[ve],Te=Math.floor(ce.start/4),Pe=Math.ceil(ce.count/4),pe=Te%E.width,F=Math.floor(Te/E.width),ue=Pe,q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,pe,F,ue,q,I,O,E.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,V),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function Fe(C,E,I){let O=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(O=n.TEXTURE_3D);const W=te(C,E),re=E.source;t.bindTexture(O,C.__webglTexture,n.TEXTURE0+I);const oe=i.get(re);if(re.version!==oe.__version||W===!0){if(t.activeTexture(n.TEXTURE0+I),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const q=Ke.getPrimaries(Ke.workingColorSpace),le=E.colorSpace===Hr?null:Ke.getPrimaries(E.colorSpace),ge=E.colorSpace===Hr||q===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=g(E.image,!1,r.maxTextureSize);Q=_e(E,Q);const ae=s.convert(E.format,E.colorSpace),ve=s.convert(E.type);let fe=S(E.internalFormat,ae,ve,E.normalized,E.colorSpace,E.isVideoTexture);Ue(O,E);let ce;const Te=E.mipmaps,Pe=E.isVideoTexture!==!0,pe=oe.__version===void 0||W===!0,F=re.dataReady,ue=T(E,Q);if(E.isDepthTexture)fe=M(E.format===Ns,E.type),pe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,ae,ve,null));else if(E.isDataTexture)if(Te.length>0){Pe&&pe&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Te[0].width,Te[0].height);for(let q=0,le=Te.length;q<le;q++)ce=Te[q],Pe?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ce.width,ce.height,ae,ve,ce.data):t.texImage2D(n.TEXTURE_2D,q,fe,ce.width,ce.height,0,ae,ve,ce.data);E.generateMipmaps=!1}else Pe?(pe&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Q.width,Q.height),F&&he(E,Q,ae,ve)):t.texImage2D(n.TEXTURE_2D,0,fe,Q.width,Q.height,0,ae,ve,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,Te[0].width,Te[0].height,Q.depth);for(let q=0,le=Te.length;q<le;q++)if(ce=Te[q],E.format!==Ei)if(ae!==null)if(Pe){if(F)if(E.layerUpdates.size>0){const ge=L_(ce.width,ce.height,E.format,E.type);for(const ie of E.layerUpdates){const Ee=ce.data.subarray(ie*ge/ce.data.BYTES_PER_ELEMENT,(ie+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ie,ce.width,ce.height,1,ae,Ee)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,Q.depth,ae,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,fe,ce.width,ce.height,Q.depth,0,ce.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ce.width,ce.height,Q.depth,ae,ve,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,fe,ce.width,ce.height,Q.depth,0,ae,ve,ce.data)}else{Pe&&pe&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Te[0].width,Te[0].height);for(let q=0,le=Te.length;q<le;q++)ce=Te[q],E.format!==Ei?ae!==null?Pe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,q,fe,ce.width,ce.height,0,ce.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ce.width,ce.height,ae,ve,ce.data):t.texImage2D(n.TEXTURE_2D,q,fe,ce.width,ce.height,0,ae,ve,ce.data)}else if(E.isDataArrayTexture)if(Pe){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,Q.width,Q.height,Q.depth),F)if(E.layerUpdates.size>0){const q=L_(Q.width,Q.height,E.format,E.type);for(const le of E.layerUpdates){const ge=Q.data.subarray(le*q/Q.data.BYTES_PER_ELEMENT,(le+1)*q/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,ae,ve,ge)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,ve,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,ae,ve,Q.data);else if(E.isData3DTexture)Pe?(pe&&t.texStorage3D(n.TEXTURE_3D,ue,fe,Q.width,Q.height,Q.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,ve,Q.data)):t.texImage3D(n.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,ae,ve,Q.data);else if(E.isFramebufferTexture){if(pe)if(Pe)t.texStorage2D(n.TEXTURE_2D,ue,fe,Q.width,Q.height);else{let q=Q.width,le=Q.height;for(let ge=0;ge<ue;ge++)t.texImage2D(n.TEXTURE_2D,ge,fe,q,le,0,ae,ve,null),q>>=1,le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Q.parentNode!==q){q.appendChild(Q),d.add(E),q.onpaint=le=>{const ge=le.changedElements;for(const ie of d)ge.includes(ie.image)&&(ie.needsUpdate=!0)},q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const ge=n.RGBA,ie=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,ie,Ee,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Pe&&pe){const q=xe(Te[0]);t.texStorage2D(n.TEXTURE_2D,ue,fe,q.width,q.height)}for(let q=0,le=Te.length;q<le;q++)ce=Te[q],Pe?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ae,ve,ce):t.texImage2D(n.TEXTURE_2D,q,fe,ae,ve,ce);E.generateMipmaps=!1}else if(Pe){if(pe){const q=xe(Q);t.texStorage2D(n.TEXTURE_2D,ue,fe,q.width,q.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,ve,Q)}else t.texImage2D(n.TEXTURE_2D,0,fe,ae,ve,Q);h(E)&&m(O),oe.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Be(C,E,I){if(E.image.length!==6)return;const O=te(C,E),W=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+I);const re=i.get(W);if(W.version!==re.__version||O===!0){t.activeTexture(n.TEXTURE0+I);const oe=Ke.getPrimaries(Ke.workingColorSpace),V=E.colorSpace===Hr?null:Ke.getPrimaries(E.colorSpace),Q=E.colorSpace===Hr||oe===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,ve=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!ae&&!ve?fe[ie]=g(E.image[ie],!0,r.maxCubemapSize):fe[ie]=ve?E.image[ie].image:E.image[ie],fe[ie]=_e(E,fe[ie]);const ce=fe[0],Te=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type),pe=S(E.internalFormat,Te,Pe,E.normalized,E.colorSpace),F=E.isVideoTexture!==!0,ue=re.__version===void 0||O===!0,q=W.dataReady;let le=T(E,ce);Ue(n.TEXTURE_CUBE_MAP,E);let ge;if(ae){F&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,pe,ce.width,ce.height);for(let ie=0;ie<6;ie++){ge=fe[ie].mipmaps;for(let Ee=0;Ee<ge.length;Ee++){const we=ge[Ee];E.format!==Ei?Te!==null?F?q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,pe,we.width,we.height,0,we.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,we.width,we.height,Te,Pe,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,pe,we.width,we.height,0,Te,Pe,we.data)}}}else{if(ge=E.mipmaps,F&&ue){ge.length>0&&le++;const ie=xe(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,pe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ve){F?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Te,Pe,fe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,fe[ie].width,fe[ie].height,0,Te,Pe,fe[ie].data);for(let Ee=0;Ee<ge.length;Ee++){const rt=ge[Ee].image[ie].image;F?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,rt.width,rt.height,Te,Pe,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,pe,rt.width,rt.height,0,Te,Pe,rt.data)}}else{F?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te,Pe,fe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Te,Pe,fe[ie]);for(let Ee=0;Ee<ge.length;Ee++){const we=ge[Ee];F?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,Te,Pe,we.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,pe,Te,Pe,we.image[ie])}}}h(E)&&m(n.TEXTURE_CUBE_MAP),re.__version=W.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ne(C,E,I,O,W,re){const oe=s.convert(I.format,I.colorSpace),V=s.convert(I.type),Q=S(I.internalFormat,oe,V,I.normalized,I.colorSpace),ae=i.get(E),ve=i.get(I);if(ve.__renderTarget=E,!ae.__hasExternalTextures){const fe=Math.max(1,E.width>>re),ce=Math.max(1,E.height>>re);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,re,Q,fe,ce,E.depth,0,oe,V,null):t.texImage2D(W,re,Q,fe,ce,0,oe,V,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),St(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,W,ve.__webglTexture,0,mt(E)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,W,ve.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(C,E,I){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const O=E.depthTexture,W=O&&O.isDepthTexture?O.type:null,re=M(E.stencilBuffer,W),oe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(E),re,E.width,E.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(E),re,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,C)}else{const O=E.textures;for(let W=0;W<O.length;W++){const re=O[W],oe=s.convert(re.format,re.colorSpace),V=s.convert(re.type),Q=S(re.internalFormat,oe,V,re.normalized,re.colorSpace);St(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(E),Q,E.width,E.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(E),Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(C,E,I){const O=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(E.depthTexture);if(W.__renderTarget=E,(!W.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O){if(W.__webglInit===void 0&&(W.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,E.depthTexture);const ae=s.convert(E.depthTexture.format),ve=s.convert(E.depthTexture.type);let fe;E.depthTexture.format===yr?fe=n.DEPTH_COMPONENT24:E.depthTexture.format===Ns&&(fe=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,E.width,E.height,0,ae,ve,null)}}else U(E.depthTexture,0);const re=W.__webglTexture,oe=mt(E),V=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Q=E.depthTexture.format===Ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===yr)St(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,V,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,V,re,0);else if(E.depthTexture.format===Ns)St(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,V,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,V,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(C){const E=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const O=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),O){const W=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,O.removeEventListener("dispose",W)};O.addEventListener("dispose",W),E.__depthDisposeCallback=W}E.__boundDepthTexture=O}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(I)for(let O=0;O<6;O++)He(E.__webglFramebuffer[O],C,O);else{const O=C.texture.mipmaps;O&&O.length>0?He(E.__webglFramebuffer[0],C,0):He(E.__webglFramebuffer,C,0)}else if(I){E.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[O]),E.__webglDepthbuffer[O]===void 0)E.__webglDepthbuffer[O]=n.createRenderbuffer(),pt(E.__webglDepthbuffer[O],C,!1);else{const W=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,re)}}else{const O=C.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),pt(E.__webglDepthbuffer,C,!1);else{const W=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(C,E,I){const O=i.get(C);E!==void 0&&Ne(O.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&it(C)}function Ye(C){const E=C.texture,I=i.get(C),O=i.get(E);C.addEventListener("dispose",y);const W=C.textures,re=C.isWebGLCubeRenderTarget===!0,oe=W.length>1;if(oe||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=E.version,a.memory.textures++),re){I.__webglFramebuffer=[];for(let V=0;V<6;V++)if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer[V]=[];for(let Q=0;Q<E.mipmaps.length;Q++)I.__webglFramebuffer[V][Q]=n.createFramebuffer()}else I.__webglFramebuffer[V]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){I.__webglFramebuffer=[];for(let V=0;V<E.mipmaps.length;V++)I.__webglFramebuffer[V]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(oe)for(let V=0,Q=W.length;V<Q;V++){const ae=i.get(W[V]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&St(C)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let V=0;V<W.length;V++){const Q=W[V];I.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[V]);const ae=s.convert(Q.format,Q.colorSpace),ve=s.convert(Q.type),fe=S(Q.internalFormat,ae,ve,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ce=mt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,I.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(I.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,E);for(let V=0;V<6;V++)if(E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ne(I.__webglFramebuffer[V][Q],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q);else Ne(I.__webglFramebuffer[V],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);h(E)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let V=0,Q=W.length;V<Q;V++){const ae=W[V],ve=i.get(ae);let fe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ve.__webglTexture),Ue(fe,ae),Ne(I.__webglFramebuffer,C,ae,n.COLOR_ATTACHMENT0+V,fe,0),h(ae)&&m(fe)}t.unbindTexture()}else{let V=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(V=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(V,O.__webglTexture),Ue(V,E),E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ne(I.__webglFramebuffer[Q],C,E,n.COLOR_ATTACHMENT0,V,Q);else Ne(I.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,V,0);h(E)&&m(V),t.unbindTexture()}C.depthBuffer&&it(C)}function yt(C){const E=C.textures;for(let I=0,O=E.length;I<O;I++){const W=E[I];if(h(W)){const re=x(C),oe=i.get(W).__webglTexture;t.bindTexture(re,oe),m(re),t.unbindTexture()}}}const bt=[],Nt=[];function Bt(C){if(C.samples>0){if(St(C)===!1){const E=C.textures,I=C.width,O=C.height;let W=n.COLOR_BUFFER_BIT;const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(C),V=E.length>1;if(V)for(let ae=0;ae<E.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),V){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const ve=i.get(E[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,I,O,0,0,I,O,W,n.NEAREST),l===!0&&(bt.length=0,Nt.length=0,bt.push(n.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(re),Nt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ae=0;ae<E.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ae]);const ve=i.get(E[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function mt(C){return Math.min(r.maxSamples,C.samples)}function St(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function b(C){const E=a.render.frame;c.get(C)!==E&&(c.set(C,E),C.update())}function _e(C,E){const I=C.colorSpace,O=C.format,W=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Bc&&I!==Hr&&(Ke.getTransfer(I)===st?(O!==Ei||W!==oi)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",I)),E}function xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.getTextureUnits=z,this.setTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=Ze,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function y3(n,e){function t(i,r=Hr){let s;const a=Ke.getTransfer(r);if(i===oi)return n.UNSIGNED_BYTE;if(i===$m)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hS)return n.BYTE;if(i===pS)return n.SHORT;if(i===wl)return n.UNSIGNED_SHORT;if(i===Ym)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===_S)return n.ALPHA;if(i===vS)return n.RGB;if(i===Ei)return n.RGBA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===xS)return n.RED;if(i===Km)return n.RED_INTEGER;if(i===qs)return n.RG;if(i===jm)return n.RG_INTEGER;if(i===Zm)return n.RGBA_INTEGER;if(i===nc||i===ic||i===rc||i===sc)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qh||i===Kh||i===jh||i===Zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qh||i===Jh||i===ep||i===tp||i===np||i===Oc||i===ip)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qh||i===Jh)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ep)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tp)return s.COMPRESSED_R11_EAC;if(i===np)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Oc)return s.COMPRESSED_RG11_EAC;if(i===ip)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rp||i===sp||i===ap||i===op||i===lp||i===up||i===cp||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===_p)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ap)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===op)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===up)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_p)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vp||i===xp||i===yp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vp)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Mp||i===kc||i===Ep)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ep)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const S3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M3=`
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

}`;class E3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:S3,fragmentShader:M3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ci(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w3 extends Qs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",g=new E3,h={},m=t.getContextAttributes();let x=null,S=null;const M=[],T=[],w=new qe;let y=null;const R=new ai;R.viewport=new Dt;const P=new ai;P.viewport=new Dt;const L=[R,P],N=new NA;let H=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=M[te];return me===void 0&&(me=new ld,M[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=M[te];return me===void 0&&(me=new ld,M[te]=me),me.getGripSpace()},this.getHand=function(te){let me=M[te];return me===void 0&&(me=new ld,M[te]=me),me.getHandSpace()};function D(te){const me=T.indexOf(te.inputSource);if(me===-1)return;const he=M[me];he!==void 0&&(he.update(te.inputSource,te.frame,u||a),he.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let te=0;te<M.length;te++){const me=T[te];me!==null&&(T[te]=null,M[te].disconnect(me))}H=null,z=null,g.reset();for(const te in h)delete h[te];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Fe=null,Be=null;m.depth&&(Be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Ns:yr,Fe=m.stencil?Tl:Ki);const Ne={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Yi(f.textureWidth,f.textureHeight,{format:Ei,type:oi,depthTexture:new no(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Yi(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(te){for(let me=0;me<te.removed.length;me++){const he=te.removed[me],Fe=T.indexOf(he);Fe>=0&&(T[Fe]=null,M[Fe].disconnect(he))}for(let me=0;me<te.added.length;me++){const he=te.added[me];let Fe=T.indexOf(he);if(Fe===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=T.length){T.push(he),Fe=Ne;break}else if(T[Ne]===null){T[Ne]=he,Fe=Ne;break}if(Fe===-1)break}const Be=M[Fe];Be&&Be.connect(he)}}const U=new Z,$=new Z;function ee(te,me,he){U.setFromMatrixPosition(me.matrixWorld),$.setFromMatrixPosition(he.matrixWorld);const Fe=U.distanceTo($),Be=me.projectionMatrix.elements,Ne=he.projectionMatrix.elements,pt=Be[14]/(Be[10]-1),He=Be[14]/(Be[10]+1),it=(Be[9]+1)/Be[5],Ze=(Be[9]-1)/Be[5],Ye=(Be[8]-1)/Be[0],yt=(Ne[8]+1)/Ne[0],bt=pt*Ye,Nt=pt*yt,Bt=Fe/(-Ye+yt),mt=Bt*-Ye;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(mt),te.translateZ(Bt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Be[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const St=pt+Bt,b=He+Bt,_e=bt-mt,xe=Nt+(Fe-mt),C=it*He/b*St,E=Ze*He/b*St;te.projectionMatrix.makePerspective(_e,xe,C,E,St,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ne(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let me=te.near,he=te.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(he=g.depthFar)),N.near=P.near=R.near=me,N.far=P.far=R.far=he,(H!==N.near||z!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,z=N.far),N.layers.mask=te.layers.mask|6,R.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;const Fe=te.parent,Be=N.cameras;ne(N,Fe);for(let Ne=0;Ne<Be.length;Ne++)ne(Be[Ne],Fe);Be.length===2?ee(N,R,P):N.projectionMatrix.copy(R.projectionMatrix),se(te,N,Fe)};function se(te,me,he){he===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Al*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(te){return h[te]};let ke=null;function be(te,me){if(c=me.getViewerPose(u||a),_=me,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;he.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let He=0;He<he.length;He++){const it=he[He];let Ze=null;if(p!==null)Ze=p.getViewport(it);else{const yt=d.getViewSubImage(f,it);Ze=yt.viewport,He===0&&(e.setRenderTargetTextures(S,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(S))}let Ye=L[He];Ye===void 0&&(Ye=new ai,Ye.layers.enable(He),Ye.viewport=new Dt,L[He]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),He===0&&(N.matrix.copy(Ye.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(Ye)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const He=d.getDepthInformation(he[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(Be&&Be.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<he.length;He++){const it=he[He].camera;if(it){let Ze=h[it];Ze||(Ze=new bS,h[it]=Ze);const Ye=d.getCameraImage(it);Ze.sourceTexture=Ye}}}}for(let he=0;he<M.length;he++){const Fe=T[he],Be=M[he];Fe!==null&&Be!==void 0&&Be.update(Fe,me,u||a)}ke&&ke(te,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ue=new IS;Ue.setAnimationLoop(be),this.setAnimationLoop=function(te){ke=te},this.dispose=function(){}}}const T3=new Gt,zS=new ze;zS.set(-1,0,0,0,1,0,0,0,1);function R3(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,PS(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,x,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===bn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===bn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),x=m.envMap,S=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(T3.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zS),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A3(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const T=M.program;i.uniformBlockBinding(S,T)}function u(S,M){let T=r[S.id];T===void 0&&(g(S),T=c(S),r[S.id]=T,S.addEventListener("dispose",m));const w=M.program;i.updateUBOMapping(S,w);const y=e.render.frame;s[S.id]!==y&&(f(S),s[S.id]=y)}function c(S){const M=d();S.__bindingPointIndex=M;const T=n.createBuffer(),w=S.__size,y=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=r[S.id],T=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,R=T.length;y<R;y++){const P=T[y];if(Array.isArray(P))for(let L=0,N=P.length;L<N;L++)p(P[L],y,L,w);else p(P,y,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,M,T,w){if(v(S,M,T,w)===!0){const y=S.__offset,R=S.value;if(Array.isArray(R)){let P=0;for(let L=0;L<R.length;L++){const N=R[L],H=h(N);_(N,S.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,S.__data)}}function _(S,M,T){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,T)}function v(S,M,T,w){const y=S.value,R=M+"_"+T;if(w[R]===void 0)return typeof y=="number"||typeof y=="boolean"?w[R]=y:ArrayBuffer.isView(y)?w[R]=y.slice():w[R]=y.clone(),!0;{const P=w[R];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return w[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(S){const M=S.uniforms;let T=0;const w=16;for(let R=0,P=M.length;R<P;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let N=0,H=L.length;N<H;N++){const z=L[N],D=Array.isArray(z.value)?z.value:[z.value];for(let X=0,k=D.length;X<k;X++){const U=D[X],$=h(U),ee=T%w,ne=ee%$.boundary,se=ee+ne;T+=ne,se!==0&&w-se<$.storage&&(T+=w-se),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=$.storage}}}const y=T%w;return y>0&&(T+=w-y),S.__size=T,S.__cache={},this}function h(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function x(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:x}}const C3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function b3(){return Ii===null&&(Ii=new mA(C3,16,16,qs,xr),Ii.name="DFG_LUT",Ii.minFilter=fn,Ii.magFilter=fn,Ii.wrapS=ur,Ii.wrapT=ur,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class VS{constructor(e={}){const{canvas:t=LR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=oi}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,g=new Set([Zm,jm,Km]),h=new Set([oi,Ki,wl,Tl,$m,qm]),m=new Uint32Array(4),x=new Int32Array(4),S=new Z;let M=null,T=null;const w=[],y=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,N=null,H=null,z=null,D=null;this._outputColorSpace=vn;let X=0,k=0,U=null,$=-1,ee=null;const ne=new Dt,se=new Dt;let ke=null;const be=new tt(0);let Ue=0,te=t.width,me=t.height,he=1,Fe=null,Be=null;const Ne=new Dt(0,0,te,me),pt=new Dt(0,0,te,me);let He=!1;const it=new AS;let Ze=!1,Ye=!1;const yt=new Gt,bt=new Z,Nt=new Dt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function St(){return U===null?he:1}let b=i;function _e(A,B){return t.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xm}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),b===null){const B="webgl2";if(b=_e(B,A),b===null)throw _e(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Je("WebGLRenderer: "+A.message),A}let xe,C,E,I,O,W,re,oe,V,Q,ae,ve,fe,ce,Te,Pe,pe,F,ue,q,le,ge,ie;function Ee(){xe=new bb(b),xe.init(),le=new y3(b,xe),C=new Sb(b,xe,e,le),E=new v3(b,xe),C.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),H=b.createFramebuffer(),z=b.createFramebuffer(),D=b.createFramebuffer(),I=new Db(b),O=new r3,W=new x3(b,xe,E,O,C,le,I),re=new Cb(P),oe=new FA(b),ge=new xb(b,oe),V=new Pb(b,oe,I,ge),Q=new Nb(b,V,oe,ge,I),F=new Ib(b,C,W),Te=new Mb(O),ae=new i3(P,re,xe,C,ge,Te),ve=new R3(P,O),fe=new a3,ce=new d3(xe),pe=new vb(P,re,E,Q,_,l),Pe=new _3(P,Q,C),ie=new A3(b,I,C,E),ue=new yb(b,xe,I),q=new Lb(b,xe,I),I.programs=ae.programs,P.capabilities=C,P.extensions=xe,P.properties=O,P.renderLists=fe,P.shadowMap=Pe,P.state=E,P.info=I}Ee(),v!==oi&&(R=new Fb(v,t.width,t.height,o,r,s));const we=new w3(P,b);this.xr=we,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(te,me,!1))},this.getSize=function(A){return A.set(te,me)},this.setSize=function(A,B,J=!0){if(we.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,me=B,t.width=Math.floor(A*he),t.height=Math.floor(B*he),J===!0&&(t.style.width=A+"px",t.style.height=B+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(te*he,me*he).floor()},this.setDrawingBufferSize=function(A,B,J){te=A,me=B,he=J,t.width=Math.floor(A*J),t.height=Math.floor(B*J),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(v===oi){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ne)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,B,J,K){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,B,J,K),E.viewport(ne.copy(Ne).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(pt)},this.setScissor=function(A,B,J,K){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,B,J,K),E.scissor(se.copy(pt).multiplyScalar(he).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(A){E.setScissorTest(He=A)},this.setOpaqueSort=function(A){Fe=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,J=!0){let K=0;if(A){let j=!1;if(U!==null){const Me=U.texture.format;j=g.has(Me)}if(j){const Me=U.texture.type,Ae=h.has(Me),Se=pe.getClearColor(),Le=pe.getClearAlpha(),De=Se.r,Ve=Se.g,We=Se.b;Ae?(m[0]=De,m[1]=Ve,m[2]=We,m[3]=Le,b.clearBufferuiv(b.COLOR,0,m)):(x[0]=De,x[1]=Ve,x[2]=We,x[3]=Le,b.clearBufferiv(b.COLOR,0,x))}else K|=b.COLOR_BUFFER_BIT}B&&(K|=b.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(K|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&b.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),pe.dispose(),fe.dispose(),ce.dispose(),O.dispose(),re.dispose(),Q.dispose(),ge.dispose(),ie.dispose(),ae.dispose(),we.dispose(),we.removeEventListener("sessionstart",P0),we.removeEventListener("sessionend",L0),gs.stop()};function rt(A){A.preventDefault(),u_("WebGLRenderer: Context Lost."),L=!0}function nt(){u_("WebGLRenderer: Context Restored."),L=!1;const A=I.autoReset,B=Pe.enabled,J=Pe.autoUpdate,K=Pe.needsUpdate,j=Pe.type;Ee(),I.autoReset=A,Pe.enabled=B,Pe.autoUpdate=J,Pe.needsUpdate=K,Pe.type=j}function Mn(A){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qn(A){const B=A.target;B.removeEventListener("dispose",Qn),$l(B)}function $l(A){ql(A),O.remove(A)}function ql(A){const B=O.get(A).programs;B!==void 0&&(B.forEach(function(J){ae.releaseProgram(J)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,J,K,j,Me){B===null&&(B=Bt);const Ae=j.isMesh&&j.matrixWorld.determinantAffine()<0,Se=H1(A,B,J,K,j);E.setMaterial(K,Ae);let Le=J.index,De=1;if(K.wireframe===!0){if(Le=V.getWireframeAttribute(J),Le===void 0)return;De=2}const Ve=J.drawRange,We=J.attributes.position;let Ie=Ve.start*De,ot=(Ve.start+Ve.count)*De;Me!==null&&(Ie=Math.max(Ie,Me.start*De),ot=Math.min(ot,(Me.start+Me.count)*De)),Le!==null?(Ie=Math.max(Ie,0),ot=Math.min(ot,Le.count)):We!=null&&(Ie=Math.max(Ie,0),ot=Math.min(ot,We.count));const Ut=ot-Ie;if(Ut<0||Ut===1/0)return;ge.setup(j,K,Se,J,Le);let Pt,lt=ue;if(Le!==null&&(Pt=oe.get(Le),lt=q,lt.setIndex(Pt)),j.isMesh)K.wireframe===!0?(E.setLineWidth(K.wireframeLinewidth*St()),lt.setMode(b.LINES)):lt.setMode(b.TRIANGLES);else if(j.isLine){let rn=K.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*St()),j.isLineSegments?lt.setMode(b.LINES):j.isLineLoop?lt.setMode(b.LINE_LOOP):lt.setMode(b.LINE_STRIP)}else j.isPoints?lt.setMode(b.POINTS):j.isSprite&&lt.setMode(b.TRIANGLES);if(j.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const rn=j._multiDrawStarts,Re=j._multiDrawCounts,Fn=j._multiDrawCount,Qe=Le?oe.get(Le).bytesPerElement:1,Jn=O.get(K).currentProgram.getUniforms();for(let Pi=0;Pi<Fn;Pi++)Jn.setValue(b,"_gl_DrawID",Pi),lt.render(rn[Pi]/Qe,Re[Pi])}else if(j.isInstancedMesh)lt.renderInstances(Ie,Ut,j.count);else if(J.isInstancedBufferGeometry){const rn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,rn);lt.renderInstances(Ie,Ut,Re)}else lt.render(Ie,Ut)};function ms(A,B,J){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,jl(A,B,J),A.side=os,A.needsUpdate=!0,jl(A,B,J),A.side=ki):jl(A,B,J)}this.compile=function(A,B,J=null){J===null&&(J=A),T=ce.get(J),T.init(B),y.push(T),J.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),A!==J&&A.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const K=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const Se=Me[Ae];ms(Se,J,j),K.add(Se)}else ms(Me,J,j),K.add(Me)}),T=y.pop(),K},this.compileAsync=function(A,B,J=null){const K=this.compile(A,B,J);return new Promise(j=>{function Me(){if(K.forEach(function(Ae){O.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){j(A);return}setTimeout(Me,10)}xe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ef=null;function z1(A){Ef&&Ef(A)}function P0(){gs.stop()}function L0(){gs.start()}const gs=new IS;gs.setAnimationLoop(z1),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(A){Ef=A,we.setAnimationLoop(A),A===null?gs.stop():gs.start()},we.addEventListener("sessionstart",P0),we.addEventListener("sessionend",L0),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(A,B);const J=we.enabled===!0&&we.isPresenting===!0,K=R!==null&&(U===null||J)&&R.begin(P,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(B),B=we.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,B,U),T=ce.get(A,y.length),T.init(B),T.state.textureUnits=W.getTextureUnits(),y.push(T),yt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(yt,Vi,B.reversedDepth),Ye=this.localClippingEnabled,Ze=Te.init(this.clippingPlanes,Ye),M=fe.get(A,w.length),M.init(),w.push(M),we.enabled===!0&&we.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&wf(Ae,B,-1/0,P.sortObjects)}wf(A,B,0,P.sortObjects),M.finish(),P.sortObjects===!0&&M.sort(Fe,Be,B.reversedDepth),mt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,mt&&pe.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Te.beginShadows();const j=T.state.shadowsArray;if(Pe.render(j,A,B),Ze===!0&&Te.endShadows(),(K&&R.hasRenderPass())===!1){const Ae=M.opaque,Se=M.transmissive;if(T.setupLights(),B.isArrayCamera){const Le=B.cameras;if(Se.length>0)for(let De=0,Ve=Le.length;De<Ve;De++){const We=Le[De];I0(Ae,Se,A,We)}mt&&pe.render(A);for(let De=0,Ve=Le.length;De<Ve;De++){const We=Le[De];D0(M,A,We,We.viewport)}}else Se.length>0&&I0(Ae,Se,A,B),mt&&pe.render(A),D0(M,A,B)}U!==null&&k===0&&(W.updateMultisampleRenderTarget(U),W.updateRenderTargetMipmap(U)),K&&R.end(P),A.isScene===!0&&A.onAfterRender(P,A,B),ge.resetDefaultState(),$=-1,ee=null,y.pop(),y.length>0?(T=y[y.length-1],W.setTextureUnits(T.state.textureUnits),Ze===!0&&Te.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,N!==null&&N.renderEnd()};function wf(A,B,J,K){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){K&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const Ae=Q.update(A),Se=A.material;Se.visible&&M.push(A,Ae,Se,J,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){const Ae=Q.update(A),Se=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Nt.copy(Ae.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(Se)){const Le=Ae.groups;for(let De=0,Ve=Le.length;De<Ve;De++){const We=Le[De],Ie=Se[We.materialIndex];Ie&&Ie.visible&&M.push(A,Ae,Ie,J,Nt.z,We)}}else Se.visible&&M.push(A,Ae,Se,J,Nt.z,null)}}const Me=A.children;for(let Ae=0,Se=Me.length;Ae<Se;Ae++)wf(Me[Ae],B,J,K)}function D0(A,B,J,K){const{opaque:j,transmissive:Me,transparent:Ae}=A;T.setupLightsView(J),Ze===!0&&Te.setGlobalState(P.clippingPlanes,J),K&&E.viewport(ne.copy(K)),j.length>0&&Kl(j,B,J),Me.length>0&&Kl(Me,B,J),Ae.length>0&&Kl(Ae,B,J),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function I0(A,B,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){const Ie=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Yi(1,1,{generateMipmaps:!0,type:Ie?xr:oi,minFilter:Is,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const Me=T.state.transmissionRenderTarget[K.id],Ae=K.viewport||ne;Me.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const Se=P.getRenderTarget(),Le=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(be),Ue=P.getClearAlpha(),Ue<1&&P.setClearColor(16777215,.5),P.clear(),mt&&pe.render(J);const Ve=P.toneMapping;P.toneMapping=Xi;const We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),Ze===!0&&Te.setGlobalState(P.clippingPlanes,K),Kl(A,J,K),W.updateMultisampleRenderTarget(Me),W.updateRenderTargetMipmap(Me),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ot=0,Ut=B.length;ot<Ut;ot++){const Pt=B[ot],{object:lt,geometry:rn,material:Re,group:Fn}=Pt;if(Re.side===ki&&lt.layers.test(K.layers)){const Qe=Re.side;Re.side=bn,Re.needsUpdate=!0,N0(lt,J,K,rn,Re,Fn),Re.side=Qe,Re.needsUpdate=!0,Ie=!0}}Ie===!0&&(W.updateMultisampleRenderTarget(Me),W.updateRenderTargetMipmap(Me))}P.setRenderTarget(Se,Le,De),P.setClearColor(be,Ue),We!==void 0&&(K.viewport=We),P.toneMapping=Ve}function Kl(A,B,J){const K=B.isScene===!0?B.overrideMaterial:null;for(let j=0,Me=A.length;j<Me;j++){const Ae=A[j],{object:Se,geometry:Le,group:De}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&K!==null&&(Ve=K),Se.layers.test(J.layers)&&N0(Se,B,J,Le,Ve,De)}}function N0(A,B,J,K,j,Me){A.onBeforeRender(P,B,J,K,j,Me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(P,B,J,K,A,Me),j.transparent===!0&&j.side===ki&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,P.renderBufferDirect(J,B,K,j,A,Me),j.side=os,j.needsUpdate=!0,P.renderBufferDirect(J,B,K,j,A,Me),j.side=ki):P.renderBufferDirect(J,B,K,j,A,Me),A.onAfterRender(P,B,J,K,j,Me)}function jl(A,B,J){B.isScene!==!0&&(B=Bt);const K=O.get(A),j=T.state.lights,Me=T.state.shadowsArray,Ae=j.state.version,Se=ae.getParameters(A,j.state,Me,B,J,T.state.lightProbeGridArray),Le=ae.getProgramCacheKey(Se);let De=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,K.fog=B.fog;const Ve=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=re.get(A.envMap||K.environment,Ve),K.envMapRotation=K.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",Qn),De=new Map,K.programs=De);let We=De.get(Le);if(We!==void 0){if(K.currentProgram===We&&K.lightsStateVersion===Ae)return F0(A,Se),We}else Se.uniforms=ae.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,J,Se),A.onBeforeCompile(Se,P),We=ae.acquireProgram(Se,Le),De.set(Le,We),K.uniforms=Se.uniforms;const Ie=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=Te.uniform),F0(A,Se),K.needsLights=W1(A),K.lightsStateVersion=Ae,K.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=We,K.uniformsList=null,We}function U0(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=ac.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function F0(A,B){const J=O.get(A);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function V1(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let J=0,K=A.length;J<K;J++){const j=A[J];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function H1(A,B,J,K,j){B.isScene!==!0&&(B=Bt),W.resetTextureUnits();const Me=B.fog,Ae=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?B.environment:null,Se=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ke.workingColorSpace,Le=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,De=re.get(K.envMap||Ae,Le),Ve=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ie=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color;let Pt=Xi;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,rn=lt!==void 0?lt.length:0,Re=O.get(K),Fn=T.state.lights;if(Ze===!0&&(Ye===!0||A!==ee)){const dt=A===ee&&K.id===$;Te.setState(K,A,dt)}let Qe=!1;K.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Fn.state.version||Re.outputColorSpace!==Se||j.isBatchedMesh&&Re.batching===!1||!j.isBatchedMesh&&Re.batching===!0||j.isBatchedMesh&&Re.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Re.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Re.instancing===!1||!j.isInstancedMesh&&Re.instancing===!0||j.isSkinnedMesh&&Re.skinning===!1||!j.isSkinnedMesh&&Re.skinning===!0||j.isInstancedMesh&&Re.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Re.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Re.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Re.instancingMorph===!1&&j.morphTexture!==null||Re.envMap!==De||K.fog===!0&&Re.fog!==Me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Te.numPlanes||Re.numIntersection!==Te.numIntersection)||Re.vertexAlphas!==Ve||Re.vertexTangents!==We||Re.morphTargets!==Ie||Re.morphNormals!==ot||Re.morphColors!==Ut||Re.toneMapping!==Pt||Re.morphTargetsCount!==rn||!!Re.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Re.__version=K.version);let Jn=Re.currentProgram;Qe===!0&&(Jn=jl(K,B,j),N&&K.isNodeMaterial&&N.onUpdateProgram(K,Jn,Re));let Pi=!1,Ar=!1,ea=!1;const ut=Jn.getUniforms(),Ft=Re.uniforms;if(E.useProgram(Jn.program)&&(Pi=!0,Ar=!0,ea=!0),K.id!==$&&($=K.id,Ar=!0),Re.needsLights){const dt=V1(T.state.lightProbeGridArray,j);Re.lightProbeGrid!==dt&&(Re.lightProbeGrid=dt,Ar=!0)}if(Pi||ee!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(b,"projectionMatrix",A.projectionMatrix),ut.setValue(b,"viewMatrix",A.matrixWorldInverse);const br=ut.map.cameraPosition;br!==void 0&&br.setValue(b,bt.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&ut.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ut.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),ee!==A&&(ee=A,Ar=!0,ea=!0)}if(Re.needsLights&&(Fn.state.directionalShadowMap.length>0&&ut.setValue(b,"directionalShadowMap",Fn.state.directionalShadowMap,W),Fn.state.spotShadowMap.length>0&&ut.setValue(b,"spotShadowMap",Fn.state.spotShadowMap,W),Fn.state.pointShadowMap.length>0&&ut.setValue(b,"pointShadowMap",Fn.state.pointShadowMap,W)),j.isSkinnedMesh){ut.setOptional(b,j,"bindMatrix"),ut.setOptional(b,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ut.setValue(b,"boneTexture",dt.boneTexture,W))}j.isBatchedMesh&&(ut.setOptional(b,j,"batchingTexture"),ut.setValue(b,"batchingTexture",j._matricesTexture,W),ut.setOptional(b,j,"batchingIdTexture"),ut.setValue(b,"batchingIdTexture",j._indirectTexture,W),ut.setOptional(b,j,"batchingColorTexture"),j._colorsTexture!==null&&ut.setValue(b,"batchingColorTexture",j._colorsTexture,W));const Cr=J.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&F.update(j,J,Jn),(Ar||Re.receiveShadow!==j.receiveShadow)&&(Re.receiveShadow=j.receiveShadow,ut.setValue(b,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&B.environment!==null&&(Ft.envMapIntensity.value=B.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=b3()),Ar){if(ut.setValue(b,"toneMappingExposure",P.toneMappingExposure),Re.needsLights&&G1(Ft,ea),Me&&K.fog===!0&&ve.refreshFogUniforms(Ft,Me),ve.refreshMaterialUniforms(Ft,K,he,me,T.state.transmissionRenderTarget[A.id]),Re.needsLights&&Re.lightProbeGrid){const dt=Re.lightProbeGrid;Ft.probesSH.value=dt.texture,Ft.probesMin.value.copy(dt.boundingBox.min),Ft.probesMax.value.copy(dt.boundingBox.max),Ft.probesResolution.value.copy(dt.resolution)}ac.upload(b,U0(Re),Ft,W)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ac.upload(b,U0(Re),Ft,W),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ut.setValue(b,"center",j.center),ut.setValue(b,"modelViewMatrix",j.modelViewMatrix),ut.setValue(b,"normalMatrix",j.normalMatrix),ut.setValue(b,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){const dt=K.uniformsGroups;for(let br=0,ta=dt.length;br<ta;br++){const O0=dt[br];ie.update(O0,Jn),ie.bind(O0,Jn)}}return Jn}function G1(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function W1(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,B,J){const K=O.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=B,O.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const J=O.get(A);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,J=0){U=A,X=B,k=J;let K=null,j=!1,Me=!1;if(A){const Se=O.get(A);if(Se.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(b.FRAMEBUFFER,Se.__webglFramebuffer),ne.copy(A.viewport),se.copy(A.scissor),ke=A.scissorTest,E.viewport(ne),E.scissor(se),E.setScissorTest(ke),$=-1;return}else if(Se.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Se.__hasExternalTextures)W.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(Se.__boundDepthTexture!==Ve){if(Ve!==null&&O.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Me=!0);const De=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[B])?K=De[B][J]:K=De[B],j=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?K=O.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?K=De[J]:K=De,ne.copy(A.viewport),se.copy(A.scissor),ke=A.scissorTest}else ne.copy(Ne).multiplyScalar(he).floor(),se.copy(pt).multiplyScalar(he).floor(),ke=He;if(J!==0&&(K=H),E.bindFramebuffer(b.FRAMEBUFFER,K)&&E.drawBuffers(A,K),E.viewport(ne),E.scissor(se),E.setScissorTest(ke),j){const Se=O.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,J)}else if(Me){const Se=B;for(let Le=0;Le<A.textures.length;Le++){const De=O.get(A.textures[Le]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Le,De.__webglTexture,J,Se)}}else if(A!==null&&J!==0){const Se=O.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Se.__webglTexture,J)}$=-1},this.readRenderTargetPixels=function(A,B,J,K,j,Me,Ae,Se=0){if(!(A&&A.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){E.bindFramebuffer(b.FRAMEBUFFER,Le);try{const De=A.textures[Se],Ve=De.format,We=De.type;if(A.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Se),!C.textureFormatReadable(Ve)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(We)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-K&&J>=0&&J<=A.height-j&&b.readPixels(B,J,K,j,le.convert(Ve),le.convert(We),Me)}finally{const De=U!==null?O.get(U).__webglFramebuffer:null;E.bindFramebuffer(b.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,B,J,K,j,Me,Ae,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(B>=0&&B<=A.width-K&&J>=0&&J<=A.height-j){E.bindFramebuffer(b.FRAMEBUFFER,Le);const De=A.textures[Se],Ve=De.format,We=De.type;if(A.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Se),!C.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ie),b.bufferData(b.PIXEL_PACK_BUFFER,Me.byteLength,b.STREAM_READ),b.readPixels(B,J,K,j,le.convert(Ve),le.convert(We),0);const ot=U!==null?O.get(U).__webglFramebuffer:null;E.bindFramebuffer(b.FRAMEBUFFER,ot);const Ut=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await DR(b,Ut,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ie),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Me),b.deleteBuffer(Ie),b.deleteSync(Ut),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,J=0){const K=Math.pow(2,-J),j=Math.floor(A.image.width*K),Me=Math.floor(A.image.height*K),Ae=B!==null?B.x:0,Se=B!==null?B.y:0;W.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,J,0,0,Ae,Se,j,Me),E.unbindTexture()},this.copyTextureToTexture=function(A,B,J=null,K=null,j=0,Me=0){let Ae,Se,Le,De,Ve,We,Ie,ot,Ut;const Pt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(J!==null)Ae=J.max.x-J.min.x,Se=J.max.y-J.min.y,Le=J.isBox3?J.max.z-J.min.z:1,De=J.min.x,Ve=J.min.y,We=J.isBox3?J.min.z:0;else{const Ft=Math.pow(2,-j);Ae=Math.floor(Pt.width*Ft),Se=Math.floor(Pt.height*Ft),A.isDataArrayTexture?Le=Pt.depth:A.isData3DTexture?Le=Math.floor(Pt.depth*Ft):Le=1,De=0,Ve=0,We=0}K!==null?(Ie=K.x,ot=K.y,Ut=K.z):(Ie=0,ot=0,Ut=0);const lt=le.convert(B.format),rn=le.convert(B.type);let Re;B.isData3DTexture?(W.setTexture3D(B,0),Re=b.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(W.setTexture2DArray(B,0),Re=b.TEXTURE_2D_ARRAY):(W.setTexture2D(B,0),Re=b.TEXTURE_2D),E.activeTexture(b.TEXTURE0),E.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);const Fn=E.getParameter(b.UNPACK_ROW_LENGTH),Qe=E.getParameter(b.UNPACK_IMAGE_HEIGHT),Jn=E.getParameter(b.UNPACK_SKIP_PIXELS),Pi=E.getParameter(b.UNPACK_SKIP_ROWS),Ar=E.getParameter(b.UNPACK_SKIP_IMAGES);E.pixelStorei(b.UNPACK_ROW_LENGTH,Pt.width),E.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Pt.height),E.pixelStorei(b.UNPACK_SKIP_PIXELS,De),E.pixelStorei(b.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(b.UNPACK_SKIP_IMAGES,We);const ea=A.isDataArrayTexture||A.isData3DTexture,ut=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Ft=O.get(A),Cr=O.get(B),dt=O.get(Ft.__renderTarget),br=O.get(Cr.__renderTarget);E.bindFramebuffer(b.READ_FRAMEBUFFER,dt.__webglFramebuffer),E.bindFramebuffer(b.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let ta=0;ta<Le;ta++)ea&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,O.get(A).__webglTexture,j,We+ta),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,O.get(B).__webglTexture,Me,Ut+ta)),b.blitFramebuffer(De,Ve,Ae,Se,Ie,ot,Ae,Se,b.DEPTH_BUFFER_BIT,b.NEAREST);E.bindFramebuffer(b.READ_FRAMEBUFFER,null),E.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||O.has(A)){const Ft=O.get(A),Cr=O.get(B);E.bindFramebuffer(b.READ_FRAMEBUFFER,z),E.bindFramebuffer(b.DRAW_FRAMEBUFFER,D);for(let dt=0;dt<Le;dt++)ea?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ft.__webglTexture,j,We+dt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ft.__webglTexture,j),ut?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Cr.__webglTexture,Me,Ut+dt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Cr.__webglTexture,Me),j!==0?b.blitFramebuffer(De,Ve,Ae,Se,Ie,ot,Ae,Se,b.COLOR_BUFFER_BIT,b.NEAREST):ut?b.copyTexSubImage3D(Re,Me,Ie,ot,Ut+dt,De,Ve,Ae,Se):b.copyTexSubImage2D(Re,Me,Ie,ot,De,Ve,Ae,Se);E.bindFramebuffer(b.READ_FRAMEBUFFER,null),E.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ut?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Re,Me,Ie,ot,Ut,Ae,Se,Le,lt,rn,Pt.data):B.isCompressedArrayTexture?b.compressedTexSubImage3D(Re,Me,Ie,ot,Ut,Ae,Se,Le,lt,Pt.data):b.texSubImage3D(Re,Me,Ie,ot,Ut,Ae,Se,Le,lt,rn,Pt):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Me,Ie,ot,Ae,Se,lt,rn,Pt.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Me,Ie,ot,Pt.width,Pt.height,lt,Pt.data):b.texSubImage2D(b.TEXTURE_2D,Me,Ie,ot,Ae,Se,lt,rn,Pt);E.pixelStorei(b.UNPACK_ROW_LENGTH,Fn),E.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Qe),E.pixelStorei(b.UNPACK_SKIP_PIXELS,Jn),E.pixelStorei(b.UNPACK_SKIP_ROWS,Pi),E.pixelStorei(b.UNPACK_SKIP_IMAGES,Ar),Me===0&&B.generateMipmaps&&b.generateMipmap(Re),E.unbindTexture()},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){X=0,k=0,U=null,E.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Rp=8,P3=`
#define MAX_COLORS ${Rp}
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
`,L3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function D3(n){const e=n.replace("#","").trim(),t=e.length===3?[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16)]:[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)];return new Z(t[0]/255,t[1]/255,t[2]/255)}function I3({className:n,style:e,rotation:t=90,speed:i=.2,colors:r=[],transparent:s=!0,autoRotate:a=0,scale:o=1,frequency:l=1,warpStrength:u=1,mouseInfluence:c=1,parallax:d=.5,noise:f=.15,iterations:p=1,intensity:_=1.5,bandWidth:v=6}){const g=Y.useRef(null),h=Y.useRef(null),m=Y.useRef(null),x=Y.useRef(null),S=Y.useRef(null),M=Y.useRef(t),T=Y.useRef(a),w=Y.useRef(new qe(0,0)),y=Y.useRef(new qe(0,0));return Y.useEffect(()=>{const R=g.current,P=new wS,L=new a0(-1,1,1,-1,0,1),N=new _o(2,2),H=Array.from({length:Rp},()=>new Z(0,0,0)),z=new bi({vertexShader:L3,fragmentShader:P3,uniforms:{uCanvas:{value:new qe(1,1)},uTime:{value:0},uSpeed:{value:i},uRot:{value:new qe(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:s?1:0},uScale:{value:o},uFrequency:{value:l},uWarpStrength:{value:u},uPointer:{value:new qe(0,0)},uMouseInfluence:{value:c},uParallax:{value:d},uNoise:{value:f},uIterations:{value:p},uIntensity:{value:_},uBandWidth:{value:v}},premultipliedAlpha:!0,transparent:!0});h.current=z,P.add(new Ci(N,z));const D=new VS({antialias:!1,powerPreference:"high-performance",alpha:!0});m.current=D,D.outputColorSpace=vn,D.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),D.setClearColor(0,s?0:1),D.domElement.style.cssText="width:100%;height:100%;display:block;",R.appendChild(D.domElement);const X=new DS,k=()=>{const ne=R.clientWidth||1,se=R.clientHeight||1;D.setSize(ne,se,!1),z.uniforms.uCanvas.value.set(ne,se)};k();const U=new ResizeObserver(k);U.observe(R),S.current=U;const $=()=>{const ne=X.getDelta();z.uniforms.uTime.value=X.elapsedTime;const ke=(M.current%360+T.current*X.elapsedTime)*Math.PI/180;z.uniforms.uRot.value.set(Math.cos(ke),Math.sin(ke));const be=y.current,Ue=w.current;be.lerp(Ue,Math.min(1,ne*8)),z.uniforms.uPointer.value.copy(be),D.render(P,L),x.current=requestAnimationFrame($)};x.current=requestAnimationFrame($);const ee=ne=>{const se=R.getBoundingClientRect();w.current.set((ne.clientX-se.left)/(se.width||1)*2-1,-((ne.clientY-se.top)/(se.height||1)*2-1))};return window.addEventListener("pointermove",ee,{passive:!0}),()=>{var ne;x.current!==null&&cancelAnimationFrame(x.current),(ne=S.current)==null||ne.disconnect(),window.removeEventListener("pointermove",ee),N.dispose(),z.dispose(),D.dispose(),D.forceContextLoss(),D.domElement.parentElement===R&&R.removeChild(D.domElement)}},[]),Y.useEffect(()=>{const R=h.current,P=m.current;if(!R)return;M.current=t,T.current=a,R.uniforms.uSpeed.value=i,R.uniforms.uScale.value=o,R.uniforms.uFrequency.value=l,R.uniforms.uWarpStrength.value=u,R.uniforms.uMouseInfluence.value=c,R.uniforms.uParallax.value=d,R.uniforms.uNoise.value=f,R.uniforms.uIterations.value=p,R.uniforms.uIntensity.value=_,R.uniforms.uBandWidth.value=v;const L=(r||[]).filter(Boolean).slice(0,Rp).map(D3);R.uniforms.uColors.value.forEach((N,H)=>{H<L.length?N.copy(L[H]):N.set(0,0,0)}),R.uniforms.uColorCount.value=L.length,R.uniforms.uTransparent.value=s?1:0,P==null||P.setClearColor(0,s?0:1)},[t,a,i,o,l,u,c,d,f,p,_,v,r,s]),G.jsx("div",{ref:g,className:n,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",...e}})}const ti=80,N3=38,U3=[1,2,3];function No({topColor:n,bottomColor:e}){const t=Y.useRef(null),i=Y.useRef(null);return Y.useEffect(()=>{const r=t.current,s=i.current;if(!r||!s)return;let a=window.innerWidth;s.width=a*window.devicePixelRatio,s.height=ti*window.devicePixelRatio,s.style.width=a+"px",s.style.height=ti+"px";const o=s.getContext("2d");o.scale(window.devicePixelRatio,window.devicePixelRatio);let l=0,u=window.scrollY,c=1,d=0;function f(){const h=window.scrollY-u;h!==0&&(c=h>0?1:-1),d+=Math.abs(h),u=window.scrollY}window.addEventListener("scroll",f,{passive:!0});function p(){a=window.innerWidth,s.width=a*window.devicePixelRatio,s.height=ti*window.devicePixelRatio,s.style.width=a+"px",s.style.height=ti+"px",o.scale(window.devicePixelRatio,window.devicePixelRatio)}window.addEventListener("resize",p);const _=performance.now();let v;function g(){const m=r.getBoundingClientRect().top,x=m-ti/2;if(s.style.top=x+"px",m>-ti&&m<window.innerHeight+ti){s.style.visibility="visible",d>0&&(l=Math.min(l+d*.4,N3),d=0),l*=.91,Math.abs(l)<.15&&(l=0);const M=(performance.now()-_)/1e3,T=ti/2;o.clearRect(0,0,a,ti),o.fillStyle=n,o.fillRect(0,0,a,ti),o.beginPath(),o.moveTo(0,T);for(let w=0;w<=a;w+=2){const y=w/a;let R=0;U3.forEach((P,L)=>{const N=Math.sin(P*Math.PI*y),H=Math.pow(.45,L),z=1.8+P*1.2,D=Math.cos(z*M)*H;R+=N*D}),o.lineTo(w,T-l*R*c)}o.lineTo(a,ti),o.lineTo(0,ti),o.closePath(),o.fillStyle=e,o.fill()}else s.style.visibility="hidden",l*=.91,d=0;v=requestAnimationFrame(g)}return g(),()=>{cancelAnimationFrame(v),window.removeEventListener("scroll",f),window.removeEventListener("resize",p)}},[n,e]),G.jsxs(G.Fragment,{children:[G.jsx("div",{ref:t,style:{position:"relative",height:0,pointerEvents:"none"}}),G.jsx("canvas",{ref:i,style:{position:"fixed",left:0,zIndex:50,pointerEvents:"none",display:"block",visibility:"hidden"}})]})}function F3(){return G.jsxs("header",{className:"top-nav","aria-label":"VelvetY main navigation",children:[G.jsxs("a",{className:"brand",href:"/","aria-label":"VelvetY home",children:[G.jsx("span",{className:"brand-mark","aria-hidden":"true"}),G.jsx("span",{children:"VelvetY"})]}),G.jsxs("nav",{className:"nav-links","aria-label":"Primary navigation",children:[G.jsx("a",{href:"#services",children:"Services"}),G.jsx("a",{href:"#work",children:"Work"}),G.jsx("a",{href:"#studio",children:"Studio"}),G.jsx("a",{className:"nav-cta",href:"#contact",children:"Start a project"})]})]})}class ni{constructor(e,t,i){Pr(this,"x");Pr(this,"y");Pr(this,"z");this.x=e,this.y=t,this.z=i}dot2(e,t){return this.x*e+this.y*t}}class O3{constructor(e=0){Pr(this,"grad3");Pr(this,"p");Pr(this,"perm");Pr(this,"gradP");this.grad3=[new ni(1,1,0),new ni(-1,1,0),new ni(1,-1,0),new ni(-1,-1,0),new ni(1,0,1),new ni(-1,0,1),new ni(1,0,-1),new ni(-1,0,-1),new ni(0,1,1),new ni(0,-1,1),new ni(0,1,-1),new ni(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(e)}seed(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(let t=0;t<256;t++){const i=t&1?this.p[t]^e&255:this.p[t]^e>>8&255;this.perm[t]=this.perm[t+256]=i,this.gradP[t]=this.gradP[t+256]=this.grad3[i%12]}}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,i){return(1-i)*e+i*t}perlin2(e,t){let i=Math.floor(e),r=Math.floor(t);e-=i,t-=r,i&=255,r&=255;const s=this.gradP[i+this.perm[r]].dot2(e,t),a=this.gradP[i+this.perm[r+1]].dot2(e,t-1),o=this.gradP[i+1+this.perm[r]].dot2(e-1,t),l=this.gradP[i+1+this.perm[r+1]].dot2(e-1,t-1),u=this.fade(e);return this.lerp(this.lerp(s,o,u),this.lerp(a,l,u),this.fade(t))}}function k3(){const n=Y.useRef(null),e=Y.useRef(null);return Y.useEffect(()=>{const t=e.current,i=n.current;if(!t||!i)return;const r=t.getContext("2d"),s=new O3(Math.random()),a={lineColor:"rgba(244,241,232,.18)",waveSpeedX:.018,waveSpeedY:.008,waveAmpX:34,waveAmpY:18,xGap:13,yGap:36,friction:.925,tension:.006,maxCursorMove:92};let o={width:0,height:0,left:0,top:0},l=[];const u={x:-10,y:0,lx:0,ly:0,sx:0,sy:0,v:0,vs:0,a:0,set:!1};let c=0;function d(){o=i.getBoundingClientRect();const M=Math.min(window.devicePixelRatio||1,window.innerWidth<=760?1.15:1.5);t.width=Math.max(1,Math.floor(o.width*M)),t.height=Math.max(1,Math.floor(o.height*M)),r.setTransform(M,0,0,M,0,0)}function f(){const{width:M,height:T}=o;l=[];const w=M+200,y=T+30,R=Math.ceil(w/a.xGap),P=Math.ceil(y/a.yGap),L=(M-a.xGap*R)/2,N=(T-a.yGap*P)/2;for(let H=0;H<=R;H++){const z=[];for(let D=0;D<=P;D++)z.push({x:L+a.xGap*H,y:N+a.yGap*D,wave:{x:0,y:0},cursor:{x:0,y:0,vx:0,vy:0}});l.push(z)}}function p(M){for(const T of l)for(const w of T){const y=s.perlin2((w.x+M*a.waveSpeedX)*.002,(w.y+M*a.waveSpeedY)*.0015)*12;w.wave.x=Math.cos(y)*a.waveAmpX,w.wave.y=Math.sin(y)*a.waveAmpY;const R=w.x-u.sx,P=w.y-u.sy,L=Math.hypot(R,P),N=Math.max(175,u.vs);if(L<N){const H=1-L/N,z=Math.cos(L*.001)*H;w.cursor.vx+=Math.cos(u.a)*z*N*u.vs*65e-5,w.cursor.vy+=Math.sin(u.a)*z*N*u.vs*65e-5}w.cursor.vx+=(0-w.cursor.x)*a.tension,w.cursor.vy+=(0-w.cursor.y)*a.tension,w.cursor.vx*=a.friction,w.cursor.vy*=a.friction,w.cursor.x+=w.cursor.vx*2,w.cursor.y+=w.cursor.vy*2,w.cursor.x=Math.min(a.maxCursorMove,Math.max(-92,w.cursor.x)),w.cursor.y=Math.min(a.maxCursorMove,Math.max(-92,w.cursor.y))}}function _(M,T=!0){const w=M.x+M.wave.x+(T?M.cursor.x:0),y=M.y+M.wave.y+(T?M.cursor.y:0);return{x:Math.round(w*10)/10,y:Math.round(y*10)/10}}function v(){const{width:M,height:T}=o;r.clearRect(0,0,M,T),r.beginPath(),r.strokeStyle=a.lineColor,r.lineWidth=1;for(const w of l){let y=_(w[0],!1);r.moveTo(y.x,y.y),w.forEach((R,P)=>{const L=P===w.length-1;y=_(R,!L);const N=_(w[P+1]||w[w.length-1],!L);r.lineTo(y.x,y.y),L&&r.moveTo(N.x,N.y)})}r.stroke()}function g(M){u.sx+=(u.x-u.sx)*.1,u.sy+=(u.y-u.sy)*.1;const T=u.x-u.lx,w=u.y-u.ly,y=Math.hypot(T,w);u.v=y,u.vs+=(y-u.vs)*.1,u.vs=Math.min(100,u.vs),u.lx=u.x,u.ly=u.y,u.a=Math.atan2(w,T),i.style.setProperty("--x",`${u.sx}px`),i.style.setProperty("--y",`${u.sy}px`),p(M),v(),c=requestAnimationFrame(g)}function h(M,T){const w=o;u.x=M-w.left,u.y=T-w.top,u.set||(u.sx=u.x,u.sy=u.y,u.lx=u.x,u.ly=u.y,u.set=!0)}function m(){d(),f()}function x(M){h(M.clientX,M.clientY)}function S(M){const T=M.touches[0];T&&h(T.clientX,T.clientY)}return d(),f(),c=requestAnimationFrame(g),window.addEventListener("resize",m),window.addEventListener("mousemove",x),window.addEventListener("touchmove",S,{passive:!0}),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",x),window.removeEventListener("touchmove",S),cancelAnimationFrame(c)}},[]),G.jsx("div",{className:"waves-root","aria-hidden":"true",children:G.jsx("div",{ref:n,className:"waves-inner",children:G.jsx("canvas",{ref:e,className:"waves-canvas"})})})}function B3(){const n=Y.useRef(null);return Y.useEffect(()=>{const e=n.current;if(!e)return;const t=e.getContext("2d",{alpha:!0}),i=(b,_e,xe)=>Math.max(_e,Math.min(xe,b)),r=(b,_e)=>b+Math.random()*(_e-b),s=b=>(b=i(b,0,1),1-Math.pow(1-b,3)),a=b=>(b=i(b,0,1),b<.5?4*b*b*b:1-Math.pow(-2*b+2,3)/2),o=b=>{const _e=Math.sin(b*127.1+311.7)*43758.5453123;return _e-Math.floor(_e)},l=matchMedia("(max-width: 760px)").matches,u=matchMedia("(prefers-reduced-motion: reduce)").matches;let c=1,d=1,f=1,p=0,_=0,v=260,g=0,h=performance.now();const m={baseSpin:.18,mouseSpin:.36,inertia:.9,outerGravity:1.05,innerFluid:1.05,implodeStrength:1.55,implodePoint:.18,expandStrength:.9,explodeStrength:1.55,explodePoint:.28,vanishPoint:.44,vanishSpeed:1.35,centerText:"",textSize:.72,textAlpha:.82,textGlow:.72,textExplode:.82},x={active:!1,x:0,y:0,tx:0,ty:0,px:-9999,py:-9999,vx:0,vy:0,outer:0,inner:0,pulse:0,last:0},S={x:-.22,y:-.62,z:-.08,vx:.003,vy:.005,vz:.001},M={value:0,target:0,progress:0,implode:0,expand:0,explode:0,vanish:0,flash:0},T=[],w=[],y=[];function R(b,_e,xe,C,E,I){let O=Math.cos(C),W=Math.sin(C),re=_e*O-xe*W,oe=_e*W+xe*O;_e=re,xe=oe,O=Math.cos(E),W=Math.sin(E);let V=b*O+xe*W;return oe=-b*W+xe*O,b=V,xe=oe,O=Math.cos(I),W=Math.sin(I),V=b*O-_e*W,re=b*W+_e*O,{x:V,y:re,z:xe}}function P(){f=Math.min(window.devicePixelRatio||1,l?1.15:1.55),c=Math.max(1,innerWidth),d=Math.max(1,innerHeight),e.width=Math.floor(c*f),e.height=Math.floor(d*f),e.style.width=c+"px",e.style.height=d+"px",t.setTransform(f,0,0,f,0,0),p=c*.5,_=d*.5,v=Math.min(c,d)*(l?.34:.36)}function L(){T.length=w.length=y.length=0;const b=l?1550:3900,_e=l?290:680;for(let C=0;C<b;C++){const E=Math.random();let I=Math.PI*2*E;const O=r(-.88,.88),W=Math.acos(O),re=Math.floor(r(0,6)),oe=re*1.047+o(C)*.65;I+=Math.sin(W*4.2+oe)*.33;const V=Math.sin(I*2.8+W*5.4+oe)*.5+.5;if(o(C*3.3+re*17.7)>.83&&V<.62||Math.abs(O)<.18&&V<.33)continue;const Q=r(.89,1.04)+Math.sin(I*5+W*3)*.018,ae=Math.sin(W)*Math.cos(I)*Q,ve=Math.sin(W)*Math.sin(I)*Q,fe=Math.cos(W)*Q,ce=Math.pow(1-Math.abs(O),.55);T.push({x:ae,y:ve,z:fe,stream:re,phase:r(0,Math.PI*2),twinkle:r(.55,1),size:Math.random()<.92?r(.5,1.15):r(1.15,1.95),alpha:r(.52,1)*ce})}for(let C=0;C<_e;C++){const E=r(0,Math.PI*2),I=Math.acos(r(-.8,.8)),O=Math.pow(r(.18,.82),1.8);O<.24&&Math.random()<.7||w.push({x:Math.sin(I)*Math.cos(E)*O,y:Math.sin(I)*Math.sin(E)*O,z:Math.cos(I)*O,phase:r(0,Math.PI*2),size:r(.42,1),alpha:r(.16,.38)})}const xe=l?8:14;for(let C=0;C<xe;C++){const E=[],I=r(0,Math.PI*2),O=r(Math.PI*.55,Math.PI*1.55),W=r(-1.2,1.2),re=r(-1.1,1.1),oe=r(-.55,.55),V=r(.78,1.08);for(let Q=0;Q<110;Q++){const ae=Q/109;if(Math.sin(ae*Math.PI*r(2,5.5)+C)*.5+.5<.22||ae>.44&&ae<.55&&C%3===0){E.push(null);continue}const fe=I+O*ae;E.push(R(Math.cos(fe)*V,Math.sin(fe)*V,Math.sin(fe*1.7+C)*.07,W,re,oe))}y.push({points:E,phase:r(0,Math.PI*2),alpha:r(.24,.5),size:r(.38,.76)})}}function N(b,_e,xe,C,E){const I=R(b.x,b.y,b.z,_e,xe,C),O=1.55/(1.55-I.z*.34);return{x:p+I.x*v*E*O,y:_+I.y*v*E*O,z:I.z,p:O}}function H(b,_e,xe,C){C<=.006||xe<=0||(t.globalAlpha=C,t.beginPath(),t.arc(b,_e,xe,0,Math.PI*2),t.fill())}function z(){const b=i(M.value,0,1),_e=i(m.explodePoint,.2,.9),xe=i(Math.min(m.implodePoint,_e-.08),.08,.62),C=Math.max(.09,xe*.72),E=Math.max(xe+.12,_e-.04),I=s(b/C),O=1-a((b-C)/Math.max(.001,E-C)),W=s((b-xe)/Math.max(.001,_e-xe)),re=s((b-_e)/Math.max(.001,1-_e)),oe=i(Math.max(m.vanishPoint,_e+.03),_e+.03,.99),V=s((b-oe)/Math.max(.012,(1-oe)/Math.max(.25,m.vanishSpeed)));M.progress=b,M.implode=b<=C?I:Math.max(0,O),M.expand=W*(1-re*.15),M.explode=re,M.vanish=V,M.flash+=((re>.04&&V<.94?re*(1-V):0)-M.flash)*.12}function D(b,_e,xe,C){if(M.progress<=.002)return b;const E=Math.hypot(b.x,b.y,b.z)||1,I=b.x/E,O=b.y/E,W=b.z/E,re=o((_e.phase||0)*53.7+(("stream"in _e?_e.stream:0)||0)*17.1+(C==="dust"?9.5:0)),oe=C==="dust"?1.22:C==="arc"?.7:1.05,V=C==="dust"?.76:C==="arc"?.42:.6,Q=C==="dust"?1.18:C==="arc"?.58:.92;let ae=Math.max(.08,1-M.implode*m.implodeStrength*oe)+M.expand*m.expandStrength*V;M.explode>.001&&(ae+=M.explode*m.explodeStrength*Q*(.55+re*.9));const ve=Math.sin(xe*5.2+(_e.phase||0)*4.7+E*3)*M.explode,fe=Math.cos(xe*3.4+(_e.phase||0)*2.9)*M.explode*(.1+re*.16);return{x:b.x*ae+(-O*ve+W*fe)*.34,y:b.y*ae+(I*ve-W*fe)*.34,z:b.z*ae+(I*fe+O*ve)*.24}}function X(b,_e,xe,C,E){if(!x.active||x.outer<.01&&x.inner<.01)return b;const I=v*C,O=x.px-p,W=x.py-_,re=Math.hypot(O,W)||1,oe=O/re,V=W/re,Q=b.x-p,ae=b.y-_,ve=Math.hypot(Q,ae)||1,fe=Q/ve,ce=ae/ve;let Te=b.x,Pe=b.y;if(E==="shell"&&x.outer>.01){const pe=i((fe*oe+ce*V-.32)/.68,0,1),F=1-i(Math.hypot(b.x-x.px,b.y-x.py)/(I*.88),0,1),ue=i((ve/I-.36)/.7,0,1),q=Math.pow(i(x.outer*m.outerGravity*Math.max(pe,F*.92)*ue*(.72+o((_e.phase||0)*41.7)*.92),0,1),1.05);if(q>.01){const le=Math.sin(xe*3.6+(_e.phase||0)*2.7)*I*.035,ge=x.px+oe*I*.1,ie=x.py+V*I*.1;Te+=(ge-Te)*q*.8*m.outerGravity+-V*le*q,Pe+=(ie-Pe)*q*.8*m.outerGravity+oe*le*q}}if(x.inner>.01){const pe=b.x-x.px,F=b.y-x.py,ue=Math.hypot(pe,F)||1,q=pe/ue,le=F/ue,ge=I*(E==="dust"?.58:.42),ie=1-i(ue/ge,0,1),Ee=Math.pow(i(x.inner*m.innerFluid*ie*(.62+o((_e.phase||0)*61.3)*.78),0,1),.72);if(Ee>.01){const we=Math.sin(xe*6.1+(_e.phase||0)*5.3+ve*.015),rt=I*(E==="dust"?.3:.22)*m.innerFluid;Te+=q*rt*Ee+-le*we*I*.095*Ee,Pe+=le*rt*Ee+q*we*I*.095*Ee}}return{x:Te,y:Pe,z:b.z,p:b.p}}function k(b,_e,xe){const C=String(m.centerText||"").trim();if(!C)return;const E=i(M.vanish,0,.98),I=i(m.textAlpha,0,1)*xe*(1-E);if(I<=.01)return;const O=1-M.implode*m.implodeStrength*.16,W=1+M.expand*m.expandStrength*.1,re=1+M.explode*m.textExplode*.32,oe=Math.max(.18,O*W*re),V=Math.max(22,v*.23*m.textSize*_e*oe),Q=Math.sin(b*1.25)*1.8-v*M.implode*.03,ae=s(M.explode),ve=v*m.explodeStrength*m.textExplode*ae,fe=v*M.implode*m.implodeStrength*.055;t.save(),t.globalCompositeOperation="screen",t.textAlign="center",t.textBaseline="middle",t.font=`950 ${V}px Inter, ui-sans-serif, system-ui, sans-serif`,t.lineJoin="round",t.shadowColor="rgba(255,255,255,.72)";const ce=Array.from(C),Te=ce.map(q=>Math.max(2,t.measureText(q).width)),Pe=V*.025,pe=Te.reduce((q,le)=>q+le,0)+Pe*Math.max(0,ce.length-1);let F=-pe/2;for(let q=0;q<ce.length;q++){const le=ce[q],ge=F+Te[q]/2;F+=Te[q]+Pe;const ie=o((q+1)*91.17+C.length*13.9),Ee=-Math.PI*.5+(q-(ce.length-1)/2)*.72+(ie-.5)*1.05,we=ce.length<=1?0:q/(ce.length-1)-.5,rt=Math.sin(b*(2.6+ie*2.1)+ie*9)*v*.018*ae,nt=p+ge*(1-M.implode*.34)+Math.cos(Ee)*ve*(.32+ie*.85)+we*ve*.42,Mn=_+Q+Math.sin(Ee)*ve*(.3+ie*.78)+rt-fe,Qn=(ie-.5)*1.55*ae+we*.28*ae,$l=I*(1-ae*.18)*(1-E*.42);t.save(),t.translate(nt,Mn),t.rotate(Qn);const ql=Math.max(V,Te[q]),ms=t.createLinearGradient(-ql*.55,-V*.45,ql*.55,V*.55);ms.addColorStop(0,"rgba(255,255,255,.98)"),ms.addColorStop(.55,"rgba(248,246,238,.76)"),ms.addColorStop(1,"rgba(255,255,255,.95)"),t.shadowBlur=18*m.textGlow*(1+ae*.7),t.globalAlpha=$l*.2,t.lineWidth=Math.max(1.2,V*.045),t.strokeStyle="rgba(248,246,238,.88)",t.strokeText(le,0,0),t.globalAlpha=$l,t.shadowBlur=9*m.textGlow*(1+ae*.55),t.fillStyle=ms,t.fillText(le,0,0),t.restore()}if(Math.floor(performance.now()/520)%2===0&&M.explode<.05&&M.vanish<.05){const q=p+pe/2+V*.13;t.globalAlpha=I*.78,t.shadowBlur=8*m.textGlow,t.strokeStyle="rgba(248,246,238,.82)",t.lineWidth=Math.max(1.2,V*.028),t.beginPath(),t.moveTo(q,_+Q-V*.35),t.lineTo(q,_+Q+V*.35),t.stroke()}t.restore()}function U(b){const _e=b??performance.now(),xe=Math.min(50,_e-h);h=_e,x.x+=(x.tx-x.x)*.095,x.y+=(x.ty-x.y)*.095,x.vx*=.88,x.vy*=.88,M.value+=(M.target-M.value)*.065,z();const C=u?0:m.baseSpin,E=x.active?i(Math.hypot(x.vx,x.vy)*m.mouseSpin,0,1.05):0,I=xe*.001;S.vx+=(-C*.03+x.vy*m.mouseSpin*.2)*I,S.vy+=(C*.05+x.vx*m.mouseSpin*.26)*I,S.vz+=(C*.01+(x.vx-x.vy)*m.mouseSpin*.05)*I,S.vx*=m.inertia,S.vy*=m.inertia,S.vz*=m.inertia,S.x+=S.vx*(1+E*.22),S.y+=S.vy*(1+E*.28),S.z+=S.vz*(1+E*.15);const O=Math.hypot(x.px-p,x.py-_),W=v*(1+M.value*.04),re=x.active?i((O-W*.72)/(W*.58),0,1)*(1-i((O-W*1.78)/(W*.5),0,1)):0,oe=x.active?1-i(O/(W*.82),0,1):0;x.outer+=(re-x.outer)*.14,x.inner+=(oe-x.inner)*.18,x.pulse+=(x.outer+x.inner-x.pulse)*.1,t.clearRect(0,0,c,d);const V=u?0:_e*.001,Q=Math.max(.22,1+M.value*.01-M.implode*m.implodeStrength*.19+M.expand*m.expandStrength*.05),ae=S.x+x.y*.085+Math.sin(V*.34)*.045,ve=S.y+x.x*.105,fe=S.z+Math.sin(V*.22)*.038,ce=M.progress<.02?1:1-i(M.vanish,0,.96);t.save(),t.globalCompositeOperation="source-over";const Te=Math.max(8,v*(.5-M.implode*.2+M.explode*.24)),Pe=t.createRadialGradient(p,_,0,p,_,Te);Pe.addColorStop(0,"rgba(0,0,0,.32)"),Pe.addColorStop(.55,"rgba(0,0,0,.19)"),Pe.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=Pe,t.globalAlpha=.75,t.beginPath(),t.arc(p,_,Te,0,Math.PI*2),t.fill(),t.globalAlpha=1,k(V,Q,ce),t.fillStyle="#fffdf6",t.shadowColor="rgba(255,255,255,.45)",t.shadowBlur=0;for(const pe of y)for(let F=0;F<pe.points.length;F++){const ue=pe.points[F];if(!ue)continue;const q=D({x:ue.x,y:ue.y,z:ue.z+Math.sin(V*.42+pe.phase+F*.035)*.018},{phase:pe.phase+F*.013},V,"arc"),le=N(q,ae,ve,fe,Q),ge=i((le.z+1.08)/2.16,0,1);H(le.x,le.y,pe.size*le.p,Math.min(1,pe.alpha*1.28*(.32+ge*.8)*(.72+Math.sin(V*2+F*.8)*.12)*ce))}for(const pe of w){const F=Math.sin(V*.65+pe.phase)*.018,ue=D({x:pe.x*(1+F),y:pe.y,z:pe.z},pe,V,"dust"),q=X(N(ue,ae*.96,ve*1.08,fe,Q),pe,V,Q,"dust"),le=i((q.z+1)/2,0,1),ge=.7+Math.sin(V*2.1+pe.phase)*.18;H(q.x,q.y,pe.size*q.p,Math.min(1,pe.alpha*1.32*ge*(.28+le*.62)*ce))}for(const pe of T){const F=Math.sin(V*(.55+(pe.stream||0)*.015)+pe.phase+pe.y*3)*.02,ue=Math.cos(V*.38+pe.phase+pe.x*2)*.012,q=D({x:pe.x+pe.y*ue,y:pe.y+F,z:pe.z-pe.x*ue},pe,V,"shell"),le=X(N(q,ae,ve,fe,Q),pe,V,Q,"shell"),ge=i((le.z+1.1)/2.2,0,1),ie=Math.hypot(le.x-p,le.y-_)/(v*Q),Ee=i((ie-.48)/.46,0,1),we=.76+Math.sin(V*(1.4+(pe.twinkle||1))+pe.phase*3)*.18,rt=1.18+M.explode*m.explodeStrength*1.15,nt=pe.alpha*1.55*we*(.23+ge*.8)*(.46+Ee*.88)*rt*ce,Mn=pe.size*le.p*(ge>.63?1.08:.8)*(1+M.explode*m.explodeStrength*.52);H(le.x,le.y,Mn,M.progress<.02?Math.min(Math.max(nt,.105),.96):Math.min(nt,.96))}t.shadowBlur=7,t.shadowColor="rgba(255,255,255,.55)";for(let pe=0;pe<T.length;pe+=83){const F=T[pe],ue=X(N(D(F,F,V,"shell"),ae,ve,fe,Q),F,V,Q,"shell"),q=i((ue.z+1.1)/2.2,0,1);q<.56||H(ue.x,ue.y,1.15*ue.p,M.progress<.02?Math.max(.48*q*ce,.11):.4*q*ce)}t.shadowBlur=0,x.active&&x.pulse>.02&&(t.save(),t.globalCompositeOperation="screen",t.strokeStyle="rgba(248,246,238,.42)",t.fillStyle="#f8f6ee",t.globalAlpha=.08+x.pulse*.14,t.beginPath(),t.arc(x.px,x.py,v*(.05+x.pulse*.055),0,Math.PI*2),t.stroke(),H(x.px,x.py,1.6+x.pulse*2.2,.2+x.pulse*.36),t.restore()),M.flash>.02&&(t.save(),t.globalCompositeOperation="screen",t.strokeStyle="rgba(248,246,238,.28)",t.lineWidth=1,t.globalAlpha=M.flash*.34,t.beginPath(),t.arc(p,_,v*(.76+M.explode*m.explodeStrength*.55),0,Math.PI*2),t.stroke(),t.globalAlpha=M.flash*.13,t.beginPath(),t.arc(p,_,v*(.45+M.explode*m.explodeStrength*.36),0,Math.PI*2),t.stroke(),t.restore()),t.restore(),g=requestAnimationFrame(U)}let $=!0;const ee=b=>new Promise(_e=>setTimeout(_e,b));async function ne(b,_e={min:58,max:185}){for(const xe of Array.from(b)){if(!$)return;m.centerText+=xe,await ee(r(_e.min,_e.max))}}async function se(b={min:32,max:96}){for(;m.centerText.length&&$;)m.centerText=Array.from(m.centerText).slice(0,-1).join(""),await ee(r(b.min,b.max))}async function ke(){for(await ee(520);$;)m.centerText="",await ne("Hello,,,",{min:70,max:210}),await ee(760),await se({min:34,max:90}),await ee(260),await ne("Welcome to",{min:52,max:165}),await ee(760),await se({min:30,max:82}),await ee(240),await ne("VelvetY",{min:78,max:220}),await ee(1800),await se({min:30,max:82}),await ee(300)}const be={virtualP:0,unlocked:!1,touchY:null},Ue=.62,te=.62,me=.82,he=.16;function Fe(){const b=document.querySelector(".intro-scroll");return b?Math.max(1,b.scrollHeight-innerHeight):Math.max(1,document.documentElement.scrollHeight-innerHeight)}function Be(){const b=Fe();e.classList.toggle("pass-through",scrollY>b-2)}function Ne(b){b=i(b,0,1),M.target=b,document.documentElement.style.setProperty("--p",b>.995?"1":b.toFixed(4));const _e=b<te-.001?0:1;document.documentElement.style.setProperty("--white-guide-opacity",_e.toFixed(3));const C=Array.from(document.querySelectorAll(".piano-key")).filter(I=>getComputedStyle(I).display!=="none"),E=Math.max(1,C.length);C.forEach((I,O)=>{const W=E<=1?0:(me-te)/(E-1),re=te+O*W,oe=a((b-re)/he),V=Math.max(1e-4,1-oe),Q=b>=te-.001&&oe<.985;I.style.transform=`scaleY(${V})`,I.style.opacity=oe>.985?"0":"1",I.style.borderRightColor=Q?"rgba(255,255,255,.10)":"rgba(255,255,255,0)",I.style.boxShadow=Q?"0 22px 70px rgba(0,0,0,.58)":"none"})}function pt(){const b=Fe(),_e=i(scrollY/b,0,1);if(scrollY<=1&&!be.unlocked){Ne(be.virtualP),Be();return}if(scrollY<=1&&be.unlocked&&be.virtualP<Ue){be.unlocked=!1,Ne(be.virtualP),Be();return}const xe=Ue+_e*(1-Ue);Ne(xe),Be()}function He(b,_e){const xe=scrollY<=1,C=b<0;if(xe&&(!be.unlocked||C&&be.virtualP>0)){_e&&_e.cancelable&&_e.preventDefault();const E=Fe();return be.virtualP=i(be.virtualP+b/(E*.78),0,Ue),be.unlocked=be.virtualP>=Ue-8e-4,Ne(be.virtualP),!0}return!xe&&C&&scrollY<4&&(be.virtualP=Ue),!1}function it(b){const _e=(b.clientX/innerWidth-.5)*2,xe=-(b.clientY/innerHeight-.5)*2,C=performance.now(),E=Math.max(12,C-(x.last||C));x.active&&(x.vx+=i((_e-x.tx)/E*1e3,-1.6,1.6),x.vy+=i((xe-x.ty)/E*1e3,-1.6,1.6)),x.px=b.clientX,x.py=b.clientY,x.active=!0,x.last=C,x.tx=_e,x.ty=xe}function Ze(){x.active=!1}function Ye(b){He(b.deltaY,b)||(e.classList.contains("pass-through")&&(b.cancelable&&b.preventDefault(),window.scrollBy(0,b.deltaY)),requestAnimationFrame(pt))}function yt(b){var _e;be.touchY=((_e=b.touches[0])==null?void 0:_e.clientY)??null}function bt(b){const _e=b.touches[0];if(!_e||be.touchY===null)return;const xe=be.touchY-_e.clientY;be.touchY=_e.clientY,!He(xe,b)&&e.classList.contains("pass-through")&&(b.cancelable&&b.preventDefault(),window.scrollBy(0,xe))}function Nt(b){const _e={ArrowDown:80,PageDown:360," ":360,ArrowUp:-80,PageUp:-360,Home:-9999};b.key in _e&&(b.key==="Home"&&(be.virtualP=0),He(_e[b.key],b))}function Bt(){P()}function mt(){pt()}function St(){document.hidden?cancelAnimationFrame(g):(h=performance.now(),g=requestAnimationFrame(U))}return P(),L(),pt(),Be(),g=requestAnimationFrame(U),ke(),addEventListener("resize",Bt,{passive:!0}),addEventListener("scroll",mt,{passive:!0}),addEventListener("wheel",Ye,{passive:!1}),addEventListener("touchstart",yt,{passive:!0}),addEventListener("touchmove",bt,{passive:!1}),addEventListener("keydown",Nt,{passive:!1}),addEventListener("pointermove",it,{passive:!0}),addEventListener("pointerleave",Ze,{passive:!0}),document.addEventListener("visibilitychange",St),()=>{$=!1,cancelAnimationFrame(g),removeEventListener("resize",Bt),removeEventListener("scroll",mt),removeEventListener("wheel",Ye),removeEventListener("touchstart",yt),removeEventListener("touchmove",bt),removeEventListener("keydown",Nt),removeEventListener("pointermove",it),removeEventListener("pointerleave",Ze),document.removeEventListener("visibilitychange",St),document.documentElement.style.removeProperty("--p"),document.documentElement.style.removeProperty("--white-guide-opacity"),e.classList.remove("pass-through")}},[]),G.jsxs(G.Fragment,{children:[G.jsx(k3,{}),G.jsx("canvas",{ref:n,className:"orb-canvas","aria-label":"Animated VelvetY orbital particle field"}),G.jsx("section",{className:"intro-scroll","aria-label":"VelvetY animated intro",children:G.jsxs("div",{className:"site-shell",children:[G.jsx("div",{className:"white-guide","aria-hidden":"true"}),G.jsx(F3,{}),G.jsx("main",{className:"hero","aria-label":"VelvetY homepage hero"}),G.jsxs("div",{className:"piano-curtain","aria-hidden":"true",children:[G.jsx("span",{className:"piano-key k1"}),G.jsx("span",{className:"piano-key k2"}),G.jsx("span",{className:"piano-key k3"}),G.jsx("span",{className:"piano-key k4"}),G.jsx("span",{className:"piano-key k5"}),G.jsx("span",{className:"piano-key k6"})]}),G.jsx("div",{className:"scroll-hint",children:"scroll to interact"})]})})]})}const tv=[{id:1,label:"Prendiville Group",size:"small",img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",alt:"Website displayed on a tablet for a hospitality project"},{id:2,label:"Walyalup Fremantle Arts Centre",size:"large",img:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1500&q=82",alt:"Outdoor creative posters and cultural venue imagery"},{id:3,label:"Luxwin",size:"small",img:"https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=82",alt:"Crystal glass abstract product brand visual"},{id:4,label:"RTRFM 92.1",size:"medium",img:"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=82",alt:"Audio mixing console and digital radio interface"},{id:5,label:"Revo Fitness",size:"medium",img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=82",alt:"Fitness studio interior for gym website project"},{id:6,label:"Pacific Energy",size:"medium",img:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=82",alt:"Solar energy project image with blue sky"}];function z3(){return G.jsxs("section",{className:"selected-works",id:"work","aria-label":"Selected works",children:[G.jsxs("h2",{className:"works-title",children:["Selected works ",G.jsx("span",{className:"works-count",children:tv.length})]}),G.jsx("div",{className:"works-grid",children:tv.map(n=>G.jsxs("article",{className:`work-card ${n.size}`,children:[G.jsx("span",{className:"work-label",children:n.label}),G.jsx("img",{src:n.img,alt:n.alt,loading:"lazy"})]},n.id))})]})}function V3(){return G.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:G.jsx("div",{style:{width:"80%",pointerEvents:"auto",filter:"drop-shadow(0 32px 64px rgba(0,0,0,.72))"},children:G.jsxs("div",{style:{position:"relative",borderRadius:18,overflow:"hidden",aspectRatio:"16 / 10",background:"#111"},children:[G.jsx("img",{src:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85",alt:"VelvetY showreel",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),G.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,.08) 0%, rgba(0,0,0,.40) 100%)"}}),G.jsx("div",{style:{position:"absolute",top:14,left:14,background:"rgba(0,0,0,.58)",backdropFilter:"blur(8px)",color:"#fff",fontSize:11,letterSpacing:"0.06em",padding:"5px 12px",borderRadius:999,fontFamily:"SFMono-Regular, Consolas, monospace",textTransform:"uppercase"},children:"#VELVETY"})]})})})}function H3(){return G.jsx("section",{style:{position:"relative",zIndex:3,height:"100vh",background:"transparent",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},"aria-label":"VelvetY showcase",children:G.jsxs("div",{style:{position:"relative",width:"clamp(360px, 92vw, 1380px)",height:"clamp(260px, 82vh, 800px)",borderRadius:28,overflow:"hidden",boxShadow:"0 0 0 9999px #000"},children:[G.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,.48) 100%)",pointerEvents:"none",zIndex:1}}),G.jsx("div",{style:{position:"absolute",inset:0,zIndex:2},children:G.jsx(V3,{})})]})})}const nv=["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80","https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"];function G3(){const n=Y.useRef(null),e=Y.useRef(null);return Y.useEffect(()=>{const t=n.current,i=e.current;if(!t)return;const r=new wS;r.fog=new n0(16119283,7,20);const s={width:window.innerWidth,height:window.innerHeight},a=new ai(35,s.width/s.height,.1,100);a.position.set(0,.25,8.8),r.add(a);const o=new VS({canvas:t,antialias:!0,alpha:!0});o.setSize(s.width,s.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.outputColorSpace=vn;const l=new Da,u=new Da;l.add(u),r.add(l);const c=new PA;c.setCrossOrigin("anonymous");const d=nv.length,f=3.45,p=2.05,_=2.9,v=[];function g(z,D,X,k){const U=new _o(z,D,34,10),$=U.attributes.position,ee=U.attributes.uv;for(let ne=0;ne<$.count;ne++){const se=(ee.getX(ne)-.5)*k;$.setXYZ(ne,Math.sin(se)*X,$.getY(ne),X-Math.cos(se)*X)}return U.computeVertexNormals(),U}const h=g(p,_,f,p/f);nv.forEach((z,D)=>{const X=c.load(z,()=>{X.colorSpace=vn,X.anisotropy=o.capabilities.getMaxAnisotropy()}),k=new r0({map:X,side:ki,transparent:!0,opacity:0}),U=new Ci(h,k),$=D/d*Math.PI*2;U.position.x=Math.sin($)*f,U.position.z=Math.cos($)*f,U.rotation.y=$+Math.PI,U.userData.baseAngle=$,U.userData.phase=Math.random()*Math.PI*2,U.userData.fadeStart=performance.now()+.06*D*1e3,u.add(U),v.push(U)}),r.add(new DA(16777215,2.25));const m={targetY:0,currentY:0,autoVelocity:.0016,scrollVelocity:0,dragVelocity:0,targetX:-.06,currentX:-.06,targetZ:0,currentZ:0,cameraX:0,cameraY:0,scrollDirection:1,lastScrollY:window.scrollY,isDragging:!1,lastPointerX:0,lastPointerY:0},x=(z,D,X)=>Math.max(D,Math.min(X,z));function S(){l.position.x=s.width<760?.25:1.75,l.position.y=s.width<760?.75:.25,a.position.z=s.width<760?13:11,a.updateProjectionMatrix()}S();function M(z){m.isDragging=!0,m.lastPointerX=z.clientX,m.lastPointerY=z.clientY,m.dragVelocity=0,i&&(i.style.opacity="0"),t.setPointerCapture(z.pointerId),t.style.cursor="grabbing"}function T(z){if(!m.isDragging)return;const D=z.clientX-m.lastPointerX,X=z.clientY-m.lastPointerY;m.lastPointerX=z.clientX,m.lastPointerY=z.clientY,m.targetY+=D*.0068,m.targetX+=X*.00125,m.targetZ+=D*-42e-5,m.cameraX+=D*-22e-5,m.cameraY+=X*24e-5,m.dragVelocity=D*82e-5,m.targetX=x(m.targetX,-.28,.22),m.targetZ=x(m.targetZ,-.095,.095),m.cameraX=x(m.cameraX,-.085,.085),m.cameraY=x(m.cameraY,-.075,.095)}function w(){m.isDragging=!1,m.autoVelocity=x(m.dragVelocity,-.035,.035),t.style.cursor="grab"}t.addEventListener("pointerdown",M),t.addEventListener("pointermove",T),t.addEventListener("pointerup",w),t.addEventListener("pointercancel",w);function y(){const z=window.scrollY-m.lastScrollY;m.lastScrollY=window.scrollY,Math.abs(z)>0&&(m.scrollDirection=z>0?1:-1,m.scrollVelocity+=x(z*9e-5,-.055,.055),m.targetY+=z*.0022)}window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("wheel",z=>{m.scrollVelocity+=x(z.deltaY*35e-6,-.026,.026)},{passive:!0});function R(){s.width=window.innerWidth,s.height=window.innerHeight,a.aspect=s.width/s.height,a.updateProjectionMatrix(),o.setSize(s.width,s.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),S()}window.addEventListener("resize",R);const P=new DS;let L,N=!0;function H(){if(!N)return;const z=P.getElapsedTime(),D=performance.now(),X=.0014*m.scrollDirection,k=m.autoVelocity+m.scrollVelocity+X;m.isDragging||(m.targetY+=k,m.autoVelocity*=.982,m.scrollVelocity*=.91,Math.abs(m.autoVelocity)<.0012&&(m.autoVelocity=.0012*m.scrollDirection)),m.currentY+=(m.targetY-m.currentY)*.09,m.currentX+=(m.targetX-m.currentX)*.06,m.currentZ+=(m.targetZ-m.currentZ)*.055,l.rotation.y=m.currentY,l.rotation.x=m.currentX,l.rotation.z=m.currentZ+Math.sin(z*.4)*.004,a.position.x+=(m.cameraX-a.position.x)*.045,a.position.y+=(.25+m.cameraY-a.position.y)*.045,a.lookAt(.25,.15,0),m.cameraX*=.93,m.cameraY*=.94,m.isDragging||(m.targetZ*=.96,m.targetX+=(-.08-m.targetX)*.012),v.forEach((U,$)=>{const ee=U.material,ne=Math.min(Math.max((D-U.userData.fadeStart)/1100,0),1),se=U.userData.baseAngle+m.currentY,ke=Math.cos(se);U.scale.setScalar(f_.mapLinear(ke,-1,1,.78,1.1)),ee.opacity=ne*f_.mapLinear(ke,-1,1,.22,1),U.position.y=Math.sin(z*.55+U.userData.phase)*.025,U.rotation.z=Math.sin(z*.45+$)*.006}),o.render(r,a),L=requestAnimationFrame(H)}return H(),i&&setTimeout(()=>{i.style.transition="opacity 0.8s ease",i.style.opacity="0"},2400),()=>{N=!1,cancelAnimationFrame(L),window.removeEventListener("resize",R),window.removeEventListener("scroll",y),t.removeEventListener("pointerdown",M),t.removeEventListener("pointermove",T),t.removeEventListener("pointerup",w),t.removeEventListener("pointercancel",w),o.dispose(),h.dispose(),v.forEach(z=>z.material.dispose())}},[]),G.jsxs("section",{style:{position:"relative",zIndex:4,height:"100vh",overflow:"hidden",fontFamily:"Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",color:"#171717"},"aria-label":"Digital brands that move",children:[G.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,background:"#f5f5f3"}}),G.jsx("canvas",{ref:n,style:{position:"absolute",top:0,left:0,zIndex:1,display:"block",cursor:"grab",touchAction:"none"}}),G.jsx("div",{style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"none",background:`
            linear-gradient(90deg, rgba(245,245,243,0.98) 0%, rgba(245,245,243,0.46) 24%, rgba(245,245,243,0) 54%),
            linear-gradient(0deg,  rgba(245,245,243,0.88) 0%, rgba(245,245,243,0)    36%),
            radial-gradient(circle at 78% 50%, rgba(245,245,243,0) 0%, rgba(245,245,243,0.15) 44%, rgba(245,245,243,0.76) 100%)
          `}}),G.jsxs("div",{style:{position:"absolute",left:"clamp(24px, 5vw, 76px)",bottom:"clamp(34px, 7vh, 86px)",width:"min(540px, 86vw)",zIndex:5,pointerEvents:"none"},children:[G.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,marginBottom:18,padding:"9px 14px",border:"1px solid rgba(23,23,23,0.12)",borderRadius:999,background:"rgba(255,255,255,0.42)",backdropFilter:"blur(12px)",fontSize:12,letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(23,23,23,0.72)"},children:[G.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#101010",display:"inline-block"}}),"Scroll + Drag the Carousel"]}),G.jsxs("h2",{style:{margin:0,fontSize:"clamp(48px, 9vw, 124px)",lineHeight:.86,letterSpacing:"-0.075em",fontWeight:850,maxWidth:760,color:"#171717"},children:["Brands",G.jsx("br",{}),G.jsx("em",{style:{display:"block",fontFamily:'Georgia, "Times New Roman", serif',fontStyle:"italic",fontWeight:500,letterSpacing:"-0.08em"},children:"Redesign"})]}),G.jsx("p",{style:{margin:"22px 0 0",maxWidth:470,fontSize:15,lineHeight:1.65,color:"rgba(23,23,23,0.68)"},children:"We create websites, Shopify stores, UI/UX systems, logos, and packaging that help brands look sharper, feel stronger, and grow online."})]}),G.jsx("div",{ref:e,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:5,padding:"10px 14px",borderRadius:999,background:"rgba(16,16,16,0.86)",color:"#fff",fontSize:12,letterSpacing:"0.18em",textTransform:"uppercase",pointerEvents:"none",opacity:.92},children:"DRAG"})]})}const iv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>/?!;:~";function rv(){return iv[Math.floor(Math.random()*iv.length)]}function W3({glitchColors:n=["#2b4539","#61dca3","#61b3dc"],glitchSpeed:e=50,centerVignette:t=!1,outerVignette:i=!0,smooth:r=!0}){const s=Y.useRef(null),a=Y.useRef(null);return Y.useEffect(()=>{const o=s.current,l=a.current;if(!o||!l)return;const u=o.getContext("2d"),c=16,d=`${c}px "SFMono-Regular", Consolas, monospace`;let f=0,p=0,_=[],v=0,g=!0;function h(){return n[Math.floor(Math.random()*n.length)]}function m(T,w){f=Math.ceil(T/c),p=Math.ceil(w/c),_=Array.from({length:f*p},()=>({char:rv(),color:h(),nextSwap:performance.now()+Math.random()*e}))}function x(){const T=l.getBoundingClientRect(),w=window.devicePixelRatio||1;o.width=T.width*w,o.height=T.height*w,o.style.width=T.width+"px",o.style.height=T.height+"px",u.scale(w,w),m(T.width,T.height)}const S=new ResizeObserver(x);S.observe(l),x();function M(T){if(!g)return;const w=o.clientWidth,y=o.clientHeight;u.fillStyle="#060606",u.fillRect(0,0,w,y),u.font=d,u.textBaseline="top";for(let R=0;R<_.length;R++){const P=_[R];T>=P.nextSwap&&(P.char=rv(),P.color=h(),P.nextSwap=T+e+Math.random()*e*2);const L=R%f,N=Math.floor(R/f);u.fillStyle=P.color,u.fillText(P.char,L*c,N*c)}if(i){const R=u.createRadialGradient(w/2,y/2,y*.25,w/2,y/2,y*.85);R.addColorStop(0,"rgba(0,0,0,0)"),R.addColorStop(1,"rgba(0,0,0,0.85)"),u.fillStyle=R,u.fillRect(0,0,w,y)}if(t){const R=u.createRadialGradient(w/2,y/2,0,w/2,y/2,y*.55);R.addColorStop(0,"rgba(0,0,0,0.6)"),R.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=R,u.fillRect(0,0,w,y)}v=requestAnimationFrame(M)}return v=requestAnimationFrame(M),()=>{g=!1,cancelAnimationFrame(v),S.disconnect()}},[n,e,t,i,r]),G.jsx("div",{ref:a,style:{position:"absolute",inset:0,overflow:"hidden"},children:G.jsx("canvas",{ref:s,style:{display:"block",width:"100%",height:"100%"}})})}function X3(){return G.jsx("section",{style:{position:"relative",zIndex:3,height:"100vh",background:"#000",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},"aria-label":"VelvetY showreel",children:G.jsxs("div",{style:{position:"relative",width:"clamp(360px, 92vw, 1380px)",height:"clamp(260px, 82vh, 800px)",borderRadius:28,overflow:"hidden",boxShadow:"0 0 0 9999px #000"},children:[G.jsx(W3,{glitchColors:["#2b4539","#61dca3","#61b3dc"],glitchSpeed:50,outerVignette:!0,centerVignette:!1}),G.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.52) 100%)",pointerEvents:"none",zIndex:2}}),G.jsx("div",{style:{position:"absolute",top:18,left:18,background:"rgba(0,0,0,0.58)",backdropFilter:"blur(8px)",color:"#fff",fontSize:11,letterSpacing:"0.08em",padding:"5px 14px",borderRadius:999,fontFamily:"SFMono-Regular, Consolas, monospace",textTransform:"uppercase",zIndex:3,pointerEvents:"none"},children:"Video coming soon"})]})})}const Y3="/Velvety2/".replace(/\/$/,""),Ou=n=>`${Y3}/assets/images/${n}`,oc=[{src:Ou("HuagenLogo5x5.png"),alt:"Huagen"},{src:Ou("ThriveLogo.png"),alt:"Thrive"},{src:Ou("MajorPetsLogo.png"),alt:"Major Pets"},{src:Ou("HomeLinkLogo.jpg"),alt:"HomeLink"}],Ap="Inter, ui-sans-serif, system-ui, sans-serif",nr="1px solid rgba(0,0,0,0.09)",ku=oc.length,Ho=180,HS=64,Dd=Ho+HS;function Id(n,e,t){return Math.max(e,Math.min(t,n))}function $3(){const[n,e]=Y.useState(0),[t,i]=Y.useState(0),[r,s]=Y.useState(!1),a=Y.useRef(null),o=Y.useRef(0),l=Y.useRef({x:0,trackX:0,pointerId:-1}),u=Y.useRef(0),c=Y.useRef(null),d=x=>-x*Dd,f=x=>{const S=Id(x,0,ku-1);o.current=S,e(S),i(0)},p=()=>{c.current&&clearTimeout(c.current)},_=()=>{p(),c.current=setTimeout(()=>{f((o.current+1)%ku),_()},5e3)};Y.useEffect(()=>(_(),p),[]);const v=x=>{x.currentTarget.setPointerCapture(x.pointerId),p(),s(!0),u.current=0,l.current={x:x.clientX,trackX:d(o.current),pointerId:x.pointerId}},g=x=>{if(!r)return;const S=x.clientX-l.current.x;u.current=Math.max(u.current,Math.abs(S));const M=d(ku-1);i(Id(l.current.trackX+S,M,0)-d(o.current))},h=x=>{if(r){s(!1);try{x.currentTarget.releasePointerCapture(x.pointerId)}catch{}if(u.current<5){const S=x.currentTarget.getBoundingClientRect(),M=x.clientX-S.left,T=d(o.current)+t,w=S.width/2;let y=0,R=Number.POSITIVE_INFINITY;for(let P=0;P<ku;P++){const L=w+P*Dd+T,N=Math.abs(M-L);N<R&&(R=N,y=P)}R<=Ho*.5?f(y):f(x.clientX<S.left+S.width/2?o.current-1:o.current+1)}else{const S=d(o.current)+t;f(Math.round(-S/Dd))}_()}},m=d(n)+t;return G.jsxs("div",{style:{padding:"24px 0 48px"},children:[G.jsx("div",{ref:a,onPointerDown:v,onPointerMove:g,onPointerUp:h,onPointerCancel:h,style:{position:"relative",overflow:"hidden",height:110,cursor:r?"grabbing":"grab",touchAction:"none",userSelect:"none"},children:G.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:HS,paddingLeft:`calc(50% - ${Ho/2}px)`,paddingRight:`calc(50% - ${Ho/2}px)`,transform:`translateX(${m}px)`,transition:r?"none":"transform 0.45s cubic-bezier(0.22,1,0.36,1)",willChange:"transform",pointerEvents:"auto"},children:oc.map((x,S)=>{const M=Math.abs(S-n),T=Id(M,0,2)/2;return G.jsx("button",{type:"button",onClick:()=>{p(),f(S),_()},style:{flexShrink:0,width:Ho,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none",padding:0,cursor:"pointer",transform:`scale(${1-T*.2})`,opacity:1-T*.55,filter:`grayscale(${T*55}%)`,transition:r?"none":"transform 0.4s, opacity 0.4s, filter 0.4s"},children:G.jsx("img",{src:x.src,alt:x.alt,draggable:!1,style:{maxHeight:60,maxWidth:"90%",objectFit:"contain",display:"block"}})},x.alt)})})}),G.jsxs("div",{style:{textAlign:"center",marginTop:20},children:[G.jsx("p",{style:{margin:"0 0 14px",fontSize:13,fontWeight:500,letterSpacing:"0.06em",color:"#374151",fontFamily:Ap},children:oc[n].alt}),G.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8},children:oc.map((x,S)=>G.jsx("button",{type:"button","aria-label":`Show ${x.alt}`,onClick:()=>{p(),f(S),_()},style:{width:S===n?22:7,height:7,borderRadius:4,border:"none",padding:0,cursor:"pointer",background:S===n?"#08090b":"#d1d5db",transition:"width 0.25s, background 0.25s"}},x.alt))})]})]})}const q3=[{num:"01",title:"Design",desc:"Most design looks like most other design. Safe and predictable. We ask uncomfortable questions that dig into the real problems — and build identities that earn attention.",items:["Web Design","UX Design","Branding","Graphic Design"]},{num:"02",title:"Development",desc:"The right technology depends on the problem. We build fast, scalable websites and Shopify stores — all here in Seattle, by the people who manage every aspect of your project.",items:["Web Development","Shopify Stores","UI Systems","Web Support"]},{num:"03",title:"Strategy",desc:"Creative without data is guesswork. Data without creativity is bland. We'd rather do the harder thing and build campaigns that look stunning and perform. That's where the results are.",items:["Brand Strategy","Social Media","SEO","GEO"]}];function K3(){return G.jsxs("section",{style:{position:"relative",zIndex:3,minHeight:"100vh",background:"#f5f5f3",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:Ap,color:"#08090b"},children:[G.jsxs("div",{style:{flex:"1 0 0",padding:"clamp(48px, 6vw, 80px) clamp(24px, 4.5vw, 72px) 0",display:"flex",flexDirection:"column"},children:[G.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderTop:nr,borderLeft:nr},children:[G.jsxs("div",{style:{borderRight:nr,borderBottom:nr,padding:"clamp(24px,3vw,40px)"},children:[G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:18},children:[G.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#08090b"}}),G.jsx("p",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.26em",textTransform:"uppercase",color:"#9ca3af",margin:0},children:"Studio"})]}),G.jsx("h2",{style:{margin:0,fontSize:"clamp(24px,3vw,44px)",fontWeight:500,lineHeight:1.12,letterSpacing:"-0.04em"},children:"We are a Seattle studio with a shared obsession for brands that matter."})]}),G.jsxs("div",{style:{borderRight:nr,borderBottom:nr,padding:"clamp(24px,3vw,40px)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[G.jsx("p",{style:{margin:"0 0 32px",fontSize:"clamp(13px,1.05vw,15px)",lineHeight:1.74,color:"#4b5563",maxWidth:440},children:"The team is a mix — creative, technical, practical, opinionated. Some of us make noise, some make spreadsheets."}),G.jsx("a",{href:"#",style:{fontSize:11,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:"#08090b",textDecoration:"none"},children:"Our Work ↗"})]})]}),G.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",borderLeft:nr,flex:"1 0 0"},children:q3.map(t=>G.jsxs("div",{style:{borderRight:nr,borderBottom:nr,padding:"clamp(22px,2.5vw,36px)"},children:[G.jsx("span",{style:{display:"block",fontSize:10,fontWeight:600,letterSpacing:"0.22em",color:"#c8c8c8",marginBottom:10},children:t.num}),G.jsx("h3",{style:{margin:"0 0 12px",fontSize:"clamp(15px,1.4vw,19px)",fontWeight:500},children:t.title}),G.jsx("p",{style:{margin:"0 0 18px",fontSize:"clamp(12px,0.88vw,13px)",lineHeight:1.7,color:"#6b7280"},children:t.desc}),G.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:7},children:t.items.map(i=>G.jsxs("li",{style:{fontSize:"clamp(12px,0.92vw,14px)",color:"#374151",display:"flex",alignItems:"center",gap:8},children:[G.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#d1d5db"}}),i]},i))})]},t.num))})]}),G.jsxs("div",{children:[G.jsx("p",{style:{textAlign:"center",fontSize:10,fontWeight:600,letterSpacing:"0.30em",textTransform:"uppercase",color:"#bbb",margin:"24px 0 0",fontFamily:Ap},children:"Trusted by ambitious brands"}),G.jsx($3,{})]})]})}function rr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function GS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cl={duration:.5,overwrite:!1,delay:0},o0,tn,xt,ui=1e8,ft=1/ui,Cp=Math.PI*2,j3=Cp/4,Z3=0,WS=Math.sqrt,Q3=Math.cos,J3=Math.sin,Zt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},l0=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},u0=function(){return typeof window<"u"},Bu=function(e){return It(e)||Zt(e)},XS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,eL=/random\([^)]+\)/g,tL=/,\s*/g,sv=/(?:-?\.?\d|\.)+/gi,YS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ia=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$S=/[+-]=-?[.\d]+/,nL=/[^,'"\[\]\s]+/gi,iL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,Ui,bp,c0,qn={},Hc={},qS,KS=function(e){return(Hc=ro(e,qn))&&Un},f0=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bl=function(e,t){return!t&&console.warn(e)},jS=function(e,t){return e&&(qn[e]=t)&&Hc&&(Hc[e]=t)||qn},Pl=function(){return 0},rL={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},sL={suppressEvents:!0},d0={},is=[],Pp={},ZS,zn={},Ud={},av=30,uc=[],h0="",p0=function(e){var t=e[0],i,r;if(ji(t)||It(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=uc.length;r--&&!uc[r].targetTest(t););i=uc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new x1(e[r],i)))||e.splice(r,1);return e},ks=function(e){return e._gsap||p0(ci(e))[0]._gsap},QS=function(e,t,i){return(i=e[t])&&It(i)?e[t]():l0(i)&&e.getAttribute&&e.getAttribute(t)||i},Dn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Wa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},aL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Gc=function(){var e=is.length,t=is.slice(0),i,r;for(Pp={},is.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},m0=function(e){return!!(e._initted||e._startAt||e.add)},JS=function(e,t,i,r){is.length&&!tn&&Gc(),e.render(t,i,!!(tn&&t<0&&m0(e))),is.length&&!tn&&Gc()},e1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(nL).length<2?t:Zt(e)?e.trim():e},t1=function(e){return e},Kn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},oL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ro=function(e,t){for(var i in t)e[i]=t[i];return e},ov=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ji(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Wc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},nl=function(e){var t=e.parent||wt,i=e.keyframes?oL(hn(e.keyframes)):Kn;if(Ln(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},n1=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},yf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lp=function(e,t,i,r){return e._startAt&&(tn?e._startAt.revert(lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cL=function n(e){return!e||e._ts&&n(e.parent)},lv=function(e){return e._repeat?so(e._tTime,e=e.duration()+e._rDelay)*e:0},so=function(e,t){var i=Math.floor(e=Mt(e/t));return e&&i===e?i-1:i},Xc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sf=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Mf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Mt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sf(e),i._dirty||Bs(i,e)),e},i1=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Xc(e.rawTime(),t),(!t._dur||Yl(0,t.totalDuration(),i)-t._tTime>ft)&&t.render(i,!0)),Bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ft}},Bi=function(e,t,i,r){return t.parent&&ls(t),t._start=Mt((Sr(i)?i:i||e!==wt?ii(e,i,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),n1(e,t,"_first","_last",e._sort?"_start":0),Dp(t)||(e._recent=t),r||i1(e,t),e._ts<0&&Mf(e,e._tTime),e},r1=function(e,t){return(qn.ScrollTrigger||f0("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},s1=function(e,t,i,r,s){if(_0(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ZS!==Vn.frame)return is.push(e),e._lazy=[s,r],1},fL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Dp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dL=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&fL(e)&&!(!e._initted&&Dp(e))||(e._ts<0||e._dp._ts<0)&&!Dp(e))?0:1,o=e._rDelay,l=0,u,c,d;if(o&&e._repeat&&(l=Yl(0,e._tDur,t),c=so(l,o),e._yoyo&&c&1&&(a=1-a),c!==so(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||tn||r||e._zTime===ft||!t&&e._zTime){if(!e._initted&&s1(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?ft:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&Lp(e,t,i,!0),e._onUpdate&&!i&&Gn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ls(e,1),!i&&!tn&&(Gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ao=function(e,t,i,r){var s=e._repeat,a=Mt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Mt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Mf(e,e._tTime=e._tDur*o),e.parent&&Sf(e),i||Bs(e.parent,e),e},uv=function(e){return e instanceof wn?Bs(e):ao(e,e._dur)},pL={_start:0,endTime:Pl,totalDuration:Pl},ii=function n(e,t,i){var r=e.labels,s=e._recent||pL,a=e.duration()>=ui?s.endTime(!1):e._dur,o,l,u;return Zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(l=l/100*(hn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},il=function(e,t,i){var r=Sr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;a.immediateRender=Ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Vt(t[0],a,t[s+1])},ps=function(e,t){return e||e===0?t(e):t},Yl=function(e,t,i){return i<e?e:i>t?t:i},cn=function(e,t){return!Zt(e)||!(t=iL.exec(e))?"":t[1]},mL=function(e,t,i){return ps(i,function(r){return Yl(e,t,r)})},Ip=[].slice,a1=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Ui},gL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Zt(r)&&!t||a1(r,1)?(s=i).push.apply(s,ci(r)):i.push(r)})||i},ci=function(e,t,i){return xt&&!t&&xt.selector?xt.selector(e):Zt(e)&&!i&&(bp||!oo())?Ip.call((t||c0).querySelectorAll(e),0):hn(e)?gL(e,i):a1(e)?Ip.call(e,0):e?[e]:[]},Np=function(e){return e=ci(e)[0]||bl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ci(t,i.querySelectorAll?i:i===e?bl("Invalid scope")||c0.createElement("div"):e)}},o1=function(e){return e.sort(function(){return .5-Math.random()})},l1=function(e){if(It(e))return e;var t=ji(e)?e:{each:e},i=zs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=t.axis,c=r,d=r;return Zt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],d=r[1]),function(f,p,_){var v=(_||t).length,g=a[v],h,m,x,S,M,T,w,y,R;if(!g){if(R=t.grid==="auto"?0:(t.grid||[1,ui])[1],!R){for(w=-ui;w<(w=_[R++].getBoundingClientRect().left)&&R<v;);R<v&&R--}for(g=a[v]=[],h=l?Math.min(R,v)*c-.5:r%R,m=R===ui?0:l?v*d/R-.5:r/R|0,w=0,y=ui,T=0;T<v;T++)x=T%R-h,S=m-(T/R|0),g[T]=M=u?Math.abs(u==="y"?S:x):WS(x*x+S*S),M>w&&(w=M),M<y&&(y=M);r==="random"&&o1(g),g.max=w-y,g.min=y,g.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(R>v?v-1:u?u==="y"?v/R:R:Math.max(R,v/R))||0)*(r==="edges"?-1:1),g.b=v<0?s-v:s,g.u=cn(t.amount||t.each)||0,i=i&&v<0?bL(i):i}return v=(g[f]-g.min)/g.max||0,Mt(g.b+(i?i(v):v)*g.v)+g.u}},Up=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Mt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Sr(i)?0:cn(i))}},u1=function(e,t){var i=hn(e),r,s;return!i&&ji(e)&&(r=i=e.radius||ui,e.values?(e=ci(e.values),(s=!Sr(e[0]))&&(r*=r)):e=Up(e.increment)),ps(t,i?It(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=ui,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-o,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-o),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:a,s||c===a||Sr(a)?c:c+cn(a)}:Up(e))},c1=function(e,t,i,r){return ps(hn(e)?!t:i===!0?!!(i=0):!r,function(){return hn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},_L=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},vL=function(e,t){return function(i){return e(parseFloat(i))+(t||cn(i))}},xL=function(e,t,i){return d1(e,t,0,1,i)},f1=function(e,t,i){return ps(i,function(r){return e[~~t(r)]})},yL=function n(e,t,i){var r=t-e;return hn(e)?f1(e,n(0,e.length),t):ps(i,function(s){return(r+(s-e)%r)%r+e})},SL=function n(e,t,i){var r=t-e,s=r*2;return hn(e)?f1(e,n(0,e.length-1),t):ps(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ll=function(e){return e.replace(eL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(tL);return c1(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},d1=function(e,t,i,r,s){var a=t-e,o=r-i;return ps(s,function(l){return i+((l-e)/a*o||0)})},ML=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Zt(e),o={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var v=Math.min(f,~~_);return c[v](_-v)},i=t}else r||(e=ro(hn(e)?[]:{},e));if(!c){for(l in t)g0.call(o,e,l,"get",t[l]);s=function(_){return y0(_,o)||(a?e.p:e)}}}return ps(i,s)},cv=function(e,t,i){var r=e.labels,s=ui,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Gn=function(e,t,i){var r=e.vars,s=r[t],a=xt,o=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&is.length&&Gc(),o&&(xt=o),c=l?s.apply(u,l):s.call(u),xt=a,c},Go=function(e){return ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Gn(e,"onInterrupt"),e},Na,h1=[],p1=function(e){if(e)if(e=!e.name&&e.default||e,u0()||e.headless){var t=e.name,i=It(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Pl,render:y0,add:g0,kill:BL,modifier:kL,rawVars:0},a={targetTest:0,get:0,getSetter:x0,aliases:{},register:0};if(oo(),e!==r){if(zn[t])return;Kn(r,Kn(Wc(e,s),a)),ro(r.prototype,ro(s,Wc(e,a))),zn[r.prop=t]=r,e.targetTest&&(uc.push(r),d0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jS(t,r),e.register&&e.register(Un,r,In)}else h1.push(e)},ct=255,Wo={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Fd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ct+.5|0},m1=function(e,t,i){var r=e?Sr(e)?[e>>16,e>>8&ct,e&ct]:0:Wo.black,s,a,o,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wo[e])r=Wo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(sv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=Fd(l+1/3,s,a),r[1]=Fd(l,s,a),r[2]=Fd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(YS),i&&r.length<4&&(r[3]=1),r}else r=e.match(sv)||Wo.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ct,a=r[1]/ct,o=r[2]/ct,d=Math.max(s,a,o),f=Math.min(s,a,o),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},g1=function(e){var t=[],i=[],r=-1;return e.split(rs).forEach(function(s){var a=s.match(Ia)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},fv=function(e,t,i){var r="",s=(e+r).match(rs),a=t?"hsla(":"rgba(",o=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=m1(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=g1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(rs,"1").split(Ia),d=u.length-1;o<d;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(rs),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},rs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),EL=/hsl[a]?\(/,_1=function(e){var t=e.join(" "),i;if(rs.lastIndex=0,rs.test(t))return i=EL.test(t),e[1]=fv(e[1],i),e[0]=fv(e[0],i,g1(e[1])),!0},Dl,Vn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,u,c,d,f,p,_=function v(g){var h=n()-r,m=g===!0,x,S,M,T;if((h>e||h<0)&&(i+=h-t),r+=h,M=r-i,x=M-a,(x>0||m)&&(T=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,a+=x+(x>=s?4:s-x),S=1),m||(l=u(v)),S)for(p=0;p<o.length;p++)o[p](M,f,T,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){qS&&(!bp&&u0()&&(Ui=bp=window,c0=Ui.document||{},qn.gsap=Un,(Ui.gsapVersions||(Ui.gsapVersions=[])).push(Un.version),KS(Hc||Ui.GreenSockGlobals||!Ui.gsap&&Ui||{}),h1.forEach(p1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(g){return setTimeout(g,a-d.time*1e3+1|0)},Dl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Dl=0,u=Pl},lagSmoothing:function(g,h){e=g||1/0,t=Math.min(h||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,h,m){var x=h?function(S,M,T,w){g(S,M,T,w),d.remove(x)}:g;return d.remove(g),o[m?"unshift":"push"](x),oo(),x},remove:function(g,h){~(h=o.indexOf(g))&&o.splice(h,1)&&p>=h&&p--},_listeners:o},d}(),oo=function(){return!Dl&&Vn.wake()},je={},wL=/^[\d.\-M][\d.\-,\s]/,TL=/["']/g,RL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[r]=isNaN(u)?u.replace(TL,"").trim():+u,r=l.substr(o+1).trim();return t},AL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},CL=function(e){var t=(e+"").split("("),i=je[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[RL(t[1])]:AL(e).split(",").map(e1)):je._CE&&wL.test(e)?je._CE("",e):i},bL=function(e){return function(t){return 1-e(1-t)}},zs=function(e,t){return e&&(It(e)?e:je[e]||CL(e))||t},Js=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Dn(e,function(o){je[o]=qn[o]=s,je[a=o.toLowerCase()]=i;for(var l in s)je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[o+"."+l]=s[l]}),s},v1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Od=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Cp*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*J3((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:v1(o);return s=Cp/s,l.config=function(u,c){return n(e,u,c)},l},kd=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:v1(i);return r.config=function(s){return n(e,s)},r};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Js(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Js("Elastic",Od("in"),Od("out"),Od());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Js("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Js("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Js("Circ",function(n){return-(WS(1-n*n)-1)});Js("Sine",function(n){return n===1?1:-Q3(n*j3)+1});Js("Back",kd("in"),kd("out"),kd());je.SteppedEase=je.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ft;return function(o){return((r*Yl(0,a,o)|0)+s)*i}}};Cl.ease=je["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return h0+=n+","+n+"Params,"});var x1=function(e,t){this.id=Z3++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:QS,this.set=t?t.getSetter:x0},Il=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ao(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),Dl||Vn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ao(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(oo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mf(this,i),!s._dp||s.parent||i1(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),JS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+lv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+lv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?so(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Xc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ft?0:this._rts,this.totalTime(Yl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Sf(this),uL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Mt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Bi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ln(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sL);var r=tn;return tn=i,m0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),tn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,uv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,uv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ii(this,i),Ln(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Ln(r)),this._dur||(this._zTime=-ft),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ft)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=It(i)?i:t1,l=function(){var c=r.then;r.then=null,s&&s(),It(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Go(this)},n}();Kn(Il.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var wn=function(n){GS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ln(i.sortChildren),wt&&Bi(i.parent||wt,rr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&r1(rr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return il(0,arguments,this),this},t.from=function(r,s,a){return il(1,arguments,this),this},t.fromTo=function(r,s,a,o){return il(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,nl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Vt(r,s,ii(this,a),1),this},t.call=function(r,s,a){return Bi(this,Vt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new Vt(r,a,ii(this,l)),this},t.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,nl(a).immediateRender=Ln(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},t.staggerFromTo=function(r,s,a,o,l,u,c,d){return o.startAt=a,nl(o).immediateRender=Ln(o.immediateRender),this.staggerTo(r,s,o,l,u,c,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Mt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,v,g,h,m,x,S,M,T,w;if(this!==wt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(f=Mt(c%g),c===l?(v=this._repeat,f=u):(M=Mt(c/g),v=~~M,v&&v===M&&(f=u,v--),f>u&&(f=u)),M=so(this._tTime,g),!o&&this._tTime&&M!==v&&this._tTime-M*g-this._dur<=0&&(M=v),T&&v&1&&(f=u-f,w=1),v!==M&&!this._lock){var y=T&&M&1,R=y===(T&&v&1);if(v<M&&(y=!y),o=y?0:c%u?u:c,this._lock=1,this.render(o||(w?0:Mt(v*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=v),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,R&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=hL(this,Mt(o),Mt(f)),m&&(c-=f-(f=m._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!M&&(Gn(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!h){m=0,_&&(c+=this._zTime=-ft);break}}p=_}else{p=this._last;for(var P=r<0?r:f;p;){if(_=p._prev,(p._act||P<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,s,a||tn&&m0(p)),f!==this._time||!this._ts&&!h){m=0,_&&(c+=this._zTime=P?-ft:ft);break}}p=_}}if(m&&!s&&(this.pause(),m.render(f>=o?0:-ft)._zTime=f>=o?1:-1,this._ts))return this._start=S,Sf(this),this.render(r,s,a);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ls(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Gn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Sr(s)||(s=ii(this,s,r)),!(r instanceof Il)){if(hn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Zt(r))return this.addLabel(r,s);if(It(r))r=Vt.delayedCall(0,r);else return this}return this!==r?Bi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ui);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof Vt?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Zt(r)?this.removeLabel(r):It(r)?this.killTweensOf(r):(r.parent===this&&yf(this,r),r===this._recent&&(this._recent=this._last),Bs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Vn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ii(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Vt.delayedCall(0,s||Pl,a);return o.data="isPause",this._hasPause=1,Bi(this,o,ii(this,r))},t.removePause=function(r){var s=this._first;for(r=ii(this,r);s;)s._start===r&&s.data==="isPause"&&ls(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Yr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=ci(r),l=this._first,u=Sr(s),c;l;)l instanceof Vt?aL(l._targets,o)&&(u?(!Yr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ii(a,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Vt.to(a,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!p){var g=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());_._dur!==g&&ao(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Kn({startAt:{time:ii(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),cv(this,ii(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),cv(this,ii(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=Mt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return Bs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Bs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=ui,u,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Bi(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Mt(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;ao(a,a===wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(wt._ts&&(JS(wt,Xc(r,wt)),ZS=Vn.frame),Vn.frame>=av){av+=Yn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&Yn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},e}(Il);Kn(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var PL=function(e,t,i,r,s,a,o){var l=new In(this._pt,e,t,0,1,T1,null,s),u=0,c=0,d,f,p,_,v,g,h,m;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Ll(r)),a&&(m=[i,r],a(m,e,t),i=m[0],r=m[1]),f=i.match(Nd)||[];d=Nd.exec(r);)_=d[0],v=r.substring(u,d.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(g=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:g,c:_.charAt(1)==="="?Wa(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=Nd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,($S.test(r)||h)&&(l.e=0),this._pt=l,l},g0=function(e,t,i,r,s,a,o,l,u,c){It(r)&&(r=r(s||0,e,a));var d=e[t],f=i!=="get"?i:It(d)?u?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=It(d)?u?UL:E1:v0,_;if(Zt(r)&&(~r.indexOf("random(")&&(r=Ll(r)),r.charAt(1)==="="&&(_=Wa(f,r)+(cn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Fp)return!isNaN(f*r)&&r!==""?(_=new In(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?OL:w1,0,p),u&&(_.fp=u),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&f0(t,r),PL.call(this,e,t,f,r,p,l||Yn.stringFilter,u))},LL=function(e,t,i,r,s){if(It(e)&&(e=rl(e,s,t,i,r)),!ji(e)||e.style&&e.nodeType||hn(e)||XS(e))return Zt(e)?rl(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=rl(e[o],s,t,i,r);return a},y1=function(e,t,i,r,s,a){var o,l,u,c;if(zn[e]&&(o=new zn[e]).init(s,o.rawVars?t[e]:LL(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new In(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Na))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},Yr,Fp,_0=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,v=e._startAt,g=e._targets,h=e.parent,m=h&&h.data==="nested"?h.vars.targets:g,x=e._overwrite==="auto"&&!o0,S=e.timeline,M=r.easeReverse||d,T,w,y,R,P,L,N,H,z,D,X,k,U;if(S&&(!f||!s)&&(s="none"),e._ease=zs(s,Cl.ease),e._rEase=M&&(zs(M)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(H=g[0]?ks(g[0]).harness:0,k=H&&r[H.prop],T=Wc(r,d0),v&&(v._zTime<0&&v.progress(1),t<0&&c&&o&&!p?v.render(-1,!0):v.revert(c&&_?lc:rL),v._lazy=0),a){if(ls(e._startAt=Vt.set(g,Kn({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!v&&Ln(l),startAt:null,delay:0,onUpdate:u&&function(){return Gn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!p)&&e._startAt.revert(lc),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!v){if(t&&(o=!1),y=Kn({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Ln(l),immediateRender:o,stagger:0,parent:h},T),k&&(y[H.prop]=k),ls(e._startAt=Vt.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(lc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Ln(l)||l&&!_,w=0;w<g.length;w++){if(P=g[w],N=P._gsap||p0(g)[w]._gsap,e._ptLookup[w]=D={},Pp[N.id]&&is.length&&Gc(),X=m===g?w:m.indexOf(P),H&&(z=new H).init(P,k||T,e,X,m)!==!1&&(e._pt=R=new In(e._pt,P,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function($){D[$]=R}),z.priority&&(L=1)),!H||k)for(y in T)zn[y]&&(z=y1(y,T,e,X,P,m))?z.priority&&(L=1):D[y]=R=g0.call(e,P,y,"get",T[y],X,m,0,r.stringFilter);e._op&&e._op[w]&&e.kill(P,e._op[w]),x&&e._pt&&(Yr=e,wt.killTweensOf(P,D,e.globalTime(t)),U=!e.parent,Yr=0),e._pt&&l&&(Pp[N.id]=1)}L&&R1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,f&&t<=0&&S.render(ui,!0,!0)},DL=function(e,t,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Fp=1,e.vars[t]="+=0",_0(e,o),Fp=0,l?bl(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=Ot(i)+cn(d.e)),d.b&&(d.b=c.s+cn(d.b))},IL=function(e,t){var i=e[0]?ks(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=ro({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},NL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(hn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},rl=function(e,t,i,r,s){return It(e)?e.call(t,i,r,s):Zt(e)&&~e.indexOf("random(")?Ll(e):e},S1=h0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",M1={};Dn(S1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return M1[n]=1});var Vt=function(n){GS(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:nl(r))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,v=l.defaults,g=l.scrollTrigger,h=r.parent||wt,m=(hn(i)||XS(i)?Sr(i[0]):"length"in r)?[i]:ci(i),x,S,M,T,w,y,R,P;if(o._targets=m.length?p0(m):bl("GSAP target "+i+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||Bu(u)||Bu(c)){r=o.vars;var L=r.easeReverse||r.yoyoEase;if(x=o.timeline=new wn({data:"nested",defaults:v||{},targets:h&&h.data==="nested"?h.vars.targets:m}),x.kill(),x.parent=x._dp=rr(o),x._start=0,f||Bu(u)||Bu(c)){if(T=m.length,R=f&&l1(f),ji(f))for(w in f)~S1.indexOf(w)&&(P||(P={}),P[w]=f[w]);for(S=0;S<T;S++)M=Wc(r,M1),M.stagger=0,L&&(M.easeReverse=L),P&&ro(M,P),y=m[S],M.duration=+rl(u,rr(o),S,y,m),M.delay=(+rl(c,rr(o),S,y,m)||0)-o._delay,!f&&T===1&&M.delay&&(o._delay=c=M.delay,o._start+=c,M.delay=0),x.to(y,M,R?R(S,y,m):0),x._ease=je.none;x.duration()?u=c=0:o.timeline=0}else if(_){nl(Kn(x.vars.defaults,{ease:"none"})),x._ease=zs(_.ease||r.ease||"none");var N=0,H,z,D;if(hn(_))_.forEach(function(X){return x.to(m,X,">")}),x.duration();else{M={};for(w in _)w==="ease"||w==="easeEach"||NL(w,_[w],M,_.easeEach);for(w in M)for(H=M[w].sort(function(X,k){return X.t-k.t}),N=0,S=0;S<H.length;S++)z=H[S],D={ease:z.e,duration:(z.t-(S?H[S-1].t:0))/100*u},D[w]=z.v,x.to(m,D,N),N+=D.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||o.duration(u=x.duration())}else o.timeline=0;return p===!0&&!o0&&(Yr=rr(o),wt.killTweensOf(m),Yr=0),Bi(h,rr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!_&&o._start===Mt(h._time)&&Ln(d)&&cL(rr(o))&&h.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-c)||0)),g&&r1(rr(o),g),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-ft&&!c?l:r<ft?0:r,f,p,_,v,g,h,m,x;if(!u)dL(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,a);if(f=Mt(d%v),d===l?(_=this._repeat,f=u):(g=Mt(d/v),_=~~g,_&&_===g?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),g=so(this._tTime,v),f===o&&!a&&this._initted&&_===g)return this._tTime=d,this;_!==g&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==v&&this._initted&&(this._lock=a=1,this.render(Mt(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(s1(this,c?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var M=S?o:u-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(S?-1:1)/M:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(f/u);if(this._from&&(this.ratio=m=1-m),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!g&&(Gn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Lp(this,r,s,a),Gn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Lp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ls(this,1),!s&&!(c&&!o)&&(d||o||h)&&(Gn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Dl||Vn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||_0(this,u),c=this._ease(u/this._dur),DL(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Mf(this,0),this.parent||n1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Yr&&Yr.vars.overwrite!==!0)._first||Go(this),this.parent&&a!==this.timeline.totalDuration()&&ao(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ci(r):o,u=this._ptLookup,c=this._pt,d,f,p,_,v,g,h;if((!s||s==="all")&&lL(o,l))return s==="all"&&(this._pt=0),Go(this);for(d=this._op=this._op||[],s!=="all"&&(Zt(s)&&(v={},Dn(s,function(m){return v[m]=1}),s=v),s=IL(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(v in _)g=f&&f[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&yf(this,g,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&c&&Go(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return il(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return il(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return wt.killTweensOf(r,s,a)},e}(Il);Kn(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(n){Vt[n]=function(){var e=new wn,t=Ip.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var v0=function(e,t,i){return e[t]=i},E1=function(e,t,i){return e[t](i)},UL=function(e,t,i,r){return e[t](r.fp,i)},FL=function(e,t,i){return e.setAttribute(t,i)},x0=function(e,t){return It(e[t])?E1:l0(e[t])&&e.setAttribute?FL:v0},w1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},OL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},T1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},y0=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},kL=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},BL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},zL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},R1=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},In=function(){function n(t,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||w1,this.d=l||this,this.set=u||v0,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=zL,this.m=i,this.mt=s,this.tween=r},n}();Dn(h0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return d0[n]=1});qn.TweenMax=qn.TweenLite=Vt;qn.TimelineLite=qn.TimelineMax=wn;wt=new wn({sortChildren:!1,defaults:Cl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=_1;var Vs=[],cc={},VL=[],dv=0,HL=0,Bd=function(e){return(cc[e]||VL).map(function(t){return t()})},Op=function(){var e=Date.now(),t=[];e-dv>2&&(Bd("matchMediaInit"),Vs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Ui.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&t.push(i))}),Bd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),dv=e,Bd("matchMedia"))},A1=function(){function n(t,i){this.selector=i&&Np(i),this.data=[],this._r=[],this.isReverted=!1,this.id=HL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){It(i)&&(s=r,r=i,i=It);var a=this,o=function(){var u=xt,c=a.selector,d;return u&&u!==a&&u.data.push(a),s&&(a.selector=Np(s)),xt=a,d=r.apply(a,arguments),It(d)&&a._r.push(d),xt=u,a.selector=c,a.isReverted=!1,d};return a.last=o,i===It?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=xt;xt=null,i(this),xt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Vt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof wn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Vt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Vs.length;a--;)Vs[a].id===this.id&&Vs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),GL=function(){function n(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){ji(i)||(i={matches:i});var a=new A1(0,s||this.scope),o=a.conditions={},l,u,c;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Ui.matchMedia(i[u]),l&&(Vs.indexOf(a)<0&&Vs.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(Op):l.addEventListener("change",Op)));return c&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Yc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return p1(r)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Zt(e)&&(e=ci(e)[0]);var s=ks(e||{}).get,a=i?t1:e1;return i==="native"&&(i=""),e&&(t?a((zn[t]&&zn[t].get||s)(e,t,i,r)):function(o,l,u){return a((zn[o]&&zn[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,i){if(e=ci(e),e.length>1){var r=e.map(function(c){return Un.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var a=zn[t],o=ks(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var d=new a;Na._pt=0,d.init(e,i?c+i:c,Na,0,[e]),d.render(1,d),Na._pt&&y0(1,Na)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=Un.to(e,Kn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zs(e.ease,Cl.ease)),ov(Cl,e||{})},config:function(e){return ov(Yn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!zn[o]&&!qn[o]&&bl(t+" effect requires "+o+" plugin.")}),Ud[t]=function(o,l,u){return i(ci(o),Kn(l||{},s),u)},a&&(wn.prototype[t]=function(o,l,u){return this.add(Ud[t](o,ji(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){je[e]=zs(t)},parseEase:function(e,t){return arguments.length?zs(e,t):je},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new wn(e),r,s;for(i.smoothChildTiming=Ln(e.smoothChildTiming),wt.remove(i),i._dp=0,i._time=i._tTime=wt._time,r=wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Vt&&r.vars.onComplete===r._targets[0]))&&Bi(i,r,r._start-r._delay),r=s;return Bi(wt,i,0),i},context:function(e,t){return e?new A1(e,t):xt},matchMedia:function(e){return new GL(e)},matchMediaRefresh:function(){return Vs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Op()},addEventListener:function(e,t){var i=cc[e]||(cc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:yL,wrapYoyo:SL,distribute:l1,random:c1,snap:u1,normalize:xL,getUnit:cn,clamp:mL,splitColor:m1,toArray:ci,selector:Np,mapRange:d1,pipe:_L,unitize:vL,interpolate:ML,shuffle:o1},install:KS,effects:Ud,ticker:Vn,updateRoot:wn.updateRoot,plugins:zn,globalTimeline:wt,core:{PropTween:In,globals:jS,Tween:Vt,Timeline:wn,Animation:Il,getCache:ks,_removeLinkedListItem:yf,reverting:function(){return tn},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return o0=e}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Yc[n]=Vt[n]});Vn.add(wn.updateRoot);Na=Yc.to({},{duration:0});var WL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},XL=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=WL(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},zd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Zt(s)&&(l={},Dn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}XL(o,s)}}}},Un=Yc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)tn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},zd("roundProps",Up),zd("modifiers"),zd("snap",u1))||Yc;Vt.version=wn.version=Un.version="3.15.0";qS=1;u0()&&oo();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hv,$r,Xa,S0,Us,pv,M0,YL=function(){return typeof window<"u"},Mr={},Rs=180/Math.PI,Ya=Math.PI/180,va=Math.atan2,mv=1e8,E0=/([A-Z])/g,$L=/(left|right|width|margin|padding|x)/i,qL=/[\s,\(]\S/,Hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},C1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},b1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JL=function(e,t,i){return e.style[t]=i},eD=function(e,t,i){return e.style.setProperty(t,i)},tD=function(e,t,i){return e._gsap[t]=i},nD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},iD=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},rD=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Tt="transform",Nn=Tt+"Origin",sD=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Mr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ar(r,o)}):this.tfm[e]=a.x?a[e]:ar(r,e),e===Nn&&(this.tfm.zOrigin=a.zOrigin);else return Hi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Tt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=Tt}(s||t)&&this.props.push(e,t,s[e])},P1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},aD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(E0,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=M0(),(!s||!s.isStart)&&!i[Tt]&&(P1(i),r.zOrigin&&i[Nn]&&(i[Nn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},L1=function(e,t){var i={target:e,props:[],revert:aD,save:sD};return e._gsap||Un.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},D1,Bp=function(e,t){var i=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return i&&i.style?i:$r.createElement(e)},Wn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(E0,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,lo(t)||t,1)||""},gv="O,Moz,ms,Ms,Webkit".split(","),lo=function(e,t,i){var r=t||Us,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(gv[a]+e in s););return a<0?null:(a===3?"ms":a>=0?gv[a]:"")+e},zp=function(){YL()&&window.document&&(hv=window,$r=hv.document,Xa=$r.documentElement,Us=Bp("div")||{style:{}},Bp("div"),Tt=lo(Tt),Nn=Tt+"Origin",Us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",D1=!!lo("perspective"),M0=Un.core.reverting,S0=1)},_v=function(e){var t=e.ownerSVGElement,i=Bp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Xa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Xa.removeChild(i),s},vv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},I1=function(e){var t,i;try{t=e.getBBox()}catch{t=_v(e),i=1}return t&&(t.width||t.height)||i||(t=_v(e)),t&&!t.width&&!t.x&&!t.y?{x:+vv(e,["x","cx","x1"])||0,y:+vv(e,["y","cy","y1"])||0,width:0,height:0}:t},N1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&I1(e))},us=function(e,t){if(t){var i=e.style,r;t in Mr&&t!==Nn&&(t=Tt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(E0,"-$1").toLowerCase())):i.removeAttribute(t)}},qr=function(e,t,i,r,s,a){var o=new In(e._pt,t,i,0,1,a?b1:C1);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},xv={deg:1,rad:1,turn:1},oD={grid:1,flex:1},cs=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Us.style,l=$L.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,v,g,h;if(r===a||!s||xv[r]||xv[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&N1(e),(p||a==="%")&&(Mr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Ot(p?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===$r||!v.appendChild)&&(v=$r.body),g=v._gsap,g&&p&&g.width&&l&&g.time===Vn.time&&!g.uncache)return Ot(s/g.width*d);if(p&&(t==="height"||t==="width")){var m=e.style[t];e.style[t]=d+r,_=e[c],m?e.style[t]=m:us(e,t)}else(p||a==="%")&&!oD[Wn(v,"display")]&&(o.position=Wn(e,"position")),v===e&&(o.position="static"),v.appendChild(Us),_=Us[c],v.removeChild(Us),o.position="absolute";return l&&p&&(g=ks(v),g.time=Vn.time,g.width=v[c]),Ot(f?_*s/d:_&&s?d/_*s:0)},ar=function(e,t,i,r){var s;return S0||zp(),t in Hi&&t!=="transform"&&(t=Hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mr[t]&&t!=="transform"?(s=Ul(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qc(Wn(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=$c[t]&&$c[t](e,t,i)||Wn(e,t)||QS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?cs(e,t,s,i)+i:s},lD=function(e,t,i,r){if(!i||i==="none"){var s=lo(t,e,1),a=s&&Wn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Wn(e,"borderTopColor"))}var o=new In(this._pt,e.style,t,0,1,T1),l=0,u=0,c,d,f,p,_,v,g,h,m,x,S,M;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Wn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Wn(e,t)||r,v?e.style[t]=v:us(e,t)),c=[i,r],_1(c),i=c[0],r=c[1],f=i.match(Ia)||[],M=r.match(Ia)||[],M.length){for(;d=Ia.exec(r);)g=d[0],m=r.substring(l,d.index),_?_=(_+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(_=1),g!==(v=f[u++]||"")&&(p=parseFloat(v)||0,S=v.substr((p+"").length),g.charAt(1)==="="&&(g=Wa(p,g)+S),h=parseFloat(g),x=g.substr((h+"").length),l=Ia.lastIndex-x.length,x||(x=x||Yn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=cs(e,t,v,x)||0),o._pt={_next:o._pt,p:m||u===1?m:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?b1:C1;return $S.test(r)&&(o.e=0),this._pt=o,o},yv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=yv[i]||i,t[1]=yv[r]||r,t.join(" ")},cD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],Mr[o]&&(l=1,o=o==="transformOrigin"?Nn:Tt),us(i,o);l&&(us(i,Tt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ul(i,1),a.uncache=1,P1(r)))}},$c={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new In(e._pt,t,i,0,0,cD);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Nl=[1,0,0,1,0,0],U1={},F1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sv=function(e){var t=Wn(e,Tt);return F1(t)?Nl:t.substr(7).match(YS).map(Ot)},w0=function(e,t){var i=e._gsap||ks(e),r=e.style,s=Sv(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Nl:s):(s===Nl&&!e.offsetParent&&e!==Xa&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,Xa.appendChild(e)),s=Sv(e),l?r.display=l:us(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Xa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vp=function(e,t,i,r,s,a){var o=e._gsap,l=s||w0(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,p=l[0],_=l[1],v=l[2],g=l[3],h=l[4],m=l[5],x=t.split(" "),S=parseFloat(x[0])||0,M=parseFloat(x[1])||0,T,w,y,R;i?l!==Nl&&(w=p*g-_*v)&&(y=S*(g/w)+M*(-v/w)+(v*m-g*h)/w,R=S*(-_/w)+M*(p/w)-(p*m-_*h)/w,S=y,M=R):(T=I1(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(x[1]||x[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&o.smooth?(h=S-u,m=M-c,o.xOffset=d+(h*p+m*v)-h,o.yOffset=f+(h*_+m*g)-m):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Nn]="0px 0px",a&&(qr(a,o,"xOrigin",u,S),qr(a,o,"yOrigin",c,M),qr(a,o,"xOffset",d,o.xOffset),qr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Ul=function(e,t){var i=e._gsap||new x1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Wn(e,Nn)||"0",c,d,f,p,_,v,g,h,m,x,S,M,T,w,y,R,P,L,N,H,z,D,X,k,U,$,ee,ne,se,ke,be,Ue;return c=d=f=v=g=h=m=x=S=0,p=_=1,i.svg=!!(e.getCTM&&N1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),r.scale=r.rotate=r.translate="none"),w=w0(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Vp(e,k||u,!!k||i.originIsAbsolute,i.smooth!==!1,w)),M=i.xOrigin||0,T=i.yOrigin||0,w!==Nl&&(L=w[0],N=w[1],H=w[2],z=w[3],c=D=w[4],d=X=w[5],w.length===6?(p=Math.sqrt(L*L+N*N),_=Math.sqrt(z*z+H*H),v=L||N?va(N,L)*Rs:0,m=H||z?va(H,z)*Rs+v:0,m&&(_*=Math.abs(Math.cos(m*Ya))),i.svg&&(c-=M-(M*L+T*H),d-=T-(M*N+T*z))):(Ue=w[6],ke=w[7],ee=w[8],ne=w[9],se=w[10],be=w[11],c=w[12],d=w[13],f=w[14],y=va(Ue,se),g=y*Rs,y&&(R=Math.cos(-y),P=Math.sin(-y),k=D*R+ee*P,U=X*R+ne*P,$=Ue*R+se*P,ee=D*-P+ee*R,ne=X*-P+ne*R,se=Ue*-P+se*R,be=ke*-P+be*R,D=k,X=U,Ue=$),y=va(-H,se),h=y*Rs,y&&(R=Math.cos(-y),P=Math.sin(-y),k=L*R-ee*P,U=N*R-ne*P,$=H*R-se*P,be=z*P+be*R,L=k,N=U,H=$),y=va(N,L),v=y*Rs,y&&(R=Math.cos(y),P=Math.sin(y),k=L*R+N*P,U=D*R+X*P,N=N*R-L*P,X=X*R-D*P,L=k,D=U),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,h=180-h),p=Ot(Math.sqrt(L*L+N*N+H*H)),_=Ot(Math.sqrt(X*X+Ue*Ue)),y=va(D,X),m=Math.abs(y)>2e-4?y*Rs:0,S=be?1/(be<0?-be:be):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!F1(Wn(e,Tt)),k&&e.setAttribute("transform",k))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(p*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Ot(p),i.scaleY=Ot(_),i.rotation=Ot(v)+o,i.rotationX=Ot(g)+o,i.rotationY=Ot(h)+o,i.skewX=m+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Nn]=qc(u)),i.xOffset=i.yOffset=0,i.force3D=Yn.force3D,i.renderTransform=i.svg?dD:D1?O1:fD,i.uncache=0,i},qc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vd=function(e,t,i){var r=cn(t);return Ot(parseFloat(t)+parseFloat(cs(e,"x",i+"px",r)))+r},fD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,O1(e,t)},Ss="0deg",Uo="0px",Ms=") ",O1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,v=i.scaleY,g=i.transformPerspective,h=i.force3D,m=i.target,x=i.zOrigin,S="",M=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Ss||c!==Ss)){var T=parseFloat(c)*Ya,w=Math.sin(T),y=Math.cos(T),R;T=parseFloat(d)*Ya,R=Math.cos(T),a=Vd(m,a,w*R*-x),o=Vd(m,o,-Math.sin(T)*-x),l=Vd(m,l,y*R*-x+x)}g!==Uo&&(S+="perspective("+g+Ms),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(M||a!==Uo||o!==Uo||l!==Uo)&&(S+=l!==Uo||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ms),u!==Ss&&(S+="rotate("+u+Ms),c!==Ss&&(S+="rotateY("+c+Ms),d!==Ss&&(S+="rotateX("+d+Ms),(f!==Ss||p!==Ss)&&(S+="skew("+f+", "+p+Ms),(_!==1||v!==1)&&(S+="scale("+_+", "+v+Ms),m.style[Tt]=S||"translate(0, 0)"},dD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,v=i.yOrigin,g=i.xOffset,h=i.yOffset,m=i.forceCSS,x=parseFloat(a),S=parseFloat(o),M,T,w,y,R;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ya,u*=Ya,M=Math.cos(l)*d,T=Math.sin(l)*d,w=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=Ya,R=Math.tan(u-c),R=Math.sqrt(1+R*R),w*=R,y*=R,c&&(R=Math.tan(c),R=Math.sqrt(1+R*R),M*=R,T*=R)),M=Ot(M),T=Ot(T),w=Ot(w),y=Ot(y)):(M=d,y=f,T=w=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=cs(p,"x",a,"px"),S=cs(p,"y",o,"px")),(_||v||g||h)&&(x=Ot(x+_-(_*M+v*w)+g),S=Ot(S+v-(_*T+v*y)+h)),(r||s)&&(R=p.getBBox(),x=Ot(x+r/100*R.width),S=Ot(S+s/100*R.height)),R="matrix("+M+","+T+","+w+","+y+","+x+","+S+")",p.setAttribute("transform",R),m&&(p.style[Tt]=R)},hD=function(e,t,i,r,s){var a=360,o=Zt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Rs:1),u=l-r,c=r+u+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*mv)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*mv)%a-~~(u/a)*a)),e._pt=f=new In(e._pt,t,i,r,u,KL),f.e=c,f.u="deg",e._props.push(i),f},Mv=function(e,t){for(var i in t)e[i]=t[i];return e},pD=function(e,t,i){var r=Mv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[Tt]=t,o=Ul(i,1),us(i,Tt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Tt],a[Tt]=t,o=Ul(i,1),a[Tt]=u);for(l in Mr)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=cn(u),_=cn(c),d=p!==_?cs(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new In(e._pt,o,l,d,f-d,kp),e._pt.u=_||0,e._props.push(l));Mv(o,r)};Dn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});$c[e>1?"border"+n:n]=function(o,l,u,c,d){var f,p;if(arguments.length<4)return f=a.map(function(_){return ar(o,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},a.forEach(function(_,v){return p[_]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,p,d)}});var k1={name:"css",register:zp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,d,f,p,_,v,g,h,m,x,S,M,T,w,y,R;S0||zp(),this.styles=this.styles||L1(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(zn[v]&&y1(v,t,i,r,e,s)))){if(p=typeof c,_=$c[v],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ll(c)),_)_(this,e,v,c,i)&&(w=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",rs.lastIndex=0,rs.test(u)||(g=cn(u),h=cn(c),h?g!==h&&(u=cs(e,v,u,h)+h):g&&(c+=g)),this.add(o,"setProperty",u,c,r,s,0,0,v),a.push(v),y.push(v,0,o[v]);else if(p!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Zt(u)&&~u.indexOf("random(")&&(u=Ll(u)),cn(u+"")||u==="auto"||(u+=Yn.units[v]||cn(ar(e,v))||""),(u+"").charAt(1)==="="&&(u=ar(e,v))):u=ar(e,v),f=parseFloat(u),m=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),d=parseFloat(c),v in Hi&&(v==="autoAlpha"&&(f===1&&ar(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,o.visibility),qr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Hi[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in Mr,x){if(this.styles.save(v),R=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Wn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=c,c=Wn(e,"perspective"),P?e.style.perspective=P:us(e,"perspective")}d=parseFloat(c)}if(S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ul(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new In(this._pt,o,Tt,0,1,M.renderTransform,M,0,-1),S.dep=1),v==="scale")this._pt=new In(this._pt,M,"scaleY",M.scaleY,(m?Wa(M.scaleY,m+d):d)-M.scaleY||0,kp),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(Nn,0,o[Nn]),c=uD(c),M.svg?Vp(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==M.zOrigin&&qr(this,M,"zOrigin",M.zOrigin,h),qr(this,o,v,qc(u),qc(c)));continue}else if(v==="svgOrigin"){Vp(e,c,1,T,0,this);continue}else if(v in U1){hD(this,M,v,f,m?Wa(f,m+c):c);continue}else if(v==="smoothOrigin"){qr(this,M,"smooth",M.smooth,c);continue}else if(v==="force3D"){M[v]=c;continue}else if(v==="transform"){pD(this,c,e);continue}}else v in o||(v=lo(v)||v);if(x||(d||d===0)&&(f||f===0)&&!qL.test(c)&&v in o)g=(u+"").substr((f+"").length),d||(d=0),h=cn(c)||(v in Yn.units?Yn.units[v]:g),g!==h&&(f=cs(e,v,u,h)),this._pt=new In(this._pt,x?M:o,v,f,(m?Wa(f,m+d):d)-f,!x&&(h==="px"||v==="zIndex")&&t.autoRound!==!1?QL:kp),this._pt.u=h||0,x&&R!==c?(this._pt.b=u,this._pt.e=R,this._pt.r=ZL):g!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=jL);else if(v in o)lD.call(this,e,v,u,m?m+c:c);else if(v in e)this.add(e,v,u||e[v],m?m+c:c,r,s);else if(v!=="parseTransform"){f0(v,c);continue}x||(v in o?y.push(v,0,o[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),a.push(v)}}w&&R1(this)},render:function(e,t){if(t.tween._time||!M0())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ar,aliases:Hi,getSetter:function(e,t,i){var r=Hi[t];return r&&r.indexOf(",")<0&&(t=r),t in Mr&&t!==Nn&&(e._gsap.x||ar(e,"x"))?i&&pv===i?t==="scale"?nD:tD:(pv=i||{})&&(t==="scale"?iD:rD):e.style&&!l0(e.style[t])?JL:~t.indexOf("-")?eD:x0(e,t)},core:{_removeProperty:us,_getMatrix:w0}};Un.utils.checkPrefix=lo;Un.core.getStyleSaver=L1;(function(n,e,t,i){var r=Dn(n+","+e+","+t,function(s){Mr[s]=1});Dn(e,function(s){Yn.units[s]="deg",U1[s]=1}),Hi[r[13]]=n+","+e,Dn(i,function(s){var a=s.split(":");Hi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Yn.units[n]="px"});Un.registerPlugin(k1);var As=Un.registerPlugin(k1)||Un;As.core.Tween;const mD="/Velvety2/".replace(/\/$/,""),gD=n=>`${mD}/assets/images/${n}`,_D=[{label:"Contact Us",to:"/contact"},{label:"About",to:"/about"},{label:"Services",to:"/services"},{label:"Projects",to:"/projects"}],sl=8,vD="rgba(255,253,245,1)",Hd="rgba(255,253,245,0.70)",zu="rgba(255,253,245,0.85)",xD="rgba(255,253,245,0.60)",yD="rgba(255,253,245,0.20)";function SD(n,e,t){return Math.max(e,Math.min(t,n))}const MD=()=>G.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"}),G.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),ED=()=>G.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[G.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),G.jsx("path",{d:"M22 7l-10 7L2 7"})]}),wD=()=>G.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:G.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"})});function B1({hovered:n,setHovered:e}){return G.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"64px 40px 40px"},children:[G.jsx("img",{src:gD("logoSmall2.png"),alt:"VelvetY",style:{height:48,width:"auto",display:"block"}}),G.jsxs("div",{style:{marginTop:48,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48},children:[G.jsxs("div",{children:[G.jsx("p",{style:{fontSize:12,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:Hd,margin:0},children:"Let’s start working together"}),G.jsx("a",{href:"mailto:info@velvetydesign.com",style:{display:"inline-block",marginTop:16,fontSize:"clamp(22px, 3vw, 34px)",fontWeight:800,letterSpacing:"-0.04em",color:"#fff",textDecoration:"none",lineHeight:1.1},children:"info@velvetydesign.com"}),G.jsxs("ul",{style:{marginTop:32,listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:12,fontSize:13,color:zu},children:[G.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[G.jsx(MD,{}),G.jsx("span",{children:"2203B 22nd AVE S, Seattle, WA 98144"})]}),G.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[G.jsx(ED,{}),G.jsx("a",{href:"mailto:info@velvetydesign.com",style:{color:"inherit",textDecoration:"none"},children:"info@velvetydesign.com"})]}),G.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10},children:[G.jsx(wD,{}),G.jsx("span",{children:"(206) 601-5969"})]})]})]}),G.jsxs("div",{children:[G.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:Hd,margin:0},children:"Company"}),G.jsx("ul",{style:{marginTop:20,listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:12,fontSize:14,color:zu},children:_D.map(t=>G.jsx("li",{children:G.jsxs(Wm,{to:t.to,style:{display:"inline-flex",alignItems:"center",gap:8,color:zu,textDecoration:"none"},onMouseEnter:()=>e==null?void 0:e(t.label),onMouseLeave:()=>e==null?void 0:e(null),children:[t.label,G.jsx("span",{style:{display:"block",height:1,background:zu,width:n===t.label?20:0,transition:"width 0.3s"}})]})},t.label))})]}),G.jsxs("div",{children:[G.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:Hd,margin:0},children:"Subscribe"}),G.jsxs("form",{onSubmit:t=>t.preventDefault(),style:{marginTop:20,display:"flex",alignItems:"center",gap:8,borderRadius:999,border:`1px solid ${yD}`,background:"rgba(255,255,255,0.05)",padding:"4px 4px 4px 16px"},children:[G.jsx("input",{type:"email",placeholder:"Enter your email","aria-label":"Email",style:{flex:1,background:"transparent",border:"none",outline:"none",fontSize:13,color:"#fff",minWidth:0}}),G.jsx("button",{type:"submit",style:{flexShrink:0,background:"#fff",color:"#0a0a0a",border:"none",borderRadius:999,padding:"8px 16px",fontSize:12,fontWeight:600,cursor:"pointer"},children:"Submit"})]})]})]}),G.jsx("p",{style:{marginTop:56,paddingTop:24,textAlign:"center",fontSize:12,color:xD},children:"© Copyright 2026 by VELVETY LLC"})]})}function TD({index:n,hovered:e,setColRef:t,setInnerRef:i}){return G.jsx("div",{ref:t,style:{flex:1,overflow:"hidden",background:"#0a0a0a",borderRight:n<sl-1?"1px solid rgba(255,255,255,0.11)":"none"},children:G.jsx("div",{ref:i,children:G.jsx("div",{style:{width:`${sl*100}%`,marginLeft:`${-n*100}%`,pointerEvents:"none"},children:G.jsx(B1,{hovered:e})})})})}function RD(){const[n,e]=Y.useState(null),t=Y.useRef(null),i=Y.useRef([]),r=Y.useRef([]),s=Y.useRef(-1),a=c=>{const d=i.current[c],f=r.current[c];!d||!f||(As.killTweensOf([d,f]),As.to(f,{y:20,duration:.12,ease:"power2.in"}),As.to(d,{backgroundColor:"rgba(255,255,255,0.06)",boxShadow:"inset 0 20px 40px rgba(0,0,0,0.95), inset 0 4px 12px rgba(0,0,0,0.7)",duration:.12}))},o=c=>{const d=i.current[c],f=r.current[c];!d||!f||(As.killTweensOf([d,f]),As.to(f,{y:0,duration:.45,ease:"back.out(2.8)"}),As.to(d,{backgroundColor:"rgba(0,0,0,0)",boxShadow:"inset 0 0 0 transparent",duration:.35}))},l=c=>{var _;const d=(_=t.current)==null?void 0:_.getBoundingClientRect();if(!d)return;const f=c.clientX-d.left,p=SD(Math.floor(f/d.width*sl),0,sl-1);p!==s.current&&(s.current>=0&&o(s.current),s.current=p,a(p))},u=()=>{s.current>=0&&(o(s.current),s.current=-1)};return G.jsxs("footer",{ref:t,onMouseMove:l,onMouseLeave:u,style:{position:"relative",overflow:"hidden",background:"#0a0a0a",zIndex:3,color:vD,fontFamily:"Inter, ui-sans-serif, system-ui, sans-serif"},children:[G.jsx("div",{style:{display:"flex",width:"100%"},"aria-hidden":!0,children:Array.from({length:sl}).map((c,d)=>G.jsx(TD,{index:d,hovered:n,setColRef:f=>{i.current[d]=f},setInnerRef:f=>{r.current[d]=f}},d))}),G.jsx("div",{style:{position:"absolute",inset:0,zIndex:3},children:G.jsx(B1,{hovered:n,setHovered:e})})]})}function AD(){return G.jsxs("div",{style:{background:"#000"},children:[G.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none"},children:G.jsx(I3,{rotation:285,colors:["#e83d0d","#1e52bf","#7cff67"],speed:.18,frequency:1.1,warpStrength:1.2,noise:.08,iterations:3,intensity:1.2,bandWidth:5,transparent:!1,mouseInfluence:.6,parallax:.3})}),G.jsx(B3,{}),G.jsx(z3,{}),G.jsx(No,{topColor:"#f5f5f3",bottomColor:"#000000"}),G.jsx(H3,{}),G.jsx(No,{topColor:"#000000",bottomColor:"#f5f5f3"}),G.jsx(G3,{}),G.jsx(No,{topColor:"#f5f5f3",bottomColor:"#000000"}),G.jsx(X3,{}),G.jsx(No,{topColor:"#000000",bottomColor:"#f5f5f3"}),G.jsx(K3,{}),G.jsx(No,{topColor:"#f5f5f3",bottomColor:"#0a0a0a"}),G.jsx(RD,{})]})}function CD(){return G.jsx(vT,{children:G.jsx(tS,{path:"/",element:G.jsx(AD,{})})})}Uy(document.getElementById("root")).render(G.jsx(Y.StrictMode,{children:G.jsx(HT,{basename:"/Velvety2/".replace(/\/$/,""),children:G.jsx(CD,{})})}));
