"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(q,s){
function O(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}s.exports=O
});var c=i(function(S,o){
var n=require('@stdlib/slice-ctor/dist'),f=u();function w(r,e,t){return r>=e?t?f():new n(e,e,1):r<0?(r=e+r,r<0?t?f():new n(0,0,1):new n(r,r+1,1)):new n(r,r+1,1)}o.exports=w
});var _=c();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
