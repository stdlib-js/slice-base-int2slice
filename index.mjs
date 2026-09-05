// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.2.3-esm/index.mjs";function t(t,n,s){return t>=n?s?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new e(n,n,1):t<0&&(t=n+t)<0?s?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new e(0,0,1):new e(t,t+1,1)}export{t as default};
//# sourceMappingURL=index.mjs.map
