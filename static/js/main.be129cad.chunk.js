(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{38:function(t,e,i){},45:function(t,e,i){},49:function(t,e,i){},69:function(t,e,i){},70:function(t,e,i){},71:function(t,e,i){},72:function(t,e,i){},73:function(t,e,i){"use strict";i.r(e);var n=i(0),s=i(15),a=i.n(s),c=(i(38),i(8)),o=i(2),r=i(4),h=i(7),l=[{sectionName:"Programming",sectionData:[{id:"PLCeaAi_Ah78SXMH-qUxjeEz35reRWduKh&ab",name:"Unreal Engine C++ Fundamentals"},{id:"PLCeaAi_Ah78SEV2Q-iVuFbe6xOtQYH6sH&ab_",name:"Unreal Tutorial C++ - Series - Player Character"},{id:"PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&ab_",name:"The Nature of Code 2"}]},{sectionName:"Music",sectionData:[{id:"RDQ5hS7eukUbQ&start_radio=1&rv=Q5hS7eukUbQ&t=1&ab_",name:"Singing Tutorials"},{id:"PLwSHXwm1ElvjLeiuZhVh2Wi6inegl4vPG",name:"Techno Tutorials"}]},{sectionName:"Conferences",sectionData:[{id:"PLBqIPBtUST0jfkTr7-0eRMy92OgfmSDHG",name:"Gamedev And Fun"}]}],u=(i(45),i(1));function d(){var t=Object(h.b)(),e=Object(n.useState)([]),i=Object(r.a)(e,2),s=i[0],a=i[1];return Object(n.useEffect)((function(){var t=[];l.forEach((function(e){t.push(e.sectionName)})),a(t)}),[]),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("span",{className:"title",children:"Choose category"}),Object(u.jsx)("div",{className:"categories",children:s.map((function(e){return Object(u.jsx)("div",{onClick:function(){return function(e){return t(function(t){return{type:"SET_SECTION_NAME",payload:t}}(e))}(e)},children:Object(u.jsx)(c.b,{to:"/section",children:e})},e)}))})]})}var j=i(10),f=i.n(j),p=i.p+"static/media/RobotoMono-ExtraLight.fd4e93a8.ttf",b=i(16),m=i(17),O=function(){function t(e){Object(b.a)(this,t),this.velocity=e.createVector(0,0),this.acc=e.createVector(0,0),this.location=e.createVector(e.width/2,e.height/2),this.width=200,this.offSetX=0,this.offSetY=1e4,this.r=this.width/2,this.blink=!1}return Object(m.a)(t,[{key:"checkEdges",value:function(t){this.location.x<this.r?(this.location.x=this.r,this.velocity.x*=-1):this.location.x>t.width-this.r&&(this.location.x=t.width-this.r,this.velocity.x*=-1),this.location.y<this.r?(this.location.y=this.r,this.velocity.y*=-1):this.location.y>t.height-this.r&&(this.location.y=t.height-this.r,this.velocity.y*=-1)}},{key:"walk",value:function(t){this.acc.x=t.noise(this.offSetX)*t.random(-1,1),this.acc.y=t.noise(this.offSetY)*t.random(-1,1),this.velocity.add(this.acc),this.velocity.limit(5),this.location.add(this.velocity),this.offSetX+=.1,this.offSetY+=.1}},{key:"display",value:function(t){var e=this.width/8,i=this.width/3;this.isMouseIn(t)?t.stroke(106,161,33):t.stroke(255),t.fill(this.blink?t.random(255):0),t.strokeWeight(3),t.circle(this.location.x,this.location.y,this.width),this.isMouseIn(t)?t.fill(106,161,33):t.fill(255),t.textSize(this.r),t.text("OK",this.location.x-this.r+e,this.location.y+this.r-i)}},{key:"isMouseIn",value:function(t){return Math.pow(this.location.x-t.mouseX,2)+Math.pow(this.location.y-t.mouseY,2)<=Math.pow(this.r,2)}}]),t}(),v=function(t){var e,i,n,s,a,c=t.width,r=t.height,h=0,l=Object(o.f)();return Object(u.jsx)(f.a,{setup:function(t,o){t.createCanvas(c,r).parent(o),t.textFont(s),a=new O(t),e=t.width+16,i=t.TWO_PI/50*1,n=new Array(t.floor(e/1))},draw:function(t){t.background(0),a.checkEdges(t),a.walk(t),a.display(t),function(t){for(var e=h-=.2,s=0;s<n.length;s++)n[s]=10*t.sin(e),e+=i}(t),function(t){t.noStroke(),t.fill(0,180,216);for(var e=0;e<n.length;e++)t.ellipse(1*e,r-20+n[e],5,5)}(t)},touchStarted:function(t){a.isMouseIn(t)&&(a.blink=!0,setTimeout((function(){l("/home")}),1e3))},preload:function(t){s=t.loadFont(p)}})},y=i(18);i(49);function x(){return Object(u.jsxs)("div",{className:y.isDesktop?"intro desktop":"intro",children:[Object(u.jsx)("span",{children:"This is a site for fast access to  my selection of most useful youtube vids. Enjoy."}),Object(u.jsx)(v,{width:window.innerWidth,height:window.innerHeight/3})]})}var w=i(12),g=i.n(w),k=i(19),S=i(32),N=i.n(S).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:20,key:"AIzaSyC8XSnTQDOXE8FgSS4C12gRGDzbb01V9Lo"}}),E=function(){var t=Object(k.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("playlistItems?playlistId=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();i(69);function I(t){var e=t.path,i=Object(o.f)();return Object(u.jsx)("span",{onClick:function(){return i(e)},className:"back-link",children:"< back"})}var T=function(t){var e,i,n,s=t.width,a=t.height,c=t.amp,o=t.p,r=t.thickness,h=0,l=c||10,d=o||50;return Object(u.jsx)(f.a,{setup:function(t,c){t.createCanvas(s,a).parent(c),e=t.width+16,i=t.TWO_PI/d*1,n=new Array(t.floor(e/1))},draw:function(t){t.background(0),function(t){for(var e=h-=.2,s=0;s<n.length;s++)n[s]=t.sin(e)*l,e+=i}(t),function(t){t.noStroke(),t.fill(0,180,216);for(var e=r||5,i=0;i<n.length;i++)t.ellipse(1*i,a-20+n[i],e,e)}(t)}})};i(70);function L(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),i=e[0],s=e[1],a=Object(n.useState)({}),c=Object(r.a)(a,2),o=c[0],l=c[1],d=Object(n.useState)(!1),j=Object(r.a)(d,2),f=j[0],p=j[1],b=Object(h.c)((function(t){return t.playlistId})),m=Object(h.c)((function(t){return t.playlistName}));function O(){return(O=Object(k.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,E(b);case 3:e=t.sent,setTimeout((function(){s(e.data.items),p(!1)}),1e3);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){l(i[0])}),[i]),Object(u.jsxs)("div",{className:y.isDesktop?"playlist desctop":"playlist",children:[Object(u.jsx)(I,{path:"/section"}),Object(u.jsx)("span",{className:"name",children:m}),f?Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)(T,{width:window.innerWidth,height:window.innerHeight/3})}):Object(u.jsxs)("div",{className:"playlist-split",children:[o&&o.snippet&&Object(u.jsx)("section",{className:"video",children:Object(u.jsx)("iframe",{title:o.snippet.title,src:"".concat("https://www.youtube.com/embed/"+o.snippet.resourceId.videoId),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}),Object(u.jsxs)("div",{className:"list-container",children:[Object(u.jsx)("div",{className:"gradient-top"}),Object(u.jsx)("div",{className:"list",children:i&&i.map((function(t){var e=t.snippet.title,i=t.snippet.thumbnails.medium.url;return Object(u.jsx)("div",{className:"thumbnail",onClick:function(){return l(t)},style:{backgroundImage:"url(".concat(i,")")}},e)}))}),Object(u.jsx)("div",{className:"gradient-bottom"})]})]})]})}var _=i(11),C=function(){function t(e,i,n){Object(b.a)(this,t),this.letter=e,this.possitionX=i,this.width=n,this.speed=2}return Object(m.a)(t,[{key:"moveRight",value:function(t,e){var i=this.width,n=this.width*e+i,s=t.width-n,a=t.width+Math.abs(s),c=-this.width;this.possitionX>a&&(this.possitionX=c),this.possitionX+=this.speed}},{key:"moveLeft",value:function(t,e){var i=this.width,n=this.width*e+i,s=t.width-n+this.width,a=t.width+this.width;this.possitionX<s&&(this.possitionX=a),this.possitionX-=3}},{key:"display",value:function(t,e){t.textSize(this.width),t.text(this.letter,this.possitionX,e),t.fill(0)}}]),t}(),X=function(t){var e=t.title,i=t.width,n=t.height,s=e.split(""),a=e.split(""),c=e.split("");return Object(u.jsx)(f.a,{setup:function(t,e){t.createCanvas(i,n).parent(e);var o=0,r=0,h=0;s=s.map((function(t){return new C(t,o+=30,30)})),a=a.map((function(t){return new C(t,r+=20,20)})),c=c.map((function(t){return new C(t,h+=50,50)}))},draw:function(t){t.background(255);var e,i=Object(_.a)(s);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.moveLeft(t,s.length),n.display(t,t.height/3)}}catch(j){i.e(j)}finally{i.f()}var o,r=Object(_.a)(a);try{for(r.s();!(o=r.n()).done;){var h=o.value;h.moveRight(t,s.length),h.display(t,t.height/2)}}catch(j){r.e(j)}finally{r.f()}var l,u=Object(_.a)(c);try{for(u.s();!(l=u.n()).done;){var d=l.value;d.moveLeft(t,s.length),d.display(t,t.height-10)}}catch(j){u.e(j)}finally{u.f()}}})};i(71);function M(){var t=Object(h.b)(),e=Object(h.c)((function(t){return t.sectionName})),i=Object(n.useState)([]),s=Object(r.a)(i,2),a=s[0],o=s[1];function d(e){var i=e.id,n=e.name;!function(e){t(function(t){return{type:"SET_PLAYLIST_ID",payload:t}}(e))}(i),function(e){t(function(t){return{type:"SET_PLAYLIST_NAME",payload:t}}(e))}(n)}return Object(n.useEffect)((function(){l.forEach((function(t){t.sectionName===e&&o(t.sectionData)}))}),[]),Object(u.jsxs)("div",{className:"playlist-section",children:[Object(u.jsx)(I,{path:"/home"}),Object(u.jsx)("span",{className:"section-name",children:e}),Object(u.jsx)("div",{className:"playlist-links",children:a.map((function(t){return Object(u.jsx)("div",{className:"to-playlist",onClick:function(){return d(t)},children:Object(u.jsxs)(c.b,{to:"/playlist",children:[Object(u.jsx)(X,{title:t.name,width:272,height:272}),Object(u.jsx)("div",{className:"wave-hovered",children:Object(u.jsx)(T,{width:272,height:26,amp:5,p:25,thickness:3})}),Object(u.jsx)("span",{className:"playlist-name",children:t.name})]})},t.name)}))})]})}var A=function(){return Object(u.jsx)(c.a,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)(x,{})}),Object(u.jsx)(o.a,{path:"/home",element:Object(u.jsx)(d,{})}),Object(u.jsx)(o.a,{path:"/playlist",element:Object(u.jsx)(L,{})}),Object(u.jsx)(o.a,{path:"/section",element:Object(u.jsx)(M,{})}),Object(u.jsx)(o.a,{path:"/button",element:Object(u.jsx)(v,{})})]})})})},P=i(33),D=i(9),R={playlistId:"",playlistName:"",sectionName:""},U=(i(72),Object(P.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PLAYLIST_ID":return Object(D.a)(Object(D.a)({},t),{},{playlistId:e.payload});case"SET_PLAYLIST_NAME":return Object(D.a)(Object(D.a)({},t),{},{playlistName:e.payload});case"SET_SECTION_NAME":return Object(D.a)(Object(D.a)({},t),{},{sectionName:e.payload});default:return t}})));a.a.render(Object(u.jsx)(h.a,{store:U,children:Object(u.jsx)(A,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.be129cad.chunk.js.map