(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(65)},35:function(e,a,t){},62:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=(t(35),t(7)),s=t(8),i=t(10),m=t(9),u=t(11),p=t(67),d=t(69),h=t(68),b=t(3),f=t.n(b),E=t(12),v=t(29),y=t(17),g=t(13),N=t.n(g),C=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return console.log("context.js: adding"),Object(y.a)({},e,{contacts:Object(v.a)(e.contacts).concat([a.payload])});case"UPDATE_CONTACT":console.log("context.js: update");var t=e.contacts.map(function(e){return e.id===a.payload.id?a.payload:e});return Object(y.a)({},e,{contacts:t});default:return e}},O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=C.Consumer,w=t(66),x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={show:!1},t.onShowClick=function(){t.setState({show:!t.state.show})},t.onDeleteClick=function(){var e=Object(E.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(k,null,function(a){var t=e.props.contact,n=t.id,c=t.name,o=t.email,l=t.phone,s=a.dispatch,i=e.state.show?"fas fa-sort-up":"fas fa-sort-down",m=null;return e.state.show&&(m=r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",o),r.a.createElement("li",{className:"list-group-item"},"Phone: ",l))),r.a.createElement("div",{className:"card card-body mb-3 bg-light"},r.a.createElement("h3",{className:"d-flex"},c,"\xa0",r.a.createElement("i",{onClick:function(){return e.setState({show:!e.state.show})},className:i}),r.a.createElement(w.a,{className:"ml-auto",to:"/contact/edit/".concat(n)},r.a.createElement("i",{className:"d-inline fas fa-pencil-alt mr-3",style:{color:"#000"}})),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,n,s),className:"fas fa-times text-danger"})),m)})}}]),a}(n.Component),S=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contacts.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})});return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a)})}}]),a}(n.Component),A=t(14),T=t(27),I=t.n(T);function D(e){var a=e.name,t=e.label,n=e.onInputChange,c=e.type,o=e.placeholder,l=e.value,s=e.error,i=e.required;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{onChange:n,type:c,name:a,placeholder:o,className:I()("form-control form-control-lg",{"is-invalid":s}),value:l,required:i}),r.a.createElement("div",{className:"invalid-feedback"},s))}D.defaultProps={type:"text"};var P=D,q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onInputChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(){var e=Object(E.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,N.a.post("https://jsonplaceholder.typicode.com/users/",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:""}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(k,null,function(a){var t=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Add Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,t)},r.a.createElement(P,{name:"name",label:"Name",onInputChange:e.onInputChange,placeholder:"Enter Name",value:e.state.name,error:e.state.errors.name}),r.a.createElement(P,{name:"email",label:"Email",type:"email",onInputChange:e.onInputChange,placeholder:"Enter Email",value:e.state.email,error:e.state.errors.email}),r.a.createElement(P,{name:"phone",label:"Phone",onInputChange:e.onInputChange,placeholder:"Enter Phone",value:e.state.phone,error:e.state.errors.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-lg btn-block",value:"Add Contact"}))))})}}]),a}(n.Component),F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={id:"",name:"",email:"",phone:"",errors:{}},t.onInputChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(){var e=Object(E.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.id,o=r.name,l=r.email,s=r.phone,""!==o){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==l){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==s){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return i={id:c,name:o,email:l,phone:s},e.next=14,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(c),i);case 14:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:""}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var a,t,n,r,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,r=n.name,c=n.email,o=n.phone,this.setState({id:a,name:r,email:c,phone:o});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(k,null,function(a){var t=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Edit Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,t)},r.a.createElement(P,{name:"name",label:"Name",onInputChange:e.onInputChange,placeholder:"Enter Name",value:e.state.name,error:e.state.errors.name}),r.a.createElement(P,{name:"email",label:"Email",type:"email",onInputChange:e.onInputChange,placeholder:"Enter Email",value:e.state.email,error:e.state.errors.email}),r.a.createElement(P,{name:"phone",label:"Phone",onInputChange:e.onInputChange,placeholder:"Enter Phone",value:e.state.phone,error:e.state.errors.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-lg btn-block",value:"Save Contact"}))))})}}]),a}(n.Component),_=function(e){var a=e.branding;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")))))))};_.defaultProps={branding:"My App"};var M=_;var L=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"version 1.0.0"))};var B=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Pago Not Found"),r.a.createElement("p",{className:"lead"},"The page you\u2019re looking for can\u2019t be found."))},J=(t(60),t(62),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:S}),r.a.createElement(h.a,{path:"/contact/add",exact:!0,component:q}),r.a.createElement(h.a,{path:"/contact/edit/:id",component:F}),r.a.createElement(h.a,{path:"/about",component:L}),r.a.createElement(h.a,{component:B}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.4ae88b46.chunk.js.map