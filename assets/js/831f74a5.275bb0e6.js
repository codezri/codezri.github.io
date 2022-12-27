(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return g})),n.d(t,"toc",(function(){return j})),n.d(t,"default",(function(){return O}));var i=n(3),a=n(8),r=n(0),o=n.n(r),l=n(122),c=n(129),s=n(118),u=n(93),d=n.n(u);var b=37,p=39;var m=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,a=e.values,l=e.groupId,u=e.className,m=Object(c.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(r.useState)(i),j=g[0],v=g[1],O=r.Children.toArray(e.children),y=[];if(null!=l){var N=f[l];null!=N&&N!==j&&a.some((function(e){return e.value===N}))&&v(N)}var w=function(e){var t=e.target,n=y.indexOf(t),i=O[n].props.value;v(i),null!=l&&(h(l,i),setTimeout((function(){var e,n,i,a,r,o,l,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&a<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d.a.tabItemActive),setTimeout((function(){return t.classList.remove(d.a.tabItemActive)}),2e3))}),150))},z=function(e){var t,n;switch(e.keyCode){case p:var i=y.indexOf(e.target)+1;n=y[i]||y[0];break;case b:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},a.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(s.a)("tabs__item",d.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:z,onFocus:w,onClick:w},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))};var f=function(e){var t=e.children,n=e.hidden,i=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)},h={title:"How to Use"},g={unversionedId:"buildzri/integrate",id:"buildzri/integrate",isDocsHomePage:!1,title:"How to Use",description:"Add BuildZri to your C++ project with the following steps.",source:"@site/docs/buildzri/integrate.mdx",slug:"/buildzri/integrate",permalink:"/docs/buildzri/integrate",editUrl:"https://github.com/codezri/codezri.github.io/edit/master/docs/buildzri/integrate.mdx",version:"current",sidebar:"docs",previous:{title:"BuildZri Introduction",permalink:"/docs/buildzri/intro"},next:{title:"Reference",permalink:"/docs/buildzri/reference"}},j=[{value:"Add the BuildZri script",id:"add-the-buildzri-script",children:[]},{value:"Create the configuration file",id:"create-the-configuration-file",children:[]},{value:"Start building binaries",id:"start-building-binaries",children:[]}],v={toc:j};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Add BuildZri to your C++ project with the following steps."),Object(l.b)("h2",{id:"add-the-buildzri-script"},"Add the BuildZri script"),Object(l.b)("p",null,"BuildZri comes as a Python v3 script that you can execute on GNU/Linux, macOS, and Windows. Copy-paste\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/codezri/buildzri/blob/main/scripts/bz.py"},Object(l.b)("inlineCode",{parentName:"a"},"scripts/bz.py"))," into your ",Object(l.b)("inlineCode",{parentName:"p"},"scripts")," directory.\nNext, add required execution permissions on Unix or Unix-like platforms."),Object(l.b)("h2",{id:"create-the-configuration-file"},"Create the configuration file"),Object(l.b)("p",null,"Create the ",Object(l.b)("inlineCode",{parentName:"p"},"buildzri.config.json")," file for your project according to the ",Object(l.b)("a",{parentName:"p",href:"/docs/buildzri/reference"},"reference"),". Look at\nthe following minimal C++ project."),Object(l.b)(m,{defaultValue:"buildzri.config.json",values:[{label:"buildzri.config.json",value:"buildzri.config.json"},{label:"main.cpp",value:"main.cpp"}],mdxType:"Tabs"},Object(l.b)(f,{value:"buildzri.config.json",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "std": "c++17",\n  "name": "BuildZri Sample",\n  "version": "1.0.1",\n  "output": "./bin/bzsample-${BZ_OS}_${BZ_ARCH}",\n  "source": {\n      "*": [\n          "main.cpp"\n      ],\n  },\n  "definitions": {\n      "*": [\n          "BZ_PROJ_VERSION=\\\\\\"${BZ_VERSION}\\\\\\""\n      ]\n  }\n}\n'))),Object(l.b)(f,{value:"main.cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n\nusing namespace std;\n\nint main() {\n  cout << "Hello BuildZri" << endl;\n  #if defined(BZ_PROJ_VERSION)\n      cout << "v" << BZ_PROJ_VERSION << endl;\n  #endif\n}\n')))),Object(l.b)("p",null,"The above project consists of one C++ source file, but you can add multiple source files easily with the\nwildcard syntax. As show above, you can configure BuildZri to automatically set version details via a macro\ndefinition."),Object(l.b)("p",null,"Inspect the build configuration file of the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/blob/main/buildzri.config.json"},"Neutralinojs"),"\nframework to learn how to integrate BuildZri for medium-scale projects."),Object(l.b)("h2",{id:"start-building-binaries"},"Start building binaries"),Object(l.b)("p",null,"After configuring your project, run the ",Object(l.b)("inlineCode",{parentName:"p"},"bz.py")," script file to start the compilation process. For example,\non Unix or Unix-like platforms, you can use the following command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"./scripts/bz.py\n")),Object(l.b)("p",null,"The compilation warnings and error messages will appear on the terminal as usual. Also, you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"--verbose"),"\nflag to identify pre-compilation issues. The BuildZri tool is built for both developers and CI/CD environments,\nso you can use the same build command on GitHub Actions, as shown below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"- name: Build\n  run: ./scripts/bz.py\n")))}O.isMDXComponent=!0}}]);