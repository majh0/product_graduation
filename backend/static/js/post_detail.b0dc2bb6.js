(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],p=0,u=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},r={post_detail:0},n=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;n.push([2,"chunk-vendors"]),o()})({2:function(t,e,o){t.exports=o("815f")},"2c50":function(t,e,o){"use strict";o("b56e")},"402c":function(t,e,o){"use strict";var a=o("2b0e"),r=o("f309");o("d1e78");a["a"].use(r["a"]),e["a"]=new r["a"]({icons:{iconfont:"md"}})},"815f":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("main-menu"),o("v-main",[o("post-detail")],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("© 2020")])])],1)},n=[],s=o("add6"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",lg:"10"}},[o("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[o("h1",[t._v(t._s(t.post.title))]),o("p",[t._v(t._s(t.post.modify_dt)+", written by "+t._s(t.post.owner))])])],1)],1),o("v-row",{attrs:{align:"start",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[o("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.post.content))]),o("strong",[t._v("TAGS:")]),t._l(t.post.tags,(function(e,a){return o("v-chip",{key:a,staticClass:"ma-2 my-hover",attrs:{outlined:""},on:{click:function(o){return t.serverPage(e)}}},[t._v(" "+t._s(e))])}))],2),o("v-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("prev post")]),t.post.prev?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.prev.id)}}},[t._v(t._s(t.post.prev.title))]):t._e()]),o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("p",[t._v("next post")]),t.post.next?o("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.next.id)}}},[t._v(t._s(t.post.next.title))]):t._e()]),o("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[o("h2",[t._v("Tag cloud")]),t._l(t.tagCloud,(function(e,a){return o("v-chip",{key:a,staticClass:"ma-2 my-hover",attrs:{color:e.color,"text-color":"white"},on:{click:function(o){return t.serverPage(e.name)}}},[o("v-avatar",{class:e.color+" darken-4",attrs:{left:""}},[t._v(" "+t._s(e.count)+" ")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)],1)],1)],1)},c=[],l=(o("ac1f"),o("1276"),o("159b"),o("bc3a")),d=o.n(l),p={data:function(){return{post:{},tagCloud:[]}},created:function(){console.log("created()...");var t=location.pathname.split("/")[3];this.fetchPostDetail(t),this.fetchTagCloud()},methods:{fetchPostDetail:function(t){var e=this;console.log("fetchPostDetail()..",t),d.a.get("/api/post/".concat(t,"/")).then((function(t){console.log("POST DETAIL GET RES",t),e.post=t.data})).catch((function(t){console.log("POST DETAIL GET ERR.RESPONSE",t.response),alert(t.response.status+""+t.response.statusText)}))},fetchTagCloud:function(){var t=this;console.log("fetchTagCloud().."),d.a.get("/api/tag/cloud/").then((function(e){console.log("POST CLOUD GET RES",e),t.tagCloud=e.data,t.tagCloud.forEach((function(t){3===t.weight?t.color="green":2===t.weight?t.color="blue-grty":1===t.weight&&(t.color="grey")}))})).catch((function(t){console.log("TAG CLOUD GET ERR.RESPONSE",t.response),alert(t.response.status+""+t.response.statusText)}))},serverPage:function(t){console.log("serverPage()...",t),location.href="/blog/post/list/?tagname=".concat(t)}}},u=p,g=(o("2c50"),o("2877")),v=o("6544"),f=o.n(v),m=o("8212"),h=o("b0af"),w=o("cc20"),b=o("62ad"),_=o("a523"),E=o("0fd9"),O=Object(g["a"])(u,i,c,!1,null,"9f3059f0",null),y=O.exports;f()(O,{VAvatar:m["a"],VCard:h["a"],VChip:w["a"],VCol:b["a"],VContainer:_["a"],VRow:E["a"]});var x={components:{PostDetail:y,MainMenu:s["a"]},props:{source:String},data:function(){return{drawer:null}},created:function(){}},T=x,S=o("7496"),P=o("553a"),k=o("f6c4"),C=Object(g["a"])(T,r,n,!1,null,null,null),R=C.exports;f()(C,{VApp:S["a"],VFooter:P["a"],VMain:k["a"]});var V=o("402c");a["a"].config.productionTip=!1,new a["a"]({vuetify:V["a"],render:function(t){return t(R)}}).$mount("#app")},add6:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{attrs:{link:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-view-dashboard")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("dashboard")])],1)],1),o("v-list-item",{attrs:{link:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-cog")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Application")]),o("v-toolbar-title",[t._v("Vue.js-Django Web Programming")]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"/"}},[t._v("HOME")]),o("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Article")]),o("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),o("v-spacer"),o("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),a),[o("v-icon",[t._v("mdi-account")]),t._v(" "+t._s(t.me.username)+" "),o("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[o("v-list",["Anonymous"===t.me.username?[o("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[o("v-list-item-title",[t._v("Login")])],1),o("v-list-item",[o("v-list-item-title",{on:{click:function(e){return t.dialogOpen("register")}}},[t._v("Register")])],1)]:[o("v-list-item",{on:{click:t.logout}},[o("v-list-item-title",[t._v("Logout")])],1),o("v-list-item",[o("v-list-item-title",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[t._v("Password change")])],1)]],2)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{dark:"",color:"primary"}},[o("v-toolbar-title",[t._v("Login form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"loginForm",attrs:{id:"login-form"}},[o("v-text-field",{attrs:{"prepend-icon":"person",name:"username",label:"Username",type:"text"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v("Login")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{dark:"",color:"success"}},[o("v-toolbar-title",[t._v("Resgister form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"registerForm",attrs:{id:"register-form"}},[o("v-text-field",{attrs:{"prepend-icon":"person",name:"username",label:"Username",type:"text"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",name:"password1",label:"Password",type:"password"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",name:"password2",label:"Password again",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("register")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){return t.save("register")}}},[t._v("Register")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{dark:"",color:"warning"}},[o("v-toolbar-title",[t._v("Password change form")]),o("v-spacer")],1),o("v-card-text",[o("v-form",{ref:"pwdchgForm",attrs:{id:"pwdchg-form"}},[o("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"old_password",label:"Old password",type:"password"}}),o("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"new_password1",label:"New password",type:"password"}}),o("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"new_password2",label:"New password again",type:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("pwdchg")}}},[t._v("Cancel")]),o("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){return t.save("pwdchg")}}},[t._v("Password change")])],1)],1)],1)],1)},r=[],n=o("bc3a"),s=o.n(n),i=o("d9c2");s.a.defaults.xsrfCookieName="csrftoken",s.a.defaults.xsrfHeaderName="X-CSRFToken";var c={data:function(){return{drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"}}},created:function(){this.getUserInfo()},watch:{me:function(t,e){console.log("watch.me()...",t,e),i["a"].$emit("me_change",t)}},methods:{dialogOpen:function(t){console.log("diallogOpen()...",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"pwdchg"===t&&(this.dialog.pwdchg=!0)},cancel:function(t){console.log("cancel()...",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},save:function(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},login:function(){var t=this;console.log("login()...");var e=new FormData(document.getElementById("login-form"));s.a.post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login NOK")}))},register:function(){console.log("register()...");var t=new FormData(document.getElementById("register-form"));s.a.post("/api/register/",t).then((function(t){console.log("REGISTER POST RES",t),alert("user: ".concat(t.data.username," created OK"))})).catch((function(t){console.log("REGISTER POST ERR.RESPONSE",t.response),alert("register NOK")}))},logout:function(){var t=this;console.log("logout()..."),s.a.get("/api/logout/").then((function(e){console.log("LOGOUT GET RES",e),alert("user: ".concat(t.me.username," logout OK")),t.me={username:"Anonymous"}})).catch((function(t){console.log("LOGOUT GETT ERR.RESPONSE",t.response),alert("LOGOUT NOK")}))},pwdchg:function(){var t=this;console.log("pwdchg()...");var e=new FormData(document.getElementById("pwdchg-form"));s.a.post("/api/pwdchg/",e).then((function(e){console.log("PWDCHG GET RES",e),alert("user: ".concat(t.me.username," password change OK"))})).catch((function(t){console.log("PWDCHG GET ERR.RESPONSE",t.response),alert("PASSWORD CHANGE NOK")}))},getUserInfo:function(){var t=this;console.log("getUserInfo()..."),s.a.get("/api/me/").then((function(e){console.log("GET USER INFO GET",e),t.me=e.data})).catch((function(t){console.log("GET USER INFO GET ERR.RESPONSE",t.response),alert(t.response.status+""+t.response.statusText)}))}}},l=c,d=o("2877"),p=o("6544"),u=o.n(p),g=o("40dc"),v=o("5bc1"),f=o("8336"),m=o("b0af"),h=o("99d9"),w=o("169a"),b=o("4bd4"),_=o("132d"),E=o("8860"),O=o("da13"),y=o("1800"),x=o("5d23"),T=o("e449"),S=o("f774"),P=o("2fa4"),k=o("8654"),C=o("71d9"),R=o("2a7f"),V=Object(d["a"])(l,a,r,!1,null,null,null);e["a"]=V.exports;u()(V,{VAppBar:g["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VDialog:w["a"],VForm:b["a"],VIcon:_["a"],VList:E["a"],VListItem:O["a"],VListItemAction:y["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VMenu:T["a"],VNavigationDrawer:S["a"],VSpacer:P["a"],VTextField:k["a"],VToolbar:C["a"],VToolbarTitle:R["a"]})},b56e:function(t,e,o){},d9c2:function(t,e,o){"use strict";var a=o("2b0e"),r=new a["a"];e["a"]=r}});
//# sourceMappingURL=post_detail.b0dc2bb6.js.map