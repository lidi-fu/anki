(function(){"use strict";var n={8032:function(n,e,o){var t=o(5130),c=o(6768);function g(n,e,o,t,g,i){const r=(0,c.g2)("router-view");return(0,c.uX)(),(0,c.Wv)(r)}var i={name:"App",components:{}},r=o(1241);const s=(0,r.A)(i,[["render",g]]);var a=s,l=o(1387);function m(n,e,o,t,g,i){return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("button",{class:"back-button",onClick:e[0]||(e[0]=(...n)=>i.goBack&&i.goBack(...n))},e[1]||(e[1]=[(0,c.Lk)("img",{src:"/img/back.svg",alt:"Back"},null,-1)])),e[2]||(e[2]=(0,c.Fv)('<img src="/img/trends1.png" alt="Trends Image"><img src="/img/trends2.png" alt="Trends Image"><img src="/img/trends3.png" alt="Trends Image"><img src="/img/trends4.png" alt="Trends Image"><img src="/img/trends5.png" alt="Trends Image"><img src="/img/trends6.png" alt="Trends Image"><img src="/img/trends7.png" alt="Trends Image"><img src="/img/trends8.png" alt="Trends Image"><img src="/img/trends9.png" alt="Trends Image"><img src="/img/trends10.png" alt="Trends Image"><img src="/img/trends11.png" alt="Trends Image">',11))],64)}var u={name:"TrendsPage",methods:{goBack(){this.$router.go(-1)}}};const p=(0,r.A)(u,[["render",m]]);var d=p;function k(n,e,o,t,g,i){const r=(0,c.g2)("ImageCarousel");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.Lk)("button",{class:"back-button",onClick:e[0]||(e[0]=(...n)=>i.goBack&&i.goBack(...n))},e[1]||(e[1]=[(0,c.Lk)("img",{src:"/img/back.svg",alt:"Back"},null,-1)])),e[2]||(e[2]=(0,c.Lk)("img",{src:"/img/collection0.png",alt:"Homepage Image"},null,-1)),(0,c.bF)(r,{"background-image":"/img/collection1.png",images:["/img/collection1-1.png","/img/collection1-2.png","/img/collection1-3.png","/img/collection1-4.png"],customClass:"custom-carousel-1"}),(0,c.bF)(r,{"background-image":"/img/collection2.png",images:["/img/collection2-1.png","/img/collection2-2.png","/img/collection2-3.png"],customClass:"custom-carousel-2"}),(0,c.bF)(r,{"background-image":"/img/collection3.png",images:["/img/collection3-1.png","/img/collection3-2.png","/img/collection3-3.png","/img/collection3-4.png"],customClass:"custom-carousel-3"}),(0,c.bF)(r,{"background-image":"/img/collection4.png",images:["/img/collection4-1.png","/img/collection4-2.png","/img/collection4-3.png","/img/collection4-4.png","/img/collection4-5.png","/img/collection4-6.png","/img/collection4-7.png"],customClass:"custom-carousel-4"}),(0,c.bF)(r,{"background-image":"/img/collection5.png",images:["/img/collection5-1.png","/img/collection5-2.png","/img/collection5-3.png","/img/collection5-4.png"],customClass:"custom-carousel-5"}),(0,c.bF)(r,{"background-image":"/img/collection6.png",images:["/img/collection6-1.png","/img/collection6-2.png","/img/collection6-3.png","/img/collection6-4.png"],customClass:"custom-carousel-6"}),(0,c.bF)(r,{"background-image":"/img/collection7.png",images:["/img/collection7-1.png","/img/collection7-2.png","/img/collection7-3.png"],customClass:"custom-carousel-7"}),(0,c.bF)(r,{"background-image":"/img/collection8.png",images:["/img/collection8-1.png","/img/collection8-2.png","/img/collection8-3.png"],customClass:"custom-carousel-8"})],64)}var v=o(4232);const f=["src"],b={class:"pic_button"},I=["src"],h={class:"buttons"};function C(n,e,o,t,g,i){return(0,c.uX)(),(0,c.CE)("div",{class:(0,v.C4)(["image-container",o.customClass])},[(0,c.Lk)("img",{src:o.backgroundImage,alt:"Background Image",class:"background-image"},null,8,f),(0,c.Lk)("div",b,[(0,c.Lk)("img",{src:i.currentImage,alt:"Collection Image",class:"current-image"},null,8,I),(0,c.Lk)("div",h,[(0,c.Lk)("img",{src:"/img/previous.svg",alt:"Previous",class:"button prev-button",onClick:e[0]||(e[0]=(...n)=>i.prevImage&&i.prevImage(...n))}),(0,c.Lk)("img",{src:"/img/next.svg",alt:"Next",class:"button next-button",onClick:e[1]||(e[1]=(...n)=>i.nextImage&&i.nextImage(...n))})])])],2)}var T={name:"ImageCarousel",props:{backgroundImage:{type:String,required:!0},images:{type:Array,required:!0},customClass:{type:String,default:""}},data(){return{currentImageIndex:0}},computed:{currentImage(){return this.images[this.currentImageIndex]}},methods:{prevImage(){this.currentImageIndex>0?this.currentImageIndex--:this.currentImageIndex=this.images.length-1},nextImage(){this.currentImageIndex<this.images.length-1?this.currentImageIndex++:this.currentImageIndex=0}}};const x=(0,r.A)(T,[["render",C],["__scopeId","data-v-3f7b0c20"]]);var L=x,y={name:"CollectionPage",components:{ImageCarousel:L},methods:{goBack(){this.$router.go(-1)}}};const O=(0,r.A)(y,[["render",k]]);var F=O;const w={class:"main-content"},B={class:"categories"};function E(n,e,o,t,g,i){return(0,c.uX)(),(0,c.CE)("div",w,[e[2]||(e[2]=(0,c.Lk)("img",{src:"/img/homepage-bg.png",alt:"Homepage Image"},null,-1)),(0,c.Lk)("div",B,[(0,c.Lk)("h1",{class:"trends",onClick:e[0]||(e[0]=(...n)=>i.goToTrends&&i.goToTrends(...n))},"TRENDS"),(0,c.Lk)("h1",{class:"collection",onClick:e[1]||(e[1]=(...n)=>i.goToCollection&&i.goToCollection(...n))},"COLLECTION")])])}o(4114);var A={methods:{goToTrends(){this.$router.push("/trends")},goToCollection(){this.$router.push("/collection")}}};const _=(0,r.A)(A,[["render",E],["__scopeId","data-v-1f33d9a8"]]);var j=_;const P=[{path:"/",component:j},{path:"/trends",component:d},{path:"/collection",component:F}],X=(0,l.aE)({history:(0,l.LA)(),routes:P});var $=X;(0,t.Ef)(a).use($).mount("#app")}},e={};function o(t){var c=e[t];if(void 0!==c)return c.exports;var g=e[t]={exports:{}};return n[t].call(g.exports,g,g.exports,o),g.exports}o.m=n,function(){var n=[];o.O=function(e,t,c,g){if(!t){var i=1/0;for(l=0;l<n.length;l++){t=n[l][0],c=n[l][1],g=n[l][2];for(var r=!0,s=0;s<t.length;s++)(!1&g||i>=g)&&Object.keys(o.O).every((function(n){return o.O[n](t[s])}))?t.splice(s--,1):(r=!1,g<i&&(i=g));if(r){n.splice(l--,1);var a=c();void 0!==a&&(e=a)}}return e}g=g||0;for(var l=n.length;l>0&&n[l-1][2]>g;l--)n[l]=n[l-1];n[l]=[t,c,g]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var c,g,i=t[0],r=t[1],s=t[2],a=0;if(i.some((function(e){return 0!==n[e]}))){for(c in r)o.o(r,c)&&(o.m[c]=r[c]);if(s)var l=s(o)}for(e&&e(t);a<i.length;a++)g=i[a],o.o(n,g)&&n[g]&&n[g][0](),n[g]=0;return o.O(l)},t=self["webpackChunkanki"]=self["webpackChunkanki"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(8032)}));t=o.O(t)})();
//# sourceMappingURL=app.f031d2db.js.map