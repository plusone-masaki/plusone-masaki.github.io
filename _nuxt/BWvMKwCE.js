import{_ as y}from"./ChgiInBn.js";import{d as k,u as v,a as w,h as m,r as B,w as C,b as A,c as p,e as t,F as j,i as N,f as a,g as o,_ as S,j as $,o as _,k as D,l as F,m as G,n as L}from"./Dd5uBOWD.js";import"./CpC9Gx-i.js";const O={class:"page home"},V={class:"content mb-8"},E={class:"mb-10"},H={class:"content__cards mb-10"},M={class:"content__footer"},P={class:"mb-6"},R={class:"content__footer"},I=k({__name:"index",async setup(T){let n,i;const s=v(),{$postApi:d}=w(),u=m("posts",()=>[]);m("categories",()=>[]);const l=B([]),f=([n,i]=C(()=>d.get({filters:"type[contains]product"})),n=await n,i(),n);return l.value=f.contents,A({title:s.title,meta:[{name:"og:title",content:s.title},{name:"og:description",content:s.title},{name:"og:url",content:"/"},{name:"og:image",content:`https://res.cloudinary.com/plus-one-tech/image/upload/l_text:Sawarabi%20Gothic_36_bold:${s.title},co_rgb:568,y_-24,w_512,c_fit/v1588954091/plusone_tech_ogp.png`},{name:"og:type",content:"website"}]}),(U,c)=>{const g=y,r=G,h=L,b=S,x=$;return _(),p("main",O,[t("div",V,[t("section",E,[c[0]||(c[0]=t("h2",{class:"content__title mb-6"},"PRODUCTS",-1)),t("div",H,[(_(!0),p(j,null,N(a(l),e=>(_(),D(g,{key:e.title,title:e.title,description:e.content,eyecatch:e.eyecatch,href:e.url,omission:""},null,8,["title","description","eyecatch","href"]))),128))]),t("div",M,[o(r,{href:"/products",text:"もっと見る"})])]),t("section",null,[c[1]||(c[1]=t("h2",{class:"content__title mb-6"},"BLOG",-1)),t("div",P,[o(h),o(b,{items:a(u)},null,8,["items"])]),t("div",R,[o(r,{href:"/posts",text:"もっと見る"})])])]),o(x,{class:"pb-6",name:"Masaki",icon:"/masaki_default.png",job:"Webエンジニア",age:a(F)().diff("1987-08-07","years")},null,8,["age"])])}}});export{I as default};