(this["webpackJsonptodos-por-thiago"]=this["webpackJsonptodos-por-thiago"]||[]).push([[0],{41:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(14),i=a.n(n),o=(a(41),a(10)),r=(a(23),a(56)),l=a(57),d=a(29),j=a(62),h=a(63),b=a(61),u=a(58),O=a(60),m=a(59),p=(a(43),a(1));var x=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!0),i=Object(o.a)(n,2),x=(i[0],i[1],Object(s.useState)([])),f=Object(o.a)(x,2),g=f[0],v=f[1],y=Object(s.useState)([]),N=Object(o.a)(y,2),_=N[0],k=N[1],T=Object(s.useState)(0),S=Object(o.a)(T,2),C=S[0],w=S[1],z=Object(s.useRef)(null),A=function(){c(!1),gtag("event","modal_closed_no",{event_category:"engagement",event_label:"Closed Modal",value:"not_so_good_person"})},F=function(){return z.current.scrollIntoView()};return Object(s.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){v(e)})),fetch("prizes.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){k(e)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{className:"funding-stats",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(l.a,{children:Object(p.jsx)(d.a,{children:Object(p.jsxs)("header",{className:"funding-stats-header mt-5 mb-5",children:[Object(p.jsx)("h2",{children:"Rifa Solidaria"}),Object(p.jsx)("p",{children:"Todos por Thiago es una iniciativa para ayudar al ni\xf1o Thiaguito y su familia. El tiene Fibrosis Qu\xedstica; una enfermedad gen\xe9tica que afecta fuertemente los pulmones, el p\xe1ncreas, el h\xedgado y los intestinos."}),Object(p.jsx)(j.a,{variant:"outline-primary",size:"sm",onClick:function(){c(!0),gtag("event","modal_open",{event_category:"engagement",event_label:"Opened Modal"})},children:"Leer m\xe1s"})]})})}),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(d.a,{xs:{span:12,order:1},sm:{span:12,order:0},md:{span:6},children:Object(p.jsx)("iframe",{width:"100%",height:"330",src:"https://www.youtube.com/embed/zc0Y1iNKgY4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(p.jsx)(d.a,{xs:{order:0},sm:{order:1},children:Object(p.jsxs)("div",{className:"funding-stats-details mb-5",children:[Object(p.jsx)(h.a,{now:g.funded/4675*100,className:"mb-4"}),Object(p.jsxs)("div",{className:"stat stat-primary",children:[Object(p.jsxs)("div",{className:"stat-value",children:[Object(p.jsx)("small",{children:"S./"})," ",g.funded,",00"]}),Object(p.jsxs)("div",{className:"stat-label",children:["recaudados del objetivo de ",Object(p.jsx)("small",{children:"S./"})," 5.000,00"]})]}),Object(p.jsxs)("div",{className:"stat",children:[Object(p.jsx)("div",{className:"stat-value",children:g.tickets_sold}),Object(p.jsx)("div",{className:"stat-label",children:"tickets reservados"})]}),Object(p.jsxs)("div",{className:"stat",children:[Object(p.jsx)("div",{className:"stat-value",children:g.supporters}),Object(p.jsx)("div",{className:"stat-label",children:Object(p.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1fKNWKHsDxb1zIAg13pdKzBFjfuy2W0Yi1aHju3fo9mM/edit?usp=sharing",target:"_blank",rel:"noreferrer",className:"stat-link",children:"personas apoyando"})})]}),Object(p.jsxs)("div",{className:"stat",children:[Object(p.jsx)("div",{className:"stat-value",children:"Sorteo finalizado"}),Object(p.jsx)("div",{className:"stat-label",children:Object(p.jsx)("a",{href:"/ganadores",className:"stat-link",children:"Lista de ganadores"})})]})]})})]})]})}),Object(p.jsx)("section",{className:"block prizes-block",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)("h2",{children:"Premios"}),Object(p.jsx)("ul",{className:"prizes-list",children:_&&_.map((function(e){return Object(p.jsx)("li",{children:e.name},e.id)}))}),Object(p.jsx)("p",{children:Object(p.jsx)("small",{children:"* Se realizar\xe1n sorteos individuales para cada premio."})})]})}),Object(p.jsx)("section",{className:"block buy-tickets-block",ref:z,children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)("h2",{children:"Adquirir tickets"}),Object(p.jsxs)(b.a,{inline:!0,className:"buy-tickets-form",children:[Object(p.jsx)(b.a.Label,{className:"my-1 mr-2",children:"\xbfCuantos tickets deseas adquirir?"}),Object(p.jsxs)(b.a.Control,{as:"select",className:"my-1 mr-sm-2",custom:!0,onChange:function(e){var t=+e.target.value;gtag("event","tickets_selected",{event_category:"engagement",event_label:"Selected Tickets",value:t}),w(t)},children:[Object(p.jsx)("option",{value:"",children:"Cant. de tickets"}),Object(p.jsx)("option",{value:"5",children:"1"}),Object(p.jsx)("option",{value:"10",children:"3"}),Object(p.jsx)("option",{value:"20",children:"6"}),Object(p.jsx)("option",{value:"30",children:"9"}),Object(p.jsx)("option",{value:"40",children:"12"}),Object(p.jsx)("option",{value:"50",children:"15"}),Object(p.jsx)("option",{value:"60",children:"18"}),Object(p.jsx)("option",{value:"70",children:"21"}),Object(p.jsx)("option",{value:"80",children:"24"}),Object(p.jsx)("option",{value:"90",children:"27"}),Object(p.jsx)("option",{value:"100",children:"30"}),Object(p.jsx)("option",{value:"200",children:"60"}),Object(p.jsx)("option",{value:"300",children:"90"}),Object(p.jsx)("option",{value:"400",children:"120"}),Object(p.jsx)("option",{value:"500",children:"150"})]}),C>0&&Object(p.jsxs)(b.a.Label,{className:"my-1 mr-2",children:["Entonces, el valor que necesitas transferir es de ",Object(p.jsxs)("strong",{className:"ml-2 text-white",children:["S./ ",C,",00"]})]})]})]})}),Object(p.jsx)("section",{className:"block accounts-block",children:Object(p.jsxs)(r.a,{children:[Object(p.jsxs)("p",{children:["Para participar de la rifa, haga una transferencia a una de las cuentas abajo y envie el voucher de pago y su nombre para ",Object(p.jsx)("a",{href:"mailto:todos.por.thiago@gmail.com",children:"todos.por.thiago@gmail.com"}),"."]}),Object(p.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Yape"}),Object(p.jsx)("th",{children:"BCP"}),Object(p.jsx)("th",{children:"Interbank"})]})}),Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"933401577"}),Object(p.jsxs)("td",{children:["Sandy Cotito Asalde",Object(p.jsx)("br",{}),"N 191 37734388041"]}),Object(p.jsxs)("td",{children:["6433103470402",Object(p.jsx)("br",{}),"CCI 003 643 01310347040246"]})]})})]})]})}),Object(p.jsxs)(O.a,{show:a,onHide:A,centered:!0,size:"lg",children:[Object(p.jsx)(O.a.Header,{closeButton:!0,children:Object(p.jsx)(O.a.Title,{children:"Todos por Thiago"})}),Object(p.jsxs)(O.a.Body,{children:[Object(p.jsxs)("p",{children:["Rifa Solidaria - Todos por Thiago es una iniciativa para ayudar al ni\xf1o Thiaguito y su familia.",Object(p.jsx)("br",{}),"El tiene Fibrosis Qu\xedstica; una enfermedad gen\xe9tica que afecta fuertemente los pulmones, el p\xe1ncreas, el h\xedgado y los intestinos."]}),Object(p.jsx)("p",{children:"Esta enfermedad no tiene cura, solo tratamientos avanzados y costosos que permiten que el paciente que la padece tenga una mejor calidad de vida."}),Object(p.jsx)("p",{children:"Lamentablemente, los pap\xe1s de Thiaguito no cuentan con los medios econ\xf3micos para solventar estos tratamientos y la falta de ello ha hecho con que Thiago termine en el hospital, con fuertes infecciones y sensaciones de ahogo."}),Object(p.jsx)("p",{children:"Para ayudar a la familia con los costos de estos tratamientos se ha organizado una rifa solidaria con lindos premios, los cuales fueron donados con mucho amor, para esta noble causa. Te invito a que participes. Cualquier ayuda es bienvenida."}),Object(p.jsx)("p",{children:Object(p.jsx)(m.a,{src:"https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/160242355_10160841175151258_7816022352069995779_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=FRSNL9CWTHgAX8NI5ei&_nc_ht=scontent.fbau3-1.fna&oh=32f5a69500401ae76d58ef1ffdcfa1da&oe=606FAEBB",fluid:!0})}),Object(p.jsxs)("p",{children:["El dinero debe ser depositado directamente a la cuenta de la se\xf1ora Sandy (mami de Thiago) y los vouchers de pago enviados al e-mail: ",Object(p.jsx)("a",{href:"mailto:todos.por.thiago@gmail.com",children:"todos.por.thiago@gmail.com"})]}),Object(p.jsxs)("p",{children:["Si vives en el extranjero tambi\xe9n puedes hacer tu donaci\xf3n a trav\xe9s de este link: ",Object(p.jsx)("a",{href:"https://www.gofundme.com/f/2zjt7-ayudenme-a-seguir-viviendo",target:"_blank",rel:"noreferrer",children:"GoFundMe - Ayudenme a Seguir Viviendo"})]}),Object(p.jsxs)("p",{children:['Pueden seguir la historia de Thiago por Facebook: "Ay\xfadenme a seguir viviendo" o por Instagram: ',Object(p.jsx)("a",{href:"https://instagram.com/hola_mellamothiago",target:"_blank",rel:"noreferrer",children:"@hola_mellamothiago"})]}),Object(p.jsx)("p",{children:"DIVULGUE, DONE, COMPARTA \u2764\ufe0f"})]}),Object(p.jsxs)(O.a.Footer,{children:[Object(p.jsx)(j.a,{variant:"outline-secondary",onClick:A,children:"No quiero apoyar ahora!"}),Object(p.jsx)(j.a,{variant:"primary",onClick:function(){c(!1),setTimeout((function(){F()}),500),gtag("event","modal_closed_yes",{event_category:"engagement",event_label:"Closed Modal",value:"good_person"})},children:"Apoyar ahora!"})]})]})]})},f=a(20),g=a(35),v=a(31),y=a(32);var N=function(e){var t=Object(s.useState)([]),a=Object(o.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)([]),h=Object(o.a)(i,2),b=h[0],u=h[1],O=Object(s.useState)([]),m=Object(o.a)(O,2),x=m[0],N=m[1],_=Object(s.useState)({}),k=Object(o.a)(_,2),T=k[0],S=k[1],C=Object(s.useState)({}),w=Object(o.a)(C,2),z=w[0],A=w[1];Object(s.useEffect)((function(){fetch("supporters.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){n(e)})),fetch("prizes.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){N(e)})),fetch("winners.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){S(e)}))}),[]),Object(s.useEffect)((function(){F()}),[c]);var F=function(){var e=[];c.forEach((function(t){for(var a=0;a<t.tickets;a++)e.push(t.name)})),u(e)},E=function(){var e=b.length-1;return function(e){var t=Object(g.a)(b),a=t[e];return t.splice(e,1),u(t),a}(Math.ceil(0+Math.random()*(e-0)))},q=function(e){!function(e){var t=Object(f.a)({},z);t[e]=!0,A(t)}(e),setTimeout((function(){var t=Object(f.a)({},T),a=E();t[e]=a,S(t),function(e){var t=Object(f.a)({},z);t[e]=!1,A(t)}(e)}),6e3)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{className:"block raffle-block",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)("h2",{children:e.allowRaffle?"Sorteos":"Ganadores"}),Object(p.jsx)(l.a,{children:x&&x.map((function(t){return Object(p.jsx)(d.a,{xs:"12",children:Object(p.jsxs)("div",{className:"prize-item "+(!z[t.id]&&T[t.id]?"has-winner":""),children:[Object(p.jsx)("div",{className:"item-image",children:Object(p.jsx)("img",{src:t.image,alt:t.name})}),Object(p.jsx)("div",{className:"item-name",children:t.name}),z[t.id]?Object(p.jsxs)(j.a,{size:"lg",className:"item-button",disabled:!0,children:[Object(p.jsx)(v.a,{icon:y.a,spin:!0}),"Sorteando..."]}):Object(p.jsxs)(p.Fragment,{children:[T[t.id]&&Object(p.jsxs)("div",{className:"item-winner",children:["Ganador: ",Object(p.jsx)("strong",{children:T[t.id]})]}),!T[t.id]&&e.allowRaffle&&Object(p.jsx)(j.a,{size:"lg",className:"item-button",onClick:function(){return q(t.id)},children:"Sortear"})]})]})},t.id)}))})]})})})},_=a(33),k=a(7);var T=function(){return Object(p.jsxs)(_.a,{children:[Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("h1",{children:"Todos por Thiago"})}),Object(p.jsxs)(k.c,{children:[Object(p.jsx)(k.a,{exact:!0,path:"/ganadores",children:Object(p.jsx)(N,{})}),Object(p.jsx)(k.a,{exact:!0,path:"/",children:Object(p.jsx)(x,{})}),Object(p.jsx)(k.a,{exact:!0,path:"/todos-por-thiago",children:Object(p.jsx)(x,{})})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};a(53);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),S()}},[[54,1,2]]]);
//# sourceMappingURL=main.231bb82d.chunk.js.map