'use strict';

var util = require('util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var util__default = /*#__PURE__*/_interopDefaultLegacy(util);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var tlist = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const n=r(1),i=r(2);class o extends Array{constructor(...e){super(...function(e){return l(e)||(e=e.length>1?Ve(e):Object.entries(e[0]).length>0?p(e[0]):[]),e}(e));}}function u(e){return !!i.isArray(e)&&2===e.length}function l(e){return !!i.isArray(e)&&e.filter(u).length===e.length}function c(e,t){return n.mapiv(e,(e,t,r)=>[t,r[e]],[t])}function f(e){return [e.map(e=>e[0]),e.map(e=>e[1])]}function a(e,t){let r={},[n,i]=f(e);for(let e=0;e<n.length;e++)r[n[e]]=i[e];return r}function p(e){return Object.entries(e)}function s(e,t){return e.concat(t)}function y(e,t){return t.concat(e)}function b(e,t){let[r,i]=f(e);return n.allIndexesOf(r,t)}function g(e,t){let[r,i]=f(e);return n.allIndexesOf(i,t)}function h(e,t,r){let[i,o]=f(e),u=n.allIndexesOf(i,t),l=n.allIndexesOf(o,r);return n.slctvIv(u,(e,t,r)=>t==r[e],[l])}function d(e,t){return b(e,t)[0]}function v(e,t){return g(e,t)[0]}function m(e,t,r){return h(e,t,r)[0]}function O(e,t){return b(e,t).last()}function w(e,t){return g(e,t).last()}function j(e,t,r){return h(e,t,r).last()}function P(e,t,r,i,o=!0){return e=n.insert(e,[t,r],i,o)}function A(e,t,r,n=!0){return P(this,e,t,r,n)}function x(e,t,r,n=!0){return P(e,t,r,e.length,n)}function S(e,t,r,n=!0){return P(e,t,r,0,n)}function V(e,t,r,i=!0){return e=n.insertArray(e,t,r,i)}function T(e,t){return b(e,t).length>0}function K(e,t){return g(e,t).length>0}function z(e,t,r){return h(e,t,r).length>0}function I(e,t){return b(e,t).length}function E(e,t){return g(e,t).length}function F(e,t,r){return h(e,t,r).length}function _(e,t,r){let n=b(e,t)[r];return e.seqsNot([n])}function N(e,t,r){let n=g(e,t)[r];return e.seqsNot([n])}function q(e,t,r,n){let i=h(e,t,r)[n];return e.seqsNot([i])}function k(e,t){return _(e,t,0)}function D(e,t){return N(e,t,0)}function L(e,t,r){return q(e,t,r,0)}function J(e,t){return _(e,t,b(e,t).length-1)}function M(e,t){return N(e,t,g(e,t).length-1)}function R(e,t,r){return q(e,t,r,h(e,t,r).length-1)}function C(e,t){let r=b(e,t);return e.seqsNot(r)}function U(e,t){let r=g(e,t);return e.seqsNot(r)}function H(e,t,r){let n=h(e,t,r);return e.seqsNot(n)}function $(e,t,r){let n=b(e,t)[r];return e.seqs([n])[0]}function G(e,t,r){let n=g(e,t)[r];return e.seqs([n])[0]}function B(e,t,r,n){let i=h(e,t,r)[n];return e.seqs([i])[0]}function Z(e,t){return $(e,t,0)}function W(e,t){return G(e,t,0)}function Q(e,t,r){return B(e,t,r,0)}function X(e,t){return $(e,t,b(e,t).length-1)}function Y(e,t){return G(e,t,g(e,t).length-1)}function ee(e,t,r){return B(e,t,r,h(e,t,r).length-1)}function te(e,t){let r=b(e,t);return e.seqs(r)}function re(e,t){let r=g(e,t);return e.seqs(r)}function ne(e,t,r){let n=h(e,t,r);return e.seqs(n)}function ie(e,t,r,n){return e[b(e,t)[n]][1]=r,e}function oe(e,t,r){return ie(e,t,r,0)}function ue(e,t,r){return ie(e,t,r,I(e,t)-1)}function le(e,t,r){let n=b(e,t);for(let t of n)e[t][1]=r;return e}function ce(e,t){return e[0]===t[0]}function fe(e,t){return e[1]===t[1]}function ae(e,t){return ce(e,t)&&fe(e,t)}function pe(e,t){return e[0]<t[0]}function se(e,t){return e[1]<t[1]}function ye(e,t){return pe(e,t)?-1:ce(e,t)?0:1}function be(e,t){return se(e,t)?-1:fe(e,t)?0:1}function ge(e,t){return pe(e,t)?-1:ce(e,t)?be(e,t):1}function he(e,t){return se(e,t)?-1:fe(e,t)?ye(e,t):1}function de(e){return (e=JSON.parse(JSON.stringify(e))).sort(ye),e}function ve(e){return (e=JSON.parse(JSON.stringify(e))).sort(be),e}function me(e){return (e=JSON.parse(JSON.stringify(e))).sort(ge),e}function Oe(e){return (e=JSON.parse(JSON.stringify(e))).sort(he),e}function we(e,t){let r=[];for(let n=0;n<e.length;n++){let i=e[n],o=i[0],u=i[1];T(r,o)&&o===t?r=ie(r,o,u,0):r.push([o,u]);}return r}function je(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r],i=n[0],o=n[1];T(t,i)?t=ie(t,i,o,0):t.push([i,o]);}return t}function Pe(e,t){let r=[];for(let n=0;n<e.length;n++){let i=e[n],o=i[0],u=i[1];if(K(r,u)&&u===t){r[v(r,u)]=[o,u];}else r.push([o,u]);}return r}function Ae(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r],i=n[0],o=n[1];if(K(t,o)){t[v(t,o)]=[i,o];}else t.push([i,o]);}return t}function xe(e,t,r){let n=[];for(let i=0;i<e.length;i++){let o=e[i],u=o[0],l=o[1];if(z(n,u,l)&&u===t&&l===r){n[m(n,u,l)]=[u,l];}else n.push([u,l]);}return n}function Se(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r],i=n[0],o=n[1];if(z(t,i,o)){t[m(t,i,o)]=[i,o];}else t.push([i,o]);}return t}function Ve(e){if(e.length%2==1&&(e=e.slice(0,e.length-1)),e.length<2)return [];return c(e.evens(),e.odds())}function Te(e){let[t,r]=f(e);return n.interleave(t,r,1)}function Ke(e){return Object.entries(e)[0]}function ze(e){return {[e[0]]:e[1]}}Object.defineProperty(o.prototype,"deepcopy",{value:function(){return function(e){let t=e,r=JSON.parse(JSON.stringify(e));return r=n.decltype(t,e),r}(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"kvl",{value:function(){return f(this).map(e=>Array.from(e))},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"dict",{value:function(e){return a(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"extend",{value:function(e){return s(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"prextend",{value:function(e){return y(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"allIndexesOfK",{value:function(e){return b(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"allIndexesOfV",{value:function(e){return g(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"allIndexesOfKV",{value:function(e,t){return h(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"firstIndexOfK",{value:function(e){return d(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"firstIndexOfV",{value:function(e){return v(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"firstIndexOfKV",{value:function(e,t){return m(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"lastIndexOfK",{value:function(e){return O(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"lastIndexOfV",{value:function(e){return w(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"lastIndexOfKV",{value:function(e,t){return j(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"insert",{value:A,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"insertOne",{value:A,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"append",{value:function(e,t,r=!0){return x(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"prepend",{value:function(e,t,r=!0){return S(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"insertTl",{value:function(e,t,r=!0){return V(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"includesK",{value:function(e){return T(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"includesV",{value:function(e){return K(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"includesKV",{value:function(e,t){return z(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"countK",{value:function(e){return I(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"countV",{value:function(e){return E(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"countKV",{value:function(e,t){return F(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmK",{value:function(e,t){return _(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmV",{value:function(e,t){return N(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmKV",{value:function(e,t,r){return q(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmFirstK",{value:function(e){return k(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmFirstV",{value:function(e){return D(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmFirstKV",{value:function(e,t){return L(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmLastK",{value:function(e){return J(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmLastV",{value:function(e){return M(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmLastKV",{value:function(e,t){return R(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmAllK",{value:function(e){return C(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmAllV",{value:function(e){return U(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rmAllKV",{value:function(e,t){return H(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getK",{value:function(e,t){return $(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getV",{value:function(e,t){return G(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getKV",{value:function(e,t,r){return B(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getFirstK",{value:function(e){return Z(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getFirstV",{value:function(e){return W(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getFirstKV",{value:function(e,t){return Q(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getLastK",{value:function(e){return X(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getLastV",{value:function(e){return Y(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getLastKV",{value:function(e,t){return ee(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getAllK",{value:function(e){return te(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getAllV",{value:function(e){return re(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"getAllKV",{value:function(e,t){return ne(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"set",{value:function(e,t,r){return ie(this,e,t,r)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"setFirst",{value:function(e,t){return oe(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"setLast",{value:function(e,t){return ue(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"setAll",{value:function(e,t){return le(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"sortk",{value:function(){return de(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"sortv",{value:function(){return ve(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"sortkv",{value:function(){return me(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"sortvk",{value:function(){return Oe(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"uniqualizeK",{value:function(e){return we(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"uniqualizeAllK",{value:function(){return je(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"uniqualizeV",{value:function(e){return Pe(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"uniqualizeAllV",{value:function(){return Ae(this)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"uniqualizeKV",{value:function(e,t){return xe(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"uniqualizeAllKV",{value:function(){return Se(tl)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"list",{value:function(){return Array.from(Te(tl))},writable:!0,enumerable:!1,configurable:!0}),e.exports={Tlist:o,isTuple:u,isTlist:l,t2d:function(e){return {[e[0]]:e[1]}},d2t:function(e){return Object.entries(e)[0]},kvl2tl:c,tl2kvl:f,tl2d:a,d2tl:p,l2tl:Ve,tl2l:Te,extend:s,prextend:y,allIndexesOfK:b,allIndexesOfV:g,allIndexesOfKV:h,firstIndexOfK:d,firstIndexOfV:v,firstIndexOfKV:m,lastIndexOfK:O,lastIndexOfV:w,lastIndexOfKV:j,insert:P,insertOne:function(e,t,r,n,i=!0){return P(e,t,r,n,i)},append:x,prepend:S,insertTl:V,includesK:T,includesV:K,includesKV:z,countK:I,countV:E,countKV:F,rmK:_,rmV:N,rmKV:q,rmFirstK:k,rmFirstV:D,rmFirstKV:L,rmLastK:J,rmLastV:M,rmLastKV:R,rmAllK:C,rmAllV:U,rmAllKV:H,getK:$,getV:G,getKV:B,getFirstK:Z,getFirstV:W,getFirstKV:Q,getLastK:X,getLastV:Y,getLastKV:ee,getAllK:te,getAllV:re,getAllKV:ne,set:ie,setFirst:oe,setLast:ue,setAll:le,tupleEqK:ce,tupleEqV:fe,tupleEqKV:ae,tupleEq:function(e,t){return ae(e,t)},tupleLtK:pe,tupleLtV:se,tupleGtK:function(e,t){return e[0]>t[0]},tupleGtV:function(e,t){return e[1]>t[1]},tupleCmpK:ye,tupleCmpV:be,tupleCmpKV:ge,tupleCmpVK:he,sortk:de,sortv:ve,sortkv:me,sortvk:Oe,uniqualizeK:we,uniqualizeAllK:je,uniqualizeV:Pe,uniqualizeAllV:Ae,uniqualizeKV:xe,uniqualizeAllKV:Se,dele2tuple:Ke,tuple2dele:ze,dl2tl:function(e){return e.map(Ke)},tl2dl:function(e){return e.map(ze)}};},function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const n=r(1);function i(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=e[i],l=(0, t[i])(o,u,...r[i]);n.push(l);}return n}function o(e,t,r){return void 0===r&&(r=[]),i(e,t,Array(e.length).fill(r))}function u(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=i,o=(0, t[i])(e,...r[i]);n.push(o);}return n}function l(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=e[i],u=(0, t[i])(o,...r[i]);n.push(u);}return n}function c(e,t,r){return l(e,t,Array(e.length).fill(r))}function f(e,t,r){return i(e,Array(e.length).fill(t),r)}function a(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let e=i,o=(0, t[i])(e,...r);n.push(o);}return n}function p(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=(0, t[i])(...r[i]);n.push(e);}return n}function s(e,t,r){return o(e,Array(e.length).fill(t),r)}function y(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e);}return n}function b(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]);n.push(o);}return n}function g(e,t,r){void 0===r&&(r=[]);let n=Array(e.length).fill(r),i=[];for(var o=0;o<e.length;o++){let e=(0, t[o])(...n[o]);i.push(e);}return i}function h(e,t,r){let n=[];for(var i=0;i<e.length;i++){let e=t(i,...oargs);n.push(e);}return n}function d(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r);n.push(o);}return n}function v(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e);}return n}function m(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=e[i],l=(0, t[i])(o,u,...r[i]),c={i:i,v:e[i]};l&&n.push(c);}return n}function O(e,t,r){return m(e,t,r).map(e=>e.i)}function w(e,t,r){return void 0===r&&(r=[]),m(e,t,Array(e.length).fill(r))}function j(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=(0, t[i])(o,...r[i]),l={i:i,v:e[i]};u&&n.push(l);}return n}function P(e,t,r){return P().map(e=>e.i)}function A(e,t,r){return O(e,Array(e.length).fill(t),r)}function x(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=i,u=(0, t[i])(o,...r),l={i:i,v:e[i]};u&&n.push(l);}return n}function S(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=(0, t[i])(...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function V(e,t,r){return void 0===r&&(r=[]),m(e,Array(e.length).fill(t),Array(e.length).fill(r))}function T(e,t,r){return V(e,t,r).map(e=>e.i)}function K(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(i,...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function z(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function I(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=(0, t[i])(...r),u={i:i,v:e[i]};o&&n.push(u);}return n}function E(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(i,...r),u={i:i,v:e[i]};o&&n.push(u);}return n}function F(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r),u={i:i,v:e[i]};o&&n.push(u);}return n}function _(e,t,r){return F(e,t,r).map(e=>e.i)}function N(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function q(e){return void 0===e&&(e=!1),e?(e,t,r)=>e[r]===t[r]:(e,t,r)=>t.includes(e[r])}function k(e,t){let r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat(n,r)}function D(e,t){let r=e%t,n=parseInt((e-r)/t);return 0===r||(n+=1),n}function L(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(let e=0;e<n.length;e++)t.push(n[e]);}return t}function J(e){return e[0].map((t,r)=>e.map((t,n)=>e[n][r]))}function M(e,t){let r=e.length,n=[];for(let i=0;i<r;i+=t){let r=e.slice(i,i+t);n.push(r);}return n}function R(e){let t=e.entries();return Array.from(t)}function C(e,t){let r=R(e);return r=r.filter(e=>e[1]==t),r=r.map(e=>e[0]),r}function U(e,t){return new(Object.getPrototypeOf(e).constructor)(...t)}function H(e,t){let r=[];for(let n=0;n<t.length;n++)r.push(e[t[n]]);return r}function $(e){let t=function(e){e.length;let t=e.map(e=>e.length);return Math.min(...t)}(e);return [e.map(e=>e.slice(0,t)),e.map(e=>e.slice(t)).filter(e=>e.length>0)]}function G(e){let t,r=[],n=e;for(;n.length>0;)[t,n]=$(n),r.push(t);return r}function B(...e){let t;[e,t]=function(e){let t,r=e.length-1;return n.isArray(e[r])?t=1:(t=parseInt(e[r]),e=e.slice(0,r)),t=void 0===t||t<1?1:t,[e,t]}(e),e=d(e,(e,t)=>M(e,t),[t]);let r=function(...e){let t=G(e);return tmats=t.map(J),wfsmat=tmats.map(L),L(wfsmat)}(...e);return r=L(r),r}function Z(e,t,r){var n,i;return n=t,i=[1,0,2],T(e,t=function(...e){let t=H(e,i);return n(...t)},r)}function W(e,t){for(let r=0;r<e.length;r++){let n=e[r];for(let i=0;i<n.length;i++){let o=n[i];e[r][i]=t(r,i,o);}}return e}function Q(e,t,r){return {_ox:e,_oy:t,_v:r}}function X(e){return W(e,Q)}function Y(e,t){let r=te(0,t);return r[r.length-1]}function ee(e,t,r){return te(0,r)[e]}function te(e,t){let r=R(t);return r=r.filter(e=>e[1]==value),r=r.map(e=>e[0]),r}Object.defineProperty(Array.prototype,"mapfivo",{value:function(e,t){return i(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfiv",{value:function(e,t){return o(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfio",{value:function(e,t){return u(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfvo",{value:function(e,t){return l(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfv",{value:function(e,t){return c(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapivo",{value:function(e,t){return f(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfi",{value:function(e,t){return a(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfo",{value:function(e,t){return p(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapiv",{value:function(e,t){return s(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapio",{value:function(e,t){return y(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapvo",{value:function(e,t){return b(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapf",{value:function(e,t){return g(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapi",{value:function(e,t){return h(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapv",{value:function(e,t){return d(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapo",{value:function(e,t){return v(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctivFivo",{value:function(e,t){return m(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctiIv",{value:function(e,t){return T(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctiV",{value:function(e,t){return _(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"uniqualize",{value:function(){let e=new Set(this);return Array.from(e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"flat",{value:function(){let e=this;for(;e.some(e=>Array.isArray(e));)e=[].concat(...e);return e},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"tlist",{value:R,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"allIndexesOf",{value:function(e){return C(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"last",{value:function(){return this[this.length-1]},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insert",{value:function(e,t){return Array.prototype.splice.call(this,t,0,e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insertArray",{value:function(e,t){return Array.prototype.splice.call(this,t,0,...e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqs",{value:function(e){return H(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqsNot",{value:function(e){return this.filter((t,r)=>!e.includes(r))},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"evens",{value:function(){return this.filter((e,t)=>t%2==0)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"odds",{value:function(){return this.filter((e,t)=>t%2==1)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"interleave",{value:function(...e){return e.unshift(this),B(...e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"findAllIndexes",{value:function(e,t){return Z(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),e.exports={mapfivo:i,mapfiv:o,mapfio:u,mapfvo:l,mapivo:f,mapfi:a,mapfv:c,mapfo:p,mapiv:s,mapio:y,mapvo:b,mapf:g,mapi:h,mapv:d,mapo:v,slctivFivo:m,slctiFivo:O,slctvFivo:function(e,t,r){return m(e,t,r).map(e=>e.v)},slctivFiv:w,slctiFiv:function(e,t,r){return w(e,t,r).map(e=>e.i)},slctvFiv:function(e,t,r){return w(e,t,r).map(e=>e.v)},slctivFio:j,slctiFio:function(e,t,r){return j(e,t,r).map(e=>e.i)},slctvFio:function(e,t,r){return j(e,t,r).map(e=>e.v)},slctivFvo:function(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=e[i],u=(0, t[i])(o,...r[i]),l={i:i,v:e[i]};u&&n.push(l);}return n},slctiFvo:P,slctvFvo:function(e,t,r){return P().map(e=>e.v)},slctivIvo:A,slctiIvo:function(e,t,r){return A(e,t,r).map(e=>e.i)},slctvIvo:function(e,t,r){return A(e,t,r).map(e=>e.v)},slctivFi:x,slctiFi:function(e,t,r){return x(e,t,r).map(e=>e.i)},slctvFi:function(e,t,r){return x(e,t,r).map(e=>e.v)},slctivFo:S,slctiFo:function(e,t,r){return S(e,t,r).map(e=>e.i)},slctvFo:function(e,t,r){return S(e,t,r).map(e=>e.v)},slctivIv:V,slctiIv:T,slctvIv:function(e,t,r){return V(e,t,r).map(e=>e.v)},slctivIo:K,slctiIo:function(e,t,r){return K(e,t,r).map(e=>e.i)},slctvIo:function(e,t,r){return K(e,t,r).map(e=>e.v)},slctivVo:z,slctiVo:function(e,t,r){return z(e,t,r).map(e=>e.i)},slctvVo:function(e,t,r){return z(e,t,r).map(e=>e.v)},slctivF:I,slctiF:function(e,t,r){return I(e,t,r).map(e=>e.i)},slctvF:function(e,t,r){return I(e,t,r).map(e=>e.v)},slctivI:E,slctiI:function(e,t,r){return E(e,t,r).map(e=>e.i)},slctvI:function(e,t,r){return E(e,t,r).map(e=>e.v)},slctivV:F,slctiV:_,slctvV:function(e,t,r){return F(e,t,r).map(e=>e.v)},slctivO:N,slctiO:function(e,t,r){return N(e,t,r).map(e=>e.i)},slctvO:function(e,t,r){return N(e,t,r).map(e=>e.v)},replfivo:function(e,t,r,n){let i=O(e,r,n),o=Array.from(e);for(let e of i)o[e]=t;return o},replace:function(e,t,r){let n=Array.from(e);for(let e=0;e<n.length;e++)n[e]===t&&(n[e]=r);return n},diffi:function(e,t,r,n){void 0===n&&(n=q(r));let i=[];for(var o in e)n(e,t,o)||i.push(e[o]);return i},diffv:function(e,t,r,n){void 0===n&&(n=q(r));let i=[];for(var o in e)n(e,t,o)||i.push(e[o]);return i},diffiv:function(e,t,r,n){void 0===n&&(n=q(r));let i=[];for(var o in e)n(e,t,o)||i.push({index:o,value:e[o]});return i},init:function(e,t){return Array.apply(null,Array(e)).map(e=>t)},divide:M,kvlist2d:function(e,t){let r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return r},d2kvlist:function(e){let t=Object.keys(e);return [t,d(t,t=>e[t])]},reheadI:k,reheadV:function(e,t){let r=e.indexOf(t);return k(e,r)},getRowNumsViaLength:D,matRc2index:function(e,t,r){return e*r+t},matIndex2rc:function(e,t){let r=e%t;return [(e-r)/t,r]},list2mat:function(e,t){let r=e.length,n=D(r,t),i=[],o=0;for(var u=0;u<n;u++){let n=[];for(var l=0;l<t;l++)o<r&&n.push(e[o]),o+=1;i.push(n);}return i},list2mat2:function(e,t,r){let n=[],i=0;for(var o=0;o<r;o++){let r=[];for(var u=0;u<t;u++)r.push(e[i]),i+=1;n.push(r);}return n},mat2list:L,transpose:J,batmap:function(e,t,r){let n=[];r=J(r);for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]);n.push(o);}return n},index1dto2d:function(e,t){return [(e-e%t)/t,e%t]},index2dto1d:function(e,t,r){return r*e+t},initMat:function(e,t,r){var n=Array(e).fill(r);for(let e=0;e<n.length;e++)n[e]=Array(t).fill(r);return n},extendWithOneValue:function(e,t,r){let n=Array(r).fill(t);return Array.prototype.concat(e,n)},uniqualize:function(e){let t=new Set(e);return Array.from(t)},tlist:R,allIndexesOf:C,last:function(e){return e[e.length-1]},insert:function(e,t,r,n=!0){return !0===n||(e=U(e,e=JSON.parse(JSON.stringify(e)))),Array.prototype.splice.call(e,r,0,t),e},insertArray:function(e,t,r,n=!0){return !0===n||(e=U(e,e=JSON.parse(JSON.stringify(e)))),Array.prototype.splice.call(e,r,0,...t),e},seqs:H,seqsNot:function(e,t){return e.filter((e,r)=>!t.includes(r))},evens:function(e){return e.filter((e,t)=>t%2==0)},odds:function(e){return e.filter((e,t)=>t%2==1)},dmat2mats:G,interleave:B,findAllIndexes:Z,decltype:U,rcrdize:function(e){return e.map((e,t)=>({_oi:t,_v:e}))},matRcrdize:X,matInplaceMapv:function(e,t){for(let r=0;r<e.length;r++){let n=e[r];for(let i=0;i<n.length;i++){let o=n[i];e[r][i]=t(o);}}return e},matInplaceMapxyv:W,matRcrdize:X,rmfst:function(e,t){return t.splice(t.findIndex(t=>t===e),1),t},rmlst:function(e,t){let r=Y(e,t);return t.splice(r,1),t},rm_which:function(e,t,r){let n=ee(e,t,r);return r.splice(n,1),r},rmall:function(e,t){return t.filter(t=>t!==e)},fst_index_of:function(e,t){return te(0,t)[0]},lst_index_of:Y,which_index_of:ee,all_indexes_of:te,list_inter_list:function(e,t){if(0===t.length)return !0;for(let r of t)if(e.includes(r))return !0;return !1},list_includes_list:function(e,t){for(let r of t)if(!e.includes(r))return !1;return !0}};},function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},i=/%[sdj%]/g;t.format=function(e){if(!d(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(l(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,u=String(e).replace(i,(function(e){if("%%"===e)return "%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return "[Circular]"}default:return e}})),c=n[r];r<o;c=n[++r])g(c)||!O(c)?u+=" "+c:u+=" "+l(c);return u},t.deprecate=function(r,n){if(void 0!==e&&!0===e.noDeprecation)return r;if(void 0===e)return function(){return t.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),i=!0;}return r.apply(this,arguments)}};var o,u={};function l(e,r){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&t._extend(n,r),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),a(n,e,n.depth)}function c(e,t){var r=l.styles[t];return r?"["+l.colors[r][0]+"m"+e+"["+l.colors[r][1]+"m":e}function f(e,t){return e}function a(e,r,n){if(e.customInspect&&r&&P(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return d(i)||(i=a(e,i,n)),i}var o=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(d(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return h(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}(e,r);if(o)return o;var u=Object.keys(r),l=function(e){var t={};return e.forEach((function(e,r){t[e]=!0;})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(r)),j(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return p(r);if(0===u.length){if(P(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(m(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return e.stylize(Date.prototype.toString.call(r),"date");if(j(r))return p(r)}var f,O="",A=!1,x=["{","}"];return y(r)&&(A=!0,x=["[","]"]),P(r)&&(O=" [Function"+(r.name?": "+r.name:"")+"]"),m(r)&&(O=" "+RegExp.prototype.toString.call(r)),w(r)&&(O=" "+Date.prototype.toUTCString.call(r)),j(r)&&(O=" "+p(r)),0!==u.length||A&&0!=r.length?n<0?m(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),f=A?function(e,t,r,n,i){for(var o=[],u=0,l=t.length;u<l;++u)T(t,String(u))?o.push(s(e,t,r,n,String(u),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(s(e,t,r,n,i,!0));})),o}(e,r,n,l,u):u.map((function(t){return s(e,r,n,l,t,A)})),e.seen.pop(),function(e,t,r){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}(f,O,x)):x[0]+O+x[1]}function p(e){return "["+Error.prototype.toString.call(e)+"]"}function s(e,t,r,n,i,o){var u,l,c;if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?l=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(l=e.stylize("[Setter]","special")),T(n,i)||(u="["+i+"]"),l||(e.seen.indexOf(c.value)<0?(l=g(r)?a(e,c.value,null):a(e,c.value,r-1)).indexOf("\n")>-1&&(l=o?l.split("\n").map((function(e){return "  "+e})).join("\n").substr(2):"\n"+l.split("\n").map((function(e){return "   "+e})).join("\n")):l=e.stylize("[Circular]","special")),v(u)){if(o&&i.match(/^\d+$/))return l;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"));}return u+": "+l}function y(e){return Array.isArray(e)}function b(e){return "boolean"==typeof e}function g(e){return null===e}function h(e){return "number"==typeof e}function d(e){return "string"==typeof e}function v(e){return void 0===e}function m(e){return O(e)&&"[object RegExp]"===A(e)}function O(e){return "object"==typeof e&&null!==e}function w(e){return O(e)&&"[object Date]"===A(e)}function j(e){return O(e)&&("[object Error]"===A(e)||e instanceof Error)}function P(e){return "function"==typeof e}function A(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(v(o)&&(o=e.env.NODE_DEBUG||""),r=r.toUpperCase(),!u[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=e.pid;u[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e);};}else u[r]=function(){};return u[r]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=b,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=h,t.isString=d,t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=v,t.isRegExp=m,t.isObject=O,t.isDate=w,t.isError=j,t.isFunction=P,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(3);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function V(){var e=new Date,t=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":");return [e.getDate(),S[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",V(),t.format.apply(t,arguments));},t.inherits=r(4),t._extend=function(e,t){if(!t||!O(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var K="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function z(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r;}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(K&&e[K]){var t;if("function"!=typeof(t=e[K]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,K,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise((function(e,n){t=e,r=n;})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,n){e?r(e):t(n);}));try{e.apply(this,i);}catch(e){r(e);}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),K&&Object.defineProperty(t,K,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=K,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,u=function(){return i.apply(o,arguments)};t.apply(this,r).then((function(t){e.nextTick(u,null,t);}),(function(t){e.nextTick(z,t,u);}));}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r};}).call(this,r(2));},function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o;}catch(e){r=o;}try{n="function"==typeof clearTimeout?clearTimeout:u;}catch(e){n=u;}}();var c,f=[],a=!1,p=-1;function s(){a&&c&&(a=!1,c.length?f=c.concat(f):p=-1,f.length&&y());}function y(){if(!a){var e=l(s);a=!0;for(var t=f.length;t;){for(c=f,f=[];++p<t;)c&&c[p].run();p=-1,t=f.length;}c=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e);}}function b(e,t){this.fun=e,this.array=t;}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new b(e,t)),1!==f.length||a||l(y);},b.prototype.run=function(){this.fun.apply(null,this.array);},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return []},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return "/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0};},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e;};}]);},function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},i=/%[sdj%]/g;t.format=function(e){if(!d(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(l(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,u=String(e).replace(i,(function(e){if("%%"===e)return "%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return "[Circular]"}default:return e}})),c=n[r];r<o;c=n[++r])g(c)||!O(c)?u+=" "+c:u+=" "+l(c);return u},t.deprecate=function(r,n){if(void 0!==e&&!0===e.noDeprecation)return r;if(void 0===e)return function(){return t.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),i=!0;}return r.apply(this,arguments)}};var o,u={};function l(e,r){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&t._extend(n,r),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),a(n,e,n.depth)}function c(e,t){var r=l.styles[t];return r?"["+l.colors[r][0]+"m"+e+"["+l.colors[r][1]+"m":e}function f(e,t){return e}function a(e,r,n){if(e.customInspect&&r&&P(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return d(i)||(i=a(e,i,n)),i}var o=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(d(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(h(t))return e.stylize(""+t,"number");if(b(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,r);if(o)return o;var u=Object.keys(r),l=function(e){var t={};return e.forEach((function(e,r){t[e]=!0;})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(r)),j(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return p(r);if(0===u.length){if(P(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(m(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return e.stylize(Date.prototype.toString.call(r),"date");if(j(r))return p(r)}var f,O="",A=!1,x=["{","}"];(y(r)&&(A=!0,x=["[","]"]),P(r))&&(O=" [Function"+(r.name?": "+r.name:"")+"]");return m(r)&&(O=" "+RegExp.prototype.toString.call(r)),w(r)&&(O=" "+Date.prototype.toUTCString.call(r)),j(r)&&(O=" "+p(r)),0!==u.length||A&&0!=r.length?n<0?m(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),f=A?function(e,t,r,n,i){for(var o=[],u=0,l=t.length;u<l;++u)T(t,String(u))?o.push(s(e,t,r,n,String(u),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(s(e,t,r,n,i,!0));})),o}(e,r,n,l,u):u.map((function(t){return s(e,r,n,l,t,A)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(f,O,x)):x[0]+O+x[1]}function p(e){return "["+Error.prototype.toString.call(e)+"]"}function s(e,t,r,n,i,o){var u,l,c;if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?l=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(l=e.stylize("[Setter]","special")),T(n,i)||(u="["+i+"]"),l||(e.seen.indexOf(c.value)<0?(l=g(r)?a(e,c.value,null):a(e,c.value,r-1)).indexOf("\n")>-1&&(l=o?l.split("\n").map((function(e){return "  "+e})).join("\n").substr(2):"\n"+l.split("\n").map((function(e){return "   "+e})).join("\n")):l=e.stylize("[Circular]","special")),v(u)){if(o&&i.match(/^\d+$/))return l;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"));}return u+": "+l}function y(e){return Array.isArray(e)}function b(e){return "boolean"==typeof e}function g(e){return null===e}function h(e){return "number"==typeof e}function d(e){return "string"==typeof e}function v(e){return void 0===e}function m(e){return O(e)&&"[object RegExp]"===A(e)}function O(e){return "object"==typeof e&&null!==e}function w(e){return O(e)&&"[object Date]"===A(e)}function j(e){return O(e)&&("[object Error]"===A(e)||e instanceof Error)}function P(e){return "function"==typeof e}function A(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(v(o)&&(o=e.env.NODE_DEBUG||""),r=r.toUpperCase(),!u[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=e.pid;u[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e);};}else u[r]=function(){};return u[r]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=b,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=h,t.isString=d,t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=v,t.isRegExp=m,t.isObject=O,t.isDate=w,t.isError=j,t.isFunction=P,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(4);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function V(){var e=new Date,t=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":");return [e.getDate(),S[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",V(),t.format.apply(t,arguments));},t.inherits=r(5),t._extend=function(e,t){if(!t||!O(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var K="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function z(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r;}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(K&&e[K]){var t;if("function"!=typeof(t=e[K]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,K,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise((function(e,n){t=e,r=n;})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,n){e?r(e):t(n);}));try{e.apply(this,i);}catch(e){r(e);}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),K&&Object.defineProperty(t,K,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=K,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,u=function(){return i.apply(o,arguments)};t.apply(this,r).then((function(t){e.nextTick(u,null,t);}),(function(t){e.nextTick(z,t,u);}));}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r};}).call(this,r(3));},function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o;}catch(e){r=o;}try{n="function"==typeof clearTimeout?clearTimeout:u;}catch(e){n=u;}}();var c,f=[],a=!1,p=-1;function s(){a&&c&&(a=!1,c.length?f=c.concat(f):p=-1,f.length&&y());}function y(){if(!a){var e=l(s);a=!0;for(var t=f.length;t;){for(c=f,f=[];++p<t;)c&&c[p].run();p=-1,t=f.length;}c=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e);}}function b(e,t){this.fun=e,this.array=t;}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new b(e,t)),1!==f.length||a||l(y);},b.prototype.run=function(){this.fun.apply(null,this.array);},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return []},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return "/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0};},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e;};}])}));
//# sourceMappingURL=tlist.js.map
});

const Tlist = tlist.Tlist;

/**
 * t2s
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var t = [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ]
 *     ////
 *     > t2s(t)
 *     'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7'
 *
 * @param {Array} t - tuple
 * @return {String} s - string
 */

function t2s(t) {
    return(t[0]+": "+t[1])
}

/**
 * s2t
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var s = 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7'
 *     ////
 *     > s2t(s)
 *     [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ]
 *
 * @param {Object} obj - object
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */


function s2t(s) {
    let regex = /(.*?): (.*)/g;
    let t = regex.exec(s);
    t = t.slice(1,3);
    return(t)
}


/**
 * tl2sl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var tl = [["k0","v0"],["k1","v1"],["k2","v2"]]
 *  
 *     ////
 *     > tl2sl(tl)
 *     [ 'k0: v0', 'k1: v1', 'k2: v2' ]
 *
 *
 * @param {Array} tl - tlist
 * @return {Array} sl - slist
 */

function tl2sl(tl) {
    return(Array.from(tl.map(t2s)))
}

/**
 * sl2tl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var sl = [ 'k0: v0', 'k1: v1', 'k2: v2' ]
 *     ////
 *     > sl2tl(sl)
 *     [ [ 'k0', 'v0' ], [ 'k1', 'v1' ], [ 'k2', 'v2' ] ]
 *
 * @param {Array} sl - slist
 * @return {Array} tl - tlist
 */


function sl2tl(sl) {
    return(sl.map(s2t))
}


/**
 * sl2s
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var sl = [ 'k0: v0', 'k1: v1', 'k2: v2' ]
 *     ////
 *     > sl2s(sl)
 *     'k0: v0\r\nk1: v1\r\nk2: v2'
 *
 * @param {Array} sl - slist
 * @return {String} s - string
 */


function sl2s(sl) {
    return(sl.join("\r\n"))
}


/**
 * s2sl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var s = 'k0: v0\r\nk1: v1\r\nk2: v2'
 *     ////
 *     > s2sl(s)
 *     [ 'k0: v0', 'k1: v1', 'k2: v2' ]
 *
 * @param {String} s - string
 * @return {Array} sl - slist
 */

function s2sl(s) {
    s = s.replace(/\r\n/g,"\u0000");
    s = s.replace(/\n/g,"\u0000");
    s = s.replace(/\r/g,"\u0000");
    return(s.split("\u0000"))
}

/**
 * isHeadEntryTuple
 *
 * <pre>
 *     [key,value]
 *     key is string
 *     vale is sttring
 *     key can NOT be empty 
 *     value cant be empty
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *     > isHeadEntryTuple(["k","v"])
 *     true
 *     > isHeadEntryTuple(["","v"])
 *     false
 *     > isHeadEntryTuple(["k",""])
 *     true
 *
 * @param {Object} obj - object
 * @return {Boolean} cond - true or false
 */


function isHeadEntryTuple(obj) {
    if(tlist.isTuple(obj)) {
        let cond0 = util__default['default'].isString(obj[0]);
        let cond1 = util__default['default'].isString(obj[1]);
        let cond2 = (obj[0].trim().length > 0);
        return(cond0 && cond1 && cond2)
    } else {
        return(false)
    }
}


/**
 * isHeadEntryStr
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *     > isHeadEntryStr("k:v")
 *     false
 *     > isHeadEntryStr("k: v")
 *     true
 *     > isHeadEntryStr(": v")
 *     false
 *     > isHeadEntryStr("k: ")
 *     true
 *     >
 *
 * @param {String} s - string
 * @return {Boolean} cond - true or false
 */


function isHeadEntryStr(s) {
    try {
        let t = s2t(s);
        return(t[0].trim().length>0)
    } catch (e) {
        return(false)
    }
}

/**
 * isSlist
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     
 *     ////
 *     > isSlist(["k0: v0","k1: v1","k2: v2"])
 *     true
 *     > isSlist(["k0:v0","k1: v1","k2: v2"])
 *     false
 *
 * @param {Object} obj - object
 * @return {Boolean} cond - true or false
 */

function isSlist(obj) {
    if(util__default['default'].isArray(obj)) {
        let lngth0 = obj.length;
        let lngth1 = obj.filter(isHeadEntryStr).length;
        return(lngth0 === lngth1)
    } else {
        return(false)
    }
}

/**
 * isHeadStr
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     > isHeadStr('k0: v0\r\nk1: v1\r\nk2: v2')
 *     true
 *     ////
 *
 * @param {Object} obj - object
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function isHeadStr(s) {
    if(util__default['default'].isString(s)) {
        let sl = s2sl(s);
        return(isSlist(sl))
    } else {
        return(false)
    }
}


function constructor_(obj) {
    if(util__default['default'].isString(obj)) {
        obj = sl2tl(s2sl(obj));
    } else if(isSlist(obj)) {
        obj = sl2tl(obj);
    } else {
        obj = obj;
    }
    return(obj)
}


/**
 * Head
 *
 */



class Head extends Tlist {
    /**
     * constructor
     * 
     * <pre>
     *     Do NOT use new Head()!!!!
     *     because  Head-extends-Tlist, Tlist-extends-Array
     *     and constructor-in-Head is overwrited
     *     some method-of-Array will retrigger rewrited-constructor-function,such as splice
     *         concat,map...
     *     so use Head.getInstance() to get a new instance, it has a label _firstInit to 
     *         indicate  if this is the first-init, the-rewrited-constructor-function  will be trigged
     *         if NOT the first-init, the default-constructor-function  will be trigged
     * </pre>
     *
     * @example
     * term
     *
     *      //prototype
     *     var hd = Head.getInstance()
     *     hd
     *     var hd = Head.getInstance("k0: v0\r\nk1: v1")
     *     hd
     *     var hd = Head.getInstance(["k0: v0","k1: v1"])
     *     hd
     *     var hd = Head.getInstance("k0","v0","k1","v1")
     *     hd
     *     
     *     ////
     *    > var hd = Head.getInstance()
     *    undefined
     *    > hd
     *    Head []
     *    > var hd = Head.getInstance("k0: v0\r\nk1: v1")
     *    undefined
     *    > hd
     *    Head [ [ 'k0', 'v0' ], [ 'k1', 'v1' ] ]
     *    > var hd = Head.getInstance(["k0: v0","k1: v1"])
     *    undefined
     *    > hd
     *    Head [ [ 'k0', 'v0' ], [ 'k1', 'v1' ] ]
     *    > var hd = Head.getInstance("k0","v0","k1","v1")
     *    undefined
     *    > hd
     *    Head [ [ 'k0', 'v0' ], [ 'k1', 'v1' ] ]
     *    >
     *
     *     //function
     *
     *     ////
     *
     * @param {Object} obj - object
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    static getInstance(...items) {
        //this here  pointed to Head,  not any instance
        this._firstInit = true;
        let rslt = new this(...items);
        this._firstInit = false;
        return(rslt)
    }
    constructor(...items) {
        if(Head._firstInit){
            if(items.length === 0) {
                items = items || [];
            } else if(items.length === 1) {
                let item = items[0];
                items = constructor_(item);
            } else ;
        }
        super(...items);
    }
    /**
     * append
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     var hd = Head.getInstance()
     *     hd = hd.append("Accept-Encoding","deflate, gzip;q=1.0, *;q=0.5")
     *     ////
     *     Head [ [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ] ]
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @param {String} v - value
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    append(k,v) {
        let rslt = super.append(k,v);
        return(rslt)
    }
    /**
     * prepend
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd = hd.prepend("Accept","text/html")
     *     ////
     *     > hd
     *     Head [ [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ] ]
     *     > hd = hd.prepend("Accept","text/html")
     *     Head [
     *       [ 'Accept', 'text/html' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ] ]
     *     >
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @param {String} v - value
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    prepend(k,v) {
        let rslt = super.prepend(k,v);
        return(rslt)
    }
    /**
     * insert
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd = hd.insert("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7",1)
     *     ////
     *     
     *
     *     //function
     *     > hd
     *     Head [
     *       [ 'Accept', 'text/html' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ] ]
     *     > hd = hd.insert("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7",1)
     *     Head [
     *       [ 'Accept', 'text/html' ],
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ] ]
     *     >
     *     ////
     *
     * @param {String} k - key
     * @param {String} v - value
     * @param {Number} which - relative index
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    insert(k,v,which) {
        let rslt = super.insert(k,v,which);
        return(rslt)
    }
    /**
     * first
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd = hd.append("Accept","application/xml;q=0.9")
     *     hd = hd.append("Accept","text/html;q=0.8")
     *     hd
     *     hd.first("Accept")
     *
     *     ////
     *     > hd
     *     Head [
     *       [ 'Accept', 'text/html' ],
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'application/xml;q=0.9' ],
     *       [ 'Accept', 'text/html;q=0.8' ] ]
     *     > hd.first("Accept")
     *     [ 'Accept', 'text/html' ]
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @return {String} v - value
     */
    first(k) {
        return(super.getFirstK(k))
    }
    /**
     * last
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd.last("Accept")
     *
     *     ////
     *     > hd
     *     Head [
     *       [ 'Accept', 'text/html' ],
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'application/xml;q=0.9' ],
     *       [ 'Accept', 'text/html;q=0.8' ] ]
     *     > hd.last("Accept")
     *     [ 'Accept', 'text/html;q=0.8' ]
     *     >
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @return {Array} t - tuple
     * 
     */
    last(k) {
        return(super.getLastK(k))
    }
    /**
     * which
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd.which("Accept",1)
     *     ////
     *
     *     //function
     *     > hd
     *     Head [
     *       [ 'Accept', 'text/html' ],
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'application/xml;q=0.9' ],
     *       [ 'Accept', 'text/html;q=0.8' ] ]
     *     > hd.which("Accept",1)
     *     [ 'Accept', 'application/xml;q=0.9' ]
     *     >
     *     ////
     *
     * @param {String} k - key
     * @param {Number} which - relative index
     * @return {Array} t - tuple
     * 
     */
    which(k,which) {
        return(super.getK(k,which))
    }
    /**
     * all
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd.all("Accept")
     *     ////
     *
     *     //function
     *     > hd
     *     Head [
     *       [ 'Accept', 'text/html' ],
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'application/xml;q=0.9' ],
     *       [ 'Accept', 'text/html;q=0.8' ] ]
     *     > hd.all("Accept")
     *     [ [ 'Accept', 'text/html' ],
     *       [ 'Accept', 'application/xml;q=0.9' ],
     *       [ 'Accept', 'text/html;q=0.8' ] ]
     *     >
     *     ////
     *
     * @param {String} k - key
     * @return {Array} tl - tlist
     */
    all(k) {
        return(super.getAllK(k))
    }
    /**
     * setfirst
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd.first("Accept")
     *     hd = hd.setfirst("Accept","application/xml")
     *     hd.first("Accept")
     *     ////
     *     > hd.first("Accept")
     *     [ 'Accept', 'application/xml' ]
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @param {String} v - value
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    setfirst(k,v) {
        let rslt = super.setFirst(k,v);
        return(rslt)
    }
    /**
     * setlast
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd.last("Accept")
     *     hd = hd.setlast("Accept","application/xml")
     *     hd.last("Accept")
     *     ////
     *     [ 'Accept', 'application/xml' ]
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @param {String} v - value
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    setlast(k,v) {
        let rslt = super.setLast(k,v);
        return(rslt)
    }
    /**
     * setwhich
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd.which("Accept",1)
     *     hd = hd.setwhich("Accept","text/plain",1)
     *     hd.which("Accept",1)
     *     ////
     *     > hd.which("Accept",1)
     *     [ 'Accept', 'application/xml;q=0.9' ]
     *     > hd = hd.setwhich("Accept","text/plain",1)
     *     Head [
     *       [ 'Accept', 'application/xml' ],
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'text/plain' ],
     *       [ 'Accept', 'application/xml' ] ]
     *     > hd.which("Accept",1)
     *     [ 'Accept', 'text/plain' ]
     *     >
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @param {String} v - value
     * @param {Number} which - relative index
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    setwhich(k,v,which) {
        let rslt = super.set(k,v,which);
        return(rslt)
    }
    /**
     * setall
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd.all("Accept")
     *     hd = hd.setall("Accept","text/plain")
     *     hd.all("Accept")
     *     ////
     *     > hd.all("Accept")
     *     [ [ 'Accept', 'text/plain' ],
     *       [ 'Accept', 'text/plain' ],
     *       [ 'Accept', 'text/plain' ] ]
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @param {String} v - value
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    setall(k,v) {
        let rslt = super.setAll(k,v);
        return(rslt)
    }
    /**
     * rmfirst
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd = hd.rmfirst("Accept")
     *     hd
     *     ////
     *     > hd
     *     Head [
     *       [ 'Accept', 'text/plain' ],
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'text/plain' ],
     *       [ 'Accept', 'text/plain' ] ]
     *     > hd = hd.rmfirst("Accept")
     *     Head [
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'text/plain' ],
     *       [ 'Accept', 'text/plain' ] ]
     *     > hd
     *     Head [
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', 'text/plain' ],
     *       [ 'Accept', 'text/plain' ] ]
     *     >
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    rmfirst(k) {
        let rslt = super.rmFirstK(k);
        return(rslt)
    }
    /**
     * rmlast
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd = hd.rmlast("Accept")
     *     hd
     *     ////
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    rmlast(k) {
        let rslt = super.rmLastK(k);
        return(rslt)
    }
    /**
     * rmwhich
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd = hd.rmwhich("Accept",1)
     *     hd
     *     ////
     *
     *     //function
     *
     *     ////
     *
     * @param {Object} obj - object
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    rmwhich(k,which) {
        let rslt = super.rmK(k,which);
        return(rslt)
    }
    /**
     * rmall
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd
     *     hd = hd.rmall("Accept")
     *     hd
     *     ////
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    rmall(k) {
        let rslt = super.rmAllK(k);
        return(rslt)
    }
    /**
     * rmforce
     *
     * <pre>
     *     this is for libcurl forcefully-delete
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd = hd.rmforce('Accept')
     *     hd.all("Accept")
     *     ////
     *     > hd = hd.rmforce('Accept')
     *     Head [
     *       [ 'Accept-Language', 'zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7' ],
     *       [ 'Accept-Encoding', 'deflate, gzip;q=1.0, *;q=0.5' ],
     *       [ 'Accept', '' ] ]
     *     > hd.all("Accept")
     *     [ [ 'Accept', '' ] ]
     *     >
     *
     *     //function
     *
     *     ////
     *
     * @param {String} k - key
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    rmforce(k) {
        let rslt = super.rmAllK(k);
        rslt.push([k,""]);
        return(rslt)
    }
    /**
     * slist
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd.slist()
     *     ////
     *     > hd.slist()
     *     [ 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7',
     *       'Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5',
     *       'Accept: ' ]
     *     >
     *     //function
     *
     *     ////
     *
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    slist() {
        return(tl2sl(this))
    }
    /**
     * hdstr
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     hd.hdstr()
     *     ////
     *     > hd.slist()
     *     'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7\r\nAccept-Encoding: deflate, gzip;q=1.0, *;q=0.5\r\nAccept: '
     *
     *     //function
     *    
     *     ////
     *
     * @return {Array} tl - [t0,t1,...tk...,tn]
     */
    hdstr() {
        return(sl2s(tl2sl(this)))
    }
}


var nvhead = {
    t2s,
    s2t,
    tl2sl,
    sl2tl,
    sl2s,
    s2sl,
    isHeadEntryTuple,
    isSlist,
    isHeadStr,
    Head
};

var REQHD_DTB = [
	{
		k: "via",
		v: "Via",
		type: [
			"general"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Via: [ <protocol-name> \"/\" ] <protocol-version> <host> [ \":\" <port> ]",
			"or",
			"Via: [ <protocol-name> \"/\" ] <protocol-version> <pseudonym>"
		],
		directives: [
		],
		examples: [
			"Via: 1.1 vegur\nVia: HTTP/1.1 GWA\nVia: 1.0 fred, 1.1 p.example.net\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7230#section-5.7.1"
		]
	},
	{
		k: "cookie",
		v: "Cookie",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Cookie: <cookie-list>",
			"Cookie: name=value",
			"Cookie: name=value; name2=value2; name3=value3"
		],
		directives: [
		],
		examples: [
			"Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;"
		],
		specs: [
			"https://tools.ietf.org/html/rfc6265#section-5.4"
		]
	},
	{
		k: "connection",
		v: "Connection",
		type: [
			"general"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Connection: keep-alive",
			"Connection: close"
		],
		directives: [
			"close",
			"keep-alive"
		],
		examples: [
		],
		specs: [
		]
	},
	{
		k: "pragma",
		v: "Pragma",
		type: [
			"general"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: true,
		syntax: [
			"Pragma: no-cache"
		],
		directives: [
		],
		examples: [
			"Pragma: no-cache"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7234#section-5.4"
		]
	},
	{
		k: "contentLength",
		v: "Content-Length",
		type: [
			"entity"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Content-Length: <length>"
		],
		directives: [
		],
		examples: [
		],
		specs: [
			"https://tools.ietf.org/html/rfc7230#section-3.3.2"
		]
	},
	{
		k: "xForwardedProto",
		v: "X-Forwarded-Proto",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"X-Forwarded-Proto: <protocol>"
		],
		directives: [
		],
		examples: [
			"X-Forwarded-Proto: https",
			"# Microsoft\nFront-End-Https: on\n\nX-Forwarded-Protocol: https \nX-Forwarded-Ssl: on \nX-Url-Scheme: https\n"
		],
		specs: [
		]
	},
	{
		k: "acceptEncoding",
		v: "Accept-Encoding",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Accept-Encoding: gzip",
			"Accept-Encoding: compress",
			"Accept-Encoding: deflate",
			"Accept-Encoding: br",
			"Accept-Encoding: identity",
			"Accept-Encoding: *",
			"Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5"
		],
		directives: [
			"gzip",
			"compress",
			"deflate",
			"br",
			"identity",
			"*",
			";q="
		],
		examples: [
			"Accept-Encoding: gzip\n\nAccept-Encoding: gzip, compress, br\n\nAccept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.3.4"
		]
	},
	{
		k: "earlyData",
		v: "Early-Data",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Early-Data: 1"
		],
		directives: [
		],
		examples: [
			"GET /resource HTTP/1.0\nHost: example.com\nEarly-Data: 1"
		],
		specs: [
			"https://tools.ietf.org/html/rfc8470#section-5.1"
		]
	},
	{
		k: "range",
		v: "Range",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Range: <unit>=<range-start>-",
			"Range: <unit>=<range-start>-<range-end>",
			"Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>",
			"Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>",
			"Range: <unit>=-<suffix-length>"
		],
		directives: [
		],
		examples: [
			"Range: bytes=200-1000, 2000-6576, 19000- \n",
			"Range: bytes=0-499, -500 \n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7233#section-3.1"
		]
	},
	{
		k: "index",
		v: "Index",
		type: null,
		modifyForbidden: null,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
		],
		directives: [
		],
		examples: [
		],
		specs: [
		]
	},
	{
		k: "dnt",
		v: "DNT",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"DNT: 0",
			"DNT: 1"
		],
		directives: [
		],
		examples: [
			"navigator.doNotTrack; // \"0\" or \"1\""
		],
		specs: [
			"https://w3c.github.io/dnt/drafts/tracking-dnt.html#dnt-header-field"
		]
	},
	{
		k: "accessControlRequestHeaders",
		v: "Access-Control-Request-Headers",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Access-Control-Request-Headers: <header-name>, <header-name>, ..."
		],
		directives: [
		],
		examples: [
			"Access-Control-Request-Headers: X-PINGOTHER, Content-Type"
		],
		specs: [
			"https://fetch.spec.whatwg.org/#http-access-control-request-headers"
		]
	},
	{
		k: "cacheControl",
		v: "Cache-Control",
		type: [
			"general"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: true,
		syntax: [
			"The directives are case-insensitive and have an optional argument, that can use both token and quoted-string syntax. Multiple directives are comma-separated."
		],
		directives: [
		],
		examples: [
			"Cache-Control: no-store\n",
			"Cache-Control: public, max-age=31536000"
		],
		specs: [
			"https://tools.ietf.org/html/rfc8246",
			"https://tools.ietf.org/html/rfc7234",
			"https://tools.ietf.org/html/rfc5861"
		]
	},
	{
		k: "ifRange",
		v: "If-Range",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT",
			"If-Range: <etag>"
		],
		directives: [
		],
		examples: [
			"If-Range: Wed, 21 Oct 2015 07:28:00 GMT \n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7233#section-3.2"
		]
	},
	{
		k: "keepAlive",
		v: "Keep-Alive",
		type: [
			"general"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Keep-Alive: parameters"
		],
		directives: [
		],
		examples: [
			"HTTP/1.1 200 OK\nConnection: Keep-Alive\nContent-Encoding: gzip\nContent-Type: text/html; charset=utf-8\nDate: Thu, 11 Aug 2016 15:23:13 GMT\nKeep-Alive: timeout=5, max=1000\nLast-Modified: Mon, 25 Jul 2016 04:32:39 GMT\nServer: Apache\n\n(body)"
		],
		specs: [
			"https://tools.ietf.org/id/draft-thomson-hybi-http-timeout-01.html#rfc.section.2",
			"https://tools.ietf.org/html/rfc7230#appendix-A.1.2"
		]
	},
	{
		k: "ifModifiedSince",
		v: "If-Modified-Since",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT"
		],
		directives: [
			"GMT"
		],
		examples: [
			"If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT \n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7232#section-3.3"
		]
	},
	{
		k: "altSvc",
		v: "Alt-Svc",
		type: null,
		modifyForbidden: null,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Alt-Svc: clear",
			"Alt-Svc: <service-list>; ma=<max-age>",
			"Alt-Svc: <service-list>; ma=<max-age>; persist=1"
		],
		directives: [
		],
		examples: [
		],
		specs: [
			"https://tools.ietf.org/html/rfc7838"
		]
	},
	{
		k: "contentEncoding",
		v: "Content-Encoding",
		type: [
			"entity"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Content-Encoding: gzip",
			"Content-Encoding: compress",
			"Content-Encoding: deflate",
			"Content-Encoding: identity",
			"Content-Encoding: br",
			"Content-Encoding: gzip, identity",
			"Content-Encoding: deflate, gzip"
		],
		directives: [
			"gzip",
			"compress",
			"deflate",
			"identity",
			"br"
		],
		examples: [
			"Accept-Encoding: gzip, deflate",
			"Content-Encoding: gzip"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-3.1.2.2",
			"https://tools.ietf.org/html/rfc7932"
		]
	},
	{
		k: "origin",
		v: "Origin",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Origin: null",
			"Origin: <scheme> \"://\" <hostname> [ \":\" <port> ]"
		],
		directives: [
		],
		examples: [
			"Origin: https://developer.mozilla.org"
		],
		specs: [
			"https://tools.ietf.org/html/rfc6454#section-7",
			"https://fetch.spec.whatwg.org/#origin-header"
		]
	},
	{
		k: "host",
		v: "Host",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Host: <host>:<port>"
		],
		directives: [
		],
		examples: [
			"Host: developer.cdn.mozilla.net"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7230#section-5.4"
		]
	},
	{
		k: "wantDigest",
		v: "Want-Digest",
		type: [
			"general"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Want-Digest: <digest-algorithm>",
			"Want-Digest: <digest-algorithm><q-value>,<digest-algorithm><q-value>"
		],
		directives: [
			"<digest-algorithm>",
			"<q-value>"
		],
		examples: [
			"Want-Digest: sha-256\nWant-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0",
			"Request:\n\n  GET /item\n  Want-Digest: sha-256;q=0.3, sha;q=1\n\nResponse:\n\n  HTTP/1.1 200 Ok\n  Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=",
			"Request:\n\n  GET /item\n  Want-Digest: sha;q=1\n\nResponse:\n\n  HTTP/1.1 200 Ok\n  Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=",
			"Request:\n\n  GET /item\n  Want-Digest: sha;q=1\n\nResponse:\n\n  HTTP/1.1 400 Bad Request\n  Want-Digest: sha-256, sha-512"
		],
		specs: [
		]
	},
	{
		k: "acceptCharset",
		v: "Accept-Charset",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Accept-Charset: <charset>",
			"Accept-Charset: utf-8, iso-8859-1;q=0.5"
		],
		directives: [
			"<charset>",
			"*",
			";q=<weight>"
		],
		examples: [
			"Accept-Charset: iso-8859-1\n\nAccept-Charset: utf-8, iso-8859-1;q=0.5\n\nAccept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.3.3"
		]
	},
	{
		k: "ifNoneMatch",
		v: "If-None-Match",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"If-None-Match: \"<etag_value>\"",
			"If-None-Match: \"<etag_value>\", \"<etag_value>\", …",
			"If-None-Match: *"
		],
		directives: [
			"*"
		],
		examples: [
			"If-None-Match: \"bfc13a64729c4290ef5b2c2730249c88ca92d82d\"\n\nIf-None-Match: W/\"67ab43\", \"54ed21\", \"7892dd\"\n\nIf-None-Match: *\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7232#section-3.2"
		]
	},
	{
		k: "referer",
		v: "Referer",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Referer: <url>"
		],
		directives: [
		],
		examples: [
			"Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.5.2"
		]
	},
	{
		k: "accessControlRequestMethod",
		v: "Access-Control-Request-Method",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Access-Control-Request-Method: <method>"
		],
		directives: [
		],
		examples: [
			"Access-Control-Request-Method: POST"
		],
		specs: [
			"https://fetch.spec.whatwg.org/#http-access-control-request-method"
		]
	},
	{
		k: "accept",
		v: "Accept",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: true,
		corsSafeRes: null,
		syntax: [
			"Accept: <MIME_type>/<MIME_subtype>",
			"Accept: <MIME_type>/*",
			"Accept: */*",
			"Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8"
		],
		directives: [
			"<MIME_type>/<MIME_subtype>",
			"<MIME_type>/*",
			"*/*",
			";q="
		],
		examples: [
			"Accept: text/html\n\nAccept: image/*\n\n// General default\nAccept: */*\n\n// Default for navigation requests\nAccept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.3.2"
		]
	},
	{
		k: "xForwardedFor",
		v: "X-Forwarded-For",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"X-Forwarded-For: <client>, <proxy1>, <proxy2>"
		],
		directives: [
		],
		examples: [
			"X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348\n\nX-Forwarded-For: 203.0.113.195\n\nX-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178\n",
			"# Used for some Google services\nX-ProxyUser-Ip: 203.0.113.19"
		],
		specs: [
		]
	},
	{
		k: "upgradeInsecureRequests",
		v: "Upgrade-Insecure-Requests",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Upgrade-Insecure-Requests: 1"
		],
		directives: [
		],
		examples: [
			"GET / HTTP/1.1 \nHost: example.com \nUpgrade-Insecure-Requests: 1",
			"Location: https://example.com/ \nVary: Upgrade-Insecure-Requests"
		],
		specs: [
			"https://w3c.github.io/webappsec-upgrade-insecure-requests/#preference"
		]
	},
	{
		k: "xForwardedHost",
		v: "X-Forwarded-Host",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"X-Forwarded-Host: <host>"
		],
		directives: [
		],
		examples: [
			"X-Forwarded-Host: id42.example-cdn.com\n"
		],
		specs: [
		]
	},
	{
		k: "allow",
		v: "Allow",
		type: [
			"entity"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Allow: <http-methods>"
		],
		directives: [
		],
		examples: [
			"Allow: GET, POST, HEAD"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-7.4.1"
		]
	},
	{
		k: "cookie2",
		v: "Cookie2",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
		],
		directives: [
		],
		examples: [
			"Cookie2: $Version=\"1\""
		],
		specs: [
			"https://tools.ietf.org/html/rfc2965",
			"https://tools.ietf.org/html/rfc6265"
		]
	},
	{
		k: "date",
		v: "Date",
		type: [
			"general"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT"
		],
		directives: [
		],
		examples: [
			"Date: Wed, 21 Oct 2015 07:28:00 GMT \n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-7.1.1.2"
		]
	},
	{
		k: "te",
		v: "TE",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"TE: compress",
			"TE: deflate",
			"TE: gzip",
			"TE: trailers",
			"TE: trailers, deflate;q=0.5"
		],
		directives: [
			"compress",
			"deflate",
			"gzip",
			"trailers",
			"q"
		],
		examples: [
		],
		specs: [
			"https://tools.ietf.org/html/rfc7230#section-4.3"
		]
	},
	{
		k: "warning",
		v: "Warning",
		type: [
			"general"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]"
		],
		directives: [
		],
		examples: [
			"Warning: 110 anderson/1.3.37 \"Response is stale\"\n\nDate: Wed, 21 Oct 2015 07:28:00 GMT \nWarning: 112 - \"cache down\" \"Wed, 21 Oct 2015 07:28:00 GMT\"\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7234#section-5.5"
		]
	},
	{
		k: "ifMatch",
		v: "If-Match",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"If-Match: <etag_value>",
			"If-Match: <etag_value>, <etag_value>, …"
		],
		directives: [
			"*"
		],
		examples: [
			"If-Match: \"bfc13a64729c4290ef5b2c2730249c88ca92d82d\"\n\nIf-Match: \"67ab43\", \"54ed21\", \"7892dd\"\n\nIf-Match: *\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7232#section-3.1"
		]
	},
	{
		k: "acceptLanguage",
		v: "Accept-Language",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: true,
		corsSafeRes: null,
		syntax: [
			"Accept-Language: <language>",
			"Accept-Language: *",
			"Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5"
		],
		directives: [
			"<language>",
			"*",
			";q="
		],
		examples: [
			"Accept-Language: de\n\nAccept-Language: de-CH\n\nAccept-Language: en-US,en;q=0.5\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.3.5",
			"https://tools.ietf.org/html/bcp47"
		]
	},
	{
		k: "forwarded",
		v: "Forwarded",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>"
		],
		directives: [
		],
		examples: [
			"Forwarded: for=\"_mdn\" \n\n# case insensitive\nForwarded: For=\"[2001:db8:cafe::17]:4711\"\n\n# separated by semicolon\nForwarded: for=192.0.2.60;proto=http;by=203.0.113.43\n\n# multiple values can be appended using a comma\nForwarded: for=192.0.2.43, for=198.51.100.17\n",
			"X-Forwarded-For: 123.34.567.89\nForwarded: for=123.34.567.89\n\nX-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17\nForwarded: for=192.0.2.43, for=\"[2001:db8:cafe::17]\"\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7239#section-4"
		]
	},
	{
		k: "expect",
		v: "Expect",
		type: [
			"req"
		],
		modifyForbidden: true,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"No other expectations except \"100-continue\" are specified currently."
		],
		directives: [
		],
		examples: [
			"PUT /somewhere/fun HTTP/1.1\nHost: origin.example.com\nContent-Type: video/h264\nContent-Length: 1234567890987\nExpect: 100-continue\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.1.1"
		]
	},
	{
		k: "userAgent",
		v: "User-Agent",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"User-Agent: <product> / <product-version> <comment>"
		],
		directives: [
		],
		examples: [
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.5.3",
			"https://tools.ietf.org/html/rfc2616#section-14.43"
		]
	},
	{
		k: "proxyAuthorization",
		v: "Proxy-Authorization",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Proxy-Authorization: <type> <credentials>"
		],
		directives: [
		],
		examples: [
			"Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7235#section-4.4",
			"https://tools.ietf.org/html/rfc7617"
		]
	},
	{
		k: "contentLanguage",
		v: "Content-Language",
		type: [
			"entity"
		],
		modifyForbidden: false,
		corsSafeReq: true,
		corsSafeRes: true,
		syntax: [
			"Content-Language: de-DE",
			"Content-Language: en-US",
			"Content-Language: de-DE, en-CA"
		],
		directives: [
			"language-tag"
		],
		examples: [
			"<html lang=\"de\">",
			"<!-- /!\\ This is bad practice -->\n<meta http-equiv=\"content-language\" content=\"de\">",
			"Content-Language: de, en"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-3.1.3.2"
		]
	},
	{
		k: "authorization",
		v: "Authorization",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Authorization: <type> <credentials>"
		],
		directives: [
		],
		examples: [
			"Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7235#section-4.2",
			"https://tools.ietf.org/html/rfc7617"
		]
	},
	{
		k: "link",
		v: "Link",
		type: null,
		modifyForbidden: null,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Link: < uri-reference >; param1=value1; param2=\"value2\""
		],
		directives: [
		],
		examples: [
		],
		specs: [
			"https://tools.ietf.org/html/rfc8288#section-3",
			"https://tools.ietf.org/html/rfc5988#section-5"
		]
	},
	{
		k: "from",
		v: "From",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"From: <email>"
		],
		directives: [
		],
		examples: [
			"From: webmaster@example.org"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-5.5.1"
		]
	},
	{
		k: "saveData",
		v: "Save-Data",
		type: null,
		modifyForbidden: null,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Save-Data: <sd-token>"
		],
		directives: [
			"sd-token"
		],
		examples: [
			"GET /image.jpg HTTP/1.0\nHost: example.com\nSave-Data: on",
			"HTTP/1.0 200 OK\nContent-Length: 102832\nVary: Accept-Encoding, Save-Data\nCache-Control: public, max-age=31536000\nContent-Type: image/jpeg\n\n[...]\n",
			"GET /image.jpg HTTP/1.0\nHost: example.com\n",
			"HTTP/1.0 200 OK\nContent-Length: 481770\nVary: Accept-Encoding, Save-Data\nCache-Control: public, max-age=31536000\nContent-Type: image/jpeg\n\n[...]\n"
		],
		specs: [
			"https://tools.ietf.org/html/draft-grigorik-http-client-hints-03#section-7"
		]
	},
	{
		k: "contentType",
		v: "Content-Type",
		type: [
			"entity"
		],
		modifyForbidden: false,
		corsSafeReq: true,
		corsSafeRes: true,
		syntax: [
			"Content-Type: text/html; charset=utf-8",
			"Content-Type: multipart/form-data; boundary=something"
		],
		directives: [
			"media-type"
		],
		examples: [
			"<form action=\"/\" method=\"post\" enctype=\"multipart/form-data\">\n  <input type=\"text\" name=\"description\" value=\"some text\">\n  <input type=\"file\" name=\"myFile\">\n  <button type=\"submit\">Submit</button>\n</form>\n",
			"POST /foo HTTP/1.1\nContent-Length: 68137\nContent-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575\n\n-----------------------------974767299852498929531610575\nContent-Disposition: form-data; name=\"description\" \n\nsome text\n-----------------------------974767299852498929531610575\nContent-Disposition: form-data; name=\"myFile\"; filename=\"foo.txt\" \nContent-Type: text/plain \n\n(content of the uploaded file foo.txt)\n-----------------------------974767299852498929531610575--\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7233#section-4.1",
			"https://tools.ietf.org/html/rfc7231#section-3.1.1.5"
		]
	},
	{
		k: "contentLocation",
		v: "Content-Location",
		type: [
			"entity"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"Content-Location: <url>"
		],
		directives: [
		],
		examples: [
			"PUT /new/post\nHost: example.com\nContent-Type: text/markdown\n\n# My first blog post!\n\nI made this through `example.com`'s API. I hope it worked.\n",
			"HTTP/1.1 201 Created\nContent-Type: text/plain; charset=utf-8\nContent-Location: /my-first-blog-post\n\n✅ Success!\n",
			"<form action=\"/send-payment\" method=\"post\">\n  <p>\n    <label>Who do you want to send the money to?\n      <input type=\"text\" name=\"recipient\">\n    </label>\n  </p>\n\n  <p>\n    <label>How much?\n      <input type=\"number\" name=\"amount\">\n    </label>\n  </p>\n\n  <button type=\"submit\">Send Money</button>\n</form>\n",
			"HTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nContent-Location: /my-receipts/38\n\n<!doctype html>\n(Lots of HTML…)\n\n<p>You sent $38.00 to ExampleUser.</p>\n\n(Lots more HTML…)\n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7231#section-3.1.4.2"
		]
	},
	{
		k: "ifUnmodifiedSince",
		v: "If-Unmodified-Since",
		type: [
			"req"
		],
		modifyForbidden: false,
		corsSafeReq: null,
		corsSafeRes: null,
		syntax: [
			"If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT"
		],
		directives: [
			"GMT"
		],
		examples: [
			"If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT \n"
		],
		specs: [
			"https://tools.ietf.org/html/rfc7232#section-3.4"
		]
	}
];

REQHD_DTB.map((r)=>r.k);
REQHD_DTB.map((r)=>r.v);

var reqhd = {

};

var reshd$1 = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var reshd = /*@__PURE__*/getAugmentedNamespace(reshd$1);

var NV5_NVHEADJS = {
    nvhd: nvhead,
    reqhd,
    reshd,
};

module.exports = NV5_NVHEADJS;
