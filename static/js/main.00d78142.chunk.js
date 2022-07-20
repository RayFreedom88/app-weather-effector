(this["webpackJsonpapp-weather-effector"]=this["webpackJsonpapp-weather-effector"]||[]).push([[0],{45:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,s,d,p,b,l,x,u,f,j,h,g,m,O,w,v=t(1),y=t(31),k=t(22),S=t(48),z=t(27),I=t(32),M=t(4),P={id:42,weather:[{description:"\u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e"}],main:{temp:"",temp_min:"",temp_max:""},name:"\u041e\u0448\u0438\u0431\u043a\u0430 429"},_=Object(M.g)("https://api.openweathermap.org/data/2.5/"),J=Object(M.g)({}),N=Object(M.d)(function(){var n=Object(I.a)(Object(z.a)().mark((function n(e){var t;return Object(z.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:"POST"});case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),R=Object(M.a)({effect:N,source:_,mapParams:function(n,e){return"".concat(e,"weather?q=").concat(n,"&lang=ru&APPID=").concat("d7bf260fb0f276e0731eb04e214d5cda")}}),D=Object(M.g)([]),A=Object(M.e)("\u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u043e\u0432"),C=Object(M.e)("\u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u0430 \u0438\u0437 $cities"),E=(Object(M.e)("\u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u043e\u0432"),Object(M.g)(!1)),T=function(){var n=localStorage.getItem("cities");return n?JSON.parse(n):[]},F=function(n){var e=T();return!(!e||e.indexOf(n)>-1)&&(e.push(n),localStorage.setItem("cities",JSON.stringify(e)),!0)},H=function(){localStorage.setItem("cities",JSON.stringify([]))},L=t(5),W=t(6),q=t(47),B=Object(W.b)(q.a.article)(i||(i=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 149px;\n  background-color: #393e50;\n  border-radius: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);\n"]))),K=W.b.div(r||(r=Object(L.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px;\n  border-radius: 20px;\n"]))),Y=W.b.div(a||(a=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),$=W.b.div(c||(c=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: ",";\n  text-align: left;\n  gap: 5px;\n"])),(function(n){return n.justify||"stretch"})),G=W.b.span(o||(o=Object(L.a)(["\n  font-size: ",";\n"])),(function(n){return n.fontSize})),Q=W.b.img(s||(s=Object(L.a)(["\n  height: 54px;\n"]))),U=W.b.span(d||(d=Object(L.a)(["\n  z-index: 1;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 16px;\n  cursor: pointer;\n\n  &:focus,\n  &:hover {\n    color: #ff6053;\n  }\n"]))),V=t(2),X=function(n){var e,t=n.city,i=(n.time,n.temperature),r=n.conditions,a=n.img,c=n.tempMax,o=n.tempMin,s=n.onDelete,d=function(n){return Math.round(n-273)},p=Object(v.useRef)(),b=function(){console.log("Click delete ",p.current.innerHTML),s(p.current.innerHTML)},l={initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:-300,opacity:0}};return"\u041e\u0448\u0438\u0431\u043a\u0430 429"===t?Object(V.jsx)(B,{variants:l,initial:"initial",animate:"animate",exit:"exit",children:Object(V.jsxs)(K,{children:[Object(V.jsx)(Y,{children:Object(V.jsxs)($,{children:[Object(V.jsx)(G,{fontSize:"40px",ref:p,children:t}),Object(V.jsx)("p",{children:"API-\u043a\u043b\u044e\u0447 OpenWeatherMap \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d!"})]})}),Object(V.jsx)(Y,{children:Object(V.jsx)(U,{onClick:b,children:"x"})})]})}):Object(V.jsx)(B,{variants:l,initial:"initial",animate:"animate",exit:"exit",children:Object(V.jsxs)(K,{children:[Object(V.jsxs)(Y,{children:[Object(V.jsx)($,{children:Object(V.jsx)(G,{fontSize:"18px",ref:p,children:t})}),Object(V.jsxs)(G,{fontSize:"48px",children:[d(i),"\xb0"]})]}),Object(V.jsxs)(Y,{children:[Object(V.jsxs)($,{justify:"flex-end",children:[Object(V.jsx)(G,{fontSize:"14px",children:r}),Object(V.jsxs)(G,{fontSize:"14px",children:["\u041c\u0430\u043a\u0441.: ",d(c),"\xb0, \u043c\u0438\u043d.: ",d(o),"\xb0"]})]}),Object(V.jsx)(Q,{src:(e=a,"https://openweathermap.org/img/wn/".concat(e,"@2x.png")),alt:r}),Object(V.jsx)(U,{onClick:b,children:"x"})]})]})})},Z=t(8),nn=t.p+"static/media/preloader.1e6f5a70.gif",en=W.b.img(p||(p=Object(L.a)(["\n  width: 24px;\n  height: 24px;\n"]))),tn=function(){return Object(V.jsx)(en,{src:nn,alt:"\u0438\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})},rn=W.b.form(b||(b=Object(L.a)(["\n  display: flex;\n  width: 100%;\n  margin: 20px auto;\n  margin-bottom: 10px;\n  padding: 0 10px;\n"]))),an=W.b.div(l||(l=Object(L.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 24px 1fr 24px;\n  gap: 8px;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 8px 12px;\n  border: 1px solid transparent;\n  border-radius: 16px;\n  background-color: #ffffff;\n  // transition: .2s linear;\n\n  &:focus-within button {\n    background-color: #050510;\n  }\n"]))),cn=W.b.button(x||(x=Object(L.a)(["\n  width: 24px;\n  height: 24px;\n  mask-position: center;\n  mask-repeat: no-repeat;\n  background-color: #c3c3c6;\n\n  -webkit-mask-image: url(https://raw.githubusercontent.com/RayFreedom88/app-weather-effector/d80271d74bd59767471570aded1393e05688f413/src/images/search.svg);\n  mask-image: url(https://raw.githubusercontent.com/RayFreedom88/app-weather-effector/d80271d74bd59767471570aded1393e05688f413/src/images/search.svg);\n  -webkit-mask-size: 20px;\n  -webkit-mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n  cursor: pointer;\n  transition: .2s linear;\n"]))),on=W.b.input(u||(u=Object(L.a)(['\n  width: 100%;\n  height: 20px;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-family: "Raleway", sans-serif;\n']))),sn=function(){var n=Object(v.useState)(""),e=Object(Z.a)(n,2),t=e[0],i=e[1],r=Object(k.a)(E);return Object(V.jsx)(rn,{onSubmit:function(n){n.preventDefault(),console.log("add ",t),R(t),i("")},children:Object(V.jsxs)(an,{children:[Object(V.jsx)(cn,{className:"search__btn","aria-label":"\u041f\u043e\u0438\u0441\u043a",title:"\u041f\u043e\u0438\u0441\u043a"}),Object(V.jsx)(on,{type:"text",name:"city",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0433\u043e\u0440\u043e\u0434\u0430\u043c...",value:t,onChange:function(n){i(n.target.value)}}),r&&Object(V.jsx)(tn,{})]})})},dn=W.b.section(f||(f=Object(L.a)(["\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);\n  border-radius: 20px;\n  position: fixed;\n  top: calc(50% - 675px / 2);\n  left: calc(50% - 320px / 2);\n  height: 675px;\n  width: 320px;\n  background-color: #393e5b;\n  overflow: hidden;\n  color: #ffffff;\n"]))),pn=W.b.div(j||(j=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2) inset;\n  padding: 15px;\n"]))),bn=W.b.div(h||(h=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  background: inherit;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),ln=W.b.h2(g||(g=Object(L.a)(["\n  margin: 0 10px;\n  margin-top: 20px;\n  text-align: left;\n"]))),xn=W.b.div(m||(m=Object(L.a)(["\n  width: 100%;\n  height: 493px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-right: 5px;\n  padding-left: 10px;\n"]))),un=Object(W.b)(q.a.div)(O||(O=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 270px;\n  height: 100%;\n  background: inherit;\n"]))),fn=function(){var n=Object(k.a)(D),e=Object(k.a)(J).code;return Object(v.useEffect)((function(){localStorage.cities||R("\u043c\u043e\u0441\u043a\u0432\u0430"),A(T())}),[n]),Object(v.useEffect)((function(){if(!e){var n=setInterval((function(){console.log("update");var n=[];T().map((function(e){return n.push(e.name)})),H(),n.map((function(n){return R(n)}))}),6e4);return function(){return clearInterval(n)}}}),[e]),Object(V.jsx)(dn,{children:Object(V.jsx)(pn,{children:Object(V.jsxs)(bn,{children:[Object(V.jsx)(ln,{children:"\u041f\u043e\u0433\u043e\u0434\u0430"}),Object(V.jsx)(sn,{}),Object(V.jsx)(xn,{children:Object(V.jsx)(un,{children:Object(V.jsx)(S.a,{children:n.length>0?n.map((function(n){return Object(V.jsx)(X,{city:n.name,temperature:n.main.temp,conditions:n.weather[0].description,img:n.weather[0].icon,tempMax:n.main.temp_max,tempMin:n.main.temp_min,onDelete:C},n.id)})):Object(V.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"})})})})]})})})},jn=t(10);J.on(N.doneData,(function(n,e){var t=T();return 0===t.length&&e.name?(F(e),e):t.find((function(n){return n.name===e.name}))?e:e.name?(F(e),e):429===e.code?(console.log("API-\u043a\u043b\u044e\u0447 OpenWeatherMap \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u0438\u0437-\u0437\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u043c\u0438\u043d\u0443\u0442\u0443. \u0412 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 60 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u043c\u0438\u043d\u0443\u0442\u0443! \u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 API_KEY \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u044c\u0442\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0434\u0435\u043d\u044c. \u0418 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435 local storage, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0430 \u0434\u043e\u0432\u0430\u043b\u0435\u043d\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0441 \u043f\u043e\u0433\u043e\u0434\u043e\u0439 \u0433\u043e\u0440\u043e\u0434\u0430 \u041c\u043e\u0441\u043a\u0432\u0430 \u0438\u0431\u043e \u043a\u043d\u043e\u043f\u043a\u0443 \u0441\u0431\u0440\u043e\u0441\u0430 \u044f \u0435\u0449\u0435 \u043d\u0435 \u0443\u0441\u043f\u0435\u043b \u0434\u043e\u0434\u0435\u043b\u0430\u0442\u044c \u043b\u0438\u0431\u043e \u0442\u0430\u043a \u0437\u0430\u0434\u0443\u043c\u044b\u0432\u0430\u043b\u043e\u0441\u044c ;)"),H(),F(P),e):void 0})),D.on(A,(function(n,e){return e})).on(C,(function(n,e){var t=n.filter((function(n){return n.name!==e})),i=JSON.stringify(Object(jn.a)(t));H(),localStorage.setItem("cities",i)})),E.on(N.pending,(function(n,e){return e}));var hn,gn=W.b.div(w||(w=Object(L.a)(["\n  text-align: center;\n  background-image: url(https://wallpaperaccess.com/full/2629319.png);\n  background-size: cover;\n  min-height: 100vh;\n"]))),mn=function(){return Object(V.jsx)(gn,{children:Object(V.jsxs)("main",{children:[Object(V.jsx)("h1",{className:"visually-hidden",children:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b"}),Object(V.jsx)(fn,{})]})})},On=Object(W.a)(hn||(hn=Object(L.a)(['\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: "Raleway", sans-serif;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  a {\n    text-decoration: none;\n    color: #000;\n  }\n\n  .visually-hidden {\n    position: absolute;\n\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n\n    white-space: nowrap;\n\n    clip-path: inset(100%);\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n\n  ::-webkit-scrollbar {\n    width: 5px;\n    height: 12px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #2f2f37;\n    border-radius: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: #ff6053;\n    border-radius: 5px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n\n  .weather-scroll-wrap {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 270px;\n    height: 100%;\n    background: inherit;\n  }\n']))),wn=document.getElementById("root");Object(y.createRoot)(wn).render(Object(V.jsxs)(v.StrictMode,{children:[Object(V.jsx)(On,{}),Object(V.jsx)(mn,{})]}))}},[[45,1,2]]]);
//# sourceMappingURL=main.00d78142.chunk.js.map