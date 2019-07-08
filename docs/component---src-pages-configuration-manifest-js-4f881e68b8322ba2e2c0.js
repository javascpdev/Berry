(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n(0),s=n.n(a),c=(n(22),n(233));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r={colors:{background:"#242424",documentation:"#ddddcc",highlight:"#384973",code:"#639db1",key:"#8ac6f2",string:"#95e454",boolean:"#f08080"},formatKey:function(e){return JSON.stringify(e)},formatValue:function(e){return JSON.stringify(e)},keys:{suffix:": "},dictionaries:{leading:"{",trailing:"}",suffix:","},arrays:{leading:"[",trailing:"]",prefix:"",suffix:","}},l=function(e){return Object(i.jsx)(c.b,o({},e,{theme:r}))},u=function(e){return Object(i.jsx)(c.d,o({},e,{theme:r}))},j=function(e){return Object(i.jsx)(c.a,o({},e,{theme:r}))},d=function(e){return Object(i.jsx)(c.c,o({},e,{theme:r}))},g=function(e){return Object(i.jsx)(c.f,o({},e,{theme:r}))},p=function(e){return Object(i.jsx)(c.e,o({},e,{theme:r}))},h=n(234);t.default=function(){return Object(i.jsx)(s.a.Fragment,null,Object(i.jsx)(h.a,null,Object(i.jsx)(l,null,Object(i.jsx)(u,null,"Manifest files (also called ",Object(i.jsx)("code",null,"package.json")," because of their name) contain everything needed to describe the settings unique to one particular package. Project will contain multiple such manifests if they use the workspace feature, as each workspace is described through its own manifest."),Object(i.jsx)(g,{name:"name",placeholder:"@scope/name",description:Object(i.jsx)(s.a.Fragment,null,"The name of the package. Used to identify it accross the application, especially amongst multiple workspaces. The first part of the name (here ",Object(i.jsx)("code",null,"@scope/"),") is optional and is used as a namespace).")}),Object(i.jsx)(g,{name:"version",placeholder:"1.2.3",description:Object(i.jsx)(s.a.Fragment,null,"The version of the package. Usually doesn't have any impact on your project, except when it is a workspace - then its version must match the specified ranges for the workspace to be selected as resolution candidate.")}),Object(i.jsx)(g,{name:"private",placeholder:!0,description:Object(i.jsx)(s.a.Fragment,null,"If true, the package is considered private and Yarn will refuse to publish it regardless of the circumstances. Setting this flag also unlocks some features that wouldn't make sense in published packages, such as workspaces.")}),Object(i.jsx)(g,{name:"license",placeholder:"MIT",description:Object(i.jsx)(s.a.Fragment,null,"An SPDX identifier that indicates under which license is your package distributed. Note that the default license can be set via the ",Object(i.jsx)("code",null,"initLicense")," settings.")}),Object(i.jsx)(g,{name:"main",placeholder:"./sources/index.js",description:Object(i.jsx)(s.a.Fragment,null,"The path that will be used to resolve the qualified path to use when accessing the package by its name. This field can be modified at publish-time through the use of the ",Object(i.jsx)("code",null,"publishConfig.main")," field.")}),Object(i.jsx)(g,{name:"module",placeholder:"./sources/index.mjs",description:Object(i.jsx)(s.a.Fragment,null,"The path that will be used when an ES6-compatible environment will try to access the package by its name. Doesn't have any direct effect on Yarn itself.")}),Object(i.jsx)(g,{name:"languageName",placeholder:"node",description:Object(i.jsx)(s.a.Fragment,null,"An enumeration used by the linker plugins to figure which linker should install a specific package. Only some values are allowed, consult the documentation to know more.")}),Object(i.jsx)(d,{name:"bin",description:Object(i.jsx)(s.a.Fragment,null,"A field used to expose some executable Javascript files to the parent package. Any entry listed here will be made available through the ",Object(i.jsx)("code",null,"$PATH"),". Note that it is very advised to only expose Javascript files for portability reasons (shellscripts and non-js binaries require the user to have a specific shell, and are incompatible with zip access).")},Object(i.jsx)(g,{name:"my-bin",placeholder:"./dist/my-bin.js"})),Object(i.jsx)(d,{name:"scripts",description:Object(i.jsx)(s.a.Fragment,null,"A field used to list small shell scripts that will be executed when running ",Object(i.jsx)("code",null,"yarn run"),". Scripts are by default executed by a miniature shell, so some advanced features might not be available (if you have more complex needs, we recommend you to just execute a Javascript file). Note that scripts containing ",Object(i.jsx)("code",null,":")," (the colon character) are globals to your project and can be called regardless of your current workspace. Finally, be aware that scripts are always executed relative to the closest workspace (never the cwd).")},Object(i.jsx)(g,{name:"test",placeholder:"jest"}),Object(i.jsx)(g,{name:"build",placeholder:"webpack-cli --config ./webpack.config.js"}),Object(i.jsx)(g,{name:"count-words",placeholder:'echo "$@" | wc -w'})),Object(i.jsx)(d,{name:"dependencies",description:Object(i.jsx)(s.a.Fragment,null,"The set of dependencies that must be made available to the current package in order for it to work properly. Consult the list of supported ranges for more information.")},Object(i.jsx)(g,{name:"webpack",placeholder:"^5.0.0"})),Object(i.jsx)(d,{name:"optionalDependencies",description:Object(i.jsx)(s.a.Fragment,null,Object(i.jsx)("p",null,"Similar to the ",Object(i.jsx)("code",null,"dependencies")," field, except that these entries will not be required to build properly should they have any build script. Note that such dependencies must still be resolvable and fetchable (otherwise we couldn't store it in the lockfile, which could lead to non-reproducible installs) - only the build step is optional."),Object(i.jsx)("p",null,Object(i.jsx)("b",null,"This field is usually not what you're looking for"),", unless you depend on the ",Object(i.jsx)("code",null,"fsevents")," package. If you need a package to be required only when a specific feature is used then use an optional peer dependency. Your users will have to satisfy it should they use the feature, but it won't cause the build errors to be silently swallowed when the feature is needed."))},Object(i.jsx)(g,{name:"fsevents",placeholder:"^5.0.0"})),Object(i.jsx)(d,{name:"devDependencies",description:Object(i.jsx)(s.a.Fragment,null,"Similar to the ",Object(i.jsx)("code",null,"dependencies"),' field, except that these dependencies are only installed on local installs and will never be installed by the consumers of your package. Note that because that would lead to different install trees depending on whether the install is made in "production" or "development" mode, Yarn doesn\'t offer a way to prevent the installation of dev dependencies at the moment.')},Object(i.jsx)(g,{name:"webpack",placeholder:"^5.0.0"})),Object(i.jsx)(d,{name:"peerDependencies",description:Object(i.jsx)(s.a.Fragment,null,"Peer dependencies are inherited dependencies - the consumer of your package will be tasked to provide them. This is typically what you want when writting plugins, for example. Be careful: listing peer dependencies will have side effects on the way your package will be executed by your consumers. Check the documentation for more information.")},Object(i.jsx)(g,{name:"react",placeholder:"*"}),Object(i.jsx)(g,{name:"react-dom",placeholder:"*"})),Object(i.jsx)(j,{name:"workspaces",description:Object(i.jsx)(s.a.Fragment,null,"Workspaces are an optional feature used by monorepos to split a large project into semi-independent subprojects, each one listing their own set of dependencies. The ",Object(i.jsx)("code",null,"workspaces")," field is a list of glob pattern that match all directories that should become workspaces of your application.")},Object(i.jsx)(p,{placeholder:"packages/*"})),Object(i.jsx)(d,{name:"dependenciesMeta",description:Object(i.jsx)(s.a.Fragment,null,"This field lists some extra information related to the dependencies listed in the ",Object(i.jsx)("code",null,"dependencies")," and ",Object(i.jsx)("code",null,"devDependencies")," field. In the context of a workspaced project most of these settings will affect ",Object(i.jsx)("em",null,"all workspaces")," and as such must be specified at the ",Object(i.jsx)("em",null,"root")," of the project (except if noted otherwise, the ",Object(i.jsx)("code",null,"dependenciesMeta")," field will be ignored if found within a workspace).")},Object(i.jsx)(d,{name:"fsevents",margin:!0},Object(i.jsx)(g,{name:"built",anchor:"dependenciesMeta.built",placeholder:!1,description:Object(i.jsx)(s.a.Fragment,null,"If false, the package will never be built. When the global settings ",Object(i.jsx)("code",null,"enableScripts")," is toggled off, setting this additional flag will also downgrade the warning into a simple notice for this specific package.")}),Object(i.jsx)(g,{name:"optional",anchor:"dependenciesMeta.optional",placeholder:!1,description:Object(i.jsx)(s.a.Fragment,null,Object(i.jsx)("p",null,"If true, the build isn't required to succeed for the install to be considered a success. It's what the ",Object(i.jsx)("code",null,"optionalDependencies")," field compiles down to."),Object(i.jsx)("p",null,Object(i.jsx)("b",null,"This settings will be applied even when found within a nested manifest"),", but the highest requirement in the dependency tree will prevale."))}),Object(i.jsx)(g,{name:"unplugged",anchor:"dependenciesMeta.unplugged",placeholder:!0,description:Object(i.jsx)(s.a.Fragment,null,"If true, the specified package will be automatically unplugged at install time. This should only be needed for packages that contain scripts in other languages than Javascript (for example ",Object(i.jsx)("code",null,"nan")," contains C++ headers).")}))),Object(i.jsx)(d,{name:"peerDependenciesMeta",description:Object(i.jsx)(s.a.Fragment,null,"This field lists some extra information related to the dependencies listed in the ",Object(i.jsx)("code",null,"peerDependencies")," field.")},Object(i.jsx)(d,{name:"react-dom",margin:!0},Object(i.jsx)(g,{name:"optional",anchor:"peerDependenciesMeta.optional",placeholder:!0,description:Object(i.jsx)(s.a.Fragment,null,"If true, the selected peer dependency will be marked as optional by the package manager and the consumer omitting it won't be reported as an error.")}))),Object(i.jsx)(d,{name:"resolutions",description:Object(i.jsx)(s.a.Fragment,null,"This field allows you to instruct Yarn to use a specific resolution instead of anything the resolver would normally pick. This is useful to enforce all your packages to use a single version of a dependency, or backport a fix. The syntax for the resolution key accepts one level of specificity, so all the following examples are correct.")},Object(i.jsx)(g,{name:"relay-compiler",placeholder:"3.0.0"}),Object(i.jsx)(g,{name:"webpack/memory-fs",placeholder:"0.4.1"}),Object(i.jsx)(g,{name:"@babel/core/json5",placeholder:"2.1.0"}),Object(i.jsx)(g,{name:"@babel/core/@babel/generator",placeholder:"7.3.4"}),Object(i.jsx)(g,{name:"@babel/core@npm:7.0.0/@babel/generator",placeholder:"7.3.4"}),Object(i.jsx)(g,{name:"@babel/core/@npm:babel/generator@npm:^7.0.0",placeholder:"7.3.4"})),Object(i.jsx)(d,{name:"publishConfig",margin:!0,description:Object(i.jsx)(s.a.Fragment,null,"This field contains various settings that are only taken into consideration when a package is generated from your local sources (either through ",Object(i.jsx)("code",null,"yarn pack")," or one of the publish commands like ",Object(i.jsx)("code",null,"yarn npm publish"),").")},Object(i.jsx)(g,{name:"access",anchor:"publishConfig.main",placeholder:"./build/index.js",description:Object(i.jsx)(s.a.Fragment,null,"Defines the package access level to use when publishing packages to the npm registry. Valid values are ",Object(i.jsx)("code",null,"public")," and ",Object(i.jsx)("code",null,"restricted"),", but ",Object(i.jsx)("code",null,"restricted")," usually requires to register for a paid plan (this is up to the registry you use).")}),Object(i.jsx)(g,{name:"main",anchor:"publishConfig.main",placeholder:"./build/index.js",description:Object(i.jsx)(s.a.Fragment,null,"If present, the top-level ",Object(i.jsx)("code",null,"main")," field from the manifest will be set to this new value before the package is packed to be shipped to remote registries. This won't modified the actual file, just the one in the tarball.")}),Object(i.jsx)(g,{name:"module",anchor:"publishConfig.module",placeholder:"./build/index.mjs",description:Object(i.jsx)(s.a.Fragment,null,"Same principle as the ",Object(i.jsx)("code",null,"publishConfig.main")," property; this value will be used instead of the top-level ",Object(i.jsx)("code",null,"module")," field when generating the workspace tarball.")}),Object(i.jsx)(g,{name:"module",anchor:"publishConfig.registry",placeholder:"https://npm.pkg.github.com",description:Object(i.jsx)(s.a.Fragment,null,"If present, will replace whatever registry is defined in the configuration when the package is about to be pushed to a remote location.")})))))}},196:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var i=function(){return"@media (max-width: 600px)"},a=function(){return"@media (min-width: 601px)"}},202:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Home",link:"/"},{name:"Getting started",link:"/getting-started"},{name:"Configuration",link:"/configuration"},{name:"Features",link:"/features"},{name:"CLI",link:"/cli"},{name:"Advanced",link:"/advanced"}]}}}}},203:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTE1NC44IDUxOCI+PHN0eWxlPi5zdDB7ZmlsbDojMmM4ZWJifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTcxOC42IDI1Ny44Yy04IDI3LjYtMjAuOCA0Ny42LTM1LjIgNjMuNlYxODFjMC05LjYtOC40LTE3LjYtMjEuNi0xNy42LTUuNiAwLTEwLjQgMi44LTEwLjQgNi44IDAgMi44IDEuNiA1LjIgMS42IDEyLjh2NjQuNGMtNC44IDI4LTE2LjggNTQtMzIuOCA1NC0xMS42IDAtMTguNC0xMS42LTE4LjQtMzMuMiAwLTMzLjYgNC40LTUxLjIgMTEuNi04MC44IDEuNi02IDEzLjItMjItNi40LTIyLTIxLjIgMC0xOC40IDgtMjEuMiAxNC44IDAgMC0xMy40IDQ3LjYtMTMuNCA5MCAwIDM0LjggMTQuNiA1Ny42IDQxLjQgNTcuNiAxNy4yIDAgMjkuNi0xMS42IDM5LjItMjcuNlYzNTFjLTI2LjQgMjMuMi00OS42IDQzLjYtNDkuNiA4NCAwIDI1LjYgMTYgNDYgMzguNCA0NiAyMC40IDAgNDEuNi0xNC44IDQxLjYtNTYuOFYzNTVjMjEuNi0xOC44IDQ0LjgtNDIuNCA1OC40LTg4LjguNC0xLjYuNC0zLjYuNC00IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTcuMiAzLjYtOS42IDEyem0tNzYuOCAxOThjLTYuNCAwLTEwLjQtOS42LTEwLjQtMjIgMC0yNCA4LjgtMzkuMiAyMS42LTUyLjR2NDIuOGMwIDcuNiAxLjYgMzEuNi0xMS4yIDMxLjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTgzMy40IDMwMWMtOS42IDAtMTMuNi05LjYtMTMuNi0xOC40di02NmMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHY2MS42Qzc4NSAyOTEuNCA3NzcuOCAzMDEgNzY3IDMwMWMtMTQgMC0yMi44LTEyLTIyLjgtMzIuOCAwLTU3LjYgMzUuNi04My42IDY2LTgzLjYgNCAwIDggLjggMTEuNi44IDQgMCA1LjItMi40IDUuMi05LjIgMC0xMC40LTcuNi0xNi44LTE4LjQtMTYuOC00OC44IDAtOTUuMiA0MC44LTk1LjIgMTA3LjYgMCAzNCAxNi40IDYwLjQgNDcuNiA2MC40IDE1LjIgMCAyNi40LTcuMiAzNC40LTE2LjQgNiA5LjYgMTYuOCAxNi40IDMwLjggMTYuNCAzNC40IDAgNTAuNC0zNiA1Ny4yLTYyLjQuNC0xLjYuNC0yLjQuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjggNDMuMi0yNi44IDQzLjJ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk0OSAzMjcuNGMzNC40IDAgNTAtMzYgNTcuMi02Mi40IDAtLjguNC0xLjYuNC0yLjggMC03LjYtNy42LTE2LjQtMTQtMTYuNC00IDAtOCAzLjYtOS42IDEyLTMuNiAxNy42LTEwLjQgNDMuMi0yOC44IDQzLjItMTAuOCAwLTE2LTEwLjQtMTYtMjEuNiAwLTQwIDE4LTg3LjIgMTgtOTIgMS42LTkuMi0xNC40LTIyLjQtMTkuMi0yMi40aC0yMC44Yy00IDAtOCAwLTIxLjItMS42LTQuNC0xNi40LTE1LjYtMjEuMi0yNS4yLTIxLjItMTAuNCAwLTIwIDcuMi0yMCAxOC40IDAgMTEuNiA3LjIgMjAgMTcuMiAyNS42LS40IDIwLjQtMiA1My42LTYuNCA2OS42LTMuNiAxMy42IDE3LjIgMjggMjIuNCAxMS4yIDcuMi0yMy4yIDkuNi01OCAxMC03My42aDM0LjhjLTEyLjggMzQuNC0yMCA2Mi44LTIwIDg4LjQgMCAzNS4yIDIyLjQgNDUuNiA0MS4yIDQ1LjZ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk4NC42IDMwOS44YzAgMTQuOCAxMS4yIDE3LjYgMTkuMiAxNy42IDExLjYgMCAxMS4yLTkuNiAxMS4yLTE3LjJ2LTU4LjRjMi44LTMxLjYgMjcuNi02NiAzOS4yLTY2IDcuNiAwIDguNCAxMC40IDguNCAyMi44djgxLjJjMCAyMC40IDEyLjQgMzcuNiAzMy42IDM3LjYgMzQuNCAwIDUxLjQtMzYgNTguMi02Mi40LjQtMS42LjQtMi40LjQtMi44IDAtNy42LTcuNi0xNi40LTE0LTE2LjQtNCAwLTggMy42LTkuNiAxMi0zLjYgMTcuNi0xMS44IDQzLjItMjcuOCA0My4yLTEwLjQgMC0xMC40LTE0LjgtMTAuNC0xOC40di04Mi44YzAtMTguNC02LjQtNDAuNC0zMy4yLTQwLjQtMTkuNiAwLTM0IDE3LjItNDQuOCAzOS42di0xOGMwLTkuNi04LjQtMTcuNi0yMS42LTE3LjYtNS42IDAtMTAuNCAyLjgtMTAuNCA2LjggMCAyLjggMS42IDUuMiAxLjYgMTIuOHYxMjYuOHpNMjU5IDBjMTQzIDAgMjU5IDExNiAyNTkgMjU5UzQwMiA1MTggMjU5IDUxOCAwIDQwMiAwIDI1OSAxMTYgMCAyNTkgMHoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDM1LjIgMzM3LjVjLTEuOC0xNC4yLTEzLjgtMjQtMjkuMi0yMy44LTIzIC4zLTQyLjMgMTIuMi01NS4xIDIwLjEtNSAzLjEtOS4zIDUuNC0xMyA3LjEuOC0xMS42LjEtMjYuOC01LjktNDMuNS03LjMtMjAtMTcuMS0zMi4zLTI0LjEtMzkuNCA4LjEtMTEuOCAxOS4yLTI5IDI0LjQtNTUuNiA0LjUtMjIuNyAzLjEtNTgtNy4yLTc3LjgtMi4xLTQtNS42LTYuOS0xMC04LjEtMS44LS41LTUuMi0xLjUtMTEuOS40QzI5My4xIDk2IDI4OS42IDkzLjggMjg2LjkgOTJjLTUuNi0zLjYtMTIuMi00LjQtMTguNC0yLjEtOC4zIDMtMTUuNCAxMS0yMi4xIDI1LjItMSAyLjEtMS45IDQuMS0yLjcgNi4xLTEyLjcuOS0zMi43IDUuNS00OS42IDIzLjgtMi4xIDIuMy02LjIgNC0xMC41IDUuNmguMWMtOC44IDMuMS0xMi44IDEwLjMtMTcuNyAyMy4zLTYuOCAxOC4yLjIgMzYuMSA3LjEgNDcuNy05LjQgOC40LTIxLjkgMjEuOC0yOC41IDM3LjUtOC4yIDE5LjQtOS4xIDM4LjQtOC44IDQ4LjctNyA3LjQtMTcuOCAyMS4zLTE5IDM2LjktMS42IDIxLjggNi4zIDM2LjYgOS44IDQyIDEgMS42IDIuMSAyLjkgMy4zIDQuMi0uNCAyLjctLjUgNS42LjEgOC42IDEuMyA3IDUuNyAxMi43IDEyLjQgMTYuMyAxMy4yIDcgMzEuNiAxMCA0NS44IDIuOSA1LjEgNS40IDE0LjQgMTAuNiAzMS4zIDEwLjZoMWM0LjMgMCA1OC45LTIuOSA3NC44LTYuOCA3LjEtMS43IDEyLTQuNyAxNS4yLTcuNCAxMC4yLTMuMiAzOC40LTEyLjggNjUtMzAgMTguOC0xMi4yIDI1LjMtMTQuOCAzOS4zLTE4LjIgMTMuNi0zLjMgMjIuMS0xNS43IDIwLjQtMjkuNHptLTIzLjggMTQuN2MtMTYgMy44LTI0LjEgNy4zLTQzLjkgMjAuMi0zMC45IDIwLTY0LjcgMjkuMy02NC43IDI5LjNzLTIuOCA0LjItMTAuOSA2LjFjLTE0IDMuNC02Ni43IDYuMy03MS41IDYuNC0xMi45LjEtMjAuOC0zLjMtMjMtOC42LTYuNy0xNiA5LjYtMjMgOS42LTIzcy0zLjYtMi4yLTUuNy00LjJjLTEuOS0xLjktMy45LTUuNy00LjUtNC4zLTIuNSA2LjEtMy44IDIxLTEwLjUgMjcuNy05LjIgOS4zLTI2LjYgNi4yLTM2LjkuOC0xMS4zLTYgLjgtMjAuMS44LTIwLjFzLTYuMSAzLjYtMTEtMy44Yy00LjQtNi44LTguNS0xOC40LTcuNC0zMi43IDEuMi0xNi4zIDE5LjQtMzIuMSAxOS40LTMyLjFzLTMuMi0yNC4xIDcuMy00OC44YzkuNS0yMi41IDM1LjEtNDAuNiAzNS4xLTQwLjZzLTIxLjUtMjMuOC0xMy41LTQ1LjJjNS4yLTE0IDcuMy0xMy45IDktMTQuNSA2LTIuMyAxMS44LTQuOCAxNi4xLTkuNSAyMS41LTIzLjIgNDguOS0xOC44IDQ4LjktMTguOHMxMy0zOS41IDI1LTMxLjhjMy43IDIuNCAxNyAzMiAxNyAzMnMxNC4yLTguMyAxNS44LTUuMmM4LjYgMTYuNyA5LjYgNDguNiA1LjggNjgtNi40IDMyLTIyLjQgNDkuMi0yOC44IDYwLTEuNSAyLjUgMTcuMiAxMC40IDI5IDQzLjEgMTAuOSAyOS45IDEuMiA1NSAyLjkgNTcuOC4zLjUuNC43LjQuN3MxMi41IDEgMzcuNi0xNC41YzEzLjQtOC4zIDI5LjMtMTcuNiA0Ny40LTE3LjggMTcuNS0uMyAxOC40IDIwLjIgNS4yIDIzLjR6Ii8+PC9zdmc+"},204:function(e,t,n){"use strict";var i=n(5),a=(n(188),n(195)),s=n.n(a),c=n(206),o=n(0),r=n.n(o),l=(n(208),n(19),n(197)),u=n(202),j=n(91),d=n(203),g=n.n(d),p=function(e){var t=e.align,n=e.height;return Object(i.jsx)("img",{alt:"Yarn",src:g.a,style:{height:n,verticalAlign:t}})};p.propTypes={align:s.a.string,height:s.a.oneOfType([s.a.number,s.a.string])},p.defaultProps={height:100};var h=p,M=n(196),b=Object(l.a)("div",{target:"e1e22q4b0"})(M.a,"{position:sticky;top:0;z-index:1;}"),m=Object(l.a)("a",{target:"e1e22q4b1"})({name:"14wzgec",styles:"display:block;padding:0.8em 1em;font-weight:light;text-decoration:none;background:#2188b6;color:rgba(255,255,255,0.8);"}),x=Object(l.a)("span",{target:"e1e22q4b2"})({name:"ol3iif",styles:"font-weight:bold;color:#ffffff;"}),f=Object(l.a)("header",{target:"e1e22q4b3"})("background:#ffffff;",M.a,"{display:flex;}"),L=Object(l.a)("div",{target:"e1e22q4b4"})({name:"k008qs",styles:"display:flex;"}),y=Object(l.a)(j.Link,{target:"e1e22q4b5"})("display:flex;align-items:center;padding:0 1em;",M.b,"{margin-right:auto;padding:1em;}"),O=Object(l.a)("button",{target:"e1e22q4b6"})("margin:1em;margin-left:0;border:1px solid lightgrey;border-radius:10px;width:3em;height:3em;font-size:inherit;background:#ffffff;",M.a,"{display:none;}"),I=Object(l.a)("div",{target:"e1e22q4b7"})("background:#ffffff;",M.a,"{display:flex;}",M.b,"{position:absolute;z-index:1;width:100%;transform:scaleY(0);transform-origin:top left;transition:transform .3s;&.expanded{transform:scaleY(1);}}"),N=Object(l.a)(j.Link,{target:"e1e22q4b8"})("display:flex;align-items:center;height:4em;border:3px solid transparent;padding:0 1em;font-family:Abel;font-weight:light;text-decoration:none;text-transform:uppercase;color:#000000;",M.a,"{&.active{border-bottom-color:#2188b6;}}",M.b,"{width:100%;}"),T=function(){var e=u.data,t=Object(o.useState)(!1),n=t[0],a=t[1];return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)(b,null,Object(i.jsx)(m,{href:"https://github.com/yarnpkg/berry"},Object(i.jsx)(x,null,"Important:")," This documentation covers the v2 onwards and is actively being worked on. Come help us!"),Object(i.jsx)(f,null,Object(i.jsx)(L,null,Object(i.jsx)(y,{to:"/"},Object(i.jsx)(h,{height:"3em",align:"middle"})),Object(i.jsx)(O,{onClick:function(){return a(!n)}},"≡")),Object(i.jsx)(I,{className:n?"expanded":""},e.site.siteMetadata.menuLinks.map(function(e){var t=e.name,n=e.link;return Object(i.jsx)(r.a.Fragment,{key:t},Object(i.jsx)(N,{to:n,activeClassName:"active",partiallyActive:"/"!==n},t))})))))};T.propTypes={siteTitle:s.a.string},T.defaultProps={siteTitle:""};var A=T,C=function(e){var t=e.children;return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)(c.Helmet,null,Object(i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),Object(i.jsx)(A,null),Object(i.jsx)("main",null,t))};C.propTypes={children:s.a.node.isRequired};t.a=C},207:function(e,t,n){"use strict";n(64),n(19);var i=n(197),a=n(5),s=n(91),c=n(0),o=n.n(c),r=(n(21),n(47),n(10),function(){var e=Object(c.useRef)();return Object(c.useLayoutEffect)(function(){var t=window.location.pathname.split("/")[2],n=function(e){return sessionStorage.getItem("berry:navigation:"+e)}(t);return e.current.scrollTop=null==n?0:parseInt(n,10),function(){return function(e,t){sessionStorage.setItem("berry:navigation:"+e,t.toString())}(t,e.current.scrollTop)}},[]),e}),l=n(196),u=Object(i.a)("div",{target:"e136yufg0"})("position:relative;",l.a,"{padding-left:300px;}"),j=Object(i.a)("div",{target:"e136yufg1"})(l.a,"{position:fixed;left:0;width:300px;height:calc(100vh - 4em);overflow-y:auto;background:#d1dee8;}"),d=Object(i.a)(s.Link,{target:"e136yufg2"})({name:"1srnx9y",styles:'display:flex;position:relative;align-items:center;border-bottom:1px solid #cfdee9;&:first-of-type{border-top:1px solid #cfdee9;}padding:1.5em;text-decoration:none;background:#ffffff;color:#333333;&::before{content:"";position:absolute;z-index:1;top:-1px;bottom:-1px;right:0;width:5px;background:#cfdee9;}&.active::before{background:#2188b6;}'}),g=Object(i.a)("div",{target:"e136yufg3"})({name:"rnvzr0",styles:"& > *{overflow:auto;}"});t.a=function(e){var t=e.items,n=e.children,i=r();return Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(u,null,Object(a.jsx)(j,{ref:i},t.map(function(e){var t=e.to,n=e.name;return Object(a.jsx)(o.a.Fragment,{key:n},Object(a.jsx)(d,{to:t,activeClassName:"active"},n.match(/^`.*`$/)?Object(a.jsx)("code",null,n.slice(1,-1)):n))})),Object(a.jsx)(g,null,n)))}},233:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return f}),n.d(t,"c",function(){return L}),n.d(t,"a",function(){return y}),n.d(t,"f",function(){return O});n(26),n(20),n(10),n(19),n(279);var i=n(197),a=n(5),s=n(286),c=n(0),o=n.n(c),r=function(e,t){return"string"==typeof t?e.colors.string:"boolean"==typeof t?e.colors.boolean:null},l=Object(i.a)("div",{target:"e1u1l3mo0"})('padding:1.5em;font-family:"PT Mono";line-height:1.6em;background:',function(e){return e.theme.colors.background},";color:",function(e){return e.theme.colors.documentation},';a[href^="#"]{text-decoration:none;}code{font-family:"PT Mono";color:',function(e){return e.theme.colors.code},";}&,span{white-space:nowrap;}"),u=Object(i.a)("div",{target:"e1u1l3mo1"})({name:"iunn32",styles:'border:1px solid;padding:1em;font-family:"Open Sans";white-space:normal;& + *{margin-top:0 !important;}p{margin-top:0;}p:last-of-type{margin-bottom:0;}'}),j={name:"dt6qdf",styles:'& >:first-child{margin-top:-1.5em;}& >:last-child{margin-bottom:-1.5em;}&[data-dictionaries-suffix=""] >:last-child{margin-bottom:-2.5em;}'},d=Object(i.a)("div",{target:"e1u1l3mo2"})("margin-top:-3em;padding:1.5em 0;p{margin-top:0;}p:last-of-type{margin-bottom:0;}&:target > div{background:",function(e){return e.theme.colors.highlight},";}"),g=Object(i.a)("div",{target:"e1u1l3mo3"})({name:"j65q0t",styles:"padding:1em;&:first-of-type{margin-top:0;}& + div{margin-top:-0.5em;}"}),p=Object(i.a)("div",{target:"e1u1l3mo4"})({name:"dq7d5f",styles:'margin-bottom:0.5em;font-family:"Open Sans";white-space:normal;'}),h=function(e){var t=e.theme,n=e.description,i=e.anchor,s=e.children;return n?Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(d,{id:""+i,theme:t},Object(a.jsx)(g,{theme:t},Object(a.jsx)(p,{theme:t},n),s))):s},M=function(){return Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)("span",{style:{fontSize:"0.7em"}},Object(a.jsx)(s.a,null)))},b=function(e){var t=e.theme,n=e.name,i=e.anchorTarget;return Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)("span",{style:{color:t.colors.key}},i?Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)("a",{style:{color:"inherit"},href:"#"+i},Object(a.jsx)(M,null)," ",t.formatKey(n))):Object(a.jsx)(o.a.Fragment,null,t.formatKey(n))),t.keys.suffix)},m=function(e){var t=e.theme,n=e.name,i=e.suffix,s=e.anchorTarget,c=e.children;return Object(a.jsx)("div",null,Object(a.jsx)("div",null,n&&Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(b,{theme:t,name:n,anchorTarget:s})),t.arrays.leading),Object(a.jsx)("div",{style:{paddingLeft:"2em"}},o.a.Children.map(c,function(e){return Object(a.jsx)("div",{style:{display:"flex"}},Object(a.jsx)("div",null,t.arrays.prefix),Object(a.jsx)("div",null,o.a.cloneElement(e,{suffix:t.arrays.suffix})))})),Object(a.jsx)("div",null,t.arrays.trailing,i))},x=function(e){var t=e.theme,n=e.name,i=e.suffix,s=e.anchorTarget,c=e.children,r=e.margin;return Object(a.jsx)("div",null,Object(a.jsx)("div",null,n&&Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(b,{theme:t,name:n,anchorTarget:s})),t.dictionaries.leading),Object(a.jsx)("div",{style:{paddingLeft:"2em"},css:r?j:null,"data-dictionaries-suffix":t.dictionaries.suffix},o.a.Children.map(c,function(e){return Object(a.jsx)(o.a.Fragment,null,o.a.cloneElement(e,{suffix:t.dictionaries.suffix}))})),Object(a.jsx)("div",null,t.dictionaries.trailing,i))},f=function(e){var t=e.theme,n=e.suffix,i=e.placeholder;return Object(a.jsx)("div",null,Object(a.jsx)("span",{style:{color:r(t,i)}},t.formatValue(i)),n)},L=function(e){var t=e.theme,n=e.name,i=e.anchor,s=void 0===i?n:i,c=e.margin,r=e.description,l=e.children;return Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(h,{theme:t,description:r,anchor:r?s:null},Object(a.jsx)(x,{theme:t,name:n,margin:c,anchorTarget:r?s:null},l)))},y=function(e){var t=e.theme,n=e.name,i=e.anchor,s=void 0===i?n:i,c=e.description,r=e.children;return Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(h,{theme:t,description:c,anchor:c?s:null},Object(a.jsx)(m,{theme:t,name:n,anchorTarget:c?s:null},r)))},O=function(e){var t=e.theme,n=e.name,i=e.anchor,s=void 0===i?n:i,c=e.placeholder,l=e.description;return Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(h,{theme:t,description:l,anchor:l?s:null},Object(a.jsx)("div",null,Object(a.jsx)(b,{theme:t,name:n,anchorTarget:l?s:null}),Object(a.jsx)("span",{style:{color:r(t,c)}},t.formatValue(c)),t.dictionaries.suffix)))}},234:function(e,t,n){"use strict";var i=n(5),a=n(195),s=n.n(a),c=n(0),o=n.n(c),r=n(204),l=n(207),u=function(e){var t=e.children;return Object(i.jsx)(o.a.Fragment,null,Object(i.jsx)(r.a,null,Object(i.jsx)(l.a,{items:[{to:"/configuration/manifest",name:"Manifests"},{to:"/configuration/yarnrc",name:"Yarnrc files"}]},t)))};u.propTypes={children:s.a.node.isRequired},t.a=u}}]);
//# sourceMappingURL=component---src-pages-configuration-manifest-js-4f881e68b8322ba2e2c0.js.map