(this.webpackJsonpsourceoflove=this.webpackJsonpsourceoflove||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),l=a.n(r),s=(a(36),a(26)),o=a(27),i=a(30),u=a(29),m=(a(37),a(1)),p=a(10),f=a(9),d=a.n(f),h=function(e){var t=e.post,a=function e(t){return t.indexOf("&#8217;")>=0?e(t.replace("&#8217;","'")):t.replace("<p>","").replace("[&hellip;]</p>","...")}(t.excerpt);return c.a.createElement("div",{className:"article"},c.a.createElement("a",{href:"#/blog/".concat(t.ID),className:"blackLink"},t.featured_image?c.a.createElement("img",{style:{width:"auto",height:"300px"},className:"img-responsive webpic",alt:"article header",src:t.featured_image}):"",c.a.createElement("h1",{className:"text-center"},t.title),c.a.createElement("div",{className:"content"},a)))},g=function(){var e,t=Object(n.useState)(null),a=Object(p.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){d.a.get("http://public-api.wordpress.com/rest/v1/sites/mysourceoflove.wordpress.com/posts").then((function(e){return l(e.data.posts)})).catch((function(e){return console.log(e)}))}),[]),e=r?r.map((function(e){return c.a.createElement(h,{key:e.ID,post:e})})):"Loading...",c.a.createElement("div",{className:"blog"},c.a.createElement("h1",{className:"sectionTitle"},"Articles"),e)},E=function(e){var t,a=Object(n.useState)(null),r=Object(p.a)(a,2),l=r[0],s=r[1];return Object(n.useEffect)((function(){d.a.get("http://public-api.wordpress.com/rest/v1/sites/mysourceoflove.wordpress.com/posts/"+e.match.params.id).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[e.match.params.id]),t=l?c.a.createElement("div",{className:"blog"},c.a.createElement("div",{className:"article"},l.featured_image?c.a.createElement("img",{className:"img-responsive webpic",alt:"article header",src:l.featured_image}):"",c.a.createElement("h1",{className:"text-center"},l.title),c.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:l.content}}))):"Loading...",c.a.createElement("div",{className:"article"},t)},v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={user:null,msgAlerts:[]},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(m.a,{exact:!0,path:"/blog",render:function(){return c.a.createElement(g,null)}}),c.a.createElement(m.a,{exact:!0,path:"/blog/:id",render:function(e){var t=e.match;return c.a.createElement(E,{match:t})}}))}}]),a}(n.Component),b=a(12),N=c.a.createElement(b.a,null,c.a.createElement(v,null));l.a.render(N,document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d8e295a4.chunk.js.map