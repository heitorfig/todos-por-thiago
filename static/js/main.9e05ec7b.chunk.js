(this["webpackJsonptodos-por-thiago"]=this["webpackJsonptodos-por-thiago"]||[]).push([[0],{42:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),n=t(14),i=t.n(n),o=(t(42),t(10)),r=t(18),l=t.n(r),d=t(56),j=t(57),h=t(31),b=t(62),u=t(63),m=t(61),O=t(58),p=t(60),x=t(59),v=t(30),g=t.n(v),f=t(1);var y=function(){var e=Object(s.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)([]),i=Object(o.a)(n,2),r=i[0],v=i[1],y=Object(s.useState)([]),_=Object(o.a)(y,2),N=_[0],T=_[1],k=Object(s.useState)(0),C=Object(o.a)(k,2),S=C[0],w=C[1],q=Object(s.useRef)(null),F=function(){c(!1),gtag("event","modal_closed",{event_category:"engagement",event_label:"Closed Modal",value:"not_so_good_person"})},z=function(){return q.current.scrollIntoView()};return Object(s.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){v(e)})),fetch("prizes.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){T(e)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("section",{className:"funding-stats",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(j.a,{children:Object(f.jsx)(h.a,{children:Object(f.jsxs)("header",{className:"funding-stats-header mt-5 mb-5",children:[Object(f.jsx)("h2",{children:"Rifa Solidaria"}),Object(f.jsx)("p",{children:"Todos por Thiago es una iniciativa para ayudar al ni\xf1o Thiaguito y su familia. El tiene Fibrosis Qu\xedstica; una enfermedad gen\xe9tica que afecta fuertemente los pulmones, el p\xe1ncreas, el h\xedgado y los intestinos."}),Object(f.jsx)(b.a,{variant:"outline-primary",size:"sm",onClick:function(){c(!0),gtag("event","modal_open",{event_category:"engagement",event_label:"Opened Modal"})},children:"Leer m\xe1s"})]})})}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(h.a,{xs:{span:12,order:1},sm:{span:12,order:0},md:{span:6},children:Object(f.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/zc0Y1iNKgY4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(f.jsx)(h.a,{xs:{order:0},sm:{order:1},children:Object(f.jsxs)("div",{className:"funding-stats-details mb-5",children:[Object(f.jsx)(u.a,{now:r.funded/4675*100,className:"mb-4"}),Object(f.jsxs)("div",{className:"stat stat-primary",children:[Object(f.jsxs)("div",{className:"stat-value",children:[Object(f.jsx)("small",{children:"S./"})," ",r.funded,",00"]}),Object(f.jsxs)("div",{className:"stat-label",children:["recaudados del objetivo de ",Object(f.jsx)("small",{children:"S./"})," 5.000,00"]})]}),Object(f.jsxs)("div",{className:"stat",children:[Object(f.jsx)("div",{className:"stat-value",children:r.tickets_sold}),Object(f.jsx)("div",{className:"stat-label",children:"tickets reservados"})]}),Object(f.jsxs)("div",{className:"stat",children:[Object(f.jsx)("div",{className:"stat-value",children:r.supporters}),Object(f.jsx)("div",{className:"stat-label",children:"personas apoyando"})]}),Object(f.jsxs)("div",{className:"stat",children:[Object(f.jsx)("div",{className:"stat-label",children:"El sorteo ser\xe1"}),Object(f.jsx)("div",{className:"stat-value",children:Object(f.jsx)(g.a,{locale:"es-mx",to:"2021-04-30T19:00-05:00",children:l.a.now()})})]})]})})]})]})}),Object(f.jsx)("section",{className:"block prizes-block",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)("h2",{children:"Premios"}),Object(f.jsx)("ul",{className:"prizes-list",children:N&&N.map((function(e){return Object(f.jsx)("li",{children:e.name},e.id)}))}),Object(f.jsx)("p",{children:Object(f.jsx)("small",{children:"* Se realizar\xe1n sorteos individuales para cada premio."})})]})}),Object(f.jsx)("section",{className:"block buy-tickets-block",ref:q,children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)("h2",{children:"Adquirir tickets"}),Object(f.jsxs)(m.a,{inline:!0,className:"buy-tickets-form",children:[Object(f.jsx)(m.a.Label,{className:"my-1 mr-2",children:"\xbfCuantos tickets deseas adquirir?"}),Object(f.jsxs)(m.a.Control,{as:"select",className:"my-1 mr-sm-2",custom:!0,onChange:function(e){var a=+e.target.value;gtag("event","tickets_selected",{event_category:"engagement",event_label:"Selected Tickets",value:a}),w(a)},children:[Object(f.jsx)("option",{value:"",children:"Cant. de tickets"}),Object(f.jsx)("option",{value:"5",children:"1"}),Object(f.jsx)("option",{value:"10",children:"3"}),Object(f.jsx)("option",{value:"20",children:"6"}),Object(f.jsx)("option",{value:"30",children:"9"}),Object(f.jsx)("option",{value:"40",children:"12"}),Object(f.jsx)("option",{value:"50",children:"15"}),Object(f.jsx)("option",{value:"60",children:"18"}),Object(f.jsx)("option",{value:"70",children:"21"}),Object(f.jsx)("option",{value:"80",children:"24"}),Object(f.jsx)("option",{value:"90",children:"27"}),Object(f.jsx)("option",{value:"100",children:"30"}),Object(f.jsx)("option",{value:"200",children:"60"}),Object(f.jsx)("option",{value:"300",children:"90"}),Object(f.jsx)("option",{value:"400",children:"120"}),Object(f.jsx)("option",{value:"500",children:"150"})]}),S>0&&Object(f.jsxs)(m.a.Label,{className:"my-1 mr-2",children:["Entonces, el valor que necesitas transferir es de ",Object(f.jsxs)("strong",{className:"ml-2 text-white",children:["S./ ",S,",00"]})]})]})]})}),Object(f.jsx)("section",{className:"block accounts-block",children:Object(f.jsxs)(d.a,{children:[Object(f.jsxs)("p",{children:["Para participar de la rifa, haga una transferencia a una de las cuentas abajo y envie el voucher de pago y su nombre para ",Object(f.jsx)("a",{href:"mailto:todos.por.thiago@gmail.com",children:"todos.por.thiago@gmail.com"}),"."]}),Object(f.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Yape"}),Object(f.jsx)("th",{children:"BCP"}),Object(f.jsx)("th",{children:"Interbank"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"933401577"}),Object(f.jsxs)("td",{children:["Sandy Cotito Asalde",Object(f.jsx)("br",{}),"N 191 37734388041"]}),Object(f.jsxs)("td",{children:["6433103470402",Object(f.jsx)("br",{}),"CCI 003 643 01310347040246"]})]})})]})]})}),Object(f.jsxs)(p.a,{show:t,onHide:F,centered:!0,size:"lg",children:[Object(f.jsx)(p.a.Header,{closeButton:!0,children:Object(f.jsx)(p.a.Title,{children:"Todos por Thiago"})}),Object(f.jsxs)(p.a.Body,{children:[Object(f.jsxs)("p",{children:["Rifa Solidaria - Todos por Thiago es una iniciativa para ayudar al ni\xf1o Thiaguito y su familia.",Object(f.jsx)("br",{}),"El tiene Fibrosis Qu\xedstica; una enfermedad gen\xe9tica que afecta fuertemente los pulmones, el p\xe1ncreas, el h\xedgado y los intestinos."]}),Object(f.jsx)("p",{children:"Esta enfermedad no tiene cura, solo tratamientos avanzados y costosos que permiten que el paciente que la padece tenga una mejor calidad de vida."}),Object(f.jsx)("p",{children:"Lamentablemente, los pap\xe1s de Thiaguito no cuentan con los medios econ\xf3micos para solventar estos tratamientos y la falta de ello ha hecho con que Thiago termine en el hospital, con fuertes infecciones y sensaciones de ahogo."}),Object(f.jsx)("p",{children:"Para ayudar a la familia con los costos de estos tratamientos se ha organizado una rifa solidaria con lindos premios, los cuales fueron donados con mucho amor, para esta noble causa. Te invito a que participes. Cualquier ayuda es bienvenida."}),Object(f.jsx)("p",{children:Object(f.jsx)(x.a,{src:"https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/160242355_10160841175151258_7816022352069995779_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=FRSNL9CWTHgAX8NI5ei&_nc_ht=scontent.fbau3-1.fna&oh=32f5a69500401ae76d58ef1ffdcfa1da&oe=606FAEBB",fluid:!0})}),Object(f.jsxs)("p",{children:["El dinero debe ser depositado directamente a la cuenta de la se\xf1ora Sandy (mami de Thiago) y los vouchers de pago enviados al e-mail: ",Object(f.jsx)("a",{href:"mailto:todos.por.thiago@gmail.com",children:"todos.por.thiago@gmail.com"})]}),Object(f.jsxs)("p",{children:["Si vives en el extranjero tambi\xe9n puedes hacer tu donaci\xf3n a trav\xe9s de este link: ",Object(f.jsx)("a",{href:"https://www.gofundme.com/f/2zjt7-ayudenme-a-seguir-viviendo",target:"_blank",rel:"noreferrer",children:"GoFundMe - Ayudenme a Seguir Viviendo"})]}),Object(f.jsxs)("p",{children:['Pueden seguir la historia de Thiago por Facebook: "Ay\xfadenme a seguir viviendo" o por Instagram: ',Object(f.jsx)("a",{href:"https://instagram.com/ayudenme_a_seguirviviendo",target:"_blank",rel:"noreferrer",children:"@ayudenme_a_seguirviviendo"})]}),Object(f.jsx)("p",{children:"DIVULGUE, DONE, COMPARTA \u2764\ufe0f"})]}),Object(f.jsxs)(p.a.Footer,{children:[Object(f.jsx)(b.a,{variant:"outline-secondary",onClick:F,children:"No quiero apoyar ahora!"}),Object(f.jsx)(b.a,{variant:"primary",onClick:function(){c(!1),setTimeout((function(){z()}),500),gtag("event","modal_closed",{event_category:"engagement",event_label:"Closed Modal",value:"good_person"})},children:"Apoyar ahora!"})]})]})]})};t(21),t(37),t(33),t(34);var _=t(35),N=t(7);var T=function(){return Object(f.jsxs)(_.a,{children:[Object(f.jsx)("header",{className:"header",children:Object(f.jsx)("h1",{children:"Todos por Thiago"})}),Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{exact:!0,path:"/",children:Object(f.jsx)(y,{})}),Object(f.jsx)(N.a,{exact:!0,path:"/todos-por-thiago",children:Object(f.jsx)(y,{})})]})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),s(e),c(e),n(e),i(e)}))};t(53);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),k()}},[[54,1,2]]]);
//# sourceMappingURL=main.9e05ec7b.chunk.js.map