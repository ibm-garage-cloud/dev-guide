(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),i=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,s=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:s},"Edit this page on GitHub"))):null},g=a("dI71"),x=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),o=r===n,s=new RegExp(n+"/?(#.*)?$"),c=a.replace(s,r);return Object(u.b)("li",{key:e,className:p()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(u.b)(i.Link,{className:x.link,to:""+c},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:x.list},r))))))},t}(r.a.Component),N=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=b.tabs,j=b.title,g=b.theme,x=b.description,T=b.keywords,y=Object(v.a)().interiorTheme,w=Object(i.useStaticQuery)("223705900").site.pathPrefix,k=w?n.pathname.replace(w,""):n.pathname,P=m?k.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",I=g||y;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:j,pageDescription:x,pageKeywords:T,titleType:d},Object(u.b)(h,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:I}),m&&Object(u.b)(f,{slug:k,tabs:m,currentTab:P}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p})),Object(u.b)(s.a,null))}},"b+mk":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("XbGe"),i=a("T0C+"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=c("PageDescription"),p=c("InlineNotification"),d={_frontmatter:s},m=l.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use the ",Object(o.b)(i.a,{name:"longName",mdxType:"Globals"})," environment to delete itself")),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": An ",Object(o.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(o.b)("a",{parentName:"p",href:"/dev-guide/admin/plan-installation#roles"},"Plan Installation > Roles")," for the overview of the roles involved.")),Object(o.b)("p",null,"Not only can the ",Object(o.b)(i.a,{name:"shortName",mdxType:"Globals"})," create the environment, the environment can also delete itself. The\nenvironment is installed using Terraform, which stores the state of the applied modules in the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace/{cluster name}"),"\nfolder. Terraform can use that state to delete what it installed."),Object(o.b)("p",null,"Destroy a ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"})," following these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command to launch a ",Object(o.b)("a",{parentName:"p",href:"/dev-guide/tools/tools-image"},"Developer Tools container"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./launch.sh\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the container, change to the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace/{cluster name}")," directory:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd workspace/{cluster name}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the container, run the ",Object(o.b)("inlineCode",{parentName:"p"},"destroy.sh")," script to apply the Terraform destroy:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./destroy.sh\n")),Object(o.b)("p",{parentName:"li"},"Rather than directly running ",Object(o.b)("inlineCode",{parentName:"p"},"terraform desroy"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"destroy.sh")," script first builds a “destroy plan” from the current\nstate then applies that plan. Performing the destroy in this way is more reliable and allows for certain resources\nto be selectively destroyed/saved."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-destroying-index-mdx-206e32e3e6edaa847db8.js.map