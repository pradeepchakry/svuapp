(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{187:function(e,t,n){},188:function(e,t,n){},492:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n.n(c),i=n(9),s=n.n(i),l=(n(187),n(168)),o=n(169),d=n(176),j=n(175),u=(n.p,n(188),n(189),n(57)),b=n(12),p=n(60),m=n.n(p),h=n(88),x=n(35),g=n(531),O=n(539),f=n(543),v=n(542),y=n(537),C=n(540),w=n(541),D=n(538),S=n(549),N=n(92),k=n.n(N),T=n(535),F=n(536),W=Object(g.a)((function(e){return{table:{minWidth:600},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},paper:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px",height:"100%",width:"99%",marginTop:e.spacing(7)},link:{color:"rgba(0,0,0,0.65)",textDecoration:"none",marginLeft:"10%",alignSelf:"flex-start","&:hover":{color:"rgba(0,0,0,1)"}}}}));function I(){var e=W(),t=r.a.useState([]),n=Object(x.a)(t,2),c=n[0],i=n[1],s=r.a.useState(!0),l=Object(x.a)(s,2),o=l[0],d=l[1],j=!0;function b(){return(b=Object(h.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employee");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o&&(!function(){b.apply(this,arguments)}(),d(!1)),c.length>0&&(j=!1),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(S.a,{className:e.avater,children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(T.a,{component:"h1",variant:"h5",children:"Employee Directory"}),j?Object(a.jsx)(F.a,{}):Object(a.jsx)(y.a,{style:{width:"80%",margin:"0 10px"},component:D.a,children:Object(a.jsxs)(O.a,{className:e.table,"aria-label":"simple table",children:[Object(a.jsx)(C.a,{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(v.a,{align:"center",children:"Name"}),Object(a.jsx)(v.a,{align:"center",children:"Department"}),Object(a.jsx)(v.a,{align:"center",children:"Gender"}),Object(a.jsx)(v.a,{align:"center",children:"DOB"})]})}),Object(a.jsx)(f.a,{children:null===c||void 0===c?void 0:c.map((function(e){return Object(a.jsxs)(w.a,{children:[Object(a.jsx)(v.a,{align:"center",children:e.name}),Object(a.jsx)(v.a,{align:"center",children:e.department}),Object(a.jsx)(v.a,{align:"center",children:e.gender}),Object(a.jsx)(v.a,{align:"center",children:e.dob})]},e.name)}))})]})}),Object(a.jsx)(u.b,{className:e.link,to:"/",children:Object(a.jsx)(T.a,{align:"left",children:"\u2190 Head back to save data"})})]})}var L=n(544),P=n(545),E=n(546),q=n(547),B=n(548),J=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(7),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"}}}));function V(){var e=J(),t=r.a.useState(!0),n=Object(x.a)(t,2),c=n[0],i=n[1],s=r.a.useState(new Date("1998-04-02T21:11:54")),l=Object(x.a)(s,2),o=l[0],d=l[1],j=r.a.useState(""),b=Object(x.a)(j,2),p=b[0],g=b[1],O=r.a.useState(""),f=Object(x.a)(O,2),v=f[0],y=f[1],C=r.a.useState(""),w=Object(x.a)(C,2),D=w[0],N=w[1],F=r.a.useState("Nothing saved in the session"),W=Object(x.a)(F,2),I=W[0],V=W[1];function G(){return(G=Object(h.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/employee",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a.id),V(a.id?"Data successfully updated":"Data updation failed");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c&&i(!1),Object(a.jsxs)(L.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(P.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(S.a,{className:e.avatar,children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(T.a,{component:"h1",variant:"h5",children:"Employee Directory"}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(a.jsxs)(E.a,{container:!0,spacing:2,children:[Object(a.jsx)(E.a,{item:!0,xs:12,children:Object(a.jsx)(q.a,{variant:"outlined",required:!0,fullWidth:!0,id:"name",value:p,label:"Name",name:"name",autoComplete:"name",onChange:function(e){return g(e.target.value)}})}),Object(a.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(q.a,{autoComplete:"department",name:"department",variant:"outlined",required:!0,fullWidth:!0,value:v,id:"department",label:"Department",onChange:function(e){return y(e.target.value)}})}),Object(a.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(q.a,{variant:"outlined",name:"gender",required:!0,fullWidth:!0,value:D,id:"gender",label:"Gender",autoComplete:"gender",onChange:function(e){return N(e.target.value)}})}),Object(a.jsx)(E.a,{item:!0,xs:12,children:Object(a.jsx)(q.a,{id:"date",lablel:"Date of birth",type:"date",defaultValue:"1998-04-02",className:e.textField,InputLabelProps:{shrink:!0},onChange:function(e){return d(e)}})})]}),Object(a.jsx)(B.a,{fullWidth:!0,variant:"contained",color:"primary",preventDefault:!0,className:e.submit,onClick:function(e){console.log(p),console.log(v),console.log(D),console.log({selectedDate:o}),function(e){G.apply(this,arguments)}({name:p,department:v,gender:D,dob:o}),g(""),y(""),N("")},children:"Save"}),Object(a.jsx)(E.a,{container:!0,justify:"center",children:Object(a.jsx)(E.a,{item:!0,children:Object(a.jsx)(u.b,{to:"/view",children:"View Employee Records"})})})]}),Object(a.jsxs)(T.a,{style:{margin:7},variant:"body1",children:["status: ",I]})]})]})}var G=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",component:V}),Object(a.jsx)(b.a,{exact:!0,path:"/view",component:I})]})}}]),n}(r.a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,551)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),R()}},[[492,1,2]]]);
//# sourceMappingURL=main.00529bf0.chunk.js.map