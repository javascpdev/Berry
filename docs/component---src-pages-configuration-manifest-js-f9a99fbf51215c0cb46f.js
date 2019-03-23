(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,t,i){"use strict";i.r(t);var n=i(9),a=i(0),s=i.n(a),c=(i(162),i(159)),j=Object(c.a)("div",{target:"e10agvck0"})({name:"bzwkrs",styles:'padding:2em;font-family:"PT Mono";background:#242424;color:#ddddcc;code{font-family:"PT Mono";color:#639db1;}> *{margin-top:0;}&,span{white-space:nowrap;}'}),r={name:"nq4fwr",styles:"& >:first-child{margin-top:1em;}& >:last-child{margin-bottom:1em;}"},l={name:"ncd0q6",styles:"color:#8ac6f2;"},o={name:"1wz9506",styles:"color:#95e454;"},u={name:"1ua7ycq",styles:"color:#f08080;"},M=Object(c.a)("div",{target:"e10agvck1"})({name:"1tbg2l9",styles:'margin-top:1em;margin-bottom:0.5em;font-family:"Open Sans";white-space:normal;'}),g=function(e){var t=e.description,i=e.children;return Object(n.jsx)(s.a.Fragment,null,t&&Object(n.jsx)(M,null,t),i)},d=function(e){var t=e.name,i=e.children;return Object(n.jsx)("div",null,Object(n.jsx)("div",null,t&&Object(n.jsx)(s.a.Fragment,null,Object(n.jsx)("span",{css:l},'"',t,'"'),": "),"["),Object(n.jsx)("div",{style:{paddingLeft:"2em"}},i),Object(n.jsx)("div",null,t?"],":"]"))},L=function(e){var t=e.name,i=e.children,a=e.margin;return Object(n.jsx)("div",null,Object(n.jsx)("div",null,t&&Object(n.jsx)(s.a.Fragment,null,Object(n.jsx)("span",{css:l},'"',t,'"'),": "),"{"),Object(n.jsx)("div",{style:{paddingLeft:"2em"},css:a?r:null},i),Object(n.jsx)("div",null,t?"},":"}"))},x=function(e){var t=e.placeholder;return Object(n.jsx)("div",null,Object(n.jsx)("span",{css:o},JSON.stringify(t)),",")},p=function(e){var t=e.name,i=e.margin,a=e.description,c=e.children;return Object(n.jsx)(s.a.Fragment,null,Object(n.jsx)(g,{description:a},Object(n.jsx)(L,{name:t,margin:i},c)))},b=function(e){var t=e.name,i=e.description,a=e.children;return Object(n.jsx)(s.a.Fragment,null,Object(n.jsx)(g,{description:i},Object(n.jsx)(d,{name:t},a)))},y=function(e){var t=e.name,i=e.placeholder,a=e.description;return Object(n.jsx)(s.a.Fragment,null,Object(n.jsx)(g,{description:a},Object(n.jsx)("div",null,Object(n.jsx)("span",{css:l},'"',t,'"'),": ",Object(n.jsx)("span",{css:o},JSON.stringify(i)),",")))},N=function(e){var t=e.name,i=e.placeholder,a=e.description;return Object(n.jsx)(s.a.Fragment,null,Object(n.jsx)(g,{description:a},Object(n.jsx)("div",null,Object(n.jsx)("span",{css:l},'"',t,'"'),": ",Object(n.jsx)("span",{css:u},i),",")))},I=i(199);t.default=function(){return Object(n.jsx)(s.a.Fragment,null,Object(n.jsx)(I.a,null,Object(n.jsx)(j,null,Object(n.jsx)(y,{name:"name",placeholder:"@scope/name",description:Object(n.jsx)(s.a.Fragment,null,"The name of the package. Used to identify it accross the application, especially amongst multiple workspaces. The first part of the name (here ",Object(n.jsx)("code",null,"@scope/"),") is optional and is used as a namespace).")}),Object(n.jsx)(y,{name:"version",placeholder:"1.2.3",description:Object(n.jsx)(s.a.Fragment,null,"The version of the package. Usually doesn't have any impact on your project, except when it is a workspace - then its version must match the specified ranges for the workspace to be selected as resolution candidate.")}),Object(n.jsx)(N,{name:"private",placeholder:"true",description:Object(n.jsx)(s.a.Fragment,null,"If true, the package is considered private and Yarn will refuse to publish it regardless of the circumstances. Setting this flag also unlocks some features that wouldn't make sense in published packages, such as workspaces.")}),Object(n.jsx)(y,{name:"license",placeholder:"MIT",description:Object(n.jsx)(s.a.Fragment,null,"An SPDX identifier that indicates under which license is your package distributed. Note that the default license can be set via the ",Object(n.jsx)("code",null,"initLicense")," settings.")}),Object(n.jsx)(y,{name:"languageName",placeholder:"node",description:Object(n.jsx)(s.a.Fragment,null,"An enumeration used by the linker plugins to figure which linker should install a specific package. Only some values are allowed, consult the documentation to know more.")}),Object(n.jsx)(p,{name:"bin",description:Object(n.jsx)(s.a.Fragment,null,"A field used to expose some executable Javascript files to the parent package. Any entry listed here will be made available through the ",Object(n.jsx)("code",null,"$PATH"),". Note that it is very advised to only expose Javascript files for portability reasons (shell scripts require the user to have a specific shell, and are incompatibles with zip access).")},Object(n.jsx)(y,{name:"my-bin",placeholder:"./dist/my-bin.js"})),Object(n.jsx)(p,{name:"scripts",description:Object(n.jsx)(s.a.Fragment,null,"A field used to list small shell scripts that will be executed when running ",Object(n.jsx)("code",null,"yarn run"),". Scripts are by default executed by a miniature shell, so some advanced features might not be available (if you have more complex needs, we recommend you to just execute a Javascript file). Note that scripts containing ",Object(n.jsx)("code",null,":")," (the colon character) are globals to your project and can be called regardless of your current workspace. Finally, be aware that scripts are always executed relative to the closest workspace (never the cwd).")},Object(n.jsx)(y,{name:"test",placeholder:"jest"}),Object(n.jsx)(y,{name:"build",placeholder:"webpack-cli --config ./webpack.config.js"}),Object(n.jsx)(y,{name:"count-words",placeholder:'echo "$@" | wc -w'})),Object(n.jsx)(p,{name:"dependencies",description:Object(n.jsx)(s.a.Fragment,null,"The set of dependencies that must be made available to the current package in order for it to work properly. Consult the list of supported ranges for more information.")},Object(n.jsx)(y,{name:"webpack",placeholder:"^5.0.0"})),Object(n.jsx)(p,{name:"devDependencies",description:Object(n.jsx)(s.a.Fragment,null,"Similar to the ",Object(n.jsx)("code",null,"dependencies"),' field, except that these dependencies are only installed on local installs and will never be installed by the consumers of your package. Note that because that would lead to different install trees depending on whether the install is made in "production" or "development" mode, Yarn doesn\'t offer a way to prevent the installation of dev dependencies at the moment.')},Object(n.jsx)(y,{name:"webpack",placeholder:"^5.0.0"})),Object(n.jsx)(p,{name:"peerDependencies",description:Object(n.jsx)(s.a.Fragment,null,"Peer dependencies are inherited dependencies - the consumer of your package will be tasked to provide them. This is typically what you want when writting plugins, for example. Be careful: listing peer dependencies will have side effects on the way your package will be executed by your consumers. Check the documentation for more information.")},Object(n.jsx)(y,{name:"react",placeholder:"*"}),Object(n.jsx)(y,{name:"react-dom",placeholder:"*"})),Object(n.jsx)(b,{name:"workspaces",description:Object(n.jsx)(s.a.Fragment,null,"Workspaces are an optional feature used by monorepos to split a large project into semi-independent subprojects, each one listing their own set of dependencies. The ",Object(n.jsx)("code",null,"workspaces")," field is a list of glob pattern that match all directories that should become workspaces of your application.")},Object(n.jsx)(x,{placeholder:"packages/*"})),Object(n.jsx)(p,{name:"dependenciesMeta",description:Object(n.jsx)(s.a.Fragment,null,"This field lists some extra information related to the dependencies listed in the ",Object(n.jsx)("code",null,"dependencies")," and ",Object(n.jsx)("code",null,"devDependencies")," field. In the context of a workspaced project most of these settings will affect ",Object(n.jsx)("em",null,"all workspaces")," and as such must be specified at the ",Object(n.jsx)("em",null,"root")," of the project (except if noted otherwise, the ",Object(n.jsx)("code",null,"dependenciesMeta")," field will be ignored if found within a workspace).")},Object(n.jsx)(p,{name:"fsevents",margin:!0},Object(n.jsx)(N,{name:"built",placeholder:"false",description:Object(n.jsx)(s.a.Fragment,null,"If false, the package will never be built. When the global settings ",Object(n.jsx)("code",null,"enableScripts")," is toggled off, setting this additional flag will also downgrade the warning into a simple notice for this specific package.")}),Object(n.jsx)(N,{name:"unplugged",placeholder:"true",description:Object(n.jsx)(s.a.Fragment,null,"If true, the specified package will be automatically unplugged at install time. This should only be needed for packages that contain scripts in other languages than Javascript (for example ",Object(n.jsx)("code",null,"nan")," contains C++ headers).")}))),Object(n.jsx)(p,{name:"peerDependenciesMeta",description:Object(n.jsx)(s.a.Fragment,null,"This field lists some extra information related to the dependencies listed in the ",Object(n.jsx)("code",null,"peerDependencies")," field.")},Object(n.jsx)(p,{name:"react-dom",margin:!0},Object(n.jsx)(N,{name:"optional",placeholder:"true",description:Object(n.jsx)(s.a.Fragment,null,"If true, the selected peer dependency will be marked as optional by the package manager and the consumer omitting it won't be reported as an error.")}))),Object(n.jsx)(p,{name:"dependenciesMeta",description:Object(n.jsx)(s.a.Fragment,null,"This field allows you to instruct Yarn to use a specific resolution instead of anything the resolver would normally pick. This is useful to enforce all your packages to use a single version of a dependency, or backport a fix. The syntax for the resolution key accepts one level of specificity, so all the following examples are correct.")},Object(n.jsx)(y,{name:"relay-compiler",placeholder:"3.0.0"}),Object(n.jsx)(y,{name:"webpack/memory-fs",placeholder:"0.4.1"}),Object(n.jsx)(y,{name:"@babel/core/json5",placeholder:"2.1.0"}),Object(n.jsx)(y,{name:"@babel/core/@babel/generator",placeholder:"7.3.4"}),Object(n.jsx)(y,{name:"@babel/core@npm:7.0.0/@babel/generator",placeholder:"7.3.4"}),Object(n.jsx)(y,{name:"@babel/core/@npm:babel/generator@npm:^7.0.0",placeholder:"7.3.4"})))))}},157:function(e,t,i){var n;e.exports=(n=i(164))&&n.default||n},158:function(e,t,i){"use strict";i.d(t,"b",function(){return n}),i.d(t,"a",function(){return a});var n=function(){return"@media (max-width: 600px)"},a=function(){return"@media (min-width: 601px)"}},160:function(e,t,i){"use strict";i(9);var n=i(0),a=i.n(n),s=i(4),c=i.n(s),j=i(33),r=i.n(j);i.d(t,"a",function(){return r.a});i(157),a.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},163:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Home",link:"/"},{name:"Getting started",link:"/getting-started"},{name:"Configuration",link:"/configuration"},{name:"Features",link:"/features"}]}}}}},164:function(e,t,i){"use strict";i.r(t);i(56);var n=i(0),a=i.n(n),s=i(4),c=i.n(s),j=i(57),r=i(2),l=function(e){var t=e.location,i=r.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(j.a,Object.assign({location:t,pageResources:i},i.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},165:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTE1NC44IDUxOCI+PHN0eWxlPi5zdDB7ZmlsbDojMmM4ZWJifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTcxOC42IDI1Ny44Yy04IDI3LjYtMjAuOCA0Ny42LTM1LjIgNjMuNlYxODFjMC05LjYtOC40LTE3LjYtMjEuNi0xNy42LTUuNiAwLTEwLjQgMi44LTEwLjQgNi44IDAgMi44IDEuNiA1LjIgMS42IDEyLjh2NjQuNGMtNC44IDI4LTE2LjggNTQtMzIuOCA1NC0xMS42IDAtMTguNC0xMS42LTE4LjQtMzMuMiAwLTMzLjYgNC40LTUxLjIgMTEuNi04MC44IDEuNi02IDEzLjItMjItNi40LTIyLTIxLjIgMC0xOC40IDgtMjEuMiAxNC44IDAgMC0xMy40IDQ3LjYtMTMuNCA5MCAwIDM0LjggMTQuNiA1Ny42IDQxLjQgNTcuNiAxNy4yIDAgMjkuNi0xMS42IDM5LjItMjcuNlYzNTFjLTI2LjQgMjMuMi00OS42IDQzLjYtNDkuNiA4NCAwIDI1LjYgMTYgNDYgMzguNCA0NiAyMC40IDAgNDEuNi0xNC44IDQxLjYtNTYuOFYzNTVjMjEuNi0xOC44IDQ0LjgtNDIuNCA1OC40LTg4LjguNC0xLjYuNC0zLjYuNC00IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTcuMiAzLjYtOS42IDEyem0tNzYuOCAxOThjLTYuNCAwLTEwLjQtOS42LTEwLjQtMjIgMC0yNCA4LjgtMzkuMiAyMS42LTUyLjR2NDIuOGMwIDcuNiAxLjYgMzEuNi0xMS4yIDMxLjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTgzMy40IDMwMWMtOS42IDAtMTMuNi05LjYtMTMuNi0xOC40di02NmMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHY2MS42Qzc4NSAyOTEuNCA3NzcuOCAzMDEgNzY3IDMwMWMtMTQgMC0yMi44LTEyLTIyLjgtMzIuOCAwLTU3LjYgMzUuNi04My42IDY2LTgzLjYgNCAwIDggLjggMTEuNi44IDQgMCA1LjItMi40IDUuMi05LjIgMC0xMC40LTcuNi0xNi44LTE4LjQtMTYuOC00OC44IDAtOTUuMiA0MC44LTk1LjIgMTA3LjYgMCAzNCAxNi40IDYwLjQgNDcuNiA2MC40IDE1LjIgMCAyNi40LTcuMiAzNC40LTE2LjQgNiA5LjYgMTYuOCAxNi40IDMwLjggMTYuNCAzNC40IDAgNTAuNC0zNiA1Ny4yLTYyLjQuNC0xLjYuNC0yLjQuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjggNDMuMi0yNi44IDQzLjJ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk0OSAzMjcuNGMzNC40IDAgNTAtMzYgNTcuMi02Mi40IDAtLjguNC0xLjYuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjQgNDMuMi0yOC44IDQzLjItMTAuOCAwLTE2LTEwLjQtMTYtMjEuNiAwLTQwIDE4LTg3LjIgMTgtOTIgMS42LTkuMi0xNC40LTIyLjQtMTkuMi0yMi40aC0yMC44Yy00IDAtOCAwLTIxLjItMS42LTQuNC0xNi40LTE1LjYtMjEuMi0yNS4yLTIxLjItMTAuNCAwLTIwIDcuMi0yMCAxOC40IDAgMTEuNiA3LjIgMjAgMTcuMiAyNS42LS40IDIwLjQtMiA1My42LTYuNCA2OS42LTMuNiAxMy42IDE3LjIgMjggMjIuNCAxMS4yIDcuMi0yMy4yIDkuNi01OCAxMC03My42aDM0LjhjLTEyLjggMzQuNC0yMCA2Mi44LTIwIDg4LjQgMCAzNS4yIDIyLjQgNDUuNiA0MS4yIDQ1LjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk4NC42IDMwOS44YzAgMTQuOCAxMS4yIDE3LjYgMTkuMiAxNy42IDExLjYgMCAxMS4yLTkuNiAxMS4yLTE3LjJ2LTU4LjRjMi44LTMxLjYgMjcuNi02NiAzOS4yLTY2IDcuNiAwIDguNCAxMC40IDguNCAyMi44djgxLjJjMCAyMC40IDEyLjQgMzcuNiAzMy42IDM3LjYgMzQuNCAwIDUxLjQtMzYgNTguMi02Mi40LjQtMS42LjQtMi40LjQtMi44IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTggMy42LTkuNiAxMi0zLjYgMTcuNi0xMS44IDQzLjItMjcuOCA0My4yLTEwLjQgMC0xMC40LTE0LjgtMTAuNC0xOC40di04Mi44YzAtMTguNC02LjQtNDAuNC0zMy4yLTQwLjQtMTkuNiAwLTM0IDE3LjItNDQuOCAzOS42di0xOGMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHYxMjYuOHpNMjU5IDBjMTQzIDAgMjU5IDExNiAyNTkgMjU5UzQwMiA1MTggMjU5IDUxOCAwIDQwMiAwIDI1OSAxMTYgMCAyNTkgMHoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDM1LjIgMzM3LjVjLTEuOC0xNC4yLTEzLjgtMjQtMjkuMi0yMy44LTIzIC4zLTQyLjMgMTIuMi01NS4xIDIwLjEtNSAzLjEtOS4zIDUuNC0xMyA3LjEuOC0xMS42LjEtMjYuOC01LjktNDMuNS03LjMtMjAtMTcuMS0zMi4zLTI0LjEtMzkuNCA4LjEtMTEuOCAxOS4yLTI5IDI0LjQtNTUuNiA0LjUtMjIuNyAzLjEtNTgtNy4yLTc3LjgtMi4xLTQtNS42LTYuOS0xMC04LjEtMS44LS41LTUuMi0xLjUtMTEuOS40QzI5My4xIDk2IDI4OS42IDkzLjggMjg2LjkgOTJjLTUuNi0zLjYtMTIuMi00LjQtMTguNC0yLjEtOC4zIDMtMTUuNCAxMS0yMi4xIDI1LjItMSAyLjEtMS45IDQuMS0yLjcgNi4xLTEyLjcuOS0zMi43IDUuNS00OS42IDIzLjgtMi4xIDIuMy02LjIgNC0xMC41IDUuNmguMWMtOC44IDMuMS0xMi44IDEwLjMtMTcuNyAyMy4zLTYuOCAxOC4yLjIgMzYuMSA3LjEgNDcuNy05LjQgOC40LTIxLjkgMjEuOC0yOC41IDM3LjUtOC4yIDE5LjQtOS4xIDM4LjQtOC44IDQ4LjctNyA3LjQtMTcuOCAyMS4zLTE5IDM2LjktMS42IDIxLjggNi4zIDM2LjYgOS44IDQyIDEgMS42IDIuMSAyLjkgMy4zIDQuMi0uNCAyLjctLjUgNS42LjEgOC42IDEuMyA3IDUuNyAxMi43IDEyLjQgMTYuMyAxMy4yIDcgMzEuNiAxMCA0NS44IDIuOSA1LjEgNS40IDE0LjQgMTAuNiAzMS4zIDEwLjZoMWM0LjMgMCA1OC45LTIuOSA3NC44LTYuOCA3LjEtMS43IDEyLTQuNyAxNS4yLTcuNCAxMC4yLTMuMiAzOC40LTEyLjggNjUtMzAgMTguOC0xMi4yIDI1LjMtMTQuOCAzOS4zLTE4LjIgMTMuNi0zLjMgMjIuMS0xNS43IDIwLjQtMjkuNHptLTIzLjggMTQuN2MtMTYgMy44LTI0LjEgNy4zLTQzLjkgMjAuMi0zMC45IDIwLTY0LjcgMjkuMy02NC43IDI5LjNzLTIuOCA0LjItMTAuOSA2LjFjLTE0IDMuNC02Ni43IDYuMy03MS41IDYuNC0xMi45LjEtMjAuOC0zLjMtMjMtOC42LTYuNy0xNiA5LjYtMjMgOS42LTIzcy0zLjYtMi4yLTUuNy00LjJjLTEuOS0xLjktMy45LTUuNy00LjUtNC4zLTIuNSA2LjEtMy44IDIxLTEwLjUgMjcuNy05LjIgOS4zLTI2LjYgNi4yLTM2LjkuOC0xMS4zLTYgLjgtMjAuMS44LTIwLjFzLTYuMSAzLjYtMTEtMy44Yy00LjQtNi44LTguNS0xOC40LTcuNC0zMi43IDEuMi0xNi4zIDE5LjQtMzIuMSAxOS40LTMyLjFzLTMuMi0yNC4xIDcuMy00OC44YzkuNS0yMi41IDM1LjEtNDAuNiAzNS4xLTQwLjZzLTIxLjUtMjMuOC0xMy41LTQ1LjJjNS4yLTE0IDcuMy0xMy45IDktMTQuNSA2LTIuMyAxMS44LTQuOCAxNi4xLTkuNSAyMS41LTIzLjIgNDguOS0xOC44IDQ4LjktMTguOHMxMy0zOS41IDI1LTMxLjhjMy43IDIuNCAxNyAzMiAxNyAzMnMxNC4yLTguMyAxNS44LTUuMmM4LjYgMTYuNyA5LjYgNDguNiA1LjggNjgtNi40IDMyLTIyLjQgNDkuMi0yOC44IDYwLTEuNSAyLjUgMTcuMiAxMC40IDI5IDQzLjEgMTAuOSAyOS45IDEuMiA1NSAyLjkgNTcuOC4zLjUuNC43LjQuN3MxMi41IDEgMzcuNi0xNC41YzEzLjQtOC4zIDI5LjMtMTcuNiA0Ny40LTE3LjggMTcuNS0uMyAxOC40IDIwLjIgNS4yIDIzLjR6Ii8+PC9zdmc+"},166:function(e,t,i){"use strict";var n=i(9),a=(i(172),i(156)),s=i.n(a),c=i(170),j=i(0),r=i.n(j),l=(i(173),i(162),i(159)),o=i(163),u=i(160),M=i(165),g=i.n(M),d=function(e){var t=e.align,i=e.height;return Object(n.jsx)("img",{alt:"Yarn",src:g.a,style:{height:i,verticalAlign:t}})};d.propTypes={align:s.a.string,height:s.a.oneOfType([s.a.number,s.a.string])},d.defaultProps={height:100};var L=d,x=i(158),p=Object(l.a)("div",{target:"e1e22q4b0"})(x.a,"{position:sticky;top:0;z-index:1;}"),b=Object(l.a)("header",{target:"e1e22q4b1"})({name:"1g1001",styles:"padding:0.8em 1em;font-weight:light;background:#2188b6;color:rgba(255,255,255,0.8);"}),y=Object(l.a)("span",{target:"e1e22q4b2"})({name:"iwz7t0",styles:"text-decoration:underline;color:#ffffff;"}),N=Object(l.a)("header",{target:"e1e22q4b3"})("background:#ffffff;",x.a,"{display:flex;}"),I=Object(l.a)("div",{target:"e1e22q4b4"})({name:"k008qs",styles:"display:flex;"}),m=Object(l.a)(u.a,{target:"e1e22q4b5"})("display:flex;align-items:center;padding:0 1em;",x.b,"{margin-right:auto;padding:1em;}"),O=Object(l.a)("button",{target:"e1e22q4b6"})("margin:1em;margin-left:0;border:1px solid lightgrey;border-radius:10px;width:3em;height:3em;font-size:inherit;background:#ffffff;",x.a,"{display:none;}"),T=Object(l.a)("div",{target:"e1e22q4b7"})("background:#ffffff;",x.a,"{display:flex;}",x.b,"{position:absolute;z-index:1;width:100%;transform:scaleY(0);transform-origin:top left;transition:transform .3s;&.expanded{transform:scaleY(1);}}"),f=Object(l.a)(u.a,{target:"e1e22q4b8"})("display:flex;align-items:center;height:4em;border:3px solid transparent;padding:0 1em;font-family:Abel;font-weight:light;text-decoration:none;text-transform:uppercase;color:#000000;",x.a,"{&.active{border-bottom-color:#2188b6;}}",x.b,"{width:100%;}"),h=function(){var e=o.data,t=Object(j.useState)(!1),i=t[0],a=t[1];return Object(n.jsx)(r.a.Fragment,null,Object(n.jsx)(p,null,Object(n.jsx)(b,null,Object(n.jsx)(y,null,"Latest article:"),' "Journey to the v2"'),Object(n.jsx)(N,null,Object(n.jsx)(I,null,Object(n.jsx)(m,{to:"/"},Object(n.jsx)(L,{height:"3em",align:"middle"})),Object(n.jsx)(O,{onClick:function(){return a(!i)}},"≡")),Object(n.jsx)(T,{className:i?"expanded":""},e.site.siteMetadata.menuLinks.map(function(e){var t=e.name,i=e.link;return Object(n.jsx)(r.a.Fragment,{key:t},Object(n.jsx)(f,{to:i,activeClassName:"active",partiallyActive:"/"!==i},t))})))))};h.propTypes={siteTitle:s.a.string},h.defaultProps={siteTitle:""};var A=h,C=function(e){var t=e.children;return Object(n.jsx)(r.a.Fragment,null,Object(n.jsx)(c.Helmet,null,Object(n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),Object(n.jsx)(A,null),Object(n.jsx)("main",null,t))};C.propTypes={children:s.a.node.isRequired};t.a=C},174:function(e,t,i){"use strict";i(162);var n=i(159),a=i(9),s=i(160),c=i(0),j=i.n(c),r=i(158),l=Object(n.a)("div",{target:"e136yufg0"})("position:relative;",r.a,"{padding-left:300px;}"),o=Object(n.a)("div",{target:"e136yufg1"})(r.a,"{position:fixed;left:0;width:300px;height:calc(100vh - 4em);background:#d1dee8;}"),u=Object(n.a)(s.a,{target:"e136yufg2"})({name:"1srnx9y",styles:'display:flex;position:relative;align-items:center;border-bottom:1px solid #cfdee9;&:first-of-type{border-top:1px solid #cfdee9;}padding:1.5em;text-decoration:none;background:#ffffff;color:#333333;&::before{content:"";position:absolute;z-index:1;top:-1px;bottom:-1px;right:0;width:5px;background:#cfdee9;}&.active::before{background:#2188b6;}'}),M=Object(n.a)("div",{target:"e136yufg3"})({name:"rnvzr0",styles:"& > *{overflow:auto;}"});t.a=function(e){var t=e.items,i=e.children;return Object(a.jsx)(j.a.Fragment,null,Object(a.jsx)(l,null,Object(a.jsx)(o,null,t.map(function(e){var t=e.to,i=e.name;return Object(a.jsx)(j.a.Fragment,{key:i},Object(a.jsx)(u,{to:t,activeClassName:"active"},i))})),Object(a.jsx)(M,null,i)))}},199:function(e,t,i){"use strict";var n=i(9),a=i(156),s=i.n(a),c=i(0),j=i.n(c),r=i(166),l=i(174),o=function(e){var t=e.children;return Object(n.jsx)(j.a.Fragment,null,Object(n.jsx)(r.a,null,Object(n.jsx)(l.a,{items:[{to:"/configuration/manifest",name:"Manifests"},{to:"/configuration/yarnrc",name:"Yarnrc files"}]},t)))};o.propTypes={children:s.a.node.isRequired},t.a=o}}]);
//# sourceMappingURL=component---src-pages-configuration-manifest-js-f9a99fbf51215c0cb46f.js.map