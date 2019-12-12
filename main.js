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

import videoCache from './components/current/video-cache/video-cache';
Vue.component('video-cache',videoCache);

import videoPlay from './components/current/video-play/video-play';
Vue.component('video-play',videoPlay);

// 注册全局modal组件
import chunLeiModal from '@/components/common/chunLei-modal/chunLei-modal.vue'
Vue.component('chunLei-modal',chunLeiModal);
const app = new Vue({
    ...App
})
app.$mount()
