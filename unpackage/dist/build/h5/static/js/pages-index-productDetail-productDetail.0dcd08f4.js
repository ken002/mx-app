(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-productDetail-productDetail"],{"12f3":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("3b8d")),a={data:function(){return{productDetail:null,userInfo:null,collected:!1,collection:null}},computed:{collectionName:function(){return this.collected?"取消收藏":"收藏"}},onLoad:function(t){var e=JSON.parse(t.params);this.productDetail=e.productDetail},onShow:function(){this.userInfo=uni.getStorageSync("userInfo"),null!==this.userInfo&&""!==this.userInfo&&this.selectIsCollected()},methods:{selectIsCollected:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/isCollected",data:{userId:this.userInfo.account,productId:this.productDetail.id}});case 2:e=t.sent,console.log("是否已收藏:",e),e&&(1===e.data.data.length?(this.collected=!0,this.collection=e.data.data[0]):this.collected=!1);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toPreview:function(){uni.previewImage({current:this.productDetail.image,urls:[this.productDetail.image]})},toCollect:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(null!==this.userInfo&&""!==this.userInfo){t.next=4;break}this.$util.toLogin(),t.next=17;break;case 4:if(this.collected){t.next=12;break}return t.next=7,this.$util.request({requestUrl:"api/collection",method:"POST",data:{userId:this.userInfo.account,productId:this.productDetail.id}});case 7:e=t.sent,console.log("收藏:",e),e&&(this.$util.toast("收藏成功"),this.collected=!0,this.collection=e.data.data),t.next=17;break;case 12:return t.next=14,this.$util.request({requestUrl:"api/collection/".concat(this.collection.id),method:"DELETE"});case 14:n=t.sent,console.log("取消收藏:",n),n&&(this.$util.toast("已从收藏中移除"),this.collected=!1,this.collection=null);case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=a},4975:function(t,e,n){"use strict";n.r(e);var i=n("5465"),r=n("7ef7");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("e5df");var o=n("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"156870ce",null);e["default"]=c.exports},5465:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"image-container"},[0===t.productDetail.showType?n("image-cache",{attrs:{src:t.productDetail.image,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPreview.apply(void 0,arguments)}}}):n("video-cache",{attrs:{src:t.productDetail.video}})],1),n("v-uni-view",{staticClass:"padding"},[n("v-uni-view",[t._v(t._s(t.productDetail.name))]),n("v-uni-view",[t._v(t._s(t.productDetail.intro))]),n("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCollect.apply(void 0,arguments)}}},[t._v(t._s(t.collectionName))])],1)],1)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"7ef7":function(t,e,n){"use strict";n.r(e);var i=n("12f3"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},ac72:function(t,e,n){var i=n("d518");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("f79ff738",i,!0,{sourceMap:!1,shadowMode:!1})},d518:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.image-container[data-v-156870ce]{height:200px}.padding[data-v-156870ce]{padding:20px}',""])},e5df:function(t,e,n){"use strict";var i=n("ac72"),r=n.n(i);r.a}}]);