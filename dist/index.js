"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}}};var u=i(function(q,s){"use strict";function O(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}s.exports=O});var c=i(function(S,o){"use strict";var t=require("@stdlib/slice-ctor"),f=u();function w(r,e,n){return r>=e?n?f():new t(e,e,1):r<0?(r=e+r,r<0?n?f():new t(0,0,1):new t(r,r+1,1)):new t(r,r+1,1)}o.exports=w});var _=c();module.exports=_;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
