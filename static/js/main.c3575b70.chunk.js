(this["webpackJsonpgoit-react-hw-07-redux-querry-phonebook"]=this["webpackJsonpgoit-react-hw-07-redux-querry-phonebook"]||[]).push([[0],{41:function(t,e,n){},79:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"getContactsRequest",(function(){return x})),n.d(c,"getContactsSuccess",(function(){return v})),n.d(c,"getContactsError",(function(){return C})),n.d(c,"addContactsRequest",(function(){return g})),n.d(c,"addContactsSuccess",(function(){return y})),n.d(c,"addContactsError",(function(){return N})),n.d(c,"deleteContactsRequest",(function(){return w})),n.d(c,"deleteContactsSuccess",(function(){return k})),n.d(c,"deleteContactsError",(function(){return q})),n.d(c,"updateFilter",(function(){return F}));var r={};n.r(r),n.d(r,"getContacts",(function(){return S})),n.d(r,"addContact",(function(){return E})),n.d(r,"deleteContact",(function(){return R}));var a={};n.r(a),n.d(a,"getItems",(function(){return L})),n.d(a,"getFilter",(function(){return z})),n.d(a,"isLoading",(function(){return B})),n.d(a,"getVisibleContacts",(function(){return I}));var u=n(0),o=n.n(u),s=n(14),i=n.n(s),b=n(7),l=(n(40),n(41),n(30)),d=n.n(l),j=n(8),f=n.n(j),O=n(17),m=n(11),p=n.n(m),h=n(4),x=Object(h.b)("contacts/getContactRequest"),v=Object(h.b)("contacts/getContactSuccess"),C=Object(h.b)("contacts/getContactError"),g=Object(h.b)("contacts/addContactRequest"),y=Object(h.b)("contacts/addContactSuccess"),N=Object(h.b)("contacts/addContactError"),w=Object(h.b)("contacts/deleteContactRequest"),k=Object(h.b)("contacts/deleteContactSuccess"),q=Object(h.b)("contacts/deleteContactError"),F=Object(h.b)("contacts/UpdateFilter");p.a.defaults.baseURL="http://localhost:4040";var S=function(){return function(){var t=Object(O.a)(f.a.mark((function t(e){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},E=function(t){var e=t.name,n=t.number;return function(){var t=Object(O.a)(f.a.mark((function t(c){var r,a,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e,number:n},c(g()),t.prev=2,t.next=5,p.a.post("/contacts",r);case 5:a=t.sent,u=a.data,c(y(u)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(N(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},R=function(t){return function(){var e=Object(O.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.prev=1,e.next=4,p.a.delete("/contacts/".concat(t));case 4:n(k(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(q(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},A=n(9),L=function(t){return t.contacts.items},z=function(t){return t.contacts.filter},B=function(t){return t.contacts.loading},I=Object(A.a)([L,z],(function(t,e){var n=e.toLowerCase().trim();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),J=(n(79),n(1));function Z(){var t=Object(b.c)(a.getVisibleContacts),e=Object(b.c)(a.isLoading),n=Object(b.b)();return Object(u.useEffect)((function(){n(r.getContacts())}),[n]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("ul",{className:"contactsList",children:t.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(J.jsxs)("li",{className:"item",children:[Object(J.jsxs)("span",{className:"itemText",children:[Object(J.jsxs)("span",{className:"itemName",children:[c,":"]}),Object(J.jsx)("span",{className:"itemNum",children:a})]}),Object(J.jsx)("button",{type:"button",onClick:function(){return n(r.deleteContact(e))},className:"button",children:"Delete"})]},e)}))}),e&&Object(J.jsx)(d.a,{type:"Oval",color:"#00BFFF",height:80,width:80})]})}n(81);function D(){var t=Object(b.c)(a.getFilter),e=Object(b.b)();return Object(J.jsx)("div",{className:"filter",children:Object(J.jsxs)("label",{children:[Object(J.jsx)("span",{className:"filterText",children:"Filter"}),Object(J.jsx)("input",{type:"text",value:t,onChange:function(t){return e(c.updateFilter(t.target.value))}})]})})}var M=n(20);function T(){var t=Object(u.useState)(""),e=Object(M.a)(t,2),n=e[0],c=e[1],o=Object(u.useState)(""),s=Object(M.a)(o,2),i=s[0],l=s[1],d=Object(b.c)(a.getItems),j=Object(b.b)(),f=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":c(r);break;case"number":l(r);break;default:return}},O=function(){c(""),l("")};return Object(J.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d.some((function(t){return t.name===n}))?alert("".concat(n," already exist in contact list")):(j(r.addContact({name:n,number:i})),O())},className:"form",children:[Object(J.jsxs)("label",{children:[Object(J.jsx)("h2",{children:"Name"}),Object(J.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:f})]}),Object(J.jsxs)("label",{children:[Object(J.jsx)("h2",{children:"Number"}),Object(J.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:f})]}),Object(J.jsx)("button",{type:"submit",className:"button",children:"Add contact"})]})}n(82);var U,V,$,G=function(){return Object(J.jsxs)("div",{className:"container",children:[Object(J.jsx)("div",{className:"formsContainer",children:Object(J.jsx)(T,{})}),Object(J.jsx)("div",{className:"contactsContainer",children:Object(J.jsxs)("div",{className:"contacts",children:[Object(J.jsx)("h2",{children:"Contacts"}),Object(J.jsx)(D,{}),Object(J.jsx)(Z,{})]})})]})},H=n(16),K=n(2),P=n(6),Q=Object(h.c)([],(U={},Object(K.a)(U,v,(function(t,e){return e.payload})),Object(K.a)(U,y,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object(K.a)(U,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),U)),W=Object(h.c)("",Object(K.a)({},F,(function(t,e){return e.payload}))),X=Object(h.c)(!1,(V={},Object(K.a)(V,x,(function(){return!0})),Object(K.a)(V,v,(function(){return!1})),Object(K.a)(V,C,(function(){return!1})),Object(K.a)(V,g,(function(){return!0})),Object(K.a)(V,y,(function(){return!1})),Object(K.a)(V,N,(function(){return!1})),Object(K.a)(V,w,(function(){return!0})),Object(K.a)(V,k,(function(){return!1})),Object(K.a)(V,q,(function(){return!1})),V)),Y=Object(h.c)(null,($={},Object(K.a)($,N,(function(t,e){return e.payload.message})),Object(K.a)($,C,(function(t,e){return e.payload.message})),Object(K.a)($,q,(function(t,e){return e.payload.message})),Object(K.a)($,x,(function(){return null})),Object(K.a)($,g,(function(){return null})),Object(K.a)($,w,(function(){return null})),Object(K.a)($,F,(function(){return null})),$)),_=Object(P.b)({items:Q,filter:W,loading:X,error:Y}),tt=[].concat(Object(H.a)(Object(h.d)()),[function(t){return function(t){return function(e){t(e)}}}]),et=Object(h.a)({reducer:{contacts:_},middleware:tt});i.a.render(Object(J.jsx)(o.a.StrictMode,{children:Object(J.jsx)(b.a,{store:et,children:Object(J.jsx)(G,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.c3575b70.chunk.js.map