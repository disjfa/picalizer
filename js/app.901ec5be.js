(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)o=r[m],a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3ba5":function(t,e,n){},"4d68":function(t,e,n){t.exports=n.p+"img/picalizer.3676f250.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=n("2877"),r={},c=Object(o["a"])(r,a,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loaded?n("the-container"):n("the-upload")],1)},d=[],f=n("c93e"),p=n("2f62"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"setting bg-success is-active js-hide-selected"},[i("div",{staticClass:"setting-body text-center"},[i("img",{staticClass:"img-fluid logo-img",attrs:{src:n("4d68"),alt:""}}),i("h1",[t._v("Picalizer")]),i("p",[t._v("\n      Image editor using just javascript.\n    ")]),i("p",[t._v("\n      Upload an image, or just paste one. It may work!\n    ")]),t._m(0),i("div",{staticClass:"d-none"},[i("input",{ref:"file",staticClass:"form-control",attrs:{type:"file",id:"file"}})])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{staticClass:"btn btn-primary",attrs:{for:"file"}},[n("i",{staticClass:"fas fa-image"}),t._v("\n        Choose an image\n      ")])])}],v={name:"TheUpload",mounted:function(){var t=this;this.$refs.file.addEventListener("change",function(e){var n=e.target.files;t.$store.dispatch("setupImage",n)}),document.addEventListener("paste",this.paste,!0)},beforeDestroy:function(){document.removeEventListener("paste",this.paste,!0)},methods:{paste:function(t){this.$store.dispatch("setupImage",t.clipboardData.files)}}},b=v,_=(n("d3b0"),Object(o["a"])(b,h,g,!1,null,null,null));_.options.__file="TheUpload.vue";var C=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("nav",{staticClass:"grid-nav"},[n("the-navbar")],1),n("nav",{staticClass:"grid-action"},[n("the-actions")],1),n("div",{staticClass:"grid-main"},[n("div",{staticClass:"text-center p-3"},[n("img",{ref:"img",staticClass:"img-fluid",attrs:{src:t.getImage,alt:""}})])]),"resize"===t.action?n("edit-resize",{on:{cancelAction:t.cancelAction}}):t._e(),"saturation"===t.action?n("edit-saturation",{on:{cancelAction:t.cancelAction}}):t._e(),"crop"===t.action?n("edit-crop",{on:{cancelAction:t.cancelAction}}):t._e()],1)},w=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topbar bg-success"},[n("a",{staticClass:"btn btn-outline-light",attrs:{href:t.getImage,download:t.name}},[n("i",{staticClass:"fas fa-fw fa-download"}),n("span",{staticClass:"d-none d-sm-inline"},[t._v("download")])]),n("div",{staticClass:"text-light btn",attrs:{disabled:""}},[t._v("\n      "+t._s(t.width)+"px x "+t._s(t.height)+"px\n    ")]),n("a",{staticClass:"btn btn-outline-light",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(e)}}},[n("i",{staticClass:"fas fa-fw fa-times-circle"}),n("span",{staticClass:"d-none d-sm-inline"},[t._v("close")])])])])},A=[],x={name:"TheNavbar",methods:{close:function(){this.$store.commit("closeImage")}},computed:Object(f["a"])({},Object(p["b"])(["width","height","name"]),{getImage:function(){var t=this.$store.getters.image;return window.URL.createObjectURL(t)}})},E=x,O=Object(o["a"])(E,j,A,!1,null,null,null);O.options.__file="TheNavbar.vue";var $=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"actions"},[t._m(0),n("a",{staticClass:"actions-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.setAction("resize")}}},[t._m(1),n("span",{staticClass:"actions-label"},[t._v("resize")])]),n("a",{staticClass:"actions-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.setAction("crop")}}},[t._m(2),n("span",{staticClass:"actions-label"},[t._v("crop")])]),n("a",{staticClass:"actions-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.setAction("saturation")}}},[t._m(3),n("span",{staticClass:"actions-label"},[t._v("saturation")])]),n("router-link",{staticClass:"actions-item",attrs:{to:{name:"about"}}},[n("span",{staticClass:"actions-icon"},[n("i",{staticClass:"fas fa-fw fa-info-circle"})]),n("span",{staticClass:"actions-label"},[t._v("about")])])],1)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2 px-3 d-none d-md-block"},[n("h3",[t._v("Action")]),n("p",[t._v("Choose an action and edit your image")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"actions-icon"},[n("i",{staticClass:"fas fa-fw fa-expand-arrows-alt"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"actions-icon"},[n("i",{staticClass:"fas fa-fw fa-crop"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"actions-icon"},[n("i",{staticClass:"fas fa-fw fa-adjust"})])}],I={name:"TheActions",methods:{setAction:function(t){this.$store.commit("setAction",t)}}},R=I,L=Object(o["a"])(R,k,z,!1,null,null,null);L.options.__file="TheActions.vue";var H=L.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"resize"==t.action?n("form",{staticClass:"setting",attrs:{action:"#",id:"resize"},on:{submit:function(e){return e.preventDefault(),t.resize(e)}}},[n("div",{staticClass:"setting-body"},[n("h3",[t._v("Resize image")]),n("p",[t._v("\n      Resize image using these settings.\n    ")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"resize_width"}},[t._v("width")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.myWidth,expression:"myWidth"}],staticClass:"form-control",attrs:{type:"number",id:"resize_width"},domProps:{value:t.myWidth},on:{input:function(e){e.target.composing||(t.myWidth=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"resize_height"}},[t._v("height")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.myHeight,expression:"myHeight"}],staticClass:"form-control",attrs:{type:"number",id:"resize_height"},domProps:{value:t.myHeight},on:{input:function(e){e.target.composing||(t.myHeight=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"custom-control custom-checkbox"},[n("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"constrain_proportions"},domProps:{checked:t.constrain_proportions},on:{change:function(e){t.constrain_proportions=!t.constrain_proportions}}}),n("label",{staticClass:"custom-control-label",attrs:{for:"constrain_proportions"}},[t._v("\n          Constrain proportions\n        ")])])]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("resize")]),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.cancelAction}},[t._v("cancel")])])])]):t._e()},U=[],P={name:"EditResize",data:function(){return{constrain_proportions:!0,myWidth:0,myHeight:0}},methods:{resize:function(){var t=this,e=document.createElement("canvas"),n=document.createElement("img");e.width=this.myWidth,e.height=this.myHeight,n.addEventListener("load",function(n){var i=e.getContext("2d",{alpha:Boolean(!1)});i.drawImage(n.target,0,0,t.myWidth,t.myHeight),i=null,e.toBlob(function(e){t.$store.commit("updateImage",e),t.cancelAction()})}),n.src=window.URL.createObjectURL(this.image)},cancelAction:function(){this.$emit("cancelAction")}},mounted:function(){this.myWidth=this.width,this.myHeight=this.height},watch:{width:function(t){this.myWidth=t},height:function(t){this.myHeight=t},myWidth:function(t){this.constrain_proportions&&(this.myHeight=(this.height*t/this.width).toFixed())},myHeight:function(t){this.constrain_proportions&&(this.myWidth=(this.width*t/this.height).toFixed())}},computed:Object(f["a"])({},Object(p["b"])(["width","height","image","action"]))},S=P,D=Object(o["a"])(S,T,U,!1,null,null,null);D.options.__file="EditResize.vue";var W=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"saturation"==t.action?n("form",{staticClass:"setting",on:{submit:function(e){return e.preventDefault(),t.saturate(e)}}},[n("div",{staticClass:"setting-body"},[n("h3",[t._v("Apply saturation")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"red"}},[t._v("red")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.red,expression:"red"}],staticClass:"form-control",attrs:{type:"range",min:"0",max:"255"},domProps:{value:t.red},on:{__r:function(e){t.red=e.target.value}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"red"}},[t._v("green")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.green,expression:"green"}],staticClass:"form-control",attrs:{type:"range",min:"0",max:"255"},domProps:{value:t.green},on:{__r:function(e){t.green=e.target.value}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"red"}},[t._v("blue")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.blue,expression:"blue"}],staticClass:"form-control",attrs:{type:"range",min:"0",max:"255"},domProps:{value:t.blue},on:{__r:function(e){t.blue=e.target.value}}})]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("apply")]),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.cancelAction}},[t._v("cancel")])])])]):t._e()},B=[],F={name:"EditSaturation",data:function(){return{alpha:!0,red:255,green:255,blue:255}},methods:{saturate:function(){var t=this,e=document.createElement("canvas"),n=document.createElement("img");e.width=this.width,e.height=this.height,n.addEventListener("load",function(n){var i=e.getContext("2d",{alpha:Boolean(t.alpha)});i.drawImage(n.target,0,0),i.globalCompositeOperation="saturation",i.fillStyle="rgb(".concat(t.red,", ").concat(t.green,", ").concat(t.blue,")"),i.fillRect(0,0,e.width,e.height),i.globalCompositeOperation="source-over",i=null,e.toBlob(function(e){t.$store.commit("updateImage",e),t.cancelAction()})}),n.src=window.URL.createObjectURL(this.image)},cancelAction:function(){this.$emit("cancelAction")}},computed:Object(f["a"])({},Object(p["b"])(["width","height","image","action"]))},K=F,M=Object(o["a"])(K,N,B,!1,null,null,null);M.options.__file="EditSaturation.vue";var J=M.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"setting",attrs:{action:"#",id:"resize"},on:{submit:function(e){return e.preventDefault(),t.crop(e)}}},[n("div",{staticClass:"setting-body",staticStyle:{}},[n("h3",[t._v("Resize image")]),n("p",[t._v("\n      Resize image using these settings.\n    ")]),n("div",{staticClass:"d-relative"},[n("img",{ref:"img",staticClass:"img-fluid",attrs:{src:t.getImage,alt:""}})]),n("br"),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("crop")]),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.cancelAction}},[t._v("cancel")])])])])},G=[],Q=n("b5fc"),V={name:"EditCrop",data:function(){return{cropper:!1}},methods:{crop:function(){var t=this;this.cropper.getCroppedCanvas().toBlob(function(e){t.$store.commit("updateImage",e),t.cancelAction()})},cancelAction:function(){this.$emit("cancelAction")}},mounted:function(){this.cropper=new Q["a"](this.$refs.img)},computed:{getImage:function(){var t=this.$store.getters.image;return window.URL.createObjectURL(t)}}},X=V,Y=Object(o["a"])(X,q,G,!1,null,null,null);Y.options.__file="EditCrop.vue";var Z=Y.exports,tt={name:"TheContainer",components:{TheNavbar:$,TheActions:H,EditResize:W,EditSaturation:J,EditCrop:Z},methods:{setAction:function(t){this.$store.commit("setAction",t)},cancelAction:function(){this.setAction(!1)},checkKeyDown:function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode?(t.preventDefault(),this.cancelAction(),!1):(t.altKey&&t.ctrlKey&&("i"===t.key&&this.setAction("resize"),"c"===t.key&&this.setAction("crop")),!1)}},mounted:function(){var t=this;this.$refs.img.addEventListener("load",function(e){t.$store.commit("initSize",e.target)}),document.addEventListener("keydown",this.checkKeyDown,!0)},computed:Object(f["a"])({},Object(p["b"])(["action"]),{getImage:function(){var t=this.$store.getters.image;return window.URL.createObjectURL(t)}})},et=tt,nt=Object(o["a"])(et,y,w,!1,null,null,null);nt.options.__file="TheContainer.vue";var it=nt.exports,at={name:"home",components:{TheUpload:C,TheContainer:it},computed:Object(f["a"])({},Object(p["b"])(["loaded"]))},st=at,ot=Object(o["a"])(st,m,d,!1,null,null,null);ot.options.__file="Home.vue";var rt=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting bg-success"},[n("div",{staticClass:"setting-body"},[n("div",{staticClass:"pb-3"},[n("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"home"}}},[n("i",{staticClass:"fas fa-fw fa-chevron-left"}),t._v("\n        Back\n      ")])],1),t._m(0),n("p",[t._v("\n      Hi, thanks for using picalizer! Hope you like it and enjoy editing images.\n    ")]),n("p",[t._v("\n      If you have any suggestions, please let me know. Also if you just like it you can let me\n      know! Just add an issue on the github page.\n    ")]),t._m(1)])])},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("i",{staticClass:"fas fa-fw fa-info-circle"}),t._v("\n      About\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{staticClass:"btn btn-primary",attrs:{href:"https://github.com/disjfa/picalizer"}},[t._v("github")]),n("a",{staticClass:"btn btn-primary",attrs:{href:"https://github.com/disjfa/picalizer/issues"}},[t._v("issues")])])}],ut={},mt=Object(o["a"])(ut,ct,lt,!1,null,null,null);mt.options.__file="About.vue";var dt=mt.exports;i["a"].use(u["a"]);var ft=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:dt},{path:"*",redirect:{name:"home"}}]});n("7f7f");i["a"].use(p["a"]);var pt=new p["a"].Store({state:{image:!1,name:!1,loaded:!1,action:!1,width:!1,height:!1},getters:{image:function(t){return t.image},name:function(t){return t.name},loaded:function(t){return t.loaded},action:function(t){return t.action},width:function(t){return t.width},height:function(t){return t.height}},mutations:{initImage:function(t,e){i["a"].set(t,"image",e),i["a"].set(t,"name",e.name),i["a"].set(t,"loaded",!0)},closeImage:function(t){i["a"].set(t,"image",!1),i["a"].set(t,"name",!1),i["a"].set(t,"loaded",!1)},updateImage:function(t,e){i["a"].set(t,"image",e)},initSize:function(t,e){var n=e.naturalWidth,a=e.naturalHeight;i["a"].set(t,"width",n),i["a"].set(t,"height",a)},setAction:function(t,e){i["a"].set(t,"action",e)}},actions:{setupImage:function(t,e){for(var n=0;n<e.length;n+=1)if(e[n].type.indexOf("image")>-1)return void t.commit("initImage",e[n])}}}),ht=n("9483");Object(ht["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("b20f");i["a"].config.productionTip=!1,new i["a"]({router:ft,store:pt,render:function(t){return t(l)}}).$mount("#app")},b20f:function(t,e,n){},d3b0:function(t,e,n){"use strict";var i=n("3ba5"),a=n.n(i);a.a}});
//# sourceMappingURL=app.901ec5be.js.map