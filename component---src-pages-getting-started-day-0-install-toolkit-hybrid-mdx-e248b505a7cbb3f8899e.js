(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),s=a.n(p),m=a("QH2O"),d=a.n(m),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:s()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,b=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("9Hrx"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),i=r===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,r);return Object(u.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(u.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},t}(r.a.Component),y=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,p=void 0===i?{}:i,s=t.relativePagePath,m=t.titleType,d=p.tabs,h=p.title,N=p.theme,f=p.description,C=p.keywords,x=Object(T.a)().interiorTheme,w=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=w?n.pathname.replace(w,""):n.pathname,P=d?k.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",D=N||x;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:D,pageTitle:h,pageDescription:f,pageKeywords:C,titleType:m},Object(u.b)(O,{title:r?Object(u.b)(r,null):h,label:"label",tabs:d,theme:D}),d&&Object(u.b)(v,{slug:k,tabs:d,currentTab:P}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:s})),Object(u.b)(g.a,{pageContext:t,location:n,slug:k,tabs:d,currentTab:P}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},vwG7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n,r=a("k1TG"),i=a("8o2o"),o=(a("q1tI"),a("7ljp")),l=a("013z"),b=a("T0C+"),c=(a("qKvR"),{}),p=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:c},m=l.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(m,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"Steps to prepare an environment using the ",Object(o.b)(b.a,{name:"shortName",mdxType:"Globals"})," in an existing OpenShift cluster.")),Object(o.b)("h3",null,"A. Download the Iteration Zero scripts"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Clone the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero.git\n")))),Object(o.b)("h3",null,"B. Configure the credentials"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In a terminal, change to the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," cloned directory"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cd ibm-garage-iteration-zero\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.template")," file to a file named ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.properties")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"cp credentials.template credentials.properties\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:")," ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.properties")," is already listed in ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore")," to prevent the\nprivate credentials from being committed to the git repository")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the values for ",Object(o.b)("inlineCode",{parentName:"p"},"login.user")," and ",Object(o.b)("inlineCode",{parentName:"p"},"login.password")," in ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.properties")," with your credentials for the OpenShift cluster"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note:")," The credentials should have been set up during ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-guide/getting-started-0/plan-installation/hybrid"}),"plan installation"),"."))),Object(o.b)("h3",null,"C. Configure the environment variables"),Object(o.b)("p",null,"The configuration values for provisioning the environment on an existing OpenShift cluster are set in the ",Object(o.b)("inlineCode",{parentName:"p"},"environment-ocp.tfvars"),"\nfile in the ",Object(o.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory of the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," repository. There are only two values available:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Variable")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Required?")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"eg. Value")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"server_url")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"yes"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The url of the OpenShift cluster’s API server"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"https://api.mycluster.com"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"cluster_name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"no"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The name of the cluster used simply for identification purposes. Defaults to ",Object(o.b)("inlineCode",{parentName:"td"},"ocp-cluster")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"dev-team-one-ocp44"))))),Object(o.b)("h3",null,"D. (Optional) Customize the installed components"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"terraform/stages-ocp4")," directory contains the default set of stages that define the\nmodules that will be applied to the environment. The stages can be customized to change\nthe makeup of the environment that is provisioned by either removing or adding stages from/to the\n",Object(o.b)("inlineCode",{parentName:"p"},"terraform/stages-ocp4")," directory. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," The stages occasionally have dependencies on other stages (e.g. most all\ndepend on the cluster module, many depend on the namespace module, etc.) so be aware of those\ndependencies as you start making changes. Dependencies are reflected in the ",Object(o.b)("inlineCode",{parentName:"p"},"module.{stage name}")," references\nin the stage variable list."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"terraform/stages-ocp4/catalog")," directory contains some optional\nstages that are prep-configured and can be dropped into the ",Object(o.b)("inlineCode",{parentName:"p"},"terraform/stages-ocp4")," directory. Other\nmodules are available from the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"}),"Garage Terraform Modules"),"\ncatalog and can be added as stages to the directory as well. Since this is Terraform,\nany other Terraform scripts and modules can be added to the ",Object(o.b)("inlineCode",{parentName:"p"},"terraform/stages-ocp4")," directory\nas desired."),Object(o.b)("h3",null,"E. Run the installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open a terminal to the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," directory")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launch a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container")," from which the Terraform scripts will be run"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./launch.sh\n")),Object(o.b)("p",{parentName:"li"},"This will download the Cloud Garage Tools Docker image that contains all the necessary tools to execute Terraform scripts\nand exec shell into the running container. When the container starts it\nmounts the filesystem’s ",Object(o.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(o.b)("inlineCode",{parentName:"p"},"/home/devops/src/")," and loads the values from the\n",Object(o.b)("inlineCode",{parentName:"p"},"credentials.properties")," file as environment variables.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Apply the Terraform by running the provided ",Object(o.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"./runTerraform.sh\n")),Object(o.b)("p",{parentName:"li"},"This script collects the values provided in the ",Object(o.b)("inlineCode",{parentName:"p"},"environment-ocp.tfvars")," and the\nstages defined in ",Object(o.b)("inlineCode",{parentName:"p"},"terraform/stages-ocp4")," to build the Terraform workspace. Along the way it\nwill prompt for a couple pieces of information."),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Type of installation: ",Object(o.b)("inlineCode",{parentName:"p"},"ibmcloud")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ocp")),Object(o.b)("p",{parentName:"li"},"There are two major paths to installing with the Toolkit. In this case, we are installing\ninto a hybrid OpenShift instance so we will select ",Object(o.b)("inlineCode",{parentName:"p"},"ocp"),"."),Object(o.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(o.b)("inlineCode",{parentName:"p"},"--ocp")," as an argument to ",Object(o.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Handling of an old workspace (if applicable): ",Object(o.b)("inlineCode",{parentName:"p"},"keep")," or ",Object(o.b)("inlineCode",{parentName:"p"},"delete")),Object(o.b)("p",{parentName:"li"},"If you executed the script previously for the current cluster configuration and the workspace directory still\nexists then you will be prompted to either keep or delete the workspace directory. Keep the workspace directory if\nyou want to use the state from the previous run as a starting point to either add or remove configuration. Delete\nthe workspace if you want to start with a clean install of the Toolkit. "),Object(o.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(o.b)("inlineCode",{parentName:"p"},"--delete")," or ",Object(o.b)("inlineCode",{parentName:"p"},"--keep")," as an argument to ",Object(o.b)("inlineCode",{parentName:"p"},"./runTerraform.sh"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify the installation configuration"),Object(o.b)("p",{parentName:"li"},"The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(o.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(o.b)("p",{parentName:"li"},"This prompt can be skipped by providing ",Object(o.b)("inlineCode",{parentName:"p"},"--auto-approve")," as an argument to ",Object(o.b)("inlineCode",{parentName:"p"},"./runTerraform.sh")))),Object(o.b)("p",{parentName:"li"},"Provisioning the tools into an OpenShift takes about 20 minutes, depending on network and storage performance."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-install-toolkit-hybrid-mdx-e248b505a7cbb3f8899e.js.map