(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{638:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(12),c=n.n(i),u=n(63),o=n(42),l=n(72);function s(){var e=m(["\nflex-direction: row;\ndisplay: flex;\njustify-content: space-between;\n"]);return s=function(){return e},e}function d(){var e=m(["\nbackground-color: #d7eceb;\npadding: 50px;\ntext-align: center;\n"]);return d=function(){return e},e}function f(){var e=m(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nheight: 100%;\n@media (max-width: 767px) {\n    height: 60%\n  }\n"]);return f=function(){return e},e}function p(){var e=m(["\nheight: 100px;\nwidth: 100px;\nborder-radius: 50px;\n"]);return p=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=l.a.img(p()),v=l.a.div(f()),g=l.a.div(d()),h=l.a.div(s()),y=function(e){var t=e.first_name,n=e.last_name,r=e.detail,i=e.detail2,c=e.phoneNumber,u=e.email,o=e.avatar;return a.a.createElement(v,null,a.a.createElement(g,null,a.a.createElement(b,{className:"mb1",alt:"user",src:o}),a.a.createElement("div",{className:"mb1"},"Mr. ".concat(t," ").concat(n)),a.a.createElement("div",null,r),a.a.createElement("div",{className:"mb1"},i),a.a.createElement(h,null,a.a.createElement("div",null,c),a.a.createElement("div",null,u))))};y.propTypes={first_name:c.a.string.isRequired,last_name:c.a.string.isRequired,detail:c.a.string,detail2:c.a.string,phoneNumber:c.a.string,email:c.a.string.isRequired,avatar:c.a.string.isRequired},y.defaultProps={detail:"Co-founder & CEO at Bravo Incorporation",detail2:"(It enabled service)",phoneNumber:"+17899048786"};var j=y,O=n(91);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"UserDetail",(function(){return x}));var x=function(e){var t=E(Object(r.useState)({}),2),n=t[0],i=t[1],c=e.location,u=e.data,o=c.pathname,l=o.slice(o.lastIndexOf("/")+1);return Object(r.useEffect)((function(){u&&!u[l]&&e.getUserDetail(l)}),[c]),Object(r.useEffect)((function(){i(u)}),[u]),a.a.createElement(j,w({},n[l],{userId:l}))};x.propTypes={location:c.a.object.isRequired,data:c.a.object.isRequired,getUserDetail:c.a.func.isRequired};t.default=Object(o.g)(Object(u.b)((function(e){return{data:e.get("userDetail").data}}),(function(e){return{getUserDetail:function(t){return e(Object(O.a)(t))}}}))(x))}}]);
//# sourceMappingURL=4.js.map