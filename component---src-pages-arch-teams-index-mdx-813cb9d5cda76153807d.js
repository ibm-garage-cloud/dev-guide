(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Mns1:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("XbGe"),l=a("T0C+"),c=(a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),m={_frontmatter:c},d=s.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},Object(i.b)("p",null,"Plan environments for multiple teams")),Object(i.b)("p",null,"While separate development teams can each have a separate ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"}),", how many environments does a set of teams need? There are two approaches."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Environment per team"),": As described in ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/arch/environment"},"Environment Architecture"),", each development team gets its own ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"}),". This approach has several consequences:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each team’s environment is built of independent resources that can be managed and even billed separately"),Object(i.b)("li",{parentName:"ul"},"Each team can customize the size of its environment, its backend services, and its CI/CD tools"),Object(i.b)("li",{parentName:"ul"},"For teams in different geographies, each team’s environment can be located in the IBM Cloud region closest to the team’s geography"),Object(i.b)("li",{parentName:"ul"},"If the client paying for the application’s development wants the development environment located in the client’s geography, the environment can be installed in the region in that geography"),Object(i.b)("li",{parentName:"ul"},"Several small development teams will each require its own environment, which can lead to higher expense for envrionments with low utilization")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Shared environment"),": An alternative approach is for multiple development teams to share a single ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"}),". This approach has several consequences:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Resources are shared, including their cost and management duties"),Object(i.b)("li",{parentName:"ul"},"Shared resources tend to be more highly utilized, although resource contention will occur between the teams"),Object(i.b)("li",{parentName:"ul"},"Teams can more easily coordinate on applications and microservices that must work together in production"),Object(i.b)("li",{parentName:"ul"},"Teams must share a single set of CI/CD tools and pipeline configurations that can be managed by a single adminstration team"),Object(i.b)("li",{parentName:"ul"},"Teams share a single ",Object(i.b)("em",{parentName:"li"},"test")," namespace and ",Object(i.b)("em",{parentName:"li"},"staging")," namespace, and must coordinate accordingly")),Object(i.b)("p",null,"Teams that do no wish to use the same CI/CD tools or otherwise want to avoid having to coordinate with each other should use separate development environments. Teams that want to economize, share a set of CI/CD tools, and need to coordinate on application development may find a shared environment easier to use."),Object(i.b)("p",null,"To create a shared environment, first install a single environment. Then create a ",Object(i.b)("em",{parentName:"p"},"dev")," namespace for each team, such as ",Object(i.b)("em",{parentName:"p"},"dev-team1"),", ",Object(i.b)("em",{parentName:"p"},"dev-team2"),", etc. (The original ",Object(i.b)("em",{parentName:"p"},"dev")," namespace can be renamed for the first team, ",Object(i.b)("em",{parentName:"p"},"dev-team1"),".) The multiple developer namespaces all share a single ",Object(i.b)("em",{parentName:"p"},"tools")," namespace and the CI/CD tools installed in it. They all use Argo CD—one of the Developer Tools—to deploy to shared ",Object(i.b)("em",{parentName:"p"},"test")," and ",Object(i.b)("em",{parentName:"p"},"staging")," namespaces. Use ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/getting-started-day-0"},"Kubernetes RBAC")," to control which developers can access which dev namespaces."))}p.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),m=a.n(b),d=a("QH2O"),p=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),v=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("dI71"),O=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,r);return Object(u.b)("li",{key:e,className:m()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+c},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:O.list},r))))))},t}(r.a.Component),f=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,m=t.relativePagePath,d=t.titleType,p=b.tabs,g=b.title,j=b.theme,O=b.description,w=b.keywords,N=Object(T.a)().interiorTheme,y=Object(s.useStaticQuery)("223705900").site.pathPrefix,P=y?n.pathname.replace(y,""):n.pathname,k=p?P.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",C=j||N;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:C,pageTitle:g,pageDescription:O,pageKeywords:w,titleType:d},Object(u.b)(h,{title:r?Object(u.b)(r,null):g,label:"label",tabs:p,theme:C}),p&&Object(u.b)(x,{slug:P,tabs:p,currentTab:k}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(v,{relativePagePath:m})),Object(u.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-arch-teams-index-mdx-813cb9d5cda76153807d.js.map