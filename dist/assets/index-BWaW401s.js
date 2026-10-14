(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gr="170",qc=0,Gr=1,Zc=2,tc=1,ec=2,un=3,Pn=0,Pe=1,xe=2,An=0,di=1,So=2,Hr=3,Vr=4,$c=5,kn=100,jc=101,Jc=102,Kc=103,Qc=104,tl=200,el=201,nl=202,il=203,Eo=204,To=205,sl=206,ol=207,rl=208,al=209,cl=210,ll=211,hl=212,dl=213,ul=214,Ao=0,Co=1,Po=2,pi=3,Ro=4,Lo=5,Io=6,Do=7,nc=0,fl=1,pl=2,Cn=0,ml=1,gl=2,xl=3,ic=4,vl=5,_l=6,wl=7,sc=300,mi=301,gi=302,Uo=303,No=304,Ns=306,ki=1e3,Gn=1001,Fo=1002,Je=1003,yl=1004,Ki=1005,en=1006,Ws=1007,Hn=1008,xn=1009,oc=1010,rc=1011,Bi=1012,xr=1013,Vn=1014,pn=1015,qi=1016,vr=1017,_r=1018,xi=1020,ac=35902,cc=1021,lc=1022,$e=1023,hc=1024,dc=1025,ui=1026,vi=1027,uc=1028,wr=1029,fc=1030,yr=1031,Mr=1033,Ss=33776,Es=33777,Ts=33778,As=33779,zo=35840,Oo=35841,ko=35842,Bo=35843,Go=36196,Ho=37492,Vo=37496,Wo=37808,Xo=37809,Yo=37810,qo=37811,Zo=37812,$o=37813,jo=37814,Jo=37815,Ko=37816,Qo=37817,tr=37818,er=37819,nr=37820,ir=37821,Cs=36492,sr=36494,or=36495,pc=36283,rr=36284,ar=36285,cr=36286,Ml=3200,bl=3201,mc=0,Sl=1,Tn="",De="srgb",wi="srgb-linear",Fs="linear",ae="srgb",Zn=7680,Wr=519,El=512,Tl=513,Al=514,gc=515,Cl=516,Pl=517,Rl=518,Ll=519,Xr=35044,Yr="300 es",mn=2e3,Ls=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qr=1234567;const Di=Math.PI/180,Gi=180/Math.PI;function Yn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function br(s,t){return(s%t+t)%t}function Il(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Dl(s,t,e){return s!==t?(e-s)/(t-s):0}function Ui(s,t,e){return(1-e)*s+e*t}function Ul(s,t,e,n){return Ui(s,t,1-Math.exp(-e*n))}function Nl(s,t=1){return t-Math.abs(br(s,t*2)-t)}function Fl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function zl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ol(s,t){return s+Math.floor(Math.random()*(t-s+1))}function kl(s,t){return s+Math.random()*(t-s)}function Bl(s){return s*(.5-Math.random())}function Gl(s){s!==void 0&&(qr=s);let t=qr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hl(s){return s*Di}function Vl(s){return s*Gi}function Wl(s){return(s&s-1)===0&&s!==0}function Xl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ql(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),d=r((t+n)/2),u=o((t-n)/2),h=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(a*d,c*u,c*h,a*l);break;case"YZY":s.set(c*h,a*d,c*u,a*l);break;case"ZXZ":s.set(c*u,c*h,a*d,a*l);break;case"XZX":s.set(a*d,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*d,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ht={DEG2RAD:Di,RAD2DEG:Gi,generateUUID:Yn,clamp:be,euclideanModulo:br,mapLinear:Il,inverseLerp:Dl,lerp:Ui,damp:Ul,pingpong:Nl,smoothstep:Fl,smootherstep:zl,randInt:Ol,randFloat:kl,randFloatSpread:Bl,seededRandom:Gl,degToRad:Hl,radToDeg:Vl,isPowerOfTwo:Wl,ceilPowerOfTwo:Xl,floorPowerOfTwo:Yl,setQuaternionFromProperEuler:ql,normalize:Le,denormalize:ci};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,o,r,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],w=i[1],_=i[4],v=i[7],L=i[2],A=i[5],S=i[8];return o[0]=r*x+a*w+c*L,o[3]=r*m+a*_+c*A,o[6]=r*p+a*v+c*S,o[1]=l*x+d*w+u*L,o[4]=l*m+d*_+u*A,o[7]=l*p+d*v+u*S,o[2]=h*x+f*w+g*L,o[5]=h*m+f*_+g*A,o[8]=h*p+f*v+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*r*d-e*a*l-n*o*d+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=d*r-a*l,h=a*c-d*o,f=l*o-r*c,g=e*u+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*l-d*n)*x,t[2]=(a*n-i*r)*x,t[3]=h*x,t[4]=(d*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new $t;function xc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zl(){const s=Hi("canvas");return s.style.display="block",s}const Zr={};function Li(s){s in Zr||(Zr[s]=!0,console.warn(s))}function $l(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function jl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?Fs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const $r=[.64,.33,.3,.6,.15,.06],jr=[.2126,.7152,.0722],Jr=[.3127,.329],Kr=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qr=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[wi]:{primaries:$r,whitePoint:Jr,transfer:Fs,toXYZ:Kr,fromXYZ:Qr,luminanceCoefficients:jr,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:$r,whitePoint:Jr,transfer:ae,toXYZ:Kr,fromXYZ:Qr,luminanceCoefficients:jr,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let $n;class Kl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=Hi("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=gn(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ql=0;class vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ys(i[r].image)):o.push(Ys(i[r]))}else o=Ys(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ys(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class Re extends yi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Gn,i=Gn,o=en,r=Hn,a=$e,c=xn,l=Re.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Yn(),this.name="",this.source=new vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=sc;Re.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(f+1)/2,L=(p+1)/2,A=(d+h)/4,S=(u+x)/4,P=(g+m)/4;return _>v&&_>L?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=A/n,o=S/n):v>L?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=A/i,o=P/i):L<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(L),n=S/o,i=P/o),this.set(n,i,o,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(h-d)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _c extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],d=n[i+2],u=n[i+3];const h=o[r+0],f=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==h||l!==f||d!==g){let m=1-a;const p=c*h+l*f+d*g+u*x,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const L=Math.sqrt(_),A=Math.atan2(L,p*w);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const v=a*w;if(c=c*m+h*v,l=l*m+f*v,d=d*m+g*v,u=u*m+x*v,m===1-a){const L=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=L,l*=L,d*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],u=o[r],h=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+d*u+c*f-l*h,t[e+1]=c*g+d*h+l*u-a*f,t[e+2]=l*g+d*f+a*h-c*u,t[e+3]=d*g-a*u-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),u=a(o/2),h=c(n/2),f=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"YZX":this._x=h*d*u+l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u-h*f*g;break;case"XZY":this._x=h*d*u-l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],d=e[6],u=e[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(o-l)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(o+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+r*a+i*l-o*c,this._y=i*d+r*c+o*a-n*l,this._z=o*d+r*l+n*c-i*a,this._w=r*d-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-e)*d)/l,h=Math.sin(e*d)/l;return this._w=r*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=o*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),d=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*d,this.y=n+c*d+a*l-o*u,this.z=i+c*u+o*d-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new C,ta=new Zi;class $i{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Xe):Xe.fromBufferAttribute(o,r),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),ts.subVectors(this.max,Ti),jn.subVectors(t.a,Ti),Jn.subVectors(t.b,Ti),Kn.subVectors(t.c,Ti),wn.subVectors(Jn,jn),yn.subVectors(Kn,Jn),Ln.subVectors(jn,Kn);let e=[0,-wn.z,wn.y,0,-yn.z,yn.y,0,-Ln.z,Ln.y,wn.z,0,-wn.x,yn.z,0,-yn.x,Ln.z,0,-Ln.x,-wn.y,wn.x,0,-yn.y,yn.x,0,-Ln.y,Ln.x,0];return!Zs(e,jn,Jn,Kn,ts)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,jn,Jn,Kn,ts))?!1:(es.crossVectors(wn,yn),e=[es.x,es.y,es.z],Zs(e,jn,Jn,Kn,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new C,new C,new C,new C,new C,new C,new C,new C],Xe=new C,Qi=new $i,jn=new C,Jn=new C,Kn=new C,wn=new C,yn=new C,Ln=new C,Ti=new C,ts=new C,es=new C,In=new C;function Zs(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){In.fromArray(s,o);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=t.dot(In),l=e.dot(In),d=n.dot(In);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const ih=new $i,Ai=new C,$s=new C;class zs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ih.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add($s)),this.expandByPoint(Ai.copy(t.center).sub($s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new C,js=new C,ns=new C,Mn=new C,Js=new C,is=new C,Ks=new C;class wc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){js.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(js);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ns),a=Mn.dot(this.direction),c=-Mn.dot(ns),l=Mn.lengthSq(),d=Math.abs(1-r*r);let u,h,f,g;if(d>0)if(u=r*c-a,h=r*a-c,g=o*d,u>=0)if(h>=-g)if(h<=g){const x=1/d;u*=x,h*=x,f=u*(u+r*h+2*a)+h*(r*u+h+2*c)+l}else h=o,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;else h=-o,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-r*o+a)),h=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-o,-c),o),f=h*(h+2*c)+l):(u=Math.max(0,-(r*o+a)),h=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+h*(h+2*c)+l);else h=r>0?-o:o,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(js).addScaledVector(ns,h),f}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),d>=0?(o=(t.min.y-h.y)*d,r=(t.max.y-h.y)*d):(o=(t.max.y-h.y)*d,r=(t.min.y-h.y)*d),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,o){Js.subVectors(e,t),is.subVectors(n,t),Ks.crossVectors(Js,is);let r=this.direction.dot(Ks),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Mn.subVectors(this.origin,t);const c=a*this.direction.dot(is.crossVectors(Mn,is));if(c<0)return null;const l=a*this.direction.dot(Js.cross(Mn));if(l<0||c+l>r)return null;const d=-a*Mn.dot(Ks);return d<0?null:this.at(d/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,i,o,r,a,c,l,d,u,h,f,g,x,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,d,u,h,f,g,x,m)}set(t,e,n,i,o,r,a,c,l,d,u,h,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qn.setFromMatrixColumn(t,0).length(),o=1/Qn.setFromMatrixColumn(t,1).length(),r=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const h=r*d,f=r*u,g=a*d,x=a*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*d,f=c*u,g=l*d,x=l*u;e[0]=h+x*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*d,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=r*c}else if(t.order==="ZXY"){const h=c*d,f=c*u,g=l*d,x=l*u;e[0]=h-x*a,e[4]=-r*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*d,e[9]=x-h*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const h=r*d,f=r*u,g=a*d,x=a*u;e[0]=c*d,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*u,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,f=r*l,g=a*c,x=a*l;e[0]=c*d,e[4]=x-h*u,e[8]=g*u+f,e[1]=u,e[5]=r*d,e[9]=-a*d,e[2]=-l*d,e[6]=f*u+g,e[10]=h-x*u}else if(t.order==="XZY"){const h=r*c,f=r*l,g=a*c,x=a*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=h*u+x,e[5]=r*d,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*d,e[10]=x*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sh,t,oh)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),bn.crossVectors(n,Fe),bn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),bn.crossVectors(n,Fe)),bn.normalize(),ss.crossVectors(Fe,bn),i[0]=bn.x,i[4]=ss.x,i[8]=Fe.x,i[1]=bn.y,i[5]=ss.y,i[9]=Fe.y,i[2]=bn.z,i[6]=ss.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],_=n[7],v=n[11],L=n[15],A=i[0],S=i[4],P=i[8],M=i[12],y=i[1],R=i[5],F=i[9],N=i[13],B=i[2],W=i[6],V=i[10],K=i[14],X=i[3],ft=i[7],yt=i[11],St=i[15];return o[0]=r*A+a*y+c*B+l*X,o[4]=r*S+a*R+c*W+l*ft,o[8]=r*P+a*F+c*V+l*yt,o[12]=r*M+a*N+c*K+l*St,o[1]=d*A+u*y+h*B+f*X,o[5]=d*S+u*R+h*W+f*ft,o[9]=d*P+u*F+h*V+f*yt,o[13]=d*M+u*N+h*K+f*St,o[2]=g*A+x*y+m*B+p*X,o[6]=g*S+x*R+m*W+p*ft,o[10]=g*P+x*F+m*V+p*yt,o[14]=g*M+x*N+m*K+p*St,o[3]=w*A+_*y+v*B+L*X,o[7]=w*S+_*R+v*W+L*ft,o[11]=w*P+_*F+v*V+L*yt,o[15]=w*M+_*N+v*K+L*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],d=t[2],u=t[6],h=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*c*u-i*l*u-o*a*h+n*l*h+i*a*f-n*c*f)+x*(+e*c*f-e*l*h+o*r*h-i*r*f+i*l*d-o*c*d)+m*(+e*l*u-e*a*f-o*r*u+n*r*f+o*a*d-n*l*d)+p*(-i*a*d-e*c*u+e*a*h+i*r*u-n*r*h+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=u*m*l-x*h*l+x*c*f-a*m*f-u*c*p+a*h*p,_=g*h*l-d*m*l-g*c*f+r*m*f+d*c*p-r*h*p,v=d*x*l-g*u*l+g*a*f-r*x*f-d*a*p+r*u*p,L=g*u*c-d*x*c-g*a*h+r*x*h+d*a*m-r*u*m,A=e*w+n*_+i*v+o*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return t[0]=w*S,t[1]=(x*h*o-u*m*o-x*i*f+n*m*f+u*i*p-n*h*p)*S,t[2]=(a*m*o-x*c*o+x*i*l-n*m*l-a*i*p+n*c*p)*S,t[3]=(u*c*o-a*h*o-u*i*l+n*h*l+a*i*f-n*c*f)*S,t[4]=_*S,t[5]=(d*m*o-g*h*o+g*i*f-e*m*f-d*i*p+e*h*p)*S,t[6]=(g*c*o-r*m*o-g*i*l+e*m*l+r*i*p-e*c*p)*S,t[7]=(r*h*o-d*c*o+d*i*l-e*h*l-r*i*f+e*c*f)*S,t[8]=v*S,t[9]=(g*u*o-d*x*o-g*n*f+e*x*f+d*n*p-e*u*p)*S,t[10]=(r*x*o-g*a*o+g*n*l-e*x*l-r*n*p+e*a*p)*S,t[11]=(d*a*o-r*u*o-d*n*l+e*u*l+r*n*f-e*a*f)*S,t[12]=L*S,t[13]=(d*x*i-g*u*i+g*n*h-e*x*h-d*n*m+e*u*m)*S,t[14]=(g*a*i-r*x*i-g*n*c+e*x*c+r*n*m-e*a*m)*S,t[15]=(r*u*i-d*a*i+d*n*c-e*u*c-r*n*h+e*a*h)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,d=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*r,0,l*c-i*a,d*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,d=r+r,u=a+a,h=o*l,f=o*d,g=o*u,x=r*d,m=r*u,p=a*u,w=c*l,_=c*d,v=c*u,L=n.x,A=n.y,S=n.z;return i[0]=(1-(x+p))*L,i[1]=(f+v)*L,i[2]=(g-_)*L,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(h+p))*A,i[6]=(m+w)*A,i[7]=0,i[8]=(g+_)*S,i[9]=(m-w)*S,i[10]=(1-(h+x))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Qn.set(i[0],i[1],i[2]).length();const r=Qn.set(i[4],i[5],i[6]).length(),a=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const l=1/o,d=1/r,u=1/a;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=d,Ye.elements[5]*=d,Ye.elements[6]*=d,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=mn){const c=this.elements,l=2*o/(e-t),d=2*o/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i);let f,g;if(a===mn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ls)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=mn){const c=this.elements,l=1/(e-t),d=1/(n-i),u=1/(r-o),h=(e+t)*l,f=(n+i)*d;let g,x;if(a===mn)g=(r+o)*u,x=-2*u;else if(a===Ls)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new C,Ye=new pe,sh=new C(0,0,0),oh=new C(1,1,1),bn=new C,ss=new C,Fe=new C,ea=new pe,na=new Zi;class nn{constructor(t=0,e=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ea.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ea,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return na.setFromEuler(this),this.setFromQuaternion(na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rh=0;const ia=new C,ti=new Zi,ln=new pe,os=new C,Ci=new C,ah=new C,ch=new Zi,sa=new C(1,0,0),oa=new C(0,1,0),ra=new C(0,0,1),aa={type:"added"},lh={type:"removed"},ei={type:"childadded",child:null},Qs={type:"childremoved",child:null};class Se extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new C,e=new nn,n=new Zi,i=new C(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(sa,t)}rotateY(t){return this.rotateOnAxis(oa,t)}rotateZ(t){return this.rotateOnAxis(ra,t)}translateOnAxis(t,e){return ia.copy(t).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sa,t)}translateY(t){return this.translateOnAxis(oa,t)}translateZ(t){return this.translateOnAxis(ra,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ci,os,this.up):ln.lookAt(os,Ci,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(ln),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(aa),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lh),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(aa),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,ah),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),d=r(t.images),u=r(t.shapes),h=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new C(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new C,hn=new C,to=new C,dn=new C,ni=new C,ii=new C,ca=new C,eo=new C,no=new C,io=new C,so=new ce,oo=new ce,ro=new ce;class Ze{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){qe.subVectors(i,e),hn.subVectors(n,e),to.subVectors(t,e);const r=qe.dot(qe),a=qe.dot(hn),c=qe.dot(to),l=hn.dot(hn),d=hn.dot(to),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const h=1/u,f=(l*c-a*d)*h,g=(r*d-a*c)*h;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,dn.x),c.addScaledVector(r,dn.y),c.addScaledVector(a,dn.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return so.setScalar(0),oo.setScalar(0),ro.setScalar(0),so.fromBufferAttribute(t,e),oo.fromBufferAttribute(t,n),ro.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(so,o.x),r.addScaledVector(oo,o.y),r.addScaledVector(ro,o.z),r}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),hn.subVectors(t,e),qe.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qe.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;ni.subVectors(i,n),ii.subVectors(o,n),eo.subVectors(t,n);const c=ni.dot(eo),l=ii.dot(eo);if(c<=0&&l<=0)return e.copy(n);no.subVectors(t,i);const d=ni.dot(no),u=ii.dot(no);if(d>=0&&u<=d)return e.copy(i);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(n).addScaledVector(ni,r);io.subVectors(t,o);const f=ni.dot(io),g=ii.dot(io);if(g>=0&&f<=g)return e.copy(o);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ii,a);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return ca.subVectors(o,i),a=(u-d)/(u-d+(f-g)),e.copy(i).addScaledVector(ca,a);const p=1/(m+x+h);return r=x*p,a=h*p,e.copy(n).addScaledVector(ni,r).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function ao(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=br(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ao(r,o,t+1/3),this.g=ao(r,o,t),this.b=ao(r,o,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ee.fromWorkingColorSpace(Ae.copy(this),t),Math.round(be(Ae.r*255,0,255))*65536+Math.round(be(Ae.g*255,0,255))*256+Math.round(be(Ae.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,o=Ae.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const d=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=d<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=De){ee.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(rs);const n=Ui(Sn.h,rs.h,e),i=Ui(Sn.s,rs.s,e),o=Ui(Sn.l,rs.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new _t;_t.NAMES=Mc;let hh=0;class Mi extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Yn(),this.name="",this.blending=di,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new C,as=new ht;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xr,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),o=Le(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xr&&(t.usage=this.usage),t}}class bc extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sc extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dh=0;const He=new pe,co=new Se,si=new C,ze=new $i,Pi=new $i,Me=new C;class ye extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xc(t)?Sc:bc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new $t().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];ze.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(ze.min,Pi.min),ze.expandByPoint(Me),Me.addVectors(ze.max,Pi.max),ze.expandByPoint(Me)):(ze.expandByPoint(Pi.min),ze.expandByPoint(Pi.max))}ze.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Me.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Me.fromBufferAttribute(a,l),c&&(si.fromBufferAttribute(t,l),Me.add(si)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new C,c[P]=new C;const l=new C,d=new C,u=new C,h=new ht,f=new ht,g=new ht,x=new C,m=new C;function p(P,M,y){l.fromBufferAttribute(n,P),d.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),h.fromBufferAttribute(o,P),f.fromBufferAttribute(o,M),g.fromBufferAttribute(o,y),d.sub(l),u.sub(l),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),a[P].add(x),a[M].add(x),a[y].add(x),c[P].add(m),c[M].add(m),c[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,M=w.length;P<M;++P){const y=w[P],R=y.start,F=y.count;for(let N=R,B=R+F;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new C,v=new C,L=new C,A=new C;function S(P){L.fromBufferAttribute(i,P),A.copy(L);const M=a[P];_.copy(M),_.sub(L.multiplyScalar(L.dot(M))).normalize(),v.crossVectors(A,M);const R=v.dot(c[P])<0?-1:1;r.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,M=w.length;P<M;++P){const y=w[P],R=y.start,F=y.count;for(let N=R,B=R+F;N<B;N+=3)S(t.getX(N+0)),S(t.getX(N+1)),S(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new C,o=new C,r=new C,a=new C,c=new C,l=new C,d=new C,u=new C;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),d.subVectors(r,o),u.subVectors(i,o),d.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),d.subVectors(r,o),u.subVectors(i,o),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*d;for(let p=0;p<d;p++)h[g++]=l[f++]}return new Be(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(t.data))}d.length>0&&(i[c]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(e))}const o=t.morphAttributes;for(const l in o){const d=[],u=o[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,d=r.length;l<d;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const la=new pe,Dn=new wc,cs=new zs,ha=new C,ls=new C,hs=new C,ds=new C,lo=new C,us=new C,da=new C,fs=new C;class E extends Se{constructor(t=new ye,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){us.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const d=a[c],u=o[c];d!==0&&(lo.fromBufferAttribute(u,t),r?us.addScaledVector(lo,d):us.addScaledVector(lo.sub(e),d))}e.add(us)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(o),Dn.copy(t.ray).recast(t.near),!(cs.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(cs,ha)===null||Dn.origin.distanceToSquared(ha)>(t.far-t.near)**2))&&(la.copy(o).invert(),Dn.copy(t.ray).applyMatrix4(la),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,d=o.attributes.uv1,u=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=r[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,L=_;v<L;v+=3){const A=a.getX(v),S=a.getX(v+1),P=a.getX(v+2);i=ps(this,p,t,n,l,d,u,A,S,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=ps(this,r,t,n,l,d,u,w,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=r[m.materialIndex],w=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,L=_;v<L;v+=3){const A=v,S=v+1,P=v+2;i=ps(this,p,t,n,l,d,u,A,S,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=m,_=m+1,v=m+2;i=ps(this,r,t,n,l,d,u,w,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function uh(s,t,e,n,i,o,r,a){let c;if(t.side===Pe?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Pn,a),c===null)return null;fs.copy(a),fs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(fs);return l<e.near||l>e.far?null:{distance:l,point:fs.clone(),object:s}}function ps(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,ls),s.getVertexPosition(c,hs),s.getVertexPosition(l,ds);const d=uh(s,t,e,n,ls,hs,ds,da);if(d){const u=new C;Ze.getBarycoord(da,ls,hs,ds,u),i&&(d.uv=Ze.getInterpolatedAttribute(i,a,c,l,u,new ht)),o&&(d.uv1=Ze.getInterpolatedAttribute(o,a,c,l,u,new ht)),r&&(d.normal=Ze.getInterpolatedAttribute(r,a,c,l,u,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new C,materialIndex:0};Ze.getNormal(ls,hs,ds,h.normal),d.face=h,d.barycoord=u}return d}class it extends ye{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(u,2));function g(x,m,p,w,_,v,L,A,S,P,M){const y=v/S,R=L/P,F=v/2,N=L/2,B=A/2,W=S+1,V=P+1;let K=0,X=0;const ft=new C;for(let yt=0;yt<V;yt++){const St=yt*R-N;for(let Xt=0;Xt<W;Xt++){const te=Xt*y-F;ft[x]=te*w,ft[m]=St*_,ft[p]=B,l.push(ft.x,ft.y,ft.z),ft[x]=0,ft[m]=0,ft[p]=A>0?1:-1,d.push(ft.x,ft.y,ft.z),u.push(Xt/S),u.push(1-yt/P),K+=1}}for(let yt=0;yt<P;yt++)for(let St=0;St<S;St++){const Xt=h+St+W*yt,te=h+St+W*(yt+1),Z=h+(St+1)+W*(yt+1),rt=h+(St+1)+W*yt;c.push(Xt,te,rt),c.push(te,Z,rt),X+=6}a.addGroup(f,X,M),f+=X,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _i(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const n=_i(s[e]);for(const i in n)t[i]=n[i]}return t}function fh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ec(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const ph={clone:_i,merge:Ie};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ke extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_i(t.uniforms),this.uniformsGroups=fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tc extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new C,ua=new ht,fa=new ht;class Oe extends Tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,ua,fa),e.subVectors(fa,ua)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Di*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oi=-90,ri=1;class xh extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(oi,ri,t,e);i.layers=this.layers,this.add(i);const o=new Oe(oi,ri,t,e);o.layers=this.layers,this.add(o);const r=new Oe(oi,ri,t,e);r.layers=this.layers,this.add(r);const a=new Oe(oi,ri,t,e);a.layers=this.layers,this.add(a);const c=new Oe(oi,ri,t,e);c.layers=this.layers,this.add(c);const l=new Oe(oi,ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ac extends Re{constructor(t,e,n,i,o,r,a,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:mi,super(t,e,n,i,o,r,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vh extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new it(5,5,5),o=new Ke({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:An});o.uniforms.tEquirect.value=e;const r=new E(i,o),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=en),new xh(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const ho=new C,_h=new C,wh=new $t;class zn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ho.subVectors(n,e).cross(_h.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wh.getNormalMatrix(t),i=this.coplanarPoint(ho).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new zs,ms=new C;class Sr{constructor(t=new zn,e=new zn,n=new zn,i=new zn,o=new zn,r=new zn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],d=i[5],u=i[6],h=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],w=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-o,h-l,m-f,v-p).normalize(),n[1].setComponents(c+o,h+l,m+f,v+p).normalize(),n[2].setComponents(c+r,h+d,m+g,v+w).normalize(),n[3].setComponents(c-r,h-d,m-g,v-w).normalize(),n[4].setComponents(c-a,h-u,m-x,v-_).normalize(),e===mn)n[5].setComponents(c+a,h+u,m+x,v+_).normalize();else if(e===Ls)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function yh(s){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,u=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const d=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];s.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}class ge extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,u=t/a,h=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const w=p*h-r;for(let _=0;_<l;_++){const v=_*u-o;g.push(v,-w,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const _=w+l*p,v=w+l*(p+1),L=w+1+l*(p+1),A=w+1+l*p;f.push(_,v,A),f.push(v,L,A)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
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
#endif`,Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
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
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
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
#endif`,Fh=`#ifdef USE_BUMPMAP
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ld=`#ifdef USE_GRADIENTMAP
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
}`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
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
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ou=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,ru=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cu=`#ifdef USE_SKINNING
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
#endif`,lu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hu=`#ifdef USE_SKINNING
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
#endif`,du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mu=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gu=`#ifdef USE_TRANSMISSION
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
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mu=`uniform sampler2D t2D;
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
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Su=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`#include <common>
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
}`,Cu=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pu=`#define DISTANCE
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
}`,Ru=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Du=`uniform float scale;
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
}`,Uu=`uniform vec3 diffuse;
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
}`,Nu=`#include <common>
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
}`,Fu=`uniform vec3 diffuse;
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
}`,zu=`#define LAMBERT
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
}`,Ou=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ku=`#define MATCAP
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
}`,Bu=`#define MATCAP
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
}`,Gu=`#define NORMAL
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
}`,Hu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vu=`#define PHONG
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
}`,Wu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xu=`#define STANDARD
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
}`,Yu=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,qu=`#define TOON
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
}`,Zu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$u=`uniform float size;
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
}`,ju=`uniform vec3 diffuse;
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
}`,Ju=`#include <common>
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
}`,Ku=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qu=`uniform float rotation;
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
}`,tf=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Mh,alphahash_pars_fragment:bh,alphamap_fragment:Sh,alphamap_pars_fragment:Eh,alphatest_fragment:Th,alphatest_pars_fragment:Ah,aomap_fragment:Ch,aomap_pars_fragment:Ph,batching_pars_vertex:Rh,batching_vertex:Lh,begin_vertex:Ih,beginnormal_vertex:Dh,bsdfs:Uh,iridescence_fragment:Nh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Bh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Zh,displacementmap_vertex:$h,emissivemap_fragment:jh,emissivemap_pars_fragment:Jh,colorspace_fragment:Kh,colorspace_pars_fragment:Qh,envmap_fragment:td,envmap_common_pars_fragment:ed,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:sd,fog_vertex:od,fog_pars_vertex:rd,fog_fragment:ad,fog_pars_fragment:cd,gradientmap_pars_fragment:ld,lightmap_pars_fragment:hd,lights_lambert_fragment:dd,lights_lambert_pars_fragment:ud,lights_pars_begin:fd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:xd,lights_phong_pars_fragment:vd,lights_physical_fragment:_d,lights_physical_pars_fragment:wd,lights_fragment_begin:yd,lights_fragment_maps:Md,lights_fragment_end:bd,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Ad,map_fragment:Cd,map_pars_fragment:Pd,map_particle_fragment:Rd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:zd,morphtarget_vertex:Od,normal_fragment_begin:kd,normal_fragment_maps:Bd,normal_pars_fragment:Gd,normal_pars_vertex:Hd,normal_vertex:Vd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:qd,iridescence_pars_fragment:Zd,opaque_fragment:$d,packing:jd,premultiplied_alpha_fragment:Jd,project_vertex:Kd,dithering_fragment:Qd,dithering_pars_fragment:tu,roughnessmap_fragment:eu,roughnessmap_pars_fragment:nu,shadowmap_pars_fragment:iu,shadowmap_pars_vertex:su,shadowmap_vertex:ou,shadowmask_pars_fragment:ru,skinbase_vertex:au,skinning_pars_vertex:cu,skinning_vertex:lu,skinnormal_vertex:hu,specularmap_fragment:du,specularmap_pars_fragment:uu,tonemapping_fragment:fu,tonemapping_pars_fragment:pu,transmission_fragment:mu,transmission_pars_fragment:gu,uv_pars_fragment:xu,uv_pars_vertex:vu,uv_vertex:_u,worldpos_vertex:wu,background_vert:yu,background_frag:Mu,backgroundCube_vert:bu,backgroundCube_frag:Su,cube_vert:Eu,cube_frag:Tu,depth_vert:Au,depth_frag:Cu,distanceRGBA_vert:Pu,distanceRGBA_frag:Ru,equirect_vert:Lu,equirect_frag:Iu,linedashed_vert:Du,linedashed_frag:Uu,meshbasic_vert:Nu,meshbasic_frag:Fu,meshlambert_vert:zu,meshlambert_frag:Ou,meshmatcap_vert:ku,meshmatcap_frag:Bu,meshnormal_vert:Gu,meshnormal_frag:Hu,meshphong_vert:Vu,meshphong_frag:Wu,meshphysical_vert:Xu,meshphysical_frag:Yu,meshtoon_vert:qu,meshtoon_frag:Zu,points_vert:$u,points_frag:ju,shadow_vert:Ju,shadow_frag:Ku,sprite_vert:Qu,sprite_frag:tf},vt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},tn={basic:{uniforms:Ie([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ie([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new _t(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ie([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ie([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ie([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new _t(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ie([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ie([vt.points,vt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ie([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ie([vt.common,vt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ie([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ie([vt.sprite,vt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ie([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ie([vt.lights,vt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};tn.physical={uniforms:Ie([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const gs={r:0,b:0,g:0},Nn=new nn,ef=new pe;function nf(s,t,e,n,i,o,r){const a=new _t(0);let c=o===!0?0:1,l,d,u=null,h=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function x(w){let _=!1;const v=g(w);v===null?p(a,c):v&&v.isColor&&(p(v,1),_=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,_){const v=g(_);v&&(v.isCubeTexture||v.mapping===Ns)?(d===void 0&&(d=new E(new it(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:_i(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Nn.copy(_.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ef.makeRotationFromEuler(Nn)),d.material.toneMapped=ee.getTransfer(v.colorSpace)!==ae,(u!==v||h!==v.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new E(new ge(2,2),new Ke({name:"BackgroundMaterial",uniforms:_i(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,_){w.getRGB(gs,Ec(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:m}}function sf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let o=i,r=!1;function a(y,R,F,N,B){let W=!1;const V=u(N,F,R);o!==V&&(o=V,l(o.object)),W=f(y,N,F,B),W&&g(y,N,F,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,v(y,R,F,N),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function d(y){return s.deleteVertexArray(y)}function u(y,R,F){const N=F.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let W=B[R.id];W===void 0&&(W={},B[R.id]=W);let V=W[N];return V===void 0&&(V=h(c()),W[N]=V),V}function h(y){const R=[],F=[],N=[];for(let B=0;B<e;B++)R[B]=0,F[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,R,F,N){const B=o.attributes,W=R.attributes;let V=0;const K=F.getAttributes();for(const X in K)if(K[X].location>=0){const yt=B[X];let St=W[X];if(St===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),yt===void 0||yt.attribute!==St||St&&yt.data!==St.data)return!0;V++}return o.attributesNum!==V||o.index!==N}function g(y,R,F,N){const B={},W=R.attributes;let V=0;const K=F.getAttributes();for(const X in K)if(K[X].location>=0){let yt=W[X];yt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const St={};St.attribute=yt,yt&&yt.data&&(St.data=yt.data),B[X]=St,V++}o.attributes=B,o.attributesNum=V,o.index=N}function x(){const y=o.newAttributes;for(let R=0,F=y.length;R<F;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const F=o.newAttributes,N=o.enabledAttributes,B=o.attributeDivisors;F[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),B[y]!==R&&(s.vertexAttribDivisor(y,R),B[y]=R)}function w(){const y=o.newAttributes,R=o.enabledAttributes;for(let F=0,N=R.length;F<N;F++)R[F]!==y[F]&&(s.disableVertexAttribArray(F),R[F]=0)}function _(y,R,F,N,B,W,V){V===!0?s.vertexAttribIPointer(y,R,F,B,W):s.vertexAttribPointer(y,R,F,N,B,W)}function v(y,R,F,N){x();const B=N.attributes,W=F.getAttributes(),V=R.defaultAttributeValues;for(const K in W){const X=W[K];if(X.location>=0){let ft=B[K];if(ft===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){const yt=ft.normalized,St=ft.itemSize,Xt=t.get(ft);if(Xt===void 0)continue;const te=Xt.buffer,Z=Xt.type,rt=Xt.bytesPerElement,At=Z===s.INT||Z===s.UNSIGNED_INT||ft.gpuType===xr;if(ft.isInterleavedBufferAttribute){const ct=ft.data,Nt=ct.stride,Vt=ft.offset;if(ct.isInstancedInterleavedBuffer){for(let kt=0;kt<X.locationSize;kt++)p(X.location+kt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let kt=0;kt<X.locationSize;kt++)m(X.location+kt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let kt=0;kt<X.locationSize;kt++)_(X.location+kt,St/X.locationSize,Z,yt,Nt*rt,(Vt+St/X.locationSize*kt)*rt,At)}else{if(ft.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,ft.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ct=0;ct<X.locationSize;ct++)m(X.location+ct);s.bindBuffer(s.ARRAY_BUFFER,te);for(let ct=0;ct<X.locationSize;ct++)_(X.location+ct,St/X.locationSize,Z,yt,St*rt,St/X.locationSize*ct*rt,At)}}else if(V!==void 0){const yt=V[K];if(yt!==void 0)switch(yt.length){case 2:s.vertexAttrib2fv(X.location,yt);break;case 3:s.vertexAttrib3fv(X.location,yt);break;case 4:s.vertexAttrib4fv(X.location,yt);break;default:s.vertexAttrib1fv(X.location,yt)}}}}w()}function L(){P();for(const y in n){const R=n[y];for(const F in R){const N=R[F];for(const B in N)d(N[B].object),delete N[B];delete R[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const F in R){const N=R[F];for(const B in N)d(N[B].object),delete N[B];delete R[F]}delete n[y.id]}function S(y){for(const R in n){const F=n[R];if(F[y.id]===void 0)continue;const N=F[y.id];for(const B in N)d(N[B].object),delete N[B];delete F[y.id]}}function P(){M(),r=!0,o!==i&&(o=i,l(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function of(s,t,e){let n;function i(l){n=l}function o(l,d){s.drawArrays(n,l,d),e.update(d,n,1)}function r(l,d,u){u!==0&&(s.drawArraysInstanced(n,l,d,u),e.update(d,n,u))}function a(l,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];e.update(f,n,1)}function c(l,d,u,h){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x]*h[x];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rf(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==$e&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const P=S===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==xn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==pn&&!P)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:L,maxSamples:A}}function af(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new zn,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||o&&!m)o?d(null):l();else{const w=o?0:n,_=w*4;let v=p.clippingState||null;c.value=v,v=d(g,h,_,f);for(let L=0;L!==_;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)r.copy(u[_]).applyMatrix4(w,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function cf(s){let t=new WeakMap;function e(r,a){return a===Uo?r.mapping=mi:a===No&&(r.mapping=gi),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Uo||a===No)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new vh(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Pc extends Tc{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,pa=[.125,.215,.35,.446,.526,.582],Bn=20,uo=new Pc,ma=new _t;let fo=null,po=0,mo=0,go=!1;const On=(1+Math.sqrt(5))/2,ai=1/On,ga=[new C(-On,ai,0),new C(On,ai,0),new C(-ai,0,On),new C(ai,0,On),new C(0,On,-ai),new C(0,On,ai),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:qi,format:$e,colorSpace:wi,depthBuffer:!1},i=va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=va(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(o)),this._blurMaterial=hf(o,t,e)}return i}_compileMaterial(t){const e=new E(this._lodPlanes[0],t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,i){const a=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(ma),d.toneMapping=Cn,d.autoClear=!1;const f=new de({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new E(new it,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(ma),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;xs(i,w*_,p>2?_:0,_,_),d.setRenderTarget(i),x&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===mi||t.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_a());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new E(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;xs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ga[(i-o-1)%ga.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new E(this._lodPlanes[i],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Bn-1),x=o/g,m=isFinite(o)?1+Math.floor(d*x):Bn;m>Bn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const p=[];let w=0;for(let S=0;S<Bn;++S){const P=S/x,M=Math.exp(-P*P/2);p.push(M),S===0?w+=M:S<m&&(w+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/w;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const v=this._sizeLods[i],L=3*v*(i>_-li?i-_+li:0),A=4*(this._cubeSize-v);xs(e,L,A,3*v,2*v),c.setRenderTarget(e),c.render(u,uo)}}function lf(s){const t=[],e=[],n=[];let i=s;const o=s-li+1+pa.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-li?c=pa[r-s+li-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const S=A%3*2/3-1,P=A>2?0:-1,M=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];w.set(M,x*g*A),_.set(h,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const L=new ye;L.setAttribute("position",new Be(w,x)),L.setAttribute("uv",new Be(_,m)),L.setAttribute("faceIndex",new Be(v,p)),t.push(L),i>li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function va(s,t,e){const n=new Wn(s,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function hf(s,t,e){const n=new Float32Array(Bn),i=new C(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Er(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function _a(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Er(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function wa(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Er(){return`

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
	`}function df(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Uo||c===No,d=c===mi||c===gi;if(l||d){let u=t.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new xa(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||d&&f&&i(f)?(e===null&&(e=new xa(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function uf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ff(s,t,e,n){const i={},o=new WeakMap;function r(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",r),delete i[h.id];const f=o.get(h);f&&(t.remove(f),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const g in h)t.update(h[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function l(u){const h=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let _=0,v=w.length;_<v;_+=3){const L=w[_+0],A=w[_+1],S=w[_+2];h.push(L,A,A,S,S,L)}}else if(g!==void 0){const w=g.array;x=g.version;for(let _=0,v=w.length/3-1;_<v;_+=3){const L=_+0,A=_+1,S=_+2;h.push(L,A,A,S,S,L)}}else return;const m=new(xc(h)?Sc:bc)(h,1);m.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function d(u){const h=o.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function pf(s,t,e){let n;function i(h){n=h}let o,r;function a(h){o=h.type,r=h.bytesPerElement}function c(h,f){s.drawElements(n,f,o,h*r),e.update(f,n,1)}function l(h,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,h*r,g),e.update(f,n,g))}function d(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(h,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,h,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function mf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gf(s,t,e){const n=new WeakMap,i=new ce;function o(r,a,c){const l=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const S=new Float32Array(L*A*4*u),P=new _c(S,L,A,u);P.type=pn,P.needsUpdate=!0;const M=v*4;for(let R=0;R<u;R++){const F=p[R],N=w[R],B=_[R],W=L*A*4*R;for(let V=0;V<F.count;V++){const K=V*M;g===!0&&(i.fromBufferAttribute(F,V),S[W+K+0]=i.x,S[W+K+1]=i.y,S[W+K+2]=i.z,S[W+K+3]=0),x===!0&&(i.fromBufferAttribute(N,V),S[W+K+4]=i.x,S[W+K+5]=i.y,S[W+K+6]=i.z,S[W+K+7]=0),m===!0&&(i.fromBufferAttribute(B,V),S[W+K+8]=i.x,S[W+K+9]=i.y,S[W+K+10]=i.z,S[W+K+11]=B.itemSize===4?i.w:1)}}h={count:u,texture:P,size:new ht(L,A)},n.set(a,h),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:o}}function xf(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,d=c.geometry,u=t.get(c,d);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Rc extends Re{constructor(t,e,n,i,o,r,a,c,l,d=ui){if(d!==ui&&d!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ui&&(n=Vn),n===void 0&&d===vi&&(n=xi),super(null,i,o,r,a,c,d,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lc=new Re,ya=new Rc(1,1),Ic=new _c,Dc=new nh,Uc=new Ac,Ma=[],ba=[],Sa=new Float32Array(16),Ea=new Float32Array(9),Ta=new Float32Array(4);function bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Ma[i];if(o===void 0&&(o=new Float32Array(i),Ma[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Os(s,t){let e=ba[t];e===void 0&&(e=new Int32Array(t),ba[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function Mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(_e(e,n))return;Ta.set(n),s.uniformMatrix2fv(this.addr,!1,Ta),we(e,n)}}function bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(_e(e,n))return;Ea.set(n),s.uniformMatrix3fv(this.addr,!1,Ea),we(e,n)}}function Sf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(_e(e,n))return;Sa.set(n),s.uniformMatrix4fv(this.addr,!1,Sa),we(e,n)}}function Ef(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function Pf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function Df(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(ya.compareFunction=gc,o=ya):o=Lc,e.setTexture2D(t||o,i)}function Uf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dc,i)}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uc,i)}function Ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ic,i)}function zf(s){switch(s){case 5126:return vf;case 35664:return _f;case 35665:return wf;case 35666:return yf;case 35674:return Mf;case 35675:return bf;case 35676:return Sf;case 5124:case 35670:return Ef;case 35667:case 35671:return Tf;case 35668:case 35672:return Af;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Rf;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Ff}}function Of(s,t){s.uniform1fv(this.addr,t)}function kf(s,t){const e=bi(t,this.size,2);s.uniform2fv(this.addr,e)}function Bf(s,t){const e=bi(t,this.size,3);s.uniform3fv(this.addr,e)}function Gf(s,t){const e=bi(t,this.size,4);s.uniform4fv(this.addr,e)}function Hf(s,t){const e=bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vf(s,t){const e=bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wf(s,t){const e=bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xf(s,t){s.uniform1iv(this.addr,t)}function Yf(s,t){s.uniform2iv(this.addr,t)}function qf(s,t){s.uniform3iv(this.addr,t)}function Zf(s,t){s.uniform4iv(this.addr,t)}function $f(s,t){s.uniform1uiv(this.addr,t)}function jf(s,t){s.uniform2uiv(this.addr,t)}function Jf(s,t){s.uniform3uiv(this.addr,t)}function Kf(s,t){s.uniform4uiv(this.addr,t)}function Qf(s,t,e){const n=this.cache,i=t.length,o=Os(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Lc,o[r])}function tp(s,t,e){const n=this.cache,i=t.length,o=Os(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Dc,o[r])}function ep(s,t,e){const n=this.cache,i=t.length,o=Os(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Uc,o[r])}function np(s,t,e){const n=this.cache,i=t.length,o=Os(e,i);_e(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Ic,o[r])}function ip(s){switch(s){case 5126:return Of;case 35664:return kf;case 35665:return Bf;case 35666:return Gf;case 35674:return Hf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return Yf;case 35668:case 35672:return qf;case 35669:case 35673:return Zf;case 5125:return $f;case 36294:return jf;case 36295:return Jf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}class sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zf(e.type)}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ip(e.type)}}class rp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Aa(s,t){s.seq.push(t),s.map[t.id]=t}function ap(s,t,e){const n=s.name,i=n.length;for(xo.lastIndex=0;;){const o=xo.exec(n),r=xo.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Aa(e,l===void 0?new sp(a,s,t):new op(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new rp(a),Aa(e,u)),e=u}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);ap(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ca(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const cp=37297;let lp=0;function hp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Pa=new $t;function dp(s){ee._getMatrix(Pa,ee.workingColorSpace,s);const t=`mat3( ${Pa.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case Fs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ra(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+hp(s.getShaderSource(t),r)}else return i}function up(s,t){const e=dp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fp(s,t){let e;switch(t){case ml:e="Linear";break;case gl:e="Reinhard";break;case xl:e="Cineon";break;case ic:e="ACESFilmic";break;case _l:e="AgX";break;case wl:e="Neutral";break;case vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vs=new C;function pp(){ee.getLuminanceCoefficients(vs);const s=vs.x.toFixed(4),t=vs.y.toFixed(4),e=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function gp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Ii(s){return s!==""}function La(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ia(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function lr(s){return s.replace(vp,wp)}const _p=new Map;function wp(s,t){let e=jt[t];if(e===void 0){const n=_p.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lr(e)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(s){return s.replace(yp,Mp)}function Mp(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Ua(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function Sp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mi:case gi:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ep(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Tp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nc:t="ENVMAP_BLENDING_MULTIPLY";break;case fl:t="ENVMAP_BLENDING_MIX";break;case pl:t="ENVMAP_BLENDING_ADD";break}return t}function Ap(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cp(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=bp(e),l=Sp(e),d=Ep(e),u=Tp(e),h=Ap(e),f=mp(e),g=gp(o),x=i.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ii).join(`
`),p.length>0&&(p+=`
`)):(m=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),p=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,up("linearToOutputTexel",e.outputColorSpace),pp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),r=lr(r),r=La(r,e),r=Ia(r,e),a=lr(a),a=La(a,e),a=Ia(a,e),r=Da(r),a=Da(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=w+m+r,v=w+p+a,L=Ca(i,i.VERTEX_SHADER,_),A=Ca(i,i.FRAGMENT_SHADER,v);i.attachShader(x,L),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function S(R){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(A).trim();let W=!0,V=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,L,A);else{const K=Ra(i,L,"vertex"),X=Ra(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+K+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||B==="")&&(V=!1);V&&(R.diagnostics={runnable:W,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(L),i.deleteShader(A),P=new Ps(i,x),M=xp(i,x)}let P;this.getUniforms=function(){return P===void 0&&S(this),P};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,cp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}let Pp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lp(t),e.set(t,n)),n}}class Lp{constructor(t){this.id=Pp++,this.code=t,this.usedTimes=0}}function Ip(s,t,e,n,i,o,r){const a=new yc,c=new Rp,l=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,R,F,N){const B=F.fog,W=N.geometry,V=M.isMeshStandardMaterial?F.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),X=K&&K.mapping===Ns?K.image.height:null,ft=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=yt!==void 0?yt.length:0;let Xt=0;W.morphAttributes.position!==void 0&&(Xt=1),W.morphAttributes.normal!==void 0&&(Xt=2),W.morphAttributes.color!==void 0&&(Xt=3);let te,Z,rt,At;if(ft){const re=tn[ft];te=re.vertexShader,Z=re.fragmentShader}else te=M.vertexShader,Z=M.fragmentShader,c.update(M),rt=c.getVertexShaderID(M),At=c.getFragmentShaderID(M);const ct=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Vt=N.isInstancedMesh===!0,kt=N.isBatchedMesh===!0,Kt=!!M.map,Q=!!M.matcap,ot=!!K,D=!!M.aoMap,Rt=!!M.lightMap,nt=!!M.bumpMap,bt=!!M.normalMap,dt=!!M.displacementMap,Bt=!!M.emissiveMap,Et=!!M.metalnessMap,I=!!M.roughnessMap,b=M.anisotropy>0,k=M.clearcoat>0,q=M.dispersion>0,et=M.iridescence>0,$=M.sheen>0,Pt=M.transmission>0,gt=b&&!!M.anisotropyMap,wt=k&&!!M.clearcoatMap,Jt=k&&!!M.clearcoatNormalMap,st=k&&!!M.clearcoatRoughnessMap,Tt=et&&!!M.iridescenceMap,Gt=et&&!!M.iridescenceThicknessMap,pt=$&&!!M.sheenColorMap,tt=$&&!!M.sheenRoughnessMap,Ft=!!M.specularMap,Ct=!!M.specularColorMap,Yt=!!M.specularIntensityMap,U=Pt&&!!M.transmissionMap,at=Pt&&!!M.thicknessMap,Y=!!M.gradientMap,j=!!M.alphaMap,xt=M.alphaTest>0,mt=!!M.alphaHash,Wt=!!M.extensions;let le=Cn;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(le=s.toneMapping);const Ee={shaderID:ft,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:Z,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:At,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:kt,batchingColor:kt&&N._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&N.instanceColor!==null,instancingMorph:Vt&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:wi,alphaToCoverage:!!M.alphaToCoverage,map:Kt,matcap:Q,envMap:ot,envMapMode:ot&&K.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:Rt,bumpMap:nt,normalMap:bt,displacementMap:h&&dt,emissiveMap:Bt,normalMapObjectSpace:bt&&M.normalMapType===Sl,normalMapTangentSpace:bt&&M.normalMapType===mc,metalnessMap:Et,roughnessMap:I,anisotropy:b,anisotropyMap:gt,clearcoat:k,clearcoatMap:wt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:st,dispersion:q,iridescence:et,iridescenceMap:Tt,iridescenceThicknessMap:Gt,sheen:$,sheenColorMap:pt,sheenRoughnessMap:tt,specularMap:Ft,specularColorMap:Ct,specularIntensityMap:Yt,transmission:Pt,transmissionMap:U,thicknessMap:at,gradientMap:Y,opaque:M.transparent===!1&&M.blending===di&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:xt,alphaHash:mt,combine:M.combine,mapUv:Kt&&x(M.map.channel),aoMapUv:D&&x(M.aoMap.channel),lightMapUv:Rt&&x(M.lightMap.channel),bumpMapUv:nt&&x(M.bumpMap.channel),normalMapUv:bt&&x(M.normalMap.channel),displacementMapUv:dt&&x(M.displacementMap.channel),emissiveMapUv:Bt&&x(M.emissiveMap.channel),metalnessMapUv:Et&&x(M.metalnessMap.channel),roughnessMapUv:I&&x(M.roughnessMap.channel),anisotropyMapUv:gt&&x(M.anisotropyMap.channel),clearcoatMapUv:wt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(M.sheenRoughnessMap.channel),specularMapUv:Ft&&x(M.specularMap.channel),specularColorMapUv:Ct&&x(M.specularColorMap.channel),specularIntensityMapUv:Yt&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:at&&x(M.thicknessMap.channel),alphaMapUv:j&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(bt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Kt||j),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Xt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:Kt&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:Bt&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xe,flipSided:M.side===Pe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Wt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&M.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(y,M),_(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=g[M.type];let R;if(y){const F=tn[y];R=ph.clone(F.uniforms)}else R=M.uniforms;return R}function L(M,y){let R;for(let F=0,N=d.length;F<N;F++){const B=d[F];if(B.cacheKey===y){R=B,++R.usedTimes;break}}return R===void 0&&(R=new Cp(s,y,M,o),d.push(R)),R}function A(M){if(--M.usedTimes===0){const y=d.indexOf(M);d[y]=d[d.length-1],d.pop(),M.destroy()}}function S(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:A,releaseShaderCache:S,programs:d,dispose:P}}function Dp(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function Up(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Na(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Fa(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,h,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,h,f,g,x,m){const p=r(u,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,h,f,g,x,m){const p=r(u,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,h){e.length>1&&e.sort(u||Up),n.length>1&&n.sort(h||Na),i.length>1&&i.sort(h||Na)}function d(){for(let u=t,h=s.length;u<h;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:d,sort:l}}function Np(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Fa,s.set(n,[r])):i>=o.length?(r=new Fa,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Fp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new _t};break;case"SpotLight":e={position:new C,direction:new C,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Op=0;function kp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Bp(s){const t=new Fp,e=zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,o=new pe,r=new pe;function a(l){let d=0,u=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,_=0,v=0,L=0,A=0,S=0;l.sort(kp);for(let M=0,y=l.length;M<y;M++){const R=l[M],F=R.color,N=R.intensity,B=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=F.r*N,u+=F.g*N,h+=F.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);S++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,X=e.get(R);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=R.shadow.matrix,w++}n.directional[f]=V,f++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(F).multiplyScalar(N),V.distance=B,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[x]=V;const K=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,K.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[x]=K.matrix,R.castShadow){const X=e.get(R);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=W,v++}x++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(F).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const K=R.shadow,X=e.get(R);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=S,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=S,n.version=Op++)}function c(l,d){let u=0,h=0,f=0,g=0,x=0;const m=d.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const _=l[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(_.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function za(s){const t=new Bp(s),e=[],n=[];function i(d){l.camera=d,e.length=0,n.length=0}function o(d){e.push(d)}function r(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Gp(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new za(s),t.set(i,[a])):o>=r.length?(a=new za(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Hp extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vp extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yp(s,t,e){let n=new Sr;const i=new ht,o=new ht,r=new ce,a=new Hp({depthPacking:bl}),c=new Vp,l={},d=e.maxTextureSize,u={[Pn]:Pe,[Pe]:Pn,[xe]:xe},h=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Wp,fragmentShader:Xp}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new E(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let p=this.type;this.render=function(A,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(An),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==un&&this.type===un,B=p===un&&this.type!==un;for(let W=0,V=A.length;W<V;W++){const K=A[W],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ft=X.getFrameExtents();if(i.multiply(ft),o.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/ft.x),i.x=o.x*ft.x,X.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/ft.y),i.y=o.y*ft.y,X.mapSize.y=o.y)),X.map===null||N===!0||B===!0){const St=this.type!==un?{minFilter:Je,magFilter:Je}:{};X.map!==null&&X.map.dispose(),X.map=new Wn(i.x,i.y,St),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const yt=X.getViewportCount();for(let St=0;St<yt;St++){const Xt=X.getViewport(St);r.set(o.x*Xt.x,o.y*Xt.y,o.x*Xt.z,o.y*Xt.w),F.viewport(r),X.updateMatrices(K,St),n=X.getFrustum(),v(S,P,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===un&&w(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,R)};function w(A,S){const P=t.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wn(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(S,null,P,h,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(S,null,P,f,x,null)}function _(A,S,P,M){let y=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=y.uuid,N=S.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let W=B[N];W===void 0&&(W=y.clone(),B[N]=W,S.addEventListener("dispose",L)),y=W}if(y.visible=S.visible,y.wireframe=S.wireframe,M===un?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:u[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=P}return y}function v(A,S,P,M,y){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=t.update(A),B=A.material;if(Array.isArray(B)){const W=N.groups;for(let V=0,K=W.length;V<K;V++){const X=W[V],ft=B[X.materialIndex];if(ft&&ft.visible){const yt=_(A,ft,M,y);A.onBeforeShadow(s,A,S,P,N,yt,X),s.renderBufferDirect(P,null,N,yt,A,X),A.onAfterShadow(s,A,S,P,N,yt,X)}}}else if(B.visible){const W=_(A,B,M,y);A.onBeforeShadow(s,A,S,P,N,W,null),s.renderBufferDirect(P,null,N,W,A,null),A.onAfterShadow(s,A,S,P,N,W,null)}}const F=A.children;for(let N=0,B=F.length;N<B;N++)v(F[N],S,P,M,y)}function L(A){A.target.removeEventListener("dispose",L);for(const P in l){const M=l[P],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const qp={[Ao]:Co,[Po]:Io,[Ro]:Do,[pi]:Lo,[Co]:Ao,[Io]:Po,[Do]:Ro,[Lo]:pi};function Zp(s,t){function e(){let U=!1;const at=new ce;let Y=null;const j=new ce(0,0,0,0);return{setMask:function(xt){Y!==xt&&!U&&(s.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){U=xt},setClear:function(xt,mt,Wt,le,Ee){Ee===!0&&(xt*=le,mt*=le,Wt*=le),at.set(xt,mt,Wt,le),j.equals(at)===!1&&(s.clearColor(xt,mt,Wt,le),j.copy(at))},reset:function(){U=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let U=!1,at=!1,Y=null,j=null,xt=null;return{setReversed:function(mt){if(at!==mt){const Wt=t.get("EXT_clip_control");at?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const le=xt;xt=null,this.setClear(le)}at=mt},getReversed:function(){return at},setTest:function(mt){mt?ct(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(mt){Y!==mt&&!U&&(s.depthMask(mt),Y=mt)},setFunc:function(mt){if(at&&(mt=qp[mt]),j!==mt){switch(mt){case Ao:s.depthFunc(s.NEVER);break;case Co:s.depthFunc(s.ALWAYS);break;case Po:s.depthFunc(s.LESS);break;case pi:s.depthFunc(s.LEQUAL);break;case Ro:s.depthFunc(s.EQUAL);break;case Lo:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Do:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=mt}},setLocked:function(mt){U=mt},setClear:function(mt){xt!==mt&&(at&&(mt=1-mt),s.clearDepth(mt),xt=mt)},reset:function(){U=!1,Y=null,j=null,xt=null,at=!1}}}function i(){let U=!1,at=null,Y=null,j=null,xt=null,mt=null,Wt=null,le=null,Ee=null;return{setTest:function(re){U||(re?ct(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(re){at!==re&&!U&&(s.stencilMask(re),at=re)},setFunc:function(re,Ve,on){(Y!==re||j!==Ve||xt!==on)&&(s.stencilFunc(re,Ve,on),Y=re,j=Ve,xt=on)},setOp:function(re,Ve,on){(mt!==re||Wt!==Ve||le!==on)&&(s.stencilOp(re,Ve,on),mt=re,Wt=Ve,le=on)},setLocked:function(re){U=re},setClear:function(re){Ee!==re&&(s.clearStencil(re),Ee=re)},reset:function(){U=!1,at=null,Y=null,j=null,xt=null,mt=null,Wt=null,le=null,Ee=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,_=null,v=null,L=null,A=null,S=new _t(0,0,0),P=0,M=!1,y=null,R=null,F=null,N=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=K>=2);let ft=null,yt={};const St=s.getParameter(s.SCISSOR_BOX),Xt=s.getParameter(s.VIEWPORT),te=new ce().fromArray(St),Z=new ce().fromArray(Xt);function rt(U,at,Y,j){const xt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(U,mt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<Y;Wt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(at+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return mt}const At={};At[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),r.setFunc(pi),nt(!1),bt(Gr),ct(s.CULL_FACE),D(An);function ct(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function Nt(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function Vt(U,at){return u[U]!==at?(s.bindFramebuffer(U,at),u[U]=at,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function kt(U,at){let Y=f,j=!1;if(U){Y=h.get(at),Y===void 0&&(Y=[],h.set(at,Y));const xt=U.textures;if(Y.length!==xt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Wt=xt.length;mt<Wt;mt++)Y[mt]=s.COLOR_ATTACHMENT0+mt;Y.length=xt.length,j=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,j=!0);j&&s.drawBuffers(Y)}function Kt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const Q={[kn]:s.FUNC_ADD,[jc]:s.FUNC_SUBTRACT,[Jc]:s.FUNC_REVERSE_SUBTRACT};Q[Kc]=s.MIN,Q[Qc]=s.MAX;const ot={[tl]:s.ZERO,[el]:s.ONE,[nl]:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,[cl]:s.SRC_ALPHA_SATURATE,[rl]:s.DST_COLOR,[sl]:s.DST_ALPHA,[il]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[al]:s.ONE_MINUS_DST_COLOR,[ol]:s.ONE_MINUS_DST_ALPHA,[ll]:s.CONSTANT_COLOR,[hl]:s.ONE_MINUS_CONSTANT_COLOR,[dl]:s.CONSTANT_ALPHA,[ul]:s.ONE_MINUS_CONSTANT_ALPHA};function D(U,at,Y,j,xt,mt,Wt,le,Ee,re){if(U===An){x===!0&&(Nt(s.BLEND),x=!1);return}if(x===!1&&(ct(s.BLEND),x=!0),U!==$c){if(U!==m||re!==M){if((p!==kn||v!==kn)&&(s.blendEquation(s.FUNC_ADD),p=kn,v=kn),re)switch(U){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.ONE,s.ONE);break;case Hr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,_=null,L=null,A=null,S.set(0,0,0),P=0,m=U,M=re}return}xt=xt||at,mt=mt||Y,Wt=Wt||j,(at!==p||xt!==v)&&(s.blendEquationSeparate(Q[at],Q[xt]),p=at,v=xt),(Y!==w||j!==_||mt!==L||Wt!==A)&&(s.blendFuncSeparate(ot[Y],ot[j],ot[mt],ot[Wt]),w=Y,_=j,L=mt,A=Wt),(le.equals(S)===!1||Ee!==P)&&(s.blendColor(le.r,le.g,le.b,Ee),S.copy(le),P=Ee),m=U,M=!1}function Rt(U,at){U.side===xe?Nt(s.CULL_FACE):ct(s.CULL_FACE);let Y=U.side===Pe;at&&(Y=!Y),nt(Y),U.blending===di&&U.transparent===!1?D(An):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),o.setMask(U.colorWrite);const j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function bt(U){U!==qc?(ct(s.CULL_FACE),U!==R&&(U===Gr?s.cullFace(s.BACK):U===Zc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),R=U}function dt(U){U!==F&&(V&&s.lineWidth(U),F=U)}function Bt(U,at,Y){U?(ct(s.POLYGON_OFFSET_FILL),(N!==at||B!==Y)&&(s.polygonOffset(at,Y),N=at,B=Y)):Nt(s.POLYGON_OFFSET_FILL)}function Et(U){U?ct(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function I(U){U===void 0&&(U=s.TEXTURE0+W-1),ft!==U&&(s.activeTexture(U),ft=U)}function b(U,at,Y){Y===void 0&&(ft===null?Y=s.TEXTURE0+W-1:Y=ft);let j=yt[Y];j===void 0&&(j={type:void 0,texture:void 0},yt[Y]=j),(j.type!==U||j.texture!==at)&&(ft!==Y&&(s.activeTexture(Y),ft=Y),s.bindTexture(U,at||At[U]),j.type=U,j.texture=at)}function k(){const U=yt[ft];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(U){te.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function tt(U){Z.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Ft(U,at){let Y=l.get(at);Y===void 0&&(Y=new WeakMap,l.set(at,Y));let j=Y.get(U);j===void 0&&(j=s.getUniformBlockIndex(at,U.name),Y.set(U,j))}function Ct(U,at){const j=l.get(at).get(U);c.get(at)!==j&&(s.uniformBlockBinding(at,j,U.__bindingPointIndex),c.set(at,j))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ft=null,yt={},u={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,_=null,v=null,L=null,A=null,S=new _t(0,0,0),P=0,M=!1,y=null,R=null,F=null,N=null,B=null,te.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ct,disable:Nt,bindFramebuffer:Vt,drawBuffers:kt,useProgram:Kt,setBlending:D,setMaterial:Rt,setFlipSided:nt,setCullFace:bt,setLineWidth:dt,setPolygonOffset:Bt,setScissorTest:Et,activeTexture:I,bindTexture:b,unbindTexture:k,compressedTexImage2D:q,compressedTexImage3D:et,texImage2D:Tt,texImage3D:Gt,updateUBOMapping:Ft,uniformBlockBinding:Ct,texStorage2D:Jt,texStorage3D:st,texSubImage2D:$,texSubImage3D:Pt,compressedTexSubImage2D:gt,compressedTexSubImage3D:wt,scissor:pt,viewport:tt,reset:Yt}}function Oa(s,t,e,n){const i=$p(n);switch(e){case cc:return s*t;case hc:return s*t;case dc:return s*t*2;case uc:return s*t/i.components*i.byteLength;case wr:return s*t/i.components*i.byteLength;case fc:return s*t*2/i.components*i.byteLength;case yr:return s*t*2/i.components*i.byteLength;case lc:return s*t*3/i.components*i.byteLength;case $e:return s*t*4/i.components*i.byteLength;case Mr:return s*t*4/i.components*i.byteLength;case Ss:case Es:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ts:case As:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:case Bo:return Math.max(s,16)*Math.max(t,8)/4;case zo:case ko:return Math.max(s,8)*Math.max(t,8)/2;case Go:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case tr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case er:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case nr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ir:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Cs:case sr:case or:return Math.ceil(s/4)*Math.ceil(t/4)*16;case pc:case rr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ar:case cr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $p(s){switch(s){case xn:case oc:return{byteLength:1,components:1};case Bi:case rc:case qi:return{byteLength:2,components:1};case vr:case _r:return{byteLength:2,components:4};case Vn:case xr:case pn:return{byteLength:4,components:1};case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jp(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return f?new OffscreenCanvas(I,b):Hi("canvas")}function x(I,b,k){let q=1;const et=Et(I);if((et.width>k||et.height>k)&&(q=k/Math.max(et.width,et.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(q*et.width),Pt=Math.floor(q*et.height);u===void 0&&(u=g($,Pt));const gt=b?g($,Pt):u;return gt.width=$,gt.height=Pt,gt.getContext("2d").drawImage(I,0,0,$,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+$+"x"+Pt+")."),gt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(I,b,k,q,et=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=b;if(b===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),b===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),b===s.RGBA){const Pt=et?Fs:ee.getTransfer(q);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=Pt===ae?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(I,b){let k;return I?b===null||b===Vn||b===xi?k=s.DEPTH24_STENCIL8:b===pn?k=s.DEPTH32F_STENCIL8:b===Bi&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vn||b===xi?k=s.DEPTH_COMPONENT24:b===pn?k=s.DEPTH_COMPONENT32F:b===Bi&&(k=s.DEPTH_COMPONENT16),k}function L(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Je&&I.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function A(I){const b=I.target;b.removeEventListener("dispose",A),P(b),b.isVideoTexture&&d.delete(b)}function S(I){const b=I.target;b.removeEventListener("dispose",S),y(b)}function P(I){const b=n.get(I);if(b.__webglInit===void 0)return;const k=I.source,q=h.get(k);if(q){const et=q[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(I),Object.keys(q).length===0&&h.delete(k)}n.remove(I)}function M(I){const b=n.get(I);s.deleteTexture(b.__webglTexture);const k=I.source,q=h.get(k);delete q[b.__cacheKey],r.memory.textures--}function y(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let et=0;et<b.__webglFramebuffer[q].length;et++)s.deleteFramebuffer(b.__webglFramebuffer[q][et]);else s.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)s.deleteFramebuffer(b.__webglFramebuffer[q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=I.textures;for(let q=0,et=k.length;q<et;q++){const $=n.get(k[q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(k[q])}n.remove(I)}let R=0;function F(){R=0}function N(){const I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function B(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function W(I,b){const k=n.get(I);if(I.isVideoTexture&&dt(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){const q=I.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,I,b);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function V(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){Z(k,I,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function K(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){Z(k,I,b);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function X(I,b){const k=n.get(I);if(I.version>0&&k.__version!==I.version){rt(k,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const ft={[ki]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[Fo]:s.MIRRORED_REPEAT},yt={[Je]:s.NEAREST,[yl]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Ws]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},St={[El]:s.NEVER,[Ll]:s.ALWAYS,[Tl]:s.LESS,[gc]:s.LEQUAL,[Al]:s.EQUAL,[Rl]:s.GEQUAL,[Cl]:s.GREATER,[Pl]:s.NOTEQUAL};function Xt(I,b){if(b.type===pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Ws||b.magFilter===Ki||b.magFilter===Hn||b.minFilter===en||b.minFilter===Ws||b.minFilter===Ki||b.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ft[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ft[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ft[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,yt[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Je||b.minFilter!==Ki&&b.minFilter!==Hn||b.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function te(I,b){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",A));const q=b.source;let et=h.get(q);et===void 0&&(et={},h.set(q,et));const $=B(b);if($!==I.__cacheKey){et[$]===void 0&&(et[$]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),et[$].usedTimes++;const Pt=et[I.__cacheKey];Pt!==void 0&&(et[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&M(b)),I.__cacheKey=$,I.__webglTexture=et[$].texture}return k}function Z(I,b,k){let q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=s.TEXTURE_3D);const et=te(I,b),$=b.source;e.bindTexture(q,I.__webglTexture,s.TEXTURE0+k);const Pt=n.get($);if($.version!==Pt.__version||et===!0){e.activeTexture(s.TEXTURE0+k);const gt=ee.getPrimaries(ee.workingColorSpace),wt=b.colorSpace===Tn?null:ee.getPrimaries(b.colorSpace),Jt=b.colorSpace===Tn||gt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let st=x(b.image,!1,i.maxTextureSize);st=Bt(b,st);const Tt=o.convert(b.format,b.colorSpace),Gt=o.convert(b.type);let pt=_(b.internalFormat,Tt,Gt,b.colorSpace,b.isVideoTexture);Xt(q,b);let tt;const Ft=b.mipmaps,Ct=b.isVideoTexture!==!0,Yt=Pt.__version===void 0||et===!0,U=$.dataReady,at=L(b,st);if(b.isDepthTexture)pt=v(b.format===vi,b.type),Yt&&(Ct?e.texStorage2D(s.TEXTURE_2D,1,pt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,pt,st.width,st.height,0,Tt,Gt,null));else if(b.isDataTexture)if(Ft.length>0){Ct&&Yt&&e.texStorage2D(s.TEXTURE_2D,at,pt,Ft[0].width,Ft[0].height);for(let Y=0,j=Ft.length;Y<j;Y++)tt=Ft[Y],Ct?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,tt.width,tt.height,Tt,Gt,tt.data):e.texImage2D(s.TEXTURE_2D,Y,pt,tt.width,tt.height,0,Tt,Gt,tt.data);b.generateMipmaps=!1}else Ct?(Yt&&e.texStorage2D(s.TEXTURE_2D,at,pt,st.width,st.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Tt,Gt,st.data)):e.texImage2D(s.TEXTURE_2D,0,pt,st.width,st.height,0,Tt,Gt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ct&&Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,pt,Ft[0].width,Ft[0].height,st.depth);for(let Y=0,j=Ft.length;Y<j;Y++)if(tt=Ft[Y],b.format!==$e)if(Tt!==null)if(Ct){if(U)if(b.layerUpdates.size>0){const xt=Oa(tt.width,tt.height,b.format,b.type);for(const mt of b.layerUpdates){const Wt=tt.data.subarray(mt*xt/tt.data.BYTES_PER_ELEMENT,(mt+1)*xt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,mt,tt.width,tt.height,1,Tt,Wt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,tt.width,tt.height,st.depth,Tt,tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,pt,tt.width,tt.height,st.depth,0,tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,tt.width,tt.height,st.depth,Tt,Gt,tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,pt,tt.width,tt.height,st.depth,0,Tt,Gt,tt.data)}else{Ct&&Yt&&e.texStorage2D(s.TEXTURE_2D,at,pt,Ft[0].width,Ft[0].height);for(let Y=0,j=Ft.length;Y<j;Y++)tt=Ft[Y],b.format!==$e?Tt!==null?Ct?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,tt.width,tt.height,Tt,tt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,pt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,tt.width,tt.height,Tt,Gt,tt.data):e.texImage2D(s.TEXTURE_2D,Y,pt,tt.width,tt.height,0,Tt,Gt,tt.data)}else if(b.isDataArrayTexture)if(Ct){if(Yt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,pt,st.width,st.height,st.depth),U)if(b.layerUpdates.size>0){const Y=Oa(st.width,st.height,b.format,b.type);for(const j of b.layerUpdates){const xt=st.data.subarray(j*Y/st.data.BYTES_PER_ELEMENT,(j+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,Tt,Gt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Tt,Gt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,pt,st.width,st.height,st.depth,0,Tt,Gt,st.data);else if(b.isData3DTexture)Ct?(Yt&&e.texStorage3D(s.TEXTURE_3D,at,pt,st.width,st.height,st.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Tt,Gt,st.data)):e.texImage3D(s.TEXTURE_3D,0,pt,st.width,st.height,st.depth,0,Tt,Gt,st.data);else if(b.isFramebufferTexture){if(Yt)if(Ct)e.texStorage2D(s.TEXTURE_2D,at,pt,st.width,st.height);else{let Y=st.width,j=st.height;for(let xt=0;xt<at;xt++)e.texImage2D(s.TEXTURE_2D,xt,pt,Y,j,0,Tt,Gt,null),Y>>=1,j>>=1}}else if(Ft.length>0){if(Ct&&Yt){const Y=Et(Ft[0]);e.texStorage2D(s.TEXTURE_2D,at,pt,Y.width,Y.height)}for(let Y=0,j=Ft.length;Y<j;Y++)tt=Ft[Y],Ct?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Tt,Gt,tt):e.texImage2D(s.TEXTURE_2D,Y,pt,Tt,Gt,tt);b.generateMipmaps=!1}else if(Ct){if(Yt){const Y=Et(st);e.texStorage2D(s.TEXTURE_2D,at,pt,Y.width,Y.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Gt,st)}else e.texImage2D(s.TEXTURE_2D,0,pt,Tt,Gt,st);m(b)&&p(q),Pt.__version=$.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function rt(I,b,k){if(b.image.length!==6)return;const q=te(I,b),et=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+k);const $=n.get(et);if(et.version!==$.__version||q===!0){e.activeTexture(s.TEXTURE0+k);const Pt=ee.getPrimaries(ee.workingColorSpace),gt=b.colorSpace===Tn?null:ee.getPrimaries(b.colorSpace),wt=b.colorSpace===Tn||Pt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let j=0;j<6;j++)!Jt&&!st?Tt[j]=x(b.image[j],!0,i.maxCubemapSize):Tt[j]=st?b.image[j].image:b.image[j],Tt[j]=Bt(b,Tt[j]);const Gt=Tt[0],pt=o.convert(b.format,b.colorSpace),tt=o.convert(b.type),Ft=_(b.internalFormat,pt,tt,b.colorSpace),Ct=b.isVideoTexture!==!0,Yt=$.__version===void 0||q===!0,U=et.dataReady;let at=L(b,Gt);Xt(s.TEXTURE_CUBE_MAP,b);let Y;if(Jt){Ct&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Ft,Gt.width,Gt.height);for(let j=0;j<6;j++){Y=Tt[j].mipmaps;for(let xt=0;xt<Y.length;xt++){const mt=Y[xt];b.format!==$e?pt!==null?Ct?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,Ft,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,0,0,mt.width,mt.height,pt,tt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt,Ft,mt.width,mt.height,0,pt,tt,mt.data)}}}else{if(Y=b.mipmaps,Ct&&Yt){Y.length>0&&at++;const j=Et(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Ft,j.width,j.height)}for(let j=0;j<6;j++)if(st){Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt[j].width,Tt[j].height,pt,tt,Tt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ft,Tt[j].width,Tt[j].height,0,pt,tt,Tt[j].data);for(let xt=0;xt<Y.length;xt++){const Wt=Y[xt].image[j].image;Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,Wt.width,Wt.height,pt,tt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,Ft,Wt.width,Wt.height,0,pt,tt,Wt.data)}}else{Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt,tt,Tt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ft,pt,tt,Tt[j]);for(let xt=0;xt<Y.length;xt++){const mt=Y[xt];Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,0,0,pt,tt,mt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt+1,Ft,pt,tt,mt.image[j])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),$.__version=et.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function At(I,b,k,q,et,$){const Pt=o.convert(k.format,k.colorSpace),gt=o.convert(k.type),wt=_(k.internalFormat,Pt,gt,k.colorSpace),Jt=n.get(b),st=n.get(k);if(st.__renderTarget=b,!Jt.__hasExternalTextures){const Tt=Math.max(1,b.width>>$),Gt=Math.max(1,b.height>>$);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,$,wt,Tt,Gt,b.depth,0,Pt,gt,null):e.texImage2D(et,$,wt,Tt,Gt,0,Pt,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),bt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,et,st.__webglTexture,0,nt(b)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,et,st.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(I,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const q=b.depthTexture,et=q&&q.isDepthTexture?q.type:null,$=v(b.stencilBuffer,et),Pt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=nt(b);bt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,$,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,I)}else{const q=b.textures;for(let et=0;et<q.length;et++){const $=q[et],Pt=o.convert($.format,$.colorSpace),gt=o.convert($.type),wt=_($.internalFormat,Pt,gt,$.colorSpace),Jt=nt(b);k&&bt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,wt,b.width,b.height):bt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,wt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,wt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const et=q.__webglTexture,$=nt(b);if(b.depthTexture.format===ui)bt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(b.depthTexture.format===vi)bt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Vt(I){const b=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",et)};q.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=q}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Nt(b.__webglFramebuffer,I)}else if(k){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=s.createRenderbuffer(),ct(b.__webglDepthbuffer[q],I,!1);else{const et=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ct(b.__webglDepthbuffer,I,!1);else{const q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(I,b,k){const q=n.get(I);b!==void 0&&At(q.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Vt(I)}function Kt(I){const b=I.texture,k=n.get(I),q=n.get(b);I.addEventListener("dispose",S);const et=I.textures,$=I.isWebGLCubeRenderTarget===!0,Pt=et.length>1;if(Pt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=b.version,r.memory.textures++),$){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let wt=0;wt<b.mipmaps.length;wt++)k.__webglFramebuffer[gt][wt]=s.createFramebuffer()}else k.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)k.__webglFramebuffer[gt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let gt=0,wt=et.length;gt<wt;gt++){const Jt=n.get(et[gt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(I.samples>0&&bt(I)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<et.length;gt++){const wt=et[gt];k.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);const Jt=o.convert(wt.format,wt.colorSpace),st=o.convert(wt.type),Tt=_(wt.internalFormat,Jt,st,wt.colorSpace,I.isXRRenderTarget===!0),Gt=nt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,Tt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)At(k.__webglFramebuffer[gt][wt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt);else At(k.__webglFramebuffer[gt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let gt=0,wt=et.length;gt<wt;gt++){const Jt=et[gt],st=n.get(Jt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Xt(s.TEXTURE_2D,Jt),At(k.__webglFramebuffer,I,Jt,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,q.__webglTexture),Xt(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)At(k.__webglFramebuffer[wt],I,b,s.COLOR_ATTACHMENT0,gt,wt);else At(k.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,gt,0);m(b)&&p(gt),e.unbindTexture()}I.depthBuffer&&Vt(I)}function Q(I){const b=I.textures;for(let k=0,q=b.length;k<q;k++){const et=b[k];if(m(et)){const $=w(I),Pt=n.get(et).__webglTexture;e.bindTexture($,Pt),p($),e.unbindTexture()}}}const ot=[],D=[];function Rt(I){if(I.samples>0){if(bt(I)===!1){const b=I.textures,k=I.width,q=I.height;let et=s.COLOR_BUFFER_BIT;const $=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=n.get(I),gt=b.length>1;if(gt)for(let wt=0;wt<b.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let wt=0;wt<b.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[wt]);const Jt=n.get(b[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,k,q,0,0,k,q,et,s.NEAREST),c===!0&&(ot.length=0,D.length=0,ot.push(s.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ot.push($),D.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<b.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[wt]);const Jt=n.get(b[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function nt(I){return Math.min(i.maxSamples,I.samples)}function bt(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(I){const b=r.render.frame;d.get(I)!==b&&(d.set(I,b),I.update())}function Bt(I,b){const k=I.colorSpace,q=I.format,et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==wi&&k!==Tn&&(ee.getTransfer(k)===ae?(q!==$e||et!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Et(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=bt}function Jp(s,t){function e(n,i=Tn){let o;const r=ee.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===vr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_r)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return s.BYTE;if(n===rc)return s.SHORT;if(n===Bi)return s.UNSIGNED_SHORT;if(n===xr)return s.INT;if(n===Vn)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===cc)return s.ALPHA;if(n===lc)return s.RGB;if(n===$e)return s.RGBA;if(n===hc)return s.LUMINANCE;if(n===dc)return s.LUMINANCE_ALPHA;if(n===ui)return s.DEPTH_COMPONENT;if(n===vi)return s.DEPTH_STENCIL;if(n===uc)return s.RED;if(n===wr)return s.RED_INTEGER;if(n===fc)return s.RG;if(n===yr)return s.RG_INTEGER;if(n===Mr)return s.RGBA_INTEGER;if(n===Ss||n===Es||n===Ts||n===As)if(r===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ss)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ss)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===Oo||n===ko||n===Bo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===zo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Ho||n===Vo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Go||n===Ho)return r===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Vo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===$o||n===jo||n===Jo||n===Ko||n===Qo||n===tr||n===er||n===nr||n===ir)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Wo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tr)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===er)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nr)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ir)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cs||n===sr||n===or)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Cs)return r===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===or)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===rr||n===ar||n===cr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Cs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===rr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ar)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Kp extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ut extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qp={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,em=`
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

}`;class nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ke({vertexShader:tm,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new E(new ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class im extends yi{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,g=null;const x=new nm,m=e.getContextAttributes();let p=null,w=null;const _=[],v=[],L=new ht;let A=null;const S=new Oe;S.viewport=new ce;const P=new Oe;P.viewport=new ce;const M=[S,P],y=new Kp;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=_[Z];return rt===void 0&&(rt=new vo,_[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=_[Z];return rt===void 0&&(rt=new vo,_[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=_[Z];return rt===void 0&&(rt=new vo,_[Z]=rt),rt.getHandSpace()};function N(Z){const rt=v.indexOf(Z.inputSource);if(rt===-1)return;const At=_[rt];At!==void 0&&(At.update(Z.inputSource,Z.frame,l||r),At.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<_.length;Z++){const rt=v[Z];rt!==null&&(v[Z]=null,_[Z].disconnect(rt))}R=null,F=null,x.reset(),t.setRenderTarget(p),f=null,h=null,u=null,i=null,w=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Wn(f.framebufferWidth,f.framebufferHeight,{format:$e,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,At=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?vi:ui,At=m.stencil?xi:Vn);const Nt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:o};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(Nt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),w=new Wn(h.textureWidth,h.textureHeight,{format:$e,type:xn,depthTexture:new Rc(h.textureWidth,h.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Z){for(let rt=0;rt<Z.removed.length;rt++){const At=Z.removed[rt],ct=v.indexOf(At);ct>=0&&(v[ct]=null,_[ct].disconnect(At))}for(let rt=0;rt<Z.added.length;rt++){const At=Z.added[rt];let ct=v.indexOf(At);if(ct===-1){for(let Vt=0;Vt<_.length;Vt++)if(Vt>=v.length){v.push(At),ct=Vt;break}else if(v[Vt]===null){v[Vt]=At,ct=Vt;break}if(ct===-1)break}const Nt=_[ct];Nt&&Nt.connect(At)}}const V=new C,K=new C;function X(Z,rt,At){V.setFromMatrixPosition(rt.matrixWorld),K.setFromMatrixPosition(At.matrixWorld);const ct=V.distanceTo(K),Nt=rt.projectionMatrix.elements,Vt=At.projectionMatrix.elements,kt=Nt[14]/(Nt[10]-1),Kt=Nt[14]/(Nt[10]+1),Q=(Nt[9]+1)/Nt[5],ot=(Nt[9]-1)/Nt[5],D=(Nt[8]-1)/Nt[0],Rt=(Vt[8]+1)/Vt[0],nt=kt*D,bt=kt*Rt,dt=ct/(-D+Rt),Bt=dt*-D;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Bt),Z.translateZ(dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Et=kt+dt,I=Kt+dt,b=nt-Bt,k=bt+(ct-Bt),q=Q*Kt/I*Et,et=ot*Kt/I*Et;Z.projectionMatrix.makePerspective(b,k,q,et,Et,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ft(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let rt=Z.near,At=Z.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(At=x.depthFar)),y.near=P.near=S.near=rt,y.far=P.far=S.far=At,(R!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,F=y.far),S.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,y.layers.mask=S.layers.mask|P.layers.mask;const ct=Z.parent,Nt=y.cameras;ft(y,ct);for(let Vt=0;Vt<Nt.length;Vt++)ft(Nt[Vt],ct);Nt.length===2?X(y,S,P):y.projectionMatrix.copy(S.projectionMatrix),yt(Z,y,ct)};function yt(Z,rt,At){At===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(At.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let St=null;function Xt(Z,rt){if(d=rt.getViewerPose(l||r),g=rt,d!==null){const At=d.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ct=!1;At.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let Vt=0;Vt<At.length;Vt++){const kt=At[Vt];let Kt=null;if(f!==null)Kt=f.getViewport(kt);else{const ot=u.getViewSubImage(h,kt);Kt=ot.viewport,Vt===0&&(t.setRenderTargetTextures(w,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(w))}let Q=M[Vt];Q===void 0&&(Q=new Oe,Q.layers.enable(Vt),Q.viewport=new ce,M[Vt]=Q),Q.matrix.fromArray(kt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(kt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Vt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(Q)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Vt=u.getDepthInformation(At[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,i.renderState)}}for(let At=0;At<_.length;At++){const ct=v[At],Nt=_[At];ct!==null&&Nt!==void 0&&Nt.update(ct,rt,l||r)}St&&St(Z,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const te=new Cc;te.setAnimationLoop(Xt),this.setAnimationLoop=function(Z){St=Z},this.dispose=function(){}}}const Fn=new nn,sm=new pe;function om(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ec(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),_=w.envMap,v=w.envMapRotation;_&&(m.envMap.value=_,Fn.copy(v),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(sm.makeRotationFromEuler(Fn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rm(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,_){const v=_.program;n.uniformBlockBinding(w,v)}function l(w,_){let v=i[w.id];v===void 0&&(g(w),v=d(w),i[w.id]=v,w.addEventListener("dispose",m));const L=_.program;n.updateUBOMapping(w,L);const A=t.render.frame;o[w.id]!==A&&(h(w),o[w.id]=A)}function d(w){const _=u();w.__bindingPointIndex=_;const v=s.createBuffer(),L=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const _=i[w.id],v=w.uniforms,L=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,S=v.length;A<S;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,y=P.length;M<y;M++){const R=P[M];if(f(R,A,M,L)===!0){const F=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let W=0;W<N.length;W++){const V=N[W],K=x(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+B,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,_,v,L){const A=w.value,S=_+"_"+v;if(L[S]===void 0)return typeof A=="number"||typeof A=="boolean"?L[S]=A:L[S]=A.clone(),!0;{const P=L[S];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[S]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(w){const _=w.uniforms;let v=0;const L=16;for(let S=0,P=_.length;S<P;S++){const M=Array.isArray(_[S])?_[S]:[_[S]];for(let y=0,R=M.length;y<R;y++){const F=M[y],N=Array.isArray(F.value)?F.value:[F.value];for(let B=0,W=N.length;B<W;B++){const V=N[B],K=x(V),X=v%L,ft=X%K.boundary,yt=X+ft;v+=ft,yt!==0&&L-yt<K.storage&&(v+=L-yt),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=K.storage}}}const A=v%L;return A>0&&(v+=L-A),w.__size=v,w.__cache={},this}function x(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){const _=w.target;_.removeEventListener("dispose",m);const v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);r=[],i={},o={}}return{bind:c,update:l,dispose:p}}class am{constructor(t={}){const{canvas:e=Zl(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Cn,this.toneMappingExposure=1;const v=this;let L=!1,A=0,S=0,P=null,M=-1,y=null;const R=new ce,F=new ce;let N=null;const B=new _t(0);let W=0,V=e.width,K=e.height,X=1,ft=null,yt=null;const St=new ce(0,0,V,K),Xt=new ce(0,0,V,K);let te=!1;const Z=new Sr;let rt=!1,At=!1;const ct=new pe,Nt=new pe,Vt=new C,kt=new ce,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ot(){return P===null?X:1}let D=n;function Rt(T,z){return e.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gr}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const z="webgl2";if(D=Rt(z,T),D===null)throw Rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let nt,bt,dt,Bt,Et,I,b,k,q,et,$,Pt,gt,wt,Jt,st,Tt,Gt,pt,tt,Ft,Ct,Yt,U;function at(){nt=new uf(D),nt.init(),Ct=new Jp(D,nt),bt=new rf(D,nt,t,Ct),dt=new Zp(D,nt),bt.reverseDepthBuffer&&h&&dt.buffers.depth.setReversed(!0),Bt=new mf(D),Et=new Dp,I=new jp(D,nt,dt,Et,bt,Ct,Bt),b=new cf(v),k=new df(v),q=new yh(D),Yt=new sf(D,q),et=new ff(D,q,Bt,Yt),$=new xf(D,et,q,Bt),pt=new gf(D,bt,I),st=new af(Et),Pt=new Ip(v,b,k,nt,bt,Yt,st),gt=new om(v,Et),wt=new Np,Jt=new Gp(nt),Gt=new nf(v,b,k,dt,$,f,c),Tt=new Yp(v,$,bt),U=new rm(D,Bt,bt,dt),tt=new of(D,nt,Bt),Ft=new pf(D,nt,Bt),Bt.programs=Pt.programs,v.capabilities=bt,v.extensions=nt,v.properties=Et,v.renderLists=wt,v.shadowMap=Tt,v.state=dt,v.info=Bt}at();const Y=new im(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(V,K,!1))},this.getSize=function(T){return T.set(V,K)},this.setSize=function(T,z,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,K=z,e.width=Math.floor(T*X),e.height=Math.floor(z*X),G===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(V*X,K*X).floor()},this.setDrawingBufferSize=function(T,z,G){V=T,K=z,X=G,e.width=Math.floor(T*G),e.height=Math.floor(z*G),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(St)},this.setViewport=function(T,z,G,H){T.isVector4?St.set(T.x,T.y,T.z,T.w):St.set(T,z,G,H),dt.viewport(R.copy(St).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Xt)},this.setScissor=function(T,z,G,H){T.isVector4?Xt.set(T.x,T.y,T.z,T.w):Xt.set(T,z,G,H),dt.scissor(F.copy(Xt).multiplyScalar(X).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){dt.setScissorTest(te=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(T=!0,z=!0,G=!0){let H=0;if(T){let O=!1;if(P!==null){const lt=P.texture.format;O=lt===Mr||lt===yr||lt===wr}if(O){const lt=P.texture.type,Mt=lt===xn||lt===Vn||lt===Bi||lt===xi||lt===vr||lt===_r,It=Gt.getClearColor(),Dt=Gt.getClearAlpha(),qt=It.r,Zt=It.g,Ut=It.b;Mt?(g[0]=qt,g[1]=Zt,g[2]=Ut,g[3]=Dt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=qt,x[1]=Zt,x[2]=Ut,x[3]=Dt,D.clearBufferiv(D.COLOR,0,x))}else H|=D.COLOR_BUFFER_BIT}z&&(H|=D.DEPTH_BUFFER_BIT),G&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),wt.dispose(),Jt.dispose(),Et.dispose(),b.dispose(),k.dispose(),$.dispose(),Yt.dispose(),U.dispose(),Pt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Dr),Y.removeEventListener("sessionend",Ur),Rn.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=Bt.autoReset,z=Tt.enabled,G=Tt.autoUpdate,H=Tt.needsUpdate,O=Tt.type;at(),Bt.autoReset=T,Tt.enabled=z,Tt.autoUpdate=G,Tt.needsUpdate=H,Tt.type=O}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const z=T.target;z.removeEventListener("dispose",Wt),le(z)}function le(T){Ee(T),Et.remove(T)}function Ee(T){const z=Et.get(T).programs;z!==void 0&&(z.forEach(function(G){Pt.releaseProgram(G)}),T.isShaderMaterial&&Pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,G,H,O,lt){z===null&&(z=Kt);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,It=Wc(T,z,G,H,O);dt.setMaterial(H,Mt);let Dt=G.index,qt=1;if(H.wireframe===!0){if(Dt=et.getWireframeAttribute(G),Dt===void 0)return;qt=2}const Zt=G.drawRange,Ut=G.attributes.position;let ie=Zt.start*qt,he=(Zt.start+Zt.count)*qt;lt!==null&&(ie=Math.max(ie,lt.start*qt),he=Math.min(he,(lt.start+lt.count)*qt)),Dt!==null?(ie=Math.max(ie,0),he=Math.min(he,Dt.count)):Ut!=null&&(ie=Math.max(ie,0),he=Math.min(he,Ut.count));const ue=he-ie;if(ue<0||ue===1/0)return;Yt.setup(O,H,It,G,Dt);let Ue,se=tt;if(Dt!==null&&(Ue=q.get(Dt),se=Ft,se.setIndex(Ue)),O.isMesh)H.wireframe===!0?(dt.setLineWidth(H.wireframeLinewidth*ot()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(O.isLine){let zt=H.linewidth;zt===void 0&&(zt=1),dt.setLineWidth(zt*ot()),O.isLineSegments?se.setMode(D.LINES):O.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else O.isPoints?se.setMode(D.POINTS):O.isSprite&&se.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)se.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const zt=O._multiDrawStarts,rn=O._multiDrawCounts,oe=O._multiDrawCount,We=Dt?q.get(Dt).bytesPerElement:1,qn=Et.get(H).currentProgram.getUniforms();for(let Ne=0;Ne<oe;Ne++)qn.setValue(D,"_gl_DrawID",Ne),se.render(zt[Ne]/We,rn[Ne])}else if(O.isInstancedMesh)se.renderInstances(ie,ue,O.count);else if(G.isInstancedBufferGeometry){const zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,rn=Math.min(G.instanceCount,zt);se.renderInstances(ie,ue,rn)}else se.render(ie,ue)};function re(T,z,G){T.transparent===!0&&T.side===xe&&T.forceSinglePass===!1?(T.side=Pe,T.needsUpdate=!0,Ji(T,z,G),T.side=Pn,T.needsUpdate=!0,Ji(T,z,G),T.side=xe):Ji(T,z,G)}this.compile=function(T,z,G=null){G===null&&(G=T),p=Jt.get(G),p.init(z),_.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const lt=O.material;if(lt)if(Array.isArray(lt))for(let Mt=0;Mt<lt.length;Mt++){const It=lt[Mt];re(It,G,O),H.add(It)}else re(lt,G,O),H.add(lt)}),_.pop(),p=null,H},this.compileAsync=function(T,z,G=null){const H=this.compile(T,z,G);return new Promise(O=>{function lt(){if(H.forEach(function(Mt){Et.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){O(T);return}setTimeout(lt,10)}nt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Ve=null;function on(T){Ve&&Ve(T)}function Dr(){Rn.stop()}function Ur(){Rn.start()}const Rn=new Cc;Rn.setAnimationLoop(on),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(T){Ve=T,Y.setAnimationLoop(T),T===null?Rn.stop():Rn.start()},Y.addEventListener("sessionstart",Dr),Y.addEventListener("sessionend",Ur),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,P),p=Jt.get(T,_.length),p.init(z),_.push(p),Nt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(Nt),At=this.localClippingEnabled,rt=st.init(this.clippingPlanes,At),m=wt.get(T,w.length),m.init(),w.push(m),Y.enabled===!0&&Y.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Vs(lt,z,-1/0,v.sortObjects)}Vs(T,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ft,yt),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Gt.addToRenderList(m,T),this.info.render.frame++,rt===!0&&st.beginShadows();const G=p.state.shadowsArray;Tt.render(G,T,z),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),z.isArrayCamera){const lt=z.cameras;if(O.length>0)for(let Mt=0,It=lt.length;Mt<It;Mt++){const Dt=lt[Mt];Fr(H,O,T,Dt)}Q&&Gt.render(T);for(let Mt=0,It=lt.length;Mt<It;Mt++){const Dt=lt[Mt];Nr(m,T,Dt,Dt.viewport)}}else O.length>0&&Fr(H,O,T,z),Q&&Gt.render(T),Nr(m,T,z);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,z),Yt.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],rt===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Vs(T,z,G,H){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){H&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Nt);const Mt=$.update(T),It=T.material;It.visible&&m.push(T,Mt,It,G,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const Mt=$.update(T),It=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),kt.copy(Mt.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(Nt)),Array.isArray(It)){const Dt=Mt.groups;for(let qt=0,Zt=Dt.length;qt<Zt;qt++){const Ut=Dt[qt],ie=It[Ut.materialIndex];ie&&ie.visible&&m.push(T,Mt,ie,G,kt.z,Ut)}}else It.visible&&m.push(T,Mt,It,G,kt.z,null)}}const lt=T.children;for(let Mt=0,It=lt.length;Mt<It;Mt++)Vs(lt[Mt],z,G,H)}function Nr(T,z,G,H){const O=T.opaque,lt=T.transmissive,Mt=T.transparent;p.setupLightsView(G),rt===!0&&st.setGlobalState(v.clippingPlanes,G),H&&dt.viewport(R.copy(H)),O.length>0&&ji(O,z,G),lt.length>0&&ji(lt,z,G),Mt.length>0&&ji(Mt,z,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Fr(T,z,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Wn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?qi:xn,minFilter:Hn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const lt=p.state.transmissionRenderTarget[H.id],Mt=H.viewport||R;lt.setSize(Mt.z,Mt.w);const It=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Gt.render(G);const Dt=v.toneMapping;v.toneMapping=Cn;const qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),rt===!0&&st.setGlobalState(v.clippingPlanes,H),ji(T,G,H),I.updateMultisampleRenderTarget(lt),I.updateRenderTargetMipmap(lt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ut=0,ie=z.length;Ut<ie;Ut++){const he=z[Ut],ue=he.object,Ue=he.geometry,se=he.material,zt=he.group;if(se.side===xe&&ue.layers.test(H.layers)){const rn=se.side;se.side=Pe,se.needsUpdate=!0,zr(ue,G,H,Ue,se,zt),se.side=rn,se.needsUpdate=!0,Zt=!0}}Zt===!0&&(I.updateMultisampleRenderTarget(lt),I.updateRenderTargetMipmap(lt))}v.setRenderTarget(It),v.setClearColor(B,W),qt!==void 0&&(H.viewport=qt),v.toneMapping=Dt}function ji(T,z,G){const H=z.isScene===!0?z.overrideMaterial:null;for(let O=0,lt=T.length;O<lt;O++){const Mt=T[O],It=Mt.object,Dt=Mt.geometry,qt=H===null?Mt.material:H,Zt=Mt.group;It.layers.test(G.layers)&&zr(It,z,G,Dt,qt,Zt)}}function zr(T,z,G,H,O,lt){T.onBeforeRender(v,z,G,H,O,lt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,z,G,H,T,lt),O.transparent===!0&&O.side===xe&&O.forceSinglePass===!1?(O.side=Pe,O.needsUpdate=!0,v.renderBufferDirect(G,z,H,O,T,lt),O.side=Pn,O.needsUpdate=!0,v.renderBufferDirect(G,z,H,O,T,lt),O.side=xe):v.renderBufferDirect(G,z,H,O,T,lt),T.onAfterRender(v,z,G,H,O,lt)}function Ji(T,z,G){z.isScene!==!0&&(z=Kt);const H=Et.get(T),O=p.state.lights,lt=p.state.shadowsArray,Mt=O.state.version,It=Pt.getParameters(T,O.state,lt,z,G),Dt=Pt.getProgramCacheKey(It);let qt=H.programs;H.environment=T.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=(T.isMeshStandardMaterial?k:b).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,qt===void 0&&(T.addEventListener("dispose",Wt),qt=new Map,H.programs=qt);let Zt=qt.get(Dt);if(Zt!==void 0){if(H.currentProgram===Zt&&H.lightsStateVersion===Mt)return kr(T,It),Zt}else It.uniforms=Pt.getUniforms(T),T.onBeforeCompile(It,v),Zt=Pt.acquireProgram(It,Dt),qt.set(Dt,Zt),H.uniforms=It.uniforms;const Ut=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=st.uniform),kr(T,It),H.needsLights=Yc(T),H.lightsStateVersion=Mt,H.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Zt,H.uniformsList=null,Zt}function Or(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Ps.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function kr(T,z){const G=Et.get(T);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function Wc(T,z,G,H,O){z.isScene!==!0&&(z=Kt),I.resetTextureUnits();const lt=z.fog,Mt=H.isMeshStandardMaterial?z.environment:null,It=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:wi,Dt=(H.isMeshStandardMaterial?k:b).get(H.envMap||Mt),qt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Zt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,he=!!G.morphAttributes.color;let ue=Cn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=v.toneMapping);const Ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=Ue!==void 0?Ue.length:0,zt=Et.get(H),rn=p.state.lights;if(rt===!0&&(At===!0||T!==y)){const Ge=T===y&&H.id===M;st.setState(H,T,Ge)}let oe=!1;H.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==rn.state.version||zt.outputColorSpace!==It||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isBatchedMesh&&zt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&zt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&zt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&zt.instancingMorph===!1&&O.morphTexture!==null||zt.envMap!==Dt||H.fog===!0&&zt.fog!==lt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==st.numPlanes||zt.numIntersection!==st.numIntersection)||zt.vertexAlphas!==qt||zt.vertexTangents!==Zt||zt.morphTargets!==Ut||zt.morphNormals!==ie||zt.morphColors!==he||zt.toneMapping!==ue||zt.morphTargetsCount!==se)&&(oe=!0):(oe=!0,zt.__version=H.version);let We=zt.currentProgram;oe===!0&&(We=Ji(H,z,O));let qn=!1,Ne=!1,Si=!1;const fe=We.getUniforms(),Qe=zt.uniforms;if(dt.useProgram(We.program)&&(qn=!0,Ne=!0,Si=!0),H.id!==M&&(M=H.id,Ne=!0),qn||y!==T){dt.buffers.depth.getReversed()?(ct.copy(T.projectionMatrix),jl(ct),Jl(ct),fe.setValue(D,"projectionMatrix",ct)):fe.setValue(D,"projectionMatrix",T.projectionMatrix),fe.setValue(D,"viewMatrix",T.matrixWorldInverse);const vn=fe.map.cameraPosition;vn!==void 0&&vn.setValue(D,Vt.setFromMatrixPosition(T.matrixWorld)),bt.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Ne=!0,Si=!0)}if(O.isSkinnedMesh){fe.setOptional(D,O,"bindMatrix"),fe.setOptional(D,O,"bindMatrixInverse");const Ge=O.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),fe.setValue(D,"boneTexture",Ge.boneTexture,I))}O.isBatchedMesh&&(fe.setOptional(D,O,"batchingTexture"),fe.setValue(D,"batchingTexture",O._matricesTexture,I),fe.setOptional(D,O,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",O._indirectTexture,I),fe.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",O._colorsTexture,I));const Ei=G.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&pt.update(O,G,We),(Ne||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,fe.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qe.envMap.value=Dt,Qe.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&z.environment!==null&&(Qe.envMapIntensity.value=z.environmentIntensity),Ne&&(fe.setValue(D,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&Xc(Qe,Si),lt&&H.fog===!0&&gt.refreshFogUniforms(Qe,lt),gt.refreshMaterialUniforms(Qe,H,X,K,p.state.transmissionRenderTarget[T.id]),Ps.upload(D,Or(zt),Qe,I)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ps.upload(D,Or(zt),Qe,I),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(D,"center",O.center),fe.setValue(D,"modelViewMatrix",O.modelViewMatrix),fe.setValue(D,"normalMatrix",O.normalMatrix),fe.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ge=H.uniformsGroups;for(let vn=0,_n=Ge.length;vn<_n;vn++){const Br=Ge[vn];U.update(Br,We),U.bind(Br,We)}}return We}function Xc(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Yc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,z,G){Et.get(T.texture).__webglTexture=z,Et.get(T.depthTexture).__webglTexture=G;const H=Et.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const G=Et.get(T);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,G=0){P=T,A=z,S=G;let H=!0,O=null,lt=!1,Mt=!1;if(T){const Dt=Et.get(T);if(Dt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(Dt.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Dt.__hasExternalTextures)I.rebindTextures(T,Et.get(T.texture).__webglTexture,Et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ut=T.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&Et.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}const qt=T.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Mt=!0);const Zt=Et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[z])?O=Zt[z][G]:O=Zt[z],lt=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?O=Et.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?O=Zt[G]:O=Zt,R.copy(T.viewport),F.copy(T.scissor),N=T.scissorTest}else R.copy(St).multiplyScalar(X).floor(),F.copy(Xt).multiplyScalar(X).floor(),N=te;if(dt.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&dt.drawBuffers(T,O),dt.viewport(R),dt.scissor(F),dt.setScissorTest(N),lt){const Dt=Et.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Dt.__webglTexture,G)}else if(Mt){const Dt=Et.get(T.texture),qt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,G||0,qt)}M=-1},this.readRenderTargetPixels=function(T,z,G,H,O,lt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){dt.bindFramebuffer(D.FRAMEBUFFER,It);try{const Dt=T.texture,qt=Dt.format,Zt=Dt.type;if(!bt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-H&&G>=0&&G<=T.height-O&&D.readPixels(z,G,H,O,Ct.convert(qt),Ct.convert(Zt),lt)}finally{const Dt=P!==null?Et.get(P).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,z,G,H,O,lt,Mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){const Dt=T.texture,qt=Dt.format,Zt=Dt.type;if(!bt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-H&&G>=0&&G<=T.height-O){dt.bindFramebuffer(D.FRAMEBUFFER,It);const Ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(z,G,H,O,Ct.convert(qt),Ct.convert(Zt),0);const ie=P!==null?Et.get(P).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,ie);const he=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $l(D,he,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Ut),D.deleteSync(he),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,G=0){T.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-G),O=Math.floor(T.image.width*H),lt=Math.floor(T.image.height*H),Mt=z!==null?z.x:0,It=z!==null?z.y:0;I.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,Mt,It,O,lt),dt.unbindTexture()},this.copyTextureToTexture=function(T,z,G=null,H=null,O=0){T.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],z=arguments[2],O=arguments[3]||0,G=null);let lt,Mt,It,Dt,qt,Zt,Ut,ie,he;const ue=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(lt=G.max.x-G.min.x,Mt=G.max.y-G.min.y,It=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,qt=G.min.y,Zt=G.isBox3?G.min.z:0):(lt=ue.width,Mt=ue.height,It=ue.depth||1,Dt=0,qt=0,Zt=0),H!==null?(Ut=H.x,ie=H.y,he=H.z):(Ut=0,ie=0,he=0);const Ue=Ct.convert(z.format),se=Ct.convert(z.type);let zt;z.isData3DTexture?(I.setTexture3D(z,0),zt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),zt=D.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),zt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const rn=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),We=D.getParameter(D.UNPACK_SKIP_PIXELS),qn=D.getParameter(D.UNPACK_SKIP_ROWS),Ne=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);const Si=T.isDataArrayTexture||T.isData3DTexture,fe=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Qe=Et.get(T),Ei=Et.get(z),Ge=Et.get(Qe.__renderTarget),vn=Et.get(Ei.__renderTarget);dt.bindFramebuffer(D.READ_FRAMEBUFFER,Ge.__webglFramebuffer),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let _n=0;_n<It;_n++)Si&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(T).__webglTexture,O,Zt+_n),T.isDepthTexture?(fe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(z).__webglTexture,O,he+_n),D.blitFramebuffer(Dt,qt,lt,Mt,Ut,ie,lt,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST)):fe?D.copyTexSubImage3D(zt,O,Ut,ie,he+_n,Dt,qt,lt,Mt):D.copyTexSubImage2D(zt,O,Ut,ie,he+_n,Dt,qt,lt,Mt);dt.bindFramebuffer(D.READ_FRAMEBUFFER,null),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fe?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(zt,O,Ut,ie,he,lt,Mt,It,Ue,se,ue.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(zt,O,Ut,ie,he,lt,Mt,It,Ue,ue.data):D.texSubImage3D(zt,O,Ut,ie,he,lt,Mt,It,Ue,se,ue):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ut,ie,lt,Mt,Ue,se,ue.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ut,ie,ue.width,ue.height,Ue,ue.data):D.texSubImage2D(D.TEXTURE_2D,O,Ut,ie,lt,Mt,Ue,se,ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,rn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,qn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne),O===0&&z.generateMipmaps&&D.generateMipmap(zt),dt.unbindTexture()},this.copyTextureToTexture3D=function(T,z,G=null,H=null,O=0){return T.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,T=arguments[2],z=arguments[3],O=arguments[4]||0),Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,G,H,O)},this.initRenderTarget=function(T){Et.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),dt.unbindTexture()},this.resetState=function(){A=0,S=0,P=null,dt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class ks{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new ks(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cm extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tr extends Mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ka=new pe,hr=new wc,_s=new zs,ws=new C;class Nc extends Se{constructor(t=new ye,e=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=o,t.ray.intersectsSphere(_s)===!1)return;ka.copy(i).invert(),hr.copy(t.ray).applyMatrix4(ka);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=h,x=f;g<x;g++){const m=l.getX(g);ws.fromBufferAttribute(u,m),Ba(ws,m,c,i,t,e,this)}}else{const h=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=h,x=f;g<x;g++)ws.fromBufferAttribute(u,g),Ba(ws,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ba(s,t,e,n,i,o,r){const a=hr.distanceSqToPoint(s);if(a<e){const c=new C;hr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class lm extends Re{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const d=n[i],h=n[i+1]-d,f=(r-d)/h;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new ht:new C);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],o=[],r=[],a=new C,c=new pe;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new C)}o[0]=new C,r[0]=new C;let l=Number.MAX_VALUE;const d=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=l&&(l=d,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(be(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ar extends sn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hm extends Ar{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Cr(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,d,u){let h=(r-o)/l-(a-o)/(l+d)+(a-r)/d,f=(a-r)/d-(c-r)/(d+u)+(c-a)/u;h*=d,f*=d,i(r,a,h,f)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const ys=new C,_o=new Cr,wo=new Cr,yo=new Cr;class dm extends sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,d;this.closed||a>0?l=i[(a-1)%o]:(ys.subVectors(i[0],i[1]).add(i[0]),l=ys);const u=i[a%o],h=i[(a+1)%o];if(this.closed||a+2<o?d=i[(a+2)%o]:(ys.subVectors(i[o-1],i[o-2]).add(i[o-1]),d=ys),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),_o.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,g,x,m),wo.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,g,x,m),yo.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,g,x,m)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),wo.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),yo.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return n.set(_o.calc(c),wo.calc(c),yo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ga(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function um(s,t){const e=1-s;return e*e*t}function fm(s,t){return 2*(1-s)*s*t}function pm(s,t){return s*s*t}function Ni(s,t,e,n){return um(s,t)+fm(s,e)+pm(s,n)}function mm(s,t){const e=1-s;return e*e*e*t}function gm(s,t){const e=1-s;return 3*e*e*s*t}function xm(s,t){return 3*(1-s)*s*s*t}function vm(s,t){return s*s*s*t}function Fi(s,t,e,n,i){return mm(s,t)+gm(s,e)+xm(s,n)+vm(s,i)}class Fc extends sn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Fi(t,i.x,o.x,r.x,a.x),Fi(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _m extends sn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Fi(t,i.x,o.x,r.x,a.x),Fi(t,i.y,o.y,r.y,a.y),Fi(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zc extends sn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wm extends sn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oc extends sn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Ni(t,i.x,o.x,r.x),Ni(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pr extends sn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Ni(t,i.x,o.x,r.x),Ni(t,i.y,o.y,r.y),Ni(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kc extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],d=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Ga(a,c.x,l.x,d.x,u.x),Ga(a,c.y,l.y,d.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Is=Object.freeze({__proto__:null,ArcCurve:hm,CatmullRomCurve3:dm,CubicBezierCurve:Fc,CubicBezierCurve3:_m,EllipseCurve:Ar,LineCurve:zc,LineCurve3:wm,QuadraticBezierCurve:Oc,QuadraticBezierCurve3:Pr,SplineCurve:kc});class ym extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Is[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Is[i.type]().fromJSON(i))}return this}}class dr extends ym{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zc(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Oc(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Fc(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+l,e+d,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new Ar(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Rr extends ye{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=be(i,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],d=1/e,u=new C,h=new ht,f=new C,g=new C,x=new C;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let w=0;w<=e;w++){const _=n+w*d*i,v=Math.sin(_),L=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*L,r.push(u.x,u.y,u.z),h.x=w/e,h.y=A/(t.length-1),a.push(h.x,h.y);const S=c[3*A+0]*v,P=c[3*A+1],M=c[3*A+0]*L;l.push(S,P,M)}}for(let w=0;w<e;w++)for(let _=0;_<t.length-1;_++){const v=_+w*t.length,L=v,A=v+t.length,S=v+t.length+1,P=v+1;o.push(L,A,P),o.push(S,P,A)}this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.points,t.segments,t.phiStart,t.phiLength)}}class fn extends Rr{constructor(t=1,e=1,n=4,i=8){const o=new dr;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new fn(t.radius,t.length,t.capSegments,t.radialSegments)}}class je extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new C,d=new ht;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(r[h]/t+1)/2,d.y=(r[h+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Lt extends ye{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const d=[],u=[],h=[],f=[];let g=0;const x=[],m=n/2;let p=0;w(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(f,2));function w(){const v=new C,L=new C;let A=0;const S=(e-t)/n;for(let P=0;P<=o;P++){const M=[],y=P/o,R=y*(e-t)+t;for(let F=0;F<=i;F++){const N=F/i,B=N*c+a,W=Math.sin(B),V=Math.cos(B);L.x=R*W,L.y=-y*n+m,L.z=R*V,u.push(L.x,L.y,L.z),v.set(W,S,V).normalize(),h.push(v.x,v.y,v.z),f.push(N,1-y),M.push(g++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<o;M++){const y=x[M][P],R=x[M+1][P],F=x[M+1][P+1],N=x[M][P+1];(t>0||M!==0)&&(d.push(y,R,N),A+=3),(e>0||M!==o-1)&&(d.push(R,F,N),A+=3)}l.addGroup(p,A,0),p+=A}function _(v){const L=g,A=new ht,S=new C;let P=0;const M=v===!0?t:e,y=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*y,0),h.push(0,y,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=i;F++){const B=F/i*c+a,W=Math.cos(B),V=Math.sin(B);S.x=M*V,S.y=m*y,S.z=M*W,u.push(S.x,S.y,S.z),h.push(0,y,0),A.x=W*.5+.5,A.y=V*.5*y+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){const N=L+F,B=R+F;v===!0?d.push(B,B+1,N):d.push(B+1,B,N),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qt extends Lt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Qt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bs extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),d(),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(o.slice(),3)),this.setAttribute("uv",new ne(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const _=new C,v=new C,L=new C;for(let A=0;A<e.length;A+=3)f(e[A+0],_),f(e[A+1],v),f(e[A+2],L),c(_,v,L,w)}function c(w,_,v,L){const A=L+1,S=[];for(let P=0;P<=A;P++){S[P]=[];const M=w.clone().lerp(v,P/A),y=_.clone().lerp(v,P/A),R=A-P;for(let F=0;F<=R;F++)F===0&&P===A?S[P][F]=M:S[P][F]=M.clone().lerp(y,F/R)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const y=Math.floor(M/2);M%2===0?(h(S[P][y+1]),h(S[P+1][y]),h(S[P][y])):(h(S[P][y+1]),h(S[P+1][y+1]),h(S[P+1][y]))}}function l(w){const _=new C;for(let v=0;v<o.length;v+=3)_.x=o[v+0],_.y=o[v+1],_.z=o[v+2],_.normalize().multiplyScalar(w),o[v+0]=_.x,o[v+1]=_.y,o[v+2]=_.z}function d(){const w=new C;for(let _=0;_<o.length;_+=3){w.x=o[_+0],w.y=o[_+1],w.z=o[_+2];const v=m(w)/2/Math.PI+.5,L=p(w)/Math.PI+.5;r.push(v,1-L)}g(),u()}function u(){for(let w=0;w<r.length;w+=6){const _=r[w+0],v=r[w+2],L=r[w+4],A=Math.max(_,v,L),S=Math.min(_,v,L);A>.9&&S<.1&&(_<.2&&(r[w+0]+=1),v<.2&&(r[w+2]+=1),L<.2&&(r[w+4]+=1))}}function h(w){o.push(w.x,w.y,w.z)}function f(w,_){const v=w*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const w=new C,_=new C,v=new C,L=new C,A=new ht,S=new ht,P=new ht;for(let M=0,y=0;M<o.length;M+=9,y+=6){w.set(o[M+0],o[M+1],o[M+2]),_.set(o[M+3],o[M+4],o[M+5]),v.set(o[M+6],o[M+7],o[M+8]),A.set(r[y+0],r[y+1]),S.set(r[y+2],r[y+3]),P.set(r[y+4],r[y+5]),L.copy(w).add(_).add(v).divideScalar(3);const R=m(L);x(A,y+0,w,R),x(S,y+2,_,R),x(P,y+4,v,R)}}function x(w,_,v,L){L<0&&w.x===1&&(r[_]=w.x-1),v.x===0&&v.z===0&&(r[_]=L/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.vertices,t.indices,t.radius,t.details)}}class Ds extends Bs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ds(t.radius,t.detail)}}class ur extends dr{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new dr().fromJSON(i))}return this}}const Mm={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Bc(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,d,u,h,f;if(n&&(o=Am(s,t,o,e)),s.length>80*e){a=l=s[0],c=d=s[1];for(let g=e;g<i;g+=e)u=s[g],h=s[g+1],u<a&&(a=u),h<c&&(c=h),u>l&&(l=u),h>d&&(d=h);f=Math.max(l-a,d-c),f=f!==0?32767/f:0}return Vi(o,r,e,a,c,f,0),r}};function Bc(s,t,e,n,i){let o,r;if(i===Om(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Ha(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Ha(o,s[o],s[o+1],r);return r&&Gs(r,r.next)&&(Xi(r),r=r.next),r}function Xn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gs(e,e.next)||me(e.prev,e,e.next)===0)){if(Xi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vi(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Im(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?Sm(s,n,i,o):bm(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Xi(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=Em(Xn(s),t,e),Vi(s,t,e,n,i,o,2)):r===2&&Tm(s,t,e,n,i,o):Vi(Xn(s),t,e,n,i,o,1);break}}}function bm(s){const t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,d=i<o?i<r?i:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,h=i>o?i>r?i:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&hi(i,a,o,c,r,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sm(s,t,e,n){const i=s.prev,o=s,r=s.next;if(me(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,d=i.y,u=o.y,h=r.y,f=a<c?a<l?a:l:c<l?c:l,g=d<u?d<h?d:h:u<h?u:h,x=a>c?a>l?a:l:c>l?c:l,m=d>u?d>h?d:h:u>h?u:h,p=fr(f,g,t,e,n),w=fr(x,m,t,e,n);let _=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=w;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&hi(a,d,c,u,l,h,_.x,_.y)&&me(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&hi(a,d,c,u,l,h,v.x,v.y)&&me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&hi(a,d,c,u,l,h,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&hi(a,d,c,u,l,h,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Em(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Gs(i,o)&&Gc(i,n,n.next,o)&&Wi(i,o)&&Wi(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Xi(n),Xi(n.next),n=s=o),n=n.next}while(n!==s);return Xn(n)}function Tm(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Nm(r,a)){let c=Hc(r,a);r=Xn(r,r.next),c=Xn(c,c.next),Vi(r,t,e,n,i,o,0),Vi(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Am(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=Bc(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Um(l));for(i.sort(Cm),o=0;o<i.length;o++)e=Pm(i[o],e);return e}function Cm(s,t){return s.x-t.x}function Pm(s,t){const e=Rm(s,t);if(!e)return t;const n=Hc(e,s);return Xn(n,n.next),Xn(e,e.next)}function Rm(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=o&&h>n&&(n=h,i=e.x<e.next.x?e:e.next,h===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let d=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&hi(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Wi(e,s)&&(u<d||u===d&&(e.x>i.x||e.x===i.x&&Lm(i,e)))&&(i=e,d=u)),e=e.next;while(e!==a);return i}function Lm(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function Im(s,t,e,n){let i=s;do i.z===0&&(i.z=fr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Dm(i)}function Dm(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function fr(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Um(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hi(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function Nm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Fm(s,t)&&(Wi(s,t)&&Wi(t,s)&&zm(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||Gs(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gs(s,t){return s.x===t.x&&s.y===t.y}function Gc(s,t,e,n){const i=bs(me(s,t,e)),o=bs(me(s,t,n)),r=bs(me(e,n,s)),a=bs(me(e,n,t));return!!(i!==o&&r!==a||i===0&&Ms(s,e,t)||o===0&&Ms(s,n,t)||r===0&&Ms(e,s,n)||a===0&&Ms(e,t,n))}function Ms(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function bs(s){return s>0?1:s<0?-1:0}function Fm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Gc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Wi(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function zm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Hc(s,t){const e=new pr(s.i,s.x,s.y),n=new pr(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ha(s,t,e,n){const i=new pr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function pr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Om(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class zi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return zi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Va(t),Wa(n,t);let r=t.length;e.forEach(Va);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Wa(n,e[c]);const a=Mm.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Va(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Wa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Us extends ye{constructor(t=new ur([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:km;let _,v=!1,L,A,S,P;p&&(_=p.getSpacedPoints(d),v=!0,h=!1,L=p.computeFrenetFrames(d,!1),A=new C,S=new C,P=new C),h||(m=0,f=0,g=0,x=0);const M=a.extractPoints(l);let y=M.shape;const R=M.holes;if(!zi.isClockWise(y)){y=y.reverse();for(let Q=0,ot=R.length;Q<ot;Q++){const D=R[Q];zi.isClockWise(D)&&(R[Q]=D.reverse())}}const N=zi.triangulateShape(y,R),B=y;for(let Q=0,ot=R.length;Q<ot;Q++){const D=R[Q];y=y.concat(D)}function W(Q,ot,D){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ot,D)}const V=y.length,K=N.length;function X(Q,ot,D){let Rt,nt,bt;const dt=Q.x-ot.x,Bt=Q.y-ot.y,Et=D.x-Q.x,I=D.y-Q.y,b=dt*dt+Bt*Bt,k=dt*I-Bt*Et;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(b),et=Math.sqrt(Et*Et+I*I),$=ot.x-Bt/q,Pt=ot.y+dt/q,gt=D.x-I/et,wt=D.y+Et/et,Jt=((gt-$)*I-(wt-Pt)*Et)/(dt*I-Bt*Et);Rt=$+dt*Jt-Q.x,nt=Pt+Bt*Jt-Q.y;const st=Rt*Rt+nt*nt;if(st<=2)return new ht(Rt,nt);bt=Math.sqrt(st/2)}else{let q=!1;dt>Number.EPSILON?Et>Number.EPSILON&&(q=!0):dt<-Number.EPSILON?Et<-Number.EPSILON&&(q=!0):Math.sign(Bt)===Math.sign(I)&&(q=!0),q?(Rt=-Bt,nt=dt,bt=Math.sqrt(b)):(Rt=dt,nt=Bt,bt=Math.sqrt(b/2))}return new ht(Rt/bt,nt/bt)}const ft=[];for(let Q=0,ot=B.length,D=ot-1,Rt=Q+1;Q<ot;Q++,D++,Rt++)D===ot&&(D=0),Rt===ot&&(Rt=0),ft[Q]=X(B[Q],B[D],B[Rt]);const yt=[];let St,Xt=ft.concat();for(let Q=0,ot=R.length;Q<ot;Q++){const D=R[Q];St=[];for(let Rt=0,nt=D.length,bt=nt-1,dt=Rt+1;Rt<nt;Rt++,bt++,dt++)bt===nt&&(bt=0),dt===nt&&(dt=0),St[Rt]=X(D[Rt],D[bt],D[dt]);yt.push(St),Xt=Xt.concat(St)}for(let Q=0;Q<m;Q++){const ot=Q/m,D=f*Math.cos(ot*Math.PI/2),Rt=g*Math.sin(ot*Math.PI/2)+x;for(let nt=0,bt=B.length;nt<bt;nt++){const dt=W(B[nt],ft[nt],Rt);ct(dt.x,dt.y,-D)}for(let nt=0,bt=R.length;nt<bt;nt++){const dt=R[nt];St=yt[nt];for(let Bt=0,Et=dt.length;Bt<Et;Bt++){const I=W(dt[Bt],St[Bt],Rt);ct(I.x,I.y,-D)}}}const te=g+x;for(let Q=0;Q<V;Q++){const ot=h?W(y[Q],Xt[Q],te):y[Q];v?(S.copy(L.normals[0]).multiplyScalar(ot.x),A.copy(L.binormals[0]).multiplyScalar(ot.y),P.copy(_[0]).add(S).add(A),ct(P.x,P.y,P.z)):ct(ot.x,ot.y,0)}for(let Q=1;Q<=d;Q++)for(let ot=0;ot<V;ot++){const D=h?W(y[ot],Xt[ot],te):y[ot];v?(S.copy(L.normals[Q]).multiplyScalar(D.x),A.copy(L.binormals[Q]).multiplyScalar(D.y),P.copy(_[Q]).add(S).add(A),ct(P.x,P.y,P.z)):ct(D.x,D.y,u/d*Q)}for(let Q=m-1;Q>=0;Q--){const ot=Q/m,D=f*Math.cos(ot*Math.PI/2),Rt=g*Math.sin(ot*Math.PI/2)+x;for(let nt=0,bt=B.length;nt<bt;nt++){const dt=W(B[nt],ft[nt],Rt);ct(dt.x,dt.y,u+D)}for(let nt=0,bt=R.length;nt<bt;nt++){const dt=R[nt];St=yt[nt];for(let Bt=0,Et=dt.length;Bt<Et;Bt++){const I=W(dt[Bt],St[Bt],Rt);v?ct(I.x,I.y+_[d-1].y,_[d-1].x+D):ct(I.x,I.y,u+D)}}}Z(),rt();function Z(){const Q=i.length/3;if(h){let ot=0,D=V*ot;for(let Rt=0;Rt<K;Rt++){const nt=N[Rt];Nt(nt[2]+D,nt[1]+D,nt[0]+D)}ot=d+m*2,D=V*ot;for(let Rt=0;Rt<K;Rt++){const nt=N[Rt];Nt(nt[0]+D,nt[1]+D,nt[2]+D)}}else{for(let ot=0;ot<K;ot++){const D=N[ot];Nt(D[2],D[1],D[0])}for(let ot=0;ot<K;ot++){const D=N[ot];Nt(D[0]+V*d,D[1]+V*d,D[2]+V*d)}}n.addGroup(Q,i.length/3-Q,0)}function rt(){const Q=i.length/3;let ot=0;At(B,ot),ot+=B.length;for(let D=0,Rt=R.length;D<Rt;D++){const nt=R[D];At(nt,ot),ot+=nt.length}n.addGroup(Q,i.length/3-Q,1)}function At(Q,ot){let D=Q.length;for(;--D>=0;){const Rt=D;let nt=D-1;nt<0&&(nt=Q.length-1);for(let bt=0,dt=d+m*2;bt<dt;bt++){const Bt=V*bt,Et=V*(bt+1),I=ot+Rt+Bt,b=ot+nt+Bt,k=ot+nt+Et,q=ot+Rt+Et;Vt(I,b,k,q)}}}function ct(Q,ot,D){c.push(Q),c.push(ot),c.push(D)}function Nt(Q,ot,D){kt(Q),kt(ot),kt(D);const Rt=i.length/3,nt=w.generateTopUV(n,i,Rt-3,Rt-2,Rt-1);Kt(nt[0]),Kt(nt[1]),Kt(nt[2])}function Vt(Q,ot,D,Rt){kt(Q),kt(ot),kt(Rt),kt(ot),kt(D),kt(Rt);const nt=i.length/3,bt=w.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);Kt(bt[0]),Kt(bt[1]),Kt(bt[3]),Kt(bt[1]),Kt(bt[2]),Kt(bt[3])}function kt(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function Kt(Q){o.push(Q.x),o.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bm(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Is[i.type]().fromJSON(i)),new Us(n,t.options)}}const km={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],d=t[i*3+1];return[new ht(o,r),new ht(a,c),new ht(l,d)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],d=t[n*3+1],u=t[n*3+2],h=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-d)<Math.abs(r-l)?[new ht(r,1-c),new ht(l,1-u),new ht(h,1-g),new ht(x,1-p)]:[new ht(a,1-c),new ht(d,1-u),new ht(f,1-g),new ht(m,1-p)]}};function Bm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yi extends Bs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yi(t.radius,t.detail)}}class ke extends ye{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],d=[];let u=t;const h=(e-t)/i,f=new C,g=new ht;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=o+m/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,d.push(g.x,g.y)}u+=h}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const w=p+m,_=w,v=w+n+1,L=w+n+2,A=w+1;a.push(_,v,A),a.push(v,L,A)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ot extends ye{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const d=[],u=new C,h=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],_=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const A=L/e;u.x=-t*Math.cos(i+A*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(i+A*o)*Math.sin(r+_*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),m.push(A+v,1-_),w.push(l++)}d.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const _=d[p][w+1],v=d[p][w],L=d[p+1][w],A=d[p+1][w+1];(p!==0||r>0)&&f.push(_,v,A),(p!==n-1||c<Math.PI)&&f.push(v,L,A)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ce extends ye{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],d=new C,u=new C,h=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const x=g/i*o,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,w=(i+1)*f+g;r.push(x,m,w),r.push(m,p,w)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lr extends ye{constructor(t=new Pr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new C,c=new C,l=new ht;let d=new C;const u=[],h=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(f,2));function x(){for(let _=0;_<e;_++)m(_);m(o===!1?e:0),w(),p()}function m(_){d=t.getPointAt(_/e,d);const v=r.normals[_],L=r.binormals[_];for(let A=0;A<=i;A++){const S=A/i*Math.PI*2,P=Math.sin(S),M=-Math.cos(S);c.x=M*v.x+P*L.x,c.y=M*v.y+P*L.y,c.z=M*v.z+P*L.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=i;v++){const L=(i+1)*(_-1)+(v-1),A=(i+1)*_+(v-1),S=(i+1)*_+v,P=(i+1)*(_-1)+v;g.push(L,A,P),g.push(A,S,P)}}function w(){for(let _=0;_<=e;_++)for(let v=0;v<=i;v++)l.x=_/e,l.y=v/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lr(new Is[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class J extends Mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Xa={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Gm{constructor(t,e,n){const i=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,o===!1&&i.onStart!==void 0&&i.onStart(d,r,a),o=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const Hm=new Gm;class Ir{constructor(t){this.manager=t!==void 0?t:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";class Vm extends Ir{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Xa.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=Hi("img");function c(){d(),Xa.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){d(),i&&i(u),o.manager.itemError(t),o.manager.itemEnd(t)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class Wm extends Ir{constructor(t){super(t)}load(t,e,n,i){const o=new Re,r=new Vm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,i),o}}class Hs extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xm extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mo=new pe,Ya=new C,qa=new C;class Vc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ya.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ya),qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qa),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Za=new pe,Ri=new C,bo=new C;class Ym extends Vc{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ri),bo.copy(n.position),bo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bo),n.updateMatrixWorld(),i.makeTranslation(-Ri.x,-Ri.y,-Ri.z),Za.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za)}}class Oi extends Hs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ym}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qm extends Vc{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $m extends Hs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$a(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$a();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $a(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gr);class Jm{scene;camera;renderer;clock;updateCallbacks=[];container;constructor(t){this.container=t,this.scene=new cm,this.scene.background=new _t("#f4a668"),this.scene.fog=new ks("#f2b47e",.0042),this.camera=new Oe(52,window.innerWidth/window.innerHeight,.15,500),this.camera.position.set(0,3.2,42),this.renderer=new am({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ec,this.renderer.toneMapping=ic,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=De,this.container.appendChild(this.renderer.domElement),this.clock=new jm,window.addEventListener("resize",()=>this.onResize())}onUpdate(t){this.updateCallbacks.push(t)}start(){this.renderer.setAnimationLoop(()=>{const t=Math.min(this.clock.getDelta(),.1),e=this.clock.getElapsedTime();for(const n of this.updateCallbacks)n(t,e);this.renderer.render(this.scene,this.camera)})}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}class Km{boxes=[];cylinders=[];ramps=[];waterZones=[];climbables=[];addBox(t){this.boxes.push(t)}addCylinder(t){this.cylinders.push(t)}addRamp(t){this.ramps.push(t)}addWaterZone(t){this.waterZones.push(t)}addClimbable(t){this.climbables.push(t)}getSurfaceInfoAt(t,e,n,i=1.65){let o=0,r="ground",a=!1,c=0;for(const l of this.waterZones){let d=!1;if(l.type==="circle"&&l.radius!==void 0){const u=t-l.x,h=e-l.z;d=u*u+h*h<=l.radius*l.radius}else l.type==="rect"&&l.width!==void 0&&l.depth!==void 0&&(d=Math.abs(t-l.x)<=l.width*.5&&Math.abs(e-l.z)<=l.depth*.5);d&&n<l.waterY+.6&&(a=!0,c=l.waterY,o=Math.max(o,l.floorY))}for(const l of this.ramps)if(t>=l.minX&&t<=l.maxX&&e>=l.minZ&&e<=l.maxZ){let d=0;l.direction==="+z"?d=(e-l.minZ)/Math.max(.001,l.maxZ-l.minZ):l.direction==="-z"?d=(l.maxZ-e)/Math.max(.001,l.maxZ-l.minZ):l.direction==="+x"?d=(t-l.minX)/Math.max(.001,l.maxX-l.minX):d=(l.maxX-t)/Math.max(.001,l.maxX-l.minX),d=Math.max(0,Math.min(1,d));const u=l.startY+d*(l.endY-l.startY);u<=n+i&&u>=o-.1&&(o=u,r=l.tag??"stair",a=!1)}for(const l of this.boxes){if(!l.walkable)continue;const d=l.bottomY??-10;t>=l.minX&&t<=l.maxX&&e>=l.minZ&&e<=l.maxZ&&l.topY<=n+i&&n>=d-.5&&l.topY>=o&&(o=l.topY,r=l.tag??"ledge",l.topY>c+.05&&(a=!1))}for(const l of this.cylinders){if(!l.walkable)continue;const d=l.bottomY??-10,u=t-l.x,h=e-l.z;u*u+h*h<=l.radius*l.radius&&l.topY<=n+i&&n>=d-.5&&l.topY>=o&&(o=l.topY,r=l.tag??"fountain_rim",l.topY>c+.05&&(a=!1))}return{groundY:o,tag:r,inWater:a,waterY:c}}resolveMovement(t,e=.38,n=.95){let i=t.x,o=t.z;const r=t.y,a=68,c=105;i=Math.max(-a,Math.min(a,i)),o=Math.max(-c,Math.min(c,o));for(const h of this.boxes){const f=h.bottomY??0;if(!(!h.walkable||h.topY>r+n)||r+.9<f||r>h.topY-.05)continue;const x=Math.max(h.minX,Math.min(i,h.maxX)),m=Math.max(h.minZ,Math.min(o,h.maxZ)),p=i-x,w=o-m,_=p*p+w*w;if(_<e*e)if(_>1e-6){const v=Math.sqrt(_),L=e-v;i+=p/v*L,o+=w/v*L}else{const v=Math.abs(i-h.minX),L=Math.abs(h.maxX-i),A=Math.abs(o-h.minZ),S=Math.abs(h.maxZ-o),P=Math.min(v,L,A,S);P===v?i=h.minX-e:P===L?i=h.maxX+e:P===A?o=h.minZ-e:o=h.maxZ+e}}for(const h of this.cylinders){const f=h.bottomY??0;if(!(!h.walkable||h.topY>r+n)||r+.9<f||r>h.topY-.05)continue;const x=i-h.x,m=o-h.z,p=x*x+m*m,w=h.radius+e;if(p<w*w){const _=Math.sqrt(Math.max(1e-6,p)),v=w-_;i+=x/_*v,o+=m/_*v}}const l=this.getSurfaceInfoAt(i,o,r,n+.45);let d=null,u=1/0;for(const h of this.climbables){const f=h.entryPosition.distanceTo(new C(i,r,o));f<=h.radius&&f<u&&(u=f,d=h)}return{position:new C(i,r,o),groundY:l.groundY,grounded:r<=l.groundY+.08,inWater:l.inWater,waterSurfaceY:l.waterY,currentTag:l.tag,nearClimbable:d}}}const Qm={patuxay_arch_pediment:{path:"/textures/patuxay_arch_pediment.jpg",repeatX:1,repeatY:1},patuxay_coffered_ceiling:{path:"/textures/patuxay_coffered_ceiling.jpg",repeatX:3,repeatY:3},patuxay_cornice_frieze:{path:"/textures/patuxay_cornice_frieze.jpg",repeatX:4,repeatY:1},patuxay_stone_wall:{path:"/textures/patuxay_stone_wall.jpg",repeatX:2,repeatY:2},plaza_terracotta_tiles:{path:"/textures/plaza_terracotta_tiles.jpg",repeatX:14,repeatY:14},fountain_mosaic_tile:{path:"/textures/fountain_mosaic_tile.jpg",repeatX:3,repeatY:3},lao_silk_collar:{path:"/textures/lao_silk_collar.jpg",repeatX:2,repeatY:1}};class t0{loader=new Wm;cache=new Map;maxAnisotropy=8;constructor(t){t&&(this.maxAnisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()))}get(t,e,n){const i=Qm[t],o=e??i.repeatX,r=n??i.repeatY,a=`${t}_${o}_${r}`,c=this.cache.get(a);if(c)return c;const l=this.loader.load(i.path);return l.colorSpace=De,l.wrapS=ki,l.wrapT=ki,l.repeat.set(o,r),l.anisotropy=this.maxAnisotropy,this.cache.set(a,l),l}}class e0{group;nightLights=[];rooftopViewpoint=new C(0,16.2,6.5);emissiveMaterials=[];lanternMaterials=[];beacons=[];dustParticles=[];nightIntensity=.25;constructor(t,e){this.group=new ut,this.group.name="PatuxayMonument";const n=t.get("patuxay_stone_wall",2,3),i=new J({map:n,roughness:.78,metalness:.06}),o=t.get("patuxay_stone_wall",2,1),r=new J({map:o,color:new _t("#f0dec0"),roughness:.7,metalness:.08}),a=new J({color:new _t("#b6976c"),roughness:.82,metalness:.06}),c=t.get("patuxay_arch_pediment",1,1),l=new J({map:c,roughness:.55,metalness:.18}),d=t.get("patuxay_cornice_frieze",4,1),u=new J({map:d,roughness:.62,metalness:.14}),h=t.get("patuxay_coffered_ceiling",3,3),f=new J({map:h,roughness:.58,metalness:.15,side:xe}),g=t.get("plaza_terracotta_tiles",6,6),x=new J({map:g,roughness:.72,metalness:.06}),m=t.get("fountain_mosaic_tile",2,2),p=new J({map:m,color:new _t("#3bd1c8"),roughness:.35,metalness:.25}),w=new J({color:new _t("#eebc48"),roughness:.28,metalness:.72,emissive:new _t("#6b4808"),emissiveIntensity:.18});this.emissiveMaterials.push(w);const _=new J({color:new _t("#9c2f23"),roughness:.52,metalness:.22}),v=new J({color:new _t("#c89d54"),roughness:.68,metalness:.08}),L=new J({color:new _t("#ffe6a3"),emissive:new _t("#ffaa2b"),emissiveIntensity:1.1,roughness:.2,metalness:.1});this.lanternMaterials.push(L),this.buildSteppedPlinth(e,r,a,x,w),this.buildFloorMedallion(w,p,a),this.buildCornerPiers(e,i,r,a,w,L),this.buildFlankingColumns(r,a,w),this.buildGrandArchesAndPediments(i,r,l,w),this.buildCofferedVaultCeiling(f,r,w,L),this.buildEntablatureAndRooftop(e,u,r,a,x,w),this.buildRooftopTowers(e,i,r,_,w,L),this.buildCatClimbingWalkway(e,r,a,v,w,L),this.buildStaircasePortals(e,r,w,L),this.buildAtmosphericDust(w),this.setNightMode(this.nightIntensity)}buildSteppedPlinth(t,e,n,i,o){const r=[{id:"monument_plinth_1",half:13.5,bottomY:0,topY:.25},{id:"monument_plinth_2",half:12.5,bottomY:.25,topY:.5},{id:"monument_plinth_3",half:11.5,bottomY:.5,topY:.75}];for(const h of r){const f=h.topY-h.bottomY,g=h.half*2,x=new E(new it(g,f,g),e);x.position.set(0,h.bottomY+f*.5,0),x.castShadow=!0,x.receiveShadow=!0,this.group.add(x);const m=new E(new it(g+.14,.05,g+.14),n);m.position.set(0,h.topY-.025,0),m.receiveShadow=!0,this.group.add(m),t.addBox({id:h.id,minX:-h.half,maxX:h.half,minZ:-h.half,maxZ:h.half,bottomY:0,topY:h.topY,walkable:!0,tag:"monument"})}const a=new E(new it(22.4,.02,22.4),i);a.position.set(0,.75,0),a.receiveShadow=!0,this.group.add(a);const c=new E(new it(7.8,.024,22.6),o);c.position.set(0,.751,0),c.receiveShadow=!0,this.group.add(c);const l=new E(new it(22.6,.024,7.8),o);l.position.set(0,.751,0),l.receiveShadow=!0,this.group.add(l);const d=new E(new it(7.2,.028,22.5),i);d.position.set(0,.752,0),d.receiveShadow=!0,this.group.add(d);const u=new E(new it(22.5,.028,7.2),i);u.position.set(0,.752,0),u.receiveShadow=!0,this.group.add(u)}buildFloorMedallion(t,e,n){const i=new ut;i.position.set(0,.76,0);const o=new E(new Lt(3.4,3.5,.03,8),n);o.rotation.y=Math.PI/8,o.receiveShadow=!0,i.add(o);const r=new E(new Lt(3.05,3.12,.04,8),t);r.rotation.y=Math.PI/8,r.receiveShadow=!0,i.add(r);const a=new E(new Lt(2.65,2.65,.048,16),e);a.receiveShadow=!0,i.add(a);const c=new Qt(.48,2.3,4);c.rotateX(Math.PI*.5);for(let h=0;h<8;h++){const f=h*Math.PI/4,g=new E(c,t);g.scale.set(1,.14,1),g.position.set(Math.cos(f)*1.2,.03,Math.sin(f)*1.2),g.rotation.y=-f+Math.PI*.5,i.add(g)}const l=new E(new Lt(.95,1.05,.06,16),t);l.receiveShadow=!0,i.add(l);const d=new E(new Lt(.62,.62,.07,12),e);i.add(d);const u=new E(new Yi(.28,0),t);u.scale.set(1,.35,1),u.position.y=.05,i.add(u),this.group.add(i)}buildCornerPiers(t,e,n,i,o,r){const a=[-1,1];for(const c of a)for(const l of a){const d=c*6.7,u=l*6.7;t.addBox({id:`monument_pier_${c>0?"E":"W"}${l>0?"S":"N"}`,minX:c>0?4.2:-9.2,maxX:c>0?9.2:-4.2,minZ:l>0?4.2:-9.2,maxZ:l>0?9.2:-4.2,bottomY:.75,topY:15.8,walkable:!1,tag:"wall"});const h=new E(new it(5.35,.45,5.35),i);h.position.set(d,.75+.225,u),h.castShadow=!0,h.receiveShadow=!0,this.group.add(h);const f=new E(new it(5.18,.45,5.18),n);f.position.set(d,1.2+.225,u),f.castShadow=!0,f.receiveShadow=!0,this.group.add(f);const g=new E(new it(5,12.35,5),e);g.position.set(d,1.65+12.35*.5,u),g.castShadow=!0,g.receiveShadow=!0,this.group.add(g);for(const v of[4.8,8.5,12.2]){const L=new E(new it(5.26,.28,5.26),n);L.position.set(d,v,u),L.castShadow=!0,this.group.add(L);const A=new E(new it(5.3,.08,5.3),o);A.position.set(d,v+.16,u),this.group.add(A)}const x=new E(new it(2.4,4.6,5.12),n);x.position.set(d,5.2,u),this.group.add(x);const m=new E(new it(1.7,3.9,5.18),o);m.position.set(d,5.2,u),this.group.add(m);const p=new E(new it(5.12,4.6,2.4),n);p.position.set(d,5.2,u),this.group.add(p);const w=new E(new it(5.18,3.9,1.7),o);w.position.set(d,5.2,u),this.group.add(w);const _=new C(c*4.15,4.2,l*4.15);this.addOrnamentalLantern(_,o,r,1.15)}}buildFlankingColumns(t,e,n){const i=[-8.75,-4.65,4.65,8.75],o=[];for(const h of i)o.push({x:h,z:9.35}),o.push({x:h,z:-9.35}),o.push({x:9.35,z:h}),o.push({x:-9.35,z:h});const r=new it(.95,1.1,.95),a=new Lt(.44,.52,.3,14),c=new Lt(.34,.4,6.4,16),l=new Lt(.42,.36,.22,16),d=new Lt(.62,.38,.55,12),u=new it(1.1,.24,1.1);for(const h of o){const f=new ut;f.position.set(h.x,.75,h.z);const g=new E(r,e);g.position.y=.55,g.castShadow=!0,g.receiveShadow=!0,f.add(g);const x=new E(a,n);x.position.y=1.25,f.add(x);const m=new E(c,t);m.position.y=1.4+3.2,m.castShadow=!0,m.receiveShadow=!0,f.add(m);for(const _ of[2.8,5.2,7.4]){const v=new E(l,n);v.position.y=_,f.add(v)}const p=new E(d,n);p.position.y=8.05,p.castShadow=!0,f.add(p);const w=new E(u,t);w.position.y=8.42,w.castShadow=!0,f.add(w),this.group.add(f)}}buildGrandArchesAndPediments(t,e,n,i){const r=new ur;r.moveTo(-4.3,0),r.lineTo(-4.2,0),r.absarc(0,0,4.2,Math.PI,0,!0),r.lineTo(4.3,0),r.lineTo(4.3,5.5),r.lineTo(-4.3,5.5),r.closePath();const a=new Us(r,{depth:5,bevelEnabled:!1,curveSegments:28});a.translate(0,0,-5*.5);const c=a.attributes.position,l=a.attributes.uv;for(let f=0;f<c.count;f++){const g=c.getX(f),x=c.getY(f),m=c.getZ(f);l.setXY(f,(g+m+4.5)*.12,x*.18)}l.needsUpdate=!0;const d=new Ce(4.22,.16,10,32,Math.PI),u=this.createTriangularPedimentGeometry(9.6,3.6,.26),h=[{name:"South",x:0,z:6.7,rotY:0},{name:"North",x:0,z:-6.7,rotY:Math.PI},{name:"East",x:6.7,z:0,rotY:Math.PI*.5},{name:"West",x:-6.7,z:0,rotY:-Math.PI*.5}];for(const f of h){const g=new ut;g.position.set(f.x,8.5,f.z),g.rotation.y=f.rotY;const x=new E(a,t);x.castShadow=!0,x.receiveShadow=!0,g.add(x);for(const A of[-2.48,2.48]){const S=new E(d,i);S.position.set(0,0,A),g.add(S)}const m=new E(new Qt(.45,1.1,6),i);m.position.set(0,4.15,2.62),m.rotation.z=Math.PI,g.add(m);const p=new E(new it(10.2,.36,.72),e);p.position.set(0,1.7,2.72),p.castShadow=!0,g.add(p);const w=new E(u,n);w.position.set(0,1.85,2.75),w.castShadow=!0,g.add(w);const _=Math.hypot(4.9,3.6),v=Math.atan2(3.6,4.9);for(const A of[-1,1]){const S=new E(new it(_,.32,.48),e);S.position.set(A*2.45,1.85+1.8,2.78),S.rotation.z=-A*v,S.castShadow=!0,g.add(S);const P=new E(new it(_+.2,.16,.56),i);P.position.set(A*2.45,1.85+1.94,2.82),P.rotation.z=-A*v,g.add(P);const M=new E(new Qt(.28,1.05,6),i);M.position.set(A*4.95,2.25,2.88),M.rotation.z=-A*.35,g.add(M)}const L=new E(new Qt(.32,1.35,8),i);L.position.set(0,5.75,2.86),g.add(L),this.group.add(g)}}createTriangularPedimentGeometry(t,e,n){const i=t*.5,o=new ur;o.moveTo(-i,0),o.lineTo(i,0),o.lineTo(0,e),o.closePath();const r=new Us(o,{depth:n,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2}),a=r.attributes.position,c=r.attributes.uv;for(let l=0;l<a.count;l++){const d=(a.getX(l)+i)/t,u=a.getY(l)/e;c.setXY(l,d,u)}return c.needsUpdate=!0,r}buildCofferedVaultCeiling(t,e,n,i){const o=new E(new ge(16,16),t);o.position.set(0,12.8,0),o.rotation.x=Math.PI*.5,o.receiveShadow=!0,this.group.add(o);const r=new E(new it(16.6,.5,16.6),e);r.position.set(0,13.1,0),r.castShadow=!0,this.group.add(r);const a=[-4.2,-1.4,1.4,4.2];for(const g of a){const x=new E(new it(16,.22,.28),n);x.position.set(0,12.72,g),this.group.add(x);const m=new E(new it(.28,.22,16),n);m.position.set(g,12.72,0),this.group.add(m)}const c=new ut;c.position.set(0,12.65,0);const l=new E(new Lt(1.35,.9,.28,12),n);c.add(l);const d=new E(new Ot(.42,14,12),i);d.position.y=-.45,c.add(d);const u=new E(new Qt(.22,.55,8),n);u.position.y=-.9,u.rotation.z=Math.PI,c.add(u),this.group.add(c);const h=new Oi(16758861,1.5,26,1.4);h.position.set(0,11.4,0),this.group.add(h),this.nightLights.push(h);const f=[new C(0,6.5,6.8),new C(0,6.5,-6.8),new C(6.8,6.5,0),new C(-6.8,6.5,0)];for(const g of f){const x=new Oi(16755259,1.1,20,1.5);x.position.copy(g),this.group.add(x),this.nightLights.push(x)}}buildEntablatureAndRooftop(t,e,n,i,o,r){const a=new E(new it(19.2,1.25,19.2),e);a.position.set(0,14.42,0),a.castShadow=!0,a.receiveShadow=!0,this.group.add(a);const c=new E(new it(20.6,.45,20.6),n);c.position.set(0,15.25,0),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c);const l=new E(new it(21.4,.18,21.4),r);l.position.set(0,15.55,0),this.group.add(l);const d=new E(new it(22.6,.42,22.6),n);d.position.set(0,15.79,0),d.castShadow=!0,d.receiveShadow=!0,this.group.add(d);const u=new Lt(.24,.14,.65,8);for(let f=-9.6;f<=9.6;f+=1.6)for(const g of[-1,1]){const x=new E(u,r);x.position.set(f,15.32,g*10.35),x.rotation.x=g*.25,this.group.add(x);const m=new E(u,r);m.position.set(g*10.35,15.32,f),m.rotation.z=-g*.25,this.group.add(m)}const h=new E(new it(22,.03,22),o);h.position.set(0,16,0),h.receiveShadow=!0,this.group.add(h),t.addBox({id:"monument_rooftop_terrace",minX:-11.2,maxX:11.2,minZ:-11.2,maxZ:11.2,bottomY:14.5,topY:16,walkable:!0,tag:"rooftop"}),this.buildRooftopParapets(t,n,i,r)}buildRooftopParapets(t,e,n,i){const a=new E(new it(22.6,.56,.36),e);a.position.set(0,16.28,-11.15),a.castShadow=!0,this.group.add(a);const c=new E(new it(22.6,.56,.36),e);c.position.set(0,16.28,11.15),c.castShadow=!0,this.group.add(c);const l=new E(new it(.36,.56,22.6),e);l.position.set(-11.15,16.28,0),l.castShadow=!0,this.group.add(l);const d=new E(new it(.36,.56,14.75),e);d.position.set(11.15,16.28,-3.775),d.castShadow=!0,this.group.add(d);const u=new E(new it(.36,.56,3.95),e);u.position.set(11.15,16.28,9.175),u.castShadow=!0,this.group.add(u);const h=new it(.46,.24,.26),f=new Qt(.26,.42,5);for(let g=-10.4;g<=10.4;g+=1.3){for(const p of[-11.15,11.15]){const w=new E(h,n);w.position.set(g,16.68,p),this.group.add(w);const _=new E(f,i);_.position.set(g,16.98,p),this.group.add(_)}const x=new E(h,n);x.rotation.y=Math.PI*.5,x.position.set(-11.15,16.68,g),this.group.add(x);const m=new E(f,i);if(m.position.set(-11.15,16.98,g),this.group.add(m),g<3.4||g>7.4){const p=new E(h,n);p.rotation.y=Math.PI*.5,p.position.set(11.15,16.68,g),this.group.add(p);const w=new E(f,i);w.position.set(11.15,16.98,g),this.group.add(w)}}t.addBox({id:"rooftop_parapet_north",minX:-11.4,maxX:11.4,minZ:-11.4,maxZ:-11.15,bottomY:16,topY:16.7,walkable:!1,tag:"wall"}),t.addBox({id:"rooftop_parapet_south",minX:-11.4,maxX:11.4,minZ:11.15,maxZ:11.4,bottomY:16,topY:16.7,walkable:!1,tag:"wall"}),t.addBox({id:"rooftop_parapet_west",minX:-11.4,maxX:-11.15,minZ:-11.4,maxZ:11.4,bottomY:16,topY:16.7,walkable:!1,tag:"wall"}),t.addBox({id:"rooftop_parapet_east_north",minX:11.15,maxX:11.4,minZ:-11.4,maxZ:3.6,bottomY:16,topY:16.7,walkable:!1,tag:"wall"}),t.addBox({id:"rooftop_parapet_east_south",minX:11.15,maxX:11.4,minZ:7.2,maxZ:11.4,bottomY:16,topY:16.7,walkable:!1,tag:"wall"})}buildRooftopTowers(t,e,n,i,o,r){const a=[-1,1];for(const d of a)for(const u of a){const h=d*7.4,f=u*7.4;t.addBox({id:`rooftop_corner_tower_${d>0?"E":"W"}${u>0?"S":"N"}`,minX:h-1.8,maxX:h+1.8,minZ:f-1.8,maxZ:f+1.8,bottomY:16,topY:22,walkable:!1,tag:"wall"});const g=this.createCornerTowerMesh(e,n,i,o,r);g.position.set(h,16,f),this.group.add(g)}t.addBox({id:"rooftop_central_tower",minX:-3.2,maxX:3.2,minZ:-3.2,maxZ:3.2,bottomY:16,topY:28,walkable:!1,tag:"wall"});const c=this.createCentralTowerMesh(e,n,i,o,r);c.position.set(0,16,0),this.group.add(c);const l=new Oi(16761431,1.4,28,1.4);l.position.set(0,21.5,0),this.group.add(l),this.nightLights.push(l)}createCornerTowerMesh(t,e,n,i,o){const r=new ut,a=new E(new it(3.6,.45,3.6),e);a.position.y=.225,a.castShadow=!0,a.receiveShadow=!0,r.add(a);const c=new E(new it(3.2,2.7,3.2),t);c.position.y=.45+1.35,c.castShadow=!0,c.receiveShadow=!0,r.add(c);const l=new E(new it(1.1,1.65,3.32),i);l.position.y=1.8,r.add(l);const d=new E(new it(.76,1.35,3.38),o);d.position.y=1.8,r.add(d);const u=new E(new it(3.32,1.65,1.1),i);u.position.y=1.8,r.add(u);const h=new E(new it(3.38,1.35,.76),o);h.position.y=1.8,r.add(h);const f=[{y:3.45,rBottom:2.75,rTop:1.85,h:.65},{y:4.1,rBottom:2.15,rTop:1.3,h:.6},{y:4.68,rBottom:1.55,rTop:.75,h:.55}];for(const m of f){const p=new E(new Lt(m.rTop,m.rBottom,m.h,4),n);p.rotation.y=Math.PI*.25,p.position.y=m.y,p.castShadow=!0,r.add(p);const w=new E(new it(m.rBottom*1.48,.1,m.rBottom*1.48),i);w.position.y=m.y-m.h*.45,r.add(w)}const g=new E(new Lt(.24,.58,.65,12),i);g.position.y=5.25,r.add(g);const x=new E(new Qt(.22,1.05,12),i);return x.position.y=6.02,x.castShadow=!0,r.add(x),r}createCentralTowerMesh(t,e,n,i,o){const r=new ut,a=new E(new it(6.4,.45,6.4),e);a.position.y=.225,a.castShadow=!0,a.receiveShadow=!0,r.add(a);const c=new E(new it(5.9,.45,5.9),i);c.position.y=.675,c.castShadow=!0,r.add(c);const l=new E(new it(5.4,3.8,5.4),t);l.position.y=.9+1.9,l.castShadow=!0,l.receiveShadow=!0,r.add(l);const d=new E(new it(1.9,2.5,5.56),i);d.position.y=2.65,r.add(d);const u=new E(new it(1.4,2.1,5.64),o);u.position.y=2.65,r.add(u);const h=new E(new it(5.56,2.5,1.9),i);h.position.y=2.65,r.add(h);const f=new E(new it(5.64,2.1,1.4),o);f.position.y=2.65,r.add(f);const g=[{y:5.1,rB:4.5,rT:3.2,h:.85},{y:5.95,rB:3.6,rT:2.4,h:.8},{y:6.75,rB:2.7,rT:1.65,h:.75}];for(const w of g){const _=new E(new Lt(w.rT,w.rB,w.h,4),n);_.rotation.y=Math.PI*.25,_.position.y=w.y,_.castShadow=!0,r.add(_);const v=new E(new it(w.rB*1.46,.14,w.rB*1.46),i);v.position.y=w.y-w.h*.45,r.add(v)}const x=new E(new Lt(1.35,1.55,1.25,8),o);x.position.y=7.65,r.add(x);const m=new E(new Ot(1.45,16,12,0,Math.PI*2,0,Math.PI*.65),i);m.position.y=8.15,m.castShadow=!0,r.add(m);const p=new E(new Qt(.42,3.3,14),i);p.position.y=10.35,p.castShadow=!0,r.add(p);for(let w=0;w<5;w++){const _=9.4+w*.5,v=.68-w*.1,L=new E(new Ce(v,.045,8,18),i);L.rotation.x=Math.PI*.5,L.position.y=_,r.add(L)}return r}buildCatClimbingWalkway(t,e,n,i,o,r){this.addOrnamentalLantern(new C(10.8,.75,7.6),o,r,1.35),t.addRamp({id:"cat_climb_ramp_1",minX:9.2,maxX:11.3,minZ:-6.8,maxZ:6.8,direction:"-z",startY:.75,endY:4.55,tag:"ramp"}),this.buildSteppedRampMesh(9.2,11.2,-6.8,6.8,.75,4.55,"-z",e,i,o),t.addBox({id:"cat_climb_landing_1",minX:9.2,maxX:12.2,minZ:-9.8,maxZ:-6.8,bottomY:4.15,topY:4.55,walkable:!0,tag:"ledge"}),this.buildLandingPlatformMesh(9.2,12.2,-9.8,-6.8,4.55,e,n,i,o,r),t.addRamp({id:"cat_climb_ramp_2",minX:9.2,maxX:11.8,minZ:-6.8,maxZ:6.8,direction:"+z",startY:4.55,endY:8.35,tag:"ramp"}),this.buildSteppedRampMesh(9.6,11.6,-6.8,6.8,4.55,8.35,"+z",e,i,o),t.addBox({id:"cat_climb_landing_2",minX:9.2,maxX:12.2,minZ:6.8,maxZ:9.8,bottomY:7.95,topY:8.35,walkable:!0,tag:"ledge"}),this.buildLandingPlatformMesh(9.2,12.2,6.8,9.8,8.35,e,n,i,o,r),t.addRamp({id:"cat_climb_ramp_3",minX:9.2,maxX:11.4,minZ:-6.8,maxZ:6.8,direction:"-z",startY:8.35,endY:12.15,tag:"ramp"}),this.buildSteppedRampMesh(9.2,11.2,-6.8,6.8,8.35,12.15,"-z",e,i,o),t.addBox({id:"cat_climb_landing_3",minX:9.2,maxX:12.2,minZ:-9.8,maxZ:-6.8,bottomY:11.75,topY:12.15,walkable:!0,tag:"ledge"}),this.buildLandingPlatformMesh(9.2,12.2,-9.8,-6.8,12.15,e,n,i,o,r),t.addRamp({id:"cat_climb_ramp_4",minX:9.2,maxX:11.8,minZ:-6.8,maxZ:4,direction:"+z",startY:12.15,endY:16,tag:"ramp"}),this.buildSteppedRampMesh(9.5,11.5,-6.8,4,12.15,16,"+z",e,i,o),t.addBox({id:"cat_climb_rooftop_bridge",minX:9.2,maxX:11.8,minZ:4,maxZ:7.2,bottomY:15.5,topY:16,walkable:!0,tag:"rooftop"}),this.buildLandingPlatformMesh(9.2,11.8,4,7.2,16,e,n,i,o,r)}buildSteppedRampMesh(t,e,n,i,o,r,a,c,l,d){const u=e-t,h=i-n,f=r-o,g=(t+e)*.5,x=(n+i)*.5,m=(o+r)*.5,p=new ut,w=Math.hypot(h,f),_=Math.atan2(f,h)*(a==="+z"?-1:1),v=new E(new it(u,.22,w),l);v.position.set(g,m-.12,x),v.rotation.x=_,v.castShadow=!0,v.receiveShadow=!0,p.add(v);const L=new E(new Lt(.055,.055,w,8),d);L.rotation.x=Math.PI*.5+_,L.position.set(e-.08,m+.42,x),p.add(L);const A=16,S=h/A;for(let P=0;P<A;P++){const M=(P+.5)/A,y=a==="+z"?n+M*h:i-M*h,R=o+M*f,F=new E(new it(u-.08,.1,S*.92),P%2===0?c:l);F.position.set(g,R-.05,y),F.castShadow=!0,F.receiveShadow=!0,p.add(F)}this.group.add(p)}buildLandingPlatformMesh(t,e,n,i,o,r,a,c,l,d){const u=e-t,h=i-n,f=(t+e)*.5,g=(n+i)*.5,x=new E(new it(u,.34,h),r);x.position.set(f,o-.17,g),x.castShadow=!0,x.receiveShadow=!0,this.group.add(x);const m=new E(new it(u+.12,.08,h+.12),l);m.position.set(f,o-.04,g),this.group.add(m);const p=new E(new Lt(.12,.16,1.4,8),c);p.position.set(e-.25,o-.85,g),p.rotation.z=.35,this.group.add(p);const w=new E(new it(.24,.75,.24),a);w.position.set(e-.2,o+.375,g),this.group.add(w),this.addOrnamentalLantern(new C(e-.2,o+.78,g),l,d,1.1)}buildStaircasePortals(t,e,n,i){const o=new C(6.8,.75,9.6);t.addClimbable({id:"monument_stair_up",label:"ຂຶ້ນຂັ້ນໄດສູ່ດາດຟ້າປະຕູໄຊ [F]",entryPosition:o,targetPosition:new C(0,16.05,7.5),radius:3});const r=new C(0,16,8.8);t.addClimbable({id:"monument_stair_down",label:"ລົງຂັ້ນໄດສູ່ເດີ່ນປະຕູໄຊ [F]",entryPosition:r,targetPosition:new C(0,.75,13.8),radius:3}),this.createPortalShrine(o,e,n,i,0),this.createPortalShrine(r,e,n,i,Math.PI)}createPortalShrine(t,e,n,i,o){const r=new ut;r.position.copy(t);for(const g of[-.95,.95]){const x=new E(new Lt(.14,.18,2.1,10),e);x.position.set(g,1.05,0),x.castShadow=!0,r.add(x);const m=new E(new Qt(.24,.45,8),n);m.position.set(g,2.28,0),r.add(m)}const a=new E(new it(2.3,.24,.32),n);a.position.set(0,2.05,0),r.add(a);const c=new E(new Qt(.65,.65,4),n);c.rotation.y=Math.PI*.25,c.position.set(0,2.48,0),r.add(c),this.addOrnamentalLantern(new C(t.x,t.y+1.65,t.z),n,i,.9);const l=new de({color:16766315,transparent:!0,opacity:.75,side:xe}),d=new E(new ke(.85,1.05,28),l);d.rotation.x=-Math.PI*.5,d.position.y=.04,r.add(d);const u=new E(new ke(.42,.56,24),l);u.rotation.x=-Math.PI*.5,u.position.y=.05,r.add(u);const h=new de({color:16768896,transparent:!0,opacity:.22,side:xe,depthWrite:!1}),f=new E(new Lt(.68,.85,1.4,20,1,!0),h);f.position.y=.72,r.add(f),this.beacons.push({ring:d,innerRing:u,column:f,baseY:.04,phase:o}),this.group.add(r)}addOrnamentalLantern(t,e,n,i=1){const o=new ut;o.position.copy(t),o.scale.setScalar(i);const r=new E(new Lt(.14,.2,.12,8),e);r.position.y=.06,o.add(r);const a=new E(new Lt(.15,.12,.34,8),n);a.position.y=.28,o.add(a);const c=new E(new Qt(.26,.24,8),e);c.position.y=.54,o.add(c),this.group.add(o)}buildAtmosphericDust(t){const e=new Yi(.065,0);for(let n=0;n<28;n++){const i=new E(e,t),o=n>=16,r=o?2.5+n%6*1.2:1.5+n%7*1.1,a=n*2.39996%(Math.PI*2),c=o?16.8+n%5*1.4:1.6+n%8*1.1,l=new C(Math.cos(a)*r,c,Math.sin(a)*r);i.position.copy(l),this.group.add(i),this.dustParticles.push({mesh:i,basePos:l,speed:.6+n%5*.22,phase:n*.75,orbitRadius:.22+n%4*.08})}}setNightMode(t){const e=Math.max(0,Math.min(1,t));this.nightIntensity=e;for(let n=0;n<this.nightLights.length;n++){const i=this.nightLights[n],o=n===0?2.4:1.75;i.intensity=.35+e*o}for(const n of this.emissiveMaterials)n.emissiveIntensity=.14+e*.42;for(const n of this.lanternMaterials)n.emissiveIntensity=.75+e*1.65}update(t,e){const n=Math.sin(e*3.8)*.08+Math.sin(e*7.3)*.04;for(const i of this.lanternMaterials)i.emissiveIntensity=Math.max(.4,.75+this.nightIntensity*1.65+n);for(const i of this.beacons){const o=.5+.5*Math.sin(e*2.6+i.phase);i.ring.rotation.z+=t*.65,i.innerRing.rotation.z-=t*1.1,i.ring.scale.setScalar(.94+o*.14),i.innerRing.scale.setScalar(1.06-o*.12),i.column.position.y=.72+Math.sin(e*2.2+i.phase)*.08;const r=i.column.material;r.opacity=.16+o*.16}for(const i of this.dustParticles){const o=e*i.speed+i.phase;i.mesh.position.x=i.basePos.x+Math.cos(o)*i.orbitRadius,i.mesh.position.y=i.basePos.y+Math.sin(o*1.3)*.28,i.mesh.position.z=i.basePos.z+Math.sin(o)*i.orbitRadius,i.mesh.rotation.y=o,i.mesh.rotation.x=o*.7}}}class n0{group;constructor(t,e){this.group=new ut,this.group.name="ParkLayout",this.buildBaseGroundAndPromenade(t),this.buildNorthMusicalFountainPlaza(t,e),this.buildFlankingReflectionPonds(t,e),this.buildManicuredLawns(e),this.buildSouthApproachAndPerimeterWalls(t,e),this.buildVientianeBoulevardAndSkyline(t)}buildBaseGroundAndPromenade(t){const e=new ge(360,420),n=new J({color:3882306,roughness:.92,metalness:.04}),i=new E(e,n);i.rotation.x=-Math.PI*.5,i.position.y=-.06,i.receiveShadow=!0,this.group.add(i);const o=new ge(160,230),r=t.get("patuxay_stone_wall",28,40),a=new J({color:15129283,map:r,roughness:.86,metalness:.05}),c=new E(o,a);c.rotation.x=-Math.PI*.5,c.position.y=0,c.receiveShadow=!0,this.group.add(c);const l=t.get("plaza_terracotta_tiles",16,24),d=new J({color:14190438,map:l,roughness:.75,metalness:.06}),u=new ge(24,190),h=new E(u,d);h.rotation.x=-Math.PI*.5,h.position.set(0,.014,0),h.receiveShadow=!0,this.group.add(h);const f=new J({color:15589576,roughness:.7,metalness:.05});for(const P of[-1,1]){const M=new E(new it(.9,.04,190),f);M.position.set(P*12.45,.02,0),M.receiveShadow=!0,this.group.add(M)}const g=t.get("plaza_terracotta_tiles",16,24),x=new J({color:14190438,map:g,roughness:.75,metalness:.06}),m=new ge(110,22),p=new E(m,x);p.rotation.x=-Math.PI*.5,p.position.set(0,.016,0),p.receiveShadow=!0,this.group.add(p);for(const P of[-1,1]){const M=new E(new it(110,.04,.9),f);M.position.set(0,.02,P*11.45),M.receiveShadow=!0,this.group.add(M)}const w=new ge(31,31),_=new J({color:15193785,map:t.get("patuxay_stone_wall",8,8),roughness:.72,metalness:.08}),v=new E(w,_);v.rotation.x=-Math.PI*.5,v.position.set(0,.022,0),v.receiveShadow=!0,this.group.add(v);const L=new E(new ke(4.2,5.4,32),new J({color:13145662,roughness:.45,metalness:.35}));L.rotation.x=-Math.PI*.5,L.position.set(0,.028,0),this.group.add(L);const A=new E(new je(4.2,24),new J({color:12082499,map:t.get("plaza_terracotta_tiles",3,3),roughness:.65}));A.rotation.x=-Math.PI*.5,A.position.set(0,.027,0),this.group.add(A);const S=new J({color:14601136,roughness:.82});for(const P of[-30,30]){const M=new E(new ge(5.5,68),S);M.rotation.x=-Math.PI*.5,M.position.set(P,.015,0),M.receiveShadow=!0,this.group.add(M)}}buildNorthMusicalFountainPlaza(t,e){const i=new ut;i.position.set(0,0,-52);const o=new E(new je(25,64),new J({color:14930356,map:t.get("patuxay_stone_wall",10,10),roughness:.78,metalness:.05}));o.rotation.x=-Math.PI*.5,o.position.y=.024,o.receiveShadow=!0,i.add(o);const r=new E(new ke(23.6,24.8,64),new J({color:12085318,map:t.get("plaza_terracotta_tiles",12,12),roughness:.72}));r.rotation.x=-Math.PI*.5,r.position.y=.028,i.add(r);const a=new E(new ke(15.2,16.4,64),new J({color:13212229,roughness:.5,metalness:.25}));a.rotation.x=-Math.PI*.5,a.position.y=.029,i.add(a);const c=new J({color:15721422,map:t.get("patuxay_stone_wall",6,2),roughness:.68}),l=new E(new Lt(12.55,12.75,.24,64),c);l.position.y=.12,l.receiveShadow=!0,l.castShadow=!0,i.add(l);const d=12.2,u=11.2,h=.52,f=new J({color:16050904,map:t.get("patuxay_stone_wall",8,1),roughness:.62,metalness:.06}),g=new J({color:14264394,roughness:.35,metalness:.55}),x=new E(new Lt(d,d+.1,h,64,1,!0),f);x.position.y=h*.5,x.castShadow=!0,x.receiveShadow=!0,i.add(x);const m=f.clone();m.side=Pe;const p=new E(new Lt(u,u,h,64,1,!0),m);p.position.y=h*.5,i.add(p);const w=new E(new ke(u-.04,d+.06,64),f);w.rotation.x=-Math.PI*.5,w.position.y=h,w.receiveShadow=!0,i.add(w);const _=new E(new Ce(d+.04,.055,12,64),g);_.rotation.x=Math.PI*.5,_.position.y=h-.06,i.add(_);for(let N=0;N<16;N++){const B=N/16*Math.PI*2,W=(d+u)*.5,V=Math.cos(B)*W,K=Math.sin(B)*W,X=new E(new Lt(.16,.22,.16,12),g);X.position.set(V,h+.08,K),X.castShadow=!0,i.add(X)}const v=t.get("fountain_mosaic_tile",3,3),L=new J({color:3723976,map:v,roughness:.45,metalness:.1}),A=new E(new je(u+.05,64),L);A.rotation.x=-Math.PI*.5,A.position.y=.08,A.receiveShadow=!0,i.add(A);const S=new ut,P=new E(new Lt(2.4,2.85,.48,24),f);P.position.y=.32,P.castShadow=!0,P.receiveShadow=!0,S.add(P);const M=new E(new Lt(1.45,1.9,.65,20),f);M.position.y=.85,M.castShadow=!0,S.add(M);const y=new E(new Lt(1.75,.85,.45,16),g);y.position.y=1.35,y.castShadow=!0,S.add(y);for(let N=0;N<12;N++){const B=N/12*Math.PI*2,W=new E(new Qt(.32,.7,6),g);W.position.set(Math.cos(B)*1.45,1.48,Math.sin(B)*1.45),W.rotation.z=-Math.cos(B)*.45,W.rotation.x=Math.sin(B)*.45,S.add(W)}const R=new E(new Lt(.42,.68,.85,16),f);R.position.y=1.92,R.castShadow=!0,S.add(R);const F=new E(new Qt(.36,.95,16),g);F.position.y=2.75,F.castShadow=!0,S.add(F);for(const N of[2.2,5.2,8.8]){const B=new E(new Ce(N,.045,8,48),g);B.rotation.x=Math.PI*.5,B.position.y=.18,i.add(B)}i.add(S),this.group.add(i),e.addCylinder({id:"north_fountain_rim",x:0,z:-52,radius:12.4,topY:.48,bottomY:0,walkable:!0,tag:"fountain_rim"}),e.addWaterZone({id:"north_fountain",type:"circle",x:0,z:-52,radius:11.2,waterY:.36,floorY:.1})}buildFlankingReflectionPonds(t,e){const n=[{id:"pond_nw",x:-19,z:-14.5},{id:"pond_ne",x:19,z:-14.5},{id:"pond_sw",x:-19,z:14.5},{id:"pond_se",x:19,z:14.5}],i=11.5,o=14.5,r=.65,a=.4,c=t.get("fountain_mosaic_tile",3,4),l=new J({color:1878174,map:c,roughness:.45,metalness:.08}),d=new J({color:16116956,map:t.get("patuxay_stone_wall",4,4),roughness:.6,metalness:.05}),u=new J({color:13935171,roughness:.38,metalness:.5});for(const h of n){const f=new ut;f.position.set(h.x,0,h.z);const g=new E(new ge(i-.2,o-.2),l);g.rotation.x=-Math.PI*.5,g.position.y=.05,g.receiveShadow=!0,f.add(g);const x=new it(i+r,a,r),m=new E(x,d);m.position.set(0,a*.5,-o*.5),m.castShadow=!0,m.receiveShadow=!0,f.add(m);const p=new E(x,d);p.position.set(0,a*.5,o*.5),p.castShadow=!0,p.receiveShadow=!0,f.add(p);const w=new it(r,a,o-r),_=new E(w,d);_.position.set(-i*.5,a*.5,0),_.castShadow=!0,_.receiveShadow=!0,f.add(_);const v=new E(w,d);v.position.set(i*.5,a*.5,0),v.castShadow=!0,v.receiveShadow=!0,f.add(v);for(const P of[-i*.5,i*.5])for(const M of[-o*.5,o*.5]){const y=new E(new it(r*1.25,a+.08,r*1.25),d);y.position.set(P,(a+.08)*.5,M),y.castShadow=!0,y.receiveShadow=!0,f.add(y);const R=new E(new Qt(.22,.28,8),u);R.position.set(P,a+.22,M),f.add(R)}this.group.add(f);const L=i*.5,A=o*.5,S=r*.55;e.addBox({id:`${h.id}_coping_north`,minX:h.x-L-S,maxX:h.x+L+S,minZ:h.z-A-S,maxZ:h.z-A+S,topY:a,bottomY:0,walkable:!0,tag:"pond_coping"}),e.addBox({id:`${h.id}_coping_south`,minX:h.x-L-S,maxX:h.x+L+S,minZ:h.z+A-S,maxZ:h.z+A+S,topY:a,bottomY:0,walkable:!0,tag:"pond_coping"}),e.addBox({id:`${h.id}_coping_west`,minX:h.x-L-S,maxX:h.x-L+S,minZ:h.z-A+S,maxZ:h.z+A-S,topY:a,bottomY:0,walkable:!0,tag:"pond_coping"}),e.addBox({id:`${h.id}_coping_east`,minX:h.x+L-S,maxX:h.x+L+S,minZ:h.z-A+S,maxZ:h.z+A-S,topY:a,bottomY:0,walkable:!0,tag:"pond_coping"}),e.addWaterZone({id:h.id,type:"rect",x:h.x,z:h.z,width:10.5,depth:13.5,waterY:.25,floorY:.06})}}buildManicuredLawns(t){const e=[{id:"lawn_north_west",x:-38,z:-56,width:22,depth:46},{id:"lawn_north_east",x:38,z:-56,width:22,depth:46},{id:"lawn_far_nw",x:-28,z:-87,width:28,depth:12},{id:"lawn_far_ne",x:28,z:-87,width:28,depth:12},{id:"lawn_central_nw",x:-42,z:-22,width:18,depth:18},{id:"lawn_central_ne",x:42,z:-22,width:18,depth:18},{id:"lawn_central_sw",x:-42,z:22,width:18,depth:18},{id:"lawn_central_se",x:42,z:22,width:18,depth:18},{id:"lawn_south_inner_w",x:-24,z:54,width:20,depth:44},{id:"lawn_south_inner_e",x:24,z:54,width:20,depth:44},{id:"lawn_south_outer_w",x:-46,z:54,width:16,depth:44},{id:"lawn_south_outer_e",x:46,z:54,width:16,depth:44}],n=new J({color:15392974,roughness:.72,metalness:.04}),i=new J({color:4296509,roughness:.9,metalness:.02}),o=new J({color:5153607,roughness:.88,metalness:.02}),r=.15;for(const a of e){const c=new ut;c.position.set(a.x,0,a.z);const l=new E(new it(a.width+.6,r,a.depth+.6),n);l.position.y=r*.5,l.receiveShadow=!0,l.castShadow=!0,c.add(l);const d=new E(new it(a.width,.03,a.depth),i);d.position.y=r+.015,d.receiveShadow=!0,c.add(d);const u=new E(new ge(Math.max(2,a.width-2.2),Math.max(2,a.depth-2.2)),o);u.rotation.x=-Math.PI*.5,u.position.y=r+.032,u.receiveShadow=!0,c.add(u),this.group.add(c),t.addBox({id:a.id,minX:a.x-a.width*.5-.3,maxX:a.x+a.width*.5+.3,minZ:a.z-a.depth*.5-.3,maxZ:a.z+a.depth*.5+.3,topY:r,bottomY:0,walkable:!0,tag:"ground"})}}buildSouthApproachAndPerimeterWalls(t,e){const n=new E(new je(15,48),new J({color:14996148,map:t.get("patuxay_stone_wall",6,6),roughness:.76}));n.rotation.x=-Math.PI*.5,n.position.set(0,.022,82),n.receiveShadow=!0,this.group.add(n);const i=new J({color:15721422,roughness:.68}),o=new J({color:14197828,roughness:.35,metalness:.55});for(let r=-96;r<=96;r+=16)if(!(Math.abs(r)<14))for(const a of[-62,62]){const c=new E(new it(.9,1.35,.9),i);c.position.set(a,.675,r),c.castShadow=!0,c.receiveShadow=!0,this.group.add(c);const l=new E(new Qt(.45,.45,4),o);l.position.set(a,1.55,r),l.rotation.y=Math.PI*.25,this.group.add(l),e.addBox({id:`perimeter_pillar_${a}_${r}`,minX:a-.5,maxX:a+.5,minZ:r-.5,maxZ:r+.5,topY:1.4,bottomY:0,walkable:!1,tag:"wall"})}}buildVientianeBoulevardAndSkyline(t){const e=new ut;e.name="VientianeSkyline";const n=new J({color:3027254,roughness:.9}),i=new de({color:16052714});for(const l of[-74,74]){const d=new E(new ge(14,270),n);d.rotation.x=-Math.PI*.5,d.position.set(l,-.02,0),d.receiveShadow=!0,e.add(d);for(let u=-120;u<=120;u+=10){const h=new E(new ge(.25,4.2),i);h.rotation.x=-Math.PI*.5,h.position.set(l,-.01,u),e.add(h)}}for(const l of[-108,108]){const d=new E(new ge(220,16),n);d.rotation.x=-Math.PI*.5,d.position.set(0,-.018,l),d.receiveShadow=!0,e.add(d)}const o=[{x:-90,z:-62,w:16,d:34,h:10.5,rotY:Math.PI*.5},{x:-90,z:-12,w:18,d:38,h:12,rotY:Math.PI*.5},{x:-90,z:42,w:16,d:34,h:10.5,rotY:Math.PI*.5},{x:90,z:-62,w:16,d:34,h:10.5,rotY:-Math.PI*.5},{x:90,z:-12,w:18,d:38,h:12,rotY:-Math.PI*.5},{x:90,z:42,w:16,d:34,h:10.5,rotY:-Math.PI*.5},{x:-68,z:-122,w:30,d:15,h:11,rotY:0},{x:-24,z:-124,w:34,d:16,h:12.5,rotY:0},{x:24,z:-124,w:34,d:16,h:12.5,rotY:0},{x:68,z:-122,w:30,d:15,h:11,rotY:0},{x:-65,z:122,w:30,d:15,h:10.5,rotY:Math.PI},{x:65,z:122,w:30,d:15,h:10.5,rotY:Math.PI}];for(const l of o){const d=this.createLaoMinistryBuilding(l.w,l.d,l.h,t);d.position.set(l.x,0,l.z),d.rotation.y=l.rotY,e.add(d)}const r=new J({color:6046508,roughness:.88}),a=new J({color:2977330,roughness:.82});for(let l=-98;l<=98;l+=14)for(const d of[-83,83]){const u=new ut;u.position.set(d,0,l);const h=new E(new Lt(.28,.38,4.2,8),r);h.position.y=2.1,u.add(h);const f=new E(new Ot(2.6,10,8),a);f.position.y=5.1,f.scale.set(1.1,.85,1.1),u.add(f),e.add(u)}const c=this.createPhaThatLuangHorizonMonument();c.position.set(58,0,-155),e.add(c),this.group.add(e)}createLaoMinistryBuilding(t,e,n,i){const o=new ut,r=new J({color:16249315,map:i.get("patuxay_stone_wall",4,2),roughness:.72}),a=new J({color:11881266,map:i.get("plaza_terracotta_tiles",6,3),roughness:.65}),c=new J({color:14922054,roughness:.32,metalness:.62}),l=new J({color:2900567,roughness:.25,metalness:.4}),d=new E(new it(t,n,e),r);d.position.y=n*.5,d.castShadow=!0,d.receiveShadow=!0,o.add(d);const u=Math.max(4,Math.floor(t/3.8));for(let m=0;m<u;m++){const p=-t*.44+m/(u-1)*(t*.88),w=new E(new Lt(.32,.36,n*.92,10),r);if(w.position.set(p,n*.46,e*.5+.55),o.add(w),m<u-1){const _=p+t*.88/(2*(u-1));for(const v of[n*.32,n*.68]){const L=new E(new it(1.3,1.9,.15),l);L.position.set(_,v,e*.5+.05),o.add(L)}}}const h=new E(new Qt(Math.hypot(t,e)*.56,3.6,4),a);h.position.y=n+1.8,h.rotation.y=Math.PI*.25,h.scale.set(t/Math.max(t,e),1,e/Math.max(t,e)),o.add(h);const f=new E(new Qt(Math.hypot(t,e)*.42,3.4,4),a);f.position.y=n+3.9,f.rotation.y=Math.PI*.25,f.scale.set(t/Math.max(t,e),1,e/Math.max(t,e)),o.add(f);const g=new E(new it(t*.52,.32,.32),c);g.position.y=n+5.3,o.add(g);const x=new E(new Qt(.35,2.2,8),c);return x.position.y=n+6.4,o.add(x),o}createPhaThatLuangHorizonMonument(){const t=new ut;t.name="PhaThatLuangBackdrop";const e=new J({color:16041038,emissive:5914120,emissiveIntensity:.35,roughness:.24,metalness:.78}),n=new J({color:15261384,roughness:.65}),i=new E(new it(36,3.5,36),n);i.position.y=1.75,t.add(i);const o=new E(new it(26,4,26),e);o.position.y=5.5,t.add(o);const r=new E(new it(18,3.6,18),e);r.position.y=9.3,t.add(r);for(let d=0;d<16;d++){const u=d/16*Math.PI*2,h=new E(new Qt(.65,3.2,8),e);h.position.set(Math.cos(u)*11.2,12.2,Math.sin(u)*11.2),t.add(h)}const a=new E(new Lt(5.2,8.2,7.5,24),e);a.position.y=14.5,t.add(a);const c=new E(new Qt(5,24,24),e);c.position.y=30,t.add(c);const l=new E(new Lt(.9,.2,3.5,12),e);return l.position.y=43.2,t.add(l),t}}const ja=`
  uniform float uTime;
  uniform vec3 uCatPos;

  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vWaveHeight;

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);

    // Dual-directional surface wave displacement
    float w1 = sin(worldPosition.x * 1.45 + uTime * 2.1 + worldPosition.z * 0.65) * 0.014;
    float w2 = cos(worldPosition.z * 1.85 - uTime * 1.75 + worldPosition.x * 0.85) * 0.012;

    // Interactive cat proximity ripple displacement
    float catDist = distance(worldPosition.xz, uCatPos.xz);
    float catFactor = smoothstep(3.8, 0.0, catDist) * step(abs(worldPosition.y - uCatPos.y), 0.85);
    float catRipple = sin(catDist * 9.0 - uTime * 9.5) * 0.025 * catFactor;

    float displacement = w1 + w2 + catRipple;
    worldPosition.y += displacement;

    vWorldPos = worldPosition.xyz;
    vWaveHeight = displacement;

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Ja=`
  uniform float uTime;
  uniform float uNightMix;
  uniform float uIsCircle;
  uniform vec3 uCatPos;
  uniform sampler2D uCausticTex;

  varying vec2 vUv;
  varying vec3 vWorldPos;
  varying float vWaveHeight;

  // Procedural dual-wave normal perturbation & caustic pattern
  float causticPattern(vec2 p, float t) {
    vec2 uv1 = p * 0.28 + vec2(t * 0.04, -t * 0.03);
    vec2 uv2 = p * 0.34 + vec2(-t * 0.035, t * 0.045);
    float c1 = sin(uv1.x * 18.0 + cos(uv1.y * 16.0 + t * 1.8));
    float c2 = cos(uv2.y * 19.0 + sin(uv2.x * 17.0 - t * 1.5));
    return pow( clamp((c1 * c2) * 0.5 + 0.5, 0.0, 1.0), 2.4 );
  }

  void main() {
    // Compute normalized edge distance (0 = center, 1 = shoreline edge)
    float edgeFactor = 0.0;
    if (uIsCircle > 0.5) {
      edgeFactor = length((vUv - 0.5) * 2.0);
    } else {
      vec2 d = abs(vUv - 0.5) * 2.0;
      edgeFactor = max(d.x, d.y);
    }

    // Dual-wave normal approximation in world XZ
    vec2 waveGrad1 = vec2(
      cos(vWorldPos.x * 2.2 + uTime * 2.4) * 0.5,
      sin(vWorldPos.z * 2.5 - uTime * 2.1) * 0.5
    );
    vec2 waveGrad2 = vec2(
      -sin((vWorldPos.x - vWorldPos.z) * 3.1 + uTime * 3.0) * 0.35,
      cos((vWorldPos.x + vWorldPos.z) * 2.9 - uTime * 2.6) * 0.35
    );
    vec3 normal = normalize(vec3(waveGrad1.x + waveGrad2.x, 4.5, waveGrad1.y + waveGrad2.y));

    // Turquoise-to-emerald depth gradient
    vec3 shallowTurquoise = vec3(0.14, 0.82, 0.78);
    vec3 deepEmerald = vec3(0.03, 0.38, 0.36);
    float depthMix = clamp(1.0 - pow(edgeFactor, 1.65), 0.0, 1.0);
    vec3 waterBase = mix(shallowTurquoise, deepEmerald, depthMix);

    // Sample mosaic texture + procedural shimmering caustics
    vec2 distortedUv = vUv * 3.5 + normal.xz * 0.06 + vec2(uTime * 0.015, -uTime * 0.012);
    vec3 mosaicSample = texture2D(uCausticTex, distortedUv).rgb;
    float caustics = causticPattern(vWorldPos.xz, uTime);

    vec3 causticColor = mix(vec3(0.55, 0.98, 0.92), vec3(1.0, 0.88, 0.55), uNightMix * 0.55);
    vec3 color = mix(waterBase, mosaicSample * 0.85, 0.24);
    color += causticColor * caustics * (0.28 + 0.16 * uNightMix);

    // Specular sky/sun reflection highlight from dual-wave normals
    vec3 lightDir = normalize(vec3(0.45, 0.85, 0.35));
    float spec = pow(max(dot(normal, lightDir), 0.0), 28.0);
    color += vec3(0.95, 0.99, 1.0) * spec * (0.45 - 0.2 * uNightMix);

    // Shoreline foam band + gentle pulsing meniscus
    float foamLine = smoothstep(0.89, 0.995, edgeFactor + sin(uTime * 3.2 + vWorldPos.x * 2.5 + vWorldPos.z * 2.5) * 0.018);
    // Fountain central pedestal inner foam collar
    if (uIsCircle > 0.5) {
      float centerFoam = 1.0 - smoothstep(0.18, 0.27, edgeFactor + cos(uTime * 4.0 + vWorldPos.x * 3.0) * 0.015);
      foamLine = max(foamLine, centerFoam);
    }

    // Interactive ripple ring around cat position when near water
    float catDist = distance(vWorldPos.xz, uCatPos.xz);
    float catNear = smoothstep(3.6, 0.0, catDist) * step(abs(vWorldPos.y - uCatPos.y), 0.85);
    float catRing = sin(catDist * 10.5 - uTime * 11.0) * 0.5 + 0.5;
    float catFoam = pow(catRing, 5.0) * catNear * 0.85;

    float totalFoam = clamp(foamLine * 0.78 + catFoam + vWaveHeight * 4.5, 0.0, 1.0);
    color = mix(color, vec3(0.94, 0.99, 1.0), totalFoam);

    // Night mode underwater LED glow tint on circular fountain
    if (uIsCircle > 0.5 && uNightMix > 0.01) {
      float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
      vec3 ledGlow = 0.5 + 0.5 * cos(uTime * 1.6 + angle * 2.0 + vec3(0.0, 2.1, 4.2));
      color += ledGlow * (1.0 - edgeFactor * 0.5) * uNightMix * 0.38;
    }

    gl_FragColor = vec4(color, 0.86);
  }
`;class i0{group;fountainMaterial;pondMaterial;centralGeyserMesh;parabolicStreams=[];dropletPoints;dropletPositions;dropletVelocities=[];fountainLedLights=[];splashPool=[];koiList=[];lastAutoRippleTime=0;lastCatXZ=new ht;constructor(t){this.group=new ut,this.group.name="WaterSystem",this.buildWaterSurfaces(t),this.buildMusicalFountainJetsAndLights(),this.buildSplashRingPool(),this.buildPondKoiFish()}buildWaterSurfaces(t){const e=t.get("fountain_mosaic_tile",4,4);this.fountainMaterial=new Ke({vertexShader:ja,fragmentShader:Ja,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uNightMix:{value:0},uIsCircle:{value:1},uCatPos:{value:new C(0,0,18)},uCausticTex:{value:e}}});const n=new je(11.3,64),i=new E(n,this.fountainMaterial);i.rotation.x=-Math.PI*.5,i.position.set(0,.36,-52),this.group.add(i),this.pondMaterial=new Ke({vertexShader:ja,fragmentShader:Ja,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uNightMix:{value:0},uIsCircle:{value:0},uCatPos:{value:new C(0,0,18)},uCausticTex:{value:e}}});const o=new ge(10.8,13.8,24,28),r=[new C(-19,.25,-14.5),new C(19,.25,-14.5),new C(-19,.25,14.5),new C(19,.25,14.5)];for(const a of r){const c=new E(o,this.pondMaterial);c.rotation.x=-Math.PI*.5,c.position.copy(a),this.group.add(c)}}buildMusicalFountainJetsAndLights(){const t=new C(0,.5,-52),e=new ut;e.position.copy(t);const n=new J({color:14679039,emissive:4770224,emissiveIntensity:.35,transparent:!0,opacity:.65,roughness:.15}),i=new Lt(.16,.42,6.2,16,8,!0);i.translate(0,3.1,0),this.centralGeyserMesh=new E(i,n),this.centralGeyserMesh.position.y=1.9,e.add(this.centralGeyserMesh);const o=[{ringIndex:0,count:8,startR:2.2,endR:.75,peakY:4.1,tubeR:.055},{ringIndex:1,count:16,startR:5.2,endR:1.85,peakY:3.3,tubeR:.05},{ringIndex:2,count:24,startR:8.8,endR:4.4,peakY:2.7,tubeR:.045}];for(const h of o){const f=h.startR-h.endR,g=new C(0,0,0),x=new C(-f*.5,h.peakY,0),m=new C(-f,-.08,0),p=new Pr(g,x,m),w=new Lr(p,14,h.tubeR,6,!1);for(let _=0;_<h.count;_++){const v=_/h.count*Math.PI*2,L=new E(w,n);L.position.set(Math.cos(v)*h.startR,0,Math.sin(v)*h.startR),L.rotation.y=-v,e.add(L),this.parabolicStreams.push({mesh:L,ringIndex:h.ringIndex,angle:v,baseScaleY:1})}}const r=560;this.dropletPositions=new Float32Array(r*3);const a=new Float32Array(r*3);for(let h=0;h<r;h++){const f=h%4,g=Math.random()*Math.PI*2,x=f===0?.25:f===1?2.2:f===2?5.2:8.8,m=Math.random(),p=f===0?(Math.random()-.5)*.8:-(1.6+f*.55),w=Math.cos(g)*p+(Math.random()-.5)*.35,_=Math.sin(g)*p+(Math.random()-.5)*.35,v=f===0?6.2+Math.random()*2.2:3.8+(3-f)*.75+Math.random()*.8;this.dropletVelocities.push({vx:w,vy:v,vz:_,ring:f,baseR:x,angle:g,phase:m}),this.dropletPositions[h*3]=Math.cos(g)*x,this.dropletPositions[h*3+1]=Math.random()*3,this.dropletPositions[h*3+2]=Math.sin(g)*x,a[h*3]=.85,a[h*3+1]=.98,a[h*3+2]=1}const c=new ye;c.setAttribute("position",new Be(this.dropletPositions,3)),c.setAttribute("color",new Be(a,3));const l=new Tr({size:.22,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,blending:So});this.dropletPoints=new Nc(c,l),e.add(this.dropletPoints);const d=[new C(0,1.2,0),new C(-4.8,.6,-3.5),new C(4.8,.6,-3.5),new C(0,.6,5.5)],u=[2287062,16758840,16737970,3718648];for(let h=0;h<d.length;h++){const f=new Oi(u[h],.3,22,1.6);f.position.copy(d[h]),e.add(f),this.fountainLedLights.push(f)}this.group.add(e)}buildSplashRingPool(){const t=new ke(.18,.3,28);t.rotateX(-Math.PI*.5);for(let e=0;e<18;e++){const n=new de({color:15269887,transparent:!0,opacity:0,side:xe,depthWrite:!1}),i=new E(t,n);i.visible=!1,this.group.add(i),this.splashPool.push({mesh:i,material:n,active:!1,age:0,maxAge:.95,maxScale:4.5})}}buildPondKoiFish(){const t=[new C(-19,.16,-14.5),new C(19,.16,-14.5),new C(-19,.16,14.5),new C(19,.16,14.5)],e=[16733986,16757504,16448250,16740419,16763432];for(const n of t)for(let i=0;i<5;i++){const o=new ut,r=e[i%e.length],a=new J({color:r,roughness:.3,metalness:.1}),c=new J({color:16774628,roughness:.4,side:xe}),l=new E(new Qt(.11,.48,8),a);l.rotation.x=Math.PI*.5,l.scale.set(1,1,.55),o.add(l);const d=new E(new Qt(.09,.22,3),c);d.rotation.x=-Math.PI*.5,d.position.z=-.28,o.add(d),this.group.add(o),this.koiList.push({group:o,tail:d,pondCenter:n.clone(),orbitRadiusX:1.8+i%3*1.15,orbitRadiusZ:2.2+(i+1)%3*1.35,speed:.42+i%4*.12,phase:i*1.35,figureEight:i%2===1})}}triggerSplash(t){for(let e=0;e<2;e++){const n=this.splashPool.find(i=>!i.active)??this.splashPool[0];n.active=!0,n.age=e*.12,n.maxAge=.85+e*.25,n.maxScale=3.6+e*2.2,n.mesh.position.set(t.x,t.y+.02,t.z),n.mesh.scale.setScalar(.25),n.material.opacity=.85,n.mesh.visible=!0}}update(t,e,n,i){const o=Math.min(t,.1),r=i?1:0,a=Ht.lerp(this.fountainMaterial.uniforms.uNightMix.value,r,o*3);this.fountainMaterial.uniforms.uTime.value=e,this.fountainMaterial.uniforms.uNightMix.value=a,this.fountainMaterial.uniforms.uCatPos.value.copy(n),this.pondMaterial.uniforms.uTime.value=e,this.pondMaterial.uniforms.uNightMix.value=a,this.pondMaterial.uniforms.uCatPos.value.copy(n);const c=(n.x-this.lastCatXZ.x)*(n.x-this.lastCatXZ.x)+(n.z-this.lastCatXZ.y)*(n.z-this.lastCatXZ.y);if(this.lastCatXZ.set(n.x,n.z),n.y<.39&&c>4e-4&&e-this.lastAutoRippleTime>.28){const h=Math.hypot(n.x,n.z+52)<11.1,f=Math.abs(Math.abs(n.x)-19)<5.3&&Math.abs(Math.abs(n.z)-14.5)<6.8;(h||f)&&(this.lastAutoRippleTime=e,this.triggerSplash(new C(n.x,h?.36:.25,n.z)))}const l=.78+.36*Math.sin(e*2.4)+.18*Math.cos(e*5.1);this.centralGeyserMesh.scale.set(.9+.15*Math.sin(e*6),Math.max(.35,l),.9+.15*Math.cos(e*6)),this.centralGeyserMesh.rotation.y=e*1.2;for(const h of this.parabolicStreams){const f=.76+.28*Math.sin(e*2.8-h.ringIndex*1.15+h.angle*2)+.12*Math.cos(e*4.4+h.ringIndex);h.mesh.scale.y=Math.max(.25,f)}const d=this.dropletPoints.geometry.getAttribute("position");for(let h=0;h<this.dropletVelocities.length;h++){const f=this.dropletVelocities[h],g=f.ring===0?.72:.88,x=(e*g+f.phase)%1,m=.82+.24*Math.sin(e*2.6-f.ring*.9),p=Math.cos(f.angle)*f.baseR,w=Math.sin(f.angle)*f.baseR,_=f.ring===0?2.1:0,v=p+f.vx*x*1.35,L=w+f.vz*x*1.35,A=Math.max(-.1,_+f.vy*m*x-.5*9.2*x*x);d.setXYZ(h,v,A,L)}d.needsUpdate=!0;const u=[new _t(1960374),new _t(16763432),new _t(16737970)];for(let h=0;h<this.fountainLedLights.length;h++){const f=this.fountainLedLights[h],g=(e*.38+h*.75)%u.length,x=Math.floor(g),m=(x+1)%u.length,p=g-x;f.color.copy(u[x]).lerp(u[m],p),f.intensity=Ht.lerp(.2,3.4+.6*Math.sin(e*3+h),a)}for(const h of this.splashPool){if(!h.active)continue;if(h.age+=o,h.age>=h.maxAge){h.active=!1,h.mesh.visible=!1;continue}const f=Math.max(0,h.age/h.maxAge),g=Ht.lerp(.35,h.maxScale,1-Math.pow(1-f,2));h.mesh.scale.setScalar(g),h.material.opacity=(1-f)*.82}for(const h of this.koiList){const f=e*h.speed+h.phase,g=f+.05,x=h.pondCenter.x+Math.cos(f)*h.orbitRadiusX,m=h.pondCenter.z+(h.figureEight?Math.sin(f*2)*h.orbitRadiusZ*.65:Math.sin(f)*h.orbitRadiusZ),p=h.pondCenter.x+Math.cos(g)*h.orbitRadiusX,w=h.pondCenter.z+(h.figureEight?Math.sin(g*2)*h.orbitRadiusZ*.65:Math.sin(g)*h.orbitRadiusZ);h.group.position.set(x,h.pondCenter.y,m),h.group.rotation.y=Math.atan2(p-x,w-m),h.tail.rotation.y=Math.sin(e*9.5+h.phase)*.38}}}class s0{group;lampLights=[];knockableProps=[];swayingCrowns=[];floatingLotuses=[];lampGlobeMaterials=[];constructor(t,e){this.group=new ut,this.group.name="FoliageAndProps",this.buildPalmTrees(e),this.buildDokChampaTrees(e),this.buildTopiaryAndFlowerbeds(),this.buildParkBenches(e),this.buildIssaraponSchoolSigns(e),this.buildLaoStreetlamps(e),this.buildPondLotusPadsAndFlowers(e),this.buildKnockableParkProps()}buildPalmTrees(t){const e=[{x:-19,z:-70,height:8.8,leanX:-.25,leanZ:-.2},{x:19,z:-70,height:8.8,leanX:.25,leanZ:-.2},{x:-27,z:-58,height:9.2,leanX:-.35,leanZ:.1},{x:27,z:-58,height:9.2,leanX:.35,leanZ:.1},{x:-27,z:-44,height:8.6,leanX:-.3,leanZ:.2},{x:27,z:-44,height:8.6,leanX:.3,leanZ:.2},{x:-18,z:-31,height:8.4,leanX:-.2,leanZ:.25},{x:18,z:-31,height:8.4,leanX:.2,leanZ:.25},{x:-13.5,z:-78,height:9,leanX:-.18,leanZ:-.15},{x:13.5,z:-78,height:9,leanX:.18,leanZ:-.15},{x:-13.5,z:-90,height:9.4,leanX:-.12,leanZ:.05},{x:13.5,z:-90,height:9.4,leanX:.12,leanZ:.05},{x:-13.5,z:30,height:9.1,leanX:-.15,leanZ:.08},{x:13.5,z:30,height:9.1,leanX:.15,leanZ:.08},{x:-13.5,z:44,height:9.3,leanX:-.12,leanZ:-.06},{x:13.5,z:44,height:9.3,leanX:.12,leanZ:-.06},{x:-13.5,z:58,height:9,leanX:-.16,leanZ:.1},{x:13.5,z:58,height:9,leanX:.16,leanZ:.1},{x:-13.5,z:72,height:9.4,leanX:-.14,leanZ:-.08},{x:13.5,z:72,height:9.4,leanX:.14,leanZ:-.08},{x:-13.5,z:88,height:9.2,leanX:-.18,leanZ:.12},{x:13.5,z:88,height:9.2,leanX:.18,leanZ:.12},{x:-27,z:-6,height:8.7,leanX:-.22,leanZ:-.12},{x:27,z:-6,height:8.7,leanX:.22,leanZ:-.12},{x:-35,z:-14,height:8.3,leanX:-.45,leanZ:.25},{x:35,z:-14,height:8.3,leanX:.45,leanZ:.25},{x:-35,z:14,height:8.5,leanX:-.4,leanZ:-.25},{x:35,z:14,height:8.5,leanX:.4,leanZ:-.25},{x:-46,z:-38,height:8.9,leanX:.3,leanZ:.35},{x:46,z:-38,height:8.9,leanX:-.3,leanZ:.35},{x:-46,z:-72,height:8.6,leanX:-.35,leanZ:-.3},{x:46,z:-72,height:8.6,leanX:.35,leanZ:-.3},{x:-46,z:38,height:8.8,leanX:-.38,leanZ:.28},{x:46,z:38,height:8.8,leanX:.38,leanZ:.28},{x:-46,z:70,height:8.4,leanX:.32,leanZ:-.32},{x:46,z:70,height:8.4,leanX:-.32,leanZ:-.32}],n=new J({color:7230267,roughness:.88}),i=new J({color:8677196,roughness:.85}),o=new J({color:4948792,roughness:.65}),r=new J({color:6044702,roughness:.72}),a=new J({color:3505458,roughness:.72,side:xe});for(let c=0;c<e.length;c++){const l=e[c],d=new ut;d.position.set(l.x,0,l.z);const u=7,h=l.height/u;let f=0,g=0;for(let w=0;w<u;w++){const _=w/u,v=(w+1)/u,L=Ht.lerp(.42,.21,_),A=Ht.lerp(.42,.21,v),S=new E(new Lt(A,L,h*1.06,10),w%2===0?n:i),P=l.leanX*_*_,M=l.leanZ*_*_;S.position.set(P,(w+.5)*h,M),S.rotation.z=-(l.leanX*.12*_),S.rotation.x=l.leanZ*.12*_,S.castShadow=!0,S.receiveShadow=!0,d.add(S),f=l.leanX*v*v,g=l.leanZ*v*v}const x=new ut;x.position.set(f,l.height,g);const m=new E(new Lt(.24,.21,.75,10),o);m.position.y=.25,x.add(m);for(let w=0;w<5;w++){const _=w/5*Math.PI*2,v=new E(new Ot(.14,8,8),r);v.position.set(Math.cos(_)*.24,.08,Math.sin(_)*.24),x.add(v)}const p=11;for(let w=0;w<p;w++){const _=w/p*Math.PI*2+c%3*.2,v=w%2===0,L=new ut;L.position.y=v?.58:.42,L.rotation.y=_,L.rotation.z=v?.22:-.05;for(let A=0;A<3;A++){const S=new E(new it(1.15,.04,.58-A*.12),a);S.position.set(.6+A*.98,.28-A*.26,0),S.rotation.z=-.18-A*.26,S.rotation.x=.15,S.castShadow=!0,L.add(S)}x.add(L)}d.add(x),this.group.add(d),this.swayingCrowns.push({crownGroup:x,phase:c*.75,speed:1.35+c%4*.18,amplitude:.045}),t.addCylinder({id:`palm_trunk_${c}`,x:l.x,z:l.z,radius:.45,topY:5,bottomY:0,walkable:!1,tag:"tree_trunk"})}}buildDokChampaTrees(t){const e=[{id:"champa_climb_north",x:-16,z:-34,scale:1.35,climbable:!0},{id:"champa_climb_south",x:16,z:34,scale:1.35,climbable:!0},{id:"champa_3",x:16,z:-34,scale:1.05,climbable:!1},{id:"champa_4",x:-16,z:34,scale:1.05,climbable:!1},{id:"champa_5",x:-31,z:-48,scale:1,climbable:!1},{id:"champa_6",x:31,z:-48,scale:1,climbable:!1},{id:"champa_7",x:-31,z:-64,scale:.95,climbable:!1},{id:"champa_8",x:31,z:-64,scale:.95,climbable:!1},{id:"champa_9",x:-39,z:-18,scale:1.08,climbable:!1},{id:"champa_10",x:39,z:-18,scale:1.08,climbable:!1},{id:"champa_11",x:-39,z:18,scale:1.08,climbable:!1},{id:"champa_12",x:39,z:18,scale:1.08,climbable:!1},{id:"champa_13",x:-22,z:48,scale:1.02,climbable:!1},{id:"champa_14",x:22,z:48,scale:1.02,climbable:!1},{id:"champa_15",x:-22,z:64,scale:.98,climbable:!1},{id:"champa_16",x:22,z:64,scale:.98,climbable:!1}],n=new J({color:6900533,roughness:.86}),i=new J({color:9197618,roughness:.74}),o=new J({color:3902518,roughness:.78}),r=new J({color:16776695,roughness:.45}),a=new J({color:16763432,emissive:7229184,emissiveIntensity:.18,roughness:.4});for(let c=0;c<e.length;c++){const l=e[c],d=new ut;d.position.set(l.x,0,l.z);const u=l.scale,h=new E(new Lt(.28*u,.42*u,2.2*u,10),n);h.position.y=1.1*u,h.rotation.z=.08,h.castShadow=!0,h.receiveShadow=!0,d.add(h);const f=new ut;f.position.y=2*u;const g=[{dx:1.1,dz:.7,rotZ:-.58,rotX:.35},{dx:-1.1,dz:.8,rotZ:.55,rotX:.38},{dx:-.9,dz:-1,rotZ:.48,rotX:-.45},{dx:1,dz:-.9,rotZ:-.52,rotX:-.42}];for(const m of g){const p=new E(new Lt(.14*u,.24*u,1.9*u,8),n);p.position.set(m.dx*.55*u,.65*u,m.dz*.55*u),p.rotation.z=m.rotZ,p.rotation.x=m.rotX,p.castShadow=!0,f.add(p);const w=new E(new Ds(1.35*u,1),o);w.position.set(m.dx*1.15*u,1.35*u,m.dz*1.15*u),w.scale.set(1.15,.72,1.15),w.castShadow=!0,w.receiveShadow=!0,f.add(w);for(let _=0;_<6;_++){const v=_/6*Math.PI*2,L=this.createDokChampaBlossom(r,a,.14*u);L.position.set(m.dx*1.15*u+Math.cos(v)*.85*u,1.55*u+_%2*.25*u,m.dz*1.15*u+Math.sin(v)*.85*u),f.add(L)}}const x=new E(new Ds(1.5*u,1),o);x.position.set(0,1.9*u,0),x.scale.set(1.2,.75,1.2),x.castShadow=!0,f.add(x),d.add(f);for(let m=0;m<5;m++){const p=m*1.25+c,w=.85+m%3*.45,_=this.createDokChampaBlossom(r,a,.09);_.position.set(Math.cos(p)*w,.18,Math.sin(p)*w),d.add(_)}if(this.swayingCrowns.push({crownGroup:f,phase:c*1.1,speed:1.15,amplitude:.025}),t.addCylinder({id:`${l.id}_trunk`,x:l.x,z:l.z,radius:.38*u,topY:2.5*u,bottomY:0,walkable:!1,tag:"tree_trunk"}),l.climbable){const m=l.x<0?1:-1,p=l.x+m*1.55,w=l.z+.9,_=new E(new it(1.2,.14,1.2),i);_.position.set(m*1.55,.82-.07,.9),_.castShadow=!0,_.receiveShadow=!0,d.add(_);const v=new E(new Lt(.1,.12,.8,8),n);v.position.set(m*1.55,.4,.9),d.add(v),t.addBox({id:`${l.id}_platform_1`,minX:p-.65,maxX:p+.65,minZ:w-.65,maxZ:w+.65,topY:.82,bottomY:.6,walkable:!0,tag:"tree"});const L=l.x+m*1.1,A=l.z-.55,S=new E(new it(1.35,.14,1.35),i);S.position.set(m*1.1,1.62-.07,-.55),S.castShadow=!0,S.receiveShadow=!0,d.add(S),t.addBox({id:`${l.id}_platform_2`,minX:L-.72,maxX:L+.72,minZ:A-.72,maxZ:A+.72,topY:1.62,bottomY:1.3,walkable:!0,tag:"tree"});const P=l.x,M=l.z,y=new E(new Lt(1.25,1.1,.16,12),i);y.position.set(0,2.45-.08,0),y.castShadow=!0,y.receiveShadow=!0,d.add(y),t.addBox({id:`${l.id}_canopy_perch`,minX:P-1.15,maxX:P+1.15,minZ:M-1.15,maxZ:M+1.15,topY:2.45,bottomY:2.1,walkable:!0,tag:"tree"}),t.addClimbable({id:`${l.id}_climb`,label:"ປີນຕົ້ນດອກຈຳປາ [F]",entryPosition:new C(p,0,w),targetPosition:new C(P,2.48,M),radius:2.4})}this.group.add(d)}}createDokChampaBlossom(t,e,n){const i=new ut,o=new E(new Ot(n*.45,6,6),e);i.add(o);for(let r=0;r<5;r++){const a=r/5*Math.PI*2,c=new E(new Ot(n*.65,6,5),t);c.scale.set(1.3,.35,.75),c.position.set(Math.cos(a)*n*.7,.02,Math.sin(a)*n*.7),c.rotation.y=-a,i.add(c)}return i}buildTopiaryAndFlowerbeds(){const t=new J({color:2517291,roughness:.84}),e=new J({color:3706428,roughness:.8}),n=new J({color:16752640,roughness:.6}),i=new J({color:15277667,roughness:.6}),o=[{x:-29,z:-38},{x:29,z:-38},{x:-29,z:-66},{x:29,z:-66},{x:-15,z:38},{x:15,z:38},{x:-15,z:54},{x:15,z:54},{x:-15,z:70},{x:15,z:70},{x:-33,z:-26},{x:33,z:-26},{x:-33,z:26},{x:33,z:26},{x:-36,z:42},{x:36,z:42},{x:-36,z:66},{x:36,z:66}];for(let r=0;r<o.length;r++){const a=o[r],c=new ut;c.position.set(a.x,.15,a.z);const l=new E(new Lt(.85,.95,.45,12),t);l.position.y=.225,l.castShadow=!0,l.receiveShadow=!0,c.add(l);const d=new E(r%2===0?new Qt(.7,1.35,12):new Ot(.68,12,10),e);d.position.y=r%2===0?1.05:.85,d.castShadow=!0,c.add(d);for(let u=0;u<8;u++){const h=u/8*Math.PI*2,f=new E(new Ot(.14,6,6),u%2===0?n:i);f.position.set(Math.cos(h)*.82,.46,Math.sin(h)*.82),c.add(f)}this.group.add(c)}}buildParkBenches(t){const e=[{id:"bench_fountain_nw",x:-15.5,z:-61.5,rotY:Math.PI*.25},{id:"bench_fountain_ne",x:15.5,z:-61.5,rotY:-Math.PI*.25},{id:"bench_fountain_w",x:-18.5,z:-52,rotY:Math.PI*.5},{id:"bench_fountain_e",x:18.5,z:-52,rotY:-Math.PI*.5},{id:"bench_fountain_sw",x:-15.5,z:-42.5,rotY:Math.PI*.75},{id:"bench_fountain_se",x:15.5,z:-42.5,rotY:-Math.PI*.75},{id:"bench_prom_nw1",x:-11.2,z:-26,rotY:Math.PI*.5},{id:"bench_prom_ne1",x:11.2,z:-26,rotY:-Math.PI*.5},{id:"bench_prom_nw2",x:-11.2,z:-35.5,rotY:Math.PI*.5},{id:"bench_prom_ne2",x:11.2,z:-35.5,rotY:-Math.PI*.5},{id:"bench_pond_nw",x:-19,z:-5.8,rotY:0},{id:"bench_pond_ne",x:19,z:-5.8,rotY:0},{id:"bench_pond_sw",x:-19,z:5.8,rotY:Math.PI},{id:"bench_pond_se",x:19,z:5.8,rotY:Math.PI},{id:"bench_south_w1",x:-11.2,z:26.5,rotY:Math.PI*.5},{id:"bench_south_e1",x:11.2,z:26.5,rotY:-Math.PI*.5},{id:"bench_south_w2",x:-11.2,z:48,rotY:Math.PI*.5},{id:"bench_south_e2",x:11.2,z:48,rotY:-Math.PI*.5}],n=new J({color:9260586,roughness:.62,metalness:.08}),i=new J({color:15458508,roughness:.72}),o=new J({color:14264130,roughness:.35,metalness:.6}),r=this.createIssaraponSignTexture("bench"),a=new J({map:r,roughness:.32,metalness:.15,emissive:3810312,emissiveIntensity:.22});for(const c of e){const l=new ut;l.position.set(c.x,0,c.z),l.rotation.y=c.rotY;for(const p of[-.95,.95]){const w=new E(new it(.24,.54,.78),i);w.position.set(p,.27,0),w.castShadow=!0,w.receiveShadow=!0,l.add(w);const _=new E(new it(.18,.18,.82),n);_.position.set(p,.7,0),_.castShadow=!0,l.add(_);const v=new E(new Lt(.08,.08,.2,8),o);v.rotation.z=Math.PI*.5,v.position.set(p,.7,.36),l.add(v)}for(let p=-1;p<=1;p++){const w=new E(new it(2.3,.07,.24),n);w.position.set(0,.585,p*.26),w.castShadow=!0,w.receiveShadow=!0,l.add(w)}for(const p of[.82,1.08]){const w=new E(new it(2.26,.18,.07),n);w.position.set(0,p,-.36),w.castShadow=!0,l.add(w)}const d=new E(new it(1.96,.38,.09),o);d.position.set(0,.98,-.36),d.castShadow=!0,l.add(d);const u=new E(new ge(1.88,.32),a);u.position.set(0,.98,-.312),l.add(u);const h=new E(new ge(1.88,.32),a);h.position.set(0,.98,-.408),h.rotation.y=Math.PI,l.add(h),this.group.add(l);const f=Math.abs(Math.cos(c.rotY)),g=Math.abs(Math.sin(c.rotY)),x=1.18*f+.48*g,m=1.18*g+.48*f;t.addBox({id:c.id,minX:c.x-x,maxX:c.x+x,minZ:c.z-m,maxZ:c.z+m,topY:.62,bottomY:0,walkable:!0,tag:"bench"})}}createIssaraponSignTexture(t){const e=document.createElement("canvas");if(t==="bench"){e.width=768,e.height=160;const i=e.getContext("2d"),o=i.createLinearGradient(0,0,0,e.height);o.addColorStop(0,"#4f161e"),o.addColorStop(.5,"#360d13"),o.addColorStop(1,"#4f161e"),i.fillStyle=o,i.fillRect(0,0,e.width,e.height),i.strokeStyle="#ffd166",i.lineWidth=8,i.strokeRect(8,8,e.width-16,e.height-16),i.strokeStyle="rgba(255, 209, 102, 0.55)",i.lineWidth=3,i.strokeRect(18,18,e.width-36,e.height-36),i.fillStyle="#ffd166",i.font='bold 58px "Fredoka", "Plus Jakarta Sans", sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="rgba(0, 0, 0, 0.75)",i.shadowBlur=8,i.fillText("🌼 Issarapon School 🌼",e.width*.5,e.height*.52)}else{e.width=1024,e.height=420;const i=e.getContext("2d"),o=i.createLinearGradient(0,0,0,e.height);o.addColorStop(0,"#5a1620"),o.addColorStop(.5,"#380b12"),o.addColorStop(1,"#5a1620"),i.fillStyle=o,i.fillRect(0,0,e.width,e.height),i.strokeStyle="#ffd166",i.lineWidth=14,i.strokeRect(14,14,e.width-28,e.height-28),i.strokeStyle="#ff9f1c",i.lineWidth=4,i.strokeRect(30,30,e.width-60,e.height-60),i.fillStyle="#9bf6ee",i.font='bold 42px "Noto Sans Lao", sans-serif',i.textAlign="center",i.fillText("✨ ຍິນດີຕ້ອນຮັບສູ່ ສວນປະຕູໄຊ • ແມວລາວ ✨",e.width*.5,98),i.fillStyle="#ffd166",i.font='bold 92px "Fredoka", "Plus Jakarta Sans", sans-serif',i.shadowColor="rgba(0, 0, 0, 0.85)",i.shadowBlur=12,i.fillText("Issarapon School",e.width*.5,224),i.shadowBlur=4,i.fillStyle="#fff9f0",i.font='bold 44px "Noto Sans Lao", sans-serif',i.fillText("🌼 ໂຮງຮຽນ ອິດສະຫຼະພອນ • ນະຄອນຫຼວງວຽງຈັນ 🌼",e.width*.5,336)}const n=new lm(e);return n.colorSpace=De,n.needsUpdate=!0,n}buildIssaraponSchoolSigns(t){const e=[{id:"issarapon_sign_spawn",x:-5.2,y:0,z:-65.2,rotY:.22,scale:1.05},{id:"issarapon_sign_fountain_sw",x:-5.4,y:0,z:-38.2,rotY:-.15,scale:1.08},{id:"issarapon_sign_fountain_se",x:5.4,y:0,z:-38.2,rotY:.15,scale:1.08},{id:"issarapon_sign_monument_nw",x:-6.8,y:0,z:-14.8,rotY:.12,scale:1.15},{id:"issarapon_sign_monument_ne",x:6.8,y:0,z:-14.8,rotY:-.12,scale:1.15},{id:"issarapon_sign_monument_sw",x:-6.8,y:0,z:14.8,rotY:Math.PI-.12,scale:1.15},{id:"issarapon_sign_monument_se",x:6.8,y:0,z:14.8,rotY:Math.PI+.12,scale:1.15},{id:"issarapon_sign_rooftop",x:-3.2,y:16,z:6.2,rotY:.25,scale:.92}],n=this.createIssaraponSignTexture("billboard"),i=new J({map:n,roughness:.28,metalness:.12,emissive:3875336,emissiveIntensity:.26}),o=new J({color:9260586,roughness:.58}),r=new J({color:15119430,roughness:.3,metalness:.68}),a=new J({color:11680290,roughness:.55}),c=new J({color:15458508,roughness:.72});for(const l of e){const d=new ut;d.position.set(l.x,l.y,l.z),d.rotation.y=l.rotY,d.scale.setScalar(l.scale);const u=new E(new it(3.5,.32,.85),c);u.position.y=.16,u.castShadow=!0,u.receiveShadow=!0,d.add(u);for(const w of[-1.42,1.42]){const _=new E(new Lt(.11,.13,2.45,10),o);_.position.set(w,1.35,0),_.castShadow=!0,d.add(_);const v=new E(new Lt(.16,.16,.18,10),r);v.position.set(w,2.42,0),d.add(v)}const h=new E(new it(2.76,1.18,.14),r);h.position.set(0,1.62,0),h.castShadow=!0,d.add(h);const f=new E(new ge(2.62,1.06),i);f.position.set(0,1.62,.075),d.add(f);const g=new E(new ge(2.62,1.06),i);g.position.set(0,1.62,-.075),g.rotation.y=Math.PI,d.add(g);const x=new E(new it(3.35,.16,.72),a);x.position.set(0,2.52,0),x.castShadow=!0,d.add(x);const m=new E(new it(2.55,.18,.54),a);m.position.set(0,2.72,0),m.castShadow=!0,d.add(m);const p=new E(new Qt(.14,.55,8),r);p.position.set(0,3.06,0),d.add(p),this.group.add(d),l.y<1&&t.addBox({id:l.id,minX:l.x-1.5,maxX:l.x+1.5,minZ:l.z-.5,maxZ:l.z+.5,topY:.34,bottomY:0,walkable:!0,tag:"bench"})}}buildLaoStreetlamps(t){const e=[{x:-11.5,z:-80},{x:11.5,z:-80},{x:-17.5,z:-66},{x:17.5,z:-66},{x:-17.5,z:-38},{x:17.5,z:-38},{x:-11.5,z:-20},{x:11.5,z:-20},{x:-11.5,z:20},{x:11.5,z:20},{x:-11.5,z:40},{x:11.5,z:40},{x:-11.5,z:62},{x:11.5,z:62},{x:-11.5,z:80},{x:11.5,z:80}],n=new J({color:2893088,roughness:.45,metalness:.65}),i=new J({color:14922052,roughness:.3,metalness:.72});for(let o=0;o<e.length;o++){const r=e[o],a=new ut;a.position.set(r.x,0,r.z);const c=new E(new Lt(.24,.34,.75,10),i);c.position.y=.375,c.castShadow=!0,a.add(c);const l=new E(new Lt(.1,.15,3.8,10),n);l.position.y=2.3,l.castShadow=!0,a.add(l);const d=new E(new it(1.15,.12,.12),i);d.position.y=4.15,a.add(d);const u=new E(new Qt(.16,.65,8),i);u.position.y=4.52,a.add(u);const h=new J({color:16774097,emissive:16758605,emissiveIntensity:.35,roughness:.2});this.lampGlobeMaterials.push(h);for(const g of[-.48,.48]){const x=new E(new Ot(.22,10,10),h);x.position.set(g,3.92,0),a.add(x)}const f=new Oi(16758876,.25,18,1.7);f.position.set(0,3.85,0),a.add(f),this.lampLights.push(f),this.group.add(a),t.addCylinder({id:`streetlamp_${o}`,x:r.x,z:r.z,radius:.3,topY:4.4,bottomY:0,walkable:!1,tag:"pillar"})}}buildPondLotusPadsAndFlowers(t){const e=[{id:"nw",cx:-19,cz:-14.5},{id:"ne",cx:19,cz:-14.5},{id:"sw",cx:-19,cz:14.5},{id:"se",cx:19,cz:14.5}],n=new J({color:3048760,roughness:.72}),i=new J({color:3710018,roughness:.65}),o=new J({color:16744619,roughness:.42}),r=new J({color:16775418,roughness:.42}),a=new J({color:16766287,roughness:.35});for(const c of e){const l=[{dx:-3.2,dz:-3.6},{dx:0,dz:0},{dx:3.1,dz:3.6}];for(let u=0;u<l.length;u++){const h=c.cx+l[u].dx,f=c.cz+l[u].dz,g=new ut;g.position.set(h,.26,f);const x=new E(new Lt(1.05,1.02,.05,24),i);x.receiveShadow=!0,g.add(x);const m=new E(new Ce(1.03,.055,8,24),i);m.rotation.x=Math.PI*.5,m.position.y=.04,g.add(m);const p=this.createSacredLotusFlower(u%2===0?o:r,a,.26);p.position.set(.55,.06,.35),g.add(p),this.group.add(g),t.addCylinder({id:`giant_lotus_pad_${c.id}_${u}`,x:h,z:f,radius:1.05,topY:.28,bottomY:0,walkable:!0,tag:"fountain_basin"})}const d=[{dx:-3.6,dz:2.8,r:.48,hasFlower:!0,pink:!0},{dx:-2.1,dz:4.4,r:.38,hasFlower:!1,pink:!1},{dx:3.5,dz:-3.2,r:.52,hasFlower:!0,pink:!1},{dx:2.2,dz:-4.6,r:.4,hasFlower:!0,pink:!0},{dx:-1.6,dz:-1.8,r:.44,hasFlower:!1,pink:!0},{dx:1.8,dz:1.9,r:.46,hasFlower:!0,pink:!0},{dx:-4,dz:-.6,r:.42,hasFlower:!0,pink:!1},{dx:3.9,dz:.8,r:.45,hasFlower:!1,pink:!0}];for(let u=0;u<d.length;u++){const h=d[u],f=new ut;f.position.set(c.cx+h.dx,.258,c.cz+h.dz);const g=new E(new je(h.r,16,.15,Math.PI*1.85),n);if(g.rotation.x=-Math.PI*.5,g.rotation.z=u*1.1,g.receiveShadow=!0,f.add(g),h.hasFlower){const x=this.createSacredLotusFlower(h.pink?o:r,a,.22);x.position.y=.03,f.add(x)}this.group.add(f),this.floatingLotuses.push({mesh:f,baseY:.258,phase:u*.9+c.cx})}}}createSacredLotusFlower(t,e,n){const i=new ut,o=new E(new Lt(n*.38,n*.2,n*.28,8),e);o.position.y=n*.15,i.add(o);for(let r=0;r<2;r++){const a=r===0?8:6,c=r===0?.85:.45;for(let l=0;l<a;l++){const d=l/a*Math.PI*2+r*.4,u=new E(new Qt(n*.26,n*.75,5),t);u.position.set(Math.cos(d)*n*(.35-r*.1),n*.24,Math.sin(d)*n*(.35-r*.1)),u.rotation.z=-Math.cos(d)*c,u.rotation.x=Math.sin(d)*c,i.add(u)}}return i}buildKnockableParkProps(){const t=[{type:"bowl",x:0,y:.52,z:-40.3},{type:"cup",x:-8.3,y:.52,z:-43.7},{type:"basket",x:8.3,y:.52,z:-43.7},{type:"bowl",x:0,y:.52,z:-63.7},{type:"cup",x:-11.2,y:.62,z:-25.6},{type:"basket",x:11.2,y:.62,z:-25.6},{type:"bowl",x:-11.2,y:.62,z:-35.1},{type:"cup",x:11.2,y:.62,z:-35.1},{type:"basket",x:-18.6,y:.62,z:-5.8},{type:"cup",x:18.6,y:.62,z:-5.8},{type:"bowl",x:-11.2,y:.62,z:26.1},{type:"basket",x:11.2,y:.62,z:26.1}],e=new J({color:13147476,roughness:.78}),n=new J({color:16754470,roughness:.55}),i=new J({color:16117734,roughness:.35}),o=new J({color:5123092,roughness:.25}),r=new J({color:2533018,roughness:.4}),a=new J({color:16041038,roughness:.25,metalness:.78});for(const c of t){const l=new ut;if(l.position.set(c.x,c.y+.14,c.z),c.type==="basket"){const d=new E(new Lt(.22,.15,.22,10),e);d.castShadow=!0,l.add(d);for(let u=0;u<5;u++){const h=u/5*Math.PI*2,f=new E(new Ot(.075,6,6),n);f.position.set(Math.cos(h)*.09,.12,Math.sin(h)*.09),l.add(f)}}else if(c.type==="cup"){const d=new E(new Lt(.13,.095,.28,12),i);d.castShadow=!0,l.add(d);const u=new E(new je(.12,12),o);u.rotation.x=-Math.PI*.5,u.position.y=.135,l.add(u);const h=new E(new Lt(.015,.015,.22,6),r);h.position.set(.03,.18,.02),h.rotation.z=-.25,l.add(h)}else{const d=new E(new Lt(.08,.13,.08,12),a);d.position.y=-.08,l.add(d);const u=new E(new Lt(.19,.11,.18,14),a);u.position.y=.03,u.castShadow=!0,l.add(u);const h=new E(new Qt(.12,.16,8),n);h.position.y=.15,l.add(h)}this.group.add(l),this.knockableProps.push({mesh:l,initialPos:new C(c.x,c.y+.14,c.z),initialFloorY:c.y,velocity:new C,angularVel:new C,radius:.24,floorY:c.y,knocked:!1})}}resetKnockableProps(){for(const t of this.knockableProps)t.mesh.position.copy(t.initialPos),t.mesh.rotation.set(0,0,0),t.velocity.set(0,0,0),t.angularVel.set(0,0,0),t.floorY=t.initialFloorY,t.knocked=!1}swatNearbyProps(t,e=2.2){let n=0;for(const i of this.knockableProps)if(i.mesh.position.distanceTo(t)<=e){const r=new C().subVectors(i.mesh.position,t).setY(0);r.lengthSq()<.001&&r.set(Math.random()-.5,0,Math.random()-.5),r.normalize();const a=3.4+Math.random()*1.8;i.velocity.set(r.x*a,3.2+Math.random()*1.4,r.z*a),i.angularVel.set((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*14),i.floorY=.02,i.knocked||(i.knocked=!0),n++}return n}setNightMode(t){const e=Ht.clamp(t,0,1);for(const n of this.lampLights)n.intensity=Ht.lerp(.15,2.4,e);for(const n of this.lampGlobeMaterials)n.emissiveIntensity=Ht.lerp(.25,2.2,e)}update(t,e,n){const i=Math.min(t,.1);for(const o of this.swayingCrowns)o.crownGroup.rotation.z=Math.sin(e*o.speed+o.phase)*o.amplitude,o.crownGroup.rotation.x=Math.cos(e*(o.speed*.82)+o.phase)*o.amplitude*.8;for(const o of this.floatingLotuses)o.mesh.position.y=o.baseY+Math.sin(e*2.1+o.phase)*.012;for(const o of this.knockableProps){if(!o.knocked&&o.mesh.position.distanceTo(n)<.58&&this.swatNearbyProps(n,.75),!o.knocked)continue;const r=o.velocity.lengthSq(),a=o.angularVel.lengthSq();if(r<5e-4&&a<5e-4&&o.mesh.position.y<=o.floorY+o.radius*.55)continue;o.velocity.y-=11.8*i,o.mesh.position.addScaledVector(o.velocity,i),o.mesh.rotation.x+=o.angularVel.x*i,o.mesh.rotation.y+=o.angularVel.y*i,o.mesh.rotation.z+=o.angularVel.z*i;const c=o.floorY+o.radius*.5;o.mesh.position.y<c&&(o.mesh.position.y=c,o.velocity.y<-.6?o.velocity.y=-o.velocity.y*.42:o.velocity.y=0,o.velocity.x*=Math.max(0,1-4.5*i),o.velocity.z*=Math.max(0,1-4.5*i),o.angularVel.multiplyScalar(Math.max(0,1-4*i)))}}}const Ka={siamese:{id:"siamese",name:"Classic Seal-Point Siamese",subtitle:"Warm ivory-cream silk coat with chocolate seal points & sapphire eyes",bodyColor:"#f5ead6",pointColor:"#3d261c",bellyColor:"#fbf5ea",eyeColor:"#2b82e3",noseColor:"#2b1a13"},ginger_tabby:{id:"ginger_tabby",name:"Ginger & White Street Tabby",subtitle:"Warm marmalade orange stripes with snowy white mittens & amber-gold eyes",bodyColor:"#e88331",pointColor:"#b54c13",bellyColor:"#fcfaf5",eyeColor:"#d99b1e",noseColor:"#e67e8b"},korat:{id:"korat",name:"Silver-Blue Korat",subtitle:"Velvet blue-silver lucky coat with dusty slate tips & emerald-green eyes",bodyColor:"#768699",pointColor:"#4c5969",bellyColor:"#98a7b8",eyeColor:"#2ebd62",noseColor:"#3b4452"},calico:{id:"calico",name:"Golden Temple Calico",subtitle:"Creamy white base with spiced ginger & espresso patches and honey-green eyes",bodyColor:"#f7efe2",pointColor:"#2e1f18",bellyColor:"#ffffff",eyeColor:"#78b833",noseColor:"#f08a99"}};class o0{group;currentCoat="siamese";rootPivot;spineGroup;chestMesh;headPivot;jawPivot;leftEarPivot;rightEarPivot;leftEyelid;rightEyelid;leftHappyCrescent;rightHappyCrescent;bellPivot;dokChampaGroup;frontLeftLeg;frontRightLeg;backLeftLeg;backRightLeg;tailSegments=[];siameseMaskMesh;tabbyStripesGroup;calicoPatchesGroup;bodyMat;pointMat;bellyMat;pawMat;muzzleMat;eyeIrisMat;noseMat;innerEarMat;whiskerMat;calicoGingerMat;calicoEspressoMat;fxGroup;meowRings=[];loafRings=[];swatArcMesh;meowAnimTimer=0;swatAnimTimer=0;loafSpawnTimer=0;blinkTimer=2.4;blinkDuration=0;constructor(t){this.group=new ut,this.group.name="NekoLaoCat";const e=Ka[this.currentCoat];this.bodyMat=new J({color:e.bodyColor,roughness:.72,metalness:.04}),this.pointMat=new J({color:e.pointColor,roughness:.74,metalness:.04}),this.bellyMat=new J({color:e.bellyColor,roughness:.76,metalness:.02}),this.pawMat=new J({color:e.pointColor,roughness:.75,metalness:.03}),this.muzzleMat=new J({color:e.pointColor,roughness:.72,metalness:.03}),this.eyeIrisMat=new J({color:e.eyeColor,roughness:.18,metalness:.12,emissive:new _t(e.eyeColor).multiplyScalar(.18)}),this.noseMat=new J({color:e.noseColor,roughness:.45,metalness:.08}),this.innerEarMat=new J({color:"#f29eb0",roughness:.65,metalness:.02}),this.whiskerMat=new J({color:"#fffaf0",roughness:.4,metalness:.1}),this.calicoGingerMat=new J({color:"#e37424",roughness:.72,metalness:.03}),this.calicoEspressoMat=new J({color:"#2b1d16",roughness:.74,metalness:.03}),this.rootPivot=new ut,this.rootPivot.position.set(0,.28,0),this.group.add(this.rootPivot),this.spineGroup=new ut,this.rootPivot.add(this.spineGroup);const n=new fn(.142,.25,14,22);n.rotateX(Math.PI*.5);const i=new E(n,this.bodyMat);i.position.set(0,.015,0),i.castShadow=!0,i.receiveShadow=!0,this.spineGroup.add(i);const o=new Ot(.152,20,18);this.chestMesh=new E(o,this.bodyMat),this.chestMesh.position.set(0,.025,.135),this.chestMesh.scale.set(.96,1.02,1.05),this.chestMesh.castShadow=!0,this.chestMesh.receiveShadow=!0,this.spineGroup.add(this.chestMesh);const r=new Ot(.125,16,14),a=new E(r,this.bellyMat);a.position.set(0,-.015,.185),a.scale.set(.88,.92,.75),a.castShadow=!0,this.spineGroup.add(a);const c=new fn(.112,.23,10,16);c.rotateX(Math.PI*.5);const l=new E(c,this.bellyMat);l.position.set(0,-.042,.01),this.spineGroup.add(l);const d=new Ot(.148,18,16),u=new E(d,this.bodyMat);u.position.set(0,.02,-.145),u.scale.set(.98,1.02,1.05),u.castShadow=!0,u.receiveShadow=!0,this.spineGroup.add(u),this.tabbyStripesGroup=new ut,this.spineGroup.add(this.tabbyStripesGroup);for(let pt=0;pt<4;pt++){const tt=.08-pt*.075,Ft=new Ce(.143-Math.abs(pt-1.5)*.004,.014,8,24,Math.PI*1.15),Ct=new E(Ft,this.pointMat);Ct.position.set(0,.015,tt),Ct.rotation.z=-Math.PI*.075,Ct.scale.set(1,1.02,.65),this.tabbyStripesGroup.add(Ct)}this.calicoPatchesGroup=new ut,this.spineGroup.add(this.calicoPatchesGroup);const h=new Ot(.146,16,14),f=new E(h,this.calicoGingerMat);f.position.set(.032,.045,.03),f.scale.set(.88,.78,1.05),this.calicoPatchesGroup.add(f);const g=new Ot(.144,16,14),x=new E(g,this.calicoEspressoMat);x.position.set(-.035,.042,-.11),x.scale.set(.86,.82,.96),this.calicoPatchesGroup.add(x);const m=new Ot(.11,14,12),p=new E(m,this.calicoEspressoMat);p.position.set(-.06,.055,.12),p.scale.set(.8,.75,.85),this.calicoPatchesGroup.add(p);const w=new ut;w.position.set(0,.095,.205),w.rotation.x=Math.PI*.34,this.spineGroup.add(w);const _=t.get("lao_silk_collar",2,1),v=new J({map:_,roughness:.42,metalness:.12}),L=new Ce(.126,.024,14,32),A=new E(L,v);A.castShadow=!0,w.add(A);const S=new J({color:"#ffd452",roughness:.18,metalness:.88}),P=new Ce(.129,.005,8,32),M=new E(P,S);M.position.z=.016;const y=new E(P,S);y.position.z=-.016,w.add(M,y),this.bellPivot=new ut,this.bellPivot.position.set(0,.005,.315),this.spineGroup.add(this.bellPivot);const R=new Ce(.012,.004,8,14),F=new E(R,S);F.position.set(0,.028,0),this.bellPivot.add(F);const N=new Ot(.036,18,16),B=new E(N,S);B.castShadow=!0,this.bellPivot.add(B);const W=new Ce(.0365,.0055,8,20);W.rotateX(Math.PI*.5);const V=new E(W,S);this.bellPivot.add(V);const K=new de({color:"#2b1905"}),X=new it(.01,.018,.052),ft=new E(X,K);ft.position.set(0,-.024,.01),this.bellPivot.add(ft),this.headPivot=new ut,this.headPivot.position.set(0,.165,.235),this.spineGroup.add(this.headPivot);const yt=new Ot(.172,26,22),St=new E(yt,this.bodyMat);St.position.set(0,.055,.045),St.scale.set(1.08,.96,1.02),St.castShadow=!0,St.receiveShadow=!0,this.headPivot.add(St);const Xt=new Ot(.095,16,14),te=new E(Xt,this.bodyMat);te.position.set(.096,.005,.095),te.scale.set(1.12,.86,.95);const Z=new E(Xt,this.bodyMat);Z.position.set(-.096,.005,.095),Z.scale.set(1.12,.86,.95),this.headPivot.add(te,Z);const rt=new Ot(.122,18,16);this.siameseMaskMesh=new E(rt,this.pointMat),this.siameseMaskMesh.position.set(0,.038,.125),this.siameseMaskMesh.scale.set(1.12,.86,.76),this.headPivot.add(this.siameseMaskMesh);const At=new E(new Ot(.105,14,12),this.calicoGingerMat);At.position.set(.075,.105,.055),At.scale.set(.95,.82,.95),this.calicoPatchesGroup.add(At);const ct=new ut;this.headPivot.add(ct);const Nt=new E(new Ot(.11,14,12),this.calicoGingerMat);Nt.position.set(.068,.115,.055),Nt.scale.set(.92,.75,.92);const Vt=new E(new Ot(.098,14,12),this.calicoEspressoMat);Vt.position.set(-.072,.11,.045),Vt.scale.set(.88,.75,.88),ct.add(Nt,Vt),this.calicoPatchesGroup.userData.headGroup=ct;const kt=new ut;this.headPivot.add(kt);for(let pt=-1;pt<=1;pt++){const tt=new E(new fn(.011,.065,6,8),this.pointMat);tt.position.set(pt*.036,.145,.155-Math.abs(pt)*.01),tt.rotation.x=Math.PI*.32,tt.rotation.z=-pt*.22,kt.add(tt)}this.tabbyStripesGroup.userData.headGroup=kt;const Kt=new E(new Ot(.054,14,12),this.muzzleMat);Kt.position.set(.038,-.005,.185),Kt.scale.set(1.08,.85,.88);const Q=new E(new Ot(.054,14,12),this.muzzleMat);Q.position.set(-.038,-.005,.185),Q.scale.set(1.08,.85,.88),this.headPivot.add(Kt,Q),this.jawPivot=new ut,this.jawPivot.position.set(0,-.032,.145),this.headPivot.add(this.jawPivot);const ot=new E(new Ot(.048,12,10),this.muzzleMat);ot.position.set(0,-.012,.025),ot.scale.set(1.1,.65,.95),this.jawPivot.add(ot);const D=new J({color:"#f57893",roughness:.4,metalness:.05}),Rt=new E(new Ot(.028,10,8),D);Rt.position.set(0,.004,.035),Rt.scale.set(.95,.45,1.15),this.jawPivot.add(Rt);const nt=new Qt(.026,.024,3);nt.rotateX(Math.PI*.5),nt.rotateZ(Math.PI);const bt=new E(nt,this.noseMat);bt.position.set(0,.022,.228),bt.scale.set(1.15,.85,.85),this.headPivot.add(bt);const dt=new Lt(.0018,.0038,.145,6);dt.rotateZ(Math.PI*.5);for(const pt of[-1,1])for(let tt=-1;tt<=1;tt++){const Ft=new E(dt,this.whiskerMat);Ft.position.set(pt*.115,-.004+tt*.014,.175),Ft.rotation.y=-pt*(.22+tt*.06),Ft.rotation.z=pt*(tt*.13-.05),this.headPivot.add(Ft)}const Bt=new J({color:"#1b1614",roughness:.35}),Et=new de({color:"#09090f"}),I=new de({color:"#ffffff"}),b=pt=>{const tt=new ut;tt.position.set(pt*.074,.068,.178),tt.rotation.y=pt*.22,tt.rotation.x=-.06,this.headPivot.add(tt);const Ft=new E(new Ot(.048,16,14),Bt);Ft.scale.set(1.02,1.08,.48),tt.add(Ft);const Ct=new E(new Ot(.043,18,16),this.eyeIrisMat);Ct.position.z=.008,Ct.scale.set(.98,1.05,.46),tt.add(Ct);const Yt=new E(new Ot(.029,16,14),Et);Yt.position.z=.015,Yt.scale.set(.76,1.02,.42),tt.add(Yt);const U=new E(new Ot(.011,10,8),I);U.position.set(.012,.014,.028),U.scale.set(1,1,.4),tt.add(U);const at=new E(new Ot(.0055,8,6),I);at.position.set(-.011,-.012,.028),at.scale.set(1,1,.4),tt.add(at);const Y=new Ot(.051,16,12,0,Math.PI*2,0,Math.PI*.56),j=new E(Y,this.bodyMat);j.scale.set(1.04,1.08,.58),j.rotation.x=-.55,tt.add(j);const xt=new Ce(.036,.0055,8,16,Math.PI*.85),mt=new E(xt,Bt);return mt.position.set(0,-.002,.028),mt.rotation.z=Math.PI*.075,mt.visible=!1,tt.add(mt),{eyelid:j,crescent:mt}},k=b(1),q=b(-1);this.leftEyelid=k.eyelid,this.rightEyelid=q.eyelid,this.leftHappyCrescent=k.crescent,this.rightHappyCrescent=q.crescent;const et=pt=>{const tt=new ut;tt.position.set(pt*.108,.178,.025),tt.rotation.z=-pt*.34,tt.rotation.x=.14,tt.rotation.y=pt*.18,this.headPivot.add(tt);const Ft=new Qt(.068,.145,18);Ft.translate(0,.065,0);const Ct=new E(Ft,this.pointMat);Ct.scale.set(1,1,.58),Ct.castShadow=!0,tt.add(Ct);const Yt=new Qt(.044,.105,14);Yt.translate(0,.055,0);const U=new E(Yt,this.innerEarMat);return U.position.set(0,0,.016),U.scale.set(.88,.95,.38),tt.add(U),tt};this.leftEarPivot=et(1),this.rightEarPivot=et(-1),this.dokChampaGroup=new ut,this.dokChampaGroup.position.set(.128,.155,.072),this.dokChampaGroup.rotation.set(.28,.42,-.52),this.headPivot.add(this.dokChampaGroup);const $=new J({color:"#fffdf7",roughness:.35,metalness:.02}),Pt=new J({color:"#ffbe1e",roughness:.32,metalness:.05,emissive:new _t("#ffaa00").multiplyScalar(.18)});for(let pt=0;pt<5;pt++){const tt=pt/5*Math.PI*2,Ft=new ut;Ft.rotation.y=tt;const Ct=new Ot(.032,12,10),Yt=new E(Ct,$);Yt.position.set(.008,.004,.032),Yt.scale.set(.64,.18,1.18),Yt.rotation.z=.25,Yt.rotation.x=-.15,Yt.castShadow=!0,Ft.add(Yt);const U=new Ot(.019,10,8),at=new E(U,Pt);at.position.set(.004,.007,.018),at.scale.set(.56,.2,.95),at.rotation.z=.25,Ft.add(at),this.dokChampaGroup.add(Ft)}const gt=new E(new Ot(.016,12,10),Pt);gt.scale.set(1,.55,1),gt.position.y=.006,this.dokChampaGroup.add(gt);const wt=(pt,tt,Ft)=>{const Ct=new ut;Ct.position.set(pt,tt,Ft),this.rootPivot.add(Ct);const Yt=new fn(.042,.095,8,12),U=new E(Yt,this.bodyMat);U.position.set(0,-.055,0),U.castShadow=!0,Ct.add(U);const at=new ut;at.position.set(0,-.115,0),Ct.add(at);const Y=new fn(.035,.09,8,12),j=new E(Y,this.pawMat);j.position.set(0,-.055,0),j.castShadow=!0,at.add(j);const xt=new ut;xt.position.set(0,-.115,.018),at.add(xt);const mt=new Ot(.044,14,12),Wt=new E(mt,this.pawMat);Wt.scale.set(1.02,.65,1.24),Wt.castShadow=!0,xt.add(Wt);const le=new E(new Ot(.022,8,8),this.innerEarMat);return le.position.set(0,-.022,.008),le.scale.set(1.1,.35,1.1),xt.add(le),{hipPivot:Ct,kneePivot:at,pawGroup:xt,upperMesh:U,lowerMesh:j,pawMesh:Wt}};this.frontLeftLeg=wt(.092,-.045,.135),this.frontRightLeg=wt(-.092,-.045,.135),this.backLeftLeg=wt(.096,-.045,-.145),this.backRightLeg=wt(-.096,-.045,-.145);let Jt=this.spineGroup;const st=.092;for(let pt=0;pt<5;pt++){const tt=new ut;pt===0?tt.position.set(0,.065,-.24):tt.position.set(0,0,-st),Jt.add(tt);const Ft=.036-pt*.0022,Ct=new fn(Ft,st*.78,8,12);Ct.rotateX(Math.PI*.5);const Yt=pt>=2?this.pointMat:this.bodyMat,U=new E(Ct,Yt);U.position.set(0,0,-st*.5),U.castShadow=!0,tt.add(U),this.tailSegments.push(tt),Jt=tt}this.fxGroup=new ut,this.group.add(this.fxGroup);const Tt=new Ce(.24,.014,8,24,Math.PI*.75),Gt=new de({color:"#ffe066",transparent:!0,opacity:0});this.swatArcMesh=new E(Tt,Gt),this.swatArcMesh.position.set(-.08,.28,.44),this.swatArcMesh.rotation.set(Math.PI*.35,-.3,-.4),this.swatArcMesh.visible=!1,this.fxGroup.add(this.swatArcMesh),this.setCoat(this.currentCoat)}setCoat(t){this.currentCoat=t;const e=Ka[t];this.bodyMat.color.set(e.bodyColor),this.pointMat.color.set(e.pointColor),this.bellyMat.color.set(e.bellyColor),this.eyeIrisMat.color.set(e.eyeColor),this.eyeIrisMat.emissive.set(e.eyeColor).multiplyScalar(.2),this.noseMat.color.set(e.noseColor);const n=this.calicoPatchesGroup.userData.headGroup,i=this.tabbyStripesGroup.userData.headGroup;t==="siamese"?(this.siameseMaskMesh.visible=!0,this.tabbyStripesGroup.visible=!1,i&&(i.visible=!1),this.calicoPatchesGroup.visible=!1,n&&(n.visible=!1),this.pawMat.color.set(e.pointColor),this.muzzleMat.color.set(e.pointColor)):t==="ginger_tabby"?(this.siameseMaskMesh.visible=!1,this.tabbyStripesGroup.visible=!0,i&&(i.visible=!0),this.calicoPatchesGroup.visible=!1,n&&(n.visible=!1),this.pawMat.color.set(e.bellyColor),this.muzzleMat.color.set(e.bellyColor)):t==="korat"?(this.siameseMaskMesh.visible=!1,this.tabbyStripesGroup.visible=!1,i&&(i.visible=!1),this.calicoPatchesGroup.visible=!1,n&&(n.visible=!1),this.pawMat.color.set(e.pointColor),this.muzzleMat.color.set(e.bodyColor)):t==="calico"&&(this.siameseMaskMesh.visible=!1,this.tabbyStripesGroup.visible=!1,i&&(i.visible=!1),this.calicoPatchesGroup.visible=!0,n&&(n.visible=!0),this.pawMat.color.set(e.bellyColor),this.muzzleMat.color.set(e.bellyColor))}triggerMeowVisual(){this.meowAnimTimer=.65;const t=new ut;t.position.set(0,.62,.28);const e=new de({color:"#ffd84d",transparent:!0,opacity:.95}),n=new E(new Ce(.09,.011,10,28),e);n.rotation.x=Math.PI*.5,t.add(n);const i=new de({color:"#ff7aa2",transparent:!0,opacity:.95}),o=new ut,r=new E(new Ot(.026,10,8),i);r.position.set(.016,.015,0);const a=new E(new Ot(.026,10,8),i);a.position.set(-.016,.015,0);const c=new E(new Qt(.034,.045,10),i);c.rotation.x=Math.PI,c.position.set(0,-.012,0),o.add(r,a,c),t.add(o),this.fxGroup.add(t),this.meowRings.push({mesh:t,age:0,maxAge:.95,startY:.62})}triggerSwatVisual(){this.swatAnimTimer=.38,this.swatArcMesh.visible=!0;const t=this.swatArcMesh.material;t.opacity=.9}spawnLoafPurrRing(){const t=new ut;t.position.set((Math.random()-.5)*.08,.42,.18+(Math.random()-.5)*.06);const e=new de({color:"#ffe169",transparent:!0,opacity:.85}),n=new E(new Ce(.055,.007,8,22),e);n.rotation.x=Math.PI*.5,t.add(n);const i=new E(new it(.042,.008,.008),e);i.position.set(0,.036,0);const o=new E(new it(.048,.008,.008),e);o.position.set(0,.02,0),o.rotation.z=.65;const r=new E(new it(.042,.008,.008),e);r.position.set(0,.004,0),t.add(i,o,r),this.fxGroup.add(t),this.loafRings.push({mesh:t,age:0,maxAge:1.6,startY:.42})}updateAnimation(t,e,n,i){const o=Math.min(e,.1);if(this.meowAnimTimer>0&&(this.meowAnimTimer=Math.max(0,this.meowAnimTimer-o)),this.swatAnimTimer>0){this.swatAnimTimer=Math.max(0,this.swatAnimTimer-o);const P=1-this.swatAnimTimer/.38,M=this.swatArcMesh.material;M.opacity=Math.max(0,(1-P)*.9),this.swatArcMesh.scale.setScalar(.85+P*.45),this.swatArcMesh.rotation.z=-.6+P*1.4,this.swatAnimTimer<=0&&(this.swatArcMesh.visible=!1)}for(let P=this.meowRings.length-1;P>=0;P--){const M=this.meowRings[P];M.age+=o;const y=M.age/M.maxAge;y>=1?(this.fxGroup.remove(M.mesh),this.meowRings.splice(P,1)):(M.mesh.position.y=M.startY+y*.48,M.mesh.scale.setScalar(.65+y*1.15),M.mesh.rotation.y+=o*2.6,M.mesh.traverse(R=>{R instanceof E&&R.material instanceof de&&(R.material.opacity=(1-y)*.92)}))}t==="loaf"?(this.loafSpawnTimer-=o,this.loafSpawnTimer<=0&&(this.loafSpawnTimer=.78,this.spawnLoafPurrRing())):this.loafSpawnTimer=.15;for(let P=this.loafRings.length-1;P>=0;P--){const M=this.loafRings[P];M.age+=o;const y=M.age/M.maxAge;y>=1?(this.fxGroup.remove(M.mesh),this.loafRings.splice(P,1)):(M.mesh.position.y=M.startY+y*.55,M.mesh.position.x+=Math.sin(n*3.5+P)*o*.08,M.mesh.scale.setScalar(.55+Math.sin(y*Math.PI)*.65),M.mesh.traverse(R=>{R instanceof E&&R.material instanceof de&&(R.material.opacity=(1-y)*.85)}))}t==="loaf"?(this.leftEyelid.rotation.x=Ht.lerp(this.leftEyelid.rotation.x,.35,o*10),this.rightEyelid.rotation.x=Ht.lerp(this.rightEyelid.rotation.x,.35,o*10),this.leftHappyCrescent.visible=!0,this.rightHappyCrescent.visible=!0):(this.leftHappyCrescent.visible=!1,this.rightHappyCrescent.visible=!1,this.blinkTimer-=o,this.blinkTimer<=0&&(this.blinkDuration=.14,this.blinkTimer=2.6+Math.random()*2.4),this.blinkDuration>0?(this.blinkDuration-=o,this.leftEyelid.rotation.x=.32,this.rightEyelid.rotation.x=.32):(this.leftEyelid.rotation.x=Ht.lerp(this.leftEyelid.rotation.x,-.58,o*16),this.rightEyelid.rotation.x=Ht.lerp(this.rightEyelid.rotation.x,-.58,o*16)));let r=.28,a=0,c=0,l=0,d=0,u=0,h=0,f=0,g=0,x=0,m=0,p=0,w=0,_=0,v=0;if(t==="loaf"){r=.14+Math.sin(n*4.2)*.008,a=.03,l=.12+Math.sin(n*2.1)*.025,u=Math.sin(n*1.4)*.04,this.chestMesh.scale.set(.98+Math.sin(n*4.2)*.035,1.02+Math.sin(n*4.2)*.03,1.05),h=-1.25,f=2.15,g=-1.25,x=2.15,m=1.25,p=-2.1,w=1.25,_=-2.1;for(let M=0;M<this.tailSegments.length;M++){const y=this.tailSegments[M];y.rotation.x=Ht.lerp(y.rotation.x,-.08,o*8),y.rotation.y=Ht.lerp(y.rotation.y,.48+M*.12,o*8),y.rotation.z=Ht.lerp(y.rotation.z,0,o*8)}}else if(t==="jump"||t==="climb"){r=.31,a=-.26,l=-.18,h=-.82,f=.35,g=-.82,x=.35,m=.78,p=.42,w=.78,_=.42;for(let P=0;P<this.tailSegments.length;P++){const M=this.tailSegments[P],y=Math.sin(n*10-P*.7)*.12;M.rotation.x=Ht.lerp(M.rotation.x,.32-P*.14,o*12),M.rotation.y=Ht.lerp(M.rotation.y,y,o*12)}}else if(t==="walk"||t==="trot"||t==="sprint"){const P=t==="sprint"?15.5:t==="trot"?11.5:8,M=t==="sprint"?.78:t==="trot"?.56:.38,y=n*P;r=.28+Math.abs(Math.sin(y))*(t==="sprint"?.048:.024),a=Math.cos(y)*(t==="sprint"?.11:.045),c=Math.sin(y)*.035,l=-a*.65+Math.sin(y*2)*.035,t==="sprint"?(h=Math.sin(y)*M,g=Math.sin(y+.45)*M,m=Math.sin(y+Math.PI)*M,w=Math.sin(y+Math.PI+.45)*M):(h=Math.sin(y)*M,w=Math.sin(y+.25)*M,g=Math.sin(y+Math.PI)*M,m=Math.sin(y+Math.PI+.25)*M),f=Math.max(0,-Math.cos(y)*M*.85),x=Math.max(0,-Math.cos(y+Math.PI)*M*.85),p=Math.max(0,Math.cos(y+Math.PI)*M*.75),_=Math.max(0,Math.cos(y)*M*.75);const F=t==="sprint"?.22:.58;for(let N=0;N<this.tailSegments.length;N++){const B=this.tailSegments[N],W=N===0?F:t==="sprint"?-.04:.08-N*.05,V=Math.sin(y-N*.65)*(.14+N*.04);B.rotation.x=Ht.lerp(B.rotation.x,W,o*12),B.rotation.y=Ht.lerp(B.rotation.y,V,o*12)}}else{const P=Math.sin(n*2.6);r=.28+P*.005,this.chestMesh.scale.set(.96+P*.018,1.02+P*.018,1.05),l=Math.sin(n*1.5)*.035,d=Math.sin(n*.85)*.07;for(let M=0;M<this.tailSegments.length;M++){const y=this.tailSegments[M],R=M===0?.42:.12-M*.06+Math.cos(n*2.2-M*.5)*.06,F=Math.sin(n*2.4-M*.65)*(.16+M*.045);y.rotation.x=Ht.lerp(y.rotation.x,R,o*10),y.rotation.y=Ht.lerp(y.rotation.y,F,o*10)}}if(this.swatAnimTimer>0||t==="swat"){const P=this.swatAnimTimer>0?1-this.swatAnimTimer/.38:n*4%1,M=Math.sin(P*Math.PI);a-=M*.14,c+=M*.12,l-=M*.1,g=-1.35*M,x=.45*(1-M),v=-.38*M}if(this.meowAnimTimer>0||t==="meow"){const P=Math.sin((1-Math.max(0,this.meowAnimTimer)/.65)*Math.PI);l-=.22*Math.max(.4,P),u+=.08*P,this.jawPivot.rotation.x=Ht.lerp(this.jawPivot.rotation.x,.38*Math.max(.5,P),o*18)}else this.jawPivot.rotation.x=Ht.lerp(this.jawPivot.rotation.x,0,o*14);const L=Math.pow(Math.max(0,Math.sin(n*3.7)),14)*.22;this.leftEarPivot.rotation.z=-.34-L*.4,this.rightEarPivot.rotation.z=.34+Math.pow(Math.max(0,Math.sin(n*2.9+1.2)),16)*.18;const A=.06+i*.28+(this.meowAnimTimer>0?.15:0);this.bellPivot.rotation.x=Math.sin(n*14)*A,this.bellPivot.rotation.z=Math.cos(n*11.5)*A*.8;const S=Math.min(1,o*14);this.rootPivot.position.y=Ht.lerp(this.rootPivot.position.y,r,S),this.spineGroup.rotation.x=Ht.lerp(this.spineGroup.rotation.x,a,S),this.spineGroup.rotation.z=Ht.lerp(this.spineGroup.rotation.z,c,S),this.headPivot.rotation.x=Ht.lerp(this.headPivot.rotation.x,l,S),this.headPivot.rotation.y=Ht.lerp(this.headPivot.rotation.y,d,S),this.headPivot.rotation.z=Ht.lerp(this.headPivot.rotation.z,u,S),this.frontLeftLeg.hipPivot.rotation.x=Ht.lerp(this.frontLeftLeg.hipPivot.rotation.x,h,S),this.frontLeftLeg.kneePivot.rotation.x=Ht.lerp(this.frontLeftLeg.kneePivot.rotation.x,f,S),this.frontRightLeg.hipPivot.rotation.x=Ht.lerp(this.frontRightLeg.hipPivot.rotation.x,g,S),this.frontRightLeg.hipPivot.rotation.z=Ht.lerp(this.frontRightLeg.hipPivot.rotation.z,v,S),this.frontRightLeg.kneePivot.rotation.x=Ht.lerp(this.frontRightLeg.kneePivot.rotation.x,x,S),this.backLeftLeg.hipPivot.rotation.x=Ht.lerp(this.backLeftLeg.hipPivot.rotation.x,m,S),this.backLeftLeg.kneePivot.rotation.x=Ht.lerp(this.backLeftLeg.kneePivot.rotation.x,p,S),this.backRightLeg.hipPivot.rotation.x=Ht.lerp(this.backRightLeg.hipPivot.rotation.x,w,S),this.backRightLeg.kneePivot.rotation.x=Ht.lerp(this.backRightLeg.kneePivot.rotation.x,_,S)}}class r0{catModel;position=new C(2.6,.48,-63.4);velocity=new C;yaw=-.05;state="idle";isLoafing=!1;activeClimbPrompt=null;hasWalkedUnderArch=!1;hasReachedRooftop=!1;hasSplashedFountain=!1;onMeow;onSwat;onWaterSplash;onClimbUsed;scene;camera;collision;keys=new Set;jumpQueued=!1;joystickX=0;joystickY=0;joystickSprint=!1;grounded=!0;coyoteTimer=0;jumpsRemaining=1;wasInWater=!1;splashCooldown=0;dustSpawnTimer=0;swatActionTimer=0;meowActionTimer=0;currentClimbable=null;isClimbing=!1;climbTimer=0;climbDuration=.58;climbStartPos=new C;climbEndPos=new C;cameraYaw=-.05;cameraPitch=-.04;cameraDistance=4.6;cameraLookCurrent=new C(2.6,1.83,-63.4);isPointerDragging=!1;lastPointerX=0;lastPointerY=0;cameraTouchId=null;lastTouchX=0;lastTouchY=0;pinchStartDist=0;pinchStartCamDist=4.6;particleGroup=new ut;particles=[];dustGeo=new Ot(.055,8,8);dropletGeo=new Ot(.038,8,8);rippleGeo=new ke(.08,.13,20);constructor(t,e,n,i){this.scene=t,this.camera=e,this.collision=n,this.catModel=new o0(i),this.catModel.group.position.copy(this.position),this.catModel.group.rotation.y=this.yaw,this.scene.add(this.catModel.group),this.rippleGeo.rotateX(-Math.PI*.5),this.particleGroup.name="CatParticles",this.scene.add(this.particleGroup);const o=this.collision.getSurfaceInfoAt(this.position.x,this.position.z,this.position.y);this.position.y=o.groundY,this.catModel.group.position.copy(this.position),this.cameraLookCurrent.set(this.position.x,this.position.y+.55,this.position.z),this.bindInputEvents(),this.updateCamera(.1)}bindInputEvents(){window.addEventListener("keydown",e=>{if(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement)return;const n=e.code;this.keys.add(n),n==="Space"?(e.preventDefault(),this.jumpQueued=!0):(n==="KeyE"||n==="KeyM")&&!e.repeat?this.triggerMeow():n==="KeyF"&&!e.repeat?this.triggerSwat():(n==="KeyC"||n==="KeyR")&&!e.repeat&&this.toggleLoaf()}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.isPointerDragging=!1}),window.addEventListener("mousedown",e=>{const n=e.target;n&&(n.closest("button")||n.closest("select")||n.closest("input")||n.closest(".hud-interactive"))||(e.button===0||e.button===2)&&(this.isPointerDragging=!0,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY)}),window.addEventListener("mouseup",()=>{this.isPointerDragging=!1}),window.addEventListener("mousemove",e=>{if(document.pointerLockElement)this.cameraYaw-=e.movementX*.0045,this.cameraPitch=Ht.clamp(this.cameraPitch+e.movementY*.0038,-.42,1.18);else if(this.isPointerDragging){const n=e.clientX-this.lastPointerX,i=e.clientY-this.lastPointerY;this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.cameraYaw-=n*.0055,this.cameraPitch=Ht.clamp(this.cameraPitch+i*.0045,-.42,1.18)}}),window.addEventListener("wheel",e=>{const n=e.target;n&&n.closest(".hud-scrollable")||(this.cameraDistance=Ht.clamp(this.cameraDistance+e.deltaY*.0035,2.5,14))},{passive:!0}),window.addEventListener("touchstart",e=>{for(let n=0;n<e.changedTouches.length;n++){const i=e.changedTouches[n],o=i.target;o&&(o.closest("button")||o.closest("input")||o.closest("dialog")||o.closest(".nl-joystick-zone")||o.closest(".nl-glass-card"))||this.cameraTouchId===null&&(this.cameraTouchId=i.identifier,this.lastTouchX=i.clientX,this.lastTouchY=i.clientY)}if(e.touches.length===2){const n=e.touches[0].clientX-e.touches[1].clientX,i=e.touches[0].clientY-e.touches[1].clientY;this.pinchStartDist=Math.hypot(n,i),this.pinchStartCamDist=this.cameraDistance}},{passive:!0}),window.addEventListener("touchmove",e=>{if(e.touches.length===2&&this.pinchStartDist>10){const n=e.touches[0].clientX-e.touches[1].clientX,i=e.touches[0].clientY-e.touches[1].clientY,o=Math.hypot(n,i),r=this.pinchStartDist/Math.max(10,o);this.cameraDistance=Ht.clamp(this.pinchStartCamDist*r,2.5,14);return}for(let n=0;n<e.changedTouches.length;n++){const i=e.changedTouches[n];if(i.identifier===this.cameraTouchId){const o=i.clientX-this.lastTouchX,r=i.clientY-this.lastTouchY;this.lastTouchX=i.clientX,this.lastTouchY=i.clientY,this.cameraYaw-=o*.0065,this.cameraPitch=Ht.clamp(this.cameraPitch+r*.0052,-.42,1.18)}}},{passive:!0});const t=e=>{for(let n=0;n<e.changedTouches.length;n++)e.changedTouches[n].identifier===this.cameraTouchId&&(this.cameraTouchId=null);e.touches.length<2&&(this.pinchStartDist=0)};window.addEventListener("touchend",t,{passive:!0}),window.addEventListener("touchcancel",t,{passive:!0})}setJoystickInput(t,e,n=!1){this.joystickX=t,this.joystickY=e,this.joystickSprint=n}triggerJump(){this.jumpQueued=!0}triggerMeow(){this.meowActionTimer=.65,this.catModel.triggerMeowVisual(),this.onMeow?.()}triggerSwat(){if(this.isClimbing)return;if(this.currentClimbable){this.startClimbTransition(this.currentClimbable);return}this.isLoafing&&(this.isLoafing=!1),this.swatActionTimer=.38,this.catModel.triggerSwatVisual();const t=Math.sin(this.yaw),e=Math.cos(this.yaw);this.velocity.x+=t*2.8,this.velocity.z+=e*2.8;const n=new C(this.position.x+t*.72,this.position.y+.3,this.position.z+e*.72);this.onSwat?.(n)}toggleLoaf(){this.isClimbing||(this.isLoafing=!this.isLoafing,this.isLoafing?(this.velocity.set(0,0,0),this.state="loaf"):this.state="idle")}teleportTo(t,e,n){this.isClimbing=!1,this.isLoafing=!1,this.position.copy(t),this.velocity.set(0,0,0),e!==void 0&&(this.yaw=e,this.cameraYaw=e),n!==void 0&&(this.cameraPitch=n),this.catModel.group.position.copy(this.position),this.catModel.group.rotation.y=this.yaw,this.cameraLookCurrent.set(this.position.x,this.position.y+1.32,this.position.z),this.updateCamera(1)}startClimbTransition(t){this.isLoafing=!1,this.isClimbing=!0,this.climbTimer=0;const e=this.position.distanceTo(t.targetPosition);this.climbDuration=Ht.clamp(e*.085,.48,.85),this.climbStartPos.copy(this.position),this.climbEndPos.copy(t.targetPosition);const n=this.climbEndPos.x-this.climbStartPos.x,i=this.climbEndPos.z-this.climbStartPos.z;n*n+i*i>1e-4&&(this.yaw=Math.atan2(n,i)),this.velocity.set(0,0,0),this.state="climb",this.onClimbUsed?.(t.id)}update(t,e,n){const i=Math.min(t,.05),o=1.95;if((this.keys.has("KeyQ")||this.keys.has("BracketLeft"))&&(this.cameraYaw+=o*i),(this.keys.has("KeyZ")||this.keys.has("BracketRight"))&&(this.cameraYaw-=o*i),n){this.updateParticles(i),this.catModel.updateAnimation(this.state,i,e,0),this.updateCamera(i);return}if(this.swatActionTimer>0&&(this.swatActionTimer=Math.max(0,this.swatActionTimer-i)),this.meowActionTimer>0&&(this.meowActionTimer=Math.max(0,this.meowActionTimer-i)),this.splashCooldown>0&&(this.splashCooldown=Math.max(0,this.splashCooldown-i)),this.isClimbing){this.climbTimer+=i;const y=Math.min(1,this.climbTimer/this.climbDuration),R=y*y*(3-2*y);this.position.lerpVectors(this.climbStartPos,this.climbEndPos,R);const F=Math.sin(y*Math.PI)*1.85;this.position.y+=F,this.catModel.group.position.copy(this.position),this.catModel.group.rotation.y=this.yaw,this.state="climb",y>=1&&(this.isClimbing=!1,this.position.copy(this.climbEndPos),this.grounded=!0,this.state="idle"),this.checkMilestones(!1),this.updateParticles(i),this.catModel.updateAnimation(this.state,i,e,.8),this.updateCamera(i);return}let r=this.joystickY,a=this.joystickX;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(r+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(r-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(a+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(a-=1);const c=Math.min(1,Math.hypot(r,a)),l=c>.06,d=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.joystickSprint;this.isLoafing&&(l||this.jumpQueued)&&(this.isLoafing=!1);const u=Math.sin(this.cameraYaw),h=Math.cos(this.cameraYaw),f=-Math.cos(this.cameraYaw),g=Math.sin(this.cameraYaw),x=u*r+f*a,m=h*r+g*a,p=Math.hypot(x,m),_=l?(d?9.2:5.4)*Math.max(.35,c):0;if(p>1e-4&&!this.isLoafing){const y=x/p,R=m/p,F=this.grounded?18:10.5;this.velocity.x=Ht.lerp(this.velocity.x,y*_,Math.min(1,F*i)),this.velocity.z=Ht.lerp(this.velocity.z,R*_,Math.min(1,F*i));const N=Math.atan2(y,R);this.yaw=this.lerpAngle(this.yaw,N,Math.min(1,i*14))}else{const y=this.grounded?14:4;this.velocity.x=Ht.lerp(this.velocity.x,0,Math.min(1,y*i)),this.velocity.z=Ht.lerp(this.velocity.z,0,Math.min(1,y*i))}this.grounded?(this.coyoteTimer=.15,this.jumpsRemaining=1):this.coyoteTimer=Math.max(0,this.coyoteTimer-i),this.jumpQueued&&(this.jumpQueued=!1,this.coyoteTimer>0?(this.velocity.y=8.4,this.grounded=!1,this.coyoteTimer=0,this.jumpsRemaining=1,this.spawnDustBurst(4)):this.jumpsRemaining>0&&(this.velocity.y=7.5,this.jumpsRemaining=0,this.velocity.x+=Math.sin(this.yaw)*1.65,this.velocity.z+=Math.cos(this.yaw)*1.65,this.spawnDustBurst(3)));const v=-21.5;this.velocity.y=Math.max(-24,this.velocity.y+v*i);const L=new C(this.position.x+this.velocity.x*i,this.position.y+this.velocity.y*i,this.position.z+this.velocity.z*i),A=!this.grounded&&this.velocity.y>-2?1.25:.95,S=this.collision.resolveMovement(L,.36,A);if(this.position.x=S.position.x,this.position.z=S.position.z,L.y<=S.groundY+.06&&this.velocity.y<=0){const y=!this.grounded&&this.velocity.y<-3.5;this.position.y=Ht.lerp(this.position.y,S.groundY,Math.min(1,i*28)),Math.abs(this.position.y-S.groundY)<.04&&(this.position.y=S.groundY),this.velocity.y=0,this.grounded=!0,y&&(S.inWater?(this.spawnWaterSplash(S.waterSurfaceY,8),this.onWaterSplash?.(this.position.clone())):this.spawnDustBurst(5))}else this.position.y=L.y,this.grounded=!1;this.currentClimbable=S.nearClimbable,this.activeClimbPrompt=S.nearClimbable?S.nearClimbable.label:null;const P=Math.hypot(this.velocity.x,this.velocity.z);S.inWater?(!this.wasInWater||P>1.2&&this.splashCooldown<=0)&&(this.spawnWaterSplash(S.waterSurfaceY,this.wasInWater?4:8),this.onWaterSplash?.(this.position.clone()),this.splashCooldown=.24):this.grounded&&P>6.2&&(this.dustSpawnTimer-=i,this.dustSpawnTimer<=0&&(this.dustSpawnTimer=.11,this.spawnDustBurst(2))),this.wasInWater=S.inWater,this.isLoafing?this.state="loaf":this.swatActionTimer>0?this.state="swat":this.grounded?P>6.8?this.state="sprint":P>3.2?this.state="trot":P>.35?this.state="walk":this.meowActionTimer>0?this.state="meow":this.state="idle":this.state="jump",this.catModel.group.position.copy(this.position),this.catModel.group.rotation.y=this.yaw;const M=Ht.clamp(P/9.2,0,1);this.catModel.updateAnimation(this.state,i,e,M),this.checkMilestones(S.inWater),this.updateParticles(i),this.updateCamera(i)}checkMilestones(t){Math.abs(this.position.x)<4.5&&Math.abs(this.position.z)<4.5&&this.position.y<4&&(this.hasWalkedUnderArch=!0),this.position.y>=15.2&&(this.hasReachedRooftop=!0),t&&this.position.z<-35&&(this.hasSplashedFountain=!0)}spawnDustBurst(t){for(let e=0;e<t;e++){const n=new de({color:"#f2e2c9",transparent:!0,opacity:.68}),i=new E(this.dustGeo,n),o=Math.random()*Math.PI*2,r=.08+Math.random()*.14;i.position.set(this.position.x-Math.sin(this.yaw)*.15+Math.cos(o)*r,this.position.y+.05,this.position.z-Math.cos(this.yaw)*.15+Math.sin(o)*r);const a=.65+Math.random()*.55;i.scale.setScalar(a),this.particleGroup.add(i),this.particles.push({mesh:i,velocity:new C(Math.cos(o)*.55,.45+Math.random()*.45,Math.sin(o)*.55),age:0,maxAge:.42+Math.random()*.18,initialScale:a})}}spawnWaterSplash(t,e){const n=new de({color:"#a8fff9",transparent:!0,opacity:.85,side:xe}),i=new E(this.rippleGeo,n);i.position.set(this.position.x,t+.02,this.position.z),this.particleGroup.add(i),this.particles.push({mesh:i,velocity:new C(0,0,0),age:0,maxAge:.65,initialScale:1,isRipple:!0});for(let o=0;o<e;o++){const r=new de({color:o%2===0?"#ffffff":"#7ef5ed",transparent:!0,opacity:.92}),a=new E(this.dropletGeo,r),c=Math.random()*Math.PI*2,l=.08+Math.random()*.16;a.position.set(this.position.x+Math.cos(c)*l,t+.05,this.position.z+Math.sin(c)*l);const d=.6+Math.random()*.5;a.scale.setScalar(d),this.particleGroup.add(a),this.particles.push({mesh:a,velocity:new C(Math.cos(c)*(.9+Math.random()*.9),2.1+Math.random()*1.6,Math.sin(c)*(.9+Math.random()*.9)),age:0,maxAge:.48+Math.random()*.18,initialScale:d})}}updateParticles(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.age+=t;const i=n.age/n.maxAge;if(i>=1){this.particleGroup.remove(n.mesh),n.mesh.material.dispose(),this.particles.splice(e,1);continue}const o=n.mesh.material;if(n.isRipple){const r=1+i*4.2;n.mesh.scale.set(r,1,r),o.opacity=(1-i)*.8}else n.mesh.position.addScaledVector(n.velocity,t),(n.velocity.y>.9||n.mesh.geometry===this.dropletGeo)&&(n.velocity.y-=7.5*t),n.mesh.scale.setScalar(n.initialScale*(1+i*.85)),o.opacity=(1-i)*.78}}updateCamera(t){const e=new C(this.position.x,this.position.y+1.32,this.position.z);this.cameraLookCurrent.lerp(e,Math.min(1,t*14));const n=Math.cos(this.cameraPitch)*this.cameraDistance,i=Math.sin(this.cameraPitch)*this.cameraDistance,o=this.cameraLookCurrent.x-Math.sin(this.cameraYaw)*n,r=this.cameraLookCurrent.z-Math.cos(this.cameraYaw)*n;let a=this.cameraLookCurrent.y+i;const c=this.collision.getSurfaceInfoAt(o,r,this.position.y,2);a=Math.max(a,c.groundY+.35),this.camera.position.set(o,a,r),this.camera.lookAt(this.cameraLookCurrent)}lerpAngle(t,e,n){let i=(e-t+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),t+i*n}}class a0{group;collectedCount=0;totalFlowers=30;koiBattedCount=0;pigeonsChasedCount=0;activeNapSpotLabel=null;onFlowerCollected;onKoiBatted;onPigeonScattered;koiList=[];pigeonList=[];butterflyList=[];flowerList=[];cushionList=[];wasSwatting=!1;constructor(t){this.group=new ut,this.group.name="WildlifeAndInteractables",t.add(this.group),this.createKoiFish(),this.createPigeons(),this.createButterflies(),this.createDokChampaFlowers(),this.createNapCushions()}restoreCollectedFlowers(t){let e=0;for(const n of t){const i=this.flowerList[n];i&&!i.collected&&(i.collected=!0,i.collectAnimTimer=0,i.group.visible=!1)}for(const n of this.flowerList)n.collected&&(e+=1);this.collectedCount=e}getCollectedFlowerIndices(){const t=[];for(let e=0;e<this.flowerList.length;e++)this.flowerList[e].collected&&t.push(e);return t}createKoiFish(){const t=[new C(-19,.16,-14.5),new C(19,.16,-14.5),new C(-19,.16,14.5),new C(19,.16,14.5)],e=new fn(.11,.34,8,12);e.rotateX(Math.PI*.5);const n=new Ot(.095,8,8);n.scale(1.1,.45,1.5);const i=new Qt(.13,.28,5);i.rotateX(-Math.PI*.5),i.translate(0,0,-.12);const o=new it(.16,.015,.1),r=new it(.02,.09,.22),a=new ke(.12,.22,24);a.rotateX(-Math.PI*.5);const c=[{base:16775407,spot1:16731682,spot2:16739125,fin:16773341},{base:16763450,spot1:16755200,spot2:16769648,fin:16768888},{base:16446440,spot1:15087942,spot2:2237738,fin:16743252}];for(let l=0;l<t.length;l++){const d=t[l];for(let u=0;u<6;u++){const h=l*6+u,f=c[h%c.length],g=new ut,x=new J({color:f.base,roughness:.25,metalness:.12}),m=new J({color:f.spot1,roughness:.28}),p=new J({color:f.spot2,roughness:.28}),w=new J({color:f.fin,roughness:.35,transparent:!0,opacity:.88}),_=new E(e,x);g.add(_);const v=new E(n,m);v.position.set(.01,.07,.08),g.add(v);const L=new E(n,p);L.position.set(-.01,.065,-.09),g.add(L);const A=new E(r,w);A.position.set(0,.11,-.02),g.add(A);const S=new E(o,w);S.position.set(.11,-.02,.08),S.rotation.y=.35,g.add(S);const P=new E(o,w);P.position.set(-.11,-.02,.08),P.rotation.y=-.35,g.add(P);const M=new ut;M.position.set(0,0,-.22);const y=new E(i,w);M.add(y),g.add(M);const R=.85+h%4*.12;g.scale.setScalar(R);const F=new de({color:16777215,transparent:!0,opacity:0,side:xe}),N=new E(a,F);N.position.copy(d),N.position.y=d.y+.05,this.group.add(N),g.position.copy(d),this.group.add(g),this.koiList.push({group:g,tailPivot:M,leftFin:S,rightFin:P,pondCenter:d.clone(),rx:2+u%3*1.15,rz:2.6+(u+1)%3*1.35,speed:.48+h%5*.09,phase:h*Math.PI*2/6,figureEight:u%2===0,leapTimer:0,leapDuration:1.05,splashRing:N})}}}createPigeons(){const t=[new C(-6.5,0,-34),new C(-4.2,0,-31.5),new C(5.8,0,-33.2),new C(7.4,0,-36),new C(-9.5,0,-48),new C(9.2,0,-47.5),new C(-11,0,-22),new C(11.5,0,-21),new C(-8.5,0,-9.5),new C(8.5,0,-9.2),new C(-12.5,0,2.5),new C(12.8,0,3.2),new C(-7.5,0,14.5),new C(7.2,0,15),new C(-5,0,25),new C(5.4,0,26.5),new C(-2.8,0,-26.5),new C(3.1,0,-25.8)],e=new Ot(.16,10,10);e.scale(.85,.85,1.35);const n=new Ot(.095,8,8),i=new Lt(.085,.11,.07,10),o=new Qt(.032,.09,6);o.rotateX(Math.PI*.5);const r=new it(.28,.025,.22);r.translate(.14,0,0);const a=new it(.12,.02,.18),c=new J({color:8226192,roughness:.65}),l=new J({color:5199457,roughness:.6}),d=new J({color:3065014,roughness:.25,metalness:.55}),u=new J({color:16752412,roughness:.4});for(let h=0;h<t.length;h++){const f=t[h],g=new ut,x=new ut;x.position.y=.18,g.add(x);const m=new E(e,c);m.castShadow=!0,x.add(m);const p=new E(a,l);p.position.set(0,.02,-.22),p.rotation.x=-.25,x.add(p);const w=new ut;w.position.set(0,.12,.15);const _=new E(i,d);_.position.set(0,-.03,0),w.add(_);const v=new E(n,c);v.position.set(0,.04,.02),w.add(v);const L=new E(o,u);L.position.set(0,.035,.12),w.add(L),x.add(w);const A=new ut;A.position.set(.09,.04,.02);const S=new E(r,l);A.add(S),x.add(A);const P=new ut;P.position.set(-.09,.04,.02);const M=new E(r,l);M.scale.x=-1,P.add(M),x.add(P),g.position.copy(f),this.group.add(g),this.pigeonList.push({group:g,bodyGroup:x,headGroup:w,leftWing:A,rightWing:P,homePos:f.clone(),wanderAngle:h*1.7%(Math.PI*2),wanderRadius:1.4+h%3*.65,peckPhase:h*.9,state:"ground",flightTimer:0,flightOrbitCenter:f.clone().add(new C(0,9.5+h%4*1.8,0)),flightOrbitAngle:h*Math.PI/9})}}createButterflies(){const t=[new C(-14,1.4,-36),new C(14,1.5,-36),new C(-22,1.3,-18),new C(22,1.3,-18),new C(-22,1.4,18),new C(22,1.4,18),new C(-14,1.5,32),new C(14,1.5,32),new C(0,1.6,28),new C(-9,1.4,42),new C(9,1.4,42),new C(-26,1.6,0),new C(26,1.6,0),new C(-16,1.5,-52),new C(16,1.5,-52),new C(-11,1.3,-14),new C(11,1.3,-14),new C(-11,1.3,14),new C(11,1.3,14),new C(0,16.9,-4)],e=[16765286,3065014,16739229],n=new je(.11,6);n.translate(.09,0,.03);const i=new je(.075,6);i.translate(.07,0,-.05);for(let o=0;o<t.length;o++){const r=new ut,a=e[o%e.length],c=new de({color:a,side:xe}),l=new ut,d=new E(n,c);d.rotation.x=-Math.PI*.5;const u=new E(i,c);u.rotation.x=-Math.PI*.5,l.add(d,u);const h=new ut;h.scale.x=-1;const f=new E(n,c);f.rotation.x=-Math.PI*.5;const g=new E(i,c);g.rotation.x=-Math.PI*.5,h.add(f,g),r.add(l,h),r.position.copy(t[o]),this.group.add(r),this.butterflyList.push({group:r,leftWing:l,rightWing:h,anchor:t[o].clone(),radiusX:2.2+o%4*.8,radiusZ:2.4+(o+2)%4*.7,speed:.75+o%5*.14,phase:o*1.13,flapSpeed:10.5+o%4*1.5})}}createDokChampaFlowers(){const t=[[0,1.05,-39.2],[11.2,1.05,-52],[-11.2,1.05,-52],[0,1.05,-64.8],[-5.5,.55,-33],[5.5,.55,-33],[-13.5,.78,-14.5],[-24.5,.78,-14.5],[13.5,.78,-14.5],[24.5,.78,-14.5],[-13.5,.78,14.5],[-24.5,.78,14.5],[13.5,.78,14.5],[24.5,.78,14.5],[0,1.15,0],[0,1.05,-10.5],[0,1.05,10.5],[-10.5,1.05,0],[10.5,1.05,0],[10.5,1.05,7.8],[10.5,1.05,-7.8],[0,.55,18.5],[-10.5,1.05,7.8],[12,.55,30],[0,16.55,-7.2],[7.2,16.55,0],[0,16.55,7.2],[-7.2,16.55,0],[5.2,16.55,-5.2],[-5.2,16.55,5.2]],e=new Ot(.18,10,8);e.scale(.58,.18,1.35),e.translate(0,0,.19);const n=new Ot(.12,10,10);n.scale(1,.55,1);const i=new ke(.36,.48,24);i.rotateX(-Math.PI*.5);const o=new Yi(.055,0),r=new J({color:16776695,emissive:16765286,emissiveIntensity:.35,roughness:.25}),a=new J({color:16760331,emissive:16752412,emissiveIntensity:.75,roughness:.2});for(let c=0;c<t.length;c++){const[l,d,u]=t[c],h=new ut,f=new ut;for(let v=0;v<5;v++){const L=new ut;L.rotation.y=v*Math.PI*2/5;const A=new E(e,r);A.rotation.x=.22,A.rotation.z=.18,L.add(A),f.add(L)}const g=new E(n,a);g.position.y=.03,f.add(g),h.add(f);const x=new de({color:16765286,transparent:!0,opacity:.65,side:xe}),m=new E(i,x);m.position.y=-.22,h.add(m);const p=new ut,w=new de({color:16770688});for(let v=0;v<6;v++){const L=new E(o,w),A=v*Math.PI*2/6;L.position.set(Math.cos(A)*.28,.05*(v%3),Math.sin(A)*.28),p.add(L)}h.add(p);const _=new C(l,d,u);h.position.copy(_),this.group.add(h),this.flowerList.push({group:h,flowerHead:f,haloRing:m,sparkles:p,basePos:_,phase:c*.55,collected:!1,collectAnimTimer:0})}}resetAllFlowers(){this.collectedCount=0;for(const t of this.flowerList)t.collected=!1,t.collectAnimTimer=0,t.group.visible=!0,t.group.position.copy(t.basePos),t.flowerHead.scale.setScalar(1),t.sparkles.scale.setScalar(1)}createNapCushions(){const t=[{pos:[0,.52,-39.8],label:"ເບາະແສງແດດ ແຄມນ້ຳພຸດົນຕີ"},{pos:[-13.5,.42,-14.5],label:"ເບາະໄໝລາວ ແຄມໜອງບົວ"},{pos:[3.2,.76,3.2],label:"ເບາະໄໝລາວ ໃຕ້ປະຕູໄຊ"},{pos:[12,.16,32],label:"ເບາະໄໝລາວ ສວນດອກຈຳປາ"},{pos:[0,16.05,-8.5],label:"ເບາະຊົມວິວ ດາດຟ້າປະຕູໄຊ"}],e=new Lt(.68,.74,.16,16),n=new Lt(.52,.55,.18,16),i=new Ot(.075,8,8),o=new Lt(.45,.92,4.5,20,1,!0);o.translate(0,2.25,0);const r=new ke(.76,.88,28);r.rotateX(-Math.PI*.5);const a=new J({color:10361636,roughness:.45,metalness:.15}),c=new J({color:15976019,emissive:13933351,emissiveIntensity:.25,roughness:.3,metalness:.45});for(const l of t){const d=new ut,u=new C(l.pos[0],l.pos[1],l.pos[2]),h=new E(e,c);h.position.y=.08,h.castShadow=!0,h.receiveShadow=!0,d.add(h);const f=new E(n,a);f.position.y=.085,d.add(f);for(let w=0;w<8;w++){const _=w*Math.PI*2/8,v=new E(i,c);v.position.set(Math.cos(_)*.72,.06,Math.sin(_)*.72),d.add(v)}const g=new de({color:16770206,transparent:!0,opacity:.16,side:xe,depthWrite:!1}),x=new E(o,g);d.add(x);const m=new de({color:16765286,transparent:!0,opacity:.55,side:xe}),p=new E(r,m);p.position.y=.02,d.add(p),d.position.copy(u),this.group.add(d),this.cushionList.push({group:d,sunbeam:x,haloRing:p,position:u,label:l.label})}}interactWithKoi(t){let e=!1;for(const n of this.koiList)n.group.position.distanceTo(t)<=3.2&&n.leapTimer<=0&&(n.leapTimer=n.leapDuration,n.splashRing.position.set(n.group.position.x,n.pondCenter.y+.04,n.group.position.z),e=!0);return e&&(this.koiBattedCount+=1,this.onKoiBatted?.()),e}update(t,e,n,i){const o=i&&!this.wasSwatting;this.wasSwatting=i,o&&this.interactWithKoi(n);for(let a=0;a<this.koiList.length;a++){const c=this.koiList[a],l=c.leapTimer>0?2.4:1;c.phase+=t*c.speed*l;let d=0,u=0,h=0,f=0;c.figureEight?(d=Math.sin(c.phase)*c.rx,u=Math.sin(c.phase*2)*(c.rz*.65),h=Math.cos(c.phase)*c.rx,f=Math.cos(c.phase*2)*2*(c.rz*.65)):(d=Math.cos(c.phase)*c.rx,u=Math.sin(c.phase)*c.rz,h=-Math.sin(c.phase)*c.rx,f=Math.cos(c.phase)*c.rz);let g=0,x=0;if(c.leapTimer>0){c.leapTimer=Math.max(0,c.leapTimer-t);const w=1-c.leapTimer/c.leapDuration;g=Math.sin(w*Math.PI)*.72,x=-Math.cos(w*Math.PI)*.65;const _=1+w*3.2;c.splashRing.scale.setScalar(_);const v=c.splashRing.material;v.opacity=(1-w)*.75}else{const w=c.splashRing.material;w.opacity=0}c.group.position.set(c.pondCenter.x+d,c.pondCenter.y+g,c.pondCenter.z+u);const m=Math.atan2(h,f);c.group.rotation.set(x,m,0);const p=c.leapTimer>0?18:7.5;c.tailPivot.rotation.y=Math.sin(e*p+a)*.42,c.leftFin.rotation.z=Math.sin(e*5+a)*.2,c.rightFin.rotation.z=-Math.sin(e*5+a)*.2}for(let a=0;a<this.pigeonList.length;a++){const c=this.pigeonList[a];if(c.state==="ground"){if(c.group.position.distanceTo(n)<3.5){c.state="flying",c.flightTimer=8,c.flightOrbitAngle=Math.atan2(c.group.position.z-n.z,c.group.position.x-n.x),this.pigeonsChasedCount+=1,this.onPigeonScattered?.();continue}c.wanderAngle+=t*.45;const d=c.homePos.x+Math.cos(c.wanderAngle)*c.wanderRadius,u=c.homePos.z+Math.sin(c.wanderAngle)*c.wanderRadius,h=-Math.sin(c.wanderAngle),f=Math.cos(c.wanderAngle);c.group.position.set(d,c.homePos.y,u),c.group.rotation.y=Math.atan2(h,f),c.bodyGroup.rotation.z=Math.sin(e*7+c.peckPhase)*.08;const g=Math.max(0,Math.sin(e*3.8+c.peckPhase));c.headGroup.rotation.x=g*.55,c.leftWing.rotation.z=0,c.rightWing.rotation.z=0}else{c.flightTimer-=t,c.flightOrbitAngle+=t*1.65;const l=1-Math.max(0,c.flightTimer)/8,d=Math.sin(l*Math.PI),u=c.wanderRadius+d*5.5,h=c.homePos.y+d*9.5,f=c.homePos.x+Math.cos(c.flightOrbitAngle)*u,g=c.homePos.z+Math.sin(c.flightOrbitAngle)*u;c.group.position.set(f,h,g),c.group.rotation.y=Math.atan2(-Math.sin(c.flightOrbitAngle),Math.cos(c.flightOrbitAngle));const x=Math.sin(e*22+a)*.85;c.leftWing.rotation.z=x,c.rightWing.rotation.z=-x,c.headGroup.rotation.x=0,c.flightTimer<=0&&(c.state="ground",c.group.position.y=c.homePos.y)}}for(let a=0;a<this.butterflyList.length;a++){const c=this.butterflyList[a],l=e*c.speed+c.phase,d=c.anchor.x+Math.sin(l)*c.radiusX,u=c.anchor.z+Math.cos(l*1.3)*c.radiusZ,h=c.anchor.y+Math.sin(l*2.4)*.45,f=Math.cos(l)*c.radiusX,g=-Math.sin(l*1.3)*1.3*c.radiusZ;c.group.position.set(d,h,u),c.group.rotation.y=Math.atan2(f,g);const x=Math.sin(e*c.flapSpeed+c.phase)*.95;c.leftWing.rotation.z=x,c.rightWing.rotation.z=-x}for(let a=0;a<this.flowerList.length;a++){const c=this.flowerList[a];if(c.collected){if(c.collectAnimTimer>0){c.collectAnimTimer=Math.max(0,c.collectAnimTimer-t);const d=1-c.collectAnimTimer/.55;c.group.position.y=c.basePos.y+d*1.45,c.flowerHead.rotation.y+=t*10,c.flowerHead.scale.setScalar(Math.max(.001,1-d)),c.sparkles.scale.setScalar(1+d*2.4),c.sparkles.rotation.y+=t*8,c.collectAnimTimer===0&&(c.group.visible=!1)}continue}c.group.position.y=c.basePos.y+Math.sin(e*2.4+c.phase)*.12,c.flowerHead.rotation.y=e*1.1+c.phase,c.sparkles.rotation.y=-e*1.5+c.phase;const l=.92+Math.sin(e*3.2+c.phase)*.12;c.haloRing.scale.setScalar(l),c.group.position.distanceTo(n)<=2.15&&(c.collected=!0,c.collectAnimTimer=.55,this.collectedCount+=1,this.onFlowerCollected?.(this.collectedCount,this.totalFlowers))}let r=null;for(let a=0;a<this.cushionList.length;a++){const c=this.cushionList[a];c.haloRing.rotation.z=e*.45+a;const l=c.sunbeam.material;l.opacity=.13+Math.sin(e*1.8+a)*.04,n.distanceTo(c.position)<=2.2&&(r=c.label)}this.activeNapSpotLabel=r}}const Qa={morning:{skyTop:new _t("#4298e8"),skyHorizon:new _t("#b8e6ff"),fogColor:new _t("#a4d8f7"),fogDensity:.0042,sunColor:new _t("#fff7e2"),sunIntensity:2.35,sunPosition:new C(58,66,36),hemiSky:new _t("#8cd3ff"),hemiGround:new _t("#8b7a5e"),hemiIntensity:.9,ambientColor:new _t("#fff9ee"),ambientIntensity:.48,exposure:1.08,nightFactor:0,orbColor:new _t("#fff9d6")},golden_hour:{skyTop:new _t("#d97149"),skyHorizon:new _t("#ffd28e"),fogColor:new _t("#f4ae72"),fogDensity:.0048,sunColor:new _t("#ffb85c"),sunIntensity:2.65,sunPosition:new C(-72,34,-44),hemiSky:new _t("#ffc482"),hemiGround:new _t("#704d3a"),hemiIntensity:.95,ambientColor:new _t("#ffd8a8"),ambientIntensity:.52,exposure:1.12,nightFactor:.22,orbColor:new _t("#ffcf70")},night:{skyTop:new _t("#070d1d"),skyHorizon:new _t("#19294b"),fogColor:new _t("#0e172c"),fogDensity:.0055,sunColor:new _t("#8ab4f8"),sunIntensity:.72,sunPosition:new C(45,58,-50),hemiSky:new _t("#273e6b"),hemiGround:new _t("#181c28"),hemiIntensity:.55,ambientColor:new _t("#324874"),ambientIntensity:.38,exposure:.95,nightFactor:1,orbColor:new _t("#e2eeff")}};class c0{currentTimeOfDay="golden_hour";isMuted=!1;onTimeOfDayChanged;scene;renderer;dirLight;hemiLight;ambientLight;fog;skyDome;skyUniforms;celestialOrb;celestialHalo;starField;audioCtx=null;masterGain=null;fountainGain=null;purrGain=null;chimeTimer=1.5;constructor(t,e){this.scene=t,this.renderer=e;const n=Qa[this.currentTimeOfDay];this.fog=new ks(n.fogColor.getHex(),n.fogDensity),this.scene.fog=this.fog,this.scene.background=n.skyHorizon.clone(),this.dirLight=new Zm(n.sunColor,n.sunIntensity),this.dirLight.position.copy(n.sunPosition),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.near=5,this.dirLight.shadow.camera.far=210;const i=75;this.dirLight.shadow.camera.left=-i,this.dirLight.shadow.camera.right=i,this.dirLight.shadow.camera.top=i,this.dirLight.shadow.camera.bottom=-i,this.dirLight.shadow.bias=-4e-4,this.scene.add(this.dirLight),this.hemiLight=new Xm(n.hemiSky,n.hemiGround,n.hemiIntensity),this.hemiLight.position.set(0,60,0),this.scene.add(this.hemiLight),this.ambientLight=new $m(n.ambientColor,n.ambientIntensity),this.scene.add(this.ambientLight),this.skyUniforms={uTopColor:{value:n.skyTop.clone()},uHorizonColor:{value:n.skyHorizon.clone()}};const o=new Ot(260,32,20),r=new Ke({uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 uTopColor;
        uniform vec3 uHorizonColor;
        varying vec3 vWorldPos;
        void main() {
          float h = clamp(normalize(vWorldPos).y, 0.0, 1.0);
          vec3 col = mix(uHorizonColor, uTopColor, pow(h, 0.58));
          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Pe,depthWrite:!1});this.skyDome=new E(o,r),this.scene.add(this.skyDome);const a=new Ot(8.5,24,24),c=new de({color:n.orbColor,fog:!1});this.celestialOrb=new E(a,c);const l=new Ot(14.5,24,24),d=new de({color:n.orbColor,transparent:!0,opacity:.25,fog:!1});this.celestialHalo=new E(l,d),this.celestialOrb.add(this.celestialHalo),this.updateOrbPosition(n.sunPosition),this.scene.add(this.celestialOrb),this.starField=this.createStarField(),this.starField.visible=!1,this.scene.add(this.starField),this.setupAudioInteractionHook(),this.setTimeOfDay(this.currentTimeOfDay)}createStarField(){const e=new Float32Array(1950);for(let o=0;o<650;o++){const r=Math.random()*Math.PI*2,a=Math.random()*Math.PI*.44+.05,c=235;e[o*3]=c*Math.cos(a)*Math.cos(r),e[o*3+1]=c*Math.sin(a),e[o*3+2]=c*Math.cos(a)*Math.sin(r)}const n=new ye;n.setAttribute("position",new Be(e,3));const i=new Tr({color:16775399,size:1.65,transparent:!0,opacity:.88,fog:!1});return new Nc(n,i)}updateOrbPosition(t){const e=t.clone().normalize().multiplyScalar(215);this.celestialOrb.position.copy(e)}setTimeOfDay(t){this.currentTimeOfDay=t;const e=Qa[t];this.skyUniforms.uTopColor.value.copy(e.skyTop),this.skyUniforms.uHorizonColor.value.copy(e.skyHorizon),this.scene.background=e.skyHorizon.clone(),this.fog.color.copy(e.fogColor),this.fog.density=e.fogDensity,this.dirLight.color.copy(e.sunColor),this.dirLight.intensity=e.sunIntensity,this.dirLight.position.copy(e.sunPosition),this.hemiLight.color.copy(e.hemiSky),this.hemiLight.groundColor.copy(e.hemiGround),this.hemiLight.intensity=e.hemiIntensity,this.ambientLight.color.copy(e.ambientColor),this.ambientLight.intensity=e.ambientIntensity,this.renderer.toneMappingExposure=e.exposure,this.celestialOrb.material.color.copy(e.orbColor),this.celestialHalo.material.color.copy(e.orbColor),this.updateOrbPosition(e.sunPosition),this.starField.visible=t==="night",this.onTimeOfDayChanged?.(t,e.nightFactor)}cycleTimeOfDay(){const t=["morning","golden_hour","night"],e=t.indexOf(this.currentTimeOfDay),n=t[(e+1)%t.length];return this.setTimeOfDay(n),n}setupAudioInteractionHook(){const t=()=>{this.ensureAudioContext()};window.addEventListener("pointerdown",t,{once:!0,passive:!0}),window.addEventListener("keydown",t,{once:!0,passive:!0})}ensureAudioContext(){try{if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.audioCtx=new t,this.masterGain=this.audioCtx.createGain(),this.masterGain.gain.value=this.isMuted?0:.35,this.masterGain.connect(this.audioCtx.destination),this.setupAmbientSoundscape(this.audioCtx,this.masterGain)}return this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}catch{return null}}setupAmbientSoundscape(t,e){try{const n=t.createGain();n.gain.value=.045,n.connect(e);const i=t.createOscillator();i.type="sine",i.frequency.value=261.63,i.connect(n),i.start();const o=t.createOscillator();o.type="sine",o.frequency.value=392,o.connect(n),o.start();const r=t.sampleRate*2,a=t.createBuffer(1,r,t.sampleRate),c=a.getChannelData(0);let l=0,d=0,u=0;for(let m=0;m<r;m++){const p=Math.random()*2-1;l=.997*l+p*.029,d=.985*d+p*.032,u=.95*u+p*.048,c[m]=(l+d+u+p*.02)*.35}const h=t.createBufferSource();h.buffer=a,h.loop=!0;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=620,f.Q.value=.7,this.fountainGain=t.createGain(),this.fountainGain.gain.value=.02,h.connect(f),f.connect(this.fountainGain),this.fountainGain.connect(e),h.start();const g=t.createOscillator();g.type="triangle",g.frequency.value=27.5;const x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=95,this.purrGain=t.createGain(),this.purrGain.gain.value=0,g.connect(x),x.connect(this.purrGain),this.purrGain.connect(e),g.start()}catch{}}playPentatonicChimeNote(){if(!(this.isMuted||!this.audioCtx||!this.masterGain))try{const t=this.audioCtx,e=[523.25,587.33,659.25,783.99,880,1046.5,1174.66,1318.51],n=e[Math.floor(Math.random()*e.length)],i=t.currentTime,o=t.createOscillator(),r=t.createGain();o.type="sine",o.frequency.setValueAtTime(n,i),r.gain.setValueAtTime(.001,i),r.gain.linearRampToValueAtTime(.075,i+.04),r.gain.exponentialRampToValueAtTime(8e-4,i+2.4),o.connect(r),r.connect(this.masterGain),o.start(i),o.stop(i+2.45)}catch{}}playMeowSound(){const t=this.ensureAudioContext();if(!(!t||!this.masterGain||this.isMuted))try{const e=t.currentTime,n=t.createOscillator(),i=t.createBiquadFilter(),o=t.createGain(),r=(Math.random()-.5)*70,a=490+r,c=780+r,l=410+r;n.type="triangle",n.frequency.setValueAtTime(a,e),n.frequency.exponentialRampToValueAtTime(c,e+.14),n.frequency.exponentialRampToValueAtTime(l,e+.46),i.type="bandpass",i.frequency.setValueAtTime(1100,e),i.frequency.exponentialRampToValueAtTime(1650,e+.15),i.frequency.exponentialRampToValueAtTime(920,e+.46),i.Q.value=2.4,o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.38,e+.06),o.gain.exponentialRampToValueAtTime(.001,e+.48),n.connect(i),i.connect(o),o.connect(this.masterGain),n.start(e),n.stop(e+.5)}catch{}}playCollectSound(){const t=this.ensureAudioContext();if(!(!t||!this.masterGain||this.isMuted))try{[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const o=t.currentTime+i*.065,r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.001,o),a.gain.linearRampToValueAtTime(.22,o+.02),a.gain.exponentialRampToValueAtTime(.001,o+.55),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.58)})}catch{}}playSplashSound(){const t=this.ensureAudioContext();if(!(!t||!this.masterGain||this.isMuted))try{const e=t.currentTime,n=.38,i=Math.floor(t.sampleRate*n),o=t.createBuffer(1,i,t.sampleRate),r=o.getChannelData(0);for(let d=0;d<i;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(t.sampleRate*.12));const a=t.createBufferSource();a.buffer=o;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(950,e),c.frequency.exponentialRampToValueAtTime(380,e+n),c.Q.value=1.4;const l=t.createGain();l.gain.setValueAtTime(.32,e),l.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(c),c.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+n)}catch{}}playSwatSound(){const t=this.ensureAudioContext();if(!(!t||!this.masterGain||this.isMuted))try{const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(340,e),n.frequency.exponentialRampToValueAtTime(110,e+.14),i.gain.setValueAtTime(.24,e),i.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.16)}catch{}}toggleMute(){this.isMuted=!this.isMuted;const t=this.ensureAudioContext();return t&&this.masterGain&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:.35,t.currentTime,.05),this.isMuted}update(t,e,n,i){if(this.starField.visible&&(this.starField.rotation.y=e*.008),this.audioCtx&&!this.isMuted){if(this.chimeTimer-=t,this.chimeTimer<=0&&(this.chimeTimer=2.4+Math.random()*2.8,this.playPentatonicChimeNote()),this.fountainGain){const o=Math.hypot(n.x,n.z+52),r=Math.hypot(Math.abs(n.x)-19,Math.abs(n.z)-14.5),a=Math.min(o,r),l=.015+Math.max(0,1-a/38)*.14;this.fountainGain.gain.setTargetAtTime(l,this.audioCtx.currentTime,.1)}if(this.purrGain){const o=i?.09+Math.sin(e*3.6)*.045:0;this.purrGain.gain.setTargetAtTime(o,this.audioCtx.currentTime,.12)}}}}function Rs(s){const t=Math.max(0,s),e=Math.floor(t/60),n=(t%60).toFixed(1),i=Number(n)<10?`0${n}`:n;return`${e} ນາທີ ${i} ວິນາທີ`}function mr(s){const t=Math.max(0,s),e=Math.floor(t/60).toString().padStart(2,"0"),n=(t%60).toFixed(1).padStart(4,"0");return`${e}:${n}`}class l0{isPhotoMode=!1;onSelectCoat;onSelectTimeOfDay;onToggleMute;onTriggerAction;onFastTravel;onChangeFov;onSnapPhoto;onJoystickMove;onStartNewGame;onContinueGame;onResetRun;onDownloadClearCard;root;mainHud;photoOverlay;flowerCountEl;flowerBarFillEl;timerValueEl;elevationBadgeEl;promptBannerEl;toastContainerEl;startDialog;startContinueBtn;coatDialog;victoryDialog;victoryBadgeEl;victoryTitleEl;victoryTimeMainEl;victoryTimeSubEl;victoryStatFlowersEl;victoryStatTasksEl;openVictoryBtn;muteBtn;checklistCardEl;checklistProgressEl;checklistItems={};todButtons={morning:[],golden_hour:[],night:[]};coatButtons={};lastClearSeconds=0;lastFlowers=0;lastTotalFlowers=30;lastDoneTasks=0;constructor(t){this.root=t,this.injectStyles(),this.root.innerHTML=`
      <div class="nl-hud-wrapper" id="nl-main-hud">
        <!-- Top Left: Brand, Timer, Dok Champa Counter, Restart Button & Park Checklist -->
        <aside class="nl-left-column">
          <div class="nl-glass-card nl-brand-card">
            <div class="nl-brand-header">
              <div>
                <h1 class="nl-title">ແມວລາວ NekoLao</h1>
                <p class="nl-subtitle">🌼 Issarapon School • ສວນປະຕູໄຊ</p>
              </div>
              <span class="nl-elevation-badge" id="nl-elevation-badge">ເດີ່ນສວນ • 0.0 ແມັດ</span>
            </div>

            <div class="nl-timer-row">
              <span class="nl-timer-label">⏱️ ເວລາ:</span>
              <strong class="nl-timer-value" id="nl-timer-value">0 ນາທີ 00.0 ວິນາທີ</strong>
              <button type="button" class="nl-mini-icon-btn" id="nl-open-start-btn" title="ໜ້າເລີ່ມເກມ">
                🏠
              </button>
            </div>

            <div class="nl-flower-progress">
              <div class="nl-flower-row">
                <span class="nl-flower-icon" aria-hidden="true">🌼</span>
                <span class="nl-flower-label">ດອກຈຳປາ</span>
                <strong class="nl-flower-count" id="nl-flower-count">0 / 30</strong>
              </div>
              <div class="nl-progress-track">
                <div class="nl-progress-fill" id="nl-flower-bar" style="width: 0%"></div>
              </div>
            </div>

            <div class="nl-game-control-row">
              <button type="button" class="nl-restart-btn" id="nl-reset-run-btn" title="ເລີ່ມຫຼິ້ນໃໝ່ຕັ້ງແຕ່ຕົ້ນ">
                🔄 ເລີ່ມໃໝ່ຕັ້ງແຕ່ຕົ້ນ
              </button>
              <button type="button" class="nl-share-hud-btn" id="nl-open-victory-btn" title="ເບິ່ງເວລາ & ແຊຣ໌ລົງ SNS">
                🏆 ແຊຣ໌ SNS
              </button>
            </div>
          </div>

          <div class="nl-glass-card nl-checklist-card" id="nl-checklist-card" aria-label="ພາລະກິດແມວນ້ອຍ">
            <button type="button" class="nl-card-heading-btn" id="nl-toggle-checklist-btn">
              <span>ພາລະກິດແມວນ້ອຍ</span>
              <span class="nl-checklist-progress" id="nl-checklist-progress">0/6 ▾</span>
            </button>
            <ul class="nl-checklist-list" id="nl-checklist-list">
              <li class="nl-check-item" data-check="underArch">
                <span class="nl-check-box"></span>
                <span>ຍ່າງລອດໃຕ້ປະຕູໄຊ</span>
              </li>
              <li class="nl-check-item" data-check="splashedFountain">
                <span class="nl-check-box"></span>
                <span>ຫຼິ້ນນ້ຳໃນອ່າງນ້ຳພຸດົນຕີ</span>
              </li>
              <li class="nl-check-item" data-check="battedKoi">
                <span class="nl-check-box"></span>
                <span>ຕະປົບປາຄາບໃນໜອງບົວ <kbd>F</kbd></span>
              </li>
              <li class="nl-check-item" data-check="chasedPigeons">
                <span class="nl-check-box"></span>
                <span>ໄລ່ນົກກາງແກໃນເດີ່ນ</span>
              </li>
              <li class="nl-check-item" data-check="swattedProp">
                <span class="nl-check-box"></span>
                <span>ປັດກະຕ່າດອກໄມ້ບູຊາ <kbd>F</kbd></span>
              </li>
              <li class="nl-check-item" data-check="reachedRooftop">
                <span class="nl-check-box"></span>
                <span>ຂຶ້ນສູ່ດາດຟ້າປະຕູໄຊ</span>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Top Right: Atmosphere, Fast Travel, Wardrobe & Photo Mode -->
        <aside class="nl-right-column">
          <div class="nl-glass-card nl-toolbar-card">
            <div class="nl-toolbar-group">
              <span class="nl-group-label">ທ້ອງຟ້າ</span>
              <button type="button" class="nl-pill-btn" data-tod="morning">ຕອນເຊົ້າ</button>
              <button type="button" class="nl-pill-btn is-active" data-tod="golden_hour">ຍາມແລງ</button>
              <button type="button" class="nl-pill-btn" data-tod="night">ກາງຄືນ</button>
            </div>
            <div class="nl-toolbar-divider"></div>
            <div class="nl-toolbar-group">
              <button type="button" class="nl-action-chip" id="nl-open-coat-btn">
                🐾 ຂົນແມວ <kbd>C</kbd>
              </button>
              <button type="button" class="nl-action-chip" id="nl-photo-mode-btn">
                📷 ຖ່າຍຮູບ <kbd>P</kbd>
              </button>
              <button type="button" class="nl-action-chip" id="nl-mute-btn" aria-label="ເປີດ/ປິດສຽງ">
                🔊 ສຽງ <kbd>M</kbd>
              </button>
            </div>
          </div>

          <div class="nl-glass-card nl-travel-card">
            <span class="nl-group-label">ຈຸດຊົມວິວ</span>
            <button type="button" class="nl-mini-btn" data-travel="fountain">ເດີ່ນນ້ຳພຸ</button>
            <button type="button" class="nl-mini-btn" data-travel="archway">ໃຕ້ປະຕູໄຊ</button>
            <button type="button" class="nl-mini-btn" data-travel="rooftop">ດາດຟ້າ (16m)</button>
          </div>
        </aside>

        <!-- Mobile & Touch Virtual Thumbstick (Bottom Left) -->
        <div class="nl-joystick-zone" id="nl-joystick-zone" aria-label="ປຸ່ມຄວບຄຸມທິດທາງ">
          <div class="nl-joystick-base" id="nl-joystick-base">
            <div class="nl-joystick-Ring"></div>
            <div class="nl-joystick-knob" id="nl-joystick-knob">🐾</div>
          </div>
          <span class="nl-joystick-hint">ລາກເພື່ອຍ່າງ / ແລ່ນ</span>
        </div>

        <!-- Bottom Center/Right: Contextual Prompt + Cat Action Bar -->
        <div class="nl-bottom-dock">
          <div class="nl-prompt-banner is-hidden" id="nl-prompt-banner"></div>

          <div class="nl-glass-card nl-controls-bar">
            <div class="nl-move-hint">
              <kbd>WASD</kbd> ຍ່າງ
              <kbd>Shift</kbd> ແລ່ນໄວ
              <kbd>ລາກ</kbd> ໝຸນກ້ອງ
            </div>
            <div class="nl-toolbar-divider nl-desktop-only"></div>
            <div class="nl-cat-actions">
              <button type="button" class="nl-cat-btn" data-action="jump">
                🦘 ໂດດ <kbd>Space</kbd>
              </button>
              <button type="button" class="nl-cat-btn" data-action="meow">
                🐱 ຮ້ອງແມວ <kbd>E</kbd>
              </button>
              <button type="button" class="nl-cat-btn" data-action="swat">
                🐾 ຕະປົບ/ປີນ <kbd>F</kbd>
              </button>
              <button type="button" class="nl-cat-btn" data-action="loaf">
                ☀️ ນອນໝອບ <kbd>Q</kbd>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo Mode Viewfinder Overlay -->
      <div class="nl-photo-overlay is-hidden" id="nl-photo-overlay">
        <div class="nl-viewfinder-grid">
          <div class="nl-vf-corner tl"></div>
          <div class="nl-vf-corner tr"></div>
          <div class="nl-vf-corner bl"></div>
          <div class="nl-vf-corner br"></div>
          <div class="nl-vf-stamp">Issarapon School • ສວນປະຕູໄຊ ນະຄອນຫຼວງວຽງຈັນ</div>
        </div>

        <div class="nl-glass-card nl-photo-controls">
          <div class="nl-photo-control-item">
            <label for="nl-fov-slider">ຊູມກ້ອງ</label>
            <input id="nl-fov-slider" type="range" min="26" max="75" value="50" />
          </div>
          <div class="nl-toolbar-group">
            <button type="button" class="nl-pill-btn" data-tod="morning">ຕອນເຊົ້າ</button>
            <button type="button" class="nl-pill-btn is-active" data-tod="golden_hour">ຍາມແລງ</button>
            <button type="button" class="nl-pill-btn" data-tod="night">ກາງຄືນ</button>
          </div>
          <button type="button" class="nl-snap-btn" id="nl-snap-photo-btn">
            📸 ບັນທຶກຮູບໂປສກາດ
          </button>
          <button type="button" class="nl-action-chip" id="nl-exit-photo-btn">
            ✕ ອອກ <kbd>P</kbd>
          </button>
        </div>
      </div>

      <!-- Toast Container -->
      <div class="nl-toast-container" id="nl-toast-container" aria-live="polite"></div>

      <!-- Center-Screen Game Start Modal -->
      <dialog id="start-dialog" class="nl-start-dialog" aria-labelledby="startDialogTitle">
        <div class="nl-dialog-form nl-victory-content">
          <div class="nl-school-banner">🌼 Issarapon School • ໂຮງຮຽນ ອິດສະຫຼະພອນ 🌼</div>
          <h2 id="startDialogTitle" class="nl-start-title">
            🐾 ແມວລາວ NekoLao
          </h2>
          <p class="nl-victory-subtitle">
            ສຳຫຼວດສວນປະຕູໄຊ ນະຄອນຫຼວງວຽງຈັນ • ເກັບດອກຈຳປາ & ແຂ່ງຈັບເວລາ!
          </p>

          <div class="nl-start-rules-box">
            <div class="nl-rule-item">🌼 <span>ເກັບ <strong>ດອກຈຳປາ 30 ດອກ</strong> ທົ່ວສວນປະຕູໄຊ ແລະ ດາດຟ້າ</span></div>
            <div class="nl-rule-item">🐾 <span>ເຮັດ <strong>ພາລະກິດແມວນ້ອຍ 6 ຂໍ້</strong> ໃຫ້ຄົບຖ້ວນ</span></div>
            <div class="nl-rule-item">⏱️ <span>ວັດເວລາຕັ້ງແຕ່ເລີ່ມເກມ ຈົນຜ່ານຄົບທຸກຂໍ້ ແລ້ວແຊຣ໌ສະຖິຕິລົງ SNS!</span></div>
          </div>

          <div class="nl-start-actions">
            <button type="button" class="nl-big-start-btn" id="nl-start-new-btn">
              ▶️ ເລີ່ມເກມ (START GAME)
            </button>
            <button type="button" class="nl-continue-btn is-hidden" id="nl-start-continue-btn">
              ⏩ ຫຼິ້ນຕໍ່ຈາກເດີມ
            </button>
          </div>
        </div>
      </dialog>

      <!-- Native Modal Dialog for Cat Coat Customization (with closedby="any") -->
      <dialog id="coat-dialog" class="nl-coat-dialog" closedby="any" aria-labelledby="coatDialogTitle">
        <form method="dialog" class="nl-dialog-form">
          <div class="nl-dialog-header">
            <div>
              <h2 id="coatDialogTitle" class="nl-dialog-title">ເລືອກລາຍຂົນແມວລາວ</h2>
              <p class="nl-dialog-subtitle">ປ່ຽນສີຂົນແມວວັດ ແລະ ປອກຄໍໄໝລາວ</p>
            </div>
            <button type="submit" class="nl-dialog-close" aria-label="ປິດ">✕</button>
          </div>

          <div class="nl-coat-grid">
            <button type="button" class="nl-coat-option is-selected" data-coat="siamese">
              <span class="nl-coat-swatch swatch-siamese"></span>
              <span class="nl-coat-name">ແມວວິຊຽນມາດ (Siamese)</span>
              <span class="nl-coat-desc">ຂົນສີຄຣີມໄໝລາວ ແຕ້ມສີນ້ຳຕານເຂັ້ມ ແລະ ຕາສີຟ້າມະນີ</span>
            </button>
            <button type="button" class="nl-coat-option" data-coat="ginger_tabby">
              <span class="nl-coat-swatch swatch-ginger"></span>
              <span class="nl-coat-name">ແມວສົ້ມລາຍເສືອແມ່ນ້ຳຂອງ</span>
              <span class="nl-coat-desc">ຂົນສີສົ້ມທອງອົບອຸ່ນ ຕີນສີຂາວນວນ ຕາສີອຳພັນ</span>
            </button>
            <button type="button" class="nl-coat-option" data-coat="korat">
              <span class="nl-coat-swatch swatch-korat"></span>
              <span class="nl-coat-name">ແມວສີສະຫວາດ (Korat)</span>
              <span class="nl-coat-desc">ຂົນສີເທົາຟ້າມົງຄຸນເງົາງາມ ຕາສີຂຽວມໍລະກົດ</span>
            </button>
            <button type="button" class="nl-coat-option" data-coat="calico">
              <span class="nl-coat-swatch swatch-calico"></span>
              <span class="nl-coat-name">ແມວສາມສີນຳໂຊກວຽງຈັນ</span>
              <span class="nl-coat-desc">ຂົນສາມສີ ຂາວ-ສົ້ມ-ດຳ ໜ້າຮັກສົດໃສ</span>
            </button>
          </div>

          <div class="nl-dialog-footer">
            <span>ແຕະດ້ານນອກ ຫຼື ກົດ <kbd>Esc</kbd> ເພື່ອກັບຄືນ</span>
            <button type="submit" class="nl-pill-btn is-active">ຕົກລົງ</button>
          </div>
        </form>
      </dialog>

      <!-- Center-Screen Victory / Clear Time & SNS Share Modal (with closedby="any") -->
      <dialog id="victory-dialog" class="nl-victory-dialog" closedby="any" aria-labelledby="victoryDialogTitle">
        <div class="nl-dialog-form nl-victory-content">
          <div class="nl-school-banner">🌼 Issarapon School • ສວນປະຕູໄຊ 🌼</div>
          <div class="nl-victory-badge" id="nl-victory-badge">🏆 ພາລະກິດສຳເລັດຄົບທຸກຂໍ້! 🏆</div>
          <h2 id="victoryDialogTitle" class="nl-victory-title">
            ຊົມເຊີຍ! ສຳຫຼວດສວນປະຕູໄຊສຳເລັດແລ້ວ!
          </h2>
          <p class="nl-victory-subtitle">
            ບັນທຶກເວລາຂອງເຈົ້າ ແລະ ແຊຣ໌ໃຫ້ໝູ່ເພື່ອນໃນ SNS ໄດ້ເລີຍ!
          </p>

          <div class="nl-victory-time-box">
            <span class="nl-victory-time-label">⏱️ ເວລາທີ່ໃຊ້ທັງໝົດ (CLEAR TIME)</span>
            <div class="nl-victory-time-main" id="nl-victory-time-main">0 ນາທີ 00.0 ວິນາທີ</div>
            <div class="nl-victory-time-sub" id="nl-victory-time-sub">(00:00.0)</div>
            <div class="nl-victory-stats-row">
              <span class="nl-stat-pill" id="nl-victory-stat-flowers">🌼 ດອກຈຳປາ 30 / 30</span>
              <span class="nl-stat-pill" id="nl-victory-stat-tasks">✅ ພາລະກິດ 6 / 6</span>
            </div>
          </div>

          <div class="nl-share-section">
            <div class="nl-share-heading">📣 ແຊຣ໌ເວລາໃຫ້ໝູ່ເພື່ອນໃນ SNS</div>
            <div class="nl-share-buttons">
              <button type="button" class="nl-share-btn share-x" id="nl-share-x-btn">
                𝕏 ແຊຣ໌ລົງ X
              </button>
              <button type="button" class="nl-share-btn share-line" id="nl-share-line-btn">
                💬 ແຊຣ໌ລົງ LINE
              </button>
              <button type="button" class="nl-share-btn share-fb" id="nl-share-fb-btn">
                📘 Facebook
              </button>
              <button type="button" class="nl-share-btn share-native" id="nl-share-native-btn">
                📲 ແຊຣ໌ຜ່ານມືຖື / SNS
              </button>
              <button type="button" class="nl-share-btn share-copy" id="nl-share-copy-btn">
                📋 ກັອບປີ້ຂໍ້ຄວາມ
              </button>
              <button type="button" class="nl-share-btn share-card" id="nl-share-card-btn">
                🖼️ ບັນທຶກຮູບສະຖິຕິ (PNG)
              </button>
            </div>
          </div>

          <div class="nl-dialog-footer nl-victory-footer">
            <button type="button" class="nl-pill-btn" id="nl-victory-newrun-btn">
              🔄 ເລີ່ມໃໝ່ຕັ້ງແຕ່ຕົ້ນ
            </button>
            <button type="button" class="nl-pill-btn is-active" id="nl-victory-close-btn">
              🐾 ເດີນຫຼິ້ນຕໍ່
            </button>
          </div>
        </div>
      </dialog>
    `,this.mainHud=this.root.querySelector("#nl-main-hud"),this.photoOverlay=this.root.querySelector("#nl-photo-overlay"),this.flowerCountEl=this.root.querySelector("#nl-flower-count"),this.flowerBarFillEl=this.root.querySelector("#nl-flower-bar"),this.timerValueEl=this.root.querySelector("#nl-timer-value"),this.elevationBadgeEl=this.root.querySelector("#nl-elevation-badge"),this.promptBannerEl=this.root.querySelector("#nl-prompt-banner"),this.toastContainerEl=this.root.querySelector("#nl-toast-container"),this.startDialog=this.root.querySelector("#start-dialog"),this.startContinueBtn=this.root.querySelector("#nl-start-continue-btn"),this.coatDialog=this.root.querySelector("#coat-dialog"),this.victoryDialog=this.root.querySelector("#victory-dialog"),this.victoryBadgeEl=this.root.querySelector("#nl-victory-badge"),this.victoryTitleEl=this.root.querySelector("#victoryDialogTitle"),this.victoryTimeMainEl=this.root.querySelector("#nl-victory-time-main"),this.victoryTimeSubEl=this.root.querySelector("#nl-victory-time-sub"),this.victoryStatFlowersEl=this.root.querySelector("#nl-victory-stat-flowers"),this.victoryStatTasksEl=this.root.querySelector("#nl-victory-stat-tasks"),this.openVictoryBtn=this.root.querySelector("#nl-open-victory-btn"),this.muteBtn=this.root.querySelector("#nl-mute-btn"),this.checklistCardEl=this.root.querySelector("#nl-checklist-card"),this.checklistProgressEl=this.root.querySelector("#nl-checklist-progress"),this.bindEvents(),this.bindVirtualJoystick()}bindEvents(){this.root.querySelectorAll("[data-check]").forEach(_=>{const v=_.dataset.check;v&&(this.checklistItems[v]=_)}),this.root.querySelector("#nl-toggle-checklist-btn").addEventListener("click",()=>{this.checklistCardEl.classList.toggle("is-collapsed")}),window.innerWidth<=768&&this.checklistCardEl.classList.add("is-collapsed"),this.root.querySelectorAll("[data-tod]").forEach(_=>{const v=_.dataset.tod;this.todButtons[v].push(_),_.addEventListener("click",()=>{this.onSelectTimeOfDay?.(v),_.blur()})}),this.root.querySelectorAll("[data-travel]").forEach(_=>{_.addEventListener("click",()=>{const v=_.dataset.travel;this.onFastTravel?.(v),_.blur()})}),this.root.querySelectorAll("[data-action]").forEach(_=>{_.addEventListener("click",()=>{const v=_.dataset.action;this.onTriggerAction?.(v),_.blur()})}),this.root.querySelector("#nl-start-new-btn").addEventListener("click",()=>{this.startDialog.close(),this.onStartNewGame?.()}),this.startContinueBtn.addEventListener("click",()=>{this.startDialog.close(),this.onContinueGame?.()});const n=this.root.querySelector("#nl-open-start-btn");n.addEventListener("click",()=>{this.showStartModal(!0),n.blur()});const i=this.root.querySelector("#nl-reset-run-btn");i.addEventListener("click",()=>{this.onResetRun?.(),i.blur()}),this.openVictoryBtn.addEventListener("click",()=>{this.showVictoryModal(this.lastClearSeconds),this.openVictoryBtn.blur()});const o=this.root.querySelector("#nl-open-coat-btn");o.addEventListener("click",()=>{this.openCoatModal(),o.blur()});const r=_=>{"closedBy"in HTMLDialogElement.prototype||_.addEventListener("click",v=>{if(v.target!==_)return;const L=_.getBoundingClientRect();L.top<=v.clientY&&v.clientY<=L.top+L.height&&L.left<=v.clientX&&v.clientX<=L.left+L.width||_.close()})};r(this.coatDialog),r(this.victoryDialog),this.root.querySelectorAll("[data-coat]").forEach(_=>{const v=_.dataset.coat;this.coatButtons[v]=_,_.addEventListener("click",()=>{this.onSelectCoat?.(v),this.coatDialog.close()})}),this.root.querySelector("#nl-victory-close-btn").addEventListener("click",()=>{this.victoryDialog.close()}),this.root.querySelector("#nl-victory-newrun-btn").addEventListener("click",()=>{this.victoryDialog.close(),this.onResetRun?.()}),this.root.querySelector("#nl-share-x-btn").addEventListener("click",()=>{const _=this.buildShareMessage(),v=`https://twitter.com/intent/tweet?text=${encodeURIComponent(_)}`;window.open(v,"_blank","noopener,noreferrer")}),this.root.querySelector("#nl-share-line-btn").addEventListener("click",()=>{const _=this.buildShareMessage(),v=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(_)}`;window.open(v,"_blank","noopener,noreferrer")}),this.root.querySelector("#nl-share-fb-btn").addEventListener("click",()=>{const _=this.buildShareMessage(),v=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(_)}`;window.open(v,"_blank","noopener,noreferrer")}),this.root.querySelector("#nl-share-native-btn").addEventListener("click",async()=>{const _=this.buildShareMessage();if(navigator.share)try{await navigator.share({title:"ແມວລາວ NekoLao • Issarapon School",text:_,url:window.location.href});return}catch{}try{await navigator.clipboard.writeText(_),this.showToast("📋 ກັອບປີ້ຂໍ້ຄວາມສະຖິຕິແລ້ວ!")}catch{this.showToast("📋 ກຽມຂໍ້ຄວາມແຊຣ໌ແລ້ວ!")}}),this.root.querySelector("#nl-share-copy-btn").addEventListener("click",async()=>{const _=this.buildShareMessage();try{await navigator.clipboard.writeText(_),this.showToast("📋 ກັອບປີ້ຂໍ້ຄວາມສະຖິຕິແລ້ວ!")}catch{this.showToast("📋 ກຽມຂໍ້ຄວາມແຊຣ໌ແລ້ວ!")}}),this.root.querySelector("#nl-share-card-btn").addEventListener("click",()=>{this.onDownloadClearCard?.(this.lastClearSeconds)});const x=this.root.querySelector("#nl-photo-mode-btn"),m=this.root.querySelector("#nl-exit-photo-btn"),p=this.root.querySelector("#nl-snap-photo-btn"),w=this.root.querySelector("#nl-fov-slider");x.addEventListener("click",()=>{this.togglePhotoMode(!0),x.blur()}),m.addEventListener("click",()=>{this.togglePhotoMode(!1),m.blur()}),p.addEventListener("click",()=>{this.onSnapPhoto?.(),p.blur()}),w.addEventListener("input",()=>{this.onChangeFov?.(Number(w.value))}),this.muteBtn.addEventListener("click",()=>{const _=this.onToggleMute?.()??!1;this.updateMuteLabel(_),this.muteBtn.blur()})}bindVirtualJoystick(){const t=this.root.querySelector("#nl-joystick-zone"),e=this.root.querySelector("#nl-joystick-base"),n=this.root.querySelector("#nl-joystick-knob");let i=null;const o=42,r=(c,l)=>{const d=e.getBoundingClientRect(),u=d.left+d.width*.5,h=d.top+d.height*.5,f=c-u,g=l-h,x=Math.hypot(f,g),m=Math.min(o,x),p=Math.atan2(g,f),w=Math.cos(p)*m,_=Math.sin(p)*m;n.style.transform=`translate(${w}px, ${_}px)`;const v=w/o,L=-_/o,A=m/o>.78;this.onJoystickMove?.(v,L,A)},a=()=>{i=null,n.style.transform="translate(0px, 0px)",e.classList.remove("is-active"),this.onJoystickMove?.(0,0,!1)};t.addEventListener("pointerdown",c=>{c.stopPropagation(),i=c.pointerId,t.setPointerCapture(c.pointerId),e.classList.add("is-active"),r(c.clientX,c.clientY)}),t.addEventListener("pointermove",c=>{c.pointerId===i&&(c.stopPropagation(),r(c.clientX,c.clientY))}),t.addEventListener("pointerup",c=>{c.pointerId===i&&a()}),t.addEventListener("pointercancel",c=>{c.pointerId===i&&a()})}buildShareMessage(){const t=Rs(this.lastClearSeconds),e=mr(this.lastClearSeconds);return`🐾 ຂ້ອຍຫຼິ້ນເກມ "ແມວລາວ NekoLao (Issarapon School)" ຢູ່ສວນປະຕູໄຊ ວຽງຈັນ ເກັບດອກຈຳປາ ${this.lastFlowers}/${this.lastTotalFlowers} ດອກ ແລະ ພາລະກິດ ${this.lastDoneTasks}/6 ດ້ວຍເວລາ ${t} (${e})! 🌼✨ #IssaraponSchool #NekoLao #PatuxayPark #Laos`}showStartModal(t){this.startContinueBtn.classList.toggle("is-hidden",!t),this.startDialog.open||this.startDialog.showModal()}showVictoryModal(t,e=!0){this.lastClearSeconds=t,this.victoryTimeMainEl.textContent=Rs(t),this.victoryTimeSubEl.textContent=`(${mr(t)})`,this.victoryStatFlowersEl.textContent=`🌼 ດອກຈຳປາ ${this.lastFlowers} / ${this.lastTotalFlowers}`,this.victoryStatTasksEl.textContent=`✅ ພາລະກິດ ${this.lastDoneTasks} / 6`,e||this.lastFlowers>=this.lastTotalFlowers&&this.lastDoneTasks>=6?(this.victoryBadgeEl.textContent="🏆 ພາລະກິດສຳເລັດຄົບທຸກຂໍ້! 🏆",this.victoryTitleEl.textContent="ຊົມເຊີຍ! ສຳຫຼວດສວນປະຕູໄຊສຳເລັດແລ້ວ!"):this.lastFlowers>=this.lastTotalFlowers?(this.victoryBadgeEl.textContent="🌼 ເກັບດອກຈຳປາຄົບ 30 ດອກແລ້ວ! 🌼",this.victoryTitleEl.textContent="ຊົມເຊີຍ! ເກັບດອກຈຳປາຄົບທຸກດອກແລ້ວ!"):(this.victoryBadgeEl.textContent="⏱️ ສະຖິຕິເວລາປັດຈຸບັນ & ແຊຣ໌ SNS",this.victoryTitleEl.textContent="ແມວລາວ NekoLao • Issarapon School"),this.victoryDialog.open||this.victoryDialog.showModal()}openCoatModal(){this.coatDialog.open||this.coatDialog.showModal()}updateMuteLabel(t){this.muteBtn.innerHTML=t?"🔇 ປິດສຽງ <kbd>M</kbd>":"🔊 ສຽງ <kbd>M</kbd>"}togglePhotoMode(t){if(this.isPhotoMode=t!==void 0?t:!this.isPhotoMode,this.mainHud.classList.toggle("is-hidden",this.isPhotoMode),this.photoOverlay.classList.toggle("is-hidden",!this.isPhotoMode),!this.isPhotoMode){this.onChangeFov?.(50);const e=this.root.querySelector("#nl-fov-slider");e&&(e.value="50")}}showToast(t){const e=document.createElement("div");e.className="nl-toast",e.textContent=t,this.toastContainerEl.appendChild(e),window.setTimeout(()=>{e.classList.add("is-leaving"),window.setTimeout(()=>e.remove(),320)},3100)}updateState(t){this.lastFlowers=t.flowers,this.lastTotalFlowers=t.totalFlowers,this.flowerCountEl.textContent=`${t.flowers} / ${t.totalFlowers}`;const e=Math.min(100,Math.round(t.flowers/Math.max(1,t.totalFlowers)*100));this.flowerBarFillEl.style.width=`${e}%`;const n=t.isCleared&&t.clearTimeSeconds!==null?t.clearTimeSeconds:t.elapsedSeconds;this.timerValueEl.textContent=Rs(n),this.timerValueEl.classList.toggle("is-cleared",t.isCleared),this.openVictoryBtn.classList.toggle("is-cleared-glow",t.isCleared),this.lastClearSeconds=n,t.elevationY>=14.5?this.elevationBadgeEl.textContent=`ດາດຟ້າປະຕູໄຊ • ${t.elevationY.toFixed(1)} ແມັດ`:t.elevationY>=2?this.elevationBadgeEl.textContent=`ປະຕູໄຊ • ${t.elevationY.toFixed(1)} ແມັດ`:this.elevationBadgeEl.textContent=`ເດີ່ນສວນ • ${t.elevationY.toFixed(1)} ແມັດ`;let i=0;for(const[r,a]of Object.entries(t.checklist)){a&&(i+=1);const c=this.checklistItems[r];c&&c.classList.toggle("is-done",a)}this.lastDoneTasks=i,this.checklistProgressEl.textContent=`${i}/6 ▾`,["morning","golden_hour","night"].forEach(r=>{for(const a of this.todButtons[r])a.classList.toggle("is-active",t.timeOfDay===r)}),Object.keys(this.coatButtons).forEach(r=>{this.coatButtons[r]?.classList.toggle("is-selected",t.currentCoat===r)});let o=t.promptText;!o&&t.activeNapSpot?o=t.isLoafing?`☀️ ກຳລັງນອນໝອບຄາງຮືໆຢູ່ ${t.activeNapSpot} — ກົດ [Q] ຫຼື ຍ່າງເພື່ອຕື່ນ`:`☀️ ບ່ອນນອນອາບແດດ: ${t.activeNapSpot} — ກົດ [Q] ເພື່ອນອນໝອບ`:!o&&t.isLoafing&&(o="🐾 ແມວກຳລັງນອນໝອບພັກຜ່ອນ — ກົດ [Q] ຫຼື ຍ່າງເພື່ອລຸກຂຶ້ນ"),o?(this.promptBannerEl.textContent=o,this.promptBannerEl.classList.remove("is-hidden")):this.promptBannerEl.classList.add("is-hidden")}injectStyles(){if(document.getElementById("nl-hud-styles"))return;const t=document.createElement("style");t.id="nl-hud-styles",t.textContent=`
      .nl-hud-wrapper {
        position: fixed;
        inset: 0;
        pointer-events: none;
        display: flex;
        justify-content: space-between;
        padding: 16px 20px;
        z-index: 20;
        transition: opacity 0.25s ease;
        font-family: 'Noto Sans Lao', 'Plus Jakarta Sans', sans-serif;
      }
      .nl-hud-wrapper.is-hidden,
      .nl-photo-overlay.is-hidden,
      .nl-prompt-banner.is-hidden,
      .is-hidden {
        display: none !important;
      }

      .nl-left-column,
      .nl-right-column {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 345px;
      }
      .nl-right-column {
        align-items: flex-end;
        max-width: 470px;
      }

      .nl-glass-card {
        pointer-events: auto;
        background: rgba(24, 18, 14, 0.76);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 209, 102, 0.36);
        border-radius: 16px;
        padding: 12px 15px;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.38);
        color: #fff9f0;
      }

      .nl-brand-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 8px;
      }
      .nl-title {
        font-family: 'Noto Sans Lao', 'Fredoka', sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        color: #ffd166;
        line-height: 1.2;
      }
      .nl-subtitle {
        font-size: 0.75rem;
        color: #e2d4c0;
        margin-top: 2px;
      }
      .nl-elevation-badge {
        font-size: 0.72rem;
        font-weight: 600;
        padding: 4px 9px;
        border-radius: 999px;
        background: rgba(46, 196, 182, 0.22);
        border: 1px solid rgba(46, 196, 182, 0.55);
        color: #9bf6ee;
        white-space: nowrap;
      }

      .nl-timer-row {
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(255, 209, 102, 0.11);
        border: 1px solid rgba(255, 209, 102, 0.28);
        border-radius: 10px;
        padding: 5px 9px;
        margin-bottom: 9px;
        font-size: 0.78rem;
      }
      .nl-timer-label {
        color: #e2d4c0;
        font-weight: 600;
      }
      .nl-timer-value {
        flex: 1;
        color: #fff9f0;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .nl-timer-value.is-cleared {
        color: #2ec4b6;
      }
      .nl-mini-icon-btn {
        cursor: pointer;
        border: 1px solid rgba(255, 209, 102, 0.4);
        background: rgba(255, 248, 235, 0.12);
        color: #ffd166;
        border-radius: 6px;
        padding: 2px 7px;
        font-family: inherit;
        font-size: 0.7rem;
        font-weight: 600;
      }
      .nl-mini-icon-btn:hover {
        background: rgba(255, 209, 102, 0.28);
      }

      .nl-flower-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.84rem;
        margin-bottom: 6px;
      }
      .nl-flower-label {
        flex: 1;
        margin-left: 6px;
        color: #fff3df;
        font-weight: 600;
      }
      .nl-flower-count {
        color: #ffd166;
        font-family: 'Fredoka', sans-serif;
        font-size: 0.96rem;
      }
      .nl-progress-track {
        width: 100%;
        height: 7px;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        overflow: hidden;
      }
      .nl-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #ff9f1c, #ffd166, #2ec4b6);
        border-radius: 999px;
        transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .nl-game-control-row {
        display: flex;
        gap: 6px;
        margin-top: 10px;
      }
      .nl-restart-btn,
      .nl-share-hud-btn {
        cursor: pointer;
        flex: 1;
        border-radius: 10px;
        padding: 6px 8px;
        font-family: inherit;
        font-size: 0.74rem;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        transition: all 0.16s ease;
      }
      .nl-restart-btn {
        background: rgba(255, 159, 28, 0.18);
        border: 1px solid rgba(255, 209, 102, 0.55);
        color: #ffd166;
      }
      .nl-restart-btn:hover {
        background: rgba(255, 209, 102, 0.32);
        transform: translateY(-1px);
      }
      .nl-share-hud-btn {
        background: rgba(46, 196, 182, 0.2);
        border: 1px solid rgba(46, 196, 182, 0.6);
        color: #9bf6ee;
      }
      .nl-share-hud-btn:hover {
        background: rgba(46, 196, 182, 0.35);
        transform: translateY(-1px);
      }
      .nl-share-hud-btn.is-cleared-glow {
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        border-color: #ffd166;
        box-shadow: 0 0 14px rgba(255, 209, 102, 0.55);
      }

      .nl-card-heading-btn {
        width: 100%;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: inherit;
        font-size: 0.8rem;
        color: #ffd166;
        font-weight: 700;
        cursor: pointer;
        padding: 0;
        margin-bottom: 8px;
      }
      .nl-checklist-card.is-collapsed .nl-card-heading-btn {
        margin-bottom: 0;
      }
      .nl-checklist-card.is-collapsed .nl-checklist-list {
        display: none;
      }
      .nl-checklist-progress {
        font-size: 0.74rem;
        color: #9bf6ee;
      }
      .nl-checklist-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .nl-check-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.78rem;
        color: #e7dac8;
        transition: color 0.2s ease;
      }
      .nl-check-box {
        width: 15px;
        height: 15px;
        border-radius: 4px;
        border: 1.5px solid rgba(255, 209, 102, 0.55);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 0.68rem;
      }
      .nl-check-item.is-done {
        color: #9bf6ee;
        text-decoration: line-through;
        opacity: 0.88;
      }
      .nl-check-item.is-done .nl-check-box {
        background: #2ec4b6;
        border-color: #2ec4b6;
        color: #111;
      }
      .nl-check-item.is-done .nl-check-box::after {
        content: '✓';
        font-weight: 800;
      }

      .nl-toolbar-card,
      .nl-travel-card {
        display: flex;
        align-items: center;
        gap: 7px;
        flex-wrap: wrap;
        padding: 9px 12px;
      }
      .nl-toolbar-group {
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;
      }
      .nl-group-label {
        font-size: 0.74rem;
        color: #d8c7b0;
        margin-right: 2px;
        font-weight: 700;
      }
      .nl-toolbar-divider {
        width: 1px;
        height: 20px;
        background: rgba(255, 209, 102, 0.25);
        margin: 0 2px;
      }

      .nl-pill-btn,
      .nl-action-chip,
      .nl-mini-btn,
      .nl-cat-btn {
        cursor: pointer;
        border: 1px solid rgba(255, 209, 102, 0.32);
        background: rgba(255, 248, 235, 0.09);
        color: #fff9f0;
        font-family: inherit;
        font-size: 0.76rem;
        font-weight: 600;
        padding: 6px 10px;
        border-radius: 999px;
        transition: all 0.16s ease;
        display: inline-flex;
        align-items: center;
        gap: 5px;
      }
      .nl-pill-btn:hover,
      .nl-action-chip:hover,
      .nl-mini-btn:hover,
      .nl-cat-btn:hover {
        background: rgba(255, 209, 102, 0.24);
        border-color: #ffd166;
        transform: translateY(-1px);
      }
      .nl-pill-btn.is-active {
        background: #ffd166;
        color: #1d150e;
        border-color: #ffd166;
        font-weight: 700;
      }

      kbd {
        font-family: inherit;
        font-size: 0.65rem;
        padding: 1px 5px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.38);
        border: 1px solid rgba(255, 255, 255, 0.22);
        color: #ffd166;
      }

      /* Virtual Joystick for Mobile / Touch */
      .nl-joystick-zone {
        position: fixed;
        bottom: 22px;
        left: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        pointer-events: auto;
        touch-action: none;
        z-index: 25;
      }
      .nl-joystick-base {
        width: 108px;
        height: 108px;
        border-radius: 50%;
        background: rgba(24, 18, 14, 0.62);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 209, 102, 0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        transition: border-color 0.2s ease, background 0.2s ease;
      }
      .nl-joystick-base.is-active {
        border-color: #ffd166;
        background: rgba(38, 28, 20, 0.78);
      }
      .nl-joystick-knob {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1d150e;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);
        pointer-events: none;
      }
      .nl-joystick-hint {
        font-size: 0.68rem;
        color: rgba(255, 249, 240, 0.78);
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }

      .nl-bottom-dock {
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        z-index: 22;
      }
      .nl-prompt-banner {
        pointer-events: auto;
        background: linear-gradient(90deg, rgba(158, 27, 36, 0.92), rgba(34, 24, 18, 0.92));
        border: 1.5px solid #ffd166;
        color: #fff9f0;
        padding: 8px 18px;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
        text-align: center;
      }
      .nl-controls-bar {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 14px;
        border-radius: 999px;
      }
      .nl-move-hint {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.75rem;
        color: #e2d4c0;
        white-space: nowrap;
      }
      .nl-cat-actions {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
        justify-content: center;
      }

      /* Photo Mode Viewfinder */
      .nl-photo-overlay {
        position: fixed;
        inset: 0;
        z-index: 30;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px;
      }
      .nl-viewfinder-grid {
        position: relative;
        flex: 1;
        border: 1px solid rgba(255, 249, 240, 0.28);
        border-radius: 12px;
        margin-bottom: 16px;
      }
      .nl-vf-corner {
        position: absolute;
        width: 28px;
        height: 28px;
        border-color: #ffd166;
        border-style: solid;
      }
      .nl-vf-corner.tl { top: -2px; left: -2px; border-width: 3px 0 0 3px; }
      .nl-vf-corner.tr { top: -2px; right: -2px; border-width: 3px 3px 0 0; }
      .nl-vf-corner.bl { bottom: -2px; left: -2px; border-width: 0 0 3px 3px; }
      .nl-vf-corner.br { bottom: -2px; right: -2px; border-width: 0 3px 3px 0; }
      .nl-vf-stamp {
        position: absolute;
        bottom: 14px;
        right: 18px;
        font-family: 'Noto Sans Lao', 'Fredoka', sans-serif;
        font-size: 0.85rem;
        letter-spacing: 0.06em;
        color: rgba(255, 209, 102, 0.92);
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.65);
      }
      .nl-photo-controls {
        align-self: center;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        border-radius: 24px;
        padding: 10px 18px;
      }
      .nl-photo-control-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.78rem;
      }
      .nl-snap-btn {
        cursor: pointer;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        border: none;
        padding: 8px 16px;
        border-radius: 999px;
        font-family: inherit;
        font-weight: 700;
        font-size: 0.82rem;
      }

      /* Toast notifications */
      .nl-toast-container {
        position: fixed;
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        z-index: 45;
        pointer-events: none;
        width: max-content;
        max-width: 92vw;
      }
      .nl-toast {
        background: rgba(24, 18, 14, 0.92);
        backdrop-filter: blur(10px);
        border: 1.5px solid #ffd166;
        color: #fff9f0;
        padding: 9px 18px;
        border-radius: 999px;
        font-size: 0.84rem;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
        animation: nlToastIn 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        text-align: center;
      }
      .nl-toast.is-leaving {
        opacity: 0;
        transform: translateY(-8px);
        transition: all 0.28s ease;
      }
      @keyframes nlToastIn {
        from { opacity: 0; transform: translateY(-12px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* Dialogs: Start Modal, Coat Wardrobe & Victory Modal */
      .nl-start-dialog,
      .nl-coat-dialog,
      .nl-victory-dialog {
        margin: auto;
        border: 2px solid rgba(255, 209, 102, 0.72);
        border-radius: 22px;
        background: rgba(24, 18, 14, 0.95);
        backdrop-filter: blur(18px);
        color: #fff9f0;
        padding: 0;
        max-width: 540px;
        width: calc(100vw - 28px);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
        font-family: 'Noto Sans Lao', 'Plus Jakarta Sans', sans-serif;
      }
      .nl-start-dialog::backdrop,
      .nl-coat-dialog::backdrop,
      .nl-victory-dialog::backdrop {
        background-color: rgba(10, 7, 5, 0.65);
        backdrop-filter: blur(5px);
      }
      .nl-dialog-form {
        padding: 22px 24px;
      }
      .nl-school-banner {
        display: inline-block;
        padding: 5px 15px;
        border-radius: 999px;
        background: linear-gradient(90deg, rgba(90, 22, 32, 0.9), rgba(56, 11, 18, 0.9));
        border: 1.5px solid #ffd166;
        color: #ffd166;
        font-weight: 800;
        font-size: 0.85rem;
        margin-bottom: 10px;
        letter-spacing: 0.03em;
      }
      .nl-start-title {
        font-size: 1.65rem;
        font-weight: 800;
        color: #ffd166;
        margin-bottom: 6px;
      }
      .nl-start-rules-box {
        text-align: left;
        background: rgba(255, 248, 235, 0.06);
        border: 1px solid rgba(255, 209, 102, 0.32);
        border-radius: 16px;
        padding: 14px 16px;
        margin-bottom: 18px;
        display: flex;
        flex-direction: column;
        gap: 9px;
      }
      .nl-rule-item {
        display: flex;
        align-items: center;
        gap: 9px;
        font-size: 0.84rem;
        color: #f3e8d8;
      }
      .nl-rule-item strong {
        color: #ffd166;
      }
      .nl-start-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .nl-big-start-btn {
        cursor: pointer;
        width: 100%;
        padding: 14px 20px;
        border-radius: 16px;
        border: none;
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        font-family: inherit;
        font-size: 1.08rem;
        font-weight: 800;
        box-shadow: 0 8px 24px rgba(255, 159, 28, 0.42);
        transition: transform 0.16s ease, box-shadow 0.16s ease;
      }
      .nl-big-start-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(255, 209, 102, 0.58);
      }
      .nl-continue-btn {
        cursor: pointer;
        width: 100%;
        padding: 10px 16px;
        border-radius: 14px;
        border: 1px solid rgba(46, 196, 182, 0.65);
        background: rgba(46, 196, 182, 0.18);
        color: #9bf6ee;
        font-family: inherit;
        font-size: 0.88rem;
        font-weight: 700;
        transition: background 0.16s ease;
      }
      .nl-continue-btn:hover {
        background: rgba(46, 196, 182, 0.32);
      }

      .nl-dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 16px;
      }
      .nl-dialog-title {
        font-size: 1.25rem;
        color: #ffd166;
      }
      .nl-dialog-subtitle {
        font-size: 0.82rem;
        color: #d8c7b0;
        margin-top: 3px;
      }
      .nl-dialog-close {
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.08);
        color: #fff9f0;
        font-size: 0.9rem;
      }
      .nl-coat-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-bottom: 18px;
      }
      .nl-coat-option {
        cursor: pointer;
        text-align: left;
        padding: 13px;
        border-radius: 14px;
        border: 1.5px solid rgba(255, 209, 102, 0.25);
        background: rgba(255, 248, 235, 0.05);
        color: #fff9f0;
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-family: inherit;
        transition: all 0.16s ease;
      }
      .nl-coat-option:hover {
        border-color: rgba(255, 209, 102, 0.65);
        background: rgba(255, 209, 102, 0.12);
      }
      .nl-coat-option.is-selected {
        border-color: #ffd166;
        background: rgba(255, 209, 102, 0.18);
      }
      .nl-coat-swatch {
        width: 34px;
        height: 18px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .swatch-siamese { background: linear-gradient(90deg, #f5ead8 60%, #4b3224 100%); }
      .swatch-ginger { background: linear-gradient(90deg, #e88331 65%, #fff8ee 100%); }
      .swatch-korat { background: linear-gradient(90deg, #6d7f93, #4a596b); }
      .swatch-calico { background: linear-gradient(90deg, #fff5e6 33%, #e37b2f 33%, #e37b2f 66%, #362821 66%); }
      .nl-coat-name {
        font-weight: 700;
        font-size: 0.86rem;
        color: #ffd166;
      }
      .nl-coat-desc {
        font-size: 0.74rem;
        color: #d9cbb8;
        line-height: 1.35;
      }
      .nl-dialog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        color: #cbbba6;
        gap: 10px;
      }

      /* Victory / Clear Time Modal */
      .nl-victory-content {
        text-align: center;
      }
      .nl-victory-badge {
        display: inline-block;
        padding: 4px 13px;
        border-radius: 999px;
        background: rgba(46, 196, 182, 0.18);
        border: 1px solid #2ec4b6;
        color: #9bf6ee;
        font-weight: 700;
        font-size: 0.8rem;
        margin-bottom: 8px;
      }
      .nl-victory-title {
        font-size: 1.34rem;
        color: #fff9f0;
        margin-bottom: 6px;
      }
      .nl-victory-subtitle {
        font-size: 0.84rem;
        color: #dfd0bc;
        margin-bottom: 16px;
      }
      .nl-victory-time-box {
        background: linear-gradient(135deg, rgba(255, 209, 102, 0.16), rgba(46, 196, 182, 0.14));
        border: 2px solid #ffd166;
        border-radius: 18px;
        padding: 16px 18px;
        margin-bottom: 18px;
      }
      .nl-victory-time-label {
        font-size: 0.8rem;
        color: #ffd166;
        font-weight: 600;
      }
      .nl-victory-time-main {
        font-size: 2.05rem;
        font-weight: 800;
        color: #fff9f0;
        margin: 6px 0 2px;
        text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
      }
      .nl-victory-time-sub {
        font-family: 'Fredoka', monospace;
        font-size: 0.95rem;
        color: #9bf6ee;
        margin-bottom: 10px;
      }
      .nl-victory-stats-row {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .nl-stat-pill {
        padding: 4px 12px;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-size: 0.78rem;
        font-weight: 600;
      }
      .nl-share-section {
        margin-bottom: 18px;
      }
      .nl-share-heading {
        font-size: 0.82rem;
        color: #ffd166;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .nl-share-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
      }
      .nl-share-btn {
        cursor: pointer;
        border: 1px solid rgba(255, 209, 102, 0.45);
        border-radius: 12px;
        padding: 9px 13px;
        font-family: inherit;
        font-size: 0.8rem;
        font-weight: 700;
        color: #fff9f0;
        background: rgba(255, 255, 255, 0.1);
        transition: transform 0.15s ease, background 0.15s ease;
      }
      .nl-share-btn:hover {
        transform: translateY(-2px);
        background: rgba(255, 209, 102, 0.25);
      }
      .nl-share-btn.share-x { background: rgba(20, 23, 26, 0.85); }
      .nl-share-btn.share-line { background: rgba(6, 199, 85, 0.28); border-color: #06c755; }
      .nl-share-btn.share-fb { background: rgba(24, 119, 242, 0.32); border-color: #4ea1ff; }
      .nl-share-btn.share-native { background: rgba(155, 81, 224, 0.28); border-color: #c084fc; }
      .nl-share-btn.share-card {
        background: linear-gradient(135deg, #ffd166, #ff9f1c);
        color: #1c130c;
        border: none;
      }
      .nl-victory-footer {
        justify-content: center;
        gap: 14px;
      }

      /* Mobile Responsive Adjustments */
      @media (max-width: 820px) {
        .nl-hud-wrapper {
          padding: 10px 10px;
        }
        .nl-left-column {
          max-width: 225px;
          gap: 6px;
        }
        .nl-right-column {
          max-width: 210px;
          gap: 6px;
        }
        .nl-glass-card {
          padding: 8px 10px;
          border-radius: 13px;
        }
        .nl-title {
          font-size: 0.96rem;
        }
        .nl-subtitle {
          font-size: 0.66rem;
        }
        .nl-move-hint,
        .nl-desktop-only,
        kbd {
          display: none !important;
        }
        .nl-elevation-badge {
          font-size: 0.64rem;
          padding: 2px 6px;
        }
        .nl-timer-row {
          padding: 4px 7px;
          font-size: 0.7rem;
          margin-bottom: 6px;
        }
        .nl-flower-row {
          font-size: 0.75rem;
        }
        .nl-restart-btn,
        .nl-share-hud-btn {
          font-size: 0.66rem;
          padding: 5px 6px;
        }
        .nl-pill-btn,
        .nl-action-chip,
        .nl-mini-btn {
          font-size: 0.68rem;
          padding: 5px 8px;
        }
        .nl-joystick-zone {
          bottom: 14px;
          left: 14px;
        }
        .nl-joystick-base {
          width: 94px;
          height: 94px;
        }
        .nl-joystick-knob {
          width: 40px;
          height: 40px;
          font-size: 1rem;
        }
        .nl-bottom-dock {
          left: auto;
          right: 12px;
          bottom: 14px;
          transform: none;
          align-items: flex-end;
          max-width: calc(100vw - 135px);
        }
        .nl-controls-bar {
          padding: 6px 8px;
          border-radius: 18px;
        }
        .nl-cat-btn {
          font-size: 0.74rem;
          padding: 8px 11px;
        }
        .nl-coat-grid {
          grid-template-columns: 1fr;
        }
        .nl-victory-time-main {
          font-size: 1.55rem;
        }
      }
    `,document.head.appendChild(t)}}function h0(){const s=document.getElementById("game-container"),t=document.getElementById("hud-root"),e=new Jm(s),n=new Km,i=new t0(e.renderer),o=new e0(i,n);e.scene.add(o.group);const r=new n0(i,n);e.scene.add(r.group);const a=new i0(i);e.scene.add(a.group);const c=new s0(i,n);e.scene.add(c.group);const l=new r0(e.scene,e.camera,n,i),d=new a0(e.scene),u=new c0(e.scene,e.renderer),h=new l0(t);let f=!1,g=!1,x=!1,m=!1,p=0,w=null,_=!1,v=!1,L=!1;const A=()=>d.collectedCount>=d.totalFlowers&&l.hasWalkedUnderArch&&l.hasSplashedFountain&&d.koiBattedCount>0&&d.pigeonsChasedCount>0&&f&&l.hasReachedRooftop,S="nekolao_save_v1",P=()=>{try{const y={collectedIndices:d.getCollectedFlowerIndices(),catPos:{x:l.position.x,y:l.position.y,z:l.position.z},catYaw:l.yaw,cameraYaw:l.cameraYaw,cameraPitch:l.cameraPitch,coat:l.catModel.currentCoat,timeOfDay:u.currentTimeOfDay,hasWalkedUnderArch:l.hasWalkedUnderArch,hasReachedRooftop:l.hasReachedRooftop,hasSplashedFountain:l.hasSplashedFountain,hasSwattedProp:f,koiBattedCount:d.koiBattedCount,pigeonsChasedCount:d.pigeonsChasedCount,elapsedRunSeconds:p,clearTimeSeconds:w};localStorage.setItem(S,JSON.stringify(y))}catch{}};u.onTimeOfDayChanged=(y,R)=>{o.setNightMode(R),c.setNightMode(R)},u.setTimeOfDay("golden_hour");try{const y=localStorage.getItem(S);if(y){const R=JSON.parse(y);Array.isArray(R.collectedIndices)&&R.collectedIndices.length>0&&(L=!0,d.restoreCollectedFlowers(R.collectedIndices)),R.catPos&&typeof R.catPos.x=="number"&&(l.teleportTo(new C(R.catPos.x,R.catPos.y,R.catPos.z),R.catYaw,R.cameraPitch),typeof R.cameraYaw=="number"&&(l.cameraYaw=R.cameraYaw)),R.coat&&l.catModel.setCoat(R.coat),R.timeOfDay&&u.setTimeOfDay(R.timeOfDay),R.hasWalkedUnderArch&&(l.hasWalkedUnderArch=!0,g=!0,L=!0),R.hasReachedRooftop&&(l.hasReachedRooftop=!0,x=!0,L=!0),R.hasSplashedFountain&&(l.hasSplashedFountain=!0,m=!0,L=!0),R.hasSwattedProp&&(f=!0,L=!0),typeof R.koiBattedCount=="number"&&R.koiBattedCount>0&&(d.koiBattedCount=R.koiBattedCount,L=!0),typeof R.pigeonsChasedCount=="number"&&R.pigeonsChasedCount>0&&(d.pigeonsChasedCount=R.pigeonsChasedCount,L=!0),typeof R.elapsedRunSeconds=="number"&&(p=R.elapsedRunSeconds),typeof R.clearTimeSeconds=="number"&&(w=R.clearTimeSeconds,_=!0)}}catch{}window.addEventListener("beforeunload",P),h.showStartModal(L),h.onJoystickMove=(y,R,F)=>{l.setJoystickInput(y,R,F)};const M=()=>{d.resetAllFlowers(),c.resetKnockableProps(),d.koiBattedCount=0,d.pigeonsChasedCount=0,l.hasWalkedUnderArch=!1,l.hasReachedRooftop=!1,l.hasSplashedFountain=!1,f=!1,g=!1,x=!1,m=!1,p=0,w=null,_=!1,v=!0,l.teleportTo(new C(2.6,.48,-63.4),-.05,-.04),u.playCollectSound(),P(),h.showToast("▶️ ເລີ່ມເກມໃໝ່ຕັ້ງແຕ່ຕົ້ນແລ້ວ! ຈັບເວລາ 00:00.0 ຂໍໃຫ້ໂຊກດີ!")};h.onStartNewGame=()=>{M()},h.onContinueGame=()=>{v=!0,u.playCollectSound(),h.showToast("⏩ ຫຼິ້ນຕໍ່ຈາກເດີມແລ້ວ!")},h.onResetRun=()=>{M()},h.onDownloadClearCard=y=>{try{const R=e.renderer.domElement,F=document.createElement("canvas");F.width=R.width,F.height=R.height;const N=F.getContext("2d");N.drawImage(R,0,0);const B=Math.round(F.height*.24),W=F.height-B,V=N.createLinearGradient(0,W,0,F.height);V.addColorStop(0,"rgba(20, 14, 10, 0.82)"),V.addColorStop(1,"rgba(20, 14, 10, 0.96)"),N.fillStyle=V,N.fillRect(0,W,F.width,B),N.strokeStyle="#ffd166",N.lineWidth=4,N.beginPath(),N.moveTo(0,W),N.lineTo(F.width,W),N.stroke(),N.fillStyle="#ffd166",N.font=`bold ${Math.round(F.height*.035)}px "Noto Sans Lao", "Fredoka", sans-serif`,N.fillText("🌼 Issarapon School • ແມວລາວ NekoLao (ສວນປະຕູໄຊ ວຽງຈັນ)",36,W+B*.34),N.fillStyle="#ffffff",N.font=`bold ${Math.round(F.height*.05)}px "Noto Sans Lao", sans-serif`,N.fillText(`⏱️ ເວລາທີ່ໃຊ້: ${Rs(y)} (${mr(y)})`,36,W+B*.76),N.fillStyle="#9bf6ee",N.font=`bold ${Math.round(F.height*.03)}px "Noto Sans Lao", sans-serif`,N.textAlign="right",N.fillText(`🌼 ດອກຈຳປາ ${d.collectedCount}/${d.totalFlowers} • ✅ ພາລະກິດຄົບຖ້ວນ`,F.width-36,W+B*.76);const K=document.createElement("a");K.download=`nekolao-issarapon-clear-${Math.round(y)}s.png`,K.href=F.toDataURL("image/png"),K.click(),h.showToast("🖼️ ບັນທຶກຮູບໃບຢັ້ງຢືນສະຖິຕິສຳເລັດແລ້ວ!")}catch{h.showToast("🖼️ ບັນທຶກຮູບສຳເລັດແລ້ວ!")}},l.onMeow=()=>{v=!0,u.playMeowSound(),d.interactWithKoi(l.position)&&a.triggerSplash(l.position)},l.onSwat=y=>{v=!0,u.playSwatSound(),c.swatNearbyProps(y,2.5)>0&&(f||(f=!0,h.showToast("🐾 ແມວຈອມຊົນ! ປັດກະຕ່າດອກໄມ້ບູຊາແລ້ວ!"))),d.interactWithKoi(y)&&(a.triggerSplash(y),u.playSplashSound(),h.showToast("🐟 ຕະປົບປາຄາບໃນໜອງບົວແລ້ວ!")),P()},l.onWaterSplash=y=>{a.triggerSplash(y),u.playSplashSound()},l.onClimbUsed=y=>{v=!0,u.playCollectSound(),y.toLowerCase().includes("up")||l.position.y>14?h.showToast("🏯 ຂຶ້ນສູ່ດາດຟ້າປະຕູໄຊສຳເລັດແລ້ວ!"):y.toLowerCase().includes("tree")||y.toLowerCase().includes("champa")?h.showToast("🌼 ປີນຂຶ້ນຕົ້ນດອກຈຳປາແລ້ວ!"):h.showToast("🐾 ກັບລົງມາເດີ່ນປະຕູໄຊແລ້ວ"),P()},d.onFlowerCollected=(y,R)=>{v=!0,u.playCollectSound(),P(),y===R?(h.showToast(`🎉 ເກັບດອກຈຳປາຄົບທັງໝົດ ${R} / ${R} ດອກແລ້ວ!`),A()||h.showVictoryModal(Math.max(.1,p),!1)):h.showToast(`🌼 ເກັບດອກຈຳປາໄດ້: ${y} / ${R}`)},d.onKoiBatted=()=>{a.triggerSplash(l.position)},d.onPigeonScattered=()=>{d.pigeonsChasedCount===1&&h.showToast("🕊️ ໄລ່ນົກກາງແກບິນຂຶ້ນຟ້າແລ້ວ!")},h.onSelectCoat=y=>{l.catModel.setCoat(y),u.playCollectSound(),P();const R={siamese:"ແມວວິຊຽນມາດ (Siamese)",ginger_tabby:"ແມວສົ້ມລາຍເສືອແມ່ນ້ຳຂອງ",korat:"ແມວສີສະຫວາດ (Korat)",calico:"ແມວສາມສີນຳໂຊກວຽງຈັນ"};h.showToast(`🐾 ປ່ຽນຂົນແມວເປັນ: ${R[y]}`)},h.onSelectTimeOfDay=y=>{u.setTimeOfDay(y),P();const R={morning:"☀️ ຕອນເຊົ້າຢູ່ວຽງຈັນ — ທ້ອງຟ້າສົດໃສ",golden_hour:"🌅 ຍາມແລງຢູ່ສວນປະຕູໄຊ — ແສງສີທອງ",night:"🌙 ກາງຄືນຢູ່ວຽງຈັນ — ໄຟປະຕູໄຊ ແລະ ນ້ຳພຸດົນຕີ"};h.showToast(R[y])},h.onToggleMute=()=>u.toggleMute(),h.onTriggerAction=y=>{y==="meow"?l.triggerMeow():y==="swat"?l.triggerSwat():y==="loaf"?l.toggleLoaf():y==="jump"&&l.triggerJump()},h.onFastTravel=y=>{y==="fountain"?(l.teleportTo(new C(2.6,.48,-63.4),-.05,-.04),h.showToast("⛲ ຍ້າຍໄປເດີ່ນນ້ຳພຸດົນຕີ")):y==="archway"?(l.teleportTo(new C(0,.78,-5.2),0,-.18),l.hasWalkedUnderArch=!0,h.showToast("🏛️ ຢູ່ໃຕ້ຊຸ້ມເພດານດອກບົວປະຕູໄຊ")):y==="rooftop"&&(l.teleportTo(new C(2.2,16.05,8.8),Math.PI+.12,.04),l.hasReachedRooftop=!0,h.showToast("🏯 ຊົມວິວຈາກດາດຟ້າປະຕູໄຊ!")),P()},h.onChangeFov=y=>{e.camera.fov=y,e.camera.updateProjectionMatrix()},h.onSnapPhoto=()=>{try{const y=e.renderer.domElement.toDataURL("image/png"),R=document.createElement("a");R.download=`nekolao-patuxay-${Date.now()}.png`,R.href=y,R.click(),h.showToast("📸 ບັນທຶກຮູບໂປສກາດສວນປະຕູໄຊແລ້ວ!")}catch{h.showToast("📸 ຖ່າຍຮູບໂປສກາດແລ້ວ!")}},window.__NEKOLAO_DEBUG__={engine:e,collision:n,monument:o,parkLayout:r,waterSystem:a,foliageAndProps:c,catController:l,wildlife:d,atmosphere:u,hud:h,getRunState:()=>({elapsedRunSeconds:p,clearTimeSeconds:w,allCleared:A()})},e.onUpdate((y,R)=>{const F=u.currentTimeOfDay==="night",N=A();v&&!N&&w===null?p+=y:v&&N&&w===null&&(w=Math.max(.1,p),P(),_||(_=!0,u.playCollectSound(),h.showVictoryModal(w,!0))),l.update(y,R,h.isPhotoMode),o.update(y,R),a.update(y,R,l.position,F),c.update(y,R,l.position),d.update(y,R,l.position,l.state==="swat"),u.update(y,R,l.position,l.isLoafing),l.hasWalkedUnderArch&&!g&&(g=!0,h.showToast("🏛️ ພົບຊຸ້ມດອກບົວໃຕ້ປະຕູໄຊແລ້ວ!"),P()),l.hasReachedRooftop&&!x&&(x=!0,h.showToast("🏯 ຂຶ້ນຮອດດາດຟ້າປະຕູໄຊແລ້ວ!"),P()),l.hasSplashedFountain&&!m&&(m=!0,h.showToast("⛲ ຫຼິ້ນນ້ຳໃນອ່າງນ້ຳພຸດົນຕີແລ້ວ!"),P()),h.updateState({flowers:d.collectedCount,totalFlowers:d.totalFlowers,checklist:{underArch:l.hasWalkedUnderArch,splashedFountain:l.hasSplashedFountain,battedKoi:d.koiBattedCount>0,chasedPigeons:d.pigeonsChasedCount>0,swattedProp:f,reachedRooftop:l.hasReachedRooftop},promptText:l.activeClimbPrompt,activeNapSpot:d.activeNapSpotLabel,isLoafing:l.isLoafing,currentCoat:l.catModel.currentCoat,timeOfDay:u.currentTimeOfDay,elevationY:l.position.y,elapsedSeconds:p,isCleared:w!==null,clearTimeSeconds:w})}),e.start()}h0();
