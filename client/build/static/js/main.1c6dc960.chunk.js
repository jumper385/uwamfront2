(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{210:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(37),o=n.n(c),i=n(6),l=n(11),u=n(12),s=n(14),p=n(13),f=n(15),m=n(2),b=n(21),h=n(24),d=n(3),g=n(22);function O(){var t=Object(m.a)(["\n  border-radius:12pt\n  box-sizing:border-box\n  display:flex\n  align-items:center\n  justify-content:center\n  box-shadow: 0px 2pt 4pt rgba(0,0,0,.18);\n  overflow:hidden\n"]);return O=function(){return t},t}function E(){var t=Object(m.a)(["\n  width:100%\n  height:auto\n  margin:0\n  padding:0\n"]);return E=function(){return t},t}var j=d.a.img(E()),y=d.a.div(O()),v=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(y,null,a.a.createElement(j,{src:"https://images.unsplash.com/photo-1554744512-5a8ef212982d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}))}}]),e}(a.a.Component),w=n(7),P=n.n(w),x=n(23),T=n(16),D=n.n(T);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(){var t=Object(m.a)(["\n    border:none\n    height:100%\n    display:flex\n    align-items:center\n    justify-content:center\n    margin:0\n    height:24pt\n    width:24pt\n"]);return A=function(){return t},t}function I(){var t=Object(m.a)(["\n    font-weight:600\n    text-transform:uppercase\n"]);return I=function(){return t},t}function S(){var t=Object(m.a)(["\n    display:grid\n    grid-template-columns:1fr 1fr\n    grid-align-columns:center\n"]);return S=function(){return t},t}function _(){var t=Object(m.a)(["\n    display:grid\n    grid-template-columns: 3fr 1fr 1fr 1fr\n    border-top:1pt solid rgba(0,0,0,.18);\n    border-bottom:1pt solid rgba(0,0,0,.18);\n"]);return _=function(){return t},t}function k(){var t=Object(m.a)(["\n    text-decoration:none\n"]);return k=function(){return t},t}function L(){var t=Object(m.a)(["\n    text-decoration:none\n    display:grid\n    grid-template-columns: 3fr 1fr 1fr 1fr\n    color:rgba(0,0,0,.96);\n    align-items:center\n"]);return L=function(){return t},t}function R(){var t=Object(m.a)(["\n    padding:32pt\n    box-shadow: 0px 2pt 4pt rgba(0,0,0,.18);\n    border-radius:6pt\n"]);return R=function(){return t},t}var N=Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||"localhost:8080",U=d.a.div(R()),G=Object(d.a)(b.b)(L()),B=(Object(d.a)(b.b)(k()),d.a.div(_())),V=d.a.div(S()),z=d.a.p(I()),F=d.a.button(A()),M=function(t){var e=t.articles;console.log(t);var n=function(){var e=Object(x.a)(P.a.mark((function e(n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.name,e.next=4,D.a.delete("http://".concat(N,"/api/articles/").concat(r));case 4:e.sent&&t.DELETE_ARTICLE(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return e?e.map((function(t){return a.a.createElement(G,{key:t.shortid,to:"/articles/".concat(t.shortid)},a.a.createElement("p",null,t.title),a.a.createElement("p",null,t.category),a.a.createElement("p",null,t.shortid),a.a.createElement(V,null,a.a.createElement(F,{className:"material-icons",name:t.shortid,onClick:n},"delete_forever"),a.a.createElement(b.b,{className:"material-icons",to:"/editArticle/".concat(t.shortid)},"create")))})):"loading articles..."},W=function(t){function e(){var t,n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).componentDidMount=Object(x.a)(P.a.mark((function t(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("http://".concat(N,"/api/articles"));case 2:e=t.sent,console.log(n.props),n.props.UPDATE_ARTICLES(e);case 5:case"end":return t.stop()}}),t)}))),n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(U,null,a.a.createElement(B,null,a.a.createElement(z,null,"Article Title"),a.a.createElement(z,null,"Cateogory"),a.a.createElement(z,null,"ID"),a.a.createElement(z,null,"Actions")),a.a.createElement(M,this.props)))}}]),e}(r.Component),X=Object(g.b)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)}),(function(t){return{UPDATE_ARTICLES:function(e){return t({type:"UPDATE_ARTICLES",payload:{articles:e.data}})},DELETE_ARTICLE:function(e){return t({type:"DELETE_ARTICLE",payload:e})},GET_STATE:function(){return t({type:"GET_STATE"})}}}))(W),J=n(39),q=n.n(J);function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $(){var t=Object(m.a)(["\n    img { \n        width:100%\n        height:auto\n        max-height:1080px\n    }\n"]);return $=function(){return t},t}var K=Object(d.a)(q.a)($()),Q=Object(g.b)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)}),(function(t){return{GET_STATE:function(){return t({type:"GET_STATE"})}}}))((function(t){if(t.GET_STATE(),t.articles){var e=t.articles.filter((function(e){e.shortid;return e.shortid==t.match.params.id}))[0];return console.log(e),a.a.createElement("div",null,a.a.createElement("h1",null,e.title),a.a.createElement("p",null,e.category),a.a.createElement(K,{source:e.article}))}return"finding article..."})),Y=n(29),Z=Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||"localhost:8080",tt=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(p.a)(e).call(this,t))).onInputChange=function(t){n.setState(Object(i.a)({},t.target.name,t.target.value))},n.onFormSubmit=function(){var t=Object(x.a)(P.a.mark((function t(e){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),console.log(n.state&&n.state.articlid||"creating new article"),!n.state.articleId){t.next=9;break}return console.log(n.state),t.next=6,D.a.put("http://".concat(Z,"/api/articles/").concat(n.state.articlId),n.state);case 6:t.sent,t.next=13;break;case 9:return t.next=11,D.a.post("http://".concat(Z,"/api/articles"),n.state);case 11:r=t.sent,n.setState({articleId:r.data.shortid});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.onInputChange=n.onInputChange.bind(Object(Y.a)(n)),n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Create an Article"),a.a.createElement("p",null,this.state?this.state.articleId||"no article id":"start making an article first"),a.a.createElement("form",{onSubmit:this.onFormSubmit},a.a.createElement("p",null,"Article Title"),a.a.createElement("input",{name:"title",onChange:this.onInputChange,type:"text"}),a.a.createElement("p",null,"Article Category"),a.a.createElement("input",{name:"category",onChange:this.onInputChange,type:"text"}),a.a.createElement("p",null,"Article"),a.a.createElement("textarea",{name:"article",onChange:this.onInputChange}),a.a.createElement("br",null),a.a.createElement("input",{type:"submit"})))}}]),e}(a.a.Component);function et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?et(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):et(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function rt(){var t=Object(m.a)(["\n    overflow-y:scroll\n    height:100vh\n    img { \n        width:100%\n        height:auto\n        max-height:1080px\n    }\n"]);return rt=function(){return t},t}function at(){var t=Object(m.a)(["\n    display:grid\n    grid-template-columns:1fr 1fr\n"]);return at=function(){return t},t}var ct=Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||"localhost:8080",ot=d.a.div(at()),it=Object(d.a)(q.a)(rt()),lt=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(p.a)(e).call(this,t))).componentDidMount=Object(x.a)(P.a.mark((function t(){var e,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params,console.log(e),t.next=4,D.a.get("http://".concat(ct,"/api/articles/").concat(e.id));case 4:r=t.sent,console.log(r.data),n.setState({articleId:r.data.shortid}),n.setState(nt({},r.data));case 8:case"end":return t.stop()}}),t)}))),n.onInputChange=function(t){n.setState(Object(i.a)({},t.target.name,t.target.value))},n.onFormSubmit=function(){var t=Object(x.a)(P.a.mark((function t(e){var r,a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),console.log(n.state&&n.state.articlId||"creating new article"),!n.state.articleId){t.next=10;break}return console.log(n.state),t.next=6,D.a.put("http://".concat(ct,"/api/articles/").concat(n.state.articleId),n.state);case 6:r=t.sent,console.log(r),t.next=14;break;case 10:return t.next=12,D.a.post("http://".concat(ct,"/api/articles"),n.state);case 12:a=t.sent,n.setState({articleId:a.data.shortid});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.onInputChange=n.onInputChange.bind(Object(Y.a)(n)),n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(ot,null,a.a.createElement("div",null,a.a.createElement("h1",null,"Create an Article"),a.a.createElement("p",null,this.state?this.state.articleId||"no article id":"start making an article first"),a.a.createElement("form",{onSubmit:this.onFormSubmit},a.a.createElement("p",null,"Article Title"),a.a.createElement("input",{name:"title",onChange:this.onInputChange,value:this.state?this.state.title||"waiting for values":"ummm...",type:"text"}),a.a.createElement("p",null,"Article Category"),a.a.createElement("input",{name:"category",onChange:this.onInputChange,value:this.state?this.state.category||"waiting for values":"ummm...",type:"text"}),a.a.createElement("p",null,"Article"),a.a.createElement("textarea",{name:"article",value:this.state?this.state.article||"waiting for values":"ummm...",onChange:this.onInputChange}),a.a.createElement("br",null),a.a.createElement("input",{type:"submit"}))),a.a.createElement("div",null,a.a.createElement("h1",null,"Preview"),a.a.createElement(it,{source:this.state?this.state.article||"no article":"ahhh...."})))}}]),e}(a.a.Component);function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function st(){var t=Object(m.a)(["\n  margin:0\n  width:54pt\n  height:54pt\n  display:flex\n  align-items:center\n  justify-content:center\n  border:none\n"]);return st=function(){return t},t}function pt(){var t=Object(m.a)(["\n  margin:32pt\n  position:fixed\n  bottom:0\n  right:0\n  display:grid\n  grid-template-columns:1fr 1fr\n  grid-column-gap:6pt\n  border-radius:27pt\n  overflow:hidden\n"]);return pt=function(){return t},t}function ft(){var t=Object(m.a)(["\n  font-size:12pt\n  text-align:center\n  height:72pt\n  margin-top:24pt\n"]);return ft=function(){return t},t}function mt(){var t=Object(m.a)(["\n  text-decoration:none;\n  text-transform:uppercase;\n  color:black;\n  letter-spacing:.25em\n  text-align:center\n"]);return mt=function(){return t},t}function bt(){var t=Object(m.a)(["\n  height:64pt\n  display:flex\n  align-items:center\n  justify-content:space-around\n  font-weight:600\n"]);return bt=function(){return t},t}function ht(){var t=Object(m.a)(["\n  font-size:36pt\n  margin:0\n  letter-spacing:.2em\n  text-align:center\n  text-transform:uppercase; \n  margin:24pt 0;\n"]);return ht=function(){return t},t}function dt(){var t=Object(m.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap');\n  font-size: 12pt\n  font-family: 'Poppins', sans-serif;\n  padding:0 32pt;\n  letter-spacing:.05em\n"]);return dt=function(){return t},t}var gt=d.a.div(dt()),Ot=d.a.h1(ht()),Et=d.a.nav(bt()),jt=Object(d.a)(b.b)(mt()),yt=d.a.footer(ft()),vt=d.a.div(pt()),wt=d.a.button(st()),Pt=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(b.a,null,a.a.createElement(gt,{className:"App"},a.a.createElement(vt,null,a.a.createElement(wt,null,a.a.createElement(b.b,{to:"/newArticle"},a.a.createElement("i",{className:"material-icons"},"post_add"))),a.a.createElement(wt,null,a.a.createElement(b.b,{to:"/"},a.a.createElement("i",{className:"material-icons"},"add_a_photo")))),a.a.createElement(Ot,null,"UWA Motorsports"),a.a.createElement(Et,null,a.a.createElement(jt,{to:"/"},"Home"),a.a.createElement(jt,{to:"/articles"},"Articles"),a.a.createElement(jt,{to:"/gallery"},"Gallery")),a.a.createElement(h.c,null,a.a.createElement(h.a,{exact:!0,path:"/"},a.a.createElement(v,null)),a.a.createElement(h.a,{exact:!0,path:"/articles"},a.a.createElement(X,null)),a.a.createElement(h.a,{path:"/gallery"},a.a.createElement("h1",null,"Gallery")),a.a.createElement(h.a,{path:"/articles/:id",component:Q}),a.a.createElement(h.a,{path:"/newArticle"},a.a.createElement(tt,null)),a.a.createElement(h.a,{path:"/editArticle/:id",component:lt})),a.a.createElement(yt,null,a.a.createElement("p",null,"UWA Motorsports 2019"))))}}]),e}(a.a.Component),xt=Object(g.b)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)}))(Pt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Tt=n(38);function Dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Dt(n,!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var At=Object(Tt.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_ARTICLES":return t=Ct({state:t},e.payload);case"GET_STATE":return t;case"DELETE_ARTICLE":var n=t.articles.filter((function(t){return t.shortid!==e.payload})),r={articles:n};return t=Ct({},t,{},r);default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(a.a.createElement(g.a,{store:At},a.a.createElement(xt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},86:function(t,e,n){t.exports=n(210)}},[[86,1,2]]]);
//# sourceMappingURL=main.1c6dc960.chunk.js.map