(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74764d2c"],{7958:function(t,i,e){},"8b0d":function(t,i,e){},"94aa":function(t,i,e){},af1b:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",clipped:"",color:"drawer"},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"pa-2"},[e("v-list",{attrs:{dense:"",rounded:""}},t._l(t.extras,(function(i){return e("v-list-item",{key:i.text,attrs:{to:i.path,link:""},on:{click:i.fun}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(i.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" "+t._s(i.text)+" ")])],1)],1)})),1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list",{attrs:{dense:"",rounded:""}},t._l(t.items,(function(i){return e("v-list-item",{key:i.text,attrs:{to:i.path,link:""},on:{click:i.fun}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(i.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" "+t._s(i.text)+" ")])],1)],1)})),1),e("v-dialog",{attrs:{"max-width":"310"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v(" ¿Quieres salir de la aplicación? ")]),e("v-card-text",[t._v(" Si te sales deberás volver a loguearte para acceder a la aplicación ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"grey",text:""},on:{click:function(i){t.dialog=!1}}},[t._v(" Cancelar ")]),e("v-btn",{attrs:{color:"red",text:"",to:{path:"login"}},on:{click:function(i){t.dialog=!1}}},[t._v(" Salir ")])],1)],1)],1)],1),e("v-app-bar",{attrs:{app:"","clipped-left":"",color:"mainlayout",dense:""}},[e("v-app-bar-nav-icon",{on:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-icon",{staticClass:"mx-4",attrs:{large:""}},[t._v(" mdi-hospital-box-outline ")]),e("v-toolbar-title",{staticClass:"mr-12 align-center"},[e("span",{staticClass:"title"},[t._v("SALUDAPP ")])]),e("v-spacer"),e("v-row",{staticStyle:{"max-width":"200px"},attrs:{align:"center"}},[e("div",{staticClass:"my-2"},[e("v-btn",{attrs:{to:{path:"perfil"},fab:"","x-small":""}},[e("v-icon",[t._v("mdi-account-circle")])],1)],1),e("v-spacer"),t._v(" Borja Alvarez Miguelez ")],1)],1),e("v-parallax",{staticClass:"fill-height",attrs:{height:"100%"}},[e("v-container",[e("router-view")],1)],1),e("v-footer",{attrs:{color:"mainlayout"}},[e("v-card-text",{staticClass:".font-italic font-weight-bold text-center"},[t._v(" ©2021 — "),e("strong",[t._v("SALUDAPP")])])],1)],1)},s=[],r={props:{source:String,username:String},data:function(){var t=this;return{drawer:null,dialog:!1,items:[{icon:"mdi-calendar-range",text:"Pedir Cita",path:"pedircita",fun:function(){}},{icon:"mdi-history",text:"Historial de Citas",path:"historialcitas",fun:function(){}},{icon:"mdi-water-outline",text:"Análisis",path:"analisis",fun:function(){}},{icon:"mdi-radiology-box-outline",text:"Pruebas",path:"pruebas",fun:function(){}},{icon:"mdi-account-box-outline",text:"Perfil",path:"perfil",fun:function(){}}],extras:[{icon:"mdi-cog",text:"Configuración",path:"configuracion",fun:function(){}},{icon:"mdi-help-box",text:"Ayuda",path:"ayuda",fun:function(){}},{icon:"mdi-exit-run ",text:"Salir",path:null,fun:function(){t.dialog=!0}}]}},created:function(){}},o=r,a=e("2877"),c=e("6544"),l=e.n(c),h=e("7496"),u=(e("a9e3"),e("b680"),e("c7cd"),e("5530")),d=(e("8b0d"),e("71d9")),p=e("53ca");function v(t,i){var e=i.modifiers||{},n=e.self,s=void 0!==n&&n,r=i.value,o="object"===Object(p["a"])(r)&&r.options||{passive:!0},a="function"===typeof r||"handleEvent"in r?r:r.handler,c=s?t:i.arg?document.querySelector(i.arg):window;c&&(c.addEventListener("scroll",a,o),t._onScroll={handler:a,options:o,target:s?void 0:c})}function f(t){if(t._onScroll){var i=t._onScroll,e=i.handler,n=i.options,s=i.target,r=void 0===s?t:s;r.removeEventListener("scroll",e,n),delete t._onScroll}}var m={inserted:v,unbind:f},g=m,b=e("3a66"),S=e("d9bd"),w=e("2b0e"),x=w["a"].extend({name:"scrollable",directives:{Scroll:m},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(S["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),O=e("d10f"),y=e("f2e7"),T=e("80d2"),A=e("58df"),C=Object(A["a"])(d["a"],x,O["a"],y["a"],Object(b["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),B=C.extend({name:"v-app-bar",directives:{Scroll:g},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return x.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(u["a"])(Object(u["a"])({},d["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return d["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,i=this.dense?48:56,e=t,n=e-i,s=n/this.computedScrollThreshold,r=this.currentScroll*s;return Math.max(i,e-r)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,i=t-this.computedContentHeight,e=.00347;return Number((1.5-i*e).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=d["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:d["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return d["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(u["a"])(Object(u["a"])({},d["a"].options.computed.styles.call(this)),{},{fontSize:Object(T["g"])(this.computedFontSize,"rem"),marginTop:Object(T["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(T["g"])(this.computedTransform),")"),left:Object(T["g"])(this.computedLeft),right:Object(T["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=d["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var i=d["a"].options.render.call(this,t);return i.data=i.data||{},this.canScroll&&(i.data.directives=i.data.directives||[],i.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),i}}),_=(e("498a"),e("9d26")),M=e("8336"),V=w["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,i){var e=i.slots,n=i.listeners,s=i.props,r=i.data,o=Object.assign(r,{staticClass:"v-app-bar__nav-icon ".concat(r.staticClass||"").trim(),props:Object(u["a"])(Object(u["a"])({},s),{},{icon:!0}),on:n}),a=e().default;return t(M["a"],o,a||[t(_["a"],"$menu")])}}),H=e("b0af"),j=e("99d9"),k=e("a523"),$=e("169a"),L=e("553a"),E=e("132d"),R=e("8860"),P=e("da13"),N=e("1800"),I=e("5d23"),z=(e("99af"),e("7958"),e("adda")),D=e("a9ad"),W=e("b848"),U=e("e4cd"),X=e("e707"),F=e("7560"),Y=e("a293"),q=e("dc22"),J=e("c3f0"),Q=Object(A["a"])(Object(b["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),D["a"],W["a"],U["a"],X["a"],O["a"],F["a"]),Z=Q.extend({name:"v-navigation-drawer",directives:{ClickOutside:Y["a"],Resize:q["a"],Touch:J["a"]},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(u["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&U["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(T["g"])(this.height),top:this.isBottom?"auto":Object(T["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(T["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(T["g"])(this.computedTransform,"%"),")"),width:Object(T["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,i){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=i&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var i=t.getBoundingClientRect();this.touchArea={left:i.left+50,right:i.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},i=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(z["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[i])},genDirectives:function(){var t=this,i=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||i.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),i},genListeners:function(){var t=this,i={transitionend:function(i){if(i.target===i.currentTarget){t.$emit("transitionend",i);var e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}}};return this.miniVariant&&(i.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(i.mouseenter=function(){return t.isMouseover=!0},i.mouseleave=function(){return t.isMouseover=!1}),i},genPosition:function(t){var i=Object(T["p"])(this,t);return i?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},i):i},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var i=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(T["p"])(this,"img"))&&i.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),i)}}),G=(e("94aa"),w["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),K=Object(A["a"])(G),tt=K.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,i=this.$refs.img;i&&(i.complete?(this.translate(),this.listeners()):i.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var i={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},e=t("div",{staticClass:"v-parallax__image-container"},[t("img",i)]),n=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,n])}}),it=e("0fd9"),et=e("2fa4"),nt=e("2a7f"),st=Object(a["a"])(o,n,s,!1,null,null,null);i["default"]=st.exports;l()(st,{VApp:h["a"],VAppBar:B,VAppBarNavIcon:V,VBtn:M["a"],VCard:H["a"],VCardActions:j["a"],VCardText:j["c"],VCardTitle:j["d"],VContainer:k["a"],VDialog:$["a"],VFooter:L["a"],VIcon:E["a"],VList:R["a"],VListItem:P["a"],VListItemAction:N["a"],VListItemContent:I["a"],VListItemTitle:I["c"],VNavigationDrawer:Z,VParallax:tt,VRow:it["a"],VSpacer:et["a"],VToolbarTitle:nt["a"]})}}]);
//# sourceMappingURL=chunk-74764d2c.81cc639e.js.map