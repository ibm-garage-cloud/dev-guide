(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),s=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),m=a.n(p),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(d.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,o=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},v=a("dI71"),O=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),i=r===n,o=new RegExp(n+"/?(#.*)?$"),l=a.replace(o,r);return Object(d.b)("li",{key:e,className:u()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(d.b)(s.Link,{className:O.link,to:""+l},e))}));return Object(d.b)("div",{className:O.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:O.list},r))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,p=t.titleType,m=b.tabs,h=b.title,v=b.theme,O=b.description,N=b.keywords,A=Object(w.a)().interiorTheme,T=Object(s.useStaticQuery)("223705900").site.pathPrefix,k=T?n.pathname.replace(T,""):n.pathname,y=m?k.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",C=v||A;return Object(d.b)(l.a,{tabs:m,homepage:!1,theme:C,pageTitle:h,pageDescription:O,pageKeywords:N,titleType:p},Object(d.b)(g,{title:r?Object(d.b)(r,null):h,label:"label",tabs:m,theme:C}),m&&Object(d.b)(f,{slug:k,tabs:m,currentTab:y}),Object(d.b)(x.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:u})),Object(d.b)(o.a,null))}},jyMt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("XbGe"),s=a("T0C+"),o=(a("qKvR"),{}),l={_frontmatter:o},b=c.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)(s.a,{name:"ic",mdxType:"Globals"})," environment is provided with a number of powerful tools to manage user access and resource provisioning\nbut little is configured for you out of the box. This guide gives an approach to managing the account in a sensible way that can\neasily be extended or re-configured based upon the requirements of a given situation. "),Object(i.b)("p",null,"This approach to managing the account is organized around four key roles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Account owner(s)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Account managers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Environment administrators")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Environment users"))),Object(i.b)("p",null,"This diagram from ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/toolkit-resources/resource-mgmt#access-group-example"},"Resource Access Management"),"\nshows the relationship of these access groups to a pair of development environments:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5ElEQVQ4y11UDWxTVRS+ZXODDUoMwYWIoqCgREhQMw0oIApDmIMNGG7DZAiLMRsEBorAAEFwBmGEDVHkd4BRYBJimJFJ4qZjbN3WwrrN9e+9tq+0Xdv32/fX3+N9ZSSGm3w5uTn3fjnnfN+9CAB0GCigwKjCg90o/8vOJ+evrZifV/j2jBXlxS8sLy2Yvn5bxZSKmspJRZUf5qzZXJazelPpYyjLWbOpBMd1TyGNDK9RWpxbVonW7D4/5vmZKEvb/x+EH0cr0iUKEaLOI53v3EN4zyLd/e+RDiFAlRtQNvL7vAtvX7vwAcfQs15/bxXmfjW9pa35NZ7na202+7GBgcHjvCAcU5TIkkfkPzYE0an6ELp6jkXHa23oykVAh/YdRRWfZGajWCwG1sF+iEQivSPVov5/TR95HzyAoaGhFGiaBkVRTmv5Eyc8WUePQPbefZB15iRkHcSx8TJkX7gImeXlaCxSItFqiha3Soq6Ni2/JtX+3Z7WhYFAoMXhcDTb7fabFEW14v1GjdBgCGxzUyHK46HNBBkaZNhYfygokiSh/pJfMFePYgI9Ux52bcCHJ/SRfsw3Oa2to2Wey+W8YrVaL6uqejEej1+XZblMI7Rao4c5Jgk8nQSfLwaSlARB4sDjE42lhfl6JIliA8uEQJKVlSMtp/Xe61wnyxLgOUI4HMaXJBBF6YyWHzDDIQPZAs3Wo3Kfpy0iCaBwggBer9peVpKnR0YioCckmNx93zx6xY56zLfgieY/m+ZEI+peVY3swhXuxDjAcfziFGEf1PW6/4Y/7KdgwNsDgggQDzLAkaJ53qerxyMhSE4y3P4pFx8ee/hqu1ahrsPQmoeHYiUIwoxb7RMEwclx3HaN0GhMFFNOaPK6odFJwCWPJ9FIs3CFdMG+pYufG4c4gat3OB0QFuVlIy2nG3rvlFgsFjAajWA2m8HtdgMmbtDyd7oYxLCAxDB+DMEEUiPxlJUCQRpVVmEf8krsGS4CC0IMq99e/3PKNgZj+/skQVAk6bT7/X5rKBQKYFvt1C7e7RLWWRzMLRvJNVkd7HX/cOJXmk78TpLwTV7ei+OQQvsmBi3Gl/Hh7Gs9Hkz3bHpL62+5FOVuwJY5hgWpwzP8gWPZlGiEhatTaQ6koACC0wNxLBrLMUBRfF9x8arxSJXF7wQ2BGo09kjl9G5TRylNh7ByXsCzwwqLgN1wUst7++hDBNkOXfbrso3ojCRpXqFlGSh/5J/yFYv0yDXMzPAwSoF3ODjx23PXUqJ09rQtjsdj5ng80YM92I1fkyUs8NUa4fCAcMTsvwE3qVqwMa0AShSigRBwhGBatKVkPGICrumGthtFiSRMGOJTFerudrctt9ttPiyME3uRYFmWxnPckzL2vfAmmvBZA44H3bTDZwwHlR6RTwx6qWTjO0tn6xEv8HWE2wlCWFr6qOWu3o6UyiaTaURlCqus1Gv54zcgo+hzyNxYDRn52yDj6QWQMf1dyBydC2kfbxw3FolKLEeNwxxBkrKXVe1PWcB0768lLtLucLvIQYYO9HMsTcWjcrWb134bhN76CtASjDcOAJpS9RC5VUn0WTkag3hRQbwUe/gvLmxCb26+lVW84+tXDp69MGv/6Uuzak6e1TB7/d7al/I3fzF15daaaUXVe6YVPo6tu6cVbNk19T/tRroIlsTlVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Access groups example",title:"Access groups example",src:"/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png",srcSet:["/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/7fc1e/access-example.png 288w","/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/a5df1/access-example.png 576w","/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png 1152w","/dev-guide/static/97670ac0e688220fa7f8e2810d92d96b/58488/access-example.png 1604w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h3",null,"Account owner(s)"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"account owner(s)")," is the user who owns the account or users who have been granted super-user access to the account\nat the same level as the account owner."),Object(i.b)("p",null,"An account owner must create the access group for account managers. The account owner will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an ",Object(i.b)("inlineCode",{parentName:"li"},"ACCT-MGR-IAM-ADMIN")," access group using the ",Object(i.b)("inlineCode",{parentName:"li"},"acp-mgr")," script"),Object(i.b)("li",{parentName:"ul"},"Add a functional ID, configured using the ",Object(i.b)("inlineCode",{parentName:"li"},"acp-iaas")," script, with API keys for the account managers")),Object(i.b)("h3",null,"Account managers"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"account managers")," are an account owner or other users with ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"},"account management permissions")),Object(i.b)("p",null,"As described in ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/admin/config-account"},"Configure Account"),", the account managers can set up the resource groups\nand access groups needed to install and use the environments. For each environment, the account managers will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a resource group"),Object(i.b)("li",{parentName:"ul"},"Create an access group named ",Object(i.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN")," using the script ",Object(i.b)("inlineCode",{parentName:"li"},"acp-admin")),Object(i.b)("li",{parentName:"ul"},"Create an access group named ",Object(i.b)("inlineCode",{parentName:"li"},"<resource_group>-USER")," using the script ",Object(i.b)("inlineCode",{parentName:"li"},"acp-user"))),Object(i.b)("h3",null,"Environment administrators"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"environment administrators")," are users in the account\nwith ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#platformroles"},"permissions to create services in the environment’s resource group"),". In\nthis case, the “environment” is scoped to the ",Object(i.b)("inlineCode",{parentName:"p"},"resource group"),". Environment administrators are granted broad access\nto create, manage, and destroy services and resources within a given ",Object(i.b)("inlineCode",{parentName:"p"},"resource group"),"."),Object(i.b)("h3",null,"Environment users"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"environment users")," are users in the account with ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#service_access_roles"},"permissions to use existing services in the environment’s resource group"),"\n(e.g. developers, data scientists, etc.). They are consumers of the services and resources that have been provisioned in\norder to build and deploy business applications."),Object(i.b)("h2",null,"Architecture"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/arch/environment"},"Environment Architecture")," page shows the structure of the environment that will be installed. Depending upon\nthe approach for development teams, each ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/arch/teams"},"development team")," can be assigned its own (small) environment or\nmultiple teams can share a single environment. The environment structure is designed to support best practices for\na ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/arch/application"},"cloud-native application architecture"),", including designing applications that\nare ",Object(i.b)("a",{parentName:"p",href:"/dev-guide/arch/manageable"},"built to manage"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-ibm-cloud-account-management-index-mdx-3fc6f521118bd6b758f0.js.map