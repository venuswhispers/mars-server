"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{10203:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var n=l(57437),r=l(2265);let s=(e,t)=>Math.floor(Math.random()*(t-e))+e,i=(e,t,l)=>{let n=r.useRef(null),i=r.useRef(e);return r.useEffect(()=>{i.current=e},[e]),r.useEffect(()=>{if("number"==typeof t&&"number"==typeof l){let e=()=>{let r=s(t,l);n.current=setTimeout(()=>{i.current(),e()},r)};e()}return()=>clearTimeout(n.current)},[t,l]),r.useCallback(function(){clearTimeout(n.current)},[])},u=(e,t)=>Math.floor(Math.random()*(t-e))+e,o="hsl(50deg, 100%, 50%)",a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return{id:String(u(1e4,99999)),createdAt:Date.now(),color:e,size:u(10,20),style:{top:u(t,r)+"%",left:u(l,n)+"%"}}},c=e=>{let{color:t,size:l,style:r}=e;return(0,n.jsx)("div",{className:"absolute shrink-effect pointer-events-none z-20",style:r,children:(0,n.jsx)("svg",{className:"sparkle-effect",width:l,height:l,viewBox:"0 0 160 160",fill:"none",children:(0,n.jsx)("path",{d:"M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z",fill:t})})})};var f=function(e){let{children:t,color:l=o,top:s=0,left:u=0,right:f=100,bottom:h=100,interval:d=500}=e,[v,m]=r.useState([1,2,3].map(e=>a(l,s,u,f,h)));return i(()=>{let e=Date.now(),t=a(l,s,u,f,h),n=v.filter(t=>e-t.createdAt<1500);n.push(t),m(n)},50,d),(0,n.jsxs)("div",{className:"relative inline-block",children:[t,v.map((e,t)=>(0,n.jsx)(c,{color:e.color,size:e.size,style:e.style},t))]})}}}]);