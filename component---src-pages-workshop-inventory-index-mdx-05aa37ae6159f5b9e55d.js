(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),p=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),s=a.n(c),m=a("QH2O"),O=a.n(m),A=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(A.b)("div",{className:s()(O.a.pageHeader,(t={},t[O.a.withTabs]=r.length,t[O.a.darkMode]="dark"===n,t))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:O.a.text},a)))))},j=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,p=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(A.b)("div",{className:"bx--row "+j.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:j.link,href:p},"Edit this page on GitHub"))):null},d=a("dI71"),g=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,p=new RegExp(n+"/?(#.*)?$"),b=a.replace(p,i);return Object(A.b)("li",{key:e,className:s()((t={},t[g.selectedItem]=r,t),g.listItem)},Object(A.b)(l.Link,{className:g.link,to:""+b},e))}));return Object(A.b)("div",{className:g.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",null,Object(A.b)("ul",{className:g.list},i))))))},t}(i.a.Component),T=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,s=t.relativePagePath,m=t.titleType,O=c.tabs,j=c.title,d=c.theme,g=c.description,f=c.keywords,C=Object(v.a)().interiorTheme,y=Object(l.useStaticQuery)("223705900").site.pathPrefix,E=y?n.pathname.replace(y,""):n.pathname,I=O?E.split("/").filter(Boolean).slice(-1)[0]||o()(O[0],{lower:!0}):"",R=d||C;return Object(A.b)(b.a,{tabs:O,homepage:!1,theme:R,pageTitle:j,pageDescription:g,pageKeywords:f,titleType:m},Object(A.b)(u,{title:i?Object(A.b)(i,null):j,label:"label",tabs:O,theme:R}),O&&Object(A.b)(h,{slug:E,tabs:O,currentTab:I}),Object(A.b)(T.a,{padded:!0},a,Object(A.b)(N,{relativePagePath:s})),Object(A.b)(p.a,null))}},uzot:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("XbGe"),p=(a("T0C+"),a("qKvR"),{}),b=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),c={_frontmatter:p},s=l.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(s,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Deploy a 3 tier Microservice using React, Node.js, and Java")),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/gvuJi7qEZck",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Prerequisites"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The instructor should ",Object(o.b)("a",{parentName:"li",href:"/dev-guide/workshop/setup"},"Setup Workshop Environment")),Object(o.b)("li",{parentName:"ul"},"The student should ",Object(o.b)("a",{parentName:"li",href:"/dev-guide/workshop/terminal"},"Setup CLI and Terminal Shell")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Instructor will provide the following info:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"OpenShift Console URL (OCP_CONSOLE_URL)"),Object(o.b)("li",{parentName:"ul"},"The username and password for OpenShift and Git Server (default values are user01, user02, etc.. for users and ",Object(o.b)("inlineCode",{parentName:"li"},"password")," for password)."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("inlineCode",{parentName:"p"},"TOOLKIT_USERNAME")," environment variable.\nIf you are participation in a workshop replace ",Object(o.b)("inlineCode",{parentName:"p"},"userdemo")," with your assigned username (ex. ",Object(o.b)("inlineCode",{parentName:"p"},"user01"),")."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"TOOLKIT_USERNAME=userdemo\n\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Login to OpenShift using ",Object(o.b)("inlineCode",{parentName:"p"},"oc")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If using IBM Cloud cluster then login with your IBM account email and IAM API Key or Token by using the ",Object(o.b)("strong",{parentName:"li"},"Copy Login Command"),Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"439px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFu2jAiPB//xAAZEAACAwEAAAAAAAAAAAAAAAAAAwEEFCD/2gAIAQEAAQUCwKIpqgyK4//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAIBBQAAAAAAAAAAAAAAAAABEQIgMTKR/9oACAEBAAY/As1EQ2avtn//xAAaEAEAAQUAAAAAAAAAAAAAAAABEABBgdHx/9oACAEBAAE/IemaoPJLLLx//9oADAMBAAIAAwAAABBwL//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EEf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxBX/8QAGxAAAgMAAwAAAAAAAAAAAAAAESEAARAxgaH/2gAIAQEAAT8QYZBz13yPBDsPbLx//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Login",title:"Login",src:"/dev-guide/static/75b1c2097aefc07605cbecf798f7c126/88c5d/login.jpg",srcSet:["/dev-guide/static/75b1c2097aefc07605cbecf798f7c126/69549/login.jpg 288w","/dev-guide/static/75b1c2097aefc07605cbecf798f7c126/88c5d/login.jpg 439w"],sizes:"(max-width: 439px) 100vw, 439px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("li",{parentName:"ul"},"If using a cluster that was configured with the workshop scripts outside IBM Cloud then use respective assigned username (ex. ",Object(o.b)("inlineCode",{parentName:"li"},"user01"),"), and the password is ",Object(o.b)("inlineCode",{parentName:"li"},"password"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"oc login $OCP_URL -u $TOOLKIT_USERNAME -p password\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("inlineCode",{parentName:"p"},"TOOLKIT_PROJECT")," environment variable,\nIf you are participation in a workshop replace ",Object(o.b)("inlineCode",{parentName:"p"},"projectdemo")," based on your assigned username (ex. ",Object(o.b)("inlineCode",{parentName:"p"},"project01"),")."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"TOOLKIT_PROJECT=projectdemo\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a project/namespace using your project prefix, and ",Object(o.b)("inlineCode",{parentName:"p"},"-dev")," and suffix"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc sync $TOOLKIT_PROJECT-dev\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork Inventory Sample Application Java"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open Developer Dashboard from the OpenShift Console"),Object(o.b)("li",{parentName:"ul"},"Select Starter Kits"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Inventory Service")," (Java)"),Object(o.b)("li",{parentName:"ul"},"Click Fork"),Object(o.b)("li",{parentName:"ul"},"Login into GIT Sever using the provided username and password (ie ",Object(o.b)("inlineCode",{parentName:"li"},"user01")," and ",Object(o.b)("inlineCode",{parentName:"li"},"password"),")"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Fork Repository")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_REPO=inventory-management-svc-solution\nGIT_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/${TOOLKIT_USERNAME}/${GIT_REPO}\necho GIT_URL=${GIT_URL}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a pipeline for the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc pipeline --tekton ${GIT_URL}#master -p scan-image=false\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open the url to see the pipeline running in the OpenShift Console")))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Fork Inventory Sample Application TypeScript",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open Developer Dashboard from the OpenShift Console"),Object(o.b)("li",{parentName:"ul"},"Select Starter Kits"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Inventory BFF")," (TypeScript)"),Object(o.b)("li",{parentName:"ul"},"Click Fork"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Fork Repository"))))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_REPO=inventory-management-bff-solution\nGIT_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/${TOOLKIT_USERNAME}/${GIT_REPO}\necho GIT_URL=${GIT_URL}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a pipeline for the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc pipeline --tekton ${GIT_URL}#master -p scan-image=false\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open the url to see the pipeline running in the OpenShift Console"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork Inventory Sample Application React"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open Developer Dashboard from the OpenShift Console"),Object(o.b)("li",{parentName:"ul"},"Select Starter Kits"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Inventory UI")," (React)"),Object(o.b)("li",{parentName:"ul"},"Click Fork"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Fork Repository")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_REPO=inventory-management-ui-solution\nGIT_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/${TOOLKIT_USERNAME}/${GIT_REPO}\necho GIT_URL=${GIT_URL}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a pipeline for the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"oc pipeline --tekton ${GIT_URL}#master -p scan-image=false\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open the url to see the pipeline running in the OpenShift Console")))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_OPS_URL")," for the git url using the value from previous step or as following"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"GIT_OPS_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/toolkit/gitops\necho GIT_OPS_URL=${GIT_OPS_URL}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the git repository and change directory"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone $GIT_OPS_URL gitops-inventory\ncd gitops-inventory\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the ",Object(o.b)("inlineCode",{parentName:"p"},"qa")," directory in the git repository, the directory might be empty if the 3 pipelines are not done yet."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ls -l qa/${TOOLKIT_PROJECT}/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the ",Object(o.b)("inlineCode",{parentName:"p"},"qa")," directory in the git repository again"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ls -l qa/${TOOLKIT_PROJECT}/\n")),Object(o.b)("p",{parentName:"li"},"You should see 3 directories"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"inventory-management-bff-solution/\ninventory-management-svc-solution/\ninventory-management-ui-solution/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note"),":If you don’t see the directories, this is a good time for a coffee break of 15 minutes until all 3 Pipeline Runs are done."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the Pipeline Runs are done, try to list the directories again. Each directory contains their corresponding yaml manifest files (ie Helm Chart)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ls -l qa/${TOOLKIT_PROJECT}/inventory-management-bff-solution\nls -l qa/${TOOLKIT_PROJECT}/inventory-management-svc-solution\nls -l qa/${TOOLKIT_PROJECT}/inventory-management-ui-solution\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Promote the application to ",Object(o.b)("strong",{parentName:"p"},"QA")," using git by creating a manifest yaml (ie Helm Chart) that leverage the Cloud Native Toolkit chart ",Object(o.b)("inlineCode",{parentName:"p"},"argocd-config")," to automate the creation of multiple ArgoCD Applications."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'git config --local user.email "${TOOLKIT_USERNAME}@example.com"\ngit config --local user.name "${TOOLKIT_USERNAME}"\n\ncat > qa/${TOOLKIT_PROJECT}/Chart.yaml <<EOF\napiVersion: v2\nversion: 1.0.0\nname: project-config-helm\ndescription: Chart to configure ArgoCD with the inventory application\n\ndependencies:\n- name: argocd-config\n  version: 0.16.0\n  repository: https://cloud-native-toolkit.github.io/toolkit-charts\nEOF\n\ncat > qa/${TOOLKIT_PROJECT}/values.yaml <<EOF\nglobal: {}\nargocd-config:\n  repoUrl: "http://gogs.tools:3000/toolkit/gitops.git"\n  project: inventory-qa\n  applicationTargets:\n  - targetRevision: master\n    createNamespace: true\n    targetNamespace: ${TOOLKIT_PROJECT}-qa\n    applications:\n    - name: qa-${TOOLKIT_PROJECT}-inventory-svc\n      path: qa/${TOOLKIT_PROJECT}/inventory-management-svc-solution\n      type: helm\n    - name: qa-${TOOLKIT_PROJECT}-inventory-bff\n      path: qa/${TOOLKIT_PROJECT}/inventory-management-bff-solution\n      type: helm\n    - name: qa-${TOOLKIT_PROJECT}-inventory-ui\n      path: qa/${TOOLKIT_PROJECT}/inventory-management-ui-solution\n      type: helm\nEOF\n\ncat qa/${TOOLKIT_PROJECT}/values.yaml\n\ngit add .\ngit commit -m "Add inventory application to gitops for project ${TOOLKIT_PROJECT}"\ngit push -u origin master\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Register the Application in ArgoCD to deploy using GitOps"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select ArgoCD from the Console Link and login using OpenShift login"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"NEW APP")),Object(o.b)("li",{parentName:"ul"},"Application Name: ${TOOLKIT_PROJECT}-inventory (ie project01-inventory)"),Object(o.b)("li",{parentName:"ul"},"ArgoCD Project: ",Object(o.b)("inlineCode",{parentName:"li"},"default")),Object(o.b)("li",{parentName:"ul"},"Sync Policy: ",Object(o.b)("inlineCode",{parentName:"li"},"Automatic")," (Check prune resources and self heal)"),Object(o.b)("li",{parentName:"ul"},"Repository URL: ",Object(o.b)("inlineCode",{parentName:"li"},"http://gogs.tools:3000/toolkit/gitops.git")),Object(o.b)("li",{parentName:"ul"},"Revision: ",Object(o.b)("inlineCode",{parentName:"li"},"HEAD")),Object(o.b)("li",{parentName:"ul"},"Path: ",Object(o.b)("inlineCode",{parentName:"li"},"qa/${TOOLKIT_PROJECT}")," (ie qa/project01)"),Object(o.b)("li",{parentName:"ul"},"Cluster: ",Object(o.b)("inlineCode",{parentName:"li"},"in-cluster")),Object(o.b)("li",{parentName:"ul"},"Namespace: ",Object(o.b)("inlineCode",{parentName:"li"},"tools")),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"CREATE")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the Applications in ArgoCD"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Filter by Namespace ",Object(o.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-qa")," (ie project01-qa)"),Object(o.b)("li",{parentName:"ul"},"Review Application: inventory-management-svc-solution"),Object(o.b)("li",{parentName:"ul"},"Review Application: inventory-management-bff-solution"),Object(o.b)("li",{parentName:"ul"},"Review Application: inventory-management-ui-solution"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Review the Application in OpenShift"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Switch to Developer perspective"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Topology")," from the menu"),Object(o.b)("li",{parentName:"ul"},"Switch to project ",Object(o.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-qa")," (ie project01-qa)"),Object(o.b)("li",{parentName:"ul"},"Open the Application from the JavaScript UI and make sure the stocks show up in the browser. Click on the route url on from the ui deployment, or the link on the circle."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now the Microservices application is ready for the development teams, in some cases each team will own and work with the git repository for the microservices, while the gitops git repository is own by the operations team.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Congratulations you finished this activity, continue with another lab in the workshop"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-workshop-inventory-index-mdx-05aa37ae6159f5b9e55d.js.map