(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/b8u":function(e,a,t){var r=t("STAE");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"33Wh":function(e,a,t){var r=t("yoRg"),n=t("eDl+");e.exports=Object.keys||function(e){return r(e,n)}},"6LWA":function(e,a,t){var r=t("xrYK");e.exports=Array.isArray||function(e){return"Array"==r(e)}},A2ZE:function(e,a,t){var r=t("HAuM");e.exports=function(e,a,t){if(r(e),void 0===a)return e;switch(t){case 0:return function(){return e.call(a)};case 1:return function(t){return e.call(a,t)};case 2:return function(t,r){return e.call(a,t,r)};case 3:return function(t,r,n){return e.call(a,t,r,n)}}return function(){return e.apply(a,arguments)}}},BIHw:function(e,a,t){"use strict";var r=t("I+eb"),n=t("or9q"),o=t("ewvW"),l=t("UMSQ"),i=t("ppGB"),s=t("ZfDv");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,a=o(this),t=l(a.length),r=s(a,0);return r.length=n(r,a,a,t,0,void 0===e?1:i(e)),r}})},FNfD:function(e,a,t){"use strict";t.r(a);t("BIHw"),t("QGkA");var r=t("dI71"),n=t("q1tI"),o=t.n(n),l=t("a8qA"),i=t("6j4A"),s=t("JX7q"),c=t("wx14"),u=t("zLVn"),m=t("TSYQ"),d=t.n(m),f=t("vUet"),p=t("YdCC"),h=t("U1MP"),b=t("Wzyw"),v=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,l=e.as,i=void 0===l?"img":l,s=Object(u.a)(e,["bsPrefix","className","variant","as"]),m=Object(f.a)(t,"card-img");return o.a.createElement(i,Object(c.a)({ref:a,className:d()(n?m+"-"+n:m,r)},s))}));v.displayName="CardImg",v.defaultProps={variant:null};var y=v,g=Object(h.a)("h5"),E=Object(h.a)("h6"),j=Object(p.a)("card-body"),w=Object(p.a)("card-title",{Component:g}),O=Object(p.a)("card-subtitle",{Component:E}),N=Object(p.a)("card-link",{Component:"a"}),x=Object(p.a)("card-text",{Component:"p"}),k=Object(p.a)("card-header"),A=Object(p.a)("card-footer"),S=Object(p.a)("card-img-overlay"),M=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.bg,i=e.text,s=e.border,m=e.body,p=e.children,h=e.as,v=void 0===h?"div":h,y=Object(u.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(f.a)(t,"card"),E=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return o.a.createElement(b.a.Provider,{value:E},o.a.createElement(v,Object(c.a)({ref:a},y,{className:d()(r,g,l&&"bg-"+l,i&&"text-"+i,s&&"border-"+s)}),m?o.a.createElement(j,null,p):p))}));M.displayName="Card",M.defaultProps={body:!1},M.Img=y,M.Title=w,M.Subtitle=O,M.Body=j,M.Link=N,M.Text=x,M.Header=k,M.Footer=A,M.ImgOverlay=S;var P=M,I=t("zM5D"),W=t("qVI6"),T=t("Wbzz"),C=t("zoUl"),B=t.n(C),D=t("AINe"),H=t("dDCJ"),z=(t("Z5ya"),B.a["card-config"]),R=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={showModal:!1,name:"",imgPath:Object(T.c)("/course-data/staff/"+a.staffKey+"/profile_pic.png"),email:"",year:"",subheader:"",responses:[]},t.toggleModal=t.toggleModal.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){this.getBioData()},t.getBioData=function(){var e=this;Object(W.c)(this.props.staffKey).then((function(a){e.loadBioData(a)}))},t.loadBioData=function(e){var a=z.subheader,t=e.name,r=e[a],n=e.year,o=e.major,l=e.email,i=e.responses;this.setState({name:t,subheader:r,year:n,major:o,email:l,responses:i})},t.toggleModal=function(){var e=this.state.showModal;this.setState({showModal:!e})},t.render=function(){return void 0===this.state.name?null:o.a.createElement(P,{style:{width:"15rem"}},o.a.createElement(P.Img,{src:this.state.imgPath}),o.a.createElement(P.Body,null,o.a.createElement(P.Text,null,o.a.createElement("div",{className:"header"},this.state.name),o.a.createElement("div",{className:"role"},this.props.role),o.a.createElement("div",{className:"subheader"},this.state.subheader),o.a.createElement("div",{className:"staff-card-iconbar"},o.a.createElement(H.a,{placement:"top",overlay:o.a.createElement(D.a,{id:"tooltip-"+this.state.email},this.state.email)},o.a.createElement("a",{href:"mailto:"+this.state.email},o.a.createElement("span",{className:"material-icons"},"email"))),o.a.createElement(q,{toggleModal:this.toggleModal,showModal:this.state.showModal,name:this.state.name,email:this.state.email,role:this.props.role,year:this.state.year,major:this.state.major,subheader:this.state.subheader,imgPath:this.state.imgPath,responses:this.state.responses})))))},a}(o.a.Component);function q(e){var a=e.toggleModal,t=e.showModal,r=e.name,n=e.email,l=e.role,i=e.year,s=e.major,c=e.subheader,u=e.imgPath,m=e.responses;return o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{key:"header",placement:"top",overlay:o.a.createElement(D.a,{id:"tooltip-"+r},"bio")},o.a.createElement("span",{className:"material-icons",onClick:a},"person")),o.a.createElement(I.a,{show:t,onHide:a,size:"lg",centered:!0},o.a.createElement(I.a.Header,{className:"content-modal-header"},o.a.createElement(I.a.Title,null,o.a.createElement("div",{className:"bio-modal-header"},o.a.createElement("img",{src:u,alt:"a picture of "+r+" should go here."}),o.a.createElement("div",{className:"general-info"},o.a.createElement("div",{className:"name"},r),o.a.createElement("div",{className:"role"},l),o.a.createElement("div",{className:"email"},n),o.a.createElement("div",{className:"additional-info"},i),o.a.createElement("div",{className:"additional-info"},s),o.a.createElement("div",{className:"additional-info"},c))))),o.a.createElement(I.a.Body,null,function(e){if(!e)return;for(var a=[],t=z.questions,r=0;r<e.length;r++){var n=e[r];if(null!==n){var o=t[r];a.push(K(o,n))}}return a}(m))))}function K(e,a){return o.a.createElement("div",{className:"bio-response-section"},o.a.createElement("div",{className:"header"},e),o.a.createElement("div",{className:"body"},a))}t("lp/k");var L=function(e){function a(){return e.apply(this,arguments)||this}Object(r.a)(a,e);var t=a.prototype;return t.renderStaff=function(){return B.a.roles.map((function(e){var a=e.label;return e.people.map((function(e){return function(e,a){return console.log(e),console.log(a),o.a.createElement(R,{staffKey:a,role:e})}(a,e)}))})).flat()},t.render=function(){return o.a.createElement("div",null,o.a.createElement(i.a,null),o.a.createElement(l.a,null),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("h1",null,"Staff"),o.a.createElement("div",{className:"staff-section"},this.renderStaff())))},a}(o.a.Component);a.default=L},"G+Rx":function(e,a,t){var r=t("0GbY");e.exports=r("document","documentElement")},"N+g0":function(e,a,t){var r=t("g6v/"),n=t("m/L8"),o=t("glrk"),l=t("33Wh");e.exports=r?Object.defineProperties:function(e,a){o(e);for(var t,r=l(a),i=r.length,s=0;i>s;)n.f(e,t=r[s++],a[t]);return e}},QGkA:function(e,a,t){t("RNIs")("flat")},RNIs:function(e,a,t){var r=t("tiKp"),n=t("fHMY"),o=t("m/L8"),l=r("unscopables"),i=Array.prototype;null==i[l]&&o.f(i,l,{configurable:!0,value:n(null)}),e.exports=function(e){i[l][e]=!0}},STAE:function(e,a,t){var r=t("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},Z5ya:function(e,a,t){},ZfDv:function(e,a,t){var r=t("hh1v"),n=t("6LWA"),o=t("tiKp")("species");e.exports=function(e,a){var t;return n(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!n(t.prototype)?r(t)&&null===(t=t[o])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},fHMY:function(e,a,t){var r,n=t("glrk"),o=t("N+g0"),l=t("eDl+"),i=t("0BK2"),s=t("G+Rx"),c=t("zBJ4"),u=t("93I0"),m=u("IE_PROTO"),d=function(){},f=function(e){return"<script>"+e+"<\/script>"},p=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}var e,a;p=r?function(e){e.write(f("")),e.close();var a=e.parentWindow.Object;return e=null,a}(r):((a=c("iframe")).style.display="none",s.appendChild(a),a.src=String("javascript:"),(e=a.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F);for(var t=l.length;t--;)delete p.prototype[l[t]];return p()};i[m]=!0,e.exports=Object.create||function(e,a){var t;return null!==e?(d.prototype=n(e),t=new d,d.prototype=null,t[m]=e):t=p(),void 0===a?t:o(t,a)}},"lp/k":function(e,a,t){},or9q:function(e,a,t){"use strict";var r=t("6LWA"),n=t("UMSQ"),o=t("A2ZE"),l=function(e,a,t,i,s,c,u,m){for(var d,f=s,p=0,h=!!u&&o(u,m,3);p<i;){if(p in t){if(d=h?h(t[p],p,a):t[p],c>0&&r(d))f=l(e,a,d,n(d.length),f,c-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=d}f++}p++}return f};e.exports=l},tiKp:function(e,a,t){var r=t("2oRo"),n=t("VpIT"),o=t("UTVS"),l=t("kOOl"),i=t("STAE"),s=t("/b8u"),c=n("wks"),u=r.Symbol,m=s?u:u&&u.withoutSetter||l;e.exports=function(e){return o(c,e)||(i&&o(u,e)?c[e]=u[e]:c[e]=m("Symbol."+e)),c[e]}},zoUl:function(e,a){e.exports={roles:[{label:"Professor",people:["dan"]},{label:"Head TA",people:["yolanda","shannon"]},{label:"TA",people:["andrew","lam","bryant","dani","kellyann"]},{label:"Reader",people:["samhita","sarah","taroob"]},{label:"Tutor",people:["nick","gowri","vaibhav","deeksha"]},{label:"Academic Intern",people:["aditisharma","alaynamatthews","angelrodriguez","annaclary","arrushiagarwal","benjaminpierias","francisgeng","hyeonakim","jamescheng","jaspershine","jeffreyhuang","jennguyen","junyoungkim","madeleinelabute","manaarsalama","martingarcia-angel","mirandaaochi","nhuvu","paolanoun","randynguyen","rebeccahu","richeldhaliwal","rivkahbar-or","saadtootla","saruulamarbayar","yonsookim"]}],"card-config":{subheader:"pronouns",questions:["Where did you grow up? What was your path to Cal?","How much programming have you done? What languages?","What are your hobbies?","What are some of your talents and skills?","Have you done anything remarkable? Has anything memorable happened to you?","What commitments will be consuming your cycles this semester?"]}}}}]);
//# sourceMappingURL=component---src-pages-staff-jsx-a55e4791609289fa2afc.js.map