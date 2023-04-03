(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(17),s=n.n(r),o=(n(22),n(4)),m=n(6),i=n(5),l=(n(23),n(24),n(34)),u="https://comments-spa-test.onrender.com",j=function(){var e=Object(m.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(u,"/comments"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(u,"/comments/").concat(t,"/children"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(m.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(u,"/comments"),t,{headers:{"Content-Type":"multipart/form-data"}});case 3:n=e.sent,console.log("Comment submitted successfully",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error submitting comment:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p={getTopComments:j,getChildrenCommentsByID:b,createComment:d},O=n(13),h=n(7),x=(n(29),n(30),n(1)),_=function(){return Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("div",{className:"loader__content"})})},f={userName:"",email:"",homePage:"",message:"",parentId:null,imageFile:null,textFile:null},g=function(e){var t=e.onSubmitLoadComments,n=e.onSubmitHideForm,c=e.parentId,r=void 0===c?null:c,s=Object(a.useState)(0),l=Object(i.a)(s,2),u=l[0],j=l[1],b=Object(a.useState)(f),d=Object(i.a)(b,2),g=d[0],v=d[1],F=Object(a.useState)(!1),N=Object(i.a)(F,2),C=N[0],y=N[1],w=function(e){var t=e.target,n=t.id,a=t.value;v((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(O.a)({},n,a))}))},S=function(){var e=Object(m.a)(Object(o.a)().mark((function e(a){var c,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),y(!0),c=Object(h.a)(Object(h.a)({},g),{},{parentId:r}),console.log("updatedFormData when submitting:",c),s=new FormData,Object.entries(c).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];null!==a&&s.append(n,a)})),e.next=8,p.createComment(s);case 8:return e.next=10,t();case 10:n&&n(),j((function(e){return e+1})),v(f),y(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:C?Object(x.jsx)(_,{}):Object(x.jsxs)("form",{className:"Form",onSubmit:S,children:[Object(x.jsx)("h2",{className:"Form__title",children:"Add Your Comment"}),Object(x.jsx)("div",{className:"Form__group",children:Object(x.jsxs)("label",{htmlFor:"username",className:"Form__label",children:[Object(x.jsx)("p",{className:"Form__caption",children:"User Name (required):"}),Object(x.jsx)("input",{type:"text",id:"userName",required:!0,pattern:"[A-Za-z0-9 ]+",className:"Form__input",onChange:w})]})}),Object(x.jsx)("div",{className:"Form__group",children:Object(x.jsxs)("label",{htmlFor:"email",className:"Form__label",children:[Object(x.jsx)("p",{className:"Form__caption",children:"E-mail (required):"}),Object(x.jsx)("input",{type:"email",id:"email",required:!0,className:"Form__input",onChange:w})]})}),Object(x.jsx)("div",{className:"Form__group",children:Object(x.jsxs)("label",{htmlFor:"homepage",className:"Form__label",children:[Object(x.jsx)("p",{className:"Form__caption",children:"Home page (optional):"}),Object(x.jsx)("input",{type:"url",id:"homePage",className:"Form__input",onChange:w})]})}),Object(x.jsxs)("div",{className:"Form__group",children:[Object(x.jsx)("label",{htmlFor:"message",className:"Form__label",children:Object(x.jsx)("p",{className:"Form__caption",children:"Text (required):"})}),Object(x.jsxs)("div",{className:"Form__messageBlock",children:[Object(x.jsxs)("div",{className:"Form__tagPanel",children:[Object(x.jsx)("button",{type:"button",className:"Form__tagButton","data-tag":"i",children:"i"}),Object(x.jsx)("button",{type:"button",className:"Form__tagButton","data-tag":"strong",children:"strong"}),Object(x.jsx)("button",{type:"button",className:"Form__tagButton","data-tag":"code",children:"code"}),Object(x.jsx)("button",{type:"button",className:"Form__tagButton","data-tag":"a",children:"a"})]}),Object(x.jsx)("textarea",{id:"message",required:!0,className:"Form__textarea",onChange:w})]})]}),Object(x.jsx)("div",{className:"Form__group",children:Object(x.jsxs)("label",{htmlFor:"imageFile",className:"Form__label",children:[Object(x.jsx)("p",{className:"Form__caption",children:"Upload Image (JPG, GIF, PNG, max 320x240px):"}),Object(x.jsx)("input",{type:"file",id:"imageFile",accept:"image/jpeg,image/gif,image/png",className:"Form__input Form__inputFile",onChange:function(e){var t=e.target.files,n=t?t[0]:null;n&&v((function(e){return Object(h.a)(Object(h.a)({},e),{},{imageFile:n})}))}})]})}),Object(x.jsx)("div",{className:"Form__group",children:Object(x.jsxs)("label",{htmlFor:"textFile",className:"Form__label",children:[Object(x.jsx)("p",{className:"Form__caption",children:"Upload Text File (TXT, max 100KB):"}),Object(x.jsx)("input",{type:"file",id:"textFile",accept:".txt",className:"Form__input Form__inputFile",onChange:function(e){var t=e.target.files,n=t?t[0]:null;n&&v((function(e){return Object(h.a)(Object(h.a)({},e),{},{textFile:n})}))}})]})}),Object(x.jsx)("button",{type:"submit",className:"Form__submitButton",children:"Submit"})]},u)})},v=c.a.memo((function(e){var t=e.comment,n=e.level,c=Object(a.useState)([]),r=Object(i.a)(c,2),s=r[0],l=r[1],u=Object(a.useState)(!1),j=Object(i.a)(u,2),b=j[0],d=j[1],O=t.id,h=function(){var e=Object(m.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getChildrenCommentsByID(O);case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error loading comments for comment with id ".concat(O,":"),e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[O]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"Comment Comment--level-".concat(n),children:[Object(x.jsxs)("div",{className:"Comment__wrapper",children:[Object(x.jsx)("img",{className:"Comment__avatar",src:"https://avatars.dicebear.com/api/human/".concat(O,".svg"),alt:""}),Object(x.jsxs)("div",{className:"Comment__body",children:[Object(x.jsxs)("div",{className:"Comment__header",children:[Object(x.jsx)("span",{className:"Comment__authorName",children:t.author.user_name}),Object(x.jsx)("span",{className:"Comment__date",children:new Date(t.created_at).toLocaleString()})]}),Object(x.jsx)("p",{className:"Comment__text",children:t.text})]})]}),Object(x.jsx)("button",{type:"button",className:"Comment__answerButton",onClick:function(){return d((function(e){return!e}))},children:b?"\u2014 Answer":"Answer"}),b&&Object(x.jsx)(g,{onSubmitLoadComments:h,onSubmitHideForm:function(){return d(!1)},parentId:O.toString()})]}),Object(x.jsx)(x.Fragment,{children:s.length>0&&Object(x.jsx)(x.Fragment,{children:s.map((function(e){return Object(x.jsx)(v,{comment:e,level:n<10?n+1:n},e.id)}))})})]})})),F=c.a.memo((function(e){var t=e.topComments;return Object(x.jsx)("div",{className:"CommentsList",children:t.map((function(e){return Object(x.jsx)(v,{comment:e,level:1},e.id)}))})})),N=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(m.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getTopComments();case 3:t=e.sent,console.log("Loaded topComments:",t),c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error loading top comments:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{className:"App__title",children:"Comments"}),Object(x.jsx)("div",{className:"App__main",children:Object(x.jsx)(F,{topComments:n})}),Object(x.jsx)("div",{className:"App__bottom",children:Object(x.jsx)(g,{onSubmitLoadComments:r})})]})})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a5594965.chunk.js.map