(this["webpackJsonptodos-por-thiago"]=this["webpackJsonptodos-por-thiago"]||[]).push([[0],{22:function(e,a,s){},27:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s.n(t),i=s(9),n=s.n(i),r=(s(22),s(12)),o=s(30),l=s(31),d=s(16),j=s(36),h=s(37),b=s(35),u=s(32),O=s(34),x=s(33),m=s(1);var p=function(){var e=Object(t.useState)(!1),a=Object(r.a)(e,2),s=a[0],c=a[1],i=Object(t.useState)([]),n=Object(r.a)(i,2),p=n[0],v=n[1],f=Object(t.useState)(0),g=Object(r.a)(f,2),y=g[0],N=g[1],T=function(){return c(!1)};return Object(t.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){v(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("header",{className:"header",children:Object(m.jsx)("h1",{children:"Todos por Thiago"})}),Object(m.jsx)("section",{className:"funding-stats",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(l.a,{children:Object(m.jsx)(d.a,{children:Object(m.jsxs)("header",{className:"funding-stats-header mt-5 mb-5",children:[Object(m.jsx)("h2",{children:"Rifa Solidaria"}),Object(m.jsx)("p",{children:"Todos por Thiago es una iniciativa para ayudar al ni\xf1o Thiaguito y su familia. El tiene Fibrosis Qu\xedstica; una enfermedad gen\xe9tica que afecta fuertemente los pulmones, el p\xe1ncreas, el h\xedgado y los intestinos."}),Object(m.jsx)(j.a,{variant:"outline-primary",size:"sm",onClick:function(){return c(!0)},children:"Leer m\xe1s"})]})})}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a,{xs:{order:1},sm:{order:0},children:Object(m.jsxs)("div",{className:"block prizes-block",children:[Object(m.jsx)("h2",{children:"Premios"}),Object(m.jsxs)("ul",{className:"prizes-list",children:[Object(m.jsx)("li",{children:"Cafetera"}),Object(m.jsx)("li",{children:"Licuadora Oster"}),Object(m.jsx)("li",{children:"Cocina El\xe9ctrica"}),Object(m.jsx)("li",{children:"Waflera"}),Object(m.jsx)("li",{children:"Hervidor de Huevos"}),Object(m.jsx)("li",{children:"Plancha"}),Object(m.jsx)("li",{children:"Licuadora Manual"}),Object(m.jsx)("li",{children:"Colonia L'Bel"}),Object(m.jsx)("li",{children:"Manicure"}),Object(m.jsx)("li",{children:"Pedicure"})]}),Object(m.jsx)("p",{children:Object(m.jsx)("small",{children:"* Se realizar\xe1n sorteos individuales para cada premio."})})]})}),Object(m.jsx)(d.a,{xs:{order:0},sm:{order:1},children:Object(m.jsxs)("div",{className:"funding-stats-details mb-5",children:[Object(m.jsx)(h.a,{now:p.funded/4675*100,className:"mb-4"}),Object(m.jsxs)("div",{className:"stat stat-primary",children:[Object(m.jsxs)("div",{className:"stat-value",children:[Object(m.jsx)("small",{children:"S./"})," ",p.funded,",00"]}),Object(m.jsxs)("div",{className:"stat-label",children:["recaudados del objetivo de ",Object(m.jsx)("small",{children:"S./"})," 5.000,00"]})]}),Object(m.jsxs)("div",{className:"stat",children:[Object(m.jsx)("div",{className:"stat-value",children:p.tickets_sold}),Object(m.jsx)("div",{className:"stat-label",children:"tickets reservados"})]}),Object(m.jsxs)("div",{className:"stat",children:[Object(m.jsx)("div",{className:"stat-value",children:p.supporters}),Object(m.jsx)("div",{className:"stat-label",children:"personas apoyando"})]}),Object(m.jsxs)("div",{className:"stat",children:[Object(m.jsxs)("div",{className:"stat-value",children:[function(){var e=new Date("2021-04-31T00:00:00"),a=new Date,s=e.getTime()-a.getTime();return Math.floor(s/1e3/60/60/24)}()," d\xedas"]}),Object(m.jsx)("div",{className:"stat-label",children:"para el sorteo"})]})]})})]})]})}),Object(m.jsx)("section",{className:"block buy-tickets-block",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)("h2",{children:"Adquirir tickets"}),Object(m.jsxs)(b.a,{inline:!0,className:"buy-tickets-form",children:[Object(m.jsx)(b.a.Label,{className:"my-1 mr-2",children:"\xbfCuantos tickets deseas adquirir?"}),Object(m.jsxs)(b.a.Control,{as:"select",className:"my-1 mr-sm-2",custom:!0,onChange:function(e){var a=+e.target.value;N(a)},children:[Object(m.jsx)("option",{value:"",children:"Qtd. de tickets"}),Object(m.jsx)("option",{value:"5",children:"1"}),Object(m.jsx)("option",{value:"10",children:"3"}),Object(m.jsx)("option",{value:"20",children:"6"}),Object(m.jsx)("option",{value:"30",children:"9"}),Object(m.jsx)("option",{value:"40",children:"12"}),Object(m.jsx)("option",{value:"50",children:"15"}),Object(m.jsx)("option",{value:"60",children:"18"}),Object(m.jsx)("option",{value:"70",children:"21"}),Object(m.jsx)("option",{value:"80",children:"24"}),Object(m.jsx)("option",{value:"90",children:"27"}),Object(m.jsx)("option",{value:"100",children:"30"}),Object(m.jsx)("option",{value:"200",children:"60"}),Object(m.jsx)("option",{value:"300",children:"90"}),Object(m.jsx)("option",{value:"400",children:"120"}),Object(m.jsx)("option",{value:"500",children:"150"})]}),y>0&&Object(m.jsxs)(b.a.Label,{className:"my-1 mr-2",children:["Entonces, el valor que necesitas trasnferir es de ",Object(m.jsxs)("strong",{className:"ml-2 text-white",children:["S./ ",y,",00"]})]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{children:["Para participar de la rifa, haga una transferencia a una de las cuentas abajo y envie el voucher de pago y su nombre para ",Object(m.jsx)("a",{href:"mailto:todos.por.thiago@gmail.com",children:"todos.por.thiago@gmail.com"}),"."]}),Object(m.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm",size:"sm",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Yape"}),Object(m.jsx)("th",{children:"BCP"}),Object(m.jsx)("th",{children:"Interbank"})]})}),Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"933401577"}),Object(m.jsxs)("td",{children:["Sandy Cotito Asalde",Object(m.jsx)("br",{}),"N 191 37734388041"]}),Object(m.jsxs)("td",{children:["6433103470402",Object(m.jsx)("br",{}),"CCI 003 643 01310347040246"]})]})})]})]})}),Object(m.jsxs)(O.a,{show:s,onHide:T,centered:!0,size:"lg",children:[Object(m.jsx)(O.a.Header,{closeButton:!0,children:Object(m.jsx)(O.a.Title,{children:"Todos por Thiago"})}),Object(m.jsxs)(O.a.Body,{children:[Object(m.jsxs)("p",{children:["Rifa Solidaria - Todos por Thiago es una iniciativa para ayudar al ni\xf1o Thiaguito y su familia.",Object(m.jsx)("br",{}),"El tiene Fibrosis Qu\xedstica; una enfermedad gen\xe9tica que afecta fuertemente los pulmones, el p\xe1ncreas, el h\xedgado y los intestinos."]}),Object(m.jsx)("p",{children:"Esta enfermedad no tiene cura, solo tratamientos avanzados y costosos que permiten que el paciente que la padece tenga una mejor calidad de vida."}),Object(m.jsx)("p",{children:"Lamentablemente, los pap\xe1s de Thiaguito no cuentan con los medios econ\xf3micos para solventar estos tratamientos y la falta de ello ha hecho con que Thiago termine en el hospital, con fuertes infecciones y sensaciones de ahogo."}),Object(m.jsx)("p",{children:"Para ayudar a la familia con los costos de estos tratamientos se ha organizado una rifa solidaria con lindos premios, los cuales fueron donados con mucho amor, para esta noble causa. Te invito a que participes. Cualquier ayuda es bienvenida."}),Object(m.jsx)("p",{children:Object(m.jsx)(x.a,{src:"https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/160242355_10160841175151258_7816022352069995779_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=FRSNL9CWTHgAX8NI5ei&_nc_ht=scontent.fbau3-1.fna&oh=32f5a69500401ae76d58ef1ffdcfa1da&oe=606FAEBB",fluid:!0})}),Object(m.jsxs)("p",{children:["El dinero debe ser depositado directamente a la cuenta de la se\xf1ora Sandy (mami de Thiago) y los vouchers de pago enviados al e-mail: ",Object(m.jsx)("a",{href:"mailto:todos.por.thiago@gmail.com",children:"todos.por.thiago@gmail.com"})]}),Object(m.jsxs)("p",{children:["Si vives en el extranjero tambi\xe9n puedes hacer tu donaci\xf3n a trav\xe9s de este link: ",Object(m.jsx)("a",{href:"https://www.gofundme.com/f/2zjt7-ayudenme-a-seguir-viviendo",target:"_blank",rel:"noreferrer",children:"GoFundMe - Ayudenme a Seguir Viviendo"})]}),Object(m.jsxs)("p",{children:['Pueden seguir la historia de Thiago por Facebook: "Ay\xfadenme a seguir viviendo" o por Instagram: ',Object(m.jsx)("a",{href:"https://instagram.com/ayudenme_a_seguirviviendo",target:"_blank",rel:"noreferrer",children:"@ayudenme_a_seguirviviendo"})]}),Object(m.jsx)("p",{children:"DIVULGUE, DONE, COMPARTA \u2764\ufe0f"})]}),Object(m.jsxs)(O.a.Footer,{children:[Object(m.jsx)(j.a,{variant:"outline-secondary",onClick:T,children:"No quiero apoyar ahora!"}),Object(m.jsx)(j.a,{variant:"primary",onClick:function(){return c(!1)},children:"Apoyar ahora!"})]})]})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,n=a.getTTFB;s(e),t(e),c(e),i(e),n(e)}))};n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.38760d39.chunk.js.map