(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){e.exports=a(371)},188:function(e,t,a){},189:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(188),a(189),a(378)),s=(a(92),a(382)),u=a(167),i=a(89),m=a(126),E=a(372),d=a(12),p=a(380),g=o.a.Header,f=o.a.Sider,h=m.a.SubMenu,b=function(){console.log("object")},y=function(){return r.a.createElement(g,{style:{background:"#fff",padding:0}},r.a.createElement(m.a,{key:"user",mode:"horizontal",onClick:b,style:{float:"right"}},r.a.createElement(h,{title:r.a.createElement(n.Fragment,null,r.a.createElement("span",{style:{color:"#999",marginRight:4}},r.a.createElement("span",null,"Hi,")),r.a.createElement("span",null,"muang"),r.a.createElement(E.a,{style:{marginLeft:8},src:"https://randomuser.me/api/portraits/women/68.jpg"}))},r.a.createElement(m.a.Item,{key:"SignOut"},r.a.createElement("span",null,"Sign out")))))},k=function(){return r.a.createElement(f,{trigger:null,collapsible:!0,collapsed:!1},r.a.createElement("div",{className:"logo"}),r.a.createElement(m.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(m.a.Item,{key:"1"},r.a.createElement(p.a,{exact:!0,to:"/users"},r.a.createElement(d.a,{type:"user"}),r.a.createElement("span",null,"User "))),r.a.createElement(m.a.Item,{key:"2"},r.a.createElement(p.a,{exact:!0,to:"/about"},r.a.createElement(d.a,{type:"video-camera"}),r.a.createElement("span",null,"about"))),r.a.createElement(m.a.Item,{key:"3"},r.a.createElement(p.a,{exact:!0,to:"/posts"},r.a.createElement(d.a,{type:"upload"}),r.a.createElement("span",null,"posts")))))},v=o.a.Content,N=function(e){return r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(o.a,null,r.a.createElement(y,null),r.a.createElement(v,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},e.children)))},C=a(383),w=a(373),O=a(374),I=a(60),j={isFetching:!1,cat:{},count:0},S=function(e,t){var a=t.type,n=t.payload;switch(a){case"FETCH_CAT_PENDING":return Object(I.a)({},e,{isFetching:!0});case"FETCH_CAT_SUCCESS":return Object(I.a)({},e,{isFetching:!1,cat:n});case"COUNTER_CLICK":return Object(I.a)({},e,{isFetching:!1,count:n});default:return e}},T=a(59),x=function(){return{type:"INCREMENT",score:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},L=function(){return{type:"DECREMENT",score:arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1}},A=Object(T.b)(function(e){return{message:"This is message from mapStateToProps",counter:e.counters||0}})(function(e){var t=e.message,a=e.counter,n=e.dispatch;return r.a.createElement("div",{className:"container"},t,r.a.createElement("div",{className:"columns column is-12"},r.a.createElement("h1",null,"Counter : ",a)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return n(x(1))},className:"button is-primary"},"+1"),r.a.createElement("button",{onClick:function(){return n(x(2))},className:"button is-link"},"+2"),r.a.createElement("button",{onClick:function(){return n(x(3))},className:"button is-info"},"+3")),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return n(L(1))},className:"button is-primary"},"-1"),r.a.createElement("button",{onClick:function(){return n(L(2))},className:"button is-link"},"-2"),r.a.createElement("button",{onClick:function(){return n(L(3))},className:"button is-info"},"-3")))}),P=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("span",null,e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return r.a.createElement("span",null,e.map(function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),r.a.createElement(C.a,{color:t,key:e},e.toUpperCase())}))}},{title:"Action",key:"action",render:function(e,t){return r.a.createElement("span",null,r.a.createElement("span",null,"Invite ",t.name),r.a.createElement(w.a,{type:"vertical"}),r.a.createElement("span",null,"Delete"))}}],F=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],R=function(){var e=Object(n.useReducer)(S,j),t=Object(i.a)(e,2),a=t[0],l=(a.isFetching,a.count);t[1];return r.a.createElement(N,null,r.a.createElement(A,{message:"Home"}),l,r.a.createElement(O.a,{dataSource:F,columns:P}))},H=a(85),U=a(376),B=a(375),G=a(377),J=a(41),M=a(381),_=o.a.Content,D=Object(T.b)(function(e){return{message:"This is message from mapStateToProps",isLogin:e.authentication||"false",counter:e.counters||0}})(function(e){e.history;var t=e.isLogin,a=(e.counter,e.dispatch),l=function(e){console.log("user",u),a(function(e){return{type:"LOGIN",user:e}}(u))},c=Object(n.useState)({name:"",password:""}),s=Object(i.a)(c,2),u=s[0],m=s[1],E=function(e){m(Object(I.a)({},u,Object(H.a)({},e.target.name,e.target.value)))};return r.a.createElement(o.a,{style:{height:"100vh",padding:"25vh 0"}},r.a.createElement(_,null,"  ",t,r.a.createElement("center",null,r.a.createElement(U.a,{style:{width:450},title:"BandSquare Admin"},r.a.createElement("form",{className:"login-form",onSubmit:l},r.a.createElement(B.a.Item,null,r.a.createElement(G.a,{prefix:r.a.createElement(d.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",value:u.name,onChange:E,name:"name"})),r.a.createElement(B.a.Item,null,r.a.createElement(G.a,{prefix:r.a.createElement(d.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",name:"password",onChange:E})),r.a.createElement(B.a.Item,null,r.a.createElement(J.a,{type:"primary",className:"login-form-button",onClick:l},"Log in")))))))}),K=Object(M.a)(D),W=function(){return r.a.createElement("h1",null,"About")},q=function(){return r.a.createElement("h1",null,"Post")},z=function(){return r.a.createElement("h1",null,"Project")},Y=function(){return r.a.createElement("h1",null,"404")},$=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:K}),r.a.createElement(u.a,{path:"/about",component:W}),r.a.createElement(u.a,{path:"/posts",component:q}),r.a.createElement(u.a,{path:"/projects",component:z}),r.a.createElement(u.a,{path:"/users",component:R}),r.a.createElement(u.a,{component:Y}))},Q=function(){return r.a.createElement(o.a,null,r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(58),X=a(180),Z=a.n(X),ee=Object(V.b)({counters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.score;case"DECREMENT":return e-t.score;default:return e}},authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"false",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return console.log("user from action ",t.user),Z.a.get("https://nameless-river-79098.herokuapp.com/books",{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){console.log(e.data)}),"true";case"LOGOUT":return"false";default:return e}}}),te=a(379),ae=Object(V.c)(ee),ne=function(){return r.a.createElement(T.a,{store:ae},r.a.createElement(Q,null))};c.a.render(r.a.createElement(function(){return r.a.createElement(te.a,null,r.a.createElement(ne,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[183,1,2]]]);
//# sourceMappingURL=main.666e913c.chunk.js.map