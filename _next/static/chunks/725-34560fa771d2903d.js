(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{6975:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(3827),o=n(64090),i=n(66203),a=n(37145),s=n.n(a);function u(e){let{src:t,layout:n="fill"}=e,a=(0,o.useRef)(null),[u,l]=(0,o.useState)(!1),c=s()[n];return(0,o.useEffect)(()=>{let e=new IntersectionObserver(e=>{e[0].isIntersecting?(u||l(!0),a.current&&a.current.play()):a.current&&a.current.pause()},{root:null,rootMargin:"0px",threshold:.1});return a.current&&e.observe(a.current),()=>{a.current&&e.unobserve(a.current)}},[u]),(0,r.jsx)("span",{className:(0,i.cn)(s().video,c),children:(0,r.jsx)("video",{ref:a,loop:!0,muted:!0,playsInline:!0,controls:!1,children:u&&(0,r.jsx)("source",{src:t,type:"video/mp4"})})})}},89461:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(3827),o=n(64090),i=n(34802),a=n.n(i),s=n(66203),u=n(75962),l=n(71947);function c(e){let{href:t,text:n,type:i,color:c="black",target:d="",direction:f="forwards"}=e,p=(0,o.useRef)(null),m=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("span",{className:a().text,children:[(0,r.jsx)("span",{className:a().textInner,dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17.1 15.17",className:a().buttonArrow,children:(0,r.jsx)("path",{d:"m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",fill:"currentColor"})})]})}),h=a()[c];return(()=>{switch(i){case"a-internal":return(0,r.jsx)(l.default,{children:(0,r.jsx)("div",{className:(0,s.cn)(a().button,h),ref:p,"data-direction":f,children:(0,r.jsxs)(u.default,{href:t,className:a().inner,children:[(0,r.jsx)("span",{className:a().border}),m]})})});case"a-external":return(0,r.jsx)(l.default,{children:(0,r.jsx)("div",{className:(0,s.cn)(a().button,h),ref:p,"data-direction":f,children:(0,r.jsxs)("a",{href:t,className:a().inner,target:d,children:[(0,r.jsx)("span",{className:a().border}),m]})})});default:return(0,r.jsx)(l.default,{children:(0,r.jsx)("button",{className:(0,s.cn)(a().button,h),ref:p,"data-direction":f,children:(0,r.jsxs)("div",{className:a().inner,children:[(0,r.jsx)("span",{className:a().border}),m]})})})}})()}},75962:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(3827),o=n(56014),i=n(8792),a=n(64090),s=n(47907);function u(e){let{href:t,children:n,onClick:u,className:l,...c}=e,{goToRoute:d}=(0,o.useNavigationContext)(),{setLoading:f}=(0,o.useNavigationContext)(),p=(0,s.usePathname)();return(0,a.useLayoutEffect)(()=>{f(o.LOADING_STATES.LOADED)},[p]),(0,r.jsx)(i.default,{prefetch:!0,passHref:!0,href:t,legacyBehavior:!0,children:(0,r.jsx)("a",{onClick:e=>{let n=new URL(t,window.location.href),r=n.pathname.endsWith("/")?n.pathname.slice(0,-1):n.pathname,o=p.endsWith("/")?p.slice(0,-1):p;e.preventDefault(),u&&u(),r!==o&&d(t)},className:l,...c,children:n})})}},5783:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3827),o=n(64090),i=n(11984),a=n(49908),s=n(91578),u=n.n(s);function l(){let e=(0,o.useRef)(null);return(0,a.V)(()=>{i.ic.create({trigger:e.current,start:"top-=1 top",end:"bottom top",onEnter:()=>{document.documentElement.style.setProperty("--theme-primary","#fff"),document.documentElement.style.setProperty("--theme-secondary","#000")},onEnterBack:()=>{document.documentElement.style.setProperty("--theme-primary","#fff"),document.documentElement.style.setProperty("--theme-secondary","#000")},onLeave:()=>{document.documentElement.style.setProperty("--theme-primary","#000"),document.documentElement.style.setProperty("--theme-secondary","#fff")},onLeaveBack:()=>{document.documentElement.style.setProperty("--theme-primary","#000"),document.documentElement.style.setProperty("--theme-secondary","#fff")}})}),(0,r.jsx)("div",{className:u().cover,ref:e})}},40861:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(3827),o=n(64090),i=n(75962),a=n(49908),s=n(11984),u=n(69162),l=n.n(u);function c(){let e=(0,o.useRef)(null);return(0,a.V)(()=>{let t=window.innerHeight;s.p8.to(e.current,{opacity:1,scrollTrigger:{trigger:document.body,start:"top+=".concat(t/2," top"),end:"bottom bottom",toggleActions:"play reverse play reverse"},ease:"power3.out",duration:.3})}),(0,r.jsx)("div",{className:l().linkContainer,ref:e,children:(0,r.jsx)(i.default,{className:l().button,href:"/start-your-project",children:(0,r.jsxs)("span",{className:l().text,children:[(0,r.jsx)("span",{className:l().textInner,children:"Start your project"}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17.1 15.17",className:l().buttonArrow,children:(0,r.jsx)("path",{d:"m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",fill:"currentColor"})})]})})})}},23560:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(3827),o=n(64090);n(61374);var i=n(66203),a=n(38715),s=n.n(a);function u(e){var t,n,a,u;let{image:l,sizes:c="100vw",lazy:d=!0,priority:f="low",layout:p="fill"}=e;if(!l)return null;let m=s()[p];return(0,o.useEffect)(()=>{window.lazySizes&&"function"==typeof window.lazySizes.update&&window.lazySizes.update()},[l]),(0,r.jsxs)("span",{className:(0,i.cn)(s().image,m),children:[d&&(0,r.jsx)("img",{"data-srcset":l.srcSet||"","data-src":l.sourceUrl||"",alt:l.altText||"",fetchPriority:f,height:(null==l?void 0:null===(t=l.mediaDetails)||void 0===t?void 0:t.height)||"",width:(null==l?void 0:null===(n=l.mediaDetails)||void 0===n?void 0:n.width)||"",sizes:"auto",className:"lazyload"}),!d&&(0,r.jsx)("img",{srcSet:l.srcSet||"",src:l.sourceUrl||"",alt:l.altText||"",loading:"eager",fetchPriority:f,height:(null==l?void 0:null===(a=l.mediaDetails)||void 0===a?void 0:a.height)||"",width:(null==l?void 0:null===(u=l.mediaDetails)||void 0===u?void 0:u.width)||"",sizes:c})]})}},84036:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3827),o=n(64090),i=n(11984),a=n(49908),s=n(39476),u=n.n(s);function l(e){let{children:t,fill:n=!1,duration:s=.75,delay:l=0}=e,c=(0,o.useRef)(null);return(0,a.V)(()=>{i.p8.matchMedia().add("(min-width: 850px)",()=>{i.p8.to(c.current,{opacity:1,scrollTrigger:{trigger:c.current,start:"top bottom",end:"bottom top"},ease:"none",duration:s,delay:l})})}),(0,r.jsx)("span",{className:u().container,"data-fill":n,ref:c,children:t})}},11908:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3827),o=n(64090),i=n(11984),a=n(49908),s=n(4969),u=n.n(s);function l(e){let{children:t,fill:n=!1,duration:s=1.5,delay:l=0}=e,c=(0,o.useRef)(null);return(0,a.V)(()=>{i.p8.matchMedia().add("(min-width: 850px)",()=>{i.p8.to(c.current,{opacity:1,y:0,scrollTrigger:{trigger:c.current,start:"top bottom",end:"bottom top"},ease:"power1.out",duration:s,delay:l})})}),(0,r.jsx)("span",{className:u().container,"data-fill":n,ref:c,children:t})}},48759:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3827),o=n(64090),i=n(11984),a=n(49908),s=n(54065),u=n.n(s);function l(e){let{children:t,fill:n=!1,delay:s=0}=e,l=(0,o.useRef)(null);return(0,a.V)(()=>{i.p8.matchMedia().add("(min-width: 850px)",()=>{i.p8.to(l.current,{opacity:1,y:0,scale:1,scrollTrigger:{trigger:l.current,start:"top bottom+=25%",end:"bottom top"},ease:"power3.out",delay:s,duration:.8})})}),(0,r.jsx)("div",{className:u().image,"data-fill":n,ref:l,children:t})}},51133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3827),o=n(64090),i=n(11984),a=n(49908),s=n(86612),u=n.n(s);function l(e){let{children:t,delay:n=0,lineThreshold:s=.9}=e,l=(0,o.useRef)(null);return(0,a.V)(()=>{i.p8.matchMedia().add("(min-width: 850px)",()=>{new i.C2("span",{type:"lines,words",linesClass:"split-line",wordsClass:"split-word",tag:"span",lineThreshold:s}),i.ic.create({trigger:l.current,start:"top bottom",end:"bottom top",onEnter:()=>{let e=i.p8.utils.toArray(".split-line");0!==e.length&&e.forEach((e,t)=>{let r=i.p8.utils.toArray(e.querySelectorAll(".split-word"));e.querySelector("em"),i.p8.to(r,{y:0,duration:1,delay:n+.125*t,ease:"power3.out",onComplete:()=>{i.p8.set(e,{overflow:"visible"})}}),i.p8.fromTo(e,{"--clipEnd":"0%"},{"--clipEnd":"100%",delay:.25*t+n+.55,duration:.5,ease:"power3.out"})})}})})},{scope:l}),(0,r.jsx)("span",{className:u().headingOuter,ref:l,children:t})}},71947:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(3827),o=n(64090),i=n(11984),a=n(3568),s=n.n(a);function u(e){let{children:t,fill:n=!1}=e,a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(null===a.current||window.innerWidth<850)return;let e=i.p8.quickTo(a.current,"x",{duration:.5,ease:"power3.out"}),t=i.p8.quickTo(a.current,"y",{duration:.5,ease:"power3.out"}),n=n=>{if(!a.current)return;let{clientX:r,clientY:o}=n,{height:i,width:s,left:u,top:l}=a.current.getBoundingClientRect(),c=r-(u+s/2),d=o-(l+i/2);d*=.5,e(c*=.5),t(d)},r=()=>{e(0),t(0)};return a.current.addEventListener("mousemove",n),a.current.addEventListener("mouseleave",r),()=>{null!==a.current&&(a.current.removeEventListener("mousemove",n),a.current.removeEventListener("mouseleave",r))}},[]),(0,r.jsx)("div",{className:s().magnetic,"data-fill":n,ref:a,children:t})}},56014:function(e,t,n){"use strict";n.r(t),n.d(t,{LOADING_STATES:function(){return o},NavigationContext:function(){return c},NavigationContextProvider:function(){return d},useNavigationContext:function(){return f}});var r,o,i=n(3827),a=n(93696),s=n(64090);let u=()=>{let{loading:e,setLoading:t}=f(),n=(0,s.useRef)(null),r=()=>{a.ZP.set(n.current,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"})},u=()=>{a.ZP.to(n.current,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:1,ease:"power4.inOut"})},l=()=>{a.ZP.to(n.current,{opacity:0,duration:.6,ease:"none",onComplete:()=>{a.ZP.set(n.current,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",opacity:1})}})};return(0,s.useEffect)(()=>{r()},[]),(0,s.useEffect)(()=>{switch(e){case o.LOADING:u();break;case o.LOADED:l()}},[e]),(0,i.jsx)("div",{ref:n,style:{position:"fixed",zIndex:50,width:"100vw",height:"100vh",background:"#efefef"}})};var l=n(47907);(r=o||(o={})).INIT="INITIALIZED",r.LOADING="PENDING",r.LOADED="COMPLETE";let c=(0,s.createContext)({goToRoute:e=>{},loading:"INITIALIZED",setLoading:()=>{}}),d=e=>{let{children:t}=e,n=(0,l.useRouter)(),[r,o]=(0,s.useState)("INITIALIZED"),a=async e=>{o("PENDING"),n.prefetch(e),setTimeout(()=>{window.scrollTo(0,-100),n.push(e,{scroll:!0})},1e3)};return(0,i.jsxs)(c.Provider,{value:{goToRoute:a,loading:r,setLoading:o},children:[(0,i.jsx)(u,{}),t]})},f=()=>(0,s.useContext)(c)},66203:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=e=>e.reduce((e,t)=>(Array.isArray(t)?e.push(...r(t)):null!=t&&e.push(t),e),[]);return r(t).join(" ")}n.d(t,{cn:function(){return r}})},37145:function(e){e.exports={video:"AutoplayVideo_video__zckWy",fill:"AutoplayVideo_fill__ZPgCR",contain:"AutoplayVideo_contain__a0yBB",intrinsic:"AutoplayVideo_intrinsic__8aQoe"}},34802:function(e){e.exports={button:"Button_button__JJiqJ",inner:"Button_inner__fnyH6",border:"Button_border__hirH2",textInner:"Button_textInner__JTTHe",white:"Button_white__MQaf2",text:"Button_text__IZaCD",buttonArrow:"Button_buttonArrow__0W9XI","button-text":"Button_button-text__yLgXu"}},91578:function(e){e.exports={cover:"DarkThemeSwitch_cover__hn_xc"}},69162:function(e){e.exports={linkContainer:"FloatingStartButton_linkContainer__eZz7z",button:"FloatingStartButton_button__Ncnrf",buttonArrow:"FloatingStartButton_buttonArrow__re1eN","button-text":"FloatingStartButton_button-text__qflla",text:"FloatingStartButton_text__70x9M"}},38715:function(e){e.exports={image:"Image_image__RAAdZ",fill:"Image_fill__EiIzS",contain:"Image_contain__awbZj",intrinsic:"Image_intrinsic__JRoea"}},39476:function(e){e.exports={container:"FadeIn_container__bjQVL"}},4969:function(e){e.exports={container:"FadeInUp_container___uxva"}},54065:function(e){e.exports={image:"ImageEnter_image__FSEP_"}},86612:function(e){e.exports={headingOuter:"LineByLine_headingOuter__JmusT"}},3568:function(e){e.exports={magnetic:"Magnetic_magnetic__LncOy"}}}]);