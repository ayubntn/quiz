(this["webpackJsonpmy-quiz"]=this["webpackJsonpmy-quiz"]||[]).push([[0],{31:function(n,e,t){"use strict";t.r(e);var s=t(1),r=t.n(s),i=t(19),a=t.n(i),c=t(8),o=t(9),h=t(11),p=t(10),u=t(6),j=t(2),d=t(0),l=function(n){Object(h.a)(t,n);var e=Object(p.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var n="\u3056\u3093\u306d\u3093\uff01";return this.props.solved&&(n="\u305b\u3044\u304b\u3044\uff01"),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:n}),Object(d.jsxs)("p",{children:["\u3053\u305f\u3048 ",this.props.data.options[this.props.data.rightAnswerIdx]]}),Object(d.jsx)("p",{children:this.props.data.description})]})}}]),t}(r.a.Component),b={shinkansen:"\u3057\u3093\u304b\u3093\u305b\u3093",dinosaur:"\u304d\u3087\u3046\u308a\u3085\u3046"},O=function(n){Object(h.a)(t,n);var e=Object(p.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var n=this,e=null;null!=this.props.answer&&(e=Object(d.jsx)(l,{data:this.props.data,solved:this.props.answer===this.props.data.rightAnswerIdx}));var t=this.props.data.options.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",name:"quiz",value:t,onChange:function(){return n.props.onChange(t)},checked:n.props.answer===t,disabled:null!=n.props.answer}),e]})},t)}));return Object(d.jsxs)("section",{children:[Object(d.jsxs)("p",{children:[b[this.props.type],"\u30af\u30a4\u30ba"]}),Object(d.jsxs)("h2",{children:["\u3060\u3044",this.props.number,"\u3082\u3093"]}),Object(d.jsx)("p",{children:this.props.data.question}),Object(d.jsx)("ul",{children:t}),e]})}}]),t}(r.a.Component),x=function(n){Object(h.a)(t,n);var e=Object(p.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var n,e,t,s=this,r=this.props.match.params,i=Number(r.id),a=Number(r.id)-1;n=1===i?Object(d.jsx)(u.b,{to:"/quiz",children:"\u3055\u3044\u3057\u3087"}):Object(d.jsx)(u.b,{to:"/"+this.props.type+"/"+(i-1),children:"\u307e\u3048"}),i===this.props.data.length?(e=Object(d.jsx)(u.b,{to:"/"+this.props.type+"/result",children:"\u3051\u3063\u304b"}),t=Object(d.jsx)(u.b,{to:"/"+this.props.type+"/result",children:"\u3051\u3063\u304b"})):(e=Object(d.jsx)(u.b,{to:"/"+this.props.type+"/"+(i+1),children:"\u3064\u304e"}),t=Object(d.jsx)(u.b,{to:"/"+this.props.type+"/"+(i+1),children:"\u3064\u304e"}));var c=this.props.answers.filter((function(n){return null!=n})).length;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[n,e]}),Object(d.jsx)(O,{number:i,type:this.props.type,data:this.props.data[a],answer:this.props.answers[a],onChange:function(n){return s.props.onChange(a,n)}}),null!=this.props.answers[a]?t:null,Object(d.jsx)("nav",{children:Object(d.jsx)("progress",{max:"100",value:c/this.props.data.length*100,children:c/this.props.data.length*100})})]})}}]),t}(r.a.Component);var f=function(n){var e=Object(j.f)();function t(t){n.resetAnswers(),e.push(t)}return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"\u30af\u30a4\u30ba\u306b\u3061\u3087\u3046\u305b\u3093\uff01"}),Object(d.jsx)("button",{onClick:function(){t("/shinkansen/1")},children:"\u3057\u3093\u304b\u3093\u305b\u3093"}),Object(d.jsx)("button",{onClick:function(){t("/dinosaur/1")},children:"\u304d\u3087\u3046\u308a\u3085\u3046"})]})},v=function(n){Object(h.a)(t,n);var e=Object(p.a)(t);function t(){return Object(c.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"scoring",value:function(){var n=this;return this.props.answers.filter((function(e,t){return e===n.props.data[t].rightAnswerIdx})).length}},{key:"render",value:function(){var n,e=this.scoring(),t=b[this.props.type];return n=e===this.props.data.length?Object(d.jsxs)("p",{children:["\u304d\u307f\u306f ",t,"\u306f\u304b\u305b \u3060\uff01"]}):Object(d.jsx)("p",{children:"\u307e\u305f \u3042\u305d\u3093\u3067\u306d"}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[t,"\u30af\u30a4\u30ba"]}),Object(d.jsx)("h2",{children:"\u3051\u3063\u304b"}),Object(d.jsxs)("p",{children:[this.props.data.length,"\u3082\u3093\u3061\u3085\u3046",e,"\u3082\u3093 \u305b\u3044\u304b\u3044"]}),n,Object(d.jsx)(u.b,{to:"/quiz",children:"\u3082\u3069\u308b"})]})}}]),t}(r.a.Component),w=[{question:"E5\u3051\u3044 \u306f\u3084\u3076\u3055\u306f \u3055\u3044\u3053\u3046\u3058\u305d\u304f \u306a\u3093\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb\u3067 \u306f\u3057\u308b\u304b\u306a\uff1f",options:["280\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb","320\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb","350\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb"],rightAnswerIdx:1,description:"\u306b\u307b\u3093\u3067 \u3044\u3061\u3070\u3093 \u306f\u3084\u304f \u306f\u3057\u308c\u308b\u3088\uff01H5\u3051\u3044 \u306f\u3084\u3076\u3055\u3068 E6\u3051\u3044 \u3053\u307e\u3061\u306e \u3055\u3044\u3053\u3046\u3058\u305d\u304f\u3082 320\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb\u3060\u3088\u3002"},{question:"\u307f\u3089\u3044\u306e\u3000\u3057\u3093\u304b\u3093\u305b\u3093\u3000\u30a2\u30eb\u30d5\u30a1\u30a8\u30c3\u30af\u30b9\u306f\u3000\u3068\u3046\u304d\u3087\u3046\u304b\u3089\u3000\u3069\u3053\u307e\u3067\u3000\u306f\u3057\u308b\u304b\u306a\uff1f",options:["\u3055\u3063\u307d\u308d","\u3082\u308a\u304a\u304b","\u3057\u3093\u3042\u304a\u3082\u308a"],rightAnswerIdx:0,description:"\u30a2\u30eb\u30d5\u30a1\u30a8\u30c3\u30af\u30b9\u306f\u3000\u3068\u3046\u307b\u304f\u3092\u3000\u306f\u3057\u308b\u3000\u3057\u3051\u3093\u3000\u3067\u3093\u3057\u3083\u3000\u3060\u3088\u3002"},{question:"E5\u3051\u3044 \u306f\u3084\u3076\u3055\u306e \u305b\u3093\u3068\u3046\u3057\u3083\u308a\u3087\u3046\u306e \u304b\u305f\u3061\u306e \u306a\u307e\u3048\u306f\uff1f",options:["\u30a8\u30a2\u30ed\u30a6\u30a7\u30c3\u30b8\u304c\u305f","\u30a8\u30a2\u30ed\u30c0\u30d6\u30eb\u30a6\u30a4\u30f3\u30b0\u304c\u305f","\u30c0\u30d6\u30eb\u30ab\u30b9\u30d7\u304c\u305f"],rightAnswerIdx:2,description:"\u30c8\u30f3\u30cd\u30eb\u3092 \u306f\u3084\u304f \u3057\u305a\u304b\u306b \u306f\u3057\u308b \u304b\u305f\u3061\u3060\u3088\u3002"}],g=[{question:"\u30c6\u30a3\u30e9\u30ce\u30b5\u30a6\u30eb\u30b9\u306e \u3044\u3061\u3070\u3093\u306e \u3076\u304d\u306f \u306a\u306b\uff1f",options:["\u3053\u308f\u3044 \u304b\u304a","\u3059\u308b\u3069\u3044 \u306f","\u306a\u304c\u3044 \u3057\u3063\u307d"],rightAnswerIdx:1,description:"\u30ca\u30a4\u30d5\u306e \u3088\u3046\u306a \u3059\u308b\u3069\u3044 \u306f\u3002\u3055\u3044\u3060\u3044 30\u30bb\u30f3\u30c1 \u3060\u3088\u3002"},{question:"\u304d\u3087\u3046\u308a\u3085\u3046\u306f \u3069\u3046\u3057\u3066 \u305c\u3064\u3081\u3064 \u3057\u305f\uff1f",options:["\u3044\u3093\u305b\u304d\u306e \u3057\u3087\u3046\u3068\u3064","\u304b\u3056\u3093\u306e \u3060\u3044\u3075\u3093\u304b","\u3055\u3080\u304f\u3066 \u3057\u3093\u3060"],rightAnswerIdx:0,description:"\u305c\u3064\u3081\u3064\u3057\u305f \u3058\u3060\u3044\u306e \u3061\u305d\u3046\u306b \u30a4\u30ea\u30b8\u30a6\u30e0\u304c \u3075\u304f\u307e\u308c\u308b\u3053\u3068\u304c \u3057\u3087\u3046\u3053 \u3060\u3088\u3002"},{question:"\u304d\u3087\u3046\u308a\u3085\u3046\u306e \u3044\u304d\u306e\u3053\u308a\u306f \u3057\u3093\u304b\u3057\u3066 \u306a\u306b\u306b \u306a\u3063\u305f\u304b\u306a\uff1f",options:["\u308f\u306b","\u3044\u308b\u304b","\u3068\u308a"],rightAnswerIdx:2,description:"\u3058\u3085\u3046\u304d\u3083\u304f\u308b\u3044\u306e \u3044\u3061\u3076\u304c \u3057\u3093\u304b\u3057\u3066 \u3068\u308a\u306b \u306a\u3063\u305f\u3088\u3002"}],y=function(n){Object(h.a)(t,n);var e=Object(p.a)(t);function t(n){var s;return Object(c.a)(this,t),(s=e.call(this,n)).state={shinkansenAnswers:Array(w.length).fill(null),dinosaurAnswers:Array(w.length).fill(null)},s}return Object(o.a)(t,[{key:"handleChangeShinkansen",value:function(n,e){var t=this.state.shinkansenAnswers.slice();t[n]=e,this.setState({shinkansenAnswers:t})}},{key:"handleChangeDinosaur",value:function(n,e){var t=this.state.dinosaurAnswers.slice();t[n]=e,this.setState({dinosaurAnswers:t})}},{key:"resetAnswers",value:function(){this.setState({shinkansenAnswers:Array(w.length).fill(null),dinosaurAnswers:Array(w.length).fill(null)})}},{key:"render",value:function(){var n=this;return Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/quiz",render:function(){return Object(d.jsx)(f,{resetAnswers:function(){return n.resetAnswers()}})}}),Object(d.jsx)(j.a,{path:"/shinkansen/result",render:function(){return Object(d.jsx)(v,{type:"shinkansen",data:w,answers:n.state.shinkansenAnswers})}}),Object(d.jsx)(j.a,{path:"/shinkansen/:id",render:function(e){e.location;var t=e.match;return Object(d.jsx)(x,{type:"shinkansen",match:t,data:w,answers:n.state.shinkansenAnswers,onChange:function(e,t){return n.handleChangeShinkansen(e,t)}})}}),Object(d.jsx)(j.a,{path:"/dinosaur/result",render:function(){return Object(d.jsx)(v,{type:"dinosaur",data:g,answers:n.state.dinosaurAnswers})}}),Object(d.jsx)(j.a,{path:"/dinosaur/:id",render:function(e){e.location;var t=e.match;return Object(d.jsx)(x,{type:"dinosaur",match:t,data:g,answers:n.state.dinosaurAnswers,onChange:function(e,t){return n.handleChangeDinosaur(e,t)}})}})]})})})})}}]),t}(r.a.Component);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.465e43d7.chunk.js.map