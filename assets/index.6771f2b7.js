import{d,e as p,r as m,o as v,b as F,u as _}from"./index.f45bd0e0.js";const g=d({__name:"index",setup(x){const l=new URL("/src/assets/logo.png",self.location).href;let o=p([{title:"\u8D2D\u7269",start:"2022-09-23 10:20:00",end:"2022-09-23 12:00:00",editable:!0},{title:"\u5B66\u4E60",start:"2022-09-22 08:00:00",end:"2022-09-22 16:00:00"}]);const c=e=>{o.value.push({title:"\u5B66\u4E60",start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 18:00:00`}),console.log(e)},r=e=>{console.log(e)},u=e=>{let t=document.createElement("div");console.log("arg",e);const n=e.event._def.title,s=e.timeText.split("-"),a=s[0].replace("\u65F6",""),i=s[1].replace("\u65F6","").replace(" ","");return t.innerHTML=`
        <img src="${l}" style="width:20px;height:20px;">
        <div>\u5F00\u59CB\u65F6\u95F4\uFF1A${a}</div>
        <div>\u7ED3\u675F\u65F6\u95F4\uFF1A${i}</div>
        <div>\u6807\u9898\uFF1A${n}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=m("m-calendar");return v(),F(n,{onDateClick:c,onEventClick:r,eventContent:u,displayEventEnd:"",events:_(o)},null,8,["events"])}}});export{g as default};
