(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(3),s=n.n(c),a=n(7),o=n(4),l=n(5),i=n(9),r=n(8),u=n(1),d=n.n(u),h=n(6),b=n.n(h),m=(n(14),n(15),n(0)),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={selectedGoods:["Jam"]},t.changeTitle=function(t){return 0===t.length?"No goods selected":1===t.length?"".concat(t[0]," is selected"):t.reduce((function(e,n,c){return c===t.length-1?"".concat(e," and ").concat(n," are selected"):c===t.length-2?"".concat(e," ").concat(n):"".concat(e," ").concat(n,",")}),"")},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.selectedGoods;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{className:"title",children:[this.changeTitle(e),e.length>0&&Object(m.jsx)("button",{className:" button is-danger is-light is-small ml-3 mt-1",type:"button",onClick:function(){return t.setState({selectedGoods:[]})},children:"X"})]}),Object(m.jsx)("ul",{children:g.map((function(n){return Object(m.jsxs)("li",{className:b()("mb-4","p-2",{"has-background-warning":e.includes(n)}),children:[n,e.includes(n)?Object(m.jsx)("button",{className:" button is-danger is-light is-small ml-3",type:"button",onClick:function(){t.setState({selectedGoods:e.filter((function(t){return t!==n}))})},children:"Remove"}):Object(m.jsx)("button",{className:" button is-success is-light is-small ml-3",type:"button",onClick:function(){t.setState({selectedGoods:[].concat(Object(a.a)(e),[n])})},children:"Add"})]},n)}))})]})}}]),n}(d.a.Component),p=j;s.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cacf1842.chunk.js.map