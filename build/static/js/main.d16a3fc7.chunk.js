(this["webpackJsonpstrangers-things"]=this["webpackJsonpstrangers-things"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(4),c=n.n(s),a=n(8),o=n(5),i=n(1),u=n(19),p=n.n(u),l=n(10),j=n(2),h=function(e){var t=e.type,n=e.setToken,s=e.setUser,u=Object(i.useState)(""),p=Object(o.a)(u,2),j=p[0],h=p[1],b=Object(i.useState)(""),d=Object(o.a)(b,2),O=d[0],x=d[1],f="login"===t?"Login":"Register",g="login"===t?"Register":"Login",v="login"===t?"register":"login",m=function(){var e=Object(a.a)(c.a.mark((function e(r){var a,o,i,u,p,l,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/".concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:j,password:O}})});case 4:return a=e.sent,e.next=7,a.json();case 7:if(o=e.sent,i=o.data,!(u=null===i||void 0===i?void 0:i.token)){e.next=20;break}return n(u),e.next=14,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me",{method:"GET",headers:{Authorization:"Bearer ".concat(u)}});case 14:return p=e.sent,e.next=17,p.json();case 17:l=e.sent,b=l.data,s(b);case 20:h(""),x(""),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(1),console.error(e.t0);case 28:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:f}),Object(r.jsxs)("form",{onSubmit:m,children:[Object(r.jsx)("input",{type:"text",value:j,onChange:function(e){return h(e.target.value)},placeholder:"username"}),Object(r.jsx)("input",{type:"password",value:O,onChange:function(e){return x(e.target.value)},placeholder:"password"}),Object(r.jsx)("button",{type:"submit",children:f})]}),Object(r.jsx)(l.b,{to:"/".concat(v),children:g})]})},b=n(21),d=function(e){var t=e.token,n=e.posts,s=e.setPosts;if(!t)return Object(r.jsx)(r.Fragment,{});var u=Object(i.useState)(""),p=Object(o.a)(u,2),l=p[0],j=p[1],h=Object(i.useState)(""),d=Object(o.a)(h,2),O=d[0],x=d[1],f=Object(i.useState)(0),g=Object(o.a)(f,2),v=g[0],m=g[1],k=Object(i.useState)(!1),P=Object(o.a)(k,2),y=P[0],T=P[1],C=Object(i.useState)(""),S=Object(o.a)(C,2),w=S[0],E=S[1],B=function(){var e=Object(a.a)(c.a.mark((function e(r){var a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({post:{title:l,description:O,price:v,willDeliver:y,location:w}})});case 4:return a=e.sent,e.next=7,a.json();case 7:o=e.sent,i=o.data,s([i.post].concat(Object(b.a)(n))),j(""),x(""),m(0),T(!1),E(""),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Add New Post"}),Object(r.jsxs)("form",{onSubmit:B,id:"postAddDetails",children:[Object(r.jsx)("input",{type:"text",value:l,onChange:function(e){return j(e.target.value)},placeholder:"Item"}),Object(r.jsx)("input",{type:"text",value:v,onChange:function(e){return m(e.target.value)},placeholder:"Price"}),Object(r.jsx)("input",{type:"text",value:O,onChange:function(e){return x(e.target.value)},placeholder:"Description"}),Object(r.jsx)("input",{type:"text",value:w,onChange:function(e){return E(e.target.value)},placeholder:"Location"}),Object(r.jsx)("button",{type:"submit",children:"Post"})]})]})},O=function(e){var t=e.post,n=e.token,s=e.setPosts;try{var o=function(){var e=Object(a.a)(c.a.mark((function e(){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/".concat(t._id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 2:return e.sent,e.next=5,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 5:return r=e.sent,e.next=8,r.json();case 8:a=e.sent,o=a.data,s(o.posts);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("button",{onClick:o,children:"Delete Post"})}catch(i){console.error(i)}},x=function(e){var t=e.token,n=e.post;if(!t)return Object(r.jsx)(i.Fragment,{});var s=Object(i.useState)(""),u=Object(o.a)(s,2),p=u[0],l=u[1],j=function(){var e=Object(a.a)(c.a.mark((function e(r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/".concat(n._id,"/messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({message:{content:p}})});case 4:e.sent,l(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:j,children:[Object(r.jsx)("input",{type:"text",value:p,onChange:function(e){return l(e.target.value)},placeholder:"Send a Message"}),Object(r.jsx)("button",{children:"Submit"})]})})},f=function(e){var t=e.post,n=e.token,s=e.setPosts,o=function(){var e=Object(a.a)(c.a.mark((function e(){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/".concat(t._id),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:return e.prev=10,e.next=13,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 13:return r=e.sent,e.abrupt("return",r);case 17:e.prev=17,e.t1=e.catch(10),console.error(e.t1);case 20:return e.next=23,postsGet.json();case 23:a=e.sent,o=a.data,s(o.posts);case 26:case"end":return e.stop()}}),e,null,[[0,6],[10,17]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("button",{onClick:o,children:"Edit Post"})},g=function(e){var t=e.posts,n=e.token,s=e.setPosts;return Object(r.jsx)(r.Fragment,{children:t?t.map((function(e,t){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsxs)("h3",{children:[e.title,", ",e.price]}),Object(r.jsx)("div",{children:e.description}),e.location?Object(r.jsx)("div",{children:e.location}):null,e.willDeliver?Object(r.jsx)("div",{children:"Will Deliver"}):null,!0===e.isAuthor?Object(r.jsx)(f,{token:n,post:e,setPosts:s}):null,!0===e.isAuthor?Object(r.jsx)(O,{post:e,token:n,setPosts:s}):Object(r.jsx)(x,{token:n,post:e})]},t)})):null})},v=function(e){var t=e.user,n=e.token,s=e.posts,c=e.setPosts,a=s.filter((function(e){return!!e.isAuthor}));return Object(r.jsxs)("div",{id:"profile",children:[Object(r.jsxs)("div",{id:"profileMessages",children:[Object(r.jsx)("h2",{children:"Your Messages"}),t.messages?t.messages.map((function(e,t){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)("h3",{children:e.post.title}),Object(r.jsx)("h4",{children:e.fromUser.username}),Object(r.jsx)("div",{children:e.content})]},t)})):null]}),Object(r.jsxs)("div",{id:"profilePosts",children:[Object(r.jsx)("h2",{children:"Your Posts"}),a?a.map((function(e,t){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsxs)("h3",{children:[e.title,", ",e.price]}),Object(r.jsx)("div",{children:e.description}),e.location?Object(r.jsx)("div",{children:e.location}):null,e.willDeliver?Object(r.jsx)("div",{children:"Will Deliver"}):null,!0===e.isAuthor?Object(r.jsx)(O,{post:e,token:n,setPosts:c}):null]},t)})):null]})]})},m=(n(36),function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],u=Object(i.useState)({}),p=Object(o.a)(u,2),b=p[0],O=p[1],x=Object(i.useState)([]),f=Object(o.a)(x,2),m=f[0],k=f[1];return Object(i.useEffect)(Object(a.a)(c.a.mark((function e(){var t,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,s=r.data,k(s.posts),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[n]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Stranger's Things"}),b.username&&Object(r.jsxs)("div",{children:["Hello ",b.username,"!"]}),n?Object(r.jsx)("button",{onClick:function(){O({}),s("")},children:"Logout"}):null,Object(r.jsx)(l.b,{to:"/login",children:"Login"}),Object(r.jsx)(l.b,{to:"/posts",children:"Posts"}),Object(r.jsx)(l.b,{to:"/profile",children:"Profile"}),Object(r.jsx)(j.a,{path:"/login",children:Object(r.jsx)(h,{type:"login",setToken:s,setUser:O})}),Object(r.jsx)(j.a,{path:"/register",children:Object(r.jsx)(h,{type:"register",setToken:s,setUser:O})}),Object(r.jsxs)(j.a,{path:"/posts",children:[Object(r.jsx)(d,{token:n,posts:m,setPosts:k}),Object(r.jsx)(g,{token:n,posts:m,setPosts:k})]}),Object(r.jsx)(j.a,{path:"/profile",children:Object(r.jsx)(v,{user:b,token:n,posts:m,setPosts:k})})]})});p.a.render(Object(r.jsx)(l.a,{children:Object(r.jsx)(m,{})}),document.getElementById("app"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d16a3fc7.chunk.js.map