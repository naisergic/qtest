(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{637:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),l=a(63),u=a(42),o=a(509),s=a.n(o),f=a(512),b=a.n(f),m=a(65),g=a(72);function p(){var e=E(["\nwidth: calc(50% + 8px);\ntext-align: right\na {\n    margin-right: 8px;\n    text-decoration: none;\n}\n"]);return p=function(){return e},e}function d(){var e=E(["\npadding-bottom: 20px;\n"]);return d=function(){return e},e}function v(){var e=E(["\nheight: 50px;\nwidth: 50px;\nborder-radius: 50px;\nmargin-top: 10px;\n"]);return v=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h=g.a.img(v()),y=g.a.td(d()),j=g.a.div(p()),w=["Image","Name","Email"],x=function(e){for(var t=e.tableData,a=e.totalPages,n=e.page,c=t&&Array.isArray(t[n])>0&&t[n].map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(m.b,{to:"".concat("/users/").concat(e.id)},r.a.createElement(h,{className:"mb1",alt:"user",src:e.avatar}))),r.a.createElement(y,null,"".concat(e.first_name," ").concat(e.last_name)),r.a.createElement(y,null,e.email))})),i=[],l=0;l<a;l+=1)i[l]=l+1;var u=i.map((function(e,t){return r.a.createElement(m.b,{to:"".concat("/users?page=").concat(t+1)},"".concat(t+1))}));return r.a.createElement("div",null,r.a.createElement("table",{className:"mb1"},r.a.createElement("tr",null,r.a.createElement("th",null,w[0]),r.a.createElement("th",null,w[1]),r.a.createElement("th",null,w[2])),c),r.a.createElement(j,null,u))};x.propTypes={tableData:i.a.array.isRequired,totalPages:i.a.string.isRequired,page:i.a.string.isRequired};var O=x,P=a(90);function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"UserTable",(function(){return R}));var R=function(e){var t=e.location,a=e.totalPages,c=b()("","search",t),i=s.a.parse(c,{ignoreQueryPrefix:!0}).page,l=e.data,u=q(Object(n.useState)({}),2),o=u[0],f=u[1];return Object(n.useEffect)((function(){l&&!l[i]&&e.getUserTable(i)}),[t]),Object(n.useEffect)((function(){f(l)}),[l]),r.a.createElement(O,{tableData:o,totalPages:a,page:i})};R.propTypes={location:i.a.object.isRequired,data:i.a.object.isRequired,getUserTable:i.a.func.isRequired,totalPages:i.a.string.isRequired};t.default=Object(u.g)(Object(l.b)((function(e){return{data:e.get("tableData").data,totalPages:e.get("tableData").totalPages}}),(function(e){return{getUserTable:function(t){return e(Object(P.a)(t))}}}))(R))}}]);
//# sourceMappingURL=5.js.map