(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/chunLei-modal/chunLei-modal"],{"30cb":function(t,n,e){"use strict";var a=e("f136"),i=e.n(a);i.a},"621e":function(t,n,e){"use strict";e.r(n);var a=e("ede3"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=i.a},c1ab:function(t,n,e){"use strict";e.r(n);var a=e("da18"),i=e("621e");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("30cb");var o=e("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},da18:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},ede3:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,a,i,r,o){try{var u=t[r](o),s=u.value}catch(c){return void e(c)}u.done?n(s):Promise.resolve(s).then(a,i)}function o(t){return function(){var n=this,e=arguments;return new Promise(function(a,i){var o=t.apply(n,e);function u(t){r(o,a,i,u,s,"next",t)}function s(t){r(o,a,i,u,s,"throw",t)}u(void 0)})}}var u={props:{type:{type:String,default:"default"},value:{type:Boolean,default:!1},maskEnable:{type:Boolean,default:!0},mData:{type:[Object,Array],default:function(){}},nav:{type:Boolean,default:!0},navMask:{type:Boolean,default:!1}},data:function(){return{navList:[],tabbarList:[]}},mounted:function(){this.init()},methods:{checkboxChange:function(t){for(var n=this.mData,e=t.detail.value,a=0,i=n.length;a<i;++a){var r=n[a];e.includes(r.title)?this.$set(r,"flag",!0):this.$set(r,"flag",!1)}},inputConfirm:function(){this.$emit("onConfirm",this.mData.content)},tapCancel:function(){this.$emit("cancel")},tapConfirm:function(t){this.$emit("onConfirm",t),this.$emit("input",!1)},tapMask:function(){this.maskEnable&&("multiSelect"==this.type?this.$emit("onConfirm",this.mData):this.$emit("cancel",this.mData),this.$emit("input",!1))},creatPlusMask:function(t,n,e){for(var a=this,i=1;i<=10;i++){var r=new plus.nativeObj.View("nav",{top:"0px",left:"0px",height:"".concat(t,"px"),width:"100%"});r.draw([{tag:"rect",id:"rect",color:"rgba(0,0,0,0.1)",position:{top:"0px",left:"0px",width:"100%",height:"100%"}}]),r.addEventListener("click",function(t){a.tapMask()},!1);var o=new plus.nativeObj.View("tabbar",{bottom:"0px",left:"0px",height:"".concat(n,"px"),width:"100%"});o.draw([{tag:"rect",id:"rect",color:"rgba(0,0,0,0.1)",position:{top:"0px",left:"0px",width:"100%",height:"100%"}}]),o.addEventListener("click",function(t){a.tapMask()},!1),this.navList.push(r),this.tabbarList.push(o)}},init:function(){var n=o(a.default.mark(function n(){var e,i,r;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e=new Promise(function(n,e){t.getSystemInfo({success:function(t){var e;e=t.statusBarHeight+44,n(e)}})}),n.next=3,e;case 3:i=n.sent,i=this.nav?i:0,r=t.getSystemInfoSync().screenHeight-t.getSystemInfoSync().windowHeight-i,this.creatPlusMask(i,r,.6);case 7:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),showPlusMask:function(){var t=this,n=0,e=setInterval(function(){9==n?clearInterval(e):(t.navList[n].show(),t.tabbarList[n].show(),n++)},30)}},watch:{value:{immediate:!0,handler:function(t,n){if(this.navMask)if(t)this.showPlusMask(.6);else{var e=!0,a=!1,i=void 0;try{for(var r,o=this.navList[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var u=r.value;u.hide()}}catch(v){a=!0,i=v}finally{try{e||null==o.return||o.return()}finally{if(a)throw i}}var s=!0,c=!1,l=void 0;try{for(var f,h=this.tabbarList[Symbol.iterator]();!(s=(f=h.next()).done);s=!0){var d=f.value;d.hide()}}catch(v){c=!0,l=v}finally{try{s||null==h.return||h.return()}finally{if(c)throw l}}}}}}};n.default=u}).call(this,e("6e42")["default"])},f136:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/chunLei-modal/chunLei-modal-create-component',
    {
        'components/common/chunLei-modal/chunLei-modal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("c1ab"))
        })
    },
    [['components/common/chunLei-modal/chunLei-modal-create-component']]
]);
