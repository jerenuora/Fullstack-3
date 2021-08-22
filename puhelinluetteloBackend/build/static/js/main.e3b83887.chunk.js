(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(14),r=n.n(c),s=n(3),o=n(1),a=n(4),i=n.n(a),u="/api/persons",d={getPersons:function(){return i.a.get(u).then((function(e){return e.data}))},addPerson:function(e){return i.a.post(u,e).then((function(e){return e.data}))},updateNumber:function(e){return i.a.put("".concat(u,"/").concat(e[0]),e[1]).then((function(e){return e.data}))},deleteNumber:function(e){return i.a.delete("".concat(u,"/").concat(e)).then((function(e){return e.data}))}},l=n(0),m=function(e){var t=e.msg;return null===t?null:!0===t[0]?Object(l.jsx)("div",{style:{color:"green",backround:"lightgreen",fontSize:18,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t[1]}):Object(l.jsx)("div",{style:{color:"red",backroundColor:"pink",fontSize:18,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t[1]})},b=function(e){var t=e.id,n=e.name,c=e.persons,r=e.setPersons,s=e.setSuccessMessage,o=e.activeTimeout,a=e.setActiveTimeout;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){window.confirm("Remove ".concat(n,"? "))&&d.deleteNumber(t).then((function(){r(c.filter((function(e){return e.id!==t}))),s([!0,"".concat(c.filter((function(e){return e.id===t}))[0].name," removed")]),clearTimeout(o),a(setTimeout((function(){s(null)}),4e3))})).catch((function(){s([!1,"".concat(n," has been already deleted")]),clearTimeout(o),a(setTimeout((function(){s(null)}),4e3))}))},children:"delete"})})},j=function(e){var t=e.id,n=e.name,c=e.number,r=e.persons,s=e.setPersons,o=e.setSuccessMessage,a=e.activeTimeout,i=e.setActiveTimeout;return Object(l.jsx)("div",{children:Object(l.jsxs)("b",{children:[n,": ",c,Object(l.jsx)(b,{name:n,id:t,persons:r,setPersons:s,setSuccessMessage:o,activeTimeout:a,setActiveTimeout:i})]})})},h=function(e){var t=e.persons,n=e.filterText,c=e.setPersons,r=e.setSuccessMessage,s=e.activeTimeout,o=e.setActiveTimeout,a=new RegExp(n.toUpperCase()),i=t.filter((function(e){return!0===a.test(e.name.toUpperCase())}));return Object(l.jsx)("div",{children:i.map((function(e){return Object(l.jsx)(j,{id:e.id,name:e.name,number:e.number,persons:t,setPersons:c,setSuccessMessage:r,activeTimeout:s,setActiveTimeout:o},e.id)}))})},f=function(e){var t=e.filterText,n=e.handler;return Object(l.jsxs)("div",{children:["Filter names shown:",Object(l.jsx)("input",{value:t,onChange:n})]})},p=function(e){var t=e.addName,n=e.newName,c=e.handleNameChange,r=e.newNumber,s=e.handleNumberChance;return Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("div",{children:["Name: ",Object(l.jsx)("input",{value:n,onChange:c})]}),Object(l.jsxs)("div",{children:["Number: ",Object(l.jsx)("input",{value:r,onChange:s})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})},v=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),a=Object(s.a)(r,2),i=a[0],u=a[1],b=Object(o.useState)(""),j=Object(s.a)(b,2),v=j[0],O=j[1],g=Object(o.useState)(""),x=Object(s.a)(g,2),T=x[0],N=x[1],S=Object(o.useState)(null),w=Object(s.a)(S,2),C=w[0],P=w[1],y=Object(o.useState)(null),k=Object(s.a)(y,2),A=k[0],M=k[1];Object(o.useEffect)((function(){d.getPersons().then((function(e){c(e)}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(f,{filterText:T,handler:function(e){N(e.target.value)}}),Object(l.jsx)("h2",{children:"Add number"}),Object(l.jsx)(m,{msg:C}),Object(l.jsx)(p,{addName:function(e){e.preventDefault();var t=n.map((function(e){return e.name.toUpperCase()})).indexOf(i.toUpperCase()),r={name:i,number:v};if(console.log(),-1===t)d.addPerson(r).then((function(e){c(n.concat(e)),P([!0,"".concat(r.name," added succesfully")]),clearTimeout(A),M(setTimeout((function(){P(null)}),4e3))})).catch((function(e){console.log(e.response.data.error),"number missing"===e.response.data.error?(clearTimeout(A),P([!1,"number missing"])):"name missing"===e.response.data.error?(clearTimeout(A),P([!1,"name missing"])):"too short"===e.response.data.error&&(clearTimeout(A),P([!1,"Name has to be atleast 3 characters long, and number 8 characters."])),M(setTimeout((function(){P(null)}),4e3))}));else if(window.confirm("".concat(i," is already in the phonebook, replace number with new? "))){var s=[n[t].id,r];d.updateNumber(s).then((function(e){c(n.map((function(t){return t.id!==e.id?t:e}))),P([!0,"".concat(e.name,"'s number changed to ").concat(e.number)]),clearTimeout(A),M(setTimeout((function(){P(null)}),4e3))})).catch((function(){P([!1,"".concat(r.name," has been already deleted")]),clearTimeout(A),M(setTimeout((function(){P(null)}),4e3))}))}u(""),O("")},newName:i,handleNameChange:function(e){u(e.target.value)},newNumber:v,handleNumberChance:function(e){O(e.target.value)}}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)("div",{children:Object(l.jsx)(h,{persons:n,filterText:T,setPersons:c,setSuccessMessage:P,activeTimeout:A,setActiveTimeout:M})})]})};r.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e3b83887.chunk.js.map