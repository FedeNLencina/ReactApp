(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,c){e.exports={form:"NewMeetupForm_form__1fbK2",control:"NewMeetupForm_control__2v3vI",actions:"NewMeetupForm_actions__9fGbH"}},function(e,t,c){e.exports={item:"MeetupItem_item__32mqm",image:"MeetupItem_image__BBoy5",content:"MeetupItem_content__27p-S",actions:"MeetupItem_actions__1P_Fb"}},,function(e,t,c){e.exports={header:"MainNavigation_header__5TGxu",logo:"MainNavigation_logo__YYUK1",active:"MainNavigation_active__1OFzn",badge:"MainNavigation_badge__2LUFx"}},,,function(e,t,c){e.exports={card:"Card_card__1Ba56"}},function(e,t,c){e.exports={list:"MeetupList_list__3gO1o"}},function(e,t,c){e.exports={main:"Layout_main__3_nLZ"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(11),r=c.n(n),s=c(5),a=(c(20),c(2)),o=c(15),j=c(4),d=c(12),l=c.n(d),u=c(0);var b=function(e){return Object(u.jsx)("div",{className:l.a.card,children:e.children})},O=c(7),h=c.n(O),m=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function x(e){var t=Object(i.useState)([]),c=Object(j.a)(t,2),n=c[0],r=c[1],s={favorites:n,totalFavorites:n.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return n.some((function(t){return t.id===e}))}};return Object(u.jsx)(m.Provider,{value:s,children:e.children})}var v=m;var p=function(e){var t=Object(i.useContext)(v),c=t.itemIsFavorite(e.id);return Object(u.jsx)("li",{className:h.a.item,children:Object(u.jsxs)(b,{children:[Object(u.jsx)("div",{className:h.a.image,children:Object(u.jsx)("img",{src:e.image,alt:e.title})}),Object(u.jsxs)("div",{className:h.a.content,children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("address",{children:e.address}),Object(u.jsx)("p",{children:e.description})]}),Object(u.jsx)("div",{className:h.a.actions,children:Object(u.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,description:e.description,image:e.image,address:e.address})},children:c?"Remove from Favorites":"To Favorites"})})]})})},f=c(13),_=c.n(f);var g=function(e){return Object(u.jsx)("ul",{className:_.a.list,children:e.meetups.map((function(e){return Object(u.jsx)(p,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var F=function(){var e=Object(i.useState)(!0),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),s=Object(j.a)(r,2),a=s[0],d=s[1];return Object(i.useEffect)((function(){n(!0),fetch("https://reactapp-68feb-default-rtdb.firebaseio.com/meetup.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(o.a)({id:c},e[c]);t.push(i)}n(!1),d(t)}))}),[]),c?Object(u.jsx)("section",{children:Object(u.jsx)("p",{children:"Loading..."})}):Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"All Meetups Page"}),Object(u.jsx)(g,{meetups:a})]})},N=c(6),M=c.n(N);var y=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)();return Object(u.jsx)(b,{children:Object(u.jsxs)("form",{className:M.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:n.current.value,description:r.current.value};e.onAddMeetup(s)},children:[Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(u.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(u.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"address",children:"Address"}),Object(u.jsx)("input",{type:"text",required:!0,id:"address",ref:n})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(u.jsx)("div",{className:M.a.actions,children:Object(u.jsx)("button",{children:"Add Meetup"})})]})})};var w=function(){var e=Object(a.f)();return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"Add new Meetup"}),Object(u.jsx)(y,{onAddMeetup:function(t){fetch("https://reactapp-68feb-default-rtdb.firebaseio.com/meetup.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e("/")}))}})]})};var I=function(){var e,t=Object(i.useContext)(v);return e=0===t.totalFavorites?Object(u.jsx)("p",{children:"You got no favorites yet. Start adding some?"}):Object(u.jsx)(g,{meetups:t.favorites}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"Favorite Page"}),e]})},A=c(9),S=c.n(A);var C=function(){var e=Object(i.useContext)(v);return Object(u.jsxs)("header",{className:S.a.header,children:[Object(u.jsx)("div",{className:S.a.logo,children:"React Meetups"}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:" All Meetups "})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/new-meetup",children:" Add New Meetup "})}),Object(u.jsx)("li",{children:Object(u.jsxs)(s.b,{to:"/favorites",children:["My Favorites",Object(u.jsx)("span",{className:S.a.badge,children:e.totalFavorites})]})})]})})]})},R=c(14),q=c.n(R);var L=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(C,{}),Object(u.jsx)("main",{className:q.a.main,children:e.children})]})};var P=function(){return Object(u.jsx)(L,{children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/",element:Object(u.jsx)(F,{})}),Object(u.jsx)(a.a,{path:"/new-meetup",element:Object(u.jsx)(w,{})}),Object(u.jsx)(a.a,{path:"/favorites",element:Object(u.jsx)(I,{})})]})})};r.a.render(Object(u.jsx)(x,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(P,{})})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.409f1fe9.chunk.js.map