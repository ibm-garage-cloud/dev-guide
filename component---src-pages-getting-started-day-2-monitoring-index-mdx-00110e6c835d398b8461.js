(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"++vI":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("XbGe"),s=a("T0C+"),c=(a("qKvR"),{}),b={_frontmatter:c},l=o.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"},"automate application monitoring"),". Sysdig automates application monitoring, enabling an operator to view stats and collect metrics about a Kubernetes cluster and its deployments. The ",Object(r.b)(s.a,{name:"env",mdxType:"Globals"})," includes an IBM Cloud Monitoring with Sysdig service instance configured with a Sysdig agent installed in the environment’s cluster. Simply by deploying your application into the ",Object(r.b)(s.a,{name:"env",mdxType:"Globals"}),", Sysdig monitors it, just open the Sysdig web UI from the IBM Cloud dashboard to browse your application’s status."))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),d=a.n(l),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:c},"Edit this page on GitHub"))):null},j=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,c=new RegExp(n+"/?(#.*)?$"),b=a.replace(c,i);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(s.Link,{className:O.link,to:""+b},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},i))))))},t}(i.a.Component),T=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,l=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=l.tabs,x=l.title,j=l.theme,O=l.description,w=l.keywords,y=Object(f.a)().interiorTheme,k=Object(s.useStaticQuery)("223705900").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,I=m?P.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",N=j||y;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:N,pageTitle:x,pageDescription:O,pageKeywords:w,titleType:u},Object(p.b)(g,{title:i?Object(p.b)(i,null):x,label:"label",tabs:m,theme:N}),m&&Object(p.b)(v,{slug:P,tabs:m,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d})),Object(p.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-2-monitoring-index-mdx-00110e6c835d398b8461.js.map