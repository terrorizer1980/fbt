(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a(144),i=a(150),s=a(149);var o=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var m=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));i.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},d=a(98),u=a.n(d);const E="contents__link",g="contents__link--active",v=100;function p({headings:e}){return m(E,g,v),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:u.a.tableOfContents},l.a.createElement(f,{headings:e})))}function f({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"contents contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:E,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(f,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(c.a)(),{url:a}=t,{metadata:n,content:s}=e,{description:m,title:d,permalink:E,image:g,editUrl:v,lastUpdatedAt:f,lastUpdatedBy:h,keywords:b,version:_}=n,{frontMatter:{hide_title:w,hide_table_of_contents:N}}=s,k=a+Object(i.a)(g);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,d&&l.a.createElement("title",null,d),m&&l.a.createElement("meta",{name:"description",content:m}),m&&l.a.createElement("meta",{property:"og:description",content:m}),b&&b.length&&l.a.createElement("meta",{name:"keywords",content:b.join(",")}),g&&l.a.createElement("meta",{property:"og:image",content:k}),g&&l.a.createElement("meta",{property:"twitter:image",content:k}),g&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${d}`}),E&&l.a.createElement("meta",{property:"og:url",content:a+E})),l.a.createElement("div",{className:"padding-vert--lg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:u.a.docItemContainer},l.a.createElement("article",null,_&&l.a.createElement("span",{style:{verticalAlign:"top"},className:"badge badge--info"},"Version: ",_),!w&&l.a.createElement("header",null,l.a.createElement("h1",{className:u.a.docTitle},n.title)),l.a.createElement("div",{className:"markdown"},l.a.createElement(s,null))),(v||f||h)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},v&&l.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||h)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",f&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*f).toISOString(),className:u.a.docLastUpdatedAt},new Date(1e3*f).toLocaleDateString()),h&&" "),h&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,h)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:n})))),!N&&s.rightToc&&l.a.createElement(p,{headings:s.rightToc})))))}},144:function(e,t,a){"use strict";var n=a(0),l=a(34);t.a=function(){return Object(n.useContext)(l.a)}},149:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),c=a(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,s=t||a,o=i.test(s);let m=!1;const d="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(l.useEffect)(()=>(!d&&o&&window.docusaurus.prefetch(s),()=>{d&&u&&u.disconnect()}),[s,d,o]),s&&o?r.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{m||(window.docusaurus.preload(s),m=!0)},innerRef:e=>{d&&e&&o&&((e,t)=>{(u=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})})).observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):r.a.createElement("a",Object(n.a)({},e,{href:s}))}},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(144);function l(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);