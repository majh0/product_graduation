(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],v=0,p=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={post_detail:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([2,"chunk-vendors"]),a()})({2:function(t,e,a){t.exports=a("815f")},"402c":function(t,e,a){"use strict";var n=a("2b0e"),o=a("f309");n["a"].use(o["a"]),e["a"]=new o["a"]({})},"502b":function(t,e,a){"use strict";a("da83")},"815f":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("main-menu"),a("v-main",[a("post-detail")],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© 2020")])])],1)},r=[],i=a("add6"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"10"}},[a("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("h1",[t._v(t._s(t.post.title))]),a("p",[t._v(t._s(t.post.modify_dt)+", written by "+t._s(t.post.owner))])])],1)],1),a("v-row",{attrs:{align:"start",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[a("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.post.content))]),a("strong",[t._v("TAGS:")]),t._l(t.post.tags,(function(e,n){return a("v-chip",{key:n,staticClass:"ma-2 my-hover",attrs:{outlined:""},on:{click:function(a){return t.serverPage(e)}}},[t._v(" "+t._s(e))])}))],2),a("v-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[a("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[a("p",[t._v("prev post")]),t.post.prev?a("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.prev.id)}}},[t._v(t._s(t.post.prev.title))]):t._e()]),a("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[a("p",[t._v("next post")]),t.post.next?a("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.next.id)}}},[t._v(t._s(t.post.next.title))]):t._e()]),a("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[a("h2",[t._v("Tag cloud")]),t._l(t.tagCloud,(function(e,n){return a("v-chip",{key:n,staticClass:"ma-2 my-hover",attrs:{color:e.color,"text-color":"white"},on:{click:function(a){return t.serverPage(e.name)}}},[a("v-avatar",{class:e.color+" darken-4",attrs:{left:""}},[t._v(" "+t._s(e.count)+" ")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)],1)],1)],1)},l=[],c=(a("ac1f"),a("1276"),a("159b"),a("bc3a")),u=a.n(c),v={name:"HelloWorld",data:function(){return{post:{},tagCloud:[]}},created:function(){console.log("created()...");var t=location.pathname.split("/")[3]||2;this.fetchPostDetail(t),this.fetchTagCloud()},methods:{fetchPostDetail:function(t){var e=this;console.log("fetchPostDetail()..",t),u.a.get("/api/post/".concat(t,"/")).then((function(t){console.log("POST DETAIL GET RES",t),e.post=t.data})).catch((function(t){console.log("POST DETAIL GET ERR.RESPONSE",t.response),alert(t.response.status+""+t.response.statusText)}))},fetchTagCloud:function(){var t=this;console.log("fetchTagCloud().."),u.a.get("/api/tag/cloud/").then((function(e){console.log("POST CLOUD GET RES",e),t.tagCloud=e.data,t.tagCloud.forEach((function(t){3===t.weight?t.color="green":2===t.weight?t.color="blue-grty":1===t.weight&&(t.color="grey")}))})).catch((function(t){console.log("TAG CLOUD GET ERR.RESPONSE",t.response),alert(t.response.status+""+t.response.statusText)}))},serverPage:function(t){console.log("serverPage()...",t),location.href="/blog/post/list/?tagname=".concat(t)}}},p=v,f=(a("502b"),a("2877")),d=a("6544"),g=a.n(d),m=a("8212"),h=a("b0af"),_=a("cc20"),b=a("62ad"),w=a("a523"),y=a("0fd9"),P=Object(f["a"])(p,s,l,!1,null,"3a49b5c4",null),x=P.exports;g()(P,{VAvatar:m["a"],VCard:h["a"],VChip:_["a"],VCol:b["a"],VContainer:w["a"],VRow:y["a"]});var T={components:{PostDetail:x,MainMenu:i["a"]},props:{source:String},data:function(){return{drawer:null}},created:function(){}},V=T,C=a("7496"),O=a("553a"),S=a("f6c4"),E=Object(f["a"])(V,o,r,!1,null,null,null),j=E.exports;g()(E,{VApp:C["a"],VFooter:O["a"],VMain:S["a"]});var k=a("402c");n["a"].config.productionTip=!1,new n["a"]({vuetify:k["a"],render:function(t){return t(j)}}).$mount("#app")},add6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("dashboard")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-cog")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Settings")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Application")]),a("v-toolbar-title",[t._v("Vue.js-Django Web Programming")]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/"}},[t._v("HOME")]),a("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Article")]),a("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),a("v-btn",{attrs:{text:""}},[t._v("/")]),a("v-btn",{attrs:{text:"",href:"/post_list.html"}},[t._v("PostList")]),a("v-btn",{attrs:{text:"",href:"/post_detail.html"}},[t._v("PostDetail")]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-account")]),t._v(" Anonymous "),a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-title",[t._v("Login")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Register")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Logout")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Password change")])],1)],1)],1)],1)],1)},o=[],r={data:function(){return{drawer:null}}},i=r,s=a("2877"),l=a("6544"),c=a.n(l),u=a("40dc"),v=a("5bc1"),p=a("8336"),f=a("132d"),d=a("8860"),g=a("da13"),m=a("1800"),h=a("5d23"),_=a("e449"),b=a("f774"),w=a("2fa4"),y=a("2a7f"),P=Object(s["a"])(i,n,o,!1,null,null,null);e["a"]=P.exports;c()(P,{VAppBar:u["a"],VAppBarNavIcon:v["a"],VBtn:p["a"],VIcon:f["a"],VList:d["a"],VListItem:g["a"],VListItemAction:m["a"],VListItemContent:h["a"],VListItemTitle:h["b"],VMenu:_["a"],VNavigationDrawer:b["a"],VSpacer:w["a"],VToolbarTitle:y["a"]})},da83:function(t,e,a){}});
//# sourceMappingURL=post_detail.5775984e.js.map