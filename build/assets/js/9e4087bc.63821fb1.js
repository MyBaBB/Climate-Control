"use strict";(self.webpackChunkdocusaurus_cth_wg=self.webpackChunkdocusaurus_cth_wg||[]).push([[3608],{63169:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});r(67294);var t=r(33692),a=r(95999),i=r(1944),c=r(18517),n=r(92503),l=r(85893);function h(e){let{year:s,posts:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{as:"h3",id:s,children:s}),(0,l.jsx)("ul",{children:r.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(t.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:s}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},s)))})})})}function o(e){let{archive:s}=e;const r=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const s=e.reduce(((e,s)=>{const r=s.metadata.date.split("-")[0],t=e.get(r)??[];return e.set(r,[s,...t])}),new Map);return Array.from(s,(e=>{let[s,r]=e;return{year:s,posts:r}}))}(s.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:r,description:t}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.Z,{as:"h1",className:"hero__title",children:r}),(0,l.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);