(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index/index"],{"417b":function(e,t,n){"use strict";var r=n("fc86"),u=n.n(r);u.a},"4d21":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,i,a){try{var s=e[i](a),c=s.value}catch(o){return void n(o)}s.done?t(c):Promise.resolve(c).then(r,u)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,u){var i=e.apply(t,n);function s(e){a(i,r,u,s,c,"next",e)}function c(e){a(i,r,u,s,c,"throw",e)}s(void 0)})}}var c={data:function(){return{swiperArr:[],dotStyle:!1,cardCur:0,list:[],list2:[],msg:[]}},onLoad:function(){this.selectNotice(),this.selectAd(),this.selectSelfProducts(),this.selectCurrPopularProducts()},onPullDownRefresh:function(){this.selectNotice(),this.selectAd(),this.selectSelfProducts(),this.selectCurrPopularProducts()},methods:{preview:function(t){e.previewImage({urls:[t]})},toMore:function(t){e.navigateTo({url:"../productList/productList?type=".concat(t)})},cardSwiper:function(e){this.cardCur=e.detail.current},selectNotice:function(){var t=s(u.default.mark(function t(){var n;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/notices"});case 2:n=t.sent,console.log(r("公告：",n," at pages\\index\\index\\index.vue:108")),void 0!==n?this.msg=n.data.data:e.stopPullDownRefresh();case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),selectAd:function(){var t=s(u.default.mark(function t(){var n;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/ads"});case 2:n=t.sent,console.log(r("广告：",n," at pages\\index\\index\\index.vue:120")),void 0!==n?this.swiperArr=n.data.data:e.stopPullDownRefresh();case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),selectSelfProducts:function(){var t=s(u.default.mark(function t(){var n;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/products",data:{limit:6,page:1,name:null,pType:1,online:1}});case 2:n=t.sent,console.log(r("本店：",n," at pages\\index\\index\\index.vue:139")),void 0!==n?this.list=n.data.data:e.stopPullDownRefresh();case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),selectCurrPopularProducts:function(){var t=s(u.default.mark(function t(){var n;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$util.request({requestUrl:"api/products",data:{limit:6,page:1,name:null,pType:0,online:1}});case 2:n=t.sent,e.stopPullDownRefresh(),console.log(r("流行：",n," at pages\\index\\index\\index.vue:159")),void 0!==n&&(this.list2=n.data.data);case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"51f1":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},"8c52":function(e,t,n){"use strict";(function(e){n("d1f0"),n("921b");r(n("66fd"));var t=r(n("ab4c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},ab4c:function(e,t,n){"use strict";n.r(t);var r=n("51f1"),u=n("fea9");for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);n("417b");var a=n("2877"),s=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,"5e90bfb6",null);t["default"]=s.exports},fc86:function(e,t,n){},fea9:function(e,t,n){"use strict";n.r(t);var r=n("4d21"),u=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=u.a}},[["8c52","common/runtime","common/vendor"]]]);