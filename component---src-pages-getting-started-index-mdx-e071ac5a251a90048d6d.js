(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("NmYn"),s=t.n(o),n=t("Wbzz"),r=t("Xrax"),d=t("k4MR"),b=t("TSYQ"),l=t.n(b),c=t("QH2O"),p=t.n(c),g=t("qKvR"),m=function(A){var e,t=A.title,a=A.theme,i=A.tabs,o=void 0===i?[]:i;return Object(g.b)("div",{className:l()(p.a.pageHeader,(e={},e[p.a.withTabs]=o.length,e[p.a.darkMode]="dark"===a,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},t)))))},j=t("BAC9"),u=function(A){var e=A.relativePagePath,t=A.repository,a=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||a,o=i.baseUrl,s=i.subDirectory,r=o+"/edit/"+i.branch+s+"/src/pages"+e;return o?Object(g.b)("div",{className:"bx--row "+j.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:j.link,href:r},"Edit this page on GitHub"))):null},E=t("FCXl"),h=t("dI71"),B=t("I8xM"),f=function(A){function e(){return A.apply(this,arguments)||this}return Object(h.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=s()(A,{lower:!0,strict:!0}),o=i===a,r=new RegExp(a+"/?(#.*)?$"),d=t.replace(r,i);return Object(g.b)("li",{key:A,className:l()((e={},e[B.selectedItem]=o,e),B.listItem)},Object(g.b)(n.Link,{className:B.link,to:""+d},A))}));return Object(g.b)("div",{className:B.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:B.list},i))))))},e}(i.a.Component),x=t("MjG9"),w=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,i=A.Title,o=e.frontmatter,b=void 0===o?{}:o,l=e.relativePagePath,c=e.titleType,p=b.tabs,j=b.title,h=b.theme,B=b.description,N=b.keywords,y=Object(w.a)().interiorTheme,Q=Object(n.useStaticQuery)("2456312558").site.pathPrefix,v=Q?a.pathname.replace(Q,""):a.pathname,O=p?v.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",k=h||y;return Object(g.b)(d.a,{tabs:p,homepage:!1,theme:k,pageTitle:j,pageDescription:B,pageKeywords:N,titleType:c},Object(g.b)(m,{title:i?Object(g.b)(i,null):j,label:"label",tabs:p,theme:k}),p&&Object(g.b)(f,{slug:v,tabs:p,currentTab:O}),Object(g.b)(x.a,{padded:!0},t,Object(g.b)(u,{relativePagePath:l})),Object(g.b)(E.a,{pageContext:e,location:a,slug:v,tabs:p,currentTab:O}),Object(g.b)(r.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Uxid:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return u}));var a=t("wx14"),i=t("zLVn"),o=(t("q1tI"),t("7ljp")),s=t("013z"),n=t("T0C+"),r=(t("qKvR"),{}),d=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},b=d("Row"),l=d("Column"),c=d("ArticleCard"),p=d("AnchorLinks"),g=d("AnchorLink"),m={_frontmatter:r},j=s.a;function u(A){var e=A.components,t=Object(i.a)(A,["components"]);return Object(o.b)(j,Object(a.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"The Software Development Life-Cycle"),Object(o.b)("p",null,"The ",Object(o.b)(n.a,{name:"longName",mdxType:"Globals"})," supports the full Software Development Life-Cycle (SDLC). Often, we break the life-cycle\ninto three “days” to describe the distinct phases through the development process. These phases are often performed\niteratively, revisiting the activities of each “day” as more information is learned and new requirements are understood.\nThe following “Getting Started” sections walk through using the ",Object(o.b)(n.a,{name:"tinyName",mdxType:"Globals"})," through each phase of the\noverall development life-cycle."),Object(o.b)(b,{mdxType:"Row"},Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(c,{color:"dark",title:"Try  - Workshop",subTitle:"Try it your self using the workshop environment, you will be able to setup and try hands on labs within minutes",href:"/workshop",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAEy88ilQLL/xAAaEAEBAAIDAAAAAAAAAAAAAAACAQADERIh/9oACAEBAAEFAnVMK4xWO7j7rJU6m3//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EABkQAAMAAwAAAAAAAAAAAAAAAAABEQIhMf/aAAgBAQAGPwKN8KrkpwryhTaHo//EABsQAQACAgMAAAAAAAAAAAAAAAEAETFBIXGB/9oACAEBAAE/IfWCCy0Ao4hS0rFwk7M2I7nACU1P/9oADAMBAAIAAwAAABBj7//EABcRAQEBAQAAAAAAAAAAAAAAAAEAITH/2gAIAQMBAT8QE9sv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhMf/aAAgBAgEBPxBBy2//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFRYYHR/9oACAEBAAE/EHnFT5P2Uk0ANi93rcxhsJGIKGg65OYrcpyiB9RqgpS11P/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"workshop",title:"workshop",src:"/dev-guide/static/13a2dc58283b8aa05f67bb89b6bae0b0/2e753/workshop.jpg",srcSet:["/dev-guide/static/13a2dc58283b8aa05f67bb89b6bae0b0/69549/workshop.jpg 288w","/dev-guide/static/13a2dc58283b8aa05f67bb89b6bae0b0/473e3/workshop.jpg 576w","/dev-guide/static/13a2dc58283b8aa05f67bb89b6bae0b0/2e753/workshop.jpg 1152w","/dev-guide/static/13a2dc58283b8aa05f67bb89b6bae0b0/74f4b/workshop.jpg 1728w","/dev-guide/static/13a2dc58283b8aa05f67bb89b6bae0b0/de5bb/workshop.jpg 2304w","/dev-guide/static/13a2dc58283b8aa05f67bb89b6bae0b0/621b7/workshop.jpg 6000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(c,{color:"dark",title:"Day 0 - Install",subTitle:"Plan and create the environments that will be used for development and production, including the supporting tools",href:"/getting-started-day-0",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAYXx6hmCA//EABkQAAMBAQEAAAAAAAAAAAAAAAABAhEDBP/aAAgBAQABBQKaR1sVHKdv2SsxH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAABAhAxQWH/2gAIAQEABj8C0LAyK6Rdf//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQVFx/9oACAEBAAE/IbT1eFhpYGNQPG4SHaTEFcly/Z//2gAMAwEAAgADAAAAEDsP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qp//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVFh/9oACAEBAAE/EAA0tehSRtyIU7rmXkum8zWje/LI0pQZPAybESkYz//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"sysadmins2",title:"sysadmins2",src:"/dev-guide/static/dba5f615522e72f3748d545d53073859/2e753/sysadmins2.jpg",srcSet:["/dev-guide/static/dba5f615522e72f3748d545d53073859/69549/sysadmins2.jpg 288w","/dev-guide/static/dba5f615522e72f3748d545d53073859/473e3/sysadmins2.jpg 576w","/dev-guide/static/dba5f615522e72f3748d545d53073859/2e753/sysadmins2.jpg 1152w","/dev-guide/static/dba5f615522e72f3748d545d53073859/74f4b/sysadmins2.jpg 1728w","/dev-guide/static/dba5f615522e72f3748d545d53073859/de5bb/sysadmins2.jpg 2304w","/dev-guide/static/dba5f615522e72f3748d545d53073859/cab92/sysadmins2.jpg 2500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(c,{color:"dark",title:"Day 1 - Build and deploy",subTitle:"Get started developing applications using cloud-native practices and approaches to deliver code efficiently with quality from the start",href:"/getting-started-day-1",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHhlXBIJ//EABgQAAMBAQAAAAAAAAAAAAAAAAECEAAz/9oACAEBAAEFAjmh6MZ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEgMf/aAAgBAQAGPwJmT//EABsQAAEEAwAAAAAAAAAAAAAAAAEAECExEUFR/9oACAEBAAE/IQA3g0suA1ko0Bv/2gAMAwEAAgADAAAAEJD/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EFf/xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhkTFBcaH/2gAIAQEAAT8QUC5NCAUoeg5nrC1iBLdT6jEoc1qf/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"code",title:"code",src:"/dev-guide/static/68a0158912a13bce11729fd00f85f6a0/4edc6/code.jpg",srcSet:["/dev-guide/static/68a0158912a13bce11729fd00f85f6a0/69549/code.jpg 288w","/dev-guide/static/68a0158912a13bce11729fd00f85f6a0/473e3/code.jpg 576w","/dev-guide/static/68a0158912a13bce11729fd00f85f6a0/4edc6/code.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(c,{color:"dark",title:"Day 2 - Run and manage",subTitle:"Promote applications using cloud-native practices then monitor, manage, and support the application through operations processes",href:"/getting-started-day-2",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAATYE1EVUf//EABgQAQEBAQEAAAAAAAAAAAAAAAECAwAS/9oACAEBAAEFAjSqHNqfCdFMNbIKr//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAwEBPwHKP//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAgEBPwHSv//EABoQAAMBAAMAAAAAAAAAAAAAAAABIREDImH/2gAIAQEABj8CvHvuj60pBYis/8QAGxABAAICAwAAAAAAAAAAAAAAAQARITFRYYH/2gAIAQEAAT8hZo30IY3oxHEweJbH5K6hTctSLP/aAAwDAQACAAMAAAAQr8//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhUf/aAAgBAwEBPxC08L6f/8QAFxEBAAMAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxCybD//xAAdEAEAAgICAwAAAAAAAAAAAAABESEAMUGRcYGx/9oACAEBAAE/EI+j0CN67y7V53oIufuOwnOhroygE5Vj6wTkcpmPBjx22rn/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"operations",title:"operations",src:"/dev-guide/static/825271b4de7ca017a71b9bb9d9a4975d/4edc6/operations.jpg",srcSet:["/dev-guide/static/825271b4de7ca017a71b9bb9d9a4975d/69549/operations.jpg 288w","/dev-guide/static/825271b4de7ca017a71b9bb9d9a4975d/473e3/operations.jpg 576w","/dev-guide/static/825271b4de7ca017a71b9bb9d9a4975d/4edc6/operations.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)("h3",null,"Prerequisites"),Object(o.b)("p",null,"Before proceeding, be sure to walk through the ",Object(o.b)("a",{parentName:"p",href:"./prereqs"},Object(o.b)(n.a,{name:"shortName",mdxType:"Globals"})," prerequisites")," and set up the\n",Object(o.b)("a",{parentName:"p",href:"./dev-env-setup"},Object(o.b)(n.a,{name:"shortName",mdxType:"Globals"})," developer environment"),". The developer environment setup will install a\nnumber of tools that are essential for cloud-native provisioning, development, and operations."),Object(o.b)("h3",null,"CLI overview"),Object(o.b)("p",null,"One of the components of the ",Object(o.b)(n.a,{name:"shortName",mdxType:"Globals"})," is the ",Object(o.b)("a",{parentName:"p",href:"./cli"},Object(o.b)(n.a,{name:"igccli",mdxType:"Globals"}))," that provides a set\nof commands to simplify common tasks that are performed often by all the personas during the cloud-native software\ndevelopment life-cycle. The ",Object(o.b)("a",{parentName:"p",href:"./cli"},Object(o.b)(n.a,{name:"igccli",mdxType:"Globals"}))," documentation aims to make known the various commands\nthat are available and de-mystify what actions it performs."),Object(o.b)("h2",null,"Additional information"),Object(o.b)(p,{mdxType:"AnchorLinks"},Object(o.b)(g,{to:"/tools",mdxType:"AnchorLink"},"Tools Guides"),Object(o.b)(g,{to:"/practical",mdxType:"AnchorLink"},"Practical Guides")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-e071ac5a251a90048d6d.js.map