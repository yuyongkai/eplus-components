import{d,e as i,r as p,o as m,b as v,u as F}from"./index.f7e8e1d0.js";var _="/eplus-components/assets/logo.03d6d6da.png";const E=d({__name:"index",setup(x){let o=i([{title:"\u8D2D\u7269",start:"2022-09-23 10:20:00",end:"2022-09-23 12:00:00",editable:!0},{title:"\u5B66\u4E60",start:"2022-09-22 08:00:00",end:"2022-09-22 16:00:00"}]);const l=e=>{o.value.push({title:"\u5B66\u4E60",start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 18:00:00`}),console.log(e)},c=e=>{console.log(e)},u=e=>{let t=document.createElement("div");console.log("arg",e);const n=e.event._def.title,s=e.timeText.split("-"),a=s[0].replace("\u65F6",""),r=s[1].replace("\u65F6","").replace(" ","");return t.innerHTML=`
        <img src="${_}" style="width:20px;height:20px;">
        <div>\u5F00\u59CB\u65F6\u95F4\uFF1A${a}</div>
        <div>\u7ED3\u675F\u65F6\u95F4\uFF1A${r}</div>
        <div>\u6807\u9898\uFF1A${n}</div>
        `,{domNodes:[t]}};return(e,t)=>{const n=p("m-calendar");return m(),v(n,{onDateClick:l,onEventClick:c,eventContent:u,displayEventEnd:"",events:F(o)},null,8,["events"])}}});export{E as default};
