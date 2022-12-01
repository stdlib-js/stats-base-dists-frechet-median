// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}function e(r){return t(r/2)}function o(r){return e(r>0?r-1:r+1)}var i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;function a(r){return r===i||r===u}var f=Math.sqrt;function c(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty,v=Object.prototype,p=v.toString,b=v.__defineGetter__,s=v.__defineSetter__,w=v.__lookupGetter__,A=v.__lookupSetter__;var _=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?y:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===p.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===p.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(w.call(r,n)||A.call(r,n)?(e=r.__proto__,r.__proto__=v,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&b&&b.call(r,n,t.get),u&&s&&s.call(r,n,t.set),r};function m(r,n,t){_(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var U=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return U.call(r);t=r[h],i=h,n=null!=(o=r)&&g.call(o,i);try{r[h]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[h]=t:delete r[h],e}:function(r){return U.call(r)},I="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var O,S="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var T,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null;var W,M="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var k=W,x="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var q,C="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new P(1),X=new E(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}m(nr,"assign",rr);var tr=!0===K?0:1,er=new P(1),or=new E(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var ar,fr,cr=!0===K?1:0,lr=new P(1),yr=new E(lr.buffer);function vr(r){return lr[0]=r,yr[cr]}!0===K?(ar=1,fr=0):(ar=0,fr=1);var pr={HIGH:ar,LOW:fr},br=new P(1),sr=new E(br.buffer),wr=pr.HIGH,Ar=pr.LOW;function _r(r,n){return sr[wr]=r,sr[Ar]=n,br[0]}var mr=[0,0];function dr(r,n){var t,e;return nr.assign(r,mr,1,0),t=mr[0],t&=2147483647,e=vr(n),_r(t|=e&=2147483648,mr[1])}var Ur=!0===K?1:0,gr=new P(1),hr=new E(gr.buffer);function jr(r,n){return gr[0]=r,hr[Ur]=n>>>0,gr[0]}var Ir=[1,1.5],Nr=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Sr(n,t,e,o){return r(n)||a(n)?(t[o]=n,t[o+e]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}m((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Fr=[0,0];function Hr(n,t){var e,o;return 0===t||0===n||r(n)||a(n)?n:(Sr(n,Er,1,0),t+=Er[1],t+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-1023|0}(n=Er[0]),t<-1074?dr(0,n):t>1023?n<0?u:i:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,nr.assign(n,Fr,1,0),e=Fr[0],e&=2148532223,o*_r(e|=t+1023<<20,Fr[1])))}var Tr=.6931471805599453;var Gr=1e300,Pr=1e-300,Lr=[0,0],Vr=[0,0];function Wr(n,e){var l,y,v,p,b,s,w,A,_,m,d,U,g,h;if(r(n)||r(e))return NaN;if(nr.assign(e,Lr,1,0),b=Lr[0],0===Lr[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return f(n);if(-.5===e)return 1/f(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(a(e))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(n===i)?0:i}(n,e)}if(nr.assign(n,Lr,1,0),p=Lr[0],0===Lr[1]){if(0===p)return function(r,n){return n===u?i:n===i?0:n>0?o(n)?r:0:o(n)?dr(i,r):i}(n,e);if(1===n)return 1;if(-1===n&&o(e))return-1;if(a(n))return n===u?Wr(-0,-e):e<0?0:i}if(n<0&&!1===t(e))return(n-n)/(n-n);if(v=c(n),l=2147483647&p|0,y=2147483647&b|0,w=b>>>31|0,s=(s=p>>>31|0)&&o(e)?-1:1,y>1105199104){if(y>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,e);if(l<1072693247)return 1===w?s*Gr*Gr:s*Pr*Pr;if(l>1072693248)return 0===w?s*Gr*Gr:s*Pr*Pr;d=function(r,n){var t,e,o,i,u,a;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Vr,v)}else d=function(r,n,t){var e,o,i,u,a,f,c,l,y,v,p,b,s,w,A,_,m,d,U,g,h;return d=0,t<1048576&&(d-=53,t=vr(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,d+=1,t-=1048576),u=ir(o=(_=(n=jr(n,t))-(c=Ir[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=jr(0,e+=g<<18),A=(i=o*o)*i*(0===(h=i)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),f=ir(f=3+(i=u*u)+(A+=(a=m*(_-u*f-u*(n-(f-c))))*(u+o)),0),s=(p=-7.028461650952758e-9*(y=ir(y=(_=u*f)+(m=a*f+(A-(f-3-i))*o),0))+.9617966939259756*(m-(y-_))+Or[g])-((b=ir(b=(v=.9617967009544373*y)+p+(l=Nr[g])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(Vr,v,l);if(U=(m=(e-(A=ir(e,0)))*d[0]+e*d[1])+(_=A*d[0]),nr.assign(U,Lr,1,0),g=ur(Lr[0]),h=ur(Lr[1]),g>=1083179008){if(0!=(g-1083179008|h))return s*Gr*Gr;if(m+8008566259537294e-32>U-_)return s*Gr*Gr}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|h))return s*Pr*Pr;if(m<=U-_)return s*Pr*Pr}return U=function(r,n,t){var e,o,i,u,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=jr(0,e)),r=ur(r=vr(c=1-((c=(u=.6931471824645996*(i=ir(i=t+n,0)))+(a=(t-(i-n))*Tr+-1.904654299957768e-9*i))*(o=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-u))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Hr(c,l):jr(c,r)}(g,_,m),s*U}function Mr(n,t,e){return r(n)||r(t)||r(e)||n<=0||t<=0?NaN:e+t*Wr(Tr,-1/n)}export{Mr as default};
//# sourceMappingURL=mod.js.map
