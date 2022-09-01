// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r=Math.floor;function t(n){return r(n)===n}function e(n){return t(n/2)}function i(n){return e(n>0?n-1:n+1)}var u=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;function f(n){return n===u||n===o}var a=Math.sqrt;function c(n){return Math.abs(n)}var y,l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,p=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",b=l&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,e,i,u;if(null==n)return v.call(n);t=n[A],u=A,r=null!=(i=n)&&p.call(i,u);try{n[A]=void 0}catch(r){return v.call(n)}return e=v.call(n),r?n[A]=t:delete n[A],e}:function(n){return v.call(n)},w="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,r,t;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(w&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?m:function(){throw new Error("not implemented")};var U,s=y,h="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;U=function(){var n,r,t;if("function"!=typeof I)return!1;try{r=new I([1,3.14,-3.14,NaN]),t=r,n=(h&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?N:function(){throw new Error("not implemented")};var g,F=U,S="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var n,r,t;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,256,257]),t=r,n=(S&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?O:function(){throw new Error("not implemented")};var T,j=g,E="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var n,r,t;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),t=r,n=(E&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?L:function(){throw new Error("not implemented")};var W,M={uint16:T,uint8:j};(W=new M.uint16(1))[0]=4660;var x,P,V=52===new M.uint8(W.buffer)[0];!0===V?(x=1,P=0):(x=0,P=1);var Y={HIGH:x,LOW:P},_=new F(1),q=new s(_.buffer),k=Y.HIGH,z=Y.LOW;function B(n,r){return _[0]=r,n[0]=q[k],n[1]=q[z],n}function C(n,r){return 1===arguments.length?B([0,0],n):B(n,r)}var D=!0===V?0:1,J=new F(1),K=new s(J.buffer);function Q(n,r){return J[0]=n,K[D]=r>>>0,J[0]}function R(n){return 0|n}var X,Z,$=!0===V?1:0,nn=new F(1),rn=new s(nn.buffer);function tn(n){return nn[0]=n,rn[$]}!0===V?(X=1,Z=0):(X=0,Z=1);var en={HIGH:X,LOW:Z},un=new F(1),on=new s(un.buffer),fn=en.HIGH,an=en.LOW;function cn(n,r){return on[fn]=n,on[an]=r,un[0]}var yn=[0,0];function ln(n,r){var t,e;return C(yn,n),t=yn[0],t&=2147483647,e=tn(r),cn(t|=e&=2147483648,yn[1])}var vn=!0===V?1:0,pn=new F(1),An=new s(pn.buffer);function bn(n,r){return pn[0]=n,An[vn]=r>>>0,pn[0]}var wn=1023,dn=1048576,mn=[1,1.5],Un=[0,.5849624872207642],sn=[0,1.350039202129749e-8];function hn(r,t){return n(t)||f(t)?(r[0]=t,r[1]=0,r):0!==t&&c(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var In=[0,0],Nn=[0,0];function gn(r,t){var e,i;return 0===t||0===r||n(r)||f(r)?r:(function(n,r){1===arguments.length?hn([0,0],n):hn(n,r)}(In,r),t+=In[1],t+=function(n){var r=tn(n);return(r=(2146435072&r)>>>20)-wn|0}(r=In[0]),t<-1074?ln(0,r):t>1023?r<0?o:u:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,C(Nn,r),e=Nn[0],e&=2148532223,i*cn(e|=t+wn<<20,Nn[1])))}var Fn=.6931471805599453,Sn=2147483647,Hn=1048575,On=1048576,Tn=2147483647,jn=1083179008,En=1e300,Gn=1e-300,Ln=[0,0],Wn=[0,0];function Mn(r,e){var y,l,v,p,A,b,w,d,m,U,s,h,I,N;if(n(r)||n(e))return NaN;if(C(Ln,e),A=Ln[0],0===Ln[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return a(r);if(-.5===e)return 1/a(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(f(e))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:c(n)<1==(r===u)?0:u}(r,e)}if(C(Ln,r),p=Ln[0],0===Ln[1]){if(0===p)return function(n,r){return r===o?u:r===u?0:r>0?i(r)?n:0:i(r)?ln(u,n):u}(r,e);if(1===r)return 1;if(-1===r&&i(e))return-1;if(f(r))return r===o?Mn(-0,-e):e<0?0:u}if(r<0&&!1===t(e))return(r-r)/(r-r);if(v=c(r),y=p&Tn|0,l=A&Tn|0,w=A>>>31|0,b=(b=p>>>31|0)&&i(e)?-1:1,l>1105199104){if(l>1139802112)return function(n,r){return(2147483647&tn(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(r,e);if(y<1072693247)return 1===w?b*En*En:b*Gn*Gn;if(y>1072693248)return 0===w?b*En*En:b*Gn*Gn;s=function(n,r){var t,e,i,u,o,f;return t=(o=1.9259629911266175e-8*(i=r-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Q(e=(u=1.4426950216293335*i)+o,0))-u),n[0]=e,n[1]=t,n}(Wn,v)}else s=function(n,r,t){var e,i,u,o,f,a,c,y,l,v,p,A,b,w,d,m,U,s,h,I,N;return s=0,t<dn&&(s-=53,t=tn(r*=9007199254740992)),s+=(t>>20)-wn|0,t=1072693248|(h=1048575&t|0),h<=235662?I=0:h<767610?I=1:(I=0,s+=1,t-=dn),o=Q(i=(m=(r=bn(r,t))-(c=mn[I]))*(U=1/(r+c)),0),e=524288+(t>>1|536870912),a=bn(0,e+=I<<18),d=(u=i*i)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=Q(a=3+(u=o*o)+(d+=(f=U*(m-o*a-o*(r-(a-c))))*(o+i)),0),b=(p=-7.028461650952758e-9*(l=Q(l=(m=o*a)+(U=f*a+(d-(a-3-u))*i),0))+.9617966939259756*(U-(l-m))+sn[I])-((A=Q(A=(v=.9617967009544373*l)+p+(y=Un[I])+(w=s),0))-w-y-v),n[0]=A,n[1]=b,n}(Wn,v,y);if(U=(e-(d=Q(e,0)))*s[0]+e*s[1],m=d*s[0],C(Ln,h=U+m),I=R(Ln[0]),N=R(Ln[1]),I>=jn){if(0!=(I-jn|N))return b*En*En;if(U+8008566259537294e-32>h-m)return b*En*En}else if((I&Tn)>=1083231232){if(0!=(I-3230714880|N))return b*Gn*Gn;if(U<=h-m)return b*Gn*Gn}return h=function(n,r,t){var e,i,u,o,f,a,c,y,l,v;return l=((y=n&Sn|0)>>20)-wn|0,c=0,y>1071644672&&(i=bn(0,((c=n+(On>>l+1)>>>0)&~(Hn>>(l=((c&Sn)>>20)-wn|0)))>>>0),c=(c&Hn|On)>>20-l>>>0,n<0&&(c=-c),r-=i),n=R(n=tn(a=1-((a=(u=.6931471824645996*(i=Q(i=t+r,0)))+(o=(t-(i-r))*Fn+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-u))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?gn(a,c):bn(a,n)}(I,m,U),b*h}return function(r,t,e){return n(r)||n(t)||n(e)||r<=0||t<=0?NaN:e+t*Mn(Fn,-1/r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).median=r();
//# sourceMappingURL=browser.js.map
