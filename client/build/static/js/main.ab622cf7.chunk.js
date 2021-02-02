(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n(23),a=n.n(s),r=n(16),l=n(5),o=(n(30),n(9)),j=n(10),b=(n(36),["btn--primary","btn--outline"]),m=["btn--medium","btn--large"],d=function(e){var t=e.children,n=e.type,i=e.onClick,s=e.buttonStyle,a=e.buttonSize,r=b.includes(s)?s:b[0],o=m.includes(s)?a:m[0];return Object(c.jsx)(l.b,{to:"sign-up",className:"btn-mobile",children:Object(c.jsx)("button",{className:"btn ".concat(r," ").concat(o),onClick:i,type:n,children:t})})};var u=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(!0),b=Object(r.a)(a,2),m=b[0],u=b[1],h=Object(i.useState)(!1),x=Object(r.a)(h,2),O=x[0],g=x[1],p=function(){return s(!1)},v=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(i.useEffect)((function(){v()}),[]),window.addEventListener("resize",v),window.addEventListener("scroll",(function(){window.scrollY>=80?g(!0):g(!1)})),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:O?"navbar active":"navbar",children:Object(c.jsxs)("div",{className:"navbar-container",children:[Object(c.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:p,children:["Not A Weather App",Object(c.jsx)("img",{src:"/images/placeholder-image.png",alt:"logo",className:"navbar-img"})]}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:Object(c.jsx)(o.a,{icon:n?j.d:j.a,size:"2x",className:"fa-times"})}),Object(c.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/",className:"nav-links",onClick:p,children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/about-us",className:"nav-links",onClick:p,children:"About Us"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/profile",className:"nav-links",onClick:p,children:"Profile"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.b,{to:"/register",className:"nav-links-mobile",onClick:p,children:"Sign Up"})})]}),m&&Object(c.jsx)(d,{buttonStyle:"btn--outline",children:"register"})]})})})},h=n(3);n(12);var x=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:"cards__item",children:Object(c.jsxs)(l.b,{className:"cards__item__link",to:"/",children:[Object(c.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{src:e.src,alt:e.alt,className:"cards__item__img"})}),Object(c.jsx)("div",{className:"cards__item__info",children:Object(c.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},O=(n(41),[{id:1,name:"Cole Atkinson",resume:"../../resumes/Cole_Atkinson.pdf",linkedin:"https://www.linkedin.com/in/cole-atkinson-845552200/",github:"https://github.com/colioportfolio",image:"ColeAtkinson.png"},{id:2,name:"Chase Bosman",resume:"../../resumes/Chase_Bosman",linkedin:"https://www.linkedin.com/in/chase-bosman/",github:"https://github.com/ChaseBosman",image:"ChaseBosman.jpg"},{id:3,name:"Dominic Ginter",resume:"../../resumes/Dominic_Ginter.pdf",linkedin:"https://www.linkedin.com/in/dominic-ginter-aa0167192/",github:"https://github.com/DominicG99",image:"DominicGinter.jpg"},{id:4,name:"James Young",resume:"../../resumes/James_Young.pdf",linkedin:"htpps://www.linkedin.com/in/jamesn-young",github:"https://github.com/",image:"JamesYoung.png"}]),g=n(21);var p=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l.b,{to:e.resumeLink,children:Object(c.jsx)(o.a,{icon:j.b,size:"2x",style:{color:"black"}})}),Object(c.jsx)(l.b,{to:e.githubLink,children:Object(c.jsx)(o.a,{icon:g.a,size:"2x",style:{color:"black"}})}),Object(c.jsx)(l.b,{to:e.linkedInLink,children:Object(c.jsx)(o.a,{icon:g.b,size:"2x",style:{color:"black"}})})]})};function v(e){return Object(c.jsx)(x,{src:"../images/".concat(e.image),text:Object(c.jsx)(p,{githubLink:e.github,linkedInLink:e.linkedin}),label:e.name,alt:e.name},e.id)}var N=function(){return Object(c.jsxs)("div",{className:"cards",children:[Object(c.jsx)("h1",{children:"Meet the team and instructors"}),Object(c.jsx)("div",{className:"cards__container",children:Object(c.jsx)("div",{className:"cards__wrapper",children:Object(c.jsx)("ul",{className:"cards__items",children:O.map(v)})})})]})};n(42);var k=function(){return Object(c.jsxs)("div",{className:"hero-container",children:[Object(c.jsx)("video",{src:"/videos/Video1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(c.jsx)("h1",{children:"START YOUR ADVENTURE NOW"}),Object(c.jsx)("p",{children:"No time to waste."}),Object(c.jsxs)("div",{className:"hero-btns",children:[Object(c.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(c.jsxs)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["SIGN IN ",Object(c.jsx)(o.a,{icon:j.c,size:"1x"})]})]})]})};var f=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{}),Object(c.jsx)(N,{})]})};function _(){return Object(c.jsx)(N,{})}function w(){return Object(c.jsx)("h1",{children:"SIGN UP"})}n(43);var y=function(){var e=(new Date).getFullYear();return Object(c.jsx)("footer",{id:"footer",children:Object(c.jsxs)("p",{children:["Not A Weather App \u24d2 ",e]})})};var C=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.b,{exact:!0,path:"/",component:f}),Object(c.jsx)(h.b,{exact:!0,path:"/about-us",component:_}),Object(c.jsx)(h.b,{exact:!0,path:"/sign-up",component:w}),Object(c.jsx)(h.a,{to:"404"})]}),Object(c.jsx)(y,{})]})})};a.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ab622cf7.chunk.js.map