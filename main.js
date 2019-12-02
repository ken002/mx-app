import Vue from 'vue'
import App from './App'
import util from './common/util.js'
Vue.config.productionTip = false
Vue.prototype.$util=util
App.mpType = 'app'

import loading from './components/common/loading/loading';
Vue.component('loading',loading);

import imageCache from './components/common/image-cache/image-cache';
Vue.component('image-cache',imageCache);

const app = new Vue({
    ...App
})
app.$mount()
