(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7105a48f"],{"3e58":function(t,e,i){"use strict";var a=i("be7d"),n=i.n(a);n.a},"691c":function(t,e,i){t.exports=i.p+"img/vue.82b9c7a5.png"},bb51:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main justify-center"},[i("div",{staticClass:"flex-column margin-top-15vh"},[t._m(0),i("div",{staticClass:"display-3 font-weight-regular span-margin"},[t._v("Vue D3 V5 Examples")]),i("div",[i("v-btn",{staticClass:"margin-0-15 z-index-2",attrs:{outlined:"",large:"",rounded:"",color:"primary"},on:{click:t.openTab}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-github")]),t._v("Github")],1),i("v-btn",{staticClass:"margin-0-15 z-index-2",attrs:{outlined:"",large:"",rounded:"",color:"primary"},on:{click:t.routerRedirect}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-palm-tree")]),t._v("Examples")],1)],1)]),i("v-btn",{staticClass:"z-index-2",attrs:{fixed:"",icon:"",bottom:"",right:""},on:{click:t.changeTheme}},[t.dark?i("v-icon",[t._v("mdi-brightness-4")]):i("v-icon",[t._v("mdi-brightness-7")])],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center"},[a("img",{staticClass:"d-flex img-width",attrs:{src:i("691c")}}),a("img",{staticClass:"d-flex img-width img-d3-padding",attrs:{src:i("c852")}})])}],r={name:"Home",data:function(){return{dark:!1}},created:function(){localStorage.getItem("themeDark")&&"true"===localStorage.getItem("themeDark")&&(this.$vuetify.theme.dark=!0,this.dark=!0)},methods:{openTab:function(){window.open("https://github.com/gywgithub/vue-d3-examples","_blank")},routerRedirect:function(){this.$router.push("/examples")},changeTheme:function(){this.dark=!this.dark,localStorage.setItem("themeDark",String(this.dark)),this.$vuetify.theme.dark=this.dark}}},s=r,c=(i("3e58"),i("2877")),o=Object(c["a"])(s,a,n,!1,null,"3ea7e1b4",null);e["default"]=o.exports},be7d:function(t,e,i){},c852:function(t,e,i){t.exports=i.p+"img/d3.ffc6dddb.svg"}}]);
//# sourceMappingURL=chunk-7105a48f.f4a3d9e4.js.map