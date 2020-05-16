(this["webpackJsonpbmi-calculator-app"]=this["webpackJsonpbmi-calculator-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),o=(a(11),a(12),a(1)),i=a(2),u=a(3),s=function(e){var t=e.title,a=e.type,n=e.name,l=e.value,r=e.onChange;return c.a.createElement("div",{className:"input-groups"},c.a.createElement("span",{className:"label"},t),c.a.createElement("div",{className:"range-container"},c.a.createElement("input",{className:"range-input",type:a,name:n,value:l,onChange:r,autoComplete:"false"})))},m=function(e){var t=e.getBmiValue,a=Object(n.useState)("cm"),l=Object(o.a)(a,2),r=l[0],m=l[1],v=Object(n.useState)("kg"),h=Object(o.a)(v,2),g=h[0],p=h[1],d=Object(n.useState)("Metric"),E=Object(o.a)(d,2),f=E[0],b=E[1],C=Object(n.useState)({heightCount:"0",inchesCount:"0",weightCount:"0"}),N=Object(o.a)(C,2),w=N[0],O=N[1],j=w.heightCount,M=w.inchesCount,y=w.weightCount;Object(n.useEffect)((function(){B(j,y),F(j,y,M)}),[j,y,M]);var k=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(i.a)({},a,n))}))},B=function(e,a){if(e>0&&a>0){var n=a/Math.pow(e/100,2);t(Math.round(n))}},F=function(e,a,n){if(e>0&&a>0&&n>0){var c=12*e+parseInt(n),l=703*a/Math.pow(c/100,2);t(Math.round(l))}};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"bmi-inputs"},c.a.createElement("div",{className:"inputs-fields"},c.a.createElement("div",null,c.a.createElement("div",{className:"label-unit"},"Unit"),c.a.createElement("div",{className:"unit"},c.a.createElement("select",{name:"unit",value:f,onChange:function(e){b(e.target.value),"Metric"===e.target.value?(m("cm"),p("kg")):(m("ft"),p("lbs"))},className:"form-control form-control-sm"},c.a.createElement("option",{value:"Metric"},"Metric"),c.a.createElement("option",{value:"Imperial"},"Imperial"))),c.a.createElement(s,{type:"text",name:"heightCount",title:"Height (".concat(r,")"),value:j,onChange:k}),"Imperial"===f?c.a.createElement(s,{type:"text",name:"inchesCount",title:" (in)",value:M,onChange:k}):"",c.a.createElement(s,{type:"text",name:"weightCount",title:"Weight (".concat(g,")"),value:y,onChange:k})),c.a.createElement("button",{className:"button",type:"submit",onClick:function(e){e.preventDefault(),t(0),b("Metric"),m("cm"),p("kg"),O({heightCount:"0",inchesCount:"0",weightCount:"0"})}},"Reset"))))},v=function(){var e,t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],r=a[1],i=(e=l)>=1&&e<18.5?"Underweight":e>=18.5&&e<24.9?"Normal":e>=24.9&&e<29.9?"Overweight":e>=30?"Obese":void 0,u="";l>0&&i&&(u=i.toLowerCase());return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"calculator",style:{backgroundColor:function(e){return e>=1&&e<18.5?"#FED88B":e>=18.5&&e<24.9?"#80ff80":e>=24.9&&e<29.9?"#FF7F50":e>=30?"#FF5411":void 0}(l)}},c.a.createElement("h3",null,"Body Mass Index Calculator"),c.a.createElement("div",{className:"bmi-result-container"},c.a.createElement("div",{className:"bmi-result"},c.a.createElement("div",{className:"bmi-result-number"},"Body Mass Index (BMI) = ",l),c.a.createElement("div",{className:u},i))),c.a.createElement(m,{getBmiValue:r})))},h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-6 col-lg-offset-3"},c.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.89595a0f.chunk.js.map