(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},r={home:0},n=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("7cf4")},"402c":function(t,e,o){"use strict";var a=o("2b0e"),r=o("f309");o("d1e78");a["a"].use(r["a"]),e["a"]=new r["a"]({icons:{iconfont:"md"}})},"7cf4":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("MainMenu"),o("v-main",[o("hello-world")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2020")])])],1)},n=[],s=o("add6"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify (Home) ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},l=[],c={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},d=c,u=o("2877"),p=o("6544"),v=o.n(p),g=o("62ad"),f=o("a523"),m=o("adda"),h=o("0fd9"),w=Object(u["a"])(d,i,l,!1,null,null,null),b=w.exports;v()(w,{VCol:g["a"],VContainer:f["a"],VImg:m["a"],VRow:h["a"]});var y={components:{HelloWorld:b,MainMenu:s["a"]},props:{},data:function(){return{}},created:function(){}},_=y,x=o("7496"),O=o("553a"),k=o("f6c4"),E=Object(u["a"])(_,r,n,!1,null,null,null),C=E.exports;v()(E,{VApp:x["a"],VFooter:O["a"],VMain:k["a"]});var S=o("402c");a["a"].config.productionTip=!1,new a["a"]({vuetify:S["a"],render:function(t){return t(C)}}).$mount("#app")},"9b19":function(t,e,o){t.exports=o.p+"static/img/logo.63a7d78d.svg"},add6:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{attrs:{link:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-view-dashboard")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("dashboard")])],1)],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-cog")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Application")]),o("v-toolbar-title",[t._v("Vue.js-Django Web Programming")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("HOME")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Article")]),o("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),o("v-spacer"),o("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),a),[o("v-icon",[t._v("mdi-account")]),t._v(" "+t._s(t.me.username)+" "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",["Anonymous"===t.me.username?[o("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[o("v-list-item-title",[t._v("Login")])],1),o("v-list-item",[o("v-list-item-title",{on:{click:function(e){return t.dialogOpen("register")}}},[t._v("Register")])],1)]:[o("v-list-item",{on:{click:t.logout}},[o("v-list-item-title",[t._v("Logout")])],1),o("v-list-item",[o("v-list-item-title",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[t._v("Password change")])],1)]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{dark:"",color:"primary"}},[o("v-toolbar-title",[t._v("Login form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"loginForm",attrs:{id:"login-form"}},[o("v-text-field",{attrs:{"prepend-icon":"person",name:"username",label:"Username",type:"text"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("Login")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{dark:"",color:"success"}},[o("v-toolbar-title",[t._v("Resgister form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"registerForm",attrs:{id:"register-form"}},[o("v-text-field",{attrs:{"prepend-icon":"person",name:"username",label:"Username",type:"text"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",name:"password1",label:"Password",type:"password"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",name:"password2",label:"Password again",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("Register")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{dark:"",color:"warning"}},[o("v-toolbar-title",[t._v("Password change form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"pwdchgForm",attrs:{id:"pwdchg-form"}},[o("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"old_password",label:"Old password",type:"password"}}),o("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"new_password1",label:"New password",type:"password"}}),o("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"new_password2",label:"New password again",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("pwdchg")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("pwdchg")}}},[t._v("Password change")])],1)],1)],1)],1)},r=[],n=o("bc3a"),s=o.n(n),i=o("d9c2");s.a.defaults.xsrfCookieName="csrftoken",s.a.defaults.xsrfHeaderName="X-CSRFToken";var l={data:function(){return{drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"}}},created:function(){this.getUserInfo()},watch:{me:function(t,e){console.log("watch.me()...",t,e),i["a"].$emit("me_change",t)}},methods:{dialogOpen:function(t){console.log("diallogOpen()...",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"pwdchg"===t&&(this.dialog.pwdchg=!0)},cancel:function(t){console.log("cancel()...",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},save:function(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},login:function(){var t=this;console.log("login()...");var e=new FormData(document.getElementById("login-form"));s.a.post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login NOK")}))},register:function(){console.log("register()...");var t=new FormData(document.getElementById("register-form"));s.a.post("/api/register/",t).then((function(t){console.log("REGISTER POST RES",t),alert("user: ".concat(t.data.username," created OK"))})).catch((function(t){console.log("REGISTER POST ERR.RESPONSE",t.response),alert("register NOK")}))},logout:function(){var t=this;console.log("logout()..."),s.a.get("/api/logout/").then((function(e){console.log("LOGOUT GET RES",e),alert("user: ".concat(t.me.username," logout OK")),t.me={username:"Anonymous"}})).catch((function(t){console.log("LOGOUT GETT ERR.RESPONSE",t.response),alert("LOGOUT NOK")}))},pwdchg:function(){var t=this;console.log("pwdchg()...");var e=new FormData(document.getElementById("pwdchg-form"));s.a.post("/api/pwdchg/",e).then((function(e){console.log("PWDCHG GET RES",e),alert("user: ".concat(t.me.username," password change OK"))})).catch((function(t){console.log("PWDCHG GET ERR.RESPONSE",t.response),alert("PASSWORD CHANGE NOK")}))},getUserInfo:function(){var t=this;console.log("getUserInfo()..."),s.a.get("/api/me/").then((function(e){console.log("GET USER INFO GET",e),t.me=e.data})).catch((function(t){console.log("GET USER INFO GET ERR.RESPONSE",t.response),alert(t.response.status+""+t.response.statusText)}))}}},c=l,d=o("2877"),u=o("6544"),p=o.n(u),v=o("40dc"),g=o("5bc1"),f=o("8336"),m=o("b0af"),h=o("99d9"),w=o("169a"),b=o("4bd4"),y=o("132d"),_=o("8860"),x=o("da13"),O=o("1800"),k=o("5d23"),E=o("e449"),C=o("f774"),S=o("2fa4"),R=o("8654"),V=o("71d9"),T=o("2a7f"),j=Object(d["a"])(c,a,r,!1,null,null,null);e["a"]=j.exports;p()(j,{VAppBar:v["a"],VAppBarNavIcon:g["a"],VBtn:f["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VDialog:w["a"],VForm:b["a"],VIcon:y["a"],VList:_["a"],VListItem:x["a"],VListItemAction:O["a"],VListItemContent:k["a"],VListItemTitle:k["b"],VMenu:E["a"],VNavigationDrawer:C["a"],VSpacer:S["a"],VTextField:R["a"],VToolbar:V["a"],VToolbarTitle:T["a"]})},d9c2:function(t,e,o){"use strict";var a=o("2b0e"),r=new a["a"];e["a"]=r}});
//# sourceMappingURL=home.761eee25.js.map