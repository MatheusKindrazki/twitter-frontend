(this["webpackJsonptwitter-frontend"]=this["webpackJsonptwitter-frontend"]||[]).push([[0],{118:function(n,e){},121:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(52),i=t.n(o),c=t(122),l=t(63);function s(n){var e=n.component,t=n.isLogged,a=Object(l.a)(n,["component","isLogged"]),o=localStorage.getItem("@Tweet:name");return!o&&t?r.a.createElement(c.a,{to:"/"}):o&&!t?r.a.createElement(c.a,{to:"/timeLine"}):r.a.createElement(c.b,Object.assign({},a,{render:function(n){return r.a.createElement(e,n)}}))}var u=t(7),p=t(11),d=t(5),m=t(6);function f(){var n=Object(d.a)(["\n  background: #1da1f2;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  div {\n    width: 100%;\n    max-width: 300px;\n    height: 320px;\n    background: white;\n    border-radius: 4px;\n\n    box-shadow: 0px 16px 12px 0px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    padding: 40px;\n\n    img {\n      max-width: 80px;\n      margin-bottom: 30px;\n    }\n\n    form {\n      width: 100%;\n      margin-top: 30px;\n      display: flex;\n      flex-direction: column;\n\n      input {\n        display: block;\n        outline: none;\n\n        border: 1px solid rgba(0, 0, 0, 0.1);\n        border-radius: 2px;\n        padding: 15px;\n        font-family: Arial, Helvetica, sans-serif;\n        font-size: 12px;\n\n        color: #333;\n\n        &:placeholder-shown,\n        &::placeholder,\n        &::-moz-placeholder {\n          color: #333;\n        }\n      }\n\n      p {\n        color: red;\n        font-size: 12px;\n        font-weight: bold;\n        font-family: Arial, Helvetica, sans-serif;\n      }\n\n      button {\n        cursor: pointer;\n        margin-top: 20px;\n        background: #1da1f2;\n        height: 45px;\n        border: none;\n        outline: none;\n        box-shadow: none;\n\n        border-radius: 2px;\n\n        font-size: 14px;\n        font-weight: bold;\n        font-family: Arial, Helvetica, sans-serif;\n\n        color: white;\n      }\n    }\n  }\n"]);return f=function(){return n},n}var g=m.b.div(f()),b=t(4),x=Object(b.a)(),h=function(n){return document.title="".concat(n," | Twitter")};function w(){h("Login");var n=Object(a.useState)(null),e=Object(u.a)(n,2),t=e[0],o=e[1];return r.a.createElement(g,null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png",alt:"Twitter"}),r.a.createElement(p.a,{onSubmit:function(n){var e=n.name;if(!e)return o("O Nome de usu\xe1rio \xe9 obrigat\xf3rio!"),!1;localStorage.setItem("@Tweet:name",e),x.push("/tweets")}},r.a.createElement(p.b,{name:"name",placeholder:"Nome de usu\xe1rio",type:"text"}),t&&r.a.createElement("p",null,t),r.a.createElement("button",{type:"submit"},"Entrar"))))}var v=t(8),k=t.n(v),y=t(57),E=t.n(y).a.create({baseURL:"http://mk-twitter-backend.herokuapp.com"}),j=t(58),O=t.n(j),S=t(59),T=t.n(S);function z(){var n=Object(d.a)(['\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  outline: none;\n  background: transparent;\n  position: relative;\n  display: block;\n  margin-left: 25px;\n\n  font-size: 13px;\n  font-weight: normal;\n  color: #333;\n\n  &:before {\n    content: "";\n    position: absolute;\n    right: 20px;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    width: 25px;\n    height: 20px;\n    background: url(',");\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n"]);return z=function(){return n},n}function L(){var n=Object(d.a)(["\n  margin-top: 10px;\n  padding: 20px;\n  color: #3e3e3e;\n\n  + li {\n    border-top: 1px solid #eee;\n  }\n  strong {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    color: #4a4a4a;\n    font-weight: bold;\n\n    display: flex;\n    align-items: center;\n\n    img {\n      margin: 0 !important;\n      padding: 0;\n      padding-right: 10px;\n      border-radius: 2px;\n    }\n  }\n\n  p {\n    font-family: Arial, Helvetica, sans-serif;\n    border-radius: 20px;\n    color: #333;\n    padding: 15px;\n    font-size: 14px;\n  }\n"]);return L=function(){return n},n}var I=m.b.li(L()),A=m.b.button(z(),(function(n){return n.liked?T.a:O.a}));function H(n){var e=n.tweet,t=Object(a.useState)(!1),o=Object(u.a)(t,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){return function(){var n=localStorage.getItem("@Tweet:likes");if(!n)return localStorage.setItem("@Tweet:likes","[]"),c(!1);if(!(n=JSON.parse(n)).length)return c(!1);var t=n.find((function(n){return n._id===e._id}));return c(!!t)}()}),[]),r.a.createElement(I,null,r.a.createElement("strong",null,r.a.createElement("img",{src:"https://api.adorable.io/avatars/50/".concat(e.author.split(" ")[0]),alt:e.author}),e.author),r.a.createElement("p",null,e.content),r.a.createElement(A,{type:"button",liked:i,onClick:function(){var n;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=2;break}return t.abrupt("return");case 2:return(n=JSON.parse(localStorage.getItem("@Tweet:likes"))).push(e),localStorage.setItem("@Tweet:likes",JSON.stringify(n)),c(!0),t.next=8,k.a.awrap(E.post("likes/".concat(e._id)));case 8:case"end":return t.stop()}}))}},e.likes))}function J(){var n=Object(d.a)(["\n  width: 100%;\n  min-height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background: rgb(236, 241, 248, 0.3);\n\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n\n    padding-top: 100px;\n    img {\n      max-width: 30px;\n      margin-bottom: 30px;\n    }\n\n    form {\n      position: relative;\n      display: flex;\n      width: 100%;\n      max-width: 600px;\n      padding: 15px;\n      background: rgba(0, 0, 0, 0.02);\n      border-radius: 5px;\n\n      textarea {\n        padding: 15px;\n        width: 100%;\n        height: 50px;\n        resize: none;\n\n        border: 5px solid rgb(236, 241, 248);\n        outline: none;\n        box-shadow: none;\n        border-radius: 5px;\n\n        font-size: 14px;\n        font-family: Arial, Helvetica, sans-serif;\n        color: #333;\n        &:placeholder-shown,\n        &::placeholder,\n        &::-moz-placeholder {\n          color: #333;\n        }\n      }\n    }\n\n    ul {\n      position: relative;\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      max-width: 600px;\n\n      list-style: none;\n      max-height: 66vh;\n      overflow-y: auto;\n\n      &::-webkit-scrollbar-track {\n        background-color: transparent;\n      }\n      &::-webkit-scrollbar {\n        width: 3px;\n        height: 10px;\n        background-color: transparent;\n      }\n      &::-webkit-scrollbar-thumb {\n        background-color: transparent;\n      }\n    }\n  }\n"]);return J=function(){return n},n}var N=m.b.div(J()),_=t(60),C=t.n(_)()("http://mk-twitter-backend.herokuapp.com");setTimeout((function(){console.log("usu\xe1rio conectado",C.id)}),500);var q=C;function B(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(""),c=Object(u.a)(i,2),l=c[0],s=c[1],d=Object(a.useState)(localStorage.getItem("@Tweet:name")),m=Object(u.a)(d,1)[0];function f(){var n;return k.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.awrap(E.get("tweets"));case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}))}return h("TimeLine de ".concat(m.split(" ")[0])),Object(a.useEffect)((function(){q.on("Tweet",f),q.on("Like",f),f()}),[]),r.a.createElement(N,null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png",alt:"Twitter"}),r.a.createElement(p.a,{onKeyDown:function(n){return k.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(13===n.keyCode){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.a.awrap(E.post("tweets",{author:m,content:l}));case 5:s("");case 6:case"end":return e.stop()}}))}},r.a.createElement(p.c,{value:l,name:"tweet",maxLength:"255",placeholder:"O que est\xe1 acontecendo?",onChange:function(n){return s(n.target.value)}})),r.a.createElement("ul",null,!!t&&t.map((function(n){return r.a.createElement(H,{tweet:n,key:n._id})})))))}function D(){return r.a.createElement(c.d,null,r.a.createElement(s,{path:"/",exact:!0,component:w}),r.a.createElement(s,{path:"/timeLine",component:B,isLogged:!0}),r.a.createElement(c.a,{from:"*",to:"/"}))}function K(){var n=Object(d.a)(["\n  html,body { \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    -webkit-font-smoothing: antialiased;\n  }\n\n  #root {\n    min-height: 100vh;\n  }\n\n"]);return K=function(){return n},n}var R=Object(m.a)(K());i.a.render(r.a.createElement((function(){return r.a.createElement(c.c,{history:x},r.a.createElement(D,null),r.a.createElement(R,null))}),null),document.getElementById("root"))},58:function(n,e,t){n.exports=t.p+"static/media/like.f471bb19.svg"},59:function(n,e,t){n.exports=t.p+"static/media/liked.b268a305.svg"},64:function(n,e,t){n.exports=t(121)}},[[64,1,2]]]);
//# sourceMappingURL=main.41b11713.chunk.js.map