(this["webpackJsonpoutpost-payload"]=this["webpackJsonpoutpost-payload"]||[]).push([[6],{1890:function(e,t,a){"use strict";var c=a(2),r=a(78),n=a(1905),s=a(7),i=a(81),j=a(89),b=a(123),o=a(0),u=function(e){var t=e.formData,a=e.idSchema,c=e.onChange,r=-1!==a.$id.indexOf("amount");return Object(o.jsx)("div",{children:Object(o.jsx)(s.h,{children:Object(o.jsx)(s.j,{value:r?Object(j.c)(t):t,inputMode:"decimal",onChange:function(e){c(e.target.value+"000000")}})})})};var l=function(e){var t=e.message,a=e.failMessage,r=Object(i.b)().updateMessage,j={StringField:u};return Object(o.jsx)("div",{children:Object(o.jsxs)(s.h,{error:t.schema&&a&&"Sumulation error: ".concat(a),children:[t.schema&&Object(o.jsx)(n.a,{fields:j,schema:Object(b.a)(t.schema),formData:Object(b.a)(t.message||""),onChange:function(e){return r(Object(c.a)(Object(c.a)({},t),{},{message:JSON.stringify(e.formData,null,2)}))},children:Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",style:{display:"none"},children:"Submit"})})}),!t.schema&&Object(o.jsxs)("div",{children:["Please, provide schema for this message"," ",Object(o.jsx)("a",{href:"https://docs.cosmwasm.com/tutorials/simple-option/develop/#schema",rel:"noreferrer",target:"_blank",children:"learn more..."})]})]})})};var O=function(e){var t=e.message,a=e.failMessage,r=e.validateError,n=Object(i.b)().updateMessage,j="";return r?j="JSON error: ".concat(r):a&&(j="Sumulation error: ".concat(a)),Object(o.jsx)(s.h,{label:"json msg",error:j,children:Object(o.jsx)(s.b,{value:t.message,onChange:function(e){n(Object(c.a)(Object(c.a)({},t),{},{message:e.target.value}))}})})},d=a(298);var m=function(e){var t=e.message,a=Object(i.b)().updateMessage,r=Object(d.d)(t.schema||"{}"),n="";return r&&(n="JSON error: ".concat(r)),Object(o.jsx)(s.h,{label:"Schema",error:n,children:Object(o.jsx)(s.b,{value:t.schema,onChange:function(e){a(Object(c.a)(Object(c.a)({},t),{},{schema:e.target.value}))}})})};t.a=function(e){switch(e.message.renderMode){case r.b.JSON:return Object(o.jsx)(O,Object(c.a)({},e));case r.b.FORM:return Object(o.jsx)(l,Object(c.a)({},e));case r.b.SCHEMA:return Object(o.jsx)(m,Object(c.a)({},e));default:return Object(o.jsx)(O,Object(c.a)({},e))}}},2072:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var c=a(2),r=a(7),n=a(18),s=a(660),i=a(6),j=a(51),b=a(23),o=a(1),u=a(70),l=a(89),O=a(123),d=a(81),m=a(845);var h=a(298),g=a(85),f=a(661),v=a(1890),x=a(0);function p(e){var t=e.message,a=function(e){var t=Object(b.a)(),a=Object(j.b)(),c=(0,Object(d.b)().getContract)(e.contractId);Object(m.a)(c,"INSTA");var r=e.message,n=c.codeId,s=Object(u.c)(a),h=Object(o.useCallback)((function(){var e={input:0,denom:s};if(t&&n&&r&&Object(O.c)(r)){var a=Number(n),j=Object(O.a)(r),b=Object(l.a)([e]);return{msgs:[new i.MsgInstantiateContract(t,c.admin||t,a,j,b)]}}}),[t,r,n,s,c.admin]),g=Object(o.useMemo)((function(){return[r,n]}),[r,n]);return{tx:{initialGasDenom:s,estimationTxValues:g,createTx:h},contract:c}}(t),p=a.tx,C=a.contract,M=Object(h.d)(t.message||""),S=Object(d.b)().updateContract;return Object(x.jsx)(g.a,{children:Object(x.jsx)(s.a,Object(c.a)(Object(c.a)({},p),{},{children:function(e){var a=e.fee,s=e.submit,i=e.failMessage,j=e.resultQuery,b=e.disabled;return Object(x.jsxs)(f.a,Object(c.a)(Object(c.a)({},j),{},{children:[Object(x.jsx)(r.h,{label:"admin",children:Object(x.jsx)(r.j,{placeholder:"Can be empty, admin will be sender",value:C.admin,onChange:function(e){return S(Object(c.a)(Object(c.a)({},C),{},{admin:e.target.value}))}})}),Object(x.jsxs)("div",{children:[Object(x.jsx)(v.a,{message:t,failMessage:i,validateError:M}),a.render(),Object(x.jsx)(n.a,{style:{marginTop:"20px"},onClick:function(){return s.fn({})},color:"primary",disabled:!(!M&&!b),children:"Instantiate Contract"})]})]}))}}))})}}}]);
//# sourceMappingURL=6.3c3c5e6e.chunk.js.map